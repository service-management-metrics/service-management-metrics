# Kennzahlen für den Wertstrom

**Messen Sie einen Wertstrom durchgängig, teilen Sie jede Stufe in die Zeit, in der Arbeit bearbeitet wird, und die Zeit, in der sie wartet, und zählen Sie, wie viel nutzbar ankommt, denn die größten Verzögerungen und die größte Nacharbeit in einer Serviceorganisation sitzen zwischen den Teams, nicht in ihnen.**

## Überblick und Motivation

Die meisten Teams messen ihre eigene Stufe. Der Service Desk berichtet geschlossene Tickets, ein Entwicklungsteam fertiggestellte Stories, ein Change-Gremium genehmigte Changes. Jede Zahl kann gesund aussehen, während die Person, die etwas angefragt hat, wochenlang wartet. Der Grund ist strukturell: In einer typischen Anfrage wird der größte Teil der verstrichenen Zeit in Warteschlangen und Übergaben verbracht, und niemand besitzt diese Zeit allein.

Ein [Wertstrom](https://en.wikipedia.org/wiki/Value_stream) ist die Folge von Schritten, durch die aus einer Anfrage gelieferter Wert wird. Die [Wertstromanalyse](https://en.wikipedia.org/wiki/Value-stream_mapping) ist die Technik, innerhalb der [Lean-Produktion](https://en.wikipedia.org/wiki/Lean_manufacturing) entwickelt und später auf Büros, Krankenhäuser und Software übertragen, jeden Schritt vom Beginn eines Prozesses bis zum Kunden zu zeichnen und an jeder Stufe Zeit und Menge zu erfassen. Die Karte ist ein Bild des Ist-Zustands, gefolgt von einem Bild eines besseren Soll-Zustands. Die Zahlen auf der Karte sind der Gegenstand dieses Themas.

Hier treffen zwei Vokabulare aufeinander. In ITIL 4, der vierten Ausgabe der Information Technology Infrastructure Library, ist ein Wertstrom eine bestimmte Kombination von Aktivitäten der [ITIL](https://en.wikipedia.org/wiki/ITIL)-Service-Wertschöpfungskette (planen, verbessern, einbinden, gestalten und überführen, beschaffen und bauen, liefern und unterstützen), angeordnet, um ein bestimmtes Produkt oder einen bestimmten Service zu schaffen. Beispiele sind „Service nach einem Incident wiederherstellen“ und „einen Change von der Idee bis in Produktion liefern“. ITIL sagt, was ein Strom ist und wer beteiligt sein muss. Lean sagt, wie man ihn misst. Das agile Gegenstück ist der Fluss von Arbeitselementen über ein Board, den Teams, die den Fluss steuern, bereits mit Messgrößen wie der Zykluszeit verfolgen (siehe Thema 2.1, Flussmaße).

Die Lean-Messgrößen sind wenige. Die **Durchlaufzeit** ist die gesamte verstrichene Zeit vom Moment einer Anfrage bis zu ihrer Auslieferung. Die **Bearbeitungszeit**, manchmal Berührungszeit genannt, ist die Zeit, in der tatsächlich jemand an dem Element arbeitet. Die **Wartezeit** ist die Zeit, in der das Element zwischen aktiver Arbeit liegt, in einer Warteschlange, einer Genehmigung oder einer Übergabe. **Prozent vollständig und korrekt (%C/A)** ist der Anteil der Elemente, die die nächste Stufe wie erhalten nutzen kann, ohne sie korrigieren, vervollständigen oder zurückschicken zu müssen. Die **Taktzeit** ist das Tempo, in dem der Strom Elemente abschließen muss, um der Kundennachfrage zu entsprechen, berechnet als verfügbare Arbeitszeit geteilt durch die in dieser Zeit nachgefragte Zahl von Elementen. Das Verhältnis von Bearbeitungszeit zu Durchlaufzeit ist die **Prozesseffizienz**, die dieses Buch als die Wertstromform der Flusseffizienz behandelt (siehe Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz).

Zwei Beziehungen machen die Zahlen gemeinsam nützlich. Erstens ist die [Durchlaufzeit](https://en.wikipedia.org/wiki/Lead_time) die Summe von Bearbeitungszeit und Wartezeit über jede Stufe, ein Strom mit einer Durchlaufzeit von Wochen und einer Bearbeitungszeit von Tagen ist also überwiegend Warteschlange. Das [Gesetz von Little](https://en.wikipedia.org/wiki/Little%27s_law) verbindet diese Warteschlange mit der laufenden Arbeit und dem Durchsatz, weshalb Thema 2.3 (Laufende Arbeit und Warteschlangentheorie) der natürliche Begleiter ist. Zweitens summiert sich %C/A multiplikativ. Ein Strom aus fünf Stufen, in dem jede Stufe 90 Prozent ihres Outputs sauber weitergibt, liefert nur in etwa 59 Prozent der Fälle ein sauberes Ergebnis, ein Produkt, das in der Fertigung als [Rolled Throughput Yield](https://en.wikipedia.org/wiki/Rolled_throughput_yield) bekannt ist. Die Berichte der einzelnen Stufen sagen alle 90 Prozent. Der Strom sagt etwas weit Unbequemeres.

## Leitprinzipien

- **Bei der Anfrage des Kunden beginnen und bei der Nutzung durch den Kunden enden.** Ein Strom, der von „Arbeit begonnen“ bis „Arbeit zusammengeführt“ gemessen wird, verbirgt das Warten an beiden Enden, oft der längste Teil.
- **Berührungszeit und Wartezeit in jeder Stufe trennen.** Eine einzelne Stufendauer vermischt beides und schickt Verbesserungsaufwand an die falsche Stelle. Warten ist meist eine Entwurfseigenschaft des Stroms, kein Mangel an Anstrengung.
- **Qualität als Vollständigkeit und Korrektheit messen, nicht nur Geschwindigkeit.** Eine schnelle Stufe, die Arbeit zurückschickt, ist in den Begriffen des Stroms langsam, denn die Nacharbeit verbraucht Kapazität und erzeugt Wartezeit.
- **Einen Strom und eine Elementklasse auf einmal kartieren.** Eine Karte, die Notfall-Changes mit Routineanfragen mischt, erzeugt einen Durchschnitt, der keines von beiden beschreibt.
- **Verteilungen berichten und die Stichprobe zeigen.** Durchlaufzeit und Wartezeit sind schief, zeigen Sie also den Median und ein hohes Perzentil und sagen Sie, wie viele Elemente und welchen Zeitraum (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).
- **Ströme beschreiben, nie Menschen.** Stufenmessgrößen zeigen, wo Arbeit wartet. Sie sind nie eine Rangfolge der Einzelpersonen oder Teams in jeder Stufe.

## Kennzahlendefinitionen

Die folgenden Kennzahlen sind für einen benannten Wertstrom und eine Arbeitsklasse definiert. Elementzählungen schließen stornierte Elemente aus, sofern nicht anders angegeben. Bearbeitungszeit und Wartezeit werden für jede Stufe berichtet und für den Strom summiert.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Durchlaufzeit des Wertstroms | Verstrichene Zeit von der Anfrage des Kunden, bis der Kunde das Ergebnis nutzen kann | Zeit der Lieferbestätigung minus Zeit, zu der die Anfrage erfasst wurde; stornierte oder zurückgezogene Elemente sind ausgeschlossen; Median sowie 85. und 95. Perzentil berichten | Tage | ITSM-Werkzeug-Datensätze, verbunden mit Liefer-Ereignissen aus Pipeline oder Erfüllungssystem | Serviceanfragen-Management; Change-Befähigung | Durchlaufzeit auf dem Team-Board | Monatlich |
| Bearbeitungszeit | Zeit, in der ein Element aktiv bearbeitet wird, je Stufe und für den Strom | Summe der Intervalle, in denen sich das Element in einem aktiven Zustand befindet, je Stufe; Warteschlange, Genehmigungswartezeit und blockierte Zustände sind ausgeschlossen | Stunden oder Tage | Statusverlauf des Trackers; Zeiterfassung, wo die Zustände zu grob sind | Incident-Management; Serviceanfragen-Management | Zykluszeit in Spalten „in Bearbeitung“ | Monatlich |
| Wartezeit | Zeit, in der ein Element zwischen aktiver Arbeit liegt, je Stufe und für den Strom | Verstrichene Stufenzeit minus Bearbeitungszeit dieser Stufe; enthält Warteschlangen, Genehmigungen, Übergaben und blockierte Zeit | Tage | Statusverlauf des Trackers und Statuswechsel des ITSM-Werkzeugs | Change-Befähigung; Service Desk | Zeit in Warteschlangenspalten; blockierte Zeit | Monatlich |
| Prozesseffizienz | Anteil der Durchlaufzeit, der Bearbeitungszeit ist | Summe der Bearbeitungszeit über die Stufen / Durchlaufzeit des Wertstroms für dieselben Elemente; noch offene Elemente sind ausgeschlossen | Prozent | Abgeleitet aus Bearbeitungszeit und Durchlaufzeit | Kontinuierliche Verbesserung | Flusseffizienz | Vierteljährlich |
| Prozent vollständig und korrekt (Stufe) | Anteil der von einer Stufe erhaltenen Elemente, die sie ohne Korrektur, Ergänzung oder Rückgabe nutzen kann | Wie erhalten akzeptierte Elemente / im Zeitraum erhaltene Elemente; aus beliebigem Grund zurückgegebene Elemente zählen als nicht akzeptiert | Prozent | Rückgabe- und Wiedereröffnungsereignisse im Tracker oder ITSM-Werkzeug; stichprobenartige Abnahmeprüfungen | Serviceanfragen-Management; Change-Befähigung; Problemmanagement | Definition of Ready; Nacharbeitsrate | Monatlich |
| Kumuliertes Prozent vollständig und korrekt | Anteil der Elemente, die jede Stufe sauber passieren | Produkt der %C/A-Werte der Stufen für einen Strom und Zeitraum (zum Beispiel 0,90 x 0,85 x 0,95); Stufen außerhalb des Stroms sind ausgeschlossen | Prozent | Abgeleitet aus den Stufenwerten | Kontinuierliche Verbesserung | Rate entwichener Fehler und Nacharbeit über eine Pipeline | Vierteljährlich |
| Übergabezahl | Zahl der Übergänge eines Elements zwischen Teams oder Warteschlangen | Zahl der Wechsel des zuständigen Teams oder der Warteschlange von der Anfrage bis zur Lieferung, je Element; Median und 85. Perzentil berichten | Anzahl | Zuweisungsverlauf im ITSM-Werkzeug oder Tracker | Service Desk; Serviceanfragen-Management | Abhängigkeiten zwischen Teams | Vierteljährlich |
| Taktzeit-Verhältnis | Ob das Tempo des Stroms zur Nachfrage passt | Medianes beobachtetes Intervall zwischen Abschlüssen / Taktzeit, wobei die Taktzeit die verfügbare Arbeitszeit geteilt durch die im selben Zeitraum nachgefragten Elemente ist; ein Verhältnis über 1 bedeutet, dass der Strom langsamer als die Nachfrage ist | Verhältnis | Nachfragezählung aus der Eingangswarteschlange und Abschlussereignisse | Kapazitäts- und Leistungsmanagement; Service-Level-Management | Durchsatz gegen Nachfrage; Prognose | Vierteljährlich |

Bearbeitungszeit, Wartezeit und die Durchlaufzeiten der Stufen sind Summen und Verhältnisse über dieselbe Menge von Elementen, werden also aus Datensätzen auf Elementebene berechnet und nie durch Addieren von Stufendurchschnitten, die an verschiedenen Stichproben gemessen wurden. Die Taktzeit passt am besten auf wiederholbare Arbeit wie Standardanfragen und Routine-Changes und schlecht auf Arbeit, bei der jedes Element einzigartig ist.

## Empfehlungen

### Den Strom wählen

**1. Wählen Sie einen wertvollen Strom und eine Elementklasse und benennen Sie ihre Grenzen.** Gute erste Kandidaten sind ein Anfragetyp mit hohem Volumen, etwa die Bereitstellung von Zugriff oder Geräten, oder der Weg eines normalen Changes von der Genehmigung bis zum Livegang. Schreiben Sie den Auslöser, der die Uhr startet, und das Ereignis, das die Lieferung an den Kunden bestätigt. Können Sie beides nicht in je einem Satz benennen, ist der Strom noch nicht definiert (siehe Thema 3.5, Kennzahlen für die Erfüllung von Serviceanfragen).

**2. Starten Sie die Uhr bei der Anfrage des Kunden und stoppen Sie sie bei der Nutzung durch den Kunden.** Ein Strom, der startet, wenn ein Team die Arbeit annimmt, und stoppt, wenn das Team sie als erledigt markiert, schließt die Eingangswarteschlange und die Bestätigungsverzögerung aus. Das sind häufig die längsten Wartezeiten. Sind die Daten für die wahren Grenzen noch nicht erfasst, berichten Sie die engere Messgröße mit ehrlicher Bezeichnung und planen Sie die Instrumentierung (siehe Thema 1.5, Datenquellen und Instrumentierung).

### Den Ist-Zustand kartieren

**3. Gehen Sie den Strom mit den Menschen durch, die die Arbeit leisten.** Führen Sie eine Kartierungssitzung mit einem Vertreter jeder Stufe durch, einschließlich der Kundenseite. Zeichnen Sie die Schritte so, wie sie tatsächlich ablaufen, und vergleichen Sie dann mit dem dokumentierten Prozess. Die Lücken zwischen beiden sind selbst Befunde. Die Methode ist in *Learning to See* von Rother und Shook und in *Value Stream Mapping* von Martin und Osterling beschrieben.

**4. Erfassen Sie Bearbeitungszeit und Wartezeit je Stufe aus echten Elementen.** Ziehen Sie eine Stichprobe jüngster Elemente, 20 oder mehr, wenn das Volumen es erlaubt, und verfolgen Sie jedes durch den Strom anhand des Tracker-Verlaufs und, wo nötig, eines Gesprächs. Erfassen Sie die Berührungszeit und das Warten vor jeder Stufe. Behandeln Sie die Stichprobe als Schätzung und sagen Sie, wie sie gezogen wurde. Wiederholen Sie die Kartierung, wenn sich der Strom so weit ändert, dass sie ungültig wird.

**5. Zeigen Sie das Warten als eigenen Balken.** Zeichnen Sie auf der Karte und im Dashboard Bearbeitungszeit und Wartezeit als getrennte Abschnitte für jede Stufe. Eine Stufe mit 30 Minuten Bearbeitungszeit und vier Tagen Warten sieht ganz anders aus als eine mit vier Tagen Bearbeitungszeit, obwohl die Stufendauer identisch ist.

### Qualität entlang des Stroms messen

**6. Messen Sie %C/A an der Übergabe, definiert durch die empfangende Stufe.** Das empfangende Team entscheidet, was „wie erhalten nutzbar“ bedeutet, idealerweise in einer kurzen schriftlichen Abnahmebedingung. Zählen Sie eine Rückgabe, eine Bitte um fehlende Informationen oder eine stille Korrektur als nicht akzeptiert. Stille Korrektur ist das häufigste Leck, denn die Arbeit wird repariert, ohne dass jemand erfasst, dass sie kaputt war.

**7. Berechnen Sie kumuliertes %C/A und vergleichen Sie es mit den Stufenwerten.** Multiplizieren Sie die Stufenwerte. Eine Lücke zwischen der kumulierten Zahl und der am besten aussehenden Stufe ist die Verstärkungswirkung der Nacharbeit, und sie begründet die Korrektur einer Übergabe oft besser als jede Geschwindigkeitsmessgröße. Verbinden Sie sie mit den Nacharbeits- und Change-Fehler-Messgrößen desselben Stroms (siehe Thema 4.4, Change-Fehlschläge und Nacharbeit).

### Die Zahlen für Entscheidungen nutzen

**8. Verbessern Sie zuerst das größte Warten und suchen Sie seine Ursache in der Schnittstelle.** Ordnen Sie die Stufen nach Wartezeit und fragen Sie dann, worauf das wartende Element wartet: eine Entscheidung, eine Person, ein Los, einen geplanten Termin oder eine fehlende Eingabe. Fragen Sie dann, ob dieses Warten nötig ist. Die [Theorie der Beschränkungen](https://en.wikipedia.org/wiki/Theory_of_constraints) hält fest, dass das Tempo des Stroms von seiner engsten Stufe bestimmt wird, sodass die Verbesserung einer Stufe, die nicht die Beschränkung ist, wenig ändert. Genehmigungswartezeiten in der Change-Befähigung sind ein häufiger Fall (siehe Thema 4.3, Kennzahlen für die Change-Befähigung).

**9. Verringern Sie Übergaben, bevor Sie Stufen optimieren.** Jede Übergabe fügt eine Warteschlange, einen Kontextwechsel und eine Gelegenheit für unvollständige Informationen hinzu. Zählen Sie die Übergaben und testen Sie dann, ob sich eine Stufe zusammenlegen, eine Entscheidung an das Team delegieren, das die Arbeit leistet, oder eine Standardanfrage vorab genehmigen lässt. ITIL 4 beschreibt Standard-Changes als vorab genehmigte Changes mit geringem Risiko, was genau dieser Schritt am Change-Strom ist.

**10. Vergleichen Sie Nachfrage und Tempo mit der Taktzeit, nur für wiederholbare Arbeit.** Berechnen Sie die Taktzeit aus echten Nachfragedaten des Zeitraums und vergleichen Sie sie mit dem Intervall, in dem der Strom tatsächlich Elemente abschließt. Ein Strom, der langsamer als der Takt ist, lässt eine Warteschlange wachsen, und das Gesetz von Little sagt Ihnen ungefähr, wie schnell. Ein Strom, der viel schneller als der Takt ist, hat Spielraum, der umgelenkt werden könnte. Nutzen Sie die Taktzeit nicht, um Ziele für Einzelpersonen zu setzen.

### Die Messung ehrlich halten

**11. Verbinden Sie Daten über Werkzeuge hinweg und sagen Sie, was geschätzt ist.** Der Strom überquert meist ITSM-Werkzeug, Issue-Tracker und Pipeline. Verbinden Sie über eine Element-Kennung, dokumentieren Sie die Verbindungsregel und markieren Sie, welche Stufen aus Systemereignissen und welche aus Stichproben stammen. Eine als Schätzung gekennzeichnete Schätzung ist weit nützlicher als eine präzise wirkende Zahl unbekannter Herkunft.

**12. Überprüfen Sie die Karte vierteljährlich und lesen Sie jedes Mal rohe Elemente.** Ströme driften, wenn Teams umorganisiert werden und Werkzeuge wechseln. Setzen Sie die Karte und eine Entscheidung auf die Tagesordnung eines ständigen Reviews, in dem jede Stufe vertreten ist (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Durchlaufzeit des Wertstroms | Die Uhr später starten, etwa bei der Triage statt bei der Anfrage; Elemente schließen, bevor der Kunde sie nutzen kann; eine Anfrage in mehrere kleine zerlegen | Feste, im Kennzahlenregister geschriebene Uhrenregeln; Bestätigung der Lieferung durch den Kunden; Zahl wieder eröffneter Elemente und verknüpfter Kindelemente |
| Bearbeitungszeit | Untätige oder blockierte Zustände als aktiv erfassen, damit die Bearbeitungszeit steigt und der Strom effizient wirkt; oder Wartezeiten als Arbeit erfassen, um beschäftigt zu wirken | Beobachtung einer Stichprobe von Elementen; Bearbeitungszeit mit Zeiterfassungen vergleichen, wo vorhanden; Zustandsdefinitionen mit dem Team überprüfen |
| Wartezeit | Warten in einen nicht verfolgten Zustand verschieben, etwa ein Nebengespräch, eine Tabellenkalkulation oder einen Status „ausstehend“, der die Uhr stoppt | Die Nutzung von Pausen- und Blockadestatus berichten; Ticketalter mit Zeitstempeln der Stufen vergleichen; Elemente stichprobenartig auf Wartezeiten außerhalb des Systems prüfen |
| Prozesseffizienz | Die Durchlaufzeit mit beschleunigter Bearbeitung der gemessenen Elemente verkürzen oder die Bearbeitungszeit aufblähen, um das Verhältnis zu heben | Durchlaufzeit und Bearbeitungszeit neben dem Verhältnis zeigen; den beschleunigten Anteil berichten; nie ein Ziel für das Verhältnis selbst setzen |
| Prozent vollständig und korrekt (Stufe) | Die empfangende Stufe senkt ihre Annahmelatte, damit weniger Elemente zurückgegeben werden, oder die sendende Stufe drückt Arbeit durch informelle Behelfe durch | Schriftliche Abnahmebedingung; nachgelagerte Fehler- und Nacharbeitszählungen; Stichprobe akzeptierter Elemente von Dritten geprüft |
| Kumuliertes Prozent vollständig und korrekt | Stufen zusammenlegen, sodass Rückgaben innerhalb einer Stufe stattfinden und aus der Übergabezahl verschwinden; eine günstige Stufenliste wählen | Stufenliste im Voraus festlegen; Stufenänderungen im Entscheidungsprotokoll berichten; mit der Nacharbeitsrate des ganzen Stroms vergleichen |
| Übergabezahl | Elemente einer gemeinsamen Warteschlange oder einem Sammel-Eigner zuweisen, um gezählte Eignerwechsel zu vermeiden; Übergaben in einem einzigen „Team“ verbergen, das mehrere umfasst | Nach Warteschlange und Rolle zählen; den Zuweisungsverlauf stichprobenartiger Elemente lesen; die Zahl der Neuzuweisungen je Element verfolgen |
| Taktzeit-Verhältnis | Zurückgestellte oder abgelehnte Nachfrage als nicht nachgefragt zählen; Teilabschlüsse als Abschlüsse zählen | Nachfrage, abgelehnte Nachfrage und Backlog-Alter neben dem Verhältnis berichten; Abschlüsse nur zählen, wenn der Kunde bestätigt |

Ein gesunder Befund zeigt Durchlaufzeit und Bearbeitungszeit, die gegenüber der Stichprobe plausibel sind, Wartezeit, die sichtbar der größere Teil ist und allmählich schrumpft, %C/A-Werte mit einer schriftlichen Abnahmebedingung dahinter und Übergaben, die nur sinken, wenn ein echter Entscheidungs- oder Arbeitsschritt entfernt wurde. Verbessert sich die Durchlaufzeit, während das kumulierte %C/A fällt, schickt der Strom Arbeit schneller durch, indem er die Kosten nach unten verschiebt, und genau dieses Muster sollen die Leitplanken auffangen (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Workshop-basierte Kartierung mit einer Stichprobe | Schnell, zeigt den ganzen Strom, schafft gemeinsames Verständnis über Teams | Eine Momentaufnahme, die schnell altert; Stichprobenverzerrung; hängt von ehrlichen Teilnehmenden ab |
| Automatisierte Messung aus Werkzeugereignissen | Laufend, objektiv, stützt Perzentile und Trends | Sieht nur, was die Werkzeuge erfassen; Wartezeiten außerhalb des Systems und stille Korrekturen sind unsichtbar |
| Durchgängige Kundengrenzen | Spiegelt das Erleben; deckt Verzögerungen am Eingang und bei der Bestätigung auf | Braucht Daten aus mehreren Systemen und eine gemeinsame Element-Kennung |
| Taktzeit- und Nachfragevergleich | Bindet das Tempo an echte Nachfrage; macht Warteschlangenwachstum vorhersagbar | Schwach bei einzigartiger, nicht wiederholbarer Arbeit; braucht verlässliche Nachfragezählungen |
| Kumuliertes %C/A | Zeigt, wie sich Nacharbeit über Übergaben aufsummiert | Braucht Einigung über Abnahmebedingungen; Definitionen sind leicht strittig |

Nutzen Sie den Kartierungsworkshop, um die Form des Stroms kennenzulernen, und die automatisierte Messung, um ihn zu beobachten. Nutzen Sie Messgrößen an Teamgrenzen als Eingaben und Messgrößen an Kundengrenzen als Urteil. Der Preis des Ansatzes ist das teamübergreifende Gespräch, das er erzwingt, was zugleich sein Hauptnutzen ist.

## Fragen für die Diskussion im Team

**1. Wo startet und stoppt die Uhr des Kunden bei unserer häufigsten Anfrage, und stimmt unser Bericht damit überein?**
Wählen Sie einen Anfragetyp und verfolgen Sie ihn an einem Whiteboard vom Moment der Anfrage des Kunden bis zu dem Moment, in dem er das Ergebnis nutzen kann. Markieren Sie, wo unser derzeitiger Bericht zu zählen beginnt und aufhört. Die Moderation sollte nach der Lücke an jedem Ende suchen, denn Eingangswarteschlangen und Bestätigungsverzögerungen werden regelmäßig weggelassen. Einigen Sie sich, ob der Bericht geändert oder als Teilsicht gekennzeichnet wird.

**2. Wie viel der verstrichenen Zeit arbeitet in jeder Stufe unseres Stroms jemand an dem Element?**
Nehmen Sie fünf jüngste Elemente und rekonstruieren Sie die Geschichte jedes einzelnen. Schätzen Sie die Berührungszeit und das Warten für jede Stufe und vergleichen Sie die Summen. Die meisten Gruppen überrascht, wie wenig der verstrichenen Zeit Arbeit ist. Fragen Sie, worauf jedes lange Warten wartet, und widerstehen Sie der ersten Antwort, die meist „die Leute sind beschäftigt“ lautet. Halten Sie fest, welche Wartezeiten wie Entwurfsentscheidungen aussehen statt wie Kapazitätsgrenzen.

**3. Was braucht die nächste Stufe von uns, und woran würden wir merken, dass es fehlte?**
Lassen Sie einen Vertreter der empfangenden Stufe die Abnahmebedingung in einfachen Worten benennen. Vergleichen Sie sie mit dem, was die sendende Stufe zu liefern glaubt. Zählen Sie, wie oft im letzten Monat Arbeit zurückgegeben, von jemand anderem vervollständigt oder still korrigiert wurde. Die Diskussion ergibt oft eine kleine Checkliste, die eine wiederkehrende Rückgabe beseitigt.

**4. Welche Übergaben existieren aus historischen Gründen statt aus Notwendigkeit?**
Listen Sie die Übergaben auf der Karte auf und fragen Sie, warum jede existiert. Manche sind echt: eine Fähigkeit, eine Kontrolle, eine Funktionstrennung. Andere bestehen fort, weil vor Jahren eine Teamgrenze gezogen wurde. Wählen Sie eine Übergabe, die entfernt, delegiert oder vorab genehmigt wird, und benennen Sie, wer zustimmen muss.

**5. Wenn wir die Stufe verbesserten, über die sich alle beschweren, würde der Kunde es bemerken?**
Vergleichen Sie die Stufe, die die meiste Aufmerksamkeit anzieht, mit der Stufe, die das längste Warten hält. Die Theorie der Beschränkungen legt nahe, dass die Verbesserung einer Nicht-Beschränkung für den Kunden wenig ändert. Fragen Sie, was gelten müsste, damit die lauteste Stufe auch die langsamste ist. Die Moderation sollte der Gruppe helfen, sich zu einigen, wie die Antwort mit Daten getestet wird.

**6. Wie könnte jemand diesen Strom besser aussehen lassen, ohne ihn besser zu machen?**
Gehen Sie die Tabelle der Manipulationsvektoren mit der Gruppe durch. Fragen Sie bei jeder Kennzahl, was ein Mensch unter Druck tun könnte und was das Team sähe, wenn er es täte. Einigen Sie sich, welche Leitplankenablesung jedes Mal überprüft wird und wer sie besitzt. Ziel ist eine gemeinsame Gewohnheit des Prüfens, keine Suche nach Schuldigen.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams sehen meist ihre eigenen Stufen klar und den Strom schlecht. Eine Wertstromsicht zeigt ihnen, wie lange ein fertiger Change auf Review, Genehmigung, einen Release-Slot oder ein Deployment-Fenster wartet und wie viel davon außerhalb ihrer Kontrolle liegt. Sie profitieren von %C/A an ihren Übergaben, weil es vage Klagen über „schlechte Anforderungen“ oder „späte Reviews“ in gezählte Ereignisse verwandelt. Sie sollten sich davor hüten, ihre eigene Zykluszeit auf Kosten der empfangenden Stufe zu verbessern (siehe Thema 2.8, DORA-Kennzahlen).

### Service- und Betriebsteams

Betriebsteams besitzen viele der Warteschlangen: den Eingang des Service Desks, die Change-Genehmigung, den Release-Plan, die Bereitschaftsübergabe. Sie gewinnen durch vorab genehmigte Standard-Changes, klare Abnahmebedingungen für eingehende Arbeit und eine Sicht darauf, welche Übergaben das meiste Warten hinzufügen. Sie sollten auch damit rechnen, in einer %C/A-Messgröße die empfangende Stufe zu sein und definieren zu müssen, wie eine vollständige Übergabe aussieht. Ihre Elemente tragen oft strenge eigene Uhren, daher steht die Strommessgröße neben den Servicelevel-Messgrößen und ersetzt sie nicht.

### Führung und Governance

Führungskräfte fördern teamübergreifende Veränderung und entscheiden, ob ein Strom einen benannten Eigner hat. Sie sollten die Durchlaufzeit des Stroms aus Kundensicht und das größte Warten anfordern statt einer Scorecard Stufe für Stufe. Governance-Gremien, die Arbeit genehmigen, sind selbst Stufen, und ihre Wartezeit gehört auf die Karte. Ziele für das Verhältnis von Bearbeitungszeit zu Durchlaufzeit laden zu den oben beschriebenen Vektoren ein, nutzen Sie es also, um Nachforschungen zu lenken (siehe Thema 6.5, Wertrealisierung und Geschäftsergebnisse).

### Kunden und Nutzer

Kunden erleben die Durchlaufzeit und die Nacharbeit und sehen die Stufen selten. Ihr nützlichster Beitrag ist zu bestätigen, wann das Ergebnis nutzbar war, und zu sagen, was sie tun mussten, um es zu bekommen, etwa ein Formular erneut einzureichen. Kundenseitige Berichte sollten Start und Stopp der Uhr in einfachen Worten nennen. Kunden profitieren auch, wenn der Strom einen ehrlichen Median und ein hohes Perzentil veröffentlicht, denn eine Zusage allein auf dem Median enttäuscht eine von mehreren Anfragen.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines mittelgroßen Versicherungsunternehmens liefert normale Changes für seine Plattform zur Policenverwaltung. Kunden im Fachbereich klagen, „kleine Änderungen dauern über einen Monat“. Alle Zahlen in diesem Beispiel sind illustrativ.

Die Abteilung kartiert den Strom von dem Moment, in dem ein Fachbereichsverantwortlicher einen Change-Antrag einreicht, bis zu dem Moment, in dem er bestätigt, dass der Change live ist. Eine Stichprobe von 20 jüngsten normalen Changes ergibt die Stufentabelle unten, mit illustrativen Medianwerten je Stufe.

| Stufe | Bearbeitungszeit (Tage) | Wartezeit (Tage) | %C/A (illustrativ) |
| --- | --- | --- | --- |
| Eingang und Triage | 0,5 | 6 | 85 |
| Bau | 1,5 | 5 | 90 |
| Test | 0,5 | 8 | 80 |
| Change-Genehmigung | 0,25 | 9 | 70 |
| Deployment und Bestätigung | 0,25 | 4 | 95 |
| Strom gesamt | 3,0 | 32 | 41 (kumuliert) |

Die Durchlaufzeit des Stroms in der Stichprobe beträgt etwa 35 Tage, die Prozesseffizienz also grob 9 Prozent. Das kumulierte %C/A beträgt etwa 41 Prozent, das Produkt der fünf Stufenwerte, sodass weniger als die Hälfte der Changes jede Stufe ohne Rückgabe passiert. Die Stufe der Change-Genehmigung wirkt allein nach %C/A bescheiden, doch ihre 9 Tage Wartezeit sind die längste einzelne Warteschlange, und 30 Prozent der Changes kommen dort mit fehlenden Risikoinformationen an, die das Gremium zurückschickt.

Das Team trifft zwei Entscheidungen. Erstens stuft es die zehn häufigsten Change-Typen mit geringem Risiko als Standard-Changes mit vorab genehmigten Verfahren ein, sodass sie das Gremium überspringen. Zweitens erhält das Eingangsformular die Risikofelder, nach denen das Gremium immer fragt, und mit dem Gremium wird eine kurze Abnahme-Checkliste vereinbart. Diese Entscheidungen greifen das größte Warten und die größte kumulierte Rückgabe an, statt die Bau-Stufe, bei der das Team gebeten worden war, „schneller zu werden“.

Drei Monate später fällt der Median der Durchlaufzeit für die gezogene Klasse und das Genehmigungswarten schrumpft, während das kumulierte %C/A steigt. Das Manipulationsrisiko zeigt sich im dritten Monat. Ein Produktteam zerlegt mehrere Anfragen in zwei oder drei kleinere, weil kleine Elemente als Standard-Changes gelten, und die Durchlaufzeit je Element sinkt stark. Der Prüfer bemerkt, dass die Zahl der verknüpften Kindelemente gestiegen ist und die Kundenbestätigung je ursprünglicher Anfrage sich nicht verbessert hat. Die Abteilung behält die Durchlaufzeit bei, definiert aber das Element als die ursprüngliche Anfrage des Kunden, sodass Zerlegen nicht mehr hilft. Das Entscheidungsprotokoll hält die Definitionsänderung fest und stellt das Vorquartal mit derselben Regel neu dar.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Ein Wertstrom überquert Teamgrenzen, und dort stockt kontinuierliche Auslieferung oft. Ein praktischer Schritt ist, einen Strom mit den Menschen, die darin arbeiten, und ihren Stakeholdern zu kartieren, das Warten zwischen Stufen zu markieren und eine Übergabe zur Verbesserung zu wählen. Zu beachten ist, dass eine einmal gemachte und abgelegte Karte veraltet; überprüfen Sie sie also, wenn sich die Arbeit ändert.

### KI

KI kann eine Stufe beschleunigen, etwa Entwurf oder Triage, während die Arbeit dann an der nächsten Stufe länger wartet. Messen Sie den ganzen Strom vor und nach einer KI-Änderung, nicht nur die Stufe, die das Werkzeug bekam, und koppeln Sie die durchgängige Durchlaufzeit mit Prozent vollständig und korrekt an jeder Übergabe. Zu beachten ist, dass lokale Gewinne durch KI eine längere Gesamtdurchlaufzeit verbergen können.

### Automatisierung

Instrumentieren Sie Ereignisse bei Stufeneintritt und -austritt automatisch, damit der Strom aus echten Zeitstempeln gemessen wird. Messen Sie Automatisierung an der Bearbeitungs- und Wartezeit, die sie beseitigt, und an der Nacharbeit, die sie nachgelagert erzeugt. Zu beachten ist, dass das Automatisieren einer Stufe, ohne die Übergabe danach zu beheben, die Warteschlange verschiebt, ohne den Strom zu verkürzen.

### Analytik

Zeigen Sie die Prozesseffizienz als Trend und zerlegen Sie die Durchlaufzeit je Stufe in Berührungs- und Wartezeit. Die Entscheidung, die dies untermauert, ist, welche Übergabe zuerst zu beheben ist. Zu beachten ist, dass sich Stufendefinitionen zwischen Teams unterscheiden; einigen Sie sich also vor dem Vergleich auf die Grenzen und vermeiden Sie es, Teams nach Stufenzeit zu ordnen.

## Branchenperspektive

**Startup.** Ein kurzer Strom mit wenigen Übergaben hat wenig zu kartieren, und die nützlichste Messgröße ist schlicht die verstrichene Zeit von der Anfrage des Kunden bis zur Nutzung durch den Kunden. Zeichnen Sie den Strom an eine Wand, lesen Sie die rohen Elemente und achten Sie auf die erste Übergabe, die erscheint, wenn das Team wächst. Widerstehen Sie dem Bau von Werkzeugen, bevor sich der Strom stabilisiert hat.

**Kleinunternehmen.** Eine oder zwei Personen decken oft mehrere Stufen ab, Übergaben sind also zwischen Rollen oder Werkzeugen statt zwischen Teams. Berichte aus Tracker oder Service Desk liefern die Durchlaufzeit billig, und eine Stichprobe von zehn Elementen offenbart das Warten. Fragen Sie Lieferanten, etwa einen Managed-Service-Anbieter, nach ihren Stufenzeiten, denn die Warteschlange des Lieferanten ist oft das längste Warten.

**Großunternehmen.** Lange Ströme mit vielen Teams und Genehmigungstoren sind der Ort, an dem kumuliertes %C/A und Übergabezahl sich am meisten auszahlen. Weisen Sie jedem wichtigen Strom einen Eigner zu, kartieren Sie ihn gemeinsam mit jeder Stufe vertreten und nutzen Sie eine gemeinsame Element-Kennung, damit Werkzeuge verbunden werden können. Verschiedene Bereiche verwenden dieselben Wörter für verschiedene Uhren, veröffentlichen Sie also eine Definition je Messgröße und führen Sie ein Änderungsprotokoll.

**Behörden und öffentlicher Sektor.** Gesetzliche Genehmigungen, Beschaffungsschritte und Prüfkontrollen bilden legitime Stufen, die sich nicht entfernen lassen und oft das längste Warten halten. Kartieren Sie sie ehrlich, trennen Sie das vorgeschriebene Warten vom vermeidbaren und zeigen Sie den vorgeschriebenen Teil denen, die die Regeln setzen. Führen Sie eine Prüfspur der Daten und jeder Definitionsänderung (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Das Motiv ist, dass Warten meist der größte Teil der Durchlaufzeit und der billigste zu verringernde ist, denn die Lösung ist oft eine Entscheidung, eine Regel oder eine Übergabe statt zusätzlicher Kapazität. Kunden spüren die Durchlaufzeit unmittelbar, und die Organisation zahlt für die Nacharbeit mit Kapazität, die in keinem Stufenbericht erscheint. Weniger Übergaben und Rückgaben verringern auch die Fehlermodi, die später zu Incidents werden.

Die Kosten sind bescheiden und überwiegend menschlich: einige Stunden der Zeit mehrerer Personen für Kartierungsworkshop und Stichprobe, eine gemeinsame Element-Kennung über Werkzeuge hinweg (siehe Thema 1.5, Datenquellen und Instrumentierung) und monatlich ein wenig Analystenzeit. Die größeren Kosten sind das teamübergreifende Gespräch und die Bereitschaft, eine Regel zu ändern, die jemand besitzt.

Der Ertrag zeigt sich als kürzere und besser vorhersagbare Durchlaufzeiten, ein steigendes kumuliertes %C/A, weniger zurückgegebene Elemente und aus Nacharbeit freigesetzte Kapazität. Prognostizieren Sie keine prozentuale Verbesserung aus veröffentlichten Fallstudien. Schätzen Sie den Ertrag aus Ihrem eigenen Strom: das Volumen der Elemente, das aktuelle Warten, die Kosten der Verzögerung für den Kunden, so gut Sie sie angeben können, und die Nacharbeitsstunden, die Sie zählen können. Das Flow Framework und die Lean-Literatur beschreiben das Muster, und keines liefert einen Benchmark, der auf Ihren Strom übertragbar wäre (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Eine Stufe statt eines Stroms kartieren.** Eine wunderbar detaillierte Karte der Arbeit eines Teams lässt die längsten Wartezeiten vom Blatt. Kartieren Sie von der Anfrage des Kunden bis zur Nutzung durch den Kunden und fügen Sie Details nur dort hinzu, wo das Warten ist.
- **Stufenzeiten aus verschiedenen Stichproben mitteln.** Die Summe von Stufendurchschnitten ist nicht der Durchschnitt des Stroms. Berechnen Sie Strommessgrößen aus Datensätzen auf Elementebene und berichten Sie Mediane und Perzentile.
- **Wartezeit als Anstrengungsproblem behandeln.** Menschen zu sagen, sie sollten schneller arbeiten, verkürzt selten eine Warteschlange. Fragen Sie, worauf das Element wartet und ob das Warten nötig ist.
- **Die Prozesseffizienz als Ziel optimieren.** Wird das Verhältnis zum Ziel, wird Bearbeitungszeit aufgebläht oder Durchlaufzeit mit Tricks gekürzt. Nutzen Sie es als Anstoß für Nachforschungen und koppeln Sie es mit der vom Kunden bestätigten Durchlaufzeit.
- **%C/A ohne schriftliche Abnahmebedingung messen.** Ohne sie ist jede Rückgabe ein Streit. Lassen Sie die empfangende Stufe die Bedingung schreiben und halten Sie sie kurz.
- **Stille Nacharbeit unerfasst lassen.** Korrigiert eine Stufe eingehende Arbeit, ohne es zu protokollieren, ist %C/A überzeichnet, und die sendende Stufe lernt nie. Erfassen Sie jede Korrektur als Rückgabe.
- **Strommessgrößen nutzen, um Teams oder Menschen zu ordnen.** Sie beschreiben das System, und das größte Warten ist selten die Schuld eines Teams. Berichten Sie nach Stufe und Strom und überprüfen Sie die Ergebnisse mit allen Stufen am Tisch.
- **Einmal kartieren und nie wieder.** Ströme driften. Überprüfen Sie die Karte nach Plan und nach jeder Umorganisation oder jedem Werkzeugwechsel.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Stromdefinition und Uhren | Strom nicht definiert; jedes Team misst seine eigene Stufe | Ein Strom von einem Team kartiert; Uhren unterscheiden sich von denen anderer Teams | Geschriebener Start und Stopp für jeden wichtigen Strom, von der Anfrage des Kunden bis zur Nutzung durch den Kunden | Uhrenregeln überprüft, Änderungen protokolliert, Historie bei Definitionsänderungen neu dargestellt | Definitionen über Teams und Lieferanten überarbeitet, wenn sich Strom und Nachfrage ändern |
| Bearbeitungszeit und Wartezeit | Nur die verstrichene Zeit ist bekannt | Für einen Strom von Hand per Stichprobe erfasst | Aus Werkzeugereignissen mit dokumentiertem Zustandsmodell und gekennzeichneten Schätzungen erhoben | Mit Perzentilen im Trend, Wartezeitverringerungen finanziert und verfolgt | Wartezeiten über Lieferanten und Teams gemeinsam gesteuert, gemeinsame Warteschlangen sichtbar |
| Qualität entlang des Stroms | Nacharbeit wird bemerkt, aber nicht gezählt | Rückgaben von einigen Stufen gezählt | Schriftliche Abnahmebedingungen und Stufen-%C/A den zuständigen Teams gezeigt | Kumuliertes %C/A im Trend und mit Nacharbeits- und Fehlermessgrößen gekoppelt | Abnahmebedingungen gemeinsam von Sender und Empfänger besessen und mit Kundenergebnissen verknüpft |
| Nutzung in der Verbesserung | Kartierung einmal gemacht, dann beiseitegelegt | Gelegentlicher Workshop führt zu einer lokalen Korrektur | Vierteljährliches Review mit jeder Stufe am Tisch | Größtes Warten oder größte Rückgabe wird jedes Quartal mit einem Eigner angegangen | Verbesserungsideen kommen aus jeder Stufe, Entscheidungen protokolliert, Ergebnisse geprüft |

## Checkliste

- [ ] Ein Wertstrom und eine Elementklasse sind benannt, mit einem Stromeigner.
- [ ] Start und Stopp der Uhr sind in Begriffen der Anfrage des Kunden und der Nutzung durch den Kunden geschrieben.
- [ ] Die Ist-Karte wurde mit einem Vertreter jeder Stufe gebaut, einschließlich der Kundenseite.
- [ ] Bearbeitungszeit und Wartezeit werden je Stufe getrennt aus einer Stichprobe echter Elemente erfasst.
- [ ] Stufen- und Stromzeiten werden als Mediane und ein hohes Perzentil berichtet, mit gezeigter Stichprobengröße.
- [ ] Jede empfangende Stufe hat eine schriftliche Abnahmebedingung, und Rückgaben werden erfasst.
- [ ] Kumuliertes Prozent vollständig und korrekt wird aus den Stufenwerten berechnet.
- [ ] Übergaben werden gezählt, und das größte Warten hat einen benannten Eigner und ein geplantes Experiment.
- [ ] Manipulationsvektor und Leitplanke jeder Kennzahl wurden mit dem Team überprüft.
- [ ] Karte und Stichprobe werden planmäßig überprüft, und Definitionsänderungen werden protokolliert.

## KI-Prompts

**Einen Interviewleitfaden für die Wertstromanalyse entwerfen.**

```text
I am mapping the value stream for [stream name], from [start event] to [end
event], for the item class [item class]. The teams involved are [list of
teams]. Draft an interview guide for a mapping workshop: questions for each
stage about process time, wait time, handoffs, returns, and acceptance
conditions, plus questions for the customer side. Do not invent timings or
benchmark values. List your assumptions and the data I should collect to check
the answers.
```

**Strommessgrößen aus einer Stichprobe berechnen.**

```text
Here is a sample of [number] items with stage entry and exit times, active and
waiting states, and returns: [paste data or describe the columns]. Calculate
lead time, process time, wait time, process efficiency, stage percent complete
and accurate, and rolled percent complete and accurate, and show the formulas
used. Report medians and the [percentile] percentile. Flag items with missing
timestamps and say how you handled them. Do not fill gaps with invented values.
List your assumptions.
```

**Manipulationsrisiken in einem Strom-Dashboard finden.**

```text
Our stream dashboard shows [list metrics] for [stream name], and teams are
reviewed against [targets or none]. For each metric, list plausible ways the
number could improve without the stream improving, the signals that would reveal
each, and a guardrail metric or practice that would catch it. Focus on [stage
or handoff of concern]. Do not suggest ranking individuals and do not invent
thresholds. List your assumptions.
```

**Eine Abnahmebedingung für eine Übergabe schreiben.**

```text
The sending stage is [sender team] and the receiving stage is [receiver team].
Items are [item type], and the most common reasons they are returned are
[reasons]. Draft a short acceptance condition of no more than [number] checks
that the receiver can apply, and a way to record returns so percent complete and
accurate can be calculated. Keep the wording neutral and do not assign blame.
List your assumptions and the questions I should ask both teams.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine Kennzahl auf Ihrer Wertstromkarte definiert, und die Leitplanke, die daneben stehen sollte.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein bearbeitetes Kennzahlenthema seine Uhren, Manipulationsvektoren und Querverweise nennt.

## Wichtigste Erkenntnisse

- Messen Sie den Strom von der Anfrage des Kunden bis zur Nutzung durch den Kunden, denn Messgrößen an Teamgrenzen verbergen die längsten Wartezeiten.
- Teilen Sie jede Stufe in Bearbeitungszeit und Wartezeit und suchen Sie die Ursache des größten Wartens in der Schnittstelle zwischen Teams.
- Prozent vollständig und korrekt summiert sich über Stufen multiplikativ, der kumulierte Wert ist also meist niedriger, als jeder Stufenbericht nahelegt.
- Verringern Sie Übergaben und genehmigen Sie Routinearbeit vorab, bevor Sie Stufen zu mehr Tempo drängen.
- Beobachten Sie eine Stichprobe echter Elemente neben Werkzeugdaten, berichten Sie Perzentile und kennzeichnen Sie Schätzungen.
- Koppeln Sie jede Strommessgröße mit ihrer Leitplanke und nutzen Sie die Messgrößen, um das System zu beschreiben, nie um Menschen zu ordnen.

## Quellen und weiterführende Literatur

1. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
2. Martin, K., and Osterling, M., *Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation*, McGraw-Hill, 2014.
3. Womack, J. P., and Jones, D. T., *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*, Simon and Schuster, 1996.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
7. Kersten, M., *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*, IT Revolution, 2018.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
10. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
11. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
12. Wikipedia, [Value stream](https://en.wikipedia.org/wiki/Value_stream).
13. Wikipedia, [Value-stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping).
14. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
17. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
18. Wikipedia, [Rolled throughput yield](https://en.wikipedia.org/wiki/Rolled_throughput_yield).
19. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
