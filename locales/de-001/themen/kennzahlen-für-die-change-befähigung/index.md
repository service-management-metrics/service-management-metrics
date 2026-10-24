# Kennzahlen für die Change-Befähigung

**Kennzahlen für die Change-Befähigung zeigen, ob Ihre Organisation nützliche Changes sicher und schnell fließen lässt. Messen Sie also, wie Changes klassifiziert werden, wie lange sie auf eine Entscheidung warten und wie viel dieser Entscheidung die Pipeline automatisch trifft, und koppeln Sie jede Geschwindigkeitsmessgröße mit einer Sicht auf das Risiko.**

## Überblick und Motivation

Jeder Service ändert sich. Teams fügen Funktionen hinzu, patchen Bibliotheken, rotieren Zertifikate, ändern die Größe von Datenbanken und legen alte Komponenten still. Im [ITIL](https://en.wikipedia.org/wiki/ITIL)-4-Rahmenwerk heißt die Praktik, die dies steuert, Change-Befähigung, und ihr erklärter Zweck ist, die Zahl erfolgreicher Service- und Produktänderungen zu maximieren, indem sichergestellt wird, dass Risiken richtig bewertet, Changes autorisiert und der Change-Kalender gesteuert werden. Frühere ITIL-Ausgaben nannten die Praktik [Change-Management](https://en.wikipedia.org/wiki/Change_management_(ITSM)), und viele Organisationen verwenden diesen Namen weiter. Der neuere Name signalisiert eine Verschiebung des Schwerpunkts: Die Praktik existiert, um gute Veränderung zu ermöglichen, nicht um sie zu bremsen.

Ein **Change** ist in ITIL 4 das Hinzufügen, Ändern oder Entfernen von allem, was direkt oder indirekt Auswirkungen auf Services haben könnte. Das ist ein weiterer Umfang als ein Code-Deployment. Er umfasst Konfigurationsänderungen, Infrastruktur-Updates, Zugriffsänderungen, Lieferantenaktionen und Dokumentation, auf die sich Betreiber verlassen. Ein agiles Team sieht einen Change meist als einen Pull Request, der ausgeliefert wird. Ein Service-Betriebsteam sieht ihn als Eintrag in einem Kalender. Beide Sichten sind gültig, und die Kennzahlen in diesem Thema funktionieren am besten, wenn sie dasselbe Ereignis von beiden Seiten beschreiben.

ITIL 4 beschreibt drei Change-Typen, und die Kennzahlen in diesem Thema hängen von ihnen ab. Prüfen Sie den genauen Wortlaut in den aktuellen Veröffentlichungen des Rahmenwerk-Eigners; dieses Thema fasst das weithin dokumentierte Muster mit Stand Oktober 2026 zusammen.

- Ein **Standard-Change** ist risikoarm und gut verstanden. Er folgt einem dokumentierten Verfahren und ist vorab autorisiert, braucht also keine Genehmigung im Einzelfall.
- Ein **normaler Change** braucht Bewertung und Autorisierung, bevor er fortfährt. Die Tiefe der Bewertung skaliert mit Risiko und Auswirkung.
- Ein **Notfall-Change** muss dringend geschehen, oft um Service wiederherzustellen oder eine ernste Schwachstelle zu schließen. Er folgt einem beschleunigten Weg mit ausführlicherem Review danach.

Weitere Begriffe kehren unten wieder. Eine **Change-Autorität** ist die Person oder Gruppe, die das Recht hat, einen Change eines bestimmten Typs zu genehmigen. Ein **Change Advisory Board (CAB)** ist eine Gruppe, die vorgeschlagene Changes prüft und berät oder entscheidet. Die **Genehmigungsdurchlaufzeit** ist die Zeit, die ein Change auf eine Autorisierungsentscheidung wartet. Ein **Perzentil** ist ein Wert, unter dem ein genannter Anteil der Beobachtungen liegt, das 85. Perzentil ist also die Zahl, die 85 Prozent der Changes unterbieten.

Warum das alles messen? Die stärkste veröffentlichte Evidenz zur Change-Kontrolle kommt aus dem Forschungsprogramm von DevOps Research and Assessment (DORA). Seine Leitlinien berichten, dass schwergewichtige externe Genehmigung, etwa durch ein CAB oder die Freigabe durch eine leitende Führungskraft, mit schlechterer Softwarelieferleistung verbunden ist und dass keine Evidenz gefunden wurde, dass mehr förmliches externes Review den Anteil fehlschlagender Changes senkt. Es empfiehlt stattdessen Peer-Review, automatisierte Tests und kleine Changes, mit einer strategischen Rolle für jedes zentrale Gremium. Das sind Aussagen über Assoziation in Umfragedaten, keine Gesetze, und die DORA-Seiten geben für die Behauptung keine Effektgrößen an. Behandeln Sie sie also als starken Grund, auf die eigenen Daten zu schauen, und nicht als Urteil über eine einzelne Kontrolle. Das Material zur Change-Befähigung im *Service Management Guide* fasst dieselbe Forschung zusammen.

Agile und ITIL-Sicht treffen sich bei der Frage, wo Kontrolle lebt. In einer Auslieferungs-Pipeline kann ein Großteil der Bewertung kontinuierlich geschehen: Ein Reviewer genehmigt den Code, automatisierte Tests prüfen das Verhalten, und das Deployment-Werkzeug schreibt den Datensatz. Das erfüllt die Absicht der [Funktionstrennung](https://en.wikipedia.org/wiki/Separation_of_duties), wenn das Review aufgezeichnet wird und der Autor seine eigene Arbeit nicht genehmigen kann. Kennzahlen sagen Ihnen, ob dies tatsächlich geschieht oder ob die Pipeline eine schnelle Straße ist, die die meisten Changes verlassen, um in einer Warteschlange zu warten.

Dieses Thema behandelt die Fluss- und Kontrollseite des Changes: Volumen, Typmix, Wartezeit und Automatisierung. Es behandelt nicht, ob Changes gelingen. Die Change-Fehlerrate, der Notfallanteil, Rollback- und Hotfix-Messgrößen gehören zu Thema 4.4, Change-Fehlschläge und Nacharbeit, und die DORA-Durchsatz- und Instabilitätsmessgrößen stehen in Thema 2.8, DORA-Kennzahlen. Deployment- und Release-Häufigkeit stehen in Thema 4.5, Kennzahlen für Releases und Deployments. Die Incident-Seite eines schlechten Changes steht in Thema 3.3, Reaktions- und Lösungszeit bei Incidents, und Thema 3.4, Kennzahlen für Major Incidents.

Change-Kennzahlen ziehen [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) schnell an: Ein Ziel für die Genehmigungszeit lädt zu schnellen, leeren Genehmigungen ein, und ein Ziel für den Anteil von Standard-Changes lädt dazu ein, riskante Arbeit als Routine umzuklassifizieren (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Leitprinzipien

- **Kontrolle am Risiko ausrichten.** Ziel ist verhältnismäßige Kontrolle: Risikoarme Changes nehmen einen schnellen, vorab autorisierten Weg, und riskante Changes erhalten echte Prüfung. Ein einziger Prozess für alles ist für die meisten Changes langsam und für die gefährlichen oberflächlich.
- **Das Warten messen, nicht nur die Arbeit.** Die Genehmigungsdurchlaufzeit dominiert oft die Zeit, die ein fertiger Change vor der Produktion verbringt. Sie ist unsichtbar, solange niemand festhält, wann die Genehmigung angefragt und wann sie erteilt wurde.
- **Typen zählen, bevor Sie etwas anderes zählen.** Volumen, Geschwindigkeit und Risiko unterscheiden sich stark zwischen Standard-, normalen und Notfall-Changes. Ein einziger Durchschnitt über alle drei verbirgt jedes nützliche Signal.
- **Automatisierte, aufgezeichnete Belege Meetings vorziehen.** Peer-Review, bestandene Tests und Pipeline-Prüfungen erzeugen einen Datensatz ohne Kalendertermin. Messen Sie, wie viel der Genehmigungsentscheidung die Pipeline erfasst.
- **Einen Service oder ein Team beschreiben, nie eine Person.** Genehmiger und Antragsteller arbeiten innerhalb eines Systems. Einzelpersonen nach erteilten oder abgelehnten Genehmigungen zu ordnen lehrt Menschen, alles oder nichts zu genehmigen.
- **Geschwindigkeit mit Sicherheit koppeln.** Schnellere Genehmigung ist nur dann eine gute Nachricht, wenn das Fehlerbild stabil ist. Lesen Sie diese Kennzahlen neben Thema 4.4, Change-Fehlschläge und Nacharbeit.
- **Die Klassifizierungsregeln aufschreiben.** Ob ein Change Standard, normal oder Notfall ist, ist ein Urteil, das reproduzierbar sein muss. Halten Sie die Kriterien fest und prüfen Sie jedes Quartal eine Stichprobe.

## Kennzahlendefinitionen

Die Tabelle nennt die Uhren und Ausschlüsse, die Ihr Team aufschreiben sollte. Die Daten stammen aus dem Change- oder Ticket-Werkzeug, den Ereignissen von Versionskontrolle und Pipeline und den Genehmigungsdatensätzen (siehe Thema 1.5, Datenquellen und Instrumentierung).

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change-Volumen nach Typ | Anzahl abgeschlossener Changes, aufgeteilt in Standard, normal und Notfall | Anzahl der Change-Datensätze, die im Zeitraum den Status „umgesetzt“ erreichten, gruppiert nach Typ zum Zeitpunkt der Genehmigung; stornierte und zurückgezogene Changes sind ausgeschlossen und gesondert berichtet; je Service berichten, nicht je Person | Changes pro Woche oder Monat, nach Typ | Change-Datensätze im ITSM-Werkzeug, verbunden mit Pipeline-Deployment-Ereignissen | Change-Befähigung | Durchsatz fertiger Arbeitselemente; Release-Inhalt je Inkrement | Wöchentlich, monatlich überprüft |
| Anteil von Standard-Changes | Anteil abgeschlossener Changes, die den vorab autorisierten Weg nahmen | Im Zeitraum abgeschlossene Standard-Changes / alle im Zeitraum abgeschlossenen Changes; ein nachträglich umklassifizierter Change zählt unter seinem endgültigen Typ, und die Umklassifizierung wird protokolliert | Prozent | Change-Datensätze mit Typ und Umklassifizierungshistorie | Change-Befähigung | Routinearbeit, abgedeckt durch die Arbeitsvereinbarung und Definition of Done des Teams | Monatlich |
| Genehmigungsdurchlaufzeit | Zeit, die ein Change auf eine Autorisierungsentscheidung wartet | Die Uhr startet, wenn der Antrag als bereit zur Bewertung eingereicht wird, und stoppt, wenn die Autorisierungsentscheidung erfasst wird; Zeit, in der auf Informationen des Antragstellers gewartet wird, ist ausgeschlossen und gesondert gezeigt; Median und 85. Perzentil für normale Changes im Zeitraum berichten; Standard-Changes ohne Genehmigungsschritt sind ausgeschlossen | Stunden oder Arbeitstage | Zeitstempel in Change-Datensätzen oder Genehmigungsereignissen in der Pipeline | Change-Befähigung | Wartezeit in einem Workflow; Zeit in einer Review-Spalte | Wöchentlich, monatlich überprüft |
| Anteil automatisierter Genehmigungen | Anteil der Autorisierungsentscheidungen, die von Pipeline-Kontrollen oder vorab autorisierter Richtlinie getroffen und aufgezeichnet werden | Changes, deren Genehmigung durch eine aufgezeichnete automatisierte Prüfung oder ein aufgezeichnetes Peer-Review nach schriftlicher Richtlinie erteilt wurde / alle im Zeitraum abgeschlossenen Changes; manuelle Freigabe durch ein Gremium oder eine Führungskraft zählt als nicht automatisiert | Prozent | Pipeline-Protokolle, Code-Review-Datensätze und Change-Datensätze | Change-Befähigung; Deployment-Management | Automatisierte Qualitäts-Gates; Peer-Review als Teil der Definition of Done | Monatlich |
| Alter der Genehmigungswarteschlange | Wie lange wartende Anträge gerade jetzt warten | Alter jedes Changes, der derzeit auf eine Entscheidung wartet, gemessen von der Einreichung bis zum Moment der Momentaufnahme; das älteste Element und das 85. Perzentil der offenen Warteschlange berichten; abgeschlossene Genehmigungen sind ausgeschlossen | Stunden oder Arbeitstage | Change-Datensätze mit offenem Genehmigungsstatus | Change-Befähigung | Alter von Arbeitselementen; alternde Arbeit in Bearbeitung | Tägliche Momentaufnahme, wöchentlich überprüft |
| Vollständigkeit der Change-Datensätze | Anteil abgeschlossener Changes, deren Datensatz Wer, Was, Warum, Wann und Welcher Service beantworten kann | Changes mit allen Pflichtfeldern befüllt und mit dem betroffenen Service oder Konfigurationselement verknüpft / alle im Zeitraum abgeschlossenen Changes; die Pflichtfelder sind in der Definition aufgeführt; nach der Umsetzung des Changes angelegte Datensätze werden gekennzeichnet | Prozent | Change-Datensätze, Versionskontroll-Verknüpfungen, Konfigurationsdaten | Change-Befähigung; Service-Konfigurationsmanagement | Nachverfolgbarkeit von Commit über Ticket zu Deployment | Monatlich |

Die Genehmigungsdurchlaufzeit blickt auf Changes zurück, die fertig gewartet haben, und kann einen Stapel feststeckender Anträge verbergen. Das Alter der Warteschlange blickt auf das, was heute wartet, und ist die frühere Warnung. Der Anteil von Standard-Changes ist keine Punktzahl, die zu maximieren ist: Ein Team, das Konfiguration über eine ausgereifte Pipeline ändert, hat einen hohen Anteil, und ein Team auf einem Legacy-Kernsystem kann vernünftigerweise einen niedrigen haben.

## Empfehlungen

### Die Grundlagen schaffen

**1. Zählen Sie Changes nach Typ, bevor Sie etwas anderes messen.** Bauen Sie eine Sicht abgeschlossener Changes, aufgeteilt nach Standard, normal und Notfall, je Service und Monat. Viele Organisationen entdecken an dieser Stelle, dass sich niemand auf die Gesamtzahl einigen kann, weil Tickets, Pipeline-Deployments und informelle Fixes getrennt gezählt werden. Diese Quellen abzugleichen ist das erste Ergebnis des Programms (siehe Thema 1.5, Datenquellen und Instrumentierung).

**2. Schreiben Sie die Klassifizierungsregeln auf und ziehen Sie Stichproben.** Halten Sie fest, was einen Change zum Standard macht: ein dokumentiertes Verfahren, ein bekanntes Risiko und eine Erfolgsbilanz. Halten Sie fest, was einen Change zu normal oder Notfall macht. Prüfen Sie jedes Quartal eine Zufallsstichprobe von etwa zwanzig Changes und fragen Sie bei jedem, ob er so klassifiziert wurde, wie die Regeln es sagen. Fehlklassifizierung ist die größte Bedrohung für jede andere Zahl in diesem Thema.

**3. Definieren Sie die Genehmigungsuhr schriftlich.** Halten Sie fest, dass die Uhr startet, wenn der Antrag als bereit eingereicht wird, und stoppt, wenn die Entscheidung erfasst wird, und nennen Sie die Ausschlüsse, etwa das Warten darauf, dass der Antragsteller eine Frage beantwortet. Ohne das misst ein Team ab Ticketanlage und ein anderes ab der Board-Sitzung, und die Zahlen lassen sich nicht einmal im Zeitverlauf vergleichen.

### Das Warten verkürzen

**4. Berichten Sie die Genehmigungsdurchlaufzeit als Verteilung.** Ein Mittelwert verbirgt das Muster, auf das es ankommt, nämlich einige Changes, die sehr lange warten. Zeigen Sie Median und 85. Perzentil und die langsamsten Fälle nach Name des Changes, nicht nach Name der Person (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen). Ist das 85. Perzentil ein Vielfaches des Medians, ist die Ursache meist ein Meeting-Zyklus oder ein einzelner überlasteter Genehmiger, und die Korrektur ist strukturell.

**5. Beobachten Sie die Warteschlange, nicht nur die Historie.** Überprüfen Sie das Alter der Genehmigungswarteschlange jede Woche im selben Forum, das Flussmaße überprüft. Das älteste wartende Element ist die beste Frühwarnung, dass ein Gremium überlastet ist, dass ein Urlaub eine Unterschrift aufgehalten hat oder dass ein Antragsteller still aufgehört hat nachzufragen. Eine Warteschlangensicht passt auch zur Gewohnheit, auf alternde Arbeit zu schauen (siehe Thema 2.1, Flussmaße).

**6. Trennen Sie das Warten auf Information vom Warten auf eine Entscheidung.** Geht ein Antrag für mehr Details an den Antragsteller zurück, stoppen Sie die Genehmigungsuhr und starten eine andere. Genehmiger werden für Verzögerungen verantwortlich gemacht, die der Antragsteller verursachte, und Antragsteller für Verzögerungen in der Warteschlange. Zwei Uhren geben jeder Seite ein genaues Bild und eine konkrete Verbesserung, etwa eine bessere Antragsvorlage.

### Kontrolle in die Pipeline verlagern

**7. Wandeln Sie wiederholbare, risikoarme Change-Typen in Standard-Changes um.** Wählen Sie den häufigsten normalen Change in Ihrer Volumensicht, etwa ein routinemäßiges Bibliotheks-Update oder eine Skalierungsaktion. Schreiben Sie sein Verfahren und seine Prüfungen auf, einigen Sie sich mit der Change-Autorität auf das Risiko und autorisieren Sie ihn vorab. Beobachten Sie dann den Anteil von Standard-Changes und die Genehmigungsdurchlaufzeit für normale Changes zusammen: Der Anteil sollte steigen und die Warteschlange kürzer werden, ohne entsprechenden Anstieg der Fehlschläge (siehe Thema 4.4, Change-Fehlschläge und Nacharbeit).

**8. Zeichnen Sie die Genehmigung dort auf, wo die Arbeit geschieht.** Erfassen Sie das Peer-Review im [Code-Review](https://en.wikipedia.org/wiki/Code_review)-Werkzeug und lassen Sie die Pipeline das Review, das Testergebnis und das Deployment automatisch mit dem Change-Datensatz verknüpfen. Der Datensatz ist dann ein Nebenprodukt der Arbeit statt einer gesonderten Aufgabe. Messen Sie den Anteil automatisierter Genehmigungen und prüfen Sie eine Stichprobe, um zu bestätigen, dass das aufgezeichnete Review substanziell ist und kein Durchwinken (siehe Thema 2.7, Kennzahlen für Pull Requests und Code-Review).

**9. Behandeln Sie die Pipeline als den Ort, an dem Richtlinie kodiert wird.** Regeln wie „kein direkter Produktionszugriff ohne Ticket“, „Tests müssen bestehen“ und „der Autor kann seinen eigenen Change nicht genehmigen“ lassen sich durch Werkzeuge durchsetzen, wobei die Konfiguration nach den Praktiken von [Infrastructure as Code](https://en.wikipedia.org/wiki/Infrastructure_as_code) als Code geführt wird. Ist die Richtlinie Code, können Sie einem Prüfer die Regel und ihre Historie zeigen statt eines Sitzungsprotokolls. Messen Sie, wie viele Changes die Pipeline umgehen, denn jede Umgehung ist ein Loch in der Kontrolle.

### Die Kontrolle ehrlich halten

**10. Halten Sie einen schnellen Weg für Notfall-Changes vor und überprüfen Sie, wie er genutzt wird.** Notfall-Changes brauchen Geschwindigkeit, bremsen Sie sie also nicht mit der normalen Warteschlange. Überprüfen Sie jeden danach und achten Sie auf einen Aufwärtsdrift im Volumen, denn ein Notfallweg, der leichter ist als der normale Weg, wird zum Standard (die Messgrößen dafür stehen in Thema 4.4, Change-Fehlschläge und Nacharbeit). Berichten Sie das Notfallvolumen neben dem normalen Volumen in derselben Sicht.

**11. Prüfen Sie die Vollständigkeit der Datensätze nach Plan.** Ein vollständiger Datensatz hilft bei einem Incident, wenn Löser fragen, was sich kürzlich geändert hat (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents). Messen Sie die Vollständigkeit, prüfen Sie eine Stichprobe und behandeln Sie Lücken als Defekt des Formulars oder der Integration, nicht als Versagen des Antragstellers. Ein [Audit-Trail](https://en.wikipedia.org/wiki/Audit_trail), der hinterher aus der Erinnerung zusammengesetzt wird, ist ein schwacher Beleg.

**12. Überprüfen Sie das Modell der Change-Autorität mindestens jährlich.** Entscheiden Sie, wer für jeden Typ und jede Risikostufe Genehmigungsrechte hält, und lösen Sie Gremien auf, die alles genehmigen, was sie sehen. Verschieben Sie ein zentrales Gremium in eine strategische Rolle: teamübergreifend koordinieren, Terminkonflikte auflösen und über Abwägungen zwischen Time-to-Market und Risiko entscheiden. Halten Sie die Entscheidung und die Belege im Kennzahlenregister fest (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Change-Volumen nach Typ | Einen Change in viele kleine Datensätze zerlegen, um beschäftigt zu wirken, viele in einen zusammenfassen, um ruhig zu wirken, oder informelle Changes aus den Büchern lassen | Zählungen jeden Monat mit Pipeline-Deployment-Ereignissen abgleichen; den Anteil der Deployments ohne passenden Change-Datensatz verfolgen |
| Anteil von Standard-Changes | Riskante Arbeit als Standard umklassifizieren, um ein Ziel zu erreichen, oder weite Standardverfahren schreiben, die alles abdecken | Vierteljährliche Stichprobenprüfung der Klassifizierung; Change-Fehlerrate nach Typ (siehe Thema 4.4, Change-Fehlschläge und Nacharbeit); ein Protokoll der Umklassifizierungen |
| Genehmigungsdurchlaufzeit | Die Uhr spät starten, früh stoppen, für Fragen pausieren, die nicht nötig waren, oder genehmigen, ohne zu lesen | Das 85. Perzentil neben dem Median; stichprobenartige Prüfung der Genehmigungen auf Substanz; Change-Fehlerrate nach Genehmigergruppe, nie nach Einzelperson |
| Anteil automatisierter Genehmigungen | Automatisierte Prüfungen hinzufügen, die immer bestehen, oder ein Peer-Review ohne Kommentare als Absicherung zählen | Stichprobenprüfung automatisierter und Peer-Genehmigungen; entwichene Fehler und Fehlerrate für automatisch genehmigte Changes; Zahl der Umgehungen |
| Alter der Genehmigungswarteschlange | Alte Anträge schließen oder zurückziehen, damit die Warteschlange kurz aussieht, oder sie in einen neuen Antrag mit frischem Zeitstempel verschieben | Zahl der zurückgezogenen und erneut eingereichten Anträge; Alter des Antrags ab der ersten Einreichung gemessen |
| Vollständigkeit der Change-Datensätze | Pflichtfelder mit Platzhaltertext füllen oder Datensätze nach dem Change anlegen, um einen Bericht zu erfüllen | Nach der Umsetzung angelegte Datensätze kennzeichnen; Stichprobenprüfung der Qualität von Freitext; Quote der Verknüpfungen zu Commits |

Ein gesunder Befund zeigt einen Typmix, der sich langsam zu Standard-Changes verschiebt, bei stabilem Fehlerbild, eine mediane Genehmigungszeit nahe dem 85. Perzentil, eine Warteschlange ohne ein Element, das weit älter ist als der Rest, und eine Zahl von Umgehungen nahe null. Seien Sie misstrauisch gegenüber einem plötzlichen Sprung in einer einzelnen Zahl. Eine Halbierung der Genehmigungsdurchlaufzeit in einem Monat ohne Prozessänderung bedeutet meist, dass die Uhr sich bewegt hat, nicht die Arbeit.

## Abwägungen: Vor- und Nachteile

| Ansatz | Vorteile | Nachteile |
| --- | --- | --- |
| Vorab autorisierte Standard-Changes | Schnell, konsistent, billig zu prüfen; befreit die Change-Autorität für riskante Arbeit | Braucht Entwurf im Voraus; Klassifizierung kann driften; weite Verfahren verbergen Risiko |
| In der Pipeline aufgezeichnetes Peer-Review | Review durch Menschen, die den Code kennen; erzeugt automatisch einen Datensatz; skaliert mit dem Volumen | Qualität hängt von der Review-Kultur ab; kleinen Teams fehlt womöglich ein unabhängiger Reviewer; manche Regulierer erwarten einen gesonderten Genehmiger |
| Zentrales Change Advisory Board | Teamübergreifende Sicht; fängt Terminkollisionen und Risiko gemeinsamer Abhängigkeiten ab | Langsam, wenn als Gate für jeden Change genutzt; fördert größere Change-Pakete, seltener ausgeliefert; erzeugt eine Warteschlange |
| Genehmigungsdurchlaufzeit als Leitkennzahl | Leicht zu erklären; legt eine echte Verzögerungsquelle offen | Leicht zu manipulieren; kann Genehmiger zur Eile drängen; sagt nichts über die Qualität der Entscheidung |
| Anteil automatisierter Genehmigungen als Ziel | Belohnt Investition in Werkzeuge und aufgezeichnete Belege | Kann schwache automatisierte Prüfungen belohnen; kann Changes ausschließen, die echtes menschliches Urteil brauchen |

Die bessere Frage ist selten „Gremium oder kein Gremium“ und meist „welche Changes brauchen welche Art Prüfung, und woher wissen wir es?“

## Fragen für die Diskussion im Team

**1. Wie viele Changes haben wir letzten Monat gemacht, und stimmen alle unsere Quellen überein?**
Bitten Sie jede Gruppe, aus Tickets, Pipeline-Deployments und informellen Kanälen ihre eigene Zählung zu erstellen. Vergleichen Sie die Summen. Die Lücke ist selbst ein Befund über nicht erfasste Changes. Die Moderation sollte vereinbaren, welche Quelle das führende System ist und wer die anderen abgleicht.

**2. Welche unserer normalen Changes sind wirklich Routine, und was bräuchte es, sie zu Standard-Changes zu machen?**
Listen Sie die fünf häufigsten normalen Changes auf. Fragen Sie bei jedem, ob das Verfahren dokumentiert ist, ob das Risiko verstanden ist und ob das Team eine saubere Erfolgsbilanz hat. Die Diskussion fördert oft einen oder zwei klare Kandidaten zutage. Halten Sie die Prüfungen fest, die die Vorabautorisierung sicher machen würden, und benennen Sie, wer das Standardverfahren genehmigen würde.

**3. Wo startet und stoppt unsere Genehmigungsuhr, und was wartet darin?**
Nehmen Sie die letzten drei normalen Changes und verfolgen Sie sie von der Einreichung bis zur Entscheidung. Notieren Sie jede Übergabe, jedes Meeting und jede Informationsanfrage. Menschen sind oft überrascht, wie viel der Wartezeit Kalenderzeit zwischen Fragerunden ist. Einigen Sie sich auf eine schriftliche Definition der Uhr und dessen, was ausgeschlossen ist.

**4. Vertrauen wir unseren Genehmigungen, oder sammeln wir sie nur?**
Ziehen Sie eine Stichprobe jüngerer Genehmigungen und lesen Sie die Reviews. Suchen Sie nach Genehmigungen, die binnen Sekunden oder ohne Kommentar erteilt wurden. Ziel ist zu erfahren, wie viel Absicherung der Prozess wirklich bietet, nicht einen Schuldigen zu finden. Besprechen Sie, was ein Review substanzieller machen würde, ohne es langsamer zu machen.

**5. Wofür ist unser Change-Gremium da, und was verlören wir, wenn es nicht mehr tagte?**
Fragen Sie, was das Gremium entscheidet, was sonst niemand könnte, und was es nur bestätigt. Manche Gremien leisten wertvolle Arbeit bei der teamübergreifenden Koordination und beim Erkennen von Terminkollisionen. Andere wiederholen Entscheidungen, die im Code-Review schon getroffen wurden. Einigen Sie sich, welche Funktionen es wert sind zu bleiben und welche in die Pipeline oder ein leichteres Forum wandern könnten.

**6. Wenn wir die Genehmigungszeit halbierten, was müssten wir sehen, um zu wissen, dass es sicher war?**
Benennen Sie die Sicherheitssignale vor der Änderung, etwa die Fehlerrate von Changes nach Typ, den Notfallanteil und mit jüngeren Changes verknüpfte Incidents. Einigen Sie sich auf die Schwellen, die eine Pause auslösen würden. Dieses Gespräch macht aus einem Geschwindigkeitsziel ein Experiment mit Abbruchregel, was die beste Verteidigung dagegen ist, das Falsche zu optimieren.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams erleben die Genehmigungsdurchlaufzeit als Leerlaufzeit zwischen einem fertigen und einem laufenden Change. Sie wollen ihre eigenen Zahlen nach Typ sehen, mit Blick auf die Warteschlange, damit sie entscheiden können, wann sie bündeln, wann sie teilen und wann sie um einen neuen Standard-Change bitten. Ihre besten Beiträge sind gute Antragsvorlagen, kleine Changes und saubere Verknüpfungen vom Commit zum Change-Datensatz.

### Service- und Betriebsteams

Betriebsteams nutzen den Change-Datensatz, um die erste Incident-Frage zu beantworten: Was hat sich kürzlich geändert? Sie schätzen Vollständigkeit, genaue Service-Verknüpfungen und einen vertrauenswürdigen Kalender. Sie tragen auch die Kosten eines Changes, der schiefgeht, und haben daher ein berechtigtes Interesse an Klassifizierungsregeln und am Review von Notfall-Changes. Der beste Schritt ist, den Katalog der Standard-Changes gemeinsam mit den Lieferteams zu besitzen, damit die Vorabautorisierung betriebliches Wissen widerspiegelt.

### Führung und Governance

Führungskräfte und Governance-Gremien brauchen Gewissheit, dass Changes kontrolliert sind, und müssen wissen, ob Kontrolle die Organisation bremst. Diese Kennzahlen geben beides: Typmix, Wartezeit und den Anteil der durch aufgezeichnete Belege gestützten Genehmigungen. Verlangen Sie Trends und Streuung über Services, nie eine Rangliste, und lesen Sie sie neben den Fehlermessgrößen (siehe Thema 4.4, Change-Fehlschläge und Nacharbeit). Die Automatisierung zu finanzieren, die Genehmigung in die Pipeline verlagert, ist meist eine bessere Investition, als dem Gremium einen Reviewer hinzuzufügen.

### Kunden und Nutzer

Kunden sehen den Change-Prozess selten. Sie sehen neue Funktionen eintreffen, Korrekturen zügig ausgeliefert und weniger Ausfälle nach einem Release. Langsame Genehmigung verzögert die Korrekturen, um die sie baten, und schwache Genehmigung riskiert den Ausfall, den sie fürchten. Wo ein Service geplante Wartungsfenster hat, veröffentlichen Sie den Change-Kalender in einfacher Sprache.

## In der Praxis: ein Beispiel aus dem Service-Management

Ein fiktiver regionaler Versicherer betreibt ein Kundenportal mit acht Lieferteams und einem CAB, das zweimal pro Woche tagt. Alle Zahlen unten sind illustrativ.

Der Leiter des Service-Betriebs baut die erste vollständige Sicht auf Changes. Für den Monat zeigt das Portal etwa 420 abgeschlossene Changes laut Tickets, 610 Produktions-Deployments laut Pipeline und eine Lücke, die sich als Changes ohne Ticket erweist. Von den 420 Changes mit Ticket sind 18 Prozent Standard, 76 Prozent normal und 6 Prozent Notfall (illustrativ). Die mediane Genehmigungsdurchlaufzeit für normale Changes beträgt 2 Arbeitstage, das 85. Perzentil 7 Arbeitstage (illustrativ). Der älteste Antrag in der Warteschlange wartet seit 12 Arbeitstagen.

Als die Teams die lange Wartezeit betrachten, finden sie zwei Ursachen. Viele Anträge liegen bis zur nächsten Gremiumssitzung, auch wenn sie Routine sind, und andere gehen mehrmals wegen fehlender Informationen an den Antragsteller zurück. Das Team trennt die zwei Uhren und entdeckt, dass etwa die Hälfte der Wartezeit am 85. Perzentil Zeit ist, in der auf den Antragsteller gewartet wird. Zuerst bessert es die Antragsvorlage. Dann wählt es die drei häufigsten normalen Changes: Abhängigkeits-Updates mit bestandenen Tests, Konfigurationsschalter in einem Feature-Flag-Werkzeug und das Skalieren der Anwendungsserver. Es schreibt Verfahren, einigt sich mit der Change-Autorität auf das Risiko und wandelt sie in Standard-Changes mit in der Pipeline aufgezeichneter Genehmigung um.

Zwei Monate später steigt der Standardanteil auf 41 Prozent (illustrativ), das 85. Perzentil der Genehmigungsdurchlaufzeit für normale Changes fällt auf 4 Arbeitstage (illustrativ), und die Change-Fehlerrate nach Typ bleibt flach, wie in den Begleitmessgrößen berichtet (siehe Thema 4.4, Change-Fehlschläge und Nacharbeit). Das Gremium wechselt vom Prüfen jedes normalen Changes zum Prüfen riskanter Changes und des Monatskalenders.

Ein Manipulationsrisiko zeigt sich in der vierteljährlichen Stichprobe. Ein Team hat eine Datenbank-Schemamigration als Standard-Change klassifiziert, weil das frühere Verfahren für „Konfigurationsänderungen“ locker formuliert war. Der Prüfer der Stichprobe bemerkt, dass die Migration keinen Rollback-Plan hatte. Das Team schärft die Definitionen der Standard-Changes, fügt eine Regel hinzu, dass Schemaänderungen immer normal sind, und das Umklassifizierungsprotokoll wird ein ständiger Tagesordnungspunkt. Die im Kennzahlenregister festgehaltene Entscheidung ist, den Anteil von Standard-Changes als Kontextmessgröße zu behalten und nicht als Ziel.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Change-Befähigung dient der kontinuierlichen Auslieferung, wenn risikoarme Changes fließen, ohne auf ein Meeting zu warten, und riskante angemessen geprüft werden. Überprüfen Sie die Klassifizierungsregeln regelmäßig mit Stakeholdern. Zu beachten ist, dass ein hoher Anteil von Standard-Changes bedeuten kann, dass riskante Changes umetikettiert wurden.

### KI

KI kann Change-Risiko bewerten, Diffs zusammenfassen und Change-Datensätze entwerfen. Koppeln Sie den Anteil automatisierter Genehmigungen mit der Change-Fehlerrate und mit dem Anteil der KI-Risikobewertungen, die sich später als falsch erwiesen, und halten Sie einen Menschen für riskante Genehmigungen verantwortlich. Zu beachten ist, dass ein Modell-Risikowert falsche Sicherheit erzeugen kann; testen Sie ihn also gegen Ergebnisse.

### Automatisierung

Automatisieren Sie die Belege, die eine Pipeline erzeugen kann, und die Genehmigung gut verstandener Standard-Changes, und messen Sie die Automatisierung an Fehlschlägen, Rollbacks und ohne Beleg erteilten Genehmigungen. Zu beachten ist, dass Automatisierung einen Change genehmigen kann, den sie nicht sollte; prüfen Sie also eine Stichprobe.

### Analytik

Zeigen Sie die Genehmigungsdurchlaufzeit als Verteilung nach Change-Typ und verknüpfen Sie sie mit Fehlerraten. Die Entscheidung, die dies untermauert, ist, welche Changes vorab genehmigt werden können. Zu beachten ist, dass nach Datensatzdatum verfolgte Genehmigungen nicht dem tatsächlichen Zeitpunkt entsprechen müssen; prüfen Sie also die Zeitstempel.

## Branchenperspektive

**Startup.** Ein Startup hat meist wenig förmlichen Prozess und viel Pipeline-Automatisierung. Changes geschehen schnell ohne Datensatz, daher zählen Vollständigkeit und die Verknüpfung von Commit zu Deployment am meisten. Eine einseitige Definition der drei Typen plus in der Pipeline aufgezeichnetes Review genügt oft.

**Kleinunternehmen.** Ein kleines Unternehmen hat oft ein oder zwei Personen, die Changes sowohl schreiben als auch freigeben, sodass unabhängiges Review schwer ist. Nutzen Sie eine einfache Liste von Standard-Changes für Routinearbeit, verlangen Sie ein zweites Augenpaar für alles, was Kundendaten oder Geld berührt, und führen Sie ein schlichtes Protokoll der Changes. Die nachverfolgenswerten Messgrößen sind Volumen nach Typ und Vollständigkeit der Datensätze, weil sie billig sind und bei einem Incident helfen.

**Großunternehmen.** Großunternehmen haben viele Teams, gemeinsame Plattformen und Legacy-Systeme mit unterschiedlichem Risiko. Sie haben tendenziell ein CAB, und die Kennzahlen helfen zu entscheiden, welche seiner Aufgaben bleiben sollten. Die Hauptarbeit ist konsistente Klassifizierung, ein gemeinsamer Katalog von Standard-Changes und eine Pipeline, die Prüfbelege aufzeichnet. Aggregieren Sie nach Service und Risikoklasse, nicht nach einer Rangliste der Teams.

**Behörden und öffentlicher Sektor.** Öffentliche Stellen unterliegen oft gesetzlichen Anforderungen an Genehmigung, Funktionstrennung und Aufbewahrung von Aufzeichnungen und haben womöglich beschaffungsbedingte Release-Fenster. Die Kennzahlen sollten festhalten, welche Kontrollen verpflichtend und welche lokale Gewohnheit sind, denn erstere lassen sich nicht entfernen und letztere schon. Aufgezeichnetes Peer-Review und Pipeline-Belege können die Absicht oft erfüllen, aber bestätigen Sie dies mit dem zuständigen Prüfer, bevor Sie sich darauf verlassen (siehe Thema 8.3, Kennzahlen für Compliance und Audit).

## Business Case: Motive, ROI und TCO

Das Motiv ist meist die Zeit, die Changes mit Warten verbringen. Wenn fertige Arbeit auf eine Entscheidung wartet, verzögert sich Wert, Pakete wachsen, und jedes Paket trägt mehr Risiko. Ein zweites Motiv ist Gewissheit: Führungskräfte und Prüfer wollen wissen, dass Changes kontrolliert sind, und aufgezeichnete Belege in der Pipeline sind billiger zu erzeugen und vertrauenswürdiger als eine Rekonstruktion. Ein drittes ist die Incident-Bearbeitung, denn ein vollständiger und genauer Change-Datensatz verkürzt die Suche nach einer Ursache.

Die Erhebung ist billig, wenn das Change-Werkzeug und die Pipeline Zeitstempel und Typen bereits speichern, und mäßig, wenn Sie sie integrieren müssen. Auf die Daten zu reagieren kostet mehr: Verfahren für Standard-Changes schreiben, Pipeline-Prüfungen bauen und Genehmiger und Antragsteller schulen. Erwarten Sie den größten Teil der Arbeit im ersten Quartal und danach niedrigere, stetige Kosten für Stichproben und Review.

Der Ertrag zeigt sich als weniger Wartezeit je Change, weniger Meetings, weniger Aufwand bei der Vorbereitung von Prüfbelegen und schnellere Diagnose bei Incidents. Schätzen Sie ihn mit eigenen Daten: Multiplizieren Sie die Verringerung der Genehmigungswartestunden mit der Zahl der betroffenen Changes und mit Kosten pro verzögerter Stunde, die Ihr Finanzpartner akzeptiert. Importieren Sie keine Zahlen anderer Organisationen. Die DORA-Forschung stützt die Richtung des Arguments, aber ihre Seiten geben weder Kosten noch Ertrag an, und jede Geldzahl muss aus Ihren eigenen Messungen stammen.

## Anti-Muster und Fallstricke

- **Den Anteil von Standard-Changes als Ziel behandeln.** Teams klassifizieren riskante Arbeit um, um die Zahl zu erreichen. Nutzen Sie ihn als Kontext, prüfen Sie die Klassifizierung stichprobenartig und beobachten Sie die Fehlerraten nach Typ.
- **Nur die Genehmigungsgeschwindigkeit messen.** Ein schneller Stempel sieht hervorragend aus und liefert nichts. Koppeln Sie die Durchlaufzeit mit stichprobenartiger Prüfung der Genehmigungssubstanz und mit dem Fehlerbild.
- **Nach jedem Incident Genehmigungen hinzufügen.** Jedes neue Gate bremst das System und ermutigt oft zu größeren Paketen. Schauen Sie zuerst, warum der Fehlschlag geschah, und beheben Sie die Ursache in Test, Review oder Pipeline.
- **Genehmiger oder Antragsteller ordnen.** Zählungen von Genehmigungen oder Ablehnungen je Person lehren Menschen, alles oder nichts zu genehmigen. Berichten Sie nach Service und Change-Typ.
- **Über Change-Typen mitteln.** Ein einziger Mittelwert mischt Routine und riskante Arbeit und verbirgt beides. Teilen Sie immer nach Typ auf und zeigen Sie das 85. Perzentil.
- **Changes außerhalb des Prozesses ignorieren.** Umgehung verbirgt echtes Volumen und Risiko. Gleichen Sie Pipeline-Deployments mit Change-Datensätzen ab und behandeln Sie Lücken als Systemdefekt.
- **Das Gremium aus Gewohnheit behalten.** Ein Gremium, das alles genehmigt, was es sieht, fügt Verzögerung ohne Absicherung hinzu. Überprüfen Sie jedes Jahr, was es entscheidet, was sonst niemand könnte, und richten Sie es neu aus.
- **Daten sammeln und nie entscheiden.** Ordnen Sie jede Kennzahl einem benannten Eigner und einem Review-Forum zu (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Klassifizierung und Volumen | Typen sind informell; niemand kennt die Gesamtzahl | Einige Teams zählen nach Typ mit unterschiedlichen Regeln | Eine schriftliche Klassifizierung, ein führendes System | Typmix im Trend und stichprobenartig auf Genauigkeit geprüft | Katalog der Standard-Changes mit Lieferanten geteilt und überarbeitet, wenn sich die Risikobelege ändern |
| Genehmigungsuhr und Warteschlange | Genehmigungswartezeiten werden gespürt, aber nicht gemessen | Einige Teams versehen Anträge mit Zeitstempeln | Eine Definition der Uhr, Median und Perzentil gezeigt | Alter der Warteschlange wöchentlich überprüft; Verzögerungen führen zu finanzierten Korrekturen | Genehmigungsfluss über Teams und Lieferanten gegen Fehler und Kundenergebnisse abgestimmt |
| Automatisierung der Genehmigung | Genehmigung ist ein Meeting oder eine E-Mail | Einige Pipelines zeichnen Peer-Review auf | Aufgezeichnetes Review und Prüfungen sind Standard für risikoarme Changes | Automatisierter Anteil mit Umgehungszahl und stichprobenartigen Qualitätsprüfungen verfolgt | Richtlinie in gemeinsamen Plattformkontrollen kodiert, die sich mit dem Risikobild anpassen |
| Datensätze und Nutzung | Datensätze sind dünn oder hinterher geschrieben | Datensätze existieren, unterscheiden sich aber in der Qualität | Pflichtfelder vereinbart und mit Services verknüpft | Vollständigkeit geprüft und in Incident-Reviews genutzt | Change-Daten speisen Incident-, Problem- und Prüfpraktiken in der ganzen Organisation |

## Checkliste

- [ ] Die drei Change-Typen und ihre Kriterien sind aufgeschrieben und vereinbart.
- [ ] Eine einzige Sicht abgeschlossener Changes nach Typ existiert, mit Pipeline-Deployments abgeglichen.
- [ ] Die Genehmigungsuhr hat einen schriftlichen Start, Stopp und eine Liste von Ausschlüssen.
- [ ] Die Genehmigungsdurchlaufzeit wird als Median und 85. Perzentil berichtet.
- [ ] Das Alter der Genehmigungswarteschlange ist sichtbar und wird wöchentlich überprüft.
- [ ] Mindestens ein häufiger normaler Change wurde mit dokumentiertem Verfahren in einen Standard-Change umgewandelt.
- [ ] Peer-Review und Testergebnisse sind automatisch mit Change-Datensätzen verknüpft.
- [ ] Eine vierteljährliche Stichprobe prüft Klassifizierung und Genehmigungsqualität.
- [ ] Die Umgehung der Pipeline wird gemessen und überprüft.
- [ ] Jede Kennzahl hat im Kennzahlenregister einen benannten Eigner, einen Manipulationsvektor und eine Leitplanke.
- [ ] Kein Bericht ordnet einzelne Genehmiger oder Antragsteller.

## KI-Prompts

**Einen Klassifizierungsleitfaden für die drei Change-Typen entwerfen.**

```text
I work in [type of organization] and we run [list of services]. Our change tool
is [tool], our pipeline is [pipeline tool], and our regulatory context is
[regulations or none]. Here are our ten most frequent changes: [list]. Draft a
plain-language guide for deciding whether each is a standard, normal, or
emergency change, with the criteria you used and one example of a borderline
case. Do not invent benchmark values or claim any practice meets an
audit requirement. List your assumptions and the questions I should answer
before adopting the guide.
```

**Herausfinden, wo die Genehmigungszeit verbracht wird.**

```text
Here is an extract of change records with submission, information-request, and
decision timestamps: [pasted data or description]. Our approval process is
[description]. Calculate the median and 85th percentile of approval lead time by
change type, separating time waiting for the requester from time waiting for a
decision, and suggest three questions to ask about the longest cases. Do not
invent figures that are not in the data, and do not rank individual people. List
your assumptions and any data quality problems you notice.
```

**Die Kennzahlen auf Manipulationsrisiken prüfen.**

```text
We report these change enablement metrics: [list of metrics with definitions].
The audience is [team, leadership, or governance body] and the metrics are used
for [purpose]. For each metric, list plausible ways it could be inflated,
hidden, or distorted without real improvement, and suggest a paired guardrail
measure or practice. Do not propose targets or benchmark values. List your
assumptions and which gaming risks you think matter most for [service name].
```

**Einen Wechsel von der Gremiumsgenehmigung zur Pipeline-Genehmigung planen.**

```text
Our current approval path for [change type] is [description], with [number]
approvers and a typical wait described as [description]. Our pipeline provides
[checks, tests, review tooling]. Propose a staged plan to move low-risk changes
to recorded, pipeline-based approval, including the evidence we would need to
keep, the safety signals to watch, and a stopping rule. Do not claim the plan
satisfies any regulation or standard. List your assumptions and the people I
should consult, such as [auditor, security lead, change authority].
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die verwandten Change-, Release- und Incident-Themen und die Leitplanke zu finden, die neben jeder Kennzahl der Change-Befähigung stehen sollte.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine überarbeitete Fassung dieses Themas ihre Uhren, Manipulationsvektoren und Querverweise konsistent hält.

## Wichtigste Erkenntnisse

- Kennzahlen der Change-Befähigung messen Fluss und Kontrolle von Änderung: Volumen nach Typ, das Warten auf Genehmigung und wie viel Genehmigung die Pipeline automatisch aufzeichnet.
- Teilen Sie alles nach Change-Typ auf, berichten Sie Wartezeiten als Median und 85. Perzentil und beobachten Sie die laufende Warteschlange ebenso wie die Historie.
- Routinearbeit in Standard-Changes zu überführen und Review in der Pipeline aufzuzeichnen ist der direkteste Weg, das Warten zu verkürzen, und muss neben Fehlermessgrößen gelesen werden.
- Anteil von Standard-Changes und Genehmigungsgeschwindigkeit sind leicht zu manipulieren, also prüfen Sie Klassifizierung und Genehmigungsqualität stichprobenartig und halten Sie die Zahlen von Einzel-Scorecards fern.
- Nutzen Sie die Kennzahlen, um zu entscheiden, wofür ein Change-Gremium da ist, und finanzieren Sie die Automatisierung, die leichtere Kontrolle sicher macht.

## Quellen und weiterführende Literatur

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA (Google Cloud), "Streamlining change approval" and "Software delivery performance metrics," DORA capabilities and guides, https://dora.dev/ (read the pages directly and note the date you consulted them).
3. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
6. Wikipedia, [Change management (ITSM)](https://en.wikipedia.org/wiki/Change_management_(ITSM)).
7. Wikipedia, [Separation of duties](https://en.wikipedia.org/wiki/Separation_of_duties).
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
