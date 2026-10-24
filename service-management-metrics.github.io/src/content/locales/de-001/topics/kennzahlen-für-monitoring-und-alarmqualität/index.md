# Kennzahlen für Monitoring und Alarmqualität

**Ein Alarm ist eine Bitte um die Aufmerksamkeit eines Menschen. Messen Sie Monitoring also danach, wie oft diese Bitte berechtigt war, wie viel des echten Ärgers sie erfasste und wie viel Schlaf und Vertrauen sie kostete.**

## Überblick und Motivation

Monitoring ist das Erfassen, Verarbeiten und Anzeigen von Echtzeitdaten über ein System. [Systemüberwachung](https://en.wikipedia.org/wiki/System_monitoring) beantwortet die Frage „funktioniert der Service so, wie Nutzer ihn brauchen?“ Ein Alarm ist der Punkt, an dem diese Daten einen Menschen bitten, etwas zu tun. Die meisten Teams messen die erste Tätigkeit schlecht oder gar nicht und die zweite nur über Beschwerden. Dieses Thema gibt Ihnen einen kleinen Satz Kennzahlen für beide: ob das Monitoring die Fehlschläge sieht, auf die es ankommt, und ob die Alarme, die es auslöst, die Aufmerksamkeit verdienen, die sie fordern.

Zuerst einige Begriffe. Im Vokabular von ITIL 4 ist ein Ereignis (Event) eine Zustandsänderung, die für das Management eines Services Bedeutung hat, und das Ereignismanagement ist die Praktik, Ereignisse zu erkennen, zu entscheiden, welche zählen, und die Reaktion zu wählen. Ein Alarm ist eine Benachrichtigung an einen Menschen, zugestellt als Page, Nachricht oder Ticket. Eine Page ist ein Alarm, der jemanden sofort unterbricht. Ein Fehlalarm (False Positive) ist ein Alarm, der auslöste, als nichts Aufmerksamkeit brauchte, und ein falscher Negativbefund (False Negative) ist ein Fehlschlag, den kein Alarm meldete; beide Begriffe stammen aus der Sprache der [falsch positiven und falsch negativen Befunde](https://en.wikipedia.org/wiki/False_positives_and_false_negatives). Ein handlungsrelevanter Alarm ist einer, bei dem ein Mensch eine nützliche Handlung hatte und sie ausführte oder aus einem erfassten Grund bewusst darauf verzichtete.

Die zwei Seiten des Monitorings ziehen gegeneinander. Nach jedem Incident Alarme hinzuzufügen baut eine Wand aus Rauschen; sie zu kürzen, um Ruhe zu schaffen, riskiert Stille bei dem Fehlschlag, auf den es ankommt. Die Sprache von [Precision und Recall](https://en.wikipedia.org/wiki/Precision_and_recall) passt gut. Precision fragt, welcher Anteil der ausgelösten Alarme es wert war, ausgelöst zu werden. Recall fragt, welchen Anteil der echten Probleme die Alarme erfassten. Alarmqualität ist die Balance der beiden, und eine Kennzahl, die nur eines beobachtet, lädt das Team ein, das andere zu opfern. Das [Signal-Rausch-Verhältnis](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) erfasst dieselbe Spannung.

Die menschlichen Kosten sind der Grund, warum dies in ein Buch über Service-Kennzahlen gehört. [Alarmmüdigkeit](https://en.wikipedia.org/wiki/Alarm_fatigue) ist die gut dokumentierte Neigung von Menschen, die vielen, meist unwichtigen Alarmen ausgesetzt sind, abzustumpfen und auf die wichtigen langsam zu reagieren. Sie wurde zuerst in klinischen Umfeldern untersucht und gilt für jede [Bereitschafts](https://en.wikipedia.org/wiki/On-call)-Rotation, die zu oft von Alarmen gerufen wird, die nirgendwohin führen. Ermüdete Löser verpassen echte Incidents und verlassen schließlich die Rotation.

Die Sichten unterscheiden sich in den beiden Traditionen, die dieses Buch verbindet. ITIL 4 verortet diese Arbeit in der Praktik Monitoring und Ereignismanagement, mit Verbindungen zu Incident-Management und Service-Level-Management. Ihr Anliegen ist, dass Ereignisse erkannt, klassifiziert und weitergeleitet werden, sodass Incidents früh gefunden und konsistent bearbeitet werden. Das [Site Reliability Engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) kommt vom anderen Ende: Googles Buch *Site Reliability Engineering* argumentiert, Pages sollten dringend, wichtig, handlungsrelevant und echt sein, und alles andere gehöre in ein Ticket oder ein Dashboard. Agile Teams begegnen dem als Arbeitsvereinbarung: Wer wird wofür geweckt, und wer behebt einen falschen Alarm. Die folgenden Kennzahlen borgen von allen dreien und halten eine Regel: Eine Kennzahl beschreibt eine Rotation, einen Service oder eine Alarmregel, nie eine Einzelperson.

Dieses Thema wiederholt seine Nachbarn nicht. Das Timing von Incidents gehört zu Thema 3.3, Reaktions- und Lösungszeit bei Incidents, Major Incidents zu Thema 3.4, Kennzahlen für Major Incidents, Objectives und Fehlerbudgets zu Thema 5.2, SLIs, SLOs und Fehlerbudgets, und menschliche Last zu Thema 5.7, Kennzahlen für Toil und Bereitschaftsdienst. Hier ist der Gegenstand die Qualität des Signals, das all das auslöst. Instrumentierung wird in Thema 1.5, Datenquellen und Instrumentierung, behandelt.

## Leitprinzipien

- **Auf Symptome alarmieren, die Nutzer spüren; den Rest in Ticket oder Dashboard leiten.** Ein Alarm auf das, was Nutzer erleben (Fehler, Langsamkeit, Nichtverfügbarkeit), bleibt nützlich, wenn sich das System ändert. Ein Alarm auf eine Ursache (volle Platte, ausgelastete CPU) ist nur nützlich, wenn er ein Symptom vorhersagt und ein Mensch handeln kann, bevor es eintrifft.
- **Jeder Alarm muss zu einer Handlung führen.** Ist die richtige Reaktion auf einen Alarm, nichts zu tun, sollte der Alarm geändert, zu einem Ticket herabgestuft oder gelöscht werden. Messen Sie den Anteil, der zu Handlung führt, und behandeln Sie den Rest als Defekte im Monitoring.
- **Precision und Recall messen.** Nur Rauschen zu zählen belohnt Stille, und nur Abdeckung zu zählen belohnt Volumen. Beide zusammen beschreiben Qualität, und jedes wirkt als Leitplanke für das andere.
- **Jede Alarmregel als Produkt mit Eigner behandeln.** Eine Regel hat einen Zweck, eine Schwelle, ein Runbook und ein Review-Datum. Eigenlose Regeln sammeln sich an, und das Rauschen, das sie erzeugen, gehört niemandem.
- **Rotationen und Services berichten, nie Menschen.** Alarmlast ist eine Eigenschaft davon, wie System und Rotation entworfen sind. Einzelpersonen zu nennen macht aus einem Entwurfsproblem ein Schuldproblem und verbirgt die echte Korrektur.

## Kennzahlendefinitionen

Die folgenden Kennzahlen sind als Satz gewählt. Volumen allein ist bedeutungslos, Handlungsrelevanz sagt, ob Volumen ein Problem ist, und Abdeckung und Erkennungszeit sagen, was die Stille verbirgt. Alle werden je Service oder je Rotation berechnet, und alle nutzen den Alarmdatensatz aus den Monitoring- und Paging-Werkzeugen, verbunden mit den Incident- und Ticket-Datensätzen.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Alarmvolumen | Zahl der Alarme, die einen Menschen benachrichtigten, aufgeteilt in Pages und Tickets | Anzahl verschiedener Benachrichtigungen, die im Zeitraum an eine Rotation oder Warteschlange zugestellt wurden; Wiederholungen desselben offenen Alarms werden zu einem gruppiert; Alarme, die vollständig von Automatisierung ohne Benachrichtigung eines Menschen bearbeitet werden, sind ausgeschlossen; je Rotation und Woche berichten, und den Anteil außerhalb der Arbeitszeit gesondert | Alarme pro Rotationswoche | Paging- und Alarm-Routing-Werkzeug | Monitoring und Ereignismanagement | Arbeitsvereinbarung des Teams zur Bereitschaft | Wöchentlich |
| Anteil handlungsrelevanter Alarme | Anteil der Alarme, nach denen ein Mensch eine nützliche Handlung vornahm | Alarme mit erfasster Handlung (Korrektur, Milderung, Eskalation oder eine Änderung an der Alarmregel) / im Zeitraum überprüfte Alarme; vor jeder Bestätigung automatisch aufgelöste Alarme zählen als nicht handlungsrelevant; ungeprüfte Alarme werden als gesonderte Anzahl berichtet, nicht fallen gelassen | Prozent | Alarmdatensatz, verbunden mit dem Review-Label, Ticket oder Incident | Monitoring und Ereignismanagement; Incident-Management | Verbesserungsmaßnahme des Teams zum Betrieb | Wöchentliches Review, monatlicher Trend |
| Fehlalarmrate | Anteil der Alarme, die auslösten, als kein Problem existierte | Im Review als Fehlalarm gekennzeichnete Alarme / im Zeitraum überprüfte Alarme; „Fehlalarm“ bedeutet, dass der Zustand kein Fehler war und niemand davon erfahren wollen würde; ein echtes Problem, das zu klein ist, um zu handeln, ist kein Fehlalarm | Prozent | Alarm-Review-Labels | Monitoring und Ereignismanagement | Rausch-Review in der Retrospektive | Monatlich |
| Erkennungsabdeckung | Anteil der Services im Umfang, die mindestens einen getesteten Alarm auf ein nutzerseitiges Symptom haben | Services mit einem Symptomalarm, der in den letzten 12 Monaten durch einen Test oder ein echtes Ereignis ausgeübt wurde / Services im Umfang des Servicekatalogs; die Liste der Services im Umfang wird zu Beginn des Zeitraums festgelegt | Prozent | Servicekatalog, Inventar der Alarmregeln, Testaufzeichnungen | Service-Konfigurationsmanagement; Monitoring und Ereignismanagement | Definition of Done für einen neuen Service | Vierteljährlich |
| Anteil durch Monitoring erkannter Incidents | Anteil der Incidents, die das Monitoring erkannte, bevor ein Nutzer oder Kollege sie meldete | Incidents, deren erstes Signal ein Alarm war / Incidents im Zeitraum; die Uhr ist die Eröffnungszeit des Incidents, und Incidents ohne erfasstes erstes Signal werden als unbekannt berichtet, nicht als erkannt | Prozent | Incident-Datensatz mit Feld für das erste Signal, Alarmzeitleiste | Incident-Management | Incident-Review (Lernen nach Incidents) | Monatlich |
| Zeit bis zur Erkennung (TTD) | Verstrichene Zeit zwischen dem Beginn der Nutzerauswirkung und dem ersten Alarm, der einen Menschen benachrichtigte | Zeit des ersten Menschen benachrichtigenden Alarms minus Auswirkungsbeginn, wobei der Auswirkungsbeginn der früheste Zeitpunkt ist, zu dem der Service Level Indicator verletzt wurde, wie im Incident-Review festgestellt; Median und 95. Perzentil berichten; Incidents ohne Alarm sind ausgeschlossen und gesondert gezählt | Minuten | Incident-Review, Alarmzeitleiste, Historie des Service Level Indicators | Incident-Management; Monitoring und Ereignismanagement | Post-Incident-Review | Monatlich, je Incident |
| Alarmkonzentration | Anteil des Alarmvolumens, den die lautesten wenigen Alarmregeln erzeugen | Alarme der fünf Regeln mit den meisten Alarmen / alle Alarme im Zeitraum; derselbe Alarm einmal gruppiert; die Regelzahl fünf ist eine Konvention, die ein Team mit genanntem Grund ändern darf | Prozent | Inventar der Alarmregeln und Paging-Aufzeichnung | Kontinuierliche Verbesserung; Monitoring und Ereignismanagement | Verbesserungs-Backlog der Retrospektive | Monatlich |
| Aktualität der Alarmregeln | Anteil der Paging-Regeln, die einen Eigner, einen Runbook-Link und ein Review innerhalb des vereinbarten Intervalls haben | Paging-Regeln, die alle drei Bedingungen erfüllen / alle Paging-Regeln; im Zeitraum deaktivierte Regeln sind ausgeschlossen | Prozent | Inventar der Alarmregeln | Wissensmanagement; Monitoring und Ereignismanagement | Arbeitsvereinbarung zur betrieblichen Bereitschaft | Vierteljährlich |

Das Alarmvolumen braucht Kontext, lesen Sie es also neben dem Anteil handlungsrelevanter Alarme. Die Zeit bis zur Erkennung nutzt den Beginn der Nutzerauswirkung, nicht das Ticket, weil die Ticketuhr nach der Erkennung startet; der Auswirkungsbeginn ist eine Schätzung aus dem Incident-Review und sollte als solche gekennzeichnet werden. Fehlalarmrate und Anteil handlungsrelevanter Alarme sind keine Komplemente, denn ein Alarm kann wahr sein und trotzdem nicht die Zeit eines Menschen wert.

## Empfehlungen

### Entscheiden, was eine Page verdient

**1. Schreiben Sie eine Paging-Richtlinie und halten Sie sie kurz.** Halten Sie in einem Absatz fest, was eine Page verdient (ein Symptom, das Nutzer jetzt oder bald spüren und auf das ein Mensch reagieren kann) und was nicht. Alles andere geht in eine Ticket-Warteschlange oder ein Dashboard. Das Kapitel des Google-SRE-Buchs zum Monitoring verteilter Systeme ist ein guter Ausgangspunkt (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets).

**2. Alarmieren Sie auf Symptome und heben Sie Ursachen für die Diagnose auf.** Eine Page für „Fehlerrate über der vereinbarten Schwelle“ ist eine Page über Nutzer. Eine Page für „CPU ist hoch“ ist eine Page über eine Vermutung. Halten Sie Signale auf Ursachenebene auf Dashboards, wo der Löser nachsieht, sobald der Symptomalarm ausgelöst hat, und befördern Sie eines nur dann zu einer Page, wenn es verlässlich ein Symptom mit genug Vorwarnung zum Handeln vorhersagt.

**3. Binden Sie Paging-Schwellen an das Service Level Objective.** Wo ein Service ein [Service Level Objective (SLO)](https://en.wikipedia.org/wiki/Service-level_objective) hat, alarmieren Sie auf die Rate, mit der das Fehlerbudget verbraucht wird, statt auf rohe Schwellen. Das Kapitel des SRE Workbook zum Alarmieren auf SLOs beschreibt Burn-Rate-Alarme und die Abwägungen zwischen Precision, Recall, Erkennungszeit und Rücksetzzeit. Dieser Ansatz ruft auf das, was das Objective bedroht, und bleibt still bei kurzen Flackerern, die es nicht tun.

### Jeden Alarm im Rhythmus überprüfen

**4. Kennzeichnen Sie jeden Alarm in einem kurzen, regelmäßigen Review.** Reservieren Sie jede Woche fünfzehn Minuten je Rotation, um anzusehen, was ausgelöst hat. Erfassen Sie für jeden Alarm ein Label: handlungsrelevant, Fehlalarm, echt, aber keine Page wert, oder Duplikat. Die Labels sind die Daten für den Anteil handlungsrelevanter Alarme und die Fehlalarmrate, und das Review ist der Ort, an dem laute Regeln am nächsten Tag statt im nächsten Quartal behoben werden.

**5. Lassen Sie das Review eine Änderung hervorbringen.** Wählen Sie jede Woche mindestens eine Regel zum Abstimmen, Herabstufen, Zusammenführen oder Löschen und erfassen Sie die Änderung im Backlog des Teams als gewöhnliche Arbeit.

**6. Löschen Sie ohne Furcht.** Teams behalten Alarme, weil das Löschen riskant wirkt und niemand mehr weiß, warum er existiert. Verlangen Sie, dass jede Paging-Regel einen Zweck und einen Eigner trägt, und vereinbaren Sie, dass eine Regel, die in einem genannten Zeitraum nie zu Handlung geführt hat, entfernt oder herabgestuft wird, mit erfasster Änderung, damit sie rückgängig gemacht werden kann. Die Kennzahl der Regelaktualität macht die Disziplin sichtbar.

### Messen, was das Monitoring verpasst

**7. Verfolgen Sie den Anteil der Incidents, die Nutzer zuerst fanden.** Halten Sie nach jedem Incident fest, wie er zuerst bemerkt wurde: durch einen Alarm, einen Kollegen, einen Kunden, ein Support-Ticket oder eine Routineprüfung. Der Anteil, den das Monitoring fand, ist das praktisch nächste Maß für Recall. Er ist nicht vollständig, denn Incidents, die niemand bemerkte, gelangen nie in die Stichprobe, koppeln Sie ihn also mit periodischen Tests der Alarme selbst.

**8. Schätzen Sie die Zeit bis zur Erkennung ehrlich.** Stellen Sie den Beginn der Nutzerauswirkung im Post-Incident-Review aus der Historie des Service Level Indicators fest, nicht danach, wann jemand das Ticket tippte. Berichten Sie Median und ein hohes Perzentil und zeigen Sie die Incidents ganz ohne Alarm als gesonderte Anzahl. Ein einzelner Durchschnitt verbirgt den typischen Fall und den schlechten Schwanz (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen, und Thema 3.3, Reaktions- und Lösungszeit bei Incidents).

**9. Testen Sie die Alarme, von denen Sie abhängen.** Die Erkennungsabdeckung ist nur glaubwürdig, wenn man den Alarm hat funktionieren sehen. Nehmen Sie in Game Days oder Release-Proben eine Prüfung auf, die absichtlich ein Symptom herbeiführt und bestätigt, dass der richtige Alarm auslöst, die richtige Rotation erreicht und auf ein brauchbares Runbook verweist. Ein nie ausgeübter Alarm ist eine Hoffnung, keine Kontrolle (siehe Thema 5.6, Kennzahlen für die Servicekontinuität).

### Den Signalweg gesund halten

**10. Überwachen Sie das Monitoring.** Ein stiller Ausfall des Monitoring-Systems sieht genau aus wie ein gesunder Service. Fügen Sie eine Heartbeat-Prüfung hinzu, die ruft, wenn die Alarm-Pipeline nicht mehr zustellt, und erfassen Sie, wie oft die Pipeline selbst ausfällt.

**11. Gruppieren, entdoppeln und verknüpfen Sie, bevor Sie zählen.** Gruppieren Sie verwandte Alarme zu einem, unterdrücken Sie Wiederholungen eines bereits offenen Alarms und leiten Sie jeden an die zuständige Rotation. Verknüpfen Sie jeden Alarm mit seinem Runbook und mit dem Incident oder Ticket, das er erzeugte, denn diese Verbindung lässt Sie den Anteil handlungsrelevanter Alarme und den Anteil durch Monitoring erkannter Incidents ohne Handzählung berechnen (siehe Thema 1.5, Datenquellen und Instrumentierung).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Alarmvolumen | Schwellen anheben, lange Verzögerungen hinzufügen oder Alarme von Pages in eine stille Warteschlange verschieben, damit die Zahl fällt, während Probleme unbemerkt bleiben; Alarme teilen oder zusammenführen, um die Zahl zu ändern | Anteil durch Monitoring erkannter Incidents und Zeit bis zur Erkennung; eine Regel, dass jede Herabstufung mit Grund erfasst und nach einem Quartal überprüft wird |
| Anteil handlungsrelevanter Alarme | Alarme nachträglich als handlungsrelevant kennzeichnen oder eine triviale Handlung (einen Kommentar, eine Bestätigung) vornehmen, um sich zu qualifizieren; laute Alarme ungeprüft lassen, damit sie nie in den Nenner gelangen | Die Zahl ungeprüfter Alarme neben der Rate gezeigt; Stichprobenprüfung durch jemanden außerhalb der Rotation; eine aufgeschriebene Definition von „nützliche Handlung“ |
| Fehlalarmrate | Fehlalarme eng definieren, sodass „echt, aber sinnlos“ als wahr zählt; laute Alarme ohne Label schließen | Anteil handlungsrelevanter Alarme und das Label „echt, aber keine Page wert“ gesondert verfolgt; periodische Stichproben geschlossener Alarme |
| Erkennungsabdeckung | Jedem Service einen trivialen Alarm (einen Ping) hinzufügen, um Abdeckung zu behaupten; Alarme zählen, die nie getestet wurden | Die Anforderung, dass der Alarm ein nutzerseitiges Symptom beobachtet und in den letzten 12 Monaten ausgeübt wurde; Anteil durch Monitoring erkannter Incidents |
| Anteil durch Monitoring erkannter Incidents | Jeden Incident als „vom Monitoring erkannt“ erfassen, auch wenn ein Nutzer zuerst meldete; nachträglich einen Alarm anlegen und ihn dann zitieren; das Feld für das erste Signal leer lassen, um eine schlechte Zahl zu vermeiden | Die Zahl der Unbekannten neben dem Anteil gezeigt; Belege für das erste Signal aus der Alarmzeitleiste, nicht aus dem Gedächtnis; kundengemeldete Incidents aus dem Support-Datensatz verknüpft |
| Zeit bis zur Erkennung (TTD) | Den Auswirkungsbeginn später ansetzen, als er war; Incidents ohne Alarm ausschließen; den Mittelwert berichten, um den Schwanz zu verbergen | Auswirkungsbeginn aus der Historie des Service Level Indicators; die Incidents ohne Alarm gezählt und gezeigt; Median und 95. Perzentil zusammen berichtet |
| Alarmkonzentration | Eine laute Regel in mehrere teilen, damit keine in den obersten fünf ist; Regeln umbenennen | Konzentration auch nach zugrunde liegendem Fehler oder Service berichten, nicht nur nach Regel; Gesamtvolumen und Anteil handlungsrelevanter Alarme daneben verfolgen |
| Aktualität der Alarmregeln | Platzhalter-Eigner, leere Runbook-Links oder ein Durchwink-Review hinzufügen, um die Bedingung zu erfüllen | Stichprobe, ob der Runbook-Link auflöst und in einer echten Reaktion genutzt wurde; die Praxis, das Runbook in Game Days zu testen |

Ein gesunder Befund zeigt mehrere Dinge zusammen. Das Alarmvolumen je Rotation ist stabil oder fallend und innerhalb eines Niveaus, das das Team als tragfähig wählte. Der Anteil handlungsrelevanter Alarme steigt über mehrere Monate, während die lautesten Regeln abgestimmt werden. Der Anteil durch Monitoring erkannter Incidents ist hoch, und die Zeit bis zur Erkennung ist kurz und wird nicht länger, wenn das Volumen fällt, was beweist, dass die Ruhe verdient und nicht erkauft wurde. Die Erkennungsabdeckung wächst, weil Services getestet werden, nicht weil triviale Alarme hinzugefügt wurden. Fällt das Volumen, während Erkennungsanteil oder Zeit bis zur Erkennung schlechter werden, hat das Team Recall gegen Frieden getauscht, und die Leitplanken sind es, die das zeigen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Wenige, symptombasierte Pages | Ruhige Nächte, hohes Vertrauen in jede Page, leicht aktuell zu halten | Risiko später Erkennung bei langsam wachsenden Problemen; braucht gute Ticket- und Dashboard-Gewohnheiten für den Rest |
| Viele empfindliche Alarme | Frühwarnung bei Ärger auf Ursachenebene; weniger verpasste Incidents | Alarmmüdigkeit, langsamere Bestätigung und Abwanderung aus Bereitschafts-Rotationen |
| SLO-Burn-Rate-Alarme | Pages an das gebunden, was das Objective bedroht; weniger Flackerer | Braucht gute Indikatoren und ein vereinbartes Objective; braucht Abstimmung, um Erkennungszeit und Precision auszugleichen |
| Wöchentliches Alarm-Review | Schnelles Feedback; laute Regeln schnell behoben | Kostet jede Woche Zeit; wird zum Theater, wenn keine Änderung folgt |
| Kennzeichnung durch Menschen | Erfasst Urteil, das kein Werkzeug hat | Subjektiv; Labels driften zwischen Reviewern und Rotationen, wenn die Definitionen nicht aufgeschrieben sind |
| Automatische Unterdrückung und Gruppierung | Senkt Rauschen im großen Maßstab; verringert wiederholte Pages | Kann echte Signale verbergen, wenn Regeln falsch sind; braucht eigenes Monitoring und Review |

Jede Wahl tauscht Precision gegen Recall, und der Tausch sollte bewusst und je Service aufgeschrieben erfolgen, denn er ist der Kontext, der es jedem erlaubt, die Zahlen fair zu lesen. Ein Service mit schweren Folgen eines verpassten Fehlschlags darf eine niedrigere Handlungsrate für frühere Warnung akzeptieren, mit einer Triage-Schicht, die die zusätzlichen Alarme nachts in eine Ticket-Warteschlange leitet.

## Fragen für die Diskussion im Team

**1. Wofür wollten wir geweckt werden, und welche der Pages des letzten Monats erfüllten diesen Maßstab?** Schreiben Sie die Paging-Richtlinie in einem Satz oder zwei, nehmen Sie dann die Pages des letzten Monats und prüfen Sie jede gegen sie. Die Übung ist wertvoller als der Prozentsatz, den sie ergibt, denn die Meinungsverschiedenheiten zeigen, wo sich die Erwartungen des Teams unterscheiden. Halten Sie die unnötigen als Kandidaten zum Herabstufen fest.

**2. Wenn die lauteste Alarmregel morgen verschwände, was verlören wir?** Stellen Sie die Frage für jede der fünf Regeln mit dem größten Volumen. Oft kann niemand einen bestimmten Fehlschlag nennen, den die Regel je erfasste, und das ist ein Zeichen, dass sie abgestimmt oder entfernt werden kann. Wo jemand es kann, fragen Sie, ob der Fehlschlag auch einen Symptomalarm auslösen würde.

**3. Wie finden wir heraus, was das Monitoring verpasst hat?** Schauen Sie auf die letzten Incidents und fragen Sie, wer zuerst bemerkte und wie lange die Auswirkung davor lief. Die Antwort gibt Ihnen ohne neue Werkzeuge den Anteil durch Monitoring erkannter Incidents und eine grobe Zeit bis zur Erkennung. Besprechen Sie, welches Signal jeden früher erfasst hätte.

**4. Ist unsere Bereitschaftslast tragfähig, und woher würden wir es wissen?** Einigen Sie sich, was tragfähig für eine Rotation heißt, etwa eine Grenze für Pages außerhalb der Arbeitszeit pro Woche, und überprüfen Sie den Trend je Rotation, nicht je Person. Liegt die Last über dem vereinbarten Niveau, behandeln Sie es als Servicedefekt und planen Sie Arbeit, sie zu senken. Halten Sie die Kennzahlen konsistent mit Thema 5.7, Kennzahlen für Toil und Bereitschaftsdienst.

**5. Welche unserer Alarme haben wir nie getestet, und wie könnten wir sie sicher testen?** Listen Sie die Services auf, die von einem einzelnen Symptomalarm abhängen, und fragen Sie, ob jemand ihn je im Ernstfall oder in einer Probe auslösen sah. Planen Sie einen Test und prüfen Sie den ganzen Weg: Erkennung, Routing, Benachrichtigung, Runbook. Überlegen Sie, ob eine ausfallende Alarm-Pipeline überhaupt sichtbar wäre.

**6. Wie könnten diese Zahlen hier manipuliert werden, und was würden wir bemerken?** Bitten Sie das Team, ehrlich zu beschreiben, wie es jede Zahl besser aussehen lassen könnte, ohne etwas zu verbessern. Einigen Sie sich dann, welche Leitplanke es zeigen würde und wer sie ansieht. Die Tricks im Voraus zu benennen macht sie weniger verlockend (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Vier Perspektiven

### Produkt- und Lieferteams

Teams, die einen Service bauen und betreiben, entscheiden, was er über sich selbst berichtet, Alarmqualität beginnt also in der Definition of Done. Eine neue Funktion, die mit ihrem eigenen getesteten Indikator und Alarm ausgeliefert wird, vermeidet Monitoring, das nach dem ersten Incident angeschraubt wird. Behandeln Sie Alarm-Abstimmung als gewöhnliche Backlog-Arbeit.

### Service- und Betriebsteams

Betriebsteams tragen den Pager und spüren die Kosten zuerst, sie besitzen also den Review-Rhythmus, die Kennzeichnung und den Heartbeat der Pipeline. Ist ein Alarm falsch, gehört die Korrektur dem Eigner der Regel, nicht dem, der die Page erhielt.

### Führung und Governance

Führungskräfte können Erkennungs- und Handlungsrelevanzzahlen je Service verlangen, Zeit für das Abstimmen finanzieren und einem Ziel für das Alarmvolumen widerstehen, das Stille belohnt. Ein fallendes Volumen ist nur dann eine gute Nachricht, wenn Erkennungsanteil und Zeit bis zur Erkennung stabil bleiben. Tragfähige Bereitschaftsgrenzen sind eine Entscheidung über Personal und Entwurf, keine motivationale.

### Kunden und Nutzer

Kunden sehen nie einen Alarm; sie sehen, ob der Service ausfiel und wie lange die Behebung dauerte. Gutes Monitoring zeigt sich als Incidents, die behoben werden, bevor sie es bemerken, und weniger Fälle, in denen ein Kunde zuerst meldet. Wo die Organisation Erlebnismessgrößen nutzt (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA), ist der Anteil der Incidents, die Nutzer zuerst meldeten, ein direkter Indikator der Erlebnislücke.

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler betreibt eine Bestellplattform mit vier Produktteams und einem Plattformteam, das die Bereitschafts-Rotation trägt. Alle Zahlen in diesem Beispiel sind illustrativ. Über vier Wochen (illustrativ) erhielt die Rotation 240 Pages, 70 davon zwischen 22:00 und 07:00 Uhr. Das Team überprüft jede Page mit vier Labels: handlungsrelevant, Fehlalarm, echt, aber keine Page wert und Duplikat.

Das Review zeigt einen Anteil handlungsrelevanter Alarme von 31 Prozent (illustrativ) und eine Fehlalarmrate von 22 Prozent (illustrativ). Fünf Regeln erzeugten 58 Prozent der Pages (illustrativ), und die größte war eine Platten-Schwelle auf einem Batch-Server, der sich stets von selbst erholte. Der Anteil durch Monitoring erkannter Incidents im Vorquartal betrug 62 Prozent (illustrativ), und die mediane Zeit bis zur Erkennung betrug 14 Minuten (illustrativ) bei einem 95. Perzentil von 51 Minuten (illustrativ).

Das Team stuft drei laute Regeln zu einer Ticket-Warteschlange herab, führt Duplikate zusammen, damit ein Fehler eine Page erzeugt, ersetzt den Alarm auf die rohe Fehlerzahl am Checkout durch einen Burn-Rate-Alarm auf das Fehlerbudget (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets) und fügt einen Symptomalarm für Bestellbestätigungs-E-Mails hinzu, eine Lücke hinter zwei kundengemeldeten Incidents. Jede Änderung ist ein Backlog-Element mit Eigner. Vier Wochen später fallen die Pages auf 96 (illustrativ), und die Handlungsrate steigt auf 64 Prozent (illustrativ), während der Erkennungsanteil auf 71 Prozent (illustrativ) steigt und die mediane Zeit bis zur Erkennung bei 14 Minuten hält. Die Ruhe scheint verdient.

Das Manipulationsrisiko zeigt sich im dritten Monat. Eine neue Führungskraft setzt ein informelles Ziel von weniger als 60 Pages je vier Wochen, und eine Rotation erreicht es, indem sie die Verzögerung des Checkout-Fehleralarms verlängert. Ihr Erkennungsanteil fällt auf 55 Prozent (illustrativ), und die Zeit bis zur Erkennung am 95. Perzentil steigt auf 80 Minuten (illustrativ). Weil die Leitplanken neben dem Volumen stehen, fängt das Review es auf. Das Team zieht das Volumenziel zurück, stellt den Alarm wieder her und erfasst den Fall im Kennzahlenregister (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

## Agilität, KI, Automatisierung und Analytik

### Agilität

Überprüfen Sie Alarme in regelmäßigem Rhythmus als Produkt, das Bereitschaftspersonal nutzt, und stellen Sie die lauten mit Stakeholdern ein oder stimmen Sie sie ab. Zu beachten ist, dass ein Ziel, das Alarmvolumen zu senken, nützliche Alarme entfernen kann.

### KI

KI kann Alarme gruppieren, zusammenfassen und ordnen und Ursachen vorschlagen. Koppeln Sie Rauschminderung mit der Verpassensrate für echte Incidents und verfolgen Sie den Anteil der KI-Gruppierungen, die ein Mensch teilte oder zusammenführte. Zu beachten ist, dass Unterdrückung durch ein Modell einen seltenen, aber ernsten Alarm verbergen kann.

### Automatisierung

Zählen Sie Alarme automatisch nach Regel und Ergebnis und messen Sie die Alarmautomatisierung an Unterdrückungsfehlern. Zu beachten ist, dass automatisch aufgelöste Alarme wie gesunde Systeme aussehen können, wenn die Regel nur flattert.

### Analytik

Berichten Sie den Anteil handlungsrelevanter Alarme und die Erkennungsabdeckung, mit den Incidents, die Nutzer zuerst bemerkten. Die Entscheidung, die dies untermauert, ist, welche Alarme zu beheben oder zu entfernen sind. Zu beachten ist, dass gegen bekannte Incidents gemessene Abdeckung Fehlermodi ignoriert, die noch niemand gesehen hat.

## Branchenperspektive

**Startup.** Wenn eine Handvoll Ingenieure alle in Bereitschaft ist, ist die Priorität eine kurze Paging-Richtlinie und einige Symptomalarme auf den Pfaden, die Geld verdienen. Ein zehnminütiger Blick am Montag, was Menschen geweckt hat, genügt. Das Hauptrisiko sind gar keine Alarme, sodass Kunden das Monitoring sind; zählen Sie, wie oft Ihnen ein Kunde zuerst Bescheid sagte.

**Kleinunternehmen.** Kleine Organisationen verlassen sich oft auf das Monitoring eines Lieferanten. Nützliche Kennzahlen sind die Erkennungsabdeckung für die wenigen Systeme, die das Geschäft stoppen, und der Anteil der von Nutzern gefundenen Incidents. Bitten Sie Lieferanten um die Alarmdaten, auf die Ihr Vertrag Anspruch gibt.

**Großunternehmen.** Große Organisationen haben viele Werkzeuge und Rotationen, und jedes Team kann „handlungsrelevant“ anders definieren. Standardisieren Sie Definitionen und Labels, überprüfen Sie auf Teamebene und aggregieren Sie nach Service statt nach Werkzeug. Plattformen zur Ereigniskorrelation verringern das Volumen im großen Maßstab, brauchen aber eigene Recall-Prüfungen.

**Behörden und öffentlicher Sektor.** Manche Services laufen zu Bürozeiten, andere, etwa Notfall- oder Leistungssysteme, durchgehend. Erkennungsabdeckung und getestete Alarme zählen am meisten dort, wo Fehlschlag rechtliche oder Sicherheitsfolgen hat, und Testaufzeichnungen können die Prüfung stützen. Berichten Sie Aufsichtsgremien Abdeckung und Erkennung, nicht rohe Alarmzahlen, die leicht falsch gelesen werden (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Gründe zu investieren sind praktisch. Bessere Erkennung verkürzt die Zeit, in der Nutzer betroffen sind. Weniger sinnlose Pages schützen den Schlaf, verringern die Abwanderung aus der Rotation und halten Aufmerksamkeit für die Alarme frei, auf die es ankommt. Die Kosten schlechter Alarmqualität sind schwer zu sehen, weil sie sich über unterbrochenen Schlaf, langsame Reaktionen und das Ausscheiden erfahrener Ingenieure verteilen.

Die Kosten der Erhebung dieser Kennzahlen sind klein, wenn sich Alarm-, Paging- und Incident-Werkzeuge verbinden lassen, und mäßig, wenn Labels von Hand hinzugefügt werden. Die Hauptkosten sind die wöchentliche Review-Zeit, Abstimm- und Löscharbeit und gelegentliche Erkennungstests. Das Beschneiden ungenutzter Regeln senkt auch Lizenz- und Speicherkosten des Monitorings, und die Gesamtbetriebskosten sollten die Zeit der Menschen einschließen.

Der Ertrag zeigt sich binnen weniger Monate als ruhigere Rotationen, ein steigender Anteil durch Monitoring erkannter Incidents und eine Zeit bis zur Erkennung, die sich nicht verschlechtert. Um daraus Geld zu machen, vergleichen Sie die Kosten von Incident-Stunden und Rotationsfluktuation mit den Kosten des Reviews, anhand Ihrer eigenen Zahlen. Nutzen Sie keine Branchendurchschnitte, wenn Sie keine verifizierte Quelle zitieren können.

## Anti-Muster und Fallstricke

- **Ein Ziel für das Alarmvolumen.** Ein Ziel für die Zahl belohnt Stille und lädt zum Verbergen von Alarmen ein. Setzen Sie Ziele für den Anteil handlungsrelevanter Alarme und den Erkennungsanteil und nutzen Sie das Volumen als Kontextzahl mit einer vom Team gewählten Tragfähigkeitsgrenze.
- **Auf jede Ursache alarmieren.** Dutzende Pages auf Ursachenebene erzeugen Rauschen und verpassen trotzdem das Symptom, an das niemand dachte. Alarmieren Sie stattdessen auf nutzerseitige Symptome.
- **Nach jedem Incident einen Alarm hinzufügen und nie einen entfernen.** Koppeln Sie jeden neuen Alarm mit einem Review derer, die er überflüssig macht.
- **Alarme zählen, ohne sie zu kennzeichnen.** Eine Zählung ohne Urteil über Nützlichkeit kann eine laute Rotation nicht von einer geschäftigen unterscheiden. Kennzeichnen Sie jede Woche eine Stichprobe, auch wenn nur wenige Minuten verfügbar sind.
- **Abdeckung als Zahl von Alarmen behandeln.** Ein Service mit fünfzig Ursachenalarmen und ohne Symptomalarm ist schlecht abgedeckt. Definieren Sie Abdeckung als getestete Symptomerkennung.
- **Menschen nach bearbeiteten oder bestätigten Pages ordnen.** Es bestraft die Rotationsmitglieder, die die harten Schichten übernehmen, und ermutigt zum Meiden des Pagers. Berichten Sie nach Rotation und Service und suchen Sie nach Entwurfskorrekturen.
- **Den Alarmweg nie testen.** Ein Alarm, den man nicht funktionieren sah, ist eine Annahme. Nehmen Sie Alarmtests in Game Days auf und überwachen Sie die Pipeline selbst.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Paging-Richtlinie und Regelverantwortung | Alarme ad hoc hinzugefügt; niemand weiß, warum viele existieren | Einige Teams haben eine Richtlinie und Eigner für ihre Regeln | Eine kurze Paging-Richtlinie; jede Paging-Regel hat einen Eigner und ein Runbook | Regelaktualität verfolgt und überprüft; ungenutzte Regeln nach Plan entfernt | Richtlinie und Verantwortung über Teams und Lieferanten angepasst, wenn sich Services ändern |
| Messung der Alarmqualität | Beschwerden über Rauschen; keine Zählungen | Volumen von einigen Teams gezählt; keine Kennzeichnung | Wöchentliches Review mit gemeinsamen Labels; Anteil handlungsrelevanter Alarme und Fehlalarmrate je Service berichtet | Raten im Trend und mit Erkennungsmessgrößen gekoppelt; Verbesserungsarbeit finanziert | Qualität über Services und Lieferanten verknüpft; Definitionen überarbeitet, wenn sie Entscheidungen nicht mehr informieren |
| Erkennung und Abdeckung | Kunden und Kollegen melden die meisten Probleme | Symptomalarme auf einigen Schlüsselservices | Erkennungsabdeckung mit getesteten Alarmen verfolgt; erstes Signal bei jedem Incident erfasst | Zeit bis zur Erkennung und Anteil durch Monitoring erkannter Incidents mit Leitplanke überprüft; Lücken werden geplante Arbeit | Erkennung routinemäßig über Abhängigkeiten und Lieferanten getestet, einschließlich der Alarm-Pipeline |
| Nutzung zur Verbesserung | Alarmkorrekturen folgen der schlimmsten Nacht | Korrekturen folgen Incidents | Jedes Review bringt mindestens eine Änderung hervor | Änderungen auf ihre Wirkung auf Volumen, Handlungsrelevanz und Erkennung verfolgt | Rotationslast, Erkennung und Fehlerbudgets gemeinsam überprüft, um Investitionen zu steuern |

## Checkliste

- [ ] Wir haben eine schriftliche Paging-Richtlinie von wenigen Sätzen, die sagt, was eine Page verdient.
- [ ] Jede Paging-Regel hat einen Eigner, einen Zweck und einen Runbook-Link.
- [ ] Jede Rotation überprüft mindestens wöchentlich, was ausgelöst hat, und kennzeichnet jeden Alarm.
- [ ] Jedes Review bringt mindestens eine erfasste Änderung an einer Regel hervor.
- [ ] Wir berichten Alarmvolumen, Anteil handlungsrelevanter Alarme und Fehlalarmrate je Rotation und Service, nie je Person.
- [ ] Jeder Incident erfasst, wie er zuerst erkannt wurde, mit einer Option „unbekannt“.
- [ ] Wir schätzen den Auswirkungsbeginn aus der Historie des Service Level Indicators und berichten Median und 95. Perzentil der Zeit bis zur Erkennung.
- [ ] Jeder Service im Umfang hat einen Symptomalarm, der in den letzten 12 Monaten getestet wurde.
- [ ] Eine Heartbeat-Prüfung ruft uns, wenn die Alarm-Pipeline stoppt.
- [ ] Wir haben eine tragfähige Last außerhalb der Arbeitszeit für jede Rotation vereinbart und überprüfen sie.
- [ ] Kein Ziel wird allein auf das Alarmvolumen gesetzt.

## KI-Prompts

**Zweck: Eine Paging-Richtlinie für einen Service aus seinen Indikatoren und Folgen entwerfen.**

```text
Help me draft a paging policy for the service [service name].
Context: users are [user group]; the user-facing symptoms we care about are [symptoms, for example errors, latency, unavailability]; the consequences of a missed failure are [consequences]; the on-call rotation is [rotation description, for example hours and team size].
Write a short policy (under 200 words) that says what earns a page, what goes to a ticket queue, and what stays on a dashboard.
Do not invent thresholds or benchmark values; leave [threshold] placeholders for us to set from our own data.
List the questions you would ask us before finalizing it, and list your assumptions.
```

**Zweck: Ein exportiertes Alarm-Review auf Rauschmuster analysieren.**

```text
I will paste a table of alerts from [period] for the rotation [rotation name] with columns: [column names, for example rule, time, label, action taken, service].
Calculate the actionable alert rate, the false positive rate, the out-of-hours share, and the share of alerts from the five noisiest rules, using only the data I paste.
Suggest which rules to tune, merge, demote, or delete, with a reason for each, and mark each suggestion as a hypothesis to check.
Report by rule, service, and rotation, never by person. Do not invent benchmark values.
List your assumptions and any rows you excluded.
```

**Zweck: Einen Satz Alarmkennzahlen vor der Veröffentlichung auf Manipulationsrisiko prüfen.**

```text
Here are the alert quality metrics we plan to publish: [list of metrics with definitions and formulas].
For each metric, describe two ways it could be gamed or misread in our context of [organization type and service], and suggest a paired guardrail from the same list or a practice we can adopt.
Point out any metric that is shown without its guardrail.
Do not invent sources or benchmark values.
List your assumptions about how our tools record alerts and incidents.
```

**Zweck: Einen Erkennungstest für Services mit schwacher Abdeckung planen.**

```text
Our services are [list of services], and the symptom alerts we believe exist are [list of alerts].
Propose a safe test plan for the next [game day or rehearsal] that checks, for each service, that a deliberate symptom triggers the alert, reaches [rotation], and links to a runbook.
Say who should be told beforehand and how to record results for detection coverage.
Do not invent tool features; ask me how [monitoring tool] works.
List your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine verwandte Kennzahl definiert, und die Leitplanke, die neben eine Alarmqualitätskennzahl gehört.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass Änderungen an diesem Thema Vorlage, Manipulationstabelle und Querverweise konsistent halten.

## Wichtigste Erkenntnisse

- Beurteilen Sie Alarme danach, ob sie zu Handlung führten, und Monitoring danach, wie viel echten Ärger es erfasste; Precision und Recall wachen übereinander.
- Alarmieren Sie auf Symptome, die Nutzer spüren, binden Sie Schwellen an das Service Level Objective, wo eines existiert, und heben Sie Ursachen für die Diagnose auf.
- Überprüfen Sie jede Woche, was ausgelöst hat, kennzeichnen Sie es und nehmen Sie jedes Mal mindestens eine Änderung vor.
- Setzen Sie nie ein Ziel allein auf das Alarmvolumen; lesen Sie es neben dem Anteil handlungsrelevanter Alarme, dem Anteil durch Monitoring erkannter Incidents und der Zeit bis zur Erkennung.
- Testen Sie die Alarme und die Alarm-Pipeline, denn ein ungetesteter Alarm ist eine Annahme.
- Berichten Sie nach Rotation und Service, nie nach Person, und behandeln Sie tragfähige Bereitschaftslast als Entwurfsziel.

## Quellen und weiterführende Literatur

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Monitoring Distributed Systems," https://sre.google/sre-book/monitoring-distributed-systems/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Practical Alerting from Time-Series Data," https://sre.google/sre-book/practical-alerting/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, "Alerting on SLOs," https://sre.google/workbook/alerting-on-slos/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [System monitoring](https://en.wikipedia.org/wiki/System_monitoring).
7. Wikipedia, [False positives and false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives).
8. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
9. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
