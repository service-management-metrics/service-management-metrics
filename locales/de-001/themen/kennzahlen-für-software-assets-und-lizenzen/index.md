# Kennzahlen für Software-Assets und Lizenzen

**Software wird gekauft, abonniert, gebaut und geliehen, und jeder Weg erzeugt Pflichten und Kosten. Messen Sie also, wozu Sie berechtigt sind, was Sie tatsächlich nutzen und wovon Sie abhängen, und machen Sie es Teams leicht, Werkzeuge zu wählen, ohne später Überraschungen zu erzeugen.**

## Überblick und Motivation

Software ist die Asset-Klasse, die sich am schnellsten ändert und am schwersten zu sehen ist. Ein Entwickler fügt in Minuten eine Bibliothek hinzu. Ein Team meldet sich mit der Firmenkarte für ein Software-as-a-Service-Werkzeug an. Ein Anbieter ändert zwischen Verlängerungen sein Preismodell. Ein Vertrag erlaubt 500 Nutzer, und 700 haben Konten. [Software-Asset-Management](https://en.wikipedia.org/wiki/Software_asset_management) (SAM) ist die Geschäftspraktik, Einkauf, Deployment, Wartung, Nutzung und Entsorgung von Software in einer Organisation zu steuern und zu optimieren. Es sitzt innerhalb der breiteren Praktik des IT-Asset-Managements (siehe Thema 7.1, Kennzahlen für das IT-Asset-Management) und teilt deren Disziplin von Datensätzen, Eignern und Lebenszyklen.

Kontinuierliche Auslieferung und Software-Asset-Management ziehen bei der Geschwindigkeit in verschiedene Richtungen. Teams, die kontinuierlich liefern, müssen Werkzeuge schnell wählen und übernehmen und bauen auf Open-Source-Komponenten zu Hunderten. Software-Asset-Management will wissen, was in Nutzung ist, unter welchen Bedingungen, zu welchen Kosten und mit welchem Risiko. Beide haben recht. Der Weg hindurch ist kontinuierliche Zusammenarbeit zwischen Teams, Beschaffung, Recht, Sicherheit und Finanzen: den freigegebenen Weg schnell machen, den Katalog freigegebener Werkzeuge leicht auffindbar machen und die Prüfungen automatisch machen. Teams mit einem langen Genehmigungsprozess zu bremsen erzeugt [Schatten-IT](https://en.wikipedia.org/wiki/Shadow_IT), das Gegenteil der Sichtbarkeit, die alle wollen.

Vier Arten von Software zählen, und die Kennzahlen unterscheiden sich zwischen ihnen.

- **Lizenzierte Software**, auf Geräten oder Servern installiert, geregelt durch eine [Softwarelizenz](https://en.wikipedia.org/wiki/Software_license), die sagt, wer sie nutzen darf, wie viele sie nutzen dürfen und unter welchen Bedingungen. Berechtigungen können je Nutzer, je Gerät, je Kern oder je Standort gelten, und die Einheit entscheidet, wie Sie zählen.
- **Software as a Service.** [Software as a Service](https://en.wikipedia.org/wiki/Software_as_a_service) (SaaS) wird über ein Netzwerk genutzt und per Abonnement bezahlt, oft je Platz oder je Nutzung. Sie ist leicht zu übernehmen und leicht zu vergessen. Sich überschneidende Werkzeuge und ungenutzte Plätze sammeln sich an.
- **Open-Source-Komponenten.** [Open-Source-Software](https://en.wikipedia.org/wiki/Open-source_software) steht unter Lizenzen, die weite Rechte mit Bedingungen gewähren. Manche Lizenzen, sogenannte [Copyleft](https://en.wikipedia.org/wiki/Copyleft)-Lizenzen, verlangen, dass abgeleitete Werke unter denselben Bedingungen geteilt werden. Compliance hängt davon ab, wie eine Komponente genutzt und verbreitet wird, und die Auslegung einer Lizenz ist eine Rechtsfrage.
- **Software, die Sie bauen.** Ihr eigener Code ist ein Asset, und er hängt von vielen Komponenten ab. Eine [Software-Stückliste](https://en.wikipedia.org/wiki/Software_bill_of_materials) (SBOM) ist eine Liste der Komponenten in einer Software. Sie hilft Ihnen zu beantworten, welche Ihrer Services eine bestimmte Bibliothek nutzen, wenn eine Schwachstelle oder ein Lizenzproblem auftaucht.

Software-Asset-Kennzahlen sind der üblichen Verzerrung ausgesetzt. Eine Lizenzposition kann gesund aussehen, weil das Inventar unvollständig ist. Die Kosten von Shelfware können niedrig aussehen, weil Verträge vor dem Review gekürzt wurden. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt, jede Kennzahl hier ist also mit einer unabhängigen Prüfung gekoppelt (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Ein Vorbehalt zum Recht: Lizenzbedingungen und Prüfungsrechte sind Rechtsangelegenheiten. Dieses Thema beschreibt Messpraxis. Es legt keine Lizenz aus und ersetzt nicht den Rat qualifizierter Rechtsberater für Ihre Situation und Rechtsordnung.

## Leitprinzipien

- **Berechtigung gegen Nutzung messen.** Zu wissen, was man nutzen darf und was man nutzt, ist der Kernvergleich.
- **In der Einheit zählen, die die Lizenz nutzt.** Nutzer, Geräte, Kerne und Abonnements sind verschieden, und sie zu mischen verbirgt die Antwort.
- **Den freigegebenen Weg zum schnellen Weg machen.** Ein sichtbarer Katalog und schnelle Genehmigung verringern Schattenübernahme.
- **Komponenten ebenso einbeziehen wie Produkte.** Open-Source-Bibliotheken und ihre Lizenzen sind Teil der Landschaft.
- **Vor der Verlängerung überprüfen.** Der beste Zeitpunkt, Verschwendung zu kürzen, liegt vor dem Vertragsdatum.
- **Das Recht im Gespräch halten.** Auslegung gehört zu Menschen, die dazu qualifiziert sind.
- **Das Bild mit Teams teilen.** Teams, die ihre eigene Nutzung und Kosten sehen, entscheiden besser.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Effektive Lizenzposition | Vergleich gehaltener Berechtigungen mit gefundener Nutzung, je Produkt, in der eigenen Zähleinheit der Lizenz | gehaltene Berechtigungen minus gefundene Deployments oder Nutzer, je Produkt | Einheiten (Überschuss positiv, Fehlbetrag negativ) | Berechtigungsdatensätze, Erkennungswerkzeug, Identitätssystem | IT-Asset-Management; Lieferantenmanagement | Sichtbarer Katalog und Nutzungsdaten für Teams | Monatlich für Schlüsselprodukte; vierteljährlich für andere |
| Lizenzauslastung | Anteil der bezahlten Berechtigungen, die aktiv genutzt werden | Berechtigungen mit Aktivität in den letzten 90 Tagen / bezahlte Berechtigungen | Prozent | Nutzungsberichte der Anbieter, Identitäts-Logs, Berechtigungsdatensätze | IT-Asset-Management; Finanzmanagement | Retrospektive zum Wert des Werkzeugs | Monatlich |
| Kosten der Shelfware | Jährliche Kosten der Berechtigungen, die bezahlt und ungenutzt sind | Summe aus (ungenutzte Berechtigungen mal Stückkosten) | Währung pro Jahr | Berechtigungsdatensätze, Nutzungsdaten, Rechnungen | IT-Asset-Management; Finanzmanagement | Verschwendungsabbau in der Werkzeugkette | Vierteljährlich |
| Zahl nicht freigegebener Anwendungen | Zahl der in Nutzung befindlichen Softwareanwendungen, die nicht im freigegebenen Katalog stehen | in Spesendaten, Single-Sign-on-Logs oder Netzwerkdaten gesehene Anwendungen, die nicht im Katalog stehen | Anzahl | Spesenberichte, Identitätsanbieter, Netzwerk- und Endpoint-Daten | IT-Asset-Management; Informationssicherheitsmanagement | Teams wählen Werkzeuge mit sichtbarer Unterstützung | Monatlich |
| Verlängerungsbereitschaft | Anteil der Verlängerungen, die vor dem Kündigungsdatum ein Nutzungsreview hatten | Verlängerungen mit abgeschlossenem Nutzungsreview mindestens 90 Tage vor dem Kündigungsdatum / im Zeitraum fällige Verlängerungen | Prozent | Vertragsregister und Review-Aufzeichnungen | Lieferantenmanagement; Finanzmanagement | Vorausplanung für Veränderung | Vierteljährlich |
| SBOM-Abdeckung | Anteil der Produktionsservices mit einer aktuellen Software-Stückliste | Services mit einer im letzten Release-Zyklus erzeugten SBOM / Produktionsservices | Prozent | Ausgaben der Build-Pipeline, Servicekatalog | IT-Asset-Management; Informationssicherheitsmanagement | Definition of Done enthält Sichtbarkeit der Abhängigkeiten | Monatlich |
| Abdeckung der Open-Source-Prüfung | Anteil der Komponenten in der Produktion mit erfasster Lizenzidentifikation und Richtlinienentscheidung | Komponenten mit erfasster Lizenz und Entscheidung / in SBOMs gefundene Komponenten | Prozent | Werkzeug für Software Composition Analysis, Richtlinienregister | IT-Asset-Management; Lieferantenmanagement | Abhängigkeitsprüfung in der Pipeline | Monatlich |

Nennen Sie die Zähleinheit für jedes Produkt im Register. Die Auslastung zählt Aktivität ab einem definierten Ereignis, etwa einer Anmeldung, und einem genannten Fenster. Schließen Sie Dienstkonten und Testkonten nur dann aus den Nutzerzahlen aus, wenn die Lizenzbedingungen es erlauben, und halten Sie die Regel fest. Kosten sind der Vertragsstückpreis abzüglich vereinbarter Rabatte, und das Datum des Preises wird festgehalten.

## Empfehlungen

### Wissen, was man hält und was man nutzt

**1. Führen Sie für jedes Produkt, das Geld kostet oder Pflichten trägt, einen Berechtigungsdatensatz.** Der Datensatz sollte Anbieter, Produkt, Lizenztyp, Zähleinheit, Menge, Laufzeit, Preis, Verlängerungs- und Kündigungsdaten, Beschränkungen und den Eigner halten. Legen Sie den Vertrag oder einen Link darauf ab. Die Kennzahl hängt von diesem Datensatz ab, und er existiert oft nicht für Abonnements, die außerhalb der Beschaffung gekauft wurden.

**2. Messen Sie Nutzung in der Einheit des Anbieters.** Platzlizenzen zählen benannte Nutzer, Prozessorlizenzen zählen Kerne. Auslastung gegen die falsche Einheit gibt falsche Beruhigung. Wo Bedingungen komplex sind, bitten Sie Beschaffung und Recht, die Zählregel einmal in einfacher Sprache zu beschreiben, und halten Sie sie fest.

**3. Kombinieren Sie drei Quellen von Nutzungsdaten.** Die Admin-Konsole des Anbieters, die Anmelde-Logs Ihres Identitätsanbieters und Ihre Erkennungswerkzeuge sehen je einen Teil. Wo sie sich widersprechen, finden Sie heraus, warum. Ein zugewiesener, aber nie genutzter Platz ist ein Kandidat zum Zurückholen, und ein Nutzer, der in einem Log erscheint und in einem anderen nicht, kann ein Datenproblem sein.

**4. Holen Sie ungenutzte Plätze standardmäßig zurück.** Setzen Sie eine Regel, etwa den Zugriff nach 90 Tagen ohne Nutzung zu entfernen und auf Anfrage wiederherzustellen. Machen Sie das Wiederherstellen leicht, damit die Regel Menschen nicht frustriert. Zurückholen ist eine kontinuierliche Praxis, kein Projekt, und es funktioniert am besten automatisiert und angekündigt.

### Den richtigen Weg zum leichten Weg machen

**5. Veröffentlichen Sie einen Katalog freigegebener Werkzeuge.** Listen Sie auf, was Teams nutzen können, was es kostet, wer es unterstützt und wie man Zugriff anfordert. Fügen Sie einen schnellen Weg hinzu, ein neues Werkzeug vorzuschlagen, mit kurzem Review auf Sicherheit, Datenschutz und Kosten. Ein Katalog, der Menschen hilft, das vorhandene Werkzeug zu finden, verhindert doppelte Käufe (siehe Thema 6.3, Kennzahlen für Service-Akzeptanz und Katalog).

**6. Achten Sie auf Wildwuchs, ohne ihn zu bestrafen.** Nutzen Sie Spesendaten, Single-Sign-on-Logs und Netzwerkdaten, um Anwendungen zu finden, die nicht im Katalog stehen. Behandeln Sie jede als Gespräch: Was braucht das Team, und könnte ein freigegebenes Werkzeug dienen? Zählen Sie die nicht freigegebenen Anwendungen und verfolgen Sie den Trend, und zielen Sie darauf, nützliche unter Steuerung zu bringen, nicht sie auszumerzen.

**7. Geben Sie Teams Sicht auf ihre eigene Nutzung und Kosten.** Eine monatliche Sicht auf Plätze, Nutzung und Kosten nach Team lässt sie ihre eigenen Abonnements aufräumen. Sichtbarkeit wirkt besser als Kontrolle, und sie respektiert die agile Vorliebe für selbstorganisierende Teams mit den Informationen, die sie brauchen.

### Verlängerungen planen und Abhängigkeit steuern

**8. Überprüfen Sie die Nutzung vor jeder bedeutenden Verlängerung.** Setzen Sie ein Review 90 bis 120 Tage vor dem Kündigungsdatum an, mit Eigner, Beschaffung und Finanzen. Bringen Sie Auslastung, Kosten der Shelfware, Alternativen und das Feedback des Teams mit. Die Verlängerungsbereitschaft ist der Anteil der Verlängerungen, die dieses Review rechtzeitig erreichen. Ein verpasstes Kündigungsdatum ist ein Kostenpunkt mit einer Ursache.

**9. Achten Sie auf Anbieterbindung.** [Vendor Lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) macht es teuer, den Lieferanten zu wechseln. Halten Sie für wichtige Produkte den Ausstiegsweg fest: Datenexportformate, Vertragsbedingungen bei Beendigung und den Aufwand des Ersetzens. Sie müssen Abhängigkeit nicht vermeiden, sollten aber ihren Preis kennen.

**10. Erzeugen Sie bei jedem Release eine SBOM.** Build-Werkzeuge können als Teil der Pipeline automatisch eine SBOM erzeugen, sodass die Information ohne laufenden Aufwand aktuell bleibt. Legen Sie sie beim Release ab und machen Sie sie durchsuchbar, damit Sie beantworten können, welche Services eine Komponente nutzen. Das stützt Lizenzierung und Sicherheitsreaktion gleichermaßen.

**11. Überprüfen Sie Open-Source-Lizenzen in der Pipeline.** Werkzeuge der [Software Composition Analysis](https://en.wikipedia.org/wiki/Software_composition_analysis) identifizieren Komponenten und ihre Lizenzen. Vereinbaren Sie mit dem Recht eine kurze Richtlinie, welche Lizenzen freigegeben sind, welche Prüfung brauchen und welche für Ihre Nutzung nicht erlaubt sind, und lassen Sie die Pipeline Ausnahmen kennzeichnen. Halten Sie die Richtlinienentscheidungen in einem Register. Das Werkzeug identifiziert Lizenzen, und eine zur Auslegung qualifizierte Person entscheidet die schwierigen Fälle.

### Ruhig auf Prüfungen vorbereiten

**12. Halten Sie Belege bereit, kein Gerangel.** Ein [Software-Audit](https://en.wikipedia.org/wiki/Software_audit) durch einen Anbieter oder Regulierer bittet Sie nachzuweisen, dass Ihre Nutzung zu Ihren Berechtigungen passt. Sind Berechtigungsdatensätze und Nutzungsdaten jeden Monat bereits abgeglichen, ist ein Audit eine Routineanfrage. Beziehen Sie Recht und Beschaffung früh ein, antworten Sie über einen Kanal und berichten Sie nicht selbst Schlussfolgerungen, die Sie nicht mit ihnen überprüft haben.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Effektive Lizenzposition | In einer günstigen Einheit zählen; Schatten-Deployments aus der Erkennung lassen | In der eigenen Einheit der Lizenz zählen; mit Spesen- und Identitätsdaten vergleichen; rechtliche Prüfung der Zählregel |
| Lizenzauslastung | Das Aktivitätsfenster verkürzen; Anmeldungen durch Bots oder Dienstkonten als Nutzung zählen | Festes Fenster im Register; nichtmenschliche Konten ausschließen; mit Nutzungsbericht des Anbieters vergleichen |
| Kosten der Shelfware | Kurz vor dem Review neu verhandeln oder kündigen, um die Zahl zu senken; Abonnements auf Karten ignorieren | Alle Ausgabenquellen einbeziehen; Kosten zu Beginn des Kündigungsfensters verfolgen |
| Zahl nicht freigegebener Anwendungen | Alles in den Katalog freigeben, um die Zahl zu senken; Nutzung über private Konten verbergen | Prüfkriterien für den Katalog; auf Ausgaben- und Identitätsdaten schauen; Teams fragen, was sie brauchen |
| Verlängerungsbereitschaft | Ein pro-forma Review abhalten; das Kündigungsdatum später ansetzen | Review-Checkliste mit erforderlichen Eingaben; Vertragsdaten bei der Beschaffung gehalten |
| SBOM-Abdeckung | SBOMs erzeugen, die transitive Abhängigkeiten auslassen; Build-Ausgaben zählen, die nicht released sind | Tiefe im Register definieren; eine SBOM stichprobenartig gegen das deployte Artefakt prüfen |
| Abdeckung der Open-Source-Prüfung | Komponenten ohne Entscheidung als überprüft markieren; „unbekannte“ Lizenzen akzeptieren | Komponenten mit unbekannter Lizenz zählen; eine Stichprobe von Entscheidungen überprüfen |

Ein gesunder Befund ist eine Lizenzposition, die zu unabhängigen Belegen passt, eine Auslastung, die steigt, weil Plätze zurückgeholt werden und nicht weil sich die Definition änderte, eine Zahl nicht freigegebener Anwendungen, die sinkt, während sich der Katalog verbessert, und Verlängerungen, die mit einem Review eintreffen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Zentrale Genehmigung aller Werkzeuge | Starke Kontrolle, eine Sicht | Langsam; fördert Schatten-IT |
| Teamwahl innerhalb von Leitplanken | Schnell; passt zu den Teambedürfnissen | Mehr Vielfalt; braucht Sichtbarkeit und Review |
| Aggressives Zurückholen von Plätzen | Spart Kosten | Kann Nutzer frustrieren, wenn Wiederherstellen langsam ist |
| Großzügige Bereitstellung von Plätzen | Wenig Reibung | Verschwendung sammelt sich |
| Enterprise-Vereinbarungen | Niedrigere Stückkosten, einfacher | Bindung; Zahlung für unnötige Breite |
| Nutzungsbasierte Abrechnung | Passt Kosten der Nutzung an | Unvorhersehbare Rechnungen |
| Automatisches Lizenz-Scannen | Konsistent und schnell | Braucht menschliches Urteil bei Grenzfällen |
| Manuelle Prüfung von Komponenten | Sorgfältig | Skaliert nicht für große Abhängigkeitsbäume |

Die Antwort in Worten ist, Teams Wahl innerhalb klarer Leitplanken zu geben, die Prüfungen zu automatisieren und menschliche Aufmerksamkeit auf die großen Verträge und die schwierigen Lizenzfragen zu verwenden. Halten Sie einen schnellen Weg für neue Werkzeuge und einen leichten Weg für das Wiederherstellen zurückgeholten Zugriffs vor.

## Fragen für die Diskussion im Team

**1. Welche drei Produkte kosten uns am meisten, und wissen wir, wie viele Menschen sie nutzen?**
Listen Sie die größten Verträge und die Zähleinheit für jeden auf. Vergleichen Sie mit Nutzungsdaten. Die Moderation sollte nach Produkten suchen, bei denen niemand die Einheit kennt oder Nutzungsdaten nicht existieren. Einigen Sie sich, vor der nächsten Verlängerung die Daten für eines zu erheben.

**2. Wie wird hier ein neues Werkzeug übernommen, und wie lange dauert es?**
Verfolgen Sie ein jüngeres Beispiel von der Anfrage bis zum Zugriff. Fragen Sie, wie viele Teams den Weg übersprangen und warum. Die Antwort zeigt, ob der freigegebene Weg schnell ist. Einigen Sie sich auf eine Verbesserung des Weges und eine Möglichkeit zu erfahren, ob sie wirkte.

**3. Was geschähe, wenn ein Anbieter uns bäte, unsere Lizenzposition nächsten Monat nachzuweisen?**
Gehen Sie durch, wer antworten würde, welche Datensätze existieren und welche Lücken es gibt. Das Gespräch sollte nicht rechtliche Schlussfolgerungen suchen, sondern nur fehlende Datensätze identifizieren. Benennen Sie die Personen in Recht und Beschaffung, die beteiligt wären, und wie das Team sie erreichen würde.

**4. Wo holen wir ungenutzte Plätze zurück, und wo nicht?**
Überprüfen Sie die Regeln zum Zurückholen für die wichtigsten Produkte. Fragen Sie, was geschähe, wenn eine Regel auf den Rest angewandt würde. Besprechen Sie, wie sich das Wiederherstellen von Zugriff schmerzlos machen lässt, denn das macht die Regel akzeptabel.

**5. Können wir sagen, welche unserer Services eine bestimmte Open-Source-Bibliothek nutzen?**
Wählen Sie eine bekannte Bibliothek und versuchen Sie zu antworten. Dauert es mehr als wenige Minuten, besprechen Sie warum. Einigen Sie sich, welcher Pipeline-Schritt eine SBOM erzeugen könnte und wo die Ergebnisse abgelegt werden könnten.

**6. Wovon hängen wir ab, das schwer zu verlassen wäre?**
Listen Sie Produkte auf, deren Daten oder Workflow eng an einen Anbieter gebunden sind. Fragen Sie, was das Verlassen kosten würde und wie man anfangen würde. Die Moderation kann die Antwort als Eingabe für die Verlängerungsplanung festhalten.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams wählen täglich Werkzeuge und Bibliotheken. Sie sollten den freigegebenen Katalog nutzen, wo er ihnen dient, Ergänzungen mit einer kurzen Notiz vorschlagen und die Pipeline SBOMs erzeugen und Lizenzprobleme kennzeichnen lassen. Sie brauchen schnelle Antworten: eine klare Richtlinie zu üblichen Lizenzen und einen Weg, nach ungewöhnlichen zu fragen. Ein Team, das seine eigenen Platz- und Ausgabendaten sieht, räumt sie auf, ohne dass man es ihm sagt.

### Service- und Betriebsteams

Betriebsteams betreiben die Erkennung, steuern Zugriffe und bearbeiten Verlängerungen und Prüfungen. Sie sollten Nutzungsdaten mit Berechtigungen abgleichen, ungenutzte Plätze nach Plan zurückholen und das Vertragsregister aktuell halten. Sie tragen auch die Supportlast ungesteuerter Werkzeuge, was ein guter Grund ist, nützliche unter Steuerung zu bringen.

### Führung und Governance

Führungskräfte wollen ungeplante Kosten und rechtliche Angriffsfläche vermeiden, ohne Teams zu bremsen. Sie sollten die Automatisierung finanzieren, nach den unabhängigen Belegen hinter Aussagen zur Lizenzposition fragen und Recht und Beschaffung eingebunden halten. Die Governance sollte erwarten, dass Verlängerungen rechtzeitig überprüft und die Open-Source-Richtlinie in der Pipeline angewandt wird.

### Kunden und Nutzer

Nutzer wollen, dass das Werkzeug, das sie brauchen, beim ersten Mal funktioniert, ohne lange Wartezeit. Sie bemerken, wenn Zugriff ohne Warnung verschwindet oder zwei Werkzeuge dieselbe Arbeit tun. Ihnen sollte gesagt werden, wann Plätze zurückgeholt werden, sie sollten einen leichten Weg haben, Zugriff zu erbitten, und konsultiert werden, wenn ein Werkzeug ersetzt wird.

## In der Praxis: ein Beispiel aus dem Service-Management

Die Technikgruppe einer regionalen Nachrichtenorganisation unterstützt 900 Mitarbeitende und betreibt eine Publikationsplattform mit etwa 40 Services. Die Zahlen unten sind illustrativ.

Der Finanzdirektor fragt, warum die Softwarekosten schneller gewachsen sind als die Mitarbeiterzahl. Der Software-Asset-Manager sammelt die Daten. Die Berechtigungsdatensätze decken 61 Produkte ab. Anmelde-Logs und Anbieterberichte zeigen, dass die Design-Suite 220 Plätze und 140 aktive Nutzer in den letzten 90 Tagen hat, eine Auslastung von 64 Prozent, wobei die ungenutzten Plätze etwa so viel kosten wie das Gehalt eines Ingenieurs. Spesendaten zeigen 37 Anwendungen, die nicht im Katalog stehen, überwiegend Kollaborations- und Analytik-Werkzeuge, die Teams gekauft haben. Bei drei der größten Verlängerungen verstrichen die Kündigungsdaten ohne Nutzungsreview.

Das Team nimmt mit den Produktteams vier Änderungen vor. Eine Regel zum Zurückholen von Plätzen entfernt den Zugriff nach 90 Tagen ohne Nutzung, mit einer Ein-Klick-Anfrage zur Wiederherstellung. Eine Katalogseite listet freigegebene Werkzeuge, ihre Kosten und einen Eigner, mit einem Zwei-Tage-Weg, ein neues Werkzeug vorzuschlagen. Verlängerungsreviews beginnen 100 Tage vor dem Kündigungsdatum, mit einer Checkliste aus Auslastung, Alternativen und Teamfeedback. Die Build-Pipeline der Publikationsplattform erzeugt nun bei jedem Release eine SBOM, und ein Lizenz-Scan kennzeichnet Komponenten mit unbekannten oder eingeschränkten Lizenzen zur Prüfung durch das Recht.

Drei Monate später liegt die Auslastung der Design-Suite nach dem Zurückholen von 60 Plätzen bei 86 Prozent, und eine Verlängerung wird auf eine niedrigere Platzzahl neu verhandelt. Die Zahl nicht freigegebener Anwendungen fällt von 37 auf 24, da das Team vier nützliche Werkzeuge in den Katalog aufnimmt und Duplikate einstellt. Die SBOM-Abdeckung liegt bei 70 Prozent der Produktionsservices. Der Scan findet in einem selten genutzten Service eine Komponente mit unbekannter Lizenz, die das Recht prüft und das Team ersetzt. Ein Anbieter bittet für ein anderes Produkt um eine Lizenzüberprüfung, und die für die Prüfung erzeugten Datensätze stimmen überein, mit einer Korrektur. Der Direktor bittet um ein Versprechen von 100 Prozent Auslastung, und die Managerin erklärt, dass eine gesunde Zahl etwas Spielraum für Neueinsteiger und Änderungen lässt, und schlägt eine Spanne als Richtwert vor, nicht als Ziel. Die Entscheidung wird festgehalten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Machen Sie es Teams leicht, Werkzeuge über einen kurzen, sichtbaren Prozess zu wählen, und überprüfen Sie die Nutzung regelmäßig mit Stakeholdern. Zu beachten ist, dass ein strikter Genehmigungsprozess Menschen zu nicht freigegebenen Werkzeugen drängt.

### KI

KI-Services bringen neue Lizenzmodelle, die auf Plätzen, Tokens oder Nutzung beruhen, und neue Pflichten zu Daten und Modellbedingungen. Verfolgen Sie Lizenzauslastung und Kosten je aktivem Nutzer für KI-Werkzeuge und koppeln Sie sie mit einer Nützlichkeitsprüfung durch Nutzer. Zu beachten ist, dass nutzungsbasierte Preise unbemerkt wachsen können; setzen Sie also Alarme und Eigner.

### Automatisierung

Erfassen Sie Berechtigungs- und Nutzungsdaten automatisch und erzeugen Sie die Software-Stückliste in der Pipeline. Messen Sie die Automatisierung an Abdeckung und Fehlalarmen. Zu beachten ist, dass eine Stückliste, die erzeugt, aber nicht gelesen wird, Risiko nicht verringert.

### Analytik

Zeigen Sie die effektive Lizenzposition und die Kosten der Shelfware mit dem Datum der Daten. Die Entscheidung, die dies untermauert, ist, was zu verlängern, zu verringern oder fallen zu lassen ist. Zu beachten ist, dass Lizenzregeln komplex sind; bitten Sie also eine Fachperson um die Vertragsauslegung.

## Branchenperspektive

**Startup.** Werkzeuge werden schnell gewählt und per Karte bezahlt. Führen Sie eine einseitige Liste der Abonnements mit Eignern und Verlängerungsdaten, überprüfen Sie sie vierteljährlich und nutzen Sie kostenlose Stufen bewusst. Achten Sie auf Open-Source-Lizenzen, bevor Sie Software verbreiten oder Investitionen einwerben, denn Investoren fragen womöglich danach.

**Kleinunternehmen.** Eine Handvoll Produkte trägt den größten Teil der Kosten. Verfolgen Sie Platzzahlen von Hand, setzen Sie Kalendererinnerungen für Verlängerungen und bitten Sie Anbieter um Nutzungsberichte. Hüten Sie sich vor automatisch verlängernden Abonnements und vor Lizenzen, die an eine Person gebunden sind, die gegangen ist.

**Großunternehmen.** Komplexe Verträge, Fusionen und viele Geschäftsbereiche erschweren Berechtigungsdatensätze. Investieren Sie in ein Datenmodell, das Zähleinheiten hält, automatisieren Sie Erkennungs- und Identitäts-Feeds und geben Sie Recht und Beschaffung einen Platz in der Pipeline für die Open-Source-Richtlinie. Erwarten Sie Anbieter-Audits und bereiten Sie Belege im Voraus vor.

**Behörden und öffentlicher Sektor.** Beschaffungsregeln, Lizenzierung im öffentlichen Interesse und Souveränitätsanforderungen prägen die Wahl. Dokumentieren Sie die Gründe von Käufen, bewahren Sie Vertragsunterlagen für die vorgeschriebene Zeit auf und betrachten Sie offene Standards und Ausstiegswege als Anforderungen. Transparenz über Softwareausgaben kann eine gesetzliche Pflicht sein (siehe Thema 8.4, Kennzahlen für Lieferanten und Verträge).

## Business Case: Motive, ROI und TCO

Die Kosten sind die Zeit, den Berechtigungsdatensatz aufzubauen, Werkzeuge für Nutzungs- und Kompositionsanalyse und der Aufwand, Verlängerungen zu überprüfen. Manche Werkzeuge sind bereits als Teil von Identitäts- oder Endpoint-Plattformen lizenziert. Die laufenden Kosten sind für eine kleine Landschaft einige Stunden im Monat und für eine große mehr. Das Automatisieren von Zurückholen und SBOM-Erzeugung senkt sie.

Der Ertrag kommt aus vermiedenen Ausgaben und vermiedener Überraschung. Ungenutzte Plätze sind direkte Einsparungen bei der Verlängerung. Frühe Verlängerungsreviews lassen Sie aus Wissen verhandeln. Ihre Abhängigkeiten zu kennen verkürzt die Reaktion auf Schwachstellen und Lizenzfragen. Vermeiden Sie, Branchen-Einsparungsprozente zu zitieren, die Sie nicht zurückverfolgen können. Messen Sie Ihre eigene Baseline: ungenutzte Plätze mal Stückkosten, die Zahl der zu spät überprüften Verlängerungen, die Zeit, „welche Services nutzen diese Komponente“ zu beantworten, und die Kosten früherer Prüfungsbefunde. Nehmen Sie die Kosten des Programms selbst auf und zählen Sie vermiedene rechtliche Angriffsfläche nur dort, wo Sie ein bestimmtes verringertes Risiko beschreiben können. Die nächsten Themen zu Kosten führen die finanzielle Sicht weiter (siehe Thema 7.5, Servicekosten und Stückökonomie).

## Anti-Muster und Fallstricke

- **In der falschen Einheit zählen.** Eine Platzzahl für eine nach Kernen verkaufte Lizenz führt in die Irre. Halten Sie die Einheit fest.
- **Den Bericht des Anbieters als die ganze Wahrheit behandeln.** Kombinieren Sie ihn mit Ihren eigenen Logs.
- **Werkzeuge standardmäßig blockieren.** Teams umgehen die Blockade. Machen Sie den freigegebenen Weg schnell.
- **Zurückholen ohne Weg zurück.** Nutzer verlieren Vertrauen. Machen Sie das Wiederherstellen leicht und schnell.
- **Verlängerungen nach dem Kündigungsdatum überprüfen.** Der Hebel ist weg. Beginnen Sie früh.
- **Lizenzen scannen und die Ergebnisse ignorieren.** Ein Scan ohne Richtlinie und Entscheidungseigner ist Rauschen.
- **Lizenzen im Lieferteam auslegen.** Schwierige Fälle gehören zum Recht.
- **SBOMs als Papierkram behandeln.** Fragt niemand sie ab, verfallen sie. Nutzen Sie sie in Reaktionsübungen.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Berechtigungen und Nutzung | Verträge in E-Mails; keine Nutzungsdaten | Datensätze für Hauptprodukte; gelegentliche Nutzungsprüfungen | Berechtigungsdatensätze mit Zähleinheiten; Nutzung aus Identitäts- und Anbieterdaten | Lizenzposition und Auslastung monatlich überprüft; Plätze automatisch zurückgeholt | Nutzung und Ausgaben mit Teams geteilt; Einkaufs- und Nutzungsdaten fließen zwischen Lieferanten und Organisation |
| Übernahmeweg | Teams kaufen, was sie mögen | Eine Liste freigegebener Werkzeuge | Schneller Katalogweg mit Eignern und Prüfkriterien | Nicht freigegebene Anwendungen verfolgt und aufgenommen oder eingestellt | Werkzeugwahl gemeinsam mit Teams entworfen; gemeinsame Services in der Organisation wiederverwendet |
| Komponenten und Abhängigkeiten | Unbekannt | Manuelle Komponentenlisten für einige Services | SBOM bei Release erzeugt; Lizenzrichtlinie mit dem Recht vereinbart | Abdeckung verfolgt; Ausnahmen überprüft; Reaktionsübungen durchgeführt | SBOMs und Richtlinie mit Lieferanten und Kunden geteilt; Ausstiegswege geplant |

## Checkliste

- [ ] Jedes bezahlte oder pflichttragende Produkt hat einen Berechtigungsdatensatz mit Einheit, Menge, Laufzeit und Eigner.
- [ ] Nutzung stammt aus mindestens zwei Quellen, für Schlüsselprodukte monatlich verglichen.
- [ ] Das Zurückholen von Plätzen hat eine Regel, eine Ankündigung und einen leichten Weg zurück.
- [ ] Ein Katalog freigegebener Werkzeuge existiert, mit einem schnellen Weg, ein neues vorzuschlagen.
- [ ] Spesen- und Identitätsdaten werden auf nicht freigegebene Anwendungen geprüft.
- [ ] Verlängerungsreviews beginnen mindestens 90 Tage vor dem Kündigungsdatum.
- [ ] SBOMs werden für jedes Release von Produktionsservices erzeugt und abgelegt.
- [ ] Eine mit dem Recht vereinbarte Lizenzrichtlinie kennzeichnet Ausnahmen in der Pipeline.
- [ ] Ausstiegswege bei Anbietern sind für wichtige Produkte erfasst.
- [ ] Kontakte in Recht und Beschaffung für Prüfungen sind benannt und den Teams bekannt.

## KI-Prompts

**Eine Vorlage für Berechtigungsdatensätze bauen.**

```text
Draft a template for recording software entitlements for [type of organization],
covering these product types: [licensed, SaaS, open-source, built]. Fields should
include counting unit, quantity, term, price, notice date, restrictions, owner,
usage source, and exit notes. Suggest how to fill each field from existing
sources: [list]. Do not interpret any license terms. List your assumptions and
the fields that need legal or procurement input.
```

**Ein Verlängerungsreview vorbereiten.**

```text
We have a renewal for [product] with a notice date of [date]. Facts: entitled
[number] [units], active use [number] in the last 90 days, annual cost
[amount], and team feedback [summary]. Draft a one-page renewal review with
questions to ask, options (renew as is, reduce, replace, renegotiate), and the
information we still need. Do not invent market prices. List your assumptions.
```

**Eine Regel zum Zurückholen von Plätzen entwerfen.**

```text
Propose a seat reclamation policy for [product] used by [number] people in
[type of organization]. Include the inactivity window, notice to users, how
to restore access, exceptions (for example leave or seasonal use), and how to
measure whether it helps without annoying users. Context: [tools available].
List your assumptions and risks.
```

**Ein Lizenz-Scan-Ergebnis triagieren.**

```text
Our scan of [service] found these components and licenses: [paste list with
license identifiers]. Our policy: approved [list], review needed [list], not
permitted [list]. Sort the components into those three groups, flag unknown or
ambiguous cases, and suggest what to ask legal for each flagged item. Do not
give legal conclusions. List your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Kennzahl zu Software-Assets oder Lizenzen zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Softwarekennzahl seine Zähleinheit, seinen Manipulationsvektor und seine Leitplanke nennt.

## Wichtigste Erkenntnisse

- Vergleichen Sie Berechtigungen mit der tatsächlichen Nutzung, gezählt in der eigenen Einheit der Lizenz.
- Machen Sie den freigegebenen Weg zum schnellen Weg, damit Teams nicht verbergen müssen, was sie nutzen.
- Überprüfen Sie die Nutzung vor Kündigungsdaten von Verlängerungen und holen Sie ungenutzte Plätze nach einer sichtbaren Regel zurück.
- Erzeugen Sie SBOMs in der Pipeline und kennzeichnen Sie Lizenzen gegen eine mit dem Recht vereinbarte Richtlinie.
- Halten Sie Recht und Beschaffung bei Auslegung und Prüfungen eingebunden.
- Geben Sie Teams Sicht auf ihre eigene Nutzung und Kosten.

## Quellen und weiterführende Literatur

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. ISO/IEC 19770-3, *Information technology: IT asset management: Part 3: Entitlement schema*, International Organization for Standardization.
3. National Telecommunications and Information Administration, *The Minimum Elements For a Software Bill of Materials (SBOM)*, United States Department of Commerce, 2021.
4. ISO/IEC 5962, *Information technology: SPDX Specification*, International Organization for Standardization, 2021.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Software asset management](https://en.wikipedia.org/wiki/Software_asset_management).
8. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
9. Wikipedia, [Software license](https://en.wikipedia.org/wiki/Software_license).
10. Wikipedia, [Software as a service](https://en.wikipedia.org/wiki/Software_as_a_service).
11. Wikipedia, [Open-source software](https://en.wikipedia.org/wiki/Open-source_software).
12. Wikipedia, [Copyleft](https://en.wikipedia.org/wiki/Copyleft).
13. Wikipedia, [Software bill of materials](https://en.wikipedia.org/wiki/Software_bill_of_materials).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
16. Wikipedia, [Software composition analysis](https://en.wikipedia.org/wiki/Software_composition_analysis).
17. Wikipedia, [Software audit](https://en.wikipedia.org/wiki/Software_audit).
