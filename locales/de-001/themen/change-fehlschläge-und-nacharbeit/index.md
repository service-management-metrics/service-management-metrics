# Change-Fehlschläge und Nacharbeit

**Definieren Sie „ein fehlgeschlagener Change“ einmal schriftlich, verknüpfen Sie jeden Fehlschlag mit dem Change, der ihn verursachte, und lesen Sie Fehlschlag und Nacharbeit zusammen mit der Geschwindigkeit, damit eine niedrigere Zahl sichereren Change bedeutet und nie nur weniger Meldungen.**

## Überblick und Motivation

Jeder Change an einem Live-Service birgt eine gewisse Chance, die Dinge zu verschlechtern. Die praktischen Fragen sind, wie oft das geschieht, wie viel ungeplante Arbeit es erzeugt und wie schnell sich das Team erholt. Dieses Thema behandelt die Kennzahlen, die darauf antworten: den Anteil der Changes, die fehlschlagen, den Anteil, der einen Notfallweg braucht, die Raten von Rollback und Hotfix und die Nacharbeit, die einem schlechten Change folgt. Es behandelt auch den unglamourösesten Teil des Gegenstands, nämlich sich überhaupt darauf zu einigen, was als Fehlschlag zählt.

Zuerst einige Begriffe. In [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 deckt die Praktik namens Change-Befähigung das Hinzufügen, Ändern oder Entfernen von allem ab, was einen Service beeinflussen könnte. Ein **Change** ist also weiter als ein Code-Deployment: Er umfasst eine Konfigurationsänderung, eine Zertifikatserneuerung, eine Firewall-Regel oder eine Datenbankmigration. Ein **Standard-Change** ist vorab autorisiert und risikoarm, ein **normaler Change** durchläuft eine Bewertung, und ein **Notfall-Change** wird dringend vorgenommen, meist um einen Service wiederherzustellen oder eine ernste Schwachstelle zu schließen. Ein **Deployment** ist der Vorgang, eine Version von Software in eine Umgebung zu bringen, während ein **Release** eine Fähigkeit für Nutzer verfügbar macht. Teams, die einen [Feature-Toggle](https://en.wikipedia.org/wiki/Feature_toggle) nutzen, können Code deployen, ohne ihn zu releasen (siehe Thema 4.5, Kennzahlen für Releases und Deployments).

Ein **Change-Fehlschlag** ist ein Change, der zu verschlechtertem Service führt oder Abhilfe braucht. Abhilfe hat mehrere Formen. Ein [Rollback](https://en.wikipedia.org/wiki/Rollback_(data_management)) bringt das System in seinen früheren Zustand zurück. Ein [Hotfix](https://en.wikipedia.org/wiki/Hotfix) ist ein dringender Patch, der außerhalb des normalen Release-Rhythmus eingespielt wird. Eine Roll-forward-Korrektur liefert einen neuen Change auf den kaputten. [Nacharbeit](https://en.wikipedia.org/wiki/Rework) ist der ungeplante Aufwand, etwas noch einmal zu machen oder zu reparieren, das hätte fertig sein sollen. In einem Umfeld der [kontinuierlichen Auslieferung](https://en.wikipedia.org/wiki/Continuous_delivery), in dem kleine Changes oft in die Produktion fließen, sind diese Messgrößen der wichtigste Beleg dafür, ob Geschwindigkeit Stabilität kostet.

Die beiden Traditionen betrachten dasselbe Ereignis unterschiedlich. Die ITIL-Sicht ist um den Change-Datensatz organisiert: Wurde der Change autorisiert, gelang er, und wurde das Ergebnis erfasst? Ein Change, der auf dem Papier gelingt, kann trotzdem eine Stunde später einen Incident verursachen. Die agile Sicht ist um das Arbeitselement und das Deployment organisiert: Hielt die Definition of Done des Teams, und verursachte der Change bald danach ungeplante Arbeit? Keine Sicht ist allein vollständig. Die Forschung hinter dem DORA-Programm behandelt Change-Fehlerrate und Deployment-Nacharbeitsrate als die zwei „Instabilitäts“-Messgrößen neben den Durchsatzmessgrößen (siehe Thema 2.8, DORA-Kennzahlen, das sie auf Ebene des Programms definiert). Dieses Thema geht tiefer in die Mechanik: wie man Fehlschlag definiert, wie man Incidents an Changes bindet, wie Notfallarbeit gezählt wird und wie die Zahlen manipuliert werden.

Von Anfang an gilt eine Warnung. Diese Kennzahlen beschreiben ein Team, einen Service oder eine Pipeline. Sie beschreiben nie eine Person. Eine einem einzelnen Ingenieur zugeordnete Change-Fehlerrate lehrt Menschen, riskante und wertvolle Arbeit zu meiden, Changes zu zerlegen, bis die Zahlen gut aussehen, und aufzuhören, Probleme zu melden (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen). [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) schlägt hier hart zu, weil „weniger Fehlschläge“ leicht zu erreichen ist, indem man weniger Fehlschläge erfasst.

Das Timing von Incidents gehört zu Thema 3.3, Reaktions- und Lösungszeit bei Incidents, die schlimmsten Incidents zu Thema 3.4, Kennzahlen für Major Incidents, Genehmigungsfluss und Anteil von Standard-Changes zu Thema 4.3, Kennzahlen für die Change-Befähigung, Grundursachen zu Thema 4.1, Kennzahlen für das Problemmanagement, und das schriftliche Review zu Thema 4.2, Kennzahlen für Postmortems und Lernen.

## Leitprinzipien

- **Fehlschlag braucht eine schriftliche Definition.** Teams, die von Fall zu Fall entscheiden, erzeugen Zahlen, die sich nicht im Trend darstellen oder vergleichen lassen, und der Streit um die Definition ersetzt den Streit um die Arbeit.
- **Ein Fehlschlag muss auf seinen Change zurückführbar sein.** Ohne erfasste Verknüpfung zwischen einem Incident, einem Rollback oder einem Hotfix und dem Change, der ihn verursachte, ist die Fehlerrate eine Schätzung.
- **Jeden Abhilfeweg zählen.** Rollback, Hotfix, Roll-forward und manuelle Umgehung sind vier Wege zum selben Ereignis. Eine Kennzahl, die einen davon zählt, belohnt Teams dafür, einen anderen zu wählen.
- **Fehlschlag neben Geschwindigkeit und Wiederherstellung lesen.** Eine Change-Fehlerrate für sich allein lässt sich verbessern, indem man seltener ändert, was selten das Ziel ist. Koppeln Sie sie mit Durchlaufzeit, Deployment-Häufigkeit und Wiederherstellungszeit.
- **Kleine Stichproben brauchen Anzahlen, nicht nur Prozente.** Ein Team mit acht Changes im Monat und einem Fehlschlag hat eine Fehlerrate von 12,5 Prozent, die fast nichts sagt. Zeigen Sie also die Anzahlen und nutzen Sie ein längeres Fenster (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).
- **Notfall ist ein Signal, keine Sünde.** Ein stetiger, erklärter Anteil von Notfall-Changes ist normal. Ein steigender Anteil deutet meist auf Probleme in vorgelagerter Qualität, Planung oder Erkennung.

## Kennzahlendefinitionen

Fehlschlags- und Nacharbeitsmessgrößen hängen davon ab, den Change-Datensatz, das Deployment-Protokoll und das Incident-Werkzeug zu verbinden. Jede Definition unten nennt, was gezählt wird, was ausgeschlossen ist und wo die Uhr startet und stoppt. Teams sollten die Definitionen in ihr Kennzahlenregister kopieren und sie mit genanntem Grund anpassen.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change-Fehlerrate | Anteil der Changes an der Produktion, die verschlechterten Service verursachen oder Abhilfe brauchen | Changes, die innerhalb des Fehlschlagsfensters einen Rollback, Hotfix, eine Roll-forward-Korrektur oder einen verknüpften Incident erforderten / alle im Zeitraum abgeschlossenen Changes an der Produktion; das Fenster startet mit dem Abschluss des Changes und stoppt nach einer festen Zahl von Tagen (zum Beispiel 7), im Kennzahlenregister festgehalten; Changes, die noch im Fenster liegen, werden gesondert berichtet und aus der Rate ausgeschlossen, bis das Fenster schließt | Prozent | Change-Datensätze oder Deployment-Protokoll, verbunden mit dem Incident-Werkzeug und der Hotfix-Liste | Change-Befähigung; Incident-Management | Definition of Done; entwichene Fehler | Monatlich, über ein gleitendes Fenster von 90 Tagen |
| Anteil von Notfall-Changes | Anteil der Changes, die über den Notfallweg vorgenommen wurden | Als Notfall erfasste Changes / alle im Zeitraum abgeschlossenen Changes; Notfall bedeutet, dass die normale Bewertung aus Dringlichkeit umgangen oder verkürzt wurde, und vorab autorisierte Standard-Changes sind aus beiden Zählungen ausgeschlossen | Prozent | Typfeld des Change-Datensatzes | Change-Befähigung | Ungeplante Arbeit und Expedite-Serviceklasse | Monatlich |
| Rollback-Rate | Anteil der Changes, die auf eine frühere Version zurückgesetzt wurden | Nach Erreichen der Produktion zurückgesetzte Changes / alle Changes an der Produktion im Zeitraum; ein Rollback vor dem Erreichen irgendeines Nutzers (zum Beispiel ein Canary, der im ersten Schritt gestoppt wird) wird gesondert gezählt | Prozent | Deployment-Protokoll und Release-Werkzeug | Release-Management; Deployment-Management | Pipeline- und Release-Praktiken | Monatlich |
| Hotfix-Rate | Anteil der Changes, die dringende Patches außerhalb des normalen Release-Flusses sind | Als Hotfix gekennzeichnete oder verzweigte Changes / alle Changes an der Produktion im Zeitraum; der Nenner enthält die Hotfixes selbst | Prozent | Branches oder Tags der Versionskontrolle und das Deployment-Protokoll | Change-Befähigung; Incident-Management | Ungeplante Arbeit; Expedite | Monatlich |
| Deployment-Nacharbeitsrate | Anteil der Deployments, die ungeplante Korrekturen für ein Problem in einem früheren Deployment waren | Deployments in die Produktion, die einen Defekt oder Fehlschlag in einem jüngeren früheren Deployment innerhalb desselben Fehlschlagsfensters beheben / alle Produktions-Deployments im Zeitraum; geplante Folgearbeit aus der Roadmap ist ausgeschlossen | Prozent | Deployment-Protokoll mit einer „fixes“-Verknüpfung oder einem Tag und der Work-Tracker | Change-Befähigung; kontinuierliche Verbesserung | Nacharbeit; entwichene Fehler; Fehlernachfrage | Monatlich |
| Verknüpfungsrate von Change zu Incident | Anteil gelöster Incidents, die erfassen, ob ein Change sie verursachte und welcher | Incidents mit ausgefülltem Feld „durch Change verursacht“ (ja oder nein, plus Change-Kennung bei ja) / im Zeitraum gelöste Incidents; die Uhr stoppt, wenn der Incident geschlossen wird | Prozent | Incident-Werkzeug und Change-Datensätze | Incident-Management; Change-Befähigung | Post-Incident-Review; Definition of Done | Monatlich |
| Übereinstimmung der Fehlschlagsdefinition | Übereinstimmung zweier Reviewer, ob eine Stichprobe von Changes fehlschlug | Stichproben-Changes, bei denen zwei unabhängige Reviewer anhand der schriftlichen Definition zum selben Fehlschlagsurteil kommen / Stichproben-Changes; eine Stichprobe von mindestens 20 Changes, jedes Quartal zufällig gezogen | Prozent | Bewertungsbogen der Stichprobe, beim Kennzahlenregister geführt | Kontinuierliche Verbesserung; Messung und Berichterstattung | Retrospektive | Vierteljährlich |

Zwei Anmerkungen zur Tabelle. Fehlerrate und Nacharbeitsrate überlappen, unterscheiden sich aber: Ein Fehlschlag, der ohne neues Deployment zurückgesetzt wird, zählt in der Fehlerrate und nicht in der Nacharbeitsrate. Und die Einheit ist der Change oder das Deployment, nicht der Incident, denn ein Change kann drei Incidents verursachen, und ein Incident kann von drei Changes stammen.

## Empfehlungen

### Die Definition von Fehlschlag schreiben, bevor Daten erhoben werden

**Einigen Sie sich, was „fehlgeschlagen“ bedeutet, und tragen Sie es ins Kennzahlenregister ein.** Eine brauchbare Definition lautet, dass ein Change fehlschlug, wenn er innerhalb eines genannten Fensters nach Abschluss zurückgesetzt wurde, einen Hotfix oder eine Roll-forward-Korrektur brauchte oder mit einem Incident eines genannten Schweregrads oder höher verknüpft war. Nennen Sie das Fenster (7 Tage ist üblich, und der richtige Wert hängt davon ab, wie schnell Ihre Services Probleme zeigen), die Schwelle des Incident-Schweregrads und wer im strittigen Fall entscheidet. Schreiben Sie mindestens fünf durchgespielte Beispiele auf, auch unbequeme, etwa einen Change, der die Leistung ohne Ausfall verschlechterte. Überprüfen Sie die Definition jährlich und protokollieren Sie Änderungen mit ihren Gründen, damit eine Trendlinie neu dargestellt werden kann, wenn sich die Regel verschiebt.

### Fehlschläge im Incident-Datensatz mit Changes verknüpfen

**Fügen Sie dem Incident-Datensatz ein Pflichtfeld hinzu: durch einen Change verursacht, ja oder nein, und die Change-Kennung bei ja.** Das Feld sollte während der Lösung ausgefüllt und im Post-Incident-Review geprüft werden (siehe Thema 4.2, Kennzahlen für Postmortems und Lernen). Verfolgen Sie die Verknüpfungsrate als eigene Kennzahl. Trägt nur die Hälfte der Incidents das Feld, unterschätzt die Fehlerrate die Wahrheit um einen unbekannten Betrag, und das sollten Sie neben der Zahl sagen. Automatisieren Sie die erste Vermutung, wo Sie können, etwa indem Sie die Changes auflisten, die in den Stunden vor Beginn des Incidents auf dem betroffenen Service abgeschlossen wurden, und lassen Sie einen Menschen sie bestätigen.

### Alle Abhilfewege zählen, nicht nur einen

**Definieren Sie einen Fehlschlag aus mehreren Signalen.** Holen Sie Rollbacks aus dem Deployment-Werkzeug, Hotfixes aus der Versionskontrolle oder dem Release-Protokoll, Roll-forward-Korrekturen aus der „fixes“-Verknüpfung und Incidents aus dem Incident-Werkzeug und entdoppeln Sie dann nach Change. Ein Team, das nur Rollbacks zählt, sieht Fehlschläge an dem Tag verschwinden, an dem es auf Vorwärtskorrektur umstellt. Behalten Sie auch jeden Weg als gesonderte Aufschlüsselung, denn der Mix erzählt eine Geschichte: viele Hotfixes und wenige Rollbacks deuten darauf hin, dass Rollback schwierig ist, was für sich zu beheben sich lohnt.

### Den Anteil von Notfall-Changes als Frage behandeln, nicht als Punktzahl

**Überprüfen Sie Notfall-Changes als Gruppe, nicht als Ziel.** Lesen Sie jedes Quartal alle und sortieren Sie die Gründe: einen Service wiederherstellen, eine Schwachstelle schließen, eine späte Geschäftsanfrage, ein verpasster Planungsschritt oder ein Genehmigungsweg, der für gewöhnliche Arbeit zu langsam war. Die letzten beiden sind Systemprobleme, die behoben werden sollten, indem der Standardweg verbessert wird, damit Menschen ihn nicht umgehen müssen (siehe Thema 4.3, Kennzahlen für die Change-Befähigung). Ein Anteil von null ist verdächtig, denn echte Notfälle kommen vor. Ein stetig steigender Anteil verdient einen Problemdatensatz (siehe Thema 4.1, Kennzahlen für das Problemmanagement).

### Nacharbeit als Fehlernachfrage messen

**Verfolgen Sie Nacharbeit als die Arbeit, die durch früheren Fehlschlag entsteht.** Die Idee der Fehlernachfrage (Failure Demand) stammt aus dem Service-Design: Nachfrage, die existiert, weil etwas nicht gleich beim ersten Mal richtig gemacht wurde. In Lieferbegriffen zählen Sie die Deployments und Arbeitselemente, deren einziger Zweck es ist, einen jüngeren Change zu korrigieren. Das verbindet sich direkt mit der Trennung von geplanter und ungeplanter Arbeit (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit). Nutzen Sie den Kapazitätsanteil, der in Nacharbeit fließt, als Gesprächsanstoß mit dem Product Owner, denn er macht aus einer abstrakten Rate eine Abwägung darüber, woran als Nächstes zu arbeiten ist.

### Raten mit Anzahlen, Verteilungen und einem Fenster berichten

**Zeigen Sie Anzahlen neben Prozenten und nutzen Sie ein gleitendes Fenster.** Eine monatliche Fehlerrate für ein Team, das zehnmal deployt, ist verrauscht. Nutzen Sie ein gleitendes 90-Tage-Fenster, zeigen Sie die Zahl der Changes und Fehlschläge hinter der Rate und geben Sie einen groben Hinweis auf die Unsicherheit (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen). Zeigen Sie für die Wiederherstellung Median und 85. Perzentil der Zeit vom Fehlschlag bis zur Wiederherstellung statt eines Mittelwerts. Hat ein Service sehr wenige Changes, erzählen Sie die Geschichte mit einer Liste der tatsächlichen Fehlschläge statt mit einer Rate.

### Fehlschlag mit Geschwindigkeit koppeln, damit sich Verbesserung in keinem von beiden verstecken kann

**Zeigen Sie die Change-Fehlerrate immer neben Durchlaufzeit und Deployment-Häufigkeit.** Fällt die Fehlerrate, während auch die Deployment-Häufigkeit stark fällt und die Durchlaufzeit wächst, bündelt das Team womöglich Changes, was das Risiko jedes einzelnen erhöht. Steigt die Geschwindigkeit und die Fehlerrate hält, wird das System besser im Ändern. Die Kopplung ist die wichtigste Verteidigung gegen Manipulation und gegen den bequemen Glauben, weniger Deployments seien sicherere (siehe Thema 2.8, DORA-Kennzahlen).

### Die Zahlen nutzen, um den Change selbst zu verbessern

**Verwandeln Sie Fehlschlagsdaten in Engineering-Experimente.** Betrachten Sie die gemeinsamen Merkmale fehlgeschlagener Changes: Größe, Tageszeit, Typ, Zahl der beteiligten Menschen, ob sie gemeinsame Komponenten berührten und ob die Testabdeckung dünn war. Versuchen Sie dann ein kleines, umkehrbares Experiment, etwa kleinere Pakete, automatisierte [Regressionstests](https://en.wikipedia.org/wiki/Regression_testing) für einen riskanten Bereich, ein [Canary-Release](https://en.wikipedia.org/wiki/Canary_release) für den nächsten riskanten Change oder einen Feature-Toggle, der Deployment und Release trennt. Messen Sie nach einem vollen Fenster erneut. Ziel ist besserer Change, und eine verbesserte Kennzahl ist lediglich ein Beleg.

### Die Kennzahlen gemeinsam in einem schuldfreien Forum überprüfen

**Halten Sie monatlich ein Review fehlgeschlagener Changes mit den Menschen ab, die sie gemacht haben.** Die Tagesordnung hat drei Punkte: die Anzahlen und den Trend, zwei oder drei zur Untersuchung gewählte fehlgeschlagene Changes und eine Verbesserungsmaßnahme mit Eigner. Nutzen Sie schuldfreie Review-Praxis, damit Menschen beschreiben, was sie damals wussten. Veröffentlichen Sie die Review-Notizen mit den Kennzahlen. Zögern Menschen, Fehlschläge zu melden, wegen der Art, wie die Zahlen genutzt werden, beheben Sie das, bevor Sie irgendetwas anderes ändern (siehe Thema 11.3, Kennzahlen einführen, ohne Angst zu erzeugen).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Change-Fehlerrate | Das Fehlschlagsfenster verengen; Incidents nicht mit Changes verknüpfen; einen schlechten Change als „Serviceanfrage“ oder „Wartung“ klassifizieren; vorwärts korrigieren und es einen neuen Change nennen; viele Änderungen in einen Change bündeln, damit ein Fehlschlag sie alle abdeckt | Verknüpfungsrate von Change zu Incident; vierteljährliche Stichprobenprüfung gegen die Incident-Liste; Übereinstimmung der Fehlschlagsdefinition; Durchlaufzeit und Deployment-Häufigkeit daneben |
| Anteil von Notfall-Changes | Dringende Arbeit mit falscher Risikoeinstufung über den Standardweg leiten; gewöhnliche Arbeit als Notfall leiten, um die Genehmigung zu vermeiden; einen Notfall in mehrere normale Changes zerlegen | Vierteljährliches Lesen aller Notfall-Changes; Gründe sortiert und überprüft; Anteil von Standard-Changes und Genehmigungsdurchlaufzeit (siehe Thema 4.3, Kennzahlen für die Change-Befähigung) |
| Rollback-Rate | Vorwärts korrigieren, um einen Rollback nicht zu erfassen; eine kaputte Version live lassen; Changes von der Produktion zurückhalten, damit nichts zurückzusetzen ist | Hotfix-Rate und Nacharbeitsrate daneben; Verteilung der Wiederherstellungszeit; Stichprobe von Incidents gegen das Deployment-Protokoll |
| Hotfix-Rate | Hotfixes nicht kennzeichnen; sie durch den normalen Branch schieben; einen Hotfix „eine kleine Verbesserung“ nennen | Deployment-Nacharbeitsrate; Prüfung von Branches und Tags; Anteil ungeplanter Arbeit (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit) |
| Deployment-Nacharbeitsrate | Korrekturen nicht mit dem ursprünglichen Deployment verknüpfen; eine Korrektur als „geplant“ etikettieren; die Korrektur mit neuen Funktionen bündeln | Verpflichtende „fixes“-Verknüpfung bei korrigierenden Deployments; Stichprobenprüfung der als geplant etikettierten Deployments; Change-Fehlerrate daneben |
| Verknüpfungsrate von Change zu Incident | Das Feld mit „nein“ ausfüllen, ohne zu prüfen; das Feld standardmäßig auf „nein“ stehen lassen; Incidents massenhaft schließen, um den Prozentsatz zu heben | Stichprobenprüfung der „nein“-Antworten im Post-Incident-Review; kein Standardwert; Kommentare der Reviewer zu einer Stichprobe |
| Übereinstimmung der Fehlschlagsdefinition | Leichte Beispiele für die Stichprobe wählen; Reviewer, die die gemessenen Personen selbst sind; die Definition lockern, damit alle übereinstimmen | Zufallsstichprobe, von jemandem außerhalb des Teams gezogen; Grenzfälle absichtlich einbeziehen; Meinungsverschiedenheiten veröffentlichen und die Definition korrigieren |

Ein gesunder Befund sieht so aus: Die Fehlerrate liegt in einem Bereich, den das Team versteht und erklärt, die Verknüpfungsrate ist hoch genug, dass man der Fehlerrate trauen kann, Notfall-Changes sind wenige und erklärt, und Rollbacks und Hotfixes sind kurz und geübt. Fehlschläge werden schnell gemeldet und ohne Schuldzuweisung besprochen. Eine unnatürlich niedrige Fehlerrate bei niedriger Verknüpfungsrate, fallender Deployment-Häufigkeit und wachsenden Paketgrößen ist eine Warnung, kein Erfolg. Behandeln Sie jede plötzliche Verbesserung als Anlass, zuerst das Messinstrument zu prüfen (siehe Thema 1.5, Datenquellen und Instrumentierung).

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Strenge, automatisierte Definition von Fehlschlag | Konsistent, billig zu wiederholen, leicht im Trend darzustellen | Verpasst subtile Verschlechterung; kann harmlose Rollbacks als Fehlschläge zählen |
| Urteilsbasierte Prüfung jedes Changes | Erfasst Kontext und Schweregrad | Langsam, subjektiv, offen für Druck und Drift |
| Langes Fehlschlagsfenster (Wochen) | Fängt verzögerte Fehlschläge | Verwischt Ursache und Wirkung; jüngste Changes können noch nicht berichtet werden |
| Alle Abhilfewege zählen | Schwer zu manipulieren durch Wechsel des Weges | Braucht mehrere sorgfältig verbundene Datenquellen |

Nutzen Sie eine automatisierte Definition als Basis, ergänzen Sie eine stichprobenartige menschliche Prüfung und verbessern Sie die Verbindung zwischen Changes und Incidents, bevor Sie irgendetwas anderes bauen.

## Fragen für die Diskussion im Team

**1. Was genau zählt hier als fehlgeschlagener Change, und könnten zwei von uns über denselben Change uneins sein?**
Nehmen Sie fünf jüngere Changes und bitten Sie jede Person abzustimmen, ob sie fehlschlugen. Vergleichen Sie die Stimmen und die Gründe. Die Meinungsverschiedenheiten zeigen, wo die schriftliche Definition dünn ist. Einigen Sie sich auf eine Regel für die unbequemen Fälle, etwa einen Leistungseinbruch ohne Ausfall, und schreiben Sie sie mit einem Beispiel auf.

**2. Woher wissen wir, welche Incidents durch einen Change verursacht wurden?**
Fragen Sie, wie die Verknüpfung heute erfasst wird und wer sie ausfüllt. Gehen Sie zehn jüngere Incidents durch und sehen Sie, wie viele einen Change angehängt haben und wie viele sollten. Besprechen Sie, ob das Feld optional ist, ob es standardmäßig auf „nein“ steht und wer es prüft. Die Moderation sollte auf eine konkrete Verbesserung des Datensatzes zielen, etwa ein Pflichtfeld ohne Standardwert.

**3. Welche Abhilfewege nutzen wir, und werden alle gezählt?**
Listen Sie Rollback, Hotfix, Roll-forward-Korrektur, manuelle Umgehung und Feature-Toggle aus auf. Fragen Sie bei jedem, wo das Ereignis erfasst wird und ob es in die Fehlerrate einfließt. Achten Sie auf die Wege, die keine Spur hinterlassen. Die Diskussion zeigt oft, dass der bevorzugte Weg des Teams derjenige ist, den die Kennzahl nicht sehen kann.

**4. Wann war unser letzter Notfall-Change, und hätte er vermieden werden können?**
Gehen Sie die letzten drei oder vier durch. Fragen Sie, was jeden dringend machte, was früher bekannt war und wie ein besserer Standardweg ausgesehen hätte. Trennen Sie echte Notfälle von späten Entdeckungen und langsamen Genehmigungen. Einigen Sie sich auf eine Korrektur des gewöhnlichen Weges, die einen wiederkehrenden Notfallgrund beseitigen würde.

**5. Wie viel unserer Woche geht in die Reparatur jüngerer Changes?**
Schätzen Sie den Kapazitätsanteil, der in den letzten vier Wochen in Nacharbeit floss, anhand des Trackers statt aus der Erinnerung. Vergleichen Sie die Schätzung mit dem Tracker. Sprechen Sie darüber, was die Zahl an geplanter Arbeit kostet und wie der Product Owner sie nutzen würde. Wählen Sie ein Fehlermuster und ein Experiment, es zu verringern.

**6. Wenn unsere Fehlerrate nächstes Quartal um die Hälfte fiele, würden wir es glauben?**
Stellen Sie sich die Schlagzeile vor und fragen Sie, was sonst wahr sein müsste: stabile Verknüpfungsrate, gleichbleibende Deployment-Häufigkeit, schnelle Wiederherstellung und keine neuen Kategorien von „Wartung“. Besprechen Sie, welche dieser Prüfungen das Team schon vornimmt und welche fehlen. Einigen Sie sich, wie eine plötzliche Verbesserung untersucht wird, bevor sie gefeiert wird.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams besitzen die Changes, also besitzen sie die Definition von Fehlschlag und die Korrekturen. Beginnen Sie bei der Arbeit: Betrachten Sie fehlgeschlagene Changes im Review, finden Sie die gemeinsamen Merkmale und probieren Sie kleinere Pakete, bessere Tests oder Toggles. Verfolgen Sie Nacharbeit als Teil des Boards, damit ungeplante Korrekturen neben geplanter Arbeit sichtbar sind. Halten Sie die Zahlen für das eigene Lernen des Teams und widerstehen Sie dem Teilen von Daten auf Einzelebene. Wird eine Kennzahl Führungskräften gezeigt, sollte das Team jeden Change darin erklären können.

### Service- und Betriebsteams

Betriebsteams sehen die Folgen von Change in der Incident-Warteschlange und sind am besten platziert, die Verknüpfung zwischen Incidents und Changes zu pflegen. Sie können das Pflichtfeld hinzufügen, es im Lösungsschritt prüfen und die Ergebnisse ohne Schuldzuweisung an das Lieferteam zurückspielen. Der Betrieb besitzt auch den Notfallweg und sollte seine Nutzung überprüfen. Teilen Sie Informationen über Wiederherstellungswege und üben Sie Rollbacks gemeinsam mit den Lieferteams, denn der beste Weg, die Kosten eines Fehlschlags zu senken, ist die gemeinsame Gewohnheit, Change umkehrbar zu machen (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents).

### Führung und Governance

Führungskräfte sollten Trends nach Service verlangen, die zwei Arten von Instabilitätsmessgrößen zusammen mit der Geschwindigkeit und die Verbesserungsexperimente dahinter. Vermeiden Sie feste Ziele wie „Fehlerrate unter 5 Prozent“, die zur Neudefinition einladen, und vermeiden Sie, die Zahlen in Einzelbeurteilungen zu nutzen. Governance-Gremien können die Daten als Beleg nutzen, ob ein leichterer Genehmigungsweg sicher ist, indem sie prüfen, ob Fehlschlag und Wiederherstellung stabil blieben, als Kontrollen gelockert wurden. Ein steigender Trend bei Notfall-Changes ist ein Signal, Planung und Genehmigungsentwurf anzuschauen, nicht die Bereitschaftsingenieure zu beschuldigen.

### Kunden und Nutzer

Kunden kümmert die Fehlerrate nicht. Sie kümmert, ob der Service nach einem Update kaputtgeht und wie schnell er zurückkommt. Fehlschlagsdaten stützen ehrliche Kommunikation: Vorankündigung riskanter Changes, klare Statusmeldungen, wenn ein Change Ärger macht, und eine sichtbare Verpflichtung zu lernen. Wo Nutzer für kritische Aufgaben auf einen Service angewiesen sind, vereinbaren Sie Wartungsfenster und Rollback-Erwartungen im Voraus mit ihnen (siehe Thema 3.4, Kennzahlen für Major Incidents).

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Gesundheitsversorgers betreibt einen Patiententerminplanungsservice. Ein Produktteam von sieben Personen veröffentlicht mehrmals pro Woche Changes, und ein Betriebsteam von fünf bearbeitet Incidents und den Change-Prozess. Alle Zahlen in diesem Beispiel sind illustrativ.

Über ein Quartal zeigt der Monatsbericht eine Change-Fehlerrate von 4 Prozent, gegenüber 11 Prozent im Vorquartal. Der Chief Information Officer ist zufrieden. Die Plattformleiterin ist nicht überzeugt, denn das Bereitschaftsteam sagt, dass sich ihre Nächte nicht gebessert haben. Sie bittet das Team, die Stichprobenprüfung aus dem Kennzahlenregister durchzuführen.

Die Prüfung nimmt 30 Changes zufällig, und zwei Reviewer wenden die schriftliche Definition an. Sie stimmen bei 24 der 30 Urteile überein, die Übereinstimmung der Fehlschlagsdefinition beträgt also 80 Prozent (illustrativ). Dann vergleichen sie die Stichprobe mit der Incident-Liste. Von 22 im Quartal gelösten Incidents tragen nur 9 das Feld „durch Change verursacht“, eine Verknüpfungsrate von 41 Prozent. Beim Lesen der anderen 13 von Hand finden die Reviewer 5, die binnen eines Tages nach einem Change begannen. Die korrigierte Zählung hebt die Fehlerrate auf etwa 9 Prozent, und die Prüfung findet, warum die Zahl gut aussah: eine neue Gewohnheit, Korrekturen unter dem Etikett „Wartung“ zu deployen, das der Bericht aus Nenner und Zähler gleichermaßen ausschloss.

Das Manipulationsrisiko ist das Etikett, und niemand hat es geplant. Dem Team war gesagt worden, dass Fehlschläge ein Anliegen seien, und „Wartung“ vermied ein Gespräch. Das Team trifft drei Entscheidungen. Das Feld „durch Change verursacht“ wird ein Pflichtfeld ohne Standardwert, und das Post-Incident-Review prüft es. Das Etikett „Wartung“ wird abgeschafft, und korrigierende Deployments müssen eine Verknüpfung zu dem Change tragen, den sie beheben, was die Nacharbeitsrate speist. Die Definition von Fehlschlag wird mit sechs durchgespielten Beispielen neu geschrieben, darunter eine Regression bei langsamen Abfragen, die nie einen Ausfall verursachte.

Das nächste Quartal zeigt eine neu dargestellte Fehlerrate von 8 Prozent und eine Verknüpfungsrate von 90 Prozent (illustrativ). Der Führungsbericht zeigt nun Anzahlen, die Verknüpfungsrate und die Nacharbeitsrate neben der Durchlaufzeit, und der Chief Information Officer hört auf, einen einzelnen Prozentsatz zu zitieren.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Häufige kleine Changes machen Fehlschläge billiger und leichter nachzuverfolgen, und das Team überprüft sie regelmäßig mit Stakeholdern. Zu beachten ist, dass Menschen aufhören, Fehlschläge zu melden, wenn diese bestraft werden.

### KI

KI-gestützte Changes können Volumen und Nacharbeit erhöhen und dabei schnell aussehen. Berichten Sie fehlgeschlagene Changes und Nacharbeit für KI-gestützte Arbeit mit derselben Definition wie andere Arbeit und kennzeichnen Sie sie in den Daten. Zu beachten ist, dass der Vergleich KI-gestützter mit anderer Arbeit Sorgfalt braucht, weil sich die Changes in der Art unterscheiden können.

### Automatisierung

Verknüpfen Sie Changes, Deployments und Incidents automatisch über Kennungen und messen Sie die Verknüpfungsrate. Automatisierter Rollback sollte an Erfolg und an Nebenwirkungen gemessen werden. Zu beachten ist, dass kaputte Verknüpfungen die Fehlerrate besser aussehen lassen, als sie ist.

### Analytik

Legen Sie die Fehlschlagsdefinition einmal fest und prüfen Sie Verknüpfungen stichprobenartig von Hand. Die Entscheidung, die dies untermauert, ist, wo die Change-Praxis gestärkt werden muss. Zu beachten ist, dass Raten über kleine Change-Zahlen stark schwanken, zeigen Sie also Anzahlen.

## Branchenperspektive

**Startup.** Changes sind klein und häufig, und das Team kennt oft jeden Fehlschlag auswendig. Halten Sie die Definition auf einen Absatz, kennzeichnen Sie Rollbacks und Hotfixes im Deployment-Werkzeug und überprüfen Sie Fehlschläge in der wöchentlichen Retrospektive. Eine Fehlerrate über 20 Changes ist verrauscht, nutzen Sie also eine Liste der Fehlschläge als Hauptbeleg. Das Risiko ist Informalität: Ohne schriftliche Definition verschiebt sich die Rate mit dem, der zählt.

**Kleinunternehmen.** Dieselben Menschen deployen, betreiben und unterstützen, sodass Nacharbeit direkt mit geplanter Arbeit konkurriert. Erfassen Sie Fehlschläge in dem Werkzeug, das Sie schon nutzen, fügen Sie dem Incident-Datensatz ein Pflichtfeld hinzu und überprüfen Sie Notfall-Changes jedes Quartal. Vermeiden Sie schwere Genehmigung, nur um die Zahlen zu verbessern. Eine gemeinsame Rollback-Checkliste ist mehr wert als ein Change-Gremium.

**Großunternehmen.** Viele Teams, Lieferanten und Werkzeuge bedeuten viele Definitionen. Standardisieren Sie die Fehlschlagsdefinition und das Verknüpfungsfeld über Teams, veröffentlichen Sie sie im Katalog der Kennzahlen und berechnen Sie Raten je Service, bevor Sie aggregieren. Nutzen Sie stichprobenartige Prüfungen, um Abweichungen zu finden, und behandeln Sie die Change-Datensätze jedes Lieferanten als weitere Quelle mit eigener Qualität (siehe Thema 1.5, Datenquellen und Instrumentierung). Achten Sie darauf, dass Aggregationen nie zu Ranglisten von Teams werden.

**Behörden und öffentlicher Sektor.** Change-Datensätze dienen Prüfung und Rechenschaft, und Rollbacks können durch Gesetz, Beschaffung oder gemeinsame Plattformen eingeschränkt sein. Behalten Sie den förmlichen Datensatz und fügen Sie die Fehlschlagsverknüpfung als Teil davon hinzu. Erklären Sie den Aufsichtsgremien die Zahlen sorgfältig, mit Anzahlen und Kontext, denn ein einzelner Fehlschlag in einem kritischen Service kann unverhältnismäßig viel Aufmerksamkeit auf sich ziehen. Nutzen Sie die Daten, um leichtere Wege für risikoarme Changes zu begründen, mit dem Beleg, dass Fehlschlag und Wiederherstellung stabil blieben.

## Business Case: Motive, ROI und TCO

Das Motiv sind die Kosten fehlgeschlagener Changes: Incident-Arbeit, Nacharbeit, verzögerte Roadmap-Elemente und der Verlust des Nutzervertrauens. Viele Organisationen können nicht sagen, wie viel ihres Aufwands in die Reparatur jüngerer Changes fließt, und eine Nacharbeitsmessgröße liefert die erste ehrliche Antwort. Es gibt auch einen indirekten Nutzen. Teams, die zeigen können, dass Change sicher ist, können leichtere Genehmigung verteidigen, was die Durchlaufzeit verkürzt. Die DORA-Forschung berichtet eine Assoziation zwischen schwergewichtiger externer Genehmigung und schwächerer Lieferleistung (siehe Thema 4.3, Kennzahlen für die Change-Befähigung), und Fehlschlagsdaten sind der Weg, wie ein Team diese Behauptung an der eigenen Historie testet.

Die Kosten der Erhebung sind bescheiden, wenn die Vorarbeit existiert: ein Pflichtfeld im Incident-Datensatz, gekennzeichnete korrigierende Deployments, eine Verbindung dreier Datenquellen und ein monatliches Review. Die größeren Kosten sind Aufmerksamkeit, denn jemand muss die Definition besitzen, die Prüfungen durchführen und auf die Befunde reagieren. Vermeiden Sie, ein Werkzeug zu kaufen, bevor Definition und Verknüpfung von Hand funktionieren.

Der Ertrag zeigt sich als weniger wiederholte Fehlschläge, kürzere Wiederherstellung, weniger ungeplante Arbeit und bessere Gespräche mit der Governance. Versprechen Sie keinen Prozentsatz. Schätzen Sie stattdessen Ihre eigene Baseline: Zählen Sie die Stunden, die über ein Quartal in Nacharbeit und mit Changes verknüpfte Incident-Bearbeitung flossen, bewerten Sie sie mit Ihrem üblichen internen Satz und vergleichen Sie nach den Verbesserungen. Nennen Sie die Annahmen und berichten Sie das Ergebnis als Spanne statt als Einzelwert. Vergleichen Sie es mit den Kosten des Programms und den Kosten eines einzelnen schweren Fehlschlags in einem kritischen Service.

## Anti-Muster und Fallstricke

- **Ein Ziel für die Fehlerrate setzen.** Es lädt zu Neudefinition und verborgenen Fehlschlägen ein. Setzen Sie stattdessen ein Ziel für das Lernen, etwa jedes Review abzuschließen und jede korrigierende Maßnahme zu schließen, und beobachten Sie die Rate auf Trends.
- **Teams oder Menschen nach Fehlschlägen ordnen.** Es zerstört das Melden und bestraft die Teams, die riskante, wertvolle Arbeit übernehmen. Vergleichen Sie ein Team mit seiner eigenen Vergangenheit und besprechen Sie den Kontext.
- **Nur Incidents als Fehlschläge zählen.** Fehlschläge, die früh gefangen und zurückgesetzt werden, verschwinden. Beziehen Sie jeden Abhilfeweg ein und nutzen Sie Incidents als ein Signal unter mehreren.
- **Notfall-Changes als schlecht behandeln.** Der Druck führt zu getarnten Notfällen. Prüfen Sie sie auf Gründe und beheben Sie den gewöhnlichen Weg.
- **Die Incident-Verknüpfung auf „nein“ voreinstellen.** Der Standardwert erzeugt eine schmeichelhafte und falsche Zahl. Machen Sie das Feld verpflichtend und prüfen Sie eine Stichprobe.
- **Eine Rate ohne Anzahlen berichten.** Kleine Stichproben schwanken stark. Zeigen Sie Anzahlen und ein gleitendes Fenster.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definition von Fehlschlag | Von Fall zu Fall entschieden, von wem auch immer gefragt wird | Einige Teams schreiben eine Definition; Teams unterscheiden sich | Eine schriftliche Definition mit durchgespielten Beispielen und genanntem Fenster | Definition durch stichprobenartige Prüfungen getestet und Übereinstimmung gemessen | Definition mit Lieferanten und Kunden überarbeitet, wenn sie Entscheidungen nicht mehr informiert |
| Changes und Incidents verknüpfen | Verknüpfung, wenn überhaupt, aus der Erinnerung der Menschen | Optionales Feld von einigen Teams genutzt | Pflichtfeld ohne Standardwert, im Post-Incident-Review geprüft | Verknüpfungsrate im Trend und überprüft, Lücken bearbeitet | Verknüpfungen über Teams und Lieferanten durch vereinbarte Schnittstellen geteilt |
| Abhilfe und Notfallbehandlung | Rollbacks und Hotfixes ad hoc und unerfasst | Rollbacks und Hotfixes von einigen Teams gekennzeichnet | Alle Abhilfewege erfasst; Notfalltest aufgeschrieben | Notfall-Changes jedes Quartal überprüft; Rollbacks geübt | Wiederherstellungswege in Services entworfen und teamübergreifend gemeinsam getestet |
| Nutzung zur Verbesserung | Zahlen in Berichten zitiert, ohne Nachverfolgung | Fehlschläge nach Major Incidents besprochen | Monatliches schuldfreies Review fehlgeschlagener Changes mit Maßnahmen | Fehlschlag und Nacharbeit mit Geschwindigkeit gekoppelt; Experimente geplant und finanziert | Verbesserung ist Routine und wird über Teams geteilt, Lernen wird veröffentlicht |

## Checkliste

- [ ] Eine schriftliche Definition von Change-Fehlschlag existiert, mit genanntem Fenster und mindestens fünf durchgespielten Beispielen.
- [ ] Die Zähleinheit (Change, Deployment oder Release) ist im Kennzahlenregister benannt.
- [ ] Der Incident-Datensatz hat ein Pflichtfeld „durch einen Change verursacht“ ohne Standardwert.
- [ ] Rollbacks, Hotfixes und Roll-forward-Korrekturen sind in den Deployment- oder Versionskontroll-Werkzeugen gekennzeichnet.
- [ ] Korrigierende Deployments tragen eine Verknüpfung zu dem Change, den sie beheben.
- [ ] Notfall-Change hat einen kurzen schriftlichen Test, und jeder Notfall-Change wird innerhalb einer festgelegten Zahl von Tagen überprüft.
- [ ] Raten werden mit Anzahlen und einem gleitenden Fenster gezeigt, nie als bloßer Prozentsatz.
- [ ] Die Change-Fehlerrate wird immer neben Durchlaufzeit, Deployment-Häufigkeit und Wiederherstellungszeit gezeigt.
- [ ] Eine vierteljährliche Stichprobenprüfung kontrolliert die Fehlschlagsurteile und die Incident-Verknüpfung.
- [ ] Ein schuldfreies monatliches Review fehlgeschlagener Changes findet statt, mit einem Eigner für jede Maßnahme.
- [ ] Keine Kennzahl in diesem Thema wird genutzt, um Einzelpersonen zu ordnen oder zu beurteilen.

## KI-Prompts

**Eine schriftliche Definition von Change-Fehlschlag entwerfen.**

```text
We operate [service or product type] with [team size] people and release
[frequency, for example several times a week]. Our tools are [change tool,
deployment tool, incident tool]. Draft a one-page definition of "failed change"
that states the unit (change, deployment, or release), the failure window, the
remediation routes that count (rollback, hotfix, roll-forward fix, linked
incident), and the exclusions. Include [number] worked examples, including
borderline cases. Do not invent benchmark values or thresholds; ask me for any
you need. List your assumptions.
```

**Die Verknüpfung von Change zu Incident entwerfen.**

```text
Here is our incident record template: [fields]. Here is our change record
template: [fields]. Suggest how to record which change caused which incident,
including a required field, allowed values, who completes it, and how a review
should check it. Propose a way to suggest candidate changes automatically from
[available data, for example deploy times and service names]. Do not guess how our
tools are configured. List your assumptions and the questions I should answer.
```

**Eine Liste fehlgeschlagener Changes auf Muster analysieren.**

```text
Below are [number] failed changes from [period], with these fields: [list fields,
for example size, type, day and time, service, remediation route, time to
restore]. Find patterns and possible contributing factors, and suggest up to
[number] small, reversible experiments to reduce failures. Keep the analysis at
the level of teams and services, and do not rank individuals. Do not invent
statistics or benchmark values. State how confident each pattern is given the
sample size, and list your assumptions.
```

**Ein Fehlschlags-Dashboard auf Manipulationsrisiken prüfen.**

```text
Our dashboard shows [list of metrics, for example change fail rate, emergency
share, rollback rate, hotfix rate, rework rate] with these definitions:
[definitions]. For each metric, list plausible ways the number could improve
without the service improving, and a guardrail for each. Suggest two audit checks
a team of [team size] could run each quarter. Do not invent benchmark values or
compliance claims. List your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um herauszufinden, welches Thema eine verwandte Kennzahl wie Durchlaufzeit oder Incident-Dauer definiert und welche Leitplanke neben die Fehlerrate gehört.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine neue oder bearbeitete Fehlschlagskennzahl ihre Uhr, ihre Quelle und ihren Manipulationsvektor nennt.

## Wichtigste Erkenntnisse

- Eine Change-Fehlerrate ist nur so gut wie ihre Definition, schreiben Sie also eine mit Fenster, durchgespielten Beispielen und benannter Einheit.
- Verknüpfen Sie jeden Fehlschlag über ein Pflichtfeld im Incident-Datensatz mit seinem Change und messen Sie die Verknüpfungsrate.
- Zählen Sie Rollbacks, Hotfixes, Roll-forward-Korrekturen und verknüpfte Incidents zusammen, damit Teams der Kennzahl nicht durch Wechsel des Weges ausweichen können.
- Lesen Sie den Anteil von Notfall-Changes und die Nacharbeit als Signale über Planung und den gewöhnlichen Weg, nicht als Punktzahlen.
- Zeigen Sie Fehlschlag immer neben Geschwindigkeit und Wiederherstellung, mit Anzahlen und einem gleitenden Fenster, und ordnen Sie nie Menschen.

## Quellen und weiterführende Literatur

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
8. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
9. Wikipedia, [Hotfix](https://en.wikipedia.org/wiki/Hotfix).
10. Wikipedia, [Rework](https://en.wikipedia.org/wiki/Rework).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
14. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
