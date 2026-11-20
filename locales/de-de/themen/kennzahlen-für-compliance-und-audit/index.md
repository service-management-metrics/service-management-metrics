# Kennzahlen für Compliance und Audit

**Compliance ist am leichtesten und ehrlichsten, wenn die Arbeit selbst die Belege erzeugt. Messen Sie also, wie viele Belege automatisch kommen, wie schnell Befunde behoben werden und wie oft derselbe Befund wiederkehrt, und behandeln Sie Prüfer als Stakeholder, die früh ins Gespräch kommen.**

## Überblick und Motivation

Die meisten Organisationen, die IT-Services bauen und betreiben, stehen jemandem Rede und Antwort: Regulierern, Kunden, Zertifizierungsstellen, Versicherern, Vorständen. [Regulatorische Compliance](https://en.wikipedia.org/wiki/Regulatory_compliance) ist der Akt, Gesetze, Regeln und Standards zu erfüllen und nachzuweisen, dass man es tut. Ein Audit ist eine systematische Untersuchung von Belegen, um zu beurteilen, ob das stimmt. In der IT umfasst das die Prüfungen von Kontrollen der Finanzberichterstattung, von Datenschutzpflichten, Sicherheitszertifizierungen und vertraglichen Zusagen. Die [IT-Revision](https://en.wikipedia.org/wiki/Information_technology_audit) untersucht die Kontrollen rund um Systeme und die Daten, die sie halten.

Compliance und kontinuierliche Auslieferung haben den Ruf von Reibung. Compliance verlangt vor Änderungen Dokumente, Unterschriften und Genehmigungen, und kontinuierliche Auslieferung bevorzugt kleine, kontinuierlich veröffentlichte Changes. Die Reibung ist echt, wenn Compliance als Phase am Ende behandelt wird. Sie lässt nach, wenn Compliance in den Arbeitsfluss eingebaut ist. Change-Datensätze, Code-Reviews, automatisierte Tests und Zugriffsprotokolle sind Belege, und eine Liefer-Pipeline erzeugt sie jeden Tag. [Kontinuierliches Prüfen (Continuous Auditing)](https://en.wikipedia.org/wiki/Continuous_auditing) nutzt automatisierte, nahezu in Echtzeit laufende Kontrollprüfungen statt periodischer Stichproben und passt zum Rhythmus kontinuierlicher Auslieferung. Ein [Audit-Trail](https://en.wikipedia.org/wiki/Audit_trail) ist ein Datensatz, der zeigt, wer wann was an welchem System tat, und er ist oft der stärkste Beleg, den Sie haben.

ITIL beschreibt die relevanten Praktiken: Informationssicherheitsmanagement, Risikomanagement und die Governance des Service-Wertschöpfungssystems, und verweist auf Standards wie [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) für Informationssicherheits-Managementsysteme. Rahmenwerke, denen Organisationen häufig begegnen, umfassen Berichtsregime für Finanzkontrollen wie den [Sarbanes–Oxley Act](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act) in den Vereinigten Staaten, Datenschutzgesetze wie die [Datenschutz-Grundverordnung](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) in der Europäischen Union und Assurance-Berichte wie [SOC 2](https://en.wikipedia.org/wiki/SOC_2), die Kontrollen zu Sicherheit und verwandten Kriterien untersuchen. Die Einzelheiten unterscheiden sich nach Rechtsordnung, Sektor und Datum, und dieses Thema beschreibt Messpraxis, keine rechtlichen Anforderungen. Arbeiten Sie mit Ihren Kollegen in Compliance, Recht und Revision zusammen, was für Sie gilt.

Ziel von Compliance-Kennzahlen ist zu erfahren, wie gut die Organisation ihre Pflichten erfüllt und wie viel Aufwand das kostet, damit sich beides verbessern kann. Das Risiko ist, dass Compliance zu einer Aufführung für den Prüfer wird. Ein Team kann ein Audit bestehen, indem es im letzten Moment Dokumente erzeugt, und dennoch riskante Praktiken betreiben. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt: Sind „Prüfbefunde“ ein Ziel, vermeiden Menschen Prüfung, verengen den Umfang und verhandeln die Formulierung (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Zwei Gedankengänge helfen.

- **Compliance als Nebenprodukt.** Zeichnet die Pipeline Review, Test, Genehmigung und Deployment automatisch auf, existieren Belege, ob ein Audit naht oder nicht. Das beseitigt auch die Versuchung, Belege hinterher zu rekonstruieren.
- **Prüfer als Stakeholder.** Die agile Praxis schätzt kontinuierliche Zusammenarbeit mit Stakeholdern. Prüfer und Assessoren sind Stakeholder mit berechtigten Fragen. Sie in den Entwurf von Kontrollen und Belegen einzubeziehen verringert Überraschung und Nacharbeit und wahrt ihre Unabhängigkeit.

## Leitprinzipien

- **Belege als Nebenprodukt der Arbeit erzeugen.** Pipelines, Tickets und Logs sollten die meisten Prüffragen beantworten.
- **Pflichten auf Kontrollen und Eigner abbilden.** Jede Pflicht hat eine Kontrolle, und jede Kontrolle hat einen Eigner.
- **Früh mit Prüfern zusammenarbeiten.** Teilen Sie Entwürfe und Beleg-Ansätze vor dem Audit und wahren Sie ihre Unabhängigkeit.
- **Ursachen beheben, nicht Befunde.** Ein Befund, der geschlossen wird, ohne die Ursache zu beseitigen, kommt wieder.
- **Aufwand ebenso messen wie Ergebnis.** Die Kosten von Compliance gehören zum Bild.
- **Funktionstrennung halten, wo sie zählt.** Unabhängigkeit des Reviews ist eine Kontrolle, die Automatisierung stützen, aber nicht ersetzen kann.
- **Ehrlich zu Lücken sein.** Selbst berichtete Schwächen sind besser von Ihnen gefunden als von anderen.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pflichtenabdeckung | Anteil der geltenden Pflichten, die einer Kontrolle mit Eigner und Belegquelle zugeordnet sind | Pflichten, die mindestens einer Kontrolle mit Eigner und Belegquelle zugeordnet sind / geltende Pflichten | Prozent | Pflichtenregister und Kontrollregister | Governance; Informationssicherheitsmanagement; Risikomanagement | Definition of Done enthält Kontrollbeleg | Vierteljährlich |
| Automatisierungsrate der Belege | Anteil der Kontrollbelege im Umfang, die automatisch aus führenden Systemen erfasst werden | automatisch erfasste Kontrollbelege / erforderliche Belege | Prozent | Kontrollregister, Pipeline- und Systemlogs | Informationssicherheitsmanagement; Change-Befähigung | Pipeline zeichnet Review, Test und Deployment automatisch auf | Vierteljährlich |
| Durchlaufzeit für Belege | Zeit, einen von einem Prüfer oder Assessor angefragten Beleg zu liefern | Median und 85. Perzentil der Tage von der Anfrage bis zum akzeptierten Beleg | Tage | Verfolgung von Prüfanfragen | Governance; Informationssicherheitsmanagement | Reaktionsfähigkeit auf eine Frage eines Stakeholders | Je Audit |
| Schließzeit von Befunden | Zeit, Prüfbefunde nach Schweregrad zu schließen | Median und 85. Perzentil der Tage von der Ausstellung des Befunds bis zum verifizierten Schließen | Tage | Befundverfolgung | Kontinuierliche Verbesserung; Risikomanagement | Zeit, einen Defekt zu beheben | Monatlich |
| Wiederholungsrate von Befunden | Anteil der Befunde, die aus einem früheren Audit oder Review wiederkehren | Befunde, die inhaltlich einem früheren geschlossenen Befund entsprechen / Befunde im Zeitraum | Prozent | Befundverfolgung mit Ursachenverknüpfungen | Kontinuierliche Verbesserung; Problemmanagement | Wiederkehrender Defekt nach einer Korrektur | Je Audit-Zyklus |
| Konflikte bei der Funktionstrennung | Zahl der Zugriffs- oder Genehmigungskombinationen, die Trennungsregeln verletzen, und Zeit bis zur Lösung | erkannte Konflikte; mediane Tage bis zur Lösung | Anzahl; Tage | Werkzeuge für Identitäts- und Zugriffsmanagement, Change-Datensätze | Informationssicherheitsmanagement; Change-Befähigung | Unabhängiges Review von Changes | Monatlich |
| Prüfaufwand | Personenstunden, die die Organisation für Vorbereitung und Unterstützung eines Audit-Zyklus aufwendet, je Umfangseinheit | auf Prüfvorbereitung und -unterstützung gebuchte Stunden / Kontrollen oder Systeme im Umfang | Stunden je Einheit | Zeitaufzeichnungen oder Aufwandsschätzungen | Governance; kontinuierliche Verbesserung | Kosten von Nicht-Lieferarbeit | Je Audit-Zyklus |

Nennen Sie die Pflichten im Umfang und den Prüfumfang im Register. Die Schließzeit startet, wenn der Befund ausgestellt wird, und stoppt, wenn der Prüfer oder ein unabhängiger Verifizierer das Schließen bestätigt, nicht wenn das Team sagt, es sei fertig. Wiederholte Befunde werden nach Ursache zugeordnet, nicht nach Formulierung, und die Zuordnungsregel wird festgehalten. Der Prüfaufwand ist eine Trendkennzahl der Organisation und nie eine Messgröße von Einzelpersonen.

## Empfehlungen

### Die eigenen Pflichten und Kontrollen kennen

**1. Listen Sie die geltenden Pflichten in einfacher Sprache auf.** Listen Sie mit Kollegen aus Recht und Compliance die Gesetze, Standards, Verträge und Richtlinien auf, die den Service binden, und was jede in Begriffen von Ergebnissen verlangt. Halten Sie die Liste kurz und lesbar. Pflichten, die niemand einfach benennen kann, sind die, die Überraschungen im Audit verursachen.

**2. Ordnen Sie jede Pflicht Kontrollen, Eignern und Belegen zu.** Benennen Sie für jede Pflicht die Kontrolle, die sie erfüllt, die verantwortliche Person und den Beleg, der zeigt, dass die Kontrolle funktioniert. Wo eine Kontrolle mehrere Pflichten erfüllt, sagen Sie es, denn das verringert doppelten Aufwand. Die Pflichtenabdeckung misst die Vollständigkeit dieser Zuordnung. Nicht zugeordnete Pflichten sind Lücken, die zu schließen oder wissentlich zu akzeptieren sind.

**3. Bevorzugen Sie weniger, stärkere Kontrollen.** Eine automatisierte und getestete Kontrolle ist mehrere manuelle wert. Suchen Sie sich überschneidende Kontrollen und stellen Sie die ein, die keiner Pflicht dienen. Jede Kontrolle kostet Aufwand im Betrieb und im Belegen (siehe Thema 8.2, Kennzahlen für Risiken und Kontrollen).

### Belege zum Nebenprodukt machen

**4. Lassen Sie die Pipeline die Belege erzeugen.** Verknüpfen Sie jeden Produktions-Change mit einer Anfrage, einem Code-Review, Testergebnissen und, wo verlangt, einer Genehmigung, alles automatisch erfasst. Ein Deployment-Datensatz, der diese zeigt, sagt dem Prüfer, was geschah, ohne dass ein Dokument geschrieben wird. Das stützt sich auf die Praktiken kontinuierlicher Auslieferung, die agile Teams bereits nutzen (siehe Thema 4.5, Kennzahlen für Releases und Deployments).

**5. Nutzen Sie Richtlinienprüfungen in der Pipeline.** Kodieren Sie Regeln wie „kein Deployment ohne Review durch jemand anderen als den Autor“ oder „kein Produktionszugriff ohne Ticket“ als automatisierte Prüfungen. Die Prüfung ist Kontrolle und Beleg zugleich. Halten Sie die Regeln sichtbar und versioniert, damit auch Änderungen an ihnen erfasst werden. Das stützt die [Funktionstrennung](https://en.wikipedia.org/wiki/Segregation_of_duties), das Prinzip, dass keine einzelne Person alle Phasen eines sensiblen Prozesses kontrollieren sollte.

**6. Bewahren Sie Audit-Trails richtig auf.** Halten Sie Logs von Zugriff und Change so, dass sie von den Menschen, die sie beschreiben, nicht verändert werden können, bewahren Sie sie für die verlangte Zeit auf und machen Sie sie durchsuchbar. Ein Trail, den die Aufgezeichneten bearbeiten können, ist ein schwacher Beleg. Prüfen Sie Aufbewahrungsregeln mit den Kollegen aus dem Recht.

**7. Messen Sie, wie viel Beleg automatisch ist.** Die Automatisierungsrate der Belege zeigt, wo manuelle Erfassung bleibt. Ordnen Sie die manuellen Elemente nach Aufwand und Risiko und automatisieren Sie die schlimmsten zuerst. Steigt die Rate, sinken Prüfaufwand und Durchlaufzeit.

### Mit Prüfern arbeiten

**8. Laden Sie Prüfer in den Entwurf ein.** Teilen Sie geplante Änderungen an Kontrollen und Belegen früh mit der Internen Revision und externen Assessoren und fragen Sie, was sie zufriedenstellen würde. Unabhängigkeit heißt, dass sie Ihre Kontrollen nicht entwerfen, nicht dass sie Ihnen nicht sagen können, welche Belege sie brauchen. Frühe Gespräche verringern Nacharbeit. Das Institute of Internal Auditors veröffentlicht Standards für den Berufsstand, die die Rolle der [Internen Revision](https://en.wikipedia.org/wiki/Internal_audit) erklären.

**9. Bereiten Sie einen Belegindex vor.** Führen Sie einen lebenden Index, wo jede Art von Beleg liegt und wie man ihn abruft. Verfolgen Sie die Durchlaufzeit für Belegsanfragen und nutzen Sie Verzögerungen, um fehlende Automatisierung zu finden. Ein kurzer, stetiger Prozess schlägt ein Gerangel vor jedem Audit.

**10. Vereinbaren Sie die Bedeutung von Wesentlichkeit und Umfang.** Fragen Sie Prüfer, wie sie beurteilen, was zählt und was im Umfang liegt, und halten Sie die Antwort fest. Ein gemeinsames Verständnis verhindert späteren Streit. Verengen Sie den Umfang nicht, um Prüfung zu vermeiden, und weiten Sie ihn nicht ohne Grund.

### Ursachen beheben und lernen

**11. Behandeln Sie jeden Befund als Problemdatensatz.** Finden Sie die Ursache, beheben Sie sie und lassen Sie das Schließen von jemand Unabhängigem verifizieren. Verknüpfen Sie wiederholte Befunde mit den früheren und untersuchen Sie, warum die erste Korrektur nicht hielt. Eine hohe Wiederholungsrate deutet auf Korrekturen, die Symptome behandelten, was an das Problemmanagement anknüpft (siehe Thema 4.1, Kennzahlen für das Problemmanagement).

**12. Verfolgen Sie die Kosten und senken Sie sie.** Erfassen Sie den Prüfaufwand über Zyklen. Ist der Aufwand hoch und flach, suchen Sie nach Doppelungen über Audits, manueller Belegerfassung und Kontrollen, die niemandem dienen. Berichten Sie den Aufwandstrend mit den Ergebnissen. Compliance ist ihre Kosten wert, wenn sie echtes Risiko verringert, und die Kennzahlen helfen, das zu unterscheiden.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Pflichtenabdeckung | Pflichten schwachen oder irrelevanten Kontrollen zuordnen; Pflichten eng definieren | Review der Kontrollrelevanz durch eine zweite Partei; die Kontrollen testen (siehe Thema 8.2, Kennzahlen für Risiken und Kontrollen) |
| Automatisierungsrate der Belege | Screenshots oder Exporte als automatisch zählen; zuerst geringwertige Belege automatisieren | Automatisch als systemerzeugt und manipulationsresistent definieren; nach Risiko ordnen |
| Durchlaufzeit für Belege | Schnell Teilbelege liefern; die Formulierung der Anfrage verhandeln | Nur akzeptierte Belege zählen; Folgeanfragen verfolgen |
| Schließzeit von Befunden | Befunde ohne Verifizierung schließen; den Schweregrad umklassifizieren | Unabhängige Verifizierung; Änderungsprotokoll des Schweregrads |
| Wiederholungsrate von Befunden | Befunde so umformulieren, dass sie nicht zuordnen; den früheren Befund als anderen Typ schließen | Nach Ursache mit erfasster Regel zuordnen; Review durch die Interne Revision |
| Konflikte bei der Funktionstrennung | Konflikte in Systeme außerhalb des Umfangs verlagern; temporären Zugriff gewähren, der nie erfasst wird | Alle Systeme mit sensiblen Prozessen abdecken; temporären Zugriff überprüfen |
| Prüfaufwand | Stunden nicht buchen; Aufwand in andere Budgets verlagern | Zeitaufzeichnungen stichprobenartig prüfen; mit Teamumfragen vergleichen |

Ein gesunder Befund ist eine steigende Automatisierung der Belege, kürzere und stetigere Durchlaufzeit, mit Verifizierung geschlossene Befunde, eine niedrige Wiederholungsrate und ein Prüfaufwand, der sinkt, während der Prozess reift.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Periodische manuelle Belege | Prüfern vertraut | Teuer; hinterher rekonstruiert |
| Automatisierte kontinuierliche Belege | Billig zu pflegen; zeitnah | Braucht Engineering; Prüfer müssen der Quelle trauen |
| Schwere Genehmigungen | Sichtbare Kontrolle | Langsam; bündelt Change |
| Automatisierte Richtlinienprüfungen | Konsistent und schnell | Regeln müssen stimmen und sichtbar sein |
| Frühe Einbindung der Prüfer | Weniger Überraschungen | Braucht Sorgfalt, die Unabhängigkeit zu wahren |
| Audit am Ende | Klare Trennung | Späte Befunde; Nacharbeit |
| Eine Kontrolle für viele Pflichten | Effizient | Ein einzelner Fehlschlag betrifft mehrere Pflichten |
| Viele spezifische Kontrollen | Klare Zuordnung | Doppelter Aufwand |

Die Antwort in Worten ist, Belege aus Pipeline und führenden Systemen zu automatisieren, Prüfer früh beim Entwurf einzubinden und dabei ihre Unabhängigkeit zu wahren und einen schlanken Satz starker Kontrollen zu halten, den Pflichten zugeordnet.

## Fragen für die Diskussion im Team

**1. Welche Prüffrage braucht bei uns am längsten zur Beantwortung, und warum?**
Wählen Sie die langsamste Belegsanfrage des letzten Audits und verfolgen Sie sie. Fehlt der Beleg, ist er verstreut oder steckt er in jemandes Kopf? Besprechen Sie, was ihn automatisch machen würde. Die Moderation sollte die Kosten in Stunden festhalten.

**2. Können wir für jeden Produktions-Change des letzten Monats zeigen, wer ihn überprüfte und welche Tests liefen?**
Wählen Sie einen Change zufällig und versuchen Sie es. Notieren Sie, wo die Kette reißt. Einigen Sie sich auf eine Verbesserung des Change-Datensatzes oder der Pipeline, die die Lücke schließt.

**3. Was haben wir beim letzten Audit versprochen, und hat es gehalten?**
Überprüfen Sie die Befunde und die Korrekturen. Fragen Sie bei jedem, ob die Ursache beseitigt wurde und wer das Schließen verifizierte. Suchen Sie nach Wiederholungen. Einigen Sie sich auf einen Befund, der tiefer zu untersuchen ist.

**4. Was würden Prüfer uns sagen, wenn wir sie fragten, wie sich Belege leichter machen lassen?**
Planen Sie ein Gespräch mit der Internen Revision oder einem Assessor über den Entwurf von Belegen. Fragen Sie, was sie vertrauenswürdig finden und was nicht. Die Moderation sollte ihre Antworten als Information behandeln und die Regeln der Unabhängigkeit im Blick behalten.

**5. Welche Kontrollen betreiben wir, die keine Pflicht braucht?**
Listen Sie Kontrollen und die Pflichten auf, denen sie dienen. Finden Sie die ohne klaren Zweck. Besprechen Sie, sie einzustellen, und den Beleg, dass sie unnötig sind.

**6. Wo könnte hier eine Person etwas Sensibles von Anfang bis Ende allein tun?**
Denken Sie an Deployment, Zugriffsvergabe und Zahlungen. Prüfen Sie, ob Werkzeuge die Trennung durchsetzen oder nur die Richtlinie. Besprechen Sie kompensierende Kontrollen, etwa automatisiertes Review, wo die Personalzahl klein ist.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams erzeugen einen großen Teil der Belege, indem sie ihre Arbeit gut machen. Sie sollten Change-, Review- und Testdatensätze verknüpft halten, Richtlinienprüfungen der Pipeline nutzen und Bedenken zu Kontrollen äußern, die Arbeit bremsen, ohne Risiko zu verringern. Sie profitieren von frühen Gesprächen mit Prüfern darüber, welcher Beleg genügt.

### Service- und Betriebsteams

Betriebsteams betreiben Zugriffsmanagement, Logging, Backups und Incident-Bearbeitung, die für viele Audits zentral sind. Sie sollten Logs manipulationsresistent und aufbewahrt halten, Zugriffsreviews planmäßig durchführen und den Belegindex pflegen. Sie tragen die Last manueller Belege und können zeigen, wo Automatisierung am meisten helfen würde.

### Führung und Governance

Führungskräfte sind für Compliance und oft für Prüfungsergebnisse verantwortlich. Sie sollten die Automatisierung von Belegen finanzieren, nach Abdeckung und Wiederholungsraten statt nur nach der Zahl der Befunde fragen und die Unabhängigkeit der Prüfer unterstützen. Die Governance sollte ehrliche Berichte über Lücken und für jede einen Plan erwarten.

### Kunden und Nutzer

Kunden und Nutzer verlassen sich auf Compliance als Gewissheit darüber, wie mit ihren Daten und Services umgegangen wird. Sie profitieren, wenn Assurance-Berichte klar sind, wenn Incidents wie verlangt gemeldet werden und wenn Kontrollen legitime Nutzung nicht schwerer machen als nötig. Transparente Kommunikation über Compliance schafft Vertrauen.

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßes Zahlungsunternehmen betreibt eine Kartenabwicklungsplattform und wird jährlich gegen ein Sicherheits-Assurance-Rahmenwerk und ein Datenschutzregime geprüft. Die Zahlen unten sind illustrativ.

Die Prüfvorbereitung nimmt die Engineering-Teams jedes Jahr etwa sechs Wochen in Anspruch. Das Assessment des letzten Jahres schloss mit 14 Befunden, von denen 5 aus dem Vorjahr wiederholt waren. Die Leiterin der Compliance kartiert die Lage. Die Pflichtenabdeckung beträgt 83 Prozent, wobei 17 Prozent der Pflichten keinen benannten Kontrolleigner haben. Die Automatisierung der Belege liegt bei 22 Prozent, und die meisten Belege für Change-Genehmigung stammen aus von Hand zusammengestellten Screenshots von Tickets. Die mediane Durchlaufzeit für Belege beträgt 9 Tage, mit einem 85. Perzentil von 21 Tagen. Die mediane Schließzeit von Befunden beträgt 74 Tage, und das Schließen wurde oft vom zuständigen Team ohne Verifizierung markiert.

Die Leiterin der Compliance arbeitet mit den Liefer- und Betriebsteams und dem internen Prüfer. Sie ändern vier Dinge. Jeder Produktions-Change in der Pipeline verknüpft sich nun mit der Anfrage, dem Code-Review durch jemand anderen als den Autor, den Testergebnissen und dem Deployment, automatisch im Change-Datensatz erfasst. Eine Richtlinienprüfung blockiert ein Deployment ohne unabhängiges Review und protokolliert den Ausnahmeweg für Notfälle. Zugriffsreviews laufen vierteljährlich aus dem Identitätssystem, das Konflikte bei der Funktionstrennung direkt zeigt. Jeder Befund wird zu einem Problemdatensatz, mit einem unabhängigen Verifizierer aus der Internen Revision, und wiederholte Befunde werden mit ihren Vorgängern verknüpft.

Beim nächsten Assessment beträgt die Automatisierungsrate der Belege 71 Prozent, die mediane Durchlaufzeit für Belege 2 Tage, das 85. Perzentil 5 Tage, und die Prüfvorbereitung dauert etwa zwei Wochen. Die Pflichtenabdeckung liegt bei 97 Prozent, und die übrigen Elemente haben dokumentierte Akzeptanz. Die Befunde fallen auf 6, mit einer Wiederholung, und die mediane Schließzeit beträgt 31 Tage mit unabhängiger Verifizierung. Der Vorstandsvorsitzende bittet um null Befunde im nächsten Jahr. Die Leiterin der Compliance schlägt vor, Wiederholungsbefunde, Schließzeit und Automatisierung der Belege zu verfolgen, und erklärt, dass ein Ziel von null Befunden Teams dazu treibt, Probleme zu verbergen oder den Umfang zu verengen, und ein Assessor, der nichts findet, womöglich nicht genau genug hingeschaut hat. Die Entscheidung wird festgehalten, und der Vorstand stimmt zu, die Kennzahlen in der nächsten Sitzung zu überprüfen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Erzeugen Sie Belege als Nebenprodukt der Arbeit und laden Sie Prüfer früh ins Gespräch ein. Zu beachten ist, dass ein Ziel für Prüfbefunde ehrliches Selbstberichten entmutigen kann.

### KI

KI-bezogene Pflichten ändern sich, prüfen Sie also das für Sie geltende Recht mit Ihrem Rechtsberater und führen Sie als Beleg ein Inventar der KI-Systeme. Bitten Sie ein KI-Werkzeug nicht, Compliance-Aussagen zu treffen. Zu beachten ist, dass von KI erzeugte Belegzusammenfassungen von einem Menschen gegen die Quelle verifiziert werden müssen.

### Automatisierung

Automatisieren Sie die Belegerfassung aus Pipelines und Werkzeugen und messen Sie Automatisierungsrate der Belege und Durchlaufzeit. Zu beachten ist, dass Automatisierung Belege erzeugen kann, die vollständig, aber falsch sind; ziehen Sie also Stichproben.

### Analytik

Berichten Sie wiederholte Befunde und Schließzeit mit Anzahlen. Die Entscheidung, die dies untermauert, ist, wo Kontrollen wiederholt versagen. Zu beachten ist, dass Prüfaufwand Kosten sind, kein Ziel, und seine Senkung die Abdeckung nicht senken sollte.

## Branchenperspektive

**Startup.** Pflichten können plötzlich mit einem großen Kunden oder einer Finanzierungsrunde eintreffen. Bauen Sie früh Gewohnheiten auf: Peer-Review, Change-Datensätze und Zugriffskontrolle in der Pipeline, damit Belege existieren, wenn danach gefragt wird. Wählen Sie ein Rahmenwerk, wenn das Geschäft es braucht, und ordnen Sie es dem zu, was Sie schon tun.

**Kleinunternehmen.** Compliance-Pflichten sind oft durch Verträge und Gesetz festgelegt, und die Ressourcen sind begrenzt. Führen Sie eine kurze Liste von Pflichten, verlassen Sie sich auf verwaltete Services mit eigenen Assurance-Berichten und führen Sie einen einfachen Belegordner. Hüten Sie sich vor dem Kauf von Compliance-Werkzeugen, die mehr kosten als das Risiko, das sie adressieren.

**Großunternehmen.** Viele Pflichten überschneiden sich, sodass ein einheitliches Kontrollrahmenwerk, das eine Kontrolle vielen Pflichten zuordnet, großen Aufwand spart. Nutzen Sie gemeinsame Belegquellen, eine gemeinsame Befundverfolgung und einen Kalender der Audits, um wiederholte Anfragen zu vermeiden. Stimmen Sie Interne Revision, Compliance und Sicherheit ab, damit Teams nicht dreimal für dasselbe geprüft werden.

**Behörden und öffentlicher Sektor.** Compliance-Pflichten sind umfangreich und öffentlich, einschließlich Beschaffungs-, Aufzeichnungs-, Barrierefreiheits- und Datenschutzregeln, mit Prüfungen durch nationale Stellen. Dokumentieren Sie Entscheidungen und Belege für die verlangte Zeit, machen Sie Berichte über Behörden hinweg wo möglich konsistent und halten Sie eine klare Linie zwischen unabhängiger Prüfung und Management. Pflichten können sich mit Wahlen und Gesetzgebung ändern (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten umfassen Werkzeuge für das Kontrollregister, Pipeline-Integration für Belege, Identitäts- und Logging-Systeme und die Zeit von Compliance-Personal und Teams. Der anfängliche Aufwand, Belege zu automatisieren, ist erheblich und ersetzt wiederkehrende manuelle Arbeit.

Der Ertrag ist geringerer wiederkehrender Prüfaufwand, schnellere Antworten auf Anfragen, weniger wiederholte Befunde und eine ehrlichere Sicht auf die Gesundheit der Kontrollen. Er umfasst auch die vermiedenen Kosten von Überraschungen spät in einem Zertifizierungszyklus. Bauen Sie den Business Case aus Ihren eigenen Zahlen: Prüfvorbereitungsstunden davor und danach, Durchlaufzeit für Belege, Zahl und Alter der Befunde und die Kosten jeder prüfungsbedingten Verzögerung in einem Geschäftsabschluss. Vermeiden Sie, Studien zu den Kosten von Compliance zu zitieren, wenn Sie Methode und Relevanz nicht zurückverfolgen können. Zählen Sie die Kosten des Programms und das Risiko der Überautomatisierung schwacher Kontrollen. Die weitere finanzielle Behandlung steht im letzten Thema des vorigen Teils (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Sich im letzten Monat auf das Audit vorbereiten.** Es erzeugt rekonstruierte Belege und ein Gerangel. Erfassen Sie Belege, während die Arbeit geschieht.
- **Screenshots als Beleg.** Sie sind manuell, leicht zu verändern und teuer. Nutzen Sie systemerzeugte Datensätze.
- **Null Befunde anstreben.** Es belohnt engen Umfang und verborgene Probleme. Verfolgen Sie Schließen, Wiederholungen und Abdeckung.
- **Befunde per Behauptung schließen.** Derselbe Befund kehrt zurück. Verifizieren Sie das Schließen unabhängig.
- **Prüfer als Gegner behandeln.** Es erhöht die Kosten auf beiden Seiten. Arbeiten Sie am Entwurf von Belegen zusammen und wahren Sie die Unabhängigkeit.
- **Kontrollen, die keiner Pflicht dienen.** Sie kosten Aufwand und erzeugen Zynismus. Stellen Sie sie ein.
- **Eine schlechte Kontrolle automatisieren.** Es erzeugt Belege einer schwachen Kontrolle im großen Maßstab. Testen Sie zuerst die Kontrolle.
- **Manuelle Funktionstrennung.** Sie verlässt sich auf das Gedächtnis. Setzen Sie sie in Werkzeugen durch und überprüfen Sie Ausnahmen.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Pflichten und Kontrollen | Von wenigen Menschen gekannt | Liste von Pflichten und Kontrollen | Kontrollen, Eignern und Belegquellen zugeordnet | Abdeckung verfolgt; Überlappung verringert; Kontrollen getestet | Einheitliches Kontrollrahmenwerk über Teams, Lieferanten und Regime |
| Belege | Vor Audits zusammengestellt | Standardvorlagen und ein Belegordner | Pipelines und führende Systeme erzeugen viel Beleg | Automatisierungsrate, Durchlaufzeit und Aufwand gesteuert | Kontinuierliche Assurance, Prüfer nutzen Belege direkt |
| Befunde und Lernen | Befunde bestritten und per Behauptung geschlossen | Befunde verfolgt | Befunde als Problemdatensätze mit unabhängiger Verifizierung behandelt | Wiederholungen und Schließzeit analysiert und in den Kontrollentwurf gespeist | Befunde in der Organisation und mit Partnern geteilt; Verbesserung ist Routine |

## Checkliste

- [ ] Geltende Pflichten sind in einfacher Sprache aufgelistet, mit Eignern.
- [ ] Jede Pflicht ist Kontrollen und einer Belegquelle zugeordnet.
- [ ] Produktions-Changes tragen automatisch verknüpften Beleg zu Anfrage, Review, Test und Deployment.
- [ ] Richtlinienprüfungen setzen Review und Funktionstrennung in der Pipeline durch.
- [ ] Audit-Trails sind manipulationsresistent und für die verlangte Zeit aufbewahrt.
- [ ] Ein Belegindex existiert, und die Durchlaufzeit für Anfragen wird gemessen.
- [ ] Prüfer werden zum Entwurf von Belegen konsultiert, während die Unabhängigkeit gewahrt bleibt.
- [ ] Befunde werden als Problemdatensätze protokolliert und mit unabhängiger Verifizierung geschlossen.
- [ ] Wiederholte Befunde sind mit ihren Vorgängern verknüpft und auf Ursache untersucht.
- [ ] Der Prüfaufwand wird als Trend verfolgt und auf Doppelungen überprüft.

## KI-Prompts

**Pflichten Kontrollen zuordnen.**

```text
Here is a list of obligations that apply to our service in [sector and
jurisdiction]: [paste in plain language]. Here is our list of controls:
[paste]. Build a table mapping each obligation to controls, the evidence that
shows each control operates, and an owner role. Flag obligations with no
control, controls with no obligation, and weak evidence. Do not give legal
conclusions. List your assumptions and questions for legal and compliance.
```

**Belegautomatisierung planen.**

```text
Our manual audit evidence includes: [list items with hours spent]. Our systems
of record are: [list tools]. Rank the evidence items by effort and risk and
propose how each could be collected automatically from a system of record,
what makes the evidence trustworthy (tamper resistance, completeness), and
what to confirm with auditors. Do not assume features of specific tools. List
your assumptions.
```

**Wiederholte Befunde analysieren.**

```text
Here are findings from the last [number] audit cycles, with causes and fixes:
[paste, sanitized]. Group findings by underlying cause, identify repeats, and
suggest why earlier fixes did not hold. Propose a rule for matching findings
by cause and a verification step for closure. Do not speculate beyond the
information given. List your assumptions.
```

**Ein frühes Gespräch mit Prüfern vorbereiten.**

```text
Draft an agenda for a meeting with internal audit about changing how we
produce evidence for [control or process]. Include what we plan to change, the
questions we need answered (acceptable evidence, sampling, materiality), what
we will not ask them to do to preserve independence, and how we will record
the outcome. Use plain language. List your assumptions and risks.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Compliance- oder Audit-Kennzahl zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Compliance-Kennzahl seinen Manipulationsvektor, seine Leitplanke und seine Unabhängigkeitsregel trägt.

## Wichtigste Erkenntnisse

- Erzeugen Sie Belege als Nebenprodukt der Lieferung, aus Pipelines und führenden Systemen, und messen Sie, wie viel davon automatisch ist.
- Ordnen Sie jede Pflicht einer Kontrolle, einem Eigner und einer Belegquelle zu.
- Laden Sie Prüfer früh in den Entwurf von Belegen ein und schützen Sie ihre Unabhängigkeit.
- Schließen Sie Befunde, indem Sie Ursachen beseitigen, verifizieren Sie das Schließen unabhängig und beobachten Sie die Wiederholungsrate.
- Vermeiden Sie Ziele wie null Befunde und verfolgen Sie Aufwand neben Ergebnissen.
- Setzen Sie Funktionstrennung in Werkzeugen durch und halten Sie Audit-Trails manipulationsresistent.

## Quellen und weiterführende Literatur

1. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
2. Institute of Internal Auditors, *Global Internal Audit Standards*, 2024.
3. American Institute of Certified Public Accountants, *Trust Services Criteria* (used in SOC 2 examinations), latest version.
4. Kim, G., Humble, J., Debois, P., and Willis, J., *The DevOps Handbook*, IT Revolution, 2016.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Regulatory compliance](https://en.wikipedia.org/wiki/Regulatory_compliance).
8. Wikipedia, [Information technology audit](https://en.wikipedia.org/wiki/Information_technology_audit).
9. Wikipedia, [Continuous auditing](https://en.wikipedia.org/wiki/Continuous_auditing).
10. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
11. Wikipedia, [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001).
12. Wikipedia, [Sarbanes–Oxley Act](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act).
13. Wikipedia, [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).
14. Wikipedia, [SOC 2](https://en.wikipedia.org/wiki/SOC_2).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
16. Wikipedia, [Segregation of duties](https://en.wikipedia.org/wiki/Segregation_of_duties).
17. Wikipedia, [Internal audit](https://en.wikipedia.org/wiki/Internal_audit).
