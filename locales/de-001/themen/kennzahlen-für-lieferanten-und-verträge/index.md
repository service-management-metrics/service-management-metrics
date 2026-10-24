# Kennzahlen für Lieferanten und Verträge

**Lieferanten sind Teil Ihres Services. Messen Sie also, was sie liefern, wie stark Sie von ihnen abhängen und ob Sie gehen könnten, und bauen Sie die Beziehung auf gemeinsame Ergebnisse und regelmäßige Gespräche, nicht auf Strafen und Überraschung.**

## Überblick und Motivation

Fast kein Service wird von einem Team allein gebaut und betrieben. Cloud-Anbieter hosten ihn, Hersteller liefern die Software, Auftragnehmer besetzen den Service Desk, ein Telekommunikationsunternehmen trägt den Verkehr, und ein Zahlungspartner bewegt das Geld. Fällt einer von ihnen aus, unterscheiden Ihre Nutzer nicht zwischen Ihrem Versagen und dem des anderen. [Lieferantenmanagement (Vendor Management)](https://en.wikipedia.org/wiki/Vendor_management) ist die Disziplin, Lieferanten auszuwählen, mit ihnen Verträge zu schließen, sie zu überwachen und, wenn nötig, auszusteigen. Die ITIL-Praktik des Lieferantenmanagements beschreibt es als Sicherstellen, dass Lieferanten und ihre Leistung angemessen gesteuert werden, um die Servicebereitstellung ohne Lücken zu stützen.

[Outsourcing](https://en.wikipedia.org/wiki/Outsourcing) verlagert Arbeit an eine externe Partei und verlagert nicht die Verantwortung: Die Organisation bleibt gegenüber ihren Kunden und Regulierern rechenschaftspflichtig. Verträge sind daher ein Mittel der Koordination und der Risikoverteilung, keine Übertragung von Verantwortung. Sind viele Lieferanten beteiligt, koordinieren [Multisourcing](https://en.wikipedia.org/wiki/Multisourcing) und die Praxis der [Service-Integration und -Verwaltung](https://en.wikipedia.org/wiki/Service_integration_and_management) (SIAM) sie so, dass der Nutzer einen Service sieht. Die Kennzahlen in diesem Thema beschreiben die Gesundheit dieses Geflechts.

Agile Werte geben eine nützliche Orientierung. Das Agile Manifest nennt eine Präferenz für die Zusammenarbeit mit dem Kunden gegenüber der Vertragsverhandlung. Das heißt nicht, Verträge zu ignorieren, die echtes Risiko und echtes Geld verteilen. Es heißt, Beziehungen aufzubauen, in denen Lieferant und Kunde an denselben Ergebnissen arbeiten, Informationen früh teilen und sich anpassen, während sie lernen. Lieferanten, die als Partner behandelt werden, erzählen Ihnen früher von Problemen. Lieferanten, die Strafen fürchten, verbergen sie. Messung sollte das erste Muster stützen.

Vier Probleme kehren bei der Lieferantenmessung wieder.

- **Grüne Berichte und unzufriedene Nutzer.** Ein Lieferant kann jedes vertragliche Service Level erfüllen und dennoch ein schlechtes Erlebnis liefern, ein Muster, das das frühere Thema zu Service Level Agreements den Wassermelonen-Effekt nennt (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA). Der Vertrag misst, was er sagt, und Nutzer erleben etwas Weiteres.
- **Konzentration und Lock-in.** Starke Abhängigkeit von einem Lieferanten ist effizient, bis er ausfällt oder die Preise erhöht. [Vendor Lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) macht Wechsel teuer, und die Kosten wachsen mit jeder Integration unbemerkt.
- **Verborgene Abhängigkeiten.** Ihre Lieferanten haben Lieferanten. Ein [Angriff auf die Lieferkette](https://en.wikipedia.org/wiki/Supply_chain_attack) zielt auf einen vertrauenswürdigen Anbieter, um dessen Kunden zu erreichen, und ein Ausfall bei einem Subunternehmer kann Sie erreichen, ohne dass Ihr direkter Lieferant Kontakt aufnimmt.
- **Ausstieg als Nachgedanke.** Viele Verträge werden ohne Plan für ihr Ende unterschrieben. Eine [Ausstiegsstrategie](https://en.wikipedia.org/wiki/Exit_strategy), die nie getestet wurde, funktioniert womöglich nicht, wenn sie gebraucht wird.

Eine weitere Überlegung ist die Vertragsform. [Leistungsbasierte Vertragsgestaltung](https://en.wikipedia.org/wiki/Performance-based_contracting) bindet Zahlung an Ergebnisse und kann Interessen ausrichten, wenn Ergebnisse klar und messbar sind. Sie kann auch zu Manipulation einladen, wenn die Maße eng sind. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt in beide Richtungen: Lieferanten optimieren das gemessene Service Level, und Käufer optimieren ihre berichteten Einsparungen (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Dieses Thema baut auf den Datensätzen des vorigen Teils auf, besonders Software- und Finanzdaten (siehe Thema 7.2, Kennzahlen für Software-Assets und Lizenzen, und Thema 7.5, Servicekosten und Stückökonomie), und bereitet die Berichtspflichten vor, die oft öffentlichen Stellen zufallen (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Leitprinzipien

- **Sie bleiben rechenschaftspflichtig.** Verträge verteilen Risiko und Geld, und sie übertragen die Verantwortung gegenüber Nutzern und Regulierern nicht.
- **Ergebnisse und Erlebnis messen, nicht nur Vertragsbedingungen.** Ein grüner Vertragsbericht kann einen schlechten Service verbergen.
- **Die eigenen Abhängigkeiten kennen.** Kartieren Sie kritische Lieferanten, ihre wichtigsten Subunternehmer und die Services, die sich auf sie stützen.
- **Den Ausstieg planen, bevor man unterschreibt.** Ein ungetesteter Ausstiegsplan ist eine Hoffnung.
- **Regelmäßig zusammenarbeiten.** Häufige, offene gemeinsame Reviews schlagen jährliche Krisentreffen.
- **Daten offen teilen.** Beide Seiten profitieren von denselben Zahlen.
- **Lieferanten nach Kritikalität unterscheiden.** Setzen Sie Managementaufwand dort ein, wo ein Ausfall am meisten schmerzen würde.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Erreichung der Service Levels des Lieferanten | Anteil der vertraglich vereinbarten Service-Level-Maße, die ein Lieferant erfüllt, gepaart mit einem Erlebnismaß für denselben Service | im Zeitraum erfüllte Maße / vertraglich vereinbarte Maße; berichtet neben dem Nutzererlebnis-Wert des Services | Prozent | Lieferantenberichte, eigenes Monitoring, Umfragedaten | Lieferantenmanagement; Service-Level-Management | Review des Beitrags eines Partners zu den Zielen | Monatlich |
| Dem Lieferanten zugeordnete Incident-Zeit | Stunden an Serviceauswirkung, die der Komponente oder Handlung eines Lieferanten zugeordnet werden | Summe der Auswirkungsstunden von Incidents, bei denen das Versagen eines Lieferanten bestätigte Ursache war | Stunden | Incident-Datensätze mit Ursachenanalyse, Incident-Berichte von Lieferanten | Incident-Management; Lieferantenmanagement | Durch externe Blocker verlorene Zeit | Monatlich |
| Abdeckung des Vertragsregisters | Anteil der Lieferanten mit aktuellem Vertrag, einem benannten internen Eigner und einem geplanten Review | Lieferanten mit allen dreien / Lieferanten im Umfang | Prozent | Vertragsregister, Beschaffungsunterlagen | Lieferantenmanagement; Finanzmanagement | Klare Verantwortung für externe Abhängigkeiten | Vierteljährlich |
| Aktualität der Sorgfaltsprüfung | Anteil kritischer Lieferanten, deren Risikobewertung innerhalb ihres Review-Zyklus liegt | im Zyklus bewertete kritische Lieferanten / kritische Lieferanten | Prozent | Risikobewertungen der Lieferanten | Lieferantenmanagement; Risikomanagement; Informationssicherheitsmanagement | Regelmäßiges Review von Risiken | Vierteljährlich |
| Ausstiegsbereitschaft | Anteil kritischer Lieferanten mit einem dokumentierten Ausstiegsplan, der innerhalb des vereinbarten Zeitraums getestet wurde | kritische Lieferanten mit getestetem Ausstiegsplan / kritische Lieferanten | Prozent | Ausstiegspläne und Testaufzeichnungen | Lieferantenmanagement; Servicekontinuitätsmanagement | Geübte Wiederherstellung einer Abhängigkeit | Jährlich |
| Konzentration | Anteil kritischer Services, die von einem einzelnen Lieferanten ohne getestete Alternative abhängen | kritische Services mit Abhängigkeit von einem einzelnen Lieferanten und ohne getestete Alternative / kritische Services | Prozent | Abhängigkeitskarte, Lieferantenregister | Lieferantenmanagement; Risikomanagement | Einen Single Point of Failure vermeiden | Vierteljährlich |
| Abschlussrate gemeinsamer Maßnahmen | Anteil der in gemeinsamen Reviews mit Lieferanten vereinbarten Maßnahmen, die bis zu ihrem Fälligkeitsdatum abgeschlossen wurden | bis zum Datum abgeschlossene gemeinsame Maßnahmen / fällige gemeinsame Maßnahmen | Prozent | Review-Protokolle und Maßnahmenverfolgung | Lieferantenmanagement; kontinuierliche Verbesserung | Gelieferte Retrospektive-Maßnahmen | Vierteljährlich |

Definieren Sie Kritikalität im Register mit den Kriterien und wenden Sie sie konsistent an. Ein Service-Level-Maß ist „erfüllt“, wie im Vertrag definiert, und das Erlebnismaß ist das, das Sie für denselben Service wählen. Die dem Lieferanten zugeordnete Incident-Zeit zählt nur bestätigte Ursachen, und die Zuordnungsmethode wird, wo möglich, mit dem Lieferanten vereinbart. Die Ausstiegsbereitschaft zählt einen Plan nur dann als getestet, wenn im Zeitraum ein Walkthrough oder eine Übung erfasst wurde.

## Empfehlungen

### Die eigenen Lieferanten kennen und was von ihnen abhängt

**1. Führen Sie ein Lieferantenregister mit Eignern und Kritikalität.** Listen Sie jeden Lieferanten mit Vertrag auf, was er bereitstellt, den internen Eigner, die Vertragsdaten und die Kritikalität. Beziehen Sie kostenlose oder informelle Services ein, auf die sich Ihre Teams stützen. Kritikalität ist ein Urteil über den Schaden bei Ausfall des Lieferanten, und sie entscheidet, wie viel Managementaufmerksamkeit die Beziehung bekommt.

**2. Kartieren Sie die Abhängigkeitskette für kritische Services.** Listen Sie für jeden kritischen Service die Lieferanten auf, von denen er abhängt, und, wo Sie können, deren wichtigste Subunternehmer und gemeinsame Plattformen. Nutzen Sie die Konfigurationsdatensätze für interne Verknüpfungen und fragen Sie Lieferanten nach ihren kritischen Abhängigkeiten (siehe Thema 7.4, Kennzahlen für Konfigurations- und CMDB-Qualität). Die Karte zeigt Konzentrationsrisiko und sagt Ihnen, wo ein Ausfall anderswo Sie erreichen würde.

**3. Bewerten Sie Risiko verhältnismäßig.** Nutzen Sie eine kurze Standardbewertung für Lieferanten mit geringem Risiko und eine tiefere für kritische, die Sicherheit, Resilienz, finanzielle Stabilität und Compliance abdeckt. Bewerten Sie im Zyklus und bei Änderungen neu. Teilen Sie die Ergebnisse mit dem Lieferanten und vereinbaren Sie Maßnahmen. Standards wie ISO/IEC 27036 geben Anleitung zur Informationssicherheit in Lieferantenbeziehungen.

### Verträge für Ergebnisse und Zusammenarbeit schreiben

**4. Definieren Sie Service Levels, die widerspiegeln, was Nutzer erleben.** Nehmen Sie vertraglich vereinbarte Maße auf, die sich auf Nutzerergebnisse beziehen, etwa die Geschwindigkeit der nutzerseitigen Handlung, ebenso wie die Verfügbarkeit von Komponenten. Bitten Sie um die Daten, sie selbst zu prüfen. Ein [Service Level Agreement](https://en.wikipedia.org/wiki/Service-level_agreement) mit Maßen, die niemand verifizieren kann oder die nicht zu dem passen, was Nutzer spüren, erzeugt den Wassermelonen-Effekt.

**5. Bevorzugen Sie gemeinsame Ziele gegenüber Strafen allein.** Gutschriften für verfehlte Ziele sind üblich und haben ihren Platz, aber ein Vertrag, der hauptsächlich auf Strafen ruht, macht die Beziehung gegnerisch und die Daten weniger ehrlich. Nehmen Sie, wo möglich, gemeinsame Ziele, regelmäßige gemeinsame Reviews und Gain-Sharing für Verbesserungen auf. Prüfen Sie den Anreiz auf die Nebenwirkungen, die er haben könnte.

**6. Planen Sie den Ausstieg im Vertrag.** Nehmen Sie Datenexport in nutzbaren Formaten, Unterstützung beim Übergang, angemessene Kündigungsfrist und Klarheit zu geistigem Eigentum und Eigentum an Konfigurationen auf. Fragen Sie, was das Verlassen kosten würde, und schreiben Sie es auf. Ein Vertrag ohne Ausstiegsbedingungen lässt Sie unter Druck verhandeln.

### Die Beziehung steuern

**7. Halten Sie regelmäßige gemeinsame Reviews.** Treffen Sie sich in einem Rhythmus, der zur Kritikalität passt, mit einer kurzen Standardagenda: Ergebnisse, Incidents, Risiken, anstehende Changes und Maßnahmen. Teilen Sie Ihre eigenen Kennzahlen mit dem Lieferanten und bitten Sie um seine. Verfolgen Sie Maßnahmen und Abschluss. Behandeln Sie das Treffen als Arbeitssitzung zwischen Partnern und laden Sie die Menschen ein, die die Arbeit tun.

**8. Teilen Sie Incident-Informationen schnell und offen.** Vereinbaren Sie, wie und wie schnell jede Seite die andere benachrichtigt, und überprüfen Sie bedeutende Incidents gemeinsam schuldfrei (siehe Thema 3.4, Kennzahlen für Major Incidents). Messen Sie die dem Lieferanten zugeordnete Incident-Zeit, um zu sehen, wo die größte Auswirkung liegt, und nutzen Sie sie im Gespräch, nicht als Stock.

**9. Verbinden Sie Vertragsdaten mit Nutzererlebnis.** Stellen Sie für jeden kritischen Lieferantenservice vertraglich vereinbarte Maße neben Zufriedenheits- oder Aufwandsmaße der Nutzer (siehe Thema 6.2, Experience Level Agreements). Abweichung zwischen beiden ist der Ausgangspunkt einer Diskussion.

**10. Koordinieren Sie Lieferanten zu einem Service.** Wo mehrere Lieferanten zu einem Service beitragen, vereinbaren Sie, wer das Ende-zu-Ende-Ergebnis besitzt, wie Übergaben funktionieren und wer mit den Nutzern kommuniziert. SIAM-Praktiken formalisieren das. Messen Sie Übergabeverzögerung und wiederholte Eskalationen zwischen Lieferanten (siehe Thema 9.3, Kennzahlen für Zusammenarbeit und Übergaben).

### Konzentration verringern und sich auf das Gehen vorbereiten

**11. Messen Sie Konzentration und entscheiden Sie bewusst.** Berichten Sie den Anteil kritischer Services, die von einem einzelnen Lieferanten ohne getestete Alternative abhängen. Konzentration ist manchmal die richtige Wahl, denn sie bringt Einfachheit und Verhandlungsgewicht. Machen Sie sie zu einer Entscheidung mit einem Eigner, Kosten und einem Review-Datum und nicht zu einem Zufall.

**12. Testen Sie den Ausstieg.** Gehen Sie für kritische Lieferanten den Ausstiegsplan in einem festgelegten Zeitraum mindestens einmal durch: Können Sie die Daten exportieren, gibt es die Alternative, wie lange würde es dauern, was würde brechen? Eine Tabletop-Übung deckt Lücken billig auf. Erfassen Sie Ergebnisse, beheben Sie die Lücken und aktualisieren Sie den Plan, wenn sich die Architektur ändert.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Erreichung der Service Levels des Lieferanten | Lieferant schließt Ereignisse von der Messung aus; Uhr pausiert; enge Definitionen | Eigenes Monitoring; Erlebnismaß; Prüfung der Ausschlüsse |
| Dem Lieferanten zugeordnete Incident-Zeit | Zuordnung bestreiten; Fehler des Lieferanten als kundenseitig klassifizieren | Gemeinsames Ursachenreview; neutraler Reviewer bei Streit; Anteil strittiger Fälle verfolgen |
| Abdeckung des Vertragsregisters | Eigner benennen, die es nicht wissen; Verträge ohne Daten listen | Eignerbestätigung; prüfen, dass Review-Treffen stattfinden |
| Aktualität der Sorgfaltsprüfung | Bewertungen nur per Fragebogen; Lieferanten bescheinigen sich selbst | Belegpflicht für kritische Lieferanten; Stichprobenverifizierung |
| Ausstiegsbereitschaft | Einen Plan schreiben und ihn getestet nennen; Übungen ohne echte Schritte | Erfassen, was geübt wurde; unabhängiges Review der Übung |
| Konzentration | Einen Lieferanten auf dem Papier in mehrere juristische Einheiten teilen | Abhängigkeitskarte bis zum letztlichen Anbieter; gemeinsame Plattformen überprüfen |
| Abschlussrate gemeinsamer Maßnahmen | Leichte Maßnahmen setzen; ohne Wirkung schließen | Qualität der Maßnahmen überprüfen; prüfen, dass sich das beabsichtigte Problem verbesserte |

Ein gesunder Befund ist ein Lieferantenregister mit aktiven Eignern, Service Levels, die zum Nutzererlebnis passen, offen besprochene Incidents, bewusst gewählte Konzentration und Ausstiegspläne, die geübt wurden.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Einzelner Lieferant | Einfachheit, Verhandlungsgewicht, Integration | Konzentrationsrisiko, Lock-in |
| Mehrere Lieferanten | Resilienz, Wahl | Integrationskosten, Koordinationslast |
| Strafenlastiger Vertrag | Klare Abhilfen | Gegnerisch; verbirgt Probleme |
| Partnerschaft mit gemeinsamen Zielen | Ehrliche Daten, schnelleres Lernen | Braucht Vertrauen und Reife; weniger klare Abhilfen |
| Ergebnisbasierte Zahlung | Richtet Anreize aus | Ergebnisse schwer zu definieren und zu messen; Manipulation |
| Eingabebasierte Zahlung | Einfach, planbar | Belohnt Aufwand, nicht Ergebnisse |
| Häufige gemeinsame Reviews | Frühwarnung | Zeitkosten |
| Nur jährliche Reviews | Geringe Kosten | Langsam beim Erkennen von Problemen |

Die Antwort in Worten ist, Vertragsabhilfen für die ernsten Fälle zu behalten, alltägliche Beziehungen um gemeinsame Ergebnisse und offene Daten aufzubauen und Konzentration mit Absicht zu wählen. Passen Sie die Intensität des Managements an die Kritikalität des Lieferanten an.

## Fragen für die Diskussion im Team

**1. Welcher Ausfall eines Lieferanten würde unseren Nutzern am meisten schaden, und was ist unser Plan?**
Nennen Sie die obersten drei Abhängigkeiten. Fragen Sie bei jeder, was bei einem längeren Ausfall geschähe und wie der Plan lautet. Die Moderation sollte nach Abhängigkeiten ohne Plan, ohne Eigner oder ohne getestete Alternative suchen. Einigen Sie sich, mit welcher zuerst zu arbeiten ist.

**2. Wo widerspricht ein grüner Vertragsbericht dem, was Nutzer uns sagen?**
Nehmen Sie einen Lieferantenservice und vergleichen Sie Vertragsmaße mit Nutzerfeedback. Fragen Sie, was verlässlicher ist und warum. Das Gespräch findet oft ein Service Level, das das Falsche misst. Einigen Sie sich, es im nächsten gemeinsamen Review anzusprechen.

**3. Wer im Team besitzt jede kritische Lieferantenbeziehung, und wie oft treffen sie sich?**
Prüfen Sie das Register. Hat ein Eigner den Lieferanten seit Monaten nicht getroffen, fragen Sie warum. Einigen Sie sich auf einen Rhythmus und eine Standardagenda für die kritischsten.

**4. Was bräuchte es, unseren größten Lieferanten zu verlassen?**
Schätzen Sie Zeit, Kosten und Risiko des Ausstiegs. Fragen Sie, welche Daten, Integrationen und Fähigkeiten Sie binden. Entscheiden Sie, ob die Abhängigkeit eine bewusste Wahl ist und was sie ändern würde.

**5. Wie erfahren wir vom Incident eines Lieferanten, und wie schnell?**
Überprüfen Sie die letzten zwei Lieferanten-Incidents und die Zeit von ihrem Beginn bis zu Ihrer Kenntnis. Prüfen Sie die Benachrichtigungsbedingungen. Einigen Sie sich auf Verbesserungen wie gemeinsame Status-Feeds oder einen benannten Kontakt.

**6. Was teilen wir mit unseren Lieferanten, und was teilen sie mit uns?**
Listen Sie die Daten auf, die jede Seite bereitstellt. Besprechen Sie, welches zusätzliche Teilen helfen würde, etwa Bedarfsprognosen oder Vorankündigungen von Changes. Bedenken Sie Vertraulichkeit und einigen Sie sich auf einen Austausch zum Start.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams hängen für Plattformen, Komponenten und Services von Lieferanten ab und spüren Änderungen bei Lieferanten unmittelbar. Sie sollten Abhängigkeiten im Entwurf sichtbar halten, Lieferanten früh über Bedarfsänderungen informieren und an gemeinsamen Reviews teilnehmen. Sie können Resilienz in ihre Services bauen, zum Beispiel mit Fallbacks, sodass der Ausfall eines Lieferanten nicht alles stoppt.

### Service- und Betriebsteams

Betriebsteams steuern die tägliche Beziehung: Incidents erheben, Leistung verfolgen und Übergaben koordinieren. Sie halten die Belege zur dem Lieferanten zugeordneten Auswirkung und zum Erlebnis der Zusammenarbeit mit jedem Lieferanten. Sie sollten die Zuordnung sorgfältig erfassen, Benachrichtigungskanäle funktionsfähig halten und an Ausstiegsübungen teilnehmen.

### Führung und Governance

Führungskräfte unterschreiben Verträge und akzeptieren das Risiko. Sie sollten Berichte zu Kritikalität, Konzentration und Ausstiegsbereitschaft verlangen, Erwartungen an Partnerschaft setzen und Lieferanten nicht allein nach Preis wählen. Die Governance sollte Sorgfaltsprüfung im Verhältnis zur Kritikalität verlangen und Belege, dass Ausstiegspläne getestet wurden.

### Kunden und Nutzer

Nutzer erleben das kombinierte Ergebnis des Lieferantennetzes. Sie brauchen klare Kommunikation, wenn ein Lieferantenproblem sie betrifft, und konsistenten Support, gleich welche Partei schuld ist. Ihr Feedback ist die Prüfung, ob die berichtete Lieferantenleistung der Wirklichkeit entspricht.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung einer regionalen Krankenhausgruppe unterstützt klinische Systeme mit etwa 60 Lieferanten, darunter ein Hosting-Anbieter, ein Hersteller elektronischer Patientenakten, ein Netzbetreiber und ein verwalteter Service Desk. Die Zahlen unten sind illustrativ.

Nach einem langen Ausfall des Aktensystems fragt der Vorstand, wie viele solcher Abhängigkeiten es gibt. Die Leiterin des Lieferantenmanagements baut das Bild auf. Das Lieferantenregister deckt 47 von 60 bekannten Lieferanten mit aktuellem Vertrag, Eigner und Review-Datum ab, eine Abdeckung von 78 Prozent. Die Sorgfaltsprüfung ist für 6 von 14 kritischen Lieferanten aktuell. Von 22 kritischen Services hängen 9 von einem einzelnen Lieferanten ohne getestete Alternative ab, eine Konzentration von 41 Prozent, und zwei dieser Lieferanten teilen dieselbe Hosting-Plattform. Der verwaltete Service Desk berichtet 98 Prozent Erreichung der Service Levels, während die Zufriedenheit des klinischen Personals mit dem Desk sinkt, und der Monatsbericht zeigt, dass Incidents, die auf die zweite Stufe des Lieferanten warten, von der gemessenen Reaktionszeit ausgeschlossen sind. Im letzten Quartal betrug die dem Lieferanten zugeordnete Incident-Zeit insgesamt 53 Stunden, drei Viertel davon von zwei Lieferanten. Der Ausstiegsplan für den Aktenhersteller existiert auf dem Papier und wurde nie geübt.

Die Leiterin des Lieferantenmanagements vereinbart Änderungen mit den Eignern der klinischen Systeme und den Lieferanten. Kritische Lieferanten erhalten ein vierteljährliches gemeinsames Review mit gemeinsamer Agenda und Daten von beiden Seiten. Der Vertrag des Service Desks wird geändert, sodass die Zeit bis zur Lösung aus Sicht des Nutzers gemessen wird, und der Lieferant stimmt zu, seine Warteschlangendaten zu teilen. Neben den Vertragsmaßen kommt eine kurze Erlebnisumfrage hinzu. Die Sorgfaltsprüfung kritischer Lieferanten wechselt in einen jährlichen Zyklus mit Belegsanforderungen. Das Team führt eine Tabletop-Ausstiegsübung für den Aktenhersteller durch, die findet, dass das Datenexportformat den Audit-Trail nicht enthält und die Alternative Monate der Vorbereitung bräuchte. Der Befund geht in die nächste Vertragsverhandlung ein. Die Gruppe entscheidet auch, welche der neun Abhängigkeiten von einem einzelnen Lieferanten bewusst zu akzeptieren und welche zu verringern sind.

Ein Jahr später beträgt die Registerabdeckung 96 Prozent, die Sorgfaltsprüfung ist für 13 von 14 kritischen Lieferanten aktuell, und die Konzentration liegt bei 27 Prozent, wobei jeder verbleibende Fall als akzeptierte Entscheidung erfasst ist. Die dem Lieferanten zugeordnete Incident-Zeit fällt auf 22 Stunden im Quartal. Das Vertragsmaß des Service Desks und der klinische Zufriedenheitswert bewegen sich nun gemeinsam. Der Finanzdirektor bittet um eine Klausel, die für jedes verfehlte Service Level über alle Lieferanten finanzielle Strafen verhängt. Die Leiterin des Lieferantenmanagements schlägt Strafen nur für die kritischen sicherheitsrelevanten Maße und gemeinsame Ziele für den Rest vor und erklärt, dass pauschale Strafen Lieferanten dazu bringen, Ereignisse zu verbergen und über die Messung zu streiten. Die Entscheidung wird festgehalten, und die Vertragsvorlage wird aktualisiert.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Bauen Sie Lieferantenbeziehungen um gemeinsame Ergebnisse und regelmäßige Gespräche auf. Zu beachten ist, dass strafengetriebene Maße zu Streit über Definitionen führen.

### KI

Lieferanten können KI in ihre Services einbetten, fragen Sie also, welche KI-Funktionen mit welchen Daten genutzt werden und wer sie beaufsichtigt, und messen Sie die Abdeckung der KI-Offenlegung durch Lieferanten. Zu beachten ist, dass Aussagen von Lieferanten zu KI gegen die Vertragsbedingungen geprüft werden sollten.

### Automatisierung

Erfassen Sie Leistungsdaten von Lieferanten wo möglich automatisch und automatisieren Sie Erinnerungen an Vertragsdaten. Messen Sie die Automatisierung an verpassten Verlängerungen. Zu beachten ist, dass automatisierte Feeds von Lieferanten deren Definitionen nutzen; gleichen Sie sie also ab.

### Analytik

Berichten Sie die Erreichung durch Lieferanten mit Zuordnungsregeln für Incidents. Die Entscheidung, die dies untermauert, ist, ob zu verlängern, neu zu verhandeln oder auszusteigen ist. Zu beachten ist, dass Konzentration und Ausstiegsbereitschaft Urteile sind; dokumentieren Sie also die Begründung.

## Branchenperspektive

**Startup.** Lieferanten sind überwiegend Cloud- und Software-as-a-Service-Werkzeuge. Führen Sie eine Liste mit Eignern und Verlängerungsdaten, wissen Sie, welche Daten jeder hält, und bewahren Sie einen Export kritischer Daten. Wählen Sie Lieferanten mit klaren Exportwegen, denn früher Lock-in ist billig zu erzeugen und teuer zu lösen.

**Kleinunternehmen.** Einige Lieferanten tragen das Geschäft, und der Inhaber steuert sie oft direkt. Halten Sie Kontakte und Vertragsbedingungen an einem Ort, bitten Sie um Status- und Incident-Updates und testen Sie die Wiederherstellung aus Backups, die außerhalb des Lieferanten liegen. Verringern Sie die Abhängigkeit von einer einzelnen Person beim Lieferanten.

**Großunternehmen.** Viele Lieferanten und Ebenen verlangen eine Funktion für Lieferantenmanagement, Kritikalitätsstufen und Standardvertragsbedingungen für Sicherheit, Resilienz und Ausstieg. Nutzen Sie Koordination im SIAM-Stil, wo Lieferanten zusammenarbeiten müssen. Führen Sie eine zentrale Abhängigkeitskarte und teilen Sie sie mit den Risiko- und Kontinuitätsteams.

**Behörden und öffentlicher Sektor.** Vergaberecht, Wettbewerbsregeln und Transparenzanforderungen prägen, wie Lieferanten ausgewählt und gesteuert werden. Verträge können lang sein, mit öffentlichen Berichtspflichten und Anforderungen an Souveränität, Barrierefreiheit und Ausstieg. Dokumentieren Sie Entscheidungen, berichten Sie die Lieferantenleistung wie verlangt und planen Sie die Neuvergabe (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind die Zeit der Lieferanteneigner und einer kleinen koordinierenden Funktion, ein Register und Abhängigkeitsdaten, Bewertungsaufwand und gemeinsame Reviews. Ausstiegsübungen kosten einige Stunden bis Tage je kritischem Lieferanten. Die Werkzeuge können so einfach sein wie ein gemeinsames Register.

Der Ertrag sind weniger und kürzere lieferantenverursachte Incidents, bessere Geschäftsbedingungen aus informierter Verhandlung, vermiedene Lock-in-Kosten und eine schnellere, ruhigere Reaktion, wenn ein Lieferant ausfällt. Bauen Sie den Business Case aus Ihren eigenen Daten: dem Lieferanten zugeordnete Incident-Stunden und ihre Kosten, Kosten und Zeit früherer Lieferantenwechsel und die Differenz zwischen vertraglich vereinbarten Service Levels und nutzerberichtetem Erlebnis. Vermeiden Sie, Ausfallraten von Outsourcing in der Branche zu zitieren, wenn Sie Quelle und Methode nicht zurückverfolgen können. Beziehen Sie die Kosten ein, eine zweite Option warm zu halten, und vergleichen Sie sie mit der Exposition, die sie verringert (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Unterschreiben und vergessen.** Verträge driften von der Wirklichkeit weg. Halten Sie regelmäßige Reviews mit Eignern und Daten.
- **Nur dem Bericht des Lieferanten trauen.** Er misst, was der Lieferant wählt. Überwachen Sie unabhängig und vergleichen Sie mit dem Nutzererlebnis.
- **Beziehungen nur über Strafen.** Sie verringern Ehrlichkeit. Bauen Sie gemeinsame Ziele neben Abhilfen auf.
- **Kein Ausstiegsplan.** Das Gehen wird zur Krise. Schreiben und testen Sie den Plan, bevor er gebraucht wird.
- **Verborgene Konzentration.** Mehrere Lieferanten können eine Plattform teilen. Kartieren Sie bis zum letztlichen Anbieter.
- **Schuldzuweisung in gemeinsamen Reviews.** Lieferanten verheimlichen Incidents. Überprüfen Sie Incidents schuldfrei.
- **Einheitliches Management aller Lieferanten.** Es verschwendet Aufwand bei kleinen und vernachlässigt kritische. Stufen Sie nach Kritikalität.
- **Subunternehmer ignorieren.** Ihr Risiko umfasst ihres. Fragen Sie nach kritischen Abhängigkeiten.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Lieferanten kennen | Verträge verstreut | Register für die Hauptlieferanten | Register mit Eignern, Kritikalität und Review-Daten | Abhängigkeitskarte bis zu Subunternehmern; Abdeckung und Aktualität verfolgt | Gemeinsame Abhängigkeitssicht mit Lieferanten und Kunden |
| Leistung und Beziehung | Reaktiv; Streit | Monatliche Berichte von Lieferanten | Vertrags- und Erlebnismaße verglichen; regelmäßige gemeinsame Reviews | Maßnahmen verfolgt; Incidents gemeinsam überprüft; Zuordnung vereinbart | Lieferanten als Partner mit gemeinsamen Zielen und offenen Daten integriert |
| Resilienz und Ausstieg | Keine | Ausstiegsbedingungen in einigen Verträgen | Ausstiegspläne für kritische Lieferanten | Ausstiegspläne geübt; Konzentration bewusst entschieden | Alternativen warm gehalten; Übungen gemeinsam mit Lieferanten |

## Checkliste

- [ ] Ein Lieferantenregister listet jeden Lieferanten mit Eigner, Kritikalität und Vertragsdaten.
- [ ] Kritische Services haben eine Abhängigkeitskarte, die bis zu wichtigen Subunternehmern reicht.
- [ ] Vertragliche Service Levels sind mit einem Nutzererlebnismaß gepaart.
- [ ] Gemeinsame Reviews mit kritischen Lieferanten finden im Rhythmus mit Standardagenda statt.
- [ ] Die Sorgfaltsprüfung kritischer Lieferanten ist aktuell und belegbasiert.
- [ ] Bedingungen und Kanäle für Incident-Benachrichtigung sind vereinbart und getestet.
- [ ] Die dem Lieferanten zugeordnete Incident-Zeit wird mit vereinbarter Zuordnung erfasst.
- [ ] Konzentration wird gemessen, und jede Abhängigkeit von einem einzelnen Lieferanten ist eine erfasste Entscheidung.
- [ ] Ausstiegspläne existieren für kritische Lieferanten und wurden im Zeitraum geübt.
- [ ] Vertragsbedingungen enthalten Datenexport, Übergangsunterstützung und Eigentum an Konfigurationen.

## KI-Prompts

**Eine Kritikalitätsbewertung für Lieferanten erstellen.**

```text
We have these suppliers: [list with what each provides]. Our critical services
are: [list]. Propose criteria for rating supplier criticality (for example harm
if unavailable, data held, ease of replacement), score each supplier against
them with reasons, and suggest management intensity by tier. Do not invent
facts about the suppliers. List your assumptions and what I must confirm with
service owners.
```

**Vertragsmaße mit dem Nutzererlebnis vergleichen.**

```text
For the supplier service [name], the contract measures and results for the last
[period] are: [paste]. User experience data for the same service is: [paste
survey scores or comment themes]. Describe where they agree and disagree, give
plausible explanations for each disagreement, and suggest questions for the next
joint review. Do not assume intent by the supplier. List your assumptions.
```

**Eine Ausstiegsübung entwerfen.**

```text
Design a half-day tabletop exercise on leaving [supplier] for [service]. Include
the scenario, participants, steps to walk through (data export, alternative,
cutover, communication), what to record (time, gaps, decisions), and how to
turn findings into actions and contract changes. Do not assume specific
products. List your assumptions and risks in the exercise.
```

**Eine Agenda für ein gemeinsames Review entwerfen.**

```text
Draft an agenda and a one-page data pack for a quarterly joint review with
[supplier] about [service]. Include results against contracted measures and
user experience, incidents and learning, risks, upcoming changes on both sides,
and action review. Keep the tone collaborative. Use these inputs: [paste].
List your assumptions and any item needing legal review.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Lieferanten- oder Vertragskennzahl zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Lieferantenkennzahl seinen Manipulationsvektor, seine Leitplanke und seine Zuordnungsregel trägt.

## Wichtigste Erkenntnisse

- Sie bleiben für ausgelagerte Services rechenschaftspflichtig, also steuern Sie Lieferanten als Teil Ihres eigenen Services.
- Paaren Sie Vertragsmaße mit dem Nutzererlebnis und überwachen Sie unabhängig vom Bericht des Lieferanten.
- Kartieren Sie Abhängigkeiten bis zu Subunternehmern und behandeln Sie Konzentration als bewusste Entscheidung.
- Bauen Sie Beziehungen um gemeinsame Ergebnisse und regelmäßige gemeinsame Reviews auf, mit Abhilfen für ernste Fälle.
- Planen Sie den Ausstieg, bevor Sie unterschreiben, und testen Sie ihn für kritische Lieferanten.
- Überprüfen Sie Incidents mit Lieferanten schuldfrei und teilen Sie Daten offen.

## Quellen und weiterführende Literatur

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Supplier Management*, TSO, 2020.
2. ISO/IEC 27036, *Information technology: Security techniques: Information security for supplier relationships*, International Organization for Standardization.
3. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
6. Wikipedia, [Vendor management](https://en.wikipedia.org/wiki/Vendor_management).
7. Wikipedia, [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing).
8. Wikipedia, [Multisourcing](https://en.wikipedia.org/wiki/Multisourcing).
9. Wikipedia, [Service integration and management](https://en.wikipedia.org/wiki/Service_integration_and_management).
10. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
11. Wikipedia, [Supply chain attack](https://en.wikipedia.org/wiki/Supply_chain_attack).
12. Wikipedia, [Exit strategy](https://en.wikipedia.org/wiki/Exit_strategy).
13. Wikipedia, [Performance-based contracting](https://en.wikipedia.org/wiki/Performance-based_contracting).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
