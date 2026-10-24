# Verfügbarkeitskennzahlen

**Verfügbarkeit ist der Anteil der Zeit oder der Nutzeranfragen, in dem ein Service tat, was seine Nutzer brauchten. Sie sagt nur dann die Wahrheit, wenn Sie definieren, was „oben“ aus Sicht des Nutzers heißt, geplante und ungeplante Ausfälle getrennt zählen und die Arithmetik der Neunen lesen, bevor Sie eine versprechen.**

## Überblick und Motivation

Verfügbarkeit ist die am häufigsten zitierte Zahl im Service-Management und eine der am ungenauesten definierten. Eine Aussage wie „der Service war letzten Monat zu 99,9 Prozent verfügbar“ klingt exakt, verbirgt aber mindestens vier Entscheidungen: was als Service zählte, was als „verfügbar“ zählte, welche Stunden im Umfang lagen und welche Ausfälle ausgeschlossen waren. Zwei Teams können denselben Service im selben Monat berichten und Zahlen veröffentlichen, die sich um eine Größenordnung unterscheiden, ohne dass eines von ihnen einen Rechenfehler gemacht hat.

Dieses Thema macht diese Entscheidungen ausdrücklich. Es behandelt die Berechnung von Verfügbarkeit und Ausfallzeit, nutzergewichtete Verfügbarkeit, geplanten gegenüber ungeplantem Ausfall und die Arithmetik der Neunen. Es baut auf Service Level Indicators (SLIs), Service Level Objectives (SLOs) und Fehlerbudgets (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets) und auf der vertraglichen Sicht auf Service Levels (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA) auf. Diese Themen sagen, wie man ein Ziel wählt. Dieses sagt, wie man die Zahl berechnet, mit der das Ziel verglichen wird.

### In diesem Thema verwendete Begriffe

- **Verfügbarkeit** ist die Fähigkeit eines Services, zu tun, was Nutzer brauchen, wenn sie es brauchen, meist als Prozentsatz über einen Zeitraum ausgedrückt. Das allgemeine Konzept beschreibt der Artikel zu [Hochverfügbarkeit](https://en.wikipedia.org/wiki/High_availability).
- **[Ausfallzeit](https://en.wikipedia.org/wiki/Downtime)** ist ein Zeitraum, in dem ein Service nicht verfügbar ist. Dieses Thema verwendet **Ausfall** für eine zusammenhängende Episode von Ausfallzeit und **Degradation** für einen Zeitraum, in dem der Service funktioniert, aber unter einer vereinbarten Qualität.
- **Uptime** ist das Komplement der Ausfallzeit innerhalb des Messfensters. Zeitbasierte Verfügbarkeit ist Uptime geteilt durch die gesamte Zeit im Umfang.
- **Anfragebasierte Verfügbarkeit** ist der Anteil gültiger Anfragen, die erfolgreich waren, sodass ein Fehlschlag, der eine Stunde lang 5 Prozent der Anfragen betrifft, als 5 Prozent des Verkehrs einer Stunde zählt, nicht als volle Stunde Ausfallzeit.
- **Nutzergewichtete Verfügbarkeit** erweitert die anfragebasierte Sicht, indem sie Fehlschläge nach Zahl oder Bedeutung der betroffenen Nutzer gewichtet, etwa indem fehlgeschlagene Sitzungen oder Reisen statt roher Anfragen gezählt werden.
- Ein **Service Level Agreement (SLA)** ist eine Zusage an einen Kunden, und ein **Service Level Objective (SLO)** ist ein internes Ziel für einen Indikator. Die Artikel zu [Service Level Agreement](https://en.wikipedia.org/wiki/Service-level_agreement) und [Service Level Objective](https://en.wikipedia.org/wiki/Service-level_objective) geben allgemeine Definitionen.
- **Geplante Ausfallzeit** ist ein im Voraus angekündigter und über die Change-Befähigung genehmigter Ausfall. **Ungeplante Ausfallzeit** ist alles andere. Die Grenze zwischen beiden ist eine der umstrittensten Linien in der Verfügbarkeitsberichterstattung.
- **[Mittlerer Ausfallabstand (MTBF)](https://en.wikipedia.org/wiki/Mean_time_between_failures)** ist die durchschnittliche Betriebszeit zwischen Ausfällen, und **[mittlere Reparaturzeit](https://en.wikipedia.org/wiki/Mean_time_to_repair)** ist die durchschnittliche Zeit bis zur Wiederherstellung. Beide sind Durchschnitte, dieses Buch liest sie also als Verteilungen (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).
- **[Synthetisches Monitoring](https://en.wikipedia.org/wiki/Synthetic_monitoring)** nutzt skriptgesteuerte Sonden, die sich wie ein Nutzer verhalten und Erfolg oder Fehlschlag melden. **[Real User Monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring)** erfasst das Erlebnis tatsächlicher Nutzer bei der Nutzung des Services.
- **[ITIL](https://en.wikipedia.org/wiki/ITIL)** ist das bekannteste Rahmenwerk für IT-Service-Management. In ITIL 4 befasst sich die Praktik des Verfügbarkeitsmanagements damit sicherzustellen, dass Services vereinbarte Verfügbarkeitsniveaus liefern, und sie arbeitet eng mit Monitoring und Ereignismanagement, Incident-Management und Management der Servicekontinuität zusammen.

### Warum eine Zahl nie genügt

Zehn Ausfälle von je vier Minuten und ein Ausfall von vierzig Minuten ergeben dieselbe Gesamtausfallzeit, fühlen sich für Nutzer aber verschieden an und verlangen verschiedene Reaktionen. Das erste Muster deutet auf einen fragilen Service. Das zweite deutet auf langsame Erkennung oder Wiederherstellung. Aus diesem Grund kommen die Kennzahlen hier als kleiner Satz, jede mit einer Leitplanke, damit ein Team ehrlich über Verfügbarkeit sprechen kann, ohne um die meisten Neunen zu konkurrieren.

### Wie sich ITIL- und agile Sicht unterscheiden

In ITIL ist Verfügbarkeit ein gesteuertes Merkmal eines Services, mit dem Kunden vereinbart und vom Service-Level-Management gegen ein genanntes Ziel berichtet, mit klaren Servicezeiten und Ausschlüssen wie geplanter Wartung.

In der agilen und Site-Reliability-Engineering-(SRE-)Praxis ist Verfügbarkeit ein SLI unter mehreren, verglichen mit einem SLO. Das Google-Buch *Site Reliability Engineering* sagt, dass zeitbasierte Verfügbarkeit zu einem einzelnen System passt, während die Anfrage-Erfolgsrate zu verteilten Services passt, die zu jeder Zeit teilweise oben sind. Es sagt auch, dass 100 Prozent fast nie das richtige Ziel sind, weil die Kosten jeder zusätzlichen Neun steil steigen.

Nutzen Sie die ITIL-Disziplin vereinbarten Umfangs, vereinbarter Zeiten und Ausschlüsse, um den Nenner zu definieren. Nutzen Sie die SRE-Disziplin nutzerzentrierter Indikatoren und Fehlerbudgets, um den Zähler zu definieren und zu entscheiden, was mit dem Ergebnis zu tun ist.

## Leitprinzipien

- **„Verfügbar“ aus Sicht des Nutzers definieren.** Ein Service, der auf Health Checks antwortet, während Nutzer sich nicht anmelden können, ist für die Menschen, auf die es ankommt, ausgefallen.
- **Den Nenner aufschreiben.** Nennen Sie die Servicegrenze, die Stunden im Umfang, die Zeitzone und das Messfenster, bevor Sie irgendetwas berechnen.
- **Geplante und ungeplante Ausfälle getrennt zählen.** Berichten Sie beide zusammen und lassen Sie nie eines im anderen verschwinden.
- **Bei verteilten Services anfragebasierte und nutzergewichtete Messgrößen bevorzugen.** Ein Teilausfall ist weder volle Uptime noch volle Ausfallzeit.
- **Neunen in Minuten umrechnen.** Ein Ziel wird nur verstanden, wenn Menschen sagen können, wie viele Minuten Fehlschlag pro Monat es erlaubt.
- **So viele Neunen wählen, wie die Nutzer brauchen.** Darüber hinaus kostet jede zusätzliche Neun mehr, als sie einbringt.
- **Services beschreiben, nie Menschen.** Verfügbarkeit gehört zu einem Service und den Teams, die ihn betreiben, und ist nie die Punktzahl einer Einzelperson.

## Kennzahlendefinitionen

Jede Zeile nennt ihre Uhren und Grenzen. Es wird Kalenderzeit verwendet, sofern eine Zeile nichts anderes sagt. Wo eine Messgröße eine Verteilung nutzt, berichten Sie Median und 95. Perzentil und nennen Sie das Fenster.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Zeitbasierte Verfügbarkeit | Anteil der Zeit im Umfang, in der der Service die schriftliche Definition von „oben“ erfüllte | (Minuten im Umfang im Fenster minus Minuten ungeplanter Ausfallzeit) / Minuten im Umfang im Fenster. Die Uhr startet bei der ersten fehlgeschlagenen Sonde, die später als Nutzerauswirkung bestätigt wird, oder beim im Incident-Review erfassten bestätigten Beginn der Auswirkung; stoppt, wenn der Service die Definition wieder erfüllt. Geplante Ausfallzeit innerhalb vereinbarter Servicezeiten wird gesondert gezeigt, und Zeit außerhalb vereinbarter Servicezeiten ist aus dem Nenner ausgeschlossen | Prozent | Ergebnisse des synthetischen Monitorings; Incident-Datensatz mit Zeitstempeln für Auswirkungsbeginn und Wiederherstellung | Verfügbarkeitsmanagement; Service-Level-Management | Ein zeitbasierter SLI für ein einzelnes System (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets) | Monatlich |
| Anfragebasierte Verfügbarkeit | Anteil gültiger Anfragen, die erfolgreich waren | erfolgreiche gültige Anfragen / gültige Anfragen insgesamt im Fenster. Gültige Anfragen schließen fehlerhafte Anfragen und vom Aufrufer verursachte Client-Fehler aus; vom Service verursachte Fehlschläge, einschließlich Timeouts, zählen als Fehlschläge. Je Service und je Nutzerreise berichtet | Prozent | Logs und Metriken von Load Balancer, Gateway oder Anwendung | Verfügbarkeitsmanagement; Monitoring und Ereignismanagement | Erfolgsraten-SLI mit SLO und Fehlerbudget (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets) | Täglicher Trend, Monatsbericht |
| Nutzergewichtete Verfügbarkeit | Nach betroffenen Nutzern oder Reisen gewichtete Verfügbarkeit, sodass ein Ausfall zur Spitzenzeit mehr zählt als einer über Nacht | 1 minus (fehlgeschlagene Nutzersitzungen oder fehlgeschlagene Reisen / Nutzersitzungen oder Reisen insgesamt) im Fenster. Eine Sitzung zählt als fehlgeschlagen, wenn ein definierter kritischer Schritt fehlschlug; Teilerfolg wird als gesonderter Degradationsanteil berichtet, nicht eingerechnet | Prozent | Real User Monitoring; Sitzungs-Logs der Anwendung; Analytik-Ereignisse | Verfügbarkeitsmanagement; Service-Level-Management | Reisebasierter SLI und die Erlebnismessgrößen in Thema 6.2 (siehe Thema 6.2, Experience Level Agreements) | Monatlich |
| Ungeplante Ausfallzeit | Minuten, in denen der Service ohne vorherige genehmigte Ankündigung nicht verfügbar war | Summe der Ausfalldauern im Fenster, vom bestätigten Auswirkungsbeginn bis zur bestätigten Wiederherstellung, für Ausfälle, die nicht vor ihrem Beginn über die Change-Befähigung angekündigt und genehmigt wurden. Sich überlappende Ausfälle desselben Services werden zusammengeführt, nicht summiert. Berichtet als Gesamtminuten, Ausfallzahl sowie Median und 95. Perzentil der Ausfalldauer | Minuten | Incident-Datensatz mit Zeitstempeln für Auswirkungsbeginn und Wiederherstellung | Incident-Management; Verfügbarkeitsmanagement | Zeit bis zur Wiederherstellung als Verteilung gelesen (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents) | Monatlich |
| Anteil geplanter Ausfallzeit | Anteil der gesamten Ausfallzeit, der im Voraus angekündigt und genehmigt war | Minuten geplanter Ausfallzeit / (Minuten geplanter plus ungeplanter Ausfallzeit) im Fenster. Ein Ausfall zählt nur dann als geplant, wenn er vor seinem Beginn über einen Change-Datensatz genehmigt wurde und seine Start- und Endzeiten den Nutzern mitgeteilt wurden; eine Überschreitung über das genehmigte Fenster hinaus wird ab dem Moment, in dem das Fenster endete, als ungeplant umklassifiziert | Prozent | Change-Datensatz mit genehmigtem Fenster; Incident-Datensatz; Verlauf der Statusseite | Change-Befähigung; Verfügbarkeitsmanagement | Release- und Wartungspraktiken, die Deployment ohne Ausfallzeit bevorzugen (siehe Thema 4.3, Kennzahlen für die Change-Befähigung) | Monatlich |
| Ausfallhäufigkeit und -abstand | Wie oft Ausfälle beginnen und wie lange der Service zwischen ihnen läuft | Zahl der im Fenster beginnenden Ausfälle; und für jedes Paar aufeinanderfolgender Ausfälle die Minuten Uptime zwischen der Wiederherstellung des ersten und dem Beginn des zweiten, zusammengefasst als Median und 5. Perzentil. Nicht als einzelner Mittelwert berichtet, wenn weniger als zehn Abstände existieren | Anzahl; Minuten | Incident-Datensatz; Monitoring-Historie | Incident-Management; Problemmanagement | Stabilitätssignal neben der Change-Fehlerrate (siehe Thema 4.4, Change-Fehlschläge und Nacharbeit) | Monatlich |
| Degradationsanteil | Zeit, in der der Service funktionierte, aber unter einer vereinbarten Qualität | Minuten, in denen der Latenz-, Fehler- oder Korrektheitsindikator seine Schwelle verletzte, ohne die bereits als Ausfallzeit gezählten Minuten / Minuten im Umfang. Schwelle je Service genannt, zum Beispiel im SLO | Prozent | Monitoring und SLI-Messungen | Verfügbarkeitsmanagement; Kapazitäts- und Leistungsmanagement | Latenz-SLI (siehe Thema 5.4, Kennzahlen für Kapazität und Leistung) | Monatlich |
| Messabdeckung | Wie viel des nutzersichtbaren Verhaltens des Services die Verfügbarkeitsmessung tatsächlich beobachtet | Kritische Nutzerreisen mit aktiver Sonde oder Real-User-Messung / in der Servicedefinition aufgeführte kritische Nutzerreisen | Prozent | Servicedefinition; Monitoring-Konfiguration | Monitoring und Ereignismanagement; Verfügbarkeitsmanagement | Observability-Abdeckung und Alarmqualität (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität) | Vierteljährlich |

Zwei Anmerkungen zu den Daten. Eine Sonde, die alle fünf Minuten prüft, kann einen Ausfall von zwei Minuten nicht auflösen. Erfassen Sie also das Sondenintervall neben der Zahl und nutzen Sie das Feld für den Auswirkungsbeginn im Incident-Datensatz (siehe Thema 1.5, Datenquellen und Instrumentierung). Wann immer sich die Definition von „oben“ ändert, markieren Sie es im Trenddiagramm.

## Empfehlungen

### Die Messung definieren

**1. Schreiben Sie die Servicedefinition vor dem Prozentsatz.** Listen Sie die Servicegrenze, die kritischen Nutzerreisen, die Stunden im Umfang, die Zeitzone und das Fenster (üblich ist ein Kalendermonat) auf. Sagen Sie, welche Abhängigkeiten zählen: Fällt ein Zahlungsanbieter aus und Nutzer können nicht zahlen, ist das Ihr Ausfall? Halten Sie die Antwort im Kennzahlenregister fest (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen). Die meisten Streitigkeiten über Verfügbarkeit sind Streitigkeiten über diese Seite, und sie im Voraus beizulegen ist weit billiger, als sie nach einem Ausfall beizulegen.

**2. Definieren Sie „oben“ als Nutzerergebnis, nicht als Serverzustand.** Ein Health Check, der Erfolg meldet, während die Anmeldung kaputt ist, misst das Falsche. Wählen Sie eine kleine Zahl kritischer Reisen, etwa „einen Artikel suchen und ansehen“, „anmelden“ oder „einen Antrag einreichen“, und definieren Sie für jede den Erfolg in Begriffen, die Nutzer wiedererkennen würden. Sondieren Sie die Reise von Ende zu Ende und behandeln Sie eine langsame Antwort jenseits einer vereinbarten Schwelle als degradiert, nicht als oben.

**3. Nutzen Sie anfragebasierte Messgrößen für verteilte Services und zeitbasierte, wo der Service wirklich an oder aus ist.** Ein globaler Service ist selten ganz ausgefallen, Minuten totalen Fehlschlags zu zählen ignoriert also die meisten echten Fehler. Berichten Sie beide, wenn Sie können, und sagen Sie, welche die Hauptzahl ist und warum.

**4. Fügen Sie Nutzergewichtung hinzu, wo die Last ungleich ist.** Ein Ausfall von zehn Minuten um 4 Uhr morgens und einer zu Beginn eines Handelstages haben dieselbe Dauer und sehr verschiedene Kosten. Gewichten Sie nach Sitzungen oder Transaktionen in der Minute des Fehlschlags oder berichten Sie Ausfallminuten zur Spitzenzeit als gesonderte Zahl.

**5. Messen Sie von außerhalb der Fehlerdomäne.** Eine Sonde im selben Netz oder in derselben Region wie der Service fällt mit ihm aus oder meldet weiter Erfolg, während der Weg der Nutzer kaputt ist. Betreiben Sie synthetische Sonden von mindestens zwei unabhängigen Standorten und gleichen Sie sie mit Daten echter Nutzer ab.

### Geplante und ungeplante Ausfälle ehrlich behandeln

**6. Berichten Sie geplante und ungeplante Ausfallzeit nebeneinander.** Viele Vereinbarungen schließen geplante Wartung aus, was vernünftig ist. Nutzer erleben sie dennoch als Ausfallzeit, zeigen Sie also die ausgeschlossenen Minuten und den geplanten Anteil neben der Hauptzahl (siehe Thema 4.3, Kennzahlen für die Change-Befähigung).

**7. Machen Sie das Etikett „geplant“ schwer zu verdienen.** Definieren Sie geplant als vor Beginn des Ausfalls über einen Change-Datensatz genehmigt, mit im Voraus den Nutzern mitgeteilten Start- und Endzeiten. Ein nach seinem Beginn angekündigter Ausfall ist ungeplant. Eine Überschreitung über das genehmigte Fenster hinaus ist ab dem Moment ungeplant, in dem das Fenster endete. Diese drei Regeln verhindern, dass das Etikett zum Weg wird, Fehlschläge umzuetikettieren.

**8. Arbeiten Sie daran, geplante Ausfallzeit zu verkleinern.** Rolling Deployments, Feature-Flags, sperrfreie Schemamigrationen und Blue-Green-Releases lassen Teams einen Service ändern, ohne ihn herunterzufahren. Verfolgen Sie Minuten geplanter Ausfallzeit als Trend und fragen Sie, was nötig wäre, sie gegen null zu bringen.

### Die Zahlen gut lesen

**9. Rechnen Sie die Neunen in Minuten um und zeigen Sie sie.** Die folgende Tabelle gibt die Arithmetik für einen 30-Tage-Monat (43.200 Minuten) und ein 365-Tage-Jahr (525.600 Minuten). Setzen Sie die erlaubten Minuten neben das Ziel ins Dashboard und zeigen Sie die bisher im Fenster verbrauchten Minuten. Menschen entscheiden besser über „43 Minuten im Monat“ als über „drei Neunen“.

| Verfügbarkeitsziel | Erlaubte Ausfallzeit im 30-Tage-Monat | Erlaubte Ausfallzeit im 365-Tage-Jahr |
| --- | --- | --- |
| 99 Prozent | 432 Minuten (7,2 Stunden) | 5.256 Minuten (87,6 Stunden) |
| 99,5 Prozent | 216 Minuten (3,6 Stunden) | 2.628 Minuten (43,8 Stunden) |
| 99,9 Prozent | 43,2 Minuten | 525,6 Minuten (8,76 Stunden) |
| 99,95 Prozent | 21,6 Minuten | 262,8 Minuten (4,38 Stunden) |
| 99,99 Prozent | 4,32 Minuten | 52,56 Minuten |
| 99,999 Prozent | etwa 26 Sekunden | etwa 5,26 Minuten |

Die Werte nehmen an, dass die Uhr über das ganze Fenster läuft. Messen Sie nur vereinbarte Servicezeiten, schrumpfen die erlaubten Minuten proportional, und das sollten Sie sagen.

**10. Respektieren Sie die Kosten jeder zusätzlichen Neun und die Grenzen Ihrer Abhängigkeiten.** Das SRE-Buch hält fest, dass die Zuverlässigkeitskosten mit jeder zusätzlichen Neun steil steigen und dass das Ziel widerspiegeln sollte, was Nutzer brauchen und das Unternehmen zu zahlen bereit ist. Ein Service kann selten verfügbarer sein als die Abhängigkeiten, die er in Reihe braucht. Erreichen drei wesentliche Komponenten je 99,9 Prozent und braucht eine Anfrage alle drei, beträgt die beste erwartete Verfügbarkeit der Kombination etwa 99,7 Prozent, weil sich die Ausfallwahrscheinlichkeiten bei unabhängigen Komponenten addieren. Rechnen Sie die Multiplikation durch, bevor Sie eine Zahl versprechen.

**11. Schauen Sie auf Abstand und Form, nicht nur auf die Summe.** Häufige kurze Ausfälle brauchen eine andere Reaktion als ein seltener langer Ausfall. Verknüpfen Sie lange Ausfälle mit Erkennung und Wiederherstellung (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents) und mit der Sicht auf Major Incidents (siehe Thema 3.4, Kennzahlen für Major Incidents).

**12. Schließen Sie die Schleife mit Fehlerbudget und Problemdatensatz.** Ein Verfügbarkeitsziel ist nützlich, wenn es ändert, was das Team tut. Ist das Monatsbudget erlaubter Ausfallzeit fast aufgebraucht, verlangsamen Sie riskanten Change und verlagern Aufwand zu Zuverlässigkeitsarbeit, wie in der Fehlerbudget-Richtlinie beschrieben (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets). Kehrt dieselbe Ursache wieder, eröffnen Sie einen Problemdatensatz und verfolgen ihn bis zu einer Korrektur (siehe Thema 4.1, Kennzahlen für das Problemmanagement).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Zeitbasierte Verfügbarkeit | Eine triviale Seite sondieren, die oben bleibt, während die echte Reise fehlschlägt; das Sondenintervall verlängern, damit kurze Ausfälle zwischen die Prüfungen fallen; die Stunden im Umfang verkleinern; Ausfälle als Degradation zählen | Nutzergewichtete Verfügbarkeit und Real User Monitoring; Sondenintervall neben der Zahl genannt; Incidents stichprobenartig gegen die Monitoring-Aufzeichnung geprüft |
| Anfragebasierte Verfügbarkeit | Leichte Anfragen (Health Checks, gecachte Assets) in den Nenner zählen, um Fehlschläge zu verdünnen; Serverfehler als Client-Fehler klassifizieren; Wiederholungen ausschließen, die Nutzer als Fehlschläge erlebten | Erfolgsrate je kritischer Reise, nicht je Anfrage; Review der Ausschlussliste; Vergleich mit nutzergemeldeten Incidents |
| Nutzergewichtete Verfügbarkeit | Die Gewichtung so wählen, dass Fehlschläge zur Spitzenzeit wenig zählen; eine „erfolgreiche“ Sitzung so locker definieren, dass auch kaputte Schritte bestehen | Gewichtungsregel und Reisenliste veröffentlichen; mit Beschwerdevolumen und Support-Kontakten bei Ausfällen vergleichen |
| Ungeplante Ausfallzeit | Ausfälle nachträglich als geplant umklassifizieren; den bestätigten Auswirkungsbeginn verzögern; einen Ausfall in zwei teilen, damit er kürzer aussieht | Anteil geplanter Ausfallzeit, mit der Regel, dass ein nach seinem Beginn angekündigter Ausfall ungeplant ist; Auswirkungsbeginn mit Monitoring-Daten vergleichen |
| Anteil geplanter Ausfallzeit | Changes als genehmigte Fenster buchen, damit Überschreitungen und Fehlschläge als geplant zählen; den geplanten Anteil durch unnötige Wartung aufblähen | Überschreitungsminuten als ungeplant umklassifiziert; Change-Fehlerrate und Anteil von Notfall-Changes (siehe Thema 4.4, Change-Fehlschläge und Nacharbeit) |
| Ausfallhäufigkeit und -abstand | Incidents zusammenführen oder erst nach einer langen Pause einen neuen Incident eröffnen, um die Zahl niedrig zu halten; Alarme unterdrücken, damit kurze Ausfälle unerfasst bleiben | Stichproben von Alarmen und Incidents gegen rohe Monitoring-Ereignisse; Monitoring-Abdeckung und Alarmqualität (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität) |
| Degradationsanteil | Die Schwelle so locker setzen, dass langsamer Service sie nie verletzt; degradierte Zeit als oben ausweisen | Latenzperzentile und nutzergemeldete Langsamkeit neben der Zahl überprüft (siehe Thema 5.4, Kennzahlen für Kapazität und Leistung) |
| Messabdeckung | Nur Reisen aufführen, die leicht zu sondieren sind, sodass die Abdeckung als 100 Prozent erscheint; eine Reise als abgedeckt zählen, deren Sonde nie läuft | Mit Serviceeigner und Nutzern vereinbarte Reisenliste; Laufhistorie der Sonden jedes Quartal stichprobenartig geprüft |

Ein gesunder Befund zeigt Zahlen, die sich aus Gründen bewegen, die das Team erklären kann, mit sichtbarer geplanter und ungeplanter Ausfallzeit und einer nutzergewichteten Zahl nahe der Hauptzahl. Seien Sie misstrauisch gegenüber einem perfekten Monat, der mit Beschwerden einhergeht. Ein gelegentlicher ehrlicher Einbruch zeigt, dass das Erfassungssystem funktioniert.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Zeitbasierte Verfügbarkeit | Einfach, weithin verstanden, leicht mit Verträgen zu vergleichen | Behandelt Teilausfall als alles oder nichts; ignoriert wann und wer |
| Anfragebasierte Verfügbarkeit | Spiegelt Teilausfall; skaliert auf verteilte Services | Hängt von einer soliden Definition einer gültigen Anfrage ab; kann durch leichten Verkehr verdünnt werden |
| Nutzergewichtete Verfügbarkeit | Nah an dem, was Nutzer erlebten; zeigt die Kosten von Fehlschlag zur Spitzenzeit | Braucht Sitzungs- oder Reisedaten; mehr Aufwand zu erklären |
| Geplante Ausfallzeit ausschließen | Passt zu vielen Vereinbarungen; belohnt Vorankündigung | Kann echte Auswirkung verbergen; lädt zum Umetikettieren ein |
| Moderate Ziele mit Fehlerbudgets | Gleicht Zuverlässigkeit und Liefergeschwindigkeit aus | Braucht Disziplin, zu handeln, wenn das Budget verbraucht ist |

Die Antwort in Worten ist, die einfachste Messgröße zu wählen, die zum Service passt, Nutzergewichtung hinzuzufügen, wo die Last ungleich ist, und jeden Ausschluss ausdrücklich zu machen. Eine etwas weniger elegante Messgröße, die alle verstehen, nützt mehr als eine ausgefeilte, der niemand traut.

## Fragen für die Diskussion im Team

**1. Was bedeutet „verfügbar“ für unseren wichtigsten Service, und würde ein Nutzer zustimmen?**
Bitten Sie jede Person, in einem Satz zu beschreiben, was ein Nutzer tun können muss, damit der Service als oben zählt. Vergleichen Sie die Antworten mit der schriftlichen Definition und mit der Sonde, die das Dashboard speist. Die Moderation sollte auf Lücken hören, etwa Anmeldung, Suche oder Zahlung, die in der Sonde funktionieren, in der Praxis aber fehlschlagen. Einigen Sie sich zum Schluss, welche Nutzerreisen die Definition nennen muss.

**2. Welche Ausfälle des letzten Quartals hätte unsere Berechnung ausgeschlossen, und war das fair?**
Listen Sie die Ausfälle auf und markieren Sie jeden als geplant, ungeplant oder ausgeschlossen. Fragen Sie, wer jede Entscheidung traf und wann. Die Moderation sollte Fälle festhalten, in denen Nutzer dem Etikett widersprochen hätten, und sie nutzen, um die Regeln zu schärfen.

**3. Wie viele Minuten Ausfallzeit erlaubt unser Ziel, und wie viele haben wir in diesem Fenster verbraucht?**
Rechnen Sie das Ziel an einer Tafel in Minuten für Monat und Jahr um. Vergleichen Sie mit den bisher verbrauchten Minuten. Fragen Sie, was das Team anders täte, wenn nur noch 20 Prozent des Budgets übrig wären. So wird das abstrakte Ziel konkret und die Zahl mit der Fehlerbudget-Richtlinie verbunden.

**4. Wo könnte unsere Messung einen Fehlschlag verpassen, den Nutzer spüren würden?**
Gehen Sie Sondenstandorte, Intervall, abgedeckte Reisen und Abhängigkeiten durch. Fragen Sie, welcher Fehlschlag jede Sonde passieren und den Service für Nutzer trotzdem kaputt machen würde. Einigen Sie sich auf eine neue Sonde oder eine Real-User-Messung, die hinzuzufügen ist.

**5. Planen wir Ausfälle, die wir vermeiden könnten?**
Betrachten Sie die geplante Ausfallzeit über sechs Monate und fragen Sie, was jeden Ausfall erzwang. Manche sind unvermeidbar, etwa eine Vorgabe des Anbieters. Andere stammen aus einem Release- oder Migrationsansatz, der sich ändern ließe. Fragen Sie, was nötig wäre, die größte Quelle zu beseitigen, und wer diese Arbeit besitzt.

**6. Wenn die Hauptzahl perfekt aussieht, was ließe uns zweifeln?**
Nennen Sie die Signale, die dem Dashboard widersprechen würden: Beschwerdevolumen, Support-Kontakte oder die Erinnerung des Bereitschaftsteams. Prüfen Sie, ob welche gerade existieren. Einigen Sie sich auf einen Vergleich, der ins Dashboard kommt.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams beeinflussen die Verfügbarkeit bei jeder Änderung eines Services. Sie können für Deployment ohne Ausfallzeit entwerfen, Feature-Flags nutzen, um den Wirkungsradius zu begrenzen, und das Fehlerbudget als Eingabe für Release-Entscheidungen behandeln, wobei sie Verfügbarkeit neben Deployment-Messgrößen lesen (siehe Thema 2.8, DORA-Kennzahlen).

### Service- und Betriebsteams

Betriebsteams besitzen die Sonden, die Incident-Datensätze und die Rotationen, die die Daten erzeugen. Sie sollten Definition und Ausschlussliste aktuell halten, den Auswirkungsbeginn ehrlich erfassen und das Monitoring gegen echte Incidents überprüfen. Verfügbarkeit gehört zum Service und seiner Rotation, nie zu einem Ingenieur in Bereitschaft (siehe Thema 5.7, Kennzahlen für Toil und Bereitschaftsdienst).

### Führung und Governance

Führungskräfte setzen die Anreize, die entscheiden, ob Verfügbarkeitsdaten offen sind. Ein Review, das fragt „warum habt ihr eine Neun verloren?“, lehrt Teams, Ausfälle in den Ausschlüssen zu verstecken. Fragen Sie, was das Team gelernt hat und welche Investition Ausfälle verringern würde, und verlangen Sie nicht mehr Neunen, als Nutzer bemerken würden (siehe Thema 8.4, Kennzahlen für Lieferanten und Verträge, für Zusagen von Lieferanten).

### Kunden und Nutzer

Nutzer beurteilen Verfügbarkeit danach, ob sie tun konnten, weswegen sie kamen. Ein angekündigtes Wartungsfenster tolerieren sie weit besser als eine Überraschung. Geben Sie ihnen eine Statusseite mit ehrlichen Start- und Endzeiten und lesen Sie ihr Feedback neben den Zahlen (siehe Thema 6.2, Experience Level Agreements).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler betreibt einen Shop, einen Checkout-Service und einen Bestellverfolgungsservice. Die Zahlen in diesem Beispiel sind illustrativ.

Das Checkout-Team berichtet 99,95 Prozent zeitbasierte Verfügbarkeit für den Monat, was 21,6 Minuten ungeplante Ausfallzeit erlaubt, und das Dashboard zeigt 99,96 Prozent. Die Leiterin des Kundensupports ist beunruhigt, weil die Support-Kontakte zu fehlgeschlagenen Zahlungen im selben Monat stiegen. Sie bittet das Team, die Messung zu überprüfen.

Das Team findet drei Probleme. Die Sonde prüft alle fünf Minuten eine Seite „Checkout ist erreichbar“, nicht die vollständige Zahlungsreise. Anfragebasierte Daten zeigen, dass an zwei Abenden ein Timeout des Zahlungsanbieters etwa 4 Prozent der Zahlungsversuche je rund 50 Minuten lang fehlschlagen ließ, und die Sonde bemerkte es nie, weil die Seite selbst lud. Und eine Datenbankmigration, die ihr genehmigtes Fenster um 18 Minuten überschritten hatte, war vollständig als geplante Wartung erfasst worden.

Das Team nimmt vier Änderungen vor. Es fügt eine synthetische Sonde für die vollständige Zahlungsreise von zwei Standorten im Minutenintervall hinzu. Es fügt anfragebasierte und nutzergewichtete Zahlen hinzu, anhand von Sitzungen, die den Zahlungsschritt erreichten. Es klassifiziert die Überschreitungsminuten als ungeplant um. Und es nimmt den Anteil geplanter Ausfallzeit und die Messabdeckung in den Bericht auf.

Auf korrigierter Basis zeigt der Monat eine zeitbasierte Verfügbarkeit von 99,93 Prozent, eine anfragebasierte Verfügbarkeit von 99,90 Prozent und eine nutzergewichtete Verfügbarkeit von 99,84 Prozent, weil die Fehlschläge in die Abendspitze fielen. Alle drei verfehlen das Ziel von 99,95 Prozent, was unbequem ist. Das Team und die Leiterin des Supports sind sich einig, dass die frühere Zahl zu großzügig war. Sie schreiben die korrigierte Definition ins Kennzahlenregister und setzen die Fehlerbudget-Richtlinie in Kraft: Im nächsten Monat warten riskante Changes am Checkout, bis sich das Budget erholt, und das Team eröffnet einen Problemdatensatz für die Timeouts des Zahlungsanbieters (siehe Thema 4.1, Kennzahlen für das Problemmanagement).

Das Manipulationsrisiko, das sie auffangen, ist das Umetikettieren. Eine Führungskraft schlug vor, die Überschreitung „verlängerte Wartung“ zu nennen, um das Ziel zu schützen. Der Anteil geplanter Ausfallzeit, mit seiner Regel, dass Überschreitungen ungeplant werden, machte die Umklassifizierung sichtbar, und das Team behielt die ehrliche Zahl.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Definieren Sie Verfügbarkeit aus Sicht des Nutzers und überprüfen Sie die Definition mit Stakeholdern, wenn sich der Service ändert. Zu beachten ist, dass eine hohe Zahl von Neunen für eine Komponente wenig über die Reise sagt, die ein Nutzer nimmt.

### KI

KI-Komponenten können weich ausfallen, indem sie langsam, falsch oder nur für manche Eingaben nicht verfügbar sind, was reine Uptime verpasst. Fügen Sie eine qualitätsbereinigte Sicht hinzu, etwa den Anteil der Anfragen mit einer korrekten, rechtzeitigen Antwort, und koppeln Sie sie mit nutzergemeldeten Problemen. Zu beachten ist, dass das Zählen einer degradierten KI-Antwort als oben die Zahl schönt.

### Automatisierung

Erfassen Sie Anfrageergebnisse aus echtem Verkehr und synthetischen Sonden automatisch und messen Sie die Sonden auf Abdeckung. Zu beachten ist, dass eine Sonde, die eine Health-Seite prüft, „oben“ sagen kann, während Nutzer sich nicht anmelden können.

### Analytik

Berichten Sie zeitbasierte und anfragebasierte Verfügbarkeit mit dem Degradationsanteil und nennen Sie das Messfenster. Die Entscheidung, die dies untermauert, ist, wo Zuverlässigkeitsarbeit Nutzern helfen wird. Zu beachten ist, dass seltene Ausfälle Jahresprozentsätze instabil machen; zeigen Sie also Ereignisse, nicht nur Prozentsätze.

## Branchenperspektive

**Startup.** Ein kleines Team hat oft einen Service und wenig Monitoring. Beginnen Sie mit einer Sonde auf der wichtigsten Reise und einer einabsätzigen Definition von „oben“. Wählen Sie ein bescheidenes Ziel, rechnen Sie es in Minuten um und vermeiden Sie, Neunen zu versprechen, die das Team noch nicht messen kann.

**Kleinunternehmen.** Der Service besteht oft aus gehosteten Werkzeugen plus einigen Eigensystemen, und die Verfügbarkeit hängt von Lieferanten ab. Erfassen Sie Ausfälle von Lieferanten, soweit sie Ihre Nutzer betreffen, vergleichen Sie mit dem, was der Lieferant berichtet, und halten Sie den Satz auf zwei oder drei Zahlen.

**Großunternehmen.** Viele Services, viele Teams und viele Lieferanten vervielfachen die genutzten Definitionen. Veröffentlichen Sie eine Standarddefinition von Verfügbarkeit mit einer kurzen Liste erlaubter Abweichungen, halten Sie das Kennzahlenregister aktuell und stellen Sie sicher, dass die Regeln für geplant und ungeplant über Teams gleich sind, bevor Sie sie vergleichen. Bevorzugen Sie Berichte nach Service gegenüber Ranglisten von Teams, denn Services unterscheiden sich in Last und Kritikalität.

**Behörden und öffentlicher Sektor.** Öffentliche Services haben oft gesetzliche Servicezeiten, veröffentlichte Zusagen und Verträge mit förmlichen Gutschriften. Berichten Sie gegen sie wie geschrieben, zeigen Sie die nutzergewichtete Sicht daneben und seien Sie offen über Ausschlüsse (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die wichtigsten Kosten sind die Zeit, die Servicedefinition und das Register zu schreiben, Monitoring, das kritische Reisen von außerhalb der Fehlerdomäne sondiert, und der Aufwand, Incident-, Change- und Monitoring-Daten zu verbinden, damit geplante und ungeplante Ausfallzeit getrennt werden können. Real User Monitoring bringt Werkzeug- und Speicherkosten. Die meisten Organisationen besitzen schon einen Teil der Daten, die erste Investition gilt also meist den Definitionen.

Der Ertrag kommt aus besseren Entscheidungen und weniger Streit. Teams, die aus Sicht des Nutzers messen, finden Fehlschläge, die Health Checks verpassen, Vereinbarungen sind mit einer Definition leichter zu steuern, und die Kosten einer zusätzlichen Neun lassen sich gegen ihren Wert für Nutzer abwägen. Beschreiben Sie den Nutzen als Muster, etwa weniger Überraschungen bei Reviews der Vereinbarungen, und messen Sie Ihre eigenen Baselines, etwa die Lücke zwischen der Hauptzahl und der nutzergewichteten Zahl. Übernehmen Sie keine Zahlen anderer Organisationen.

## Anti-Muster und Fallstricke

- **Die Neunen ohne die Minuten zitieren.** Ein Ziel, das niemand in erlaubte Ausfallzeit übersetzen kann, kann Entscheidungen nicht leiten. Zeigen Sie erlaubte und verbrauchte Minuten neben jedem Ziel.
- **Den Server statt der Reise messen.** Ein grüner Health Check kann neben einer kaputten Anmeldung stehen. Sondieren Sie kritische Reisen von Ende zu Ende und vergleichen Sie mit Daten echter Nutzer.
- **Das Etikett „geplant“ Fehlschläge absorbieren lassen.** Eine leicht zu beanspruchende Kategorie „geplant“ leert die Zahl der ungeplanten. Verlangen Sie Genehmigung vor dem Ausfall, kommunizieren Sie ihn und klassifizieren Sie Überschreitungen um.
- **Über Services und Stunden mitteln.** Eine gemischte Zahl verbirgt den kritischen Service und die Hauptverkehrsstunde. Berichten Sie je Service und fügen Sie eine nutzergewichtete Sicht hinzu.
- **Mehr Neunen versprechen, als die Abhängigkeiten erlauben.** In Reihe geschaltete Komponenten können ihre gemeinsame Verfügbarkeit nicht übersteigen. Multiplizieren Sie, bevor Sie etwas versprechen, und fragen Sie Lieferanten nach ihren gemessenen Zahlen.
- **100 Prozent als Ziel behandeln.** Die Kosten steigen steil, und Change verlangsamt sich. Wählen Sie das Ziel nach Nutzerbedarf und nutzen Sie das Fehlerbudget.
- **Teams oder Menschen nach ihren Neunen ordnen.** Services unterscheiden sich in Last und Kritikalität, und eine Rangliste lehrt Teams, Ausfälle zu verbergen. Zeigen Sie jedem Service seinen eigenen Trend und vergleichen Sie ihn mit seinem eigenen Ziel.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definition und Uhren | „Oben“ heißt, was das Monitoring-Werkzeug zeigt; Ausfallzeiten werden hinterher geschätzt | Für einige Services geschrieben; Sonden- und Incident-Zeiten widersprechen sich | Eine schriftliche Definition je Service mit Reisen, Zeiten, Ausschlüssen und Uhrregeln | Definitionen im Rhythmus überprüft; Änderungen protokolliert und in Diagrammen markiert | Definitionen mit Lieferanten und Kunden abgestimmt und überarbeitet, wenn sie Entscheidungen nicht mehr informieren |
| Messqualität | Manuelle Berichte oder ein einzelner Health Check | Sonden für einige Services; Anfragedaten in einigen Logs | Sonden von außen nach innen auf kritischen Reisen plus anfragebasierte Zahlen aus einer Standardquelle | Nutzergewichtete Zahlen aus Daten echter Nutzer; Abdeckung verfolgt und stichprobenartig geprüft | Messungen über Teams und Lieferanten geteilt und automatisch abgeglichen |
| Umgang mit geplant und ungeplant | Keine Unterscheidung; Wartung ad hoc gezählt | Etikett „geplant“ von einigen Teams genutzt, Regeln unterscheiden sich | Eine Regel: vor dem Ausfall genehmigt und kommuniziert, Überschreitungen umklassifiziert | Geplanter Anteil im Trend, mit dem Ziel, ihn zu senken | Change ohne Ausfallzeit ist der Standard, und geplante Ausfallzeit ist selten und ausgehandelt |
| Nutzung in Entscheidungen | Nach einer Beschwerde berichtet | Monatlich vom Betrieb überprüft | Ziele in Minuten gezeigt | Fehlerbudget-Richtlinie ändert die Arbeit, mit Finanzierung | Verfügbarkeit, Kosten und Erlebnis gemeinsam abgewogen |

## Checkliste

- [ ] Jeder Service hat eine schriftliche Definition von „verfügbar“, die seine kritischen Nutzerreisen nennt.
- [ ] Messfenster, Stunden im Umfang und Zeitzone sind für jede Zahl genannt.
- [ ] Die Ausschlussliste ist aufgeschrieben, überprüft und neben der Hauptzahl gezeigt.
- [ ] Geplante Ausfallzeit verlangt einen genehmigten Change und Vorankündigung; Überschreitungen zählen als ungeplant.
- [ ] Sonden laufen von außerhalb der Fehlerdomäne, in einem genannten Intervall, auf kritischen Reisen.
- [ ] Eine anfragebasierte oder nutzergewichtete Zahl steht neben der zeitbasierten Zahl.
- [ ] Jedes Ziel wird als erlaubte und verbrauchte Minuten im aktuellen Fenster gezeigt.
- [ ] Ausfallzahl und Perzentile der Dauer werden berichtet, nicht nur die Summe.
- [ ] Die Verfügbarkeit der Abhängigkeiten wird durchmultipliziert, bevor ein Ziel versprochen wird.
- [ ] Änderungen der Definition werden protokolliert und im Trenddiagramm markiert.
- [ ] Verfügbarkeit wird je Service berichtet und nie je Person.

## KI-Prompts

**Eine Definition der Service-Verfügbarkeit entwerfen.**

```text
I am writing an availability definition for [service name], a [type of service]
used by [user groups]. Its critical user journeys are [list journeys]. Agreed
service hours are [hours and time zone]. Known dependencies are [list]. Our
monitoring consists of [probes, logs, real user data].

Draft a one-page definition covering: what counts as up for each journey, the
measurement window, the in-scope hours, the exclusions, the rule for planned
versus unplanned downtime, the clock start and stop for an outage, and the
metrics to report. Do not invent targets or benchmark values. List your
assumptions and the questions I should answer to finish the definition.
```

**Ein Ziel in erlaubte Ausfallzeit umrechnen und testen.**

```text
Our target for [service name] is [availability percentage] over [window, for
example a 30-day month]. In-scope time is [hours]. Our essential dependencies
and their stated or measured availability are [list, or "unknown"].

Calculate the downtime this target allows in minutes for the window and for a
year, using the in-scope hours. Then estimate the best combined availability if
the dependencies are needed in series and fail independently, and explain the
formula you used. Flag where my inputs are too uncertain to conclude anything.
Do not supply availability figures for any dependency that I did not give you.
List your assumptions.
```

**Einen Monat Ausfälle auf Klassifizierungsprobleme prüfen.**

```text
Here are the outage records for [service name] for [month]: [paste records with
impact start, restore time, planned or unplanned label, approval time, and
notes, with personal data removed].

For each outage, check whether the planned or unplanned label follows this
rule: [paste your rule]. Identify records where the impact start looks late,
where one outage appears to be split or merged, and where an overrun should have
been reclassified. Summarize patterns by service and cause, never by person.
Tell me what you could not judge from the data. List your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die verwandten Themen und die gekoppelte Leitplanke für eine Verfügbarkeitskennzahl zu finden, die Sie berichten wollen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine Überarbeitung dieses Themas jede Kennzahl mit einem Manipulationsvektor und einer Leitplanke gekoppelt hält.

## Wichtigste Erkenntnisse

- Verfügbarkeit ist erst aussagekräftig, wenn „oben“, die Servicegrenze, die Stunden und die Ausschlüsse aus Sicht des Nutzers aufgeschrieben sind.
- Anfragebasierte und nutzergewichtete Messgrößen beschreiben verteilte Services und ungleiche Last besser als Minuten totalen Fehlschlags.
- Berichten Sie geplante und ungeplante Ausfallzeit zusammen und machen Sie das Etikett „geplant“ schwer zu verdienen.
- Rechnen Sie jedes Ziel in Minuten um und multiplizieren Sie Abhängigkeiten in Reihe, bevor Sie eine Zahl von Neunen versprechen.
- Jede zusätzliche Neun kostet mehr als die vorige, wählen Sie das Ziel also nach dem, was Nutzer brauchen, und handeln Sie mit dem Fehlerbudget danach.
- Beschreiben Sie Services und Rotationen, nie Menschen, und testen Sie jede Hauptzahl am Erlebnis der Nutzer.

## Quellen und weiterführende Literatur

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Embracing Risk", https://sre.google/sre-book/embracing-risk/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Service Level Objectives", https://sre.google/sre-book/service-level-objectives/.
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, chapter "Implementing SLOs", https://sre.google/workbook/implementing-slos/.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [High availability](https://en.wikipedia.org/wiki/High_availability).
7. Wikipedia, [Downtime](https://en.wikipedia.org/wiki/Downtime).
8. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
9. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
10. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
11. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
12. Wikipedia, [Synthetic monitoring](https://en.wikipedia.org/wiki/Synthetic_monitoring).
13. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
14. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
