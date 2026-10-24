# Kennzahlen für Risiken und Kontrollen

**Risikoarbeit ist ein fortlaufendes Gespräch darüber, was schiefgehen könnte und was wir dagegen tun. Halten Sie das Register also kurz und lebendig, testen Sie die Kontrollen, die zählen, und misstrauen Sie jeder Zahl, die Unsicherheit ordentlich aussehen lässt.**

## Überblick und Motivation

Jede Änderung an einem Service trägt Risiko, und ebenso, ihn in Ruhe zu lassen. [Risikomanagement](https://en.wikipedia.org/wiki/Risk_management) ist das Identifizieren, Bewerten und Priorisieren von Risiken, gefolgt von koordinierter Handlung, sie zu verringern, zu akzeptieren, zu übertragen oder zu vermeiden. ITIL behandelt Risiko als Faden, der durch jede Praktik läuft: Die Change-Befähigung entscheidet, wie viel Prüfung ein Change braucht, die Servicekontinuität plant für Störung, das Informationssicherheitsmanagement schützt vor Bedrohungen. Agile und DevOps-Arbeitsweisen verringern Risiko auf andere Weise. Kleine, kontinuierlich gelieferte Changes mit schnellem Feedback und der Möglichkeit zum Rollback machen jeden Change weniger gefährlich und Probleme früher sichtbar.

Die beiden Sichten treffen sich in den Kennzahlen. Ein Team, das kontinuierlich liefert, muss dennoch seine Hauptrisiken kennen, wer sie besitzt und ob die Kontrollen funktionieren, auf die es sich verlässt. Eine Risikofunktion, die auf schwerer Genehmigung besteht, braucht dennoch Belege, dass ihre Kontrollen Schaden verringern und Menschen nicht nur bremsen. Dieses Thema gibt die Kennzahlen für beides und baut auf den Praktiken der Nachbarthemen zu Sicherheit und Prüfung auf (siehe Thema 8.1, Kennzahlen für Sicherheitsvorfälle und Schwachstellen, und Thema 8.3, Kennzahlen für Compliance und Audit).

Vier Begriffe kehren wieder.

- **Risiko:** ein ungewisses Ereignis oder ein ungewisser Zustand, der, wenn er eintritt, Ziele beeinflusst. Er hat eine Ursache, ein Ereignis und eine Folge sowie eine Wahrscheinlichkeit und Auswirkung, die meist geschätzt, nicht gewusst sind.
- **Risikoregister:** die Liste identifizierter Risiken mit Eignern, Bewertungen und Reaktionen. Ein [Risikoregister](https://en.wikipedia.org/wiki/Risk_register) ist ein Arbeitswerkzeug, wenn es aktuell ist und gelesen wird, und ein Compliance-Artefakt, wenn nicht.
- **Kontrolle:** eine Handlung oder ein Mechanismus, der ein Risiko verringert, etwa ein Review, ein automatisierter Test, eine Genehmigung, eine Funktionstrennung oder ein Monitoring-Alarm. Die Menge der Kontrollen, auf die sich eine Organisation verlässt, ist ihr [internes Kontrollsystem](https://en.wikipedia.org/wiki/Internal_control).
- **Key Risk Indicator (KRI):** eine Kennzahl, die eine Veränderung der Höhe eines Risikos signalisiert, bevor der Verlust eintritt. Ein [Key Risk Indicator](https://en.wikipedia.org/wiki/Key_risk_indicator) ist nützlich, wenn er einem Ereignis vorausläuft und jemand darauf handelt.

Risikoquantifizierung hat bekannte Schwächen. Eine [Risikomatrix](https://en.wikipedia.org/wiki/Risk_matrix), die Wahrscheinlichkeit gegen Auswirkung auf einem Raster farbiger Zellen aufträgt, ist weit verbreitet und weithin kritisiert: Bewertungen sind subjektiv, verschiedene Risiken können aus verschiedenen Gründen in derselben Zelle landen, und die Arithmetik des Multiplizierens ordinaler Werte hat keine feste Grundlage. Seltene, schwere Ereignisse, manchmal über die [Black-Swan-Theorie](https://en.wikipedia.org/wiki/Black_swan_theory) beschrieben, sind besonders schwer zu bewerten. Die ehrliche Antwort ist, die Matrix als Gesprächshilfe zu nutzen, Spannen zu zeigen und sie mit Belegen zu Kontrollen und Incidents zu stützen. Das Rahmenwerk der drei Verteidigungslinien, das die Teams, die Risiko besitzen, die Teams, die es überwachen, und unabhängige Assurance trennt, bietet eine Struktur für Rollen, und es funktioniert am besten, wenn die erste Linie, die Liefer- und Betriebsteams, ihre Risiken wirklich besitzt.

Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt für Risikoberichterstattung auf besondere Weise. Bringt eine rote Bewertung Prüfung, bewerten Menschen Risiken als gelb. Ist ein geschlossenes Risiko ein Erfolg, schließen Menschen Risiken, ohne sie zu behandeln (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Leitprinzipien

- **Das Register kurz und aktuell halten.** Einige gut besessene und überprüfte Risiken schlagen Hunderte, die es nicht sind.
- **Die erste Linie ihre Risiken besitzen lassen.** Die Menschen nah an der Arbeit kennen sie am besten.
- **Die Kontrollen testen, auf die man sich verlässt.** Eine nie getestete Kontrolle ist eine Hoffnung.
- **Frühindikatoren bevorzugen, auf die jemand handelt.** Ein Indikator ohne Reaktionsplan ist Dekoration.
- **Spannen und Belege zeigen, keine falsche Genauigkeit.** Bewertungen sind Schätzungen.
- **Risiko verringern, indem man Change klein und umkehrbar macht.** Kontinuierliche Auslieferung mit schnellem Rollback ist eine Kontrolle.
- **Über Risiko ohne Schuldzuweisung sprechen.** Ehrliche Berichterstattung ist der Rohstoff der ganzen Praxis.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Aktualität der Risiko-Reviews | Anteil der offenen Risiken, die ihr Eigner innerhalb des vereinbarten Intervalls überprüft hat | innerhalb des Intervalls überprüfte Risiken / offene Risiken | Prozent | Review-Daten des Risikoregisters | Risikomanagement; kontinuierliche Verbesserung | In Planungs- und Review-Gesprächen überprüfte Risiken | Monatlich |
| Eignerabdeckung | Anteil der offenen Risiken mit einem benannten, aktuellen Eigner, der die Verantwortung annahm | Risiken mit bestätigtem aktuellen Eigner / offene Risiken | Prozent | Risikoregister, mit dem Personenverzeichnis verbunden | Risikomanagement | Vom Team besessene Risiken im Backlog | Monatlich |
| Abdeckung der Kontrolltests | Anteil der Schlüsselkontrollen, die innerhalb des erforderlichen Zyklus auf Betrieb getestet wurden | im Zyklus getestete Schlüsselkontrollen / Schlüsselkontrollen | Prozent | Kontrollregister und Testaufzeichnungen | Risikomanagement; Informationssicherheitsmanagement | Automatisierte Prüfungen in der Pipeline | Vierteljährlich |
| Wirksamkeitsrate der Kontrollen | Anteil der getesteten Kontrollen, die wie entworfen funktionierten | als wirksam befundene Kontrollen / getestete Kontrollen | Prozent | Testergebnisse | Risikomanagement; kontinuierliche Verbesserung | Automatisierte Tests, die aus den richtigen Gründen bestehen | Vierteljährlich |
| Reaktionszeit bei KRI-Verletzung | Zeit vom Überschreiten der Schwelle durch einen Key Risk Indicator bis zu einer erfassten Entscheidung | Median und 85. Perzentil der Stunden oder Tage von der Verletzung bis zur Entscheidung | Stunden oder Tage | KRI-Monitoring und Entscheidungsprotokoll | Risikomanagement; Monitoring und Ereignismanagement | Reaktion auf ein Produktionssignal | Monatlich |
| Termintreue der Behandlungspläne | Anteil der Risikobehandlungen, die bis zu ihrem zugesagten Datum abgeschlossen waren | bis zum Datum abgeschlossene Behandlungen / im Zeitraum fällige Behandlungen | Prozent | Risikoregister und Maßnahmenverfolgung | Risikomanagement; kontinuierliche Verbesserung | Gelieferte Verbesserungsmaßnahmen | Vierteljährlich |
| Anteil risikobasierter Changes | Anteil der Changes, die über risikobasierte Wege mit angehängtem Kontrollbeleg genehmigt wurden | über einen risikobasierten Weg mit erforderlichem Beleg genehmigte Changes / Changes im Zeitraum | Prozent | Change-Datensätze | Change-Befähigung; Risikomanagement | Kontinuierlich gelieferte Changes mit automatisierten Prüfungen | Monatlich |

Definieren Sie das Review-Intervall und die Liste der Schlüsselkontrollen im Register. Eine Kontrolle ist nur dann „getestet“, wenn der Test Belege des Betriebs untersucht, nicht nur den Entwurf. Die KRI-Uhr startet, wenn der Indikator seine Schwelle überschreitet, wie vom Monitoring-System erfasst, und stoppt bei einer aufgeschriebenen Entscheidung, die lauten kann zu handeln, zu akzeptieren oder die Schwelle zu ändern. Schließen Sie Risiken, die ausgemustert werden, erst nach einer erfassten Abschlussentscheidung aus dem Nenner aus.

## Empfehlungen

### Das Risikogespräch lebendig halten

**1. Halten Sie das Register kurz und schreiben Sie jedes Risiko in einer Standardform.** Nutzen Sie einen Satz der Form „Wegen [Ursache] kann [Ereignis] geschehen, mit der Folge [Folge].“ Begrenzen Sie das Register auf die Risiken, die eine Entscheidung oder einen Plan verändern würden. Führen Sie Duplikate zusammen, teilen Sie vage und mustern Sie Risiken aus, die vorüber sind. Eine Liste von einigen Dutzend Risiken, über die Menschen sprechen, ist mehr wert als tausend, die niemand liest.

**2. Weisen Sie jedes Risiko einem Eigner zu, der handeln kann.** Der Eigner ist die Person mit Befugnis über die Reaktion, meist im Liefer- oder Betriebsteam, nicht in der Risikofunktion. Bestätigen Sie die Verantwortung mit der Person und überprüfen Sie sie, wenn Menschen die Rolle wechseln. Die Eignerabdeckung misst das, und ein Risiko ohne Eigner ist ein Befund.

**3. Überprüfen Sie Risiken in den Gesprächen, die ohnehin stattfinden.** Sprechen Sie die wichtigsten Risiken in Planung, Review und Incident-Reviews an, statt ein gesondertes Meeting zu schaffen. Die agile Gewohnheit regelmäßiger Reflexion darüber, wie man wirksamer wird, ist ein natürliches Zuhause für die Frage „was könnte uns als Nächstes schaden?“ Halten Sie das Ergebnis im Register fest.

**4. Koppeln Sie Bewertungen mit Belegen und Spannen.** Erfassen Sie für jedes wichtige Risiko, was Sie glauben lässt, dass es wahrscheinlich oder ernst ist: Incidents, Beinahe-Vorfälle, Testergebnisse, Lieferantenhistorie. Geben Sie, wo Sie können, eine Spanne für Wahrscheinlichkeit und Auswirkung an und sagen Sie, wie unsicher Sie sind. Kombinieren Sie ordinale Werte nicht zu einer einzelnen Zahl und behandeln Sie sie nicht als Messung. Nutzen Sie eine Matrix, um eine Diskussion zu beginnen (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

### Die Kontrollen testen

**5. Benennen Sie die Schlüsselkontrollen und wofür jede da ist.** Listen Sie für jedes Hauptrisiko die wenigen Kontrollen auf, auf die Sie sich verlassen, und wie das Versagen jeder aussähe. Ein Kontrollregister, das Hunderte kleiner Tätigkeiten listet, verbirgt die, auf die es ankommt. Beziehen Sie automatisierte Kontrollen in der Pipeline ein, etwa Tests, Richtlinienprüfungen und Genehmigungs-Gates.

**6. Testen Sie Betrieb, nicht nur Entwurf.** Ein Entwurfsreview fragt, ob die Kontrolle funktionieren würde, wenn sie betrieben würde. Ein Betriebstest fragt, ob sie im Zeitraum betrieben wurde und funktionierte, anhand von Stichproben von Belegen. Planen Sie Tests in einem Zyklus, der zum Risiko passt, erfassen Sie die Ergebnisse und verfolgen Sie Fehlschläge nach. Automatisieren Sie, wo möglich, die Belege, sodass das Testen kontinuierlich geschieht.

**7. Behandeln Sie Kontrollfehlschläge als Information.** Ein fehlgeschlagener Test ist das funktionierende Kontrollsystem. Erfassen Sie den Fehlschlag, fragen Sie warum und beheben Sie die Ursache. Die Wirksamkeitsrate der Kontrollen sollte mit der Nachverfolgung gelesen werden: Schnell gefundene und behobene Fehlschläge sind gesünder als eine perfekte Rate aus schwachem Testen.

**8. Nutzen Sie unabhängige Assurance, wo sie Wert hinzufügt.** Die Interne Revision oder ein unabhängiger Reviewer kann die Kontrollen testen, die die erste Linie besitzt und die zweite Linie überwacht. Unabhängigkeit schützt davor, die eigene Arbeit zu benoten. Koordinieren Sie, damit Teams nicht von drei Gruppen auf dasselbe getestet werden.

### Indikatoren und Entscheidungen gut nutzen

**9. Wählen Sie je Hauptrisiko einige Frühindikatoren.** Ein Key Risk Indicator sollte billig zu messen, an eine Ursache gebunden und mit einer Schwelle und einer Reaktion gekoppelt sein. Zum Beispiel signalisiert das Alter der ältesten kritischen Schwachstelle Sicherheitsrisiko, und der Anteil der Changes, die Notfallbehandlung brauchen, signalisiert Change-Risiko. Definieren Sie, wer den Indikator ansieht und was er an der Schwelle tun wird (siehe Thema 8.1, Kennzahlen für Sicherheitsvorfälle und Schwachstellen).

**10. Erfassen Sie bei jeder Verletzung die Entscheidung.** Überschreitet ein Indikator eine Schwelle, entscheidet jemand: handeln, akzeptieren oder die Schwelle anpassen. Schreiben Sie die Entscheidung und den Grund auf. So entsteht eine Historie, die zeigt, ob Schwellen gut gesetzt sind und die Reaktion rechtzeitig ist.

**11. Machen Sie risikobasierte Genehmigung zum Standard für Change.** Ersetzen Sie in einem Umfeld kontinuierlicher Auslieferung pauschale Genehmigungsgremien durch risikobasierte Wege: automatisierte Prüfungen und Peer-Review für risikoarme Standard-Changes und vollständigerem Review für die wenigen Changes mit hohem Risiko (siehe Thema 4.3, Kennzahlen für die Change-Befähigung). Hängen Sie den Beleg an, dass die Kontrollen liefen. Das verringert Risiko und Verzögerung zugleich, denn kleine Changes mit automatisiertem Beleg sind sicherer als große mit einer Unterschrift.

**12. Lernen Sie aus Verlusten und Beinahe-Vorfällen.** Aktualisieren Sie nach Incidents und knappen Fällen das Register: War das Risiko da, war es gut bewertet, funktionierte die Kontrolle? Nutzen Sie die Antworten, um beides zu verbessern. Die Schleife zwischen Ereignissen und Register hält das Register ehrlich (siehe Thema 4.2, Kennzahlen für Postmortems und Lernen).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Aktualität der Risiko-Reviews | Risiken ohne Diskussion als überprüft markieren; das Intervall ändern | Reviews stichprobenartig auf Substanz prüfen; festes Intervall im Register |
| Eignerabdeckung | Eigner ohne ihr Wissen zuweisen; eine hochrangige Person ohne Befugnis nennen | Eignerbestätigung; prüfen, dass Eigner auf die Reaktion einwirken können |
| Abdeckung der Kontrolltests | Die leichten Kontrollen testen; Entwurfsreviews als Betriebstests zählen | Liste der Schlüsselkontrollen von einer zweiten Partei festgelegt; Testart erfasst |
| Wirksamkeitsrate der Kontrollen | Kleine Stichproben testen; Stichproben wählen, die bestehen | Stichprobenmethode unabhängig vom Eigner; Stichprobengröße erfasst |
| Reaktionszeit bei KRI-Verletzung | Die Schwelle nach einer Verletzung ändern; eine Entscheidung ohne Inhalt erfassen | Änderungsprotokoll der Schwellen; Stichprobe des Entscheidungsinhalts |
| Termintreue der Behandlungspläne | Leichte Termine setzen; Abschluss umdefinieren | Termine bei Genehmigung mit dem Eigner vereinbart; prüfen, dass sich die Risikobewertung bewegte |
| Anteil risikobasierter Changes | Changes als risikoarm klassifizieren, um Review zu vermeiden; Belege anhängen, die nicht von Kontrollen erzeugt wurden | Klassifizierung stichprobenartig gegen Regeln prüfen; automatisierter Beleg aus der Pipeline |

Ein gesunder Befund ist ein kurzes Register, über das Menschen streiten, Eigner, die ihre Risiken kennen, Kontrollen, die getestet werden und bei denen einige Fehlschläge gefunden und behoben werden, Indikatoren, die echte Entscheidungen leiten, und weniger schwere Genehmigungen für kleine Changes.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Risikomatrix | Schnell, visuell, Gesprächsanstoß | Subjektiv; falsche Genauigkeit; ordinale Arithmetik |
| Quantifizierte Spannen | Ehrlicher zur Unsicherheit | Braucht Daten und Fähigkeiten; Aufwand |
| Schwere Genehmigungsgremien | Sichtbare Kontrolle | Langsam; fördert das Bündeln von Change |
| Risikobasierte automatisierte Prüfungen | Schnell und konsistent | Braucht Engineering; automatisierte Prüfungen können falsch sein |
| Zentrale Risikofunktion besitzt Risiken | Konsistenz | Fern von der Arbeit; Eigner nicht beteiligt |
| Verantwortung der ersten Linie | Wissen und Rechenschaft | Wechselnde Qualität; braucht Aufsicht |
| Periodisches Testen von Kontrollen | Effizient für stabile Kontrollen | Verpasst Drift zwischen Tests |
| Kontinuierliche Überwachung von Kontrollen | Zeitnahe Belege | Werkzeugaufwand; Rauschen |

Die Antwort in Worten ist, Verantwortung bei den Teams zu verorten, leichte zentrale Aufsicht und unabhängiges Testen anzuwenden, Belege wo möglich zu automatisieren und Bewertungen als Anstöße für Gespräche zu nutzen.

## Fragen für die Diskussion im Team

**1. Welche drei Risiken werden diesem Service im nächsten Jahr am wahrscheinlichsten schaden, und wer besitzt jedes?**
Bitten Sie jedes Mitglied, privat drei Risiken aufzuschreiben, und vergleichen Sie dann. Die Überschneidung und die Unterschiede sind beide informativ. Die Moderation sollte festhalten, wer auf jedes Risiko handeln würde. Einigen Sie sich auf die obersten drei und bestätigen Sie Eigner.

**2. Von welcher Kontrolle hängen wir am meisten ab, und wann haben wir zuletzt geprüft, dass sie funktioniert?**
Wählen Sie eine Kontrolle, etwa eine Code-Review-Regel, ein Backup oder einen Genehmigungsschritt. Verfolgen Sie, wann zuletzt ein Beleg ihres Betriebs untersucht wurde. Weiß es niemand, planen Sie einen Test. Das Gespräch zeigt den Unterschied zwischen Entwurf und Betrieb.

**3. Was ließe uns eine Bewertung von gelb auf rot ändern, und wer würde es bemerken?**
Besprechen Sie die Indikatoren und Schwellen. Fragen Sie, ob das Team je eine Bewertung herabgesetzt hat, um Aufmerksamkeit zu vermeiden, und welcher Druck es verursachte. Einigen Sie sich, welcher Beleg eine Änderung rechtfertigen würde und wie Rot sicher zu sagen wird.

**4. Welche Genehmigungen bremsen unsere Changes, ohne Risiko zu verringern?**
Listen Sie die Genehmigungen auf, die ein typischer Change braucht, und fragen Sie bei jeder, welches Risiko sie adressiert und ob sie je einen Change stoppte. Schlagen Sie vor, eine durch eine automatisierte Prüfung zu ersetzen. Einigen Sie sich, welcher Beleg zeigen würde, dass der Change sicher ist.

**5. Wie haben wir erfahren, dass eine Kontrolle versagte, und was taten wir?**
Erinnern Sie sich an einen jüngeren Fehlschlag. Wurde er durch Testen, einen Incident oder einen Prüfer gefunden? Besprechen Sie, wie eine stärkere Schleife aussieht. Beziehen Sie ein, wie die Person behandelt wurde, die es fand.

**6. Welche Risiken haben wir akzeptiert, und wann überprüfen wir diese Entscheidung?**
Listen Sie akzeptierte Risiken und die Review-Daten auf. Prüfen Sie, dass jedes einen Eigner und einen Grund hat. Akzeptiertes Risiko ohne Review-Datum ist ein Risiko, das niemand beobachtet.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams besitzen den größten Teil des betrieblichen Risikos. Sie sollten eine kurze Liste eigener Risiken pflegen, sie in Planung und Review besprechen und Kontrollen in die Pipeline einbauen, sodass der Beleg automatisch entsteht. Sie profitieren von risikobasierten Change-Wegen, die risikoarme Changes fließen lassen, und sie sollten ehrlich sein, was schiefgehen könnte.

### Service- und Betriebsteams

Betriebsteams betreiben die Kontrollen: Backups, Monitoring, Zugriffsreviews und Wiederherstellungstests. Sie sollten Belege des Betriebs bewahren, Kontrollen in regelmäßigem Zyklus testen und Verletzungen von Indikatoren früh melden. Sie tragen die Kosten schwerer Kontrollen und sollten sagen, welche wenig bringen.

### Führung und Governance

Führungskräfte setzen den Risikoappetit und entscheiden, wie viel Reibung akzeptabel ist. Sie sollten eine kurze Liste der wichtigsten Risiken mit Eignern und Belegen verlangen, rote Bewertungen begrüßen, das Testen von Kontrollen finanzieren und unabhängige Assurance unterstützen. Die Governance sollte prüfen, dass das Register Incidents und Beinahe-Vorfälle widerspiegelt, und ordentlich aussehende Berichte nicht belohnen.

### Kunden und Nutzer

Nutzer tragen die Folgen eintretender Risiken und wissen oft davon, bevor das Register es tut. Sie sollten einen Weg haben, Bedenken zu melden, und im Rahmen der Vertraulichkeit über Risiken informiert werden, die sie betreffen. Ihr Erlebnis von Incidents und Changes ist Beleg für Risiko-Reviews.

## In der Praxis: ein Beispiel aus dem Service-Management

Die Digitalgruppe eines nationalen Energieversorgers betreibt Kundenabrechnung, eine mobile App und Integrationen mit dem Netzbetrieb. Die Zahlen unten sind illustrativ.

Das Risikoregister der Gruppe hat 340 Einträge und wurde vor drei Jahren zuletzt bereinigt. Die Aktualität der Risiko-Reviews beträgt 22 Prozent, und 61 Risiken haben Eigner, die gegangen sind. Die Matrix zeigt 85 Risiken in Rot, und niemand liest den Bericht. Die neue Leiterin der Service-Assurance schlägt einen Neustart vor. Mit den Lieferteams kürzt sie das Register auf die Risiken, die eine Entscheidung verändern würden, und kommt auf 38. Sie weist jedes einem benannten Eigner im Team zu, das handeln kann, und sie bestätigen. Sie wählt 12 Schlüsselkontrollen und testet für jede den Betrieb statt den Entwurf zu überprüfen. Fünf fallen durch: Zwei Backup-Wiederherstellungen waren nie getestet worden, ein Zugriffsreview war übersprungen worden, und zwei Change-Genehmigungen waren ohne Beleg für Tests unterzeichnet worden.

Das Team behebt die Fehlschläge und ersetzt das Change-Genehmigungsgremium für Standard-Changes durch risikobasierte Wege. Automatisierte Tests und Peer-Review sind die Kontrollen, und die Pipeline hängt den Beleg an den Change-Datensatz. Jedes Hauptrisiko erhält einen oder zwei Frühindikatoren mit Schwellen und Reaktionen. Für das Risiko eines längeren Abrechnungsausfalls sind die Indikatoren das Alter der ältesten kritischen Schwachstelle und die Zahl fehlgeschlagener Backup-Wiederherstellungen im Quartal. Das erste Quartal zeigt, dass Eigner alle 38 Risiken bestätigen, eine Review-Aktualität von 91 Prozent, eine Wirksamkeitsrate der Kontrollen von 7 von 12 beim ersten Test und 12 von 12 nach den Korrekturen und eine mediane Reaktionszeit bei KRI-Verletzung von 2 Tagen. Der Anteil der Changes über risikobasierte Wege beträgt 64 Prozent.

Der Chief Risk Officer bittet, die Zahl roter Risiken binnen eines Jahres zu halbieren. Die Leiterin der Service-Assurance schlägt vor, stattdessen Termintreue der Behandlungspläne und Wirksamkeit der Kontrollen zu verfolgen, und erklärt, dass die Zahl roter Risiken durch Neubewertung fallen kann und sie lieber ehrliche rote Bewertungen sähe. Die Entscheidung wird festgehalten, und der Bericht des nächsten Quartals enthält die stichprobenartigen Entscheidungen hinter jeder Herabstufung.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Halten Sie das Risikoregister durch regelmäßige Gespräche mit Stakeholdern lebendig statt durch ein jährliches Review. Zu beachten ist, dass Bewertungszahlen Unsicherheit ordentlich aussehen lassen können.

### KI

KI-Systeme brauchen Einträge im Risikoregister mit einem Eigner, einem menschlichen Prüfpunkt und einem Review-Datum. Messen Sie die Wirksamkeit von Kontrollen für KI-Aufsicht, indem Sie sie testen. Zu beachten ist, dass eine Richtlinie, die sagt, ein Mensch prüfe die Ausgabe, keine Kontrolle ist, bis jemand sie testet.

### Automatisierung

Automatisieren Sie Kontrollprüfungen, wo sie sich testen lassen, und messen Sie die Automatisierung an fehlgeschlagenen und übersprungenen Prüfungen. Zu beachten ist, dass eine bestehende automatisierte Kontrolle das Falsche testen kann.

### Analytik

Berichten Sie Abdeckung und Wirksamkeit der Kontrolltests mit der Stichprobengröße. Die Entscheidung, die dies untermauert, ist, welche Kontrollen zu stärken sind. Zu beachten ist, dass kleine Stichproben und subjektive Bewertung die Genauigkeit begrenzen; sagen Sie es also.

## Branchenperspektive

**Startup.** Risiken betreffen überwiegend das Ausgehen des Geldes, den Verlust von Schlüsselpersonen und einen großen Ausfall. Führen Sie eine einseitige Liste der obersten fünf, überprüfen Sie sie monatlich und testen Sie Backups und Wiederherstellungen. Bauen Sie Kontrollen von Anfang an in die Pipeline ein, denn sie sind billiger als Nachrüsten.

**Kleinunternehmen.** Eine Handvoll Risiken dominiert: Abhängigkeit von Schlüsselpersonen, ein einzelner Lieferant, Ransomware und Datenverlust. Führen Sie eine kurze Liste mit Eignern, testen Sie Wiederherstellungen und halten Sie Versicherung und Kontaktdaten aktuell. Widerstehen Sie schweren Rahmenwerken und borgen Sie von ihnen, was passt.

**Großunternehmen.** Größe verlangt eine gemeinsame Taxonomie, leichtes Register-Werkzeug und die drei Verteidigungslinien in der Praxis. Lassen Sie die erste Linie ihre Risiken besitzen, halten Sie die zweite Linie klein und beratend und machen Sie unabhängiges Testen effizient. Vermeiden Sie doppelte Tests über Revision, Risiko und Compliance.

**Behörden und öffentlicher Sektor.** Risikomanagement ist oft eine förmliche Pflicht mit Standard-Rahmenwerken, Prüfungsausschüssen und öffentlicher Berichterstattung. Stimmen Sie sich mit dem verlangten Rahmenwerk ab, dokumentieren Sie Aussagen zum Risikoappetit und bewahren Sie Belege auf. Öffentliche Rechenschaft macht ehrliche rote Bewertungen wertvoller und zugleich schwerer (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind die Zeit der Eigner, Risiken zu überprüfen, der Aufwand, Schlüsselkontrollen zu definieren und zu testen, Werkzeuge für das Register und das Indikator-Monitoring, falls nicht vorhanden, und die Kosten unabhängiger Assurance. Das Automatisieren der Belegerfassung braucht Engineering-Aufwand und senkt dann die wiederkehrenden Kosten.

Der Ertrag sind weniger Überraschungen, schnellere und leichtere Change-Genehmigung und glaubwürdigere Assurance. Ein beschnittenes Register und risikobasierte Change-Wege sparen Zeit, die große Genehmigungsgremien verbrauchten. Vor einem Incident gefundene fehlgeschlagene Kontrolltests verhindern Verluste, die schwer zu bepreisen sind. Bauen Sie den Business Case aus Ihren eigenen Daten: die Zeit je Change-Genehmigung davor und danach, die Zahl der Kontrollfehlschläge, die durch Testen gefunden wurden, gegenüber denen, die Incidents oder Prüfer fanden, und die Kosten früherer Incidents, die eine Kontrolle verhindert hätte. Vermeiden Sie, Verluststatistiken der Branche ohne nachvollziehbare Quelle und Methode zu zitieren.

## Anti-Muster und Fallstricke

- **Ein Register, das ewig wächst.** Niemand liest es. Beschneiden Sie es auf die Risiken, die zählen.
- **Bewertungen ohne Belege.** Sie sind Meinungen in Farbe. Hängen Sie Belege und Spannen an.
- **Eigner nur dem Namen nach.** Das Risiko liegt bei jemandem, der nicht handeln kann. Bestätigen Sie die Verantwortung mit den richtigen Menschen.
- **Entwurf testen und es Assurance nennen.** Eine Kontrolle, die funktionieren könnte, hat womöglich nicht funktioniert. Testen Sie den Betrieb.
- **Nur die Zahl roter Risiken berichten.** Zahlen fallen durch Neubewertung. Schauen Sie auf Behandlungen und Kontrollergebnisse.
- **Genehmigungsgremien für jeden Change.** Sie bremsen kleine Changes und lehren Bündeln. Nutzen Sie risikobasierte Wege.
- **Rote Bewertungen bestrafen.** Risiken werden dann verborgen. Belohnen Sie frühe Warnung.
- **Getrennte Risiko- und Liefer-Kulturen.** Risikoarbeit, die an Teams getan wird statt mit ihnen, erzeugt Compliance-Theater.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Register und Verantwortung | Lange, veraltete Liste | Register existiert, teils besessen | Kurzes Register mit bestätigten Eignern der ersten Linie und Review-Daten | Reviews in Teamgesprächen; Belege und Spannen angehängt | Risiken über Teams und Lieferanten mit gemeinsamen Eignern geteilt |
| Kontrollen | Als funktionierend angenommen | Entwurf dokumentiert | Schlüsselkontrollen benannt; Betriebstests im Zyklus | Fehlschläge nachverfolgt; Belege wo möglich automatisiert | Kontinuierliche Überwachung von Kontrollen mit menschlicher Aufsicht und unabhängiger Assurance |
| Entscheidungen und Change | Genehmigungen per Gremium | Einige Standard-Changes vorab genehmigt | Risikobasierte Wege mit angehängtem Beleg | Indikatoren mit Schwellen und erfassten Entscheidungen; Wege aus Ergebnissen abgestimmt | Risikoentscheidungen in Pipelines über die Organisation und die Lieferkette eingebettet |

## Checkliste

- [ ] Das Register ist kurz, mit Risiken in der Form Ursache, Ereignis und Folge.
- [ ] Jedes Risiko hat einen bestätigten Eigner der ersten Linie, der handeln kann.
- [ ] Risiken werden in den regelmäßigen Gesprächen des Teams überprüft.
- [ ] Schlüsselkontrollen sind benannt und in einem genannten Zyklus auf Betrieb getestet.
- [ ] Kontrollfehlschläge werden protokolliert, erklärt und behoben.
- [ ] Jedes Hauptrisiko hat einen oder zwei Frühindikatoren mit Schwellen und Reaktionen.
- [ ] Entscheidungen bei Verletzungen von Indikatoren werden erfasst.
- [ ] Risikobasierte Change-Wege existieren, mit wo möglich automatisch angehängtem Beleg.
- [ ] Akzeptierte Risiken haben einen Eigner, einen Grund und ein Review-Datum.
- [ ] Incidents und Beinahe-Vorfälle aktualisieren das Register.

## KI-Prompts

**Risiken in einer Standardform umschreiben.**

```text
Here are [number] entries from our risk register: [paste, with sensitive details
removed]. Rewrite each in the form "Because of [cause], [event] may happen,
leading to [consequence]." Flag entries that are vague, duplicated, or really
issues that have already happened. Suggest which could be merged or retired.
Do not rate them. List your assumptions and what to confirm with the owners.
```

**Einen Kontrolltest entwerfen.**

```text
For the control [describe, for example quarterly access review for the billing
system], design an operating test. Include what evidence to examine, how to
select a sample without bias, what counts as a pass or a fail, how to record
results, and how to automate the evidence collection over time. Do not assume
specific tools. List your assumptions and risks in the test design.
```

**Frühindikatoren für ein Risiko vorschlagen.**

```text
Risk: [describe in cause, event, consequence form]. Propose up to three leading
indicators that are cheap to measure and linked to the cause, with a suggested
response for a threshold breach and the way each indicator could mislead. Do
not invent threshold values; describe how we should calibrate them from our own
data. List your assumptions.
```

**Einen Change-Genehmigungsprozess überprüfen.**

```text
Our change approval process for [type of change] is: [describe steps, approvers,
and typical delays]. Identify steps that add delay without reducing risk, propose
a risk-based alternative with automated checks and evidence, and say what we
should measure to know whether risk went up or down. Do not claim research
results. List your assumptions and decisions needing leadership input.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Risiko- oder Kontrollkennzahl zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Risikokennzahl seinen Manipulationsvektor, seine Leitplanke und seine Belegregel trägt.

## Wichtigste Erkenntnisse

- Halten Sie das Risikoregister kurz, im Besitz der Teams, die handeln können, und in bereits bestehenden Gesprächen überprüft.
- Testen Sie, dass Schlüsselkontrollen funktionieren, behandeln Sie Fehlschläge als nützliche Information und automatisieren Sie den Beleg.
- Nutzen Sie einige Frühindikatoren mit Schwellen, Reaktionen und erfassten Entscheidungen.
- Ersetzen Sie pauschale Genehmigung durch risikobasierte Change-Wege, gestützt auf automatisierten Beleg.
- Zeigen Sie Spannen und Belege statt falscher Genauigkeit und nutzen Sie Matrizen, um Gespräche zu beginnen.
- Machen Sie rote Bewertungen sicher abzugeben und lernen Sie aus Verlusten und Beinahe-Vorfällen.

## Quellen und weiterführende Literatur

1. ISO 31000, *Risk management: Guidelines*, International Organization for Standardization.
2. Committee of Sponsoring Organizations of the Treadway Commission, *Enterprise Risk Management: Integrating with Strategy and Performance*, 2017.
3. Hubbard, D. W., *The Failure of Risk Management: Why It's Broken and How to Fix It*, 2nd ed., Wiley, 2020.
4. Cox, L. A., "What's wrong with risk matrices?" *Risk Analysis*, 28(2), 2008.
5. Taleb, N. N., *The Black Swan: The Impact of the Highly Improbable*, Random House, 2007.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Risk management](https://en.wikipedia.org/wiki/Risk_management).
9. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
10. Wikipedia, [Internal control](https://en.wikipedia.org/wiki/Internal_control).
11. Wikipedia, [Key risk indicator](https://en.wikipedia.org/wiki/Key_risk_indicator).
12. Wikipedia, [Risk matrix](https://en.wikipedia.org/wiki/Risk_matrix).
13. Wikipedia, [Black swan theory](https://en.wikipedia.org/wiki/Black_swan_theory).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
