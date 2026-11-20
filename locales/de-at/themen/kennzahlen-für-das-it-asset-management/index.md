# Kennzahlen für das IT-Asset-Management

**Sie können nicht unterstützen, absichern oder sinnvoll bezahlen, was Sie nicht finden können. Messen Sie also, wie genau, vollständig und aktuell Ihre Asset-Datensätze sind, und bauen Sie die Gewohnheit auf, Assets als Nebenprodukt der alltäglichen Arbeit zu erfassen statt in einer jährlichen Bereinigung.**

## Überblick und Motivation

Jeder Service ruht auf Dingen: Laptops, Servern, Lizenzen, Cloud-Konten, Netzwerkgeräten und den Daten und Verträgen, die daran hängen. [IT-Asset-Management](https://en.wikipedia.org/wiki/IT_asset_management) (ITAM) ist die Menge der Geschäftspraktiken, die finanzielle, vertragliche und Inventarfunktionen verbinden, um Lebenszyklusmanagement und strategische Entscheidungen für die IT-Umgebung zu unterstützen. Es beantwortet Fragen, von denen andere Praktiken abhängen. Was besitzen wir? Wo ist es? Wer ist dafür verantwortlich? Was kostet es? Wann muss es verlängert, gepatcht oder ersetzt werden?

Kontinuierliche Auslieferung und ITIL treffen sich auf diesem Boden unbequem. Teams, die Software kontinuierlich liefern, erzeugen und vernichten ständig Infrastruktur: Container, virtuelle Maschinen, Testumgebungen und Cloud-Konten entstehen in Minuten. Eine vierteljährliche Tabelle kann nicht mithalten. ITAM aus der ITIL-Tradition besteht auf Datensätzen, Eignern und Lebenszyklen, und dieses Bestehen ist richtig, denn ungesteuerte Assets sind der Ort, an dem Sicherheitslücken, vergeudetes Geld und Compliance-Fehlschläge wachsen. Der agile Beitrag ist kontinuierliche Zusammenarbeit über Beschaffung, Finanzen, Sicherheit und Betrieb und die praktische Gewohnheit, Assets automatisch zu erfassen, sobald sie entstehen, über Pipelines und Infrastructure as Code, sodass der Datensatz ein Nebenprodukt der Arbeit ist.

Drei Begriffe kehren in diesem Thema wieder.

- **Asset:** ein für die Organisation wertvolles Element, das über einen Lebenszyklus gesteuert wird. Im ITAM umfasst das Hardware, Software, Cloud-Ressourcen, Abonnements und manchmal Daten.
- **Asset-Datensatz:** der Eintrag, der ein Asset beschreibt: was es ist, wem es gehört, wo es ist, in welchem Zustand es ist, was es kostet und womit es verknüpft ist.
- **Lebenszyklus:** die Phasen, die ein Asset durchläuft, typischerweise angefordert, beschafft, empfangen, deployt, in Nutzung, gewartet, ausgemustert und entsorgt. Das Denken in [Produktlebenszyklen](https://en.wikipedia.org/wiki/Product_lifecycle) gilt für jede Klasse von Assets, mit anderen Phasen für einen Laptop und ein Cloud-Abonnement.

ITAM überschneidet sich mit dem Konfigurationsmanagement, das die Beziehungen zwischen Komponenten verfolgt, damit Sie die Auswirkung von Change verstehen können, und die nächsten Themen nehmen Software, Hardware und Konfiguration der Reihe nach (siehe Thema 7.2, Kennzahlen für Software-Assets und Lizenzen, Thema 7.3, Kennzahlen für den Lebenszyklus von Hardware-Assets, und Thema 7.4, Kennzahlen für Konfigurations- und CMDB-Qualität). Der Unterschied liegt im Zweck: Asset-Management betont Verantwortung, Kosten und Lebenszyklus, während Konfigurationsmanagement Struktur und Abhängigkeit betont. Dasselbe Inventar speist oft beides.

Der Standard, den die meisten ITAM-Programme zitieren, ist ISO/IEC 19770, eine Familie von Standards für IT-Asset-Management-Systeme. Zitieren Sie ihn mit Namen und Geltungsbereich und lesen Sie ihn bei der Normungsorganisation, bevor Sie sich auf irgendein Detail verlassen. Dieses Thema gibt seinen Text nicht wieder.

Asset-Kennzahlen lassen sich leicht in Ziele verwandeln, und die Ziele sind auf dem Papier leicht zu erreichen. Ein Inventar kann 100 Prozent Genauigkeit zeigen, weil es nur erfasst, was bereits bekannt war. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt: Messen Sie Genauigkeit gegen unabhängige Belege und behandeln Sie eine perfekte Zahl als Grund, genauer hinzuschauen (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Leitprinzipien

- **Im Moment der Änderung erfassen.** Assets sollten als Teil der Arbeit, die sie erzeugt oder entfernt, in den Datensatz ein- und aus ihm austreten.
- **Gegen unabhängige Belege messen.** Genauigkeit heißt Übereinstimmung mit der Wirklichkeit, geprüft mit einer anderen Methode als dem Datensatz selbst.
- **Jedes Asset hat einen Eigner.** Ein Asset, das niemandem gehört, wird nicht gepatcht, nicht sinnvoll bezahlt und nicht ausgemustert.
- **Den Datensatz so klein wie möglich halten.** Erfassen Sie die Felder, die Entscheidungen brauchen, und nicht mehr.
- **Quellen kombinieren.** Erkennungswerkzeuge, Beschaffung, Finanzen, Identität und Cloud-Abrechnung sehen je einen Teil der Landschaft.
- **Funktionsübergreifend zusammenarbeiten.** Beschaffung, Finanzen, Sicherheit und Betrieb teilen den Datensatz und seine Qualität.
- **Lücken als Information behandeln.** Ein nicht nachgewiesenes Asset ist ein Befund, den man verstehen sollte, kein Versagen, das man verbirgt.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Inventargenauigkeit | Anteil der in einer Stichprobe gezogenen Assets, deren Datensatz zu dem passt, was gefunden wird | in der Stichprobe gezogene Assets, bei denen der Datensatz in allen vereinbarten Feldern mit physischem oder technischem Beleg übereinstimmt / gezogene Assets | Prozent | Prüfstichprobe, verglichen mit dem Asset-Register und Erkennungsdaten | IT-Asset-Management; Konfigurationsmanagement | Definition of Done enthält die Registrierung des Assets | Vierteljährlich |
| Erkennungsabdeckung | Anteil der erwarteten Assets, die die Erkennung im Zeitraum sah | von mindestens einer Erkennungsquelle in den letzten 30 Tagen gesehene Assets / Assets im Register, die die Erkennung sehen kann | Prozent | Berichte des Erkennungswerkzeugs, mit dem Register verbunden | IT-Asset-Management; Monitoring und Ereignismanagement | Der Zustand von Infrastructure as Code entspricht der Wirklichkeit | Monatlich |
| Abgleichsrate | Anteil der Assets, die über unabhängige Quellen hinweg zugeordnet werden | im Register und in einer zweiten Quelle (zum Beispiel Beschaffung, Identität oder Cloud-Abrechnung) zugeordnete Assets / Assets in einer der beiden Quellen | Prozent | Exporte von Register, Beschaffung, Identität, Cloud-Abrechnung | IT-Asset-Management; Lieferantenmanagement | Einzige Wahrheitsquelle für Umgebungen | Monatlich |
| Anteil eignerloser Assets | Anteil der Assets ohne benannten, gültigen Eigner | Assets ohne Eigner oder mit einem Eigner, der ausgeschieden ist / Assets im Register | Prozent | Register, verbunden mit dem Personenverzeichnis | IT-Asset-Management; Informationssicherheitsmanagement | Klare Verantwortung für Services und Komponenten | Monatlich |
| Vollständigkeit der Lebenszyklusphase | Anteil der Assets mit einer aktuellen Lebenszyklusphase und den Daten, die diese Phase verlangt | Assets mit erfasster Phase und erforderlichen Daten / Assets im Register | Prozent | Register | IT-Asset-Management; Release- und Deployment-Management | In der Pipeline verfolgter Lebenszyklus von Umgebungen | Monatlich |
| Zeit bis zur Erfassung | Verzögerung zwischen einer Änderung eines Assets und ihrer Aktualisierung im Register | Median und 85. Perzentil der Stunden oder Tage vom Änderungsereignis bis zur Aktualisierung des Registers | Tage | Change-, Beschaffungs- oder Pipeline-Ereignisse, verglichen mit Zeitstempeln des Registers | IT-Asset-Management; Change-Befähigung | Automatische Registrierung in der Pipeline | Monatlich |
| Rate nicht nachgewiesener Assets | Anteil der erwarteten Assets, die bei der Prüfung nicht gefunden oder erklärt werden können | erwartete, aber nicht gefundene und nicht durch eine genehmigte Entsorgung erklärte Assets / erwartete Assets | Prozent | Prüfergebnisse | IT-Asset-Management; Informationssicherheitsmanagement | Retrospektiver Befund zu verlorenen Elementen | Je Prüfung |

Nennen Sie den Umfang von „Asset“ für jede Klasse. Ein Laptop, eine virtuelle Maschine, ein Abonnement und eine Lizenz sind verschieden, und Datensatzfelder und Belege unterscheiden sich. Die Zeit bis zur Erfassung startet beim Ereignis, das die Änderung erzeugte, etwa Wareneingang, ein Pipeline-Lauf oder ein Abonnementbeginn, und stoppt, wenn das Register es abbildet. Schließen Sie Assets aus, die absichtlich außerhalb des Umfangs liegen, etwa kurzlebige Test-Container, und führen Sie sie im Register als Ausschlussklasse.

## Empfehlungen

### Entscheiden, was Sie steuern

**1. Listen Sie die Klassen von Assets auf, die zählen, und warum.** Beginnen Sie mit denen, die Kosten, Risiko oder rechtliche Verpflichtung tragen: Endgeräte, Server und Cloud-Konten, Netzwerkausrüstung, Softwarelizenzen und Abonnements und kritische Datenspeicher. Schreiben Sie für jede Klasse die Entscheidungen auf, die der Datensatz stützen muss: Patchen, Verlängerung, Prüfung, Erneuerung, Entsorgung. Lassen Sie Klassen aus, die keine Entscheidung braucht.

**2. Definieren Sie die Mindestfelder.** Wählen Sie für jede Klasse die wenigen Felder, die die Entscheidungen verlangen: Kennung, Typ, Eigner, Ort oder Konto, Status, Anschaffungs- und Enddaten, Kostenstelle und Verknüpfungen zum unterstützten Service. Ein kurzer Datensatz, der stimmt, ist mehr wert als ein langer, der veraltet ist. Halten Sie die Definition im Kennzahlenregister fest.

**3. Weisen Sie jeder Klasse und jedem Asset einen Eigner zu.** Der Klasseneigner entwirft den Datensatz und den Prozess. Der Asset-Eigner ist die Person oder das Team, das für das Asset in Nutzung verantwortlich ist. Nutzen Sie ein Team, nicht eine Einzelperson, wenn ein Asset geteilt wird, und halten Sie das Verzeichnis aktuell, damit Abgänge keine Assets verwaisen lassen.

### Assets erfassen, während die Arbeit geschieht

**4. Registrieren Sie Assets in der Pipeline.** Wo Infrastruktur per Code erzeugt wird, lassen Sie die Pipeline beim Erstellen und Entfernen ins Register schreiben. Das bringt die Zeit bis zur Erfassung nahe null und lässt das Register mit dem Code übereinstimmen. Die agile Praxis, Change kontinuierlich zu liefern, stützt das: Aktualisiert jedes Deployment den Datensatz, ist der Datensatz selten falsch.

**5. Verbinden Sie Beschaffung und Register.** Machen Sie bei beschaffter Hardware und Software die Bestellung oder die Anlage des Abonnements zum Auslöser eines Datensatzes und Wareneingang oder Aktivierung zum Auslöser eines Statuswechsels. Die Praxis des [Bestandsmanagements](https://en.wikipedia.org/wiki/Inventory_management) für physische Güter bietet nützliche Muster für Empfangen, Lagern und Ausgeben. Wo Käufe außerhalb der Beschaffung geschehen, etwa Firmenkarten von Teams für Abonnements, ergänzen Sie eine monatliche Prüfung der Spesendaten.

**6. Nutzen Sie die Erkennung als Prüfung, nicht als Datensatz.** Erkennungswerkzeuge scannen Netzwerke und Cloud-Konten und berichten, was sie finden. Sie sind gut darin zu sagen, was existiert, und schlecht darin zu sagen, wem es gehört oder warum. Nutzen Sie sie, um fehlende und unbekannte Assets zu erkennen und mit dem Register zu vergleichen. Der Schritt, eine Quelle gegen eine andere abzugleichen, ist eine Form des [Abgleichs (Reconciliation)](https://en.wikipedia.org/wiki/Reconciliation_(accounting)), derselben Idee, die Buchhalter nutzen, um zwei Datensätze zu vergleichen.

**7. Kennzeichnen Sie bei der Erstellung.** Verlangen Sie für jede Cloud-Ressource einen Eigner und einen Service-Tag und für jedes physische Gerät ein Etikett. Methoden der [Asset-Verfolgung](https://en.wikipedia.org/wiki/Asset_tracking) wie Barcodes und Funketiketten helfen bei physischen Elementen in Lagern und Büros. Ungekennzeichnete Ressourcen sind Befunde für das Team des Eigners, als normaler Teil des Betriebs bearbeitet.

### Ehrlich messen

**8. Prüfen Sie mit einer Zufallsstichprobe.** Ziehen Sie jedes Quartal eine Zufallsstichprobe von Assets aus dem Register und prüfen Sie sie gegen Belege: das Gerät finden, die Ressource untersuchen, den Eigner bestätigen. Ziehen Sie dann eine Stichprobe in der Gegenrichtung, aus Erkennungsergebnissen und Beschaffungsdaten, und prüfen Sie, dass jedes im Register erscheint. Die beiden Richtungen zeigen verschiedene Lücken. Berichten Sie die Genauigkeit für jede Klasse gesondert.

**9. Beobachten Sie die Datenqualität im Zeitverlauf.** Vollständigkeit, Genauigkeit und Aktualität von Datensätzen sind Aspekte der [Datenqualität](https://en.wikipedia.org/wiki/Data_quality). Verfolgen Sie den Trend je Feld und je Klasse und schauen Sie, welche Felder am schnellsten driften. Drift bei Eigner und Ort ist normal und sagt Ihnen, wo zu automatisieren ist.

**10. Berichten Sie die Lücken.** Zeigen Sie die nicht nachgewiesenen Assets, den Anteil eignerloser Assets und die nicht abgeglichenen Elemente neben der Genauigkeit der Überschrift. Ein Bericht, der seine Ausnahmen verbirgt, ist ein Bericht über den Bericht. Benennen Sie für jede Klasse von Lücke einen Eigner und ein Datum.

### Die Schleife schließen

**11. Mustern Sie Assets so bewusst aus, wie Sie sie erzeugen.** Auch Entsorgung braucht Datensätze: das Datum, die Methode und, bei Geräten, die Daten hielten, den Beleg, dass Daten gelöscht wurden. Ein Datensatz zur [Beweiskette (Chain of Custody)](https://en.wikipedia.org/wiki/Chain_of_custody) zeigt, wer ein Asset wann handhabte. Ausgemusterte Assets, die noch im Register stehen, blähen Kosten auf und verwirren Prüfungen.

**12. Nutzen Sie den Datensatz in alltäglichen Entscheidungen.** Patchen, Verlängerungen, Sicherheitsreaktion und Budgetierung sollten aus dem Register lesen. Nutzen Menschen es, beheben sie es. Dient das Register nur Prüfungen, verfällt es. Überprüfen Sie die Nutzung des Registers mit den Teams, die davon abhängen, und beheben Sie zuerst die Felder, über die sie sich beschweren.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Inventargenauigkeit | Die leichten Assets ziehen; erst nach einer Bereinigung prüfen; eine Übereinstimmung in weniger Feldern zählen | Zufallsstichprobe, von jemandem außerhalb des Teams gezogen; feste Feldliste; Stichprobe aus beiden Richtungen |
| Erkennungsabdeckung | „Erwartete Assets“ auf das verengen, was die Erkennung sehen kann; schwer zu scannende Netzwerke ausschließen | Ausschlüsse dokumentieren; mit Beschaffung und Cloud-Abrechnung vergleichen |
| Abgleichsrate | Eine zweite Quelle wählen, die aus der ersten abgeleitet ist; automatisch über schwache Schlüssel zuordnen | Wirklich unabhängige Quellen nutzen; Zuordnungen von Hand stichprobenartig prüfen |
| Anteil eignerloser Assets | Ein Sammelteam als Eigner zuweisen; eine Platzhalterperson eintragen | Zahl der Assets im Besitz von Sammelteams; Stichprobe der Eignerbestätigung |
| Vollständigkeit der Lebenszyklusphase | Standarddaten eintragen; jedes Asset auf „in Nutzung“ setzen | Phase in der Prüfung mit Belegen vergleichen; auf die Altersverteilung schauen |
| Zeit bis zur Erfassung | Änderungsereignisse rückdatieren; die Ereigniszeit als Datensatzzeit erfassen | Mit Zeitstempeln des Quellsystems vergleichen; Audit-Trail für Änderungen |
| Rate nicht nachgewiesener Assets | Assets ohne Genehmigung abschreiben; sie als entsorgt umklassifizieren | Rate von Entsorgungsgenehmigung und -beleg; Abschreibungen mit Finanzdatensätzen vergleichen |

Ein gesunder Befund ist eine Genauigkeitszahl, die aus ehrlichen Gründen unter 100 Prozent bleibt, mit sichtbaren Lücken, die schrumpfen, Eignern, die ihre Assets bestätigen, wenn gefragt, und einem Datensatz, den Menschen für Entscheidungen nutzen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Automatische Registrierung | Schnell, konsistent, wenig Aufwand | Braucht Engineering; verpasst Dinge außerhalb der Pipeline |
| Manuelle Registrierung | Flexibel, funktioniert für alles | Langsam, fehleranfällig, verfällt |
| Erkennungsgetrieben | Findet das Unbekannte | Kann Verantwortung oder Zweck nicht liefern |
| Beschaffungsgetrieben | Erfasst Kosten und Vertrag | Verpasst Schattenkäufe und kostenlose Stufen |
| Straffe Kontrolle der Käufe | Starker Datensatz | Bremst Teams; fördert Umgehungen |
| Leichte Kontrolle mit Prüfungen | Schnell; baut auf Vertrauen | Mehr Lücken zu finden und zu beheben |
| Großes Datensatzschema | Reiche Berichterstattung | Schwer genau zu halten |
| Kleines Datensatzschema | Leicht zu pflegen | Begrenzte Analyse |

Die Antwort in Worten ist, die Registrierung dort zu automatisieren, wo Infrastruktur Code ist, Erkennungs- und Abrechnungsdaten als unabhängige Prüfungen zu nutzen und den Datensatz klein zu halten. Vertrauen Sie Teams, zu erzeugen, was sie brauchen, bitten Sie sie, es zu kennzeichnen, und verifizieren Sie per Stichprobe.

## Fragen für die Diskussion im Team

**1. Wenn wir morgen jedes Asset finden müssten, das zu unserem wichtigsten Service gehört, wie lange würde es dauern?**
Wählen Sie einen Service und verfolgen Sie seine Assets aus dem Register und aus anderen Quellen. Messen Sie die Zeit der Übung und notieren Sie die Lücken. Die Moderation sollte festhalten, welche Quellen übereinstimmten und welche nicht. Das Ergebnis zeigt, ob das Register ein Arbeitswerkzeug oder ein Dokument ist.

**2. Welche Assets entstehen, ohne dass jemand in diesem Raum es weiß?**
Denken Sie an Cloud-Konten, Abonnements, Testumgebungen und außerhalb der Beschaffung gekaufte Geräte. Fragen Sie, wie diese auftauchen würden. Das Gespräch findet die Lecks. Einigen Sie sich auf eine Quelle unabhängigen Belegs, die in diesem Quartal dem Abgleich hinzuzufügen ist.

**3. Wem gehören die Assets, die wir heute haben, und woher wissen wir, dass sie noch da sind?**
Ziehen Sie eine Stichprobe von Assets und bitten Sie die genannten Eigner um Bestätigung. Notieren Sie, wie viele Eigner die Rolle wechselten oder gingen. Entscheiden Sie, wie Verzeichnis und Register im Gleichschritt bleiben, zum Beispiel durch eine automatische Prüfung, wenn jemand geht.

**4. Wie prüfen wir unser eigenes Register, ohne unsere eigenen Hausaufgaben zu benoten?**
Besprechen Sie, wer die Stichprobe zieht und wer sie prüft. Fragen Sie, was geschähe, wenn das Ergebnis schlecht wäre. Die Moderation sollte erkunden, ob Menschen sich sicher fühlen, eine schlechte Zahl zu berichten, denn eine unsichere Prüfung erzeugt gute Zahlen.

**5. Was erfassen wir, das niemand nutzt?**
Listen Sie die Felder im Register auf und fragen Sie, welche Entscheidungen jedes nutzen. Felder ohne Nutzer sind Kandidaten zum Entfernen. Felder, die genutzt werden, aber unzuverlässig sind, sind Kandidaten für Automatisierung. Einigen Sie sich auf zwei Änderungen.

**6. Was geschieht mit einem Asset zwischen „nicht mehr gebraucht“ und „weg“?**
Verfolgen Sie ein ausgemustertes Gerät oder einen stillgelegten Service. Wer bestätigt, dass Daten gelöscht wurden? Wann wird der Datensatz geschlossen? Die Lücken auf diesem Weg sind der Ort, an dem sich Kosten, Risiko und Prüfungsbefunde ansammeln.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams erzeugen die meisten neuen Assets und erleben Datensatzpflege als Reibung, solange sie nicht automatisch ist. Sie sollten den Asset-Datensatz als Teil der Definition of Done einer Umgebung behandeln, Pipelines registrieren lassen, was sie erzeugen, und Ressourcen mit Eignern kennzeichnen. Sie profitieren von einem genauen Datensatz, wenn sie Kosten finden, patchen oder eine Umgebung ausmustern müssen.

### Service- und Betriebsteams

Betriebsteams hängen für Patchen, Incident-Reaktion und Kapazität vom Register ab. Sie sollten Erkennung mit dem Register abgleichen, eignerlosen Assets nachgehen und Lücken als Befunde berichten. Sie halten auch die physische Handhabung: Empfangen, Imaging, Lagern und Entsorgen, wo Datensätze zur Beweiskette zählen.

### Führung und Governance

Führungskräfte und Prüfer verlassen sich für Kostenkontrolle, Sicherheitsgewissheit und Compliance auf Asset-Daten. Sie sollten die Genauigkeitsmethode und die Lückenliste verlangen, nicht nur die Überschrift, und die Automatisierung der Registrierung finanzieren. Die Governance sollte erwarten, dass das Register in Entscheidungen genutzt wird, und berichtete 100 Prozent mit Misstrauen behandeln.

### Kunden und Nutzer

Nutzer erleben Asset-Management, wenn ein Gerät einsatzbereit eintrifft, eine Lizenz da ist, wenn sie gebraucht wird, und ein verlorener Laptop gut behandelt wird. Ihr Feedback zu Onboarding und Ausstattung ist ein Beleg dafür, wie der Prozess in der Praxis funktioniert (siehe Thema 6.4, Nutzer- und Mitarbeitererlebnis). Sie haben auch eine Rolle: der IT zu sagen, wenn Ausrüstung bewegt wird oder geht.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines mittelgroßen Logistikunternehmens unterstützt etwa 2.400 Mitarbeitende und betreibt eine Produktplattform auf Cloud-Infrastruktur. Die Zahlen unten sind illustrativ.

Eine interne Revision fragt nach der Zahl der Geräte und Cloud-Ressourcen, die das Unternehmen besitzt. Das Register zeigt 3.100 Endgeräte und 1.850 Cloud-Ressourcen. Die Asset-Managerin beschließt, die Zahlen zu testen, bevor sie sie berichtet. Sie zieht eine Zufallsstichprobe von 100 Geräten aus dem Register und findet 87 mit Übereinstimmung in allen vier vereinbarten Feldern, eine Genauigkeit von 87 Prozent. Aus der Gegenrichtung zieht sie 100 Geräte aus dem Endpoint-Management-Werkzeug und findet 94 im Register. Die Erkennungsabdeckung der Cloud-Landschaft beträgt 82 Prozent, weil drei von Projektteams angelegte Konten nicht mit dem Erkennungswerkzeug verbunden sind. Der Abgleich des Cloud-Abrechnungsexports mit dem Register ordnet 71 Prozent der abgerechneten Ressourcen zu, und die nicht zugeordneten sind überwiegend ungekennzeichnete Testumgebungen. Der Anteil eignerloser Assets beträgt 9 Prozent, ein Drittel davon im Besitz von Menschen, die gegangen sind.

Das Team nimmt mit den Produktteams und den Finanzen vier Änderungen vor. Die Pipeline-Vorlagen registrieren nun jede neue Umgebung und verlangen einen Eigner und einen Service-Tag. Die monatliche Cloud-Rechnung wird mit dem Register abgeglichen, wobei ungekennzeichnete Ressourcen an Kontoeigner berichtet werden. Eine monatliche Prüfung vergleicht das Personenverzeichnis mit den Asset-Eignern und sendet Führungskräften eine Liste, wenn jemand geht. Der Wareneingang im Lager löst am selben Tag eine Aktualisierung des Registers aus. Sie ändern auch die Berichterstattung: Die Prüfungszusammenfassung zeigt die Genauigkeit aus beiden Stichprobenrichtungen, die Lückenliste und den Anteil eignerloser Assets.

Nach zwei Quartalen beträgt die Genauigkeit aus der Registerstichprobe 93 Prozent, der Abgleich der Cloud-Landschaft 90 Prozent und der Anteil eignerloser Assets 3 Prozent. Der Finanzleiter bittet für den Vorstand um eine einzelne Zahl „Inventargenauigkeit“. Die Asset-Managerin gibt die Zahl mit der Methode und der Lückenliste an und lehnt es ab, ein Ziel von 100 Prozent zu berichten, mit der Erklärung, dass es darum geht, die Lücken sichtbar und schrumpfend zu halten. Die Entscheidung wird festgehalten, und das Team vermerkt, dass die niedrigere Zahl aus einer besseren Methode nützlicher ist als die frühere ungeprüfte Zahl.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Erfassen Sie Assets als Nebenprodukt der alltäglichen Arbeit und überprüfen Sie die Genauigkeit regelmäßig mit Eignern, statt jährlich zu bereinigen. Zu beachten ist, dass ein Ziel für die Genauigkeit Teams dazu drängen kann, Datensätze zu löschen, die sie nicht bestätigen können.

### KI

KI-Werkzeuge und Abonnements sind ebenfalls Assets und werden oft ohne Datensatz übernommen. Beziehen Sie KI-Services, Modelle und Datenquellen in die Erkennung ein und koppeln Sie die Inventargenauigkeit mit dem Anteil eignerloser Assets. Zu beachten ist, dass in bestehenden Produkten aktivierte KI-Funktionen nicht als neue Käufe erscheinen; fragen Sie also Lieferanten, was eingeschaltet ist.

### Automatisierung

Betreiben Sie die Erkennung automatisch und gleichen Sie sie mit Beschaffungs- und Identitätsdatensätzen ab und messen Sie die Erkennung an Abdeckung und falschen Zuordnungen. Zu beachten ist, dass die Erkennung findet, worauf sie gerichtet ist; prüfen Sie also, was sie verpasst.

### Analytik

Berichten Sie Genauigkeit aus einer Prüfstichprobe mit der Stichprobengröße ebenso wie aus Werkzeugzählungen. Die Entscheidung, die dies untermauert, ist, wo in Erkennung und Verantwortung zu investieren ist. Zu beachten ist, dass der Abgleich zweier fehlerhafter Quellen sauber aussehen kann, während beide falsch sind.

## Branchenperspektive

**Startup.** Es gibt womöglich kein förmliches Register, nur Cloud-Konten und einige Laptops. Führen Sie eine einfache Liste mit Eignern, kennzeichnen Sie Cloud-Ressourcen von Anfang an und überprüfen Sie die Liste monatlich. Vermeiden Sie, eine Plattform zu kaufen, bevor Sie wissen, welche Fragen Sie beantworten müssen.

**Kleinunternehmen.** Ein einzelner Administrator übernimmt womöglich alles. Eine Tabelle mit wenigen Feldern kann funktionieren, wenn jemand sie zweimal im Jahr gegen Einkäufe prüft. Achten Sie auf Lizenzen und Abonnements, die man leicht aus dem Blick verliert, und auf die Entsorgung von Geräten, die Daten hielten.

**Großunternehmen.** Größe braucht Automatisierung, klare Klasseneigner und Abgleich über mehrere Quellen. Erwarten Sie, dass Übernahmen unvertraute Landschaften mitbringen, und planen Sie einen Standardweg, sie unter denselben Datensatz zu bringen. Stimmen Sie sich mit den Finanzen zur Anlagenbuchhaltung ab, einschließlich wie [Anlagevermögen](https://en.wikipedia.org/wiki/Fixed_asset) aktiviert und abgeschrieben wird, und vereinbaren Sie, wo IT-Register und Finanzbuch übereinstimmen müssen.

**Behörden und öffentlicher Sektor.** Öffentliche Stellen unterliegen Prüfung, Beschaffungsregeln und Aufzeichnungspflichten und halten auf Geräten oft sensible Daten. Bewahren Sie Belege für die Entsorgung auf, dokumentieren Sie die Beweiskette und stimmen Sie das Register mit der geforderten Anlagenberichterstattung ab. Behandeln Sie das Register als Teil der Belege für Prüfungen (siehe Thema 8.3, Kennzahlen für Compliance und Audit).

## Business Case: Motive, ROI und TCO

Die Kosten umfassen die Zeit, den Datensatz zu entwerfen, Werkzeuge für Erkennung und Abgleich, falls Sie keine haben, Engineering-Aufwand, Assets in Pipelines zu registrieren, und den routinemäßigen Aufwand für Stichproben und Korrekturen. Viele Organisationen besitzen bereits Erkennungs- und Endpoint-Werkzeuge. Ein bescheidenes Team kann ein Programm betreiben, und die laufenden Kosten sind niedrig, sobald die Registrierung automatisiert ist.

Der Ertrag sind vermiedene Verschwendung und verringertes Risiko. Genaue Datensätze verringern die Zahlung für ungenutzte Abonnements und Ressourcen, beschleunigen Incident-Reaktion und Patchen, weil man weiß, was existiert, und senken den Prüfungsaufwand. Vermeiden Sie, bestimmte prozentuale Einsparungen aus veröffentlichten Studien zu behaupten. Messen Sie Ihre eigene Baseline: die Zahl der eignerlosen Cloud-Ressourcen und ihre Monatskosten, die Zeit, eine Revisionsfrage zu beantworten, und die bezahlten, aber ungenutzten Lizenzen. Zählen Sie auch die Risikokosten: Ein unbekannter Server ist eine Sicherheitsexposition, und ein verlorenes Gerät mit Daten hat Meldekosten. Die finanzielle Behandlung der Kosten steht weiter hinten in diesem Teil (siehe Thema 7.5, Servicekosten und Stückökonomie).

## Anti-Muster und Fallstricke

- **Die jährliche Bereinigung.** Ein großer Aufwand einmal im Jahr verfällt binnen Wochen. Erfassen Sie kontinuierlich und ziehen Sie jedes Quartal Stichproben.
- **Nur das Register prüfen.** Es beweist, dass das Register mit sich selbst übereinstimmt. Ziehen Sie Stichproben aus unabhängigen Belegen in beiden Richtungen.
- **Eine perfekte Punktzahl.** Eine Zahl von 100 Prozent bedeutet meist engen Umfang oder schwache Belege. Schauen Sie, was ausgeschlossen wurde.
- **Eignerfelder mit einem Sammelteam gefüllt.** Es sieht vollständig aus und ist nutzlos. Zählen Sie Sammelverantwortung als Lücke.
- **Zu viele Felder.** Menschen füllen sie mit Standardwerten. Halten Sie den Datensatz bei dem, was Entscheidungen brauchen.
- **Erst das Werkzeug, später der Prozess.** Eine Erkennungsplattform ohne Verantwortungs- und Lebenszyklusregeln erzeugt ein größeres Durcheinander. Entscheiden Sie zuerst die Fragen.
- **Teams für Lücken bestrafen.** Sie verbergen Assets. Behandeln Sie Lücken als Befunde und beheben Sie die Ursache.
- **Die Entsorgung vergessen.** Ausgemusterte Assets, die im Register bleiben oder ohne Löschbeleg gehen, erzeugen Kosten und Risiko.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Erfassung | Tabellen, aktualisiert, wenn man daran denkt | Register für Hauptklassen, überwiegend manuell | Registrierung an Beschaffung und Pipelines gebunden | Registrierung automatisiert; Zeit bis zur Erfassung gemessen | Assets über Teams und Lieferanten aus einem Fluss von Ereignissen registriert |
| Genauigkeit | Unbekannt | Gelegentliche Zählungen | Vierteljährliche unabhängige Stichproben in beiden Richtungen | Genauigkeit und Lücken je Klasse verfolgt und in die Verbesserung gespeist | Unabhängige Prüfungen über IT, Finanzen und Sicherheit geteilt |
| Nutzung | Register nur für Prüfungen genutzt | Von einigen Teams genutzt | Patchen, Verlängerung und Budgetierung lesen aus dem Register | Nutzung überprüft; Felder auf Entscheidungen abgestimmt | Register treibt automatisierte Entscheidungen mit menschlicher Aufsicht |

## Checkliste

- [ ] Asset-Klassen und die Entscheidungen, die jeder Datensatz stützt, sind aufgelistet.
- [ ] Mindestfelder je Klasse sind definiert und im Kennzahlenregister festgehalten.
- [ ] Jede Klasse und jedes Asset hat einen benannten Eigner, aktuell gegen das Verzeichnis gehalten.
- [ ] Pipelines registrieren neue Infrastruktur mit Eigner und Service-Tag.
- [ ] Beschaffung und Anlage von Abonnements lösen Asset-Datensätze aus.
- [ ] Erkennungs- und Abrechnungsdaten werden monatlich mit dem Register abgeglichen.
- [ ] Eine Zufallsstichprobe wird jedes Quartal in beiden Richtungen geprüft.
- [ ] Lückenlisten mit Eignern und Daten werden mit Genauigkeitszahlen veröffentlicht.
- [ ] Entsorgung hat eine erfasste Methode und einen Beleg der Datenlöschung.
- [ ] Ungenutzte Felder sind entfernt; das Register wird in täglichen Entscheidungen genutzt.

## KI-Prompts

**Einen minimalen Asset-Datensatz entwerfen.**

```text
We manage these classes of IT asset in [type of organization]: [list]. The
decisions our asset data must support are: [list, for example patching,
renewal, audit, refresh, disposal]. For each class, propose the minimum fields
for the record, which source should supply each field, and how each could be
verified independently. Do not invent regulatory requirements. List your
assumptions and anything I should confirm with finance, security, or legal.
```

**Eine Zwei-Richtungen-Prüfstichprobe planen.**

```text
Our register holds [number] assets across [classes]. We also have discovery
data, procurement data, and cloud billing data. Design a quarterly audit with
random samples drawn from the register and from the other sources, say how big
each sample should be for a useful read (explain the reasoning without
overstating precision), what to record, and how to report accuracy and gaps
honestly. List your assumptions.
```

**Ein Abgleichsergebnis analysieren.**

```text
We reconciled our register with [source] and found: matched [number], in the
register only [number], in the source only [number]. Here are examples of each
group with the fields we hold: [paste anonymized examples]. Suggest likely
reasons for each mismatch, which are quick to fix, which need a process change,
and what to check first. Do not assume causes the data cannot support. List
your assumptions.
```

**Eine Prüfung für Abgänge und Wechsel entwerfen.**

```text
Draft a simple monthly process to find assets whose owners have left or changed
role, using the people directory and the asset register. Include steps, who
receives the list, the time allowed to reassign, what happens if nobody
responds, and how to record the outcome. Context: [tools and team size]. List
your assumptions and privacy considerations I should check.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Asset-Kennzahl zu finden, bevor Sie sie berichten.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Asset-Kennzahl seinen Manipulationsvektor, seine Leitplanke und seine Regel zu unabhängigen Belegen trägt.

## Wichtigste Erkenntnisse

- Erfassen Sie Assets im Moment der Änderung, vorzugsweise über Pipelines und Beschaffung, damit das Register ein Nebenprodukt der Arbeit ist.
- Messen Sie Genauigkeit gegen unabhängige Belege, mit Stichproben in beiden Richtungen.
- Jedes Asset braucht einen Eigner, und eignerlose Assets sind Befunde.
- Halten Sie den Datensatz klein und machen Sie ihn in täglichen Entscheidungen nützlich.
- Berichten Sie die Lücken, nicht nur die Überschrift, und misstrauen Sie einer perfekten Punktzahl.
- Planen Sie die Entsorgung so sorgfältig wie die Erstellung.

## Quellen und weiterführende Literatur

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: IT Asset Management*, TSO, 2020.
3. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
4. Redman, T. C., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
5. Wikipedia, [IT asset management](https://en.wikipedia.org/wiki/IT_asset_management).
6. Wikipedia, [Product lifecycle](https://en.wikipedia.org/wiki/Product_lifecycle).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Inventory management](https://en.wikipedia.org/wiki/Inventory_management).
9. Wikipedia, [Reconciliation (accounting)](https://en.wikipedia.org/wiki/Reconciliation_(accounting)).
10. Wikipedia, [Asset tracking](https://en.wikipedia.org/wiki/Asset_tracking).
11. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
12. Wikipedia, [Chain of custody](https://en.wikipedia.org/wiki/Chain_of_custody).
13. Wikipedia, [Fixed asset](https://en.wikipedia.org/wiki/Fixed_asset).
