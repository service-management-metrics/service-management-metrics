# Kennzahlen für Wissensmanagement

**Messen Sie Wissen daran, ob es im Moment des Bedarfs genutzt wird und Vertrauen genießt, nicht daran, wie viel davon existiert: Beobachten Sie Verknüpfungsrate, Wiederverwendung, Aktualität und Auffindbarkeit zusammen und behandeln Sie jede Artikelzahl als Frage an die Arbeit statt als Wert.**

## Überblick und Motivation

Ein Serviceteam sammelt jeden Tag Wissen an: wie man einen Service wiederherstellt, was eine verwirrende Fehlermeldung wirklich bedeutet, welche Umgehung beim letzten Mal hielt. [Wissensmanagement](https://en.wikipedia.org/wiki/Knowledge_management) ist die Disziplin, dieses Wissen der nächsten Person verfügbar zu machen, die es braucht. In ITIL 4 (der 2019 von AXELOS veröffentlichten Ausgabe des Rahmenwerks und der breit dokumentierten Grundlage dieses Buches) ist Wissensmanagement eine eigene Praktik, und [ITIL](https://en.wikipedia.org/wiki/ITIL) erwartet zudem, dass sie Incident-Bearbeitung, Problembearbeitung und den Service Desk stützt. Dieses Thema behandelt, wie man erkennt, ob diese Unterstützung echt ist.

Der größte Teil des nutzbaren Ergebnisses von Wissensmanagement landet in einer [Wissensdatenbank](https://en.wikipedia.org/wiki/Knowledge_base): einem Speicher aus Artikeln, Runbooks, Datensätzen bekannter Fehler und kurzen Anleitungsantworten. Ein [Runbook](https://en.wikipedia.org/wiki/Runbook) ist eine schriftliche Folge von Schritten für einen Routinevorgang oder eine Wiederherstellung. Artikel sind der explizite Teil dessen, was ein Team weiß. Das [implizite Wissen](https://en.wikipedia.org/wiki/Tacit_knowledge) erfahrener Menschen, etwa das Gespür, dass ein Alarm Rauschen ist, lässt sich nicht vollständig aufschreiben, und keine Kennzahl in diesem Thema misst es unmittelbar.

In der ITIL-Sicht ist Wissen ein verwaltetes Gut mit einem Lebenszyklus: erstellt, geprüft, veröffentlicht, genutzt und stillgelegt. In der agilen Sicht muss Dokumentation ihren Platz verdienen, Gespräch und Paarung tragen sehr viel, und geschriebenes Wissen ist ein Nebenprodukt des Abschließens von Arbeit. Beide Sichten stimmen im Test überein: Hat das Wissen jemandem geholfen, ein echtes Problem schneller oder besser zu lösen, als er es ohne getan hätte?

Die Methode, die beide Sichten am unmittelbarsten verbindet, ist [Knowledge-Centered Service (KCS)](https://en.wikipedia.org/wiki/Knowledge-centered_support), eine Methodik des Consortium for Service Innovation. In KCS wird Wissen als Teil der Problemlösung erfasst und verbessert, nicht danach. Menschen arbeiten in zwei Schleifen. Die Lösungsschleife (Solve Loop) ist der Moment der Lösung: einen vorhandenen Artikel suchen, ihn wiederverwenden und verbessern, wenn er gefunden wird, und einen erstellen, wenn nicht. Die Entwicklungsschleife (Evolve Loop) ist der längere Zyklus, der untersucht, wie sich das Wissen bewährt, und das System darum verbessert. KCS schlägt auch eigene Indikatoren vor, etwa die Rate, mit der gelöste Fälle mit Artikeln verknüpft werden. Dieses Thema fasst diese Ideen herstellerneutral zusammen; Teams, die KCS förmlich einführen, sollten den Praxisleitfaden des Consortiums selbst lesen.

Die Zahl der Artikel in einer Wissensdatenbank ist ein Bestand, kein Ergebnis, und sie steigt mit Vernachlässigung so leicht wie mit Sorgfalt. Die Kennzahlen unten sind stattdessen an einen Moment der Nutzung gebunden: ein geschlossener Fall, eine Suche, die Reaktion eines Lesers. Auch sie lassen sich verbiegen (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Kontakt- und Bearbeitungsmessgrößen gehören zum [Service Desk](https://en.wikipedia.org/wiki/Service_desk) (siehe Thema 3.1, Kennzahlen für den Service Desk). Volumen und Wiederholungsmuster stammen aus Incident-Daten (siehe Thema 3.2, Incident-Aufkommen und Priorität). Der Self-Service-Erfolg, bei dem Nutzer Artikel ohne Agenten konsumieren, wird gesondert behandelt (siehe Thema 3.7, Kennzahlen für Self-Service und Automatisierung). Dieses Thema bleibt bei der Gesundheit des Wissens selbst und seiner Nutzung durch die Menschen, die Probleme lösen.

## Leitprinzipien

- **Nutzung am Ort der Arbeit messen.** Ein Artikel, der mit einem gelösten Fall verknüpft oder durch eine Suche gefunden wird, ist ein Beleg für Wert. Ein Artikel, der bloß existiert, nicht.
- **Im Arbeitsfluss erfassen.** Wissen, das während der Lösung geschrieben wird, ist frischer und billiger als Wissen aus einer gesonderten Dokumentationsaktion, die Kennzahlen sollten also das Erfassen als Teil des Abschließens von Arbeit belohnen.
- **Aktualität gegen Nutzung lesen.** Alt ist nicht dasselbe wie falsch. Prüfaufwand gehört auf Artikel, die oft genutzt werden, nicht gleichmäßig verteilt über einen Katalog überwiegend ungelesener Seiten.
- **Stichproben auf Relevanz ziehen.** Eine Verknüpfung zwischen Fall und Artikel beweist nur, dass jemand die Verknüpfung erstellt hat. Eine kleine menschliche Stichprobe, ob der Artikel wirklich passte, sagt, ob die Verknüpfung etwas bedeutet.
- **Teams und Wissensbereiche beschreiben, nie Einzelpersonen.** Beitragszahlen je Person machen aus einem gemeinsamen Gut einen Wettbewerb und bringen Menschen bei, Müll zu schreiben (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).
- **Jede Volumenkennzahl mit einem Qualitätssignal koppeln.** Verknüpfungsrate mit Relevanz, Artikelerstellung mit Duplikaten, Wiederverwendung mit Leserfeedback.

## Kennzahlendefinitionen

Die Tabelle listet sieben Kennzahlen. Zeitfenster (etwa der Überprüfungszeitraum für die Aktualität) sind Entscheidungen, die ein Team trifft und aufschreibt; kein Wert hier ist ein Benchmark. Durchgängig bedeutet „Fall“ einen Incident- oder Serviceanfrage-Datensatz im ITSM-Werkzeug (IT-Service-Management), und Major Incidents werden gesondert berichtet, damit sie die Verhältnisse nicht verzerren (siehe Thema 3.4, Kennzahlen für Major Incidents).

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Wissensverknüpfungsrate | Anteil der gelösten Fälle, die im Moment der Lösung mindestens einen verknüpften Wissensartikel haben | Im Zeitraum gelöste Fälle mit mindestens einem verknüpften Artikel / im Zeitraum gelöste Fälle. Zählt das Lösungsdatum; schließt Major Incidents, als Duplikate geschlossene Fälle und ohne menschliche Arbeit automatisch geschlossene Fälle aus | Prozent | ITSM-Werkzeug: Verknüpfungstabellen von Fall und Artikel | Wissensmanagement; Incident-Management | Die Definition of Done umfasst das Erfassen des Gelernten | Wöchentlich für das Team; monatlich zur Überprüfung |
| Wiederverwendungsquote | Anteil der Artikelverknüpfungen, die auf einen vorhandenen Artikel zeigen statt auf einen, der in diesem Fall erstellt wurde | Verknüpfungen zu Artikeln, die vor der Eröffnung des Falls existierten / alle in gelösten Fällen im Zeitraum gesetzten Artikelverknüpfungen. Schließt nach dem Schließen des Falls hinzugefügte Verknüpfungen aus | Prozent | ITSM-Werkzeug: Erstellungsdatum des Artikels gegen Eröffnungsdatum des Falls | Wissensmanagement; kontinuierliche Verbesserung | Wiederverwendung statt Nacharbeit; gemeinsamer Besitz an Codebasis und Dokumentation | Monatlich |
| Aktualität der Artikel | Anteil der genutzten Artikel, die innerhalb eines genannten Überprüfungsfensters überprüft oder genutzt und als korrekt bestätigt wurden | Genutzte Artikel mit einem Überprüfungs- oder Bestätigt-genutzt-Datum innerhalb des Fensters / genutzte Artikel. Ein Artikel ist genutzt, wenn er in den letzten 12 Monaten (Teamentscheidung) mit einem Fall verknüpft oder von einem Leser angesehen wurde; Entwürfe und stillgelegte Artikel sind ausgeschlossen | Prozent | Metadaten der Wissensdatenbank und Aufrufprotokoll | Wissensmanagement; Service Desk | Backlog-Refinement der Dokumentation; Retrospektiv-Maßnahmen | Monatlich |
| Rate der Suchen ohne Treffer | Anteil der Wissenssuchen, die keinen Artikel liefern | Suchen ohne Treffer / alle Suchen. Schließt Suchen durch Bots und automatische Prüfungen aus; zählt jede Suche einmal, auch wenn sie innerhalb einer Minute wiederholt wird | Prozent | Suchprotokoll der Wissensdatenbank oder des Portals | Wissensmanagement; Service Desk; Serviceanfragen-Management | Entdeckung ungedeckten Nutzerbedarfs; Backlog-Eingabe | Wöchentlich |
| Hilfreich-Rate | Anteil des Leserfeedbacks, der sagt, dass der Artikel half, gezeigt mit der Rücklaufquote | Hilfreich-Stimmen / (Hilfreich-Stimmen + Nicht-hilfreich-Stimmen) für Artikel im Zeitraum; Rücklaufquote = Feedback-Stimmen / Artikelaufrufe | Prozent, mit Rücklaufquote | Feedback-Widget der Wissensdatenbank und Aufrufprotokoll | Wissensmanagement; Kundenerlebnis | Feedback aus dem Stakeholder-Review zur Dokumentation | Monatlich |
| Zeit bis zur Veröffentlichung | Verstrichene Zeit von der Anlage eines Artikelentwurfs bis zu dem Moment, in dem er geprüft und für sein Publikum sichtbar ist | Die Uhr startet bei der Anlage des Entwurfs und stoppt bei der Veröffentlichung (oder beim ersten genehmigten sichtbaren Zustand). Schließt Zeit im Zustand „in Wartestellung, wartet auf Produkt-Release“ aus; berichtet als Median und 85. Perzentil | Tage (Median und 85. Perzentil) | Workflow-Verlauf der Wissensdatenbank | Wissensmanagement | Durchlaufzeit eines Arbeitselements von Beginn bis Erledigt (siehe Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz) | Monatlich |
| Breite der Beiträge | Verteilung von Artikelerstellung und -verbesserung über das Team, ohne Personen zu benennen | Verschiedene Beitragende, die im Zeitraum einen Artikel erstellt oder verbessert haben / Teammitglieder, die im Zeitraum Fälle gelöst haben. Nur für ein Team berichtet, nie als Namensliste | Prozent | Bearbeitungsverlauf der Wissensdatenbank, verbunden mit der Teamzugehörigkeit | Wissensmanagement; kontinuierliche Verbesserung | Kollektive Verantwortung; Paarung und Swarming | Vierteljährlich |

Die Wissensverknüpfungsrate hat eine Uhr, die man leicht übersieht. Die Verknüpfung muss bei der Lösung des Falls existieren, nicht wenn jemand eine Woche später aufräumt, denn späte Verknüpfung misst Aufräumen und sagt nichts über die Nutzung während der Lösung. Die Wiederverwendungsquote hängt von einem verlässlichen Erstellungsdatum des Artikels ab. Werden Artikel migriert oder in großer Zahl importiert, werden ihre Erstellungsdaten zurückgesetzt, und die Quote führt in die Irre, bis die Migration markiert ist.

## Empfehlungen

### Entscheiden, wofür das Wissen da ist

**1. Binden Sie jede Wissenskennzahl an einen Anwendungsfall.** Nennen Sie die Menschen, denen das Wissen dient: Service-Desk-Analysten, die beim Erstkontakt lösen, Bereitschaftsingenieure, die einen Alarm bearbeiten, oder Nutzer, die sich selbst helfen. Jedes Publikum braucht andere Messgrößen. Ein Runbook für eine Bereitschaftsingenieurin wird daran beurteilt, ob die Schritte den Service wiederherstellten, ein Artikel zum Passwort-Reset daran, ob der Nutzer aufhörte, den Desk zu kontaktieren. Halten Sie das in Ihrem Register fest (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

**2. Beginnen Sie mit Verknüpfungsrate und Relevanz, nicht mit Artikelzahlen.** Die Verknüpfungsrate zeigt, ob Wissen überhaupt in den Moment der Lösung gelangt. Koppeln Sie sie von Anfang an mit einer kleinen monatlichen Stichprobe, in der eine Person 20 oder 30 verknüpfte Fälle liest und beurteilt, ob der Artikel passte. Eine Verknüpfungsrate von 70 Prozent mit der Hälfte irrelevanter Verknüpfungen ist schlimmer als eine von 40 Prozent mit ehrlichen Verknüpfungen, denn die erste verbirgt die Wissenslücke, die die zweite offenlegt.

**3. Trennen Sie „es existiert kein Artikel“ von „Artikel existiert, wurde aber nicht gefunden“.** Schließt ein Fall ohne Verknüpfung, unterscheiden sich die Gründe und die Korrekturen. Fügen Sie eine kurze Schließauswahl hinzu, etwa „kein Artikel vorhanden“ und „Artikel nicht gefunden“, und berichten Sie sie als Anteile der unverknüpften Fälle. Das erste weist auf zu schreibenden Inhalt hin, das zweite auf Suche, Benennung und Struktur. Halten Sie die Auswahl optional, wo sie den Desk bremsen würde, und ziehen Sie stattdessen Stichproben.

### Wissen erfassen, während die Arbeit endet

**4. Machen Sie das Erfassen zum Teil der Definition of Done.** In einem agilen Team ist ein Arbeitselement, das ändert, wie sich ein Service verhält, nicht erledigt, bevor Runbook, Datensatz bekannter Fehler oder Hilfeartikel aktualisiert sind. Im Service Desk ist ein Fall, der Entdeckung brauchte, nicht gelöst, bevor die Entdeckung erfasst oder ein vorhandener Artikel verbessert ist. Das ist die KCS-Idee, in der Lösungsschleife zu arbeiten, und sie hält die Kosten des Schreibens niedrig, weil die schreibende Person den Kontext frisch hat.

**5. Erlauben Sie einen leichtgewichtigen Entwurfszustand.** Viele Teams verlieren Wissen, weil jeder Artikel ein schweres Review bestehen muss, bevor ihn jemand sieht. KCS-artige Praxis unterscheidet einen Artikel in Arbeit, für das Team sichtbar, von einem validierten, für ein breiteres Publikum sichtbar. Messen Sie die Zeit bis zur Veröffentlichung für beide Stufen getrennt, als Mediane und 85. Perzentil, damit langsame Reviews als Warteschlange sichtbar werden und nicht als vage Klage (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

**6. Bevorzugen Sie Verbessern vor Erstellen.** Ein wachsender Haufen nahezu doppelter Artikel macht die Suche schlechter und die Aktualität schwerer zu pflegen. Beobachten Sie die Wiederverwendungsquote neben der Erstellungszahl, und steigt die Erstellung, während die Wiederverwendung fällt, suchen Sie nach Duplikaten. Machen Sie Zusammenführen und Stilllegen leicht und sichtbar und zählen Sie eine Zusammenführung als positiven Beitrag.

### Wissen aktuell und auffindbar halten

**7. Überprüfen Sie die Artikel, die genutzt werden.** Konzentrieren Sie Prüfaufwand dort, wo die Nutzung hoch ist. Sortieren Sie genutzte Artikel danach, wie oft sie verknüpft oder angesehen wurden, und setzen Sie für die oberste Gruppe ein kürzeres Überprüfungsfenster als für den langen Auslauf. Ein veralteter Artikel, den niemand liest, kostet wenig, ein veralteter Artikel, der in einem Drittel der Lösungen erscheint, kann hunderte Fälle in die Irre führen. Berichten Sie die Aktualität der stark genutzten Gruppe als eigene Zeile, damit der Durchschnitt der ganzen Datenbank sie nicht verbirgt.

**8. Behandeln Sie fehlgeschlagene Suchen als Backlog-Elemente.** Lesen Sie jeden Monat die häufigsten Suchen ohne Treffer und entscheiden Sie bei jeder, ob ein Artikel zu schreiben, ein Synonym hinzuzufügen, ein Artikel umzubenennen oder anzuerkennen ist, dass die Frage woanders hingehört. So wird aus einer Kennzahl eine kurze, konkrete Liste, die das Team abarbeiten kann. Sie zeigt auch echtes Vokabular, denn Nutzer und Analysten verwenden selten die Wörter des Servicekatalogs.

**9. Lesen Sie die Worte hinter den Stimmen.** Die Hilfreich-Rate ist billig und verrauscht. Rücklaufquoten sind meist niedrig und neigen zu starken Meinungen. Zeigen Sie die Rücklaufquote neben der Hilfreich-Rate und lesen Sie die geschriebenen Kommentare zu den meistgesehenen Artikeln in einem ständigen Review. Ein einzelner Kommentar wie „Schritt 4 existiert in der neuen Version nicht mehr“ ist mehr wert als tausend unbeschriftete Stimmen.

**10. Verbinden Sie Wissen mit Problemen und Postmortems.** Ein wiederkehrender Incident, der immer wieder mit demselben Artikel gelöst wird, ist ein Signal für das Problemmanagement, das nach der zugrunde liegenden Ursache sucht und den Bedarf an dem Artikel beseitigen kann (siehe Thema 4.1, Kennzahlen für das Problemmanagement). Datensätze bekannter Fehler und Postmortem-Lehren sind Wissensgüter mit eigenem Lebenszyklus (siehe Thema 4.2, Kennzahlen für Postmortems und Lernen, und Thema 4.6, Technische Schulden und bekannte Fehler). Sehen Sie sich jedes Quartal die zehn meistverknüpften Artikel an und fragen Sie, welche durch Beheben der Ursache stillgelegt werden sollten.

### Steuern ohne zu ordnen

**11. Berichten Sie Beiträge auf Teamebene.** Die Breite der Beiträge sagt, ob Wissensarbeit geteilt oder auf zwei Menschen konzentriert ist. Das ist ein sehenswertes Risiko, denn es ist dasselbe Muster wie ein [Bus-Faktor](https://en.wikipedia.org/wiki/Bus_factor) von zwei. Sie darf nie zu einer Rangliste von Autoren werden, die die Menge der Bearbeitungen belohnen und Menschen beibringen würde, Artikel zu zerlegen oder triviale Änderungen zu machen. Zeigt sich eine Konzentration, behandeln Sie sie als Teamgespräch über Zeit, Unterstützung und die Erlaubnis zu schreiben (siehe Thema 9.4, Kennzahlen für Fähigkeiten und Lernen).

**12. Verabschieden Sie Messgrößen, die nicht mehr helfen.** Handelt niemand auf die Verknüpfungsrate, verlagern Sie die Aufmerksamkeit auf Relevanz oder die Aktualität der stark genutzten Gruppe. Protokollieren Sie Definitionsänderungen mit Grund, denn eine geänderte Formel bricht die Trendlinie (siehe Thema 1.5, Datenquellen und Instrumentierung).

## Manipulationsvektoren und Leitplanken

Jede Kennzahl der Definitionstabelle erscheint hier. Wissenskennzahlen sind besonders exponiert, weil das Verknüpfen oder Prüfen ein schneller Klick ist, während der echte Wert im Inhalt liegt.

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Wissensverknüpfungsrate | Vor dem Schließen jedem Fall irgendeinen Artikel anhängen, oft einen generischen oder sehr populären; in großer Zahl nachträglich verknüpfen | Monatliche Relevanzstichprobe verknüpfter Fälle; Anteil der Verknüpfungen, die auf dieselben wenigen Artikel gehen; Verknüpfungszeitstempel gegen Lösungszeitstempel |
| Wiederverwendungsquote | Für jeden Fall einen neuen Artikel erstellen und sofort verknüpfen, damit er beim nächsten Mal als Wiederverwendung zählt; oder nie erstellen, damit die Quote perfekt aussieht | Duplikatrate, durch periodische Suche gefunden; Anteil der mit dem Grund „kein Artikel vorhanden“ geschlossenen Fälle |
| Aktualität der Artikel | Artikel als geprüft markieren, ohne sie zu prüfen; das Prüfdatum durch triviale Änderungen zurücksetzen; nur leicht zu prüfende Artikel zählen | Stichprobe kürzlich geprüfter Artikel gegen den echten Service getestet; Hilfreich-Rate und geschriebene Kommentare zu denselben Artikeln |
| Rate der Suchen ohne Treffer | Vage oder Sammelartikel hinzufügen, die zu jeder Anfrage passen; Schlüsselwörter stopfen; unbequeme Suchbegriffe aus dem Protokoll ausschließen | Klick, gefolgt von einem Kontakt zum selben Thema binnen kurzer Zeit; Hilfreich-Rate; manuelles Lesen der häufigsten Suchbegriffe |
| Hilfreich-Rate | Nur zufriedene Leser zur Abstimmung auffordern; die Option „nicht hilfreich“ verbergen; aus dem Team heraus abstimmen | Rücklaufquote und Zusammensetzung der Antwortenden mit der Rate gezeigt; geschriebene Kommentare; Kontaktrate nach dem Lesen des Artikels |
| Zeit bis zur Veröffentlichung | Einen dünnen Stub veröffentlichen, um die Uhr zu stoppen; einen Artikel in Stücke zerlegen; Entwürfe in einen Zustand verschieben, den die Uhr ausschließt | Relevanz und Hilfreich-Rate kürzlich veröffentlichter Artikel; Zahl und Alter von Entwürfen in ausgeschlossenen Zuständen |
| Breite der Beiträge | Triviale Änderungen vornehmen, damit alle als Beitragende erscheinen; Menschen bitten, einen Satz hinzuzufügen, um eine Quote zu erfüllen | Größe und Substanz der Änderungen stichprobenartig geprüft; Wiederverwendung und Hilfreich-Rate der beigesteuerten Artikel; keine Namen im Bericht |

Ein gesunder Befund zeigt verknüpfte Artikel, von denen eine menschliche Stichprobe bestätigt, dass sie relevant sind, eine Wiederverwendungsquote, die mit der Reife der Datenbank steigt, eine stark genutzte Menge von Artikeln mit kürzlichen verifizierten Prüfungen, eine kurze Liste von Suchfehlschlägen, die das Team abarbeitet, und über das Team verteilte Beiträge. Einige Fälle ohne Artikel, weil sie wirklich neu waren, sind Zeichen einer ehrlichen Datenbank, nicht einer scheiternden.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Auf eine hohe Verknüpfungsrate zielen | Schiebt Erfassung und Wiederverwendung in die tägliche Routine; einfach zu verstehen | Lädt zu bedeutungslosen Verknüpfungen ein; verbirgt Lücken, wo kein Artikel existiert |
| Stichproben auf Relevanz von Hand ziehen | Zeigt, ob Verknüpfungen etwas bedeuten; baut gemeinsame Standards auf | Kostet Analystenzeit; kleine Stichproben sind verrauscht; hängt vom Urteil der prüfenden Person ab |
| Alles nach festem Plan überprüfen | Leicht zu planen und zu prüfen; gleichmäßig angewandt | Verwendet Aufwand auf Artikel, die niemand liest; vernachlässigt die stark genutzten |
| Nach Nutzung überprüfen | Lenkt Aufwand dorthin, wo falsches Wissen am meisten schadet | Braucht verlässliche Aufruf- und Verknüpfungsdaten; Artikel im langen Auslauf können unbemerkt verrotten |
| Förmliche KCS-Einführung | Gibt eine kohärente, erprobte Menge von Praktiken und Indikatoren | Braucht anhaltende Investition, Coaching und Werkzeugunterstützung; schwer für ein sehr kleines Team |
| Gespräch und Paarung statt Artikel | Überträgt Urteil und Kontext; geringer Aufwand | Skaliert nicht auf Schichten, Urlaube und Fluktuation; Wissen geht mit Menschen |

Messen Sie gerade genug, um zu sehen, ob Wissen genutzt wird und Vertrauen genießt, und stecken Sie den gesparten Aufwand in Inhalt. Für ein kleines Team ist eine Verknüpfungsrate mit einer monatlichen Relevanzstichprobe und einer kurzen Liste von Suchfehlschlägen ein vollständiges Programm. Für einen großen Desk zahlt sich die volle Menge nur aus, wenn jemand die Überprüfung besitzt und darauf handelt.

## Fragen für die Diskussion im Team

**1. Als wir zuletzt einen schweren Fall gelöst haben, woher kam das Wissen, und wohin ging es danach?**
Wählen Sie einen jüngeren Fall, der echte Mühe kostete, und verfolgen Sie den Weg dessen, was gelernt wurde. Wurde ein Artikel gefunden, eine Kollegin gefragt oder die Antwort von Grund auf erarbeitet? Fragen Sie, ob die nächste Person mit demselben Problem die Antwort in unter fünf Minuten finden würde. Die Moderation sollte nach der Lücke zwischen dem suchen, was das Team weiß, und dem, was die Wissensdatenbank enthält.

**2. Wenn wir unsere Verknüpfungsrate nächsten Monat auf ein genanntes Ziel hoben, wie könnten wir das tun, ohne jemandem zu helfen?**
Machen Sie die Manipulationsliste ausdrücklich und behandeln Sie sie als Entwurfseingabe statt als Beschuldigung. Verbreitete Antworten sind, einen generischen Artikel zu verknüpfen, in großer Zahl beim Schließen zu verknüpfen und den populärsten Artikel zu wählen. Fragen Sie bei jeder Antwort, welche Leitplanke aus der Tabelle sie auffangen würde und wie schnell. Die Moderation sollte mit mindestens einer neuen Prüfung, etwa einer monatlichen Relevanzstichprobe, und einem Eigner dafür gehen.

**3. Auf welche fünf Artikel verlassen wir uns am meisten, und wann wurden sie zuletzt am echten Service verifiziert?**
Sehen Sie sich die am häufigsten verknüpften und angesehenen Artikel an und lesen Sie zwei davon gemeinsam laut. Das Gespräch zeigt oft, dass die Artikel mit der größten Wirkung die mit der geringsten Pflege sind, was das Argument ist, nach Nutzung zu überprüfen.

**4. Wonach suchen Menschen, das wir nicht haben?**
Bringen Sie die häufigsten Suchen ohne Treffer und die Gründe unverknüpfter Fälle mit. Gruppieren Sie sie in zu schreibende Artikel, hinzuzufügende Wörter und Fragen, die zu einem anderen Team gehören. Die Moderation sollte eine kurze Liste der nächsten drei Elemente festhalten und planen, wie sie in der normalen Arbeit geschrieben werden, nicht in einem Sonderprojekt.

**5. Wer schreibt unser Wissen, und was kostet es ihn?**
Besprechen Sie das Erfassen ehrlich. Gilt Schreiben als Teil der Arbeit oder als Zusatzarbeit nach der Arbeit? Fragen Sie, was bremst: eine schwere Vorlage, ein langsames Review, die Angst, falsch zu liegen, oder keine Zeit am Ende einer harten Schicht. Die Moderation sollte sich von der Jagd auf Einzelne abwenden und Änderungen bei Werkzeugen, Zeit und Erlaubnis ansteuern.

**6. Welche unserer Artikel sollten wir nicht mehr brauchen?**
Nehmen Sie die am häufigsten wiederverwendeten Artikel und fragen Sie, welche wiederkehrende Ursache sie umgehen. Ein Reset-Verfahren, das 200-mal im Monat genutzt wird, kann Symptom eines Produktfehlers, eines verwirrenden Bildschirms oder einer fehlenden Automatisierung sein. Entscheiden Sie, welche Elemente an das Problemmanagement oder das Produktteam gehen und welche zu automatisieren sind (siehe Thema 3.7, Kennzahlen für Self-Service und Automatisierung). Die Moderation sollte festhalten, dass das beste Ergebnis guter Wissensarbeit manchmal weniger Artikel sind.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams erzeugen einen Großteil des Wissens, das ein Service brauchen wird: wie sich eine Funktion verhält, was ein neuer Fehler bedeutet, wie man zurückrollt. Wird dieses Wissen vor dem Release nicht erfasst, lernen Service Desk und Bereitschaftsteams es auf die harte Tour. Nehmen Sie Runbook und Hilfeartikel in die Definition of Done auf und beobachten Sie Verknüpfungsrate und Suchfehlschläge der Services, die Ihnen gehören, als Feedback. Wird derselbe Artikel oft verknüpft, behandeln Sie das als Fehlermeldung zum Produkt, nicht als Erfolg der Dokumentation.

### Service- und Betriebsteams

Service-Desk- und Betriebsteams sind die Hauptproduzenten und -konsumenten der Wissensdatenbank, die Kennzahlen sind also überwiegend ihre zum Nutzen. Arbeiten Sie die Lösungsschleife ehrlich ab: erst suchen, wiederverwenden und verbessern, erstellen, wenn nichts passt. Nutzen Sie die Verknüpfungsrate mit einer Relevanzstichprobe und lesen Sie Suchen ohne Treffer als Backlog. Vermeiden Sie jede Rangliste von Autoren oder Bearbeitern, denn die Wissensdatenbank ist ein gemeinsames Werkzeug, und persönliche Zählungen beschädigen sie (siehe Thema 3.1, Kennzahlen für den Service Desk).

### Führung und Governance

Führungskräfte entscheiden, ob Wissensarbeit Zeit bekommt, und entscheiden damit die Qualität des Wissens. Fragen Sie nach der Relevanzstichprobe und der Aktualität der stark genutzten Artikel, bevor Sie nach der Artikelzahl fragen. Widerstehen Sie Zielen für Verknüpfungsrate oder Artikelerstellung ohne Leitplanke und rechnen Sie damit zu hören, wenn die Zahlen aus guten Gründen fallen, etwa wegen einer Zusammenführung von Duplikaten. Finanzieren Sie die Überprüfung stark genutzter Artikel und die Korrekturen, die Artikel überflüssig machen.

### Kunden und Nutzer

Nutzer begegnen Wissen über Suche, ein Portal, einen Chatbot oder die Antwort, die ihnen ein Analyst gibt. Sie bemerken, ob die erste Antwort korrekt ist und ob sie sich wiederholen müssen. Ihr eigenes Feedback zu Artikeln, ihre Suchen, die leer ausgehen, und ihre wiederholten Kontakte sind die besten Leitplanken für alles in diesem Thema. Werden Nutzer gebeten, Artikel zu bewerten, sagen Sie ihnen, was mit dem Feedback geschieht, und handeln Sie sichtbar darauf (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßes Versicherungsunternehmen betreibt einen internen IT-Service-Desk mit etwa einem Dutzend Analysten, der Mitarbeitende in mehreren Standorten unterstützt. Der Desk teilt eine Wissensdatenbank mit zwei Produktteams, denen die Schadenanwendung und das Dokumentenportal gehören. Alle Zahlen in diesem Beispiel sind illustrativ.

Die Führung hat um eine bessere Lösung beim Erstkontakt gebeten (siehe Thema 3.1, Kennzahlen für den Service Desk) und setzt ein Ziel für die Wissensverknüpfungsrate von 60 Prozent, nach illustrativen 38 Prozent. Binnen sechs Wochen zeigt das Dashboard 64 Prozent. Die Desk-Leitung ist nicht überzeugt, weil Analysten weiter klagen, keine Antworten zu finden, und eine Leiterin eines Produktteams erwähnt, dass drei der Artikel, die ihr gehören, bei den meisten geschlossenen Fällen auftauchen.

Das Team führt ein Manipulations-Review und eine Relevanzstichprobe durch. Es liest 30 verknüpfte Fälle, zufällig aus dem Vormonat gezogen, und beurteilt, ob der Artikel zum Fall passte. In einer illustrativen Zählung gehen 11 der 30 Verknüpfungen auf einen generischen Artikel „So erfassen Sie ein Ticket“ oder einen allgemeinen Netzwerküberblick, die das Problem nicht ansprachen. Es stellt auch fest, dass die Verknüpfungen Sekunden vor dem Schließen des Falls gesetzt wurden, ein Muster, das auf Gewohnheit statt Nutzung deutet. Die Desk-Leitung sieht sich die Wiederverwendungsquote an, die gestiegen ist, und den Anteil unverknüpfter Fälle mit dem Grund „kein Artikel vorhanden“, der auf fast nichts gefallen ist, weil Analysten nun den nächstliegenden Artikel wählen. Die Lücke im Wissen ist unsichtbar geworden.

Das Team trifft drei Entscheidungen. Erstens wird das Verknüpfungsziel zurückgezogen und durch eine relevanzbereinigte Sicht ersetzt: Die Verknüpfungsrate wird neben dem stichprobenartig ermittelten Anteil relevanter Verknüpfungen berichtet, und der Schließgrund „kein Artikel vorhanden“ wird leicht wählbar gemacht und nicht als Versagen behandelt. Zweitens werden die Suchen ohne Treffer jeden Monat gelesen, und die obersten fünf werden zu den nächsten Schreibaufgaben, geteilt über den Desk. Drittens werden die 20 meistverknüpften Artikel binnen eines Monats auf Aktualität überprüft, im Besitz des zuständigen Produktteams, und jeder Artikel, der mit mehr als einem Viertel der Fälle eines Services verknüpft ist, geht als Kandidat für eine dauerhafte Korrektur an das Problemmanagement (siehe Thema 4.1, Kennzahlen für das Problemmanagement).

Zwei Monate später ist die Schlagzeilen-Verknüpfungsrate auf illustrative 51 Prozent zurückgefallen, was sich wie eine schlechte Nachricht anfühlt. Die stichprobenartig ermittelte Relevanz ist in illustrativen Zahlen von 63 auf 85 Prozent gestiegen, die Rate der Suchen ohne Treffer ist gefallen, und ein wiederkehrendes Anmeldeproblem mit dem Dokumentenportal wurde an der Ursache behoben, was drei Artikel stilllegte. Die Leitung bittet die Führung, das Programm an Relevanz und stillgelegten Umgehungen zu messen, nicht an der rohen Verknüpfungsrate.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Behandeln Sie Wissen als Nebenprodukt des Lösens von Problemen, mit kurzem Feedback von Nutzern, ob ein Artikel half. Zu beachten ist, dass Ziele für die Artikelzahl dünne, duplizierte Inhalte erzeugen.

### KI

KI kann Artikel entwerfen, Fragen aus der Wissensdatenbank beantworten und Lücken aufzeigen, was Artikelzahlen und Nutzung erhöht, während die Qualität fallen kann. Koppeln Sie Verknüpfungsrate und Wiederverwendung mit der Hilfreich-Rate und mit dem Anteil der von KI entworfenen Artikel, die ein Mensch vor der Veröffentlichung geprüft hat. Zu beachten ist, dass ein veralteter oder falscher Artikel, den eine KI selbstsicher ausspielt, den Fehler skaliert.

### Automatisierung

Erfassen Sie Such-, Aufruf- und Verknüpfungsereignisse automatisch und automatisieren Sie Aktualitätserinnerungen an Eigner. Messen Sie die Automatisierung daran, wie viele Erinnerungen zu einer Aktualisierung führen. Zu beachten ist, dass automatisches Ablaufen, das Artikel unveröffentlicht, nützlichen Inhalt entfernen kann.

### Analytik

Nutzen Sie Suchprotokolle, um Suchen ohne Treffer zu sehen, und zeigen Sie die Hilfreich-Rate mit der Zahl der Antworten. Die Entscheidung, die dies untermauert, ist, welche Artikel zu schreiben, zu beheben oder stillzulegen sind. Zu beachten ist, dass Aufrufe eines Artikels nicht dasselbe sind wie erhaltene Hilfe.

## Branchenperspektive

**Startup.** Wissen lebt in wenigen Köpfen und im Chat-Verlauf. Schreiben Sie eine kurze Liste von Runbooks für das, was nachts kaputtgeht, und halten Sie die Behebung nach jedem Incident fest. Eine monatliche Prüfung, dass die obersten Runbooks noch funktionieren, ist genug Messung.

**Kleinunternehmen.** Oft ist eine Person Service Desk, Administrator und Eigner des Wissens. Das Risiko ist der Bus-Faktor, denn das Wissen verschwindet, wenn die Person verschwindet. Nutzen Sie ein einfaches gemeinsames Repository, halten Sie Artikel kurz und lassen Sie eine Auftragnehmerin oder einen Kollegen die wichtigen Verfahren testen. Ein regelmäßiges Durchlesen der meistgenutzten Seiten schlägt jedes Dashboard.

**Großunternehmen.** Größe bringt doppelte Artikel und ungleiche Qualität. Nutzen Sie gemeinsame Definitionen für Verknüpfungsrate, Aktualität und Wiederverwendung, berichten Sie nach Service und Team und benennen Sie Eigner für die stark genutzten Artikel. Vermeiden Sie den Vergleich von Teams, denn Servicemix und Alter der Datenbank unterscheiden sich.

**Behörden und öffentlicher Sektor.** Aufbewahrungsregeln, Barrierefreiheitsanforderungen und Prüferwartungen können bestimmen, wie Wissen gespeichert, überprüft und stillgelegt wird. Behandeln Sie das als Entwurfsvorgaben: Führen Sie eine Genehmigungsspur für Artikel, die Bürgerinnen und Bürger betreffen, und veröffentlichen Sie barrierefreie Inhalte. Feedback und Suchfehlschläge von Bürgerinnen und Bürgern sind besonders wertvoll (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten von Wissenskennzahlen sind bescheiden. Die Werkzeugdaten existieren meist bereits in der ITSM-Plattform und der Wissensdatenbank. Die Hauptkosten sind die Zeit, die Messgrößen zu definieren, die kleine monatliche Stichprobe, die die Relevanz prüft, die Prüfzeit für stark genutzte Artikel und die Disziplin, Wissen beim Lösen von Problemen zu erfassen. Fehlen der Wissensplattform brauchbare Verknüpfungs- oder Suchdaten, sind die Kosten der Instrumentierung einzubeziehen (siehe Thema 1.5, Datenquellen und Instrumentierung).

Der Ertrag ist ein Muster, und das Buch nennt dafür keine Zahl. Finden Analysten schnell einen korrekten Artikel, ist die Lösung schneller und einheitlicher, neue Mitarbeitende werden früher nützlich, und Bereitschaftsingenieure hängen weniger von wenigen Experten ab. Finden Nutzer Antworten selbst, erhält der Desk weniger wiederholte Kontakte zu bekannten Fragen. Die Kennzahlen helfen, indem sie zeigen, wo Wissen fehlt, veraltet oder ungenutzt ist, damit knappe Schreibzeit in die Artikel fließt, auf die es ankommt.

Die Gesamtbetriebskosten umfassen die Pflege. Artikel verfallen, wenn sich Services ändern, die Prüfzeit ist also ein laufender Kostenpunkt, und ein Programm, das sie ignoriert, überschätzt den Nutzen. Um den Ertrag für Ihr eigenes Team zu schätzen, vergleichen Sie eine Stichprobe Ihrer eigenen Fälle vorher und nachher und kennzeichnen Sie Ihre Annahmen.

## Anti-Muster und Fallstricke

- **Artikel oder Aufrufe als Erfolg zählen.** Das Volumen steigt mit Unordnung, und Aufrufe können Verwirrung signalisieren. Messen Sie stattdessen Nutzung in der Lösung, Relevanz und Feedback.
- **Ein Verknüpfungsziel ohne Relevanzprüfung.** Menschen hängen irgendeinen Artikel an. Ziehen Sie monatlich Stichproben verknüpfter Fälle und berichten Sie den relevanten Anteil neben der Rate.
- **Autoren oder Bearbeiter ordnen.** Persönliche Zählungen erzeugen dünne Änderungen und Zerlegungen von Artikeln. Berichten Sie die Breite der Beiträge für das Team und besprechen Sie sie als Kapazitätsfrage.
- **Alle Artikel nach einem festen Plan überprüfen.** Aufwand geht auf Seiten, die niemand liest. Überprüfen Sie nach Nutzung und legen Sie Ungenutztes still.
- **Stubs veröffentlichen, um die Uhr zu stoppen.** Ein schneller, dünner Artikel schlägt die Zeit bis zur Veröffentlichung. Koppeln Sie sie mit Hilfreich-Rate und Rate nachfolgender Kontakte.
- **Fehlschlagende Suchen ignorieren.** Fehlgeschlagene Suchen sind das klarste Signal ungedeckten Bedarfs. Lesen Sie sie jeden Monat und machen Sie die obersten Elemente zu Arbeit.
- **Wissen von der Arbeit trennen.** Ein Dokumentationsprojekt am Quartalsende erzeugt veraltete Seiten. Erfassen Sie während der Lösung und in der Definition of Done.
- **Die Wissensdatenbank als dauerhaft behandeln.** Inhalt verfällt. Machen Sie Stilllegen und Zusammenführen zur Routine und würdigen Sie es.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Erfassen und Verknüpfen | Wissen lebt in Köpfen und im Chat; Verknüpfungen sind selten | Einige Teams verknüpfen Artikel mit Fällen, die Praxis variiert | Eine schriftliche Regel für Verknüpfung und Erfassung; Schließgründe erfasst | Verknüpfungsrate und Relevanzstichprobe monatlich überprüft und mit Verbesserung verknüpft | Erfassung ist Teil des Workflows über Desk, Betrieb und Produktteams; Definitionen überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| Aktualität und Verantwortung | Keine Eigner; Artikel altern unbemerkt | Eigner für wichtige Services benannt | Überprüfungsfenster gesetzt, kürzer für stark genutzte Artikel | Aktualität stark genutzter Artikel im Trend und finanziert | Prüfverantwortung mit Lieferanten und Produktteams geteilt; Stilllegung ist Routine |
| Auffindbarkeit und Feedback | Suche ist ad hoc; keine Suchdaten | Suchprotokoll existiert, wird aber nicht gelesen | Suchen ohne Treffer und Leserfeedback in festem Rhythmus überprüft | Suchfehlschläge treiben einen Backlog und sind mit Kontaktdaten gekoppelt | Nutzer, Analysten und Chatbots schöpfen aus einer Wissensquelle; Feedback ändert Inhalt sichtbar |
| Nutzung in der Verbesserung | Kennzahlen, falls vorhanden, sind Zählungen | Zählungen werden dem Team gezeigt | Kennzahlen mit Leitplanken gekoppelt und zuerst dem Team gezeigt | Stark verknüpfte Artikel speisen Entscheidungen im Problemmanagement und zur Automatisierung | Wissens-, Problem- und Produkt-Backlogs werden teamübergreifend gemeinsam gesteuert |

## Checkliste

- [ ] Jede Wissenskennzahl nennt das Publikum, dem sie dient, und die Entscheidung, die sie untermauert.
- [ ] Die Verknüpfungsrate hat eine schriftliche Definition, einschließlich Uhr, Ausschlüssen und Behandlung von Major Incidents.
- [ ] Eine monatliche Stichprobe prüft, dass verknüpfte Artikel zu den Fällen relevant sind.
- [ ] Der Fallabschluss erfasst „kein Artikel vorhanden“ und „Artikel nicht gefunden“ als getrennte Gründe.
- [ ] Die Zeit bis zur Veröffentlichung wird als Median und hohes Perzentil berichtet, mit getrennten Stufen für Entwurf und Veröffentlichung.
- [ ] Für genutzte Artikel ist ein Überprüfungsfenster gesetzt, kürzer für die meistgenutzten.
- [ ] Die häufigsten Suchen ohne Treffer werden jeden Monat gelesen und zu Backlog-Elementen gemacht.
- [ ] Leserfeedback wird mit seiner Rücklaufquote gezeigt, und Kommentare zu Top-Artikeln werden gelesen.
- [ ] Beiträge werden nur für das Team berichtet, ohne benannte Listen.
- [ ] Die meistverknüpften Artikel werden jedes Quartal als Kandidaten für dauerhafte Korrekturen überprüft.
- [ ] Definitionsänderungen werden mit Gründen protokolliert.

## KI-Prompts

**Prüfen, ob verknüpfte Artikel zu ihren Fällen passen.**

```text
I run knowledge reviews for [team name], which supports [type of service]. Below
are [number] resolved cases, each with its summary, resolution notes, and the
title and text of the linked article. For each pair, judge whether the article
fits the case as a relevant answer, a partial answer, or an unrelated link, and
give a one-line reason. Report patterns by article and by service. Do not name
or rank individual analysts. Do not invent facts about the service. List your
assumptions and anything you could not judge from the text.

[paste cases and articles with personal data removed]
```

**Fehlgeschlagene Suchen in einen Schreib-Backlog verwandeln.**

```text
Here are the most frequent searches in [knowledge base or portal name] that
returned no results in [period]: [list of search terms with counts]. Group them
into themes. For each theme, suggest whether it needs a new article, a synonym
or rename of an existing article ([list of related article titles]), a link to
another team, or no action. Do not invent articles or facts about our systems.
List your assumptions and the questions I should answer before writing anything.
```

**Eine leichtgewichtige Menge von Wissensmessgrößen entwerfen.**

```text
Design a small set of knowledge management measures for [team name], a
[team size] team using [ITSM tool] and [knowledge tool]. Our main goal is
[goal, such as faster first contact resolution or less dependence on experts].
For each measure give the definition, the clock or boundary, the data source,
the likely gaming vector, and a guardrail. Do not propose individual
rankings, invent benchmark values, or cite sources. List your assumptions and
the data fields you would need that I did not mention.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um verwandte Themen und die gekoppelte Leitplanke zu finden, wenn Sie Ihrem Dashboard eine Wissenskennzahl hinzufügen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine Wissenskennzahl ihren Manipulationsvektor, ihre Leitplanke und Querverweise in der richtigen Form trägt.

## Wichtigste Erkenntnisse

- Messen Sie Wissen im Moment der Nutzung: in der Lösung verknüpft, per Suche gefunden, von Lesern bestätigt.
- Koppeln Sie die Verknüpfungsrate mit einer menschlichen Relevanzstichprobe, denn eine Verknüpfung beweist nur, dass jemand geklickt hat.
- Überprüfen Sie die Aktualität nach Nutzung und setzen Sie den Aufwand dorthin, wo ein falscher Artikel die meisten Fälle in die Irre führen würde.
- Behandeln Sie fehlgeschlagene Suchen und stark verknüpfte Artikel als Signale für neuen Inhalt, bessere Benennung oder eine dauerhafte Korrektur.
- Berichten Sie Beiträge für das Team und ordnen Sie nie Autoren.
- Weniger, bessere Artikel zeigen oft eine gesündere Datenbank als eine größere.

## Quellen und weiterführende Literatur

1. Consortium for Service Innovation, *KCS v6 Practices Guide*, first released 2016 and updated since, https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide (check the page for the current version).
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
3. Nonaka, I., and Takeuchi, H., *The Knowledge-Creating Company*, Oxford University Press, 1995.
4. Hansen, M. T., Nohria, N., and Tierney, T., "What's your strategy for managing knowledge?", *Harvard Business Review*, March-April 1999.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Wikipedia, [Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Knowledge base](https://en.wikipedia.org/wiki/Knowledge_base).
10. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
11. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
12. Wikipedia, [Knowledge-centered support](https://en.wikipedia.org/wiki/Knowledge-centered_support).
13. Wikipedia, [Service desk](https://en.wikipedia.org/wiki/Service_desk).
14. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
