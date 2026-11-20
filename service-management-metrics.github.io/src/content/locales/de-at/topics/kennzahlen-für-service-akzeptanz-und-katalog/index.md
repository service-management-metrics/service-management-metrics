# Kennzahlen für Service-Akzeptanz und Katalog

**Ein Service, den niemand wählt, findet oder für den niemand eine Anfrage abschließt, hat keinen Wert geliefert. Messen Sie also, wie Menschen entdecken und nutzen, was Sie anbieten, und halten Sie den Katalog so ehrlich wie einen Backlog.**

## Überblick und Motivation

Teams investieren in Services und entdecken dann, dass Menschen sie nicht nutzen. Das neue Self-Service-Portal wird per E-Mail umgangen. Ein sorgfältig entworfenes Katalogelement für Softwarezugriff erhält zwei Anfragen im Jahr, während hundert im Monat per Chat eintreffen. Ein Monitoring-Service startet, und die Hälfte der Teams, für die er gebaut wurde, schließt sich nie an. Akzeptanz ist die fehlende Hälfte der Lieferung: Ein Service ist nur dann wertvoll, wenn seine vorgesehenen Nutzer beginnen, ihn zu nutzen, dabei bleiben und ihn zu Ende nutzen.

Der **Servicekatalog** (ITIL schreibt „service catalogue“) ist die Liste der Services und anforderbaren Elemente, die eine Organisation anbietet, in Begriffen beschrieben, die ihre Nutzer verstehen. Ein [Servicekatalog](https://en.wikipedia.org/wiki/Service_catalog) hat meist eine kundenseitige Sicht, die auflistet, was ein Nutzer anfordern kann und wie, und eine technische Sicht, die festhält, wie jeder Service gebaut und unterstützt wird. Agile Teams erkennen die Form wieder: Ein Katalog ist eine Art [Product Backlog](https://en.wikipedia.org/wiki/Product_backlog) in umgekehrter Richtung. Ein Backlog listet auf, was man zu bauen beabsichtigt. Ein Katalog listet auf, was man bereits anbietet, und beide brauchen dieselbe Sorgfalt: Ordnung, Beschneiden, klare Formulierung und einen stetigen Strom von Feedback der Nutzer (siehe Thema 2.6, Kennzahlen für Backlog und Refinement).

**Akzeptanz** ist das Ausmaß, in dem die vorgesehenen Nutzer einen Service annehmen und weiter nutzen. Die Untersuchung, wie sich neue Praktiken verbreiten, hat eine lange Geschichte; die Theorie der [Diffusion von Innovationen](https://en.wikipedia.org/wiki/Diffusion_of_innovations) beschreibt Akzeptanz als Prozess über die Zeit, mit frühen Anwendern, einer Mehrheit und Nachzüglern. Für einen internen Service ist die praktische Lehre, dass Akzeptanz selten wegen einer Ankündigung geschieht. Sie geschieht, wenn der Service leicht zu finden, leicht zu nutzen und klar besser ist als die Umgehung.

Akzeptanzkennzahlen verlocken dazu, sie zu Zielen zu machen. Einen Kanal vorzuschreiben lässt eine Nutzungszahl gut aussehen, während Nutzer es übelnehmen und Umgehungen bauen. Jede Anfrage in ein Katalogelement zu drücken lässt die Katalogabdeckung steigen, während der Abschluss fällt. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt, jede Kennzahl hier ist also mit einer Prüfung gekoppelt, dass echter Wert steigt, nicht bloße Nutzung (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Dieses Thema behandelt vier Dinge: ob Menschen einen Service nutzen (Akzeptanz), ob sie finden und abschließen können, weswegen sie kamen (Katalog und Anfragefluss), ob der Katalog aktuell und ehrlich ist (Hygiene) und ob sich die Nutzung auf wenige Elemente konzentriert (Form). Es verbindet sich mit der Erfüllung von Serviceanfragen (siehe Thema 3.5, Kennzahlen für die Erfüllung von Serviceanfragen) und Self-Service (siehe Thema 3.7, Kennzahlen für Self-Service und Automatisierung), die behandeln, was geschieht, nachdem die Anfrage gestellt ist.

## Leitprinzipien

- **Akzeptanz ist ein Ergebnis, also fragen, was der Nutzer zu tun versuchte.** Zählen Sie abgeschlossene Ziele, nicht Seitenaufrufe.
- **Den Trichter messen, nicht nur die Summe.** Wo Menschen aussteigen, sagt Ihnen, was zu beheben ist.
- **Mit der Alternative vergleichen.** Ein Service konkurriert mit E-Mail, Chat, einem Anruf und einer Umgehung.
- **Den Katalog so klein und aktuell halten, wie er sein kann.** Veraltete Elemente lehren Nutzer, nicht mehr zu suchen.
- **Segmentieren, bevor man schließt.** Durchschnitte über alle Nutzer verbergen die Gruppen, für die der Service nicht funktioniert.
- **Nutzung nie erzwingen, um eine Zahl zu heben.** Vorgaben erzeugen Zahlen, keine Akzeptanz.
- **Geringe Nutzung als Frage an den Eigner und die Nutzer behandeln.** Sie kann bedeuten, dass der Service nicht gebraucht wird.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Akzeptanzrate | Anteil der berechtigten Nutzer, die einen Service im Zeitraum mindestens einmal nutzten | verschiedene berechtigte Nutzer mit mindestens einer abgeschlossenen Nutzung / berechtigte Nutzer | Prozent | Service-Nutzungslogs, verbunden mit dem Nutzerverzeichnis | Management des Servicekatalogs; Service-Level-Management | Funktionsakzeptanz; Review der Produktergebnisse | Monatlich |
| Rate aktiver Nutzung | Anteil der Anwender, die den Service über die Zeit weiter nutzen | im Zeitraum aktive Nutzer, die den Service auch im Vorzeitraum nutzten / im Vorzeitraum aktive Nutzer | Prozent | Nutzungslogs; Kohortentabellen | Kontinuierliche Verbesserung | Bindung in der Produktanalytik | Monatlich |
| Katalogabdeckung | Anteil der Anfragen, die über den Katalog statt über Ad-hoc-Kanäle eintreffen | über den Katalog erstellte Anfragen / alle Anfragen aus allen Kanälen | Prozent | Werkzeug für Anfragenmanagement; Tags für Postfach und Chat | Management von Serviceanfragen; Management des Servicekatalogs | Backlog-Elemente mit schriftlicher Definition | Monatlich |
| Abbruchrate von Anfragen | Anteil der begonnenen Anfragen, die der Nutzer nicht abschickt | binnen 24 Stunden nicht abgeschickte begonnene Anfragen / begonnene Anfragen | Prozent | Portal-Analytik | Management von Serviceanfragen | Aufgabenabbruch in Usability-Tests | Monatlich |
| Erfolgsrate der Suche | Anteil der Katalogsuchen, die in einer Anfrage oder einer angesehenen Antwort enden | Suchen, auf die innerhalb der Sitzung eine Anfrage oder ein Wissensaufruf folgte / Suchen | Prozent | Suchlogs des Portals | Wissensmanagement; Management des Servicekatalogs | Auffindbarkeit in der Nutzerforschung | Monatlich |
| Anteil veralteter Elemente | Anteil der Katalogelemente, die ihr Review-Datum überschritten haben oder in einem festgelegten Zeitraum nicht genutzt wurden | Elemente mit überfälligem Review oder null Anfragen in 12 Monaten / Elemente im Katalog | Prozent | Katalogregister | Management des Servicekatalogs | Alter des Backlogs und Beschneiden | Vierteljährlich |
| Anfragekonzentration | Anteil der Anfragen, den die am meisten angefragten Elemente ausmachen | Anfragen für die fünf häufigsten Elemente / alle Katalog-Anfragen | Prozent | Werkzeug für Anfragenmanagement | Management von Serviceanfragen | Pareto der Arbeit nach Typ | Vierteljährlich |

Nennen Sie für jede Kennzahl die Nutzerbasis. „Berechtigte Nutzer“ müssen vor der Messung definiert werden, zum Beispiel Mitarbeitende in den Rollen, die einen Service nutzen könnten, und die Liste im Kennzahlenregister festgehalten werden. Zählen Sie eine Nutzung nur, wenn sie in einem abgeschlossenen Ergebnis endet, etwa einer erteilten Zugriffsberechtigung, und nicht, wenn eine Seite lädt. Schließen Sie Testkonten und automatisierten Verkehr aus.

## Empfehlungen

### Die eigenen Services und Nutzer kennen

**1. Definieren Sie die vorgesehene Zielgruppe für jeden Service.** Schreiben Sie vor der Messung der Akzeptanz auf, für wen der Service ist und warum sie ihn statt der Alternative nutzen würden. Ein neuer Analytik-Service für Finanzpersonal hat keine „niedrige Akzeptanz“, wenn nur Finanzpersonal ihn nutzen sollte. Ohne definierte Zielgruppe ist die Akzeptanzrate eine Zahl über niemanden.

**2. Erfassen Sie die Alternative.** Listen Sie für jeden wichtigen Service auf, was Menschen jetzt tun, wenn sie ihn nicht nutzen: einen Kollegen fragen, eine E-Mail schicken, ein Werkzeug kaufen, eine Tabelle betreiben. Behandeln Sie die Alternative als Konkurrenten in dem Sinn, der zählt: Sie ist der Ort, wohin Ihre Nutzer gehen, wenn Ihr Service schwerer ist. Vergleichen Sie den Aufwand beider Wege bei Entwurf und Review.

**3. Beschreiben Sie Elemente in der Sprache der Nutzer.** Titel wie „Softwarezugriff, Standard“ und „Laptop-Ersatz, beschädigt“ sind leichter zu finden als interne Namen. Testen Sie Titel, indem Sie einige Nutzer bitten, ein Element anhand eines kurzen Szenarios zu finden. Formulierungsprobleme zeigen sich schnell in den Suchlogs.

**4. Halten Sie für jedes Element einen Eigner.** Jedes Katalogelement hat einen benannten Eigner, ein Review-Datum, eine Beschreibung der Zielgruppe und das erwartete Volumen. Elemente ohne Eigner driften. Kann niemand sagen, wer ein Element nutzt und warum, ist es ein Kandidat zum Entfernen.

### Die Reise messen

**5. Instrumentieren Sie den Trichter.** Erfassen Sie für jeden wichtigen Service die Schritte von der Entdeckung bis zum abgeschlossenen Ergebnis: das Element finden, die Anfrage beginnen, das Formular ausfüllen, abschicken, das Ergebnis erhalten. Eine [Conversion-Trichter](https://en.wikipedia.org/wiki/Conversion_funnel)-Sicht zeigt, wo Nutzer aussteigen. Beheben Sie zuerst den größten Abfall. Prüfen Sie, dass die Korrekturen das Formular kürzer oder klarer machen und nicht nur die Daten hübscher.

**6. Nutzen Sie Kohorten, um Bindung zu sehen.** Eine [Kohortenanalyse](https://en.wikipedia.org/wiki/Cohort_analysis) gruppiert Nutzer danach, wann sie den Service erstmals nutzten, und verfolgt jede Gruppe. Sie trennt einen Service, der seine Nutzer hält, von einem, der sie einmal anzieht und verliert. Nutzen Sie sie für Services, die wiederholt genutzt werden sollten, etwa das Portal des Service Desks oder eine Deployment-Pipeline.

**7. Lesen Sie Suchlogs darauf, was Menschen nicht finden können.** Suchen ohne Ergebnis oder mit anderen Worten wiederholte Suchen weisen auf Lücken in Benennung, Inhalt oder im Katalog selbst. Überprüfen Sie die häufigsten Suchen ohne Ergebnis monatlich und entscheiden Sie für jede: ein Element umbenennen, ein Synonym hinzufügen, einen Artikel schreiben oder ein neues Element anlegen. Werkzeuge der [Webanalytik](https://en.wikipedia.org/wiki/Web_analytics) können das liefern, ebenso die eigenen Logs des Portals.

**8. Segmentieren Sie nach Gruppe.** Schlüsseln Sie Akzeptanz und Abbruch nach Rolle, Standort, Gerät und Barrierefreiheitsbedarf auf, wo Sie rechtmäßig und ethisch Zugang zu diesen Informationen haben. Das Gesamtbild kann gesund aussehen, während Nachtschichtpersonal oder Nutzer mobiler Geräte mit doppelter Rate scheitern. Unterdrücken Sie kleine Gruppen zum Schutz der Menschen und kombinieren Sie mit den Erlebniskennzahlen aus den vorigen Themen (siehe Thema 6.2, Experience Level Agreements).

### Den Katalog ehrlich halten

**9. Beschneiden Sie nach Plan.** Überprüfen Sie den Katalog jedes Quartal. Entfernen oder führen Sie Elemente ohne Nutzung zusammen, stellen Sie Elemente für eingestellte Services ein und beheben Sie Elemente mit hohem Abbruch. Ein kleinerer, genauer Katalog dient Nutzern besser als ein vollständiger, veralteter. Behandeln Sie das Entfernen als normal und erfassen Sie den Grund.

**10. Schauen Sie auf die Form der Nachfrage.** In den meisten Katalogen machen wenige Elemente den größten Teil der Anfragen aus, ein Muster, das oft über das [Pareto-Prinzip](https://en.wikipedia.org/wiki/Pareto_principle) beschrieben wird. Nutzen Sie es, um Entwurfsaufwand auf die häufigen Elemente zu richten und die routinemäßigen zu automatisieren (siehe Thema 3.7, Kennzahlen für Self-Service und Automatisierung). Lassen Sie den langen Schwanz nicht ohne Blick fallen, denn seltene Elemente können für die Menschen, die sie brauchen, sehr viel bedeuten.

**11. Erzwingen Sie keine Akzeptanz.** Wird ein Service gebraucht, kommen Nutzer, sobald er leicht ist. Verlangt die Organisation aus Kontroll- oder Prüfgründen einen Kanal, sagen Sie es und seien Sie offen, dass die Zahl eine Regel widerspiegelt, nicht Vorliebe. Vermeiden Sie [Dark Patterns](https://en.wikipedia.org/wiki/Dark_pattern), etwa die Telefonnummer zu verstecken oder die Alternative schwerer zu machen, denn sie steigern die Nutzung und senken das Vertrauen.

**12. Schließen Sie die Schleife mit Eignern und Nutzern.** Teilen Sie den Trichter, die Suchlücken und die Liste veralteter Elemente monatlich mit den Elementeignern. Fragen Sie Nutzer in der Umfrage und in Reviews, warum sie einen Service nutzen oder meiden (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit). Erfassen Sie im Register, was Sie änderten, und sagen Sie Nutzern, dass es geschah.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Akzeptanzrate | Nutzung vorschreiben; Anmeldungen oder Seitenaufrufe als Nutzung zählen; „berechtigte Nutzer“ auf die verengen, die ihn schon nutzen | Definition des abgeschlossenen Ergebnisses; mit Zufriedenheits- und Aufwandsbewertungen vergleichen; die Regel für berechtigte Nutzer veröffentlichen |
| Rate aktiver Nutzung | Nutzer automatisch einschreiben, damit sie aktiv erscheinen; Benachrichtigungen senden, die als Aktivität zählen | Nur vom Nutzer ausgelöste abgeschlossene Handlungen zählen; Stichprobeninterviews mit abgesprungenen Nutzern |
| Katalogabdeckung | Jede Anfrage in ein generisches Katalogelement zwingen; E-Mail-Anfragen mit „bitte nutzen Sie das Portal“ schließen | Abbruchrate von Anfragen und Zufriedenheit; zählen, wie viele Anfragen über einen anderen Kanal erneut gestellt werden |
| Abbruchrate von Anfragen | Nötige Formularfelder entfernen, was Arbeit in die Erfüllung verschiebt; abgebrochene Anfragen erst nach einem langen Fenster zählen | Rate von Nacharbeit und Rückfragen bei der Erfüllung (siehe Thema 3.5, Kennzahlen für die Erfüllung von Serviceanfragen) |
| Erfolgsrate der Suche | Jeden Klick als Erfolg zählen; irrelevante Artikel hinzufügen, die auf jede Anfrage passen | Prüfen, dass das Ergebnis genutzt wurde (Anfrage gestellt, Artikel als hilfreich bewertet); Suchen ohne Ergebnis lesen |
| Anteil veralteter Elemente | Elemente als überprüft markieren, ohne sie zu lesen; Review-Daten in Masse zurücksetzen | Stichprobe überprüfter Elemente auf Genauigkeit; Datum der letzten echten Änderung zeigen |
| Anfragekonzentration | Beliebte Elemente in viele teilen; nicht zusammenhängende Elemente zusammenführen, um Nachfrage im langen Schwanz zu verbergen | Feste Elementtaxonomie mit Änderungsprotokoll; den Schwanz nach Kategorie ansehen |

Ein gesunder Befund ist ein Katalog, in dem die meistgenutzten Elemente gut funktionieren und leichter werden, in dem Nutzer den Service wählen, weil er besser ist als die Alternative, und in dem das Einstellen eines Elements Routine ist.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Vorgeschriebener Kanal | Vorhersehbares Volumen, leicht zu prüfen | Unmut, Umgehungen, aufgeblähte Zahlen |
| Freiwillige Akzeptanz | Ehrliches Signal des Werts | Langsamer; manche Services werden womöglich nie angenommen |
| Großer Katalog | Vollständig, deckt seltene Bedürfnisse ab | Schwer zu durchsuchen; wird veraltet |
| Kleiner Katalog | Leicht zu finden und zu pflegen | Seltene Bedürfnisse fallen heraus; Nutzer weichen auf E-Mail aus |
| Trichterkennzahlen | Zeigen genau, wo Nutzer aussteigen | Brauchen Instrumentierung; können dazu verleiten, das Formular auf Kosten des Ergebnisses zu optimieren |
| Umfrage zum Warum | Erklärt Verhalten | Verzerrt durch die Antwortenden; schwer zu skalieren |

Die Antwort in Worten ist, freiwillige Akzeptanz mit klarem Qualitätsvorteil zu bevorzugen und Vorgaben nur dort zu nutzen, wo Kontrolle oder Compliance sie verlangen, mit entsprechend gekennzeichneter Zahl. Halten Sie den Katalog klein genug, um ihn zu pflegen, und legen Sie den Schwanz in eine durchsuchbare Wissensdatenbank statt in hundert halb genutzte Elemente.

## Fragen für die Diskussion im Team

**1. Für wen ist jeder unserer Hauptservices, und woher wüssten wir, dass sie ihn nutzen?**
Listen Sie die fünf Services auf, mit denen Ihr Team die meiste Zeit verbringt, und schreiben Sie für jeden die vorgesehene Zielgruppe auf. Fragen Sie dann, wie Akzeptanz für sie gemessen werden könnte. Die Moderation sollte nach Services suchen, bei denen niemand die Zielgruppe nennen kann, denn sie haben wahrscheinlich keinen Akzeptanzplan.

**2. Was tun Menschen, wenn sie unseren Service nicht nutzen, und warum?**
Befragen Sie bei einem Service mit niedriger Akzeptanz einige Nutzer, die ihn meiden. Die Alternative ist meist aufschlussreich: Sie ist womöglich schneller, vertrauter oder flexibler. Entscheiden Sie, ob Sie den Service verbessern, die Alternative ändern oder akzeptieren, dass der Service nicht gebraucht wird.

**3. Wo steigen Nutzer bei unserem meistangefragten Element aus?**
Zeigen Sie den Trichter für das häufigste Element, vom ersten Aufruf bis zum Abschicken. Bitten Sie das Team zu raten, wo der größte Abfall liegt, und vergleichen Sie dann. Einigen Sie sich auf eine zu testende Änderung und sagen Sie, wie Sie prüfen, dass sie half, ohne das Problem anderswohin zu verschieben.

**4. Was würden wir aus dem Katalog entfernen, wenn wir uns trauten?**
Drucken Sie die Liste der Elemente ohne Anfragen in einem Jahr. Fragen Sie, was geschähe, wenn jedes verschwände. Das Gespräch zeigt oft, dass ein Element existiert, weil jemand es einmal verlangte. Einigen Sie sich auf ein Datum, um die ersten fünf zu entfernen oder zusammenzuführen, und auf eine Notiz an die Nutzer.

**5. Wo schubsen oder zwingen wir Nutzer, und lohnt sich der Preis?**
Listen Sie jeden Ort auf, an dem eine Regel oder ein Entwurf Nutzer in einen Kanal drückt. Fragen Sie, welche wirklich nötig sind und welche Gewohnheit. Die Moderation sollte erkunden, wie Nutzer jede erleben und ob die entstehenden Zahlen bedeuten, was Führungskräfte denken.

**6. Wonach suchen Menschen, das wir nicht haben?**
Überprüfen Sie die häufigsten Suchen ohne Ergebnis. Entscheiden Sie für jede, ob ein Element hinzuzufügen, ein Artikel zu schreiben oder zu erklären ist, dass der Service nicht existiert. Fragen Sie, wer dieses Review besitzt und wie oft es stattfindet.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams bauen Services und Funktionen, die Akzeptanz brauchen, um zu zählen. Sie sollten die Zielgruppe zu Beginn definieren, Nutzungskennzahlen in den Service einbauen und den Trichter nach dem Start überprüfen. Akzeptanzdaten sind Feedback zur Arbeit und gehören in Refinement und Review. Teams sollten vermeiden, ein Release für fertig zu erklären, wenn es ausgeliefert wird. Fertig heißt, dass die vorgesehenen Nutzer den Nutzen haben.

### Service- und Betriebsteams

Betriebsteams betreiben den Katalog und sehen die Anfragen, die über jeden Kanal eintreffen. Sie sollten den Katalog aktuell halten, Anfragen kennzeichnen, die ihn umgehen, und fragen, warum. Sie sollten eine Anfrage nicht schließen, indem sie sie umleiten, denn das verbirgt das Signal. Suchlücken und Abbrüche sind ihre beste Quelle für Verbesserungen des Portals.

### Führung und Governance

Führungskräfte entscheiden, ob Akzeptanz ein Gespräch oder eine Quote ist. Sie sollten fragen, wofür der Service da ist, wem er hilft und warum Menschen ihn wählen. Sie sollten vermeiden, Akzeptanzziele für einzelne Teams zu setzen, das Einstellen ungenutzter Services unterstützen und erwarten, Akzeptanz neben Zufriedenheit und Aufwand zu sehen. Wo eine Vorgabe gerechtfertigt ist, sollten Führungskräfte sie Nutzern erklären.

### Kunden und Nutzer

Nutzer wollen mit wenig Aufwand bekommen, was sie brauchen. Sie bemerken, wenn ein Portal schwer zu durchsuchen ist, wenn Formulare nach Dingen fragen, die die Organisation schon weiß, und wenn der alte Weg schneller ist. Ihr Verhalten und das, was sie sagen, ist das ehrlichste Akzeptanzsignal. Sie sollten gefragt werden, warum sie einen Service meiden, und erfahren, was sich daraufhin änderte.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung einer nationalen Verkehrsbehörde betreibt einen Service Desk, ein Self-Service-Portal mit einem Katalog von etwa 140 Elementen und mehrere Produktteams. Die Zahlen unten sind illustrativ.

Das Portal startete vor einem Jahr, und die Führung setzte ein Ziel von 80 Prozent der Anfragen darüber. Der Monatsbericht zeigt 78 Prozent Abdeckung, und die Leiterin des Service-Managements ist zufrieden, bis sie die Kommentare der Nutzerumfrage liest. Mitarbeitende in Regionalbüros sagen, das Portal sei langsam und die Formulare lang. Sie bittet den Katalogmanager, den Trichter und die Suchlogs anzusehen.

Der Trichter für „Ausstattung für neue Mitarbeitende“ zeigt 1.100 Starts pro Quartal und 640 Abschickungen, eine Abbruchrate von 42 Prozent. Das Formular hat 23 Felder. Das Suchlog zeigt, dass der Begriff „Laptop“ acht Elemente liefert und der Begriff „VPN“ keines, obwohl er der meistgesuchte Begriff ist. Von 140 Katalogelementen hatten 38 in 12 Monaten keine Anfrage, und 21 sind über ihrem Review-Datum. Die fünf häufigsten Elemente machen 61 Prozent der Anfragen aus, und weitere 15 Prozent der Anfragen kommen per E-Mail und werden von Hand erfasst.

Das Team nimmt vier Änderungen vor. Es kürzt das Formular für neue Mitarbeitende auf neun Felder, indem es Daten nutzt, die das HR-System schon hält. Es fügt einen VPN-Artikel und ein Element mit Synonymen hinzu. Es führt die acht Laptop-Elemente zu zwei zusammen. Und es stellt 19 der ungenutzten Elemente mit einer Notiz an die Eigner ein. Es ändert auch, wie der Monatsbericht gelesen wird: Die Abdeckung wird mit der Abbruchrate und der Umfragefrage „wie leicht war es, zu bekommen, was Sie brauchten?“ gezeigt. Drei Monate später fällt der Abbruch beim Element für neue Mitarbeitende auf 24 Prozent, die Abdeckung des Portals liegt bei 74 Prozent, und die Aufwandsbewertung der Regionalbüros steigt. Der Direktor fragt, warum die Abdeckung fiel. Die Leiterin des Service-Managements erklärt, dass E-Mail-Anfragen zuvor zwangsgeschlossen wurden und die niedrigere Zahl ehrlicher und das Erlebnis besser ist. Das Entscheidungsprotokoll hält fest, dass das Ziel durch eine Richtung ersetzt wird: Abbruch verringern und die Aufwandsbewertung heben, mit überprüfter, aber nicht als Ziel gesetzter Abdeckung.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Behandeln Sie den Katalog als Backlog, der mit seinen Nutzern verfeinert wird, und entfernen Sie Elemente, die niemand nutzt. Zu beachten ist, dass ein Ziel für die Zahl der Katalogelemente Unordnung hinzufügt.

### KI

KI-Suche und Assistenten können verändern, wie Menschen Services finden, was Akzeptanz- und Abbruchzahlen verschiebt. Koppeln Sie die Erfolgsrate der Suche mit der Abbruchrate und mit dem Anteil der KI-Vorschläge, die angenommen und abgeschlossen wurden. Zu beachten ist, dass ein Modell einen Service empfehlen kann, den die Person nicht anfordern kann; prüfen Sie also Berechtigungsregeln.

### Automatisierung

Erfassen Sie Such-, Ansichts- und Anfrageereignisse automatisch und kennzeichnen Sie veraltete Katalogelemente für eine menschliche Entscheidung. Messen Sie Automatisierung in der Erfüllung an ihrer Fehlerrate. Zu beachten ist, dass automatisches Aufräumen, das Elemente entfernt, Services verbergen kann, die Menschen selten nutzen, aber brauchen.

### Analytik

Zeigen Sie Akzeptanz und Abbruch je Katalogelement mit Anzahlen und die Konzentration der Anfragen. Die Entscheidung, die dies untermauert, ist, welche Elemente umzugestalten oder einzustellen sind. Zu beachten ist, dass Elemente mit geringem Volumen verrauschte Raten haben.

## Branchenperspektive

**Startup.** Es gibt oft keinen Katalog. Eine einfache Seite „wie bekomme ich X“ und ein gemeinsamer Kanal genügen. Beobachten Sie, wonach Menschen fragen, und machen Sie aus den fünf häufigsten Anfragen kurze Anleitungen. Messen Sie die Akzeptanz interner Werkzeuge, indem Sie Nutzer fragen, und lassen Sie förmliche Trichter aus.

**Kleinunternehmen.** Wenige Menschen stellen IT bereit, und Anfragen kommen über jeden Kanal. Ein bescheidener Katalog von 10 bis 20 Elementen deckt die meisten Bedürfnisse ab. Zwingen Sie Nutzer nicht in ein Portal, das in der Pflege mehr kostet als die Anfragen, die es bearbeitet. Überprüfen Sie die Liste zweimal im Jahr.

**Großunternehmen.** Größe gibt Ihnen einen Katalog, der groß genug ist, um Governance zu brauchen: Eigner, Review-Daten und eine Taxonomie. Segmentieren Sie die Akzeptanz nach Geschäftsbereich und Region und vermeiden Sie unternehmensweite Vorgaben, die lokale Bedürfnisse ignorieren. Achten Sie auf Lieferanten, deren Katalogelemente gezählt, aber nicht genutzt werden.

**Behörden und öffentlicher Sektor.** Services erreichen die Öffentlichkeit ebenso wie Mitarbeitende, mit Pflichten zu Barrierefreiheit, Sprache und gleichem Zugang. Beziehen Sie unterstützte Kanäle (Telefon, persönlich) in die Kennzahlen ein, damit digitale Akzeptanz Ausschluss nicht verbirgt. Wo rechtliche oder politische Regeln einen Kanal verlangen, sagen Sie das in Berichten (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind bescheiden. Nutzungslogs und Anfragedaten existieren meist schon. Trichter- und Suchanalyse brauchen Zugang zur Portal-Analytik, die die meisten Plattformen bieten. Die wichtigsten Zeitkosten sind das vierteljährliche Katalog-Review und ein monatlicher Blick auf Suchlücken und Abbrüche, jeweils einige Stunden. Formulare zu beheben und Elemente zusammenzuführen kostet Entwurfs- und Konfigurationszeit.

Der Ertrag kommt aus Services, die genutzt werden, Anfragen, die abgeschlossen werden, und weniger Verschwendung in der Erfüllung. Ein kürzeres Formular, das den Abbruch senkt, verringert wiederholte Kontakte und manuelle Bearbeitung. Das Beschneiden ungenutzter Elemente verringert die Pflege. Bauen Sie den Business Case aus Ihren eigenen Zahlen: Abbruchrate, manuelle Bearbeitungszeit je per E-Mail eingegangener Anfrage und die Kosten, ein ungenutztes Element zu pflegen, vor und nach den Änderungen. Vermeiden Sie veröffentlichte Behauptungen zum ROI von Portalen, die Sie nicht zurückverfolgen können, denn sie hängen von Organisation und Methode ab.

## Anti-Muster und Fallstricke

- **Starts als Akzeptanz zählen.** Ein Service ist angenommen, wenn die vorgesehenen Nutzer damit Ergebnisse abschließen. Messen Sie die Nutzung, nicht die Ankündigung.
- **Einen Kanal vorschreiben, um eine Zahl zu heben.** Nutzer werden ihn umgehen. Verbessern Sie den Service und lassen Sie die Zahl folgen.
- **Elemente hinzufügen und nie welche entfernen.** Der Katalog wird undurchsuchbar. Beschneiden Sie jedes Quartal.
- **Nur auf Summen schauen.** Segmentieren Sie nach Gruppe und schauen Sie auf den Trichter.
- **Per E-Mail gestellte Anfragen mit einer Umleitung schließen.** Es verbirgt Nachfrage und verärgert Nutzer. Bearbeiten Sie die Anfrage und beheben Sie den Weg.
- **Seitenaufrufe als Nutzung verwenden.** Zählen Sie abgeschlossene Ergebnisse.
- **Geringe Nutzung als Versagen der Nutzer behandeln.** Fragen Sie, ob der Service gebraucht wird und leicht zu nutzen ist.
- **Elementeigner verfallen lassen.** Bestimmen Sie für jedes Element Eigner und Review-Daten.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Katalogentwurf | Liste, auf Anfrage gewachsen | Katalog existiert, Formulierung uneinheitlich | Elemente in Nutzersprache mit Eignern und Review-Daten | Vierteljährliches Beschneiden; Taxonomie gesteuert | Katalog über Teams und Lieferanten geteilt; Elemente gemeinsam mit Nutzern entworfen |
| Akzeptanzmessung | Anekdote | Anfragezahlen je Element | Akzeptanz über berechtigte Nutzer und abgeschlossene Ergebnisse definiert | Trichter, Kohorten und Segmente monatlich überprüft | Akzeptanz mit Erlebnis und Ergebnissen über Services verknüpft |
| Verbesserung | Ad-hoc-Korrekturen | Korrekturen nach Beschwerden | Suchlücken und Abbrüche monatlich überprüft | Korrekturen priorisiert und in einem Backlog verfolgt | Verbesserung mit Nutzern koordiniert, eingestellte Services offen berichtet |

## Checkliste

- [ ] Jeder wichtige Service hat eine schriftliche vorgesehene Zielgruppe und einen alternativen Weg.
- [ ] Akzeptanz ist als abgeschlossene Ergebnisse berechtigter Nutzer definiert.
- [ ] Katalogelemente haben Eigner, Beschreibungen in Nutzersprache und Review-Daten.
- [ ] Der Trichter ist für die am häufigsten angefragten Elemente instrumentiert.
- [ ] Suchen ohne Ergebnis werden monatlich überprüft.
- [ ] Akzeptanz und Abbruch sind nach Gruppe segmentiert, kleine Gruppen unterdrückt.
- [ ] Anfragen, die außerhalb des Katalogs eintreffen, werden gekennzeichnet und gezählt.
- [ ] Der Katalog wird jedes Quartal beschnitten, mit erfassten Gründen.
- [ ] Akzeptanz wird neben Zufriedenheits- oder Aufwandskennzahlen gezeigt.
- [ ] Kein Akzeptanzziel wird für ein einzelnes Team oder eine einzelne Person gesetzt.

## KI-Prompts

**Einen Anfragetrichter analysieren.**

```text
For the catalog item [item name] in [type of organization], our portal data for
[period] is: views [number], starts [number], submissions [number], and
fulfilled [number]. The form has [number] fields: [list]. Describe where users
likely struggle, suggest three changes to test, and say how I would check that
each change helped without moving the problem to fulfilment. Do not invent
benchmark values. List your assumptions and what additional data you need.
```

**Suchlogs auf Katalog-Lücken prüfen.**

```text
Here are the top [number] catalog searches from [period] with result counts:
[paste data]. Group them into themes, flag searches that return nothing or too
many items, and suggest whether each needs a new item, a rename, a synonym, or a
knowledge article. Do not guess at services we may not offer. List your
assumptions and the questions I should ask the item owners.
```

**Ein Review zum Beschneiden des Katalogs planen.**

```text
I manage a catalog of [number] items. For each of these items I have request
counts for 12 months, review dates, and owners: [paste a summary]. Propose
criteria for removing, merging, or keeping an item, a short note to owners, and a
way to avoid dropping rare but critical items. Include a check that we are not
simply moving requests to email. List your assumptions.
```

**Eine Akzeptanzdefinition für einen Service entwerfen.**

```text
Service: [name]. Intended users: [roles]. Alternative path today: [what they do
now]. Draft a one-page adoption definition covering eligible users, what counts
as a completed use, the data source, how to exclude test and automated traffic,
how the measure could be gamed, and a guardrail. Do not invent targets. List
your assumptions and anything I need to confirm.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Akzeptanz- oder Katalogkennzahl zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein neuer Eintrag einer Katalogkennzahl seinen Manipulationsvektor und seine Leitplanke hat.

## Wichtigste Erkenntnisse

- Akzeptanz heißt, dass vorgesehene Nutzer mit einem Service Ergebnisse abschließen, definieren Sie also die Zielgruppe und zählen Sie Abschlüsse.
- Messen Sie den Trichter, die Suchlücken und die Bindung der Nutzer und segmentieren Sie nach Gruppe.
- Vergleichen Sie den Service mit der Alternative, die Nutzer heute haben.
- Halten Sie den Katalog klein, mit Eignern und jedes Quartal beschnitten.
- Erzwingen Sie keine Nutzung, um eine Zahl zu heben, und koppeln Sie Akzeptanz mit Zufriedenheit und Aufwand.
- Behandeln Sie geringe Nutzung als Frage nach Bedarf und Leichtigkeit, nicht als Versagen der Nutzer.

## Quellen und weiterführende Literatur

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Hunnebeck, L., *ITIL Service Design* (service catalogue management), The Stationery Office, 2011.
3. Hunt, A. and Thomas, D., *The Pragmatic Programmer*, Addison-Wesley, for the habit of removing what is no longer useful.
4. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
5. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
6. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Conversion funnel](https://en.wikipedia.org/wiki/Conversion_funnel).
9. Wikipedia, [Cohort analysis](https://en.wikipedia.org/wiki/Cohort_analysis).
10. Wikipedia, [Web analytics](https://en.wikipedia.org/wiki/Web_analytics).
11. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
12. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
