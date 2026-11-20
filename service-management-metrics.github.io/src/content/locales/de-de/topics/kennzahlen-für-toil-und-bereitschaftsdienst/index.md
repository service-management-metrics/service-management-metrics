# Kennzahlen für Toil und Bereitschaftsdienst

**Ein Service ist nur so zuverlässig wie die Rotation, die sich um ihn kümmert. Messen Sie also die Unterbrechungen, die nächtliche Last und den Anteil der Zeit, der an repetitive Handarbeit verloren geht, für die Rotation als Ganzes, und nutzen Sie die Zahlen, um Vorbeugung und Automatisierung zu finanzieren, nie um Menschen zu vergleichen.**

## Überblick und Motivation

Zuverlässigkeit wird oft in Begriffen des Systems beschrieben: Verfügbarkeit, Latenz, Fehlerraten. Hinter jedem Service, der mitten in der Nacht Nutzer hat, steht ein menschliches System, das reagiert, wenn das System ausfällt. Dieses menschliche System hat Grenzen. Eine Rotation, die zu oft gerufen wird, zu viele Menschen weckt oder den größten Teil ihrer Woche mit manuellen, repetitiven Aufgaben verbringt, wird langsamer, macht mehr Fehler und verliert schließlich Menschen. Die anderen Kennzahlen in Teil 5 können bis zu dem Punkt gesund aussehen, an dem die Menschen gehen, die sie zusammenhalten.

Zwei Ideen ordnen dieses Thema. Die erste ist [Bereitschaftsarbeit](https://en.wikipedia.org/wiki/On-call): eine Rotation von Menschen, die erreichbar und bereit sind, außerhalb normaler Arbeitsmuster auf Alarme zu reagieren. Eine **Page** ist ein Alarm, der einen Löser unterbricht, meist über Pager, Anruf oder Push-Benachrichtigung. Eine **Schicht** ist ein Abschnitt Bereitschaftsdienst, zum Beispiel ein Tag, eine Woche oder eine Nacht. Eine **Rotation** ist die Gruppe der Menschen, die abwechselnd Schichten übernehmen. Die zweite Idee ist **Toil**, ein Begriff aus dem [Site Reliability Engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), der Disziplin, Services mit Methoden des Software-Engineerings zu betreiben. In Googles Buch *Site Reliability Engineering* ist Toil betriebliche Arbeit, die an den Betrieb eines Produktionsservices gebunden ist und tendenziell manuell, repetitiv, automatisierbar, taktisch, ohne bleibenden Wert und mit dem Service wachsend ist. Es ist nicht dasselbe wie Overhead wie Meetings, und es ist nicht einfach Arbeit, die jemand nicht mag.

ITIL 4 hat keine Praktik namens „Toil-Management“. Das Material verteilt sich über mehrere Praktiken. [Incident-Management](https://en.wikipedia.org/wiki/Incident_management) und Monitoring und Ereignismanagement erzeugen die Pages. Das Problemmanagement beseitigt die Ursachen, die sie immer wieder hervorbringen. Das Management von Serviceanfragen und das Deployment-Management erzeugen einen Großteil der repetitiven Handarbeit. Personal- und Talentmanagement und kontinuierliche Verbesserung besitzen die menschliche Seite. Das agile Gegenstück ist die Arbeitsvereinbarung des Teams zu ungeplanter Arbeit und tragfähigem Tempo sowie die DevOps-Gewohnheit, dass das Team, das einen Service baut, auch einen Teil des Pagers dafür trägt.

Die Kennzahlen hier betreffen Last und Tragfähigkeit. Die Incident-Bearbeitung gehört zu anderen Themen (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents, und Thema 3.4, Kennzahlen für Major Incidents), ebenso die Qualität einzelner Alarme (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität). Dieses Thema fragt, was es die Menschen in der Rotation kostet, den Service am Laufen zu halten, und ob diese Kosten tragfähig sind.

### Warum dies zur Zuverlässigkeit gehört

Ermüdung hat betriebliche Folgen. [Schlafentzug](https://en.wikipedia.org/wiki/Sleep_deprivation) verschlechtert Urteilsvermögen und Reaktionszeit, und Löser, die zu Beginn eines Incidents müde sind, brauchen länger, ihn zu diagnostizieren, und machen eher einen zweiten Fehler, während sie den ersten beheben. [Alarmmüdigkeit](https://en.wikipedia.org/wiki/Alarm_fatigue) ist der verwandte Effekt zu vieler Alarme: Menschen hören auf, jeden als dringend zu behandeln. [Berufliches Burnout](https://en.wikipedia.org/wiki/Occupational_burnout) ist das längerfristige Ergebnis anhaltender Überlastung und zeigt sich als Abwanderung, Krankheit und innere Kündigung, die langsam, teuer und schwer umkehrbar sind. Ein Team, das Servicezuverlässigkeit misst, ohne die Tragfähigkeit seiner Rotation zu messen, beobachtet nur die Wirkung und ignoriert einen Teil der Ursache.

Dieses Thema beschreibt Rotationen, Schichten und Services und ordnet nie Einzelpersonen. Eine ITIL-Sicht beginnt beim Incident und beim Service, eine SRE-Sicht bei den Kosten an Personenzeit und eine agile Sicht bei der Kapazität für geplante Arbeit.

## Leitprinzipien

- **Die Rotation messen, nicht die Person.** Berichten Sie Last nach Service, Schicht und Rotationsplatz. Die Page-Zahl einer Person hängt von der gezogenen Schicht ab, und eine Rangliste lehrt Menschen, Unterbrechungen zu verbergen.
- **Zählen, wann Unterbrechungen geschehen, nicht nur wie lange sie dauern.** Eine Page von fünf Minuten um 03:00 Uhr kann eine Nacht Schlaf kosten.
- **Toil eng definieren und das Team klassifizieren lassen.** Toil ist eine bestimmte Art Arbeit, kein Synonym für Arbeit, die Menschen nicht mögen.
- **Last als Signal für Investition behandeln.** Hohes Page-Volumen oder hoher Toil-Anteil ist ein Beleg, dass ein Service, ein Werkzeug oder eine Personalstärke Arbeit braucht.
- **Jede Lastkennzahl mit einer Qualitätskennzahl koppeln.** Weniger Pages sind nur dann eine gute Nachricht, wenn Incidents weiterhin erkannt werden.
- **Verteilungen zeigen und die Daten zuerst mit der Rotation teilen.** Eine durchschnittliche Schicht verbirgt eine Handvoll schrecklicher Nächte, und die Menschen in Bereitschaft können am besten beurteilen, ob die Zahlen zu ihrem Erleben passen.

## Kennzahlendefinitionen

Die Tabelle gibt den Kernsatz. Jede Zeit- oder Anzahlmessgröße nennt, wo sie startet und stoppt und was ausgeschlossen ist. „Außerhalb der Arbeitszeit“ muss einmal je Rotation als schriftliches Fenster in Ortszeit definiert werden, einschließlich Wochenenden und Feiertagen, weil die Menschen in einer verteilten Rotation unterschiedliche Ortszeiten haben können.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pages pro Schicht | Zahl der Pages, die einer Rotation während einer Schicht zugestellt wurden | Anzahl der zwischen Schichtbeginn und Schichtende zugestellten Pages, eine Zählung je Schicht, nach Zusammenführen doppelter Pages für dieselbe Alarmgruppe innerhalb von 5 Minuten (das Zusammenführungsfenster ist eine Teameinstellung). Test-Pages und irrtümlich gesendete Pages sind ausgeschlossen. Median und 90. Perzentil über Schichten berichten, plus die geschäftigste Schicht | Pages pro Schicht | Paging-Werkzeug; Bereitschaftsplan | Incident-Management; Monitoring und Ereignismanagement | Richtlinie für ungeplante Arbeit; tragfähiges Tempo | Wöchentliches Review, monatlicher Trend |
| Anteil der Pages außerhalb der Arbeitszeit | Anteil der Pages, die außerhalb des schriftlichen Arbeitsfensters eintreffen | Pages, die außerhalb des Arbeitsfensters zugestellt wurden / alle zugestellten Pages, über den Zeitraum. Das Fenster wird je Rotation in Ortszeit festgelegt; Feiertage zählen als außerhalb des Fensters | Prozent | Paging-Werkzeug; Rotationskalender | Incident-Management; Monitoring und Ereignismanagement | Arbeitsvereinbarung zur Verfügbarkeit | Monatlich |
| Rate nächtlicher Unterbrechungen | Wie oft eine Schicht mindestens eine Page im geschützten Schlaffenster enthält | Schichten mit mindestens einer Page im geschützten Schlaffenster (zum Beispiel 22:00 bis 07:00 Ortszeit, vom Team festgelegt) / alle Schichten im Zeitraum. Eine Page, die automatisch ohne menschliche Reaktion bestätigt wird, ist ausgeschlossen | Prozent der Schichten | Paging-Werkzeug; Bestätigungsprotokoll | Incident-Management; Personal- und Talentmanagement | Tragfähiges Tempo; Team-Gesundheitscheck | Monatlich |
| Toil-Anteil der Zeit | Anteil der Arbeitszeit einer Rotation, der für Toil aufgewendet wird | Stunden, die die Rotation auf als Toil klassifizierte Arbeit bucht / gesamte von der Rotation erfasste Arbeitsstunden, über einen Monat. Meetings, Schulung und Urlaub sind aus Zähler und Nenner ausgeschlossen. Die Klassifizierung folgt den sechs Merkmalen von Toil, vom Team angewandt | Prozent der Zeit | Zeitstichproben oder Aufgabenlabels im Work-Tracker; Review der Klassifizierung durch das Team | Kontinuierliche Verbesserung; Deployment-Management; Management von Serviceanfragen | Anteil ungeplanter Arbeit; Kapazitätsverteilung in der geplanten Arbeit | Monatlich, mit vierteljährlichem Review der Klassifizierung |
| Toil nach Quelle | Verteilung der Toil-Stunden auf benannte Quellen wie manuelle Neustarts, Zugriffsanfragen, Zertifikatserneuerungen und Ticket-Triage | Toil-Stunden je Quelle / gesamte Toil-Stunden, mit den fünf größten Quellen und einer Gruppe „sonstige“. Dieselben Ausschlüsse wie beim Toil-Anteil der Zeit | Prozent der Toil-Stunden nach Quelle | Zeitstichproben oder Aufgabenlabels im Work-Tracker | Problemmanagement; Management von Serviceanfragen | Backlog von Verbesserungselementen | Vierteljährlich |
| Rate wiederholter Pages | Anteil der Pages, die durch einen Zustand verursacht wurden, der die Rotation innerhalb eines genannten Fensters schon einmal gerufen hat | Pages, deren Alarmgruppe oder Ursachencode einer früheren Page innerhalb von 30 Tagen entspricht / alle Pages im Zeitraum. Ein Ursachencode wird vom Löser beim Schließen gesetzt; nicht gesetzte Codes werden gesondert berichtet | Prozent | Paging-Werkzeug; Ursachencodes der Incident-Datensätze | Problemmanagement; Incident-Management | Maßnahmen aus der Retrospektive; Backlog technischer Schulden | Monatlich |
| Rotationstiefe | Wie viele qualifizierte Löser sich den Pager teilen, verglichen mit der Zahl der zu besetzenden Rollen | Zahl der Personen, die die Bereitschaftsfreigabe abgeschlossen haben und für Schichten verfügbar sind / Zahl der Schichtplätze je Rotationszyklus. Urlaub und Abordnung verringern die Verfügbarkeit. Als Verhältnis je Rotation berichten, nie je Person | Verhältnis | Rotationsplan; Checkliste der Bereitschaftsfreigabe | Personal- und Talentmanagement | Funktionsübergreifendes Team; Skill-Matrix | Vierteljährlich |
| Beseitigter Toil | Wiederkehrende Toil-Stunden, die durch eine Automatisierung oder Entwurfsänderung aus der Arbeit der Rotation genommen wurden | Geschätzte monatliche Toil-Stunden einer Quelle vor der Änderung minus dieselben nach der Änderung, über mindestens zwei Zyklen nach der Lieferung gemessen. Durch eine einmalige Bereinigung gesparte Stunden sind ausgeschlossen | Stunden pro Monat | Zeitstichproben vor und nach; Verbesserungsticket | Kontinuierliche Verbesserung; Problemmanagement | Geliefertes Verbesserungselement | Vierteljährlich |

Eine Page-Zahl ist eine Zahl von Unterbrechungen, nicht von Incidents: Ein Incident kann ein Dutzend Pages erzeugen. Der Toil-Anteil der Zeit hängt von ehrlicher Erfassung ab, behandeln Sie ihn also als vereinbarte Schätzung.

## Empfehlungen

### Die Begriffe definieren, bevor man zählt

**1. Schreiben Sie auf, was als Page, Schicht und außerhalb der Arbeitszeit zählt.** Teams zählen unter demselben Wort Verschiedenes. Eine Page kann jede Benachrichtigung sein, nur solche, die einen Menschen erreichen, oder nur solche, die Handeln erfordern. Wählen Sie eine Definition, nennen Sie das Zusammenführungsfenster für Duplikate und erfassen Sie das Arbeitsfenster in Ortszeit. Ohne das ändern sich die Zahlen, wenn ein Werkzeug umkonfiguriert wird, und der Trend führt in die Irre.

**2. Einigen Sie sich, was Toil ist, mit Beispielen aus Ihrem eigenen Service.** Beginnen Sie bei den sechs Merkmalen aus dem SRE-Buch. Schreiben Sie eine kurze Liste von Beispielen und Gegenbeispielen, etwa einen hängenden Job neu zu starten (Toil), ein neues Wiederherstellungswerkzeug zu entwerfen (Engineering) und ein Planungsmeeting (Overhead). Überprüfen Sie die Liste, wenn Meinungsverschiedenheiten auftauchen.

**3. Wählen Sie, wie Sie den Toil-Anteil messen, und akzeptieren Sie seine Grenzen.** Die billigen Optionen sind Zeitstichproben, Aufgabenlabels im Work-Tracker und eine kurze vierzehntägliche Schätzung. Keine ist exakt, wählen Sie also die mit dem geringsten Aufwand, betreiben Sie sie ein Quartal und beurteilen Sie eher den Trend als den absoluten Wert.

### Die Last auf der Rotation messen

**4. Berichten Sie Pages pro Schicht als Verteilung.** Die durchschnittliche Schicht verbirgt, was die Rotation spürt. Zeigen Sie Median, 90. Perzentil und die geschäftigste Schicht und fügen Sie eine Notiz hinzu, was in dieser Schicht geschah. Ein ruhiger Median mit schrecklichem Schwanz bedeutet einige schlimme Nächte, was ein anderes Problem ist als eine stetig geschäftige Rotation. Siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen, zum Lesen von Perzentilen.

**5. Stellen Sie das Timing neben das Volumen.** Der Anteil der Pages außerhalb der Arbeitszeit und die Rate nächtlicher Unterbrechungen zeigen, wann die Last landet. Fünf Pages in der Bürozeit sind ein Ärgernis, fünf zwischen Mitternacht und 05:00 Uhr sind andere Kosten. Zeigen Sie beides auf derselben Seite.

**6. Schauen Sie auf die Streuung über Schichten, nicht über Menschen.** Eine Rotation, in der eine wiederkehrende Schicht (etwa das Wochenende oder die Montagsübergabe) die meisten Pages sammelt, braucht eine andere Korrektur als eine mit gleichmäßiger Last. Berichten Sie den Anteil der Pages nach Schichtposition und Tag. Werden die Daten nach benannter Person berichtet, ist zu erwarten, dass sie als Rangliste gelesen werden, erzeugen Sie diese Sicht also nicht.

**7. Zählen Sie die Last durch Major Incidents gesondert.** Ein Major Incident kann in einer Nacht mehr Unterbrechungen erzeugen als ein normaler Monat. Berichten Sie ihn als eigene Zeile, damit ein Ereignis den Trend nicht verzerrt (siehe Thema 3.4, Kennzahlen für Major Incidents).

### Last mit Ursachen und Korrekturen verbinden

**8. Verknüpfen Sie Pages mit Problemen und verfolgen Sie Wiederholungen.** Die Rate wiederholter Pages zeigt, wie viel der Last aus bereits bekannten Ursachen stammt. Eine hohe Wiederholungsrate ist ein Argument für das Problemmanagement, nicht für schnellere Reaktion. Speisen Sie die häufigsten wiederkehrenden Ursachen in den Problem-Backlog und erfassen Sie die Verknüpfung (siehe Thema 4.1, Kennzahlen für das Problemmanagement, und Thema 4.6, Technische Schulden und bekannte Fehler).

**9. Ordnen Sie Toil-Quellen und gehen Sie die größte an.** Ein [Pareto-Diagramm](https://en.wikipedia.org/wiki/Pareto_chart) der Toil-Stunden nach Quelle zeigt meist wenige Quellen, die für den größten Teil der Zeit verantwortlich sind. Wählen Sie die größte, entscheiden Sie, ob sie sich wegentwerfen, automatisieren oder dem Team übergeben lässt, das die Ursache besitzt, und planen Sie sie wie Funktionsarbeit. Bevorzugen Sie, den Bedarf zu beseitigen, vor dem Automatisieren des Schritts, denn ein automatisierter Schritt muss weiter gepflegt werden.

**10. Messen Sie beseitigten Toil, nicht geschriebene Automatisierungen.** Eine Automatisierung, die niemand nutzt, beseitigt nichts. Messen Sie die Toil-Stunden vorher und nachher, über mindestens zwei Zyklen, und erfassen Sie den Aufwand, die Automatisierung zu bauen und zu pflegen. Das ist der ehrliche Ertrag, und er verhindert ein Programm der „Automatisierung“, das Skripte hinzufügt, ohne Arbeit zu beseitigen. Siehe Thema 3.7, Kennzahlen für Self-Service und Automatisierung, zur Übernahme von Automatisierung durch Nutzer.

### Das System tragfähig halten

**11. Legen Sie Rotationsgrenzen in einer Teamvereinbarung fest und beobachten Sie dann die Rotationstiefe.** Vereinbaren Sie, wie oft eine Person in Bereitschaft sein kann, wie viele aufeinanderfolgende Nächte akzeptabel sind und welche Ruhe auf eine schlechte Nacht folgt. Die Rotationstiefe zeigt, ob die Rotation genug qualifizierte Menschen für die vereinbarte Grenze hat. Eine Rotation, die nominell acht Personen hat, aber effektiv drei, weil die anderen noch nicht bereit oder im Urlaub sind, erfüllt die Grenze nicht, was auch immer der Dienstplan sagt.

**12. Nutzen Sie die Zahlen, um um etwas Konkretes zu bitten.** Eine Lastzahl stützt eine Bitte: eine Personaländerung, aus der Funktionsarbeit herausgeschnittene Zeit, um Toil abzubauen, eine Änderung der Alarmschwellen oder eine Außerbetriebnahme. Nennen Sie die Bitte neben der Zahl, sonst hören Menschen auf zu erfassen (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Pages pro Schicht | Alarmschwellen anheben oder Alarme stummschalten, damit die Zahl fällt; nicht zusammenhängende Alarme zu einer Page zusammenführen; Pages in eine Ticket-Warteschlange verschieben, die niemand beobachtet | Erkennungsabdeckung und kundengemeldete Incidents, die das Monitoring verpasste (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität); Zeit bis zur Erkennung (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents) |
| Anteil der Pages außerhalb der Arbeitszeit | Das Arbeitsfenster weiter definieren; Jobs und Deployments umplanen, sodass Pages in die Bürozeit rutschen, ohne weniger zu werden; Pages als „niedrige Dringlichkeit“ umklassifizieren | Gesamtes Page-Volumen neben dem Anteil; schriftliches Arbeitsfenster unter Change-Kontrolle; ein Review dessen, was sich verschob |
| Rate nächtlicher Unterbrechungen | Die Bestätigung bis zum Morgen verzögern; Pages automatisch bestätigen; nur Pages zählen, die einen Menschen erreichten | Zeit bis zur Bestätigung nach Uhrzeit (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents); Pages ohne menschliche Reaktion gesondert berichtet; Kundenauswirkung bei Nacht |
| Toil-Anteil der Zeit | Toil als „Engineering“ oder „Projektarbeit“ umklassifizieren; weniger erfassen, als aufgewendet wurde; nur kennzeichnen, was sich leicht beschreiben lässt | Eine periodische Prüfung klassifizierter Elemente durch jemanden außerhalb der Rotation; die eigene Sicht des Teams, wie sich die Woche anfühlte; der Zeitanteil für geplante Verbesserungsarbeit |
| Toil nach Quelle | Eine große Quelle in mehrere kleine teilen, sodass keine hervorsticht; eine Quelle unbenannt in „sonstige“ lassen | Eine Obergrenze für die Gruppe „sonstige“ (zum Beispiel unter einem Fünftel der Toil-Stunden, eine Teameinstellung); jedes Quartal eine Stichprobe der „sonstigen“ Elemente |
| Rate wiederholter Pages | Pages jedes Mal mit einem neuen Ursachencode schließen, sodass Treffer verpasst werden; Ursachencodes erweitern, bis alles verschieden ist; das Fenster verlängern oder verkürzen | Prüfung der Ursachencodes an einer Stichprobe; Wiederkehr derselben Alarmgruppe über Incidents (siehe Thema 4.1, Kennzahlen für das Problemmanagement) |
| Rotationstiefe | Personen zählen, die die Freigabe nicht abgeschlossen haben; Personen zählen, die selten verfügbar sind; den Dienstplan auffüllen | Anteil der tatsächlich vom nominellen Pool besetzten Schichten; tatsächliche Schichtzahl je Platz, ohne Namen berichtet; Abschluss der Freigabe-Checkliste |
| Beseitigter Toil | Einmalige Bereinigungen als wiederkehrende Einsparungen zählen; den Aufwand für Bau und Pflege der Automatisierung ignorieren; Einsparungen ohne Vorher-nachher-Messung behaupten | Vorher-nachher-Stunden über zwei Zyklen gemessen; Pflegeaufwand der Automatisierung; Toil-Anteil der Zeit in den folgenden Quartalen |

Ein gesunder Befund ist eine Rotation, deren mediane Schicht ruhig und deren schlimmste Schicht selten ist, mit wenigen Pages bei Nacht, einem sinkenden Anteil wiederholter Pages und einem Toil-Anteil, der fällt, weil Quellen beseitigt wurden, nicht weil sie umklassifiziert wurden. Er zeigt auch den Aufwand, dorthin zu kommen: Verbesserungsarbeit, die im Plan erscheint, finanziert und geliefert wird. Fallen die Page-Zahlen, während Kunden mehr Incidents melden, die das Monitoring nicht erfasste, werden die Zahlen besser, indem man wegschaut.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Pages aus dem Paging-Werkzeug zählen | Automatisch, billig und schwer zu bestreiten | Zählt Unterbrechungen, nicht ihre Kosten; Alarme abzustimmen ändert die Zahl, ohne die Last zu ändern |
| Zeitstichproben für Toil | Angemessene Genauigkeit bei bescheidenem Aufwand | Braucht Disziplin; kleine Stichproben sind verrauscht |
| Berichterstattung auf Rotationsebene | Passt dazu, wie die Arbeit organisiert ist; sicher breit zu teilen | Kann eine Person verbergen, die kämpft; braucht daneben einen unterstützenden Gesprächskanal |
| Harte Obergrenze für Toil (zum Beispiel das Ziel des SRE-Buchs, Toil unter 50 Prozent der Zeit zu halten) | Ein klares Signal, das eine Reaktion auslöst | Eine Zahl lässt sich durch Umklassifizierung erreichen; eine Obergrenze braucht Rückhalt im Management |

Die zentrale Spannung liegt zwischen Hinnehmen und Investieren. Es ist leicht, hohe Last als normalen Preis eines wichtigen Services zu behandeln und Menschen zu bitten, ihn zu absorbieren, und es ist leicht, eine Obergrenze zu setzen, die niemand durchsetzen kann. Der Weg hindurch ist, jede Kennzahl mit einer Entscheidung zu koppeln: eine Schwelle, bei der das Team innehält und handelt, ein benannter Eigner der Maßnahme und ein Datum, um erneut hinzuschauen. Zahlen auf Rotationsebene sind sicher und manchmal zu grob. Kämpft jemand, gehört das Gespräch zu dieser Person und ihrer Führungskraft, anhand ihres eigenen Berichts der Woche.

## Fragen für die Diskussion im Team

**1. Wie fühlte sich unsere geschäftigste Schicht des letzten Quartals an, und was sagen die Zahlen dazu?**
Beginnen Sie mit der Geschichte vor dem Diagramm. Bitten Sie die Menschen in Bereitschaft, die Schicht zu beschreiben, und vergleichen Sie sie dann mit den Zahlen zu Pages pro Schicht und nächtlichen Unterbrechungen. Unterschätzen die Zahlen das Erleben, finden Sie heraus, was fehlt, etwa unerfasste Anrufe oder Arbeit nach der Page. Halten Sie die Liste als nächste Verbesserung der Messung fest.

**2. Was würden wir in unserem Team als Toil bezeichnen, und was nicht?**
Legen Sie fünf oder sechs jüngere Aufgaben auf eine Tafel und bitten Sie jede Person, sie anhand der sechs Merkmale als Toil, Engineering oder Overhead zu klassifizieren. Erwarten Sie Uneinigkeit und behandeln Sie sie als nützlich: Die Meinungsverschiedenheiten zeigen, wo die Definition vage ist. Einigen Sie sich auf eine Arbeitsdefinition für das nächste Quartal und schreiben Sie je zwei Beispiele auf. Vermeiden Sie, zu debattieren, ob die Arbeit Freude macht, denn die Frage ist, ob sie manuell, repetitiv und automatisierbar ist.

**3. Welchen Alarm oder welche Aufgabe würden wir zuerst löschen, wenn wir könnten?**
Fragen Sie nach dem Alarm oder der wiederkehrenden Aufgabe, vor der alle graut, und fragen Sie dann, was uns am Beseitigen hindert: die Kosten der Korrektur, ein fehlender Eigner oder der Glaube, sie sei erforderlich. Die Moderation sollte nach Arbeit suchen, die billig zu beseitigen ist und deren Eigner nicht im Raum ist. Wählen Sie zum Schluss ein Element für die nächste Planungsrunde.

**4. Wie viele Menschen können heute tatsächlich eine Schicht übernehmen, und zu welchen Grenzen sind wir bereit, uns zu verpflichten?**
Zählen Sie die Bereitschaft ehrlich: wer ist geschult, wer ist verfügbar und wer hat Einschränkungen. Vergleichen Sie das Ergebnis mit der nominellen Rotationsgröße. Fragen Sie, welche Häufigkeit von Bereitschaft und welche Zahl aufeinanderfolgender Nächte die Gruppe für akzeptabel hält, und prüfen Sie dann, ob die aktuelle Praxis sie erfüllt.

**5. Wenn wir unsere Page-Zahl bis zum nächsten Quartal halbierten, woher wüssten wir, dass wir nicht einfach aufgehört haben zuzuhören?**
Diese Frage betrifft die Leitplanke. Bitten Sie die Gruppe, Wege aufzulisten, wie die Page-Zahl fallen könnte, ohne dass der Service besser wird, etwa Schwellen anheben, Alarme zusammenführen oder eine Quelle ignorieren. Fragen Sie dann, was wir in Kundenmeldungen und in Erkennungsmessgrößen sähen, wenn das geschehen wäre. Einigen Sie sich auf die Leitplanke und setzen Sie sie auf dieselbe Seite wie das Volumen.

**6. Wer sieht diese Zahlen, und was wollen wir, dass er damit tut?**
Verfolgen Sie den Weg der Lastkennzahlen von der Rotation zu Führungskräften. Fragen Sie, was jede Zielgruppe wahrscheinlich schließt und ob irgendeine Sicht als Rangliste gelesen werden könnte. Einigen Sie sich auf die Form, die nach oben geht: auf Rotationsebene, mit Kontext, mit angehängter Bitte. Notieren Sie jede Sorge, dass Einzelpersonen identifizierbar sind.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams erzeugen durch die Changes, die sie releasen, einen großen Teil der Bereitschaftslast. Teams, die betreiben, was sie bauen, sehen die Verbindung zwischen einem Release und den folgenden Pages. Sie sollten Toil und Bereitschaftsarbeit in die Kapazitätsplanung aufnehmen, die Beseitigung von Toil als gewöhnliche Backlog-Arbeit planen und die Change-Qualität neben der Geschwindigkeit beobachten (siehe Thema 2.8, DORA-Kennzahlen).

### Service- und Betriebsteams

Betriebsteams tragen den Pager am häufigsten und sehen die menschlichen Kosten zuerst. Sie sollten die Definitionen besitzen, die Zeitstichproben oder das Kennzeichnen betreiben, die Zahlen auf Rotationsebene veröffentlichen und die größten Toil-Quellen und wiederkehrenden Ursachen mit Belegen zu den zuständigen Teams bringen. Ihr Risiko ist, die Last aus Professionalität stillschweigend zu absorbieren. Eine ruhige, sachliche Aufzeichnung von Nächten und Wochen ist eine wirksamere Bitte um Hilfe als eine Beschwerde, und die Aufzeichnungen sollten nie in eine Rangliste der Menschen verwandelt werden, die reagierten.

### Führung und Governance

Führungskräfte entscheiden über Personal, Prioritäten und darüber, ob Toil-Arbeit finanziert wird. Eine Führungskraft, die einen hohen Toil-Anteil als schlechte Leistung liest, lehrt das Team, ihn durch Umetikettieren zu senken. Eine, die ihn als Rechnung für Arbeit liest, die die Organisation nicht zu finanzieren wählte, erhält ehrliche Daten und einen Plan. Die Governance sollte eine Grenze für die Rotationslast erwarten und eine sichtbare Reaktion, wenn sie überschritten wird (siehe Thema 9.2, Kennzahlen für Zufriedenheit und Wohlbefinden).

### Kunden und Nutzer

Nutzer sehen die Rotation nicht, spüren aber ihre Wirkung: langsamere Diagnose durch müde Löser, wiederholte Incidents aus unbehobenen Ursachen und das Ausscheiden von Menschen, die den Service kannten. Wo Nutzer viele Zeitzonen umspannen, prägen ihre Bedürfnisse außerhalb der Arbeitszeit die Rotation, und die Kosten, sie abzudecken, sind ein angemessenes Thema für ein Service-Level-Gespräch (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler betreibt eine Bestellplattform, einen Kundenkontoservice und eine Lagerintegration. Eine Rotation aus sechs Ingenieuren zweier Produktteams und einer kleinen Betriebsgruppe teilt sich eine wöchentliche Bereitschaftsschicht. Alle Zahlen in diesem Beispiel sind illustrativ.

Das Monats-Review zeigt einen Median von 9 Pages pro Schicht und ein 90. Perzentil von 31. Die geschäftigste Schicht hatte 58 Pages. Etwa die Hälfte aller Pages trifft außerhalb der Arbeitszeit ein, und 6 der 8 Schichten im Quartal enthielten eine Page zwischen 22:00 und 07:00 Uhr. Zeitstichproben legen nahe, dass Toil 55 Prozent der Arbeitszeit beansprucht.

Die geschäftigste Schicht fiel mit einem Zertifikatsablauf an der Lagerintegration zusammen, der die Rotation in einer Nacht 22-mal rief. Ein Plattenplatz-Alarm auf einem Batch-Server macht fast ein Viertel der Pages aus, und die meisten wurden geschlossen, indem von Hand ein temporäres Verzeichnis geleert wurde. Die Rate wiederholter Pages beträgt 41 Prozent. Eine Pareto-Sicht zeigt, dass manuelle Zertifikatserneuerungen, Platten-Bereinigung und Zugriffsanfragen die meisten Toil-Stunden beanspruchen.

Das Team nimmt sich für die nächsten vier Wochen drei Punkte vor: die Zertifikatserneuerung automatisieren, die Ursache des vollen temporären Verzeichnisses beheben und Zugriffsanfragen in ein Self-Service-Formular verlagern, das dem Identitätsteam gehört. Eine Arbeitsvereinbarung setzt eine Grenze von einer Schicht in vier je Person und einen Ruhetag nach einer Nacht mit drei oder mehr Pages. Die Rotationstiefe beträgt 6 Personen bei einem vereinbarten Bedarf von 8, daher beginnen zwei Ingenieure eines dritten Teams die Freigabeschulung.

Ein Manipulationsrisiko zeigt sich beim nächsten Review. Die Pages pro Schicht sind auf einen Median von 4 gefallen und das 90. Perzentil auf 12. Eine Führungskraft ist erfreut. Ein Teammitglied weist darauf hin, dass die Schwelle des Platten-Alarms um 20 Punkte angehoben wurde und der Batch-Server zweimal ohne Page volllief. Kundengemeldete Incidents zu verzögerten Batch-Bestellungen nahmen zu. Die Leitplanke, kundengemeldete Incidents, die das Monitoring verpasste, fing es auf. Die Schwellenänderung wird rückgängig gemacht, die Bereinigung des Verzeichnisses als Korrektur eingeplant, und das Team ergänzt eine Regel, dass jede Schwellenänderung mit Grund erfasst und nach einem Monat überprüft wird. Der Toil-Anteil im nächsten Quartal beträgt 38 Prozent (illustrativ) und wird mit der Stichprobenmethode daneben berichtet.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Ein tragfähiges Tempo schließt die Bereitschafts-Rotation ein, überprüfen Sie ihre Last also in regelmäßigem Rhythmus mit dem Team und finanzieren Sie Vorbeugung. Zu beachten ist, dass ein Ziel für weniger Pages zum Stummschalten von Alarmen führen kann.

### KI

KI kann Pages zusammenfassen, Runbook-Schritte vorschlagen und Alarme triagieren, was Toil senken kann, und sie kann neuen Toil beim Prüfen und Korrigieren ihrer Ausgabe hinzufügen. Beziehen Sie die Zeit für die Beaufsichtigung der KI in den Toil ein und koppeln Sie Page-Zahlen mit Signalen zu Schlaf und Wohlbefinden. Zu beachten ist, dass automatisierte Erstreaktion Pages vor Menschen verbergen kann, die das Risiko weiter tragen.

### Automatisierung

Automatisieren Sie die Beseitigung von Toil, wo die Arbeit repetitiv ist, und messen Sie den beseitigten Toil und die Incidents, die die Automatisierung verursachte. Zu beachten ist, dass Automatisierung ohne Verantwortung zu einer neuen Quelle von Bereitschaftsarbeit wird.

### Analytik

Berichten Sie Last je Rotation, nie je Person, mit der Zahl der Pages hinter jeder Zahl. Die Entscheidung, die dies untermauert, ist, wo in Vorbeugung zu investieren ist. Zu beachten ist, dass Pager-Daten informelle Unterbrechungen auslassen; kombinieren Sie sie also mit einer kurzen Umfrage.

## Branchenperspektive

**Startup.** Ein kleines Team hat oft keine förmliche Rotation, sodass alle ständig in Bereitschaft sind und die Kosten unsichtbar bleiben. Zählen Sie Pages und nächtliches Aufwachen in einer Tabelle und schreiben Sie die drei größten repetitiven Aufgaben auf. Gründer, die selbst den Pager tragen, sind ein Geschäftsrisiko, kein Zeichen von Einsatz.

**Kleinunternehmen.** Eine oder zwei Personen betreiben womöglich die gesamte IT. Messen Sie, was keine Werkzeuge braucht: Anrufe außerhalb der Arbeitszeit, Aufgaben, die sich wiederholen, und Urlaub, der nicht genommen werden kann. Ein Managed-Service-Provider kann einen Teil der Rotation übernehmen, wenn der Vertrag Reaktionszeiten und Zeiten nennt. Die Rotationstiefe ist oft eins, was das Hauptrisiko ist.

**Großunternehmen.** Größe bringt Follow-the-Sun-Rotationen, gemeinsame Plattformen und mehrere Lieferanten. Definieren Sie die Kennzahlen einmal, setzen Sie lokale Arbeitsfenster je Region und vermeiden Sie das Mitteln über Rotationen mit sehr verschiedenen Services. Arbeitsrechtliche Regeln mancher Länder begrenzen Bereitschaftsdienst und verlangen Ruhezeiten, und diese gehören in die Rotationsgrenzen.

**Behörden und öffentlicher Sektor.** Services brauchen womöglich Rund-um-die-Uhr-Abdeckung kraft Gesetz oder Vertrag, und die Besetzung ist an Beschaffung und Eingruppierung gebunden. Rotationsgrenzen und Ruheregeln werden oft durch Arbeitsvereinbarungen geregelt, messen Sie also gegen sie und berichten Sie, wenn sie überschritten werden. Öffentliche Rechenschaft macht offene Berichterstattung wertvoller und schwerer: Bauen Sie einen sicheren Kanal für Lastdaten und machen Sie deutlich, dass sie das System und die Besetzung beschreiben, nicht Einzelpersonen (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Das Motiv ist, die Servicequalität zu schützen und qualifizierte Menschen zu halten. Müde Löser diagnostizieren langsamer, und wenn erfahrene Menschen gehen, geht das Wissen mit. Eine Person zu ersetzen hat echte Kosten für Rekrutierung, Einarbeitung und verringerte Leistung in der Lernphase, und eine Organisation kann diese Kosten aus ihren eigenen Aufzeichnungen schätzen. Toil nimmt auch Kapazität für Verbesserung weg. Ein Team, das den größten Teil seiner Zeit mit manuellem Betrieb verbringt, kann die Incidents, die ihn verursachen, nicht verringern.

Die Kosten der Kennzahlen sind bescheiden. Das Paging-Werkzeug zählt Pages bereits, und Zeitstichproben kosten ein paar Minuten je Person und vierzehn Tage. Die größeren Kosten sind, auf die Befunde zu reagieren: Engineering-Zeit, um Toil zu beseitigen, Personal für eine tragfähige Rotation und Review-Zeit. Zählen Sie die Pflege der Automatisierung als Kosten, denn ein ungepflegter automatisierter Schritt wird zum Incident von morgen.

Der Ertrag zeigt sich als weniger Pages aus bekannten Ursachen, weniger nächtliche Unterbrechungen, Toil-Stunden, die an Verbesserungsarbeit zurückgegeben werden, geringere Abwanderung aus der Rotation und schnellere Diagnose. Keine allgemeine Zahl gilt, schätzen Sie also Ihre eigene. Multiplizieren Sie bei einer Toil-Quelle die Monatsstunden mit einem mit dem Finanzbereich vereinbarten vollen Stundensatz, vergleichen Sie das mit dem Aufwand der Beseitigung und überprüfen Sie nach zwei Zyklen. Erfassen Sie für die Tragfähigkeit der Rotation Abgänge und lange Abwesenheiten aus der Rotation und vergleichen Sie sie im Zeitverlauf mit den Lastkennzahlen, wobei Sie den Zusammenhang als zu testende Hypothese behandeln, nicht als bewiesene Ursache. Wo eine Zahl nötig ist, nennen Sie sie als Schätzung und zeigen Sie die Eingaben (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Menschen nach Pages ordnen.** Es verwandelt eine Systemkennzahl in eine Leistungsnote und lehrt Löser, Schichten zu meiden und Unterbrechungen zu verbergen. Berichten Sie nach Rotation, Schichtposition und Service.
- **Pages durch Stummschalten von Alarmen senken.** Die Zahl fällt, und die Erkennung wird schwächer. Koppeln Sie das Volumen mit Erkennung und kundengemeldeten Incidents und überprüfen Sie jede Schwellenänderung.
- **Alles Toil nennen.** Eine so weite Definition, dass sie Meetings und schwere Probleme einschließt, zerstört das Signal. Nutzen Sie die sechs Merkmale und führen Sie eine Beispielliste.
- **Ein Toil-Ziel ohne Autorität dahinter.** Eine Obergrenze, die keine Entscheidung auslösen kann, wird zu einer Zahl, über die man streitet. Vereinbaren Sie im Voraus, was geschieht, wenn sie überschritten wird, und wer entscheidet.
- **Automatisieren, bevor man versteht.** Automatisierung kann einen schlechten Prozess festschreiben und Pflege hinzufügen. Fragen Sie zuerst, ob sich der Bedarf wegentwerfen lässt, und messen Sie danach den beseitigten Toil.
- **Über ungleiche Services mitteln.** Ein Mittelwert über einen stabilen und einen fragilen Service beschreibt keinen von beiden. Zeigen Sie jeden Service und jede Rotation gesondert.
- **Messen und nicht handeln.** Lastzahlen ohne Reaktion lehren Menschen, dass die Daten nicht zählen. Hängen Sie an jeden Befund eine Entscheidung, einen Eigner und ein Review-Datum.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definitionen und Daten | Pages und Toil nach Gefühl beschrieben; keine gemeinsame Definition | Einige Rotationen zählen Pages; Toil wird diskutiert, aber nicht gemessen | Eine schriftliche Definition von Page, Schicht, außerhalb der Arbeitszeit und Toil; Paging-Daten werkzeuggestützt erhoben | Verteilungen und Timing im Trend; Toil jeden Monat per Stichprobe erfasst und geprüft | Definitionen über Teams und Lieferanten überprüft; Stichprobenaufwand dem Wert der Antworten angepasst |
| Tragfähigkeit der Rotation | Informell; dieselben wenigen Menschen absorbieren den Pager | Dienstpläne existieren; Grenzen besprochen, aber nicht aufgeschrieben | Schriftliche Grenzen für Häufigkeit und Ruhe; Rotationstiefe bekannt | Grenzen überwacht und Verletzungen mit Maßnahmen überprüft | Rotationen über Teams und Lieferanten geteilt, und die Last wird ausgeglichen, wenn sich Services ändern |
| Nutzung der Zahlen | Zum Schuldzuweisen genutzt oder ignoriert | Führungskräften gezeigt | Zuerst der Rotation gezeigt, mit den Entscheidungen, die sie stützen | Mit Leitplanken gekoppelt und in einem Rhythmus überprüft, der zu finanzierter Veränderung führt | Mit Führungskräften und Partnern geteilt, um Personal und Serviceumfang zu planen |

## Checkliste

- [ ] Page, Schicht, Fenster außerhalb der Arbeitszeit und Zusammenführungsfenster sind schriftlich definiert.
- [ ] Toil hat eine schriftliche Definition mit Beispielen und Gegenbeispielen aus unserem eigenen Service.
- [ ] Pages pro Schicht werden als Median, hohes Perzentil und geschäftigste Schicht berichtet.
- [ ] Der Anteil der Pages außerhalb der Arbeitszeit und die Rate nächtlicher Unterbrechungen werden neben dem Volumen berichtet.
- [ ] Last wird nach Rotation, Schichtposition und Service berichtet, nie nach benannter Person.
- [ ] Der Toil-Anteil der Zeit wird nach Plan per Stichprobe erfasst, mit aufgeschriebener Methode.
- [ ] Die fünf größten Toil-Quellen und die häufigsten wiederkehrenden Page-Ursachen stehen im Verbesserungs-Backlog.
- [ ] Rotationsgrenzen und Ruheregeln stehen in einer Teamvereinbarung, und die Rotationstiefe wird jedes Quartal geprüft.
- [ ] Jede Lastkennzahl hat eine Leitplanke auf derselben Seite, einschließlich Erkennung und kundengemeldeter Incidents.
- [ ] Jedes Review endet mit einer Entscheidung, einem Eigner und einem Datum.
- [ ] Schwellen- und Alarmänderungen werden mit Grund protokolliert und nach einem Monat überprüft.

## KI-Prompts

**Die Last einer Rotation überprüfen und nach Mustern suchen.**

```text
I help run the on-call rotation for [service or group of services]. The rotation
has [number] people and a shift length of [length]. Our working window is
[hours and time zone], and our protected sleep window is [hours]. Below is
anonymized paging data for [period], with columns [list columns]:

[paste data with names removed]

Describe the distribution of pages per shift, the share of pages out of hours,
and the share of shifts with a night interruption. Point out the busiest shifts,
repeating alert groups, and any pattern by day or shift position. Report at
rotation and service level only, never by person. Do not invent benchmark values
or targets. List your assumptions and what you could not determine from the data.
```

**Aufgaben als Toil, Engineering oder Overhead klassifizieren.**

```text
Our team runs [service]. We define toil as work that is manual, repetitive,
automatable, tactical, without enduring value, and growing with the service.
Here is a list of recent tasks with approximate hours: [paste list].

For each task, say whether it fits toil, engineering, or overhead, and name which
of the six characteristics it meets or misses. Flag tasks that are borderline and
say what extra information would settle them. Suggest how each toil source might
be removed by design, automated, or handed to an owning team, without inventing
savings. List your assumptions and questions for the team.
```

**Manipulationsvektoren und Leitplanken für unsere Lastkennzahlen entwerfen.**

```text
We report these on-call and toil metrics for [rotation name]: [list metrics with
definitions]. They are shown to [audience] to support [decision]. Our data comes
from [paging tool, work tracker, survey].

For each metric, list realistic ways it could improve without the rotation being
better off, and propose a guardrail metric or practice that would reveal each one.
Then say how the guardrail itself could be gamed. Do not invent benchmark values.
List your assumptions and any definitions I should tighten.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die verwandten Themen und Leitplanken zu finden, wenn Sie einem Dashboard eine Bereitschafts- oder Toil-Kennzahl hinzufügen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass Änderungen an diesem Thema jede Kennzahl mit einem Manipulationsvektor und einer Leitplanke gekoppelt halten.

## Wichtigste Erkenntnisse

- Messen Sie die Last auf der Rotation, nach Schicht, Service und Tageszeit, und ordnen Sie nie die Menschen darauf.
- Zählen Sie, wann Unterbrechungen geschehen, ebenso wie wie viele, denn Pages bei Nacht kosten mehr als Pages in der Bürozeit.
- Definieren Sie Toil eng über seine sechs Merkmale, schätzen Sie seinen Zeitanteil mit einer einfachen Methode und beurteilen Sie den Trend.
- Verknüpfen Sie Pages und Toil-Quellen mit Problemarbeit und mit Änderungen durch Automatisierung oder Entwurf und messen Sie den tatsächlich beseitigten Toil.
- Koppeln Sie jede Lastkennzahl mit einer Leitplanke wie Erkennung und kundengemeldeten Incidents, damit niedrigere Zahlen nicht durch Wegschauen erkauft werden können.
- Behandeln Sie hohe Last als Bitte um Investition, mit einer Entscheidung, einem Eigner und einem Review-Datum.

## Quellen und weiterführende Literatur

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Eliminating Toil", https://sre.google/sre-book/eliminating-toil/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Being On-Call", https://sre.google/sre-book/being-on-call/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018. Chapter "Eliminating Toil", https://sre.google/workbook/eliminating-toil/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
7. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
8. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
9. Wikipedia, [Sleep deprivation](https://en.wikipedia.org/wiki/Sleep_deprivation).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
12. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
