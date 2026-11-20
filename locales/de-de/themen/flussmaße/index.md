# Flussmaße

**Vier schlichte Zählungen und Uhren, Arbeit in Bearbeitung, Durchsatz, Alter von Arbeitselementen und Zykluszeit, zeigen einem Team, wo seine Arbeit feststeckt und was es zusagen kann, vorausgesetzt, jede ist für Projektarbeit und Servicearbeit gleich definiert und wird als Verteilung statt als Durchschnitt gelesen.**

## Überblick und Motivation

Die meisten Liefer- und Service-Dashboards berichten, was letzten Monat fertig wurde. Flussmaße ergänzen die Sicht, die zählt, solange die Arbeit noch in Bewegung ist: wie viel gerade in Bearbeitung ist, wie alt jedes Element ist, wie schnell Elemente fertig werden und wie lange sie dauern. Die Flussliteratur gibt diesen vier Messgrößen genaue Definitionen. Der Kanban Guide (kanbanguides.org, aktuelle Version Stand Oktober 2026) ist eine klare Quelle: Er nennt sie als die Messgrößen, mit denen ein Team seinen Workflow untersucht und anpasst, und dieses Thema folgt diesen Definitionen, ohne eine bestimmte Methode oder ein bestimmtes Board vorauszusetzen.

Die vier Definitionen sind kurz. **Arbeit in Bearbeitung (Work in Progress, WIP)** ist die Zahl der Arbeitselemente, die begonnen, aber nicht abgeschlossen sind. **Durchsatz** ist die Zahl der pro Zeiteinheit abgeschlossenen Arbeitselemente. **Alter eines Arbeitselements** ist die verstrichene Zeit zwischen dem Beginn eines Arbeitselements und der aktuellen Zeit und gilt daher nur für Elemente, die noch in Bearbeitung sind. **Zykluszeit** ist die verstrichene Zeit zwischen dem Beginn und dem Abschluss eines Arbeitselements, wobei in der Formulierung des Guide beide Tage einschließlich gezählt werden. Ein **Arbeitselement** ist eine Arbeitseinheit, die das Team als eine Sache verfolgen will, etwa eine User Story, ein Incident, eine Serviceanfrage oder ein Change. Ein **Workflow** ist die Menge der Zustände zwischen „begonnen“ und „abgeschlossen“, und die schriftliche **Workflow-Definition** des Teams sagt, welche Zustände das sind.

Zwei der vier betreffen das System als Ganzes (WIP und Durchsatz) und zwei einzelne Elemente (Alter und Zykluszeit). Das Paar für abgeschlossene Elemente ist Durchsatz und Zykluszeit. Das Paar für unfertige Elemente ist WIP und Alter. Diese Aufteilung ist wichtig, weil die Messgrößen abgeschlossener Elemente nachlaufend sind: Sie sagen, wie es lief. Die Messgrößen unfertiger Elemente sind vorlaufend: Sie sagen, was gleich geschehen wird, solange noch Zeit zum Handeln ist. Das Alter von Arbeitselementen ist die am wenigsten genutzte der vier und meist die erste, die sich auf einem Board lohnt.

Die Beziehung der ersten drei ist kein Zufall. Das [Gesetz von Little](https://en.wikipedia.org/wiki/Little%27s_law), ein Ergebnis der [Warteschlangentheorie](https://en.wikipedia.org/wiki/Queueing_theory), besagt, dass in einem stabilen System die durchschnittliche Zahl der Elemente im System der durchschnittlichen Ankunftsrate multipliziert mit der durchschnittlichen Verweilzeit jedes Elements entspricht. Im Fluss gesprochen: Das durchschnittliche WIP ist an den durchschnittlichen Durchsatz und die durchschnittliche Zykluszeit gebunden. Das Gesetz gilt nur unter Bedingungen, auf die das Thema in den Empfehlungen zurückkommt (siehe Thema 2.3, Laufende Arbeit und Warteschlangentheorie, für die vollständige Behandlung). Die praktische Folgerung ist einfach: Bleibt der Durchsatz ungefähr konstant, bedeutet mehr Arbeit in Bearbeitung längere Zykluszeiten.

Agile und ITIL-Sichtweisen treffen sich hier mit unterschiedlichem Vokabular. In der agilen Praxis gehören Flussmaße zum Board des Teams und werden in einem regelmäßigen Review mit Stakeholdern und in der eigenen Reflexion des Teams über Verbesserung genutzt. In ITIL 4 beschreiben dieselben Zahlen, wie Incident-Management, Serviceanfragen-Management und Change-Befähigung Datensätze durch Zustände bewegen, und sie speisen die Praktik Messung und Berichterstattung und das Service-Level-Management. Ein Incident ist ein Arbeitselement. Eine Serviceanfrage ist ein Arbeitselement. Beide haben einen Beginn, einen Abschluss und dazwischen ein Alter. Der ITIL-Service-Desk und das Lieferteam leisten messtechnisch dieselbe Art von Arbeit: Elemente kommen an, warten, werden bearbeitet und gehen.

Die Messgrößen verbinden sich auch mit der [Lean-Softwareentwicklung](https://en.wikipedia.org/wiki/Lean_software_development), die Warten als Hauptquelle der Verschwendung behandelt, und mit dem [kumulativen Flussdiagramm](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), einem Diagramm kumulierter Zu- und Abgänge, das WIP, Durchsatz und Zykluszeit auf einen Blick zeigt. Das Diagramm ist optional. Die vier Messgrößen lassen sich aus einer Tabelle von Elementen mit je zwei Daten berechnen.

Weil Zykluszeit und Alter Dauern mit langem rechtem Auslauf sind, führt ein einzelner Durchschnitt in die Irre. Ein [Perzentil](https://en.wikipedia.org/wiki/Percentile) wie das 85. sagt einem Team „85 Prozent der Elemente sind in dieser Zahl von Tagen fertig“, was eine brauchbare Prognose und eine brauchbare Zusage ist (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen). Die Flussliteratur nennt eine solche Zusage eine **Service Level Expectation (SLE)**: wie lange ein typisches Element dauern sollte, angegeben als Zeit und Wahrscheinlichkeit. Eine SLE ist die eigene Prognose eines Teams. Sie ist kein [Service Level Agreement](https://en.wikipedia.org/wiki/Service-level_agreement), das eine ausgehandelte Zusage an einen Kunden ist (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA).

## Leitprinzipien

- **Ganze Elemente zählen, die einer Definition von begonnen und abgeschlossen folgen.** Elemente zu teilen oder zusammenzuführen, um eine Zahl zu verbessern, zerstört die Vergleichbarkeit. Einigen Sie sich, was ein Arbeitselement ist, und halten Sie die Definition stabil.
- **Die Uhren definieren, bevor Daten erhoben werden.** Zykluszeit und Alter hängen davon ab, welcher Zustand „begonnen“ und welcher „abgeschlossen“ bedeutet. Schreiben Sie beide auf und erfassen Sie jede Änderung daran (siehe Thema 1.5, Datenquellen und Instrumentierung).
- **Zuerst auf unfertige Arbeit schauen.** Alter und WIP sind die einzigen Messgrößen, die noch ein Ergebnis ändern können. Durchsatz und Zykluszeit bestätigen, was bereits geschah.
- **Verteilungen berichten, nicht Durchschnitte.** Zeigen Sie Perzentile für Zykluszeit und Alter und eine Folge wöchentlicher Zählungen für den Durchsatz, damit die Form der Schwankung sichtbar ist.
- **Die Messgrößen nutzen, um den Workflow zu steuern, nicht Menschen.** Die Analyseeinheit ist der Workflow des Teams. Bringen Sie nie Einzelpersonen nach abgeschlossenen Elementen oder Zykluszeit in eine Rangfolge.
- **WIP begrenzen, um Fluss vorhersagbar zu machen.** Ein WIP-Limit ist eine Regel, kein Ziel. Das Limit existiert, um Warteschlangen sichtbar zu machen und die Zykluszeit zu verkürzen.
- **Flusszeit von Planungsgenauigkeit trennen.** Flussmaße beschreiben, wie Arbeit sich bewegt. Für sich sagen sie nichts darüber, ob die richtige Arbeit gewählt wurde (siehe Thema 1.3, Ergebnisse vor Output: Auswählen, was gemessen wird).

## Kennzahlendefinitionen

Jede Zeile zählt Elemente im Workflow eines Teams. Noch in Bearbeitung befindliche Elemente sind von Zykluszeit und Durchsatz ausgeschlossen, abgeschlossene Elemente von Alter und WIP.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Arbeit in Bearbeitung (WIP) | Begonnene, aber nicht abgeschlossene Arbeitselemente | Anzahl der Elemente, deren Beginn-Zeitstempel gesetzt und deren Abschluss-Zeitstempel leer ist, zu einem festgelegten Zeitpunkt (zum Beispiel am Ende jedes Tages); noch nicht begonnene Backlog-Elemente und abgeschlossene Elemente sind ausgeschlossen | Elemente | Statusverlauf des Issue-Trackers oder ITSM-Werkzeugs | Incident-Management; Serviceanfragen-Management; Change-Befähigung | WIP-Limit; Team-Backlog in Bearbeitung | Tägliche Momentaufnahme, wöchentlich überprüft |
| Durchsatz | Pro Zeiteinheit abgeschlossene Arbeitselemente | Anzahl der Elemente, deren Abschluss-Zeitstempel in den Zeitraum fällt (zum Beispiel eine Kalenderwoche, Montag bis Sonntag); abgeschlossene und dann wieder eröffnete Elemente zählen nur dann erneut, wenn sie neue Elemente sind | Elemente pro Woche | Statusverlauf des Issue-Trackers oder ITSM-Werkzeugs | Incident-Management; Erfüllung von Serviceanfragen | Durchsatz; abgeschlossene Elemente | Wöchentlich |
| Alter eines Arbeitselements | Verstrichene Zeit, die ein unfertiges Element in Bearbeitung ist | Aktuelle Zeit minus Beginn-Zeitstempel für Elemente, die noch in Bearbeitung sind; die Uhr läuft durch blockierte Zeit; noch nicht begonnene Elemente sind ausgeschlossen | Tage | Statusverlauf des Issue-Trackers oder ITSM-Werkzeugs | Incident-Management; Problemmanagement | Alter von Arbeitselementen; tägliche Teamabstimmung | Täglich, bei jeder Teamabstimmung überprüft |
| Zykluszeit | Verstrichene Zeit vom Beginn bis zum Abschluss eines abgeschlossenen Elements | Abschluss-Zeitstempel minus Beginn-Zeitstempel in Kalendertagen, einschließlich; die Uhr startet beim ersten Wechsel in einen Beginn-Zustand und stoppt beim Wechsel in einen Abschluss-Zustand; Median sowie 85. und 95. Perzentil berichten | Tage | Statusverlauf des Issue-Trackers oder ITSM-Werkzeugs | Incident-Management; Erfüllung von Serviceanfragen; Change-Befähigung | Zykluszeit; Elementdauer | Wöchentlich, mit gleitendem Fenster von 8 bis 12 Wochen |
| SLE-Erreichung | Anteil der abgeschlossenen Elemente, die die Service Level Expectation des Teams erfüllt haben | Abgeschlossene Elemente mit Zykluszeit höchstens gleich der SLE / alle im Fenster abgeschlossenen Elemente; noch offene Elemente sind ausgeschlossen | Prozent | Abgeleitet aus der Zykluszeit | Service-Level-Management | Service Level Expectation | Monatlich |
| Anteil blockierter Zeit | Anteil der Tage in Bearbeitung, die Elemente als blockiert markiert verbracht haben | Elementtage in einem blockierten Zustand / Elementtage in Bearbeitung, über das Fenster; die Uhr für beide startet beim Beginn-Zeitstempel | Prozent | Markierungen des Issue-Trackers oder ein Status „blockiert“ im ITSM-Werkzeug | Incident-Management; Problemmanagement; Lieferantenmanagement | Blocker; in täglichen Teamabstimmungen genannte Hindernisse | Wöchentlich |

Die Zykluszeit folgt hier der Definition der Flussliteratur. Sie unterscheidet sich von der ITIL-Vorstellung der Lösungszeit, die oft ab dem Moment der Ticketeröffnung gemessen wird und Zeit in Wartestellung ausschließen kann. Ein Team, das beide vergleichen will, muss sie kennzeichnen, und Thema 2.2 behandelt die Uhren im Detail (siehe Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz). SLE-Erreichung und Anteil blockierter Zeit sind aus den vier Kernmessgrößen abgeleitet und aufgenommen, weil ein Team die Messgrößen im Alltag so nutzt.

## Empfehlungen

### Den Workflow und die Elemente definieren

**1. Schreiben Sie die Workflow-Definition, bevor Sie etwas darstellen.** Listen Sie die Zustände auf, sagen Sie, welcher „begonnen“ und welcher „abgeschlossen“ bedeutet, und legen Sie fest, wer ein Element zwischen ihnen bewegen darf. Die Flussliteratur nennt das die Workflow-Definition, und jede Messgröße in diesem Thema hängt von ihr ab. Definieren zwei Teams „begonnen“ verschieden, lassen sich ihre Zykluszeiten nicht vergleichen.

**2. Wählen Sie eine Elementgröße, die das Team in Tagen, nicht Monaten abschließen kann.** Ein Arbeitselement ist, was immer das Team als eine Einheit verfolgt: eine Story, ein Incident, eine Anfrage. Sehr große Elemente verbergen ihr eigenes Alter und machen den Durchsatz klumpig. Verwenden Sie eine stabile Regel wie „ein Element ist eine Sache, die ein Kunde oder Nutzer bemerken könnte“, und vermeiden Sie das Zerteilen von Elementen nur zur Verbesserung einer Zählung.

**3. Behandeln Sie Projektarbeit und Servicearbeit als dieselbe Art Fluss mit unterschiedlichen Ankunftsmustern.** Projektarbeit kommt als geplanter Backlog an, aus dem das Team zieht. Servicearbeit wie Incidents und Anfragen kommt unvorhersehbar an und kann geplante Arbeit verdrängen. Messen Sie beide auf demselben Board oder in denselben Tabellen, nach Typ gekennzeichnet, damit Sie sehen, wie Unterbrechungen geplante Arbeit beeinflussen (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit).

### Unfertige Arbeit messen

**4. Beginnen Sie mit dem Alter von Arbeitselementen auf dem Board.** Markieren Sie jede Karte mit ihrem Alter in Tagen und sortieren oder heben Sie nach Perzentilbändern hervor, die aus der eigenen Zykluszeit-Historie des Teams stammen. Ein Element, das älter ist als das 85. Perzentil vergangener Zykluszeiten, ist ein Signal zu fragen, was es heute blockiert. So wird eine nachlaufende Messgröße zu einem täglichen Anstoß.

**5. Zählen Sie WIP ehrlich und setzen Sie ein Limit, das Sie vertreten können.** Zählen Sie jedes begonnene Element, das nicht abgeschlossen ist, einschließlich Arbeit, die auf ein Review oder einen Lieferanten wartet. Wählen Sie ein anfängliches Limit aus dem aktuellen durchschnittlichen WIP des Teams und senken Sie es Schritt für Schritt, wobei Sie festhalten, was sich bei Zykluszeit und Alter ändert. Behandeln Sie das Limit als Regel, die das Team überprüft, und nutzen Sie das Gesetz von Little nur als Plausibilitätsprüfung für Durchschnitte (siehe Thema 2.3, Laufende Arbeit und Warteschlangentheorie).

**6. Zeigen Sie blockierte Arbeit als Zeit, nicht als Markierung.** Eine Blockiert-Markierung, die niemand zählt, wird zur Ausrede. Erfassen Sie, wann ein Element blockiert wurde und wann es freigegeben wurde, und berichten Sie den Anteil blockierter Zeit. Lassen Sie die Uhr des Elements durch die Blockade weiterlaufen, denn das Warten des Kunden pausiert nicht (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents, wo ITIL-Wartestatus dieselbe Frage aufwerfen).

### Abgeschlossene Arbeit messen

**7. Berichten Sie die Zykluszeit als Verteilung mit Perzentilen.** Zeigen Sie Median, 85. und 95. Perzentil und tragen Sie jedes abgeschlossene Element als Punkt über der Zeit auf (Streudiagramm), damit das Team Gruppierungen und Ausreißer sieht. Nennen Sie das Fenster, zum Beispiel die letzten 10 Wochen. Ein Durchschnitt verbirgt den langen Auslauf, den Kunden spüren.

**8. Berichten Sie den Durchsatz als Wochenfolge, nicht als Einzelsumme.** Tragen Sie die Zahl der pro Woche abgeschlossenen Elemente als [Verlaufsdiagramm](https://en.wikipedia.org/wiki/Run_chart) oder [Kontrollkarte](https://en.wikipedia.org/wiki/Control_chart) auf. Wöchentliche Zählungen schwanken natürlich, lesen Sie Änderungen also vor einer Reaktion gegen diese Schwankung, und vergleichen Sie nie den Durchsatz zweier Teams als Leistungsrangfolge, denn Elementgrößen und Definitionen unterscheiden sich (siehe Thema 2.5, Kennzahlen für Lieferprognosen und Planung).

**9. Setzen Sie eine Service Level Expectation aus Ihren eigenen Daten und überprüfen Sie sie.** Nehmen Sie die Zykluszeiten des Teams der letzten Wochen, wählen Sie eine Wahrscheinlichkeit, mit der das Team leben kann, und lesen Sie die Zahl der Tage am Perzentil ab. Veröffentlichen Sie sie als „85 Prozent der Elemente sind in 9 Tagen oder weniger fertig“, mit echten Werten aus Ihren Daten. Überprüfen Sie sie, wenn sich der Workflow ändert. Eine SLE ist eine Prognose, die das Team über sich selbst macht, halten Sie sie also von vertraglichen Zielen getrennt.

### Die Messgrößen nutzen

**10. Nutzen Sie alle vier zusammen und stellen Sie bei jeder Teamabstimmung dieselben vier Fragen.** Was ist in Bearbeitung, und liegt es innerhalb des Limits? Welche Elemente sind am ältesten, und was würde sie entblocken? Wie viele haben wir abgeschlossen, und liegt das im üblichen Bereich? Wie lange dauerten die jüngsten im Vergleich zu unserer Erwartung? Die vier Fragen ersetzen einen Statusbericht und dauern wenige Minuten.

**11. Wenden Sie dieselben Messgrößen auf Service-Warteschlangen an, mit klarer Grenze für die Uhr.** Bei Incidents und Anfragen kann „begonnen“ die erste Zuweisung an eine Person oder ein Team sein, während die ITIL-Lösungsuhr bei der Erfassung startet. Beide sind gültig und beantworten verschiedene Fragen: wie reaktionsfähig der Eingang ist und wie lange die Arbeit selbst dauert. Benennen Sie jede Uhr und mischen Sie sie nicht in einem Diagramm (siehe Thema 3.5, Kennzahlen für die Erfüllung von Serviceanfragen).

**12. Ändern Sie den Workflow, messen Sie erneut und behalten Sie die Historie.** Ändert das Team ein WIP-Limit, einen Zustand oder eine Regel, protokollieren Sie Datum und Grund und markieren Sie die Änderung in den Diagrammen. Eine Verschiebung der Zykluszeit nach einer Änderung ist ein Beleg für ihre Wirkung. Eine Verschiebung ohne protokollierte Änderung ist ein Grund, das Instrument zu verdächtigen (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Arbeit in Bearbeitung (WIP) | Elemente bis zum letzten Moment im Backlog oder in einer Spalte „bereit“ halten, damit sie nicht als begonnen zählen; Elemente schließen und wieder eröffnen; Arbeit vom Board fernhalten | Board-Elemente mit eingegangenen Anfragen abstimmen; das Board stichprobenartig mit der tatsächlichen Arbeit des Teams abgleichen; das Alter der Elemente in der ersten Spalte verfolgen |
| Durchsatz | Elemente in winzige Stücke zerlegen; Elemente schließen, bevor sie fertig sind; leichte Elemente zuerst wählen | Verteilung der Elementgrößen und Wiedereröffnungsrate ansehen; entwichene Fehler und Incidents zu jüngsten Elementen zählen; den Mix der abgeschlossenen Arbeitstypen überprüfen |
| Alter eines Arbeitselements | Ein veraltetes Element auf „erledigt“ oder in einen neuen Zustand verschieben, um die Uhr zurückzusetzen; alte Elemente still stornieren; eine frische Kopie eines alten Elements anlegen | Rückwärtige Statuswechsel und stornierte Elemente prüfen; stornierte Elemente und ihr Alter berichten; auf kurz vor der Altersgrenze angelegte Duplikate achten |
| Zykluszeit | Die Uhr spät starten, indem Elemente erst auf „in Bearbeitung“ gesetzt werden, wenn die Arbeit fast fertig ist; sie früh beenden, indem Elemente vor Review oder Release als erledigt markiert werden | Beginn mit erstem Commit oder erster Aktivität vergleichen; die Zeit zwischen „erledigt“ und Release berichten; abgeschlossene Elemente stichprobenartig auf wahre Fertigstellung prüfen |
| SLE-Erreichung | Eine großzügige SLE setzen; schwere Elemente als „besonders“ ausschließen; Elemente schließen, um unter dem Limit zu bleiben | Die SLE an einem Perzentil vergangener Daten halten und jedes Quartal überprüfen; ausgeschlossene Elemente samt Grund berichten; das 95. Perzentil und die ältesten offenen Elemente lesen |
| Anteil blockierter Zeit | Blockaden nie markieren, damit der Anteil niedrig aussieht; alles als blockiert markieren, um Verzögerung zu erklären | Den blockierten Anteil mit dem Alter der Elemente in Bearbeitung vergleichen; Blockadegründe nach Kategorie prüfen; blockierte Elemente stichprobenartig auf jeden Grund prüfen |

Ein gesunder Befund zeigt WIP an den meisten Tagen am oder unter dem Limit, ein Alter meist unterhalb des 85. Perzentils vergangener Zykluszeiten und einen Durchsatz, der von Woche zu Woche in einem stabilen Bereich schwankt. Die Zykluszeit-Perzentile sind stabil oder fallen, die SLE-Erreichung liegt nahe der vom Team gewählten Wahrscheinlichkeit, und blockierte Zeit hat benannte Ursachen, an denen jemand arbeitet. Sieht eine Zahl zu gut aus, fragen Sie vor dem Feiern, ob sich die Uhr bewegt oder die Definition geändert hat.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Flussmaße (WIP, Durchsatz, Alter, Zykluszeit) | Einfach, werkzeugunabhängig und auf Zählungen und Daten beruhend; stützen probabilistische Prognosen | Brauchen konsistente Definitionen und saubere Zeitstempel; sagen nichts über Wert oder Qualität |
| Schätzungsbasierte Messgrößen wie Story Points | Enthalten eine Sicht auf Aufwand und Komplexität; passen zu geplanter Arbeit | Subjektiv und teamspezifisch; über Teams nicht vergleichbar |
| Durchschnittsbasierte Servicekennzahlen wie die mittlere Lösungszeit | Leicht zu berechnen und zu erklären | Von Ausreißern und Schiefe verzerrt; verbergen den langen Auslauf |
| Perzentilbasierte Zykluszeit und SLE | Spiegeln wider, was Kunden erleben; stützen eine klare Zusage | Brauchen genug Historie; schwerer zu erklären für Menschen, die Durchschnitte gewohnt sind |
| Eine organisationsweite Definition von „begonnen“ und „abgeschlossen“ | Erlaubt Verdichtung und Vergleich | Passt auf manche Teams schlecht; kann Teams zu künstlichen Zuständen drängen |

Wählen Sie die einfachste Messgröße, die der anstehenden Entscheidung dient. Flussmaße funktionieren gut für ein Team, das Arbeit zieht und Elemente in Tagen abschließen kann. Sie passen weniger gut, wenn Elemente Monate dauern, wenn ein Element stark in der Größe schwankt oder wenn der meiste Wert in der Entdeckung liegt und nicht in der Lieferung.

## Fragen für die Diskussion im Team

**1. Welcher Zustand bedeutet für uns „begonnen“ und welcher „abgeschlossen“, und sind sich alle einig?**
Zeigen Sie das Board auf dem Bildschirm und bitten Sie jede Person, auf den ersten und letzten Zustand der Uhr zu zeigen. Notieren Sie Uneinigkeiten, denn sie sind die größte Quelle unzuverlässiger Zykluszeiten. Achten Sie besonders auf Elemente, die im Review, in einer Release-Warteschlange oder in den Händen eines Lieferanten warten. Einigen Sie sich auf eine schriftliche Workflow-Definition und ein Datum, an dem sie gilt.

**2. Wie viel Arbeit haben wir gerade in Bearbeitung, und was geschähe, wenn wir eine Woche lang keine neuen Elemente begännen?**
Zählen Sie die Karten, einschließlich stockender Arbeit. Fragen Sie, was das Team abschließen würde und was weiter feststeckte. Die Moderation sollte das Gespräch auf die Gründe für frühes Beginnen lenken, etwa Angst vor Leerlauf oder Druck von Stakeholdern, und weg von Schuldzuweisung. Schlagen Sie ein erstes WIP-Limit und ein Datum zur Überprüfung vor.

**3. Welche Elemente sind auf dem Board am ältesten, und was hält jedes davon auf?**
Sortieren Sie nach Alter und sprechen Sie über die drei ältesten Elemente. Nennen Sie für jedes das Hindernis, die Person, die es beseitigen kann, und die nächste Handlung. Vergleichen Sie die höchsten Alter mit dem 85. Perzentil vergangener Zykluszeiten. Machen Sie es zur Gewohnheit, diese Frage bei jeder Abstimmung zu stellen, denn Alter ist die eine Messgröße, die noch ein Ergebnis ändern kann.

**4. Wie sieht unsere Zykluszeit-Verteilung aus, und welche Zusage können wir daraus machen?**
Zeigen Sie das Streudiagramm der abgeschlossenen Elemente der letzten 8 bis 12 Wochen. Lesen Sie Median, 85. und 95. Perzentil ab. Besprechen Sie, ob sich das Team mit einer SLE am 85. Perzentil wohlfühlt und was die Ausreißer gemeinsam hatten. Die Moderation sollte prüfen, dass die Gruppe den Unterschied zwischen Median und Auslauf versteht.

**5. Wie wirken sich Incidents und Anfragen auf die geplante Arbeit aus, die wir aus dem Backlog ziehen?**
Kennzeichnen Sie abgeschlossene Elemente nach Typ und vergleichen Sie Zykluszeiten und Durchsatz je Typ. Fragen Sie, wie oft ein geplantes Element ins Stocken geriet, weil ein Incident eintraf. Entscheiden Sie, ob eine Expedite-Regel oder reservierte Kapazität helfen würde und wie ihre Nutzung sichtbar bleibt (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit). Besprechen Sie, was das Team nicht mehr täte, wenn sich die Unterbrechungen verdoppelten.

**6. Welche dieser Messgrößen könnten wir manipulieren, und wie würden wir es bemerken?**
Gehen Sie jede Messgröße durch und fragen Sie, wie jemand unter Druck sie besser aussehen lassen könnte, ohne den Fluss zu verbessern. Ordnen Sie jede Antwort einer Leitplanke aus der Tabelle zu. Die Moderation sollte das als Entwurfsübung am Instrument behandeln und nicht als Beschuldigung. Wählen Sie eine Leitplanke, die in diesem Quartal ergänzt wird, und benennen Sie einen Eigner.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams nutzen Flussmaße, um ihr eigenes System zu sehen. Am meisten bringen ihnen das Alter der Elemente in Bearbeitung und die Verteilung der Zykluszeit, die ihnen sagen, worauf sie sich stürzen und was sie zusagen können. Sie sollten vermeiden, den Durchsatz zu einem Ziel zu machen, und vermeiden, ihre Zahlen mit denen anderer Teams zu vergleichen (siehe Thema 2.8, DORA-Kennzahlen, für die Messgrößen auf Lieferebene, die über dem Teamfluss liegen).

### Service- und Betriebsteams

Serviceteams bearbeiten Ankünfte, die sie nicht kontrollieren. Flussmaße zeigen, wie Unterbrechungen, Übergaben und das Warten auf andere die Zeit bis zum Abschluss dehnen. Sie profitieren von getrennten Sichten für Incidents, Anfragen und geplante Changes und von nach Grund berichteter blockierter Zeit. Sie sollten die ITIL-Uhren behalten, die Verträge verlangen, und zugleich die Flussuhren nutzen, um das Team zu führen.

### Führung und Governance

Führungskräfte sollten die Verteilung und den Trend anfordern, nicht eine einzelne Zahl, und Änderungen mit den daneben protokollierten Workflow-Änderungen lesen. Sie können SLE-Erreichung und Altersprofile nutzen, um Risiko früh zu erkennen. Sie sollten der Verdichtung des Durchsatzes über Teams widerstehen, weil sich Elementdefinitionen unterscheiden, und die Bereinigung von Statusmodellen und Zeitstempeln finanzieren, die verlässliche Flussdaten brauchen.

### Kunden und Nutzer

Kunden spüren die Zykluszeit und besonders ihren Auslauf. Eine Aussage wie „die meisten Anfragen dieser Art sind innerhalb einer genannten Zahl von Tagen erledigt“ gibt ihnen etwas zum Planen, und ein ehrlicher Hinweis, wenn das Team außerhalb seiner Erwartung liegt, schafft Vertrauen. Sie brauchen keine WIP- oder Durchsatzzahlen, profitieren aber, wenn diese Messgrößen die Wartezeit verkürzen.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Krankenhauses betreibt ein kombiniertes Team, das Serviceanfragen der Endnutzer und einen kleinen Strom geplanter Verbesserungen für die klinischen Systeme bearbeitet. Alle Zahlen in diesem Beispiel sind illustrativ.

Das Team hat ein Board mit den Zuständen Bereit, In Bearbeitung, Wartet auf andere, Review und Erledigt. Die Leitung bemerkt, dass der Monatsbericht 46 abgeschlossene Elemente zeigt, im Einklang mit dem Vormonat, doch das klinische Personal klagt, Anfragen dauerten „ewig“. Eine Prüfung des Tracker-Verlaufs zeigt, dass „begonnen“ gesetzt worden war, wenn eine Karte erstmals triagiert wurde, sodass die Zykluszeit Tage in einer Warteschlange enthielt.

Das Team schreibt die Workflow-Definition neu: „Begonnen“ ist der erste Wechsel nach In Bearbeitung, „abgeschlossen“ ist der Wechsel nach Erledigt, und Wartet auf andere zählt als in Bearbeitung, mit eigener blockierter Zeit. Mit den neuen Uhren beträgt der Median der Zykluszeit der letzten 10 Wochen 4 Tage, das 85. Perzentil 11 Tage und das 95. Perzentil 24 Tage. Das durchschnittliche WIP beträgt 19 Elemente bei einem Team von 6. Das Alter der Arbeitselemente zeigt sieben Karten, die älter als 11 Tage sind, und fünf davon warten auf einen externen Lieferanten.

Das Team beschließt drei Dinge. Es setzt eine SLE von „85 Prozent der Elemente sind in 11 Tagen oder weniger fertig“. Es setzt ein WIP-Limit von 12 und vereinbart, keine neuen geplanten Elemente mehr zu beginnen, wenn das Limit erreicht ist. Es ergänzt außerdem ein wöchentliches zehnminütiges Review der fünf ältesten Elemente. Die Lieferantenelemente werden über das Lieferantenmanagement mit den Daten aufgegriffen, seit denen sie warten.

Sechs Wochen später beträgt das 85. Perzentil der Zykluszeit 8 Tage, und das WIP liegt im Mittel bei 12. Der Durchsatz beträgt mehrere Wochen lang 44 Elemente pro Woche, nahe dem früheren Niveau. Dann bemerkt das Team ein mögliches Manipulationsrisiko: Die mediane Zykluszeit fällt in einer Woche auf 2 Tage, doch die Zahl der pro Woche abgeschlossenen Elemente steigt stark und der Anteil der innerhalb einer Woche wieder eröffneten Elemente klettert. Eine Stichprobe von Karten zeigt, dass große Anfragen in mehrere einzeilige Karten zerlegt wurden, um den Durchsatz zu steigern und die Zykluszeit zu verkürzen. Die Leitplanken haben es aufgefangen: der Mix der Elementgrößen und die Wiedereröffnungsrate. Das Team vereinbart eine Regel, was als ein Element zählt, führt die zerlegten Karten in den Berichten zusammen und veröffentlicht weiter die SLE und die Altersliste.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Flussmaße passen gut zu kontinuierlicher Auslieferung, weil Arbeit in kleinen Stücken freigegeben wird und die Uhren laufend laufen. Ein praktischer Schritt ist, das Alter von Arbeitselementen auf einem Board zu zeigen, das das ganze Team und seine Stakeholder sehen können, und in jedem regelmäßigen Review über die ältesten Elemente zu sprechen. Zu beachten ist, dass ein Board voller winziger Elemente den Durchsatz gesund aussehen lässt; halten Sie die Elementgröße also ungefähr konsistent und beobachten Sie die Zykluszeit an einem hohen Perzentil.

### KI

KI-Unterstützung steigert tendenziell den Durchsatz kleiner Elemente, etwa entworfenen Codes oder Antworten, ohne die Zeit zu verkürzen, die fertige Arbeit auf Review, Genehmigung oder Release wartet. Koppeln Sie den Durchsatz mit der Zykluszeit am 85. Perzentil und mit Nacharbeit, damit ein Anstieg des Outputs, der nur die Warteschlange füllt, sichtbar wird. Zu beachten ist, dass ein schnellerer erster Entwurf das Warten zu einem menschlichen Prüfer verlagern kann; messen Sie also, wo die Uhr nun sitzt.

### Automatisierung

Ziehen Sie die Beginn- und Stopp-Ereignisse automatisch aus Tracker und Pipeline und markieren Sie blockierte Zustände mit einem Grundcode, damit sich blockierte Zeit zählen lässt. Auch automatisierte Übergaben müssen gemessen werden: wie oft sie scheitern und wie lange eine gescheiterte Übergabe unbemerkt liegt. Zu beachten ist, dass ein automatischer Statuswechsel, etwa ein Bot, der Karten verschiebt, Zeitstempel erzeugen kann, über die kein Mensch entschieden hat.

### Analytik

Nutzen Sie die Verteilung der Zykluszeit, um für künftige Arbeit eine Spanne anzugeben, und zeigen Sie, wie viele Elemente dahinterstehen. Die Entscheidung, die dies untermauert, ist, was das Team zusagen kann und wo nach Verzögerung zu suchen ist. Zu beachten ist, dass eine Prognose aus wenigen Wochen Daten fragil ist; zeigen Sie also ihr Intervall und aktualisieren Sie sie, wenn die Daten wachsen.

## Branchenperspektive

**Startup.** Ein kleines Team kann mit einem physischen oder digitalen Board und einer Tabelle mit Beginn- und Abschlussdaten anfangen. Beginnen Sie mit Alter und WIP, denn sie brauchen keine Historie, und ergänzen Sie Zykluszeit-Perzentile nach etwa zehn Wochen Daten. Führen Sie ein Board für geplante Arbeit und dringende Korrekturen, nach Typ gekennzeichnet, damit Unterbrechungen sichtbar sind.

**Kleinunternehmen.** Arbeit kommt oft per E-Mail oder über einen gehosteten Help Desk an. Nutzen Sie die eigenen Erstellungs-, Beginn- und Lösungsdaten des Werkzeugs, prüfen Sie, dass „begonnen“ bedeutet, dass jemand mit der Arbeit angefangen hat, und exportieren Sie die Daten regelmäßig. Ein einfacher wöchentlicher Blick auf die ältesten offenen Elemente nützt mehr als ein aufwendiges Dashboard.

**Großunternehmen.** Viele Teams, Werkzeuge und Workflows machen konsistente Definitionen zur Hauptherausforderung. Einigen Sie sich auf ein kleines gemeinsames Vokabular für begonnen und abgeschlossen, lassen Sie Teams ihre lokalen Zustände darauf abbilden und halten Sie Flussdaten auf Teamebene beim Team. Nutzen Sie die Messgrößen, um systemische Warteschlangen zu erkennen, etwa gemeinsame Genehmigungsschritte oder gemeinsame Umgebungen, und nicht, um Teams zu vergleichen.

**Behörden und öffentlicher Sektor.** Gesetzliche Fristen, Prüfungsanforderungen und Beschaffungsregeln prägen die Uhren. Halten Sie die gesetzliche Uhr von der Flussuhr des Teams getrennt und dokumentieren Sie beide. Vom Lieferanten kontrollierte Schritte dominieren oft die Zykluszeit, erfassen Sie sie also als blockierte Zeit und nutzen Sie die Daten in Vertragsgesprächen (siehe Thema 8.4, Kennzahlen für Lieferanten und Verträge).

## Business Case: Motive, ROI und TCO

Die Kosten von Flussmaßen sind bei Werkzeugen niedrig und bei Disziplin moderat. Ein Team braucht ein Board mit verlässlichen Statuswechseln, einige Stunden zum Schreiben der Workflow-Definition, ein kurzes wiederkehrendes Review und jemanden, der die Diagramme pflegt. Stammen die Zeitstempel aus dem Tracker oder ITSM-Werkzeug, ist die Erhebung fast kostenlos. Die größeren Kosten sind die Zeit für die Abstimmung von Definitionen und die Änderung von Gewohnheiten, etwa keine neue Arbeit mehr zu beginnen, wenn das Limit erreicht ist.

Der Ertrag zeigt sich in Vorhersagbarkeit und weniger Überraschungen. Ein Team, das aus eigenen Daten eine SLE nennen kann, kann „Wann wird es fertig?“ ohne gepolsterte Schätzungen beantworten und stockende Arbeit früh erkennen. Beschreiben Sie den Nutzen über Messgrößen, die Sie selbst beobachten können: den Anteil der Elemente, die älter als das 85. Perzentil sind, die Breite der Lücke zwischen Median und 95. Perzentil und die in Statusbesprechungen verbrachte Zeit vorher und nachher. Hier wird kein Benchmarkwert angeboten, denn veröffentlichte Zahlen hängen von Workflow- und Elementdefinitionen ab. Die Gesamtbetriebskosten bestehen überwiegend aus der Zeit von Menschen, zählen Sie sie also und vergleichen Sie sie mit den Kosten von Arbeit, die unbemerkt wartet.

## Anti-Muster und Fallstricke

- **Elemente zählen, die nie begonnen haben.** Backlog-Karten blähen WIP und Alter auf und machen das Board unlesbar. Zählen Sie nur begonnene Elemente und halten Sie den Backlog an einem eigenen Ort (siehe Thema 2.6, Kennzahlen für Backlog und Refinement).
- **Ein WIP-Limit als zu erreichendes Ziel behandeln.** Ein Limit ist eine Obergrenze, die Warteschlangen sichtbar macht. Prüfen Sie, ob das Limit seine Aufgabe erfüllt, und senken Sie es, wenn das Team es verkraftet.
- **Nur Durchschnitte berichten.** Die mittlere Zykluszeit verbirgt den langen Auslauf, den Kunden spüren. Berichten Sie Median sowie 85. und 95. Perzentil.
- **Die Uhr beim Warten pausieren.** Die Uhr zu stoppen, wenn ein Element blockiert ist, lässt die Zykluszeit besser aussehen und verbirgt die Verzögerung. Lassen Sie die Uhr laufen und berichten Sie blockierte Zeit gesondert.
- **Durchsatz über Teams vergleichen.** Elementdefinitionen und -größen unterscheiden sich. Vergleichen Sie jedes Team mit seiner eigenen Historie.
- **Flussmaße nutzen, um Einzelpersonen zu beurteilen.** Abgeschlossene Elemente pro Person lädt zur Manipulation ein und ignoriert gemeinsame Arbeit. Halten Sie jede Messgröße auf Teamebene.
- **Den Workflow ändern, ohne es zu protokollieren.** Eine Änderung an einem Statusnamen oder einer Regel bricht den Trend still. Protokollieren Sie Datum und Grund und markieren Sie sie in jedem Diagramm.
- **Incidents, Anfragen und geplante Arbeit in einer Verteilung mischen.** Ihre Zykluszeiten unterscheiden sich von Natur aus. Kennzeichnen Sie nach Typ und lesen Sie jede Verteilung für sich.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definitionen und Uhren | „Begonnen“ und „abgeschlossen“ bedeuten für verschiedene Menschen Verschiedenes | Einige Teams schreiben ihre Workflow-Zustände auf | Eine schriftliche Workflow-Definition je Team, mit Uhrenregeln für blockierte Zeit | Definitionsänderungen protokolliert und in Diagrammen markiert; Uhren auf Drift überprüft | Definitionen über Teams und Lieferanten abgestimmt, wo Arbeit Grenzen überschreitet, und überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| Unfertige Arbeit messen | Status wird in Meetings erzählt | Karten zeigen Alter oder WIP bei einigen Teams | WIP täglich gezählt und Alter auf jeder Karte gezeigt, mit schriftlichem Limit | Aus historischen Perzentilen gewonnene Altersbänder treiben tägliches Handeln | Teamübergreifende Warteschlangen und Übergaben gemeinsam verfolgt, Alter mit Lieferanten geteilt |
| Abgeschlossene Arbeit messen | Zählungen geschlossener Tickets pro Monat | Durchschnitte der Zykluszeit bei einigen Teams berichtet | Zykluszeit-Perzentile und wöchentlicher Durchsatz aus einer Datenquelle | Trends gegen protokollierte Änderungen überprüft; SLE-Erreichung verfolgt | Prognosen aus Flussdaten fließen in Planung und Servicezusagen über Teams ein |
| Nutzung und Leitplanken | Zahlen dienen dazu, Menschen nachzujagen | Informelles Bewusstsein für Manipulation | Jede Messgröße mit einer Leitplanke gekoppelt und mit dem Team überprüft | Leitplankenalarme führen zu finanzierter Verbesserungsarbeit | Messgrößen und Leitplanken gemeinsam mit Kunden und Lieferanten überarbeitet |

## Checkliste

- [ ] Die Workflow-Definition ist geschrieben, mit benannten Zuständen für „begonnen“ und „abgeschlossen“.
- [ ] Ein Arbeitselement ist definiert, mit einer Regel zum Teilen und Zusammenführen von Elementen.
- [ ] WIP wird täglich aus Werkzeugdaten gezählt, und ein WIP-Limit ist aufgeschrieben.
- [ ] Jede Karte in Bearbeitung zeigt ihr Alter in Tagen.
- [ ] Die Zykluszeit wird als Median sowie 85. und 95. Perzentil über ein genanntes Fenster berichtet.
- [ ] Der Durchsatz wird als wöchentliches Verlaufsdiagramm mit seinem Fenster berichtet.
- [ ] Eine Service Level Expectation ist aus den eigenen Daten des Teams festgelegt und wird jedes Quartal überprüft.
- [ ] Blockierte Zeit wird mit Beginn, Ende und Grund erfasst, und die Elementuhr läuft weiter.
- [ ] Incidents, Anfragen und geplante Arbeit sind gekennzeichnet, sodass jedes für sich gelesen werden kann.
- [ ] Jede Änderung an einem Zustand oder einer Regel wird mit Datum und Grund protokolliert.
- [ ] Jede Messgröße ist mit einer Leitplanke aus der Manipulationstabelle gekoppelt.
- [ ] Keine Messgröße wird verwendet, um Einzelpersonen zu ordnen oder Teams zu vergleichen.

## KI-Prompts

**Eine Workflow-Definition auf Uhrenprobleme prüfen.**

```text
Here is the workflow for [team or service]: [list of states and transitions,
with a one-line meaning for each if known]. We want to compute work in progress,
throughput, work item age, and cycle time using the flow-literature definitions.
Identify which state should start the clock and which should stop it, any state
where the clock could be paused or misread, and any state that two teams might
interpret differently. Do not guess how our tool is configured. List your
assumptions and the questions I should answer to settle the definition.
```

**Einen Export von Arbeitselementen analysieren.**

```text
I have an export of [number] finished work items from [tool] with these fields:
[field names, for example id, type, started date, finished date, blocked
periods]. Explain how to compute cycle time percentiles, weekly throughput, and
daily work in progress from these fields, and how to handle missing dates,
reopened items, and items of type [types]. Provide the steps and a short script
outline in [language], and do not assume any values. List your assumptions and
the data quality checks I should run first.
```

**Eine Aussage zur Service Level Expectation entwerfen.**

```text
Our team handles [type of work] and has cycle time data for the last [number]
weeks, with a median of [value], an 85th percentile of [value], and a 95th
percentile of [value]. Draft a one-sentence service level expectation and a short
note explaining it to [audience, for example customers or the service owner],
including what it does not promise. Do not invent target values or benchmarks.
List your assumptions and the caveats about sample size.
```

**Manipulationsrisiken für unsere Flussmaße prüfen.**

```text
We track [list of flow measures] for [team or service]. The team is under
pressure to [pressure, for example reduce ticket age]. For each measure, list
realistic ways it could be made to look better without improving flow, the signal
in our data that would reveal each, and a paired guardrail. Do not invent
statistics or cite studies. List your assumptions and the data I would need to
test each risk.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine Flussmessgröße definiert, und die Leitplanke, die daneben stehen sollte.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass Änderungen an diesem Thema Vorlage, Definitionstabelle und Manipulationstabelle im Gleichklang halten.

## Wichtigste Erkenntnisse

- Vier Messgrößen beschreiben den Fluss: Arbeit in Bearbeitung, Durchsatz, Alter von Arbeitselementen und Zykluszeit, jede mit einer kurzen Definition und einer Uhr, die aufgeschrieben werden muss.
- Alter von Arbeitselementen und WIP sind die vorlaufenden Messgrößen; Durchsatz und Zykluszeit bestätigen, was bereits geschah.
- Berichten Sie Zykluszeit und Alter als Perzentile und legen Sie eine Service Level Expectation aus Ihren eigenen Daten fest.
- Dieselben Messgrößen passen zu Projektarbeit und Servicearbeit, sofern Sie Arbeitstypen kennzeichnen und jede Uhr benennen.
- Jede Messgröße lässt sich manipulieren, indem man die Uhr verschiebt, Elemente zerlegt oder Arbeit versteckt, koppeln Sie also jede mit einer Leitplanke.
- Halten Sie die Messgrößen auf Teamebene und nutzen Sie sie, um den Workflow zu verbessern, nie um Menschen zu ordnen.

## Quellen und weiterführende Literatur

1. Kanban Guide, kanbanguides.org, current version as of October 2026, https://kanbanguides.org/english/
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
7. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
8. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
9. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
10. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
13. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
