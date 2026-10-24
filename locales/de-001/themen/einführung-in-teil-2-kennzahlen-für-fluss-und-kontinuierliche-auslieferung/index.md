# Einführung in Teil 2: Kennzahlen für Fluss und kontinuierliche Auslieferung

**Flusskennzahlen zeigen, wie Arbeit tatsächlich durch ein Team fließt, das Services entwickelt und betreibt, damit Sie finden, wo sie wartet, entscheiden, was zu ändern ist, und prüfen können, ob die Änderung geholfen hat.**

Agile Teams, die auch Services betreiben, bearbeiten einen gemischten Strom von Arbeit: geplante Funktionen, Fehlerbehebungen, Serviceanfragen und Unterbrechungen durch laufende Incidents. Alles konkurriert um dieselben Menschen und dieselbe Aufmerksamkeit. Flusskennzahlen beschreiben diesen Strom aus der Sicht des Arbeitselements. Sie fragen, wie viele Elemente in Arbeit sind, wie lange sie dauern, wie alt sie sind und wie viele in einem Zeitraum fertig werden.

Diese Sicht ist nützlich, weil die meiste Verzögerung Warten ist und nicht Arbeiten. Eine Anfrage kann in einer Warteschlange, in einem Review oder in einer Genehmigung weit länger liegen, als irgendjemand an ihr arbeitet. Die Uhr am Element zu messen statt den Aufwand der Person legt diese Lücken offen und gibt dem Team einen gemeinsamen, sachlichen Ausgangspunkt für Verbesserung. Sie passt auch zu beiden Welten. Agile Praxis spricht von Zykluszeit und Durchsatz, ITIL-Praxis von Wertströmen und Serviceleistung. Beide beschreiben dieselbe Bewegung der Arbeit.

Flussdaten sind schief und werden leicht missbraucht. Zeitmessgrößen sollten als Verteilungen mit Perzentilen gelesen werden, wie in Teil 1 dargelegt (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen). Jede Kennzahl in diesem Teil beschreibt ein Team, einen Service oder ein System. Keine bringt eine Einzelperson in eine Rangfolge, und keine ist ein Ziel, das isoliert nach oben oder unten gedrückt werden soll (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Die vier Linsen dieses Buches zeigen sich hier auf besondere Weise. Kontinuierliche Auslieferung und die Einbindung der Stakeholder setzen den Rhythmus der gemessenen Arbeit. KI-Unterstützung kann die Zahl fertig aussehender Elemente erhöhen, ohne ihre Wartezeit zu verkürzen, daher werden Flussmessgrößen mit Nacharbeits- und Qualitätssignalen gekoppelt. Automatisierung liefert die Ereigniszeitstempel und sollte selbst auf Ausfälle gemessen werden. Analytik verwandelt die Uhren in Spannen und Trends, mit der Zahl der Elemente hinter jeder gezeigt.

## Themen in diesem Teil

- **2.1 Flussmaße**: Arbeit in Bearbeitung, Durchsatz, Alter von Arbeitselementen und Zykluszeit, angewandt auf Projekt- und Servicearbeit.
- **2.2 Durchlaufzeit, Zykluszeit und Flusseffizienz**: Definitionen, die über Teams hinweg tragen, wo die Uhren starten und stoppen und wie Wartezeit sichtbar wird.
- **2.3 Laufende Arbeit und Warteschlangentheorie**: das Gesetz von Little, Auslastung und Wachstum von Warteschlangen, WIP-Limits (Work in Process) und warum ein voll ausgelastetes Serviceteam ein langsames ist.
- **2.4 Kennzahlen für den Wertstrom**: Messgrößen der Wertstromanalyse, Bearbeitungszeit, Wartezeit, Prozent vollständig und korrekt und ITIL-Wertströme.
- **2.5 Kennzahlen für Lieferprognosen und Planung**: Story Points und Velocity, Erfolg beim Lieferziel, Prognosegenauigkeit und warum Velocity nie über Teams hinweg verglichen werden darf.
- **2.6 Kennzahlen für Backlog und Refinement**: Größe und Alter des Backlogs, bereite Arbeit, Refinement-Abdeckung und wie sich Produkt- und Service-Backlogs unterscheiden.
- **2.7 Kennzahlen für Pull Requests und Code-Reviews**: Review-Zeit, Größe von Pull Requests und Nacharbeit als Flusssignale, mit den daraus folgenden Manipulationsvektoren.
- **2.8 DORA-Kennzahlen**: Change-Durchlaufzeit, Deployment-Häufigkeit, Wiederherstellungszeit nach fehlgeschlagenem Deployment, Change-Fehlerrate und Deployment-Nacharbeitsrate, mit den eigenen Vorbehalten der Forschung.
- **2.9 Betriebsarbeit und ungeplante Arbeit**: geplante gegenüber ungeplanter Arbeit, Unterbrechungslast, Expedite-Spuren und Kapazitätsverteilung zwischen Change- und Betriebsarbeit.

## Wie diese Themen zusammenhängen

Die ersten vier Themen bilden den Kern des Teils. Thema 2.1 (siehe Thema 2.1, Flussmaße) definiert die Grundgrößen: Arbeit in Bearbeitung, Durchsatz, Alter von Arbeitselementen und Zykluszeit. Thema 2.2 (siehe Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz) legt fest, wo die Uhren starten und stoppen, wovon jeder Vergleich abhängt. Thema 2.3 (siehe Thema 2.3, Laufende Arbeit und Warteschlangentheorie) erklärt, warum sich diese Größen gemeinsam bewegen, und Thema 2.4 (siehe Thema 2.4, Kennzahlen für den Wertstrom) weitet den Blick vom Board eines Teams auf den ganzen Weg von der Anfrage zum Wert.

Mehrere Themen wirken als Leitplanken für andere. Durchsatz- und Geschwindigkeitsmessgrößen lassen sich aufblähen, indem Arbeit in kleinere Stücke zerlegt oder überstürzt wird, sie sollten also neben Nacharbeits- und Qualitätssignalen gelesen werden. Größe von Pull Requests und Review-Zeit in Thema 2.7 (siehe Thema 2.7, Kennzahlen für Pull Requests und Code-Reviews) sind Frühindikatoren für Verzögerung und Nacharbeit. Die Lieferergebnisse in Thema 2.8 (siehe Thema 2.8, DORA-Kennzahlen) koppeln Geschwindigkeitsmessgrößen mit Stabilitätsmessgrößen, damit schnellere Auslieferung nicht mit mehr Fehlern erkauft wird. Die Velocity in Thema 2.5 (siehe Thema 2.5, Kennzahlen für Lieferprognosen und Planung) ist ein Planungshilfsmittel für ein Team und sollte an Prognosegenauigkeit und Flussmessgrößen geprüft statt als Output gelesen werden.

Die übrigen Themen beschreiben die Bedingungen, unter denen Arbeit fließt. Ein Backlog, der lang, alt oder schlecht verfeinert ist, nährt schlechten Fluss, worum es in Thema 2.6 geht (siehe Thema 2.6, Kennzahlen für Backlog und Refinement). Ungeplante Arbeit und Unterbrechungen, behandelt in Thema 2.9 (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit), sind oft der verborgene Grund, warum sich Zykluszeiten dehnen und Prognosen danebenliegen. Sie neben laufender Arbeit und Warteschlangentheorie in Thema 2.3 zu lesen erklärt, warum ein Team ohne freie Kapazität keinen Incident auffangen kann, ohne alles andere zu verzögern.

Spätere Teile bauen auf diesen Messgrößen auf. Incident-, Change- und Release-Kennzahlen in den Teilen 3 und 4 nutzen dieselben Uhren und dasselbe Denken in Verteilungen, angewandt auf Support- und Change-Arbeit. Zusammengenommen lässt die Flusssicht agile und ITIL-Teams über ein gemeinsames Arbeitssystem sprechen.
