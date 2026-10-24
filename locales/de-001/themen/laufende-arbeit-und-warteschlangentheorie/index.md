# Laufende Arbeit und Warteschlangentheorie

**Ein Team, das voll ausgelastet ist, ist ein Team, dessen Arbeit wartet. Messen Sie deshalb, wie viel Arbeit in Bearbeitung ist, wie lange sie in der Warteschlange steht und wie nah das Team an der Kapazitätsgrenze läuft, und nutzen Sie die Arithmetik der Warteschlangen, um Limits zu setzen, bevor die Verzögerungen eintreffen.**

## Überblick und Motivation

Jedes Serviceteam hat eine Warteschlange, ob es das Wort nutzt oder nicht. Incidents warten auf die Triage, Anfragen warten auf die Genehmigung, Changes warten auf einen Review-Termin, und Backlog-Elemente warten darauf, dass sie jemand zieht. Der größte Teil der verstrichenen Zeit in diesen Systemen ist Warten, nicht Arbeiten. Die Messgrößen in diesem Thema erklären, warum das Warten wächst, wie man es früh sieht und was ein Team dagegen tun kann.

Die zentrale Größe ist die [laufende Arbeit](https://en.wikipedia.org/wiki/Work_in_process) (Work in Process, WIP), die Zahl der Elemente, die begonnen und noch nicht abgeschlossen sind. Agile Teams, die den Fluss steuern, machen WIP auf einem Board sichtbar und deckeln es mit einem WIP-Limit. Der Servicebetrieb unter ITIL zählt offene Incidents, Anfragen und Changes und nennt die Gesamtheit eine Warteschlange oder einen Rückstand von Datensätzen. Beide Sichten beschreiben dasselbe: Elemente innerhalb eines Systems, das sie noch nicht ausgeliefert hat. Dieses Thema verwendet „laufende Arbeit“ für beides und nennt jedes Mal die Grenze (welche Status als „in Bearbeitung“ zählen und welche nicht), denn diese Grenze entscheidet über jede folgende Zahl.

Die Mathematik stammt aus der [Warteschlangentheorie](https://en.wikipedia.org/wiki/Queueing_theory), der Lehre von den Warteschlangen. Ihr für ein Serviceteam nützlichstes Ergebnis ist das [Gesetz von Little](https://en.wikipedia.org/wiki/Little%27s_law), 1961 von John Little bewiesen. Für ein stabiles System ist die durchschnittliche Zahl der Elemente im System gleich der durchschnittlichen Ankunftsrate multipliziert mit der durchschnittlichen Zeit, die ein Element im System verbringt. In Liefertermen: Das durchschnittliche WIP ist gleich dem durchschnittlichen Durchsatz multipliziert mit der durchschnittlichen Zykluszeit. Das Gesetz gilt unabhängig von der Reihenfolge, in der Elemente bedient werden, was es zu einer billigen Plausibilitätsprüfung für jede Menge von Flusskennzahlen macht (siehe Thema 2.1, Flussmaße, und Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz).

Das zweite Ergebnis ist unbequemer. Nähert sich eine gemeinsam genutzte Ressource der vollen Auslastung, steigt die Wartezeit immer schneller. Eine verwandte Näherung, die [Formel von Kingman](https://en.wikipedia.org/wiki/Kingman%27s_formula), zeigt, dass die Warteschlangenverzögerung mit der Auslastung im Verhältnis von Auslastung zum verbleibenden Leerlaufanteil wächst und außerdem mit der Variabilität der Ankünfte und der Bedienzeiten. Support- und Betriebsarbeit ist von Natur aus variabel, denn Incidents kommen in Schüben, und der Aufwand pro Element unterscheidet sich stark. Ein Team, das plant, zu 100 Prozent beschäftigt zu sein, hat also lange Wartezeiten eingeplant, und der erste Major Incident verwandelt lange Wartezeiten in einen Rückstand, dessen Abbau Wochen dauert.

In diesem Thema verwendete Begriffe:

- **Ankunftsrate** ist die Zahl der pro Zeiteinheit in das System eintretenden Elemente.
- **Durchsatz** (oder Abgangsrate) ist die Zahl der pro Zeiteinheit fertig aus dem System austretenden Elemente.
- **Zykluszeit** ist die verstrichene Zeit vom Moment, in dem ein Element die Systemgrenze betritt, bis zu dem Moment, in dem es sie verlässt. Dieses Thema verwendet dieselbe Uhr wie Thema 2.2.
- **Warteschlangenzeit** ist der Teil der verstrichenen Zeit, in dem ein Element wartet und niemand daran arbeitet.
- **Auslastung** ist der Bruchteil der verfügbaren Kapazität, der genutzt wird. Für ein Team wird Kapazität in Arbeitsstunden oder in einer Zahl parallel bearbeitbarer Elemente ausgedrückt. Auslastung ist eine Eigenschaft eines Teams oder eines Ressourcenpools, nie einer Einzelperson.
- **WIP-Limit** ist eine vereinbarte Höchstzahl von Elementen in einer Stufe oder im ganzen System. Ein neues Element wird nicht begonnen, wenn das Limit erreicht ist.
- Ein **Engpass** ist die Stufe mit der geringsten Kapazität im Verhältnis zur Nachfrage. Er bestimmt das Tempo der ganzen Kette, ein Punkt, den die [Theorie der Beschränkungen](https://en.wikipedia.org/wiki/Theory_of_constraints) und ihr Begriff des [Engpasses](https://en.wikipedia.org/wiki/Bottleneck_(production)) ausarbeiten.

Agile und ITIL-Sichtweisen treffen sich hier: ITIL 4 (2019) behandelt Kapazitäts- und Leistungsmanagement, Incident-Management und Serviceanfragen-Management als Praktiken, die davon abhängen, Kapazität und Nachfrage in Einklang zu bringen, und agile Methoden drücken dieselbe Idee als Begrenzung der Arbeit in Bearbeitung und als Fertigstellen vor dem Beginnen aus. [Lean-Softwareentwicklung](https://en.wikipedia.org/wiki/Lean_software_development) behandelt unfertige Arbeit als Lagerbestand mit Haltekosten und Risiko.

## Leitprinzipien

- **Warten dominiert die verstrichene Zeit.** In den meisten Service- und Liefersystemen warten Elemente weit länger, als jemand an ihnen arbeitet, sodass die Verringerung des Wartens ein größerer Hebel ist als schnelleres Arbeiten.
- **Das Gesetz von Little verbindet die drei Flusszahlen.** Durchschnittliches WIP, Durchsatz und Zykluszeit lassen sich nicht unabhängig voneinander festlegen. Wollen Sie bei gleichem Durchsatz eine kürzere Zykluszeit, müssen Sie das WIP senken.
- **Verzögerung wächst steil nahe der vollen Auslastung.** Spielraum ist der Preis der Reaktionsfähigkeit. Ein Team ohne freie Kapazität kann einen Schub oder ein dringendes Element nicht auffangen, ohne alles andere zu verspäten.
- **Variabilität verstärkt Warteschlangen.** Ungleichmäßige Ankünfte und ungleichmäßige Elementgrößen verlängern Warteschlangen, auch wenn die durchschnittliche Last akzeptabel aussieht. Verringern Sie Variabilität, wo Sie können, und puffern Sie sie, wo nicht.
- **WIP begrenzen, um Arbeit abzuschließen, nicht um beschäftigt zu wirken.** Ein WIP-Limit ist ein Auslöser für ein Gespräch über blockierte Arbeit und Kapazität, keine Compliance-Regel.
- **Auf Systemebene messen.** WIP, Warteschlangenlänge und Auslastung beschreiben Teams und Services, nie die Menschen darin.
- **Verteilungen berichten, nicht Durchschnitte.** Warteschlangenzeiten haben lange Ausläufer, zeigen Sie also den Median und ein hohes Perzentil wie das 85. oder 95. (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

## Kennzahlendefinitionen

Sieben Messgrößen decken das Thema ab. Jede ist für eine benannte Grenze definiert, die das Team in seinem Kennzahlenregister festhält (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Laufende Arbeit | Zahl der innerhalb der vereinbarten Grenze begonnenen und nicht abgeschlossenen Elemente | Anzahl der Elemente in Status „in Bearbeitung“ zum Zeitpunkt der Momentaufnahme; Elemente im Backlog oder in der Warteschlange „bereit“ vor dem ersten Arbeitsstatus und bereits erledigte Elemente sind ausgeschlossen | Elemente | Statusverlauf des Issue-Trackers oder ITSM-Werkzeugs | Incident-Management; Serviceanfragen-Management | WIP-Zahl auf dem Board | Tägliche Momentaufnahme, wöchentlich überprüft |
| Warteschlangenlänge | Zahl der Elemente, die auf den Arbeitsbeginn oder zwischen Stufen warten | Anzahl der Elemente in Wartestatus (zum Beispiel „neu“, „wartet auf Triage“, „wartet auf Review“) zum Zeitpunkt der Momentaufnahme; blockierte Elemente werden gesondert berichtet, nicht hinzugezählt | Elemente | Statusverlauf des Trackers oder ITSM-Werkzeugs | Incident-Management; Change-Befähigung | Spalte „bereit“ und Warteschlangenspalten auf einem Board | Tägliche Momentaufnahme, wöchentlich überprüft |
| Warteschlangenzeit | Verstrichene Zeit, die ein Element je Stufe wartet, bevor die Arbeit beginnt | Die Uhr startet, wenn das Element in einen Wartestatus wechselt, und stoppt, wenn es in den nächsten aktiven Status wechselt; Zeit in einem Status „blockiert durch Kunden“ ist ausgeschlossen und wird als eigene Zahl berichtet; Median und 85. Perzentil berichten | Stunden oder Tage | Zeitstempel der Statusübergänge im Tracker oder ITSM-Werkzeug | Service Desk; Incident-Management; Change-Befähigung | Wartezeit in einem Wertstrom; Zeit in Warteschlangenspalten | Wöchentlich |
| Ankunfts- und Abgangsrate | In einem Zeitraum in das System eintretende und es verlassende Elemente sowie ihre Differenz als Nettowachstum der Warteschlange | Ankünfte = im Zeitraum in die Grenze eintretende Elemente; Abgänge = im Zeitraum abgeschlossene Elemente; Nettowachstum = Ankünfte minus Abgänge; wieder eröffnete Elemente zählen nur dann als Ankünfte, wenn das Team sie so definiert | Elemente pro Woche | Erstellungs- und Lösungszeitstempel des Trackers oder ITSM-Werkzeugs | Monitoring und Event-Management; Incident-Management | Durchsatz und kumulatives Flussdiagramm | Wöchentlich |
| Team-Lastverhältnis | Anteil der Teamkapazität, den geplante und erwartete Arbeit verbrauchen würde | Im Zeitraum erwartete Nachfragestunden (Ankünfte mal durchschnittlicher Aufwand je Element) / nach Urlaub und festen Verpflichtungen verfügbare Kapazitätsstunden; das Team gibt an, wie es den Aufwand schätzt; Einzelpersonen werden nie berichtet | Prozent | Kapazitätsplan, Aufwandsverlauf des Trackers, Dienstplan | Kapazitäts- und Leistungsmanagement; Personal- und Talentmanagement | Teamkapazität in geplanter Arbeit | Monatlich und bei jedem Planungsereignis |
| WIP-Limit-Überschreitungsrate | Anteil der Tage, an denen eine Stufe oder das System ihr vereinbartes WIP-Limit überschreitet | Tage mit WIP über dem Limit / Arbeitstage im Zeitraum; Tage, an denen das Team eine bewusste Ausnahme mit Begründung erfasst hat, werden gesondert berichtet | Prozent der Tage | Tägliche WIP-Momentaufnahmen und das Ausnahmeprotokoll | Kontinuierliche Verbesserung; Incident-Management | Arbeitsvereinbarung zum WIP-Limit | Wöchentlich |
| Konsistenzverhältnis nach Little | Prüfung, dass die drei Flusszahlen untereinander übereinstimmen | Durchschnittliches WIP im Zeitraum / (Abgänge pro Tag mal mittlere Zykluszeit in Tagen) für dieselbe Grenze und denselben Zeitraum; ein Verhältnis nahe 1 bedeutet, dass die Definitionen konsistent sind, ein Verhältnis weit von 1 bedeutet, dass eine Grenze oder Uhr inkonsistent ist | Verhältnis | Dieselben Trackerdaten wie die anderen Flusskennzahlen | Messung und Berichterstattung | Plausibilitätsprüfung der Flussmessgrößen in einer Retrospektive | Monatlich |

## Empfehlungen

### Zuerst die Grenze definieren

**1. Schreiben Sie die Systemgrenze auf, bevor Sie etwas zählen.** Legen Sie fest, welcher Status „in Bearbeitung“ beginnt und welcher es beendet und welche Elemente ausgeschlossen sind (zum Beispiel geplante Wartung oder Elemente, die auf einen Kunden warten). Zwei Teams, die WIP unterschiedlich zählen, erzeugen Zahlen, die sich nicht vergleichen lassen, und eine Grenze, die sich still verschiebt, bricht die Prüfung nach Little. Halten Sie die Grenze im Kennzahlenregister fest und ändern Sie sie nur mit protokolliertem Grund.

**2. Trennen Sie Warten von Arbeiten im Statusmodell.** Deckt ein einziger Status sowohl „zur Prüfung eingereiht“ als auch „wird geprüft“ ab, ist die Warteschlangenzeit unsichtbar. Geben Sie Wartezuständen eigene Namen, wie in Thema 1.5, Datenquellen und Instrumentierung, beschrieben, damit die Zeitstempel der Übergänge die Verzögerung offenlegen. Die Kosten eines zusätzlichen Status sind gering im Vergleich zum Wert zu sehen, wo Elemente sitzen.

### Das Gesetz von Little als Konsistenzprüfung nutzen

**3. Führen Sie die Prüfung nach Little jeden Monat durch.** Berechnen Sie für denselben Zeitraum und dieselbe Grenze durchschnittliches WIP, Durchsatz und mittlere Zykluszeit und sehen Sie, ob sie ungefähr übereinstimmen. Eine große Abweichung bedeutet meist, dass Elemente ungezählt in das System eintreten oder es verlassen oder dass alte Elemente in einem unbeachteten Status geparkt sind. Beheben Sie die Daten, bevor Sie einen Trend deuten. Das Gesetz ist ein Satz über stabile Systeme, wenden Sie es also auf Zeiträume an, in denen die Warteschlange nicht dramatisch wuchs oder schrumpfte.

### Auslastung und Warteschlangenwachstum beobachten

**4. Planen Sie Spielraum dort ein, wo die Variabilität hoch ist.** Planen Sie für die Incident-Bearbeitung, Bereitschaftsarbeit und jede von zufälliger Nachfrage gespeiste Warteschlange unterhalb der vollen Kapazität, damit ein Schub nicht zum Rückstand wird. Teams stellen häufig fest, dass ein auf dem Papier bequemes Lastverhältnis bereits zu hoch ist, sobald Unterbrechungen mitgezählt werden (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit). Vereinbaren Sie den Zielbereich mit den Menschen, die die Arbeit leisten, und überprüfen Sie ihn nach jedem Major Incident.

**5. Verfolgen Sie das Nettowachstum der Warteschlange ebenso wie ihre Größe.** Eine Warteschlange von 40 Elementen, die schrumpft, ist gesund, und eine von 15, die um 5 Elemente pro Woche wächst, nicht. Vergleichen Sie jede Woche Ankünfte und Abgänge und stellen Sie den Trend mit einem [kumulativen Flussdiagramm](https://en.wikipedia.org/wiki/Cumulative_flow_diagram) dar, in dem ein sich verbreiterndes Band einer Stufe wachsendes WIP dort anzeigt. Übersteigen die Ankünfte mehrere Wochen lang die Abgänge, wächst die Warteschlange unbegrenzt, und eine Entscheidung steht an: Kapazität hinzufügen, Nachfrage verringern oder ändern, was angenommen wird.

**6. Lesen Sie die Warteschlangenzeit je Stufe, um den Engpass zu finden.** Zerlegen Sie die verstrichene Zeit in Wartephasen je Stufe. Die Stufe mit der längsten Warteschlangenzeit und den meisten wartenden Elementen ist ein Kandidat für den Engpass. Die Verbesserung jeder anderen Stufe verkürzt das Gesamtsystem nicht, richten Sie den Verbesserungsaufwand also auf die Beschränkung und prüfen Sie danach erneut, denn die Beschränkung wandert.

### WIP so begrenzen, dass es funktioniert

**7. Setzen Sie das erste WIP-Limit aus Beobachtung und passen Sie dann an.** Beginnen Sie nahe am aktuellen durchschnittlichen WIP oder leicht darunter und beobachten Sie, was mit der Zykluszeit und den blockierten Elementen geschieht. Senken Sie das Limit Schritt für Schritt, solange das Team noch jede Person produktiv mit dem Abschließen von Arbeit beschäftigen kann. Es gibt keine allgemein richtige Zahl, und eine von einem anderen Team geborgte Zahl trägt keinen Beleg für Ihres.

**8. Behandeln Sie eine Überschreitung als Anstoß, nicht als Verstoß.** Übersteigt das WIP das Limit, fragen Sie, was den Abschluss blockiert und wer sich darauf stürzen kann. Eine mit Grund erfasste Überschreitung, etwa wegen einer dringenden Produktionskorrektur, ist Information. Werden Überschreitungen zur Routine, ist das Limit falsch oder das System überlastet, und die Antwort ist ein Kapazitätsgespräch statt einer Rüge.

**9. Wenden Sie Limits auf den ganzen Wertstrom an, nicht auf eine Spalte.** Ein Limit nur auf „in Bearbeitung“ lässt Arbeit in Review-, Test- und Genehmigungswarteschlangen auflaufen. Begrenzen Sie die Zahl der Elemente im System durchgängig und fügen Sie Stufenlimits dort hinzu, wo eine bestimmte Warteschlange weiter wächst. Gemeinsame Stufen wie ein Change-Beirat-Review oder eine Testumgebung verdienen ein eigenes sichtbares Limit und eine eigene Warteschlangenzeit.

### Dringende und variable Arbeit bewusst behandeln

**10. Geben Sie beschleunigter Arbeit eine Regel.** Ohne sie überschreiten dringende Elemente still jedes Limit, und das Team kann geplante von ungeplanter Last nicht unterscheiden. Legen Sie fest, was sich qualifiziert, wie viele beschleunigte Elemente gleichzeitig laufen dürfen und welche Arbeit pausiert. Zählen Sie beschleunigte Elemente und ihre Wirkung auf die Warteschlangenzeit, damit die Kosten der Dringlichkeit für die sichtbar sind, die sie anfordern (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Laufende Arbeit | Elemente in einen Status „geparkt“ oder „in Wartestellung“ verschieben, um unter dem Limit zu bleiben; Elemente zerlegen, damit sie kleiner wirken; Arbeit außerhalb des Boards beginnen | Zahl der Elemente in geparkten Status und ihr Alter; das Board stichprobenartig mit der echten Arbeit abgleichen; das älteste Element in Bearbeitung berichten |
| Warteschlangenlänge | Elemente schließen und wieder eröffnen; neue Elemente an der Tür abweisen; Wartestatus umbenennen, damit sie außerhalb der Zählung liegen | Wiedereröffnungsrate und Abweisungsrate neben der Warteschlangenlänge; Überprüfung der Statusdefinitionen bei jedem Kennzahlen-Review |
| Warteschlangenzeit | Die Uhr spät starten, indem der Datensatz erst angelegt wird, wenn die Arbeit bereit ist; die Uhr durch Status „blockiert“ oder „wartet auf Kunden“ pausieren; ein Element als in Bearbeitung markieren, wenn es nur geöffnet wurde | Verteilung der Zeit in blockierten und pausierten Status; Anteil der Elemente, die nach ihrem Beginn angelegt wurden; vom Anfragenden berichtete Wartezeit aus einer kurzen Umfrage |
| Ankunfts- und Abgangsrate | Elemente schnell schließen, um die Abgänge zu erhöhen; eine Anfrage in viele zerlegen, um beide Zählungen zu erhöhen; Duplikate als Ankünfte zählen | Qualitäts- und Wiedereröffnungsmessgrößen bei geschlossenen Elementen (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents); Größenverteilung der Elemente; Prüfung des Kundenergebnisses |
| Team-Lastverhältnis | Den Aufwand unterschätzen, um freie Kapazität zu zeigen, oder die Nachfrage überzeichnen, um Personal zu rechtfertigen; ein Verhältnis für einen günstigen Zeitraum berichten | Geschätzten und tatsächlichen Aufwand je Element vergleichen; das Verhältnis mit seinem Trend und dem Unterbrechungsanteil zeigen; Peer-Review der Schätzmethode |
| WIP-Limit-Überschreitungsrate | Das Limit erhöhen, um Überschreitungen zu stoppen; Überschreitungen verbergen, indem Elemente vom Board verschoben werden; Ausnahmen großzügig gewähren | Zahl und Gründe der Ausnahmen; Historie der Limitänderungen mit Daten; Zykluszeit-Perzentil neben der Überschreitungsrate |
| Konsistenzverhältnis nach Little | Grenze oder Zeitraum anpassen, bis sich das Verhältnis 1 nähert; langlebige Elemente als Ausreißer ausschließen | Grenze und Zeitraum im Voraus festlegen; die ausgeschlossenen Elemente und ihre Zahl veröffentlichen; Änderungen der Grenze mit Begründung überprüfen |

Ein gesunder Befund ist ein Team, dessen WIP stabil ist oder fällt, dessen Warteschlangenzeit-Perzentile flach sind oder sich verbessern, dessen Ankünfte und Abgänge ungefähr im Gleichgewicht sind und dessen Überschreitungen mit Gründen kommen, die zu Handlungen führen. Das Verhältnis nach Little liegt nahe 1, weil die Daten konsistent sind, nicht weil es jemand abgestimmt hat.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Enge WIP-Limits | Kürzere Zykluszeit, frühere Entdeckung von Problemen, mehr Abschließen | Leerlauf kann in einer Stufe auftreten; braucht Disziplin und etwas Querqualifizierung; kann Stakeholder frustrieren, die Arbeit begonnen sehen wollen |
| Lockere oder keine WIP-Limits | Alle wirken beschäftigt, und Anfragen werden schnell angenommen | Lange Warteschlangen, langsame Lieferung, verborgene Blockaden, starkes Kontextwechseln |
| Geplante freie Kapazität | Fängt Schübe und dringende Arbeit auf; hält Reaktionszeiten kurz | Wirkt in einem Auslastungsbericht wie Verschwendung; braucht eine Führung, die geringere scheinbare Effizienz akzeptiert |
| Hohe geplante Auslastung | Wirkt effizient und billig pro Stunde | Warten wächst steil, wenn die Last die Kapazität erreicht; fragil bei jeder Störung |
| Das Gesetz von Little für die Planung nutzen | Einfach, allgemein und schnell anzuwenden | Nur für stabile Systeme und für Durchschnitte gültig; sagt nichts über ein einzelnes Element |

Begrenzen Sie WIP und halten Sie Spielraum dort, wo Variabilität und die Kosten der Verzögerung hoch sind, und akzeptieren Sie lockerere Limits dort, wo Arbeit stetig und unabhängig ist.

Im einfachsten Lehrbuchmodell eines einzelnen Servers mit zufälligen Ankünften und Bedienzeiten (einer M/M/1-Warteschlange) ist die durchschnittliche Zeit im System die Bedienzeit geteilt durch eins minus die Auslastung: das Doppelte bei 50 Prozent, das Fünffache bei 80 Prozent, das Zehnfache bei 90 Prozent und das Zwanzigfache bei 95 Prozent. Echte Teams sind keine einzelnen Server, behandeln Sie diese Zahlen also als Form der Kurve, nicht als Prognose.

## Fragen für die Diskussion im Team

**1. Was zählt für uns als „in Bearbeitung“, und zählen wir alle gleich?**
Bitten Sie jede Person, den ersten und den letzten Status zu nennen, der ein Element zum Teil des WIP macht, und vergleichen Sie die Antworten. Suchen Sie nach Status wie „in Wartestellung“ oder „wartet auf Kunden“, die einige zählen und andere nicht. Einigen Sie sich auf eine Grenze und schreiben Sie sie auf. Die Moderation sollte festhalten, wie sich die WIP-Zahl mit den Antworten ändern würde, denn das zeigt, wie empfindlich die Kennzahl gegenüber der Definition ist.

**2. Wo warten unsere Elemente am längsten, und wem gehört diese Warteschlange?**
Zeichnen Sie den Fluss von der Ankunft bis zu Erledigt und markieren Sie die Wartepunkte. Schätzen Sie anhand eines jüngsten Monats Daten den Median und das 85. Perzentil der Wartezeit an jedem Punkt. Besprechen Sie, welche Warteschlange niemand besitzt, etwa ein Genehmigungsschritt oder eine gemeinsame Testumgebung. Einigen Sie sich auf eine Warteschlange, die im Detail untersucht wird, und eine Person, die beim nächsten Mal die Daten mitbringt.

**3. Wie beschäftigt ist zu beschäftigt für die Art Arbeit, die wir leisten?**
Vergleichen Sie die geplante Last mit dem Zeitanteil, der tatsächlich auf Unterbrechungen und dringende Elemente entfällt. Fragen Sie, was beim letzten Nachfrageschub mit der Warteschlange geschah. Besprechen Sie den Gedanken, dass ein Team ohne freie Kapazität nicht schnell reagieren kann. Die Moderation sollte auf einen Zielbereich für das Lastverhältnis hinlenken, nicht auf eine einzelne Zahl, und auf einen Plan für den Fall, dass der Bereich überschritten wird.

**4. Wächst unsere Warteschlange, schrumpft sie oder ist sie stabil, und woher wissen wir es?**
Sehen Sie sich Ankünfte und Abgänge der letzten acht Wochen an. Ein einfaches Diagramm genügt. Fragen Sie, ob jemand einen langsamen Anstieg bemerkt hätte, bevor er zum Problem wurde, und welches Signal Handeln auslösen würde. Einigen Sie sich, was ein Team tun soll, wenn die Abgänge drei Wochen in Folge hinter den Ankünften zurückbleiben.

**5. Was geschähe, wenn wir unser WIP-Limit um eins senkten?**
Bitten Sie die Menschen vorherzusagen, welche Elemente warten würden, welche früher fertig würden und was sie täten, wenn sie nichts Neues beginnen können. Bringen Sie Ängste an die Oberfläche, etwa als untätig angesehen zu werden.

**6. Stimmen unsere Zahlen untereinander überein?**
Nehmen Sie einen Monat Daten und berechnen Sie durchschnittliches WIP, Durchsatz und mittlere Zykluszeit. Prüfen Sie, ob das WIP ungefähr Durchsatz mal Zykluszeit ist. Wenn nicht, suchen Sie die Ursache, etwa fertige, aber nicht geschlossene Elemente oder geschlossene, aber nie begonnene Elemente. Die Moderation sollte eine Abweichung als Geschenk behandeln: Sie weist auf ein Daten- oder Definitionsproblem hin, das sonst jede andere Flusskennzahl verzerren würde.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams spüren die Wirkungen von zu viel WIP als Kontextwechsel, spätes Feedback und unfertige Arbeit, die verfällt. Am meisten gewinnen sie durch sichtbare WIP-Limits, kleine Elemente und die Gewohnheit, vor dem Beginnen abzuschließen. Ein Team sollte seine eigenen Warteschlangenzeiten zwischen Stufen ansehen, etwa das Warten auf ein Review, denn diese Verzögerungen sind meist größer als die Zeit, die mit Programmieren verbracht wird (siehe Thema 2.7, Kennzahlen für Pull Requests und Code-Reviews).

### Service- und Betriebsteams

Betriebsteams sehen sich zufälliger Nachfrage gegenüber, daher sind Warteschlangeneffekte stark. Ein Service Desk, eine Bereitschaftsrotation und ein Change-Review-Gremium verhalten sich jeweils wie eine Warteschlange mit variablen Ankünften. Diese Teams brauchen ausdrücklichen Spielraum, klare Prioritätsregeln und eine Regel für beschleunigte Arbeit, damit dringende Elemente nicht still alles andere verdrängen (siehe Thema 3.1, Kennzahlen für den Service Desk, und Thema 5.7, Kennzahlen für Toil und Bereitschaftsdienst). Messen Sie die Warteschlangenzeit an jeder Übergabe und achten Sie auf Arbeit, die zwischen Gruppen hin- und herspringt (siehe Thema 9.3, Kennzahlen für Zusammenarbeit und Übergaben).

### Führung und Governance

Führungskräfte beeinflussen Warteschlangen durch die Nachfrage, die sie annehmen, und die Auslastung, die sie belohnen. Sie sollten Warteschlangenzeit-Perzentile und das Nettowachstum der Warteschlange ebenso anfordern wie die Auslastung und davon ausgehen, dass ein gesunder Service unterhalb der vollen Kapazität läuft. Die Bitte, einem Team, das bereits an seinem Limit ist, weitere Projekte zu geben, ist eine Entscheidung, die Zykluszeit aller zu verlängern, und Governance sollte diese Abwägung ausdrücklich machen. Finanzieren Sie Kapazität für die Beschränkung statt allgemeiner Effizienzprogramme (siehe Thema 5.4, Kennzahlen für Kapazität und Leistung).

### Kunden und Nutzer

Kunden erleben Warteschlangen als Warten auf eine Antwort, und es interessiert sie kaum, wie beschäftigt das Team ist. Sie brauchen ehrliche Erwartungen auf Basis der Verteilung vergangener Wartezeiten, eine Möglichkeit, den Status ihrer Anfrage zu sehen, und einen Eskalationsweg für dringende Bedürfnisse. WIP zu begrenzen kann langsamere Annahme neuer Anfragen und schnellere Erledigung angenommener bedeuten, und diese Wahl sollte ihnen erklärt werden (siehe Thema 6.2, Experience Level Agreements).

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Krankenhauses hat einen Service Desk, ein Infrastrukturteam und ein Anwendungsteam. Alle Zahlen in diesem Beispiel sind illustrativ.

Das Anwendungsteam bearbeitet Serviceanfragen und kleine Changes für klinische Systeme. Über ein Quartal zeigt sein Dashboard einen Median der Zykluszeit, der von 6 auf 11 Arbeitstage gestiegen ist, während das Team meldet, „auf dem Zahnfleisch“ zu laufen. Das vom Team für das Quartal berechnete Lastverhältnis liegt bei 98 Prozent. Das 85. Perzentil der Warteschlangenzeit für die Stufe „wartet auf klinische Freigabe“ beträgt 9 Arbeitstage, und das durchschnittliche WIP auf dem Board beträgt 44 Elemente bei einem Durchsatz von 4 Elementen pro Arbeitstag. Nach dem Gesetz von Little ergibt 44 geteilt durch 4 eine implizierte mittlere Zykluszeit von 11 Arbeitstagen, was mit dem gemessenen Wert übereinstimmt, die Daten sind also konsistent, und das Team vertraut ihnen.

Der Abteilungsleiter schlägt zuerst vor, einen Auftragnehmer einzustellen. Der Teamleiter verweist auf die Aufschlüsselung nach Stufen: Von den 11 Tagen machen die Warteschlange vor der klinischen Freigabe und die Warteschlange vor dem Deployment den größten Teil der verstrichenen Zeit aus, und aktive Arbeit ist ein kleiner Anteil. Die Ankünfte im Quartal überstiegen die Abgänge um etwa 2 Elemente pro Woche, die Warteschlange wuchs also stetig. Das Team hat zudem jede dringende Anfrage angenommen, und für beschleunigte Elemente gibt es keine Regel.

Das Team beschließt vier Änderungen, im Entscheidungsprotokoll festgehalten. Es setzt ein systemweites WIP-Limit von 30 Elementen mit einem Stufenlimit von 8 für die Freigabe-Warteschlange. Es plant mit einem Lastverhältnis von etwa 80 Prozent, damit erwartete Unterbrechungen hineinpassen. Es schreibt eine Expedite-Regel, die höchstens zwei dringende Elemente gleichzeitig zulässt. Und es bittet die Gruppe der klinischen Freigabe, einen kurzen täglichen Review-Termin statt einer wöchentlichen Besprechung abzuhalten. Nach acht Wochen berichtet das Team einen Median der Zykluszeit von 7 Arbeitstagen, ein 85. Perzentil der Warteschlangenzeit bei der Freigabe von 3 Arbeitstagen und eine Überschreitungsrate von 10 Prozent der Tage, mit protokollierten Gründen.

Im zweiten Monat fängt das Team ein Manipulationsrisiko auf. Die Überschreitungsrate sieht hervorragend aus, doch eine Stichprobe des Boards zeigt mehrere Elemente in einem neuen Status namens „ausstehend“, der außerhalb der WIP-Zählung liegt, und die Leitplanke der Zahl geparkter Status war im Trend gestiegen. Das Team entfernt den Status, setzt die Elemente zurück in die Zählung und verlangt, dass jeder neue Status mit einer Definition ins Register aufgenommen wird. Die Überschreitungsrate steigt einige Wochen auf 18 Prozent, was das Team als ehrliche Zahl akzeptiert, und fällt dann, als blockierte Elemente gelöst werden.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Die Begrenzung der laufenden Arbeit stützt ein nachhaltiges Tempo und kontinuierliche Auslieferung: Weniger Dinge im Fluss bedeuten, dass jedes früher fertig wird und Feedback früher eintrifft. Eine praktische Gewohnheit ist, mit dem Team und den Stakeholdern ein Limit zu vereinbaren und Überschreitungen im regelmäßigen Verbesserungsgespräch zu überprüfen. Zu beachten ist, dass ein als Regel durchgesetztes, nicht besprochenes Limit durch Zerlegen oder Verstecken von Arbeit manipuliert wird.

### KI

KI-Unterstützung macht es leicht, mehr Arbeit parallel zu beginnen, denn ein Entwurf kostet wenig. Das kann die laufende Arbeit und die Warteschlangenlänge für die Menschen erhöhen, die prüfen und entscheiden müssen. Koppeln Sie jeden Anstieg begonnener Arbeit mit der Warteschlangenzeit beim Review und mit dem Lastverhältnis des prüfenden Teams. Zu beachten ist, dass mehr von der KI begonnene Arbeit womöglich aufgegeben wird; zählen Sie also verworfene Entwürfe ebenso wie fertige.

### Automatisierung

Lesen Sie Warteschlangenlänge und Ankunftsraten automatisch aus dem führenden System und setzen Sie Alarme auf Trends wie ein steigendes Lastverhältnis ebenso wie auf feste Schwellen. Automatisierung, die Arbeit verteilt, sollte an Fehlzuweisungen und an der Warteschlange gemessen werden, die sie bei Ausfall erzeugt. Zu beachten ist, dass eine Regel zur automatischen Zuweisung Arbeit still auf wenige Personen oder ein einziges Team konzentrieren kann.

### Analytik

Nutzen Sie das Gesetz von Little als Konsistenzprüfung zwischen laufender Arbeit, Durchsatz und Zykluszeit und behandeln Sie eine große Lücke als Daten- oder Definitionsproblem. Die Entscheidung, die dies untermauert, ist, wo Limits und Kapazität zu setzen sind. Zu beachten ist, dass das Gesetz ein stabiles System voraussetzt; wenden Sie es also nicht über einen Zeitraum mit einer großen Änderung der Ankünfte an.

## Branchenperspektive

**Startup.** Die Nachfrage ist ungleichmäßig, und die Versuchung ist, alles zu beginnen. Ein einfaches Board mit sichtbarem WIP-Limit und einer wöchentlichen Prüfung des ältesten Elements in Bearbeitung genügt. Halten Sie Spielraum für Produktionsprobleme, denn ein einziger Ausfall kann das ganze Team verbrauchen.

**Kleinunternehmen.** Eine oder zwei Personen bearbeiten oft Support, Projekte und Verwaltung, und das Postfach ist die Warteschlange. Trennen Sie geplante von reaktiver Arbeit, setzen Sie ein tägliches Limit für begonnene Aufgaben und sagen Sie Kunden die übliche Wartezeit für jede Art Anfrage.

**Großunternehmen.** Viele Teams teilen sich Stufen wie Change-Genehmigung, Sicherheitsprüfung und Testumgebungen, und die gemeinsamen Warteschlangen sind oft die längsten. Messen Sie die Warteschlangenzeit an gemeinsamen Stufen und veröffentlichen Sie sie, geben Sie jeder gemeinsamen Stufe einen Eigner und vermeiden Sie es, Auslastung als Ziel zu berichten. Werkzeuge zählen WIP womöglich in den Teams unterschiedlich, einigen Sie sich also vor der Verdichtung auf eine gemeinsame Grenze und ein gemeinsames Statusvokabular (siehe Thema 2.4, Kennzahlen für den Wertstrom).

**Behörden und öffentlicher Sektor.** Gesetzliche Fristen, Beschaffungsschritte und formale Genehmigungen erzeugen lange Warteschlangen, die Teams nicht kontrollieren. Trennen Sie die Zeit, die ein Team kontrolliert, von der Zeit, die auf andere Stellen gewartet wird, und berichten Sie beide. Wo Serviceziele in Gesetz oder Regulierung festgelegt sind, dokumentieren Sie die Uhrenregeln und alle Pausen und führen Sie die Prüfspur (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Das Motiv ist schnellere, vorhersagbarere Lieferung ohne zusätzliches Personal, denn Warten dominiert die verstrichene Zeit, und eine bescheidene Senkung des WIP oder einer langen Genehmigungswarteschlange verkürzt die Zykluszeit jedes folgenden Elements. Geplanter Spielraum lässt ein Team außerdem einen Major Incident auffangen, ohne Wochen anderer Arbeit zu verlieren.

Die Kosten sind bescheiden und überwiegend Menschen: Aufwand, Grenzen und Status zu definieren, aus vorhandenen Werkzeugdaten eine tägliche WIP-Momentaufnahme und einen Bericht zur Warteschlangenzeit zu bauen und ein kurzes wöchentliches Review abzuhalten. WIP zu begrenzen heißt auch, zu manchen Anfragen „noch nicht“ zu sagen, was die Zustimmung der Stakeholder braucht, und ungenutzte Kapazität ist ein scheinbarer Kostenpunkt, den Führungskräfte als Versicherung gegen Verzögerung verstehen müssen.

Der Ertrag sollte über Muster beschrieben werden, die die Organisation selbst messen kann, statt über geborgte Prozentsätze. Verfolgen Sie Median und 85. Perzentil der Zykluszeit vor und nach Limits, die Zahl der Elemente, die über eine vereinbarte Schwelle hinaus gealtert sind, die Überschreitungsrate samt Gründen und den Zeitanteil, der auf dringende Arbeit entfällt. Der Business Case ist am stärksten, wenn er die Warteschlangenzeit mit etwas verbindet, das das Unternehmen bereits spürt, etwa das Warten auf den Zugriff eines neuen Mitarbeiters, eine Änderung eines klinischen Systems oder eine Kundenkorrektur. Die Gesamtbetriebskosten werden von der Zeit der Menschen dominiert, die die Zahlen prüfen und darauf handeln, zählen Sie diese Zeit also gegen die Verzögerung, die sie beseitigt. Ein Team sollte seine eigene Baseline aufbauen, denn hier werden keine Benchmarkwerte zitiert.

## Anti-Muster und Fallstricke

- **100 Prozent Auslastung anstreben.** Es garantiert lange Wartezeiten und fragile Lieferung. Planen Sie ein Lastverhältnis mit Spielraum und überprüfen Sie es nach Störungen.
- **Nur die Spalte „in Bearbeitung“ begrenzen.** Arbeit staut sich dann in Warteschlangen außerhalb des Limits. Begrenzen Sie das System durchgängig und fügen Sie Stufenlimits dort hinzu, wo Warteschlangen wachsen.
- **Das WIP-Limit als durchzusetzende Regel behandeln.** Menschen verstecken Arbeit, um zu genügen. Nutzen Sie eine Überschreitung als Anstoß zu fragen, was blockiert ist, und protokollieren Sie den Grund.
- **Elemente in unbegrenzten Status parken.** Die Zählung bleibt niedrig, während Arbeit unsichtbar wartet. Beziehen Sie geparkte Status in eine sichtbare Zählung ein und überprüfen Sie ihr Alter.
- **Die Auslastung von Einzelpersonen messen.** Es belohnt Beschäftigtwirken und lädt zur Rangfolge ein. Messen Sie das Team oder den Ressourcenpool und veröffentlichen Sie nie eine Zahl je Person.
- **Die Ankunftsseite ignorieren.** Teams arbeiten an den Abgängen, während die Nachfrage weiter wächst. Verfolgen Sie Ankünfte, und übersteigen sie die Kapazität, treffen Sie eine ausdrückliche Entscheidung darüber, was angenommen wird.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definitionen und Grenzen | Jeder zählt WIP auf persönliche Weise | Einige Teams schreiben eine Grenze für ihr Board | Eine schriftliche Grenze und ein Statusvokabular, Wartezustände von Arbeitszuständen getrennt | Grenzänderungen protokolliert und die Prüfung nach Little monatlich durchgeführt | Grenzen mit Lieferanten und Partnerteams abgestimmt und überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| WIP-Limits und Spielraum | Keine Limits; alle beschäftigt | Informelle Limits auf einer Spalte | Systemweite und Stufenlimits, mit Überschreitungsprotokoll und einem erklärten Lastbereich | Limits werden im Rhythmus aus Zykluszeit- und Warteschlangenbelegen angepasst | Limits und Kapazität über Teams koordiniert, die Stufen teilen |
| Sichtbarkeit der Warteschlangen | Warten wird nur durch Beschwerden sichtbar | Warteschlangenlänge auf einigen Boards gezählt | Warteschlangenzeit-Perzentile je Stufe dem zuständigen Team gezeigt | Nettowachstum der Warteschlange mit Leitplanken im Trend und in finanzierter Arbeit bearbeitet | Warteschlangenzeit an gemeinsamen und externen Stufen offen an Kunden und Lieferanten berichtet |
| Nutzung in Entscheidungen | Kapazitätsanfragen werden mit Anekdoten verhandelt | Auslastung wird zitiert, um Personal zu rechtfertigen | Belege zu Warteschlange und Zykluszeit werden in der Planung genutzt | Abwägungen zwischen Nachfrage und Kapazität werden in Governance-Reviews mit Daten entschieden | Nachfrage wird gemeinsam mit Kunden anhand von Wartezeitverteilungen gestaltet |

## Checkliste

- [ ] Die Systemgrenze für WIP ist geschrieben, mit Start- und Endstatus und den Ausschlüssen.
- [ ] Wartezustände und Arbeitszustände sind getrennte Status im Workflow.
- [ ] Eine tägliche Momentaufnahme von WIP und Warteschlange wird erfasst und aufbewahrt.
- [ ] Die Warteschlangenzeit wird als Median und hohes Perzentil je Stufe berichtet.
- [ ] Ankünfte und Abgänge werden wöchentlich mit einem kumulativen Flussdiagramm dargestellt.
- [ ] Für das System und für jede Stufe mit wachsender Warteschlange besteht ein WIP-Limit.
- [ ] Limitüberschreitungen werden mit Grund protokolliert und wöchentlich überprüft.
- [ ] Eine Regel definiert beschleunigte Arbeit und deckelt die Zahl gleichzeitiger Elemente.
- [ ] Das Team-Lastverhältnis wird auf Teamebene geschätzt, nie je Person, mit angegebener Methode.
- [ ] Die Prüfung nach Little wird monatlich durchgeführt, und Abweichungen werden untersucht.
- [ ] Geparkte und blockierte Status werden gezählt, und ihr Alter wird überprüft.
- [ ] Jede Änderung an einer Grenze, einem Status oder einem Limit wird mit Datum und Grund protokolliert.

## KI-Prompts

**Grenze und Status hinter einer WIP-Zählung prüfen.**

```text
I want to define work in process for [team or service]. Our workflow statuses
are [list of statuses with a one-line meaning each], and these items are
excluded: [exclusions]. Identify ambiguities in which statuses count as in
process, which are waiting, and which are blocked. Suggest a boundary and a
cleaner status list, and say what the change would do to the WIP number. Do not
guess how our tool is configured and do not invent benchmark values. List your
assumptions and the questions I should answer.
```

**Eine Konsistenzprüfung nach Little durchführen.**

```text
Here is data for [team or service] over [period]: average WIP [value],
departures per day [value], and mean cycle time in days [value], using the
boundary [boundary description]. Compute the ratio of average WIP to departures
times cycle time, and explain what a mismatch could mean given this boundary,
such as items parked, items closed without being started, or an unstable period.
Suggest checks I can make in [tracker or ITSM tool]. Do not invent figures or
thresholds. List your assumptions.
```

**Ein erstes Experiment mit einem WIP-Limit planen.**

```text
Our team is [team size and roles], working on [type of work]. Current average WIP
is [value], with stages [list of stages], and the longest queue is [stage]. Draft
a time-boxed experiment to introduce a WIP limit: a hypothesis, the limit to try
and why, the measures to watch (including at least one guardrail), what counts as
an exception, and a review date. Do not state a universal correct limit or
benchmark values. List your assumptions and the risks.
```

**Den wahrscheinlichen Engpass aus Stufendaten finden.**

```text
For [team or service], here is queue time and WIP by stage over [period]: [table
of stage, median queue time, 85th percentile queue time, items waiting, and
capacity notes]. Rank the stages as candidates for the constraint, explain the
reasoning in plain language, and suggest one low-cost experiment for the top
candidate and one measure that would show it worked. Do not invent data or
benchmarks. List your assumptions and what additional data would change the
ranking.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um herauszufinden, welches Thema eine Fluss- oder Kapazitätsmessgröße definiert, die Sie hinzufügen, und die Leitplanke, die daneben stehen sollte.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine bearbeitete Kennzahl ihre Uhren, Grenze, ihren Manipulationsvektor und ihre Leitplanke nennt.

## Wichtigste Erkenntnisse

- Warten dominiert die verstrichene Zeit, messen Sie also WIP, Warteschlangenlänge und Warteschlangenzeit je Stufe und berichten Sie Mediane und hohe Perzentile.
- Das Gesetz von Little bindet durchschnittliches WIP, Durchsatz und Zykluszeit aneinander und ist damit ein schneller Test, ob Ihre Definitionen konsistent sind.
- Verzögerung steigt steil, wenn sich die Auslastung der vollen Kapazität nähert, planen Sie also Spielraum dort ein, wo die Nachfrage variabel ist.
- Begrenzen Sie WIP für das ganze System, behandeln Sie Überschreitungen als Anstoß für ein Gespräch und hüten Sie sich vor dem Umetikettieren von Arbeit, um unter dem Limit zu bleiben.
- Beobachten Sie Ankünfte und Abgänge, denn eine Warteschlange, die Woche für Woche wächst, braucht eine Entscheidung über Kapazität oder Nachfrage.
- Messen Sie Teams und Services, nie Einzelpersonen, und einigen Sie sich auf eine schriftliche Grenze, bevor Sie Zahlen vergleichen.

## Quellen und weiterführende Literatur

1. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
2. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
3. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
6. Hopp, W. J., and Spearman, M. L., *Factory Physics*, 3rd edition, Waveland Press, 2011.
7. Kleinrock, L., *Queueing Systems, Volume 1: Theory*, Wiley, 1975.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
10. Wikipedia, [Work in process](https://en.wikipedia.org/wiki/Work_in_process).
11. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
12. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
13. Wikipedia, [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula).
14. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
15. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
16. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
17. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
