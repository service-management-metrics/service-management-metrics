# Kennzahlen für Backlog und Refinement

**Ein Backlog ist eine Warteschlange von Versprechen. Messen Sie deshalb, wie viele Versprechen warten, wie lange sie schon warten und wie viel der nächsten Arbeitsstrecke wirklich bereit ist, und behandeln Sie einen wachsenden Haufen alter Elemente als eine Entscheidung, die Sie noch nicht getroffen haben.**

## Überblick und Motivation

Jedes Team, das einen Service entwickelt oder betreibt, führt eine Liste von Arbeit, die es zu erwägen zugesagt hat. In der agilen Praxis ist diese Liste der [Product Backlog](https://en.wikipedia.org/wiki/Product_backlog), eine geordnete Menge von Elementen, die beschreibt, was zur Verbesserung des Produkts getan werden könnte. Auf einem Flussboard ist das Äquivalent die Menge der Elemente, die links der Spalten für begonnene Arbeit warten. Im IT-Service-Management (ITSM), wie von [ITIL](https://en.wikipedia.org/wiki/ITIL) beschrieben, sind die Äquivalente die offenen Incidents, Serviceanfragen, Probleme und Changes, die in einer Warteschlange warten. All das sind Backlogs. Sie unterscheiden sich darin, wer sie füllt, wie schnell Elemente sie verlassen müssen und was es bedeutet, dass ein Element wartet.

Die meisten Daten stammen aus einem [Issue-Tracking-System](https://en.wikipedia.org/wiki/Issue_tracking_system) oder einem ITSM-Werkzeug. Backlog-Kennzahlen beantworten eine schlichte Frage: Steht die Menge der zugesagten Arbeit im Verhältnis zur Kapazität, sie zu leisten, und ist die zugesagte Arbeit noch wert, getan zu werden? Ein Backlog, der unbegrenzt wächst, beschreibt keinen Plan. Er beschreibt eine Wunschliste, und jeder, der ihn liest, vom Product Owner bis zum Kunden, der ein Element eingebracht hat, bildet sich eine eigene Vorstellung, wann es erledigt wird. Die ehrliche Antwort lautet oft „nie“, und die Kosten, das nicht zu sagen, zahlt man in Vertrauen, in Zeit für das erneute Lesen alter Elemente und in Entscheidungen auf veralteten Informationen.

Refinement ist die Tätigkeit, die einen Backlog nützlich hält. In der agilen Praxis ist das Product-Backlog-Refinement die laufende Arbeit, Elementen Detail, Schätzungen und Reihenfolge zu geben, damit sie bereit zum Beginnen sind. Teams, die Arbeit ziehen, wenn Kapazität frei wird, nennen dieselbe Tätigkeit oft Nachfüllen (Replenishment) oder Backlog-Pflege. Im ITSM erscheint sie als Triage, Kategorisierung und Pflege einer Liste bekannter Fehler oder Probleme. Die Kennzahlen in diesem Thema messen Größe und Alter des Backlogs, wie viel Arbeit bereit ist und wie gut das Refinement dem Team ein Fenster bereiter Arbeit voraus hält.

Vier Begriffe kehren wieder. Ein **Element** ist ein einzelner Eintrag in einem Backlog, etwa eine [User Story](https://en.wikipedia.org/wiki/User_story), ein Fehler, eine Serviceanfrage oder ein Problemdatensatz. Das **Elementalter** ist die verstrichene Zeit, seit das Element in den Backlog gelangt ist, was sich vom Alter von Arbeitselementen in der Flussmessung unterscheidet, wo die Uhr mit dem Arbeitsbeginn startet (siehe Thema 2.1, Flussmaße). **Bereit** bedeutet, dass ein Element die schriftliche Definition of Ready eines Teams erfüllt, sodass das Team es beginnen und erwarten könnte, es innerhalb eines Servicelevel-Fensters abzuschließen. **Refinement** ist die Arbeit, Elemente bereit zu machen und Elemente zu entfernen, die nie getan werden.

Produkt- und Service-Backlogs verhalten sich verschieden, und sie zu mischen ist der häufigste Fehler in diesem Bereich. Ein Product Backlog ist ein Ort, an dem Elemente bewusst gehalten werden, bis der Product Owner ihre Reihenfolge entscheidet. Warten ist dort ein Normalzustand, und ein altes Element ist ein Anlass zu fragen, ob es noch zählt. Ein Service-Backlog aus Incidents und Anfragen ist eine Warteschlange mit angehängtem Versprechen: Der Kunde erwartet innerhalb einer Zeit eine Antwort. Warten ist dort vom ersten Moment an Kosten für den Kunden. Ein Product Backlog sollte beschnitten werden, ein Service-Backlog sollte abgebaut werden. Legt man beide in ein Diagramm, führt das Diagramm in die Irre.

Die agile Sicht behandelt den Backlog als lebendes Artefakt im Besitz eines Product Owners, kurz genug, um verstanden zu werden, und nach Wert geordnet. Die ITIL-Sicht behandelt offene Datensätze als Arbeit in Bearbeitung gegen ein vereinbartes Servicelevel, im Besitz einer Praktik. Beide Sichten teilen eine Tatsache aus der Warteschlangentheorie: Eine Warteschlange, die Elemente schneller aufnimmt, als sie sie abgibt, wächst, und die Wartezeit eines Elements wächst mit der Warteschlange (siehe Thema 2.3, Laufende Arbeit und Warteschlangentheorie). Das [Gesetz von Little](https://en.wikipedia.org/wiki/Little%27s_law) verbindet die Größe der Warteschlange, die Rate, mit der Elemente abgehen, und die durchschnittliche Zeit, die ein Element im System verbringt, und ist der Grund, warum Backlog-Größe und Backlog-Alter zwei Sichten auf dasselbe sind.

Eine letzte Unterscheidung hält das Thema ehrlich. Ein Backlog ist kein Maß für Produktivität oder dafür, wie beschäftigt ein Team ist. Ein großer Backlog kann ein beliebtes Produkt bedeuten, eine schlecht beschnittene Liste oder ein unterbesetztes Team, und die Zahl allein kann nicht sagen, was.

## Leitprinzipien

- **Alter ebenso messen wie Größe.** Die Größe sagt, wie viel wartet, das Alter, wie lange, und die ältesten Elemente zeigen, wo Entscheidungen vermieden werden.
- **Produkt- und Service-Backlogs getrennt halten.** Eine gehaltene Idee und ein wartender Kunde sind verschiedene Dinge, und jedes braucht seine eigene Lesart.
- **Auf bereite Arbeit zielen, nicht auf eine lange Liste.** Einige Wochen bereiter, gut geordneter Arbeit sind mehr wert als tausend Elemente, die sich niemand angesehen hat.
- **Beschneiden ist ein Merkmal.** Ein Element zu entfernen, das nie getan wird, ist ehrliche Arbeit, und eine Verwerfungsrate, die nie über null liegt, ist ein Warnzeichen.
- **Verteilungen nutzen.** Berichten Sie Median und 85. Perzentil des Elementalters und zeigen Sie das älteste Element, denn Durchschnitte verbergen den Auslauf.
- **Das Team und das System beschreiben.** Backlog-Kennzahlen zeigen, wie Arbeit ein Team erreicht und wie sie behandelt wird, nie wie eine Einzelperson abgeschnitten hat.
- **Jede Zahl an eine Entscheidung binden.** Würde ein Backlog-Diagramm nicht ändern, was Sie als Nächstes tun, verabschieden Sie es.

## Kennzahlendefinitionen

Die folgenden Kennzahlen gelten jeweils für einen einzelnen Backlog. Wählen Sie zuerst den Backlog (einen Product Backlog, eine Incident-Warteschlange, eine Anfragewarteschlange, eine Problemliste) und berichten Sie jede Kennzahl je Backlog. Perzentile verwenden die in Thema 1.6, Statistische Kompetenz für Servicekennzahlen, genannte [Perzentil](https://en.wikipedia.org/wiki/Percentile)-Methode.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Backlog-Größe | Zahl der offenen Elemente in einem benannten Backlog zu einem Zeitpunkt | Anzahl der Elemente mit Status offen oder bereit am Stichtag; schließt Elemente in Bearbeitung und geschlossene Elemente aus | Elemente | Momentaufnahme des Issue-Trackers oder ITSM-Werkzeugs | Incident-Management; Serviceanfragen-Management; Problemmanagement | Product Backlog; Eingangswarteschlange | Wöchentlich |
| Backlog-Alter | Verteilung, wie lange offene Elemente gewartet haben | Für jedes offene Element Stichtag minus Datum des Eintritts in den Backlog; Median, 85. Perzentil und ältestes Element berichten | Tage | Erstellungs- und Statusverlauf des Issue-Trackers oder ITSM | Incident-Management; Problemmanagement; kontinuierliche Verbesserung | Backlog-Gesundheit; Review gealterter Elemente | Wöchentlich |
| Tiefe bereiter Arbeit | Wie weit das Team bereite Arbeit voraus hat | Elemente, die die Definition of Ready erfüllen / durchschnittlich pro Woche abgeschlossene Elemente über die letzten sechs Perioden | Wochen | Bereit-Markierung des Issue-Trackers und Durchsatzhistorie | Geschäftsanalyse; Serviceanfragen-Management | Definition of Ready; Refinement | Je Planungszeitraum |
| Refinement-Abdeckung | Anteil des kurzfristigen Fensters, der bereit ist | Elemente in den nächsten zwei Zweiwochenzeiträumen erwarteter Arbeit (oder die obersten N nach Reihenfolge), die die Definition of Ready erfüllen / Elemente in diesem Fenster | Prozent | Reihenfolge, Bereit-Markierung und geplante Arbeit im Issue-Tracker | Geschäftsanalyse; Change-Befähigung (für geplante Changes) | Product-Backlog-Refinement | Je Planungszeitraum |
| Zufluss-Abfluss-Verhältnis des Backlogs | Ob Elemente schneller eintreffen, als sie abgehen | Im Zeitraum hinzugefügte Elemente / im selben Zeitraum durch Abschluss oder Verwerfung aus dem Backlog entfernte Elemente; ein Verhältnis über 1 bedeutet Wachstum | Verhältnis | Erstellungs- und Lösungsereignisse des Issue-Trackers oder ITSM | Incident-Management; Serviceanfragen-Management; Kapazitäts- und Leistungsmanagement | Ankunfts- und Abgangsraten | Wöchentlich |
| Verwerfungsrate des Backlogs | Anteil der Elemente, die ohne Lieferung abgehen | Als „wird nicht getan“, Duplikat oder veraltet geschlossene Elemente / alle im Zeitraum aus dem Backlog abgehenden Elemente; als erledigt geschlossene Elemente sind ausgeschlossen | Prozent | Lösungsfeld des Issue-Trackers | Kontinuierliche Verbesserung; Problemmanagement (Überprüfung bekannter Fehler) | Backlog-Beschneidung; Reihenfolge durch den Product Owner | Monatlich |
| Service-Backlog über Ziel | Anteil offener Service-Elemente, die älter als ihr vereinbartes Reaktions- oder Lösungsfenster sind | Offene Elemente, deren verstrichene Zeit das Serviceziel überschreitet / alle offenen Elemente in der Warteschlange; die Uhr läuft ab Erfassung und pausiert nur in Status, die die schriftliche Definition erlaubt | Prozent | ITSM-Werkzeug mit Servicelevel-Uhr | Service-Level-Management; Incident-Management; Serviceanfragen-Management | Expedite-Spur; Service Level Expectation | Täglich oder wöchentlich |

Drei Uhren müssen schlicht benannt werden. Das Backlog-Alter startet, wenn das Element im Backlog angelegt wird, und stoppt, wenn es durch Abschluss oder Verwerfung abgeht, sodass ein wieder eröffnetes Element ein neues Alter beginnt. Die Tiefe bereiter Arbeit nutzt den Durchsatz nur aus abgeschlossenen Elementen, nie die geplante Velocity, da die geplante Velocity eine Prognose ist. Der Service-Backlog über Ziel nutzt die Servicelevel-Uhr, die wegen erlaubter Pausen vom Backlog-Alter abweichen kann (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA).

## Empfehlungen

### Den Backlog messbar einrichten

**1. Benennen Sie jeden Backlog und seinen Eigner.** Jeder Backlog im Geltungsbereich hat einen Eigner, einen Zweck und eine Liste von Elementtypen. Ein Product Backlog gehört einem Product Owner, eine Incident-Warteschlange dem Service Desk oder der Lösergruppe. Ohne benannten Eigner entscheidet niemand, wann ein altes Element gehen sollte.

**2. Trennen Sie gehaltene Elemente von Warteschlangen-Versprechen.** Kennzeichnen Sie jedes Element entweder als Idee, die das Team zur Ordnung hält, oder als Zusage, auf die jemand wartet. Berichten Sie Backlog-Größe und -Alter für jedes getrennt. Eine Supportanfrage in einem Product Backlog ist ein Warteschlangen-Versprechen am falschen Ort, und sie verdient eine Serviceuhr.

**3. Schreiben Sie die Definition of Ready und halten Sie sie kurz.** Eine Definition of Ready listet die wenigen Dinge, die ein Team wissen muss, bevor es beginnt: das angestrebte Ergebnis, eine grobe Größe, die Akzeptanzbedingungen und jede Abhängigkeit. Halten Sie sie auf eine Handvoll Zeilen und überarbeiten Sie sie, wenn sie reibungslose Arbeit nicht mehr vorhersagt. Eine lange Checkliste macht aus Refinement Papierarbeit und lädt zum Abhaken ein.

**4. Erfassen Sie das Eintrittsdatum und den Abgangsgrund.** Alter und Verwerfungsrate hängen von zwei Feldern ab: dem Datum, an dem ein Element eintrat, und dem Grund, aus dem es ging. Machen Sie beide im Werkzeug zur Pflicht und fügen Sie eine kontrollierte Liste von Abgangsgründen wie erledigt, Duplikat, veraltet und wird nicht getan hinzu. Fehlende Daten sind die häufigste Ursache unbrauchbaren Backlog-Alters (siehe Thema 1.5, Datenquellen und Instrumentierung).

### Größe und Alter zusammen lesen

**5. Berichten Sie das Backlog-Alter als Verteilung.** Zeigen Sie Median, 85. Perzentil und das älteste Element sowie ein Histogramm nach Altersbändern wie unter 30 Tage, 30 bis 90, 90 bis 180 und über 180. Ein flaches Durchschnittsalter kann einen wachsenden Haufen uralter Elemente verbergen, weil neue Elemente den Durchschnitt nach unten ziehen. Die Sicht auf das älteste Element ist am schwersten zu verbergen.

**6. Nutzen Sie das Zufluss-Abfluss-Verhältnis, um Wachstum früh zu sehen.** Ein dauerhaft über 1 liegendes Verhältnis bedeutet, dass der Backlog wachsen wird, gleich wie groß er jetzt ist. Tragen Sie es als gleitende Vierwochenzahl auf, um Feiertage und Release-Wochen zu glätten. Koppeln Sie es mit dem Durchsatz, damit das Team sieht, ob das Wachstum aus steigender Nachfrage oder sinkendem Output kommt (siehe Thema 2.1, Flussmaße).

**7. Rechnen Sie Größe mit dem Durchsatz in Zeit um.** Teilen Sie die Backlog-Größe durch die durchschnittlich pro Periode abgeschlossenen Elemente, um eine grobe Zahl von Perioden wartender Arbeit zu erhalten, eine direkte Anwendung des Gesetzes von Little. Sagen Sie klar, dass es ein Durchschnitt ist, keine Zusage, und zeigen Sie die Spanne mit einem niedrigeren und einem höheren Durchsatz aus jüngeren Perioden. Ein Product Backlog von hundert Elementen, der einem Jahr Arbeit entspricht, ist ein Gespräch über Umfang, kein Zeitplan.

### Refinement im Fluss halten

**8. Zielen Sie auf ein Fenster bereiter Arbeit, nicht auf einen vollen Backlog davon.** Verfeinern Sie genug für die nächsten ein bis drei Wochen Arbeit und nicht mehr. Detail, das einem Element hinzugefügt wird, das sechs Monate lang nicht beginnt, veraltet meist, also messen Sie die Tiefe bereiter Arbeit und lassen Sie sie innerhalb eines vom Team gewählten und überprüften Zielbands schwanken, etwa ein bis drei Wochen Arbeit. Eine Tiefe weit über dem Band ist Verschwendung, eine Tiefe unter einer Woche Arbeit ein Risiko für Leerlauf oder überstürzte Planung.

**9. Messen Sie die Refinement-Abdeckung an den Elementen, die gleich beginnen.** Die Refinement-Abdeckung sieht nur die Spitze der Reihenfolge. Sie beantwortet die Frage, die das Planungsmeeting stellen wird: Wären die nächsten Elemente bereit, wenn wir jetzt begännen? Berichten Sie sie kurz vor der Planung, wenn ein Verfehlen noch behoben werden kann, nicht danach.

**10. Machen Sie Refinement zu einer regelmäßigen, kurzen Tätigkeit.** Agile Leitlinien, einschließlich des Scrum Guide, beschreiben Refinement als laufende Tätigkeit und überlassen ihre Form dem Team. Viele Teams finden, dass eine kurze, häufige Sitzung besser funktioniert als ein langes Meeting.

### Beschneiden und überprüfen

**11. Beschneiden Sie nach Plan und berichten Sie die Verwerfungsrate.** Überprüfen Sie jeden Monat die ältesten Elemente und fragen Sie bei jedem: Werden wir das in den nächsten sechs Monaten tun, und wenn nicht, warum behalten? Ein Element mit angegebenem Grund zu schließen ist kein Scheitern. Ein Team, das nie verwirft, hortet wahrscheinlich, und eines, das das meiste Eingegangene verwirft, nimmt wahrscheinlich Arbeit an, die es an der Tür hätte ablehnen sollen.

**12. Bearbeiten Sie Service-Backlogs durch Abbau, nicht durch Beschneiden.** Bei Incident- und Anfragewarteschlangen lautet die erste Frage, ob Elemente innerhalb ihres Servicefensters liegen. Verfolgen Sie den Anteil über Ziel und das älteste offene Element und halten Sie die Expedite-Spur für Elemente, die nicht warten können. Problem- und Known-Error-Listen liegen zwischen den beiden Welten: Sie werden gehalten, bis eine Behebung finanziert ist, überprüfen Sie sie also wie einen Product Backlog, mit einem angegebenen Überprüfungsdatum für jeden Eintrag (siehe Thema 4.6, Technische Schulden und bekannte Fehler).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Backlog-Größe | Elemente in großer Zahl als veraltet schließen, Elemente zerlegen, um beschäftigt zu wirken, oder Arbeit in Nebenlisten und Tabellenkalkulationen verbergen | Verwerfungsrate des Backlogs mit Abgangsgründen; regelmäßiger Vergleich des Werkzeugs mit der echten Liste der Anfragen; Kundenfeedback zu fallen gelassenen Elementen |
| Backlog-Alter | Das Eintrittsdatum zurücksetzen, indem alte Elemente geklont oder neu angelegt werden; Elemente zwischen Backlogs verschieben; wieder eröffnen statt neu erfassen, um die Uhr zu ändern | Prüfung geklonter und verschobener Elemente; Review der ältesten Elemente; Alter ab der ersten Erstellung über verknüpfte Datensätze gemessen |
| Tiefe bereiter Arbeit | Elemente als bereit markieren, ohne sie zu prüfen; die Tiefe aufblähen, indem detaillierte Elemente für wenig wertvolle Arbeit geschrieben werden | Stichprobe bereiter Elemente gegen die Definition gelesen; Nacharbeits- oder Zurück-ins-Refinement-Rate, wenn die Arbeit beginnt |
| Refinement-Abdeckung | Die Bereit-Markierung setzen, um die Zahl zu erfüllen; das Fenster verengen, damit weniger Elemente zählen | Zahl der nach der Planung zurückgeschickten Elemente; Erfolg beim Lieferziel und Umfangsänderung im Zeitraum (siehe Thema 2.5, Kennzahlen für Lieferprognosen und Planung) |
| Zufluss-Abfluss-Verhältnis des Backlogs | Leichte Elemente schnell schließen, um den Abfluss zu steigern, oder neue Elemente an der Tür abweisen, um den Zufluss niedrig zu halten | Alter der ältesten Elemente; Verwerfungsrate; Anteil ohne Grund abgelehnter Anfragen; vom Kunden berichtete unerfüllte Bedürfnisse |
| Verwerfungsrate des Backlogs | Elemente verwerfen, die Nutzer noch wollen, um die Größe zu verringern; oder Verwerfungen vermeiden, damit die Zahl milde aussieht | Überprüfung einer Stichprobe verworfener Elemente mit dem Anfragenden; Wiedereröffnungs- und Neuerfassungsrate verworfener Elemente |
| Service-Backlog über Ziel | Die Uhr mit einem Status „wartet auf Kunden“ pausieren, die Priorität herabstufen oder schließen und wieder eröffnen, um das Fenster zurückzusetzen | Zeitanteil in Pausenstatus; Wiedereröffnungsrate (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen); Nutzerzufriedenheit bei geschlossenen Tickets |

Ein gesunder Befund zeigt einen Backlog, dessen Größe stabil ist oder langsam fällt, dessen älteste Elemente wenige sind und jedes einen Eigner und einen angegebenen Grund hat und dessen kurzfristiges Fenster überwiegend bereit ist. Das Zufluss-Abfluss-Verhältnis liegt nahe 1, die Verwerfungsrate ist weder null noch dominant, und die Refinement-Abdeckung steigt, ohne dass die geplante Arbeit fragiler wird. Sehen die Zahlen gut aus, aber Kunden berichten weiter, dass mit ihren Anfragen nichts geschieht, vertrauen Sie den Kunden und prüfen Sie die Daten.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Kleiner, entschlossen beschnittener Product Backlog | Leicht zu verstehen und geordnet zu halten; ehrlich zur Kapazität | Riskiert, Ideen zu verwerfen, die später wichtig gewesen wären; Anfragende fühlen sich womöglich ignoriert |
| Großer, behaltener Backlog | Bewahrt jede Idee und Anfrage; nützliche Historie | Teuer zu lesen; veraltete Elemente führen die Planung in die Irre und verbergen echte Prioritäten |
| Tiefes Bereitschaftsfenster (viele Wochen verfeinert) | Reibungslose Planung; weniger Überraschungen beim Beginn der Arbeit | Verfeinertes Detail veraltet; Aufwand für Arbeit, die womöglich nie beginnt |
| Flaches Bereitschaftsfenster (etwa eine Woche) | Wenig vergeudetes Detail; bleibt flexibel | Planung kann ins Stocken geraten, wenn einige Elemente nicht bereit sind; weniger Vorlauf, um Abhängigkeiten zu erkennen |
| Strenge Definition of Ready | Weniger vage Starts; vorhersagbare Arbeit | Kann zum Tor werden, das den Fluss bremst und zum Abhaken einlädt |
| Leichte Definition of Ready | Schnell; vertraut dem Team | Mehr Entdeckung während der Arbeit; mehr Änderung im Zeitraum |

Die praktische Antwort ist, den Backlog klein genug zu halten, dass er in einer Sitzung lesbar ist, ein Bereitschaftsfenster von etwa ein bis drei Wochen Arbeit zu halten und die Definition of Ready kurz genug zu lassen, dass sich Menschen an sie erinnern. Service-Warteschlangen brauchen die entgegengesetzte Haltung: Klein ist kein Ziel, das Abschließen innerhalb des vereinbarten Fensters ist es. Wählen Sie in jeder Zeile die Zelle, die zu Ihrem Kontext passt, und schreiben Sie den Grund auf.

## Fragen für die Diskussion im Team

**1. Wenn wir heute aufhörten, Elemente hinzuzufügen, wie lange würde es bei unserem jüngsten Durchsatz dauern, den Backlog abzubauen, und fühlt sich diese Zahl glaubwürdig an?**
Teilen Sie zunächst die Backlog-Größe durch die typische Zahl pro Periode abgeschlossener Elemente und zeigen Sie die Spanne mit der besten und der schlechtesten jüngeren Periode. Fragen Sie, ob das Team dem Ergebnis glaubt und wohin die Zeit wirklich ginge. Ist die Zahl bei einem Product Backlog länger als ein Jahr, fragen Sie, welche Elemente entfernt werden könnten, ohne dass es jemand bemerkt.

**2. Welche sind die fünf ältesten Elemente, und wer hat entschieden, dass sie noch hier sein sollten?**
Lesen Sie die fünf ältesten Elemente mit ihren Eintrittsdaten laut vor. Fragen Sie zu jedem nach einem benannten Eigner und einem Grund, warum es bleibt, etwa Warten auf eine Abhängigkeit, bewusstes Zurückstellen oder Vernachlässigung. Einigen Sie sich für jedes auf eine Maßnahme: einplanen, verwerfen oder aufschreiben, warum es bleibt und wann erneut hinzusehen ist.

**3. Was bedeutet hier „bereit“, und kamen unsere jüngsten Überraschungen von Elementen, die es nicht waren?**
Bitten Sie jede Person, die Definition of Ready mit eigenen Worten aufzuschreiben, und vergleichen Sie dann. Unterschiede sind der erste Befund. Blicken Sie auf Elemente zurück, die Fragen im Zeitraum oder Nacharbeit verursacht haben, und fragen Sie, was sie bereit gemacht hätte. Die Moderation sollte der Versuchung widerstehen, für jede Überraschung einen Checklistenpunkt hinzuzufügen, und stattdessen den einen oder die zwei wählen, die den meisten Schmerz verhindert hätten.

**4. Welche unserer Backlogs halten Ideen, und welche halten Versprechen an jemanden?**
Listen Sie jeden Backlog auf und sortieren Sie seine Elemente in die zwei Arten. Supportanfragen, Incidents und zugesagte Kundenelemente sind Versprechen und brauchen eine Serviceuhr, Ideen und Erweiterungen werden zur Ordnung gehalten. Besprechen Sie, wo beide gemischt sind und was das dem Alterdiagramm antut. Das Ergebnis kann so schlicht sein wie ein Etikett und ein Filter, die es erlauben, jedes für sich zu berichten.

**5. Wann haben wir zuletzt absichtlich Elemente entfernt, und wie reagierten die Anfragenden?**
Beschneiden fühlt sich oft riskant an, also sehen Sie sich die Belege an. Prüfen Sie die Verwerfungsrate und ziehen Sie einige verworfene Elemente als Stichprobe. Fragen Sie, ob der Anfragende informiert wurde und ob jemand ein Element zurückverlangt hat. Die Moderation sollte der Gruppe helfen, sich auf eine einfache Botschaft an Anfragende zu einigen („wir planen das nicht; hier ist der Grund; bringen Sie es erneut ein, wenn sich die Umstände ändern“), damit Beschneiden routinemäßig und respektvoll wird.

**6. Wenn wir unsere Backlog-Diagramme besser aussehen lassen wollten, ohne jemandem zu helfen, was würden wir tun?**
Führen Sie das Manipulations-Review aus Thema 1.2 für jede Backlog-Kennzahl durch. Wahrscheinliche Antworten sind alte Elemente in großer Zahl zu schließen, Elemente zu klonen, um das Alter zurückzusetzen, Elemente früh als bereit zu markieren und das Fenster zu verengen, das die Abdeckung zählt. Prüfen Sie bei jeder Antwort, ob die Leitplanke in der Tabelle oben sie auffangen würde. Halten Sie die fest, die durchrutschen würden, und wählen Sie eine neue Prüfung für das nächste Quartal.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams nutzen Backlog-Kennzahlen, um die Planung ruhig zu halten. Tiefe bereiter Arbeit und Refinement-Abdeckung sagen dem Team, ob die nächste Planungssitzung reibungslos wird, und das Backlog-Alter zeigt, welche Versprechen still verrotten. Eine gute Gewohnheit ist, Alter, Zufluss-Abfluss und Bereitschaftstiefe bei jeder Refinement-Sitzung einige Minuten zu überprüfen und dann auf eine Sache zu handeln. Teams sollten eine kleine, stabile Menge nach außen veröffentlichen und detaillierte Altersbänder für den eigenen Gebrauch behalten (siehe Thema 2.5, Kennzahlen für Lieferprognosen und Planung).

### Service- und Betriebsteams

Betriebsteams führen Warteschlangen mit Uhren. Ihre zentrale Ablesung ist der Anteil offener Elemente über Ziel zusammen mit dem ältesten offenen Element, aufgeteilt nach Priorität und Pausenstatus. Problem- und Known-Error-Listen brauchen ein Überprüfungsdatum je Eintrag, damit gehaltene Elemente nicht dauerhaft werden. Teams sollten auch das Zufluss-Abfluss-Verhältnis der Incident-Warteschlange beobachten, denn ein Verhältnis über 1 über mehrere Wochen ist ein frühes Zeichen von Unterbesetzung oder einer wiederkehrenden Ursache (siehe Thema 3.2, Incident-Aufkommen und Priorität).

### Führung und Governance

Führungskräfte sehen einen Backlog als Absichtserklärung. Ein sehr großer Backlog sagt ihnen, dass die Organisation mehr verspricht, als sie liefern kann, und ein schnell schrumpfender kann Beschneidung oder verringerte Nachfrage bedeuten. Fragen Sie, welche Entscheidung die Zahl untermauert. Finanzieren Sie Zeit für Refinement und Beschneiden, vermeiden Sie Ziele für die rohe Backlog-Größe und verlangen Sie bei einer Größenangabe die Altersverteilung und die Verwerfungsgründe (siehe Thema 1.3, Ergebnisse vor Output: Auswählen, was gemessen wird).

### Kunden und Nutzer

Kunden erleben den Backlog als Schweigen. Ein vor sechs Monaten eingebrachtes Element ohne Antwort sagt mehr als jedes Diagramm. Nutzer schätzen es, die Wahrheit gesagt zu bekommen: Es ist geplant, es ist nicht geplant und hier ist der Grund, oder es wartet auf eine Abhängigkeit. Geben Sie Anfragenden eine Möglichkeit, den Status ihrer Elemente zu sehen, und behandeln Sie verworfene Elemente als Kommunikationsaufgabe, nicht als Datenbereinigung (siehe Thema 3.5, Kennzahlen für die Erfüllung von Serviceanfragen).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer regionaler Versicherer betreibt eine interne Schadenanwendung mit einem Produktteam und einem getrennten Service Desk. Die Zahlen in diesem Beispiel sind illustrativ.

Der Backlog des Produktteams enthält 412 Elemente. Das mediane Alter beträgt 138 Tage, das 85. Perzentil 410 Tage, und das älteste Element ist 29 Monate alt. Das Team schließt etwa 14 Elemente pro Zweiwochenzeitraum ab, der Backlog entspricht also bei jüngstem Durchsatz etwa 29 Zweiwochenzeiträumen Arbeit. Die Refinement-Abdeckung für die nächsten zwei Zweiwochenzeiträume beträgt 55 Prozent, und die Planung dauert oft lang, weil das Team fehlendes Detail entdeckt. Der Service Desk zeigt ein anderes Bild: 63 offene Anfragen, davon 9 Prozent über Ziel, und ein Zufluss-Abfluss-Verhältnis nahe 1.

Ein Product Owner bittet um eine kleinere Zahl und schlägt ein Ziel von weniger als 200 Elementen bis Quartalsende vor. Das Team will das nicht als eigenständiges Ziel behandeln. Stattdessen führt es ein Review durch. Es kennzeichnet Elemente als gehaltene Ideen oder zugesagte Arbeit und stellt fest, dass 38 der 412 Supportanfragen sind, von denen Kunden gesagt wurde, sie würden bearbeitet. Es verschiebt diese in die Service-Warteschlange mit einer Serviceuhr. Es liest die ältesten 40 Elemente und findet, dass 22 veraltet oder Duplikate sind. Es schließt diese mit Abgangsgründen und informiert die Anfragenden. Es setzt ein Bereitschaftsband von ein bis zwei Zweiwochenzeiträumen und widmet eine kurze wöchentliche Sitzung dem Refinement nur der Spitze der Reihenfolge.

Über drei Zweiwochenzeiträume fällt die Backlog-Größe auf 301, und die Verwerfungsrate für den Monat beträgt 31 Prozent, was absichtlich hoch ist und im Review markiert wird. Die Refinement-Abdeckung steigt auf 88 Prozent. Ein kurzer Blick in die Daten offenbart ein Manipulationsrisiko: Die Backlog-Größe fiel schneller als erwartet, weil zwei Teammitglieder eine Handvoll alternder Elemente in frische geklont hatten, um die Liste alter Elemente zu umgehen. Das Team bemerkt das, als das Diagramm der ältesten Elemente nicht mehr zur Stichprobe der Verwerfungen passt. Es vereinbart, das Alter ab der ersten Erstellung über verknüpfte Datensätze zu messen und Klone bei jeder Beschneidungssitzung zu überprüfen. Die für die Führung festgehaltene Entscheidung lautet, das Größenziel fallen zu lassen und stattdessen jedes Quartal die Altersverteilung, das Bereitschaftsfenster und die Verwerfungsgründe zu berichten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Refinement hält die nächste Arbeitsstrecke verstanden und bereit, im Gespräch mit Stakeholdern. Eine nützliche Praktik ist, Backlog-Alter und Tiefe bereiter Arbeit zusammen zu überprüfen und Elemente zu löschen oder zu entscheiden, die zu lange gewartet haben. Zu beachten ist, dass ein Backlog, der nur gepflegt wird, um kurz zu wirken, indem Elemente verworfen werden, ohne die Anfragenden zu informieren, Vertrauen beschädigt.

### KI

KI-Werkzeuge können Backlog-Elemente in großer Menge erzeugen und zerlegen, was die Backlog-Größe aufbläht, ohne Wert hinzuzufügen. Messen Sie Tiefe bereiter Arbeit und Verwerfungsrate und koppeln Sie die Backlog-Größe mit dem Anteil der von KI erzeugten Elemente, die die Lieferung erreichen. Zu beachten ist, dass ein großer, von KI erzeugter Backlog Rauschen für die Menschen hinzufügen kann, die ihn priorisieren müssen.

### Automatisierung

Ziehen Sie Backlog-Größe und -Alter automatisch aus dem Tracker und markieren Sie Elemente, die eine Altersschwelle überschreiten, für eine menschliche Entscheidung, nicht für automatisches Löschen. Automatisierung, die veraltete Elemente schließt, sollte selbst an fälschlich geschlossenen Elementen gemessen werden. Zu beachten ist, dass ein Bot, der alte Elemente schließt, die Alterszahl verbessert, ohne den Anfragenden zu antworten.

### Analytik

Zeigen Sie Altersverteilung und Zufluss-Abfluss-Verhältnis im Zeitverlauf, mit aufgelisteten ältesten Elementen. Die Entscheidung, die dies untermauert, ist, was zugesagt, zurückgestellt oder fallen gelassen wird. Zu beachten ist, dass die Backlog-Größe allein wenig sagt, denn ein langer Backlog gut verstandener kleiner Elemente kann gesünder sein als ein kurzer vager Elemente.

## Branchenperspektive

**Startup.** Der Backlog ist oft eine einzelne Liste im Kopf der Gründerin oder ein einfaches Board. Verfolgen Sie nur das Alter der ältesten Elemente und ob die nächste Arbeit bereit ist. Beschneiden Sie hart und oft, denn die richtige Antwort für eine drei Monate alte Idee ist oft, sie zu vergessen.

**Kleinunternehmen.** Produkt- und Servicearbeit teilen sich meist ein Team, der Backlog mischt also gehaltene Ideen und Kundenversprechen. Trennen Sie sie früh mit einem Etikett. Eine einzelne Liste, wöchentlich in einem kurzen Meeting gelesen, schlägt aufwendige Kennzahlen. Beobachten Sie zuerst das Alter kundenseitiger Elemente, denn eine vergessene Anfrage kann eine Beziehung kosten.

**Großunternehmen.** Viele Teams und viele Warteschlangen vervielfachen die Möglichkeiten, einen Backlog falsch zu lesen. Definieren Sie die Kennzahlen einmal, mit den Uhren und den Abgangsgründen, und vermeiden Sie es, die Größe von Product Backlogs zu einer einzigen Portfoliozahl zu verdichten. Vergleichen Sie ein Team mit seiner eigenen Historie, nie mit einem anderen Team mit anderer Arbeit (siehe Thema 2.4, Kennzahlen für den Wertstrom). Problem- und Known-Error-Listen verdienen einen eigenen Überprüfungsrhythmus.

**Behörden und öffentlicher Sektor.** Zusagen an Bürgerinnen und Bürger, gesetzliche Reaktionszeiten und Prüfspuren prägen die Service-Warteschlangen. Behandeln Sie die gesetzlichen Uhren als feste Eingaben und berichten Sie den Anteil über Ziel mit den verwendeten Definitionen. Product Backlogs können durch Förderrunden und Beschaffung eingeschränkt sein, sodass das Bereitschaftsfenster womöglich länger sein muss als in einem kommerziellen Team. Halten Sie Verwerfungsgründe sichtbar, denn öffentliche Rechenschaftspflicht macht stilles Fallenlassen riskant.

## Business Case: Motive, ROI und TCO

Die Kosten dieser Kennzahlen sind bescheiden. Die meisten Daten liegen bereits im Issue-Tracker oder ITSM-Werkzeug. Die Kosten sind ein verpflichtendes Eintrittsdatum und ein Abgangsgrund, eine kurze Beschneidungssitzung jeden Monat, einige Minuten im Refinement, um Alters- und Bereitschaftsdiagramme anzusehen, und etwas Aufwand, Produkt- und Service-Backlogs zu trennen. Eine Tabellenkalkulation oder die eingebauten Berichte des Werkzeugs genügen zum Start, und es muss kein neues Produkt gekauft werden.

Der Ertrag kommt aus vermiedener Verschwendung und klareren Versprechen. Teams, die ein Bereitschaftsfenster halten, verbringen weniger Planungszeit damit, wiederzuentdecken, was ein Element bedeutet, und Teams, die beschneiden, hören auf, Elemente erneut zu lesen, die nie getan werden. Kunden bekommen früher ehrliche Antworten, was wiederholte Kontakte und Eskalationen verringert. Beschreiben Sie den Nutzen in Mustern, die das Team selbst prüfen kann: kürzere Planungssitzungen, weniger nach Arbeitsbeginn ins Refinement zurückgegebene Elemente, weniger Nachfragen zu alten Anfragen und weniger Überraschungen, wenn die Führung fragt, was in der Pipeline ist. Dieses Thema bietet keinen Prozentsatz, denn ohne Quelle kann keiner genannt werden. Messen Sie ein Quartal lang Ihre eigene Baseline und vergleichen Sie.

## Anti-Muster und Fallstricke

- **Backlog-Größe als Produktivitäts- oder Leistungswert behandeln.** Die Größe hängt von Nachfrage, Umfang und Beschneidungsgewohnheiten ab. Berichten Sie Größe mit Alter und Verwerfungsgründen und vergleichen Sie darauf nie Teams.
- **Gehaltene Ideen und Kundenversprechen in einer Liste mischen.** Das Alterdiagramm liest sich dann als Vernachlässigung, und die Serviceuhr fehlt. Trennen Sie sie mit einem Etikett und berichten Sie jedes gesondert.
- **Alles verfeinern.** Detaillierte Elemente, die Monate nicht beginnen, veralten. Halten Sie ein Bereitschaftsfenster und verfeinern Sie knapp vor dem Bedarf.
- **Nie verwerfen.** Eine ständig wachsende Liste macht jede Aussage über den Umfang falsch. Beschneiden Sie nach Plan und halten Sie jedes Mal den Grund fest.
- **Das Alter durch Klonen oder Verschieben von Elementen zurücksetzen.** Es schmeichelt dem Diagramm und verliert Historie. Messen Sie das Alter ab der ersten Erstellung über verknüpfte Datensätze und prüfen Sie Klone.
- **Eine Definition of Ready als Tor nutzen.** Blockiert sie Arbeit, die das Team sicher beginnen könnte, bremst sie den Fluss. Halten Sie sie kurz und lassen Sie das Team sie mit angegebenem Grund übergehen.
- **Ziele für die rohe Größe.** Ein Ziel von weniger als N Elementen lädt zum Massenschließen ein. Setzen Sie Ziele für das Alter der ältesten Elemente oder den Anteil über Serviceziel, mit einer Leitplanke.
- **Das Durchschnittsalter verwenden.** Neue Elemente ziehen den Durchschnitt nach unten, während sich alte häufen. Zeigen Sie den Median, das 85. Perzentil und das älteste Element.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definitionen und Daten | Eintrittsdaten und Abgangsgründe fehlen oder sind uneinheitlich | Einige Teams erfassen Daten; Definitionen von Ready unterscheiden sich | Eine schriftliche Definition von Ready und von Backlog-Alter; verpflichtendes Eintrittsdatum und Abgangsgrund | Datenqualität stichprobenartig geprüft; Alter über Klone und Verschiebungen gemessen | Definitionen über Teams und Lieferanten geteilt und überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| Backlog-Gesundheit | Der Backlog wächst unbemerkt; kein Beschneiden | Gelegentliches Aufräumen, wenn die Liste unbeherrschbar wird | Planmäßiges Beschneiden; Produkt- und Service-Backlogs getrennt | Größe, Alter, Zufluss-Abfluss und Verwerfungsrate im Trend und mit Leitplanke überprüft | Backlog-Richtlinie über Teams auf Nachfrage und Kapazität abgestimmt; Kunden sehen den Status ihrer Elemente |
| Refinement | Ad-hoc-Detail bei der Planung ergänzt | Regelmäßige Sitzungen bei einigen Teams | Kurzes, regelmäßiges Refinement mit vereinbartem Bereitschaftsfenster | Abdeckung und Bereitschaftstiefe überprüft und mit Lieferergebnissen verknüpft | Refinement über Teams und Abhängigkeiten geteilt; das Fenster passt sich den Bedingungen an |
| Nutzung in Entscheidungen | Zahlen werden nur gezeigt, wenn etwas schiefgeht | Der Führung berichtet, ohne Diskussion | Team überprüft Alter und Bereitschaftstiefe im Refinement | Finanzierte Verbesserungsarbeit folgt dem Review | Backlog-Belege fließen in Portfolio- und Kapazitätsentscheidungen der Organisation ein |

## Checkliste

- [ ] Jeder Backlog hat einen benannten Eigner und einen angegebenen Zweck.
- [ ] Gehaltene Ideen und Kundenversprechen sind gekennzeichnet und werden getrennt berichtet.
- [ ] Jedes Element hat ein verpflichtendes Eintrittsdatum und einen Abgangsgrund aus einer kontrollierten Liste.
- [ ] Das Team hat eine kurze schriftliche Definition of Ready.
- [ ] Das Backlog-Alter wird als Median, 85. Perzentil und ältestes Element berichtet.
- [ ] Das Zufluss-Abfluss-Verhältnis wird als gleitende Zahl neben dem Durchsatz gezeigt.
- [ ] Ein Bereitschaftsfenster ist vereinbart, und die Tiefe bereiter Arbeit wird dagegen berichtet.
- [ ] Die Refinement-Abdeckung wird vor der Planung berichtet, nicht danach.
- [ ] Eine monatliche Beschneidungssitzung steht im Kalender, und die Verwerfungsrate wird berichtet.
- [ ] Service-Warteschlangen zeigen den Anteil über Ziel und die Nutzung von Pausenstatus.
- [ ] Das Manipulations-Review für Backlog-Kennzahlen wurde in diesem Quartal durchgeführt.

## KI-Prompts

**Die Gesundheit eines Backlogs beurteilen.**

```text
I work with [team name], which owns [type of backlog, such as a product
backlog or incident queue]. Here is a summary of the backlog: [number of
items], age distribution [median, 85th percentile, oldest item], items finished
per [week] [numbers], items added per [week] [numbers], and
discard reasons [counts]. Our definition of ready is: [definition].

Explain what this combination of figures could mean, listing at least three
different explanations, and suggest what extra data would tell them apart. Do not
invent benchmark values or targets. List your assumptions and anything you could
not determine from what I gave you.
```

**Eine Definition of Ready entwerfen.**

```text
Help me draft a short definition of ready for [team name], which works on
[type of work]. Our current problems with unready items are: [list of
problems]. Propose no more than six criteria, say what problem each criterion
addresses, and describe how the team could check each one in under a minute.
Also suggest when the team should be allowed to start an item that does not meet
the definition. Do not copy any framework text. List your assumptions.
```

**Eine Backlog-Beschneidungssitzung planen.**

```text
Plan a [length of time] pruning session for the backlog of [team name]. The
backlog has [number] items, and the oldest are [age]. The leave reasons we
use are [list]. Propose an agenda, the questions to ask about each old item, a
simple message to send to requesters whose items are removed, and the data to
record afterward. Point out ways the session could be gamed and how to catch
them. Do not invent statistics. List your assumptions.
```

**Produkt- und Servicearbeit in einem gemischten Backlog trennen.**

```text
Here is a sample of [number] items from our combined backlog in [tool name],
with fields [list of fields]. Classify each item as a held idea, a customer
promise with a service expectation, or unclear, and explain your reasoning. Then
suggest labels and a simple rule for routing future items. Report patterns, not
individuals, and do not guess at facts not present in the data. List your
assumptions and the items you could not classify.

[paste items, with personal data removed]
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke und die Nachbarthemen für eine Backlog-Kennzahl zu finden, die Sie einführen wollen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein überarbeitetes Backlog-Thema Manipulationsvektoren, Leitplanken und Querverweise konsistent hält.

## Wichtigste Erkenntnisse

- Ein Backlog ist eine Warteschlange von Versprechen, lesen Sie also Größe und Alter zusammen und zeigen Sie die ältesten Elemente.
- Halten Sie gehaltene Ideen und Kundenversprechen in getrennten Sichten, denn Warten bedeutet in beiden Verschiedenes.
- Zielen Sie auf ein kurzes Fenster bereiter Arbeit und messen Sie die Refinement-Abdeckung an den Elementen, die gleich beginnen.
- Beschneiden Sie nach Plan, halten Sie fest, warum Elemente gehen, und behandeln Sie eine Verwerfungsrate von null als Warnung.
- Zielen Sie auf Alter und Servicefenster, nicht auf rohe Größe, und koppeln Sie jede Backlog-Kennzahl mit einer Leitplanke.
- Backlog-Kennzahlen beschreiben, wie Arbeit ein Team erreicht und wie sie behandelt wird, und ordnen nie Menschen.

## Quellen und weiterführende Literatur

1. Schwaber, K., and Sutherland, J., *The Scrum Guide*, 2020, https://scrumguides.org/scrum-guide.html.
2. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
3. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Cohn, M., *User Stories Applied: For Agile Software Development*, Addison-Wesley, 2004.
6. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [User story](https://en.wikipedia.org/wiki/User_story).
11. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
12. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
13. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
