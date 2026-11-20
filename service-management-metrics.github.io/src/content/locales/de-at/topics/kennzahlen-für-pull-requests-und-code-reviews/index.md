# Kennzahlen für Pull Requests und Code-Reviews

**Im Review wartet fertige Arbeit am häufigsten. Messen Sie deshalb, wie lange eine Änderung liegt, bevor jemand hinsieht, wie groß sie ist und wie oft sie zurückkommt, und koppeln Sie jede Geschwindigkeitszahl mit einem Qualitätssignal, damit schneller nie nachlässig bedeutet.**

## Überblick und Motivation

Ein [Pull Request](https://en.wikipedia.org/wiki/Pull_request) ist der Vorschlag, eine Menge von Änderungen aus einem Branch eines [Versionsverwaltungs](https://en.wikipedia.org/wiki/Version_control)-Repositorys in einen anderen zu übernehmen, zusammen mit dem Gespräch darüber, ob das geschehen soll. In vielen Teams ist er das formale Tor zwischen „der Autor denkt, es funktioniert“ und „das Team ist einverstanden, dass es ausgeliefert werden kann“. Das Gespräch ist eine Form des [Code-Reviews](https://en.wikipedia.org/wiki/Code_review): Eine andere Person als der Autor liest die Änderung, stellt Fragen und genehmigt sie oder bittet um Überarbeitung. Manche Plattformen nennen dasselbe Merge Request; dieses Thema verwendet „Pull Request“ für beides.

Review zu messen lohnt aus einem schlichten Grund. In der Flusssicht auf Lieferung verbringt ein Arbeitselement den größten Teil seines Lebens mit Warten, und das Review ist eines der Wartezeiten, die vollständig in der Kontrolle des Teams liegen. Ein gemeinsamer Plattform-Engpass oder eine externe Abhängigkeit braucht andere Menschen, die sich ändern. Ein Pull Request, der zwei Tage auf einen ersten Blick wartet, braucht nur die eigenen Gewohnheiten des Teams, die sich ändern. Die Flussmaße in diesem Buch (siehe Thema 2.1, Flussmaße, und Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz) liefern das allgemeine Vokabular. Dieses Thema zoomt in eine Stufe des Zyklus und gibt ihr eigene Instrumente.

Agile und ITIL-Sichtweisen treffen sich hier nützlich. Aus agiler Perspektive ist Review eine Feedbackschleife und ein Lehrmechanismus. Es verbreitet Wissen über die Codebasis, fängt Fehler früh ab und setzt die Arbeitsvereinbarungen und die Definition of Done des Teams durch. Aus ITIL-Perspektive stützt dieselbe Tätigkeit mehrere Praktiken. In ITIL 4 deckt die Praktik Softwareentwicklung und -management ab, wie Software gebaut und geprüft wird, die Change-Befähigung, wie Changes beurteilt und genehmigt werden, und das Deployment-Management, wie Changes die Live-Umgebung erreichen. Ein von Kollegen geprüfter Pull Request ist für viele Organisationen der Beleg, dass ein Standard-Change vor dem Release beurteilt wurde. Review als gemessene, verbesserbare Tätigkeit zu behandeln dient beiden Sichten: Das agile Team will schnelleres Feedback, und die ITIL-Praktik will verlässliche Zusicherung, dass Changes geprüft wurden.

Das Risiko, das durchgehend im Blick bleiben muss, ist, dass sich Review-Geschwindigkeit und Review-Qualität leicht trennen lassen. Ein Team kann seine Zeit bis zum ersten Review halbieren, indem es alles auf den ersten Blick genehmigt, und das Dashboard zeigt einen Triumph, während die Codebasis schlechter wird. [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt für diese Kennzahlenfamilie mit ungewöhnlicher Wucht (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen), denn die Zahlen sind billig zu erheben, für alle sichtbar und trivial leicht zu bewegen, ohne das zu verändern, was sie darstellen sollten. Jede Empfehlung unten ist im Bewusstsein davon geschrieben.

Der **Autor** hat den Pull Request geöffnet, und ein **Reviewer** beurteilt ihn. Eine **Review-Runde** ist eine Schleife aus „Autor schiebt nach, Reviewer antwortet“. **Nacharbeit** ist eine Änderung nach einem Review-Kommentar oder nach dem Merge, um zu beheben, was die erste Version falsch machte. **Kontinuierliche Integration (CI)** ist die Praxis, Arbeit oft in eine gemeinsame Linie zusammenzuführen und jeden Merge automatisch zu prüfen; siehe [kontinuierliche Integration](https://en.wikipedia.org/wiki/Continuous_integration).

Alle Kennzahlen in diesem Thema beschreiben Teams und Repositorys. Sie bringen nie Reviewer oder Autoren in eine Rangfolge. Review-Zählungen auf Individualebene sind leicht zu ziehen und verlockend zu nutzen, und das tun heißt, aus einer Zusammenarbeitspraxis einen Wettbewerb zu machen (siehe Thema 9.1, Teamgesundheit und Entwicklererlebnis).

## Leitprinzipien

- **Warten dominiert das Prüfen.** In den meisten Teams ist der größte Teil der Review-Zeit der ungelesen liegende Pull Request, nicht die Diskussion, sobald ein Reviewer beginnt. Messen Sie das Warten, bevor Sie das Gespräch messen.
- **Kleine Änderungen werden schneller und besser geprüft.** Größe ist einer der wenigen Hebel, der Geschwindigkeit und Gründlichkeit zugleich verbessert, weil ein Reviewer eine kleine Änderung im Kopf behalten kann.
- **Geschwindigkeit ohne Prüfung ist keine Verbesserung.** Jede Geschwindigkeitsmessgröße in diesem Thema braucht ein Qualitätsgegenstück, und das Paar wird zusammen gelesen.
- **Review ist eine Teamkapazität, keine persönliche.** Die Last sollte sich im Team verteilen. Eine Messgröße, die Konzentration zeigt, weist auf ein Entwurfsproblem im Team hin, nie auf eine Person, die zu loben oder zu tadeln wäre.
- **Verteilungen schlagen Durchschnitte.** Review-Zeiten haben einen langen Auslauf festhängender Pull Requests, berichten Sie also den Median und ein hohes Perzentil (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).
- **Die Uhr definieren und dann in Ruhe lassen.** Legen Sie fest, wann die Uhr startet und stoppt, welche Ereignisse sie pausieren und welche automatisierte Aktivität ausgeschlossen ist, und schreiben Sie das dorthin, wo die Daten leben (siehe Thema 1.5, Datenquellen und Instrumentierung).
- **Review-Kennzahlen dienen dem Team, dem die Arbeit gehört.** Sie sind eine Eingabe für die eigene Retrospektive des Teams, keine Scorecard für jemand anderen.

## Kennzahlendefinitionen

Die folgenden Uhren setzen voraus, dass die Versionsverwaltungsplattform die Ereigniszeiten für Öffnen, Review-Anfragen, Kommentare, Genehmigungen, Pushes und Merges erfasst. Entwürfe, von Bots geöffnete Pull Requests und ohne Merge geschlossene Pull Requests sind ausgeschlossen, sofern eine Zeile nichts anderes sagt. „Arbeitsstunden“ bedeutet die erklärten Arbeitszeiten des Teams, sodass ein am Freitagabend geöffneter Pull Request kein Wochenende des Wartens ansammelt.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Zeit bis zum ersten Review | Wartezeit zwischen dem Moment, in dem ein Pull Request review-bereit wird, und der ersten inhaltlichen menschlichen Antwort | Die Uhr startet, wenn der Pull Request den Entwurfsstatus verlässt oder review-bereit geöffnet wird, und stoppt beim ersten Review-Kommentar, bei der ersten Änderungsanforderung oder Genehmigung durch jemand anderen als den Autor; Bot- und Autorenkommentare und reine Label-Änderungen sind ausgeschlossen. Median und 85. Perzentil in Arbeitsstunden berichten | Arbeitsstunden | Ereignisverlauf der Versionsverwaltungsplattform | Softwareentwicklung und -management; Change-Befähigung | Arbeitsvereinbarung zur Reaktionsfähigkeit beim Review; Fluss der Arbeit in Bearbeitung | Wöchentlich |
| Review-Zykluszeit | Gesamtzeit von review-bereit bis zum Merge | Die Uhr startet, wenn der Pull Request review-bereit ist, und stoppt beim Merge; ohne Merge geschlossene Pull Requests sind ausgeschlossen und werden gesondert gezählt. Median und 85. Perzentil in Arbeitsstunden berichten | Arbeitsstunden | Ereignisverlauf der Versionsverwaltungsplattform | Deployment-Management; Change-Befähigung | Zykluszeit der Review-Stufe auf dem Team-Board | Wöchentlich |
| Größe des Pull Requests | Umfang der Änderung in einem Pull Request | Hinzugefügte plus gelöschte Zeilen, ohne generierte Dateien, Lock-Dateien, mitgelieferten Fremdcode und reine Umbenennungen, wie in den Ignorierregeln des Repositorys aufgeführt. Median und 85. Perzentil je gemergtem Pull Request berichten | Geänderte Zeilen | Diff-Statistik der Versionsverwaltungsplattform | Softwareentwicklung und -management | Kleine Losgröße; Zerlegung von Stories | Wöchentlich |
| Review-Runden | Zahl der Schleifen aus Push des Autors und Antwort des Reviewers vor dem Merge | Anzahl eigener Zyklen „Änderungen angefordert“ oder Kommentar-dann-Push je gemergtem Pull Request; die erste Einreichung ist Runde null, Fehlschläge automatischer Prüfungen sind ausgeschlossen. Median und 85. Perzentil berichten | Anzahl | Review- und Push-Ereignisse der Versionsverwaltungsplattform | Kontinuierliche Verbesserung; Softwareentwicklung und -management | Nacharbeitssignal in der Review-Stufe; Definition of Done | Wöchentlich |
| Konzentration der Review-Last | Wie ungleich die Review-Arbeit über ein Team verteilt ist | Anteil der abgeschlossenen Reviews des Teams, den die zwei am stärksten beanspruchten Reviewer über rollierende 4 Wochen bearbeiten; Reviews des eigenen Pull Requests und Bot-Reviews sind ausgeschlossen. Für das Team berichtet, nie nach Namen | Prozent | Review-Ereignisse der Versionsverwaltungsplattform, auf Team aggregiert | Kontinuierliche Verbesserung; Wissensmanagement | Gemeinsamer Codebesitz; kollektive Verantwortung | Monatlich |
| Zahl veralteter Pull Requests | Pull Requests, die länger offen sind als das vereinbarte Limit des Teams | Noch offene, nicht als Entwurf geführte Pull Requests, deren Alter seit review-bereit das Teamlimit überschreitet, gezählt zum Zeitpunkt der Momentaufnahme; Entwürfe sind ausgeschlossen | Anzahl | Liste offener Pull Requests der Versionsverwaltungsplattform | Change-Befähigung; kontinuierliche Verbesserung | Alter von Arbeitselementen; WIP-Limit | Wöchentlich |
| Rate von Korrekturen nach dem Merge | Anteil gemergter Pull Requests, auf die bald danach eine Korrekturänderung folgt | Gemergte Pull Requests, auf die innerhalb von 14 Tagen eine Korrektur, ein Revert oder ein Hotfix zur selben Änderung folgt / gemergte Pull Requests im Zeitraum; als solche gekennzeichnete geplante Folgearbeit ist ausgeschlossen | Prozent | Versionsverwaltungsverlauf, verknüpfte Issues und Incident- oder Change-Datensätze | Change-Befähigung; Incident-Management | Eingebaute Qualität; Definition of Done | Monatlich |

Die Zeit bis zum ersten Review ist der größte Hebel und die Kennzahl, mit der die meisten Teams beginnen sollten. Die Review-Zykluszeit ist ihre Ergebnismessgröße und ein Bestandteil der längeren Durchlaufzeiten, die Thema 2.2 behandelt. Das 14-Tage-Fenster und das Limit für veraltete Pull Requests sind Beispiele; jedes Team wählt Werte, die zu seinem Release-Rhythmus passen, und schreibt sie auf. Wo die Zahlen in das breitere Lieferbild einfließen, übernehmen die DORA-Familie (siehe Thema 2.8, DORA-Kennzahlen) und die Change-Fehler-Messgrößen (siehe Thema 4.4, Change-Fehlschläge und Nacharbeit).

## Empfehlungen

### Das Warten messen, bevor die Arbeit

**1. Beginnen Sie mit der Zeit bis zum ersten Review.** Sie ist meist der größte Beitrag zur Review-Zeit und am billigsten zu verbessern. Instrumentieren Sie sie aus dem Ereignisverlauf der Plattform, damit niemand etwas eingeben muss. Berichten Sie den Median und ein hohes Perzentil, denn ein Median von drei Stunden mit einem 95. Perzentil von vier Tagen bedeutet, dass manche Änderungen vergessen werden.

**2. Schließen Sie Bots und Entwürfe von der Uhr aus und sagen Sie es.** Automatische Prüfungen, Bots für Abhängigkeitsaktualisierungen und Formatierungswerkzeuge erzeugen Kommentare binnen Sekunden, und sie mitzuzählen lässt das Warten hervorragend aussehen. Starten Sie die Uhr, wenn der Autor die Änderung als bereit markiert, nicht wenn der Branch erstmals gepusht wird. Veröffentlichen Sie diese Regeln neben dem Diagramm.

**3. Verwenden Sie Arbeitsstunden und schreiben Sie den Kalender des Teams auf.** Ein am späten Freitag geöffneter Pull Request sollte kein Wochenende des Wartens tragen. Ein über Zeitzonen verteiltes Team braucht eine Regel, wessen Stunden zählen, und oft ist die ehrliche Antwort, dass die Übergabekosten über Zonen hinweg das sind, was sich zu sehen lohnt. Nennen Sie die Wahl und halten Sie sie stabil.

### Die Arbeit prüfbar gestalten

**4. Halten Sie Pull Requests klein und behandeln Sie Größe als Teamgewohnheit.** Verfolgen Sie Median und 85. Perzentil der Größe und sehen Sie sich die großen als Menge an statt als einzelne Fehlschläge. Teams stellen meist fest, dass große Änderungen aus wenigen Ursachen kommen: nicht fein genug zerlegte Arbeit, Vermischen von Refactoring mit neuem Verhalten oder zu langes Warten mit dem Merge. Zerlegen Sie Arbeit so, dass jeder Pull Request eine Sache tut, was auch zum Prinzip kleiner Lose hinter der [Trunk-basierten Entwicklung](https://en.wikipedia.org/wiki/Trunk-based_development) und häufigem Deployment passt.

**5. Setzen Sie keine harte Größenobergrenze als Ziel.** Ein Limit wie „höchstens 400 Zeilen“ lädt dazu ein, eine Änderung in künstliche Stücke zu zerlegen, die einzeln unlesbar sind oder den Build brechen, wenn sie allein gemergt werden. Nutzen Sie die Größe als Gesprächsanstoß in der Retrospektive und geben Sie dem Team Techniken zum Zerlegen, etwa Feature-Toggles, vorbereitendes Refactoring in einem eigenen Pull Request und Merge hinter einem Flag.

**6. Machen Sie die Review-Anfrage ausdrücklich.** Ein Pull Request, der keinen Reviewer nennt, wartet auf einen Freiwilligen, und Freiwillige sind rar. Vereinbaren Sie in der Arbeitsvereinbarung, wer gefragt wird, wie das Team benachrichtigt wird und was die Erwartung an die Antwort ist. Ein gemeinsamer Review-Plan oder ein täglicher Review-Slot verringert das Warten meist stärker als jede Werkzeugeinstellung.

### Last und Wissen verteilen

**7. Beobachten Sie die Lastkonzentration als Risiko auf Teamebene.** Wenn zwei Personen die meisten Reviews bearbeiten, begrenzt ihre Verfügbarkeit den Fluss des Teams, und ihre Abwesenheit stoppt ihn. Überprüfen Sie die Konzentrationsmessgröße monatlich und handeln Sie über den Entwurf des Teams: den Standard-Reviewer rotieren, neuere Mitglieder mit erfahrenen paaren und die Codebereiche aufschreiben, die nur eine Person prüfen kann. Veröffentlichen Sie keine Rangliste je Person.

**8. Nutzen Sie Review, um Wissen zu teilen, und schützen Sie diesen Zweck.** Zum langfristigen Wert von Review gehören Lernen, gemeinsamer Besitz und einheitlicher Stil ebenso wie das Aufspüren von Fehlern. [Pair Programming](https://en.wikipedia.org/wiki/Pair_programming) und Mob Programming verlegen einen Teil dieses Austauschs früher in den Prozess; hat ein Paar bereits an einer Änderung gearbeitet, ist ein leichteres Review vernünftig. Machen Sie die Wahl zur Teamentscheidung in der Arbeitsvereinbarung, damit „gepaart, also leicht geprüft“ eine sichtbare Regel ist und keine Ausrede.

### Das Review selbst steuern

**9. Überlassen Sie der Automatisierung, was sie gut kann.** Formatierung, Linting und Basisprüfungen gehören in die Pipeline, damit sich menschliche Aufmerksamkeit auf Entwurf, Korrektheit und Risiko richtet. [Statische Programmanalyse](https://en.wikipedia.org/wiki/Static_program_analysis) und automatische Tests verringern die Zahl trivialer Review-Runden. Die verbleibenden Runden sagen dann mehr über das Entwurfsgespräch und weniger über Stilstreitigkeiten.

**10. Lesen Sie Review-Runden als Signal über Klarheit, nicht als Fehlerzählung.** Viele Runden können bedeuten, dass die Anforderung unklar war, dem Autor Kontext fehlte, der Reviewer Geschmacksänderungen verlangte oder die Änderung groß war. Null Runden bei jedem Pull Request kann hervorragende Arbeit bedeuten oder dass niemand hingesehen hat. Ziehen Sie eine Handvoll Pull Requests mit ungewöhnlich vielen oder ungewöhnlich wenigen Runden als Stichprobe und lesen Sie sie gemeinsam als Team.

### Geschwindigkeit mit Qualität koppeln und die Zeit sichtbar halten

**11. Zeigen Sie neben der Review-Geschwindigkeit immer ein Qualitätsgegenstück.** Die Rate von Korrekturen nach dem Merge, die mit jüngsten Changes verknüpften Incidents und der Anteil nach dem Release gefundener Fehler sind die natürlichen Partner (siehe Thema 4.4, Change-Fehlschläge und Nacharbeit). Verbessert sich die Review-Zeit, während sich die Korrekturrate verschlechtert, hat das Team Zusicherung gegen Geschwindigkeit getauscht, und die Abhilfe ist ein Gespräch, kein Ziel. Zeigen Sie beide im selben Diagramm.

**12. Verbinden Sie Review mit dem Flussbild und mit ungeplanter Arbeit.** Ein schnelleres Review hilft nur, wenn die nächste Stufe die Arbeit nicht bloß einreiht (siehe Thema 2.3, Laufende Arbeit und Warteschlangentheorie). Dringende Review-Anfragen, die geplante Arbeit unterbrechen, haben eigene Kosten (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Zeit bis zum ersten Review | Als erste Antwort schnell ein „sieht gut aus“ oder ein Emoji posten; einen Bot oder einen wohlgesinnten Reviewer zuweisen; einen Pull Request erst als bereit markieren, nachdem jemand vorab zugesagt hat hinzusehen | Rate von Korrekturen nach dem Merge; Stichprobe von Genehmigungen ohne Kommentare; in der Arbeitsvereinbarung verlangen, dass erste Antworten inhaltlich sind |
| Review-Zykluszeit | Ohne Warten auf Review mergen; eine Änderung in winzige Stücke zerlegen, damit sie schneller durchgeht; einen Pull Request schließen und wieder öffnen, um die Uhr zurückzusetzen | Zahl geschlossener und wieder geöffneter Pull Requests; Review-Runden; Rate von Korrekturen nach dem Merge; Regeln geschützter Branches, die Genehmigung verlangen |
| Größe des Pull Requests | Dateien aus der Zählung ausschließen; eine einzelne Änderung in Stücke zerlegen, die sich einzeln nicht verstehen lassen; die Größe mit generiertem Code aufpolstern | Ignorierregeln jedes Quartal überprüfen; prüfen, dass zerlegte Stücke allein bauen und Tests bestehen; eine Stichprobe der kleinsten und der größten lesen |
| Review-Runden | Beim ersten Durchgang genehmigen, um die Zahl niedrig zu halten; die Diskussion in den Chat verlegen, damit sie keine Spur hinterlässt; Autoren schieben viele Korrekturen in einem Commit nach, um Runden zu verbergen | Rate von Korrekturen nach dem Merge; Stichprobe von Pull Requests mit null Runden; die Diskussion im Pull Request halten |
| Konzentration der Review-Last | Reviews in viele kleine Genehmigungen zerlegen, um die Zählung zu verteilen; Reviews denen zuweisen, die Zeit, aber kein Wissen haben | Wissen des Reviewers für riskante Bereiche prüfen; die Rate von Korrekturen nach dem Merge nach Bereich beobachten; die Messgröße auf Teamebene halten |
| Zahl veralteter Pull Requests | Veraltete Pull Requests ohne Merge schließen; sie in Entwürfe umwandeln, um sie zu verbergen; das Limit für Veraltung anheben | Zahl ungemergt geschlossener Pull Requests; Zahl lange laufender Entwürfe; das Limit jedes Quartal mit dem Team überprüfen |
| Rate von Korrekturen nach dem Merge | Korrekturen unter einem neuen Arbeitselement ohne Verknüpfung erfassen; Korrekturarbeit als geplante Folgearbeit etikettieren; die Messgröße vermeiden, indem die Korrektur über das Fenster hinaus verzögert wird | Mit Incident- und Change-Fehlerdaten vergleichen; Stichprobe von Folgeelementen; Prüfung der verwendeten Etiketten |

Ein gesunder Befund ist ein ruhiger. Die Zeit bis zum ersten Review ist kurz, und der Auslauf ist ebenfalls kurz, sodass kein Pull Request tagelang wartet. Die Größe liegt in einem Bereich, den das Team leicht lesen kann, mit einigen großen Änderungen, die das Team erklären kann. Review-Runden sind niedrig, aber nicht null, die Lastkonzentration ist moderat, die Zahl veralteter Pull Requests klein und die Rate von Korrekturen nach dem Merge stabil. Verbessert sich eine Zahl stark, sollte jemand prüfen, dass sich ihre gekoppelte Leitplanke nicht in die falsche Richtung bewegt hat.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Schnelles Review mit strengen Reaktionserwartungen | Kurze Feedbackschleifen; weniger Kontextverlust für den Autor; weniger Arbeit in Bearbeitung | Druck, schnell zu genehmigen; unterbricht konzentrierte Arbeit |
| Langsames, gründliches Review | Sorgfältiges Lesen von Entwurf und Risiko; stärkerer Wissenstransfer | Längere Zykluszeit; größere Lose bauen sich auf; Autoren ziehen weiter und verlieren Kontext |
| Kleine Pull Requests | Leichter zu lesen und zurückzunehmen; glatterer Fluss | Mehr Aufwand je Änderung; kann eine Funktion in verwirrende Schritte zerstückeln |
| Große Pull Requests | Weniger Übergaben; ganze Funktion auf einmal sichtbar | Reviews werden oberflächlich; schwerer zurückzunehmen; lange Wartezeiten |
| Verlangte Genehmigung durch einen benannten Eigner | Klare Verantwortung für riskante Bereiche; stützt die Change-Genehmigung | Erzeugt einen Engpass und eine einzelne Fehlerquelle |
| Automatische Prüfungen vor dem menschlichen Review | Befreit Menschen für Entwurf und Risiko; konsistent | Kann falsche Zuversicht erzeugen; braucht Pflege |

Keine einzelne Richtlinie gewinnt. Ziel ist, das Warten zu verkürzen und dabei die Prüfung zu bewahren, und der übliche Weg sind kleinere Änderungen, klare Review-Erwartungen, starke Automatisierung für Routineprüfungen und eine Teamvereinbarung darüber, wie ein gutes Review aussieht. Review-Kennzahlen sind am nützlichsten als Fragen für eine Retrospektive und am wenigsten nützlich als Ziele.

## Fragen für die Diskussion im Team

**1. Wo verbringt ein Pull Request den größten Teil seines Lebens, beim Warten oder beim Geprüftwerden?**
Bitten Sie das Team zu raten, bevor es die Daten sieht, und zeigen Sie dann die Aufteilung zwischen Zeit bis zum ersten Review und der verbleibenden Zeit bis zum Merge. Die meisten Gruppen überrascht, wie viel Warten ist. Die Moderation sollte festhalten, welche Vermutungen falsch lagen, und fragen, was jede falsche Vermutung darüber sagt, wie das Team Review erlebt. Enden Sie mit einer Änderung, die das größte Warten angeht.

**2. Wie sieht ein gutes Review in diesem Team aus, und woran würde ein Außenstehender es erkennen?**
Listen Sie die Verhaltensweisen auf, die das Team schätzt, etwa nach dem Entwurf zu fragen, Tests zu prüfen und den Grund einer Bitte zu erklären. Fragen Sie dann, welche davon eine sichtbare Spur im Pull Request hinterlassen. Besprechen Sie, wie sich eine inhaltliche erste Antwort von einer Pro-forma-Antwort unterscheiden lässt, ohne Einzelne zu kontrollieren. Einigen Sie sich auf eine kurze schriftliche Beschreibung für die Arbeitsvereinbarung.

**3. Wie groß ist für uns zu groß, und was tun wir, wenn die Arbeit wirklich groß ist?**
Sehen Sie sich die Größenverteilung an und wählen Sie einige der größten Pull Requests. Fragen Sie, warum jeder groß war und ob er sich hätte zerlegen lassen. Besprechen Sie Techniken wie Feature-Toggles, vorbereitendes Refactoring und Merge hinter einem Flag. Die Moderation sollte der Versuchung widerstehen, ein numerisches Limit zu setzen, und sich stattdessen auf eine Gewohnheit einigen, die das Team einen Monat lang ausprobiert.

**4. Wer prüft unseren riskantesten Code, und was geschieht, wenn diese Person abwesend ist?**
Ordnen Sie Codebereiche den Menschen zu, die sie gut prüfen können. Sehen Sie sich die Lastkonzentration und die Bereiche mit nur einem qualifizierten Reviewer an. Besprechen Sie, wie sich in jedem ein zweiter Reviewer aufbauen lässt, durch Paarung oder rotierende Zuweisungen. Halten Sie das Gespräch bei der Widerstandsfähigkeit des Teams, nicht bei der Arbeitslast-Rangfolge einer Person.

**5. Wenn sich unsere Review-Geschwindigkeit morgen verdoppelte, was wollten wir über die Qualität wissen?**
Bitten Sie die Gruppe, die Qualitätssignale zu nennen, die sie beobachten würde, etwa Korrekturen nach dem Merge, mit jüngsten Changes verknüpfte Incidents oder die Zahl der Reverts. Prüfen Sie, ob diese Signale derzeit neben dem Geschwindigkeitsdiagramm sichtbar sind. Besprechen Sie, was ein frühes Zeichen wäre, dass Geschwindigkeit auf Kosten der Prüfung erkauft wurde. Einigen Sie sich, welches Gegenstück im Dashboard gezeigt wird.

**6. Welche Review-Zahlen würden wir versucht sein, auf eine Weise zu verbessern, die nicht hilft?**
Gehen Sie jede Kennzahl durch und fragen Sie, wie jemand unter Druck sie besser aussehen lassen könnte, ohne etwas besser zu machen. Vergleichen Sie die Antworten mit der Manipulationstabelle oben und ergänzen Sie die eigenen Ideen des Teams. Ziel ist, das Risiko zu benennen, bevor es eintritt. Einigen Sie sich, welche Leitplanke neben jeder Kennzahl überprüft wird.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams besitzen den Review-Prozess und sollten seine Kennzahlen besitzen. Am meisten bringt ihnen, das Warten mit einfachen Vereinbarungen zu verkürzen: ein täglicher Review-Slot, ein klarer Anfrageprozess und kleine Änderungen. Sie sollten die Zahlen in Retrospektiven nutzen, die Arbeit in Bearbeitung niedrig halten und der Versuchung widerstehen, ein einzelnes Diagramm zu optimieren. Im Review lernen auch neuere Mitglieder die Codebasis kennen, schützen Sie diesen Zweck also.

### Service- und Betriebsteams

Betriebsteams begegnen Review dort, wo Infrastrukturcode, Konfiguration und Runbook-Automatisierung über Pull Requests geändert werden. Für sie ist Review oft Teil dessen, wie ein Standard-Change genehmigt und belegt wird (siehe Thema 4.3, Kennzahlen für die Change-Befähigung). Sie sollten vereinbaren, welche Changes ein Review durch eine zweite Person brauchen, wie schnell dringende Korrekturen geprüft werden und wie Notfall-Changes nachträglich geprüft werden, damit auch eine überstürzte Korrektur untersucht wird. Ein dünnes Review bei einem riskanten Change zeigt sich später als Incident.

### Führung und Governance

Führungskräfte sollten Review-Kennzahlen als Signale über Teamgesundheit und Fluss behandeln, nicht als Produktivitätswerte. Sie sollten bei jeder berichteten Geschwindigkeitszahl das gekoppelte Qualitätsmaß verlangen, die Zeit unterstützen, die sorgfältiges Review braucht, und es vermeiden, Teams an der rohen Review-Zeit zu vergleichen, denn Repositorys und Risiken unterscheiden sich. Governance-Gremien können Review-Belege als Teil der Change-Zusicherung nutzen, sofern sie akzeptieren, dass ein dokumentierter, stichprobenartig geprüfter Review-Prozess stärker ist als eine Zählung von Genehmigungen.

### Kunden und Nutzer

Kunden sehen keine Pull Requests, spüren aber die Ergebnisse: wie bald eine Korrektur eintrifft und wie oft ein Release einen neuen Fehler bringt. Kurze Review-Wartezeiten helfen dringenden Korrekturen, sie früher zu erreichen, und durchdachtes Review hilft, Fehler von ihnen fernzuhalten. Hat ein Service eine veröffentlichte Release- oder Fehlerhistorie, profitieren Kunden davon, dass das Team im Zeitverlauf weniger Rücknahmen und weniger wiederholte Korrekturen zeigt.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Krankenhauses betreibt einen Web-Service für Patiententermine, gebaut von einem Produktteam aus sieben Personen und betrieben mit einer kleinen Site-Reliability-Gruppe. Alle Zahlen in diesem Beispiel sind illustrativ.

In einem Quartalsreview stellt das Team fest, dass seine Review-Zykluszeit einen Median von 26 Arbeitsstunden und ein 85. Perzentil von 71 Arbeitsstunden hat (illustrativ). Die Aufteilung des Zyklus zeigt, dass der Median der Zeit bis zum ersten Review 19 Arbeitsstunden beträgt, der größte Teil der Verzögerung also Warten ist. Die Größe der Pull Requests hat einen Median von 180 Zeilen und ein 85. Perzentil von 900 Zeilen (illustrativ), und die zwei am stärksten beanspruchten Reviewer bearbeiten 68 Prozent der Reviews (illustrativ). Die Rate von Korrekturen nach dem Merge liegt bei 9 Prozent (illustrativ).

Das Team trifft drei Vereinbarungen. Es setzt einen täglichen 30-minütigen Review-Slot, schreibt die Erwartung einer ersten Antwort innerhalb eines Arbeitstages in seine Arbeitsvereinbarung und rotiert wöchentlich eine Pflicht „zuerst reviewen“. Es übernimmt außerdem eine Zerlegungsgewohnheit für große Arbeit und nutzt Feature-Toggles, damit sich Teilfunktionen sicher mergen lassen. Es setzt weder ein Größenlimit noch ein Ziel für die Zeit bis zum ersten Review.

Nach zwei Monaten fällt der Median der Zeit bis zum ersten Review auf 6 Arbeitsstunden und das 85. Perzentil der Review-Zykluszeit auf 34 Arbeitsstunden (illustrativ). Die Lastkonzentration sinkt auf 52 Prozent (illustrativ), und die Rate von Korrekturen nach dem Merge hält sich bei 9 Prozent.

Dann fängt das Team ein Manipulationsrisiko auf. Eine Stichprobe von Genehmigungen zeigt, dass etwa ein Drittel der ersten Antworten binnen Minuten eintrifft und bei Änderungen an der Logik der Terminerinnerung nur „LGTM“ lautet. Der Geschwindigkeitsgewinn war teils echt und teils ein Gummistempel. Die Rate von Korrekturen nach dem Merge hatte sich noch nicht bewegt, weil der betroffene Code in einem Monatszyklus läuft. Das Team ändert die Arbeitsvereinbarung so, dass eine erste Antwort entweder eine Frage, einen Kommentar zu einem bestimmten Teil der Änderung oder einen ausdrücklichen Vermerk enthalten muss, was geprüft wurde, und nimmt den stichprobenartig ermittelten Anteil von Genehmigungen ohne Kommentar in sein Review-Diagramm auf. Es vereinbart außerdem, dass Änderungen an der patientenseitigen Erinnerungslogik zwei Reviewer brauchen, von denen einer aus der Betriebsgruppe kommt. Die Entscheidung mit den Gründen kommt in das Entscheidungsprotokoll des Teams.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Schnelle, kleine Reviews stützen kontinuierliche Auslieferung und ein nachhaltiges Tempo. Eine praktische Gewohnheit ist, eine Teamnorm für die Zeit bis zum ersten Review zu vereinbaren und im regelmäßigen Team-Review über veraltete Pull Requests zu sprechen. Zu beachten ist, dass die als Ziel behandelte Review-Geschwindigkeit zu Gummistempeln führt; koppeln Sie sie also mit Korrekturen nach dem Merge.

### KI

Von KI erzeugte Änderungen können Volumen und Größe von Pull Requests erhöhen, und KI-Review-Werkzeuge können den ersten Blick beschleunigen. Koppeln Sie die Zeit bis zum ersten Review mit der Rate von Korrekturen nach dem Merge für KI-gestützte Änderungen und berichten Sie die Review-Last je Reviewer-Rolle, nicht je Person. Zu beachten ist, dass ein Review-Kommentar eines Bots als Review gezählt werden könnte; zählen Sie menschliches Review also gesondert.

### Automatisierung

Ziehen Sie Review-Ereignisse automatisch vom Code-Host und führen Sie automatische Prüfungen vor dem menschlichen Review aus, damit Menschen Zeit für Urteilskraft aufwenden. Messen Sie die Prüfungen selbst an Fehlalarmen und an Fehlern, die ihnen entgehen. Zu beachten ist, dass starke Automatisierung menschliches Review oberflächlich machen kann, weil Menschen annehmen, die Werkzeuge hätten alles gefunden.

### Analytik

Zeigen Sie Verteilungen von Größe, Zeit bis zum ersten Review und Review-Runden je Team, nie je Einzelperson. Die Entscheidung, die dies untermauert, ist, wo Review-Kapazität oder Änderungsgröße Aufmerksamkeit brauchen. Zu beachten ist, dass diese Zahlen das Review-System beschreiben und jede Nutzung, die Menschen ordnet, sie zu kleineren, sichereren, weniger nützlichen Änderungen treibt.

## Branchenperspektive

**Startup.** Ein kleines Team kann in Minuten prüfen, weil alle den Code kennen, und das Hauptrisiko ist, das Review zu überspringen, wenn die Zeit knapp ist. Halten Sie die Kennzahlen wenige: Zeit bis zum ersten Review und Größe genügen. Etablieren Sie die Gewohnheit kleiner Änderungen früh, denn sie ist weit schwerer einzuführen, wenn Codebasis und Team wachsen.

**Kleinunternehmen.** Oft pflegen ein oder zwei Entwickler oder ein externer Dienstleister die Software. Das Review kann von einem einzelnen Kollegen oder vom eigenen Personal des Dienstleisters stammen. Fragen Sie Dienstleister, wie sie prüfen und ob Pull-Request-Daten geteilt werden können, und führen Sie eine einfache Aufzeichnung, welche Änderungen von wem geprüft wurden, denn Review ist in einem kleinen Team die wichtigste Kontrolle gegen Fehler.

**Großunternehmen.** Viele Teams, Repositorys und Genehmigungsregeln erzeugen große Streuung. Standardisieren Sie die Definitionen der Uhren und der Ausschlüsse, damit Plattformdaten vergleichbar sind, ordnen Sie Teams aber nicht nach roher Review-Zeit, denn Risiko und Codebasis unterscheiden sich. Achten Sie auf für Prüfungen auferlegte Review-Anforderungen, die Warten hinzufügen, ohne Prüfung hinzuzufügen, und suchen Sie Gelegenheiten, manuelle Genehmigungen durch automatische Prüfungen und stichprobenartiges Review zu ersetzen.

**Behörden und öffentlicher Sektor.** Funktionstrennung, Prüfspuren und Beschaffungsregeln verlangen oft unabhängige Genehmigung für Changes. Behandeln Sie diese Regeln als Entwurfsvorgaben: Halten Sie fest, wer was wann genehmigt hat, und messen Sie das Warten, das sie erzeugen. Wo Lieferanten den Code schreiben, legen Sie Review-Belege und Datenzugriff im Vertrag fest (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Das Motiv ist, den Teil der Lieferung zu verkürzen, der zugleich langsam und kontrollierbar ist, und dabei die Vorteile des Peer-Reviews zu behalten: weniger Fehler, geteiltes Wissen und eine Prüfspur. Wartende Pull Requests halten fertige Arbeit von den Nutzern zurück, erhöhen die Kosten des Kontextwechsels für Autoren und machen Merge-Konflikte wahrscheinlicher, wenn Branches altern. Das Warten zu verringern zahlt sich daher durch schnellere Lieferung, weniger Nacharbeit und weniger Frust aus.

Die Kosten, diese Kennzahlen zu erheben, sind gering, wenn die Versionsverwaltungsplattform Ereignisverlauf und eine API bietet. Die Hauptkosten sind die Zeit, die Uhren und Ausschlüsse zu definieren, den Bericht zu bauen oder zu konfigurieren und die Zahlen regelmäßig zu überprüfen. Die größeren Kosten sind verhaltensbezogen: die Zeit, die Menschen dem zeitnahen Prüfen widmen, die mit anderer Arbeit konkurriert. Diese Zeit ist die eigentliche Investition, und sie sollte eingeplant statt als kostenlos behandelt werden.

Der Ertrag zeigt sich als kürzere Review-Zykluszeit, weniger veraltete Pull Requests und eine stabile oder fallende Rate von Korrekturen nach dem Merge. Vermeiden Sie es, im Voraus einen bestimmten Verbesserungsprozentsatz zu behaupten, denn die Ergebnisse hängen von Ausgangslage und Team ab. Ein glaubwürdiger Business Case vergleicht die eigenen Vorher-Nachher-Verteilungen des Teams, zusammen mit seinem Qualitätsgegenstück, statt Zahlen anderer Organisationen zu zitieren. Das Buch *Accelerate* von 2018 berichtet Forschung, die technische und kulturelle Praktiken mit Lieferleistung verbindet, und ist eine vernünftige Quelle für das allgemeine Argument, doch die Zahlen für Ihr Team kommen aus Ihren eigenen Daten.

## Anti-Muster und Fallstricke

- **Reviewer oder Autoren ordnen.** Individuelle Ranglisten abgeschlossener Reviews oder geänderter Zeilen verfälschen die Zusammenarbeit. Berichten Sie auf Teamebene und nutzen Sie die Zahlen, um die Gewohnheiten des Teams anzupassen.
- **Auf die Zeit bis zum ersten Review zielen, ohne Qualitätsgegenstück.** Das Ergebnis ist der Gummistempel. Zeigen Sie die Rate von Korrekturen nach dem Merge und eine Stichprobe von Genehmigungen ohne Kommentar neben jedem Geschwindigkeitsdiagramm.
- **Ein hartes Größenlimit setzen.** Teams zerlegen Arbeit künstlich, um zu genügen. Nutzen Sie die Größe als Gespräch und lehren Sie stattdessen Zerlegungstechniken.
- **Null Kommentare als Erfolg behandeln.** Eine ungeprüfte Genehmigung kann Vertrauen oder Unaufmerksamkeit spiegeln. Ziehen Sie solche Pull Requests als Stichprobe und lesen Sie sie gemeinsam.
- **Bot-Aktivität als Review zählen.** Automatische Kommentare lassen das Warten kurz aussehen. Schließen Sie Bots von der Uhr und von Lastmessgrößen aus.
- **Zeitzonen und Kalender ignorieren.** Rohe Uhrzeit lässt Wochenend- und regionsübergreifendes Warten wie langsames Review aussehen. Verwenden Sie Arbeitsstunden und benennen Sie den Kalender.
- **Die Liste veralteter Pull Requests wachsen lassen.** Alte Pull Requests sammeln Merge-Konflikte an und verlieren Kontext. Überprüfen Sie die Liste wöchentlich und mergen, überarbeiten oder schließen Sie jedes Element mit Begründung.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definition und Uhren | Review-Zeit wird geschätzt oder nach Gefühl berichtet | Einige Teams exportieren Zeiten aus der Plattform nach eigenen Regeln | Eine schriftliche Definition jeder Uhr, mit Ausschlüssen für Bots, Entwürfe und Kalender | Definitionen im Rhythmus überprüft; Änderungen mit Gründen protokolliert | Definitionen über Teams und Lieferanten abgestimmt und überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| Review-Praxis | Reviews geschehen, wenn jemand es bemerkt | Informelle Normen in einigen Teams | Schriftliche Arbeitsvereinbarung zu Anfragen, Antworterwartungen und dem Umfang eines Reviews | Normen anhand der Daten angepasst; Wissensteilung und Risikobereiche verfolgt | Review-Praxis über Teams und Lieferanten koordiniert, Automatisierung übernimmt Routineprüfungen |
| Qualitätsgegenstück | Keine Verbindung zwischen Review und Fehlern | Gelegentlicher Blick auf Korrekturen nach dem Merge | Rate von Korrekturen nach dem Merge neben der Review-Geschwindigkeit gezeigt | Leitplanken regelmäßig überprüft; stichprobenartige Genehmigungen gelesen | Review-Belege mit Change-Zusicherung und Incident-Lernen über Services verbunden |
| Nutzung in der Verbesserung | Zahlen ungenutzt | In einigen Retrospektiven gezeigt | Vom zuständigen Team in festem Rhythmus überprüft | Lücken führen zu geplanter, ausgestatteter Verbesserungsarbeit | Verbesserungsideen fließen von Teams in gemeinsame Praxis und zurück |

## Checkliste

- [ ] Die Uhren für Zeit bis zum ersten Review und Review-Zykluszeit sind aufgeschrieben, mit Start, Stopp und Ausschlüssen.
- [ ] Bots, Entwürfe und ohne Merge geschlossene Pull Requests sind ausgeschlossen oder werden gesondert gezählt, und die Regeln sind sichtbar.
- [ ] Zeiten werden als Median und hohes Perzentil in Arbeitsstunden berichtet.
- [ ] Die Größe von Pull Requests wird mit einer vereinbarten Ignorierliste für generierte und mitgelieferte Dateien gemessen.
- [ ] Das Team hat eine schriftliche Vereinbarung, wie Reviews angefragt werden und wie bald eine erste Antwort erwartet wird.
- [ ] Die Konzentration der Review-Last wird nur auf Teamebene berichtet.
- [ ] Eine Rate von Korrekturen nach dem Merge oder ein anderes Qualitätsgegenstück wird im selben Diagramm wie die Review-Geschwindigkeit gezeigt.
- [ ] Jeden Monat wird eine Stichprobe von Genehmigungen ohne Kommentar und sehr schnellen Genehmigungen gelesen.
- [ ] Die Liste veralteter Pull Requests wird wöchentlich überprüft.
- [ ] Review-Daten werden in Retrospektiven genutzt und nicht in der individuellen Beurteilung.
- [ ] Codebereiche mit nur einem qualifizierten Reviewer sind aufgelistet und haben einen Plan.

## KI-Prompts

**Uhrendefinitionen für Review-Kennzahlen entwerfen.**

```text
I want to define review metrics for [team or repository]. Our platform is
[version control platform] and our workflow is [describe: draft pull requests,
required approvals, merge rules, bots in use]. Draft precise definitions for time
to first review and review cycle time, stating the event that starts and stops
each clock, what is excluded (bots, drafts, closed unmerged), how working hours
are handled for [time zones and working calendar], and which percentiles to
report. Do not invent benchmark values or tool features. List your assumptions and
the questions I should answer to finish the definitions.
```

**Einen Export von Review-Daten analysieren.**

```text
Here is an anonymized export of merged pull requests for [team] over [period],
with columns [list columns, for example ready time, first review time, merge time,
lines changed, review rounds, linked fix flag]: [paste data or summary]. Compute
the median and 85th percentile for each time measure and for size, split the
review cycle into waiting and reviewing, and point out patterns that deserve a
conversation. Do not rank individuals, and do not compare with outside
benchmarks. List your assumptions and any data quality problems you notice.
```

**Manipulationsrisiken in unseren Review-Kennzahlen finden.**

```text
Our team reports these review metrics: [list metrics and how each is calculated].
The pressures on us are [for example a release deadline, a leadership target, a
supplier contract]. For each metric, describe plausible ways it could be improved
without improving review, the early signs of each, and a paired guardrail metric
or practice that would catch it. Do not invent statistics. List your assumptions
and tell me what you would need to know to rank the risks.
```

**Eine Retrospektive zum Review-Fluss vorbereiten.**

```text
Prepare a 45-minute retrospective agenda for [team] on review flow. Inputs: time
to first review [value], review cycle time [value], median size [value], load
concentration [value], and post-merge fix rate [value], all labeled with their
definitions. Suggest questions that surface causes, one small experiment the team
could run for [duration], and the quality signal to watch during the experiment.
Do not invent causes or targets. List your assumptions and the data I should bring.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine verwandte Fluss- oder Qualitätskennzahl definiert, und die Leitplanke, die neben eine Review-Kennzahl gehört.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass Änderungen an diesem Thema Vorlage, Manipulationstabelle und Querverweise konsistent halten.

## Wichtigste Erkenntnisse

- Der größte Teil der Review-Verzögerung ist Warten, messen Sie also Zeit bis zum ersten Review und Review-Zykluszeit als Verteilungen in Arbeitsstunden.
- Kleinere Pull Requests werden schneller und sorgfältiger geprüft; lehren Sie das Zerlegen, statt eine Größenobergrenze aufzuerlegen.
- Koppeln Sie jede Geschwindigkeitsmessgröße mit einem Qualitätsgegenstück wie der Rate von Korrekturen nach dem Merge und lesen Sie beide zusammen.
- Behandeln Sie die Review-Last als Teamkapazität und berichten Sie die Konzentration auf Teamebene, nie als Rangfolge von Menschen.
- Review-Kennzahlen sind Fragen für eine Retrospektive, und sie dienen dem Team, dem die Arbeit gehört.

## Quellen und weiterführende Literatur

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
3. Google, *Code Review Developer Guide*, Google Engineering Practices documentation, https://google.github.io/eng-practices/review/
4. Bacchelli, A., and Bird, C., "Expectations, Outcomes, and Challenges of Modern Code Review," *Proceedings of the 35th International Conference on Software Engineering (ICSE)*, 2013.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Schwaber, K., and Sutherland, J., *The Scrum Guide*, Scrum.org and Scrum Inc., 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
9. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
10. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
13. Wikipedia, [Trunk-based development](https://en.wikipedia.org/wiki/Trunk-based_development).
14. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
15. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
