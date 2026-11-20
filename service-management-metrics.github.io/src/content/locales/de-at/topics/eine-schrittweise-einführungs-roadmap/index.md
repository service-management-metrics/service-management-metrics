# Eine schrittweise Einführungs-Roadmap

**Beginnen Sie dort, wo Sie stehen, liefern Sie im ersten Monat einem Team etwas Nützliches und lassen Sie das Programm in kleinen Schritten wachsen, von denen jeder sich das Recht auf den nächsten verdient.**

## Überblick und Motivation

Die meiste Anleitung zu Kennzahlen beschreibt einen Endzustand: eine vollständige Menge von Kennzahlen, einen sauberen Datenspeicher, ein Dashboard für jede Zielgruppe, eine Kultur des Belegs. Wenige Organisationen kommen planmäßig dort an. Sie kommen, wenn überhaupt, durch eine Reihe kleiner nützlicher Schritte, von denen jeder sich bezahlt machte, bevor der nächste begann. Dieses Thema bietet eine Roadmap in diesem Geist: die ersten 30 Tage, die nächsten 60 und weitere 90, zusammen etwa 180 Tage. Die Zeitangaben sind eine grobe Form und kein Versprechen. Ein kleines Team kann schneller vorankommen, ein großes oder vorsichtiges langsamer.

Die Logik ist dieselbe Logik kontinuierlicher Auslieferung, die der Rest des Buches für Services empfiehlt. Liefern Sie früh eine dünne, funktionierende Scheibe. Setzen Sie sie echten Nutzern vor. Lernen Sie daraus, was sie damit tun. Erweitern Sie, was half, und lassen Sie fallen, was nicht. Ein Kennzahlenprogramm, das sechs Monate mit Entwurf verbringt und ein vollständiges Dashboard einem überraschten Publikum übergibt, wiederholt den alten Fehler des großen Releases: viel Aufwand, spätes Feedback und eine hohe Chance, dass das Ergebnis schlecht passt. Die Idee eines [Minimum Viable Product](https://en.wikipedia.org/wiki/Minimum_viable_product), der kleinsten Fassung von etwas, die Wert liefert und Lernen erzeugt, gilt für ein Programm wie für ein Produkt.

Die agilen Ziele prägen die Roadmap auf mehrere Weisen. Kontinuierliche Einbeziehung von Stakeholdern heißt, dass die ersten Wochen mit den Menschen verbracht werden, die die Zahlen nutzen und an ihnen gemessen werden, nicht in einem Hinterzimmer. Kontinuierliche Verbesserung heißt, dass der Plan selbst überprüft und geändert wird, während das Programm lernt, im Geist von [Kaizen](https://en.wikipedia.org/wiki/Kaizen), der Praxis kleiner, stetiger Verbesserung durch alle. Fortlaufende Weiterentwicklung heißt, dass keine Liste von Kennzahlen endgültig ist. Ein nachhaltiges Tempo heißt, dass die Roadmap einen bescheidenen Anteil der Zeit eines Teams verlangt und dass das Programm keine Berichtslast hinzufügt, die schwerer wiegt als seine Hilfe. Und um motivierte Individuen herum zu bauen heißt, mit Freiwilligen zu beginnen und mit den Fragen, die ihnen wichtig sind.

Die Roadmap respektiert die anderen Themen dieses Teils. Sie setzt die Spielregeln des Vertrauens aus dem Einführungsthema voraus (siehe Thema 11.3, Kennzahlen einführen, ohne Angst zu erzeugen), nutzt die Dashboard-Prinzipien (siehe Thema 11.1, Ein Dashboard für Servicekennzahlen entwerfen), hält die Werkzeuge dünn, bis der Wert bewiesen ist (siehe Thema 11.2, Werkzeuglandschaft), und verfolgt den Fortschritt mit dem Reifegradprofil des Programms (siehe Thema 11.4, Reifegradmodell für Kennzahlenprogramme).

Drei Ideen helfen, die frühe Arbeit zu verankern. Erstens, beginnen Sie mit einer Basislinie. Ein [Run Chart](https://en.wikipedia.org/wiki/Run_chart) einiger Monate vorhandener Daten zeigt, wie die Dinge stehen, und gibt späteren Änderungen etwas zum Vergleichen. Zweitens, prüfen Sie zu Beginn die [Datenqualität](https://en.wikipedia.org/wiki/Data_quality), denn die wertvollsten frühen Verbesserungen kommen oft daraus, zu beheben, wie Arbeit erfasst wird, und nicht aus irgendeinem Diagramm. Drittens, machen Sie Ergebnisse sichtbar: Ein [Information Radiator](https://en.wikipedia.org/wiki/Information_radiator), eine Anzeige, die Information auf einen Blick zeigt, ohne dass jemand fragt, hilft einem Team, seine eigenen Daten zu sehen und Gespräche anzustoßen. Die ersten Schritte haben meist die Form eines [Pilotprojekts](https://en.wikipedia.org/wiki/Pilot_project) mit willigen Teilnehmern, gefolgt vom Verbreiten dessen, was funktionierte, als [Change Management](https://en.wikipedia.org/wiki/Change_management) in der weiteren Organisation (siehe Thema 9.6, Kennzahlen für organisatorischen Wandel und Akzeptanz).

Keine Roadmap passt zu jeder Organisation. Der Plan unten ist ein Ausgangspunkt, den die Menschen anpassen sollen, die ihn ausführen.

## Leitprinzipien

- **Beginnen, wo man steht.** Nutzen Sie die Daten, Werkzeuge und Gewohnheiten, die Sie haben. Warten Sie nicht auf eine neue Plattform.
- **Mit Freiwilligen pilotieren.** Ein bis drei willige Teams, die an Fragen arbeiten, die ihnen wichtig sind.
- **Im ersten Monat Wert liefern.** Etwas, das einem Team hilft, nicht ein Bericht für das Management.
- **Eine dünne Scheibe nach der anderen.** Eine Quelle, eine Sicht, eine Handvoll Kennzahlen, dann erweitern.
- **Die Zusagen früh schreiben.** Eine kurze Charta, bevor die erste Zahl geteilt wird.
- **Überprüfen und anpassen.** Prüfen Sie am Ende jeder Stufe, was half, was schadete und was zu ändern ist.
- **Dinge stoppen.** Mustern Sie Kennzahlen und Berichte aus, die niemand nutzt, wenn die neuen kommen.
- **Vertrauen nicht überspringen.** Schnell bei Werkzeugen voranzukommen und Vertrauen zurückzulassen erzeugt Verzerrung.

## Kennzahlendefinitionen

Die Kennzahlen unten verfolgen den Fortschritt der Einführung selbst. Sie sind für das Programmteam und die Sponsoren da und werden als Signale gelesen, nicht als Ziele. Sie meiden Zählungen von Dashboards oder Berichten, die Aktivität belohnen würden.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Zeit bis zum ersten nützlichen Ergebnis | Verstrichene Zeit vom Start des Programms bis zur ersten Kennzahl, von der ein Pilotteam sagt, sie habe ihm geholfen, eine Änderung vorzunehmen | Tage vom Kickoff bis zur ersten vom Team bestätigten hilfreichen Nutzung | Tage | Programmprotokoll; Teambestätigung | Kontinuierliche Verbesserung | Frühe und kontinuierliche Lieferung von Wert | Einmal, dann je neuem Team |
| Teams, die Kennzahlen aktiv nutzen | Anteil der eingeladenen Teams, die ihre Kennzahlen im Zeitraum nach eigener Aussage in einem Review nutzten | Teams, die Kennzahlen in einem Review nutzten / eingeladene Teams | Prozent | Teambestätigung; Review-Notizen | Management des organisatorischen Wandels | Kontinuierliche Einbeziehung von Stakeholdern | Monatlich |
| Auf Kennzahlen zurückgeführte Verbesserungen | Zahl der Änderungen, die Teams mit Gründen dem zuschreiben, was eine Kennzahl zeigte | Zahl der von Teams berichteten Änderungen mit genannter Verbindung zu einer Kennzahl | Anzahl | Verbesserungsregister | Kontinuierliche Verbesserung | Belegbasierte Experimente | Vierteljährlich |
| Ausgemusterte Kennzahlen und Berichte | Kennzahlen oder Berichte, die gestoppt wurden, weil sie Entscheidungen nicht mehr informierten | ausgemusterte Anzahl je Quartal | Anzahl | Änderungsprotokoll des Katalogs | Kontinuierliche Verbesserung | Fortlaufende Weiterentwicklung | Vierteljährlich |
| Abdeckung durch Basislinien | Anteil der vereinbarten Kennzahlen, die eine erfasste Basislinie von mindestens einigen Monaten haben | Kennzahlen mit Basislinie / vereinbarte Kennzahlen | Prozent | Kennzahlenkatalog | Service-Level-Management; kontinuierliche Verbesserung | Beleg statt Meinung | Vierteljährlich |
| Aufwandsanteil des Programms | Anteil der Zeit teilnehmender Teams, der für Messaufgaben aufgewendet wird | Stunden für Erfassung, Berichterstattung und Review / gesamte Teamstunden, nach Schätzung | Prozent | Zeitschätzungen der Teams | Kontinuierliche Verbesserung | Nachhaltiges Tempo | Vierteljährlich |
| Abschluss der Stufen-Reviews | Anteil der geplanten Stufen-Reviews, die mit Teams gehalten wurden, mit erfassten Änderungen | gehaltene Reviews mit erfassten Änderungen / geplante Reviews | Prozent | Programmunterlagen | Kontinuierliche Verbesserung | Regelmäßige Reflexion | Je Stufe |

Die Zeit bis zum ersten nützlichen Ergebnis wird nach der eigenen Aussage des Pilotteams gemessen und nicht nach der des Programms. Teams, die Kennzahlen aktiv nutzen, wird nach dem gezählt, was Teams sagen, nicht nach Anmeldungen. Auf Kennzahlen zurückgeführte Verbesserungen ist eine Zählung genannter Verbindungen und kein Ziel, denn ein Ziel würde erfundene Verbindungen erzeugen. Der Aufwandsanteil des Programms sollte klein bleiben, und ein Anstieg ist eine Warnung.

## Empfehlungen

### Tage 1 bis 30: zuhören, vereinbaren und eine nützliche Sache liefern

**1. Finden Sie einen Sponsor und einige Freiwillige.** Bitten Sie eine leitende Führungskraft, das Programm zu sponsern und eine kurze Charta zu unterzeichnen. Laden Sie ein bis drei Teams ein, die neugierig und respektiert sind. Erklären Sie, dass das Ziel ist, ihnen zu helfen, ihre eigene Arbeit zu sehen und zu verbessern, und dass die Daten nicht genutzt werden, um Einzelne zu ordnen oder zu beurteilen (siehe Thema 11.3, Kennzahlen einführen, ohne Angst zu erzeugen).

**2. Stellen Sie die Fragen.** Treffen Sie jedes Pilotteam eine Stunde. Fragen Sie, was es bremst, was es überrascht und was es gern wüsste. Schreiben Sie die Fragen auf. Wählen Sie drei bis fünf Kennzahlen aus diesem Buch, die zu diesen Fragen sprechen, jede mit einer begleitenden Leitplanke (siehe Thema 1.3, Ergebnisse vor Output: Auswählen, was gemessen wird).

**3. Schauen Sie auf die Daten, die Sie schon haben.** Ziehen Sie einige Monate Historie aus den führenden Systemen und zeichnen Sie Run Charts. Prüfen Sie die Datenqualität ehrlich: fehlende Felder, geänderte Kategorien, nachträglich angelegte Datensätze. Beheben Sie die Erfassung an der Quelle, wo es billig ist. Eine einfache Tabelle genügt in dieser Phase (siehe Thema 1.5, Datenquellen und Instrumentierung).

**4. Liefern Sie eine nützliche Sache.** Geben Sie bis Ende des ersten Monats jedem Pilotteam eine kleine Sicht auf seine eigenen Daten mit einer Definition für jede Kennzahl und führen Sie ein Review-Gespräch. Suchen Sie eine Änderung, die die Daten nahelegen, etwa das Entfernen eines Warteschritts, und helfen Sie dem Team, sie auszuprobieren. Das erste nützliche Ergebnis zählt mehr als ein poliertes Werkzeug.

### Tage 31 bis 90: lernen, erweitern und zur Routine machen

**5. Halten Sie das erste Review mit den Pilotteams.** Fragen Sie, was half, was verwirrte, was riskant wirkte und was sie ändern würden. Überarbeiten Sie die Kennzahlen, die Definitionen und die Charta. Achten Sie besonders auf Zeichen von Furcht oder Manipulation. Teilen Sie eine kurze Geschichte dessen, was sich änderte, vom Team erzählt.

**6. Automatisieren Sie den dünnen Pfad.** Wo manuelle Arbeit schwer ist, automatisieren Sie die ein oder zwei Feeds, die am meisten zählen, mit Prüfungen auf Aktualität und Abgleich mit der Quelle. Halten Sie Definitionen in einem einfachen, portablen Katalog. Kaufen Sie noch keine Plattform, es sei denn, der Versuch hat gezeigt, dass vorhandene Werkzeuge die Aufgabe nicht erledigen können (siehe Thema 11.2, Werkzeuglandschaft).

**7. Etablieren Sie einen Review-Rhythmus.** Halten Sie in jedem Pilotteam ein kurzes monatliches Review, das Trends betrachtet, Entscheidungen erfasst und Ereignisse vermerkt. Schließen Sie die Möglichkeit ein, „keine Handlung“ zu sagen. Fügen Sie einen vierteljährlichen Blick auf das ganze Programm mit Sponsoren hinzu, mit aggregierten Sichten und Kommentaren der Teams.

**8. Laden Sie die nächste Welle ein.** Bieten Sie den Ansatz weiteren Teams an, angeführt von den Geschichten der Pilotteams. Lassen Sie jedes neue Team seine Kennzahlen aus einer Auswahl wählen, mit einem kleinen gemeinsamen Kern. Halten Sie das Tempo nachhaltig: wenige Teams auf einmal, mit Unterstützung der Pilotteams und der Programmleitung.

### Tage 91 bis 180: stärken, ausgleichen und die Übergabe vorbereiten

**9. Entwerfen Sie die Sichten der Zielgruppen.** Entwerfen Sie mit dem Publikum die im Dashboard-Thema beschriebenen Sichten für Serviceeigner und Führung, mit gemeinsamen Definitionen und den Kommentaren der Teams (siehe Thema 11.1, Ein Dashboard für Servicekennzahlen entwerfen). Halten Sie jede Sicht klein. Mustern Sie die älteren Berichte aus, die sie ersetzen.

**10. Fügen Sie Ausgewogenheit und Ergebnisse hinzu.** Erweitern Sie die Pilotkennzahlen zu einer ausgewogenen Menge, die Qualität, Zuverlässigkeit, Erlebnis und Kosten einschließt, mit Ergebnissen neben Aktivität (siehe Thema 6.5, Wertrealisierung und Geschäftsergebnisse). Prüfen Sie jede neue Kennzahl auf ihren Manipulationsvektor und ihre Leitplanke, bevor sie gezeigt wird.

**11. Bewerten Sie das Programm.** Führen Sie mit jedem teilnehmenden Team die Selbstbewertung aus dem Reifegradthema durch, berichten Sie das Profil und die Themen und wählen Sie einen oder zwei nächste Schritte in der Dimension, die die anderen begrenzt (siehe Thema 11.4, Reifegradmodell für Kennzahlenprogramme). Zählen Sie, was Sie ausgemustert haben, ebenso wie das, was Sie hinzugefügt haben.

**12. Entscheiden Sie, was als Nächstes kommt.** Entscheiden Sie im 180-Tage-Review mit Teams und Sponsoren, ob fortzufahren, anzupassen oder zu stoppen ist. Schreiben Sie auf, was das Programm getan hat, mit welchem Aufwand und was sich in den Services geändert hat. Wählen Sie die nächste Stufe: mehr Teams, tiefere Werkzeuge, Verknüpfungen mit Finanz- oder Kundenkennzahlen oder Konsolidierung. Erfassen Sie die Entscheidung und die Gründe.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Zeit bis zum ersten nützlichen Ergebnis | Eine triviale Änderung für nützlich erklären; ein Vorzeigestück überstürzen | Das Team fragen, was sich änderte; prüfen, dass die Änderung Bestand hatte |
| Teams, die Kennzahlen aktiv nutzen | Reviews halten, um ein Kästchen anzukreuzen; Nutzung behaupten, die nicht stattfand | Nach der getroffenen Entscheidung fragen; Review-Notizen beproben; mit Teams sprechen |
| Auf Kennzahlen zurückgeführte Verbesserungen | Verbindungen erfinden, um eine Zahl zu erreichen; Anerkennung für unabhängige Änderungen beanspruchen | Beschreibend halten; das Team nach der Begründung fragen; unsichere Verbindungen als solche akzeptieren |
| Ausgemusterte Kennzahlen und Berichte | Unbequeme Kennzahlen ausmustern; ausmustern und unter neuen Namen wieder einführen | Die Liste ausgemusterter auf ungünstige Trends überprüfen; einen genannten Grund verlangen |
| Abdeckung durch Basislinien | Historie fälschen; einen Zeitraum nutzen, der späteren Ergebnissen schmeichelt | Quelle und Zeitraum erfassen; Rohdaten behalten; Basislinien vor Änderungen wählen |
| Aufwandsanteil des Programms | Aufwand untertreiben; Arbeit zu Menschen außerhalb der Zählung verlagern | Die Menschen fragen, die die Arbeit tun; mit Überstunden spät im Zyklus vergleichen |
| Abschluss der Stufen-Reviews | Kurze, oberflächliche Reviews; Änderungen erfassen, die nie geschehen | Prüfen, dass Änderungen ausgeführt werden; Teams fragen, ob das Review ihre Zeit wert war |

Ein gesunder Befund zeigt ein erstes nützliches Ergebnis binnen des ersten Monats oder zweier, Teams, die Kennzahlen nutzen, weil sie sie hilfreich finden, eine Handvoll zugeschriebener Änderungen, ausgemusterte Berichte neben neuen, einen bescheidenen und stabilen Aufwandsanteil und Stufen-Reviews, die zu echten Änderungen am Plan führen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Pilot mit Freiwilligen | Vertrauen; echte Geschichten | Langsamerer Start; Auswahlverzerrung |
| Einführung bei allen Teams zugleich | Schnelle Abdeckung | Widerstand; Verzerrung |
| Zuerst Tabellen | Schnell; geringe Kosten; Lernen | Fragil; manueller Aufwand |
| Zuerst eine Plattform | Politur; Skalierung | Kosten; schwache Passung, bevor Fragen klar sind |
| Wenige Kennzahlen je Team | Fokus; geringe Last | Kann wichtige Bereiche verpassen |
| Viele Kennzahlen auf einmal | Breite | Überlast; Wildwuchs |
| Fester 180-Tage-Plan | Klarheit für Sponsoren | Starr; ignoriert, was gelernt wird |
| Stufen-Reviews, die den Plan ändern | Lernen; Passung | Weniger vorhersehbar für Sponsoren |

Die Antwort in Worten ist, mit Freiwilligen und Tabellen zu beginnen, zu erweitern, wie der Wert gezeigt wird, Sponsoren eine klare Form und Review-Punkte zu geben und zu erlauben, dass sich der Plan ändert.

## Fragen für die Diskussion im Team

**1. Welche eine Frage zu unserer Arbeit wünschten wir diesen Monat beantworten zu können?**
Sammeln Sie Fragen von allen. Wählen Sie die, die am meisten zählt und mit Daten beantwortet werden könnte, die wir schon halten. Einigen Sie sich, wie eine nützliche Antwort aussähe.

**2. Was messen wir schon, und wer sieht es an?**
Listen Sie vorhandene Berichte und ihre Zielgruppen auf. Markieren Sie die, die niemand nutzt. Entscheiden Sie, welche auszumustern sind, um Platz für das Neue zu schaffen.

**3. Was machte uns bereit, das einen Monat auszuprobieren?**
Hören Sie die Bedingungen: eine Charta, Mitsprache bei den Kennzahlen, begrenzte Zeit. Vereinbaren Sie sie mit dem Sponsor vor dem Start.

**4. Welche kleine Änderung könnten die ersten Daten nahelegen?**
Schauen Sie gemeinsam auf einige Monate Historie. Nennen Sie eine mögliche Änderung und ein erwartetes Ergebnis. Einigen Sie sich, woran wir erkennen, ob sie half.

**5. Wie viel unserer Zeit können wir dem geben, ohne der Arbeit zu schaden?**
Schätzen Sie in Stunden pro Monat. Einigen Sie sich auf eine Grenze und überprüfen Sie sie im ersten Stufen-Review.

**6. Wann sollten wir den Plan stoppen oder ändern?**
Beschreiben Sie Zeichen: kein nützliches Ergebnis, wachsende Furcht, hoher Aufwand. Einigen Sie sich, wer entscheidet und wie die Entscheidung erfasst wird.

## Vier Perspektiven

### Produkt- und Lieferteams

Pilotteams tragen das frühe Risiko und liefern den frühen Beweis. Sie sollten um die Charta bitten, ihre eigenen Kennzahlen wählen, die ersten Sichten in ihren eigenen Reviews nutzen und ehrlich berichten, was half und was nicht. Sie profitieren, wenn das erste Ergebnis ein echtes Hindernis beseitigt.

### Service- und Betriebsteams

Betriebsteams liefern einen großen Teil der Daten und haben oft die größte Last. Sie sollten helfen, die Datenqualität zu bewerten, darauf hinweisen, wo eine Kennzahl das falsche Verhalten belohnen würde, und Zeit für Bereitschafts- und Incident-Arbeit schützen. Ihr nachhaltiges Tempo ist eine feste Beschränkung des Plans.

### Führung und Governance

Führungskräfte sponsern, unterzeichnen die Charta und schützen das Programm vor Missbrauch. Sie sollten einen bescheidenen Start akzeptieren, nach Ergebnissen und Geschichten statt nach Zahlen von Dashboards fragen, vermeiden, Ranglisten zu verlangen, und den Plan sich ändern lassen, während das Programm lernt. Sie sollten es an Entscheidungen messen, die sich verbesserten.

### Kunden und Nutzer

Kunden und Nutzer gewinnen, wenn das Programm zu besseren Services führt. Sie können an der Wahl von Erlebniskennzahlen teilnehmen und an der Überprüfung dessen, was über sie erhoben wird. Sie sollten Änderungen sehen, die aus ihrem Feedback entstehen.

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Nahverkehrsbetrieb hat 12 Teams in digitalen Services, Betriebstechnik und einem Service Desk. Ein neuer Chief Information Officer will „ein Kennzahlenprogramm in sechs Monaten“. Ein früherer Versuch kaufte eine Plattform und erzeugte Dashboards, die wenige öffneten. Die Zahlen unten sind illustrativ.

Die Leiterin der Serviceverbesserung schlägt eine 180-Tage-Roadmap mit Stufen-Reviews an den Tagen 30, 90 und 180 vor. In der ersten Woche trifft sie den Chief Information Officer, der eine einseitige Charta unterzeichnet, und lädt drei freiwillige Teams ein: den Service Desk, ein Fahrgastinformations-Team und ein Team für Infrastrukturbetrieb. In einstündigen Sitzungen nennt jedes Team seine Fragen. Der Service Desk will wissen, warum dieselben Kundenprobleme wiederkehren. Das Fahrgastinformations-Team will wissen, ob seine Changes etwas kaputt machen. Das Infrastruktur-Team will wissen, wie viel seiner Zeit in ungeplante Arbeit geht.

Für jedes Team wählt sie drei bis fünf Kennzahlen aus diesem Buch, mit Leitplanken, und baut aus den Daten der vorherigen fünf Monate Run Charts in einer gemeinsamen Tabelle. Die Datenprüfung findet, dass 27 Prozent der Change-Datensätze im Fahrgastinformations-Team nach dem Deployment angelegt wurden und dass die Kategorien des Service Desks mitten im Zeitraum umorganisiert worden waren. Die Eingabegewohnheit zu beheben und die Kategorien abzubilden dauert zwei Wochen. Bis Tag 27 sieht der Service Desk, dass 19 Prozent seiner Kontakte Rückkehrer binnen einer Woche waren, konzentriert in zwei Kategorien, die mit einer verwirrenden Fahrplanseite zusammenhängen. Das Team arbeitet mit dem Fahrgastinformations-Team daran, die Seite zu ändern. Der Service Desk bestätigt das als erstes nützliches Ergebnis, an Tag 27.

Im Review an Tag 30 bitten die Teams um kürzere Definitionen und weniger Diagramme, und eines fragt, ob die Daten in seinen Jahresbeurteilungen genutzt würden. Die Charta wird klargestellt und sagt, dass sie es nicht werden. Zwischen Tag 31 und 90 automatisiert die Leiterin zwei Feeds, richtet in jedem Team ein monatliches Review ein, das Entscheidungen erfasst, und lädt aufgrund der Pilotgeschichten vier weitere Teams ein. Teams, die Kennzahlen aktiv nutzen, steht bei 7 von 7 eingeladenen. Im Review an Tag 90 berichten Teams fünf Änderungen, die sie ihren Kennzahlen zuschreiben. Das Programm hat drei alte wöchentliche Berichte ausgemustert. Der Aufwandsanteil wird auf 3 Prozent der Teamzeit geschätzt. Zwischen Tag 91 und 180 entwirft die Leiterin mit diesen Zielgruppen Sichten für Serviceeigner und Führung, fügt der ausgewogenen Menge Erlebnis- und Kostenkennzahlen hinzu und führt die Selbstbewertung durch: Die meisten Teams stehen bei Nutzung in Entscheidungen auf Stufe 2 und bei Vertrauen und Sicherheit auf 3, und der gewählte nächste Schritt ist ein Entscheidungsprotokoll in jedem Team. An Tag 180 bittet der Chief Information Officer um eine Rangliste aller 12 Teams nach ihrer Reife. Die Leiterin bietet das aggregierte Profil und die Themen an, erklärt die Charta, und die Bitte wird fallengelassen. Die Sponsoren stimmen zu, das Programm in den nächsten zwei Quartalen auf die verbleibenden fünf Teams auszudehnen, weiterhin auf freiwilliger Basis.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Liefern Sie im ersten Monat einem Team etwas Nützliches und wachsen Sie in kleinen Schritten, von denen jeder den nächsten verdient, im selben Geist kontinuierlicher Auslieferung wie die gemessenen Services. Zu beachten ist, dass eine feste Roadmap mit Terminen das Programm treiben kann, wenn das Lernen sagt, den Kurs zu ändern.

### KI

Entscheiden Sie früh, wo KI im Programm hingehört: KI-Assistenten für Analyse und Berichterstattung, Kennzahlen zur KI-Nutzung und Governance. Fügen Sie sie in kleinen, geprüften Schritten hinzu, mit einem Menschen, der KI-Ausgaben prüft, die in einem Bericht genutzt werden. Zu beachten ist, dass das frühe Hinzufügen von KI-Funktionen den Output des Programms aufblähen kann, bevor sein Wert gezeigt ist.

### Automatisierung

Automatisieren Sie die Datenerfassung für die ersten Kennzahlen, damit der Aufwand in die Interpretation geht, und messen Sie den eigenen Aufwandsanteil des Programms. Zu beachten ist, dass das Automatisieren zu vieler Kennzahlen auf einmal eine Pflegelast erzeugt, die das Programm nicht tragen kann.

### Analytik

Verfolgen Sie die Zeit bis zu einem ersten nützlichen Ergebnis und auf Kennzahlen zurückgeführte Verbesserungen und überprüfen Sie die Roadmap daran. Die Entscheidung, die dies untermauert, ist, ob zu erweitern, zu halten oder zu stoppen ist. Zu beachten ist, dass Verbesserungen schwer einer Kennzahl zuzuordnen sind; beschreiben Sie den Beleg also ehrlich.

## Branchenperspektive

**Startup.** Komprimieren Sie die Roadmap. Einigen Sie sich binnen zwei Wochen auf drei Fragen und zwei oder drei Kennzahlen und sehen Sie sie wöchentlich oder zweiwöchentlich gemeinsam an. Nutzen Sie, was Sie schon haben. Überprüfen Sie nach einem Quartal erneut. Ein Startup, das mit dem Bau von Werkzeugen wartet, verliert die Gewohnheit des Hinsehens.

**Kleinunternehmen.** Die ersten 30 Tage können ein einzelnes Gespräch sein, eine einseitige Liste von Fragen, eine Tabelle und eine Änderung. Die nächsten Stufen umfassen einen regelmäßigen monatlichen Blick. Das Hauptrisiko ist, dass die Person, die es aufsetzte, die Einzige wird, die es versteht; schreiben Sie also auf, was jede Kennzahl bedeutet.

**Großunternehmen.** Nutzen Sie Wellen von Freiwilligen, ein kleines zentrales Team, das unterstützt und die Kennzahlen nicht besitzt, gemeinsame Definitionen und Stufen-Reviews mit Sponsoren. Widerstehen Sie einem einzigen globalen Termin. Erwarten Sie, die erste Stufe mit dem Beheben der Datenerfassung zu verbringen, und planen Sie Abstimmung mit Sicherheit, Datenschutz und Betriebsräten oder Personalvertretungen ein, wo es sie gibt.

**Behörden und öffentlicher Sektor.** Konsultation von Personalvertretungen und klare Kommunikation an Aufsichtsstellen gehören zur frühen Arbeit. Beschaffungszyklen begünstigen oft, mit bereits vorhandenen Werkzeugen zu beginnen. Halten Sie vorgeschriebene Berichterstattung getrennt von Verbesserungskennzahlen und dokumentieren Sie Entscheidungen für die Prüfung (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten der ersten 180 Tage sind überwiegend die Zeit von Menschen: die Programmleitung, ein kleiner Analyseaufwand, ein Anteil der Zeit der Pilotteams und die Aufmerksamkeit der Sponsoren. Werkzeugkosten können in den ersten Stufen gering oder null sein. Die größeren Kosten sind die Kosten, die frühen Schritte falsch zu machen, etwa Kennzahlen ohne Vertrauen zu starten.

Der Ertrag erscheint früh, wenn der erste Schritt gut gewählt ist: eine Änderung, die die Daten nahelegten, Berichte, die ausgemustert wurden, weniger Streit um Zahlen und Teams, die um mehr bitten. Bauen Sie den Business Case aus Ihrer eigenen Aufzeichnung: Tage bis zum ersten nützlichen Ergebnis, die Änderungen, die Teams Kennzahlen zuschreiben, durch ausgemusterte Berichte gesparte Stunden und aufgewendeter Aufwand. Vermeiden Sie, externe Zahlen zum Ertrag von Analytik ohne nachvollziehbare Quelle und Relevanz für Ihr Umfeld zu zitieren. Die glaubwürdige Behauptung ist bescheiden und lokal (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Der Big-Bang-Start.** Monate des Entwurfs, dann eine Überraschung. Liefern Sie früh eine dünne Scheibe.
- **Zuerst die Plattform.** Werkzeuge kommen vor den Fragen. Beginnen Sie mit dem, was Sie haben.
- **Dashboards zählen.** Aktivität gemessen, Wert ignoriert. Verfolgen Sie Entscheidungen und Änderungen.
- **Die Charta überspringen.** Furcht füllt die Lücke. Schreiben Sie die Zusagen, bevor die erste Zahl gezeigt wird.
- **Zu viele Teams auf einmal.** Die Unterstützung bricht zusammen. Breiten Sie in kleinen Wellen aus.
- **Nie etwas stoppen.** Alte Berichte bleiben neben den neuen. Mustern Sie aus, während Sie hinzufügen.
- **Ein fester Plan, gegen Belege verteidigt.** Der Plan sollte sich ändern, während Sie lernen.
- **Nach dem ersten Fehlschlag aufgeben.** Frühe Versuche lehren. Überprüfen, anpassen und erneut versuchen.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Start und Pilot | Kein Plan; Ad-hoc-Berichte | Interessierte Teams probieren Kennzahlen allein | Charta, Sponsor und freiwillige Piloten mit einem ersten nützlichen Ergebnis | Lernen aus dem Piloten treibt Wellenpläne; Zeit bis zum Wert verfolgt | Teams verbreiten den Ansatz untereinander; Sponsoren und Partner schließen sich an |
| Erweiterung und Rhythmus | Einmalige Anstrengungen | Einige regelmäßige Reviews | Monatliche Team-Reviews und vierteljährliche Programm-Reviews | Aufwandsanteil, Ausmusterung und zugeschriebene Änderungen gesteuert | Reviews verknüpfen sich über Teams und Services; Rhythmus passt sich dem Bedarf an |
| Lernen und Anpassung | Plan fest oder fehlend | Gelegentliche Lehren geteilt | Stufen-Reviews ändern den Plan | Roadmap-Schritte an das Reifegradprofil gebunden | Das Programm verbessert sich fortlaufend aus den Beiträgen aller |

## Checkliste

- [ ] Ein Sponsor hat eine kurze Charta unterzeichnet, bevor die erste Zahl geteilt wird.
- [ ] Ein bis drei freiwillige Teams haben ihre Fragen in eigenen Worten genannt.
- [ ] Für jede Pilotkennzahl existieren eine Basislinie mehrerer Monate Daten und eine Datenqualitätsprüfung.
- [ ] Jedes Pilotteam hat eine kleine Sicht mit einer Definition für jede Kennzahl.
- [ ] Ein erstes nützliches Ergebnis wird binnen des ersten Monats oder zweier geliefert und vom Team bestätigt.
- [ ] Ein Review-Rhythmus existiert in jedem Pilotteam und erfasst Entscheidungen.
- [ ] Alte Berichte werden ausgemustert, wenn neue Sichten sie ersetzen.
- [ ] Der Aufwand, den das Programm von Teams verlangt, wird geschätzt und klein gehalten.
- [ ] Stufen-Reviews an den Tagen 30, 90 und 180 werden mit Teams gehalten, und der Plan ändert sich dadurch.
- [ ] Die nächste Stufe wird mit Teams und Sponsoren entschieden und mit Gründen erfasst.

## KI-Prompts

**Einen 180-Tage-Plan entwerfen.**

```text
Draft a 180-day roadmap for introducing a service metrics program in [organization
type] with [number] teams. Use stage reviews at days 30, 90, and 180. For each
stage, list the goals, the activities, the people involved, the time asked of
teams, the expected first useful result, and the risks. Start with volunteer pilot
teams, a charter, and existing tools. Do not promise outcomes. List your
assumptions.
```

**Erste Kennzahlen wählen.**

```text
A pilot team describes its problems as follows: [paste]. Suggest three to five
measures to start with, each with a definition, a data source, the most likely
gaming vector, and a companion guardrail. Prefer data the team already holds.
Do not invent figures. List your assumptions and what to check about data quality.
```

**Eine Datenqualitätsprüfung durchführen.**

```text
Here is a sample description of the fields and values in our [system] records:
[paste]. Identify likely quality problems for measuring lead time, change failure,
and returning contacts, such as missing fields, changed categories, and records
created after the fact. Suggest simple checks and fixes at the source. Do not guess
at contents you cannot see. List your assumptions.
```

**Ein Stufen-Review planen.**

```text
Plan a 45-minute stage review for day [30, 90, or 180] with pilot teams and the
sponsor. Include questions on what helped, what felt risky, what effort it took,
what to stop, and what to change in the plan. Include how to record decisions and
share a short story of what changed. Do not rank teams. List your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um Startkennzahlen mit ihren gekoppelten Leitplanken für ein Pilotteam zu wählen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine Roadmap Kennzahlen auf Teamebene hält und für jede eingeführte Kennzahl einen Manipulationsvektor trägt.

## Wichtigste Erkenntnisse

- Beginnen Sie dort, wo Sie stehen, mit Freiwilligen, einer Charta und den Daten und Werkzeugen, die Sie schon haben.
- Liefern Sie im ersten Monat oder zweien einem Team ein nützliches Ergebnis.
- Erweitern Sie in kleinen Wellen und mustern Sie Berichte aus, wenn neue Sichten sie ersetzen.
- Prüfen Sie die Datenqualität früh und beheben Sie die Erfassung an der Quelle.
- Halten Sie Stufen-Reviews, die den Plan ändern, und halten Sie den Aufwand, der Teams abverlangt wird, klein.
- Entscheiden Sie die nächste Stufe mit Teams und Sponsoren und erfassen Sie die Gründe.

## Quellen und weiterführende Literatur

1. Ries, E., *The Lean Startup*, Crown Business, 2011.
2. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product).
7. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
8. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
9. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
10. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
11. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
12. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
