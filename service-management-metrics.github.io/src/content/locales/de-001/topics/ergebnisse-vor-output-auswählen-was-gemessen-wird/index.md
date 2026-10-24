# Ergebnisse vor Output: Auswählen, was gemessen wird

**Eine gute Service- oder Liefer-Kennzahl beschreibt eine Veränderung im Leben eines Kunden oder in der Gesundheit eines Services. Wählen Sie Messgrößen also mit der Frage, was sich für jemanden verändert hat, und behandeln Sie Zählungen von Aktivität und Output höchstens als stützende Belege.**

## Überblick und Motivation

Die meisten Dashboards beginnen mit dem, was sich leicht zählen lässt: geschlossene Tickets, ausgerollte Changes, fertiggestellte Stories, beantwortete Anrufe. Sie sind in einem Werkzeug bereits mit Zeitstempel versehen und liegen in der Hand des Teams. Keine davon sagt, ob es jemandem besser geht.

Vier Wörter halten das auseinander. **Aktivität** ist aufgewendeter Aufwand: geleistete Stunden, abgehaltene Meetings, geführte Anrufe. **Output** ist das, was die Arbeit hervorgebracht hat: ein Release, ein gelöstes Ticket, ein veröffentlichter Artikel. **Ergebnis** (Outcome) ist die Veränderung, die der Output für jemanden ermöglicht hat: Ein Kunde erledigt eine Aufgabe in der halben Zeit, eine Klinik öffnet planmäßig, ein wiederkehrendes Problem tritt nicht mehr auf. **Wirkung** (Impact) ist der längerfristige Effekt auf die Ziele der Organisation, etwa gehaltene Kunden oder geringere Kosten der Leistungserbringung. In ITIL 4 (der 2019 von AXELOS veröffentlichten Ausgabe des Rahmenwerks, heute im Besitz von PeopleCert) ist ein Output ein materielles oder immaterielles Ergebnis einer Aktivität, und ein Outcome ist ein Resultat für einen Stakeholder, das durch einen oder mehrere Outputs ermöglicht wird.

[ITIL](https://en.wikipedia.org/wiki/ITIL) fügt einen zweiten Gedanken hinzu, der als Test für jede Kennzahl taugt: Wert wird vom Serviceanbieter und vom Servicenutzer [gemeinsam geschaffen](https://en.wikipedia.org/wiki/Co-creation) und nicht von einem an den anderen geliefert. Das folgt dem Denken hinter der [Service-Dominant Logic](https://en.wikipedia.org/wiki/Service-dominant_logic), der Marketingsicht, dass Wert in der Nutzung entsteht, wenn der Kunde die Fähigkeiten eines Anbieters auf seine eigenen Ziele anwendet. Eine Kennzahl, die vollständig auf der Anbieterseite gemessen wird, kann Wert nicht belegen. Ein Team kann jedes Ticket schließen und jedes Release pünktlich ausliefern, während Nutzer ihre Arbeit nicht leichter finden.

Die agile Sicht kommt auf anderem Weg an derselben Stelle an. Die Prinzipien hinter dem Manifest für [agile Softwareentwicklung](https://en.wikipedia.org/wiki/Agile_software_development) besagen, dass funktionierende Software das wichtigste Fortschrittsmaß ist und dass Einfachheit, die Kunst, die Menge nicht getaner Arbeit zu maximieren, wesentlich ist. Keines von beiden belohnt einen größeren Berg an Output. Beide weisen darauf hin, etwas zu liefern, das für seine Nutzer funktioniert, und nicht zu bauen, was niemand braucht.

Output- und Aktivitätskennzahlen sind nicht falsch. Sie steuern Fluss, Kapazität und Kosten, und spätere Themen nutzen sie stark (siehe Thema 2.1, Flussmaße). Der Fehler ist, sie für Wert einstehen zu lassen. Eine [Eitelkeitskennzahl](https://en.wikipedia.org/wiki/Vanity_metric) ist eine Zahl, die sich leicht berichten lässt und fast immer steigt: registrierte Nutzer insgesamt, kumuliert bearbeitete Tickets, bis heute ausgelieferte Funktionen. Sie lässt ein Team beschäftigt aussehen und sagt niemandem, was als Nächstes zu tun ist. Der Test: Könnte diese Zahl steigen, während es dem Kunden schlechter geht?

Ergebniskennzahlen sind schwerer. Sie bewegen sich langsam, hängen von Faktoren außerhalb der Kontrolle des Teams ab und sind verrauscht. Eine Änderung am Ablauf des Passwort-Zurücksetzens kann Wochen brauchen, um sich im Kontaktvolumen zu zeigen, das auch eine Marketingkampagne beeinflusst. Die Antwort ist, Ergebnisse sorgfältig zu wählen, sie mit den Outputmessgrößen zu koppeln, nach denen das Team im Alltag steuert, und ehrlich darüber zu sein, wie viel der Bewegung das Team für sich beanspruchen kann.

Ein **vorlaufender Indikator** ist eine Messgröße, die sich vor dem Resultat bewegt, das Ihnen wichtig ist, und früh beeinflusst werden kann, etwa der Anteil neuer Services mit einem getesteten Support-Runbook. Ein **nachlaufender Indikator** berichtet das Resultat im Nachhinein, etwa die Zahl der Major Incidents oder die Abwanderung von Kunden. Ökonomen nutzen dieselbe Paarung und ordnen einen [Wirtschaftsindikator](https://en.wikipedia.org/wiki/Economic_indicator) als vorlaufend, gleichlaufend oder nachlaufend ein. Teams brauchen beide: Nachlaufende Indikatoren sagen, ob Sie recht hatten, und vorlaufende Indikatoren geben Ihnen etwas, worauf Sie handeln können, solange noch Zeit ist. Ein vorlaufender Indikator ist nur eine Hypothese, bis Sie über mehrere Perioden geprüft haben, dass er sich tatsächlich vor dem Ergebnis bewegt.

Ergebnismessgrößen sind ein teilweises Mittel gegen Manipulation (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen). Eine Messgröße nahe an dem, was Kunden erleben, lässt sich schwerer verbessern, ohne ihnen zu helfen, und Distanz zum Ergebnis ist der Ort, an dem Manipulation lebt. Rahmenwerke, die bei der Auswahl helfen, werden gesondert behandelt (siehe Thema 1.7, Messrahmenwerke).

## Leitprinzipien

- **Vom Ergebnis ausgehen und rückwärts arbeiten.** Benennen Sie die Veränderung, die Sie für einen Kunden, einen Service oder die Organisation wollen, fragen Sie dann, welche Belege sie zeigen würden, und dann, welche vorlaufenden Anzeichen früher auftauchen würden.
- **Wert wird gemeinsam geschaffen, also die Nutzerseite einbeziehen.** Mindestens eine Messgröße in jeder Menge sollte von den Menschen stammen, die den Service nutzen: ihr Erfolg, Aufwand oder Erlebnis, statt allein die Aufzeichnungen des Anbieters.
- **Die Kette sichtbar halten.** Zeigen Sie Aktivität, Output, Ergebnis und Wirkung als Kette. Teams steuern nach Outputs und vorlaufenden Indikatoren und beurteilen sich an Ergebnissen.
- **Koppeln, nie ersetzen.** Eine Ergebnismessgröße erklärt, warum eine Outputmessgröße wichtig ist, und eine Outputmessgröße erklärt, was man gegen eine Ergebnismessgröße tun kann. Keine funktioniert allein.
- **Messgrößen bevorzugen, die ebenso fallen wie steigen können.** Eine Zahl, die nur wächst, ist eine Zählung und kein Signal.
- **Vorlaufende Indikatoren als Hypothesen behandeln.** Prüfen Sie, dass sie das Ergebnis vorhersagen, und lassen Sie sie fallen, wenn sie es nicht tun.
- **Ehrlich zur Zuordnung sein.** Ergebnisse haben viele Ursachen. Sagen Sie, was das Team beeinflusst und was es nur beobachtet.

## Kennzahlendefinitionen

Die fünf Kennzahlen unten sind gewählt, um eine Messmenge in Richtung Ergebnisse zu bewegen. Sie sind Beispiele für die zu verwendende Form, und spätere Themen definieren die Service- und Liefermessgrößen, die sie füllen. Die illustrativen Schwellenwerte in diesem Thema sind keine Benchmarks.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ergebnisabdeckung | Anteil der berichteten Kennzahlen, die im Kennzahlenregister mit einem schriftlichen Ergebnis für einen benannten Kunden oder Service verknüpft sind | Kennzahlen mit schriftlicher Ergebnisverknüpfung / im Zeitraum berichtete Kennzahlen. Zählt nur Kennzahlen, die in einem regelmäßigen Bericht gezeigt werden; schließt Messgrößen der Arbeitssicht aus, die ein einzelnes Team führt | Prozent | Kennzahlenregister (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen) | Messung und Berichterstattung; kontinuierliche Verbesserung | Produktziel und Lieferziel | Vierteljährlich |
| Funktionsakzeptanzrate | Anteil der berechtigten Nutzer, die eine neue oder geänderte Fähigkeit innerhalb eines festgelegten Zeitfensters nach dem Release nutzen | verschiedene berechtigte Nutzer, die die Fähigkeit innerhalb von 30 Tagen nach dem Release genutzt haben / verschiedene berechtigte Nutzer in diesem Zeitraum. Die Uhr startet bei allgemeiner Verfügbarkeit; schließt interne Testkonten und Nutzer aus, die die Fähigkeit nicht erreichen konnten | Prozent | Produktanalytik, Nutzungsprotokolle des Servicekatalogs | Servicedesign; Release-Management | Feedback aus dem Stakeholder-Review; Produktergebnis-Messgröße | Monatlich für 3 Monate nach dem Release, danach vierteljährlich |
| Rate wiederholter Kontakte | Anteil der Kontakte eines Nutzers zum selben Service innerhalb eines festgelegten Zeitfensters, nachdem ein früherer Kontakt geschlossen wurde | neue Kontakte desselben Nutzers zum selben Service innerhalb von 14 Tagen nach einem geschlossenen Kontakt / im Zeitraum geschlossene Kontakte. Die Uhr startet beim Schließen; schließt Kontakte aus, die als geplante Nachfassaktionen eröffnet wurden | Prozent | Kontakt- und Ticketverlauf des ITSM-Werkzeugs | Service Desk; Incident-Management | Entwichene Fehler; Definition of Done | Monatlich |
| Validierungsrate vorlaufender Indikatoren | Anteil der genutzten vorlaufenden Indikatoren, deren Bewegung im Überprüfungszeitraum der Bewegung des verknüpften nachlaufenden Indikators vorausging | vorlaufende Indikatoren mit bestätigtem Vorlauf vor ihrem nachlaufenden Indikator / genutzte vorlaufende Indikatoren. Vom Team in einem dokumentierten Review auf Basis von mindestens vier Perioden beurteilt; schließt Indikatoren mit weniger als vier Perioden aus | Prozent | Kennzahlenregister und Trendverlauf | Kontinuierliche Verbesserung | Retrospektiv-Maßnahmen zu Experimenten | Zweimal im Jahr |
| Abschlussrate von Nutzenprüfungen | Anteil der finanzierten Changes oder Verbesserungen, deren beabsichtigtes Ergebnis nach der vereinbarten Verzögerung an seiner Messgröße geprüft wurde | Changes mit abgeschlossener Ergebnisprüfung innerhalb von 90 Tagen nach dem geplanten Prüfdatum / Changes, deren Prüfdatum in den Zeitraum fiel. Schließt vor dem Release zurückgezogene Changes aus | Prozent | Change-Datensatz, Verbesserungsregister, Review-Notizen | Kontinuierliche Verbesserung; Change-Befähigung | Stakeholder-Review; Review des Produktinkrements | Vierteljährlich |

Ergebnisabdeckung und Abschlussrate von Nutzenprüfungen messen die Messpraxis und lassen sich leicht mit Papierarbeit erfüllen. Funktionsakzeptanzrate und Rate wiederholter Kontakte liegen näher am Kunden und sind diejenigen, die am ehesten eine Entscheidung verändern.

## Empfehlungen

### Von Ergebnissen ausgehen

**1. Schreiben Sie das Ergebnis als Satz über eine Person oder einen Service.** „Mitarbeitende können ihr Passwort selbst zurücksetzen, ohne den Service Desk anzurufen“ ist ein Ergebnis. „Das neue Identitätsportal ausrollen“ ist ein Output. Setzen Sie den Satz an den Anfang des Registereintrags der Kennzahl und wählen Sie dann die Messgröße. Können Sie den Satz nicht schreiben, sind Sie noch nicht bereit, eine Zahl zu wählen.

**2. Zeichnen Sie die Kette von der Aktivität zur Wirkung.** Skizzieren Sie für jedes Ziel vier Kästen: was das Team tut, was es hervorbringt, was sich für den Nutzer ändert und was das für die Organisation ändert. Ordnen Sie jede Kandidatenkennzahl einem Kasten zu. Eine Menge, die links voll und rechts leer ist, ist das Signal, nach Ergebnisbelegen zu suchen.

**3. Wenden Sie den Test der gemeinsamen Wertschöpfung auf jede Kennzahl an.** Fragen Sie: Wessen Sicht auf Wert zeigt dies, und taucht die Sicht des Nutzers irgendwo in der Menge auf? In ITIL-Begriffen hat eine Servicebeziehung einen Anbieter und einen Nutzer, und Wert wird in der Nutzung des Nutzers realisiert. Eine Messgröße der Reaktionszeit auf der Uhr des Anbieters braucht einen Begleiter von der Nutzerseite, etwa ob der Nutzer mit seiner Arbeit weitermachen konnte (siehe Thema 6.2, Experience Level Agreements).

**4. Verlangen Sie eine Entscheidung, keinen Bericht.** Schreiben Sie für jede Kandidatenkennzahl die Entscheidung auf, die jemand träfe, wenn sie sich bewegte. Verabschieden Sie jede Messgröße ohne angehängte Entscheidung. Das ist der schnellste Filter gegen Eitelkeitskennzahlen und verhindert, dass ein Dashboard standardmäßig wächst.

### Outputs mit Ergebnissen koppeln

**5. Wählen Sie zu jeder wichtigen Outputmessgröße eine Ergebnismessgröße.** Berichten Sie Deployments, koppeln Sie sie mit einer Messgröße dafür, was die Deployments für den Service verändert haben, etwa Change-Fehler oder nutzersichtbare Incidents (siehe Thema 2.8, DORA-Kennzahlen). Berichten Sie gelöste Tickets, koppeln Sie sie mit wiederholten Kontakten. Das Paar sollte auf derselben Seite stehen. Ein Team, das nur Output sieht, optimiert auf Output.

**6. Wählen Sie Ergebnismessgrößen, die das Team beeinflussen kann, und benennen Sie die, die es nur beobachtet.** Ein Team kann die wiederholten Kontakte seines eigenen Services und die Akzeptanz seiner eigenen Funktionen beeinflussen. Den Umsatz des Unternehmens kann es nur beobachten. Beides gehört ins Bild, doch Ziele und Verbesserungsarbeit hängen an den beeinflussten Messgrößen. Den Unterschied zu benennen verhindert Schuldzuweisung für Bewegungen, die das Team nicht hätte verursachen können.

**7. Nutzen Sie Stellvertreter offen.** Viele Ergebnisse lassen sich nicht direkt messen. Wählen Sie einen Stellvertreter (Proxy), sagen Sie, dass es einer ist, und sagen Sie, was er übersieht. Die Rate wiederholter Kontakte ist ein Proxy für „das Problem wurde wirklich gelöst“, und eine kurze Umfrage oder das Lesen offener Kommentare kann prüfen, dass sie weiterhin die Wahrheit sagt (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

### Vorlaufende und nachlaufende Paare bilden

**8. Koppeln Sie jeden nachlaufenden Indikator mit mindestens einem vorlaufenden Indikator, auf den Sie handeln können.** Major Incidents sind ein nachlaufender Indikator, und der Anteil der Services mit getesteten Wiederherstellungs-Runbooks kann ihnen vorauslaufen. Der vorlaufende Indikator gibt dem Team etwas, das es diesen Monat tun kann. Wählen Sie vorlaufende Indikatoren, an die Sie aus einem aufschreibbaren Grund glauben, und testen Sie dann den Glauben.

**9. Validieren Sie vorlaufende Indikatoren mit einem Rückblick.** Tragen Sie zweimal im Jahr jeden vorlaufenden Indikator gegen seinen nachlaufenden Partner über mindestens vier Perioden auf und fragen Sie, ob die Bewegung zuerst kam. Ist der Zusammenhang schwach, ändern oder verwerfen Sie den vorlaufenden Indikator.

**10. Nutzen Sie Service Level Objectives, wo das Ergebnis eine klare nutzersichtbare Messgröße hat.** Ein gut gewählter Service Level Indicator (SLI) ist ein vorlaufendes Signal für die Zufriedenheit der Nutzer, und ein Service Level Objective (SLO) legt fest, wie gut er sein muss (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets). Sie funktionieren am besten, wenn der Indikator aus Sicht des Nutzers gewählt wird und nicht aus Sicht der Maschine.

### Die Auswahl ehrlich halten

**11. Schließen Sie den Kreis mit Ergebnisprüfungen.** Wird ein Change oder eine Verbesserung finanziert, halten Sie das Ergebnis fest, das sie hervorbringen soll, die Messgröße und das Datum, an dem jemand hinschaut. Halten Sie die Prüfung auch dann ab, wenn die Antwort unbequem ist. Ohne Prüfungen ist Ergebnissprache Dekoration (siehe Thema 6.5, Wertrealisierung und Geschäftsergebnisse).

**12. Halten Sie Outputmessgrößen in der Arbeitssicht und sagen Sie, wofür sie da sind.** Fluss-, Kapazitäts- und Kostenmessgrößen sind die Instrumente des Teams, nicht seine Scorecard. Die Zykluszeit zeigt, wo Arbeit wartet (siehe Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz). Ohne ein Ergebnis daneben nach oben berichtet, laden sie zur Manipulation ein.

## Manipulationsvektoren und Leitplanken

Der Weg zu Ergebnissen beseitigt Manipulation nicht. Er ändert ihre Gestalt: Ergebnisse lassen sich umdefinieren, Proxies lassen sich steuern, und Reviews lassen sich auslassen.

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Ergebnisabdeckung | Für jede Kennzahl einen vagen Ergebnissatz („Service verbessern“) schreiben, damit die Verknüpfung auf dem Papier existiert | Das Register stichprobenartig prüfen: Ein Satz muss eine Person oder einen Service und eine Veränderung benennen; prüfen, dass wegen der Messgröße eine Entscheidung getroffen wurde |
| Funktionsakzeptanzrate | Eine erzwungene oder automatische Erstnutzung als Akzeptanz zählen; die Gruppe berechtigter Nutzer verkleinern; die Fähigkeit zum Standard machen, sodass sie „genutzt“ wird, ohne gewählt zu sein | Aufgabenerfolg oder Zufriedenheit unter den Nutzern der Fähigkeit; Beibehaltung der Nutzung nach 30 und 90 Tagen; offene Kommentare lesen |
| Rate wiederholter Kontakte | Nutzern sagen, sie sollen über einen anderen Kanal eine neue Anfrage stellen; den Kontakt als Duplikat eines nicht zusammenhängenden schließen; das Schließen verzögern, um einen erneuten Kontakt innerhalb des Fensters zu vermeiden | Kontakte pro Kanal für denselben Service; stichprobenartige Prüfung der Schließungsnotizen; vom Nutzer berichtete Rate „Problem gelöst“ |
| Validierungsrate vorlaufender Indikatoren | Vorlaufende Indikatoren nach einem informellen Blick für gültig erklären; Indikatoren wählen, die sich trivial mit dem Ergebnis bewegen | Schriftliches Review-Protokoll mit den aufgetragenen Daten; pro Zyklus eine Person außerhalb des Teams ein Ergebnis hinterfragen lassen |
| Abschlussrate von Nutzenprüfungen | Ein Review nur dem Namen nach abhalten oder das beabsichtigte Ergebnis nachträglich festlegen, sodass es immer erreicht wird | Das Ergebnis im Review mit der Aussage vergleichen, die bei der Finanzierung des Changes gemacht wurde; den Anteil der Reviews verfolgen, die zu einer Planänderung führten |

Ein gesunder Befund zeigt Ergebnismessgrößen, die manchmal enttäuschen, Reviews, die manchmal einen Change beenden, und vorlaufende Indikatoren, die manchmal verworfen werden. Eine Menge, in der jedes Ergebnis erreicht und jeder vorlaufende Indikator bestätigt ist, wurde wahrscheinlich darauf abgestimmt.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Output- und Aktivitätsmessgrößen | Schnell, billig und in der Hand des Teams; gut für Fluss- und Kapazitätsentscheidungen | Leicht aufzublähen; sagen nichts darüber, ob jemand profitiert hat |
| Ergebnismessgrößen | Bleiben nah an dem, was Kunden und Organisation schätzen; schwerer zu verbessern, ohne zu helfen | Langsam, verrauscht und von Faktoren außerhalb der Kontrolle des Teams beeinflusst |
| Vorlaufende Indikatoren | Geben Frühwarnung und etwas, worauf man handeln kann | Können in die Irre führen, wenn der Zusammenhang mit dem Ergebnis angenommen statt getestet ist |
| Nachlaufende Indikatoren | Berichten, was wirklich geschah | Kommen zu spät, um das Ergebnis dieser Periode zu ändern |
| Proxies für Ergebnisse | Machen schwer messbare Ergebnisse sichtbar | Können von dem abdriften, wofür sie stehen, und laden zur Surrogation ein |
| Eine kleine ergebnisgeführte Menge | Leicht zu merken und zu besprechen; bündelt Aufwand | Kann ein Problem außerhalb der gewählten Ergebnisse übersehen |
| Eine breite ausgewogene Menge | Deckt mehr vom Service ab | Verwässert Aufmerksamkeit; jede Messgröße wird weniger geprüft |

Behalten Sie eine kleine Zahl von Ergebnismessgrößen, die die ganze Gruppe aufsagen kann, stützen Sie jede mit den Output- und vorlaufenden Messgrößen, die sie erklären, und überprüfen Sie die Menge, wenn sich die Strategie ändert. Die ausgewogenen Ansätze, die mit der [Balanced Scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard) und mit [Objectives and Key Results](https://en.wikipedia.org/wiki/Objectives_and_key_results) verbunden sind, versuchen beide, die tägliche Arbeit mit den Resultaten zu verbinden, die zählen. Sie scheitern auf dieselbe Weise, wenn Key Results zu einer Liste von Outputs mit einem Prozentsatz daneben werden.

## Fragen für die Diskussion im Team

**1. Welche unserer fünf auffälligsten Kennzahlen kann steigen, während es unseren Kunden schlechter geht?**
Schreiben Sie die fünf an eine Tafel und stellen Sie die Frage zu jeder. Eine Zahl geschlossener Tickets kann zum Beispiel steigen, während auch wiederholte Kontakte steigen. Die Moderation sollte die Fälle festhalten, in denen die Antwort ja lautet, denn das sind die Eitelkeitskennzahlen. Fragen Sie zum Schluss, welche Ergebnismessgröße neben jede gehören würde.

**2. Wie sieht eine gute Woche für einen Kunden dieses Services aus, in seinen Worten?**
Fragen Sie Menschen, die mit Kunden sprechen, und vermeiden Sie das eigene Vokabular des Teams. Die Antworten werden zu Ergebnissätzen und offenbaren oft Dinge, die niemand misst, etwa dass man ein Problem nicht zweimal erklären muss. Halten Sie drei Sätze fest und fragen Sie, welche sich messen lassen, auch über einen Proxy.

**3. Welche unserer vorlaufenden Indikatoren haben wir je gegen das Resultat geprüft, das sie vorhersagen sollen?**
Wählen Sie einen Indikator und tragen Sie ihn für die letzten Perioden gegen seinen nachlaufenden Partner auf. Fragen Sie, was Sie sehen und wie sicher Sie sind. Ist der Zusammenhang schwach, besprechen Sie, wodurch er ersetzt werden soll. Behandeln Sie einen verworfenen Indikator als normales Ergebnis des Lernens und nicht als Scheitern.

**4. Wo beansprucht unser Team Verdienst für ein Ergebnis, das es nur beobachtet?**
Sehen Sie sich die Kennzahlen in Berichten an die Führung an. Welche hängen von Faktoren außerhalb der Kontrolle des Teams ab, etwa Saisonalität, einer Kampagne oder einem Lieferanten? Einigen Sie sich auf eine schlichte Art zu sagen, was das Team beeinflusst und was es beobachtet. Das bereitet das Team auf den Tag vor, an dem sich ein Ergebnis aus Gründen bewegt, die es nicht verursacht hat.

**5. Was haben wir in den letzten zwei Quartalen ausgeliefert oder geändert, und hat jemand geprüft, ob es funktioniert hat?**
Listen Sie die Changes an einer Tafel auf und markieren Sie die mit Prüfprotokoll. Fragen Sie bei den übrigen, welches Ergebnis erwartet wurde und wie man es jetzt herausfinden könnte. Widerstehen Sie der Suche nach Schuldigen. Ziel ist, die Gewohnheit zu beginnen, auch wenn die ersten Prüfungen spät kommen.

**6. Welche Outputmessgrößen sollten in unsere Arbeitssicht zurückwandern?**
Manche Messgrößen sind für das Team nützlich und in einem Bericht irreführend. Fragen Sie, welche welche sind und was jede daneben bräuchte, um in einem Führungsbericht zu bleiben. Einigen Sie sich auf eine Messgröße, die in diesem Quartal verschoben wird. Eine Messgröße zu verschieben ist ein Zeichen von Reife und kein Rückzug aus der Transparenz.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams werden von Output versucht, weil ihre Werkzeuge ihn standardmäßig berichten. Das Mittel ist, Akzeptanz- und Ergebnisbelege zum Teil der Definition of Done und des Stakeholder-Reviews zu machen. Eine Funktion, die niemand nutzt, ist eine Lektion, und das früh herauszufinden ist ein Vorteil agiler Praxis. Teams halten Flussmessgrößen in ihrer Arbeitssicht und koppeln sie mit Akzeptanz- und Fehlermessgrößen (siehe Thema 2.5, Kennzahlen für Lieferprognosen und Planung).

### Service- und Betriebsteams

Serviceteams werden an der Bearbeitung gemessen: beantwortete Anrufe, geschlossene Tickets, Zeit bis zur Lösung. Diese zählen für Planung und Kosten und sagen wenig darüber, ob das Problem des Nutzers verschwunden ist. Betriebsteams sollten wiederholte Kontakte, Wiederkehr derselben Ursache und vom Nutzer berichtete Lösung neben Geschwindigkeitsmessgrößen aufnehmen und eine steigende Zahl leichter Tickets mit Misstrauen behandeln (siehe Thema 3.1, Kennzahlen für den Service Desk). Vorlaufende Indikatoren wie die Nutzung von Wissensartikeln und getestete Runbooks geben dem Team zwischen Incidents etwas, worauf es handeln kann.

### Führung und Governance

Was Führungskräfte sehen wollen, bringt der Organisation bei, was zählt. Fragen Sie nach Ergebnissen, akzeptieren Sie, dass sie langsamer und verrauschter sind, und finanzieren Sie die Reviews, die sie prüfen. Governance-Gremien sollten nach einer kurzen, stabilen Menge von Ergebnismessgrößen suchen, jede mit benanntem Eigner und einem Protokoll der Entscheidungen, die sie untermauert hat (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen). Wer fragt „Was haben wir gelernt?“, bekommt bessere Daten als wer fragt „Warum ist das rot?“

### Kunden und Nutzer

Kunden erleben Ergebnisse unmittelbar und sehen Outputzahlen selten. Sie sind der letzte Test der Menge: Lässt der Service sie das erledigen, wofür sie gekommen sind? Kurze Umfragen, offene Kommentare und die Beobachtung echter Aufgaben sind bessere Belege als jede Messgröße auf der Anbieterseite. Kunden haben auch eine Rolle bei der gemeinsamen Wertschöpfung, das heißt: Wie gut sie informiert, befähigt und gehört werden, beeinflusst die Resultate (siehe Thema 6.3, Kennzahlen für Service-Akzeptanz und Katalog).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler betreibt ein internes Plattformteam, das etwa 40 Produktteams einen Self-Service für die Bereitstellung von Umgebungen anbietet, unterstützt von einem kleinen Service Desk. Alle Zahlen in diesem Beispiel sind illustrativ.

Der Monatsbericht zeigt 310 erfüllte Anfragen (zuvor 240), eine mediane Erfüllungszeit von 6 Stunden und 12 im Quartal ausgelieferte Funktionen. Die Führung ist zufrieden. Der Plattformleiter bemerkt, dass auch die Kontakte zum Desk wegen der Bereitstellung gestiegen sind, und bittet das Team, die Outputs gegen das erhoffte Ergebnis aufzutragen: Produktteams bekommen eine Umgebung, ohne zu warten oder um Hilfe zu bitten.

Die Ketten-Übung zeigt, dass das Team Aktivität und Output gemessen hat und kein Ergebnis. Es fügt drei hinzu. Die erste ist die Rate wiederholter Kontakte: Auf 22 Prozent der Bereitstellungskontakte folgt innerhalb von 14 Tagen ein weiterer Kontakt zum selben Service. Die zweite ist die Funktionsakzeptanzrate für die drei neuesten Funktionen, die nach 30 Tagen bei 9, 14 und 61 Prozent der berechtigten Teams liegt. Die dritte, ein vorlaufender Indikator, ist der Anteil der Anfragen, die ohne menschlichen Schritt abgeschlossen werden, derzeit 48 Prozent. Das Team vermutet, dass dieser die Rate wiederholter Kontakte senken müsste.

Es beschließt, zwei geplante Funktionen zu pausieren, die den zwei Funktionen mit geringer Akzeptanz ähneln, und das Quartal auf die häufigste Ursache wiederholter Kontakte zu verwenden, eine unklare Fehlermeldung bei überschrittenem Kontingent. Es hält das beabsichtigte Ergebnis fest, eine Rate wiederholter Kontakte unter 15 Prozent, und setzt ein Prüfdatum in 90 Tagen.

Das Manipulationsrisiko zeigt sich im zweiten Monat. Die Rate wiederholter Kontakte fällt auf 11 Prozent, was wunderbar aussieht. Eine Stichprobe von 25 geschlossenen Kontakten zeigt, dass der Service Desk begonnen hatte, Nutzer für Nachfragen an einen Chat-Kanal zu verweisen, und der Chat-Kanal wird im ITSM-Werkzeug nicht gezählt. Das Team nimmt Kontakte pro Kanal in den Bericht auf, bezieht Chat-Transkripte in die Stichprobe ein und stellt fest, dass die kombinierte Rate 17 Prozent beträgt. Das ist eine echte Verbesserung, kleiner als die erste Ablesung. Im Review berichtet der Leiter 17 Prozent, vermerkt, dass der vorlaufende Indikator im Gleichschritt von 48 auf 57 Prozent stieg, und hält fest, dass die Hypothese in zwei der vier Perioden gehalten hat, die nötig sind, um sie als validiert zu bezeichnen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Kontinuierliche Auslieferung macht es billig, kleine Änderungen auszuliefern und zu sehen, ob sich ein Nutzerergebnis bewegt hat. Eine gute Praktik ist, vor Arbeitsbeginn das beabsichtigte Ergebnis und das Signal festzuhalten, das es zeigen würde, und das Signal nach dem Release mit Stakeholdern zu prüfen. Zu beachten ist, dass häufige Releases Teams dazu verleiten, Releases als Fortschritt zu zählen, was wieder Output ist.

### KI

KI-Werkzeuge steigern Output mühelos: mehr Code, mehr Entwürfe, mehr Antworten. Die Ergebnisfrage ist, ob Nutzer besser bedient werden, koppeln Sie Outputzahlen also mit einem Ergebnis wie der Rate wiederholter Kontakte oder dem Aufgabenerfolg auf dem KI-gestützten Pfad. Zu beachten ist, dass ein Ergebnis, das sich verbessert, während die KI-Nutzung steigt, auch andere Ursachen haben kann; behaupten Sie deshalb ohne Vergleich nicht, das Werkzeug habe es verursacht.

### Automatisierung

Automatisieren Sie die Erfassung von Ergebnissignalen, die bereits existieren, etwa wiederholte Kontakte, Abbrüche oder die Zeit bis zur ersten nützlichen Antwort. Die Automatisierung der Arbeit selbst sollte daran gemessen werden, was sie freisetzt und was sie kaputt macht. Zu beachten ist, dass eine häufig laufende automatisierte Aufgabe produktiv aussieht, auch wenn ihr Resultat nie verwendet wird.

### Analytik

Ergebnisdaten sind meist langsamer und verrauschter als Outputdaten. Steuern Sie mit vorlaufenden Indikatoren und validieren Sie sie von Zeit zu Zeit gegen das langsamere Ergebnis. Zu beachten ist, dass eine Korrelation zwischen einem Output und einem Ergebnis in den Daten des letzten Jahres nicht bedeutet, dass der Output es weiter vorhersagen wird. Im Sinne von ITIL 5 macht der erklärte Fokus des Eigentümers auf messbare Ergebnisse dieses Thema zur Grundlage für Thema 1.8, ITIL 5: Messung und Wertergebnisse.

## Branchenperspektive

**Startup.** Ergebnisse sind greifbar nah: Gründer können mit Kunden sprechen und sehen, ob sie bleiben. Das Risiko ist, nur das Wachstum an Nutzern und Funktionen zu messen, die Eitelkeitskennzahlen sind, bis Bindung und Aufgabenerfolg sichtbar werden. Wählen Sie eine Ergebnismessgröße, die Kunden wiedererkennen würden, und prüfen Sie sie wöchentlich.

**Kleinunternehmen.** Die Zahlen sind zu klein für Statistik, bevorzugen Sie also direkte Gespräche, eine Handvoll verfolgter Fälle und eine kurze Liste von Proxies. Seien Sie vorsichtig bei Anbieter-Dashboards, die ihre eigene Aktivität berichten, als wäre sie Ihr Ergebnis.

**Großunternehmen.** Größe lädt zu Output-Berichterstattung ein, weil Outputs über viele Teams vergleichbar sind und Ergebnisse nicht. Widerstehen Sie dem Aufzwingen einer Ergebnisdefinition auf unähnliche Services. Einigen Sie sich auf eine kleine Menge gemeinsamer Ergebnissätze, lassen Sie jeden Service seine Messgrößen wählen und halten Sie das Register aktuell.

**Behörden und öffentlicher Sektor.** Gesetzliche Pflichten, Förderregeln und Servicelevel legen manche Messgrößen im Voraus fest, oft Outputs wie bearbeitete Fälle. Erfüllen Sie sie und fügen Sie Ergebnismessgrößen für Bürgerinnen, Bürger und Mitarbeitende daneben hinzu, etwa ob jemand die Hilfe bekommen hat, wegen der er kam. Öffentliche Berichterstattung macht ehrliche Ergebnisdaten wertvoller und sensibler, einigen Sie sich also im Voraus darauf, wie korrigierte Zahlen erklärt werden (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten der Verlagerung zu Ergebnissen sind überwiegend Aufwand und Geduld: Ergebnissätze schreiben, einige Messgrößen wie eine kurze Umfrage oder ein Akzeptanzereignis hinzufügen und Ergebnisprüfungen abhalten. Die Werkzeugkosten sind bescheiden, da sich die meisten Proxies aus bereits erhobenen Daten bauen lassen. Die größeren Kosten sind Verzögerung, denn Ergebnisdaten kommen langsam, und Führungskräfte müssen darauf warten.

Der Ertrag kommt aus besseren Entscheidungen darüber, wo Geld ausgegeben wird. Arbeit, die niemand nutzt, ist teuer, ebenso die Verbesserung einer Bearbeitungsmessgröße, während die zugrunde liegende Ursache wiederholter Kontakte bestehen bleibt. Zu erwarten sind weniger gebaute und ungenutzt gelassene Funktionen, mehr Aufmerksamkeit für wiederkehrende Ursachen und eine stärkere Geschichte für die Finanzierung. Versprechen Sie keinen Prozentsatz. Messen Sie eigene Baselines, etwa die Akzeptanz jüngster Releases und wiederholte Kontakte, und vergleichen Sie nach einigen Quartalen (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Zählen, was leicht ist.** Ticket- und Deployment-Zahlen stecken in jedem Werkzeug, was sie zum Standard macht. Fügen Sie für jeden Service mindestens eine Ergebnismessgröße hinzu, bevor Sie eine weitere Outputzählung ergänzen.
- **Ergebnistheater.** Für jede Kennzahl einen Ergebnissatz schreiben, ohne ihn je zu prüfen. Überprüfen Sie eine Stichprobe des Registers und fragen Sie, welche Entscheidung jede Messgröße untermauert hat.
- **Ungetestete vorlaufende Indikatoren.** Ein plausibles Signal als Beweis behandeln. Tragen Sie es mindestens zweimal im Jahr gegen das nachlaufende Resultat auf und verwerfen Sie die, die nicht vorauslaufen.
- **Ergebnisse als persönliche Ziele.** Eine Ergebnismessgröße einer einzelnen Person zuzuweisen lädt zu dem Verhalten ein, das in Thema 1.2 beschrieben ist. Hängen Sie Ergebnisse an Teams und Services.
- **Nur die Anbieterseite messen.** Eine Menge aus internen Uhren und Zählungen übersieht, was Kunden spüren. Nehmen Sie für jeden Service eine Messgröße von der Nutzerseite auf.
- **Nie prüfen.** Changes auf versprochenen Nutzen hin finanzieren und ihn nie kontrollieren. Setzen Sie bei der Genehmigung ein Prüfdatum in den Change-Datensatz.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Messgrößen wählen | Zählungen, die in Werkzeugen verfügbar sind | Einige Teams schreiben Ergebnissätze | Jede berichtete Kennzahl hat ein schriftliches Ergebnis und eine Entscheidung, die sie untermauert | Ergebnis- und Outputmengen werden jedes Quartal zusammen überprüft | Ergebnissätze über Teams, Lieferanten und Kunden abgestimmt und bei Strategiewechsel überarbeitet |
| Vorlaufende und nachlaufende Indikatoren | Nur nachlaufende Resultate, spät berichtet | Einige vorlaufende Indikatoren nach Intuition gewählt | Vorlaufende und nachlaufende Indikatoren gekoppelt und im Register erfasst | Vorlaufende Indikatoren zweimal im Jahr gegen Resultate validiert | Indikatoren mit Lieferanten und Kunden geteilt; die Menge entwickelt sich mit den Belegen |
| Ergebnisprüfungen | Keine Prüfung, ob Changes funktioniert haben | Gelegentliche Prüfungen nach großen Changes | Prüfdatum für jeden finanzierten Change erfasst | Prüfungen abgeschlossen, Resultate fließen in den nächsten Plan | Prüfungen sind Routine, teamübergreifend und beziehen Kundeneingaben ein |
| Belege von der Nutzerseite | Anekdoten | Umfrage für einige Services | Eine Messgröße von der Nutzerseite für jeden Service | Nutzerbelege im Trend und neben operativen Daten gelesen | Kunden helfen, Ergebnismessgrößen zu definieren und zu deuten |

## Checkliste

- [ ] Jeder Service hat mindestens einen Ergebnissatz, der eine Person oder einen Service und eine Veränderung benennt.
- [ ] Jede berichtete Kennzahl ist in der Kette von der Aktivität zur Wirkung verortet.
- [ ] Jede Kennzahl hat eine benannte Entscheidung, die sie untermauert; solche ohne werden verabschiedet.
- [ ] Neben jeder Outputmessgröße in einem Bericht steht eine Ergebnismessgröße.
- [ ] Jeder Service hat mindestens eine Messgröße von der Nutzerseite.
- [ ] Jeder nachlaufende Indikator hat einen vorlaufenden Indikator, mit schriftlicher Begründung für den Zusammenhang.
- [ ] Vorlaufende Indikatoren werden mindestens zweimal im Jahr gegen Resultate geprüft.
- [ ] Proxies sind als Proxies gekennzeichnet, mit dem, was sie übersehen.
- [ ] Jeder finanzierte Change hat ein beabsichtigtes Ergebnis, eine Messgröße und ein Prüfdatum.
- [ ] Ergebnismessgrößen hängen an Teams und Services, nie an Einzelpersonen.

## KI-Prompts

**Eine Outputkennzahl in eine ergebnisgeführte Menge verwandeln.**

```text
Our team is [team name], which provides [service or product] to [customers or
users]. We currently report [list of output or activity metrics]. We want to
move toward outcomes. For each metric, suggest an outcome sentence about a
customer or service that it might support, and propose one outcome measure and
one leading indicator we could consider. For each suggestion, say what the
measure would miss and how it could be gamed. Do not invent benchmark values
or sources. List your assumptions and the facts you need from me.
```

**Prüfen, ob ein vorlaufender Indikator glaubwürdig ist.**

```text
We use [leading indicator] as a leading indicator for [lagging outcome measure].
Here are [number] periods of data for both, pasted below, with notes on
anything that changed during that time: [data and notes]. Describe whether the
leading indicator appears to move before the lagging one, and what other
explanations are consistent with the data. Do not claim causation. List your
assumptions, the limits of this much data, and what additional data would help.
```

**Eine Ergebnisprüfung für einen jüngsten Change entwerfen.**

```text
We made this change: [description], approved on [date], with the intended
outcome [outcome sentence] and measure [measure]. Current data: [data]. Draft
an outcome review agenda and a short summary structure that compares the
intended outcome with what we see, separates what the team influenced from what
it only observed, and lists questions for users. Do not judge success beyond
what the data supports. List your assumptions and any data gaps.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema und die begleitende Ergebnismessgröße für eine Outputkennzahl zu finden, die Sie berichten wollen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein neues Kennzahlenthema seine Outputmessgrößen mit Ergebnissen und Leitplanken koppelt.

## Wichtigste Erkenntnisse

- Aktivität, Output, Ergebnis und Wirkung sind verschiedene Dinge, und ein Dashboard der ersten beiden kann Wert nicht zeigen.
- In ITIL wird Wert gemeinsam mit dem Nutzer geschaffen, also braucht jede Menge eine Messgröße von der Nutzerseite.
- Koppeln Sie Outputs mit Ergebnissen und nachlaufende Indikatoren mit vorlaufenden, die Sie getestet haben.
- Seien Sie klar darüber, was das Team beeinflusst und was es nur beobachtet.
- Überprüfen Sie finanzierte Changes an ihren beabsichtigten Ergebnissen und lassen Sie die Resultate den Plan ändern.
- Ergebnismessgrößen verringern Manipulation, ohne sie zu beenden, also braucht jede weiterhin eine Leitplanke.

## Quellen und weiterführende Literatur

1. Seiden, J., *Outcomes Over Output: Why Customer Behavior Is the Key Metric for Business Success*, Sense & Respond Press, 2019.
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
3. Vargo, S. L., and Lusch, R. F., "Evolving to a New Dominant Logic for Marketing," *Journal of Marketing*, 68(1), 2004.
4. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January to February 1992.
5. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
9. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Co-creation](https://en.wikipedia.org/wiki/Co-creation).
12. Wikipedia, [Service-dominant logic](https://en.wikipedia.org/wiki/Service-dominant_logic).
13. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
14. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
15. Wikipedia, [Economic indicator](https://en.wikipedia.org/wiki/Economic_indicator).
16. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
17. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
