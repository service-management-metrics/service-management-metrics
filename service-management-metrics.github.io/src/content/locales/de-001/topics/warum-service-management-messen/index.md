# Warum Service-Management messen

**Teams, die Services entwickeln und betreiben, brauchen eine kleine Menge ehrlicher Zahlen, um zu sehen, ob ihre Arbeit den Nutzern hilft und besser wird, und Agilität und ITIL liefern jeweils eine andere Hälfte dieses Bildes.**

## Überblick und Motivation

Jedes Team, das einen Service entwickelt und betreibt, trifft den ganzen Tag Entscheidungen: woran als Nächstes gearbeitet wird, ob ein Release sicher ist, ob der Service Desk eine weitere Person braucht, ob ein Ausfall ein Einzelfall oder ein Muster war. Ohne Messung beruhen diese Entscheidungen auf Erinnerung, Anekdoten und darauf, wer zuletzt gesprochen hat. Mit der falschen Messung können sie noch schlechter ausfallen, denn eine Zahl hat eine Autorität, die eine Meinung nicht hat. Dieses Thema erklärt, warum sich der Aufwand des Messens lohnt, was jede Tradition beisteuert und was es kostet, es falsch zu machen.

In diesem Buch treffen zwei Traditionen aufeinander. [Agile Softwareentwicklung](https://en.wikipedia.org/wiki/Agile_software_development) ist ein Satz von Werten und Praktiken, im Agilen Manifest von 2001 festgehalten, der funktionierende Software, enge Zusammenarbeit mit Kunden und die Reaktion auf Veränderung bevorzugt. Ihre Messgewohnheiten sind empirisch und lokal: Ein Team untersucht seinen eigenen Fluss, schaut sich an, was es geliefert hat, und passt sich an. [ITIL](https://en.wikipedia.org/wiki/ITIL), ursprünglich die Information Technology Infrastructure Library, ist eine Sammlung von Leitlinien für das [IT-Service-Management](https://en.wikipedia.org/wiki/Information_technology_service_management) (ITSM), die Praxis, IT-Services zu gestalten, zu erbringen und zu verbessern. Ihre Messgewohnheiten sind serviceorientiert und gemeinsam: vereinbarte Servicelevel, ein Servicekatalog (ITIL schreibt im Englischen „service catalogue“) und eine Disziplin der kontinuierlichen Verbesserung. In ITIL 4, der Ausgabe des Rahmenwerks von 2019, gehört Messung und Berichterstattung zu den allgemeinen Management-Praktiken, und kontinuierliche Verbesserung ist zugleich eine Praktik und ein Leitprinzip. Prüfen Sie die aktuellen Veröffentlichungen des Eigentümers des Rahmenwerks, bevor Sie sich auf Versionsdetails verlassen, denn das Rahmenwerk entwickelt sich weiter.

Die beiden Sichtweisen unterscheiden sich auf nützliche Weise. Agilität fragt: „Bauen wir das Richtige, und wie reibungslos fließt die Arbeit?“ ITIL fragt: „Erfüllt der Service die Bedürfnisse der Menschen, die ihn nutzen, und ist er zuverlässig, unterstützbar und bezahlbar?“ Ein Team, das nur den Fluss misst, kann schnell in einen Service ausliefern, den Nutzer als unzuverlässig erleben. Ein Team, das nur Servicelevel misst, kann jedes Ziel erreichen und Änderungen so langsam liefern, dass der Service irrelevant wird. Die [DevOps](https://en.wikipedia.org/wiki/DevOps)-Bewegung entstand aus der Beobachtung, dass Entwickeln und Betreiben ein einziges System sind und die Zahlen, die es beschreiben, deshalb zusammen gelesen werden sollten. [Site Reliability Engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), die Disziplin, die Google in seinen veröffentlichten Büchern beschrieben hat, fügt eine ausdrückliche Verbindung zwischen Zuverlässigkeitszielen und dem Tempo der Veränderung hinzu.

Drei Begriffe kehren im ganzen Buch wieder. Eine **Messgröße** beschreibt etwas an der Arbeit oder am Service. Eine **Kennzahl** ist eine Messgröße mit definierter Formel, Einheit und Datenquelle, sodass zwei Personen bei der Berechnung dieselbe Antwort erhalten. Eine **Leitplanke** ist eine zweite Messgröße oder Praktik, im Voraus gewählt, die sich bewegt, wenn die erste manipuliert wird. Die Warnung hinter Leitplanken ist [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law): Wird eine Messgröße zum Ziel, beginnen Menschen, die Zahl statt der Arbeit zu steuern (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

### Wozu Messen dient

Messen verdient seinen Platz, wenn es eine von vier Aufgaben erfüllt.

- **Sehen.** Unsichtbare Arbeit sichtbar machen: die Warteschlange, die niemand ansieht, das Incident-Muster über drei Teams hinweg, den Change, der neun Tage auf einen Termin wartet.
- **Entscheiden.** Eine Wahl zwischen zwei Optionen untermauern, etwa ob ein Anfragetyp automatisiert oder der Fehler behoben wird, der ihn verursacht.
- **Lernen.** Eine Annahme prüfen. Glaubt das Team, dass eine neue Review-Praxis Nacharbeit senkt, kann eine Zahl sagen, ob sie es getan hat.
- **Rechenschaft ablegen.** Nutzern, Kunden und Führungskräften einen ehrlichen Bericht darüber geben, was der Service leistet, damit Vertrauen auf Belegen beruht.

Eine Zahl, die keine dieser vier Aufgaben erfüllt, ist Aufwand ohne Nutzen. Spätere Themen wiederholen diesen Test für jede Kennzahlenfamilie.

### Die Kosten, nichts zu messen

Ein Team, das nichts misst, ist nicht frei von Zahlen. Es läuft auf impliziten: der lautesten Beschwerde, dem jüngsten Ausfall, dem Gefühl der Führungskraft dafür, wie beschäftigt die Leute wirken. Daraus folgen zwei Kosten.

- **Langsames Feedback.** Probleme, die ein Trend früh gezeigt hätte, kommen als Überraschung. Ein schleichender Anstieg wiederholter Kontakte wirkt wie Pech, bis er eine Krise ist.
- **Keine Grundlage für Verbesserung.** Ein Team kann nicht sagen, ob eine Änderung geholfen hat, und deshalb nicht lernen, welche Änderungen es wiederholen soll.

### Die Kosten, das Falsche zu messen

Das Falsche zu messen ist oft schlimmer, als nichts zu messen, weil es Aufwand mit falscher Zuversicht lenkt. Zahlen geschlossener Tickets, Codezeilen, abgeschlossene Story Points und erfasste Stunden sind leicht zu erheben und leicht darzustellen, und jede ist ein Maß für Aktivität, nicht für den Wert für einen Nutzer. Die Forschung hinter dem SPACE-Rahmenwerk (Forsgren und Kollegen, 2021) argumentiert, dass sich Produktivität nicht in einer Dimension erfassen lässt und dass Aktivitätszahlen allein in die Irre führen.

## Leitprinzipien

- **Für eine Entscheidung messen.** Jede Kennzahl beantwortet eine schriftlich festgehaltene Frage und untermauert eine benannte Entscheidung. Kann niemand sagen, welche, wird sie verabschiedet.
- **Die beiden Sichtweisen verbinden.** Lesen Sie Lieferfluss und Servicegesundheit auf derselben Seite, damit Geschwindigkeit nie auf Kosten der Stabilität erkauft wird oder umgekehrt.
- **Erst Ergebnisse messen, dann Aktivität.** Dass es den Nutzern besser geht, ist der Prüfstein. Aktivitätszahlen stützen die Geschichte, erzählen sie aber nicht (siehe Thema 1.3, Ergebnisse vor Output: Auswählen, was gemessen wird).
- **Teams und Services beschreiben, nie Einzelpersonen.** Individuelle Rangfolgen verfälschen die Daten und schaden der Zusammenarbeit.
- **Klein anfangen und wachsen.** Eine Handvoll vertrauenswürdiger Kennzahlen schlägt eine Wand schwach gesteuerter.
- **Zuerst dem Team zeigen.** Die Menschen, die die Arbeit leisten, sind das erste Publikum und die beste Kontrolle dafür, ob die Daten stimmen.
- **Mit Veränderung rechnen.** Definitionen, Kennzahlen und Ziele werden überarbeitet, wenn sie keine Entscheidungen mehr untermauern.

## Kennzahlendefinitionen

Die folgenden Kennzahlen beschreiben die Gesundheit der Messpraxis selbst, und dort wird „warum messen“ überprüfbar. Ein Team, das diese Kennzahlen vorweisen kann, misst aus Gründen. Jede zeit- oder zählbasierte Formel nennt ihre Grenzen.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Anteil entscheidungsbezogener Kennzahlen | Anteil der berichteten Kennzahlen, die eine schriftliche Frage und eine benannte Entscheidung haben, die sie untermauern | Kennzahlen mit erfasster Frage und Entscheidung / am Quartalsende im Dashboard berichtete Kennzahlen | Prozent | Kennzahlenregister (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen) | Messung und Berichterstattung; kontinuierliche Verbesserung | Retrospektiv-Maßnahmen; Arbeitsvereinbarungen | Vierteljährlich |
| Baseline-Abdeckung | Anteil der Services und Teams im Geltungsbereich, die für jede der vereinbarten Kernmessgrößen einen erfassten Ausgangswert haben | Paare aus Service und Messgröße mit in den letzten 12 Monaten erfasster Baseline / alle Paare aus Service und Messgröße im Geltungsbereich; Services außerhalb des Katalogs sind ausgeschlossen | Prozent | Servicekatalog und Kennzahlenregister | Service-Level-Management; Messung und Berichterstattung | Stakeholder-Review; Team-Dashboards | Vierteljährlich |
| Messaufwand | Arbeitszeit, die für das manuelle Erheben, Bereinigen und Berichten von Kennzahlen aufgewendet wird | im Monat auf manuelle Erhebung und Berichterstattung gebuchte Stunden, ohne die Zeit, die auf das Handeln nach Erkenntnissen entfällt | Stunden pro Team und Monat | Zeitnotizen oder eine kurze Teamumfrage | Messung und Berichterstattung | Zeitbudget der Retrospektive | Vierteljährlich |
| Datenalter bei der Überprüfung | Wie alt der neueste Datenpunkt ist, wenn die Gruppe zusammenkommt, um ihn zu besprechen | Zeitstempel des Review-Termins minus Zeitstempel des letzten Datenpunkts im Dashboard; je Kennzahl berechnet, berichtet als Median und 85. Perzentil | Tage | Aktualisierungsprotokoll des Dashboards | Messung und Berichterstattung | Stakeholder-Review | Je Review |
| Umsetzung von Verbesserungen | Anteil der in Kennzahlen-Reviews angestoßenen Verbesserungsmaßnahmen, die im vereinbarten Zeitfenster abgeschlossen oder bewusst geschlossen werden | Maßnahmen, die innerhalb von 90 Tagen nach dem Anstoßen abgeschlossen oder mit Begründung geschlossen wurden / im Zeitraum angestoßene Maßnahmen, gezählt ab dem im Verbesserungsregister erfassten Datum | Prozent | Register oder Backlog der kontinuierlichen Verbesserung | Kontinuierliche Verbesserung | Maßnahmen aus der Retrospektive | Vierteljährlich |

Der Messaufwand zählt bewusst nur manuelle Arbeit. Die Zeit, in der die Daten gelesen und Entscheidungen getroffen werden, ist der Zweck der Übung und wird ausgeschlossen, damit sich die Automatisierung der Erhebung als Fortschritt zeigt.

## Empfehlungen

### Mit dem Zweck beginnen

**1. Schreiben Sie den Grund vor der Kennzahl auf.** Schreiben Sie für jede vorgeschlagene Messgröße einen Satz: „Wir messen X, um Y zu entscheiden.“ Lässt sich der Satz nicht schreiben, ist die Messgröße nicht reif. Diese einzige Gewohnheit entfernt die meisten Eitelkeitskennzahlen, bevor sie in ein Dashboard gelangen.

**2. Nennen Sie Publikum und Entscheidung.** Dieselbe Zahl bedeutet einem Team, einem Serviceverantwortlichen und einer Führungskraft Verschiedenes. Halten Sie fest, wer sie liest und welche Wahl sie untermauert. Eine Arbeitsansicht des Teams darf zwanzig Messgrößen tragen. Was an die Führung geht, sollte eine kleine, stabile Menge sein (siehe Thema 11.1, Ein Dashboard für Servicekennzahlen entwerfen).

### Beide Traditionen nutzen

**3. Koppeln Sie eine Flussmessgröße mit einer Servicemessgröße.** Wählen Sie mindestens eine Messgröße dafür, wie Arbeit sich bewegt, etwa Durchlaufzeit oder Alter von Arbeitselementen (siehe Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz), und mindestens eine dafür, wie der Service sich verhält, etwa Incident-Wiederholung oder einen Service Level Indicator (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets). Beide zusammen zu zeigen verhindert den verbreiteten Fehler, dass Geschwindigkeit und Stabilität von verschiedenen Gruppen anhand verschiedener Diagramme gesteuert werden.

**4. Behandeln Sie Lieferung und Betrieb als ein System.** In *Accelerate* (Forsgren, Humble und Kim, 2018) zusammengefasste Forschung berichtet, dass sich die Leistung der Softwarelieferung mit vier Messgrößen beschreiben lässt, die Durchsatz und Stabilität ausbalancieren. Welche Menge ein Team auch übernimmt: Halten Sie change- und incidentbezogene Zahlen so nah beieinander, dass ein Anstieg der einen einen Blick auf die andere auslöst (siehe Thema 2.8, DORA-Kennzahlen).

### Ehrlich messen

**5. Bevorzugen Sie wenige Messgrößen, die gegeneinander ziehen.** Eine einzelne Zahl lädt zur Überoptimierung ein, wählen Sie also Paare wie Geschwindigkeit mit Qualität, Menge mit Ergebnis und Kosten mit Erlebnis. Das Paar muss keine Formel sein. Es muss auf derselben Seite stehen.

**6. Erfassen Sie eine Baseline, bevor Sie etwas ändern.** Ohne Ausgangswert ist eine Verbesserungsbehauptung eine Geschichte. Erheben Sie zuerst einige Wochen Daten, einschließlich der Streuung der Werte und nicht nur des Durchschnitts (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen). Baselines schützen auch Teams: Sie zeigen, dass ein schlechtes Quartal auf eine geänderte Zählweise folgte und nicht auf einen Leistungsabfall.

### Die Gewohnheit aufbauen

**7. Überprüfen Sie in einem Rhythmus, der zur Entscheidung passt.** Flussmessgrößen eignen sich für ein wöchentliches Gespräch oder eines in jedem Schritt der kontinuierlichen Softwarelieferung. Servicelevel- und Kostenmessgrößen eignen sich für ein monatliches oder vierteljährliches. Eine Kennzahl, die im falschen Rhythmus überprüft wird, erzeugt entweder Rauschen oder verpasst den Moment, in dem Handeln geholfen hätte.

**8. Schließen Sie den Kreis mit Verbesserungsarbeit.** Ein Review, das mit „interessant“ endet, hat seine Daten verschwendet. Beenden Sie jedes Review mit ein oder zwei benannten Maßnahmen, einem Verantwortlichen und einem Datum, und verfolgen Sie deren Abschluss. Die Praktik der kontinuierlichen Verbesserung bei ITIL und die agile Retrospektive sind zwei Namen für dieselbe Disziplin (siehe Thema 9.5, Kennzahlen für kontinuierliche Verbesserung).

**9. Sagen Sie, wofür Sie die Zahlen nicht verwenden werden.** Halten Sie klar fest, dass Teamkennzahlen nicht zur Rangfolge oder Belohnung von Einzelpersonen dienen und dass Definitionen offen geändert werden. Menschen arbeiten beim Messen mit, wenn sie darauf vertrauen, wie es verwendet wird (siehe Thema 11.3, Kennzahlen einführen, ohne Angst zu erzeugen).

## Manipulationsvektoren und Leitplanken

Selbst Kennzahlen über das Messen lassen sich manipulieren. Jede Zeile unten stellt der Kennzahl die übliche Art gegenüber, wie sie verbogen wird, und die Prüfung, die es aufdecken würde.

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Anteil entscheidungsbezogener Kennzahlen | Für jede Kennzahl nachträglich eine plausible Frage und Entscheidung formulieren, um den Prozentsatz zu heben | Das Entscheidungsprotokoll stichprobenartig prüfen: fragen, was sich wegen der Kennzahl geändert hat, und das Datum des Eintrags mit dem Datum vergleichen, an dem die Kennzahl erstmals erschien |
| Baseline-Abdeckung | Eine Baseline einmal erfassen und nie auffrischen oder einen bequemen ruhigen Zeitraum wählen | Zu jeder Baseline einen Zeitraum und eine Stichprobengröße verlangen; Baselines nach größeren Änderungen am Service überprüfen |
| Messaufwand | Erhebungsarbeit aus den Büchern nehmen, indem sie ungebucht erledigt oder an einen Lieferanten verlagert wird | Mit einer kurzen Umfrage vergleichen, wie lange die Berichterstattung nach Aussage der Beteiligten dauert; Lieferantenaufwand in die Überprüfung einbeziehen |
| Datenalter bei der Überprüfung | Das Dashboard kurz vor dem Termin aktualisieren, während die zugrunde liegenden Datensätze noch veraltet sind | Das Alter des neuesten Datensatzes im Quellsystem berichten und nicht nur den Aktualisierungszeitpunkt |
| Umsetzung von Verbesserungen | Maßnahmen mit der Begründung „nicht mehr relevant“ schließen, um den Prozentsatz zu erreichen, oder Maßnahmen in triviale Stücke zerlegen | Die Begründungen für geschlossene Maßnahmen jedes Quartal prüfen und verfolgen, ob sich die Messgröße bewegt hat, auf die die Maßnahme zielte |

Ein gesunder Befund ist eine Praxis, die sichtbar lebt. Kennzahlen kommen mit schriftlicher Begründung ins Register und verlassen es, Baselines sind frisch, Maßnahmen aus Reviews werden abgeschlossen oder ehrlich verworfen, und das Team verbringt mehr Zeit damit, auf die Daten zu reagieren, als sie zu erheben. Ein perfektes Ergebnis in jeder Zeile ist ein Anlass, die zugrunde liegenden Datensätze stichprobenartig zu prüfen, und kein Grund zum Feiern.

## Abwägungen: Vor- und Nachteile

| Wahl | Stärke | Schwäche |
| --- | --- | --- |
| Wenig messen | Geringe Kosten; geringes Manipulationsrisiko; hohes Vertrauen | Blinde Flecken; Entscheidungen beruhen auf Anekdoten |
| Viel messen | Breite Abdeckung; Frühwarnung an vielen Fronten | Aufmerksamkeit wird verwässert; Steuerung ist dünn; Erhebungskosten wachsen |
| Verbundene Sicht | Balanciert Geschwindigkeit und Stabilität; stützt gemeinsame Verantwortung | Braucht abgestimmte Definitionen über Teams hinweg und einen gemeinsamen Ort zum Hinschauen |
| Ziele für Kennzahlen | Gibt Richtung und Dringlichkeit | Lädt zur Manipulation ein; braucht eine gekoppelte Leitplanke |
| Kennzahlen ohne Ziele | Fördert ehrliche Diskussion | Kann zu Berichten verkommen, auf die niemand reagiert |

Die praktische Antwort ist eine kleine verbundene Menge, mit Zielen, die sparsam für gut verstandene Zustände eingesetzt werden, die Nutzer verlangt haben, etwa ein Service Level Objective. Alles andere ist eine Frage zur Diskussion. Das Ziel ist nicht, Urteilskraft aus Entscheidungen zu entfernen, sondern sie mit besseren Belegen zu versorgen.

## Fragen für die Diskussion im Team

**1. Welche Entscheidung haben wir letztes Quartal getroffen, die eine Zahl tatsächlich verändert hat?**
Bitten Sie die Gruppe, sich an konkrete Entscheidungen zu erinnern, und arbeiten Sie dann heraus, welche, wenn überhaupt, von Daten abhingen. Ist die Liste kurz, ist das eine nützliche Information: Es bedeutet, dass ein Großteil der heutigen Berichterstattung ihren Unterhalt nicht verdient. Die Moderation sollte die Kennzahlen festhalten, die Entscheidungen verändert haben, denn sie sind Kandidaten für Schutz. Fragen Sie dann, welche Entscheidungen nach Gefühl getroffen wurden und ob eine Zahl hätte helfen können.

**2. Welche unserer heutigen Zahlen beschreiben Aktivität und welche den Wert für Nutzer?**
Zeigen Sie das aktuelle Dashboard auf einem Bildschirm und markieren Sie jede Kennzahl als Aktivität (geschlossene Tickets, gelaufene Builds, abgeschlossene Punkte) oder Ergebnis (Nutzer, die arbeiten können, Probleme, die nicht wiederkehren). Streiten Sie nicht lange über Grenzfälle. Es geht darum, das Gleichgewicht zu sehen. Wo es nur Aktivität gibt, fragen Sie, welches Ergebnis die Aktivität hervorbringen soll und woran das Team es erkennen würde.

**3. Wo liegen Lieferungs- und Betriebszahlen heute, und sehen dieselben Personen beide?**
Verfolgen Sie, wo jede Kennzahlenfamilie gespeichert ist und wer sie überprüft. Teams sind oft überrascht, dass Change-Daten von einer Gruppe und Incident-Daten von einer anderen überprüft werden, ohne gemeinsames Meeting. Fragen Sie, welches Muster übersehen werden könnte, weil beide nie zusammen gesehen werden. Einigen Sie sich auf einen Ort oder ein Meeting, in dem sie sich treffen.

**4. Was messen wir nicht, obwohl wir es später bereuen würden, es nicht zu wissen?**
Laden Sie zu Sorgen statt zu Kennzahlen ein: „Ich fürchte, wir würden nicht bemerken, wenn …“ Arbeiten Sie von den Antworten zu Kandidatenmessgrößen und dann zu den günstigsten Daten, die sie zeigen würden. Halten Sie die Liste kurz.

**5. Was müssten wir über unsere Zahlen glauben, bevor wir sie der Führung zeigen?**
Besprechen Sie, was die Daten vertrauenswürdig macht: stabile Definitionen, stichprobenartige Genauigkeitsprüfungen und Einigkeit über Ausschlüsse. Listen Sie die Zweifel des Teams auf, auch kleine, etwa einen uneinheitlich verwendeten Status. Entscheiden Sie, welche Zweifel vor einer breiteren Weitergabe ausgeräumt sein müssen und welche zusammen mit der Zahl offengelegt werden können.

**6. Wenn wir nur drei Kennzahlen für das nächste Quartal behalten könnten, welche wären es und warum?**
Die Beschränkung erzwingt Prioritäten. Bitten Sie jede Person, drei aufzuschreiben, und vergleichen Sie dann. Achten Sie auf Einigkeit bei Ergebnissen und Uneinigkeit bei Aktivitätsmessgrößen. Fragen Sie, welche Leitplanke jede der drei braucht.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams profitieren am meisten von schnellem, lokalem Feedback: wie lange Arbeit wartet, wo sie sich staut, wie oft Changes Probleme verursachen. Sie sollten für sich eine reichhaltige Arbeitsansicht behalten und nach außen eine kleine Menge veröffentlichen. Teams sollten dem Sog widerstehen, das Outputvolumen als Stellvertreter für Wert zu messen, und Geschwindigkeitsmessgrößen von Anfang an mit Qualitätsmessgrößen koppeln (siehe Thema 2.1, Flussmaße).

### Service- und Betriebsteams

Betriebsteams leben bereits mit Zahlen: Mengen, Reaktions- und Lösungszeiten, Verfügbarkeit. Die Chance liegt darin, vom Berichten dessen, was geschah, zum Erklären des Warum überzugehen, über Wiederholung, Grundursachen und den Anteil ungeplanter Arbeit (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit). Sie sollten ihre Daten auch in Planungsgespräche mit Lieferteams einbringen, damit Zuverlässigkeitsarbeit mit Belegen statt mit Beschwerden begründet wird.

### Führung und Governance

Führungskräfte setzen Anreize, oft unbeabsichtigt, durch die Fragen, die sie stellen. Wer fragt „Warum ist das rot?“, bringt Teams bei, Rot zu verstecken. Wer fragt „Was haben Sie gelernt, und was brauchen Sie?“, bringt Teams bei, ehrlich zu berichten. Governance-Gremien sollten neben den Zahlen das Register, die Leitplanken und die Verbesserungsmaßnahmen anfordern und die Arbeit finanzieren, die eine schlechte Zahl offenlegt (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

### Kunden und Nutzer

Nutzer beurteilen den Service danach, ob er funktioniert und ob Probleme behoben werden, nicht nach internen Messgrößen. Ihre eigenen Worte in Umfragen, Beschwerden und Kommentaren gehören neben die operativen Zahlen als Kontrolle, ob das Team misst, was zählt (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler betreibt einen Service Desk, ein Betriebsteam und drei Produktteams, die den Shop, die Zahlungsabwicklung und die Auftragsabwicklung entwickeln. Die folgenden Zahlen sind illustrativ.

Die Führung fragt, warum Kunden sich über einen langsamen Checkout beschweren, obwohl die Lieferteams melden, täglich auszuliefern, und das Betriebsteam eine Verfügbarkeit von 99,9 Prozent meldet. Jede Gruppe hat nach ihren eigenen Messgrößen recht, und niemand hat sie zusammen angesehen. Die Leitung des Service-Managements schlägt eine einseitige verbundene Sicht für den Checkout-Service vor, aufgebaut aus Daten, die die Teams bereits erheben.

Die Sicht zeigt für die letzten zwölf Wochen vier Dinge. Die Change-Durchlaufzeit hat einen Median von 2 Tagen und ein 85. Perzentil von 9 Tagen. Die Change-Fehlerrate beträgt 8 Prozent. Am Checkout gab es 14 Incidents, von denen 6 eine gemeinsame Ursache haben, eine langsame Datenbankabfrage, die ein jüngstes Release eingeführt hat. Die mediane Wiederherstellungszeit beträgt 40 Minuten, doch die Seitenladezeit am 95. Perzentil ist über sechs Wochen gekrochen, ein Muster, das die Verfügbarkeitszahl nicht zeigt, weil der Service technisch oben blieb.

Die Gruppe sieht, was verborgen war. Verfügbarkeit wurde als „der Checkout antwortet“ gemessen, während Nutzer „der Checkout antwortet schnell genug“ erleben. Produktteam und Betriebsteam einigen sich darauf, einen Latenzindikator für den Checkout hinzuzufügen, mit einem Ziel, das die Produktverantwortliche nach der Lektüre von Kundenkommentaren festlegt, die wiederkehrende Incident-Ursache als Problemdatensatz mit Verantwortlichem zu behandeln und die verbundene Sicht alle zwei Wochen zu überprüfen. Sie halten eine Entscheidung fest: neue Checkout-Funktionen für eine Phase der kontinuierlichen Softwarelieferung zu pausieren, um die Abfrage zu beheben und der Release-Pipeline eine Leistungsprüfung hinzuzufügen.

Innerhalb eines Monats zeigt sich ein Manipulationsrisiko. Das Betriebsteam bemerkt, dass zwei der 14 Incidents als „Serviceanfragen“ eröffnet worden waren, weil die Anfragekategorie kein Lösungsziel trägt. Das Team erkennt, dass ein Ziel für Incidents Menschen dazu verleitet hatte, Grenzfälle als Anfragen einzustufen. Es nimmt den Anteil umkategorisierter Tickets in die Sicht auf und zieht jeden Monat zehn Tickets als Stichprobe. Nach der Änderung sinkt die Seitenladezeit am 95. Perzentil, wiederholte Incidents gehen zurück, und das Team behält die Sicht, weil sie eine Entscheidung verändert hat.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Kontinuierliche Auslieferung und kontinuierliche Einbindung der Stakeholder liefern einen steten Strom kleiner Änderungen und regelmäßiges Feedback, genau das, was eine Handvoll ehrlicher Zahlen braucht. Eine nützliche Praktik ist, in jedem regelmäßigen Verbesserungsgespräch dieselbe kleine Menge von Messgrößen zu überprüfen und zu fragen, was das Team als Nächstes ändern wird. Zu beachten ist, das Review nicht als Statusbericht zu behandeln: Eine Zahl ohne angehängte Entscheidung ist Aufwand.

### KI

KI-gestützte Arbeit kann Outputzahlen wie entworfene Tickets, vorgeschlagene Changes oder geschriebene Artikel steigern, ohne den Wert zu steigern, den ein Nutzer erhält. Koppeln Sie jede Mengenmessgröße für KI-gestützte Arbeit mit einer Qualitätsmessgröße, etwa dem Anteil der Entwürfe, die ein Mensch korrigieren musste, oder der Rate wiederholter Kontakte bei von KI beantworteten Anfragen. Zu beachten ist, dass eine Zahl zur KI-Nutzung Akzeptanz zeigt und keinen Nutzen, benennen Sie also, was sie nicht zeigen kann.

### Automatisierung

Erheben Sie Zeitstempel und Status automatisch aus dem führenden System, damit niemand Zahlen in einen Bericht tippt. Eine früh lohnende Praktik ist eine kleine automatische Prüfung, die fehlende Zeitstempel und unmögliche Abfolgen markiert. Zu beachten ist, dass auch Automatisierung gemessen werden muss: Eine Pipeline oder ein Bot, der still ausfällt, lässt jede nachgelagerte Zahl gesund aussehen.

### Analytik

Legen Sie Frage und Entscheidung fest, bevor Sie das Diagramm bauen, und zeigen Sie, wie viele Elemente hinter jeder Rate stehen. Verwenden Sie Perzentile und Trends statt einzelner Durchschnitte und markieren Sie jede Änderung der Definition im Diagramm. Zu beachten ist die Unsicherheit: Eine kleine Zahl von Elementen kann einen Prozentsatz weit bewegen, handeln Sie also nicht aufgrund eines einzigen Monats an Daten. Zu ITIL 5 im Besonderen siehe Thema 1.8, ITIL 5: Messung und Wertergebnisse.

## Branchenperspektive

**Startup.** Kleine Teams haben wenig Prozess und starkes Vertrauen, was hilft. Das Risiko ist, ein großes Unternehmens-Dashboard zu importieren, bevor es einen Bedarf gibt. Beginnen Sie mit zwei oder drei Messgrößen, die die Gründer wöchentlich lesen, etwa Durchlaufzeit für Änderungen, ein einfacher Zuverlässigkeitsindikator und direktes Nutzerfeedback, und schreiben Sie deren Definitionen auf.

**Kleinunternehmen.** Die Person, die die IT leitet, berichtet oft an die Inhaberin oder den Inhaber, und eine einzelne Kundenbeschwerde kann schwerer wiegen als jedes Diagramm. Halten Sie die Menge klein, nutzen Sie die Daten, die Ihre Werkzeuge ohnehin erzeugen, und bevorzugen Sie Gespräche mit Nutzern. Behandeln Sie von Anbietern gelieferte Berichte mit einer gewissen Vorsicht, denn Anbieter haben eigene Anreize.

**Großunternehmen.** Größe vervielfacht die Nachfrage nach vergleichbaren Zahlen und den Druck, sie zu manipulieren. Verwenden Sie eine kleine Standardmenge mit schriftlichen Definitionen, halten Sie Arbeitsansichten der Teams getrennt von Verdichtungen und vermeiden Sie den Vergleich von Teams, die sehr verschiedene Arten von Services betreiben. Ein Kennzahlenregister, gemeinsame Definitionen und ein Überprüfungsrhythmus werden unverzichtbar.

**Behörden und öffentlicher Sektor.** Vertragliche Servicelevel, Prüfungsanforderungen und Pflichten zur öffentlichen Berichterstattung können manche Messgrößen unverhandelbar machen. Behandeln Sie sie als Entwurfsvorgaben: Erfüllen Sie sie, zeigen Sie eine Leitplanke daneben und nennen Sie die verwendeten Definitionen. Öffentliche Rechenschaftspflicht erhöht die Kosten, schlechte Nachrichten zu verbergen, schaffen Sie also sichere interne Kanäle für offene Berichterstattung (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Das Motiv des Messens sind bessere Entscheidungen bei geringeren Kosten. Messung stützt die Priorisierung, zeigt, wo Verschwendung sitzt, warnt früh vor dem Nachlassen eines Services und liefert Belege für Investitionsanträge.

Die Kosten bestehen aus mehreren Teilen. Da sind Werkzeuge, die oft schon vorhanden sind: das Ticketsystem, der Issue-Tracker, die Versionsverwaltung und das Monitoring. Da ist Arbeitszeit, um Kennzahlen zu definieren, Sichten zu bauen und ein Register zu pflegen. Da sind die wiederkehrenden Kosten von Review-Meetings, die größten und lohnendsten. Die Gesamtbetriebskosten (TCO) einer Messpraxis umfassen auch die Kosten, auf Erkenntnisse zu reagieren, denn eine Erkenntnis ohne Budget für die Behebung hat wenig Ertrag.

Der Ertrag lässt sich schwer mit einer allgemeingültigen Zahl beziffern, und dieses Buch erfindet keine. Ein nützlicher Weg, den Business Case aufzubauen, ist, eigene Baselines vor und nach einer Änderung zu messen: Zeit für manuelle Berichterstattung, wiederholte Kontakte, wegen falscher Daten zurückgenommene Entscheidungen und spät entdeckte Überraschungen. Zu erwarten sind weniger Überraschungen, kürzere Debatten und eine bessere Übereinstimmung zwischen operativen Zahlen und Nutzererleben. Ein einfacher Vergleich des [Return on Investment](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) von eingesetztem gegen eingespartem Aufwand ist ein vernünftiger Ausgangspunkt, und Thema 7.7, Kapitalrendite und Business Case, behandelt die Methode.

## Anti-Muster und Fallstricke

- **Das Dashboard von allem.** Dutzende Diagramme, keine Verantwortlichen, keine Entscheidungen. Wählen Sie wenige, benennen Sie die Entscheidung, die jedes untermauert, und verabschieden Sie den Rest.
- **Einseitige Messung.** Geschwindigkeit ohne Stabilität oder Stabilität ohne Relevanz. Koppeln Sie eine Flussmessgröße mit einer Servicemessgröße.
- **Menschen messen.** Individuelle Rangfolgen verfälschen Daten und entmutigen Hilfe. Berichten Sie auf der Ebene von Teams und Services.
- **Ziele vor Baselines.** Ein Ziel ohne Ausgangswert ist geraten. Erfassen Sie zuerst eine Baseline und legen Sie Ziele nach mindestens einem Review-Zyklus fest.
- **Berichte ohne Maßnahmen.** Ein Review, das keine Änderungen bewirkt, bringt Menschen bei, es zu ignorieren. Beenden Sie jedes Review mit einer benannten Maßnahme, einem Verantwortlichen und einem Datum.
- **Stille Definitionsänderungen.** Trendlinien werden bedeutungslos. Protokollieren Sie jede Änderung mit Begründung und markieren Sie sie im Diagramm.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Zweck und Auswahl | Kennzahlen werden gewählt, weil das Werkzeug sie anbietet | Einige Kennzahlen haben einen erklärten Zweck | Jede berichtete Kennzahl hat eine schriftliche Frage und Entscheidung | Kennzahlenmenge wird an Entscheidungen gemessen überprüft und bei Nichtgebrauch verabschiedet | Kennzahlen werden mit Nutzern und Lieferanten rund um gemeinsame Ergebnisse gemeinsam entworfen |
| Verbundene Sicht von Agilität und ITIL | Liefer- und Servicedaten getrennt gehalten | Einige Teams sehen beide zusammen | Eine gemeinsame Sicht auf Fluss und Servicegesundheit je Service | Verbundene Sicht im Trend und mit Verbesserungsarbeit verknüpft | Team- und lieferantenübergreifende Sichten an Nutzerergebnisse gebunden |
| Baselines und Aufwand | Keine Baselines; manuelle Erhebung | Baselines für einige Services; gemischte Erhebung | Baselines für Kernmessgrößen erfasst; Erhebung überwiegend automatisch | Baselines nach Änderungen aufgefrischt; Aufwand verfolgt und gesenkt | Baselines und Definitionen laufend angepasst, wenn sich Services ändern |
| Nutzung in der Verbesserung | Zahlen werden notiert und vergessen | Gelegentliche Maßnahmen nach schlechten Wochen | Jedes Review endet mit benannten Maßnahmen | Umsetzung von Maßnahmen gemessen und finanziert | Verbesserung geht von allen aus und ist teamübergreifend sichtbar |

## Checkliste

- [ ] Jede berichtete Kennzahl hat eine schriftliche Frage und eine benannte Entscheidung, die sie untermauert.
- [ ] Das Publikum jeder Sicht ist benannt, und Teamsichten sind von Führungssichten getrennt.
- [ ] Mindestens eine Flussmessgröße und eine Servicemessgröße erscheinen auf derselben Seite.
- [ ] Für jede Kernmessgröße gibt es eine Baseline mit Zeitraum und Stichprobengröße.
- [ ] Jede Zeitmessgröße gibt an, wo die Uhr startet und stoppt.
- [ ] Jede Kennzahl hat eine daneben gezeigte Leitplanke.
- [ ] Der manuelle Erhebungsaufwand ist bekannt, und die größte manuelle Aufgabe wurde auf Automatisierung geprüft.
- [ ] Teams sehen ihre eigenen Daten vor der Führung.
- [ ] Keine individuelle Rangfolge, Vergütung oder Disziplinarmaßnahme ist an eine Kennzahl geknüpft.
- [ ] Jedes Review endet mit mindestens einer benannten Verbesserungsmaßnahme, einem Verantwortlichen und einem Datum.
- [ ] Mindestens eine Kennzahl wurde im vergangenen Jahr verabschiedet oder neu definiert.

## KI-Prompts

**Den Zweck jeder Kennzahl entwerfen.**

```text
We are [team name], responsible for [service or product]. Our current dashboard
shows these metrics: [list of metrics with their definitions]. For each one,
draft a one-sentence statement in the form "We measure X to decide Y", and mark
any metric where you cannot infer a decision from what I have given you. Suggest
questions I should answer to complete each statement. Do not invent benchmark
values or targets. List your assumptions.
```

**Liefer- und Servicesichten verbinden.**

```text
Our delivery measures are [list, with definitions and data sources] and our
service measures are [list, with definitions and data sources] for [service
name]. Propose a one-page layout that shows both together, pairs each speed
measure with a stability or quality measure, and notes the data each needs.
Identify any definitions that conflict between the two sets. Do not invent
values or thresholds. List your assumptions and anything you could not
determine.
```

**Eine Baseline planen.**

```text
We want to record a baseline for [metric name] for [service or team] before
changing [practice or tool]. The data comes from [source]. Propose how long to
collect data, what summary statistics to record (including percentiles), what
to exclude and why, and how to note any changes in how work was counted during
the period. Do not assume values. List your assumptions and the data quality
risks you see.
```

**Ein Review vorbereiten, das zu Maßnahmen führt.**

```text
We hold a [weekly, monthly, or quarterly] review of [metric set] with
[audience]. Draft an agenda and a short set of facilitation questions that
move from reading the numbers to choosing one or two improvement actions, each
with an owner and a date. Include a prompt to check for gaming against each
metric's guardrail. Do not invent data. List your assumptions about the group
and its culture.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine in Erwägung gezogene Kennzahl und deren gekoppelte Leitplanke behandelt.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein neues oder überarbeitetes Kennzahlenthema Zweckaussage, Manipulationsvektor und Leitplanke beibehält.

## Wichtigste Erkenntnisse

- Messen Sie, um zu sehen, zu entscheiden, zu lernen und Rechenschaft abzulegen; eine Zahl, die keines davon leistet, ist Aufwand ohne Nutzen.
- Agilität liefert schnelles, lokales Feedback zum Fluss; ITIL liefert gemeinsame Sichten auf Zuverlässigkeit und Wert auf Serviceebene. Lesen Sie beide zusammen.
- Nichts zu messen überlässt Entscheidungen der Anekdote, und das Falsche zu messen lenkt Aufwand mit falscher Zuversicht.
- Beginnen Sie mit wenigen Kennzahlen, jede mit schriftlichem Zweck, Baseline und Leitplanke.
- Beschreiben Sie Teams und Services, nie Einzelpersonen, und lassen Sie das Team seine Daten zuerst sehen.
- Schließen Sie den Kreis: Ein Review, das keine Maßnahme hervorbringt, verschwendet die Daten.

## Quellen und weiterführende Literatur

1. Beck, K., et al., *Manifesto for Agile Software Development*, 2001, https://agilemanifesto.org/.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
5. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
11. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
12. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
13. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
14. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
