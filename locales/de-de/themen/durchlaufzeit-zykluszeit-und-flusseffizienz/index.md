# Durchlaufzeit, Zykluszeit und Flusseffizienz

**Durchlaufzeit, Zykluszeit und Flusseffizienz bedeuten nur etwas, wenn jede einen schriftlichen Start und Stopp hat, als Verteilung statt als Durchschnitt berichtet wird und ein Blick auf das Warten möglich ist, das den größten Teil der verstrichenen Zeit füllt.**

## Überblick und Motivation

Fast jedes Team will wissen, wie lange Arbeit dauert. Die Frage klingt einfach und erzeugt Streit, denn „wie lange“ hängt davon ab, wer fragt und wo die Stoppuhr startet. Ein Kunde zählt ab dem Moment, in dem er gefragt hat. Ein Entwickler zählt ab dem Moment, in dem er die Arbeit aufgenommen hat. Eine Betriebsleiterin zählt ab dem Moment, in dem das Ticket einer Warteschlange zugewiesen wurde. Alle drei haben mit ihrer eigenen Uhr recht, und alle drei erhalten für dasselbe Stück Arbeit verschiedene Zahlen.

[Durchlaufzeit](https://en.wikipedia.org/wiki/Lead_time) (Lead Time) ist die verstrichene Zeit zwischen dem Eintreffen einer Anfrage und ihrer Erfüllung, gesehen von der Seite der Person, die gefragt hat. [Zykluszeit](https://en.wikipedia.org/wiki/Cycle_time) (Cycle Time) ist die verstrichene Zeit zwischen dem Moment, in dem sich das Team auf ein Stück Arbeit festlegt, und dem Moment, in dem es abgeschlossen ist, gesehen von der Seite des Teams, das sie leistet. Der Unterschied zwischen beiden ist die Zeit, die die Anfrage wartete, bevor das Team begann. Flusseffizienz ist der Anteil der verstrichenen Zeit, in dem tatsächlich jemand an dem Element arbeitete, im Gegensatz dazu, dass das Element wartete. Dauerte ein Element 10 Tage vom Beginn bis zum Abschluss und wurde 1 Tag daran gearbeitet, beträgt seine Flusseffizienz 10 Prozent. Die Berührungszeit (Touch Time) ist der arbeitende Teil. Die Wartezeit ist alles andere.

[Lean-Softwareentwicklung](https://en.wikipedia.org/wiki/Lean_software_development) und der Kanban Guide haben diese Ideen aus der Fertigung in die Wissensarbeit getragen. ITIL-Praktiken sprechen von Lösungszeit, Erfüllungszeit und Servicelevel-Zielen, und agile Teams sprechen von Zykluszeit und Arbeitselementen. Dieses Thema gibt eine Menge von Definitionen, die tragen, wenn ein Incident, eine Anfrage, ein Change und eine Story in einem Meeting zusammentreffen.

Verstrichene Zeit hat eine Eigenschaft, die Menschen beim ersten Messen überrascht. In den meisten Wissens- und Servicearbeiten verbringt das Element den Großteil seines Lebens mit Warten: auf eine Entscheidung, einen Prüfer, eine Umgebung, einen Lieferanten, ein Wartungsfenster oder einfach auf eine Person, die mit etwas anderem beschäftigt ist. Dieses Warten sichtbar zu machen ist das Nützlichste, was diese Kennzahlen tun. Ein Team, das seine Wartezeit nicht sieht, versucht tendenziell, sich zu verbessern, indem es schneller arbeitet, was in einem System wenig bewirkt, in dem 90 Prozent der verstrichenen Zeit in Warteschlangen verbracht werden. Das Verhalten von Warteschlangen wird in Thema 2.3, Laufende Arbeit und Warteschlangentheorie, ausführlich behandelt, und die vollständige Sicht auf den Wertstrom steht in Thema 2.4, Kennzahlen für den Wertstrom.

Zeitmessgrößen werden als Perzentile berichtet, etwa als Median und 85. oder 95. [Perzentil](https://en.wikipedia.org/wiki/Percentile), aus den Gründen in Thema 1.6, Statistische Kompetenz für Servicekennzahlen. Die rohen Zeitstempel stammen aus den Quellen in Thema 1.5, Datenquellen und Instrumentierung. Die Flussmaße Arbeit in Bearbeitung, Durchsatz und Alter von Arbeitselementen stehen in Thema 2.1, Flussmaße, und die DORA-Messgröße der Change-Durchlaufzeit steht in Thema 2.8, DORA-Kennzahlen. Dieses Thema behandelt die Zeitmessgrößen selbst: wie man sie definiert, damit sie vergleichbar sind, wo ihre Uhren starten und stoppen und wie man das Warten in ihnen sichtbar macht.

## Leitprinzipien

- **Die Uhr benennen, bevor man die Zahl liest.** Jede Zeitmessgröße hat ein Startereignis, ein Stoppereignis und eine Liste von Ausschlüssen. Eine Zahl ohne sie ist eine Meinung.
- **Die Durchlaufzeit gehört dem Kunden, die Zykluszeit dem Team.** Behalten Sie beide und kennzeichnen Sie immer, welche ein Diagramm zeigt, denn die Lücke zwischen ihnen ist selbst ein Signal.
- **Verteilungen berichten, nie nur einen Mittelwert.** Der Median beschreibt das typische Element. Ein hohes Perzentil beschreibt das Risiko, das der Kunde tatsächlich trägt.
- **Das Warten ist der Hauptbefund.** Die Flusseffizienz ist meist niedrig, und die Antwort ist, Warteschlangen und Übergaben zu beseitigen, nicht Menschen zur Eile anzuhalten.
- **Pausenstatus sind Entwurfsentscheidungen.** Kann die Uhr gestoppt werden, indem ein Element in einen Status „wartet“ verschoben wird, wird dieser Status genutzt, also zählen Sie, wie oft und von wem.
- **Ein Element mit seinesgleichen vergleichen.** Ein Incident, eine Standardanfrage, ein Change und eine Funktion haben verschiedene Formen. Segmentieren Sie nach Arbeitstyp, bevor Sie irgendetwas vergleichen.
- **Systeme messen, nicht Menschen.** Zeitmessgrößen beschreiben, wie Arbeit durch ein Team oder einen Service fließt. Sie sind nie eine Rangfolge von Einzelpersonen.

## Kennzahlendefinitionen

Die Tabelle unten verwendet ein Vokabular für agile Arbeitselemente und ITIL-Datensätze. „Arbeitselement“ bedeutet jeden Datensatz, der durch einen Workflow wandert: eine Story, eine Aufgabe, einen Incident, eine Serviceanfrage, einen Change oder einen Problemdatensatz. Alle Dauern sind verstrichene Kalenderzeit, sofern nicht anders angegeben, und jede wird als Median und hohes Perzentil berichtet.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Durchlaufzeit | Verstrichene Zeit vom Eintreffen einer Anfrage bis zu ihrer Auslieferung an den Anfragenden | Auslieferungs-Zeitstempel minus Zeitstempel des Eintreffens der Anfrage, je Arbeitselement; die Uhr startet, wenn die Anfrage erfasst wird, und stoppt, wenn der Anfragende das Ergebnis nutzen kann; noch offene und vor der Auslieferung stornierte Elemente sind ausgeschlossen und werden gesondert gezählt | Tage oder Stunden | Verlauf des ITSM-Werkzeugs oder Issue-Trackers | Serviceanfragen-Management; Incident-Management; Change-Befähigung | Durchlaufzeit auf dem Team-Board; Zeit von der Anfrage bis zum Release | Wöchentlich, monatlich überprüft |
| Zykluszeit | Verstrichene Zeit von dem Moment, in dem das Team die Arbeit beginnt, bis zu dem Moment, in dem sie abgeschlossen ist | Abschluss-Zeitstempel minus Beginn-Zeitstempel, je Arbeitselement; die Uhr startet beim ersten Wechsel in einen aktiven Arbeitszustand und stoppt beim ersten Wechsel in einen Erledigt-Zustand; Zeit vor dem Beginn und nach dem Erledigt-Zustand ist ausgeschlossen | Tage oder Stunden | Zustandsverlauf von Tracker oder Board | Incident-Management; Serviceanfragen-Management; Change-Befähigung | Zykluszeit (siehe Thema 2.1, Flussmaße) | Wöchentlich |
| Berührungszeit | Zeit, in der eine Person oder eine Automatisierung aktiv an dem Element arbeitet | Summe der Intervalle, die das Element in als aktive Arbeit eingestuften Zuständen verbringt; Wartezustände, blockierte Zustände und Warteschlangenzustände sind ausgeschlossen | Stunden | Zustandsverlauf des Trackers, wobei jeder Zustand als aktiv oder wartend eingestuft ist | Incident-Management; Serviceanfragen-Management | Bearbeitungszeit in einer Wertstromanalyse | Monatliche Stichprobe |
| Wartezeit | Zeit, in der das Element in einer Warteschlange ist, blockiert oder pausiert | Zykluszeit minus Berührungszeit, je Arbeitselement; n. z. für Elemente ohne erfassten Beginn | Tage oder Stunden | Zustandsverlauf des Trackers | Incident-Management; Service-Level-Management | Wartezeit oder blockierte Zeit auf einem Board | Monatlich |
| Flusseffizienz | Anteil der Zykluszeit, der in aktiver Arbeit verbracht wird | Summe der Berührungszeit / Summe der Zykluszeit, für im Zeitraum abgeschlossene Elemente; Elemente mit fehlendem Zustandsverlauf sind ausgeschlossen und werden gesondert gezählt | Prozent | Zustandsverlauf des Trackers | Kontinuierliche Verbesserung; Serviceanfragen-Management | Flusseffizienz aus der Lean-Praxis | Monatlich |
| Anteil pausierter Uhr | Anteil der Zykluszeit, in dem die formale Serviceuhr pausiert war | Summe der Pausendauern / Summe der Zykluszeit, für im Zeitraum abgeschlossene Elemente; Pausen sind die in den schriftlichen Uhrenregeln definierten Status | Prozent | Statusverlauf des ITSM-Werkzeugs | Service-Level-Management; Incident-Management | Zeit in Spalte blockiert oder in Wartestellung | Monatlich |

Der Start der Zykluszeit-Uhr ist eine Entscheidung des Teams, die aufgeschrieben werden muss. Die formale Uhr in einem Service Level Agreement (SLA) pausiert oft, während ein Element auf den Kunden wartet, daher berichtet dieses Thema den Pausenanteil, statt diese Zeit zu verwerfen. Die Berührungszeit wird aus Zuständen abgeleitet, ihre Genauigkeit hängt also davon ab, wie gut die Zustände die Arbeit beschreiben.

## Empfehlungen

### Die Uhren definieren

**1. Schreiben Sie Start und Stopp jeder Uhr auf.** Bei der Durchlaufzeit ist der Start das Eintreffen der Anfrage, wie vom ersten System erfasst, das der Anfragende berührt, und der Stopp ist der Moment, in dem der Anfragende das Ergebnis nutzen kann. Bei der Zykluszeit ist der Start der erste Wechsel in einen aktiven Zustand und der Stopp der erste Wechsel in einen Erledigt-Zustand. Legen Sie beides ins Kennzahlenregister (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen) und zeigen Sie die Definition unter jedem Diagramm.

**2. Einigen Sie sich, was „erledigt“ für jeden Arbeitstyp bedeutet.** Ein Change ist erledigt, wenn er in Produktion läuft und verifiziert ist, nicht wenn der Code zusammengeführt ist. Ein Incident ist erledigt, wenn der Service für den Nutzer wiederhergestellt ist, nicht wenn das Ticket am Freitag von einem Massenjob geschlossen wird. Eine Anfrage ist erledigt, wenn der Anfragende die Sache hat. Unterscheidet sich „erledigt“ je Team, lassen sich Zykluszeiten über Teams nicht vergleichen.

**3. Behalten Sie sowohl Durchlaufzeit als auch Zykluszeit und beobachten Sie die Lücke.** Der Unterschied zwischen ihnen ist die Zusage-Wartezeit: die Zeit, die eine Anfrage liegt, bevor das Team beginnt. Eine kurze Zykluszeit neben einer langen Durchlaufzeit besagt, dass das Team an dem, was es beginnt, effizient arbeitet und der Eingang der Engpass ist. Eine lange Zykluszeit neben einer kurzen Durchlaufzeit besagt, dass Anfragen schnell angenommen werden und dann im Team stocken.

### Zeit ehrlich berichten

**4. Verwenden Sie Perzentile und sagen Sie welche.** Berichten Sie Median und 85. oder 95. Perzentil, zum Beispiel „die Hälfte der Elemente war innerhalb von 4 Tagen fertig und 85 Prozent innerhalb von 11 Tagen“. Diese Aussage ist zugleich eine Prognose: Ein neues Element hat eine Wahrscheinlichkeit von etwa 85 Prozent, innerhalb von 11 Tagen fertig zu werden, wenn das System gleich bleibt. Ein Mittelwert kann diesen Satz nicht liefern, und er bewegt sich weit, wenn ein einzelner Ausreißer auftaucht (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

**5. Tragen Sie jedes Element auf, nicht nur die Zusammenfassung.** Ein Streudiagramm der Zykluszeit gegen das Abschlussdatum zeigt die Form des Systems auf einen Blick: Gruppierungen, ein langsames Abdriften nach oben, einen plötzlichen Sprung nach einer Prozessänderung. Zusammenfassende Zahlen gehören neben das Diagramm. Ein Werkzeug, das nur eine Durchschnittslinie bietet, entfernt die Information, die das Team am meisten braucht.

**6. Segmentieren Sie nach Arbeitstyp und Servicegüteklasse.** Ein dringender Incident, eine Standardanfrage, ein geplanter Change und eine Recherche-Story haben unterschiedliche erwartete Zeiten. Teilen Sie die Daten nach Typ und, wo die Priorität die Behandlung der Arbeit ändert, nach Priorität, bevor Sie nach Mustern suchen. Gemischte Populationen erzeugen eine breite Verteilung, die niemandes Erleben beschreibt.

### Das Warten sichtbar machen

**7. Stufen Sie jeden Status als aktiv, wartend oder erledigt ein.** Das ist die Arbeit, die Flusseffizienz möglich macht. „In Entwicklung“ und „im Review, Prüfer arbeitet“ sind aktiv. „Wartet auf Review“, „wartet auf Genehmigung“, „blockiert“ und „wartet auf Kunden“ sind wartend. Überprüfen Sie die Einstufung mit dem Team, denn die Bezeichnungen in einem Workflow sagen selten die ganze Wahrheit, und ein Zustand namens „in Bearbeitung“ verbirgt oft ein Element, das seit einer Woche niemand angefasst hat.

**8. Berechnen Sie die Flusseffizienz als Diagnose, nicht als Ziel.** Berechnen Sie sie an einer Stichprobe oder an allen abgeschlossenen Elementen und nutzen Sie sie, um zu finden, wo das Warten lebt: welcher Zustand die Elemente am längsten hält und welche Übergabe ihm vorausgeht. Rechnen Sie mit niedrigen Zahlen und setzen Sie kein Ziel wie „40 Prozent erreichen“. Die Zahl zu heben, indem man Wartezustände als aktiv umetikettiert, ist leicht und nutzlos, und die echten Gewinne kommen daraus, die Warteschlange selbst zu beseitigen (siehe Thema 2.4, Kennzahlen für den Wertstrom).

**9. Zählen Sie blockierte und pausierte Zeit gesondert.** Verfolgen Sie, wie oft Elemente in einen blockierten oder pausierten Zustand wechseln, wie lange sie bleiben und was der Grund war. Eine kurze Liste wiederkehrender Blockadegründe, etwa Warten auf eine Genehmigung, eine Umgebung oder einen Lieferanten, sagt Ihnen, was zu beheben ist und mit wem zu sprechen. Berichten Sie den Pausenanteil neben jedem Servicelevel-Ergebnis, das pausierte Zeit ausschließt (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents).

### Die Zahlen gut nutzen

**10. Steuern Sie die Warteschlange, um die Zeit zu steuern.** Die Zeit durch ein System steigt mit der Arbeit in Bearbeitung, eine im [Gesetz von Little](https://en.wikipedia.org/wiki/Little%27s_law) dargelegte Beziehung, die die durchschnittliche Zahl der Elemente im System, die Ankunfts- oder Abschlussrate und die durchschnittliche Verweilzeit jedes Elements zueinander in Beziehung setzt. Die Arbeit in Bearbeitung zu begrenzen ist daher der direkteste Hebel auf die Zykluszeit (siehe Thema 2.3, Laufende Arbeit und Warteschlangentheorie). Das Kennzahlenziel zu ändern, ohne die Warteschlange zu ändern, ändert nur den Anreiz zur falschen Berichterstattung.

**11. Nutzen Sie Zykluszeit-Verteilungen für Prognosen und für Servicelevel-Ziele.** Beträgt die Zykluszeit am 85. Perzentil für Standardanfragen 6 Tage, wird eine Zusage von 5 Tagen oft verfehlt, und eine Zusage von 8 Tagen wird mit Luft erfüllt. Stützen Sie ein internes Ziel darauf, was das System geleistet hat, und arbeiten Sie dann am System, um die Verteilung zu verschieben (siehe Thema 3.5, Kennzahlen für die Erfüllung von Serviceanfragen, und Thema 4.3, Kennzahlen für die Change-Befähigung).

**12. Behandeln Sie eine geänderte Definition als Ereignis.** Ändern sich Start oder Stopp einer Uhr, markieren Sie das in jedem Diagramm und stellen Sie die Historie, wo möglich, aus den Rohereignissen neu dar. Ohne diese Disziplin zeigt eine Trendlinie die Wirkung einer Definitionsänderung als Verbesserung oder Verschlechterung (siehe Thema 1.5, Datenquellen und Instrumentierung).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Durchlaufzeit | Die Anlage des Anfragedatensatzes verzögern, damit die Uhr spät startet; Elemente schließen und wieder eröffnen, um die Uhr neu zu starten; eine Anfrage in viele winzige zerlegen | Anfragedatensätze stichprobenartig mit dem ersten Kontakt in E-Mail oder Chat vergleichen; Wiedereröffnungsrate verfolgen; Größe und Zahl der Elemente je Anfrage verfolgen |
| Zykluszeit | Die Uhr spät starten, indem Elemente erst am Ende auf „in Bearbeitung“ gesetzt werden; Elemente erst auf das Board bringen, wenn sie fast fertig sind; Arbeit in Stücke zerlegen, die allein keinen Wert liefern | Alter von Arbeitselementen für offene Elemente (siehe Thema 2.1, Flussmaße); prüfen, dass erledigte Elemente für den Anfragenden nutzbar sind; Durchlaufzeit mit Zykluszeit vergleichen |
| Berührungszeit | Wartezustände als aktiv einstufen oder Aktivität protokollieren, um beschäftigt zu wirken | Die Zustandseinstufung jedes Quartal mit dem Team überprüfen; Elemente stichprobenartig prüfen und protokollierte Aktivität mit Commits, Kommentaren und Kalendern vergleichen |
| Wartezeit | Neue Status anlegen, damit Wartezeit in eine ungemessene Lücke fällt; wartende Elemente in einen Status außerhalb des Workflows verschieben | Undokumentierte Status und Übergänge zählen (siehe Thema 1.5, Datenquellen und Instrumentierung); an einer Stichprobe bestätigen, dass Zykluszeit gleich Berührungszeit plus Wartezeit ist |
| Flusseffizienz | Wartezeit als aktiv umetikettieren; nur schnelle Elemente für die Stichprobe auswählen; leichte Elemente zuerst abschließen, um das Verhältnis zu heben | Feste Zustandseinstufung mit Änderungsprotokoll; an allen abgeschlossenen Elementen berechnen; zusammen mit der Zykluszeit am 85. Perzentil und dem Alter offener Elemente berichten |
| Anteil pausierter Uhr | Die formale Serviceuhr aus Gründen pausieren, die nicht vom Kunden abhängen, etwa interne Übergaben, um das SLA zu erfüllen | Pausengründe stichprobenartig prüfen; verstrichene Zeit und SLA-Zeit nebeneinander berichten; die eigene Sicht des Kunden auf die Lösungszeit überprüfen (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA) |

Ein gesunder Befund zeigt eine Durchlaufzeit und eine Zykluszeit, die sich gemeinsam bewegen, eine Lücke dazwischen, die das Team erklären kann, ein 85. Perzentil, das ein stabiles Vielfaches des Medians ist, und eine Flusseffizienz, die niedrig ist, aber steigt, wenn bestimmte Warteschlangen beseitigt werden. Warnzeichen sind ein Median, der sich verbessert, während sich das hohe Perzentil verschlechtert, ein Pausenanteil, der am Ende jedes Monats wächst, und eine Flusseffizienz, die springt, ohne dass sich etwas daran ändert, wie Arbeit getan wird. Verbessert sich eine Zahl, sollte jemand auf die Änderung in der Arbeit zeigen können, die sie erklärt. Eine durch Manipulation getriebene Verbesserung wird diesen Test meist nicht bestehen. Die weitere Psychologie behandelt Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Durchlaufzeit aus Sicht des Anfragenden | Entspricht dem, was der Kunde spürt; durch Ändern interner Bezeichnungen schwer zu verbessern | Das Startereignis liegt außerhalb der Kontrolle des Teams und ist womöglich schlecht erfasst |
| Zykluszeit ab der Zusage des Teams | Unter Kontrolle des Teams; leicht aus dem Board-Verlauf zu berechnen | Ignoriert Verzögerung am Eingang; ein Team kann schnell wirken, während Anfragen warten |
| Verstrichene Zeit (Kalenderuhr) | Einfach, vergleichbar und entspricht dem Erleben des Kunden | Schließt Nächte und Wochenenden ein, was bei Teams mit unterschiedlichen Zeiten in die Irre führen kann |
| Geschäftszeiten-Uhr | Passt zu besetzten Servicelevels und Bereitschaftsmustern | Braucht einen Kalender je Team; verbirgt das echte Warten, das der Kunde erlebt |
| Flusseffizienz als Verhältnis | Zeigt in einer einzigen, intuitiven Zahl, wie viel der Zeit Warten ist | Hängt von der Zustandseinstufung ab; leicht aufzublähen; kann als Ziel missverstanden werden |
| Perzentilberichte | Zeigen Risiko und stützen Prognosen | Brauchen genug Elemente pro Zeitraum; für manche Zielgruppen schwerer zu lesen als ein Durchschnitt |

Der praktische Rat ist, mit verstrichener Zeit zu beginnen, nur dort eine Geschäftszeiten-Sicht hinzuzufügen, wo ein Servicelevel sie verlangt, und sowohl Durchlaufzeit als auch Zykluszeit an einem hohen Perzentil zu berichten. Nutzen Sie die Flusseffizienz in einem Review als Gesprächsanstoß, mit der Zustandseinstufung auf dem Tisch, und vermeiden Sie sie auf einer Scorecard.

## Fragen für die Diskussion im Team

**1. Wo startet unsere Durchlaufzeit-Uhr, und wo glaubt der Kunde, dass sie startet?**
Nehmen Sie drei jüngste Anfragen und verfolgen Sie sie vom ersten Kontakt bis zur Auslieferung. Markieren Sie den Moment, in dem die Anfrage im führenden System erfasst wurde. Vergleichen Sie die Lücke zwischen erstem Kontakt und Anlage des Datensatzes. Die Moderation sollte nach versteckten Warteschlangen in E-Mail, Chat oder einem gemeinsamen Postfach suchen, die in keiner Kennzahl erscheinen.

**2. Was bedeutet „erledigt“ für jeden Typ Arbeit, den wir bearbeiten?**
Listen Sie die Arbeitstypen auf, etwa Incidents, Anfragen, Changes und Stories, und fragen Sie nach dem Stoppereignis jedes Typs. Fragen Sie, ob der Anfragende zustimmen würde, dass die Arbeit in diesem Moment abgeschlossen war. Meinungsunterschiede deuten auf eine Uhr hin, die zu früh stoppt. Einigen Sie sich auf ein Stoppereignis je Typ und schreiben Sie es auf.

**3. Welche unserer Status sind wartend, und wie lange sitzen Elemente darin?**
Hängen Sie den Workflow an eine Wand und markieren Sie jeden Zustand als aktiv oder wartend. Fragen Sie nach der typischen Zeit in jedem Wartezustand aus den Daten des letzten Monats. Der größte Wartezustand überrascht meist jemanden. Wählen Sie eine Warteschlange, die im nächsten Monat genauer untersucht wird.

**4. Welches Perzentil sagen wir zu, und was hat das System tatsächlich geleistet?**
Zeigen Sie die Verteilung der Zykluszeiten des letzten Quartals mit Median, 85. und 95. Perzentil. Fragen Sie, welche Zusage das Team Kunden derzeit macht und wo sie in der Verteilung liegt. Besprechen Sie die Kosten, eine schnellere Zeit zuzusagen, als das System geliefert hat. Entscheiden Sie sich für eine Zusage, die das Team aus eigenen Gründen einhalten kann.

**5. Wer darf die Uhr pausieren, und warum?**
Listen Sie die Pausen- und Wartestellungsstatus, die Personen, die sie nutzen können, und die angegebenen Gründe auf. Lesen Sie eine Stichprobe pausierter Elemente und fragen Sie, ob der Kunde wirklich die Ursache war. Besprechen Sie, was geschähe, wenn der Pausenanteil im selben Diagramm wie das SLA-Ergebnis gezeigt würde. Die Moderation sollte den Ton neugierig halten, denn Pausenstatus haben oft legitime Gründe, die nie aufgeschrieben wurden.

**6. Wenn sich unsere Flusseffizienz im nächsten Quartal verdoppelte, was hätten wir daran geändert, wie Arbeit sich bewegt?**
Bitten Sie die Gruppe, konkrete Warteschlangen, Übergaben, Genehmigungen oder Losgrößen zu nennen, die sich ändern müssten. Sind die Antworten allgemein, etwa „härter arbeiten“ oder „besser kommunizieren“, ist die Zahl noch mit keiner Handlung verbunden. Wählen Sie eine konkrete Änderung, sagen Sie ihre Wirkung auf die Wartezeit eines benannten Zustands voraus und vereinbaren Sie, wann geprüft wird.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams besitzen die Zykluszeit-Uhr und sehen ihre Details auf dem Board. Am meisten gewinnen sie, indem sie Zustände ehrlich einstufen, die Arbeit in Bearbeitung begrenzen und das Streudiagramm in ihren eigenen Retrospektiven lesen. Sie sollten dem Druck widerstehen, Arbeit in künstlich kleine Stücke zu zerlegen, die schnell fertig werden und nichts liefern, und das Alter offener Elemente neben abgeschlossenen Zykluszeiten zeigen (siehe Thema 2.1, Flussmaße).

### Service- und Betriebsteams

Serviceteams arbeiten mit Datensätzen, die formale Servicelevel-Uhren tragen, und ihre Pausenstatus sind die Stelle, an der verstrichene Zeit und SLA-Zeit auseinanderlaufen. Sie sollten beide Uhren berichten, nach Typ und Priorität segmentieren und den Grund jeder Pause festhalten. Betriebsteams sind auch die natürlichen Eigner der Warteschlangen für Genehmigungen, Wartungsfenster und Lieferantenantworten, die oft die Wartezeit dominieren, die Produktteams sehen (siehe Thema 3.5, Kennzahlen für die Erfüllung von Serviceanfragen).

### Führung und Governance

Führungskräfte fragen nach der Durchlaufzeit, weil sie die Zahl ist, die dem Erleben des Kunden am nächsten kommt. Sie sollten zu jeder Zahl eine Definition, eine Verteilung und eine Segmentierung erwarten und fragen, wo das Warten sitzt, bevor sie fragen, warum Menschen langsam sind. Ziele für diese Messgrößen funktionieren am besten, wenn sie für einen Service oder Wertstrom mit benanntem Eigner gelten und aus dem festgelegt werden, was das System geliefert hat. Ein Ziel auf einem Durchschnitt lädt zu Umklassifizierung und Uhrenspielen ein.

### Kunden und Nutzer

Kunden erleben die Durchlaufzeit, einschließlich allen Wartens vor Arbeitsbeginn und allen Wartens, nachdem das Team glaubt, fertig zu sein. Sie brauchen eine ehrliche, als Spanne ausgedrückte Schätzung, etwa „die meisten Anfragen dieser Art sind innerhalb einer Woche erledigt und fast alle innerhalb von zwei“, und sie müssen wissen, wenn eine Pause angewandt wurde, weil das Team auf sie wartete. Berichte an Kunden sollten angeben, welche Uhr sie verwenden (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA).

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Krankenhauses betreibt einen Service Desk, ein Infrastrukturteam und ein Anwendungsteam, das klinisches Personal unterstützt. Alle Zahlen in diesem Beispiel sind illustrativ.

Der Service Desk berichtet, dass Standard-Zugriffsanfragen ihr Ziel von 5 Arbeitstagen zu 94 Prozent einhalten, doch Stationsleitungen klagen weiter, der Zugriff dauere „etwa zwei Wochen“. Die Leiterin des Servicebetriebs bittet das Team, Durchlaufzeit und Zykluszeit dieser Anfragen über ein Quartal zu messen, mit verstrichenen Kalendertagen aus dem rohen Statusverlauf statt mit dem SLA-Timer.

Das Ergebnis für 400 Anfragen (illustrativ) ist ein Median der Zykluszeit von 3 Tagen und ein 85. Perzentil von 9 Tagen. Die Durchlaufzeit, gemessen ab dem Moment, in dem die Leitung erstmals an das gemeinsame Postfach schrieb, hat einen Median von 8 Tagen und ein 85. Perzentil von 16 Tagen. Zwei Befunde erklären die Lücke. Erstens warten Anfragen im Schnitt 3 Tage im Postfach, bevor jemand ein Ticket anlegt, was für das SLA unsichtbar ist. Zweitens macht der Status „wartet auf Genehmigung“ den Großteil der Zykluszeit aus: Von den 9 Tagen am 85. Perzentil entfallen etwa 6 Tage auf das Warten auf die Genehmigung durch eine Abteilungsleitung. Die Berührungszeit liegt in einer Stichprobe von 30 Anfragen bei etwa einem halben Tag, die Flusseffizienz also bei grob 8 Prozent (illustrativ). Das SLA-Ergebnis ist hoch, weil der Timer während „wartet auf Genehmigung“ und „wartet auf Kunden“ stoppt, sodass der Anteil pausierter Uhr 52 Prozent der Zykluszeit beträgt.

Das Team trifft drei Entscheidungen. Es ergänzt ein Webformular, das beim ersten Kontakt das Ticket anlegt, sodass die Durchlaufzeit-Uhr dort startet, wo die des Kunden startet. Es vereinbart mit den Abteilungsleitungen, dass Genehmigungen für eine definierte Liste von Standardrollen vorab erteilt sind, mit vierteljährlicher Prüfung statt Genehmigung je Anfrage. Und es nimmt Pausenanteil und Durchlaufzeit neben dem SLA-Ergebnis in das monatliche Service-Review auf. Nach einem Quartal fällt der Median der Durchlaufzeit auf 4 Tage und das 85. Perzentil auf 8 Tage (illustrativ), während sich das SLA-Ergebnis kaum bewegt.

Im Review fängt das Team ein Manipulationsrisiko auf. Ein Techniker hat begonnen, Tickets auf „wartet auf Kunden“ zu setzen, sobald eine Genehmigungs-E-Mail gesendet ist, wofür der Status nicht gedacht war. Der Pausenanteil für diese Gruppe steigt, die Prüfung einer Stichprobe pausierter Tickets zeigt das Muster, und das Team schreibt die Uhrenregeln so um, dass nur eine Informationsanfrage an den Anfragenden die Uhr pausieren kann. Die Leitplanke, die das Problem aufgefangen hat, war der neben dem SLA-Ergebnis berichtete Pausenanteil, genau die in diesem Thema empfohlene Paarung.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Kontinuierliche Auslieferung verkürzt die Schleife von einer Idee bis in die Hände eines Nutzers, daher ist die Durchlaufzeit die Messgröße, die ein Stakeholder spürt. Eine gute Praktik ist, mit Stakeholdern festzulegen, wo die Durchlaufzeit startet, etwa im Moment der Annahme einer Anfrage, und diese Definition stabil zu halten. Zu beachten ist, dass ein Team die Zykluszeit verkürzen kann, indem es die Uhr später startet; berichten Sie also stets auch die Durchlaufzeit aus Sicht des Kunden.

### KI

KI-Werkzeuge können die Berührungszeit beim Entwerfen und Codieren senken und die Wartezeit unverändert oder länger lassen, sodass die Flusseffizienz sinken kann, obwohl sich Menschen schneller fühlen. Berichten Sie Berührungszeit und Wartezeit für KI-gestützte Arbeit gesondert und koppeln Sie sie mit Nacharbeit. Zu beachten ist, dass ein Rückgang der Zykluszeit von geringerer Prüftiefe kommen kann; ziehen Sie also Changes als Stichprobe, um zu sehen, ob die Qualität gehalten hat.

### Automatisierung

Berechnen Sie jede Uhr aus Ereigniszeitstempeln statt aus von Menschen eingetippten Feldern und erfassen Sie jede Pause mit einem Grund. Messen Sie die Automatisierung selbst daran, wie viel Wartezeit sie beseitigt und wie oft sie eine neue Warteschlange hinzufügt, etwa einen manuellen Genehmigungsschritt, den sie nicht überspringen kann. Zu beachten ist, dass nachträgliche Statusänderungen die Historie umschreiben können; protokollieren Sie also Änderungen.

### Analytik

Berichten Sie Perzentile der Durchlaufzeit und Zykluszeit und zeigen Sie das Verhältnis von Berührungszeit zu Durchlaufzeit als Trend. Die Entscheidung, die dies untermauert, ist, wo Warten zu beseitigen ist, meist zwischen Teams. Zu beachten ist, dass die Flusseffizienz davon abhängt, wie fein die Berührungszeit erfasst wird; behandeln Sie sie also als grobe Orientierung und nicht als genaues Verhältnis.

## Branchenperspektive

**Startup.** Bei einem kleinen Team mit wenigen Übergaben lässt sich die Zykluszeit leicht vom Board messen, und die Durchlaufzeit liegt nahe an der Zykluszeit. Verfolgen Sie beide von Anfang an mit einer einfachen Zustandseinstufung und sehen Sie sich wöchentlich das Streudiagramm an. Die Flusseffizienz ist bei kleinen Aufgaben meist schon hoch, die Hauptgefahr ist daher ein informeller Eingang, der Anfragen im Chat verbirgt.

**Kleinunternehmen.** Eine einzelne Person kann Anfragender, Genehmiger und Ausführender sein, und der gehostete Service Desk bietet womöglich nur einen SLA-Timer. Exportieren Sie den rohen Statusverlauf, berechnen Sie die verstrichene Zeit selbst und halten Sie für jede Uhr eine Definition. Der nützlichste Befund ist meist, wie lange Anfragen auf Antworten von Lieferanten oder Anbietern warten.

**Großunternehmen.** Viele Übergaben zwischen Teams, Lieferanten und Genehmigungsgremien machen die Wartezeit groß und über Organisationen verteilt. Einigen Sie sich auf ein gemeinsames Vokabular für Start, Stopp und Pause, stufen Sie Zustände über ITSM- und Engineering-Werkzeuge hinweg einheitlich ein und segmentieren Sie nach Arbeitstyp und Servicegüteklasse. Teamübergreifende Vergleiche sind erst sinnvoll, wenn die Definitionen abgestimmt sind, und eine Verdichtung sollte aus Verteilungen gebaut werden, nicht durch Mitteln von Team-Durchschnitten.

**Behörden und öffentlicher Sektor.** Gesetzliche Reaktionszeiten, Beschaffungsregeln und Genehmigungsketten erzeugen Warten, das das Team nicht allein beseitigen kann. Erfassen Sie extern auferlegte Uhren getrennt von internen, damit der Teil der Verzögerung, den die Organisation kontrolliert, sichtbar und verbesserbar wird. Öffentliche Berichterstattung über die Durchlaufzeit mit klaren Definitionen schafft Vertrauen und macht die Warteschlangen sichtbar, die Politik erzeugt (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Das Hauptmotiv ist, dass Zeitmessgrößen eine vage Klage („es dauert ewig“) in ein verortetes Problem („Anfragen warten sechs Tage auf Genehmigung“) verwandeln. Dieselben Daten geben Teams eine wahrheitsgemäße Prognose, sodass Zusagen an Kunden auf der Verteilung vergangener Arbeit beruhen statt auf Hoffnung. Sie zeigen auch, wo Investitionen in Automatisierung, Genehmigungen oder Personal die verstrichene Zeit verkürzen würden, was oft ein anderer Ort ist, als Menschen erwarten.

Die Kosten sind bescheiden, wenn die Werkzeuge Zustandsänderungen bereits erfassen. Die Einrichtung umfasst die Abstimmung der Definitionen, die Einstufung der Zustände und den Aufbau einer Sicht auf Verteilung und Streudiagramm. Die laufenden Kosten sind die Zeit zur Pflege der Zustandseinstufung, zur stichprobenartigen Prüfung der Pausengründe und für das monatliche Review. Fehlt der Zustandsverlauf oder ist er unzuverlässig, ist die erste Investition die Instrumentierung, die in Thema 1.5, Datenquellen und Instrumentierung, beschrieben ist.

Der Ertrag zeigt sich in Mustern, die ein Team selbst messen kann: eine kürzere Zykluszeit im hohen Perzentil für einen Arbeitstyp, weniger Eskalationen über verspätete Elemente, weniger Streit darüber, wessen Uhr stimmt, und eine kleinere Lücke zwischen Durchlaufzeit und Zykluszeit. Erwarten Sie keinen bestimmten Gewinn aus einem Benchmark. Lean- und Fluss-Autoren beschreiben niedrige Flusseffizienz als verbreitet, doch keine veröffentlichte Zahl sollte ohne eigene Daten als Ziel für die eigene Arbeit übernommen werden. Die Gesamtbetriebskosten werden von der Zeit von Menschen dominiert, zählen Sie also die Stunden des Kennzahleneigners und der Prüfenden.

## Anti-Muster und Fallstricke

- **Den Mittelwert berichten.** Ein langer Ausreißer zieht den Durchschnitt, und das typische Element wird falsch beschrieben. Berichten Sie den Median und ein hohes Perzentil und tragen Sie die Elemente auf.
- **Eine Zahl für alle Arbeit.** Incidents, Anfragen und Funktionen zu mischen erzeugt eine Verteilung, die nichts beschreibt. Segmentieren Sie zuerst nach Arbeitstyp und Servicegüteklasse.
- **Nur die SLA-Uhr messen.** Ein Timer, der während Wartezuständen stoppt, berichtet ein Ergebnis, das der Kunde nie erlebt. Berichten Sie die verstrichene Durchlaufzeit und den Pausenanteil daneben.
- **Ein Flusseffizienz-Ziel setzen.** Menschen heben das Verhältnis durch Umetikettieren von Status. Nutzen Sie sie als Diagnose und beurteilen Sie den Erfolg an der Wartezeit benannter Warteschlangen.
- **Die Uhr am falschen Ort starten.** Eine Uhr, die bei der Zuweisung oder bei der ersten Arbeit beginnt, verbirgt die Warteschlange am Eingang. Starten Sie die Durchlaufzeit bei der Anfrage und die Zykluszeit bei der Zusage und veröffentlichen Sie beide.
- **Teams nach Zykluszeit vergleichen.** Unterschiedliche Arbeit, unterschiedliche Status und unterschiedliche Definitionen machen Rangfolgen bedeutungslos und laden zur Manipulation ein. Vergleichen Sie ein Team mit seiner eigenen Historie und Services erst, nachdem die Definitionen abgestimmt sind.
- **Offene Elemente ignorieren.** Die Zykluszeit zählt nur abgeschlossene Arbeit, ein festhängendes Element ist also unsichtbar, bis es endet. Verfolgen Sie das Alter der Elemente in Bearbeitung (siehe Thema 2.1, Flussmaße).
- **Definitionen stillschweigend ändern.** Der Trend zeichnet dann eine Änderung des Instruments auf. Protokollieren Sie jede Änderung und markieren Sie sie im Diagramm.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definitionen und Uhren | Menschen nennen Dauern aus dem Gedächtnis; jeder startet die Uhr anders | Einige Teams definieren die Zykluszeit auf ihrem Board; ITSM-Teams nennen SLA-Zeit | Eine schriftliche Definition von Durchlaufzeit, Zykluszeit und Pausen, die alle Teams nutzen | Definitionsänderungen werden protokolliert und die Historie aus Rohereignissen neu dargestellt | Definitionen sind mit Lieferanten und Kunden abgestimmt und werden überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| Berichte und Analyse | Durchschnitte in einer Folie, von Hand zusammengestellt | Einige Teams zeigen Mediane oder ein Diagramm aus dem Werkzeug | Median und ein hohes Perzentil, mit Streudiagramm, nach Arbeitstyp segmentiert | Verteilungen im Trend und im Rhythmus überprüft; Prognosen daraus abgeleitet | Flussdaten über Teams und Lieferanten werden kombiniert, um durchgängige Zusagen zu prognostizieren |
| Warten und Flusseffizienz | Warten wird von Arbeiten nicht unterschieden | Blockiert-Spalten existieren auf einigen Boards | Jeder Status als aktiv oder wartend eingestuft; Flusseffizienz an allen abgeschlossenen Elementen berechnet | Größte Warteschlangen untersucht und für Verbesserung finanziert; Pausengründe geprüft | Warteschlangen, Genehmigungen und Übergaben gemeinsam mit den Teams und Lieferanten neu gestaltet, die sie erzeugen |
| Nutzung in Entscheidungen | Zahlen werden in einem Quartalsreview gezeigt und nicht beachtet | Teams besprechen die Zykluszeit in Retrospektiven | Servicelevel-Ziele aus der beobachteten Verteilung gesetzt | Ziele mit Leitplanken gekoppelt und auf Manipulation überprüft | Kunden sehen ehrliche Spannen, und Verbesserungsideen kommen von allen, die die Arbeit berühren |

## Checkliste

- [ ] Jede Zeitmessgröße hat im Kennzahlenregister ein schriftliches Startereignis, Stoppereignis und eine Liste von Ausschlüssen.
- [ ] Durchlaufzeit und Zykluszeit werden beide berichtet, und jedes Diagramm ist mit der gezeigten gekennzeichnet.
- [ ] „Erledigt“ ist für jeden Arbeitstyp definiert und mit dem Anfragenden abgestimmt.
- [ ] Ergebnisse werden als Median und hohes Perzentil berichtet, und die Elemente werden aufgetragen.
- [ ] Die Daten sind nach Arbeitstyp und, wo relevant, nach Servicegüteklasse segmentiert.
- [ ] Jeder Status ist als aktiv, wartend oder erledigt eingestuft, und die Einstufung wird jedes Quartal überprüft.
- [ ] Pausenstatus, wer sie nutzen darf, und ihre Gründe sind aufgeschrieben und werden stichprobenartig geprüft.
- [ ] Verstrichene Zeit und SLA-Zeit werden nebeneinander mit dem Pausenanteil gezeigt.
- [ ] Die Flusseffizienz wird als Diagnose genutzt und steht nicht auf einer Scorecard.
- [ ] Definitionsänderungen werden protokolliert und in den Diagrammen markiert.
- [ ] Das Alter offener Elemente wird zusammen mit abgeschlossenen Zykluszeiten überprüft.

## KI-Prompts

**Uhrenregeln für einen Arbeitstyp entwerfen.**

```text
We handle [work type, for example standard access requests] in [tool or tools].
The workflow statuses are [list of statuses]. Draft written clock rules for lead
time and cycle time: the event that starts each clock, the event that stops it,
which statuses pause or exclude time, and what happens to cancelled and reopened
items. Point out statuses whose meaning is ambiguous and questions I should
answer before the rules are final. Do not invent features of our tool or
benchmark values. List your assumptions.
```

**Status als aktiv oder wartend einstufen.**

```text
Here is the workflow for [team or service]: [statuses with a one-line meaning
for each]. For each status, propose whether it is active work, waiting, or done,
and explain why. Flag statuses that mix working and waiting, and suggest how to
split them with the smallest change to the workflow. Say how the classification
would change the calculation of flow efficiency. Do not assume how long items
stay in each status. List your assumptions.
```

**Eine Menge von Zykluszeiten analysieren.**

```text
Below are cycle times in [unit] for [number] finished items of type [work type],
with finish dates: [data]. Describe the distribution using the median and the
[percentile, for example 85th] percentile, identify clusters or drift over time,
and suggest questions to ask the team about the slow items. Recommend how many
items I need before the percentiles are trustworthy, and explain the reasoning.
Do not invent benchmark values or compare with other organizations. List your
assumptions.
```

**Eine Kennzahl auf Manipulation prüfen.**

```text
We report [metric, for example flow efficiency] for [team or service], defined
as [definition and clocks]. People can influence it by [known behaviors, if
any]. List plausible ways the number could be gamed or misread, a paired
guardrail metric or practice for each, and a sample of records I should read by
hand to check. Do not invent statistics about how often gaming occurs. List
your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine Zeitmessgröße definiert, und die Leitplanke, die daneben gehört.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine bearbeitete Zeitmessgröße ihre Uhren, Ausschlüsse und ihren Manipulationsvektor nennt.

## Wichtigste Erkenntnisse

- Die Durchlaufzeit ist das Warten des Kunden und die Zykluszeit das Warten des Teams, also behalten Sie beide und untersuchen Sie die Lücke zwischen ihnen.
- Schreiben Sie Start-, Stopp- und Pausenregeln für jede Uhr auf und behandeln Sie eine Änderung der Definition als Ereignis.
- Berichten Sie den Median und ein hohes Perzentil, tragen Sie die Elemente auf und segmentieren Sie nach Arbeitstyp, bevor Sie irgendetwas vergleichen.
- Die Flusseffizienz ist meist niedrig, weil der größte Teil der verstrichenen Zeit Warten ist, nutzen Sie sie also, um Warteschlangen zu finden, und machen Sie sie nicht zum Ziel.
- Zeigen Sie den Pausenanteil neben jedem Servicelevel-Ergebnis, das pausierte Zeit ausschließt.
- Verringern Sie Arbeit in Bearbeitung und beseitigen Sie Übergaben, um die Zeit zu verkürzen, denn Menschen zur Eile aufzufordern ändert die Warteschlangen nicht.

## Quellen und weiterführende Literatur

1. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. DeGrandis, D., *Making Work Visible: Exposing Time Theft to Optimize Work and Flow*, IT Revolution, 2017.
6. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
12. Wikipedia, [Cycle time](https://en.wikipedia.org/wiki/Cycle_time).
13. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
14. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
