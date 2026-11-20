# Deutsche Terminologie-Richtlinie (Kennzahlen für das Service-Management)

Die Übersetzer haben sich auf die folgenden Entscheidungen geeinigt. Eigennamen (ITIL, Scrum, Kanban, DevOps, DORA, SRE, AIOps, FinOps, Werkzeug- und Produktnamen) behalten die Schreibweise des Originals. Eingebürgerte Abkürzungen (SLA, SLO, SLI, XLA, OLA, CMDB, SBOM, TCO, ROI, KRI) bleiben ebenfalls. Gebräuchliche englische Fachbegriffe der Praxis (Incident, Change, Release, Pipeline, Backlog, Service Desk, Runbook, Toil, Page) bleiben englisch. Englische Wikipedia-Links, Titel von Quellen, KI-Prompt-Code und Dateinamen von Skills bleiben englisch. Der Linktext zu Wikipedia wird ins Deutsche übersetzt, Adressen und Quelleneinträge bleiben englisch. In deutschem Text gelten Dezimalkomma und Punkt als Tausendertrenner (zum Beispiel 99,9 Prozent und 12.000). Das Datumsformat in Beispielen ist JJJJ-MM-TT, und Einheiten sind metrisch. Das Format für Querverweise lautet „(siehe Thema N.N, Titel)“. Aussagen zu ITIL 5 übernehmen nur, was der Eigner (PeopleCert) verifiziert hat, und Unbestätigtes bleibt als unbestätigt gekennzeichnet. Begriffe für bestimmte Methoden wie Sprint, Scrum und Kanban werden nicht betont, und es werden allgemeine Formulierungen genutzt (zum Beispiel „ein Zwei-Wochen-Intervall“). Kennzahlen werden immer so geschrieben, dass sie Teams, Services und Systeme beschreiben, nie Einzelne.

## Schlüsselbegriffe

| Englisch | Deutsch |
|---|---|
| service | Service |
| value co-creation | gemeinsame Wertschöpfung |
| incident | Incident |
| event (monitoring) | Ereignis |
| problem | Problem |
| change enablement | Change-Befähigung |
| SLA / SLO / XLA | SLA / SLO / XLA (Service Level Agreement / Objective, Experience Level Agreement) |
| error budget | Fehlerbudget |
| toil | Toil |
| backlog | Backlog |
| retrospective | Retrospektive |
| value stream | Wertstrom |
| guardrail | Leitplanke |
| runbook | Runbook |
| postmortem | Postmortem |
| service desk | Service Desk |
| continual improvement | kontinuierliche Verbesserung |
| continuous delivery | kontinuierliche Auslieferung |
| observability | Observability |
| orchestration | Orchestrierung |
| auto-remediation | automatische Behebung |
| human in the loop | Human in the Loop |
| AI agent | KI-Agent |
| hallucination (AI) | Halluzination |
| prompt | Prompt |
| skill (AI) | Skill |
| analytics | Analytik |
| forecasting | Prognose |
| metric | Kennzahl |
| gaming vector | Manipulationsvektor |
| Goodhart's law | Goodharts Gesetz |
| lead time / cycle time | Durchlaufzeit / Zykluszeit |
| work in process (WIP) | laufende Arbeit (WIP) |
| throughput | Durchsatz |
| queue | Warteschlange |
| Little's law | Littles Gesetz |
| control chart | Regelkarte |
| change failure rate | Change-Fail-Rate |
| mean time to restore (MTTR) | mittlere Zeit bis zur Wiederherstellung (MTTR) |
| SLI | Service-Level-Indikator (SLI) |
| flow efficiency | Flusseffizienz |
| unit economics | Stückökonomie |
| total cost of ownership (TCO) | Gesamtbetriebskosten (TCO) |
| well-being | Wohlbefinden |
| sustainable pace | nachhaltiges Tempo |
| percentile | Perzentil |
| median | Median |
| workaround | Umgehung |
| known error | bekannter Fehler |
| shift (on-call) | Schicht |
| page (on-call) | Page |
| rotation (on-call) | Rotation |
| roster | Dienstplan |
| on-call | Bereitschaftsdienst |
| knowledge base | Wissensdatenbank |
| showback / chargeback | Showback / Chargeback |
| assurance | Assurance |
| game day | Game Day |
| tabletop exercise | Tabletop-Übung |
| Initiate / Develop / Standardize / Manage / Orchestrate | Initiieren / Entwickeln / Standardisieren / Steuern / Orchestrieren |

## Teile des Buches

| Teil | Titel |
|---|---|
| 1 | Grundlagen des Messens |
| 2 | Kennzahlen für Fluss und kontinuierliche Auslieferung |
| 3 | Kennzahlen für Service Desk, Incidents und Anfragen |
| 4 | Kennzahlen für Probleme, Changes und Releases |
| 5 | Kennzahlen für Servicelevel, Verfügbarkeit und Zuverlässigkeit |
| 6 | Kennzahlen für Kunden und Erlebnis |
| 7 | Kennzahlen für Assets, Konfiguration und Finanzen |
| 8 | Kennzahlen für Sicherheit, Risiko, Compliance und Lieferanten |
| 9 | Kennzahlen für Menschen, Teams und Verbesserung |
| 10 | Kennzahlen für KI, Automatisierung und Analytik |
| 11 | Ein Kennzahlenprogramm aufbauen |
| 12 | Anhänge |

## Titel der Themen

| Nummer | Titel |
|---|---|
| 1.0 | Einführung in Teil 1: Grundlagen des Messens |
| 1.1 | Warum Service-Management messen |
| 1.2 | Goodharts Gesetz und die Psychologie von Kennzahlen |
| 1.3 | Ergebnisse vor Output: Auswählen, was gemessen wird |
| 1.4 | Governance und Verantwortung für Kennzahlen |
| 1.5 | Datenquellen und Instrumentierung |
| 1.6 | Statistische Kompetenz für Servicekennzahlen |
| 1.7 | Messrahmenwerke |
| 1.8 | ITIL 5: Messung und Wertergebnisse |
| 2.0 | Einführung in Teil 2: Kennzahlen für Fluss und kontinuierliche Auslieferung |
| 2.1 | Flussmaße |
| 2.2 | Durchlaufzeit, Zykluszeit und Flusseffizienz |
| 2.3 | Laufende Arbeit und Warteschlangentheorie |
| 2.4 | Kennzahlen für den Wertstrom |
| 2.5 | Kennzahlen für Lieferprognosen und Planung |
| 2.6 | Kennzahlen für Backlog und Refinement |
| 2.7 | Kennzahlen für Pull Requests und Code-Reviews |
| 2.8 | DORA-Kennzahlen |
| 2.9 | Betriebsarbeit und ungeplante Arbeit |
| 3.0 | Einführung in Teil 3: Kennzahlen für Service Desk, Incidents und Anfragen |
| 3.1 | Kennzahlen für den Service Desk |
| 3.2 | Incident-Aufkommen und Priorität |
| 3.3 | Reaktions- und Lösungszeit bei Incidents |
| 3.4 | Kennzahlen für Major Incidents |
| 3.5 | Kennzahlen für die Erfüllung von Serviceanfragen |
| 3.6 | Kennzahlen für Wissensmanagement |
| 3.7 | Kennzahlen für Self-Service und Automatisierung |
| 4.0 | Einführung in Teil 4: Kennzahlen für Probleme, Changes und Releases |
| 4.1 | Kennzahlen für das Problemmanagement |
| 4.2 | Kennzahlen für Postmortems und Lernen |
| 4.3 | Kennzahlen für die Change-Befähigung |
| 4.4 | Change-Fehlschläge und Nacharbeit |
| 4.5 | Kennzahlen für Releases und Deployments |
| 4.6 | Technische Schulden und bekannte Fehler |
| 5.0 | Einführung in Teil 5: Kennzahlen für Servicelevel, Verfügbarkeit und Zuverlässigkeit |
| 5.1 | Kennzahlen für SLA, OLA und XLA |
| 5.2 | SLIs, SLOs und Fehlerbudgets |
| 5.3 | Verfügbarkeitskennzahlen |
| 5.4 | Kennzahlen für Kapazität und Leistung |
| 5.5 | Kennzahlen für Monitoring und Alarmqualität |
| 5.6 | Kennzahlen für die Servicekontinuität |
| 5.7 | Kennzahlen für Toil und Bereitschaftsdienst |
| 6.0 | Einführung in Teil 6: Kennzahlen für Kunden und Erlebnis |
| 6.1 | Kennzahlen für Kundenzufriedenheit |
| 6.2 | Experience Level Agreements |
| 6.3 | Kennzahlen für Service-Akzeptanz und Katalog |
| 6.4 | Nutzer- und Mitarbeitererlebnis |
| 6.5 | Wertrealisierung und Geschäftsergebnisse |
| 7.0 | Einführung in Teil 7: Kennzahlen für Assets, Konfiguration und Finanzen |
| 7.1 | Kennzahlen für das IT-Asset-Management |
| 7.2 | Kennzahlen für Software-Assets und Lizenzen |
| 7.3 | Kennzahlen für den Lebenszyklus von Hardware-Assets |
| 7.4 | Kennzahlen für Konfigurations- und CMDB-Qualität |
| 7.5 | Servicekosten und Stückökonomie |
| 7.6 | Kennzahlen für FinOps und Cloud-Kosten |
| 7.7 | Kapitalrendite und Business Case |
| 8.0 | Einführung in Teil 8: Kennzahlen für Sicherheit, Risiko, Compliance und Lieferanten |
| 8.1 | Kennzahlen für Sicherheitsvorfälle und Schwachstellen |
| 8.2 | Kennzahlen für Risiken und Kontrollen |
| 8.3 | Kennzahlen für Compliance und Audit |
| 8.4 | Kennzahlen für Lieferanten und Verträge |
| 8.5 | Regulatorische und behördliche Berichterstattung |
| 9.0 | Einführung in Teil 9: Kennzahlen für Menschen, Teams und Verbesserung |
| 9.1 | Teamgesundheit und Entwicklererlebnis |
| 9.2 | Kennzahlen für Zufriedenheit und Wohlbefinden |
| 9.3 | Kennzahlen für Zusammenarbeit und Übergaben |
| 9.4 | Kennzahlen für Fähigkeiten und Lernen |
| 9.5 | Kennzahlen für kontinuierliche Verbesserung |
| 9.6 | Kennzahlen für organisatorischen Wandel und Akzeptanz |
| 10.0 | Einführung in Teil 10: Kennzahlen für KI, Automatisierung und Analytik |
| 10.1 | KI in der Messung des Service-Managements |
| 10.2 | KI-gestützte Arbeit messen |
| 10.3 | Kennzahlen für KI-Agenten und Chatbots |
| 10.4 | Kennzahleninflation und Qualitätsverwässerung |
| 10.5 | Kennzahlen für KI-Governance und -Risiken |
| 10.6 | Kennzahlen für Automatisierung und Orchestrierung |
| 10.7 | Kennzahlen für Pipelines und automatisierte Changes |
| 10.8 | Kennzahlen für Analytik und Datenqualität |
| 10.9 | Kennzahlen für Prognosen und prädiktive Analytik |
| 10.10 | Kennzahlen für Observability und Telemetrie |
| 11.0 | Einführung in Teil 11: Ein Kennzahlenprogramm aufbauen |
| 11.1 | Ein Dashboard für Servicekennzahlen entwerfen |
| 11.2 | Werkzeuglandschaft |
| 11.3 | Kennzahlen einführen, ohne Angst zu erzeugen |
| 11.4 | Reifegradmodell für Kennzahlenprogramme |
| 11.5 | Eine schrittweise Einführungs-Roadmap |
| 12.0 | Anhänge |
| 12.1 | Glossar |
| 12.2 | Nachschlagewerk für Kennzahlendefinitionen und Formeln |
| 12.3 | Checklisten |
| 12.4 | Vorlagen |
| 12.5 | Reifegrad-Selbstbewertung |
| 12.6 | Quellen und weiterführende Literatur |
| 12.7 | Index |
