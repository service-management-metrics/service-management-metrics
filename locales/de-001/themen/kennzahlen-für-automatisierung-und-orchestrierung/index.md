# Kennzahlen für Automatisierung und Orchestrierung

**Automatisierung hat sich nur ausgezahlt, wenn sie Arbeit beseitigt, die Menschen nicht tun wollen, ohne neue Arbeit, neue Fehler oder neues Risiko zu erzeugen. Messen Sie also, was jede Automatisierung beseitigt, wie oft sie fehlschlägt, wie schnell sie rückgängig gemacht werden kann und wer entscheidet, wann sie stoppen soll.**

## Überblick und Motivation

[Automatisierung](https://en.wikipedia.org/wiki/Automation) bedeutet im Service-Management, Software Arbeit tun zu lassen, die früher eine Person tat: ein Konto bereitstellen, einen Service neu starten, ein Ticket weiterleiten, einen Standard-Change genehmigen oder ein Status-Update posten. [Orchestrierung](https://en.wikipedia.org/wiki/Orchestration_(computing)) koordiniert mehrere automatisierte Schritte, oft über Werkzeuge und Teams hinweg, zu einem Ablauf wie „einen neuen Mitarbeiter einarbeiten“ oder „diesen Service wiederherstellen“. ITILs Leitprinzip „optimieren und automatisieren“ ist eine langjährige Aussage der Idee, und kontinuierliche Auslieferung hängt von ihr ab. Praktiken wie [Infrastructure as Code](https://en.wikipedia.org/wiki/Infrastructure_as_code) machen die Einrichtung von Systemen zu versionierten, testbaren Dateien, sodass Automatisierung auch eine Form von Aufzeichnung ist.

Automatisierung verschiebt Risiko von langsam und sichtbar zu schnell und weit. Eine Person, die einen Fehler macht, betrifft ein Ticket. Ein automatisierter Schritt mit demselben Fehler kann in einer Minute jedes Ticket betreffen. Darum braucht Automatisierung eigene Kennzahlen, und darum sind Zahlen wie „Anzahl der Automatisierungen“ oder „gesparte Stunden“ schwach. Sie beschreiben, wie viel gebaut und wie viel behauptet wurde, nicht ob es jemandem besser geht.

Dieses Thema unterscheidet sich von den früheren Kennzahlen zu Self-Service und Automatisierung bei Serviceanfragen (siehe Thema 3.7, Kennzahlen für Self-Service und Automatisierung), die vom nutzerseitigen Anfragefluss handeln. Hier ist der Gegenstand Automatisierung als Engineering- und Betriebs-Asset: ihre Abdeckung, Zuverlässigkeit, Sicherheit, Verantwortung und Kosten. Es unterscheidet sich auch von den Pipeline-Kennzahlen in Thema 10.7 (siehe Thema 10.7, Kennzahlen für Pipelines und automatisierte Changes), die den Weg abdecken, den ein Change zur Produktion nimmt.

Hier verwendete Begriffe. Eine **Automatisierung** ist eine definierte Aufgabe, die läuft, ohne dass eine Person ihre Schritte ausführt. Ein **Runbook** ist ein dokumentiertes Verfahren für eine Betriebsaufgabe, und **Runbook-Automatisierung** führt es aus. Eine **Orchestrierung** ist ein Ablauf, der Automatisierungen koordiniert. **Human in the Loop** bedeutet, dass eine Person prüft oder genehmigt, bevor eine Handlung wirkt. **Toil** ist wiederholte manuelle Betriebsarbeit, die mit dem Service skaliert und keinen bleibenden Wert hat (siehe Thema 5.7, Kennzahlen für Toil und Bereitschaftsdienst). Eine **Leitplanke** hat hier zwei Bedeutungen: die gekoppelte Kennzahl, die in diesem ganzen Buch genutzt wird, und eine technische Grenze dessen, was eine Automatisierung darf. Der Text sagt, welche gemeint ist.

## Leitprinzipien

- **Die Wirkung messen, nicht die Zahl.** Die Zahl der Automatisierungen sagt wenig. Was sie beseitigen und was sie zerbrechen, sagt viel.
- **Jede Automatisierung hat einen Eigner.** Eine Automatisierung ohne Eigner ist ein Risiko, das mit dem Alter wächst.
- **Jede automatisierte Handlung sichtbar und umkehrbar machen.** Protokollieren Sie, was lief, worauf und mit welchem Ergebnis, und wissen Sie, wie man es rückgängig macht.
- **Wählen, wo ein Mensch entscheidet.** Passen Sie die Rolle des Menschen an das Risiko der Handlung an und testen Sie, dass die Rolle ausgeübt werden kann.
- **Automatisierung als Service messen.** Sie hat Zuverlässigkeit, Change, Kosten und Ausmusterung wie jeder andere Service.
- **Zuerst das Stabile und Langweilige automatisieren.** Etwas schlecht Verstandenes zu automatisieren, brennt ein Problem in das System ein.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Erfolgsrate von Automatisierungsläufen | Anteil der Automatisierungsläufe, die abgeschlossen wurden und das beabsichtigte Ergebnis erreichten, durch eine Prüfung nach dem Lauf bestätigt | Läufe mit erfolgreicher Prüfung nach dem Lauf / im Zeitraum gestartete Läufe; Läufe ohne Prüfung nach dem Lauf werden ausgeschlossen und gesondert berichtet | Prozent | Protokolle der Orchestrierungs- und Automatisierungsplattform | Serviceanfragen-Management; Release-Management | Definition of Done für automatisierte Arbeit | Monatlich |
| Abdeckung durch Aufgabenautomatisierung | Anteil der geeigneten, wiederholten Aufgaben, die automatisiert sind | Aufgaben der vereinbarten Eignungsliste, die automatisiert laufen / Aufgaben der Eignungsliste; die Eignungsliste wird jedes Quartal überprüft | Prozent | Aufgabeninventar und Runbook-Register | Kontinuierliche Verbesserung | Backlog von Automatisierungskandidaten | Vierteljährlich |
| Rate manueller Eingriffe | Anteil der Automatisierungsläufe, bei denen eine Person eingreifen oder beheben musste | Läufe mit einem nach dem Start hinzugefügten manuellen Schritt / gestartete Läufe | Prozent | Automatisierungsprotokolle und Ticketverknüpfungen | Incident-Management | Entwichene Defekte in automatisierter Arbeit | Monatlich |
| Rate durch Automatisierung verursachter Incidents | Einer automatisierten Handlung zugeordnete Incidents je 1.000 Läufe | Incidents mit bestätigter Automatisierungsursache / Automatisierungsläufe x 1.000 | Anzahl je 1.000 Läufe | Incident-Datensätze, mit Lauf-Kennungen verknüpft | Incident-Management; Problemmanagement | Change-Fail-Rate für automatisierten Change | Monatlich |
| Rollback-Zeit | Zeit, eine automatisierte Handlung rückgängig zu machen, sobald die Notwendigkeit erkannt ist | Median und 95. Perzentil von (Zeitpunkt des abgeschlossenen Rückgängigmachens minus Zeitpunkt der Entscheidung zum Rückgängigmachen) | Minuten | Automatisierungsprotokolle und Incident-Zeitleiste | Change-Befähigung | Rollback-Fähigkeit in der Definition of Done | Vierteljährlich |
| Gesparte Zeit, verifiziert | Stunden beseitigter manueller Arbeit, durch Stichproben geprüft | automatisierte Aufgaben x (mediane manuelle Aufgabenzeit aus einer Zeitstichprobe minus mediane verbleibende manuelle Zeit) im Zeitraum; Datum der Stichprobe genannt | Stunden | Zeitstichproben und Laufzahlen | Kontinuierliche Verbesserung | Gelieferter Wert je Arbeitselement | Vierteljährlich |
| Aktualität der Verantwortung für Automatisierungen | Anteil der Automatisierungen mit einem Eigner, der die Verantwortung bestätigte und die Automatisierung in den letzten 12 Monaten überprüfte | Automatisierungen mit bestätigtem Eigner und Review in 12 Monaten / Automatisierungen im Register | Prozent | Automatisierungsregister | Governance; Asset- und Konfigurationsmanagement | Team-Charta und Verantwortung | Vierteljährlich |

Die Formeln zählen Läufe, nicht Aufgaben, sofern nicht anders angegeben. „Erfolgreich“ verlangt eine unabhängige Prüfung nach dem Lauf, etwa die Bestätigung, dass der Service gesund ist oder das Konto existiert; ein Lauf, der nur ohne Fehler endet, zählt nicht als erfolgreich. Die gesparte Zeit schließt die Zeit für Aufbau und Pflege der Automatisierung aus, die gesondert als Kosten gezählt wird (siehe Thema 7.7, Kapitalrendite und Business Case).

## Empfehlungen

### Entscheiden, was zu automatisieren ist

**1. Beginnen Sie bei einer Liste wiederholter Aufgaben, nicht bei Werkzeugen.** Ordnen Sie wiederholte Aufgaben danach, wie oft sie vorkommen, wie lange sie dauern, wie fehleranfällig sie sind und wie gut sie verstanden sind. Automatisieren Sie zuerst die stabilen und gut verstandenen und überlassen Sie die seltenen und schlecht verstandenen den Menschen.

**2. Beheben Sie den Prozess, bevor Sie ihn automatisieren.** Einen verwirrenden Prozess zu automatisieren macht die Verwirrung schneller. Gehen Sie die Schritte mit den Menschen durch, die sie tun, entfernen Sie Schritte, die nichts beitragen, und automatisieren Sie dann.

**3. Wählen Sie die Rolle des Menschen nach Risiko.** Bei risikoarmen, umkehrbaren Handlungen genügt es womöglich, dass eine Person danach ein Protokoll prüft. Bei Handlungen mit höherem Risiko genehmigt eine Person vor der Handlung. Bei den höchsten kann die Handlung manuell bleiben. Schreiben Sie die Regel auf und testen Sie, dass Genehmiger die Informationen zum Entscheiden haben.

### Automatisierung sicher machen

**4. Verlangen Sie einen Eigner und ein Register.** Jede Automatisierung hat einen benannten Eigner und einen Eintrag in einem Register mit Zweck, Umfang, Berechtigungen und letztem Review. Geht ein Eigner, wechselt die Verantwortung, bevor die Person geht.

**5. Begrenzen Sie Berechtigungen und Umfang.** Eine Automatisierung sollte den geringsten Zugriff haben, der die Arbeit erledigt, und eine Grenze dafür, wie viel sie in einem Lauf ändern kann, etwa eine Höchstzahl von Konten oder Servern. Eine Umfangsgrenze ist eine technische Leitplanke, die den Schaden eines schlechten Laufs deckelt.

**6. Prüfen Sie das Ergebnis, nicht den Exit-Code.** Fügen Sie eine Prüfung nach dem Lauf hinzu, die den beabsichtigten Zustand bestätigt, und messen Sie Erfolg an dieser Prüfung. Ein Skript, das sauber endet, hat womöglich nichts getan.

**7. Protokollieren Sie und planen Sie das Rückgängigmachen.** Jeder Lauf erfasst, was er änderte, und jede Automatisierung hat einen getesteten Weg, ihre Änderung umzukehren, oder einen genannten Grund, warum nicht. Üben Sie den Rollback in sicherer Umgebung und messen Sie die Zeit, die er braucht.

### Ehrlich messen

**8. Verifizieren Sie gesparte Zeit durch Stichproben.** Behauptungen gesparter Stunden sind oft optimistisch. Messen Sie eine Stichprobe der manuellen Aufgabe vorher und nachher, nennen Sie das Datum der Stichprobe und ziehen Sie die Kosten für Pflege und Fehlschläge ab.

**9. Berichten Sie Fehlschläge und Eingriffe neben der Abdeckung.** Eine hohe Abdeckungszahl bei hoher Rate manueller Eingriffe bedeutet, dass Menschen beheben, was die Automatisierung kaputt macht. Zeigen Sie beides auf einer Seite.

**10. Stellen Sie ein, was nicht mehr hilft.** Eine Automatisierung, deren Aufgabe sich geändert hat oder verschwunden ist, ist ein Risiko. Überprüfen Sie die Nutzung in regelmäßigem Rhythmus und entfernen Sie Automatisierungen ohne Läufe oder ohne Eigner.

**11. Halten Sie einen Menschen fähig, sie zu stoppen.** Bieten Sie einen klaren Weg, eine Automatisierung oder eine ganze Klasse von Automatisierungen schnell zu pausieren, und messen Sie, wie schnell das geschehen kann.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Erfolgsrate von Automatisierungsläufen | Einen Lauf als erfolgreich zählen, wenn er sauber endet; fehlgeschlagene Läufe aus dem Protokoll löschen | Unabhängige Prüfung nach dem Lauf; Protokolle mit nachgelagerten Datensätzen vergleichen |
| Abdeckung durch Aufgabenautomatisierung | Die Eignungsliste verkleinern, damit die Abdeckung steigt; zuerst triviale Aufgaben automatisieren | Eignungsliste mit einem zweiten Team überprüfen; nach Volumen und Zeit gewichten |
| Rate manueller Eingriffe | Manuelle Korrekturen als gesonderte Tickets erfassen, damit der Lauf sauber aussieht | Tickets mit Lauf-Kennungen verknüpfen; Läufe auf verborgene Korrekturen beproben |
| Rate durch Automatisierung verursachter Incidents | Automatisierungsfehler Menschen oder Werkzeugen zuschreiben; Incidents nicht mit Läufen verknüpfen | Lauf-Kennung in Incident-Datensätzen verlangen; Incidents auf verpasste Verknüpfungen beproben |
| Rollback-Zeit | Nur Rollbacks messen, die leicht waren; die Uhr spät starten | Rollback in einem Drill für die schwierigsten Automatisierungen üben; den Start der Uhr definieren |
| Gesparte Zeit, verifiziert | Optimistische Aufgabenzeiten nutzen; Pflege- und Fehlerkosten ignorieren | Zeitstichproben von jemandem außerhalb des Teams; Aufbau- und Pflegekosten einbeziehen |
| Aktualität der Verantwortung für Automatisierungen | Einen Verteiler oder einen ehemaligen Mitarbeiter als Eigner nennen | Eigner bestätigt schriftlich; prüfen, dass der Eigner aktiv ist |

Ein gesunder Befund ist steigende Abdeckung bei stabiler oder fallender Rate manueller Eingriffe und Incident-Rate, verifizierte gesparte Zeit, die dem entspricht, was das Team spürt, und ein Register, das aktuell bleibt, weil ausgemusterte Automatisierungen entfernt werden.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Breit und früh automatisieren | Beseitigt Toil; schnellere und konsistentere Arbeit | Schnelle, weite Fehlschläge; Pflegelast; verborgene Abhängigkeiten |
| Selektiv mit menschlichen Prüfungen automatisieren | Geringeres Risiko; Menschen bleiben geübt | Langsamer; Genehmiger nicken womöglich ab |
| Automatisierungen und gesparte Stunden zählen | Einfach zu berichten und zu vergleichen | Belohnt Quantität; Behauptungen oft unverifiziert |
| Wirkung, Fehlschläge und Rollback messen | Zeigt echten Wert und echtes Risiko | Mehr Aufwand beim Erfassen; verlangt Verknüpfung von Datensätzen |

Der Schluss in Worten ist, zu automatisieren, was stabil und verstanden ist, zu messen, was es beseitigt und was es zerbricht, und Menschen fähig zu halten, es zu stoppen. Eine Automatisierung, die Stunden spart, aber gelegentlich einen schweren Incident verursacht, kann ein schlechter Tausch sein, und nur die gekoppelten Kennzahlen zeigen das.

## Fragen für die Diskussion im Team

**1. Welche Automatisierungen betreiben wir heute, und wer besitzt jede?**
Stellen Sie die Liste gemeinsam zusammen, denn Teams finden meist Automatisierungen, an deren Bau sich niemand erinnert. Fragen Sie nach Zweck, Berechtigungen und dem Datum des letzten Reviews. Erwarten Sie Skripte auf einzelnen Rechnern und geplante Jobs mit ehemaligen Mitarbeitern als Eignern. Einigen Sie sich anschließend, wer bis Quartalsende jede besitzt.

**2. Wann machte eine Automatisierung zuletzt ein Problem größer oder schneller, als ein Mensch es getan hätte?**
Laden Sie zu Geschichten ohne Schuldzuweisung ein. Typische Beispiele sind ein Aufräumjob, der die falschen Ressourcen entfernte, oder eine Behebung, die einen Service während eines Ausfalls neu startete. Fragen Sie, welche Grenze den Schaden gedeckelt hätte. Die Antworten werden zu Umfangsgrenzen und Genehmigungsregeln.

**3. Wer entscheidet bei unserer riskantesten automatisierten Handlung, und könnte er gut entscheiden?**
Schauen Sie, was der Genehmiger im Moment der Genehmigung sieht. Oft fehlen der Genehmigungsanfrage die Informationen zum Urteilen. Fragen Sie, ob der Genehmiger Nein sagen könnte und was dann geschähe. Verbessern Sie anschließend die Anfrage oder ändern Sie die Rolle.

**4. Woran würden wir erkennen, dass eine Automatisierung still aufgehört hat zu funktionieren?**
Stilles Versagen ist das häufigste Problem und zeigt sich oft in flachen Zahlen. Fragen Sie nach der Prüfung, die es bemerken würde. Besprechen Sie Alarme bei fehlenden Läufen und bei Ergebnissen, die nicht den Erwartungen entsprechen. Wählen Sie eine Automatisierung und testen Sie sie.

**5. Welche gesparten Stunden haben wir tatsächlich für etwas Besseres ausgegeben?**
Auf dem Papier gesparte Zeit wird womöglich nicht zu Kapazität. Fragen Sie, wohin die Zeit ging und wer es entschied. Seien Sie ehrlich zu Pflege- und Fehlerkosten. Wählen Sie anschließend eine Behauptung, die mit einer Stichprobe zu verifizieren ist.

**6. Welche Automatisierung sollten wir ausmustern, und was bräuchte es?**
Fragen Sie nach Beleg für Nutzung und Wert. Ausmustern kann sich wie Versagen anfühlen, rahmen Sie es also als Routinepflege. Identifizieren Sie Abhängigkeiten, bevor Sie etwas entfernen. Einigen Sie sich auf eine Probezeit und einen Weg, sie wiederherzustellen.

## Vier Perspektiven

### Produkt- und Lieferteams

Bauen Sie Automatisierung als Teil des Produkts, mit Tests, Protokollen, einem Eigner und einem Weg zum Rollback. Nehmen Sie Prüfungen nach dem Lauf in die Definition of Done auf und vermeiden Sie, Schritte zu automatisieren, die das Team noch nicht versteht. Halten Sie Kennzahlen auf der Ebene der Automatisierungen des Teams, nicht einzelner Engineers.

### Service- und Betriebsteams

Sie tragen den Pager, wenn Automatisierung fehlschlägt, bestehen Sie also auf Sichtbarkeit und einem leichten Stopp. Verfolgen Sie manuelle Eingriffe und durch Automatisierung verursachte Incidents und nutzen Sie sie, um Korrekturen zu priorisieren. Behandeln Sie das Automatisierungsregister als Teil der Servicedokumentation.

### Führung und Governance

Fragen Sie nach Wirkung, Fehlschlägen und Rollback-Bereitschaft, nicht nur nach Zahlen von Automatisierungen. Finanzieren Sie die Pflege von Automatisierung ebenso wie ihre Erstellung und erwarten Sie, dass manche Automatisierungen ausgemustert werden. Setzen Sie Erwartungen an menschliche Aufsicht nach Risiko und überprüfen Sie die Liste der riskantesten Handlungen.

### Kunden und Nutzer

Sie sollten Automatisierung nicht bemerken, wenn sie funktioniert, und einen Menschen haben, an den Sie sich wenden können, wenn nicht. Fragen Sie, wie Sie einen Menschen erreichen, und sagen Sie, wenn eine automatisierte Handlung falsch war. Ihr Feedback ist Teil der Prüfung, ob die Automatisierung half.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Betriebsteam eines mittelgroßen Online-Händlers automatisiert drei Aufgaben: den Neustart eines ausfallenden Webservers, das Zurücksetzen von Passwörtern im Kundenservice und das Aufräumen ungenutzten Cloud-Speichers. Die Zahlen in diesem Beispiel sind illustrativ. Nach einem Quartal zeigt das Dashboard 3 Automatisierungen, 2.400 Läufe und „etwa 180 gesparte Stunden“. Die Führung ist zufrieden und bittet um mehr.

Das Team wendet die Kennzahlen an. Die Erfolgsrate der Automatisierungsläufe sieht nach Exit-Code wie 98 Prozent aus. Mit einer Prüfung nach dem Lauf fällt sie auf 91 Prozent: Das Passwort-Zurücksetzen meldet Erfolg, aber bei 9 Prozent der Läufe kann sich der Nutzer nicht anmelden. Die Rate manueller Eingriffe für diese Automatisierung beträgt 11 Prozent. Die Neustart-Automatisierung hat zwei Incidents verursacht, einen, als sie Server während eines Datenbank-Failovers neu startete, mit einer Rollback-Zeit von etwa 40 Minuten, weil das niemand geübt hatte.

Die Zeitstichprobe zeigt, dass das manuelle Zurücksetzen von Passwörtern etwa vier Minuten dauerte, nicht die zehn, die die ursprüngliche Schätzung nutzte, und dass die Bearbeitung fehlgeschlagener Zurücksetzungen etwa so lange dauert wie die ursprüngliche Aufgabe. Die verifizierte gesparte Zeit liegt näher bei 60 Stunden. Die Speicher-Aufräumautomatisierung hat einen Eigner, der im Frühjahr das Unternehmen verließ.

Das Team beschließt, dem Passwort-Zurücksetzen eine Prüfung nach dem Lauf hinzuzufügen, der Neustart-Automatisierung eine Umfangsgrenze und eine Pausenregel und dem Aufräumen einen neuen Eigner. Ein Manager schlägt vor, „gebaute Automatisierungen“ als Teamziel zu zählen. Das Team lehnt ab, denn es würde belohnen, mehr vom Gleichen zu bauen. Die verbleibende Schwierigkeit ist, dass die Prüfung nach dem Lauf für Passwörter ein Testkonto braucht und der Rollback-Drill für die Neustart-Automatisierung für das nächste Quartal angesetzt ist.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Behandeln Sie Automatisierung als Produkt, das fortlaufend mit den Menschen verbessert wird, die es nutzen und von ihm abhängen. Eine gute Praxis ist ein kurzes regelmäßiges Review des Automatisierungs-Backlogs, der Fehlschläge und Eingriffe mit Stakeholdern. Zu beachten ist, dass häufige kleine Änderungen an Automatisierung dasselbe Testen brauchen wie andere Changes, sonst kommen die Fehlschläge schneller.

### KI

KI kann Runbooks entwerfen, Skripte schreiben und entscheiden, welche Handlung zu ergreifen ist, und agentische KI kann auf Systeme einwirken. Behandeln Sie jede KI, die handeln kann, als Automatisierung mit einem Eigner, Berechtigungen, Umfangsgrenzen, einer Genehmigungsregel und einem Rollback. Koppeln Sie ihre Erfolgsrate mit der Rate falscher Handlungen und dem Anteil, den ein Mensch rückgängig machen musste (siehe Thema 10.3, Kennzahlen für KI-Agenten und Chatbots). Zu beachten ist, dass ein von KI geschriebenes Skript autoritativ aussieht; testen Sie es also wie jeden Code.

### Automatisierung

Dies ist der Gegenstand des Themas, die Praxis ist also, die Automatisierungsplattform selbst zu messen: ihre Verfügbarkeit, Laufausfälle und Wartezeiten, denn viele Services hängen von ihr ab. Erfassen Sie Laufdaten automatisch mit Lauf-Kennungen, die mit Tickets und Incidents verknüpfen. Zu beachten ist, dass die Automatisierungsplattform zum Single Point of Failure wird; halten Sie also für kritische Aufgaben einen manuellen Ausweichweg bereit.

### Analytik

Verknüpfen Sie Läufe mit Ergebnissen: erfolgreiche Prüfungen nach dem Lauf, Tickets und Incidents. Die Entscheidung, die dies untermauert, ist, welche Automatisierung zu beheben, zu erweitern oder auszumustern ist. Zu beachten ist, dass die Zuordnung von konsistenten Kennungen abhängt; prüfen Sie also die Verknüpfungsrate und zeigen Sie die Zahl der Läufe hinter jeder Rate (siehe Thema 10.8, Kennzahlen für Analytik und Datenqualität).

## Branchenperspektive

**Startup.** Kleine Teams automatisieren schnell und mit wenigen Kontrollen. Führen Sie eine kurze Liste von Automatisierungen mit Eignern, setzen Sie eine Prüfung nach dem Lauf auf alles, was Kunden berührt, und vermeiden Sie, eine Orchestrierungsplattform zu bauen, bevor Bedarf besteht.

**Kleinunternehmen.** Automatisierung bedeutet oft einige geplante Jobs und einen verwalteten Service. Fragen Sie Ihren Lieferanten, welche Automatisierung in Ihrem Namen läuft und wie der Rollback aussieht. Führen Sie eine Liste und prüfen Sie, dass jemand jedes Element besitzt.

**Großunternehmen.** Viele Automatisierungen über viele Teams erzeugen Abhängigkeiten und Doppelungen. Halten Sie ein zentrales Register, Standard-Logging und Lauf-Kennungen und einen Review-Weg für Handlungen mit hohem Risiko. Teilen Sie Automatisierungen über Teams, statt sie neu zu bauen.

**Behörden und öffentlicher Sektor.** Rechenschaft und Prüfbedarf bedeuten, dass jede automatisierte Handlung auf eine Entscheidung und einen Eigner zurückführbar sein muss. Bewahren Sie Protokolle und Genehmigungen als Beleg auf und prüfen Sie Beschaffungs- und Rechtsregeln für automatisierte Entscheidungen, die Bürger betreffen (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind Bau und Test der Automatisierung, der Betrieb der Plattform, die Pflege der Automatisierung, während sich Systeme ändern, und die Kosten von Fehlschlägen. Das Erfassen der Kennzahlen kostet wenig, wenn Läufe mit Kennungen protokolliert werden. Die größeren Kosten sind die Disziplin aus Eignern, Reviews und Rollback-Drills.

Der Ertrag ist die Beseitigung von Toil, schnellere und konsistentere Arbeit und weniger manuelle Fehler. Das ist real, aber leicht zu überzeichnen, verifizieren Sie also mit Stichproben. Auf der Risikoseite stehen durch Automatisierung verursachte Incidents und die Kosten einer Automatisierung, die niemand pflegt. Ein fairer Business Case vergleicht verifizierte gesparte Zeit plus vermiedene Fehler mit den vollen Kosten einschließlich Pflege und Incidents und nennt die Annahmen als Spannen (siehe Thema 7.7, Kapitalrendite und Business Case). Hier werden keine Richtwerte genannt, denn sie schwanken stark nach Kontext. Messen Sie Ihre eigenen Basislinien, bevor Sie beginnen.

## Anti-Muster und Fallstricke

- **Gebaute Automatisierungen zählen.** Es belohnt Quantität. Berichten Sie stattdessen Wirkung, Fehlschläge und Rollback.
- **Erfolg nach Exit-Code.** Ein sauberes Ende beweist wenig. Prüfen Sie das beabsichtigte Ergebnis.
- **Automatisierungen ohne Eigner.** Sie versagen still, während sich Systeme ändern. Halten Sie ein Register und bestätigen Sie Eigner.
- **Einen schlechten Prozess automatisieren.** Der Fehler wandert schneller. Beheben Sie zuerst den Prozess.
- **Kein Rückgängigmachen.** Eine schnelle falsche Handlung ohne Umkehr ist der schlimmste Fall. Planen und üben Sie Rollback.
- **Gesparte Stunden ohne Stichprobe behaupten.** Verifizieren Sie mit Zeitstichproben und ziehen Sie die Pflege ab.
- **Genehmigung als Theater.** Ein Genehmiger ohne die Informationen zum Entscheiden fügt Verzögerung ohne Sicherheit hinzu. Gestalten Sie die Anfrage um.
- **Automatisierung als Single Point of Failure.** Halten Sie für kritische Aufgaben einen manuellen Weg.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Verantwortung und Register | Skripte nur ihren Autoren bekannt | Hauptautomatisierungen aufgelistet | Register mit Eigner, Umfang und Review-Datum | Reviews und Ausmusterungen im Rhythmus | Gemeinsamer Katalog und Standardmuster über Teams |
| Sicherheit und Rollback | Kein Rückgängigmachen; Exit-Code-Prüfungen | Einige Prüfungen nach dem Lauf und Protokolle | Prüfungen nach dem Lauf, Umfangsgrenzen und getesteter Rollback | Rollback-Drills; Incidents mit Läufen verknüpft | Sicherheitsmuster in die Plattform eingebaut |
| Beleg des Werts | Zahlen und Schätzungen | Gesparte Zeit geschätzt | Gesparte Zeit beprobt und verifiziert | Wirkung, Fehlschläge und Kosten gemeinsam überprüft | Portfolio von Automatisierung nach Wert und Risiko gesteuert |

## Checkliste

- [ ] Jede Automatisierung hat einen Eigner, der die Verantwortung bestätigt hat.
- [ ] Ein Register listet jede Automatisierung mit Zweck, Umfang und Berechtigungen.
- [ ] Jede Automatisierung hat eine Prüfung nach dem Lauf, die das beabsichtigte Ergebnis bestätigt.
- [ ] Läufe werden mit Kennungen protokolliert, die zu Tickets und Incidents verknüpfen.
- [ ] Jede Automatisierung hat eine Umfangsgrenze und einen getesteten Weg, sie rückgängig zu machen oder zu pausieren.
- [ ] Die Rolle des Menschen ist für jede automatisierte Handlung nach Risiko definiert.
- [ ] Gesparte Zeit wird durch eine datierte Stichprobe verifiziert.
- [ ] Manuelle Eingriffe und durch Automatisierung verursachte Incidents werden mit der Abdeckung berichtet.
- [ ] Ungenutzte oder eignerlose Automatisierungen werden überprüft und ausgemustert.
- [ ] Jede Kennzahl hat einen Manipulationsvektor und eine Leitplanke daneben.

## KI-Prompts

**Ein Automatisierungsregister aus eingefügtem Material aufbauen.**

```text
I will paste a list of scripts, scheduled jobs, and automations we run: [paste
list with any notes]. Build a table with columns: name, purpose, system affected,
owner (use only what I provided; write "unknown" otherwise), permissions (only if
given), last review (only if given), and the first question I should ask about it.
Do not invent owners, dates, or permissions. List your assumptions at the end.
```

**Eine Prüfung nach dem Lauf und einen Rollback für eine Automatisierung entwerfen.**

```text
Our automation is [name], which does [description] on [systems]. It runs [how
often] with [permissions]. Propose a post-run check that confirms the intended
result, a scope limit that caps damage, a way to pause it, and a rollback
approach. Say what information a human approver would need if we added an
approval step. Do not assume tools we have not named. List your assumptions and
the questions I should answer.
```

**Das Manipulationsrisiko eines Automatisierungs-Dashboards überprüfen.**

```text
We report these automation measures: [paste measures and definitions]. Our
context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without helping anyone, propose a guardrail, and say how that
guardrail could be gamed. Do not invent benchmark values. List your assumptions.
```

**Eine Verifizierung gesparter Zeit planen.**

```text
We claim [number] hours saved by automating [task]. Draft a short plan to verify
it by sampling: what to time, how many samples to take, how to include
maintenance and failure handling, and how to report uncertainty. Do not invent
figures; use placeholders for numbers I should collect. List assumptions.
```

## KI-Skills

- [Runbook](../../../../skills/runbook/SKILL.md): zu verwenden, um eine Aufgabe zu dokumentieren, bevor sie automatisiert wird.
- [Root cause analysis](../../../../skills/root-cause-analysis/SKILL.md): zu verwenden, um einen Incident zu analysieren, den eine automatisierte Handlung verursachte.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine Kennzahl und ihre gekoppelte Leitplanke abdeckt.

## Wichtigste Erkenntnisse

- Zahlen von Automatisierungen und gesparte Stunden beschreiben Aufwand und Behauptungen, messen Sie also Wirkung, Fehlschläge und Rollback.
- Jede Automatisierung braucht einen Eigner, einen Registereintrag, eine Prüfung nach dem Lauf, eine Umfangsgrenze und einen Weg, sie rückgängig zu machen oder zu pausieren.
- Wählen Sie nach Risiko, wo ein Mensch entscheidet, und testen Sie, dass der Mensch gut entscheiden kann.
- Verifizieren Sie gesparte Zeit mit datierten Stichproben und ziehen Sie Pflege- und Fehlerkosten ab.
- Mustern Sie Automatisierungen aus, die keinen Eigner haben, ungenutzt oder nicht mehr nötig sind.

## Quellen und weiterführende Literatur

1. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
2. Wikipedia, [Orchestration (computing)](https://en.wikipedia.org/wiki/Orchestration_(computing)).
3. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
4. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
5. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
6. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
7. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
