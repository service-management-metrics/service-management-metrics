# Kennzahlen für FinOps und Cloud-Kosten

**Cloud-Ausgaben werden täglich von Ingenieuren entschieden. Geben Sie den Menschen, die Services bauen und betreiben, also die Kostendaten, den Kontext und die Befugnis, darauf zu handeln, und messen Sie Verschwendung, Zuordnung und Stückkosten mit derselben Sorgfalt wie Zuverlässigkeit.**

## Überblick und Motivation

In einem Rechenzentrum werden Ausgaben durch Bestellungen entschieden und treffen in wenigen großen Schritten ein. In der Cloud kann ein Entwickler die Organisation mit einigen Zeilen Konfiguration auf eine wiederkehrende Belastung festlegen, und eine vergessene Testumgebung kann monatelang Geld kosten. [Cloud Computing](https://en.wikipedia.org/wiki/Cloud_computing) bietet Zugriff auf Rechenressourcen auf Abruf, und das mitgelieferte [Pay-as-you-go](https://en.wikipedia.org/wiki/Pay_as_you_go)-Modell bedeutet, dass die Rechnung der Nutzung folgt. Das ist mächtig und riskant. Dieselbe Flexibilität, die ein Team in Minuten skalieren lässt, lässt Kosten schneller wachsen, als es jemand bemerkt.

FinOps, eine Verschmelzung von Finanzen und Betrieb (Finance und Operations), ist eine Praxis und eine Kultur für die Steuerung von Cloud-Kosten. Die FinOps Foundation beschreibt es als operatives Rahmenwerk, in dem Engineering-, Finanz-, Beschaffungs- und Geschäftsteams bei datengestützten Ausgabenentscheidungen zusammenarbeiten. Seine zentrale Idee ist, dass die Menschen, die Cloud-Ressourcen nutzen, ihre Kosten sehen und besitzen sollten, während die Finanzen Struktur, Prognosen und Verpflichtungen liefern. Das entspricht den agilen Zielen kontinuierlicher Zusammenarbeit unter Stakeholdern und von Teams, die ihre Services besitzen, und dem ITIL-Anliegen des Service-Finanzmanagements. Dieses Thema behandelt die Kennzahlen, die diese Praxis konkret machen. Es baut auf den allgemeinen Kostenideen des vorigen Themas auf (siehe Thema 7.5, Servicekosten und Stückökonomie).

Cloud-Kosten haben Merkmale, die eigene Kennzahlen brauchen.

- **Elastizität.** [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling) passt Ressourcen an die Nachfrage an, was Kosten variabel und manchmal überraschend macht. [Serverless Computing](https://en.wikipedia.org/wiki/Serverless_computing) berechnet je Ausführung und verlagert die Aufmerksamkeit von Servern auf Anfragen.
- **Viele kleine Entscheidungen.** Jede Wahl von Instanzgröße, Speicherstufe, Region und Architektur verändert die Kosten. Ausgaben verteilen sich auf Hunderte von Entscheidungen vieler Menschen und sind ohne Tags und gute Berichte schwer zu sehen.
- **Preismodelle.** On-Demand-Preise sind flexibel und am höchsten. Verpflichtungen im Austausch für einen [Mengenrabatt](https://en.wikipedia.org/wiki/Volume_discount), etwa reservierte Kapazität oder Savings Plans, senken den Stückpreis gegen ein Nutzungsversprechen. Spot- oder unterbrechbare Kapazität ist billig und kann zurückgefordert werden. Jedes Modell hat ein Risiko, und der richtige Mix hängt davon ab, wie vorhersehbar die Last ist. Die genauen Bedingungen unterscheiden sich zwischen Anbietern und ändern sich oft, prüfen Sie also die aktuelle Dokumentation des Anbieters, bevor Sie sich auf ein Detail verlassen.
- **Gemeinsame und nicht gekennzeichnete Kosten.** Ressourcen ohne Eigner- oder Zweck-Tag lassen sich nicht zuordnen. Gemeinsame Plattformen verteilen Kosten auf Teams, die sie unterschiedlich konsumieren.
- **Umweltkosten.** Cloud-Lasten verbrauchen Energie und verursachen Emissionen, und der [CO2-Fußabdruck](https://en.wikipedia.org/wiki/Carbon_footprint) einer Last ist zunehmend eine Berichtsanforderung. Methoden zu seiner Schätzung entwickeln sich noch, und Zahlen sollten mit ihrer Methode kommen.

Kostenkennzahlen in der Cloud lassen sich leicht durch Abkürzungen gewinnen. Ausgaben zu senken, indem man Monitoring abschaltet oder Ressourcen schrumpft, bis der Service umfällt, zeigt eine niedrigere Rechnung und einen schlechteren Service. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt: Jede Kostenkennzahl hier steht neben einer Zuverlässigkeits- oder Qualitätskennzahl, und kein Team wird nach seiner Rechnung geordnet (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Leitprinzipien

- **Kosten sind eine Engineering-Kennzahl.** Teams, die einen Service bauen und betreiben, sehen und besitzen seine Kosten.
- **Eignern zuordnen.** Jeder Dollar sollte einem Team oder einem erklärten gemeinsamen Pool zugeordnet sein.
- **Kosten mit Qualität und Zuverlässigkeit koppeln.** Einsparungen, die den Service zerbrechen, sind keine Einsparungen.
- **Kontinuierlich in kleinen Schritten optimieren.** Überprüfen Sie Verschwendung regelmäßig und handeln Sie als Teil der normalen Arbeit.
- **Mit Spannen prognostizieren.** Variable Nachfrage macht Prognosen mit einer einzelnen Zahl fragil.
- **Funktionsübergreifend zusammenarbeiten.** Engineering, Finanzen, Beschaffung und das Geschäft entscheiden gemeinsam.
- **Teams nicht nach ihrer Rechnung ordnen.** Services unterscheiden sich, und Wachstum ist keine Verschwendung.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Zuordnungsabdeckung | Anteil der Cloud-Ausgaben, der einem verantwortlichen Team oder einem erklärten gemeinsamen Pool zugeordnet ist | Ausgaben mit gültigem Eigner- und Service-Tag oder in einem erklärten gemeinsamen Pool / gesamte Cloud-Ausgaben | Prozent | Export der Cloud-Abrechnung, Tag-Richtlinie | Service-Finanzmanagement; IT-Asset-Management | Verantwortung des Teams für das, was es betreibt | Wöchentlich |
| Cloud-Stückkosten | Kosten von Cloud-Ressourcen je Einheit von etwas, das Nutzer schätzen | Cloud-Kosten für den Service im Zeitraum / im Zeitraum gelieferte Einheiten | Währung je Einheit | Abrechnungsdaten, mit Servicevolumen verbunden | Service-Finanzmanagement; Service-Level-Management | Kosten der Bedienung je Ergebnis | Monatlich |
| Verschwendungsrate | Anteil der Ausgaben für Ressourcen, die ungenutzt oder deutlich überdimensioniert sind | Ausgaben für ungenutzte oder überdimensionierte Ressourcen nach vereinbarten Regeln / gesamte Ausgaben für die Ressourcen im Umfang | Prozent | Auslastungskennzahlen und Abrechnung | Kapazitäts- und Leistungsmanagement; Finanzmanagement | Verschwendungsabbau in der Werkzeugkette | Wöchentlich |
| Verpflichtungsabdeckung | Anteil der berechtigten stetigen Nutzung, der von rabattierten Verpflichtungen abgedeckt ist | durch Verpflichtungen abgedeckte berechtigte Nutzung / berechtigte Nutzung | Prozent | Abrechnung und Verpflichtungsberichte | Service-Finanzmanagement; Lieferantenmanagement | Planung für vorhersehbare Nachfrage | Monatlich |
| Verpflichtungsauslastung | Anteil der erworbenen Verpflichtungen, der genutzt wurde | genutzte Verpflichtungsstunden / erworbene Verpflichtungsstunden | Prozent | Verpflichtungsberichte | Service-Finanzmanagement; Lieferantenmanagement | Wert aus geplanter Investition | Monatlich |
| Prognoseabweichung | Differenz zwischen Prognose und tatsächlichen Cloud-Ausgaben, je Team und insgesamt | (tatsächlich minus Prognose) / Prognose | Prozent | Prognoseprotokoll und Abrechnungsdaten | Service-Finanzmanagement | Prognosegenauigkeit | Monatlich |
| Bestätigungszeit bei Kostenanomalien | Zeit von einem Kostenanomalie-Alarm bis zu einer erfassten Entscheidung des Eigners | Median und 85. Perzentil der Stunden vom Alarm bis zur Reaktion des Eigners | Stunden | Anomalie-Alarme und Ticketdatensätze | Monitoring und Ereignismanagement; Incident-Management | Reaktionsfähigkeit auf ein Produktionssignal | Monatlich |

Definieren Sie den Umfang der Ressourcen, die Tag-Regeln und was als ungenutzt oder überdimensioniert zählt, und halten Sie sie fest. Die Verpflichtungsabdeckung wird nur gegen die stetige Basisnutzung berechnet, nicht gegen Spitzen. Stückkosten nutzen eine mit dem Serviceeigner vereinbarte Einheit, die für den Trend fest bleibt. Kostendaten sollten sagen, ob sie Gutschriften, Rabatte, Steuern und Supportgebühren einschließen und welche Währung und welcher Wechselkurs gelten.

## Empfehlungen

### Kosten sichtbar und in Verantwortung machen

**1. Setzen Sie einen kleinen, verpflichtenden Tag-Satz durch.** Verlangen Sie, dass jede Ressource einen Eigner-, einen Service- und einen Umgebungs-Tag trägt, durch Richtlinie bei der Erstellung durchgesetzt, nicht durch eine nachträgliche Bereinigung. Die Zuordnungsabdeckung misst, wie gut das funktioniert. Ressourcen, die sich nicht kennzeichnen, können blockiert oder binnen eines Tages dem Kontoeigner gemeldet werden. Halten Sie den Tag-Satz klein, damit Menschen mitmachen.

**2. Geben Sie Teams ihre eigene Kostensicht.** Geben Sie jedem Team eine tägliche oder wöchentliche Sicht auf seine Ausgaben nach Service und Umgebung, mit Trends und Anomalien. Menschen reagieren auf Daten, die sie sehen und verstehen können. Ein Bericht, der monatlich eintrifft und nur an die Finanzen geht, ändert wenig.

**3. Definieren Sie gemeinsame Kostenpools und ihre Treiber.** Gemeinsame Plattformen, Netzwerke und Supportgebühren brauchen eine Regel, wie sie verteilt werden (siehe Thema 7.5, Servicekosten und Stückökonomie). Veröffentlichen Sie die Regel, überprüfen Sie sie mit den Teams und halten Sie den Pool klein. Eine Regel, der Menschen folgen können, verdient mehr Vertrauen als eine faire, die niemand versteht.

**4. Halten Sie ein kurzes regelmäßiges Kostengespräch ab.** Bringen Sie Engineering, Finanzen und Product Owner in stetigem Rhythmus für dreißig Minuten zusammen, wöchentlich oder vierzehntäglich für große Ausgeber und monatlich für andere. Überprüfen Sie den Trend, die Anomalien und den Optimierungs-Backlog. Das ist kontinuierliche Zusammenarbeit in der Praxis, und sie hält Kosten ohne schweren Prozess auf der Tagesordnung.

### Wert messen, nicht nur Ausgaben

**5. Drücken Sie Kosten je Einheit aus.** Die gesamten Cloud-Ausgaben steigen mit Erfolg. Was zählt, sind Kosten je aktivem Kunden, je Transaktion oder je Build. Wählen Sie eine Einheit, die für den Service bedeutsam ist, verfolgen Sie sie über die Zeit und kommentieren Sie Änderungen. Fallende Stückkosten bei steigenden Gesamtausgaben sind ein gesundes Muster, und steigende Stückkosten bei gleichbleibender Nutzung sind ein Anlass zur Untersuchung.

**6. Zeigen Sie Zuverlässigkeit und Qualität neben den Kosten.** Zeigen Sie Kosten mit Verfügbarkeit, Latenz und Fehlerrate desselben Services (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets). Kosteneinsparungen, die Fehlerraten erhöhen, sind eine Verlagerung von Kosten auf Nutzer. Ein Fehlerbudget-Ansatz kann die Abwägung ausdrücklich machen: weniger ausgeben, wenn der Service weit besser ist als nötig, und investieren, wenn nicht.

**7. Verfolgen Sie Verschwendung mit ausdrücklichen Regeln.** Definieren Sie ungenutzt (zum Beispiel keine nennenswerte Nutzung über einen Zeitraum) und überdimensioniert (zum Beispiel Auslastung durchgängig weit unter der bereitgestellten Kapazität) und berichten Sie die Ausgaben für jedes. Regeln brauchen Sorgfalt: Ein Standby-System für Resilienz sieht von Natur aus ungenutzt aus und sollte ausgeschlossen und gekennzeichnet werden. Überprüfen Sie die Regeln erneut, wenn sie Fehlalarme erzeugen.

### Auf Befunde reagieren

**8. Dimensionieren Sie richtig und räumen Sie in der normalen Arbeit auf.** Machen Sie das Beseitigen von Verschwendung zu einem festen Punkt im Backlog des Teams, in kleinen Schritten als Teil kontinuierlicher Verbesserung angegangen. Planen Sie, Nicht-Produktionsumgebungen außerhalb der Arbeitszeit zu stoppen, löschen Sie nicht angehängten Speicher, wählen Sie passende Speicherstufen und überprüfen Sie zuerst die größten Positionen. Kleine regelmäßige Änderungen schlagen seltene heroische Aufräumaktionen, die vergessen werden, wenn der Druck steigt.

**9. Passen Sie das Preismodell an die Last an.** Nutzen Sie Verpflichtungen für stetige Basisnutzung, On-Demand für variable Last und unterbrechbare Kapazität für Arbeit, die Unterbrechung verträgt. Verpflichten Sie sich schrittweise, in kleinen Mengen, und verfolgen Sie Abdeckung und Auslastung. Überverpflichtung verschwendet Geld, und Unterverpflichtung zahlt einen Aufschlag. Beziehen Sie Finanzen und Beschaffung ein und prüfen Sie die Bedingungen beim Anbieter erneut, da sie sich ändern.

**10. Erkennen Sie Anomalien und reagieren Sie.** Nutzen Sie Anomalieerkennung auf Ausgaben, die plötzliche Änderungen gegenüber einer Baseline kennzeichnet. Werkzeuge zur [Anomalieerkennung](https://en.wikipedia.org/wiki/Anomaly_detection) reichen von einfachen Schwellen bis zu statistischen Modellen. Alarmieren Sie das zuständige Team und messen Sie, wie lange es dauert, zu bestätigen und zu entscheiden. Ein falsch konfigurierter Job kann in Stunden eine große Rechnung auflaufen lassen, Geschwindigkeit zählt also (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität).

### Prognostizieren und planen

**11. Prognostizieren Sie mit Spannen und Treibern.** Bauen Sie Prognosen aus den Treibern der Nachfrage, etwa erwarteten Nutzern oder Transaktionen, zusammen mit den Stückkosten. Nutzen Sie die [Abweichungsanalyse](https://en.wikipedia.org/wiki/Variance_analysis), um Unterschiede zwischen Prognose und tatsächlichen Werten zu erklären, und trennen Sie solche aus Volumen, Preis und Mix. Geben Sie eine Spanne an und nennen Sie die Annahmen. Die Prognoseabweichung sollte schrumpfen, während das Modell besser wird.

**12. Beziehen Sie Nachhaltigkeit ins Bild ein.** Schätzen Sie die mit den wichtigsten Lasten verbundenen Emissionen mit einer dokumentierten Methode, etwa Berichten der Anbieter oder veröffentlichten Methodiken, und nennen Sie die Grenzen der Schätzung. Vergleichen Sie Wahlmöglichkeiten bei Region, Instanztyp und Zeitplan nach Kosten und Emissionen. Behandeln Sie Emissionen je Einheit als Begleiter der Kosten je Einheit und beanspruchen Sie keine Genauigkeit, die die Methode nicht stützen kann.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Zuordnungsabdeckung | Alles einem Sammel-Eigner zuordnen; große Beträge als gemeinsam erklären | Anteil der Ausgaben im Besitz von Sammel-Eignern; Größe und Review des gemeinsamen Pools; Stichprobe der Eignerbestätigung |
| Cloud-Stückkosten | Eine Einheit wählen, die billig wächst; Zuverlässigkeit kürzen, um Kosten zu kürzen | Feste Einheitendefinition; Begleiter für Zuverlässigkeit und Qualität |
| Verschwendungsrate | Die Definition von ungenutzt verengen; Verschwendung in ein Konto außerhalb des Umfangs verlagern | Regeln im Register; alle Konten scannen; von den Regeln ausgeschlossene Ressourcen stichprobenartig prüfen |
| Verpflichtungsabdeckung | Sich auf aufgeblähte Baselines verpflichten, um einen hohen Prozentsatz zu jagen | Verpflichtungsauslastung; die Baseline gegen die Nutzungshistorie prüfen |
| Verpflichtungsauslastung | Berechtigte Nutzung hinzufügen, die nicht gebraucht wird, um Verpflichtungen zu füllen | Mit dem Wachstum der echten Nachfrage vergleichen; Stückkosten |
| Prognoseabweichung | Prognosen aufpolstern; sie spät überarbeiten | Die Prognose zu Beginn protokollieren; Spannenbreite und Trefferquote verfolgen |
| Bestätigungszeit bei Kostenanomalien | Alarme bestätigen, ohne hinzuschauen; Alarme automatisch schließen | Entscheidung und Ergebnis erfassen; Alarme stichprobenartig auf Qualität der Reaktion prüfen |

Ein gesunder Befund ist, dass nahezu alle Ausgaben in Verantwortung und sichtbar sind, Stückkosten sich aus erklärten Gründen bewegen, Verschwendung ohne Ausfälle schrumpft, Verpflichtungen genutzt werden und der Fehler der Prognosen mit der Zeit sinkt.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Zentrales Cloud-Team steuert die Ausgaben | Konsistenz und Verhandlungsmacht | Langsam; fern von den Engineering-Entscheidungen |
| Teams besitzen ihre Cloud-Kosten | Schnelle, informierte Entscheidungen | Braucht Daten, Schulung und Leitplanken |
| Nur On-Demand | Flexibel | Höchster Stückpreis |
| Starke Verpflichtungen | Niedrigerer Stückpreis | Bindung und Verschwendung, wenn die Nachfrage fällt |
| Strikte Budgetobergrenzen | Verhindert Überschreitungen | Kann Ausfälle verursachen oder berechtigte Arbeit blockieren |
| Alarme und Review | Bewahrt Geschwindigkeit | Hängt von zeitnaher Reaktion ab |
| Aggressives Right-Sizing | Spart Geld | Risiko für die Leistung, wenn übertrieben |
| Gemessenes Right-Sizing mit SLOs | Ausgewogen | Braucht Zuverlässigkeitsdaten und Sorgfalt |

Die Antwort in Worten ist, Teams Daten und Verantwortung zu geben, Leitplanken wie Alarme und Budgets statt harter Stopps zu setzen, wo der Service kritisch ist, sich schrittweise auf die stetige Basis zu verpflichten und Kosten immer mit Zuverlässigkeit zu koppeln.

## Fragen für die Diskussion im Team

**1. Wie viel unserer Cloud-Rechnung können wir heute einem Eigner zuordnen, und wer ist nicht zu finden?**
Schauen Sie auf den Anteil der Ausgaben mit gültigen Tags und die größten ungekennzeichneten Positionen. Fragen Sie, wem jede gehören würde. Die Moderation sollte festhalten, wie viele Positionen niemand beansprucht. Einigen Sie sich auf einen Schritt der Tag-Richtlinie, der bei der Erstellung durchgesetzt wird.

**2. Was taten unsere Kosten je Einheit in den letzten sechs Monaten, und warum?**
Zeichnen Sie die Stückkosten und kommentieren Sie Änderungen bei Architektur, Preis und Volumen. Fragen Sie, welche Änderungen gewollt waren. Ist der Trend eine Überraschung, besprechen Sie, welche Daten fehlen. Fügen Sie dem Diagramm eine Qualitätskennzahl hinzu.

**3. Welche unserer Ressourcen würden wir morgen abschalten, wenn wir uns trauten?**
Listen Sie Kandidaten auf: ungenutzte Umgebungen, überdimensionierte Datenbanken, vergessener Speicher. Fragen Sie bei jedem, was das Risiko ist und wer entscheidet. Einigen Sie sich auf einen sicheren Weg, das Entfernen eines Kandidaten zu testen, etwa vorher zu planen oder einen Snapshot zu machen.

**4. Woher wüssten wir binnen eines Tages, wenn ein Job anfinge, das Zehnfache zu kosten?**
Gehen Sie den Alarmweg von der Rechnung zum Eigner durch. Testen Sie ihn an einem früheren Beispiel. Das Gespräch sollte Verzögerungen und Lücken in der Verantwortung offenlegen. Einigen Sie sich auf eine Zielzeit zum Bestätigen und Entscheiden und darauf, wer verantwortlich ist.

**5. Wie viel unserer Basisnutzung könnten wir sicher verpflichten, und was würde uns widerlegen?**
Untersuchen Sie die Nutzungshistorie auf einen stetigen Boden und die Risiken dafür: Produktänderungen, Migrationen, Preisänderungen. Entscheiden Sie eine erste bescheidene Verpflichtung und ein Review-Datum. Beziehen Sie die Finanzen in die Diskussion ein.

**6. Welche Abwägung zwischen Kosten und Zuverlässigkeit treffen wir aus Versehen?**
Überprüfen Sie jüngere Einsparungen und Incidents. Hingen welche zusammen? Besprechen Sie, wie sich die Abwägung ausdrücklich machen lässt, zum Beispiel durch die Verknüpfung von Kosten-Reviews mit Fehlerbudgets. Entscheiden Sie, wer eine Kürzung genehmigen kann, die die Zuverlässigkeit berührt.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams treffen die Entscheidungen, die Kosten treiben, und sind am besten platziert, sie zu senken. Sie sollten bei der Erstellung kennzeichnen, regelmäßig ihre Kostensicht prüfen, Kosten in Entwurfsgespräche einbauen und das Verringern von Verschwendung als normale Arbeit behandeln. Sie sollten die Wirkung einer Änderung auf die Kosten bald nach ihrer Vornahme sehen können, was schnelles Lernen stützt.

### Service- und Betriebsteams

Betriebs- und Plattformteams betreiben gemeinsame Services, setzen Richtlinien durch und betreiben Anomalie-Alarme. Sie sollten die Tag-Einhaltung einfach halten, Self-Service-Berichte bereitstellen und klare Regeln für gemeinsame Kosten veröffentlichen. Sie sollten Kosten und Zuverlässigkeit der Plattformen beobachten, die sie bereitstellen, und Teams helfen zu handeln, ohne zum Gatekeeper zu werden.

### Führung und Governance

Führungskräfte und Finanzen wollen vorhersehbare Ausgaben und guten Gegenwert. Sie sollten die Werkzeuge und die Zeit für Kostenarbeit finanzieren, Spannen in Prognosen akzeptieren, Ranglisten von Teams vermeiden und Stückkosten neben Qualität verlangen. Die Governance sollte prüfen, dass Verpflichtungen mit Daten eingegangen werden und Nachhaltigkeitsaussagen ihre Methode nennen.

### Kunden und Nutzer

Nutzer spüren Cloud-Kosten indirekt, über Preise, Funktionen oder die Stabilität des Services. Sie profitieren, wenn Einsparungen Verbesserungen finanzieren, und leiden, wenn Kürzungen die Qualität senken. Wo Nutzern Verbrauch berechnet wird, wollen sie klare Rechnungen und die Möglichkeit, sie zu beeinflussen.

## In der Praxis: ein Beispiel aus dem Service-Management

Ein regionaler Online-Händler betreibt seinen Shop und seine Bestellplattform in einer öffentlichen Cloud, mit sechs Engineering-Teams. Die Zahlen unten sind illustrativ.

Die Cloud-Ausgaben stiegen über ein Jahr stetig, und der Finanzdirektor bittet um eine Kürzung. Der FinOps-Leiter holt die Abrechnungsdaten. Die Zuordnungsabdeckung beträgt 68 Prozent, wobei ein Drittel der ungekennzeichneten Ausgaben auf Testkonten entfällt. Die Kosten je abgeschlossener Bestellung betragen 0,31 US-Dollar, gestiegen von 0,27 US-Dollar vor sechs Monaten, während das Bestellvolumen um 15 Prozent wuchs. Die Verschwendungsrate nach den Regeln des Teams beträgt 14 Prozent der Ausgaben im Umfang, überwiegend Nicht-Produktionsumgebungen, die über Nacht und am Wochenende laufen, und einige überdimensionierte Datenbanken. Die Verpflichtungsabdeckung liegt bei 20 Prozent der stetigen Basis, mit 97 Prozent Auslastung dessen, was gekauft wurde. Eine Prognoseabweichung von plus 18 Prozent im letzten Quartal folgte einer Marketingkampagne, von der niemand das Plattformteam unterrichtet hatte. Ein außer Kontrolle geratener Datenjob in einem Konto lief zwei Tage, bevor es jemand bemerkte.

Der Leiter vereinbart mit den Engineering-Teams vier Änderungen. Eine Tag-Richtlinie blockiert neue Ressourcen ohne Eigner- und Service-Tags, mit einer Schonfrist von zwei Wochen. Jedes Team erhält eine wöchentliche Kostensicht und einen kurzen Platz im vierzehntägigen Kostengespräch. Nicht-Produktionsumgebungen werden so geplant, dass sie außerhalb der Arbeitszeit stoppen, und die drei überdimensionierten Datenbanken werden nach Prüfung ihrer Leistung gegen die Service Level Objectives neu dimensioniert. Eine erste Verpflichtung deckt 60 Prozent der stetigen Basis ab, mit einem Review in drei Monaten. Ein Anomalie-Alarm geht an das zuständige Team mit der Erwartung einer erfassten Entscheidung binnen vier Stunden, und der Planungskalender enthält nun Marketingkampagnen.

Nach einem Quartal liegt die Zuordnungsabdeckung bei 93 Prozent, die Verschwendungsrate fällt auf 6 Prozent, die Kosten je Bestellung fallen auf 0,26 US-Dollar ohne Änderung bei Checkout-Latenz oder Fehlerrate, und die Prognoseabweichung beträgt plus 5 Prozent. Die Verpflichtungsabdeckung beträgt 55 Prozent bei 96 Prozent Auslastung. Die mediane Bestätigungszeit bei Anomalien beträgt 2 Stunden, das 85. Perzentil 6. Der Finanzdirektor bittet um eine Rangliste mit den Kosten je Team. Der FinOps-Leiter lehnt ab und erklärt, dass die Teams verschiedene Services mit verschiedenem Wachstum betreiben, und bietet stattdessen den Stückkostentrend jedes Teams mit seinen Zuverlässigkeitskennzahlen an. Die Entscheidung wird festgehalten, und das nächste Review-Datum gesetzt.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Geben Sie Ingenieuren die Kostendaten und die Befugnis zu handeln und überprüfen Sie sie im selben Rhythmus wie Zuverlässigkeit. Zu beachten ist, dass ohne Kontext gesetzte Kostenziele die Zuverlässigkeit senken oder nützliche Arbeit verzögern.

### KI

KI-Services können ein schnell wachsender Anteil der Cloud-Kosten sein, geben Sie ihnen also eigene Zuordnung, Stückkosten und Anomalie-Alarme. Koppeln Sie Kosten je Anfrage mit der Antwortqualität und dem gelieferten Wert. Zu beachten ist, dass das Senken von KI-Kosten durch den Wechsel zu einem schwächeren Modell menschliche Nacharbeit erhöhen kann.

### Automatisierung

Automatisieren Sie Tag-Prüfungen, Anomalie-Alarme und Vorschläge zum Right-Sizing und messen Sie die Automatisierung an Fehlalarmen und an Einsparungen, die tatsächlich eintraten. Zu beachten ist, dass automatische Abschaltungen ungenutzter Ressourcen etwas entfernen können, das gebraucht wurde.

### Analytik

Zeigen Sie Stückkosten und Verschwendung mit Prognoseabweichung und Aktualität der Daten. Die Entscheidung, die dies untermauert, ist, wo zu optimieren und wozu man sich zu verpflichten hat. Zu beachten ist, dass Verpflichtungsentscheidungen von Prognosen abhängen; nennen Sie also deren Unsicherheit.

## Branchenperspektive

**Startup.** Gutschriften und niedrige Rechnungen können schlechte Gewohnheiten verbergen, die im großen Maßstab teuer werden. Kennzeichnen Sie vom ersten Tag an, planen Sie Nicht-Produktionsressourcen und verfolgen Sie früh die Kosten je Kunde. Verpflichten Sie sich nur, wenn die Nachfrage vorhersehbar ist.

**Kleinunternehmen.** Ein einzelnes Konto und wenige Services machen Kennzeichnung und Review einfach. Überprüfen Sie die Rechnung monatlich mit der Person, die das System baut, entfernen Sie vergessene Ressourcen und seien Sie vorsichtig bei langen Verpflichtungen. Ein Budgetalarm ist die wertvollste einzelne Kontrolle.

**Großunternehmen.** Viele Konten, Teams und Anbieter verlangen eine zentrale FinOps-Funktion, die Teams befähigt, statt sie zu kontrollieren. Standardisieren Sie Tags und Abrechnungsexporte über Anbieter, verhandeln Sie Verpflichtungen zentral und geben Sie Teams ihre Daten. Planen Sie Unterschiede in der Multi-Cloud-Berichterstattung ein.

**Behörden und öffentlicher Sektor.** Beschaffungsrahmen, Datenresidenz und feste Jahresbudgets schränken die Wahl ein. Dokumentieren Sie Kosten- und Regionsentscheidungen, modellieren Sie die Wirkung variabler Ausgaben auf Mittelzuweisungen und halten Sie Audit-Trails. Öffentliche Zusagen zur Nachhaltigkeit können berichtete Emissionen mit Methoden verlangen (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten einer FinOps-Praxis sind die Zeit einiger Menschen, Berichterstattung, Tag-Richtlinie und das regelmäßige Gespräch zu betreiben, Werkzeuge, die von der Cloud-Plattform bereitgestellt oder gekauft sein können, und Engineering-Zeit, auf Befunde zu reagieren. Eine kleine Praxis kann mit einem Abrechnungsexport und einer Tabelle beginnen.

Der Ertrag kommt aus verringerter Verschwendung, besseren Preisen durch Verpflichtungen, weniger Überraschungen und besseren Entscheidungen zur Architektur. Bauen Sie den Business Case aus Ihren eigenen Zahlen: die Verschwendungsrate und ihre Kosten im ersten Review, die Einsparungen durch das Planen von Nicht-Produktionsumgebungen, der Verpflichtungsrabatt auf den verpflichteten Teil und die vermiedenen Kosten früh gefangener Anomalien. Vermeiden Sie branchenweite Verschwendungsprozente oder Einsparungszahlen ohne nachvollziehbare Quelle und Methode. Nehmen Sie die Kosten der Praxis und das Risiko der Überverpflichtung auf. Der finanzielle Fall für Verbesserungen im Allgemeinen wird im nächsten Thema behandelt (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Ein zentrales Team, das Nein sagt.** Es bremst Arbeit, und Teams umgehen es. Befähigen Sie Teams mit Daten und Leitplanken.
- **Kosten senken, ohne die Zuverlässigkeit zu beobachten.** Die Einsparungen kehren als Incidents zurück. Koppeln Sie Kosten mit Service-Level-Kennzahlen.
- **Der Verpflichtungsabdeckung nachjagen.** Ein hoher Prozentsatz mit niedriger Auslastung ist Verschwendung. Verfolgen Sie beides.
- **Monatsberichte nur an die Finanzen.** Ingenieure sehen sie nie. Geben Sie Teams tägliche oder wöchentliche Sichten.
- **Kennzeichnen als Aufräumprojekt.** Es verfällt. Setzen Sie Tags bei der Erstellung durch.
- **Teams nach Ausgaben ordnen.** Wachstum sieht wie Verschwendung aus. Zeigen Sie Stückkostentrends mit Kontext.
- **Eine einzelne Zahl prognostizieren.** Variable Nachfrage bricht sie. Nutzen Sie Spannen und Treiber.
- **Genaue Emissionen behaupten.** Schätzmethoden sind unsicher. Nennen Sie Methode und Grenzen.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Sichtbarkeit und Verantwortung | Monatsrechnung von den Finanzen überprüft | Tags von einigen Teams genutzt | Verpflichtende Tags; Teams sehen wöchentliche Kostensichten | Zuordnungsabdeckung gesteuert; gemeinsame Pools überprüft | Kostendaten fließen nahezu in Echtzeit über Anbieter in Produktentscheidungen |
| Optimierung | Gelegentliche Aufräumaktionen | Zeitpläne und Right-Sizing durch einige Teams | Verschwendungsregeln und ein fester Backlog von Optimierungen | Verschwendung, Verpflichtungen und Stückkosten mit Zuverlässigkeitsbegleitern gesteuert | Kontinuierliche, automatisierte Optimierung mit menschlicher Aufsicht und geteiltem Lernen |
| Planung | Jahresbudget | Grobe Prognosen | Treibergestützte Prognosen mit Spannen | Abweichung analysiert und zurückgespielt; Verpflichtungen schrittweise gesteuert | Gemeinsame Prognose mit dem Geschäft, Lieferanten und Nachhaltigkeitszielen |

## Checkliste

- [ ] Ein kleiner verpflichtender Tag-Satz (Eigner, Service, Umgebung) wird bei der Erstellung von Ressourcen durchgesetzt.
- [ ] Die Zuordnungsabdeckung wird wöchentlich berichtet, mit den größten ungekennzeichneten Positionen aufgelistet.
- [ ] Jedes Team hat eine wöchentliche Kostensicht mit Trends und Anomalien.
- [ ] Ein regelmäßiges Kostengespräch von Engineering und Finanzen steht im Kalender.
- [ ] Cloud-Stückkosten werden neben Verfügbarkeit, Latenz und Fehlerrate verfolgt.
- [ ] Verschwendungsregeln sind aufgeschrieben und werden angewandt, Ausschlüsse sind gekennzeichnet.
- [ ] Verpflichtungen werden schrittweise gegen stetige Basisnutzung eingegangen, Abdeckung und Auslastung werden verfolgt.
- [ ] Prognosen nutzen Treiber und Spannen, und die Abweichung wird analysiert.
- [ ] Anomalie-Alarme erreichen Eigner mit einer erwarteten Zeit zur Entscheidung.
- [ ] Emissionsschätzungen, falls berichtet, nennen ihre Methode und Grenzen.

## KI-Prompts

**Einen Kostentrend analysieren.**

```text
Here is a summary of our cloud cost and usage for [service] over [period]:
[paste monthly cost, volume, and any known changes]. Break the change in cost
into volume, price, and mix effects as far as the data allows, suggest what to
check next, and propose a unit cost with a quality companion. Do not invent
prices or discounts. List your assumptions and the data you would need to be
more certain.
```

**Eine Tag-Richtlinie entwerfen.**

```text
Draft a tag policy for [type of organization] using [cloud provider(s)]. Include
a minimal set of mandatory tags, allowed values, how they are enforced at
creation, how violations are reported to owners, and a grace period. Keep it
short enough for engineers to follow. List your assumptions and anything that
depends on provider features I should check in current documentation.
```

**Verschwendungsregeln definieren.**

```text
Propose rules for classifying cloud resources as idle or oversized in [type of
environment], including the metrics used, time windows, exclusions (for example
resilience standbys), and a review process for false positives. Describe how
to avoid harming reliability. Do not set numeric thresholds without saying how
we should calibrate them from our own data. List your assumptions.
```

**Eine erste Verpflichtung planen.**

```text
Our steady baseline usage over the last [period] is [summary] and demand risks
are [list]. Outline a cautious plan for a first commitment: how to estimate
the baseline, how much to commit, how to review utilization, and what would
make us stop. Do not assume specific provider discounts or terms. List your
assumptions and questions for finance and procurement.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Cloud-Kostenkennzahl zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Cloud-Kostenkennzahl seinen Manipulationsvektor, seine Leitplanke und seinen Zuverlässigkeitsbegleiter trägt.

## Wichtigste Erkenntnisse

- Machen Sie Kosten sichtbar und verantwortet: Setzen Sie Tags bei der Erstellung durch und geben Sie jedem Team seine eigene wöchentliche Sicht.
- Messen Sie Kosten je Einheit neben Zuverlässigkeit und Qualität, nie allein.
- Beseitigen Sie Verschwendung als Teil der normalen Arbeit, geleitet von schriftlichen Regeln.
- Verpflichten Sie sich schrittweise auf die stetige Basis und verfolgen Sie Abdeckung und Auslastung.
- Prognostizieren Sie mit Treibern und Spannen und achten Sie mit schneller Reaktion auf Anomalien.
- Ordnen Sie Teams nicht nach Ausgaben und nennen Sie Methode und Grenzen jeder Emissionsschätzung.

## Quellen und weiterführende Literatur

1. Storment, J. R., and Fuller, M., *Cloud FinOps*, 2nd ed., O'Reilly, 2023.
2. FinOps Foundation, *FinOps Framework*, https://www.finops.org/framework/.
3. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Cloud computing](https://en.wikipedia.org/wiki/Cloud_computing).
7. Wikipedia, [Pay as you go](https://en.wikipedia.org/wiki/Pay_as_you_go).
8. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
9. Wikipedia, [Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing).
10. Wikipedia, [Volume discount](https://en.wikipedia.org/wiki/Volume_discount).
11. Wikipedia, [Carbon footprint](https://en.wikipedia.org/wiki/Carbon_footprint).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection).
14. Wikipedia, [Variance analysis](https://en.wikipedia.org/wiki/Variance_analysis).
