# KI in der Messung des Service-Managements

**Halten Sie, bevor KI die Arbeit verändert, fest, wie die Arbeit heute aussieht, und messen Sie dann jede Nutzung von KI gegen diese Basislinie und gegen vergleichbare Arbeit ohne KI, denn die Versprechen werden groß sein und der Beleg meist klein.**

## Überblick und Motivation

Künstliche Intelligenz sitzt inzwischen in vielen Werkzeugen, die Teams zum Bauen und Betreiben von Services nutzen. [Künstliche Intelligenz](https://en.wikipedia.org/wiki/Artificial_intelligence) (KI) ist die Fähigkeit rechnergestützter Systeme, Aufgaben auszuführen, die mit menschlicher Intelligenz verbunden werden. Darin lernen [maschinelle Lernsysteme](https://en.wikipedia.org/wiki/Machine_learning) Muster aus Daten, und [generative KI](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)-Systeme, oft auf [großen Sprachmodellen](https://en.wikipedia.org/wiki/Large_language_model) gebaut, erzeugen Text, Code und andere Inhalte als Antwort auf Prompts. Im IT-Service-Management (ITSM) erscheinen diese Fähigkeiten bei der Ticket-Triage, der Zusammenfassung von Incidents, dem Entwurf von Wissensartikeln, vorgeschlagenen Antworten für den Service Desk, Code-Vervollständigung und Review in Liefer-Pipelines, Anomalieerkennung im Monitoring und Dialogassistenten für Nutzer. [AIOps](https://en.wikipedia.org/wiki/AIOps) ist der Name, der oft für die Anwendung von KI auf Daten des IT-Betriebs gebraucht wird.

Die Versprechen für diese Werkzeuge sind groß, und der Beleg in einer gegebenen Organisation ist meist klein. Anbieter berichten gesparte Zeit. Frühe Anwender berichten Begeisterung. Führungskräfte fragen nach dem versprochenen Effizienzgewinn. Teams berichten unterdessen, dass die Ausgabe geprüft werden muss, dass manche Vorschläge selbstsicher falsch sind und dass sich die Arbeit anders anfühlt. Messung ist der Weg, wie eine Organisation herausfindet, was davon für ihre eigene Arbeit stimmt. Dieser Teil des Buches nimmt KI ernst als etwas zu Messendes, mit denselben Leitplanken wie jede andere Kennzahlenfamilie.

KI verändert das Messproblem auf vier Arten.

- **Volumen und Geschwindigkeit steigen, während Qualität schwerer sichtbar wird.** KI kann Tickets, Antworten, Code und Dokumente schnell erzeugen, sodass Outputkennzahlen steigen. Ob der Output gut ist, ist eine eigene Frage (siehe Thema 10.4, Kennzahleninflation und Qualitätsverwässerung).
- **Basislinien verschwinden.** Ist KI erst im täglichen Gebrauch, lässt sich nicht mehr wiederherstellen, wie die Arbeit ohne sie aussah. Eine Basislinie muss vor der Änderung erfasst werden, oder es muss eine Vergleichsgruppe existieren.
- **Menschen bleiben mit Folgen in der Schleife.** [Human-in-the-Loop](https://en.wikipedia.org/wiki/Human-in-the-loop)-Entwürfe halten eine Person für das Ergebnis verantwortlich. Menschen, die maschinelle Ausgaben prüfen, folgen ihnen womöglich zu bereitwillig, ein Muster, das als [Automation Bias](https://en.wikipedia.org/wiki/Automation_bias) bekannt ist, oder sie verbringen mehr Zeit mit Prüfen, als sie sparten.
- **Ausgaben können geschliffen und falsch sein.** Eine [Halluzination](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) ist eine selbstsichere Ausgabe, die weder von der Eingabe noch von Tatsachen gestützt wird. Kennzahlen müssen eine Prüfung der Richtigkeit einschließen, stichprobenartig von einem Menschen.

Agile und ITIL-Arbeitsweisen bieten beide eine Haltung dazu. Die agilen Ziele kontinuierlicher Auslieferung, kontinuierlicher Verbesserung und fortlaufender Weiterentwicklung legen nahe, jede Nutzung von KI als kleines Experiment zu behandeln: den erwarteten Nutzen nennen, es mit wenigen willigen Menschen ausprobieren, vergleichen und entscheiden. ITILs Leitprinzip, iterativ mit Feedback voranzukommen, weist in dieselbe Richtung, und ihre Betonung von Wert fragt, welches Ergebnis sich für Nutzer und das Geschäft verbessert, nicht wie viel Text erzeugt wird. Das Ziel motivierter Menschen wird bedient, wenn KI langweilige Arbeit abnimmt und ihr Urteil respektiert, und nicht bedient, wenn KI zu einem Weg wird, das Tempo zu erhöhen oder die Menschen zu überwachen, die sie nutzen. Nachhaltiges Tempo bedeutet, dass gesparte Zeit nicht stillschweigend in mehr Nachfrage verwandelt werden sollte.

Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt für KI in schärfster Form. Werden „KI-Akzeptanz“ oder „KI-generierter Anteil des Codes“ zum Ziel, nutzen Menschen das Werkzeug dort, wo es nicht hilft, und die Qualität zahlt für die Zahl (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Dieses Thema behandelt die Grundlagen: wo KI in die Arbeit eintritt, welche Basislinien zu erfassen sind und welche Kennzahlen zeigen, ob eine Nutzung von KI hilft. Die nächsten Themen gehen tiefer auf gestützte Arbeit, auf Agenten und Chatbots, auf Inflation und Verwässerung und auf Governance. Fakten über KI-Produkte und -Regeln ändern sich schnell, und Aussagen über bestimmte Werkzeuge oder Vorschriften in diesem Teil sind auf den Stand Oktober 2026 datiert und sollten neu geprüft werden.

## Leitprinzipien

- **Vor der Einführung von KI eine Basislinie erfassen.** Ohne sie ist jede Nutzenbehauptung eine Meinung.
- **Jede Nutzung als Experiment mit Vergleich behandeln.** Vergleichen Sie mit ähnlicher Arbeit ohne KI im selben Zeitraum.
- **Qualität durch Stichproben mit Menschen messen.** Geschliffene Ausgabe ist nicht richtige Ausgabe.
- **Die vollen Kosten zählen.** Beziehen Sie Review-Zeit, Nacharbeit, Lizenzen und Inferenzkosten ein.
- **Menschen verantwortlich und informiert halten.** Wer KI nutzt, steht für das Ergebnis ein.
- **KI nicht zu einer Tempoerhöhung oder einem Monitor werden lassen.** Gesparte Zeit ist eine Entscheidung darüber, wie die Zeit zu nutzen ist.
- **Mit willigen Menschen und echten Problemen beginnen.** Mandate erzeugen Nutzung ohne Wert.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Vollständigkeit der Basislinien | Anteil der geplanten KI-Anwendungsfälle mit einer erfassten Basislinie vor der Einführung für ihre Hauptindikatoren | Anwendungsfälle mit datierter Basislinie / geplante Anwendungsfälle | Prozent | Register der Anwendungsfälle | Kontinuierliche Verbesserung; Messung und Berichterstattung | Basislinie vor einem Experiment | Vierteljährlich |
| Abdeckung der KI-Nutzung | Anteil der geeigneten Arbeitselemente oder Aufgaben, bei denen KI genutzt wurde, nach Anwendungsfall | Elemente mit KI-Unterstützung / geeignete Elemente, aus Werkzeugprotokollen oder Nutzer-Tags, auf Teamebene | Prozent | Werkzeug-Nutzungsprotokolle, Tags | Service Desk; Incident-Management; Release- und Deployment-Management | Annahme eines Werkzeugs durch willige Teams | Monatlich |
| Annahme- und Überschreibungsrate von Vorschlägen | Anteil der KI-Vorschläge, die unverändert angenommen, bearbeitet oder abgelehnt werden | Vorschläge je Kategorie / angebotene Vorschläge | Prozent | Werkzeugprotokolle, nach Team aggregiert | Service Desk; Wissensmanagement | Review maschineller Vorschläge | Monatlich |
| Geprüfte Genauigkeit der Ausgaben | Anteil der stichprobenartig gezogenen KI-Ausgaben, die ein qualifizierter Reviewer für richtig und zweckdienlich hält | als richtig beurteilte Ausgaben / gezogene Ausgaben | Prozent | Aufzeichnungen der Stichprobenprüfung | Qualitätssicherung; Wissensmanagement | Definition of Done für die Ausgabe | Monatlich |
| Aufgabenzeit gegenüber Basislinie | Zeit, eine definierte Aufgabe mit KI abzuschließen, im Vergleich zur Basislinie oder einer Vergleichsgruppe | Median und 85. Perzentil der Aufgabenzeit mit KI minus dasselbe für Basislinie oder Vergleich | Minuten oder Stunden | Zeitgemessene Aufgaben, Ticket-Zeitstempel | Service Desk; Incident-Management | Zykluszeit für eine Aufgabe | Vierteljährlich |
| Kosten je KI-gestützter Aufgabe | Gesamtkosten KI-gestützter Arbeit je Aufgabe, einschließlich Review und Nacharbeit | (Lizenz- und Nutzungskosten + Kosten der Zeit für Review und Nacharbeit) / mit KI abgeschlossene Aufgaben | Währung je Aufgabe | Anbieterrechnungen, Zeitschätzungen, Work-Tracker | Finanzmanagement für Services | Servicekosten je Ergebnis | Vierteljährlich |
| Ergebnisentwicklung gegenüber Vergleich | Veränderung des Ergebnisindikators für KI-gestützte Arbeit im Vergleich zu ähnlicher nicht gestützter Arbeit | Veränderung des Indikators der KI-gestützten Gruppe minus Veränderung der Vergleichsgruppe | Indikatoreinheiten | Ergebniskennzahlen je Anwendungsfall (Qualität, Zufriedenheit, Wiedereröffnungsrate, Defekte) | Kontinuierliche Verbesserung | Lernen aus Experimenten | Vierteljährlich |

Definieren Sie jeden Anwendungsfall durch die Aufgabe, die Nutzer und die Ergebnisindikatoren und erfassen Sie sie im Register. Die Abdeckung der KI-Nutzung ist eine beschreibende Kennzahl und kein Ziel. Die geprüfte Genauigkeit wird gegen einen schriftlichen Standard von einer qualifizierten Person beurteilt, die die Ausgabe nicht erzeugte. Die Aufgabenzeit schließt die Zeit zum Prompten, Prüfen und Korrigieren ebenso ein wie die zum Erzeugen. Die Kosten je Aufgabe zählen die Personenzeit, die mit Prüfen und Beheben verbracht wird. Die Ergebnisentwicklung verlangt einen vorab gewählten Vergleich und eine Notiz zu anderen Änderungen im Zeitraum.

## Empfehlungen

### Entscheiden, wohin KI gehört

**1. Listen Sie die Aufgaben und das Problem auf, das jede Nutzung von KI adressiert.** Beginnen Sie beim Schmerz, nicht beim Werkzeug: wiederholtes Entwerfen, langsame Triage, verstreutes Wissen, lange Reviews, verrauschte Alarme. Schreiben Sie für jede mögliche Nutzung das Problem, wer es spürt, das Ergebnis, das sich verbessern soll, und die Risiken auf. Überspringen Sie Nutzungen ohne klares Problem. Das ist das Register, an dem die Basislinie und die Kennzahlen hängen.

**2. Klassifizieren Sie das Risiko jeder Nutzung.** Ein Werkzeug, das interne Notizen entwirft, trägt ein anderes Risiko als eines, das Produktionssysteme ändert, Kunden antwortet oder Entscheidungen über Menschen trifft. Klassifizieren Sie Nutzungen nach dem Schaden bei falscher Ausgabe, wer betroffen ist und ob eine Person sie prüft, bevor sie wirkt. Nutzungen mit höherem Risiko brauchen stärkere Kennzahlen, Stichproben und Governance (siehe Thema 10.5, Kennzahlen für KI-Governance und -Risiken).

**3. Beginnen Sie mit willigen Menschen und begrenzten Aufgaben.** Pilotieren Sie mit Freiwilligen bei einer Aufgabe, die häufig und prüfbar ist. Freiwillige geben ehrliches Feedback und passen das Werkzeug an ihre Arbeit an. Eine begrenzte Aufgabe macht Basislinien und Vergleiche machbar. Vermeiden Sie, mit der sensibelsten Arbeit zu beginnen.

### Basislinien erfassen und Vergleiche aufsetzen

**4. Erfassen Sie die Basislinie vor der ersten Nutzung.** Erfassen Sie für jeden Anwendungsfall den aktuellen Stand der Indikatoren: Zeit bis zum Abschluss, Qualität oder Defektrate, Nacharbeit, Zufriedenheit der Nutzer und Kosten. Nehmen Sie genug Beobachtungen, um die normale Schwankung zu sehen (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen). Datieren Sie die Basislinie und bewahren Sie sie. Eine nach dem Rollout genommene Basislinie ist eine Aufzeichnung der neuen Welt.

**5. Bauen Sie einen Vergleich.** Halten Sie, wo möglich, für den Pilotzeitraum eine ähnliche Gruppe oder Menge von Aufgaben, die keine KI nutzt, oder wechseln Sie die Nutzung nach Woche oder Aufgabentyp auf faire Weise ab. Randomisierung ist ideal und oft unpraktisch. Sagen Sie offen, was sich sonst änderte. Ohne Vergleich werden Verbesserungen durch Saisonalität, Besetzung oder Lernen dem Werkzeug gutgeschrieben.

**6. Messen Sie Zeit ehrlich.** Die Zeit bis zu einem ersten Entwurf ist selten die richtige Kennzahl. Messen Sie die Zeit bis zu einem fertigen, geprüften Ergebnis, einschließlich Prompten, Review und Korrektur. Menschen berichten oft gesparte Zeit auf Grundlage des Erzeugungsschritts, und der Review-Schritt frisst einen Teil oder alles davon. Zeitstudien an einer Stichprobe von Aufgaben sind den Aufwand wert.

### Qualität und Kosten messen

**7. Ziehen Sie Stichproben der Ausgaben für das Review durch qualifizierte Menschen.** Ziehen Sie jeden Monat eine Zufallsstichprobe KI-gestützter Ausgaben und lassen Sie eine qualifizierte Person sie gegen einen schriftlichen Standard beurteilen. Berichten Sie Genauigkeit, die Arten gefundener Fehler und Trends. Das ist der Hauptschutz davor, dass sich geschliffene Fehler verbreiten. Halten Sie den Reviewer unabhängig vom Erzeuger und rotieren Sie die Reviewer.

**8. Beobachten Sie Annahme- und Überschreibungsmuster.** Eine sehr hohe Annahmerate kann Automation Bias signalisieren, bei dem Menschen ohne Prüfung annehmen. Eine sehr niedrige kann ein Werkzeug signalisieren, das nicht nützlich ist. Nutzen Sie die Raten als Anstöße für Gespräche mit dem Team und fragen Sie, was die Zahlen in seiner Erfahrung bedeuten. Setzen Sie keine Ziele für Annahme.

**9. Zählen Sie die vollen Kosten je Aufgabe.** Beziehen Sie Lizenzgebühren, nutzungsbasierte Gebühren, die Zeit für Prompten, Prüfen und Korrigieren, Schulung und Governance-Aufwand ein. Vergleichen Sie mit den Kosten der Basislinie. Ein Werkzeug, das schnell Entwürfe macht und starke Korrektur braucht, kann mehr kosten als der alte Weg. Beziehen Sie die Kosten von Fehlern ein, die Nutzer erreichen.

### Die menschliche Seite richtig halten

**10. Schützen Sie Menschen vor Überwachung und vor schleichender Tempoerhöhung.** Aggregieren Sie KI-Nutzungsdaten auf Teamebene und nutzen Sie sie nicht, um Einzelne zu bewerten. Nutzen Sie Nutzung nicht als Leistungskennzahl. Vereinbaren Sie vorab, dass gesparte Zeit nicht automatisch zu Mehrarbeit wird, und entscheiden Sie mit dem Team, was damit zu tun ist: Qualität, Lernen, Verbesserung oder andere Arbeit. Ein gleichbleibendes Tempo ist ein Entwurfsziel (siehe Thema 9.2, Kennzahlen für Zufriedenheit und Wohlbefinden).

**11. Fragen Sie die Menschen, die es nutzen.** Kurze Pulse und Gespräche offenbaren, was die Zahlen verpassen: wo das Werkzeug hilft, wo es frustriert, wo es die Arbeit vom Erzeugen zum Prüfen verschiebt und ob es die Zufriedenheit mit der Stelle verändert. Behandeln Sie Bedenken zu Fähigkeiten, Qualität und Arbeitsplatzsicherheit mit Respekt.

**12. Entscheiden, veröffentlichen, erneut prüfen.** Entscheiden Sie am Ende jedes Piloten, zu skalieren, anzupassen oder zu stoppen, und erfassen Sie den Beleg. Teilen Sie Ergebnisse ehrlich, auch Null- und negative. Überprüfen Sie Entscheidungen erneut, während sich die Werkzeuge ändern, was schnell geschieht. Eine Nutzung, die letztes Jahr nicht half, kann jetzt helfen, und umgekehrt.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Vollständigkeit der Basislinien | Basislinien nachträglich erfassen; bequeme Indikatoren nutzen | Datumsgestempelte Basislinien; unabhängiges Review der Basislinienmethode |
| Abdeckung der KI-Nutzung | Nutzung anordnen; triviale oder automatische Aufrufe zählen | Nie ein Ziel; mit Ergebnisentwicklung vergleichen; bedeutsame Nutzung zählen |
| Annahme- und Überschreibungsrate von Vorschlägen | Annahme belohnen; Ablehnung umständlich machen | Keine Ziele; geprüfte Genauigkeit der Ausgaben; Nutzer nach ihrer Erfahrung fragen |
| Geprüfte Genauigkeit der Ausgaben | Leichte Ausgaben ziehen; nachsichtige Reviewer | Zufallsstichprobe durch unabhängige Reviewer; schriftlicher Standard; Rotation der Reviewer |
| Aufgabenzeit gegenüber Basislinie | Nur die Erzeugung messen; leichte Aufgaben wählen | Zeit bis zum geprüften Ergebnis; Aufgaben zufällig ziehen; Review und Nacharbeit einbeziehen |
| Kosten je KI-gestützter Aufgabe | Review-Zeit oder Governance-Kosten weglassen | Checkliste der vollen Kosten; mit Zeitstudien vergleichen |
| Ergebnisentwicklung gegenüber Vergleich | Günstige Gruppen oder Zeiträume wählen; andere Änderungen ignorieren | Vorab vereinbarter Vergleich und Zeitraum; Liste anderer Änderungen |

Ein gesunder Befund sind Basislinien für jeden Piloten, gemessene Zeit bis zu fertigen Ergebnissen, von qualifizierten Menschen geprüfte Genauigkeit, Kosten einschließlich Review, fair verglichene Ergebnisse und Teams, die sagen, das Werkzeug diene ihrem Urteil.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Pilot mit Freiwilligen | Ehrliches Feedback; geringes Risiko | Freiwillige sind Enthusiasten; Ergebnisse verallgemeinern womöglich nicht |
| Angeordneter Rollout | Schnelle Abdeckung | Nutzung ohne Wert; Groll; Manipulation |
| Kontrollierter Vergleich | Glaubwürdiger Beleg | Aufwand; nicht immer möglich |
| Nur vorher und nachher | Einfach | Durch andere Änderungen verzerrt |
| Vom Anbieter berichtete Einsparungen | Leicht zu bekommen | Optimistisch; ohne Kontext |
| Eigene zeitgemessene Aufgaben | In der eigenen Arbeit verankert | Zeitaufwendig; kleine Stichproben |
| Schweres Review jeder Ausgabe | Sicher | Beseitigt den Nutzen |
| Stichprobenartiges Review | Skaliert | Manche Fehler rutschen durch |

Die Antwort in Worten ist, kleine Piloten mit Basislinien und Vergleichen durchzuführen, Ausgaben auf Qualität zu beproben, die vollen Kosten zu zählen und auf Grundlage von Belegen zu entscheiden. Nutzen Sie Zahlen von Anbietern als zu testende Hypothesen.

## Fragen für die Diskussion im Team

**1. Wo erwarten wir, dass KI uns hilft, und was würden wir sehen, wenn sie es täte?**
Listen Sie mögliche Nutzungen auf und für jede den Indikator und die Basislinie, die wir heute haben. Die Moderation sollte auf Konkretes drängen: welche Aufgabe, welche Kennzahl, welche Größe der Änderung zählen würde. Wählen Sie eine Nutzung zum Pilotieren und vereinbaren Sie die Basislinie.

**2. Was ließe uns einem KI-Vorschlag trauen oder misstrauen, und woher wüssten wir, dass wir falsch lagen?**
Besprechen Sie Fälle, in denen die Ausgabe falsch war und wie es bemerkt wurde. Bedenken Sie, wie das Review in der Praxis funktioniert und ob Druck dazu führt, es zu überspringen. Einigen Sie sich auf eine Stichprobenmethode, die jemand Unabhängiges durchführt.

**3. Wie viel der gesparten Zeit würde für das Prüfen draufgehen?**
Messen Sie eine echte Aufgabe mit und ohne das Werkzeug, einschließlich Prompten und Review. Vergleichen Sie mit dem, was Menschen erwarten. Das Gespräch offenbart oft, wo der Gewinn liegt und wo nicht.

**4. Was sollten wir mit gesparter Zeit tun?**
Entscheiden Sie vorab. Optionen sind Qualitätsarbeit, Lernen, Verbesserung oder weniger Druck. Besprechen Sie, wie sich verhindern lässt, dass die Zeit stillschweigend in mehr Nachfrage aufgeht. Einigen Sie sich mit den Führungskräften, wie das Team sie schützt.

**5. Was würden wir hier nicht von KI erledigt haben wollen, und warum?**
Listen Sie Aufgaben auf, die menschliches Urteil, Einfühlung oder Verantwortung brauchen. Besprechen Sie Risiken für Nutzer und für Fähigkeiten. Die Moderation sollte Grenzen als Eingaben für die Governance festhalten.

**6. Woran erkennen wir, wann wir aufhören sollten?**
Definieren Sie den Beleg, der den Piloten oder die Nutzung beenden würde. Einigen Sie sich, wer entscheidet und wann. Ein Pilot ohne Ausstiegskriterien wird zur Dauereinrichtung.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams nutzen KI für Code, Tests, Reviews und Dokumentation. Sie sollten die Zeit bis zu einem geprüften, funktionierenden Ergebnis messen, auf Qualität und Defekte achten und menschliches Review bedeutsam halten. Sie sollten Kennzahlen widerstehen, die erzeugte Zeilen oder Annahme zählen, und auf Ergebniskennzahlen wie Defekte und Stabilität bestehen.

### Service- und Betriebsteams

Betriebs- und Service-Desk-Teams nutzen KI für Triage, Zusammenfassungen, Vorschläge und Monitoring. Sie sollten Bearbeitungs- und Lösungsqualität mit Basislinien vergleichen, Ausgaben beproben und auf Wirkungen auf Nutzer und Folgekontakte achten. Sie sollten konsultiert werden, bevor KI vor Nutzer gesetzt wird.

### Führung und Governance

Führungskräfte sponsern KI-Programme und stehen unter Druck, Gewinne zu zeigen. Sie sollten auf Basislinien und Vergleiche bestehen, die Review-Arbeit finanzieren, Nutzungsziele meiden und Menschen vor Überwachung und schleichender Tempoerhöhung schützen. Die Governance sollte vor dem Skalieren Risikoklassifizierung und Beleg verlangen.

### Kunden und Nutzer

Nutzer begegnen KI in Antworten, Vorschlägen und automatisierten Handlungen. Sie wollen richtige, verständliche Hilfe und die Möglichkeit, einen Menschen zu erreichen. Ihnen sollte, wo angemessen, gesagt werden, wenn sie mit KI interagieren, und ihr Feedback ist ein Schlüsselbeleg dafür, ob sie hilft (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

## In der Praxis: ein Beispiel aus dem Service-Management

Die Technologiegruppe eines mittelgroßen Versicherers betreibt einen internen Service Desk für 4.000 Beschäftigte und mehrere Produktteams. Die Führung kauft Lizenzen für einen KI-Assistenten und bittet nach drei Monaten um einen Bericht über gesparte Zeit. Die Zahlen unten sind illustrativ.

Die Leiterin des Service-Managements besteht auf einer Basislinie. Für die häufigste Aufgabe des Service Desks, das Entwerfen von Antworten auf Zugriffs- und Passwortanfragen, misst sie 120 jüngere Tickets: mediane Bearbeitungszeit von 11 Minuten, 85. Perzentil von 24, eine Wiedereröffnungsrate von 6 Prozent und ein stabiler Zufriedenheitswert aus der Umfrage. Sie wählt zwei Teams zum Pilotieren des Assistenten und hält zwei ähnliche Teams als Vergleich. Die Pilotteams sind Freiwillige.

Nach acht Wochen beträgt die mediane Bearbeitungszeit der Pilotteams 8 Minuten und das 85. Perzentil 19, gegenüber 11 und 23 in den Vergleichsteams. Die Werkzeugprotokolle zeigen, dass Agenten Vorschläge in 52 Prozent der Fälle unverändert annehmen, in 38 Prozent bearbeiten und in 10 Prozent ablehnen. Eine monatliche Zufallsstichprobe von 80 Antworten, geprüft von einem Senior-Agenten außerhalb des Piloten, findet 91 Prozent vollständig richtig, mit Fehlern konzentriert in einem selten genutzten Verfahren, bei dem der Assistent veraltete Schritte gab. Die Wiedereröffnungsrate in den Pilotteams steigt leicht auf 7 Prozent, innerhalb der normalen Schwankung. Die Kosten je Ticket sinken moderat, wenn Lizenzen und Review-Zeit mitgezählt werden. Eine Umfrage zeigt, dass Agenten die Entwürfe schätzen und das zusätzliche Prüfen langer Antworten nicht mögen. Zwei Agenten sagen, sie spürten Druck, mehr Tickets pro Stunde zu bearbeiten.

Die Leiterin des Service-Managements berichtet eine Zeitersparnis von etwa einem Viertel im Median und nennt die Vorbehalte: zwei Teams, acht Wochen, Freiwillige und eine Wiedereröffnungsrate, die beobachtet werden muss. Sie vereinbart mit den Führungskräften, dass die gesparte Zeit in die Wissensdatenbank und in komplexe Fälle geht und dass keine Ticketziele steigen. Das veraltete Verfahren wird in der Wissensdatenbank korrigiert. Ein leitender Manager bittet um verpflichtende Nutzung im ganzen Unternehmen und ein Ziel von 80 Prozent Annahme. Sie lehnt das Ziel ab und erklärt, dass ein Annahmeziel das Nichtprüfen belohnen würde, und schlägt vor, den Piloten mit denselben Kennzahlen auf zwei weitere Teams auszudehnen. Die Entscheidung wird festgehalten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Führen Sie KI in kleinen Schritten mit Stakeholdern ein, mit Basislinie und Vergleich für jeden Schritt, und überprüfen Sie das Ergebnis im regelmäßigen Verbesserungsgespräch. Zu beachten ist, dass ein Rollout von KI überall auf einmal die Vergleichsgruppe beseitigt.

### KI

Dieses ganze Thema handelt von KI, die Regel ist also einfach: Halten Sie die Arbeit fest, wie sie heute ist, messen Sie jede Nutzung gegen diese Basislinie und gegen vergleichbare Arbeit ohne KI und koppeln Sie jeden Geschwindigkeitsgewinn mit einer geprüften Qualitätskennzahl. Benennen Sie für jede Nutzung einen Eigner und entscheiden Sie vorab, wo ein Mensch entscheidet. Zu beachten ist, dass Zahlen von Anbietern andere Organisationen beschreiben; nutzen Sie also Ihre eigenen Daten.

### Automatisierung

Erfassen Sie Nutzungs-, Vorschlags-, Annahme- und Überschreibungsereignisse automatisch und messen Sie die Automatisierung, die KI-Ausgaben anwendet, an Fehler- und Rückgängig-Raten. Zu beachten ist, dass Annahmeraten steigen können, weil Menschen aufhören zu prüfen; ziehen Sie also Stichproben angenommener Ausgaben.

### Analytik

Berichten Sie Genauigkeit aus einer geprüften Stichprobe mit der Stichprobengröße und Ergebnisse gegenüber einem Vergleich mit den genannten Grenzen. Die Entscheidung, die dies untermauert, ist, ob eine Nutzung von KI zu erweitern, zu ändern oder zu stoppen ist. Zu beachten ist, dass kleine Piloten verrauschte Ergebnisse geben; versprechen Sie also keine Zahl aus einem Piloten.

## Branchenperspektive

**Startup.** Werkzeuge werden schnell und oft informell übernommen. Erfassen Sie eine einfache Basislinie von Zeit und Defekten für die Hauptnutzung, halten Sie menschliches Review für alles Kundengerichtete und vermeiden Sie, sich früh an einen einzelnen Anbieter zu binden. Achten Sie auf Sicherheit und Datenexposition, wenn Beschäftigte öffentliche Werkzeuge nutzen.

**Kleinunternehmen.** Fertige Assistenten können echte Hilfe für Entwürfe und Routineaufgaben bieten. Messen Sie im kleinen Maßstab: Zeit für einige echte Aufgaben und die Rate der Korrekturen. Seien Sie vorsichtig mit vertraulichen Daten und prüfen Sie die Bedingungen des Anbieters zur Nutzung von Daten.

**Großunternehmen.** Größe verlangt Governance, Beschaffungsstandards und einen gemeinsamen Messansatz. Führen Sie Piloten mit Vergleich durch, veröffentlichen Sie Ergebnisse intern und teilen Sie Basislinien und Methoden über Teams. Hüten Sie sich vor Programmen, die Nutzung als Erfolg berichten.

**Behörden und öffentlicher Sektor.** Entscheidungen, die Bürger betreffen, können rechtlichen Pflichten zu Transparenz, Fairness und menschlichem Review unterliegen. Klassifizieren Sie Nutzungen nach Risiko, führen Sie Aufzeichnungen darüber, wie KI in Entscheidungen genutzt wurde, und seien Sie offen damit. Beschaffungsregeln und Datenschutz gelten, und manche Rechtsordnungen haben besondere KI-Gesetze, die nach heutigem Stand zu prüfen sind (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind Lizenzen oder Nutzungsgebühren, Integration, Schulung, die Zeit, Basislinien zu erfassen und Vergleiche durchzuführen, die Personenzeit, die mit Prüfen und Korrigieren der Ausgaben verbracht wird, und Governance-Aufwand. Kosten können mit der Nutzung skalieren und sich mit der Preisgestaltung der Anbieter ändern, modellieren Sie also eine Spanne.

Der mögliche Ertrag ist zurückgewonnene Zeit bei wiederkehrenden Aufgaben, schnelleres Entwerfen und Suchen, bessere Abdeckung von Wissen und Entlastung des Personals von langweiliger Arbeit. Das sind Möglichkeiten zum Testen, keine Annahmen zum Verbuchen. Bauen Sie den Business Case aus Ihren eigenen Piloten: gemessene Aufgabenzeit bis zu einem geprüften Ergebnis, geprüfte Genauigkeit, Nacharbeit und volle Kosten je Aufgabe, gegen Basislinie und Vergleich. Vermeiden Sie, Produktivitätsprozente aus Anbieter- oder Umfragequellen zu zitieren, wenn Sie Methode und Passung zu Ihrer Arbeit nicht zurückverfolgen können. Beziehen Sie das Risiko von Fehlern ein, die Nutzer erreichen, und die Kosten, die Werkzeuge zu steuern (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **KI ohne Basislinie einführen.** Sie können nicht sagen, was sich änderte. Erfassen Sie sie zuerst.
- **Erzeugungsgeschwindigkeit messen.** Die Ersparnis kann im Review verschwinden. Messen Sie die Zeit bis zu einem geprüften Ergebnis.
- **Akzeptanzziele.** Sie erzeugen Nutzung ohne Wert. Behandeln Sie die Abdeckung als beschreibend.
- **Anbieterversprechen trauen.** Sie sind Hypothesen. Testen Sie sie an Ihrer Arbeit.
- **Review, das nicht echt ist.** Automation Bias macht Review zum Abnicken. Ziehen Sie Stichproben und prüfen Sie unabhängig.
- **Gesparte Zeit in mehr Nachfrage verwandeln.** Es untergräbt Vertrauen und nachhaltiges Tempo. Entscheiden Sie vorab, wofür die Zeit da ist.
- **Individuelle Nutzung überwachen.** Es erzeugt Furcht. Aggregieren Sie auf Teamebene.
- **Piloten ohne Ende.** Sie werden standardmäßig dauerhaft. Setzen Sie Ausstiegskriterien.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Zweck und Basislinien | Werkzeuge aus Begeisterung übernommen | Anwendungsfälle aufgelistet | Register mit Problem, Risikoklasse, Basislinie und Indikator für jede Nutzung | Basislinien und Vergleiche vor dem Skalieren verlangt; Ergebnisse veröffentlicht | Gemeinsame Basislinien und Methoden über Teams und Partner; Nutzungen eingestellt, wenn der Beleg schwindet |
| Beleg des Nutzens | Anekdoten und Anbieterversprechen | Informelle Zeitschätzungen | Zeitgemessene Aufgaben; beprobte Genauigkeit; volle Kosten je Aufgabe | Ergebnisentwicklung gegenüber Vergleich mit Grenzen berichtet | Portfolio-Sicht, wo KI hilft, mit breit geteiltem Lernen |
| Menschen und Tempo | Mandate; Überwachung | Informelle Sorgfalt | Nur Daten der Teamebene; gesparte Zeit nach Vereinbarung zugewiesen | Bedenken verfolgt; Fähigkeiten und Zufriedenheit gemessen | Gemeinsamer Entwurf der KI-Nutzung mit Nutzern und Personal; nachhaltiges Tempo geschützt |

## Checkliste

- [ ] Jede Nutzung von KI hat ein schriftliches Problem, eine Risikoklasse, einen Eigner und Ausstiegskriterien.
- [ ] Für jeden Piloten existiert vor der ersten Nutzung eine datierte Basislinie.
- [ ] Eine Vergleichsgruppe oder Vergleichsaufgaben sind vorab definiert.
- [ ] Zeit wird bis zu einem fertigen, geprüften Ergebnis gemessen.
- [ ] Ausgaben werden monatlich beprobt und von qualifizierten, unabhängigen Menschen geprüft.
- [ ] Die vollen Kosten je Aufgabe schließen Review und Nacharbeit ein.
- [ ] Nutzungsdaten werden auf Teamebene aggregiert und nicht für Einzelne genutzt.
- [ ] Das Team hat vereinbart, was mit gesparter Zeit geschieht.
- [ ] Nutzer werden nach ihrem Erlebnis mit dem Werkzeug gefragt.
- [ ] Piloten enden in einer erfassten Entscheidung zu skalieren, anzupassen oder zu stoppen.

## KI-Prompts

**Einen Eintrag für einen Anwendungsfall entwerfen.**

```text
We are considering using AI for [task] in [team and service]. Draft a use case
register entry: the problem and who feels it, the outcome that should improve,
risk classification and why, the human review step, baseline indicators to
capture now, a comparison approach, cost components to track, exit criteria,
and questions for the team. Do not assume specific vendor features or claim
benefits. List your assumptions.
```

**Eine Studie zeitgemessener Aufgaben entwerfen.**

```text
Design a small study to measure the effect of an AI assistant on [task]. Propose
how to select tasks, how to compare with and without the tool fairly, what to
time (including prompting, review, and correction), how to judge output quality,
and how to avoid bias. Keep it practical for a team of [number] people.
Do not state expected results. List your assumptions and limits of the design.
```

**Stichproben der Ausgaben planen.**

```text
Our AI-assisted outputs per month are about [number] of types [list]. Design a
monthly random sampling and review process: sample size and selection method (with
the reasoning, avoiding overstated precision), who reviews, the written standard,
error categories, how to report, and how to use findings. List your assumptions
and risks.
```

**Entscheiden, was mit gesparter Zeit zu tun ist.**

```text
Our pilot saved a median of [value] per task for [number] tasks per week in
[team]. Suggest options for using the time that support quality, learning, and
a sustainable pace, with the trade-offs and risks of each, and a way to agree
the choice with the team and leaders. Do not assume the savings will persist.
List your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine KI-bezogene Kennzahl zu finden, bevor sie berichtet wird.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer KI-Kennzahl seine Basislinie, seinen Vergleich, seinen Manipulationsvektor und seine Leitplanke erfasst.

## Wichtigste Erkenntnisse

- Erfassen Sie eine datierte Basislinie, bevor KI genutzt wird, und vergleichen Sie mit ähnlicher Arbeit ohne sie.
- Messen Sie die Zeit bis zu einem fertigen, geprüften Ergebnis und beproben Sie Ausgaben auf Genauigkeit mit unabhängigen Reviewern.
- Zählen Sie die vollen Kosten, einschließlich Review und Nacharbeit.
- Behandeln Sie Nutzung und Annahme als beschreibend, nie als Ziele.
- Entscheiden Sie vorab, was mit gesparter Zeit zu tun ist, und halten Sie ein nachhaltiges Tempo.
- Halten Sie Nutzungsdaten auf Teamebene und beenden Sie jeden Piloten mit einer erfassten Entscheidung.

## Quellen und weiterführende Literatur

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
4. Bender, E. M., Gebru, T., McMillan-Major, A., and Shmitchell, S., "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 2021.
5. Russell, S., and Norvig, P., *Artificial Intelligence: A Modern Approach*, 4th ed., Pearson, 2020.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
8. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
9. Wikipedia, [Generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence).
10. Wikipedia, [Large language model](https://en.wikipedia.org/wiki/Large_language_model).
11. Wikipedia, [AIOps](https://en.wikipedia.org/wiki/AIOps).
12. Wikipedia, [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop).
13. Wikipedia, [Automation bias](https://en.wikipedia.org/wiki/Automation_bias).
14. Wikipedia, [Hallucination (artificial intelligence)](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
