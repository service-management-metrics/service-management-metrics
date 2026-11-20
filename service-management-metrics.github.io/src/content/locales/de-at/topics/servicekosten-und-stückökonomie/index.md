# Servicekosten und Stückökonomie

**Zu wissen, was ein Service kostet und was er je Einheit von etwas kostet, das Nutzer schätzen, lässt ein Team ehrliche Entscheidungen über Qualität, Geschwindigkeit und Ausgaben treffen, solange die Zuordnungsregeln fair und sichtbar sind und nie dazu dienen, die Menschen zu bestrafen, die den Service betreiben.**

## Überblick und Motivation

Jeder IT-Service kostet Geld: Menschen, Cloud und Hosting, Lizenzen, Hardware, Lieferanten und den Anteil gemeinsamer Plattformen, den er nutzt. Führungskräfte fragen, was ein Service kostet, ob er es wert ist und was sich ändert, wenn die Nachfrage sich verdoppelt. Teams stellen dieselben Fragen von der anderen Seite: Was können wir uns leisten, und worauf verzichten wir? Ohne Zahlen werden diese Gespräche zu Streit darüber, wessen Budget wessen ist.

[Kostenrechnung](https://en.wikipedia.org/wiki/Cost_accounting) ist die Praxis, Kosten zu messen, zu erfassen und zu analysieren. Für eine Service-Organisation sind die zentralen Aufgaben, Kosten Services zuzuordnen, Kosten je Einheit von etwas Bedeutsamem auszudrücken und zu prognostizieren, wie sich Kosten mit dem Volumen ändern. Die Praktik des Service-Finanzmanagements von ITIL deckt dasselbe Gebiet ab, und die FinOps-Praxis für Cloud-Ausgaben führt es weiter (siehe Thema 7.6, Kennzahlen für FinOps und Cloud-Kosten).

Agile und ITIL-Sicht auf Kosten unterscheiden sich, und der Unterschied ist nützlich.

- **Die Projektsicht** finanziert ein befristetes Vorhaben mit einem Budget und einem Liefertermin. Kosten sind das, was das Projekt ausgab, und Erfolg ist Lieferung termin- und budgetgerecht. Das Projekt endet, das Team zerstreut sich, und der Service, den es schuf, wird jemand anderem übergeben.
- **Die Produkt- oder Servicesicht** finanziert ein dauerhaftes Team, einen Service über sein Leben zu bauen und zu betreiben. Kosten sind die stabilen Kosten des Teams und seiner Plattformen, und die Frage ist, ob der gelieferte Wert diese Ausgaben rechtfertigt. Das passt zu den agilen Zielen kontinuierlicher Auslieferung und des Aufbaus um motivierte Menschen, die den Service kennen. Es passt auch zum ITIL-Anliegen der Kosten eines Services über seinen Lebenszyklus.

Kostenkennzahlen können ebenso leicht in die Irre führen, wie sie informieren. Drei Probleme kehren wieder.

- **Zuordnung ist eine Wahl.** Gemeinsame Kosten, etwa für Netzwerke, Sicherheit und Plattformen, müssen nach irgendeiner Regel auf Services verteilt werden, und verschiedene Regeln geben verschiedene Antworten. [Kostenzuordnung](https://en.wikipedia.org/wiki/Cost_allocation) sollte einem [Kostentreiber](https://en.wikipedia.org/wiki/Cost_driver) folgen, einem Faktor, der Kosten verändert, etwa Nutzer, Anfragen oder Speicher. [Prozesskostenrechnung](https://en.wikipedia.org/wiki/Activity-based_costing) formalisiert das, indem sie Kosten den Aktivitäten zuordnet, die Ressourcen verbrauchen.
- **Fixe und variable Kosten verhalten sich verschieden.** Ein [fixer Kostenanteil](https://en.wikipedia.org/wiki/Fixed_cost) bleibt gleich, während sich das Volumen innerhalb einer Spanne ändert, und ein [variabler Kostenanteil](https://en.wikipedia.org/wiki/Variable_cost) steigt mit dem Volumen. Die [Stückkosten](https://en.wikipedia.org/wiki/Unit_cost) eines Services sinken mit wachsendem Volumen, wenn fixe Kosten dominieren, ein Muster im Zusammenhang mit [Skaleneffekten](https://en.wikipedia.org/wiki/Economies_of_scale). Auf Stückkosten zu schauen, ohne zu wissen, welche Kosten fix sind, führt zu falschen Prognosen.
- **Kosten sind nicht Wert.** Der billigste Service ist nicht der beste. Die Kosten je Ticket sinken, wenn Sie Tickets schließen, ohne Probleme zu lösen. Kostenkennzahlen brauchen einen Begleiter für Qualität oder Ergebnis, den die früheren Teile dieses Buchs liefern (siehe Thema 6.5, Wertrealisierung und Geschäftsergebnisse).

Auch buchhalterische Klassifizierungen zählen. [Investitionsausgaben](https://en.wikipedia.org/wiki/Capital_expenditure) kaufen dauerhafte Vermögenswerte, und Betriebsausgaben decken den laufenden Betrieb. Cloud- und Abonnement-Services verschieben Ausgaben von der ersten Art zur zweiten, was verändert, wie Budgets aussehen, ohne zu verändern, was die Services kosten. Die Kollegen der Finanzen besitzen diese Regeln, und die Kennzahlen hier sollten mit ihnen gebaut werden.

Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt bei Geld stark. Ein Kostenziel erzeugt tendenziell Kostensenkung dort, wo sich der Schaden am leichtesten verbergen lässt, etwa bei Wartung, Qualität und Lernzeit. Die folgenden Kennzahlen sind daher mit Indikatoren der Servicegesundheit und mit einer Aussage zu den Zuordnungsregeln gekoppelt (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Leitprinzipien

- **Zuordnungsregeln ausdrücklich machen und an Treiber binden.** Menschen akzeptieren Zahlen, denen sie folgen können.
- **Fixe von variablen Kosten trennen.** Prognosen hängen davon ab, was was ist.
- **Stückkosten mit ihrem Qualitätsbegleiter berichten.** Billiger ist nur dann besser, wenn der Service noch gut ist.
- **Spannen und Trends nutzen, keine falsche Genauigkeit.** Zuordnung enthält Urteil.
- **Dauerhafte Teams um Services herum finanzieren, wo es geht.** Stabile Teams lernen und verbessern sich; befristete lösen sich auf.
- **Kosten mit den Menschen teilen, die sie ändern können.** Sichtbarkeit ohne Einfluss ist nur Schuldzuweisung.
- **Nie Menschen oder Teams nach Kosten ordnen.** Services unterscheiden sich, und ebenso ihre Randbedingungen.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kosten je Service | Voll belastete Jahreskosten eines benannten Services, nach dokumentierten Zuordnungsregeln | direkte Kosten + zugeordnete gemeinsame Kosten für den Service im Zeitraum | Währung pro Jahr | Hauptbuch, Kostenstellendaten, Cloud- und Lizenzrechnungen, Zeit- oder Aktivitätsdaten | Service-Finanzmanagement; Management des Servicekatalogs | Kosten eines dauerhaften Produktteams und seiner Plattformen | Vierteljährlich |
| Stückkosten | Kosten je Einheit von etwas, das Nutzer schätzen, etwa je aktivem Nutzer, je Transaktion oder je gelöster Anfrage | Kosten je Service im Zeitraum / im Zeitraum gelieferte Einheiten | Währung je Einheit | Kosten je Service und Volumendaten | Service-Finanzmanagement; Service-Level-Management | Kosten der Bedienung je Ergebnis | Vierteljährlich |
| Zuordnungsabdeckung | Anteil der IT-Ausgaben, der einem benannten Service zugeordnet oder als gemeinsamer Overhead erklärt ist | Services zugeordnete oder als Overhead erklärte Ausgaben / gesamte IT-Ausgaben | Prozent | Hauptbuch und Zuordnungsmodell | Service-Finanzmanagement | Sichtbare Kosten der Arbeit jedes Teams | Vierteljährlich |
| Aufteilung in Betrieb, Change und Verbesserung | Anteil von Ausgaben oder Kapazität, der in den Betrieb von Services, ihre Veränderung und ihre Verbesserung fließt | Ausgaben oder Kapazität je Kategorie / gesamt | Prozent | Hauptbuch-Tags, Arbeitstypen im Work-Tracker | Service-Finanzmanagement; kontinuierliche Verbesserung | Kapazitätsverteilung nach Arbeitstyp | Vierteljährlich |
| Prognoseabweichung | Differenz zwischen Prognose und tatsächlichen Kosten, je Service | (tatsächlich minus Prognose) / Prognose | Prozent | Prognoseprotokoll und Hauptbuch | Service-Finanzmanagement | Prognosegenauigkeit | Monatlich |
| Streitquote bei Showback | Anteil der Showback- oder Chargeback-Positionen, die Serviceeigner anfochten und die geändert wurden | nach Anfechtung geänderte Positionen / ausgestellte Positionen | Prozent | Showback-System und Streitprotokoll | Service-Finanzmanagement | Retrospektive zu gemeinsamen Kosten | Vierteljährlich |
| Finanzierungsanteil dauerhafter Teams | Anteil der Liefer- und Betriebsausgaben, der als stabile Teamkapazität für einen Service finanziert wird | Ausgaben für dauerhafte Service-Teams / gesamte Liefer- und Betriebsausgaben | Prozent | Hauptbuch und Organigramm | Service-Finanzmanagement; organisatorischer Wandel | Um Services und motivierte Menschen gebaute Teams | Jährlich |

Definieren Sie Zeitraum, Währung und Kostenarten für jede Kennzahl und halten Sie die Zuordnungsregeln im Kennzahlenregister fest: welche Kosten direkt sind, welche gemeinsam und welcher Treiber jede gemeinsame Kostenart verteilt. Stückkosten brauchen eine Einheit, die Nutzer und Team beide akzeptieren, und die Definition der Einheit bleibt über den Trend fest. Die Prognoseabweichung vergleicht mit der Prognose, wie sie zu Beginn des Zeitraums stand, nicht mit einer überarbeiteten.

## Empfehlungen

### Das Kostenbild aufbauen

**1. Beginnen Sie mit dem Hauptbuch und der Serviceliste.** Nehmen Sie die gesamten IT-Ausgaben aus dem Hauptbuch, listen Sie die Services aus dem Katalog auf und entscheiden Sie, welcher Anteil jeder Kostenart zu welchem Service gehört. Beginnen Sie mit den leichten direkten Kosten: das Team, das den Service betreibt, seine Lizenzen, sein Hosting. Gemeinsame Kosten kommen an zweiter Stelle. Ein grobes erstes Bild, mit den Beteiligten geteilt, schlägt ein präzises, das im Privaten gebaut wurde.

**2. Wählen Sie Kostentreiber, denen Menschen folgen können.** Wählen Sie für jede gemeinsame Kostenart einen Treiber, der an das gebunden ist, was sie tatsächlich verursacht: Nutzer für eine Kollaborationsplattform, Speicher für eine Datenplattform, Anfragen für ein Gateway, Geräte für Endpoint-Management. Erklären Sie die Regel in einem Satz. Treiber, die niemand prüfen kann, laden zu Streit ein, und Treiber, die niemand beeinflussen kann, machen Showback sinnlos.

**3. Trennen Sie fixe und variable Kosten.** Markieren Sie für jeden Service, welche Kosten sich mit dem Volumen bewegen und welche nicht. Ein Service, der überwiegend fixe Kosten hat, hat Stückkosten, die mit Wachstum fallen, und einer, der überwiegend variabel ist, nicht. Diese Trennung ist die Grundlage jeder Prognose und jedes Gesprächs über Skalierung.

**4. Zeigen Sie Spannen, wo Zuordnung Urteil enthält.** Geben zwei vernünftige Zuordnungsregeln um 20 Prozent abweichende Ergebnisse, zeigen Sie beide oder die Spanne. Eine einzelne präzise Zahl aus einer willkürlichen Regel löst Streit aus, den die Daten nicht beilegen können.

### Je Einheit messen, mit Qualität daneben

**5. Wählen Sie eine Einheit, die Wert widerspiegelt.** Kosten je aktivem Nutzer, je abgeschlossener Transaktion, je gelöster Anfrage oder je Deployment können alle nützlich sein. Wählen Sie die Einheit, die an den Zweck des Services anknüpft, vereinbaren Sie sie mit dem Serviceeigner und halten Sie sie stabil. Kosten je Ticket sind eine riskante Einheit, denn sie fallen, wenn Tickets früh geschlossen werden, und steigen, wenn Sie Tickets durch guten Self-Service verhindern.

**6. Koppeln Sie jede Stückkostenzahl mit einer Qualitätskennzahl.** Zeigen Sie Stückkosten neben Verfügbarkeit, Zufriedenheit oder Wiedereröffnungsrate. Stückkosten, die fallen, während die Qualität fällt, sind eine Verlagerung von Kosten auf Nutzer. Stückkosten, die stabil bleiben, während die Qualität steigt, sind ein Gewinn. Zeigen Sie sie zusammen oder gar nicht (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

**7. Verfolgen Sie den Trend, nicht nur das Niveau.** Stückkosten über die Zeit, mit Notizen, was sich änderte, erzählen eine Geschichte, die ein Quartal nicht erzählen kann. Markieren Sie Änderungen der Zuordnungsregeln oder Einheiten im Diagramm, damit Trends nicht falsch gelesen werden. Vergleichen Sie einen Service mit seiner eigenen Historie, bevor Sie ihn mit anderen vergleichen.

### Kosten mit den Menschen teilen, die sie ändern können

**8. Nutzen Sie Showback vor Chargeback.** Showback berichtet Serviceeignern Kosten, ohne sie ihnen zu berechnen, und Chargeback überträgt die Kosten auf ihre Budgets. Beginnen Sie mit Showback, das Verständnis und Vertrauen aufbaut, und gehen Sie zu Chargeback nur dort über, wo es Entscheidungen verändert und die Regeln akzeptiert sind. Beide hängen von Regeln ab, die Eigner mitgestalten.

**9. Lassen Sie Eigner die Zahlen anfechten.** Ein Streitprozess ist ein Zeichen von Gesundheit, solange er schnell ist und seine Ergebnisse protokolliert werden. Überprüfen Sie die Streitquote: Eine hohe zeigt Regeln, denen niemand traut, und null kann zeigen, dass niemand die Berichte liest. Beheben Sie die Regel, nicht nur die Position.

**10. Überprüfen Sie Kosten mit dem ganzen Service-Team.** Beziehen Sie Ingenieure und Betreiber ebenso ein wie Führungskräfte in ein regelmäßiges Kosten-Review. Menschen, die einen Service betreiben, wissen oft, wo sich Verschwendung verbirgt: ungenutzte Umgebungen, überdimensionierte Ressourcen, doppelte Werkzeuge. Behandeln Sie ihre Befunde als zu teilende Verbesserungen und nicht als Kritik.

### Für Stabilität und Lernen finanzieren

**11. Bevorzugen Sie dauerhafte, um Services finanzierte Teams.** Finanzieren Sie, wo möglich, ein stabiles Team, das einen Service über die Zeit besitzt, statt ein Projektteam zusammenzustellen und aufzulösen. Dauerhafte Teams sammeln Wissen, bauen bessere Beziehungen zu Nutzern auf und tragen die Kosten schlechter Entscheidungen. Das spiegelt das agile Ziel, um motivierte Individuen herum aufzubauen, und das ITIL-Anliegen für den Service-Lebenszyklus. Die Änderung der Finanzierung ist eine bedeutende organisatorische Entscheidung, beziehen Sie also Finanzen und Führung früh ein. Mik Kerstens Buch *Project to Product* behandelt diesen Wandel.

**12. Reservieren Sie Kapazität für Verbesserung.** Kosten, die künftige Kosten senken, etwa Automatisierung, Zuverlässigkeitskorrekturen und das Beseitigen doppelter Werkzeuge, brauchen geschützte Finanzierung, sonst verlieren sie jedes Mal gegen Funktionsarbeit. Verfolgen Sie den Verbesserungsanteil in der Aufteilung in Betrieb, Change und Verbesserung und schauen Sie auf die Erträge, die er bringt (siehe Thema 4.6, Technische Schulden und bekannte Fehler).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Kosten je Service | Kosten über die Zuordnungsregel auf andere Services verschieben; ungünstige Kosten unzugeordnet lassen | Zuordnungsabdeckung; Regeln veröffentlicht und von Eignern überprüft; Summen mit dem Hauptbuch vergleichen |
| Stückkosten | Den Nenner mit geringwertigen Einheiten aufblähen; Qualität kürzen, um Kosten zu kürzen; die Einheit ändern | Qualitätsbegleiter; feste Einheitendefinition; Ergebnisprüfungen |
| Zuordnungsabdeckung | Große Beträge als gemeinsamen Overhead erklären, um Zuordnung zu vermeiden | Anteil des Overheads berichtet; Review dessen, was als Overhead erklärt wird und warum |
| Aufteilung in Betrieb, Change und Verbesserung | Betriebsarbeit als Verbesserung oder Change umetikettieren; am Ende des Zeitraums kennzeichnen | Bei der Aufnahme kennzeichnen; Elemente stichprobenartig auf Typ prüfen; mit Incident- und Anfragedaten vergleichen |
| Prognoseabweichung | Prognosen aufpolstern; die Prognose spät im Zeitraum überarbeiten | Prognose zu Beginn protokolliert; Prognosespannen über die Zeit mit tatsächlichen Werten vergleichen |
| Streitquote bei Showback | Streit entmutigen; Positionen ändern, ohne eine Regel zu ändern | Streitfälle und Ergebnisse überprüfen; prüfen, ob sich Regeln nach wiederholtem Streit änderten |
| Finanzierungsanteil dauerhafter Teams | Projekte in dauerhafte Teams umbenennen, ohne Finanzierung oder Verantwortung zu ändern | Teamstabilität und Verantwortung über die Zeit prüfen; Kennzahlen der Servicegesundheit |

Ein gesunder Befund ist ein Kostenbild, das Serviceeigner wiedererkennen, Stückkosten, die sich aus erklärten Gründen bewegen, während die Qualität hält, schrumpfende Prognosefehler und Verbesserungsarbeit, die in den Zahlen erscheint.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Projektfinanzierung | Klarer Umfang und Ende | Teams lösen sich auf; Wissen geht verloren; Service wird übergeben |
| Finanzierung dauerhafter Teams | Lernen, Verantwortung, stabile Kosten | Braucht Vertrauen und einen reifen Planungsprozess; der Umfang kann driften |
| Showback | Baut Verständnis mit wenig Reibung auf | Kann ignoriert werden, wenn niemand verantwortlich ist |
| Chargeback | Schafft Verantwortlichkeit und Preissignale | Streit; Anreize, gemeinsame Services zu meiden |
| Einfache Zuordnungsregeln | Leicht zu erklären | Womöglich grob |
| Prozesskostenbasierte Zuordnung | Genauer | Teuer zu pflegen; falsche Genauigkeit |
| Kosten je Einheit | Bindet Kosten an Wert | Empfindlich gegenüber Wahl von Einheit und Volumen |
| Nur Gesamtkosten | Einfach | Verbirgt Trends und Effizienz |

Die Antwort in Worten ist, mit einfachen Regeln und Showback zu beginnen, Genauigkeit dort hinzuzufügen, wo Entscheidungen davon abhängen, und mit wachsendem Vertrauen und wachsender Planungsreife zur Finanzierung dauerhafter Teams überzugehen. Halten Sie neben jeder Kostenkennzahl eine Qualitätskennzahl.

## Fragen für die Diskussion im Team

**1. Was kostet unser Hauptservice im Jahr, und wer würde der Zahl zustimmen?**
Bitten Sie die Finanzen und den Serviceeigner, unabhängige Schätzungen zu erstellen. Vergleichen Sie sie. Die Moderation sollte festhalten, wo sie abweichen und warum: Zuordnungsregeln, Umfang oder fehlende Kosten. Einigen Sie sich für das nächste Quartal auf eine einzige dokumentierte Regel.

**2. Was ist die Einheit, die unsere Nutzer wiedererkennen würden, und was kostet sie?**
Listen Sie mögliche Einheiten für den Service auf und wählen Sie eine. Berechnen Sie ihre Kosten und besprechen Sie, was sie steigen oder fallen ließe. Fragen Sie, was die Einheit verbirgt. Fügen Sie eine Qualitätskennzahl daneben hinzu.

**3. Welche unserer gemeinsamen Kosten werden nach einer Regel verteilt, die niemand erklären kann?**
Listen Sie die gemeinsamen Kosten und ihre Treiber auf. Fragen Sie bei jedem, ob der Treiber zu dem passt, was die Kosten verursacht. Ersetzen Sie einen, der es nicht tut. Besprechen Sie, wer den Treiber beeinflussen kann, denn Kostendaten ohne Einfluss sind nur Schuldzuweisung.

**4. Wie viel unserer Kapazität geht in den Betrieb, die Veränderung und die Verbesserung des Services?**
Überprüfen Sie ein Quartal fertiger Arbeit nach Typ, wie im Planungsthema (siehe Thema 2.5, Kennzahlen für Lieferprognosen und Planung). Vergleichen Sie mit dem, was Führungskräfte denken. Entscheiden Sie, wie hoch der Verbesserungsanteil sein sollte und was ihn schützen würde.

**5. Was änderte sich, wenn wir ein dauerhaftes Team für diesen Service finanzierten?**
Stellen Sie sich Finanzierung, Verantwortung und Kennzahlen vor. Fragen Sie, welche Risiken und Nutzen Finanzen, Team und Nutzer sähen. Finden Sie einen Schritt dorthin, etwa eine stabile Teamliste und eine gemeinsame Sicht auf das Servicebudget.

**6. Wann hat eine Kostenzahl zuletzt einen Streit ausgelöst, und was haben wir gelernt?**
Erinnern Sie sich an einen Streit um Showback oder Budget. Ging es um die Zahl oder um die Regel? Besprechen Sie, wie eine klarere Regel oder ein besserer Streitprozess geholfen hätte.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams sehen Kosten als den Preis ihrer Zeit, Plattformen und Werkzeuge. Sie sollten die Kosten und Stückkosten ihres Services kennen, Verschwendung früh erkennen und die Zahlen nutzen, um für Verbesserungsarbeit und stabile Finanzierung zu argumentieren. Sie sollten vermeiden, die Zahl durch Kürzen der Qualität zu optimieren, und Zuordnungsregeln anfechten, denen sie nicht folgen können.

### Service- und Betriebsteams

Betriebsteams tragen die Kosten des Betriebs von Services und halten oft die gemeinsamen Plattformen. Sie sollten veröffentlichen, wie gemeinsame Kosten getrieben werden, Showback-Fragen beantworten und Ideen zur Kosteneinsparung aus der Erfahrung teilen. Sie sollten Druck erwarten, Betriebskosten zu kürzen, und die Qualitäts- und Risikoseite jeder Kürzung zeigen.

### Führung und Governance

Führungskräfte fragen nach Kosten und Wert und setzen das Finanzierungsmodell. Sie sollten Stückkosten mit Qualitätsbegleitern verlangen, die Finanzierung dauerhafter Teams unterstützen, wo sie passt, und vermeiden, Teams nach Kosten zu ordnen. Die Governance sollte erwarten, dass Zuordnungsregeln dokumentiert, überprüft und konsistent angewandt werden, und sollte auf den Verbesserungsanteil schauen.

### Kunden und Nutzer

Nutzer, die über Chargeback zahlen, wollen die Rechnung verstehen und sie beeinflussen. Andere sehen Kosten in der Qualität und Breite der angebotenen Services. Klare Stückkosten und eine Stimme bei der Abwägung zwischen Preis und Service machen die Beziehung gesünder, und ihr Feedback ist Teil des Qualitätsbegleiters jeder Stückkostenzahl.

## In der Praxis: ein Beispiel aus dem Service-Management

Die zentrale IT-Abteilung einer mittelgroßen Universität stellt etwa 25 Services für 18.000 Studierende und Mitarbeitende bereit. Die Zahlen unten sind illustrativ.

Das Finanzamt will wissen, warum das Budget der IT schneller wuchs als die Einschreibungen. Der IT-Finanzpartner baut mit den Serviceeignern ein Kostenbild. Von den gesamten IT-Ausgaben sind 72 Prozent direkt benannten Services zugeordnet, 18 Prozent sind gemeinsame Plattformen (Netzwerk, Identität, Sicherheitswerkzeuge), die über Treiber zugeordnet werden, und 10 Prozent sind als Overhead erklärt. Die Zuordnungsabdeckung beträgt also 90 Prozent. Die Lernplattform kostet das Äquivalent von 41 US-Dollar je aktivem Nutzer und Jahr, gestiegen von 36, während Zufriedenheit und Verfügbarkeit stabil sind. Der Service Desk zeigt Kosten je gelöster Anfrage, die über zwei Jahre um 12 Prozent gefallen sind. Der Serviceeigner weist darauf hin, dass der Rückgang mit einem Anstieg wieder eröffneter Tickets von 4 auf 9 Prozent zusammenfiel, und der Qualitätsbegleiter zeigt, dass die Einsparung teils eine Verlagerung von Aufwand auf Nutzer ist.

Das Team nimmt vier Änderungen vor. Es veröffentlicht die Zuordnungsregeln auf einer Seite, mit Treibern für jede gemeinsame Kostenart und dem Datum des letzten Reviews. Es ersetzt die Kosten je Anfrage durch Kosten je beim ersten Kontakt gelöster Anfrage, neben der Wiedereröffnungsrate gezeigt. Es verlagert die Lernplattform und den Identitätsservice zur Finanzierung als dauerhafte Teams mit stabiler Besetzung. Es reserviert 15 Prozent der Kapazität für Verbesserungsarbeit für jeden der zwei größten Services und verfolgt, was die Arbeit zurückgibt.

Ein Jahr später liegen die Stückkosten der Lernplattform bei 38 US-Dollar, da die Nutzung wuchs, die Wiedereröffnungsrate ist auf 5 Prozent gefallen, und die Prognoseabweichung für die beiden Services mit dauerhaften Teams liegt innerhalb von 4 Prozent, gegenüber 11 Prozent bei projektfinanzierter Arbeit. Die Streitquote bei Showback ist nach der Änderung zweier Regeln von 22 Prozent auf 8 Prozent gefallen. Das Finanzamt bittet um ein Jahresziel von 5 Prozent Stückkostensenkung für jeden Service. Der IT-Finanzpartner schlägt Ziele nur dort vor, wo ein Service einen klaren Effizienzhebel hat, mit dem Qualitätsbegleiter gezeigt, und erklärt, dass ein pauschales Ziel das Kürzen von Wartung belohnen würde. Die Entscheidung wird festgehalten, mit einem Review der Regeln jedes Jahr.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Finanzieren Sie dauerhafte Teams und überprüfen Sie Kosten gemeinsam mit Ergebnissen regelmäßig mit Stakeholdern, damit sich Kostengespräche um mehr als Kürzen drehen. Zu beachten ist, dass Zuordnungsregeln, die zum Bestrafen von Teams genutzt werden, zur Manipulation von Tags und Aufteilungen führen.

### KI

KI-Lasten fügen variable Kosten hinzu, etwa Modellnutzung und Datenverarbeitung, und werfen die Frage nach Kosten je Ergebnis auf. Verfolgen Sie Kosten je Werteinheit für KI-gestützte Pfade und koppeln Sie sie mit Qualität. Zu beachten ist, dass ein billigerer KI-Pfad, der die Qualität senkt, Kosten nur in Nacharbeit verschiebt.

### Automatisierung

Automatisieren Sie die Kostenerfassung und Prüfungen der Kennzeichnung und messen Sie die Zuordnungsabdeckung. Zu beachten ist, dass automatische Zuordnung nach einer Regel, die niemand überprüft, das Bild verzerren kann.

### Analytik

Berichten Sie Stückkosten mit Spannen und nennen Sie die Zuordnungsregeln. Die Entscheidung, die dies untermauert, ist, wo Qualität, Geschwindigkeit oder Ausgaben zu ändern sind. Zu beachten ist, dass Stückkosten davon abhängen, was als Einheit gewählt wird; sagen Sie also warum.

## Branchenperspektive

**Startup.** Kosten sind überwiegend Cloud, Werkzeuge und Gehälter. Verfolgen Sie die wichtigsten Cloud- und Werkzeugausgaben von Anfang an je Service, kennzeichnen Sie Ressourcen und berechnen Sie früh Kosten je aktivem Kunden. Widerstehen Sie aufwendiger Zuordnung, da das Team klein ist.

**Kleinunternehmen.** Eine Handvoll Anbieter und ein oder zwei Menschen machen den größten Teil der Kosten aus. Führen Sie ein einfaches Jahresbild, Kosten je Nutzer für die wichtigsten Werkzeuge und eine Sicht darauf, was bezahlt und ungenutzt ist. Bitten Sie Lieferanten um aufgeschlüsselte Rechnungen.

**Großunternehmen.** Größe bringt gemeinsame Plattformen und viele Geschäftsbereiche. Nutzen Sie ein dokumentiertes Zuordnungsmodell mit Treibern, einen Streitprozess und einen in die IT eingebetteten Finanzpartner. Hüten Sie sich vor Chargeback, das die Nutzung gemeinsamer Services entmutigt, die allen nützen.

**Behörden und öffentlicher Sektor.** Budgets sind jährlich und bewilligt, mit Regeln zu Investitions- und Betriebsausgaben, und Kostentransparenz kann verlangt sein. Stimmen Sie die Servicekostenrechnung mit den Regeln der öffentlichen Finanzen ab, dokumentieren Sie Zuordnungsmethoden für Prüfungen und erwägen Sie mehrjährige Finanzierung für dauerhafte Service-Teams, wo das Gesetz es erlaubt. Berichten Sie Stückkosten mit Ergebniskennzahlen (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind der Aufwand, das Zuordnungsmodell zu bauen, die Zeit von Finanzen und Serviceeignern, Regeln zu vereinbaren, und die Routinearbeit monatlicher Berichterstattung und Streitbearbeitung. Die meisten Organisationen haben das Hauptbuch und die Cloud-Abrechnungsdaten bereits. Ein kleines Modell in einer Tabelle kann die Arbeit beginnen, Werkzeuge kommen später.

Der Ertrag sind bessere Entscheidungen und weniger Streit. Teams, die ihre Kosten sehen, finden Verschwendung: ungenutzte Umgebungen, ungenutzte Lizenzen und doppelte Werkzeuge. Führungskräfte können Optionen mit Kenntnis der Kostentreiber vergleichen, Wachstum mit getrennten fixen und variablen Kosten planen und Verbesserung mit Belegen ihres Ertrags finanzieren. Bauen Sie den Business Case aus Ihren eigenen Zahlen: die im ersten Review gefundene Verschwendung, die in Budgetstreit verbrachte Zeit und die Prognoseabweichung davor und danach. Vermeiden Sie externe Aussagen über durchschnittliche IT-Ausgaben als Prozentsatz des Umsatzes, wenn Sie Quelle und Methode nicht zurückverfolgen können, denn Definitionen variieren stark. Das letzte Thema dieses Teils sammelt den finanziellen Fall an einem Ort (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Gemeinsame Kosten gleichmäßig verteilen.** Es bestraft kleine Nutzer und verbirgt die echten Treiber. Nutzen Sie Treiber, die Verbrauch widerspiegeln.
- **Kosten je Ticket als Ziel.** Es belohnt frühes Schließen von Tickets. Nutzen Sie Kosten je gelöster Anfrage mit einem Qualitätsbegleiter.
- **Genauigkeit ohne Vertrauen.** Ein schönes Modell, dem Eigner nicht glauben, ist wertlos. Bauen Sie Regeln mit ihnen.
- **Zuerst Chargeback.** Es beginnt Streit, bevor es Verständnis gibt. Beginnen Sie mit Showback.
- **Kürzen, was schwer zu sehen ist.** Wartung, Lernen und Zuverlässigkeitsarbeit werden zuerst gekürzt und kosten später mehr. Schützen Sie Verbesserungskapazität.
- **Teams nach Kosten vergleichen.** Services unterscheiden sich in Randbedingungen und Risiko. Vergleichen Sie jeden mit seiner eigenen Historie.
- **Regeln und Trend zugleich ändern.** Markieren Sie Regeländerungen in Diagrammen und stellen Sie, wo möglich, die Historie neu dar.
- **Kosten als Eigentum der Finanzen behandeln.** Die Menschen, die den Service betreiben, wissen, woher die Kosten kommen. Beziehen Sie sie ein.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Kostenbild | Budget nur nach Abteilung | Kosten je Service für einige Services, grobe Zuordnung | Dokumentierte Zuordnungsregeln mit Treibern; Abdeckung verfolgt | Stückkosten mit Qualitätsbegleitern; Trennung in fix und variabel | Kosten transparent mit Geschäftspartnern geteilt; Treiber gemeinsam beeinflusst |
| Kosten nutzen | Kostenkürzung nach Prozent | Showback für einige Eigner | Showback für alle Services; Streitprozess | Prognoseabweichung und Stückkostentrends treiben Entscheidungen | Kosten, Qualität und Wert offen über das Portfolio abgewogen |
| Finanzierungsmodell | Jährliche Projektbudgets | Einige stabile Teams | Dauerhafte Teams für Schlüsselservices | Finanzierung folgt Serviceergebnissen und Lernen | Finanzierung flexibel über Services mit gemeinsamer Plattforminvestition |

## Checkliste

- [ ] Die gesamten IT-Ausgaben sind Services oder erklärtem Overhead zugeordnet, die Abdeckung wird verfolgt.
- [ ] Zuordnungsregeln und Treiber sind aufgeschrieben und werden mit Serviceeignern überprüft.
- [ ] Fixe und variable Kosten sind für jeden wichtigen Service getrennt.
- [ ] Stückkosten nutzen vereinbarte, stabile Einheiten und stehen neben Qualitätskennzahlen.
- [ ] Prognosen werden zu Beginn des Zeitraums protokolliert und mit den tatsächlichen Werten verglichen.
- [ ] Showback steht jedem Serviceeigner zur Verfügung, mit einem Streitprozess.
- [ ] Ausgaben oder Kapazität für Betrieb, Change und Verbesserung werden berichtet.
- [ ] Ein Anteil der Kapazität ist für Verbesserung geschützt.
- [ ] Änderungen von Regeln und Einheiten sind in Trenddiagrammen markiert.
- [ ] Kein Team und keine Person wird nach Kosten geordnet.

## KI-Prompts

**Kostentreiber für gemeinsame Services vorschlagen.**

```text
Our shared services and their annual costs are: [list]. Our services that use
them are: [list], with usage data available for: [list of drivers like users,
requests, storage]. Propose a cost driver for each shared service, explain how
to check that the driver reflects what causes cost, and describe the
limitations. Do not invent costs. List your assumptions and what finance
should confirm.
```

**Stückkosten und ihren Qualitätsbegleiter entwerfen.**

```text
For the service [name] in [type of organization], suggest three possible units
for unit cost (for example per active user, per transaction, per resolved
request) and, for each, a quality measure to show beside it and a way the pair
could be gamed. Recommend one with reasons. Do not invent figures. List your
assumptions and questions for the service owner.
```

**Ein Showback-Review vorbereiten.**

```text
Draft an agenda and a one-page summary for a quarterly showback review with
the owner of [service]. Data: cost this quarter [figures], previous quarter
[figures], volume [figures], quality measures [figures], and disputes [list].
Include questions that help the owner find waste and challenge the allocation.
Use plain language. List your assumptions and mark any claim that needs
checking.
```

**Einen Wechsel zur Finanzierung dauerhafter Teams planen.**

```text
We currently fund work as projects: [describe]. We are considering funding
persistent teams for [services]. Outline the steps, the information finance
and leadership will want, risks, and measures to track whether the change
helps (for example forecast variance, team stability, improvement share, and
service health). Do not claim results from other organizations. List your
assumptions and decisions that need leadership input.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Kosten- oder Stückökonomiekennzahl zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Kostenkennzahl seine Zuordnungsregel, seinen Manipulationsvektor und seinen Qualitätsbegleiter nennt.

## Wichtigste Erkenntnisse

- Ordnen Sie Services Kosten mit Treibern zu, denen Menschen folgen können, und zeigen Sie die Regeln.
- Trennen Sie fixe von variablen Kosten und koppeln Sie jede Stückkostenzahl mit einer Qualitätskennzahl.
- Beginnen Sie mit Showback und einem Streitprozess und fügen Sie Chargeback nur hinzu, wenn es Entscheidungen verändert.
- Finanzieren Sie dauerhafte Teams um Services herum, wo Sie können, und schützen Sie Verbesserungskapazität.
- Berichten Sie Spannen und Trends und markieren Sie Regeländerungen in den Diagrammen.
- Ordnen Sie nie Menschen oder Teams nach Kosten.

## Quellen und weiterführende Literatur

1. Kaplan, R. S., and Anderson, S. R., "Time-Driven Activity-Based Costing," *Harvard Business Review*, 82(11), 2004.
2. Kaplan, R. S., and Cooper, R., *Cost & Effect: Using Integrated Cost Systems to Drive Profitability and Performance*, Harvard Business School Press, 1998.
3. Kersten, M., *Project to Product*, IT Revolution, 2018.
4. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Financial Management*, TSO, 2020.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Cost accounting](https://en.wikipedia.org/wiki/Cost_accounting).
8. Wikipedia, [Cost allocation](https://en.wikipedia.org/wiki/Cost_allocation).
9. Wikipedia, [Cost driver](https://en.wikipedia.org/wiki/Cost_driver).
10. Wikipedia, [Activity-based costing](https://en.wikipedia.org/wiki/Activity-based_costing).
11. Wikipedia, [Fixed cost](https://en.wikipedia.org/wiki/Fixed_cost).
12. Wikipedia, [Variable cost](https://en.wikipedia.org/wiki/Variable_cost).
13. Wikipedia, [Unit cost](https://en.wikipedia.org/wiki/Unit_cost).
14. Wikipedia, [Economies of scale](https://en.wikipedia.org/wiki/Economies_of_scale).
15. Wikipedia, [Capital expenditure](https://en.wikipedia.org/wiki/Capital_expenditure).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
