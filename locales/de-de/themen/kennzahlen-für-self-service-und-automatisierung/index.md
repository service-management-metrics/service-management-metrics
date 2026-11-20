# Kennzahlen für Self-Service und Automatisierung

**Messen Sie Self-Service daran, ob Menschen ohne Hilfe bekommen haben, was sie brauchten, und Automatisierung an der Arbeit, die sie beseitigt, und an den Fehlern, die sie erzeugt, denn ein Kontakt, der nie ankam, ist nur dann ein Erfolg, wenn das Problem gelöst wurde.**

## Überblick und Motivation

Self-Service und Automatisierung sind die zwei Hauptwege, auf denen eine Serviceorganisation ihren Menschen Routinearbeit abnimmt. [Self-Service](https://en.wikipedia.org/wiki/Self-service_software) lässt einen Nutzer ein Problem lösen oder etwas allein erhalten, über ein Portal, einen Wissensartikel, eine Seite zum Zurücksetzen des Passworts oder einen [Chatbot](https://en.wikipedia.org/wiki/Chatbot). [Automatisierung](https://en.wikipedia.org/wiki/Automation) lässt ein System die Schritte ausführen, die früher ein Mensch ausführte, etwa ein Konto anlegen, einen Service neu starten oder ein Ticket schließen, sobald ein Monitor die Wiederherstellung bestätigt. Beide zielen auf dasselbe Ergebnis: weniger sich wiederholende Aufgaben für Menschen, schnellere Ergebnisse für Nutzer und mehr Zeit für Arbeit, die Urteilskraft braucht.

Die Ideen lassen sich auf beide Traditionen abbilden. In [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 erwartet die Praktik Serviceanfragen-Management, dass gut verstandene, wiederholbare Anfragen über Standardabläufe mit so viel Automatisierung wie sinnvoll bearbeitet werden, und Incident-Management und Wissensmanagement erwarten, dass gute Information Nutzern und Supportpersonal am frühesten nützlichen Punkt zur Verfügung steht. Agile und DevOps-Praxis kommt auf anderem Weg an derselben Stelle an: [Infrastructure as Code](https://en.wikipedia.org/wiki/Infrastructure_as_code), Pipelines und die Disziplin, Toil zu beseitigen, den die Google-SRE-Bücher als manuelle, sich wiederholende, automatisierbare Arbeit definieren, die mit dem Service wächst. Die gemeinsame Idee heißt oft „Shift Left“: die Lösung eines Problems zum Nutzer hin oder zum billigsten und frühesten Punkt der Supportkette verlagern, weg von der Spezialistenwarteschlange.

Die Shift-Left-Sprache lädt zu einem Messfehler ein. Teams sehen, dass ein vermiedener Kontakt billig ist, und zählen vermiedene Kontakte als Erfolg. Die Zählung ist leicht zu erzeugen, denn ein Portalbesuch, der nicht in einem Ticket endete, sieht genauso aus wie ein Portalbesuch, bei dem der Nutzer aufgab. Dieses Thema beginnt deshalb beim Ergebnis des Nutzers. Es definiert, was Self-Service-Erfolg bedeutet, wie sich Umleitung (Deflection) schätzen lässt, ohne Abbruch als Verdienst zu verbuchen, wie sich Automatisierungsabdeckung und -verlässlichkeit messen lassen und wie sich der Shift-Left-Effekt auf Volumen und Komplexität sehen lässt. Die zugehörigen Volumen- und Prioritätsmessgrößen stehen in Thema 3.2, Incident-Aufkommen und Priorität, die Anfrageseite in Thema 3.5, Kennzahlen für die Erfüllung von Serviceanfragen, und die Wissensseite in Thema 3.6, Kennzahlen für Wissensmanagement.

In diesem Thema verwendete Begriffe:

- **Level 0 (oder Self-Service-Stufe)**: Lösung durch den Nutzer ohne Kontakt zum Personal. Level 1 ist die erste Supportlinie, meist der Service Desk, und Level 2 und 3 sind die Spezialisten- und Engineering-Stufen.
- **Umleitung (Deflection)**: ein Kontakt, der sonst das Personal erreicht hätte und stattdessen auf Level 0 gelöst wurde. Sie lässt sich nicht unmittelbar beobachten und ist daher immer eine Schätzung.
- **Durchfall (Fall-through)**: ein Nutzer, der Self-Service versuchte, keinen Erfolg hatte und dann das Personal zum selben Bedarf kontaktierte.
- **Runbook**: ein dokumentiertes Verfahren für eine betriebliche Routineaufgabe. Ein [Runbook](https://en.wikipedia.org/wiki/Runbook) ist der übliche erste Schritt zu ihrer Automatisierung.
- **Toil**: manuelle, sich wiederholende, automatisierbare Arbeit ohne bleibenden Wert (siehe Thema 5.7, Kennzahlen für Toil und Bereitschaftsdienst).
- **Servicekatalog**: die Liste der Services und Standardanfragen, die Nutzern angeboten werden. ITIL nennt ihn im Englischen „service catalogue“.

## Leitprinzipien

- **Ergebnisse zählen, nicht vermiedene Kontakte.** Eine Portalsitzung ohne Ticket ist nur dann ein Erfolg, wenn der Bedarf des Nutzers erfüllt wurde. Definieren Sie Erfolg von der Seite des Nutzers und verifizieren Sie ihn mit einem Folgesignal.
- **Umleitung ist eine Schätzung, kennzeichnen Sie sie als solche.** Nennen Sie die Methode, den verwendeten Vergleich und die Unsicherheit. Präsentieren Sie nie eine geschätzte Umleitungszahl als gemessene Tatsache.
- **Den Durchfallpfad messen.** Der Weg von einem gescheiterten Self-Service-Versuch zu einem bedienten Kontakt ist der Ort, an dem das meiste verborgene Versagen lebt. Berichten Sie ihn neben jeder Erfolgszahl.
- **Automatisierung hat eine Kostenseite.** Jeder automatisierte Ablauf braucht Wartung, Überwachung und eine Möglichkeit, sicher zu scheitern. Messen Sie Abdeckung und Verlässlichkeit zusammen und zählen Sie den Aufwand, Automatisierung am Leben zu halten.
- **Shift Left ändert den Mix ebenso wie das Volumen.** Wenn leichte Arbeit die Warteschlange verlässt, ist die verbleibende Arbeit im Schnitt schwerer und langsamer. Lesen Sie Lösungszeit und Bearbeitungszeit mit diesem Blick (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents).
- **Kennzahlen beschreiben Services und Abläufe.** Berichten Sie nach Katalogelement, Artikelfamilie oder Automatisierungsablauf. Ordnen Sie nie Agenten danach, wie viele Nutzer sie in den Self-Service gedrängt haben.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Self-Service-Erfolgsrate | Anteil der Self-Service-Sitzungen, in denen der Bedarf des Nutzers ohne Kontakt zum Personal erfüllt wurde | Sitzungen, die in einem abgeschlossenen Ergebnis endeten (Anfrage eingereicht und erfüllt, Artikel als hilfreich markiert, Reset abgeschlossen), ohne bedienten Kontakt zum selben Bedarf innerhalb von 7 Tagen, geteilt durch alle Sitzungen, die eine Aufgabe begannen. Die Uhr startet bei der ersten sinnvollen Handlung im Portal und stoppt bei Abschluss oder Abbruch. Schließt Bot-Verkehr, Testkonten und reines Stöbern aus | Prozent | Portal- und Identitätsprotokolle, Ticketsystem, Sitzungsanalytik | Serviceanfragen-Management; Wissensmanagement | Kundenfeedback-Schleife; ergebnisbasierte Akzeptanzkriterien | Monatlich |
| Geschätzte Umleitungsrate | Geschätzter Anteil der auf Level 0 gelösten Nachfrage, der sonst das Personal erreicht hätte | Vergleich der Kontaktrate pro 1.000 aktiver Nutzer für einen Service vor und nach einer Self-Service-Änderung oder gegenüber einer Haltegruppe (Holdout), bereinigt um bekannte Nachfrageverschiebungen. Als Schätzung mit genannter Methode angegeben. Schließt in einen anderen Kanal gewanderte Kontakte aus | Prozent (Schätzung) | Ticketsystem, Zahlen der Nutzerpopulation, Experiment- oder Kohortendaten | Service Desk; Incident-Management | Experiment mit Kontrollgruppe; A/B-Test | Vierteljährlich |
| Durchfallrate | Anteil gescheiterter Self-Service-Versuche, die in einem bedienten Kontakt zum selben Bedarf enden | Innerhalb von 7 Tagen nach einer abgebrochenen oder erfolglosen Self-Service-Sitzung desselben Nutzers zum selben Thema eröffnete bediente Kontakte, geteilt durch erfolglose Sitzungen. Die Uhr startet am Ende der Sitzung. Schließt nicht zusammenhängende Kontakte aus | Prozent | Portalprotokolle, über Nutzer und Thema mit dem Ticketsystem verbunden | Service Desk; Wissensmanagement | Eskalationspfad in einer Definition of Done; Feedback vom Support | Monatlich |
| Self-Service-Akzeptanz (Portal-first-Anteil) | Anteil der berechtigten Anfragen und Incident-Meldungen, die über Self-Service-Kanäle erfasst werden | Über Portal, Bot oder API angelegte Elemente, geteilt durch alle Elemente für Katalogeinträge, die einen Self-Service-Weg bieten. Schließt Elemente aus, für die kein Self-Service-Weg existiert | Prozent | Kanalfeld des Ticketsystems, Katalogkonfiguration | Serviceanfragen-Management; Servicekatalog-Management | Akzeptanzverfolgung nach einem Release | Monatlich |
| Automatisierungsabdeckung | Anteil der berechtigten, wiederholbaren Arbeit, die von Automatisierung ohne manuellen Schritt abgeschlossen wird | Durchgängig von einem automatisierten Ablauf abgeschlossene Elemente, geteilt durch alle Elemente der als automatisierbar beurteilten Typen. Zählt den Typ nur dann als automatisierbar, wenn eine schriftliche Kandidatenliste ihn nennt. Schließt einmalige Arbeit und von der Automatisierung abgelehnte Elemente aus | Prozent | Ticketsystem, Protokolle der Automatisierungsplattform, Kandidatenliste | Serviceanfragen-Management; Deployment-Management | Automatisierung der Definition of Done; Pipeline-as-Code | Monatlich |
| Fehler- und Nacharbeitsrate der Automatisierung | Anteil automatisierter Läufe, die scheiterten, manuelle Reparatur brauchten oder ein später korrigiertes Ergebnis erzeugten | Automatisierte Läufe, die Fehler warfen, zurückgerollt wurden oder auf die binnen 7 Tagen eine manuelle Korrektur folgte, geteilt durch alle automatisierten Läufe. Die Uhr startet beim Laufbeginn. Schließt geplante Probeläufe aus | Prozent | Protokolle der Automatisierungsplattform, Ticketsystem, Change-Datensätze | Change-Befähigung; Incident-Management | Change-Fehlerrate; Stabilität von Build und Test | Wöchentlich |
| Manuelle Berührungszeit je Anfragetyp | Personalaufwand für einen Anfragetyp, der ein Kandidat für Automatisierung ist | Vom Personal erfasste Bearbeitungsminuten für Elemente des Typs im Zeitraum, zusammengefasst als Median und 85. Perzentil je Element. Wo Zeit nicht erfasst wird, per Stichprobe geschätzt. Schließt Wartezeit aus | Minuten je Element | Zeitstichproben, Arbeitsprotokolle der Tickets | Serviceanfragen-Management | Toil-Verfolgung; Verschwendung im Wertstrom | Vierteljährlich |
| Stufenverteilung (Shift-Left-Anteil) | Wo in der Supportkette Elemente gelöst werden | Auf jeder Stufe (0, 1, 2, 3) gelöste Elemente geteilt durch alle im Zeitraum gelösten Elemente. Die Stufe ist die höchste Ebene, die Handarbeit geleistet hat. Schließt vor der Triage stornierte Elemente aus | Prozent je Stufe | Lösergruppe und Zuweisungsverlauf des Ticketsystems | Incident-Management; Service Desk | Swarming- und Eskalationsmuster; funktionsübergreifende Teams | Monatlich |

Alle diese werden je Service, Katalogelement oder Ablauf gemessen, nie je Person. Zeitmessgrößen sollten als Median plus hohes Perzentil gezeigt werden, wie die Einleitung zum Thema statistische Kompetenz erklärt (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

## Empfehlungen

### Erfolg von der Seite des Nutzers definieren

**1. Schreiben Sie auf, was „ich habe bekommen, was ich brauchte“ für jeden Self-Service-Weg bedeutet.** Beim Passwort-Reset ist es ein abgeschlossenes Zurücksetzen und eine erfolgreiche Anmeldung. Bei einer Anfrage ist es die Erfüllung, nicht die Einreichung. Bei einem Artikel ist es ein Nutzer, der das Personal zum selben Bedarf nicht erneut kontaktierte. Eine Definition, die bei „Seite angesehen“ endet, misst Verkehr.

**2. Verbinden Sie Self-Service-Sitzungen mit späteren Kontakten.** Der stärkste Beleg des Scheiterns ist ein bedienter Kontakt zum selben Thema bald nach einer Sitzung. Verknüpfen Sie beides über Nutzer und Thema, wo Datenschutzregeln es erlauben, und nutzen Sie, wo nicht, aggregierte Zählungen nach Thema und Tag. Die Verbindung verwandelt eine vage Zufriedenheitsgeschichte in eine Durchfallrate, die Sie verbessern können.

**3. Fragen Sie Nutzer beim Verlassen mit einer einzigen Frage.** Eine Ein-Frage-Aufforderung wie „Hat das Ihr Problem gelöst?“ gibt ein direktes Signal, das Protokolle nicht liefern können. Behandeln Sie die Antworten als Stichprobe, lesen Sie die Freitextkommentare und vergleichen Sie Antwortende mit Nichtantwortenden, damit die zufriedensten Nutzer nicht das Ergebnis bestimmen (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

### Umleitung ehrlich schätzen

**4. Bevorzugen Sie einen Vergleich vor einem Zähler.** Die sauberste Schätzung kommt aus einer Haltegruppe, einer gestaffelten Einführung oder einer Vorher-Nachher-Sicht auf Kontakte pro 1.000 aktiver Nutzer für den betroffenen Service. „Sitzungen, die nicht zu Tickets wurden“ zu zählen überzeichnet die Wirkung, denn viele dieser Nutzer hatten nie einen Bedarf, den das Personal gesehen hätte. Nennen Sie Methode und Unsicherheit neben der Zahl.

**5. Normalisieren Sie das Volumen an der Nutzung.** Ein Rückgang der Ticketzahl kann auf einen Rückgang der Nutzer, einen ruhigen Release-Zyklus oder einen saisonalen Wechsel folgen. Teilen Sie durch aktive Nutzer oder Transaktionen, bevor Sie Schlüsse ziehen (siehe Thema 3.2, Incident-Aufkommen und Priorität). Annotieren Sie das Diagramm mit Releases, Kampagnen und Portaländerungen.

**6. Halten Sie Umleitung aus Zielen heraus.** Ein Ziel für Umleitung belohnt das Verbergen des Kontaktwegs, das Vergraben der Telefonnummer und das frühe Beenden von Chat-Sitzungen. Nutzen Sie Umleitung als lernende Schätzung und lassen Sie das Ziel bei Nutzerergebnissen sitzen, etwa der Self-Service-Erfolgsrate und dem ältesten ungelösten Element.

### Automatisierung als Produkt messen, nicht als Projekt

**7. Führen Sie eine Kandidatenliste und messen Sie die Abdeckung dagegen.** Abdeckung „aller Arbeit“ ist eine schlechte Messgröße, denn die meiste Arbeit ist nicht automatisierbar. Führen Sie eine kurze schriftliche Liste von Anfrage- und Incident-Typen, die wiederholbar, gut verstanden und häufig sind, ordnen Sie sie nach manueller Berührungszeit und Volumen und berichten Sie die Abdeckung gegen diese Liste. Überprüfen Sie die Liste jedes Quartal, damit der Nenner ehrlich bleibt.

**8. Koppeln Sie Abdeckung mit Verlässlichkeit.** Ein automatisierter Ablauf, der in einem von zehn Läufen scheitert oder still das falsche Ergebnis erzeugt, kann mehr kosten als die manuelle Aufgabe, die er ersetzte. Verfolgen Sie Fehler- und Nacharbeitsrate, die Zeit bis zur Erkennung eines gescheiterten Laufs und wie oft ein Mensch das Ergebnis reparieren muss. Nutzen Sie die Fehlerbehandlungspraktiken, die die Site-Reliability-Engineering-Gemeinschaft beschreibt: idempotente Schritte, klare Alarme und einen sicheren manuellen Rückfall (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität).

**9. Zählen Sie die Pflege.** Automatisierungen brauchen Eigner, Versionsverwaltung, Tests und Aktualisierungen, wenn sich die Systeme darum ändern. Erfassen Sie die für die Wartung jedes Ablaufs aufgewendete Zeit und vergleichen Sie sie mit der manuellen Berührungszeit, die er beseitigte. Eine Automatisierung, die mehr kostet, sie am Laufen zu halten, als sie spart, ist ein Kandidat für die Stilllegung, was ein normales Ergebnis ist, kein Versagen.

### Den Shift-Left-Effekt beobachten

**10. Erwarten Sie, dass die verbleibende Arbeit schwerer ist.** Verlassen Routinekontakte den Service Desk, verschlechtern sich durchschnittliche Bearbeitungszeit und Lösung beim Erstkontakt auf Level 1 oft, obwohl der Service besser ist. Berichten Sie Stufenverteilung und Kategorienmix neben diesen Messgrößen und vereinbaren Sie vorab mit der Führung, dass ein Anstieg der Bearbeitungszeit nach erfolgreicher Umleitung erwartet wird (siehe Thema 3.1, Kennzahlen für den Service Desk).

**11. Schließen Sie die Schleife zu Wissen und Problemmanagement.** Jeder Durchfall ist ein Beleg für einen fehlenden oder schlechten Artikel, ein verwirrendes Formular oder einen unbehobenen Fehler. Leiten Sie die obersten Durchfallthemen an die Wissenseigner und, wo die Ursache ein Fehler ist, an das Problemmanagement (siehe Thema 4.1, Kennzahlen für das Problemmanagement). Überprüfen Sie die Liste monatlich und berichten Sie, wie viele Elemente behoben wurden.

**12. Teilen Sie die Kapazität, die Sie freisetzen.** Wenn Automatisierung und Self-Service Arbeit beseitigen, entscheiden Sie, was die freigesetzte Zeit kauft: Verbesserungsarbeit, proaktive Korrekturen oder Schulung. Teams, die keinen Nutzen aus Automatisierung sehen, hören auf, sie vorzuschlagen. Verfolgen Sie den geplanten Kapazitätsanteil für Verbesserung im Zeitverlauf (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Self-Service-Erfolgsrate | Jedes abgeschlossene Formular oder jeden Seitenaufruf als Erfolg zählen; die Aufforderung „Hat das geholfen“ entfernen, wenn Werte fallen; schwere Themen aus dem Nenner ausschließen | Durchfallrate und eine von einem Menschen gelesene Stichprobe geschlossener Sitzungen; die Nennerregeln berichten |
| Geschätzte Umleitungsrate | Den Kontaktweg verbergen; Schritte vor dem Kontakt hinzufügen; alle weniger Tickets unabhängig von der Ursache als Umleitung klassifizieren | Kontakte pro 1.000 aktiver Nutzer, Nutzerzufriedenheit mit dem betroffenen Service und die Methode neben der Zahl geschrieben |
| Durchfallrate | Das Abgleichsfenster so kurz definieren, dass Rückkehrer außerhalb fallen; den Folgekontakt als Duplikat schließen | Wiederkontaktrate über alle Kanäle; Überprüfung einer Stichprobe zurückgekehrter Kontakte |
| Self-Service-Akzeptanz (Portal-first-Anteil) | Alle Anfragen unabhängig von der Eignung ins Portal zwingen; telefonisch angelegte Tickets als Portaltickets umetikettieren | Self-Service-Erfolgsrate und Nutzeraufwand; Anteil der Anfragen ohne brauchbaren Portalweg |
| Automatisierungsabdeckung | Leichte Elemente für die Kandidatenliste wählen; den Nenner mit trivialen Aufgaben vergrößern; teils manuelle Abläufe als automatisiert zählen | Schriftliche Kandidatenliste jedes Quartal überprüft; Fehler- und Nacharbeitsrate der Automatisierung; manuelle Berührungszeit der verbleibenden Elemente |
| Fehler- und Nacharbeitsrate der Automatisierung | Manuelle Reparaturen aus der Zählung ausschließen; gescheiterte Läufe still wiederholen lassen, bis sie gelingen; Fehler als „geplante Probeläufe“ etikettieren | Mit Abläufen verknüpfte Incident- und Alarmdatensätze; Zeit bis zur Erkennung eines gescheiterten Laufs; stichprobenartige Prüfung der Ergebnisse |
| Manuelle Berührungszeit je Anfragetyp | Zeit für Elemente, die manuell aussehen, nicht erfassen; die Zeit einer anderen Kategorie zuordnen; nur ruhige Tage als Stichprobe ziehen | Stichprobenplan geschrieben und überprüft; mit Zykluszeit und Warteschlangenalter desselben Typs vergleichen |
| Stufenverteilung (Shift-Left-Anteil) | Den Anteil auf Level 1 durch Umklassifizieren von Eskalationen heben oder durch Schließen von Elementen auf Level 1 und Wiedereröffnen auf Level 2 als neue Elemente | Wiedereröffnungsrate und Rate verknüpfter Tickets; Stichprobe der Lösungsqualität; Kundenzufriedenheit nach Stufe |

Ein gesunder Befund zeigt eine steigende Self-Service-Erfolgsrate zusammen mit einer stabilen oder fallenden Durchfallrate, geschätzte Umleitung mit ihrer Methode angegeben, eine Automatisierungsabdeckung, die gegen eine überprüfte Kandidatenliste steigt, während Fehler und Nacharbeit niedrig bleiben, und eine Stufenverteilung, die Arbeit früher verlagert, ohne die Wiedereröffnungsraten zu erhöhen oder die Zufriedenheit zu senken. Verbessert sich eine Zahl, während ihre Leitplanke sich verschlechtert, behandeln Sie die Verbesserung als unbewiesen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Self-Service zuerst | Sofortige Ergebnisse für Nutzer, niedrigere Grenzkosten, zu jeder Stunde verfügbar | Nutzer mit komplexen oder ungewöhnlichen Bedürfnissen können sich gestrandet fühlen; schwacher Inhalt erzeugt mehr Kontakte, als er beseitigt |
| Bedienter Kontakt zuerst | Persönliche Hilfe, Urteil und die Chance, ungewöhnliche Probleme zu bemerken | Langsamer, teuer und abhängig von der Verfügbarkeit des Personals |
| Umleitung mit einer Haltegruppe schätzen | Glaubwürdiger Beleg der Wirkung | Braucht Entwurfsarbeit und Toleranz für eine Gruppe, die die Änderung nicht erhält |
| Sitzungen ohne Tickets zählen | Billig und immer verfügbar | Überzeichnet Erfolg; lädt zur Manipulation ein; kann Erfolg nicht von Abbruch unterscheiden |
| Breite Automatisierung | Einheitliche Ausführung und weniger Toil | Wartungslast, Fehlermodi, die skalieren, und Fähigkeiten, die im Team verblassen können |
| Selektive Automatisierung stabiler Abläufe | Besserer Ertrag für den Aufwand und weniger Überraschungen | Lässt etwas manuelle Arbeit bestehen, die eigene Aufmerksamkeit braucht |

Die Antwort in Worten: Automatisieren Sie, was häufig, stabil und gut verstanden ist, und halten Sie einen Menschen verfügbar, wo der Bedarf unklar ist oder viel auf dem Spiel steht. Self-Service sollte daran beurteilt werden, ob Menschen geholfen wurde, mit sichtbar gehaltenem bedientem Weg. Shift-Left-Einsparungen sind nur dann real, wenn das Nutzerergebnis hält, zählen Sie also beide Seiten.

## Fragen für die Diskussion im Team

**1. Wenn ein Nutzer das Portal öffnet und geht, ohne ein Ticket zu erfassen, was nehmen wir an, ist geschehen, und wie würden wir es herausfinden?**
Bitten Sie die Gruppe, die möglichen Geschichten aufzulisten: Der Nutzer fand die Antwort, gab auf, rief stattdessen an oder fragte eine Kollegin. Sehen Sie nach, welche Daten sie trennen würden, etwa ein Folgekontakt, eine Aufforderung beim Verlassen oder eine Stichprobe von Sitzungen. Die Moderation sollte festhalten, welche Annahme derzeit im Dashboard steht und wer sich darauf verlässt. Einigen Sie sich zum Schluss auf eine Änderung, die eine Annahme durch Belege ersetzen würde.

**2. Wie schätzen wir derzeit die Umleitung, und würden wir die Methode vor einem skeptischen Finanzpartner vertreten?**
Gehen Sie die Berechnung Schritt für Schritt durch, einschließlich der Vergleichsgruppe und der Bereinigungen um Nachfrageänderungen. Fragen Sie, was sich im Zeitraum sonst geändert hat, etwa Releases, Ausfälle oder Personalwechsel. Notieren Sie die Spanne plausibler Werte ebenso wie die Schlagzeile. Die Diskussion sollte mit einer schlichten Aussage zur Methode enden, die neben der Zahl stehen kann.

**3. Welche unserer Automatisierungen würden wir morgen abschalten, wenn wir ihre wahren Kosten kennten?**
Listen Sie die automatisierten Abläufe mit ihren Eignern, dem Datum der letzten Änderung, Laufzahlen, Fehlerraten und Wartungsaufwand auf. Fragen Sie, welche niemand vermissen würde und welche sich niemand anzufassen traut. Die Moderation sollte die Stilllegung als legitimes Ergebnis behandeln. Die Antworten offenbaren oft Abläufe ohne Eigner.

**4. Was geschieht mit einem Nutzer, dessen Self-Service-Versuch scheitert, und wie lange braucht er, um einen Menschen zu erreichen?**
Bitten Sie jemanden, den Weg so zu gehen, wie es ein Nutzer täte, einschließlich des Findens des Kontaktwegs. Nehmen Sie die Zeit und notieren Sie jeden Schritt, der sich verkürzen ließe. Vergleichen Sie das Erlebnis mit der erklärten Absicht des Portals. Die Gruppe sollte entscheiden, ob der Weg so leicht zu finden ist wie der Self-Service-Weg.

**5. Wie sah der Arbeitsmix des Service Desks vor einem Jahr aus, und wie sieht er jetzt aus?**
Sehen Sie sich Kategorienmix und Stufenverteilung im Zeitverlauf an. Besprechen Sie, warum sich Bearbeitungszeit oder Lösung beim Erstkontakt bewegt haben und ob es einen schwereren Mix spiegelt. Fragen Sie, ob der Führung gesagt wurde, dass dies zu erwarten ist. Einigen Sie sich, wie der Trend dargestellt wird, damit ein Anstieg der Bearbeitungszeit nach erfolgreichem Shift Left nicht als Niedergang gelesen wird.

**6. Was würden wir mit der Kapazität tun, die Automatisierung freisetzt, und wer entscheidet?**
Schätzen Sie die aus manueller Arbeit beseitigten Stunden und benennen Sie, was sie kaufen sollten. Fragen Sie, ob die Zeit in Verbesserungsarbeit ging oder von neuer Nachfrage aufgesogen wurde. Besprechen Sie, woran das Team es merken würde. Die Moderation sollte auf eine konkrete Zusage drängen, etwa einen reservierten Kapazitätsanteil für die Behebung der obersten Durchfallthemen.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams besitzen viel von dem, was Self-Service gelingen lässt: klare Fehlermeldungen, brauchbare Formulare, Hilfe im Produkt und die Möglichkeit, Aufgaben ohne Ticket zu erledigen. Sie besitzen auch Automatisierung, die in Pipelines und Infrastrukturcode lebt. Ihre nützlichen Messgrößen sind der Self-Service-Erfolg bei ihren eigenen Funktionen und die manuellen Schritte, die in Release- und Umgebungsarbeit verbleiben und als zu beseitigender Toil behandelt werden (siehe Thema 2.8, DORA-Kennzahlen). Sie sollten Durchfallthemen als Produkt-Backlog lesen.

### Service- und Betriebsteams

Betriebsteams tragen den Automatisierungsbestand und den bedienten Rückfall. Sie sollten Automatisierungsverlässlichkeit, Wartungslast und die verbleibende manuelle Berührungszeit verfolgen und die Stufenverteilung beobachten, ohne für die schwerere Arbeit bestraft zu werden, die bleibt. Agenten sollten dazu befragt werden, welche Anfragen gute Automatisierungskandidaten sind, denn sie wissen, wo die echte Reibung liegt. Berichten Sie nach Ablauf und Anfragetyp, nie nach Agent.

### Führung und Governance

Führungskräfte sind versucht, Umleitung als Kosteneinsparungszahl zu behandeln. Eine bessere Bitte gilt dem Nutzerergebnis, der Methode hinter jeder Schätzung und der Verlässlichkeit der Automatisierung. Governance sollte eine Kandidatenliste, einen Eigner für jeden automatisierten Ablauf und eine Regel für die Stilllegung erwarten. Führungskräfte sollten auch den bedienten Weg davor schützen, versteckt zu werden, um ein Ziel zu erreichen (siehe Thema 11.3, Kennzahlen einführen, ohne Angst zu erzeugen).

### Kunden und Nutzer

Nutzer wollen mit ihrer Arbeit weitermachen. Viele bevorzugen Self-Service, wenn er funktioniert, und fast alle mögen es nicht, darin gefangen zu sein, wenn er es nicht tut. Ihr Erleben wird am besten durch Aufwand- und Ergebnisfragen beim Verlassen erfasst und dadurch, ob ein gescheiterter Versuch schnell zu einem Menschen führte (siehe Thema 6.4, Nutzer- und Mitarbeitererlebnis). Nutzer mit Barrierefreiheitsbedarf oder geringer Sicherheit sind ein Frühwarnsignal für Portale, die nur für den durchschnittlichen Nutzer funktionieren.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines mittelgroßen Online-Händlers betreibt einen Service Desk, ein Plattformteam und mehrere Produktteams. Die Zahlen in diesem Beispiel sind illustrativ.

Die Abteilung startet ein überarbeitetes Portal mit geführtem Passwort-Reset, einem Ablauf für Softwarezugriffsanfragen und einem Chatbot für häufige Fragen. Drei Monate später zeigt der Portalbericht, dass 62 Prozent der Sitzungen ohne Ticket enden, und eine Führungskraft schlägt vor, das „Umleitung“ zu nennen und ein Ziel von 70 Prozent zu setzen. Der Leiter des Service Desks ist unwohl, weil Agenten berichten, dass Anrufende sagen, sie hätten „es zuerst im Portal versucht“.

Das Team überprüft die Messgrößen. Es definiert Self-Service-Erfolg als abgeschlossenes Ergebnis ohne bedienten Kontakt zum selben Thema binnen 7 Tagen. Nach dieser Definition beträgt die Erfolgsrate 48 Prozent, nicht 62, und die Durchfallrate für den Zugriffsanfrageablauf 31 Prozent. Beim Lesen einer Stichprobe von 40 Durchfallkontakten stellt es fest, dass die meisten Nutzer nicht erkennen konnten, welches von zwei ähnlichen Katalogelementen zu wählen war, und dass der Chatbot eine Frage zu einem stillgelegten Werkzeug beantwortete.

Das Team trifft drei Entscheidungen. Erstens wird die Schlagzeilenmessgröße der Self-Service-Erfolg, mit der geschätzten Umleitung nur als vierteljährliche Schätzung auf Basis von Kontakten pro 1.000 aktiver Nutzer gezeigt, und für die Umleitung wird kein Ziel gesetzt. Zweitens werden die zwei ähnlichen Katalogelemente zusammengeführt, der Chatbot-Inhalt korrigiert und die zwei obersten Durchfallthemen mit einem Eigner in den Verbesserungs-Backlog aufgenommen. Drittens wird ein manueller Prozess zum Anlegen von Testumgebungen, der Plattformingenieure im Median 25 Minuten kostet (illustrativ) und etwa 40-mal im Monat vorkommt (illustrativ), in die Automatisierungskandidatenliste aufgenommen.

Das Plattformteam automatisiert den Umgebungsablauf noch im Quartal. Schnell zeigt sich ein Manipulationsrisiko: Die Abdeckungszahl des Ablaufs steigt, doch die Fehler- und Nacharbeitsrate zeigt, dass einer von acht Läufen (illustrativ) manuelle Reparatur braucht und die Reparaturen als „geplante Wartung“ protokolliert wurden. Das Team nimmt reparierte Läufe in die Fehlerzählung auf, verknüpft Läufe mit dem Incident-Datensatz und vereinbart, den Ablauf monatlich zu überprüfen. Beim nächsten Review ist die Erfolgsrate auf 57 Prozent (illustrativ) gestiegen, die Durchfallrate gefallen, und die Bearbeitungszeit des Service Desks ist leicht gestiegen, weil die verbleibenden Kontakte schwerer sind. Der Leiter der IT vereinbart, die Bearbeitungszeit mit der Stufenverteilung zu präsentieren, um den Anstieg nicht als Niedergang zu lesen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Verbessern Sie Self-Service in kleinen Schritten mit Nutzerfeedback, denn das Portal ist ein Produkt, das echte Menschen nutzen. Zu beachten ist, dass ein Portal-first-Mandat die Akzeptanz erhöhen kann, während es Nutzer frustriert, die einen Menschen brauchen.

### KI

KI-Chat und -Suche können Self-Service-Volumen und geschätzte Umleitung erhöhen, doch ein umgeleiteter Kontakt kann ein ungelöstes Problem sein. Koppeln Sie Umleitung mit der Self-Service-Erfolgsrate, gemessen durch eine Nutzerantwort oder ein Fenster ohne Rückkehr, und mit der Durchfallrate zu einem Menschen. Zu beachten ist, dass ein Modell, das selbstsicher und falsch antwortet, Kontakte erzeugt, die später zurückkommen.

### Automatisierung

Messen Sie Automatisierung an der Abdeckung, an Fehlern und Nacharbeit und an der manuellen Berührungszeit, die sie beseitigt. Protokollieren Sie jede automatisierte Handlung, damit sie geprüft und zurückgerollt werden kann. Zu beachten ist, dass Abdeckungszahlen das Automatisieren leichter Aufgaben belohnen; verfolgen Sie also auch die schweren.

### Analytik

Zeigen Sie Erfolg, Durchfall und Wiederkontakt auf einer Seite nach Anfragetyp, mit Anzahlen. Die Entscheidung, die dies untermauert, ist, was als Nächstes zu automatisieren ist. Zu beachten ist, dass Umleitung eine Schätzung ist; kennzeichnen Sie sie als solche und prüfen Sie sie an einer Stichprobe von Nutzern.

## Branchenperspektive

**Startup.** Gründer können einen schlechten Self-Service-Weg oft beheben, indem sie mit dem Nutzer sprechen. Messen Sie Erfolg mit einer einzelnen Frage beim Verlassen und einigen Lesungen echter Sitzungen und automatisieren Sie die zwei oder drei Aufgaben, die die meisten Menschen unterbrechen. Vermeiden Sie es, einen Bot zu bauen, bevor die geschriebenen Antworten gut sind.

**Kleinunternehmen.** Eine Person betreibt womöglich die IT für alle, Self-Service bedeutet also überwiegend gute kurze Anleitungen und ein gemeinsames Anfrageformular. Automatisierung von Kontoeinrichtung und Passwort-Resets zahlt sich schnell aus, sofern jemand jeden Ablauf besitzt. Halten Sie den bedienten Weg offensichtlich, sonst umgeht das eigene Personal des Inhabers das System.

**Großunternehmen.** Größe macht sowohl den Nutzen als auch die Manipulation größer. Standardisieren Sie Definitionen über Geschäftsbereiche, führen Sie eine zentrale Kandidatenliste und ein Automatisierungsregister und berichten Sie nach Service und Katalogelement. Hüten Sie sich vor dem Vergleich von Bereichen, die sehr verschiedene Nutzerpopulationen bedienen.

**Behörden und öffentlicher Sektor.** Barrierefreiheit, Sprachzugang und die Pflicht, Menschen zu bedienen, die digitale Kanäle nicht nutzen können, sind Entwurfsvorgaben, keine Extras. Halten Sie unterstützte Wege verfügbar und gemessen, dokumentieren Sie automatisierte Entscheidungen, die Menschen betreffen, und rechnen Sie mit Prüffragen, wer jeden automatisierten Ablauf besitzt (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Motive sind weniger sich wiederholende Kontakte, schnellere Ergebnisse für Nutzer, stetigere Ausführung von Routineaufgaben und mehr Kapazität für Verbesserungsarbeit. Zur Kostenseite gehören Bau und Pflege von Portal und Inhalt, die Integrations- und Datenarbeit, um Sitzungen mit Tickets zu verbinden, die Automatisierungsplattform und die Zeit, jeden automatisierten Ablauf zu schreiben, zu testen und zu besitzen. Stichproben der Personalzeit und eine kurze Umfrage beim Verlassen kosten wenig und liefern den größten Teil des nötigen Belegs.

Der Ertrag sollte aus Ihren eigenen Daten argumentiert werden. Nutzen Sie manuelle Berührungszeit und Volumen, um den Aufwand zu schätzen, den eine Automatisierung beseitigt, ziehen Sie Pflege und Kosten von Fehlern ab und berichten Sie das Ergebnis als Spanne mit ihren Annahmen. Nutzen Sie für Self-Service die Durchfallrate und die stichprobenartig geprüften Ergebnisse, um den Anteil der Kontakte zu zeigen, die vermieden wurden, weil Nutzern geholfen wurde und sie nicht bloß abgewiesen wurden. Übernehmen Sie keine Umleitungs- oder Einsparungsprozentsätze von Anbietern oder Umfragen; messen Sie zuerst Ihre eigene Baseline. Die Gesamtbetriebskosten einer Automatisierung umfassen die Änderungen, die sie brauchen wird, wenn sich die Systeme darum entwickeln, planen Sie also dafür.

## Anti-Muster und Fallstricke

- **Sitzungen ohne Tickets als Erfolg zählen.** Es kann Hilfe nicht von Abbruch trennen. Definieren Sie Erfolg über das Ergebnis und verifizieren Sie ihn mit Durchfall und Feedback beim Verlassen.
- **Ziele für Umleitung.** Sie belohnen das Verbergen des Kontaktwegs. Nutzen Sie Umleitung als Schätzung und setzen Sie Ziele für Nutzerergebnisse.
- **Telefonnummer oder Chat verstecken.** Nutzer, die keinen Menschen erreichen, erhöhen ihren Aufwand und verlieren Vertrauen. Halten Sie den bedienten Weg sichtbar und messen Sie, wie lange es dauert, ihn zu erreichen.
- **Automatisieren, bevor man den Prozess versteht.** Der Ablauf kodiert Verwirrung in hoher Geschwindigkeit. Dokumentieren und vereinfachen Sie zuerst das Runbook und automatisieren Sie dann die stabile Version.
- **Automatisierung ohne Eigner.** Eigenlose Abläufe verfallen still und scheitern in schlechten Momenten. Geben Sie jedem Ablauf einen Eigner, einen Test, einen Monitor und eine Stilllegungsregel.
- **Die Kosten des Versagens ignorieren.** Eine hohe Abdeckungszahl mit ungemessener Nacharbeit ist eine versteckte Verbindlichkeit. Berichten Sie Fehler- und Nacharbeitsrate mit der Abdeckung.
- **Einen Anstieg der Bearbeitungszeit als Niedergang lesen.** Nach erfolgreichem Shift Left ist die verbleibende Arbeit schwerer. Zeigen Sie Stufenverteilung und Kategorienmix neben den Zeitmessgrößen.
- **Agenten nach umgeleiteten Kontakten ordnen.** Es erzeugt das Wegdrängen von Nutzern und verdirbt die Daten. Berichten Sie nur nach Service und Ablauf.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Self-Service-Erfolg und Umleitung | Portalbesuche und Ticketzahlen berichtet; keine Ergebnisdefinition | Erfolg für einige Wege definiert; Umleitung ohne Methode zitiert | Eine schriftliche Erfolgsdefinition; Durchfall gemessen; Umleitung als Schätzung gekennzeichnet | Erfolg und Durchfall mit Feedback beim Verlassen im Trend; Umleitung durch Vergleich geschätzt | Ergebnisse mit Produktteams und Lieferanten geteilt; Durchfallthemen treiben finanzierte Korrekturen |
| Automatisierungsabdeckung und Verlässlichkeit | Automatisierung ad hoc; keine Kandidatenliste | Einige Abläufe von einzelnen Teams automatisiert; Fehler informell bearbeitet | Kandidatenliste, Eigner und Fehlermessgrößen für jeden automatisierten Ablauf definiert | Abdeckung, Fehlerrate und Pflegeaufwand im Rhythmus überprüft und finanziert | Automatisierung über Teams und Lieferanten koordiniert; Abläufe routinemäßig stillgelegt und überarbeitet |
| Shift-Left-Effekt und Nutzung | Volumen ohne Kontext berichtet | Stufenverteilung von einigen Teams verfolgt | Stufenverteilung und Kategorienmix neben der Bearbeitungszeit berichtet | Freigesetzte Kapazität geplant und verfolgt; Führung liest Mixeffekte richtig | Kapazität und Lernen fließen in Services und Katalogentwurf der Organisation zurück |

## Checkliste

- [ ] Self-Service-Erfolg ist über das Ergebnis definiert, mit schriftlichem Start, Stopp und Ausschlüssen.
- [ ] Die Durchfallrate wird für die wichtigsten Self-Service-Wege gemessen.
- [ ] Jede Umleitungszahl nennt ihre Methode und ist als Schätzung gekennzeichnet.
- [ ] Für die Umleitung ist kein Ziel gesetzt.
- [ ] Für wichtige Wege existiert eine Ein-Frage-Aufforderung beim Verlassen oder gleichwertiges Feedback.
- [ ] Eine schriftliche Automatisierungskandidatenliste existiert und wird jedes Quartal überprüft.
- [ ] Jeder automatisierte Ablauf hat einen Eigner, einen Monitor und eine Fehler- und Nacharbeitsmessgröße.
- [ ] Die manuelle Berührungszeit wird für die wichtigsten Anfragetypen per Stichprobe erfasst.
- [ ] Die Stufenverteilung wird neben Bearbeitungszeit und Lösung beim Erstkontakt gezeigt.
- [ ] Der bediente Weg ist sichtbar, und seine Zugriffszeit wird geprüft.
- [ ] Die obersten Durchfallthemen werden monatlich überprüft und an Eigner geleitet.
- [ ] Keine Kennzahl in diesem Thema wird je Agent berichtet oder als Ziel gesetzt.

## KI-Prompts

**Prüfen, wie wir die Umleitung schätzen.**

```text
We run [type of service] for [number] active users. We report deflection as
[describe current calculation], using data from [tools]. Changes in the period:
[releases, campaigns, outages, staffing changes]. Review the method and explain
where it may overstate or understate the effect. Suggest a better comparison,
such as a holdout or contacts per 1,000 active users, using only the data I
describe. Do not invent benchmark values or targets. List your assumptions and
the data you would need to firm up the estimate.
```

**Durchfallthemen aus einer Stichprobe analysieren.**

```text
Below are [number] staffed contacts from [service] that followed a self-service
attempt on the same topic, with fields [list fields] and the user's description.
Group them by likely cause (content gap, confusing form, defect, missing
access, user preference) and report patterns, not individuals. Suggest which
cause groups to hand to knowledge owners, product teams, or problem management.
Do not guess beyond the text provided. List your assumptions and what you could
not judge.

[paste contacts with personal data removed]
```

**Automatisierungskandidaten ordnen.**

```text
Here is a list of request and incident types for [team]: [type, monthly
volume, median manual minutes, variability, risk if wrong]. Propose a ranking
for automation candidates and explain the reasoning for each, including the
upkeep burden and the failure impact. Flag items that should stay manual.
Use only the numbers I provided and do not invent savings figures. List your
assumptions and the questions I should answer before committing.
```

**Die Leitplanken für einen automatisierten Ablauf entwerfen.**

```text
We are automating [flow name] for [service]. Current manual process: [steps].
Tooling: [automation platform]. Propose the metrics to track (coverage, failure
and rework, time to detect a failed run, upkeep effort), a way each could be
gamed, and a guardrail for each. Include a safe manual fallback and a
retirement criterion. Do not invent thresholds or benchmarks. List your
assumptions and anything you need to know about our environment.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das zugehörige Thema und die Leitplanke für eine Self-Service- oder Automatisierungskennzahl zu finden, die Sie einführen wollen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass Änderungen an diesem Thema jede Kennzahl mit einem Manipulationsvektor und einer Leitplanke gekoppelt halten.

## Wichtigste Erkenntnisse

- Self-Service-Erfolg ist ein Nutzerergebnis, definieren Sie ihn also von der Seite des Nutzers und verifizieren Sie ihn mit Durchfall und Feedback beim Verlassen.
- Umleitung ist eine Schätzung, nennen Sie also die Methode und halten Sie sie aus Zielen heraus.
- Automatisierungsabdeckung bedeutet wenig ohne Verlässlichkeit, Pflege und eine überprüfte Kandidatenliste.
- Shift Left erhöht die Schwierigkeit der verbleibenden Arbeit, lesen Sie also die Bearbeitungszeit mit Stufenverteilung und Kategorienmix.
- Messen Sie Abläufe, Services und Katalogelemente, nie Agenten, und halten Sie den bedienten Weg sichtbar.

## Quellen und weiterführende Literatur

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016 (chapter on eliminating toil).
2. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Request Management*, 2020.
6. Wikipedia, [Self-service software](https://en.wikipedia.org/wiki/Self-service_software).
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
