# Kennzahlen für Major Incidents

**Messen Sie Major Incidents als seltene, teure Ereignisse, aus denen man lernt, nicht als Rangliste: Zählen Sie sie, messen Sie ihre Zeit ehrlich, bemessen Sie ihre Kundenauswirkung, prüfen Sie, dass Menschen informiert wurden, und belegen Sie, dass die Folgemaßnahmen erledigt wurden.**

## Überblick und Motivation

Ein Major Incident ist ein Incident, der ernst genug ist, um eine Reaktion jenseits der normalen Routine zu brauchen. [ITIL](https://en.wikipedia.org/wiki/ITIL), das bekannteste Rahmenwerk für IT-Service-Management, beschreibt [Incident-Management](https://en.wikipedia.org/wiki/Incident_management_(ITSM)) als die schnellstmögliche Wiederherstellung des normalen Servicebetriebs und erwartet von Organisationen, ihre ernstesten Incidents über einen eigenen, stärker koordinierten Weg zu bearbeiten. Wie eine Organisation diese Linie zieht, ist ihre eigene Entscheidung. Eine verbreitete Wahl ist ein Incident, der viele Nutzer oder einen kritischen Service betrifft und mehrere Teams unter einer Koordination zusammenarbeiten lässt. Schreiben Sie Ihre eigene Definition auf, denn jede Kennzahl in diesem Thema hängt von ihr ab.

Major Incidents sind wenige. Ein Team sieht womöglich Dutzende gewöhnlicher Incidents pro Woche und zwei oder drei Major Incidents pro Quartal. Das ändert, wie man misst. Die gewöhnliche Statistik von Incident-Volumen und Lösungszeit (siehe Thema 3.2, Incident-Aufkommen und Priorität, und Thema 3.3, Reaktions- und Lösungszeit bei Incidents) setzt viele Ereignisse voraus und belohnt Durchschnitte. Bei einer Handvoll Major Incidents pro Zeitraum wird ein Durchschnitt von einer schlechten Nacht dominiert, eine Trendlinie ist überwiegend Rauschen, und ein [Perzentil](https://en.wikipedia.org/wiki/Percentile) ist bei fünf Datenpunkten bedeutungslos (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen). Der ehrliche Ansatz ist, jeden Major Incident als eigene Zeile mit eigener Zeitleiste zu zeigen und nur über längere Fenster zusammenzufassen.

Die agile und die ITIL-Sicht treffen sich hier direkter als irgendwo sonst im Buch. ITIL liefert die Struktur: einen erklärten Major Incident, einen benannten Koordinator, definierte Kommunikation an Betroffene und ein Review danach. Die [agile](https://en.wikipedia.org/wiki/Agile_software_development) und die [Site-Reliability-Engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering)-Tradition liefern die Gewohnheiten: einen [Incident Commander](https://en.wikipedia.org/wiki/Incident_commander), der die Reaktion leitet, ein schuldfreies Review dessen, was geschah, und einen Fokus auf Lernen, der kontinuierliche Verbesserung speist. Googles *Site Reliability Engineering* beschreibt sowohl das Incident-Command-Muster als auch die Praxis des Postmortem-Reviews (siehe Quellen). Ein [Postmortem](https://en.wikipedia.org/wiki/Postmortem_documentation) ist in diesem Sinn ein schriftlicher Bericht über einen Incident, seine Ursachen und die folgenden Maßnahmen, und der Begriff wird hier austauschbar mit „Post-Incident-Review“ verwendet.

Dieses Thema behandelt fünf Fragen. Wie oft geschehen Major Incidents? Wie lange dauern sie, und wie viel dieser Zeit vergeht, bevor jemand einen erklärt? Wie viele Nutzer, und welche, haben es gespürt? Haben Menschen rechtzeitig und in gleichmäßigem Rhythmus von uns gehört? Und ist die zugesagte Nachverfolgung geschehen? Die verwandten Themen behandeln, was darum herum liegt: Verfügbarkeit (siehe Thema 5.3, Verfügbarkeitskennzahlen), die Qualität des schriftlichen Reviews (siehe Thema 4.2, Kennzahlen für Postmortems und Lernen), die zugrunde liegenden Ursachen (siehe Thema 4.1, Kennzahlen für das Problemmanagement) und die Änderung, die sie oft auslöst (siehe Thema 4.4, Change-Fehlschläge und Nacharbeit).

In diesem Thema verwendete Begriffe:

- **Major Incident:** ein Incident, der Ihre schriftlichen Erklärungskriterien erfüllt und den Major-Incident-Prozess auslöst.
- **Erklärung:** der Moment, in dem jemand mit Befugnis den Major-Incident-Prozess förmlich in Kraft setzt.
- **Zeit bis zur Wiederherstellung:** die Zeit vom Beginn der Kundenauswirkung bis zu dem Moment, in dem der Service für Nutzer wiederhergestellt ist. Der Moment der Wiederherstellung ist nicht dasselbe wie das Finden der [Grundursache](https://en.wikipedia.org/wiki/Root_cause_analysis).
- **Incident Commander:** die Rolle, die die Reaktion koordiniert, Aufgaben zuweist und entscheidet. Sie ist eine Rolle für die Dauer des Incidents, keine Stellenbezeichnung.
- **Post-Incident-Review:** die strukturierte, schuldfreie Untersuchung eines Incidents nach der Wiederherstellung des Services.
- **Maßnahme:** eine konkrete, mit Eigner und Datum versehene Änderung, die aus einem Review folgt.

## Leitprinzipien

- **Ereignisse zeigen, dann zusammenfassen.** Seltene Ereignisse verdienen einzelne Zeitleisten. Berichten Sie jeden Major Incident gesondert und nutzen Sie zusammenfassende Statistiken nur über ein langes Fenster, mit der Anzahl daneben.
- **Die Uhr bei der Auswirkung starten, nicht bei der Kenntnis.** Eine Dauer, die beginnt, wenn jemand etwas bemerkt, verbirgt die Erkennungslücke, oft den größten Teil der Geschichte.
- **Das Erleben des Nutzers messen, nicht den Aufwand des Teams.** Die Kundenauswirkung ist der Grund, warum der Prozess existiert. Stunden des Aufwands der Löser sind Kosten, die man verfolgt, nie ein Wert.
- **Kommunikation gehört zur Wiederherstellung.** Ein Service, der wiederhergestellt ist, während Nutzer noch rätseln, ist nur halb repariert. Behandeln Sie die Rechtzeitigkeit von Updates als Messgröße der Reaktion.
- **Das Review ist nicht fertig, bis die Maßnahmen es sind.** Ein abgeschlossenes Dokument mit offenen Maßnahmen hat nichts geändert. Messen Sie die Umsetzung, nicht nur die Existenz eines Reviews.
- **Nie Menschen ordnen und nie das Erklären bestrafen.** Schadet das Erklären eines Major Incidents dem Team der erklärenden Person in einem Bericht, werden weniger Incidents erklärt, und die Kennzahlen verbessern sich, während der Service schlechter wird.
- **Die Erklärungskriterien stabil halten.** Die Schwelle zu verschieben ändert jede Kennzahl in diesem Thema. Protokollieren Sie jede Änderung mit Grund und Datum.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Zahl der Major Incidents | Im Zeitraum erklärte Major Incidents, nach Service | Anzahl der Incidents, die die Erklärungskriterien erfüllten und im Zeitraum erklärt wurden, nach Erklärungszeit; innerhalb der ersten Stunde herabgestufte Incidents werden gesondert aufgelistet und ausgeschlossen | Anzahl pro Quartal | Incident-Datensätze des ITSM-Werkzeugs mit der Major-Incident-Markierung | Incident-Management | Gesundheits-Review von Team oder Service | Monatlicher Bericht, vierteljährlicher Trend |
| Dauer des Major Incidents | Zeit, in der Kunden betroffen waren | Wiederherstellungszeit des Services minus Beginn der Auswirkung, je Incident. Der Beginn der Auswirkung ist der früheste Beleg im Monitoring oder die erste Nutzermeldung, je nachdem, was früher liegt. Teilwiederherstellung wird als eigenes Ereignis erfasst, und die vollständige Wiederherstellung stoppt die Uhr | Minuten, je Incident | Monitoring-Zeitleiste, Incident-Zeitleiste im ITSM-Werkzeug | Incident-Management; Service-Level-Management | Zeit bis zur Wiederherstellung in Lieferkennzahlen (siehe Thema 2.8, DORA-Kennzahlen) | Je Incident; Median und Maximum über ein langes Fenster vierteljährlich |
| Zeit bis zur Erklärung | Verzögerung zwischen dem Beginn der Auswirkung und der Erklärung eines Major Incidents | Erklärungszeit minus Beginn der Auswirkung, je Incident. Nie erklärte Incidents werden durch ein vierteljährliches Review gewöhnlicher Incidents mit hoher Auswirkung gefunden und mit einer Erklärungszeit von n. z. (nie erklärt) einbezogen | Minuten, je Incident | Monitoring-Zeitleiste, Audit-Trail des ITSM-Werkzeugs | Incident-Management; Monitoring und Event-Management | Definition of Ready für Eskalation in Arbeitsvereinbarungen des Teams | Je Incident |
| Kundenauswirkung | Wie viele Nutzer und wie viel Nutzung betroffen waren | Betroffene Nutzer (oder fehlgeschlagene Anfragen) multipliziert mit betroffenen Minuten, je Incident. Zählen Sie nur Nutzer, die im Auswirkungsfenster versuchten, den Service zu nutzen. Geplante Wartung ist ausgeschlossen | Nutzerminuten oder fehlgeschlagene Anfragen | Service-Telemetrie, Support-Kontaktdatensätze | Service-Level-Management; Incident-Management | Nutzersichtbare Service Level Indicators (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets) | Je Incident |
| Rechtzeitigkeit der Kommunikation | Ob Betroffene rechtzeitig informiert wurden | Anteil der Major Incidents, bei denen die erste kundenseitige Mitteilung innerhalb des Ziels nach der Erklärung herausging, und Anteil planmäßiger Updates, die innerhalb des vereinbarten Intervalls gesendet wurden. Die Uhr startet bei der Erklärung. Rein interne Nachrichten sind ausgeschlossen | Prozent der Incidents; Prozent der Updates | Verlauf der Statusseite, Kommunikationsprotokoll im ITSM-Werkzeug | Incident-Management; Service-Level-Management | Stakeholder-Kommunikation in der Arbeitsvereinbarung des Teams | Je Incident; vierteljährliche Zusammenfassung |
| Rechtzeitigkeit des Review-Abschlusses | Ob ein Review früh genug stattfand, um nützlich zu sein | Anteil der Major Incidents mit einem veröffentlichten Review innerhalb der vereinbarten Zahl von Arbeitstagen nach der Wiederherstellung. Die Uhr stoppt bei der Veröffentlichung, nicht beim ersten Entwurf. Noch im Fenster liegende Incidents sind ausgeschlossen | Prozent | Review-Repository, ITSM-Werkzeug | Kontinuierliche Verbesserung; Problemmanagement | Verbesserungs-Nachverfolgung | Vierteljährlich |
| Umsetzung der Maßnahmen | Ob Review-Maßnahmen abgeschlossen werden | Bis zu ihrem Fälligkeitsdatum abgeschlossene Review-Maßnahmen / im Zeitraum fällige Review-Maßnahmen. Als „wird nicht getan“ geschlossene Maßnahmen werden gesondert mit Grund gezählt, nicht verborgen | Prozent; Zahl überfälliger | Mit dem Review verknüpfter Issue-Tracker | Kontinuierliche Verbesserung; Problemmanagement | Backlog-Elemente aus Retrospektiven | Monatlich |
| Wiederholungsrate von Major Incidents | Wiederkehr derselben Ursache | Major Incidents im Zeitraum, deren erfasste Ursache der eines früheren Major Incidents der vorangegangenen zwölf Monate entspricht / Major Incidents im Zeitraum. Der Abgleich erfolgt über das Ursachenfeld, von Hand geprüft | Prozent, mit gezeigter Anzahl | Review-Datensätze, Problemdatensätze | Problemmanagement | Vorbeugende Arbeit im Backlog | Vierteljährlich |

Jede Zeile braucht eine schriftliche Uhrenregel, bevor ihr getraut wird. Streit über Beginn der Auswirkung und Wiederherstellungszeit ist verbreitet und wird am besten im Voraus beigelegt (siehe Thema 1.5, Datenquellen und Instrumentierung).

## Empfehlungen

### Aufschreiben, was einen Incident zum Major Incident macht

**Veröffentlichen Sie Erklärungskriterien, die jeder im Bereitschaftsdienst anwenden kann.** Kriterien verbinden meist die Auswirkung (betroffene Nutzer, ein verschlechterter kritischer Service, ein Sicherheits- oder Rechtsrisiko) mit dem Bedarf an Koordination (mehr als ein Team nötig). Eine kurze Liste mit Beispielen schlägt eine lange Matrix. Legen Sie fest, wer erklären darf, und machen Sie klar, dass das Erklären in gutem Glauben nie ein Fehler ist, auch wenn der Incident sich als geringfügig erweist.

**Erfassen Sie die Version der Kriterien in jedem Incident-Datensatz.** Verschiebt sich die Schwelle, verschieben sich die Trends mit ihr. Eine Versionsnummer oder ein Datum an jedem Datensatz lässt Sie Gleiches mit Gleichem vergleichen und einen Sprung in der Zahl erklären, der von einer Regeländerung kam.

### Zählen und klassifizieren, ohne die Zählung zum Ziel zu machen

**Berichten Sie die Zahl mit ihrem Kontext.** Zeigen Sie die Zahl der Major Incidents pro Quartal neben Service, Auslöser (Change, Kapazität, Abhängigkeit, Sicherheit, sonstige) und Version der Kriterien. Eine Zahl ohne Kontext lädt zu Zielen wie „weniger als drei pro Quartal“ ein, die Menschen beibringen, nicht zu erklären. Behandeln Sie eine fallende Zahl nur dann als gute Nachricht, wenn Zeit bis zur Erklärung und Kundenauswirkung stabil sind.

**Trennen Sie erklärt, herabgestuft und verpasst.** Verfolgen Sie Incidents, die erklärt und herabgestuft wurden, denn sie zeigen, ob die Kriterien sinnvoll sind. Überprüfen Sie jedes Quartal eine Stichprobe gewöhnlicher Incidents auf solche, die hätten erklärt werden sollen. Die verpassten sind die aufschlussreichsten.

### Den Incident von der Seite des Nutzers aus zeitlich erfassen

**Starten Sie die Uhr, wenn Kunden betroffen sind.** Nutzen Sie den frühesten verlässlichen Beleg, oft ein Monitoring-Signal, das dem ersten Ticket vorausgeht. Ist der Beginn unsicher, erfassen Sie die Schätzung und ihre Quelle statt der Zeit, zu der jemand etwas bemerkte. Die Lücke zwischen Beginn der Auswirkung und Erklärung ist eine eigene Messgröße und meist am billigsten zu verbessern.

**Teilen Sie die Zeitleiste in Phasen.** Erkennung, Erklärung, Diagnose, Eindämmung und vollständige Wiederherstellung haben jeweils unterschiedliche Verzögerungsursachen und Eigner. Eine Phasenaufschlüsselung je Incident zeigt, wohin die Zeit ging, ohne einen Durchschnitt zu brauchen. Den Service durch eine Umgehung wiederherzustellen und die Ursache zu beheben sind getrennte Ereignisse, und das zweite gehört zum Problemmanagement.

**Nutzen Sie über lange Fenster den Median und den schlimmsten Fall, mit der Anzahl.** Berichten Sie für ein Jahr an Daten den Median und die längste Dauer und sagen Sie, aus wie vielen Incidents sie stammen. Vermeiden Sie für Major Incidents eine einzelne mittlere Zeit bis zur Wiederherstellung. Bei wenigen Ereignissen ist sie instabil und wird von einem langen Ausfall verzerrt (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

### Die Kundenauswirkung in Begriffen bemessen, die Nutzer wiedererkennen

**Bevorzugen Sie nutzerbasierte vor serverbasierter Auswirkung.** Fehlgeschlagene Anfragen, betroffene Nutzer oder betroffene Transaktionen beschreiben, was Menschen geschah. Minuten verschlechterten Services an einer Komponente beschreiben, was einer Maschine geschah. Wo Sie Service Level Indicators haben, nutzen Sie sie (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets) und verbinden Sie den Incident mit dem Verfügbarkeitsbild (siehe Thema 5.3, Verfügbarkeitskennzahlen).

**Fügen Sie jedem Datensatz eine Auswirkungsaussage in einfacher Sprache hinzu.** Ein oder zwei Sätze, die benennen, wer betroffen war und was er nicht tun konnte. Support-Kontakte, Erwähnungen in sozialen Medien und Kundeneskalationen sind Belege für die Aussage, keine Messgrößen, die zu maximieren wären.

### Kommunikation als Teil der Reaktion messen

**Setzen Sie Kommunikationsziele nach Publikum.** Betroffene Kunden, interne Stakeholder und die Geschäftsleitung brauchen verschiedene Nachrichten zu verschiedenen Zeiten. Vereinbaren Sie ein Ziel für die erste Mitteilung nach der Erklärung und einen steten Rhythmus für Updates und messen Sie die Einhaltung je Incident. Der Rhythmus zählt mehr als der Inhalt: Ein Update, das „keine Änderung, nächstes Update in dreißig Minuten“ sagt und pünktlich eintrifft, schafft mehr Vertrauen als Schweigen.

**Halten Sie Reaktion und Kommunikation in getrennten Händen.** Eine Kommunikationsleitung befreit den Incident Commander, sich auf die Diagnose zu konzentrieren. Ein kleines Team kann stattdessen eine Checkliste und eine vorformulierte Vorlage nutzen.

### Die Schleife des Lernens schließen

**Halten Sie das Review bald ab und veröffentlichen Sie es.** Erinnerung verblasst, setzen Sie also ein Fenster für das Review und messen Sie, ob es eingehalten wurde. Der Abschluss des Reviews zählt weniger als das, was das Review ändert, koppeln Sie es also mit der Umsetzung. Googles *Site Reliability Engineering* begründet schuldfreies Review und das Aufschreiben (siehe Quellen), und Thema 4.2 (Kennzahlen für Postmortems und Lernen) behandelt die Review-Qualität.

**Verfolgen Sie Maßnahmen bis zum Ende und erlauben Sie ein ehrliches „wird nicht getan“.** Legen Sie jede Maßnahme in den Backlog, den das zuständige Team bereits nutzt, mit Eigner und Datum. Erfassen Sie abgelehnte Maßnahmen mit Grund, statt sie verrotten zu lassen. Überprüfen Sie überfällige Maßnahmen in einem Betriebs- oder Service-Review und fragen Sie, was sie blockiert. Deckeln Sie die Zahl der Maßnahmen je Review, damit die verbleibenden die sind, auf die es ankommt.

**Suchen Sie nach Mustern über Incidents hinweg und schicken Sie sie an das Problemmanagement.** Wiederkehrende Ursachen, gemeinsame Auslöser und wiederkehrende Erkennungslücken sind Signale, die einzelne Reviews übersehen. Speisen Sie sie in den Prozess für Probleme und bekannte Fehler (siehe Thema 4.1, Kennzahlen für das Problemmanagement) und in die Planung der Teams ein, denen die Services gehören. Behandeln Sie eine steigende Wiederholungsrate als Anstoß zur Untersuchung, nicht als Urteil.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Zahl der Major Incidents | Die Erklärungsschwelle anheben, Incidents auf „hoch“ halten, damit sie nie erklärt werden, ein Ereignis in mehrere Datensätze zerlegen oder mehrere zu einem zusammenführen | Feste, versionierte Kriterien; vierteljährliche Stichprobe gewöhnlicher Incidents mit hoher Auswirkung; Kundenauswirkung und Zeit bis zur Erklärung neben der Zahl verfolgt |
| Dauer des Major Incidents | Die Uhr auf einen späteren Beginn der Auswirkung zurückstellen, „wiederhergestellt“ erklären, während Nutzer noch scheitern, oder schließen und einen neuen Datensatz eröffnen | Beginn der Auswirkung aus dem Monitoring genommen; Wiederherstellung durch einen nutzersichtbaren Indikator bestätigt; wieder eröffnete und verknüpfte Datensätze als ein Incident gezählt |
| Zeit bis zur Erklärung | Bei allem früh erklären, um schnell zu wirken, oder die Erklärung auf den Beginn der Auswirkung rückdatieren | Anteil erklärter Incidents, die später herabgestuft wurden; Audit-Trail der Erklärungszeit; Stichprobe von Zeitleisten gegen rohes Monitoring |
| Kundenauswirkung | Die Definition von „betroffen“ verengen, nur Nutzer zählen, die ein Ticket eröffneten, oder eine Abhängigkeit messen, die oben blieb | Auswirkung aus Telemetrie ebenso wie aus Kontakten abgeleitet; eine im Incident-Review geprüfte Auswirkungsaussage in einfacher Sprache |
| Rechtzeitigkeit der Kommunikation | Eine vage Mitteilung posten, um die Uhr zu starten, Updates ohne Inhalt senden oder interne Nachrichten zählen | Inhaltsprüfung einer Stichprobe von Updates; Kundenfeedback zur Klarheit; nur kundenseitige Mitteilungen gezählt |
| Rechtzeitigkeit des Review-Abschlusses | Ein dünnes Dokument veröffentlichen, um das Datum zu halten, oder ein Review für „nicht nötig“ erklären | Review-Qualität stichprobenartig von einem Kollegen gelesen (siehe Thema 4.2, Kennzahlen für Postmortems und Lernen); Anteil erlassener Reviews gezeigt |
| Umsetzung der Maßnahmen | Vage oder triviale Maßnahmen schreiben, die leicht zu schließen sind, Maßnahmen ohne Arbeit schließen oder als „wird nicht getan“ umetikettieren | Maßnahmenqualität stichprobenartig geprüft; geschlossene Maßnahmen gegen die Systemänderung verifiziert; Anteil und Gründe von „wird nicht getan“ überprüft |
| Wiederholungsrate von Major Incidents | Jede Ursache durch andere Formulierung als neu erfassen oder alles dem „menschlichen Fehler“ zuschreiben | Eine kurze Ursachentaxonomie mit Definitionen; Ursachenfelder von jemandem außerhalb des Incidents geprüft; „menschlicher Fehler“ als Ursache nicht ohne Systemerklärung akzeptiert |

Ein gesunder Befund ist eine moderate und ziemlich stabile Zahl erklärter Incidents, mit gelegentlicher Herabstufung und gelegentlich einem im Review gefundenen verpassten. Die Zeit bis zur Erklärung ist kurz und fällt, die Kundenauswirkung je Incident wird verstanden und fällt dort, wo Vorbeugungsarbeit geleistet wurde, und fast alle kundenseitigen Updates sind pünktlich. Reviews werden pünktlich veröffentlicht und ihre Maßnahmen sind überwiegend erledigt, mit einer kleinen, ehrlichen Menge abgelehnter Maßnahmen. Sieht alles perfekt aus, fragen Sie, ob die Kriterien gedriftet sind oder ob Menschen aufgehört haben zu erklären (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen). Das [nach Charles Goodhart benannte Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) ist hier am leichtesten zu sehen, denn die Kosten einer schlechten Zahl sind eine geringere Bereitschaft, Alarm zu schlagen.

## Abwägungen: Vor- und Nachteile

| Wahl | Stärke | Schwäche |
| --- | --- | --- |
| Jeden Incident als Zeile zeigen | Bewahrt Kontext, vermeidet irreführende Durchschnitte bei kleinen Zahlen | Schwerer für die Führung zusammenzufassen; braucht eine kurze Erzählung je Incident |
| Eine Zahl der Major Incidents berichten | Einfach, vertraut, für die Führung sichtbar | Leicht zum Ziel zu machen; reagiert auf Änderungen der Kriterien |
| Zeit ab Beginn der Auswirkung | Spiegelt das Erleben des Nutzers, legt die Erkennungslücke offen | Der Beginn der Auswirkung ist manchmal unsicher und braucht Urteil |
| Zeit ab Erklärung | Leicht zu erfassen und zu vergleichen | Verbirgt langsame Erkennung und langsame Erklärung |
| Nutzerminuten der Auswirkung | Über Incidents und Services vergleichbar | Braucht Telemetrie; behandelt alle Nutzer und Minuten als gleich |
| Abschlussrate von Reviews | Leicht zu erheben, stößt die Gewohnheit an | Belohnt das Dokument, nicht das Lernen |
| Umsetzungsrate von Maßnahmen | Verbindet Review mit Veränderung | Durch triviale Maßnahmen manipulierbar; braucht Eigner und Backlog |

Nutzen Sie eine kleine Menge von Messgrößen, die den ganzen Zyklus abdecken (erklären, wiederherstellen, informieren, lernen, abschließen), statt eine zu optimieren. Fügen Sie Auswirkungsmessgrößen nur hinzu, wenn die Telemetrie existiert. Fehlt Telemetrie, dient eine sorgfältige schriftliche Auswirkungsaussage besser als eine erfundene Zahl.

## Fragen für die Diskussion im Team

**1. Was genau macht hier einen Incident zum Major Incident, und stimmen alle im Bereitschaftsdienst überein?**
Die Definition ist das Fundament jeder anderen Zahl. Bitten Sie drei Personen, denselben jüngeren Incident zu klassifizieren, und vergleichen Sie die Antworten. Uneinigkeit zeigt, wo die Kriterien vage sind. Die Moderation sollte Beispiele für die schriftlichen Kriterien notieren und festlegen, wer erklären darf. Bestätigen Sie zum Schluss, dass das Erklären in gutem Glauben immer akzeptabel ist, auch wenn der Incident später herabgestuft wird.

**2. Wie lange lag bei unserem letzten Major Incident zwischen dem Beginn der Auswirkung und der Erklärung?**
Rekonstruieren Sie die Zeitleiste aus dem Monitoring, nicht aus dem Gedächtnis. Die Lücke ist oft größer als erwartet und manchmal die längste Phase. Fragen Sie, welches Signal existierte und wer es sah und ob die Lücke aus unklaren Kriterien, einem fehlenden Alarm oder Zögern beim Erklären kam. Wählen Sie eine Änderung, die sie verkürzen würde, und entscheiden Sie, woran Sie es merken.

**3. Wer war betroffen, und woher wissen wir es?**
Vergleichen Sie, was das Team damals glaubte, mit dem, was Telemetrie und Support-Kontakte später zeigen. Fragen Sie, welche Kunden, wenn überhaupt, stärker betroffen waren als andere und ob es die waren, die dem Geschäft am wichtigsten sind, oder die, die am wenigsten damit zurechtkommen. Besprechen Sie, ob die Auswirkungsaussage etwas ist, das ein Kunde wiedererkennen würde. Einigen Sie sich auf eine Auswirkungsmessgröße, die Sie beim nächsten Mal verlässlich erheben können.

**4. Haben Menschen von uns gehört, wenn sie es brauchten, und war die Nachricht nützlich?**
Prüfen Sie die erste Mitteilung und jedes Update gegen den vereinbarten Rhythmus. Lesen Sie die tatsächlichen Nachrichten, wie es ein Kunde täte. Fragen Sie, ob sie sagten, was bekannt war, was nicht bekannt war und wann das nächste Update kommt. Besprechen Sie, wem die Kommunikation während eines Incidents gehört und ob diese Person frei ist, sie zu leisten.

**5. Was ist aus den Maßnahmen unserer letzten drei Reviews geworden?**
Ziehen Sie die Maßnahmen in eine Liste und markieren Sie jede als erledigt, in Arbeit, überfällig oder abgelehnt. Fragen Sie bei überfälligen, was sie blockiert: Kapazität, Verantwortung, Priorität oder unklarer Umfang. Entscheiden Sie, wie überfällige Maßnahmen im nächsten Betriebs- oder Planungsmeeting angesprochen werden.

**6. Wenn wir an der Zahl der Major Incidents gemessen würden, was würden wir anders tun, und ginge es Kunden dann besser?**
Diese Frage bringt die Manipulationsvektoren an die Oberfläche, bevor sie auftreten. Bitten Sie die Gruppe, offen zu sagen, was sie ändern könnte: Schwellen, Etiketten, wer erklärt. Fragen Sie dann, was das bessere Ziel ist. Eine gute Antwort bewegt sich zu Kundenauswirkung, Zeit bis zur Erklärung und Umsetzung, die sich schwerer manipulieren lassen, ohne Nutzern zu helfen. Halten Sie die Antwort als Leitplanke fest.

## Vier Perspektiven

### Produkt- und Lieferteams

Produktteams begegnen Major Incidents als Unterbrechungen geplanter Arbeit und als Feedback zu ihren eigenen Changes. Am meisten gewinnen sie durch klare Auswirkungszahlen, schnellen Zugriff auf ihre eigenen Incident-Zeitleisten und Review-Maßnahmen, die mit Raum zur Umsetzung in ihrem Backlog landen. Reservieren Sie Kapazität für die Incident-Nachverfolgung und behandeln Sie Maßnahmen als Arbeit mit demselben Stellenwert wie Funktionen. Teilen Sie Ursachenkategorien, damit ein wiederkehrender Auslöser zu einer Änderung der Praxis führt (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit).

### Service- und Betriebsteams

Betriebsteams führen die Reaktion und tragen die Kosten der nächtlichen Arbeit. Sie brauchen Kriterien, die sie um 3 Uhr morgens anwenden können, eine Commander- und Kommunikationsrolle, die sie besetzen können, und Werkzeuge, die die Zeitleiste erfassen, während Dinge geschehen, statt nachträglich aus dem Gedächtnis. Sie sollten die Last beobachten, die Major Incidents auf eine kleine Gruppe von Menschen legen (siehe Thema 5.7, Kennzahlen für Toil und Bereitschaftsdienst), und die Kennzahlen dieses Themas nutzen, um nach Vorbeugungsarbeit zu fragen, nicht um Löser zu vergleichen.

### Führung und Governance

Führungskräfte setzen das Klima, das entscheidet, ob Menschen schnell erklären und ehrlich berichten. Sie sollten die Geschichte jedes Major Incidents und den Trend über ein Jahr anfordern, Ziele für die Zahl vermeiden und nach Kundenauswirkung, Erkennungslücken und abgeschlossenen Maßnahmen fragen. Finanzieren Sie die von Reviews empfohlene Vorbeugungsarbeit und überprüfen Sie sie im selben Forum wie Lieferpläne. Governance kann dann sehen, ob Lehren zu Veränderung werden (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets, für eine Möglichkeit, Zuverlässigkeit und Investition zu verbinden).

### Kunden und Nutzer

Kunden beurteilen einen Major Incident danach, wie lange sie betroffen waren, ob sie informiert wurden und ob es wieder geschieht. Frühe ehrliche Mitteilungen dienen ihnen besser als späte polierte. Geben Sie ihnen einen Statuskanal, einen Rhythmus, auf den sie sich verlassen können, und danach einen klaren Bericht darüber, was geschah und was sich ändern wird. Wo Verträge gelten, berichten Sie in den im Service Level Agreement vereinbarten Begriffen (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA). Zufriedenheit nach einem Incident abzufragen lohnt sich (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler betreibt einen Shop, einen Zahlungsservice und einen Auftragsverwaltungsservice, jeweils im Besitz eines Produktteams, mit einem gemeinsamen Plattformteam im Bereitschaftsdienst. Eine kleine Service-Management-Gruppe führt den Major-Incident-Prozess. Alle Zahlen in diesem Beispiel sind illustrativ.

In den letzten zwei Quartalen erklärte der Händler fünf Major Incidents (illustrativ). Die Service-Management-Gruppe zeigt jeden als Zeile mit Beginn der Auswirkung, Erklärungszeit, Wiederherstellungszeit, geschätzten fehlgeschlagenen Bestellungen, Zeit der ersten Kundenmitteilung und Review-Status. Sie bemerken, dass die mediane Lücke zwischen Beginn der Auswirkung und Erklärung 38 Minuten beträgt (illustrativ), fast so lang wie die mediane Zeit von der Erklärung bis zur Wiederherstellung mit 52 Minuten (illustrativ). Bei fünf Incidents behandeln sie beide Zahlen als grob und lesen stattdessen die Zeitleisten. Drei der fünf zeigen einen früh ausgelösten Monitoring-Alarm, der unquittiert in einem gemeinsamen Kanal lag.

Das Team beschließt, diese Alarmklasse an den Bereitschafts-Pager zu leiten und den Kriterien eine Zeile hinzuzufügen, dass ein anhaltendes Checkout-Fehlersignal zum Erklären genügt, ohne auf Tickets zu warten. Es setzt außerdem ein Ziel für die erste Kundenmitteilung innerhalb von 20 Minuten nach der Erklärung (illustrativ) und prüft es je Incident. Zwei von fünf erfüllten es. Das Deployment-Team ergänzt eine Vorlage für die Statusseite, die eine Kommunikationsleitung unter Druck ausfüllen kann.

Im selben Review finden sie ein Manipulationsrisiko. Eine Führungskraft eines Produktteams hatte ein Quartalsziel von „höchstens zwei Major Incidents“ vorgeschlagen. Die Service-Management-Gruppe weist darauf hin, dass es im Vorquartal einen Incident gab, der vier Stunden auf hoher Priorität blieb, während Kunden am Checkout scheiterten, und nie erklärt wurde, weil das Team nahe an der Grenze lag. Sie ersetzen das Ziel durch drei Messgrößen: Zeit bis zur Erklärung, fehlgeschlagene Bestellungen je Incident und Anteil der rechtzeitig abgeschlossenen Review-Maßnahmen. Sie fügen die Leitplanke einer vierteljährlichen Stichprobe hochpriorer Incidents hinzu, gelesen von jemandem außerhalb des zuständigen Teams. Im nächsten Quartal steigt die Zahl erklärter Incidents auf vier (illustrativ), die mediane Zeit bis zur Erklärung fällt, und die stichprobenartige Prüfung findet keine verpassten Erklärungen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Führen Sie nach jedem Major Incident ein schuldfreies Review mit Stakeholdern durch und verfolgen Sie die Maßnahmen in regelmäßigem Rhythmus. Zu beachten ist, dass ein Ziel für weniger Major Incidents zum selteneren Erklären ermuntert; messen Sie also auch Zeit bis zur Erklärung und Kundenauswirkung.

### KI

KI kann bei einem Major Incident helfen, zu erkennen, zusammenzufassen und zu kommunizieren, und die erste Fassung eines Reviews entwerfen. Koppeln Sie die Rechtzeitigkeit der Kommunikation mit der Genauigkeit dessen, was kommuniziert wurde, und kennzeichnen Sie, welche Teile eines Reviews eine KI entwarf und ein Mensch prüfte. Zu beachten ist, dass eine selbstsichere KI-Zusammenfassung eines Incidents falsch sein kann; ein Mensch besitzt also den endgültigen Bericht.

### Automatisierung

Automatisieren Sie die Erfassung der Zeitleiste aus Chat, Paging und Monitoring, damit das Review von Fakten ausgeht, und messen Sie das Incident-Werkzeug selbst, etwa Paging-Ausfälle. Zu beachten ist, dass automatische Statusmeldungen wie Kommunikation aussehen können, ohne die Menschen zu erreichen, die sie brauchen.

### Analytik

Major Incidents sind selten, nutzen Sie also Anzahlen, Zeitleisten und Kundenauswirkung, nicht Raten und Durchschnitte. Die Entscheidung, die dies untermauert, ist, was zu beheben und was zu proben ist. Zu beachten ist, dass kleine Zahlen zur Überinterpretation einladen; vermeiden Sie also Trendaussagen aus einer Handvoll Ereignisse.

## Branchenperspektive

**Startup.** Ein Startup hat womöglich keinen formalen Major-Incident-Prozess, nur wer gerade wach ist. Beginnen Sie mit einer Definition in einem Absatz, einem benannten Koordinator für jedes Ereignis und einem gemeinsamen Dokument, das die Zeitleiste festhält. Zählen Sie Incidents und halten Sie die Auswirkung in einem Satz fest. Das Review kann eine halbe Seite Notiz sein, und die Nachverfolgung ein Element im Backlog des Teams.

**Kleinunternehmen.** Ein Kleinunternehmen hängt für viel von seinem Service oft von Lieferanten ab, die Zeitleiste enthält also Warten auf einen Lieferanten. Halten Sie Kontakt- und Reaktionszeiten des Lieferanten in der Incident-Zeitleiste fest, denn sie erklären viel von der Dauer und liefern Belege für Vertragsgespräche. Halten Sie die Kundenkommunikation einfach: ein Kanal, eine Person und ein genanntes Update-Intervall.

**Großunternehmen.** Großunternehmen betreiben viele Services und haben in jedem Zeitraum viele Incidents, daher sind eine Zahl je Service und eine Verdichtung beide nützlich. Die Risiken sind uneinheitliche Kriterien zwischen Bereichen und ein Prozess, der schwer genug ist, die Erklärung zu verlangsamen. Gleichen Sie Definitionen ab, halten Sie den Prozess für die ersten fünfzehn Minuten leicht und nutzen Sie ein gemeinsames Datensatzformat, damit sich Auswirkung und Kommunikation vergleichen lassen.

**Behörden und öffentlicher Sektor.** Öffentliche Stellen haben oft gesetzliche Pflichten, etwa eine Aufsichtsbehörde oder die Öffentlichkeit zu benachrichtigen, und höhere Kosten des Versagens für Bürgerinnen und Bürger, die keine Alternative haben. Fügen Sie Messgrößen für die Einhaltung von Benachrichtigungspflichten und für die Auswirkung auf vulnerable Gruppen hinzu und führen Sie Aufzeichnungen, die Prüfungen und Anfragen nach öffentlichen Informationen standhalten. Beschaffungszyklen können Maßnahmen verzögern, verfolgen Sie also blockierte Maßnahmen und eskalieren Sie sie.

## Business Case: Motive, ROI und TCO

Das Motiv ist, die Kosten der Incidents zu senken, die am meisten schaden: verlorener Umsatz oder Service, beschädigtes Vertrauen, Erschöpfung des Personals und regulatorische Risiken. Eine kleine, konsistente Menge von Major-Incident-Messgrößen zeigt, woher diese Kosten kommen, ob Erkennung und Kommunikation besser werden und ob die Investition in Vorbeugung greift. Messgrößen, die nichts als eine Zahl zeigen, treiben Kosten in das Verbergen von Incidents.

Die Kosten der Erhebung sind bescheiden, wenn die Daten bereits im ITSM-Werkzeug, im Monitoring-System und im Issue-Tracker liegen. Die Hauptkosten sind die Abstimmung von Definitionen, die Verknüpfung des Incident-Datensatzes mit Monitoring und Maßnahmen-Backlog und die Zeit, jedes Review zu schreiben. Die Kennzahlen kosten wenig über das Konsistentmachen des Datensatzes hinaus.

Der Ertrag zeigt sich als kürzere Zeit bis zur Erklärung, klarere Kommunikation, weniger wiederkehrende Incidents und weniger Nacharbeit. Keine allgemeine Zahl gilt, also schätzen Sie Ihre eigene: Nehmen Sie das letzte Jahr Ihrer Major Incidents, schätzen Sie mit dem Finanzbereich die Kosten einer Stunde Auswirkung für jeden Service und vergleichen Sie sie mit den Kosten der Nachfolgearbeit, die Sie bräuchten, um die wiederkehrenden Ursachen zu verhindern. Die Gesamtbetriebskosten umfassen die Zeit der Prüfenden, die Werkzeuge für Zeitleisten und Statusseiten und die für Nachfolgemaßnahmen reservierte Kapazität, woran die meisten Programme zu wenig investieren.

## Anti-Muster und Fallstricke

- **Ein Ziel für die Zahl der Major Incidents.** Es bringt Menschen bei, das Erklären zu vermeiden. Verfolgen Sie stattdessen Zeit bis zur Erklärung, Auswirkung und Umsetzung und ziehen Sie Stichproben auf verpasste Erklärungen.
- **Eine einzelne mittlere Zeit bis zur Wiederherstellung für Major Incidents.** Bei wenigen Ereignissen dominiert ein langer Ausfall. Zeigen Sie stattdessen jeden Incident, dann Median und Längstes über ein Jahr mit der Anzahl.
- **Die Uhr bei der Erklärung starten.** Es verbirgt Erkennungs- und Erklärungsverzögerung. Starten Sie stattdessen beim frühesten Beleg der Kundenauswirkung und berichten Sie die Lücke gesondert.
- **Löser oder Teams nach Incident-Kennzahlen ordnen.** Es zerstört Offenheit und bricht das Review. Berichten Sie stattdessen nach Service und System und halten Sie Namen aus den Daten heraus.
- **Das Review als erledigt behandeln, wenn das Dokument veröffentlicht ist.** Die Veränderung ist der Punkt. Messen Sie stattdessen die Umsetzung der Maßnahmen und sehen Sie sich jeden Monat überfällige Maßnahmen an.
- **Stille Schwellenänderungen.** Trends werden bedeutungslos. Versionieren Sie stattdessen die Kriterien und vermerken Sie Änderungen im Bericht.
- **Nur Tickets als Auswirkung zählen.** Viele betroffene Nutzer rufen nie an. Nutzen Sie stattdessen Telemetrie und fügen Sie eine Auswirkungsaussage in einfacher Sprache hinzu.
- **Die Kennzahlen nutzen, um Schuld zuzuweisen.** Menschen verbergen dann Fakten. Halten Sie stattdessen Reviews schuldfrei, konzentrieren Sie sich auf Bedingungen und Entscheidungen und suchen Sie Systemursachen.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definition und Uhren | Major heißt, was die lauteste Person sagt; Zeiten stammen aus dem Gedächtnis | Einige Teams haben Kriterien und schreiben Start- und Endzeiten auf | Eine schriftliche, versionierte Definition mit Uhrenregeln für Beginn der Auswirkung, Erklärung und Wiederherstellung | Definition und Uhren gegen das Monitoring geprüft; Änderungen mit Gründen protokolliert | Kriterien und Uhren mit Lieferanten und Kunden abgestimmt und überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| Auswirkung und Kommunikation | Auswirkung in Anekdoten beschrieben; Updates gesendet, wenn sich jemand erinnert | Auswirkung für einige Incidents geschätzt; einige Teams nutzen eine Statusseite | Auswirkung für wichtige Services aus Telemetrie gemessen; Update-Ziele gesetzt und verfolgt | Auswirkung und Kommunikation im Trend und mit Kundenfeedback verknüpft | Auswirkung in einem gemeinsamen Format mit Kunden und Lieferanten geteilt, mit gemeinsamen Verbesserungsmaßnahmen |
| Review und Umsetzung | Reviews selten und ungeschrieben; Maßnahmen vergessen | Reviews von einigen Teams geschrieben; Maßnahmen erfasst, aber nicht verfolgt | Jeder Major Incident rechtzeitig überprüft; Maßnahmen im Team-Backlog verfolgt | Überfällige Maßnahmen und wiederkehrende Ursachen im Rhythmus überprüft, mit finanzierter Vorbeugungsarbeit | Muster über Teams und Lieferanten geteilt; Lernen ändert Entwurf und Planung routinemäßig |
| Nutzung in Entscheidungen | Zahlen werden nachträglich zitiert | Zahlen ohne Kontext der Führung gezeigt | Zeitleisten und Trends den Teams gezeigt, denen die Services gehören | Kennzahlen mit Leitplanken gekoppelt und genutzt, um Zuverlässigkeitsarbeit zu priorisieren | Zuverlässigkeitsinvestition gemeinsam anhand von Auswirkungs- und Wiederkehrbelegen über Services entschieden |

## Checkliste

- [ ] Erklärungskriterien sind aufgeschrieben, versioniert und allen im Bereitschaftsdienst bekannt.
- [ ] Das Erklären in gutem Glauben ist ausdrücklich sicher, und es existiert kein Ziel für die Zahl.
- [ ] Beginn der Auswirkung, Erklärung und Wiederherstellungszeit sind definiert und aus Monitoring oder Audit-Trail genommen.
- [ ] Jeder Major Incident wird als eigene Zeile mit Phasen-Zeitleiste gezeigt.
- [ ] Die Kundenauswirkung wird, wo vorhanden, aus Telemetrie abgeleitet und in einer Aussage in einfacher Sprache beschrieben.
- [ ] Ziele für die erste Mitteilung und für den Update-Rhythmus sind gesetzt und werden je Incident geprüft.
- [ ] Ein Review wird innerhalb des vereinbarten Fensters veröffentlicht, und seine Maßnahmen liegen im Backlog des zuständigen Teams.
- [ ] Überfällige Maßnahmen und wiederkehrende Ursachen werden planmäßig überprüft.
- [ ] Eine vierteljährliche Stichprobe gewöhnlicher Incidents mit hoher Auswirkung prüft auf verpasste Erklärungen.
- [ ] Jede Kennzahl hat eine benannte Leitplanke, und keine Kennzahl wird genutzt, um Einzelpersonen zu ordnen.

## KI-Prompts

**Erklärungskriterien zur Überprüfung entwerfen.**

```text
I am drafting criteria for declaring a major incident in [organization type].
Our services are [list of services] and our teams are [list of teams]. Users
are [description of users]. Propose a short set of declaration criteria with
two or three examples for each, a list of ambiguities a team might argue about,
and questions I should settle with [stakeholders]. Do not invent thresholds or
benchmark values; use [placeholders] where a number is needed. List your
assumptions.
```

**Eine Incident-Zeitleiste rekonstruieren und kritisch prüfen.**

```text
Here is the timeline of a major incident: [paste timeline with timestamps and
sources]. Identify the impact start, the declaration, mitigation, and full
restoration, and say which timestamps are uncertain and why. Split the duration
into phases and note where the largest delays occurred. Suggest questions to ask
the responders and monitoring evidence to look for. Do not invent facts that are
not in the timeline. List your assumptions.
```

**Eine Menge von Post-Incident-Maßnahmen prüfen.**

```text
Below are the actions from [number] post-incident reviews for [service]:
[paste actions with owner, due date, and status]. Group them by theme, flag any
that are vague, trivial, or unowned, and identify patterns that suggest a
problem record or a backlog item for [owning team]. Do not rank individuals or
teams by performance. Do not invent causes. List your assumptions and the
information you would need to improve the analysis.
```

**Eine vorgeschlagene Kennzahl auf Manipulation prüfen.**

```text
We plan to track [metric name], defined as [definition] and measured from
[data source]. Describe how this metric could be gamed by [role], what honest
behavior it might discourage, and which paired guardrail metric or practice
would catch each case. Keep the suggestions practical for a team of
[team size]. Do not invent benchmark values or sources. List your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die verwandten Themen und die Leitplanke zu finden, die neben jede Major-Incident-Kennzahl gehört.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine bearbeitete Fassung dieses Themas weiter Vorlage und Konventionen folgt.

## Wichtigste Erkenntnisse

- Major Incidents sind selten, zeigen Sie also jeden mit seiner Zeitleiste und fassen Sie nur über lange Fenster zusammen, mit der Anzahl neben der Zahl.
- Starten Sie die Uhr bei der Kundenauswirkung und berichten Sie die Lücke vor der Erklärung als eigene Messgröße.
- Messen Sie die Auswirkung in Nutzern und Nutzung und fügen Sie eine Aussage in einfacher Sprache für das hinzu, was Zahlen übersehen.
- Behandeln Sie die Rechtzeitigkeit der Kommunikation als Teil der Reaktion, mit Zielen nach Publikum und einem stetigen Update-Rhythmus.
- Ein Review ist fertig, wenn seine Maßnahmen fertig sind, verfolgen Sie also Umsetzung und wiederkehrende Ursachen.
- Setzen Sie nie ein Ziel für die Zahl, ordnen Sie nie Menschen und halten Sie das Erklären sicher.

## Quellen und weiterführende Literatur

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
3. Beyer, B., et al. (eds.), "Managing Incidents," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/managing-incidents/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
7. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
8. Wikipedia, [Incident management (ITSM)](https://en.wikipedia.org/wiki/Incident_management_(ITSM)).
9. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
10. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Incident commander](https://en.wikipedia.org/wiki/Incident_commander).
13. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
