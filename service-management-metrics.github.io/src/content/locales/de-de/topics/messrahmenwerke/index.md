# Messrahmenwerke

**Ein Messrahmenwerk ist ein Weg zu entscheiden, welche Zahlen einen Platz auf der Seite verdienen, und die besten beginnen alle mit einem Ziel und einer Frage. Wählen Sie also das leichteste Rahmenwerk, das jede Kennzahl an eine Entscheidung bindet.**

## Überblick und Motivation

Ein Team, das seine Arbeit messen will, stößt früh auf ein Problem: Es gibt tausende mögliche Zahlen und keine Regel, unter ihnen zu wählen. Ein Messrahmenwerk liefert die Regel. Es nennt einen Ausgangspunkt (ein Ziel, eine Strategie, eine Handvoll kritischer Bedingungen) und beschreibt, wie man von diesem Ausgangspunkt zu einer kleinen Menge von Messgrößen kommt, die Menschen lesen und auf die sie handeln werden. Rahmenwerke unterscheiden sich im Vokabular, teilen aber ein Ziel: jede Zahl mit einem Grund zu verbinden, sie zu haben.

Dieses Thema behandelt fünf Ideen, die in fast jeder Organisation auftauchen, die Services betreibt. Die erste ist der Goal-Question-Metric-Ansatz (GQM), entwickelt vom Software-Engineering-Forscher [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili) und Kollegen. Er beginnt mit einem Ziel, stellt die Fragen, die zeigen würden, ob das Ziel erreicht wird, und wählt erst dann Kennzahlen. Die zweite sind [Objectives and Key Results](https://en.wikipedia.org/wiki/OKR) (OKRs), eine Methode zur Zielsetzung, die bei Intel durch Andrew Grove und später bei Google durch John Doerr populär wurde. Ein Objective sagt, wohin ein Team will, und eine Handvoll Key Results sagt, woran es merkt, dass es angekommen ist. Die dritte ist die [Balanced Scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard), 1992 von Robert Kaplan und David Norton eingeführt, die Organisationen bittet, finanzielle Ergebnisse, Kunden, interne Prozesse sowie Lernen und Wachstum zusammen zu betrachten, damit keine einzelne Sicht dominiert.

Die vierte und fünfte Idee sind älter und schlichter. Ein [kritischer Erfolgsfaktor](https://en.wikipedia.org/wiki/Critical_success_factor) (Critical Success Factor, CSF) ist eine Bedingung, die erfüllt sein muss, damit ein Ziel erreicht wird, und eine [Leistungskennzahl](https://en.wikipedia.org/wiki/Key_performance_indicator) (Key Performance Indicator, KPI) misst, wie gut diese Bedingung hält. ITIL, das von Axelos und später PeopleCert herausgegebene Rahmenwerk für IT-Service-Management (ITSM), nutzt genau diese Paarung. In ITIL 4 (der Version in weiter Verbreitung, Stand Oktober 2026) fordert die Anleitung zu Messung und Berichterstattung und zu kontinuierlicher Verbesserung Praktiker auf, CSFs für einen Service oder eine Praktik zu definieren und dann KPIs zu wählen, die den Fortschritt gegen sie zeigen. Der weitere [ITIL](https://en.wikipedia.org/wiki/ITIL)-Ansatz wird hier zusammengefasst und nicht wiedergegeben.

Agile und ITIL-Sichtweisen treffen sich hier nützlich. Agile Praxis bevorzugt kurze Lernzyklen: Ein Team formuliert eine Hypothese, probiert etwas aus, untersucht das Ergebnis und passt an. ITIL-Praxis bevorzugt definierte Services, vereinbarte Servicelevel und einen gesteuerten Verbesserungsprozess. Ein Rahmenwerk wie GQM passt zur agilen Gewohnheit zu fragen, was das Team lernen will. Eine Balanced Scorecard passt zum ITIL-Bedürfnis, Führungskräften ein rundes Bild der Servicegesundheit zu zeigen. OKRs stehen dazwischen, denn sie werden in kurzen Zyklen überprüft und sind doch in der Sprache der Ergebnisse geschrieben, die Governance-Gremien verstehen.

Drei Begriffe kehren in diesem Thema wieder. Ein **Ziel** ist eine Aussage über ein beabsichtigtes Ergebnis für ein benanntes Publikum. Eine **Frage** ist etwas, das Sie wissen müssten, um zu sagen, ob das Ziel erreicht wird. Eine **Kennzahl** ist eine definierte Art, etwas zu zählen oder zu zeitmessen, die hilft, eine Frage zu beantworten. Die Rahmenwerke unterscheiden sich darin, wie sie den dritten Begriff behandeln, doch alle bestehen darauf, dass er zuletzt kommt, nach Ziel und Frage. Diese Reihenfolge ist der stärkste Schutz gegen den in Goodharts Gesetz beschriebenen Fehler (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen), bei dem eine Zahl den Zweck ersetzt, dem sie dienen sollte.

Kein Rahmenwerk behebt eine schlechte Zielwahl, und keines beseitigt den Bedarf an Leitplanken. Behandeln Sie ein Rahmenwerk als Gerüst für ein Gespräch und rechnen Sie damit, es zu ändern, wenn sich die Arbeit ändert. KPIs insbesondere können zu [Eitelkeitskennzahlen](https://en.wikipedia.org/wiki/Vanity_metric) werden, Zählungen, die nur steigen und nie eine Entscheidung untermauern, etwa die Gesamtzahl bearbeiteter Tickets. Die weiteren Gründe, überhaupt zu messen, sind an anderer Stelle dargelegt (siehe Thema 1.1, Warum Service-Management messen).

### Wie sich die Rahmenwerke unterscheiden

Die Rahmenwerke beantworten leicht verschiedene Fragen, und das Mischen ist üblich. Nutzen Sie die Tabelle unten als Karte.

| Rahmenwerk | Ausgangspunkt | Typisches Ergebnis | Am besten geeignet für | Typischer Horizont |
| --- | --- | --- | --- | --- |
| Goal-Question-Metric | Ein konkretes Ziel für ein Produkt, einen Prozess oder einen Service | Ein Baum aus Zielen, Fragen und Kennzahlen | Ein Messprogramm für ein Team oder einen Service entwerfen | Wochen bis Monate |
| OKRs | Ein ambitioniertes Objective für den nächsten Zeitraum | Wenige Objectives, jedes mit messbaren Key Results | Teams auf Ergebnisse ausrichten und Aufwand bündeln | Quartal |
| Balanced Scorecard | Die Strategie einer Organisation | Ziele und Messgrößen in vier Perspektiven | Führungskräften ein rundes Bild zeigen und Strategie mit dem Betrieb verbinden | Jahr |
| CSFs und KPIs | Ein Service, eine Praktik oder ein Ziel | Wenige Bedingungen, die gelten müssen, jede mit Indikatoren | Eine definierte ITIL-Praktik betreiben und über ihre Gesundheit berichten | Laufend, regelmäßig überprüft |

## Leitprinzipien

- **Vom Ziel ausgehen, dann die Frage, dann die Kennzahl.** Eine zuerst gewählte Kennzahl hat keine Möglichkeit, als nützlich beurteilt zu werden.
- **Publikum und Entscheidung ausdrücklich machen.** Jedes Ziel nennt, wer profitiert, und jede Kennzahl nennt, wer darauf handelt.
- **Die Menge klein halten.** Wenige gelesene und vertrauenswürdige Messgrößen schlagen eine lange Liste, die überflogen wird.
- **Die Sicht ausbalancieren.** Koppeln Sie Geschwindigkeit mit Qualität, Kosten mit Erlebnis und kurzfristigen Output mit langfristigem Lernen, damit kein Rahmenwerk das eine auf Kosten des anderen belohnt.
- **Ziele als Hypothesen behandeln.** Ein Ziel und seine Zahlen sind eine Wette, die falsch sein kann; überprüfen Sie sie also planmäßig und ändern Sie sie mit protokollierter Begründung.
- **Rahmenwerke nutzen, um Teams und Services zu beschreiben, nie um Menschen zu ordnen.** Scorecards, Key Results und KPIs gehören einem Team oder einem Service.
- **Rahmenwerke mit Absicht kombinieren.** Sagen Sie, welches Rahmenwerk welche Entscheidung besitzt, damit dieselbe Zahl nicht dreimal definiert wird.

## Kennzahlendefinitionen

Die folgenden Kennzahlen messen die Gesundheit eines Rahmenwerks im Gebrauch, nicht die Gesundheit eines Services. Sie zeigen, ob Ziele und Kennzahlen noch verbunden sind, und gelten für jedes Rahmenwerk, das ein Team wählt. Gezählt wird nach Team oder Service, nie nach Person.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Zielrückverfolgbarkeit | Anteil der berichteten Kennzahlen, die auf ein schriftliches Ziel und eine Frage zurückführen | Kennzahlen mit erfasstem Ziel und Frage / berichtete Kennzahlen | Prozent | Kennzahlenregister (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen) | Messung und Berichterstattung; kontinuierliche Verbesserung | Lieferziel; Produktziel | Vierteljährlich |
| Verteilung der Key-Result-Bewertungen | Streuung der Bewertungen von Key Results am Periodenende, gezeigt als Anteil in jedem Band | Key Results in jedem Bewertungsband (zum Beispiel 0,0 bis 0,3, 0,4 bis 0,6, 0,7 bis 1,0) / im Zeitraum bewertete Key Results; schließt mit protokollierter Begründung gestrichene Key Results aus | Prozent je Band | OKR-Verfolgungswerkzeug oder Teamdokument | Kontinuierliche Verbesserung; Service-Level-Management | Quartalsplanung; Review | Vierteljährlich |
| Perspektivenabdeckung | Anteil der vier Perspektiven der Balanced Scorecard, die mindestens eine Messgröße mit aktuellem Wert haben | Perspektiven mit einer im letzten Zeitraum berichteten Messgröße / vier | Prozent | Scorecard oder Dashboard | Messung und Berichterstattung; Governance des Service-Wertschöpfungssystems | Stakeholder-Review (Kunden- und Lernsichten) | Vierteljährlich |
| Alter der Indikatorüberprüfung | Zeit seit der letzten Überprüfung von Definition und Ziel jedes KPI | Überprüfungsdatum minus Datum der letzten Überprüfung; die Uhr startet bei der letzten erfassten Überprüfung und stoppt am Berichtsdatum; Median und ältesten Wert berichten | Tage | Änderungsprotokoll des Kennzahlenregisters | Kontinuierliche Verbesserung; Messung und Berichterstattung | Retrospektiv-Maßnahmen | Vierteljährlich |
| CSF-zu-KPI-Abdeckung | Anteil der kritischen Erfolgsfaktoren mit mindestens einem aktuell berichteten KPI | CSFs mit aktuellem KPI / für den Service oder die Praktik definierte CSFs | Prozent | Praktik- oder Servicedokumentation; Kennzahlenregister | Der CSF-und-KPI-Ansatz in den ITIL-Praktikleitfäden | Definition of Done; Arbeitsvereinbarungen | Vierteljährlich |

Die Zielrückverfolgbarkeit zählt eine Kennzahl nur dann als zurückverfolgt, wenn Ziel und Frage aufgeschrieben und das Publikum benannt sind; ein Ziel allein genügt nicht. Die Verteilung der Key-Result-Bewertungen sollte als Streuung gelesen werden, nicht als Durchschnitt, denn ein Durchschnitt verbirgt ein Team, das alles tiefgestapelt hat, und ein Team, das an allem scheiterte. Das Alter der Indikatorüberprüfung schließt im Zeitraum verabschiedete Kennzahlen aus.

## Empfehlungen

### Rahmenwerke wählen und kombinieren

**1. Wählen Sie das kleinste Rahmenwerk, das die Aufgabe erfüllt.** Ein einzelnes Serviceteam mit einem Verbesserungsproblem braucht selten eine vollständige Balanced Scorecard. GQM genügt oft, weil es einen klaren Endpunkt hat: einen Baum aus einem Ziel, einigen Fragen und einigen Kennzahlen. Fügen Sie Struktur nur hinzu, wenn eine Entscheidung sie braucht.

**2. Schreiben Sie Ziele in drei Teilen: Zweck, Gegenstand und Blickwinkel.** GQM-Ziele werden traditionell als Verbesserung einer genannten Qualität eines genannten Gegenstands aus einem genannten Blickwinkel formuliert, zum Beispiel die Klarheit von Incident-Updates für die Menschen zu verbessern, die auf den Service Desk angewiesen sind. Die Struktur zwingt zu sagen, wer profitiert. Hat ein Ziel keinen Blickwinkel, ist es wahrscheinlich ein Slogan.

**3. Stellen Sie Fragen, die ein Mensch mit einer kurzen Geschichte beantworten könnte.** „Wie schnell hören Nutzer wieder von uns, nachdem sie ein Problem gemeldet haben?“ ist eine gute Frage, weil man sich eine Antwort und die Belege dahinter vorstellen kann. „Wie ist unsere Leistung?“ ist es nicht. Zielen Sie auf drei bis fünf Fragen pro Ziel und rechnen Sie damit, dass einige durch Interviews oder Stichproben beantwortet werden und nicht durch eine Zahl.

**4. Wählen Sie Kennzahlen zuletzt, und wählen Sie mehr als eine.** Nennen Sie für jede Frage die Kandidatenkennzahlen, die Datenquelle und den Manipulationsvektor (siehe Thema 1.5, Datenquellen und Instrumentierung). Nehmen Sie mindestens eine Kennzahl in Spannung zu den anderen auf, etwa Reaktionszeit neben der Wiedereröffnungsrate. Hat eine Frage keine machbare Kennzahl, sagen Sie das und planen Sie eine qualitative Prüfung.

**5. Entscheiden Sie, welches Rahmenwerk welche Entscheidung besitzt.** Eine verbreitete Anordnung ist, dass die Balanced Scorecard oder ein Äquivalent die wenigen Messgrößen hält, die Führungskräfte überprüfen, OKRs die Verbesserungen halten, die sich ein Team für dieses Quartal vorgenommen hat, und CSFs und KPIs die laufende Gesundheit einer Praktik beschreiben. Schreiben Sie diese Anordnung ins Kennzahlenregister, damit jede Zahl eine einzige Definition und einen einzigen Eigner hat.

### OKRs gut nutzen

**6. Schreiben Sie Objectives als Ergebnisse und Key Results als Belege.** Ein Objective wie „Nutzer bekommen ihre Probleme gelöst, ohne uns hinterherlaufen zu müssen“ ist ein Ergebnis. Ein Key Result wie „die mediane Zeit bis zu einem nützlichen ersten Update fällt von [aktueller Wert] auf [Zielwert]“ ist ein Beleg. Key Results, die wie Aufgaben klingen („ein neues Portal starten“), sind Aktivitäten, keine Resultate. Können Sie nicht sagen, was sich für einen Nutzer ändern würde, ist das Key Result nicht fertig.

**7. Halten Sie OKRs auf Team- und Serviceebene.** Sie für Einzelpersonen zu setzen macht sie tendenziell zu Aufgabenlisten und Eingaben für Leistungsbeurteilungen und lädt zu der Manipulation ein, die Goodharts Gesetz vorhersagt. Lassen Sie ein Team seine Key Results offen selbst schreiben und lassen Sie Teams einander ansehen. Vermeiden Sie Kaskaden, in denen jede Ebene die darüberliegende neu formulieren muss.

**8. Behandeln Sie die Bewertung als Gespräch, nicht als Note.** Teams, die eine perfekte Bewertung als Ziel behandeln, schreiben zaghafte Key Results. Eine Bewertungsverteilung, die sich oben häuft, deutet auf Tiefstapeln hin, und eine, die sich unten häuft, darauf, dass die Ziele Fantasie waren. Überprüfen Sie die Streuung jedes Quartal und fragen Sie, was das Team aus jedem Verfehlen gelernt hat.

### Scorecards, CSFs und KPIs gut nutzen

**9. Definieren Sie CSFs vor KPIs.** Ein kritischer Erfolgsfaktor ist eine Aussage darüber, was gelten muss, etwa „Nutzer können den richtigen Self-Service-Artikel finden und nutzen“. Ein KPI zeigt dann, ob es gilt. Mit dem KPI zu beginnen lädt dazu ein, zu zählen, was leicht zu zählen ist. Fragen Sie für jeden CSF: „Wenn dies aufhörte zu gelten, wie schnell würden wir es bemerken, und woran?“ Die Antwort ist der KPI.

**10. Nutzen Sie Scorecard-Perspektiven, um eine einseitige Sicht zu verhindern.** Die vier klassischen Perspektiven sind Finanzen, Kunde, interner Prozess sowie Lernen und Wachstum. Serviceorganisationen benennen sie oft um, zum Beispiel Kosten, Nutzererlebnis, betriebliche Gesundheit und Fähigkeiten. Entscheidend ist, dass jede Perspektive mindestens eine Messgröße mit aktuellem Wert hat und dass ein Rückgang in einer neben den anderen gelesen wird (siehe Thema 6.5, Wertrealisierung und Geschäftsergebnisse).

**11. Verbinden Sie Strategie und Messgrößen mit einer einfachen Karte.** Eine [Strategy Map](https://en.wikipedia.org/wiki/Strategy_map) zeichnet Pfeile von Fähigkeit über Prozess und Kunde zu finanziellen Ergebnissen. Sie ist nützlich für das Gespräch und schlecht als Rechner. Zeichnen Sie sie, streiten Sie über die Pfeile und wählen Sie dann einige Messgrößen. Versuchen Sie nicht, das Diagramm quantitativ exakt zu machen.

**12. Überprüfen Sie Rahmenwerke nach Kalender.** Setzen Sie ein vierteljährliches Review an, in dem das Team zu jedem Ziel, Key Result und KPI fragt, ob es noch zählt und ob es Menschen noch zur richtigen Handlung bewegt. Verabschieden Sie, was nicht mehr dient, und halten Sie den Grund fest. Kennzahlen, die ihre Ziele überleben, werden zu Eitelkeitskennzahlen.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Zielrückverfolgbarkeit | Ein Ziel und eine Frage schreiben, nachdem die Kennzahl schon existiert, damit die Aufzeichnung vollständig wirkt; vage Ziele, die jede Kennzahl rechtfertigen | Jedes Quartal fünf Einträge stichprobenartig prüfen und fragen, ob die Frage zu einer anderen Kennzahl hätte führen können; prüfen, dass Publikum und Entscheidung benannt sind |
| Verteilung der Key-Result-Bewertungen | Leichte Key Results schreiben, damit sich Bewertungen nahe 1,0 häufen; großzügig neu bewerten; schlecht laufende Key Results streichen, ohne den Grund festzuhalten | Zahl der gestrichenen Key Results mit ihren Gründen; Key Results mit den Ergebnissen des Vorzeitraums vergleichen; die mediane Ambition mit der Führung überprüfen |
| Perspektivenabdeckung | Einer Perspektive eine symbolische Messgröße hinzufügen, damit sie als abgedeckt zählt; Messgrößen wählen, die sich nicht bewegen können | Prüfen, dass jede Messgröße einer Perspektive im letzten Jahr ihren Wert geändert hat und eine schriftliche Entscheidung angehängt ist |
| Alter der Indikatorüberprüfung | Eine Überprüfung erfassen, ohne den Indikator zu lesen; nur das Datum ändern | Mit jeder Überprüfung ein schriftliches Ergebnis (behalten, geändert, verabschiedet) verlangen und das Protokoll stichprobenartig prüfen |
| CSF-zu-KPI-Abdeckung | Einen KPI zuweisen, der mit dem CSF nichts zu tun hat, um volle Abdeckung zu erreichen; einen KPI wählen, der ein Scheitern nicht zeigen kann | Für jedes Paar fragen, welcher Messwert zeigen würde, dass der CSF scheitert; nach KPIs suchen, die nie rot waren |

Ein gesunder Befund ist einer, in dem sich Ziele ändern, wenn sich die Welt ändert, einige Key Results aus genannten Gründen verfehlt werden und die Zahl berichteter Kennzahlen fällt oder konstant bleibt, statt zu wachsen. Wenn alles grün ist, sich Bewertungen oben häufen und niemand eine in diesem Jahr verabschiedete Kennzahl nennen kann, ist das Rahmenwerk zur Dekoration geworden.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Goal-Question-Metric | Bindet jede Kennzahl an einen Grund; leicht zu erklären; funktioniert im Teammaßstab | Braucht eine moderierte Sitzung; kann zur Papierübung werden; sagt wenig über Prioritäten zwischen Zielen |
| OKRs | Bündelt ein Quartal auf wenige Ergebnisse; teamübergreifend sichtbar; passt zu kurzen Planungszyklen | Key Results lassen sich leicht als Aufgaben schreiben; Bewertungen lassen sich manipulieren; individuelle OKRs verschwimmen mit der Leistungsbeurteilung |
| Balanced Scorecard | Gibt Führungskräften ein rundes Bild; verbindet Strategie mit dem Betrieb | Aufwendig zu pflegen; Perspektiven können zu auszufüllenden Kästen werden; langsam bei der Abbildung von Veränderung |
| CSFs und KPIs | Vertraut in der ITIL-Praxis; gut geeignet für die Berichterstattung über einen laufenden Service | Driftet leicht zu Eitelkeits-KPIs; Indikatoren veralten ohne Überprüfung |
| Kein Rahmenwerk | Leicht und schnell für ein sehr kleines Team | Kennzahlen häufen sich ohne Grund; Streit darüber, was zu messen ist, wiederholt sich |
| Mehrere Rahmenwerke zusammen | Jede Entscheidung bekommt das passende Werkzeug | Doppelte Definitionen; Verwirrung darüber, welche Zahl maßgeblich ist |

Wählen Sie das Gewicht des Rahmenwerks passend zum Einsatz. Ein kleiner interner Service braucht ein Ziel, drei Fragen und einige Kennzahlen auf einer Seite. Ein vertraglich erbrachter Service braucht möglicherweise KPIs, die bis auf die Ebene eines Service Level Agreements definiert sind (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA).

## Fragen für die Diskussion im Team

**1. Welchem Ziel dient jede unserer berichteten Kennzahlen, und wer würde es bemerken, wenn wir sie nicht mehr berichteten?**
Listen Sie die Kennzahlen an einer Tafel auf und schreiben Sie das Ziel daneben. Fehlt das Ziel, fragen Sie, wer die Kennzahl angefordert hat und warum. Manche stammen aus einem früheren Projekt und können verabschiedet werden. Die Moderation sollte eine Kennzahl ohne Ziel als normale Entdeckung behandeln, nicht als Versagen.

**2. Wenn wir nur drei Fragen zu unserem Service beantworten könnten, welche wären es?**
Das erzwingt eine Rangfolge der Fragen vor den Kennzahlen. Lassen Sie jede Person drei aufschreiben und gruppieren Sie sie dann. Vergleichen Sie die Gruppen mit dem Dashboard, das das Team derzeit hat. Die Lücken zwischen beiden sind meist das nützlichste Ergebnis der Sitzung.

**3. Welche unserer Key Results beschreiben ein Ergebnis für Nutzer, und welche beschreiben Arbeit, die wir planen?**
Lesen Sie jedes Key Result laut vor und fragen Sie, ob ein Nutzer es bemerken würde, wenn es erreicht wäre. Lautet die Antwort nein, schreiben Sie es als Ergebnis um oder verschieben Sie es in den Plan. Die Moderation kann erwähnen, dass Aufgaben in Ordnung sind, aber in einen Backlog gehören. Einigen Sie sich zum Schluss auf ein Key Result, das in diesem Quartal umgeschrieben wird.

**4. Wo widersprechen sich unsere vier Scorecard-Perspektiven, und was sagt uns das?**
Bitten Sie die Gruppe, einen jüngsten Zeitraum zu suchen, in dem sich eine Perspektive verbesserte, während sich eine andere verschlechterte, etwa Kosten fielen, während das Erlebnis sank. Besprechen Sie die Ursache und ob jemand es hat kommen sehen. Das baut die Gewohnheit auf, Messgrößen zusammen zu lesen. Halten Sie jede Perspektive ohne Messgröße fest und entscheiden Sie, ob Sie eine hinzufügen oder klar sagen, dass sie nicht im Geltungsbereich liegt.

**5. Welcher Messwert würde uns bei jedem kritischen Erfolgsfaktor sagen, dass er scheitert?**
Wählen Sie zwei CSFs und benennen Sie den KPI, und fragen Sie dann, welcher Wert ein Gespräch auslösen würde. Kann das Team es nicht sagen, erfüllt der KPI seine Aufgabe nicht. Suchen Sie nach KPIs, die nie die Farbe gewechselt haben, was meist auf eine zu lockere Schwelle hindeutet. Die Moderation sollte fragen, was der Manipulationsvektor des KPI wäre.

**6. Welches Rahmenwerk sollte welche Entscheidung besitzen, und wo definieren wir derzeit dieselbe Zahl zweimal?**
Verfolgen Sie eine Kennzahl, etwa die Incident-Lösungszeit, durch jeden Bericht, in dem sie auftaucht. Vergleichen Sie die Definitionen. Unterschiede bei Uhren oder Ausschlüssen sind häufig und erklären oft Streit zwischen Teams. Einigen Sie sich auf einen Eigner und eine Definition und halten Sie sie im Register fest.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams begegnen Rahmenwerken vor allem als OKRs und, mit Glück, GQM. Ein Team hat den größten Nutzen, wenn es seine eigenen Ziele und Key Results schreibt, verknüpft mit dem, was seine Nutzer brauchen, und wenn es die Arbeitsmessgrößen von denen trennt, die Führungskräfte sehen. Ein Team sollte sich vor Key Results hüten, die Output belohnen, etwa Story Points oder Releases, denn sie laden zu den Verhaltensweisen ein, die die Rahmenwerke verhindern sollten (siehe Thema 1.3, Ergebnisse vor Output: Auswählen, was gemessen wird).

### Service- und Betriebsteams

Betriebsteams begegnen Rahmenwerken vor allem als CSFs und KPIs innerhalb von ITIL-Praktiken sowie als mit Kunden vereinbarte Servicelevel-Ziele. Sie profitieren davon, den CSF in einfacher Sprache zu definieren, bevor sie den KPI wählen, bei Zeitmessgrößen Perzentile zu berichten und Zuverlässigkeitsmessgrößen wie Service Level Indicators und Objectives neben dem Erleben der Nutzer zu halten (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets). Sie sollten auch der Versuchung widerstehen, KPIs zu behalten, die vor Jahren gesetzt wurden und nicht mehr zur Nutzung des Services passen.

### Führung und Governance

Führungskräfte wählen die Rahmenwerke, meist indem sie nach einer Scorecard oder nach OKRs fragen, und was sie mit den Zahlen tun, entscheidet, wie sich die Rahmenwerke verhalten. Eine Führungskraft, die ein verfehltes Key Result bestraft, bringt Teams bei, leichte zu schreiben. Eine, die fragt, was das Team gelernt hat, bringt ihnen bei, ehrliche zu schreiben. Governance-Gremien sollten ein Kennzahlenregister, eine kleine Zahl berichteter Messgrößen und eine regelmäßige Überprüfung erwarten, ob das Rahmenwerk selbst funktioniert (siehe Thema 11.4, Reifegradmodell für Kennzahlenprogramme).

### Kunden und Nutzer

Kunden und Nutzer sehen das Rahmenwerk selten, nur seine Wirkungen. Ein gut entworfenes zeigt sich in Services, die sich auf die Weise verbessern, um die sie gebeten haben, und in ehrlicher Berichterstattung darüber, was sich nicht verbessert hat. Ein schlechtes zeigt sich in grünen Berichten, die nicht zum Erleben passen. Nehmen Sie in jedes Ziel einen Nutzerblickwinkel auf und lassen Sie Nutzerfeedback in der Kundenperspektive der Scorecard neben den operativen Zahlen stehen (siehe Thema 6.2, Experience Level Agreements).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler betreibt eine Kundensupport-Plattform und ein Self-Service-Portal mit mehreren Produktteams und einer kleinen Gruppe für den Servicebetrieb. Alle Zahlen sind illustrativ.

Die Führung verlangt eine Balanced Scorecard und getrennt davon vierteljährliche OKRs. Binnen eines Quartals hat das Team 31 berichtete Messgrößen, und niemand kann sagen, warum die Hälfte davon existiert. Der Serviceeigner führt eine halbtägige Sitzung mit GQM zu einem Ziel durch: „Die Klarheit der Hilfe für Kunden verbessern, die eine Zahlung nicht abschließen können, aus dem Blickwinkel des Kunden.“

Die Sitzung ergibt vier Fragen. Finden Kunden den richtigen Hilfeartikel? Müssen sie den Support kontaktieren, nachdem sie ihn gelesen haben? Wie lange dauert die Lösung eines Zahlungsproblems, wenn sie den Support kontaktieren? Empfinden sie die Antwort als klar? Von den 31 Messgrößen lassen sich neun diesen Fragen zuordnen. Drei neue werden gebraucht: Erfolg der Artikelsuche, Kontaktrate nach einer Artikelansicht und eine Ein-Frage-Umfrage nach der Lösung. Die verbleibenden 22 werden mit Zustimmung des Eigners zur Verabschiedung markiert.

Das OKR für das Quartal wird als Ergebnis geschrieben. Das Objective lautet „Kunden lösen Zahlungsprobleme, ohne uns hinterherlaufen zu müssen.“ Die drei Key Results sind die mediane und die 90.-Perzentil-Zeit bis zur Lösung, die Kontaktrate nach Artikelansichten und das Umfrageergebnis zur Klarheit. Die Scorecard lässt die Kundenperspektive auf dieselben Messgrößen zeigen, sodass es eine Definition gibt und nicht zwei.

Zur Mitte des Quartals zeigt sich ein Manipulationsrisiko. Die Kontaktrate nach Artikelansichten sinkt stark, was nach Erfolg aussieht. Ein Prüfer zieht 20 Sitzungen als Stichprobe und stellt fest, dass ein Redesign den Link „Kontakt“ drei Bildschirme tiefer verschoben hat. Weniger Menschen erreichen den Support, und die Umfrage zeigt niedrigere Klarheitswerte. Das Team ergänzt Suchabbrüche und die Umfragekommentare als Leitplanken und stellt den Link wieder her.

Am Ende des Quartals betragen die Bewertungen der Key Results 0,6, 0,8 und 0,5, die das Team so präsentiert, wie sie sind. Die Führung fragt, was das Team gelernt hat, nicht warum die Bewertungen nicht höher waren. Die im Entscheidungsprotokoll festgehaltene Entscheidung lautet, das Objective für ein zweites Quartal zu behalten, die Kontaktrate durch den Anteil der Kunden zu ersetzen, die das Problem beim ersten Besuch lösen, und sechs weitere Scorecard-Messgrößen zu verabschieden.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Ziele und Fragen sollten überprüft werden, wenn das Team lernt; wählen Sie also ein Rahmenwerk, das leicht genug ist, um in regelmäßigen Verbesserungsreviews mit Stakeholdern überarbeitet zu werden. Ein praktischer Ansatz ist, Ziel, Frage und zwei oder drei Indikatoren auf einer Seite aufzuschreiben und sie oft zu überprüfen. Zu beachten ist, dass ein als einmalige Entwurfsübung genutztes Rahmenwerk veraltet und das Dashboard von den Zielen wegdriftet.

### KI

Nehmen Sie KI ausdrücklich in das Rahmenwerk auf: Welchem Ziel dient eine KI-gestützte Praktik, welche Frage beantwortet ihre Messgröße und welche Qualitätsmessgröße ist mit ihr gekoppelt. Die Abstimmung mit einem Governance-Vokabular wie dem NIST AI Risk Management Framework kann helfen, doch prüfen Sie, was der aktuelle Text sagt, bevor Sie ihn zitieren. Zu beachten ist, dass ein Rahmenwerk, das nur die KI-Akzeptanz misst, Nutzung um ihrer selbst willen belohnt.

### Automatisierung

Nutzen Sie Automatisierung, um die Rückverfolgbarkeit vom Ziel zum Indikator aktuell zu halten, zum Beispiel indem Indikatoren ohne verknüpftes Ziel markiert werden. Nehmen Sie Automatisierung in das Rahmenwerk als etwas auf, das an seinen Ergebnissen und Fehlern gemessen wird. Zu beachten ist, dass ein Rahmenwerk zu einem großen automatischen Bericht werden kann, den niemand liest.

### Analytik

Wählen Sie Indikatoren, die die Daten stützen können, und sagen Sie, welche Entscheidung jeder untermauert. Wenn mehrere Rahmenwerke gelten, etwa Ziele und Key Results, eine Balanced Scorecard und die kritischen Erfolgsfaktoren von ITIL, bilden Sie sie auf eine einzige Menge ab, statt drei zu betreiben. Zu beachten ist, dass ein Rahmenwerk schlechte Daten nicht beheben kann; koppeln Sie deshalb die Wahl der Indikatoren mit den Datenqualitätsprüfungen aus Thema 1.5, Datenquellen und Instrumentierung.

## Branchenperspektive

**Startup.** Ein Startup braucht meist ein Ziel, drei Fragen und eine Handvoll Kennzahlen auf einer Seite. OKRs sind verbreitet und funktionieren gut, wenn sie von dem Team geschrieben werden, das die Arbeit leisten wird. Widerstehen Sie dem Hinzufügen einer Scorecard, bis Investoren oder Kunden eine verlangen.

**Kleinunternehmen.** Die Ressourcen sind knapp, wählen Sie also ein Rahmenwerk und nutzen Sie es leicht. CSFs und KPIs für die zwei oder drei Dinge, die das Unternehmen sich nicht leisten kann falsch zu machen, genügen oft. Bevorzugen Sie direktes Feedback von Kunden gegenüber aufwendiger Bewertung.

**Großunternehmen.** Mehrere Rahmenwerke bestehen meist nebeneinander, was die Verantwortung für Definitionen zur Hauptherausforderung macht. Führen Sie ein Register, bestimmen Sie, welches Rahmenwerk welche Zahl hält, und führen Sie jährlich ein Review der gesamten Anordnung durch. Hüten Sie sich vor Kaskaden, die jedes Team zwingen, Unternehmensziele in eigenen Worten neu zu formulieren.

**Behörden und öffentlicher Sektor.** Vorgeschriebene Berichterstattung und vertragliche Servicelevel wirken wie feste KPIs. Behandeln Sie sie als gegeben und nutzen Sie GQM oder OKRs für die Verbesserungsarbeit darum herum. Öffentliche Rechenschaftspflicht erhöht den Einsatz bei einer irreführenden Zahl, veröffentlichen Sie also Definitionen und gehen Sie offen mit Änderungen um (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten eines Rahmenwerks sind überwiegend Zeit: eine moderierte Sitzung zum Entwurf von Messgrößen, ein kurzes vierteljährliches Review und die Pflege eines Registers. Software für OKRs oder Scorecards ist verfügbar, doch ein Dokument oder eine Tabellenkalkulation genügt im kleinen Maßstab oft. Die größeren Kosten sind die Aufmerksamkeit der Führung, denn ein Rahmenwerk, das Führungskräfte nicht nutzen, wird zu Berichterstattung um ihrer selbst willen.

Der Ertrag kommt aus weniger, besseren Messgrößen. Teams, die sagen können, warum jede Zahl existiert, verbringen weniger Zeit mit Berichten, die niemand liest, streiten weniger über Definitionen und bemerken früher, wenn eine Messgröße keine Entscheidungen mehr untermauert. Statt eine Zahl zu zitieren, messen Sie eigene Baselines: die Zahl berichteter Kennzahlen, den Anteil mit erfasstem Ziel und die Zeit für die Vorbereitung wiederkehrender Berichte, vor und nach der Einführung des Rahmenwerks. Eine ausführlichere Behandlung des Return on Investment findet sich an anderer Stelle (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Kennzahlen vor Zielen.** Wer von den vorhandenen Daten ausgeht, erzeugt ein Dashboard dessen, was leicht zu zählen ist. Schreiben Sie zuerst Ziel und Frage und sehen Sie dann, welche Daten passen.
- **OKRs als Aufgabenlisten.** Key Results, die Aktivitäten benennen, lassen jedes Quartal geschäftig wirken und sagen nichts über Ergebnisse. Schreiben Sie jedes als Beleg um, den ein Nutzer bemerken würde.
- **OKRs und Scorecards als individuelle Ziele.** Sie laden zur Manipulation ein und entmutigen Hilfe zwischen Menschen. Halten Sie sie auf Team- und Serviceebene.
- **Eine Scorecard mit leeren oder symbolischen Perspektiven.** Jeden Kasten mit irgendetwas zu füllen ist nicht dasselbe, wie das Ganze zu sehen. Verlangen Sie für jede einen aktuellen Wert und eine Entscheidung.
- **KPIs, die sich nie ändern.** Ist ein Indikator seit Jahren grün, ist seine Schwelle wahrscheinlich falsch, oder er misst nichts, was scheitern kann. Fragen Sie, welcher Messwert ein Problem zeigen würde, und setzen Sie ihn neu.
- **Rahmenwerke ohne Verantwortung gestapelt.** Drei Rahmenwerke, die dieselbe Messgröße auf drei Arten definieren, erzeugen Streit. Benennen Sie einen Eigner und eine einzige Definition.
- **Die Bewertung belohnen.** Wenn eine perfekte OKR-Bewertung Lob oder Geld einbringt, schreiben Teams leichte Key Results. Belohnen Sie ehrliches Lernen und gute Fragen.
- **Rahmenwerk als Zeremonie.** Ein Tag Workshops, der ein laminiertes Poster hervorbringt, ändert nichts. Halten Sie das Ergebnis im Register und überprüfen Sie es nach Kalender.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Ziele und Fragen | Kennzahlen werden gewählt, weil die Daten existieren | Einige Teams schreiben Ziele vor den Kennzahlen | Ein gemeinsames Ziel- und Fragenformat; jede berichtete Kennzahl führt auf eines zurück | Die Rückverfolgbarkeit wird überprüft, und Lücken führen zu finanzierter Arbeit | Ziele werden gemeinsam mit Kunden und Lieferanten geschrieben und bei veränderten Bedingungen überarbeitet |
| Nutzung von Rahmenwerken | Ad hoc; kein erklärtes Rahmenwerk | Teams übernehmen unterschiedliche Rahmenwerke mit unterschiedlichem Vokabular | Eine schriftliche Anordnung sagt, welches Rahmenwerk welche Entscheidung besitzt | Ergebnisse der Rahmenwerke werden überprüft, ungenutzte Teile fallen weg | Rahmenwerke sind über Teams und Lieferanten mit einer Menge von Definitionen abgestimmt |
| Indikatoren und Bewertung | KPIs einmal gesetzt und nie überprüft | Einige KPIs haben Eigner und Schwellen | KPIs und Key Results haben Eigner, Definitionen und Leitplanken | Bewertungen und Indikatoren werden im Trend und jedes Quartal auf Manipulation überprüft | Indikatoren werden routinemäßig verabschiedet und ersetzt, Änderungen mit Ergebnissen verknüpft |
| Nutzung in Entscheidungen | Berichte werden erstellt und ignoriert | Führungskräfte fragen nach Zahlen, wenn etwas schiefgeht | Reviews halten Entscheidungen fest, die Zahlen beeinflusst haben | Lernfragen sind Standard; verfehlte Ziele werden ohne Schuldzuweisung besprochen | Verbesserungsplanung über Teams hinweg nutzt dieselben gemeinsamen Ziele und Messgrößen |

## Checkliste

- [ ] Jede berichtete Kennzahl führt auf ein schriftliches Ziel, eine Frage und ein benanntes Publikum zurück.
- [ ] Ein Kennzahlenregister hält fest, welches Rahmenwerk jede Kennzahl besitzt, und ihre einzige Definition.
- [ ] Ziele sind mit Zweck, Gegenstand und Blickwinkel geschrieben.
- [ ] Jedes Key Result beschreibt ein Ergebnis, das jemand bemerken würde, keine Aufgabe.
- [ ] OKRs, Scorecard-Messgrößen und KPIs gehören Teams oder Services, nicht Einzelpersonen.
- [ ] Jeder kritische Erfolgsfaktor hat mindestens einen aktuellen KPI und einen angegebenen Messwert, der ein Scheitern zeigen würde.
- [ ] Jede Scorecard-Perspektive hat eine Messgröße mit aktuellem Wert.
- [ ] Jede Kennzahl hat einen benannten Manipulationsvektor und eine Leitplanke.
- [ ] Ein vierteljährliches Review fragt, ob jedes Ziel, Key Result und jeder KPI noch zählt.
- [ ] Mindestens eine Kennzahl oder ein Indikator wurde im vergangenen Jahr verabschiedet oder neu gestaltet, mit festgehaltenem Grund.

## KI-Prompts

**Ein Ziel in Fragen und Kandidatenkennzahlen verwandeln.**

```text
Our team is [team name], which runs [type of service or delivery work] for
[audience]. Our goal is: [goal stated as purpose, subject, and viewpoint]. Using
the Goal-Question-Metric approach, propose three to five questions that would
show whether we are meeting this goal. For each question, suggest candidate
metrics we could define, the kind of data source we would need, the likely
gaming vector, and a guardrail. Do not invent benchmark values or statistics.
List your assumptions and anything you could not determine from what I gave you.
```

**Entwürfe von OKRs prüfen.**

```text
Here are our draft objectives and key results for [period]: [paste OKRs]. Our
team is [team name] and our users are [audience]. Review each key result and
tell me whether it describes an outcome or an activity, whether it could be met
without helping users, and what guardrail would show that. Suggest rewrites
where needed, using [placeholders] for any numbers we must supply ourselves.
Do not invent targets or benchmark values. List your assumptions and questions I
should answer.
```

**Kritische Erfolgsfaktoren auf KPIs abbilden.**

```text
For the ITIL practice [practice name] in our organization, which serves
[audience], here are the critical success factors we have drafted: [list CSFs].
Propose KPIs for each that could be collected from [data sources]. For each KPI,
state where the clock starts and stops if it is a time measure, what reading
would show the factor is failing, and how it might be gamed. Do not state
benchmark values or compliance claims. List your assumptions.
```

**Eine Scorecard auf Ausgewogenheit prüfen.**

```text
Our scorecard has these measures, grouped by perspective: [paste measures by
perspective]. We are [type of organization]. Identify perspectives that are
thin, measures that appear to duplicate each other, and measures that could
move in a way that hides a problem in another perspective. Suggest guardrails
and measures to retire. Do not invent figures or sources. List your
assumptions and what you could not judge from the data I gave you.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um herauszufinden, welches Thema eine Kennzahl besitzt und welche Leitplanke dazugehört, bevor Sie sie in ein Rahmenwerk einordnen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein rahmenwerkbasierter Kennzahleneintrag Definition, Manipulationsvektor und Leitplanke trägt.

## Wichtigste Erkenntnisse

- Ein Rahmenwerk entscheidet, welche Kennzahlen einen Platz verdienen, und die übliche Regel lautet, von einem Ziel und einer Frage auszugehen und dann die Kennzahl zu wählen.
- Goal-Question-Metric eignet sich, um Messgrößen für ein Team zu entwerfen, OKRs, um ein Quartal zu bündeln, Scorecards für runde Führungssichten und CSFs mit KPIs, um eine ITIL-Praktik zu betreiben.
- Nutzen Sie das leichteste Rahmenwerk, das funktioniert, und sagen Sie, welches welche Zahl besitzt.
- Jedes Rahmenwerk lässt sich manipulieren, koppeln Sie also jede Kennzahl mit einer Leitplanke und überprüfen Sie die Menge nach Kalender.
- Halten Sie Rahmenwerke auf Team- und Serviceebene, nie als individuelle Ziele.
- Verabschieden Sie Ziele, Key Results und Indikatoren, die keine Entscheidungen mehr untermauern.

## Quellen und weiterführende Literatur

1. Basili, V. R., Caldiera, G., and Rombach, H. D., "The Goal Question Metric Approach," in *Encyclopedia of Software Engineering*, Wiley, 1994.
2. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January-February 1992.
3. Kaplan, R. S., and Norton, D. P., *The Balanced Scorecard: Translating Strategy into Action*, Harvard Business School Press, 1996.
4. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
5. Grove, A. S., *High Output Management*, Random House, 1983.
6. Rockart, J. F., "Chief Executives Define Their Own Data Needs," *Harvard Business Review*, March-April 1979.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
9. Axelos, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
10. Wikipedia, [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili).
11. Wikipedia, [OKR](https://en.wikipedia.org/wiki/OKR).
12. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
13. Wikipedia, [Critical success factor](https://en.wikipedia.org/wiki/Critical_success_factor).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
17. Wikipedia, [Strategy map](https://en.wikipedia.org/wiki/Strategy_map).
