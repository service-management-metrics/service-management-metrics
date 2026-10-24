# Ein Dashboard für Servicekennzahlen entwerfen

**Ein gutes Dashboard beantwortet wenige Fragen, die ein benanntes Publikum tatsächlich stellt, zeigt jede Zahl mit Trend und Kontext und wird von den Menschen gebaut, die es nutzen werden.**

## Überblick und Motivation

Ein [Dashboard](https://en.wikipedia.org/wiki/Dashboard_(business)) ist eine visuelle Darstellung der wichtigsten Informationen, die zum Erreichen eines oder mehrerer Ziele nötig sind, so angeordnet, dass sie auf einen Blick überwacht werden können. In der Praxis verfehlen die meisten Dashboards in Serviceorganisationen diese Definition. Sie beginnen als Weg, eine echte Frage zu beantworten, wachsen dann durch Anlagerung, bis sie alles zeigen, was das Werkzeug zeichnen kann. Niemand besitzt sie, niemand ist sicher, was die Zahlen bedeuten, und der Bildschirm an der Wand wird ignoriert.

Der Zweck eines Dashboards für Servicekennzahlen ist, Menschen bei Entscheidungen zu helfen und gute Gespräche anzustoßen. Ein Team nutzt es, um zu bemerken, dass seine Arbeit länger wartet als früher, und zu fragen warum. Ein Serviceeigner nutzt es, um zu sehen, dass ein Service nahe am Rand seines Zuverlässigkeitsziels ist. Eine Führungskraft nutzt es, um zu sehen, ob eine Investition in einem Bereich das erhoffte Ergebnis erzeugt. Eine Anzeige, die nichts davon leistet, ist Dekoration, und Dekoration kostet Geld im Bau und Aufmerksamkeit im Ignorieren.

ITIL rahmt das als Frage von Information und Kommunikation: die richtige Information, für die richtigen Menschen, in nutzbarer Form, zur rechten Zeit. Die agilen Ziele weisen auf dieselben Entwurfsprinzipien. Kontinuierliche Einbeziehung von Stakeholdern heißt, dass das Publikum die Sicht mitentwirft und weiter hilft, während sich Fragen ändern. Kontinuierliche Verbesserung heißt, dass das Dashboard selbst überprüft und gekürzt wird. Fortlaufende Weiterentwicklung heißt, dass sich die Menge der Kennzahlen ändert, wenn sich Services und Ziele ändern. Ein nachhaltiges Tempo heißt, dass das Dashboard nicht den täglichen Zwang erzeugt, Zahlen zu prüfen, die sich nur monatlich bewegen. Und dasselbe Vertrauen, das motivierte Individuen stützt, heißt, dass Teams ihre eigenen Daten zuerst sehen und die Geschichte besitzen, die sie erzählen.

Drei Entwurfsfehler sind häufig. Der erste ist die Zahlenwand, bei der hundert Kacheln konkurrieren und keine hervorsticht. Der zweite ist die reine Zielanzeige, bei der eine Zahl gegen ein Ziel in Rot oder Grün gezeigt wird, ohne Trend und ohne Kontext, was zu Steuerung nach Farbe statt nach Verständnis einlädt. Der dritte ist die Anzeige ohne Eigner, bei der Definitionen gedriftet sind, die Daten veraltet und niemand weiß, wen man fragen soll. Die Arbeit des Entwurfs ist, diese zu vermeiden.

Gutes visuelles Design hilft. [Datenvisualisierung](https://en.wikipedia.org/wiki/Data_visualization) ist die Praxis, Daten grafisch zu zeigen, sodass Muster gesehen und verstanden werden können. Eine [Sparkline](https://en.wikipedia.org/wiki/Sparkline) ist ein kleines, wortgroßes Liniendiagramm, das einen Trend ohne Achsen und Beschriftungen zeigt, und sie passt gut zu einem Dashboard, weil sie die Historie neben den aktuellen Wert stellt. Ein [Run Chart](https://en.wikipedia.org/wiki/Run_chart) trägt eine Kennzahl über die Zeit mit einer Medianlinie auf, und eine [Regelkarte (Control Chart)](https://en.wikipedia.org/wiki/Control_chart) fügt Grenzen hinzu, die gewöhnliche Schwankung von untersuchenswerten Signalen trennen (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen). [Chartjunk](https://en.wikipedia.org/wiki/Chartjunk) ist Dekoration ohne Informationsgehalt, etwa schwere Gitterlinien, dreidimensionale Balken und ziergleiche Tachometer, und es lohnt sich, sie zu entfernen.

Eine [Vanity-Kennzahl](https://en.wikipedia.org/wiki/Vanity_metric) ist eine Zahl, die gut aussieht und niemandem hilft, etwas zu entscheiden, etwa eine Zahl bearbeiteter Tickets oder Anmeldungen an einem Portal ohne Ergebnisse. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt für die ganze Anzeige: Wird eine Zahl auf dem Bildschirm zum Ziel, steuern Menschen die Zahl (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Dieses Thema stützt sich auf die Messrahmenwerke (siehe Thema 1.7, Messrahmenwerke) und die Daten- und Governance-Themen in Teil 1.

## Leitprinzipien

- **Mit Fragen beginnen, nicht mit Daten.** Schreiben Sie die Entscheidungen und Fragen des Publikums auf, bevor Sie ein einziges Diagramm wählen.
- **Wenige Kennzahlen zeigen, ausgewogen.** Eine kleine Menge, die Fluss, Qualität, Zuverlässigkeit, Erlebnis und Kosten umspannt, widersteht Manipulation besser als eine Kennzahl allein.
- **Immer Trend und Kontext zeigen.** Ein Wert ohne Historie, Basislinie und Notiz, was sich änderte, ist schwer zu deuten.
- **Schwankung respektieren.** Reagieren Sie nicht auf jedes Wackeln. Nutzen Sie Run Charts oder Regelkarten, um Signal von Rauschen zu trennen.
- **Jedem Publikum seine eigene Sicht geben.** Teams, Serviceeigner und Führung stellen unterschiedliche Fragen und brauchen unterschiedliche Details.
- **Teams sehen ihre Daten zuerst.** Die Menschen, die die Arbeit tun, sollten ihre Zahlen vor allen anderen sehen und die Deutung besitzen.
- **Alles definieren und einen Eigner benennen.** Jede Kennzahl hat eine schriftliche Definition, eine Datenquelle und eine Person, die man fragen kann.
- **In der Pflege leicht halten.** Ein Dashboard, das jeden Monat eine Woche manuelle Arbeit braucht, wird sterben.

## Kennzahlendefinitionen

Die Kennzahlen unten handeln vom Dashboard selbst, nicht von einem Service. Sie helfen einem Programmteam zu sehen, ob seine Anzeigen gesund sind. Manche sind beschreibend und so markiert, denn sie als Ziele zu behandeln würde die Verzerrungen einladen, vor denen dieses Thema warnt.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Abdeckung der Fragen | Anteil der aufgelisteten Fragen des Publikums, die das Dashboard mit einer definierten Kennzahl beantworten kann | Fragen mit Kennzahl und Definition / vom Publikum aufgelistete Fragen | Prozent | Fragenliste aus Stakeholder-Sitzungen; Kennzahlenkarten | Kontinuierliche Verbesserung; Service-Level-Management | Kontinuierliche Einbeziehung von Stakeholdern | Vierteljährlich |
| Vollständigkeit der Definitionen | Anteil der angezeigten Kennzahlen mit aktueller schriftlicher Definition, Datenquelle, Eigner und bekannten Grenzen | Kennzahlen mit allen vieren / angezeigte Kennzahlen | Prozent | Kennzahlenkarten oder -katalog | Informations- und Technologiemanagement; Wissensmanagement | Gemeinsames Verständnis; sichtbare Arbeit | Vierteljährlich |
| Aktualität der Daten | Anteil der angezeigten Kennzahlen, die innerhalb ihres erwarteten Intervalls aktualisiert wurden | rechtzeitig aktualisierte Kennzahlen / angezeigte Kennzahlen | Prozent | Pipeline-Protokolle; Dashboard-Metadaten | Monitoring und Ereignismanagement | Schnelles Feedback | Wöchentlich |
| Verknüpfung mit Entscheidungen | Anteil der überprüften Kennzahlen, bei denen ein jüngeres Review zu einer erfassten Entscheidung, Maßnahme oder bewussten Entscheidung führte, nichts zu tun | Kennzahlen mit verknüpfter Entscheidung im Zeitraum / überprüfte Kennzahlen | Prozent | Review-Notizen; Verbesserungsregister | Kontinuierliche Verbesserung | Regelmäßige Reflexion | Vierteljährlich |
| Größe der Anzeige | Zahl der Kennzahlen je Sicht des Publikums | Anzahl je Sicht | Kennzahlen | Dashboard-Konfiguration | Kontinuierliche Verbesserung | Einfachheit | Vierteljährlich |
| Ausmusterungsrate | Im Zeitraum entfernte oder ersetzte Kennzahlen, weil sie Entscheidungen nicht mehr informierten | ausgemusterte Kennzahlen / zu Beginn angezeigte Kennzahlen | Prozent | Änderungsprotokoll des Dashboards | Kontinuierliche Verbesserung | Fortlaufende Weiterentwicklung | Jährlich |
| Reichweite beim Publikum (beschreibend) | Anteil der vorgesehenen Teams oder Rollen, die im Zeitraum ihre Sicht öffneten | verschiedene Teams oder Rollen, die ansahen / vorgesehene Teams oder Rollen | Prozent | Zugriffsprotokolle des Dashboards, auf Team oder Rolle aggregiert | Informations- und Technologiemanagement | Kontinuierliche Einbeziehung von Stakeholdern | Vierteljährlich |

Definieren Sie das Publikum jeder Sicht schriftlich. Zählen Sie Kennzahlen je Sicht, nicht je Werkzeug, damit ein großer Katalog mit kleiner Startseite nicht für Wildwuchs gehalten wird. Zugriffsprotokolle werden auf der Ebene von Team oder Rolle erhoben und berichtet und nie, um die Lesegewohnheiten Einzelner zu verfolgen. Die Reichweite ist beschreibend und wird neben der Verknüpfung mit Entscheidungen gelesen, denn eine viel angesehene Anzeige, die keine Entscheidung ändert, hat wenig Wert. Die Verknüpfung mit Entscheidungen akzeptiert „wir sahen hin und entschieden, nichts zu tun“ als erfasste Entscheidung, damit die Kennzahl Menschen nicht drängt, Handlung zu erfinden.

## Empfehlungen

### Beim Publikum beginnen

**1. Listen Sie die Zielgruppen und ihre Fragen auf.** Typische Zielgruppen sind das Liefer- oder Support-Team, das die Arbeit tut, der Serviceeigner, der für einen Service verantwortlich ist, und die Führungskräfte, die finanzieren und lenken. Setzen Sie sich mit jeder eine Stunde zusammen und schreiben Sie auf, was sie fragen, welche Entscheidungen sie treffen und was sie gern wüssten. Eine gute Frage klingt wie „Wartet unsere Arbeit länger als früher?“ oder „Sind wir nahe daran, unser Fehlerbudget aufzubrauchen?“. Sie klingt nicht wie „Zeig mir das Incident-Dashboard.“

**2. Ordnen Sie jeder Frage eine Kennzahl und einen Begleiter zu.** Wählen Sie für jede Frage die einzelne beste Kennzahl aus den früheren Teilen dieses Buches und einen Begleiter, der vor der offensichtlichen Verzerrung schützt. Eine Geschwindigkeitskennzahl koppelt mit einer Qualitätskennzahl. Eine Volumenkennzahl koppelt mit einem Ergebnis. Eine Erlebniskennzahl koppelt mit einer Verhaltenskennzahl. Das ist die Kopplungslogik, die durch das ganze Buch läuft (siehe Thema 1.3, Ergebnisse vor Output: Auswählen, was gemessen wird).

**3. Beziehen Sie das Publikum in den Entwurf ein.** Zeigen Sie Skizzen, bevor Sie etwas bauen. Fragen Sie, was verwirrend ist, was fehlt und was sie mit jeder Zahl tun würden. Ihre Antworten werden die Menge kürzen, und sie werden dem trauen, was sie mitgemacht haben.

### Eine kleine, ausgewogene Menge wählen

**4. Halten Sie jede Sicht bei einer Handvoll Kennzahlen.** Etwa fünf bis neun Kennzahlen je Sicht sind ein brauchbarer Bereich, wenngleich die richtige Zahl von den Fragen abhängt. Die Grenze erzwingt Entscheidungen. Legen Sie Details hinter einen Klick, in eine unterstützende Sicht, und halten Sie die Startseite bei dem, was nötig ist, um zu entscheiden, ob man weiter schauen soll.

**5. Gleichen Sie die Menge über Dimensionen aus.** Eine [Balanced Scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard) ist ein strategisches Managementwerkzeug, das eine Organisation aus mehreren Perspektiven betrachtet statt allein nach Finanzergebnissen. Die Idee überträgt sich gut: Gleichen Sie für einen Service Fluss und Geschwindigkeit, Qualität und Stabilität, Zuverlässigkeit, Erlebnis und Kosten aus. Eine Menge, die nur Geschwindigkeit enthält, ermutigt zu Abkürzungen, und eine Menge, die nur Qualität enthält, ermutigt zu Verzögerung. Die verwandte Idee eines [Key Performance Indicators](https://en.wikipedia.org/wiki/Key_performance_indicator) ist nützlich, wenn der Indikator dafür gewählt wird, was er über ein Ziel offenbart, und nicht dafür, wie leicht er zu zeigen ist.

**6. Unterscheiden Sie Indikatoren von Diagnosen.** Wenige Leitindikatoren sagen Ihnen, ob die Dinge gesund sind. Diagnosekennzahlen helfen herauszufinden, warum, wenn nicht. Halten Sie Diagnosen eine Stufe tiefer, damit die Startseite nicht zur Wand wird.

### Kontext und Trend zeigen

**7. Zeigen Sie zu jedem Wert die Historie.** Setzen Sie eine Sparkline oder ein kleines Run Chart neben jeden aktuellen Wert. Zeigen Sie mindestens genug Historie, um saisonale Muster zu sehen, etwa monatliche Spitzen oder einen Quartalszyklus. Markieren Sie Ereignisse, die Änderungen erklären: ein Release, eine Richtlinienänderung, ein Ausfall, eine Team-Reorganisation. Eine Notiz neben der Linie erspart hundert Fragen.

**8. Nutzen Sie bei Zeitkennzahlen Verteilungen und Spannen.** Ein Mittelwert verbirgt den langen Schwanz, den Nutzer spüren. Zeigen Sie den Median und ein hohes Perzentil wie das 85. oder 95. und zeigen Sie die Streuung. Nennen Sie die Stichprobengröße, wenn sie klein ist, und zeigen Sie, wie unsicher eine kleine Stichprobe ist (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen, und Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz).

**9. Seien Sie vorsichtig mit Zielen und Farben.** Nutzen Sie eine Ziellinie, wenn ein Ziel eine echte Grundlage hat, etwa ein Service-Level-Ziel, und zeigen Sie sie als Referenz, nicht als Urteil. Meiden Sie rote, gelbe und grüne Kacheln, die bei einem Datenpunkt umspringen. Nutzen Sie Statusfarben, gründen Sie sie auf eine Regel, die normale Schwankung berücksichtigt, und erklären Sie die Regel auf der Seite.

### Vertrauenswürdig und pflegbar machen

**10. Hängen Sie an jede Kennzahl eine Definition und eine Datennotiz.** Ein Klick von jeder Zahl sollte zu ihrer Definition, Formel, Datenquelle, ihrem Eigner, der Aktualisierungszeit und den bekannten Lücken führen. Eine kurze Notiz „So liest man das“ ist den Platz wert. Ein Leser, der die Grenzen sehen kann, missbraucht die Zahl seltener, und ein Team, das sie sehen kann, kann sie hinterfragen (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen, und Thema 1.5, Datenquellen und Instrumentierung).

**11. Automatisieren Sie die Daten und besitzen Sie die Anzeige.** Ziehen Sie Daten planmäßig aus den führenden Systemen und zeigen Sie den Zeitpunkt der letzten Aktualisierung. Manuelle Tabellen können ein Gespräch beginnen, sind aber fragil. Benennen Sie für jedes Dashboard einen Eigner, der für Definitionen, Aktualität und Ausmusterung verantwortlich ist. Überprüfen Sie das Dashboard in festem Rhythmus mit seinem Publikum und kürzen Sie es.

**12. Planen Sie den Ausstieg von Anfang an.** Jede Kennzahl sollte einen genannten Grund haben, zu existieren, und eine Bedingung, unter der sie ausgemustert wird, etwa „wenn der Rückstau bekannter Fehler drei Monate unter eine Schwelle fällt“ oder „wenn das Team sie in seinem Review nicht mehr nutzt“. Kennzahlen auszumustern hält die Menge klein und signalisiert, dass das Programm der Arbeit dient.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Abdeckung der Fragen | Enge Fragen schreiben, die vorhandene Kennzahlen schon beantworten; schwierige Fragen weglassen | Stakeholder von außerhalb des Programmteams einbeziehen; unbeantwortete Fragen ausdrücklich überprüfen |
| Vollständigkeit der Definitionen | Felder mit Textbausteinen füllen; Definitionen, die niemand liest | Definitionen mit jemandem außerhalb des Teams auf Klarheit beproben; prüfen, dass die Definition zur tatsächlichen Berechnung passt |
| Aktualität der Daten | Eine veraltete Quelle mit unveränderten Daten aktualisieren; eine Aktualisierung als Erfolg zählen, wenn der Quell-Feed ausfiel | Quell-Zeitstempel ebenso wie Aktualisierungszeiten prüfen; mit Datensatzzahlen und erwartetem Volumen vergleichen |
| Verknüpfung mit Entscheidungen | Entscheidungen nachträglich erfassen, um das Feld zu füllen; Handlung erfinden, um ein leeres Feld zu vermeiden | „Entschied, nichts zu tun“ als erfasste Entscheidung akzeptieren; Verknüpfungen auf eine echte vorherige Diskussion beproben |
| Größe der Anzeige | Kennzahlen auf Nebenregistern verbergen; eine Sicht in viele teilen | Kennzahlen je Publikum über alle Register zählen; das Publikum fragen, wie viele Zahlen es tatsächlich nutzt |
| Ausmusterungsrate | Unbequeme Kennzahlen ausmustern, die schlechte Ergebnisse zeigen | Die Liste ausgemusterter Kennzahlen auf ungünstige Trends überprüfen; einen genannten Grund verlangen |
| Reichweite beim Publikum (beschreibend) | Die Seite öffnen, um die Zahl zu heben; Pflichtansicht in Meetings | Beschreibend halten; mit der Verknüpfung mit Entscheidungen lesen; keine individuellen Aufrufe berichten |

Ein gesunder Befund zeigt eine kurze Startseite, die das Publikum erklären kann, Definitionen, die zu Berechnungen passen, Daten, die rechtzeitig eintreffen, Reviews, die manchmal zu Handlung und manchmal zur bewussten Entscheidung zu warten führen, und eine Liste ausgemusterter Kennzahlen, die einige einst beliebte enthält.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Ein Unternehmens-Dashboard für alle | Eine einzige Wahrheitsquelle; konsistente Definitionen | Für jedes Publikum zu allgemein; wächst zur Wand |
| Getrennte Sichten je Publikum auf geteilten Daten | Passt zu jedem Publikum; konsistente Definitionen | Braucht Governance der geteilten Definitionen |
| Von Teams gebaute Dashboards | Passen zu lokalen Fragen; hohe Verantwortung | Definitionen driften; schwer zu aggregieren |
| Zentrales Team baut alle Dashboards | Konsistenz; Gestaltungskompetenz | Langsam; passt womöglich nicht zu Teamfragen |
| Live-Anzeige in Echtzeit | Schnelle Signale für den Betrieb | Ermutigt zu Reaktion auf Rauschen; teuer |
| Periodisches Review-Paket | Ruhig, mit Kontext besprochen | Verzögerung; kann übersprungen werden |
| Ziele und Statusfarben | Schnelles Überfliegen | Lädt zu Steuerung nach Farbe ein; verbirgt Schwankung |
| Nur Trend und Verteilung | Ehrlich zur Schwankung | Für Neulinge schwerer zu überfliegen |

Die Antwort in Worten ist, Definitionen über die Organisation zu teilen, jedem Publikum seine eigene kleine Sicht zu lassen, Live-Anzeigen nur dort zu nutzen, wo die operative Reaktion sie braucht, und ein ruhiges periodisches Review für Verbesserungsentscheidungen zu nutzen.

## Fragen für die Diskussion im Team

**1. Welche Entscheidungen haben wir im letzten Quartal getroffen, die eine Zahl auf einem Bildschirm informierte?**
Listen Sie sie auf. Nennen Sie bei jeder die Zahl und woher sie kam. Beachten Sie, welche Zahlen auf unseren aktuellen Bildschirmen in dieser Liste nie auftauchen. Die Moderation sollte fragen, ob sie ihren Platz verdienen.

**2. Wenn wir unserem eigenen Team nur fünf Zahlen zeigen könnten, welche wären es?**
Lassen Sie jede Person privat eine Liste schreiben und vergleichen Sie dann. Besprechen Sie die Unterschiede und was jede Zahl jemandem zu entscheiden helfen würde. Einigen Sie sich auf eine Testmenge und ein Datum zur Überprüfung.

**3. Welche Zahl auf unserem Dashboard würden wir am liebsten entfernen, und warum?**
Achten Sie auf Zahlen, die Streit verursachen, in die Irre führen oder nie gelesen werden. Prüfen Sie, ob das Problem die Kennzahl oder ihre Darstellung ist. Einigen Sie sich bei jeder, sie auszumustern, neu zu definieren oder zu behalten.

**4. Wie würde ein neuer Kollege unser Dashboard ohne Hilfe lesen?**
Bitten Sie einen Neuling zu erklären, was er sieht. Notieren Sie, was er falsch las und warum. Fügen Sie Definitionen, Kontext oder Notizen hinzu, wo er stolperte.

**5. Was hat sich in unserer Arbeit geändert, das eine Zahl nicht zeigt?**
Releases, Besetzung, Richtlinien oder ein Wechsel der Kunden können einen Trend erklären. Einigen Sie sich, wie Ereignisse auf der Anzeige erfasst werden, damit der nächste Leser die Geschichte hat.

**6. Wer sieht außer uns unsere Daten, und was tun sie damit?**
Verfolgen Sie den Weg unserer Zahlen zu anderen Zielgruppen. Prüfen Sie, dass die Deutung, die sie ihnen geben, eine ist, die wir billigen würden. Einigen Sie sich, was wir teilen und welcher Kontext dazugehört.

## Vier Perspektiven

### Produkt- und Lieferteams

Teams tun die Arbeit und sollten das erste Publikum ihrer eigenen Daten sein. Sie sollten bei der Wahl der Kennzahlen helfen, die Anzeige nutzen, um ihre eigenen Review-Gespräche anzustoßen, und sie mit Ereignissen annotieren. Eine Teamsicht sollte „wie schlagen wir uns und was sollten wir ausprobieren?“ beantworten und nicht „wie stehen wir im Vergleich zum Team nebenan?“

### Service- und Betriebsteams

Serviceeigner sind verantwortlich dafür, wie ein Service über die Zeit leistet. Ihre Sicht bringt Zuverlässigkeit, Incidents, Changes, Kosten und Erlebnis für einen Service zusammen, mit Trends und dem Stand von Verbesserungsmaßnahmen. Sie sollten sie nutzen, um zu entscheiden, wo zu investieren ist, und um Gespräche mit Kunden und Führungskräften vorzubereiten.

### Führung und Governance

Führungskräfte brauchen eine kurze Sicht auf Ergebnisse und Risiken über Services, mit genug Kontext, um sie zu deuten. Sie sollten nach Trends und Verteilungen statt nach Ranglisten fragen, widerstehen, neue Kennzahlen zu verlangen, ohne andere auszumustern, und die Anzeige nutzen, um Fragen an Systeme und Entscheidungen zu richten, nicht an Einzelne.

### Kunden und Nutzer

Kunden und Nutzer sehen Serviceinformationen durch Statusseiten, Berichte und die Erlebniskennzahlen, die ihre Sicht spiegeln (siehe Thema 6.2, Experience Level Agreements). Ihre Sicht sollte ehrlich, einfach und konsistent mit dem sein, was die Teams sehen. Sie sollten der Organisation sagen können, was die Zahlen nicht zeigen.

## In der Praxis: ein Beispiel aus dem Service-Management

Ein Softwareunternehmen mit gehostetem Produkt und Kundensupport-Gruppe hat drei Dashboards angesammelt: einen Betriebsbildschirm mit 62 Kacheln, einen wöchentlich per E-Mail versandten Supportbericht und eine Lieferseite, die ein Analyst pflegt. Das Führungsteam bittet um ein einziges Dashboard, um „alles zu sehen“. Die Zahlen unten sind illustrativ.

Die Leiterin des Service-Managements schlägt vor, mit Fragen zu beginnen. Sie hält mit jedem von drei Zielgruppen eine einstündige Sitzung: dem Support-Team, dem Plattformteam und der Führungsgruppe. Das Support-Team fragt, ob Kunden länger auf eine erste nützliche Antwort warten als früher und ob dieselben Probleme wiederkommen. Das Plattformteam fragt, ob es nahe daran ist, sein Fehlerbudget aufzubrauchen, und ob sein Change-Prozess es bremst oder schützt. Die Führung fragt, ob Kunden Wert erhalten und ob sich die Investition in ein neues Self-Service-Portal auszahlt. Zusammen listen sie 14 Fragen auf. Die vorhandenen Dashboards konnten sechs davon mit einer definierten Kennzahl beantworten, die Abdeckung der Fragen beträgt also 43 Prozent.

Die Gruppe entwirft drei Sichten mit höchstens sieben Kennzahlen, auf gemeinsamen Definitionen. Die Support-Sicht zeigt Median und 85. Perzentil der Zeit bis zu einer ersten nützlichen Antwort, den Anteil der Kontakte, die binnen sieben Tagen wiederkehren, einen Zufriedenheitstrend mit seiner Stichprobengröße und Self-Service-Lösung gekoppelt mit Folgekontakten. Die Plattform-Sicht zeigt Verfügbarkeit gegen das Ziel mit einer Burn-Linie des Fehlerbudgets, Change-Durchlaufzeit mit der Change-Fail-Rate und den Anteil der Zeit für ungeplante Arbeit. Die Führungssicht zeigt Service-Level-Ergebnisse, Kundenerlebnis, Kosten je aktivem Kunden und den Stand dreier finanzierter Verbesserungsmaßnahmen. Jeder Wert hat eine Sparkline, einen Link zu seiner Definitionskarte und ein Notizfeld für Ereignisse. Farben erscheinen nur beim Fehlerbudget, auf Grundlage einer auf der Seite erklärten Regel.

Das erste Review bringt Überraschungen. Das Support-Team bemerkt, dass sich die mediane Antwortzeit verbesserte, während sich das 85. Perzentil verschlechterte, weil leichte Kontakte schnell beantwortet wurden und schwere warteten. Es beschließt, seine Triage-Regeln anzusehen, und erfasst die Entscheidung. Das Plattformteam sieht, dass ein jüngerer Anstieg der Change-Durchlaufzeit mit einem neuen Genehmigungsschritt zusammenfiel, und trägt die Frage in die Change-Gruppe. Die Führung bemerkt, dass die Portalnutzung steigt, während die Folgekontakte flach bleiben, und fragt das Support-Team, was das Portal nicht beantwortet. Zwei Quartale später beträgt die Abdeckung der Fragen 79 Prozent, alle angezeigten Kennzahlen haben vollständige Definitionen, und der alte 62-Kachel-Bildschirm ist ausgemustert. Drei Kennzahlen wurden fallengelassen, weil sie niemand nutzte, und eine wurde hinzugefügt. Ein Direktor bittet um eine Zusammenfassungszeile in Grün-Gelb-Rot. Die Leiterin des Service-Managements zeigt einen Versuch, bei dem eine einzige schlechte Woche die Zeile rot färbte und einen Schwall von Fragen ohne Ursache auslöste. Sie einigen sich stattdessen auf eine kurze schriftliche Notiz, was sich jeden Monat änderte, und erfassen die Entscheidung.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Bauen Sie das Dashboard mit seinen Nutzern und verbessern Sie es in kleinen Schritten, indem Sie bei jedem regelmäßigen Review fragen, welche Frage es beantwortete und welche Entscheidung es veränderte. Zu beachten ist, dass ein einmal für einen Start gebautes Dashboard veraltet, während sich Fragen ändern.

### KI

Dashboards enthalten heute oft KI-gestützte Arbeit, von KI geschriebene Zusammenfassungen und KI-erzeugte Einsichten. Zeigen Sie KI-bezogene Kennzahlen mit einem Qualitätspaar, kennzeichnen Sie jeden von einer KI geschriebenen Text und lassen Sie einen Menschen ihn prüfen, bevor er Entscheider erreicht. Zu beachten ist, dass eine geschliffene KI-Zusammenfassung neben einem Diagramm mehr Gewicht tragen kann, als die Daten verdienen; zeigen Sie also zuerst die Daten.

### Automatisierung

Aktualisieren Sie Daten automatisch und zeigen Sie Aktualität und jeden fehlgeschlagenen Ladevorgang auf dem Dashboard selbst. Messen Sie die Dashboard-Pipeline an ihren eigenen Fehlschlägen. Zu beachten ist, dass ein automatisiertes Dashboard weiter die letzten guten Daten zeigt, wenn ein Ladevorgang fehlschlägt; machen Sie Veralten also sichtbar.

### Analytik

Zeigen Sie jede Zahl mit ihrem Trend, der Zahl dahinter und einer Notiz, was sie nicht zeigen kann. Die Entscheidung, die dies untermauert, ist, welche Frage das Publikum bearbeiten wird. Zu beachten ist, dass Farben und Schwellen ein Ziel nahelegen; meiden Sie also Rot und Grün, wo kein Ziel existiert.

## Branchenperspektive

**Startup.** Halten Sie es sehr klein: eine einzige Seite mit vielleicht fünf Zahlen, die das ganze Unternehmen lesen kann und die Liefergeschwindigkeit, Stabilität, Kundenerlebnis und Kosten spiegeln. Nutzen Sie, was die vorhandenen Werkzeuge bieten. Überprüfen Sie die Seite erneut, wenn sich das Produkt oder die Kunden ändern, und widerstehen Sie, eine Datenplattform zu bauen, bevor die Fragen klar sind.

**Kleinunternehmen.** Ein gemeinsames Dokument oder ein einfaches Tabellendiagramm, monatlich aktualisiert, kann genügen. Wählen Sie eine Handvoll Kennzahlen, die der Inhaber und das Personal tatsächlich nutzen, schreiben Sie auf, was jede bedeutet, und besprechen Sie sie in einem regelmäßigen Meeting. Das Risiko ist nicht zu wenig Werkzeug. Das Risiko sind Kennzahlen, denen niemand traut oder auf die niemand handelt.

**Großunternehmen.** Größe verlangt gemeinsame Definitionen, einen gesteuerten Katalog von Kennzahlen und gestufte Sichten für Teams, Services, Portfolios und Führungskräfte. Die Versuchung, alles zu einer Zahl zusammenzufassen, ist stark und schädlich. Halten Sie Teamsichten im Besitz der Teams, veröffentlichen Sie gemeinsame Definitionen und verlangen Sie für jede neue Kennzahl auf einer Führungssicht einen genannten Zweck (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

**Behörden und öffentlicher Sektor.** Berichtspflichten und öffentliche Rechenschaft schreiben oft bestimmte Kennzahlen vor. Halten Sie die vorgeschriebenen Kennzahlen sichtbar und klar getrennt von denen, die die Teams zur Verbesserung nutzen, und erklären Sie der Öffentlichkeit und Aufsichtsstellen, was die Zahlen zeigen können und was nicht. Einfache Sprache und Barrierefreiheit zählen für jede Anzeige, die außerhalb der Organisation geteilt wird (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten eines Dashboard-Programms umfassen Zeit für Interviews mit dem Publikum, Entwurf und Bau, Anbindung und Bereinigung der Daten, Schreiben der Definitionen, Schulung und Unterstützung der Nutzer und Pflege der Anzeige über die Zeit. Die größten verborgenen Kosten sind die Zeit von Menschen, die Zahlen lesen, die nicht helfen, und die Meetings, in denen darüber gestritten wird, wessen Zahl stimmt. Billige, schnelle Builds sind häufig, und die echten Kosten kommen später in der Pflege und im Misstrauen.

Der Ertrag umfasst schnelleres Erkennen von Trends, weniger Streit um Definitionen, besser gezielte Verbesserungsarbeit und verringerten Berichtsaufwand, wenn eine gesteuerte Quelle mehrere manuelle Berichte ersetzt. Bauen Sie den Business Case aus Ihren eigenen Daten: Stunden für manuelle Berichte davor und danach, die Zahl konkurrierender Fassungen derselben Zahl und Entscheidungen, die die Anzeige informierte. Vermeiden Sie, veröffentlichte Zahlen zum Wert von Analytik ohne nachvollziehbare Quelle und Relevanz für Ihren Kontext zu zitieren. Die glaubwürdige Behauptung ist bescheiden: weniger, bessere Kennzahlen, denen vertraut wird und die genutzt werden (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Die Kachelwand.** Jede Zahl konkurriert um Aufmerksamkeit. Kürzen Sie auf eine Handvoll je Publikum und legen Sie Details eine Stufe tiefer.
- **Steuerung nach Farbe.** Statusfarben springen bei Rauschen und treiben Reaktionen. Zeigen Sie Trends und nutzen Sie Regeln, die Schwankung respektieren.
- **Keine Definitionen.** Zwei Teams lesen dasselbe Label verschieden. Hängen Sie an jede Kennzahl eine Definition und einen Eigner.
- **Dashboards als Überwachung.** Sichten auf Einzelebene untergraben Vertrauen und verzerren die Daten. Zeigen Sie Teams, Services und Systeme.
- **Eine einzige Zahl, die alles zusammenfasst.** Sie verbirgt die Abwägungen, die sie offenlegen sollte. Zeigen Sie eine ausgewogene Handvoll.
- **Einmal bauen, nie überprüfen.** Die Anzeige veraltet. Überprüfen Sie im Rhythmus mit dem Publikum und mustern Sie Kennzahlen aus.
- **Vanity-Anzeigen.** Große Zahlen von Aktivität ohne Ergebnisse. Koppeln Sie jedes Volumen mit einer Ergebniskennzahl.
- **Der Bericht, den niemand verlangte.** Aus den verfügbaren Daten gebaut statt aus den gestellten Fragen. Beginnen Sie mit Fragen.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Publikum und Fragen | Aus verfügbaren Daten gebaut | Manche Teams sagen, was sie brauchen | Zielgruppen und Fragen aufgeschrieben; kleine Sichten je Publikum | Abdeckung der Fragen und Verknüpfung mit Entscheidungen überprüft und danach gehandelt | Zielgruppen entwerfen Sichten mit, einschließlich Kunden und Lieferanten, und Fragen entwickeln sich mit den Services |
| Entwurf und Kontext | Viele Kacheln ohne Historie | Einige Trends und Definitionen | Wenige Kennzahlen je Sicht mit Trend, Verteilung und Definition bei jeder Kennzahl | Schwankungsbewusste Anzeigen; Begleitkennzahlen für jeden Leitwert | Sichten passen sich wechselnden Zielen an; geteilte Muster über Teams wiederverwendet |
| Daten und Pflege | Manuell, veraltet, ohne Eigner | Etwas Automatisierung; informelle Eigner | Automatisierte Feeds, benannte Eigner, Aktualität gezeigt | Aktualität und Vollständigkeit der Definitionen gesteuert; Ausmusterung Routine | Föderierte Verantwortung mit geteilten Definitionen; Ausmusterung und Verbesserung von Nutzern getrieben |

## Checkliste

- [ ] Die Fragen jeder Zielgruppe sind aufgeschrieben, und jede Sicht ist ihnen zugeordnet.
- [ ] Jede Sicht hat nicht mehr als etwa neun Kennzahlen, mit Details eine Stufe tiefer.
- [ ] Die Menge ist über Fluss, Qualität, Zuverlässigkeit, Erlebnis und Kosten ausgewogen.
- [ ] Jeder Wert zeigt Trend und Kontext, und Zeitkennzahlen zeigen ein hohes Perzentil.
- [ ] Jede Kennzahl hat Definition, Quelle, Eigner und Aktualisierungszeit mit einem Klick erreichbar.
- [ ] Ziele werden als Referenzen gezeigt, und Statusfarben folgen einer genannten Regel.
- [ ] Teams sehen ihre eigenen Daten zuerst und besitzen die Deutung.
- [ ] Keine Sicht ordnet oder verfolgt Einzelne.
- [ ] Das Dashboard hat einen benannten Eigner, einen Review-Rhythmus und eine Regel zum Ausmustern von Kennzahlen.
- [ ] Daten werden automatisch gezogen, mit sichtbarer Zeit der letzten Aktualisierung.

## KI-Prompts

**Fragen in eine Sicht verwandeln.**

```text
Here are questions asked by [audience]: [list]. For each, suggest one primary
measure and one companion measure that guards against its most likely distortion.
Group them into a view of no more than seven measures, and for each state the
definition, a suggested chart type, and what context it needs. Do not invent data
or benchmarks. List your assumptions and the questions the view cannot answer.
```

**Ein Dashboard auf Klarheit überprüfen.**

```text
Here is a description of our dashboard, listing each tile, its label, and its
definition: [paste]. Act as a new colleague reading it for the first time. List
which labels are ambiguous, which numbers lack context or trend, which tiles might
invite management by color, and which tiles could be retired. Do not rewrite the
data. List your assumptions.
```

**Eine Kennzahlenkarte entwerfen.**

```text
Draft a metric card for [measure]. Include a plain definition, the formula, unit,
data source, owner, refresh interval, known gaps, the most likely way it will be
gamed, the paired guardrail, and the decision it should inform. Keep it under 200
words. Do not invent figures. Mark anything you are unsure about.
```

**Ein Dashboard-Review planen.**

```text
Plan a 45-minute quarterly review of our [team] dashboard with its audience.
Include how to check that measures were used for decisions, how to decide which to
retire, how to record events that explain trends, and how to avoid ranking people.
List the questions the facilitator should ask and the output to record.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für jede Kennzahl einer vorgeschlagenen Sicht zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine Dashboard-Spezifikation Definitionen, Eigner und Manipulationsvektoren für jede Kennzahl hat.

## Wichtigste Erkenntnisse

- Beginnen Sie bei den Fragen, die ein Publikum stellt, und geben Sie jedem Publikum eine kleine eigene Sicht.
- Gleichen Sie die Menge aus und koppeln Sie jeden Leitwert mit einem Begleiter, der vor Verzerrung schützt.
- Zeigen Sie zu jedem Wert Trend, Verteilung und Kontext und respektieren Sie normale Schwankung.
- Hängen Sie an jede Kennzahl Definition, Quelle, Eigner und Aktualisierungszeit.
- Lassen Sie Teams ihre Daten zuerst sehen und besitzen und zeigen Sie nie Einzelne.
- Überprüfen Sie das Dashboard mit seinem Publikum und mustern Sie Kennzahlen aus, die Entscheidungen nicht mehr informierten.

## Quellen und weiterführende Literatur

1. Few, S., *Information Dashboard Design: The Effective Visual Communication of Data*, O'Reilly Media, 2006.
2. Tufte, E., *The Visual Display of Quantitative Information*, Graphics Press, 1983.
3. Kaplan, R., and Norton, D., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, 1992.
4. Wheeler, D., *Understanding Variation: The Key to Managing Chaos*, SPC Press, 2000.
5. Axelos, *ITIL 4 Foundation*, 2019.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Dashboard (business)](https://en.wikipedia.org/wiki/Dashboard_(business)).
8. Wikipedia, [Data visualization](https://en.wikipedia.org/wiki/Data_visualization).
9. Wikipedia, [Sparkline](https://en.wikipedia.org/wiki/Sparkline).
10. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Chartjunk](https://en.wikipedia.org/wiki/Chartjunk).
13. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
16. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
