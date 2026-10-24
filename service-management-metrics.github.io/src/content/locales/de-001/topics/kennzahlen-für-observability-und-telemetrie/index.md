# Kennzahlen für Observability und Telemetrie

**Observability ist die Fähigkeit, einem laufenden Service neue Fragen zu stellen und Antworten aus seinen eigenen Signalen zu erhalten. Messen Sie also, wie viel des Services Sie sehen, wie gut die Signale sind, wie schnell sie zu Verständnis führen und was die Telemetrie kostet, statt Dashboards oder Datenvolumen zu zählen.**

## Überblick und Motivation

[Observability](https://en.wikipedia.org/wiki/Observability_(software)) ist eine Eigenschaft eines Systems: wie gut sich sein innerer Zustand aus den Ausgaben verstehen lässt, die es erzeugt. In der Praxis heißen diese Ausgaben [Telemetrie](https://en.wikipedia.org/wiki/Telemetry) und werden meist in drei Arten gruppiert. **Logs** sind Aufzeichnungen einzelner Ereignisse. **Metriken** sind numerische Messungen über die Zeit, etwa Anfragerate oder Fehlerrate. **Traces** verfolgen eine einzelne Anfrage durch die Teile eines verteilten Systems. Viele Teams fügen Profile, Ereignisse vom Gerät des Nutzers und Geschäftsereignisse hinzu.

Monitoring stellt bekannte Fragen, etwa „liegt die Fehlerrate über einer Schwelle?“, und schlägt Alarm, wenn die Antwort ja lautet. Observability will einem Team erlauben, Fragen zu stellen, die es nicht geplant hat, etwa „warum sind Anfragen aus dieser Region für dieses Kundensegment langsam?“. Beides wird gebraucht. Monitoring wird in früheren Themen behandelt (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität). Dieses Thema behandelt die Qualität der Signale selbst und die Praxis, Systeme aus ihnen zu verstehen.

Telemetrie hat Kosten und Risiken. Alles zu erfassen ist teuer an Speicher und Geld und kann personenbezogene oder vertrauliche Daten einfangen. Zu wenig zu erfassen lässt ein Team bei einem Incident blind. Telemetrie sind auch Daten im Sinn des vorigen Themas (siehe Thema 10.8, Kennzahlen für Analytik und Datenqualität), sie wirft also Fragen zu Vollständigkeit, Aktualität und Herkunft auf. Und wenn KI-Werkzeuge Telemetrie lesen, um Incidents zusammenzufassen und Ursachen vorzuschlagen, entscheidet die Qualität der Signale, ob die Zusammenfassung stimmt.

Hier verwendete Begriffe. Ein **Signal** ist ein Strom von Telemetrie, etwa ein Log, eine Metrik oder ein Trace. **Instrumentierung** ist der Code, der Signale erzeugt. **Kardinalität** ist die Zahl unterschiedlicher Werte eines Labels an einer Metrik, und hohe Kardinalität erhöht die Kosten. Ein **Service-Level-Indikator (SLI)** misst einen Aspekt des Services, wie Nutzer ihn erleben (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets). **Sampling** behält nur einen Anteil der Daten, was Kosten spart und Details verliert. **Aufbewahrung (Retention)** ist, wie lange Daten behalten werden. **Korrelation** bedeutet, Signale, die dieselbe Anfrage oder dasselbe Ereignis beschreiben, über gemeinsame Kennungen zu verknüpfen.

## Leitprinzipien

- **Für Fragen instrumentieren, nicht für Volumen.** Wählen Sie Signale, die Fragen zu Nutzererlebnis und Systemverhalten beantworten.
- **Messen, was man sieht, und was nicht.** Die Abdeckung von Services und Journeys zeigt blinde Flecken.
- **Signale müssen verknüpft sein.** Kennungen, die ein Log, einen Trace und eine Metrik verbinden, machen Verstehen schnell.
- **Telemetrie ist Kosten und Risiko.** Budgetieren Sie sie und halten Sie personenbezogene und vertrauliche Daten heraus, wenn es keinen Grund und keine Regel gibt.
- **Observability dient Menschen.** Messen Sie die Zeit bis zum Verstehen und das Erlebnis der Menschen in Bereitschaft.
- **Offene Standards verringern Lock-in.** Bevorzugen Sie, wo es passt, gemeinsame Formate für Instrumentierung und prüfen Sie aktuelle Spezifikationen.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Instrumentierungsabdeckung | Anteil der Services und kritischen Nutzer-Journeys, die die vereinbarten Kernsignale senden | Services oder Journeys mit Logs, Metriken und Traces nach vereinbartem Standard / Services oder Journeys im Servicekatalog | Prozent | Servicekatalog und Inventar der Telemetrie-Plattform | Monitoring und Ereignismanagement; Service-Konfigurationsmanagement | Definition of Done für neue Services | Vierteljährlich |
| Vollständigkeit der Traces | Anteil der beprobten Anfragen mit einem ununterbrochenen Trace vom Eingang bis zur letzten Abhängigkeit | Anfragen, deren Trace alle erwarteten Hops umfasst / Anfragen in einer geprüften Stichprobe | Prozent | Tracing-Plattform und eine Stichprobenprüfung | Monitoring und Ereignismanagement | Test der Observability in einer Funktion | Monatlich |
| Korrelationsrate der Signale | Anteil der Incidents, bei denen Logs, Metriken und Traces über eine Kennung verbunden werden konnten | Incidents mit funktionierender Verknüpfung in der Zeitleistenprüfung / überprüfte Incidents | Prozent | Incident-Reviews und Tracing-Plattform | Incident-Management; Problemmanagement | Retrospektive-Maßnahmen | Vierteljährlich |
| Zeit bis zum Verstehen | Zeit von der Erkennung bis zu einer erfassten, tragfähigen Erklärung der Ursache | Median und 85. Perzentil von (Zeitpunkt der erfassten ersten tragfähigen Ursache minus Zeitpunkt der Erkennung des Incidents) für Incidents mit erfasster Ursache | Minuten | Incident-Zeitleiste und Review-Notizen | Incident-Management | Schuldfreies Review | Vierteljährlich |
| Telemetriekosten je Service | Einem Service zugeordnete Telemetrieausgaben je Einheit der Nutzung des Services | dem Service zugeordnete Telemetriekosten / eine genannte Nutzungseinheit, etwa 1.000 Anfragen | Währung je Einheit | Telemetrie-Abrechnung und Nutzungsdaten | Finanzmanagement | Kosten als Entwurfseingabe | Monatlich |
| Sensible Daten in der Telemetrie | Zahl bestätigter Datensätze mit Daten, die dort nicht sein sollten | im Zeitraum durch Scan oder Review gefundene bestätigte Fälle | Anzahl | Telemetrie-Scans und -Reviews | Informationssicherheitsmanagement | Definition of Done; Datenschutzreview | Monatlich |
| Incidents in blinden Flecken | Incidents, die zuerst von Nutzern gemeldet wurden, bei denen die Telemetrie kein Anzeichen zeigte | zuerst von Nutzern gemeldete Incidents ohne zugehörigen Alarm oder zugehöriges Signal / Incidents im Zeitraum | Prozent | Incident-Datensätze und Review-Notizen | Incident-Management; Monitoring | Retrospektive-Maßnahmen | Vierteljährlich |

Die Instrumentierungsabdeckung hängt von einem vereinbarten Kernstandard ab, etwa Anfragerate, Fehlerrate, Latenz und einer Trace-Kennung, im Kennzahlenregister genannt. Die Zeit bis zum Verstehen zählt nur Incidents, bei denen eine Ursache erfasst wurde, Incidents ohne bekannte Ursache werden also gesondert berichtet.

## Empfehlungen

### Entscheiden, was man sehen will

**1. Beginnen Sie bei Nutzer-Journeys und Service Levels.** Listen Sie die Journeys auf, die zählen, und die Indikatoren, die zeigen, ob Nutzer Erfolg haben. Instrumentieren Sie diese zuerst, denn sie binden Telemetrie an Ergebnisse (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets).

**2. Vereinbaren Sie einen Kernstandard.** Definieren Sie die Mindestsignale, die jeder Service sendet, und die Namens- und Kennungskonventionen. Nehmen Sie den Standard in die Definition of Done für neue Services auf.

**3. Kartieren Sie die Abdeckung ehrlich.** Vergleichen Sie den Servicekatalog mit den Services, die die Kernsignale senden. Listen Sie die Lücken und ihre Eigner auf und gehen Sie die mit der höchsten Nutzerwirkung zuerst an.

### Signale nützlich machen

**4. Verknüpfen Sie Signale mit gemeinsamen Kennungen.** Reichen Sie eine Anfrage- oder Trace-Kennung durch Logs, Metriken und Traces, sodass eine Person von einer langsamen Anfrage zu den genauen Logzeilen gelangen kann. Testen Sie das in einem Drill.

**5. Testen Sie Instrumentierung wie Code.** Ein Trace, der an einer Warteschlange abreißt, oder ein Log mit falscher Zeitzone verschwendet einen Incident. Prüfen Sie die Vollständigkeit mit beprobten Anfragen und beheben Sie die Brüche.

**6. Steuern Sie Kardinalität und Sampling bewusst.** Labels mit hoher Kardinalität können große Kosten erzeugen, und Sampling kann das seltene Ereignis verwerfen, das Sie brauchen. Entscheiden Sie, wo zu samplen ist, erfassen Sie die Rate und halten Sie, wo bezahlbar, volle Daten für Fehler und langsame Anfragen.

**7. Halten Sie sensible Daten heraus.** Entscheiden Sie, was nicht in Logs und Traces erscheinen darf, etwa personenbezogene Daten, Zugangsdaten sowie Gesundheits- oder Zahlungsdetails. Scannen Sie danach und beheben Sie die Quelle. Prüfen Sie Pflichten mit Ihrem Rechtsberater, denn dieses Buch gibt keinen Rechtsrat.

### Verstehen messen

**8. Messen Sie die Zeit bis zum Verstehen, nicht nur bis zur Behebung.** Die Zeit von der Erkennung bis zu einer tragfähigen Erklärung zeigt, wie gut die Signale Menschen stützen. Überprüfen Sie die längsten Fälle, um zu sehen, welches Signal fehlte.

**9. Zählen Sie die blinden Flecken.** Incidents, die Nutzer zuerst fanden, sind der klarste Beleg einer Lücke. Fragen Sie bei jedem, welches Signal ihn gezeigt hätte, und fügen Sie es hinzu.

**10. Überprüfen Sie Dashboards und Alarme auf Nutzung.** Stellen Sie Dashboards ein, die niemand öffnet, und Alarme, die nie zu Handlung führen (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität). Eine kleinere Menge, der Menschen trauen, schlägt eine Wand von Diagrammen.

### Kosten und Standards steuern

**11. Budgetieren und ordnen Sie Telemetriekosten zu.** Ordnen Sie Kosten Services zu und beobachten Sie den Trend. Setzen Sie die Aufbewahrung nach Wert: detaillierte Daten kurz, Zusammenfassungen länger und löschen Sie, was keinen Nutzen hat.

**12. Bevorzugen Sie offene Standards, wo sie passen.** Gemeinsame Formate für Instrumentierung und Daten, wie sie das OpenTelemetry-Projekt pflegt, machen den Wechsel von Werkzeugen leichter. Prüfen Sie die aktuelle Spezifikation und die Unterstützung Ihrer Werkzeuge, bevor Sie sich festlegen, denn Standards und Produkte ändern sich.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Instrumentierungsabdeckung | Jedem Service ein minimales Signal hinzufügen, um den Standard zu bestehen; schwierige Services aus dem Katalog ausschließen | Vollständigkeit der Traces und Incidents in blinden Flecken; den Katalog auf Auslassungen überprüfen |
| Vollständigkeit der Traces | Nur einfache Anfragen beproben; Teil-Traces als vollständig zählen | Die Prüfstichprobe nach Anfragetyp definieren; Abdeckung der Abhängigkeiten prüfen |
| Korrelationsrate der Signale | Nur Incidents überprüfen, die gut liefen; eine Verknüpfung zählen, die nur auf dem Papier existiert | Eine Zufallsstichprobe von Incidents überprüfen; einen Verknüpfungs-Drill durchführen |
| Zeit bis zum Verstehen | Eine Ursache früh und lose erfassen; die Ursache bei schweren Fällen leer lassen | Qualität der Ursachenerfassung überprüfen; Incidents ohne Ursache gesondert berichten |
| Telemetriekosten je Service | Signale fallenlassen, um Kosten zu senken; Kosten auf ein anderes Konto verschieben | Incidents in blinden Flecken und Zeit bis zum Verstehen; die Gesamtausgaben abgleichen |
| Sensible Daten in der Telemetrie | Zu eng scannen; Befunde nicht berichten | Scan-Abdeckung und unabhängiges Review; Zeit bis zur Entfernung verfolgen |
| Incidents in blinden Flecken | Einen Incident als erkannt zählen, wenn ein Alarm nach der Nutzermeldung auslöste; Signal breit definieren | Zeitstempel von erstem Signal und erster Nutzermeldung vergleichen; Reviews beproben |

Ein gesunder Befund ist eine Abdeckung, die mit der Zahl vollständiger Traces und Verknüpfungen steigt, ein fallender Anteil von Incidents, die Nutzer zuerst fanden, eine Zeit bis zum Verstehen, die fällt, ohne Signale zu kappen, verstandene und zugeordnete Telemetriekosten und sensible Datenbefunde, die schnell behoben werden.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Alles erfassen, lange behalten | Größte Untersuchungsfähigkeit | Hohe Kosten und hohes Risiko; schwer zu durchsuchen |
| Samplen und kurz aufbewahren | Geringere Kosten | Kann seltene Ereignisse und alte Incidents verpassen |
| Standard-Instrumentierung über Services | Konsistent; schnelleres Verstehen | Aufwand der Einführung; passt womöglich nicht zu jedem Service |
| Vom Team gewählte Instrumentierung | Passt zu lokalem Bedarf | Uneinheitlich; Signale schwer zu verknüpfen |
| KI-Zusammenfassungen von Telemetrie | Schnellerer erster Blick | Können falsch sein; hängen von der Signalqualität ab |

Der Schluss in Worten ist, reiche Daten für Fehler und langsame Anfragen zu halten, das Routinemäßige zu samplen und die Aufbewahrung nach Wert zu setzen. Eine bescheidene, konsistente, verknüpfte Menge an Signalen schlägt einen großen unverknüpften Haufen.

## Fragen für die Diskussion im Team

**1. Was wollten wir bei unserem letzten Incident wissen und konnten es nicht herausfinden?**
Das offenbart das fehlende Signal. Bitten Sie Menschen, sich an die Frage zu erinnern und wo sie suchten. Erwarten Sie Antworten wie „welche Kunden betroffen waren“ oder „was sich geändert hat“. Entscheiden Sie anschließend, wer das Signal hinzufügt und wie es zu testen ist.

**2. Woran würden wir bei unserer wichtigsten Nutzer-Journey erkennen, dass sie scheitert?**
Gehen Sie die Journey Schritt für Schritt durch. Fragen Sie, welches Signal bei jedem Schritt Erfolg zeigt und wie bald. Suchen Sie Schritte ohne Signal. Fügen Sie anschließend einen Indikator für den schwächsten Schritt hinzu.

**3. Können wir eine Anfrage vom Klick des Nutzers bis zur Datenbank und zurück verfolgen?**
Probieren Sie es live. Beachten Sie, wo der Trace abreißt, etwa an einer Warteschlange oder einem Aufruf bei Dritten. Fragen Sie, wie lange es dauert, die passenden Logzeilen zu finden. Beheben Sie anschließend den größten Bruch.

**4. Wie viel geben wir für Telemetrie aus, und was bekommen wir dafür?**
Viele Teams kennen die Kosten je Service nicht. Fragen Sie, welche Signale im letzten Quartal genutzt wurden. Besprechen Sie, was ohne Schaden gesamplet oder gelöscht werden könnte. Wählen Sie anschließend ein Signal zur Überprüfung.

**5. Welche sensiblen Informationen könnten heute in unseren Logs und Traces stecken?**
Suchen Sie gemeinsam nach Beispielen. Häufige Fälle sind E-Mail-Adressen, Tokens und Freitextfelder. Fragen Sie, wie sie dorthin kamen und wer sie lesen kann. Einigen Sie sich anschließend auf eine Regel und einen Scan.

**6. Wie nutzen wir KI-Werkzeuge auf unserer Telemetrie, und wer prüft, was sie sagen?**
Achten Sie auf ungeprüfte Zusammenfassungen von Incidents. Fragen Sie, welche Daten unter welchen Bedingungen an ein Werkzeug gehen. Besprechen Sie, wie eine Person eine vorgeschlagene Ursache verifiziert. Schreiben Sie anschließend eine kurze Regel.

## Vier Perspektiven

### Produkt- und Lieferteams

Sie entscheiden, was ein Service sendet. Fügen Sie Instrumentierung beim Bauen hinzu, nehmen Sie die Kennung auf, die Signale verknüpft, und testen Sie sie als Teil der Arbeit. Behandeln Sie fehlende Observability als Defekt, denn der nächste Incident wird dafür zahlen.

### Service- und Betriebsteams

Sie nutzen Telemetrie unter Druck. Sagen Sie dem Team, welche Signale halfen und welche fehlten, und halten Sie Alarme an Nutzerwirkung gebunden. Verfolgen Sie die Zeit bis zum Verstehen und die Incidents in blinden Flecken und tragen Sie sie ins Produktteam.

### Führung und Governance

Finanzieren Sie Observability als Teil des Services, mit Budgets für Telemetrie und für das Beheben von Lücken. Fragen Sie nach Abdeckung, Incidents in blinden Flecken und Kostentrends, nicht nach der Zahl der Dashboards. Setzen Sie Regeln für sensible Daten und für den Einsatz von KI-Werkzeugen auf Telemetrie.

### Kunden und Nutzer

Sie bemerken ein Problem oft zuerst, fragen Sie also, wie Sie es melden können und wie schnell es mit den Signalen des Services verknüpft wird. Ihre Meldungen verringern blinde Flecken, und Ihnen sollte gesagt werden, was gelernt wurde. Fragen Sie, welche Telemetrie über Sie erhoben wird und warum.

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler betreibt einen Checkout-Service aus acht kleineren Services. Die Zahlen in diesem Beispiel sind illustrativ. Kunden melden gelegentliche Fehlschläge bei der Zahlung, aber die Dashboards zeigen gesunde Fehlerraten und normale Latenz.

Das Team misst. Die Instrumentierungsabdeckung beträgt 6 von 8 Services, die den Kernstandard erfüllen. Eine Prüfung von 50 beprobten Checkout-Anfragen zeigt eine Vollständigkeit der Traces von 62 Prozent, weil der Trace an einer Nachrichtenwarteschlange und an einem Aufruf bei einem Zahlungsdienstleister abreißt. In den letzten sechs Incidents beträgt die Korrelationsrate der Signale zwei von sechs, weil Logs eine andere Anfragekennung nutzen als Traces. Incidents in blinden Flecken sind drei von sechs.

Das Team reicht eine einzige Anfragekennung durch die Warteschlange und die Logs, fügt um den Zahlungsaufruf eine Trace-Spanne hinzu und instrumentiert die zwei fehlenden Services. Nach einem Monat erreicht die Vollständigkeit der Traces in der Stichprobenprüfung etwa 90 Prozent, und der nächste Incident hat in 35 Minuten eine tragfähige Erklärung, gegenüber mehreren Stunden zuvor. Sie scannen auch Logs und finden Kunden-E-Mail-Adressen in einer Fehlermeldung, die sie an der Quelle entfernen, und die Befunde sensibler Daten fallen im nächsten Monat auf null.

Ein Manipulationsrisiko taucht auf. Ein Manager bittet, die Instrumentierungsabdeckung zu heben, indem die zwei verbleibenden Services als „außerhalb des Umfangs“ markiert werden. Das Team lehnt ab, weil die Zahl der Incidents in blinden Flecken hoch bliebe, und erfasst die Lücke mit einem Eigner. Was schwierig bleibt: Die Telemetriekosten je Checkout-Anfrage sind gestiegen, und das Team hat noch nicht entschieden, wie lange Traces aufbewahrt werden. Der Plan für das nächste Quartal ist, Routine-Traces zu samplen und volle Details für Fehler zu behalten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Nehmen Sie Observability in die Definition of Done auf, sodass jedes Inkrement eines Services in Produktion verstanden werden kann. Eine gute Praxis ist, die fehlenden Signale des letzten Incidents im regelmäßigen Verbesserungsgespräch zu überprüfen und als Backlog-Elemente hinzuzufügen. Zu beachten ist, dass Observability-Arbeit oft zugunsten von Funktionen verschoben wird; machen Sie sie also sichtbar und schützen Sie Zeit dafür.

### KI

KI kann Telemetrie zusammenfassen, Signale korrelieren und Ursachen vorschlagen, und KI-Funktionen selbst brauchen Telemetrie wie Eingaben, Ausgaben, Latenz, Kosten und Nutzerfeedback. Koppeln Sie von KI vorgeschlagene Ursachen mit einer menschlichen Prüfung und berichten Sie, wie oft sie stimmten, und überwachen Sie KI-Funktionen auf Qualität ebenso wie auf Verfügbarkeit (siehe Thema 10.1, KI in der Messung des Service-Managements). Zu beachten ist, dass Prompts und Antworten in Logs personenbezogene Daten enthalten können; entscheiden Sie also, was erfasst wird, bevor Sie beginnen.

### Automatisierung

Automatisieren Sie Erfassung, Korrelation und Alarmierung sowie die Prüfungen auf Abdeckung und sensible Daten. Messen Sie die Telemetrie-Pipeline selbst an verworfenen Daten und Verzögerung, denn eine kaputte Pipeline sieht aus wie ein gesundes System. Zu beachten ist, dass automatische Behebung, die auf ein Signal reagiert, die Ursache verdecken kann; protokollieren Sie also, was sie tat.

### Analytik

Nutzen Sie Telemetrie, um Fragen zu Nutzererlebnis und Systemverhalten zu beantworten, mit SLIs, die an Ergebnisse gebunden sind. Die Entscheidung, die dies untermauert, ist, wo in Signale zu investieren und wo Kosten zu senken sind. Zu beachten ist, dass Datenvolumen nicht Einsicht ist und aggregierte Metriken die Nutzer verbergen können, denen es schlecht geht; prüfen Sie also Verteilungen und Segmente und zeigen Sie die Zahl der Ereignisse hinter jeder Zahl (siehe Thema 10.8, Kennzahlen für Analytik und Datenqualität).

## Branchenperspektive

**Startup.** Beginnen Sie mit einigen Signalen auf der Haupt-Journey und einer Trace-Kennung in Logs. Meiden Sie den Kauf einer großen Plattform, bevor die Fragen klar sind, und beobachten Sie die Kosten, während die Nutzung wächst.

**Kleinunternehmen.** Gehostete Services bieten oft begrenzte Telemetrie. Fragen Sie Lieferanten, was Sie sehen können, und halten Sie eine einfache externe Prüfung der Haupt-Journey. Meiden Sie das Erfassen personenbezogener Daten in Logs.

**Großunternehmen.** Viele Teams und Werkzeuge brauchen einen gemeinsamen Standard, gemeinsame Kennungen und zentrale Kostenzuordnung. Erlauben Sie Teams, Signale im Rahmen des Standards hinzuzufügen, und steuern Sie Aufbewahrung und Zugang zentral.

**Behörden und öffentlicher Sektor.** Regeln zu Datenstandort, Aufbewahrung und Zugang prägen, was Sie erfassen können und wo es gespeichert wird. Dokumentieren Sie die Datenflüsse der Telemetrie und prüfen Sie Pflichten mit Rechtsberatern (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind Instrumentierungsarbeit, Plattform- oder Servicegebühren, Speicher je Aufbewahrungsdauer und Personalzeit, Standards und Dashboards zu pflegen. Telemetriekosten können mit Volumen und Kardinalität schnell wachsen, budgetieren und ordnen Sie sie also zu.

Der Ertrag ist schnelleres Verstehen bei Incidents, weniger Incidents, die Nutzer zuerst fanden, und bessere Entscheidungen darüber, wo zu verbessern ist. Diese Vorteile sind real und schwer zu bepreisen, erfinden Sie also keine Zahl. Vergleichen Sie Ihre eigene Zeit bis zum Verstehen und den Anteil der Incidents in blinden Flecken vor und nach der Arbeit und nennen Sie Annahmen als Spannen (siehe Thema 7.7, Kapitalrendite und Business Case). Auf der Risikoseite stehen die Kosten eines Datenlecks durch Telemetrie und die Kosten von Telemetrie, die nie genutzt wird.

## Anti-Muster und Fallstricke

- **Dashboards zählen.** Mehr Diagramme heißen nicht mehr Verständnis. Messen Sie Abdeckung, Verknüpfungen und Zeit bis zum Verstehen.
- **Alles für immer erfassen.** Kosten und Risiko wachsen bei wenig Nutzen. Setzen Sie die Aufbewahrung nach Wert.
- **Unverknüpfte Signale.** Logs, Metriken und Traces, die sich nicht verbinden lassen, verlangsamen jeden Incident. Reichen Sie gemeinsame Kennungen durch.
- **Das seltene Ereignis wegsamplen.** Der Fehler, den Sie brauchen, ist der, den Sie verwarfen. Behalten Sie Fehler und langsame Anfragen.
- **Sensible Daten in Logs.** Sie verbreiten sich und sind schwer zu entfernen. Scannen Sie und beheben Sie die Quelle.
- **Alarme auf jedes Signal.** Rauschen lehrt Menschen, Alarme zu ignorieren. Alarmieren Sie bei Nutzerwirkung.
- **KI-Zusammenfassungen ungeprüft trauen.** Sie können falsch sein, und die Signale können unvollständig sein. Verifizieren Sie gegen die Daten.
- **Instrumentierung als Aufgabe von jemand anderem.** Die Menschen, die den Code schreiben, wissen, was zu senden ist. Machen Sie es zum Teil der Arbeit.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Abdeckung und Standard | Signale variieren je Team; blinde Flecken unbekannt | Hauptservices instrumentiert | Kernstandard und Abdeckung gegen den Katalog verfolgt | Incidents in blinden Flecken überprüft und Lücken geschlossen | Abdeckung in die Erstellung von Services eingebaut und nach Nutzerwirkung angepasst |
| Signalqualität und Verknüpfung | Nur Logs; keine gemeinsamen Kennungen | Einige Traces und Metriken | Gemeinsame Kennungen; Vollständigkeit der Traces geprüft | Zeit bis zum Verstehen überprüft; Drills durchgeführt | Signale passen sich automatisch den gestellten Fragen an |
| Kosten und Governance | Kosten unbekannt; keine Datenregeln | Kosten insgesamt sichtbar | Kosten zugeordnet; Regeln für Aufbewahrung und sensible Daten | Kosten und Datenbefunde im Rhythmus überprüft | Telemetriekosten und -risiko über Teams nach Wert gesteuert |

## Checkliste

- [ ] Ein Kernsignalstandard ist geschrieben und Teil der Definition of Done.
- [ ] Die Instrumentierungsabdeckung wird gegen den Servicekatalog verfolgt.
- [ ] Eine Anfrage- oder Trace-Kennung verknüpft Logs, Metriken und Traces.
- [ ] Die Vollständigkeit der Traces wird an einer Stichprobe echter Anfragen geprüft.
- [ ] Die Zeit bis zum Verstehen wird für Incidents mit der Ursache erfasst.
- [ ] Incidents in blinden Flecken werden gezählt, und jeder führt zu einem Signal.
- [ ] Telemetriekosten werden Services zugeordnet, und die Aufbewahrung ist nach Wert gesetzt.
- [ ] Nach sensiblen Daten in der Telemetrie wird gescannt, und sie werden an der Quelle behoben.
- [ ] Regeln für KI-Werkzeuge, die Telemetrie lesen, existieren.
- [ ] Jede Kennzahl hat einen Manipulationsvektor und eine Leitplanke daneben.

## KI-Prompts

**Einen Kernsignalstandard entwerfen.**

```text
Our service is [description], made of [number] components in [technologies]. Our
most important user journeys are [list]. Propose a core signal standard: the
minimum logs, metrics, and traces each component should emit, the naming and
identifier conventions, and how to check conformance. Do not recommend specific
vendors unless I name them. Mark assumptions and list questions I should answer.
```

**Lücken der Observability aus einem Incident-Review finden.**

```text
Here is a summary of a recent incident, with timeline and notes (personal data
removed): [paste]. Identify moments where the team lacked a signal, could not
link signals, or relied on a guess. For each, propose the signal or link that
would have helped, as a suggestion for the team to evaluate. Do not assert
causes that the text does not support. List what you could not judge and your
assumptions.
```

**Einen Scan nach sensiblen Daten in der Telemetrie planen.**

```text
We keep logs and traces in [tools]. Draft a plan to find sensitive data in them:
categories of data to look for, where to look, how to sample, how to report
findings, and how to fix at the source. Do not state legal requirements; list
questions for our legal adviser. List assumptions and what you would need access
to.
```

**Das Manipulationsrisiko der Observability-Kennzahlen überprüfen.**

```text
We report these observability measures: [paste measures and definitions].
Context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without improving understanding, propose a guardrail, and say
how that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## KI-Skills

- [Anomaly analysis](../../../../skills/anomaly-analysis/SKILL.md): zu verwenden, um ungewöhnliche Muster in der Telemetrie zu untersuchen, bevor eine Ursache festgelegt wird.
- [Root cause analysis](../../../../skills/root-cause-analysis/SKILL.md): zu verwenden, um Signale und Zeitleisten in eine getestete Erklärung zu verwandeln.
- [Service level agreement](../../../../skills/service-level-agreement/SKILL.md): zu verwenden, um Indikatoren mit den Vereinbarungen und Zielen zu verbinden, die sie stützen.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine Kennzahl und ihre gekoppelte Leitplanke abdeckt.

## Wichtigste Erkenntnisse

- Observability heißt, einem laufenden Service neue Fragen stellen zu können, messen Sie also Abdeckung, verknüpfte Signale und Zeit bis zum Verstehen.
- Incidents, die Nutzer zuerst finden, sind der klarste Beleg für blinde Flecken, zählen Sie sie also und fügen Sie Signale hinzu.
- Gemeinsame Kennungen über Logs, Metriken und Traces machen Verstehen schnell.
- Telemetrie kostet Geld und kann sensible Daten lecken, budgetieren Sie sie also, setzen Sie die Aufbewahrung nach Wert und scannen Sie nach sensiblen Inhalten.
- Prüfen Sie KI-Zusammenfassungen von Telemetrie gegen die Daten, denn sie hängen von der Signalqualität ab.

## Quellen und weiterführende Literatur

1. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
2. Wikipedia, [Telemetry](https://en.wikipedia.org/wiki/Telemetry).
3. Wikipedia, [Distributed tracing](https://en.wikipedia.org/wiki/Tracing_(software)).
4. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
5. Wikipedia, [Log management](https://en.wikipedia.org/wiki/Log_management).
6. Wikipedia, [Service-level indicator](https://en.wikipedia.org/wiki/Service-level_indicator).
7. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
