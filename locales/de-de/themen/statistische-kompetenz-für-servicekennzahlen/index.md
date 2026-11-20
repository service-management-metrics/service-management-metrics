# Statistische Kompetenz für Servicekennzahlen

**Ticket- und Flussdaten sind schief, klumpig und oft dünn. Berichten Sie deshalb Mediane und hohe Perzentile statt Durchschnitten, sagen Sie, wie viele Elemente hinter jeder Rate stehen, und trennen Sie gewöhnliche Schwankung von echter Veränderung, bevor jemand reagiert.**

## Überblick und Motivation

Die meisten Servicekennzahlen kommen als einzelne Zahl auf einem Dashboard an: durchschnittliche Lösungszeit, Prozent der Incidents, die innerhalb des Ziels gelöst wurden, in dieser Woche geschlossene Tickets. Eine einzelne Zahl fühlt sich präzise an. Meist ist sie eine verdichtete Zusammenfassung einer unordentlichen Menge von Ereignissen, und die Verdichtung entscheidet, was der Leser sieht. Statistische Kompetenz ist im Sinne dieses Buches die kleine Menge von Gewohnheiten, die die Zusammenfassung ehrlich hält: eine Zusammenfassung zu wählen, die zur Form der Daten passt, zu wissen, wie viele Daten dahinterstehen, und eine echte Veränderung vom Rauschen zu unterscheiden.

Die Form der Servicedaten ist das erste Problem. Zeitmessgrößen wie Lösungszeit, Zykluszeit und Wartezeit sind bei null begrenzt und haben rechts einen langen Auslauf. Die meisten Elemente sind schnell fertig, einige brauchen sehr lang. Solche Daten sind [schief](https://en.wikipedia.org/wiki/Skewness), und das arithmetische Mittel wird zum Auslauf gezogen, sodass ein einziges festhängendes Ticket den Durchschnitt stärker bewegen kann als hundert Routinetickets. Der [Median](https://en.wikipedia.org/wiki/Median), der mittlere Wert bei sortierten Elementen, wird weit weniger beeinflusst. Ein [Perzentil](https://en.wikipedia.org/wiki/Percentile) verallgemeinert ihn: Das 85. Perzentil ist der Wert, innerhalb dessen 85 Prozent der Elemente fertig werden. Dauern dieser Art werden oft mit einer [Log-Normalverteilung](https://en.wikipedia.org/wiki/Log-normal_distribution) modelliert, bei der der Logarithmus des Wertes symmetrisch ist. Die Lehre: „Typisch“ und „durchschnittlich“ unterscheiden sich bei schiefen Daten.

Die Stichprobengröße ist das zweite Problem. Ein Team, das in einem Quartal 12 Priorität-1-Incidents löst und „83 Prozent im Ziel“ berichtet, beschreibt 10 von 12. Ein weiterer Verfehlungsfall würde die Zahl um acht Punkte verschieben. Die ehrliche Aussage enthält die Anzahl und oft eine Spanne. Ein [Konfidenzintervall](https://en.wikipedia.org/wiki/Confidence_interval) ist eine aus den Daten berechnete Spanne, die ausdrückt, wie weit der wahre Wert plausibel vom beobachteten entfernt liegen könnte. Intervalle sind bei kleinen Stichproben breit und bei großen schmal, was die richtige Botschaft für ein Quartal mit 12 Incidents ist.

Die Schwankung ist das dritte Problem. Jeder Prozess erzeugt Zahlen, die von Woche zu Woche wackeln, ohne dass sich etwas geändert hat. Walter Shewhart, der in den 1920er Jahren an der Qualität in der Fertigung arbeitete, trennte dieses Routinewackeln von Signalen, die eine Untersuchung verdienen, und gab uns die [Kontrollkarte](https://en.wikipedia.org/wiki/Control_chart). Solche Karten auf einen Prozess anzuwenden heißt [statistische Prozesslenkung](https://en.wikipedia.org/wiki/Statistical_process_control). Zu diesem letzten Fehler gehört die [Regression zur Mitte](https://en.wikipedia.org/wiki/Regression_toward_the_mean): Auf einen Extremwert folgt tendenziell ein weniger extremer, sodass die Woche nach einer schrecklichen Woche wie eine Erholung aussieht, ob jemand etwas getan hat oder nicht.

Agile Flusspraxis, etwa die Verwendung von Zykluszeit-Perzentilen und Alter von Arbeitselementen im Kanban Guide, verlangt bereits Verteilungen und als Wahrscheinlichkeiten ausgedrückte Prognosen (siehe Thema 2.1, Flussmaße). In ITIL 4 hängen die Praktik Messung und Berichterstattung und die Praktik der kontinuierlichen Verbesserung beide von Messgrößen ab, die bedeuten, was sie zu bedeuten scheinen, und das Service-Level-Management hängt von Zielen ab, die gegen realistische Schwankung gesetzt werden. Statistische Kompetenz ist die gemeinsame Schicht unter beiden. Sie stützt auch die Leitplanke aus Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen: Ein Team, das die gesamte Verteilung zeigt, hat weniger Stellen, an denen es einen manipulierten Durchschnitt verstecken kann.

Gewöhnliche Schwankung (Common-Cause-Variation) ist in einen Prozess eingebaut, und besondere Schwankung (Special-Cause-Variation) stammt von etwas Bestimmtem, das sich geändert hat oder schiefgegangen ist. Ein Service Level Agreement (SLA) ist eine dokumentierte Zusage an einen Kunden, und ein Service Level Objective (SLO) ist ein Ziel für eine Messgröße.

## Leitprinzipien

- **Die Zusammenfassung an die Form anpassen.** Verwenden Sie Mediane und Perzentile für Dauern und zeigen Sie die vollständige Verteilung, wenn die Entscheidung zählt. Heben Sie den Mittelwert für etwa symmetrische Daten oder für Summen wie Kosten auf.
- **Jede Rate trägt ihre Anzahl.** Ein Prozentsatz ohne Zähler und Nenner ist eine Behauptung ohne Beleg. Zeigen Sie unterhalb einer festgelegten Mindestanzahl die Rohelemente statt einer Rate.
- **Gewöhnliche Schwankung ist keine Nachricht.** Kennen Sie den normalen Bereich einer Messgröße, bevor Sie reagieren. Reagieren Sie auf Signale, nicht auf jede Bewegung.
- **Unsicherheit gehört zur Antwort.** Drücken Sie Prognosen als Wahrscheinlichkeiten aus („85 Prozent der Elemente sind innerhalb von 9 Tagen fertig“) und Schätzungen als Spannen und widerstehen Sie falscher Präzision.
- **Verteilungen dem Team zeigen, dem die Arbeit gehört.** Rohelemente und Histogramme machen ungewöhnliche Fälle sichtbar und erschweren stille Manipulation.
- **Korrelation, Auswahl und Zeitpunkt erklären viele „Verbesserungen“.** Fragen Sie, was sich sonst geändert hat, wer in den Daten fehlt und ob der Ausgangspunkt ungewöhnlich schlecht war.
- **Die Statistik verhältnismäßig halten.** Ein Team braucht eine Handvoll konsequent angewandter Techniken, keinen Statistikkurs. Erklären Sie jedes Diagramm in einfachen Worten.

## Kennzahlendefinitionen

Die folgenden Kennzahlen beschreiben die statistische Qualität einer Kennzahlenpraxis und die Verteilung der Servicearbeit. Zeitmessgrößen verwenden die in jeder Zeile genannten Uhren, und die Definitionen sind dazu gedacht, von den folgenden Themen wiederverwendet zu werden (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents, und Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz).

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mediane Lösungszeit | Die mittlere Lösungszeit der im Zeitraum gelösten Incidents | 50. Perzentil von (Lösungszeitstempel minus Erstellungszeitstempel) über die im Zeitraum gelösten Incidents; die Uhr startet bei der Ticketerstellung und stoppt bei der Lösung; Pausen werden gesondert berichtet, nicht abgezogen; stornierte und doppelte Tickets sind ausgeschlossen | Stunden oder Tage | Statusverlauf des ITSM-Werkzeugs | Incident-Management; Messung und Berichterstattung | Mediane Zykluszeit | Wöchentlich oder monatlich |
| Lösungszeit im hohen Perzentil | Die Zeit, innerhalb derer die meisten Incidents gelöst werden, mit benanntem Perzentil | 85. (oder 95.) Perzentil derselben verstrichenen Zeit wie oben; nur berechnet, wenn mindestens 20 Elemente gelöst wurden, sonst werden die Rohelemente aufgelistet | Stunden oder Tage | Statusverlauf des ITSM-Werkzeugs | Incident-Management; Service-Level-Management | Perzentil-Prognose der Zykluszeit | Wöchentlich oder monatlich |
| Alter des ältesten offenen Elements | Alter des ältesten noch offenen Elements plus die Anzahl der Elemente, die älter als das hohe Perzentil sind | jetzt minus Erstellungszeitstempel für offene Elemente, keine Pause abgezogen; zählt alle offenen Elemente in der Service-Warteschlange einschließlich der auf den Kunden wartenden | Tage | ITSM-Werkzeug oder Issue-Tracker | Incident-Management; Problemmanagement | Alter von Arbeitselementen | Wöchentlich |
| Berichtsabdeckung von Raten | Anteil der berichteten Raten, die Zähler, Nenner und eine Prüfung der Mindestanzahl zeigen | mit Anzahlen und Stichprobenmarkierung berichtete Raten / berichtete Raten; zählt nur im Review-Paket des Zeitraums veröffentlichte Raten | Prozent | Kennzahlenregister (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen) | Messung und Berichterstattung | Arbeitsvereinbarungen | Vierteljährlich |
| Signalrate der Kontrollkarte | Anteil der Punkte auf der Kontrollkarte einer Messgröße, die nach den schriftlichen Regeln des Teams besondere Schwankung signalisieren | nach den Regeln markierte Punkte / aufgetragene Punkte, über die letzten 20 oder mehr Punkte; die Regeln sind im Voraus festgelegt und protokolliert | Prozent | Kontrollkarten-Werkzeug oder Tabellenkalkulation | Kontinuierliche Verbesserung | Retrospektive Prüfung des Prozesses | Monatlich |
| Intervallbreite | Breite der angegebenen Unsicherheitsspanne einer Hauptrate | obere Grenze minus untere Grenze des Intervalls, mit der im Register genannten Methode, für die Hauptrate des Zeitraums | Prozentpunkte | Berechnet aus ITSM-Zählungen | Service-Level-Management | Prognosespanne in der Planung | Monatlich |

Nennt ein Vertrag einen Mittelwert, berichten Sie die vertragliche Zahl und zeigen Sie Median und Perzentil daneben.

## Empfehlungen

### Zeitdaten ehrlich zusammenfassen

**1. Verwenden Sie standardmäßig den Median und ein benanntes hohes Perzentil.** Veröffentlichen Sie bei Lösungszeit, Zykluszeit und Erfüllungszeit den Median und das 85. oder 95. Perzentil zusammen und schreiben Sie das Perzentil in den Kennzahlennamen. Der Median sagt, was typisch ist, und das hohe Perzentil sagt, was man einem Kunden vernünftigerweise zusagen kann. Müssen Sie für eine Zusage eine Zahl wählen, wählen Sie das Perzentil.

**2. Zeigen Sie die Form ebenso wie die Zusammenfassung.** Ein Histogramm oder ein Streudiagramm der Lösungszeit nach Schließdatum zeigt Gruppierungen, lange Ausläufer und plötzliche Verschiebungen, die keine Zusammenfassung zeigt. Widersprechen sich Bild und Zahl, glauben Sie dem Bild und untersuchen Sie die Zahl.

**3. Fügen Sie das Alter des ältesten offenen Elements hinzu.** Perzentile fertiger Arbeit blicken zurück und ignorieren alles, was noch feststeckt. Berichten Sie das älteste offene Element und wie viele offene Elemente bereits älter als Ihr hohes Perzentil sind (siehe Thema 2.1, Flussmaße). Das ist das nützlichste einzelne Korrektiv für Durchschnitte, die sich verbessern, weil schwere Elemente altern gelassen werden.

### Kleine Stichproben und Unsicherheit respektieren

**4. Veröffentlichen Sie die Anzahl mit jeder Rate.** Schreiben Sie „10 von 12 im Ziel gelöst“ statt „83 Prozent“. Fügen Sie eine Regel hinzu, dass Raten auf Basis von weniger als einer festgelegten Zahl von Elementen als Anzahlen oder als zugrunde liegende Elemente gezeigt werden. Die Schwelle ist ein Urteil: Schreiben Sie sie auf, überprüfen Sie sie und wenden Sie sie überall an.

**5. Verwenden Sie Intervalle für Hauptraten und Prognosen.** Berechnen Sie für einen Anteil wie den der fehlschlagenden Changes ein Konfidenzintervall mit einer im Team vereinbarten Methode und halten Sie die Methode im Register fest. Für Lieferprognosen sagt eine stichprobenbasierte Spanne (zum Beispiel „wahrscheinlich zwischen 8 und 14 Elementen pro Woche“) Planern mehr als eine einzelne Durchsatzzahl. Ist das Intervall zu breit, um eine Entscheidung zu stützen, sagen Sie das.

### Signal von Rauschen unterscheiden

**6. Zeichnen Sie Kontrollkarten für die Messgrößen, auf die Sie reagieren.** Eine einfache Einzelwertkarte trägt jeden Punkt in zeitlicher Reihenfolge mit Mittellinie und aus den Daten berechneten Grenzen auf und markiert Punkte außerhalb der Grenzen oder Serien auf einer Seite der Mitte. Beginnen Sie mit der wöchentlichen medianen Lösungszeit und dem wöchentlichen Volumen. Schreiben Sie die Signalregeln einmal auf (zum Beispiel ein Punkt jenseits der Grenzen oder eine Serie von acht auf einer Seite) und halten Sie sie fest, damit das Team die Regeln nicht anpasst, bis die Karte zu seinem Gefühl passt.

**7. Reagieren Sie auf Signale und lassen Sie gewöhnliche Schwankung in Ruhe.** Liegt ein Punkt innerhalb der Grenzen, widerstehen Sie einer Erklärung dafür; es ist der Prozess, der sich normal verhält. Erscheint ein Signal, fragen Sie, was sich in dieser Woche geändert hat: ein Release, eine Besetzungslücke, ein Lieferantenausfall, eine neue Kategorie. Ist der Prozess stabil, aber unbefriedigend, ist die Verbesserung eine Änderung am System, nicht ein Gespräch mit dem, der die rote Woche hatte.

**8. Rechnen Sie nach einem extremen Zeitraum mit Regression zur Mitte.** Starten Sie eine Initiative im schlechtesten Monat des Jahres, folgt zufällig etwas Verbesserung. Vergleichen Sie mit einer längeren Baseline, mit einem ähnlichen Service, der sich nicht geändert hat, oder mit den Kontrollgrenzen, bevor Sie der Initiative den Erfolg zuschreiben. Ein Vorher-Nachher-Paar aus zwei Punkten ist die schwächste Form von Beleg.

### Sorgfältig über Ursache und Auswahl nachdenken

**9. Fragen Sie, was in den Daten fehlt.** Umfrageantworten kommen von Menschen, die sich zum Antworten entschieden haben. Geschlossene Tickets schließen die noch offenen aus. Listen Sie vor einer Schlussfolgerung auf, wer oder was fehlt und wie das das Ergebnis neigen könnte.

**10. Ändern Sie Definitionen mit Absicht und markieren Sie sie im Diagramm.** Ein neues Statusmodell, eine neue Prioritätsmatrix oder eine neue Kategorienliste ändert die Daten, ohne die Arbeit zu ändern. Annotieren Sie jede Änderung im Diagramm und starten Sie die Kontrollgrenzen danach neu (siehe Thema 1.5, Datenquellen und Instrumentierung).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Mediane Lösungszeit | Schnelle Tickets zuerst schließen und schwere offen lassen; ein Ticket in mehrere leichte aufteilen; die Uhr in einem Kundenwartestatus pausieren | Lösungszeit im hohen Perzentil und Alter des ältesten offenen Elements; Zeitanteil in Pausenstatus; Rate verknüpfter Tickets |
| Lösungszeit im hohen Perzentil | Ein Perzentil wählen, das das Ergebnis schmeichelt, oder es zwischen Berichten ändern; lange Fälle als „Ausreißer“ ausschließen oder umklassifizieren | Perzentil im Register festgelegt; eine Liste ausgeschlossener Elemente mit Gründen; Alter des ältesten offenen Elements |
| Alter des ältesten offenen Elements | Das älteste Element schließen oder zusammenführen, ohne es zu lösen; es in eine andere Warteschlange oder Kategorie verschieben | Wiedereröffnungsrate; stichprobenartige Prüfung der ältesten geschlossenen Elemente; Zahl der Warteschlangenübergaben |
| Berichtsabdeckung von Raten | Eine Anzahl im Kleingedruckten anhängen, während Schlagzeilen weiter mit dem Prozentsatz führen; die Mindestanzahl so niedrig setzen, dass sie nie auslöst | Das tatsächliche Dashboard prüfen, nicht das Register; Mindestanzahl zusammen mit der Intervallbreite überprüfen |
| Signalrate der Kontrollkarte | Die Grenzen erweitern, Regeln hinzufügen oder die Baseline neu starten, damit Signale verschwinden; Punkte durch Änderung der Messgröße verschieben | Regeln und Grenzen mit Änderungsverlauf im Register; mit dem rohen Histogramm vergleichen |
| Intervallbreite | Eine Methode oder ein Fenster wählen, das eine schmale Spanne erzeugt; unähnliche Services poolen, um die Stichprobe zu vergrößern | Methode im Register benannt; Aufschlüsselung nach Service auf Anfrage verfügbar; gepoolte und ungepoolte Ergebnisse verglichen |

Ein gesunder Befund zeigt Mediane und Perzentile, die sich in dieselbe Richtung bewegen wie das Erleben der Nutzer, eine kurze Liste alter Elemente, die schrumpft, ohne still umklassifiziert zu werden, und Raten, die mit ihren Anzahlen erscheinen. Die Signalrate der Kontrollkarte sollte niedrig und ungleich null sein: Eine Karte, die nie signalisiert, kann es womöglich nicht, und eine, die immer signalisiert, spiegelt einen instabilen Prozess oder schlecht gewählte Regeln.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Mittlere Lösungszeit | Einfach, passt zu vielen Verträgen, leicht aufzusummieren | Vom Auslauf dominiert; verbirgt, was Kunden typischerweise erleben |
| Median plus hohes Perzentil | Robust gegen Ausreißer; stützt Zusagen an Kunden | Braucht etwas Erklärung; Perzentile brauchen genug Elemente, um stabil zu sein |
| Rohe Raten ohne Anzahlen | Kompakt und vertraut | Verbirgt kleine Stichproben und lädt zum Überinterpretieren ein |
| Raten mit Anzahlen und Intervallen | Ehrlich bei Unsicherheit; entmutigt Überreaktion | Wirkt weniger entschieden; Intervallmethoden brauchen Einigung |
| Kontrollkarten | Trennen Signal von Rauschen; leiten, wann zu handeln ist | Brauchen genug Punkte und stabile Definitionen; Grenzen können falsch gelesen oder manipuliert werden |
| Vorher-Nachher-Vergleich | Schnell und leicht zu vermitteln | Anfällig für Regression zur Mitte und für gleichzeitige Änderungen |

Für einen Service mit einer Handvoll Incidents pro Jahr ist keine Statistik stabil, und die richtige Methode ist, jeden Incident zu lesen. Für einen Desk mit hohem Volumen sind verteilungsbewusste Messgrößen billig und klar überlegen. Wählen Sie nach Volumen und nach dem Gewicht der Entscheidung.

## Fragen für die Diskussion im Team

**1. Welche unserer heutigen Dashboard-Zahlen ist ein Durchschnitt von etwas Schiefem, und was würden Median und 95. Perzentil zeigen?**
Wählen Sie die am meisten beachtete Zeitmessgröße und berechnen Sie vor dem Meeting alle drei auf derselben Menge von Elementen. Fragen Sie, ob die Geschichte, die der Durchschnitt erzählt, zu dem passt, was Nutzer sagen. Einigen Sie sich zum Schluss, welche Zusammenfassung zur Schlagzeile wird und wo die anderen erscheinen.

**2. Wie viele Elemente stehen hinter unserem meistzitierten Prozentsatz, und würden wir ihn noch zitieren, wenn wir die Anzahlen schrieben?**
Listen Sie die drei Prozentsätze auf, die die Führung am häufigsten liest. Schreiben Sie daneben Zähler und Nenner der letzten Periode. Fragen Sie, was ein einziger zusätzlicher Erfolg oder Misserfolg mit der Zahl täte. Einigen Sie sich auf eine Mindestanzahl, unterhalb derer das Team die Elemente statt einer Rate zeigt.

**3. Wann haben wir zuletzt eine Verbesserung einer Initiative zugeschrieben, und was war damals sonst noch wahr?**
Wählen Sie eine jüngste Erfolgsgeschichte. Fragen Sie, wann die Messgröße am schlechtesten war, wie die längere Historie aussieht und ob sich auch ein vergleichbarer Service verbessert hat. Halten Sie den Ton neugierig.

**4. Was ist der normale Bereich unserer wichtigsten Messgrößen, und wer könnte sagen, dass eine bestimmte Woche ungewöhnlich ist?**
Tragen Sie die letzten 20 oder mehr Wochenwerte einer Messgröße auf und zeichnen Sie Mitte und Grenzen ein oder berechnen Sie sie grob. Fragen Sie, auf welche Wochen das Team reagiert hat, die innerhalb des Bereichs lagen. Einigen Sie sich, wem die Karte gehört und wo die Signalregeln stehen.

**5. Wer oder was fehlt in unseren Daten?**
Listen Sie die Quellen der Messgröße auf: geschlossene Tickets, Umfrageantworten, überwachte Services, Werkzeuge mit Zeitstempeln. Fragen Sie bei jeder, wer ausgeschlossen ist und warum. Halten Sie jede Lücke als Korrektur oder Vorbehalt fest.

**6. Wie würden wir der Führung eine breite Spanne oder ein „wir wissen es noch nicht“ erklären, ohne dass es wie eine Ausrede klingt?**
Proben Sie die Formulierung an einem echten Beispiel: „Zwischen 70 und 95 Prozent, bei 12 Incidents; wir erwarten, das nach dem nächsten Quartal einzugrenzen.“ Fragen Sie, was das Publikum entscheiden muss und ob die Spanne die Entscheidung ändert. Schreiben Sie im Meeting ein kurzes Skript.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams nutzen Zykluszeit und Durchsatz für Prognosen und profitieren am meisten von perzentilbasierten Prognosen statt Durchschnitten (siehe Thema 2.1, Flussmaße). Eine als Spanne mit Wahrscheinlichkeit formulierte Prognose lässt sich leichter vertreten als ein Datum. Widerstehen Sie dem Lesen der Veränderung einer Periode als Trend (siehe Thema 2.5, Kennzahlen für Lieferprognosen und Planung).

### Service- und Betriebsteams

Betriebsteams besitzen die Ticketdaten und die Incident-Uhren und sind deshalb am besten platziert, Mediane, Perzentile und das älteste offene Element zu veröffentlichen und die Pausenregeln zu erklären. Sie sollten wöchentliches Volumen und Lösungszeit mit Kontrollgrenzen auftragen, damit eine echte Verschiebung, etwa durch ein fehlerhaftes Release, von einer schlechten Woche unterschieden wird. Hat ein Service wenige Incidents, sollten sie jeden einzelnen prüfen, statt Raten zu berechnen (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents).

### Führung und Governance

Führungskräfte stellen die Fragen, die prägen, was Teams zeigen. Wer bei jedem Wackeln fragt „Warum ist das gestiegen?“, trainiert die Organisation, Rauschen zu erklären und zu verstecken. Führungskräfte sollten fragen, ob eine Bewegung innerhalb des normalen Bereichs liegt, wie viele Elemente hinter einer Zahl stehen und was sich im Prozess geändert hat. Governance-Gremien können Anzahlen bei Hauptraten verlangen.

### Kunden und Nutzer

Kunden erleben einzelne Fälle, keine Durchschnitte. Sie erinnern sich an die eine Anfrage, die fünf Wochen dauerte, und ein Durchschnitt von zwei Tagen heilt diese Erinnerung nicht. Perzentilzusagen („neun von zehn Anfragen innerhalb von drei Arbeitstagen“) passen besser zum mentalen Modell des Kunden als mittlere Zeiten. Umfrageergebnisse sollten mit Antwortzahlen gezeigt werden, und offene Kommentare sollten neben den Zahlen gelesen werden (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler hat einen Service Desk und ein Betriebsteam, das seinen Webshop betreut. Die Zahlen unten sind illustrativ.

Die Führung sieht eine monatliche Schlagzeile: „Die durchschnittliche Incident-Lösungszeit fiel von 9,1 auf 7,4 Stunden.“ Die Betriebsleiterin soll sie bestätigen und den Plan für das nächste Ziel, 6 Stunden, vorstellen. Bevor sie zustimmt, bittet sie den Analysten, die zugrunde liegenden Elemente zu ziehen und aufzutragen. Von 240 Incidents im Monat (illustrativ) beträgt der Median 2,5 Stunden, das 85. Perzentil 14 Stunden, und 9 Incidents sind älter als 5 Tage und noch offen. Im Vormonat lag der Median bei 2,6 Stunden. Der Durchschnitt fiel, weil drei sehr lange Incidents des Vormonats, einer davon 11 Tage alt, zufällig früher im Zeitraum gelöst wurden und weil ein Schwung Passwort-Reset-Tickets in einen schnell schließenden Anfragetyp umkategorisiert wurde.

Das Team trägt den wöchentlichen Median der letzten 26 Wochen auf. Die Mittellinie liegt bei etwa 2,6 Stunden, und jeder Punkt der letzten zwei Monate liegt innerhalb der Grenzen. Der Rückgang in der Schlagzeile ist kein Signal. Die Umkategorisierung in der zweiten Woche änderte die Definition mitten im Diagramm, daher markiert das Team sie und startet die Grenzen ab diesem Punkt neu.

Es beschließt drei Änderungen. Der Monatsbericht zeigt Median, 85. Perzentil und das älteste offene Element, jeweils mit der Zahl der Incidents dahinter. Das vorgeschlagene Durchschnittsziel von 6 Stunden wird durch ein Gespräch über ein Perzentilziel ersetzt, das nach einem Quartal an Daten unter der neuen Definition festgelegt wird. Das Team listet außerdem die 9 alten Incidents mit je einem Eigner und einem nächsten Schritt auf.

Das Manipulationsrisiko, das sie auffangen, zeigt sich beim nächsten Review. Ein Manager schlägt vor, die 9 ältesten Incidents als „nicht mehr reproduzierbar“ zu schließen, damit die Zahl des ältesten Elements gesund aussieht. Weil das Register das Alter des ältesten offenen Elements mit der Wiedereröffnungsrate und einer stichprobenartigen Prüfung alter Schließungen koppelt, liest das Team drei der vorgeschlagenen Schließungen, stellt fest, dass zwei noch aktuell sind, und hält sie offen. Die Zahl des ältesten Elements bleibt einen weiteren Monat unbequem. Das ist das beabsichtigte Verhalten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Häufige Auslieferung erzeugt viele kleine Stichproben, was gut ist, um Veränderung zu sehen, aber jede Stichprobe ist klein. Eine nützliche Praktik ist, Kontrollkarten über ein gleitendes Fenster zu zeigen und in regelmäßigen Reviews nur Signale zu besprechen, nicht jedes Wackeln. Zu beachten ist, nicht auf Rauschen zu reagieren: Ein Team, das nach jedem Einbruch den Kurs ändert, wird die Wirkung keiner Änderung je sehen.

### KI

KI-gestützte Arbeit verschiebt oft die ganze Verteilung, etwa schnellere erste Antworten bei stärker schwankender Qualität. Vergleichen Sie vorher und nachher mit Perzentilen und dem ältesten Element und koppeln Sie Geschwindigkeit mit einer Qualitätsmessgröße. Zu beachten ist, dass eine Modelländerung die Daten mitten im Trend verändern kann; markieren Sie deshalb Modell- und Prompt-Änderungen im Diagramm.

### Automatisierung

Automatisieren Sie Berechnung und Darstellung von Medianen, hohen Perzentilen, Anzahlen und Intervallen, damit die richtige Form der Standard ist und niemand von Hand nachrechnet. Auch Automatisierung braucht ihre berichteten Stichprobengrößen und Fehlerraten. Zu beachten ist, dass automatische Alarme auf Schwellenwerten bei schiefen Daten Fehlalarme erzeugen; stützen Sie Alarme deshalb auf Kontrollgrenzen statt auf feste Zahlen.

### Analytik

Sagen Sie immer, wie viele Elemente hinter einer Rate stehen, und zeigen Sie bei kleiner Anzahl ein Intervall. Verwenden Sie Prognosen als Spannen, nicht als einzelne Daten. Zu beachten ist, dass statistische Signifikanz keine praktische Bedeutung bedeutet und eine kleine Stichprobe ein echtes Problem verbergen kann; kombinieren Sie die Zahlen deshalb mit dem Lesen tatsächlicher Elemente.

## Branchenperspektive

**Startup.** Die Volumina sind klein, daher bestehen die meisten Raten aus wenigen Elementen, und Intervalle sind breit. Lesen Sie jeden Incident, statt Statistiken zu berechnen, führen Sie ein einfaches Wochendiagramm für ein oder zwei Messgrößen und vermeiden Sie es, aus drei Punkten Trends zu erklären. Wächst das Volumen, wechseln Sie früh zu Medianen und Perzentilen, damit die Gewohnheiten bereits bestehen.

**Kleinunternehmen.** Die Person, die die IT betreibt, besitzt auch die Daten, und die Stichprobe ist meist klein. Berichten Sie bei seltenen Ereignissen Anzahlen, keine Prozentsätze, und vergleichen Sie mit Ihrer eigenen längeren Historie. Prüfen Sie, was die „Reaktionszeit“-Uhr eines Anbieters tatsächlich misst.

**Großunternehmen.** Volumen macht Verteilungen aussagekräftig und ermutigt auch zu Verdichtungen, die unähnliche Services vermischen. Vergleichen Sie Gleiches mit Gleichem, veröffentlichen Sie die Definitionen und das verwendete Perzentil und führen Sie eine gemeinsame Bibliothek von Diagramm- und Berechnungsregeln, damit Teams dieselbe Messgröße nicht auf drei Arten berechnen.

**Behörden und öffentlicher Sektor.** Verträge und gesetzliche Berichterstattung legen oft einen Mittelwert oder einen Prozentsatz-Schwellenwert fest, und diese Definitionen sind nicht verhandelbar. Berichten Sie die geforderte Zahl genau wie definiert und zeigen Sie Median, Perzentil und Anzahlen daneben, damit Aufsichtsgremien das ganze Bild sehen. Öffentliche Prüfung macht ehrliche Unsicherheit wertvoller, denn eine überzuversichtliche Zahl ist teuer zurückzunehmen (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Es dauert einige Stunden, Zusammenfassungsregeln zu vereinbaren, aus einem Export ein Histogramm und eine Kontrollkarte zu bauen und einer Berichtsvorlage Anzahlen hinzuzufügen, dazu einige Minuten pro Zyklus, um sie aktuell zu halten. Die meisten Werkzeuge berechnen Perzentile bereits. Die größeren Kosten sind ein Gespräch mit Menschen, die an eine beruhigende Zahl gewöhnt sind.

Der Ertrag sind bessere Entscheidungen und weniger verschwendete Reaktion. Teams hören auf, nach einer schlechten Woche umzuorganisieren, hören auf, Initiativen zufällige Verbesserungen gutzuschreiben, und hören auf, Durchschnitte zu versprechen, die die Hälfte ihrer Kunden nicht erlebt. Borgen Sie sich keine Zahl: Zählen Sie, wie oft Entscheidungen des letzten Jahres zurückgenommen wurden und wie viele „Verbesserungen“ in der nächsten Periode verschwanden, und bemessen Sie den Business Case anhand dieser Zählungen.

## Anti-Muster und Fallstricke

- **Schiefe Dauern mitteln.** Der Mittelwert wird vom Auslauf gezogen und verbirgt, was Nutzer spüren. Berichten Sie den Median und ein benanntes hohes Perzentil und zeigen Sie das älteste offene Element.
- **Prozentsätze aus winzigen Stichproben.** „100 Prozent“ aus drei Elementen ist eine Anekdote. Zeigen Sie Anzahlen und wenden Sie eine Mindestanzahl-Regel an.
- **Auf jedes Wackeln reagieren.** Jeder roten Woche nachzujagen verschwendet Aufwand und bringt Teams bei, Rauschen zu erklären. Verwenden Sie Kontrollgrenzen und schriftliche Signalregeln.
- **Vorher-Nachher-Beweis.** Zwei Punkte können einen Eingriff nicht von Zufall oder Regression zur Mitte trennen. Verwenden Sie eine längere Baseline und einen Vergleich.
- **Die Torpfosten im Diagramm verschieben.** Grenzen, Regeln oder Definitionen nachträglich zu ändern lässt jedes Diagramm zur Geschichte passen. Legen Sie die Regeln fest, protokollieren Sie Änderungen und annotieren Sie sie.
- **Ausreißer standardmäßig ausschließen.** Die längsten Fälle sind meist die, an die sich Kunden erinnern. Schließen Sie nur mit schriftlicher Begründung aus und listen Sie auf, was ausgeschlossen wurde.
- **Falsche Präzision.** 83,3 Prozent aus 12 Elementen zu berichten unterstellt Wissen, das die Daten nicht haben. Runden Sie ehrlich und zeigen Sie eine Spanne.
- **Unähnliche Arbeit poolen.** Eine gemischte Zeit für Passwort-Resets und Rechenzentrumsausfälle beschreibt keines von beiden. Segmentieren Sie zuerst.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Zusammenfassungen von Zeitdaten | Nur Durchschnitte | Einige Teams zeigen Mediane | Median plus ein benanntes Perzentil und das älteste offene Element sind Standard | Verteilungen mit Leitplanke überprüft und im Trend | Perzentilzusagen mit Kunden und Lieferanten vereinbart und mit den Daten überarbeitet |
| Stichprobengröße und Unsicherheit | Raten ohne Anzahlen zitiert | Anzahlen in einigen Berichten gezeigt | Anzahlen und eine Mindestanzahl-Regel bei jeder Rate | Intervalle bei Hauptraten, Methode im Register | Unsicherheit offen mit Kunden geteilt und teamübergreifend in der Planung genutzt |
| Schwankung und Kausalität | Jede Veränderung wird erklärt | Einige Karten mit Grenzen | Kontrollkarten mit schriftlichen Regeln für wichtige Messgrößen | Signale lösen geplante Untersuchung aus; Initiativen gegen die Baseline geprüft | Gemeinsame Kartenbibliotheken über Services; Baselines über Teams ohne Rangfolge verglichen |

## Checkliste

- [ ] Jede Zeitmessgröße berichtet einen Median und ein benanntes hohes Perzentil statt nur eines Mittelwerts.
- [ ] Das Alter des ältesten offenen Elements und die Zahl der Elemente jenseits des hohen Perzentils werden berichtet.
- [ ] Jede berichtete Rate zeigt Zähler und Nenner.
- [ ] Eine Mindestanzahl-Regel ist aufgeschrieben und wird auf alle Raten angewandt.
- [ ] Hauptraten und Prognosen zeigen eine Spanne, mit im Register benannter Methode.
- [ ] Für die drei Messgrößen, auf die das Team reagiert, gibt es Kontrollkarten mit schriftlichen Signalregeln.
- [ ] Definitionsänderungen sind in Diagrammen annotiert und im Register protokolliert.
- [ ] Ausgeschlossene Elemente sind mit Gründen aufgelistet.
- [ ] Verbesserungsbehauptungen werden gegen eine längere Baseline geprüft, bevor sie wiederholt werden.
- [ ] Manipulationsvektor und Leitplanke jeder Kennzahl stehen im Register (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

## KI-Prompts

**Prüfen, ob eine Zusammenfassung zu den Daten passt.**

```text
I have [number] values of [measure, such as incident resolution time] for
[service] over [period]. The clock starts at [start event] and stops at
[stop event]. Pauses are [handled how]. The values are pasted below.

Describe the shape of the distribution, compute the mean, median, and the
[percentile, such as 85th] and [second percentile, such as 95th], and tell me
which summary best represents a typical case and which supports a promise to
customers. Point out any values that look like data errors, but do not remove
them. Do not invent benchmark values. List your assumptions and what you could
not determine from the data.

[paste values, with personal data removed]
```

**Eine Rate mit ihrer Unsicherheit ausdrücken.**

```text
Our team reports [rate name] as [numerator] out of [denominator] for [period]
and [service]. Show how to present this with the counts, explain in plain words
how much one more or one fewer success would change it, and calculate a
confidence interval using [method, or "a method you recommend and name"].
Suggest wording that a non-technical leader can understand and a minimum-count
rule for when to show items instead of a rate. Do not invent comparison
figures. List your assumptions, including the method and any data conditions it
needs.
```

**Beurteilen, ob eine Veränderung Signal oder Rauschen ist.**

```text
Here are [number] consecutive [weekly or monthly] values of [measure] for
[service]. A change happened in [period]: [describe the intervention, release,
or definition change]. Plot or describe a control chart with a center line and
limits, apply these signal rules: [list rules, such as one point beyond the
limits or a run of eight on one side], and tell me which points signal. Say
whether the change is distinguishable from ordinary variation, and what other
explanations, such as regression toward the mean or a definition change, I
should rule out. Do not claim causation. List your assumptions and the extra
data that would help.

[paste values]
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema und die gekoppelte Leitplanke für eine Zeit- oder Ratenkennzahl zu finden, bevor Sie sie veröffentlichen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine einem Thema hinzugefügte statistische Messgröße Definition, Uhren, Manipulationsvektor und Leitplanke hat.

## Wichtigste Erkenntnisse

- Servicedauern sind schief, berichten Sie also den Median und ein benanntes hohes Perzentil und fügen Sie das Alter des ältesten offenen Elements hinzu.
- Jede Rate trägt ihre Anzahl, und kleine Stichproben werden als Elemente oder mit einer Spanne gezeigt, nicht als selbstsicherer Prozentsatz.
- Kennen Sie den normalen Bereich einer Messgröße anhand einer Kontrollkarte, bevor Sie auf eine einzelne Woche reagieren.
- Seien Sie misstrauisch gegenüber Verbesserungen, die mit zwei Punkten gemessen wurden: Regression zur Mitte und Definitionsänderungen erklären viele davon.
- Ehrliche Unsicherheit ist in einem Bericht eine Stärke und eine Leitplanke gegen Manipulation im Sinne Goodharts (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).
- Halten Sie die Technik verhältnismäßig: Wenige konsequente, in einfachen Worten erklärte Methoden dienen einem Team besser als viele unerklärte.

## Quellen und weiterführende Literatur

1. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
2. Shewhart, W. A., *Economic Control of Quality of Manufactured Product*, D. Van Nostrand, 1931.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
5. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd edition, Wiley, 2014.
6. Kahneman, D., *Thinking, Fast and Slow*, Farrar, Straus and Giroux, 2011.
7. Tufte, E. R., *The Visual Display of Quantitative Information*, 2nd edition, Graphics Press, 2001.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Wikipedia, [Skewness](https://en.wikipedia.org/wiki/Skewness).
10. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
11. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
12. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
14. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
15. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
16. Wikipedia, [Regression toward the mean](https://en.wikipedia.org/wiki/Regression_toward_the_mean).
