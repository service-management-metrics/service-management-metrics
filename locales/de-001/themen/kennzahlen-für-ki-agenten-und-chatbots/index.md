# Kennzahlen für KI-Agenten und Chatbots

**Ein Dialogassistent hat nur dann geholfen, wenn das Problem des Nutzers gelöst ist und gelöst bleibt. Messen Sie also verifizierte Lösung, Rückkehr, die Qualität der Übergabe an einen Menschen und den Schaden falscher Handlungen, und belohnen Sie einen Bot nie dafür, Menschen von Hilfe fernzuhalten.**

## Überblick und Motivation

Viele Organisationen setzen heute einen Dialogassistenten zwischen Nutzer und Service Desk, und manche geben KI-Agenten die Fähigkeit zu handeln: ein Passwort zurücksetzen, Ausrüstung bestellen, einen Service neu starten, eine Konfiguration ändern. Ein [Chatbot](https://en.wikipedia.org/wiki/Chatbot) ist eine Softwareanwendung, die ein Gespräch führt, und ein [virtueller Assistent](https://en.wikipedia.org/wiki/Virtual_assistant) fügt die Fähigkeit hinzu, im Namen des Nutzers Aufgaben auszuführen. Die weitere Idee eines [intelligenten Agenten](https://en.wikipedia.org/wiki/Intelligent_agent) ist ein System, das eine Umgebung wahrnimmt und auf Ziele hin handelt. Moderne Sprachmodelle machen diese Systeme weit fähiger zu offenem Gespräch als ihre regelbasierten Vorgänger, und das erste Dialogprogramm, Joseph Weizenbaums ELIZA der 1960er Jahre, zeigte bereits, wie bereitwillig Menschen einer Maschine Verständnis zuschreiben, die bloß plausible Antworten erzeugt.

Der Reiz ist offensichtlich. Nutzer bekommen zu jeder Stunde Hilfe ohne Warten. Teams verbringen weniger Zeit mit Routineanfragen. [Self-Service](https://en.wikipedia.org/wiki/Self-service) ist seit Langem ein Ziel des ITSM, und Shift-Left, das Verlagern der Lösung an frühere und billigere Stellen, ist eine Kernidee des Service Desks (siehe Thema 3.7, Kennzahlen für Self-Service und Automatisierung). Das Messproblem ist, dass die offensichtlichen Zahlen das Falsche belohnen. Ein Bot, der ein Gespräch beendet, gilt als hätte er es „eingedämmt“, ob dem Nutzer geholfen wurde oder er aufgab. Ein Bot, der nie einen Menschen anbietet, maximiert die Eindämmung. Ein Bot, der selbstsicher eine falsche Antwort gibt, erzeugt ein stilles Versagen, das Tage später als ärgerlicher Kontakt erscheint.

Zwei Arten von Systemen brauchen unterschiedliche Kennzahlen.

- **Dialogassistenten** beantworten Fragen, führen Nutzer und sammeln Informationen. Ihr Risiko sind falsche oder nicht hilfreiche Antworten und das Gefangenhalten von Nutzern in Schleifen. Kennzahlen konzentrieren sich auf Lösung, Genauigkeit und den Weg zu einem Menschen.
- **Agenten, die handeln,** verändern Dinge in der Welt: Konten, Systeme, Tickets, Geld. Ihr Risiko ist eine falsche Handlung mit realen Folgen. Kennzahlen konzentrieren sich auf Richtigkeit von Handlungen, Umkehrbarkeit, Berechtigungsgrenzen und Audit-Trails. Diese Nutzungen verlangen stärkere Governance und oft menschliche Genehmigung für folgenreiche Schritte (siehe Thema 10.5, Kennzahlen für KI-Governance und Risiken).

Mehrere Entwurfsfragen prägen, was Sie messen.

- **Ehrlichkeit darüber, mit wem der Nutzer spricht.** Viele Rechtsordnungen haben oder entwickeln Pflichten, Menschen zu sagen, wenn sie mit einem KI-System interagieren, und diese Regeln entwickeln sich nach Stand Oktober 2026 weiter, prüfen Sie also, was für Sie gilt. Gute Praxis ist, es ohnehin klar zu sagen.
- **Ein Ausweg.** Nutzer müssen ohne Mühe einen Menschen erreichen können. Ein Bot, der den Weg zu einem Menschen verbirgt, ist ein [Dark Pattern](https://en.wikipedia.org/wiki/Dark_pattern), ein Entwurf, der Nutzer zu Ergebnissen verleitet oder in sie hineinzwingt, die sie nicht wählen würden.
- **Barrierefreiheit.** Dialogschnittstellen müssen für Menschen mit assistiver Technologie, mit begrenzter Sprachfähigkeit und für solche funktionieren, die eine andere Sprache oder einen anderen Kanal brauchen.
- **Automatisierte Entscheidungen.** Beeinflusst die Ausgabe eines Assistenten Rechte oder Zugang einer Person, gilt das Thema der [automatisierten Entscheidungsfindung](https://en.wikipedia.org/wiki/Automated_decision-making) und die Pflichten darum. Halten Sie solche Entscheidungen bei Menschen oder mit starken Schutzvorkehrungen.

Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) ist hier anschaulich: Sind Eindämmung oder Umleitung das Ziel, ist der billigste Weg, es zu erreichen, den Menschen schwerer erreichbar zu machen (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen). Die Kennzahlen unten stellen Lösung und Nutzerergebnis an die erste Stelle.

## Leitprinzipien

- **Lösung ist die Kennzahl, nicht Eindämmung.** Ein Gespräch, das endete, ist kein Problem, das gelöst wurde.
- **Verifizieren und auf Rückkehr prüfen.** Zählen Sie einen Kontakt nur als gelöst, wenn der Nutzer bestätigt oder nicht zurückkommt.
- **Immer einen Weg zu einem Menschen bieten.** Machen Sie den Weg leicht, schnell und sichtbar und tragen Sie den Kontext hinüber.
- **Ehrlich über das System sein.** Sagen Sie, dass es eine KI ist, was sie kann und was nicht.
- **Begrenzen, was Agenten dürfen.** Gewähren Sie die geringsten Rechte, verlangen Sie Genehmigung für folgenreiche Handlungen und führen Sie einen Audit-Trail.
- **Die Qualität der Antworten durch Stichproben messen.** Geschliffene Antworten können falsch sein.
- **Nutzern und dem Personal zuhören, das die Scherben aufsammelt.** Sie sehen, was die Kennzahlen verpassen.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Rate verifizierter Lösung | Anteil der Bot-Gespräche, in denen der Nutzer bestätigte, dass das Anliegen gelöst war, oder binnen eines genannten Zeitraums nicht zurückkehrte | Gespräche mit bestätigter Lösung oder ohne Folgekontakt binnen 7 Tagen / Gespräche, die mit einem lösbaren Anliegen begannen | Prozent | Gesprächsprotokolle, Nutzerbestätigung, Ticket- und Kontaktdaten | Service Desk; Wissensmanagement | Funktionierendes Ergebnis für den Nutzer | Wöchentlich |
| Rate der Folgekontakte | Anteil der vom Bot beendeten Gespräche, auf die ein Kontakt zum selben Anliegen über einen beliebigen Kanal folgt | Gespräche, auf die binnen 7 Tagen ein verwandter Kontakt folgt / ohne Übergabe beendete Gespräche | Prozent | Gesprächsprotokolle, mit Ticket- und Kontaktdatensätzen verbunden | Service Desk; Incident-Management | Entwichene Defekte | Wöchentlich |
| Vollständigkeit des Übergabekontexts | Anteil der Übergaben an einen Menschen, bei denen der Mensch die nötigen Informationen hatte, ohne den Nutzer wiederholen zu lassen | vom empfangenden Agenten als vollständig beurteilte Stichproben-Übergaben / beprobte Übergaben | Prozent | Beprobte Übergaben, Agenten-Feedback | Service Desk; Wissensmanagement | Reibungslose Zusammenarbeit über die Grenze | Monatlich |
| Zeit bis zum Menschen | Zeit von der Bitte des Nutzers um eine Person oder der Entscheidung des Bots zur Übergabe, bis ein Mensch übernimmt | Median und 85. Perzentil der Minuten | Minuten | Gesprächsprotokolle, Warteschlangendaten | Service Desk; Incident-Management | Reaktionsfähigkeit, wenn der Nutzer Hilfe braucht | Wöchentlich |
| Genauigkeit der Antworten | Anteil der beprobten Bot-Antworten, die ein qualifizierter Reviewer für richtig, vollständig und sicher hält | als richtig beurteilte Antworten / beprobte Antworten | Prozent | Stichprobenreview | Wissensmanagement; Qualitätssicherung | Definition of Done für eine Antwort | Monatlich |
| Zufriedenheit und Aufwand beim Bot | Bewertung des Nutzers zu Zufriedenheit und Leichtigkeit nach einem Gespräch, mit Kommentaren | positive Bewertungen / Bewertungen; mittlere Aufwandsbewertung | Prozent; Skalenpunkte | Kurze Umfrage nach dem Gespräch | Service Desk; Kundenerlebnis | Feedback zu funktionierender Software | Wöchentlich |
| Rückgängig-Rate von Agentenhandlungen | Anteil der von einem KI-Agenten vorgenommenen Handlungen, die korrigiert, rückgängig gemacht oder eskaliert werden mussten | rückgängig gemachte oder korrigierte Handlungen / vorgenommene Handlungen, nach Handlungstyp und Risikoklasse | Prozent | Audit-Protokoll der Handlungen, Change-Datensätze | Change-Befähigung; Incident-Management | Nacharbeit und Rollback | Wöchentlich |

Definieren Sie die Anliegen, die der Bot bearbeitet, und nehmen Sie von der Eindämmung diejenigen aus, die er immer übergeben soll. Die verifizierte Lösung zählt ein Gespräch nur, wenn das Anliegen im Umfang lag und der Nutzer entweder bestätigte oder keinen Folgekontakt zeigte. Die Zeit bis zum Menschen beginnt bei der Bitte des Nutzers, nicht am Ende eines Menüs. Die Genauigkeit der Antworten wird gegen Wissensdatenbank und Richtlinie von einer Person beurteilt, die den Bot nicht gebaut hat. Die Rückgängig-Rate von Agentenhandlungen wird nach Handlungstyp und Risikoklasse getrennt, und jede schädliche Handlung wird gesondert als Incident berichtet.

## Empfehlungen

### Erfolg als Lösung definieren

**1. Definieren Sie die Anliegen und das gewünschte Ergebnis.** Listen Sie die Probleme auf, die der Assistent bearbeiten soll, etwa Passwort zurücksetzen, Zugriffsstatus, Fragen nach dem Wie, und das Ergebnis für jedes: beantwortet, erledigt oder übergeben. Entscheiden Sie, welche Anliegen immer zu einem Menschen gehen müssen: Beschwerden, alles mit Not, Sicherheit, Rechten oder Geld. Ein Bot, der alles bearbeiten will, versagt an den Rändern schlimm.

**2. Messen Sie verifizierte Lösung und Rückkehr.** Fragen Sie Nutzer am Ende, ob ihr Anliegen gelöst ist, und suchen Sie auch nach verwandten Kontakten danach. Keines allein genügt: Nutzer, die aufgeben, antworten nicht, und manche, denen geholfen wurde, rufen dennoch an. Zusammen nähern sie die wahre Lösung an. Behandeln Sie die Rate der Folgekontakte als die Schlüsselleitplanke für jede Eindämmungszahl (siehe Thema 3.1, Kennzahlen für den Service Desk).

**3. Meiden Sie Eindämmung als Ziel.** Berichten Sie Eindämmung nur als beschreibende Zahl und immer neben verifizierter Lösung, Rückkehr und Zufriedenheit. Steigende Eindämmung bei steigender Rückkehr bedeutet, dass der Bot Menschen abweist. Setzen Sie kein Eindämmungsziel und binden Sie die Leistung von niemandem daran.

### Den Weg zu einem Menschen leicht und gut machen

**4. Lassen Sie Nutzer an jedem Punkt einen Menschen erreichen.** Bieten Sie einen klaren, einfachen Weg, um einen Menschen zu bitten, und halten Sie ihn ein. Messen Sie die Zeit bis zum Menschen und den Anteil der Gespräche, in denen Nutzer mehr als einmal fragten. Testen Sie den Weg regelmäßig selbst. Wo kein Mensch verfügbar ist, sagen Sie, wann einer es sein wird, und bieten Sie einen Rückruf an.

**5. Übergeben Sie mit dem Kontext.** Wenn der Bot ein Gespräch an einen Menschen weiterreicht, schließen Sie die Zusammenfassung, das Versuchte, die Worte des Nutzers und die relevanten Kontodetails ein, damit sich der Nutzer nicht wiederholt. Bitten Sie empfangende Agenten zu bewerten, ob die Übergabe vollständig war, und beproben Sie die Ergebnisse. Schlechte Übergaben lassen Nutzer dem Bot und dem Service weniger vertrauen (siehe Thema 9.3, Kennzahlen für Zusammenarbeit und Übergaben).

**6. Entwerfen Sie für alle Nutzer.** Testen Sie den Assistenten mit Nutzern, die assistive Technologie nutzen, in anderen Sprachen schreiben, in Eile oder in Not sind und mit der Technik nicht vertraut. Bieten Sie andere Kanäle an. Messen Sie verifizierte Lösung und Zufriedenheit nach Nutzergruppe, wo es sicher und rechtmäßig ist. Die Durchschnitte verbergen die, denen der Bot am meisten versagt.

### Die Qualität dessen prüfen, was er sagt und tut

**7. Beproben Sie Antworten auf Genauigkeit und Sicherheit.** Ziehen Sie jeden Monat eine Zufallsstichprobe von Gesprächen und lassen Sie eine qualifizierte Person die Antworten beurteilen: richtig, vollständig, sicher und ehrlich über Unsicherheit. Erfassen Sie Fehler nach Art: veraltet, erfunden, regelwidrig oder missverstanden. Speisen Sie Fehler in die Wissensdatenbank und die Konfiguration. Fügen Sie gezielte Tests für sensible Themen hinzu und für Versuche, den Assistenten aus seinem Umfang zu drängen.

**8. Halten Sie das Wissen aktuell.** Ein Assistent ist nur so gut wie die Inhalte und Werkzeuge, auf die er zurückgreift. Verknüpfen Sie Antwortfehler mit Wissensartikeln und messen Sie die Aktualität des Wissens, das er nutzt (siehe Thema 3.6, Kennzahlen für das Wissensmanagement). Nutzt das System Retrieval aus einer Wissensdatenbank, schließen Sie eine Prüfung ein, dass es seine Quellen angibt und die Quellen stimmen.

**9. Seien Sie ehrlich zu den Nutzern.** Sagen Sie zu Beginn, dass sie mit einer KI sprechen und was sie kann und was nicht. Geben Sie ihr keinen menschlichen Namen oder ein Auftreten, das etwas anderes nahelegt. Wo sie unsicher ist, sollte sie es sagen und einen Menschen anbieten. Prüfen Sie das geltende Recht zur Offenlegung.

### Agenten steuern, die handeln

**10. Klassifizieren Sie Handlungen nach Risiko und setzen Sie Berechtigungen entsprechend.** Definieren Sie für jede Handlung, die ein Agent vornehmen kann, ihre Risikoklasse: informativ, umkehrbar und geringe Wirkung oder folgenreich. Gewähren Sie die geringsten nötigen Rechte. Verlangen Sie menschliche Genehmigung für folgenreiche Handlungen. Führen Sie einen Audit-Trail jeder Handlung mit Grund, Nutzer und Ergebnis. Diese Kontrollen knüpfen an die Change- und Sicherheitskennzahlen früherer Teile an (siehe Thema 8.1, Kennzahlen für Sicherheitsvorfälle und Schwachstellen, und Thema 8.2, Kennzahlen für Risiken und Kontrollen).

**11. Messen Sie Richtigkeit und Umkehrbarkeit von Handlungen.** Verfolgen Sie die Rückgängig-Rate nach Handlungstyp und überprüfen Sie jede schädliche Handlung schuldfrei als Incident. Testen Sie Agenten in einer sicheren Umgebung, bevor Sie Zugriff gewähren, und testen Sie erneut, wenn sich Modell oder Werkzeuge ändern. Eine neue Modellversion kann das Verhalten ändern, behandeln Sie sie also als Change, der Kontrolle braucht (siehe Thema 4.3, Kennzahlen für die Change-Befähigung).

**12. Hören Sie den Menschen zu, die die Scherben aufsammeln.** Mitarbeitende des Service Desks sehen die Folgen von Bot-Fehlschlägen: verärgerte Nutzer, Folgekontakte und Aufräumarbeit. Fragen Sie sie regelmäßig, was der Bot falsch macht und was es schwerer macht. Ihr Feedback und die Kommentare der Nutzer sind Beleg, den keine Kennzahl vollständig erfasst, und sie sollten die nächste Änderungsrunde prägen.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Rate verifizierter Lösung | Jedes Gesprächsende als gelöst zählen; suggestive Bestätigungsfragen stellen | Bestätigung neutral definieren; Rate der Folgekontakte; Gespräche beproben |
| Rate der Folgekontakte | Nur über einen Kanal messen; kurze Fenster | Alle Kanäle verbinden; ein längeres Fenster als Kontrolle nutzen; Rückkehrer beproben |
| Vollständigkeit des Übergabekontexts | Ein langes Transkript statt einer Zusammenfassung weitergeben; leichte Übergaben beproben | Bewertung durch den empfangenden Agenten; Zufallsstichprobe; Zeit bis zur Lösung nach der Übergabe |
| Zeit bis zum Menschen | Die Uhr nach Menüs starten; eine Bestätigung der Warteschlange als Übernahme zählen | Uhr startet bei der Bitte; Übernahme bedeutet, dass ein Mensch im Gespräch aktiv ist |
| Genauigkeit der Antworten | Leichte Gespräche beproben; nachsichtige Reviewer | Zufallsstichprobe durch unabhängige Reviewer; gegnerische Testfälle |
| Zufriedenheit und Aufwand beim Bot | Nur abgeschlossene Gespräche befragen; die Umfrage dort platzieren, wo nur zufriedene Nutzer hinkommen | Auch abgebrochene Gespräche befragen; Rücklaufquote und Mischung; Kommentare lesen |
| Rückgängig-Rate von Agentenhandlungen | Rückgängigmachungen nicht protokollieren; Korrekturen als neue Arbeit umklassifizieren | Manipulationsresistentes Audit-Protokoll; Rückgängigmachungen mit Handlungen verknüpfen; Incident-Review |

Ein gesunder Befund ist hohe verifizierte Lösung bei niedriger Rückkehr, leichte und schnelle Wege zu einem Menschen mit vollständigen Übergaben, genaue Antworten im Stichprobenreview, zufriedene Nutzer über Gruppen hinweg und Agenten, deren Handlungen selten rückgängig gemacht werden müssen und nie unbemerkt Schaden anrichten.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Regelbasierter Bot | Vorhersagbar, leicht zu testen | Eng; brüchig; frustrierend außerhalb der Skripte |
| Sprachmodell-Assistent | Flexibel, geschliffen | Kann selbstsicher falsch sein; schwerer zu testen |
| Retrieval aus genehmigtem Wissen | Fundierte Antworten, leichter zu korrigieren | Hängt von der Qualität der Inhalte ab |
| Offene Generierung | Breite Abdeckung | Höheres Risiko der Erfindung |
| Menschliche Genehmigung für Handlungen | Sicherheit | Langsamer; Ermüdung der Reviewer |
| Autonome Handlungen | Geschwindigkeit | Größerer Wirkungsradius bei Fehlern |
| Strenger Umfang mit früher Übergabe | Sicher | Geringere Eindämmung |
| Breiter Umfang | Höhere Eindämmung | Mehr Fehler an den Rändern |

Die Antwort in Worten ist, mit engen, gut verstandenen Anliegen zu beginnen, Antworten in genehmigtem Wissen zu gründen, menschliche Hilfe leicht zu machen und Umfang und Autonomie nur so weit zu erweitern, wie die Kennzahlen es rechtfertigen.

## Fragen für die Diskussion im Team

**1. Wollte ein Nutzer jetzt sofort einen Menschen, wie viele Schritte brauchte es, und haben wir es selbst ausprobiert?**
Testen Sie den Weg gemeinsam. Zählen Sie die Schritte und das Warten. Die Moderation sollte jede Hürde festhalten. Einigen Sie sich auf Änderungen, die den Weg kurz machen, und messen Sie die Zeit bis zum Menschen.

**2. Welcher Anteil der von unserem Bot beendeten Gespräche löste das Problem tatsächlich?**
Prüfen Sie Rückkehr und Bestätigungen für eine Stichprobe. Vergleichen Sie mit der Eindämmungszahl. Besprechen Sie die Lücke. Entscheiden Sie, welche Zahl Führungskräfte sehen sollten.

**3. Was macht unser Bot falsch, und wer erfährt es?**
Fragen Sie den Service Desk. Überprüfen Sie beprobte Gespräche. Suchen Sie Muster: veraltete Artikel, mehrdeutige Fragen, sensible Themen. Einigen Sie sich auf einen Weg von Fehlern zu Korrekturen, mit einem Eigner.

**4. Welche Handlungen darf der Agent selbst vornehmen, und welche brauchen einen Menschen?**
Listen Sie Handlungen mit ihren Risikoklassen und Berechtigungen auf. Fragen Sie, was der schlimmste realistische Fehlschlag jeder wäre. Einigen Sie sich auf die Genehmigungsregeln und den Audit-Trail und darauf, wer schädliche Fälle überprüft.

**5. Wem versagt der Bot still?**
Denken Sie an Nutzer in Eile, in Not, mit Barrierefreiheitsbedarf oder mit begrenzter Sprache. Schauen Sie, wo sicher, auf Lösung und Zufriedenheit nach Gruppe. Einigen Sie sich auf einen Test mit solchen Nutzern.

**6. Was ließe uns den Bot abschalten oder seinen Umfang verengen?**
Definieren Sie den Beleg: Rückkehr über einer Schwelle, schädliche Handlungen, Genauigkeit unter einem Standard. Entscheiden Sie, wer entscheiden darf. Eine vorab festgelegte Stoppregel macht das Handeln leichter.

## Vier Perspektiven

### Produkt- und Lieferteams

Teams, die den Assistenten bauen, besitzen seine Qualität. Sie sollten Anliegen definieren, Antworten in genehmigtem Wissen gründen, mit gegnerischen Fällen testen, Änderungen kontrolliert ausliefern und die Fehlschläge lesen. Sie sollten Eindämmungszielen widersprechen, die das Gefangenhalten von Nutzern belohnen.

### Service- und Betriebsteams

Mitarbeitende des Service Desks arbeiten mit dem Assistenten und erben seine Fehlschläge. Sie sollten Übergaben bewerten, falsche Antworten melden, das Wissen aktuell halten und schnell übernehmen, wenn sie gebeten werden. Sie sind die besten Richter, ob der Assistent Nutzern hilft, und ihre Arbeitslast und ihr Stress gehören zum Bild.

### Führung und Governance

Führungskräfte sponsern den Assistenten und wollen Einsparungen. Sie sollten verifizierte Lösung, Rückkehr und Zufriedenheit neben der Eindämmung verlangen, eine Stoppregel fordern, den menschlichen Weg finanzieren und Risikoklassen für Agenten überprüfen. Die Governance sollte Offenlegung, Barrierefreiheit und rechtliche Pflichten prüfen.

### Kunden und Nutzer

Nutzer wollen Hilfe mit wenig Aufwand und ohne Tricks. Sie sollten wissen, dass sie mit einer KI sprechen, leicht einen Menschen erreichen können und darauf vertrauen, dass das System nicht ohne guten Grund handelt. Ihr Erlebnis, besonders des Versagens, ist der primäre Beleg, ob der Assistent es wert ist.

## In der Praxis: ein Beispiel aus dem Service-Management

Eine nationale Universität betreibt einen Service Desk für Studierende und Beschäftigte mit etwa 30.000 Kontakten im Monat. Sie startet einen Chatbot für häufige Anfragen, und das Dashboard des Anbieters berichtet eine Eindämmungsrate von 74 Prozent. Die Zahlen unten sind illustrativ.

Die Leiterin der Studierendenservices prüft nach. Unter den im letzten Monat vom Bot beendeten Gesprächen folgte in 29 Prozent binnen sieben Tagen ein verwandter Kontakt per E-Mail oder Telefon. Die verifizierte Lösung, gemessen anhand der Bestätigung des Nutzers und des Ausbleibens von Rückkehr, beträgt 49 Prozent für Anliegen im Umfang. Die mediane Zeit, nach der Bitte einen Menschen zu erreichen, beträgt 6 Minuten, mit einem 85. Perzentil von 22, teils weil der Weg drei Menüschritte verlangt. Eine Stichprobe von 100 Gesprächen, von zwei erfahrenen Beratern geprüft, findet 88 richtige Antworten und 12 fehlerhafte: 7 veraltet, 3 mit erfundenen Details zu einer Frist und 2 mit falscher Behandlung sensibler Fälle, in denen eine Studentin in Schwierigkeiten war. Empfangende Agenten bewerten 54 Prozent der Übergaben als vollständig. Die Zufriedenheit mit dem Bot ist niedriger bei Studierenden mit Screenreadern und bei denen, die in anderen Sprachen als Englisch schreiben. Das Team des Service Desks berichtet viele Kontakte, die mit „der Chatbot konnte nicht helfen“ beginnen.

Die Leiterin der Studierendenservices nimmt mit dem Team Änderungen vor. Sensible Anliegen wie Wohlergehen, Beschwerden und Streit um Gebühren werden direkt an einen Menschen geleitet, und der Bot sagt das. Auf jedem Bildschirm erscheint die Option „mit einem Menschen sprechen“, und die Zeit bis zum Menschen wird verfolgt, mit dem Ziel, während besetzter Zeiten binnen weniger Minuten zu antworten. Übergaben enthalten eine automatische Zusammenfassung und die eigenen Worte des Nutzers. Die Eigner der Wissensdatenbank beheben veraltete Artikel, und ein monatliches Stichprobenreview speist sie. Der Assistent wird darauf begrenzt, aus genehmigten Inhalten zu antworten, und muss sagen, wenn er etwas nicht weiß. Ein zweiter Pilot lässt einen Agenten nach Identitätsprüfung Passwörter zurücksetzen, wobei jede Handlung protokolliert und binnen einer Zeitgrenze umkehrbar ist und eine Rückgängig-Rate verfolgt wird. Das Dashboard ersetzt die Eindämmung durch verifizierte Lösung, Rate der Folgekontakte, Genauigkeit, Zeit bis zum Menschen und Zufriedenheit nach Gruppe.

Drei Monate später erreicht die verifizierte Lösung 66 Prozent für Anliegen im Umfang, die Rate der Folgekontakte fällt auf 14 Prozent, die mediane Zeit bis zum Menschen fällt auf 2 Minuten, der Anteil vollständiger Übergaben steigt auf 86 Prozent, und die Genauigkeit beprobter Antworten steigt auf 95 Prozent, ohne falsch behandelte sensible Fälle in der Stichprobe. Die Rückgängig-Rate von Agentenhandlungen im Passwort-Pilot beträgt 1,2 Prozent. Das Büro der Rektorin bittet um ein Eindämmungsziel von 85 Prozent. Die Leiterin der Studierendenservices erklärt, dass ein höheres Eindämmungsziel das Verbergen des Wegs zu einem Menschen belohnen würde, und schlägt verifizierte Lösung und Rückkehr als Kennzahlen vor, mit einem Review, was als Nächstes zu erweitern ist. Die Entscheidung wird festgehalten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Verbessern Sie Assistenten in kleinen Schritten mit Feedback von Nutzern und den Menschen, die übernehmen, und überprüfen Sie Fehlschläge regelmäßig mit Stakeholdern. Zu beachten ist, dass das Belohnen von Eindämmung den Bot lehrt, Menschen von Hilfe fernzuhalten.

### KI

Ein Dialogassistent hat nur geholfen, wenn das Problem gelöst ist und gelöst bleibt, messen Sie also verifizierte Lösung, Rückkehr, Übergabequalität und das Rückgängigmachen von Agentenhandlungen. Definieren Sie die Rolle des Menschen: wer Handlungen genehmigt, wann der Bot übergeben muss und wie ein Mensch ihn übersteuert. Zu beachten ist, dass ein angenehmes Gespräch dennoch an der Aufgabe scheitern kann.

### Automatisierung

Protokollieren Sie jedes Gespräch und jede Agentenhandlung, mit Berechtigungen und einem Weg des Rollbacks, und messen Sie die Automatisierung an falschen Handlungen. Zu beachten ist, dass ein Agent mit breiten Berechtigungen schnell Schaden anrichten kann; begrenzen Sie also den Umfang und prüfen Sie Protokolle.

### Analytik

Berichten Sie Lösung, verifiziert durch Nutzerbestätigung oder ein Fenster ohne Rückkehr, mit Zählungen und lesen Sie eine Stichprobe von Gesprächen. Die Entscheidung, die dies untermauert, ist, wo der Assistent sicher zu erweitern ist. Zu beachten ist, dass Zufriedenheitswerte bei Bot-Gesprächen zu Nutzern neigen, die fertig wurden.

## Branchenperspektive

**Startup.** Ein Assistent kann den Support kostengünstig abdecken, und eine schlechte Antwort kann einen Kunden kosten. Halten Sie den Umfang eng, gründen Sie Antworten in Ihrer Dokumentation, machen Sie die menschliche Option offensichtlich und lesen Sie jede Eskalation. Seien Sie vorsichtig, einen Agenten auf Konten oder Zahlungen handeln zu lassen.

**Kleinunternehmen.** Ein fertiger Assistent auf einer Website kann häufige Fragen bearbeiten. Testen Sie ihn wie ein Kunde, stellen Sie sicher, dass eine Telefonnummer oder E-Mail leicht zu finden ist, und überprüfen Sie Gespräche wöchentlich. Prüfen Sie, was der Anbieter mit den Daten tut.

**Großunternehmen.** Größe bietet Einsparungen und Risiko. Führen Sie einen Governance-Prozess für Risikoklassen, Genehmigungen und Audit, messen Sie nach Anliegen und Nutzergruppe und stellen Sie sicher, dass auf jedem Kanal ein Mensch erreichbar ist. Stimmen Sie Support, Sicherheit, Recht und Barrierefreiheit ab.

**Behörden und öffentlicher Sektor.** Bürger haben womöglich keinen anderen Anbieter, und Pflichten zu Barrierefreiheit, Sprachzugang und fairer Behandlung gelten stark. Halten Sie einen Menschen erreichbar, meiden Sie automatisierte Entscheidungen über Ansprüche ohne Schutzvorkehrungen, veröffentlichen Sie, wie der Assistent genutzt wird, und prüfen Sie Pflichten zu Offenlegung und Verwaltungsrecht (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind Lizenzen oder Nutzungsgebühren, Integration, Aufbereitung von Inhalten, laufende Stichproben und Review, Pflege der Wissensdatenbank, Tests und Governance. Auch ein guter menschlicher Weg kostet Geld, denn er muss besetzt sein.

Der mögliche Ertrag sind kürzere Wartezeiten bei einfachen Anliegen, Entlastung von wiederkehrenden Kontakten und Abdeckung außerhalb der Arbeitszeit. Auf der Risikoseite stehen Rückkehr, verlorenes Vertrauen, Schaden durch falsche Antworten oder Handlungen und rechtliche Exposition. Bauen Sie den Business Case aus Ihren eigenen Zahlen: verifizierte Lösung und Rückkehr, die Kosten je gelöstem Kontakt einschließlich Übergaben, die Zeit des Personals für das Beheben von Bot-Fehlern und die Zufriedenheit nach Gruppe. Vermeiden Sie, Eindämmungs- oder Umleitungsversprechen eines Anbieters als Ihre Schätzung zu nutzen. Zählen Sie die Kosten des menschlichen Wegs und der Governance (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Eindämmung als Ziel.** Es belohnt, Menschen von Hilfe fernzuhalten. Berichten Sie verifizierte Lösung und Rückkehr.
- **Verborgener oder langsamer Weg zu einem Menschen.** Er ist ein Dark Pattern, und Nutzer bemerken ihn. Machen Sie ihn kurz und testen Sie ihn.
- **Übergabe ohne Kontext.** Nutzer wiederholen sich, und Vertrauen sinkt. Geben Sie eine Zusammenfassung weiter.
- **Den Bot sensible Fälle bearbeiten lassen.** Wohlergehen, Beschwerden und Rechte brauchen Menschen. Leiten Sie sie direkt weiter.
- **Autonome Handlungen ohne Audit oder Genehmigung.** Ein Fehler kann skalieren. Klassifizieren, begrenzen und protokollieren Sie.
- **Nur messen, was das Dashboard des Anbieters zeigt.** Es schmeichelt. Verbinden Sie Ihre eigenen Daten.
- **Gruppen ignorieren, denen der Bot versagt.** Durchschnitte verbergen sie. Testen und segmentieren Sie, wo sicher.
- **Keine Stoppregel.** Ein versagender Bot bleibt online. Definieren Sie den Beleg, der ihn verengen oder abschalten würde.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Ergebnisse | Eindämmung berichtet | Zufriedenheit befragt | Verifizierte Lösung und Rückkehr je Anliegen verfolgt | Nach Nutzergruppe segmentiert; Stoppregeln definiert; Genauigkeit monatlich beprobt | Assistent, Personal und Wissen gemeinsam anhand geteilter Belege verbessert |
| Weg zu Menschen | Schwer zu finden | Option verfügbar | Kurzer Weg; Zeit bis zum Menschen verfolgt; Übergaben tragen Kontext | Übergabequalität bewertet und verbessert; Besetzung an Nachfrage angepasst | Bot und Personal arbeiten über Kanäle reibungslos zusammen, mit respektierter Wahl des Nutzers |
| Agenten, die handeln | Ad-hoc-Automatisierung | Skriptgesteuerte Handlungen | Risikoklassifizierte Handlungen, geringste Rechte, Genehmigung und Audit | Rückgängig-Rate und Schaden überprüft; Änderungen kontrolliert | Agentenverhalten über Organisation und Lieferanten mit unabhängiger Assurance gesteuert |

## Checkliste

- [ ] Die Anliegen des Assistenten sind aufgelistet, mit denen, die immer zu einem Menschen gehen müssen.
- [ ] Verifizierte Lösung und Rate der Folgekontakte werden neben der Eindämmung berichtet.
- [ ] Ein sichtbarer, kurzer Weg zu einem Menschen existiert auf jedem Bildschirm, und die Zeit bis zum Menschen wird gemessen.
- [ ] Übergaben enthalten eine Zusammenfassung und die Worte des Nutzers und werden von empfangenden Agenten bewertet.
- [ ] Antworten werden monatlich von qualifizierten, unabhängigen Reviewern beprobt.
- [ ] Nutzern wird gesagt, dass sie mit einer KI sprechen und was sie kann.
- [ ] Tests zu Barrierefreiheit und anderen Sprachen werden mit echten Nutzern durchgeführt.
- [ ] Agentenhandlungen sind risikoklassifiziert, nach geringsten Rechten berechtigt und im Audit protokolliert.
- [ ] Rückgängig-Raten und schädliche Handlungen werden schuldfrei überprüft.
- [ ] Eine Stoppregel definiert, wann der Assistent zu verengen oder abzuschalten ist.

## KI-Prompts

**Anliegen und Übergaberegeln definieren.**

```text
We run a service desk for [type of organization]. The most common contact reasons
are: [list with volumes]. Propose which intents a chatbot should handle fully,
which it should only help with and then hand off, and which must always go to a
person, with reasons. Include handoff information to pass along. Do not invent
statistics. List your assumptions and risks for sensitive cases.
```

**Eine Eindämmungsbehauptung prüfen.**

```text
Our chatbot dashboard shows containment of [value]. We also have: return contacts
within seven days [value], survey results [values], and a sample of
conversations [describe]. Explain what verified resolution might be, how to
compute it from our data, what the gap between containment and resolution
suggests, and what to check next. Do not claim causes the data cannot support.
List your assumptions.
```

**Eine Risikoklassifizierung für Agentenhandlungen entwerfen.**

```text
An AI agent might take these actions: [list]. For each, propose a risk class
(informational, reversible low impact, consequential), the permission it should
need, whether a person must approve, what to log, how to reverse it, and a
test to run before enabling it. Do not assume specific tools. List your
assumptions and decisions needing security and legal input.
```

**Ein Review von Bot-Gesprächen planen.**

```text
Design a monthly review of bot conversations: sample size and selection
(including some abandoned ones and some from user groups at risk of poor
service), reviewer qualifications, a short rubric for correctness, safety, and
honesty about uncertainty, how to record errors and fix their sources, and how to
report without identifying users. List your assumptions and privacy cautions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Kennzahl zu Chatbots oder KI-Agenten zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Chatbot-Kennzahl Lösung misst und seinen Manipulationsvektor und seine Leitplanke trägt.

## Wichtigste Erkenntnisse

- Messen Sie verifizierte Lösung und Folgekontakte und behandeln Sie Eindämmung nur als beschreibende Zahl.
- Machen Sie den Weg zu einem Menschen kurz und sichtbar und übergeben Sie mit dem Kontext.
- Beproben Sie Antworten auf Genauigkeit und Sicherheit und halten Sie das vom Assistenten genutzte Wissen aktuell.
- Seien Sie ehrlich, dass Nutzer mit einer KI sprechen, und testen Sie mit den Nutzern, denen am ehesten versagt wird.
- Klassifizieren Sie bei Agenten, die handeln, das Risiko, begrenzen Sie Berechtigungen, verlangen Sie Genehmigung für folgenreiche Handlungen und führen Sie einen Audit-Trail.
- Definieren Sie vorab eine Stoppregel.

## Quellen und weiterführende Literatur

1. Weizenbaum, J., "ELIZA: A computer program for the study of natural language communication between man and machine," *Communications of the ACM*, 9(1), 1966.
2. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
3. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
4. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Virtual assistant](https://en.wikipedia.org/wiki/Virtual_assistant).
9. Wikipedia, [Intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent).
10. Wikipedia, [Self-service](https://en.wikipedia.org/wiki/Self-service).
11. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
12. Wikipedia, [Automated decision-making](https://en.wikipedia.org/wiki/Automated_decision-making).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
