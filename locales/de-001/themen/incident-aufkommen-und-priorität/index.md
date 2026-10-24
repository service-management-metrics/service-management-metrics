# Incident-Aufkommen und Priorität

**Zählen Sie Incidents im Verhältnis zur Nutzung, die sie erzeugt hat, lesen Sie die Priorität als Mix und nicht als Wert und beobachten Sie Wiederholungen, denn die Form der Incident-Nachfrage sagt Ihnen, wo zu investieren ist, lange bevor es eine einzelne Lösungszeit tut.**

## Überblick und Motivation

Ein Incident ist in [ITIL](https://en.wikipedia.org/wiki/ITIL)-4-Begriffen eine ungeplante Unterbrechung eines Services oder eine Minderung seiner Qualität. [Incident-Management](https://en.wikipedia.org/wiki/Incident_management) ist die Praktik, die den normalen Servicebetrieb so schnell wie praktikabel wiederherstellt und den Schaden für das Geschäft begrenzt. Jeder Incident ist auch ein Signal: Etwas im Service, in seinen Changes, bei seinen Nutzern oder in seinem Monitoring hat nicht wie erwartet funktioniert. Zahl und Charakter der Incidents sind daher eine der aufschlussreichsten Nachfragemessgrößen eines Betriebsteams.

Das Volumen allein ist ein schlechter Führer. Ein Anstieg der Incidents kann bedeuten, dass der Service schlechter wurde, dass mehr Menschen ihn nutzen oder dass das Monitoring besser wurde und nun Fehler sieht, die früher unberichtet blieben. Ein Rückgang kann bedeuten, dass Zuverlässigkeitsarbeit sich auszahlte oder dass Nutzer aufhörten zu melden. Dieses Thema handelt davon, das Volumen mit genug Kontext zu lesen, um diese Geschichten zu unterscheiden: Normalisierung an der Nutzung, Aufteilung nach Kategorie und Service und Beobachtung des Prioritätsmixes und der Wiederholungsrate.

Die Priorität ist die zweite Hälfte des Themas. Die ITIL-Praxis leitet die Priorität üblicherweise aus zwei Eingaben ab: Auswirkung (wie viel vom Geschäft betroffen ist) und Dringlichkeit (wie schnell das Geschäft die Behebung braucht). Das Paar wird auf eine Prioritätsstufe abgebildet, die die erwartete Reaktion festlegt. Agile Teams haben ein enges Gegenstück darin, wie sie einen Backlog triagieren: Schweregrad- und Dringlichkeitsetiketten auf Fehlern und eine „Servicegüteklasse“ auf einem Flussboard, die entscheidet, was die Warteschlange überspringt. Die Wörter unterscheiden sich, die Frage ist dieselbe: Was muss zuerst bearbeitet werden, und warum.

Die ITIL-Sicht behandelt Incidents als Datensätze im Besitz eines Service Desks und von Lösergruppen, mit Kategorien, Prioritäten und Servicelevel-Zielen. Die agile Sicht behandelt ungeplante Arbeit als Unterbrechung des Flusses, die mit geplanter Arbeit konkurriert (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit). Beide Sichten profitieren von denselben Messgrößen, wenn die Messgrößen das System beschreiben und nicht die Menschen darin. Der [Service Desk](https://en.wikipedia.org/wiki/Help_desk_software) ist der Ort, an dem die meisten Datensätze beginnen, und seine eigenen Kennzahlen werden gesondert behandelt (siehe Thema 3.1, Kennzahlen für den Service Desk). Wie schnell auf Incidents reagiert und wie schnell sie gelöst werden, behandelt Thema 3.3, Reaktions- und Lösungszeit bei Incidents. Major Incidents haben eigene Messgrößen (siehe Thema 3.4, Kennzahlen für Major Incidents).

Mehrere Begriffe kehren unten wieder. Ein **Perzentil** ist der Wert, unterhalb dessen ein genannter Anteil der Beobachtungen liegt, das 85. Perzentil also der Wert, den 85 Prozent der Beobachtungen nicht überschreiten. Ein **Service Level Agreement (SLA)** ist eine dokumentierte Zusage zwischen Anbieter und Kunde. Ein **Konfigurationselement (Configuration Item, CI)** ist eine Komponente, die verwaltet werden muss, um einen Service zu erbringen. Ein **Poisson-Prozess** beschreibt Ereignisse, die unabhängig mit einer durchschnittlichen Rate eintreffen, ein nützliches erstes Modell für Incident-Ankünfte (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

Die Warnung aus Thema 1.2 (Goodharts Gesetz und die Psychologie von Kennzahlen) gilt hier stärker als an den meisten Orten. Incident-Zahlen und Prioritäten werden von Menschen eingegeben, oft unter Druck, und die an einen Datensatz gehängte Zahl lässt sich ändern, indem man ändert, wie der Datensatz geschrieben wird. Jede Kennzahl unten hat einen Manipulationsvektor, und die Leitplanken gehören zur Definition.

## Leitprinzipien

- **Vor dem Vergleich normalisieren.** Eine Zahl bedeutet wenig ohne die Nutzung, die Nutzerbasis oder das Transaktionsvolumen, aus dem sie kam. Vergleichen Sie Raten zwischen Perioden und Services und zeigen Sie daneben die Rohzahl.
- **Den Mix lesen, nicht eine einzelne Zahl.** Prioritätsverteilung, Kategorienverteilung und der Anteil der Wiederholungen sagen zusammen mehr als jede Summe.
- **Priorität ist eine Regel, keine Stimmung.** Leiten Sie sie mit einer schriftlichen Matrix aus Auswirkung und Dringlichkeit ab und messen Sie, wie oft sie nachträglich geändert wird.
- **Incidents von Anfragen trennen.** Eine Anfrage nach etwas Normalem ist kein Fehler. Beides zusammenzuzählen bläht das Incident-Volumen auf und verbirgt, womit der Service Desk seine Zeit verbringt (siehe Thema 3.5, Kennzahlen für die Erfüllung von Serviceanfragen).
- **Wiederholungen sind das wertvollste Signal.** Ein wiederkehrender Incident weist auf ein noch nicht gelöstes Problem hin (siehe Thema 4.1, Kennzahlen für das Problemmanagement).
- **Services und Teams messen, nie Agenten.** Zählungen nach Person laden zur Rangfolge ein, und Rangfolge verfälscht die Daten (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).
- **Erwarten, dass sich das Volumen aus Gründen bewegt, die nicht Qualität sind.** Releases, Jahreszeiten, Kampagnen und Änderungen der Meldekanäle verschieben die Zahlen. Annotieren Sie das Diagramm.

## Kennzahlendefinitionen

Die Tabelle listet die Kennzahlen dieses Themas. Uhren und Grenzen stehen in der Formelspalte. „Geschlossen“ und „eröffnet“ beziehen sich auf Zeitstempel im Incident-Datensatz; die Eröffnungszeit ist, wenn der Datensatz angelegt oder vom Monitoring-System erzeugt wird, und die Schließzeit ist, wenn der Incident als gelöst bestätigt und geschlossen wird.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Incident-Volumen je Service | Zahl der in einem Zeitraum für einen Service eröffneten Incidents | Incidents mit einer Eröffnungszeit innerhalb des Zeitraums, dem betroffenen Service zugeordnet; Serviceanfragen, in einen übergeordneten Datensatz zusammengeführte Duplikate und als irrtümlich erfasst stornierte Datensätze sind ausgeschlossen | Anzahl | Incident-Datensätze des ITSM-Werkzeugs | Incident-Management | Produktionsfehler oder ungeplante Arbeitselemente je Team | Wöchentlich, monatlich überprüft |
| Normalisierte Incident-Rate | Incidents im Verhältnis zur Nutzung des Services | Im Zeitraum eröffnete Incidents / Nutzungsmaß für denselben Zeitraum und Geltungsbereich (aktive Nutzer, Sitzungen oder Transaktionen, je Service gewählt und erfasst) x 1.000; das Nutzungsmaß muss aus einer anderen Quelle als dem Incident-Werkzeug stammen | Incidents pro 1.000 Nutzungseinheiten | ITSM-Werkzeug plus Nutzungsdaten aus Analytik oder Monitoring | Incident-Management; Service-Level-Management | Fehlerdichte je Release oder je Nutzer | Monatlich |
| Prioritätsmix | Anteil der eröffneten Incidents auf jeder Prioritätsstufe | Incidents mit der bei der Eröffnung erfassten Priorität / alle im Zeitraum eröffneten Incidents, für jede Stufe gezeigt; umklassifizierte Incidents werden mit der Eröffnungspriorität gezählt und mit der Schließpriorität erneut gezeigt | Prozent je Stufe | ITSM-Werkzeug, einschließlich des Verlaufs von Prioritätsänderungen | Incident-Management | Schweregradverteilung von Fehlern; Mix der Servicegüteklassen | Monatlich |
| Rate der Prioritätsumklassifizierung | Anteil der Incidents, deren Priorität sich zwischen Eröffnung und Schließen änderte | Im Zeitraum geschlossene Incidents, deren Schließpriorität von der Eröffnungspriorität abweicht / im Zeitraum geschlossene Incidents | Prozent | Audit-Trail des ITSM-Werkzeugs | Incident-Management | Re-Triage-Rate im Fehler-Backlog | Monatlich |
| Kategorienkonzentration | Anteil des Incident-Volumens, den die größten Kategorien halten | Incidents in den fünf größten Kategorien nach Anzahl / alle kategorisierten Incidents im Zeitraum; unkategorisierte Incidents werden als eigener Anteil gesondert berichtet | Prozent | Kategorie- und Servicefelder des ITSM-Werkzeugs | Incident-Management; Problemmanagement | Fehlercluster nach Komponente oder Epic | Monatlich |
| Wiederholungsrate von Incidents | Anteil der Incidents, die für denselben Service, dasselbe CI und dieselbe Kategorie innerhalb eines genannten Fensters wiederkehren | Incidents im Zeitraum mit einem früheren geschlossenen Incident für denselben Service, dasselbe CI und dieselbe Kategorie im vorangehenden Fenster (zum Beispiel 30 Tage, einmal festgelegt und erfasst) / im Zeitraum eröffnete Incidents; ein wieder eröffneter Datensatz zählt als Wiedereröffnung, nicht als Wiederholung | Prozent | ITSM-Werkzeug und CMDB-Verknüpfungen | Incident-Management; Problemmanagement | Regressions- oder entwichene-Fehler-Rate | Monatlich |
| Wiedereröffnungsrate | Anteil geschlossener Incidents, die wieder eröffnet wurden | Im Zeitraum geschlossene Incidents, die innerhalb eines genannten Fensters (zum Beispiel 7 Tage) später wieder eröffnet wurden / im Zeitraum geschlossene Incidents | Prozent | Statusverlauf des ITSM-Werkzeugs | Incident-Management | Wieder eröffnete Fehler; Nacharbeit | Monatlich |
| Anteil durch Monitoring erkannter Incidents | Anteil der Incidents, die zuerst vom Monitoring gemeldet wurden, bevor ein Nutzer sie meldete | Incidents, deren erstes Ereignis ein automatischer Alarm ist / alle im Zeitraum eröffneten Incidents; von einer Person aus einem Alarm eröffnete Incidents zählen nach der Alarmzeit | Prozent | ITSM-Werkzeug, Monitoring-Integration | Monitoring und Event-Management; Incident-Management | Alarmgetriebene gegenüber kundengemeldeten Fehlern | Monatlich |

Zwei Anmerkungen zu den Definitionen. Erstens ist „Priorität“ in dieser Tabelle die Priorität, die der Datensatz trägt, und sie sollte aus der Matrix von Auswirkung und Dringlichkeit stammen und nicht aus der Reihenfolge, in der Menschen Arbeit erledigt haben wollen. Zweitens ist das für einen Zeitraum berichtete Volumen eine Zählung von Eröffnungen, nicht eine Zählung offener Incidents an einem bestimmten Tag. Die Zahl der offenen Incidents zu einem Zeitpunkt ist eine Backlog-Messgröße und gehört zur Alterung (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents).

## Empfehlungen

### Sorgfältig zählen

**1. Schreiben Sie auf, was ein Incident ist und was nicht.** Viele Werkzeuge halten Incidents, Anfragen, Alarme und Probleme in einer Tabelle. Entscheiden Sie, welche Datensatztypen zählen, dokumentieren Sie den Filter und wenden Sie ihn jedes Mal an. Eine Änderung des Filters ändert den Trend, protokollieren Sie Änderungen also mit Datum und Grund (siehe Thema 1.5, Datenquellen und Instrumentierung).

**2. Entduplizieren Sie, bevor Sie berichten.** Erzeugt ein Fehler fünfzig Tickets, ist der übergeordnete Incident das Ereignis, und die Kinder sind ein Maß seiner Reichweite. Berichten Sie beide Zahlen: übergeordnete Incidents dafür, wie viele Fehler auftraten, und verknüpfte Datensätze dafür, wie viele Menschen sie spürten. Beides zu vermischen lässt einen großen Ausfall wie einen Monat Routinearbeit aussehen.

**3. Ordnen Sie Incidents Services ebenso zu wie Teams.** Der Service ist das, was das Geschäft kauft und versteht. Nutzen Sie den Servicekatalog (ITIL schreibt im Englischen „service catalogue“), um die Liste festzulegen, und überprüfen Sie die Zuordnung von CIs, wenn sich Services ändern. Ein Incident ohne Service ist ein zu behebendes Datenqualitätsproblem, und der Anteil solcher Datensätze ist berichtenswert.

### Volumen normalisieren und deuten

**4. Normalisieren Sie an einem Nutzungsmaß aus einer anderen Quelle.** Teilen Sie durch aktive Nutzer, Sitzungen oder Transaktionen aus Analytik oder Monitoring und nicht aus dem Incident-Werkzeug. Ein Service, der seine Nutzer und seine Incidents verdoppelt hat, ist nicht schlechter geworden, einer, dessen Incidents sich bei flacher Nutzung verdoppelten, schon. Zeigen Sie die Rohzahl neben der Rate, damit niemand glaubt, der Nenner verberge etwas.

**5. Nutzen Sie eine Kontrollkarte, keinen Trendpfeil.** Incident-Zahlen schwanken von Woche zu Woche, auch wenn sich nichts geändert hat. Eine [Kontrollkarte](https://en.wikipedia.org/wiki/Control_chart) zeigt den üblichen Schwankungsbereich, sodass das Team auf ein Signal reagiert und Rauschen in Ruhe lässt. Wochenzahlen, die sich innerhalb der Grenzen bewegen, sind keine Nachricht, eine anhaltende Serie auf einer Seite des Durchschnitts schon. Bereinigen Sie um [Saisonalität](https://en.wikipedia.org/wiki/Seasonality) wie Quartalsende, Feiertage und Release-Zyklen, indem Sie gleichartige Zeiträume vergleichen.

**6. Annotieren Sie das Diagramm mit Ereignissen.** Markieren Sie Releases, Migrationen, Kampagnen, Ausfälle von Abhängigkeiten und Änderungen am Meldekanal. Ein neues Self-Service-Formular oder ein sichtbarerer Knopf „Problem melden“ kann das Volumen erhöhen, während der Service gleich bleibt. Die meisten Volumenstreitigkeiten enden schnell, wenn das Diagramm zeigt, was in dieser Woche geschah.

### Priorität mit Regeln steuern

**7. Leiten Sie die Priorität mit einer veröffentlichten Matrix aus Auswirkung und Dringlichkeit ab.** Definieren Sie die Auswirkung anhand betroffener Nutzer und Geschäftsfunktionen und die Dringlichkeit danach, wie bald der Schaden wächst. Veröffentlichen Sie die Matrix auf der Seite, auf der Agenten die Werte wählen, mit zwei oder drei ausgearbeiteten Beispielen je Zelle. Vermeiden Sie frei wählbare Prioritätsfelder; sie werden zu Verhandlung, und die Zahl der „Priorität 1“-Incidents wird zu einem Maß für Überzeugungskraft.

**8. Berichten Sie Mix und Umklassifizierungsrate zusammen.** Ein gesunder Mix hat eine kleine Zahl der höchstprioren Incidents und eine breite Basis niedrigerer. Wächst die oberste Stufe, fragen Sie, ob der Schaden wuchs oder ob Kunden lernten, dass „kritisch“ Aufmerksamkeit bekommt. Die Umklassifizierungsrate zeigt, wie gut die Matrix passt: Häufige Änderungen beim Schließen bedeuten, dass die Regel unklar oder die erste Beurteilung überstürzt ist. Überprüfen Sie jeden Monat eine Stichprobe umklassifizierter Datensätze in der Gruppe, der die Matrix gehört.

**9. Halten Sie Priorität und agile Servicegüteklasse abgestimmt.** Wo Lieferteams incidentgetriebene Arbeit erhalten, verwenden Sie dieselben Wörter und dieselbe Matrix oder veröffentlichen Sie eine klare Zuordnung. Ein Team, das einen Fehler „hoch“ nennt, während der Betrieb denselben Fehler „mittel“ nennt, verliert Zeit mit Übersetzung. Reservieren Sie eine ausdrückliche Zulage für beschleunigte Arbeit, damit die Unterbrechung in den Flussmessgrößen sichtbar ist (siehe Thema 2.1, Flussmaße).

### Nach Wiederholungen und Mustern suchen

**10. Verfolgen Sie Wiederholungen und Wiedereröffnungen als getrennte Signale.** Eine Wiedereröffnung bedeutet, dass die erste Behebung nicht hielt, eine Wiederholung bedeutet, dass dieselbe Art Fehler nach einer ordentlichen Behebung zurückkam. Das erste weist auf die Qualität der Lösung hin, das zweite auf eine ungelöste Ursache. Verknüpfen Sie wiederkehrende Cluster mit Problemdatensätzen und hören Sie auf, einen Incident als behoben zu zählen, wenn er wahrscheinlich wiederkommt (siehe Thema 4.1, Kennzahlen für das Problemmanagement).

**11. Nutzen Sie das [Pareto-Prinzip](https://en.wikipedia.org/wiki/Pareto_principle), um zu wählen, wo Sie hinsehen.** Sortieren Sie Kategorien und Services nach Incident-Zahl und sehen Sie, wie wenige den größten Teil des Volumens ausmachen. Untersuchen Sie die obersten wenigen, bevor Sie neue Berichte für den Rest bauen. Die Form ist ein Anstoß für eine [Ursachenanalyse](https://en.wikipedia.org/wiki/Root_cause_analysis), keine Schlussfolgerung, denn eine Kategorie mit hoher Zahl kann schlicht die sein, die sich leicht kategorisieren lässt.

**12. Geben Sie die Befunde an Lieferung und Service Desk zurück.** Teilen Sie die Kategorien- und Wiederholungssichten mit den Teams, die die Services bauen und ändern, in einem regelmäßigen Gespräch statt in einem Bericht. Koppeln Sie jeden wiederkehrenden Cluster mit einem Eigner, einem nächsten Schritt und einem Datum und legen Sie die Arbeit im selben Backlog wie andere Prioritäten ab (siehe Thema 2.6, Kennzahlen für Backlog und Refinement). Das Volumen fällt, wenn Ursachen beseitigt werden, und das braucht geplante Kapazität.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Incident-Volumen je Service | Incidents als Anfragen erfassen, nicht zusammengehörige Tickets zusammenführen, Nutzer vom Melden abhalten oder Duplikate als „kein Fehler gefunden“ schließen | Nutzergemeldetes Kontaktvolumen und Anfragevolumen neben dem Incident-Volumen; Zufriedenheit und Abbruch vom Service Desk; Stichprobe von Anfragen, die wie Fehler lesen |
| Normalisierte Incident-Rate | Den Nenner wählen, der die beste Zahl ergibt, oder die Nutzungsdefinition zwischen Perioden ändern | Festes Nutzungsmaß je Service, im Register festgehalten; Rohzahlen neben der Rate gezeigt |
| Prioritätsmix | Prioritäten senken, um ruhig zu wirken, oder anheben, um Aufmerksamkeit zu bekommen; eine niedrige Priorität vergeben, um ein Reaktionsziel zu vermeiden | Rate der Prioritätsumklassifizierung; monatliche Stichprobenprüfung gegen die Matrix aus Auswirkung und Dringlichkeit; vom Kunden berichtete Auswirkung |
| Rate der Prioritätsumklassifizierung | Die Priorität nicht ändern, wenn sie sich ändern sollte, damit die Rate stabil wirkt; sie erst beim Schließen ändern, um das Ziel zu erfüllen | Stichprobe von Datensätzen, bei denen sich die Auswirkung während des Incidents änderte; Überprüfung der Incident-Zeitverläufe |
| Kategorienkonzentration | Eine Sammelkategorie nutzen oder eine große Kategorie in mehrere zerlegen, um Konzentration zu verbergen | Anteil unkategorisierter und „sonstiger“ Datensätze; regelmäßige Überprüfung der Kategorienliste; Abgleich von Kategorien mit Lösungsnotizen |
| Wiederholungsrate von Incidents | Einen neuen Incident mit anderer Formulierung oder anderem CI eröffnen, um die Verknüpfung zu vermeiden; früh schließen, um eine Wiedereröffnung zu vermeiden | Überprüfung nahezu doppelter Datensätze nach Text und Service; Wiedereröffnungsrate; Verknüpfungsrate zu Problemdatensätzen |
| Wiedereröffnungsrate | Nutzer bitten, ein neues Ticket zu öffnen, statt wieder zu eröffnen; Tickets spät schließen, um Wiedereröffnungen zu vermeiden | Zahl neuer Tickets, die auf ein kürzlich geschlossenes verweisen; Kundenbestätigung der Lösung; Verteilung der Zeit bis zum Schließen |
| Anteil durch Monitoring erkannter Incidents | Verrauschte Alarme erzeugen, die automatisch Incidents eröffnen, oder Menschen Nutzermeldungen als Alarme umetikettieren lassen | Alarmqualitätsmessgrößen wie der Anteil handlungsfähiger Alarme (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität); Prüfung der Incident-Quelle |

Ein gesunder Befund ist unspektakulär und erklärbar. Normalisierte Raten sind für stabile Services stabil oder fallen und steigen, wenn Nutzung oder Änderung aus einem Grund steigt, den das Diagramm zeigt. Der Prioritätsmix ist stabil, die Umklassifizierung niedrig, und eine kleine Menge von Kategorien erhält gezielte Aufmerksamkeit. Wiederholungen und Wiedereröffnungen fallen nach geplanter Problemarbeit, und für eine Bewegung jeder Kennzahl gibt es eine Erklärung, die jemand geben kann, ohne die Zahl zu verteidigen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Rohe Incident-Zahlen | Einfach, leicht zu erklären, immer verfügbar | Mischen Nutzung, Qualität und Meldeverhalten in einer Zahl |
| Raten gegen Nutzung | Erlaubt fairen Vergleich über Perioden und Services | Braucht eine vertrauenswürdige Nutzungsquelle; Nenner lassen sich anfechten |
| Feste Matrix aus Auswirkung und Dringlichkeit | Einheitliche Priorität über Teams; prüfbar | Kann starr wirken; Grenzfälle brauchen Urteil und einen Weg zum Übersteuern |
| Frei wählbare Priorität | Schnell und flexibel für erfahrene Agenten | Uneinheitlich, offen für Druck, im Zeitverlauf schwer vergleichbar |
| Detaillierter Kategorienbaum | Zeigt, woher die Nachfrage kommt | Unter Druck schwer zu nutzen; Menschen wählen den ersten Treffer oder „sonstige“ |
| Kurze Kategorienliste mit Tags | Schnell anzuwenden und konsistent | Weniger Detail; kann Muster verbergen, die Textanalyse brauchen |
| Wiederholungsrate nach CI und Kategorie | Weist auf ungelöste Ursachen hin | Hängt von guten CI-Daten ab; falsche Verknüpfungen und Auslassungen kommen beide vor |

Akzeptieren Sie, dass keine einzelne Messgröße richtig ist. Nutzen Sie Rohzahlen für die Kapazitätsplanung, Raten für die Gesundheit, den Prioritätsmix für das Risiko und Wiederholungen für die Verbesserung und zeigen Sie jedes als das, was es ist. Halten Sie die Kategorienliste kurz genug, dass Menschen sie nutzen, und verbessern Sie den Baum nur, wenn eine Entscheidung feineres Detail braucht.

## Fragen für die Diskussion im Team

**1. Was zählt hier als Incident, und wendet jeder die Regel gleich an?**
Nehmen Sie zehn jüngere Datensätze und bitten Sie jede Person, sie als Incident, Anfrage oder etwas anderes zu kennzeichnen. Vergleichen Sie die Antworten und besprechen Sie Uneinigkeiten. Die Moderation sollte nach Gewohnheiten suchen, etwa jedes Ticket einer leitenden Person als Incident zu behandeln, und sich dann auf eine schriftliche Regel mit Beispielen einigen. Halten Sie das Datum fest, damit spätere Trends richtig gelesen werden.

**2. Als das Incident-Volumen letztes Quartal stieg, was wussten wir damals über Nutzung und Änderung?**
Legen Sie das Diagramm neben eine Zeitleiste von Releases, Kampagnen und Nutzungszahlen. Fragen Sie, welcher Anstieg erklärt war und welcher nicht. Die Diskussion zeigt meist, wie selten der Nenner auf der Seite steht. Einigen Sie sich, welches Nutzungsmaß jeder Service künftig trägt.

**3. Wie wird die Priorität entschieden, und wann hat sie uns zuletzt überrascht?**
Gehen Sie die Matrix aus Auswirkung und Dringlichkeit mit einem jüngeren Beispiel jeder Prioritätsstufe durch. Fragen Sie, wo Agenten raten und wo Kunden oder Führungskräfte drücken. Vergleichen Sie Eröffnungs- und Schließpriorität einiger Datensätze. Entscheiden Sie eine Änderung an der Matrix oder ihren Beispielen, die Streit verringert.

**4. Welche drei Kategorien nehmen den größten Teil unseres Incident-Volumens ein, und wer arbeitet daran, die Ursache zu beseitigen?**
Listen Sie die obersten Kategorien auf und für jede den Eigner der zugrunde liegenden Ursache. Lautet die Antwort „niemand“, ist das ein Befund. Fragen Sie, ob die Kategorie ein echter Cluster oder eine Etikettiergewohnheit ist. Wählen Sie einen Cluster, den Sie in diesem Quartal mit dem Lieferteam untersuchen.

**5. Wie unterscheiden wir eine Wiederholung von einer Wiedereröffnung, und was tun wir bei jeder?**
Zeigen Sie dem Team zwei oder drei Paare von Datensätzen und fragen Sie, welche Wiederholungen sind. Besprechen Sie, was eine Wiedereröffnung über die Qualität der ersten Behebung sagt und was eine Wiederholung über die Ursache. Die Moderation sollte die Gruppe dazu lenken, wiederkehrende Cluster mit Problemdatensätzen zu verknüpfen, statt sie einzeln zu schließen. Einigen Sie sich, wer sie überprüft und wie oft.

**6. Was wären wir versucht zu ändern, wenn unsere Incident-Zahl jede Woche von leitenden Führungskräften überprüft würde?**
Bitten Sie die Gruppe, sich die Zahl an einer Wand vorzustellen. Welche Gewohnheiten würden sich verschieben: wie erfasst wird, wie Tickets zusammengeführt werden, wie Prioritäten gesetzt werden? Benennen Sie den Druck offen und ohne Schuldzuweisung. Einigen Sie sich, welche Leitplanke die Verschiebung zeigen würde und wer sie ansieht.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams erhalten das Ergebnis dieses Themas als Nachfrage. Kategorien- und Wiederholungssichten zeigen, welche Teile des Produkts den meisten Ärger machen, und der Prioritätsmix zeigt, wie viel Unterbrechungsarbeit einzuplanen ist. Teams sollten incidentgetriebene Arbeit als Teil ihrer Kapazität behandeln, sie in Flussmessgrößen sichtbar halten und Wiederholungscluster nutzen, um Zuverlässigkeitsarbeit im Backlog zu begründen (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit). Incidents pro Release zu zählen ist ein nützlicher Trend, sollte aber nie zu einer Schuldmessgröße für einzelne Entwickler werden.

### Service- und Betriebsteams

Service- und Betriebsteams legen die Datensätze an und spüren den Druck rund um die Priorität. Sie gewinnen durch eine klare Matrix, eine kurze Kategorienliste und schnelle Wege, Duplikate zu verknüpfen. Sie sollten die Daten in ihren eigenen Werkzeugen prüfen, etwa den Anteil unkategorisierter Datensätze und die Umklassifizierungsrate, bevor es andere tun. Betriebsteams sind gut platziert, die monatliche Stichprobenprüfung durchzuführen und wiederkehrende Cluster in das Problemmanagement zu speisen.

### Führung und Governance

Führungskräfte wollen wissen, ob der Service besser wird und wo zu investieren ist. Sie sollten normalisierte Raten, den Prioritätsmix und die Wiederholungssicht mit Annotationen anfordern und einer einzelnen Volumenzahl widerstehen. Ziele für „weniger Incidents“ laden zu Unterdrückung ein, setzen Sie Erwartungen also stattdessen an Ergebnisse wie Kundenauswirkung und Verringerung von Wiederholungen. Governance sollte die Prioritätsmatrix besitzen und Änderungen daran genehmigen, mit vermerkter Wirkung auf Trendlinien.

### Kunden und Nutzer

Kunden erleben Incidents als unterbrochene Arbeit, nicht als Kategorien. Sie brauchen einen einfachen Weg, einen Fehler zu melden, eine faire Priorität auf Basis ihrer Auswirkung und ehrliche Updates. Werden Meldungen entmutigt oder wirken Prioritäten willkürlich, fällt das Volumen, und mit ihm fällt das Vertrauen. Teilen Sie die Hauptbefunde in Begriffen, die Nutzer wiedererkennen, etwa verbesserte Services und beseitigte Probleme (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Krankenhauses betreut ein Patientenaktensystem, ein Terminplanungssystem und ein Werkzeug für Mitarbeiter-Nachrichten. Alle Zahlen in diesem Beispiel sind illustrativ.

Der Monatsbericht zeigt 640 Incidents im letzten Monat des Quartals, nach 520 im Vormonat. Die Führung fordert einen Wiederherstellungsplan. Die Serviceeignerin des Terminplanungssystems, dessen Zahl am stärksten stieg, bittet darum, sich die Daten anzusehen, bevor sie zustimmt, dass der Service schlechter wurde.

Drei Fakten kommen zutage. Erstens gewann das Terminplanungssystem in diesem Monat eine neue Klinikgruppe, und die aktiven Nutzer stiegen um etwa 30 Prozent (illustrativ). Normalisiert war die Incident-Rate pro 1.000 Sitzungen ungefähr flach. Zweitens waren 90 der zusätzlichen Datensätze mit einem übergeordneten Incident verknüpft, einer ausgefallenen Schnittstelle zu einem Laborsystem, sodass die Zahl verschiedener Fehler nur um eine Handvoll stieg. Drittens verschob sich der Prioritätsmix: Der Anteil der höchsten Priorität lag im Vormonat bei 2 Prozent und jetzt bei 7 Prozent. Die Umklassifizierungsrate hatte sich ebenfalls verdoppelt, und eine Stichprobe von 20 Datensätzen zeigte, dass etwa die Hälfte der hohen Prioritäten beim Schließen gesenkt worden war.

Das Team trifft drei Entscheidungen. Es berichtet übergeordnete Incidents und verknüpfte Datensätze getrennt. Es nimmt aktive Sitzungen als Nenner in den Bericht auf. Und es hält mit Service Desk und klinischen Leitungen eine halbstündige Sitzung ab, um die Matrix aus Auswirkung und Dringlichkeit auf die gezogenen Datensätze anzuwenden, was zeigt, dass „eine Klinik kann keine Patienten buchen“ von manchen Agenten als mittel und von anderen als hoch behandelt worden war. Die Matrix erhält zwei klinische Beispiele je Zelle.

Das Manipulationsrisiko, das sie auffangen, ist leise. Eine Führungskraft hatte Agenten gebeten, für das Terminplanungssystem Priorität 1 zu vermeiden, weil jede ein Review auslöste, sodass Datensätze mit niedrigerer Priorität eröffnet und später angehoben oder gar nicht angehoben wurden. Umklassifizierungsrate und Stichprobenprüfung deckten das Muster auf. Das Team vereinbart, dass Reviews dem Lernen dienen, veröffentlicht diese Aussage und verfolgt den Anteil der unter der Schließpriorität eröffneten Incidents als Leitplanke. Auch die Kategorienkonzentration zeigt den Schnittstellenfehler oben auf der Liste, sodass ein Problemdatensatz eröffnet und mit dem Schnittstellenteam eine Korrektur eingeplant wird.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Überprüfen Sie die Incident-Nachfrage in regelmäßigen Verbesserungsgesprächen mit den Produktteams, denen die betroffenen Services gehören, und wählen Sie eine wiederkehrende Ursache, die zu beseitigen ist. Zu beachten ist, dass ein Ziel „weniger Incidents“ ehrliches Berichten verringern kann; halten Sie also einen Anteil durch Monitoring erkannter Incidents neben der Zahl.

### KI

KI kann Incidents in großer Menge klassifizieren und priorisieren, was Prioritätsmix und Kategorienkonzentration verschiebt, ohne dass sich die echte Auswirkung ändert. Koppeln Sie den Prioritätsmix mit einer stichprobenartigen menschlichen Prüfung der Ehrlichkeit der Priorität und berichten Sie die Umklassifizierungsrate für von KI vergebene Prioritäten. Zu beachten ist, dass ein auf vergangenen Tickets trainiertes Modell alte Kategoriegewohnheiten wiederholt; achten Sie also auf neue Arten von Incidents, die unter alten Etiketten erfasst werden.

### Automatisierung

Erfassen Sie Incident-Anlage, Prioritätsänderungen und Monitoring-Alarme automatisch, damit das Volumen aus Ereignissen gezählt wird, und messen Sie den Schritt der automatischen Klassifizierung an seiner Fehlerrate. Zu beachten ist, dass Alarmstürme Incident-Zahlen erzeugen, die Werkzeuge spiegeln und nicht Nutzerschaden; normalisieren Sie also nach Nutzung und entduplizieren Sie.

### Analytik

Normalisieren Sie das Volumen an der Nutzung und zeigen Sie die Priorität als Mix im Zeitverlauf, mit wiederkehrenden Incidents, die mit einer Ursache verknüpft sind. Die Entscheidung, die dies untermauert, ist, wo in Vorbeugung zu investieren ist. Zu beachten ist, dass eine niedrige Zahl hochpriorer Incidents zu klein für einen Monat-zu-Monat-Vergleich ist; nutzen Sie also längere Fenster.

## Branchenperspektive

**Startup.** Das Volumen ist klein, und das Team kennt jeden Incident, Raten und Matrizen können sich also schwer anfühlen. Führen Sie eine einfache Zählung nach Service und eine kurze Kategorienliste und schreiben Sie auf einer Seite auf, was als Incident zählt. Achten Sie auf Wiederholungen, denn ein kleines Team kann einen wiederkehrenden Fehler rasch beseitigen und Zeit zurückgewinnen.

**Kleinunternehmen.** Der Service Desk ist womöglich eine einzelne Person mit einem gehosteten Werkzeug. Nutzen Sie die Standardberichte des Werkzeugs, halten Sie die Priorität auf wenige Stufen mit einer einfachen Regel für Auswirkung und Dringlichkeit und prüfen Sie, dass Anfragen nicht als Incidents gezählt werden. Vergleichen Sie Monat zu Monat mit Hinweisen auf Änderungen, etwa neues Personal oder neue Software.

**Großunternehmen.** Viele Services, Lieferanten und Desks machen Konsistenz zur Hauptsache. Einigen Sie sich auf eine Matrix aus Auswirkung und Dringlichkeit, ein Kategorienschema mit begrenzter Tiefe und eine Regel zur Entduplizierung und lassen Sie lokale Teams Tags hinzufügen, ohne das gemeinsame Schema zu ändern. Normalisieren Sie nach Service und überprüfen Sie Trends mit Kontrollkarten und Annotationen. Von Lieferanten verursachte Incidents brauchen eine gemeinsame Definition in Verträgen (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA).

**Behörden und öffentlicher Sektor.** Incidents können Berichtspflichten, Prüfbedarf und öffentliches Interesse mit sich bringen, besonders wo Services die Rechte oder die Sicherheit von Bürgerinnen und Bürgern berühren. Dokumentieren Sie die Prioritätsmatrix und das Kategorienschema, führen Sie eine Prüfspur der Prioritätsänderungen und seien Sie vorsichtig mit jeder veröffentlichten Zahl, denn öffentliche Berichterstattung kann starken Druck darauf erzeugen, wie Datensätze geschrieben werden. Nutzungsdaten können durch Datenschutzregeln begrenzt sein, nennen Sie also den Nenner, den Sie legitim nutzen dürfen (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Das Motiv ist Nachfragesteuerung. Incidents verbrauchen qualifizierte Zeit, unterbrechen geplante Arbeit und stören Nutzer. Volumen, Priorität und Wiederholungen zu verstehen lässt eine Organisation Ursachen beseitigen, die Besetzung an der echten Nachfrage ausrichten und Führungskräften zeigen, wo sich Zuverlässigkeitsarbeit auszahlen würde.

Die Kosten haben drei Teile. Die Einrichtung umfasst die Definition von Incident und Anfrage, die Abstimmung von Prioritätsmatrix und Kategorienschema und die Verknüpfung von Nutzungsdaten mit Services. Die laufenden Kosten sind der Aufwand, Datensätze sauber zu halten, eine monatliche Stichprobenprüfung und eine Person, die den Bericht pflegt. Ein dritter Kostenpunkt ist die Zeit, auf die Befunde zu handeln, aus der der größte Teil des Ertrags kommt, planen Sie dafür also Kapazität ein.

Der Ertrag wird am besten über Muster beschrieben, die Sie selbst messen können. Dazu gehören weniger Wiederholungen nach Problemarbeit, weniger Zeit in Prioritätsstreitigkeiten, weniger überraschende Eskalationen und eine bessere Übereinstimmung zwischen Besetzung und Nachfrage. Vermeiden Sie es, eine prozentuale Verringerung der Incidents zu versprechen; sie hängt von Service, Ausgangslage und geleisteter Arbeit ab. Die Gesamtbetriebskosten bestehen überwiegend aus der Zeit von Menschen, zählen Sie sie also und vergleichen Sie sie mit der Zeit, die wiederkehrende Incidents derzeit verbrauchen.

## Anti-Muster und Fallstricke

- **Eine rohe Zahl als Gesundheitswert berichten.** Nutzung, Änderung und Meldeverhalten bewegen sie. Zeigen Sie normalisierte Raten, Rohzahlen und Annotationen zusammen.
- **Ziele für weniger Incidents.** Sie belohnen Unterdrückung und falsche Etikettierung. Setzen Sie Ziele für die Verringerung von Wiederholungen und Kundenauswirkung und behalten Sie die Incident-Zahl als Information.
- **Anfragen als Incidents zählen.** Das Volumen steigt, und der Service sieht schlechter aus, als er ist. Trennen Sie die Datensatztypen und berichten Sie jeden.
- **Frei wählbare Priorität.** Priorität wird zu Verhandlung, und der Mix wird bedeutungslos. Nutzen Sie eine veröffentlichte Matrix und prüfen Sie stichprobenartig auf Konsistenz.
- **Ein Kategorienbaum, den niemand nutzt.** Menschen wählen den ersten Treffer, und „sonstige“ wächst. Halten Sie ihn kurz, überprüfen Sie „sonstige“ monatlich und beschneiden Sie Ungenutztes.
- **Jedes verknüpfte Ticket als eigenen Fehler zählen.** Ein einziger Ausfall dominiert den Monat. Berichten Sie übergeordnete Incidents und die Zahl verknüpfter Datensätze.
- **Agenten oder Teams nach Incident-Zahlen ordnen.** Zählungen nach Person spiegeln Arbeitsverteilung und Ticketgewohnheiten. Aggregieren Sie auf Services und überprüfen Sie Muster, nicht Menschen.
- **Wiederholungen ignorieren.** Derselbe Fehler wird immer wieder behoben, und niemand besitzt die Ursache. Verknüpfen Sie Wiederholungen mit Problemdatensätzen und weisen Sie einen Eigner zu.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definitionen und Zählen | Menschen sind uneins, was ein Incident ist; Zahlen stammen aus Ad-hoc-Exporten | Einige Teams filtern Anfragen von Incidents; Regeln unterscheiden sich | Eine schriftliche Definition, ein Filter und eine Entduplizierungsregel für alle Teams | Definitionsänderungen protokolliert und in Trenddiagrammen gezeigt; Anteil unkategorisierter Datensätze verfolgt | Definitionen mit Lieferanten und Kunden überprüft und überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| Normalisierung und Deutung | Nur Rohzahlen | Nutzungsdaten bei wenigen Services genutzt | Ein benanntes Nutzungsmaß je Service aus einer getrennten Quelle | Kontrollkarten mit Annotationen in Reviews genutzt | Nutzungs-, Änderungs- und Incident-Daten über Teams und Lieferanten verknüpft, um Nachfrage zu erklären |
| Prioritätspraxis | Priorität nach Gefühl gewählt | Matrix existiert in einigen Teams | Eine Matrix mit Beispielen, dort gezeigt, wo die Priorität gewählt wird | Mix und Umklassifizierungsrate monatlich überprüft und stichprobenartig geprüft | Matrix gemeinsam mit Kunden und klinischen oder fachlichen Eignern abgestimmt, wenn sich Bedingungen ändern |
| Wiederholungen und Muster | Wiederholungen werden aus dem Gedächtnis bemerkt | Kategorienlisten gelegentlich überprüft | Wiederholungs- und Wiedereröffnungsraten monatlich mit genanntem Fenster berichtet | Wiederkehrende Cluster mit Problemdatensätzen, Eignern und Daten verknüpft | Ursachenbeseitigung über Teams und Lieferanten finanziert und bis zu verringerter Nachfrage verfolgt |

## Checkliste

- [ ] Eine schriftliche Definition trennt Incidents von Anfragen, Alarmen und Problemen.
- [ ] Übergeordnete Incidents und verknüpfte Datensätze werden getrennt berichtet.
- [ ] Jeder Incident ist einem Service aus dem Servicekatalog zugeordnet.
- [ ] Jeder Service hat ein benanntes Nutzungsmaß aus einer anderen Quelle als dem Incident-Werkzeug.
- [ ] Berichte zeigen die Rohzahl, die normalisierte Rate und Annotationen für Releases und Kampagnen.
- [ ] Eine Kontrollkarte wird genutzt, bevor jemand auf eine Änderung des Wochenvolumens reagiert.
- [ ] Die Priorität wird aus einer veröffentlichten Matrix aus Auswirkung und Dringlichkeit mit Beispielen abgeleitet.
- [ ] Prioritätsmix und Umklassifizierungsrate werden jeden Monat zusammen überprüft.
- [ ] Die Kategorienliste ist kurz, und der Anteil „sonstiger“ und unkategorisierter Datensätze wird verfolgt.
- [ ] Wiederholungs- und Wiedereröffnungsraten verwenden genannte Fenster und werden getrennt berichtet.
- [ ] Wiederkehrende Cluster sind mit Problemdatensätzen mit einem Eigner verknüpft.
- [ ] Kein Bericht ordnet einzelne Agenten nach Incident-Zahlen.

## KI-Prompts

**Eine Definition des Incident-Volumens auf Mehrdeutigkeit prüfen.**

```text
We count incident volume for [service or team] from [ITSM tool]. Our current
filter is [describe record types, statuses, and exclusions] and our period is
[period]. Review the definition for ambiguity, including how requests, duplicates,
merged tickets, and cancelled records are handled. Suggest a clear written rule
and a short list of examples that would settle disagreements. Do not invent
benchmark values. List your assumptions and the questions I should answer to
complete the definition.
```

**Eine normalisierte Incident-Rate entwerfen.**

```text
For the service [service name] I want an incident rate normalized by usage. The
available usage measures are [list, for example active users, sessions,
transactions] from [source]. Compare the options, say which fits best and why,
and describe what could distort each one. Propose how to show the raw count, the
rate, and annotations for [events such as releases or campaigns] on one chart.
Do not invent figures or thresholds. List your assumptions.
```

**Eine Matrix aus Auswirkung und Dringlichkeit prüfen.**

```text
Here is our priority matrix: [paste impact levels, urgency levels, and the
resulting priorities], and here are [number] anonymized example incidents:
[paste short descriptions]. Apply the matrix to each example, point out where two
readers could reach different priorities, and suggest wording or examples that
reduce the disagreement. Identify ways the matrix could be gamed. Do not invent
response targets or benchmark values. List your assumptions.
```

**Kategorien und Wiederholungen auf Verbesserungskandidaten analysieren.**

```text
I have incident records for [period] with these fields: [list fields, for
example service, category, CI, opening time, closing time, reopen flag]. Describe
a method to find the top categories, to separate reopens from repeats using a
window of [window], and to choose [number] candidates for problem investigation.
Explain how to check for catch-all categories and near-duplicate records. Do not
invent patterns in data I have not shown you. List your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine verwandte Kennzahl definiert, und die Leitplanke, die daneben stehen sollte.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein bearbeitetes Kennzahlenthema seine Uhren, Manipulationsvektoren und Leitplanken vollständig hält.

## Wichtigste Erkenntnisse

- Das Incident-Volumen spiegelt Nutzung, Änderung und Meldeverhalten ebenso wie Qualität, also normalisieren und annotieren Sie es.
- Lesen Sie die Priorität als Mix, leiten Sie sie aus einer veröffentlichten Matrix aus Auswirkung und Dringlichkeit ab und beobachten Sie die Umklassifizierungsrate.
- Berichten Sie übergeordnete Incidents und verknüpfte Datensätze getrennt, damit ein Ausfall nicht wie ein Monat Routinearbeit aussieht.
- Wiederholungen und Wiedereröffnungen sind die nützlichsten Signale, denn sie weisen auf Ursachen und Korrekturen hin, die nicht hielten.
- Aggregieren Sie auf Services und Teams, nie auf einzelne Agenten, und koppeln Sie jede Kennzahl mit einer Leitplanke.
- Nutzen Sie Kontrollkarten und Pareto-Sichten, um zu entscheiden, wo hinzusehen ist, und geben Sie dann jedem Cluster einen Eigner und Kapazität.

## Quellen und weiterführende Literatur

1. Axelos (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. ISO/IEC 20000-1, *Information technology: Service management: Service management system requirements*, International Organization for Standardization.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [Help desk software](https://en.wikipedia.org/wiki/Help_desk_software).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
13. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
