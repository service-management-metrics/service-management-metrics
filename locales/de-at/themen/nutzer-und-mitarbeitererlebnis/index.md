# Nutzer- und Mitarbeitererlebnis

**Menschen leisten ihre beste Arbeit, wenn die Werkzeuge, Geräte und der Support um sie herum einfach funktionieren. Messen Sie also die Reibung, der Ihre Kollegen begegnen, behandeln Sie die Antworten als Grund, Hindernisse zu beseitigen, und machen Sie diese Daten nie zu Überwachung oder zu einer Rangliste von Menschen.**

## Überblick und Motivation

Das fünfte Prinzip hinter dem Agilen Manifest sagt, Projekte um motivierte Individuen herum aufzubauen, ihnen das Umfeld und die Unterstützung zu geben, die sie brauchen, und ihnen zu vertrauen, dass sie die Arbeit erledigen. Für die Menschen, die interne IT nutzen, ist das Umfeld der Laptop, die Anmeldung, die Kollaborationswerkzeuge, der Zugriffsprozess und der Service Desk. Sind diese langsam oder verwirrend, verlieren motivierte Menschen Zeit und Wohlwollen und erfinden Umgehungen. Dieses Umfeld zu messen ist daher ein Weg, Menschen zu unterstützen. Es ist kein Weg, sie zu beobachten.

[Employee Experience](https://en.wikipedia.org/wiki/Employee_experience_management) ist die Summe der Interaktionen eines Mitarbeitenden mit seinem Arbeitsplatz über seine Zeit in der Organisation. Der Teil, den die IT prägt, wird manchmal digitales Mitarbeitererlebnis genannt, und der [digitale Arbeitsplatz](https://en.wikipedia.org/wiki/Digital_workplace) ist die Menge der Technik, die Menschen zum Arbeiten nutzen. Die früheren Themen dieses Teils behandelten Zufriedenheitsumfragen (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit) und Experience Level Agreements (siehe Thema 6.2, Experience Level Agreements). Dieses Thema wendet dieselbe Aufmerksamkeit nach innen, zu den Kollegen, die IT-Services täglich nutzen, einschließlich der Ingenieure und Betreiber, die sie bauen und betreiben.

Interne Nutzer unterscheiden sich von externen Kunden in vier Punkten, die für die Messung zählen.

- **Sie können nicht gehen.** Ein Mitarbeitender hat keinen Konkurrenten, zu dem er wechseln kann, Stille ist also nicht Zufriedenheit. Sie kann Resignation bedeuten oder eine Umgehung.
- **Sie sind identifizierbar.** In einem Unternehmen von einigen hundert Menschen kann eine kleine Gruppe von Umfrageantworten auf eine Person zeigen. Datenschutz-Entwurf kommt zuerst.
- **Sie sind auch Kollegen.** Schlechte Erlebnisdaten schaden Beziehungen und Moral, und gute Daten lassen sich offen teilen und gemeinsam bearbeiten.
- **Sie schließen die Liefer- und Betriebsteams ein.** Die Werkzeuge, die Entwickler und Service-Desk-Personal nutzen, sind Teil des Erlebnisses, und ihre Reibung erreicht Nutzer über langsamere Korrekturen.

Zwei Themen ziehen sich durch dieses Thema. Das erste ist **Reibung**: der vermeidbare Aufwand, die Verzögerung und Unterbrechung, die zwischen einer Person und ihrer Arbeit steht. Unterbrechungen und mentaler Mehraufwand kosten mehr, als ihre Uhrzeit vermuten lässt. Die Idee der [kognitiven Belastung](https://en.wikipedia.org/wiki/Cognitive_load), der Last auf dem Arbeitsgedächtnis, erklärt, warum ein verwirrendes Formular oder ein unerwarteter erzwungener Neustart mehr kostet als die Minuten, die er dauert, und die Idee des [Flow](https://en.wikipedia.org/wiki/Flow_(psychology)), eines Zustands vertieften Fokus, erklärt, warum der Schutz ungestörter Zeit für Wissensarbeit zählt. Das zweite Thema ist **Ethik**: wie man etwas über Erlebnis erfährt, ohne in die Privatsphäre einzudringen. Technik zur [Mitarbeiterüberwachung](https://en.wikipedia.org/wiki/Employee_monitoring) kann sehr viel messen, und die Linie zwischen Unterstützen und Kontrollieren ist leicht überschritten. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt hier in menschlicher Form: Ein Wert, mit dem Menschen beurteilt werden, lehrt sie, ihre Probleme zu verbergen (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Leitprinzipien

- **Das Umfeld messen, nicht die Person.** Die Einheit der Analyse ist ein Service, ein Gerätetyp oder eine Gruppe, nie eine Einzelperson.
- **Reibung als Feind behandeln.** Verlorene Zeit, Unterbrechung und Verwirrung sind Kosten, die zu beseitigen sind.
- **Fragen, beobachten und messen.** Kombinieren Sie, was Menschen sagen, mit dem, was Systeme aufzeichnen, und dem, was Sie sehen, wenn Sie bei der Arbeit zuschauen.
- **Datenschutz zur Entwurfsanforderung machen.** Erheben Sie die geringsten Daten, die die Frage beantworten, aggregieren Sie früh und unterdrücken Sie kleine Gruppen.
- **Alle einbeziehen.** Barrierefreiheitsbedarf, Remote- und Schichtarbeitende und Neueinsteiger begegnen oft dem schlechtesten Erlebnis.
- **Fokus schützen.** Planen Sie Änderungen, Updates und Benachrichtigungen um die Arbeit der Menschen herum.
- **Sagen, was Sie erheben und warum.** Transparenz schafft das Vertrauen, von dem ehrliche Antworten abhängen.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bereitschaftsrate am ersten Tag | Anteil der Neueinsteiger, deren Geräte, Konten und Zugriffe zu ihrem Start vollständig sind und funktionieren | Neueinsteiger mit allen vereinbarten Elementen funktionierend bei Start / Neueinsteiger im Zeitraum | Prozent | Onboarding-Anfragen, Identitätssystem, Bestätigung der Neueinsteiger | Management von Serviceanfragen; Management des Servicekatalogs | Arbeitsvereinbarung des Teams zum Onboarding | Monatlich |
| Zeit bis zur Produktivität | Verstrichene Zeit vom Startdatum bis zu dem Punkt, an dem ein Neueinsteiger alles für seine erste echte Aufgabe hat | Median und 85. Perzentil der Tage vom Startdatum bis zur Bestätigung durch den Neueinsteiger und seine Führungskraft | Tage | Onboarding-Tracker; kurze Bestätigungsfrage | Management von Serviceanfragen; kontinuierliche Verbesserung | Zeit, bis ein neues Teammitglied eine erste Änderung vornimmt | Monatlich |
| Verbreitung von Umgehungen | Anteil der befragten Mitarbeitenden, die nicht freigegebene Werkzeuge oder manuelle Schritte nutzen, um einen offiziellen Service zu umgehen | Antwortende, die eine Umgehung für den Service berichten / gültige Antwortende | Prozent | Pulsumfrage; Berichte zur Entdeckung genehmigter Werkzeuge | Service-Level-Management; kontinuierliche Verbesserung | In täglichen Team-Abstimmungen angesprochene Hindernisse | Vierteljährlich |
| Minuten erzwungener Unterbrechung | Zeit, in der Menschen durch geplante IT-Maßnahmen wie erzwungene Neustarts, Updates und Anmeldeaufforderungen unterbrochen werden | gesamte durch geplante Maßnahmen verursachte Unterbrechungsminuten / aktive Nutzer in der Gruppe | Minuten pro Person und Monat | Logs des Endpoint-Managements, nach Gruppe aggregiert | Change-Befähigung; Release- und Deployment-Management | Unterbrechungsfreie Arbeitszeit | Monatlich |
| Lösungszeit bei Barrierefreiheitsanfragen | Zeit, Anfragen zu Barrierefreiheitsbedarf zu lösen | Median und 85. Perzentil der Stunden von der Anfrage bis zur bestätigten funktionierenden Lösung | Stunden | Anfragesystem mit einem Barrierefreiheits-Tag | Management von Serviceanfragen; Incident-Management | Inklusive Definition of Done | Monatlich |
| Werkzeug-Pulswert | Bewertung eines benannten Werkzeugs oder Services auf eine kurze vereinbarte Frage | mittlere Bewertung oder Anteil günstiger Antworten über gültige Antworten, je Werkzeug | Skalenpunkte oder Prozent | Pulsumfrage, wechselnde Werkzeuge | Service-Level-Management; kontinuierliche Verbesserung | Feedback von Teammitgliedern zu ihren Werkzeugen | Vierteljährlich |
| Einhaltung der Datenschutzvorkehrungen | Anteil der Erlebnisberichte, die die Regeln zu Unterdrückung und Aggregation erfüllen | Berichte, die die Regeln erfüllen / veröffentlichte Berichte | Prozent | Review veröffentlichter Berichte gegen die Datenschutzregeln | Informationssicherheitsmanagement; Messung und Berichterstattung | Arbeitsvereinbarung zur Datennutzung | Vierteljährlich |

Definieren Sie für jede Kennzahl die Gruppe und den Zeitraum. Die Bereitschaftsrate am ersten Tag zählt einen Neueinsteiger nur dann als bereit, wenn jedes Element einer vereinbarten Liste funktioniert, und die Liste wird im Kennzahlenregister festgehalten. Minuten erzwungener Unterbrechung werden aus Gruppensummen berechnet, und die niedrigste gezeigte Ebene ist eine Gruppe von mindestens zehn Personen. Die Einhaltung der Datenschutzvorkehrungen gilt für das Erlebnisprogramm selbst, was sie zu einer Leitplanke für die anderen sechs macht.

## Empfehlungen

### Bei den Menschen und ihrer Arbeit beginnen

**1. Gehen Sie mit Kollegen einen Tag durch.** Setzen Sie sich zu einigen Menschen aus verschiedenen Rollen, Orten und Schichten und schauen Sie ihnen bei der Arbeit zu. Notieren Sie jedes Warten, jede Umgehung und jeden Moment der Verwirrung. Fragen Sie, was sie zuerst beheben würden. Beobachtung findet Probleme, die Umfragen verpassen, weil Menschen aufhören, die Reibung zu bemerken, mit der sie leben gelernt haben. Vereinbaren Sie vorher, was Sie erfassen und wie Sie es nutzen.

**2. Kartieren Sie die Momente, die zählen.** Für Mitarbeitende sind die Momente mit hoher Wirkung meist der erste Tag, ein Laptop-Ausfall, ein Wechsel zwischen Teams, eine Zugriffsanfrage und das Verlassen der Organisation. Schreiben Sie die Schritte in jedem und wer sie besitzt auf. Die Karte zeigt Übergaben zwischen Teams, in denen sich Verzögerung verbirgt, was sich mit den Kollaborationskennzahlen in einem späteren Teil verbindet (siehe Thema 9.3, Kennzahlen für Zusammenarbeit und Übergaben).

**3. Beziehen Sie die Menschen an den Rändern ein.** Mitarbeitende mit Barrierefreiheitsbedarf, Schichtarbeitende, Remote- und Außendienstpersonal und Auftragnehmer sind in Durchschnitten oft unsichtbar. Segmentieren Sie die Ergebnisse, wo es sicher ist, und überprüfen Sie die am schlechtesten bediente Gruppe für sich. Behandeln Sie Barrierefreiheit als erstklassige Anforderung. Standards zur [Barrierefreiheit im Web](https://en.wikipedia.org/wiki/Web_accessibility) wie die Web Content Accessibility Guidelines geben eine konkrete Checkliste für interne Werkzeuge, und Barrierefreiheitsprobleme sind in vielen Rechtsordnungen eine rechtliche und ethische Frage.

### Mit Sorgfalt messen

**4. Kombinieren Sie drei Arten von Belegen.** Nutzen Sie kurze Pulsfragen zu benannten Werkzeugen und Momenten, Systemkennzahlen wie Minuten erzwungener Unterbrechung und Abschluss des Onboardings und Gespräche. Widersprechen sich zwei Arten, untersuchen Sie. Ein Werkzeug mit hervorragender Verfügbarkeit und schlechtem Pulswert sagt Ihnen etwas, das Verfügbarkeit nicht sagen kann (siehe Thema 5.3, Verfügbarkeitskennzahlen).

**5. Fragen Sie nach einem Werkzeug, nicht nach „der IT“.** „Wie leicht ist es, ein Dokument im Dateisystem zu finden?“ bekommt bessere Antworten als „Wie ist die IT?“ Wechseln Sie die Werkzeuge im Puls ab, damit niemand mehr als ein- oder zweimal im Quartal gefragt wird, und halten Sie die Formulierung stabil, damit Trends etwas bedeuten.

**6. Zählen Sie Minuten, die Menschen verlieren.** Verlorene Zeit ist leichter zu verstehen als ein Wert. Schätzen Sie sie, wo Sie können, aus dem System, zum Beispiel Neustartaufforderungen und fehlgeschlagene Anmeldungen, und bitten Sie Menschen um eine grobe Zahl, wo Sie es nicht können. Zeigen Sie sie pro Person und Monat für eine Gruppe, mit der Methode, und vermeiden Sie, mit dem Gehalt zu multiplizieren, um eine dramatische Zahl zu erzeugen, wenn Sie nicht auch die Annahmen nennen.

**7. Minimieren und aggregieren.** Folgen Sie dem Prinzip der [Datenminimierung](https://en.wikipedia.org/wiki/Data_minimization): erheben Sie nur, was Sie brauchen, behalten Sie es nur so lange, wie Sie es brauchen, und aggregieren Sie so früh wie möglich. Wo Daten jemanden identifizieren könnten, verringert [Pseudonymisierung](https://en.wikipedia.org/wiki/Pseudonymization) das Risiko. Regeln wie [k-Anonymität](https://en.wikipedia.org/wiki/K-anonymity), die verlangt, dass jede berichtete Gruppe mindestens k Personen enthält, geben einen einfachen Weg, kleine Zellen zu unterdrücken. Nennen Sie Ihr k im Register.

**8. Ziehen Sie eine klare Linie gegen Überwachung.** Nutzen Sie Erlebnisdaten, Endpoint-Telemetrie oder Stimmung nicht, um Einzelpersonen zu beurteilen, um zu erkennen, wer „weniger engagiert“ ist, oder um Leistungsbeurteilungen zu speisen. Sagen Sie es schriftlich und lassen Sie Mitarbeitervertreter oder einen Betriebsrat den Datenplan überprüfen, wo es sie gibt. Klären Sie lokales Recht und Datenschutzfachleute, bevor Sie Verhaltensdaten erheben. Einmal verlorenes Vertrauen macht jede spätere Umfrage weniger ehrlich.

### Auf das reagieren, was man lernt

**9. Beheben Sie die größte Reibung zuerst und sagen Sie es.** Ordnen Sie Probleme nach verlorener Zeit, Zahl der Menschen und Schwere für die Betroffenen und finanzieren Sie die obersten. Sagen Sie den Menschen, was Sie behoben haben und was Sie bewusst nicht behoben haben, mit Gründen. Eine sichtbare Korrektur ist die stärkste Ermutigung, weiter Probleme zu melden.

**10. Planen Sie Unterbrechungen um die Arbeit herum.** Viele erzwungene Unterbrechungen sind vermeidbar. Planen Sie Updates außerhalb der Fokuszeit, bieten Sie Aufschub innerhalb von Grenzen an und bündeln Sie Neustarts. Überprüfen Sie Minuten erzwungener Unterbrechung neben Sicherheitszielen, damit die Abwägung ausdrücklich ist, denn manche Updates müssen schnell geschehen (siehe Thema 4.3, Kennzahlen für die Change-Befähigung).

**11. Behandeln Sie Umgehungen als Entwurfs-Feedback.** Wenn Menschen ein nicht freigegebenes Werkzeug nutzen, fragen Sie, was es besser kann. Die Antwort ist eine Anforderung, die das offizielle Werkzeug verpasste. [Schatten-IT](https://en.wikipedia.org/wiki/Shadow_IT) birgt echte Risiken für Sicherheit und Kosten, und eine strafende Reaktion treibt sie in den Untergrund. Bevorzugen Sie, die gute Idee zu übernehmen oder das Risiko zu erklären und eine sichere Alternative anzubieten.

**12. Teilen Sie das Programm mit den Menschen, denen es dient.** Zeigen Sie den Mitarbeitenden die Ergebnisse, halten Sie ein kurzes Review mit Vertretern ab und fragen Sie, was im nächsten Quartal zu ändern ist. Das Programm ist eine Form kontinuierlicher Zusammenarbeit zwischen der IT und ihren Nutzern, und kontinuierliche Verbesserung des Umfelds ist das Ergebnis. Verknüpfen Sie es mit den Kennzahlen zu Menschen im nächsten Teil (siehe Thema 9.2, Kennzahlen für Zufriedenheit und Wohlbefinden).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Bereitschaftsrate am ersten Tag | Die vereinbarte Liste verkürzen; Elemente als bereit markieren, bevor sie funktionieren; das offizielle Startdatum verzögern | Schriftliche Liste im Register; Bestätigung der Neueinsteiger; Zeit bis zur Produktivität |
| Zeit bis zur Produktivität | Den Start der Uhr später ansetzen; den Onboarding-Datensatz früh schließen | Uhrdefinition im Register; Führungskraft und Neueinsteiger bestätigen beide |
| Verbreitung von Umgehungen | Ehrliche Antworten entmutigen, indem man Konsequenzen andeutet; nur zufriedene Gruppen befragen | Anonymitätserklärung; Rücklaufquote und Zusammensetzung der Antwortenden; Einhaltung der Datenschutzvorkehrungen |
| Minuten erzwungener Unterbrechung | Nur manche Arten von Unterbrechung zählen; Unterbrechungen in die nicht gemessene Gruppe verlagern | Alle Arten geplanter Unterbrechung definieren; nach Gruppe berichten, einschließlich Remote- und Schichtpersonal |
| Lösungszeit bei Barrierefreiheitsanfragen | Anfragen mit einer Teillösung schließen; Anfragen als etwas anderes kennzeichnen, um die Uhr zu vermeiden | Bestätigung des Anfragenden, dass die Lösung funktioniert; Review nicht gekennzeichneter Anfragen |
| Werkzeug-Pulswert | Nur zufriedene Nutzer befragen; die Frage ändern; Mitarbeitende anleiten, gut zu antworten | Protokoll stabiler Formulierungen; Rücklaufquote und Zusammensetzung; Kommentare lesen |
| Einhaltung der Datenschutzvorkehrungen | Einhaltung ohne unabhängiges Review berichten; Gruppen erweitern, um Probleme zu verbergen | Periodisches Review durch jemanden außerhalb des Teams; die Regeln veröffentlichen (den Wert von k und die Unterdrückung) |

Ein gesunder Befund sind Neueinsteiger, die am ersten Tag arbeiten können, eine sinkende Zahl erzwungener Unterbrechungen, Umgehungen, die zu besseren offiziellen Werkzeugen führen, und Mitarbeitende, die sagen, sie vertrauten dem Programm, weil sie gesehen haben, was es mit ihren Antworten macht.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Pulsumfragen | Direkte Stimme, billig, leicht zu wiederholen | Umfragemüdigkeit; Antwortverzerrung |
| Systemtelemetrie | Objektiv, kontinuierlich, keine Umfragelast | Datenschutzrisiko; zeigt Ereignisse, aber nicht Gefühle |
| Beobachtung und Interviews | Findet verborgene Reibung; baut Beziehungen auf | Zeitaufwendig; kleine Stichproben |
| Feinkörnige Daten | Präzise Diagnose | Identifiziert Menschen; untergräbt Vertrauen |
| Aggregierte Daten mit Unterdrückung | Sicher zu teilen und zu bearbeiten | Weniger Detail; verbirgt kleine Gruppen, die womöglich kämpfen |
| Strikte Kontrollen auf Geräten | Sicherheit und Compliance | Mehr erzwungene Unterbrechung; mehr Umgehungen |

Die Antwort in Worten ist, alle drei Arten von Belegen auf Gruppenebene zu nutzen, Details nur so lange zu behalten, wie eine Diagnose sie braucht, und Sicherheit und Erlebnis als Abwägung zu behandeln, die man offen bespricht. Ziel ist ein Arbeitsplatz, an dem motivierte Menschen mit wenig Aufwand bekommen, was sie brauchen.

## Fragen für die Diskussion im Team

**1. Wie ist der erste Tag für einen neuen Kollegen, und woher wissen wir es?**
Bitten Sie das Team, den Weg vom Angebot bis zur ersten echten Aufgabe nachzuzeichnen. Wer tut was, und wo wartet es? Bitten Sie einen jüngeren Einsteiger, am Gespräch teilzunehmen. Die Moderation sollte sich auf die Momente konzentrieren, die die Person warten oder beschämt zurückließen, und sich auf eine Änderung einigen, die den Tag des nächsten Einsteigers verbessern würde.

**2. Welche Umgehung nutzen Menschen, die wir lieber nicht sähen, und was sagt sie uns?**
Listen Sie die inoffiziellen Werkzeuge und manuellen Schritte auf, die das Team gesehen hat. Fragen Sie bei jedem, welches Bedürfnis es erfüllt. Das Gespräch findet oft eine Anforderung, die der offizielle Service verpasste. Entscheiden Sie, welche Umgehungen übernommen, welche durch eine bessere offizielle Option ersetzt und welche mit Erklärung untersagt werden.

**3. Wie viele Minuten nehmen unsere eigenen Maßnahmen Kollegen jeden Monat?**
Schätzen Sie die erzwungenen Neustarts, Updates und Aufforderungen für eine typische Person. Vergleichen Sie mit dem, was ein Nutzer sagen würde. Die Moderation kann fragen, was sich ändern würde, wenn die Zahl veröffentlicht würde. Einigen Sie sich auf eine Unterbrechung, die dieses Quartal zu verringern oder umzuplanen ist.

**4. Welche Daten über Kollegen könnten wir erheben, und was sollten wir versprechen, nie damit zu tun?**
Erstellen Sie zwei Listen: was technisch möglich ist und was das Team tatsächlich erheben wird. Entwerfen Sie eine kurze Aussage zu Zweck und Grenzen. Bitten Sie einen Mitarbeitervertreter um eine Reaktion. Die Diskussion zeigt, wo die Linie gegen Überwachung verläuft und wie man sie erklärt.

**5. Wer hat mit unseren Werkzeugen am meisten zu kämpfen, und sind sie in unseren Daten?**
Denken Sie an Barrierefreiheitsbedarf, Schichtarbeitende, Remote-Personal und Neue. Prüfen Sie, ob die Umfragen und Logs sie erreichen und ob Regeln für kleine Gruppen sie verbergen. Einigen Sie sich auf einen Weg, der am schlechtesten bedienten Gruppe direkt zuzuhören.

**6. Was haben wir im letzten Quartal wegen dem behoben, was Kollegen uns sagten, und haben sie davon gehört?**
Listen Sie die Korrekturen auf und wie sie angekündigt wurden. Ist die Liste kurz, besprechen Sie, was das Handeln blockiert: Verantwortung, Finanzierung oder Furcht. Einigen Sie sich auf eine sichtbare Korrektur, die vor der nächsten Umfrage zu liefern ist, und eine Nachricht, sie zu erklären.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams sind Nutzer und Bauer interner Werkzeuge zugleich. Ihre eigene Reibung, etwa langsame Builds, instabile Umgebungen und Zugriffsverzögerungen, bremst alles, was sie liefern, und die Kennzahlen in diesem Thema gelten auch für sie. Sie sollten interne Werkzeuge mit Eigner und Nutzern zum Teil des Produkt-Backlogs machen und als Kollegen am Puls und an den Reviews teilnehmen (siehe Thema 9.1, Teamgesundheit und Entwicklererlebnis).

### Service- und Betriebsteams

Betrieb und Service Desk prägen einen Großteil des Erlebnisses, und sie sind Mitarbeitende mit eigenen Werkzeugen und eigener Arbeitslast. Sie sollten Änderungen mit Rücksicht auf den Fokus der Nutzer ausspielen, den Barrierefreiheitskanal reaktionsfähig halten und Umgehungen als Feedback nutzen. Sie sollten auch ihre eigenen Kollegen davor schützen, nach Erlebnisdaten geordnet zu werden. Support-Personal sind ebenfalls motivierte Individuen.

### Führung und Governance

Führungskräfte setzen die Kultur der Messung. Sie sollten verlangen, dass Reibung beseitigt wird, nicht dass Werte steigen, und die Korrekturen finanzieren. Sie sollten die Datenschutzzusagen schriftlich schützen, Bitten widerstehen, die Daten über Einzelpersonen zu nutzen, und akzeptieren, dass Sicherheitskontrollen Erlebniskosten haben, die abzuwägen sind. Die Governance sollte die Datenschutzregeln und ihr Review als Teil jeder Erlebnisberichterstattung erwarten.

### Kunden und Nutzer

Die Menschen, die interne IT nutzen, sind die Autoren des Erlebnisses. Sie verdienen einen ersten Tag, der funktioniert, Werkzeuge, die ihren Fokus achten, eine ehrliche Auskunft, was über sie erhoben wird, wo möglich eine Möglichkeit zum Ausstieg und den Beleg, dass Aussprechen zu Veränderung führt. Kollegen mit Barrierefreiheitsbedarf sollten gefragt werden, wie sich der Service für sie nutzbar machen lässt, und nicht als Sonderfall behandelt werden.

## In der Praxis: ein Beispiel aus dem Service-Management

Die zentrale IT-Abteilung einer Universität unterstützt 6.000 Mitarbeitende und betreibt einen Service Desk, ein Plattformteam und mehrere Produktteams. Die Zahlen unten sind illustrativ.

Eine neue IT-Leiterin will wissen, warum Beschwerden von Mitarbeitenden über das Onboarding anhalten, obwohl die Lösungszeiten des Service Desks im Ziel liegen. Sie bittet den Service-Manager, ein Erlebnisprogramm für Neueinsteiger und für das wichtigste Kollaborationswerkzeug zu pilotieren, gemeinsam mit dem Personalrat aufgebaut. Die Bedingung des Rates ist ein schriftliches Versprechen, dass keine Daten über Einzelpersonen genutzt werden, und er stimmt zu, den Plan zu überprüfen.

Das Team misst die Bereitschaft am ersten Tag und die Zeit bis zur Produktivität für die 140 Neueinsteiger des letzten Quartals, anhand des Onboarding-Trackers und einer Ein-Frage-Bestätigung durch Einsteiger und Führungskraft. Nur 46 Prozent der Neueinsteiger hatten am ersten Tag jedes vereinbarte Element funktionierend, und die mediane Zeit bis zur Produktivität betrug 4 Tage, mit einem 85. Perzentil von 9 Tagen. Die Gründe aus Interviews sind drei getrennte Anfragen, die je auf ein anderes Team warten, und ein Schritt der Laptop-Imaging, der freitags spät fertig wird. Ein kurzer Puls zum Kollaborationswerkzeug, an ein wechselndes Zehntel der Mitarbeitenden mit einer Mindestgruppengröße von 10 gesendet, zeigt niedrigere Bewertungen bei Mitarbeitenden, die abends und am Wochenende arbeiten. Endpoint-Logs, nach Gebäude und Schicht aggregiert, zeigen durchschnittlich 38 Minuten im Monat an erzwungenen Neustart- und Update-Aufforderungen, mit einem langen Schwanz für Mitarbeitende der Nachtschicht, deren Neustarts in die Arbeitszeit fallen, weil ihre Geräte aktualisieren, wenn andere schlafen.

Das Team nimmt drei Änderungen vor. Eine einzelne Onboarding-Anfrage ersetzt die drei, mit einem benannten Eigner. Der Imaging-Schritt wandert in ein Fenster unter der Woche. Die Update-Planung erhält ein an die Arbeitszeiten der Nutzer gebundenes Aufschubfenster. Sie veröffentlichen die Datenschutzregeln im Kennzahlenregister: eine Mindestgruppengröße von 10, keine Individualdaten in einem Bericht und eine Aufbewahrungsgrenze von sechs Monaten für Rohlogs. Drei Monate später steigt die Bereitschaft am ersten Tag auf 81 Prozent, die Zeit bis zur Produktivität am 85. Perzentil fällt auf 5 Tage, und die Minuten erzwungener Unterbrechung für Nachtschichtpersonal sinken um etwa die Hälfte. Eine Führungskraft bittet die IT-Leiterin, zu berichten, welche Abteilungen die meisten Beschwerden haben, um Teams für Nachfassen zu benennen. Sie lehnt es ab, Abteilungen zu ordnen, und bietet an, die Muster auf Gruppenebene zu teilen und die Ursachen zu beheben. Die Entscheidung wird im Entscheidungsprotokoll festgehalten, und der Rat bittet, das Programm auf ein zweites Werkzeug auszuweiten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Beheben Sie Reibung in kleinen Schritten und zeigen Sie den Menschen, was sich änderte, im Geist kontinuierlicher Verbesserung. Zu beachten ist, dass wiederholtes Befragen ohne sichtbare Handlung das Vertrauen zerstört.

### KI

KI-Assistenten verändern die tägliche Arbeit von Mitarbeitenden, messen Sie also Reibung und verlorene Zeit für KI-gestützte Aufgaben und koppeln Sie die Nutzung mit einem von Nutzern berichteten Nutzen. Zu beachten ist, dass KI-Nutzungsdaten über Einzelpersonen missbraucht werden können, um Leistung zu beurteilen; halten Sie sie also aggregiert und geregelt.

### Automatisierung

Erfassen Sie Gerätes- und Anwendungsgesundheit automatisch, mit klaren Datenschutzgrenzen, und messen Sie die Erfassung an Abdeckung und an der Zahl behobener Probleme. Zu beachten ist, dass technische Telemetrie verpassen kann, wie sich Arbeit anfühlt; kombinieren Sie sie also mit kurzen Umfragen.

### Analytik

Berichten Sie Bereitschaft und Zeit bis zur Produktivität mit Anzahlen, nie je Person. Die Entscheidung, die dies untermauert, ist, wo Hindernisse zu beseitigen sind. Zu beachten ist, dass kleine Teams identifizierbare Daten erzeugen; setzen Sie also vor dem Berichten eine Mindestgruppengröße.

## Branchenperspektive

**Startup.** Alle sprechen mit allen, daher finden Beobachtung und Gespräch die meiste Reibung. Machen Sie das Erlebnis am ersten Tag hervorragend, denn es setzt den Ton, und halten Sie die Telemetrie minimal. Schreiben Sie die Datenschutzversprechen früh auf, auch wenn das Team klein ist.

**Kleinunternehmen.** Ein einzelner Administrator übernimmt womöglich Onboarding und Support. Nutzen Sie eine einfache Checkliste und fragen Sie jeden Neueinsteiger, was fehlte. Seien Sie vorsichtig mit Daten kleiner Gruppen: Bei einem Dutzend Mitarbeitender identifiziert fast jede Aufschlüsselung jemanden, verlassen Sie sich also auf Gespräche.

**Großunternehmen.** Große und vielfältige Landschaften machen Segmentierung nützlich und riskant. Segmentieren Sie nach Rollenfamilie, Standorttyp und Geräteklasse statt nach Team, wenden Sie eine Mindestgruppengröße an und beziehen Sie Mitarbeitervertreter ein. Stimmen Sie das Programm von Anfang an mit Sicherheit, Recht und Datenschutz ab.

**Behörden und öffentlicher Sektor.** Pflichten zu Barrierefreiheit, Gleichstellung und Datenschutz sind oft gesetzlich, und Personalräte oder Gewerkschaften können förmliche Rollen haben. Behandeln Sie Barrierefreiheitstests und Konsultation als verpflichtende Teile des Programms, veröffentlichen Sie die Datenschutzregeln und vermeiden Sie, Daten zu erheben, die nicht klar nötig sind. Wo Mitarbeiterdaten der Regulierung unterliegen, beziehen Sie den Datenschutzbeauftragten ein (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind bescheiden. Pulsumfragen und Beobachtung brauchen die Zeit von Menschen und ein Umfragewerkzeug. Endpoint-Daten stammen meist aus bereits eingesetzten Werkzeugen, wobei Analyse und Datenschutzprüfung Aufwand machen. Die größten Kosten sind die Bereitschaft, zu beheben, was gefunden wird, was heißen kann, Onboarding-Prozesse, Geräterichtlinien und Update-Praktiken über Teams zu ändern.

Der Ertrag kommt aus zurückgewonnener Zeit, schnellerem Hochlauf von Neueinsteigern, weniger Support-Kontakten durch vermeidbare Reibung und weniger Schatten-IT. Sie können den Business Case aus Ihren eigenen Zahlen bauen: die Minuten erzwungener Unterbrechung pro Person, die Tage bis zur Produktivität bei Neueinsteigern und die Support-Kontakte zu Problemen, die eine Korrektur beseitigte. Seien Sie vorsichtig mit einer einzelnen Produktivitätszahl, abgeleitet aus Gehalt und Minuten, denn sie beruht auf Annahmen darüber, was eine zurückgewonnene Minute wert ist. Auf der anderen Seite der Bilanz gibt es auch Risikokosten: Zu viele Daten über Mitarbeitende zu erheben kann rechtliche Angriffsfläche schaffen und Vertrauen beschädigen. Nehmen Sie das in die Gesamtbetriebskosten auf.

## Anti-Muster und Fallstricke

- **Erlebnisdaten nutzen, um Einzelpersonen zu beurteilen.** Es verwandelt ein Unterstützungsprogramm in Überwachung und beendet ehrliches Feedback. Aggregieren Sie, unterdrücken Sie kleine Gruppen und sagen Sie es.
- **Nur Durchschnitte messen.** Die Menschen mit dem schlechtesten Erlebnis bleiben verborgen. Schauen Sie auf den Schwanz und die am schlechtesten bedienten Gruppen.
- **Alles erheben, weil es möglich ist.** Mehr Daten bringen mehr Risiko. Erheben Sie, was eine Frage beantwortet.
- **Unablässig befragen.** Menschen hören auf zu antworten. Wechseln Sie die Werkzeuge ab und halten Sie es kurz.
- **Umgehungen bestrafen.** Menschen verbergen sie, und das zugrunde liegende Bedürfnis bleibt ungedeckt. Lernen Sie aus ihnen.
- **Sicherheit und Erlebnis in getrennten Räumen halten.** Manche Kontrollen sind ihre Kosten wert, viele nicht. Besprechen Sie die Abwägung mit Zahlen.
- **Den ersten Tag als Problem eines anderen zählen.** Onboarding kreuzt HR, IT und die Führungskraft. Geben Sie ihm einen Eigner.
- **Barrierefreiheit bis zu einer Beschwerde ignorieren.** Bauen und testen Sie von Anfang an mit den Betroffenen.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Reibung verstehen | Nur Beschwerden | Gelegentliche Interviews oder eine Umfrage | Regelmäßige Beobachtung und Puls für Schlüsselwerkzeuge und -momente | Kombinierte Umfrage-, System- und Gesprächsbelege, sicher segmentiert | Gemeinsame Sicht mit HR, Facility Management und Lieferanten; Mitarbeitende verantworten Prioritäten mit |
| Datenschutz und Ethik | Keine genannten Regeln | Informelle Sorgfalt | Schriftliche Regeln zu Zweck, Minimierung und Gruppengröße | Regeln unabhängig überprüft; Einhaltung gemessen | Regeln gemeinsam mit Mitarbeitervertretern entworfen und über Lieferanten geprüft |
| Handlung | Korrekturen nach Beschwerde | Ad-hoc-Korrekturen | Größte Reibung mit Eignern im Backlog | Korrekturen finanziert, verfolgt und angekündigt; Unterbrechung um die Arbeit herum geplant | Erlebnisverbesserungen in die Planung über Teams und Lieferanten eingebaut |

## Checkliste

- [ ] Die Schlüsselmomente (erster Tag, Geräteausfall, Zugriffsanfrage, Wechsel, Ausscheiden) sind mit Eignern kartiert.
- [ ] Bereitschaft am ersten Tag und Zeit bis zur Produktivität werden mit schriftlicher Liste und Uhren gemessen.
- [ ] Ein kurzer Puls deckt benannte Werkzeuge im Wechsel ab.
- [ ] Minuten erzwungener Unterbrechung werden nach Gruppe gemessen und mit der Sicherheit überprüft.
- [ ] Barrierefreiheitsanfragen werden gekennzeichnet, verfolgt und vom Anfragenden bestätigt.
- [ ] Berichte nutzen eine Mindestgruppengröße und zeigen nie Einzelpersonen.
- [ ] Eine schriftliche Aussage zu Zweck und Grenzen der Erlebnisdaten existiert und wird geteilt.
- [ ] Mitarbeitervertreter haben den Datenplan überprüft, wo es solche Gremien gibt.
- [ ] Umgehungen werden gesammelt und als Feedback überprüft.
- [ ] Ergebnisse und Korrekturen werden jedes Quartal mit den Mitarbeitenden geteilt.

## KI-Prompts

**Einen Moment kartieren, der zählt.**

```text
We want to improve [moment, for example the first day for a new starter] in
[type of organization]. The steps today are: [list steps and who owns each]. Draw
a text map showing hand-offs and waits, suggest where friction is likely, and
propose one measure from what people say, one from what systems record, and one
from observation for each major step. Do not invent figures. List your
assumptions and the questions I should ask staff.
```

**Eine Datenschutzerklärung für ein Erlebnisprogramm entwerfen.**

```text
Draft a one-page plain-language statement for staff about an experience program
in [organization type] in [jurisdiction]. We collect: [list data]. Our purpose
is [purpose]. Include what we will not do (for example use data on individuals),
the minimum group size [number], retention [period], who can see raw data, and
how staff can raise concerns. Flag anything I should review with a privacy
specialist or staff representatives. Do not give legal conclusions. List your
assumptions.
```

**Pulskommentare zu einem Werkzeug analysieren.**

```text
Here are [number] anonymized comments about [tool] from [period]: [paste
comments with personal data removed]. Group them into themes of friction,
count each theme, give two representative quotes for each, and suggest which
themes may point to a fixable cause versus a training need. Do not identify
individuals or infer motives. List your assumptions and what a person should
check before acting.
```

**Eine Verringerung von Unterbrechungen planen.**

```text
Our endpoints receive [number] planned interruptions per person per month on
average: [list types and frequencies]. Security requirements: [list]. Propose a
scheme that reduces disruption to focus time (for example deferral windows,
bundling, scheduling by working hours) while meeting the requirements, and
describe how to measure whether it works without tracking individuals. List
your assumptions and the trade-offs I should discuss with security.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Erlebnis- oder Reibungskennzahl zu finden, bevor Sie sie veröffentlichen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein überarbeiteter Eintrag einer Erlebniskennzahl seinen Manipulationsvektor, seine Leitplanke und seine Datenschutzregeln behält.

## Wichtigste Erkenntnisse

- Ziel ist, motivierten Menschen das Umfeld und die Unterstützung zu geben, die sie brauchen, also messen Sie Reibung und beseitigen Sie sie.
- Kombinieren Sie Pulsfragen, Systemkennzahlen und Beobachtung und schauen Sie auf die Gruppen an den Rändern.
- Zählen Sie Minuten, die durch eigene Maßnahmen der IT verloren gehen oder unterbrochen werden, und planen Sie um den Fokus der Menschen herum.
- Machen Sie Datenschutz zur Entwurfsregel: minimieren, aggregieren, kleine Gruppen unterdrücken und nie Einzelpersonen beurteilen.
- Behandeln Sie Umgehungen als Feedback und sagen Sie Mitarbeitenden, was Sie behoben haben.
- Nehmen Sie Barrierefreiheit von Anfang an auf und überprüfen Sie das Programm mit den Menschen, denen es dient.

## Quellen und weiterführende Literatur

1. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
3. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
4. Csikszentmihalyi, M., *Flow: The Psychology of Optimal Experience*, Harper & Row, 1990.
5. Sweller, J., "Cognitive load during problem solving: Effects on learning," *Cognitive Science*, 12(2), 1988.
6. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
7. Sweeney, L., "k-anonymity: a model for protecting privacy," *International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems*, 10(5), 2002.
8. Wikipedia, [Employee experience management](https://en.wikipedia.org/wiki/Employee_experience_management).
9. Wikipedia, [Digital workplace](https://en.wikipedia.org/wiki/Digital_workplace).
10. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
11. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
12. Wikipedia, [Employee monitoring](https://en.wikipedia.org/wiki/Employee_monitoring).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility).
15. Wikipedia, [Data minimization](https://en.wikipedia.org/wiki/Data_minimization).
16. Wikipedia, [Pseudonymization](https://en.wikipedia.org/wiki/Pseudonymization).
17. Wikipedia, [K-anonymity](https://en.wikipedia.org/wiki/K-anonymity).
18. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
