# Technische Schulden und bekannte Fehler

**Behandeln Sie bekannte Fehler und technische Schulden als ein sichtbares Hauptbuch aufgeschobener Korrekturen, messen Sie, was jeder Posten Sie für jeden Monat kostet, den er offen bleibt, und verwenden Sie einen geschützten Kapazitätsanteil auf die Posten mit den höchsten Zinsen.**

## Überblick und Motivation

Jedes Team schiebt einige Reparaturen auf. Ein Defekt ist verstanden, aber nicht behoben, eine Abkürzung wird genommen, um einen Termin zu halten, eine Komponente wird dem Altern überlassen, und eine Umgehung wird in ein Runbook geschrieben. Jeder Aufschub ist eine vernünftige Entscheidung, wenn er getroffen wird. Der Ärger beginnt, wenn Aufschübe sich außer Sicht ansammeln, denn die Kosten ihres Tragens zeigen sich später als Incidents, langsame Lieferung und müde Menschen, ohne eine Zeile in irgendeinem Bericht, die die Kosten mit der Ursache verbindet.

Zwei Vokabulare beschreiben dasselbe Muster. In [ITIL](https://en.wikipedia.org/wiki/ITIL) ist ein **bekannter Fehler** ein Problem, dessen Grundursache verstanden ist und für das eine Umgehung oder eine noch nicht angewandte dauerhafte Korrektur existiert. Bekannte Fehler werden erfasst, damit Service-Desk- und Betriebspersonal wiederholte Incidents schnell lösen kann, und der Datensatz bleibt offen, bis eine Korrektur veröffentlicht ist. In der agilen Softwarearbeit ist **[technische Schuld](https://en.wikipedia.org/wiki/Technical_debt)** die von [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham) 1992 geprägte Metapher für Entwurfs- und Implementierungsentscheidungen, die künftigen Change erschweren. Die Metapher trägt zwei Ideen, die für die Messung wichtig sind: den **Kapitalbetrag (Principal)**, also den Aufwand, die Schuld zu beseitigen, und die **Zinsen**, also den zusätzlichen Aufwand oder das Risiko, das Sie in jedem Zeitraum zahlen, solange die Schuld besteht.

Die zwei Sichten unterscheiden sich darin, wohin sie schauen. Bekannte Fehler werden über den Betrieb entdeckt: Ein Incident oder eine Problemuntersuchung findet eine Ursache. Technische Schuld wird meist über die Lieferung entdeckt: Eine Entwicklerin bemerkt, dass ein Change schwerer ist, als er sein sollte. Ein bekannter Fehler ist oft technische Schuld, die schon begonnen hat, Kunden zu schaden. Technische Schuld ist oft ein bekannter Fehler, der darauf wartet zu geschehen. Getrennte Listen zu führen, eine im ITSM-Werkzeug und eine in einem Backlog oder Wiki, verbirgt die Verbindung und erzeugt zwei konkurrierende Argumente für dieselbe knappe Kapazität.

Dieses Thema gibt Ihnen einen kleinen Satz Kennzahlen für das kombinierte Hauptbuch. Es vermeidet eine einzelne Geldzahl für die Schuld einer ganzen Organisation, die keine Methode verlässlich erzeugt, und misst, was Sie beobachten können: offene Posten, Wartezeit, verursachte Incidents, hinzugefügte Arbeit und in Reparatur investierte Kapazität. Das Hauptbuch speist dann ein Priorisierungsgespräch zwischen Produkt und Betrieb (siehe Thema 4.1, Kennzahlen für das Problemmanagement, für Problemdatensätze und dauerhafte Korrekturen, und Thema 2.9, Betriebsarbeit und ungeplante Arbeit, für die Unterbrechungslast, die Schulden erzeugen).

In diesem Thema verwendete Begriffe:

- Eine **Umgehung (Workaround)** ist ein Weg, Service wiederherzustellen oder einen Fehlschlag zu vermeiden, ohne die Ursache zu beseitigen.
- Eine **dauerhafte Korrektur** beseitigt die Ursache. Die [Ursachenanalyse](https://en.wikipedia.org/wiki/Root_cause_analysis) ist die Arbeit, die sie findet.
- **[Refactoring](https://en.wikipedia.org/wiki/Code_refactoring)** strukturiert Code um, ohne sein äußeres Verhalten zu ändern. Es ist der übliche Weg, Entwurfsschuld abzutragen.
- Ein **[Code Smell](https://en.wikipedia.org/wiki/Code_smell)** ist ein oberflächliches Zeichen im Code, das oft auf ein tieferes Problem hindeutet. Er ist ein Anstoß, hinzuschauen, kein Urteil.
- **[Opportunitätskosten](https://en.wikipedia.org/wiki/Opportunity_cost)** sind der Wert der besten Alternative, auf die Sie verzichten, wenn Sie eine Verwendung der Zeit einer anderen vorziehen. Jede Korrektur konkurriert mit einer Funktion, und der Vergleich ist die eigentliche Entscheidung.
- **[Cost of Delay](https://en.wikipedia.org/wiki/Cost_of_delay)** ist der wirtschaftliche Verlust durch das Aufschieben einer Arbeit. Es ist die Idee hinter der Bepreisung der Zinsen eines Schuldenpostens.
- Ein **[Software-Fehler](https://en.wikipedia.org/wiki/Software_bug)** ist ein Defekt in Software. Ein bekannter Fehler kann ein Bug, eine Konfigurationsschwäche, eine Entwurfsgrenze oder ein Lieferantendefekt sein.
- **[Statische Programmanalyse](https://en.wikipedia.org/wiki/Static_program_analysis)** untersucht Code, ohne ihn auszuführen. Ihre Warnungen und Komplexitätswerte sind Indikatoren möglicher Schuld und schwächere Belege als die Incident-Historie.

Nicht jede Schuld ist ein Fehler. Martin Fowlers Quadrant trennt bewusste von unbeabsichtigter und rücksichtslose von umsichtiger Schuld (siehe Quellenliste). Eine umsichtige Abkürzung mit Rückzahlungsplan ist ein solider Kredit, und rücksichtslose Schuld ist die Art, die zu verhindern ist. Die Kennzahlen hier urteilen nicht über den Ursprung. Sie zeigen die Bilanz.

## Leitprinzipien

- **Ein Hauptbuch, zwei Türen.** Bekannte Fehler aus dem Betrieb und Schuldenposten aus der Lieferung kommen in dieselbe sichtbare Liste, mit einer Verknüpfung zwischen Datensätzen, die dieselbe Ursache beschreiben.
- **Die Zinsen messen, und den Kapitalbetrag auch.** Die Größe einer Reparatur zählt weniger als das, was der offene Posten Sie jeden Monat an Incidents, Umgehungen und verlangsamtem Change kostet. Ordnen Sie nach Zinsen je Einheit Reparaturaufwand.
- **Aufschub zu einer Entscheidung mit Eigner machen.** Jeder Posten hat einen Eigner, einen genannten Grund fürs Warten und ein Überprüfungsdatum. Ein Posten, den niemand zum Aufschub gewählt hat, ist Vernachlässigung und wird als solche gezählt.
- **Kapazität schützen, bevor man sie braucht.** Ein im Voraus vereinbarter Anteil der Kapazität jedes Teams für Reparaturarbeit schlägt eine heroische Aufräumaktion nach einem schlechten Quartal.
- **Die Umgehung ehrlich halten.** Eine Umgehung ist ein Service mit eigenen Kosten, Eigner und Fehlermodi. Messen Sie, wie oft sie genutzt wird und wie oft sie fehlschlägt.
- **Systeme beschreiben, nie Menschen.** Schuld gehört zu einem Service oder einer Komponente. Ordnen Sie sie nie einem Autor zu und ordnen Sie Ingenieure nie nach der Schuld, die sie berührten.
- **Grob schätzen.** Größen von „Stunden“, „Tagen“ und „Wochen“ genügen. Mehr Genauigkeit ist erfunden.

## Kennzahlendefinitionen

Die folgenden Kennzahlen beschreiben das Hauptbuch aufgeschobener Reparaturen. Uhren und Grenzen sind in jeder Formel genannt. Zeitmessgrößen werden als Verteilungen (Median und 85. oder 95. Perzentil) berichtet, nicht als einzelner Durchschnitt.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Alter des Backlogs bekannter Fehler | Wie lange offene bekannte Fehler auf eine dauerhafte Korrektur gewartet haben | Die Uhr startet, wenn der Problemdatensatz als „bekannter Fehler“ markiert wird; stoppt, wenn die dauerhafte Korrektur in die Produktion released ist; als „akzeptiertes Risiko“ geschlossene Posten werden gesondert berichtet und ausgeschlossen. Anzahl, medianes Alter und 85. Perzentil des Alters berichten, nach Service | Tage (Verteilung) | Problem- und Known-Error-Datensätze des ITSM-Werkzeugs, Release-Datensätze | Problemmanagement | Diagramm alternder Arbeitselemente; Alter des Bug-Backlogs | Monatlich |
| Umgehungsabdeckung | Anteil offener bekannter Fehler, die eine dokumentierte, getestete Umgehung haben, der ein Agent folgen kann | Offene bekannte Fehler mit einer in den letzten 6 Monaten überprüften Umgehung / offene bekannte Fehler; geschlossene und als akzeptiertes Risiko geführte Posten sind ausgeschlossen | Prozent | Wissensdatenbank, verknüpft mit Known-Error-Datensätzen | Problemmanagement; Wissensmanagement | Runbook oder Definition of Done für Betreibbarkeit | Monatlich |
| Mit offenen bekannten Fehlern verknüpfte Incidents | Incidents, deren Ursache ein offener bekannter Fehler ist, ein direktes Maß der in Service-Störung gezahlten Zinsen | Im Zeitraum Incidents, die mit einem bekannten Fehler verknüpft sind, der bei Incident-Beginn offen war / alle Incidents im Zeitraum; Incidents ohne Ursachenverknüpfung werden als unverknüpft berichtet, nicht mitgezählt | Prozent, plus Anzahl | Incident-zu-Problem-Verknüpfungen im ITSM-Werkzeug | Incident-Management; Problemmanagement | Entwichene Fehler; Zufluss von Produktions-Bugs | Monatlich |
| Schuldenbestand | Anzahl und geschätzte Größe registrierter offener Posten technischer Schuld | Zum Periodenende offene Posten im Schuldenregister; die Größe ist die Summe grober Aufwandsbänder (Stunden, Tage, Wochen), bei der Registrierung vergeben; nicht registrierte oder vermutete Schuld ist ausgeschlossen | Anzahl und Aufwandsbänder | Schuldenregister im Tracker, nach Service gekennzeichnet | Kontinuierliche Verbesserung; Service-Design | Als Schuld etikettierte Product-Backlog-Elemente | Monatlich |
| Schuldenzinsen | Zusätzliche, durch offene Schuld und bekannte Fehler verursachte Arbeit, in Teamzeit | Im Zeitraum gebuchte Stunden auf Arbeitselementen mit Schulden- oder Known-Error-Referenz (Umgehungen, manuelle Schritte, Nacharbeit und Zusatzaufwand bei betroffenen Changes) / gesamte Arbeitsstunden des Teams im Zeitraum; die Reparaturarbeit selbst ist ausgeschlossen und unter dem Kapazitätsanteil gezählt | Prozent der Arbeitszeit | Zeit- oder Aufwands-Tags auf Arbeitselementen, auf Teamebene geführt | Kontinuierliche Verbesserung; Problemmanagement | Anteil ungeplanter Arbeit und Nacharbeit | Monatlich |
| Kapazitätsanteil für Schulden | Anteil der Lieferkapazität, der in den Abbau von Schulden und bekannten Fehlern fließt | Kapazität (Elementzahl oder Aufwand) abgeschlossener Arbeitselemente, gekennzeichnet als Schuldenabbau oder Known-Error-Korrektur / alle im Zeitraum abgeschlossenen Arbeitselemente; Elemente ohne Tag sind ausgeschlossen | Prozent | Tracker, abgeschlossene Elemente nach Tag | Kontinuierliche Verbesserung; Change-Befähigung | Kapazitätsverteilung | Je Planungszeitraum, monatlich überprüft |
| Netto-Veränderung der Schulden | Ob das Hauptbuch wächst oder schrumpft | Im Zeitraum registrierte Schulden- und Known-Error-Posten minus im Zeitraum gelöste Posten; gelöst heißt Korrektur released, nicht gemergt; als „wird nicht behoben“ geschlossene Posten werden in einer gesonderten Zeile gezählt | Anzahl (vorzeichenbehaftet) | Schuldenregister und Known-Error-Datensätze | Kontinuierliche Verbesserung | Backlog-Veränderung nach Kategorie | Monatlich |

Akzeptiertes Risiko ist ein legitimer Weg, einen bekannten Fehler zu schließen, denn manche Probleme sind die Korrektur nicht wert. Es wird gesondert aufgeführt, damit das Schließen von Posten nicht stillschweigend die Altersangabe verbessert. Das 6-Monats-Fenster der Überprüfung bei der Umgehungsabdeckung ist ein Beispiel. Ein Team legt das Fenster passend dazu fest, wie schnell sich seine Systeme ändern, und schreibt es ins Kennzahlenregister.

## Empfehlungen

### Das Hauptbuch aufbauen

**1. Führen Sie die Liste bekannter Fehler und die Schuldenliste in einem Hauptbuch zusammen.** Führen Sie ein Register mit Feldern für Ursprung (Betrieb oder Lieferung), Service, Eigner, Größenband und Verknüpfung zu verwandten Datensätzen. Das ITSM-Werkzeug kann es halten oder der Tracker, sofern jedes System auf das andere verweist. Ohne eine einzige Sicht konkurriert ein bekannter Fehler im Betrieb mit einem ungesehenen Schuldenposten in der Lieferung um dieselben Ingenieure.

**2. Registrieren Sie Schuld im Moment ihrer Entstehung oder Entdeckung.** Eine bewusst genommene Abkürzung kommt im selben Pull Request oder Change-Datensatz ins Register, mit genanntem Grund und Überprüfungsdatum. Später gefundene Schuld registriert, wer sie findet. Eine billige, einzeilige Erfassungsregel funktioniert besser als eine periodische Prüfung, denn Menschen vergessen, was sie letztes Quartal wussten.

### Die Zinsen messen

**3. Verknüpfen Sie Incidents jedes Mal mit bekannten Fehlern.** Die Verknüpfung zwischen einem Incident und seinem bekannten Fehler sind die stärksten Daten, die Sie über Zinsen haben, und sie kostet bei der Lösung ein paar Sekunden. Machen Sie die Verknüpfung zum Pflichtfeld, wenn die Ursache bekannt ist, und berichten Sie den unverknüpften Anteil, damit eine Lücke nicht wie eine gute Nachricht aussieht (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents). Erscheint dieselbe Ursache in mehreren Incidents, trägt der Problemdatensatz den Beleg für die Korrektur.

**4. Kennzeichnen Sie die Arbeit, die Schuld erzeugt.** Lassen Sie Ingenieure ein Arbeitselement markieren, wenn eine Umgehung, ein manueller Schritt oder zusätzliche Nacharbeit wegen einer bekannten Schwäche nötig war, und verknüpfen Sie es mit dem Posten im Hauptbuch. Das Kennzeichen kostet wenig und liefert die Zahl der Schuldenzinsen auf Teamebene. Behandeln Sie das Ergebnis als Schätzung mit großer Fehlerspanne, nützlich zum Ordnen von Posten und zum Beobachten eines Trends, nicht für Buchhaltung.

**5. Bepreisen Sie jeden Posten in zwei Zahlen: Reparaturaufwand und monatliche Zinsen.** Nutzen Sie grobe Bänder wie Stunden, Tage, Wochen für den Aufwand und monatliche Grobkosten aus verknüpften Incidents, gekennzeichneter Arbeit und allen Ausfallkosten, die Ihre Organisation schon schätzt. Zinsen durch Aufwand zu teilen ergibt eine einfache Amortisationszeit. Erfinden Sie keine Genauigkeit: Ein Band und eine genannte Annahme genügen, um die offensichtlichen Gewinne von den Posten zu trennen, die warten können.

### Kapazität schützen und entscheiden

**6. Reservieren Sie einen festen Kapazitätsanteil und berichten Sie ihn.** Vereinbaren Sie mit dem Product Owner einen Anteil jedes Zyklus für Reparaturarbeit, nach dem Trend im Hauptbuch gesetzt und jedes Quartal neu betrachtet. Berichten Sie den Kapazitätsanteil für Schulden neben den Zahlen zu geplanter Arbeit, damit Führungskräfte Reparaturarbeit als bewusste Investition sehen. Ein reservierter Anteil schützt das Team auch vor einem Abwägungsstreit in jedem Planungsgespräch, den der Funktions-Backlog meist gewinnt.

**7. Ordnen Sie Reparatur und Funktionen in einer gemeinsamen Währung.** Bringen Sie bekannte Fehler und Schuldenposten in dasselbe Priorisierungsgespräch wie Funktionen, ausgedrückt als Cost of Delay und Amortisationszeit. Eine Korrektur, die einen wöchentlichen Incident beseitigt und ihren Aufwand binnen eines Quartals zurückgibt, konkurriert aus eigenem Recht. Ordnen nach Lautstärke, Dienstalter oder Registrierungsdatum gibt schlechte Ergebnisse (siehe Thema 4.4, Change-Fehlschläge und Nacharbeit).

**8. Schließen Sie die Schleife bei Aufschubentscheidungen.** Halten Sie für jeden bewusst offen gelassenen Posten fest, wer das Risiko akzeptierte, das Überprüfungsdatum und den Auslöser, der ihn nach oben schieben würde, etwa einen zweiten Incident oder einen geplanten Change in dem Bereich. Überprüfen Sie die Liste der akzeptierten Posten in eigenem Rhythmus. Ein Posten, der dreimal ohne Auslöser aufgeschoben wurde, ist die Entscheidung, ihn zu ignorieren, und das Hauptbuch sollte das sagen.

### Die Zahlen ehrlich halten

**9. Veröffentlichen Sie die Korrektur, bevor Sie den Datensatz schließen.** Ein bekannter Fehler bleibt offen, bis die dauerhafte Korrektur in der Produktion ist und die Wiederkehr über ein genanntes Fenster geprüft wurde. Das Schließen bei „gemergt“ oder „Ticket erledigt“ schmeichelt den Zahlen zu Alter und Netto-Veränderung und eröffnet den Incident später neu (siehe Thema 4.5, Kennzahlen für Releases und Deployments). Verfolgen Sie die Wiedereröffnungsrate bekannter Fehler als Qualitätsprüfung der Schließregel.

**10. Schauen Sie auf die Form des Hauptbuchs, nicht nur auf die Summen.** Eine flache Zahl kann einen langen Schwanz sehr alter Posten verbergen, einen wachsenden Anteil von Posten in einem Service oder ein Hauptbuch, das klein gehalten wird, indem alles als „wird nicht behoben“ geschlossen wird. Zeigen Sie die Altersverteilung, die Aufteilung nach Service und die Liste akzeptierter Risiken auf einer Seite. Überprüfen Sie sie mit den Menschen, die die Services besitzen, im selben Meeting, das die Arbeit des nächsten Quartals plant.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Alter des Backlogs bekannter Fehler | Alte Datensätze als „akzeptiertes Risiko“ oder „wird nicht behoben“ schließen; einen alten Datensatz in neue junge zerlegen; die Uhr durch Neuregistrierung zurücksetzen | Anzahl und Alter akzeptierter Risiken auf derselben Seite berichtet; Review der Schließungen durch jemanden außerhalb des zuständigen Teams; Datensatz-Abstammung erhalten |
| Umgehungsabdeckung | Eine vage Umgehung schreiben, um das Feld zu erfüllen; eine Umgehung zählen, die nie ein Agent versucht hat | Nutzungs- und Fehlerrate der Umgehung in verknüpften Incidents; periodischer Test einer Stichprobe von Umgehungen |
| Mit offenen bekannten Fehlern verknüpfte Incidents | Incidents unverknüpft lassen oder mit einer anderen Ursache verknüpfen, damit der Anteil fällt | Anteil unverknüpfter Incidents daneben berichtet; Stichprobenprüfung geschlossener Incidents auf verpasste Verknüpfungen |
| Schuldenbestand | Schuld nicht registrieren, damit der Bestand klein aussieht; viele Posten in einen großen zusammenführen; Trivialitäten registrieren, um sorgfältig zu wirken | Review des Registers gegen eine Stichprobe von Code-Reviews und Incident-Postmortems; Prüfungen von Größe und Konkretheit der Posten |
| Schuldenzinsen | Arbeit untertaggen, um Prüfung zu vermeiden, oder übertaggen, um ein Reparaturbudget zu gewinnen; die Zahl als Bewertung eines Teams lesen | Stichprobenprüfung gekennzeichneter und ungekennzeichneter Elemente; nur Teamebene, ohne Vergleich zwischen Teams; Zinsen zusammen mit Incident-Verknüpfungen gelesen |
| Kapazitätsanteil für Schulden | Gewöhnliche Funktionsarbeit als Reparatur kennzeichnen; leichte kosmetische Posten wählen, um den Anteil zu füllen | Ergebnisprüfung: Alter der ältesten Posten mit hohen Zinsen und fallende Incident-Verknüpfungen; Review dessen, was behoben wurde, gegen die Rangfolge |
| Netto-Veränderung der Schulden | Viele winzige Posten lösen, um einige große auszugleichen; Posten als „wird nicht behoben“ schließen, damit die Zahl fällt | Netto-Veränderung nach Größenband und nach Zinsen gezeigt; Zeile „wird nicht behoben“ berichtet; Wiederkehrprüfung gelöster Posten |

Ein gesunder Befund zeigt ein Hauptbuch, das sichtbar, konkret und in eine vom Team gewählte Richtung in Bewegung ist. Die ältesten Posten mit hohen Zinsen werden weniger. Mit offenen bekannten Fehlern verknüpfte Incidents gehen im Trend zurück, und der unverknüpfte Anteil ist klein. Der Kapazitätsanteil für Schulden ist auf der vereinbarten Höhe stabil, statt nach einer Krise zu spitzen und danach zu verschwinden. Die Liste akzeptierter Risiken ist kurz und überprüft. Sieht eine einzelne Zahl hervorragend aus und die anderen bewegen sich nicht, verdächtigen Sie die Definition, bevor Sie feiern.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Ein zusammengeführtes Hauptbuch bekannter Fehler und Schulden | Einheitliche Priorisierung; Betrieb und Lieferung sehen dieselben Kosten | Braucht gemeinsame Werkzeuge oder Verknüpfungen; die Verantwortung über zwei Funktionen muss geklärt werden |
| Ein fester Kapazitätsanteil für Reparatur | Vorhersehbar; schützt Reparaturarbeit vor Funktionsdruck | Kann für geringwertige Posten ausgegeben werden, wenn die Rangfolge schwach ist |
| Reparaturarbeit nur planen, wenn sie die Prioritätsdebatte gewinnt | Flexibel; reagiert auf die aktuelle Priorität | Funktionen gewinnen fast immer; das Hauptbuch wächst bis zur Krise |
| Zinsen aus Incidents und gekennzeichneter Arbeit geschätzt | Bindet Schuld an beobachtbare Kosten; stützt das Ordnen | Grobe Zahlen; hängt von ehrlichem Kennzeichnen und Incident-Verknüpfungen ab |
| Ein eigener Reparaturschub oder „Schuldenwoche“ | Fokus und sichtbarer Fortschritt | Episodisch; das Hauptbuch füllt sich zwischen den Ereignissen wieder; unterbricht geplante Zusagen |

Wählen Sie die leichteste Anordnung, die die ältesten Posten mit hohen Zinsen in Bewegung hält. Ein kleines Team kann das Hauptbuch auf einem Board mit einem Label und einem Monats-Review führen. Größere Organisationen brauchen Verknüpfungen zwischen Werkzeugen und eine vereinbarte Ordnungsmethode. Ziel ist eine bewusste Entscheidung über jeden Posten, nicht eine leere Liste.

## Fragen für die Diskussion im Team

**1. Welche drei offenen Posten kosten uns jeden Monat am meisten, und woher wissen wir es?**
Bitten Sie Menschen, Kandidaten aus dem Gedächtnis zu nennen, und prüfen Sie sie dann gegen Incident-Verknüpfungen und gekennzeichnete Arbeit. Vergleichen Sie die erinnerte Liste mit der gemessenen und notieren Sie die Lücken. Einigen Sie sich, wie die Belege für die Rangfolge künftig gesammelt werden.

**2. Wenn wir eine Korrektur aufschieben, wer entscheidet, und wann schauen wir wieder hin?**
Gehen Sie die letzten fünf Aufschübe durch und fragen Sie, wer das Risiko akzeptierte und welches Überprüfungsdatum gesetzt wurde. Wo niemand entschied, wurde der Posten vernachlässigt, nicht aufgeschoben. Einigen Sie sich auf eine Regel, dass jeder Aufschub einen Eigner, einen Grund und einen Auslöser trägt. Besprechen Sie, wie die Liste akzeptierter Risiken überprüft wird und von wem.

**3. Wie viel Kapazität sollten wir für Reparatur reservieren, und was würde den Anteil ändern?**
Zeigen Sie den Trend des Hauptbuchs und den aktuellen Kapazitätsanteil für Schulden. Fragen Sie, worauf das Team verzichten würde, um ihn zu erhöhen, und welche Belege ihn fallen lassen könnten. Halten Sie die Zahl, den Grund und das Datum der erneuten Betrachtung fest.

**4. Sind unsere Umgehungen echt, und könnte ein neuer Agent ihnen folgen?**
Wählen Sie eine Umgehung zufällig und bitten Sie jemanden, der sie nicht schrieb, ihr zu folgen. Einigen Sie sich auf eine Testroutine für die Umgehungen, die die Fehler mit der höchsten Auswirkung abdecken.

**5. Was zählt als behoben, und wie lange beobachten wir, bevor wir den Datensatz schließen?**
Vergleichen Sie die Schließregeln von Betrieb, Lieferung und Product Owner. Besprechen Sie ein Wiederkehrfenster, das zum Service passt, und was das Team tut, wenn ein geschlossener Posten wieder aufgeht. Einigen Sie sich auf eine Definition und schreiben Sie sie ins Kennzahlenregister.

**6. Wo könnten uns unsere Schuldenzahlen eine bequeme Geschichte erzählen?**
Bitten Sie um die Wege, wie jede Zahl geschönt werden könnte: nicht registrierte Schuld, zuerst behobene leichte Posten, als „wird nicht behoben“ geschlossene Posten. Schauen Sie auf den Anteil unverknüpfter Incidents und die Liste akzeptierter Risiken. Wählen Sie eine Leitplanke, die dieses Quartal ergänzt wird, und benennen Sie, wer sie prüft.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams sehen Schuld zuerst, meist beim Ändern von Code. Sie profitieren von einem Register, dem sich leicht etwas hinzufügen lässt, und von einem geschützten Kapazitätsanteil, damit Reparaturarbeit nicht davon abhängt, in jedem Planungsgespräch einen Streit zu gewinnen. Sie sollten Abkürzungen registrieren, wenn sie sie nehmen, durch Schwachstellen verursachte Arbeit kennzeichnen und vermeiden, Schuld als Etikett für jede Arbeit zu nutzen, die sie lieber nicht täten (siehe Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz, für die Wirkungen von Schuld auf die Durchlaufzeit).

### Service- und Betriebsteams

Betriebsteams sehen die Zinsen: wiederholte Incidents, manuelle Schritte, fragile Umgehungen und die Bereitschaftslast, die folgt. Sie besitzen die Known-Error-Datensätze und die Umgehungsdokumente, und sie haben die Incident-Daten, die die Zinsen bepreisen. Sie sollten jeden Incident mit seinem bekannten Fehler verknüpfen, Umgehungen testen und geordnete Belege statt einer Beschwerdeliste ins Planungsgespräch bringen (siehe Thema 5.7, Kennzahlen für Toil und Bereitschaft).

### Führung und Governance

Führungskräfte entscheiden, wie viel Kapazität Reparaturarbeit erhält, und die Anreize, die sie setzen, entscheiden, ob das Hauptbuch ehrlich bleibt. Sie sollten die Altersverteilung, die Zinszahlen und die Liste akzeptierter Risiken verlangen, nicht eine einzelne Schuldennote. Das Hauptbuch als Bewertung eines Teams zu lesen bestraft die Registrierung und treibt Schuld in den Untergrund. Ein Governance-Forum sollte Risikoakzeptanz als Entscheidung mit Eigner und Überprüfungsdatum behandeln.

### Kunden und Nutzer

Kunden spüren Schuld als wiederholte Fehlschläge und als Umgehungen, denen sie folgen müssen. Wo eine Umgehung Nutzer betrifft, veröffentlichen Sie sie mit einer schlichten Notiz, wann eine Korrektur erwartet wird, und halten Sie das Datum ein oder erklären Sie die Änderung. Weniger wiederholte Incidents und ehrlicher Status zu bekannten Problemen schaffen mehr Vertrauen als das Versprechen, keine Defekte zu haben (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Krankenhauses betreibt einen Patiententerminplanungsservice, unterstützt von einem Produktteam und einer Betriebsgruppe. Alle Zahlen in diesem Beispiel sind illustrativ.

Die Betriebsgruppe führt 23 bekannte Fehler im ITSM-Werkzeug. Das Produktteam führt eine gesonderte Liste von 41 Schuldenposten auf seinem Board. Ein Quartals-Review stellt fest, dass 9 der bekannten Fehler und 7 der Schuldenposten dieselben fünf Ursachen beschreiben. Der älteste bekannte Fehler ist 14 Monate alt, das mediane Alter bekannter Fehler beträgt 5 Monate, das 85. Perzentil 11 Monate. Die Umgehungsabdeckung beträgt 61 Prozent. Mit offenen bekannten Fehlern verknüpfte Incidents machen 18 Prozent der Incidents des Quartals aus, und 22 Prozent der Incidents sind unverknüpft, der wahre Anteil könnte also höher sein.

Das Team führt die zwei Listen in einem Hauptbuch von 55 verschiedenen Posten zusammen. Für die zehn Posten mit den meisten verknüpften Incidents schätzt es einen Reparaturaufwand in Bändern und monatliche Zinsen in Stunden. Ein Posten sticht hervor: ein nächtlicher Terminsynchronisationsjob, der etwa alle vierzehn Tage still fehlschlägt und einen manuellen Neustart durch Bereitschaftspersonal braucht. Seine Reparatur wird auf zwei Wochen geschätzt. Seine Zinsen betragen aus verknüpften Incidents und gekennzeichneter Arbeit etwa 10 Stunden im Monat, und jeder Fehlschlag verzögert die morgendlichen Sprechstundenlisten. Die Amortisationszeit beträgt etwa vier Monate, was schneller ist als bei jeder damals geplanten Funktion.

Die im Entscheidungsprotokoll festgehaltene Entscheidung ist, 15 Prozent der Kapazität des Produktteams für Reparaturarbeit zu reservieren, nach Zinsen je Aufwandseinheit geordnet, und zuerst den Synchronisationsjob zu beheben. Der Leiter des Betriebs stimmt außerdem zu, jeden Incident mit einem bekannten Fehler zu verknüpfen, wo einer existiert, und die fünf meistgenutzten Umgehungen zu testen.

Zwei Quartale später beträgt das mediane Alter bekannter Fehler 4 Monate und das 85. Perzentil 9 Monate. Mit offenen bekannten Fehlern verknüpfte Incidents fallen auf 11 Prozent. Der unverknüpfte Anteil fällt auf 8 Prozent, was dem Team mehr Vertrauen in die Zahl gibt. Dann fängt das Team ein Manipulationsrisiko auf. Die Zeile der Netto-Veränderung zeigt 12 in einem Quartal gelöste Posten, doch 6 davon wurden als „wird nicht behoben“ geschlossen, und zwei davon waren die ältesten Posten mit hohen Zinsen. Ein Prüfer außerhalb des Teams liest die Datensätze und stellt fest, dass die Schließungen vorgenommen wurden, um die Altersangabe zu verbessern. Die Posten werden wieder geöffnet, der Schließgrund wird ein Pflichtfeld mit benanntem Genehmiger, und Posten mit akzeptiertem Risiko erscheinen nun auf derselben Seite wie die Altersverteilung.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Verwenden Sie einen geschützten Kapazitätsanteil auf die Schuld mit den höchsten Zinsen und überprüfen Sie ihn regelmäßig mit Stakeholdern. Zu beachten ist, dass ein Ziel für die Zahl der Schulden zum Zerlegen und Umetikettieren von Posten führt.

### KI

KI-generierter Code kann schnell Schuld hinzufügen, und KI kann auch helfen, sie zu finden und abzutragen. Verfolgen Sie Netto-Veränderung der Schulden und mit offenen bekannten Fehlern verknüpfte Incidents für KI-gestützte Bereiche gesondert und kennzeichnen Sie sie. Zu beachten ist, dass ein Modell, das eine Korrektur vorschlägt, die Grundursache bestehen lassen kann.

### Automatisierung

Automatisieren Sie die Erkennung veralteter bekannter Fehler und des Verfalls von Abhängigkeiten und Flags und messen Sie die Automatisierung an Fehlalarmen. Zu beachten ist, dass automatisierte Scanner Rauschen erzeugen, das die Posten begräbt, auf die es ankommt.

### Analytik

Schätzen Sie Zinsen mit den Incidents und dem Aufwand, die jeder Posten verursacht, mit Spannen. Die Entscheidung, die dies untermauert, ist, was als Nächstes zu beheben ist. Zu beachten ist, dass Schätzungen der Schuldenkosten grob sind; vermeiden Sie also falsche Genauigkeit.

## Branchenperspektive

**Startup.** Schuld ist meist bewusst und oft richtig, weil Tempo bis zum ersten Kunden am meisten zählt. Führen Sie eine Liste auf dem Board mit einem Label, registrieren Sie Abkürzungen, wenn Sie sie nehmen, und setzen Sie ein Überprüfungsdatum, damit „später“ eine Bedeutung hat. Erhöhen Sie den Reparaturanteil, wenn die Zinsen in Incidents sichtbar werden.

**Kleinunternehmen.** Ein einzelner Administrator oder ein kleines Team trägt oft Betrieb und Lieferung zugleich, sodass die zwei Listen natürlich eine sind. Erfassen Sie bekannte Fehler und ihre Umgehungen in einem gemeinsamen Dokument und notieren Sie, von welchem Lieferanten oder Vertrag jeder Posten abhängt. Ein vom Lieferanten verantworteter Defekt ist ein bekannter Fehler, den Sie nicht selbst beheben können, verfolgen Sie also das zugesagte Datum des Lieferanten und Ihre Umgehung.

**Großunternehmen.** Viele Teams, viele Services und viele Lieferanten erzeugen mehrere konkurrierende Listen und mehrere Definitionen von „fertig“. Legen Sie eine Struktur des Hauptbuchs, eine Schließregel und eine Ordnungsmethode fest und lassen Sie Teams lokale Felder mit genannter Zuordnung ergänzen.

**Behörden und öffentlicher Sektor.** Legacy-Systeme, lange Beschaffungszyklen und feste Budgets machen manche Schuld teuer abzutragen und manche Ersatzentscheidungen langsam. Halten Sie die rechtlichen, Aufbewahrungs- und Prüfungsauflagen fest, die eine Korrektur blockieren, denn sie erklären den Aufschub. Zeigen Sie das Hauptbuch als Teil der Risikoberichterstattung und planen Sie Reparatur im Budgetzyklus, statt sie als ungeplante Kosten zu behandeln (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Das Motiv ist, aufzuhören, Zinsen zu zahlen, die Sie nicht sehen. Wiederholte Incidents, manuelle Umgehungen und langsame, riskante Changes sind die sichtbaren Kosten und werden normalerweise als getrennte Probleme in getrennten Budgets erfasst. Ein zusammengeführtes Hauptbuch macht daraus einen Vergleich zwischen den Kosten der Reparatur und den Kosten des Tragens der Schuld.

Die Kosten der Praxis haben drei Teile. Der erste ist die Einrichtung: ein Register, Verknüpfungen zwischen ITSM-Werkzeug und Tracker und eine Kennzeichnungskonvention. Der zweite ist der laufende Aufwand: ein paar Sekunden je Incident zum Verknüpfen, ein paar Sekunden je Arbeitselement zum Kennzeichnen und ein monatliches Review von ein bis zwei Stunden je Service. Der dritte ist die Reparaturkapazität selbst, der größte Posten und eine bewusste Investition, kein Overhead.

Der Ertrag kommt aus Mustern, die Sie selbst messen können. Vergleichen Sie die mit einem bekannten Fehler verknüpften Incidents vor und nach seiner Korrektur, die Stunden gekennzeichneter Arbeit an betroffenen Changes vor und nach und die vermiedenen Bereitschaftsunterbrechungen. Fügen Sie die Kosten von Ausfallzeit hinzu, wenn Ihre Organisation sie schon schätzt. Übernehmen Sie keine Branchenzahl für die Kosten von Schuld: Die Forschungsliteratur zum Thema ist real, aber die Zahlen hängen vom Kontext ab, und Ihre eigenen Incident- und Zeitdaten sind der bessere Beleg. Die *Accelerate*-Forschung verknüpft Lieferleistung mit Organisationsleistung (siehe Thema 2.8, DORA-Kennzahlen), gibt aber keinen Preis für Ihr Hauptbuch an. Für die weitere Behandlung von Kosten und Ertrag siehe Thema 7.7, Kapitalrendite und Business Case.

## Anti-Muster und Fallstricke

- **Zwei Listen, die sich nie treffen.** Betrieb und Lieferung streiten mit verschiedenen Belegen um dieselbe Kapazität. Führen Sie die Listen zusammen oder verknüpfen Sie jede gemeinsame Ursache.
- **Eine einzelne Schuldennote für die Organisation.** Sie verbirgt, wo die Kosten sind, und lädt zum Ordnen von Teams ein. Berichten Sie das Hauptbuch nach Service, mit Alter, Zinsen und Verantwortung.
- **Der große Neubau als einzige Reparatur.** Große Aufräumaktionen bleiben stecken, und das Hauptbuch füllt sich, während sie laufen. Tragen Sie Posten in kleinen Schritten ab, nach Amortisationszeit geordnet.
- **Schuld null als Ziel.** Es belohnt triviale Schließungen und schreckt von ehrlicher Registrierung ab. Zielen Sie auf ein Hauptbuch, dessen älteste Posten mit hohen Zinsen sich bewegen.
- **Bekannte Fehler bei „gemergt“ schließen.** Die Korrektur hat die Nutzer nicht erreicht, und der Incident kehrt zurück. Schließen Sie beim Release und beobachten Sie dann die Wiederkehr über ein genanntes Fenster.
- **Aufschub in „wird nicht behoben“ verstecken.** Die Altersangabe verbessert sich, und das Risiko bleibt. Zählen Sie akzeptiertes Risiko gesondert, mit Eigner und Überprüfungsdatum.
- **Statische Analyse als Wahrheit behandeln.** Werte spiegeln die Form des Codes, nicht die Kosten. Nutzen Sie sie, um Kandidaten zu finden, und bestätigen Sie dann mit Incident-Verknüpfungen und Change-Historie.
- **Schuld Autoren zuordnen.** Es lehrt Menschen, Abkürzungen zu verbergen und schwierige Komponenten zu meiden. Halten Sie jede Kennzahl auf Service- und Teamebene (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Hauptbuch und Definitionen | Bekannte Fehler und Schulden leben in Köpfen oder verstreuten Notizen | Betrieb und Lieferung führen je eine Liste, mit unterschiedlichen Regeln | Ein Hauptbuch mit schriftlicher Definition, einem Eigner und einer Schließregel für jeden Posten | Alter, akzeptiertes Risiko und Netto-Veränderung gegen die schriftlichen Definitionen überprüft | Definitionen mit Lieferanten und Kunden überarbeitet, wenn sie Entscheidungen nicht mehr informieren |
| Zinsen messen | Keine Verknüpfung zwischen Incidents und Ursachen | Einige Incidents von Hand mit bekannten Fehlern verknüpft | Incident-Verknüpfungen verpflichtend, wo die Ursache bekannt ist; Arbeit auf Teamebene gekennzeichnet | Zinsen und Amortisationszeit für die obersten Posten geschätzt und im Trend | Zinsen mit Service-Ergebnissen verknüpft und über Teams und Lieferanten geteilt |
| Kapazität und Priorisierung | Reparatur geschieht in der Krise | Informelle Zeit, von einigen Teams beiseitegelegt | Ein vereinbarter Kapazitätsanteil und eine gemeinsame Ordnungsmethode | Anteil nach dem Trend des Hauptbuchs angepasst und als geplante Arbeit finanziert | Reparaturkapazität über gemeinsame Plattformen und Lieferanten koordiniert |
| Umgehungen und Schließen | Umgehungen undokumentiert oder bei einer Person | Für einige Fehler dokumentiert, ungetestet | Umgehungen in der Wissensdatenbank, mit Schließregel beim Release | Nutzung, Fehler und Wiederkehr von Umgehungen nach dem Schließen gemessen | Umgehungen werden automatisch bei Release der Korrekturen aufgelöst, mit Rückmeldung der Nutzer |

## Checkliste

- [ ] Bekannte Fehler und Schuldenposten stehen in einem Hauptbuch oder sind Posten für Posten verknüpft.
- [ ] Jeder Posten hat einen Eigner, ein Größenband, einen Service und ein Überprüfungsdatum.
- [ ] Bewusste Abkürzungen werden bei ihrer Entstehung mit Grund registriert.
- [ ] Incidents sind mit bekannten Fehlern verknüpft, wo die Ursache bekannt ist, und der unverknüpfte Anteil wird berichtet.
- [ ] Durch Schwachstellen verursachte Arbeit wird auf Teamebene gekennzeichnet, und das Kennzeichnen wird stichprobenartig geprüft.
- [ ] Jeder der obersten Posten hat ein Aufwandsband für die Reparatur und eine Schätzung der monatlichen Zinsen.
- [ ] Ein Kapazitätsanteil für Reparaturarbeit ist vereinbart, berichtet und wird jedes Quartal überprüft.
- [ ] Bekannte Fehler schließen mit dem Release der Korrektur, mit einem genannten Wiederkehrfenster.
- [ ] Schließungen als akzeptiertes Risiko werden gesondert aufgeführt, mit Genehmiger und Überprüfungsdatum.
- [ ] Umgehungen für die Fehler mit der höchsten Auswirkung werden nach Plan getestet.
- [ ] Die Altersverteilung und die Aufteilung nach Service werden mit den Summen gezeigt.
- [ ] Keine Schuldenkennzahl wird genutzt, um Einzelpersonen zu vergleichen oder zu ordnen.

## KI-Prompts

**Zwei Listen in einem Hauptbuch zusammenführen.**

```text
I have two lists of deferred repairs. List A comes from [operations tool or
source] and holds [number] known errors. List B comes from [delivery tracker or
source] and holds [number] technical debt items. Here are the entries:
[paste entries with title, service, date registered, and a one-line description].
Group entries that appear to describe the same cause, propose a single ledger
entry for each group, and flag entries that need a human to confirm the match.
Do not invent causes, services, or dates. List your assumptions and the questions
I should answer before merging.
```

**Aufwandsbänder und monatliche Zinsen für die obersten Posten schätzen.**

```text
For the ledger item [item title] on [service], I have this evidence: linked
incidents [list with dates and durations], tagged work [hours or item counts],
and a repair estimate from the team of [estimate]. Help me write coarse effort
and monthly interest bands, a simple payback time, and the confidence level for
each figure. Show your arithmetic. Do not invent costs, benchmark values, or
industry figures. If a figure is missing, ask me for it. List your assumptions.
```

**Schließungen und Manipulationsrisiken prüfen.**

```text
Here are the definitions and the last quarter's data for our known error and debt
ledger: [definitions of age, workaround coverage, debt net change, and the closure
rule] and [summary of items closed, with closure reasons]. Identify the ways
these measures could be flattered, the evidence in the data that suggests it has
happened, and a guardrail for each. Treat this as a review of the instrument, not
a review of people. Do not accuse anyone, and do not invent data. List your
assumptions.
```

**Ein Priorisierungsgespräch mit dem Product Owner vorbereiten.**

```text
I need to propose how to split capacity between features and repair work for
[team] next quarter. The ledger shows [summary of ledger: counts, age
distribution, top items with effort and interest bands]. The feature plan
contains [summary of planned features and their expected value, as supplied by
the product owner]. Draft a one-page proposal that compares options for the
repair share, states the cost of delay of the main repair items, and names the
trade-offs. Do not invent value estimates or benchmark shares. List your
assumptions and the decisions the product owner must make.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine verwandte Kennzahl wie Wiederkehr oder Change-Fehlschlag definiert, und die Leitplanke, die danebengehört.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine bearbeitete Kennzahl ihre Uhren, ihren Manipulationsvektor und ihre Leitplanke nennt.

## Wichtigste Erkenntnisse

- Bekannte Fehler und technische Schulden sind zwei Sichten auf ein Hauptbuch aufgeschobener Reparaturen, halten Sie sie also zusammen oder verknüpft.
- Messen Sie die Zinsen, die jeder Posten jeden Monat an Incidents, Umgehungen und verlangsamtem Change kostet, und ordnen Sie Reparatur nach Amortisationszeit.
- Machen Sie jeden Aufschub zu einer Entscheidung mit Eigner, Grund und Überprüfungsdatum und berichten Sie akzeptiertes Risiko gesondert.
- Reservieren Sie einen vereinbarten Kapazitätsanteil für Reparaturarbeit und berichten Sie ihn neben der geplanten Arbeit.
- Schließen Sie einen bekannten Fehler beim Release der Korrektur und beobachten Sie dann die Wiederkehr, bevor Sie dem Ergebnis trauen.
- Halten Sie jede Kennzahl auf Service- und Teamebene und nutzen Sie Leitplanken, damit eine bessere Zahl ein besseres System bedeutet.

## Quellen und weiterführende Literatur

1. Cunningham, W., "The WyCash Portfolio Management System," OOPSLA '92 Experience Report, ACM, 1992.
2. Fowler, M., "Technical Debt Quadrant," 2009, https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
3. Fowler, M., *Refactoring: Improving the Design of Existing Code*, 2nd edition, Addison-Wesley, 2018.
4. Kruchten, P., Nord, R., and Ozkaya, I., *Managing Technical Debt: Reducing Friction in Software Development*, Addison-Wesley, 2019.
5. Sculley, D., and others, "Hidden Technical Debt in Machine Learning Systems," Advances in Neural Information Processing Systems 28, 2015, https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring).
15. Wikipedia, [Code smell](https://en.wikipedia.org/wiki/Code_smell).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
18. Wikipedia, [Software bug](https://en.wikipedia.org/wiki/Software_bug).
19. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
