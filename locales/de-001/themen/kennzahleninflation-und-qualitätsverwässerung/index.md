# Kennzahleninflation und Qualitätsverwässerung

**Macht KI Volumen und Geschwindigkeit billig, bläht sich jede Kennzahl auf, die Volumen und Geschwindigkeit zählt. Koppeln Sie also jede mit einer von einem Menschen geprüften Nützlichkeitskennzahl und beobachten Sie, ob das Signal in Ihren Daten ertränkt wird.**

## Überblick und Motivation

Eine Kennzahl funktioniert, weil sie etwas spiegelt, das schwer zu erzeugen ist. Gelöste Tickets spiegeln Aufwand. Geschriebene Dokumente spiegeln Wissen. Hinzugefügte Tests spiegeln Sorgfalt. Macht ein Werkzeug den sichtbaren Output fast kostenlos, bricht die Verbindung zwischen Output und Aufwand. Die Zahlen steigen weiter, und die Bedeutung läuft ab. Das ist Kennzahleninflation, und ihr Begleiter ist die Qualitätsverwässerung: Der Anteil des Erzeugten, der nützlich ist, sinkt, und der nützliche Teil wird schwerer zu finden.

Das ist kein neues Problem. [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) und sein Verwandter [Campbells Gesetz](https://en.wikipedia.org/wiki/Campbell%27s_law) beschreiben, wie Kennzahlen, die zur Steuerung genutzt werden, verdorben werden. Eine [Vanity-Kennzahl](https://en.wikipedia.org/wiki/Vanity_metric) sieht beeindruckend aus und sagt nichts über die Gesundheit der Arbeit. Was KI ändert, sind Geschwindigkeit und Maßstab, in denen Output erzeugt werden kann, und damit Geschwindigkeit und Maßstab, in denen diese alten Fehler auftreten können. Ein Team, das früher eine Zahl von Hand aufblähte, kann es nun in Minuten tun, oft ohne es zu beabsichtigen.

Mehrere Muster kehren in Service- und Lieferarbeit wieder.

- **Volumeninflation.** KI entwirft mehr Tickets, mehr Antworten, mehr Kommentare, mehr Testfälle, mehr Dokumente und mehr Code. Die Zahlen dieser steigen. Die Arbeitslast derer, die sie lesen, prüfen und pflegen müssen, steigt mit.
- **Geschwindigkeitsinflation.** Die Zeit bis zum ersten Entwurf fällt stark, und die Zeit bis zu einem fertigen, geprüften Ergebnis fällt weniger oder gar nicht. Ein Dashboard, das die erste berichtet, erzählt eine schmeichelnde Geschichte.
- **Rauschen.** Mehr Inhalt konkurriert um Aufmerksamkeit. [Informationsüberflutung](https://en.wikipedia.org/wiki/Information_overload) ist der Zustand, in dem eine Person das Volumen der dargebotenen Information nicht verarbeiten kann, und das [Signal-Rausch-Verhältnis](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) der Wissensdatenbank, der Ticket-Warteschlange oder des Alarmstroms sinkt. [Alarmmüdigkeit](https://en.wikipedia.org/wiki/Alert_fatigue) ist ihre betriebliche Form (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität).
- **Minderwertig erzeugter Inhalt.** Massenhaft mit wenig Review erzeugter Inhalt, manchmal [KI-Schrott (AI Slop)](https://en.wikipedia.org/wiki/AI_slop) genannt, ist plausibel und dünn. Eine mit solchen Artikeln besäte Wissensdatenbank wird weniger vertrauenswürdig, und Nutzer lernen, ihr zu misstrauen.
- **Prüfkosten.** Der Aufwand, eine Behauptung zu prüfen, ist oft viel größer als der, sie aufzustellen, ein Muster, das manchmal [Brandolinis Gesetz](https://en.wikipedia.org/wiki/Brandolini%27s_law) heißt. Ist Erzeugung billig, wird Prüfung zum Engpass.
- **Effizienz, die den Verbrauch erhöht.** Das [Jevons-Paradoxon](https://en.wikipedia.org/wiki/Jevons_paradox) beschreibt Fälle, in denen Effizienzgewinne zu mehr Nutzung einer Ressource führen, nicht zu weniger. Wird das Entwerfen eines Berichts billig, werden mehr Berichte verlangt. Von einem Werkzeug gesparte Zeit wird womöglich von mehr Arbeit geringeren Werts verbraucht.
- **Rückkopplungsschleifen.** Speist erzeugter Inhalt die nächste Runde der Erzeugung, summieren sich Fehler. Die Forschungsliteratur beschreibt [Modellkollaps](https://en.wikipedia.org/wiki/Model_collapse) bei Modellen, die auf ihren eigenen Ausgaben trainiert werden. Eine ähnliche Schleife kann innerhalb einer Organisation auftreten, wenn ein Assistent Tickets zusammenfasst, die ein Assistent aus Artikeln schrieb, die ein Assistent zusammenfasste.
- **Driftende Basislinien.** Ändert sich die Verteilung der Daten durch KI, bedeuten Trends und Schwellen nicht mehr, was sie taten. Das ähnelt dem [Concept Drift](https://en.wikipedia.org/wiki/Concept_drift) im maschinellen Lernen, bei dem sich die Beziehung zwischen Eingaben und Ergebnissen über die Zeit ändert. Ein Anstieg des Ticketvolumens kann leichteres Erstellen von Tickets spiegeln, nicht mehr Probleme.

Die agilen Ziele zählen hier. Kontinuierliche Auslieferung, kontinuierliche Verbesserung und nachhaltiges Tempo hängen alle davon ab, dass das Signal klar ist. Motivierte Menschen sollten nicht gebeten werden, durch maschinell erzeugtes Rauschen zu waten oder Stapel von Output in nicht tragbarem Tempo zu prüfen. Kontinuierlich einbezogene Stakeholder sind auch die beste Verteidigung: Sie sagen Ihnen, wenn die Berichte nicht mehr helfen.

Dieses Thema gibt die Kennzahlen, um Inflation und Verwässerung zu bemerken, und die Kopplungen, die sie offenlegen. Es baut auf den Grundlagen und den Kennzahlen gestützter Arbeit auf (siehe Thema 10.1, KI in der Messung des Service-Managements, und Thema 10.2, KI-gestützte Arbeit messen).

## Leitprinzipien

- **Jede Volumen- oder Geschwindigkeitskennzahl mit einer Nützlichkeitsprüfung koppeln.** Ein Mensch beurteilt, ob der Output nützlich ist.
- **Bis zu einem fertigen, verifizierten Ergebnis messen.** Die Geschwindigkeit des ersten Entwurfs ist eine Falle.
- **Die Prüflast beobachten.** Sie wächst unbemerkt und verbraucht die gesparte Zeit.
- **Das Signal schützen.** Halten Sie Wissensdatenbank, Warteschlangen und Alarme sauber genug, um ihnen zu trauen.
- **Rückkopplungsschleifen unterbrechen.** Lassen Sie erzeugten Inhalt nicht ohne Review die Erzeugung speisen.
- **Neu basieren, wenn sich die Daten ändern.** Trends über einen Technologiewechsel hinweg brauchen Sorgfalt.
- **Weniger, bessere Outputs bevorzugen.** Weniger kann mehr sein, wenn Aufmerksamkeit die begrenzende Ressource ist.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Verhältnis von Output zu Ergebnis | Volumen des Outputs relativ zum Ergebnis, das er erzeugen sollte | Outputzahl (Tickets, Artikel, Changes) / Ergebniskennzahl (gelöste Probleme, genutzte Artikel, bestehende Changes), im selben Zeitraum, als Trend verfolgt | Verhältnis | Work-Tracker, Wissensdatenbank, Ergebniskennzahlen | Kontinuierliche Verbesserung; Messung und Berichterstattung | Funktionierende Software vor Dokumentationsvolumen | Monatlich |
| Anteil nützlicher Elemente | Anteil der beprobten Elemente, die ein qualifizierter Reviewer für nützlich hält | als nützlich beurteilte beprobte Elemente (richtig, relevant, keine Dublette) / beprobte Elemente | Prozent | Zufallsstichprobenreview | Wissensmanagement; Qualitätssicherung | Definition of Done für Inhalt | Monatlich |
| Prüflast | Menschliche Zeit, die je Outputeinheit mit Prüfen und Korrigieren erzeugter Arbeit verbracht wird | Stunden für Review und Korrektur / Outputeinheiten, als Trend verfolgt | Stunden je Einheit | Zeitschätzungen, Daten des Review-Werkzeugs | Finanzmanagement für Services; kontinuierliche Verbesserung | Review-Kapazität als Beschränkung | Monatlich |
| Redundanzrate von Inhalten | Anteil der Wissenselemente, die ein anderes doppeln oder wesentlich überlappen | im Review oder durch Abgleich als Dublette oder überlappend markierte Elemente / Elemente der Wissensdatenbank | Prozent | Review der Wissensdatenbank, Abgleichsberichte | Wissensmanagement | Eine einzige Wahrheitsquelle | Vierteljährlich |
| Geprüfter Anteil erzeugten Wissens | Anteil der KI-erzeugten Wissenselemente, die eine qualifizierte Person vor der Veröffentlichung geprüft und genehmigt hat | mit genehmigtem Review veröffentlichte erzeugte Elemente / veröffentlichte erzeugte Elemente | Prozent | Metadaten der Wissensdatenbank | Wissensmanagement; Change-Befähigung | Review vor dem Release | Monatlich |
| Zufluss des Backlogs gegenüber Lösung | Wachstum eintreffender Arbeit relativ zum Wachstum gelöster Arbeit, für von KI betroffene Warteschlangen | (Veränderung erstellter Elemente) / (Veränderung gelöster Elemente), verglichen mit der Basislinie vor KI | Verhältnis | Ticket- und Tracker-Historie | Incident-Management; Serviceanfragen-Management | Flussbalance | Monatlich |
| Markierungen von Kennzahlendrift | Zahl der Kennzahlen, deren Definition oder Verteilung sich nach der Einführung von KI spürbar verschob, überprüft und annotiert | im Review markierte Kennzahlen / Kennzahlen im Register | Anzahl; Prozent | Review des Kennzahlenregisters, Verteilungsprüfungen | Messung und Berichterstattung | Retrospektive zur Messung | Vierteljährlich |

Definieren Sie „nützlich“ in einem schriftlichen Raster: richtig, relevant für einen echten Bedarf, keine Dublette und aktuell. Die Prüflast zählt die von Menschen verbrachte Zeit, einschließlich der Zeit für erneutes Prompten, und schließt Zeit aus, die nur Warten ist. Der geprüfte Anteil ist eine Kontrolle: Ungeprüftes erzeugtes Wissen wird gesondert verfolgt und sichtbar gekennzeichnet gehalten. Markierungen von Kennzahlendrift sind Gespräche, keine Strafen: Eine Markierung bedeutet, dass eine Person entschieden hat, ob die Definition anzupassen, der Trend zu annotieren oder neu zu basieren ist. Alle Kennzahlen beschreiben Prozesse und Inhalte, nicht Einzelne.

## Empfehlungen

### Volumen mit Nützlichkeit koppeln

**1. Bauen Sie eine Nützlichkeitsprüfung in jede Volumenkennzahl ein.** Nennen Sie für jede Volumen- oder Geschwindigkeitskennzahl auf Ihrem Dashboard eine Nützlichkeitskennzahl, die ein Mensch beurteilt hat. Erstellte Tickets koppeln mit Lösungsqualität, geschriebene Artikel mit Nutzung und Genauigkeit der Artikel, gemergte Changes mit Bestand und Nacharbeit (siehe Thema 10.2, KI-gestützte Arbeit messen). Zeigen Sie sie zusammen und besprechen Sie, wenn sie auseinanderlaufen.

**2. Ziehen und beurteilen Sie regelmäßig Stichproben.** Ziehen Sie jeden Monat eine Zufallsstichprobe von Elementen aus den Strömen, die KI berührt, und lassen Sie eine qualifizierte Person sie gegen ein schriftliches Raster beurteilen. Erfassen Sie den nützlichen Anteil und die Gründe, warum Elemente durchfallen. Rotieren Sie Reviewer und halten Sie sie unabhängig von den Erzeugern. Stichproben sind die Hauptverteidigung gegen langsame Verwässerung.

**3. Berichten Sie Ergebnisse vor Outputs.** Beginnen Sie in Führungsberichten mit Ergebnissen: gelöste Probleme, zufriedene Nutzer, vermiedene Defekte. Stellen Sie Outputzahlen danach, als Kontext. Wäre der Bericht auch ohne die Outputzahlen noch wertvoll, ist er gut ausgerichtet.

### Prüfung und Rauschen kontrollieren

**4. Messen Sie die Prüflast.** Schätzen Sie die Zeit, die für das Prüfen und Korrigieren erzeugter Arbeit aufgewendet wird, und verfolgen Sie sie als Trend je Outputeinheit. Steigt sie mit dem Output, ist der Nettogewinn kleiner, als die Erzeugungszahlen nahelegen, und Reviewer sind womöglich auf dem Weg zur Überlast. Beziehen Sie die Last in die Kosten je Aufgabe ein (siehe Thema 10.1, KI in der Messung des Service-Managements).

**5. Begrenzen Sie, was in das System gelangt.** Entscheiden Sie, welcher erzeugte Inhalt automatisch erstellt und veröffentlicht werden darf und was Review braucht. Setzen Sie Grenzen für Größe und Zahl erzeugter Changes in einem Review. Machen Sie es leicht, Nein zu Volumen zu sagen. Eine kleinere Warteschlange mit klareren Elementen dient Nutzern besser.

**6. Führen Sie die Wissensdatenbank wie ein Produkt.** Kennzeichnen Sie erzeugten Inhalt, verlangen Sie Review vor der Veröffentlichung, stellen Sie Dubletten und veraltete Elemente ein und verfolgen Sie Redundanz und Nutzung. Eine Wissensdatenbank ist in dem Maß nützlich, wie Nutzer ihr vertrauen. Entfernen Sie Artikel, die niemand nutzt und für die niemand bürgen kann (siehe Thema 3.6, Kennzahlen für das Wissensmanagement).

**7. Halten Sie Alarm- und Ticketströme sauber.** Erzeugt KI Tickets aus Alarmen oder Zusammenfassungen, messen Sie den nützlichen Anteil und die Dubletten. Stimmen Sie energisch ab. Behandeln Sie ein fallendes Signal-Rausch-Verhältnis als Incident aus eigenem Recht, denn es schadet der Reaktion, wenn echter Ärger kommt.

### Schleifen unterbrechen und die Basislinie beobachten

**8. Verhindern Sie, dass erzeugter Inhalt sich ungeprüft selbst speist.** Wo ein Assistent auf eine Wissensdatenbank, eine Ticket-Historie oder frühere Berichte zurückgreift, stellen Sie sicher, dass erzeugtes Material in diesen Quellen geprüft wurde oder gekennzeichnet und entsprechend gewichtet ist. Beproben Sie die Kette: Wählen Sie eine Antwort und verfolgen Sie sie durch ihre Quellen zurück, um zu sehen, woher sie kam. Ungeprüfte Schleifen verstärken Fehler.

**9. Basieren Sie neu, wenn sich die Daten verschieben.** Annotieren Sie nach der Einführung von KI Trenddiagramme und beginnen Sie, wo sich die Art der Daten geändert hat, eine neue Basislinie. Prüfen Sie Verteilungen, nicht nur Summen: Ticketlänge, Kategorienmix und Zeit zum Erstellen können sich alle verschieben. Markierungen von Kennzahlendrift stoßen diese Gespräche an (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

**10. Suchen Sie nach Rebound.** Wird eine Aufgabe billiger, fragen Sie, ob die Nachfrage nach ihr wachsen wird. Entscheiden Sie vorab, wie gesparte Zeit zu nutzen ist, damit sie nicht von mehr Output geringen Werts aufgesogen wird. Ein Team, das mit gleichem Aufwand doppelt so viele Berichte erzeugt, tut womöglich weniger nützliche Arbeit.

### Menschliche Aufmerksamkeit in der Schleife halten

**11. Schützen Sie die Aufmerksamkeit von Reviewern und Nutzern.** Review-Kapazität und Aufmerksamkeit sind knapp. Verringern Sie das Volumen des Materials, das Menschen lesen müssen, geben Sie Reviewern realistische Lasten und fragen Sie sie, was schwieriger wird. Ein nachhaltiges Tempo schließt das Tempo des Lesens und Urteilens ein (siehe Thema 9.2, Kennzahlen für Zufriedenheit und Wohlbefinden).

**12. Fragen Sie Nutzer und Stakeholder, ob das Signal klar ist.** Die kontinuierliche Einbeziehung der Menschen, die die Outputs nutzen, ist der beste Test. Fragen Sie, ob die Wissensdatenbank leichter oder schwerer zu nutzen ist, ob Berichte ihnen sagen, was sie brauchen, ob die Warteschlange klarer wirkt. Ihre Antworten und Kommentare sollten neben den Zahlen gelesen werden.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Verhältnis von Output zu Ergebnis | Eine Ergebniskennzahl wählen, die mit dem Volumen steigt; den Zeitraum ändern | Ergebnis im Register festgelegt; mit Zufriedenheit und Wiedereröffnungsrate vergleichen |
| Anteil nützlicher Elemente | Leichte Elemente beproben; nachsichtiges Raster; Reviewer, die vom Erzeuger beeinflusst werden | Zufallsstichprobe; schriftliches Raster; unabhängige, rotierende Reviewer |
| Prüflast | Review-Zeit nicht erfassen; Prüfen auf nachgelagerte Teams verlagern | Nachgelagerte Nacharbeit einbeziehen; Reviewer nach der Last fragen |
| Redundanzrate von Inhalten | Enge Abgleichsregeln, die Dubletten verpassen; verschiedene Elemente zusammenführen | Dubletten von Hand beproben; Zusammenführungsregeln protokollieren |
| Geprüfter Anteil erzeugten Wissens | Review als abgeschlossen markieren, ohne zu lesen; Reviews in Massen | Reviews stichprobenartig auf Substanz prüfen; Zeit je Review; Fehlerrate in veröffentlichten Elementen |
| Zufluss des Backlogs gegenüber Lösung | Elemente automatisch schließen; Elemente teilen | Lösungsqualität prüfen; Wiedereröffnungsrate; geschlossene Elemente beproben |
| Markierungen von Kennzahlendrift | Nicht markieren, um Arbeit zu vermeiden; alles markieren | Jedes Quartal alle Kennzahlen überprüfen; für jede Markierung eine Entscheidung verlangen |

Ein gesunder Befund ist ein stabiler oder steigender Anteil nützlicher Elemente bei wachsendem Volumen, eine Prüflast, die bekannt und tragbar ist, eine Wissensdatenbank mit niedriger Redundanz und geprüftem erzeugtem Inhalt, Warteschlangen mit klarem Signal und eine Führungssicht, die mit Ergebnissen beginnt.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Outputs zählen | Einfach, vertraut | Bläht sich auf; belohnt Volumen |
| Ergebnisse messen | Spiegelt Wert | Langsamer; schwerer zuzuordnen |
| Beproben und beurteilen | Erkennt Verwässerung | Braucht geschulte Reviewer; Aufwand |
| Automatische Qualitätsbewertung | Skaliert | Die Meinung eines anderen Modells; kann dieselben blinden Flecken teilen |
| Alles Erzeugte prüfen | Sicher | Beseitigt den Nutzen; Reviewer überlastet |
| Eine Stichprobe prüfen | Praktisch | Manche schlechten Elemente passieren |
| Offene Erzeugung erlauben | Schnell, breit | Rauschen; Vertrauen erodiert |
| Erzeugung auf genehmigte Nutzungen begrenzen | Saubereres Signal | Langsamere Einführung; verpasster Nutzen |

Die Antwort in Worten ist, Ergebnisse zu messen, Nützlichkeit mit Menschen zu beproben und zu beurteilen, zu begrenzen, was ohne Review in gemeinsame Speicher gelangt, und Basislinien neu zu prüfen. Nutzen Sie automatische Bewertung als Hilfe und nicht als Richter.

## Fragen für die Diskussion im Team

**1. Welche unserer Zahlen ist gestiegen, seit wir KI nutzen, und was hat sie für die Menschen getan, denen wir dienen?**
Listen Sie die Zahlen auf. Schauen Sie bei jeder auf das Ergebnis, das sie spiegeln sollte. Die Moderation sollte festhalten, wo sich das Ergebnis nicht bewegte. Koppeln Sie diese Zahlen mit einer Nützlichkeitsprüfung.

**2. Wie viel dessen, was wir im letzten Monat veröffentlicht oder erstellt haben, würden wir gern Zeile für Zeile verteidigen?**
Ziehen Sie eine Zufallsstichprobe und lesen Sie sie gemeinsam. Markieren Sie, was nützlich, dünn, falsch oder doppelt ist. Besprechen Sie die Rate und die Ursachen. Einigen Sie sich auf einen Standard für das, was in gemeinsame Speicher kommt.

**3. Wo wird Prüfen zu unserem Engpass?**
Fragen Sie die Reviewer. Schauen Sie auf Warteschlangen von Reviews, Review-Tiefe und den Aufwand, den sie jetzt tragen. Einigen Sie sich auf eine Grenze für Größe oder Zahl erzeugter Elemente je Review und einen Weg, die Last zu messen.

**4. Welcher erzeugte Inhalt speist hier anderen erzeugten Inhalt?**
Verfolgen Sie eine typische Antwort zu ihren Quellen zurück. Wo begann die Kette? Besprechen Sie, wo ein Mensch die Kette prüfen oder den Inhalt kennzeichnen sollte.

**5. Was würde ein Nutzer jetzt über unsere Wissensdatenbank sagen, verglichen mit vor einem Jahr?**
Lesen Sie jüngere Kommentare und schauen Sie auf Nutzungsdaten. Fragen Sie, ob es leichter oder schwerer ist, eine vertrauenswürdige Antwort zu finden. Einigen Sie sich auf eine Bereinigung und eine Regel für neuen Inhalt.

**6. Welche unserer Trends sollten wir mit einer neuen Basislinie neu starten?**
Listen Sie die Kennzahlen auf, die vom Volumen oder davon abhängen, wie Elemente erstellt werden. Suchen Sie nach Formveränderungen seit dem Aufkommen von KI. Annotieren Sie die Trends und entscheiden Sie, welche eine frische Basislinie brauchen.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams erzeugen einen großen Teil des Volumens und tragen die Wartung. Sie sollten kleinere, klarere Changes bevorzugen, erzeugtes Material geprüft und gekennzeichnet halten und Bestand und Nacharbeit beobachten. Sie sollten Kennzahlen auf Grundlage erzeugten Volumens ablehnen und Ergebniskennzahlen verlangen.

### Service- und Betriebsteams

Betriebsteams leben in den Warteschlangen, Alarmen und der Wissensdatenbank, die Verwässerung beschädigt. Sie sollten von KI erstellte Tickets und Alarme abstimmen, um das Signal stark zu halten, erzeugtes Wissen vor der Veröffentlichung prüfen und berichten, wenn der Strom zu Rauschen wird. Sie sind am besten platziert, Nützlichkeit zu beurteilen.

### Führung und Governance

Führungskräfte erhalten die Dashboards, die Inflation verzerrt. Sie sollten Ergebnisse zuerst verlangen, Nützlichkeitsprüfungen neben dem Volumen fordern, Review-Kapazität finanzieren und akzeptieren, dass manche Kennzahlen eine neue Basislinie brauchen. Die Governance sollte prüfen, dass erzeugter Inhalt in gemeinsamen Speichern geprüft und gekennzeichnet ist.

### Kunden und Nutzer

Nutzer tragen die Kosten der Verwässerung, wenn Antworten falsch sind, Artikel einander widersprechen und Antworten lang und leer sind. Sie wollen kurze, richtige, relevante Hilfe. Ihre Reaktion auf die Qualität dessen, was sie erhalten, ist ein direkter Test, ob das Signal überlebte.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Gruppe eines globalen Pharmaunternehmens schaltet einen KI-Assistenten zum Entwerfen von Wissensartikeln, Zusammenfassen von Tickets und Vorbereiten wöchentlicher Statusberichte frei. Binnen eines Quartals sieht das Dashboard ausgezeichnet aus. Die Zahlen unten sind illustrativ.

Die monatlich erstellten Wissensartikel steigen von 140 auf 610. Tickets tragen detaillierte KI-geschriebene Zusammenfassungen. Wöchentliche Berichte laufen auf zwölf Seiten. Die Leiterin der Servicequalität bemerkt, dass die Zufriedenheit mit dem Self-Service gefallen ist und dass der Service Desk mehr Kontakte mit „der Artikel hat nicht geholfen“ meldet. Sie beprobt 100 der neuen Artikel mit zwei erfahrenen Agenten. Nur 54 werden als nützlich beurteilt: 23 doppeln vorhandene Artikel, 15 enthalten veraltete oder falsche Schritte, und 8 sind zu vage, um danach zu handeln. Von den neuen Artikeln wurden 71 Prozent ohne menschliches Review veröffentlicht. Die Wissensdatenbank hält nun etwa 3.200 Artikel, mit einer Redundanzrate, die sie auf 28 Prozent schätzt, gegenüber 9 Prozent vor einem Jahr. Agenten berichten, dass das Finden einer vertrauenswürdigen Antwort länger dauert. Die Prüflast für die Artikel-Redakteure des Service Desks ist auf etwa 40 Stunden pro Woche gewachsen, von 12. Die KI-geschriebenen Zusammenfassungen von Tickets lassen spätere KI-erzeugte Antworten auf Text beruhen, den niemand schrieb, und bei der Rückverfolgung von fünf Antworten durch ihre Quellen stützten sich zwei auf eine Zusammenfassung, die das Problem falsch dargestellt hatte. Die wöchentlichen Statusberichte sagen, wenn man sie liest, wenig, was nicht schon im vorigen stand, und Stakeholder haben aufgehört, über Seite zwei hinaus zu lesen.

Sie schlägt vier Änderungen vor, die das Führungsteam des Service und die Wissenseigner übernehmen. Erzeugte Artikel brauchen vor der Veröffentlichung das Review einer benannten Redakteurin und sind bis zur Genehmigung gekennzeichnet. Eine Grenze von einem erzeugten Artikel je Themencluster verhindert Dubletten, und ein Durchgang führt redundante Elemente zusammen oder stellt sie ein. Berichtsvorlagen werden auf zwei Seiten gekürzt, die mit Ergebnissen beginnen, und die KI wird nur genutzt, um die Abschnitte zu entwerfen, die ein Mensch dann bearbeitet. Ticket-Zusammenfassungen werden als erzeugt markiert, und jeden Monat wird eine Stichprobe geprüft. Das Dashboard berichtet Anteil nützlicher Elemente, Redundanzrate, geprüften Anteil und Prüflast neben den Artikelzahlen.

Nach zwei Quartalen fallen die monatlich erstellten Artikel auf 190, der Anteil nützlicher Elemente steigt auf 91 Prozent, die Redundanzrate fällt auf 11 Prozent, der geprüfte Anteil beträgt 100 Prozent, und die Prüflast stabilisiert sich bei etwa 16 Stunden pro Woche. Die Zufriedenheit mit dem Self-Service erholt sich, und Kontakte mit „der Artikel hat nicht geholfen“ fallen. Stakeholder lesen den zweiseitigen Bericht. Ein Direktor bittet um ein Ziel von 1.000 Artikeln im Monat, um den Wert des KI-Programms zu zeigen. Die Leiterin der Servicequalität erklärt, dass die Zählung das Problem war, und schlägt vor, Nützlichkeit und Nutzung zu verfolgen. Die Entscheidung wird festgehalten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Ein regelmäßiges Review, ob jede Zahl noch Nützlichkeit spiegelt, hilft einem Team, Inflation früh zu bemerken, und Stakeholder können sagen, was sie tatsächlich nutzen. Zu beachten ist, dass das Verschärfen einer Zahl, nachdem Inflation bemerkt wurde, den Zyklus neu beginnt.

### KI

KI macht Volumen und Geschwindigkeit billig, sodass sich jede Zahl für Volumen oder Geschwindigkeit aufbläht. Koppeln Sie jede mit dem Anteil der Elemente, die ein Mensch für nützlich hielt, und der Prüflast und prüfen Sie auf redundanten Inhalt. Zu beachten ist, dass KI, die KI-Ausgaben prüft, dieselben blinden Flecken teilen kann; halten Sie also menschliche Stichproben.

### Automatisierung

Automatisieren Sie die Erkennung von Dubletten, Beinahe-Dubletten und veraltetem Inhalt und messen Sie die Erkennung an falsch positiven Treffern. Zu beachten ist, dass automatisches Bereinigen seltene, aber wichtige Elemente entfernen kann.

### Analytik

Berichten Sie das Verhältnis von Output zu Ergebnis und den Anteil nützlicher Elemente mit Stichprobengrößen. Die Entscheidung, die dies untermauert, ist, welche Zahlen nicht mehr zu berichten sind. Zu beachten ist, dass das Verhältnis davon abhängt, wie Ergebnisse definiert werden; nennen Sie es also.

## Branchenperspektive

**Startup.** Erzeugung ist billig und Review-Zeit knapp. Halten Sie Dokumentation und Tickets kurz, prüfen Sie, was Kunden lesen werden, und löschen Sie großzügig. Eine kleine, richtige Menge an Artikeln schlägt eine große Menge zweifelhafter.

**Kleinunternehmen.** Es gibt wenig Kapazität zum Prüfen, begrenzen Sie also, was das Werkzeug erzeugt. Bevorzugen Sie eine Handvoll verifizierter Anleitungen und Vorlagen. Hüten Sie sich, erzeugtes Material ungeprüft auf öffentlichen Seiten zu veröffentlichen.

**Großunternehmen.** Größe verstärkt Rauschen. Etablieren Sie Inhalts-Governance mit Eignern, Kennzeichnungen und Review-Regeln, messen Sie Nützlichkeit über die Wissensdatenbank und führen Sie regelmäßige Bereinigungen durch. Teilen Sie Raster über Teams und vergleichen Sie Trends, nicht Teams.

**Behörden und öffentlicher Sektor.** Öffentliche Inhalte müssen genau und barrierefrei sein, und Fehler können schaden. Verlangen Sie Review erzeugter öffentlicher Informationen, führen Sie Aufzeichnungen darüber, wie sie entstanden, und wenden Sie Standards einfacher Sprache und Barrierefreiheit an. Aufbewahrungs- und Aktenregeln können für erzeugtes Material gelten (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten, sich gegen Inflation zu schützen, sind bescheiden: Review-Zeit für Stichproben, redaktioneller Aufwand für erzeugten Inhalt, Werkzeug zur Dublettenerkennung und der Aufwand, Trends neu zu basieren. Die Kosten, es nicht zu tun, sind größer, aber diffus: Nutzer, die dem Self-Service nicht mehr trauen, Reviewer, die ausbrennen, auf aufgeblähten Zahlen getroffene Entscheidungen und Bereinigungsprojekte.

Bauen Sie den Business Case aus Ihren eigenen Daten: Anteil nützlicher Elemente und Prüflast über die Zeit, das Volumen der durch unhilfreichen Inhalt verursachten Kontakte und die Kosten einer Bereinigung der Wissensdatenbank. Vermeiden Sie veröffentlichte Zahlen zur Qualität erzeugten Inhalts, die je nach Werkzeug, Aufgabe und Methode weit schwanken. Beziehen Sie die vermiedenen Kosten von Reputationsschaden durch das Veröffentlichen falscher Informationen ein (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Volumen feiern.** Es belohnt Rauschen. Feiern Sie Ergebnisse und Nützlichkeit.
- **Geschwindigkeit des ersten Entwurfs als Produktivitätsgeschichte.** Die Ersparnis kann im Prüfen verschwinden. Messen Sie die Zeit bis zu einem verifizierten Ergebnis.
- **Erzeugten Inhalt ohne Review veröffentlichen.** Vertrauen erodiert leise. Prüfen und kennzeichnen Sie.
- **Erzeugten Inhalt die Erzeugung speisen lassen.** Fehler summieren sich. Prüfen Sie die Kette.
- **Unveränderte Basislinien.** Trends führen nach einem Technologiewechsel in die Irre. Annotieren und basieren Sie neu.
- **Reviewer überlasten.** Review wird zum Abnicken. Begrenzen Sie das Volumen und messen Sie die Last.
- **Für alles einen KI-Richter nutzen.** Er teilt womöglich die blinden Flecken des Erzeugers. Halten Sie Menschen in der Schleife.
- **Den Rebound ignorieren.** Billigere Arbeit zieht mehr Arbeit an. Entscheiden Sie, wofür gesparte Zeit da ist.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Kopplung und Stichproben | Volumen allein berichtet | Informelle Eindrücke von Qualität | Jede Volumenkennzahl mit einer beprobten Nützlichkeitsprüfung gekoppelt | Nützlichkeit, Last und Redundanz gesteuert, mit Zielen für Review, nicht für Volumen | Organisationsübergreifende Sicht auf Signalqualität; Raster mit Partnern geteilt |
| Inhalt und Schleifen | Erzeugter Inhalt untergemischt | Etwas Kennzeichnung | Erzeugter Inhalt vor der Veröffentlichung gekennzeichnet und geprüft; Ketten beprobt | Schleifen überwacht; Speicher kuratiert; Dubletten planmäßig eingestellt | Herkunft Ende zu Ende über Werkzeuge und Lieferanten verfolgt |
| Basislinien und Aufmerksamkeit | Trends über den Wechsel hinweg gelesen | Annotationen auf einigen Diagrammen | Basislinien zurückgesetzt, wo sich Daten änderten; Rebound bedacht | Drift-Markierungen vierteljährlich überprüft; Reviewer-Last gesteuert | Kennzahlenentwurf passt sich mit Stakeholdern fortlaufend an Technologiewandel an |

## Checkliste

- [ ] Jede Volumen- oder Geschwindigkeitskennzahl hat einen von einem Menschen beurteilten Nützlichkeitsbegleiter.
- [ ] Eine Zufallsstichprobe von KI-berührten Elementen wird monatlich gegen ein schriftliches Raster geprüft.
- [ ] Die Prüflast wird geschätzt und als Trend verfolgt.
- [ ] Erzeugtes Wissen wird vor der Veröffentlichung gekennzeichnet und geprüft.
- [ ] Redundanz in der Wissensdatenbank wird gemessen und verringert.
- [ ] Alarm- und Ticketströme werden auf nützlichen Anteil und Dubletten überwacht.
- [ ] Ketten von erzeugten Outputs zurück zu ihren Quellen werden beprobt.
- [ ] Trends über die Einführung von KI hinweg werden annotiert oder neu basiert.
- [ ] Berichte an die Führung beginnen mit Ergebnissen.
- [ ] Nutzer und Stakeholder werden gefragt, ob das Signal klarer oder rauschiger ist.

## KI-Prompts

**Ein Nützlichkeitsraster erstellen.**

```text
Draft a short rubric (no more than six criteria) for judging whether a [knowledge
article, ticket summary, status report] is useful in [type of organization].
Include correctness, relevance to a real need, duplication, currency, and
clarity, with a three-level rating and examples of each level. Do not invent
statistics. List your assumptions and how to keep reviewers consistent.
```

**Einen Signalabfall analysieren.**

```text
Since introducing AI for [task], these figures changed: [paste volumes, resolution,
satisfaction, reopen rate, reviewer hours]. Describe what the pattern suggests
about inflation or dilution, which changes may be due to easier creation, what
to sample next, and which metrics may need a new baseline. Do not assume
causes the data cannot support. List your assumptions.
```

**Eine Bereinigung der Wissensdatenbank planen.**

```text
Our knowledge base has [number] articles, of which [number] were generated in the
last [period]. Propose a clean-up plan: how to detect duplicates and stale items,
how to prioritize by use, how to review generated articles, rules to prevent
recurrence, and measures to track. Do not assume specific tools. List your
assumptions and risks.
```

**Eine Kette erzeugten Inhalts nachverfolgen.**

```text
Here is an AI-generated answer and the sources it drew on: [paste]. Trace each
claim to its source and mark whether the source was human-written, reviewed
generated content, or unreviewed generated content. Identify where an error
could have entered and suggest a check. Do not assume facts beyond the text. List
your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um den Nützlichkeitsbegleiter für eine Volumen- oder Geschwindigkeitskennzahl zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine von KI betroffene Kennzahl Volumen mit beprobter Nützlichkeit koppelt und ihren Manipulationsvektor und ihre Leitplanke trägt.

## Wichtigste Erkenntnisse

- Macht KI Output billig, blähen sich Volumen- und Geschwindigkeitskennzahlen auf, und der nützliche Anteil kann sinken.
- Koppeln Sie jede Volumen- oder Geschwindigkeitskennzahl mit einer beprobten, von Menschen beurteilten Nützlichkeitsprüfung.
- Messen Sie die Zeit bis zu einem verifizierten Ergebnis und die Prüflast, denn Prüfen wird zum Engpass.
- Kennzeichnen und prüfen Sie erzeugten Inhalt, bevor er in gemeinsame Speicher gelangt, und halten Sie Schleifen davon ab, sich ungeprüft selbst zu speisen.
- Basieren Sie Trends nach einem Technologiewechsel neu und beginnen Sie Berichte mit Ergebnissen.
- Entscheiden Sie vorab, wofür gesparte Zeit da ist, und schützen Sie die Aufmerksamkeit von Reviewern und Nutzern.

## Quellen und weiterführende Literatur

1. Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., and Gal, Y., "AI models collapse when trained on recursively generated data," *Nature*, 631, 2024.
2. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
11. Wikipedia, [Information overload](https://en.wikipedia.org/wiki/Information_overload).
12. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
13. Wikipedia, [Alert fatigue](https://en.wikipedia.org/wiki/Alert_fatigue).
14. Wikipedia, [AI slop](https://en.wikipedia.org/wiki/AI_slop).
15. Wikipedia, [Brandolini's law](https://en.wikipedia.org/wiki/Brandolini%27s_law).
16. Wikipedia, [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox).
17. Wikipedia, [Model collapse](https://en.wikipedia.org/wiki/Model_collapse).
18. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
