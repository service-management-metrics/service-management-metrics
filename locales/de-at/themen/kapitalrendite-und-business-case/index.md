# Kapitalrendite und Business Case

**Ein Business Case ist eine Prognose. Schreiben Sie ihn also mit Spannen und genannten Annahmen, finanzieren Sie die Arbeit in Stufen, wenn Belege eintreffen, und prüfen Sie die Prognose gegen das, was geschah, damit der nächste Case ehrlicher ist als der letzte.**

## Überblick und Motivation

Zu verbessern, wie IT-Services geliefert und betrieben werden, kostet Geld und Aufmerksamkeit, und jeder Vorschlag konkurriert mit anderen. Eine neue Plattform, eine Personaländerung, ein Automatisierungsprogramm und eine Qualitätsinitiative versprechen alle eine bessere Zukunft. Führungskräfte brauchen einen Weg, sie zu vergleichen, und Teams einen Weg, für die Arbeit zu argumentieren, auf die es ankommt. Der Business Case ist das traditionelle Werkzeug, und die Kapitalrendite seine bekannteste Zahl.

Ein [Business Case](https://en.wikipedia.org/wiki/Business_case) ist eine Begründung für ein vorgeschlagenes Projekt oder Vorhaben, die meist das Problem, die Optionen, die Kosten, den Nutzen und die Risiken darlegt. Die [Kapitalrendite](https://en.wikipedia.org/wiki/Return_on_investment) (Return on Investment, ROI) vergleicht den Gewinn einer Investition mit ihren Kosten. Die [Gesamtbetriebskosten](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (Total Cost of Ownership, TCO) zählen alles, was ein Asset oder Service über sein Leben kostet, einschließlich Kauf, Betrieb, Support und Entsorgung. Die früheren Themen dieses Teils liefern die Eingaben: die Kosten von Assets, Software, Konfigurationsdatensätzen, Services und Cloud-Ressourcen (siehe Thema 7.5, Servicekosten und Stückökonomie, und Thema 7.6, Kennzahlen für FinOps und Cloud-Kosten), und das Nutzen-Thema gibt die Belege der Ergebnisse (siehe Thema 6.5, Wertrealisierung und Geschäftsergebnisse).

Zwei Spannungen machen Business Cases schwer gut zu machen.

- **Business Cases sind Prognosen, geschrieben von Menschen, die Genehmigung wollen.** Der Autor will oft, dass der Vorschlag Erfolg hat, und der Anreiz, Nutzen aufzublähen und Kosten zu beschneiden, ist stark. [Optimismus-Verzerrung](https://en.wikipedia.org/wiki/Optimism_bias) ist die Neigung, bessere Ergebnisse zu erwarten, als wahrscheinlich sind, und sie ist in der Projektplanung gut dokumentiert. Das Korrektiv ist die [Referenzklassen-Prognose](https://en.wikipedia.org/wiki/Reference_class_forecasting), die Schätzungen auf die tatsächlichen Ergebnisse ähnlicher früherer Projekte stützt statt auf eine Bottom-up-Geschichte. Ihre eigene Historie früherer Cases ist die beste Referenzklasse, die Sie haben.
- **Kontinuierliche Auslieferung verändert, was ein Business Case versprechen kann.** Der agile Ansatz geht davon aus, dass Anforderungen und Wert entdeckt werden, während die Arbeit voranschreitet. Ein ein Jahr im Voraus festgelegter Umfang, Preis und Nutzen steht dazu im Konflikt. Die agile Antwort ist, in Stufen zu finanzieren: ein kleiner erster Schritt zum Lernen, dann weitere Finanzierung, wenn Belege eintreffen. Das passt zum Ziel kontinuierlicher Auslieferung und kontinuierlicher Zusammenarbeit mit Stakeholdern, und es passt zu einer Finanzfunktion, die Kontrolle will. Es heißt auch, dass der Business Case ein lebendes Dokument ist, erneut betrachtet, während Hypothesen getestet werden (siehe Thema 6.5, Wertrealisierung und Geschäftsergebnisse).

Einige Ideen aus den Finanzen helfen. Der [Zeitwert des Geldes](https://en.wikipedia.org/wiki/Time_value_of_money) besagt, dass eine Währungseinheit heute mehr wert ist als eine später, sodass Nutzen in fernerer Zukunft weniger zählt. Der [Kapitalwert](https://en.wikipedia.org/wiki/Net_present_value) (Net Present Value, NPV) wandelt einen Strom künftiger Kosten und Nutzen mit einem Diskontsatz in einen einzigen Wert von heute um. Die [Amortisationszeit](https://en.wikipedia.org/wiki/Payback_period) ist die Zeit, den anfänglichen Aufwand zurückzugewinnen. Jede ist eine Zusammenfassung und verbirgt Annahmen, nennen Sie diese also. [Opportunitätskosten](https://en.wikipedia.org/wiki/Opportunity_cost) erinnern daran, dass die Kosten der Wahl einer Option der Wert der besten aufgegebenen Alternative sind. Eine [versunkene Kostenart](https://en.wikipedia.org/wiki/Sunk_cost) ist bereits ausgegebenes Geld, das sich nicht zurückholen lässt und die Entscheidung zum Weitermachen nicht treiben sollte.

Jede Zahl in einem Business Case lässt sich manipulieren, durch einen großzügigen Zeitraum, einen günstigen Diskontsatz oder schwer zu prüfenden Nutzen. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt für den Case selbst: Hängt die Genehmigung an einer Überschrift-ROI, lernen Autoren, sie zu erzeugen (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen). Die folgenden Kennzahlen enthalten daher eine Prüfung der Qualität früherer Prognosen.

## Leitprinzipien

- **Den Case als Prognose mit einer Spanne behandeln.** Zeigen Sie niedrige, erwartete und hohe Ergebnisse und nennen Sie die Annahmen hinter jedem.
- **Die vollen Kosten zählen.** Beziehen Sie Betrieb, Support, Schulung, Change-Aufwand und Entsorgung ebenso ein wie den Bau.
- **Ausdrücklich zu Nutzen und seinen Belegen sein.** Trennen Sie Kosteneinsparung, Kostenvermeidung, Umsatz und Risikominderung und sagen Sie, wie jedes gemessen wird.
- **In Stufen finanzieren.** Geben Sie Geld frei, wenn Hypothesen getestet sind und sich das Bild verbessert.
- **Mit den Alternativen vergleichen, einschließlich Nichtstun.** Die Kosten des Verharrens gehören zum Case.
- **Aus der eigenen Historie lernen.** Prüfen Sie Prognosen gegen Ergebnisse und passen Sie an.
- **Versunkene Kosten ignorieren.** Entscheiden Sie nach dem, was vor Ihnen liegt.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kapitalrendite | Nettogewinn relativ zu den Kosten über einen genannten Zeitraum | (gesamter Nutzen minus gesamte Kosten) / gesamte Kosten über den Zeitraum | Prozent | Business Case, Hauptbuch, Nutzenregister | Service-Finanzmanagement; kontinuierliche Verbesserung | Ergebnis-Review gegen die Finanzierung | Bei der Entscheidung und bei jedem Review |
| Gesamtbetriebskosten | Lebenszykluskosten eines Services oder Assets über einen genannten Zeitraum | Kosten für Anschaffung + Betrieb + Support + Change + Schulung + Entsorgung über den Zeitraum | Währung | Hauptbuch, Kostenmodelle, Lieferantenverträge | Service-Finanzmanagement; IT-Asset-Management | Kosten eines dauerhaften Teams und seiner Plattformen | Bei der Entscheidung und jährlich |
| Amortisationszeit | Zeit, bis der kumulierte Nettonutzen der anfänglichen Investition entspricht | Zeitpunkt, zu dem kumulierter Nutzen minus kumulierte Kosten null erreicht | Monate | Zahlungsströme des Business Cases | Service-Finanzmanagement | Zeit bis zum ersten Wert, erweitert auf Kostendeckung | Bei der Entscheidung und bei jedem Review |
| Kapitalwert | Barwert des erwarteten Nutzens minus Barwert der Kosten, bei einem genannten Diskontsatz | Summe über die Perioden von (Nutzen minus Kosten) / (1 + Diskontsatz) hoch Periode | Währung | Zahlungsströme des Business Cases, Finanzrichtlinie zum Diskontsatz | Service-Finanzmanagement | Wertbasierte Priorisierung | Bei der Entscheidung |
| Genauigkeit der Kostenschätzung | Verhältnis von tatsächlichen zu geschätzten Kosten bei abgeschlossenen Initiativen | tatsächliche Kosten / bei Genehmigung geschätzte Kosten, je Initiative und als Verteilung | Verhältnis | Business-Case-Datensätze und Hauptbuch | Service-Finanzmanagement; kontinuierliche Verbesserung | Prognosegenauigkeit | Vierteljährlich |
| Genauigkeit der Nutzenschätzung | Verhältnis von realisiertem zu erwartetem Nutzen bei abgeschlossenen Initiativen, nach den Belegregeln für Nutzen | realisierter Nutzen / bei Genehmigung erwarteter Nutzen, je Initiative und als Verteilung | Verhältnis | Business-Case-Datensätze und Nutzenregister | Kontinuierliche Verbesserung; Governance des Service-Wertschöpfungssystems | Ergebnis-Review mit Stakeholdern | Vierteljährlich |
| Belegbasierte Stoppquote | Anteil finanzierter Initiativen, die an einem Stage Gate gestoppt oder umgestaltet wurden, weil Belege das Bild veränderten | auf Belege hin an einem Gate gestoppte oder umgestaltete Initiativen / Initiativen, die ein Gate erreichen | Prozent | Entscheidungsprotokoll der Stage Gates | Kontinuierliche Verbesserung; Portfolio-Governance | Lernen aus ausgelieferter Arbeit | Vierteljährlich |

Nennen Sie für jede Zahl den Zeitraum, den Diskontsatz und was als Kosten oder Nutzen zählt, und halten Sie sie mit dem Case fest. ROI und Kapitalwert hängen stark davon ab, zwei Cases sind also nur vergleichbar, wenn sie dieselben Regeln nutzen. Kosten- und Nutzengenauigkeit werden als Verteilungen gezeigt, zum Beispiel das mediane Verhältnis und die Streuung über frühere Initiativen, nicht als einzelner Durchschnitt. Eine niedrige belegbasierte Stoppquote kann gute Auswahl bedeuten oder Gates, die nie Nein sagen, lesen Sie sie also zusammen mit den Genauigkeitskennzahlen.

## Empfehlungen

### Den Case ehrlich schreiben

**1. Beginnen Sie mit dem Problem und den Optionen.** Beschreiben Sie das Problem, wer es erlebt und was es jetzt kostet. Listen Sie mindestens drei Optionen: Nichtstun, einen minimalen Schritt und die vorgeschlagene Änderung, plus jede ernsthafte Alternative. „Nichtstun“ hat Kosten, etwa fortdauernde Incidents oder wachsendes Risiko, und sie einzubeziehen macht den Vergleich fair.

**2. Zählen Sie die Gesamtbetriebskosten über das Leben der Änderung.** Beziehen Sie Bau, Lizenzen, Hosting, Betrieb, Support, Schulung, Migration, die Zeit der Menschen, die es nutzen werden, und Entsorgung ein. Kosten, die nach dem Start anfallen, werden am häufigsten ausgelassen. Nutzen Sie einen Zeitraum, der zur Lebensdauer des Nutzens passt, und sagen Sie, welcher es ist.

**3. Beschreiben Sie jeden Nutzen und wie er gemessen wird.** Trennen Sie die Arten. Kosteneinsparungen verringern tatsächliche Ausgaben. Kostenvermeidung verhindert Ausgaben, die sonst angefallen wären, und ist schwerer zu verifizieren. Umsatznutzen hängt vom Marktverhalten ab. Risikominderung senkt Wahrscheinlichkeit oder Auswirkung eines Verlusts und lässt sich am besten anhand eines bestimmten Szenarios beschreiben. Nennen Sie für jeden den Indikator, die Baseline und den Eigner (siehe Thema 6.5, Wertrealisierung und Geschäftsergebnisse).

**4. Geben Sie Spannen an und sagen Sie, was sie treibt.** Geben Sie für Kosten und Nutzen eine niedrige, erwartete und hohe Schätzung an, mit den Hauptannahmen. Eine [Sensitivitätsanalyse](https://en.wikipedia.org/wiki/Sensitivity_analysis) zeigt, wie sich das Ergebnis ändert, wenn sich eine Annahme ändert, und welche Annahmen am meisten zählen. Funktioniert der Case nur, wenn jede Annahme großzügig ist, sagen Sie es. Simulation kann Spannen kombinieren, kann aber auch falsche Sicherheit geben, wenn Eingaben Vermutungen sind.

### Für Optimismus korrigieren

**5. Nutzen Sie Ihre eigene Historie als Referenzklasse.** Schauen Sie auf die tatsächlichen Kosten- und Nutzenergebnisse Ihrer früheren ähnlichen Initiativen und vergleichen Sie sie mit dem, was prognostiziert wurde. Haben frühere Initiativen im Durchschnitt 30 Prozent mehr gekostet als geschätzt, wird eine neue Schätzung, die das ignoriert, den Fehler wahrscheinlich wiederholen. Passen Sie an oder zeigen Sie zumindest die Anpassung. Die Genauigkeitskennzahlen für Kosten und Nutzen oben bauen diese Aufzeichnung auf.

**6. Lassen Sie jemanden außerhalb des Teams den Case überprüfen.** Ein Kollege aus den Finanzen oder einem anderen Team, nicht am Ergebnis beteiligt, liest den Case auf fehlende Kosten, großzügigen Nutzen und ungetestete Annahmen. Machen Sie das Review zur Routine und konstruktiv. Ein Case, der es übersteht, ist stärker.

**7. Trennen Sie, wo möglich, die Menschen, die schätzen, von denen, die befürworten.** Lieferteams sind gut im Schätzen von Aufwand, und Sponsoren gut im Beurteilen von Wert. Will dieselbe Person Genehmigung, driften die Schätzungen. Halten Sie fest, wer welche Zahlen erzeugte.

### In Stufen finanzieren

**8. Geben Sie Finanzierung in Schritten frei, die an Belege gebunden sind.** Finanzieren Sie eine kleine erste Stufe, um die riskanteste Annahme zu testen: ein dünnes Stück bauen, einen Pilot fahren oder die Baseline messen. Definieren Sie im Voraus, welcher Beleg die nächste Stufe rechtfertigen würde, was Sie die Arbeit umgestalten ließe und was Sie stoppen ließe. Das ist der agile Ansatz zum Risiko, auf Geld angewandt, und er deckelt die Kosten, sich zu irren.

**9. Entscheiden Sie auf jeder Stufe nach dem, was vor Ihnen liegt.** Bereits ausgegebenes Geld ist versunkene Kosten, und es sollte nicht darauf einwirken, ob man weitermacht. Fragen Sie, ob die verbleibenden Kosten durch den verbleibenden erwarteten Nutzen gerechtfertigt sind, angesichts dessen, was Sie gelernt haben. Geben Sie Teams die Erlaubnis zu stoppen und behandeln Sie ein gut belegtes Stoppen als gutes Ergebnis.

**10. Halten Sie Stakeholder eingebunden.** Überprüfen Sie den Case auf jeder Stufe mit dem Sponsor und dem Nutzeneigner. Zusammenarbeit mit Stakeholdern durchgehend ist ein agiles Kernziel, und sie verhindert, dass der Case zu einem Dokument wird, das nach der Genehmigung niemand liest.

### Prüfen und lernen

**11. Überprüfen Sie das Ergebnis gegen den Case.** Vergleichen Sie an den vereinbarten Review-Punkten tatsächliche Kosten und realisierten Nutzen mit der Prognose. Erfassen Sie die Verhältnisse, die Gründe der Unterschiede und was Sie im nächsten Case ändern würden. Machen Sie das Review schuldfrei und sachlich, denn ehrliche Berichterstattung hängt davon ab.

**12. Berichten Sie die Verteilung der Genauigkeit an Entscheider.** Zeigen Sie über frühere Initiativen, wie Prognosen im Vergleich zu Ergebnissen standen. Ein Portfolio, in dem Nutzen regelmäßig um eine ähnliche Marge hinter dem Erwarteten zurückbleibt, sagt Führungskräften, wie sehr sie einem neuen Case trauen sollten, und gibt Autoren einen Grund, ehrlich zu sein. Koppeln Sie es mit der belegbasierten Stoppquote, um zu sehen, ob die Gates funktionieren.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Kapitalrendite | Einen langen Zeitraum wählen oder weiche Nutzen zählen; Betriebskosten auslassen | Feste Regeln für Zeitraum und Kostenumfang; Belegqualität des Nutzens; unabhängiges Review |
| Gesamtbetriebskosten | Support, Schulung, Change-Aufwand oder Entsorgung auslassen; optimistische Volumen nutzen | Checkliste der Kostenkategorien; mit tatsächlichen TCO ähnlicher früherer Arbeit vergleichen |
| Amortisationszeit | Den Start spät ansetzen; nicht realisierten Nutzen zählen | Uhrdefinition fest; mit der Genauigkeit realisierten Nutzens vergleichen |
| Kapitalwert | Einen niedrigen Diskontsatz wählen; den Horizont ausdehnen | Diskontsatz per Finanzrichtlinie gesetzt; Sensitivitätsanalyse gezeigt |
| Genauigkeit der Kostenschätzung | Die Baseline-Schätzung nachträglich überarbeiten; Überschreitungen als Umfangsänderungen ausschließen | Schätzung bei Genehmigung eingefroren; Umfangsänderungen mit Genehmigung protokollieren; Gesamtkosten bis zum Abschluss zeigen |
| Genauigkeit der Nutzenschätzung | Nutzen zählen, die nicht gemessen wurden; den Nutzen umdefinieren | Regeln des Nutzenregisters; Eigner außerhalb des Lieferteams bestätigt |
| Belegbasierte Stoppquote | Geringwertige Arbeit stoppen, um die Quote aufzublähen; nie etwas stoppen | Mit Genauigkeitskennzahlen lesen; Gründe für Stopps und Fortführungen überprüfen |

Ein gesunder Befund ist ein Portfolio mit Erfolgsbilanz: Prognosen, die auf bekannte Weise etwas optimistisch sind, Cases, die Spannen und Sensitivität enthalten, und Gates, die gelegentlich Arbeit auf Belege hin stoppen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Großer Business Case im Voraus | Klare Verpflichtung und Kontrolle | Legt Annahmen fest; lädt zu Optimismus ein |
| Gestufte Finanzierung | Begrenzt die Kosten, sich zu irren; lernt früh | Braucht Disziplin an Gates; weniger Sicherheit für die Planung |
| Einzelne ROI-Zahl | Einfach zu vergleichen | Verbirgt Annahmen; leicht zu manipulieren |
| Spanne mit Sensitivität | Ehrlich zur Unsicherheit | Schwerer zu vergleichen; kann vage wirken |
| Qualitativer Case | Erfasst strategische und Risikogründe | Schwer zu vergleichen und zu verifizieren |
| Quantitativer Case | Vergleichbar und testbar | Falsche Genauigkeit; lässt aus, was sich nicht zählen lässt |
| Externe Referenzklasse | Korrigiert Optimismus | Passt womöglich nicht zu Ihrem Kontext |
| Referenzklasse aus eigener Historie | Passt zu Ihrem Kontext | Braucht eine Aufzeichnung; kleine Stichproben |

Die Antwort in Worten ist, gestufte Finanzierung, Spannen und Ihre eigene Historie zu nutzen, zusammen mit einer kurzen qualitativen Darstellung dessen, was die Zahlen verpassen. Nutzen Sie ROI, Kapitalwert und Amortisation als Zusammenfassungen, nicht als Urteile.

## Fragen für die Diskussion im Team

**1. Wie falsch lagen unsere letzten fünf Business Cases, und in welcher Richtung?**
Sammeln Sie die prognostizierten und tatsächlichen Kosten und Nutzen jüngerer Initiativen. Berechnen Sie die Verhältnisse. Schauen Sie auf die Streuung und ob die Fehler in eine Richtung neigen. Die Moderation sollte im ersten Durchgang Erklärungen widerstehen und nur das Muster festhalten. Besprechen Sie dann, was es für den nächsten Case bedeutet.

**2. Was ist die riskanteste Annahme in unserem aktuellen Vorschlag, und wie billig könnten wir sie testen?**
Listen Sie die Annahmen auf und ordnen Sie sie danach, wie sehr der Case von jeder abhängt und wie unsicher wir sind. Entwerfen Sie für die oberste einen kleinen Test. Die Antwort formt die erste Finanzierungsstufe.

**3. Was kostet Nichtstun, und haben wir es in den Case aufgenommen?**
Beschreiben Sie den wahrscheinlichen Weg, wenn der Vorschlag nicht genehmigt wird: fortdauernde Incident-Kosten, steigende Wartung, wachsendes Risiko. Schätzen Sie ihn mit einer Spanne. Prüfen Sie, dass der Case fair damit vergleicht.

**4. Welche Kosten tauchen in unseren Projekten immer spät auf?**
Denken Sie an Betrieb, Schulung, Migration und Außerbetriebnahme. Prüfen Sie den Case auf jedes. Fügen Sie der Vorlage eine Standardcheckliste der Kostenkategorien hinzu.

**5. Wer außerhalb des Teams hat unsere Zahlen hinterfragt, und was sagte er?**
Überprüfen Sie das letzte unabhängige Review. Gab es keines, entscheiden Sie, wer das nächste durchführen sollte. Das Gespräch sollte klarmachen, dass Review ein Dienst am Case ist, kein Angriff.

**6. Wann haben wir zuletzt etwas gestoppt, weil sich die Belege änderten, und wie fühlte es sich an?**
Erinnern Sie sich an eine gestoppte oder umgestaltete Initiative. Besprechen Sie, wie sie aufgenommen wurde und was sie für das Vertrauen tat. Einigen Sie sich, wie sich das nächste Stoppen wie Lernen anfühlen lässt.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams liefern Kostenschätzungen und lernen aus den Stufen der Finanzierung. Sie sollten in Spannen schätzen, tatsächliche Kosten erfassen und sich melden, wenn Annahmen brechen. Gestufte Finanzierung lässt sie sich darauf konzentrieren zu lernen, was am meisten zählt, und ein auf Belege gestütztes Stoppen sollte als Erfolg zählen.

### Service- und Betriebsteams

Betriebsteams besitzen einen großen Teil der Kosten nach dem Start und werden im Case oft ausgelassen. Sie sollten nach den laufenden Kosten, dem Supportaufwand und den Risiken gefragt werden und die Nutzen prüfen, die von ihrer Arbeit abhängen, etwa weniger Incidents. Sie können Aussagen über Einsparungen im Betrieb mit ihren eigenen Daten verifizieren.

### Führung und Governance

Führungskräfte entscheiden, was finanziert wird, und setzen das Klima für Ehrlichkeit. Sie sollten Spannen und Annahmen verlangen, die Erfolgsbilanz der Prognosen überprüfen, in Stufen finanzieren und ein Stoppen als normales Ergebnis akzeptieren. Die Governance sollte für große Cases ein unabhängiges Review und eine Prüfung nach der Umsetzung verlangen und auf das Portfolio der Ergebnisse schauen.

### Kunden und Nutzer

Nutzer und Geschäftseigner tragen die Nutzen und die Störung. Sie sollten Teil des Cases sein, helfen, das Problem und den Nutzen zu definieren, und erfahren, was entschieden wurde und warum. Ihr Erlebnis nach der Lieferung ist der beste Test, ob der Case richtig lag.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Gruppe einer Gesundheitsbehörde einer Provinz schlägt ein Programm vor, routinemäßige Zugriffsanfragen zu automatisieren und die manuelle Bearbeitung zu verringern. Die Zahlen unten sind illustrativ.

Der erste Entwurf des Vorschlags behauptet über fünf Jahre eine ROI von 240 Prozent, beruhend auf 18.000 Anfragen im Jahr, durchschnittlichen manuellen Bearbeitungskosten und voller Automatisierung von 80 Prozent der Anfragen. Die Finanzpartnerin schlägt vor, die eigene Historie der Gruppe anzuwenden. Sie holt acht frühere Initiativen: Die tatsächlichen Kosten lagen im Median beim 1,35-Fachen der Schätzung, mit einer Spanne von 1,0 bis 1,9, und der realisierte Nutzen lag im Median bei 0,6 des erwarteten Nutzens. Die Gruppe findet auch, dass die Zahl für das Anfragevolumen aus einem einzigen geschäftigen Jahr stammte und die Kostenschätzung Schulung und die Zeit des Personals ausließ, das Ausnahmen prüft.

Das Team schreibt den Case mit Spannen neu. Mit der Kostenhistorie steigen die erwarteten Kosten um ein Drittel. Mit der Nutzenhistorie sinkt der erwartete Nutzen um etwa die Hälfte. Der überarbeitete Case zeigt eine ROI in einer Spanne von leicht negativ bis etwa 70 Prozent, eine Amortisationszeit zwischen 20 und 40 Monaten und einen Kapitalwert, der im mittleren und erwarteten Fall beim Diskontsatz der Finanzrichtlinie positiv und im niedrigen Fall negativ ist. Die Sensitivitätsanalyse zeigt, dass der Anteil der automatisierbaren Anfragen am meisten zählt. Der Vorschlag wird in Stufen umgestaltet. Die erste Stufe automatisiert die drei häufigsten Anfragetypen, mit einem Budget von etwa einem Fünftel des Ganzen, um den Automatisierungsanteil zu testen und die Baseline der Bearbeitungszeit zu messen. Die Kriterien für die zweite Stufe sind aufgeschrieben: mindestens 50 Prozent dieser Anfragetypen vollautomatisch und die Bearbeitungszeit je Anfrage um einen genannten Betrag verringert, vom Nutzeneigner bestätigt.

Nach der ersten Stufe sind 58 Prozent der drei Anfragetypen automatisiert, und die Ausnahmen dauern länger als erwartet. Das Team gestaltet die zweite Stufe so um, dass zuerst die Ausnahmebehandlung verbessert wird, bevor auf weitere Typen ausgeweitet wird. Der Vorstand der Behörde fragt, warum die ROI-Zahl gesunken ist. Die Direktorin erklärt, dass die frühere Zahl volle Automatisierung und keine Historie von Überschreitungen annahm und die neue Spanne ehrlicher ist. Die Entscheidung wird festgehalten. Die belegbasierte Umgestaltung der zweiten Stufe wird protokolliert, und die Tabellen zur Kosten- und Nutzengenauigkeit des Portfolios werden aktualisiert.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Finanzieren Sie Arbeit in Stufen, wenn Belege eintreffen, und prüfen Sie die Prognose nach dem Release mit Stakeholdern. Zu beachten ist, dass ein einzelner großer Business Case zu optimistischen Annahmen einlädt.

### KI

KI-Business-Cases stützen sich oft auf Produktivitätsbehauptungen, erfassen Sie also Baseline, gemessene Veränderung und Qualitätseffekte und vergleichen Sie Prognose mit Ergebnis. Zu beachten ist, dass Aussagen von KI-Anbietern sich womöglich nicht auf Ihren Kontext übertragen; testen Sie also mit einem Pilot, bevor Sie skalieren.

### Automatisierung

Automatisieren Sie die Erfassung von Kosten- und Nutzendaten, wo sie existieren, und messen Sie den Business-Case-Prozess an der Schätzgenauigkeit. Zu beachten ist, dass Automatisierungsnutzen oft als eingesparte Stunden behauptet werden, die nicht zu Geld werden, wenn die Stunden nicht genutzt werden.

### Analytik

Zeigen Sie Spannen und Annahmen und verfolgen Sie die Schätzgenauigkeit über die Zeit. Die Entscheidung, die dies untermauert, ist, ob fortzufahren, zu ändern oder zu stoppen ist. Zu beachten ist, dass die Kapitalrendite von Annahmen abhängt; zeigen Sie sie also neben der Zahl.

## Branchenperspektive

**Startup.** Ressourcen sind knapp, und Lerngeschwindigkeit zählt. Nutzen Sie einen einseitigen Case mit der riskantesten Annahme und einem billigen Test, finanzieren Sie in kleinen Schritten und vermeiden Sie aufwendige Finanzmodelle. Die Reichweite (Runway), nicht der Kapitalwert, ist oft die bindende Beschränkung.

**Kleinunternehmen.** Der Inhaber ist der Sponsor und die Finanzfunktion. Konzentrieren Sie sich auf Amortisation und Cashflow, beziehen Sie die Zeit des Personals ein und vergleichen Sie mit den Optionen Nichtstun und Kaufen. Hüten Sie sich vor ROI-Rechnern der Anbieter, die tendenziell großzügig sind.

**Großunternehmen.** Portfolio-Governance, Finanzrichtlinien zu Diskontsätzen und viele konkurrierende Vorschläge machen Konsistenz wichtig. Nutzen Sie eine Standardvorlage mit erforderlichen Kostenkategorien, unabhängiges Review für große Cases und ein Review nach der Umsetzung. Führen Sie eine Aufzeichnung der Prognosegenauigkeit nach Sponsor und nach Art der Initiative als Portfoliowerkzeug, nicht als Rangliste von Menschen.

**Behörden und öffentlicher Sektor.** Öffentliche Stellen folgen oft förmlichen Bewertungsleitlinien wie dem britischen Green Book, das darlegt, wie Optionen zu bewerten sind, wie mit Optimismus-Verzerrung umzugehen ist und wie Wirtschaftlichkeit einschließlich nichtfinanzieller Nutzen zu betrachten ist. Nutzen können sozial und schwer zu monetarisieren sein, und Transparenz und Prüfung zählen. Nutzen Sie die Leitlinien, die für Sie gelten, dokumentieren Sie Annahmen und erfassen Sie die Belege für Nutzen (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Dieses Thema handelt selbst vom Business Case, der Punkt sind also die Kosten, ihn gut zu machen. Einen sorgfältigen Case zu schreiben dauert Tage, nicht Stunden, und unabhängiges Review dauert mehr. Kosten- und Nutzengenauigkeit zu verfolgen verlangt eine einfache Aufzeichnung von Prognose und Ergebnis jeder Initiative, die vielen Organisationen fehlt. Gestufte Finanzierung fügt Governance-Meetings hinzu.

Der Ertrag ist bessere Verteilung knappen Geldes und weniger große Fehlschläge. Ehrliche Cases verringern die Überraschungen, die optimistischen folgen. Eine Erfolgsbilanz lässt Führungskräfte neue Cases angemessen abzinsen, was das ganze Portfolio verlässlicher macht. Bauen Sie das Argument aus Ihrer eigenen Historie: die Verhältnisse von tatsächlichen zu geschätzten Kosten und Nutzen, das Geld, das für später aufgegebene Initiativen ausgegeben wurde, und die Kosten des Reviews im Vergleich zu den Überschreitungen, die es verhinderte. Vermeiden Sie, Studien zu Misserfolgsquoten von Projekten zu zitieren, wenn Sie Methode und Relevanz für Ihre Art Arbeit nicht zurückverfolgen können.

## Anti-Muster und Fallstricke

- **Eine einzelne ROI-Zahl als Tatsache präsentiert.** Sie verbirgt Annahmen. Zeigen Sie Spannen und Sensitivität.
- **Betriebskosten auslassen.** Der Bau ist ein Bruchteil der Lebenskosten. Zählen Sie das ganze Leben.
- **Weiche Nutzen als harte zählen.** Kostenvermeidung und Produktivitätsbehauptungen brauchen Belege. Kennzeichnen und testen Sie sie.
- **Nur von unten nach oben prognostizieren.** Es wiederholt Optimismus. Vergleichen Sie mit Ihrer eigenen Historie.
- **Alle Finanzierung im Voraus.** Sie legt Vermutungen fest. Finanzieren Sie in Stufen mit Beleg-Gates.
- **Wegen bereits ausgegebenen Geldes weitermachen.** Entscheiden Sie nach dem, was vor Ihnen liegt.
- **Die eigenen Hausaufgaben benoten.** Lassen Sie einen unabhängigen Leser Kosten und Nutzen überprüfen.
- **Den Case nie wieder ansehen.** Ohne Ergebnis-Reviews verbessert sich nichts. Prüfen Sie Prognosen gegen Ergebnisse.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Den Case schreiben | Informeller Pitch mit Überschriftzahl | Vorlage mit Kosten und Nutzen | Standardvorlage mit TCO-Checkliste, Spannen und Sensitivität | Anpassung aus eigener Historie angewandt; unabhängiges Review | Cases gemeinsam mit Geschäftseignern und Finanzen entwickelt; geteilte Annahmen über das Portfolio |
| Finanzierung | Alles im Voraus | Meilensteine | Gestufte Finanzierung mit Belegkriterien | Gates gestalten Arbeit routinemäßig auf Belege hin um oder stoppen sie | Portfolio-Finanzierung wechselt zwischen Initiativen anhand von Belegen |
| Lernen | Keine Nachverfolgung | Gelegentliches Review | Review nach der Umsetzung gegen den Case | Kosten- und Nutzengenauigkeit als Verteilungen verfolgt und in neuen Cases genutzt | Lernen in der Organisation und mit Partnern geteilt; Methode verbessert sich |

## Checkliste

- [ ] Der Case listet Optionen auf, einschließlich Nichtstun.
- [ ] Die Gesamtbetriebskosten decken Bau, Betrieb, Support, Schulung, Change und Entsorgung ab.
- [ ] Jeder Nutzen hat eine Art, einen Indikator, eine Baseline und einen Eigner.
- [ ] Kosten und Nutzen sind als Spannen mit genannten Treibern angegeben.
- [ ] Eine Sensitivitätsanalyse zeigt, welche Annahmen am meisten zählen.
- [ ] Schätzungen sind mit Ihrer eigenen Historie ähnlicher Initiativen verglichen.
- [ ] Ein unabhängiger Reviewer hat den Case gelesen.
- [ ] Die Finanzierung ist in Stufen gegliedert, mit Belegkriterien zum Fortfahren, Umgestalten oder Stoppen.
- [ ] Ergebnisse werden an vereinbarten Daten gegen den Case überprüft.
- [ ] Kosten- und Nutzengenauigkeit über frühere Initiativen werden Entscheidern berichtet.

## KI-Prompts

**Einen Business Case einem Stresstest unterziehen.**

```text
Here is a summary of our business case for [initiative]: costs [list with
ranges], benefits [list with types and ranges], period [years], discount rate
[rate set by finance], and assumptions [list]. Identify missing cost
categories, benefits that need stronger evidence, assumptions that dominate the
result, and optimism risks. Suggest a sensitivity analysis and a staged
funding structure. Do not invent figures. List your assumptions and questions
I should answer.
```

**Aus unserer Historie eine Referenzklasse bauen.**

```text
We have these past initiatives with forecast and actual cost and benefit:
[paste a table]. Calculate the ratios of actual to forecast, describe the
median and spread, comment on any pattern by type of initiative, and suggest
how to use this when estimating a new initiative. Warn me where the sample is
too small to rely on. Do not use outside benchmarks. List your assumptions.
```

**Stage Gates entwerfen.**

```text
For [initiative], propose three funding stages. For each, state the riskiest
assumption to test, the evidence that would justify moving on, the evidence
that would make us reshape the work, and the evidence that would make us stop.
Keep each stage small and cheap. Do not assume any particular delivery method.
List your assumptions and decisions that need leadership input.
```

**Ein Review nach der Umsetzung schreiben.**

```text
Draft a one-page post-implementation review for [initiative]. Inputs: the
original case [summary], actual cost [figures], realized benefit and evidence
[summary], and what changed along the way [list]. Include cost and benefit
ratios, reasons for differences, what we would change in the next case, and
questions for the benefit owner. Keep the tone factual and blameless. List your
assumptions and any claim that needs checking.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Business-Case- oder ROI-Kennzahl zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Finanzkennzahl Zeitraum, Annahmen, Manipulationsvektor und Leitplanke nennt.

## Wichtigste Erkenntnisse

- Ein Business Case ist eine Prognose: Zeigen Sie Spannen, Annahmen und Sensitivität.
- Zählen Sie die Gesamtbetriebskosten über das Leben der Änderung und vergleichen Sie mit Nichtstun.
- Korrigieren Sie für Optimismus anhand Ihrer eigenen Historie von Prognosen und Ergebnissen.
- Finanzieren Sie in Stufen, entscheiden Sie nach dem, was vor Ihnen liegt, und behandeln Sie ein belegbasiertes Stoppen als Erfolg.
- Überprüfen Sie Ergebnisse gegen den Case und berichten Sie die Genauigkeit an Entscheider.
- Nutzen Sie ROI, Kapitalwert und Amortisation als Zusammenfassungen mit genannten Regeln, nicht als Urteile.

## Quellen und weiterführende Literatur

1. HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, United Kingdom, latest edition.
2. Flyvbjerg, B., "From Nobel Prize to project management: Getting risks right," *Project Management Journal*, 37(3), 2006.
3. Kahneman, D., and Lovallo, D., "Timid choices and bold forecasts: A cognitive perspective on risk taking," *Management Science*, 39(1), 1993.
4. Brealey, R. A., Myers, S. C., and Allen, F., *Principles of Corporate Finance*, McGraw-Hill (latest edition).
5. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
6. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Business case](https://en.wikipedia.org/wiki/Business_case).
9. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
10. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
11. Wikipedia, [Optimism bias](https://en.wikipedia.org/wiki/Optimism_bias).
12. Wikipedia, [Reference class forecasting](https://en.wikipedia.org/wiki/Reference_class_forecasting).
13. Wikipedia, [Time value of money](https://en.wikipedia.org/wiki/Time_value_of_money).
14. Wikipedia, [Net present value](https://en.wikipedia.org/wiki/Net_present_value).
15. Wikipedia, [Payback period](https://en.wikipedia.org/wiki/Payback_period).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Sunk cost](https://en.wikipedia.org/wiki/Sunk_cost).
18. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
19. Wikipedia, [Sensitivity analysis](https://en.wikipedia.org/wiki/Sensitivity_analysis).
