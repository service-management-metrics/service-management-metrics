# Kennzahlen für Prognosen und prädiktive Analytik

**Eine Prognose ist eine Spanne mit einer Erfolgsbilanz, kein Datum und keine Zahl, die man verteidigen muss. Messen Sie also, wie oft das tatsächliche Ergebnis in die genannte Spanne fiel, ob die Spanne ehrlich zu ihrer Breite war und ob jemand wegen ihr eine bessere Entscheidung traf.**

## Überblick und Motivation

[Prognose](https://en.wikipedia.org/wiki/Forecasting) schätzt eine künftige Größe aus vergangenen Daten und genannten Annahmen. Serviceorganisationen prognostizieren die Nachfrage nach Support, die Kapazität einer Plattform, das Datum, an dem ein Stück Arbeit fertig wird, die Wahrscheinlichkeit, dass ein Change fehlschlägt, und die Kosten eines Services im nächsten Jahr. Prädiktive Modelle, einschließlich Modellen des maschinellen Lernens, erweitern das auf die Bewertung einzelner Elemente: welches Ticket sein Ziel verletzen wird, welcher Change riskant ist, welcher Incident wahrscheinlich wiederkehrt.

Prognosen und Vorhersagen scheitern auf gewöhnliche Weise. Die Vergangenheit gleicht der Zukunft womöglich nicht, weil sich ein Service, ein Team oder ein Werkzeug geändert hat. Die Daten können dünn oder verzerrt sein. Die Spanne kann zu eng sein, weil eine einzelne Zahl hilfreicher aussieht als ein Intervall. Und die Prognose kann als Zusage genutzt werden, sodass Menschen darauf hinarbeiten, sie wahr zu machen, oder verbergen, was ihr widerspricht.

Frühere Themen gaben Prognosen für bestimmte Zwecke: Liefertermine aus dem Durchsatz (siehe Thema 2.5, Kennzahlen für Lieferprognosen und Planung), Kapazität aus der Nachfrage (siehe Thema 5.4, Kennzahlen für Kapazität und Leistung) und Kosten (siehe Thema 7.5, Servicekosten und Stückökonomie). Dieses Thema gibt die allgemeine Methode, die Qualität jeder Prognose oder Vorhersage zu messen, und gilt für alle. Es behandelt auch prädiktive Modelle, deren Ausgabe eine Handlung treibt, wo die Kosten einer falschen Vorhersage bei jemandem anfallen.

Hier verwendete Begriffe. Eine **Punktprognose** ist ein einzelner vorhergesagter Wert. Ein **Prognoseintervall** ist eine Spanne, die den tatsächlichen Wert mit einer genannten Wahrscheinlichkeit enthalten soll. **Kalibrierung** ist die Übereinstimmung zwischen genannter Wahrscheinlichkeit und beobachteter Häufigkeit: Von den Prognosen, die 80 Prozent sagten, sollten etwa 80 Prozent eintreffen. **Prognosefehler** ist die Differenz zwischen Prognose und Istwert. Eine **Basisprognose** ist eine einfache Methode, etwa „wie im letzten Zeitraum“, mit der eine komplexere Methode verglichen wird. Ein **falsch positives Ergebnis** ist die Vorhersage eines Ereignisses, das nicht eintritt, ein **falsch negatives** das Versäumnis, eines vorherzusagen, das eintritt. **Drift** ist eine Änderung der Daten oder der Beziehung zwischen Eingaben und Ergebnissen, die die Genauigkeit eines Modells über die Zeit verringert.

## Leitprinzipien

- **In Spannen prognostizieren und eine Erfolgsbilanz führen.** Eine Prognose, die nie geprüft wird, kann sich nicht verbessern.
- **Mit einer einfachen Basis vergleichen.** Ein komplexes Modell, das „wie im letzten Zeitraum“ nicht schlägt, verdient seine Kosten nicht.
- **Kalibrierung zählt ebenso wie Genauigkeit.** Eine Prognose, die 90 Prozent sagt, sollte etwa neunmal von zehn stimmen.
- **Die Kosten von Fehlern an die Entscheidung anpassen.** Ein Fehlalarm und ein Verpasser kosten nicht dasselbe.
- **Auf Drift achten.** Prognosen verfallen, wenn sich die Welt ändert, überwachen Sie sie also.
- **Eine Prognose ist keine Zusage.** Machen Sie sie nicht zu einem Ziel für Menschen.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Abdeckung des Prognoseintervalls | Anteil der tatsächlichen Ergebnisse, die in das genannte Prognoseintervall fielen | Ergebnisse im Intervall / ausgewertete Prognosen; ausgewertet sind Prognosen, deren Ergebnis bekannt ist | Prozent | Prognoseprotokoll und Istwerte | Kapazitäts- und Leistungsmanagement; Finanzmanagement | Prognose mit Spannen aus dem Durchsatz | Vierteljährlich |
| Prognosefehler | Typische Größe der Differenz zwischen Prognose und Istwert | Median des absoluten Fehlers und sein 85. Perzentil, wobei absoluter Fehler = Betrag von (Prognose minus Istwert) / Istwert, über ausgewertete Prognosen | Prozent | Prognoseprotokoll und Istwerte | Kapazitäts- und Leistungsmanagement | Planungsreview | Vierteljährlich |
| Güte gegenüber der Basis | Verbesserung der Prognosemethode gegenüber einer einfachen Basis | 1 minus (medianer absoluter Fehler der Methode / medianer absoluter Fehler der Basis) über dieselben Prognosen | Verhältnis | Prognoseprotokoll, Basisprotokoll und Istwerte | Kontinuierliche Verbesserung | Experimentieren und vergleichen | Vierteljährlich |
| Kalibrierungslücke | Differenz zwischen genannter Wahrscheinlichkeit und beobachteter Häufigkeit | für jedes Wahrscheinlichkeitsband der Betrag von (genannte Wahrscheinlichkeit minus beobachteter Anteil), über die Bänder gemittelt; Bänder mit weniger als einer genannten Zahl von Fällen werden gesondert berichtet | Prozentpunkte | Protokoll probabilistischer Prognosen und Ergebnisse | Risikomanagement; Change-Befähigung | Retrospektive zu Schätzungen | Vierteljährlich |
| Präzision und Trefferquote von Alarmen | Bei einem prädiktiven Alarm oder Wert der Anteil richtiger Alarme und der Anteil gefangener Ereignisse | Präzision = richtig positive / (richtig positive + falsch positive); Trefferquote = richtig positive / (richtig positive + falsch negative) | Prozent | Vorhersageprotokoll und Ergebnisse | Incident-Management; Ereignismanagement | Definition of Done für das Modell | Monatlich |
| Signal für Prognosedrift | Anstieg des Fehlers über die Zeit im Vergleich zu einem Referenzzeitraum | medianer absoluter Fehler im jüngsten Fenster minus medianer absoluter Fehler im Referenzfenster, mit genannten Fenstergrößen | Prozentpunkte | Prognoseprotokoll und Istwerte | Kontinuierliche Verbesserung; Kapazitätsmanagement | Inspizieren und anpassen | Monatlich |
| Verknüpfung von Prognosen mit Entscheidungen | Anteil der Prognosen, die in einer erfassten Entscheidung zitiert wurden | im Entscheidungsprotokoll zitierte Prognosen / veröffentlichte Prognosen | Prozent | Entscheidungsprotokoll und Prognoseprotokoll | Kontinuierliche Verbesserung; Governance | Review-Maßnahmen | Vierteljährlich |

Prognosefehler und Abdeckung werden nur für Prognosen berechnet, deren Ergebnis bekannt ist, jüngere Prognosen werden also bis dahin ausgeschlossen. Präzision und Trefferquote hängen davon ab, wie ein Ereignis definiert ist, daher wird die Definition des Ereignisses, etwa „ein Change, der binnen 48 Stunden einen Incident verursacht“, mit der Kennzahl genannt.

## Empfehlungen

### Ehrlich prognostizieren

**1. Veröffentlichen Sie Spannen, nicht einzelne Daten.** Geben Sie ein Intervall mit genannter Wahrscheinlichkeit an, etwa „zwischen 12 und 18 Arbeitstagen, mit 85 Prozent Sicherheit“, und erklären Sie die Annahme dahinter. Eine einzelne Zahl lädt zu einer Zusage ein.

**2. Führen Sie ein Prognoseprotokoll.** Erfassen Sie jede Prognose, wenn sie gemacht wird: die Größe, den Wert oder die Spanne, das Datum, die Methode und die Annahmen. Fügen Sie den Istwert hinzu, wenn er bekannt ist. Ohne Protokoll gibt es keine Erfolgsbilanz.

**3. Beginnen Sie mit einer einfachen Basis.** Vergleichen Sie jede neue Methode mit einer naiven, etwa dem Wert des letzten Zeitraums oder einem jüngeren Durchschnitt. Schlägt eine komplexe Methode sie über die Zeit nicht klar, behalten Sie die einfache.

**4. Nennen Sie die Annahmen, die die Prognose ungültig machen würden.** Eine Prognose der Nachfrage nimmt keinen großen Start, keinen Ausfall und keine neue Kundengruppe an. Schreiben Sie die Annahme neben die Zahl, damit ein Leser weiß, wann er misstrauen soll.

### Qualität messen

**5. Prüfen Sie Abdeckung und Kalibrierung.** Zählen Sie, wie oft Ergebnisse in das Intervall fallen. Enthält ein 85-Prozent-Intervall das Ergebnis nur halb so oft, ist es zu eng. Berichten Sie die Kalibrierung mit der Zahl der Fälle, denn kleine Stichproben sind verrauscht.

**6. Lesen Sie Fehler als Verteilung.** Ein medianer Fehler von 10 Prozent kann gelegentliche Verfehlungen von 50 Prozent verbergen, die am meisten zählen. Zeigen Sie ein hohes Perzentil und die größten Verfehlungen und überprüfen Sie sie.

**7. Passen Sie die Kennzahl an die Kosten der Entscheidung an.** Wählen Sie bei einem prädiktiven Alarm Präzision oder Trefferquote nach den Kosten eines Fehlalarms und eines Verpassers. Ein Betrugsalarm und ein risikoarmer Routing-Vorschlag haben unterschiedliche Balancen.

**8. Achten Sie auf Drift.** Vergleichen Sie jüngeren Fehler mit einem Referenzzeitraum und untersuchen Sie Anstiege. Häufige Ursachen sind ein neuer Service, ein geänderter Prozess, neue Werkzeuge oder eine Änderung, wie Daten erfasst werden.

### Prognosen gut nutzen

**9. Verknüpfen Sie Prognosen mit Entscheidungen.** Sagen Sie, welche Entscheidung eine Prognose informiert, und erfassen Sie im Entscheidungsprotokoll, was entschieden wurde. Stellen Sie Prognosen ein, die niemand nutzt.

**10. Halten Sie Prognosen aus Zielen für Menschen heraus.** Eine Prognose des Incident-Volumens, die zur Quote für den Desk wird, verzerrt die Berichterstattung. Behandeln Sie Prognosen als Information über ein System.

**11. Halten Sie einen Menschen für das Handeln auf Vorhersagen verantwortlich.** Benennen Sie bei Modellen, die Elemente bewerten, den Eigner, die auf einen Wert folgende Handlung, wie eine Person übersteuern kann und wie Fehler gemeldet werden. Überprüfen Sie falsch positive und falsch negative Ergebnisse mit beprobten Fällen.

**12. Achten Sie auf Verzerrung und Schaden.** Ein auf früheren Entscheidungen trainiertes Modell kann deren Verzerrung wiederholen. Prüfen Sie Ergebnisse auf Gruppen von Nutzern oder Services, denen es unterschiedlich ergeht, und berichten Sie, was die Prüfung nicht zeigen kann. Dieses Buch gibt keinen Rechtsrat, prüfen Sie Pflichten also mit Ihrem eigenen Rechtsberater.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Abdeckung des Prognoseintervalls | Intervalle erweitern, bis die Abdeckung gut aussieht; nur leichte Prognosen auswerten | Intervallbreite mit der Abdeckung berichten; alle protokollierten Prognosen auswerten |
| Prognosefehler | Die Prognose kurz vor dem Ergebnis revidieren; das Auswertungsfenster wählen | Die protokollierte ursprüngliche Prognose nutzen; das Fenster vorab festlegen |
| Güte gegenüber der Basis | Eine schwache Basis wählen; die Methode an den Auswertungsdaten abstimmen | Die Basis vorab vereinbaren; an Daten auswerten, die nicht zum Abstimmen genutzt wurden |
| Kalibrierungslücke | Wenige Bänder oder wenige Fälle nutzen; Bänder zusammenlegen, um Lücken zu verbergen | Zahl der Fälle je Band berichten; Mindestfallzahlen |
| Präzision und Trefferquote von Alarmen | Ereignisse nachträglich umdefinieren; Dubletten zählen | Ereignisdefinition vorab festlegen; Dubletten entfernen; Alarme beproben |
| Signal für Prognosedrift | Den Referenzzeitraum zurücksetzen; langsame Drift ignorieren | Das Referenzfenster festlegen und planmäßig überprüfen |
| Verknüpfung von Prognosen mit Entscheidungen | Prognosen in einem Protokoll zitieren, ohne Wirkung auf die Entscheidung | Fragen, was sich änderte; Einträge beproben |

Ein gesunder Befund sind Intervalle, die den genannten Anteil der Ergebnisse abdecken, ohne absurd breit zu sein, einfache Basen, die komplexe Methoden mit klarem Abstand schlagen, Drift, die bemerkt und untersucht wird, und Prognosen, die in Entscheidungen auftauchen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Einfache Basisprognosen | Leicht zu erklären und zu pflegen; schwer zu überanpassen | Verpassen Muster und Änderungen |
| Statistische oder Modelle des maschinellen Lernens | Erfassen mehr Muster; skalieren über Elemente | Schwer zu erklären; Drift; brauchen Überwachung und Daten |
| Punktprognosen | Leicht zu kommunizieren | Falsche Genauigkeit; laden zur Zusage ein |
| Intervallprognosen | Ehrlich zur Unsicherheit | Schwerer zu kommunizieren; werden womöglich als vage gelesen |
| Expertenurteil | Nutzt Kontext, den ein Modell nicht hat | Verzerrt; schwer zu verfolgen |

Der Schluss in Worten ist, einfach zu beginnen, das Protokoll zu führen, Intervalle zu zeigen und Komplexität nur hinzuzufügen, wenn sie sich gegenüber einer Basis rechtfertigt. Urteil und Modelle können zusammenarbeiten, wenn beide protokolliert und geprüft werden.

## Fragen für die Diskussion im Team

**1. Was ist die letzte Prognose, die wir gemacht haben, und wie ging sie aus?**
Die meisten Teams wissen es nicht, weil Prognosen nicht protokolliert werden. Fragen Sie nach der Zahl, der Annahme und dem Istwert. Beachten Sie, ob die Überraschung aus den Daten oder der Annahme kam. Beginnen Sie anschließend ein Prognoseprotokoll mit diesem Beispiel.

**2. Welche Prognose behandeln wir als Zusage, und wer zahlt, wenn sie falsch ist?**
Suchen Sie Prognosen, die zu Zielen wurden, etwa Liefertermine oder Volumenzahlen. Fragen Sie, wer Druck spürt und was er tut. Besprechen Sie Spannen und die Sprache, in der sie kommuniziert werden. Schreiben Sie anschließend eine Zusage als Spanne mit Annahmen um.

**3. Schlägt unser prädiktives Modell oder Werkzeug „wie im letzten Zeitraum“?**
Fragen Sie nach dem Vergleich, nicht nach dem Versprechen des Anbieters. Teams haben oft keine Basis. Besprechen Sie, wie man fair über dieselben Fälle vergleicht. Lassen Sie anschließend die Basis ein Quartal lang mitlaufen.

**4. Was kostet uns ein Fehlalarm, und was kostet uns ein Verpasser?**
Das legt die Balance zwischen Präzision und Trefferquote fest. Fragen Sie nach echten Beispielen. Die Kosten sind für verschiedene Menschen oft verschieden, etwa einen Bereitschafts-Engineer und einen Kunden. Einigen Sie sich anschließend, welcher Fehler mehr zählt.

**5. Was ließe unsere Prognosen aufhören zu funktionieren, und würden wir es bemerken?**
Besprechen Sie Änderungen wie ein neues Produkt, ein neues Werkzeug oder eine andere Art, Daten zu erfassen. Fragen Sie nach dem Signal, das Drift zeigen würde. Fügen Sie anschließend eine Driftprüfung und einen Eigner hinzu.

**6. Wer handelt auf eine Vorhersage, und kann er Nein sagen?**
Fragen Sie bei bewerteten Elementen, wer entscheidet, was geschieht. Suchen Sie automatische Handlungen ohne Übersteuerung. Besprechen Sie, wie Fehler gemeldet und korrigiert werden. Schreiben Sie anschließend die Übersteuerungsregel.

## Vier Perspektiven

### Produkt- und Lieferteams

Prognostizieren Sie aus Ihrer eigenen Historie und geben Sie Spannen. Protokollieren Sie Prognosen und vergleichen Sie sie mit Istwerten und markieren Sie die Änderungen, die Historie zu einem schlechten Leitfaden machen, etwa ein neues Werkzeug oder ein Teamwechsel. Halten Sie teaminterne Planungszahlen aus Vergleichen zwischen Teams heraus.

### Service- und Betriebsteams

Prognosen von Nachfrage, Kapazität und Incidents helfen bei Besetzung und Prävention. Nutzen Sie sie zum Planen, nicht um Quoten zu setzen. Achten Sie auf Alarmmodelle, die Rauschen erhöhen, und berichten Sie falsch positive Ergebnisse, damit Modelle abgestimmt werden können.

### Führung und Governance

Fragen Sie nach der Erfolgsbilanz hinter einer Prognose, nicht nur nach ihrem Wert, und nach dem Intervall. Meiden Sie, Prognosen zu Zielen für Menschen zu machen. Fragen Sie bei prädiktiven Modellen im Betrieb nach dem Eigner, der Übersteuerungsregel und der Prüfung auf Verzerrung.

### Kunden und Nutzer

Sie spüren die Wirkung von Prognosen als Wartezeiten, Ausfälle und Entscheidungen über Sie. Fragen Sie, wie Vorhersagen, die Sie betreffen, geprüft werden und wie Sie eine anfechten können. Ihre Meldungen falscher Ergebnisse sind Teil des Feedbacks, das das Modell braucht.

## In der Praxis: ein Beispiel aus dem Service-Management

Der IT-Service-Desk einer regionalen Behörde prognostiziert das wöchentliche Ticketvolumen, um die Besetzung zu planen. Die Zahlen in diesem Beispiel sind illustrativ. Ein Werkzeug eines Anbieters bietet eine Prognose des maschinellen Lernens an, und der Manager möchte wissen, ob er sie übernehmen soll.

Das Team beginnt ein Prognoseprotokoll. Zehn Wochen lang erfassen sie für jede Woche drei Prognosen: die Punktprognose des Anbieters, eine naive Basis (der Durchschnitt der letzten vier Wochen) und eine Spanne aus den jüngeren Fehlern der Basis. Danach berechnen sie den Prognosefehler für jede. Der mediane Fehler des Anbieters beträgt 11 Prozent und der der Basis 13 Prozent, die Güte gegenüber der Basis liegt also bei 15 Prozent. Der Fehler des Anbieters im 85. Perzentil beträgt 38 Prozent, mit großen Verfehlungen in Wochen mit Ankündigungen der Behörde, die nicht in den Daten des Werkzeugs stehen.

Das Team übernimmt die Prognose des Anbieters als eine Eingabe, fügt ein Feld für bekannte Ereignisse hinzu und veröffentlicht eine Spanne aus früheren Fehlern. Die Abdeckung des Prognoseintervalls für die genannte 85-Prozent-Spanne beträgt über die zehn Wochen etwa 80 Prozent, bei kleiner Zahl, und sie berichten es mit dem Vorbehalt, dass zehn Fälle wenige sind. Sie richten auch eine Driftprüfung ein, die den Fehler der jüngsten acht Wochen mit den ersten acht vergleicht.

Ein Manipulationsrisiko taucht auf. Ein Teamleiter merkt an, dass die Prognose zur Festlegung der Besetzung genutzt wird, und schlägt vor, einen Puffer auf die Prognose aufzuschlagen, damit das Team gut besetzt aussieht. Das Team hält die Prognose ehrlich und erfasst den Besetzungspuffer als gesonderte Entscheidung. Was schwierig bleibt: Ereignisse, die das Werkzeug nicht sehen kann, verursachen weiter große Verfehlungen, und zehn Wochen Daten genügen nicht, um die Kalibrierung zu beurteilen. Der Plan ist, nach einem längeren Zeitraum erneut zu prüfen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Kurze Planungszyklen lassen ein Team Prognosen oft prüfen und mit Stakeholdern revidieren. Eine gute Praxis ist, mit Spannen aus dem eigenen Durchsatz des Teams zu prognostizieren und die Erfolgsbilanz im regelmäßigen Verbesserungsgespräch zu überprüfen. Zu beachten ist, dass eine als Versprechen behandelte Prognose zu Polstern, Verbergen oder Aufteilen von Arbeit führt.

### KI

Modelle des maschinellen Lernens und KI-Assistenten können Prognosen und Risikowerte mit dem Anschein von Präzision erzeugen. Vergleichen Sie sie mit einer Basis, halten Sie einen Eigner, prüfen Sie Kalibrierung und Raten falsch positiver und falsch negativer Ergebnisse durch Stichproben und halten Sie einen Menschen für Handlungen auf einen Wert verantwortlich (siehe Thema 10.5, Kennzahlen für KI-Governance und -Risiken). Zu beachten ist, dass eine KI-erzeugte Prognose eine selbstsichere Zahl ohne Intervall und ohne genannte Annahmen geben kann; verlangen Sie also beides.

### Automatisierung

Automatisieren Sie das Protokollieren von Prognosen, das Erfassen von Istwerten und die Berechnung von Fehler und Abdeckung, sodass sich die Erfolgsbilanz selbst aufbaut. Messen Sie automatisierte Handlungen nach einer Vorhersage an ihren falschen Handlungen. Zu beachten ist, dass Automatisierung, die auf eine Prognose handelt, etwa Kapazität skaliert oder alarmiert, Prognosefehler für Nutzer sichtbar macht; fügen Sie also Grenzen und Review hinzu.

### Analytik

Dieses Thema ist die Analytik von Prognosen: Zeigen Sie Fehler als Verteilung, Abdeckung mit Zählungen und Drift mit dem genutzten Fenster. Die Entscheidung, die dies untermauert, ist, wie sehr man einer Prognose traut und wann die Methode zu ersetzen ist. Zu beachten ist, dass kleine Stichproben instabile Kalibrierung geben; nennen Sie also die Zahl der Prognosen hinter jeder Zahl (siehe Thema 10.8, Kennzahlen für Analytik und Datenqualität).

## Branchenperspektive

**Startup.** Die Historie ist kurz, und der Service ändert sich oft, daher sind Prognosen schwach. Nutzen Sie einfache Basen und breite Spannen und führen Sie ein kurzes Protokoll. Meiden Sie den Kauf von Prognosewerkzeugen, bevor es Daten gibt.

**Kleinunternehmen.** Saisonalität und wenige große Kunden dominieren. Nutzen Sie denselben Zeitraum des Vorjahres als Basis und vermerken Sie Ereignisse, die das Muster brechen. Seien Sie vorsichtig mit Prognosen von Anbietern, die Präzision behaupten.

**Großunternehmen.** Viele Prognosen über Teams brauchen ein gemeinsames Protokoll und gemeinsame Definitionen. Vergleichen Sie Methoden fair über Teams und meiden Sie, Teams nach Prognosegenauigkeit zu ordnen. Überprüfen Sie Modelle planmäßig auf Drift.

**Behörden und öffentlicher Sektor.** Prognosen stützen oft Haushalts- und Besetzungsentscheidungen, die öffentlich sind. Dokumentieren Sie Methoden und Annahmen und prüfen Sie Regeln für automatisierte Entscheidungen, die Menschen betreffen. Planen Sie für externe Ereignisse wie politische Änderungen, die die Daten brechen (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind Datenarbeit, Prognoseprotokollierung, Werkzeuge für Modellierung, falls genutzt, Review-Zeit und die Überwachung von Modellen auf Drift. Mit einem Protokoll und einer naiven Basis zu beginnen kostet sehr wenig.

Der Ertrag ist bessere Planung: Kapazität, die vor dem Bedarf ankommt, Besetzung, die zur Nachfrage passt, und weniger Überraschungen. Er ist schwer zuzuordnen, vermeiden Sie also, eine Zahl zu behaupten. Vergleichen Sie die Kosten und den Fehler einer Prognosemethode über die Zeit mit der Basis und nennen Sie die Annahmen als Spannen (siehe Thema 7.7, Kapitalrendite und Business Case). Auf der Risikoseite stehen die Kosten übermäßigen Verlassens auf ein Modell, das gedriftet ist, und von Entscheidungen auf falscher Genauigkeit.

## Anti-Muster und Fallstricke

- **Einzelzahl-Prognosen, die als Versprechen behandelt werden.** Sie erzeugen Polster und Schuldzuweisung. Veröffentlichen Sie Spannen mit Annahmen.
- **Kein Prognoseprotokoll.** Es gibt keinen Weg zu lernen. Erfassen Sie Prognosen und Istwerte.
- **Ein Modell ohne Basis kaufen.** Der Gewinn ist unbekannt. Vergleichen Sie mit „wie im letzten Zeitraum“.
- **Genauigkeit an den Trainingsdaten beurteilen.** Es schmeichelt dem Modell. Werten Sie an späteren Daten aus.
- **Falsch positive Ergebnisse ignorieren.** Verrauschte Vorhersagen lehren Menschen, sie zu ignorieren. Berichten Sie Präzision und Trefferquote.
- **Prognosen als Ziele für Menschen.** Sie verzerren die Daten. Nutzen Sie sie zum Planen.
- **Keine Driftprüfung.** Modelle verfallen still. Überwachen Sie den Fehler über die Zeit.
- **Vorhersagen ohne menschlichen Eigner.** Falsche Handlungen haben niemanden, der Rede steht. Benennen Sie einen Eigner und eine Übersteuerungsregel.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Prognosepraxis | Einzelzahlen; keine Aufzeichnung | Einige Spannen; informelle Notizen | Prognoseprotokoll mit Spannen, Annahmen und Istwerten | Fehler, Abdeckung und Basis im Rhythmus verglichen | Prognosen und Methoden durch Experimente verbessert und über Teams geteilt |
| Prädiktive Modelle | Anbieterversprechen akzeptiert | Pilot mit einer Basis verglichen | Eigner, Evaluierung und Übersteuerungsregel je Modell | Drift, Präzision und Trefferquote überwacht | Modelllebenszyklus mit Aufsicht und Ausmusterung gesteuert |
| Nutzung in Entscheidungen | Prognosen als Zusagen | Prognosen Entscheidern gezeigt | Prognosen in einem Protokoll mit Entscheidungen verknüpft | Entscheidungen gegen Prognoseergebnisse überprüft | Entscheidungen passen sich der Prognoseunsicherheit an |

## Checkliste

- [ ] Ein Prognoseprotokoll erfasst Größe, Wert oder Spanne, Datum, Methode und Annahmen.
- [ ] Istwerte werden ergänzt, und der Prognosefehler wird als Verteilung berichtet.
- [ ] Eine einfache Basis läuft neben jeder komplexen Prognose mit.
- [ ] Die Intervallabdeckung wird mit Intervallbreite und Zahl der Fälle berichtet.
- [ ] Prädiktive Alarme berichten Präzision und Trefferquote gegen eine feste Ereignisdefinition.
- [ ] Drift wird gegen ein festes Referenzfenster geprüft.
- [ ] Jedes prädiktive Modell hat einen Eigner, eine Übersteuerungsregel und ein Review-Datum.
- [ ] Prognosen sind in einem Entscheidungsprotokoll mit Entscheidungen verknüpft.
- [ ] Prognosen werden nicht als individuelle Ziele genutzt.
- [ ] Jede Kennzahl hat einen Manipulationsvektor und eine Leitplanke daneben.

## KI-Prompts

**Ein Prognoseprotokoll und eine Basis entwerfen.**

```text
We forecast [quantity] for [purpose]. Our data is [description of history and
source]. Propose a forecast log with fields, a simple baseline method, and how to
compute error and interval coverage later. Do not invent expected accuracy.
Mark assumptions, and list questions I should answer about the data.
```

**Eine Prognosemethode gegen eine Basis auswerten.**

```text
Below are logged forecasts and actuals for [period]: [paste data without personal
information], with a baseline forecast alongside. Compute the median and 85th
percentile of absolute percentage error for each, interval coverage if intervals
are given, and the skill against the baseline. Do not extrapolate beyond the
data. State the number of cases, say what you could not judge, and list your
assumptions.
```

**Die Aufsicht über ein prädiktives Modell überprüfen.**

```text
We use a model that [describes what it predicts and what action follows]. Draft
a review of its oversight: owner, evaluation evidence we should ask for, how
errors are reported, the override rule, drift checks, and questions about bias.
Do not make claims about legal requirements; list questions for our legal
adviser. Mark assumptions.
```

**Das Manipulationsrisiko der Prognosekennzahlen überprüfen.**

```text
We report these forecast measures: [paste measures and definitions]. Context:
[team size, tools, audience]. For each measure, list realistic ways it could look
better without improving forecasts, propose a guardrail, and say how that
guardrail could be gamed. Do not invent benchmark values. List your assumptions.
```

## KI-Skills

- [Demand forecasting](../../../../skills/demand-forecasting/SKILL.md): zu verwenden, um eine Nachfrageprognose mit Spannen zu bauen und zu prüfen.
- [Trend analysis](../../../../skills/trend-analysis/SKILL.md): zu verwenden, um Trends und Änderungen vor dem Prognostizieren zu untersuchen.
- [Machine learning model card](../../../../skills/machine-learning-model-card/SKILL.md): zu verwenden, um Zweck, Daten und Grenzen eines prädiktiven Modells zu dokumentieren.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine Kennzahl und ihre gekoppelte Leitplanke abdeckt.

## Wichtigste Erkenntnisse

- Eine Prognose ist eine Spanne mit einer Erfolgsbilanz, protokollieren Sie also Prognosen und vergleichen Sie sie mit Istwerten.
- Vergleichen Sie jedes Modell mit einer einfachen Basis und behalten Sie das komplexe nur, wenn es sie klar schlägt.
- Prüfen Sie Intervallabdeckung und Kalibrierung mit der Zahl der Fälle dahinter.
- Wählen Sie Präzision oder Trefferquote nach den Kosten eines Fehlalarms und eines Verpassers.
- Machen Sie Prognosen nicht zu Zielen für Menschen und halten Sie einen Menschen für Handlungen auf eine Vorhersage verantwortlich.

## Quellen und weiterführende Literatur

1. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
2. Wikipedia, [Prediction interval](https://en.wikipedia.org/wiki/Prediction_interval).
3. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
4. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
5. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
6. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
7. Hyndman, R. J., and Athanasopoulos, G., *Forecasting: Principles and Practice*, 3rd edition, OTexts, 2021, https://otexts.com/fpp3/
