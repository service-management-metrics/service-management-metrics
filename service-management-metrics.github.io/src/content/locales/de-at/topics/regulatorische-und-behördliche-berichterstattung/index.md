# Regulatorische und behördliche Berichterstattung

**Verpflichtende Berichterstattung ist eine feste Anforderung, um die herum man entwirft. Bauen Sie sie also aus denselben Datensätzen, mit denen Sie den Service betreiben, halten Sie die Berichtssicht getrennt von der Lernsicht und schützen Sie die Menschen, die die Arbeit tun, vor Zielen, die sie verzerren.**

## Überblick und Motivation

Viele Organisationen müssen über ihre Services berichten, ob sie es wählen würden oder nicht. Regulierer verlangen Incident-Meldungen, Verfügbarkeitszahlen und Belege für Kontrollen. Regierungen verlangen von Behörden, Leistungsdaten, Ausgaben und Barrierefreiheitserklärungen zu veröffentlichen. Geldgeber und Aufsichtsgremien fragen nach Ergebnissen gegenüber Zusagen. Verträge verlangen Service-Berichte. In diesen Umfeldern ist Berichterstattung keine interne Managemententscheidung. Sie ist eine Pflicht mit Fälligkeitsdatum, einer Definition und manchmal einer Strafe.

Der [öffentliche Sektor](https://en.wikipedia.org/wiki/Public_sector) hat besondere Merkmale. [Rechenschaftspflicht](https://en.wikipedia.org/wiki/Accountability) gegenüber Bürgern und gewählten Gremien ist eine Kernpflicht und wird durch Prüfung, Gesetzgebung, [Informationsfreiheitsgesetze](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country) und veröffentlichte Ergebnisse ausgeübt. Praktiken von [Open Government](https://en.wikipedia.org/wiki/Open_government) und [Open Data](https://en.wikipedia.org/wiki/Open_data) machen Informationen für Kontrolle und Weiterverwendung verfügbar. Regeln der [öffentlichen Beschaffung](https://en.wikipedia.org/wiki/Public_procurement) prägen, was gekauft werden kann und wie, und Pflichten des [Records Management](https://en.wikipedia.org/wiki/Records_management) regeln, wie lange Informationen aufbewahrt werden. [Value for Money](https://en.wikipedia.org/wiki/Value_for_money) ist ein üblicher Test öffentlicher Ausgaben, und unabhängige Stellen führen [Leistungsprüfungen](https://en.wikipedia.org/wiki/Performance_audit) durch, um ihn zu untersuchen. Die Einzelheiten unterscheiden sich nach Land, Staatsebene und Sektor, und dieses Thema beschreibt Messpraxis, keine rechtlichen Anforderungen. Arbeiten Sie mit Ihren Kollegen aus Recht, Compliance und Records zusammen.

Regulierte Organisationen des privaten Sektors, etwa in Finanzwesen, Gesundheit, Energie und Telekommunikation, teilen viele dieser Merkmale. Sie haben Meldepflichten bei Incidents, Resilienzberichte und Aufsichtsprüfungen. Der gemeinsame Faden ist, dass jemand außerhalb des Lieferteams definiert, was berichtet werden muss und bis wann.

Kontinuierliche Auslieferung und ITIL-Praxis haben beide etwas beizutragen. Das agile Ziel kontinuierlicher Zusammenarbeit mit Stakeholdern reicht bis zu Aufsichtsgremien, die Stakeholder mit berechtigten Bedürfnissen sind, und frühe Gespräche darüber, was sie verlangen, können Nacharbeit verhindern. Die agile Gewohnheit, kleine funktionierende Inkremente kontinuierlich zu liefern, passt zur Berichterstattung: Berichte, die automatisch aus führenden Systemen erzeugt werden, sind genauer und billiger als solche, die jedes Quartal von Hand zusammengebaut werden. ITILs Praktik für Messung und Berichterstattung und ihr Service-Level-Management liefern das Vokabular, um zu definieren, was gemessen und geteilt wird.

Berichtspflichten erzeugen drei bekannte Gefahren.

- **Verzerrung durch Ziele.** Hat eine berichtete Zahl Folgen, biegt sich die Arbeit zur Zahl hin. Die Literatur zu Zielen im öffentlichen Sektor, darunter John Seddons Schriften zu Systemdenken im öffentlichen Sektor und Jerry Mullers Analyse der Kennzahlenfixierung, beschreibt viele Fälle, in denen das Erreichen des Ziels und der Dienst an der Öffentlichkeit auseinanderliefen. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt mit voller Wucht (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).
- **Zwei Zahlensätze.** Die gesetzliche Definition einer Zahl weicht oft von der ab, die das Team intern nutzt. Steuert das Team nach der einen und berichtet die andere, traut niemand einer von beiden. Halten Sie beide sichtbar, gleichen Sie sie ab und erklären Sie die Unterschiede.
- **Berichterstattung als Last.** Manuelle, wiederholte, uneinheitliche Anfragen verbrauchen qualifizierte Menschen. Je mehr Berichterstattung von heroischer Tabellenarbeit abhängt, desto mehr Fehler und Verzögerung schleichen sich ein.

Dieses Thema baut auf den Kennzahlen zu Compliance, Risiko und Lieferanten dieses Teils auf (siehe Thema 8.2, Kennzahlen für Risiken und Kontrollen, Thema 8.3, Kennzahlen für Compliance und Audit, und Thema 8.4, Kennzahlen für Lieferanten und Verträge) und auf den Datengrundlagen des ersten Teils (siehe Thema 1.5, Datenquellen und Instrumentierung).

## Leitprinzipien

- **Pflichten als Entwurfseingaben behandeln.** Listen Sie sie früh auf, mit Definitionen, Fälligkeitsdaten und Eignern, und entwerfen Sie die Datenerfassung um sie herum.
- **Berichte aus führenden Systemen erzeugen.** Automatisieren Sie die Extraktion und halten Sie die Herkunft sichtbar.
- **Die Berichtssicht von der Lernsicht trennen.** Teams brauchen offene Arbeitskennzahlen, die nicht durch das Berichtete eingeschränkt sind.
- **Definitionen abgleichen.** Zeigen Sie, wie gesetzliche Zahlen zu den eigenen Kennzahlen des Teams stehen.
- **Ehrlich berichten, auch schlechte Nachrichten.** Korrekturen und Kontext schaffen Vertrauen.
- **Menschen vor verkehrten Zielen schützen.** Nutzen Sie gesetzliche Ziele mit Begleitkennzahlen und erklären Sie ihre Grenzen.
- **Veröffentlichte Daten nutzbar machen.** Barrierefreiheit, Klarheit und Format zählen für die Öffentlichkeit.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Abdeckung der Berichtspflichten | Anteil der Berichtspflichten mit benanntem Eigner, genannter Definition, Datenquelle und Kalendereintrag | Pflichten mit allen vieren / Berichtspflichten im Umfang | Prozent | Pflichtenregister | Messung und Berichterstattung; Governance | Arbeitsvereinbarung mit Stakeholdern über Informationsbedarf | Vierteljährlich |
| Rechtzeitigkeit von Berichten | Anteil der erforderlichen Berichte, die bis zu ihrem Fälligkeitsdatum eingereicht wurden | am oder vor dem Fälligkeitsdatum eingereichte Berichte / im Zeitraum fällige Berichte | Prozent | Berichtskalender und Einreichungsunterlagen | Messung und Berichterstattung | Eingehaltene Zusagen an Stakeholder | Monatlich |
| Korrekturrate | Anteil der eingereichten Berichte oder Zahlen, die später korrigiert wurden | nach Einreichung korrigierte Berichte oder Zahlen / eingereichte Berichte oder Zahlen | Prozent | Einreichungsprotokoll und Korrekturprotokoll | Messung und Berichterstattung; kontinuierliche Verbesserung | Entwichene Defekte | Vierteljährlich |
| Nachvollziehbarkeitsabdeckung | Anteil der berichteten Zahlen, die über dokumentierte Schritte auf ein führendes System zurückgeführt werden können | Zahlen mit dokumentierter Herkunft zu einem führenden System / berichtete Zahlen | Prozent | Herkunftsdokumentation, Berichtsspezifikationen | Messung und Berichterstattung; Wissensmanagement | Reproduzierbare Builds | Vierteljährlich |
| Definitionsabgleich | Anteil der berichteten Kennzahlen, bei denen die gesetzliche und die interne Definition dokumentiert und abgeglichen sind | Kennzahlen mit dokumentiertem Abgleich / berichtete Kennzahlen mit gesetzlicher Definition | Prozent | Kennzahlenregister | Messung und Berichterstattung; Service-Level-Management | Gemeinsame Definition of Done | Vierteljährlich |
| Berichtsaufwand | Personenstunden, die für einen wiederkehrenden Bericht aufgewendet werden | gebuchte Stunden je Berichtszyklus, mit dem Anteil manueller Extraktion und Zusammenstellung | Stunden | Zeitschätzungen, Aufwandsprotokolle | Messung und Berichterstattung; kontinuierliche Verbesserung | Kosten von Nicht-Lieferarbeit | Je Berichtszyklus |
| Barrierefreiheit der Veröffentlichungen | Anteil veröffentlichter Berichte und Datensätze, die den erforderlichen Barrierefreiheitsstandard erfüllen | Veröffentlichungen, die eine Barrierefreiheitsprüfung bestehen / veröffentlichte Elemente | Prozent | Ergebnisse von Barrierefreiheitstests | Messung und Berichterstattung; Wissensmanagement | Inklusive Definition of Done | Vierteljährlich |

Schreiben Sie die gesetzliche Definition, die Quelle und das Fälligkeitsdatum neben jede berichtete Kennzahl. Ein Bericht ist „rechtzeitig“, wenn er von der empfangenden Stelle akzeptiert wird, nicht wenn er gesendet wird, sofern die Annahme erfasst ist. Eine Korrektur zählt jede Berichtigung einer bereits eingereichten Zahl, ob freiwillig oder verlangt. Der Berichtsaufwand ist eine Trendkennzahl der Organisation und nie eine Messgröße von Einzelpersonen. Die Barrierefreiheit wird gegen den Standard geprüft, der für Sie gilt, etwa die Web Content Accessibility Guidelines.

## Empfehlungen

### Pflichten als Entwurfseingaben behandeln

**1. Führen Sie ein Register der Berichtspflichten.** Erfassen Sie für jede die Anforderung, die rechtliche oder vertragliche Quelle, was zu berichten ist, die Definition, das Fälligkeitsdatum, die empfangende Stelle, den internen Eigner und die Datenquelle. Überprüfen Sie es, wenn sich Gesetze, Verträge oder Regulierer ändern. Früh bekannte Pflichten lassen sich einplanen, und spät entdeckte müssen von Hand zusammengebaut werden.

**2. Beziehen Sie die Aufsichtsstelle früh ein.** Fragen Sie Regulierer, Prüfer und Geldgeber, was sie mit den Daten tun werden und was sie brauchen. Manche helfen Ihnen, eine Definition zu formen, oder akzeptieren Daten in einer Form, die Sie ohnehin erzeugen. Die agile Praxis schätzt Zusammenarbeit mit Stakeholdern, und Aufsichtsstellen sind Stakeholder. Bewahren Sie Aufzeichnungen dieser Gespräche und wahren Sie die Unabhängigkeit, wo es zählt.

**3. Entwerfen Sie die Datenerfassung von Anfang an für die Berichterstattung.** Nehmen Sie beim Bau eines Services die Ereignisse und Felder auf, die verlangte Berichte brauchen werden: Zeitstempel von Incidents, Auswirkung, Kategorien, Nutzerzahlen. Sie später hinzuzufügen ist teuer. Definieren Sie sie einmal und teilen Sie die Definition über Teams, mit einem einzigen Eigner der Definition (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

### Berichte aus führenden Systemen erzeugen

**4. Automatisieren Sie die Pipeline vom Datensatz zum Bericht.** Extrahieren Sie aus den Incident-, Change- und Servicesystemen mit skriptgesteuerten Abfragen, wenden Sie dokumentierte Transformationen an und erzeugen Sie den Bericht mit einer überprüften Vorlage. Automatisierte Berichte sind wiederholbar, schneller und leichter zu prüfen als manuelle. Versionieren Sie die Abfragen und die Vorlagen, damit ein früherer Bericht reproduziert werden kann.

**5. Dokumentieren Sie die Herkunft.** Notieren Sie für jede berichtete Zahl, woher sie kommt, wie sie berechnet wird und wer sie prüft. Die Nachvollziehbarkeitsabdeckung misst, wie gut das geschieht. Ein Prüfer oder eine Journalistin, die fragt „woher stammt diese Zahl?“, sollte binnen Minuten eine klare Antwort bekommen.

**6. Lassen Sie vor der Einreichung von einem unabhängigen Leser prüfen.** Lassen Sie jemanden außerhalb des Teams, das den Bericht erstellte, die Definitionen, die Arithmetik und die Darstellung prüfen. Reviews fangen Fehler und unbelegte Aussagen. Erfassen Sie das Review. Eine kurze Freigabe durch die verantwortliche Person macht die Verantwortung klar.

**7. Korrigieren Sie offen.** Wird nach der Einreichung ein Fehler gefunden, korrigieren Sie zügig, erklären Sie, was sich änderte, und notieren Sie die Ursache. Eine Korrekturrate nahe null ist bei komplexen Daten verdächtig. Eine sichtbare, schnelle Korrektur schafft mehr Vertrauen als eine stehengelassene Zahl.

### Berichterstattung und Lernen getrennt halten

**8. Pflegen Sie eine Arbeitssicht für das Team.** Teams brauchen Kennzahlen, die ihnen beim Verbessern helfen, etwa Perzentile, das Alter der ältesten Elemente und Qualitätsbegleiter. Diese sind selten dieselben wie gesetzliche Zahlen. Beschränken Sie die Arbeitssicht nicht auf das Berichtete und steuern Sie nicht allein nach der berichteten Zahl.

**9. Gleichen Sie gesetzliche und interne Definitionen ab.** Weicht eine verlangte Kennzahl von der des Teams ab, dokumentieren Sie die Unterschiede und zeigen Sie beide. Zum Beispiel kann die Verfügbarkeitszahl eines Regulierers geplante Wartung ausschließen, während Nutzer sie als Ausfall erleben. Zeigen Sie den Abgleich im Kennzahlenregister und in den Berichtsanmerkungen. Das schützt vor dem Problem der „zwei Zahlensätze“.

**10. Koppeln Sie gesetzliche Ziele mit Begleitern.** Wird ein Ziel auferlegt, fügen Sie Kennzahlen hinzu, die Verzerrung offenbaren würden: Qualität, Nutzererlebnis und die ausgelassene Arbeit. Koppeln Sie zum Beispiel ein Ziel für die Zeit bis zur ersten Reaktion mit einer Kennzahl für Lösung und für wiederholte Kontakte (siehe Thema 3.1, Kennzahlen für den Service Desk). Erklären Sie im Bericht, wie die Zahl zu lesen ist.

### Für die Öffentlichkeit veröffentlichen

**11. Machen Sie veröffentlichte Informationen nutzbar.** Veröffentlichen Sie, wo Recht und Datenschutz es erlauben, in offenen, maschinenlesbaren Formaten, mit klaren Beschreibungen, Definitionen und Daten. Erfüllen Sie Barrierefreiheitsstandards für Dokumente und Webseiten. Daten so zu veröffentlichen, dass Menschen sie nicht lesen oder weiterverwenden können, erfüllt den Buchstaben und verfehlt den Zweck. Testen Sie mit echten Nutzern, auch mit solchen, die assistive Technologie nutzen (siehe Thema 6.4, Nutzer- und Mitarbeitererlebnis).

**12. Schützen Sie Datenschutz und Sicherheit in dem, was Sie veröffentlichen.** Aggregieren und unterdrücken Sie kleine Zahlen, die Menschen identifizieren könnten, vermeiden Sie Einzelheiten, die Angreifern helfen, und prüfen Sie Offenlegungsregeln mit Spezialisten. Wenden Sie dieselbe Sorgfalt auf Antworten nach Informationsfreiheitsgesetzen an. Erfassen Sie Entscheidungen über Schwärzungen und ihre Gründe.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Abdeckung der Berichtspflichten | Pflichten eng behandeln; den Eigner ohne Vereinbarung nennen | Review des Registers durch Compliance oder Interne Revision; Bestätigung durch Eigner |
| Rechtzeitigkeit von Berichten | Unvollständige Berichte einreichen, um das Datum zu halten; Entwürfe als Einreichungen zählen | Vollständigkeitsprüfung bei Einreichung; nur akzeptierte Berichte zählen; Korrekturrate |
| Korrekturrate | Korrekturen unterdrücken; Korrekturen leise vornehmen | Korrekturprotokoll von einem unabhängigen Leser überprüft; eine niedrige Rate zusammen mit der Nachvollziehbarkeit lesen |
| Nachvollziehbarkeitsabdeckung | Herkunft oberflächlich dokumentieren; nur einfache Zahlen einbeziehen | Herkunft stichprobenartig prüfen, indem eine Berechnung aus der Quelle wiederholt wird |
| Definitionsabgleich | Definitionen als abgeglichen erklären, ohne abzugleichen; die gesetzliche Definition nur im Bericht übernehmen | Abgleichsdokument überprüft; beide Zahlen nebeneinander zeigen |
| Berichtsaufwand | Stunden nicht buchen; Arbeit auf andere Teams verlagern | Mit Team-Feedback vergleichen; alle Beteiligten in die Schätzung einbeziehen |
| Barrierefreiheit der Veröffentlichungen | Ein Prüfwerkzeug nutzen, das nur einige Probleme findet; eine separate barrierefreie Version veröffentlichen, die hinterherhinkt | Manuelles Testen mit assistiver Technologie; Gleichstand der Versionen prüfen |

Ein gesunder Befund ist, dass jede Pflicht einen Eigner hat, Berichte pünktlich und genau sind, mit sichtbaren Korrekturen, Zahlen auf führende Systeme zurückführbar sind, gesetzliche und interne Definitionen abgeglichen sind, der Berichtsaufwand sinkt und veröffentlichte Informationen für die Öffentlichkeit nutzbar sind.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Manuelle Zusammenstellung von Berichten | Flexibel; funktioniert mit beliebigen Daten | Langsam, fehleranfällig, von Einzelnen abhängig |
| Automatisierte Berichterstattung | Wiederholbar, prüfbar, billig im Betrieb | Einrichtungsaufwand; kann eine schlechte Definition verfestigen |
| Ein Satz Kennzahlen für alles | Einfach | Verzerrt Arbeit; gesetzliche Zahlen passen selten zu den Bedürfnissen des Teams |
| Getrennte Berichts- und Lernsichten | Offenes Lernen; ehrliche Berichterstattung | Braucht Abgleich und Disziplin |
| Harte gesetzliche Ziele | Klare Rechenschaft | Verkehrte Wirkungen; Manipulation |
| Ziele mit Begleitern und Kontext | Offenbart Verzerrung | Mehr zu erklären |
| Frühe Einbindung der Regulierer | Weniger Überraschungen | Zeit; Grenzen zu wahren |
| Nur Beziehung auf Distanz | Klare Unabhängigkeit | Spätes Feedback; Nacharbeit |

Die Antwort in Worten ist, Berichte aus führenden Systemen zu automatisieren, eine Arbeitssicht des Teams getrennt von der Berichtssicht zu halten, Definitionen offen abzugleichen und Aufsichtsstellen früh einzubinden, während ihre Unabhängigkeit gewahrt bleibt.

## Fragen für die Diskussion im Team

**1. Welche Berichte schulden wir, wem und bis wann, und wer besitzt jeden?**
Stellen Sie die Liste im Raum zusammen und vergleichen Sie sie mit dem Register. Oft zeigen sich Lücken: Berichte aus Verträgen, an Geldgeber oder nach Regeln, die wenige kennen. Die Moderation sollte neue Elemente erfassen und Eigner zuweisen.

**2. Welche berichtete Zahl würden wir anders steuern, wenn sie nicht berichtet würde?**
Wählen Sie eine gesetzliche oder vertragliche Kennzahl und fragen Sie, was das Team täte, wenn sie niemand messen würde. Die Antwort offenbart, wo Zahl und Zweck auseinanderlaufen. Besprechen Sie, welche Begleitkennzahl den Unterschied zeigen würde.

**3. Können wir den Bericht des letzten Quartals heute aus der Quelle reproduzieren?**
Versuchen Sie es mit einem Bericht. Notieren Sie, was manuell, undokumentiert oder verloren ist. Einigen Sie sich auf den ersten Schritt zum Automatisieren oder Dokumentieren und wer ihn tut.

**4. Wie gehen wir mit einem Fehler um, der nach der Einreichung gefunden wird?**
Überprüfen Sie den Prozess und das letzte Beispiel. War die Korrektur schnell und offen? Hatte jemand Angst, ihn anzusprechen? Einigen Sie sich, was Korrektur normal macht.

**5. Was würde ein Mensch mit assistiver Technologie beim Lesen unseres veröffentlichten Berichts erleben?**
Testen Sie gemeinsam ein veröffentlichtes Element oder überprüfen Sie eine jüngere Barrierefreiheitsprüfung. Fragen Sie, wer die Barrierefreiheit veröffentlichter Dokumente besitzt. Einigen Sie sich auf eine Korrektur und einen Prozess, der Wiederholung verhindert.

**6. Was tut der Regulierer oder die Aufsichtsstelle tatsächlich mit unseren Daten?**
Viele Teams wissen es nicht. Planen Sie ein Gespräch, um es herauszufinden und zu fragen, ob eine andere Form ihnen ebenso dienen würde. Die Moderation sollte Grenzen der Unabhängigkeit festhalten.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams bauen die Ereignisse und Felder, von denen Berichte abhängen, und spüren den Druck gesetzlicher Ziele. Sie sollten Berichtsbedarf in die Definition of Done aufnehmen, eine offene Arbeitssicht pflegen und anzeigen, wenn ein Ziel die Arbeit verzerrt. Frühe Gespräche mit den Menschen, die berichten, helfen, Nacharbeit zu verhindern.

### Service- und Betriebsteams

Betriebsteams erzeugen den größten Teil der zugrunde liegenden Daten und bereiten oft die Berichte vor. Sie sollten die Herkunft dokumentieren, die Extraktion automatisieren und ein Korrekturprotokoll führen. Sie sind gut platziert zu erklären, wie eine Zahl zu lesen ist, und zu warnen, wenn sie in die Irre führt.

### Führung und Governance

Führungskräfte sind für Genauigkeit und Ehrlichkeit des Berichteten verantwortlich. Sie sollten Nachvollziehbarkeit und Abgleich verlangen, widerstehen, gesetzliche Zahlen zu individuellen Zielen zu machen, Menschen schützen, die Fehler ansprechen, und die Zusammenarbeit mit Aufsichtsstellen unterstützen. Die Governance sollte das Pflichtenregister und die Korrekturhistorie überprüfen.

### Kunden und Nutzer

Die Öffentlichkeit und Kunden verlassen sich auf veröffentlichte Informationen, um Services zur Rechenschaft zu ziehen. Sie brauchen Daten, die sie finden, lesen und weiterverwenden können, in barrierefreien Formaten und mit klaren Erklärungen ihrer Bedeutung. Sie verdienen auch zügige Benachrichtigung, wenn ein Incident sie betrifft, wie Regeln es verlangen können.

## In der Praxis: ein Beispiel aus dem Service-Management

Eine nationale Behörde bietet Online-Lizenzservices an, die jährlich von mehreren Millionen Menschen genutzt werden. Sie muss monatlich an ein Ministerium berichten, jährlich Leistungsdaten veröffentlichen und ihren Regulierer innerhalb einer festen Frist über größere Serviceincidents benachrichtigen. Die Zahlen unten sind illustrativ.

Ein internes Review findet, dass die Behörde 31 Berichte verschiedener Art schuldet und nur 22 mit benanntem Eigner und Definition im Pflichtenregister stehen, eine Abdeckung von 71 Prozent. Monatszahlen werden in etwa 60 Stunden von Hand zusammengestellt, meist indem aus drei Systemen in eine Tabelle gezogen wird. Die Nachvollziehbarkeit ist schlecht: Bei der Kernzahl Verfügbarkeit kann niemand die Zahl des Vorjahres reproduzieren. Die Definition des Ministeriums von Verfügbarkeit schließt geplante Wartung aus, und die eigene Arbeitssicht der Behörde zählt sie mit, was erklärt, warum Nutzer und Ministerium unterschiedliche Bilder sehen. Die Behörde erreichte ihr Ziel für die Zeit bis zur ersten Reaktion jeden Monat, und der Service Desk hat begonnen, Anfragen automatisch zu bestätigen, um es zu treffen, während die Zeit bis zur Lösung gestiegen ist. Zwei veröffentlichte Berichte fielen bei einem Barrierefreiheitstest mit einem Screenreader durch.

Die Leiterin der Servicequalität der Behörde vereinbart Änderungen mit dem Ministerium und den Liefer- und Betriebsteams. Das Pflichtenregister wird vollständig, mit Eignern, Definitionen und Daten. Monatszahlen stammen aus skriptgesteuerten Abfragen der Incident- und Monitoring-Systeme, mit dokumentierter Transformation und geprüfter Vorlage, was den Aufwand auf etwa 8 Stunden senkt. Eine Abgleichsnotiz legt die gesetzliche und die interne Definition von Verfügbarkeit dar, wobei beide Zahlen im Bericht gezeigt werden. Das Ziel für die erste Reaktion wird in der Arbeitssicht mit der Zeit bis zur Lösung und wiederholten Kontakten gekoppelt, und das Ministerium stimmt zu, die Begleitkennzahlen zu sehen. Die Behörde korrigiert auch eine Verfügbarkeitszahl des Vorquartals, erklärt die Ursache und veröffentlicht die Korrektur. Veröffentlichte Berichte entstehen in einer barrierefreien Vorlage, und ein Screenreader-Test kommt in die Release-Checkliste.

Ein Jahr später beträgt die Pflichtenabdeckung 100 Prozent, Berichte sind pünktlich, die Korrekturrate ist niedrig und jede Korrektur erklärt, die Nachvollziehbarkeit deckt alle Kernzahlen ab, und der Berichtsaufwand ist um etwa 85 Prozent gefallen. Das Büro der Ministerin bittet um ein neues Ziel von 99,95 Prozent Verfügbarkeit, mit den Führungskräften der Behörde in der Verantwortung. Die Leiterin der Servicequalität erklärt den Unterschied zwischen der gesetzlichen und der vom Nutzer erlebten Zahl und schlägt ein Ziel mit Begleitkennzahlen und einem Review-Datum vor. Die Entscheidung wird festgehalten, und das Ministerium stimmt einem gemeinsamen Review der Definition vor dem nächsten Berichtsjahr zu.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Entwerfen Sie für feste Berichtsanforderungen und halten Sie die Berichtssicht getrennt von der Lernsicht. Zu beachten ist, dass ein Berichtsziel die Arbeit verzerren kann, die es beschreibt.

### KI

Wo KI regulierte Prozesse unterstützt, muss der Bericht womöglich zeigen, wie Entscheidungen getroffen wurden und wer verantwortlich war. Prüfen Sie die Anforderungen mit Ihrem Rechtsberater und führen Sie Aufzeichnungen über KI-Nutzung. Zu beachten ist, dass in einer Einreichung verwendete KI-Ausgabe menschliche Verifizierung braucht.

### Automatisierung

Bauen Sie Berichte aus denselben Datensätzen, mit denen der Service betrieben wird, und automatisieren Sie Prüfungen, die vor der Einreichung laufen. Messen Sie den Prozess an Korrekturen. Zu beachten ist, dass Automatisierung einen Fehler in viele Berichte tragen kann.

### Analytik

Berichten Sie mit den genutzten Definitionen und dem Datum der Daten. Die Entscheidung, die dies untermauert, ist, was berichtet werden muss und woher die Daten kommen. Zu beachten ist, dass Definitionen je Regime abweichen; nehmen Sie also nicht an, eine sei universell.

## Branchenperspektive

**Startup.** Berichtspflichten können mit dem ersten Unternehmenskunden oder einem Regulierer eintreffen. Beginnen Sie mit einer kurzen Liste von Pflichten, erzeugen Sie Berichte aus Ihren eigenen Systemen und vermeiden Sie, einen separaten Berichtsprozess zu bauen. Seien Sie vorsichtig, wenn Sie in Verträgen Service Levels versprechen.

**Kleinunternehmen.** Pflichten sind oft vertraglich oder an einen einzelnen Regulierer gebunden. Führen Sie einen Kalender, nutzen Sie Vorlagen und dokumentieren Sie, wie Zahlen entstehen. Ein kleiner, genauer Bericht schlägt einen großen, hastigen.

**Großunternehmen.** Viele Pflichten über Regionen und Regime verlangen ein zentrales Register, gemeinsame Definitionen und gemeinsames Extraktionswerkzeug. Hüten Sie sich vor doppelten Anfragen an dieselben Teams. Nutzen Sie eine einzige Wahrheitsquelle für Incident- und Servicedaten, mit Sichten für jedes Regime.

**Behörden und öffentlicher Sektor.** Dies ist das Heimatfeld des Themas. Planen Sie für Gesetzgebung, Ministeranfragen, Prüfung, Anfragen nach Informationsfreiheitsgesetzen und öffentliche Kontrolle. Veröffentlichen Sie Daten offen, wo das Recht es erlaubt, erfüllen Sie Barrierefreiheitspflichten, bewahren Sie Unterlagen für die verlangte Zeit auf und dokumentieren Sie Entscheidungen. Widerstehen Sie, gesetzliche Zahlen zu individuellen Leistungszielen zu machen, und bedenken Sie die Wirkung von Zielen auf Bürger und Personal.

## Business Case: Motive, ROI und TCO

Die Kosten sind der Aufwand, das Pflichtenregister aufzubauen und zu pflegen, das Engineering automatisierter Extraktion und Vorlagen, Review-Zeit und Barrierefreiheitstests. Gegenüber manueller Zusammenstellung verlagert Automatisierung Aufwand von wiederholter Arbeit zu einem einmaligen Aufbau und leichter Pflege.

Der Ertrag sind weniger Fehler und Korrekturen, weniger Personalzeit für das Zusammenstellen, schnellere Antworten auf Anfragen der Aufsicht und mehr Vertrauen bei Regulierern und der Öffentlichkeit. Bauen Sie den Business Case aus Ihren eigenen Daten: Stunden je Bericht davor und danach, Zahl und Wirkung von Korrekturen, Zeit zur Beantwortung einer Frage der Aufsicht und die Kosten jeder vermiedenen Strafe oder kritischen Prüfungsfeststellung. Vermeiden Sie, Schätzungen der Compliance-Last zu zitieren, wenn Sie Quelle und Methode nicht zurückverfolgen können. Beziehen Sie die Kosten fortlaufender Zusammenarbeit mit Aufsichtsstellen ein und vergleichen Sie sie mit den Kosten von Überraschungen (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Nur nach der gesetzlichen Zahl steuern.** Es verzerrt die Arbeit. Halten Sie eine Arbeitssicht mit Begleitkennzahlen.
- **Zwei nicht abgeglichene Zahlensätze.** Vertrauen bricht zusammen. Dokumentieren und zeigen Sie die Unterschiede.
- **Handgebaute Tabellen als System.** Sie brechen und hängen von Einzelnen ab. Automatisieren Sie aus führenden Systemen.
- **Unvollständige Berichte einreichen, um ein Datum zu halten.** Es tauscht ein Versagen gegen ein anderes. Vereinbaren Sie Verlängerungen oder reichen Sie mit klaren Vorbehalten ein.
- **Stille Korrekturen.** Sie untergraben Vertrauen. Korrigieren Sie offen und erklären Sie.
- **Individuelle Ziele aus gesetzlichen Zahlen.** Sie belohnen Manipulation und bestrafen ehrliches Personal. Halten Sie Zahlen auf Serviceebene.
- **Unlesbare Veröffentlichungen.** Compliance der Form nach verfehlt den Zweck. Veröffentlichen Sie nutzbare, barrierefreie Daten.
- **Datenschutz bei der Veröffentlichung ignorieren.** Kleine Zahlen können Menschen identifizieren. Aggregieren und prüfen Sie die Offenlegung.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Pflichten und Definitionen | Von wenigen Menschen gekannt | Teilliste | Register mit Eignern, Definitionen und Daten; gesetzliche und interne Definitionen abgeglichen | Register an Gesetzesänderungen gemessen überprüft; Abgleich gepflegt | Definitionen gemeinsam mit Aufsichtsstellen entwickelt; über Behörden geteilt |
| Erstellung und Qualität | Manuelle Zusammenstellung | Vorlagen, einige Skripte | Automatisiert aus führenden Systemen mit Herkunft und unabhängigem Review | Korrekturen analysiert; Aufwand und Rechtzeitigkeit gesteuert | Berichte kontinuierlich erzeugt; Aufsichtsstellen greifen direkt auf Daten zu |
| Nutzung und Veröffentlichung | Berichten, um die Anfrage zu erfüllen | Auf Anfrage veröffentlicht | Arbeitssicht getrennt von der Berichtssicht; barrierefreie, wiederverwendbare Veröffentlichung | Begleitkennzahlen mit Zielen; Nutzertests der Veröffentlichungen | Offene, verknüpfte Daten mit öffentlicher Beteiligung am Entwurf |

## Checkliste

- [ ] Ein Register listet jede Berichtspflicht mit Eigner, Definition, Quelle, Fälligkeitsdatum und empfangender Stelle.
- [ ] Erforderliche Felder und Ereignisse sind von Anfang an in Services eingebaut.
- [ ] Berichte werden aus führenden Systemen durch versionierte Abfragen und Vorlagen erzeugt.
- [ ] Jede berichtete Zahl hat dokumentierte Herkunft und eine benannte prüfende Person.
- [ ] Ein unabhängiger Leser überprüft Berichte vor der Einreichung.
- [ ] Gesetzliche und interne Definitionen sind abgeglichen, und beide werden gezeigt.
- [ ] Korrekturen werden protokolliert, erklärt und zügig veröffentlicht.
- [ ] Gesetzliche Ziele haben Begleitkennzahlen und Kontext im Bericht.
- [ ] Veröffentlichte Berichte und Datensätze erfüllen den geltenden Barrierefreiheitsstandard und die Datenschutzprüfung.
- [ ] Ein Gespräch mit jeder größeren Aufsichtsstelle über ihren Bedarf steht im Kalender.

## KI-Prompts

**Ein Pflichtenregister aufbauen.**

```text
Here is a list of reports, notifications, and publications that we believe we
owe: [paste with sources, in plain language]. Structure them into a register
with fields for requirement, source, definition, data source, due date,
receiving body, and owner role. Flag missing information and obligations that
look duplicated across teams. Do not give legal conclusions. List your
assumptions and questions for legal and compliance.
```

**Zwei Definitionen abgleichen.**

```text
The statutory definition of [measure] is: [text]. Our internal definition is:
[text]. Our data fields are: [list]. Explain the differences, describe how each
affects the number, suggest how to show both in a report, and propose a short
note explaining the difference to readers. Do not assume facts not given.
List your assumptions.
```

**Berichtsautomatisierung planen.**

```text
We produce [report] monthly using these manual steps and sources: [list with
hours]. Propose a plan to automate it from systems of record, including
documented queries, a transformation step, lineage notes, review, and
reproducibility of past reports. Suggest what to keep manual and why. Do not
assume specific tools. List your assumptions and risks.
```

**Einen veröffentlichten Bericht auf Nutzbarkeit prüfen.**

```text
Here is the text structure of a report we plan to publish: [paste headings and
sample tables, with no sensitive content]. Review it for plain language,
definitions, context for figures, accessibility of tables and charts, and
privacy risks from small numbers. Suggest improvements. Remind me to test with
assistive technology and to check disclosure rules with specialists. List your
assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine gesetzliche oder regulierte Berichtskennzahl zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Berichtskennzahl seine Definition, seinen Abgleich, seinen Manipulationsvektor und seine Leitplanke zeigt.

## Wichtigste Erkenntnisse

- Behandeln Sie Berichtspflichten als Entwurfseingaben, aufgelistet mit Eignern, Definitionen und Fälligkeitsdaten.
- Erzeugen Sie Berichte aus führenden Systemen mit Herkunft und unabhängigem Review.
- Halten Sie eine offene Arbeitssicht getrennt von der Berichtssicht und gleichen Sie Definitionen offen ab.
- Koppeln Sie gesetzliche Ziele mit Begleitkennzahlen und machen Sie sie nie zu individuellen Zielen.
- Korrigieren Sie Fehler offen und schnell.
- Veröffentlichen Sie Informationen, die die Öffentlichkeit finden, lesen und weiterverwenden kann, bei geschütztem Datenschutz.

## Quellen und weiterführende Literatur

1. Seddon, J., *Systems Thinking in the Public Sector*, Triarchy Press, 2008.
2. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
3. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
4. European Parliament and Council, *Directive (EU) 2016/2102 on the accessibility of the websites and mobile applications of public sector bodies*, 2016.
5. Government Digital Service, *Service Standard*, United Kingdom, https://www.gov.uk/service-manual/service-standard.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Public sector](https://en.wikipedia.org/wiki/Public_sector).
9. Wikipedia, [Accountability](https://en.wikipedia.org/wiki/Accountability).
10. Wikipedia, [Freedom of information laws by country](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country).
11. Wikipedia, [Open government](https://en.wikipedia.org/wiki/Open_government).
12. Wikipedia, [Open data](https://en.wikipedia.org/wiki/Open_data).
13. Wikipedia, [Public procurement](https://en.wikipedia.org/wiki/Public_procurement).
14. Wikipedia, [Records management](https://en.wikipedia.org/wiki/Records_management).
15. Wikipedia, [Value for money](https://en.wikipedia.org/wiki/Value_for_money).
16. Wikipedia, [Performance audit](https://en.wikipedia.org/wiki/Performance_audit).
17. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
