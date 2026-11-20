# Kennzahlen für kontinuierliche Verbesserung

**Verbesserung ist eine Gewohnheit aus Bemerken, Ausprobieren und Prüfen. Messen Sie also, ob Ideen zu Änderungen werden, ob Änderungen auf ihre Wirkung geprüft werden und ob dieselben Probleme wiederkehren, und halten Sie die Arbeit in den Händen der Menschen, die sie tun.**

## Überblick und Motivation

Eines der Prinzipien des Agilen Manifests sagt, dass das Team in regelmäßigen Abständen reflektiert, wie es wirksamer werden kann, und sein Verhalten entsprechend anpasst. ITIL drückt dieselbe Überzeugung in ihren Leitprinzipien und ihrer Praktik der kontinuierlichen Verbesserung aus: Services und die Art, wie sie betrieben werden, sollten ständig verbessert werden, in kleinen Schritten, auf Grundlage von Belegen. Beide verlangen dasselbe, nämlich eine ständige Gewohnheit der Verbesserung und kein gelegentliches Programm.

Die meisten Organisationen glauben, dies zu tun. Viele haben ein Meeting im Stil einer Retrospektive, das eine Liste von Maßnahmen erzeugt, ein Register von Verbesserungsideen oder einen jährlichen Verbesserungsplan. Das übliche Versagen ist, dass die Liste wächst und wenig geschieht. Maßnahmen werden in einem Meeting vereinbart und vergessen. Verbesserungen werden vorgenommen und nie geprüft, sodass niemand weiß, ob sie halfen. Dasselbe Problem kehrt unter anderem Namen wieder. Kennzahlen der kontinuierlichen Verbesserung sind der Weg, den Unterschied zwischen einer Organisation zu erkennen, die sich verbessert, und einer, die nur darüber redet.

Der [kontinuierliche Verbesserungsprozess](https://en.wikipedia.org/wiki/Continual_improvement_process) hat tiefe Wurzeln im Qualitätsmanagement. Der [Plan-Do-Check-Act](https://en.wikipedia.org/wiki/PDCA)-Zyklus, verbunden mit W. Edwards Deming und Walter Shewhart, beschreibt Verbesserung als wiederholte kleine Experimente: eine Änderung planen, ausprobieren, das Ergebnis prüfen und auf das Gelernte handeln. [Kaizen](https://en.wikipedia.org/wiki/Kaizen) ist der japanische Begriff für die kontinuierliche Verbesserung von Arbeitspraktiken unter Beteiligung aller. Beide stammen aus der [Lean-Produktion](https://en.wikipedia.org/wiki/Lean_manufacturing) und dem Toyota-Produktionssystem und sind heute Standardvokabular in Service- und Softwarearbeit. ITIL 4 bietet ein Modell der kontinuierlichen Verbesserung, dessen Schritte fragen, wie die Vision lautet, wo man jetzt steht, wo man hinwill, wie man dorthin kommt, zu handeln, ob man ankam und wie man den Schwung hält. Es ist ein Anstoß für Gespräche, kein mechanisch zu befolgendes Verfahren.

Einige Ideen helfen.

- **Den Engpass verbessern.** Die [Theory of Constraints](https://en.wikipedia.org/wiki/Theory_of_constraints), von Eliyahu Goldratt entwickelt, sagt, dass der Durchsatz eines Systems durch seinen langsamsten Teil begrenzt ist, sodass Verbesserungen anderswo wenig bringen. Finden Sie den Engpass mit den Flusskennzahlen früher im Buch und verbessern Sie ihn zuerst (siehe Thema 2.3, Laufende Arbeit und Warteschlangentheorie).
- **Ursachen finden, nicht Symptome.** Die [Ursachenanalyse](https://en.wikipedia.org/wiki/Root_cause_analysis) sucht die zugrunde liegenden Ursachen eines Problems, damit ihre Behebung seine Wiederkehr stoppt. Der übermäßige Einsatz einfacher Methoden kann in die Irre führen, wenn Probleme mehrere Ursachen haben, untersuchen Sie also beitragende Faktoren.
- **Annahmen hinterfragen.** [Double-Loop-Learning](https://en.wikipedia.org/wiki/Double-loop_learning), ein Begriff von Chris Argyris und Donald Schön, geht über das Beheben der Handlung hinaus und untersucht die Überzeugungen und Regeln, die zu ihr führten. Teams, die nur Symptome beheben (Single-Loop-Learning), begegnen tendenziell denselben Problemen wieder.
- **Verbesserung braucht Kapazität.** Ein Team am Anschlag hat keinen Raum zum Verbessern. Geschützte Kapazität ist eine Voraussetzung, und ein Tempo, das durchgehalten werden kann, gehört dazu, Verbesserung möglich zu machen (siehe Thema 9.2, Kennzahlen für Zufriedenheit und Wohlbefinden).

Verbesserungskennzahlen laden zu eigener Manipulation ein. Ist die Zahl abgeschlossener Maßnahmen ein Ziel, vereinbaren Teams triviale Maßnahmen. Sind Einsparungen aus Verbesserungen ein Ziel, blähen sich die Behauptungen auf. Ist die Zahl eingereichter Ideen ein Ziel, strömen Ideen herein und keine wird bearbeitet. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt: Messen Sie, ob Verbesserungen wirken, und nicht, wie beschäftigt das Verbesserungsprogramm aussieht (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Leitprinzipien

- **Verbesserung gehört den Menschen, die die Arbeit tun.** Sie sehen die Probleme und möglichen Lösungen zuerst.
- **In kleinen Schritten arbeiten und jeden prüfen.** Kleine Experimente verringern Risiko und beschleunigen Lernen.
- **Nachverfolgung und Wirkung messen, nicht Aktivität.** Abgeschlossene Maßnahmen und bestätigte Wirkungen zählen mehr als erzeugte Ideen.
- **Zuerst den Engpass verbessern.** Aufwand abseits des Engpasses bringt wenig.
- **Ursachen beheben.** Suchen Sie beitragende Faktoren und hinterfragen Sie die Annahmen dahinter.
- **Kapazität für Verbesserung schützen.** Sie geschieht nicht in freier Zeit, die nicht existiert.
- **Lernen feiern, auch aus fehlgeschlagenen Experimenten.** Eine ausprobierte Idee, die nicht funktionierte, ist Information.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Nachverfolgungsrate von Maßnahmen | Anteil der in Reviews vereinbarten Verbesserungsmaßnahmen, die bis zu ihrem vereinbarten Datum abgeschlossen waren | bis zum Datum abgeschlossene Maßnahmen / im Zeitraum fällige Maßnahmen | Prozent | Verbesserungsregister oder Team-Backlog | Kontinuierliche Verbesserung | Gelieferte Reflexionsmaßnahmen | Monatlich |
| Alter des Verbesserungs-Backlogs | Alter offener Verbesserungselemente, mit Blick auf die ältesten | Median und 85. Perzentil des Alters offener Elemente in Tagen; Alter des ältesten | Tage | Verbesserungsregister | Kontinuierliche Verbesserung | Alter des Backlogs | Monatlich |
| Rate der Wirkungsprüfungen | Anteil der abgeschlossenen Verbesserungen, deren Wirkung gegen eine Basislinie geprüft wurde | abgeschlossene Verbesserungen mit erfasster Vorher-Nachher-Prüfung / abgeschlossene Verbesserungen | Prozent | Verbesserungsregister mit Feldern für Basislinie und Ergebnis | Kontinuierliche Verbesserung; Messung und Berichterstattung | Lernen aus Experimenten | Vierteljährlich |
| Zeit von der Idee zum Versuch | Zeit vom Benennen einer Verbesserungsidee bis zum ersten Versuch in der echten Arbeit | Median und 85. Perzentil der Tage von benannt bis zum ersten Versuch | Tage | Verbesserungsregister | Kontinuierliche Verbesserung | Schnelles Feedback zu Änderungen | Monatlich |
| Anteil von Ideen aus der Praxis | Anteil der Verbesserungsideen, die von Menschen stammen, die die Arbeit tun, auf Teamebene gezählt | von Teammitgliedern bei der Arbeit benannte Ideen / benannte Ideen | Prozent | Verbesserungsregister | Kontinuierliche Verbesserung | Selbstorganisierende Teams | Vierteljährlich |
| Wiederholungsrate von Problemen | Anteil der Probleme, die nach einer Verbesserung wiederkehren, die ihre Ursache beseitigen sollte | binnen eines genannten Zeitraums nach Abschluss einer verwandten Verbesserung wiederkehrende Probleme / Verbesserungen, die mit einer verwandten Ursache geschlossen wurden | Prozent | Incident-, Problem- und Verbesserungsdatensätze, nach Ursache verknüpft | Problemmanagement; kontinuierliche Verbesserung | Entwichener Defekt nach einer Korrektur | Vierteljährlich |
| Kapazitätsanteil für Verbesserung | Anteil der Teamkapazität, der auf Verbesserungsarbeit verwendet wird | als Verbesserung markierte Kapazität oder abgeschlossene Elemente / gesamte Kapazität oder abgeschlossene Elemente | Prozent | Arbeitstypen im Work-Tracker | Kontinuierliche Verbesserung; Kapazitäts- und Leistungsmanagement | Zeit für Reflexion und technische Exzellenz | Monatlich |

Definieren Sie „Verbesserungselement“ im Register und halten Sie es getrennt von gewöhnlicher Backlog-Arbeit und von korrigierenden Reparaturen. Die Uhr der Nachverfolgung startet, wenn die Maßnahme mit Eigner und Datum vereinbart wird. Eine Wirkungsprüfung verlangt eine vor der Änderung erfasste Basislinie und einen definierten Indikator, und das Ergebnis darf „keine Wirkung“ oder „nicht erkennbar“ lauten. Die Wiederholungsrate hängt von einer erfassten Ursache ab, und die Zuordnungsregel steht im Register. Alle Kennzahlen beschreiben Teams und das System, nicht Einzelne.

## Empfehlungen

### Verbesserung sichtbar machen und besitzen

**1. Führen Sie eine sichtbare Verbesserungsliste je Team.** Legen Sie Verbesserungselemente dorthin, wo das Team ohnehin hinschaut, etwa auf sein Board oder Backlog, und markieren Sie sie. Jedes Element hat einen Eigner, ein benanntes Problem, eine erwartete Wirkung, einen Indikator und ein Datum. Eine Liste, die in einem separaten Werkzeug oder einem Dokument lebt, das niemand öffnet, verfällt. Zeigen Sie die ältesten Elemente, damit sich die Liste nicht verstecken kann.

**2. Halten Sie regelmäßige, kurze Reflexion.** In stetigem Rhythmus fragt das Team, was gut läuft, was im Weg steht und was als Nächstes auszuprobieren ist. Halten Sie sie kurz und konkret und enden Sie mit einer kleinen Zahl von Maßnahmen mit Eignern. Entscheidet sich Ihr Team, dafür ein benanntes Format zu nutzen, etwa eine Retrospektive, ist das seine Wahl. Das Prinzip ist die regelmäßige Gewohnheit.

**3. Vereinbaren Sie weniger Maßnahmen und schließen Sie sie ab.** Zwei oder drei abgeschlossene Maßnahmen lehren mehr als ein Dutzend, die es nicht sind. Prüfen Sie die Nachverfolgungsrate. Rutschen Maßnahmen wiederholt, fragen Sie warum: unklare Verantwortung, keine Kapazität oder zu große Maßnahmen. Zerlegen Sie große in kleine Schritte.

**4. Schützen Sie Kapazität.** Reservieren Sie einen Anteil der Kapazität für Verbesserung und planen Sie ihn wie jede andere Arbeit (siehe Thema 2.5, Kennzahlen für Lieferprognosen und Planung). Ist das Team überlastet, verringern Sie den Zufluss neuer Arbeit, statt Verbesserung abzusagen, denn Verbesserung ist oft das, was die Überlast senkt. Verfolgen Sie den genutzten Anteil.

### Finden, was zählt

**5. Suchen Sie den Engpass.** Nutzen Sie Flussdaten, um zu finden, wo Arbeit wartet und was den Durchsatz begrenzt. Verbesserungen am Engpass heben die Leistung des ganzen Systems. Verbesserungen anderswo verschieben vielleicht nur den Arbeitsstapel. Wenden Sie dieselbe Sicht auf Incident-Bearbeitung, Change-Genehmigung und Erfüllung von Anfragen an.

**6. Wählen Sie anhand von Belegen.** Wählen Sie Verbesserungen aus Daten und von den Menschen, die dem Schmerz am nächsten sind: wiederkehrende Incidents, lange Wartezeiten, Nacharbeit, Nutzerbeschwerden, Hindernislisten. Verknüpfen Sie jede Verbesserung mit einem erfassten Problem. Das bindet das Verbesserungsregister an das Problemmanagement (siehe Thema 4.1, Kennzahlen für das Problemmanagement).

**7. Suchen Sie Ursachen und beitragende Faktoren.** Fragen Sie bei wiederkehrenden Problemen mehr als einmal nach dem Warum und suchen Sie Bedingungen ebenso wie Auslöser. Hüten Sie sich, bei der ersten plausiblen Ursache oder bei einer Person stehenzubleiben. Hinterfragen Sie Annahmen: Warum arbeiten wir so, und wird die Regel noch gebraucht? Dort zahlt sich Double-Loop-Learning aus.

### Erst klein ausprobieren, dann prüfen

**8. Führen Sie kleine Experimente mit Basislinie durch.** Nennen Sie die Änderung, die erwartete Wirkung und den Indikator. Erfassen Sie die Basislinie vor der Änderung. Probieren Sie es im kleinen Maßstab für kurze Zeit aus und vergleichen Sie dann. Der Plan-Do-Check-Act-Zyklus ist ein einfacher Rahmen. Je kürzer die Zeit von der Idee zum Versuch, desto schneller das Lernen.

**9. Prüfen Sie die Wirkung und erfassen Sie sie ehrlich.** Vergleichen Sie nach einer Änderung den Indikator mit der Basislinie und mit dem, was sich sonst änderte. Erfassen Sie, ob die Wirkung gesehen wurde, nicht gesehen wurde oder unklar ist. Teams, die nie „keine Wirkung“ finden, prüfen wahrscheinlich nicht sorgfältig (siehe Thema 6.5, Wertrealisierung und Geschäftsergebnisse).

**10. Behalten Sie, was funktioniert, und lassen Sie fallen, was nicht.** Verbreiten Sie Verbesserungen, die funktionieren, an andere Teams, wo sie passen, und stellen Sie Änderungen ein, die Kosten ohne Nutzen brachten. Überprüfen Sie ältere Änderungen erneut, denn Bedingungen ändern sich. Standards sollten sich entwickeln, während das Team lernt.

### Die Gewohnheit lebendig halten

**11. Machen Sie es sicher, vorzuschlagen und aufzuhören.** Menschen bringen Ideen ein, wenn frühere gehört und bearbeitet wurden. Sie schweigen, wenn Ideen verschwinden oder dem Vorschlagenden Zusatzarbeit bringen. Antworten Sie auf jede Idee, auch wenn die Antwort „nicht jetzt“ lautet, mit einem Grund. Erlauben Sie Teams, Verbesserungen zu stoppen, die nicht funktionieren.

**12. Machen Sie Verbesserung nicht zum Ziel.** Setzen Sie keine Ziele für die Zahl der Ideen, die Zahl geschlossener Maßnahmen oder behauptete Einsparungen. Berichten Sie Nachverfolgung, Wirkungsprüfungen, Wiederholungsrate und einige Geschichten. Vergleichen Sie jedes Team mit seiner eigenen Vergangenheit und teilen Sie gute Ideen über Teams, ohne sie zu ordnen.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Nachverfolgungsrate von Maßnahmen | Triviale Maßnahmen vereinbaren; Fälligkeitsdaten verschieben; schließen, ohne zu tun | Größe und Wert der Maßnahmen überprüfen; Datumsänderungen protokolliert; Rate der Wirkungsprüfungen |
| Alter des Verbesserungs-Backlogs | Alte Elemente ohne Entscheidung als „wird nicht gemacht“ schließen; Elemente teilen, um das Alter zurückzusetzen | Gründe für das Schließen erfassen; ohne Maßnahme geschlossene Elemente verfolgen; die ältesten überprüfen |
| Rate der Wirkungsprüfungen | Eine Prüfung ohne Basislinie erfassen; nur Erfolge prüfen | Basislinie vor der Änderung datiert; Null- und negative Ergebnisse einbeziehen |
| Zeit von der Idee zum Versuch | Einen Plan einen Versuch nennen; triviale Varianten ausprobieren | Einen Versuch als Änderung in der echten Arbeit definieren; auf die Bedeutung der erprobten Ideen schauen |
| Anteil von Ideen aus der Praxis | Vorgesetzte, die Ideen unter Namen von Personal einreichen; verpflichtende Ideenquoten | Ideen nach Urheber auf Teamebene erfasst; keine Quoten; das Team fragen |
| Wiederholungsrate von Problemen | Für dasselbe Problem unterschiedliche Ursachen erfassen; den früheren Datensatz unter anderem Typ schließen | Nach Ursache mit erfasster Regel zuordnen; Review durch jemanden außerhalb des Teams |
| Kapazitätsanteil für Verbesserung | Gewöhnliche Arbeit als Verbesserung markieren; Zeit planen, die dann für Lieferung genutzt wird | Elemente stichprobenartig auf Typ prüfen; mit tatsächlich aufgewendeter Zeit vergleichen |

Ein gesunder Befund ist eine kurze Liste mit Maßnahmen, die enden, Ideen, die binnen Tagen oder Wochen den Versuch erreichen, Wirkungen, die geprüft werden und manchmal enttäuschen, fallende wiederkehrende Probleme und geschützte Kapazität, die genutzt wird.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Große Verbesserungsprogramme | Sichtbar; können große Probleme angehen | Langsam; vom Tagesgeschäft abgekoppelt |
| Kleine kontinuierliche Experimente | Schnelles Lernen, geringes Risiko | Können strukturelle Probleme verpassen |
| Zentrales Verbesserungsteam | Können und Konsistenz | Fern von der Arbeit; Ideen stocken |
| Vom Team besessene Verbesserung | Relevant und motiviert | Wechselnde Qualität; braucht Unterstützung |
| Ideenprogramme mit Belohnungen | Erzeugen Volumen | Quoten und Manipulation; geringe Qualität |
| Belegbasierte Auswahl | Konzentriert sich auf echte Probleme | Braucht Daten und Zeit |
| Förmliche Wirkungsprüfungen | Ehrliches Lernen | Aufwand; kann bürokratisch wirken, wenn schwer |
| Keine Prüfungen | Schnell | Kein Lernen darüber, was funktioniert |

Die Antwort in Worten ist, Verbesserung nah an den Teams zu halten, in kleinen Experimenten mit leichten Wirkungsprüfungen, gestützt auf einige Menschen, die bei Daten und Methode helfen, und auf Führungskräfte, die Kapazität schützen und auf die Ergebnisse hören.

## Fragen für die Diskussion im Team

**1. Welche Verbesserung haben wir in unserem letzten Review vereinbart, und ist sie geschehen?**
Schauen Sie auf die Maßnahmen. Fragen Sie bei jeder, ob sie abgeschlossen, aufgegeben oder vergessen wurde und warum. Die Moderation sollte die Gründe festhalten. Einigen Sie sich, wie viele Maßnahmen das Team wirklich abschließen kann, und kürzen Sie die nächste Liste darauf.

**2. Von welcher Änderung, die wir zuletzt vornahmen, wissen wir, dass sie half, und woher wissen wir es?**
Wählen Sie eine jüngere Änderung und suchen Sie die Basislinie und das Ergebnis. Gibt es keine, besprechen Sie, wie man beim nächsten Mal prüft. Entscheiden Sie einen einfachen Indikator für das nächste Experiment.

**3. Was kommt immer wieder, egal wie oft wir es beheben?**
Listen Sie wiederkehrende Probleme auf. Fragen Sie bei einem, warum es wiederkehrt und welche Annahme hinter dem aktuellen Ansatz sitzt. Erwägen Sie, ob die Korrektur ein Symptom behandelt. Wählen Sie ein wiederkehrendes Problem für einen tieferen Blick.

**4. Wo wartet Arbeit am längsten, und was ist der Engpass?**
Nutzen Sie Flussdaten. Fragen Sie, ob die Verbesserungen, an denen das Team arbeitet, den Engpass berühren. Wenn nicht, besprechen Sie, ob der Fokus zu ändern ist.

**5. Wie viel unserer Woche geht in Verbesserung, und was schützt das?**
Vergleichen Sie den Plan mit der Wirklichkeit. Besprechen Sie, was die Zeit nimmt. Einigen Sie sich auf eine Regel, einen kleinen Anteil zu schützen, und darauf, was zu streichen ist, wenn das Team überlastet ist.

**6. Was geschah mit der letzten Idee, die jemand vorschlug, und wie erfuhr die Person davon?**
Verfolgen Sie eine Idee. Wurde sie beantwortet, ausprobiert oder ging sie verloren? Besprechen Sie, wie sicherzustellen ist, dass jede Idee eine Antwort und einen Grund bekommt.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams sind die Hauptquelle von Verbesserungsideen und die besten Richter, ob sie funktionieren. Sie sollten eine sichtbare Liste führen, in jedem Zyklus einige Maßnahmen abschließen, Wirkungen prüfen und teilen, was sie lernen. Sie brauchen geschützte Kapazität und Führungskräfte, die reagieren.

### Service- und Betriebsteams

Betriebsteams sehen wiederkehrende Incidents, langsame Genehmigungen und manuellen Toil jeden Tag. Sie sollten Verbesserungen mit erfassten Problemen verknüpfen, wiederkehrende Probleme verfolgen und Zeit für Korrekturen schaffen, die ihre eigene Last senken. Ihr Feedback zeigt, ob Verbesserungen den Nutzer erreichen.

### Führung und Governance

Führungskräfte schaffen die Bedingungen: geschützte Kapazität, Sicherheit, vorzuschlagen und aufzuhören, und Aufmerksamkeit für Ergebnisse. Sie sollten Nachverfolgung und Wirkungsprüfungen verlangen, ehrliche Befunde „keine Wirkung“ akzeptieren, Quoten meiden und Verbesserungen finanzieren, die Investition brauchen. Die Governance sollte das Verbesserungsregister über Teams auf Muster ansehen, die strukturelles Handeln brauchen.

### Kunden und Nutzer

Nutzer profitieren von Services, die immer besser werden, und sie sind eine reiche Quelle von Ideen. Sie sollten gefragt werden, erfahren, was sich änderte, und eingeladen werden, die Wirkung zu prüfen. Wiederholte Beschwerden über dasselbe Problem sind ein Signal, dass Verbesserung die Ursache nicht erreicht.

## In der Praxis: ein Beispiel aus dem Service-Management

Die Gruppe für digitale Services einer nationalen Steuerbehörde betreibt ein Erklärungsportal, ein Zahlungssystem und eine Contact-Center-Plattform mit acht Teams. Jedes Team führt eine Verbesserungsliste, und die Gruppe berichtet jedes Quartal die Zahl der abgeschlossenen Verbesserungen. Die Zahlen unten sind illustrativ.

Die Leiterin der Serviceverbesserung bemerkt, dass die berichtete Zahl steigt, während dieselben Schmerzpunkte bleiben. Sie überprüft die Listen. Über die Gruppe sind 212 Verbesserungselemente offen, mit einem medianen Alter von 7 Monaten und dem ältesten bei 26 Monaten. Von den in den Reviews des letzten Quartals vereinbarten Maßnahmen waren 38 Prozent bis zu ihrem Datum abgeschlossen. Von den 64 im Vorjahr abgeschlossenen Verbesserungen hatten nur 9 eine erfasste Basislinie und ein Ergebnis, eine Rate der Wirkungsprüfungen von 14 Prozent, und 3 dieser 9 zeigten keine Wirkung. Wiederkehrende Probleme sind häufig: Von 25 Incidents, die mit Verbesserungen verknüpft waren, die ihre Ursache beseitigen sollten, kehrten 11 binnen sechs Monaten wieder, eine Wiederholungsrate von 44 Prozent. Verbesserungsarbeit nimmt etwa 4 Prozent der Kapazität ein.

Die Gruppe vereinbart mit den Teams vier Änderungen. Jedes Team kürzt seine Liste auf die Elemente, die es in den nächsten zwei Monaten angehen kann, und nennt, warum es den Rest zurückstellt oder schließt. Teams vereinbaren nicht mehr als drei Maßnahmen zugleich, mit benannten Eignern. Für jede Verbesserung werden vor der Änderung eine Basislinie und ein Indikator erfasst, und das Ergebnis wird danach erfasst, einschließlich „keine Wirkung“. Ein vierteljährliches Review betrachtet die teamübergreifend wiederkehrenden Probleme und wählt zwei für eine tiefere Ursachenanalyse, wobei das Contact-Center- und das Zahlungsteam eine gemeinsame Ursache zusammen untersuchen. Jedes Team reserviert 10 Prozent der Kapazität für Verbesserung, geschützt durch eine Regel, dass eine Absage die Zustimmung der Teamleitung und einen Protokolleintrag braucht. Der Bericht an die Führung wechselt von der Zahl abgeschlossener Verbesserungen zu Nachverfolgung, Wirkungsprüfungen und wiederkehrenden Problemen.

Nach zwei Quartalen fallen die offenen Elemente auf 74, mit einem medianen Alter von 2 Monaten. Die Nachverfolgung steigt auf 81 Prozent, die Rate der Wirkungsprüfungen auf 70 Prozent, wobei 9 von 36 geprüften Verbesserungen keine Wirkung zeigten und fallengelassen wurden. Die Wiederholungsrate der Probleme fällt auf 20 Prozent, und die Zeit von der Idee zum Versuch hat einen Median von 9 Tagen. Der stellvertretende Direktor bittet um ein Ziel von 100 abgeschlossenen Verbesserungen pro Quartal. Die Leiterin der Serviceverbesserung erklärt, dass die Zählung der Grund war, warum die früheren Zahlen in die Irre führten, und schlägt vor, Nachverfolgung, Wirkung und Wiederholungsrate zu verfolgen. Die Entscheidung wird festgehalten, und die Bitte eines Teams, ein vierwöchiges Experiment mit seinem Genehmigungsprozess durchzuführen, wird bewilligt.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Halten Sie Verbesserung in den Händen der Menschen, die die Arbeit tun, und überprüfen Sie Maßnahmen in regelmäßigem Rhythmus. Zu beachten ist, dass ein Ziel für die Zahl der Verbesserungen triviale ermutigt.

### KI

KI kann Verbesserungen aus Tickets und Incidents vorschlagen. Verfolgen Sie den Anteil der Vorschläge, die ein Team ausprobierte, und das Ergebnis der Wirkungsprüfung. Zu beachten ist, dass ein von KI erzeugtes Backlog von Ideen das Team überlasten kann; begrenzen Sie also die laufende Arbeit.

### Automatisierung

Automatisieren Sie Erinnerungen und die Verfolgung von Verbesserungsmaßnahmen und messen Sie die Rate der Wirkungsprüfungen. Zu beachten ist, dass Automatisierung, die ohne vereinbarte Verantwortung mahnt, ignoriert wird.

### Analytik

Berichten Sie Rate der Wirkungsprüfungen und Wiederholungsrate mit Zählungen. Die Entscheidung, die dies untermauert, ist, welche Verbesserungen funktionierten. Zu beachten ist, dass Wirkungen schwer zuzuordnen sind; beschreiben Sie also die Unsicherheit.

## Branchenperspektive

**Startup.** Verbesserung geschieht ständig und informell. Führen Sie eine kurze Liste, schreiben Sie erwartete Wirkungen auf und prüfen Sie sie, und schützen Sie ein kleines Stück Zeit. Meiden Sie schwere Prozesse und achten Sie darauf, dass Verbesserung nicht ganz vom Wachstum verdrängt wird.

**Kleinunternehmen.** Ein oder zwei Menschen tun alles, und Verbesserung konkurriert mit Feuerlöschen. Wählen Sie jedes Quartal ein wiederkehrendes Problem, beheben Sie seine Ursache und prüfen Sie die Wirkung. Fragen Sie Nutzer, was sie ärgert, und handeln Sie auf eine Sache.

**Großunternehmen.** Größe macht Verbesserung ungleichmäßig und Ideen schwer teilbar. Stellen Sie ein gemeinsames Registerformat und leichtes Coaching bereit, lassen Sie Teams ihre Listen besitzen und nutzen Sie ein teamübergreifendes Forum, um zu verbreiten, was funktioniert, und gemeinsame Engpässe anzugehen. Meiden Sie zentrale Quoten.

**Behörden und öffentlicher Sektor.** Verbesserung kann durch Beschaffung, Gesetzgebung und Genehmigungsketten eingeschränkt sein und wird öffentlich geprüft. Dokumentieren Sie Experimente und ihre Ergebnisse, beziehen Sie Nutzer in die Auswahl und Prüfung von Verbesserungen ein und berichten Sie ehrlich über Wirkungen, auch über solche, die nicht funktionierten. Suchen Sie Verbesserungen, die Bürger entlasten (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind geschützte Kapazität, die Hauptkosten, der Aufwand, Basislinien und Ergebnisse zu erfassen, und etwas Coaching oder Moderation. Werkzeuge können so einfach sein wie das vorhandene Board des Teams.

Der Ertrag sind weniger wiederholte Probleme, weniger Toil, kürzere Wartezeiten und bessere Moral in Teams, die sehen, dass ihre Ideen zu Veränderung werden. Bauen Sie den Business Case aus Ihren eigenen Daten: die Kosten wiederkehrender Incidents und der durch Verbesserungen beseitigte Anteil, durch Verbesserungen mit geprüfter Wirkung gesparte Zeit und die Kosten von Verbesserungen, die vorgenommen wurden und nicht funktionierten, deren Wiederholung das Prüfen nun verhindert. Vermeiden Sie, veröffentlichte Erträge von Verbesserungsprogrammen zu zitieren, wenn Sie Quelle und Methode nicht zurückverfolgen können. Zählen Sie auch die Opportunitätskosten der Kapazität (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Abgeschlossene Verbesserungen zählen.** Teams vereinbaren triviale Änderungen. Messen Sie Nachverfolgung und Wirkung.
- **Ideenquoten.** Sie erzeugen Volumen und Rauschen. Antworten Sie auf die Ideen, die kommen.
- **Keine Basislinien.** Niemand weiß, ob etwas half. Erfassen Sie vorher und nachher.
- **Nur Erfolge erfassen.** Lernen aus Fehlschlägen geht verloren. Erfassen Sie Nullergebnisse.
- **Lange Listen ohne Beschneiden.** Die Liste verliert Glaubwürdigkeit. Kürzen Sie auf das, was das Team tun wird.
- **Verbesserung in freier Zeit.** Es gibt keine. Schützen Sie Kapazität.
- **Symptome beheben.** Das Problem kehrt zurück. Fragen Sie mehr als einmal nach dem Warum und hinterfragen Sie Annahmen.
- **Verbesserung durch ein entferntes Team.** Ideen stocken. Halten Sie sie bei den Menschen, die die Arbeit tun.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Gewohnheit und Verantwortung | Verbesserung ist gelegentlich | Reflexion findet statt; Maßnahmen gehen oft verloren | Sichtbare Teamliste mit Eignern; kleine Zahl von Maßnahmen abgeschlossen | Nachverfolgung und Zeit von der Idee zum Versuch gesteuert; Kapazität geschützt | Verbesserung ist Routine und über Teams, Lieferanten und Nutzer geteilt |
| Beleg und Wirkung | Meinungen | Einige Kennzahlen nach Änderungen | Basislinie und Ergebnis für jede Verbesserung erfasst | Wirkungsprüfungen schließen Nullergebnisse ein; wiederkehrende Probleme nach Ursache verfolgt | Lernen auf Portfolioebene leitet, wo als Nächstes zu verbessern ist, mit Partnern |
| Tiefe | Korrekturen von Symptomen | Etwas Ursachenanalyse | Ursachenanalyse für wiederkehrende Probleme | Engpässe aus Flussdaten identifiziert; Annahmen hinterfragt | Systemische Verbesserungen über den Wertstrom, mit gemeinsamer Governance |

## Checkliste

- [ ] Jedes Team hat eine sichtbare Verbesserungsliste mit Eignern, erwarteten Wirkungen und Daten.
- [ ] Regelmäßige, kurze Reflexion endet mit einer kleinen Zahl von Maßnahmen mit Eignern.
- [ ] Nachverfolgung von Maßnahmen und das Alter der ältesten Elemente werden monatlich überprüft.
- [ ] Kapazität für Verbesserung ist geplant, geschützt und verfolgt.
- [ ] Verbesserungen sind mit erfassten Problemen oder Belegen verknüpft.
- [ ] Vor jeder Änderung werden eine Basislinie und ein Indikator erfasst.
- [ ] Wirkungen werden geprüft und erfasst, auch „keine Wirkung“.
- [ ] Wiederkehrende Probleme werden nach Verbesserungen nach Ursache verfolgt.
- [ ] Jede Idee bekommt eine Antwort mit einem Grund.
- [ ] Es gibt keine Quoten oder Ziele für Ideen, Maßnahmen oder Einsparungen.

## KI-Prompts

**Verbesserungen aus Belegen auswählen.**

```text
Here are our recurring problems and obstacles with rough counts and impact:
[paste]. Here is our flow data on where work waits: [paste]. Suggest which two
or three improvements are most likely to matter, why, and what evidence would
confirm or contradict that. Recommend a small experiment for each, with a
baseline and an indicator. Do not invent figures. List your assumptions.
```

**Ein kleines Experiment entwerfen.**

```text
We want to try [change] to address [problem] in [team and process]. Design a
small experiment: the expected effect, the baseline to record now, the
indicator and how to measure it, the trial period, how to tell whether other
changes confused the result, and what we will do if there is no effect. Keep it
light. List your assumptions and risks.
```

**Eine Verbesserungsliste überprüfen.**

```text
Here is our improvement list with age, owner, and expected effect for each item:
[paste]. Identify items that are too vague, too large, or stale, suggest a
shorter list the team could finish in two months, and propose a note to explain
the items we are parking and why. Do not judge individuals. List your
assumptions.
```

**Ein wiederkehrendes Problem analysieren.**

```text
Problem: [describe]. Past fixes and when it recurred: [paste]. Suggest
contributing factors beyond the first plausible cause, assumptions to question
(double-loop learning), and a few ways to test each hypothesis cheaply. Do not
assume a single root cause. List your assumptions and questions for the team.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Verbesserungskennzahl zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Verbesserungskennzahl Nachverfolgung und Wirkung misst, mit Manipulationsvektor und Leitplanke.

## Wichtigste Erkenntnisse

- Führen Sie eine sichtbare Verbesserungsliste je Team, mit wenigen Maßnahmen mit Eignern zugleich, und schließen Sie sie ab.
- Erfassen Sie vor jeder Änderung eine Basislinie, prüfen Sie danach die Wirkung und erfassen Sie Nullergebnisse.
- Verfolgen Sie Nachverfolgung, Wirkungsprüfungen, wiederkehrende Probleme und das Alter der ältesten Elemente.
- Verbessern Sie zuerst den Engpass und suchen Sie Ursachen und die Annahmen dahinter.
- Schützen Sie Kapazität für Verbesserung innerhalb eines nachhaltigen Tempos.
- Setzen Sie keine Quoten für Ideen, Maßnahmen oder Einsparungen.

## Quellen und weiterführende Literatur

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Continual Improvement*, TSO, 2020.
2. Deming, W. E., *Out of the Crisis*, MIT Center for Advanced Engineering Study, 1982 (MIT Press edition, 2000).
3. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
4. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
5. Argyris, C., "Teaching smart people how to learn," *Harvard Business Review*, 69(3), 1991.
6. Rother, M., *Toyota Kata: Managing People for Improvement, Adaptiveness, and Superior Results*, McGraw-Hill, 2009.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
9. Wikipedia, [PDCA](https://en.wikipedia.org/wiki/PDCA).
10. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
11. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
12. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Double-loop learning](https://en.wikipedia.org/wiki/Double-loop_learning).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
