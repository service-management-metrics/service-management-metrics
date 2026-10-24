# Kennzahlen für den Lebenszyklus von Hardware-Assets

**Geräte sind die täglichen Werkzeuge motivierter Menschen und zugleich ein Strom von Kosten, Risiko und Verschwendung. Planen Sie die Erneuerung also als stetigen Fluss statt als periodischen Ruck, messen Sie Alter und Ausfall aus Ihren eigenen Daten und behandeln Sie sichere Entsorgung und Wiederverwendung als Teil der Aufgabe.**

## Überblick und Motivation

Hinter jedem Service stehen physische Dinge: Laptops, Telefone, Server, Netzwerkausrüstung, Drucker und die Kabel und Racks, die sie zusammenhalten. Hardware hat einen Lebenszyklus, den Software nicht hat. Sie wird gekauft, versandt, mit einem Image versehen, ausgegeben, repariert, bewegt, ausgemustert, gelöscht und recycelt, und jeder Schritt hat Kosten und ein Risiko. Ein Laptop, der bei einem Kundengespräch ausfällt, kostet mehr als der Laptop. Ein ausgemusterter Server, der das Gebäude mit Daten auf seinen Platten verlässt, kostet weit mehr als sein Wiederverkaufswert. Eine Schublade ungenutzter Telefone ist Kapital, das nichts tut.

Das agile Ziel, Projekte um motivierte Individuen herum aufzubauen, mit dem Umfeld und der Unterstützung, die sie brauchen, gilt hier direkt. Menschen können nicht ihre beste Arbeit auf einem Gerät leisten, das langsam ist, ausfällt oder fehlt. Die ITIL-Tradition steuert die Lebenszyklussicht und die zugehörigen Datensätze bei, im früheren Thema zum IT-Asset-Management behandelt (siehe Thema 7.1, Kennzahlen für das IT-Asset-Management). Dieses Thema fügt die Kennzahlen hinzu, die für physische Ausrüstung spezifisch sind: wie alt sie ist, wie oft sie ausfällt, wie gut sie genutzt wird und wie sie ausscheidet.

Hardware-Planung geschieht oft in großen Zyklen: alles alle paar Jahre in einem großen Einkauf ersetzen, dann mit den Folgen leben. Eine stetigere Alternative im Geist kontinuierlicher Auslieferung ist, einen Bruchteil der Landschaft kontinuierlich zu erneuern. Das glättet Ausgaben, verteilt die Last von Imaging und Übergabe und lässt Sie aus jeder Charge lernen, bevor Sie die nächste kaufen. Es bedeutet auch, dass Sie Daten zu Alter und Ausfall brauchen, um zu entscheiden, wann jedes Gerät gehen sollte.

Drei Ideen ordnen die Kennzahlen.

- **Alter und Ausfall.** Die [Ausfallrate](https://en.wikipedia.org/wiki/Failure_rate) einer Gerätepopulation ändert sich über ihr Leben, und die [mittlere Betriebsdauer zwischen Ausfällen](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF) ist eine verbreitete Zusammenfassung für reparierbare Elemente. Durchschnitte verbergen viel: Eine Charge mit fehlerhafter Komponente kann früh ausfallen, während der Rest in Ordnung ist. Schauen Sie auf Ausfall nach Modell, Charge und Altersband und nutzen Sie Ihre eigene Historie, nicht Herstellerzahlen, um zu planen.
- **Auslastung.** Ein Gerät, das niemand nutzt, ist Verschwendung, und ein überlastetes Gerät ist eine Quelle von Reibung. Messen Sie, ob Ausrüstung genutzt wird und zur Arbeit passt.
- **Verantwortungsvoller Abgang.** Ausgemusterte Ausrüstung kann sensible Daten halten, wertvolle und gefährliche Materialien enthalten und zu Elektronikschrott beitragen. [Elektronikschrott](https://en.wikipedia.org/wiki/Electronic_waste) ist ein wachsendes Umweltproblem, und viele Rechtsordnungen regeln, wie damit umzugehen ist. Sichere [Datenlöschung](https://en.wikipedia.org/wiki/Data_erasure) und zertifizierte Wiederverwendung oder Recycling sind das Ende des Lebenszyklus, kein Nachgedanke. Ein Ansatz der [Kreislaufwirtschaft](https://en.wikipedia.org/wiki/Circular_economy) hält Produkte und Materialien so lange wie möglich in Nutzung.

Hardware-Kennzahlen sind einer vertrauten Verzerrung ausgesetzt. Ein Team, das für ein niedriges durchschnittliches Gerätealter belohnt wird, erneuert womöglich Geräte, die in Ordnung sind. Ein Team, das für niedrige Ausgaben belohnt wird, streckt womöglich Lebensdauern, bis Ausfälle Menschen stören. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt, jede Kennzahl ist also mit einer Prüfung gekoppelt, dass es Menschen und dem Planeten besser geht, nicht nur der Zahl (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Leitprinzipien

- **Einen stetigen Fluss planen.** Erneuern Sie in jedem Zeitraum einen Anteil der Landschaft und lernen Sie aus jeder Charge.
- **Nach Belegen entscheiden.** Nutzen Sie Ihre eigenen Daten zu Ausfall, Alter und Nutzung, um zu wählen, wann ersetzt wird.
- **Auf die Verteilung schauen.** Durchschnitte verbergen den alten, ausfallenden und ungenutzten Schwanz.
- **Gesamtkosten zählen.** Der Kaufpreis ist ein Teil der Kosten eines Geräts über sein Leben (siehe Thema 7.5, Servicekosten und Stückökonomie).
- **Daten bis zum Ende schützen.** Ein Gerät ist nicht ausgemustert, bis seine Daten weg sind und der Beleg erfasst ist.
- **Wiederverwendung und Reparatur bevorzugen.** Halten Sie Ausrüstung so lange im Dienst, wie sie Menschen gut dient.
- **Ausrüstung als Teil des Arbeitsumfelds behandeln.** Menschen brauchen Geräte, die funktionieren.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Altersprofil | Verteilung des Gerätealters nach Klasse und Anteil jenseits der geplanten Lebensdauer | Medianalter und 85. Perzentil des Alters; Anteil der Geräte, die älter sind als die geplante Lebensdauer der Klasse | Jahre; Prozent | Kauf- und Deployment-Daten des Asset-Registers | IT-Asset-Management; Kapazitäts- und Leistungsmanagement | Review der technischen Gesundheit | Vierteljährlich |
| Rechtzeitige Erneuerungsrate | Anteil der Geräte, die den geplanten Ersatz erreichten und innerhalb des geplanten Fensters ersetzt wurden | innerhalb des Fensters ersetzte Geräte / Geräte, die im Zeitraum den geplanten Ersatz erreichten | Prozent | Asset-Register und Erneuerungsplan | IT-Asset-Management; Management von Serviceanfragen | Geplante Wartung des Arbeitsumfelds | Vierteljährlich |
| Ausfallrate nach Modell | Ausfälle je 100 Geräte und Jahr, nach Modell und Altersband | Hardware-Ausfälle im Zeitraum / durchschnittlich im Dienst befindliche Geräte, auf ein Jahr hochgerechnet, mal 100 | Ausfälle je 100 pro Jahr | Incident- und Reparaturdatensätze, mit dem Register verbunden | Incident-Management; IT-Asset-Management | Defekte im Arbeitsumfeld | Vierteljährlich |
| Anteil ungenutzter Geräte | Anteil der ausgegebenen Geräte ohne Aktivität in einem festgelegten Zeitraum | Geräte ohne Anmelde- oder Netzwerkaktivität in 60 Tagen / ausgegebene Geräte | Prozent | Logs des Endpoint-Managements, nach Klasse aggregiert | IT-Asset-Management; Finanzmanagement | Verschwendungsabbau | Monatlich |
| Ersatz-Durchlaufzeit | Zeit, ein ausgefallenes oder verlorenes Gerät durch ein funktionierendes zu ersetzen | Median und 85. Perzentil der Stunden oder Tage von der Meldung bis zu dem Moment, in dem der Nutzer ein funktionierendes Gerät hat | Tage | Incident- und Anfragedatensätze | Incident-Management; Management von Serviceanfragen | Zeit, ein Teammitglied zu entblocken | Monatlich |
| Abschluss sicherer Entsorgung | Anteil der ausgemusterten Geräte mit erfasstem Beleg der Datenlöschung oder -vernichtung | ausgemusterte Geräte mit Beleg der Löschung oder Vernichtung / ausgemusterte Geräte | Prozent | Entsorgungsdatensätze und Löschzertifikate | Informationssicherheitsmanagement; IT-Asset-Management | Definition of Done für das Ausmustern von Ausrüstung | Monatlich |
| Wiederverwendungs- und Recyclingrate | Anteil der ausgemusterten Geräte, die über einen freigegebenen Kanal wiederverwendet, aufgearbeitet oder recycelt wurden | über einen freigegebenen Kanal wiederverwendete, aufgearbeitete oder recycelte Geräte / ausgemusterte Geräte | Prozent | Entsorgungs- und Partnerdatensätze | IT-Asset-Management; Lieferantenmanagement | Nachhaltigkeitsziel in der Planung | Vierteljährlich |

Definieren Sie die Geräteklassen (zum Beispiel Standard-Laptop, Entwickler-Workstation, Mobiltelefon, Server, Netzwerk-Switch), jede mit eigener geplanter Lebensdauer. Die Ausfallrate zählt nur Hardware-Fehler und schließt Software-Fehler, gesondert kodierte Nutzerbeschädigung und Verlust aus. Die Uhr der Ersatz-Durchlaufzeit startet bei der Meldung und stoppt, wenn der Nutzer ein funktionierendes Gerät bestätigt, nicht wenn eines versandt wird. Der Anteil ungenutzter Geräte schließt Geräte aus, die absichtlich Reserve sind und als gesonderte Klasse gezählt werden.

## Empfehlungen

### Den Fluss planen

**1. Setzen Sie für jede Klasse eine geplante Lebensdauer und behandeln Sie sie als Hypothese.** Beginnen Sie bei der Garantie des Anbieters und Ihrer eigenen Erfahrung und überarbeiten Sie sie, wenn die Daten eintreffen. Eine geplante Lebensdauer von einigen Jahren für Laptops, länger für Netzwerkausrüstung und kürzer für stark genutzte Geräte ist typisch, doch die richtige Zahl für Ihre Landschaft kommt aus Ihren eigenen Ausfall- und Nutzungsdaten. Halten Sie die Begründung im Register fest.

**2. Erneuern Sie kontinuierlich in kleinen Chargen.** Ersetzen Sie jeden Monat oder jedes Quartal einen stetigen Anteil der Geräte, geordnet nach Alter, Ausfallhistorie und Bedarf. Kleine Chargen glätten Kosten, verteilen die Arbeit von Imaging und Übergabe und lassen Sie ein neues Modell mit wenigen Nutzern testen, bevor Sie sich festlegen. Eine einzige große Erneuerung alle paar Jahre konzentriert Risiko und Aufwand.

**3. Halten Sie einen bescheidenen Puffer an Ersatzgeräten.** Ein kleiner Pool bereitstehender Geräte verkürzt die Ersatz-Durchlaufzeit bei Ausfällen, Verlusten und neuen Mitarbeitenden. Bemessen Sie den Puffer aus Ihrer eigenen Ausfall- und Einstellungshistorie und überprüfen Sie ihn vierteljährlich. Zählen Sie Ersatzgeräte als eigene Klasse, damit sie die Auslastung nicht verzerren.

**4. Planen Sie mit den Finanzen, nicht gegen sie.** Vereinbaren Sie, wie Geräte aktiviert und abgeschrieben werden und wie sich eine stetige Erneuerung im Budget zeigt. Regeln zur [Abschreibung](https://en.wikipedia.org/wiki/Depreciation) beeinflussen, wann ein Ersatz auf dem Papier am billigsten ist, und sie sollten nicht den Ersatz von Geräten treiben, die Menschen noch gut dienen. Halten Sie eine gemeinsame Sicht auf den Plan und seine Annahmen.

### Aus den eigenen Daten lernen

**5. Untersuchen Sie Ausfälle nach Modell, Charge und Alter.** Verbinden Sie Reparatur- und Incident-Datensätze mit dem Register und schauen Sie auf Ausfälle je 100 Geräte und Jahr nach Modell und Altersband. Suchen Sie nach Chargen, die früh ausfallen, Modellen, die auf bestimmte Weise ausfallen, und dem Alter, ab dem Ausfälle zu steigen beginnen. Nutzen Sie die Befunde, um Modelle zu wählen und den Ersatz zu terminieren. Seien Sie vorsichtig bei kleinen Stichproben und sagen Sie, wenn ein Modell zu wenige Geräte hat, um es zu beurteilen (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

**6. Nutzen Sie Garantie und Reparatur klug.** Wissen Sie, was die [Garantie](https://en.wikipedia.org/wiki/Warranty) abdeckt und wie lange, erfassen Sie Ansprüche und vergleichen Sie die Kosten von Reparatur mit Ersatz. Reparatur hält Ausrüstung in Nutzung und aus dem Abfallstrom, und das Recht auf Reparatur von Teilen und Informationen ist an mehreren Orten ein aktives politisches Thema. Bevorzugen Sie Modelle, die sich reparieren und aufrüsten lassen, wenn sonst alles gleich ist.

**7. Messen Sie Nutzung, um zu finden, was ungenutzt und was überlastet ist.** Aggregieren Sie Aktivitätsdaten nach Klasse und suchen Sie nach Geräten, die nie genutzt werden, und nach Geräten, die durchgehend am Anschlag laufen. Ungenutzte Geräte lassen sich neu zuweisen oder ausmustern. Überlastete Geräte sind Reibung, und Nutzer werden sie spüren (siehe Thema 6.4, Nutzer- und Mitarbeitererlebnis). Achten Sie auf den Datenschutz: Berichten Sie nach Klasse und Gruppe, nie nach Person, und nutzen Sie die minimalen Daten.

**8. Verfolgen Sie die Ersatz-Durchlaufzeit als Service.** Messen Sie, wie lange es dauert, bis eine Person nach einem Ausfall oder Verlust ein funktionierendes Gerät hat, und beziehen Sie die Schritte ein: Meldung, Genehmigung, Bestand, Imaging, Lieferung und Übergabe. Das 85. Perzentil sagt Ihnen, wie schlimm die unglücklichen Fälle sind. Beheben Sie zuerst den langsamsten Schritt.

### Geräte gut steuern

**9. Steuern Sie Geräte zentral und konsistent.** Werkzeuge für [Mobile Device Management](https://en.wikipedia.org/wiki/Mobile_device_management) und Ähnliches lassen Sie Geräte aus der Ferne einschreiben, konfigurieren, aktualisieren und löschen, was manuelle Arbeit und Risiko verringert. Nutzen Sie sie, um das Register genau zu halten, Updates mit Rücksicht auf den Fokus der Menschen auszuspielen und die Reaktion auf verlorene Geräte zu stützen.

**10. Machen Sie sichere Entsorgung zu einem definierten Prozess.** Folgen Sie einem anerkannten Standard zur Bereinigung von Datenträgern, etwa den vom US-amerikanischen National Institute of Standards and Technology veröffentlichten Leitlinien oder dem Äquivalent in Ihrer Rechtsordnung. Erfassen Sie Methode, Datum und den Beleg für jedes Gerät und nutzen Sie zertifizierte Partner für Vernichtung und Recycling. Ein Entsorgungsschritt ohne Beleg ist eine Lücke.

**11. Bevorzugen Sie Wiederverwendung, dann Recycling.** Wo Geräte noch funktionieren, setzen Sie sie intern neu ein, spenden Sie sie über einen freigegebenen Partner oder verkaufen Sie sie nach dem Löschen. Nutzen Sie zertifizierte Recycler für den Rest. Messen Sie den Anteil ausgemusterter Geräte, der in jeden Kanal geht, und die Gründe für jene, die direkt in den Abfall gehen. Vorschriften zu Elektronikschrott variieren je Rechtsordnung und werden durchgesetzt, beziehen Sie also Ihre Kollegen in Recht und Nachhaltigkeit ein.

**12. Überprüfen Sie den Lebenszyklus mit den Menschen, die ihn nutzen.** Bringen Sie einmal im Quartal Finanzen, Sicherheit, Beschaffung, den Service Desk und einige Nutzer zusammen, um Alter, Ausfall, Durchlaufzeit und Entsorgung anzusehen. Fragen Sie, was funktioniert und was Menschen ärgert. Das ist kontinuierliche Zusammenarbeit rund um das Arbeitsumfeld, und sie hält den Plan realistisch.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Altersprofil | Gesunde Geräte ersetzen, um den Durchschnitt zu senken; alte Geräte ausschließen, indem man sie als Ersatzgeräte umklassifiziert | Ausfallrate nach Altersband; Anteil ungenutzter Geräte; Review der Umklassifizierung |
| Rechtzeitige Erneuerungsrate | Das geplante Fenster erweitern; geplante Daten verschieben, indem man den Plan bearbeitet | Planänderungen mit Gründen protokolliert; mit Ausfall und Nutzerfeedback vergleichen |
| Ausfallrate nach Modell | Ausfälle als Nutzerbeschädigung oder Software-Fehler kodieren; Reparaturdatensätze verzögern | Stichprobe der Ausfallkodierung; Reparaturdatensätze mit Incident-Datensätzen vergleichen |
| Anteil ungenutzter Geräte | Geplante Hintergrundaktivität als Nutzung zählen; ungenutzte Geräte Geisternutzern neu zuweisen | Menschliche Anmeldung als Aktivitätssignal nutzen; Zuweisungen stichprobenartig prüfen |
| Ersatz-Durchlaufzeit | Die Uhr beim Versand stoppen; die Anfrage schließen, bevor der Nutzer ein funktionierendes Gerät hat | Uhr endet bei Bestätigung des Nutzers; Umfrage zu jüngeren Ersatzfällen |
| Abschluss sicherer Entsorgung | Löschung ohne Beleg erfassen; Zertifikate nicht mit Seriennummern abgeglichen | Zertifikate mit Seriennummern abgleichen; eine Stichprobe mit dem Entsorgungspartner prüfen |
| Wiederverwendungs- und Recyclingrate | An einen Makler mit unbekannter nachgelagerter Behandlung gesendete Geräte als recycelt zählen | Zertifizierte Partner und nachgelagerte Berichterstattung verlangen; Stichprobenprüfungen |

Ein gesunder Befund ist ein Altersprofil mit dünnem alten Schwanz, Ausfallraten, die den Einkauf leiten, kurze Ersatzzeiten, vollständige Entsorgungsbelege und ein sinkender Anteil an Ausrüstung, die in den Abfall geht.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Erneuerung im festen Zyklus | Vorhersehbares Budget und einfache Regeln | Ersetzt Geräte, die in Ordnung sind; erzeugt eine große Arbeitsspitze |
| Kontinuierliche Erneuerung in Chargen | Glatte Kosten und Arbeitslast; Lernen zwischen Chargen | Braucht gute Daten und Disziplin |
| Bis zum Ausfall betreiben | Niedrigste Anschaffungskosten | Stört Menschen; ungeplante Kosten; Sicherheitsrisiko alter Systeme |
| Kurze geplante Lebensdauer | Neuer, schneller, besser unterstützt | Höhere Kosten und mehr Abfall |
| Lange geplante Lebensdauer | Niedrigere Kosten und weniger Abfall | Mehr Ausfälle und Sicherheitsexposition am Schwanz |
| Reparatur und Wiederverwendung im Haus | Hält Geräte in Nutzung; weniger Abfall | Braucht Fähigkeiten und Teile |
| Ausgelagerte Entsorgung | Spezialisierte Handhabung | Braucht Aufsicht über die nachgelagerte Kette |

Die Antwort in Worten ist, kontinuierlich in kleinen Chargen zu erneuern, nach Alter, Ausfall und Bedarf, zu reparieren und wiederzuverwenden, wo es Menschen dient, und die Entsorgungskette an einen Standard zu halten, den Sie belegen können.

## Fragen für die Diskussion im Team

**1. Wie sieht das Alters- und Ausfallbild unserer Geräte aus, und wer hat die ältesten?**
Zeigen Sie die Altersverteilung und die Ausfallrate nach Band. Schauen Sie, wer die ältesten Geräte hält und ob es die Menschen sind, die verlässliche Ausrüstung am meisten brauchen. Die Moderation sollte fragen, was das Team an der Reihenfolge der Erneuerung aufgrund des Bildes ändern würde.

**2. Wie lange dauert es, bis jemand nach dem Defekt seines Geräts ein funktionierendes hat?**
Verfolgen Sie die letzten drei Ersatzfälle von der Meldung bis zu einem funktionierenden Gerät. Notieren Sie die Wartezeiten. Fragen Sie, welcher Schritt entfernt oder automatisiert werden könnte. Einigen Sie sich auf eine Änderung und eine Möglichkeit, die Wirkung zu messen.

**3. Welche Modelle machen uns die meisten Probleme, und woher wissen wir es?**
Listen Sie Modelle mit den höchsten Ausfall- oder Ticketraten auf. Prüfen Sie, ob die Stichprobe groß genug zum Urteilen ist. Fragen Sie, wie die Befunde den nächsten Einkauf beeinflussen. Tun sie es nicht, entscheiden Sie, wie sie an die Beschaffung zurückzuspielen sind.

**4. Was täten wir, wenn ein ausgemustertes Gerät mit Daten darauf auftauchte?**
Gehen Sie den Entsorgungsweg und den bei jedem Schritt aufbewahrten Beleg durch. Fragen Sie, wo das schwächste Glied ist und wer den nachgelagerten Partner verifiziert. Einigen Sie sich auf eine Stichprobenprüfung der Entsorgungsbelege für das nächste Quartal.

**5. Wo ist unsere Ausrüstung ungenutzt, und warum?**
Schauen Sie auf Geräte ohne Nutzung in 60 Tagen und auf Ersatzgeräte. Fragen Sie, ob sie neu zugewiesen, ausgemustert oder behalten werden sollten. Das Gespräch zeigt auch Missverhältnisse zwischen dem, was Menschen ausgegeben wurde, und dem, was sie brauchen.

**6. Was bräuchte es, mehr von dem wiederzuverwenden oder zu reparieren, was wir ausmustern?**
Listen Sie die Hindernisse auf: Fähigkeiten, Teile, Richtlinie oder Partner. Fragen Sie, wie ein Pilot mit einer Geräteklasse aussähe und wie er gemessen würde. Beziehen Sie die Sichten von Nachhaltigkeit und Finanzen ein.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams hängen von verlässlichen Maschinen und Testgeräten ab und spüren langsame Builds und ausfallende Laptops direkt. Sie sollten die Ausrüstung melden, die sie bremst, bei der Wahl der Modelle für ihre Rollen mitwirken und einen schnellen Ersatzweg erwarten. Teams, die auf physischen Geräten testen, etwa Telefonen, sollten diese Geräte als Assets mit Eignern und einem Erneuerungsplan behandeln.

### Service- und Betriebsteams

Betriebsteams betreiben die Lieferkette: kaufen, empfangen, Image aufspielen, deployen, reparieren und entsorgen. Sie sollten Datensätze aktuell halten, Ausfallmuster beobachten, einen vernünftigen Pool an Ersatzgeräten halten und Entsorgungsbelege bewahren. Sie tragen die physische Arbeit, und ihre Kapazität begrenzt, wie schnell die Erneuerung gehen kann.

### Führung und Governance

Führungskräfte wollen vorhersehbare Kosten, geringes Risiko und eine Nachhaltigkeitsgeschichte. Sie sollten stetige Erneuerung finanzieren, Alters- und Ausfalldaten statt eines bloßen Durchschnittsalters verlangen und Entsorgungsbelege fordern. Die Governance sollte prüfen, dass Umwelt- und Datenschutzpflichten erfüllt werden und der Plan überarbeitet wird, wenn sich Bedingungen ändern.

### Kunden und Nutzer

Nutzer wollen ein Gerät, das funktioniert, und schnellen Ersatz, wenn nicht. Sie besitzen auch einen Teil des Ergebnisses: Probleme früh melden, Ausrüstung zurückgeben und der IT sagen, wenn sie umziehen. Ihre Sicht auf die Ausrüstung und den Ersatzprozess ist das direkteste verfügbare Feedback. Beziehen Sie sie bei der Wahl der Modelle für ihre Arbeit ein.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung einer Kreisverwaltung unterstützt 3.800 Mitarbeitende an 40 Standorten, mit einem Mix aus Büro-, Außendienst- und geteilten Geräten. Die Zahlen unten sind illustrativ.

Alle vier Jahre ersetzte der Kreis alle Laptops in einer einzigen Beschaffung, und der letzte Zyklus endete mit einer Spitze an Ausfällen im Jahr vor dem Ersatz und Monaten von Imaging-Arbeit im Jahr des Ersatzes. Der Asset-Manager schlägt eine stetige Erneuerung vor und baut ein Bild aus dem Register und den Reparaturdatensätzen. Das mediane Laptop-Alter beträgt 3,2 Jahre und das 85. Perzentil 5,1 Jahre. Die Ausfälle je 100 Laptops und Jahr steigen von etwa 6 bei Geräten unter drei Jahren auf etwa 19 bei Geräten über fünf. Ein in einer einzigen Charge gekauftes Modell zeigt mit zwei Jahren 24 Ausfälle je 100 pro Jahr, verursacht durch einen Akkufehler. Die mediane Ersatz-Durchlaufzeit beträgt 5 Tage, mit einem 85. Perzentil von 12 Tagen, überwiegend Warten auf das Imaging. Der Anteil ungenutzter Geräte beträgt 7 Prozent, überwiegend Ersatzgeräte und Geräte von Mitarbeitenden in langem Urlaub. Von 410 im letzten Jahr ausgemusterten Laptops haben 366 ein erfasstes Löschzertifikat, eine Abschlussrate von 89 Prozent, und 12 Prozent gingen ohne nachgelagerte Berichterstattung an einen Recycler.

Das Team nimmt vier Änderungen vor. Es wechselt zu einer vierteljährlichen Erneuerung von etwa 6 Prozent der Laptops, nach Alter und Ausfallhistorie geordnet, mit Außendienstpersonal und den ältesten Geräten zuerst. Es verhandelt mit dem Lieferanten für die fehlerhafte Charge unter Garantie. Es hält einen Pool an Ersatzgeräten von 2 Prozent der Landschaft, mit dem Standard-Image vorgeladen, was das Warten auf das Imaging verkürzt. Es verlangt für jedes entsorgte Gerät ein mit der Seriennummer abgeglichenes Zertifikat und wechselt zu einem Recycler, der über die nachgelagerte Behandlung berichtet. Es startet auch einen kleinen Pilot, Geräte unter vier Jahren aufzuarbeiten und neu einzusetzen.

Zwei Quartale später liegt die Ersatz-Durchlaufzeit am 85. Perzentil bei 4 Tagen, der Anteil der Geräte über fünf Jahren ist von 22 Prozent auf 13 Prozent gefallen, der Abschluss der Entsorgungsbelege beträgt 99 Prozent, und die Wiederverwendungs- und Recyclingrate über freigegebene Kanäle liegt bei 94 Prozent. Das Finanzamt bittet um ein einzelnes Ziel für das durchschnittliche Gerätealter, und der Asset-Manager schlägt vor, Altersprofil und Ausfallrate gemeinsam zu verfolgen, mit der Erklärung, dass sich ein niedriges Durchschnittsalter durch den Ersatz gesunder Geräte erkaufen lässt. Die Entscheidung wird im Entscheidungsprotokoll festgehalten, mit einem Review in sechs Monaten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Planen Sie die Erneuerung als stetigen Fluss und überprüfen Sie Alters- und Ausfalldaten regelmäßig mit Nutzern. Zu beachten ist, dass ein starres Ersatzalter funktionierende Geräte verschwendet und Budgets belastet.

### KI

KI-Funktionen können Hardware-Anforderungen erhöhen, zum Beispiel für lokale Modelle, was den Zeitpunkt der Erneuerung ändert. Verfolgen Sie Ausfall und Alter aus Ihren eigenen Daten und fügen Sie eine Kennzahl für Geräte hinzu, die die Werkzeuge, die Menschen brauchen, nicht ausführen können. Zu beachten ist, dass Aussagen von Anbietern zu KI-fähiger Hardware gegen Ihre eigenen Lasten zu testen sind.

### Automatisierung

Automatisieren Sie Lebenszyklusereignisse wie Garantiedaten und Entsorgungsschritte und messen Sie die Automatisierung an verpassten Ereignissen. Zu beachten ist, dass automatische Lösch- und Entsorgungsabläufe einen Abschlussnachweis brauchen; prüfen Sie also eine Stichprobe.

### Analytik

Zeigen Sie das Altersprofil und die Ausfallraten nach Modell mit Anzahlen. Die Entscheidung, die dies untermauert, ist, wie viel je Zeitraum zu erneuern ist. Zu beachten ist, dass Ausfallraten kleiner Flotten verrauscht sind; vermeiden Sie also Schlüsse aus einer Handvoll Geräte.

## Branchenperspektive

**Startup.** Geräte werden nach Bedarf und oft von der Person gekauft, die sie nutzen wird. Führen Sie eine einfache Liste mit Kaufdaten, löschen Sie Geräte beim Abgang und vermeiden Sie Überkäufe. Nutzen Sie früh ein verwaltetes Einschreibewerkzeug, denn es ist billiger als nachträgliches Nachrüsten.

**Kleinunternehmen.** Die Kosten eines ausgefallenen Geräts fallen auf wenige Menschen. Halten Sie ein oder zwei Ersatzgeräte, erfassen Sie Garantiedaten und haben Sie eine Routine für Löschen und Entsorgung. Lokale Recycler und Aufarbeiter können gute Partner sein. Eine Entsorgungs-Checkliste mit drei Zeilen schlägt keine.

**Großunternehmen.** Größe macht Chargenverhalten und Lieferantenmanagement wichtig. Nutzen Sie Ausfalldaten, um mit Lieferanten zu verhandeln, standardisieren Sie wenige Modelle je Klasse und betreiben Sie kontinuierliche Erneuerung mit Logistikunterstützung. Stimmen Sie sich mit der Nachhaltigkeitsberichterstattung ab, denn Hardware dominiert oft den Fußabdruck der IT.

**Behörden und öffentlicher Sektor.** Beschaffungsregeln, Aufbewahrung von Aufzeichnungen und strenger Datenschutz prägen den Lebenszyklus. Dokumentieren Sie die Bereinigung nach einem anerkannten Standard, bewahren Sie Entsorgungsbelege für die vorgeschriebene Zeit auf und erwägen Sie öffentliche Verpflichtungen zu Nachhaltigkeit und Reparatur. Öffentliche Stellen müssen womöglich Elektronikschrott berichten (siehe Thema 8.3, Kennzahlen für Compliance und Audit).

## Business Case: Motive, ROI und TCO

Die Kosten sind der Aufwand, Register-, Reparatur- und Endpoint-Daten zu verbinden, etwas Werkzeug für das Gerätemanagement, falls nicht vorhanden, der Pool an Ersatzgeräten und die Prozessarbeit der Entsorgung mit Beleg. Die Einsparungen und Nutzen zeigen sich in weniger störenden Ausfällen, einem glatteren Budget, weniger verschwendeter Ausrüstung und geringerem Risiko eines Datenvorfalls.

Bauen Sie den Business Case aus Ihren eigenen Daten. Vergleichen Sie die Kosten, ein Gerät über seine geplante Lebensdauer hinaus zu betreiben, einschließlich Supportaufwand und verlorener Arbeitszeit je Ausfall, mit den Kosten, es früher zu ersetzen. Vergleichen Sie die Kosten des Pools an Ersatzgeräten mit den eingesparten Tagen verlorener Arbeit je Ausfall. Zählen Sie die Zahl ausgemusterter Geräte ohne Löschbeleg und die Kosten eines einzelnen Datenvorfalls, der folgen würde. Vermeiden Sie, durchschnittliche Gerätelebensdauern oder Zahlen zu Elektronikschrott aus veröffentlichten Quellen zu zitieren, ohne Methode und Datum zu prüfen. Die Gesamtbetriebskosten bringen diese Teile zusammen (siehe Thema 7.5, Servicekosten und Stückökonomie), und die vollen [Gesamtbetriebskosten](https://en.wikipedia.org/wiki/Total_cost_of_ownership) eines Geräts schließen Kauf, Support, Energie, Störung und Entsorgung ein.

## Anti-Muster und Fallstricke

- **Alles nach dem Kalender ersetzen.** Es verschwendet funktionierende Geräte und erzeugt eine Arbeitsspitze. Nutzen Sie Alter, Ausfall und Bedarf.
- **Bis zum Ausfall betreiben.** Die ungeplanten Kosten und Störungen übersteigen die Einsparung. Beobachten Sie den Altersschwanz.
- **Das Durchschnittsalter als Ziel nutzen.** Es lässt sich erreichen, indem man gesunde Geräte ersetzt. Zeigen Sie das Profil und die Ausfallrate.
- **Zuverlässigkeitszahlen der Hersteller vertrauen.** Ihre Nutzung ist anders. Nutzen Sie Ihre eigenen Ausfalldaten.
- **Ohne Beleg entsorgen.** Eine nicht erfasste Löschung ist ein Risiko, von dem Sie nicht zeigen können, dass Sie es beherrscht haben.
- **Geräte an den billigsten Recycler senden.** Die nachgelagerte Behandlung zählt. Nutzen Sie zertifizierte Partner.
- **Menschen über ihre Geräte verfolgen.** Berichten Sie nach Klasse und Gruppe, nie nach Einzelperson.
- **Reparatur und Wiederverwendung ignorieren.** Ausrüstung im Dienst zu halten ist billiger und umweltfreundlicher.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Planung | Kaufen, wenn es kaputtgeht | Periodische Erneuerung nach Kalender | Geplante Lebensdauer je Klasse; stetige Erneuerung in Chargen | Erneuerung nach Alter, Ausfall und Bedarf terminiert; Ersatzgeräte aus Daten bemessen | Erneuerung mit Lieferanten, Finanzen und Nachhaltigkeitszielen über Standorte koordiniert |
| Aus Daten lernen | Keine Ausfalldatensätze | Reparaturdatensätze geführt | Ausfallrate nach Modell und Alter verfolgt | Befunde ändern Einkauf und Terminierung; Durchlaufzeit gesteuert | Ausfall- und Nutzungsdaten mit Lieferanten geteilt, um Entwurf und Bedingungen zu verbessern |
| Abgang | Geräte verschwinden | Informelles Löschen | Entsorgungsprozess mit Beleg für jedes Gerät | Beleg geprüft; Wiederverwendung und Recycling verfolgt | Kreislaufpraktiken mit zertifizierten Partnern und öffentlicher Berichterstattung |

## Checkliste

- [ ] Geräteklassen und geplante Lebensdauern sind definiert, mit erfasster Begründung.
- [ ] Ein stetiger Erneuerungsplan existiert und wird mit den Finanzen überprüft.
- [ ] Altersprofil, Ausfallrate nach Modell und Ersatz-Durchlaufzeit werden berichtet.
- [ ] Ein Pool an Ersatzgeräten ist aus Ausfall- und Einstellungsdaten bemessen.
- [ ] Ungenutzte Geräte werden nach Klasse identifiziert, mit Datenschutzregeln.
- [ ] Garantieansprüche und Reparaturen werden erfasst und in Kaufentscheidungen genutzt.
- [ ] Jedes ausgemusterte Gerät hat eine erfasste Bereinigungsmethode und einen Beleg.
- [ ] Entsorgungspartner sind zertifiziert und berichten die nachgelagerte Behandlung.
- [ ] Wiederverwendungs- und Recyclingraten werden verfolgt.
- [ ] Ein vierteljährliches Review schließt Finanzen, Sicherheit, Beschaffung, den Service Desk und Nutzer ein.

## KI-Prompts

**Ausfalldaten nach Modell und Alter analysieren.**

```text
Here is a summary of hardware failures for [device class] over [period]: model,
number in service, age band, and number of failures: [paste table]. Describe
patterns by model and age, flag batches or models that look unusual, say where
the sample is too small to judge, and suggest what to check next. Do not apply
manufacturer figures or invent benchmark values. List your assumptions.
```

**Einen kontinuierlichen Erneuerungsplan entwerfen.**

```text
We have [number] devices in these classes: [list with age profile]. Failure and
repair data: [summary]. Budget constraints: [summary]. Propose a quarterly
refresh plan that replaces a steady share, orders replacements by age, failure
history, and user need, and keeps a spares pool. Explain the trade-offs
against a fixed-cycle refresh and what to measure. Do not invent prices. List
your assumptions.
```

**Einen Entsorgungsprozess überprüfen.**

```text
Our disposal process for retired [device types] is: [describe steps, partners,
and records]. Review it for gaps in data sanitization, evidence, chain of
custody, and environmental handling, and suggest improvements and spot checks.
Mention that requirements vary by jurisdiction and should be checked with
legal and security specialists. Do not provide legal conclusions. List your
assumptions.
```

**Die Ersatz-Durchlaufzeit verringern.**

```text
Replacing a failed device currently takes these steps and typical waits:
[list]. Identify the slowest steps, suggest changes (for example preloaded
spares, remote enrollment, or simplified approval), and describe how to
measure the effect on the median and 85th percentile. Do not assume tooling we
have not described. List your assumptions and risks.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Kennzahl zum Hardware-Lebenszyklus zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Hardware-Kennzahl seinen Manipulationsvektor, seine Leitplanke und seine Belegregel trägt.

## Wichtigste Erkenntnisse

- Erneuern Sie kontinuierlich einen stetigen Anteil der Geräte, anhand Ihrer eigenen Daten zu Alter, Ausfall und Nutzung.
- Schauen Sie auf die Altersverteilung und den Ausfall nach Modell, nicht auf den Durchschnitt.
- Halten Sie den Ersatz schnell, mit einem Pool an Ersatzgeräten und einem kurzen, gemessenen Weg.
- Behandeln Sie sichere Entsorgung mit Beleg als das Ende des Lebenszyklus und bevorzugen Sie Reparatur, Wiederverwendung und zertifiziertes Recycling.
- Berichten Sie nach Geräteklasse und Gruppe und verfolgen Sie nie Einzelpersonen über ihre Ausrüstung.
- Überprüfen Sie den Lebenszyklus gemeinsam mit Finanzen, Sicherheit, Beschaffung und Nutzern.

## Quellen und weiterführende Literatur

1. National Institute of Standards and Technology, *Guidelines for Media Sanitization*, NIST Special Publication 800-88 Revision 1, 2014.
2. European Parliament and Council, *Directive 2012/19/EU on waste electrical and electronic equipment (WEEE)*, 2012.
3. Baldé, C. P., et al., *The Global E-waste Monitor*, United Nations University, International Telecommunication Union, and International Solid Waste Association (latest edition).
4. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Failure rate](https://en.wikipedia.org/wiki/Failure_rate).
8. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
9. Wikipedia, [Electronic waste](https://en.wikipedia.org/wiki/Electronic_waste).
10. Wikipedia, [Data erasure](https://en.wikipedia.org/wiki/Data_erasure).
11. Wikipedia, [Circular economy](https://en.wikipedia.org/wiki/Circular_economy).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Depreciation](https://en.wikipedia.org/wiki/Depreciation).
14. Wikipedia, [Warranty](https://en.wikipedia.org/wiki/Warranty).
15. Wikipedia, [Mobile device management](https://en.wikipedia.org/wiki/Mobile_device_management).
16. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
