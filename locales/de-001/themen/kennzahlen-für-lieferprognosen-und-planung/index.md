# Kennzahlen für Lieferprognosen und Planung

**Teams, die Software kontinuierlich ausliefern und zugleich Live-Services betreiben, brauchen ehrliche Prognosen und keine aus Schätzungen herausgepressten Zusagen. Planen Sie also aus dem Fluss fertiger Arbeit, geben Sie Spannen statt Daten an und halten Sie jede teamlokale Planungszahl aus Vergleichen und Zielen heraus.**

## Überblick und Motivation

Stakeholder stellen jedem Lieferteam zwei Fragen: „Wann ist es fertig?“ und „Wie viel können Sie übernehmen?“ Die agile Antwort beginnt bei den Zielen aus den Prinzipien des Agilen Manifests: wertvolle Software kontinuierlich liefern, täglich mit Stakeholdern zusammenarbeiten, regelmäßig reflektieren und sich verbessern und die Arbeit um motivierte Menschen herum aufbauen, denen man zutraut, sie zu erledigen. Prognosen, die diesen Zielen dienen, sind ein Gespräch unter Stakeholdern über wahrscheinliche Ergebnisse und Risiko. Sie sind keine unter Druck abgerungene Zusage.

Teams, die Live-Services betreiben, haben eine zusätzliche Schwierigkeit. Ihre Kapazität teilt sich auf geplante Änderungen, ungeplante Incident-Arbeit, Serviceanfragen und Verbesserung. Ein Plan, der die operative Last ignoriert, scheitert aus Gründen, die niemand eingeplant hat (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit). IT-Service-Management (ITSM), wie von ITIL kodifiziert, behandelt dies als Frage von Kapazität und Nachfrage. [Kapazitätsplanung](https://en.wikipedia.org/wiki/Capacity_planning) ist der Prozess, die Kapazität zu bestimmen, die eine Organisation braucht, um wechselnde Nachfrage zu bedienen. Die agile Praxis, gegen das zu planen, was das Team tatsächlich abschließen kann, ist dieselbe Idee auf Teamebene.

Es gibt zwei grobe Wege, Lieferung zu prognostizieren:

- **Aus Schätzungen.** Das Team bemisst Elemente in irgendeiner Einheit, addiert die Größen und teilt durch eine Rate. Viele Teams nutzen relative Bemessung wie [Story Points](https://en.wikipedia.org/wiki/Story_point), und die Rate heißt [Velocity](https://en.wikipedia.org/wiki/Velocity_(software_development)). Das ist schnell begonnen, hängt von den Schätzgewohnheiten des Teams ab und ist nur innerhalb eines Teams aussagekräftig.
- **Aus Flussdaten.** Das Team nutzt seine eigene Aufzeichnung fertiger Arbeit: wie viele Elemente es pro Woche abschließt (Durchsatz) und wie lange Elemente vom Beginn bis zum Abschluss dauern (Zykluszeit). Weil dies Zählungen und verstrichene Zeiten sind, keine Meinungen, widerstehen sie dem Abdriften und lassen sich mit Simulation zu einer Spanne von Ergebnissen verbinden. Dieser Ansatz stammt aus der Flusstradition, zu der der Kanban Guide gehört, und funktioniert mit jeder Art, Arbeit zu organisieren, auch bei Teams, die kontinuierlich ohne festen Planungszeitraum ausliefern.

Dieses Thema neigt zum zweiten Ansatz, weil kontinuierliche Softwarelieferung einen steten Strom fertiger Elemente erzeugt, den Flussdaten unmittelbar beschreiben (siehe Thema 2.1, Flussmaße, und Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz). Es behandelt dennoch den ersten, weil viele Teams Schätzungen nutzen und weil der Missbrauch von Velocity zu den häufigsten Wegen gehört, auf denen Liefermessgrößen schiefgehen.

Prognosen sind [Vorhersagen](https://en.wikipedia.org/wiki/Forecasting) einer ungewissen Zukunft, und Ungewissheit ist der Punkt. Der Gedanke des [Konus der Unsicherheit](https://en.wikipedia.org/wiki/Cone_of_Uncertainty) besagt, dass frühe Schätzungen am unsichersten sind. Der [Planungsfehlschluss](https://en.wikipedia.org/wiki/Planning_fallacy) besagt, dass Menschen unterschätzen, wie lange ihre eigenen Pläne dauern, auch wenn sie wissen, dass ähnliche Pläne sich verspäteten. Gute Prognosemessgrößen benennen das und messen, wie oft Prognosen treffen.

Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) zählt hier, denn Prognosen und Pläne werden leicht zu Zusagen und dann zu Zielen. Wird ein Team daran gemessen, ein Datum zu treffen, verbirgt es Risiko, kürzt an der Qualität oder stapelt bei der Schätzung tief (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Leitprinzipien

- **Aus fertiger Arbeit prognostizieren.** Was das Team geliefert hat, ist ein besserer Beleg als das, was irgendjemand glaubt, dass es liefern wird.
- **Eine Spanne mit Wahrscheinlichkeit angeben.** „Wahrscheinlich bis Ende nächsten Monats, sehr wahrscheinlich bis Ende des folgenden“ schlägt ein einzelnes Datum.
- **Gegen echte Kapazität planen.** Schließen Sie Betriebsarbeit ein, lassen Sie Zeit für Verbesserung und planen Sie nicht auf volle Auslastung.
- **Schätzungen lokal halten.** Jede Bemessungseinheit ist ein privates Planungswerkzeug eines Teams, nie eine Grundlage für Vergleiche.
- **Die Qualität der Prognose messen, nicht nur die Lieferung.** Eine Prognose, die aus falschen Gründen stimmt, ist Glück.
- **Die Prognose als gemeinsame behandeln.** Stakeholder und Team bauen sie zusammen und überarbeiten sie, wenn sich Fakten ändern.
- **Dem Team vertrauen.** Menschen, denen vertraut wird und die unterstützt werden, geben ehrliche Prognosen.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Treffsicherheit der Prognose | Anteil der Prognosen, bei denen das tatsächliche Ergebnis innerhalb der angegebenen Spanne lag | Prognosen, deren tatsächliches Ergebnis innerhalb der angegebenen Spanne lag / abgegebene Prognosen | Prozent | Prognoseprotokoll und Lieferaufzeichnungen | Kapazitäts- und Leistungsmanagement; kontinuierliche Verbesserung | Prognosegenauigkeit in Planungsgesprächen | Monatlich |
| Breite der Prognosespanne | Wie breit die angegebene Spanne im Verhältnis zur medianen Prognose war | (obere Grenze minus untere Grenze) / mediane Prognose | Verhältnis | Prognoseprotokoll | Kapazitäts- und Leistungsmanagement | Verengung des Konus der Unsicherheit | Monatlich |
| Erfolg beim Lieferziel | Anteil der genannten Lieferziele, die für den Zeitraum erreicht wurden, nach Ergebnis beurteilt | erreichte Ziele / gesetzte Ziele | Prozent | Mit Stakeholdern vereinbarte Zielaufzeichnungen | Service-Level-Management; kontinuierliche Verbesserung | Ergebnis-Review mit Stakeholdern | Monatlich oder je Release eines Ziels |
| Rate der Umfangsänderung | Anteil der zugesagten Arbeit, der nach Abgabe der Prognose hinzugefügt, entfernt oder neu bemessen wurde | nach der Prognose hinzugefügte oder entfernte Elemente / Elemente in der ursprünglichen Prognose | Prozent | Änderungsverlauf des Arbeits-Trackers | Change-Befähigung; Service-Level-Management | Anpassung des Backlogs an Feedback | Monatlich |
| Kapazitätsverteilung | Anteil der Teamkapazität, der auf Änderung, Betriebsarbeit und Verbesserung entfällt | abgeschlossene Elemente oder Stunden in jeder Kategorie / alle abgeschlossenen Elemente oder Stunden | Prozent | Arbeits-Tracker mit Arbeitstyp | Kapazitäts- und Leistungsmanagement; Incident-Management | Verteilung der Arbeitstypen | Monatlich |
| Durchsatzstabilität | Schwankung des wöchentlichen Durchsatzes | Standardabweichung des wöchentlichen Durchsatzes / Mittelwert des wöchentlichen Durchsatzes | Verhältnis | Arbeits-Tracker | Kapazitäts- und Leistungsmanagement | Vorhersagbarkeit des Flusses | Monatlich |
| Lokale Velocity | Die fertige Arbeit eines einzelnen Teams in seiner eigenen Bemessungseinheit pro Planungszeitraum | Summe der Schätzungen für Elemente, die im Zeitraum die Definition of Done erfüllen | Vom Team definierte Punkte | Arbeits-Tracker | Kapazitäts- und Leistungsmanagement | Planungshilfe zur Teamkapazität | Je Planungszeitraum |

Definieren Sie die Uhren. Eine Prognose ist „abgegeben“, wenn sie erfasst und mit Stakeholdern geteilt wird, und „erfüllt“, wenn das Ergebnis freigegeben und in Nutzung ist, nicht wenn Code zusammengeführt ist. Der Durchsatz zählt Elemente, die die Definition of Done erfüllen, wobei Elemente verschiedener Typen in getrennten Reihen gezählt werden, wenn sich ihre Größe stark unterscheidet. Die lokale Velocity wird nur dem Team gezeigt, dem sie gehört.

## Empfehlungen

### Aus dem Fluss prognostizieren

**1. Bauen Sie die Prognose aus Durchsatz und Zykluszeit.** Zählen Sie die in den letzten 12 bis 26 Wochen jede Woche abgeschlossenen Elemente. Nutzen Sie diese Historie, um zu prognostizieren, wie viele Elemente bis zu einem Datum fertig werden oder wann eine Menge von Elementen wahrscheinlich fertig ist. Eine Simulation nach der [Monte-Carlo-Methode](https://en.wikipedia.org/wiki/Monte_Carlo_method), die tausendfach aus der eigenen Historie des Teams zieht, verwandelt die Historie in eine Wahrscheinlichkeitsspanne. Einfache Tabellenkalkulationen oder kleine Skripte leisten das gut. Nennen Sie das Historienfenster und das Datum der Prognose.

**2. Berichten Sie Perzentile der Ergebnisse.** Sagen Sie „50 Prozent wahrscheinlich bis 14. März, 85 Prozent wahrscheinlich bis 4. April, 95 Prozent wahrscheinlich bis 18. April“. Jedes Perzentil ist eine ehrliche Aussage über Risiko, und Stakeholder können wählen, wie viel Spielraum sie brauchen. Ein einzelnes Datum verbirgt diese Wahl (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

**3. Nutzen Sie Zykluszeit-Perzentile für einzelne Elemente.** Für ein einzelnes Element beantwortet das 85. Perzentil vergangener Zykluszeiten „Wie lange könnte das dauern?“ besser als jede Schätzung. Zeigen Sie es auf dem Board als Linie, gegen die sich das Alter der Elemente in Bearbeitung vergleichen lässt (siehe Thema 2.1, Flussmaße).

**4. Halten Sie Elementgrößen ungefähr gleich.** Durchsatzbasierte Prognose funktioniert am besten, wenn Elemente klein und ähnlich genug zum Zählen sind. Teams kommen dahin, indem sie Arbeit in das kleinste Stück zerlegen, das noch Wert liefert, eine Gewohnheit kontinuierlicher Softwarelieferung für sich. Variieren Elemente stark, verfolgen Sie getrennte Reihen für verschiedene Arbeitstypen.

**5. Aktualisieren Sie die Prognose, wann immer sich Fakten ändern.** Eine Prognose ist eine lebende Sicht. Ändert sich der Umfang oder die Teamgröße oder verbraucht ein großer Incident eine Woche, führen Sie sie erneut aus und informieren Sie die Stakeholder. Versionieren Sie die Prognosen, damit Sie sie später beurteilen können.

### Gegen echte Kapazität planen

**6. Verteilen Sie Kapazität nach Arbeitstyp.** Halten Sie fest, welcher Anteil der fertigen Arbeit des Teams geplante Änderung, ungeplante Betriebsarbeit, Serviceanfragen und Verbesserung war. Planen Sie mit dem Anteil, den die Erfahrung zeigt, nicht mit einem Ideal. Teams, die Live-Services betreiben, stellen oft fest, dass ein Drittel oder mehr ihrer Kapazität in Betriebsarbeit fließt, und die Zahl ist ihre eigene zu messen, nicht zu borgen (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit).

**7. Reservieren Sie Kapazität für Verbesserung.** Kontinuierliche Verbesserung ist ein ständiger Teil der Arbeit, also planen Sie Zeit dafür in der Verteilung ein und schützen Sie sie. Teams, die sie in jeder geschäftigen Phase herausquetschen, sehen ihre operative Last steigen, was sie weiter quetscht. Verfolgen Sie den Verbesserungsanteil und die Wirkung der Verbesserungen auf den operativen Anteil.

**8. Planen Sie nicht auf volle Auslastung.** Ein Team, das mit 100 Prozent geplant ist, hat keinen Raum für Schwankung, und Warteschlangen wachsen, wenn sich die Auslastung der Grenze nähert (siehe Thema 2.3, Laufende Arbeit und Warteschlangentheorie). Lassen Sie Spielraum für das Unerwartete und behandeln Sie ihn als Entwurfsentscheidung und nicht als Verschwendung.

### Schätzungen vorsichtig nutzen, falls Sie sie nutzen

**9. Behandeln Sie Velocity als lokale Planungshilfe.** Bemisst ein Team Arbeit in Story Points, kann seine Velocity ihm im nächsten Planungsgespräch helfen zu entscheiden, wie viel es übernimmt, und sie sollte nur mit der jüngeren Vergangenheit desselben Teams verglichen werden. Vergleichen Sie nie Teams, setzen Sie nie ein Velocity-Ziel und berichten Sie Velocity nie nach oben als Produktivitätsmaß. Punkte haben über Teams keine gemeinsame Einheit, und der Druck, die Zahl zu steigern, bläht die Schätzungen auf, ohne mehr zu liefern.

**10. Vergleichen Sie Schätzungen gelegentlich mit tatsächlichen Zykluszeiten.** Tragen Sie Schätzungen gegen die tatsächliche Dauer der Elemente auf. Dauern große Schätzungen nicht länger als kleine, kauft der Schätzaufwand nicht viel, und das Zählen von Elementen dient dem Team womöglich ebenso gut. Korrelieren sie, tragen die Schätzungen Information, die sich zu behalten lohnt. Lassen Sie das Team mit den Daten entscheiden.

### Messen, ob es funktioniert

**11. Protokollieren und bewerten Sie jede Prognose.** Halten Sie Prognose, Spanne und tatsächliches Ergebnis fest und berechnen Sie die Treffsicherheit. Eine gut kalibrierte Prognose am 85. Perzentil sollte in etwa 85 Prozent der Fälle eintreffen. Liegen die Treffer weit darüber oder darunter, passen Sie die Methode an. Teilen Sie das Protokoll mit Stakeholdern, denn Vertrauen in die Prognose entsteht aus der Erfolgsbilanz.

**12. Beurteilen Sie Lieferziele nach Ergebnis.** Ein Ziel wie „Kunden können per Rechnung zahlen“ ist erreicht, wenn Kunden es tun können, nicht wenn die Aufgaben geschlossen sind. Vereinbaren Sie Ziele mit Stakeholdern in einfachen Worten, überprüfen Sie sie gemeinsam und halten Sie das Ergebnis fest. Das hält die Planung an kontinuierliche Zusammenarbeit gebunden und entmutigt, Arbeit auszuliefern, die niemand nutzt (siehe Thema 1.3, Ergebnisse vor Output: Auswählen, was gemessen wird).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Treffsicherheit der Prognose | Sehr breite Spannen nennen, damit jede Prognose trifft; nachträglich neu prognostizieren | Breite der Prognosespanne; die ursprüngliche Prognose im Protokoll behalten; Spannen mit der Historie von Kollegen vergleichen |
| Breite der Prognosespanne | Spannen verengen, um selbstsicher zu wirken | Treffsicherheit der Prognose; verlangen, dass die Spanne aus erfasster Historie gebaut wird |
| Erfolg beim Lieferziel | Leichte Ziele setzen; ein Ziel nachträglich umdefinieren; Output als Ergebnis zählen | Stakeholder beurteilen das Ergebnis; Zielformulierung in einem Protokoll halten; Nutzungsdaten der gelieferten Änderung prüfen |
| Rate der Umfangsänderung | Den Umfang einfrieren, indem berechtigte Änderungen abgelehnt werden; Umfangsänderung durch Neubemessung von Elementen verbergen | Zufriedenheit der Stakeholder mit der Reaktionsfähigkeit; Änderungsgründe erfasst |
| Kapazitätsverteilung | Betriebsarbeit als Verbesserung etikettieren; operative Last verbergen, indem außerhalb des Boards gearbeitet wird | Mit Incident- und Anfragedatensätzen abgleichen; Elemente stichprobenartig auf den Typ prüfen |
| Durchsatzstabilität | Elemente in triviale Stücke zerlegen, um die Zählung zu erhöhen; Elemente schließen, ohne sie fertigzustellen | Verteilung der Elementgrößen; Wiedereröffnungsrate; Stichprobe auf gelieferten Wert |
| Lokale Velocity | Schätzungen aufblähen; Stories zerlegen, um Punkte zu beanspruchen; Teams vergleichen | Teamprivat halten; mit Durchsatz und Zykluszeit vergleichen; nie ein Ziel setzen |

Ein gesunder Befund sind Prognosen, die etwa mit der angegebenen Rate eintreffen, Ziele, bei denen Stakeholder zustimmen, dass sie erreicht wurden, ein Kapazitätsbild, das zu dem passt, was das Team erlebt, und eine Velocity-Zahl, die, falls es sie gibt, vom Team genutzt wird und von niemandem sonst.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Flussbasierte Prognose | Nutzt echte Daten, widersteht Aufblähung, liefert Spannen | Braucht stetige Historie und ähnlich große Elemente |
| Schätzungsbasierte Prognose | Schnell begonnen, fördert Diskussion über die Arbeit | Subjektiv, bläht unter Druck auf, über Teams nicht vergleichbar |
| Zusage auf ein einzelnes Datum | Einfach zu kommunizieren | Verbirgt Risiko; bestraft Ehrlichkeit |
| Spanne mit Wahrscheinlichkeit | Ehrlich bei Unsicherheit | Für manche Stakeholder anfangs schwerer zu lesen |
| Planung auf volle Auslastung | Wirkt effizient | Warteschlangen wachsen; kein Raum für Incidents oder Lernen |
| Geplanter Spielraum | Fängt Schwankung auf und stützt Verbesserung | Wirkt auf Unüberzeugte wie ungenutzte Kapazität |

Die Antwort in Worten: Beginnen Sie bei Flussdaten, fügen Sie Schätzungen nur dort hinzu, wo sie dem Team helfen, und sprechen Sie in Spannen. Verlangt ein Vertrag ein Datum, geben Sie das Datum an, das das 85. oder 95. Perzentil stützt, und sagen Sie, was es ändern würde.

## Fragen für die Diskussion im Team

**1. Was würden wir sagen, wenn ein Stakeholder fragte „wann ist es fertig“ und eine ehrliche Antwort wollte?**
Bitten Sie das Team, für ein echtes Stück Arbeit zu antworten, zuerst mit einem einzelnen Datum und dann mit einer Spanne. Achten Sie darauf, wie unterschiedlich bequem sich jede Antwort anfühlt. Die Moderation sollte festhalten, was das Team wissen müsste, um die Spanne ehrlich anzugeben, etwa Historie, Elementgröße und bekannte Risiken.

**2. Wie viel unserer Kapazität geht wirklich in geplante Änderung, und woher wissen wir es?**
Sehen Sie sich die fertige Arbeit der letzten drei Monate nach Typ an. Vergleichen Sie mit dem Plan, den das Team gemacht hat. Das Gespräch zeigt oft, dass die Betriebsarbeit größer ist als geplant und die Verbesserungsarbeit kleiner. Einigen Sie sich, wie die Verteilung aussehen sollte und welche Entscheidung sie ändern würde.

**3. Wo helfen uns unsere Schätzungen, und wo kosten sie nur Zeit?**
Tragen Sie eine Stichprobe von Schätzungen gegen die tatsächlichen Zykluszeiten auf. Besprechen Sie, ob größere Schätzungen wirklich langsamer waren. Ist der Zusammenhang schwach, fragen Sie, was das Team anders täte, wenn es nur Elemente zählte. Entscheiden Sie, ob Sie das Schätzen fortsetzen, vereinfachen oder probeweise einstellen.

**4. Wer sieht unsere Planungszahlen auf Teamebene, und was geschieht dort mit ihnen?**
Verfolgen Sie jede Planungszahl vom Team bis zu ihrem Publikum. Fragen Sie, ob jemand damit Teams vergleicht oder Ziele setzt. Wenn ja, besprechen Sie, wie das aufzuhalten ist und was stattdessen angeboten wird. Die Moderation sollte bereit sein zu erklären, dass lokale Zahlen ihren Wert verlieren, wenn sie wandern.

**5. Wann ist eine Prognose von uns gescheitert, und was haben wir gelernt?**
Wählen Sie ein Verfehlen und verfolgen Sie es zurück. War es Umfangsänderung, ein großer Incident, eine Abhängigkeit oder eine falsche Annahme? Was hätte es früher angezeigt? Einigen Sie sich auf eine Änderung der Prognosepraxis, etwa Abhängigkeiten zu erfassen oder die Prognose wöchentlich zu aktualisieren.

**6. Welche Ziele haben wir letztes Quartal erreicht, und wer hat das gesagt?**
Listen Sie die Lieferziele auf und wer jedes beurteilt hat. Hat das Team seine eigenen Ziele beurteilt, besprechen Sie, wie Stakeholder einzubinden sind. Das Gespräch stützt die kontinuierliche Zusammenarbeit und zeigt, ob Ziele sich auf Ergebnisse oder auf Aufgaben beziehen.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams besitzen die Prognose und die Flussdaten, die sie stützen. Sie sollten Spannen veröffentlichen, Elemente klein halten und neu prognostizieren, wenn sich Fakten ändern. Teams, die Arbeit in Punkten bemessen wollen, sollten die Zahlen im Team behalten. Ziel ist ein steter Strom fertiger, wertvoller Arbeit und eine Prognose, der Stakeholder vertrauen, weil sie eine Erfolgsbilanz hat.

### Service- und Betriebsteams

Betriebsteams tragen die Nachfrage, die Pläne stört. Sie sollten Incident- und Anfragelast mit Lieferteams teilen, damit Kapazitätspläne bei echten Zahlen beginnen. Betriebsteams, die auch Änderungen liefern, können dieselbe flussbasierte Prognose für ihre eigene Arbeit nutzen. Gemeinsame Planung von Change- und Betriebsarbeit ist ein guter Ort für kontinuierliche Zusammenarbeit über beide Gruppen.

### Führung und Governance

Führungskräfte entscheiden, ob eine Prognose eine Risikoaussage oder ein Versprechen ist. Sie sollten Spannen anfordern, Spielraum und Verbesserung finanzieren und der Verwendung von Velocity oder Durchsatz zum Teamvergleich widerstehen. Governance-Gremien sollten die Treffsicherheit der Prognose im Zeitverlauf und die Zielergebnisse betrachten und wiederholte Verfehlungen als Signal über das System behandeln, etwa Abhängigkeiten und operative Last, nicht über die Menschen.

### Kunden und Nutzer

Nutzer interessiert, wann sie die Änderung sehen und ob sie ihnen hilft. Eine Spanne mit angegebener Konfidenz dient ihnen besser als ein Datum, das rutscht. Sie sollten in die Beurteilung eingebunden werden, ob Ziele erreicht wurden, denn sie sind es, die das Ergebnis spüren. Nutzern zu sagen, wenn sich eine Prognose ändert, und warum, gehört dazu, sie als Mitwirkende zu behandeln.

## In der Praxis: ein Beispiel aus dem Service-Management

Das digitale Team eines regionalen Energieversorgers baut ein Kundenportal für die Abrechnung und betreibt es in Produktion. Die Zahlen unten sind illustrativ.

Die Stakeholder haben das Team um ein Datum für eine neue Ratenzahlungsfunktion aus 22 Elementen gebeten. Im letzten Quartal nannte das Team ein festes Datum auf Basis seiner Schätzungen, verfehlte es wegen zweier Major Incidents um fünf Wochen und verlor das Vertrauen der Stakeholder. Diesmal zieht die Lieferleiterin den Durchsatz der letzten 20 Wochen, der zwischen 3 und 9 Elementen pro Woche liegt, mit einem Median von 6, und stellt fest, dass etwa 35 Prozent der fertigen Elemente auf Betriebsarbeit entfielen.

Sie führt aus der Historie eine Simulation durch. Sie zeigt, dass die 22 Elemente in etwa der Hälfte der Fälle innerhalb von 4 Wochen fertig werden, in etwa 85 Prozent der Fälle innerhalb von 6 Wochen und in etwa 95 Prozent der Fälle innerhalb von 8 Wochen. Sie stellt den Stakeholdern diese drei Daten vor, zusammen mit den Annahmen: unveränderte Teamgröße, operative Last wie in den letzten 20 Wochen und kein neuer Umfang. Ein Product Owner fragt nach einem Start zu einem bestimmten Abrechnungsdatum in acht Wochen. Team und Stakeholder einigen sich, auf das 85-Prozent-Datum zu planen, die letzten zwei Wochen als Puffer zu halten und alle zwei Wochen einen Kontrollpunkt zur Neuprognose zu setzen.

Beim ersten Kontrollpunkt hat ein Fehler im Zahlungs-Gateway drei Tage gekostet, und die Simulation verschiebt das 85-Prozent-Datum um eine Woche. Das Team sagt es den Stakeholdern am selben Tag mit dem Grund, und sie einigen sich, ein Element von geringem Wert herauszunehmen. Die Funktion geht am Puffer-Datum live. Das Lieferziel, „Kunden können eine Ratenzahlung einrichten, ohne anzurufen“, wird nach drei Wochen vom Product Owner und einem Kundenpanel beurteilt. Es ist für die meisten Kunden erreicht, und ein Kommentarthema zeigt Verwirrung bei einem Bildschirm, der in den Backlog kommt. Das Team hält fest, dass seine Treffsicherheit der Prognose im Quartal vier von fünf beträgt. Die Stakeholder bitten die Lieferleiterin, zur nächsten Planungssitzung Prognosespannen mitzubringen, und das Team gibt die Nutzung von Story Points auf, weil das Zählen von Elementen dieselbe Antwort ergab.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Planen Sie aus dem Fluss fertiger Arbeit und überarbeiten Sie oft mit Stakeholdern, mit Spannen statt Daten. Eine gute Praktik ist, mit der eigenen Durchsatzhistorie des Teams zu prognostizieren und die Spanne in jedem regelmäßigen Review zu zeigen. Zu beachten ist, dass jede teamlokale Planungszahl wie Velocity zum Ziel wird, sobald sie über Teams verglichen wird.

### KI

KI-Unterstützung kann den Durchsatz schnell und ungleichmäßig verändern, was alte Historie eine Zeit lang zu einem schlechten Führer macht. Markieren Sie die Daten der Einführung von KI-Werkzeugen im Durchsatzdiagramm, weiten Sie die Prognosespanne nach der Änderung und koppeln Sie die Treffsicherheit der Prognose mit Nacharbeit. Zu beachten ist, dass von KI erzeugte Schätzungen präzise aussehen; behandeln Sie sie als Eingabe für Diskussion und prüfen Sie sie gegen die eigene Aufzeichnung des Teams.

### Automatisierung

Berechnen Sie Prognosen automatisch aus Tracker-Daten, damit sie sich ohne Meeting aktualisieren. Verfolgen Sie die Genauigkeit dieser Prognosen als Kennzahl der Prognosemethode. Zu beachten ist, dass eine automatische Prognose ohne ihr Intervall falsche Zuversicht weckt; zeigen Sie die Spanne also standardmäßig.

### Analytik

Nutzen Sie Simulation oder perzentilbasierte Spannen aus vergangenem Durchsatz und berichten Sie die Treffsicherheit der Prognose mit der Zahl der Prognosen dahinter. Die Entscheidung, die dies untermauert, ist, was zugesagt wird und wann neu zu planen ist. Zu beachten ist, dass Prognosen scheitern, wenn sich Umfang oder Kapazität verschieben; verfolgen Sie daneben die Rate der Umfangsänderung.

## Branchenperspektive

**Startup.** Prioritäten ändern sich schnell, halten Sie Prognosen also kurz und grob. Verfolgen Sie den Durchsatz von Beginn an, denn er kostet nichts, und geben Sie den Gründern Spannen. Widerstehen Sie dem Import eines für große Teams gebauten Planungssystems.

**Kleinunternehmen.** Eine oder zwei Personen leisten Change- und Betriebsarbeit womöglich zusammen, ohne freie Kapazität. Seien Sie ausdrücklich über die Aufteilung und sagen Sie der Inhaberin oder dem Inhaber, wenn ein Incident ein Datum verschiebt. Eine einfache wöchentliche Zählung fertiger Elemente genügt.

**Großunternehmen.** Viele Teams und Abhängigkeiten machen Prognosen vom Fluss anderer Teams abhängig. Prognostizieren Sie jedes Team aus seinen eigenen Daten, machen Sie Abhängigkeiten sichtbar und kombinieren Sie Spannen sorgfältig, denn das Addieren bester Fälle ergibt eine irreführende Summe. Vermeiden Sie Verdichtungen, die Teams nach Velocity vergleichen.

**Behörden und öffentlicher Sektor.** Feste Budgets, Beschaffung und gesetzliche Termine erzeugen Druck für Zusagen auf ein einzelnes Datum. Nennen Sie das vom gewählten Perzentil gestützte Datum, erklären Sie die Annahmen und halten Sie Umfangsabwägungen offen fest. Wo ein verbindliches Datum existiert, planen Sie den Umfang passend dazu (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind gering. Durchsatz- und Zykluszeitdaten existieren meist im Arbeits-Tracker des Teams. Eine Prognose-Tabelle oder ein kleines Skript ist in einem Tag gebaut, und eine Prognose ist in Minuten aktualisiert. Die laufenden Kosten sind die Zeit, Prognosen und Ergebnisse zu protokollieren und ein kurzes Kontrollpunkt-Gespräch mit Stakeholdern zu führen.

Der Ertrag kommt aus weniger Überraschungen und besseren Entscheidungen. Stakeholder, die das Risiko verstehen, können früh einen Puffer wählen, den Umfang anpassen oder Arbeit umordnen. Teams verbringen weniger Zeit mit Schätzzeremonien, wenn das Zählen von Elementen ebenso dient. Konflikte um verpasste Termine und die Qualitätsabkürzungen, die sie provozieren, nehmen ab. Bauen Sie den Business Case auf Ihrer eigenen Aufzeichnung: dem Anteil der Prognosen, die hielten, der für Schätzen aufgewendeten Zeit und den früh statt spät vorgenommenen Umfangsänderungen. Borgen Sie keine Vorhersagbarkeitszahlen von anderen Organisationen.

## Anti-Muster und Fallstricke

- **Eine Prognose als Zusage behandeln.** Es macht die Prognose zum Ziel, und Ehrlichkeit wird teuer. Präsentieren Sie Spannen und überarbeiten Sie sie.
- **Teams nach Velocity vergleichen.** Punkte sind lokal, und Vergleich bläht sie auf. Vergleichen Sie ein Team nur mit seiner eigenen Vergangenheit.
- **Auf volle Auslastung planen.** Schwankung wird zu Verzögerung. Lassen Sie Spielraum.
- **Betriebsarbeit ignorieren.** Pläne scheitern an der Last, die niemand eingeplant hat. Messen und planen Sie die Verteilung.
- **Ein einzelnes Datum für alles verwenden.** Nutzen Sie Perzentile und sagen Sie, welches Sie gewählt haben.
- **Genauer schätzen, als die Daten stützen.** Detaillierte Schätzungen für ferne Arbeit sind am unzuverlässigsten. Prognostizieren Sie ferne Arbeit grob.
- **Ein Velocity- oder Durchsatzziel setzen.** Die Zahl wird steigen und der Wert nicht.
- **Prognosen nie bewerten.** Ohne Erfolgsbilanz kann Vertrauen nicht wachsen.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Prognosemethode | Schätzungen eines einzelnen Datums | Von Hand summierte Schätzungen | Flussbasierte Spannen mit Perzentilen | Prognosen protokolliert und bewertet; Methode anhand der Treffsicherheit abgestimmt | Prognosen verbinden sich über Teams und Abhängigkeiten, live mit Stakeholdern geteilt |
| Kapazitätsplanung | Pläne ignorieren Betriebsarbeit | Operative Last grob bekannt | Kapazität aus Daten nach Arbeitstyp verteilt | Verteilung an Ergebnissen überprüft; Verbesserungszeit geschützt | Kapazität gemeinsam mit Lieferanten und Betrieb über Services geplant |
| Ziele und Nutzung von Zahlen | Ziele sind Aufgabenlisten | Ziele aufgeschrieben | Ziele mit Stakeholdern nach Ergebnis beurteilt | Verfehlungen als Systemsignale analysiert; lokale Zahlen privat gehalten | Ziele gemeinsam mit Nutzern gesetzt und beurteilt; Lernen teamübergreifend geteilt |

## Checkliste

- [ ] Prognosen werden aus der eigenen Durchsatz- und Zykluszeithistorie des Teams gebaut.
- [ ] Prognosen werden als Spannen mit Perzentilen angegeben, mit genannten Annahmen.
- [ ] Jede Prognose wird mit ihrer Spanne und dem tatsächlichen Ergebnis protokolliert.
- [ ] Treffsicherheit der Prognose und Spannenbreite werden monatlich überprüft.
- [ ] Kapazität wird nach Arbeitstyp verteilt, einschließlich Betriebsarbeit und Verbesserung.
- [ ] Die geplante Auslastung lässt Spielraum für Schwankung und Incidents.
- [ ] Jede Bemessungseinheit oder Velocity ist teamprivat und trägt kein Ziel.
- [ ] Lieferziele sind als Ergebnisse geschrieben und werden mit Stakeholdern beurteilt.
- [ ] Umfangsänderungen werden mit Gründen erfasst.
- [ ] Prognosen werden aktualisiert, wenn sich Fakten ändern, und Stakeholder werden informiert.

## KI-Prompts

**Eine durchsatzbasierte Prognose bauen.**

```text
Our team finished these numbers of items in each of the last [number] weeks:
[paste weekly counts]. We want to know when [number] items are likely to be
finished. Explain how to produce a probability range using our own history,
give a worked example of a simple simulation method, and describe what
assumptions it makes. Do not invent history or benchmark values. List your
assumptions and the conditions under which the forecast would not apply.
```

**Prüfen, wie wir Schätzungen nutzen.**

```text
We size items as [unit] and use [practice] to plan. Here is a sample of
[number] finished items with estimates and actual cycle times in days:
[paste data]. Describe whether estimates predict cycle time in this sample,
what that implies for how much effort estimating deserves, and what we could
try instead. Do not claim results beyond the data. List your assumptions.
```

**Kapazität über Change- und Betriebsarbeit planen.**

```text
Over the last [period], our team finished [counts] items of these types:
[planned change, incidents, requests, improvement]. Propose a capacity
allocation for the next [period] that leaves slack, and describe how to
explain it to stakeholders. Suggest how to detect if operational work is
being mislabeled. Do not invent industry ratios. List your assumptions.
```

**Ein Prognose-Review mit Stakeholdern entwerfen.**

```text
Draft an agenda and a one-page summary for a forecast checkpoint on
[piece of work]. Data: original forecast [range], current status [description],
changes since the last checkpoint [list]. Include the updated range, what
changed it, options for scope or timing, and the questions we need
stakeholders to answer. Use plain language. List your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Prognose- oder Planungskennzahl zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein überarbeiteter Planungskennzahleneintrag Manipulationsvektor und Leitplanke behält.

## Wichtigste Erkenntnisse

- Prognostizieren Sie aus dem Fluss fertiger Arbeit und geben Sie Spannen mit Wahrscheinlichkeiten statt einzelner Daten an.
- Planen Sie gegen echte Kapazität, einschließlich Betriebsarbeit, Verbesserungszeit und Spielraum.
- Behandeln Sie jede Schätzeinheit oder Velocity als private Hilfe eines Teams, nie als Ziel oder Vergleich.
- Bewerten Sie Ihre Prognosen: Die Treffsicherheit schafft Vertrauen.
- Beurteilen Sie Lieferziele nach Ergebnis, gemeinsam mit Stakeholdern und Nutzern.
- Vertrauen Sie dem Team und unterstützen Sie es: Ehrliche Prognosen kommen von Menschen, die für Unsicherheit nicht bestraft werden.

## Quellen und weiterführende Literatur

1. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Humble, J., and Farley, D., *Continuous Delivery*, Addison-Wesley, 2010.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Cohn, M., *Agile Estimating and Planning*, Prentice Hall, 2005.
6. Kahneman, D., and Tversky, A., "Intuitive prediction: biases and corrective procedures," *TIMS Studies in Management Science*, 12, 1979.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
9. Wikipedia, [Story point](https://en.wikipedia.org/wiki/Story_point).
10. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
11. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
12. Wikipedia, [Cone of Uncertainty](https://en.wikipedia.org/wiki/Cone_of_Uncertainty).
13. Wikipedia, [Planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method).
