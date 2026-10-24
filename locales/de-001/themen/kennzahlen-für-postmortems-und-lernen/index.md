# Kennzahlen für Postmortems und Lernen

**Ein Review, das geschrieben, abgelegt und vergessen wird, hat niemandem etwas beigebracht. Messen Sie deshalb, ob Reviews stattfinden, ob sie gut sind, ob ihre Maßnahmen abgeschlossen werden und ob dieselben Ursachen aufhören wiederzukehren, und halten Sie die ganze Praxis schuldfrei, damit Menschen weiter die Wahrheit sagen.**

## Überblick und Motivation

Jeder Service versagt manchmal. Was ein Team, das stetig besser wird, von einem Team unterscheidet, das seine schlimmste Woche wiederholt, ist das, was in den Tagen nach dem Versagen geschieht. Ein [Postmortem](https://en.wikipedia.org/wiki/Postmortem_documentation) ist ein schriftlicher Bericht über einen Incident oder Beinahe-Vorfall: was geschah, wie er erkannt und bearbeitet wurde, welche Bedingungen ihn möglich machten und was das Team ändern wird. ITIL nennt die Tätigkeit ein Post-Incident-Review, und dieses Thema verwendet die beiden Namen austauschbar. Eine regelmäßige Team-Reflexion ist ein enger Verwandter, der gewöhnliche Arbeit statt eines Ausfalls betrachtet.

Dieses Thema behandelt die Messgrößen, die sagen, ob diese Lernschleife funktioniert. Es stellt vier Fragen. Finden die Reviews, die stattfinden sollten, tatsächlich statt? Sind sie gut genug, um etwas Echtes zu finden? Werden die Maßnahmen, die sie erzeugen, abgeschlossen? Und kehrt dieselbe Ursache trotzdem immer wieder? Eine fünfte Frage läuft unter den anderen: Fühlen sich Menschen sicher genug, zu beschreiben, was wirklich geschah?

Das Thema sitzt zwischen zwei Nachbarn und vermeidet es, sie zu wiederholen. Die Major-Incident-Kennzahlen (siehe Thema 3.4, Kennzahlen für Major Incidents) messen die Rechtzeitigkeit des Reviews und die Umsetzung seiner Maßnahmen für erklärte Major Incidents und sind in diesem engen Rahmen die Heimat dieser beiden Messgrößen. Die Kennzahlen für das Problemmanagement (siehe Thema 4.1, Kennzahlen für das Problemmanagement) besitzen den Problemdatensatz, den bekannten Fehler und die Zeit bis zur dauerhaften Korrektur. Dieses Thema weitet den Blick auf jeden Schweregrad von Incidents, auf Beinahe-Vorfälle und auf Team-Retrospektiven, und es besitzt die Qualität des Lernens selbst: Abdeckung, Tiefe, Schließen von Maßnahmen über alle Quellen, Wiederkehr von Ursachen und die schuldfreien Signale, die die Daten ehrlich halten.

### In diesem Thema verwendete Begriffe

- **Postmortem oder Post-Incident-Review:** eine strukturierte, schuldfreie Untersuchung eines Incidents nach der Wiederherstellung des Services, die in einem schriftlichen Datensatz endet.
- **Beinahe-Vorfall (Near Miss):** ein Ereignis, das einen Incident oder Schaden hätte verursachen können, es aber nicht tat, zum Beispiel ein in einer Testumgebung aufgefangenes fehlgeschlagenes Deployment oder ein Alarm, der Minuten bevor Nutzer es bemerkten auslöste.
- **Maßnahme (Action Item):** eine konkrete Änderung mit einem benannten zuständigen Team, einem Fälligkeitsdatum und einer Möglichkeit zu erkennen, wann sie erledigt ist.
- **Beitragender Faktor:** eine Bedingung, die den Incident möglich oder schlimmer machte. Die meisten Incidents haben mehrere. Eine einzelne „Grundursache“ ist oft eine Vereinfachung, und die [Ursachenanalyse](https://en.wikipedia.org/wiki/Root_cause_analysis) wird am besten als Suche nach Bedingungen behandelt, nicht nach einem Schuldigen.
- **Ursachenklasse:** ein stabiles Etikett aus einer kurzen, vereinbarten Liste (zum Beispiel „Kapazitätsgrenze“, „Konfigurationsdrift“, „fehlendes Monitoring“, „unklare Verantwortung“), genutzt, um Wiederkehr zu erkennen. Sie beschreibt eine Systembedingung, nie eine Person.
- **Schuldfrei:** ein Review-Stil, der fragt, wie das System einer vernünftigen Person erlaubte, so zu handeln, wie sie es tat, und nicht fragt, wer zu bestrafen ist. Es ist eine Praxis und an die Idee einer [Just Culture](https://en.wikipedia.org/wiki/Just_culture) gebunden, in der ehrliche Fehler als Lernen behandelt werden und rücksichtsloses Handeln weiter gesondert bearbeitet wird.
- **Information Technology Infrastructure Library (ITIL):** das weit verbreitete Rahmenwerk für IT-Service-Management (ITSM). Dieses Thema bezieht sich auf Praktiken, wie sie in ITIL 4 (2019) beschrieben sind, und das Buch insgesamt ist auf Oktober 2026 datiert. Siehe [ITIL](https://en.wikipedia.org/wiki/ITIL).

### Wie sich agile und ITIL-Sicht unterscheiden

ITIL liefert Struktur. In ITIL 4 stellt das Incident-Management den Service wieder her, das Problemmanagement verringert Wahrscheinlichkeit und Auswirkung von Incidents, indem es Ursachen findet und steuert, und die kontinuierliche Verbesserung verwandelt das Gelernte in finanzierte Veränderung. Das Review ist das Scharnier zwischen den ersten beiden und der dritten. ITIL fragt tendenziell, ob das Review stattfand, ob ein Problemdatensatz eröffnet wurde, wo einer angebracht war, und ob die Verbesserung registriert wurde.

Die agile Tradition und die [Site-Reliability-Engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering)-Tradition liefern Gewohnheiten. Reviews sind schuldfrei, kurz, für Leser über das Team hinaus geschrieben und breit geteilt. Regelmäßige Team-Reflexion, eine Gewohnheit kontinuierlicher Verbesserung, fragt, was als Nächstes zu ändern ist, und die [agile](https://en.wikipedia.org/wiki/Agile_software_development) Vorliebe für kleine, häufige Anpassung ersetzt das eine große Verbesserungsprogramm. Googles Buch *Site Reliability Engineering* widmet der Postmortem-Kultur ein Kapitel und argumentiert, dass ein Review-Prozess nur so gut ist wie die Kultur darum.

Zusammen genutzt sind die beiden Sichten stark. ITIL gibt Ihnen Abdeckungsregeln und einen Ort, an dem die Maßnahme lebt. Die agilen und SRE-Gewohnheiten geben Ehrlichkeit und Geschwindigkeit. Zusammen gemessen zeigen sie, ob die Schleife sich schließt.

## Leitprinzipien

- **Lernen ist das Produkt, nicht das Dokument.** Ein Review ist gelungen, wenn sich etwas im System, im Prozess oder im gemeinsamen Verständnis ändert. Zählen Sie die Veränderung, nicht den Papierkram.
- **Schuldfreiheit ist Voraussetzung guter Daten.** Fürchten Menschen Schuldzuweisung, ist die Zeitleiste dünn, sind die beitragenden Faktoren ordentlich geglättet, und derselbe Incident kehrt wieder. Schützen Sie Offenheit, bevor Sie irgendetwas anderes messen.
- **Umsetzung und Wiederkehr messen, nicht Menge.** Die Zahl der Reviews sagt wenig. Der Anteil abgeschlossener Maßnahmen und der Anteil der Ursachen, die weg bleiben, sagen sehr viel.
- **Die Kennzahlen auf Team- und Systemebene halten.** Ein Review handelt von Bedingungen. Zählen Sie nie Reviews, Maßnahmen oder Fehler pro Person und nutzen Sie diese Zahlen nie in Leistungsgesprächen.
- **Das Review angemessen dimensionieren.** Nicht jedes Ereignis verdient ein langes Dokument. Setzen Sie Auslöser nach Auswirkung und Lernwert und lassen Sie ein kleines Ereignis ein kurzes Review bekommen.
- **Maßnahmen ehrlich konkurrieren lassen.** Eine Maßnahme ist Arbeit. Sie gehört in denselben Backlog wie andere Arbeit, wird gegen sie gewichtet und darf mit erfasstem Grund abgelehnt werden.
- **Die Reviews lesen.** Zahlen verorten das Problem. Ein Mensch, der eine Stichprobe liest, sagt Ihnen, ob die Reviews etwas taugen.

## Kennzahlendefinitionen

Die folgenden Kennzahlen beschreiben die Lernschleife für einen Service oder eine Gruppe von Teams. Jede nennt, was gezählt wird, wo Uhren starten und stoppen und was ausgeschlossen ist. Zeitmessgrößen sollten als Median und hohes Perzentil (zum Beispiel das 85.) mit dem Alter des ältesten offenen Elements gezeigt werden, nicht als Durchschnitt (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Review-Abdeckung | Anteil der qualifizierenden Ereignisse, die ein abgeschlossenes Review erhielten | Qualifizierende Ereignisse mit einem innerhalb des vereinbarten Fensters veröffentlichten Review / im Zeitraum geschlossene qualifizierende Ereignisse. Qualifizierende Ereignisse sind die, die die schriftlichen Auslöser erfüllen. Ereignisse innerhalb des Fensters, die am Periodenende noch offen sind, sind ausgeschlossen. | Prozent | Incident-Datensätze des ITSM-Werkzeugs, verbunden mit dem Review-Repository | Incident-Management; Problemmanagement | Regelmäßige Team-Reflexion; Arbeitsvereinbarungen des Teams | Monatlich |
| Review-Qualitätswert | Ob ein veröffentlichtes Review einen kurzen schriftlichen Standard erfüllt | Reviews einer Stichprobe, die mindestens [vereinbarte Zahl] der Checklistenpunkte erfüllen / Reviews der Stichprobe. Die Stichprobe ist eine feste Zahl zufällig gezogener Reviews je Quartal, bewertet von jemandem außerhalb des zuständigen Teams. | Prozent | Vierteljährliche Stichprobe des Review-Repositorys mit einem Bewertungsbogen | Kontinuierliche Verbesserung; Problemmanagement | Definition of Done für ein Review | Vierteljährlich |
| Umsetzungsrate der Maßnahmen | Anteil der Review-Maßnahmen, die bis zu ihrem Fälligkeitsdatum abgeschlossen werden | Bis zum Fälligkeitsdatum abgeschlossene oder förmlich (mit Grund) abgelehnte Maßnahmen / im Zeitraum fällige Maßnahmen. Die Uhr startet, wenn das Review veröffentlicht wird, und stoppt, wenn das zuständige Team die Maßnahme als erledigt markiert und ein Prüfer es bestätigt. Als „wird nicht getan“ geschlossene Maßnahmen werden gesondert gezählt und berichtet. | Prozent | Team-Backlog oder ITSM-Verbesserungsregister, mit dem Review verknüpft | Kontinuierliche Verbesserung; Problemmanagement | Team-Backlog; Verbesserungsmaßnahmen | Monatlich |
| Alter offener Maßnahmen | Alter der noch offenen Review-Maßnahmen | Für jede offene Maßnahme heute minus Veröffentlichungsdatum ihres Reviews. Median, 85. Perzentil und das älteste berichten. | Tage | Team-Backlog oder Verbesserungsregister | Kontinuierliche Verbesserung | Alter von Arbeitselementen; alternde Arbeit in Bearbeitung | Monatlich |
| Wiederkehrrate von Ursachen | Anteil der Ereignisse, deren Ursachenklasse einem früheren Ereignis desselben Services entspricht | Ereignisse im Zeitraum, deren primäre Ursachenklasse der eines in den vorangegangenen zwölf Monaten geschlossenen Reviews desselben Services entspricht / Ereignisse mit erfasster Ursachenklasse im Zeitraum. Ereignisse ohne erfasste Ursachenklasse sind ausgeschlossen und gesondert gezählt. | Prozent | Ursachenklassenfeld des Review-Repositorys, verbunden mit Incident-Datensätzen | Problemmanagement; Incident-Management | Analyse entwichener Fehler; Retrospektiv-Themen | Vierteljährlich |
| Meldequote von Beinahe-Vorfällen | Menge der Beinahe-Vorfälle und schwachen Signale, die Menschen sich entscheiden zu melden | Im Zeitraum erfasste Beinahe-Vorfälle / aktive Services, als Trend je Service gezeigt und nie je Person. Die Rate soll in einem gesunden Programm früh steigen und dann abflachen. | Anzahl je Service | Beinahe-Vorfall-Protokoll oder ein gekennzeichnetes Feld im Issue-Tracker | Incident-Management; Risikomanagement | Team-Gesundheitscheck; Hindernis-Board | Monatlich |
| Lernreichweite | Wie weit ein Review über das Team hinausreist, das es schrieb | Reviews, die außerhalb des zuständigen Teams vorgestellt oder besprochen wurden (in einem gemeinsamen Forum, einer teamübergreifenden Sitzung oder einer dokumentierten Lektüre durch ein abhängiges Team) innerhalb von [vereinbarte Zahl] Tagen nach Veröffentlichung / im Zeitraum veröffentlichte Reviews | Prozent | Forum- oder Meeting-Aufzeichnungen und das Review-Repository | Kontinuierliche Verbesserung; Wissensmanagement | Stakeholder-Review; Praxisgemeinschaften | Vierteljährlich |
| Übertrag von Retrospektiv-Maßnahmen | Anteil der Maßnahmen aus Team-Retrospektiven, die bis zur nächsten Retrospektive abgeschlossen waren | Vor der nächsten Retrospektive abgeschlossene Retrospektiv-Maßnahmen / bei der vorigen vereinbarte Retrospektiv-Maßnahmen. Bewusst mit Grund fallen gelassene Maßnahmen werden aus beiden Zählungen entfernt. | Prozent | Retrospektiv-Notizen oder Board, im Team-Backlog geführt | Kontinuierliche Verbesserung | Regelmäßige Team-Reflexion | Je Review-Zeitraum, vierteljährlich überprüft |
| Puls „sicher zu sprechen“ | Ob Menschen glauben, Fehler ohne Schuldzuweisung beschreiben zu können | Anteil der Antworten auf oder über [vereinbarter Stufe] auf einem kurzen anonymen Fragensatz (zum Beispiel „Ich kann in einem Review einen Fehler ohne Angst vor Schuldzuweisung beschreiben“) / erhaltene Antworten. Der Puls wird nur für Gruppen berichtet, die groß genug sind, Anonymität zu schützen. | Prozent | Anonyme Pulsumfrage | Kontinuierliche Verbesserung; organisatorischer Wandel | Team-Gesundheitscheck; Check der psychologischen Sicherheit | Vierteljährlich |

Ein Review ist „veröffentlicht“, wenn es für die vorgesehenen Leser sichtbar ist, nicht als Entwurf gespeichert. Eine Ursachenklasse wird von der Review-Gruppe aus dem Review selbst, aus einer kurzen vereinbarten Liste erfasst, nie von dem, der das Ticket geschlossen hat.

## Empfehlungen

### Entscheiden, was ein Review verdient

**1. Schreiben Sie die Auslöser auf und veröffentlichen Sie sie.** Eine Regel wie „jeder Major Incident, jeder Incident der obersten zwei Schweregrade, jedes Ereignis mit Verlust von Kundendaten und jeder Beinahe-Vorfall, den das Team für lehrreich hält“ beseitigt Streit und macht die Abdeckung messbar. Ohne schriftliche Auslöser folgen Reviews Stimmung und Arbeitslast, und die Abdeckungszahl bedeutet nichts.

**2. Dimensionieren Sie das Review nach dem Ereignis.** Ein kleines Ereignis kann ein halbseitiges Review bekommen, in dreißig Minuten geschrieben, während ein Major Incident eine vollständige Zeitleiste und eine moderierte Sitzung verdienen kann. Eine leichte Spur hält die Abdeckung hoch, ohne die Praxis zur Last zu machen.

### Qualität durch Lesen beurteilen

**3. Ziehen und lesen Sie jedes Quartal Stichproben von Reviews.** Ziehen Sie eine kleine Zufallsstichprobe und lassen Sie jemanden außerhalb des zuständigen Teams jedes gegen eine kurze Checkliste lesen. Nützliche Punkte sind eine Zeitleiste, die Entscheidungen und die damals verfügbare Information zeigt, mehr als ein beitragender Faktor, eine Beschreibung dessen, was gut lief, Maßnahmen mit Eignern und Daten und eine Sprache, die das System statt des Einzelnen beschreibt. Berichten Sie den Anteil, der den Standard erfüllt, und geben Sie die Befunde als Coaching an die Schreibenden zurück.

**4. Lehren Sie die Fertigkeit des Reviewens.** Der [Rückschaufehler](https://en.wikipedia.org/wiki/Hindsight_bias) lässt Ereignisse im Nachhinein offensichtlich wirken und drängt Autoren zu „jemand hätte es bemerken sollen“. Bitten Sie Moderierende, zu rekonstruieren, was Menschen in jedem Moment wussten, und nutzen Sie die [fünf Warum](https://en.wikipedia.org/wiki/Five_whys) als Anstoß für Fragen, nicht als Rezept für eine einzelne Antwort.

### Maßnahmen zum Abschluss bringen

**5. Legen Sie Maßnahmen in den echten Backlog.** Eine Maßnahme, die nur in einem Review-Dokument lebt, ist für die Planung unsichtbar. Legen Sie ein Arbeitselement im Tracker des zuständigen Teams an, verknüpfen Sie es mit dem Review und lassen Sie es wie jede andere Arbeit um Kapazität konkurrieren. Berichten Sie die Umsetzung nach Team und Service, damit eine blockierte Maßnahme für die Menschen sichtbar wird, die sie entblocken können.

**6. Erlauben Sie ein ehrliches „wird nicht getan“ und halten Sie den Grund fest.** Manche Maßnahmen erweisen sich als zu teuer oder nicht mehr relevant. Sie mit genanntem Grund zu schließen ist gesünder, als sie ein Jahr offen zu lassen oder als erledigt zu markieren, ohne sie getan zu haben. Berichten Sie den abgelehnten Anteil, denn ein sehr hoher Anteil deutet darauf hin, dass der Review-Prozess Maßnahmen vorschlägt, die niemand finanziert.

**7. Verfolgen Sie das Alter offener Maßnahmen ebenso wie die Umsetzungsrate.** Das 85. Perzentil des Alters offener Maßnahmen und die älteste offene Maßnahme zeigen, was festhängt. Überprüfen Sie die ältesten in dem Meeting, das die Zuverlässigkeit des Services überprüft.

### Auf Wiederholungen achten

**8. Führen Sie eine kurze Liste von Ursachenklassen und kennzeichnen Sie jedes Review.** Eine Liste von acht bis fünfzehn Klassen genügt. Überprüfen Sie die Liste, wenn mehr als ein kleiner Anteil der Ereignisse in eine Klasse „sonstige“ fällt. Die Kennzeichnung lässt Sie die Frage „haben wir das schon einmal gesehen?“ mit Daten beantworten und speist das Problemmanagement mit Mustern, die kein einzelnes Review zeigt (siehe Thema 4.1, Kennzahlen für das Problemmanagement, und Thema 4.6, Technische Schulden und bekannte Fehler).

**9. Behandeln Sie Wiederkehr als Signal über die Maßnahme, nicht über die Menschen.** Kehrt eine Ursachenklasse zurück, fragen Sie, ob die früheren Maßnahmen abgeschlossen wurden, ob es die richtigen Maßnahmen waren und ob die Klasse zu breit ist. Wiederkehr, nachdem alle Maßnahmen geschlossen waren, bedeutet, dass die Maßnahmen nicht wirkten, was eine nützliche Nachricht ist.

### Ehrlichkeit schützen

**10. Halten Sie Reviews schuldfrei und machen Sie es sichtbar.** Halten Sie in der Vorlage fest, dass das Review Bedingungen und Entscheidungen beschreibt und keine Schuld zuweist, und lassen Sie Führungskräfte Autoren für Offenheit danken. [Psychologische Sicherheit](https://en.wikipedia.org/wiki/Psychological_safety) ist in Amy Edmondsons Forschung zu Arbeitsteams der gemeinsame Glaube, dass das Team für zwischenmenschliches Risiko sicher ist (siehe Thema 9.2, Kennzahlen für Zufriedenheit und Wohlbefinden).

**11. Belohnen Sie Meldungen von Beinahe-Vorfällen und lesen Sie eine steigende Zahl zunächst als gute Nachricht.** Ein Team, das beginnt, Beinahe-Vorfälle zu melden, sieht die Zahl steigen, weil die Ereignisse immer geschahen. Sagen Sie es im Voraus, verfolgen Sie den Anteil der Beinahe-Vorfälle, die eine Änderung bewirkten, und veröffentlichen Sie die Geschichten mit Zustimmung des Teams.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Review-Abdeckung | Die Auslöser verengen; den Schweregrad herabstufen, damit Ereignisse außerhalb fallen; ein einzeiliges „Review“ ablegen, um das Kästchen anzukreuzen | Review-Qualitätswert; Zahlen der Incident-Schweregrade mit der kundengemeldeten Auswirkung vergleichen; Herabstufungen prüfen |
| Review-Qualitätswert | Mit Textbausteinen zur Checkliste schreiben; durch das zuständige Team bewerten; eine vorhersagbare Stichprobe | Externer Bewerter; Zufallsstichprobe; jedes Quartal zwei Reviews laut lesen; verfolgen, ob Maßnahmen aus hoch bewerteten Reviews abgeschlossen werden |
| Umsetzungsrate der Maßnahmen | Fälligkeitsdaten weit hinausschieben; Maßnahmen in triviale Stücke zerlegen; Maßnahmen ohne Verifizierung schließen; „wird nicht getan“ erklären, um die Liste zu leeren | Alter offener Maßnahmen; abgelehnter Anteil mit Gründen; Bestätigung durch einen Prüfer, dass die Änderung wirkt; Wiederkehrrate von Ursachen |
| Alter offener Maßnahmen | Eine Maßnahme schließen und wieder eröffnen oder neu anlegen, um ihr Alter zurückzusetzen; Maßnahmen in eine gesonderte „Ideen“-Liste verschieben | Neue Maßnahmen mit dem ursprünglichen Review verknüpfen und das erste Datum behalten; Zahl der in Ideen verschobenen Maßnahmen |
| Wiederkehrrate von Ursachen | Vage oder ständig wechselnde Ursachenklassen erfassen, sodass nichts passt; eine breite Klasse „sonstige“ nutzen; eine Wiederholung einer anderen Klasse zuordnen | Anteil der Ereignisse in „sonstige“; periodisches erneutes Lesen von Reviews nach Klasse; Überprüfung der Klassenliste selbst |
| Meldequote von Beinahe-Vorfällen | Um Meldungen bitten, nur um eine Zahl zu erreichen; triviale Ereignisse erfassen; oder, in der anderen Richtung, die Zahl als Versagen lesen und Meldungen unterdrücken | Anteil der Beinahe-Vorfälle, die zu einer Änderung führten; keine Ziele für die Zahl; Feedback aus dem Puls „sicher zu sprechen“ |
| Lernreichweite | Namen auf einen Verteiler setzen; in schlecht besuchten Sitzungen präsentieren; einen Link als Lektüre zählen | Teilnahme oder tatsächliche Diskussionsnotizen; abhängige Teams fragen, was sie nach dem letzten Review geändert haben |
| Übertrag von Retrospektiv-Maßnahmen | Nur triviale, leicht abzuschließende Maßnahmen vereinbaren; die Retrospektive überspringen; Elemente als abgeschlossen markieren | Wirkung der Maßnahmen, vom Team beurteilt; Abhaltequote von Retrospektiven; ob dasselbe Thema mehrere Wochen auftaucht |
| Puls „sicher zu sprechen“ | Befragte unter Druck setzen; nur die Selbstsicheren befragen; einen Durchschnitt berichten, der eine niedrig bewertende Gruppe verbirgt | Rücklaufquote und Zusammensetzung der Antwortenden; Mindestgruppengröße; offene Kommentare vollständig gelesen; ob sich die Review-Sprache ändert |

Ein gesunder Befund zeigt Reviews für die Ereignisse, auf die es ankommt, einen Qualitätsstandard, den die meisten erfüllen, Maßnahmen, die abgeschlossen oder ehrlich abgelehnt werden, eine Handvoll alter Maßnahmen, die Führungskräfte benennen können, Ursachenklassen, die nach ihrer Bearbeitung seltener werden, und eine Zahl von Beinahe-Vorfällen, die stieg und dann stetig wurde. Der Puls bleibt stabil oder verbessert sich, wenn ein harter Incident geschieht. Ein zu sauberes Muster ist selbst ein Zeichen, eine Stichprobe zu lesen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Jeden Incident überprüfen | Vollständige Abdeckung; kein Streit über Auslöser | Schwer; Reviews werden flach; Teams lehnen den Prozess ab |
| Review nach schriftlichen Auslösern | Konzentriert Aufwand auf Auswirkung und Lernwert | Auslöser brauchen Pflege; Grenzfälle rutschen durch |
| Kennzeichnung der Ursachenklasse | Findet Muster über Reviews hinweg | Klassen sind eine Vereinfachung; echte Ursachen sind oft mehrere Dinge zugleich |
| Anonymer Puls zur Sicherheit | Ehrliches Signal zu einer heiklen Frage | Grob; kleine Teams können identifizierbar sein; Umfragemüdigkeit |

Die Antwort in Worten ist, die Schleife kurz und die Zahlen wenige zu halten: schriftliche Auslöser, eine kleine Qualitätsstichprobe, ein Maßnahmen-Tracker und eine Liste von Ursachenklassen, mit dem Sicherheitspuls ergänzt, sobald das Team dem Rest vertraut. Keine Messgröße hier beweist, dass Lernen geschehen ist. Zusammen zeigen sie, ob die Bedingungen dafür vorhanden sind.

## Fragen für die Diskussion im Team

**1. Welcher unserer letzten fünf Incidents erhielt ein Review, und hat jemand deshalb etwas geändert?**
Beginnen Sie bei der Incident-Liste, nicht beim Review-Ordner, damit fehlende Reviews sichtbar werden. Fragen Sie bei jedem Review, was heute im System oder im Prozess anders ist. Lautet die Antwort „nichts“, fragen Sie, warum das Review abgehalten wurde und wer es las. Die Moderation sollte die Antworten ohne Wertung festhalten, denn sie zeigen, ob die Praxis Veränderung oder Papierkram erzeugt.

**2. Was würde es jemandem hier schwerer machen, in einem Review die Wahrheit zu sagen?**
Bitten Sie um konkrete Beispiele: die Reaktion einer Führungskraft, eine Leistungsbeurteilung, eine Kundeneskalation, ein Ton in einer E-Mail. Laden Sie Menschen ein, Antworten zuerst anonym aufzuschreiben. Suchen Sie nach Bedingungen, die sich ändern lassen, etwa wer teilnimmt, wer liest und was Führungskräfte laut sagen. Das ist das Gespräch, das jede andere Zahl im Thema schützt.

**3. Welche Maßnahmen sind am längsten offen, und was hält sie auf?**
Zeigen Sie die ältesten fünf. Fragen Sie bei jeder, ob die Maßnahme noch richtig ist, ob sie einen Eigner mit Kapazität hat und ob sie getan, verschoben oder abgelehnt werden sollte. Halten Sie den Fokus auf dem Arbeitssystem und nicht auf dem Eigner. Einigen Sie sich vor Ende der Sitzung auf eine Entscheidung für jede.

**4. Wann kehrte dieselbe Art Problem zurück, und was sagt das über die frühere Korrektur?**
Nutzen Sie die Etiketten der Ursachenklassen, um eine Wiederholung zu finden, und lesen Sie das frühere Review und seine Maßnahmen. Fragen Sie, ob die Maßnahmen abgeschlossen wurden, ob sie die beitragenden Faktoren ansprachen und ob die Klasse zu breit gezogen war. Ziel ist eine bessere Maßnahme, keine Erklärung.

**5. Melden wir Beinahe-Vorfälle, und was geschieht, wenn jemand es tut?**
Bitten Sie um ein jüngeres Beispiel und verfolgen Sie, was folgte. Folgte nichts, fragen Sie, warum Menschen erneut melden sollten. Ist die Zahl niedrig, fragen Sie, was Menschen fürchten. Die Moderation sollte erklären, dass eine steigende Zahl anfangs zu erwarten ist, und sich darauf einigen, wie das Team auf die nächste Meldung reagiert, damit sich Melden lohnt.

**6. Woher wüssten wir, dass ein Review gut war, wenn wir keine Zahlen ansehen könnten?**
Das bittet das Team, Qualität mit eigenen Worten zu beschreiben. Verbreitete Antworten sind „jemand außerhalb des Teams hat etwas gelernt“, „die Korrektur hielt“ und „der Autor hatte keine Angst“. Machen Sie aus den Antworten die Checkliste für die vierteljährliche Stichprobe und überprüfen Sie sie nach zwei Quartalen.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams schreiben viele Reviews und tragen die meisten Maßnahmen, sie spüren die Kosten eines unbeholfenen Prozesses also zuerst. Sie profitieren von kurzen Vorlagen, einer klaren Auslöserregel und einer sichtbaren Verknüpfung zwischen einer Maßnahme und einem Backlog-Element des Teams. Regelmäßige Team-Reflexion verdient dieselbe Disziplin der Umsetzung wie ein Incident-Review, und ein Team, das seine Retrospektiv-Maßnahmen abschließt, übt dieselbe Gewohnheit im Kleinen. Hüten Sie sich davor, dass Maßnahmen vom Funktionsdruck herausgequetscht werden, und bringen Sie diese Abwägung offen zum Product Owner (siehe Thema 2.5, Kennzahlen für Lieferprognosen und Planung).

### Service- und Betriebsteams

Betriebsteams halten die Belege (Zeitleisten, Alarme, Chat-Protokolle) und sind am besten platziert, Ursachenklassen konsistent zu kennzeichnen und eine Wiederholung zu bemerken, bevor sie zum Ausfall wird. Sie brauchen geschützte Zeit zum Schreiben, denn am Ende einer langen Schicht geschriebene Reviews sind dünn. Verknüpfen Sie jedes Review mit einem Problemdatensatz, den es speist (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents).

### Führung und Governance

Führungskräfte setzen den Ton jedes Reviews durch das, was sie danach fragen. „Wer hat das getan?“ beendet ehrliche Reviews, und „was haben wir gelernt, und was ändern wir?“ lädt sie ein. Governance-Gremien sollten Abdeckung, Qualität, Alter von Maßnahmen und Wiederkehr im Zuverlässigkeits-Review erwarten, Maßnahmen finanzieren, die Investition brauchen, und nie Teams nach der Zahl ihrer Incidents oder Reviews vergleichen.

### Kunden und Nutzer

Kunden sehen das Review selten, spüren aber sein Ergebnis: den Fehler, der aufhört wiederzukehren, und einen ehrlichen Bericht, wenn er es doch tut. Wo Verträge es erlauben, veröffentlichen Sie nach einem bedeutenden Incident eine Zusammenfassung in einfacher Sprache (siehe Thema 3.4, Kennzahlen für Major Incidents). Wiederholter Kontakt zum selben Anliegen ist das kundenseitige Signal, dass das Lernen nicht angekommen ist (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler betreibt einen kundenseitigen Shop, einen Zahlungsservice und eine interne Bestandsplattform. Fünf Produktteams bauen und betreiben diese Services, und eine kleine Service-Management-Gruppe führt den Incident- und Problemprozess. Die Zahlen in diesem Beispiel sind illustrativ.

In einem Quartal hat der Händler 41 Incidents in den obersten zwei Schweregraden. Schriftliche Auslöser qualifizieren alle für ein Review, und 36 Reviews werden innerhalb von zehn Arbeitstagen veröffentlicht, die Review-Abdeckung beträgt also etwa 88 Prozent. Die Führung ist zufrieden. Die Service-Management-Gruppe zieht eine Zufallsstichprobe von acht Reviews, bittet ein Team aus einem anderen Produktbereich, sie zu bewerten, und stellt fest, dass nur drei den vereinbarten Standard erfüllen. Die häufige Lücke ist, dass die Zeitleiste auflistet, was geschah, aber nicht, was Menschen bei jeder Entscheidung wussten, und der Abschnitt zu beitragenden Faktoren eine einzelne Ursache nennt.

Dieselbe Stichprobe zeigt, dass von 74 im Quartal fälligen Maßnahmen 51 bis zum Fälligkeitsdatum abgeschlossen waren, eine Umsetzungsrate von etwa 69 Prozent. Die älteste offene Maßnahme, 210 Tage alt, ist eine Kapazitäts-Alarmschwelle der Zahlungsdatenbank, in sechs aufeinanderfolgenden Wochen zurückgestellt. Die Kennzeichnung der Ursachen zeigt „Kapazitätsgrenze“ in 9 der 36 Reviews, 4 davon beim Zahlungsservice. Der anonyme Puls, von 58 der 70 Eingeladenen beantwortet, ist in der Bereitschaftsgruppe niedriger, wo mehrere Kommentare sagen, dass leitende Führungskräfte spitze Fragen zu namentlich genannten Personen stellen.

Das Team trifft drei Entscheidungen. Erstens hält es eine kurze Sitzung mit den leitenden Führungskräften ab, die an Reviews teilnehmen, und vereinbart eine Regel: Fragen im Raum gelten Bedingungen und Entscheidungen, und jede Nachfrage zu einer Person läuft über die Teamleitung. Zweitens setzt es die älteste Kapazitätsmaßnahme an die Spitze der nächsten Planungsrunde des Zahlungsteams, vom Product Owner gegen Funktionsarbeit gewichtet, und berichtet das Ergebnis im Zuverlässigkeits-Review. Drittens fügt es der Review-Vorlage zwei Checklistenpunkte hinzu (was Menschen bei jeder Entscheidung wussten, und mindestens zwei beitragende Faktoren) und führt ein Coaching für Schreibende anhand eines anonymisierten Reviews durch.

Im folgenden Quartal zeigt sich das Manipulationsrisiko. Die Review-Abdeckung steigt auf 97 Prozent, doch der Anteil der Reviews unter 300 Wörtern verdoppelt sich, und einige Teams stuften Incidents von Schweregrad zwei auf drei herab, knapp unter den Auslöser. Die Qualitätsstichprobe und eine Prüfung der Schweregradänderungen fangen es auf. Die Gruppe fragt, warum die Herabstufungen geschahen, erfährt, dass Teams ein Review als Strafe empfanden, und lockert die Längenerwartung für kleine Ereignisse, während sie den Auslöser bei Schweregrad zwei beibehält.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Reviews funktionieren am besten als regelmäßige Gewohnheit mit Stakeholdern, bei der Maßnahmen im selben Backlog wie andere Arbeit landen. Zu beachten ist, dass ein Ziel für die Zahl der Reviews Reviews erzeugt, die nach Vorlage geschrieben sind, ohne Lernen.

### KI

KI kann Zeitleisten und Zusammenfassungen für ein Review entwerfen, was Abdeckung und Geschwindigkeit erhöht. Koppeln Sie die Review-Abdeckung mit einer Qualitätsprüfung durch einen Menschen und mit der Wiederkehrrate von Ursachen und kennzeichnen Sie von KI entworfene Abschnitte. Zu beachten ist, dass die KI Unsicherheit glätten oder in ihrer Wortwahl Schuld zuweisen kann; ein Mensch besitzt also den schuldfreien endgültigen Bericht.

### Automatisierung

Automatisieren Sie die Erfassung der Zeitleiste und Erinnerungen an Maßnahmen und messen Sie, wie viele Erinnerungen zum Abschluss führen. Zu beachten ist, dass automatisches Drängeln ohne Zustimmung der Eigner zu Rauschen wird.

### Analytik

Verfolgen Sie Alter von Maßnahmen und Wiederkehr über ein langes Fenster, mit Anzahlen. Die Entscheidung, die dies untermauert, ist, welches Lernen das System tatsächlich verändert. Zu beachten ist, dass Wiederkehrraten langsam sind und kleine Stichproben haben; vermeiden Sie also kurzfristige Schlüsse.

## Branchenperspektive

**Startup.** Ein kleines Team kann schnell lernen, weil alle am Incident beteiligt waren. Das Risiko ist, dass nichts aufgeschrieben wird und die Lehre mit der nächsten Neueinstellung geht. Führen Sie eine einseitige Vorlage, halten Sie ein Review für alles, was jemanden nachts weckt, und verfolgen Sie nur Umsetzung der Maßnahmen und wiederkehrende Ursachen. Schützen Sie Offenheit, indem Gründer Reviews ohne Kommentar zu Einzelpersonen lesen.

**Kleinunternehmen.** Die Person, die das Problem behoben hat, ist oft die einzige, die es versteht. Nutzen Sie eine knappe Vorlage und überprüfen Sie die älteste offene Maßnahme monatlich.

**Großunternehmen.** Standardisieren Sie Vorlage, Auslöser und Liste der Ursachenklassen und lassen Sie Teams die Tiefe anpassen. Bieten Sie einen durchsuchbaren Ort für Reviews, ein teamübergreifendes Forum und einen externen Bewerter. Hüten Sie sich vor Ranglisten von Teams nach Incident- oder Review-Zahlen, denn sie bestrafen Transparenz.

**Behörden und öffentlicher Sektor.** Reviews können gesetzlichen Pflichten, Prüfungen oder Informationsfreiheitsanfragen unterliegen, was Autoren vorsichtig macht. Trennen Sie das Lern-Review von jedem förmlichen Bericht für die Aufsicht und erfassen Sie blockierte Maßnahmen mit ihrer Abhängigkeit (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten dieser Praxis sind überwiegend Zeit. Autoren verbringen Stunden mit jedem Review, und viele Menschen verbringen eine Stunde in einer Sitzung. Eine vierteljährliche Qualitätsstichprobe kostet einige Stunden eines externen Lesers. Ursachenkennzeichnung und Maßnahmenverfolgung brauchen etwas Werkzeug, was eine Tabelle und ein Feld in den vorhandenen Ticket- und Backlog-Werkzeugen sein kann. Es gibt einen größeren, weniger sichtbaren Kostenpunkt im Verhalten der Führung, denn das Programm scheitert, wenn Führungskräfte schlecht auf offene Reviews reagieren.

Der Ertrag kommt aus Ursachen, die nicht mehr wiederkehren, und aus Incidents, die kürzer sind, weil das Team etwas Ähnliches gesehen hat. Weniger wiederkehrende Incidents setzen Engineering- und Betriebskapazität frei, verringern Eskalationen und senken die Kosten der Störung für Kunden. Eine gemeinsame Bibliothek von Reviews verkürzt die Lernkurve neuer Mitarbeitender und senkt die Abhängigkeit von wenigen erfahrenen Menschen. Zitieren Sie keinen Prozentsatz einer anderen Organisation. Messen Sie vor dem Start Ihre eigene Baseline für Wiederkehr von Ursachen, Alter offener Maßnahmen und wiederholte Kontakte und vergleichen Sie nach zwei oder drei Quartalen.

Die ehrliche Grenze ist, dass Lernen schwer zuzuordnen ist: Ein Rückgang der Wiederkehr kann von einem besseren Review, einer nicht zusammenhängenden Architekturänderung oder von Glück kommen. Zur weiteren Behandlung siehe Thema 7.7, Kapitalrendite und Business Case.

## Anti-Muster und Fallstricke

- **Review-Theater.** Reviews erfüllen eine Regel, und niemand liest sie. Ziehen und lesen Sie stattdessen Stichproben von Reviews und beurteilen Sie sie an der Veränderung, die sie bewirkten.
- **Eine Suche nach der Grundursache als Person.** Das Review nennt einen individuellen Fehler und hört auf. Fragen Sie stattdessen, was den Fehler wahrscheinlich machte, und listen Sie mehrere beitragende Faktoren auf.
- **Maßnahmeninflation.** Reviews erzeugen lange Listen, die das Team nicht finanzieren kann. Begrenzen Sie stattdessen jedes Review auf wenige gewichtete Maßnahmen und lehnen Sie den Rest mit Grund ab.
- **Maßnahmen außerhalb des Backlogs.** Sie leben in einem Dokument und werden nie geplant. Legen Sie stattdessen Arbeitselemente im Tracker des zuständigen Teams an und verknüpfen Sie sie mit dem Review.
- **Schließen ohne Verifizierung.** Die Maßnahme wird als erledigt markiert, und die Ursache kehrt zurück. Lassen Sie stattdessen einen Prüfer bestätigen, dass die Änderung wirkt, und beobachten Sie die Ursachenklasse auf Wiederkehr.
- **Zählungen nutzen, um Teams zu vergleichen.** Ein Team mit mehr Reviews oder Beinahe-Vorfällen sieht schlechter aus. Lesen Sie stattdessen eine hohe Zahl als Offenheit und vergleichen Sie jedes Team mit seiner eigenen Historie.
- **Den Boten bestrafen.** Eine Führungskraft befragt nach einem offenen Review eine Person. Vereinbaren Sie stattdessen eine Norm, wie Führungskräfte reagieren, und prüfen Sie den Puls nach harten Incidents.
- **Die Kennzahlen als Beweis für Lernen behandeln.** Ein sauberes Dashboard wird als Beleg genommen, dass die Organisation lernt. Lesen Sie stattdessen weiter eine Stichprobe von Reviews und fragen Sie die Menschen, die sie schrieben.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Auslöser und Abdeckung | Reviews hängen davon ab, wer verfügbar ist und wie schlimm es sich anfühlte | Einige Teams halten Reviews für ernste Incidents ab | Schriftliche Auslöser und eine gemeinsame Vorlage; Abdeckung nach Schweregrad gezählt | Abdeckung im Trend und gegen Herabstufungen geprüft; leichte und volle Spur | Auslöser mit Kunden und Lieferanten abgestimmt; gemeinsame Reviews bei gemeinsamen Incidents |
| Qualität und Ehrlichkeit | Reviews nennen eine Person oder eine einzelne Ursache | Einige Teams schreiben schuldfreie Reviews | Checklisten-Standard; schuldfreie Sprache erwartet | Externe vierteljährliche Stichprobe; Puls überprüft; Coaching für Schreibende | Reviews gemeinsam mit Lieferanten und Nutzern geschrieben; teamübergreifendes Lesen ist Routine |
| Maßnahmen und Wiederkehr | Maßnahmen leben in Dokumenten und werden selten abgeschlossen | Maßnahmen von einigen Teams verfolgt; Umsetzung variiert | Maßnahmen im echten Backlog mit Eignern, Daten und ehrlicher Ablehnung | Umsetzung, Alter und Wiederkehr von Ursachen überprüft, mit finanzierter Verbesserung | Maßnahmen über Teams und Lieferanten koordiniert; Ursachenklassen überarbeitet, wenn sich Muster verschieben |
| Teilen und Lernen | Lehren bleiben beim Team | Reviews für das Team veröffentlicht | Reviews durchsuchbar und in einem regelmäßigen Forum geteilt | Reichweite gemessen; abhängige Teams berichten vorgenommene Änderungen | Lernen fließt in Entwurf, Einarbeitung und Lieferantenverträge |

## Checkliste

- [ ] Schriftliche Auslöser sagen, welche Ereignisse ein Review erhalten, einschließlich Beinahe-Vorfällen mit hohem Lernwert.
- [ ] Eine kurze Vorlage existiert, mit einer leichten Spur für kleine Ereignisse.
- [ ] Reviews sind schuldfrei durch Vorlage und durch Führungsverhalten.
- [ ] Jede Maßnahme ist ein Arbeitselement im Backlog des zuständigen Teams, mit Eigner und Datum.
- [ ] Maßnahmen dürfen abgelehnt werden, und der Grund wird erfasst und berichtet.
- [ ] Eine kurze Liste von Ursachenklassen existiert, und jedes Review ist gekennzeichnet.
- [ ] Ein externer Leser bewertet jedes Quartal eine Zufallsstichprobe von Reviews.
- [ ] Die ältesten offenen Maßnahmen werden zusammen mit der Servicezuverlässigkeit überprüft.
- [ ] Das Alter offener Maßnahmen wird als Median, hohes Perzentil und das älteste berichtet.
- [ ] Ein Weg für Beinahe-Vorfälle existiert, und das Team weiß, was nach einer Meldung geschieht.
- [ ] Keine Kennzahl in diesem Thema wird je Person berichtet oder genutzt.
- [ ] Ein Puls „sicher zu sprechen“ läuft nur für Gruppen, die groß genug sind, Anonymität zu schützen.

## KI-Prompts

**Den Entwurf eines Postmortems auf Qualität prüfen.**

```text
Here is a draft postmortem for [incident description] on [service]. Check it
against this standard: [paste your review checklist]. For each item, say whether
the draft meets it, quote the lines that support your judgment, and point to
language that assigns fault to a person instead of describing conditions. Do not
add facts that are not in the text. List your assumptions and anything you could
not judge from what I provided.

[paste the draft, with personal data removed]
```

**Ursachenklassen aus vergangenen Reviews vorschlagen.**

```text
Below are summaries of [number] past reviews for [service or group of services].
Propose a short list of cause classes, between [minimum] and [maximum], that
describe system conditions and never people. For each class give a one-line
definition, the reviews that fit it, and reviews that are ambiguous. Do not
invent causes that are not supported by the text. List your assumptions and the
reviews you could not classify.

[paste summaries]
```

**Offene Maßnahmen auf Muster des Stockens analysieren.**

```text
Here is an export of review actions for [team or service]: owner team, created
date, due date, status, and a one-line description. Report the median, the 85th
percentile, and the maximum age of open actions, then group the oldest actions
by likely reason for stalling (for example unclear scope, dependency on another
team, no capacity, or low value). Report patterns by team and service, never by
person. Do not guess at reasons that the data does not support. List your
assumptions and the extra fields that would help.

[paste export with personal data removed]
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das passende Thema, die Definitionen und die gekoppelte Leitplanke für eine Review- oder Lernkennzahl zu finden, die Sie berichten wollen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine überarbeitete Lernkennzahl weiter ihre Uhren, ihren Manipulationsvektor und ihre Leitplanke trägt.

## Wichtigste Erkenntnisse

- Ein Review ist wert, was es ändert, also messen Sie Abdeckung, Qualität, Umsetzung der Maßnahmen und Wiederkehr von Ursachen und lesen Sie eine Stichprobe der Reviews selbst.
- Schuldfreiheit ist die Voraussetzung ehrlicher Daten, und Führungskräfte schützen sie durch die Art, wie sie auf ein offenes Review reagieren.
- Legen Sie Maßnahmen in den echten Backlog, begrenzen Sie ihre Zahl, erlauben Sie ehrliche Ablehnung und beobachten Sie das Alter der ältesten.
- Kennzeichnen Sie Reviews mit einer kurzen Liste von Ursachenklassen, damit wiederkehrende Ursachen sichtbar werden und das Problemmanagement speisen.
- Lesen Sie eine steigende Zahl von Beinahe-Vorfällen anfangs als Zeichen von Offenheit und ordnen Sie nie Menschen oder Teams nach Review-Menge.
- Koppeln Sie jede Zahl hier mit einer Leitplanke, denn die Lernschleife ist selbst ein Ziel, das sich manipulieren lässt.

## Quellen und weiterführende Literatur

1. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 44(2), 1999.
4. Dekker, S., *The Field Guide to Understanding 'Human Error'*, Ashgate, 2006.
5. Reason, J., *Human Error*, Cambridge University Press, 1990.
6. Derby, E., and Larsen, D., *Agile Retrospectives: Making Good Teams Great*, Pragmatic Bookshelf, 2006.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Just culture](https://en.wikipedia.org/wiki/Just_culture).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
15. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
16. Wikipedia, [Hindsight bias](https://en.wikipedia.org/wiki/Hindsight_bias).
17. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
18. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
