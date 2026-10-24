# Werkzeuglandschaft

**Wählen Sie Werkzeuge für die Fragen, die Sie beantwortet haben müssen, und die Daten, denen Sie trauen können, halten Sie die Daten portabel und geben Sie weniger für Plattformen aus als für die Gewohnheiten, die die Zahlen lesenswert machen.**

## Überblick und Motivation

Werkzeuge sind der Ort, an dem Kennzahlenprogramme am häufigsten schiefgehen, in zwei entgegengesetzte Richtungen. Manche Organisationen kaufen zuerst eine große Analytik-Plattform und entdecken später, dass sie keine vereinbarten Definitionen, keine sauberen Daten und kein Publikum haben. Andere bauen einen Haufen Skripte und Tabellen, den eine Person versteht, und das Programm endet, wenn diese Person weiterzieht. Beide beginnen beim Werkzeug und ignorieren die Fragen, die es beantworten soll.

Die Landschaft ist überfüllt und ändert sich schnell, daher ist dieses Thema bewusst herstellerneutral. Es beschreibt die Arten von Werkzeugen, die Datenflüsse zwischen ihnen, die Abwägungen zwischen Bauen und Kaufen und Kriterien zur Auswahl. Es nennt keine Produkte, denn Produktnamen veralten schnell, und ein Buch ist ein schlechter Wegweiser für aktuelle Funktionen und Preise. Die Messprinzipien ändern sich nicht mit dem Hersteller: wissen, was man misst, woher die Daten kommen, wem sie gehören und wie sie gelesen werden.

Die meisten Daten, die ein Programm für Servicekennzahlen braucht, existieren bereits in führenden Systemen. Werkzeuge des [IT-Service-Managements](https://en.wikipedia.org/wiki/IT_service_management) halten Incidents, Anfragen, Probleme, Changes und Konfigurationsdatensätze. Quellcodeverwaltung, Build-, Test- und Deployment-Systeme halten die Historie der Engineering-Arbeit. Monitoring- und [Observability](https://en.wikipedia.org/wiki/Observability_(software))-Systeme halten Verfügbarkeits-, Latenz- und Fehlerdaten. Umfragewerkzeuge, Finanzsysteme, Personalsysteme und Vertragsablagen halten den Rest. Ein Kennzahlenprogramm verbindet diese Quellen, ohne die Arbeit zu stören, die in ihnen geschieht (siehe Thema 1.5, Datenquellen und Instrumentierung).

Die Bewegung von Daten aus Quellen an einen Ort, an dem sie analysiert werden können, ist eine [Datenpipeline](https://en.wikipedia.org/wiki/Data_pipeline), und das klassische Muster ist [Extract, Transform, Load](https://en.wikipedia.org/wiki/Extract,_transform,_load): aus Quellen lesen, umformen und bereinigen und in einen Speicher schreiben. Der Speicher kann ein [Data Warehouse](https://en.wikipedia.org/wiki/Data_warehouse) sein, ein integriertes Repository von Daten aus mehreren Systemen, für Analyse organisiert. Programme erreichen diese Systeme über eine [Programmierschnittstelle (API)](https://en.wikipedia.org/wiki/Application_programming_interface), über die eine Software eine andere auf definierte Weise nach Daten fragt. Die Qualität dessen, was hindurchfließt, bestimmt die Qualität jedes Diagramms. [Datenqualität](https://en.wikipedia.org/wiki/Data_quality) umfasst Genauigkeit, Vollständigkeit, Konsistenz und Aktualität, und die Disziplin, die sie trägt, ist [Data Governance](https://en.wikipedia.org/wiki/Data_governance).

Die finanzielle Seite verdient Sorgfalt. Die [Gesamtbetriebskosten (Total Cost of Ownership)](https://en.wikipedia.org/wiki/Total_cost_of_ownership) eines Werkzeugs umfassen Lizenzen, Infrastruktur, Integration, Schulung, Administration und die Kosten, es zu verlassen. [Vendor Lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) ist die Lage, in der der Wechsel des Anbieters so teuer ist, dass der Kunde faktisch gebunden ist. Kennzahlenprogramme sind besonders exponiert, denn Definitionen, Historie und Dashboards sammeln sich in einem Werkzeug an, und sie später herauszuholen ist schwer.

Die agilen Ziele prägen den Ansatz. Kontinuierliche Auslieferung gilt für das Programm: den dünnsten funktionierenden Pfad von einer Quelle zu einer Sicht für ein Team aufsetzen, aus seiner Nutzung lernen und erweitern. Kontinuierliche Einbeziehung von Stakeholdern heißt, dass die Menschen, die die Zahlen nutzen, an Werkzeugentscheidungen teilnehmen. Kontinuierliche Verbesserung und fortlaufende Weiterentwicklung heißen, dass erwartet wird, dass sich die Werkzeuge ändern, Portabilität zählt also mehr als Perfektion. Ein nachhaltiges Tempo heißt, dass das Programm nicht zu einem Data-Engineering-Projekt wird, das die Arbeit aushungert, die es misst. Und motivierte Individuen arbeiten besser mit Werkzeugen, bei deren Wahl sie halfen und die sie verstehen, als mit von oben auferlegten, besonders solchen, die sich wie Überwachung anfühlen (siehe Thema 11.3, Kennzahlen einführen, ohne Angst zu erzeugen).

Das Thema stützt sich auf die Anleitung zum Dashboard-Entwurf (siehe Thema 11.1, Ein Dashboard für Servicekennzahlen entwerfen) und die Governance-Themen in Teil 1.

## Leitprinzipien

- **Fragen vor Werkzeugen.** Schreiben Sie zuerst die Fragen und Kennzahlen, dann sehen Sie, welche Werkzeuge sie brauchen.
- **Die führenden Systeme nutzen.** Nehmen Sie Daten von dort, wo die Arbeit geschieht, und meiden Sie, Menschen zu bitten, sie doppelt einzugeben.
- **Definitionen außerhalb des Werkzeugs halten.** Pflegen Sie Kennzahlendefinitionen in einfacher, portabler Form, die einen Plattformwechsel überlebt.
- **Portable Daten bevorzugen.** Speichern Sie Daten in offenen Formaten mit dokumentierten Schnittstellen und halten Sie einen Weg hinaus offen.
- **Dünn beginnen und wachsen.** Eine Quelle, eine Sicht, ein Team, dann erweitern.
- **Die vollen Kosten zählen.** Lizenzen sind ein Bruchteil der Kosten von Integration, Datenbereinigung und Pflege.
- **Menschen schützen.** Werkzeuge sollten auf Teams und Services aggregieren, Zugriffsregeln durchsetzen und Überwachung erschweren.
- **Die Pipeline als Service behandeln.** Sie braucht einen Eigner, Monitoring, Tests und einen Weg, mit Fehlern umzugehen.

## Kennzahlendefinitionen

Die Kennzahlen unten beschreiben die Gesundheit der Kennzahlenwerkzeuge und ihrer Datenversorgung. Sie sind für das Programmteam gedacht, um die Infrastruktur ehrlich zu halten, und dürfen nicht genutzt werden, um Menschen zu bewerten.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Quellenabdeckung | Anteil der für die vereinbarten Kennzahlen nötigen führenden Systeme, die den Kennzahlenspeicher automatisch speisen | angebundene und getestete Quellen / für vereinbarte Kennzahlen nötige Quellen | Prozent | Quelleninventar; Pipeline-Konfiguration | Informations- und Technologiemanagement; Service-Konfigurationsmanagement | Kontinuierliche Auslieferung der Pipeline | Vierteljährlich |
| Zuverlässigkeit der Pipeline | Anteil der geplanten Datenladevorgänge, die rechtzeitig mit bestandenen Prüfungen abschließen | rechtzeitige Ladevorgänge mit bestandenen Prüfungen / geplante Ladevorgänge | Prozent | Pipeline-Protokolle und Testergebnisse | Monitoring und Ereignismanagement | Automatisierte Tests und schnelles Feedback | Wöchentlich |
| Zeit bis zu einer neuen Kennzahl | Verstrichene Zeit von einer genehmigten Anfrage nach einer neuen Kennzahl bis zu ihrer Verfügbarkeit mit einer Definitionskarte | Tage von der Genehmigung bis zur Veröffentlichung, Median und 85. Perzentil | Tage | Anfrage- und Release-Datensätze | Serviceanfragen-Management; Change-Befähigung | Kleine Wertinkremente | Vierteljährlich |
| Abgleichsrate | Anteil der Schlüsselzahlen, die in einer Stichprobenprüfung zwischen Kennzahlenspeicher und Quellsystem übereinstimmen | innerhalb der Toleranz übereinstimmende Zahlen / geprüfte Zahlen | Prozent | Abgleichsprüfungen | Informations- und Technologiemanagement | Vertrauenswürdiges Feedback | Monatlich |
| Anteil manuellen Aufwands | Anteil des Aufwands bei wiederkehrenden Berichten, der für manuelles Erfassen und Bereinigen aufgewendet wird | Stunden für manuelle Schritte / gesamte Stunden für wiederkehrende Berichte | Prozent | Zeitschätzungen; Teamumfrage | Kontinuierliche Verbesserung | Toil beseitigen | Vierteljährlich |
| Ausstiegsbereitschaft | Ob Definitionen, Historie und Dashboards in dokumentierter, nutzbarer Form exportiert werden können | getestete und vollständige Exporte / geplante Exporttests | Prozent | Exporttestunterlagen | Lieferantenmanagement; Servicekontinuitätsmanagement | Nachhaltige Entscheidungen | Jährlich |
| Werkzeugkosten je unterstütztem Team | Volle jährliche Kosten der Werkzeuge des Programms, geteilt durch die Teams, denen es dient | (Lizenzen + Infrastruktur + Pflegeaufwand) / bediente Teams | Währung je Team | Finanz- und Aufwandsunterlagen | Finanzmanagement für Services | Nachhaltiges Tempo | Jährlich |

Zählen Sie Quellen danach, was die vereinbarten Kennzahlen brauchen, und nicht danach, was existiert, damit die Abdeckung nicht durch das Anbinden irrelevanter Systeme steigt. Der Abgleich verlangt, vorab eine Stichprobe und eine Toleranz zu wählen. Die Werkzeugkosten je unterstütztem Team sind eine beschreibende Zahl zum Vergleichen von Optionen, kein Ziel, das nach unten zu drücken ist. Sie schließen den Aufwand der Menschen ein, die die Pipeline pflegen.

## Empfehlungen

### Entscheiden, was man braucht

**1. Schreiben Sie die Anforderungen als Fragen und Kennzahlen.** Listen Sie die Kennzahlen auf, die das Programm zu veröffentlichen vereinbart hat (siehe Thema 11.1, Ein Dashboard für Servicekennzahlen entwerfen), die Quellen, die jede braucht, wie aktuell jede sein muss, wer sie sehen darf und wie lange Historie gehalten werden muss. Unterscheiden Sie Muss von Präferenzen. Ein kurzes Dokument von zwei Seiten ist besser als eine lange Ausschreibung.

**2. Inventarisieren Sie, was Sie schon besitzen.** Viele Organisationen haben Analytikfunktionen in ihren Service-Management-, Engineering- und Monitoring-Werkzeugen, die ungenutzt bleiben. Viele haben Tabellen, Skripte und Berichte, die einen Teil des Bedarfs bereits beantworten. Beginnen Sie damit zu sehen, was diese können. Das billigste Werkzeug ist das, das schon bezahlt und schon verstanden ist.

**3. Sichten Sie die Daten vor dem Werkzeug.** Prüfen Sie für jede Quelle, ob die Daten vollständig, konsistent eingegeben und über eine Schnittstelle zugänglich sind. Ein Werkzeug kann Incident-Kategorien nicht reparieren, die niemand nutzt, nachträglich angelegte Change-Datensätze oder überschriebene Zeitstempel. Ein Teil der wertvollsten frühen Arbeit ist, die Datenerfassung an der Quelle zu beheben (siehe Thema 7.4, Kennzahlen für Konfigurations- und CMDB-Qualität).

### Bauen, kaufen oder kombinieren

**4. Vergleichen Sie Bauen und Kaufen nach vollen Kosten und Passung.** Eine Analytik-Plattform oder ein gepacktes Engineering-Analytik-Produkt zu kaufen bringt fertige Konnektoren, Diagramme und Support, zum Preis von Lizenzen, einem festen Weltmodell und Abhängigkeit. Eine Pipeline und Sichten zu bauen bringt Passung und Kontrolle, zum Preis von Engineering-Zeit und Pflege. Die meisten Organisationen kombinieren am Ende: eingebaute Berichte nutzen, wo sie gut genug sind, ein allgemeines Analysewerkzeug für Sichten nutzen und dünne Konnektoren bauen, wo nichts anderes passt.

**5. Testen Sie einen Prototyp mit echten Daten.** Führen Sie vor der Festlegung einen zeitlich begrenzten Versuch mit zwei oder drei eigenen Kennzahlen durch, mit echten Daten und echten Nutzern. Prüfen Sie, wie lange das Anbinden dauerte, wie gut das Werkzeug Ihre Definitionen handhabte, ob es Verteilungen und Perzentile zeigen konnte und wie es den Zugriff kontrollierte. Marketing-Vorführungen nutzen saubere Daten, und Ihre sind es nicht.

**6. Planen Sie den Ausstieg, bevor Sie einsteigen.** Fragen Sie, wie Definitionen, Historie und Dashboards exportiert werden können, und testen Sie es. Bevorzugen Sie Werkzeuge mit offenen Schnittstellen und Standardformaten und halten Sie eine eigene Kopie der Kennzahlendefinitionen und der bereinigten Daten. Die Kosten des Verlassens gehören zu den Kosten des Bleibens, und ein glaubwürdiger Ausstieg verbessert Ihre Verhandlungsposition (siehe Thema 8.4, Kennzahlen für Lieferanten und Verträge).

### Mit klaren Kriterien wählen

**7. Nutzen Sie herstellerneutrale Auswahlkriterien.** Nützliche Kriterien umfassen: Haben die Datenquellen, die Sie brauchen, gepflegte Konnektoren? Lassen sich Definitionen schreiben, versionieren und überprüfen? Kann das Werkzeug Verteilungen, Perzentile und Trends ebenso zeigen wie Mittelwerte und Zählungen? Aggregiert es auf Teams und Services und lässt Sie Sichten auf Einzelebene beschränken? Unterstützt es rollenbasierten Zugriff und Audit? Sind Daten in offenen Formaten exportierbar? Wie geht der Anbieter mit Änderungen, Ausfällen und Sicherheitsincidents um? Was kostet es in dem Maßstab, den Sie in drei Jahren erwarten?

**8. Seien Sie vorsichtig mit eingebauter Bewertung.** Manche Werkzeuge bieten von Haus aus zusammengesetzte Werte, Ranglisten von Menschen oder „Produktivitäts“-Indizes. Sie sind leicht zu übernehmen und schwer zu verteidigen (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen). Prüfen Sie, ob solche Funktionen abgeschaltet werden können, und setzen Sie die Richtlinie, bevor Sie etwas einschalten.

**9. Beziehen Sie die Menschen ein, die es nutzen werden.** Bitten Sie die Teams, die engere Auswahl mit ihren Daten auszuprobieren. Ihre Fragen werden Grenzen offenbaren, die ein Anforderungsdokument nicht zeigte. Beziehen Sie Sicherheit, Datenschutz, Finanzen und Beschaffung früh ein (siehe Thema 8.1, Kennzahlen für Sicherheitsvorfälle und Schwachstellen).

### Die Pipeline als Service betreiben

**10. Automatisieren, testen und überwachen Sie die Pipeline.** Behandeln Sie Datenladevorgänge wie jeden anderen Produktionsservice. Führen Sie automatisierte Prüfungen auf Zählungen, Bereiche, Dubletten und Aktualität durch. Schlagen Sie bei Fehlern Alarm und zeigen Sie den Datenqualitätsstatus auf dem Dashboard. Versionieren Sie die Transformationslogik und überprüfen Sie Änderungen daran wie Code (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität).

**11. Führen Sie einen Katalog der Definitionen.** Pflegen Sie einen gemeinsamen Katalog mit Definition, Formel, Quelle, Eigner und Grenzen jeder Kennzahl. Es kann ein Repository einfacher Textdateien sein, ein Datenkatalog-Werkzeug oder ein Wiki. Was zählt, ist, dass er die Wahrheitsquelle für Bedeutung ist und Dashboards aus ihm lesen oder auf ihn verlinken (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

**12. Überprüfen Sie die Werkzeuge jährlich.** Prüfen Sie jedes Jahr, was die Werkzeuge kosten, welche Teile das Programm nutzt, wo manueller Aufwand bleibt und welche neueren Optionen es gibt. Stellen Sie ein, was niemand nutzt. Überdenken Sie die Balance von Bauen und Kaufen, während das Programm reift. Planen Sie Wandel als normalen Teil der Arbeit.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Quellenabdeckung | Leichte oder irrelevante Quellen anbinden; eine Anbindung zählen, die keine nutzbaren Daten trägt | Nach vereinbarten Kennzahlen zählen; Vollständigkeit der Daten je Quelle prüfen |
| Zuverlässigkeit der Pipeline | Prüfungen lockern, damit Ladevorgänge immer bestehen; weniger Ladevorgänge planen | Prüfungen auf Stärke überprüfen; Abgleich und Zeilenzahlen der Quellen verfolgen |
| Zeit bis zu einer neuen Kennzahl | Ohne Definitionen oder Tests veröffentlichen; verengen, was als neue Kennzahl zählt | Definitionskarte und eine Abgleichsprüfung für den Abschluss verlangen |
| Abgleichsrate | Leichte Zahlen zur Prüfung wählen; die Toleranz nach einem Fehlschlag erweitern | Stichproben vor der Prüfung wählen; Toleranz vorab festlegen; schwierige Zahlen einbeziehen |
| Anteil manuellen Aufwands | Manuelle Arbeit untertreiben; Aufwand in anderen Budgets verbergen | Die Menschen fragen, die die Arbeit tun; mit der spät in jedem Berichtszyklus verbrachten Zeit vergleichen |
| Ausstiegsbereitschaft | Einen Teilexport testen; einen dokumentierten Plan als Bereitschaft zählen | Eine vollständige Wiederherstellung in ein anderes Werkzeug an einer Stichprobe durchführen; Definitionen und Historie verifizieren |
| Werkzeugkosten je unterstütztem Team | Pflegeaufwand ausschließen; Teams auf dem Papier hinzufügen | Personalzeit einbeziehen; Teams zählen, die ihre Sichten aktiv nutzen |

Ein gesunder Befund zeigt Daten, die rechtzeitig eintreffen und mit der Quelle übereinstimmen, neue Kennzahlen, die mit Definitionen veröffentlicht werden, sinkenden manuellen Aufwand und einen Ausstieg, der mindestens einmal getestet wurde.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Eingebaute Berichte jedes Werkzeugs | Billig; schon da; verstanden | Silos; uneinheitliche Definitionen über Werkzeuge |
| Einzelne Suite eines Anbieters | Integriert; ein Vertrag | Lock-in; passt zum Modell des Anbieters, nicht zu Ihrem |
| Gepacktes Engineering-Analytik-Produkt | Schneller Start; fertige Konnektoren | Festes Modell; Risiko von Bewertung Einzelner; Kosten im großen Maßstab |
| Allgemeines Analyse- und Visualisierungswerkzeug | Flexibel; breite Fähigkeiten verfügbar | Braucht Datenversorgung und Gestaltungskompetenz |
| Warehouse mit Transformationsschicht | Starke Kontrolle; Verknüpfung über Quellen | Engineering-Aufwand; braucht Verantwortung |
| Tabellen und Skripte | Schneller Start; keine Lizenz | Fragil; hängt von Einzelnen ab; schwer zu prüfen |
| Open-Source-Stack | Kontrolle; keine Lizenzkosten | Pflegeaufwand; Support hängt von Ihnen ab |
| Von Hand erfasste Kennzahlen | Funktioniert ohne Werkzeuge | Langsam; fehleranfällig; schwer zu halten |

Die Antwort in Worten ist, mit dem zu beginnen, was Sie haben, die dünnste Anbindung hinzuzufügen, die echte Fragen beantwortet, Definitionen und Daten portabel zu halten und erst dann zu schwereren Werkzeugen zu wechseln, wenn die leichteren Entscheidungen nachweislich begrenzen.

## Fragen für die Diskussion im Team

**1. Welche Zahlen erzeugen wir jeden Monat von Hand, und was bräuchte es, damit aufzuhören?**
Listen Sie die manuellen Berichte und die Stunden auf, die sie brauchen. Finden Sie die Quelle jedes einzelnen und ob sie eine Schnittstelle hat. Die Moderation sollte fragen, welche Berichte schlicht fallengelassen werden könnten. Einigen Sie sich auf einen zum Automatisieren und einen zum Ausmustern.

**2. Wenn unser aktuelles Berichtswerkzeug morgen verschwände, was würden wir verlieren?**
Nennen Sie die Definitionen, die Historie und die Dashboards, die nur in ihm existieren. Prüfen Sie, welche davon exportierbar sind. Einigen Sie sich, wo eine Kopie zu halten ist.

**3. Welchen Daten in unseren Systemen trauen wir am wenigsten, und warum?**
Schauen Sie auf Eingabegewohnheiten, Vorgabewerte und überschriebene Felder. Schätzen Sie, wie weit jede Verzerrung die Kennzahlen betrifft, die wir veröffentlichen. Einigen Sie sich, welche Korrektur an der Quelle das meiste Vertrauen für den geringsten Aufwand bringen würde.

**4. Was lässt das Werkzeug Menschen sehen, das wir nicht wollen?**
Prüfen Sie Sichten auf Einzelebene, Aktivitätsprotokolle und Ranglisten. Entscheiden Sie, was zu beschränken oder abzuschalten ist, und schreiben Sie die Regel auf, bevor jemand die Funktion nutzt.

**5. Wie lange brauchen wir, um eine neue Kennzahl hinzuzufügen, und was bremst uns?**
Verfolgen Sie eine jüngere Anfrage von der Genehmigung bis zur Verfügbarkeit. Markieren Sie die Wartezeiten. Einigen Sie sich, was zu entfernen ist, etwa Genehmigungen, fehlende Definitionen oder manuelle Bereinigung.

**6. Was sind die vollen Kosten dieses Werkzeugs für ein Team für ein Jahr?**
Addieren Sie Lizenzen, Infrastruktur, Integration, Schulung und die Zeit der Menschen, die es pflegen. Vergleichen Sie mit den Entscheidungen, die es verbessert hat. Besprechen Sie, wofür wir nicht mehr zahlen würden.

## Vier Perspektiven

### Produkt- und Lieferteams

Teams wollen Daten, die aus der Arbeit kommen, ohne zusätzliche Eingabe, und Sichten, die ihre Fragen beantworten. Sie sollten bei Wahl und Test von Werkzeugen helfen, die Definitionen ihrer eigenen Kennzahlen besitzen und Funktionen ablehnen, die Einzelne ordnen. Ihre Zeit ist die knappste Eingabe, und Werkzeuge, die sie bitten, Arbeit doppelt zu erfassen, werden auf Widerstand stoßen.

### Service- und Betriebsteams

Betriebsteams betreiben die Quellen und oft die Pipeline. Sie sollten die Pipeline als Service mit Monitoring und Tests behandeln, Quelldatenfelder zuverlässig halten und Änderungen in führenden Systemen melden, die Konnektoren brechen werden. Sie sehen als Erste, wenn eine Zahl falsch ist.

### Führung und Governance

Führungskräfte finanzieren das Programm und setzen Erwartungen. Sie sollten nach Gesamtkosten fragen, nicht nach Lizenzpreis, Portabilität und einen Ausstieg verlangen, widerstehen, eine Plattform zu kaufen, um ein Definitionsproblem zu lösen, und auf Datenschutz- und Zugriffsregeln bestehen. Sie sollten einen bescheidenen Start akzeptieren und ihn an den Entscheidungen messen, die er verbessert.

### Kunden und Nutzer

Kunden und Nutzer sehen die Werkzeuge selten und leben mit ihren Folgen: Daten über sie werden gespeichert, verknüpft und analysiert. Sie verdienen klare Regeln, was erhoben wird, wie lange es aufbewahrt wird, wer es sieht und wie es geschützt ist. Wo Kennzahlen auf ihrem Feedback beruhen, sollten die Werkzeuge Einwilligung und Anonymität respektieren.

## In der Praxis: ein Beispiel aus dem Service-Management

Ein regionales Logistikunternehmen hat ein Service-Management-Werkzeug, ein System für Quellcodeverwaltung und Deployment, eine Monitoring-Plattform und ein Umfragewerkzeug, und jedes erzeugt eigene Berichte. Die Leiterin des Service-Managements will eine Sicht auf die Servicegesundheit für 12 Teams. Ein Anbieter bietet eine Alles-in-einem-Analytik-Plattform mit einem Dreijahresvertrag an. Die Zahlen unten sind illustrativ.

Die Leiterin des Service-Managements schreibt zuerst die Fragen und die 14 Kennzahlen auf, auf die sich Teams und Führungskräfte in den Dashboard-Sitzungen einigten. Sie inventarisiert, was existiert: Das Service-Management-Werkzeug kann Incident- und Change-Daten über seine Schnittstelle exportieren, das Deployment-System liefert Deployment-Zeitstempel, und die Monitoring-Plattform berichtet Verfügbarkeit gegen Ziele. Sie bittet eine kleine Gruppe von Teamvertretern, zwei Optionen an drei Kennzahlen mit echten Daten zu testen: die Plattform des Anbieters und eine Kombination aus einem allgemeinen Visualisierungswerkzeug mit einem kleinen Datenspeicher und dünnen Konnektoren.

Der Versuch bringt Unterschiede zutage. Die Plattform band alle Quellen in zwei Tagen an, berechnete die Durchlaufzeit aber als Mittelwert und konnte kein hohes Perzentil zeigen, hatte einen eingebauten „Team-Produktivitätswert“, der sich nicht abschalten ließ, und der Export von Dashboard-Definitionen erzeugte eine Datei, die kein anderes Werkzeug lesen konnte. Die Kombination brauchte 11 Tage zum Anbinden, zeigte aber Mediane und Perzentile, hielt Definitionen als einfachen Text in einem Repository und beschränkte Felder auf Einzelebene am Datenspeicher. Die Gruppe entdeckt auch, dass 30 Prozent der Change-Datensätze nach dem Deployment angelegt wurden, die Durchlaufzeit war also falsch, welches Werkzeug sie auch las. Die Eingabegewohnheit an der Quelle zu beheben wird die erste Arbeit.

Das Unternehmen wählt die Kombination. Die Quellenabdeckung steigt über zwei Quartale von 3 von 8 nötigen Quellen auf 7 von 8. Die Zuverlässigkeit der Pipeline beginnt bei 71 Prozent rechtzeitiger Ladevorgänge mit bestandenen Prüfungen und erreicht 96 Prozent, nachdem das Team Tests und Fehleralarme hinzufügt. Die Zeit bis zu einer neuen Kennzahl fällt von einem Median von 31 Tagen auf 9. Der manuelle Aufwand für den Monatsbericht fällt von etwa 40 Stunden auf 6. Ein Direktor fragt, ob der Produktivitätswert der Plattform des Anbieters hinzugefügt werden könnte, um eine einzige Rangliste der Teams zu erhalten. Die Leiterin des Service-Managements erklärt die Analyse in Thema 1.2, zeigt, was geschah, als anderswo im Unternehmen ein ähnlicher Wert genutzt wurde, und schlägt die aktuelle ausgewogene Sicht vor. Die Entscheidung wird festgehalten, und die Bewertungsfunktion wird in jedem Werkzeug abgeschaltet, das eine hat.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Wählen Sie Werkzeuge in kleinen Experimenten mit einem echten Team und einer echten Frage und behalten Sie die Möglichkeit, den Kurs zu ändern. Zu beachten ist, dass eine früh getroffene große Plattformentscheidung Definitionen festlegt, bevor das Team gelernt hat, was es braucht.

### KI

Viele Analytik- und Service-Management-Werkzeuge enthalten heute KI-Funktionen. Fragen Sie, was die KI tut, mit welchen Daten, unter welchen Bedingungen, wie ihre Ausgabe geprüft wird und wie man sie abschaltet, und messen Sie die KI-Funktionen wie jede andere Nutzung (siehe Thema 10.5, Kennzahlen für KI-Governance und -Risiken). Zu beachten ist, dass standardmäßig eingeschaltete KI-Funktionen Berichte still verändern können; fragen Sie also Lieferanten zu jedem Release.

### Automatisierung

Bevorzugen Sie Werkzeuge, mit denen Sie Daten automatisch über dokumentierte Schnittstellen erfassen und Ihre Daten portabel halten können. Messen Sie die Integrationen an Fehlschlägen und Zeit bis zu einer neuen Kennzahl. Zu beachten ist, dass proprietäre Konnektoren Ihre Daten schwer mitnehmbar machen können; testen Sie also einen Export.

### Analytik

Beurteilen Sie Werkzeuge nach Quellenabdeckung, Abgleich und der Zeit, eine neue Frage zu beantworten. Die Entscheidung, die dies untermauert, ist, welches Werkzeug zu übernehmen, zu behalten oder zu verlassen ist. Zu beachten ist, dass Vorführdaten sauber aussehen; testen Sie also mit Ihren eigenen unordentlichen Daten.

## Branchenperspektive

**Startup.** Nutzen Sie, was das Produkt und die vorhandenen Werkzeuge schon bieten. Eine Tabelle und die eingebauten Berichte der Werkzeuge, die Sie nutzen, können die meisten frühen Fragen beantworten. Widerstehen Sie einer Datenplattform, bis die Fragen stabil sind und der manuelle Aufwand schmerzt. Halten Sie Kennzahlendefinitionen aufgeschrieben, damit ein späterer Wechsel leicht ist.

**Kleinunternehmen.** Wenige Kennzahlen und wenige Systeme bedeuten einfache Werkzeuge. Eingebaute Berichte und eine Tabelle genügen oft. Die Hauptrisiken sind Daten, die nur im Kopf einer Person stecken, und Werkzeuge ohne Export. Wählen Sie Produkte, die Sie verlassen können, und schreiben Sie die Definitionen auf.

**Großunternehmen.** Viele Systeme, viele Teams und viele Definitionen sprechen für einen gesteuerten Datenspeicher, einen Katalog der Definitionen und gestufte Sichten. Föderierte Verantwortung funktioniert besser als ein zentrales Team, das jeden Bericht baut. Achten Sie auf Lock-in, Zugriffskontrolle, Datenschutz und Lieferantenbewertung und erwägen Sie ein kleines Plattformteam, das die Pipeline als Service bereitstellt.

**Behörden und öffentlicher Sektor.** Beschaffungsregeln, Datensouveränität und Barrierefreiheit beeinflussen Werkzeugentscheidungen. Offene Standards und Portabilität sind wertvoll, weil Verträge lang sind und Verwaltungen wechseln. Planen Sie Sicherheitsbewertungen, Aufbewahrung von Unterlagen und Regeln zur öffentlichen Offenlegung ein und prüfen Sie aktuelle Anleitung zu Hosting und Beschaffung (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten umfassen Lizenzen oder Abonnements, Infrastruktur, Integrations- und Konnektorarbeit, Datenbereinigung, Definitions- und Katalogarbeit, Schulung, Support und den wiederkehrenden Aufwand, die Pipeline gesund zu halten. Bauoptionen tragen Engineering-Kosten, die leicht zu untertreiben sind, und Kaufoptionen tragen Gebühren, die mit dem Maßstab wachsen, sowie die Kosten des Verlassens.

Der Ertrag kommt aus gespartem Berichtsaufwand, schnelleren Antworten, weniger Streit um Zahlen und besseren Entscheidungen aus vertrauten Daten. Bauen Sie den Business Case aus Ihren eigenen Daten: heute für manuelle Berichte aufgewendete Stunden, die Zahl konkurrierender Fassungen einer Zahl, die Verzögerung zwischen Frage und Antwort und Kosten überlappender Werkzeuge. Vermeiden Sie, Analystenzahlen zum Ertrag von Analytik ohne nachvollziehbare Quelle und Relevanz für Ihren Kontext zu zitieren. Ein fairer Vergleich zählt die vollen Kosten jeder Option über drei Jahre, einschließlich Ausstieg (siehe Thema 7.5, Servicekosten und Stückökonomie, und Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Erst das Werkzeug, später die Fragen.** Die Plattform kommt, und niemand weiß, was er von ihr fragen soll. Schreiben Sie zuerst die Kennzahlen.
- **Kaufen, um ein Definitionsproblem zu lösen.** Uneinigkeit über Bedeutung besteht in jedem Werkzeug fort. Klären Sie die Definitionen.
- **Eingebaute Einzelwerte.** Sie verlocken und verzerren. Schalten Sie sie ab und setzen Sie zuerst die Richtlinie.
- **Kein Ausstieg.** Historie und Definitionen sind gefangen. Testen Sie den Export und halten Sie eine Kopie.
- **Die Ein-Personen-Pipeline.** Sie stoppt, wenn diese Person geht. Dokumentieren Sie sie, testen Sie sie und teilen Sie die Verantwortung.
- **Doppelte Eingabe.** Menschen erfassen dieselbe Arbeit zweimal, und die Qualität beider sinkt. Nehmen Sie Daten aus den führenden Systemen.
- **Frühes Überengineering.** Eine Datenplattform kommt, bevor eine einzige Sicht ihren Wert bewiesen hat. Beginnen Sie dünn.
- **Datenqualität ignorieren.** Saubere Diagramme auf schmutzigen Daten führen überzeugender in die Irre. Beheben Sie die Erfassung an der Quelle.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Datenversorgung | Manuelle Erfassung; Tabellen | Einige automatisierte Feeds; einzelne Skripte | Vereinbarte Quellen speisen über getestete Pipelines einen gemeinsamen Speicher | Zuverlässigkeit, Abgleich und Aktualität gesteuert und sichtbar | Föderierte Pipelines mit geteilten Verträgen über Teams und Lieferanten; Quellen aus Feedback verbessert |
| Definitionen und Katalog | In den Köpfen der Menschen | Einige dokumentiert | Ein Katalog der Definitionen mit Eignern, versioniert und überprüft | Katalog treibt Dashboards; Änderungen mit Nutzern überprüft | Definitionen gemeinsam über Teams und Lieferanten besessen; eingestellt, wenn sie Entscheidungen nicht mehr informieren |
| Wahl und Kosten | Ad-hoc-Käufe | Überlappende Werkzeuge | Kriterien aufgeschrieben; Ausstieg getestet; volle Kosten gezählt | Kosten je unterstütztem Team und manueller Aufwand gesteuert | Werkzeugentscheidungen regelmäßig mit Nutzern überprüft und an wechselnden Bedarf angepasst |

## Checkliste

- [ ] Die vereinbarten Kennzahlen und ihre Fragen sind aufgeschrieben, bevor Werkzeuge verglichen werden.
- [ ] Vorhandene Werkzeuge und Berichte wurden zuerst inventarisiert und getestet.
- [ ] Die Datenqualität an den Hauptquellen wurde geprüft und die schlimmsten Lücken behoben.
- [ ] Auswahlkriterien sind geschrieben und enthalten Verteilungen, Zugriffskontrolle und Export.
- [ ] Vor jeder Festlegung wurde ein zeitlich begrenzter Versuch mit echten Daten und echten Nutzern durchgeführt.
- [ ] Funktionen zur Bewertung und Rangordnung Einzelner sind abgeschaltet oder per Richtlinie beschränkt.
- [ ] Definitionen werden in einem portablen Katalog außerhalb jedes einzelnen Werkzeugs gehalten.
- [ ] Die Pipeline hat einen Eigner, automatisierte Prüfungen, Monitoring und einen Fehleralarm.
- [ ] Ein Export von Definitionen und Historie wurde getestet.
- [ ] Die vollen Kosten über drei Jahre, einschließlich Ausstieg, wurden gezählt.

## KI-Prompts

**Anforderungen aus Fragen schreiben.**

```text
Here are the questions our audiences ask and the measures we plan to publish:
[paste]. Draft a two-page requirements document for a metrics tool or pipeline.
Cover data sources, freshness, access control, retention, distributions and
percentiles, export and portability, and a list of must-haves versus preferences.
Do not name products. List your assumptions and the points to confirm with the
teams.
```

**Einen Werkzeugversuch planen.**

```text
We are comparing [options] for our metrics program. Design a two-week trial using
three of our measures and real data. State what to test, how to score the options
against written criteria, who should take part, how to check access control and
export, and what evidence we will record. Do not claim results about specific
products. List your assumptions and risks.
```

**Eine Datenpipeline überprüfen.**

```text
Here is a description of how data flows from [sources] to our dashboards: [paste].
Identify points where data could be late, duplicated, overwritten, or lost, and
suggest automated checks for each. Propose a way to reconcile key figures with the
source. Do not invent system behavior. List your assumptions and what you could not
tell from the description.
```

**Die vollen Kosten vergleichen.**

```text
Help me compare the three-year full cost of building, buying, and combining tools
for our metrics program. List the cost categories for each option, including
licenses, infrastructure, integration, data cleaning, training, upkeep, and exit.
Provide a table with blanks for our own figures. Do not supply prices. List your
assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um beim Schreiben von Anforderungen die Datenquelle und die Leitplanke jeder Kennzahl zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Entscheidungsprotokoll zu Werkzeugen Definitionen, Datenquellen und Leitplanken trägt.

## Wichtigste Erkenntnisse

- Schreiben Sie zuerst die Fragen und Kennzahlen und wählen Sie Werkzeuge, die ihnen dienen.
- Nutzen Sie die führenden Systeme, beheben Sie die Datenerfassung an der Quelle und testen Sie den Abgleich.
- Halten Sie Definitionen und Daten portabel und testen Sie den Ausstieg, bevor Sie sich festlegen.
- Schalten Sie Bewertung und Ranglisten Einzelner ab und setzen Sie die Richtlinie, bevor Sie eine Funktion einschalten.
- Betreiben Sie die Pipeline als Service mit Eigner, Tests und Monitoring.
- Zählen Sie die vollen Kosten über mehrere Jahre und beginnen Sie mit dem dünnsten Pfad, der echte Fragen beantwortet.

## Quellen und weiterführende Literatur

1. Kimball, R., and Ross, M., *The Data Warehouse Toolkit*, Wiley, 3rd edition, 2013.
2. Redman, T., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4 Foundation*, 2019.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
7. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
8. Wikipedia, [Data pipeline](https://en.wikipedia.org/wiki/Data_pipeline).
9. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
10. Wikipedia, [Data warehouse](https://en.wikipedia.org/wiki/Data_warehouse).
11. Wikipedia, [Application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface).
12. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
13. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
14. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
