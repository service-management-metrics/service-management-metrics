# KI-gestützte Arbeit messen

**Beurteilen Sie KI-gestützte Arbeit danach, was Review, Produktion und den nächsten Kontakt des Nutzers überlebt, nicht danach, wie schnell sie erschien, und achten Sie weiter darauf, ob die Menschen, die sie tun, noch lernen.**

## Überblick und Motivation

Sobald ein Team KI-Werkzeuge täglich nutzt, wandelt sich die zentrale Frage von „sollten wir?“ zu „was bekommen wir?“. Das vorige Thema legte die Grundlagen dar: Basislinien, Vergleiche und volle Kosten (siehe Thema 10.1, KI in der Messung des Service-Managements). Dieses Thema geht in die Arbeit selbst. Wie erkennt man, ob KI-gestützter Code, Tickets, Dokumente und Entscheidungen so gut, besser oder schlechter sind als die Arbeit, die sie ersetzen, und was geschieht mit den Menschen, die sie tun?

KI-Unterstützung berührt viele Arten von Arbeit. In der Softwarelieferung schlagen Werkzeuge Code, Tests, Commit-Nachrichten und Review-Kommentare vor oder erzeugen sie. Im Serviceumfeld fassen sie Incidents zusammen, schlagen Ursachen vor, entwerfen Antworten und schreiben Wissensartikel. In der Analyse erzeugen sie Berichte und Abfragen. Das Gemeinsame ist, dass das Erzeugen einer plausiblen ersten Fassung billig wird. Die Kosten wandern an andere Stellen: die Ausgabe lesen und beurteilen, beheben, was falsch ist, pflegen, was erzeugt wurde, und genug lernen, um den Unterschied zu kennen.

Mehrere Effekte machen das Messen heikel.

- **Outputzahlen führen in die Irre.** [Codezeilen](https://en.wikipedia.org/wiki/Lines_of_code) waren immer ein schlechtes Maß der Produktivität, und erzeugter Code macht es schlimmer. Mehr Code ist mehr zu lesen, zu testen und zu pflegen. Zahlen erzeugter Zeilen, angenommener Vorschläge oder Entwürfe sagen wenig über Wert.
- **Review wird zum Engpass.** [Code-Review](https://en.wikipedia.org/wiki/Code_review) und das Review anderer erzeugter Arbeit brauchen Zeit, und ein Strom größerer, häufigerer Changes kann Reviewer überlasten. Große [Pull Requests](https://en.wikipedia.org/wiki/Pull_request) sind schwerer gut zu prüfen, und ein überlasteter Reviewer genehmigt eher, was er nicht verstanden hat. Die zuvor behandelten Review- und Flusskennzahlen bleiben wesentlich (siehe Thema 2.7, Kennzahlen für Pull Requests und Code-Reviews).
- **Qualitätsprobleme kommen spät.** Erzeugter Code mag heute die Tests bestehen und trägt dennoch [doppelten Code](https://en.wikipedia.org/wiki/Duplicate_code), unklare Struktur oder verborgene Defekte, die als Wartungskosten auftauchen, eine Form von [technischer Schuld](https://en.wikipedia.org/wiki/Technical_debt). Zum Zeitpunkt der Erstellung genommene Kennzahlen verpassen sie. Schauen Sie, was danach mit der Arbeit geschieht.
- **Fähigkeiten können sich ändern.** Sich bei Aufgaben auf ein Werkzeug zu verlassen, die man früher selbst erledigte, ist eine Form von [kognitivem Auslagern](https://en.wikipedia.org/wiki/Cognitive_offloading), das Aufmerksamkeit für schwerere Probleme freisetzen oder zu [Deskilling](https://en.wikipedia.org/wiki/Deskilling) führen kann, wenn das zugrunde liegende Verständnis verblasst. Beides ist möglich, und das Ergebnis hängt davon ab, wie die Werkzeuge genutzt werden. Das zählt für die Beteiligten und für die Fähigkeit des Teams, die Situationen zu bewältigen, die das Werkzeug nicht kann.

Der Beleg über die Wirkung von KI-Unterstützung auf die Produktivität entwickelt sich noch, und er variiert mit der Aufgabe, der Erfahrung des Nutzers, dem Werkzeug und dem Umfeld. Manche kontrollierten Studien zu Programmieraufgaben fanden schnelleres Abschließen bei klar definierten Aufgaben, und andere Studien und Berichte fanden kleinere oder keine Gewinne oder zusätzliche Kosten bei erfahrenen Menschen, die an komplexen Systemen arbeiten, die sie gut kennen. Dieses Buch bietet keine Zahl. Die verantwortliche Position für ein Team ist, seine eigene Arbeit mit Basislinien und Vergleich zu messen und jede veröffentlichte Zahl als eine Studie in einem bestimmten Kontext zu behandeln.

Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) ist hier besonders wichtig, denn der Druck, Gewinne zu zeigen, ist stark und die leichten Zahlen sind die irreführenden. Die Kennzahlen unten folgen dem, was Bestand hat, nicht dem, was erzeugt wird (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Leitprinzipien

- **Messen, was Bestand hat.** Bestand, Nacharbeit und entwichene Defekte sagen mehr als Output.
- **Das Review beobachten.** Der Fluss KI-gestützter Arbeit wird dadurch begrenzt, wie gut Menschen sie lesen können.
- **Gleiches mit Gleichem vergleichen.** Gestützte und nicht gestützte Arbeit müssen in Art und Schwierigkeit ähnlich sein.
- **Später ebenso wie jetzt schauen.** Qualitätsprobleme und Wartungskosten erscheinen Wochen oder Monate nach der Erstellung.
- **Verständnis in der Schleife halten.** Wer die Arbeit ausliefert, muss sie erklären können.
- **Fähigkeiten und Lernen schützen.** Beachten Sie, was Menschen ohne das Werkzeug noch können.
- **Aggregieren; Einzelne nicht überwachen.** Daten darüber, wer KI wie nutzt, dienen dem Verbessern des Prozesses, nicht dem Ordnen von Menschen.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bestandsrate | Anteil der KI-gestützten Changes, die nach einem genannten Zeitraum im Wesentlichen unverändert bleiben | KI-gestützte Changes, von denen nach 30 Tagen weniger als ein festgelegter Anteil geändert oder zurückgenommen wurde / vor 30 Tagen gemergte KI-gestützte Changes | Prozent | Versionsverwaltungshistorie, mit Unterstützungs-Tags verbunden, auf Teamebene | Release- und Deployment-Management; Change-Befähigung | Arbeit, die hält; wenig Nacharbeit | Monatlich |
| Nacharbeit nach dem Merge | Anteil der Changes, die binnen kurzer Zeit eine Folgekorrektur brauchen, für gestützte und Vergleichs-Changes | Changes mit verknüpfter Folgekorrektur binnen 14 Tagen / gemergte Changes, je Gruppe | Prozent | Versionsverwaltung, Issue-Tracker, Change-Datensätze | Change-Befähigung; Problemmanagement | Entwichene Defekte; Nacharbeit | Monatlich |
| Review-Last | Aufwand des Reviewers je Change, für gestützte und Vergleichs-Changes | Median und 85. Perzentil von Review-Zeit und Review-Runden je Change, je Gruppe | Stunden; Runden | Zeitstempel des Review-Werkzeugs, nach Team aggregiert | Release- und Deployment-Management | Review als Feedback und Lernen | Monatlich |
| Rate entwichener Defekte | In Produktion gefundene Defekte je Change, für gestützte und Vergleichs-Changes | nach dem Release gefundene, einem Change zugeordnete Defekte / ausgelieferte Changes, je Gruppe | Defekte je Change | Defekt-Tracker, mit Changes verknüpft | Incident-Management; Problemmanagement | Qualität des Ausgelieferten | Vierteljährlich |
| Bestehensrate der Erklärungsprüfung | Anteil der beprobten KI-gestützten Changes, deren Autor den Ansatz und seine Abwägungen im Review erklären kann | beprobte Changes, bei denen der Autor zur Zufriedenheit des Reviewers erklärte / beprobte Changes | Prozent | Notizen der Stichprobenreviews | Wissensmanagement; Change-Befähigung | Gemeinsames Verständnis des Codes | Vierteljährlich |
| Qualität gestützten Supports | Wiedereröffnungsrate und Nutzerzufriedenheit für KI-gestützte Supportantworten im Vergleich zu ungestützten | wiedereröffnete gestützte Tickets / gestützte Tickets, und positive Bewertungen / Bewertungen, je Gruppe | Prozent | ITSM-Werkzeug, Umfrage | Service Desk; Incident-Management | Qualität der Serviceergebnisse | Monatlich |
| Bewertung der Zuversicht ohne Werkzeug | Bewertung des Teams, wie zuversichtlich es ist, Schlüsselaufgaben ohne das Werkzeug zu erledigen | mittlere Bewertung und Streuung auf einer vereinbarten Skala, je Team | Skalenpunkte | Anonymer Team-Puls | Personal- und Talentmanagement; Wissensmanagement | Fähigkeit und Lernen des Teams | Vierteljährlich |

Taggen Sie KI-Unterstützung zuverlässig auf Teamebene, über Werkzeugprotokolle oder eine leichtgewichtige Konvention, und nennen Sie, wie Vergleichs-Changes gewählt werden: ähnlich in Größe, Bereich und Risiko. Der Bestand misst wesentliche Änderung, mit einer im Register gesetzten Schwelle. Die Nacharbeit nach dem Merge verknüpft eine Folgekorrektur mit dem ursprünglichen Change nach einer genannten Regel. Die Review-Last ist der Aufwand des Reviewers, nicht des Autors, und schließt nur aktive Review-Zeit ein, wo messbar. Daten auf Einzelebene werden nie berichtet. Stichproben für die Erklärungsprüfung werden zufällig gewählt, und die Prüfung ist ein Gespräch zur Unterstützung des Lernens, kein Test einer Person.

## Empfehlungen

### Der Arbeit nach ihrer Entstehung folgen

**1. Verfolgen Sie, was mit gestützter Arbeit über die Zeit geschieht.** Verfolgen Sie bei Code die Changes Wochen nach dem Merge: bleiben sie, werden sie korrigiert oder zurückgenommen? Verfolgen Sie beim Support Tickets nach der Antwort: werden sie wiedereröffnet oder folgen Wiederholungskontakte? Prüfen Sie bei Dokumenten, ob sie genutzt, korrigiert oder ignoriert werden. Bestand und Nacharbeit sind einfache, schwer zu fälschende Signale von Qualität.

**2. Vergleichen Sie mit ähnlicher ungestützter Arbeit.** Wählen Sie Vergleichsarbeit ähnlicher Größe, ähnlichen Risikos und Bereichs aus demselben Zeitraum. Schwierigkeit zählt: Menschen nutzen KI womöglich für leichte Aufgaben, was dem Werkzeug schmeicheln würde, oder für schwere, was es bestrafen würde. Nennen Sie, wie Aufgaben gestützt werden, und passen Sie an oder vermerken Sie Vorbehalte. Ein kleiner, ehrlicher Vergleich schlägt einen großen, verzerrten (siehe Thema 6.5, Wertrealisierung und Geschäftsergebnisse).

**3. Nehmen Sie die nachgelagerten Kennzahlen in den Standardsatz auf.** Koppeln Sie jede Geschwindigkeitskennzahl mit Change-Fail-Rate, entwichenen Defekten und den bereits genutzten Stabilitätskennzahlen (siehe Thema 2.8, DORA-Kennzahlen). Ein Geschwindigkeitsgewinn bei fallender Stabilität ist eine Verlagerung von Kosten auf Betrieb und Nutzer. Berichten Sie das Paar zusammen.

### Review bedeutsam halten

**4. Beobachten Sie Review-Last und -Größe.** Messen Sie Review-Zeit, Review-Runden und Change-Größe für gestützte und ungestützte Arbeit. Sind gestützte Changes größer oder zahlreicher, sind Reviewer womöglich überlastet. Setzen Sie Normen für die Change-Größe und begrenzen Sie die Menge erzeugten Materials, die in ein Review gehen kann. Review-Kapazität ist Teil der Kapazität des Systems (siehe Thema 2.3, Laufende Arbeit und Warteschlangentheorie).

**5. Bitten Sie Autoren zu erklären.** Machen Sie es zur Gewohnheit, dass der Autor eines Changes erklären kann, was er tut, warum dieser Ansatz und welche Abwägungen bestehen. Ein kurzes, unterstützendes Gespräch im Review genügt. Beproben Sie vierteljährlich Erklärungsprüfungen, um zu sehen, ob das Verständnis mit dem Output Schritt hält. Können Autoren nicht erklären, behandeln Sie es als Signal, langsamer zu werden und zu lernen, nicht als Versagen der Person.

**6. Schützen Sie sich vor Automation Bias.** Ermutigen Sie Reviewer, gestützte Arbeit so kritisch zu lesen wie jede andere. Rotieren Sie Reviewer, säen Sie gelegentlich bekannte Probleme in einen Test-Change, um die Erkennung zu prüfen, und halten Sie die Stichproben von Ausgaben durch unabhängige Reviewer am Laufen. Eine sehr hohe Annahmerate bei steigender Nacharbeit ist eine Warnung (siehe Thema 10.1, KI in der Messung des Service-Managements).

### Qualität und Wartung betreuen

**7. Beobachten Sie die Struktur des Codes und des Systems.** Verfolgen Sie Duplikation, Komplexität, Testabdeckung und die Änderungsrate in den Bereichen, in denen Unterstützung stark ist. Nutzen Sie die Kennzahlen, die Sie bereits für [Softwaretests](https://en.wikipedia.org/wiki/Software_testing) und Code-Gesundheit haben, und schauen Sie auf Trends. Steigende Duplikation oder fallende Wirksamkeit von Tests kann signalisieren, dass erzeugter Code ohne Integration in den Entwurf angenommen wird. Die Abdeckung durch [Regressionstests](https://en.wikipedia.org/wiki/Regression_testing) ist ein Sicherheitsnetz, und seine Stärke zählt mehr, wenn das Änderungsvolumen steigt.

**8. Behandeln Sie erzeugte Tests mit Sorgfalt.** KI kann schnell viele Tests schreiben, und Tests können bestehen, ohne etwas Bedeutsames zu prüfen. Beproben Sie erzeugte Tests auf Wert und messen Sie die Wirksamkeit von Tests durch Methoden wie die Frage, ob Tests fehlschlagen, wenn Verhalten absichtlich gebrochen wird. Zählen Sie geschriebene Tests nicht als Qualitätskennzahl.

**9. Beobachten Sie die Qualität gestützten Supports.** Messen Sie für Service Desk und Betrieb Wiedereröffnungsrate, Wiederholungskontakte, Zufriedenheit und Genauigkeit beprobter Antworten für gestützte gegenüber ungestützten Antworten. Eine schnellere Antwort, die den Nutzer zurückschickt, ist insgesamt langsamer. Lesen Sie Nutzerkommentare zu gestützten Antworten und schauen Sie, ob Nutzer wissen, dass sie es mit KI zu tun haben, wo das zählt (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

### Menschen und Fähigkeiten schützen

**10. Beachten Sie, was Menschen noch können.** Fragen Sie Teams, wie zuversichtlich sie sind, Schlüsselaufgaben ohne das Werkzeug zu erledigen, und verfolgen Sie den Trend. Nutzen Sie gelegentliche Übung ohne Werkzeug, Pairing und Reviews des zugrunde liegenden Entwurfs, um Fähigkeiten lebendig zu halten. Schützen Sie besonders das Lernen neuerer Teammitglieder, die das Werkzeug womöglich nutzen, bevor sie die mentalen Modelle aufgebaut haben, auf die sich erfahrene Kollegen stützen, um es zu beurteilen (siehe Thema 9.4, Kennzahlen für Fähigkeiten und Lernen).

**11. Halten Sie Daten über Menschen aus der Beurteilung heraus.** Aggregieren Sie auf Teamebene. Berichten Sie nicht, welche Einzelnen KI am meisten nutzen, und nutzen Sie Nutzung, Annahmerate oder erzeugtes Volumen nicht in Leistungsbeurteilungen. Machen Sie die Regeln bekannt. Vertrauen wird für ehrliche Berichte gebraucht, was funktioniert und was nicht.

**12. Überprüfen Sie regelmäßig.** Werkzeuge, Modelle und Praktiken ändern sich in Monaten. Wiederholen Sie den Vergleich, wenn sich das Werkzeug oder die Arbeitsweise ändert. Teilen Sie Befunde, auch dass ein Werkzeug hier nicht half, und stellen Sie Nutzungen ein, die ihren Platz nicht mehr verdienen.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Bestandsrate | Nötige Änderungen vermeiden, um die Zahl hoch zu halten; nur erfolgreiche Changes als gestützt taggen | Nach Werkzeugprotokollen taggen, nicht nach Wahl des Autors; mit entwichenen Defekten und Nacharbeit koppeln |
| Nacharbeit nach dem Merge | In einem anderen Ticket oder einem neuen, nicht verknüpften Change beheben; Korrekturen über das Fenster hinaus verzögern | Verknüpfungsregel im Register; ein längeres Fenster betrachten; Produktionsdefekte |
| Review-Last | Hastige Reviews, die die gemessene Zeit senken; Genehmigungen ohne Kommentare | Stichprobe der Review-Tiefe; entwichene Defekte; Umfrage unter Reviewern |
| Rate entwichener Defekte | Defekte nicht Changes zuordnen; Defekte als Erweiterungen umklassifizieren | Zuordnungsregel; unabhängige Stichprobe der Defektklassifizierung |
| Bestehensrate der Erklärungsprüfung | Autoren, die für die Prüfung proben; nachsichtige Reviewer | Zufällige, unangekündigte Stichproben; Reviewer rotieren; auf Entwurfsgründe konzentrieren |
| Qualität gestützten Supports | Nur leichte Tickets stützen; Nutzer coachen, hoch zu bewerten | Tickets nach Typ und Schwierigkeit abgleichen; Rücklaufquote und Mischung; Kommentare lesen |
| Bewertung der Zuversicht ohne Werkzeug | Aufgeblähte Bewertungen, um Prüfung zu vermeiden; niedrige Bewertungen, um für mehr Werkzeuge zu argumentieren | Anonymität; mit beobachteter Praxis in Drills vergleichen; Kommentare lesen |

Ein gesunder Befund ist gestützte Arbeit, die so oft an Ort und Stelle bleibt wie ungestützte, Nacharbeit und entwichene Defekte, die dem Vergleich entsprechen oder ihn übertreffen, Review, das tief bleibt, Autoren, die erklären können, was sie ausliefern, gestützter Support, der nicht zurückkommt, und Teams, die in ihren eigenen Fähigkeiten zuversichtlich bleiben.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Outputvolumen messen | Einfach | Belohnt Volumen; sagt nichts über Wert |
| Bestand und Nacharbeit messen | Spiegelt Qualität über die Zeit | Verzögert; braucht Verknüpfung von Datensätzen |
| Kontrollierter Vergleich | Glaubwürdig | Braucht Aufwand; womöglich unpraktisch |
| Beobachtender Vergleich | Billig | Durch Aufgabenauswahl verzerrt |
| Verpflichtende Erklärungsprüfungen | Erhalten Verständnis | Können wie Testen wirken; fügen Aufwand hinzu |
| Leichte Stichprobenprüfungen | Geringe Last | Können Muster verpassen |
| Starke Beschränkungen der KI-Nutzung | Kontrolle des Risikos | Verlorener Nutzen; Schatten-Nutzung |
| Offene Nutzung mit Messung | Lernen und Nutzen | Braucht Vertrauen und Disziplin |

Die Antwort in Worten ist, Nutzung innerhalb klarer Regeln zu erlauben, zu messen, was Bestand hat, auf Verständnis zu beproben, Review-Kapazität und Fähigkeiten zu schützen und Daten über Menschen aus der Beurteilung herauszuhalten.

## Fragen für die Diskussion im Team

**1. Wie viel dessen, was KI uns im letzten Quartal zu erzeugen half, ist noch unverändert an Ort und Stelle, und woher wissen wir es?**
Schauen Sie auf Bestand und Nacharbeit für gestützte Changes gegenüber einer vergleichbaren Menge. Die Moderation sollte festhalten, wie schwer die Antwort zu geben war. Einigen Sie sich, wie Datensätze zu taggen und zu verknüpfen sind, damit die Antwort im nächsten Quartal leicht ist.

**2. Hält das Review Schritt, und was geschieht, wenn nicht?**
Schauen Sie auf Review-Zeiten, -Runden und -Größen. Fragen Sie Reviewer, wie sie sich zu gestützten Changes fühlen. Besprechen Sie Grenzen der Größe und Wege, die Last zu teilen. Einigen Sie sich auf eine Norm zum Ausprobieren.

**3. Könnte jeder von uns den letzten mit KI-Hilfe ausgelieferten Change und seine Abwägungen erklären?**
Probieren Sie es in Paaren. Beachten Sie, wo Erklären leicht und wo schwer war. Besprechen Sie, was das über unsere Nutzung des Werkzeugs sagt und wie das Verständnis hoch zu halten ist.

**4. Was können wir ohne das Werkzeug noch gut, und wofür verlieren wir das Gespür?**
Listen Sie Schlüsselaufgaben auf, bewerten Sie die Zuversicht ehrlich und planen Sie etwas Übung ohne Werkzeug oder Pairing. Das Gespräch bringt auch zutage, was Menschen an ihrer Arbeit schätzen und behalten wollen.

**5. Wo half uns KI am meisten und am wenigsten, und was haben diese Stellen gemeinsam?**
Vergleichen Sie Beispiele. Suchen Sie Merkmale wie gut definierte Aufgaben, gute Tests oder vertraute Domänen. Nutzen Sie die Befunde, um zu lenken, wo das Werkzeug zu nutzen ist.

**6. Was würden wir messen, wenn wir unseren ersten Eindrücken nicht trauten?**
Bitten Sie die Gruppe, den Beleg zu nennen, der ihre Meinung über das Werkzeug in beide Richtungen ändern würde. Nutzen Sie die Antworten, um den nächsten Vergleich zu definieren.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams halten die tägliche Erfahrung und die Qualitätsergebnisse. Sie sollten gestützte Arbeit taggen, Bestand und Nacharbeit beobachten, Review bedeutsam halten und ihr eigenes Verständnis bewahren. Sie sollten sich äußern, wenn das Volumen erzeugter Changes ihre Fähigkeit zu prüfen übersteigt.

### Service- und Betriebsteams

Betriebsteams nutzen KI für Zusammenfassungen, Diagnose und Antworten, und sie erben die Qualitätsprobleme, die entweichen. Sie sollten Ausgaben beproben, Wiedereröffnungs- und Wiederholungskontaktraten vergleichen und klare menschliche Verantwortung für Handlungen in Produktion halten. Sie sollten helfen zu definieren, wo KI nicht ohne einen Menschen handeln darf.

### Führung und Governance

Führungskräfte stehen unter Druck, Gewinne zu zeigen, und werden von Nutzungs- und Outputkennzahlen verlockt. Sie sollten auf Bestand, Nacharbeit und Stabilitätskennzahlen neben Geschwindigkeit bestehen, Review-Kapazität finanzieren, Fähigkeitsentwicklung schützen und widerstehen, Menschen zu ordnen. Die Governance sollte in Berichten zum KI-Nutzen Vergleiche und Vorbehalte erwarten.

### Kunden und Nutzer

Nutzer erhalten die Ergebnisse: Code, der ihre Services betreibt, Antworten auf ihre Anfragen, Dokumente, auf die sie sich verlassen. Sie profitieren, wenn die Qualität hält, und leiden, wenn nicht. Sie sollten einen Menschen erreichen können, und ihr Feedback zu gestützten Interaktionen ist Schlüsselbeleg der Qualität.

## In der Praxis: ein Beispiel aus dem Service-Management

Die Digitalgruppe einer europäischen Fluggesellschaft hat sechs Produktteams, die Buchungs- und Betriebssoftware bauen und betreiben. Die Teams begannen vor einem Jahr, einen KI-Programmierassistenten zu nutzen, und das Dashboard der Gruppe berichtet, dass 38 Prozent der gemergten Zeilen KI-generiert sind. Die Zahlen unten sind illustrativ.

Die Leiterin der Engineering-Exzellenz ist wegen dieses Dashboards unruhig. Sie bittet drei Teams, gestützte Changes über die Protokolle des Werkzeugs zu taggen, nur auf Teamebene, und Vergleichs-Changes ähnlicher Größe und ähnlichen Bereichs zu wählen. Über ein Quartal ist die mediane Zeit vom ersten Commit bis zum Merge für gestützte Changes kürzer, 1,4 Tage gegenüber 2,0. Die Bestandsrate gestützter Changes nach 30 Tagen beträgt 81 Prozent gegenüber 90 Prozent bei Vergleichs-Changes, und 12 Prozent der gestützten Changes brauchten binnen 14 Tagen eine Folgekorrektur gegenüber 7 Prozent. Die Review-Last erzählt dieselbe Geschichte: Die mediane Review-Zeit je Change ist bei gestützten Changes 35 Prozent höher, und das 85. Perzentil der Change-Größe ist gewachsen. Entwichene Defekte je 100 Changes sind bei gestützten Changes leicht höher, wenngleich die Stichprobe klein ist und der Unterschied innerhalb normaler Schwankung liegt. Eine Stichprobe von 40 gestützten Changes zeigt, dass in 31 der Autor den Ansatz und seine Abwägungen gut erklären konnte, in 6 teilweise und in 3 gar nicht, meist in Codebereichen, die dem Autor neu waren. Im Service Desk hatten gestützte Antworten eine Wiedereröffnungsrate von 7 Prozent gegenüber 6 bei ungestützten, mit ähnlicher Zufriedenheit. In einem Team-Puls bewerten neuere Engineers ihre Zuversicht, Kernfunktionen ohne das Werkzeug zu implementieren, mit 2,6 von 5, gegenüber 4,1 bei Engineers mit mehr als drei Jahren in der Gruppe.

Die Leiterin der Engineering-Exzellenz trägt die Ergebnisse in die Teams und ordnet sie nicht. Die Teams vereinbaren vier Änderungen. Grenzen der Change-Größe und eine Review-Rotation schützen Reviewer. Autoren erklären gestützte Changes kurz im Review. Neuere Engineers pairen für Kernfunktionen mit erfahrenen, und eine monatliche Übung ohne Werkzeug hält Fähigkeiten in Praxis. Das Dashboard lässt den Anteil erzeugter Zeilen fallen und zeigt Bestand, Nacharbeit, Review-Last und entwichene Defekte, gestützt gegenüber Vergleich. Drei Monate später verengt sich die Bestandslücke auf 4 Punkte, Folgekorrekturen fallen auf 8 Prozent, und die Erklärungsprüfung verbessert sich. Ein Vizepräsident bittet, dass der Anteil erzeugter Zeilen ein Ziel für jedes Team wird. Die Leiterin der Engineering-Exzellenz erklärt die Befunde und schlägt vor, weiter Ergebnisse zu verfolgen, und fügt hinzu, dass Gewinne bei manchen Aufgaben echt sind und bei anderen nicht und dass das Team entscheiden wird, wo es das Werkzeug nutzt. Die Entscheidung wird festgehalten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Ein nachhaltiges Tempo und motivierte Menschen schließen den Schutz von Verständnis ein, überprüfen Sie also KI-gestützte Arbeit mit dem Team in regelmäßigem Rhythmus und schauen Sie, was Bestand hatte. Zu beachten ist, dass das Messen der KI-Nutzung Einzelner eine Teampraxis zu Überwachung macht.

### KI

Beurteilen Sie KI-gestützte Arbeit danach, was Review und Produktion überlebt und ob Menschen noch verstehen, was sie ausliefern. Koppeln Sie Bestand und Nacharbeit mit einer Erklärungsprüfung und einer Bewertung der Zuversicht ohne Werkzeug und halten Sie die Daten auf Teamebene. Zu beachten ist, dass schnelle Entwürfe Aufwand zu Reviewern verschieben; messen Sie also auch die Review-Last.

### Automatisierung

Taggen Sie KI-gestützte Changes automatisch, wo das Werkzeug es erlaubt, und messen Sie das Taggen an der Abdeckung, denn ungetaggte Arbeit bricht den Vergleich. Zu beachten ist, dass automatische Tags entfernt oder verpasst werden können; ziehen Sie also Stichproben.

### Analytik

Vergleichen Sie KI-gestützte und andere Arbeit an denselben Kennzahlen, mit Zählungen und Unsicherheit. Die Entscheidung, die dies untermauert, ist, wo KI-Hilfe echt ist und wo sie Nacharbeit hinzufügt. Zu beachten ist, dass sich die beiden Arbeitsgruppen in der Art unterscheiden können; vermeiden Sie also kausale Behauptungen aus einem groben Vergleich.

## Branchenperspektive

**Startup.** Kleine Teams können viel durch Unterstützung gewinnen und auch schnell verborgene Schuld anhäufen. Verfolgen Sie Bestand und Nacharbeit von früh an, halten Sie Tests bedeutsam und stellen Sie sicher, dass die Menschen, die das System pflegen werden, es verstehen. Hüten Sie sich, Code auszuliefern, den niemand erklären kann.

**Kleinunternehmen.** Unterstützung kann ein winziges Team strecken. Messen Sie an einer kleinen Stichprobe: wie oft gestützte Arbeit später korrigiert werden muss. Halten Sie Backups, Tests und menschliches Review für alles Kundengerichtete und schützen Sie das Verständnis des Inhabers für die Systeme, von denen er abhängt.

**Großunternehmen.** Größe verstärkt Gewinne und Probleme. Stellen Sie gemeinsame Anleitung zu Tagging, Review-Grenzen und Kennzahlen bereit, vergleichen Sie über Teams sorgfältig ohne zu ordnen und investieren Sie in Review- und Testkapazität. Beziehen Sie Sicherheits- und Lizenzprüfung erzeugten Codes in die Pipeline ein (siehe Thema 7.2, Kennzahlen für Software-Assets und Lizenzen).

**Behörden und öffentlicher Sektor.** Öffentliche Systeme haben lange Lebensdauern, strenge Rechenschaft und hohe Folgen von Fehlern. Verlangen Sie nachvollziehbare menschliche Verantwortung, sorgfältiges Testen und Dokumentation, wie KI genutzt wurde. Erfassen Sie gestützte Arbeit in Change-Datensätzen und bewerten Sie Risiken für Fairness und Sicherheit (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind Werkzeug- und Nutzungsgebühren, der Aufwand, Datensätze zu taggen und zu verknüpfen, die Zeit zum Prüfen und Beheben, zusätzliches Testen und Schulung. Eine Vergleichsstudie braucht Zeit, ist aber billig gegenüber einer falschen Entscheidung, zu skalieren oder zu verbieten.

Der Ertrag ist echt, wo Unterstützung Aufwand senkt, ohne die Qualität zu senken, und geht verloren, wo sie Aufwand in Review, Nacharbeit und Wartung verschiebt. Bauen Sie den Business Case aus Ihren eigenen Kennzahlen: Zeit bis zu einem gemergten, bestehenden Change, Nacharbeit und entwichene Defekte gegenüber Vergleich, Review-Last und Zufriedenheit von Nutzern und Personal. Vermeiden Sie, veröffentlichte Produktivitätszahlen als Ihre Schätzung zu nutzen. Denken Sie an verborgene Kosten: verringertes Verständnis, Fähigkeitsverlust und technische Schuld. Seien Sie ehrlich zur Unsicherheit (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Erzeugte Zeilen oder angenommene Vorschläge zählen.** Sie belohnen Volumen. Messen Sie, was Bestand hat.
- **Gestützte Arbeit an leichten Aufgaben mit ungestützter an schweren vergleichen.** Das Ergebnis schmeichelt oder bestraft das Werkzeug. Gleichen Sie Aufgaben ab.
- **Die Review-Kapazität zurückfallen lassen.** Qualität sinkt unbemerkt. Begrenzen Sie die Change-Größe und schützen Sie Reviewer.
- **Die nachgelagerten Kennzahlen überspringen.** Die Kosten erscheinen später. Verfolgen Sie Nacharbeit, Defekte und Stabilität.
- **Erzeugte Tests als Qualität behandeln.** Sie können bestehen, ohne etwas zu prüfen. Testen Sie die Tests.
- **Fähigkeiten ignorieren.** Verständnis verblasst unbemerkt. Verfolgen Sie die Zuversicht ohne Werkzeug und üben Sie.
- **Einzelne überwachen.** Es erzeugt Furcht und verbirgt Probleme. Halten Sie Daten auf Teamebene.
- **Sieg nach einer kurzen, kleinen Studie erklären.** Wiederholen Sie sie, wenn sich Werkzeuge und Praktiken ändern.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Messen, was Bestand hat | Outputzahlen | Informelle Eindrücke von Qualität | Gestützte Arbeit getaggt; Bestand und Nacharbeit gegenüber Vergleich verfolgt | Nachgelagerte Defekte, Stabilität und Review-Last gemeinsam gesteuert | Teamübergreifender Beleg leitet, wo Unterstützung genutzt wird; Ergebnisse breit geteilt |
| Review und Verständnis | Review wie zuvor | Sorge um Überlast | Normen zur Change-Größe; Erklärungsprüfungen beprobt | Review-Kapazität geplant; Automation Bias gekontert | Review und Verständnis in die Arbeitsweise aller Teams mit KI eingebaut |
| Menschen und Fähigkeiten | Nicht bedacht | Anekdoten | Zuversicht ohne Werkzeug gepulst; etwas Übung | Fähigkeitsentwicklung geplant; Trends gesteuert | Lernen und Handwerk über die Organisation geschützt; KI-Nutzung gemeinsam mit Personal entworfen |

## Checkliste

- [ ] KI-gestützte Arbeit wird auf Teamebene über Werkzeugprotokolle oder eine leichtgewichtige Konvention getaggt.
- [ ] Vergleichsarbeit ähnlicher Größe, ähnlichen Bereichs und Risikos ist definiert.
- [ ] Bestand und Nacharbeit nach dem Merge werden für gestützte und Vergleichsarbeit verfolgt.
- [ ] Entwichene Defekte und Change-Fail-Rate werden neben jeder Geschwindigkeitskennzahl berichtet.
- [ ] Review-Zeit, -Runden und Change-Größe werden überwacht, mit Normen für die Größe.
- [ ] Autoren können gestützte Changes erklären, und eine Stichprobe wird jedes Quartal geprüft.
- [ ] Erzeugte Tests werden auf Wert beprobt.
- [ ] Gestützter Support wird auf Wiedereröffnungsrate, Wiederholungskontakte und Zufriedenheit verglichen.
- [ ] Zuversicht ohne Werkzeug wird gepulst, und Übung ohne Werkzeug ist geplant.
- [ ] Individuelle Nutzungs- und Annahmedaten werden nicht in der Beurteilung genutzt.

## KI-Prompts

**Einen Vergleich gestützter und ungestützter Changes planen.**

```text
We want to compare AI-assisted and unassisted changes for [team and system]. Our
data includes: [list fields]. Propose how to tag assisted changes without
relying on authors' memory, how to choose comparison changes of similar size and
risk, which measures to compare (retention, rework, review load, defects), the
period, and how to caveat the findings. Do not state expected results. List your
assumptions and threats to validity.
```

**Eine Erklärungsprüfung entwerfen.**

```text
Design a short, supportive explanation check for sampled AI-assisted changes in
[language and domain]. Include how to sample, the questions a reviewer asks,
what a good explanation covers, how to record results at team level, and how to
use the findings for learning without grading people. List your assumptions and
risks of the check.
```

**Die nachgelagerten Kennzahlen überprüfen.**

```text
Here are our measures for [period]: speed [values], retention [values], rework
[values], review load [values], escaped defects [values], for assisted and
comparison work. Describe what the pattern suggests and what it does not, which
differences are within normal variation, and what to check next. Do not claim
causation. List your assumptions and the data I should add.
```

**Übung ohne Werkzeug planen.**

```text
Propose a light program to keep core skills alive for a team that uses AI tools
daily: monthly unaided exercises, pairing between newer and experienced members,
and design discussions. Suggest how to fit it into the working week without
adding pressure and how to track its effect with the unaided confidence pulse.
List your assumptions and trade-offs.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Kennzahl KI-gestützter Arbeit zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine Kennzahl KI-gestützter Arbeit misst, was Bestand hat, und ihren Manipulationsvektor und ihre Leitplanke trägt.

## Wichtigste Erkenntnisse

- Messen Sie, was Bestand hat: Bestand, Nacharbeit, entwichene Defekte und Stabilität, gegenüber vergleichbarer ungestützter Arbeit.
- Schützen Sie Review-Kapazität und halten Sie Review tief, denn es begrenzt, wie schnell gestützte Arbeit sicher fließen kann.
- Prüfen Sie, dass Autoren erklären können, was sie ausliefern, und beachten Sie, ob Fähigkeiten wachsen oder verblassen.
- Beproben Sie erzeugte Tests und Ausgaben auf echten Wert.
- Lesen Sie veröffentlichte Produktivitätsbehauptungen als einzelne Studien und messen Sie Ihre eigene Arbeit.
- Halten Sie individuelle Nutzungsdaten aus der Beurteilung heraus.

## Quellen und weiterführende Literatur

1. Peng, S., Kalliamvakou, E., Cihon, P., and Demirer, M., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot," arXiv preprint, 2023.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. DORA, Google Cloud, *Accelerate State of DevOps Report* (latest edition addressing AI), https://dora.dev/.
4. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Lines of code](https://en.wikipedia.org/wiki/Lines_of_code).
8. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
9. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
10. Wikipedia, [Duplicate code](https://en.wikipedia.org/wiki/Duplicate_code).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Cognitive offloading](https://en.wikipedia.org/wiki/Cognitive_offloading).
13. Wikipedia, [Deskilling](https://en.wikipedia.org/wiki/Deskilling).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Software testing](https://en.wikipedia.org/wiki/Software_testing).
16. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
