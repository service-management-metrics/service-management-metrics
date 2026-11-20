# Kennzahlen für Kundenzufriedenheit

**Zufriedenheitswerte sagen Ihnen, wie sich Menschen bei einem Moment von Service fühlten. Stellen Sie also kurze, ehrliche Fragen zur richtigen Zeit, lesen Sie die Kommentare vor den Zahlen und lassen Sie einen Wert nie zur Quote werden.**

## Überblick und Motivation

Betriebliche Kennzahlen sagen, was der Service tat. Zufriedenheitskennzahlen sagen, wie es war, ihn zu empfangen. Ein Ticket kann innerhalb seiner Zielzeit schließen und den Nutzer trotzdem festsitzen lassen, und ein wiederhergestellter Service kann sich dennoch wie eine schlechte Woche anfühlen. Agile Teams stellen am Ende jedes Inkrements dieselbe Frage: Hat das den Menschen geholfen, für die es gedacht war? Das IT-Service-Management (ITSM), wie von ITIL kodifiziert, stellt sie über den Wert, den ein Service gemeinsam mit seinen Kunden schafft. Die Messung der Zufriedenheit ist der Ort, an dem sich die beiden Fragen treffen.

[Kundenzufriedenheit](https://en.wikipedia.org/wiki/Customer_satisfaction) ist ein Maß dafür, wie Produkte und Services das erfüllen oder übertreffen, was Kunden erwarten. In der Servicearbeit wird sie meist per Umfrage erhoben, und sie kommt in drei verbreiteten Formen, die dieses Thema behandelt:

- **Customer Satisfaction Score (CSAT):** eine Bewertung einer bestimmten Interaktion oder eines Services, meist auf einer Fünf-Punkte-Skala, berichtet als Anteil zufriedener Antworten.
- **Net Promoter Score (NPS):** beruht auf einer Frage dazu, wie wahrscheinlich es ist, dass ein Antwortender ein Unternehmen, Produkt oder einen Service weiterempfiehlt. Antwortende mit 9 oder 10 sind Promotoren, solche mit 0 bis 6 sind Detraktoren, und der Wert ist der Prozentsatz der Promotoren minus der Prozentsatz der Detraktoren. Der [Net Promoter Score](https://en.wikipedia.org/wiki/Net_promoter_score) wurde von Fred Reichheld in einem Artikel der *Harvard Business Review* von 2003 bekannt gemacht.
- **Customer Effort Score (CES):** eine Bewertung, wie viel Aufwand es kostete, etwas zu erledigen, oder wie leicht es war. Seine Autoren argumentierten, dass die Verringerung des Aufwands Loyalität besser vorhersage als das Begeistern von Menschen. Behandeln Sie diese Behauptung als Hypothese, die in Ihrem eigenen Kontext zu testen ist, nicht als gesicherte Tatsache.

In einem internen IT-Umfeld ist der „Kunde“ ein Kollege, und die Umfrage ist eine kurze Frage nach einem Ticket oder einem Release. Die Prinzipien sind dieselben, und die ethischen Pflichten sind größer, weil die Menschen, die Sie fragen, morgen mit Ihnen arbeiten.

Umfragen sind eine Form der [Umfragemethodik](https://en.wikipedia.org/wiki/Survey_methodology), eines Feldes mit jahrzehntelangen Erkenntnissen darüber, wie Formulierung, Zeitpunkt und Stichprobenziehung Antworten verändern. Teams, die sie überspringen, erzeugen tendenziell Werte, die sich aus Gründen bewegen, die nichts mit Servicequalität zu tun haben. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt hier mit zusätzlicher Wucht: Werden Mitarbeitende für einen hohen Wert belohnt, lernen sie, ihn zu erbitten (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Dieses Thema gibt Ihnen die Definitionen, die Datenhygiene und die Gewohnheiten, die Zufriedenheitskennzahlen ehrlich halten. Das nächste Thema erweitert sie zu einer vollständigeren Sicht auf Erlebnis (siehe Thema 6.2, Experience Level Agreements).

## Leitprinzipien

- **Nach einem bestimmten Moment fragen.** Eine an ein geschlossenes Ticket oder ein Release gebundene Umfrage liefert schärfere Antworten als eine allgemeine Jahresfrage.
- **Kurz halten.** Eine Bewertung und ein offener Kommentar schlagen zehn Fragen, die die meisten überspringen.
- **Die Kommentare lesen.** Der Wert sagt Ihnen, wie viel, und die Worte sagen, warum.
- **Berichten, wer geantwortet hat.** Ein Wert ohne Rücklaufquote und Zusammensetzung der Antwortenden ist ein Gerücht.
- **Die Schleife schließen.** Menschen, die ein schlechtes Erlebnis melden, sollten eine Rückmeldung bekommen.
- **Mit sich selbst im Zeitverlauf vergleichen.** Unternehmensübergreifende Benchmarks verbergen Unterschiede in Methode, Zielgruppe und Kultur.
- **Antwortende schützen.** Erheben Sie nur, was Sie brauchen, sagen Sie, wie es verwendet wird, und ordnen Sie Einzelpersonen nicht danach.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CSAT | Anteil der Antworten, die zufrieden sind, für einen definierten Interaktionstyp | auf einer Fünf-Punkte-Skala mit 4 oder 5 bewertete Antworten / gültige Antworten | Prozent | An das Ticket oder Release gebundene Umfrage nach der Interaktion | Service Desk; Incident-Management; Service-Level-Management | Feedback aus dem Stakeholder-Review | Wöchentlich oder monatlich |
| NPS | Promotoren minus Detraktoren für einen definierten Service und eine Zielgruppe | Prozent mit 9 oder 10 minus Prozent mit 0 bis 6 | Punkte, Bereich -100 bis 100 | Beziehungsumfrage, in festem Intervall versandt | Kontinuierliche Verbesserung; Service-Level-Management | Review der Produktergebnisse | Vierteljährlich |
| CES | Durchschnittliche oder Anteil günstiger Bewertungen, wie leicht es war, etwas zu erledigen | günstige Antworten / gültige Antworten, oder mittlere Bewertung | Prozent oder Mittelwert | An das Ticket, die Anfrage oder das Release gebundene Umfrage nach der Interaktion | Management von Serviceanfragen; Service Desk | Usability-Feedback im Refinement | Monatlich |
| Rücklaufquote der Umfrage | Anteil der eingeladenen Nutzer, die antworteten | erhaltene Antworten / zugestellte Umfragen | Prozent | Umfragewerkzeug und Ticketsystem | Messung und Berichterstattung | Beteiligung am Feedback in Reviews | Monatlich |
| Abdeckung der Antwortenden | Wie genau die Zusammensetzung der Antwortenden der Nutzerpopulation in vereinbarten Dimensionen entspricht | Anteil der Antwortenden in jeder Gruppe verglichen mit dem Anteil der Nutzer in dieser Gruppe, je Gruppe | Prozentpunkte | Umfragewerkzeug, verbunden mit Nutzerverzeichnis oder Ticketdaten | Messung und Berichterstattung | Stakeholder-Karte | Vierteljährlich |
| Anteil der Kommentarthemen | Anteil der Freitextkommentare, die jedem Thema zugeordnet sind | Kommentare im Thema / kodierte Kommentare | Prozent | Kodierte Umfragekommentare | Kontinuierliche Verbesserung | Themen der Retrospektive | Monatlich |
| Nachfasszeit bei Detraktoren | Zeit von einer niedrigen Bewertung bis zu einem dokumentierten Kontakt mit dem Nutzer | Zeitstempel der Nachfassnotiz minus Zeitstempel der niedrigen Bewertung, Median und 85. Perzentil | Stunden oder Tage | Umfragewerkzeug und Ticketsystem | Incident-Management; kontinuierliche Verbesserung | Feedbackschleife in der Arbeitsvereinbarung | Monatlich |

Die Uhren und Grenzen zählen. CSAT und CES zählen nur Antworten auf die bestimmte Interaktion, nie die allgemeine Stimmung. Die Nachfasszeit bei Detraktoren startet im Moment, in dem die niedrige Bewertung erfasst wird, nicht wenn jemand sie zuerst liest. Schließen Sie Testdatensätze und Antworten von Mitgliedern des gemessenen Teams aus.

## Empfehlungen

### Das Instrument entwerfen

**1. Wählen Sie eine Frage je Zweck.** Nutzen Sie CSAT nach einer Interaktion, um zu erfahren, wie diese Interaktion lief, CES nach etwas, das der Nutzer tun musste, um zu erfahren, wo Reibung sitzt, und NPS in regelmäßigem Intervall, um etwas über die Gesamtbeziehung zu erfahren. Die drei in einem Formular zu mischen lädt zu Umfragemüdigkeit und unklaren Ergebnissen ein. Können Sie sich nur eine leisten, wählen Sie die, die zu der Entscheidung passt, die Sie treffen müssen.

**2. Schreiben Sie neutrale, konkrete Formulierungen.** „Wie zufrieden waren Sie damit, wie Ihre Anfrage bearbeitet wurde?“ ist besser als „Wie großartig war unser Service?“ Vermeiden Sie doppelläufige Fragen, die zugleich nach Geschwindigkeit und Freundlichkeit fragen. Bieten Sie eine konsistente Skala, beschriften Sie ihre Enden und halten Sie die Reihenfolge der Antworten jedes Mal gleich. Eine [Likert-Skala](https://en.wikipedia.org/wiki/Likert_scale) ist ein verbreiteter Entwurf, und kleine Änderungen der Beschriftung können Ergebnisse verschieben, ändern Sie sie also nicht beiläufig.

**3. Fügen Sie eine offene Frage hinzu.** „Was ist der Hauptgrund für Ihre Bewertung?“ kostet den Antwortenden wenig und gibt dem Team seine reichsten Daten. Kommentare erklären den Wert, legen Probleme offen, die die Zahlen nicht zeigen können, und geben Mitarbeitenden etwas zum Lernen. Lesen Sie sie in einem regelmäßigen Review, wenn möglich laut.

**4. Legen Sie die Umfrage nah an das Ereignis.** Senden Sie die Frage bald nach der Lösung des Tickets oder dem Eintreffen des Releases, solange die Erinnerung frisch ist. Senden Sie sie nicht im Moment des Schließens durch einen Mitarbeitenden, der auf eine hohe Note hofft. Eine kurze, vom System gesetzte Verzögerung beseitigt die Versuchung, die Antwort zu coachen.

### Die Zahlen vertrauenswürdig machen

**5. Berichten Sie Rücklaufquote und Zusammensetzung der Antwortenden neben jedem Wert.** Ein Zufriedenheitswert von 4 Prozent der Nutzer ist eine Aussage über die Antwortenden. Vergleichen Sie, wer antwortete, mit denen, die eingeladen waren, anhand von Attributen, die Sie bereits haben, etwa Region, Service oder Anfragetyp. Große Lücken heißen, dass der Wert einen Vorsichtsvermerk braucht. Repräsentativität ist ein Kernthema der Forschung zur [Antwortverzerrung](https://en.wikipedia.org/wiki/Response_bias), und der Punkt für ein Service-Team ist schlicht, hinzuschauen.

**6. Zeigen Sie Unsicherheit.** Kleine Stichproben schwanken stark. Eine [Fehlerspanne](https://en.wikipedia.org/wiki/Margin_of_error) oder ein [Konfidenzintervall](https://en.wikipedia.org/wiki/Confidence_interval) neben einem monatlichen CSAT hindert das Team daran, auf Rauschen zu reagieren (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen). Hat ein Team in einem Zeitraum weniger als einige Dutzend Antworten, berichten Sie Anzahlen und lesen Sie Kommentare, statt Prozentsätze zu zeigen.

**7. Vermeiden Sie, auszuwählen, wer gefragt wird.** Entscheidet die Person, die das Ticket schloss, ob die Umfrage gesendet wird, steigen die Werte aus dem falschen Grund. Senden Sie die Umfrage automatisch an jede berechtigte Interaktion oder, bei hohem Volumen, an eine Zufallsstichprobe. Dokumentieren Sie die Regel, einschließlich aller Ausschlüsse, im Kennzahlenregister.

**8. Trennen Sie die Zufriedenheit einer Person von der Leistung einer Person.** Zufriedenheit hängt von Faktoren ab, die ein einzelner Mitarbeitender nicht kontrolliert: die Qualität des Produkts, die Warteschlange, die Richtlinie, die Stimmung des Nutzers. Ordnen Sie Mitarbeitende nicht nach CSAT. Nutzen Sie ihn auf Team- und Serviceebene und nutzen Sie Kommentare für Coaching-Gespräche, die der Mitarbeitende begrüßt.

### Auf das reagieren, was man hört

**9. Schließen Sie die Schleife mit unzufriedenen Nutzern.** Kontaktieren Sie Menschen, die ein schlechtes Erlebnis melden, fragen Sie, was geholfen hätte, und erfassen Sie, was Sie lernen. Setzen Sie ein Ziel für die Nachfasszeit und machen Sie das Nachfassen zu einem Gespräch, nicht zu einer Bitte, den Wert zu ändern. Einen Wert auf Bitte zu ändern ist eine Verzerrung, das Nachfassen sollte also darauf zielen, das Problem zu beheben und zu lernen.

**10. Kodieren Sie Kommentare in Themen und verfolgen Sie sie.** Einigen Sie sich auf eine kurze Liste von Themen, etwa „musste mich wiederholen“, „langsame Reaktion“, „Korrektur hielt nicht“, „unklare Kommunikation“ und „freundlich und hilfsbereit“. Kodieren Sie jeden Monat eine Stichprobe, von Hand oder mit einem Werkzeug, und lassen Sie einen Menschen die Ergebnisse prüfen. Trends bei Themen zeigen Probleme oft, bevor sich ein Wert bewegt.

**11. Verknüpfen Sie Zufriedenheit mit betrieblichen Daten.** Vergleichen Sie CSAT mit Lösungszeit, Wiedereröffnungsrate und Zahl der Kontakte je Anliegen. Die Paare sagen Ihnen, ob Geschwindigkeit Zufriedenheit kauft oder ob das Team schnell und falsch ist. Nutzen Sie sie, um Geschichten zum Untersuchen zu finden, nicht um eine Regel zu beweisen.

**12. Behandeln Sie Benchmarks mit Sorgfalt.** Veröffentlichte oder vom Anbieter gelieferte Zahlen für Zufriedenheitswerte hängen von Methode, Zielgruppe und Region ab, und Ihre eigene Historie ist der bessere Vergleichsmaßstab. Nutzen Sie einen externen Vergleich, nennen Sie Quelle, Methode und Datum und setzen Sie daraus kein Ziel, ohne zu testen, ob Ihre Methode passt. Erfinden Sie nie einen Benchmark.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| CSAT | Mitarbeitende coachen Nutzer zu Bestnoten; Umfragen nur nach leichten Tickets; schwierige Tickets ohne Umfrage geschlossen | Automatische Umfrage an jedes berechtigte Ticket; Rücklaufquote und Zusammensetzung der Antwortenden; Wiedereröffnungsrate |
| NPS | Nur freundliche Nutzer befragen; die Umfrage nach einem guten Ereignis terminieren; persönlich fragen; Skalenpunkte umetikettieren | Feste Zielgruppe und fester Zeitplan im Register; Abdeckung der Antwortenden; die Kommentare der Detraktoren lesen |
| CES | Schritte aus dem Formular so entfernen, dass die Arbeit woandershin wandert; nur nach reibungslosen Anfragen fragen | Zahl der Kontakte je Anliegen; Erfüllungszeit der Anfrage und Nacharbeit (siehe Thema 3.5, Kennzahlen für die Erfüllung von Serviceanfragen) |
| Rücklaufquote der Umfrage | Nur Menschen einladen, die wahrscheinlich antworten; die Umfrage jedes Mal an eine andere Liste senden | Einladungsregel aufgeschrieben; Eingeladene mit der Nutzerpopulation vergleichen |
| Abdeckung der Antwortenden | Schwer erreichbare Gruppen aus dem Vergleich streichen; ohne Hinweis umgewichten | Dimensionen und Methode veröffentlichen; das ungewichtete Ergebnis neben dem gewichteten zeigen |
| Anteil der Kommentarthemen | Kommentare so kodieren, dass schlechte Themen vermieden werden; Themen zusammenführen, sodass keines groß wirkt | Eine zweite Person kodiert eine Stichprobe; die Themenliste stabil halten und Änderungen protokollieren |
| Nachfasszeit bei Detraktoren | Eine Notiz protokollieren, ohne den Nutzer zu kontaktieren; den Nutzer kontaktieren, um eine bessere Bewertung zu erbitten | Nachfassnotizen auf Inhalt prüfen; den Nutzer in der nächsten Umfrage fragen, ob ihn jemand kontaktiert hat |

Ein gesunder Befund ist eine stabile Rücklaufquote, eine Zusammensetzung der Antwortenden nahe der Nutzermischung, ein Wert, der sich mit dem Erlebnis bewegt, das Nutzer in Kommentaren beschreiben, und unzufriedene Nutzer, die sagen, dass sich jemand bei ihnen gemeldet hat.

## Abwägungen: Vor- und Nachteile

| Kennzahl | Stärke | Schwäche |
| --- | --- | --- |
| CSAT | Einfach, schnell, an einen bestimmten Moment gebunden | Leicht aufzublähen; sagt wenig über die ganze Beziehung |
| NPS | Eine Frage, leicht im Zeitverlauf zu verfolgen | Verbirgt die Gründe; eine Zahl presst eine breite Verteilung zusammen; kulturelle Unterschiede beeinflussen die Skala |
| CES | Zeigt direkt auf Reibung, die das Team beseitigen kann | Weniger verbreitet verstanden; die Evidenz ist umstritten |
| Lange Jahresumfrage | Reichhaltig, deckt viele Services ab | Langsam, niedriger Rücklauf, schwer darauf zu reagieren |
| Nur Kommentare | Konkret, einprägsam | Schwer im Zeitverlauf zu vergleichen; anfällig für die lautesten Stimmen |
| Verhaltenssignale | Keine Umfragelast; objektiv | Erfasst keine Gefühle; kann die Ursache falsch lesen |

Die Antwort in Worten ist, eine kurze Interaktionsumfrage, eine gelegentliche Beziehungsumfrage und die Kommentare zu kombinieren und alle drei mit den betrieblichen Daten zu lesen. Zufriedenheitskennzahlen funktionieren als Gespräch zwischen Nutzern und Team. Als Anzeigetafel versagen sie.

## Fragen für die Diskussion im Team

**1. Was tun wir mit einem niedrigen und mit einem hohen Wert?**
Bitten Sie das Team zu beschreiben, wann ein niedriger Wert zuletzt tatsächlich zu einer Änderung führte. Fragen Sie dasselbe dann für einen hohen Wert. Sind die Antworten vage, ist die Umfrage ein Ritual. Die Moderation sollte nach einer konkreten Verbindung von den Daten zu einer Handlung suchen und sich auf einen Ort einigen, an dem diese Verbindung erfasst wird.

**2. Wer beantwortet unsere Umfragen, und wer nicht?**
Bitten Sie das Team, die Nutzergruppen zu nennen, von denen es am wenigsten hört. Vergleichen Sie mit der Einladungsliste und dem Nutzerverzeichnis. Das Gespräch zeigt oft, dass die ruhigsten Nutzer die härtesten Probleme haben. Einigen Sie sich auf einen Weg, in diesem Quartal eine ruhige Gruppe zu erreichen, etwa einen kurzen Anruf oder einen anderen Kanal.

**3. Wann in der Interaktion fragen wir, und wer entscheidet das?**
Gehen Sie den Weg von der Lösung zur Umfrage durch. Finden Sie jeden Punkt, an dem eine Person beeinflussen kann, ob, wann oder wie die Umfrage gesendet wird. Einigen Sie sich, welche dieser Punkte automatisiert werden sollten. Die Moderation kann fragen, was ein Mitarbeitender tun könnte, um einen Wert zu schützen, als Entwurfsfrage und nicht als Anschuldigung.

**4. Was hört ein Detraktor von uns, nachdem er geantwortet hat?**
Betrachten Sie einige jüngere niedrige Bewertungen und lesen Sie die Nachfassnotizen. Fragen Sie, ob sich der Nutzer gehört fühlen würde. Besprechen Sie, wie das Nachfassen nützlich gemacht werden kann, ohne um eine geänderte Bewertung zu bitten. Entscheiden Sie, wer das Nachfassen besitzt und wie die Zielzeit lautet.

**5. Welche Kommentare des letzten Monats haben verändert, was wir taten?**
Drucken oder zeigen Sie zehn Kommentare zufällig. Fragen Sie das Team, welche beachtet wurden, welche nicht und warum. So bleibt der Fokus auf den Worten, und die Gewohnheit, sie zu lesen, wächst. Einigen Sie sich, im nächsten Monat Themen zu kodieren und den Trend zu überprüfen.

**6. Mit welcher veröffentlichten Zahl sind wir versucht, uns zu vergleichen, und ist der Vergleich fair?**
Nennen Sie die Zahl, ihre Quelle, ihre Methode und ihre Zielgruppe und vergleichen Sie jedes mit Ihrem eigenen. Fragen Sie, ob es eine Entscheidung ändern würde. Wenn nicht, legen Sie sie beiseite und nutzen Sie Ihren eigenen Trend. Die Moderation sollte die Antwort im Kennzahlenregister festhalten.

## Vier Perspektiven

### Produkt- und Lieferteams

Produktteams nutzen Zufriedenheitsfeedback, um zu entscheiden, was als Nächstes zu beheben oder zu bauen ist, und kurze Umfragen nach einem Release geben einen schnelleren Befund als das nächste Quartals-Review. Lieferteams sollten Kommentare mit Backlog-Elementen verknüpfen, Nutzern zeigen, was sich änderte, und vermeiden, einen Wert als Lieferziel zu behandeln. Ein Anstieg von Kommentaren zu Aufwand oder Verwirrung nach einem Release ist ein Signal, auf das Release zu schauen, nicht auf die Umfrage.

### Service- und Betriebsteams

Service Desks erheben die meisten Interaktionsdaten und spüren den Druck des Wertes am meisten. Betriebsteams sollten Umfragen automatisch senden, die Stichprobenregel veröffentlichen und Kommentare für das Lernen des Teams nutzen. Sie sollten CSAT neben die Wiedereröffnungsrate und wiederholte Kontakte stellen, damit schnelle Schließungen nicht wie gute Ergebnisse aussehen (siehe Thema 3.1, Kennzahlen für den Service Desk).

### Führung und Governance

Führungskräfte setzen das Klima für Manipulation. Die Forderung nach „95 Prozent Zufriedenheit bis Jahresende“ lehrt Mitarbeitende, die Zahl zu schützen. Führungskräfte sollten Rücklaufquote, Zusammensetzung der Antwortenden und die häufigsten Kommentarthemen verlangen, die Korrekturen finanzieren, die Kommentare offenlegen, und Zufriedenheit aus individueller Bezahlung und Rangfolgen heraushalten. Die Governance sollte für jede extern berichtete Zahl eine genannte Methode erwarten.

### Kunden und Nutzer

Nutzer geben ihre Zeit und ihre Offenheit. Sie verdienen eine kurze Umfrage, einen klaren Grund für die Frage, ein Versprechen, wie ihre Antworten verwendet werden, und eine Antwort, wenn sie ein Problem melden. Ist die Umfrage nicht anonym, sagen Sie es. Nutzer, die nichts sich ändern sehen, hören auf zu antworten, und die Stille wird wie Zufriedenheit aussehen.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Krankenhauses betreibt einen Service Desk und ein kleines Team, das klinische Anwendungen baut. Die Zahlen unten sind illustrativ.

Der monatliche CSAT des Service Desks beträgt 92 Prozent, berechnet aus 140 Antworten bei etwa 3.100 geschlossenen Tickets, einer Rücklaufquote von 4,5 Prozent. Die Führung ist zufrieden. Die Service-Managerin liest die Kommentare und bemerkt, dass viele positive Antworten von Mitarbeitenden aus der Verwaltung stammen, während Pflegekräfte der Nachtschicht kaum auftauchen. Sie vergleicht die Zusammensetzung der Antwortenden mit dem Nutzerverzeichnis und stellt fest, dass Nachtschichtpersonal etwa 18 Prozent der Nutzer und 3 Prozent der Antwortenden ausmacht.

Das Team nimmt drei Änderungen vor. Die Umfrage wird ein Formular mit zwei Fragen, einer Bewertung und einem Kommentar, vom Ticketsystem vier Stunden nach der Lösung automatisch an jedes Ticket gesendet. Eine Textnachrichten-Version wird Schichtpersonal angeboten. Der Monatsbericht zeigt nun den CSAT mit der Rücklaufquote, dem Konfidenzintervall, der Zusammensetzung der Antwortenden gegen die Nutzermischung und den fünf häufigsten Kommentarthemen.

Binnen zwei Monaten steigt die Rücklaufquote auf etwa 11 Prozent, und der CSAT fällt auf 84 Prozent. Die Kommentarthemen zeigen „musste zurückrufen“ und „Korrektur hielt nicht“ als die zwei häufigsten Beschwerden, konzentriert bei den klinischen Systemen. Der IT-Leiter sagt dem Vorstand, dass der alte Wert widerspiegelte, wer antwortete, und der neue Wert ein besserer Wegweiser ist. Das Produktteam fügt ein Backlog-Element hinzu, um den wiederkehrenden Fehler hinter den Rückrufen zu beheben, und der Service Desk beginnt, jeden Nutzer, der eine Bewertung von 1 oder 2 gibt, binnen eines Arbeitstages zu kontaktieren. Im nächsten Quartal fällt die Rate wiederholter Kontakte für die klinischen Systeme, und der Anteil der Kommentare „musste zurückrufen“ fällt mit ihr. Das Team hält die Entscheidung in seinem Protokoll fest und setzt kein CSAT-Ziel.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Bitten Sie kontinuierlich und in kleinen Mengen um Feedback und überprüfen Sie Kommentare mit Stakeholdern in jedem regelmäßigen Verbesserungsgespräch. Zu beachten ist, dass Umfragemüdigkeit Rücklaufquoten senkt und verzerrt, wer antwortet.

### KI

KI kann Kommentare und Stimmung in großer Zahl zusammenfassen, und KI-gestützte Interaktionen werden womöglich anders bewertet als menschliche. Berichten Sie Zufriedenheit gesondert für von KI und von Menschen bearbeitete Kontakte, koppeln Sie Werte mit Kommentarthemen und lassen Sie einen Menschen eine Stichprobe lesen. Zu beachten ist, dass ein Stimmungsmodell Tonfall oder Sprache falsch deuten kann; prüfen Sie es also gegen eine manuelle Stichprobe.

### Automatisierung

Lösen Sie Umfragen automatisch in einem gewählten Moment aus und messen Sie den Umfrageprozess an Rücklaufquote und Zusammensetzung der Antwortenden. Zu beachten ist, dass automatische Umfragen nur nach erfolgreichen Kontakten den Wert nach oben verzerren.

### Analytik

Zeigen Sie Werte mit der Zahl der Antworten und der Zusammensetzung der Antwortenden und lesen Sie Kommentare vor den Zahlen. Die Entscheidung, die dies untermauert, ist, welche Reisen zu verbessern sind. Zu beachten ist, dass Werte über wenige Antworten stark schwanken; zeigen Sie also die Anzahl.

## Branchenperspektive

**Startup.** Enger Kontakt zu Nutzern macht kurze Gespräche zunächst besser als Umfragen. Fügen Sie eine Ein-Frage-Umfrage hinzu, sobald das Volumen wächst, und lesen Sie weiter jeden Kommentar. Widerstehen Sie dem Drang, einen Wert zu veröffentlichen, bevor Sie genug Antworten haben, damit er etwas bedeutet.

**Kleinunternehmen.** Ein einziger unzufriedener Kunde kann mehr zählen als ein Wert. Nutzen Sie die Umfrage als Anlass, mit Menschen zu sprechen, und führen Sie Aufzeichnungen über die Nachfassgespräche. Von Anbietern gelieferte Zufriedenheitsberichte verdienen Skepsis gegenüber der Methode.

**Großunternehmen.** Größe bringt Segmente und die Versuchung zu aggregieren. Halten Sie Werte nach Service und Zielgruppe, veröffentlichen Sie die Methode und vermeiden Sie, ungleiche Services zu einer Zahl zu mitteln. Nutzen Sie eine stabile Umfrageplattform mit automatischem Versand und behandeln Sie jede teamübergreifende Rangfolge mit Vorsicht.

**Behörden und öffentlicher Sektor.** Öffentliche Stellen haben oft förmliche Pflichten, Nutzerfeedback zu erheben und Ergebnisse zu veröffentlichen, sowie Pflichten zu Barrierefreiheit und Datenschutz. Bieten Sie barrierefreie Umfragekanäle, schützen Sie die Identität der Antwortenden und veröffentlichen Sie Methoden mit den Ergebnissen. Wo eine Zufriedenheitszahl in einem Vertrag oder gesetzlichen Bericht erscheint, definieren Sie sie genau und zeigen Sie die Leitplanke daneben (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die direkten Kosten sind Umfragewerkzeuge, die viele Ticketsysteme bereits enthalten, ein bis zwei Stunden im Monat, um Kommentare zu überprüfen und Themen zu kodieren, und die Zeit, bei unzufriedenen Nutzern nachzufassen. Die größeren Kosten sind die Disziplin, auf das zu reagieren, was man hört. Es braucht keine neue Plattform, um zu beginnen.

Der Ertrag zeigt sich als Korrekturen, die Nutzer schätzen, und vermiedene Verschwendung. Kommentare sagen Ihnen, wo Reibung sitzt, sodass Sie Ursachen wiederholter Kontakte und fehlgeschlagener Korrekturen beseitigen können, statt Personal hinzuzufügen, um sie zu bearbeiten. Ein besserer Blick darauf, wer nicht antwortet, schützt Sie vor Entscheidungen auf Grundlage einiger weniger, die sich selbst auswählen. Beschreiben Sie den Nutzen in Begriffen der gefundenen und beseitigten Probleme und messen Sie Ihre eigenen Baselines davor und danach: Rate wiederholter Kontakte, Wiedereröffnungsrate und Zeit bis zur ersten nützlichen Antwort. Nutzen Sie keinen ausgedachten Prozentsatz, um das Programm zu rechtfertigen. Brauchen Sie Zahlen, bauen Sie sie aus Ihren eigenen Daten.

## Anti-Muster und Fallstricke

- **Den Wert als Ziel behandeln.** Er wird erreicht, indem man auswählt, wer gefragt wird, oder die Antwort coacht. Nutzen Sie ihn als Frage und koppeln Sie ihn mit Kommentaren und betrieblichen Kennzahlen.
- **Nur nach leichten Tickets befragen.** Senden Sie an jede berechtigte Interaktion, automatisch.
- **Mitarbeitende nach CSAT ordnen.** Es bestraft Menschen, die schwere Fälle übernehmen. Nutzen Sie Team- und Servicesichten und lernen Sie aus Kommentaren.
- **Um einen besseren Wert bitten.** Das Nachfassen bei einer niedrigen Bewertung sollte darauf zielen, das Problem zu beheben. Bitten Sie nicht um eine Änderung.
- **Einen Wert ohne Rücklaufquote berichten.** Zeigen Sie immer, wer antwortete und wie viele.
- **Die Frage ändern und den Trend behalten.** Protokollieren Sie Änderungen und markieren Sie den Bruch im Diagramm.
- **Einen Benchmark ohne seine Methode importieren.** Vergleichen Sie zuerst mit Ihrer eigenen Historie.
- **Kommentare sammeln und nie lesen.** Setzen Sie ein Review in den Kalender und bestimmen Sie einen Eigner.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Instrument und Stichprobe | Gelegentliche Ad-hoc-Umfrage | Umfrage existiert für einige Services, von Hand versandt | Kurze Umfrage automatisch an alle berechtigten Interaktionen gesendet | Stichprobenregel, Formulierungsänderungen und Ausschlüsse protokolliert und überprüft | Instrumente über Teams und Lieferanten abgestimmt und mit Nutzern überarbeitet |
| Datenqualität | Nur der Wert | Rücklaufquote berichtet | Rücklaufquote, Zusammensetzung der Antwortenden und Unsicherheit berichtet | Abdeckung der Antwortenden gesteuert; Kodierung von einer zweiten Person geprüft | Gemeinsame Sicht auf Erlebnis über Services, mit Nutzern in der Interpretation beteiligt |
| Handlung und Nachfassen | Werte berichtet, nichts ändert sich | Gelegentliche Korrekturen aus Kommentaren | Nachfassen bei Detraktoren mit Zielzeit; Themen verfolgt | Themen treiben finanzierte Verbesserungsarbeit und sind mit betrieblichen Daten verknüpft | Geschlossene Schleife über Teams und Lieferanten; Nutzer sehen, was sich änderte |

## Checkliste

- [ ] Jede Umfrage hat einen genannten Zweck und eine Entscheidung, die sie informiert.
- [ ] Fragen sind kurz, neutral und enthalten einen offenen Kommentar.
- [ ] Die Umfrage wird automatisch an jede berechtigte Interaktion oder an eine dokumentierte Zufallsstichprobe gesendet.
- [ ] Rücklaufquote und Zusammensetzung der Antwortenden werden neben jedem Wert gezeigt.
- [ ] Unsicherheit wird gezeigt, und kleine Stichproben werden als Anzahlen berichtet.
- [ ] Kein einzelner Mitarbeitender wird nach Zufriedenheit geordnet.
- [ ] Eine benannte Person fasst bei niedrigen Bewertungen innerhalb einer vereinbarten Zeit nach.
- [ ] Kommentare werden in eine stabile Themenliste kodiert und monatlich überprüft.
- [ ] Änderungen an Formulierung und Stichprobe werden protokolliert und in Diagrammen markiert.
- [ ] Antwortenden wird gesagt, wie ihre Antworten verwendet werden, und personenbezogene Daten sind geschützt.

## KI-Prompts

**Ein Umfrageinstrument überprüfen.**

```text
I run [service or team] for [type of organization]. We survey [audience] after
[event] using this wording: [paste questions and scale]. Review it for leading
language, double-barrelled questions, unclear scales, and burden on the
respondent. Suggest a shorter version that keeps one rating and one open
comment. Do not invent benchmark values or claim research results you cannot
cite. List your assumptions and what you could not judge from the text.
```

**Umfragekommentare in Themen kodieren.**

```text
Here are [number] anonymized survey comments for [service], from [period]:
[paste comments with personal data removed]. Propose a short list of themes (no
more than eight) and assign each comment to one theme, with a confidence note
where it is ambiguous. Report the count per theme and three representative
quotes per theme. Do not identify individuals. Tell me what a person should
check before relying on this coding, and list your assumptions.
```

**Repräsentativität prüfen.**

```text
We received [responses] responses from [invited] invitations. Respondents by
[dimension, for example region or shift]: [counts]. Our user population by the
same dimension: [counts]. Compare the two, describe where the respondent mix
differs, and say what cautions we should attach to our satisfaction score.
Suggest two practical ways to reach underrepresented groups. Do not infer
causes beyond the data, and list your assumptions.
```

**Ein Nachfassen mit geschlossener Schleife planen.**

```text
Draft a short process for following up with users who give a rating of
[threshold] or lower in [service]. Include who contacts them, within what time,
what to say, what to record, and how to avoid asking for a changed rating.
Context: [team size, tools, hours]. List your assumptions and any steps that
depend on tooling I have not described.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Zufriedenheitskennzahl zu finden, bevor Sie sie veröffentlichen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein überarbeiteter Eintrag einer Umfragekennzahl seinen Manipulationsvektor und seine Leitplanke behält.

## Wichtigste Erkenntnisse

- Zufriedenheitswerte beschreiben, wie sich ein Moment von Service anfühlte, binden Sie Umfragen also an bestimmte Ereignisse und halten Sie sie kurz.
- Berichten Sie mit dem Wert immer Rücklaufquote, Zusammensetzung der Antwortenden und Unsicherheit.
- Kommentare erklären die Zahlen, lesen Sie sie also jeden Monat und kodieren Sie sie in Themen.
- Senden Sie Umfragen automatisch und bitten Sie Nutzer nie, eine Bewertung zu ändern.
- Nutzen Sie Zufriedenheit auf Team- und Serviceebene, nie um Menschen zu ordnen, und behandeln Sie externe Benchmarks mit Sorgfalt.
- Schließen Sie die Schleife: Menschen, die ein schlechtes Erlebnis melden, sollten eine Rückmeldung bekommen und Veränderung sehen.

## Quellen und weiterführende Literatur

1. Reichheld, F. F., "The One Number You Need to Grow," *Harvard Business Review*, 81(12), 2003.
2. Dixon, M., Freeman, K., and Toman, N., "Stop Trying to Delight Your Customers," *Harvard Business Review*, 88(7/8), 2010.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Likert, R., "A technique for the measurement of attitudes," *Archives of Psychology*, 22(140), 1932.
5. Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., and Tourangeau, R., *Survey Methodology*, 2nd ed., Wiley, 2009.
6. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
7. Wikipedia, [Net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score).
8. Wikipedia, [Survey methodology](https://en.wikipedia.org/wiki/Survey_methodology).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Likert scale](https://en.wikipedia.org/wiki/Likert_scale).
11. Wikipedia, [Response bias](https://en.wikipedia.org/wiki/Response_bias).
12. Wikipedia, [Margin of error](https://en.wikipedia.org/wiki/Margin_of_error).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
