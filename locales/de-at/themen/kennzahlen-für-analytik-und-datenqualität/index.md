# Kennzahlen für Analytik und Datenqualität

**Jede Zahl in diesem Buch ist nur so vertrauenswürdig wie die Daten und die Analyse dahinter. Messen Sie also die Qualität der Daten, die Stichhaltigkeit der Analyse und die Verwendung des Ergebnisses in einer Entscheidung, und sagen Sie immer, was eine Zahl nicht zeigen kann.**

## Überblick und Motivation

[Analytik](https://en.wikipedia.org/wiki/Analytics) ist die Nutzung von Daten und Statistik, um Fragen zu beantworten und Entscheidungen zu informieren. Im Service-Management reicht sie von einer einfachen wöchentlichen Ticketzählung bis zu Modellen, die vorhersagen, welche Changes fehlschlagen werden. Analytik ist die vierte Linse dieses Buches neben agiler Praxis, KI und Automatisierung, und sie ist auch das, wovon die anderen drei Linsen abhängen. Ein Dashboard auf Grundlage schlechter [Datenqualität](https://en.wikipedia.org/wiki/Data_quality) gibt selbstsichere Antworten auf die falschen Fragen.

Datenqualität ist eine Menge von Eigenschaften: ob Daten vollständig, genau, konsistent, aktuell, eindeutig und gültig sind. Frühere Themen behandelten, woher Servicedaten kommen und wie man sie liest (siehe Thema 1.5, Datenquellen und Instrumentierung, und Thema 1.6, Statistische Kompetenz für Servicekennzahlen). Dieses Thema macht aus diesen Ideen Kennzahlen, die ein Team über seine eigenen Daten und Analyse verfolgen kann, so wie Teil 4 Change misst. Es behandelt auch Analytik als Praxis: die gestellten Fragen, die genutzten Methoden, wer sie prüft und ob das Ergebnis eine Entscheidung veränderte.

Analytik ist attraktiv, weil sie skaliert. Ein Analyst kann viele Teams bedienen, und ein Modell kann jedes Ticket bewerten. Derselbe Maßstab verstärkt Fehler. Eine missverstandene Definition in einem gemeinsamen Datensatz verbreitet sich in jeden darauf gebauten Bericht, und ein auf früherem Verhalten trainiertes Modell kann alte Verzerrung mit Tempo wiederholen. KI-Werkzeuge, die Abfragen, Diagramme und Zusammenfassungen schreiben, machen Analyse billiger und auch Fehler selbstsicherer erzeugbar, daher zählt Prüfen mehr.

Hier verwendete Begriffe. Ein **Datensatz (Dataset)** ist eine definierte Sammlung von Einträgen, etwa Tickets oder Deployments. **Herkunft (Lineage)** ist die Aufzeichnung, woher Daten kamen und was mit ihnen getan wurde. **Abgleich (Reconciliation)** vergleicht zwei Quellen, die übereinstimmen sollten. Ein **Datenvertrag (Data Contract)** ist eine Vereinbarung zwischen Erzeuger und Nutzern eines Datensatzes über Struktur, Bedeutung und Qualität. Eine **Analyse** ist eine Frage, eine Methode und ein Ergebnis. **Unsicherheit** ist die Spanne, in der ein Wert bei gegebenen Daten und gegebener Methode liegen kann. Ein **Entscheidungsprotokoll** erfasst die Entscheidungen, die eine Zahl informierte.

## Leitprinzipien

- **Bei der Frage und der Entscheidung beginnen.** Eine Analyse ohne zugehörige Entscheidung ist Overhead.
- **Die Daten über die Daten messen.** Vollständigkeit, Aktualität und Abgleich sind Kennzahlen, die ein Team besitzen kann.
- **Herkunft bewahren.** Eine Zahl, die Sie nicht zu ihrer Quelle zurückverfolgen können, lässt sich nicht korrigieren.
- **Unsicherheit und Grenzen nennen.** Zeigen Sie die Zahl hinter einer Rate und sagen Sie, was die Zahl nicht zeigen kann.
- **Analyse wie Code prüfen.** Überprüfen Sie Definitionen und Abfragen und halten Sie sie in der Versionsverwaltung.
- **Menschen schützen.** Analytik über das Verhalten von Menschen braucht Datenschutzgrenzen, und Ergebnisse beschreiben Teams und Services.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Vollständigkeit der Pflichtfelder | Anteil der Datensätze mit allen Feldern, die für die Kennzahlen, die sie nutzen, verlangt sind | Datensätze mit jedem gültigen Pflichtfeld / Datensätze im Umfang | Prozent | Extrakte der Quellsysteme und Datenqualitätsprüfungen | Messung und Berichterstattung; Wissensmanagement | Definition of Done für Datensätze | Monatlich |
| Aktualität der Daten | Alter der jüngsten Daten in einem Datensatz zum Zeitpunkt, zu dem ein Bericht gelesen wird | Median und Maximum von (Zeitpunkt des Lesens des Berichts minus Zeitpunkt des zuletzt geladenen Eintrags) über Datensätze | Stunden | Pipeline-Protokolle und Metadaten der Datensätze | Messung und Berichterstattung | Schnelles Feedback | Wöchentlich |
| Abgleichsabweichung | Unterschied zwischen zwei Quellen, die über dieselbe Größe übereinstimmen sollten | absoluter Unterschied zwischen Quelle A und Quelle B / Quelle A, für eine genannte Stichprobe von Größen und einen Zeitraum | Prozent | Zwei Quellsysteme | Messung und Berichterstattung; Finanzmanagement | Arbeitsvereinbarungen zu Definitionen | Vierteljährlich |
| Abdeckung der Herkunft | Anteil der berichteten Kennzahlen, deren Quelle, Transformationen und Eigner dokumentiert sind | Kennzahlen im Register mit dokumentierter Herkunft / berichtete Kennzahlen | Prozent | Kennzahlenregister und Datenkatalog | Governance | Teamvereinbarungen | Vierteljährlich |
| Fehlschlagsrate der Datenpipeline | Anteil der Läufe der Datenpipeline, die fehlschlagen oder unvollständige Daten laden | fehlgeschlagene oder mit unvollständigen Daten geladene Läufe der Datenpipeline / gestartete Läufe | Prozent | Protokolle der Datenpipeline | Messung und Berichterstattung | Continuous Integration für Daten | Wöchentlich |
| Review-Rate von Analysen | Anteil der veröffentlichten Analysen, die vor der Nutzung von einer zweiten Person überprüft wurden | Analysen mit erfasstem Review / an ein entscheidendes Publikum veröffentlichte Analysen | Prozent | Analyseregister und Review-Protokoll | Messung und Berichterstattung; kontinuierliche Verbesserung | Peer-Review | Vierteljährlich |
| Nutzungsrate in Entscheidungen | Anteil der berichteten Kennzahlen, die im Zeitraum in einer erfassten Entscheidung zitiert wurden | in einem Eintrag des Entscheidungsprotokolls zitierte Kennzahlen / berichtete Kennzahlen | Prozent | Entscheidungsprotokoll und Kennzahlenregister | Kontinuierliche Verbesserung | Retrospektive-Maßnahmen | Vierteljährlich |

Die Vollständigkeit zählt ein Feld nur als vorhanden, wenn es einen gültigen Wert enthält, sodass ein Platzhalter wie „k. A.“ nicht zählt. Die Abgleichsabweichung gilt für eine benannte Stichprobe von Größen, etwa Ticketzahlen eines Monats, und nennt die Stichprobe.

## Empfehlungen

### Datenqualität sichtbar machen

**1. Definieren Sie Datenqualität anhand der Kennzahlen.** Listen Sie die Felder und Zeitstempel auf, von denen Ihre wichtigsten Kennzahlen abhängen, und definieren Sie, wie „gültig“ für jedes aussieht. Prüfen Sie diese zuerst, denn ein fehlender Zeitstempel bricht eine Zeitkennzahl.

**2. Prüfen Sie an der Quelle, nicht nur im Bericht.** Eine Qualitätsprüfung, die läuft, wenn Daten entstehen, etwa ein Pflichtfeld im Ticketformular, verhindert Fehler, die kein späteres Bereinigen vollständig beheben kann. Fügen Sie auch beim Laden der Daten Prüfungen hinzu.

**3. Veröffentlichen Sie Qualität neben den Zahlen.** Zeigen Sie Vollständigkeit und Aktualität auf dem Dashboard, das die Kennzahl zeigt. Ein Leser sollte die Qualität der Daten sehen, ohne zu fragen.

**4. Gleichen Sie planmäßig ab.** Vergleichen Sie jedes Quartal mindestens eine Größe über zwei Systeme, etwa die Zahl der Changes im Change-Datensatz und in der Pipeline. Untersuchen und erklären Sie Unterschiede und erfassen Sie den Befund.

### Analyse ehrlich halten

**5. Schreiben Sie zuerst die Frage und die Entscheidung.** Erfassen Sie vor der Analyse die Frage, die Entscheidung, die sie informiert, und wer entscheidet. Ist die Entscheidung gefallen, erfassen Sie, was entschieden wurde.

**6. Halten Sie Herkunft und Definitionen in einem Register.** Verknüpfen Sie jede Kennzahl mit Quelle, Transformation, Eigner und Review-Datum (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen). Änderungen an Definitionen werden mit Gründen protokolliert und in Diagrammen markiert.

**7. Überprüfen Sie jede Analyse.** Eine zweite Person prüft Definitionen, Abfragen und Schlussfolgerungen jeder in einer Entscheidung genutzten Analyse. Halten Sie Abfragen in der Versionsverwaltung, damit sie neu ausgeführt werden können.

**8. Nennen Sie Unsicherheit und Grenzen.** Zeigen Sie die Zahl der Elemente hinter jeder Rate, Intervalle, wo sie zählen, und was die Analyse nicht zeigen kann. Meiden Sie Genauigkeit einer einzelnen Zahl, wo die Daten sie nicht stützen.

### Nutzung steuern

**9. Nutzen Sie Datenverträge für gemeinsame Datensätze.** Das Team, das einen Datensatz erzeugt, nennt seine Bedeutung, Felder, Aktualität und bekannte Probleme und sagt den Nutzern, wenn er sich ändert. Brechende Änderungen brauchen Vorankündigung.

**10. Schützen Sie Menschen in den Daten.** Entscheiden Sie, wer Rohdatensätze sehen kann, wie lange Daten aufbewahrt werden und wie groß die Mindestgruppe für Berichte ist. Halten Sie Analytik auf Team- und Serviceebene und prüfen Sie die für Sie geltenden Datenschutzregeln.

**11. Stellen Sie Berichte und Datensätze ein.** Ein Bericht, den niemand nutzt, kostet weiter Pflege und kann in die Irre führen. Überprüfen Sie die Nutzung und stellen Sie ein, was in Entscheidungen nicht zitiert wird.

**12. Behandeln Sie KI-gestützte Analyse als ungeprüft, bis sie geprüft ist.** KI-Werkzeuge können eine Abfrage oder Zusammenfassung schreiben, die richtig aussieht und falsch ist. Überprüfen Sie die Abfrage, führen Sie sie an einer kleinen bekannten Stichprobe erneut aus und erfassen Sie, dass sie geprüft wurde.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Vollständigkeit der Pflichtfelder | Felder mit Platzhaltern oder Vorgabewerten füllen; Felder optional machen | Gültigkeitsprüfungen am Inhalt; Datensätze auf echte Werte beproben |
| Aktualität der Daten | Ladevorgänge statt Ereignisse mit Zeitstempel versehen; leere Updates laden | Ereigniszeit gegen Ladezeit prüfen; Zeilenzahlen je Ladevorgang |
| Abgleichsabweichung | Größen wählen, die zufällig übereinstimmen; eine Quelle anpassen, damit sie passt | Größen rotieren; Audit-Trail der Anpassungen führen |
| Abdeckung der Herkunft | Herkunft oberflächlich dokumentieren; Text zwischen Einträgen kopieren | Einträge beproben und eine Kennzahl Ende zu Ende zurückverfolgen |
| Fehlschlagsrate der Datenpipeline | Fehlgeschlagene Läufe als wiederholt oder erfolgreich markieren; Protokolle löschen | Datensatzzahlen mit der Quelle vergleichen; Alarm bei Lücken |
| Review-Rate von Analysen | Abgenickte Reviews; Review nach der Entscheidung | Notizen der Reviewer prüfen; Review vor der Nutzung verlangen |
| Nutzungsrate in Entscheidungen | Kennzahlen in einem Protokoll zitieren, ohne Wirkung auf die Entscheidung | Fragen, was sich änderte; Einträge beproben |

Ein gesunder Befund sind sichtbare und stabile Datenqualitätszahlen, Unterschiede zwischen Quellen, die erklärt werden, Analyse, die vor der Nutzung geprüft wird, und Kennzahlen, die kommen und gehen, wie Entscheidungen sie brauchen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Strenge Validierung bei der Eingabe | Verhindert Fehler früh | Reibung für Nutzer; Platzhaltereinträge |
| Daten nachträglich bereinigen | Flexibel; bremst Nutzer nicht | Verbirgt die Ursache; Fehler bleiben in manchen Berichten |
| Zentrales Analytik-Team | Konsistente Methoden und Qualität | Engpass; Distanz zur Arbeit |
| Self-Service-Analytik durch Teams | Schnell; nah an der Arbeit | Uneinheitliche Definitionen; ungleiche Qualität |
| KI-gestützte Analyse | Schnelle Entwürfe; senkt die Hürde | Selbstsichere Fehler; schwache Reproduzierbarkeit |

Der Schluss in Worten ist, Fehler an der Quelle zu verhindern, Definitionen und Herkunft an einem Ort zu teilen und für jede Analyse, die eine Entscheidung informiert, Review zu verlangen. Tempo aus Self-Service und KI ist willkommen, wenn das Prüfen Schritt hält.

## Fragen für die Diskussion im Team

**1. Bei welchen drei Zahlen auf unserem Dashboard würden wir am meisten bereuen, wenn die Daten darunter falsch wären?**
Beginnen Sie mit den Zahlen, die Entscheidungen oder Ziele treiben. Fragen Sie, wovon die Daten abhängen und wer die Quelle besitzt. Oft entdecken Menschen, dass eine Schlüsselzahl von einem Feld abhängt, das von Hand eingegeben wird. Wählen Sie anschließend eine, die diesen Monat zu prüfen ist.

**2. Wann widersprachen sich zwei Berichte, und wie lösten wir es?**
Geschichten widersprüchlicher Zahlen zeigen, wo Definitionen abweichen. Fragen Sie, ob die Lösung erfasst und die Ursache behoben wurde. Die Moderation sollte wiederkehrende Ursachen festhalten, etwa unterschiedliche Zeitzonen oder Statusdefinitionen. Einigen Sie sich anschließend auf eine Definition und einen Eigner.

**3. Wie alt sind die Daten im Bericht, den wir am meisten ansehen?**
Viele Menschen wissen es nicht. Fragen Sie, wie Aktualität gezeigt wird und ob ein veralteter Ladevorgang bemerkt würde. Besprechen Sie die Kosten einer veralteten Entscheidung. Fügen Sie anschließend dem Bericht die Aktualität hinzu.

**4. Wer prüfte die letzte Analyse, die eine Entscheidung veränderte?**
Suchen Sie ein zweites Paar Augen auf Definitionen und Abfragen. Gab es keines, besprechen Sie warum. Fragen Sie, welches Review verhältnismäßig wäre. Wählen Sie anschließend einen einfachen Review-Schritt für jede Analyse, die eine bedeutende Entscheidung informiert.

**5. Was kann uns unsere meistgenutzte Kennzahl nicht sagen?**
Grenzen zu nennen ist die Gewohnheit gut gemachter Analytik. Fragen Sie nach konkreten blinden Flecken, etwa Nutzern, die den Support nicht kontaktieren. Erfassen Sie die Grenzen neben der Kennzahl. Fügen Sie anschließend eine Kennzahl hinzu, die einen blinden Fleck abdeckt.

**6. Wie nutzen wir KI-Werkzeuge, um Abfragen und Zusammenfassungen zu schreiben, und wie prüfen wir sie?**
Fragen Sie nach der tatsächlichen Praxis, nicht nach der Richtlinie. Achten Sie auf ungeprüfte Ausgaben in Berichten. Besprechen Sie eine einfache Prüfung, etwa das erneute Ausführen an einer bekannten Stichprobe. Einigen Sie sich anschließend auf eine Regel für KI-gestützte Analyse.

## Vier Perspektiven

### Produkt- und Lieferteams

Ihre Werkzeuge erzeugen einen großen Teil der Daten, die andere analysieren. Halten Sie Zeitstempel, Kennungen und Status zuverlässig und sagen Sie den Datennutzern, wenn sich ein Feld ändert. Nehmen Sie Datenqualität in die Definition of Done für neue Funktionen auf, die Daten erzeugen.

### Service- und Betriebsteams

Ticketdaten hängen davon ab, wie Menschen unter Druck Formulare ausfüllen. Machen Sie die richtige Eingabe zur leichten, prüfen Sie die Datenqualität im Werkzeug und sprechen Sie an, wenn eine Kennzahl die Arbeit falsch liest. Datieren Sie Datensätze nicht zurück und aktualisieren Sie sie nicht gebündelt, um eine Zahl zu verbessern.

### Führung und Governance

Fragen Sie nach Datenqualität und Herkunft neben jeder Zahl, die eine Entscheidung oder ein Ziel stützt. Finanzieren Sie Data Engineering und Review-Zeit, nicht nur Dashboards. Schützen Sie den Datenschutz und meiden Sie Analytik über Einzelne, um Menschen zu beurteilen.

### Kunden und Nutzer

Daten über Sie treiben, wie der Service Sie behandelt, fragen Sie also, was erhoben wird und wie es genutzt wird. Wo Ihr Feedback in den Daten steckt, etwa Umfrageantworten, fragen Sie, wie es geschützt ist und wie es eine Entscheidung erreichte.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Versorgers baut für ihr Führungsteam ein Dashboard der Incident-Lösungszeit und der Change-Fail-Rate. Die Zahlen in diesem Beispiel sind illustrativ. Das Dashboard zeigt einen Median der Lösungszeit von 3,1 Stunden und eine Change-Fail-Rate von 4 Prozent.

Ein Analyst prüft vor dem Start die Qualität. Die Vollständigkeit der Pflichtfelder für den Zeitstempel „gelöst“ beträgt 91 Prozent, wobei die fehlenden Datensätze meist nachträglich eingegebene Major Incidents sind. Die Aktualität beträgt 26 Stunden, weil der Extrakt über Nacht läuft. Der Abgleich des Change-Datensatzes mit der Pipeline zeigt 8 Prozent mehr Produktions-Changes in der Pipeline als im Change-Datensatz, die Fail-Rate hat also ein Problem mit dem Nenner.

Das Team nimmt Änderungen vor. Das Ticketformular verlangt die Lösungszeit und prüft, dass sie nach der Öffnungszeit liegt. Das Dashboard zeigt die Zahl der Incidents hinter jeder Zahl, das Alter der Daten und die Vollständigkeit der genutzten Felder. Ein Datenvertrag legt fest, dass der Change-Datensatz das führende System für genehmigte Changes ist und die Pipeline für Deployments, mit monatlichem Abgleich. Der erste Abgleich erklärt die Lücke mit Notfall-Changes, die nur in der Pipeline erfasst wurden.

Ein Manipulationsrisiko zeigt sich, als ein Manager vorschlägt, Incidents mit fehlender Lösungszeit auszuschließen, um die Vollständigkeit zu verbessern. Das Team lehnt ab und behebt die Eingabe. Das Ergebnis ist ein weiteres Intervall um den Median und eine Change-Fail-Rate von 6 Prozent. Das Entscheidungsprotokoll hält fest, dass das Führungsteam wählte, ein Quartal zu warten, bevor ein Ziel gesetzt wird. Was schwierig bleibt: Zurückdatierte Einträge sind nicht alle erkennbar, und der Abgleich hängt von einer manuellen Kennungsverknüpfung ab.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Kurze Feedbackschleifen helfen der Datenqualität: das Formular korrigieren, die Daten des nächsten Tages prüfen und die Nutzer fragen. Eine gute Praxis ist, Datenqualitätszahlen im regelmäßigen Verbesserungsgespräch mit den Menschen zu überprüfen, die die Daten eingeben. Zu beachten ist, dass ständige Änderungen an Feldern und Status Trends brechen; protokollieren Sie also jede Änderung von Definitionen.

### KI

KI kann Abfragen schreiben, Diagramme entwerfen, Kommentare zusammenfassen und Anomalien markieren, und sie kann auch plausible Ergebnisse erfinden. Behandeln Sie KI-gestützte Analyse als ungeprüft, bis eine Person die Abfrage prüft und sie an einer kleinen bekannten Stichprobe erneut ausführt, und erfassen Sie, dass sie geprüft wurde. Zu beachten ist, dass KI-Zusammenfassungen von Umfragekommentaren Sprache und Ton missverstehen können; lesen Sie also eine Stichprobe der Originale.

### Automatisierung

Automatisieren Sie Datenqualitätsprüfungen beim Laden und bei der Berichterstellung und messen Sie die Pipelines an Fehlschlägen und Lücken. Schlagen Sie Alarm bei fehlenden Ladevorgängen und plötzlichen Volumenänderungen. Zu beachten ist, dass automatische Bereinigungsregeln ein Quellproblem verbergen können; berichten Sie also, was geändert wurde und warum.

### Analytik

Dieses Thema handelt von Analytik, die Praxis ist also eine kurze Notiz zu jeder Kennzahl: ihre Frage, Entscheidung, Herkunft, Qualität und Grenzen. Die Entscheidung, die dies untermauert, ist, ob man einer Zahl genug vertraut, um zu handeln. Zu beachten ist, dass sauber aussehende Dashboards auf schwachen Daten sitzen können; zeigen Sie also die Qualitätszahlen neben dem Ergebnis und halten Sie die Definitionen der Service Management Metrics in einem Register.

## Branchenperspektive

**Startup.** Daten sind klein und veränderlich. Halten Sie für jede Kennzahl eine einzige Wahrheitsquelle, schreiben Sie Definitionen in ein kurzes Dokument und vermeiden Sie, eine Datenplattform zu bauen, bevor die Fragen klar sind.

**Kleinunternehmen.** Daten liegen womöglich in einem gehosteten Werkzeug mit festen Berichten. Prüfen Sie, wie das Werkzeug jede Kennzahl definiert, exportieren Sie Stichproben zur Verifizierung und führen Sie eine kurze Liste dessen, was die Berichte nicht zeigen können.

**Großunternehmen.** Viele Quellen und Teams erzeugen widersprüchliche Definitionen. Nutzen Sie ein gemeinsames Kennzahlenregister, Datenverträge und einen regelmäßigen Abgleich und geben Sie Teams die Mittel, ihre eigenen Daten zu prüfen.

**Behörden und öffentlicher Sektor.** Datensätze können Regeln zu Aufbewahrung, Zugang und öffentlicher Berichterstattung unterliegen. Dokumentieren Sie die Herkunft jeder veröffentlichten Zahl und halten Sie Datenschutzregeln für Daten über Menschen ein (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind Personalzeit für Datenqualitätsprüfungen, Abgleich, Dokumentation und Review, plus Werkzeuge für Datenpipelines und Kataloge, wo genutzt. Vieles davon kann mit kleinen Schritten beginnen, etwa Validierung im Ticketformular.

Der Ertrag sind Entscheidungen auf besseren Zahlen, weniger Zeit mit Streit darüber, welcher Bericht stimmt, und weniger Nacharbeit, wenn eine missverstandene Zahl spät gefunden wird. Beschreiben Sie ihn als Muster, nicht als Zahl: weniger zurückgenommene Entscheidungen und weniger Streit. Brauchen Sie Zahlen für einen Business Case, messen Sie Ihre eigenen Basislinien, etwa Abgleichsabweichung und die Zeit, die mit dem Lösen von Berichtsstreit verbracht wird, vor und nach der Änderung (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Nur im Bericht bereinigen.** Die Quelle erzeugt weiter Fehler. Beheben Sie Eingabe- und Ladeprüfungen.
- **Dashboards ohne Qualitätszahlen.** Leser können die Zahl nicht beurteilen. Zeigen Sie Vollständigkeit, Aktualität und Zählungen.
- **Undokumentierte Definitionen.** Zahlen ändern still ihre Bedeutung. Halten Sie Herkunft und ein Änderungsprotokoll.
- **Ungeprüfte Analyse.** Fehler erreichen Entscheidungen. Verlangen Sie einen zweiten Blick.
- **KI-Zusammenfassungen trauen.** Sie können geschliffen und falsch sein. Prüfen Sie Abfragen und beproben Sie Originale.
- **Analytik über Einzelne.** Sie wird zu Überwachung und verdirbt Daten. Berichten Sie auf Teamebene mit einer Mindestgruppengröße.
- **Berichte nie einstellen.** Sie häufen sich und führen in die Irre. Überprüfen Sie die Nutzung und entfernen Sie.
- **Einzelzahlen ohne Unsicherheit.** Sie laden zu Überreaktion ein. Zeigen Sie Zählungen und Spannen.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Datenqualität | Unbekannte Qualität; Tabellen von Hand | Vollständigkeit für Schlüsselfelder geprüft | Qualitätsprüfungen bei Eingabe und Laden, in Berichten gezeigt | Abgleich und Qualitätstrends im Rhythmus überprüft | Qualität mit Datenverträgen über Teams gesteuert |
| Herkunft und Definitionen | Definitionen in den Köpfen der Menschen | Einige Definitionen geschrieben | Register mit Quelle, Eigner und Änderungsprotokoll | Herkunft für Schlüsselkennzahlen Ende zu Ende zurückverfolgt | Definitionen über Teams und Lieferanten geteilt |
| Analysepraxis | Einmalige Berichte; kein Review | Etwas Peer-Review | Fragen, Entscheidungen und Review erfasst | Analyse wiederverwendet, überprüft und eingestellt | Analytik in Entscheidungen eingebettet, mit Feedback zu Ergebnissen |

## Checkliste

- [ ] Jede Schlüsselkennzahl listet die Felder und Zeitstempel auf, von denen sie abhängt.
- [ ] Pflichtfelder werden bei der Eingabe validiert, nicht nur später bereinigt.
- [ ] Berichte zeigen Vollständigkeit, Aktualität und die Zahl hinter jeder Rate.
- [ ] Mindestens eine Größe wird jedes Quartal über zwei Quellen abgeglichen.
- [ ] Ein Register erfasst Quelle, Transformation, Eigner und Review-Datum je Kennzahl.
- [ ] Änderungen von Definitionen werden protokolliert und in Diagrammen markiert.
- [ ] Analyse, die eine Entscheidung informiert, wird von einer zweiten Person überprüft.
- [ ] Regeln für KI-gestützte Analyse existieren, einschließlich einer Prüfung an einer bekannten Stichprobe.
- [ ] Zugang, Aufbewahrung und Mindestgruppengröße sind für personenbezogene Daten definiert.
- [ ] Jede Kennzahl hat einen Manipulationsvektor und eine Leitplanke daneben.

## KI-Prompts

**Datenqualitätsprüfungen für eine Kennzahl entwerfen.**

```text
We report this metric: [metric name], defined as [definition including clock start
and stop]. It depends on these fields in [tool]: [list fields]. Propose data quality
checks for completeness, validity, timeliness, and consistency, and say where each
check should run (at entry, at load, or in the report). Do not invent thresholds;
use placeholders. Mark assumptions and list questions I should answer.
```

**Eine Analyse vor der Nutzung überprüfen.**

```text
Here is an analysis we plan to use for a decision: [paste question, method,
query or steps, and result, without personal data]. Review it for unclear
definitions, wrong denominators, small samples, missing uncertainty, and
conclusions that go beyond the data. Do not assume facts not in the text. List
what you could not judge and what a human reviewer should check.
```

**Einen Abgleich zwischen zwei Systemen planen.**

```text
Two systems should agree on [quantity]: [system A] and [system B]. Propose a
reconciliation plan: the sample, the period, how to match records, how to
classify differences, and how to record findings. Do not invent expected
variance. List assumptions and the access I would need.
```

**Das Manipulationsrisiko von Datenqualitätskennzahlen überprüfen.**

```text
We report these data quality measures: [paste measures and definitions].
Context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without improving the data, propose a guardrail, and say how
that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## KI-Skills

- [Data quality](../../../../skills/data-quality/SKILL.md): zu verwenden, um die Qualität eines Datensatzes zu definieren und zu prüfen.
- [Data pipeline](../../../../skills/data-pipeline/SKILL.md): zu verwenden, um die Pipeline zu entwerfen und zu überprüfen, die Servicedaten lädt.
- [Statistical analysis](../../../../skills/statistical-analysis/SKILL.md): zu verwenden, um zu prüfen, dass Methode und Unsicherheit zur Frage passen.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine Kennzahl und ihre gekoppelte Leitplanke abdeckt.

## Wichtigste Erkenntnisse

- Eine Zahl ist nur so vertrauenswürdig wie ihre Daten, messen Sie also Vollständigkeit, Aktualität und Abgleich und zeigen Sie sie neben dem Ergebnis.
- Halten Sie Herkunft und Definitionen in einem Register und protokollieren Sie jede Änderung.
- Überprüfen Sie Analyse, bevor sie Entscheidungen informiert, auch KI-gestützte.
- Nennen Sie Unsicherheit und Grenzen und zeigen Sie die Zahl hinter jeder Rate.
- Halten Sie Analytik auf Team- und Serviceebene, mit Datenschutzgrenzen für Daten über Menschen.

## Quellen und weiterführende Literatur

1. Wikipedia, [Analytics](https://en.wikipedia.org/wiki/Analytics).
2. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
3. Wikipedia, [Data lineage](https://en.wikipedia.org/wiki/Data_lineage).
4. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
5. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
6. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
7. Wikipedia, [Reproducibility](https://en.wikipedia.org/wiki/Reproducibility).
