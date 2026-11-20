# Kennzahlen für die Erfüllung von Serviceanfragen

**Messen Sie, wie lange Routineanfragen aus Sicht des Nutzers dauern, wie viel dieser Zeit Warten ist, welche Katalogelemente die Nachfrage treiben und wie viel der Arbeit automatisiert ist, und nutzen Sie das Bild, um die häufigen Anfragen neu zu gestalten, statt die Menschen zu drängen, die sie bearbeiten.**

## Überblick und Motivation

Eine **Serviceanfrage** ist eine Routineanfrage eines Nutzers nach etwas, das ein Service bereitzustellen ausgelegt ist: ein Konto, Zugriff auf einen Ordner, ein Laptop, eine Softwarelizenz, eine Information. Sie unterscheidet sich von einem **Incident**, einer ungeplanten Störung eines Services (siehe Thema 3.2, Incident-Aufkommen und Priorität), und von einem **Change**, der einen Service verändert und ein frisches Urteil über das Risiko braucht (siehe Thema 4.3, Kennzahlen für die Change-Befähigung). In [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 wird die Arbeit von der Praktik Serviceanfragen-Management abgedeckt, und sie wird meist als wiederholbares **Anfragemodell** beschrieben: die nötigen Informationen, die Genehmigungen, die Schritte und die erwartete Zeit.

Anfragen sind für Kennzahlen wichtig, weil sie vorhersagbare Nachfrage sind. Ein Incident ist eine Überraschung, die Anfrage nach dem Laptop einer neuen Mitarbeiterin kommt jeden Monat und folgt denselben Schritten. Diese Vorhersagbarkeit macht Anfragen zum besten Kandidaten für Gestaltung, Standardisierung und [Prozessautomatisierung](https://en.wikipedia.org/wiki/Process_automation). Sie bedeutet auch, dass Verzögerungen selten durch Schwierigkeit entstehen. Sie entstehen durch Warteschlangen, Genehmigungen und Übergaben, die nützliche Frage lautet also, wo die Anfrage wartet, nicht wie schnell jemand tippt.

Die Analyseeinheit ist das **Katalogelement**: eine benannte Sache, die ein Nutzer im [Servicekatalog](https://en.wikipedia.org/wiki/Service_catalog) anfordern kann. Messgrößen je Element sind weit nützlicher als eine einzelne gemischte Zahl, denn eine Anfrage nach einem Passwort-Reset und eine Anfrage nach einem Serveraufbau haben unterschiedliche Uhren, unterschiedliche Eigner und unterschiedliche vernünftige Ziele. Ein gemischter Durchschnitt verbirgt beides.

Die agile und die ITIL-Sicht treffen sich hier mit wenig Reibung. ITIL fragt, ob der Service das vereinbarte Ergebnis in der vereinbarten Zeit liefert. Agile Flusspraxis fragt, wie lange Arbeit von der Anfrage bis zu Erledigt fließt, wie viel in Warteschlangen sitzt und wie viel Arbeit gleichzeitig in Bearbeitung ist. Eine Anfrage ist ein Arbeitselement, das durch einen Workflow wandert, daher gelten die Werkzeuge der Flussmessung wie Zykluszeit und Alter von Arbeitselementen unmittelbar (siehe Thema 2.1, Flussmaße). Das Vokabular unterscheidet sich. Die Arithmetik ist dieselbe.

Drei Begriffe kehren wieder. Die **Erfüllungszeit** ist die verstrichene Zeit vom Moment, in dem der Nutzer die Anfrage einreicht, bis zu dem Moment, in dem der Nutzer bestätigt oder das System erfasst, dass die Sache geliefert wurde. Die **Bearbeitungszeit** (Hands-on-Zeit) ist die Zeit, in der jemand aktiv an der Anfrage arbeitet, und die **Wartezeit** ist alles andere, einschließlich Genehmigungen und Warten auf den Nutzer. Der Unterschied zwischen beiden ist das, was ein Anfragemodell verkleinern sollte. Der **Automatisierungsanteil** ist der Teil der Anfragen, die ohne menschliche Berührung nach der Einreichung erfüllt werden.

Zeitmessgrößen brauchen Sorgfalt. Erfüllungszeiten sind schief: Die meisten Anfragen sind schnell fertig, und einige dauern sehr lange. Ein Mittelwert wird von den wenigen hin- und hergezogen, berichten Sie also den Median und ein hohes [Perzentil](https://en.wikipedia.org/wiki/Percentile) wie das 85. oder 95. (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen). Mit Kunden vereinbarte Ziele, etwa in einem [Service Level Agreement (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement), sollten ebenso formuliert werden: „85 Prozent der Laptop-Anfragen innerhalb von 5 Arbeitstagen erfüllt“ sagt mehr als „Durchschnitt 3 Tage“.

Schließlich eine Warnung aus der Psychologie des Messens. Wird ein Team daran gemessen, Anfragen schnell zu schließen, ist der billigste Weg, die Zahl zu verbessern, zu ändern, was als geschlossen zählt, oder die Uhr zu pausieren. [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt voll (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen). Jede Kennzahl unten ist daher mit einer Leitplanke gekoppelt, und keine beschreibt einen einzelnen Agenten.

## Leitprinzipien

- **Je Katalogelement messen.** Jedes Element hat sein eigenes Anfragemodell, seinen Eigner und sein vernünftiges Ziel, gemischte Zahlen führen also in die Irre.
- **Die Uhr starten, wenn der Nutzer fragt, und stoppen, wenn der Nutzer die Sache hat.** Interne Meilensteine sind nützliche Diagnosen, aber nicht das Erleben des Kunden.
- **Wartezeit von Bearbeitungszeit trennen.** Die Lücke zwischen beiden zeigt, wo sich Neugestaltung auszahlt, und sie liegt selten in der Arbeit selbst.
- **Verteilungen berichten, nicht Durchschnitte.** Ein Median und ein 95. Perzentil beschreiben, was Nutzer durchleben.
- **Nachfrage als Signal behandeln.** Das Volumen je Element zeigt, was Nutzer brauchen, was verwirrt und was Automatisierung oder Self-Service verdient.
- **Zuerst das Stabile und Häufige automatisieren.** Der Automatisierungsanteil ist ein Ergebnis guten Anfragedesigns, kein Ziel, dem man um seiner selbst willen nachjagt.
- **Das Team und den Service messen, nie die Person.** Anfragen fließen durch Systeme, und Unterschiede zwischen Agenten spiegeln meist den Arbeitsmix.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Erfüllungszeit der Anfrage | Verstrichene Zeit bis zur Lieferung einer Anfrage, als Median und 95. Perzentil je Katalogelement | Die Uhr startet, wenn der Nutzer die Anfrage einreicht, und stoppt, wenn der Nutzer die Lieferung bestätigt oder die Lieferung erfasst wird; vom Nutzer stornierte Anfragen sind ausgeschlossen; Zeit des Wartens auf den Nutzer wird gesondert berichtet, nicht abgezogen | Arbeitstage oder Stunden | Anfrageverlauf des ITSM-Werkzeugs | Serviceanfragen-Management | Zykluszeit auf dem Team-Board (siehe Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz) | Wöchentlich, monatlich im Trend |
| Erfüllung innerhalb des Ziels | Anteil der Anfragen, die innerhalb des für ihr Katalogelement vereinbarten Ziels geliefert werden | Innerhalb des Ziels erfüllte Anfragen / im Zeitraum erfüllte Anfragen; Uhr wie oben, noch offene Elemente sind ausgeschlossen und stattdessen im Backlog-Alter gezählt | Prozent | Anfrageverlauf des ITSM-Werkzeugs; Zieltabelle der Katalogelemente | Service-Level-Management | Service Level Expectation | Monatlich |
| Anfragen-Rückstand und Alter | Zahl der offenen Anfragen und wie alt die ältesten sind, nach Katalogelement | Am Ende des Zeitraums offene Anfragen (Anzahl); Alter jeder offenen Anfrage = Berichtsdatum minus Einreichungsdatum; Anzahl, mittleres Alter und ältestes Alter berichten | Anzahl und Tage | Offene Anfragewarteschlange des ITSM-Werkzeugs | Serviceanfragen-Management | Arbeit in Bearbeitung und alternde Arbeitselemente (siehe Thema 2.3, Laufende Arbeit und Warteschlangentheorie) | Wöchentlich |
| Wartezeit auf Genehmigung | Zeit, die eine Anfrage auf eine Genehmigung wartet | Die Uhr startet, wenn die Genehmigung angefordert wird, und stoppt, wenn sie erteilt oder abgelehnt wird; Anfragen ohne Genehmigungsschritt sind ausgeschlossen | Stunden | Genehmigungsprotokoll des ITSM-Werkzeugs | Serviceanfragen-Management; Change-Befähigung | Blockierte Zeit oder eine Spalte „wartet“ auf dem Board | Monatlich |
| Anfragevolumen nach Katalogelement | Zahl der je Element eingereichten Anfragen, mit ihrem Anteil an allen Anfragen | Je Element im Zeitraum eingereichte Anfragen; als Duplikate erneut eingereichte Anfragen sind, falls erkannt, ausgeschlossen; Anzahl und Anteil an der Gesamtzahl berichten | Anzahl und Prozent | Anfragedatensätze des ITSM-Werkzeugs | Servicekatalog-Management | Nachfrageanalyse zur Gestaltung des Backlogs | Monatlich |
| Automatisierungsanteil | Teil der Anfragen, die ohne manuellen Schritt nach der Einreichung erfüllt werden | Durchgängig automatisch erfüllte Anfragen / im Zeitraum erfüllte Anfragen; eine Anfrage, die für irgendeinen Erfüllungsschritt von einer Person berührt wird, zählt als manuell; Genehmigungen durch eine Person zählen nicht als manuelle Erfüllungsschritte, wenn die Richtlinie sie verlangt | Prozent | Erfüllungsdatensätze des ITSM-Werkzeugs und Protokolle der Automatisierungsplattform | Serviceanfragen-Management; Automatisierung in der Service-Wertschöpfungskette | Automatisierung in der Definition of Done | Monatlich |
| Wiedereröffnungsrate von Anfragen | Anteil erfüllter Anfragen, die der Nutzer wieder eröffnet oder neu erfasst, weil das Ergebnis falsch oder unvollständig war | Innerhalb von 7 Tagen nach der Erfüllung vom selben Nutzer für dasselbe Element wieder eröffnete oder neu erfasste Anfragen / im Zeitraum erfüllte Anfragen; das 7-Tage-Fenster ist ein Beispiel, das das Team aufschreibt | Prozent | Anfrageverlauf des ITSM-Werkzeugs | Serviceanfragen-Management | Nacharbeitsrate; entwichener Fehler | Monatlich |

Die Erfüllungszeit zählt Arbeitszeit nur, wenn das Team einen Kalender vereinbart und erfasst hat; sonst nutzen Sie verstrichene Stunden und sagen es. Die Rückstandsmessgröße trägt absichtlich drei Zahlen, denn eine Anzahl allein sagt nichts über das Warten. Die Definition des Automatisierungsanteils lässt menschliche Genehmigungen in der „manuell“-Zählung aus, weil viele Genehmigungen eine Richtlinienentscheidung sind und keine Erfüllungskosten; die Wartezeit auf Genehmigung wird gesondert gemessen, damit die Verzögerung sichtbar bleibt.

## Empfehlungen

### Die Uhren und die Einheit definieren

**1. Messen Sie je Katalogelement und veröffentlichen Sie die Elementliste.** Beginnen Sie mit den zehn volumenstärksten Elementen, die meist einen großen Anteil der Anfragen abdecken, und fügen Sie Elemente hinzu, wie die Daten es erlauben. Geben Sie jedem Element einen Eigner, ein genanntes Ziel und eine einzeilige Definition von „geliefert“. Die Elementliste ist der Nenner für alles andere, halten Sie sie also im Kennzahlenregister (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

**2. Schreiben Sie Start und Stopp der Uhr für jedes Element auf.** Bei den meisten Elementen startet die Uhr bei der Einreichung und stoppt, wenn der Nutzer nutzen kann, was er angefordert hat, nicht wenn ein Ticket geschlossen wird. Ein Laptop ist geliefert, wenn er in den Händen des Nutzers ist, nicht wenn der Kurier gebucht ist.

**3. Entscheiden Sie einmal, wie das Warten auf den Nutzer behandelt wird.** Manche Anfragen stocken, weil der Nutzer eine Frage nicht beantwortet hat. Die Uhr dafür zu pausieren ist vernünftig, aber auch der leichteste Hebel zum Missbrauch. Erfassen Sie die Pause als gesonderten Zustand mit Grund, berichten Sie pausierte Zeit als eigene Zahl und überprüfen Sie die Pausenrate je Element (siehe Thema 1.5, Datenquellen und Instrumentierung).

### Berichten, was Nutzer erleben

**4. Zeigen Sie Median und 95. Perzentil, mit einer Anzahl.** Legen Sie beide in ein Diagramm je Element, mit der Zahl der Anfragen hinter jedem Punkt. Ein Median von zwei Tagen mit einem 95. Perzentil von zwanzig sagt Ihnen, dass die meisten Nutzer gut bedient werden und ein Auslauf untersucht werden muss, was ein Durchschnitt von vier Tagen verbirgt. Ist die Anzahl klein, sagen Sie es und zeigen Sie stattdessen die einzelnen Anfragen statt eines Perzentils.

**5. Machen Sie das Alter offener Anfragen sichtbar.** Die Erfüllungszeit ist erst bekannt, nachdem eine Anfrage abgeschlossen ist, sie hinkt also hinterher. Eine Liste der ältesten offenen Anfragen je Element, nach Alter sortiert, sagt einem Team, wohin es heute sehen soll. In Flussbegriffen ist das das Alter von Arbeitselementen gegen die übliche Zykluszeit des Elements, und es ist die handlungsfähigste Sicht, die eine Anfragewarteschlange haben kann.

**6. Teilen Sie die verstrichene Zeit in Bearbeitungs-, Genehmigungs- und Wartezeit auf den Nutzer.** Ziehen Sie eine Stichprobe erfüllter Anfragen für ein Element und zerlegen Sie jede in die in jedem Zustand verbrachte Zeit. Die meisten Teams stellen fest, dass aktive Arbeit ein kleiner Anteil der verstrichenen Zeit ist. Der Befund verlagert das Verbesserungsgespräch von „schneller arbeiten“ zu „die Warteschlange zwischen den Schritten beseitigen“, der Kernidee der Lehre von Warteschlangen und Fluss (siehe Thema 2.3, Laufende Arbeit und Warteschlangentheorie).

### Nachfrage nutzen, um den Service zu gestalten

**7. Lesen Sie das Volumen je Element als Botschaft der Nutzer.** Ein steigendes Volumen für ein Element kann wachsenden Bedarf, ein verwirrendes Produkt oder ein Versagen anderswo bedeuten, etwa einen kaputten Prozess, der Menschen zum erneuten Nachfragen zurückschickt. Ein Element mit sehr geringem Volumen kann ein Kandidat sein, aus dem Katalog genommen zu werden. Vergleichen Sie das Volumen mit Akzeptanzdaten (siehe Thema 6.3, Kennzahlen für Service-Akzeptanz und Katalog).

**8. Ordnen Sie Automatisierungskandidaten nach Volumen, Stabilität und Bearbeitungszeit.** Die besten ersten Kandidaten haben hohes Volumen, variieren selten und tragen spürbare Bearbeitungszeit. Beginnen Sie mit dem Element, dessen Schritte bereits jedes Mal identisch sind, etwa Zugriff auf eine Standardgruppe, und automatisieren Sie die Schritte, bevor Sie die Ausnahmen anfassen. Verfolgen Sie den Automatisierungsanteil je Element, damit Fortschritt sichtbar ist, und schicken Sie Fragen zu Self-Service und Umleitung in ihr eigenes Thema (siehe Thema 3.7, Kennzahlen für Self-Service und Automatisierung).

**9. Gestalten Sie Genehmigungen neu, bevor Sie Personal hinzufügen.** Die Wartezeit auf Genehmigung dominiert oft die verstrichene Zeit. Fragen Sie bei jeder Genehmigung, ob sie durch Richtlinie verlangt wird, ob eine vorab genehmigte Standardanfrage genügte und ob der Genehmiger eine Rolle mit Vertretung statt einer einzelnen Person sein kann. Risikoarme, gut verstandene Anfragen vorab zu genehmigen spiegelt die Idee der Standard-Changes in der Change-Befähigung, und es beseitigt Warteschlangen, ohne Kontrolle zu beseitigen.

### Die Zahlen ehrlich halten

**10. Koppeln Sie Geschwindigkeit jedes Mal mit Qualität.** Berichten Sie die Erfüllungszeit neben der Wiedereröffnungsrate und einem Nutzerzufriedenheitssignal für dasselbe Element (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit). Eine schnellere Anfrage, die wieder eröffnet zurückkommt, ist langsamer, als sie aussieht. Verbessert sich die Geschwindigkeit und steigt die Wiedereröffnungsrate mit, behandeln Sie den Geschwindigkeitsgewinn als unbewiesen.

**11. Halten Sie Anfragen, Incidents und Changes in den Daten getrennt.** Sie zu mischen verzerrt alle drei. Ein Passwort-Reset, der in Wahrheit Symptom eines fehlerhaften Anmeldeservices ist, ist ein Incident, und eine Anfrage, die ändert, wie ein Service funktioniert, ist ein Change. Klassifizieren Sie am Eingang mit einer kurzen Regel, ziehen Sie jedes Quartal Stichproben falsch eingeordneter Elemente und vergleichen Sie Anfrage- und Incident-Volumen nebeneinander (siehe Thema 3.1, Kennzahlen für den Service Desk).

**12. Überprüfen Sie die Elementtabelle mit dem Team, das die Arbeit leistet.** Treffen Sie sich monatlich dreißig Minuten rund um die Tabelle je Element: Volumen, Median und 95. Perzentil, älteste offene Anfrage, Automatisierungsanteil, Wiedereröffnungsrate. Wählen Sie ein Element und eine Änderung zum Ausprobieren und sehen Sie sich im nächsten Monat dieselbe Tabelle an, um zu sehen, was geschah.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Erfüllungszeit der Anfrage | Die Uhr bei „wartet auf Nutzer“ pausieren, ob der Nutzer die Ursache ist oder nicht; Anfragen vor der Lieferung schließen und als neue wieder eröffnen; eine Anfrage in mehrere kleine zerlegen | Anteil pausierter Zeit je Element, mit stichprobenartiger Prüfung der Pausengründe; Wiedereröffnungsrate; Nutzerbestätigung der Lieferung vor dem Schließen |
| Erfüllung innerhalb des Ziels | Das Ziel leichter umdefinieren; nur Anfragen zählen, die enden, und alte offene ignorieren; schnelle Elemente für die Zielmenge herauspicken | Backlog-Alter für offene Anfragen; Änderungen an Zielen mit Grund im Kennzahlenregister protokolliert; die Zielmenge deckt alle Elemente nach Volumen ab |
| Anfragen-Rückstand und Alter | Alte Anfragen als „keine Antwort“ oder „veraltet“ schließen; Anfragen in eine andere Warteschlange oder Kategorie verschieben, sodass sie die gezählte Warteschlange verlassen | Zahl ohne Lieferung geschlossener Anfragen, nach Grund; Kategorie- und Warteschlangenübergaben im Monatsmeeting überprüft |
| Wartezeit auf Genehmigung | Genehmiger genehmigen ohne zu lesen, um ihre Zeit niedrig zu halten; Anfragende hakten Genehmiger außerhalb des Systems nach, sodass die protokollierte Wartezeit kurz ist | Stichprobenprüfung genehmigter Anfragen gegen die Richtlinie; Wiedereröffnungsrate und Sicherheitsausnahmen für genehmigte Elemente; Zahl der Genehmigungsschritte je Element |
| Anfragevolumen nach Katalogelement | Das Volumen verringern, indem der Katalog schwerer zu finden gemacht oder Anfragen entmutigt werden; Anfragen als Incidents oder „allgemeine Auskünfte“ umklassifizieren | Nutzerzufriedenheit mit dem Katalog; Anteil der als „sonstige“ klassifizierten Kontakte; Akzeptanzdaten des Services (siehe Thema 6.3, Kennzahlen für Service-Akzeptanz und Katalog) |
| Automatisierungsanteil | Triviale Elemente automatisieren, um den Prozentsatz zu heben; eine skriptgesteuerte Anfrage, die eine Person noch von Hand prüft, als automatisiert zählen; manuelle Schritte in einem gesonderten Ticket verbergen | Anteil gewichtet nach Volumen und nach beseitigter Bearbeitungszeit; Rate fehlgeschlagener Automatisierung und Rückfalls auf manuell; Stichprobe „automatisierter“ Anfragen durchgängig verfolgt |
| Wiedereröffnungsrate von Anfragen | Wiedereröffnung entmutigen, indem sie schwer gemacht wird; Nutzern sagen, sie sollten eine neue Anfrage eröffnen, was den Zähler zurücksetzt | Wiederholte Anfragen desselben Nutzers für dasselbe Element innerhalb des Fensters; Nutzerzufriedenheit je Element; Wiedereröffnung aus der Benachrichtigung erlaubt |

Ein gesunder Befund sieht so aus. Median und 95. Perzentil fallen gemeinsam, oder das 95. Perzentil fällt, während der Median hält. Die älteste offene Anfrage ist nicht viel älter als das 95. Perzentil der erfüllten. Wiedereröffnungsrate und Zufriedenheit bleiben flach oder verbessern sich, während sich die Geschwindigkeit verbessert. Der Automatisierungsanteil steigt bei den volumenmäßig wichtigen Elementen, und das Volumen selbst ändert sich aus Gründen, die das Team erklären kann. Verbessert sich eine Zahl stark, während ihre Leitplanke in die andere Richtung driftet, sehen Sie sich die Anfragen dahinter an.

## Abwägungen: Vor- und Nachteile

| Wahl | Vorteile | Nachteile |
| --- | --- | --- |
| Messung je Element | Ziele passen zur Arbeit; zeigt, wo sich Neugestaltung auszahlt | Mehr Daten zu pflegen; kleine Elemente haben wenige Datenpunkte |
| Median und 95. Perzentil statt Mittelwert | Beschreibt, was Nutzer durchleben; robust gegen Ausreißer | Für Führungskräfte, die eine Zahl gewohnt sind, schwerer zu erklären; bei Elementen mit geringem Volumen instabil |
| Die Uhr pausieren, wenn auf den Nutzer gewartet wird | Fair zum Team, wenn der Nutzer die Verzögerung verursacht | Leicht missbraucht; verbirgt die Wirkung unklarer Formulare und schlechter Kommunikation |
| Automatisierungsanteil zählen | Macht Fortschritt bei der Automatisierung sichtbar und bindet ihn an Kosten | Belohnt leichte Automatisierungen; sagt nichts über Qualität, wenn nicht mit Fehlerrate gekoppelt |
| Von der Einreichung durch den Nutzer bis zur Bestätigung durch den Nutzer messen | Entspricht dem Erleben des Kunden | Hängt von der Nutzerbestätigung ab, die oft fehlt; braucht eine Standardregel |
| Strikte Trennung von Anfragen und Incidents | Sauberere Daten und bessere Ziele | Braucht Eingangsdisziplin und Streit über Grenzfälle |

Die zentrale Abwägung liegt zwischen einer sauberen Zahl und einer fairen. Eine strikte Uhr, die nie pausiert, ist einfach und schwer zu manipulieren, bestraft aber das Team, wenn der Nutzer langsam ist. Eine flexible Uhr ist fairer, braucht aber Prüfung. Den meisten Teams ist gut gedient, strikt zu beginnen, einen ausdrücklichen pausierten Zustand mit Grund hinzuzufügen und den pausierten Anteil offen zu berichten.

## Fragen für die Diskussion im Team

**1. Welche drei Katalogelemente verursachen für unsere Nutzer am meisten Warten, und woher wissen wir es?**
Bringen Sie die Tabelle je Element mit Volumen, Median und 95. Perzentil der Erfüllungszeit mit. Bitten Sie die Gruppe, Elemente nach dem gesamten Warten (Volumen mal typische Wartezeit) zu wählen, nicht danach, wie ärgerlich sie sich anfühlen. Vergleichen Sie die Antwort mit dem ersten Instinkt der Menschen. Die Moderation sollte festhalten, wo Daten und Instinkt abweichen.

**2. Wo startet und stoppt unsere Uhr, und würde ein Nutzer zustimmen?**
Wählen Sie ein häufiges Element und gehen Sie seinen Weg so durch, wie der Nutzer ihn sieht, vom ersten Klick bis zu dem Moment, in dem er das Ergebnis nutzen kann. Markieren Sie, wo unser Ticketstatus „erledigt“ sagt und wo der Nutzer „erledigt“ sagen würde. Jede Lücke zwischen beiden ist unsichtbares Warten. Einigen Sie sich auf eine Änderung am Stoppereignis und schreiben Sie sie ins Kennzahlenregister.

**3. Wie viel unserer verstrichenen Zeit arbeiten Menschen, und wie viel ist Warten?**
Ziehen Sie zehn erfüllte Anfragen für ein Element und zerlegen Sie jede in Bearbeitungs-, Genehmigungs- und Wartezeit auf den Nutzer. Zeigen Sie das Ergebnis als gestapelten Balken. Fragen Sie, was gelten müsste, damit sich das Warten halbiert. Diese Frage verschiebt den Raum meist von „wir brauchen mehr Personal“ zu „wir brauchen weniger Übergaben“.

**4. Welche Genehmigungen ließen sich durch eine vorab vereinbarte Regel ersetzen?**
Listen Sie die Genehmigungen der obersten Elemente und den Richtliniengrund jeder auf. Wo sich niemand an die letzte Ablehnung erinnern kann, kann die Genehmigung ein Ritual sein.

**5. Wenn wir das nächste Katalogelement automatisierten, würde die Zahl aus dem richtigen Grund steigen?**
Besprechen Sie, wie der Automatisierungsanteil über leichte oder volumenarme Elemente steigen kann, während Nutzer keinen Unterschied sehen. Fragen Sie, was das Team messen würde, um zu bestätigen, dass eine Automatisierung geholfen hat: beseitigte Bearbeitungszeit, Fehlerrate, Wiedereröffnungsrate und Zufriedenheit. Entscheiden Sie anhand von Volumen und Bearbeitungszeit, welches Element als Nächstes automatisiert wird, nicht allein nach Leichtigkeit.

**6. Was würden wir tun, wenn eine Zahl auf dieser Seite schlechter würde, und wem würde man die Schuld geben?**
Führen Sie das Gedankenexperiment offen durch. Fragen Sie, was das Team versucht wäre, an den Daten zu ändern, bevor es den Service ändert. Einigen Sie sich, dass die erste Reaktion auf eine schlechter werdende Zahl ist, sich die Anfragen dahinter anzusehen.

## Vier Perspektiven

### Produkt- und Lieferteams

Produktteams erzeugen Anfragen zu ihren eigenen Services: Zugriff auf Umgebungen, neue Pipelines, Testdaten, Lizenzschlüssel. Lange Erfüllungszeiten dafür zeigen sich als Leerlauf im eigenen Fluss des Teams, die Messgröße gehört also als blockierter Zustand auf ihr Board. Teams, die einen Service besitzen, sollten ihre eigenen Anfrageelemente und Ziele veröffentlichen und wiederholte Anfragen als Backlog-Kandidaten behandeln (siehe Thema 2.6, Kennzahlen für Backlog und Refinement). Ist eine Anfrage in Wahrheit eine fehlende Plattformfähigkeit, ist die wiederholte Nachfrage das Argument, sie zu bauen.

### Service- und Betriebsteams

Für die Menschen, die Anfragen erfüllen, ist die Tabelle je Element eine Karte dafür, wohin der Aufwand geht. Sie wissen, welche Schritte manuell sind, welche Genehmigungen stocken und welche Formulare vage Eingaben erzeugen. Sie sollten die Anfragemodelle, den Automatisierungs-Backlog und das monatliche Review besitzen und das erste Publikum der Daten sein. Die Zahlen beschreiben die Warteschlange und den Prozess, machen Sie also ausdrücklich, dass niemand in eine Rangfolge gebracht wird und Unterschiede zwischen Menschen meist den Mix der übernommenen Anfragen spiegeln.

### Führung und Governance

Führungskräfte brauchen eine kurze Sicht: Median und 95. Perzentil für die Hauptelemente, den Anteil innerhalb des Ziels erfüllter Anfragen, die ältesten offenen Anfragen und den Trend von Automatisierungsanteil und Kosten je Anfrage (siehe Thema 7.5, Servicekosten und Stückökonomie). Die Governance-Aufgabe ist zu fragen, was sich geändert hat, nicht wer langsam ist. Führungskräfte genehmigen auch die Richtlinienseite von Genehmigungen und halten damit den Hebel, der das Warten am meisten verringert.

### Kunden und Nutzer

Nutzern sind drei Dinge wichtig: wie lange, wie vorhersagbar und wie viel Aufwand. Interne Zustände interessieren sie selten. Zeigen Sie ihnen ein schlichtes Ziel je Element („Laptops in fünf Arbeitstagen“), sagen Sie ihnen, wo ihre Anfrage steht, und bitten Sie sie, die Lieferung zu bestätigen. Erheben Sie beim Schließen ein Zufriedenheitssignal mit einer Frage und lesen Sie die Kommentare.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung einer regionalen Universität (eine fiktive Organisation) betreibt einen Service Desk und ein kleines Plattformteam. Die Zahlen unten sind illustrativ, nicht von einer echten Organisation.

Im Monatsreview sieht sich das Team die Tabelle je Element an. Über alle Anfragen beträgt die durchschnittliche Erfüllungszeit 3,1 Arbeitstage, was akzeptabel aussieht und sich ein Jahr lang kaum bewegt hat. Nach Element ist das Bild anders. „Zugriff auf Laufwerk“ hat einen Median von 0,4 Tagen und ein 95. Perzentil von 2 Tagen. „Software-Lizenz der Abteilung“ hat einen Median von 2 Tagen und ein 95. Perzentil von 11 Tagen. „Laptop für neue Mitarbeitende“ hat einen Median von 6 Tagen und ein 95. Perzentil von 15 Tagen. Die drei volumenstärksten Elemente sind Laufwerkszugriff, Lizenzanfragen und Laptops für neue Mitarbeitende, mit illustrativen Anteilen von 32, 21 und 9 Prozent aller Anfragen.

Das Team zieht zehn Laptop-Anfragen als Stichprobe und teilt die Zeit auf. Illustratives Ergebnis: etwa 0,5 Tage Bearbeitungszeit, 2,5 Tage Warten auf die Genehmigung der Führungskraft, 1,5 Tage Warten auf die Bestandsbestätigung und der Rest in einer Kurierwarteschlange. Die Wartezeit auf Genehmigung ist das größte Stück.

Die Entscheidung folgt aus den Daten. Das Team schlägt mit der Finanzverantwortlichen und dem Sicherheitsverantwortlichen vor, dass Laptops des Standardkatalogs vorab genehmigt werden, sobald die Rolle der neuen Mitarbeiterin von der Personalabteilung bestätigt ist, wobei die Führungskraft benachrichtigt statt gefragt wird. Außerdem verbinden sie die Bestandsprüfung mit dem Inventarsystem. Sie setzen das Experiment für ein Quartal und vereinbaren, was als Erfolg zählt: Das 95. Perzentil für Laptops fällt, und Wiedereröffnungsrate und Zufriedenheitswert bleiben gleich.

Im zweiten Monat zeigt sich ein Manipulationsrisiko. Der Median für Lizenzen sinkt stark, von 2 Tagen auf unter 1. Das Review bemerkt, dass der Anteil pausierter Zeit „wartet auf Nutzer“ für das Element von illustrativen 5 Prozent auf 40 Prozent gesprungen ist und die Wiedereröffnungsrate gestiegen ist. Eine Stichprobe zeigt, dass Agenten Anfragen mit einer generischen Nachricht pausierten, sobald eine Lizenz irgendeine Prüfung brauchte, was die Uhr stoppte. Das Team gibt den Agenten nicht die Schuld. Es sieht, dass das Ziel das Pausieren attraktiv machte und das Pausengrundfeld Freitext war. Es ändert den Pausengrund zu einer kurzen Liste, verlangt eine konkrete Frage an den Nutzer und nimmt den Anteil pausierter Zeit als ständige Spalte neben den Median auf. Der Lizenz-Median kehrt nahe an sein früheres Niveau zurück, die Wiedereröffnungsrate fällt, und das Team nutzt die gesparte Diskussionszeit, um das Lizenzformular neu zu gestalten, das die unklaren Anfragen erzeugte.

Nach dem Quartal (illustrativ) fällt das 95. Perzentil für Laptops von 15 auf 9 Tage, und der Automatisierungsanteil für Laufwerkszugriff erreicht 70 Prozent. Das Team protokolliert beide Änderungen und wählt das Lizenzformular als nächstes Experiment.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Behandeln Sie häufige Anfragen als kleine Produkte, die das Team gemeinsam mit den Menschen, die sie nutzen, laufend verbessert. Zu beachten ist, dass ein Ziel für die Erfüllungszeit dazu führen kann, Anfragen früh zu schließen oder zu zerlegen; koppeln Sie es also mit der Wiedereröffnungsrate von Anfragen.

### KI

KI kann Antworten entwerfen, Formulare ausfüllen und Anfragen leiten und manche Anfragen ohne menschliche Beteiligung abschließen. Koppeln Sie den Automatisierungsanteil mit der Wiedereröffnungsrate von Anfragen und mit dem Anteil der von KI bearbeiteten Anfragen, die danach einen Menschen brauchten. Zu beachten ist, dass eine KI, die eine Anfrage falsch liest, falschen Zugriff oder eine falsche Bestellung erzeugen kann; Genehmigungsregeln gelten also weiter.

### Automatisierung

Automatisieren Sie Genehmigungen, Bereitstellung und Statusmeldungen für Standardanfragen und messen Sie die Automatisierung an Fehlern und manueller Nacharbeit. Zeigen Sie die Wartezeit auf Genehmigung gesondert, denn sie ist oft das längste Warten. Zu beachten ist, dass Automatisierung ohne klare Verantwortung fehlgeschlagene Anfragen in einer Warteschlange lässt, die niemand beobachtet.

### Analytik

Zeigen Sie die Erfüllungszeit als Verteilung nach Katalogelement und nehmen Sie die älteste offene Anfrage auf. Die Entscheidung, die dies untermauert, ist, welche Anfrage zuerst neu zu gestalten ist. Zu beachten ist, dass das Mischen einfacher und komplexer Elemente in einem Durchschnitt beides verbirgt.

## Branchenperspektive

**Startup.** Ein Startup hat wenige Anfragetypen und keinen formalen Katalog, und dieselben Menschen bearbeiten Anfragen und bauen das Produkt. Messen Sie die drei oder vier Anfragen, die Neueinsteiger blockieren, etwa Konten und Ausrüstung, und verfolgen Sie die älteste offene Anfrage. Automatisieren Sie das Onboarding früh, denn jede Einstellung wiederholt es.

**Kleinunternehmen.** Ein Kleinunternehmen verlässt sich oft auf eine IT-Person oder einen externen Provider. Nutzen Sie ein einfaches gemeinsames Board mit einer Spalte für jeden Zustand und verfolgen Sie Anfragealter und Volumen nach Typ. Bitten Sie den Provider um das monatliche Volumen je Element und die älteste offene Anfrage.

**Großunternehmen.** Ein Großunternehmen hat hunderte Katalogelemente, viele Erfüllungsgruppen und geschichtete Genehmigungen. Konzentrieren Sie sich auf die volumenstärksten Elemente und auf die nach Gesamtwarten längsten Elemente. Standardisieren Sie die Uhrendefinition über Erfüllungsgruppen, bevor Sie sie vergleichen, und berichten Sie gruppenübergreifende Übergaben gesondert (siehe Thema 9.3, Kennzahlen für Zusammenarbeit und Übergaben). Erfüllungszeiten von Lieferanten gehören in dieselbe Sicht, gemessen ab der Anfrage des Kunden, nicht ab dem Eingang beim Lieferanten.

**Behörden und öffentlicher Sektor.** Öffentliche Stellen haben zusätzlich verpflichtende Genehmigungen, Beschaffungsregeln und Aufbewahrungspflichten, sodass ein Teil der Wartezeit Richtlinie ist und als solche gekennzeichnet werden sollte, statt als zu beseitigende Verzögerung gezählt zu werden. Veröffentlichen Sie Ziele je Element in einfacher Sprache, wo Servicezusagen öffentlich sind. Berichten Sie so, dass eine Aufsichts- oder Kontrollstelle es reproduzieren kann, mit aufgeschriebenen Definitionen.

## Business Case: Motive, ROI und TCO

Anfragen sind ein großer und sich wiederholender Anteil der Arbeit, die einen Service Desk erreicht, daher hat selbst bescheidene Neugestaltung eine breite Wirkung. Die Hauptmotive sind kürzere und vorhersagbarere Wartezeiten für Nutzer, geringerer Bearbeitungsaufwand je Anfrage, weniger wiederholte Kontakte und für Problem- und Verbesserungsarbeit freigesetzte Kapazität.

Die Kostenseite ist überwiegend einmalig und bescheiden. Katalogelemente zu definieren, die Uhren abzustimmen und sicherzustellen, dass das Werkzeug die nötigen Zustände erfasst, sind einige Tage Arbeit je Gruppe, plus ein kleiner laufender Aufwand, die Pipeline korrekt zu halten (siehe Thema 1.5, Datenquellen und Instrumentierung). Automatisierung hat ihre eigenen Bau- und Wartungskosten, einschließlich der Überwachung der Automatisierungen, des Umgangs mit Fehlern und der Aktualisierung, wenn sich die Zielsysteme ändern. Zählen Sie das in die Gesamtbetriebskosten über Lizenz oder Bauzeit hinaus.

Der Ertrag sollte aus Ihren eigenen Daten geschätzt werden und nicht aus einem allgemeinen Benchmark. Multiplizieren Sie für ein Element das Monatsvolumen mit der gesparten Bearbeitungszeit und den Vollkosten der Zeit und ziehen Sie dann die Bau- und Betriebskosten der Änderung ab. Fügen Sie den Wert der für Nutzer beseitigten Wartezeit mit einer Methode hinzu, die Sie vertreten können, und zeigen Sie ihn gesondert, denn er ist eine Schätzung anderer Art. Keine Zahl in diesem Thema ist ein Benchmark, und die Beispielzahlen sind illustrativ. Verbinden Sie den Business Case mit den Stückkosten je Anfrage, wo Finanzdaten existieren (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Ein gemischter Durchschnitt für alle Anfragen.** Er verbirgt sowohl die schnellen Gewinne als auch den langen Auslauf. Berichten Sie je Element, mit Median und 95. Perzentil.
- **Das Ticket schließen und es geliefert nennen.** Der Nutzer hat womöglich noch nichts. Definieren Sie Lieferung von der Nutzerseite und bitten Sie um Bestätigung.
- **Freie Pausenstatus.** Ein Status „wartet“ ohne Grund lässt die Uhr aus jedem Anlass stoppen. Nutzen Sie eine kurze Liste von Gründen und berichten Sie den pausierten Anteil.
- **Automatisierung nach Elementzahl zählen.** Zehn automatisierte seltene Elemente können den Prozentsatz heben und niemandem helfen. Gewichten Sie nach Volumen und Bearbeitungszeit.
- **Agenten nach geschlossenen Anfragen ordnen.** Es belohnt das Herauspicken leichter Tickets und bestraft Menschen, die schwere übernehmen. Berichten Sie nur auf Team- und Elementebene.
- **Nachfrage verbergen, um effizient zu wirken.** Den Katalog schwer nutzbar zu machen senkt das Volumen und erhöht den Frust. Koppeln Sie das Volumen mit Zufriedenheits- und Akzeptanzdaten.
- **Genehmigungen als unantastbar behandeln.** Genehmigungen sind oft die größte Verzögerung und werden selten überprüft. Fragen Sie, was jede schützt und ob eine Regel die Aufgabe erledigen kann.
- **Anfragen mit Incidents mischen.** Es verzerrt beide Zahlenmengen. Klassifizieren Sie am Eingang und ziehen Sie Stichproben der Klassifizierung.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definitionen und Uhren | Anfragen werden als Tickets gezählt; das Ende der Uhr ist, was „geschlossen“ bedeutet | Einige Teams definieren Start und Stopp je Element; Definitionen unterscheiden sich | Eine schriftliche Uhrendefinition je Katalogelement, über Teams geteilt | Definitionen im Rhythmus überprüft und Änderungen mit Gründen protokolliert | Definitionen folgen der Sicht des Kunden über Lieferanten und werden überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| Daten und Berichte | Zählungen von Hand aus dem Werkzeug gezogen | Berichte für einige Elemente aus dem ITSM-Werkzeug; mittlere Zeiten | Median und 95. Perzentil je Element aus einer Datenquelle | Trends, Backlog-Alter und Anteil pausierter Zeit mit ihren Leitplanken überprüft | Erfüllungsdaten interner Teams und Lieferanten kombiniert und mit Nutzerergebnissen verknüpft |
| Nachfrage und Automatisierung | Anfragen einzeln bearbeitet; keine Sicht auf wiederkehrende Nachfrage | Oberste Elemente informell identifiziert; einige Skripte | Anfragemodelle für oberste Elemente dokumentiert; Automatisierungs-Backlog nach Volumen und Bearbeitungszeit geordnet | Automatisierungsanteil und Fehlerrate verfolgt; Genehmigungen anhand von Belegen neu gestaltet | Nachfrage, Self-Service und Automatisierung gemeinsam in der Organisation geplant und laufend angepasst |
| Nutzung in der Verbesserung | Zahlen werden nach oben berichtet, nicht genutzt | Gelegentliche Korrekturen nach Beschwerden | Monatliches Review durch das Team, das die Arbeit leistet | Finanzierte Verbesserungen an Ergebnisse je Element gebunden | Verbesserungsideen kommen von Teams, Nutzern und Lieferanten, und Ergebnisse fließen in den Katalogentwurf zurück |

## Checkliste

- [ ] Jedes Katalogelement im Geltungsbereich hat einen Eigner, eine einzeilige Definition von „geliefert“ und ein genanntes Ziel.
- [ ] Start- und Stoppereignis der Erfüllungsuhr sind für jedes Element aufgeschrieben.
- [ ] Warten auf den Nutzer ist ein gesonderter Zustand mit einer kurzen Liste von Gründen, und pausierte Zeit wird berichtet.
- [ ] Berichte zeigen Median und 95. Perzentil je Element, mit der Zahl der Anfragen dahinter.
- [ ] Die ältesten offenen Anfragen sind dem Team jede Woche sichtbar.
- [ ] Bearbeitungs-, Genehmigungs- und Wartezeit wurden für die obersten Elemente als Stichprobe erfasst.
- [ ] Das Volumen je Element wird monatlich überprüft und mit Akzeptanz- oder Zufriedenheitsdaten verglichen.
- [ ] Der Automatisierungsanteil ist nach Volumen gewichtet und mit Fehler- und Rückfallraten gekoppelt.
- [ ] Jede Geschwindigkeitsmessgröße ist mit der Wiedereröffnungsrate und einem Nutzerzufriedenheitssignal gekoppelt.
- [ ] Anfragen, Incidents und Changes werden am Eingang klassifiziert, und die Klassifizierung wird stichprobenartig geprüft.
- [ ] Kein Bericht ordnet einzelne Agenten.

## KI-Prompts

**Ein Anfragemodell und eine Uhrendefinition für ein Katalogelement entwerfen.**

```text
I am defining the measurement for this catalog item: [catalog item name]. The
steps today are [list steps and who does each], the approvals are [list
approvals], and our tool is [ITSM tool]. Draft a request model with the
information required, the start and stop events of the fulfillment clock, the
states in which the clock may pause and the allowed reasons, and a list of
timestamps I need the tool to record. Do not invent benchmark values or tool
features. List your assumptions and the questions I should answer to finish the
definition.
```

**Die verstrichene Zeit in Bearbeitungs- und Wartezeit zerlegen.**

```text
Here is a sample of [number] fulfilled requests for [catalog item] with state
change times: [paste anonymized state history, no names]. Compute, for each
request and for the sample, the hands-on time, approval wait, and waiting-for-user
time, and show the median and the range. Point out which state holds the most
time and what questions I should ask the team about it. Do not infer causes
without evidence, and do not compare individual people. List your assumptions.
```

**Automatisierungskandidaten ordnen.**

```text
Here is a table of catalog items with monthly volume, median hands-on time,
variation in steps, and the systems each touches: [paste table]. Suggest a way
to rank automation candidates using volume, stability, and hands-on time, and
explain the ranking for the top [number] items. Flag items where automation could
create security or quality risk, and list what I should verify with [control
owner role] first. Do not invent savings figures or benchmark values. List your
assumptions.
```

**Ein Erfüllungs-Dashboard auf Manipulationsrisiko prüfen.**

```text
This is our request fulfillment dashboard: [describe metrics, definitions, and
targets]. For each metric, list how it could be gamed or misread, the
observable sign in the data, and a paired guardrail metric or practice. Check
that nothing ranks individuals, and suggest wording changes that reduce
pressure on the team. Do not invent thresholds; ask me for any you need. List
your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um Definition, Manipulationsvektor und Leitplanke einer Anfragekennzahl zu finden, dazu die Nachbarthemen, die dazu passen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass Änderungen an diesem Thema Vorlage, Uhren und Leitplankenpaarungen intakt halten.

## Wichtigste Erkenntnisse

- Messen Sie die Erfüllung je Katalogelement, von der Einreichung durch den Nutzer bis zur Bestätigung durch den Nutzer, und berichten Sie Median und ein hohes Perzentil.
- Der größte Teil der verstrichenen Zeit ist Warten, teilen Sie also Bearbeitungs-, Genehmigungs- und Wartezeit auf den Nutzer auf, bevor Sie entscheiden, was zu beheben ist.
- Lesen Sie das Volumen je Element als Botschaft der Nutzer und automatisieren Sie zuerst die häufigen und stabilen Elemente.
- Koppeln Sie jede Geschwindigkeitszahl mit der Wiedereröffnungsrate und einem Zufriedenheitssignal und berichten Sie pausierte Zeit offen.
- Beschreiben Sie die Warteschlange und den Prozess, nie die Person.

## Quellen und weiterführende Literatur

1. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
2. AXELOS, *ITIL 4 Practice Guide: Service Request Management*, TSO (The Stationery Office), 2020.
3. ISO/IEC 20000-1, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Process automation](https://en.wikipedia.org/wiki/Process_automation).
12. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
