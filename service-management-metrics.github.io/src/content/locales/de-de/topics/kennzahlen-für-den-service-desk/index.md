# Kennzahlen für den Service Desk

**Messen Sie den Service Desk daran, wie gut er Menschen hilft, wieder an die Arbeit zu kommen, und wie viel er der übrigen Organisation beibringt, denn Zählungen von Anrufen und Minuten am Telefon belohnen Geschwindigkeit und Menge auf Kosten von beidem.**

## Überblick und Motivation

Für die meisten Nutzer ist der Service Desk der Service. Sie begegnen selten den Ingenieuren oder sehen die Pipeline, sie begegnen dem, der antwortet, wenn etwas schiefgeht. Ein [Help Desk](https://en.wikipedia.org/wiki/Help_desk) ist die Abteilung oder Person, die Unterstützung und Auskunft gibt, meist zu Computerproblemen. Im Sprachgebrauch des [IT-Service-Managements (ITSM)](https://en.wikipedia.org/wiki/IT_service_management) ist der Service Desk die einzige Anlaufstelle zwischen Anbieter und Nutzern, die sowohl Incidents (ungeplante Störungen oder mögliche Störungen eines Services) als auch Serviceanfragen (Routineanfragen nach etwas, das der Service normalerweise bietet) bearbeitet. In [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 steht die Praktik Service Desk neben Incident-Management und Serviceanfragen-Management, und sie wird durch Zweck und Ergebnisse beschrieben, nicht durch eine feste Liste von Messgrößen. Dieses Thema bietet daher praktische Anleitung, keine Rahmenwerksanforderung.

Die Messgrößen, die um den Desk herum gewachsen sind, stammen weitgehend aus der [Call-Center](https://en.wikipedia.org/wiki/Call_centre)-Tradition: wie viele Kontakte eintrafen, wie lange Menschen warteten, wie viele aufgaben, wie lange jeder Kontakt dauerte und wie viele beim ersten Versuch gelöst wurden. Diese Messgrößen sind nützlich und billig, und sie lassen sich im Buch auch am leichtesten zu Zielen machen, die dem Service schaden. Kurze Anrufe wirken effizient, bis derselbe Nutzer dreimal zurückruft. Niedrige Abbruchraten wirken fürsorglich, bis Agenten schnell antworten und nichts lösen. Aufgabe des Themas ist, jede Messgröße zu beschreiben, ihre Uhren zu benennen und zu sagen, was sie belohnt und was sie verbirgt.

Die agile Sicht fügt einen zweiten Zweck hinzu. Jeder Kontakt ist ein Beleg dafür, was Nutzer verwirrend finden, was kaputtgeht und was sie sich vom Service wünschen. Ein agiles Team, das oft ausliefert, braucht diesen Beleg schnell und auf der Ebene eines Services, nicht eines Tickets. Der Desk wird also doppelt gemessen: als Betrieb, der Menschen gut antwortet, und als Sensor, der den Backlog speist. Das Volumen ist die Brücke zwischen beiden. Eine steigende Zahl kann Wachstum bedeuten, ein schlechtes Release, einen fehlenden Artikel oder einen neuen Kanal, und die Kennzahl allein kann nicht sagen, was (siehe Thema 3.2, Incident-Aufkommen und Priorität, dazu, wie Zählungen nach Kategorie und Priorität zu lesen sind).

Schlüsselbegriffe: [Lösung beim Erstkontakt](https://en.wikipedia.org/wiki/First_call_resolution) ist der Anteil der Kontakte, die beim ersten Kontakt gelöst werden; ein [Anrufverteiler (ACD)](https://en.wikipedia.org/wiki/Automatic_call_distributor) leitet eingehende Anrufe an verfügbares Personal; ein [Service Level Agreement (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) ist eine Zusage zwischen Anbieter und Kunde; ein [Perzentil](https://en.wikipedia.org/wiki/Percentile) ist der Wert, unterhalb dessen ein gegebener Anteil der Beobachtungen liegt, das 85. Perzentil der Bearbeitungszeit also die Dauer, innerhalb der 85 Prozent der Kontakte enden; und [Kundenzufriedenheit](https://en.wikipedia.org/wiki/Customer_satisfaction) (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit) ist, wie gut ein Service die Erwartungen der Nutzer erfüllt.

Die Begriffe „Kontakt“ und „Ticket“ sind nicht dasselbe. Ein Kontakt ist ein Versuch einer Person, den Desk über einen Kanal wie Telefon, Chat, E-Mail, Portal, persönlichen Besuch oder Messaging zu erreichen. Ein Ticket (auch Datensatz genannt) ist das, was das ITSM-Werkzeug anlegt, um die Arbeit zu verfolgen. Ein Ticket kann viele Kontakte umfassen, und manche Kontakte, etwa ein auf der Stelle beantwortetes Passwort-Zurücksetzen, legen ein Ticket womöglich nur für die Aufzeichnung an. Beides zu vermischen ist die häufigste Quelle von Verwirrung in der Desk-Berichterstattung, daher zählen die Definitionen unten sie getrennt.

## Leitprinzipien

- **Kontakte und Tickets getrennt zählen und beide definieren.** Ein Kontakt ist ein Versuch, den Desk zu erreichen, ein Ticket ein Datensatz der Arbeit. Berichte, die beides mischen, lassen sich nicht abstimmen.
- **Zeiten als Verteilungen berichten.** Zeigen Sie Median und ein hohes Perzentil wie das 85. oder 95., nie nur einen Durchschnitt, denn einige sehr lange oder sehr kurze Kontakte verzerren den Mittelwert.
- **Jede Geschwindigkeitsmessgröße mit einer Ergebnismessgröße koppeln.** Antwortgeschwindigkeit, Abbruch und Bearbeitungszeit beschreiben Aufwand. Lösung und erneuter Kontakt beschreiben, ob dem Nutzer geholfen wurde.
- **Das Volumen an der Nutzung normalisieren.** Eine Zahl, die steigt, weil die Nutzerbasis gewachsen ist, ist eine andere Geschichte als eine, die je Nutzer steigt.
- **Kanäle und Services messen, nicht Menschen.** Diese Kennzahlen beschreiben einen Desk, eine Warteschlange, einen Service und einen Kanal. Sie werden nie genutzt, um einzelne Agenten zu ordnen oder zu disziplinieren.
- **Den Desk als Sensor behandeln.** Jede Kennzahl sollte zu einer Frage an Lieferteams führen, was vorgelagert zu beheben, zu dokumentieren oder zu automatisieren ist.

## Kennzahlendefinitionen

Die Tabelle listet sieben Messgrößen, die die meisten Service Desks aus ihrer Telefonieplattform und ihrem ITSM-Werkzeug erheben können. Schwellenwerte und Ziele setzt und schreibt jeder Desk selbst auf; dieses Thema nennt keine Benchmarkwerte.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kontaktvolumen | Zahl der vom Desk erhaltenen Kontakte, nach Kanal und Zeitraum | Anzahl der im Zeitraum angelegten Kontakte, nach Kanal; interne Testkontakte, doppelte automatische E-Mail-Antworten und vom Desk getätigte ausgehende Anrufe sind ausgeschlossen | Anzahl | Protokoll der Telefonie- oder Chat-Plattform; Kontaktdatensätze des ITSM-Werkzeugs | Service Desk | Nachfragesignal im Backlog-Refinement | Wöchentlich |
| Kontaktrate | Kontakte im Verhältnis zur Größe der bedienten Population, damit Wachstum nicht mit einem Problem verwechselt wird | Kontakte im Zeitraum / aktive Nutzer oder aktive Konten im Zeitraum, skaliert auf 100 Nutzer; die Nutzerzahl stammt aus demselben Zeitraum, und die Definition von „aktiv“ ist aufgeschrieben | Kontakte pro 100 Nutzer | Kontaktdatensätze und das Identitäts- oder Lizenzsystem | Service Desk; Service-Level-Management | Nutzungsbereinigte Nachfrage im Produkt-Review | Monatlich |
| Zeit bis zur Antwort | Wartezeit vom Moment, in dem ein Kontakt in die Warteschlange eintritt, bis ein Mensch oder eine automatische Antwort eingreift | Die Uhr startet, wenn der Kontakt eingereiht wird, und stoppt bei der ersten menschlichen Reaktion; abgebrochene Kontakte sind von dieser Messgröße ausgeschlossen und in der Abbruchrate gezählt; Median und 85. Perzentil berichten | Sekunden (Telefon, Chat); Minuten oder Stunden (E-Mail, Portal) | Telefonieplattform; Chat-Plattform; Zeitstempel des ITSM-Werkzeugs | Service Desk | Arbeitsvereinbarung zur Reaktionsfähigkeit | Täglich in Review-Fenstern, wöchentlich im Trend |
| Abbruchrate | Anteil der Kontakte, die durch den Nutzer enden, bevor jemand eingreift | Vom Nutzer vor der ersten menschlichen Reaktion beendete Kontakte / eingereihte Kontakte; innerhalb einer kurzen Karenzzeit (in der Definition genannt, zum Beispiel fünf Sekunden) beendete Kontakte sind als versehentlich ausgeschlossen | Prozent | Telefonieplattform; Chat-Plattform | Service Desk | Verzögerungskosten-Signal im Service-Review | Wöchentlich |
| Bearbeitungszeit | Zeit, die der Desk für einen Kontakt aufwendet | Die Uhr startet, wenn eine Person eingreift, und stoppt, wenn sie den Kontakt beendet, einschließlich der Dokumentationsarbeit nach dem Kontakt; Warten auf den Nutzer ist nur eingeschlossen, wenn die Definition es sagt; Median und 85. Perzentil berichten, nach Kontakttyp aufgeteilt | Minuten | Telefonieplattform; Chat-Plattform; Arbeitsprotokoll des ITSM-Werkzeugs | Service Desk; Incident-Management | Aufwandssignal im Refinement und in der Kapazitätsplanung | Wöchentlich |
| Rate der Lösung beim Erstkontakt | Anteil der Kontakte, die beim ersten Kontakt ohne späteren Kontakt zur selben Angelegenheit gelöst werden | Während des Kontakts gelöste Kontakte, auf die innerhalb des Wiederkontaktfensters kein erneuter Kontakt desselben Nutzers zur selben Angelegenheit folgt / berechtigte Kontakte; Anrufe, bei denen nur eine Weiterleitung nötig ist, und Anrufe, die der Desk nicht lösen soll, sind ausgeschlossen | Prozent | Lösungs- und Verknüpfungsfelder des ITSM-Werkzeugs; Nutzerbestätigung, wo erhoben | Service Desk; Incident-Management | Definition-of-Done-Prüfung, beim ersten Berühren gelöst | Monatlich |
| Wiederkontaktrate | Anteil gelöster Kontakte, auf die ein weiterer Kontakt zur selben Angelegenheit folgt | Kontakte, auf die innerhalb des Wiederkontaktfensters (zum Beispiel sieben Tage, in der Definition festgelegt) ein weiterer Kontakt desselben Nutzers zum selben Service oder Problem folgt / im früheren Zeitraum gelöste Kontakte; Kontakte zu einem neuen Problem sind ausgeschlossen | Prozent | Verknüpfungs- und Wiedereröffnungsverlauf des ITSM-Werkzeugs; Kontaktdatensätze | Service Desk; Incident-Management | Rate entwichener Fehler | Monatlich |

Die Lösung beim Erstkontakt hat mehr als eine vertretbare Definition, die Definition ist also Teil der Kennzahl. Manche Desks zählen einen Kontakt als gelöst, wenn der Agent das Ticket während des Anrufs schließt. Andere zählen nur, wenn der Nutzer nicht innerhalb eines Fensters zurückkommt. Die zweite ist schwerer zu erheben und schwerer zu manipulieren, und sie ist die hier verwendete. Nennen Sie das Fenster, nennen Sie, was als „dieselbe Angelegenheit“ zählt, und wenden Sie beides in jedem Zeitraum gleich an.

## Empfehlungen

### Kontakte von Tickets von Anfang an trennen

**Geben Sie Kontakten und Tickets eigene Definitionen, Kennungen und Zählungen.** Ein Kontakt ist ein Datensatz eines Versuchs, den Desk zu erreichen, und ein Ticket ein Datensatz der Arbeit. Verknüpfen Sie sie im Werkzeug, damit ein erneuter Kontakt zur selben Angelegenheit sichtbar ist. Berichte, die beides mischen, liefern eine Volumenzahl, die sich niemand mit der Telefonieplattform abstimmen kann.

### Volumen nach Kanal, Kategorie und normalisierter Rate berichten

**Zeigen Sie Gesamtvolumen, Volumen nach Kanal, Volumen nach Kategorie und Kontaktrate pro 100 Nutzer.** Summen allein verwechseln Wachstum mit Ärger. Ein Rückgang des Telefonvolumens kann eine Verlagerung in den Chat sein, und ein Anstieg der Portalkontakte kann ein bewusster Erfolg des Self-Service sein. Tragen Sie die Reihe über mindestens ein Jahr auf, damit Saisonalität wie Semesterbeginn und Geschäftsjahresende sichtbar wird.

### Für jede Zeitmessgröße Verteilungen nutzen

**Berichten Sie Median und ein hohes Perzentil für Zeit bis zur Antwort und Bearbeitungszeit.** Der Durchschnitt einer schiefen Verteilung beschreibt fast niemandes Erleben. Der Median zeigt den typischen Kontakt, und das 85. oder 95. Perzentil zeigt, wie schlimm der langsame Auslauf ist. Sagen Sie, auf wie vielen Kontakten die Zahl beruht, und kennzeichnen Sie die Ablesung als unzuverlässig, wenn eine Warteschlange im Zeitraum nur eine Handvoll Kontakte bearbeitet (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

### Abbruch als Signal für Nachfrage und Besetzung behandeln

**Lesen Sie den Abbruch zusammen mit der Zeit bis zur Antwort und den Ankunftsmustern.** Menschen brechen ab, wenn das Warten länger ist, als sie erwarten, die Rate steigt also mit der Wartezeit, und die Wartezeit steigt, wenn die Ankünfte die Kapazität übersteigen. Die [Warteschlangentheorie](https://en.wikipedia.org/wiki/Queueing_theory) erklärt, warum die Wartezeit stark wächst, wenn sich eine Warteschlange der vollen Auslastung nähert, weshalb ein zu nahe 100 Prozent beschäftigter Desk immer lange Wartezeiten und hohen Abbruch hat. Besetzen Sie nach Ankunftsmustern je Stunde und Tag statt nach einem Monatsdurchschnitt und zeigen Sie den Abbruch nach Tageszeit (siehe Thema 2.3, Laufende Arbeit und Warteschlangentheorie).

### Die Lösung beim Erstkontakt sorgfältig definieren und dann von der Seite des Nutzers messen

**Verwenden Sie eine auf Wiederkontakt beruhende Definition und bestätigen Sie sie mit einer kurzen Frage an Nutzer.** Nur Kontakte zu zählen, die nicht innerhalb eines genannten Fensters zurückkehren, ist schwerer aufzublähen als eine beim Schließen vom Agenten gesetzte Markierung. Fügen Sie eine Ein-Frage-Prüfung hinzu, etwa „Wurde Ihr Anliegen gelöst?“, und vergleichen Sie sie mit der Wiederkontaktzahl. Widersprechen sich beide, ist die Antwort des Nutzers der bessere Führer, und die Lücke zeigt, wo das Schließen verfrüht ist.

### Bearbeitungszeit für die Planung nutzen, nicht für Ziele

**Behandeln Sie die Bearbeitungszeit als Kapazitätseingabe und Diagnose und setzen Sie nie ein Ziel, das Agenten schlagen sollen.** Ein Ziel für die Bearbeitungszeit bezahlt Eile, frühe Weiterleitungen und dünne Dokumentation. Nutzen Sie die Verteilung nach Kontakttyp, um die Besetzung zu planen und Kontakte zu finden, die weit länger dauern als ähnliche, was oft auf einen fehlenden Artikel, ein unhandliches Werkzeug oder einen unklaren Prozess hinweist. Zielen Sie auf die Systemursachen, nicht auf die Agenten.

### Desk-Kennzahlen an Lieferarbeit binden

**Überprüfen Sie die häufigsten Kontaktkategorien mit den Teams, denen die Services gehören.** Nehmen Sie jeden Monat die fünf Kategorien, die die meisten Kontakte pro 100 Nutzer erzeugt haben, und fragen Sie, welche vorgelagerte Änderung sie beseitigen würde: eine Korrektur, ein Artikel, eine bessere Fehlermeldung oder ein Self-Service-Weg. Halten Sie die Antworten im Backlog des zuständigen Teams fest. So werden die Zahlen des Desks zu Verbesserungsarbeit, und es ist die klarste agile Nutzung der Daten (siehe Thema 3.6, Kennzahlen für Wissensmanagement, und Thema 3.7, Kennzahlen für Self-Service und Automatisierung).

### Jeden Kanal in dieselben Definitionen einbeziehen

**Wenden Sie dieselben Uhren- und Zählregeln auf Telefon, Chat, E-Mail, Portal, persönlichen Besuch und Messaging an.** Asynchrone Kanäle haben keine Live-Warteschlange, daher bedeutet die Zeit bis zur Antwort in jedem etwas anderes. Definieren Sie die Uhr je Kanal und berichten Sie jeden gesondert, bevor Sie kombinieren. Ein Desk, der nur seinen besten Kanal veröffentlicht, verbirgt das Erleben aller anderen.

### Die Kennzahlen mit dem Erleben der Nutzer verbinden

**Koppeln Sie operative Messgrößen mit einer Zufriedenheitsfrage nach dem Kontakt und einer Freitext-Aufforderung.** Eine schnelle Antwort auf einen unhöflichen oder nutzlosen Kontakt ist ein schlechtes Ergebnis, und die Uhren sehen es nicht. Zeigen Sie die Rücklaufquote und die Zusammensetzung der Antwortenden neben dem Wert, denn nur ein selbst ausgewählter Teil der Nutzer antwortet (siehe Thema 1.5, Datenquellen und Instrumentierung). Lesen Sie die Kommentare mit den Menschen, die die Kontakte beantworten, im Teamrahmen.

### Die Kennzahlen auf Team- und Warteschlangenebene halten

**Berichten Sie nach Warteschlange, Kanal, Service und Team und halten Sie Daten auf Agentenebene für Coaching-Gespräche, an denen der Agent teilnimmt.** Agenten nach Bearbeitungszeit oder Lösungsrate zu ordnen treibt das Herauspicken leichter Kontakte und das Meiden schwerer. Es beschädigt auch das Vertrauen in die Daten, und Nutzer spüren das Ergebnis in der Qualität der Hilfe. Nutzen Sie Zahlen auf Teamebene, um zu fragen, was das System braucht.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Kontaktvolumen | Agenten entmutigen das Erfassen, indem sie Nutzer in nicht gezählte Kanäle umleiten, oder zerlegen einen Kontakt in mehrere, damit eine Warteschlange beschäftigt wirkt; Führungskräfte zielen auf ein niedrigeres Volumen | Kontaktrate pro 100 Nutzer und regelmäßige Abstimmung der Telefonie-Zählungen mit Ticket-Zählungen; eine feste Regel, dass jeder Kanal gezählt wird |
| Kontaktrate | Der Nenner wird nachträglich gewählt (zum Beispiel eine weite Definition von „aktiv“), damit die Rate besser aussieht | Eine schriftliche, datierte Definition von „aktiven Nutzern“ und die Rohzahlen neben der Rate gezeigt |
| Zeit bis zur Antwort | Kontakte werden von einer automatischen Begrüßung beantwortet oder in eine ruhige Warteschlange weitergeleitet, oder der Anruf wird angenommen und in die Warteschleife gelegt; E-Mail erhält eine automatische Antwort, die als Antwort zählt | Die Uhr als erste menschliche Reaktion definieren und Abbruch und Wiederkontakt daneben verfolgen |
| Abbruchrate | Anrufer werden fallen gelassen, bevor sie eingereiht sind, die Karenzzeit wird gedehnt, oder ein Rückrufangebot wird als beantworteter Kontakt gezählt | Perzentile der Zeit bis zur Antwort, Abschlussrate von Rückrufen und eine veröffentlichte Karenzzeit |
| Bearbeitungszeit | Anrufe werden überstürzt, früh weitergeleitet oder beendet, bevor das Problem gelöst ist; Notizen bleiben dünn; Arbeit wird in die Nachbearbeitungszeit verschoben, die die Uhr ausschließt | Lösung beim Erstkontakt, Wiederkontaktrate und eine stichprobenartige Prüfung der Dokumentationsqualität durch das Team |
| Rate der Lösung beim Erstkontakt | Tickets werden unabhängig vom Ergebnis während des Anrufs geschlossen, „dieselbe Angelegenheit“ wird eng gelesen, oder schwere Kontakte werden als „nicht zu lösen erwartet“ klassifiziert | Wiederkontaktrate, eine Ein-Frage-Bestätigung des Nutzers und regelmäßige Prüfung der Ausschlüsse durch das Team |
| Wiederkontaktrate | Nutzer werden gebeten, für eine Nachfrage ein neues Ticket zu öffnen, oder Nachfragen werden unter einer anderen Kategorie erfasst, damit sie sich nicht verknüpfen | Verknüpfungsregeln im Werkzeug, eine stichprobenartige Prüfung nicht verknüpfter wiederholter Kontakte und vom Nutzer berichtete Lösung |

Ein gesunder Befund ist eine Menge von Zahlen, die miteinander übereinstimmen. Zeit bis zur Antwort und Abbruch bewegen sich gemeinsam, die Bearbeitungszeit variiert mit dem Kontakttyp und nicht mit dem Tagesziel, Lösung beim Erstkontakt und Wiederkontakt sind Spiegelbilder, die sich nahe ihrer Obergrenze summieren, und die Antwort des Nutzers auf „Wurde Ihr Anliegen gelöst?“ stimmt mit der Wiederkontaktzahl überein. Eine einzelne Zahl, die sich stark verbessert, während die anderen flach bleiben, ist ein Grund, vor dem Feiern anzusehen, wie sie erhoben wird. Ein manipulierter Desk zeigt die Symptome meist im Wiederkontakt, in wiederkehrenden Kategorien im Volumen und in steigenden Beschwerden.

## Abwägungen: Vor- und Nachteile

| Wahl | Vorteil | Kosten oder Risiko |
| --- | --- | --- |
| Durchschnittliche Bearbeitungszeit als Schlagzeile | Einfach, in jeder Plattform verfügbar, leicht zu erklären | Belohnt Eile, verbirgt den Auslauf und lädt zu Zielen ein, die der Lösung schaden |
| Median und 85. Perzentil für Zeiten | Beschreibt den typischen Fall und den langsamen Auslauf | Braucht genug Kontakte für Stabilität und etwas mehr Erklärung |
| Lösung beim Erstkontakt per Schließmarkierung des Agenten | Leicht zu erheben | Leicht aufzublähen und zwischen Desks schwer zu vergleichen |
| Lösung beim Erstkontakt per Wiederkontaktfenster | Schwer zu manipulieren und näher am Erleben des Nutzers | Braucht gute Verknüpfung im Werkzeug und muss warten, bis das Fenster verstrichen ist, bevor berichtet werden kann |
| Abbruch mit Karenzzeit | Entfernt versehentliches Auflegen | Die Karenzzeit kann gedehnt werden, um die Zahl zu schmeicheln |
| Kontaktrate pro 100 Nutzer | Trennt Wachstum von Ärger | Hängt von einer vertrauenswürdigen Nutzerzahl und einer klaren Definition von „aktiv“ ab |
| Umfrage nach dem Kontakt | Erfasst, was die Uhren nicht können | Niedrige und ungleiche Rücklaufquoten und eine Verzerrung zu Nutzern mit starken Gefühlen |
| Nur nach Team und Warteschlange berichten | Schützt Vertrauen und konzentriert sich auf das System | Gibt weniger Detail für individuelles Coaching, das einen anderen, privaten Prozess braucht |

Keine Menge von Messgrößen beseitigt die Spannung zwischen Geschwindigkeit und Sorgfalt. Ein Desk, der jeden Kontakt in Sekunden beantwortet und wenig löst, hat eine gute Warteschlange und einen schlechten Service, und ein Desk, der sich Zeit nimmt, richtig zu lösen, zeigt längere Bearbeitungs- und Wartezeiten. Der Weg hindurch ist, sich zu einigen, welches Ergebnis in diesem Quartal am meisten zählt, die Abwägung ausdrücklich zu machen und das Paar von Messgrößen zu überprüfen, das sie im Gleichgewicht hält. Schneller ist nur besser, solange die Lösung hält.

## Fragen für die Diskussion im Team

**1. Was bedeutet hier „Kontakt“, und stimmt unsere Zählung mit dem überein, was Telefonieplattform und ITSM-Werkzeug jeweils berichten?**
Bitten Sie die Gruppe, einen Tag Kontakte durch jeden Kanal zu verfolgen und die Zählungen der beiden Systeme zu vergleichen. Notieren Sie Kontakte, die nie zu Tickets werden, und Tickets, die nie als Kontakte beginnen. Die Moderation sollte anfangs mit einer Lücke rechnen und sie als Befund über Definitionen behandeln, nicht als Fehler der Menschen. Einigen Sie sich auf eine Regel für den nächsten Bericht und wer sie besitzt.

**2. Wenn wir sagen, ein Kontakt wurde beim Erstkontakt gelöst, woher wissen wir, dass der Nutzer zustimmen würde?**
Prüfen Sie zehn jüngere als Lösung beim Erstkontakt markierte Kontakte und kontrollieren Sie, ob einer der Nutzer zur selben Angelegenheit zurückkam. Fragen Sie bei denen, die es taten, was der Agent hätte anders tun können. Die Diskussion zeigt meist, wo das Schließen geschieht, bevor der Nutzer bereit ist. Entscheiden Sie, ob eine Ein-Frage-Bestätigung hinzukommt und wie das Wiederkontaktfenster sein sollte.

**3. Was geschieht mit der Person in der Warteschleife, und wann gibt sie auf?**
Sehen Sie sich die Abbruchkurve nach Wartezeit an. Die meisten Desks finden einen Punkt, jenseits dessen Menschen in großer Zahl gehen, und dieser Punkt ist die praktische Grenze der Warteschlange. Fragen Sie, welche Rückruf-, Chat- oder automatischen Antworten angeboten werden und ob eine davon als beantwortet zählt, wenn das Problem nicht gelöst ist. Die Moderation kann dies nutzen, um ein Gespräch über Besetzung nach Stunde statt nach Monat zu eröffnen.

**4. Welche unserer Bearbeitungszeit-Zahlen würden sich ändern, wenn wir auf Nachbearbeitung und Warten achteten?**
Listen Sie auf, was die Uhr einschließt und was sie auslässt. Fragen Sie, ob jemand Druck zum Verkürzen von Anrufen gespürt hat und was er getan hat. Diese Frage ist in einem Team leichter zu beantworten als in einem Bericht, geben Sie Menschen also die Chance, ohne Zuordnung zu sprechen. Einigen Sie sich auf eine Definition und darauf, dass die Bearbeitungszeit nur für die Planung genutzt wird.

**5. Welche fünf Kategorien haben letztes Quartal die meisten Kontakte pro 100 Nutzer erzeugt, und wem gehört jeweils die Korrektur?**
Bringen Sie Kategoriedaten und die Eigner der zugrunde liegenden Services an denselben Tisch. Fragen Sie für jede Kategorie, ob die beste Antwort eine Korrektur, ein Artikel, eine bessere Meldung oder ein Self-Service-Weg ist. Ziel ist, mit Elementen im Backlog und benannten Eignern zu gehen. Gehen Sie die Liste im nächsten Quartal erneut durch, um zu sehen, welche sich bewegt haben.

**6. Berichten wir dies auf Team- und Warteschlangenebene, und nutzt irgendjemand es, um Einzelpersonen zu vergleichen?**
Fragen Sie die Gruppe direkt, ob eine dieser Zahlen genutzt wurde, um einen Menschen zu beurteilen, und welche Wirkung es hatte. Besprechen Sie, was der Desk nicht mehr täte, wenn der individuelle Vergleich endete, und was er zu tun begänne. Die Moderation sollte Beispiele festhalten und dem Kennzahleneigner zur Entscheidung über die Richtlinie vorlegen. Ziel ist eine schriftliche Zusage, dass die Daten das System beschreiben.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams bekommen vom Desk die beste Sicht auf ihren eigenen Service. Kontakte pro 100 Nutzer nach einem Release zeigen schnell, ob eine Änderung Menschen verwirrt hat, und die Kategorien zeigen, was als Nächstes zu beheben ist. Teams sollten ein monatliches Review der häufigsten Kategorien erwarten und sie als Backlog-Eingabe behandeln, ohne Schuld beim Desk, der berichtet, was Nutzer ihm sagen. Bitten Sie den Desk neben Zählungen auch um Kontaktstichproben, denn die Worte der Nutzer offenbaren oft ein Bezeichnungs- oder Gestaltungsproblem.

### Service- und Betriebsteams

Desk-Personal und seine Leitungen brauchen Zahlen, die ihnen beim Planen und Verbessern helfen, ohne zu Zielen zu werden. Besetzung nach Stunde aus Ankunftsmustern, Wiederkontakt-Reviews und Artikelanfragen sind die nützlichsten Ergebnisse. Das Personal sollte bei der Definition der Kennzahlen mitreden, denn es weiß, wo die Uhren in die Irre führen. Es sollte zuerst die Zahlen seines eigenen Teams sehen und sie anfechten können.

### Führung und Governance

Führungskräfte brauchen eine kurze Menge von Zahlen, die miteinander übereinstimmen: Volumen und Kontaktrate, Zeit bis zur Antwort und Abbruch, Lösung beim Erstkontakt und Wiederkontakt und einen Nutzerzufriedenheitswert mit seiner Rücklaufquote. Sie sollten Verteilungen und Hinweise auf Definitionsänderungen anfordern und der Versuchung widerstehen, ein einzelnes Ziel für die Bearbeitungszeit oder das Volumen zu setzen. Ziele allein für Geschwindigkeit laden zur oben beschriebenen Manipulation ein. Governance sollte festhalten, wem jede Definition gehört (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

### Kunden und Nutzer

Nutzern ist wichtig, ob sie durchgekommen sind, ob sie gut behandelt wurden und ob das Problem behoben blieb. Die Bearbeitungszeit interessiert sie nicht. Ihnen zu sagen, was der Desk misst, und auf ihr Feedback zu handeln, schafft Vertrauen, ebenso sicherzustellen, dass die Kanäle, die sie bevorzugen, gemessen und besetzt sind. Kunden, die den Service einkaufen, werden durch klare Zusagen in einem SLA oder einer Erlebnisvereinbarung bedient (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA, und Thema 6.2, Experience Level Agreements).

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Krankenhauses betreibt einen Service Desk mit etwa einem Dutzend Mitarbeitenden für rund 4.000 klinische und administrative Nutzer. Die Zahlen unten sind illustrativ und stammen von keiner echten Organisation.

Die Wochenansicht des Teams zeigt 1.900 Kontakte (illustrativ), was eine Kontaktrate von 47,5 Kontakten pro 100 Nutzer (illustrativ) ergibt. Die Telefon-Zeit bis zur Antwort hat einen Median von 40 Sekunden und ein 85. Perzentil von 6 Minuten (illustrativ). Der Abbruch beträgt 14 Prozent (illustrativ) und steigt an Wochentagen zwischen 08:00 und 09:30 stark. Die mediane Bearbeitungszeit beträgt 7 Minuten, das 85. Perzentil 22 Minuten (illustrativ). Die Lösung beim Erstkontakt nach Wiederkontaktfenster beträgt 61 Prozent (illustrativ), und die Siebentage-Wiederkontaktrate 19 Prozent (illustrativ).

Im Monatsreview sehen die Desk-Leitung und das Team für klinische Anwendungen die Kategorien an. Anmelde- und Ausweisprobleme machen einen großen Anteil der Morgenkontakte aus, und eine jüngste Änderung an der Anmeldung der klinischen Anwendung erzeugte eine Spitze von Kontakten zur selben Fehlermeldung. Desk und Anwendungsteam beschließen, drei Dinge zu tun. Sie ändern die Fehlermeldung und ergänzen einen Link zum Artikel, sie fügen für die Morgenspitze eine Rückrufoption hinzu, und sie verlegen den Beginn einer Schicht um eine Stunde vor, um das Ankunftsmuster um 08:00 abzudecken. Nach vier Wochen überprüfen sie Abbruch, Wiederkontakt und Kontaktrate dieser Kategorie.

Mitten im Quartal schlägt eine Führungskraft ein Ziel von 5 Minuten für die Bearbeitungszeit vor, um die Warteschlange zu verkürzen. Das Team zeigt, dass die Kontakte am 85. Perzentil die langsamen sind, auf die es ankommt, und dass ein Ziel Agenten dazu drängen würde, Anrufe früh zu beenden. Es bemerkt auch, dass die Zahl der Lösung beim Erstkontakt in einer Woche auf 78 Prozent (illustrativ) gestiegen ist, während die Wiederkontaktrate auf 27 Prozent (illustrativ) stieg. Eine Prüfung ergibt, dass einige Schichten begonnen hatten, Tickets während des Anrufs zu schließen, mit dem Hinweis an den Nutzer, sich wieder zu melden, was als Lösung beim Erstkontakt zählte. Das Team stellt die auf Wiederkontakt beruhende Definition wieder her, ergänzt die Frage zur Nutzerbestätigung und lässt das Bearbeitungszeit-Ziel fallen. Abbruch, Zeit bis zur Antwort und Wiederkontakt werden von da an zusammen berichtet.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Behandeln Sie Feedback vom Desk als Eingabe für kontinuierliche Verbesserung: ein regelmäßiges Review der häufigsten Kontaktgründe mit Stakeholdern und eine Änderung, die eine Ursache beseitigt. Zu beachten ist, dass Ziele für die Bearbeitungszeit Agenten zur Eile drängen; halten Sie sie also aus individuellen Beurteilungen heraus.

### KI

KI-Triage und entworfene Antworten können Zeit bis zur Antwort und Bearbeitungszeit senken und zugleich ändern, was einen Menschen erreicht, sodass die verbleibenden Kontakte schwerer sind und Durchschnitte in die Irre führen. Koppeln Sie Geschwindigkeit mit der Wiederkontaktrate und dem Anteil der KI-entworfenen Antworten, die ein Agent wesentlich geändert hat. Zu beachten ist, dass ein virtueller Agent, der ein Gespräch beendet, kein gelöstes Problem ist; zählen Sie also Kontakte, die zurückkehren.

### Automatisierung

Erfassen Sie Kontakt-, Warteschlangen- und Statusereignisse automatisch aus Telefonie- und Ticketsystemen und messen Sie Routing-Automatisierung an Fehlzuweisungen und an Kontakten, die zwischen Warteschlangen springen. Zu beachten ist, dass automatische Kategorisierung driftet; ziehen Sie also Tickets als Stichprobe, um zu prüfen, ob die Kategorie stimmte.

### Analytik

Verwenden Sie Perzentile für die Antwortzeit, zeigen Sie die Zahl der Kontakte hinter jeder Rate und schlüsseln Sie Kontaktgründe auf, damit die Entscheidung lautet, welche Ursache zu beseitigen ist. Zu beachten ist, dass kleine Warteschlangen verrauschte Prozentsätze erzeugen; zeigen Sie also bei Services mit geringem Volumen Intervalle oder Anzahlen.

## Branchenperspektive

**Startup.** Der Desk ist oft ein gemeinsames Postfach oder ein Chat-Kanal, den bearbeitet, wer gerade frei ist. Zählen Sie Kontakte nach Kanal, kennzeichnen Sie die Kategorie und sehen Sie sich jeden Monat die fünf häufigsten mit den Menschen an, die das Produkt bauen. Kaufen Sie keine Call-Center-Plattform, bevor das Volumen es rechtfertigt, und setzen Sie keine Geschwindigkeitsziele, wenn zwei Personen alle Kontakte beantworten.

**Kleinunternehmen.** Eine Person oder ein ausgelagerter Dienstleister betreibt meist einen gehosteten Service Desk. Nutzen Sie die Standardberichte des Werkzeugs, lassen Sie sich die Definitionen von Kontakt, Lösung und Abbruch vom Anbieter schriftlich geben und exportieren Sie von Zeit zu Zeit Rohdaten. Eine kurze wiederkehrende Frage an Nutzer, etwa „Wurde Ihr Anliegen gelöst?“, gibt mehr Einsicht als ein langes Dashboard.

**Großunternehmen.** Viele Warteschlangen, Sprachen, Werkzeuge und Lieferanten führen zu unterschiedlichen Definitionen desselben Wortes. Einigen Sie sich auf eine gemeinsame Definition von Kontakt, Lösung beim Erstkontakt und Wiederkontakt und eine gemeinsame Menge von Kanälen. Berichten Sie nach Warteschlange und Service, mit einer Standardsicht für die Führung, und nutzen Sie Daten der Personaleinsatzplanung, um nach Ankunftsmustern zu besetzen. Vergleichen Sie Warteschlangen erst, nachdem Sie geprüft haben, dass sie dieselben Definitionen verwenden.

**Behörden und öffentlicher Sektor.** Datensätze können Aufbewahrungs-, Zugriffs-, Prüf- und Datenschutzpflichten unterliegen, und ein Vertrag kann die Kennzahlen und Ziele für einen ausgelagerten Desk festlegen. Lesen Sie die Vertragskennzahlen kritisch und nehmen Sie die Leitplankenmessgrößen auch dann in die Berichterstattung auf, wenn sie nicht verlangt werden. Führen Sie die Prüfspur der Definitionsänderungen und vermeiden Sie das Erheben nicht benötigter personenbezogener Daten. Öffentliche Services bedienen oft Nutzer mit begrenzter Kanalwahl, daher gehört die Zugänglichkeit jedes Kanals zum Bild (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Das Motiv für bessere Desk-Kennzahlen ist ein billigerer und besserer Service, und der Ertrag kommt an drei Stellen. Erstens weniger wiederholte Kontakte: Jeder Wiederkontakt ist Arbeit, die der Desk nicht hätte leisten müssen, und Zeit, die der Nutzer nicht aufwenden wollte. Zweitens vorgelagerte Korrekturen: Die Kategoriedaten des Desks können ganze Klassen von Kontakten beseitigen, wenn Lieferteams darauf handeln. Drittens bessere Besetzung: Ankunftsmusterdaten lassen Führungskräfte Menschen dorthin setzen, wo Nutzer sie brauchen, was Abbruch und Leerlauf zugleich senkt.

Die Kosten der Erhebung sind bescheiden, wo Telefonieplattform und ITSM-Werkzeug die Ereignisse bereits erfassen. Die Hauptkosten sind die Zeit, Definitionen abzustimmen, die Verknüpfung zwischen Kontakten und Tickets zu beheben, eine kurze Frage nach dem Kontakt hinzuzufügen und die Daten mit Lieferteams zu überprüfen.

Hier wird keine Ertragszahl angeboten, weil veröffentlichte Zahlen mit Organisation und Methode variieren und keine für dieses Thema überprüft wurde. Schätzen Sie den Ertrag aus Ihren eigenen Daten. Nehmen Sie die Zahl der Wiederkontakte und eine gemessene Bearbeitungszeit, multiplizieren Sie mit den Kosten einer Agentenstunde und vergleichen Sie das mit den Kosten der Korrektur. Beschreiben Sie das Ergebnis als Schätzung mit ihren Annahmen und überprüfen Sie es nach der Änderung erneut (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Auf die durchschnittliche Bearbeitungszeit zielen.** Sie belohnt Eile und frühe Weiterleitungen. Nutzen Sie die Verteilung nach Kontakttyp für die Planung und koppeln Sie sie mit Lösung beim Erstkontakt und Wiederkontakt.
- **Eine vom Agenten gesetzte Schließmarkierung als Lösung beim Erstkontakt zählen.** Sie kann unabhängig vom Ergebnis gesetzt werden. Nutzen Sie ein Wiederkontaktfenster und eine Nutzerbestätigung.
- **Einzelne Agenten ordnen.** Es treibt das Herauspicken und defensives Verhalten. Berichten Sie nach Team und Warteschlange und halten Sie individuelle Gespräche privat und unterstützend.
- **Einen Durchschnitt über alle Kanäle berichten, der den schwächsten Kanal verbirgt.** Telefon, Chat und E-Mail verhalten sich verschieden. Berichten Sie jeden Kanal gesondert, bevor Sie kombinieren.
- **Volumen ohne Nenner lesen.** Ein Anstieg kann Wachstum sein. Zeigen Sie Kontakte pro 100 Nutzer und den Kategorienmix.
- **Den Desk aus Lieferentscheidungen heraushalten.** An ein Dashboard berichtete und nie mit dem Produktteam besprochene Zählungen sind verschwendet. Halten Sie ein monatliches Review der häufigsten Kategorien mit ihren Eignern ab.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definitionen und Uhren | Jeder zählt Kontakte anders | Einige Definitionen sind für manche Warteschlangen aufgeschrieben | Eine schriftliche Definition je Kennzahl, einschließlich Start und Stopp der Uhr und Ausschlüssen | Definitionsänderungen werden protokolliert und planmäßig überprüft | Definitionen mit Lieferanten und Kunden geteilt und überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| Datenerfassung und Qualität | Zählungen von Hand aus Exporten zusammengestellt | Telefonie- und ITSM-Daten getrennt berichtet | Kontakte und Tickets verknüpft, mit automatischer Erfassung über Kanäle | Verknüpfung, Vollständigkeit und Abstimmung gemessen und im Trend | Kontaktdaten über Teams und Lieferanten durch vereinbarte Schnittstellen geteilt |
| Nutzung in der Verbesserung | Zahlen berichtet, aber selten besprochen | Gelegentliches Review geschäftiger Zeiten | Monatliches Review der häufigsten Kategorien mit Serviceeignern | Verbesserungen geplant, finanziert und gegen Wiederkontakt und Volumen geprüft | Desk-Daten treiben Backlog-Prioritäten über Produktteams und Lieferanten |
| Leitplanken und Vertrauen | Geschwindigkeitsziele auf Einzelpersonen angewandt | Etwas Bewusstsein für Manipulation | Gekoppelte Messgrößen zusammen berichtet und keine individuelle Rangfolge | Manipulationsprüfungen vom Team geprüft und Nutzerbestätigung im Einsatz | Nutzer und Personal helfen, die Messgrößen festzulegen, und sehen die Ergebnisse |

## Checkliste

- [ ] Kontakte und Tickets sind getrennt definiert und gezählt, und die Zählungen stimmen überein.
- [ ] Jeder Kanal hat eine schriftliche Uhr für die Zeit bis zur Antwort und eine genannte Behandlung automatischer Antworten.
- [ ] Zeitmessgrößen werden als Median und hohes Perzentil mit der Stichprobengröße berichtet.
- [ ] Der Abbruch hat eine schriftliche Karenzzeit und wird mit der Zeit bis zur Antwort gezeigt.
- [ ] Die Lösung beim Erstkontakt verwendet ein Wiederkontaktfenster und eine genannte Bedeutung von „dieselbe Angelegenheit“.
- [ ] Eine Ein-Frage-Bestätigung des Nutzers wird erhoben, mit gezeigter Rücklaufquote.
- [ ] Die Kontaktrate pro 100 Nutzer wird berichtet, mit schriftlicher Definition von „aktivem Nutzer“.
- [ ] Für Agenten ist kein Ziel für die Bearbeitungszeit gesetzt, und keine Kennzahl ordnet Einzelpersonen.
- [ ] Die häufigsten Kontaktkategorien werden monatlich mit den zuständigen Teams überprüft, und Maßnahmen gehen in einen Backlog.
- [ ] Definitionen sind versioniert, und jede Änderung ist datiert.

## KI-Prompts

**Genaue Definitionen für die Kernmessgrößen des Desks entwerfen.**

```text
I am writing definitions for these service desk measures: [list of measures,
for example contact volume, time to answer, abandonment, handle time, first
contact resolution, recontact]. Our channels are [list channels] and our tools
are [telephony or chat platform and ITSM tool]. For each measure, draft the
definition, formula, clock start and stop, inclusions and exclusions, unit, and
data source. Use the same terms throughout and do not invent benchmark values or
targets. List your assumptions and the questions I should answer to finish.
```

**Eine Menge von Desk-Zahlen auf Anzeichen von Manipulation prüfen.**

```text
Here are our service desk figures for [period]: [paste figures such as volume,
time to answer percentiles, abandonment, handle time percentiles, first contact
resolution, recontact]. Our definitions are [paste definitions]. Look for
patterns that suggest a figure improved because of how it is collected and not
because the service improved, and suggest what to check in the data for each.
Do not accuse individuals and do not invent thresholds. List your assumptions
and what you could not determine from the data given.
```

**Ein monatliches Review der häufigsten Kontaktkategorien vorbereiten.**

```text
I am preparing a monthly review of service desk contact categories for
[service or team]. I have [category counts and contacts per 100 users for the
last three months]. Draft an agenda, a short table template, and a list of
questions to ask each service owner about causes, fixes, articles, and
self-service options. Suggest how to record actions in a backlog. Do not invent
numbers or causes. List your assumptions and the data I should bring.
```

**Eine kurze Umfrage nach dem Kontakt entwerfen.**

```text
I want to measure whether users felt helped after contacting the [service desk
name] by [channel]. Draft [number] neutral questions, including one on whether
the issue was resolved, a plan for when to send them, and how to report the
response rate and respondent mix. Flag wording that could bias answers and note
privacy considerations given the data will be held in [tool]. Do not invent
benchmark response rates. List your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um herauszufinden, welches Thema eine verwandte Kennzahl definiert, und die Leitplanke, die neben eine Desk-Messgröße gehört.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass Änderungen an diesem Thema jede Kennzahl mit einem Manipulationsvektor und einer Leitplanke gekoppelt halten.

## Wichtigste Erkenntnisse

- Zählen Sie Kontakte und Tickets getrennt, definieren Sie beide und normalisieren Sie das Volumen an der Größe der Nutzerbasis.
- Berichten Sie Zeiten als Median und hohes Perzentil und sagen Sie, auf wie vielen Kontakten jede Zahl beruht.
- Lesen Sie Antwortgeschwindigkeit, Abbruch und Bearbeitungszeit als Zeichen von Aufwand und koppeln Sie sie mit Lösung beim Erstkontakt und Wiederkontakt als Zeichen des Ergebnisses.
- Definieren Sie die Lösung beim Erstkontakt darüber, ob der Nutzer zurückkommt, und bestätigen Sie sie mit einer Ein-Frage-Prüfung.
- Nutzen Sie den Desk als Sensor: Überprüfen Sie die häufigsten Kategorien monatlich mit den Teams, denen die Services gehören.
- Messen Sie Warteschlangen, Kanäle und Services und ordnen Sie nie einzelne Agenten.

## Quellen und weiterführende Literatur

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997, pp. 305-321.
8. Wikipedia, [Help desk](https://en.wikipedia.org/wiki/Help_desk).
9. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Call centre](https://en.wikipedia.org/wiki/Call_centre).
12. Wikipedia, [First call resolution](https://en.wikipedia.org/wiki/First_call_resolution).
13. Wikipedia, [Automatic call distributor](https://en.wikipedia.org/wiki/Automatic_call_distributor).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
16. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
17. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
