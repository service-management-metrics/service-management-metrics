# Kennzahlen für Releases und Deployments

**Code zu deployen und ihn für Nutzer zu releasen sind verschiedene Ereignisse mit verschiedenen Risiken. Messen Sie sie also getrennt, zählen Sie jedes nach einer schriftlichen Regel und lesen Sie Häufigkeit, Durchlaufzeit, Paketgröße und Flag-Hygiene zusammen, statt irgendeine einzelne Zählung zu feiern.**

## Überblick und Motivation

Viele Teams verwenden die Wörter „Deployment“ und „Release“, als meinten sie dasselbe. Das tun sie nicht, und der Unterschied ist die nützlichste Idee in diesem Thema. Ein **Deployment** ist der Vorgang, eine Version der Software in eine Umgebung zu bringen, meist die Produktion, wie im Artikel zu [Software-Deployment](https://en.wikipedia.org/wiki/Software_deployment) beschrieben. Ein **Release** ist der Moment, in dem ein Change für seine vorgesehenen Nutzer verfügbar wird, eine Entscheidung, die das [Release-Management](https://en.wikipedia.org/wiki/Release_management) steuern soll. Geschehen beide zusammen, ist ein Deployment ein Release, und eine Zahl beschreibt beides. Sind sie getrennt, kann das Team oft und unauffällig deployen und bewusst releasen.

Die Trennung ist wichtig, weil die beiden Ereignisse unterschiedliche Risiken tragen. Ein Deployment trägt technisches Risiko: Der neue Build startet womöglich nicht, bricht eine Abhängigkeit oder braucht einen Rollback. Ein Release trägt Geschäfts- und Nutzerrisiko: Der Change verwirrt womöglich Kunden oder muss an einem vereinbarten Datum landen. Teams, die die beiden Ereignisse koppeln, nehmen beide Risiken zugleich in Kauf, was sie zu großen, selten veröffentlichten Änderungspaketen drängt. Teams, die sie trennen, nehmen das technische Risiko in kleinen Schritten und das Nutzerrisiko in kontrollierten Schritten.

Das wichtigste Werkzeug der Trennung ist der [Feature-Toggle](https://en.wikipedia.org/wiki/Feature_toggle), auch Feature-Flag genannt: ein Schalter in der Konfiguration, der ein Verhalten ohne neues Deployment ein- oder ausschaltet. Verwandte Techniken sind das [Canary-Release](https://en.wikipedia.org/wiki/Canary_release), das einen Change zunächst einem kleinen Anteil des Verkehrs aussetzt, und das [Blue-Green-Deployment](https://en.wikipedia.org/wiki/Blue-green_deployment), das zwei Produktionsumgebungen hält und den Verkehr zwischen ihnen umschaltet. Alle lassen Sie zwei getrennte Fragen beantworten: Läuft die neue Version sicher, und wer soll das neue Verhalten wann sehen.

Die folgenden Begriffe kehren in diesem Thema wieder.

- Ein **Release** ist eine Version oder eine Menge von Changes, die Nutzern verfügbar gemacht wird.
- Ein **Deployment** ist die Bewegung einer Version in eine Umgebung. ITIL 4 benennt dafür eine Praktik, das Deployment-Management.
- Ein **Dark Launch** ist ein Deployment, dessen neues Verhalten für Nutzer ausgeschaltet ist.
- Ein **progressives Rollout** ist ein Release, das die Exposition in Stufen ausweitet, zum Beispiel 1 Prozent, 10 Prozent und dann alle.
- Ein **Paket (Batch)** ist die Menge der Changes, die gemeinsam in einem Deployment oder Release ausgeliefert werden. Die Paketgröße ist die Zahl der Changes oder die Menge an Änderung darin.
- Die **Release-Durchlaufzeit** ist die verstrichene Zeit von einem genannten Startpunkt, bis der Change für seine Nutzer verfügbar ist. Ihr Team schreibt den Startpunkt auf, weil mehrere gebräuchlich sind.
- Ein **Perzentil** ist ein Wert, unter dem ein genannter Anteil der Beobachtungen liegt. Das 85. Perzentil der Release-Durchlaufzeit ist die Zahl, die 85 Prozent der Releases unterbieten.

Agile und ITIL-Sicht treffen sich hier. Ein agiles Team, das der [kontinuierlichen Auslieferung](https://en.wikipedia.org/wiki/Continuous_delivery) folgt, will, dass jeder Change jederzeit releasefähig ist, und behandelt das Release als geschäftliche Entscheidung, getrennt vom technischen Akt. Ein ITIL-Praktiker sieht Release-Management, Deployment-Management und Change-Befähigung als Praktiken, die die Bewegung von Change in den Live-Betrieb planen, terminieren und kontrollieren. Die beiden Sichten geraten in Konflikt, wenn Release-Management als Kalender großer Ereignisse verstanden wird. Sie passen zusammen, wenn die Praktik als Fähigkeit verstanden wird, auf Abruf sicher zu releasen, mit den in Pipeline und Flags eingebauten Kontrollen.

Dieses Thema wiederholt weder die Definitionen der fünf Lieferleistungsmessgrößen des DORA-Forschungsprogramms (siehe Thema 2.8, DORA-Kennzahlen) noch die Messgrößen für Fehlschlag und Nacharbeit nach einem Release (siehe Thema 4.4, Change-Fehlschläge und Nacharbeit) noch Volumen und Genehmigung von Changes (siehe Thema 4.3, Kennzahlen für die Change-Befähigung). Es ergänzt, was diese Themen offenlassen: wie man Releases getrennt von Deployments zählt, wie lange ein fertiger Change wartet, bevor Nutzer ihn bekommen, wie groß die Pakete sind und ob die Flags, die die Trennung möglich machen, ordentlich gehalten werden.

Schließlich sind Release- und Deployment-Zählungen verlockende Zahlen für ein Führungs-Dashboard, und [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) greift sofort (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen). Eine Zählung der Deployments steigt, wenn Changes in triviale Stücke zerlegt werden. Eine Zählung der Releases steigt, wenn ein Etikett geändert wird. Jede Kennzahl unten kommt deshalb mit der Art, wie sie sich verbiegt, und der Leitplanke, die das Verbiegen auffängt.

## Leitprinzipien

- **Deployment und Release sind zwei Ereignisse.** Messen Sie sie getrennt, wo immer die Architektur es zulässt, und sagen Sie klar, wo sie noch ein Ereignis sind.
- **Nach einer schriftlichen Regel zählen.** Ein Deployment zählt, wenn eine benannte Umgebung eine benannte Version mit erfolgreichem Ergebnis erhielt. Ein Release zählt, wenn die vorgesehenen Nutzer den Change erreichen können. Schreiben Sie die Regel einmal auf und wenden Sie sie jedes Mal gleich an.
- **Einen Service beschreiben, nicht eine Person.** Zählungen gehören zu einem Service und seinem Team, nie zu einer Einzelperson.
- **Das Warten messen, nicht nur die Arbeit.** Die Release-Durchlaufzeit enthält oft Tage des Wartens auf ein Fenster, eine Genehmigung oder eine Entscheidung. Im Warten liegt meist die Verbesserung.
- **Kleine Pakete sind der Hebel.** Häufigkeit und Größe sind zwei Sichten auf dasselbe. Koppeln Sie jede Zählung mit einer Messgröße, wie viel Änderung jedes Release trug.
- **Flags sind Inventar mit Haltekosten.** Ein Flag, das zu lange lebt, wird zu totem Code und zu einer Fehlerquelle, verfolgen Sie also das Alter von Flags so sorgfältig wie ihre Abdeckung.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Deployment-Häufigkeit | Wie oft ein Service ein erfolgreiches Deployment in die Produktion erhält | Anzahl erfolgreicher Produktions-Deployments des Services im Zeitraum / Tage im Zeitraum; Deployments in Test- oder Staging-Umgebungen, fehlgeschlagene oder zurückgesetzte Deployments und Neu-Deployments eines unveränderten Builds sind ausgeschlossen; reine Konfigurations-Deployments werden in einer gesonderten Reihe gezählt | Deployments pro Tag oder pro Woche | Ereignisprotokoll der Deployment-Pipeline | Deployment-Management | Kontinuierliche Auslieferung; ein funktionierendes Inkrement ausliefern | Wöchentlich |
| Release-Häufigkeit | Wie oft Nutzer einen Change erhalten, den sie erreichen können | Anzahl der Release-Ereignisse im Zeitraum / Tage im Zeitraum; ein Release-Ereignis ist der Moment, in dem ein Change oder eine Gruppe von Changes für die vorgesehenen Nutzer erreichbar wird (ein für alle Nutzer eingeschaltetes Flag, die letzte Stufe eines progressiven Rollouts oder ein Deployment eines Changes ohne Flag); ein Dark Launch, ein auf einer Teilstufe gestopptes Rollout und eine Flag-Änderung, die nur interne Nutzer betrifft, sind ausgeschlossen | Releases pro Woche oder pro Monat | Audit-Protokoll des Flag-Dienstes, verbunden mit dem Pipeline-Protokoll und dem Release-Kalender | Release-Management | Release am Ende jedes Inkrements; ein potenziell auslieferbares Inkrement verfügbar gemacht | Wöchentlich, monatlich überprüft |
| Release-Durchlaufzeit | Wie lange ein fertiger Change wartet, bevor Nutzer ihn erreichen können | Die Uhr startet, wenn der Change in die Hauptlinie gemergt wurde und seine automatisierten Prüfungen bestanden hat (oder, wenn Ihr Team es so schreibt, beim ersten Commit) und stoppt, wenn der Change wie oben definiert released ist; Median und 85. Perzentil der im Zeitraum released Changes berichten; noch nicht released Changes sind ausgeschlossen und als Alter wartender Arbeit berichtet | Stunden oder Tage | Versionskontrolle, verbunden mit der Pipeline und dem Flag-Audit-Protokoll | Release-Management; Deployment-Management | Durchlaufzeit von fertig bis geliefert; Durchlaufzeit bis zum Kunden | Wöchentlich, monatlich überprüft |
| Lücke zwischen Deployment und Release | Wie lange deployter Code dunkel bleibt, bevor Nutzer ihn erreichen können | Die Uhr startet, wenn der Change in die Produktion deployt wird, und stoppt, wenn er released wird; Median und 85. Perzentil berichten; im Moment des Deployments released Changes haben eine Lücke von null und sind enthalten; deployte und später ohne Release entfernte Changes sind ausgeschlossen und gesondert gezählt | Stunden oder Tage | Pipeline-Protokoll, verbunden mit dem Flag-Audit-Protokoll | Release-Management; Deployment-Management | Dark Launch; Deployment vom Release entkoppeln | Monatlich |
| Release-Paketgröße | Wie viel Change gemeinsam in einem Release ausgeliefert wird | Median und 85. Perzentil der Zahl gemergter Changes (Pull Requests oder Arbeitselemente) je Release im Zeitraum; die Einheit des Changes ist aufgeschrieben; jeder Change wird einmal gezählt, in dem Release, das ihn erreichbar machte | Changes pro Release | Versionskontrolle und Issue-Tracker, verbunden mit dem Release-Ereignis | Release-Management; Change-Befähigung | Kleine Pakete; vertikale Scheiben von Arbeit | Je Release, monatlich überprüft |
| Feature-Flag-Abdeckung | Der Anteil nutzersichtbarer Changes, die hinter einem Flag released wurden | Im Zeitraum released nutzersichtbare Changes, die zum Zeitpunkt des Releases ein Flag hatten / alle im Zeitraum released nutzersichtbaren Changes; Infrastruktur-Changes und Fehlerkorrekturen, die sich nicht flaggen lassen, sind ausgeschlossen, und die Regel für „nutzersichtbar“ ist aufgeschrieben | Prozent | Flag-Dienst, verbunden mit Issue-Tracker und Release-Protokoll | Release-Management; Change-Befähigung | Progressive Auslieferung; experimentgetriebene Entwicklung | Monatlich |
| Anzahl veralteter Flags | Wie viele Flags ihren Zweck überlebt haben | Zahl der Release-Flags, die mehr als eine genannte Zahl von Tagen, nachdem der von ihnen geschützte Change alle Nutzer erreichte, noch im Code oder in der Konfiguration vorhanden sind; dauerhafte Betriebs-Flags (Kill-Switches, Berechtigungs-Flags) sind gekennzeichnet und ausgeschlossen; die Altersgrenze ist je Flag-Typ aufgeschrieben | Flags und das mediane Alter der Release-Flags in Tagen | Inventar des Flag-Dienstes, verbunden mit der Code-Suche | Release-Management; Wissensmanagement | Aufräumen technischer Schulden; das Done-Kriterium, ein Flag zu entfernen | Monatlich |

## Empfehlungen

### Aufschreiben, was als Deployment und als Release zählt

**Definieren Sie beide Ereignisse, bevor Sie eines zählen.** Ein Deployment zählt, wenn eine benannte Version eine benannte Umgebung erreichte und die Pipeline Erfolg meldete. Ein Release zählt, wenn die vorgesehenen Nutzer den Change erreichen können, was bei einem geflaggten Change der Moment ist, in dem das Flag für sie eingeschaltet wird, und nicht der Moment, in dem der Code ankam. Nennen Sie die Ausschlüsse im selben Satz: Testumgebungen, Rollbacks, Neu-Deployments eines unveränderten Builds und rein interne Exposition.

### Die zwei Reihen nebeneinander berichten

**Zeigen Sie Deployment-Häufigkeit und Release-Häufigkeit in einem Diagramm.** Wo die Linien zusammenfallen, koppelt der Service die beiden Ereignisse noch. Wo Deployments den Releases deutlich vorauslaufen, hat das Team begonnen, sie zu entkoppeln, und der Abstand zwischen den Linien ist ein Zeichen der Fähigkeit. Eine einzige kombinierte Zahl verbirgt das und lässt ein Team eine hohe Häufigkeit behaupten, die Nutzer nie sehen.

### Release-Durchlaufzeit von einem genannten Start bis zum Nutzer messen

**Wählen Sie den Start der Uhr einmal und behalten Sie ihn.** Ein Start beim ersten Commit zeigt die ganze Reise, ein Start beim Merge in die Hauptlinie isoliert die Release-Pipeline und ihre Genehmigungen. Beides ist akzeptabel, wenn es im Diagramm genannt und nie stillschweigend geändert wird. Beenden Sie die Uhr beim Release, nicht beim Deployment, sonst misst die Kennzahl nicht mehr, worauf der Nutzer wartete.

### Paketgröße neben der Häufigkeit verfolgen

**Koppeln Sie jede Häufigkeit mit einer Größe.** Ein Team kann seine Deployment-Zahl erhöhen, indem es einen Change in Scheiben schneidet, die nicht für sich nützlich sind, und die Zahl steigt, während der echte Fluss gleich bleibt. Median und 85. Perzentil der Paketgröße zeigen, ob die Scheiben echt sind. Kleine Pakete sind leichter zu prüfen, zu testen und zurückzusetzen, und das ist der Nutzen, für den die Häufigkeit ein Stellvertreter ist.

### Stufen progressiver Rollouts als Ereignisse behandeln

**Erfassen Sie jede Stufe eines Rollouts mit Zeitstempel.** Ein Rollout, das von 1 Prozent auf 10 Prozent auf alle geht, ergibt drei Zeitstempel, und jeder ist eine Gelegenheit zu stoppen. Erfassen Sie die Stufe, den Expositionsanteil und das Ergebnis der Gesundheitsprüfung, die die nächste Stufe erlaubte. So können Sie ein wegen eines echten Signals pausiertes Rollout von einem steckengebliebenen unterscheiden.

### Ein Flag-Inventar mit Eigner und Ablaufdatum führen

**Geben Sie jedem Release-Flag bei der Anlage einen Eigner, einen Zweck und ein geplantes Entfernungsdatum.** Der Flag-Dienst oder ein schlichtes Register kann sie halten. Überprüfen Sie das Register monatlich und berechnen Sie die Anzahl veralteter Flags. Ein nach dem vollständigen Rollout eingeschaltet gelassenes Flag ist toter Code, der noch verzweigt. Behandeln Sie das Entfernen als Teil von „fertig“ für den Change.

### Flags nach Typ kennzeichnen

**Trennen Sie temporäre Release-Flags von dauerhaften Betriebs-Flags.** Kill-Switches und Berechtigungs-Flags sind von Natur aus dauerhaft, während Release-Flags nach dem vollständigen Rollout entfernt werden sollten. Die Typen zu mischen macht die Zahl veralteter Flags verrauscht und lädt Teams ein, einen Schalter zu löschen, den jemand bei einem Incident braucht. Verlangen Sie den Typ bei der Anlage des Flags.

### Releases mit Incident- und Change-Datensätzen verknüpfen

**Erfassen Sie die Release-Kennung am Incident und am Change.** Ein Release-Ereignis sollte aus dem Incident-Werkzeug nachverfolgbar sein, damit die Ursache eines Incidents mit dem released Change verknüpft werden kann, ob er letzte Woche deployt oder heute Morgen eingeschaltet wurde. Ohne die Verknüpfung ordnen Instabilitätsmessgrößen Fehlschläge dem Deployment-Datum zu und übersehen Fehlschläge durch eine Flag-Änderung. Flag-Änderungen in der Produktion sind Changes im Sinne von ITIL und sollten für die Change-Befähigung sichtbar sein, auch wenn sie als Standard-Changes vorab autorisiert sind (siehe Thema 4.3, Kennzahlen für die Change-Befähigung).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Deployment-Häufigkeit | Einen Change in triviale Deployments zerlegen; unveränderte Builds neu deployen; Deployments in Staging zählen; reine Konfigurations-Deployments mit der Hauptreihe zählen | Release-Paketgröße und der Anteil der Deployments mit nutzersichtbarem Change; die gesonderte Konfigurationsreihe; Change-Fehlerrate daneben |
| Release-Häufigkeit | Deployments als Releases umetikettieren; ein für interne Mitarbeitende eingeschaltetes Flag als Release zählen; leere oder kosmetische Changes releasen, um ein Ziel zu erreichen; jede Stufe eines Rollouts als eigenes Release zählen | Eine schriftliche Definition von Release; jedes Quartal eine Stichprobe von Releases gegen nutzersichtbare Changes geprüft; Paketgröße und Zahl kundenseitiger Changes |
| Release-Durchlaufzeit | Die Uhr später starten, zum Beispiel bei der Genehmigung statt beim Merge; lange wartende Changes als „blockiert“ ausschließen; einen trivialen Change zuerst releasen, um den Median zu drücken; die Uhr beim Deployment beenden | Das 85. Perzentil und das Alter des ältesten wartenden Changes; ein fester schriftlicher Start; ein vierteljährliches Review der langsamsten 10 Prozent der Changes |
| Lücke zwischen Deployment und Release | Ein Flag für einen Alibi-Nutzer einschalten, um das Release früh zu erfassen; lange dunklen Code aus der Stichprobe lassen, indem man ihn „kein Release“ nennt; dunklen Code löschen, um eine lange Lücke zu vermeiden | Expositionsanteil beim Release (eine Schwelle, was als released zählt); Zahl der deployten und ohne Release entfernten Changes; Anzahl veralteter Flags |
| Release-Paketgröße | Arbeit in künstliche Pull Requests zerlegen; nicht zusammenhängende Changes in einen mergen, um die Zahl der Releases zu senken; nur den großen Change in einem Bündel zählen | Mediane Change-Größe in Zeilen oder Dateien als Kontextmessgröße; Prüfung einer Stichprobe von Releases auf nicht zusammenhängendes Bündeln; Häufigkeit neben der Größe |
| Feature-Flag-Abdeckung | Trivialen Changes Flags hinzufügen, um die Rate zu heben; nur die sicheren Changes flaggen und riskante ungeflaggt ausliefern; ein Flag anlegen, das sich praktisch nicht ausschalten lässt | Ergebnisse von Flag-aus-Tests für eine Stichprobe von Flags; die Anzahl veralteter Flags; Incident-Ursachen, die kein Flag hatten |
| Anzahl veralteter Flags | Release-Flags als dauerhaft umetikettieren, um die Zählung zu verlassen; den Flag-Datensatz löschen, das Flag aber im Code lassen; Ablaufdaten ohne Review verlängern | Eine periodische Code-Suche gegen das Register; Review jeder Änderung des Flag-Typs; das Alter des ältesten Release-Flags |

Ein gesunder Befund zeigt Deployments, die den Releases bei Services mit Flags vorauslaufen, mit bescheidener Lücke, kleiner und stetiger Paketgröße und einem 85. Perzentil der Durchlaufzeit nicht weit über dem Median. Die Flag-Abdeckung ist hoch für riskante Changes, und die Anzahl veralteter Flags ist niedrig oder fallend. Ein Befund, der zu gut aussieht, etwa hohe Häufigkeit bei wachsenden Paketgrößen oder eine Zahl veralteter Flags von null bei anschwellender Zahl dauerhafter Flags, verdient eine Stichprobenprüfung vor jeder Feier.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Kontinuierlich deployen und per Flag releasen | Geringes technisches Risiko je Deployment; Release-Zeitpunkt wird eine geschäftliche Wahl; schnelles Ausschalten | Braucht Flag-Disziplin und Werkzeuge; fügt Codepfade hinzu, die getestet und entfernt werden müssen |
| Deployment und Release koppeln | Einfach zu erklären; ein Ereignis zu zählen; keine Flag-Schulden | Jedes Release trägt technisches und Nutzerrisiko, was große, selten veröffentlichte Pakete fördert |
| Fester Release-Zug | Vorhersehbar für Support und Regulierer | Changes warten auf den nächsten Zug; die Zählung spiegelt den Kalender, nicht die Fähigkeit |
| Progressives Rollout nach Prozent | Begrenzt die Wirkung eines schlechten Releases; erzeugt Belege auf jeder Stufe | Braucht gute Telemetrie und eine Gesundheitsprüfung; gemischte Versionen laufen eine Zeit nebeneinander |
| Deployments und Releases beide zählen | Zeigt Entkopplung und Warten | Erfordert, dass ein Flag-Audit-Protokoll oder Release-Datensätze mit der Pipeline verbunden werden |

Ein Service, der Deployment noch nicht vom Release entkoppeln kann, zum Beispiel eine mobile Anwendung, die über eine App-Store-Prüfung vertrieben wird, sollte messen, was er kann: Release-Häufigkeit, Release-Durchlaufzeit und Paketgröße, mit der Store-Prüfzeit als gesondert berichtetem Warten.

## Fragen für die Diskussion im Team

**1. Verwenden wir „Deployment“ und „Release“ für dasselbe Ereignis, und passt das zu dem, was geschieht?**
Bitten Sie drei Personen, den letzten live gegangenen Change zu beschreiben, und notieren Sie, wann der Code ankam und wann Nutzer ihn erstmals verwenden konnten. Die Moderation sollte der Gruppe helfen, sich auf einen Satz für jeden Begriff zu einigen und zu entscheiden, welches der beiden Ereignisse jede vorhandene Dashboard-Zahl misst.

**2. Wie lange hat ein fertiger Change längstens auf sein Release gewartet, und warum?**
Holen Sie den ältesten gemergten Change, den Nutzer noch nicht erreichen können. Verfolgen Sie seinen Weg vom Merge bis jetzt und schreiben Sie jedes Warten auf dem Weg auf.

**3. Wenn sich unsere Deployment-Zahl verdoppelte, was würden wir prüfen, bevor wir es eine gute Nachricht nennen?**
Laden Sie die Gruppe ein, Wege zu nennen, wie die Zahl ohne mehr Wert für Nutzer steigen könnte. Schauen Sie auf Paketgröße, den Anteil der Deployments mit nutzersichtbarem Change und die Zahlen zu Fehlschlag und Nacharbeit. Die Moderation sollte festhalten, welche dieser Prüfungen schon im Dashboard existieren und welche ergänzt werden müssen, bevor jemand ein Ziel setzt.

**4. Welche unserer Flags würden wir nur ungern löschen, und was sagt uns das?**
Gehen Sie das Flag-Register durch und wählen Sie die drei ältesten. Fragen Sie bei jedem, wer es besitzt, was es schützt und was bei seiner Entfernung geschähe. Angst vor dem Löschen bedeutet meist einen fehlenden Test, einen fehlenden Eigner oder einen fehlenden Zweck-Eintrag. Einigen Sie sich auf ein Entfernungsdatum für mindestens eines und auf die Prüfung, die das Entfernen sicher machen würde.

**5. Wer entscheidet, wann ein Change released wird, und hat die Person die Informationen, die sie braucht?**
Wo Release eine geschäftliche Wahl ist, muss die Person, die sie trifft, den Stand des Rollouts, die Gesundheitssignale und die Support-Bereitschaft sehen. Fragen Sie, wo diese Fakten heute liegen und wie schnell die entscheidende Person ein Release rückgängig machen kann.

**6. Welches Release im letzten Quartal lief am schlechtesten, und welche Messgröße hätte uns gewarnt?**
Wählen Sie ein Release, das Ärger machte, und lesen Sie die Zeitleiste gemeinsam. Fragen Sie, ob das Paket groß war, die Lücke lang, das Rollout Stufen hatte und ob ein Flag den Schaden hätte begrenzen können. Wählen Sie eine Messgröße zum Ergänzen oder eine Schwelle zum Verschärfen.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams nutzen diese Kennzahlen, um zu sehen, ob ihre Pipeline und ihre Flags ihnen tatsächlich Kontrolle über die Exposition geben. Die nützlichsten Sichten sind die Lücke, die Paketgröße und das Alter des ältesten wartenden Changes, weil jede auf etwas zeigt, das das Team ändern kann.

### Service- und Betriebsteams

Betriebs- und Support-Teams kümmert, was sich in der Produktion wann ändert. Release-Ereignisse und Flag-Änderungen müssen für sie sichtbar sein, idealerweise mit einer Release-Kennung an jedem Incident. Gestufte Rollouts und schnelles Ausschalten verringern die Zahl der Incidents, die eine vollständige Wiederherstellung brauchen, und die Kennzahlen helfen Betriebsteams, die Kontrollen einzufordern, die ihre Arbeit ruhiger machen.

### Führung und Governance

Führungskräfte sollten Trends und Streuung je Service verlangen und die Antwort auf eine einfache Frage: Wie lange braucht ein fertiger Change, bis er Nutzer erreicht, und wie sicher. Ein Ziel für die Deployment-Häufigkeit über Teams lädt zu Zerlegen und Umetikettieren ein, bevorzugen Sie also Ziele für Ergebnisse wie Verteilungen der Durchlaufzeit und für das Beseitigen bekannter Wartezeiten. Die Governance kann die Last der Release-Genehmigungen verringern, indem sie risikoarme geflaggte Changes vorab autorisiert, solange der Flag-Audit-Trail vollständig ist (siehe Thema 4.3, Kennzahlen für die Change-Befähigung).

### Kunden und Nutzer

Kunden sehen Releases, nicht Deployments. Ihnen liegt daran, dass Korrekturen bald eintreffen, dass neues Verhalten sie nicht überrascht und dass ein schlechter Change schnell zurückgenommen werden kann. Ein Team, das die beiden Ereignisse trennt, kann Kunden frühen Zugang zu einer Funktion geben, ein Datum ankündigen, das es halten kann, und eine Funktion zurücknehmen, ohne den Rest zu verlieren. Koppeln Sie diese Kennzahlen mit kundenseitigen (siehe Thema 5.3, Kennzahlen für Verfügbarkeit, und Thema 6.1, Kennzahlen für Kundenzufriedenheit).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein regionaler Online-Händler betreibt einen Produktsuchservice, der einem Produktteam gehört und von einem Plattformteam und dem Service Desk unterstützt wird. Der Service deployt über eine Pipeline in die Produktion und hat einen Flag-Dienst, der vor sechs Monaten eingeführt wurde. Alle Zahlen unten sind illustrativ.

Im letzten Quartal machte das Team 52 Produktions-Deployments, etwa vier pro Woche. Die Release-Häufigkeit, gezählt als die Momente, in denen ein Change für alle vorgesehenen Nutzer erreichbar wurde, betrug im selben Quartal 11, etwa eines pro Woche. Die mediane Release-Durchlaufzeit, vom Merge bis zum Release, betrug 9 Tage, mit einem 85. Perzentil von 21 Tagen. Die mediane Lücke zwischen Deployment und Release betrug 6 Tage. Die mediane Release-Paketgröße war 3 Changes und das 85. Perzentil 14. Die Flag-Abdeckung für nutzersichtbare Changes betrug 58 Prozent, und 17 Release-Flags lagen mehr als 30 Tage nach dem vollständigen Rollout.

Das Manipulationsrisiko ist schon sichtbar. Einige Deployments waren rein konfigurativ, und die Pipeline zählte jedes als Deployment, deshalb zeigt das Dashboard nun eine gesonderte Konfigurationsreihe, und das Monats-Review zieht 10 Deployments stichprobenartig auf einen nutzersichtbaren Change. Ein Regionalleiter sieht die Deployment-Zahl und bittet das Team, sie auf die Zahl eines anderen Teams zu heben. Die Teamleitung widersteht dem Ziel und bringt stattdessen den vollständigen Satz Zahlen ins Monats-Review. Das Review stellt fest, dass die Lücke lang ist, weil Releases auf ein wöchentliches Marketing- und Support-Briefing warten, dass vier der 17 veralteten Flags Codepfade schützen, die niemand getestet hat, und dass das 85. Perzentil der Paketgröße von einigen Releases stammt, die vor einem Feiertags-Freeze nicht zusammenhängende Changes bündelten.

Die im Entscheidungsprotokoll festgehaltene Entscheidung hat vier Teile. Support und Marketing nehmen an einem kürzeren Briefing zweimal pro Woche teil, damit die Release-Entscheidung nicht mehr auf den wöchentlichen Termin wartet. Jedes Release-Flag erhält einen Eigner und ein Entfernungsdatum, und die vier ungetesteten veralteten Flags werden in den nächsten zwei Wochen entfernt. Releases, die nicht zusammenhängende Changes bündeln, brauchen einen genannten Grund im Release-Datensatz. Und das Team lehnt das übliche Deployment-Ziel ab und bietet stattdessen eine gemeinsame Sicht auf die Verteilung der Release-Durchlaufzeit und die Flag-Hygiene jedes Services an. Der Change-Manager stimmt zu, geflaggte Changes, die die Pipeline-Prüfungen bestehen, als Standard-Changes zu behandeln, mit einem Review im nächsten Quartal. Im nächsten Quartal (illustrativ) fällt die mediane Release-Durchlaufzeit auf 5 Tage, die Anzahl veralteter Flags fällt auf 6, und die Change-Fehlerrate bleibt stabil, das Experiment geht also weiter.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Deployment vom Release zu trennen lässt ein Team kontinuierlich kleine Changes ausliefern und releasen, wenn Stakeholder bereit sind. Überprüfen Sie die Flag-Hygiene regelmäßig. Zu beachten ist, dass das Zählen von Deployments das Zerlegen von Changes belohnt.

### KI

KI-gestütztes Programmieren kann Deployment-Zahlen und Paketgrößen erhöhen. Koppeln Sie die Häufigkeit mit der Wiederherstellung nach fehlgeschlagenen Deployments und der Anzahl veralteter Flags und kennzeichnen Sie KI-gestützte Changes in den Daten. Zu beachten ist, dass mehr Deployments mit mehr Nacharbeit kein Fortschritt sind.

### Automatisierung

Zählen Sie Deployments und Releases aus Pipeline-Ereignissen und automatisieren Sie Erinnerungen zum Aufräumen von Flags. Messen Sie die Pipeline an ihrer eigenen Fehlerrate. Zu beachten ist, dass manuelle Releases außerhalb der Pipeline aus den Daten verschwinden.

### Analytik

Zeigen Sie die Häufigkeit mit Durchlaufzeit und Paketgröße und die Lücke zwischen Deployment und Release. Die Entscheidung, die dies untermauert, ist, wo der Weg zu den Nutzern langsam ist. Zu beachten ist, dass die Definitionen von Deployment je Team variieren.

## Branchenperspektive

**Startup.** Ein Startup hat oft einen einzigen Service und eine Flag-Bibliothek im Code, sodass sich Deployment und Release günstig trennen lassen. Führen Sie ein einfaches Register der Flags mit Ablaufdaten und warten Sie auf genügend Volumen, bevor Sie Perzentilen trauen.

**Kleinunternehmen.** Ein kleines Unternehmen betreibt womöglich Standard- oder zugekaufte Software, bei der der Lieferant das Release kontrolliert. Die nützlichen Messgrößen sind die Zeit zwischen dem Release des Lieferanten und der Übernahme durch das Unternehmen und das Paket an Changes, das in einer Hauptversion zusammen eintrifft. Erfassen Sie die Release-Daten des Lieferanten und Ihre eigenen Deployment-Daten, damit das Warten dazwischen sichtbar wird.

**Großunternehmen.** Ein Großunternehmen hat viele Services mit unterschiedlichen Release-Stilen, einen zentralen Change-Prozess und gemeinsame Umgebungen. Die Hauptarbeit ist, die Definitionen von Deployment und Release über Teams und Lieferanten zu vereinbaren und eine Aggregation zu führen, die die Unterschiede respektiert. Nutzen Sie Streuung und Trends für die Governance und behandeln Sie die Flag-Plattform als gemeinsamen Service mit Eigner.

**Behörden und öffentlicher Sektor.** Releases sind oft an feste Daten, Gesetzgebung, Beschaffungszyklen oder Prüfpunkte gebunden, sodass die Release-Häufigkeit aus guten Gründen niedrig sein kann. Deployment-Häufigkeit und die Lücke zwischen Deployment und Release können dennoch zeigen, wie viel des Risikos früh eingegangen wurde und wie viel auf das Datum wartet. Berichten Sie das Warten auf externe Prüfpunkte getrennt von der eigenen Pipeline-Zeit des Teams.

## Business Case: Motive, ROI und TCO

Das Motiv dieser Kennzahlen ist, das Risiko und die Verzögerung zwischen dem Fertigstellen eines Changes und der Lieferung seines Wertes zu verringern. Große, selten veröffentlichte Pakete tragen mehr Change je Ereignis, sodass ein Fehlschlag schwerer zu diagnostizieren und schwerer zurückzusetzen ist. Deployment vom Release zu trennen gibt dem Team eine Möglichkeit, technisches Risiko früh und in kleinen Mengen und Nutzerrisiko bewusst einzugehen. Die Kennzahlen zeigen, ob die Trennung echt ist und wo Change wartet.

Die Kosten sind mäßig. Das Erfassen von Deployment- und Release-Ereignissen braucht das Pipeline-Protokoll und das Flag-Audit-Protokoll, verbunden mit Versionskontrolle und Issue-Tracker, was eine einmalige Integration mit gelegentlicher Pflege ist (siehe Thema 1.5, Datenquellen und Instrumentierung). Die Flag-Praxis selbst hat laufende Kosten: die Plattform oder Bibliothek, das Register, das Testen beider Pfade eines geflaggten Changes und das Aufräumen abgelaufener Flags. Die wichtigsten verborgenen Kosten sind Flag-Schulden, die die Anzahl veralteter Flags sichtbar hält.

Der Ertrag folgt einem Muster, das die meisten Teams in ihren eigenen Daten beobachten können. Kürzere Release-Durchlaufzeit bedeutet eine schnellere Rückkopplung, ob ein Change Nutzern hilft. Kleinere Pakete bedeuten leichtere Diagnose und leichteres Zurücksetzen. Eine kürzere Lücke zwischen Deployment und Release bedeutet weniger Zeit, in der fertige Arbeit unverwirklicht liegt. Erfinden Sie keine Zahl für den Wert. Nutzen Sie die eigenen Beispiele des Teams für Changes, die wochenlang dunkel lagen, und den Trend der eigenen Kennzahlen.

## Anti-Muster und Fallstricke

- **Ein Ziel für die Deployment-Häufigkeit für jedes Team setzen.** Es lädt zu Zerlegen und Umetikettieren ein. Setzen Sie Ergebnisziele, etwa eine engere Verteilung der Durchlaufzeit, und lassen Sie die Häufigkeit folgen.
- **Einen Release-Zug als Beweis für Fähigkeit behandeln.** Ein fester Kalender gibt eine stetige Zählung und verbirgt das Alter wartender Arbeit. Verfolgen Sie das Alter des ältesten gemergten Changes, den Nutzer nicht erreichen können.
- **Konfigurationsänderungen in der Hauptreihe als Deployments zählen.** Es bläht die Zahl auf. Führen Sie eine gesonderte Reihe und zeigen Sie sie neben der Hauptreihe.
- **Flags nie entfernen.** Der Code sammelt tote Zweige und ungetestete Kombinationen. Geben Sie jedem Release-Flag einen Eigner und ein Entfernungsdatum und behandeln Sie das Entfernen als Teil von „fertig“.
- **Flags in der Produktion ohne Aufzeichnung ändern.** Eine Flag-Änderung ist eine Änderung des Produktionsverhaltens. Senden Sie sie ins Audit-Protokoll und machen Sie sie für die Change-Befähigung sichtbar.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definitionen und Uhren | „Deployment“ und „Release“ werden austauschbar gebraucht; jeder zählt anders | Einige Teams schreiben eigene Definitionen auf | Eine schriftliche Definition von Deployment und Release, mit Uhren und Ausschlüssen, im Kennzahlenregister | Definitionsänderungen protokolliert und in Diagrammen markiert; Stichproben jedes Quartal geprüft | Definitionen gemeinsam mit Lieferanten und Governance überarbeitet, wenn sie Entscheidungen nicht mehr informieren |
| Trennung von Deployment und Release | Jedes Deployment ist ein Release | Einige Teams nutzen Flags oder gestufte Rollouts für riskante Changes | Flags und gestufte Rollouts sind eine Standardoption, Release-Ereignisse werden erfasst | Lücke, Paketgröße und Rollout-Stufen im Trend und überprüft | Release-Zeitpunkt über Teams und Lieferanten für verwandte Services koordiniert |
| Datenerfassung | Zählungen von Hand aus Tickets und Chat zusammengestellt | Pipeline-Daten für einige Services; Releases von Hand erfasst | Deployments, Releases und Flag-Änderungen für die meisten Services automatisch erfasst | Datenqualität (Verknüpfungsrate, Prüfung von Stichproben) gemessen und im Trend | Ereignisse über Teams und Lieferanten durch vereinbarte Schnittstellen geteilt |
| Flag-Hygiene | Kein Inventar | Informelle Liste in einigen Teams | Register mit Eigner, Typ und Ablaufdatum für jedes Release-Flag | Anzahl veralteter Flags im Trend; Entfernen ist Teil von „fertig“ und geprüft | Flag-Plattform als gemeinsamer Service verwaltet, mit automatisierten Ablauferinnerungen |
| Nutzung der Zahlen | Als einzelne Zählung nach oben berichtet | Teams schauen gelegentlich auf ihre eigenen Diagramme | Monatlich vom zuständigen Team neben den Zahlen zu Fehlschlag und Nacharbeit überprüft | Trends speisen finanzierte Verbesserung mit einer Leitplanke | Streuung und Trends informieren Plattforminvestitionen und Change-Richtlinie in der ganzen Organisation |

## Checkliste

- [ ] „Deployment“ und „Release“ sind schriftlich definiert, mit den Uhrereignissen und Ausschlüssen für jedes.
- [ ] Deployments in die Produktion werden automatisch aus der Pipeline erfasst, Testumgebungen sind ausgeschlossen.
- [ ] Release-Ereignisse werden aus dem Flag-Audit-Protokoll, Rollout-Stufen oder Release-Datensätzen erfasst.
- [ ] Die Release-Durchlaufzeit nutzt einen genannten Start der Uhr und berichtet Median und 85. Perzentil.
- [ ] Die Lücke zwischen Deployment und Release und die Release-Paketgröße werden neben der Häufigkeit berichtet.
- [ ] Rein konfigurative Deployments erscheinen in einer gesonderten Reihe.
- [ ] Jedes Release-Flag hat in einem Register einen Eigner, einen Typ und ein Ablaufdatum.
- [ ] Veraltete Flags werden monatlich überprüft, und ihr Entfernen ist Teil von „fertig“.
- [ ] Release-Kennungen erscheinen in Incident- und Change-Datensätzen.
- [ ] Eine Stichprobe von Deployments und Releases wird jedes Quartal gegen die Definitionen geprüft.
- [ ] Ein Verbesserungsexperiment, an das längste Warten geknüpft, läuft mit einem Review-Datum.

## KI-Prompts

**Definitionen von Deployment und Release für einen Service entwerfen.**

```text
I am defining release and deployment metrics for [service name]. Our tools are
[version control host, CI/CD system, flag service, issue tracker, ITSM tool].
Our release style is [continuous, weekly train, monthly, store-reviewed, or
other]. For deployment frequency, release frequency, release lead time,
deployment-to-release gap, release batch size, feature flag coverage, and stale
flag count, draft a definition that states where the clock starts and stops,
what is counted and excluded, the data source, and one ambiguity to resolve. Do
not invent benchmark values or claim our practice matches any published
performance band. List your assumptions and the questions I should answer to
finish the definitions.
```

**Einen Satz Release-Kennzahlen auf Manipulationsrisiken prüfen.**

```text
Here is how we compute and report our release and deployment metrics:
[description of each metric, its data source, and how it is reported]. The
audience is [team, leadership, or governance body] and the targets, if any,
are [targets or none]. For each metric, list plausible ways the number could
be inflated, hidden, or distorted without real improvement, and suggest a paired
guardrail metric or practice that would catch it. Do not invent statistics. List
your assumptions and any information you would need to be more precise.
```

**Einen Export von Deployments, Releases und Flags analysieren.**

```text
I will paste a small export with these fields: [list fields, for example
deployment id, deployment time, result, change ids, flag name, flag on time,
exposure share, release time]. It covers [number] deployments and [number]
flags for [service name] between [start date] and [end date]. Compute the
median and 85th percentile of release lead time and of the deployment-to-release
gap, the batch size distribution, and the list of flags past [age limit] days
since full rollout, showing the counts behind each. Flag records with missing
links or suspicious timestamps. Do not extrapolate beyond the data or compare
the result with outside benchmarks. List your assumptions and the data quality
issues that limit the conclusions.
```

**Ein Experiment zum Flag-Aufräumen und zum Release-Warten planen.**

```text
Our longest release wait is [description of the wait, with date range and
counts], and our flag register holds [number] release flags, of which [number]
are past their expiry date. Constraints are [constraints, for example regulated
releases, store review, shared test environment]. Propose three small
experiments of four to six weeks, each with a hypothesis, a way to observe the
effect, a guardrail metric, and a risk. Do not invent expected improvement
figures. List your assumptions and what we should check before starting.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die verwandten Change-, Release- und Incident-Themen und die Leitplanke zu finden, die neben jeder Release-Kennzahl stehen sollte.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine überarbeitete Fassung dieses Themas ihre Uhren, Manipulationsvektoren und Querverweise konsistent hält.

## Wichtigste Erkenntnisse

- Ein Deployment bringt eine Version in eine Umgebung, und ein Release macht einen Change für Nutzer erreichbar. Messen Sie die beiden getrennt, wo immer Sie können.
- Die Release-Durchlaufzeit sollte beim Release enden, mit genanntem Start, und als Median und 85. Perzentil berichtet werden.
- Die Lücke zwischen Deployment und Release und die Paketgröße zeigen, ob die Entkopplung echt ist, und sie schützen die Häufigkeit gegen Zerlegen und Umetikettieren.
- Feature-Flags machen die Trennung möglich und haben Kosten, verfolgen Sie also Abdeckung und veraltete Flags mit Eignern und Ablaufdaten.
- Zählen Sie nach schriftlichen Regeln, verknüpfen Sie Releases mit Incidents und Changes und vergleichen Sie einen Service mit seiner eigenen Historie statt mit anderen Teams.

## Quellen und weiterführende Literatur

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
3. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
4. Hodgson, P., "Feature Toggles (aka Feature Flags)," martinfowler.com, 2017, https://martinfowler.com/articles/feature-toggles.html
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
7. Wikipedia, [Release management](https://en.wikipedia.org/wiki/Release_management).
8. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
9. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
10. Wikipedia, [Blue-green deployment](https://en.wikipedia.org/wiki/Blue-green_deployment).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
