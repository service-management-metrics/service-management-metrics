# DORA-Kennzahlen

**Die DORA-Kennzahlen beschreiben, wie schnell und wie sicher die Softwareänderungen eines Teams die Produktion erreichen. Lesen Sie also die Geschwindigkeits- und die Stabilitätsmessgrößen zusammen, berechnen Sie sie aus Pipeline- und Incident-Ereignissen und nutzen Sie sie, um Gespräche über ein Liefersystem anzustoßen, nie um Teams oder Menschen zu ordnen.**

## Überblick und Motivation

Die DORA-Kennzahlen stammen aus dem Forschungsprogramm von [DevOps Research and Assessment (DORA)](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment), einer langjährigen Studie dazu, wie Praktiken der Softwarelieferung mit Ergebnissen für Teams und Organisationen zusammenhängen. Nicole Forsgren, Jez Humble und Gene Kim stellten die frühen Befunde 2018 im Buch [Accelerate](https://en.wikipedia.org/wiki/Accelerate_(book)) vor, und das Programm setzt sich unter Google Cloud mit einem jährlichen Bericht fort. Die Forschung fragte, welche messbaren Aspekte der Lieferung gute Ergebnisse vorhersagen, und einigte sich auf eine kleine Menge von Messgrößen der Softwarelieferleistung, die sich aus der Lieferpipeline und der Incident-Aufzeichnung berechnen lassen.

Stand Oktober 2026 beschreibt die DORA-Website fünf Kennzahlen der Softwarelieferleistung in zwei Gruppen. Drei beschreiben den **Durchsatz**, also wie schnell Änderungen sich bewegen: Change-Durchlaufzeit, Deployment-Häufigkeit und Wiederherstellungszeit nach fehlgeschlagenem Deployment. Zwei beschreiben die **Instabilität**, also wie oft ein Release Ärger verursacht: Change-Fehlerrate und Deployment-Nacharbeitsrate. Frühere Veröffentlichungen beschrieben vier Kennzahlen, mit „Zeit bis zur Wiederherstellung des Services“ anstelle der Wiederherstellungszeit nach fehlgeschlagenem Deployment und ohne die Nacharbeitsrate. Die Definitionen wurden über die Jahre verfeinert, nennen Sie also immer, welcher Ausgabe der Leitlinien Sie folgen und wann Sie zuletzt geprüft haben.

Der Forschungsbefund, der die Kennzahlen berühmt machte, lautet, dass sich Geschwindigkeit und Stabilität über Teams hinweg tendenziell gemeinsam bewegen. Teams, die oft ausliefern und kurze Durchlaufzeiten hatten, bezahlten dafür im Schnitt nicht mit mehr Fehlern. Das stellt die alte Annahme auf den Kopf, schneller zu werden heiße mehr kaputt zu machen. Es ist ein Muster in Umfrage- und Pipeline-Daten, kein Gesetz, und es gilt für Teams, die in Praktiken wie [kontinuierliche Auslieferung](https://en.wikipedia.org/wiki/Continuous_delivery), kleine Lose, automatisiertes Testen und schnelles Feedback investiert haben. Die Kennzahlen sind Signale dieser zugrunde liegenden Fähigkeiten. Sie sind nicht die Fähigkeiten selbst.

Die folgenden Begriffe kehren in diesem Thema wieder.

- Ein **Deployment** ist der Akt, eine Version der Software in eine bestimmte Umgebung zu bringen. Dieses Thema meint Produktion, sofern nichts anderes gesagt ist.
- Ein **Change** ist eine Menge von Änderungen an der Software, üblicherweise ein oder mehrere gemeinsam ausgelieferte Commits. In ITIL 4 hat das Wort eine weitere Bedeutung und umfasst jede Hinzufügung, Änderung oder Entfernung, die Services beeinflussen könnte, und die [ITIL](https://en.wikipedia.org/wiki/ITIL)-Praktik, die ihn steuert, ist die Change-Befähigung.
- Ein **fehlgeschlagenes Deployment** ist ein Deployment, das in der Produktion einen verschlechterten Service oder einen Ausfall verursacht und eine Behebung braucht, etwa einen Hotfix, einen Rollback oder einen Patch. Ihr Team schreibt die genaue Regel auf, denn die Forschung überlässt sie der lokalen Definition.
- Ein **Rollback** ist der Akt, die Produktion auf die vorige bekannt gute Version zurückzuführen.
- Ein **Perzentil** ist ein Wert, unterhalb dessen ein genannter Anteil der Beobachtungen liegt. Das 85. Perzentil der Durchlaufzeit ist die Zahl, die 85 Prozent der Changes unterbieten.

Agile und ITIL-Sichtweisen treffen sich auf diesem Boden. Ein agiles Team sieht diese Zahlen als Feedback zu seiner Engineering-Praxis und seinen Arbeitsvereinbarungen. Ein ITIL-Praktiker sieht sie als Ergebnisbeleg für Change-Befähigung, Release-Management, Deployment-Management und Incident-Management. Die Spannung betrifft meist die Kontrolle. Ein traditionelles Change Advisory Board versucht, Fehler zu verringern, indem es jeden Change vor der Auslieferung prüft. Die DORA-Forschung fand, dass schwere externe Genehmigung nicht mit besserer Stabilität verbunden war, Review durch Kollegen, automatisiertes Testen und kleine Changes dagegen schon. In ITIL 4 trägt die Change-Befähigung dem Rechnung, indem sie Standard-, normale und Notfall-Changes trennt und Changes mit geringem Risiko vorab genehmigen lässt (siehe Thema 4.3, Kennzahlen für die Change-Befähigung).

Die Kennzahlen haben auch Grenzen, die die Forschung selbst nennt, und die praktischen Ratschläge in diesem Thema bauen darauf auf. Sie beschreiben ein Liefersystem für eine Anwendung oder einen Service, sie sind für Verbesserungsgespräche gedacht, und sie sagen nichts darüber, ob die ausgelieferte Arbeit wertvoll ist. Ein Team kann hervorragende Zahlen zeigen und dabei das Falsche ausliefern. Deshalb steht dieses Thema neben, nicht über den Flussmaßen (siehe Thema 2.1, Flussmaße), den Zuverlässigkeitsmessgrößen für Services (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets) und den Ergebnismessgrößen (siehe Thema 1.3, Ergebnisse vor Output: Auswählen, was gemessen wird).

Schließlich laden die Kennzahlen [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) ein, sobald sie auf einem Führungs-Dashboard erscheinen. Die Deployment-Häufigkeit ist am leichtesten aufzublähen, und die Zahl fehlgeschlagener Deployments ist am leichtesten zu verbergen. Jede Empfehlung unten koppelt deshalb eine Messgröße mit einer Prüfung, wie sie verbogen werden könnte (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Leitprinzipien

- **Aus Ereignissen berechnen, nicht aus dem Gedächtnis.** Deployments kommen aus der Pipeline, Fehler und Wiederherstellungen aus der Incident-Aufzeichnung und die Durchlaufzeit aus der Versionsverwaltung, verbunden mit der Pipeline (siehe Thema 1.5, Datenquellen und Instrumentierung).
- **Geschwindigkeit und Stabilität als ein Bild lesen.** Ein schnelles Team mit steigenden Fehlern oder ein stabiles Team, das vierteljährlich ausliefert, sagt etwas, das keine Hälfte allein zeigt.
- **Einen Service oder eine Anwendung messen, keine Person.** Die Analyseeinheit ist ein Liefersystem. Einzelne deployen nicht allein, und sie zu ordnen zerstört die Daten.
- **Ein Team mit seiner eigenen Vergangenheit vergleichen, nicht mit einem anderen Team.** Der Kontext unterscheidet sich stark zwischen einem Zahlungsservice, einer Datenplattform und einer mobilen App, und die Forschung selbst warnt davor, die Kennzahlen als Rangliste zu nutzen.
- **Verteilungen für Zeiten nutzen.** Durchlaufzeit und Wiederherstellungszeit haben lange Ausläufer, berichten Sie also den Median und ein hohes Perzentil (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).
- **Die Kennzahlen als Symptome behandeln.** Bewegt sich eine Zahl, suchen Sie die Ursache in den darunterliegenden Fähigkeiten wie Losgröße, Testautomatisierung, Review-Praxis und Architektur und führen Sie dann ein Experiment durch.
- **Die Definitionen aufschreiben.** Fehler, Deployment und „Beginn der Arbeit“ sind Ermessensfragen. Halten Sie die Wahl fest und lassen Sie sie stabil, damit der Trend etwas bedeutet.

## Kennzahlendefinitionen

Die fünf Kennzahlen unten folgen den DORA-Leitlinien Stand Oktober 2026. Die Formeln nennen die Uhren und Ausschlüsse, die Ihr Team aufschreiben sollte. Wo die Forschung eine Grenze offen lässt, zeigt die Tabelle einen vernünftigen Standard, und die Empfehlungen erklären die Wahl.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change-Durchlaufzeit | Zeit, bis ein festgeschriebener Change die Produktion erreicht | Die Uhr startet beim ersten Commit des Changes (oder bei seinem Merge in den Hauptbranch, falls in der Definition so festgelegt) und stoppt, wenn das Deployment in die Produktion erfolgreich abgeschlossen ist; Median und 85. Perzentil der im Zeitraum ausgelieferten Changes berichten; nie ausgelieferte Changes sind ausgeschlossen und gesondert als Arbeit in Bearbeitung berichtet | Stunden oder Tage | Versionsverwaltung, verbunden mit der Deployment-Pipeline | Deployment-Management; Release-Management; Change-Befähigung | Zykluszeit; Durchlaufzeit bis zur Produktion | Wöchentlich oder je Release, monatlich überprüft |
| Deployment-Häufigkeit | Wie oft ein Team in die Produktion ausliefert | Anzahl erfolgreicher Produktions-Deployments der Anwendung im Zeitraum / Tage im Zeitraum; fehlgeschlagene oder zurückgerollte Deployments sind aus der Erfolgszählung ausgeschlossen; Deployments in Testumgebungen sind ausgeschlossen | Deployments pro Tag oder pro Woche | Ereignisprotokoll der Deployment-Pipeline | Deployment-Management; Release-Management | Kontinuierliche Auslieferung; Release am Ende jedes Inkrements | Wöchentlich |
| Wiederherstellungszeit nach fehlgeschlagenem Deployment | Wie lange die Wiederherstellung dauert, wenn ein Deployment einen Produktionsfehler verursacht | Die Uhr startet, wenn der Fehler erkannt oder gemeldet wird (jedes Mal dieselbe Regel), und stoppt, wenn der Service für Nutzer wiederhergestellt ist; Median und 85. Perzentil für im Zeitraum fehlgeschlagene Deployments berichten; nicht durch ein Deployment verursachte Incidents sind ausgeschlossen | Minuten oder Stunden | Incident-Datensatz, verbunden mit Deployment-Ereignissen und Monitoring-Alarmen | Incident-Management; Service-Kontinuitätsmanagement | Zeit bis zur Wiederherstellung; Wiederherstellungsarbeit | Je Fehler, monatlich überprüft |
| Change-Fehlerrate | Anteil der Produktions-Deployments, die einen Fehler verursachen, der Behebung braucht | Deployments, die einen Hotfix, Rollback, Patch oder eine Incident-Reaktion erforderten / alle Produktions-Deployments im Zeitraum; die Regel, die einen Fehler mit seinem Deployment verbindet, ist aufgeschrieben und wird jedes Mal gleich angewandt | Prozent | Deployment-Ereignisse, verbunden mit Incidents, Rollbacks und Hotfix-Deployments | Change-Befähigung; Incident-Management | Definition of Done; entwichene Fehler | Monatlich |
| Deployment-Nacharbeitsrate | Anteil der Produktions-Deployments, die ungeplant waren und ein nutzersichtbares Problem beheben | Ungeplante Deployments als Reaktion auf ein Produktionsproblem / alle Produktions-Deployments im Zeitraum; geplante Deployments, die zufällig eine Korrektur enthalten, sind ausgeschlossen; die Regel für „ungeplant“ ist aufgeschrieben | Prozent | Pipeline-Protokoll mit Deployment-Grund gekennzeichnet, verknüpft mit Incident- oder Fehlerdatensätzen | Change-Befähigung; Problemmanagement | Ungeplante Arbeit; außerhalb des Plans freigegebene Fehlerkorrektur | Monatlich |

Zwei Anmerkungen zur Tabelle. Erstens überlappen Change-Fehlerrate und Deployment-Nacharbeitsrate und sind nicht dasselbe: Ein Fehler, den das Team bemerkt und ohne neues Deployment zurückrollt, zählt in der Change-Fehlerrate, aber nicht in der Nacharbeitsrate, während eine vom Team eingeplante geplante Korrektur in keiner zählt. Zweitens behandelt die Forschung das **Deployment** als Einheit und zählt je Anwendung, sodass eine Plattform mit fünfzig Services fünfzig Zahlensätze hat und nicht einen.

## Empfehlungen

### Mit Definitionen und Uhren beginnen

**1. Schreiben Sie für jede Kennzahl eine einseitige Definition, bevor Sie sie darstellen.** Legen Sie fest, was als Deployment zählt, welche Umgebung Produktion ist, wo die Uhr für die Durchlaufzeit startet und wie ein Fehler mit einem Deployment verbunden wird. Legen Sie die Seite im Kennzahlenregister ab (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen). Eine Definition, die nur in einem Kopf lebt, driftet beim ersten Wechsel von Werkzeug oder Team.

**2. Wählen Sie einen Start der Durchlaufzeit und bleiben Sie dabei.** Die häufigsten Wahlen sind der erste Commit des Changes, der Merge in den Hauptbranch und die Anlage eines Tickets. Der erste Commit misst das Liefersystem und ignoriert Zeit, die die Arbeit in einem Backlog lag. Der Ticketstart misst mehr vom Warten des Kunden, vermischt es aber mit Priorisierung (siehe Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz). Verwenden Sie einen durchgängig und nennen Sie in jedem Diagramm, welchen.

**3. Ordnen Sie Fehler mit einer festgelegten Regel zu.** Ein Fehler gehört zu einem Deployment, wenn zum Beispiel binnen eines festgelegten Fensters nach dem Deployment ein Incident eröffnet wird und seine Ursachenanalyse auf diesen Change zeigt oder wenn ein Rollback oder Hotfix ihm zugeordnet ist. Wählen Sie eine Regel, die Menschen ohne Streit anwenden können, überprüfen Sie jedes Quartal eine Stichprobe von Fällen und halten Sie die Regel lange genug gleich, um einen Trend zu sehen.

### Aus der Pipeline instrumentieren

**4. Nehmen Sie Deployment-Ereignisse aus der Pipeline, nicht aus einer Tabelle.** Ein [CI/CD](https://en.wikipedia.org/wiki/CI/CD)-System, das jedes Produktions-Deployment mit Zeitstempel, Version und Ergebnis erfasst, liefert Ihnen Deployment-Häufigkeit und den Stopp der Durchlaufzeit-Uhr ohne menschliche Eingabe. Handeingegebene Zählungen sind spät und uneinheitlich und laden zu den in Thema 1.5, Datenquellen und Instrumentierung, beschriebenen Rückdatierungsproblemen ein. Das Open-Source-Projekt Four Keys des DORA-Teams ist ein ausgearbeitetes Beispiel dafür, diese Ereignisse zu sammeln, doch jede gleichwertige eigene Pipeline genügt.

**5. Verbinden Sie die Incident-Aufzeichnung mit den Deployments.** Fehler- und Wiederherstellungsmessgrößen brauchen zwei Quellen: das Deployment-Protokoll und das Incident-Werkzeug. Fügen Sie dem Incident-Datensatz ein Feld „durch Deployment verursacht“ und die Deployment-Kennung hinzu, bei der Lösung ausgefüllt und im Post-Incident-Review geprüft (siehe Thema 4.2, Kennzahlen für Postmortems und Lernen). Ohne die Verbindung wird die Change-Fehlerrate zur Schätzung.

**6. Kennzeichnen Sie den Grund jedes Deployments.** Die Nacharbeitsrate muss geplante Deployments von ungeplanten Korrekturen trennen. Ein einfaches Etikett am Pipeline-Lauf, etwa „geplanter Change“ oder „Korrektur eines Produktionsproblems“, genügt. Halten Sie die Etikettenliste kurz, damit Menschen unter Druck nicht nachdenken müssen.

### Die Zahlen ehrlich berichten

**7. Berichten Sie Verteilungen und Anzahlen, nicht einen einzelnen Durchschnitt.** Zeigen Sie Median und 85. Perzentil für Durchlaufzeit und Wiederherstellungszeit, mit der Zahl der Beobachtungen dahinter. Eine Woche mit zwei Deployments und einem Fehler hat eine Change-Fehlerrate von 50 Prozent, die sehr wenig bedeutet; zeigen Sie also die Anzahlen neben dem Prozentsatz und bevorzugen Sie für Raten ein längeres Fenster (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

**8. Zeigen Sie die Gruppen Durchsatz und Instabilität nebeneinander.** Legen Sie die drei Durchsatzmessgrößen und die zwei Instabilitätsmessgrößen in eine Sicht, je Service, mit dem Trend über mindestens ein Quartal. Veröffentlichen Sie nie die Deployment-Häufigkeit ohne die Fehlermessgrößen daneben. Fragt eine Führungskraft nach einer Zahl, erklären Sie, dass es keinen einzelnen DORA-Wert gibt, und bieten Sie die Zwei-Gruppen-Sicht an.

**9. Halten Sie Vergleiche innerhalb der eigenen Historie des Teams.** Ein Team, das seine mediane Durchlaufzeit von neun auf fünf Tage senkt, hat etwas gelernt. Es gegen ein anderes Team mit anderer Architektur, regulatorischer Last oder anderem Release-Zug zu ordnen, beweist wenig und bringt beiden Teams bei, ihre Zahlen zu schützen. Müssen Sie für die Governance verdichten, zeigen Sie die Streuung über Services und den Verbesserungstrend, nicht eine Rangliste (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

### Das System verbessern, das die Zahlen beschreiben

**10. Verringern Sie zuerst die Losgröße.** Kleine Changes verkürzen die Durchlaufzeit, machen Fehler leichter zu diagnostizieren und senken die Kosten eines Rollbacks. Techniken sind [Feature-Toggles](https://en.wikipedia.org/wiki/Feature_toggle), Trunk-basiertes Arbeiten und das Zerlegen von Arbeit, sodass jedes Inkrement allein ausgeliefert werden kann (siehe Thema 2.7, Kennzahlen für Pull Requests und Code-Reviews). Verfolgen Sie den Median der Change-Größe neben der Durchlaufzeit, damit Sie sehen, ob das Los tatsächlich schrumpft.

**11. Investieren Sie in schnelle Erkennung und schnelle Umkehr.** Die Wiederherstellungszeit sinkt, wenn das Team einen Fehler binnen Minuten sieht und wenn es einen Change ohne neuen Build [zurückrollen](https://en.wikipedia.org/wiki/Rollback_(data_management)) oder abschalten kann. Ein [Canary-Release](https://en.wikipedia.org/wiki/Canary_release), ein Feature-Toggle und ein automatischer Rollback verkürzen jeweils das Intervall zwischen Fehler und Wiederherstellung. Messen Sie die Zeit vom Deployment bis zur Erkennung gesondert, denn langsame Erkennung versteckt sich in einer Wiederherstellungszeit-Zahl (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents).

**12. Nutzen Sie die Zahlen, um eine zu verbessernde Fähigkeit zu wählen.** Wählen Sie eine schwache Kennzahl, fragen Sie, warum sie schwach ist, und wählen Sie aus der Fähigkeitenliste der Forschung eine Praktik, die die Ursache angeht, etwa Testautomatisierung, lose gekoppelte Architektur oder leichtgewichtige Change-Genehmigung. Führen Sie die Änderung ein Quartal lang durch und sehen Sie sich den Trend an. Koppeln Sie das Experiment mit einem Retrospektiv-Thema, damit das Team die Verbesserung besitzt (siehe Thema 9.5, Kennzahlen für kontinuierliche Verbesserung).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Change-Durchlaufzeit | Den Start der Uhr nach hinten verschieben, etwa beim Merge statt beim ersten Commit; früh in einen langlebigen Branch mergen; schwere Changes als „kein Code“ ausschließen; triviale Changes durch die Pipeline schicken, um den Median zu drücken | Perzentil und Alter der Arbeit in Bearbeitung; ein fester schriftlicher Start der Uhr; jedes Quartal Stichprobe der langsamsten 10 Prozent der Changes; Verteilung der Change-Größe |
| Deployment-Häufigkeit | Einen Change in viele triviale Deployments zerlegen; unveränderte Builds neu deployen; Deployments auf Staging oder leere Konfigurationsänderungen zählen | Change-Größe je Deployment; Anteil der Deployments mit nutzersichtbarer Änderung; Change-Fehlerrate und Nacharbeitsrate daneben |
| Wiederherstellungszeit nach fehlgeschlagenem Deployment | Die Uhr spät starten oder Incidents früh schließen; einen Fehler nach teilweiser Korrektur als neuen Incident umklassifizieren; die Schwelle für „Fehler“ anheben | Wiederkehr desselben Incidents innerhalb eines festgelegten Fensters; Start der Uhr aus Monitoring-Alarmen; vom Kunden berichtete Dauer der Beeinträchtigung |
| Change-Fehlerrate | Incidents nicht mit Deployments verknüpfen; nur Fehler zählen, die einen vollständigen Ausfall verursachen; das Fenster erweitern, sodass Fehler außerhalb fallen; vorwärts korrigieren und es einen neuen Change nennen | Jedes Quartal eine Stichprobe von Incidents gegen das Deployment-Protokoll prüfen; den Anteil der Incidents mit erfasster Deployment-Verknüpfung verfolgen; Deployment-Nacharbeitsrate |
| Deployment-Nacharbeitsrate | Korrekturen als geplante Arbeit etikettieren; eine Korrektur in ein geplantes Release bündeln; Korrektur-Deployments vermeiden, indem die Korrektur verzögert wird | Fehler- und entwichene Fehlerzählungen aus dem Tracker; Alter offener Produktionsfehler; Etikettenprüfung an einer Stichprobe von Deployments |

Ein gesunder Befund zeigt Durchlaufzeit und Wiederherstellungszeit, die schrumpfen oder auf niedrigem Niveau stabil sind, eine Deployment-Häufigkeit, die bei kleinen Changes stabil ist oder steigt, und Fehler- und Nacharbeitsraten, die flach sind oder fallen, mit Anzahlen, die groß genug sind, um ihnen zu trauen. Verdächtige Befunde sind ein plötzlicher Sprung der Deployment-Häufigkeit ohne Änderung der Arbeit, eine Fehlerrate, die binnen eines Monats auf null fällt, und eine Wiederherstellungszeit, die sinkt, während die Kundenbeschwerden gleich bleiben. Jede verlangt einen Blick auf das Instrument vor dem Feiern.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Alle fünf DORA-Kennzahlen je Service nutzen | Forschungsbasiert, balanciert Geschwindigkeit gegen Stabilität, aus objektiven Ereignissen berechnet | Braucht eine Pipeline und eine Incident-Aufzeichnung, die sich sauber verbinden lassen; schweigt dazu, ob die Arbeit wertvoll war |
| Nur Deployment-Häufigkeit und Durchlaufzeit berichten | Leicht aus der Pipeline zu erheben | Belohnt allein Geschwindigkeit und lädt genau zu der Manipulation ein, die Stabilitätsmessgrößen auffangen |
| Lokale Definitionen je Team | Passt zur Architektur und zum Release-Stil des Teams | Teams lassen sich nicht vergleichen, und Verdichtungen sind unzuverlässig |
| Eine organisationsweite Definition | Einheitliche Berichterstattung; einfache Governance | Passt auf manche Systeme schlecht, etwa Großrechner mit Batch-Fenstern oder regulierte Releases |
| Teams gegen veröffentlichte Leistungsbänder vergleichen | Gibt Führungskräften schnell ein Gefühl der Position | Ignoriert den Kontext, und die Forschung warnt, dass die Bänder keine Ziele für jedes Team sind |
| Die Kennzahlen zur Selbstverbesserung des Teams nutzen | Schafft Verantwortung; stützt ehrliche Daten | Bietet weniger Trost für Führungskräfte, die einen einzelnen Wert wollen |

Die zentrale Spannung liegt zwischen Vergleichbarkeit und Ehrlichkeit. Je mehr eine Zahl genutzt wird, um Teams zu beurteilen, desto mehr verbiegen sich die Daten und desto weniger hilft sie dem Team, dem sie gehört. Nutzen Sie die Kennzahlen zuerst, um Verbesserung zu stützen, akzeptieren Sie unvollkommene Vergleichbarkeit und halten Sie Sichten auf Führungsebene bei Trends und Streuung. Wo regulierte Berichterstattung eine Standarddefinition braucht, dokumentieren Sie sie und halten Sie die Verbesserungssicht des Teams getrennt.

## Fragen für die Diskussion im Team

**1. Welche unserer fünf DORA-Zahlen kommen aus Ereignissen, und welche aus der Erinnerung von jemandem?**
Verfolgen Sie jede Kennzahl bis zu ihrer Quelle zurück. Notieren Sie, wo ein Mensch ein Datum tippt oder entscheidet, ob etwas als Fehler zählt. Die Moderation sollte der Gruppe helfen, die manuellen Schritte danach zu ordnen, wie stark sie die Zahl verzerren könnten, und sich zu einigen, welcher zuerst automatisiert wird.

**2. Wo genau startet und stoppt unsere Durchlaufzeit-Uhr, und sind sich alle einig?**
Bitten Sie drei Personen, Start und Stopp der Uhr für den letzten ausgelieferten Change zu beschreiben. Vergleichen Sie die Antworten. Unterschiede zeigen sich meist rund um den ersten Commit, den Merge, ein Ticket und den Genehmigungsschritt. Einigen Sie sich auf eine Definition, schreiben Sie sie auf und besprechen Sie, welche Wartezeit die gewählte Definition verbirgt.

**3. Was zählt für uns als fehlgeschlagenes Deployment, und wer entscheidet das?**
Gehen Sie die letzten fünf Produktions-Incidents durch und fragen Sie, ob jeder zu einem Deployment gehört. Uneinigkeiten zeigen, wo die Regel unklar ist. Besprechen Sie, was mit einem Fehler geschieht, der durch eine Konfigurationsänderung, einen Rollback oder einen schnellen Patch behoben wird, und entscheiden Sie, wie jeder erfasst wird.

**4. Wenn sich die Deployment-Häufigkeit nächstes Quartal verdoppelte, was würden wir prüfen, bevor wir es gute Nachricht nennen?**
Laden Sie die Gruppe ein, die Wege zu nennen, auf denen die Zahl steigen könnte, ohne mehr Wert zu liefern. Sehen Sie sich Change-Größe, den Anteil der Deployments mit nutzersichtbarer Änderung und die Fehler- und Nacharbeitsraten an. Die Moderation sollte festhalten, welche Prüfungen bereits im Dashboard stehen und welche hinzugefügt werden müssen.

**5. Wie werden diese Zahlen von Menschen außerhalb des Teams genutzt?**
Fragen Sie, wer sie in welcher Form sieht und was er damit tut. Achten Sie auf Vergleiche mit anderen Teams, von außen gesetzte Ziele und Nutzung in individuellen Beurteilungen. Besprechen Sie, was sich an dieser Nutzung ändern müsste, bevor das Team seinen eigenen Daten trauen könnte, und wer die Autorität hat, die Änderung herbeizuführen.

**6. Welche eine Fähigkeit würde unsere schwächste Zahl am meisten verbessern, und was ist ein kleines Experiment dazu?**
Wählen Sie die schwächste Kennzahl und sprechen Sie über ihre wahrscheinlichen Ursachen, etwa große Lose, langsames Review, instabile Tests oder einen manuellen Release-Schritt. Wählen Sie eine Ursache und entwerfen Sie ein vier- bis sechswöchiges Experiment mit einer Möglichkeit, die Wirkung zu sehen. Vereinbaren Sie ein Datum zur Überprüfung des Ergebnisses und wer die Daten mitbringt.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams besitzen die Fähigkeiten, die diese Zahlen treiben: kleine Changes, automatisierte Tests, eine schnelle Pipeline und die Gewohnheit, die Arbeit der anderen zu prüfen. Sie sollten die Kennzahlen als Spiegel für ihre eigene Engineering-Praxis nutzen, eigene Verbesserungsziele setzen und dem Druck widerstehen, eine einzelne Zahl nach oben zu melden. Sie entscheiden auch die Definitionen, tragen also die Pflicht, sie ehrlich zu halten (siehe Thema 2.7, Kennzahlen für Pull Requests und Code-Reviews).

### Service- und Betriebsteams

Betriebsteams halten die Incident-Aufzeichnung, von der Fehler- und Wiederherstellungsmessgrößen abhängen. Sie helfen dem Lieferteam, indem sie Incidents mit dem verursachenden Deployment kennzeichnen, Monitoring liefern, das Fehler schnell erkennt, und am Review jedes fehlgeschlagenen Deployments teilnehmen. Sie sollten darauf achten, dass die Liefergeschwindigkeit nicht mit Instabilität erkauft wird, die sie als Bereitschaftslast absorbieren (siehe Thema 5.7, Kennzahlen für Toil und Bereitschaftsdienst), und die Investitionen in Rollback und Erkennung einfordern, die die Wiederherstellungszeit verringern.

### Führung und Governance

Führungskräfte sollten Trends und Streuung über Services, die beiden Kennzahlengruppen zusammen und die dahinterstehenden Verbesserungsexperimente anfordern. Sie sollten Ziele vermeiden, die eine Zahl festschreiben, etwa „täglich deployen“, und die Kennzahlen nicht in individuellen Beurteilungen nutzen. Governance-Gremien können die Zahlen als Beleg nutzen, dass ein leichterer Change-Genehmigungsweg sicher ist, oder als Grund, ihn zu überdenken, indem sie zeigen, ob die Stabilität stabil blieb, als sich der Prozess änderte (siehe Thema 4.4, Change-Fehlschläge und Nacharbeit).

### Kunden und Nutzer

Kunden interessieren Deployment-Zahlen selten. Sie interessiert, wie schnell eine Korrektur oder Funktion sie erreicht, wie selten ein Release etwas kaputt macht, auf das sie sich verlassen, und wie schnell der Service zurückkehrt, wenn es doch geschieht. Nutzen Sie die DORA-Kennzahlen als internen Beleg, dass diese Ergebnisse wahrscheinlich sind, und ergänzen Sie sie mit kundenseitigen Messgrößen wie Verfügbarkeit und Zufriedenheit (siehe Thema 5.3, Verfügbarkeitskennzahlen, und Thema 6.1, Kennzahlen für Kundenzufriedenheit).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler betreibt einen Checkout-Service im Besitz eines Produktteams, unterstützt von einem Plattformteam und dem Service Desk. Alle Zahlen unten sind illustrativ.

Das Team hat etwa zweimal pro Woche in die Produktion deployt, mit einer Durchlaufzeit (erster Commit bis Produktion) von im Median 11 Tagen und einem 85. Perzentil von 26 Tagen. Im Vorquartal folgte auf 6 von 24 Deployments (25 Prozent, illustrativ) ein Rollback oder ein Incident. Die mediane Wiederherstellungszeit für diese Fehler betrug 3 Stunden. Das Change Advisory Board tagt wöchentlich und prüft jeden Change am Checkout-Service.

Das Team schlägt einen Plan vor. Es wird große Changes zerlegen, automatische Prüfungen in der Pipeline ergänzen, neues Verhalten hinter Feature-Toggles legen und das Gremium bitten, Changes mit geringem Risiko, die die Prüfungen bestehen, als Standard-Changes vorab zu genehmigen. Der Change-Manager ist skeptisch, also vereinbart das Team, monatlich alle fünf Kennzahlen zu berichten und das Experiment zu stoppen, wenn die Fehlerrate zwei Monate in Folge steigt.

Nach einem Quartal lauten die Zahlen (illustrativ) 19 Deployments pro Monat, eine mediane Durchlaufzeit von 3 Tagen mit einem 85. Perzentil von 8 Tagen, eine Change-Fehlerrate von 8 Prozent, eine mediane Wiederherstellungszeit von 40 Minuten und eine Nacharbeitsrate von 5 Prozent. Das Team ist zufrieden, und ein Regionalleiter bittet darum, die Deployment-Häufigkeit des Checkout-Teams mit den anderen Produktteams zu vergleichen und ein gemeinsames Ziel zu setzen.

Der Teamleiter bringt die Aufschlüsselung von Nacharbeit und Fehlern in das Review und bemerkt ein Manipulationsrisiko. Die Deployment-Häufigkeit wurde durch eine Reihe winziger Konfigurations-Deployments begünstigt, die die Pipeline zählt, und der Median der Change-Größe schrumpft schneller als die tatsächliche Arbeit. Schlimmer noch: Zwei Incidents im letzten Monat wurden durch eine Konfigurationsänderung behoben, die die Pipeline als normales, mit „geplant“ gekennzeichnetes Deployment protokollierte, sodass die Nacharbeitsrate zu niedrig ausfiel. Die Change-Fehlerrate sah teils deshalb gut aus, weil diese zwei Incidents nicht mit ihren ursprünglichen Deployments verknüpft worden waren.

Die im Entscheidungsprotokoll festgehaltene Entscheidung hat vier Teile. Reine Konfigurations-Deployments werden gesondert gezählt und neben der Hauptzahl gezeigt. Das Etikett für den Deployment-Grund wird monatlich an einer Stichprobe von 10 Deployments geprüft. Das Incident-Werkzeug verlangt nun die Deployment-Kennung, wenn die Ursache ein Change ist. Und das Team lehnt das gemeinsame Ziel zur Deployment-Häufigkeit ab und bietet stattdessen eine gemeinsame Sicht an, die den Trend jedes Services und seine Fehlerrate zeigt. Der Change-Manager erklärt sich einverstanden, die Vorab-Genehmigung für Standard-Changes beizubehalten, mit einem Review am Ende des nächsten Quartals.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Die DORA-Kennzahlen beschreiben, wie schnell und sicher Changes die Produktion erreichen, den praktischen Kern kontinuierlicher Auslieferung. Eine gute Praktik ist, die Geschwindigkeits- und Stabilitätsmessgrößen in einem regelmäßigen Review mit Stakeholdern zusammen zu lesen und eine Verbesserung zu wählen. Zu beachten ist, dass das Team die Deployment-Häufigkeit durch Zerlegen von Changes aufblähen kann; beobachten Sie also Change-Größe und Nacharbeit.

### KI

KI-gestütztes Programmieren kann Change-Volumen steigern und die Durchlaufzeit beschleunigen, während Nacharbeit oder fehlgeschlagene Changes zunehmen. Berichten Sie KI-gestützte und andere Changes zusammen an denselben Stabilitätsmessgrößen und vergleichen Sie Wiederherstellungszeit nach fehlgeschlagenem Deployment und Deployment-Nacharbeitsrate vor und nach der Einführung. Zu beachten ist, dass sich die DORA-Forschung zu KI entwickelt; prüfen Sie also die aktuell veröffentlichten Berichte, bevor Sie einen Befund zitieren.

### Automatisierung

Berechnen Sie alle fünf Messgrößen automatisch aus Pipeline- und Incident-Ereignissen, mit einer klaren Regel, was als Deployment und als Fehler zählt. Messen Sie die Pipeline selbst an ihren eigenen Fehlern und Instabilitäten. Zu beachten ist, dass Automatisierung manuelle Schritte außerhalb der Pipeline verbergen kann, etwa eine Genehmigung per E-Mail; kartieren Sie den echten Weg also einmal.

### Analytik

Berichten Sie Verteilungen, nicht nur Durchschnitte, und vergleichen Sie ein Team mit seiner eigenen Vergangenheit, nicht mit anderen Teams. Die Entscheidung, die dies untermauert, ist, wo das Liefersystem langsam oder fragil ist. Zu beachten ist, dass teamübergreifende Ranglisten zur Manipulation ermuntern und die Zahlen von lokalen Definitionen eines Deployments und eines Fehlers abhängen.

## Branchenperspektive

**Startup.** Ein kleines Team deployt oft viele Male am Tag und hat dünne Incident-Aufzeichnungen, daher sind Deployment-Häufigkeit und Durchlaufzeit leicht, Fehlerdaten aber lückenhaft. Beginnen Sie damit, jeden Rollback und Hotfix in der Pipeline zu kennzeichnen und ein einfaches Incident-Protokoll mit der Deployment-Kennung zu führen. Lassen Sie sich von einer hohen Häufigkeit nicht überzeugen, dass die Stabilität in Ordnung ist, ohne die Fehlerrate zu prüfen.

**Kleinunternehmen.** Eine gehostete Plattform oder ein externer Entwickler deployt womöglich nur monatlich, mit wenig Werkzeugen. Zählen Sie einige Monate lang von Hand, was Sie können, lassen Sie sich Deployment- und Incident-Daten vom Dienstleister schriftlich geben und konzentrieren Sie sich auf Durchlaufzeit und Fehlerrate. Nutzen Sie die Zahlen, um zu entscheiden, ob kleinere, kontinuierlich gelieferte Changes das Risiko verringern würden, nicht um einem Band nachzujagen.

**Großunternehmen.** Viele Teams, mehrere Release-Stile und eine Mischung moderner und alter Systeme machen konsistente Definitionen schwer. Einigen Sie sich auf eine gemeinsame Mindestdefinition für jede Kennzahl, veröffentlichen Sie sie und erlauben Sie einem Team, strengere lokale mit angegebenem Grund hinzuzufügen. Verdichten Sie, indem Sie Streuung und Trend je Service zeigen statt eines Durchschnitts, und halten Sie Details auf Teamebene nur dem zuständigen Team und seinen unterstützenden Gruppen sichtbar.

**Behörden und öffentlicher Sektor.** Release-Fenster, Prüfregeln und Beschaffungsverträge prägen, was möglich ist, und manche Systeme werden von Lieferanten betrieben. Nehmen Sie Rechte an Liefer- und Incident-Daten in Verträge auf, damit sich die Kennzahlen berechnen lassen. Nutzen Sie die Zahlen als Beleg, dass ein Modernisierungsprogramm Durchlaufzeiten verkürzt, ohne die Fehlerraten zu erhöhen, und berichten Sie alle Kennzahlen zusammen, damit die Ergebnisse nicht ausgewählt sind (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Das Motiv ist, die Zeit zwischen einer Idee und ihrer Nutzung zu verkürzen und die Produktion stabil zu halten. Die Kosten des Programms haben drei Teile: Instrumentierung (Pipeline-Ereignisse, Deployment-Etiketten und die Incident-Verbindung), die Review-Routine (ein monatlicher Blick auf die Trends und eine vierteljährliche Stichprobe von Fehler- und Nacharbeitsfällen) und die Verbesserungsarbeit, auf die die Zahlen zeigen, etwa Testautomatisierung oder eine schnellere Pipeline. Die ersten beiden sind bescheiden. Der dritte ist der Ort der wirklichen Ausgabe, und sie fließt in Engineering-Fähigkeit, nicht in Messung.

Der Ertrag kommt aus Entscheidungen, die die Zahlen erleichtern. Ein Team kann einem Change-Gremium zeigen, dass kleine Changes sicher sind, und so einen Genehmigungsschritt aufgeben. Eine Plattformgruppe kann sehen, welche Services langsame Pipelines oder schlechten Rollback haben, und ihre Investitionen entsprechend setzen. Ein Betriebsteam kann mit Daten für ein besseres Erkennungswerkzeug argumentieren. Beschreiben Sie den Ertrag über Muster, die Sie selbst beobachten können, etwa die Zeit vom Commit bis zur Produktion, den Anteil der Releases, die eine Korrektur brauchen, und die Bereitschaftslast je Release, vor und nach einer Änderung. Vermeiden Sie es, Benchmarkzahlen anderer Organisationen als erwarteten Ertrag zu zitieren, denn Ihr Kontext unterscheidet sich. Die Gesamtbetriebskosten werden von der Zeit von Menschen dominiert, halten Sie die Kennzahlenmenge also klein und automatisieren Sie ihre Erhebung (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Die Kennzahlen als Leistungsscorecard für Einzelpersonen behandeln.** Es bricht die Forschungsgrundlage und verfälscht die Daten. Berichten Sie nur auf Service- und Teamebene.
- **Ziele wie „täglich deployen“ oder „Durchlaufzeit unter einem Tag“ setzen.** Das Ziel ersetzt das Ziel. Setzen Sie eine Richtung der Verbesserung und ein Experiment und behalten Sie die Zahl als Signal.
- **Teams gegeneinander oder gegen veröffentlichte Bänder ordnen.** Der Kontext unterscheidet sich, und Manipulation folgt. Vergleichen Sie ein Team mit seinem eigenen Trend und nutzen Sie Bänder nur als lose Orientierung.
- **Geschwindigkeit ohne Stabilität berichten.** Das Paar ist der Punkt. Zeigen Sie die Gruppen Durchsatz und Instabilität immer zusammen.
- **Definitionen driften lassen.** Fehler, Deployment und der Start der Durchlaufzeit ändern sich still mit dem Werkzeug. Protokollieren Sie jede Änderung einer Definition mit Begründung und markieren Sie sie im Diagramm.
- **Deployments von allem zählen.** Konfigurations-Pushes, Releases in Testumgebungen und Neu-Deployments desselben Builds blähen die Zählung auf. Definieren Sie ein Produktions-Deployment und zeigen Sie andere Arten gesondert.
- **Ignorieren, was ausgeliefert wird.** Starke Zahlen können Arbeit verbergen, die nicht zählt. Lesen Sie sie neben Fluss- und Ergebnismessgrößen (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit).
- **Der Kennzahl statt der Fähigkeit nachjagen.** Die Durchlaufzeit fällt am verlässlichsten, wenn Lose schrumpfen und Tests schneller werden. Verbessern Sie die Praxis und lassen Sie die Zahl folgen.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definitionen und Uhren | Jeder definiert Deployment und Fehler anders | Einige Teams dokumentieren ihre Definitionen | Eine schriftliche Definition je Kennzahl, mit Uhren und Ausschlüssen, im Kennzahlenregister | Definitionsänderungen protokolliert und in Diagrammen markiert; Stichproben jedes Quartal geprüft | Definitionen gemeinsam mit Lieferanten und Governance überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| Datenerfassung | Zählungen von Hand aus Tickets zusammengestellt | Pipeline-Daten für einige Services; Incidents von Hand verknüpft | Deployments, Gründe und Incident-Verknüpfungen für die meisten Services automatisch erfasst | Datenqualität (Verknüpfungsrate, Etikettenprüfung) gemessen und im Trend | Ereignisse über Teams und Lieferanten durch vereinbarte Schnittstellen geteilt |
| Nutzung der Zahlen | Als einzelner Wert nach oben berichtet | Teams sehen sich gelegentlich ihre eigenen Diagramme an | Die Gruppen Durchsatz und Instabilität werden vom zuständigen Team monatlich zusammen überprüft | Trends speisen finanzierte Verbesserungsexperimente mit Leitplanke | Streuung und Trends bestimmen Plattforminvestitionen und Change-Richtlinie in der Organisation |
| Leitplanken gegen Manipulation | Keine | Informelles Bewusstsein | Gekoppelte Leitplanken für jede Kennzahl aufgelistet | Leitplanken und Stichproben überprüft, Manipulationsfälle erfasst | Leitplanken laufend abgestimmt, wenn sich Teams und Werkzeuge ändern |

## Checkliste

- [ ] Die fünf Kennzahlen sind schriftlich definiert, mit Uhren, Ausschlüssen und Datum und Ausgabe der befolgten DORA-Leitlinien.
- [ ] Produktions-Deployments werden von der Pipeline mit Zeitstempel, Version und Ergebnis erfasst.
- [ ] Der Start der Durchlaufzeit (erster Commit, Merge oder anderes) ist benannt und wird konsistent angewandt.
- [ ] Incidents tragen ein Feld für das Deployment, das sie verursacht hat, bei der Lösung ausgefüllt.
- [ ] Jedes Deployment trägt ein Grundetikett, und eine Stichprobe wird monatlich geprüft.
- [ ] Zeiten werden als Median und hohes Perzentil mit Anzahlen berichtet.
- [ ] Durchsatz- und Instabilitätsmessgrößen werden für jeden Service zusammen gezeigt.
- [ ] Die Change-Größe wird neben Deployment-Häufigkeit und Durchlaufzeit verfolgt.
- [ ] Die Zahlen werden nicht in individuellen Beurteilungen oder zum Ordnen von Teams genutzt.
- [ ] Ein benannter Eigner überprüft die Kennzahlen monatlich und protokolliert jede Änderung einer Definition.
- [ ] Ein Verbesserungsexperiment, an die schwächste Kennzahl gebunden, läuft mit einem Überprüfungsdatum.

## KI-Prompts

**Eine einseitige Definitionsmenge für die fünf Kennzahlen schreiben.**

```text
I am defining the DORA software delivery metrics for [service or application
name]. Our tools are [version control host, CI/CD system, incident tool, ITSM
tool]. Our release style is [continuous, weekly, monthly, or other]. For change
lead time, deployment frequency, failed deployment recovery time, change fail
rate, and deployment rework rate, draft a definition with where the clock starts
and stops, what is counted and excluded, the data source, and one risk of
ambiguity. Do not invent benchmark values or claim our practice matches any
published performance band. List your assumptions and the questions I should
answer to finish the definitions.
```

**Eine Kennzahlenmenge auf Manipulationsrisiken prüfen.**

```text
Here is how we currently compute our delivery metrics: [description of each
metric, its data source, and how it is reported]. The audience is [team,
leadership, or governance body]. For each metric, list plausible ways the number
could be inflated, hidden, or distorted without real improvement, and suggest a
paired guardrail metric or practice that would catch it. Do not invent
statistics. List your assumptions and any information you would need to be more
precise.
```

**Einen Datenexport von Deployments und Incidents analysieren.**

```text
I will paste a small export of [number] production deployments and [number]
incidents with these fields: [list fields, for example deployment id, timestamp,
result, reason tag, incident id, opened time, resolved time, deployment link].
Compute the median and 85th percentile of recovery time, the change fail rate,
and the rework rate, showing the counts behind each. Flag records with missing
links or suspicious timestamps. Do not extrapolate beyond the data or compare
the result with outside benchmarks. List your assumptions and the data quality
issues that limit the conclusions.
```

**Ein Verbesserungsexperiment planen.**

```text
Our weakest delivery metric is [metric name], currently [value as reported,
with date range and counts]. Likely causes the team has discussed are [list]. Our
constraints are [constraints, for example regulated releases, shared test
environment]. Propose three small experiments of four to six weeks, each with a
hypothesis, a way to observe the effect, a guardrail metric, and a risk. Do not
invent expected improvement figures. List your assumptions and what we should
check before starting.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die verwandten Change-, Release- und Incident-Themen zu finden und die Leitplanke, die neben jede DORA-Kennzahl gehört.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine überarbeitete Fassung dieses Themas Uhren, Manipulationsvektoren und Querverweise konsistent hält.

## Wichtigste Erkenntnisse

- Die DORA-Kennzahlen sind fünf Messgrößen der Softwarelieferung, drei zum Durchsatz und zwei zur Instabilität, und am nützlichsten zusammen gelesen für einen Service.
- Berechnen Sie sie aus Pipeline- und Incident-Ereignissen mit schriftlichen Definitionen, denn Fehler und der Start der Durchlaufzeit sind Ermessensfragen.
- Nutzen Sie sie, um etwas über ein Liefersystem zu lernen, und vergleichen Sie ein Team mit seiner eigenen Historie, nie um Menschen oder Teams zu ordnen.
- Berichten Sie Mediane, hohe Perzentile und Anzahlen und koppeln Sie jede Kennzahl mit einer Leitplanke, die ihre Manipulation auffängt.
- Verbessern Sie die zugrunde liegenden Fähigkeiten wie kleine Lose, schnelle Erkennung und einfachen Rollback und lassen Sie die Zahlen folgen.
- Nennen Sie Ausgabe und Datum der befolgten Leitlinien, denn die Definitionen wurden im Lauf der Zeit verfeinert.

## Quellen und weiterführende Literatur

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. DORA, *DORA research program*, Google Cloud, https://dora.dev/research/
4. DORA, *Four Keys project*, https://github.com/dora-team/fourkeys
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
6. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [DevOps Research and Assessment](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment).
9. Wikipedia, [Accelerate (book)](https://en.wikipedia.org/wiki/Accelerate_(book)).
10. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
16. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
