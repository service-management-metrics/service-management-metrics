# Reifegradmodell für Kennzahlenprogramme

**Nutzen Sie die gemeinsame fünfstufige Skala, um zu beschreiben, wo ein Kennzahlenprogramm steht, und den nächsten kleinen Schritt zu wählen, nie als Wert, der angezeigt, verglichen oder zertifiziert wird.**

## Überblick und Motivation

Jedes andere Thema in diesem Buch endet mit einer kleinen Reifegradtabelle für seinen Gegenstand. Dieses Thema wendet dieselbe Skala auf das Kennzahlenprogramm als Ganzes an. Die Frage ist nicht, wie gut die Incident-Zeiten eines Teams sind. Sie ist, wie gut die Organisation überhaupt Kennzahlen erfasst, liest und danach handelt: ob Definitionen geteilt werden, ob den Daten vertraut wird, ob die Zahlen zu Entscheidungen führen und ob die gemessenen Menschen das Programm als Hilfe sehen.

Ein Reifegradmodell ist eine Beschreibung von Stufen, die eine Organisation durchlaufen kann, während sich eine Praxis entwickelt. Das bekannteste Beispiel in der Software ist das [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model), das aus der Arbeit am Software Engineering Institute hervorging und sich weit verbreitete. Sein Einfluss war groß, und die darauf folgende Kritik ebenso. Organisationen jagten der Stufe nach statt der Fähigkeit, Prüfer bewerteten Papierkram, und das Modell wurde zu einem Abzeichen. Ein verantwortungsvoller Gebrauch jedes Reifegradmodells behält drei Vorbehalte im Blick. Die Skala ist ein Gesprächswerkzeug und keine Zertifizierung. Höher ist nicht immer besser, denn die richtige Stufe hängt vom Kontext ab. Und das Modell ist kein Ersatz für Ergebnisse: Ein ausgereiftes Programm, das Services nicht verbessert, ist ein sehr ordentliches Scheitern, und eine als Abzeichen gezeigte Stufe gleicht einer [Vanity-Kennzahl](https://en.wikipedia.org/wiki/Vanity_metric), einer Zahl, die gut aussieht und keine Entscheidung informiert.

Die hier genutzte Skala ist die, die im ganzen Buch und im *Service Management Guide* geteilt wird: Initiieren, Entwickeln, Standardisieren, Steuern und Orchestrieren (siehe das gemeinsame Reifegradmodell in der Spezifikation). Sie ist bewusst nicht dieselbe wie die Prozessreifegrad-Skalen in ITIL, in ISO/IEC 33000 oder im Capability Maturity Model, und ein Team sollte nicht auf Grundlage dieser einen einen Wert in einem dieser Rahmenwerke beanspruchen.

Die agilen Ziele zeigen, wie sie zu nutzen ist. Kontinuierliche Verbesserung heißt, dass das Modell dazu da ist, den nächsten Schritt zu finden, nicht einen Endzustand zu erreichen. Fortlaufende Weiterentwicklung heißt, dass ein Programm, das letztes Jahr Orchestrieren erreichte, zurückfallen kann, wenn Menschen gehen oder Prioritäten sich verschieben, die Selbstbewertung wird also wiederholt. Kontinuierliche Einbeziehung von Stakeholdern heißt, dass die Bewertung mit den Teams und nicht an ihnen erfolgt. Ein nachhaltiges Tempo heißt, dass das Programm einen Schritt nach dem anderen geht und nicht versucht, in einem Quartal drei Stufen zu springen. Und um motivierte Individuen herum zu bauen heißt, dass die Menschen, die die Arbeit tun, beurteilen, ob das Programm ihnen hilft. Das ist dieselbe Logik wie die Praktik der kontinuierlichen Verbesserung in ITIL, bei der eine Organisation den Ist-Zustand prüft, eine Richtung setzt und in kleinen Schritten verbessert, eine Gewohnheit nahe [Kaizen](https://en.wikipedia.org/wiki/Kaizen), der japanischen Idee kontinuierlicher Verbesserung durch alle. Die allgemeinere Idee ist der [kontinuierliche Verbesserungsprozess](https://en.wikipedia.org/wiki/Continual_improvement_process) (siehe Thema 9.5, Kennzahlen für kontinuierliche Verbesserung).

Das Modell hat im Zusammenhang mit Kennzahlen eine besondere Falle. Ein Programm, das an seinen eigenen Kennzahlen bewertet wird, lädt zu genau der Verzerrung ein, vor der es warnt. Wird „Zahl der Kennzahlen mit Definitionen“ zum Ziel, vermehren sich Definitionen. Der Ansatz in diesem Thema nutzt daher Belege aus der Arbeit (welche Entscheidungen sich änderten, was Teams sagen) zusätzlich zu Zählungen und lässt die Bewertung bei den Teams, die am wenigsten davon haben, sie aufzublähen (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen). Ein begleitendes Bewertungsformular für Teams steht in den Anhängen (siehe Thema 12.5, Reifegrad-Selbstbewertung).

## Leitprinzipien

- **Die Skala ist ein Gesprächswerkzeug.** Sie hilft Menschen, die Gegenwart zu beschreiben und einen nächsten Schritt zu wählen, und ist nicht zum Bewerten, Ordnen oder Zertifizieren da.
- **Mit den Teams bewerten.** Selbstbewertung, offen besprochen, ist genauer als externe Bewertung.
- **Nach Belegen urteilen.** Fragen Sie, welche Entscheidungen sich änderten, was Menschen sagen und was die Daten zeigen, ebenso wie welche Dokumente existieren.
- **Dimensionen können sich unterscheiden.** Ein Programm kann stark bei Werkzeugen und schwach bei Vertrauen sein. Berichten Sie das Profil, nicht eine einzelne Zahl.
- **Einen Schritt nach dem anderen gehen.** Zielen Sie in ein oder zwei Dimensionen auf die nächste Stufe, nicht auf alles auf einmal.
- **Höher ist nicht immer besser.** Wählen Sie die Stufe, die zu Größe, Risiko und Bedarf der Organisation passt.
- **Rückfall erwarten.** Personalwechsel, Reorganisation und Druck können ein Programm zurückwerfen. Bewerten Sie regelmäßig neu.
- **Nie eine Rangliste der Teams veröffentlichen.** Aggregieren Sie für das Programm und teilen Sie Teamergebnisse nur mit dem Team.

## Kennzahlendefinitionen

Die Kennzahlen unten beschreiben die Gesundheit des Programms und seiner Bewertung. Sie sind für das Programmteam und die Sponsoren da und werden als Signale für Diskussion gelesen.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Teilnahme an der Bewertung | Anteil der teilnehmenden Teams, die eine Selbstbewertung mit eigener Diskussion abschlossen | Teams, die abschlossen und diskutierten / teilnehmende Teams | Prozent | Bewertungsunterlagen | Kontinuierliche Verbesserung | Reflexion und Retrospektiven | Zweimal im Jahr |
| Profil nach Dimension | Die Verteilung der selbst bewerteten Stufen der Teams in jeder Dimension, als Spanne und nicht als einzelner Wert gezeigt | Zahl der Teams auf jeder Stufe, je Dimension | Teams je Stufe | Selbstbewertungen, aggregiert | Kontinuierliche Verbesserung; Governance | Sichtbare Arbeit | Zweimal im Jahr |
| Verbesserungsmaßnahmen aus Bewertungen | Anteil der vereinbarten nächsten Schritte, die abgeschlossen, mit Begründung fallengelassen oder noch in Arbeit sind | geschlossene oder begründet ausgeräumte Maßnahmen / vereinbarte Maßnahmen | Prozent | Verbesserungsregister | Kontinuierliche Verbesserung | Kleine Experimente | Vierteljährlich |
| Entscheidungsbeleg | Anteil der beprobten Kennzahlen, bei denen das Team eine Entscheidung oder bewusste Wahl nennen kann, die die Kennzahl im letzten Quartal informierte | Kennzahlen mit benannter Entscheidung / beprobte Kennzahlen | Prozent | Teaminterviews; Review-Notizen | Kontinuierliche Verbesserung | Beleg statt Zeremonie | Vierteljährlich |
| Vertrauen in Definitionen und Daten | Zustimmung auf Teamebene, dass die Definitionen klar und die Daten richtig sind | Prozent Zustimmung in einer kurzen Teamumfrage; Rücklaufquote gezeigt | Prozent | Anonyme Teamumfrage | Wissensmanagement; Informationsmanagement | Gemeinsames Verständnis | Zweimal im Jahr |
| Zeit bis zur nächsten Stufe (beschreibend) | Verstrichene Zeit, bis ein Team eine Dimension um eine Stufe anhebt, wo es sich dafür entschied | mediane Monate vom vereinbarten Schritt bis zur Neubewertung des Teams | Monate | Bewertungshistorie | Kontinuierliche Verbesserung | Nachhaltiges Tempo | Jährlich |
| Last der Bewertung | Stunden, die die Bewertung je Team braucht | mediane Stunden je Team | Stunden | Zeitschätzungen der Teams | Kontinuierliche Verbesserung | Nachhaltiges Tempo | Zweimal im Jahr |

Teilnahme wird als Abschluss mit Diskussion gemessen, denn ein allein ausgefülltes Formular sagt wenig. Das Profil ist eine Spanne und wird nie zu einer einzigen Reifegradzahl gemittelt. Die Zeit bis zur nächsten Stufe ist beschreibend: Ein schneller Aufstieg kann aufgeblähte Selbstbewertung spiegeln, ein langsamer angemessene Sorgfalt. Die Last der Bewertung ist eine Prüfung der Bewertung selbst, die pro Team nicht mehr als ein oder zwei Stunden brauchen sollte.

## Empfehlungen

### Die Skala gut nutzen

**1. Definieren Sie die Dimensionen eines Kennzahlenprogramms.** Ein brauchbarer Satz hat sechs Dimensionen: (a) Fragen und Zweck, ob Kennzahlen Fragen beantworten, die Zielgruppen stellten; (b) Definitionen und Verantwortung, ob Kennzahlen schriftliche Definitionen und Eigner haben; (c) Daten und Werkzeuge, ob die Daten genau, aktuell und portabel sind; (d) Nutzung in Entscheidungen, ob Zahlen Entscheidungen informieren; (e) Vertrauen und Sicherheit, ob Menschen glauben, dass die Daten ihnen helfen; und (f) Review und Weiterentwicklung, ob sich das Programm selbst kürzt. Sechs genügen, um nützlich zu sein, und sind wenig genug, um in einer Stunde besprochen zu werden.

**2. Beschreiben Sie, wie jede Stufe aussieht.** Die Tabelle im Abschnitt „Reifegradmodell“ unten gibt kurze Beschreibungen für jede Dimension auf jeder Stufe. Behandeln Sie sie als Anstöße. Ein Team sollte die Formulierung an seinen eigenen Kontext anpassen und eigene Beispiele aufschreiben.

**3. Nicht mitteln.** Ein einzelner Gesamtwert verbirgt das Muster, das zählt. Ein Programm mit hoher Reife bei Werkzeugen und geringer bei Vertrauen ist in einer anderen Lage als eines mit dem Umgekehrten, und der nächste Schritt unterscheidet sich. Zeigen Sie das Profil.

### Mit den Teams bewerten und nicht an ihnen

**4. Machen Sie ein Gespräch von einer Stunde daraus.** Bringen Sie ein Team mit der Tabelle zusammen. Bitten Sie jede Person, privat zu markieren, wo sie das Team in jeder Dimension sieht, und vergleichen Sie dann. Besprechen Sie Unterschiede, denn sie offenbaren unterschiedliche Erfahrungen mit demselben Programm. Einigen Sie sich auf eine Teamsicht, erfassen Sie den Beleg dahinter und wählen Sie einen oder zwei nächste Schritte.

**5. Bitten Sie um Belege.** Fragen Sie für jede beanspruchte Stufe nach einem Beispiel. „Wir nutzen die Zahlen in Entscheidungen“ lädt zur Frage „Welche Entscheidungen im letzten Quartal?“ ein. Nutzen Sie beprobte Kennzahlen und Interviews zur Prüfung. Das respektiert Menschen und hält die Bewertung davon ab, in Wunschdenken abzugleiten.

**6. Lassen Sie die Ergebnisse beim Team.** Das Profil eines Teams gehört dem Team. Das Programm teilt aggregierte Spannen und gemeinsame Themen, keine Rangliste. Machen Sie klar, dass die Bewertung weder Finanzierung noch Ansehen noch Beurteilungen beeinflusst. Tut sie es, blähen Teams sie auf, und der Wert geht verloren (siehe Thema 11.3, Kennzahlen einführen, ohne Angst zu erzeugen).

### Nächste Schritte wählen

**7. Wählen Sie die Dimension, die die anderen begrenzt.** Vertrauen und Sicherheit begrenzen oft alles andere: Ohne sie sind Daten verzerrt und Entscheidungen verdächtig. Definitionen und Verantwortung begrenzen oft Daten und Nutzung. Ein häufiges Muster ist, zuerst Vertrauen und Definitionen zu stärken, dann Daten, dann Nutzung und Review. Suchen Sie die Dimension, in der eine kleine Verbesserung die anderen freisetzen würde.

**8. Setzen Sie einen kleinen, konkreten Schritt.** Ein nächster Schritt sollte einer sein, den ein Team in einem Quartal abschließen und erkennen kann: „eine Charta vereinbaren“, „Definitionen für unsere vier Kennzahlen schreiben“, „zwei Feeds automatisieren“, „ein monatliches Review halten, in dem wir Entscheidungen erfassen“. Meiden Sie Schritte wie „Stufe 4 erreichen“. Stufen beschreiben einen Zustand, und Schritte beschreiben Arbeit.

**9. Verknüpfen Sie Schritte mit dem Verbesserungsregister.** Legen Sie die Maßnahmen an dieselbe Stelle wie andere Verbesserungsarbeit, mit Eignern und Daten, und überprüfen Sie den Fortschritt im regelmäßigen Verbesserungsgespräch (siehe Thema 9.5, Kennzahlen für kontinuierliche Verbesserung). Ein Schritt, der nicht finanziert oder terminiert ist, geschieht nicht.

### Ehrlich und leicht bleiben

**10. Kalibrieren Sie über Teams, ohne sie zu ordnen.** Halten Sie eine kurze Sitzung, in der Teams Beispiele teilen, was sie in einer Dimension Stufe 3 nennen. Besprechen Sie Unterschiede der Maßstäbe. Ziel ist ein gemeinsames Verständnis, nicht gleiche Werte. Rotieren Sie die Moderation und laden Sie ein Team von außerhalb des Programms ein, die Formulierung zu hinterfragen.

**11. Bewerten Sie nach einem Rhythmus und als Reaktion auf Ereignisse neu.** Zweimal im Jahr genügt für die meisten Programme. Bewerten Sie nach einer Reorganisation, einem Werkzeugwechsel oder einem Verstoß gegen die Charta neu, denn diese können Vertrauen in beide Richtungen verschieben. Achten Sie auf Rückfall und behandeln Sie ihn als Information, nicht als Versagen.

**12. Mustern Sie das Modell selbst aus oder überarbeiten Sie es.** Fragen Sie jedes Jahr die Teams, ob die Dimensionen und Stufenbeschreibungen noch passen. Formulieren Sie um, was verwirrt, und entfernen Sie, was niemand nutzt. Ein Modell, das sich fünf Jahre nicht geändert hat, beschreibt womöglich ein Programm, das nicht mehr existiert.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Teilnahme an der Bewertung | Formulare ausfüllen, um eine Quote zu erfüllen; eine Person füllt für das Team aus | Eine Teamdiskussion verlangen; um den Beleg hinter jeder Behauptung bitten |
| Profil nach Dimension | Stufen aufblähen, um gut auszusehen; tiefstapeln, um Hilfe zu bekommen | Nicht an Finanzierung oder Ansehen binden; um Belege bitten; offen kalibrieren |
| Verbesserungsmaßnahmen aus Bewertungen | Triviale Schritte wählen, um zu schließen; schließen, ohne zu tun | Größe und Wert der Schritte überprüfen; Ergebnisse bei der nächsten Bewertung prüfen |
| Entscheidungsbeleg | Entscheidungen nachträglich erfinden; Entscheidungen ohne Folgen auflisten | Nach Datum und beteiligten Menschen fragen; „entschied, nichts zu tun“ als Entscheidung akzeptieren |
| Vertrauen in Definitionen und Daten | Befragte coachen; niedriger Rücklauf, der Unzufriedenheit verbirgt | Anonymität und Mindestgruppengröße; Rücklaufquoten zeigen; direkt mit Teams sprechen |
| Zeit bis zur nächsten Stufe (beschreibend) | Fortschrittsbehauptungen überstürzen; Rückfall verbergen | Beschreibend halten; mit Belegen lesen; Rückfälle ohne Strafe erfassen |
| Last der Bewertung | Die Diskussion überspringen, um Stunden zu kürzen | Stunden zusammen mit Teilnahme und Belegqualität verfolgen |

Ein gesunder Befund zeigt ein Profil mit einer Mischung von Stufen, bei dem Vertrauen und Definitionen vor Werkzeugen und Politur steigen, nächste Schritte klein und abgeschlossen sind, Entscheidungen, die Teams benennen können, und eine ehrliche Aufzeichnung gelegentlichen Rückfalls.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Selbstbewertung durch das Team | Ehrlich, besessen, schnell | Subjektiv; braucht Kalibrierung |
| Externe Bewertung | Konsistent; unabhängig | Teuer; lädt zum Aufführen für den Bewerter ein |
| Einzelner Gesamtwert | Leicht zu kommunizieren | Verbirgt das Muster; lädt zu Zielen ein |
| Profil nach Dimension | Zeigt, wo zu handeln ist | Schwerer zusammenzufassen |
| Jährliche Bewertung | Leicht | Langsam beim Bemerken von Rückfall |
| Zweimal jährlich mit Ereignisauslösern | Reaktionsfähig | Mehr Aufwand |
| An Finanzierung gebunden | Gewinnt Aufmerksamkeit | Aufblähung und Manipulation |
| Von Finanzierung getrennt gehalten | Ehrliche Daten | Braucht andere Wege, Unterstützung zu gewinnen |

Die Antwort in Worten ist, eine leichte Selbstbewertung mit Belegen durchzuführen, Profile und Spannen zu berichten, Ergebnisse bei den Teams zu lassen und nächste Schritte an das Verbesserungsregister zu binden, nicht an Finanzierung oder Ansehen.

## Fragen für die Diskussion im Team

**1. Welche der sechs Dimensionen würden wir als unsere schwächste bezeichnen, und was lässt uns das sagen?**
Lassen Sie jede Person privat eine wählen und dann teilen. Die Moderation sollte nach einem jüngeren Beispiel fragen. Suchen Sie Muster und einigen Sie sich, welche Dimension die anderen begrenzt.

**2. Können wir eine Entscheidung des letzten Quartals nennen, die eine Kennzahl veränderte?**
Listen Sie sie auf. Ist die Liste kurz, fragen Sie warum. Besprechen Sie, ob das Problem die Kennzahlen, die Daten oder die Gewohnheit des Hinsehens ist.

**3. Wo würden wir uns bei Vertrauen und Sicherheit einordnen, und woher wissen wir es?**
Schauen Sie auf Meldungen von Beinahe-Vorfällen, Anfechtungen und Umfrageergebnisse. Vergleichen Sie mit dem, wie Menschen in der Praxis reden. Einigen Sie sich auf eine Sache, die Führungskräfte tun könnten, um es zu bewegen.

**4. Wie sähe ein kleiner, konkreter nächster Schritt für unsere schwächste Dimension aus?**
Entwerfen Sie ihn in einem Satz, mit Eigner und Datum. Prüfen Sie, dass er in einem Quartal abgeschlossen werden kann. Einigen Sie sich, woran wir erkennen, dass er wirkte.

**5. Was würde diese Bewertung wie eine Bedrohung wirken lassen, und wie verhindern wir es?**
Besprechen Sie Nutzungen der Ergebnisse, die Menschen fürchten würden. Schreiben Sie auf, wofür die Ergebnisse nie genutzt werden. Prüfen Sie, dass die Programmleitung zustimmt.

**6. Gibt es eine Stufe, die wir nicht erreichen müssen?**
Denken Sie an unsere Größe, Risiken und Ziele. Beschreiben Sie eine Stufe, die vorerst gut genug ist, und ein Signal, das uns sagen würde, neu zu prüfen.

## Vier Perspektiven

### Produkt- und Lieferteams

Teams bewerten sich selbst, wählen den nächsten Schritt und behalten ihre Ergebnisse. Sie sollten das Gespräch nutzen, um Unterschiede der Erfahrung zutage zu bringen, um Belege bitten und Schritte klein genug setzen, um sie abzuschließen. Sie sollten jedem Versuch widersprechen, das Profil in eine Rangliste zu verwandeln.

### Service- und Betriebsteams

Betriebsteams tragen schwere Daten- und Incident-Lasten und sehen, wo das Programm sie stützt oder belastet. Sie sollten vermerken, wo Werkzeuge oder Definitionen ihre Arbeit blockieren, darum bitten, dass Bereitschafts- und Incident-Daten mit Sorgfalt behandelt werden, und offenes Feedback zur Last der Bewertung geben.

### Führung und Governance

Führungskräfte sponsern das Programm und erhalten das aggregierte Bild. Sie sollten nach Profilen und gemeinsamen Themen fragen, widerstehen, einen einzelnen Wert zu verlangen, die Schritte finanzieren, die Teams wählen, und Finanzierung oder Ansehen nicht an die Bewertung binden. Sie sollten das Verhalten auch vorleben, indem sie Entscheidungen beschreiben, die Kennzahlen informierten.

### Kunden und Nutzer

Kunden und Nutzer profitieren, wenn das Programm Services verbessert und wenn ihr Feedback Teil der Kennzahlen ist. Wo sie Partner sind, können sie an der Bewertung von Kennzahlen teilnehmen, die sie betreffen, etwa der Nützlichkeit von Zufriedenheitsumfragen, und an der Überprüfung, wie ihre Daten genutzt werden.

## In der Praxis: ein Beispiel aus dem Service-Management

Eine nationale Versicherungsgruppe hat 20 Liefer- und Supportteams und ein Kennzahlenprogramm, das seit 18 Monaten läuft. Der Sponsor bittet um „einen Reifegradwert für jedes Team“, um Investition zu lenken. Die Programmleiterin ist vorsichtig und erinnert sich, wie eine frühere Bewertung im Prüfstil Teams dazu brachte, Ordner mit Dokumenten vorzubereiten. Die Zahlen unten sind illustrativ.

Die Programmleiterin schlägt stattdessen ein Profil über sechs Dimensionen vor, von Teams in einem einstündigen Gespräch mit einer Moderation von außerhalb des Teams bewertet, mit Ergebnissen, die das Team behält. Sie sagt dem Sponsor, dass das Programm Spannen und gemeinsame Themen berichten wird und dass das Profil keines Teams mit Finanzierung verknüpft wird. Der Sponsor stimmt zu, und die Entscheidung wird festgehalten.

Neunzehn von 20 Teams schließen die Bewertung mit einer Diskussion ab, die Teilnahme beträgt also 95 Prozent. Das Profil zeigt eine Spanne: Bei Fragen und Zweck liegen die meisten Teams auf Stufe 2 oder 3; bei Definitionen und Verantwortung gibt es eine Streuung von 1 bis 4; bei Daten und Werkzeugen meist 3; bei Nutzung in Entscheidungen meist 2; bei Vertrauen und Sicherheit eine Teilung zwischen 2 und 4; und bei Review und Weiterentwicklung meist 1 oder 2. Die Belegprüfungen sind aufschlussreich. Elf Teams beanspruchten Stufe 3 für die Nutzung in Entscheidungen, aber gefragt, eine Entscheidung des letzten Quartals zu nennen, die eine Kennzahl informierte, konnten es nur sechs. Die Programmleiterin vermerkt das ohne Urteil, und es wird zu einem Thema: Die Teams haben Dashboards und halten selten Reviews, die Entscheidungen erfassen.

Die nächsten Schritte sind klein. Acht Teams wählen ein monatliches Review mit Entscheidungsprotokoll. Vier wählen, Definitionen für ihre Kennzahlen zu schreiben. Drei wählen, eine Charta zu vereinbaren. Sechs Monate später sind 14 von 17 vereinbarten Schritten erledigt, einer mit Begründung fallengelassen und zwei in Arbeit. Eine wiederholte Bewertung zeigt den Entscheidungsbeleg von 38 auf 71 Prozent der beprobten Kennzahlen steigen und die Vertrauensumfrage von 54 auf 67 Prozent Zustimmung. Ein Team fällt nach einer Reorganisation beim Vertrauen zurück, und die Moderation erfasst es als Information, nicht als Versagen. Ein Jahr später bittet der Sponsor erneut um einen einzelnen Wert für den Jahresbericht. Die Programmleiterin bietet ein einseitiges Profil mit Spannen, drei Themen und den abgeschlossenen Verbesserungsschritten an. Der Sponsor akzeptiert, und der Bericht sagt klar, dass die Skala ein Gesprächswerkzeug ist.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Nutzen Sie das Modell als Gespräch in regelmäßigen Verbesserungsreviews, wobei das Team seinen eigenen nächsten kleinen Schritt wählt. Zu beachten ist, dass ein an einer Wand angezeigter Reifegradwert zum Ziel wird.

### KI

Fügen Sie der Bewertung die KI-Linse hinzu: ob KI-Nutzungen inventarisiert sind, ob KI-gestützte Kennzahlen Qualitätspaare haben und ob Menschen von KI abgeleitete Zahlen anfechten können. Zu beachten ist, dass eine von KI geschriebene Selbstbewertung selbstsicher klingen und lokale Fakten verpassen kann; das Team muss also seine eigene schreiben.

### Automatisierung

Automatisieren Sie die Erfassung von Belegen für die Bewertung, etwa den Anteil der Kennzahlen mit Eignern und Leitplanken, lassen Sie sie aber von Menschen interpretieren. Zu beachten ist, dass automatisch gesammelter Beleg unvollständig sein kann; sagen Sie also, was er ausschließt.

### Analytik

Zeigen Sie das Profil über die Dimensionen, nicht einen einzelnen Wert, mit dem Beleg hinter jeder Bewertung. Die Entscheidung, die dies untermauert, ist, was als Nächstes zu verbessern ist. Zu beachten ist, dass Bewertungen Urteile der Bewerteten sind; vermeiden Sie also, Teams daran zu vergleichen.

## Branchenperspektive

**Startup.** Eine förmliche Bewertung ist wahrscheinlich übertrieben. Ein kurzes Gespräch zweimal im Jahr über die sechs Dimensionen, mit einem oder zwei kleinen Schritten, genügt. Achten Sie auf die Furcht, dass Kennzahlen zur Beurteilung genutzt werden, denn kleine Teams spüren das stark.

**Kleinunternehmen.** Nutzen Sie die Dimensionen als Checkliste für ein Gespräch mit dem Inhaber und dem Personal. Fragen Sie, ob die wenigen Kennzahlen, die Sie führen, echte Fragen beantworten, ob Menschen wissen, was sie bedeuten, und ob sie genutzt werden. Wählen Sie einen Schritt. Verwenden Sie nicht mehr als eine Stunde.

**Großunternehmen.** Größe braucht einen leichten, konsistenten Prozess: dieselben Dimensionen, Selbstbewertung mit Moderation, Kalibrierungssitzungen und aggregierte Profile. Widerstehen Sie einer zentralen Bewertungsstelle. Verknüpfen Sie nächste Schritte mit Verbesserungsregistern und berichten Sie Spannen und Themen an Sponsoren. Hüten Sie sich davor, dass die Skala zur Compliance-Übung wird.

**Behörden und öffentlicher Sektor.** Prüf- und Aufsichtsstellen können um Reifegradwerte bitten. Seien Sie klar über den Unterschied zwischen diesem internen Gesprächswerkzeug und jedem förmlichen Rahmenwerk. Lassen Sie Teamergebnisse bei den Teams, geben Sie der Aufsicht Aggregate und seien Sie transparent darüber, was die Skala ist und was nicht (siehe Thema 8.3, Kennzahlen für Compliance und Audit).

## Business Case: Motive, ROI und TCO

Die Kosten sind klein: ein oder zwei Stunden je Team zweimal im Jahr, eine Moderation, etwas Analyse und der Aufwand, die Verbesserungsschritte durchzuführen. Die größeren Kosten entstehen, wenn das Modell missbraucht wird, mit Beratern, Bewertungsstellen und Ordnern voller Belege.

Der Ertrag kommt aus besserer Ausrichtung des Aufwands. Statt Investition über alle Dimensionen zu streuen, findet das Programm die begrenzende Dimension und geht sie an. Weitere Erträge sind früheres Erkennen von Rückfall, gemeinsame Sprache zwischen Teams und Verbesserungsschritte, die Teams wählten und besitzen. Bauen Sie den Business Case aus Ihren eigenen Daten: abgeschlossene Verbesserungsschritte, Änderungen im Entscheidungsbeleg und in den Ergebnissen der Vertrauensumfrage und der Aufwand der Bewertung. Vermeiden Sie, veröffentlichte Behauptungen zum Ertrag von Reifegradverbesserung ohne nachvollziehbare Quelle und Relevanz für Ihren Kontext zu zitieren (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Das Reifegrad-Abzeichen.** Die Stufe wird zum Ziel. Nutzen Sie sie als Gespräch, mit Belegen.
- **Eine Gesamtzahl.** Das Muster geht verloren, und Ziele erscheinen. Zeigen Sie das Profil.
- **Bewertung durch Prüfer.** Teams bereiten Dokumente vor, um aufzuführen. Nutzen Sie Selbstbewertung mit Moderation.
- **Den Wert an Finanzierung binden.** Aufblähung folgt. Halten Sie die Bewertung getrennt.
- **Der obersten Stufe nachjagen.** Nicht jedes Programm braucht Orchestrieren. Wählen Sie, was passt.
- **Bewerten und vergessen.** Es folgen keine Schritte. Verknüpfen Sie Schritte mit dem Verbesserungsregister.
- **Zu lange Bewertung.** Die Last wächst, und die Qualität sinkt. Halten Sie sie bei einer Stunde.
- **Rückfall ignorieren.** Programme rutschen nach Wandel zurück. Bewerten Sie nach einem Rhythmus und nach Ereignissen neu.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Fragen und Zweck | Kennzahlen erfasst, weil Daten existieren | Einige Teams nennen die Fragen, die sie stellen | Zielgruppen und Fragen aufgeschrieben; Kennzahlen ihnen zugeordnet | Abdeckung der Fragen überprüft; unbeantwortete Fragen treiben neue Kennzahlen | Zielgruppen, einschließlich Kunden und Lieferanten, prägen die Kennzahlen; Fragen entwickeln sich mit den Services |
| Definitionen und Verantwortung | Definitionen variieren je Person | Einige geschrieben; informelle Eigner | Katalog mit Definition, Quelle, Eigner und Grenzen je Kennzahl | Vollständigkeit der Definitionen und Anfechtungen gesteuert | Definitionen über Teams und Lieferanten gemeinsam besessen; überarbeitet, wenn sie Entscheidungen nicht mehr informieren |
| Daten und Werkzeuge | Manuell und fragil | Einige automatisierte Feeds | Getestete Pipelines, gemeinsamer Speicher, portable Daten | Zuverlässigkeit, Abgleich und Ausstiegsbereitschaft gesteuert | Föderierte Pipelines mit geteilten Verträgen; Quellen aus Feedback verbessert |
| Nutzung in Entscheidungen | Zahlen angezeigt, selten genutzt | In einigen Reviews genutzt | Regelmäßige Reviews, die Entscheidungen erfassen | Entscheidungsbeleg verfolgt und danach gehandelt | Entscheidungen teamübergreifend mit Ergebnissen verknüpft; Lernen geteilt |
| Vertrauen und Sicherheit | Furcht oder Gleichgültigkeit | Mündliche Zusicherungen | Schriftliche Charta; Sichten auf Einzelne aus; Sicherheitsumfrage | Verstöße offen überprüft; Offenheitssignale gesteuert | Vertrauen ist Routine; Programm von Personal und Partnern geprägt |
| Review und Weiterentwicklung | Keine | Gelegentliche Bereinigung | Periodisches Review mit Teams; Ausmusterungsregel | Schritte aus Bewertungen finanziert und abgeschlossen | Programm verbessert sich fortlaufend, mit Änderungen von allen |

## Checkliste

- [ ] Die sechs Dimensionen sind vereinbart, und die Stufenbeschreibungen sind an unseren Kontext angepasst.
- [ ] Jedes Team bewertet sich in einer Diskussion von etwa einer Stunde mit einer Moderation selbst.
- [ ] Jede beanspruchte Stufe ist durch ein Beispiel oder eine Stichprobenprüfung gestützt.
- [ ] Ergebnisse werden als Profile und Spannen gezeigt, nie als ein gemittelter Wert oder eine Rangliste.
- [ ] Die Ergebnisse eines Teams bleiben beim Team, und das Aggregat wird mit Sponsoren geteilt.
- [ ] Die Bewertung ist nicht an Finanzierung, Ansehen oder Leistungsbeurteilungen gebunden, und das ist aufgeschrieben.
- [ ] Jedes Team vereinbart einen oder zwei kleine nächste Schritte, mit Eigner und Datum.
- [ ] Nächste Schritte werden im Verbesserungsregister verfolgt.
- [ ] Neubewertung geschieht mindestens zweimal im Jahr und nach größeren Ereignissen.
- [ ] Das Modell selbst wird jährlich mit den Teams überprüft.

## KI-Prompts

**Ein Selbstbewertungsgespräch vorbereiten.**

```text
Prepare a one-hour facilitation plan for a team's self-assessment of its metrics
program across six dimensions: questions and purpose, definitions and ownership,
data and tooling, use in decisions, trust and safety, and review and evolution.
Use five levels: Initiate, Develop, Standardize, Manage, Orchestrate. Include
private marking, comparison, evidence questions, and agreeing one or two small
next steps. Do not produce a score. List your assumptions.
```

**Eine schwache Dimension in Schritte verwandeln.**

```text
Our team rates itself at Level [n] on [dimension] of its metrics program. Evidence:
[paste]. Suggest three small steps, each finishable in one quarter, that could move
us toward Level [n+1]. For each step, describe the owner, the effort, the likely
benefit, and how we would know it worked. Do not promise outcomes. List your
assumptions and risks.
```

**Den Beleg für eine beanspruchte Stufe prüfen.**

```text
A team claims Level [n] on [dimension] and gives this evidence: [paste]. Act as a
curious colleague. List questions to test whether the evidence supports the claim,
what examples would be convincing, and what signs would suggest the claim is
optimistic. Do not judge the team. List your assumptions.
```

**Profile ohne Rangfolge zusammenfassen.**

```text
Here are aggregated counts of teams at each level for each dimension: [paste]. Write
a half-page summary for sponsors that describes the range, three common themes, and
the improvement steps teams chose. Do not rank teams, produce a single score, or
claim causes without evidence. List caveats about self-assessment.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um Programmkennzahlen den Reifegrad-Dimensionen und ihren gekoppelten Leitplanken zuzuordnen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine Reifegradbewertung Profile berichtet, Ergebnisse bei den Teams hält und einen einzelnen Wert meidet.

## Wichtigste Erkenntnisse

- Nutzen Sie die gemeinsame fünfstufige Skala als Gesprächswerkzeug, nie als Abzeichen, Rangliste oder Zertifizierung.
- Berichten Sie ein Profil über sechs Dimensionen und nicht einen gemittelten Wert.
- Bewerten Sie mit den Teams, bitten Sie um Belege und lassen Sie die Ergebnisse jedes Teams beim Team.
- Wählen Sie kleine nächste Schritte in der Dimension, die die anderen begrenzt, oft Vertrauen und Definitionen.
- Verfolgen Sie Schritte im Verbesserungsregister und bewerten Sie regelmäßig neu, denn Programme fallen zurück.
- Höher ist nicht immer besser, und Ergebnisse zählen mehr als Stufen.

## Quellen und weiterführende Literatur

1. Paulk, M., et al., *Capability Maturity Model for Software, Version 1.1*, Software Engineering Institute, Carnegie Mellon University, 1993.
2. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
3. ISO/IEC 33001, *Information technology: Process assessment: Concepts and terminology*, International Organization for Standardization, 2015.
4. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
5. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model).
8. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
9. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
