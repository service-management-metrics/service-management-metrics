# Kennzahlen für Konfigurations- und CMDB-Qualität

**Eine Konfigurationsdatenbank verdient ihren Unterhalt nur, wenn Menschen ihr genug vertrauen, um sie bei einem Change oder Incident zu nutzen. Messen Sie ihre Qualität also daran, wie gut sie echte Fragen beantwortet, und lassen Sie die Teams, die Services besitzen, ihre eigenen Datensätze aktuell halten.**

## Überblick und Motivation

Fällt um drei Uhr morgens ein Datenbankserver aus, fragt jemand, welche Services davon abhängen. Plant ein Team einen Change, fragt jemand, was sonst kaputtgehen könnte. Die Antworten sollten aus einem Datensatz der Dinge kommen, aus denen Ihre Services bestehen, und wie sie verbunden sind. Dieser Datensatz ist der Gegenstand des Konfigurationsmanagements, und die Datenbank dahinter ist die Configuration Management Database, meist CMDB abgekürzt.

Ein [Konfigurationselement](https://en.wikipedia.org/wiki/Configuration_item) (Configuration Item, CI) ist jede Komponente, die gesteuert werden muss, um einen IT-Service zu liefern: ein Server, eine Anwendung, eine Datenbank, ein Netzwerkgerät, ein Cloud-Konto, ein Vertrag. Eine [Configuration Management Database](https://en.wikipedia.org/wiki/Configuration_management_database) speichert Informationen über CIs, ihre Attribute und die Beziehungen zwischen ihnen. Wo Asset-Management fragt, was Sie haben, wem es gehört und was es kostet (siehe Thema 7.1, Kennzahlen für das IT-Asset-Management), fragt Konfigurationsmanagement, wie die Teile zusammenpassen und was wovon abhängt.

CMDBs haben einen gemischten Ruf, und der Ruf ist verdient. Viele wurden als umfassende Karten gebaut, mit Daten gefüllt, die schneller verfielen, als irgendjemand sie beheben konnte, und dann aufgegeben. Die Traditionen von Agilität und DevOps bieten einen besseren Ausgangspunkt. Teams, die ihre Infrastruktur als Code beschreiben, haben eine verbindliche, versionierte Definition dessen, was sie betreiben, und können sie automatisch in den gemeinsamen Datensatz veröffentlichen. [Infrastructure as Code](https://en.wikipedia.org/wiki/Infrastructure_as_code) macht den Datensatz zum Nebenprodukt der Auslieferung. ITIL 4 beschreibt die Praktik als Service-Konfigurationsmanagement und betont die Informationen, die zur Stützung von Entscheidungen nötig sind, nicht Vollständigkeit um ihrer selbst willen.

Qualität in einem Konfigurationsdatensatz hat mehrere Teile, und sie entsprechen der breiteren Idee der [Datenintegrität](https://en.wikipedia.org/wiki/Data_integrity):

- **Vollständigkeit:** Die CIs und Attribute, auf die es ankommt, sind vorhanden.
- **Genauigkeit:** Was der Datensatz sagt, stimmt mit der Wirklichkeit überein.
- **Aktualität:** Änderungen erscheinen früh genug im Datensatz, um nützlich zu sein.
- **Konsistenz:** Dasselbe wird nicht zweimal unter verschiedenen Namen erfasst. Datensätze zuzuordnen, die sich auf dasselbe beziehen, ist das Problem der [Entity Resolution](https://en.wikipedia.org/wiki/Entity_resolution).
- **Qualität der Beziehungen:** Abhängigkeiten zwischen CIs sind vorhanden und richtig. Hier liegt der meiste Wert und der meiste Verfall.

Der tiefste Test einer CMDB ist Nutzung. Ein Datensatz, den Menschen bei Incidents und Changes zu Rate ziehen und korrigieren, wenn er falsch ist, ist gesund. Ein Datensatz, der nur geprüft wird, ist es nicht. Die folgenden Kennzahlen koppeln deshalb Qualitätskennzahlen mit Nutzungskennzahlen.

Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt mit einer Wendung: Vollständigkeit lässt sich mit Standardwerten leicht aufblähen, und Genauigkeit lässt sich leicht behaupten, ohne zu prüfen. Bestehen Sie auf unabhängigen Belegen und auf Kennzahlen der Nutzung (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Leitprinzipien

- **Bei den Fragen beginnen.** Entscheiden Sie, was der Datensatz beantworten soll, und bauen Sie nur das.
- **Einen kleineren, vertrauten Datensatz einem größeren, zweifelhaften vorziehen.** Der Umfang wächst, wenn Vertrauen verdient ist.
- **Die Wahrheitsquelle den Datensatz speisen lassen.** Pipelines, Cloud-APIs und Erkennung sollten in ihn schreiben, nicht Menschen mit Tabellen.
- **Service-Teams die Datensätze ihrer Services besitzen lassen.** Sie kennen ihre Abhängigkeiten, und sie spüren die Kosten von Fehlern.
- **Nach Nutzung ebenso messen wie nach Qualität.** Ein guter Datensatz wird zu Rate gezogen.
- **Gegen die Wirklichkeit prüfen.** Testen Sie den Datensatz, indem Sie fragen, ob er vorhersagt, was geschieht.
- **An der Quelle beheben.** Ein falscher Datensatz ist ein Symptom. Finden Sie den Prozess, der ihn driften ließ.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CI-Vollständigkeit | Anteil der CIs im Umfang, bei denen alle erforderlichen Attribute mit gültigen Werten befüllt sind | CIs im Umfang mit jedem erforderlichen Attribut gültig / CIs im Umfang | Prozent | CMDB, Attributregeln | Service-Konfigurationsmanagement; IT-Asset-Management | Definition of Done enthält die Servicebeschreibung | Monatlich |
| CI-Genauigkeit | Anteil der in einer Stichprobe gezogenen CIs, deren Datensatz in den erforderlichen Attributen mit dem Beleg übereinstimmt | in allen erforderlichen Attributen übereinstimmende gezogene CIs / gezogene CIs | Prozent | Prüfstichprobe, mit dem Live-System verglichen | Service-Konfigurationsmanagement | Der Zustand von Infrastructure as Code entspricht der Wirklichkeit | Vierteljährlich |
| Abdeckung von Abhängigkeiten | Anteil kritischer Services, deren vorgelagerte und nachgelagerte Abhängigkeiten kartiert und überprüft sind | kritische Services mit einer in den letzten 90 Tagen überprüften Abhängigkeitskarte / kritische Services | Prozent | CMDB-Beziehungen und Review-Aufzeichnungen | Service-Konfigurationsmanagement; Verfügbarkeitsmanagement | Review von Architektur und Service-Verantwortung | Vierteljährlich |
| Trefferquote der Auswirkungsvorhersage | Anteil der Incidents und Changes, bei denen die tatsächlich betroffenen Services in der von der CMDB vorhergesagten Auswirkung lagen | Incidents oder Changes, bei denen alle betroffenen Services vorhergesagt wurden / überprüfte Incidents oder Changes | Prozent | Post-Incident-Reviews und Change-Datensätze, mit CMDB-Abfragen verglichen | Incident-Management; Change-Befähigung | Schuldfreier Review-Befund zu fehlenden Abhängigkeiten | Vierteljährlich |
| Rate doppelter CIs | Anteil der CIs, die ein anderes CI duplizieren | durch Zuordnungsregeln als Duplikate gekennzeichnete und im Review bestätigte CIs / CIs im Umfang | Prozent | CMDB-Zuordnungsbericht und Review-Stichprobe | Service-Konfigurationsmanagement | Einzige Wahrheitsquelle | Monatlich |
| Aktualisierungsverzögerung | Verzögerung zwischen einer Änderung an einem CI in der Wirklichkeit und seiner Aktualisierung in der CMDB | Median und 85. Perzentil der Stunden oder Tage vom Änderungsereignis bis zur CMDB-Aktualisierung | Stunden oder Tage | Change-Ereignisse und Pipeline-Ereignisse, mit CMDB-Zeitstempeln verglichen | Service-Konfigurationsmanagement; Change-Befähigung | Automatische Registrierung in der Pipeline | Monatlich |
| CMDB-Nutzungsrate | Anteil der Incidents und Changes, die CIs referenzieren, und davon der Anteil, bei dem Nutzer berichten, der Datensatz habe geholfen | Datensätze, die ein gültiges CI referenzieren / Incidents und Changes im Zeitraum; plus Anteil der überprüften Datensätze, bei denen die CI-Daten halfen | Prozent | ITSM-Werkzeug, kurze Feedback-Abfrage | Incident-Management; Change-Befähigung | Teams nutzen den gemeinsamen Datensatz in ihrer Arbeit | Monatlich |

Definieren Sie den Umfang von „CI im Umfang“ nach Klasse und Kritikalität und halten Sie ihn fest. Ein CI ist nur in den Attributen genau, die Sie als erforderlich benennen. Die Aktualisierungsverzögerung startet beim echten Ereignis, etwa einem Deployment oder einem Kauf, und stoppt, wenn die CMDB es abbildet. Die Trefferquote der Auswirkungsvorhersage verlangt einen Review-Schritt, der erfasst, welche Services tatsächlich betroffen waren, und ist nur so verlässlich wie dieses Review.

## Empfehlungen

### Entscheiden, wofür der Datensatz da ist

**1. Schreiben Sie die Fragen auf, die die CMDB beantworten muss.** Typische sind: Was hängt von dieser Komponente ab, wem gehört dieser Service, was hat sich kürzlich geändert, was würde ein Ausfall hier betreffen und was ist außerhalb des Supports. Benennen Sie für jede Frage die nötigen CI-Klassen, Attribute und Beziehungen. Alles, was nicht gebraucht wird, um eine Frage zu beantworten, ist ein Kandidat zum Weglassen.

**2. Beginnen Sie mit den wichtigsten Services.** Wählen Sie die Handvoll kritischer Services, kartieren Sie sie von Ende zu Ende und bringen Sie das in Ordnung, bevor Sie mehr hinzufügen. Eine verlässliche Karte von zehn Services hilft mehr als eine zweifelhafte von tausend. Weiten Sie aus, wenn Vertrauen und Nutzung wachsen.

**3. Definieren Sie Klassen, Attribute und Beziehungstypen einfach.** Eine kurze Liste von CI-Klassen (Service, Anwendung, Datenbank, Host, Netzwerk, Cloud-Ressource) und Beziehungstypen (hängt ab von, läuft auf, verbindet sich mit, gehört zu) deckt die meisten Bedürfnisse ab. Ein Modell, das alles erfassen will, ist schwer zu füllen und schwerer abzufragen. Halten Sie ein schriftliches Modell und ändern Sie es bewusst.

### Den Datensatz aus der Quelle speisen

**4. Veröffentlichen Sie aus Pipelines und Code.** Wo Infrastruktur und Anwendungen als Code definiert sind, lassen Sie die Liefer-Pipeline bei jedem Change CIs anlegen, aktualisieren und ausmustern, einschließlich Verantwortungs- und Abhängigkeitsinformationen, die neben dem Code deklariert sind. Behandeln Sie die Deklaration als Teil der Definition of Done eines Services. Das bringt die Aktualisierungsverzögerung nahe null und hält den Datensatz mit dem Laufenden in Einklang.

**5. Nutzen Sie die Erkennung als zweite Meinung.** Netzwerk- und Cloud-[Service-Discovery](https://en.wikipedia.org/wiki/Service_discovery) findet, was tatsächlich läuft und wie es verbunden ist. Vergleichen Sie sie mit dem deklarierten Datensatz. Unterschiede sind Befunde: Entweder fehlt der Deklaration etwas, oder etwas läuft, das nicht laufen sollte. Erkennung allein erzeugt ohne Verantwortung verrauschte Daten, nutzen Sie sie also zum Prüfen, nicht zum Verfassen.

**6. Nutzen Sie stabile Kennungen und Zuordnungsregeln.** Duplikate entstehen, wenn verschiedene Quellen dasselbe verschieden benennen. Vereinbaren Sie eine eindeutige Kennung je CI-Klasse, erfassen Sie Quellkennungen und führen Sie Zuordnungsregeln aus, um Duplikate zu finden und zusammenzuführen. Überprüfen Sie Zuordnungen stichprobenartig von Hand, da automatisches Zusammenführen Verschiedenes vermengen kann.

**7. Geben Sie jedem Service-Team die Verantwortung für seinen Ausschnitt.** Das Team, das einen Service baut und betreibt, ist am besten platziert, seine Abhängigkeiten zu kennen und Fehler zu bemerken. Machen Sie es ihnen leicht: eine Vorlage, ein kurzes Review bei der Planung und Rückmeldung, wenn ihre Daten genutzt werden. Zentrale Teams besitzen das Modell, die Werkzeuge und die Prüfungen, nicht jeden Datensatz.

### Qualität und Nutzung messen

**8. Prüfen Sie die Genauigkeit per Stichprobe.** Ziehen Sie jedes Quartal eine Zufallsstichprobe von CIs und prüfen Sie sie gegen Live-Systeme, und eine zweite Stichprobe aus Live-Systemen, um zu prüfen, dass sie im Datensatz erscheinen. Berichten Sie die Genauigkeit nach Klasse und zeigen Sie die Hauptquellen von Fehlern. Halten Sie die Stichprobenmethode fest, damit Trends etwas bedeuten.

**9. Testen Sie die Karte an Incidents.** Vergleichen Sie nach einem bedeutenden Incident oder Change die tatsächlich betroffenen Services mit dem, was die CMDB vorhersagte. Erfassen Sie Fehlschätzungen und beheben Sie die fehlenden Abhängigkeiten. Das ist der aussagekräftigste Genauigkeitstest, denn er prüft den Datensatz gegen Ereignisse, und die Trefferquote verbessert sich, wenn die Karte korrigiert wird. Nutzen Sie schuldfreie Reviews, damit Menschen Fehlschätzungen bereitwillig melden (siehe Thema 4.2, Kennzahlen für Postmortems und Lernen).

**10. Verfolgen Sie die Nutzung und fragen Sie, ob sie half.** Zählen Sie, wie oft Incidents und Changes CIs referenzieren, und fragen Sie Löser und Genehmiger kurz, ob der Datensatz half. Eine steigende Nutzungsrate mit positiven Antworten ist das klarste Zeichen von Wert. Eine niedrige Nutzungsrate heißt, dass Menschen dem Datensatz nicht vertrauen oder nicht wissen, dass er existiert, und beides ist behebbar.

**11. Überprüfen Sie Abhängigkeitskarten regelmäßig mit den Eignern.** Abhängigkeiten ändern sich, während sich Software entwickelt. Bitten Sie Eigner kritischer Services, ihre Karten jedes Quartal zu bestätigen, idealerweise als Teil eines Planungs- oder Architekturgesprächs. Nutzen Sie das Bestätigungsdatum als Attribut und zeigen Sie überfällige Karten.

### Ehrlich und verhältnismäßig bleiben

**12. Stellen Sie ein, was niemand nutzt.** Entfernen Sie CI-Klassen und Attribute, die keine Frage braucht und niemand zu Rate zieht. Weniger, bessere Felder heben die Genauigkeit. Überprüfen Sie das Modell jährlich und erfassen Sie, was entfernt wurde und warum. Ein kleinerer Datensatz ist weniger, das man wahr halten muss, und er macht die Qualitätskennzahlen ehrlicher zu erfüllen.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| CI-Vollständigkeit | Erforderliche Attribute mit Standardwerten oder Platzhaltern füllen; die Liste der erforderlichen Attribute verengen | Standard- und Platzhalterwerte zählen; feste Liste erforderlicher Attribute; Genauigkeitsstichprobe |
| CI-Genauigkeit | Leichte Klassen ziehen; nach einer Bereinigung prüfen | Zufallsstichprobe, unabhängig aus beiden Richtungen gezogen; feste Methode |
| Abdeckung von Abhängigkeiten | Karten als überprüft markieren, ohne sie zu lesen; nur triviale Abhängigkeiten kartieren | Trefferquote der Auswirkungsvorhersage; eine Karte stichprobenartig gegen Live-Verkehr prüfen |
| Trefferquote der Auswirkungsvorhersage | Incidents wählen, die gut liefen; betroffene Services eng erfassen | Alle bedeutenden Incidents überprüfen; Reviewer außerhalb des zuständigen Teams |
| Rate doppelter CIs | Verschiedene CIs zusammenführen, um die Rate zu senken; Zuordnungsregeln lockern | Zusammenführungen stichprobenartig auf Richtigkeit prüfen; Zusammenführungsregeln protokollieren |
| Aktualisierungsverzögerung | Änderungsereignisse rückdatieren; nur automatische Aktualisierungen zählen | Ereignis- und Aktualisierungszeitstempel aus Quellsystemen vergleichen; Audit-Trail |
| CMDB-Nutzungsrate | Pro forma CI-Referenzen hinzufügen; das Feld mit irgendeinem Wert verpflichtend machen | Prüfen, dass referenzierte CIs relevant sind; die Feedback-Frage zur Nützlichkeit |

Ein gesunder Befund ist ein kleinerer Datensatz mit hoher gemessener Genauigkeit, Abhängigkeitskarten, die echte Incidents vorhersagen, Aktualisierungsverzögerung nahe null für automatisierte Klassen und Menschen, die sagen, sie nutzten den Datensatz, weil er hilft.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Umfassende CMDB | Breite Sicht; stützt viele Anwendungsfälle | Teuer wahr zu halten; verfällt |
| Minimale, fragengetriebene CMDB | Vertraut und billig | Lücken; braucht Disziplin beim Wachsen |
| Befüllung durch Erkennung | Findet das Unbekannte; wenig manueller Aufwand | Verrauscht; ohne Verantwortung und Zweck |
| Befüllung durch Pipelines | Genau; geringe Verzögerung | Beschränkt auf das, was über Pipelines gebaut wird |
| Zentrale Verantwortung für Datensätze | Konsistenz | Langsam; weit vom Wissen entfernt |
| Teamverantwortung für Datensätze | Genau und schnell | Variation; braucht Vorlagen und Prüfungen |
| Graph-Modell | Natürlich für Beziehungs- und Auswirkungsabfragen | Braucht Fähigkeiten und Werkzeuge |
| Relationales Tabellenmodell | Vertraut und einfach | Umständlich für tiefe Abhängigkeitsabfragen |

Die Antwort in Worten ist, klein und fragengetrieben zu beginnen, aus Pipelines zu befüllen, mit der Erkennung als zweiter Meinung, und die Service-Teams für ihre Datensätze verantwortlich zu machen. Eine [Graphdatenbank](https://en.wikipedia.org/wiki/Graph_database) kann Abhängigkeitsfragen natürlich stellbar machen, doch auch eine herkömmliche Datenbank funktioniert, wenn das Modell einfach gehalten wird.

## Fragen für die Diskussion im Team

**1. Welche Frage wünschten wir uns zuletzt, die CMDB könnte beantworten, und konnte sie es?**
Erinnern Sie sich an einen jüngeren Incident oder Change, bei dem jemand nach Abhängigkeiten suchte. Was fand er, und was tat er stattdessen? Die Moderation sollte die Frage festhalten und ob der Datensatz zu Rate gezogen wurde. Das Ergebnis ist der erste Kandidat für den Zweck des Datensatzes.

**2. Wenn unser wichtigster Service jetzt ausfiele, wie sicher sind wir uns bei der vorhergesagten Auswirkung?**
Bitten Sie um die vorhergesagte Auswirkung aus der CMDB und vergleichen Sie sie mit dem, was Menschen glauben, die den Service kennen. Notieren Sie die Unterschiede. Einigen Sie sich, welche Abhängigkeit zuerst zu verifizieren ist und wer sie prüft.

**3. Wem gehört der Datensatz für jeden Service, und wissen sie es?**
Listen Sie kritische Services und die Eigner ihrer CMDB-Einträge auf. Fragen Sie, ob die Eigner es wissen und sie kürzlich überprüft haben. Wo der Eigner „das CMDB-Team“ ist, besprechen Sie, wie sich die Verantwortung zum Service-Team verlagern lässt.

**4. Was füllen wir nur aus, um ein Pflichtfeld zu erfüllen?**
Suchen Sie nach Standardwerten und Platzhaltern. Sie zeigen, wo das Modell mehr verlangt, als irgendjemand weiß. Entscheiden Sie, ob das Feld zu entfernen, zu automatisieren oder die echte Quelle zu finden ist.

**5. Wo widerspricht unser Datensatz dem, was läuft?**
Vergleichen Sie die Ausgabe der Erkennung mit dem Datensatz für einen Service. Fragen Sie bei jedem Unterschied, ob sich der Datensatz oder die Wirklichkeit ändern sollte. Das Gespräch findet tendenziell veraltete Daten und nicht autorisierte Komponenten.

**6. Was würden wir nicht mehr erfassen?**
Listen Sie Klassen, Attribute und Beziehungen auf, die seit sechs Monaten niemand genutzt hat. Fragen Sie, was geschähe, wenn jedes verschwände. Einigen Sie sich, zwei zu entfernen und zu beobachten, ob es jemand bemerkt.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams halten das Wissen darüber, wovon ihre Services abhängen, und sind am besten platziert, den Datensatz wahr zu halten. Sie sollten Verantwortung und Abhängigkeiten neben ihrem Code deklarieren, sie bei Entwurfsänderungen überprüfen und den Datensatz bei der Planung von Changes nutzen. Eine Definition of Done, die das Aktualisieren der Servicebeschreibung einschließt, hält den Datensatz nah an der Arbeit.

### Service- und Betriebsteams

Betriebsteams ziehen den Datensatz bei Incidents und Changes zu Rate und spüren seine Fehler daher zuerst. Sie sollten Fehlschätzungen in Reviews melden, Erkennungsprüfungen durchführen, die Zuordnungsregeln pflegen und Eignern Rückmeldung geben. Sie betreiben auch die Werkzeuge und die Prüfstichproben.

### Führung und Governance

Führungskräfte wollen Auswirkung und Risiko sichtbar und sponsern oft große CMDB-Programme, die enttäuschen. Sie sollten Belege zu Nutzung und Genauigkeit statt Datensatzzahlen verlangen, die Pipeline-Integration finanzieren und einen kleineren Umfang akzeptieren, der gut gemacht ist. Die Governance sollte die Trefferquote der Auswirkungsvorhersage und die Lückenliste sehen wollen.

### Kunden und Nutzer

Nutzer profitieren, wenn Incidents schneller diagnostiziert werden und Changes seltener abhängige Services stören. Sie sehen die CMDB selten, doch sie sehen ihre Wirkungen in Kommunikation, die die betroffenen Services richtig nennt, und in weniger Überraschungen nach Changes. Ihr Feedback nach Incidents zeigt, ob das Auswirkungsbild stimmte.

## In der Praxis: ein Beispiel aus dem Service-Management

Die Technikgruppe einer nationalen Fluggesellschaft betreibt etwa 300 Anwendungen und eine Kundenbuchungsplattform. Die Zahlen unten sind illustrativ.

Die CMDB hält 180.000 CIs und wurde vor fünf Jahren von einem Erkennungswerkzeug befüllt. Die Leiterin des Service-Managements will wissen, ob sie es wert ist, sie zu behalten. Sie bittet ein kleines Team, sie zu testen. Zur Qualität prüfen sie 150 gezogene CIs und finden sie zu 71 Prozent genau in den fünf erforderlichen Attributen. Für die Karte überprüfen sie die letzten 20 bedeutenden Incidents und vergleichen die tatsächlich betroffenen Services mit dem, was die CMDB vorhersagte: Sie sagte in 6 von 20 alle betroffenen Services vorher, eine Trefferquote von 30 Prozent. Zur Nutzung: 12 Prozent der Incidents im letzten Quartal referenzierten ein CI, und in einer kurzen Umfrage sagten die meisten Löser, sie verließen sich auf eine gesonderte Wiki-Seite. Doppelte CIs machen 9 Prozent der Gesamtzahl aus.

Das Team trifft mit den Serviceeignern vier Entscheidungen. Es verkleinert den Umfang auf die 40 Services, die die meisten Kunden tragen, mit fünf CI-Klassen und vier Beziehungstypen. Es bittet jedes Service-Team, Eigner, Abhängigkeiten und Laufzeitort in einer kurzen Datei zu deklarieren, die beim Code liegt und die die Pipeline bei jedem Release in die CMDB veröffentlicht. Es lässt die Erkennung wöchentlich laufen und berichtet Unterschiede an Eigner. Es fügt dem Incident-Review ein Feld hinzu, „war die CMDB-Vorhersage richtig?“, und behebt jede Fehlschätzung binnen zwei Wochen.

Zwei Quartale später hat die eingegrenzte CMDB 14.000 CIs, die Genauigkeit der gezogenen Menge beträgt 92 Prozent, die Aktualisierungsverzögerung vom Release bis zum Datensatz liegt für Services in der Pipeline unter einer Stunde, und die Trefferquote bei den letzten 12 Incidents beträgt 75 Prozent. Die CMDB-Nutzung bei Incidents ist auf 58 Prozent gestiegen, und Löser sagen, die Wiki-Seite werde nicht mehr gebraucht. Der Betriebsdirektor bittet um einen Plan, die anderen 260 Anwendungen auf einmal aufzunehmen. Die Leiterin des Service-Managements schlägt vor, zehn Services pro Quartal hinzuzufügen, nachdem jeder bei einem Testfall-Incident eine Trefferquote über einem vereinbarten Niveau erreicht hat, und erklärt, dass dem früheren breiten Datensatz nie vertraut wurde. Die Entscheidung wird festgehalten, mit einem Review jedes Quartal.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Lassen Sie Service-Teams ihre eigenen Datensätze als Teil ihrer Arbeit aktuell halten und überprüfen Sie die Qualität regelmäßig mit ihnen. Zu beachten ist, dass ein Vollständigkeitsziel allein Datensätze erzeugt, die mit Platzhaltern gefüllt sind.

### KI

KI kann Abhängigkeiten ableiten, Datensätze vorschlagen und Fragen aus Konfigurationsdaten beantworten, und KI-Systeme selbst sind Konfigurationselemente. Verfolgen Sie die Trefferquote der Auswirkungsvorhersage für von KI vorgeschlagene Abhängigkeiten gegen echte Incidents. Zu beachten ist, dass eine KI, die Abhängigkeiten errät, den Datensatz mit plausiblen Fehlern verschmutzen kann.

### Automatisierung

Speisen Sie Datensätze aus Erkennung und Infrastructure as Code und messen Sie die Aktualisierungsverzögerung. Zu beachten ist, dass automatische Erkennung ohne klare Identitätsregeln doppelte oder veraltete Elemente erzeugen kann.

### Analytik

Beurteilen Sie die Datenbank daran, wie gut sie Fragen in echten Changes und Incidents beantwortet, und berichten Sie die Nutzungsrate. Die Entscheidung, die dies untermauert, ist, wo Daten zu verbessern sind. Zu beachten ist, dass Genauigkeit per Stichprobe gemessen wird; zeigen Sie also die Stichprobengröße.

## Branchenperspektive

**Startup.** Über einen Servicekatalog und Infrastrukturcode hinaus braucht es kaum eine CMDB. Halten Sie Serviceeigner und Abhängigkeiten im Repository und erzeugen Sie daraus eine Karte. Fügen Sie eine Datenbank erst hinzu, wenn die Fragen den Dateien entwachsen.

**Kleinunternehmen.** Ein einfaches Diagramm und eine Liste von Systemen mit Eignern und Anbietern genügen womöglich. Aktualisieren Sie sie nach jedem bedeutenden Change. Widerstehen Sie dem Kauf einer Plattform für eine kleine Landschaft, halten Sie das Diagramm aber aktuell, denn es ist bei einem Ausfall unschätzbar.

**Großunternehmen.** Größe braucht ein Modell, föderierte Verantwortung und Integration mit mehreren Quellen, einschließlich Übernahmen. Standardisieren Sie Kennungen und das Kernmodell, lassen Sie Teams es innerhalb von Regeln erweitern und messen Sie Nutzung und Genauigkeit nach Domäne. Erwarten Sie, eine dauerhafte Zuordnungs- und Bereinigungsfunktion zu betreiben.

**Behörden und öffentlicher Sektor.** Services ruhen oft auf langlebigen Systemen, Auftragnehmern und gemeinsamer Infrastruktur, und die Auswirkung von Incidents kann die Öffentlichkeit treffen. Kartieren Sie Abhängigkeiten von Lieferanten und gemeinsamen Plattformen ausdrücklich, bewahren Sie Datensätze für Prüfungen auf und stimmen Sie sich mit der Kontinuitätsplanung ab (siehe Thema 5.6, Kennzahlen für die Servicekontinuität).

## Business Case: Motive, ROI und TCO

Die Kosten sind Modellierungs- und Governance-Aufwand, Integration von Pipelines und Erkennung, etwas Werkzeug und der Aufwand von Prüfungen und Korrekturen. Viele Organisationen besitzen die Plattform schon. Befüllung per Pipeline ist billig, sobald die Vorlage existiert. Große Programme, alles auf einmal zu befüllen, waren teuer und scheiterten oft.

Der Ertrag sind kürzere Incidents, sicherere Changes und weniger Zeit für die Suche nach Informationen. Bauen Sie den Business Case aus Ihren eigenen Belegen: die Zeit, die Löser bei einem typischen Incident mit der Suche nach Abhängigkeiten verbringen, der Anteil der Incidents, bei denen fehlende Abhängigkeitsinformation die Diagnose verzögerte, und Changes, die unerwartete Auswirkung hatten. Die Trefferquote der Auswirkungsvorhersage ist ein direktes Maß, ob der Datensatz geholfen hätte. Vermeiden Sie veröffentlichte Aussagen über den Prozentsatz der durch Change verursachten Incidents oder die Kosten von Ausfällen, wenn Sie ihre Quelle nicht zurückverfolgen können. Stellen Sie die Kosten, einen großen, zweifelhaften Datensatz zu pflegen, gegen den Wert eines kleinen, vertrauten.

## Anti-Muster und Fallstricke

- **Zuerst alles befüllen.** Ein riesiger, veralteter Datensatz zerstört Vertrauen. Beginnen Sie mit kritischen Services.
- **Erkennung als einzige Quelle.** Sie kann nicht sagen, warum etwas existiert oder wem es gehört. Kombinieren Sie mit Deklarationen.
- **Vollständigkeit prüfen und es Qualität nennen.** Vollständig und falsch ist schlimmer als unvollständig und richtig. Ziehen Sie Stichproben auf Genauigkeit.
- **Zentrale Teams besitzen alle Daten.** Sie kennen sie nicht. Geben Sie Service-Teams die Verantwortung.
- **Pflichtfelder mit Standardwerten.** Sie sehen vollständig aus und tragen keine Information. Entfernen oder automatisieren Sie sie.
- **Nach der Zahl der CIs messen.** Mehr ist nicht besser. Messen Sie Genauigkeit, Trefferquote und Nutzung.
- **Beziehungen ignorieren.** Ohne Abhängigkeiten ist eine CMDB ein Inventar. Investieren Sie in die Karte für kritische Services.
- **Menschen für Fehlschätzungen beschuldigen.** Sie hören auf, sie zu melden. Behandeln Sie eine verpasste Abhängigkeit als Befund.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Umfang und Modell | Was die Erkennung fand | Modell definiert; breiter Umfang | Fragengetriebenes Modell; kritische Services kartiert | Umfang wächst, wenn Trefferquote und Nutzung es rechtfertigen | Föderiertes Modell über Teams und Lieferanten; geteilte Kennungen |
| Befüllung und Qualität | Manuell oder einmalig geladen | Geplante Erkennung und Importe | Pipelines veröffentlichen aus Code; Erkennung als Prüfung; Prüfstichproben | Genauigkeit, Verzögerung und Duplikate gemessen und im Trend | Echtzeit-Feeds mit automatischem Abgleich und Bestätigung durch Eigner |
| Nutzung | Selten zu Rate gezogen | Von einigen Teams genutzt | Bei Incidents und Changes als Standardpraxis referenziert | Auswirkungsvorhersage an Incidents getestet; Nutzung und Nützlichkeit verfolgt | Datensatz informiert automatisierte Entscheidungen und geteilte Lieferantenkarten |

## Checkliste

- [ ] Die Fragen, die die CMDB beantworten muss, sind aufgeschrieben.
- [ ] Der Umfang ist auf kritische Services begrenzt, mit einer definierten Wachstumsregel.
- [ ] Das Modell hat eine kleine Menge an Klassen, Attributen und Beziehungstypen.
- [ ] Jeder kritische Service hat einen Eigner, der seinen Datensatz im letzten Quartal bestätigt hat.
- [ ] Pipelines veröffentlichen CI-Änderungen für als Code gebaute Services.
- [ ] Erkennungsergebnisse werden mit dem Datensatz verglichen, und Unterschiede werden überprüft.
- [ ] Eine Zufallsstichprobe zur Genauigkeit wird jedes Quartal in beiden Richtungen geprüft.
- [ ] Incident-Reviews erfassen, ob die vorhergesagte Auswirkung richtig war.
- [ ] CMDB-Nutzung bei Incidents und Changes wird verfolgt, mit einer Frage zur Nützlichkeit.
- [ ] Ungenutzte Klassen und Attribute werden nach Plan eingestellt.

## KI-Prompts

**Die Fragen und den Umfang definieren.**

```text
We run [type of organization and services]. Typical situations where we need
configuration information: [list incidents, changes, audits]. Draft a list of
the questions our CMDB should answer, the CI classes, attributes, and
relationships needed for each, and a minimal starting scope of the most
critical services. Do not invent tooling. List your assumptions and what to
confirm with service owners.
```

**Eine verfehlte Auswirkungsvorhersage analysieren.**

```text
After the incident [description], the CMDB predicted these affected services:
[list], and the services actually affected were: [list]. Explain possible
reasons for each difference (missing dependency, wrong relationship, stale
data, indirect dependency), suggest how to verify each, and propose a fix at
the source. Do not assume causes the information cannot support. List your
assumptions.
```

**Eine Deklarationsdatei für Service-Teams entwerfen.**

```text
Propose a short, human-readable declaration that a service team keeps with its
code to describe the service for the CMDB: owner, support contact, tier,
dependencies, runtime location, and data classification. Include validation
rules the pipeline could apply and a minimal example for [type of service].
Keep it to what the questions in [paste questions] require. List your
assumptions and fields to review with security.
```

**Eine vierteljährliche Genauigkeitsprüfung planen.**

```text
Our CMDB holds [number] CIs in these classes: [list]. Design a quarterly audit
with random samples drawn in both directions (from the CMDB to reality, and from
reality to the CMDB), say what to check for each class, how to report accuracy
and error sources honestly, and how to avoid grading our own homework. Do not
overstate statistical precision. List your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Kennzahl zur Konfigurationsqualität zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer CMDB-Kennzahl seinen Manipulationsvektor, seine Leitplanke und seine Regel zu unabhängigen Belegen trägt.

## Wichtigste Erkenntnisse

- Bauen Sie die CMDB, um benannte Fragen zu den wichtigsten Services zu beantworten, und lassen Sie sie wachsen, wenn das Vertrauen wächst.
- Befüllen Sie sie aus Pipelines und Code, nutzen Sie die Erkennung als zweite Meinung und lassen Sie Service-Teams ihre Datensätze besitzen.
- Testen Sie Qualität an Ereignissen: Vergleichen Sie die vorhergesagte Auswirkung mit dem, was bei Incidents tatsächlich geschah.
- Messen Sie Nutzung und Nützlichkeit, nicht die Zahl der CIs.
- Ziehen Sie Stichproben zur Genauigkeit aus unabhängigen Belegen in beiden Richtungen.
- Stellen Sie ein, was niemand nutzt, und beheben Sie Fehler an ihrer Quelle.

## Quellen und weiterführende Literatur

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Configuration Management*, TSO, 2020.
2. Wang, R. Y., and Strong, D. M., "Beyond accuracy: what data quality means to data consumers," *Journal of Management Information Systems*, 12(4), 1996.
3. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd ed., Technics Publications, 2017.
4. Morris, K., *Infrastructure as Code*, 2nd ed., O'Reilly, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Configuration item](https://en.wikipedia.org/wiki/Configuration_item).
7. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
8. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
9. Wikipedia, [Data integrity](https://en.wikipedia.org/wiki/Data_integrity).
10. Wikipedia, [Entity resolution](https://en.wikipedia.org/wiki/Entity_resolution).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Service discovery](https://en.wikipedia.org/wiki/Service_discovery).
13. Wikipedia, [Graph database](https://en.wikipedia.org/wiki/Graph_database).
