# ITIL 5: Messung und Wertergebnisse

**ITIL 5 verbindet, wie sein Eigentümer es beschreibt, Strategie, Lieferung und messbare Ergebnisse und deckt KI-gestützte Umgebungen ab. Messen Sie deshalb, ob jeder Service, jedes Produkt und jedes KI-System einen benannten Eigner und ein schriftliches Ergebnis mit Belegen hat, und behandeln Sie jedes Detail zu ITIL 5, das Sie nicht beim Eigentümer überprüfen können, als unbestätigt.**

## Überblick und Motivation

[ITIL](https://en.wikipedia.org/wiki/ITIL) ist das bekannteste Rahmenwerk für [IT-Service-Management](https://en.wikipedia.org/wiki/IT_service_management) (ITSM). Sein Eigentümer PeopleCert veröffentlicht die aktuelle Version, und eine neue Version des Rahmenwerks, ITIL 5, wurde 2026 angekündigt. Teams, die Services betreiben, fragen, was eine neue Version am Messen ändert. Die ehrliche Antwort beginnt damit, was sich überprüfen lässt und was nicht.

**Was überprüft ist (Stand 20. Oktober 2026).** Die eigene Zertifizierungsseite von PeopleCert zur ITIL Foundation Bridge (Version 5) beschreibt die Aktualisierung als Abdeckung von digitalem Produkt- und Servicemanagement über den gesamten Lebenszyklus, einschließlich der Frage, wie ITIL „modern digital and AI-enabled environments“ (moderne digitale und KI-gestützte Umgebungen) widerspiegelt. Sie nennt außerdem einen „enhanced value creation approach“ (erweiterten Ansatz der Wertschöpfung), der Strategie, Lieferung und messbare Ergebnisse über das Stakeholder-Ökosystem hinweg verbindet, sowie den Umgang mit digitaler und KI-Komplexität. Die Seite gibt an, dass die Bridge für Inhaber einer ITIL-4-Zertifizierung gedacht ist. Ein Veröffentlichungsdatum für ITIL 5 selbst nennt sie nicht.

**Was nicht überprüft ist.** Praktiknamen und Struktur, wie viel von ITIL 4 übernommen wird, formale Veröffentlichungsdaten und ob es eine eigene Veröffentlichung zur KI-Governance gibt. Seiten von Schulungs- und Beratungsanbietern nennen dazu Zahlen und Namen. Sie widersprechen einander, deshalb wiederholt dieses Buch sie nicht. Prüfen Sie die Seiten des Eigentümers vor jeder Entscheidung erneut und kennzeichnen Sie jede Aussage mit „in ITIL 4“ oder „in ITIL 5“.

Aus der Formulierung des Eigentümers folgen drei Themen, und jedes hat eine Konsequenz für das Messen. Eine Produktorientierung bedeutet, dass ein Service von der Idee bis zur Stilllegung besessen wird, also messen Sie Verantwortung. KI in der Umgebung bedeutet, dass KI-Systeme Governance brauchen, also messen Sie Inventar, Aufsicht und Qualität. Wert als messbares Ergebnis bedeutet, dass ein Service angeben sollte, was für jemanden besser ist, wenn er funktioniert, also messen Sie, ob das Ergebnis aufgeschrieben ist und ob es Belege dafür gibt, dass es sich bewegt hat.

Dieses Thema definiert keine ITIL-5-Kennzahlen, weil der Eigentümer keine Kennzahlenmenge veröffentlicht hat, die dieses Buch überprüfen kann. Es bietet Messgrößen für die Bereitschaft einer Serviceorganisation, gemessen zu werden: ob die Grundlagen existieren, die jede Version von ITIL und jede ehrliche Messung brauchen wird. Die Messgrößen haben dieselbe Form wie im Rest des Buches, jede mit Manipulationsvektor und Leitplanke (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Hier verwendete Begriffe. Ein **Service** ist ein Mittel, gemeinsame Wertschöpfung zu ermöglichen, indem Ergebnisse unterstützt werden, die der Kunde will. Ein **digitales Produkt** ist ein softwarebasiertes Angebot mit eigenem Lebenszyklus und Eigner. Eine **Bestandskarte** (Estate Map) ist eine Liste der Services, Produkte, Plattformen und KI-Systeme, die eine Organisation betreibt, jedes mit einem Eigner. Ein **Ergebnis** ist eine Veränderung im Leben eines Kunden oder in der Gesundheit eines Services (siehe Thema 1.3, Ergebnisse vor Output: Auswählen, was gemessen wird).

## Leitprinzipien

- **Prüfen, bevor Sie zitieren.** Eine Aussage über ITIL 5 ist nur überprüft, wenn die eigene Veröffentlichung des Eigentümers sie trifft. Alles andere ist unbestätigt und als solches gekennzeichnet.
- **Die Grundlagen messen, nicht das Rahmenwerk.** Verantwortung, Ergebnisse und KI-Aufsicht zählen unter jeder Version und sind heute messbar.
- **Ergebnisse vor Output.** Der Wert eines Services ist eine Veränderung für jemanden, also schlagen ein schriftliches Ergebnis und Belege der Veränderung Zählungen von Tickets oder Releases.
- **Jedes Produkt, jeden Service und jedes KI-System besitzen.** Ein benannter Eigner ist das Minimum für Governance, Überprüfung und Stilllegung.
- **Jede Messgröße mit einer Leitplanke koppeln.** Abdeckungszahlen sind auf dem Papier leicht zu erfüllen, also koppeln Sie jede mit einer Prüfung, dass der Inhalt echt ist.
- **Nicht auf das Rahmenwerk warten.** Beginnen Sie mit der Bestandskarte und einer kleinen Menge von Messgrößen und passen Sie an, wenn der Eigentümer mehr veröffentlicht.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Eigner-Abdeckung des Bestands | Anteil der gelisteten Services, digitalen Produkte, Plattformen und KI-Systeme mit einem benannten, aktiven Eigner | Elemente mit einem in den letzten 12 Monaten bestätigten benannten Eigner / Elemente auf der Bestandskarte, gezählt am Periodenende | Prozent | Servicekatalog, Konfigurationsdatensätze und die Bestandskarte | Servicekatalog-Management; Governance | Product Owner und Team-Charta | Vierteljährlich |
| Abdeckung durch Ergebnisaussagen | Anteil der Services und Produkte mit einem schriftlichen Ergebnis und mindestens einem benannten Belegsignal | Services und Produkte mit einer in den letzten 12 Monaten überprüften Ergebnisaussage und einem Belegsignal / Services und Produkte auf der Bestandskarte | Prozent | Servicekatalog und Review-Notizen | Service-Level-Management; kontinuierliche Verbesserung | Produktziele und Akzeptanzkriterien | Vierteljährlich |
| Alter der Ergebnisbelege | Alter der jüngsten Belegprüfung für jedes Ergebnis | Median und 85. Perzentil von (Periodenenddatum minus Datum der letzten Belegprüfung) über die Ergebnisse | Tage | Review-Protokoll | Messung und Berichterstattung | Regelmäßiges Review mit Stakeholdern | Vierteljährlich |
| Abdeckung des KI-System-Inventars | Anteil der bekannten KI-gestützten Funktionen und Systeme mit einem Eigner, einem menschlichen Prüfpunkt und einem Eintrag im Risikoregister | KI-Systeme mit allen dreien / von der jüngsten Entdeckungsrunde gefundene KI-Systeme | Prozent | KI-Inventar und Risikoregister | Risikomanagement; Governance | Definition of Done für KI-Funktionen | Vierteljährlich |
| Verifizierungsrate von Aussagen | Anteil der in Plänen und Richtlinien verwendeten ITIL-5-Aussagen, die auf die eigene Veröffentlichung des Eigentümers zurückgeführt sind | Aussagen mit datierter Quellenangabe des Eigentümers / im Zeitraum in Entscheidungsdokumenten verwendete ITIL-5-Aussagen | Prozent | Verifizierungsprotokoll | Wissensmanagement; Governance | n. z., eine Praktik auf Organisationsebene ohne direktes agiles Gegenstück | Vierteljährlich |

Die Formeln zählen Elemente am Ende des Zeitraums. „Aktiver Eigner“ bedeutet eine Person oder Rolle, die die Verantwortung schriftlich bestätigt hat, nicht ein aus einem alten Datensatz kopierter Name. Die Verifizierungsrate von Aussagen schließt Aussagen über ITIL 4 aus, das breit dokumentiert ist.

## Empfehlungen

### Mit der Bestandskarte beginnen

**1. Bauen Sie zuerst eine Liste.** Listen Sie jeden Service, jedes digitale Produkt, jede Plattform und jedes KI-System, das Sie betreiben, mit Namen und Eigner. Rechnen Sie mit Überraschungen: Schattenwerkzeuge, in Anbieterprodukten standardmäßig eingeschaltete Funktionen und Plattformen ohne Eigner. Die Karte ist der Nenner für jede andere Messgröße hier.

**2. Definieren Sie „Eigner“ in einem Satz.** Ein Eigner ist verantwortlich für das Ergebnis des Elements, seine Änderung, seine Kosten und seine Stilllegung. Ein Team-Verteiler ist kein Eigner. Entscheiden Sie, ob ein Produkt und der Service, der es stützt, einen Eigner teilen, und schreiben Sie die Regel auf.

**3. Entdecken Sie KI-Systeme aktiv.** Durchsuchen Sie Verträge, Werkzeugeinstellungen und Cloud-Konten nach KI-Funktionen und fragen Sie Teams, was sie eingeschaltet haben. Eine einmalige Umfrage veraltet, also planen Sie eine regelmäßige Runde und vergleichen Sie sie mit dem Inventar.

### Ergebnisse messen

**4. Schreiben Sie einen Ergebnissatz pro Service.** Der Satz sagt in den Worten des Kunden, was für einen benannten Kunden besser ist, wenn der Service funktioniert. „Verfügbarkeit von 99,9 Prozent“ ist ein Ziel, kein Ergebnis. Hat der Service kein Ergebnis, fragen Sie, ob er existieren sollte.

**5. Benennen Sie das Belegsignal.** Nennen Sie für jedes Ergebnis die Daten, die zeigen würden, dass es sich bewegt, etwa die Rate wiederholter Kontakte, Aufgabenerfolg oder Akzeptanz. Bevorzugen Sie Signale, die Sie bereits erheben (siehe Thema 6.5, Wertrealisierung und Geschäftsergebnisse). Existiert kein Signal, halten Sie das als Befund fest.

**6. Berichten Sie das Alter der Belege.** Ein vor zwei Jahren überprüftes Ergebnis ist eine Behauptung, kein Beleg. Zeigen Sie Median und ein hohes Perzentil des Belegalters und zeigen Sie das älteste. Das lässt sich schwer manipulieren, ohne die Prüfung durchzuführen.

### KI-Messung steuern

**7. Koppeln Sie KI-Aktivität mit einer Qualitätsmessgröße.** Wo KI bei Tickets, Changes oder Wissen assistiert, berichten Sie eine Nutzungsmessgröße neben einer Qualitätsmessgröße, etwa dem Anteil der KI-Entwürfe, die ein Mensch wesentlich geändert hat, oder der Rate wiederholter Kontakte bei von KI beantworteten Anfragen (siehe Thema 10.2, KI-gestützte Arbeit messen). Das Paar zeigt Nutzen, was Nutzung allein nicht kann.

**8. Verknüpfen Sie KI-Systeme mit dem Risikoregister.** Jedes KI-System erhält einen Eigner, einen menschlichen Prüfpunkt, ein Überprüfungsdatum und einen Eintrag im Risikoregister (siehe Thema 10.5, Kennzahlen für KI-Governance und -Risiken). Klären Sie das für Sie geltende Recht mit Ihrer Rechtsberatung, denn dieses Buch gibt keine Rechtsberatung.

### Die Aussagen ehrlich halten

**9. Führen Sie ein Verifizierungsprotokoll.** Halten Sie für jede ITIL-5-Aussage, die Ihre Pläne verwenden, die Quelle des Eigentümers fest, das Datum, an dem Sie sie gelesen haben, und ob sie überprüft ist. Überprüfen Sie das Protokoll vor jeder Budget- oder Richtlinienentscheidung, da sich die Veröffentlichung ändern kann.

**10. Lassen Sie ITIL-4-Messgrößen weiterlaufen.** Hören Sie nicht auf, Praktiken zu messen, die funktionieren, nur weil es eine neue Version gibt. Ändern Sie eine Messgröße, wenn sowohl die Anleitung des Eigentümers als auch Ihre eigenen Belege sagen, dass sie geändert werden muss, und markieren Sie die Änderung im Diagramm (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

**11. Machen Sie kleine Schritte.** Wählen Sie eine Messgröße aus der Tabelle, weisen Sie einen Eigner zu und lassen Sie sie ein Quartal laufen. Alle fünf auf einmal hinzuzufügen schafft ein Berichtsprogramm, bevor es irgendeinen Beleg dafür gibt, dass die Messgrößen helfen.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Eigner-Abdeckung des Bestands | Eine Führungskraft oder einen Verteiler als Eigner von allem benennen; schwierige Elemente aus der Karte weglassen | Bestätigung der Eigner durch den Eigner selbst und eine Entdeckungsrunde, die die Karte mit Verträgen und Cloud-Konten vergleicht |
| Abdeckung durch Ergebnisaussagen | Einen vagen Satz wie „Effizienz verbessern“ schreiben; ein Ergebnis über Services kopieren | Ergebnisse stichprobenartig mit Kunden prüfen und fragen, ob sie sie wiedererkennen; Alter der Ergebnisbelege |
| Alter der Ergebnisbelege | Das Überprüfungsdatum berühren, ohne zu überprüfen; nur leichte Ergebnisse überprüfen | Die Review-Notizen stichprobenartig lesen; den Anteil der Ergebnisse berichten, deren Signal sich tatsächlich bewegt hat oder flach blieb |
| Abdeckung des KI-System-Inventars | Nur Systeme zählen, die das Team zu melden beschließt; KI-Funktionen als gewöhnliche Software einstufen | Unabhängige Entdeckungsrunde; mit Anbieter- und Vertragsunterlagen vergleichen |
| Verifizierungsrate von Aussagen | Eine Anbieterseite als Eigentümer zitieren; eine Aussage als überprüft protokollieren, ohne die Quelle gelesen zu haben | Eine Stichprobe von Protokolleinträgen gegen die Quellseite prüfen; Regel, dass nur der Eigentümer als Quelle gilt |

Ein gesunder Befund ist eine Menge von Abdeckungszahlen, die langsam steigen, während der stichprobenartig geprüfte Inhalt besser wird: Ergebnisse, die Kunden wiedererkennen, Eigner, die ihren Service nennen können, und ein Verifizierungsprotokoll, das Aussagen von unbestätigt zu überprüft wandern oder fallen gelassen werden zeigt.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Abdeckungsmessgrößen (Eigner, Ergebnis, KI-Inventar) | Billig, konkret und jetzt verfügbar | Auf dem Papier leicht zu erfüllen; sagen ohne Stichprobe nichts über Qualität |
| Messgrößen für Ergebnisbelege | Verbinden Servicearbeit mit Wert, im Einklang mit der erklärten Betonung des Eigentümers | Langsam, verrauscht und abhängig von Daten, die es womöglich noch nicht gibt |
| Auf eine veröffentlichte ITIL-5-Kennzahlenmenge warten | Vermeidet Nacharbeit, falls der Eigentümer eine veröffentlicht | Verzögert Arbeit, die unter jeder Version nützlich ist; der Eigentümer veröffentlicht womöglich keine |
| Zusammenfassungen von Dritten folgen | Schnell und detailreich | Widersprechen einander und dem Eigentümer; Risiko, auf unbestätigte Details zu handeln |

Der Schluss in Worten: Messen Sie die Grundlagen jetzt, halten Sie die Aussagen gekennzeichnet und ändern Sie den Kurs, wenn der Eigentümer mehr veröffentlicht. Die Kosten eines Irrtums sind gering, denn Verantwortung, Ergebnisse und KI-Aufsicht waren schon vorher sinnvoll.

## Fragen für die Diskussion im Team

**1. Welche unserer Services, Produkte, Plattformen und KI-Systeme haben heute keinen benannten Eigner?**
Beginnen Sie mit dem Auflisten dessen, was existiert, denn oft finden Menschen Systeme, an deren Einführung sich niemand erinnert. Rechnen Sie mit Überraschung über in Anbieterwerkzeugen standardmäßig eingeschaltete Funktionen. Die Moderation sollte jede Lücke ohne Schuldzuweisung festhalten. Eine nützliche Anschlussfrage ist, wer nachts angerufen würde, wenn das Element ausfällt.

**2. Was glauben wir über ITIL 5, das wir in einem Blog statt beim Eigentümer gelesen haben?**
Aus zweiter Hand stammende Überzeugungen zu benennen macht die Überprüfung zu einer Aufgabe. Teams wiederholen oft mit Überzeugung Prozentsätze, Daten und Praktiknamen. Sortieren Sie jede Überzeugung in überprüft, plausibel und unbekannt. Bitten Sie jemanden, jede gegen die Seite des Eigentümers zu prüfen und das Datum festzuhalten.

**3. Welchen Service könnten wir einem Kunden als Ergebnis statt als Verfügbarkeitszahl beschreiben?**
Wertorientierte Praxis beginnt bei Ergebnissen. Teams greifen standardmäßig zu Verfügbarkeitsprozenten, drängen Sie also auf den Satz des Kunden: Was ist für ihn besser, wenn der Service funktioniert. Fragen Sie nach, wie wir bemerken würden, wenn sich das Ergebnis verschlechterte, während das Ziel grün bliebe.

**4. Wo nutzen wir heute KI, und wer beaufsichtigt jede Nutzung?**
Das prüft, ob Governance in der Praxis existiert. Die Antworten reichen von „nirgends“ bis zu einer langen Liste, die Anbieterfunktionen einschließt. Achten Sie auf Aufsicht, die nur ein Richtliniendokument ist. Eine gute Anschlussfrage ist, was uns sagen würde, dass ein KI-System falsch lag.

**5. Welche der fünf Messgrößen wäre hier am leichtesten zu manipulieren, und wie würden wir es bemerken?**
Bitten Sie die Gruppe, den Manipulationszug zu entwerfen, statt sich abstrakt dagegen zu verteidigen. Halten Sie jeden Zug fest und prüfen Sie ihn gegen die gekoppelte Leitplanke. Das ist eine Kurzfassung des vierteljährlichen Manipulations-Reviews.

**6. Was ist die kleinste erste Messgröße, die wir dieses Quartal laufen lassen können und die unabhängig von der verfolgten Version hilft?**
Kleine Schritte schlagen ein Übergangsprogramm auf unüberprüften Details. Typische Antworten sind die Bestandskarte oder ein KI-Inventar. Wählen Sie eine mit Eigner und Datum und vereinbaren Sie, wann die Veröffentlichungen des Eigentümers erneut gelesen werden.

## Vier Perspektiven

### Produkt- und Lieferteams

Sie werden gefragt, wem das Produkt nach dem Release gehört. Halten Sie den Live-Service innerhalb der Grenze des Produkts, schreiben Sie einen Ergebnissatz und setzen Sie die KI-Funktionen, die Sie bauen, auf dieselbe Bestandskarte wie alles andere. Zeigen Sie zuerst die eigenen Zahlen des Teams und halten Sie sie aus individuellen Beurteilungen heraus.

### Service- und Betriebsteams

Ihre Praktiken sind das tragende Fundament. Messen Sie sie weiter, halten Sie Belege fest, dass sie funktionieren, und zeigen Sie, wie KI-Unterstützung dort beaufsichtigt wird, wo sie Tickets, Alarme oder Changes berührt. Nutzen Sie das Verifizierungsprotokoll, um Aussagen aus Schulungsmaterial zu markieren, bevor sie ein Runbook erreichen.

### Führung und Governance

Finanzieren Sie Verantwortung und Verifizierung, bevor Sie ein Übergangsprogramm finanzieren. Fordern Sie die Bestandskarte, das KI-Inventar, das Verifizierungsprotokoll und das Alter der Ergebnisbelege an. Behandeln Sie eine rote Abdeckungszahl als Anlass zu fragen, welche Hilfe das Team braucht, nicht als Anlass zur Schuldzuweisung.

### Kunden und Nutzer

Sie sollten in Ihren eigenen Begriffen sehen können, wofür ein Service da ist, und erfahren, wann KI Teil dessen ist, wie Sie bedient werden. Fragen Sie nach dem Ergebnissatz und sagen Sie, ob er zu Ihrem Erleben passt.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Logistikunternehmens betreibt ein Kundenportal, ein Lagersystem und einen neu hinzugekommenen KI-Assistenten, der Antworten für den Service Desk entwirft. Der Servicemanager hört, dass ITIL 5 Produkte und KI-Governance betont, und die Führung bittet binnen eines Monats um einen Messplan. Die Zahlen in diesem Beispiel sind illustrativ.

Das Team widersteht dem Entwurf eines Plans aus Foliensätzen. Es baut eine Bestandskarte: 11 Services, drei digitale Produkte, zwei Plattformen und vier KI-gestützte Funktionen, von denen eine in einem Anbieterwerkzeug standardmäßig eingeschaltet war und keinen Eigner hatte. Die Eigner-Abdeckung des Bestands liegt bei der ersten Zählung bei 75 Prozent. Das Team hält in einer einseitigen Notiz fest, was die Zertifizierungsseite des Eigentümers sagt, und listet jede andere ITIL-5-Aussage als unbestätigt.

Jede KI-Funktion erhält einen Eigner, einen menschlichen Prüfpunkt und einen Eintrag im Risikoregister, was die Abdeckung des KI-System-Inventars binnen eines Monats von 50 auf 100 Prozent hebt. Der Leiter des Service Desks entscheidet, dass jede von KI entworfene Antwort vor dem Senden von einer Servicekraft gelesen wird und dass Servicekräfte wesentliche Änderungen an Entwürfen erfassen. Das Team schreibt außerdem Ergebnissätze für die drei digitalen Produkte, und das Ergebnis des Portals („Kunden können herausfinden, wo ihre Sendung ist, ohne anzurufen“) wird mit fünf Kunden getestet, von denen zwei es anders beschreiben.

Dann fängt das Team ein Manipulationsrisiko auf. Ein Manager schlägt vor, die Abdeckung durch Ergebnisaussagen zu erhöhen, indem er für alle elf Services denselben Satz schreibt, „die betriebliche Effizienz verbessern“. Die Leitplanke, eine Kundenstichprobe, hätte gezeigt, dass niemand ihn wiedererkannte, und das Team lehnt die Abkürzung ab. Schwierig bleibt: Nur für zwei Services gibt es ein heute erhobenes Belegsignal, und der Anteil der von Servicekräften geänderten KI-Entwürfe hängt davon ab, dass Servicekräfte Änderungen einheitlich erfassen. Der Plan für das nächste Quartal ist, Belegsignale für zwei weitere Services hinzuzufügen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Behandeln Sie die Einführung als kontinuierliche Verbesserung: ein kleiner Backlog von Änderungen, mit Stakeholdern überprüft und angepasst, wenn der Eigentümer mehr veröffentlicht. Eine praktische Gewohnheit ist ein regelmäßiges Review von Verifizierungsprotokoll und Bestandskarte. Zu beachten ist, dass ein Übergangsprogramm mit einem einzigen Go-live-Datum die Verifizierungsarbeit verbirgt und das Muster des Big-Bang-Wandels wiederholt.

### KI

ITIL 5 deckt, wie der Eigentümer es beschreibt, KI-gestützte Umgebungen ab. Geben Sie jeder KI-Nutzung einen Eigner, einen menschlichen Prüfpunkt und einen Weg, Fehler zu erkennen, und messen Sie die Inventarabdeckung und das Qualitätspaar. Zu beachten ist, einen KI-Assistenten nicht zu bitten, ITIL 5 aus dem Gedächtnis zusammenzufassen, da er selbstsichere, falsche Details erzeugen kann. Geben Sie ihm Text, den Sie beim Eigentümer gelesen haben, und bitten Sie ihn, diesen Text zu zitieren.

### Automatisierung

Automatisieren Sie die Bestandskarte, wo Sie können: Ziehen Sie Service- und Produktlisten aus Katalog- und Konfigurationsdaten und markieren Sie Einträge ohne Eigner oder mit abgelaufener Bestätigung. Auch die Automatisierung muss gemessen werden: wie viele Markierungen zu Maßnahmen führten. Zu beachten ist, dass Automatisierung Datenqualitätsprobleme sichtbar macht; halten Sie deshalb eine Person für die Behebung jeder Markierung verantwortlich.

### Analytik

Verfolgen Sie eine Handvoll Grundlagensignale über die Zeit und zeigen Sie, wie viele Elemente hinter jedem Prozentsatz stehen. Nutzen Sie sie, um zu entscheiden, wohin Verbesserungsaufwand fließt, nicht um Teams zu ordnen. Zu beachten ist, dass sich eine Zahl „benannter Eigner“ manipulieren lässt, indem man irgendjemanden benennt, und die Daten veraltet sein können; koppeln Sie sie deshalb mit der Bestätigung durch den Eigner (siehe Thema 10.8, Kennzahlen für Analytik und Datenqualität).

## Branchenperspektive

**Startup.** Es gibt möglicherweise ein Produkt und wenige Menschen. Benennen Sie den Eigner, schreiben Sie den Ergebnissatz und listen Sie die vom Team genutzten KI-Werkzeuge. Lassen Sie den Rest aus, bis es einen Grund gibt, ihn hinzuzufügen.

**Kleinunternehmen.** Die IT ist womöglich eine Person oder ein Dienstleister. Fragen Sie den Dienstleister, welche KI-Funktionen in den bezahlten Werkzeugen eingeschaltet sind, und führen Sie eine kurze Liste der Services mit ihren Eignern. Behandeln Sie Anbieteraussagen zu jedem Rahmenwerk mit Sorgfalt.

**Großunternehmen.** Der Bestand ist groß, und die Verantwortung verteilt sich auf Teams und Lieferanten. Standardisieren Sie die Definition von „Eigner“ und „Ergebnisaussage“, führen Sie die Entdeckungsrunde im Rhythmus durch und führen Sie ein zentrales Verifizierungsprotokoll, damit nicht jedes Team die Recherche wiederholt.

**Behörden und öffentlicher Sektor.** Beschaffungs-, Prüfungs- und Rechtsregeln bestimmen, was Sie wann übernehmen können. Behandeln Sie die Veröffentlichungen des Eigentümers und die geltende Regulierung als Entwurfsvorgaben, halten Sie das Datum fest, an dem Sie sie gelesen haben, und nutzen Sie das Verifizierungsprotokoll als Beleg für Prüfer (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind überwiegend Arbeitszeit: die Bestandskarte bauen, Ergebnissätze schreiben, Eigner bestätigen und eine Entdeckungsrunde für KI-Systeme durchführen. Werkzeugkosten fallen kaum an, wenn Sie bereits Katalog- oder Konfigurationsdaten halten. Die größeren Kosten sind die Disziplin, Karte und Protokoll aktuell zu halten.

Der Ertrag ist vermiedene Nacharbeit und bessere Entscheidungen. Ein Übergangsplan auf unüberprüften Aussagen riskiert Ausgaben für die falschen Änderungen. Lücken bei Verantwortung und KI-Inventar sind Befunde, die unter jeder Version des Rahmenwerks zählen, denn eine eignerlose KI-Funktion in einem kundenseitigen Prozess ist ein Risiko. Beschreiben Sie den Nutzen als Muster, nicht als Zahl: weniger eignerlose Systeme, weniger Überraschungen in Audits und klarere Gespräche mit Kunden über Wert. Messen Sie eigene Baselines, etwa Eigner-Abdeckung und Alter der Ergebnisbelege, vor und nach der Arbeit, wenn Sie Zahlen für einen Business Case brauchen (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Blog-Aussagen als Tatsache wiederholen.** Kennzeichnen Sie jede Aussage als überprüft oder unbestätigt und verlinken Sie für die überprüften nur die Seiten des Eigentümers.
- **Services in Produkte umetikettieren.** Ändern Sie Verantwortung und Lebenszyklus-Rechenschaft, sonst ist das Etikett Dekoration.
- **Abdeckung ohne Inhalt.** Eine hohe Abdeckungszahl mit leeren oder kopierten Ergebnissätzen ist Manipulation. Prüfen Sie den Inhalt stichprobenartig mit Kunden.
- **KI-Governance als Dokument.** Benennen Sie Eigner, Prüfpunkte und Überprüfungsdaten und testen Sie, dass Menschen sie befolgen.
- **Mit dem Messen auf das Rahmenwerk warten.** Verantwortung, Ergebnisse und KI-Aufsicht sind jetzt nützlich. Beginnen Sie und passen Sie an, wenn der Eigentümer mehr veröffentlicht.
- **Ein Zertifikat als Compliance behandeln.** Messen Sie, ob Teams die Praktik betreiben können, nicht wer eine Prüfung bestanden hat.
- **Einmalige Entdeckung.** KI-Funktionen tauchen laufend auf. Führen Sie die Runde im Rhythmus durch.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Quellendisziplin | Wissen zu ITIL 5 stammt aus Blogs und Hörensagen | Einige Seiten des Eigentümers gelesen, aber nicht festgehalten | Überprüfte und unbestätigte Aussagen mit Daten protokolliert | Aussagen werden vor jeder Entscheidung neu geprüft | Teams teilen ein lebendiges, datiertes Verifizierungsprotokoll |
| Verantwortung | Eigner bei den meisten Elementen unklar | Eigner für die Hauptservices benannt | Bestandskarte mit einem Eigner für jedes Element | Verantwortungslücken werden im Rhythmus überprüft und geschlossen | Eigner koordinieren über Teams und Lieferanten hinweg |
| Ergebnisse und Belege | Nur Ziele und Zählungen | Ergebnissätze für die Hauptservices | Ergebnis und Belegsignal für jeden Service | Belegalter überprüft; veraltete Ergebnisse neu aufgegriffen | Ergebnisse gemeinsam mit Kunden geschrieben und laufend aufgefrischt |
| KI-Governance | KI-Nutzung unbekannt | Haupt-KI-Nutzungen gelistet | Eigner, Prüfpunkt und Risikoeintrag je System | Fehler und Übersteuerungen gemessen und überprüft | Governance passt sich an, wenn sich KI und Regeln ändern |

## Checkliste

- [ ] Wir haben die ITIL-5-Seiten des Eigentümers gelesen und festgehalten, was sie sagen, mit Datum.
- [ ] Jede ITIL-5-Aussage in unseren Plänen ist als überprüft oder unbestätigt gekennzeichnet.
- [ ] Wir haben eine Bestandskarte der Services, Produkte, Plattformen und KI-Systeme.
- [ ] Jedes Element auf der Karte hat einen Eigner, der es bestätigt hat.
- [ ] Jeder Service hat einen Ergebnissatz und ein benanntes Belegsignal.
- [ ] Wir berichten das Alter der Ergebnisbelege mit Perzentilen.
- [ ] Jedes KI-System hat einen Eigner, einen menschlichen Prüfpunkt und einen Eintrag im Risikoregister.
- [ ] Wir führen planmäßig eine Entdeckungsrunde für KI-Funktionen durch.
- [ ] Jede Messgröße hat Manipulationsvektor und Leitplanke auf derselben Seite.
- [ ] Wir haben eine erste Messgröße mit Eigner und Datum gewählt.

## KI-Prompts

**Eine Bestandskarte aus eingefügtem Material erstellen.**

```text
I will paste a list of our services, digital products, platforms, and AI-enabled
features: [paste list]. Build a table with columns: item, type (service, product,
platform, AI system), owner (use only what I provided; write "unknown"
otherwise), and one question I should ask about it. Ask clarifying questions first
if the list is ambiguous. Do not invent items or owners. List your assumptions at
the end.
```

**ITIL-5-Aussagen in überprüft und unbestätigt sortieren.**

```text
Below are statements we have heard about ITIL 5: [paste statements]. Below is text
I copied from the owner's published pages: [paste owner text and the date I
read it]. For each statement, say whether the owner text supports it, contradicts
it, or says nothing, and quote the supporting words exactly. Do not use outside
knowledge and do not invent dates or practice names. List your assumptions and
what you could not judge.
```

**Ergebnissätze und Belegsignale zur Prüfung entwerfen.**

```text
Our services are: [list services with one line each on who uses them]. For each,
propose a one-sentence outcome in the customer's words and two candidate evidence
signals that we may already collect from [list data sources]. Mark every outcome
as a draft for customer review. Do not invent benchmark values or results. List
your assumptions and the questions I should ask customers.
```

**Das Manipulationsrisiko der fünf Messgrößen prüfen.**

```text
We plan to report these measures: [paste measure names and definitions]. Our
context: [team size, culture, tools]. For each measure, list realistic ways it
could look better without helping anyone, propose a guardrail, and say how that
guardrail could be gamed. Do not invent statistics or compliance claims. List your
assumptions.
```

## KI-Skills

- [ITIL 5](../../../../skills/itil-5/SKILL.md): zu verwenden, um eine Bestandskarte, eine Lückenanalyse und einen phasenweisen Einführungsplan zu erstellen, wobei ITIL-5-Aussagen als unbestätigt gekennzeichnet werden.
- [Maturity models](../../../../skills/maturity-models/SKILL.md): zu verwenden, um die Reifegradtabelle in eine Selbstbewertung des Teams zu verwandeln.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine Kennzahl und deren gekoppelte Leitplanke behandelt.

## Wichtigste Erkenntnisse

- Eine Aussage über ITIL 5 ist nur überprüft, wenn die eigene Veröffentlichung des Eigentümers sie trifft, und das Datum, an dem Sie sie gelesen haben, sollte festgehalten werden.
- Die vom Eigentümer erklärten Themen digitale Produkte, KI-gestützte Umgebungen und messbare Ergebnisse lassen sich heute als Verantwortung, Ergebnisbelege und KI-Aufsicht messen.
- Abdeckungszahlen sind auf dem Papier leicht zu erfüllen, also prüfen Sie den Inhalt stichprobenartig und halten Sie neben jeder eine Leitplanke.
- Messen Sie ITIL-4-Praktiken, die funktionieren, weiter und ändern Sie eine Messgröße nur, wenn die Anleitung des Eigentümers und Ihre Belege übereinstimmen.
- Beginnen Sie mit einer Messgröße und einer Bestandskarte und passen Sie an, wenn der Eigentümer mehr veröffentlicht.

## Quellen und weiterführende Literatur

1. PeopleCert, ITIL Foundation Bridge (Version 5), certification page, accessed 20 October 2026, https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
2. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
3. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
4. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
5. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
6. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
7. Wikipedia, [Product management](https://en.wikipedia.org/wiki/Product_management).
8. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
