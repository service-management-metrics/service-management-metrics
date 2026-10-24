# Wertrealisierung und Geschäftsergebnisse

**Eine Änderung zu liefern ist nicht dasselbe, wie dass die Organisation davon profitiert. Halten Sie den erwarteten Nutzen fest, bevor Sie bauen, prüfen Sie ihn nach dem Release mit den Menschen, die gewinnen sollten, und seien Sie ehrlich darüber, wie viel einer Verbesserung Sie Ihrer Arbeit zuordnen können.**

## Überblick und Motivation

Agile Arbeitsweisen stellen funktionierende Software an erste Stelle und halten Stakeholder durchgehend in Zusammenarbeit, damit das, was ausgeliefert wird, das ist, was Menschen brauchen. Das IT-Service-Management (ITSM), wie von ITIL kodifiziert, fasst dasselbe Anliegen als Wert: Ein Service ist wertvoll, wenn er Kunden hilft, Ergebnisse zu erreichen, die sie wollen, mit Kosten und Risiken, die sie akzeptieren. Beide Traditionen treffen sich bei einer unbequemen Frage. Geht es den Menschen und der Organisation in einem Jahr besser, weil von dem, was dieses Team baute und betrieb?

Sie zu beantworten ist schwerer, als zu zählen, was geliefert wurde. Funktionen werden ausgeliefert, und niemand nutzt sie. Incidents sinken aus Gründen, die mit der Arbeit des Teams nichts zu tun haben. Eine Kosteneinsparung erscheint auf einer Folie, und das Budget, aus dem sie kam, wird anderswo ausgegeben. Dieses Thema handelt davon, diese Lücke zu schließen, und es verbindet sich direkt mit dem früh im Buch eingeführten Fokus auf Ergebnisse (siehe Thema 1.3, Ergebnisse vor Output: Auswählen, was gemessen wird).

Vier Ideen ordnen das Thema.

- **Nutzen.** Ein Nutzen ist eine messbare Verbesserung, die ein Stakeholder schätzt, etwa weniger Zeit für eine Aufgabe, weniger Fehler, mehr bediente Kunden oder geringeres Risiko. Eine Funktion ist kein Nutzen. Sie ist ein Mittel. [Benefits-Realisation-Management](https://en.wikipedia.org/wiki/Benefits_realisation_management) ist die Disziplin, Nutzen zu identifizieren, Eigner zuzuweisen und zu prüfen, dass sie eintreffen.
- **Wert-Hypothese.** Vor dem Bauen schreibt das Team auf, was sich ändern soll, für wen, um wie viel und woran man es erkennt. Das ist eine prüfbare Behauptung, und sie kann falsch sein. Eine [Theory of Change](https://en.wikipedia.org/wiki/Theory_of_change) oder ein [Logikmodell](https://en.wikipedia.org/wiki/Logic_model) legt die Kette von Aktivitäten über Outputs zu Ergebnissen dar, was hilft, die Hypothese ausdrücklich zu machen.
- **Frühindikatoren und Spätindikatoren.** Ein [Frühindikator](https://en.wikipedia.org/wiki/Leading_indicator) bewegt sich früh und sagt ein Ergebnis voraus, etwa die Übernahme eines neuen Prozesses. Ein [Spätindikator](https://en.wikipedia.org/wiki/Lagging_indicator) bestätigt das Ergebnis im Nachhinein, etwa geringere Kosten je Transaktion. Nutzen Sie beide: Frühindikatoren lassen Sie den Kurs korrigieren, und Spätindikatoren sagen Ihnen, ob es wirkte.
- **Zuordnung (Attribution).** Vieles ändert sich zugleich. Um zu sagen, dass Ihre Arbeit eine Verbesserung verursachte, brauchen Sie einen Vergleich: eine Baseline, eine Vergleichsgruppe oder ein Vorher-nachher-Design, das andere Änderungen berücksichtigt. Ohne einen sind Wertbehauptungen Geschichten. Die ehrliche Position ist oft „damit verbunden“ und nicht „dadurch verursacht“.

Zielrahmenwerke wie [Objectives and Key Results](https://en.wikipedia.org/wiki/Objectives_and_key_results) (OKRs) können Teamarbeit mit Geschäftsergebnissen verbinden, und das frühere Thema zu Messrahmenwerken behandelt sie im Detail (siehe Thema 1.7, Messrahmenwerke). Das Risiko jedes Rahmenwerks ist das, was [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) benennt: Sobald eine Nutzenzahl zum Ziel wird, finden Menschen Wege, die Zahl ohne den Nutzen zu erzeugen (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Das Thema schlägt auch eine Brücke zum Geld. Das Thema des nächsten Teils zu Kapitalrendite und Business Case nimmt die finanzielle Sicht in der Tiefe ein (siehe Thema 7.7, Kapitalrendite und Business Case). Hier liegt der Fokus auf dem Beleg der Ergebnisse, der diesen Business Case speist.

## Leitprinzipien

- **Den erwarteten Nutzen aufschreiben, bevor man baut.** Eine Behauptung, die sich später nicht prüfen lässt, kann nicht zum Lernen dienen.
- **Für jeden Nutzen einen Eigner benennen.** Der Eigner ist ein Stakeholder, der die Veränderung sehen wird, nicht das Lieferteam.
- **Bei den Nutzern messen, nach dem Release.** Lieferung ist der Beginn der Prüfung, nicht ihr Ende.
- **Frühindikatoren zum Steuern und Spätindikatoren zum Bestätigen nutzen.**
- **Ehrlich zur Zuordnung sein.** Sagen Sie, was sich sonst änderte, und vermeiden Sie Behauptungen, die die Belege nicht stützen.
- **Nutzen zählen, der nicht eintraf.** Aus einer gescheiterten Hypothese zu lernen ist ein Nutzen dieser Arbeitsweise.
- **Weiter zusammenarbeiten.** Stakeholder und Team überprüfen die Belege gemeinsam, regelmäßig.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Nutzenrealisierungsrate | Anteil der erwarteten Nutzen, die zum vereinbarten Review-Datum beobachtet wurden | Nutzen mit gemessenem Ergebnis auf oder über der vereinbarten Schwelle / im Zeitraum erwartete Nutzen mit einem Review-Datum | Prozent | Nutzenregister mit Eignern, Baselines und Review-Daten | Kontinuierliche Verbesserung; Governance des Service-Wertschöpfungssystems | Ergebnis-Review mit Stakeholdern | Vierteljährlich |
| Zeit bis zum ersten Wert | Zeit vom Arbeitsbeginn bis zum ersten messbaren Nutzen für Nutzer | Tage vom Beginn der ersten Arbeit bis zum ersten Datum, an dem sich der Nutzenindikator wie erwartet bewegte | Tage | Work-Tracker und Nutzenindikator | Service-Design; Release- und Deployment-Management | Kontinuierliche Lieferung von Wert | Je Initiative |
| Prüfquote der Hypothesen | Anteil der released Changes, deren genannte Wert-Hypothese nach dem Release geprüft wurde | Changes mit erfasster Prüfung nach dem Release / released Changes, die eine Hypothese trugen | Prozent | Hypothesenprotokoll, mit Release-Datensätzen verknüpft | Kontinuierliche Verbesserung; Change-Befähigung | Lernen aus ausgelieferter Arbeit | Monatlich |
| Anteil der Belegqualität | Anteil der behaupteten Nutzen, die eine Baseline und eine genannte Vergleichsmethode haben | Nutzenbehauptungen mit Baseline und Methode / berichtete Nutzenbehauptungen | Prozent | Review des Nutzenregisters | Messung und Berichterstattung | Ehrliche Berichterstattung über Ergebnisse | Vierteljährlich |
| Bewegung des Ergebnisindikators | Veränderung eines gewählten Ergebnisindikators gegenüber seiner Baseline und, wo verfügbar, gegenüber einem Vergleich | (Indikator nachher minus Indikator vorher), mit der Veränderung der Vergleichsgruppe daneben berichtet | Indikatoreinheiten | Produktanalytik, Servicedaten, Finanzen | Service-Level-Management; kontinuierliche Verbesserung | Fortschritt von Key Results | Monatlich |
| Stunden mit Geschäftsauswirkung | Stunden, in denen ein Geschäftsprozess wegen Serviceproblemen degradiert oder gestoppt war | Stunden degradierten oder gestoppten Prozesses, von Prozesseignern IT-Servicegründen zugeordnet | Stunden | Incident-Datensätze, verbunden mit der Bestätigung der Prozesseigner | Incident-Management; Verfügbarkeitsmanagement | Review der Geschäftsauswirkung | Monatlich |
| Anteil ergebnisgebundener Kapazität | Anteil der Teamkapazität, der in Arbeit mit einem genannten Ergebnis fließt | Kapazität auf Elementen, die mit einem erfassten Ergebnis verknüpft sind / gesamte Kapazität | Prozent | Work-Tracker mit Ergebnisfeld | Service-Wertschöpfungssystem; Portfolio-Governance | Am Produktziel ausgerichtete Arbeit | Vierteljährlich |

Definieren Sie Review-Datum und Schwelle für jeden Nutzen, wenn er erfasst wird, nicht hinterher. Die Zeit bis zum ersten Wert startet, wenn die Arbeit beginnt, und stoppt, wenn sich der Indikator erstmals um einen genannten Betrag in die erwartete Richtung bewegt, was weit nach dem Release liegen kann. Die Zuordnung der Stunden mit Geschäftsauswirkung wird mit dem Prozesseigner vereinbart, und Streitfälle werden protokolliert.

## Empfehlungen

### Vor dem Bauen: die Behauptung prüfbar machen

**1. Schreiben Sie für jede bedeutende Änderung eine Wert-Hypothese.** Nutzen Sie eine schlichte Form: „Wir glauben, dass [Änderung] [wem] helfen wird, [was zu tun], sodass [messbare Verbesserung]. Wir erkennen es daran, dass [Indikator] von [Baseline] auf [erwartet] geht, überprüft am [Datum].“ Halten Sie sie kurz genug, um auf eine Karte am Board zu passen. Teams, die die Lücken nicht füllen können, haben das Problem oft noch nicht verstanden.

**2. Erfassen Sie eine Baseline.** Ohne ein Vorher gibt es kein Nachher. Erfassen Sie den aktuellen Wert des Indikators, wie er gemessen wurde und wie stark er schwankt. Ist der Indikator verrauscht, führt eine einzelne Zahl in die Irre, erfassen Sie also eine Spanne über mehrere Wochen (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

**3. Wählen Sie Früh- und Spätindikatoren.** Für eine neue Self-Service-Anfrage ist ein Frühindikator, wie viele berechtigte Nutzer sie abschließen, und ein Spätindikator der Rückgang manueller Bearbeitungsstunden (siehe Thema 6.3, Kennzahlen für Service-Akzeptanz und Katalog). Vereinbaren Sie, welcher Indikator wann geprüft wird. Frühindikatoren erlauben eine Kurskorrektur, ohne auf das Quartalsende zu warten.

**4. Benennen Sie einen Nutzeneigner außerhalb des Lieferteams.** Der Eigner ist der Stakeholder, der die Verbesserung in seinem Bereich sehen wird und sie beurteilen kann. Das Lieferteam unterstützt die Messung, benotet aber nicht seine eigenen Hausaufgaben. Das ist kontinuierliche Zusammenarbeit in der Praxis: Die Person, die das Ergebnis wollte, bleibt eingebunden, bis es bestätigt ist.

### Nach dem Release: ehrlich prüfen

**5. Überprüfen Sie die Hypothese zum vereinbarten Datum.** Halten Sie ein kurzes Review mit dem Eigner und dem Team ab. Schauen Sie auf den Indikator, die Baseline und den Vergleich. Erfassen Sie das Ergebnis im Register: erreicht, teilweise erreicht, nicht erreicht oder nicht feststellbar. „Nicht feststellbar“ ist ein legitimes Ergebnis und ein Anstoß, die Messung zu verbessern.

**6. Nutzen Sie einen Vergleich, wo Sie können.** Der stärkste Vergleich ist ein kontrolliertes Experiment. [A/B-Tests](https://en.wikipedia.org/wiki/A/B_testing) vergleichen zwei Versionen mit zufällig zugewiesenen Nutzern und funktionieren gut für digitale Services mit genug Verkehr. Wo Randomisierung nicht möglich ist, lässt ein gestuftes Rollout Gruppen vergleichen, die die Änderung erhalten haben und die nicht. Ein [Differenz-von-Differenzen](https://en.wikipedia.org/wiki/Difference_in_differences)-Ansatz vergleicht die Veränderung einer behandelten Gruppe mit der Veränderung einer unbehandelten Gruppe im selben Zeitraum, was gemeinsame Trends entfernt. Nutzen Sie das einfachste Design, das passt.

**7. Suchen Sie nach Störfaktoren.** Ein [Störfaktor (Confounder)](https://en.wikipedia.org/wiki/Confounding) ist etwas anderes, das sich änderte und das Ergebnis erklären könnte: ein saisonales Muster, eine neue Richtlinie, ein anderer Mix von Anfragen. Listen Sie die plausiblen auf, bevor Sie einen Effekt behaupten. Können Sie sie nicht ausschließen, sagen Sie, was die Belege stützen, und nicht mehr.

**8. Berichten Sie negative und Nullergebnisse.** Half eine Änderung nicht, sagen Sie es und erfassen Sie, was gelernt wurde. Der [Survivorship Bias](https://en.wikipedia.org/wiki/Survivorship_bias), die Gewohnheit, nur auf Erfolge zu schauen, lässt Programme besser aussehen, als sie sind. Ein Register, das nur Siege enthält, wurde nicht ehrlich geführt.

### Das Programm ehrlich halten

**9. Trennen Sie Belegqualität vom Nutzen.** Verfolgen Sie den Anteil der Behauptungen, die eine Baseline und eine genannte Methode haben. Eine große Behauptung mit schwachen Belegen sollte sich auch so lesen. Ein gesundes Register zeigt bescheidene Behauptungen mit starken Belegen und einige ehrliche Einträge „nicht feststellbar“.

**10. Verknüpfen Sie Kapazität locker mit Ergebnissen.** Fragen Sie, welcher Anteil der Arbeit des Teams an ein genanntes Ergebnis gebunden ist, und schauen Sie auf den Rest. Manche Arbeit, etwa Sicherheitskorrekturen oder den Betrieb am Laufen halten, hat keinen neuen Nutzen, und das ist in Ordnung, wenn sie benannt wird. Ziel ist, Drift zu bemerken, nicht jede Aufgabe in eine Nutzengeschichte zu zwingen.

**11. Verbinden Sie mit dem Zielrahmenwerk, das Sie nutzen.** Nutzen Sie OKRs, machen Sie die Key Results zu den Ergebnisindikatoren und überprüfen Sie sie mit Stakeholdern. Halten Sie die Key Results bei Ergebnissen, nicht bei Aufgaben, und lassen Sie Raum für ambitionierte Ziele, die womöglich nicht ganz erreicht werden. Machen Sie Key Results nicht zu individuellen Zielen (siehe Thema 1.7, Messrahmenwerke).

**12. Überprüfen Sie das Portfolio ebenso wie das Projekt.** Schauen Sie einmal im Quartal über Initiativen hinweg, welche Nutzen eintrafen, welche nicht und was das Muster darüber sagt, wie das Team Arbeit schätzt und auswählt. Nutzen Sie es, um die Art zu verbessern, wie Hypothesen geschrieben werden, nicht um Teams zu ordnen.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Nutzenrealisierungsrate | Niedrige Schwellen setzen; das Review-Datum verschieben; den Nutzen nachträglich umdefinieren | Schwelle und Datum bei Genehmigung festgelegt; Anteil der Belegqualität; Eigner außerhalb des Lieferteams |
| Zeit bis zum ersten Wert | Einen frühen Indikator wählen, der sich aus dem falschen Grund bewegt; die Uhr spät starten | Indikator und Uhr im Register definiert; mit dem Nutzeneigner bestätigen |
| Prüfquote der Hypothesen | Vage Hypothesen schreiben, die immer bestehen; nur erfolgreiche Changes prüfen | Hypothesen stichprobenartig auf Prüfbarkeit untersuchen; Null- und Fehlschlagsergebnisse in das Review aufnehmen |
| Anteil der Belegqualität | Baselines nachträglich auffüllen; jeden Vergleich als Methode beschreiben | Baseline vor der Änderung datiert; Review durch jemanden außerhalb des Teams |
| Bewegung des Ergebnisindikators | Einen günstigen Zeitraum oder eine günstige Gruppe wählen; Störfaktoren ignorieren | Vorab festgelegter Zeitraum und Gruppe; Liste berücksichtigter Störfaktoren |
| Stunden mit Geschäftsauswirkung | Prozesseigner blähen Zuordnungen auf oder drücken sie; Incidents werden umklassifiziert, um Zuordnung zu vermeiden | Zuordnungsregeln aufgeschrieben und protokolliert; mit Incident- und Verfügbarkeitsdatensätzen vergleichen |
| Anteil ergebnisgebundener Kapazität | Alle Arbeit mit einem generischen Ergebnis kennzeichnen; Ergebnisse für Routinearbeit erfinden | Ergebnisliste mit Stakeholdern überprüft; Elemente stichprobenartig auf Qualität der Verknüpfung prüfen |

Ein gesunder Befund ist ein Register, in dem einige Nutzen erreicht sind, einige nicht, einige unklar, und jeder Eintrag eine Baseline, einen Eigner und eine genannte Methode hat. Einem Register einheitlichen Erfolgs sollte man mit Misstrauen begegnen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Förmliches Nutzenregister | Verantwortlichkeit, Lernen über Initiativen | Bürokratie, wenn auf jede kleine Änderung angewandt |
| Leichte Hypothese auf jeder Karte | Billig, baut die Gewohnheit auf | Leicht vage zu schreiben |
| Kontrolliertes Experiment | Starker Beleg für Ursache | Braucht Verkehr, Zeit und ein zum Service passendes Design |
| Nur Vorher-nachher | Einfach, schnell | Durch andere Änderungen verfälscht |
| Urteil der Stakeholder | Erfasst Wert, den Kennzahlen verpassen | Anfällig für Optimismus und Politik |
| Frühindikatoren | Frühe Kurskorrektur | Sagen womöglich das echte Ergebnis nicht voraus |
| Spätindikatoren | Bestätigen echte Ergebnisse | Treffen spät ein; viele Ursachen |

Die Antwort in Worten ist, das Gewicht der Belege an Größe und Risiko der Änderung anzupassen. Nutzen Sie bei kleinen Änderungen eine leichte Hypothese und ein einfaches Vorher-nachher, bei großen ein Experiment oder gestuftes Rollout. Halten Sie immer fest, was Sie erwarteten, was geschah und wie sicher Sie sind.

## Fragen für die Diskussion im Team

**1. Was haben wir im letzten Quartal ausgeliefert, und was hat sich für die Menschen geändert, denen es helfen sollte?**
Listen Sie die wichtigsten Changes auf und benennen Sie für jeden die Person, die einen Unterschied bemerken würde. Fragen Sie, was sie sagen würde. Die Moderation sollte Changes notieren, bei denen niemand antworten kann, denn sie sind Kandidaten für eine Prüfung nach dem Release. Einigen Sie sich auf einen Change, der binnen eines Monats mit seinem Eigner zu überprüfen ist.

**2. Was ist die Wert-Hypothese für unseren nächsten bedeutenden Change, und woran erkennen wir es?**
Füllen Sie das Hypothesenformular gemeinsam aus. Hinterfragen Sie vage Wörter und fehlende Baselines. Fragen Sie, welches Ergebnis das Team seine Pläne ändern ließe. Kann sich die Gruppe nicht auf eine Kennzahl einigen, ist das eine Entdeckungsaufgabe vor dem Bauen.

**3. Wer besitzt den Nutzen, und ist er im Raum?**
Prüfen Sie, dass jeder Nutzen einen Eigner außerhalb des Lieferteams hat. Fragen Sie, wie oft der Eigner die Belege sieht. Ist der Eigner das Team selbst, besprechen Sie, wer das Urteil sonst teilen sollte. Das Gespräch stützt kontinuierliche Zusammenarbeit unter Stakeholdern.

**4. Was hat sich sonst geändert, als die Zahlen besser wurden?**
Nehmen Sie eine jüngere behauptete Verbesserung und listen Sie andere Änderungen im selben Zeitraum: Richtlinie, Saisonalität, Personal, das Release eines anderen Teams. Fragen Sie, welche das Ergebnis erklären könnten. Entscheiden Sie, ob Sie die Verbesserung als durch die Änderung verursacht, damit verbunden oder unklar beschreiben.

**5. Welche unserer früheren Hypothesen erwiesen sich als falsch, und was taten wir damit?**
Bitten Sie um eine Geschichte einer verfehlten Erwartung. Kommt keine schnell, prüft das Team womöglich nicht oder spricht nicht darüber. Besprechen Sie, wie sich das Berichten eines Nullergebnisses sicher und nützlich machen lässt.

**6. Welcher Anteil unserer Kapazität ist an ein Ergebnis gebunden, und fühlt sich das richtig an?**
Gehen Sie einen Monat fertiger Arbeit durch und kennzeichnen Sie jedes Element mit einem Ergebnis oder „Service am Laufen halten“. Fragen Sie, ob die Aufteilung dem entspricht, was Führungskräfte denken. Besprechen Sie Arbeit ohne Ergebnis und ob sie weitergehen sollte.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams besitzen die Hypothese und den Messplan, und sie sollten Changes in kleinen Schritten liefern, damit Belege früh eintreffen. Sie sollten den Indikator in den Change einbauen, zum Beispiel indem sie die benötigten Ereignisse protokollieren, und den Nutzeneigner bitten zu bestätigen, was sie sehen. Teams sollten gescheiterte Hypothesen als Information begrüßen, denn frühes Lernen spart die Kosten, mehr vom Falschen zu bauen.

### Service- und Betriebsteams

Betriebsteams sehen die echte Wirkung von Changes auf Incidents, Anfragen und Kapazität. Sie halten einen großen Teil der Daten für Spätindikatoren, etwa manuelle Bearbeitungsstunden und wiederholte Kontakte, und sie sollten helfen, Hypothesen zu prüfen, ebenso wie Change aufzunehmen. Sie sollten sich melden, wenn auf dem Papier behauptete Nutzen nicht zu dem passen, was der Service Desk sieht.

### Führung und Governance

Führungskräfte wählen, ob Nutzen ein Lernwerkzeug oder ein Verkaufsgespräch sind. Sie sollten Baselines und Methoden verlangen, ehrliche Ergebnisse „nicht erreicht“ begrüßen und vermeiden, Teams an Nutzenzahlen zu halten, die gesetzt wurden, bevor die Fakten bekannt waren. Die Governance sollte das Register als Portfolio überprüfen, die Messung finanzieren und bereit sein, Arbeit zu stoppen, deren Hypothese scheiterte.

### Kunden und Nutzer

Nutzer wissen, ob eine Änderung half, und sie sind die besten Beurteiler der meisten Nutzen. Sie sollten gefragt werden, die Ergebnisse gezeigt bekommen und erfahren, wenn eine Änderung nicht hielt, was erhofft war. Ihre Kommentare sind ein Beleg aus eigenem Recht. Ein Nutzen, den die Zahlen zeigen und die Nutzer nicht spüren, verdient einen genaueren Blick.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Gruppe eines regionalen Krankenversicherers baut und betreibt ein Abrechnungsportal für Leistungserbringer. Die Zahlen unten sind illustrativ.

Die Gruppe plant, der Einreichung von Abrechnungen automatische Berechtigungsprüfungen hinzuzufügen. Die Hypothese, gemeinsam mit dem Leiter der Abrechnungsbearbeitung geschrieben, lautet: „Wir glauben, dass automatische Berechtigungsprüfungen dem Abrechnungspersonal der Leistungserbringer helfen werden, Abrechnungen gleich beim ersten Mal korrekt einzureichen, sodass zur Korrektur zurückgegebene Abrechnungen binnen drei Monaten von 18 Prozent auf 12 Prozent fallen. Wir erkennen es an der Rate zurückgegebener Abrechnungen, überprüft am 1. März.“ Die Baseline ist der Durchschnitt der letzten 12 Wochen, 18 Prozent bei einer Wochenspanne von 15 bis 21 Prozent. Der Frühindikator ist die Nutzung der Prüfung im ersten Monat. Der Leiter der Abrechnungsbearbeitung ist der Nutzeneigner.

Das Team released in kleinen Schritten, wobei die Prüfung zuerst in einer Region verfügbar ist. Nach drei Wochen beträgt die Nutzung der Prüfung in dieser Region 64 Prozent. Zum Review-Datum fallen zurückgegebene Abrechnungen in der Region mit der Prüfung auf 13 Prozent und in Regionen ohne sie auf 17 Prozent. Der Leiter der Bearbeitung weist darauf hin, dass im Zeitraum auch eine Richtlinienänderung zu einem Abrechnungscode in Kraft trat. Das Team führt sie als Störfaktor auf und entfernt Abrechnungen mit diesem Code aus beiden Gruppen, was 14 Prozent gegen 17,5 Prozent ergibt. Die Nutzenrealisierung wird als „teilweise erreicht“ erfasst: klar besser als die Baseline, knapp unter dem Ziel von 12 Prozent. Das Team schreibt ehrlich ins Register, dass der Beleg aus einem gestuften Rollout über ein Quartal stammt und der Effekt für andere Leistungserbringer abweichen kann.

Sie rollen die Prüfung dann in allen Regionen aus, mit dem Plan, in drei Monaten erneut zu prüfen, und fügen eine Aufgabe hinzu, die Fehlermeldung zu verbessern, da Kommentare von Leistungserbringern sagen, die Meldung sei unklar. Die Finanzleiterin bittet für den Vorstand um eine einzelne Zahl. Der IT-Leiter bietet die Spanne und die Methode an und lehnt es ab, eine Zahl mit mehr Genauigkeit zu nennen, als die Belege erlauben. Die Entscheidung wird festgehalten, zusammen mit dem nächsten Review-Datum.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Halten Sie den erwarteten Nutzen fest, bevor die Arbeit beginnt, und prüfen Sie ihn nach dem Release mit den Menschen, die gewinnen sollen. Zu beachten ist, dass ohne Baseline behauptete Nutzen Geschichten sind.

### KI

KI-Projekte versprechen oft große Nutzen, erfassen Sie also Baseline, erwartete Veränderung und Beleg für KI-gestützte Arbeit gesondert und koppeln Sie Produktivitätsbehauptungen mit Qualität und Kosten. Zu beachten ist, dass von einem KI-Werkzeug erzeugte Nutzenschätzungen geprüft werden sollten, da sie präzise klingen und unbegründet sein können.

### Automatisierung

Automatisieren Sie die Erfassung von Ergebnisindikatoren, die schon in Ihren Systemen stehen, und messen Sie den Review-Prozess der Nutzen am Abschluss. Zu beachten ist, dass automatisierte Dashboards mit Indikatoren das Gespräch darüber ersetzen können, ob der Nutzen eintrat.

### Analytik

Berichten Sie die Bewegung von Ergebnisindikatoren mit der Belegqualität und den Grenzen der Zuordnung. Die Entscheidung, die dies untermauert, ist, was fortzusetzen, zu ändern oder zu stoppen ist. Zu beachten ist, dass Zuordnung schwer ist; beschreiben Sie also die Unsicherheit.

## Branchenperspektive

**Startup.** Nutzen liegt nah an Umsatz und Bindung, und Lerngeschwindigkeit zählt. Schreiben Sie einzeilige Hypothesen auf Karten, prüfen Sie sie schnell und vermeiden Sie schwere Register. Nutzen Sie einfache Vergleiche und akzeptieren Sie, dass kleine Stichproben begrenzen, was Sie behaupten können.

**Kleinunternehmen.** Der Inhaber ist der Nutzeneigner, und die Wirkungen sind sichtbar. Führen Sie eine kurze Liste von Changes mit erwarteten Wirkungen und überprüfen Sie sie jedes Quartal. Vermeiden Sie, kleine Gewinne zu großen Zahlen aufzublähen, und vergleichen Sie mit den Kosten der Änderung.

**Großunternehmen.** Portfolios, Finanzierungszyklen und viele Stakeholder machen ein Nutzenregister nützlich. Halten Sie es leicht für kleine Changes und streng für große, setzen Sie Eigner in die Geschäftsbereiche und überprüfen Sie über das Portfolio. Hüten Sie sich davor, dass Zahlen mit unterschiedlichen Definitionen aggregiert werden.

**Behörden und öffentlicher Sektor.** Ergebnisse sind oft öffentliche Güter wie Zugang, Fairness und Sicherheit, die sich nicht auf Umsatz reduzieren lassen. Definieren Sie Ergebnisse mit den Menschen, denen gedient wird, nutzen Sie gemischte Belege und berichten Sie Methoden offen. Förmliche Business Cases und Nutzenreviews können verlangt sein, und ehrliche Nullergebnisse zählen für die öffentliche Rechenschaft (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind vor allem Aufmerksamkeit. Eine Hypothese zu schreiben dauert Minuten, eine Baseline eine Stunde oder einige, und ein Review ein kurzes Meeting. Experimente und gestufte Rollouts brauchen Entwurfsaufwand und etwas Werkzeug. Ein Nutzenregister kann eine Tabelle oder ein Feld im Work-Tracker sein.

Der Ertrag sind bessere Investitionsentscheidungen. Ein Team, das seine Hypothesen prüft, hört auf, Dinge zu bauen, die nicht helfen, skaliert die, die helfen, und lernt, wie gut es vorhersagt. Das spart die Kosten ungenutzter Funktionen und gescheiterter Programme. Bauen Sie den Business Case aus Ihren eigenen Daten: den Anteil der Changes, die eine Hypothese trugen, den Anteil, der geprüft wurde, und die Kosten von Arbeit, die später aufgegeben oder rückgängig gemacht wurde. Vermeiden Sie veröffentlichte Zahlen zur Misserfolgsquote von IT-Projekten, wenn Sie Quelle und Methode nicht zurückverfolgen können, denn sie variieren stark und werden oft ohne Kontext zitiert. Die finanzielle Behandlung steht im nächsten Teil (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Lieferung als Wert zählen.** Eine ausgelieferte Funktion ist ein Mittel. Prüfen Sie die Wirkung auf Menschen.
- **Hypothesen, die nicht scheitern können.** Machen Sie sie konkret, mit einer Zahl und einem Datum.
- **Die eigenen Hausaufgaben benoten.** Lassen Sie den Nutzeneigner außerhalb des Teams das Ergebnis beurteilen.
- **Aus einem Vorher-nachher auf Ursache schließen.** Listen Sie Störfaktoren auf und nutzen Sie, wo möglich, einen Vergleich.
- **Nur Siege berichten.** Erfassen Sie Null- und negative Ergebnisse. Ein Register nur mit Erfolgen ist nicht ehrlich.
- **Nutzenziele für Einzelpersonen setzen.** An Menschen gebundene Ziele laden zu aufgeblähten Behauptungen ein. Halten Sie Nutzen auf Team- und Initiativebene.
- **Übergenauigkeit.** Berichten Sie Spannen und die Methode, nicht eine einzelne Dezimalzahl.
- **Die Arbeit ohne neuen Nutzen ignorieren.** Benennen Sie sie und erfinden Sie keine Nutzengeschichte für sie.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Wert benennen | Nutzen nur in Business Cases behauptet | Hypothesen für einige Changes geschrieben | Eine kurze Hypothese, Baseline und Eigner für jeden bedeutenden Change | Hypothesen und Schwellen bei Genehmigung festgelegt; Früh- und Spätindikatoren definiert | Hypothesen über Teams und Lieferanten geteilt; Ergebnisse mit Nutzern definiert |
| Wert prüfen | Keine Prüfung nach dem Release | Gelegentliche Prüfung durch das Lieferteam | Geplantes Review mit unabhängigem Eigner | Vergleiche und Störfaktoren dokumentiert; Belegqualität verfolgt | Belege auf Portfolioebene leiten die Finanzierung; geteilte Experimente über Teams |
| Lernen | Siege gefeiert, Fehlschläge vergessen | Einige Lehren erfasst | Nullergebnisse erfasst und überprüft | Muster bei verfehlten Hypothesen verbessern Auswahl und Dimensionierung | Lernen fließt in die Planung über die Organisation und mit Partnern |

## Checkliste

- [ ] Jeder bedeutende Change hat eine schriftliche Wert-Hypothese mit Baseline, Indikator und Review-Datum.
- [ ] Jeder Nutzen hat einen Eigner außerhalb des Lieferteams.
- [ ] Früh- und Spätindikatoren sind definiert und werden verfolgt.
- [ ] Reviews finden zum vereinbarten Datum mit dem Eigner statt.
- [ ] Vergleiche oder gestufte Rollouts werden genutzt, wo machbar.
- [ ] Störfaktoren werden für jedes behauptete Ergebnis aufgelistet.
- [ ] Null- und negative Ergebnisse werden erfasst und geteilt.
- [ ] Belegqualität wird neben Nutzenbehauptungen verfolgt.
- [ ] Keine Einzelperson hat ein persönliches Nutzenziel.
- [ ] Ein vierteljährliches Portfolio-Review betrachtet Muster bei erreichten und verfehlten Hypothesen.

## KI-Prompts

**Eine Wert-Hypothese schreiben.**

```text
We plan to [describe change] for [users or stakeholders] in [type of
organization]. The problem today: [describe]. Draft a value hypothesis in the
form "We believe that [change] will help [who] to [do what] so that [measurable
improvement]. We will know by [indicator]..." Suggest one leading and one
lagging indicator, what baseline we need, and a review date logic. Do not invent
target values; leave them as placeholders for us. List your assumptions and what
we need to find out.
```

**Störfaktoren für ein behauptetes Ergebnis auflisten.**

```text
We claim that [change] improved [indicator] from [before] to [after] between
[dates]. Other things that happened in the period: [list]. List plausible
confounding factors, how each could explain the result, and what data or
comparison would help rule it out. Suggest wording that states what the
evidence supports. Do not assume a cause the data cannot support. List your
assumptions.
```

**Einen Vergleich im gestuften Rollout entwerfen.**

```text
We can release [change] to [number] groups at different times: [describe
groups and constraints]. Propose a staged rollout that lets us compare groups
with and without the change, say what indicator and period to use, what could
bias the comparison, and what we would conclude from different outcomes. Do not
invent effect sizes. List your assumptions and risks.
```

**Einen Eintrag im Nutzenregister überprüfen.**

```text
Review this benefits register entry for [initiative]: [paste entry including
claim, baseline, method, owner, and review date]. Point out missing
information, vague wording, claims the evidence does not support, and ways the
result could be gamed. Suggest a stronger wording that fits what we actually
measured. List your assumptions and questions for the owner.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Wert- oder Ergebniskennzahl zu finden, bevor Sie sie berichten.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Nutzenkennzahl seinen Manipulationsvektor, seine Leitplanke und seinen Belegstandard trägt.

## Wichtigste Erkenntnisse

- Schreiben Sie vor dem Bauen eine prüfbare Wert-Hypothese, mit Baseline, einem Eigner außerhalb des Teams und einem Review-Datum.
- Nutzen Sie Frühindikatoren zum Steuern und Spätindikatoren zum Bestätigen.
- Vergleichen Sie, wo Sie können, listen Sie Störfaktoren auf und behaupten Sie nur, was die Belege stützen.
- Erfassen Sie Null- und negative Ergebnisse; ein Register einheitlichen Erfolgs ist nicht ehrlich.
- Verfolgen Sie die Qualität der Belege neben der Größe der Behauptung.
- Halten Sie Stakeholder und Nutzer in Zusammenarbeit, bis das Ergebnis bestätigt ist.

## Quellen und weiterführende Literatur

1. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
2. Doerr, J., *Measure What Matters*, Portfolio/Penguin, 2018.
3. Kohavi, R., Tang, D., and Xu, Y., *Trustworthy Online Controlled Experiments*, Cambridge University Press, 2020.
4. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
5. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Benefits realisation management](https://en.wikipedia.org/wiki/Benefits_realisation_management).
8. Wikipedia, [Theory of change](https://en.wikipedia.org/wiki/Theory_of_change).
9. Wikipedia, [Logic model](https://en.wikipedia.org/wiki/Logic_model).
10. Wikipedia, [Leading indicator](https://en.wikipedia.org/wiki/Leading_indicator).
11. Wikipedia, [Lagging indicator](https://en.wikipedia.org/wiki/Lagging_indicator).
12. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [A/B testing](https://en.wikipedia.org/wiki/A/B_testing).
15. Wikipedia, [Difference in differences](https://en.wikipedia.org/wiki/Difference_in_differences).
16. Wikipedia, [Confounding](https://en.wikipedia.org/wiki/Confounding).
17. Wikipedia, [Survivorship bias](https://en.wikipedia.org/wiki/Survivorship_bias).
