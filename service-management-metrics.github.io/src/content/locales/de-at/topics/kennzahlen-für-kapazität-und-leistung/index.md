# Kennzahlen für Kapazität und Leistung

**Messen Sie, wie voll ein Service ist, wie langsam seine langsamsten Anfragen sind und wie viel Raum bleibt, bevor Nutzer es bemerken, und prognostizieren Sie dann die Nachfrage mit Spannen, damit Kapazität vor dem Bedarf eintrifft und nicht erst nach der Beschwerde.**

## Überblick und Motivation

Verfügbarkeit sagt Ihnen, ob ein Service antwortet. Kapazität und Leistung sagen Ihnen, wie gut er antwortet und wie lange er das tun wird, während die Nachfrage wächst. Eine Checkout-Seite, die in acht Sekunden antwortet, ist nach den meisten Verfügbarkeitsdefinitionen „oben“ und nach der Definition jedes Kunden „kaputt“. Eine Datenbank bei 95 Prozent ihres Speichers ist heute gesund und nächsten Monat ein Ausfall. Dieses Thema behandelt die Kennzahlen, die diese Lücken schließen.

[Kapazitätsplanung](https://en.wikipedia.org/wiki/Capacity_planning) ist die Praxis, die Ressourcen zu bestimmen, die ein Service braucht, um wechselnde Nachfrage zu bedienen. In ITIL 4 sitzt sie in der Praktik des Kapazitäts- und Leistungsmanagements, die sicherstellen soll, dass Services vereinbarte und erwartete Leistung erreichen und aktuelle und künftige Nachfrage kosteneffizient befriedigen. Die Praktik beschreibt dies auf drei Ebenen: dem Geschäft (was die Organisation von ihren Services verlangen wird), dem Service (wie sich ein Service unter Last verhält) und der Komponente (wie sich jeder Server, jede Datenbank, jede Netzwerkverbindung oder Warteschlange verhält). Die Kennzahlen in diesem Thema arbeiten überwiegend auf Service- und Komponentenebene, und sie brauchen Eingaben von der Geschäftsebene, um irgendetwas zu prognostizieren.

[Site Reliability Engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) behandelt Latenz, Verkehr, Fehler und Sättigung als die vier Signale, die bei jedem nutzerseitigen System beobachtenswert sind, und bindet Leistungsziele an Service Level Objectives (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets). Agile Teams begegnen Kapazität als Lieferfrage: Kann das nächste Release die erwartete Last tragen, und wer besitzt die Antwort? Leistung als Akzeptanzkriterium zu behandeln, in der Pipeline geprüft, verlegt das Gespräch nach vorn.

Mehrere Begriffe kehren in diesem Thema wieder. **Auslastung** ist der Anteil der Kapazität einer Ressource, der über ein Intervall in Gebrauch ist, zum Beispiel der Anteil der ausgelasteten Prozessorzeit. **Sättigung** ist die Menge an Arbeit, die wartet, weil eine Ressource voll genutzt ist, zum Beispiel die Länge einer Run-Queue oder eines Anfrage-Rückstaus. Auslastung sagt, wie beschäftigt eine Ressource ist. Sättigung sagt, ob Arbeit auf sie wartet, und Warteschlangen sind es, die Nutzer spüren. **[Latenz](https://en.wikipedia.org/wiki/Latency_(engineering))** ist die Zeit zwischen einer Anfrage und ihrer Antwort. **[Durchsatz](https://en.wikipedia.org/wiki/Throughput)** ist die Rate, mit der ein Service Arbeit abschließt, zum Beispiel Anfragen pro Sekunde. **Spielraum (Headroom)** ist die Lücke zwischen der aktuellen Spitzenlast und der Last, bei der der Service seine Objectives nicht mehr erfüllt. **Nachfrage** ist die Arbeit, die Nutzer und das Geschäft vom Service verlangen, was nicht dasselbe ist wie die Arbeit, die er abschließt: Ein überlasteter Service schließt weniger ab, als verlangt wurde.

Eine Eigenschaft von Warteschlangen erklärt, warum sich diese Kennzahlen so verhalten. Die [Warteschlangentheorie](https://en.wikipedia.org/wiki/Queueing_theory) zeigt, dass bei einem Service mit zufälligen Ankünften die Wartezeit bei mäßiger Auslastung langsam wächst und dann steil steigt, wenn sich die Auslastung der vollen Nutzung nähert. [Little's Gesetz](https://en.wikipedia.org/wiki/Little%27s_law) setzt die durchschnittliche Zahl der Anfragen in einem System in Beziehung zur Ankunftsrate und der durchschnittlichen Zeit, die jede dort verbringt. Eine Ressource mit hoher durchschnittlicher Auslastung ist nah an einer Klippe. Die genaue Form der Kurve hängt vom Service ab, finden Sie sie also durch Testen Ihres eigenen Systems mit [Lasttests](https://en.wikipedia.org/wiki/Load_testing), statt eine Schwelle aus einem allgemeinen Artikel zu borgen.

Latenz braucht besondere Sorgfalt, weil der Durchschnitt das Erlebnis verbirgt, auf das es ankommt. Ein [Perzentil](https://en.wikipedia.org/wiki/Percentile) nennt den Wert, unter dem ein gegebener Anteil der Beobachtungen liegt: Das 95. Perzentil (p95) ist die Latenz, die 95 Prozent der Anfragen unterbieten. [Tail-Latenz](https://en.wikipedia.org/wiki/Tail_latency) dominiert tendenziell in Systemen, in denen sich eine Nutzeraktion in viele interne Aufrufe auffächert. Berichten Sie Perzentile statt nur des Mittelwerts (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen, und Thema 3.3, Reaktions- und Lösungszeit bei Incidents, das dasselbe Argument für die Lösungszeit führt).

Schließlich hängt Kapazität von der [Prognose](https://en.wikipedia.org/wiki/Forecasting) der Nachfrage ab, und Nachfrage hat Muster: Tageszyklen, Wochenzyklen und [Saisonalität](https://en.wikipedia.org/wiki/Seasonality), gebunden an Kalender, Kampagnen und Produkteinführungen. [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling) verändert, wie sich das anfühlt, da Cloud-Plattformen binnen Minuten Ressourcen hinzufügen können, aber es beseitigt das Thema nicht. Autoscaling hat Grenzen, eine Verzögerung, Kosten und Abhängigkeiten, die nicht skalieren, etwa eine Datenbank oder eine Schnittstelle eines Dritten. Die Kostenseite gehört zu FinOps (siehe Thema 7.6, Kennzahlen für FinOps und Cloud-Kosten).

Benachbarte Themen behandeln die Arithmetik der Verfügbarkeit (siehe Thema 5.3, Verfügbarkeitskennzahlen), den Entwurf von Alarmen (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität) und die Last der Rotation (siehe Thema 5.7, Kennzahlen für Toil und Bereitschaftsdienst). Hier ist der Gegenstand der Service mit seinen eigenen Ressourcen und Antwortzeiten.

## Leitprinzipien

- **Sättigung ebenso messen wie Auslastung.** Auslastung zeigt, wie beschäftigt eine Ressource ist, und Sättigung zeigt, ob Arbeit wartet. Nutzer erleben das Warten.
- **Latenz als Verteilung berichten.** Nutzen Sie Perzentile je nutzerseitiger Operation und halten Sie den langsamen Schwanz sichtbar. Ein Durchschnitt einer schiefen Verteilung beschreibt fast niemanden.
- **Ziele an das Nutzererlebnis binden.** Eine Schwelle ist aussagekräftig, wenn sie auf etwas zurückgeht, das einen Nutzer oder das Geschäft kümmert, nicht auf das, was ein Werkzeug zufällig zeichnet.
- **Mit Spannen planen und sie überprüfen.** Eine Prognose ist eine Spanne mit genannten Annahmen. Vergleichen Sie sie mit dem, was geschah, und lernen Sie aus dem Fehler.
- **Grenzen durch Tests kennen.** Kapazität ist eine Hypothese, bis ein realistischer Lasttest sie bestätigt. Wiederholen Sie den Test nach Änderungen, die zählen.
- **Systeme beschreiben, nie Menschen.** Diese Kennzahlen gehören zu Services, Komponenten und Teams. Sie sind nie eine Punktetafel für Einzelpersonen.
- **Kosten gegen Risiko abwägen.** Ungenutzte Kapazität kostet Geld, und fehlende Kapazität kostet Kunden. Machen Sie die Abwägung sichtbar, damit sie gewählt wird und nicht hineingedriftet.

## Kennzahlendefinitionen

Die Tabelle listet sieben Kennzahlen. Die Uhren und Grenzen sind in jeder Formel genannt. Perzentilbasierte Kennzahlen nutzen ein festes Fenster, im Register genannt, und werden aus rohen Beobachtungen oder Histogrammen berechnet, nie als Durchschnitt von Durchschnitten.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ressourcenauslastung | Anteil der Kapazität einer Ressource in Gebrauch über ein Intervall, als hohes Perzentil der Intervallreihe berichtet | ausgelastete Kapazität / Gesamtkapazität, je Intervall von 1 bis 5 Minuten; Median und 95. Perzentil über das Review-Fenster berichten; Wartungsfenster, in denen die Ressource entleert ist, sind ausgeschlossen | Prozent | Infrastruktur-Monitoring und Metriken der Cloud-Plattform | Kapazitäts- und Leistungsmanagement; Monitoring und Ereignismanagement | Betriebliche Akzeptanzkriterien in der Definition of Done; SRE-Ressourcensignale | Wöchentlich |
| Sättigung | Menge an Arbeit, die auf eine voll genutzte Ressource wartet | Warteschlangenlänge, Run-Queue, ausstehende Anfragen oder gedrosselte Anfragen, je Intervall; 95. Perzentil und Anteil der Intervalle mit irgendeinem Warten berichten; Intervalle ohne Nachfrage sind ausgeschlossen | Anzahl oder Prozent der Intervalle | Telemetrie von Anwendung und Infrastruktur | Kapazitäts- und Leistungsmanagement; Monitoring und Ereignismanagement | SRE-Sättigungssignal; Limit für Arbeit in Bearbeitung an einer Service-Warteschlange | Wöchentlich |
| Latenzperzentil | Zeit, die zur Beantwortung einer Anfrage einer nutzerseitigen Operation gebraucht wird, berichtet bei Median, p95 und p99 | Antwortzeit vom am Edge empfangenen Request bis zum letzten gesendeten Byte, je erfolgreicher Anfrage; fehlgeschlagene Anfragen werden als Fehler berichtet, nicht als schnelle Antworten; über ein gleitendes Fenster messen | Millisekunden | Logs von Load Balancer oder Gateway, Tracing, Real User Monitoring | Service-Level-Management; Kapazitäts- und Leistungsmanagement | SRE-Latenzindikator und Service Level Objective | Kontinuierlich, wöchentlich überprüft |
| Spielraum | Verbleibende Last, die ein Service tragen kann, bevor er seine Objectives verletzt | (getestete oder modellierte Bruchlast - aktuelle Spitzenlast) / aktuelle Spitzenlast; Spitze ist die geschäftigste Stunde im Fenster; die Bruchlast ist die Last, bei der das Latenz-Objective in einem Test erstmals verletzt wird, nicht das Hardware-Maximum | Prozent, oder Tage bei aktuellem Wachstum | Lasttestergebnisse und Verkehrstelemetrie | Kapazitäts- und Leistungsmanagement; Service-Level-Management | Nichtfunktionale Anforderungen und Leistungstests in der Pipeline | Monatlich und vor größeren Einführungen |
| Prognosefehler | Differenz zwischen prognostizierter und tatsächlicher Nachfrage für einen Zeitraum | absolut (prognostizierte Spitze - tatsächliche Spitze) / tatsächliche Spitze, für einen genannten Horizont; die Prognose wird zu Beginn des Horizonts eingefroren und danach nicht überarbeitet; nicht prognostizierte einmalige Ereignisse werden aufgelistet, nicht entfernt | Prozent | Prognoseregister und Verkehrstelemetrie | Kapazitäts- und Leistungsmanagement; nachfragebezogene Planung im Service-Finanzmanagement | Release- und Roadmap-Prognose; SRE-Nachfrageprognose | Vierteljährlich |
| Durchlaufzeit für Kapazität | Zeit, die gebraucht wird, neue Kapazität in Dienst zu stellen, sobald der Bedarf akzeptiert ist | Die Uhr startet, wenn die Kapazitätsanfrage genehmigt wird, und stoppt, wenn die Kapazität Produktionsverkehr trägt; Median und 85. Perzentil berichten; stornierte Anfragen sind ausgeschlossen | Tage | Anfragedatensätze im ITSM-Werkzeug, Change-Datensätze, Provisionierungs-Logs | Kapazitäts- und Leistungsmanagement; Management von Serviceanfragen; Change-Befähigung | Durchlaufzeit für ein Plattform-Backlog-Element (siehe Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz) | Vierteljährlich |
| Abdeckung durch Leistungstests | Anteil kritischer Services mit einem aktuellen, realistischen Lasttest | kritische Services mit einem bestandenen Lasttest, jünger als ein genanntes Alter, auf einer repräsentativen Umgebung und Last / kritische Services im Register; die Altersgrenze ist aufgeschrieben | Prozent | Speicher der Testergebnisse und Serviceregister | Kapazitäts- und Leistungsmanagement; Release-Management | Nichtfunktionale Tests in der Pipeline der kontinuierlichen Auslieferung | Vierteljährlich |

Zusammen beantworten sie vier Fragen: wie voll ist es, wie langsam ist es, wie viel Raum bleibt, und wie schnell können wir reagieren, wenn sich die Antwort ändert.

## Empfehlungen

### Beim Nutzer beginnen, dann bei der Ressource

**1. Wählen Sie die wenigen Operationen, die Nutzern wichtig sind, und messen Sie diese.** Ein Service hat Hunderte Endpunkte und eine Handvoll Reisen, auf die es ankommt, etwa Anmelden, Suchen, Bezahlen und einen Kontoauszug herunterladen. Einigen Sie sich darauf mit Product Ownern und Kunden und setzen Sie für jede eine Latenzerwartung. Sie verbinden sich natürlich mit Service Level Indicators (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets).

**2. Koppeln Sie jedes Ressourcendiagramm mit einem Sättigungsdiagramm.** Die Prozessorauslastung allein zu zeigen lädt zu der falschen Beruhigung „es erreichte nur 70 Prozent“ ein. Fügen Sie die Warteschlange, die wartenden Anfragen oder die Drosselungszahl daneben hinzu. Erscheint Sättigung, bevor die Auslastung alarmierend aussieht, haben Sie die wahre Beschränkung gefunden, und diese Beschränkung ist oft nicht die Ressource, die Sie beobachteten, etwa ein Verbindungspool, ein Thread-Limit oder ein Ratenlimit einer Partnerschnittstelle.

**3. Bevorzugen Sie den geschäftigen Schwanz vor dem ruhigen Durchschnitt.** Tagesdurchschnitte mischen die tiefe Nacht mit der Mittagsspitze. Schauen Sie auf die geschäftigste Zeit und erfassen Sie Datum und Ursache der schlimmsten Intervalle. Die Planungsfrage ist, wie sich der Service in seiner schlimmsten erwarteten Stunde verhält.

### Latenz ehrlich berichten

**4. Veröffentlichen Sie Perzentile je Operation und nennen Sie das Fenster.** Nennen Sie Median, p95 und p99 für jede wichtige Operation über ein gleitendes Fenster und sagen Sie, welche Anfragen enthalten sind. Mitteln Sie Perzentile nie über Server oder Operationen, denn das Ergebnis entspricht keinem echten Nutzererlebnis; kombinieren Sie stattdessen Histogramme oder die rohen Beobachtungen. Ist die Stichprobe klein, sagen Sie es, denn ein p99 aus wenigen hundert Anfragen ist eine verrauschte Zahl (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

**5. Messen Sie dort, wo der Nutzer ist, ebenso wie dort, wo der Server ist.** Serverseitige Zeitmessungen lassen das Netzwerk, den Browser und das Gerät aus. Fügen Sie Real User Monitoring oder synthetische Prüfungen hinzu, damit Sie ein langsames Backend von einer langsamen letzten Meile unterscheiden können.

**6. Zählen Sie Fehler und Timeouts mit der Latenz, nicht statt ihrer.** Ein Service, der schnell fehlschlägt, sieht in einem Latenzdiagramm schnell aus, und ein Service mit Timeouts sieht aus dem falschen Grund langsam aus. Berichten Sie die Fehlerrate mit dem Latenzperzentil, damit ein schneller Fehlschlag das Ergebnis nicht schönen kann.

### Die Grenzen finden, dann Raum lassen

**7. Testen Sie den Bruchpunkt mit Absicht.** Führen Sie Lasttests durch, die einen realistischen Mix von Operationen wiedergeben, die Last hochfahren und festhalten, wo das Latenz-Objective erstmals verletzt wird und welche Ressource zuerst sättigt. Testen Sie auf einer Umgebung, die der Produktion in den Punkten ähnelt, auf die es ankommt, und schreiben Sie auf, in welchen nicht. Ein fehlgeschlagener Test an einem sicheren Ort ist der billigste Incident, den Sie haben werden (siehe Thema 4.5, Kennzahlen für Releases und Deployments, für Prüfungen in der Pipeline).

**8. Setzen Sie den Spielraum als Richtlinie und überprüfen Sie ihn als Abwägung.** Entscheiden Sie, wie viel Marge ein Service über seiner erwarteten Spitze hält und warum. Kritische kundenseitige Services rechtfertigen mehr, interne Batch-Services weniger. Die Zahl ist eine geschäftliche Wahl über Kosten und Risiko, halten Sie also die Begründung fest und überprüfen Sie sie, wenn sich die Kosten eines Ausfalls oder der Preis der Kapazität ändern. Kopieren Sie keine Zahl einer anderen Organisation.

### Nachfrage mit den Menschen prognostizieren, die sie kennen

**9. Fragen Sie das Geschäft, was kommt, und schreiben Sie die Prognose auf.** Marketingkampagnen, neue Kunden, regulatorische Fristen und saisonale Ereignisse verändern die Nachfrage lange, bevor der Verkehr es zeigt. Führen Sie ein kurzes Prognoseregister mit Datum, Annahmen, Spanne, Eigner und Quelle jeder Eingabe. Eine Prognose als Spanne, etwa ein niedriger, erwarteter und hoher Fall, ist ehrlicher als eine einzelne Zahl und nützlicher, um zu entscheiden, wie viel zu kaufen ist.

**10. Bewerten Sie die Prognose und nutzen Sie den Fehler, sie zu verbessern.** Vergleichen Sie nach jedem Zeitraum die eingefrorene Prognose mit dem, was geschah, anhand des Prognosefehlers, und listen Sie die Ursachen großer Fehlschätzungen auf. Häufige Ursachen sind eine nicht angekündigte Kampagne, eine Änderung im Nutzerverhalten und eine Abhängigkeit, die sich verschob. Ziel ist nicht ein Fehler von null, der nicht erreichbar ist, sondern zu lernen, welche Eingaben verlässlich sind, und die Spanne zu weiten, wo sie es nicht sind.

### Kapazität leicht hinzufügbar machen

**11. Verkürzen Sie die Durchlaufzeit für Kapazität, bevor Sie Genauigkeit jagen.** Braucht neue Kapazität Wochen, müssen Sie weit im Voraus prognostizieren und mehr Reserve tragen. Braucht sie Minuten, können Sie näher am Bedarf laufen. Schauen Sie auf die Schritte zwischen „genehmigt“ und „trägt Verkehr“, etwa Beschaffung, Genehmigung, Provisionierung, Konfiguration und Test, und beseitigen Sie zuerst die längsten Wartezeiten (siehe Thema 4.3, Kennzahlen für die Change-Befähigung). In ITIL-Begriffen ist dies eine Wahl der Kapazitätsstrategie, der Nachfrage vorauszueilen, sie zu treffen oder ihr hinterherzuhinken; wählen Sie bewusst, je Service.

**12. Behandeln Sie Autoscaling als ein System, das zu messen ist.** Erfassen Sie, wie oft Skalierung auslöst, wie lange neue Kapazität braucht, nützlich zu werden, wie oft sie ihr konfiguriertes Maximum erreicht und was sie kostet. Ein Autoscaler, der an seiner Grenze klebt, ist ein Kapazitätsplan, der bereits gescheitert ist. Überprüfen Sie dies mit der Kostensicht, damit Leistung und Ausgaben gemeinsam besprochen werden (siehe Thema 7.5, Servicekosten und Stückökonomie).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Ressourcenauslastung | Über lange Intervalle mitteln, um Spitzen zu verbergen; ungenutzte reservierte Kapazität als „genutzt“ zählen; nur die ruhigsten Ressourcen berichten | 95. Perzentil der Spitzenstunde neben dem Durchschnitt; Sättigungsmessgröße; Liste der Ressourcen im Umfang gegen die Servicekarte überprüft |
| Sättigung | Warteschlangenlimits erhöhen, damit nichts als abgelehnt oder gedrosselt berichtet wird; das Warten in eine andere, nicht gemessene Warteschlange verschieben | Latenzperzentil und Fehlerrate für dieselbe Operation; Ende-zu-Ende-Wartezeit statt einer Stufe; Review aller Warteschlangen im Pfad |
| Latenzperzentil | Nur Mittelwert oder Median berichten; langsame oder fehlgeschlagene Anfragen aus der Stichprobe nehmen; von einem schnellen internen Standort messen; „Ausreißer“ ausschließen | p95 und p99 immer gezeigt; Fehler- und Timeout-Rate neben der Latenz gezeigt; Real User Monitoring mit serverseitiger Zeitmessung verglichen; rohe Stichprobengröße gezeigt |
| Spielraum | Eine sanfte Testlast wählen; eine größere Umgebung als die Produktion testen; den Bruchpunkt als Hardware-Maximum definieren | Testlast gegen die Form des Produktionsverkehrs überprüft; schriftliche Liste der Unterschiede zwischen Test und Produktion; Spielraum nach relevanten Änderungen erneut getestet |
| Prognosefehler | Die Prognose nachträglich überarbeiten; sehr weite Spannen setzen, damit jedes Ergebnis „in der Spanne“ liegt; Monate mit Überraschungen als „nicht prognostizierte Ereignisse“ entfernen | Prognose im Register eingefroren und datiert; Spannenbreite mit dem Fehler berichtet; jedes ausgeschlossene Ereignis aufgelistet und überprüft |
| Durchlaufzeit für Kapazität | Die Uhr später starten, indem Genehmigungsdatensätze verzögert werden; Anfragen schließen, wenn die Bestellung aufgegeben wird, statt wenn die Kapazität Verkehr trägt; Anfragen teilen | Uhr von Genehmigung bis Verkehr definiert; Stichprobe geschlossener Anfragen mit Provisionierungs-Logs verglichen; Zahl wieder eröffneter Anfragen |
| Abdeckung durch Leistungstests | Einen trivialen Test laufen lassen, um Abdeckung zu behaupten; die Liste kritischer Services verkleinern; einen alten bestandenen Test in den Büchern lassen | Testalter und Realismus der Last erfasst; Liste kritischer Services gegen Servicekatalog und Incident-Historie überprüft; fehlgeschlagene Tests ebenso berichtet wie bestandene |

Ein gesunder Befund zeigt Auslastung mit sichtbaren Tageszyklen und Spielraum, Sättigung, die selten und kurz auftritt, Latenzperzentile, die in den geschäftigsten Stunden stabil sind oder sich verbessern, und einen Prognosefehler, der bekannt ist und langsam schrumpft. Das gesunde Zeichen ist, dass Überraschungen mit ihren Ursachen besprochen werden. Perfekte Zahlen sollten Verdacht wecken, denn sie bedeuten meist, dass die Messung sanft ist.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Mit großzügigem Spielraum laufen | Fängt Überraschungen ab; schützt Latenz und Verfügbarkeit | Höhere Kosten; verbirgt Ineffizienz und schwache Prognose |
| Schlank mit schnellem Autoscaling laufen | Niedrigere Kosten; Kapazität folgt der Nachfrage | Hängt von Skalierungsgeschwindigkeit und -grenzen ab; Abhängigkeiten skalieren womöglich nicht; schwerer in einem Incident zu durchdenken |
| Perzentil-Latenzziele | Spiegeln wider, wie sich langsame Anfragen anfühlen; widerstehen Mittelungstricks | Brauchen mehr Daten und größere Stichproben; bei hohen Perzentilen für Services mit wenig Verkehr verrauscht |
| Nur Mittelwert- oder Median-Latenz | Einfach und stabil | Verbirgt den Schwanz, der Beschwerden und Abwanderung treibt |
| Synthetische Lasttests | Kontrolliert, wiederholbar, sicher | Nur so realistisch wie das Lastmodell und die Umgebung |
| Produktionstelemetrie als Grundlage | Spiegelt echtes Verhalten und echten Mix | Zeigt Grenzen erst, wenn sie erreicht sind; kann nicht über die aktuelle Nachfrage hinaus sondieren |
| Detaillierte Prognosemodelle | Erfassen Saisonalität und Wachstum | Erfordern Daten und Können; falsches Gefühl von Genauigkeit bei schwachen Eingaben |
| Einfache, mit dem Geschäft vereinbarte Spannen | Leicht zu erklären und zu aktualisieren; konzentriert sich auf Annahmen | Gröber; hängt von ehrlicher Eingabe des Geschäfts ab |

Wählen Sie die leichteste Methode, die die Entscheidung stützt. Für die meisten Services genügen ein wöchentlicher Blick auf Spitzenstunden-Auslastung, Sättigung und Latenzperzentile, ein Lasttest vor größeren Änderungen und ein vierteljährliches Prognose-Review. Fügen Sie Modellierung hinzu, wo die Kosten eines Irrtums groß sind.

## Fragen für die Diskussion im Team

**1. Welche drei Nutzerreisen sind am wichtigsten, und welche Antwortzeit erwarten Nutzer für jede?**
Bitten Sie die Gruppe, die Reisen zu nennen, und vergleichen Sie dann mit dem, was die Dashboards zeichnen. Die Moderation sollte auf eine Erwartung drängen, die auf einen Nutzer oder Kunden zurückgeht, nicht auf eine technische Vorliebe.

**2. Wo ist unser Service nah an einer Klippe, und woher wissen wir es?**
Suchen Sie nach Ressourcen wie Verbindungspools, Thread-Limits oder einem Ratenlimit eines Partners. Fragen Sie, wann jede zuletzt bis zum Bruchpunkt getestet wurde. Weiß es niemand, ist das die erste Arbeit.

**3. Wie berichten wir Latenz heute, und was würde das langsamste Prozent der Nutzer sagen?**
Zeigen Sie Mittelwert, Median, p95 und p99 für eine Operation nebeneinander und besprechen Sie die Lücke. Fragen Sie, welche Anfragen ausgeschlossen sind und warum und ob fehlgeschlagene Anfragen mitgezählt werden.

**4. Wie viel Spielraum halten wir, wer hat ihn gewählt, und wann haben wir die Wahl zuletzt überprüft?**
Besprechen Sie die Kosten der Marge und die Kosten eines Ausfalls am geschäftigsten Tag. Einigen Sie sich auf ein Review-Datum und die Belege, die die Marge ändern würden.

**5. Wie gut waren unsere letzten drei Nachfrageprognosen, und was haben wir gelernt?**
Vergleichen Sie die datierten Prognosen mit den tatsächlichen Werten und den Ursachen großer Fehlschätzungen. Fragen Sie, was das Geschäft wusste, das der Betrieb nicht erhielt. Entscheiden Sie sich für eine Eingabe, die ins Prognoseregister aufgenommen wird, etwa den Marketingkalender oder einen Einführungsplan.

**6. Wenn wir nächsten Monat doppelte Kapazität bräuchten, was würde uns aufhalten?**
Listen Sie jeden Schritt von der Anfrage bis zum Produktionsverkehr auf und markieren Sie, wo er wartet. Beziehen Sie Beschaffung, Genehmigungen, Lizenzierung und Abhängigkeiten ein, die nicht skalieren. Die Moderation sollte nach der längsten nichttechnischen Wartezeit suchen, denn sie ist oft eine Genehmigung oder ein Vertrag. Einigen Sie sich auf einen zu verkürzenden Schritt und messen Sie die Wirkung über die Durchlaufzeit für Kapazität.

## Vier Perspektiven

### Produkt- und Lieferteams

Nehmen Sie bei Funktionen, die geschäftige Pfade berühren, eine Leistungserwartung in die Akzeptanzkriterien auf, führen Sie, wo praktikabel, einen Lasttest in der Pipeline durch und informieren Sie den Betrieb früh über Einführungen. Achten Sie auf die Gewohnheit, Leistung als spätere „Härtungs“-Aufgabe zu behandeln, die zu ungeplanter Arbeit wird (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit).

### Service- und Betriebsteams

Betriebsteams besitzen die Telemetrie, den Kapazitätsplan und die Reaktion, wenn eine Grenze erreicht wird. Sie brauchen Sättigung und Tail-Latenz auf den Dashboards, die sie tatsächlich nutzen, ein mit dem Geschäft geteiltes Prognoseregister und Testergebnisse, denen vertraut wird. Sie sollten jeden kapazitätsbezogenen Incident mit seiner Ursache erfassen (siehe Thema 4.1, Kennzahlen für das Problemmanagement, und Thema 3.4, Kennzahlen für Major Incidents).

### Führung und Governance

Führungskräfte entscheiden, wie viel Risiko und Kosten die Organisation akzeptiert, und die Spielraum-Richtlinie ist, wo diese Entscheidung sichtbar wird. Verlangen Sie Latenzperzentile und Spielraum je kritischem Service, mit dem Prognosefehler daneben, und behandeln Sie Kapazitätsanfragen als Investitionsentscheidungen, die Belege tragen. Governance-Gremien sollten einem organisationsweiten Auslastungsziel widerstehen, das jeden Service auf denselben Punkt der Klippe schiebt.

### Kunden und Nutzer

Kunden spüren Langsamkeit als Unzuverlässigkeit, lange bevor sich eine Verfügbarkeitszahl ändert. Nennen Sie Leistung in Perzentilen bei genannter Last und teilen Sie mit, wie der Service Spitzenzeiten behandelt (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA, und Thema 6.2, Experience Level Agreements).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler betreibt einen Shop, einen Zahlungsservice und einen Bestellservice, jeder im Besitz eines Produktteams, mit einem Plattformteam, das gemeinsame Infrastruktur bereitstellt. Alle Zahlen in diesem Beispiel sind illustrativ.

Das wöchentliche Review des Plattformteams zeigt die Shop-Suche mit einer medianen Latenz von 180 Millisekunden und einem p95 von 420 Millisekunden, beide im Objective, und die Prozessorauslastung bei einem 95. Perzentil der Spitzenstunde von 58 Prozent. Drei Wochen vor einer geplanten Verkaufsaktion berichtet eine Supportleitung, Kunden sagten, die Seite „kriecht“ bei abendlichen Kampagnen. Das Dashboard ist grün.

Das Team schaut auf das p99 der Suche in der geschäftigsten Stunde der vorigen Aktion und findet 3,1 Sekunden, gegen ein p99-Objective von 1,5 Sekunden. Die Sättigung erzählt den Rest der Geschichte: Der Verbindungspool zur Produktdatenbank zeigt wartende Anfragen in 14 Prozent der Ein-Minuten-Intervalle während der Spitze, während die Prozessorauslastung nie über 60 Prozent stieg. Die Beschränkung war nie der Prozessor. Es war ein Poollimit, gesetzt, als der Verkehr ein Drittel des heutigen betrug.

Der Product Owner und der Plattformleiter führen einen Lasttest mit dem 1,5-Fachen der Spitze des Vorjahres durch, mit dem Produktionsmix der Operationen. Der Test zeigt, dass das p99-Objective beim 1,15-Fachen der Vorjahresspitze verletzt wird, der Spielraum also 15 Prozent beträgt gegen eine Richtlinie von 40 Prozent für kundenseitige Services. Der Marketingkalender legt am Eröffnungstag eine Nachfrage vom 1,6-Fachen der Vorjahresspitze nahe. Die alte, im Register eingefrorene Prognose hatte die Spanne auf 1,2 bis 1,4 gesetzt, und der Fehler gegenüber der Aktion des Vorjahres betrug 22 Prozent, überwiegend durch eine nicht angekündigte E-Mail-Kampagne.

Die im Entscheidungsprotokoll festgehaltene Entscheidung hat vier Teile. Erstens das Poollimit anheben, Lese-Replikas hinzufügen und neu testen. Zweitens dem Release-Prozess eine Checkliste zur Aktionsbereitschaft hinzufügen, damit Kampagnen mindestens sechs Wochen im Voraus ins Prognoseregister gelangen. Drittens p99 und Pool-Sättigung ins wöchentliche Review aufnehmen. Viertens sich mit dem Finanzbereich auf die Kosten der zusätzlichen Kapazität für das Aktionsfenster einigen, mit geplanter Skalierung statt ganzjähriger Reserve.

Nach den Änderungen zeigt ein zweiter Test, dass das p99-Objective bis zum 1,8-Fachen der Vorjahresspitze hält. Das Manipulationsrisiko zeigte sich im Review. Ein Auftragnehmer hatte einen „schnellen Gewinn“ vorgeschlagen: Anfragen, die langsamer als 5 Sekunden sind, aus dem Latenzbericht auszuschließen, mit der Begründung, sie seien Ausreißer. Das Team lehnte ab: Die ausgeschlossenen Anfragen waren genau die Kunden, die sich beschwerten. Die Leitplanke war, Fehler- und Timeout-Raten neben jedes Latenzperzentil zu stellen und die Stichprobengröße zu erfassen. Während der Aktion erreicht das p99 1,2 Sekunden, die Pool-Sättigung bleibt unter 1 Prozent der Intervalle, und der Prognosefehler beträgt 9 Prozent, im Register mit dem Grund für die verbleibende Fehlschätzung erfasst.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Planen Sie Kapazität in kurzen Zyklen mit Produkt-Stakeholdern und nutzen Sie Prognosen als Spannen, die sich mit Daten aktualisieren. Zu beachten ist, dass Überprovisionierung zum Schutz einer Hauptzahl Geld verschwendet.

### KI

KI-Lasten, etwa Modell-Inferenz, haben variable und manchmal teure Nachfrage, und KI-Funktionen können Nutzungsmuster schnell verändern. Verfolgen Sie Latenzperzentile und Kosten je Anfrage für KI-Pfade und koppeln Sie sie mit der Antwortqualität. Zu beachten ist, dass das Trimmen auf Geschwindigkeit die Antwortqualität senken kann; messen Sie also beides.

### Automatisierung

Erfassen Sie Auslastung und Latenz automatisch und automatisieren Sie das Skalieren innerhalb von Grenzen. Messen Sie das Skalieren an Oszillation und an den Kosten, die es hinzufügt. Zu beachten ist, dass Autoscaling Sättigung verbirgt, bis Grenzen erreicht sind; verfolgen Sie also den Spielraum, nicht nur die aktuelle Last.

### Analytik

Zeigen Sie Perzentil-Latenz und Spielraum mit Prognosespannen und der Historie des Prognosefehlers. Die Entscheidung, die dies untermauert, ist, wann Kapazität hinzuzufügen ist. Zu beachten ist, dass Prognosen aus kurzer Historie fragil sind; nennen Sie also das Intervall.

## Branchenperspektive

**Startup.** Der Verkehr ist klein und das Wachstum unsicher, daher schlagen billige Kennzahlen aufwendige. Verfolgen Sie Latenzperzentile für die zwei oder drei Reisen, die Geld verdienen, beobachten Sie die Sättigung der Datenbank und führen Sie vor Einführungen einen einfachen Lasttest durch. Setzen Sie einen Ausgabenalarm, damit ein Fehler oder eine Verkehrsspitze nicht zur Rechnung wird.

**Kleinunternehmen.** Services sind oft gehostet oder gekauft, daher ist Kapazität eine Lieferantensache. Bitten Sie den Lieferanten schriftlich um Leistungs- und Kapazitätsberichte, erfahren Sie, was der Vertrag zu Spitzenzeiten sagt, und beobachten Sie die Sicht des Kunden mit einigen synthetischen Prüfungen. Verfolgen Sie den Spielraum bei dem einen System, auf das das Unternehmen nicht verzichten kann.

**Großunternehmen.** Viele Services teilen Infrastruktur, sodass Kapazitätsprobleme am falschen Ort erscheinen. Investieren Sie in eine Servicekarte, die Services mit den genutzten Komponenten verbindet, einen gemeinsamen Prognoseprozess mit den Geschäftsbereichen und gemeinsame Definitionen von Latenzperzentilen über Teams. Setzen Sie die Spielraum-Richtlinie nach Kritikalität des Services.

**Behörden und öffentlicher Sektor.** Die Nachfrage wird von gesetzlich festgelegten Fristen geprägt, etwa Steuererklärungsterminen, Leistungsanträgen und Wahlen, und Versagen an diesen Tagen ist öffentlich. Prognosen sollten den gesetzlichen Kalender nutzen, und Kapazität für die Spitze muss womöglich Monate im Voraus vertraglich gesichert werden. Beschaffungsdurchlaufzeiten verlängern die Durchlaufzeit für Kapazität, messen Sie sie also und planen Sie darum herum. Öffentliche Berichte über Serviceleistung sollten das Perzentil und die Lastbedingungen nennen (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten haben vier Teile. Der erste ist die Instrumentierung: Telemetrie und ihre Speicherung. Der zweite ist das Testen: eine repräsentative Umgebung und Lastmodelle, die gepflegt werden müssen. Der dritte ist die Planungsroutine: das Prognoseregister führen und den Fehler jedes Quartal überprüfen. Der vierte ist die Reservekapazität selbst, oft der größte Kostenpunkt und der, den auszuweisen sich am meisten lohnt.

Der Ertrag kommt aus weniger kapazitätsbezogenen Incidents, besseren Entscheidungen darüber, wann zu kaufen ist und wann nicht, und vermiedenen Ausgaben für Kapazität, die laut Daten unnötig ist. Versprechen Sie im Voraus keine prozentuale Einsparung. Messen Sie stattdessen Ihr eigenes Muster: die Zahl der Incidents mit Kapazitätsursache pro Quartal, den Anteil der Spitzen, die Notfallmaßnahmen erforderten, die Ausgaben für ungenutzte Kapazität im Verhältnis zur vereinbarten Spielraum-Richtlinie und den Trend im Prognosefehler. Das Google-SRE-Buch behandelt Zuverlässigkeit als wirtschaftliche Entscheidung.

Die Gesamtbetriebskosten werden von Menschen und der Testumgebung dominiert. Ein kleines Team kann mit vorhandenem Monitoring, einem wöchentlichen Review und einem Lasttest für die wichtigste Reise beginnen.

## Anti-Muster und Fallstricke

- **Die durchschnittliche Auslastung als Kapazitätsgeschichte berichten.** Der Durchschnitt verbirgt die Spitze und die Klippe. Berichten Sie das hohe Perzentil der Spitzenstunde und die Sättigungsmessgröße.
- **Mittelwert-Latenz im Führungs-Dashboard.** Der Schwanz treibt die Beschwerden. Zeigen Sie p95 und p99, mit Fehlerraten und der Stichprobengröße.
- **„Ausreißer“ aus der Latenz ausschließen.** Die langsamsten Anfragen sind echte Nutzer. Behalten Sie sie und untersuchen Sie die Ursache, statt die Daten zu beschneiden.
- **Perzentile über Server mitteln.** Das Ergebnis beschreibt niemanden. Kombinieren Sie Histogramme oder rohe Beobachtungen, bevor Sie das Perzentil berechnen.
- **Kapazitätspläne allein aus dem Verkehr des Vorjahres bauen.** Nachfrage hängt von Geschäftsereignissen ab. Beziehen Sie den Geschäftskalender ein und überprüfen Sie den Prognosefehler.
- **In einer Umgebung testen, die der Produktion nicht gleicht.** Ein bestandenes Ergebnis gibt falsche Zuversicht. Erfassen Sie die Unterschiede und korrigieren Sie sie, oder testen Sie sicher in der Produktion.
- **Kapazitätskennzahlen nutzen, um Ingenieure oder Teams zu ordnen.** Auslastung und Latenz beschreiben Systeme. Überprüfen Sie sie in Begriffen von Service-Entwurf und Nachfrage und halten Sie Einzelpersonen aus dem Bild.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Messung von Auslastung, Sättigung und Latenz | Durchschnitte von wenigen Servern; Alarme bei hoher Prozessorauslastung | Einige Teams zeichnen Latenzperzentile und Warteschlangen | Gemeinsame Definitionen: Perzentile je Schlüsseloperation, Sättigung neben Auslastung, Fenster aufgeschrieben | Gegen Objectives im Trend, mit Fehlerraten gekoppelt, wöchentlich überprüft | Definitionen gemeinsam mit Lieferanten und Kunden überarbeitet; nutzer- und serverseitige Sichten abgeglichen |
| Grenzen und Spielraum | Grenzen bis zu einem Fehlschlag unbekannt | Gelegentliche Lasttests vor großen Einführungen | Lasttests auf kritischen Services gegen eine schriftliche Spielraum-Richtlinie | Spielraum je Service verfolgt und nach relevanten Änderungen erneut getestet | Spielraum-Richtlinie aus Kosten-, Risiko- und Incident-Daten über Teams und Lieferanten angepasst |
| Prognose | Ad-hoc-Schätzungen zum Zeitpunkt einer Anfrage | Einzelne Teams halten Prognosen im Kopf oder in Tabellen | Ein gemeinsames Prognoseregister mit Spannen und Eignern, vom Geschäftskalender gespeist | Prognosefehler bewertet und überprüft, mit Ursachen der Fehlschätzungen | Prognosen mit dem Geschäft und Lieferanten erstellt; Eingaben routinemäßig verbessert |
| Kapazitätslieferung | Kapazität nach einem Incident hinzugefügt | Standardanfragen für häufige Fälle | Dokumentierter Weg von Genehmigung bis Produktionsverkehr, Durchlaufzeit für Kapazität gemessen | Längste Wartezeiten mit finanzierter Verbesserung angegangen | Kapazität automatisch innerhalb der Richtlinie hinzugefügt; Skalierungsverhalten und Kosten gemeinsam überprüft |

## Checkliste

- [ ] Die kritischen Nutzerreisen sind benannt, jede mit einer mit ihrem Eigner vereinbarten Latenzerwartung.
- [ ] Latenz wird als Median, p95 und p99 je Operation berichtet, mit genanntem Fenster und genannter Stichprobengröße.
- [ ] Perzentile werden aus Histogrammen oder rohen Beobachtungen berechnet, nie über Server gemittelt.
- [ ] Jedes Auslastungsdiagramm hat ein Sättigungsdiagramm daneben.
- [ ] Fehler- und Timeout-Raten werden neben jedem Latenzperzentil gezeigt.
- [ ] Jeder kritische Service hat einen Lasttest, mit aufgeschriebenen Unterschieden bei Last und Umgebung.
- [ ] Eine Spielraum-Richtlinie existiert je Servicekritikalität, mit erfasster Begründung.
- [ ] Ein datiertes Prognoseregister hält Spannen, Annahmen und Eigner und wird vom Geschäftskalender gespeist.
- [ ] Der Prognosefehler wird jedes Quartal überprüft, mit erfassten Ursachen großer Fehlschätzungen.
- [ ] Die Durchlaufzeit für Kapazität wird von Genehmigung bis Verkehrstragen gemessen.
- [ ] Grenzen, Verzögerung und Kosten des Autoscalings werden mit dem Serviceeigner überprüft.
- [ ] Keine Kapazitäts- oder Leistungsmessgröße wird je Einzelperson berichtet.

## KI-Prompts

**Einen Latenzbericht auf verborgene Verzerrung prüfen.**

```text
Here is how we report latency for [operation or service]: [description of the
measurement point, the window, the statistics shown, and which requests are
included or excluded]. Our users care about [user journey or expectation].
Identify ways this report could understate the experience of the slowest users,
such as averaging, exclusion rules, sampling, or measurement location. Suggest
what to show instead and what additional data I would need. Do not invent
benchmark values or thresholds; ask me for the ones you need. List your
assumptions.
```

**Einen Lasttestplan für einen Service entwerfen.**

```text
I need a load test plan for [service name]. Its main user journeys are
[journeys], its dependencies are [dependencies], and its production traffic mix
is roughly [description of mix]. The test environment differs from production
in these ways: [differences]. Propose a workload model, a ramp pattern, the
measures to record (latency percentiles, error rate, utilization, saturation),
the stop conditions, and the questions the results should answer. Do not
assume tool features or invent target values. List your assumptions and the
risks of the test.
```

**Eine Nachfrageprognose mit dem Geschäft strukturieren.**

```text
I am preparing a capacity forecast for [service] covering [horizon]. Known
inputs: [historical traffic description], [business events and dates], and
[planned changes]. Draft a forecast register layout with low, expected, and high
cases, the assumptions behind each, the owner of each input, and a review
routine that scores forecast error. Suggest questions to ask [business
stakeholders]. Do not invent growth rates or seasonal factors. List your
assumptions.
```

**Aus Symptomen die wahre Beschränkung finden.**

```text
A service shows these symptoms during peak load: [symptoms, for example slow
p99, queue growth, error types]. Utilization data: [summary of resource
utilization]. Saturation data: [summary of queues, pools, throttling].
Architecture notes: [short description]. List the resources and limits that
could be the constraint, the evidence that would distinguish between them, and
the cheapest next test for each. Do not claim a cause that the data does not
support. List your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine Kapazitäts- oder Leistungskennzahl definiert, ihre Uhren und die Leitplanke, die danebengehört.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein bearbeitetes Kapazitäts- oder Leistungsthema jede Kennzahl mit einem Manipulationsvektor und einer Leitplanke gekoppelt hält.

## Wichtigste Erkenntnisse

- Messen Sie Sättigung mit der Auslastung, denn Nutzer spüren die Warteschlange, nicht den Prozentsatz.
- Berichten Sie Latenz als Perzentile je Operation, mit Fehlerraten und Stichprobengröße, und mitteln Sie nie Perzentile.
- Finden Sie Grenzen durch Tests und setzen Sie den Spielraum als erfasste Richtlinie, die Kosten gegen Risiko abwägt.
- Prognostizieren Sie Nachfrage als Spannen mit dem Geschäft, frieren Sie die Prognose ein und lernen Sie aus dem Fehler.
- Verkürzen Sie die Durchlaufzeit für Kapazität und messen Sie Autoscaling, damit Kapazität dem Bedarf folgt.
- Beschreiben Sie Services und Systeme, nie Menschen, und behandeln Sie perfekt aussehende Zahlen als Anlass, die Messung zu prüfen.

## Quellen und weiterführende Literatur

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Google, "Monitoring Distributed Systems," chapter in *Site Reliability Engineering*, 2016, https://sre.google/sre-book/monitoring-distributed-systems/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. Dean, J., and Barroso, L. A., "The Tail at Scale," *Communications of the ACM*, 56(2), 2013.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Gregg, B., *Systems Performance: Enterprise and the Cloud*, 2nd edition, Addison-Wesley, 2020.
7. Allspaw, J., *The Art of Capacity Planning*, O'Reilly Media, 2008.
8. Gunther, N. J., *Guerrilla Capacity Planning*, Springer, 2007.
9. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
10. AXELOS (now PeopleCert), *ITIL 4 Foundation* and the ITIL 4 practice guide for capacity and performance management, 2019 onwards.
11. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Latency (engineering)](https://en.wikipedia.org/wiki/Latency_(engineering)).
14. Wikipedia, [Throughput](https://en.wikipedia.org/wiki/Throughput).
15. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
16. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
17. Wikipedia, [Load testing](https://en.wikipedia.org/wiki/Load_testing).
18. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
19. Wikipedia, [Tail latency](https://en.wikipedia.org/wiki/Tail_latency).
20. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
21. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
22. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
