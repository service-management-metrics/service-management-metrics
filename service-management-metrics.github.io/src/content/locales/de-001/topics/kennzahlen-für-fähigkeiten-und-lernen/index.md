# Kennzahlen für Fähigkeiten und Lernen

**Ein Team, das weiterlernt, hält seine Services gesund. Schützen Sie also Zeit für Lernen innerhalb eines nachhaltigen Tempos, messen Sie, ob Fähigkeiten verbreitet sind und genutzt werden, und behandeln Sie Zertifikate und Kurszahlen als Hinweise, nie als Beweis von Kompetenz.**

## Überblick und Motivation

Services überleben die Menschen, die sie bauten, und die Technologie darunter ändert sich ständig. Die Fähigkeit eines Teams, Schritt zu halten, hängt davon ab, was es weiß und wie schnell es lernt. Die Prinzipien des Agilen Manifests schließen die kontinuierliche Aufmerksamkeit auf technische Exzellenz und regelmäßige Reflexion darüber ein, wie man wirksamer wird. Die ITIL-Praktiken der kontinuierlichen Verbesserung und des Wissensmanagements beschreiben dasselbe Bedürfnis von der Organisationsseite. Kennzahlen zu Fähigkeiten und Lernen fragen, ob die Fähigkeit besteht, die Services zu betreiben und zu ändern, ob sie weit genug verbreitet ist, um Abwesenheit zu überstehen, und ob die Organisation den Menschen Zeit und Unterstützung zum Wachsen gibt.

Lernen ist leicht zu zählen und schwer gut zu messen. Trainingsstunden, abgeschlossene Kurse und Zertifikate sind sichtbar, und keines zeigt, ob jemand im Beruf etwas Neues tun kann. Eine [Berufszertifizierung](https://en.wikipedia.org/wiki/Professional_certification) zeigt, dass eine Person zu einem Zeitpunkt einen Prüfstandard erfüllte. Sie ist nützlicher Beleg, besonders für regulierte Rollen und Einstiegspunkte wie ITIL- oder Agile-Grundlagen, und sie ist kein Maß der aktuellen Fähigkeit oder des Urteilsvermögens der Person. Dieses Thema stützt sich daher auf Kennzahlen angewandter Fähigkeit: wer was betreiben und ändern kann, wie schnell neue Menschen nützlich werden und ob sich Lernen in der Arbeit zeigt.

Mehrere Ideen prägen den Ansatz.

- **Viel wertvolles Wissen ist [implizit](https://en.wikipedia.org/wiki/Tacit_knowledge).** Michael Polanyi beobachtete, dass wir mehr wissen, als wir sagen können. Das Betreiben eines komplexen Services erfordert Urteilsvermögen, das schwer aufzuschreiben ist, und es verbreitet sich vor allem durch gemeinsames Arbeiten. Dokumentation hilft, und sie kann gemeinsame Praxis wie [Pair Programming](https://en.wikipedia.org/wiki/Pair_programming), Mitlaufen und Review nicht ersetzen.
- **Breite und Tiefe zählen beide.** [T-förmige Fähigkeiten](https://en.wikipedia.org/wiki/T-shaped_skills) beschreiben eine Person mit Tiefe in einem Bereich und praktischer Breite in anderen. Teams T-förmiger Menschen können Abwesenheiten abdecken und über Grenzen hinweg zusammenarbeiten. [Cross-Training](https://en.wikipedia.org/wiki/Cross-training_(business)) baut diese Breite bewusst auf.
- **Lernen ist sozial.** Eine [Community of Practice](https://en.wikipedia.org/wiki/Community_of_practice) ist eine Gruppe von Menschen, die ein Handwerk teilen und voneinander lernen. [Mentoring](https://en.wikipedia.org/wiki/Mentorship) paart weniger erfahrene Menschen mit erfahreneren. Beides verbreitet Wissen über Teamgrenzen.
- **Organisationen können lernen.** Eine [lernende Organisation](https://en.wikipedia.org/wiki/Learning_organization), ein von Peter Senge popularisierter Begriff, verwandelt sich fortlaufend durch das Lernen ihrer Menschen. Praktiken wie schuldfreie Reviews von Incidents sind der Weg, wie Organisationen aus Erfahrung lernen (siehe Thema 4.2, Kennzahlen für Postmortems und Lernen).

Lernkennzahlen haben eigene Verzerrungen. Trainingsbudgets werden für Kurse ausgegeben, die niemand anwendet. Zeit zum Lernen wird versprochen und dann von Incidents verbraucht. Einzelne werden nach Fähigkeiteninventaren geordnet, was sie verbergen lässt, was sie nicht wissen. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt: Sind Lernstunden ein Ziel, besuchen Menschen Sitzungen, und sind Zertifikate ein Ziel, sammeln sie sie (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Auch ein nachhaltiges Tempo zählt hier. In Abende und Wochenenden gedrücktes Lernen ist eine Last für Menschen und kein Zeichen einer gesunden Organisation. Die Kennzahlen unten betrachten geschützte Zeit innerhalb der Arbeitswoche.

## Leitprinzipien

- **Angewandte Fähigkeit messen, nicht Kursbesuch.** Schauen Sie, was Menschen können und tun.
- **Lernzeit innerhalb eines nachhaltigen Tempos schützen.** Machen Sie Lernen nicht zu einem unbezahlten Extra.
- **Wissen mit Absicht verbreiten.** Einzelne Wissensträger sind ein Risiko für den Service und eine Last für die Person.
- **Zertifikate als Beleg behandeln, nicht als Beweis.** Sie zählen für manche Rollen und sagen wenig über die aktuelle Fähigkeit.
- **Aus der Arbeit lernen.** Incidents, Reviews und Pairing lehren mehr als die meisten Kurse.
- **Fähigkeitsdaten auf Teamebene halten.** Einzelne sollten nicht nach einem Inventar geordnet werden.
- **Menschen ihr eigenes Lernen gestalten lassen.** Motivierte Menschen wählen gut, wenn sie Zeit und Unterstützung bekommen.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Anteil geschützter Lernzeit | Anteil der Teamkapazität, der für Lernen beiseitegelegt und tatsächlich genutzt wird | für Lernen in der Arbeitszeit genutzte Stunden oder Kapazitätsanteil / gesamte Arbeitskapazität, auf Teamebene | Prozent | Kapazitätsplan des Teams und Arbeitstyp im Work-Tracker | Personal- und Talentmanagement; kontinuierliche Verbesserung | Zeit für Reflexion und technische Exzellenz | Monatlich |
| Tiefe des Cross-Trainings | Anteil kritischer Aufgaben, die im letzten Zeitraum von mindestens zwei Personen ausgeführt wurden | im Zeitraum von zwei oder mehr Personen ausgeführte kritische Aufgaben / kritische Aufgaben | Prozent | Aufgaben- und Verantwortungskarte des Teams, durch jüngste Arbeit validiert | Wissensmanagement; Servicekontinuitätsmanagement | Kollektives Eigentum an der Arbeit | Vierteljährlich |
| Zeit bis zum ersten Beitrag | Zeit, bis ein neues Teammitglied seine erste echte Änderung oder gelöste Anfrage abschließt | Median und 85. Perzentil der Tage vom Startdatum bis zum ersten abgeschlossenen echten Arbeitselement in Produktion | Tage | Onboarding-Tracker und Work-Tracker | Personal- und Talentmanagement; Wissensmanagement | Zeit, bis ein neues Teammitglied eine erste Änderung vornimmt | Je Einstellung, vierteljährlich überprüft |
| Teilnahme an Communities | Anteil der Teammitglieder, die im Zeitraum an einer Community of Practice teilnehmen, nach eigener Wahl | Mitglieder, die im Zeitraum teilnahmen, beitrugen oder vortrugen / Teammitglieder, auf Teamebene | Prozent | Aufzeichnungen der Community, freiwillig | Wissensmanagement; kontinuierliche Verbesserung | Communities of Practice | Vierteljährlich |
| Anwendungsrate von Schulungen | Anteil der Lernerfahrungen, bei denen die lernende Person oder ihr Team berichtet, das Gelernte binnen 90 Tagen in der Arbeit genutzt zu haben | als angewandt berichtete Lernerfahrungen / abgeschlossene Lernerfahrungen | Prozent | Kurze Nachfrage an die lernende Person, auf Team anonymisiert | Personal- und Talentmanagement; kontinuierliche Verbesserung | Auf die Arbeit angewandtes Lernen | Vierteljährlich |
| Abdeckung relevanter Zertifizierungen | Anteil der Rollen, die aus rechtlichen, vertraglichen oder Einstiegsgründen eine Zertifizierung verlangen und bei denen die Anforderung erfüllt ist | Rollen mit gehaltener verlangter Zertifizierung / Rollen, die eine Zertifizierung verlangen | Prozent | Register der Rollenanforderungen, Zertifikatsunterlagen | Personal- und Talentmanagement; Governance | Vertragliche oder regulatorische Einstiegsanforderungen erfüllen | Jährlich |
| Über Teams geteilte Lehren | Zahl der Lehren aus Incidents oder Verbesserungen, die außerhalb des ursprünglichen Teams geteilt und von einem anderen Team genutzt wurden | geteilte Lehren mit erfasster Nutzung durch ein anderes Team im Zeitraum | Anzahl | Lehrenregister und Review-Notizen | Wissensmanagement; kontinuierliche Verbesserung | Über Teams geteiltes Lernen | Vierteljährlich |

Definieren Sie die kritischen Aufgaben, Rollen und Lernarten im Register. Geschützte Lernzeit zählt nur Zeit, die für Lernen genutzt wurde, nicht angebotene und durch dringende Arbeit verlorene Zeit, und sie schließt Lernen nach Feierabend aus. Die Tiefe des Cross-Trainings zählt Menschen, die die Aufgabe im Zeitraum tatsächlich ausgeführt haben, nicht solche, die es theoretisch könnten. Die Anwendungsrate von Schulungen nutzt Selbstauskünfte und wird nach Team mit einer Mindestgruppengröße aggregiert. Die Zertifizierungsabdeckung gilt nur für Rollen mit echter Anforderung und wird nie genutzt, um die Kompetenz Einzelner zu bewerten.

## Empfehlungen

### Zeit schützen und real machen

**1. Planen Sie Lernzeit in die Kapazität ein.** Legen Sie einen Anteil der Kapazität jedes Teams für Lernen beiseite, etwa einen regelmäßigen Block pro Woche, und schreiben Sie ihn in den Kapazitätsplan. Ein Plan, der annimmt, dass alle bei voller Auslastung an der Lieferung arbeiten, hat keinen Raum zum Lernen. Verfolgen Sie den tatsächlich genutzten Anteil und schauen Sie, warum er zu kurz kommt: Incidents, Fristen oder Kultur. Das knüpft an die Themen zu Planung und Arbeitslast an (siehe Thema 2.5, Kennzahlen für Lieferprognosen und Planung).

**2. Lassen Sie Menschen wählen, mit Anleitung.** Motivierte Menschen wissen, was sie lernen müssen. Bieten Sie ein Budget und Zeit, eine Auswahl von Optionen und Gespräche über den Bedarf des Teams. Bitten Sie Menschen, das Gelernte mit dem Team zu teilen, was den Wert vervielfacht. Vermeiden Sie verpflichtendes Lernen, das für die Arbeit irrelevant ist.

**3. Machen Sie Lernen zum Teil der Arbeit.** Pairing, Rotation, Mitlaufen, Code-Review, interne Vorträge und schuldfreie Incident-Reviews lehren im Kontext echter Probleme. Zählen Sie sie im Kapazitätsplan als Lernen. Ein Team, das beim Liefern lernt, braucht weniger Zeit abseits der Lieferung.

### Wissen verbreiten

**4. Kartieren Sie kritische Aufgaben und wer sie ausgeführt hat.** Listen Sie die Aufgaben auf, die verlässlich erledigt werden müssen: eine Datenbank wiederherstellen, einen Schlüssel rotieren, einen Major Incident bearbeiten, einen riskanten Change ausrollen. Erfassen Sie für jede, wer sie zuletzt ausgeführt hat. Die Karte zeigt einzelne Wissensträger. Validieren Sie sie mit Belegen jüngster Arbeit, denn ein Fähigkeiteninventar auf Basis von Selbsteinschätzung driftet von der Wirklichkeit weg (siehe Thema 9.3, Kennzahlen für Zusammenarbeit und Übergaben).

**5. Bilden Sie gezielt kreuz.** Planen Sie Pairing und Rotation so, dass jede kritische Aufgabe mindestens zwei Menschen hat, die sie kürzlich ausgeführt haben. Üben Sie mit Drills und Game Days, wo möglich. Ziel sind Resilienz und nachhaltige Bereitschaft, und es entlastet die Experten davon, die Einzigen zu sein, die helfen können.

**6. Unterstützen Sie Communities of Practice und Mentoring.** Ermutigen Sie freiwillige Gruppen rund um Handwerke wie Zuverlässigkeit, Testen, Sicherheit oder Service-Management und schaffen Sie Zeit dafür. Bieten Sie Mentoring über Teams an. Messen Sie die Teilnahme leichtgewichtig, auf Teamebene, und fragen Sie, was die Communities hervorgebracht haben: geteilte Praktiken, Werkzeuge, Lehren.

### Gut einarbeiten

**7. Messen Sie die Zeit bis zum ersten Beitrag.** Verfolgen Sie, wie lange neue Mitglieder brauchen, ein echtes Stück Arbeit in Produktion abzuschließen, und was sie bremst: Zugriff, Dokumentation, Einrichtung der Umgebung oder unklare Verantwortung. Beheben Sie die Ursachen und fragen Sie neue Kolleginnen und Kollegen nach ihrer Sicht. Ein schneller, unterstützender Start setzt den Ton und verringert Risiko (siehe Thema 6.4, Nutzer- und Mitarbeitererlebnis).

**8. Geben Sie neuen Menschen früh echte Arbeit mit Unterstützung.** Beginnen Sie mit kleinen, echten Aufgaben und einem benannten Buddy. Überprüfen Sie den Fortschritt regelmäßig und passen Sie an. Lernen durch Tun mit Sicherheitsnetzen ist schneller als eine lange Lesephase.

### Lernen ehrlich bewerten

**9. Fragen Sie, ob die Schulung angewandt wurde.** Fragen Sie nach einem Kurs oder einer Veranstaltung einige Wochen später die lernende Person und ihr Team, ob und wie sie sie genutzt haben. Aggregieren Sie die Antworten. Kurse, die niemand anwendet, sollten geändert oder gestrichen werden. Das Kirkpatrick-Modell mit vier Ebenen der Schulungsbewertung, von Reaktion über Lernen und Verhalten bis zu Ergebnissen, bietet dafür ein Vokabular, wenngleich einfache Nachfragen ein guter Anfang sind.

**10. Nutzen Sie Zertifizierungen für das, wofür sie taugen.** Wo Gesetz, Vertrag oder der Einstiegsstandard einer Rolle eine Zertifizierung verlangt, verfolgen Sie die Abdeckung. Behandeln Sie Zertifizierung sonst als ein Signal von Aufwand und Wissen. Setzen Sie keine Zertifikatszahlen als Ziele und zahlen oder befördern Sie nicht allein danach.

**11. Teilen Sie Lehren über Teams.** Führen Sie ein leichtgewichtiges Register der Lehren aus Incidents, Reviews und Verbesserungen und verfolgen Sie, welche von einem anderen Team als dem Urheber genutzt wurden. Eine Lehre, die im Team bleibt, das sie lernte, wurde von der Organisation nur halb gelernt. Überprüfen Sie das Register in Communities of Practice.

**12. Halten Sie Einzeldaten aus Ranglisten heraus.** Veröffentlichen Sie keine Fähigkeiteninventare nach Person und ordnen Sie Menschen nie nach Trainingsstunden, Zertifikaten oder selbst eingeschätzter Fähigkeit. Aggregieren Sie auf Teamebene und lassen Sie Menschen ihre eigenen Daten sehen. Einzelne werden Lücken verbergen, wenn Lücken gegen sie zählen.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Anteil geschützter Lernzeit | Gewöhnliche Arbeit als Lernen erfassen; Zeit planen, die dann abgesagt wird | Nur genutzte Zeit zählen; mit Arbeitstyp-Aufzeichnungen und Teamkommentaren vergleichen |
| Tiefe des Cross-Trainings | Menschen listen, die die Aufgabe nie getan haben; eine einzelne Beobachtung zählen | Beleg jüngster Arbeit; Ergebnisse von Drills |
| Zeit bis zum ersten Beitrag | Triviale Änderungen zählen; die Uhr spät starten | „Echte“ Arbeit im Register definieren; das neue Mitglied und seinen Buddy fragen |
| Teilnahme an Communities | Teilnahme vorschreiben; Anmeldungen zählen | Nur freiwillig; fragen, was die Community hervorbrachte |
| Anwendungsrate von Schulungen | Lernende drängen zu sagen, sie hätten angewandt; nur Begeisterte fragen | Anonymes Aggregat; Nachfrage auf Teamebene; auf beobachtbare Änderungen schauen |
| Abdeckung relevanter Zertifizierungen | Zertifikate für Rollen sammeln, die sie nicht brauchen; Zertifizierung als Kompetenz behandeln | Auf echte Anforderungen begrenzen; praktische Fähigkeit durch anderen Beleg prüfen |
| Über Teams geteilte Lehren | Triviale Lehren teilen; Beiträge zählen | Erfasste Nutzung durch ein anderes Team verlangen; Qualität überprüfen |

Ein gesunder Befund ist geschützte und genutzte Lernzeit, kritische Aufgaben, die mehrere Menschen kennen, neue Mitglieder, die schnell echte Beiträge leisten, Communities, die geteilte Praxis hervorbringen, Schulung, die Menschen anwenden, und Lehren, die zwischen Teams reisen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Formale Kurse und Zertifizierung | Strukturiert, anerkannt, nützlich für Einstieg und regulierte Rollen | Kosten; überträgt sich womöglich nicht auf die Arbeit |
| Lernen bei der Arbeit | Relevant und unmittelbar | Ungleichmäßig; hängt von Mentoren und Zeit ab |
| Geschützte Zeit | Macht Lernen real | Konkurriert mit dringender Arbeit; braucht Disziplin |
| Lernen in der Freizeit | Keine Kosten für die Lieferung | Nicht tragbar; unfair; verborgene Überstunden |
| Fähigkeiteninventar | Zeigt Lücken und Risiken | Subjektiv; kann zur Rangliste werden |
| Beleg jüngster Arbeit | Verlässlich | Mehr Aufwand in der Pflege |
| Zentralisiertes Trainingsprogramm | Konsistenz | Langsam; passt womöglich nicht zu Teams |
| Vom Team gewähltes Lernen | Relevant; motiviert | Wechselnde Qualität; braucht Anleitung |

Die Antwort in Worten ist, Lernzeit in der Arbeitswoche zu schützen, vor allem durch die Arbeit zu lernen und formale Kurse einzusetzen, wo sie helfen, die Fähigkeitenkarte auf jüngsten Belegen zu gründen und die Daten nie zu nutzen, um Menschen zu ordnen.

## Fragen für die Diskussion im Team

**1. Was hat jeder von uns im letzten Quartal bei der Arbeit gelernt, und wie haben wir es gelernt?**
Teilen Sie kurz. Beachten Sie, ob das meiste Lernen aus Kursen, aus der Arbeit oder von Kollegen kam. Die Moderation sollte fragen, was es ermöglichte und was im Weg stand. Einigen Sie sich auf eine Änderung, die nützliches Lernen erhöhen würde.

**2. Welche kritischen Aufgaben könnten nur einer oder zwei von uns erledigen, und was geschähe, wenn sie weg wären?**
Listen Sie sie auf. Wählen Sie die riskanteste und planen Sie, wie das Wissen zu verbreiten ist: Pairing, ein Drill, ein Runbook, Rotation. Bestätigen Sie, dass der Plan den Experten keine verborgenen Überstunden aufbürdet.

**3. Wie lange brauchte unser letzter neuer Kollege, bis er etwas Echtes tat, und was bremste ihn?**
Fragen Sie ihn. Verfolgen Sie die Schritte vom ersten Tag an. Besprechen Sie Zugriff, Umgebung, Dokumentation und Unterstützung. Einigen Sie sich auf zwei Korrekturen, die der nächsten Person helfen würden.

**4. Wann hat ein Kurs oder ein Zertifikat verändert, wie wir arbeiten?**
Erinnern Sie sich an Beispiele. Fragen Sie, was den Unterschied machte. Fallen wenige ein, besprechen Sie warum. Entscheiden Sie, welches Lernen sich fortzusetzen lohnt und welches zu streichen ist.

**5. Welche Lehre aus einem jüngeren Incident hat ein anderes Team tatsächlich genutzt?**
Schauen Sie in das Lehrenregister. Ist nichts gereist, fragen Sie, wie sich wirksamer teilen lässt: eine Community, ein kurzer Vortrag, eine Änderung an einem Standard. Wählen Sie eine Lehre, die diesen Monat zu teilen ist.

**6. Ist unsere Lernzeit real, und was schützt sie?**
Vergleichen Sie den Plan mit dem, was geschah. Besprechen Sie, was sie übernimmt: Incidents, Fristen, Erwartungen. Einigen Sie sich auf eine Regel zu ihrem Schutz, etwa eine dringende Anfrage als Eskalation an eine entscheidungsbefugte Person zu behandeln.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams lernen vor allem durch Bauen. Sie sollten Lernzeit planen, bei kritischer Arbeit pairen und rotieren, teilen, was sie lernen, und an Communities of Practice teilnehmen. Sie sollten um die Zeit und Werkzeuge bitten, die sie brauchen, und Lernen als Teil guter Lieferung behandeln.

### Service- und Betriebsteams

Betriebsteams brauchen Breite, denn sie decken Abwesenheiten und Incidents zu jeder Stunde ab. Sie sollten bei kritischen Aufgaben kreuzschulen, Drills und Game Days nutzen und das Gelernte in Runbooks und Reviews festhalten. Ihr Bereitschaftsrhythmus muss Raum für Ruhe und Lernen lassen.

### Führung und Governance

Führungskräfte entscheiden, ob Lernen Priorität oder Nachgedanke ist. Sie sollten Lernzeit in Plänen schützen, die Korrekturen finanzieren, die das Onboarding offenbart, Ziele für Trainingsstunden oder Zertifikate meiden und Communities unterstützen. Die Governance sollte Zertifizierung nur dort verfolgen, wo sie verlangt ist, und auf Belege angewandter Fähigkeit schauen.

### Kunden und Nutzer

Nutzer profitieren von Teams, die ihre Services tief kennen und mit Veränderung Schritt halten: schnellere Korrekturen, weniger wiederholte Fehler und besserer Rat. Sie bemerken, wenn die Menschen, die ihnen helfen, neu im System wirken oder dasselbe Problem wiederkehrt. Sie können Teams auch über ihre eigene Arbeit lehren, und ihre Einbeziehung ist eine Form des Lernens.

## In der Praxis: ein Beispiel aus dem Service-Management

Die Technologiebetriebsgruppe einer Regionalbank hat sechs Teams, die Kernbanking, Zahlungsverkehr und digitale Kanäle betreiben. Die Zahlen unten sind illustrativ.

Das Trainings-Dashboard der Gruppe zeigt im Vorjahr durchschnittlich 24 Stunden Training je Person und 70 erworbene Zertifikate, und der Trainingsleiter ist zufrieden. Die Leiterin des Betriebs stellt eine andere Frage: Kommen die Teams zurecht, wenn Schlüsselpersonen weg sind? Sie bittet jedes Team, seine kritischen Aufgaben zu kartieren und wer jede in den letzten sechs Monaten ausgeführt hat. Von 46 kritischen Aufgaben waren nur 19 von zwei oder mehr Personen ausgeführt worden, eine Tiefe des Cross-Trainings von 41 Prozent. Vierzehn Aufgaben hatte eine Person erledigt. Die Zeit bis zum ersten Beitrag der letzten acht Einstellungen hat einen Median von 41 Tagen, mit einem 85. Perzentil von 67, überwiegend mit Warten auf Zugriff und Suchen von Dokumentation verbracht. Eine kurze Nachfrage bei 38 Menschen, die Kurse abgeschlossen hatten, ergab, dass 31 Prozent sagten, sie hätten das Gelernte binnen 90 Tagen angewandt. Teams berichten, dass Lernzeit in einer geschäftigen Woche meist das Erste ist, was abgesagt wird, und die tatsächlich genutzte geschützte Zeit liegt bei etwa 3 Prozent der Kapazität.

Die Gruppe nimmt mit den Teams vier Änderungen vor. Jedes Team plant einen ständigen Lernblock von etwa 8 Prozent der Kapazität und eine Regel, dass eine Absage mit der Teamleitung abgestimmt und protokolliert werden muss. Pairing- und Rotationspläne zielen auf die 14 Aufgaben einzelner Personen, beginnend mit den fünf kritischsten, mit Drills jedes Quartal. Eine Onboarding-Checkliste und ein benannter Buddy verkürzen die Zugriffsverzögerung, und der Plan der ersten Woche enthält eine kleine echte Änderung. Kurse werden von den Teams aus einer Auswahlliste gewählt, und nach 60 Tagen geht eine Nachfrage hinaus. Eine teamübergreifende Community zur Zuverlässigkeit trifft sich monatlich, und Lehren aus Incident-Reviews werden dort geteilt, mit einem Vermerk, wer sie nutzte.

Ein Jahr später beträgt die Tiefe des Cross-Trainings 78 Prozent, die mediane Zeit bis zum ersten Beitrag 19 Tage, die Anwendungsrate von Schulungen 64 Prozent, und die genutzte geschützte Lernzeit liegt bei etwa 7 Prozent der Kapazität. Sechs Lehren aus Reviews wurden von anderen Teams übernommen. Der Trainingsleiter bittet um ein Ziel von 40 Trainingsstunden je Person. Die Leiterin des Betriebs bietet stattdessen Kennzahlen zu Tiefe des Cross-Trainings, Anwendung und Zeit bis zum ersten Beitrag an und erklärt, dass Stunden durch Sitzungen erfüllt werden können, die niemand nutzt. Die Entscheidung wird festgehalten, und das Dashboard lässt die durchschnittlichen Trainingsstunden fallen. Die Zertifizierungsabdeckung wird nur für die Rollen verfolgt, für die Regulierer sie verlangen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Schützen Sie Lernzeit innerhalb eines nachhaltigen Tempos und teilen Sie Lehren durch regelmäßige Reviews. Zu beachten ist, dass Ziele für Trainingsstunden Anwesenheit erzeugen, nicht Lernen.

### KI

KI verändert die Fähigkeiten, die ein Team braucht, etwa KI-Ausgaben zu prüfen, gute Prompts zu schreiben und Grenzen zu verstehen. Messen Sie die Anwendung des Gelernten auf die Arbeit und die Qualität KI-gestützter Arbeit, nicht abgeschlossene Kurse. Zu beachten ist, dass Zertifikate zu KI-Werkzeugen der Praxis hinterherhinken können und Kompetenz nicht beweisen.

### Automatisierung

Automatisieren Sie Lernerinnerungen und Eingaben der Fähigkeitenkarte und messen Sie die Nutzung von Lerninhalten. Zu beachten ist, dass automatisches Ableiten von Fähigkeiten aus Aktivitätsdaten ungenau und aufdringlich sein kann.

### Analytik

Zeigen Sie die Tiefe des Cross-Trainings nach Team mit Zählungen. Die Entscheidung, die dies untermauert, ist, wo Wissen gefährdet ist. Zu beachten ist, dass Fähigkeitenmatrizen veralten; überprüfen Sie sie also.

## Branchenperspektive

**Startup.** Menschen tragen viele Hüte und lernen unter Druck schnell. Schützen Sie etwas Zeit für Lernen, machen Sie Pairing zum Standard und achten Sie auf einzelne Wissensträger. Generalisten einzustellen hilft. Bauen Sie nicht zu früh eine Trainingsabteilung auf.

**Kleinunternehmen.** Budgets sind knapp, und eine Person kann viel abdecken. Nutzen Sie kostengünstiges Lernen: Herstellerdokumentation, Community-Veranstaltungen, Mentoring durch einen vertrauten externen Berater und Cross-Training, wo möglich. Stellen Sie sicher, dass mindestens eine weitere Person kritische Aufgaben bewältigen kann, wenn auch nur grob.

**Großunternehmen.** Größe erlaubt formale Programme, Communities und Karrierepfade. Sie lädt auch zu einheitlichen Anforderungen ein, die niemandem passen. Stellen Sie ein gemeinsames Lernbudget und eine Plattform bereit, lassen Sie Teams wählen, unterstützen Sie interne Communities und messen Sie Fähigkeit nach Team. Richten Sie Zertifizierung am echten Bedarf aus.

**Behörden und öffentlicher Sektor.** Fachkräftemangel, Beschaffungsregeln und Rahmenwerke des öffentlichen Dienstes prägen die Entwicklung. Zertifizierung kann für manche Rollen eine förmliche Anforderung sein. Investieren Sie in Ausbildung und interne Mobilität, bewahren Sie Wissen, wenn Verträge enden, und nutzen Sie Communities über Behörden hinweg, um Praxis zu teilen (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind die Zeit selbst, die Hauptkosten, plus Budgets für Kurse und Veranstaltungen, der Aufwand, die Fähigkeitenkarte zu pflegen, Mentoring-Zeit und etwas Werkzeug für Communities. Pairing und Rotation kosten kurzfristig Durchsatz.

Der Ertrag sind Resilienz gegenüber Abwesenheit und Fluktuation, schnelleres Onboarding, weniger wiederholte Fehler, schnelleres Lösen von Problemen und bessere Bindung bei Menschen, die wachsen. Bauen Sie den Business Case aus Ihren eigenen Daten: die Zahl kritischer Aufgaben, die eine einzelne Person kennt, die Tage, die neue Mitarbeitende bis zur Produktivität brauchen, und die Kosten dieser Zeit, durch abwesende Experten verlängerte Incidents und die Fluktuation bei Personal, das sagt, es habe keinen Raum zum Wachsen. Vermeiden Sie, veröffentlichte Schätzungen zum Ertrag von Schulung zu zitieren, wenn Sie Methode und Passung nicht zurückverfolgen können. Die Kosten des Nicht-Lernens erscheinen spät, als veraltete Fähigkeiten und fragile Services (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Trainingsstunden als Ziel.** Es kauft Anwesenheit. Messen Sie Anwendung und Fähigkeit.
- **Zertifikate als Beweis von Können.** Sie zeigen eine Prüfung zu einem Zeitpunkt. Nutzen Sie anderen Beleg.
- **Lernen in der Freizeit.** Es verbirgt Überstunden und ist unfair. Schützen Sie Zeit in der Arbeitswoche.
- **Selbst eingeschätzte Fähigkeiteninventare zum Ordnen.** Menschen blähen auf oder verbergen. Gründen Sie Karten auf jüngste Arbeit und halten Sie sie auf Teamebene.
- **Heldenexperten.** Eine Person, die alles weiß, ist Risiko und Last. Verbreiten Sie das Wissen.
- **Zentral für alle gewählte Kurse.** Sie passen wenigen. Lassen Sie Teams mit Anleitung wählen.
- **Lernen zuerst absagen.** Es lehrt, dass Lernen optional ist. Schützen Sie es und behandeln Sie Ausnahmen als Entscheidungen.
- **Lehren, die lokal bleiben.** Die Organisation wiederholt Fehler. Teilen Sie sie und verfolgen Sie die Nutzung.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Zeit und Unterstützung | Lernen in der Freizeit | Gelegentliches Trainingsbudget | Geschützte Zeit im Kapazitätsplan; vom Team gewähltes Lernen | Genutzte Zeit verfolgt; Absagen sind Entscheidungen; Budgets folgen dem Bedarf der Teams | Lernzeit und Wachstumspfade über Teams und Partner koordiniert |
| Wissen verbreiten | Experten tragen die Arbeit | Dokumentation existiert | Kritische Aufgaben durch jüngsten Beleg kartiert; Pairing und Drills | Tiefe des Cross-Trainings gesteuert; Onboarding gemessen und verbessert | Wissen fließt frei über Teams, Lieferanten und Communities |
| Lernen bewerten | Anwesenheit zählt | Zufriedenheitsbewertungen für Kurse | Nachfragen zur Anwendung; Zertifizierung wo verlangt | Lehren über Teams geteilt und genutzt; Schulung nach Ergebnissen geändert | Lernergebnisse mit Serviceergebnissen verknüpft und mit Partnern geteilt |

## Checkliste

- [ ] Lernzeit ist in die Teamkapazität eingeplant und wird als genutzt verfolgt.
- [ ] Kritische Aufgaben sind aufgelistet, mit der Angabe, wer jede zuletzt ausführte.
- [ ] Jede kritische Aufgabe hat einen Plan, mindestens zwei geübte Menschen zu erreichen.
- [ ] Die Zeit bis zum ersten Beitrag wird für neue Mitglieder gemessen und danach gehandelt.
- [ ] Communities of Practice und Mentoring werden unterstützt und sind freiwillig.
- [ ] Auf Schulungen folgt eine Frage nach der Anwendung.
- [ ] Zertifizierung wird nur für Rollen mit echter Anforderung verfolgt.
- [ ] Ein Lehrenregister erfasst Teilen und Nutzung über Teams.
- [ ] Fähigkeitsdaten werden auf Teamebene gehalten und nie genutzt, um Einzelne zu ordnen.
- [ ] Lernen hängt nie von unbezahlten Stunden ab.

## KI-Prompts

**Eine Karte kritischer Aufgaben erstellen.**

```text
Our team runs [services]. List the critical tasks that must be done reliably
(for example restoring from backup, rotating credentials, major incident
coordination, risky deployments) and suggest evidence we can use to record
who has done each in the last six months. Propose a simple table and a way to
review it with the team without ranking people. Do not invent our tasks beyond
what I describe. List your assumptions.
```

**Einen Onboarding-Plan entwerfen.**

```text
Design a first-30-days onboarding plan for a new [role] joining a team that runs
[services]. Include access setup, a named buddy, a small real change by the end
of the first week, regular check-ins, and what to measure (time to first
contribution and what slowed it). Keep it supportive and realistic. List your
assumptions and items to adapt to our context.
```

**Eine Schulung nachverfolgen.**

```text
Draft a short follow-up question set to send to people 60 days after they
completed [course or event]. Ask whether and how they applied it, what got in
the way, and what would help, in a way that can be aggregated to team level
without identifying individuals. Suggest how to read the answers and what to
change. List your assumptions.
```

**Das Verbreiten von Wissen planen.**

```text
Task [description] is only done by [one or two people] in our team. Propose a
plan to spread it using pairing, a drill, and documentation, with realistic
timing that protects those people's workload. Suggest how we will know the plan
worked, using evidence of recent work. List your assumptions and risks.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Fähigkeiten- oder Lernkennzahl zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Lernkennzahl angewandte Fähigkeit misst und seinen Manipulationsvektor und seine Leitplanke trägt.

## Wichtigste Erkenntnisse

- Messen Sie angewandte Fähigkeit: wer die kritischen Aufgaben zuletzt ausgeführt hat und wie schnell neue Menschen beitragen.
- Schützen Sie Lernzeit in der Arbeitswoche, innerhalb eines Tempos, das durchgehalten werden kann.
- Verbreiten Sie Wissen mit Absicht durch Pairing, Rotation, Drills und Communities.
- Fragen Sie nach, ob Schulung angewandt wurde, und behandeln Sie Zertifikate als Beleg, nicht als Beweis.
- Teilen Sie Lehren über Teams und verfolgen Sie ihre Nutzung.
- Halten Sie Fähigkeitsdaten auf Teamebene und ordnen Sie nie Einzelne.

## Quellen und weiterführende Literatur

1. Senge, P. M., *The Fifth Discipline: The Art and Practice of the Learning Organization*, Doubleday, 1990.
2. Wenger, E., *Communities of Practice: Learning, Meaning, and Identity*, Cambridge University Press, 1998.
3. Polanyi, M., *The Tacit Dimension*, Doubleday, 1966.
4. Ericsson, K. A., Krampe, R. T., and Tesch-Römer, C., "The role of deliberate practice in the acquisition of expert performance," *Psychological Review*, 100(3), 1993.
5. Kirkpatrick, D. L., and Kirkpatrick, J. D., *Evaluating Training Programs: The Four Levels*, 3rd ed., Berrett-Koehler, 2006.
6. Skelton, M., and Pais, M., *Team Topologies*, IT Revolution, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Professional certification](https://en.wikipedia.org/wiki/Professional_certification).
9. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
10. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
11. Wikipedia, [T-shaped skills](https://en.wikipedia.org/wiki/T-shaped_skills).
12. Wikipedia, [Cross-training (business)](https://en.wikipedia.org/wiki/Cross-training_(business)).
13. Wikipedia, [Community of practice](https://en.wikipedia.org/wiki/Community_of_practice).
14. Wikipedia, [Mentorship](https://en.wikipedia.org/wiki/Mentorship).
15. Wikipedia, [Learning organization](https://en.wikipedia.org/wiki/Learning_organization).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
