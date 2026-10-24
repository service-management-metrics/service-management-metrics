# Betriebsarbeit und ungeplante Arbeit

**Ein Team, das einen Service entwickelt und betreibt, hat einen Kapazitätspool. Machen Sie deshalb die Aufteilung zwischen geplanter Änderung und Betriebsarbeit sichtbar, schützen Sie sie mit ausdrücklichen Regeln für Unterbrechung und beschleunigte Arbeit und lesen Sie den Anteil ungeplanter Arbeit als Signal über das System statt als Urteil über die Menschen.**

## Überblick und Motivation

Jedes Team, das einen Service entwickelt und betreibt, verbringt seine Zeit mit zwei groben Arten von Arbeit. **Change-Arbeit** bringt den Service voran: neue Funktionen, geplante Verbesserungen, Migrationen und das Beseitigen bekannter Schwächen. **Betriebsarbeit** (Run-Arbeit) hält den Service am Laufen: Incidents und Anfragen beantworten, auf Alarme reagieren, Routine-Patches einspielen, Zugriff wiederherstellen und die manuellen Aufgaben erledigen, die der Service noch verlangt. Beide sind legitim, und ein Service mit Nutzern braucht beide. Der Ärger beginnt, wenn niemand sagen kann, wie viel von jeder das Team leistet, denn der Plan unterstellt dann still Kapazität, die die Betriebsarbeit bereits verbraucht hat.

Arbeit lässt sich auch danach sortieren, ob sie vorhergesehen war. **Geplante Arbeit** wurde vor Beginn des Zeitraums gewählt, zum Beispiel in der Planung oder einer Quartalszusage. **Ungeplante Arbeit** trifft während des Zeitraums ein und verlangt Aufmerksamkeit, die nicht eingeplant war: ein Produktions-Incident, eine dringende Anfrage einer leitenden Stakeholderin, eine Sicherheitskorrektur oder ein Fehler, der einen Kunden blockiert. Die beiden Achsen überlappen, sind aber nicht dasselbe. Die meiste Betriebsarbeit ist im Zeitpunkt ungeplant, auch wenn ihr Volumen vorhersagbar ist, und manche Betriebsarbeit, etwa eine geplante Zertifikatserneuerung, ist vollständig geplant. Change-Arbeit kann auch ungeplant sein, etwa wenn sich eine Vorschrift ändert und ein Team binnen Wochen reagieren muss.

Agile und ITIL-Sichtweisen beschreiben denselben Druck mit anderen Worten. In zeitgeboxter Planung ist eine Zusage eine Prognose der Kapazität, und Arbeit, die mitten im Zeitraum eintrifft, verdrängt entweder etwas oder wird zurückgestellt. Auf einem Flussboard hat die Arbeit in Bearbeitung ausdrückliche Limits, und es gibt oft eine eigene Spur für dringende Elemente, und die Frage ist, wie viele dringende Elemente das System auffangen kann, bevor der Fluss zusammenbricht (siehe Thema 2.1, Flussmaße). In ITIL 4 (der 2019 veröffentlichten Version) beschreiben Incident-Management, Serviceanfragen-Management und Problemmanagement, wie Betriebsarbeit entgegengenommen, priorisiert und gelöst wird, während die Change-Befähigung und die Praktik Softwareentwicklung und -management geplante Änderungen steuern. Die Praktiken beschreiben Workflows. Sie sagen selten, wie ein einzelnes Team seine Stunden zwischen ihnen teilen soll, und diese Lücke ist es, in der dieses Thema arbeitet.

Mehrere Begriffe kehren hier wieder. Eine **Unterbrechung** (Interrupt) ist jede Nachfrage, die außerhalb des Planungszyklus eintrifft und eine Person von dem Element wegzieht, an dem sie arbeitet. Die **Unterbrechungslast** ist die Gesamtwirkung dieser Nachfragen auf ein Team über einen Zeitraum, gemessen nach Anzahl, nach Stunden oder nach dem Anteil der Kapazität, den sie verbrauchen. Ein **Expedite** ist ein Arbeitselement, das die Warteschlange überspringen darf, meist weil seine [Verzögerungskosten](https://en.wikipedia.org/wiki/Cost_of_delay) hoch und unmittelbar sind. Eine **Expedite-Spur** ist eine Regel, oft eine eigene Zeile auf einem Board, die begrenzt, wie viele Expedites gleichzeitig in Bearbeitung sein dürfen. **Kapazitätsverteilung** ist die ausdrückliche Aufteilung der Kapazität eines Teams auf Arten von Arbeit, zum Beispiel ein genannter Anteil für geplante Änderung, einer für Betriebsarbeit und einer für Verbesserung.

Ungeplante Arbeit ist die größte versteckte Steuer auf geplante Lieferung: Jede Unterbrechung kostet ihre eigene Zeit plus die Erholungszeit, die durch [Aufgabenwechsel](https://en.wikipedia.org/wiki/Task_switching_(psychology)) verloren geht, und Forschung zu unterbrochener Arbeit (Mark, Gudith und Klocke, 2008) fand, dass Menschen ausgleichen, indem sie schneller arbeiten, um den Preis von mehr Stress. Ein Hinweis zur Richtung. Ein hoher Anteil ungeplanter Arbeit ist nicht für sich ein Mangel. Ein neu gestarteter Service, ein andauernder Ausfall oder ein regulatorisches Ereignis können zu Recht eine Zeit lang den größten Teil der Kapazität eines Teams verbrauchen. Ziel ist weder, ungeplante Arbeit auf null zu drücken, noch, sie zu verbergen, sondern sie zu sehen, zu bepreisen und bewusst zu entscheiden, wie viel davon das Team auffängt und wie viel die Organisation vorgelagert beheben muss. Ungeplante Arbeit, die aus derselben Ursache wiederkehrt, ist die nützlichste Art zu finden, denn sie weist auf einen Problemdatensatz, eine Monitoring-Lücke oder einen Posten [technischer Schulden](https://en.wikipedia.org/wiki/Technical_debt) hin, die billiger zu beseitigen sind, als weiter für sie zu zahlen.

## Leitprinzipien

- **Kapazität ist endlich und geteilt.** Jede Stunde für Betriebsarbeit oder einen Expedite ist eine Stunde, die nicht für geplante Änderung bleibt, also machen Sie die Aufteilung ausdrücklich und sichtbar, statt sie davon abhängen zu lassen, wer am lautesten ruft.
- **Arbeit bei Ankunft klassifizieren, nicht nachträglich.** Kennzeichnen Sie jedes Element im Moment seines Eintritts in das System als geplant oder ungeplant und als Change oder Betrieb, denn Umklassifizierung am Ende des Zeitraums ist eine Erinnerung und keine Beobachtung.
- **Unterbrechungen haben einen Preis jenseits ihrer Dauer.** Zählen Sie die Erholungskosten des Wechselns ebenso wie die verbrachten Minuten und bevorzugen Sie Entwürfe, die Unterbrechungen bündeln oder an eine benannte Person leiten.
- **Beschleunigen nach Regel, nicht nach Rang.** Eine Expedite-Spur mit Limit und Eintrittstest schützt den Fluss, unbegrenztes Beschleunigen nach Dienstalter beseitigt ihn.
- **Kapazität mit Absicht reservieren.** Ein geplanter Puffer ist ehrlicher als ein Plan, der keinen annimmt.
- **Wiederkehrende ungeplante Arbeit als Mangel im System behandeln.** Eine wöchentliche Wiederholung ist ein Kandidat für einen Problemdatensatz oder eine Automatisierung.
- **Teams und Services messen, nie Einzelpersonen.** Die Person, die die meisten Unterbrechungen beantwortet, ist meist die Person, die am meisten weiß; sie zu ordnen bestraft das Falsche (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Kennzahlendefinitionen

Sieben Kennzahlen beschreiben, wie Kapazität verteilt und gestört wird. Jede braucht eine schriftliche Klassifizierungsregel, denn jede hängt davon ab, wie Elemente gekennzeichnet werden. Der Zeitraum in jeder Formel ist dasselbe feste Fenster für das Team, etwa eine Woche, ein Monat oder ein Quartal.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Anteil ungeplanter Arbeit | Anteil der abgeschlossenen Arbeitselemente, nach Anzahl, die zu Beginn des Zeitraums nicht im Plan waren | Im Zeitraum abgeschlossene Elemente, die nach Beginn des Zeitraums auf das Board oder in den Backlog gelangten / alle im Zeitraum abgeschlossenen Elemente; die Uhr startet beim Planungsereignis und stoppt am Ende des Zeitraums; stornierte und noch offene Elemente sind ausgeschlossen | Prozent | Issue-Tracker mit Erstellungszeit des Elements und der Planungs-Momentaufnahme | Incident-Management; Serviceanfragen-Management | Umfangsänderung; Arten von Arbeitselementen | Monatlich |
| Einhaltung der Kapazitätsverteilung | Wie genau der tatsächliche Aufwand zur genannten Aufteilung zwischen Change-, Betriebs- und Verbesserungsarbeit passt | Für jede Kategorie die absolute Differenz zwischen tatsächlichem und vereinbartem Anteil, summiert und halbiert; der tatsächliche Anteil sind abgeschlossene Elemente (oder erfasster Aufwand, wo das Team ihn erfasst) in dieser Kategorie / alle abgeschlossenen Elemente; Elemente ohne Kategorie werden gesondert berichtet und nicht fallen gelassen | Prozentpunkte | Feld Arbeitstyp im Issue-Tracker und Zeiterfassungen, wo vorhanden | Kontinuierliche Verbesserung; Kapazitäts- und Leistungsmanagement | Kapazitätsverteilung oder Kapazitätsplanung | Monatlich |
| Unterbrechungsrate | Wie oft Nachfragen außerhalb des Plans das Team und die Menschen erreichen, die geplante Arbeit leisten | Vom Team im Zeitraum erhaltene Unterbrechungen / Arbeitstage im Zeitraum, wobei eine Unterbrechung jedes Ticket, jeder Pager-Alarm, jede Nachrichtenanfrage oder jede Bitte ist, die im Eingangskanal des Teams erfasst wurde und nicht bereits im Plan steht; Duplikate derselben zugrunde liegenden Nachfrage werden einmal gezählt | Unterbrechungen pro Arbeitstag | Protokoll des Eingangskanals, ITSM-Warteschlange, Alarmsystem und Unterbrechungsprotokoll des Teams | Incident-Management; Serviceanfragen-Management; Monitoring und Event-Management | Unterbrechungsprotokoll oder Arbeitsvereinbarung des Teams | Wöchentlich |
| Expedite-Rate | Anteil der abgeschlossenen Elemente, die die Expedite-Spur genutzt haben | Im Zeitraum abgeschlossene Elemente, die in die Expedite-Spur eintraten / alle im Zeitraum abgeschlossenen Elemente; die Uhr startet, wenn das Element als Expedite markiert wird, und stoppt beim Abschluss; vor Arbeitsbeginn aus der Spur herabgestufte Elemente werden gesondert gezählt | Prozent | Spurverlauf des Boards oder Verlauf des Prioritätsfelds | Incident-Management; Change-Befähigung (Notfall-Change) | Expedite-Servicegüteklasse | Monatlich |
| Verdrängung geplanter Arbeit | Zahl geplanter Elemente, die verschoben oder aufgegeben wurden, um Platz für ungeplante Arbeit zu schaffen | Aus dem Zeitraum entfernte, zurückgestellte oder unfertig gelassene geplante Elemente mit erfasstem Grund „durch ungeplante Arbeit verdrängt“ im Zeitraum (Anzahl); wegen geänderten Ziels entfernte Elemente sind ausgeschlossen | Anzahl Elemente | Änderungsverlauf des Boards mit dem Grundfeld | Change-Befähigung; kontinuierliche Verbesserung | Schutz des Lieferziels; Umfangsverhandlung | Monatlich |
| Anteil wiederkehrender ungeplanter Arbeit | Anteil ungeplanter Elemente, deren Ursache einem früheren ungeplanten Element im Rückblickfenster entspricht | Im Zeitraum abgeschlossene ungeplante Elemente, die auf denselben Problemdatensatz, dieselbe Alarmregel oder dasselbe Ursachenetikett wie ein früheres Element im Rückblickfenster (zum Beispiel 90 Tage) verweisen / alle im Zeitraum abgeschlossenen ungeplanten Elemente; Elemente ohne Ursachenetikett werden als gesonderte unklassifizierte Zahl berichtet | Prozent | ITSM-Incident- und Problemdatensätze, Ursachenetiketten im Tracker | Problemmanagement; Management bekannter Fehler | Retrospektiv-Maßnahmen; Tags wiederkehrender Fehler | Monatlich |
| Verlässlichkeit der geplanten Zusage | Anteil der für den Zeitraum geplanten Elemente, die das Team im Zeitraum abgeschlossen hat | Im Zeitraum abgeschlossene geplante Elemente / zu Beginn des Zeitraums geplante Elemente; nach dem Beginn hinzugefügte Elemente sind aus beiden Zählungen ausgeschlossen | Prozent | Planungs-Momentaufnahme und Abschlussverlauf des Trackers | Service-Level-Management; Change-Befähigung | Verlässlichkeit der Prognose | Monatlich |

Zeitmessgrößen in diesem Thema, etwa das Alter eines Expedite-Elements, sollten als Perzentile gezeigt werden (zum Beispiel Median und 85. Perzentil) und nicht als Durchschnitt, da ein einziger langer Incident einen Mittelwert verzerrt (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

## Empfehlungen

### Die Aufteilung sichtbar machen

**1. Kennzeichnen Sie jedes Element beim Eingang mit zwei Feldern.** Fügen Sie dem Eingangsformular des Trackers oder ITSM-Werkzeugs einen Arbeitstyp (Change, Betrieb, Verbesserung) und eine Markierung geplant (geplant, ungeplant) hinzu und machen Sie beide verpflichtend. Die Etiketten sind billig, wenn sie bei der Anlage gesetzt werden, und unzuverlässig, wenn sie später rekonstruiert werden. Schreiben Sie die Definition jedes Werts in einem Satz in die Arbeitsvereinbarung des Teams und überprüfen Sie sie, wenn die Etiketten die Arbeit nicht mehr beschreiben (siehe Thema 1.5, Datenquellen und Instrumentierung).

**2. Frieren Sie eine Planungs-Momentaufnahme ein.** „Ungeplant“ hat nur im Verhältnis zu einem Plan Bedeutung, also erfassen Sie die Liste der Elemente zu Beginn des Zeitraums und speichern Sie sie. Vergleichen Sie abgeschlossene Arbeit mit der Momentaufnahme, nicht mit dem, wie das Board am Ende aussieht.

### Kapazität mit Absicht verteilen

**3. Vereinbaren Sie eine Kapazitätsverteilung und behandeln Sie sie als Hypothese.** Entscheiden Sie als Team und mit der Product-Owner- oder Serviceeigner-Rolle, welcher Anteil ungefähr in geplante Änderung, in Betriebsarbeit und in Verbesserung geht. Beginnen Sie bei dem, was die Daten zeigen, das das Team in den letzten Perioden tatsächlich getan hat, und wählen Sie dann ein Ziel, das sich in die gewünschte Richtung bewegt. Überprüfen Sie die Aufteilung in jedem Planungszyklus; ein fester Prozentsatz von der Folie eines anderen Teams ist eine Vermutung und keine Entscheidung.

**4. Reservieren Sie einen aus der eigenen Historie bemessenen Puffer.** Nutzen Sie das eigene Unterbrechungsprotokoll des Teams, um einen Puffer für ungeplante Arbeit zu bemessen, etwa indem Sie den mittleren und den oberen Bereich des wöchentlichen Anteils ungeplanter Arbeit der jüngsten Perioden ansehen, und planen Sie nur die verbleibende Kapazität. Ein Puffer, der regelmäßig ungenutzt bleibt, kann schrumpfen, einer, der regelmäßig erschöpft ist, braucht eine größere Verteilung oder eine beseitigte Ursache. Die Beziehung zwischen Last und Verzögerung in einer Warteschlange (siehe [Gesetz von Little](https://en.wikipedia.org/wiki/Little%27s_law) und Thema 2.3, Laufende Arbeit und Warteschlangentheorie) erklärt, warum ein System bei voller Auslastung keinen Raum hat, eine Überraschung aufzufangen.

### Den Unterbrechungspfad gestalten

**5. Leiten Sie Unterbrechungen an eine benannte Rolle.** Rotieren Sie eine einzelne Person, oft Unterbrechungsbearbeiter, Dienstingenieurin oder Schutzschild genannt, die für einen Tag oder eine Woche eingehende Nachfragen übernimmt, während die anderen ihren Fokus schützen. Die Rolle hat einen schriftlichen Geltungsbereich, eine Übergabenotiz und eine Begrenzung ihrer Dauer, damit die Last fair verteilt wird. Teams in einer Rotation sollten sie mit der Bereitschaftspraxis verbinden (siehe Thema 5.7, Kennzahlen für Toil und Bereitschaftsdienst).

**6. Triagieren Sie an der Tür.** Unterbrechungen unterscheiden sich enorm in der Dringlichkeit. Wenden Sie am Eingang eine kurze [Triage](https://en.wikipedia.org/wiki/Triage)-Regel an, die drei Fragen stellt: Ist ein Service ausgefallen oder ein Nutzer blockiert, gibt es ein Datum, das sich nicht verschieben lässt, und kann die Nachfrage bis zum nächsten Planungsereignis warten? Elemente, die alle drei verneinen, gehen in den Backlog und werden wie jede andere Arbeit geplant. In ITIL-4-Begriffen ist das der Priorisierungsschritt von Incident-Management und Serviceanfragen-Management, angewandt auf den eigenen Eingang des Teams.

### Die Expedite-Spur steuern

**7. Geben Sie der Expedite-Spur ein Limit und einen Eintrittstest.** Die Spur hält höchstens ein oder zwei Elemente gleichzeitig, und ein Element tritt nur ein, wenn seine Verzögerungskosten hoch und unmittelbar sind und der Anfragende sie benennen kann. Ein genannter Test lässt das Team zu der Anfrage nein sagen, die nur laut ist. Ist die Spur immer voll, ist sie keine Ausnahme mehr, und das Team sollte den Eintrittstest und die vorgelagerten Ursachen überprüfen. Die Spur ist eine [Servicegüteklasse](https://en.wikipedia.org/wiki/Class_of_service) mit eigenen Regeln; zur zugrunde liegenden Idee siehe die Kanban-Literatur (Anderson, 2010).

### Die Quellen beseitigen

**8. Verknüpfen Sie ungeplante Elemente mit einer Ursache und überprüfen Sie die Wiederholungen.** Fügen Sie jedem ungeplanten Element ein Ursachenetikett oder einen Verweis auf einen Problemdatensatz hinzu. Listen Sie einmal im Monat die wiederkehrenden Ursachen auf und schicken Sie die obersten an das Problemmanagement, als Posten technischer Schulden in den Backlog oder zu Monitoring-Verbesserungen (siehe Thema 4.1, Kennzahlen für das Problemmanagement, und Thema 4.6, Technische Schulden und bekannte Fehler). Der Anteil wiederkehrender ungeplanter Arbeit zeigt, ob diese Korrekturen greifen. Das Muster ähnelt der im Google-SRE-Buch beschriebenen Beseitigung von Toil, wo wiederholende manuelle Betriebsarbeit als etwas behandelt wird, das wegzukonstruieren ist; das Buch schlägt vor, sie unter einem Anteil der Zeit einer Ingenieurin zu halten (Beyer et al., 2016), eine Richtlinie, die jedes Team an den eigenen Daten prüfen sollte, statt sie als Ziel zu übernehmen.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Anteil ungeplanter Arbeit | Elemente spät der Planungs-Momentaufnahme hinzufügen, damit sie als geplant zählen; dringende Arbeit unverfolgt lassen, damit sie nie zählt; geplante Elemente als ungeplant kennzeichnen, um einen verfehlten Plan zu entschuldigen | Eingefrorene Planungs-Momentaufnahme mit Zeitstempel; unklassifizierte Zahl; jedes Quartal eine Stichprobe geschlossener Elemente lesen, um das Etikett mit dem Geschehenen zu vergleichen |
| Einhaltung der Kapazitätsverteilung | Elemente zwischen Kategorien verschieben, um zur vereinbarten Aufteilung zu passen; ein Element in mehrere zerlegen, um die Anteile zu verschieben; eine Aufteilung wählen, die das Team ohnehin erreicht | Feste, in der Arbeitsvereinbarung geschriebene Kategoriedefinitionen; eine Stichprobe von Elementbeschreibungen gegen ihre Kategorie; Verlässlichkeit der geplanten Zusage |
| Unterbrechungsrate | Unterbrechungen in stille Gefallen verwandeln, die das Protokoll nie erreichen; mehrere Nachfragen in einem Eintrag bündeln; Menschen vom Fragen abhalten | Das Protokoll mit dem Verkehr des Eingangskanals und dem Alarmverlauf vergleichen; das Team in der Retrospektive fragen, ob das Protokoll seinem Erleben entspricht |
| Expedite-Rate | Dringende Arbeit aus der Spur halten, um diszipliniert zu wirken, oder alles hineinlegen, um Tempo zu bekommen; Expedite zu „wichtig“ umdefinieren | Spurlimit mit Eintrittstest; Anteil der Expedite-Elemente, die den Test bei der Überprüfung erfüllten; Verdrängung geplanter Arbeit |
| Verdrängung geplanter Arbeit | Verdrängung als freiwillige Umfangsänderung erfassen; geplante Elemente still ohne Grund scheitern lassen; geplante Elemente meiden, die wahrscheinlich verdrängt werden | Grundfeld bei jedem entfernten oder unfertigen Element verpflichtend; Verlässlichkeit der geplanten Zusage; Überprüfung der Gründe in der Retrospektive |
| Anteil wiederkehrender ungeplanter Arbeit | Ein grobes Ursachenetikett nutzen, damit Wiederholungen verborgen bleiben, oder ein feines, damit nichts wiederkehrt; den Problemdatensatz schließen, um die Verknüpfung zu entfernen | Taxonomie der Ursachenetiketten jedes Quartal überprüft; unklassifizierte Zahl; Wiederkehrprüfung nach dem Schließen eines Problemdatensatzes |
| Verlässlichkeit der geplanten Zusage | Klein planen, um alles abzuschließen; Schätzungen aufpolstern; ein Teilelement als erledigt zählen; schwere Elemente vor Beginn des Zeitraums fallen lassen | Größe und Wert der geplanten Elemente im Zeitverlauf verglichen; Ergebnisprüfung des Lieferziels; Anteil ungeplanter Arbeit, damit ein hoher Wert nicht als Gesundheit gelesen wird, wenn der Plan zaghaft war |

Ein gesunder Befund ist ein Anteil ungeplanter Arbeit, den das Team erklären kann, eine Expedite-Spur, die selten voll ist, und ein Wiederholungsanteil, der nach Korrekturen fällt. Ein verdächtig perfekter Befund ist das, was zu untersuchen ist. Ein Team, das null ungeplante Arbeit berichtet, hat entweder einen sehr ruhigen Service oder einen unverfolgten, und man erkennt es, indem man das Protokoll mit Alarm- und Ticketverlauf vergleicht.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Feste Kapazitätsverteilung (genannte Prozentsätze) | Leicht zu erklären; schützt Verbesserungsarbeit vor dem Verhungern | Ignoriert echte Schwankung; durch Umetikettieren manipulierbar |
| Aus der Historie bemessener reservierter Puffer | Passt den Plan an die echte Unterbrechungslast an | Braucht mehrere Perioden verlässlicher Daten; kann eine chronische Ursache verbergen |
| Rotierender Unterbrechungsbearbeiter | Schützt den Fokus des größten Teils des Teams; verteilt die Last fair | Die eigene geplante Arbeit des Bearbeiters stockt; die Rolle braucht Übergabe und Unterstützung |
| Striktes Expedite-Limit | Hält den Fluss vorhersagbar; erzwingt genannte Verzögerungskosten | Anfragende können es umgehen; ein echter Notfall kann sich blockiert anfühlen |
| Elemente statt Aufwand zählen | Einfach und schwer aufzublähen | Behandelt sehr verschiedene Größen gleich |

Die praktische Position für die meisten Teams ist, zuerst Elemente zu zählen, Aufwand nur dort hinzuzufügen, wo Elementzählungen in die Irre führen, einen kleinen Puffer und eine kleine Expedite-Spur zu schützen und das Ursachenetikett zu nutzen, um die größte Wiederholung anzugehen.

## Fragen für die Diskussion im Team

**1. Welcher Anteil unserer abgeschlossenen Arbeit der letzten Periode war ungeplant, und woher wissen wir es?**
Öffnen Sie die Planungs-Momentaufnahme neben der Liste abgeschlossener Elemente und zählen Sie die Elemente, die nicht im Plan waren. Vergleichen Sie das Ergebnis mit dem Gefühl jeder Person für die Periode; die beiden unterscheiden sich oft. Die Moderation sollte fragen, wie viele Elemente nie erfasst wurden, denn die ehrliche Antwort prägt jede andere Zahl.

**2. Welche drei Quellen von Unterbrechungen kosten uns am meisten, und wer könnte sie beseitigen?**
Listen Sie die Quellen nach Anzahl und nach dem Aufwand auf, den sie aufgesaugt haben, etwa Alarme, wiederholte Anfragen, Eskalationen und Ad-hoc-Bitten von Stakeholdern. Markieren Sie jede als beseitigbar, umleitbar oder unvermeidbar. Die Moderation sollte für jede Quelle, die das Team nicht selbst beheben kann, auf einen benannten Eigner außerhalb des Teams drängen.

**3. Welche Aufteilung zwischen Change-, Betriebs- und Verbesserungsarbeit wollen wir tatsächlich?**
Vergleichen Sie die Aufteilung, die die Daten zeigen, mit der, die Menschen zu haben glauben, und mit der, die die Führung erwartet. Besprechen Sie, welche Arten von Arbeit das Team unter Druck zuerst fallen ließe, denn das offenbart die wahren Prioritäten. Wählen Sie ein Ziel für die nächste Periode und eine Möglichkeit, es zu prüfen.

**4. Was ist unsere Regel für die Expedite-Spur, und wer entscheidet?**
Lesen Sie die aktuelle Regel laut vor oder halten Sie fest, dass es keine gibt. Fragen Sie nach den letzten drei Expedites und testen Sie jeden gegen genannte Verzögerungskosten. Besprechen Sie, was das Team tut, wenn eine leitende Person um einen Sprung bittet, der den Test nicht besteht, und wer die Entscheidung trägt.

**5. Wenn wir unterbrochen werden, was kostet es uns, nachdem die Unterbrechung endet?**
Bitten Sie Menschen zu beschreiben, wie lange es dauert, nach einer typischen Unterbrechung den Faden einer Aufgabe wiederzufinden.

**6. Welches ungeplante Element ist mehr als einmal wiedergekommen, und was würde es aufhalten?**
Nehmen Sie das letzte Quartal ungeplanter Elemente und suchen Sie nach Wiederholungen nach Ursache. Wählen Sie die mit dem größten Gesamtaufwand und verfolgen Sie, warum sie wiederkehrt: ein fehlender Alarm, ein unbehobener Fehler, ein manueller Schritt oder ein Lieferantenproblem. Entscheiden Sie, ob sie zu einem Problemdatensatz, in den Backlog oder in ein Lieferantengespräch geht.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams spüren ungeplante Arbeit als zerbrochene Pläne und rutschende Prognosen. Sie profitieren von Kennzeichnung am Eingang, einer eingefrorenen Planungs-Momentaufnahme und einer Prognose, die auf einem aus der Historie gebildeten Puffer beruht (siehe Thema 2.5, Kennzahlen für Lieferprognosen und Planung). Das Verdrängungsprotokoll zeigt Product Ownern, was jede späte Anfrage gekostet hat.

### Service- und Betriebsteams

Betriebsteams tragen den größten Teil der Betriebsarbeit. Sie brauchen einen benannten Unterbrechungsbearbeiter, eine Triage-Regel und einen Weg von wiederkehrenden Anfragen und Alarmen zu Korrekturen (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität). Der Wiederholungsanteil ist ihr stärkstes Argument für Investitionen in das Problemmanagement.

### Führung und Governance

Führungskräfte legen die tatsächliche Verteilung fest durch die Anfragen, die sie stellen, und die Fristen, die sie akzeptieren. Sie sollten den Anteil und seine Ursachen anfordern, Verbesserungsarbeit finanzieren, die wiederkehrende Unterbrechungen beseitigt, und vermeiden, Expedites zum normalen Weg zu machen, Dinge zu erledigen.

### Kunden und Nutzer

Kunden sehen ungeplante Arbeit als Ausfälle, langsame Antworten und verspätete Funktionen. Sie gewinnen, wenn das Team Raum hat, Ursachen zu beheben, und sie brauchen einen fairen Weg, Dringlichkeit geltend zu machen. Service Level Agreements (siehe [Service Level Agreement](https://en.wikipedia.org/wiki/Service-level_agreement)) sollten die Unterbrechungslast widerspiegeln, die das Team trägt (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA).

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Krankenversicherers betreibt eine Schadenplattform mit einem Produktteam aus sieben Personen und einem gemeinsamen Service Desk. Das Team baut neue Funktionen und unterstützt die Plattform auch in der Produktion. Alle Zahlen in diesem Beispiel sind illustrativ.

Sechs Wochen lang fiel die Verlässlichkeit der geplanten Zusage des Teams von etwa 85 Prozent auf 55 Prozent, und der Product Owner begann, die Schätzungen des Teams infrage zu stellen. Der Teamleiter zieht den Tracker-Verlauf. Anhand der eingefrorenen Planungs-Momentaufnahmen beträgt der Anteil ungeplanter Arbeit in der jüngsten Periode 41 Prozent nach Anzahl, gegenüber einer Erinnerung des Teams an „vielleicht ein Fünftel“. Die unklassifizierte Zahl beträgt 9 Prozent, der Anteil ist also einigermaßen vertrauenswürdig.

Die Aufteilung der ungeplanten Elemente nach Ursache zeigt, dass 14 von 24 Betriebsarbeit waren, und davon führen 9 auf einen einzigen Batch-Job zur Schadeneinreichung zurück, der nach einer Datenformatänderung eines Partners fehlschlägt und jedes Mal von Hand neu gestartet wird. Der Anteil wiederkehrender ungeplanter Arbeit beträgt 58 Prozent. Die Unterbrechungsrate beträgt 6 pro Arbeitstag, und 4 davon erreichen die Ingenieure, die geplante Arbeit leisten, weil der Service Desk direkt an die Person eskaliert, die zuerst antwortet. Die Expedite-Spur hält an den meisten Tagen zwei Elemente gleichzeitig, und die Expedite-Rate beträgt 23 Prozent. Die Verdrängung geplanter Arbeit beträgt 7 Elemente im Zeitraum, von denen 5 den Grund „durch ungeplante Arbeit verdrängt“ tragen.

Das Team trifft mit dem Product Owner und dem Serviceeigner vier Entscheidungen. Erstens wird jeweils ein Ingenieur zum Unterbrechungsbearbeiter mit schriftlichem Geltungsbereich und Übergabenotiz, und Eskalationen gehen nur an diese Person. Zweitens wird die Expedite-Spur auf ein Element begrenzt, mit einem Eintrittstest, der genannte Verzögerungskosten verlangt, und jeder Expedite hält das Element fest, das er verdrängt hat. Drittens wird der Fehlschlag des Batch-Jobs als Problemdatensatz erfasst, mit einer Korrektur und einem Partnergespräch im Backlog als Verbesserungsarbeit, die 15 Prozent der Kapazität nutzt, den Anteil, den das Team als erste Verteilung für Verbesserung wählt. Viertens plant das Team die Arbeit der nächsten Periode mit einem aus dem oberen Bereich seines jüngsten Anteils ungeplanter Arbeit bemessenen Puffer, nicht mit voller Last.

Sechs Wochen später beträgt der Anteil ungeplanter Arbeit 27 Prozent, der Wiederholungsanteil 22 Prozent, die Unterbrechungsrate, die die geplant Arbeitenden erreicht, 1,5 pro Tag, und die Verlässlichkeit der geplanten Zusage etwa 78 Prozent (alles illustrativ). Das Team hat die früheren 85 Prozent nicht erreicht und sagt das auch.

Das Manipulationsrisiko, das das Team auffängt: In der zweiten Periode unter der neuen Regelung sinkt die Unterbrechungsrate stark, und der Teamleiter bemerkt, dass Menschen den Bearbeiter direkt anschreiben, sodass Gefallen das Protokoll nie erreichen. Der Vergleich des Protokolls mit Eingangskanal und Alarmverlauf zeigt, dass das echte Volumen unverändert war. Das Team vereinbart, dass der Bearbeiter Direktnachrichten an den Eingangskanal umleitet. Der Fehler lag im Entwurf des Pfades, nicht bei einer Person.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Ein Team, das einen Service entwickelt und betreibt, hat einen Kapazitätspool, und ein nachhaltiges Tempo braucht ehrliche Grenzen für Unterbrechungen. Ein praktischer Schritt ist, mit Stakeholdern eine Kapazitätsaufteilung zu vereinbaren und den Anteil ungeplanter Arbeit im regelmäßigen Verbesserungsgespräch zu überprüfen. Zu beachten ist, dass ein Ziel für den Anteil ungeplanter Arbeit Teams dazu drängen kann, Betriebsarbeit als geplant zu etikettieren.

### KI

KI kann Arbeit zwischen geplant und ungeplant verschieben, etwa indem sie Routinekorrekturen automatisiert und zugleich Prüf- und Aufsichtsaufgaben hinzufügt. Verfolgen Sie den Anteil ungeplanter Arbeit und den Anteil wiederkehrender ungeplanter Arbeit vor und nach KI-Änderungen und nehmen Sie die Zeit, die für das Korrigieren von KI-Ausgaben aufgewendet wird, als eigene Kategorie auf. Zu beachten ist, dass verborgene Korrekturarbeit die Kapazität verschlingen kann, die die KI freisetzen sollte.

### Automatisierung

Erfassen Sie den Arbeitstyp automatisch aus dem Tracker mit einer kleinen, vereinbarten Menge von Kategorien. Messen Sie Automatisierung an der ungeplanten Arbeit, die sie beseitigt, und an den neuen Incidents, die sie verursacht. Zu beachten ist, dass automatische Behebung, die Services ohne Erfassung der Ursache neu startet, wiederkehrende ungeplante Arbeit wie frische Arbeit aussehen lässt.

### Analytik

Zeigen Sie den Anteil ungeplanter Arbeit im Zeitverlauf und die Ursachen wiederkehrender Elemente. Die Entscheidung, die dies untermauert, ist, wie viel Kapazität zu reservieren und welche Quellen der Unterbrechung zu beseitigen sind. Zu beachten ist, dass Kategorien von Menschen gewählt werden; prüfen Sie also eine Stichprobe von Elementen auf ehrliche Klassifizierung.

## Branchenperspektive

**Startup.** Fast alle Arbeit fühlt sich dringend an, und dieselben wenigen Menschen leisten Change- und Betriebsarbeit. Halten Sie die Klassifizierung auf zwei Etiketten und setzen Sie ein ausdrückliches Limit für Expedites. Der Anteil ungeplanter Arbeit ist der Beleg für den Satz „wir können die Roadmap oder die Support-Last schaffen, nicht beides“.

**Kleinunternehmen.** Ein Administrator oder ein kleines Team bearbeitet oft jede Anfrage. Nutzen Sie die Tickettypen des Werkzeugs als Klassifizierung, protokollieren Sie Unterbrechungen einen Monat lang, um das Muster zu lernen, und reservieren Sie einen festen täglichen Block für geplante Arbeit. Bitten Sie Lieferanten um ihre Volumen- und Wiederholungsursachenberichte.

**Großunternehmen.** Ungeplante Arbeit für ein Team ist oft geplante Arbeit für ein anderes. Einigen Sie sich auf gemeinsame Definitionen, berichten Sie je Team und je Service und finanzieren Sie Korrekturen auf der Ebene, auf der die Ursache liegt (siehe Thema 9.3, Kennzahlen für Zusammenarbeit und Übergaben).

**Behörden und öffentlicher Sektor.** Kapazität kann durch Stellenobergrenzen festgelegt sein, und Betriebsarbeit kann durch Gesetz oder Prüfungsfeststellungen bestimmt sein. Machen Sie dies zum Teil der Verteilung, dokumentieren Sie die Klassifizierungsregeln und führen Sie eine Prüfspur (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Das Motiv ist vorhersagbare Lieferung: Ein Plan, der die Unterbrechungslast ignoriert, wird wiederholt verfehlt, und sichtbare ungeplante Arbeit gibt dem Team eine stärkere Stimme, wenn es um Zeit bittet, Ursachen zu beseitigen.

Die Kosten, diese Messgrößen zu erheben, sind bescheiden, wenn Etiketten und Planungs-Momentaufnahme Teil des normalen Workflows sind. Die Hauptkosten sind die Zeit, Definitionen abzustimmen, die Disziplin, beim Eingang zu kennzeichnen, ein wenig Werkzeugaufwand, um Tracker- und ITSM-Daten zu verbinden (siehe Thema 1.5, Datenquellen und Instrumentierung), und die Stunden des Unterbrechungsbearbeiters, dessen eigene geplante Arbeit langsamer wird. Zeiterfassungen auf Stundenebene hinzuzufügen kostet erheblich mehr und wird oft abgelehnt, fügen Sie sie also nur hinzu, wenn Elementzählungen sich als irreführend erweisen. Die Gesamtbetriebskosten werden von der Zeit von Menschen dominiert, zählen Sie sie also.

Der Ertrag zeigt sich in Mustern, die das Team selbst messen kann, statt in einer angenommenen Zahl. Achten Sie auf einen fallenden Anteil wiederkehrender ungeplanter Arbeit nach Problemkorrekturen, eine steigende Verlässlichkeit der geplanten Zusage, weniger verdrängte geplante Elemente und weniger Unterbrechungen, die Menschen bei geplanter Arbeit erreichen. Wo Stunden bekannt sind, lässt sich der aus einer beseitigten wiederkehrenden Ursache zurückgewonnene Aufwand mit den eigenen Kosten pro Stunde des Teams bepreisen und dem Aufwand der Korrektur gegenüberstellen (siehe Thema 7.5, Servicekosten und Stückökonomie, und Thema 7.7, Kapitalrendite und Business Case). Borgen Sie keine Branchenprozentsätze für ungeplante Arbeit; keine Zahl einer anderen Organisation ersetzt Ihre eigene Historie.

## Anti-Muster und Fallstricke

- **Alle ungeplante Arbeit als Versagen behandeln.** Ein Teil davon ist der Service, der seine Aufgabe erfüllt, und ein Ziel von null drängt Arbeit aus dem Protokoll. Fragen Sie stattdessen, welcher Teil erwartet, welcher vermeidbar ist, und setzen Sie einen Puffer für den ersten.
- **Heldenkultur.** Die Person, die jeden Notfall rettet, wird unverzichtbar, müde und zu einer einzelnen Fehlerquelle. Teilen Sie stattdessen die Unterbrechungsrolle per Rotation und belohnen Sie das Beseitigen von Ursachen.
- **Alles ist ein Expedite.** Eine immer volle Spur ist nur eine zweite Warteschlange. Setzen Sie stattdessen ein Limit, verlangen Sie genannte Verzögerungskosten und überprüfen Sie den Eintrittstest monatlich.
- **Planung auf volle Auslastung.** Ein Plan ohne Spielraum garantiert, dass jede Überraschung etwas verdrängt. Bemessen Sie stattdessen einen Puffer aus der eigenen Unterbrechungshistorie und planen Sie die verbleibende Kapazität.
- **Nachträglich klassifizieren.** Am Ende des Zeitraums hinzugefügte Etiketten spiegeln Gedächtnis und Stimmung. Verlangen Sie stattdessen die Etiketten beim Eingang und frieren Sie die Planungs-Momentaufnahme ein.
- **Nachfrage still absorbieren.** Gefallen, die das Protokoll nie erreichen, machen die Last unsichtbar und die Planung falsch. Machen Sie stattdessen einen Eingangspfad zur Regel und leiten Sie Anfragen über Nebenkanäle dorthin um.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Klassifizierung und Sichtbarkeit | Arbeit wird nicht gekennzeichnet; ungeplante Arbeit wird gespürt, nicht gezählt | Einige Teams kennzeichnen geplante und ungeplante Arbeit mit eigenen Worten | Eine schriftliche Definition der Arbeitstypen und der Markierung geplant, beim Eingang angewandt, mit Planungs-Momentaufnahme | Anteil ungeplanter Arbeit und unklassifizierte Zahl im Trend und in jeder Periode überprüft | Definitionen über Teams und Lieferanten geteilt und überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| Kapazitätsverteilung | Kapazität wird als voll für geplante Arbeit verfügbar angenommen | Einige Teams wenden einen groben Puffer an | Eine vereinbarte Aufteilung zwischen Change, Betrieb und Verbesserung, mit aus der Historie bemessenem Puffer | Einhaltung überprüft und Aufteilung mit Produkt- und Serviceeignern angepasst | Verteilung über Teams ausgehandelt, die Plattformen, Services und Menschen teilen |
| Umgang mit Unterbrechungen und Expedites | Jeder unterbricht jeden; Dringlichkeit wird durch Dienstalter bestimmt | In einigen Teams gibt es die Gewohnheit einer Dienstperson oder einer Dringlich-Zeile | Eine benannte Unterbrechungsrolle, eine Triage-Regel und eine Expedite-Spur mit Limit und Eintrittstest | Expedite-Rate, Verdrängung und Unterbrechungsrate gegen eine Leitplanke überprüft | Unterbrechungsleitung und Expedite-Regeln über Teams koordiniert, mit gemeinsamen Bereitschafts- und Eskalationswegen |
| Beseitigung von Ursachen | Dieselben Probleme kehren wieder und werden mit Heldentaten behoben | Einige Wiederholungen werden bemerkt und in Retrospektiven besprochen | Ungeplante Elemente tragen ein Ursachenetikett, und die häufigsten Wiederholungen gehen an das Problemmanagement | Wiederholungsanteil verfolgt und Korrekturen als geplante Verbesserungsarbeit finanziert | Ursachen über Teams, Lieferanten und Kunden verfolgt, und Verbesserung ist Routine |

## Checkliste

- [ ] Jedes Arbeitselement trägt einen Arbeitstyp (Change, Betrieb, Verbesserung) und eine Markierung geplant, beim Eingang gesetzt.
- [ ] Definitionen von geplant, ungeplant, Change und Betrieb stehen in der Arbeitsvereinbarung des Teams.
- [ ] Eine Planungs-Momentaufnahme wird zu Beginn jedes Zeitraums eingefroren und gespeichert.
- [ ] Der Anteil ungeplanter Arbeit wird als Trend neben der unklassifizierten Zahl berichtet.
- [ ] Team und Eigner haben eine Kapazitätsverteilung vereinbart und im letzten Quartal überprüft.
- [ ] Es gibt einen Eingangspfad, und Anfragen über Nebenkanäle werden dorthin umgeleitet.
- [ ] Eine Unterbrechungsrolle mit schriftlichem Geltungsbereich rotiert im Team.
- [ ] Die Expedite-Spur hat ein Limit, einen Eintrittstest und eine Aufzeichnung dessen, was jeder Expedite verdrängt hat.
- [ ] Ungeplante Elemente tragen ein Ursachenetikett oder eine Verknüpfung zu einem Problemdatensatz, und Wiederholungen werden monatlich überprüft.
- [ ] Messgrößen werden auf Team- und Serviceebene berichtet und nie genutzt, um Einzelpersonen zu ordnen.

## KI-Prompts

**Eine Arbeitsklassifizierung für den Eingang entwerfen.**

```text
Our team is [team description, for example a platform team of six that builds
and supports an internal service]. We use [tracker or ITSM tool]. We want to
tag every item at intake as change, run, or improvement, and as planned or
unplanned. Draft clear one-sentence definitions for each value, three edge
cases that people will argue about with a suggested ruling for each, and a
short intake form. Do not invent features of our tool or benchmark values. List
your assumptions and the questions I should answer to refine the definitions.
```

**Ein Unterbrechungsprotokoll auf Muster analysieren.**

```text
Here is a summary of our interrupts over [period]: [paste anonymized counts by
source, day, and type, with no names of individuals]. Group them into sources
that could be removed, routed to one person, batched, or accepted. For each
group, suggest one experiment and one measure of whether it worked. Do not
invent benchmark values or compare us to other organizations. List your
assumptions and the data you would need to be more confident.
```

**Eine Richtlinie für die Expedite-Spur entwerfen.**

```text
We run [flow board, time-boxed planning, continuous flow, or a hybrid] with a team of [team size]
and a service level of [service levels, if any]. Draft a one-page expedite
policy with an entry test based on a stated cost of delay, a limit on items in
the lane, a rule for what happens to the displaced item, and a monthly review
question list. Keep the language neutral and avoid naming individuals. Do not
invent thresholds; mark the ones I must choose. List your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um herauszufinden, welches Thema eine verwandte Kennzahl besitzt, etwa Incident-Aufkommen oder Toil, und die Leitplanke, die daneben gehört.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine bearbeitete Fassung dieses Themas Uhren, Klassifizierungsregeln und Manipulationstabelle im Gleichklang hält.

## Wichtigste Erkenntnisse

- Geplante und ungeplante Arbeit sowie Change- und Betriebsarbeit teilen einen Kapazitätspool, also machen Sie die Aufteilung sichtbar und vereinbaren Sie sie bewusst.
- Kennzeichnen Sie Arbeit beim Eingang und frieren Sie eine Planungs-Momentaufnahme ein, denn „ungeplant“ bedeutet nur gegenüber einem erfassten Plan etwas.
- Unterbrechungen kosten Erholungszeit ebenso wie Minuten, leiten Sie sie also an eine benannte Rolle und triagieren Sie sie an der Tür.
- Eine Expedite-Spur braucht ein Limit, einen Eintrittstest und eine Aufzeichnung dessen, was jeder Expedite verdrängt hat.
- Wiederkehrende ungeplante Arbeit ist das stärkste Signal für Problemmanagement und Verbesserungsarbeit, und der Anteil der Wiederholungen zeigt, ob Korrekturen greifen.
- Berichten Sie auf Team- und Serviceebene, vergleichen Sie ein Team mit seiner eigenen Historie und ordnen Sie nie Einzelpersonen.

## Quellen und weiterführende Literatur

1. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Rau, V., "Eliminating Toil," chapter 5 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/eliminating-toil/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Kim, G., Behr, K., and Spafford, G., *The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win*, IT Revolution Press, 2013.
8. DeMarco, T., *Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency*, Broadway Books, 2001.
9. Mark, G., Gudith, D., and Klocke, U., "The cost of interrupted work: more speed and stress," in *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2008)*, ACM, 2008.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Kanban (development)](https://en.wikipedia.org/wiki/Kanban_(development)).
12. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
13. Wikipedia, [Task switching (psychology)](https://en.wikipedia.org/wiki/Task_switching_(psychology)).
14. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
16. Wikipedia, [Triage](https://en.wikipedia.org/wiki/Triage).
17. Wikipedia, [Class of service](https://en.wikipedia.org/wiki/Class_of_service).
18. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
