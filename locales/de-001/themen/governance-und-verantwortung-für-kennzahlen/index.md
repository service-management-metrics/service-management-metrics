# Governance und Verantwortung für Kennzahlen

**Eine Kennzahl, die niemand besitzt, definiert, überprüft oder verabschiedet, driftet von der Arbeit weg, die sie beschreibt. Geben Sie deshalb jeder berichteten Kennzahl einen benannten Eigner, eine schriftliche Definition, ein Überprüfungsdatum und einen Ausstieg.**

## Überblick und Motivation

Kennzahlen-Governance ist die Menge leichtgewichtiger Entscheidungen darüber, wem eine Messgröße gehört, was sie bedeutet, wer sie sehen darf, wie oft sie überprüft und wann sie entfernt wird. Sie ist ein enger Verwandter der [Data Governance](https://en.wikipedia.org/wiki/Data_governance), die das weitere Management von Datenverfügbarkeit, -qualität und -sicherheit in einer Organisation umfasst. Kennzahlen-Governance wendet dieselbe Disziplin auf die kleine, hochsichtbare Menge von Zahlen an, mit denen Teams und Führungskräfte Service- und Lieferarbeit steuern.

Der Bedarf zeigt sich in kleinen, wiederholten Reibungen. Zwei Teams berechnen „Lösungszeit“ unterschiedlich und verbringen ein Meeting damit, die Zahlen abzugleichen. Eine Dashboard-Kachel veraltet monatelang, weil die Person, die sie gebaut hat, die Stelle gewechselt hat. Eine Messgröße, die einem Team beim Diagnostizieren seines Flusses helfen sollte, wird von einem Lenkungskreis als Leistungsziel übernommen, genau die Situation, vor der das vorige Thema warnt (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen). Nichts davon ist ein statistisches Problem. Jedes ist ein Verantwortungsproblem, und jedes ist billig zu verhindern.

Agile und ITIL-Sichtweisen unterscheiden sich in der Betonung, und der Unterschied ist nützlich. In der agilen Sicht besitzt ein Team seine Arbeitsmessgrößen und verhandelt sie in Retrospektiven, Arbeitsvereinbarungen und Reviews. Die ITIL-Sicht, wie in ITIL 4 dokumentiert (der 2019 von AXELOS veröffentlichten Ausgabe, heute bei PeopleCert), behandelt Messung und Berichterstattung als allgemeine Management-Praktik und kontinuierliche Verbesserung als Praktik mit eigenen Rollen, Aufzeichnungen und Überprüfung. ITIL erwartet zudem, dass Serviceeigner und Praktikeigner für Ergebnisse verantwortlich sind. Die beiden Sichten passen zusammen: Das Team besitzt die Arbeitssicht, ein benannter Service- oder Praktikeigner besitzt die berichtete Sicht, und ein kleines Register verbindet beide.

Einige hier verwendete Begriffe. Ein **Kennzahleneigner** ist die eine verantwortliche Person für Definition, Datenqualität und Verwendung einer Kennzahl. Ein **Kennzahlenregister** ist ein kurzer Katalog der genutzten Kennzahlen mit Eigner, Definition, Datenquelle, Leitplanke und Überprüfungsdatum je Kennzahl. Eine **Kennzahlen-Charta** ist eine einseitige Erklärung von Zweck, Geltungsbereich, Rollen und Überprüfungsrhythmus für eine Menge von Kennzahlen. Eine **[Single Source of Truth](https://en.wikipedia.org/wiki/Single_source_of_truth)** ist das eine maßgebliche System oder der eine Datensatz, aus dem eine bestimmte Zahl berechnet wird. Ein **[Data Steward](https://en.wikipedia.org/wiki/Data_steward)** kümmert sich um Qualität und Definition einer Datendomäne, und in einer kleinen Organisation übernimmt oft der Kennzahleneigner diese Rolle. Eine **[RACI-Matrix](https://en.wikipedia.org/wiki/RACI_matrix)** hält fest, wer für jede Aktivität durchführungsverantwortlich, rechenschaftspflichtig, zu konsultieren und zu informieren ist. Ein **[Data Dictionary](https://en.wikipedia.org/wiki/Data_dictionary)** ist ein Katalog von Datenelementen und ihren Bedeutungen, zu dem die Definitionsspalte des Registers im größeren Maßstab wird. Das **[Prinzip der minimalen Rechtevergabe](https://en.wikipedia.org/wiki/Principle_of_least_privilege)** besagt, dass Menschen und Systeme den Zugriff erhalten, den sie für ihre Aufgabe brauchen, und nicht mehr. **[Kontinuierliche Verbesserung](https://en.wikipedia.org/wiki/Continual_improvement_process)** ist das fortlaufende Bemühen, Services, Praktiken und Arbeitsweisen zu verbessern, und sie ist zugleich eine ITIL-Praktik und eine agile Gewohnheit. SLA steht für Service Level Agreement und ITSM für IT-Service-Management.

## Leitprinzipien

- **Jede berichtete Kennzahl hat einen benannten Eigner.** Eine Rolle oder eine Person, nie „das Team“. Geteilte Verantwortung lässt die Definition ungepflegt.
- **Eine Definition, eine Single Source of Truth.** Schreiben Sie die Definition einmal auf, einschließlich Start und Stopp der Uhr, und berechnen Sie die Zahl an einer Stelle.
- **Governance im Verhältnis zur Tragweite.** Eine Kennzahl, mit der ein Team sein eigenes Board debuggt, braucht einen Satz. Eine Kennzahl in einem Vertrag, einem öffentlichen Bericht oder einer Vorstandsvorlage braucht einen Chartaeintrag, Überprüfung und eine Prüfspur.
- **Zugriff folgt dem Zweck.** Entscheiden Sie, wer welche Sicht sieht und warum. Das Standardpublikum der Arbeitssicht eines Teams ist das Team.
- **Im Rhythmus überprüfen und auf Belege hin verabschieden.** Kennzahlen haben Lebenszyklen. Führen Sie sie bewusst ein, überprüfen, überarbeiten und verabschieden Sie sie.
- **Aufschreiben und klein halten.** Ein Register, das auf eine Seite passt, wird gelesen. Ein Regelwerk nicht.
- **Governance dient den Gemessenen.** Zu den Eignern einer Kennzahl gehören die Menschen, deren Arbeit sie beschreibt.

## Kennzahlendefinitionen

Dies sind Messgrößen für die Gesundheit einer Kennzahlenpraxis, nicht eines Services. Sie sind bewusst wenige und billig aus dem Register selbst zu erheben. Jeder Zeitraum ist ein Kalenderquartal, sofern nicht anders angegeben.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Eigner-Abdeckung | Anteil der berichteten Kennzahlen mit einem benannten, aktuellen Eigner | berichtete Kennzahlen mit einem Eigner, der die Rolle am Periodenende noch innehat / am Periodenende berichtete Kennzahlen; schließt Kennzahlen aus, die nur im privaten Board eines Teams genutzt werden | Prozent | Kennzahlenregister | Messung und Berichterstattung | Arbeitsvereinbarungen | Vierteljährlich |
| Aktualität der Definition | Anteil der berichteten Kennzahlen, deren Definition innerhalb des vereinbarten Intervalls überprüft wurde | Kennzahlen mit einem Überprüfungsdatum innerhalb der letzten 6 Monate / berichtete Kennzahlen; die Uhr startet bei der letzten erfassten Überprüfung und stoppt am Periodenende | Prozent | Änderungsprotokoll des Kennzahlenregisters | Messung und Berichterstattung; kontinuierliche Verbesserung | Retrospektiv-Maßnahmen | Vierteljährlich |
| Quellenkonformität | Anteil der berichteten Kennzahlen, die aus genau einer benannten Quelle berechnet werden | Kennzahlen mit einer maßgeblichen Quelle und ohne bekannte Parallelberechnung / berichtete Kennzahlen; Parallelberechnungen werden durch Stichproben von Dashboards und Berichten gefunden | Prozent | Register plus eine Stichprobe von Dashboards und Berichten | Messung und Berichterstattung; Service-Level-Management | Definition of Done für eine Kennzahl | Vierteljährlich |
| Verabschiedungsrate | Zahl der in einem Zeitraum verabschiedeten oder zusammengeführten Kennzahlen im Verhältnis zu den berichteten | im Zeitraum verabschiedete oder zusammengeführte Kennzahlen / zu Periodenbeginn berichtete Kennzahlen; eine in eine private Teamsicht verschobene Kennzahl zählt als aus der berichteten Menge verabschiedet | Prozent | Änderungsprotokoll des Kennzahlenregisters | Kontinuierliche Verbesserung | Retrospektiv-Maßnahmen | Vierteljährlich |
| Aktualität der Zugriffsprüfung | Anteil der eingeschränkten Kennzahlensichten, deren Publikumsliste innerhalb des Intervalls überprüft wurde | eingeschränkte Sichten mit einer Publikumsprüfung in den letzten 6 Monaten / eingeschränkte Sichten; für die ganze Organisation offene Sichten sind ausgeschlossen | Prozent | Zugriffsliste oder Export der Berechtigungen des BI-Werkzeugs | Informationssicherheitsmanagement; Messung und Berichterstattung | Arbeitsvereinbarungen | Halbjährlich |
| Entscheidungsbezug | Anteil der berichteten Kennzahlen, die im Register mit einer Entscheidung verknüpft sind, die sie untermauern | Kennzahlen mit erfasster Entscheidung oder Frage / berichtete Kennzahlen; eine Verknüpfung zählt nur, wenn die Entscheidung in den letzten 12 Monaten getroffen wurde | Prozent | Kennzahlenregister und Entscheidungsprotokoll | Kontinuierliche Verbesserung | Stakeholder-Review und Verbesserungsergebnisse | Vierteljährlich |

Keine davon ist ein Ziel. Ein Register kann volle Eigner-Abdeckung zeigen und trotzdem nutzlose Kennzahlen beschreiben, lesen Sie die Tabelle also zusammen mit der Manipulationstabelle unten.

## Empfehlungen

### Verantwortung und das Register etablieren

**1. Führen Sie ein einseitiges Kennzahlenregister.** Listen Sie jede berichtete Kennzahl mit ihrer Frage, ihrem Eigner, ihrer Definition, Formel und Uhren, Einheit, Datenquelle, Publikum, Leitplanke, letztem Überprüfungsdatum und geplantem Überprüfungsdatum. Eine Tabellenkalkulation oder eine Markdown-Datei in der Versionsverwaltung genügt. Das Register ist das nützlichste einzelne Artefakt in diesem Thema, und das vorige Thema setzt bereits voraus, dass es existiert (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

**2. Benennen Sie einen Eigner pro Kennzahl und halten Sie die Rolle fest.** Der Eigner ist verantwortlich für die Definition, die Datenqualität und die Erklärung auffälliger Ergebnisse. Wählen Sie jemanden nah an Daten und Entscheidungen, oft den Serviceeigner, einen Praktikeigner oder eine Teamleitung. Halten Sie die Rolle ebenso fest wie die Person, damit der Eintrag einen Stellenwechsel übersteht und eine Vakanz in der Abdeckungszahl sichtbar wird.

**3. Trennen Sie, eine Kennzahl zu besitzen, davon, die Arbeit zu besitzen, die sie misst.** Der Eigner einer Kennzahl erklärt und pflegt sie, doch das Team, das die Arbeit leistet, bleibt für das Ergebnis verantwortlich. Das vermeidet zwei Fallen: den Eigner, dem eine Zahl angelastet wird, die er nicht beeinflussen kann, und das Team, das eine Zahl von sich weist, weil jemand anderes sie pflegt. Eine kurze RACI-Tabelle in der Charta macht das explizit.

**4. Schreiben Sie die Definition mit ihren Uhren einmal auf.** Das Register enthält die maßgebliche Definition: was gezählt wird, wo die Uhr startet und stoppt, welche Status sie pausieren und was ausgeschlossen ist. Verlinken Sie sie von jedem Dashboard, das die Kennzahl zeigt. Muss sich eine Definition ändern, ändern Sie sie zuerst im Register und markieren Sie die Änderung im Diagramm (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen, dazu, wie ein Bruch in einem Trend gezeigt wird).

**5. Berechnen Sie jede Kennzahl an einer Stelle.** Wählen Sie die maßgebliche Quelle, etwa das ITSM-Werkzeug, den Issue-Tracker oder das Monitoring-System, und halten Sie das im Register fest. Parallele Tabellenkalkulationen, die die Zahl nachbilden, sollten entweder verabschiedet oder umbenannt werden, damit sie niemand für die offizielle Zahl hält. Datenherkunft und Werkzeuge gehören zum nächsten Thema (siehe Thema 1.5, Datenquellen und Instrumentierung).

### Rhythmus und Änderungssteuerung festlegen

**6. Überprüfen Sie Definitionen in einem Rhythmus, der zur Tragweite passt.** Für Kennzahlen in Verträgen, regulierten Berichten oder Vorstandsunterlagen überprüfen Sie zweimal im Jahr und bei jeder Änderung des zugrunde liegenden Workflows. Für Arbeitsmessgrößen auf Teamebene ist die Retrospektive die Überprüfung. Jede Überprüfung stellt drei Fragen: Ist die Definition noch zutreffend, sind die Daten noch solide, und hat jemand die Zahl genutzt, um etwas zu entscheiden?

**7. Behandeln Sie Definitionsänderungen wie Änderungen an einem Service.** Halten Sie fest, wer die Änderung beantragt hat, warum, wer konsultiert wurde und an welchem Datum sie wirksam wird. Eine kleine Änderung an einem Status-Workflow kann eine Zeitmessgröße unbemerkt stark verschieben. Eine leichtgewichtige Änderungssteuerung für Definitionen übernimmt die Idee der Change-Befähigung ohne das Zeremoniell (siehe Thema 4.3, Kennzahlen für die Change-Befähigung, für das Gegenstück bei Serviceänderungen).

**8. Binden Sie die Überprüfung in die kontinuierliche Verbesserung ein.** Kennzahlen-Reviews sollten Verbesserungsarbeit hervorbringen oder eine ausdrückliche Entscheidung, nicht zu handeln. ITIL behandelt kontinuierliche Verbesserung als Praktik mit einem Register von Verbesserungsmöglichkeiten, und agile Teams erreichen dasselbe über Retrospektiv-Maßnahmen. Endet ein Review ohne Maßnahme und ohne Verabschiedung, fragen Sie, ob die Kennzahl überhaupt etwas leistet (siehe Thema 9.5, Kennzahlen für kontinuierliche Verbesserung).

**9. Verabschieden Sie Kennzahlen bewusst.** Definieren Sie einen Verabschiedungstest, zum Beispiel „in zwei Überprüfungszyklen in keiner Entscheidung herangezogen“, und wenden Sie ihn an. Archivieren Sie die Definition und die Endwerte, sagen Sie, was die Kennzahl gegebenenfalls ersetzt hat, und informieren Sie das Publikum. Ein Verabschiedungsprotokoll ist ein Beleg für Auditoren und eine Erleichterung für Menschen, die die Daten von Hand gepflegt haben.

### Sichten und Zugriff steuern

**10. Legen Sie das Publikum jeder Sicht fest.** Die meisten Kennzahlen haben eine Arbeitssicht für das Team, eine berichtete Sicht für die Serviceeignerin oder das Programm und manchmal eine externe Sicht für Kunden, eine Aufsichtsbehörde oder einen Lieferanten. Halten Sie fest, welches Publikum welche Sicht bekommt und warum. Beschränken Sie mit dem Prinzip der minimalen Rechtevergabe als Richtschnur Sichten, die personenbezogene Daten, Sicherheitsdetails oder wirtschaftlich sensible Lieferantenzahlen enthalten, und lassen Sie den Rest offen, damit Transparenz der Standard ist.

**11. Halten Sie Daten auf Individualebene aus der Berichterstattung heraus.** Die harte Regel dieses Buches lautet: Kennzahlen beschreiben Teams, Services und Systeme, nicht Menschen. Governance stützt das, indem sie die berichtete Granularität festlegt, zum Beispiel Team und Service, und jeden Auszug auf Personenebene auf den Data Steward beschränkt. Trifft eine Anfrage nach einer Aufschlüsselung auf Personenebene ein, halten Sie sie fest, fragen Sie, welcher Entscheidung sie dient, und bieten Sie eine Alternative auf Team- oder Systemebene an (siehe Thema 11.3, Kennzahlen einführen, ohne Angst zu erzeugen).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Eigner-Abdeckung | Eine Führungskraft oder einen Verteiler als Eigner benennen, um 100 Prozent zu erreichen, ohne dass jemand die Kennzahl erklären oder ändern kann | Jeden Eigner bitten, eine jüngste Bewegung der Zahl zu erklären; Fragen verfolgen, die länger als eine Woche unbeantwortet blieben |
| Aktualität der Definition | Das Überprüfungsdatum berühren, ohne die Definition zu lesen | Jedes Quartal drei Einträge als Stichprobe ziehen und die schriftliche Definition mit der tatsächlichen Konfiguration des Werkzeugs vergleichen |
| Quellenkonformität | Eine Quelle für maßgeblich erklären, während weiter Tabellenkalkulationen kursieren und abweichen | Verschiedene Zahlen für dieselbe Kennzahl in einer Stichprobe von Berichten zählen; Unterschiede im Review abgleichen |
| Verabschiedungsrate | Triviale oder ungenutzte Kennzahlen verabschieden, um diszipliniert zu wirken, oder eine Kennzahl umbenennen, damit sie als neu zählt | Das Verabschiedungsprotokoll darauf prüfen, was entfernt wurde; die Gesamtzahl berichteter Kennzahlen und den Entscheidungsbezug daneben verfolgen |
| Aktualität der Zugriffsprüfung | Die bestehende Publikumsliste genehmigen, ohne sie zu lesen | Die Liste mit der aktuellen Teamzugehörigkeit und den Rollen vergleichen; die Zahl der gefundenen Entfernungen berichten |
| Entscheidungsbezug | Eine vage Entscheidung wie „Service verbessern“ schreiben, um das Feld zu füllen | Eine datierte Entscheidung oder Frage verlangen und das Entscheidungsprotokoll stichprobenartig darauf prüfen, ob die Kennzahl tatsächlich herangezogen wurde |

Ein gesunder Befund ist ein Register, das sich ändert. Einträge haben Eigner, die Fragen beantworten, Überprüfungsdaten in den letzten sechs Monaten, ein Verabschiedungsprotokoll mit Gründen und eine kurze Liste von Kennzahlen, die noch gewollt sind, weil Menschen die Entscheidung nennen können, die sie untermauern. Ein Register mit jedem Feld gefüllt und ohne jede Änderung ist ein Warnzeichen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Zentrales Kennzahlenbüro | Einheitliche Definitionen und gemeinsame Werkzeuge; leichtere Prüfung | Langsam, fern der Arbeit und versucht, Messgrößen zu standardisieren, die sich zwischen Teams unterscheiden sollten |
| Föderierte Verantwortung mit gemeinsamem Register | Eigner sitzen nah an den Daten; das Register hält ein gemeinsames Minimum | Braucht stetige Ermutigung, um Qualitätsdrift zwischen Teams zu vermeiden |
| Nur teameigene Messgrößen | Schnell und passt zur Arbeit | Definitionen laufen auseinander; Verdichtungen werden unzuverlässig; Wissen geht mit Menschen |
| Standardmäßig offener Zugriff | Schafft Vertrauen und gemeinsames Verständnis | Risiko, sensible oder personenbezogene Details offenzulegen |
| Eingeschränkter Zugriff | Schützt sensible Daten | Verbirgt Kontext vor Menschen, die helfen könnten, und lädt zu Misstrauen ein |

Die Balance besteht darin, die dünne Schicht zu zentralisieren, die übereinstimmen muss, also Register, gemeinsame Definitionen und Zugriffsregeln, und alles andere zu föderieren.

## Fragen für die Diskussion im Team

**1. Wer würde antworten, wenn die meistzitierte Zahl auf unserem Dashboard morgen falsch aussähe?**
Bitten Sie die Gruppe, eine Person zu nennen, keine Gruppe. Fallen mehrere Namen oder keiner, hat die Kennzahl in der Praxis keinen Eigner. Die Moderation sollte die Kennzahl, den Kandidaten für den Eigner und das festhalten, was der Eigner für die Aufgabe bräuchte, etwa Lesezugriff auf die Daten oder Zeit im Review. Einigen Sie sich zum Schluss darauf, wer den Eigner bestätigt und die Rolle im Register erfasst.

**2. Wo existieren heute zwei Versionen derselben Zahl?**
Suchen Sie nach Berichten, die dieselbe Kennzahl mit unterschiedlichen Werten zeigen: eine wöchentliche Folie gegen ein Live-Dashboard oder ein Lieferantenbericht gegen den internen. Fragen Sie jeweils, wo der Unterschied entsteht, etwa bei Geltungsbereich, Uhr oder Ausschlüssen. Entscheiden Sie, welche Quelle maßgeblich ist und was mit der anderen Version geschieht. Rechnen Sie damit, dass das Gespräch verschiedene Arbeitsdefinitionen von Wörtern aufdeckt, die alle für gemeinsam hielten.

**3. Welche Kennzahl würden wir in diesem Quartal verabschieden, wenn wir eine verabschieden müssten?**
Beginnen Sie mit der Kennzahl, die zuletzt niemand in einer Entscheidung herangezogen hat. Fragen Sie, was geschähe, wenn sie verschwände, und wer es bemerken würde. Lautet die Antwort „niemand“, nehmen Sie sie für eine Probezeit aus der berichteten Menge. Die Moderation sollte Verabschiedung als normal und gesund behandeln und das Ergebnis im Verabschiedungsprotokoll festhalten.

**4. Wer sieht welche unserer Kennzahlen, und ist das Absicht?**
Zeichnen Sie ein einfaches Raster aus Kennzahlen und Publikum: Team, Serviceeigner, Führung, Kunden, Lieferanten, Aufsichtsbehörden. Markieren Sie, wo der Zugriff eine Entscheidung war und wo er einfach entstand. Suchen Sie jede Sicht, mit der sich Einzelpersonen vergleichen ließen. Einigen Sie sich auf mindestens eine Änderung einer Publikumsliste und darauf, wer sie als Nächstes überprüft.

**5. Wie ändern wir eine Definition, ohne den Trend zu brechen?**
Gehen Sie eine jüngste Änderung an einem Status-Workflow oder einer Prioritätsskala durch. Fragen Sie, wer informiert wurde, ob das Diagramm annotiert wurde und ob jemand alte und neue Werte verglichen hat. Entwerfen Sie einen leichten Änderungseintrag, den das Team tatsächlich ausfüllen würde. Einigen Sie sich darauf, wer Änderungen an Kennzahlen genehmigt, die in Verträgen oder externen Berichten erscheinen.

**6. Was würden wir nicht mehr tun, wenn Governance zur Last würde?**
Governance kann zum Ritual werden. Fragen Sie, welche Teile des heutigen Vorgehens Menschen überspringen würden, wenn niemand prüfte, und warum. Behandeln Sie die Antworten als Gestaltungs-Feedback und nicht als Widerstand. Die Moderation sollte nach Schritten suchen, die sich doppeln, Feldern, die niemand liest, und Reviews, die nie eine Entscheidung hervorbringen.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams besitzen Arbeitsmessgrößen wie das Alter von Arbeitselementen und die Zykluszeit, und sie sollten die Definitionen in ihren Arbeitsvereinbarungen festlegen. Wandert eine Kennzahl in einen Portfoliobericht, sollte das Team Eigner, Definition und Publikum kennen. Teams haben den größten Nutzen von einem kurzen Registereintrag für jede berichtete Messgröße und vom Recht, eine Definition anzufechten, die nicht mehr dazu passt, wie die Arbeit fließt (siehe Thema 2.1, Flussmaße).

### Service- und Betriebsteams

Service- und Betriebsteams tragen die Kennzahlen, die in SLAs und operativen Reviews auftauchen, daher haben Definitionen, Uhren und Ausschlüsse vertragliches Gewicht. Eigner sind hier meist Serviceeigner und Praktikeigner. Sie sollten eine Nachweisspur für Definitionsänderungen führen, berichtete Zahlen regelmäßig mit dem ITSM-Werkzeug abgleichen und als Erste eine Messgröße verabschieden, die keine operativen Entscheidungen mehr untermauert (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA).

### Führung und Governance

Führungskräfte setzen die Bedingungen: wer Kennzahlen besitzt, welche Sichten in die Vorstandsunterlagen gelangen und wie die Zahlen genutzt werden. Sie sollten Register und Verabschiedungsprotokoll anfordern, die Definitionen hinter den Hauptzahlen lesen und Anfragen nach Ranglisten auf Personenebene widerstehen. Governance-Gremien brauchen einen kleinen ständigen Tagesordnungspunkt, der das Register überprüft und Entscheidungen festhält, im Einklang mit den Erwartungen von ISO/IEC 20000-1 an Service-Management-Systeme (Stand der Ausgabe von 2018), ohne das Review zu einer Compliance-Übung zu machen (siehe Thema 8.3, Kennzahlen für Compliance und Audit).

### Kunden und Nutzer

Kunden und Nutzer sehen das Register selten, spüren aber sein Fehlen, wenn eine Zahl in einem Service-Review von ihrem Erleben abweicht. Erscheint eine Kennzahl in einem kundenseitigen Bericht oder einem SLA, sollte die Definition in einfacher Sprache verfügbar sein, einschließlich dessen, was ausgeschlossen ist. Kunden sollten einen Weg haben, eine Zahl zu hinterfragen, und der Eigner sollte sie beantworten (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler betreibt einen Service Desk, drei Produktteams und eine Betriebsgruppe. Alle Zahlen unten sind illustrativ.

Das monatliche Service-Review zeigt eine Incident-Lösungszeit von 5,1 Stunden im Median. Das eigene Dashboard der Produktteams, aus demselben ITSM-Werkzeug gebaut, zeigt 6,4 Stunden. Die beiden Zahlen sind seit einem Jahr im Umlauf. Ein neuer Serviceeigner fragt, wem die Kennzahl gehört, und erhält drei verschiedene Antworten.

Der Eigner verbringt mit den Teamleitungen und dem Data Steward zwei Sitzungen mit einem ersten Register von 14 berichteten Kennzahlen. Davon hatten 5 keinen Eigner und 4 zwei Quellen. Die Lösungszeit ist eine der Kennzahlen mit doppelter Quelle. Der Unterschied geht auf einen Pausenstatus zurück: Das Service-Review schließt die Zeit in „wartet auf Kunden“ aus, das Team-Dashboard nicht. Die Gruppe einigt sich auf eine Definition, benennt den Serviceeigner als Kennzahleneigner und veröffentlicht beide Werte ein Quartal lang auf derselben Seite, nach Definition beschriftet, damit niemand die Historie verliert. Sie annotieren das Diagramm dort, wo sich die Definition ändert.

Beim ersten vierteljährlichen Review wendet die Gruppe einen Verabschiedungstest an und entfernt 3 der 14 Kennzahlen, darunter ein monatliches Diagramm der Ticketzahl, das keine jüngste Entscheidung herangezogen hatte. Außerdem beschränken sie die Sicht, die die Lösungszeit nach Analyst aufschlüsselt, und lassen den Data Steward als einzigen Inhaber, und sie bieten stattdessen eine Aufschlüsselung auf Teamebene an.

Beim zweiten Review zeigt sich ein Manipulationsrisiko. Die Eigner-Abdeckung erreicht 100 Prozent, doch eine Stichprobe zeigt, dass zwei der Eigner ein Verteiler und ein Abteilungsleiter sind, der die Daten nie geöffnet hat. Die Gruppe ersetzt sie durch benannte Serviceeigner und nimmt die Leitplankenfrage in das Review auf: „Kann der Eigner die letzte Bewegung dieser Zahl erklären?“ Die Abdeckung fällt für ein Quartal auf 86 Prozent, was die Gruppe als ehrliches Ergebnis festhält. Die protokollierte Entscheidung lautet, das Ziel für die Abdeckung zu halten, bis die Leitplanke zwei Zyklen gelaufen ist.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Behandeln Sie das Kennzahlenregister als lebendes Dokument, das das Team aktualisiert, wenn es etwas lernt, nicht als einmalige Entwurfsübung. Eine praktische Gewohnheit ist ein kurzes regelmäßiges Review, in dem Kennzahleneigner, Team und ein Stakeholder vereinbaren, welche Kennzahlen bleiben, sich ändern oder verabschiedet werden. Zu beachten ist, dass häufige kleine Änderungen Trends brechen können, protokollieren Sie also jede Änderung mit einer Begründung.

### KI

Kennzahlen zu KI-Systemen brauchen einen Eigner wie Servicekennzahlen, und der Eigner braucht die Befugnis, das System anzuhalten, wenn die Zahlen sagen, dass es Nutzern schadet. Halten Sie im Register fest, welche Kennzahlen KI-gestützte Arbeit beschreiben und wer deren Qualitätspaar überprüft. Zu beachten ist, dass von Anbietern gelieferte KI-Dashboards eigene Definitionen haben; registrieren Sie sie deshalb mit zitierter und geprüfter Anbieterdefinition.

### Automatisierung

Automatisieren Sie die Pflege des Registers: Markieren Sie Kennzahlen ohne Eigner, ohne Überprüfungsdatum oder ohne jüngste Heranziehung in einer Entscheidung und benachrichtigen Sie den Eigner. Zu beachten ist, dass eine automatische Erinnerung, die niemand beantwortet, Rauschen ist; messen Sie deshalb, wie viele Markierungen zu Maßnahmen führen, und verabschieden Sie die, die es nicht tun.

### Analytik

Behandeln Sie den Zugriff auf Kennzahlendaten ebenfalls als Governance-Frage: wer Daten auf Teamebene sehen kann, wer Rohtickets sehen kann und wie lange Daten aufbewahrt werden. Die Entscheidung, die das Register untermauert, ist, was behalten, geändert oder verabschiedet wird. Zu beachten ist, dass Analytik über das Verhalten von Menschen in Überwachung umschlagen kann; halten Sie Kennzahlen deshalb auf Team- und Serviceebene und prüfen Sie die für Sie geltenden Datenschutzregeln.

## Branchenperspektive

**Startup.** Ein Gründer oder eine leitende Entwicklerin besitzt oft standardmäßig jede Kennzahl. Das Risiko ist, dass Definitionen in einem Kopf leben. Führen Sie in einem gemeinsamen Dokument ein Register mit fünf bis acht Kennzahlen, benennen Sie für jede einen Eigner und schreiben Sie die Definitionen an dem Tag auf, an dem eine Kennzahl erstmals in einem Investoren- oder Kundenupdate auftaucht.

**Kleinunternehmen.** Die Person, die die IT leitet, ist meist Eigner, Steward und Berichtsleser in einem. Halten Sie die Governance auf einer einzigen Seite, überprüfen Sie zweimal im Jahr und seien Sie besonders sorgfältig, wenn ein vom Anbieter gelieferter Bericht eine Kennzahl anders definiert als Ihre eigene. Benennen Sie, wer im Unternehmen jede kundenseitige Zahl besitzt.

**Großunternehmen.** Größe macht die gemeinsame Schicht unverzichtbar. Verwenden Sie ein Register mit Workflow, ein leichtgewichtiges Gremium, das vierteljährlich tagt, und eine Data-Steward-Rolle für jede wichtige Domäne. Bewahren Sie die Autonomie der Teams für Arbeitsmessgrößen und hüten Sie sich davor, Kennzahlen zu standardisieren, die sich zwischen Arten von Services unterscheiden sollten. Die Abstimmung mit der in der Organisation bereits vorhandenen Data Governance spart Aufwand.

**Behörden und öffentlicher Sektor.** Gesetzliche Berichterstattung, Prüfung und Beschaffung machen schriftliche Definitionen und Änderungsnachweise zur Pflicht. Behandeln Sie das Register als Prüfartefakt und halten Sie eine klare Linie von jeder veröffentlichten Zahl zu ihrem Eigner und ihrer Quelle. Zugriffsentscheidungen betreffen oft rechtliche und datenschutzrechtliche Prüfungen, halten Sie also die Grundlage jeder eingeschränkten Sicht fest (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind bescheiden und überwiegend Zeit. Rechnen Sie mit einigen Stunden für ein erstes Register, ein bis zwei Stunden pro Quartal für die Überprüfung und etwas Aufwand des Data Stewards, um widersprüchliche Quellen aufzulösen. Die Werkzeugkosten sind gering, da zum Start eine Tabellenkalkulation oder eine versionierte Datei genügt.

Der Ertrag besteht überwiegend in vermiedener Verschwendung. Meetings zum Abgleich von Zahlen entfallen, Audits finden eine klare Spur, und das Einarbeiten eines neuen Serviceeigners geht schneller, weil die Definitionen aufgeschrieben sind. Entscheidungen werden besser, weil sie auf Zahlen beruhen, die jeden Monat dasselbe bedeuten. Nennen Sie für diese Vorteile keinen Prozentsatz ohne eigene Daten. Brauchen Sie Zahlen für einen Business Case, zählen Sie die Stunden, die im letzten Quartal für den Abgleich widersprüchlicher Zahlen aufgewendet wurden, und die Zahl der Kennzahlen ohne erfassten Eigner, und zählen Sie nach zwei Überprüfungszyklen erneut.

## Anti-Muster und Fallstricke

- **Verantwortung im Ausschuss.** Eine Gruppe besitzt die Kennzahl, und niemand beantwortet Fragen. Benennen Sie eine verantwortliche Rolle und eine Vertretung.
- **Das Register als Friedhof.** Es wird einmal gebaut und nie angefasst. Setzen Sie Überprüfungsdaten in den Kalender und zeigen Sie das Datum auf jedem Dashboard.
- **Alles standardisieren.** Eine Definition, die Teams mit unterschiedlicher Arbeit aufgezwungen wird, erzeugt Zahlen, die nirgends etwas bedeuten. Teilen Sie nur die Schicht, die übereinstimmen muss.
- **Stille Definitionsänderungen.** Trends brechen, und Vertrauen folgt. Protokollieren Sie jede Änderung mit Begründung und annotieren Sie das Diagramm.
- **Governance ohne Verabschiedung.** Die Menge wächst nur, und die Aufmerksamkeit wird dünn. Wenden Sie bei jedem Review einen Verabschiedungstest an.
- **Geheimhaltung als Standard.** Arbeitssichten vor den Gemessenen zu verbergen erzeugt Misstrauen. Beschränken Sie nur, was echtes Risiko trägt, und erklären Sie warum.
- **Offener Zugriff auf Daten auf Personenebene.** Ein einziger Auszug kann binnen Tagen zur Rangliste werden. Legen Sie die berichtete Granularität auf Team und Service fest und halten Sie alle Daten auf Personenebene beim Steward.
- **Compliance-Theater.** Felder werden ausgefüllt, um eine Checkliste zu erfüllen. Prüfen Sie Einträge stichprobenartig auf Wahrheit und bitten Sie Eigner, jüngste Bewegungen zu erklären.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Verantwortung und Register | Eigner unklar; Kennzahlen leben in individuellen Tabellen | Einige Teams führen eine Liste mit Eignern | Ein Register für alle berichteten Kennzahlen, jede mit benanntem Eigner und Rolle | Abdeckung und Aktualität im Trend; Lücken führen zu ausgestatteten Korrekturen | Register mit Lieferanten und Kunden geteilt, wo Zahlen Grenzen überschreiten |
| Definitionen und Änderungssteuerung | Definitionen unterscheiden sich je Person | Für einige Vertragskennzahlen aufgeschrieben | Schriftliche Definition mit Uhren und Änderungsprotokoll für jede berichtete Kennzahl | Änderungen vor der Freigabe auf Auswirkungen auf Trends überprüft | Definitionen gemeinsam über Teams und Lieferanten überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| Überprüfung und Verabschiedung | Kennzahlen kommen hinzu, werden nie entfernt | Gelegentliches Aufräumen | Überprüfungsrhythmus und Verabschiedungstest aufgeschrieben | Review-Ergebnisse als Verbesserungsarbeit verfolgt | Verabschiedung und Erneuerung sind Routine, getrieben von Belegen aus Nutzern und Teams |
| Zugriff und Publikum | Zugriff durch Zufall | Eingeschränkte Sichten für sensible Daten | Publikum je Kennzahl aufgelistet, mit Begründung | Zugriff im Rhythmus überprüft; Daten auf Personenebene beim Steward | Publikum gemeinsam mit den Gemessenen und mit Kunden gestaltet |

## Checkliste

- [ ] Ein Kennzahlenregister existiert und listet jede berichtete Kennzahl.
- [ ] Jede berichtete Kennzahl hat einen benannten Eigner und eine erfasste Rolle.
- [ ] Jede berichtete Kennzahl hat eine schriftliche Definition mit Start-, Stopp- und Ausschlussregeln.
- [ ] Jede Kennzahl hat eine im Register benannte maßgebliche Quelle.
- [ ] Für jede Kennzahl sind ein Überprüfungsdatum und ein Intervall erfasst.
- [ ] Definitionsänderungen werden mit Begründung protokolliert und im Diagramm markiert.
- [ ] Ein Verabschiedungstest ist aufgeschrieben und wird bei jedem Review angewandt.
- [ ] Das Publikum jeder Sicht ist erfasst, mit Begründung für jede Einschränkung.
- [ ] Keine berichtete Sicht bringt Einzelpersonen in eine Rangfolge, und Daten auf Personenebene liegen beim Data Steward.
- [ ] Das Register wurde im letzten Quartal stichprobenartig auf Wahrheit geprüft.

## KI-Prompts

**Eine Kennzahlen-Charta für eine Kennzahlenmenge entwerfen.**

```text
Draft a one-page metrics charter for [team or service name], which provides
[type of service or delivery work]. The metric set is: [list of metrics]. The
audiences are [audiences]. Include purpose, explicit non-goals, a RACI table for
owner, data steward, and reviewers using these roles: [roles], review cadence,
and a retirement test. Base the draft only on what I have written. Do not invent
metrics, targets, or benchmark values. List your assumptions and the questions I
should answer to complete the charter.
```

**Konflikte zwischen zwei Versionen einer Kennzahl finden.**

```text
Here are two descriptions of what should be the same metric, [metric name].
Version A, from [source A]: [description and formula]. Version B, from
[source B]: [description and formula]. Compare them on what is counted, where
the clock starts and stops, which states pause it, and what is excluded.
Explain which differences could account for the gap between [value A] and
[value B], and suggest questions for the owner. Do not guess at values I have not
given. List your assumptions and what you could not determine.
```

**Ein Kennzahlenregister auf Lücken prüfen.**

```text
Below is an extract of our metric register with fields [list fields]. Review it
for missing owners, entries with no review date or one older than [interval],
metrics with more than one source, metrics with no linked decision, and views
that could expose person-level data. Report patterns by metric, not by
individual. Do not invent facts about our metrics. Tell me which findings are
certain from the text and which are guesses, and list your assumptions.

[paste register extract, with personal data removed]
```

**Ein Verabschiedungs-Review planen.**

```text
We review metrics every [interval]. Our retirement test is: [test]. For each of
the metrics below, using the notes I supply, propose retire, keep, merge, or
redesign, with a one-line reason and a question to ask the owner: [metrics with
last-cited date and owner role]. Also suggest how to announce each retirement to
[audience]. Do not invent usage data. List your assumptions and any information
that would change your recommendation.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema und die gekoppelte Leitplanke für eine Kennzahl zu finden, bevor Sie sie in das Register aufnehmen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Kennzahleneintrag einen Eigner, einen Manipulationsvektor und eine Leitplanke trägt.

## Wichtigste Erkenntnisse

- Governance sorgt dafür, dass Zahlen über die Zeit dasselbe bedeuten, und ein einseitiges Register ist ihr Kern.
- Benennen Sie für jede berichtete Kennzahl einen verantwortlichen Eigner und halten Sie die Rolle ebenso fest wie die Person.
- Schreiben Sie eine Definition mit ihren Uhren, berechnen Sie sie an einer Stelle und protokollieren Sie jede Änderung.
- Stimmen Sie das Gewicht der Governance auf die Tragweite der Kennzahl ab.
- Entscheiden Sie bewusst, wer welche Sicht sieht, halten Sie Daten auf Personenebene aus der Berichterstattung heraus und verabschieden Sie Kennzahlen auf Belege hin.

## Quellen und weiterführende Literatur

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
5. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
6. ISO/IEC 20000-1:2018, *Information technology, Service management, Part 1: Service management system requirements*, International Organization for Standardization.
7. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
8. Wikipedia, [Single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth).
9. Wikipedia, [Data steward](https://en.wikipedia.org/wiki/Data_steward).
10. Wikipedia, [RACI matrix](https://en.wikipedia.org/wiki/RACI_matrix).
11. Wikipedia, [Data dictionary](https://en.wikipedia.org/wiki/Data_dictionary).
12. Wikipedia, [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).
13. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
