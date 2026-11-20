# Kennzahlen für Zusammenarbeit und Übergaben

**Arbeit verlangsamt sich und die Qualität sinkt überall dort, wo sie den Besitzer wechselt. Messen Sie also die Übergaben, das Warten dazwischen und die Abhängigkeit von einzelnen Personen und nutzen Sie die Zahlen, um die richtigen Menschen zusammenzubringen, statt zu zählen, wer mit wem spricht.**

## Überblick und Motivation

Die Prinzipien des Agilen Manifests sagen, dass Fachleute aus dem Geschäft und Entwickler während des gesamten Projekts täglich zusammenarbeiten müssen. Die zugrunde liegende Beobachtung ist alt und belastbar: Der meiste Verzug in einer Serviceorganisation entsteht nicht dadurch, dass Menschen langsam arbeiten. Er entsteht dadurch, dass Arbeit zwischen Menschen wartet. Eine Anfrage wandert vom Service Desk zu einem Second-Line-Team, zu einem Anwendungsteam, zu einem Datenbankadministrator, und bei jedem Schritt reiht sie sich in eine Warteschlange ein, verliert Kontext und riskiert, zurückgeschickt zu werden. Die Beteiligten mögen jeweils schnell sein. Das System ist langsam.

Das IT-Service-Management (ITSM), wie es ITIL kodifiziert, organisiert Support seit Langem in Stufen und Teams, mit Eskalation als Mechanismus, ein Problem zu jemandem zu bringen, der es lösen kann. Diese Struktur hat Vorteile: Spezialisierung, klare Verantwortung und kontrollierten Zugriff. Sie erzeugt auch Übergaben, und Übergaben kosten. Agile und DevOps-Praxis antworten, indem sie funktionsübergreifende Teams bilden, die mehr der Arbeit von Anfang bis Ende tragen, und indem sie Zusammenarbeit in Echtzeit fördern. Die beiden Traditionen kommen zu ähnlichen Schlüssen: weniger Übergaben, kürzeres Warten dazwischen und Menschen, die das Problem lösen können, arbeiten gemeinsam daran.

Mehrere Ideen helfen bei der Messung.

- **Übergaben und Warteschlangen.** Jedes Mal, wenn Arbeit von einem Team zum anderen geht, wartet sie typischerweise in einer Warteschlange. Die Wartezeit ist oft viel größer als die Arbeitszeit. Darum ist die Flusseffizienz, die zuvor eingeführt wurde, meist niedrig (siehe Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz). Ein [Engpass](https://en.wikipedia.org/wiki/Bottleneck_(production)) ist eine Stelle begrenzter Kapazität in einem Prozess und bestimmt den Durchsatz des Ganzen.
- **Struktur prägt Kommunikation.** [Conways Gesetz](https://en.wikipedia.org/wiki/Conway%27s_law) besagt, dass Organisationen Systeme entwerfen, die ihre eigenen Kommunikationsstrukturen abbilden. Auch das Umgekehrte ist praktisch: Wer ein System mit weniger Abhängigkeiten will, ordnet Teams so an, dass die Abhängigkeiten zwischen ihnen sinken. Teamgrenzen erzeugen Übergaben, und Übergaben prägen die Architektur.
- **Abhängigkeiten.** Eine [Abhängigkeit](https://en.wikipedia.org/wiki/Dependency_(project_management)) ist eine Beziehung, in der ein Arbeitspaket nicht fortfahren kann, bis ein anderes fertig ist. Abhängigkeiten zwischen Teams sind eine Hauptquelle von Verzug, und sie lassen sich kartieren, zählen und verringern.
- **Koordinationskosten wachsen mit der Zahl der Menschen.** [Brooks' Gesetz](https://en.wikipedia.org/wiki/Brooks%27s_law) aus Frederick Brooks' Essays zu Softwareprojekten beobachtet, dass das Hinzufügen von Menschen zu einem verspäteten Projekt es später machen kann, teils wegen zusätzlichen Kommunikationsaufwands. Mehr Menschen in einem Gespräch sind nicht automatisch besser.
- **Abhängigkeit von Einzelnen.** Der [Bus-Faktor](https://en.wikipedia.org/wiki/Bus_factor) ist die Zahl der Menschen, die ausfallen müssten, um ein Projekt zu stoppen, meist genutzt, um auf Risiko hinzuweisen, wenn Wissen in einem Kopf sitzt. Er ist eine Eigenschaft der Wissensverteilung, keine Bewertung einer Person.

Zusammenarbeitskennzahlen haben eine dunkle Seite. Nachrichten, Meetings oder Netzwerkverbindungen als Maß für Zusammenarbeit zu zählen ist leicht und verlockend und gleitet schnell in die Überwachung der Kommunikation von Menschen ab. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt für die Gruppe und für den Datenschutz: Wird „Zusammenarbeit“ zum Ziel, erzeugen Menschen sichtbare Aktivität, und wird sie zur Überwachung, hören sie auf, offen zu sprechen (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen). Die Kennzahlen hier betrachten daher Arbeitselemente, Übergaben und Abhängigkeiten und Muster auf Teamebene. Sie lesen keine Nachrichten und ordnen keine Einzelnen.

Dieses Thema knüpft an die Flusskennzahlen von Teil 2, die Incident- und Anfragekennzahlen von Teil 3 und die Lieferantenübergaben des vorigen Teils an (siehe Thema 8.4, Kennzahlen für Lieferanten und Verträge).

## Leitprinzipien

- **Die Arbeit messen, nicht die Gespräche.** Übergaben, Wartezeiten und Abhängigkeiten sind Eigenschaften von Arbeitselementen und Teams.
- **Weniger Übergaben schlagen schnellere Übergaben.** Die beste Übergabe ist die, die nicht stattfindet.
- **Die Menschen zusammenbringen.** Zusammenarbeit in Echtzeit beseitigt oft eine ganze Kette von Warten.
- **Abhängigkeiten sichtbar machen und verringern.** Kartieren Sie sie, zählen Sie sie und ändern Sie Teamgrenzen oder Architektur dort, wo sie am meisten schmerzen.
- **Wissen bewusst verbreiten.** Einzelne Wissensträger sind Risiken, und Teilen ist eine Entwurfstätigkeit.
- **Fokus schützen.** Zusammenarbeit, die jede Stunde mit Meetings füllt, zerstört die Zeit, die Arbeit zu tun.
- **Stakeholder kontinuierlich einbeziehen.** In Stunden beantwortete Fragen dienen besser als in wöchentlichen Meetings gesammelte Antworten.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Anzahl der Übergaben | Wie oft ein Arbeitselement vor dem Abschluss das besitzende Team wechselt | Median und 85. Perzentil der Team-zu-Team-Übergaben je abgeschlossenem Element, nach Elementtyp | Übergaben je Element | ITSM- oder Tracker-Zuweisungshistorie, nach Team aggregiert | Incident-Management; Serviceanfragen-Management; Change-Befähigung | Funktionsübergreifende Teams tragen Arbeit von Anfang bis Ende | Monatlich |
| Wartezeitanteil nach Übergabe | Anteil der verstrichenen Zeit eines Elements, die nach einer Übergabe wartend verbracht wird, bevor die Arbeit weitergeht | Zeit zwischen Übergabe und erster Handlung des empfangenden Teams / gesamte verstrichene Zeit, Median über Elemente | Prozent | Zeitstempel von Zuweisung und Aktivität | Incident-Management; Serviceanfragen-Management | Flusseffizienz; Wartezeit in der Warteschlange | Monatlich |
| Neuzuweisungsrate | Anteil der Elemente, die mehr als zweimal zwischen Teams weitergereicht oder an ein früheres Team zurückgegeben werden | mehr als zweimal neu zugewiesene oder zurückgegebene Elemente / abgeschlossene Elemente | Prozent | Zuweisungshistorie | Incident-Management; Problemmanagement | Nacharbeit und hin- und hergeschobene Arbeit | Monatlich |
| Verzug durch Abhängigkeiten | Zeit, die Elemente blockiert verbringen, weil sie auf ein anderes Team warten | Median und 85. Perzentil der Tage in einem Zustand „von anderem Team blockiert“, mit benannter Abhängigkeit | Tage | Blockiert-Zustand im Tracker und Abhängigkeitsfeld | Change-Befähigung; Release- und Deployment-Management | Alter blockierter Arbeitselemente | Monatlich |
| Rate gemeinsamer Lösungen | Anteil der Incidents, die von Menschen mehrerer Teams in Echtzeit gemeinsam gelöst wurden, ohne sequenzielle Eskalation | Incidents mit erfasster Echtzeit-Zusammenarbeit (zum Beispiel ein gemeinsamer Kanal oder Anruf), die ohne weitere Übergabe gelöst wurden / Incidents geeigneter Priorität | Prozent | Incident-Datensätze mit Zusammenarbeits-Tag | Incident-Management; Major-Incident-Management | Swarming bei Problemen | Monatlich |
| Wissensabdeckung | Anteil kritischer Komponenten, die mindestens eine genannte Zahl von Teammitgliedern betreiben und ändern kann | kritische Komponenten mit mindestens der Zielzahl an Menschen, die sie betreiben und ändern können / kritische Komponenten | Prozent | Vom Team gepflegte Fähigkeiten- und Verantwortungskarte | Wissensmanagement; Servicekontinuitätsmanagement | Gemeinsames Eigentum und kollektives Code-Eigentum | Vierteljährlich |
| Reaktionszeit der Stakeholder | Zeit von der Frage eines Teams an einen Stakeholder bis zu einer nutzbaren Antwort | Median und 85. Perzentil der Stunden von der erfassten Frage bis zur erfassten Antwort | Stunden | Fragenprotokoll oder Tracker-Feld für offene Fragen | Service-Level-Management; Beziehungsmanagement zum Geschäft | Kontinuierliche Einbeziehung von Stakeholdern | Monatlich |

Aggregieren Sie auf Team-, Warteschlangen- oder Serviceebene und berichten Sie nie je Person. Die Anzahl der Übergaben schließt automatische Zuweisungen aus, die das besitzende Team nicht ändern. Der Wartezeitanteil beginnt, wenn das Element dem empfangenden Team zugewiesen wird, und endet bei seiner ersten erfassten Handlung. Die Wissensabdeckung nutzt das eigene Urteil des Teams, wer eine Komponente betreiben kann, mit dem Team überprüft, und ordnet nie Einzelne. Zusammenarbeitsdaten stammen aus Element-Tags und Datensätzen, nicht aus dem Lesen von Nachrichten.

## Empfehlungen

### Die Übergaben kartieren

**1. Zeichnen Sie den Weg eines typischen Elements.** Wählen Sie eine häufige Art von Anfrage oder Incident und verfolgen Sie ihren Weg vom ersten Kontakt bis zur Lösung: jedes Team, jede Warteschlange, jedes Warten. Nutzen Sie die Tracker-Historie für echte Beispiele, nicht das offizielle Prozessdiagramm. Die Karte zeigt, wo Arbeit wartet und wo sie hin- und hergeschoben wird. Teilen Sie sie mit den beteiligten Teams und bitten Sie sie, die Verschwendung zu benennen, die sie sehen.

**2. Messen Sie Übergaben und Wartezeiten aus der Historie der Arbeitselemente.** Nutzen Sie Zeitstempel von Zuweisung und Aktivität, um Anzahl der Übergaben, Wartezeitanteil und Neuzuweisungsrate je Elementtyp zu berechnen. Schauen Sie auf die Verteilung: Die meisten Elemente gehen vielleicht einmal weiter, während ein langer Schwanz viele Male hin- und hergeschoben wird. Im Schwanz liegen der größte Verzug und die meiste Frustration.

**3. Lesen Sie die Daten mit den Menschen, die die Arbeit tun.** Eine hohe Neuzuweisungsrate kann unklare Verantwortung, fehlende Informationen oder legitime Triage widerspiegeln. Fragen Sie die Teams, bevor Sie schließen. Sie wissen, warum Elemente hin- und hergeschoben werden und was es stoppen würde.

### Übergaben und Warten verringern

**4. Verlagern Sie Fähigkeit zur Arbeit.** Wo viele Elemente für eine einfache Handlung zu einem zweiten Team gehen, fragen Sie, ob das erste Team das Wissen, den Zugriff oder die Automatisierung bekommen könnte, es selbst zu tun. Self-Service und Runbooks können ganze Übergaben beseitigen (siehe Thema 3.7, Kennzahlen für Self-Service und Automatisierung). Achten Sie darauf, dass das Verlagern von Arbeit das erste Team nicht einfach überlastet.

**5. Nutzen Sie Zusammenarbeit statt sequenzieller Eskalation.** Bringen Sie bei komplexen oder dringenden Incidents die zuständigen Menschen in Echtzeit zusammen, mit einer koordinierenden Person, statt das Ticket durch Stufen zu reichen. Diese Praxis, oft Swarming genannt, beseitigt das Warten und den Kontextverlust, den gestufte Eskalation erzeugt. Verfolgen Sie die Rate gemeinsamer Lösungen und schauen Sie, ob sich Ergebnisse und Zufriedenheit verbessern (siehe Thema 3.4, Kennzahlen für Major Incidents).

**6. Klären Sie Verantwortung an den Grenzen.** Nennen Sie für jeden Service und jede Komponente, wer sie besitzt, wie man ihn erreicht und was er bei einer Übergabe braucht. Eine kurze Vorlage der nötigen Informationen, mit dem empfangenden Team vereinbart, verringert Rückgaben wegen fehlender Details. Überprüfen Sie Fälle von Neuzuweisung, um Lücken in der Verantwortung zu finden.

**7. Verringern Sie Abhängigkeiten dort, wo sie am meisten schmerzen.** Kartieren Sie die Abhängigkeiten zwischen Teams, zählen Sie, wie oft jede Verzug verursacht, und gehen Sie die schlimmsten an. Optionen sind, die Architektur zu ändern, einem Team die Fähigkeit zu geben, auf die es ständig wartet, oder Teams um Services herum neu zu organisieren. [Funktionsübergreifende Teams](https://en.wikipedia.org/wiki/Cross-functional_team), die die Fähigkeiten enthalten, einen Service von Anfang bis Ende zu liefern, minimieren Abhängigkeiten und bringen kontinuierliche Zusammenarbeit in die Struktur. Conways Gesetz legt nahe, Struktur und Entwurf gemeinsam zu ändern.

### Wissen und Einbeziehung verbreiten

**8. Machen Sie die Wissensabdeckung sichtbar und verbessern Sie sie.** Führen Sie eine einfache Karte kritischer Komponenten und der Menschen, die jede betreiben und ändern können. Suchen Sie nach Komponenten, die eine Person kennt, und planen Sie Pairing, Dokumentation und Rotation, um das Wissen zu verbreiten. Behandeln Sie das Ergebnis als Risiko für das System. Ziel sind Resilienz und ein nachhaltiges Tempo für die Menschen, die am meisten wissen, denn wer der einzige Experte ist, kann keinen Urlaub nehmen.

**9. Halten Sie Stakeholder kontinuierlich im Bild.** Vereinbaren Sie, wie Stakeholder mit Fragen erreicht werden und wie schnell Antworten kommen sollen. Ein Team, das eine Woche auf eine Entscheidung zu einem Detail wartet, wartet auf den Stakeholder, und die Kosten sind echt. Erfassen Sie Fragen und Antworten, messen Sie die Reaktionszeit und nutzen Sie sie in Gesprächen mit Stakeholdern über ihre Einbeziehung.

**10. Schützen Sie Zeit für konzentrierte Arbeit.** Zusammenarbeit sollte zweckgerichtet sein. Überprüfen Sie die Meetings, die den Kalender füllen, und fragen Sie bei jedem, welche Entscheidung es stützt. Verringern Sie die Zahl der Menschen in Gesprächen, die sie nicht brauchen, im Sinne von Brooks' Gesetz. Koppeln Sie dies mit den Fokuskennzahlen im früheren Thema zur Teamgesundheit (siehe Thema 9.1, Teamgesundheit und Entwicklererlebnis).

### Ehrlich bleiben

**11. Messen Sie nicht das Kommunikationsvolumen.** Nachrichten, Meetings oder Netzwerkverbindungen zu zählen sagt wenig darüber, ob Menschen gut zusammenarbeiten, und lädt zur Überwachung Einzelner ein. Entscheidet sich Ihr Team, Analyse sozialer Netzwerke zu nutzen, um zu verstehen, wie Information fließt, tun Sie es mit Einwilligung, auf Gruppenebene und für das eigene Lernen des Teams, und nie, um Einzelne zu bewerten.

**12. Überprüfen Sie Übergabekennzahlen mit Teams und Lieferanten.** Teilen Sie die Muster über die beteiligten Teams und Lieferanten und vereinbaren Sie ein oder zwei gemeinsame Verbesserungen. Verfolgen Sie, ob Übergaben und Wartezeiten sinken. Nehmen Sie die Kennzahlen an Lieferantengrenzen in gemeinsame Reviews auf (siehe Thema 8.4, Kennzahlen für Lieferanten und Verträge).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Anzahl der Übergaben | Elemente einem Team zugewiesen halten, während andere die Arbeit tun; an eine gemeinsame Warteschlange neu zuweisen, um nicht zu zählen | Tatsächliche Aktivität nach Team prüfen; Übergaben nach Aktivität zählen, nicht allein nach Zuweisung |
| Wartezeitanteil nach Übergabe | Eine erste Handlung erfassen, die nur eine Bestätigung ist; dem richtigen Team spät zuweisen | „Erste Handlung“ als substanziellen Schritt definieren; mit Zufriedenheit und Lösungszeit vergleichen |
| Neuzuweisungsrate | Sich weigern neu zuzuweisen, auch wenn falsch; Elemente schließen und unter einem anderen Team wiedereröffnen | Lösungsqualität und Wiedereröffnungsrate; hin- und hergeschobene Elemente stichprobenartig prüfen |
| Verzug durch Abhängigkeiten | Den Blockiert-Zustand nicht erfassen; die falsche Abhängigkeit benennen | Mit Zykluszeit und Alter der Elemente vergleichen; das Abhängigkeitsfeld mit Teams überprüfen |
| Rate gemeinsamer Lösungen | Jeden Incident als gemeinsam taggen; gemeinsame Kanäle ohne echte Arbeit anlegen | Prüfen, dass der Anruf oder Kanal die lösenden Menschen einschloss; Lösungszeit und Ergebnisse |
| Wissensabdeckung | Menschen listen, die es theoretisch könnten; die Karte aufblähen | Beleg durch Pairing oder Übung; fragen, wer die letzte Änderung tatsächlich durchführte |
| Reaktionszeit der Stakeholder | Fragen spät erfassen; eine Antwort als erhalten markieren, wenn sie nicht nutzbar ist | Stakeholder bestätigt, dass die Antwort nutzbar ist; Fragen stichprobenartig prüfen |

Ein gesunder Befund sind weniger Übergaben bei häufigen Elementen, kürzeres Warten an den verbleibenden Grenzen, weniger hin- und hergeschobene Elemente, schrumpfende Abhängigkeiten, mehr Incidents, die Menschen gemeinsam lösen, kritische Komponenten, die mehrere Menschen kennen, und Stakeholder, die in Stunden antworten.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Gestufter Support mit Eskalation | Spezialisierung, Kontrolle des Zugriffs | Übergaben, Warten, Kontextverlust |
| Funktionsübergreifende Teams | Weniger Übergaben, gemeinsames Eigentum | Braucht breite Fähigkeiten; kann Spezialisten doppeln |
| Gemeinsame Lösung | Schneller, besseres Lernen | Zieht mehrere Menschen zugleich ab; braucht Koordination |
| Sequenzielle Eskalation | Effiziente Nutzung von Spezialisten | Langsamer bei komplexen Problemen |
| Zentralisierte Spezialistenteams | Tiefe der Expertise, konsistente Standards | Engpässe, Warteschlangen |
| Eingebettete Spezialisten | Schneller Zugang | Isolation; uneinheitliche Standards |
| Schwere Meeting-Kultur | Gemeinsames Bewusstsein | Frisst Fokus; verlangsamt Arbeit |
| Asynchrone schriftliche Kommunikation | Bewahrt Fokus; hält Entscheidungen fest | Langsamer bei dringenden oder mehrdeutigen Angelegenheiten |

Die Antwort in Worten ist, Spezialisten dort zu halten, wo Tiefe zählt, Menschen bei komplexen oder dringenden Problemen in Echtzeit zusammenzubringen, Übergaben durch Fähigkeit und klare Verantwortung zu verringern und Meetings mit geschütztem Fokus auszubalancieren.

## Fragen für die Diskussion im Team

**1. Verfolgen Sie den letzten Incident oder die letzte Anfrage, die zwischen Teams hin- und herging. Wo wartete sie, und warum?**
Nutzen Sie die Historie des Elements. Markieren Sie jede Übergabe und jedes Warten. Die Moderation sollte nach fehlenden Informationen, unklarer Verantwortung und Warteschlangen suchen, die niemand beobachtet. Einigen Sie sich auf eine Änderung, die das Hin und Her gestoppt hätte.

**2. Auf welches Team warten wir am häufigsten, und was braucht es von uns, um schneller zu sein?**
Listen Sie die Abhängigkeiten und den Verzug auf, den sie verursachen. Laden Sie das andere Team ins Gespräch ein oder bereiten Sie Fragen an es vor. Einigen Sie sich auf eine Änderung der Übergabevorlage oder der Arbeitsvereinbarung.

**3. Was können nur einer oder zwei von uns, und was geschieht, wenn sie weg sind?**
Nennen Sie die Komponenten oder Aufgaben. Fragen Sie, welcher Plan das Wissen verbreiten würde: Pairing, Dokumentation, Rotation. Die Moderation sollte darauf achten, dies als Risiko für das System und als Frage der Arbeitslast der Experten zu behandeln.

**4. Wann funktionierte es besser, ein Problem gemeinsam in Echtzeit zu lösen, als es weiterzureichen?**
Erinnern Sie sich an ein Beispiel. Was ließ es funktionieren: die richtigen Menschen, eine koordinierende Person, eine gemeinsame Sicht? Besprechen Sie, wann dieser Ansatz zu nutzen ist und wie man ihn ermöglicht, etwa mit einem ständigen Kanal und Regeln, wer teilnimmt.

**5. Wie lange warten wir auf Antworten unserer Stakeholder, und was kostet das?**
Schauen Sie auf offene Fragen und ihr Alter. Besprechen Sie, was Antworten bremst: Verfügbarkeit, unklare Fragen oder unklare Befugnis. Einigen Sie sich mit den Stakeholdern auf eine Erwartung und einen Weg, sie zu verfolgen.

**6. Welche unserer Meetings ließen sich durch eine schriftliche Notiz oder eine Entscheidung ersetzen?**
Listen Sie die regelmäßigen Meetings auf und fragen Sie bei jedem, welche Entscheidung es stützt und wer dabei sein muss. Sagen Sie eines ab oder kürzen Sie es. Einigen Sie sich, einen Zeitblock ohne Meetings zu schützen.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams halten viele der Abhängigkeiten und spüren das Warten. Sie sollten ihre Abhängigkeiten kartieren, um die Fähigkeiten bitten, auf die sie ständig warten, Wissen teilen, um einzelne Ausfallpunkte zu vermeiden, und Stakeholder nah halten. Eine funktionsübergreifende Zusammensetzung beseitigt oft die größten Verzögerungen.

### Service- und Betriebsteams

Betriebs- und Supportteams sitzen im Zentrum der Übergaben: Sie empfangen, leiten weiter und lösen. Sie sollten klare Verantwortungsinformationen pflegen, Zusammenarbeit in Echtzeit für schwere Probleme nutzen und Übergaben genau erfassen. Sie wissen, welche Grenzen den größten Schmerz verursachen, und können sagen, welche Information Rückgaben verhindern würde.

### Führung und Governance

Führungskräfte prägen die Struktur, die Übergaben erzeugt. Sie sollten beim Entwurf von Teams und bei der Finanzierung auf Übergabe- und Abhängigkeitsdaten schauen, funktionsübergreifende Teams unterstützen, wo sie helfen, und Kennzahlen des Kommunikationsvolumens meiden. Die Governance sollte wiederholten Verzug an einer Grenze als strukturelle Frage behandeln, die zu beheben ist.

### Kunden und Nutzer

Nutzer erleben Übergaben als Herumgereichtwerden, Sich-Wiederholen und Warten. Ihnen sollte gesagt werden, wer ihr Problem besitzt, und sie sollten informiert bleiben. Ihr Erlebnis, hin- und hergeschoben zu werden, ist ein direktes Maß dafür, wie gut Zusammenarbeit funktioniert, und ihr Feedback sollte neben den Zahlen gelesen werden (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Gruppe eines nationalen Einzelhändlers betreibt einen Service Desk, ein Infrastrukturteam, ein Anwendungsplattform-Team und mehrere Produktteams. Nutzer berichten, dass Anfragen zum Kassensystem zu lange dauern. Die Zahlen unten sind illustrativ.

Der Service-Manager verfolgt 60 jüngere Anfragen. Die mediane Anfrage durchläuft 3 Teams und das 85. Perzentil 6. Im Medianfall werden 71 Prozent der verstrichenen Zeit nach einer Übergabe wartend verbracht, bevor das empfangende Team handelt. 22 Prozent der Anfragen werden mehr als zweimal neu zugewiesen, oft zwischen dem Infrastruktur- und dem Plattformteam, die jeweils glauben, das andere besitze das Problem. Die blockierte Zeit des Wartens auf ein anderes Team hat einen Median von 3 Tagen bei Anfragen, die Zertifikate betreffen, und 8 Tage im 85. Perzentil. Das Wissen der Plattform zur Zertifikatserneuerung sitzt bei einem Engineer, und zwei weitere kritische Komponenten kennt jeweils nur eine Person. Stakeholder im Filialbetrieb brauchen im Median 26 Stunden, um Fragen des Lieferteams zu beantworten.

Die Gruppe vereinbart mit den Teams vier Änderungen. Eine kurze Verantwortungstabelle nennt, welches Team jede Komponente des Kassenservices besitzt und welche Informationen eine Übergabe enthalten muss. Der Service Desk erhält Runbook-Zugriff und Automatisierung für Zertifikatserneuerungen, was eine häufige Übergabe beseitigt. Für Incidents hoher Priorität richtet die Gruppe einen ständigen Kanal ein und eine Regel, dass die koordinierende Person die zuständigen Menschen sofort hinzuzieht, statt in Stufen zu eskalieren. Das Plattformteam stellt dem Zertifikatsprozess eine zweite und dritte Person zur Seite und plant ähnliches Pairing für die zwei anderen Komponenten, mit im Plan geschützter Zeit. Das Lieferteam und der Filialbetrieb einigen sich auf eine Antwort am selben Tag bei blockierenden Fragen, in einem Fragenprotokoll verfolgt.

Drei Monate später durchläuft die mediane Anfrage 2 Teams, der Wartezeitanteil fällt auf 38 Prozent und die Neuzuweisungsrate auf 9 Prozent. Zertifikatsbezogene Anfragen haben eine mediane blockierte Zeit von unter einem Tag. Die Wissensabdeckung bei kritischen Komponenten steigt von 52 auf 81 Prozent. Die mediane Reaktionszeit des Filialbetriebs fällt auf 7 Stunden. Der IT-Leiter wird um eine Kennzahl gebeten, wie viel Teams kommunizieren. Der Service-Manager erklärt, dass das Nachrichtenvolumen wenig darüber sagt, ob Arbeit fließt, und dass sein Verfolgen Vertrauen untergraben könnte, und bietet stattdessen die Übergabe- und Wartekennzahlen an. Die Entscheidung wird festgehalten, und die Verantwortungstabelle wird in die Servicebeschreibung aufgenommen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Bringen Sie die richtigen Menschen früh zusammen und überprüfen Sie Übergaben regelmäßig mit Stakeholdern. Zu beachten ist, dass das Zählen von Meetings oder Nachrichten Aktivität misst, nicht Zusammenarbeit.

### KI

KI-Agenten und -Assistenten fügen neue Übergaben zwischen Menschen und Software hinzu. Messen Sie Übergaben zwischen KI und Menschen, einschließlich des Anteils, der zur Korrektur zurückkehrt. Zu beachten ist, dass eine Übergabe an eine KI, die nicht fertigstellen kann, eine verborgene Schleife erzeugt.

### Automatisierung

Erfassen Sie Neuzuweisungen und Wartezeiten automatisch aus dem Tracker und messen Sie automatisiertes Routing an Fehlleitungen. Zu beachten ist, dass Kommunikationsmetadaten über Einzelne Überwachung sind; halten Sie die Analyse also auf Teamebene.

### Analytik

Zeigen Sie Anzahl der Übergaben und Wartezeitanteil nach Wertstrom mit Zählungen. Die Entscheidung, die dies untermauert, ist, welche Übergabe zu entfernen oder umzugestalten ist. Zu beachten ist, dass das Zählen von Übergaben ohne ihre Ursache dazu führt, Teams aus dem falschen Grund zusammenzulegen.

## Branchenperspektive

**Startup.** Kleine Teams arbeiten natürlich zusammen, und Übergaben erscheinen, wenn Spezialisten entstehen. Halten Sie Teams so lange wie möglich funktionsübergreifend, dokumentieren Sie Verantwortung leichtgewichtig und achten Sie auf Wissen, das eine Person hält. Führen Sie gestuften Support nicht zu früh ein.

**Kleinunternehmen.** Ein oder zwei Personen können alles abdecken, und das größte Risiko ist die Abhängigkeit von ihnen. Teilen Sie Wissen über einfache Runbooks und sorgen Sie für Vertretung bei Abwesenheit. Übergaben an Lieferanten sind die Hauptgrenze, halten Sie also klare Kontakte und Eskalationswege.

**Großunternehmen.** Größe erzeugt viele Teams, Ebenen und Lieferanten, und Übergaben vervielfachen sich. Kartieren Sie die häufigsten Elementpfade, entwerfen Sie Teamgrenzen um Services herum und nutzen Sie Koordinationsrollen für teamübergreifende Incidents. Teilen Sie Übergabedaten über Teams, damit Grenzen gemeinsame Aufmerksamkeit bekommen.

**Behörden und öffentlicher Sektor.** Verantwortung ist oft über Behörden, Auftragnehmer und rechtliche Grenzen geteilt, und Übergaben berühren Beschaffung und förmliche Genehmigung. Machen Sie die Verantwortungstabelle ausdrücklich, nutzen Sie gemeinsame Reviews mit Auftragnehmern und gemeinsame Kanäle für Incidents, die Grenzen überschreiten (siehe Thema 8.4, Kennzahlen für Lieferanten und Verträge).

## Business Case: Motive, ROI und TCO

Die Kosten sind der Aufwand, die Zuweisungshistorie zu extrahieren und zu analysieren, die Zeit der Teams, Wege zu verfolgen und Verantwortung zu vereinbaren, die Kosten des Cross-Trainings und jedes Werkzeug für Zusammenarbeit in Echtzeit. Teams umzustrukturieren ist eine größere Entscheidung mit eigenen Kosten.

Der Ertrag sind kürzere Zeiten bis zur Lösung und Lieferung, weniger Nacharbeit durch hin- und hergeschobene Elemente, geringeres Risiko durch einzelne Wissensträger und ein ruhigeres Arbeitsumfeld. Bauen Sie den Business Case aus Ihren eigenen Daten: den Anteil der verstrichenen Zeit, der mit Warten verbracht wird, die Zahl der Elemente, die hin- und hergehen, die Kosten von Verzug an der schlimmsten Grenze und die Wirkung der Abwesenheit von Schlüsselpersonen bei früheren Incidents. Vermeiden Sie, veröffentlichte Zahlen zu den Kosten von Übergaben zu zitieren, wenn Sie Quelle und Kontext nicht zurückverfolgen können. Zählen Sie die Kosten der Änderungen und vergleichen Sie sie mit dem beseitigten Verzug (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Nachrichten oder Meetings zählen.** Es belohnt Lärm und lädt zur Überwachung ein. Messen Sie den Fluss der Arbeit.
- **Die Geschwindigkeit jeder Übergabe optimieren.** Ziel sind weniger Übergaben. Entfernen Sie sie, wo Sie können.
- **Dem empfangenden Team das Warten vorwerfen.** Die Ursache sind oft die Warteschlange und die Struktur. Schauen Sie auf das System.
- **Standardmäßig eskalieren.** Sequenzielle Stufen fügen Warten hinzu. Bringen Sie Menschen bei komplexen Problemen zusammen.
- **Unklare Verantwortung.** Elemente gehen hin und her. Veröffentlichen Sie eine Verantwortungstabelle und halten Sie sie aktuell.
- **Heldenexperten.** Einzelne Wissensträger sind Risiko und Last. Verbreiten Sie Wissen bewusst.
- **Meetings als Zusammenarbeit.** Sie können Arbeit verdrängen. Prüfen Sie sie gegen Entscheidungen.
- **Wissensabdeckung als individuelle Bewertung behandeln.** Sie wird zur Rangliste. Halten Sie sie eine Systemkennzahl.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Sichtbarkeit der Übergaben | Anekdoten | Wege für einige Services gezeichnet | Anzahl der Übergaben, Wartezeitanteil und Neuzuweisungen aus der Historie gemessen | Kennzahlen mit Teams überprüft und mit Ergebnissen verknüpft | Gemeinsame Sicht über Teams und Lieferanten; Grenzen aus Daten umgestaltet |
| Übergaben verringern | Standardmäßig eskalieren | Einige Runbooks und Vorlagen | Verantwortungstabellen; Fähigkeit zum ersten Team verlagert; Zusammenarbeit bei schweren Problemen | Abhängigkeiten kartiert und verringert; gemeinsame Lösung verfolgt | Teams um Services organisiert mit minimalen Abhängigkeiten über die Organisation |
| Wissen und Stakeholder | Experten tragen alles | Informelles Teilen | Wissensabdeckung kartiert; Fragen der Stakeholder erfasst | Abdeckung und Reaktionszeiten gesteuert; Pairing geplant | Wissen und Entscheidungen fließen frei über Teams, Lieferanten und Stakeholder |

## Checkliste

- [ ] Der Weg eines typischen Elements wurde aus echter Tracker-Historie verfolgt.
- [ ] Anzahl der Übergaben, Wartezeitanteil und Neuzuweisungsrate werden je Elementtyp gemessen.
- [ ] Die Verantwortung für jeden Service und jede Komponente ist veröffentlicht und aktuell.
- [ ] Eine Übergabevorlage nennt die Informationen, die das empfangende Team braucht.
- [ ] Komplexe oder dringende Incidents nutzen Zusammenarbeit in Echtzeit mit einer koordinierenden Person.
- [ ] Teamübergreifende Abhängigkeiten sind kartiert, und die schlimmsten werden verringert.
- [ ] Die Wissensabdeckung kritischer Komponenten ist kartiert, mit einem Plan, sie zu verbreiten.
- [ ] Fragen der Stakeholder werden erfasst, und Reaktionszeiten werden überprüft.
- [ ] Keine Kennzahl zählt Nachrichten, Meetings oder individuelle Kommunikation.
- [ ] Ergebnisse werden mit den beteiligten Teams und Lieferanten geteilt.

## KI-Prompts

**Einen Pfad von Arbeitselementen analysieren.**

```text
Here are anonymized assignment histories for [number] [type of item]: item,
sequence of teams, timestamps of assignment and first action: [paste]. Compute
or describe handoff counts and waits, identify the common paths and the long
tail, and suggest likely reasons for waiting and bouncing, with questions to ask
the teams. Do not infer anything about individuals. List your assumptions.
```

**Eine Verantwortungstabelle entwerfen.**

```text
Draft an ownership table for the service [name] with these components and teams:
[list]. For each component include owning team, how to reach them, what a
handoff must contain, and the escalation route. Flag components where ownership
looks unclear or shared. Keep it to one page. List your assumptions and questions
for the teams.
```

**Das Verbreiten von Wissen planen.**

```text
Our critical components and the number of people able to operate each are:
[paste]. Propose a plan to spread knowledge for components known to fewer than
[number] people: pairing, documentation, drills, and rotation. Suggest how to
protect the experts' workload during the plan and how to track progress
without ranking individuals. List your assumptions and risks.
```

**Einen gemeinsamen Incident-Ansatz entwerfen.**

```text
Design a lightweight approach for real-time collaborative resolution of
priority incidents in [type of organization] with [teams]. Include how to open
a shared space, who coordinates, who is invited, what is recorded, and how to
avoid pulling in too many people. Include measures to tell whether it helps.
List your assumptions and cautions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Übergabe- oder Zusammenarbeitskennzahl zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Zusammenarbeitskennzahl Arbeit statt Einzelne misst, mit Manipulationsvektor und Leitplanke.

## Wichtigste Erkenntnisse

- Der meiste Verzug sitzt im Warten zwischen Übergaben, also messen Sie Anzahl der Übergaben, Wartezeitanteil und Neuzuweisungen aus der Historie der Arbeitselemente.
- Verringern Sie Übergaben, indem Sie Fähigkeit zur Arbeit verlagern, Verantwortung klären und Abhängigkeiten kartieren und kappen.
- Bringen Sie die richtigen Menschen bei komplexen oder dringenden Problemen in Echtzeit zusammen.
- Verbreiten Sie das Wissen über kritische Komponenten und behandeln Sie einzelne Wissensträger als Systemrisiko.
- Halten Sie Stakeholder kontinuierlich einbezogen, mit schnellen Antworten auf blockierende Fragen.
- Messen Sie nie das Kommunikationsvolumen und bewerten Sie nie Einzelne nach Zusammenarbeit.

## Quellen und weiterführende Literatur

1. Conway, M. E., "How Do Committees Invent?" *Datamation*, 14(4), 1968.
2. Skelton, M., and Pais, M., *Team Topologies: Organizing Business and Technology Teams for Fast Flow*, IT Revolution, 2019.
3. Brooks, F. P., *The Mythical Man-Month: Essays on Software Engineering*, Addison-Wesley, 1975 (anniversary edition 1995).
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
8. Wikipedia, [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law).
9. Wikipedia, [Dependency (project management)](https://en.wikipedia.org/wiki/Dependency_(project_management)).
10. Wikipedia, [Brooks's law](https://en.wikipedia.org/wiki/Brooks%27s_law).
11. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Cross-functional team](https://en.wikipedia.org/wiki/Cross-functional_team).
