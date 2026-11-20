# Kennzahlen für das Problemmanagement

**Kennzahlen für das Problemmanagement zeigen, ob ein Team die Ursachen seiner Incidents beseitigt oder nur ihre Symptome repariert. Messen Sie also, wie viele Ursachen gefunden werden, wie schnell sie dauerhaft behoben werden und ob dieselben Incidents zurückkehren.**

## Überblick und Motivation

Ein Team, das den Service schnell wiederherstellt, kann trotzdem in einer Tretmühle stecken. Derselbe Fehler kehrt alle paar Wochen wieder, dieselben Menschen werden alarmiert, und die Incident-Zahlen sehen gesund aus, weil jede Reparatur schnell ist. Das Problemmanagement ist die Praktik, die aus der Tretmühle aussteigt. Es blickt über Incidents hinweg, findet die zugrunde liegende Ursache und sorgt dafür, dass sie beseitigt oder eingedämmt wird. Dieses Thema behandelt die Zahlen, die sagen, ob diese Arbeit geschieht und ob sie wirkt.

Vier Begriffe tragen das Thema. Ein **Incident** ist, wie das [ITIL](https://en.wikipedia.org/wiki/ITIL)-Rahmenwerk das Wort verwendet, eine ungeplante Unterbrechung eines Services oder eine Minderung seiner Qualität (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents). Ein **Problem** ist die zugrunde liegende oder vermutete Ursache eines oder mehrerer Incidents. Ein **bekannter Fehler** ist ein Problem, dessen Ursache verstanden ist und für das eine Umgehung erfasst ist, gehalten in einer [Datenbank bekannter Fehler](https://en.wikipedia.org/wiki/Known_error_database), damit die nächste Person, die auf das Symptom trifft, sie finden kann. Eine [Umgehung](https://en.wikipedia.org/wiki/Workaround) verringert oder vermeidet die Auswirkung eines Incidents oder Problems, ohne seine Ursache zu beseitigen. Die dauerhafte Korrektur ist der Change, der die Ursache beseitigt.

Die Ursache zu finden ist die Aufgabe der [Ursachenanalyse](https://en.wikipedia.org/wiki/Root_cause_analysis). Gängige Techniken sind die [fünf Warum](https://en.wikipedia.org/wiki/Five_whys), das [Ishikawa-Diagramm](https://en.wikipedia.org/wiki/Ishikawa_diagram) und das [Pareto-Diagramm](https://en.wikipedia.org/wiki/Pareto_chart), das Ursachen danach ordnet, wie oft sie auftreten oder wie viel Schaden sie anrichten. Komplexe Systeme haben oft mehrere beitragende Ursachen und keinen einzelnen Schuldigen, ein guter Problemdatensatz benennt also die Faktoren, deren Beseitigung die Wiederkehr stoppt, und sagt, wie sicher sich das Team ist.

Die Kennzahlen sind wichtig, weil das Problemmanagement eine eingebaute Berichtsfalle hat. Einen Problemdatensatz zu eröffnen ist leicht und fühlt sich produktiv an. Einen zu schließen ist auch leicht, denn ein Datensatz lässt sich mit einer Notiz schließen. Keines der beiden Ereignisse zeigt, dass es für Nutzer besser wurde. Die beobachtenswerten Messgrößen liegen weiter stromabwärts: ob mit einem Problem verknüpfte Incidents aufhören wiederzukehren, ob bekannte Fehler von den Bereitschaftsleuten tatsächlich genutzt werden und wie lange eine diagnostizierte Ursache auf ihre Korrektur wartet.

ITIL- und agile Sicht treffen sich hier ohne viel Reibung. In ITIL 4 ist das Problemmanagement eine Praktik im Service-Wertschöpfungssystem, nah an Incident-Management, Change-Befähigung und Wissensmanagement. Sein agiles Gegenstück ist der Strom kleiner, belegbasierter Korrekturen, der durch den [Backlog](https://en.wikipedia.org/wiki/Backlog) eines Teams fließt, die Retrospektive, die ein Muster erkennt, und die Gewohnheit, Zuverlässigkeitsarbeit als gewöhnliche Produktarbeit zu behandeln. Wo die ITIL-Sicht Datensätze, Verantwortung und den bekannten Fehler betont, betont die agile Sicht kleine Lose und schnelles Feedback. Beide wollen weniger wiederkehrende Incidents, und dieses Ergebnis ist die Messgröße, die jedem vor Augen bleiben sollte.

Dieses Thema wiederholt nicht die Incident-Uhren (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents) oder die Major-Incident-Messgrößen (siehe Thema 3.4, Kennzahlen für Major Incidents), und es behandelt die Review-Nachverfolgung nur, soweit sie Probleme speist (siehe Thema 4.2, Kennzahlen für Postmortems und Lernen). Der Backlog bekannter Fehler und die weitere Idee der [technischen Schulden](https://en.wikipedia.org/wiki/Technical_debt) werden in Thema 4.6, Technische Schulden und bekannte Fehler, behandelt. Hier liegt der Fokus auf dem Problemdatensatz und den Ergebnissen, die er erzeugt. Deployment-basierte Wiederherstellungs- und Fehlermessgrößen stehen in Thema 2.8, DORA-Kennzahlen.

## Leitprinzipien

- **Wiederkehr messen, nicht Papierkram.** Der Test des Problemmanagements ist, dass verknüpfte Incidents aufhören wiederzukommen. Zählungen eröffneter und geschlossener Datensätze beschreiben Aktivität und sagen wenig über das Ergebnis.
- **Drei Momente trennen.** Zu erkennen, dass ein Muster existiert, seine Ursache zu identifizieren und die Ursache zu beseitigen sind verschiedene Ereignisse mit verschiedenen Uhren und Eignern. Sie zu vermischen verbirgt, wo die Verzögerung sitzt.
- **Eine Umgehung ist eine Stufe, kein Ende.** Erfassen Sie sie, nutzen Sie sie und verfolgen Sie, wie lange sie der einzige Schutz bleibt. Eine Umgehung, die jahrelang lebt, sind Schulden mit einem Eigner, den niemand benennen kann.
- **Die Korrektur dorthin legen, wo die Arbeit ist.** Eine dauerhafte Korrektur landet meist als Change oder Backlog-Element im Besitz eines Produktteams. Messen Sie sie im eigenen Fluss des Teams und zeigen Sie sie dem Team, dem der Service gehört.
- **Incidents an der Quelle mit Problemen verknüpfen.** Jede Messgröße hier hängt von der Verknüpfung zwischen einem Incident und einem Problem ab. Ist die Verknüpfung schwach, sind die Zahlen schwach.
- **Verteilungen und Kohorten gegenüber Durchschnitten bevorzugen.** Problemdauern sind lang und schief, und einige alte Datensätze dominieren jeden Mittelwert (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).
- **Teams und Services beschreiben, nie Menschen.** Probleme sind Systemeigenschaften. Eine Tabelle der pro Analyst geschlossenen Probleme macht aus einer Untersuchung eine Quote.

## Kennzahlendefinitionen

Alle Uhren nutzen die Zeitstempel des Problemdatensatzes, der verknüpften Incident-Datensätze und des verknüpften Changes oder Backlog-Elements. Sofern eine Zeile nichts anderes sagt, werden Probleme nach Service und zuständigem Team gezählt, und zusammengeführte oder doppelte Datensätze sind ausgeschlossen. Perzentile werden für jede Dauer Mittelwerten vorgezogen. Zahlen im Beispiel dieses Themas sind illustrativ.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Eröffnete und geschlossene Probleme | Fluss von Problemdatensätzen in den offenen Zustand und aus ihm heraus, nach Service | Im Zeitraum eröffnete Anzahl und im Zeitraum geschlossene Anzahl, jeweils nach Schließcode (behoben, akzeptiertes Risiko, Duplikat, nicht reproduzierbar); Duplikate werden gezeigt, aber aus der Zählung „behoben“ ausgeschlossen | Anzahl pro Zeitraum | ITSM-Problemdatensätze | Problemmanagement | Backlog-Zufluss und -Durchsatz | Monatlich |
| Alter des Problem-Backlogs | Wie lange offene Probleme gewartet haben | Für jedes offene Problem Stichtag minus Erstellungsdatum des Datensatzes; Median und 85. Perzentil der offenen Probleme und das älteste berichten, nach Priorität | Tage | ITSM-Problemdatensätze | Problemmanagement | Alter von Arbeitselementen auf dem Board | Monatlich |
| Verknüpfungsrate von Incident zu Problem | Anteil der Incidents, die auf ein Problem oder einen bekannten Fehler zeigen, wo einer zu erwarten ist | Incidents im Zeitraum mit einem verknüpften Problem oder bekannten Fehler / Incidents im Zeitraum mit Priorität hoch oder darüber oder wieder eröffnet oder in einer Wiederholungskategorie; als Nutzerfehler oder Duplikate geschlossene Incidents sind ausgeschlossen | Prozent | ITSM-Incident- und Problemdatensätze | Incident-Management; Problemmanagement | Mustererkennung in der Retrospektive | Monatlich |
| Zeit bis zur Grundursache | Wie lange ein diagnostiziertes Problem bis zu einer erfassten Ursache braucht | Die Uhr startet, wenn der Problemdatensatz angelegt wird, und stoppt, wenn die Ursache erfasst und von einer zweiten Person geprüft ist; ohne Ursache geschlossene Probleme sind ausgeschlossen und gesondert gezählt; Median und 85. Perzentil berichten | Tage | ITSM-Problemdatensätze und ihr Audit-Trail | Problemmanagement | Spike oder zeitlich begrenzte Untersuchung | Monatlich |
| Wiederverwendungsrate bekannter Fehler | Wie oft ein bekannter Fehler genutzt wird, wenn ein Incident eintrifft | Mit einem verknüpften bekannten Fehler oder seiner Umgehung gelöste Incidents / Incidents im Zeitraum, deren Symptom einem damals existierenden bekannten Fehler entspricht; Incidents ohne passenden bekannten Fehler sind ausgeschlossen | Prozent | ITSM-Incident-Verknüpfungen; Nutzung von Wissensartikeln | Wissensmanagement; Problemmanagement | Nutzung des Team-Runbooks oder Playbooks | Monatlich |
| Zeit bis zur dauerhaften Korrektur | Wie lange ein Problem von der Diagnose bis zur in Produktion laufenden Korrektur exponiert ist | Die Uhr startet, wenn die Ursache erfasst wird, und stoppt, wenn der verknüpfte Korrektur-Change umgesetzt und bestätigt ist; als akzeptiertes Risiko geschlossene Probleme sind ausgeschlossen und gesondert gezählt; Median und 85. Perzentil berichten | Tage | Problemdatensätze; Change-Datensätze oder Pipeline-Deployment-Ereignisse | Problemmanagement; Change-Befähigung | Zykluszeit des Korrekturelements | Monatlich |
| Wiederkehrrate nach Korrektur | Anteil behobener Probleme, deren verknüpfte Symptome zurückkehrten | Als behoben geschlossene Probleme eines Kohortenquartals mit einem neuen passenden Incident binnen 90 Tagen nach Livegang der Korrektur / in diesem Quartal als behoben geschlossene Probleme; das 90-Tage-Fenster ist ein Beispiel und steht im Diagramm | Prozent | ITSM-Incident- und Problemdatensätze; Deployment-Ereignisse | Problemmanagement; kontinuierliche Verbesserung | Rate entwichener Fehler oder Regressionen | Vierteljährlich |
| Anteil nur umgangener Probleme | Anteil bekannter Probleme, die nur durch eine Umgehung geschützt sind | Offene Probleme im Zustand bekannter Fehler ohne geplante Korrektur / offene Probleme im Zustand bekannter Fehler; Probleme mit akzeptiertem Risiko mit benanntem Eigner und Überprüfungsdatum werden als gesonderte Gruppe gezeigt | Prozent | ITSM-Problemdatensätze | Problemmanagement; Risikomanagement | Register technischer Schulden | Monatlich |

Das 90-Tage-Fenster, die Abgleichsregel für Symptome und die Definition von „zu erwarten“ in der Verknüpfungsrate sind Beispiele. Ein Team wählt Werte, die zu seinen Services passen, und schreibt sie ins Kennzahlenregister (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen). Als „behoben“ geschlossene Probleme getrennt von anderen Schließcodes zu zählen hält das Paar aus eröffnet und geschlossen ehrlich.

## Empfehlungen

### Entscheiden, was als Problem zählt

**1. Eröffnen Sie ein Problem auf Belege hin und sagen Sie, welche.** Gute Auslöser sind wiederkehrende Incidents mit demselben Symptom, ein Major Incident mit unbekannter Ursache, ein im Review gefundener Trend oder ein vor jedem Incident erkanntes Risiko. Schreiben Sie den Auslöser auf den Datensatz, zum Beispiel „fünf Incidents in sechs Wochen, mit demselben Service verknüpft“. Wird jeder ungewöhnliche Incident zu einem Problemdatensatz, füllt sich der Backlog mit Rauschen, und niemand liest ihn.

**2. Nutzen Sie eine kleine, gemeinsame Menge von Schließcodes.** Behoben, akzeptiertes Risiko, Duplikat, nicht reproduzierbar und zusammengeführt genügen den meisten Teams. Jeder Code hat eine einsätzige Bedeutung und einen Eigner, der ihn nutzen darf. Der Mix der Schließcodes ist aufschlussreicher als die Zahl geschlossener Probleme, denn er zeigt, wie viel Arbeit eine Ursache beseitigte und wie viel ohne Änderung endete.

### Incidents und Probleme an der Quelle verknüpfen

**3. Machen Sie die Verknüpfung zu einem Schritt beim Schließen des Incidents.** Bitten Sie den Löser, den Incident vor dem Schließen mit einem Problem, einem bekannten Fehler oder „keine gefunden“ zu verknüpfen. Bieten Sie Vorschläge des Werkzeugs an, wo es sie machen kann, und lassen Sie einen Menschen entscheiden. Eine Wochen später in einer Sammelaktion gesetzte Verknüpfung ist unzuverlässig (siehe Thema 1.5, Datenquellen und Instrumentierung).

**4. Vereinbaren Sie, wie Symptome abgeglichen werden.** Wiederkehr hängt davon ab zu entscheiden, wann zwei Incidents „dieselben“ sind. Eine kurze Taxonomie von Ursachen und Symptomen mit Definitionen und Beispielen ist besser als Freitext. Überprüfen Sie jedes Quartal eine Stichprobe von Zuordnungen, denn Fehlzuordnungen in beide Richtungen verzerren die Wiederkehrrate.

**5. Lassen Sie die Musterüberprüfung die Problemliste speisen.** Eine monatliche Überprüfung der Incident-Kategorien, nach Service und per [Pareto-Diagramm](https://en.wikipedia.org/wiki/Pareto_chart), zeigt, welche wenigen Ursachen den meisten Schmerz erzeugen. Nutzen Sie die Überprüfung, um Probleme zu eröffnen und zu priorisieren, und leiten Sie wiederkehrende Ursachen aus Major-Incident-Reviews in dieselbe Liste (siehe Thema 3.2, Incident-Aufkommen und Priorität).

### Die drei Verzögerungen messen

**6. Messen Sie die Stufen getrennt.** Messen Sie vom Anlegen des Datensatzes bis zur erfassten Ursache und von der erfassten Ursache bis zur in Produktion laufenden Korrektur. Die erste Verzögerung weist auf Untersuchungskapazität, Zugriff auf Daten und Fähigkeit hin. Die zweite weist auf Priorisierung, den Change-Prozess und konkurrierende Funktionsarbeit hin. Eine einzelne „Zeit bis zum Schließen eines Problems“ vermischt sie und gibt niemandem eine klare Handlung.

**7. Berichten Sie die alten.** Zeigen Sie Median und 85. Perzentil des Alters offener Probleme und listen Sie die ältesten nach Service. Einige Jahre alte Datensätze bewegen einen Mittelwert und sagen wenig, während die Liste der ältesten zu einer Entscheidung einlädt: beheben, das Risiko mit benanntem Eigner und Überprüfungsdatum akzeptieren oder mit Grund schließen.

### Die Korrektur in den normalen Fluss legen

**8. Behandeln Sie eine dauerhafte Korrektur als Backlog-Element mit Eigner und Datum.** Verknüpfen Sie das Problem mit dem Change oder Arbeitselement, das die Korrektur trägt, und zeigen Sie die Korrektur auf demselben Board wie Funktionsarbeit. Priorisieren Sie nach einer vereinbarten Regel, etwa die Kosten wiederkehrender Incidents gegen den Korrekturaufwand abzuwägen. Wo eine Korrektur einen Change braucht, sollte der Standard-Change-Weg für risikoarme Korrekturen schnell sein (siehe Thema 4.3, Kennzahlen für die Change-Befähigung).

**9. Fragen Sie nach Umgehung und Ausstiegsdatum zusammen.** Eine Umgehung kauft Zeit. Erfassen Sie sie als bekannten Fehler, testen Sie, dass das Bereitschaftsteam sie finden und ausführen kann, und setzen Sie ein Überprüfungsdatum für die Korrektur. Der Anteil nur umgangener Probleme wird dann zu einer Liste von Entscheidungen statt zu einem stillen Haufen Schulden (siehe Thema 4.6, Technische Schulden und bekannte Fehler).

### Prüfen, dass Korrekturen wirkten

**10. Folgen Sie jeder Korrektur mit einem Wiederkehrfenster.** Beobachten Sie, nachdem eine Korrektur live ist, für ein genanntes Fenster passende Incidents und berichten Sie den Anteil der Korrekturen, die hielten, nach vierteljährlichen Kohorten. Wiederkehr ist das Nächste an einer Ergebnismessgröße, was diese Praktik hat. Ist sie hoch, fragen Sie, ob die Ursache gefunden oder nur ein Beitrag erfasst wurde, und eröffnen Sie die Analyse erneut.

**11. Messen Sie die Wiederverwendung bekannter Fehler dort, wo Löser arbeiten.** Zählen Sie, wie oft ein bekannter Fehler oder seine Umgehung genutzt wird, wenn ein passender Incident eintrifft. Eine niedrige Wiederverwendungsrate bei vielen bekannten Fehlern bedeutet meist, dass die Einträge schwer zu finden, veraltet oder für den Analysten statt für den Löser geschrieben sind. Beheben Sie den Artikel und seine Platzierung, bevor Sie mehr davon hinzufügen (siehe Thema 3.6, Kennzahlen für Wissensmanagement).

### Die Zahlen ehrlich halten

**12. Zeigen Sie Kohorten und Vorbehalte neben jedem Diagramm.** Halten Sie Definitionen, Schließcode-Mix und jede Regeländerung im Diagramm selbst fest. Vierteljährliche Kohorten behobener Probleme zeigen Wiederkehr, ohne alte und neue Arbeit zu mischen. Koppeln Sie jede Zählung mit einer Ergebnismessgröße, damit keine Zahl allein steht (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Eröffnete und geschlossene Probleme | Viele triviale Datensätze eröffnen; ein Problem in mehrere zerlegen; Datensätze als Duplikate oder „nicht reproduzierbar“ schließen, um die Liste zu leeren | Mix der Schließcodes; Wiederkehrrate nach Korrektur; jedes Quartal eine Stichprobe geschlossener Datensätze lesen |
| Alter des Problem-Backlogs | Die ältesten Datensätze ohne Korrektur schließen; als neuen Datensatz wieder eröffnen, um die Uhr zurückzusetzen; ein Problem als Anfrage umklassifizieren | Neue Datensätze mit ihren Originalen verknüpfen und das Alter ab dem ersten Datensatz berichten; Liste der Schließungen nach Grund; Überprüfung akzeptierter Risiken |
| Verknüpfungsrate von Incident zu Problem | Jeden Incident mit einem vagen Sammelproblem verknüpfen, um die Rate zu heben | Anteil der Verknüpfungen, die auf die fünf größten Probleme zeigen; Stichprobe von Verknüpfungen auf echte Übereinstimmung geprüft; Wiederkehr verknüpfter Symptome |
| Zeit bis zur Grundursache | Eine schnelle, flache Ursache erfassen, um die Uhr zu stoppen; „menschlicher Fehler“ nennen; den zweiten Prüfer überspringen | Wiederkehrrate nach Korrektur; die Ursachentaxonomie, in der „menschlicher Fehler“ nicht allein akzeptiert wird; Überprüfung einer Stichprobe von Ursachen gegen die Belege |
| Wiederverwendungsrate bekannter Fehler | Eine nach dem Schließen des Incidents hinzugefügte Verknüpfung zählen; einen bekannten Fehler jedem Incident eines Services hinzufügen | Zeit zwischen Schließen des Incidents und Verknüpfung; Löser-Feedback, ob der Eintrag half; Überprüfung von Einträgen, die in 90 Tagen nicht genutzt wurden |
| Zeit bis zur dauerhaften Korrektur | Den Change als umgesetzt markieren, bevor die Korrektur verifiziert ist; als akzeptiertes Risiko schließen, um die Arbeit zu vermeiden | Wiederkehrrate nach Korrektur; Liste akzeptierter Risiken mit Eigner und Überprüfungsdatum; Verifizierungsschritt, bevor die Uhr stoppt |
| Wiederkehrrate nach Korrektur | Symptome eng definieren, damit Wiederkehr nicht passt; das Schließfenster weiten, damit Korrekturen in frühere Kohorten fallen; das Verknüpfen verzögern | Ursachentaxonomie von jemandem außerhalb des zuständigen Teams überprüft; Incident-Verknüpfungsrate; Fenster im Voraus festgelegt |
| Anteil nur umgangener Probleme | Eine Platzhalterkorrektur ohne echtes Datum einplanen; Probleme in akzeptiertes Risiko verschieben; die Priorität des Problems senken | Alter eingeplanter Korrekturen, die rutschten; Liste akzeptierter Risiken mit benannter Führungskraft als Eigner überprüft; Kosten wiederkehrender Incidents je Problem |

Ein gesunder Befund wirkt ruhig und ein wenig langweilig. Eröffnete und geschlossene Zählungen laufen ungefähr im Gleichschritt, die ältesten offenen Probleme haben je eine erfasste Entscheidung, der Anteil der Korrekturen, die hielten, ist hoch und die Kohortenlinien sind stetig, und bekannte Fehler werden von den Menschen genutzt, die auf die Symptome treffen. Das Warnmuster ist eine lange, saubere Zahl geschlossener Probleme neben Incidents, die immer wiederkehren. Sehen die Aktivitätszahlen hervorragend aus und Nutzer stoßen weiter auf denselben Fehler, vertrauen Sie den Nutzern.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Förmliche Problemdatensätze für wiederkehrende und Major Incidents | Klarer Eigner, Historie und Verknüpfung zu Korrekturen; stützt Prüfungen | Prozessaufwand; Datensätze können veralten |
| Ursachen im Backlog des Teams ohne Problemdatensatz beheben | Schnell, leichtgewichtig, nah an der Arbeit | Teamübergreifende Muster bleiben unsichtbar; kein gemeinsamer bekannter Fehler |
| Strikte Schließcodes und vierteljährliche Kohorten | Ehrliche Ergebnissicht; widersteht sauberen Zählungen | Langsamer zu lesen; braucht Disziplin bei der Dateneingabe |
| Geschlossene Probleme als Ziel zählen | Leicht zu erklären und darzustellen | Lädt zum Schließen um der Zahl willen ein; belohnt kleine Probleme |
| Wiederkehr behobener Probleme verfolgen | Das Nächste an einer Messgröße, ob es wirkte | Braucht gute Symptomzuordnung und ein ausreichend langes Fenster |
| Wiederverwendung bekannter Fehler verfolgen | Zeigt, ob das Wissen Lösern hilft | Hängt davon ab, dass Löser den Eintrag verknüpfen; kann manipuliert werden |

Teams, die Ursachen schnell im eigenen Backlog beheben, sollten die Ursache dennoch dort erfassen, wo die weitere Organisation sie sehen kann, damit ein anderes Team, das auf dasselbe Symptom trifft, profitiert. Investieren Sie zuerst in die Verknüpfung zwischen Incidents und Problemen und in das Wiederkehrfenster. Diese zwei Teile machen jede andere Messgröße interpretierbar.

## Fragen für die Diskussion im Team

**1. Welche drei Incidents haben wir letztes Quartal am häufigsten repariert, und was hielt uns davon ab, ihre Ursache zu beheben?**
Listen Sie die wiederkehrenden Incidents aus dem Service Desk oder Incident-Werkzeug auf und sortieren Sie sie nach Zahl der Vorkommen. Fragen Sie bei jedem, was das Hindernis war: keine Untersuchungszeit, keine vereinbarte Ursache, eine Korrektur im Wettbewerb mit Funktionen oder eine Korrektur, die ein anderes Team braucht. Die Moderation sollte nach Hindernissen suchen, die sich über die drei wiederholen, denn sie weisen auf eine Systemkorrektur statt einer technischen hin.

**2. Wenn wir einen Incident mit einem Problem verknüpfen, wer tut es, wann, und woher wissen wir, dass es das richtige Problem ist?**
Gehen Sie einen jüngeren Incident vom Schließen bis zur Verknüpfung durch. Notieren Sie, ob die Verknüpfung während des Incidents, beim Schließen oder in einer späteren Bereinigung gesetzt wird. Überprüfen Sie gemeinsam eine kleine Stichprobe von Verknüpfungen auf echte Übereinstimmung. Einigen Sie sich auf eine Änderung, die die Verknüpfung leichter oder verlässlicher macht.

**3. Wie lange wartet eine diagnostizierte Ursache auf ihre Korrektur, und wer entscheidet die Reihenfolge?**
Nehmen Sie die Probleme mit erfasster Ursache und sehen Sie sich die Zeit seit der Diagnose an. Fragen Sie, wer sie priorisiert und welche Regel er nutzt. Die Diskussion zeigt oft, dass die Verzögerung eine Warteschlange vor dem Produkt-Backlog ist und keine technische Schwierigkeit. Einigen Sie sich, wie Problemkorrekturen mit Funktionsarbeit verglichen werden.

**4. Was sind unsere ältesten Umgehungen, und was würden wir verlieren, wenn wir sie ein weiteres Jahr behielten?**
Benennen Sie die drei langlebigsten Umgehungen und was sie an manuellem Aufwand, Risiko und Wissen der Menschen kosten, die sich noch erinnern. Fragen Sie, was geschähe, wenn die Person, die die Umgehung kennt, abwesend wäre. Entscheiden Sie für jede, ob sie zu beheben ist, das Risiko mit Eigner und Überprüfungsdatum zu akzeptieren oder der Service stillzulegen.

**5. Wenn ein behobenes Problem zurückkommt, erfahren wir es, und wie schnell?**
Fragen Sie, wie ein zurückkehrendes Symptom bemerkt würde und wer die Analyse wieder eröffnete. Besprechen Sie, ob das Wiederkehrfenster für die Art des Fehlers lang genug ist. Die Moderation sollte der Gruppe helfen, sich auf ein Fenster und eine Abgleichsregel zu einigen und zu entscheiden, welches Team die Zuordnungen überprüft, damit das zuständige Team nicht seine eigene Arbeit bewertet.

**6. Nutzen die Menschen im Bereitschaftsdienst unsere bekannten Fehler, und was würde sie danach greifen lassen?**
Fragen Sie Löser, wann sie zuletzt nach einem bekannten Fehler gesucht haben und was sie fanden. Sehen Sie sich an, wo die Einträge liegen, wie sie betitelt sind und ob sie sagen, was zuerst zu tun ist. Wählen Sie einen Eintrag, den Sie mit einem Löser umschreiben und in der nächsten Bereitschaftswoche testen.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams besitzen die meisten dauerhaften Korrekturen und spüren den Sog der Funktionsarbeit. Sie gewinnen davon, die Incident-Kosten eines wiederkehrenden Fehlers neben dem Aufwand seiner Korrektur zu sehen und einen klaren Platz für Korrekturelemente im Backlog zu haben. Sie sollten widerstehen, Problemarbeit als Unterbrechung zu behandeln, und stattdessen einen sichtbaren Kapazitätsanteil dafür reservieren. Die Retrospektive ist ein natürlicher Ort, um Muster zu erkennen und Probleme zu eröffnen (siehe Thema 2.1, Flussmaße).

### Service- und Betriebsteams

Betriebsteams sehen die wiederholten Symptome zuerst und tragen die Kosten in Alarmen und manueller Arbeit. Sie führen die Problem- und Known-Error-Datensätze, betreiben die Musterüberprüfung und prüfen, dass Verknüpfungen gesetzt werden. Ihr Risiko ist, Aufwand in Datensätze statt in das Beseitigen von Ursachen zu stecken. Sie sollten die Schließcodes klein halten, den bekannten Fehler zu dem machen, was ein Löser zuerst sieht, und Korrekturen mit den Belegen an das zuständige Team übergeben.

### Führung und Governance

Führungskräfte entscheiden, ob Zuverlässigkeitsarbeit gegen Funktionen gewinnt, und setzen die Anreize dafür, was erfasst wird. Sie sollten Wiederkehr nach Kohorte und die ältesten offenen Probleme anfordern, bevor sie Zählungen anfordern, und akzeptiertes Risiko als Entscheidung behandeln, die einen benannten Eigner und ein Überprüfungsdatum braucht. Einen fallenden Backlog ohne Wiederkehr zu berichten belohnt das Schließen. Governance sollte Trends und Entscheidungen ansehen, nicht eine Rangliste von Teams (siehe Thema 4.6, Technische Schulden und bekannte Fehler).

### Kunden und Nutzer

Nutzer beurteilen das Problemmanagement nach einer Sache: Geht dasselbe weiter schief. Sie sehen keine Problemdatensätze, und es interessiert sie nicht, wie viele geschlossen wurden. Wo Vereinbarungen es erlauben, sagen Sie Kunden ein bekanntes Problem, die Umgehung und das Datum, bis zu dem eine Korrektur erwartet wird, und berichten Sie zurück, wenn sie landet. Eine angekündigte und gelieferte Korrektur schafft mehr Vertrauen als eine stille.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Krankenhauses betreut eine klinische Terminplanungsanwendung, die Stationen und Ambulanzen nutzen. Ein Produktteam baut und betreibt die Anwendung, ein Infrastrukturteam betreibt die Plattform, und ein Service Desk nimmt Anrufe entgegen. Alle Zahlen in diesem Beispiel sind illustrativ.

In einem Quartalsreview bemerkt der Abteilungsleiter, dass das Problem-Dashboard hervorragend aussieht: 46 geschlossene Probleme gegenüber 31 eröffneten, und das älteste offene Problem ist 140 Tage alt. Stationsleitungen klagen weiter, dass der Terminplanungsbildschirm beim Schichtwechsel einfriert. Die Serviceeignerin bittet um die Verknüpfungsrate von Incident zu Problem und die Wiederkehrrate nach Korrektur, die noch nicht im Dashboard stehen.

Die Daten erzählen eine andere Geschichte. Der Mix der Schließcodes zeigt, dass 22 der 46 Schließungen „nicht reproduzierbar“ oder „Duplikat“ waren. Die Verknüpfungsrate für Incidents mit hoher Priorität beträgt 38 Prozent. Die Einfrier-Incidents wurden in vier Kategorien erfasst, sodass kein Muster sichtbar war. Nachdem eine Stichprobe von 30 Incidents von Hand neu verknüpft wurde, zeigten 17 davon auf eine Ursache: eine Datenbanksperre, gehalten von einem nächtlichen Job, der in die Morgenschicht hinein überlief. Die Wiederkehr für im Vorquartal behobene Probleme betrug 27 Prozent, höher, als irgendjemand erwartet hatte.

Das Team trifft drei Entscheidungen. Erstens erhält die Taxonomie von Ursachen und Symptomen einen Eintrag „Terminplanung friert ein“, und das Verknüpfen eines Problems oder „keine gefunden“ wird beim Schließen des Incidents ein verpflichtender Schritt. Zweitens wandert das Problem des nächtlichen Jobs vom Infrastruktur-Backlog auf das Board des Produktteams, mit Eigner und Zieldatum, und eine Umgehung (ein planmäßiger Neustart nach dem Job) wird als bekannter Fehler erfasst und mit dem Service Desk getestet. Drittens ersetzt das Dashboard die Zahl geschlossener Probleme durch drei Zahlen: den Anteil der nach 90 Tagen noch haltenden Korrekturen, Median und 85. Perzentil der Zeit von der erfassten Ursache bis zur Korrektur und die ältesten offenen Probleme mit ihren Entscheidungen.

Acht Wochen später wird die Sperre durch eine Änderung am Job beseitigt. Incidents der Einfrier-Kategorie fallen von etwa neun pro Monat auf zwei, und die Wiederverwendung bekannter Fehler steigt für die verbleibenden Symptome auf 71 Prozent, überwiegend weil der Service Desk nun den Neustart-Eintrag findet. Das Manipulationsrisiko, das das Team auffing, lag in der eigenen früheren Gewohnheit: Datensätze als „nicht reproduzierbar“ zu schließen, wenn ein Incident außerhalb der Arbeitszeit lag. Der Mix der Schließcodes, die jedes Quartal gelesene Stichprobe geschlossener Datensätze und die Wiederkehrkohorte wirken nun als Leitplanken. Niemand wird geordnet, und das Review listet Services und Entscheidungen auf, nicht Analysten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Legen Sie Problemarbeit in den regulären Backlog und die Verbesserungsgespräche, damit dauerhafte Korrekturen offen mit neuer Arbeit konkurrieren. Zu beachten ist, dass ein Ziel für das schnelle Schließen von Problemen dazu führt, sie mit Umgehungen zu schließen.

### KI

KI kann Incidents clustern, Grundursachen vorschlagen und Problemdatensätze entwerfen, was Problemzahlen und Verknüpfungsraten erhöhen kann, ohne Ursachen zu beseitigen. Koppeln Sie die Verknüpfungsrate mit der Wiederkehrrate nach Korrektur und kennzeichnen Sie, welche Ursachen von der KI vorgeschlagen und von einem Menschen bestätigt wurden. Zu beachten ist, dass eine von der KI vorgeschlagene Ursache plausibel und falsch sein kann; verifizieren Sie also vor dem Schließen.

### Automatisierung

Verknüpfen Sie Incidents automatisch mit Problemen, wo Signale passen, und messen Sie die Zuordnung an falschen Verknüpfungen. Zu beachten ist, dass das automatische Schließen eines Problems, wenn Incidents aufhören, eine Ursache verbirgt, die nur still geworden ist.

### Analytik

Zeigen Sie die Zeit bis zur dauerhaften Korrektur als Verteilung und die Wiederkehrrate nach Korrekturen. Die Entscheidung, die dies untermauert, ist, welche Ursachen Kapazität verdienen. Zu beachten ist, dass Wiederkehr ein langes Fenster braucht; sagen Sie also, wie lange Sie beobachtet haben.

## Branchenperspektive

**Startup.** Es gibt selten einen eigenen Problemprozess. Das Team behebt Ursachen direkt, und das Risiko ist, dass sich niemand erinnert, warum. Führen Sie eine einseitige Liste wiederkehrender Incidents und ihrer Ursachen, verknüpfen Sie Korrekturen mit dem Issue-Tracker und überprüfen Sie die Liste monatlich. Messen Sie Wiederkehr und das Alter der ältesten Elemente; lassen Sie förmliche Schließcodes aus, bis das Team wächst.

**Kleinunternehmen.** Eine IT-Person oder ein Managed-Service-Provider betreibt womöglich alles. Bitten Sie den Provider um seine Problemdatensätze und die Incident-Kategorien dahinter sowie um die schriftliche Definition von „gelöst“. Eine kurze Liste der fünf häufigsten wiederkehrenden Probleme, mit benanntem Eigner und Datum je Eintrag, schlägt ein schweres Werkzeug. Exportieren Sie die Datensätze periodisch, um Lock-in zu vermeiden.

**Großunternehmen.** Viele Services und Lieferanten erzeugen den größten Bedarf an gemeinsamen Definitionen. Einigen Sie sich über Teams auf Ursachentaxonomie, Schließcodes und Wiederkehrfenster, benennen Sie Problemeigner nach Service und berichten Sie nach Service und Kohorte. Wo ein Lieferant eine Korrektur hält, verfolgen Sie die Reaktion des Lieferanten gegen die Vereinbarung (siehe Thema 8.4, Kennzahlen für Lieferanten und Verträge) und eskalieren Sie über einen dokumentierten Weg.

**Behörden und öffentlicher Sektor.** Prüfung, Change-Kontrolle und Beschaffung können den Weg von der Ursache zur Korrektur verlängern, die Uhr der Zeit bis zur Korrektur sollte also zeigen, wo die Verzögerung sitzt: Untersuchung, Genehmigung, Beschaffung oder Terminierung. Akzeptierte Risiken brauchen erfasste Eigner und Überprüfungsdaten, die einer Prüfung standhalten. Aufbewahrungs- und Datenschutzregeln gelten für Incident- und Problemdatensätze, besonders wo klinische oder Bürgerdaten darin erscheinen.

## Business Case: Motive, ROI und TCO

Die Kosten haben drei Teile. Der erste ist Untersuchungszeit: Menschen mit den Fähigkeiten und dem Zugriff, Incidents zu analysieren, was mit ihrer anderen Arbeit konkurriert. Der zweite ist die Korrektur selbst, geliefert über den Backlog und den Change-Prozess. Der dritte sind die Kosten für Erfassung und Berichterstattung: Incidents verknüpfen, Taxonomien pflegen, die Musterüberprüfung durchführen und die Datenbank bekannter Fehler pflegen. Diese Kosten sind überwiegend die Zeit von Menschen, zählen Sie also Stunden.

Der Ertrag zeigt sich als Incidents, die nicht mehr wiederkehren, weniger Alarme und weniger manueller Umgehungsaufwand, kürzere Incident-Bearbeitung, weil Löser bekannte Fehler finden, und weniger Eskalationen an Ingenieure. Keine allgemeine Zahl gilt, schätzen Sie also Ihre eigene. Multiplizieren Sie für einen wiederkehrenden Incident die Vorkommen pro Jahr mit dem durchschnittlichen Bearbeitungsaufwand und einer Schätzung der geschäftlichen Auswirkung pro Vorkommen und vergleichen Sie das mit dem Aufwand der Korrektur. Überprüfen Sie die Schätzung mit der Serviceeignerin, nennen Sie sie eine Schätzung und überprüfen Sie sie erneut, nachdem das Wiederkehrfenster gezeigt hat, was geschah. Problemmanagement zahlt sich am besten bei den wenigen Ursachen aus, die den größten Teil der Incident-Last erzeugen, die die Pareto-Sicht schnell findet.

## Anti-Muster und Fallstricke

- **Schließen als Ziel.** Ein Ziel für geschlossene Probleme belohnt triviale Datensätze und frühes Schließen. Berichten Sie zuerst Ergebnismessgrößen und zeigen Sie den Mix der Schließcodes.
- **Problemdatensätze als Friedhof.** Datensätze liegen offen ohne Eigner, Datum oder Entscheidung. Überprüfen Sie die Liste der ältesten im Rhythmus und verlangen Sie für jedes Element eine Entscheidung.
- **Bei „menschlichem Fehler“ stehen bleiben.** Er nennt, wer das System berührte, nicht warum das System den Fehler zuließ. Akzeptieren Sie eine Ursache nur, wenn sie einen änderbaren Zustand benennt.
- **Nichts beheben, bis die Grundursache sicher ist.** Komplexe Fehler haben womöglich keine einzelne Ursache. Wenden Sie eine Umgehung und die am besten gestützte Korrektur an und beobachten Sie dann die Wiederkehr.
- **Umgehungen ohne Ausstieg.** Eine Umgehung ohne Überprüfungsdatum wird dauerhaft. Erfassen Sie Eigner und Datum, wenn der bekannte Fehler angelegt wird.
- **Schwache Incident-Verknüpfungen.** Fehlende oder schlampige Verknüpfungen machen Wiederkehr unsichtbar. Machen Sie das Verknüpfen zum Teil des Incident-Schließens und ziehen Sie Stichproben.
- **Problemarbeit außerhalb des Backlogs.** Korrekturen in einer gesonderten Warteschlange warten ewig. Legen Sie das Korrekturelement auf das Board des zuständigen Teams und priorisieren Sie es gegen Funktionen.
- **Analysten oder Teams nach geschlossenen Datensätzen vergleichen.** Es belohnt leichte Services und lädt zur Manipulation ein. Vergleichen Sie Services im Zeitverlauf mit ihrer eigenen Historie und lesen Sie die Kohorten.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Problemerkennung und Verknüpfung | Probleme nur nach großen Ausfällen eröffnet; keine Incident-Verknüpfungen | Einige Teams verknüpfen Incidents; Kategorien unterscheiden sich je Team | Gemeinsame Taxonomie und Schließcodes; Verknüpfung beim Schließen des Incidents gesetzt | Verknüpfungsrate und Zuordnungsqualität stichprobenartig geprüft und überprüft | Muster über Teams und Lieferanten erkannt, mit gemeinsamen bekannten Fehlern |
| Grundursache und bekannte Fehler | Ursache, falls überhaupt, in Freitext erfasst | Bekannte Fehler von einigen Teams an verschiedenen Orten geführt | Eine Datenbank bekannter Fehler; Prüfung der Ursachen durch eine zweite Person | Zeit bis zur Grundursache und Wiederverwendung bekannter Fehler im Trend und beachtet | Löser, Lieferanten und Kunden tragen zu gemeinsamen Einträgen bei und nutzen sie |
| Korrekturlieferung | Korrekturen geschehen, wenn jemand Zeit hat | Korrekturen in der eigenen Liste eines Teams verfolgt | Korrektur mit einem Backlog-Element oder Change mit Eigner und Datum verknüpft | Zeit bis zur dauerhaften Korrektur überprüft, mit dafür reservierter Kapazität | Korrekturpriorität gemeinsam mit Produkt- und Lieferanten-Roadmaps gesetzt |
| Ergebnis und Lernen | Zählungen von Datensätzen berichtet | Backlog-Alter in einigen Reviews berichtet | Wiederkehr nach Korrektur und Anteil nur umgangener Probleme mit Definitionen berichtet | Kohorten mit Leitplanken gekoppelt und in Finanzierungsentscheidungen genutzt | Definitionen überarbeitet, wenn sie keine Entscheidungen mehr untermauern; Verbesserung ist Routine |

## Checkliste

- [ ] Das Kennzahlenregister definiert ein Problem, einen bekannten Fehler und jeden Schließcode.
- [ ] Das Schließen von Incidents umfasst eine Verknüpfung zu einem Problem, einem bekannten Fehler oder „keine gefunden“.
- [ ] Eine Taxonomie von Ursachen und Symptomen existiert, mit Definitionen und Beispielen.
- [ ] Jedes Problem hat einen Eigner, einen Auslöser und ein Entscheidungsdatum.
- [ ] Zeit bis zur Grundursache und Zeit bis zur dauerhaften Korrektur werden getrennt mit Perzentilen gemessen.
- [ ] Jede dauerhafte Korrektur ist mit einem Backlog-Element oder Change mit Eigner verknüpft.
- [ ] Jede Umgehung hat einen Eigner und ein Überprüfungsdatum.
- [ ] Die Wiederkehr nach Korrektur wird nach vierteljährlicher Kohorte mit genanntem Fenster verfolgt.
- [ ] Die Wiederverwendung bekannter Fehler wird dort gemessen, wo Löser arbeiten.
- [ ] Die ältesten offenen Probleme werden im Rhythmus überprüft, und jede Entscheidung wird erfasst.
- [ ] Jedes Quartal wird eine Stichprobe geschlossener Datensätze gelesen, um Schließcodes und Ursachen zu prüfen.
- [ ] Berichte beschreiben Services und Teams, und keine Tabelle ordnet Einzelpersonen.

## KI-Prompts

**Kandidatenprobleme in einer Menge von Incidents finden.**

```text
Here is an export of incidents for [service or team] from [start date] to [end
date]: [paste incident fields such as id, opened time, category, short
description, resolution note]. Group incidents that may share an underlying
cause, explain the evidence for each group, and rank groups by occurrence count
and by [impact measure, for example hours of user impact]. Mark groups where the
evidence is weak. Do not invent causes, counts, or benchmark values. List your
assumptions and the extra data that would raise your confidence.
```

**Schließcodes und Datensätze von Problemen prüfen.**

```text
Below are [number] closed problem records for [service or team]: [paste id,
closing code, recorded cause, fix reference, closing date]. Check each record
for a closing code that does not match its text, a cause that names a person
instead of a condition, and a fix with no link. Summarize patterns and suggest
three questions for a reviewer. Do not rank people or invent facts about the
records. List your assumptions.
```

**Eine Wiederkehrmessgröße entwerfen.**

```text
We want to measure whether fixed problems stay fixed for [service or team]. Our
tools are [ITSM tool, deployment tool], our incident categories are [list], and
our closing codes are [list]. Propose a definition, formula, clock start and
stop, matching rule for symptoms, recurrence window, and exclusions, with a
chart layout showing quarterly cohorts. Suggest how it could be gamed and a
guardrail for each case. Ask me for the thresholds you need instead of
inventing them. List your assumptions.
```

**Ein Entscheidungsreview gealterter Probleme vorbereiten.**

```text
Here are the open problems older than [number] days for [service or team]:
[paste id, age, priority, owner, last update, workaround status]. Draft an agenda
for a [length]-minute review in which each item receives one of three decisions:
fix with a date, accept the risk with a named owner and review date, or close
with a reason. Suggest the evidence to bring for each decision. Do not invent
costs or outcomes. List your assumptions and the questions I should answer
first.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die Themen zu finden, die die Incident-, Change- und Wissensmessgrößen definieren, von denen Problemkennzahlen abhängen, und die Leitplanke, die jeweils danebengehört.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine neue oder bearbeitete Problemkennzahl ihre Uhren, Ausschlüsse, ihren Manipulationsvektor und ihre Leitplanke nennt.

## Wichtigste Erkenntnisse

- Das Maß des Problemmanagements ist die Wiederkehr: ob die mit einem Problem verknüpften Incidents aufhören wiederzukommen.
- Messen Sie die Stufen getrennt, vom Datensatz bis zur erfassten Ursache und von der Ursache bis zur in Produktion laufenden Korrektur.
- Verknüpfen Sie Incidents beim Schließen mit Problemen, vereinbaren Sie, wie Symptome abgeglichen werden, und ziehen Sie Stichproben der Verknüpfungen.
- Eine Umgehung ist eine Stufe mit Eigner und Überprüfungsdatum, und der Anteil nur umgangener Probleme zeigt, wie viel Risiko getragen wird.
- Legen Sie dauerhafte Korrekturen in den Backlog des zuständigen Teams und berichten Sie Ergebnismessgrößen vor Zählungen von Datensätzen.
- Beschreiben Sie Services, Kohorten und Entscheidungen. Ordnen Sie nie Analysten oder Teams nach geschlossenen Problemen.

## Quellen und weiterführende Literatur

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Ohno, T., *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Known error database](https://en.wikipedia.org/wiki/Known_error_database).
10. Wikipedia, [Workaround](https://en.wikipedia.org/wiki/Workaround).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
13. Wikipedia, [Ishikawa diagram](https://en.wikipedia.org/wiki/Ishikawa_diagram).
14. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
15. Wikipedia, [Backlog](https://en.wikipedia.org/wiki/Backlog).
16. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
