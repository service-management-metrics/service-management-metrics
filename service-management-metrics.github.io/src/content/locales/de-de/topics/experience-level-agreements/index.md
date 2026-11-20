# Experience Level Agreements

**Ein Experience Level Agreement fügt der Frage „hat der Service sein Ziel erfüllt?“ die Frage hinzu „wie fühlte sich die Nutzung an?“, und es funktioniert nur, wenn die Erlebniskennzahlen gemeinsam mit Nutzern gewählt und neben den betrieblichen gehalten werden.**

## Überblick und Motivation

Ein [Service Level Agreement](https://en.wikipedia.org/wiki/Service-level_agreement) (SLA) hält fest, wozu sich ein Anbieter verpflichtet, in Begriffen, die der Anbieter meist zählen kann: Verfügbarkeit, Reaktionszeit, Lösungszeit. Diese Kennzahlen sind nützlich und auch unvollständig. Ein Team kann jedes Ziel auf dem Dashboard erfüllen, während Nutzer ihre Woche damit verbringen, langsame Anmeldungen zu umgehen, sich gegenüber einem Service Desk zu wiederholen und auf Genehmigungen zu warten. Diese Lücke zwischen grüner Berichterstattung und unzufriedenen Nutzern wird manchmal Wassermelonen-Effekt genannt: außen grün, innen rot (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA).

Ein **Experience Level Agreement (XLA)** ist eine Vereinbarung zwischen einem Anbieter und den Menschen, die einen Service nutzen, über das Erlebnis, das der Service geben soll. Es nennt gewünschte Ergebnisse und Gefühle, etwa „ich kann binnen weniger Minuten nach meiner Ankunft mit der Arbeit beginnen“ oder „ich vertraue darauf, dass meine Anfrage bearbeitet wird“, und es benennt die Kennzahlen, die zeigen, ob sie erfüllt werden. Der Begriff wird in der Gemeinschaft des IT-Service-Managements (ITSM) breit verwendet, und seine genaue Definition variiert zwischen Autoren und Anbietern. Prüfen Sie die aktuellen Veröffentlichungen des Rahmenwerk-Eigners, bevor Sie ein XLA als Teil von ITIL beschreiben, und nennen Sie, welchem Gebrauch Sie folgen. Dieses Thema behandelt das XLA als praktische Idee: eine Vereinbarung, die Erlebniskennzahlen neben betriebliche stellt.

Die Idee hat Wurzeln außerhalb der IT. [User Experience](https://en.wikipedia.org/wiki/User_experience) ist das Gesamterlebnis einer Person bei der Nutzung eines Produkts, Systems oder Services, und [Customer Experience](https://en.wikipedia.org/wiki/Customer_experience) ist die Summe der Interaktionen eines Kunden mit einer Organisation über die Zeit. [Usability](https://en.wikipedia.org/wiki/Usability) betrifft, wie wirksam, effizient und zufriedenstellend Menschen ihre Ziele erreichen können. Agile Teams kennen dieses Terrain aus Design Thinking und Nutzerforschung und aus Stakeholder-Reviews, in denen Nutzer auf funktionierende Software reagieren. Ein XLA bringt dieselbe Aufmerksamkeit in den laufenden Service.

Erlebnis ist schwer zu messen und leicht zu verzerren. Eine Umfrage, die nur zufriedene Nutzer erreicht, ein auf Anstieg getrimmter Stimmungswert oder ein einzelner „Erlebnisindex“, den niemand erklären kann, führen so sicher in die Irre wie eine manipulierte Ticketzeit. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt voll: Erlebniskennzahlen sind Gesprächsanlässe, keine Quoten (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Dieses Thema baut auf den Umfragekennzahlen des vorigen Themas auf (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit) und fügt Verhaltens- und Reisekennzahlen hinzu, die nicht vom Fragen abhängen.

## Leitprinzipien

- **Bei Ergebnissen beginnen, die Menschen kümmern.** Fragen Sie Nutzer, wie ein guter Tag aussieht, und schreiben Sie Vereinbarungen in ihren Worten.
- **Erlebnis mit Betrieb koppeln.** Ein XLA steht neben einem SLA, nicht an seiner Stelle.
- **Wenige Kennzahlen aus verschiedenen Blickwinkeln nutzen.** Kombinieren Sie, was Menschen sagen, was sie tun und was das System aufzeichnet.
- **Reisen ebenso messen wie Berührungspunkte.** Ein Erlebnis ist der ganze Weg vom Bedarf zum Ergebnis.
- **Ehrlich zur Unsicherheit sein.** Erlebnisdaten sind verrauscht, und kleine Gruppen brauchen Schutz.
- **Ziele mit Nutzern vereinbaren und überarbeiten.** Ein XLA ist eine lebendige Vereinbarung, mit den Menschen überprüft, die sie beschreibt.
- **Erlebnisdaten nie nutzen, um Einzelpersonen zu ordnen.**

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Erlebniswert | Durchschnittliche Bewertung einer vereinbarten Erlebnisaussage, für einen Service und eine Zielgruppe | mittlere Bewertung über gültige Antworten auf eine Aussage auf einer festen Skala | Skalenpunkte | Kurze Pulsumfrage, nach Plan versandt | Service-Level-Management; kontinuierliche Verbesserung | Feedback aus dem Stakeholder-Review; Review der Produktergebnisse | Monatlich |
| Stimmungstrend | Richtung des Tons in Freitextkommentaren zu einem Service | Anteil positiv kodierter Kommentare minus Anteil negativ kodierter, je Zeitraum | Prozentpunkte | Kodierte Umfragekommentare und Ticketkommentare | Kontinuierliche Verbesserung | Themen der Retrospektive | Monatlich |
| Reibungsereignisse je Nutzer | Zahl der Signale, dass ein Nutzer auf Schwierigkeiten stieß, normiert auf aktive Nutzer | (wiederholte Kontakte + wieder eröffnete Elemente + fehlgeschlagene Anmeldungen über eine festgelegte Zahl hinaus + abgebrochene Anfragen) / aktive Nutzer | Ereignisse je Nutzer | Ticketsystem, Identitäts-Logs, Anfrageportal | Service Desk; Incident-Management | Im Gebrauch gefundene Defekte | Monatlich |
| Durch IT-Probleme verlorene Zeit | Geschätzte Zeit, die Nutzer in einem Zeitraum durch Serviceprobleme verlieren | selbstberichtete verlorene Minuten je Nutzer, oder gemessene Zeit im degradierten Zustand gewichtet nach betroffenen Nutzern | Minuten je Nutzer | Pulsumfrage; Monitoring, verbunden mit Nutzerzahlen | Verfügbarkeitsmanagement; Incident-Management | Durch Blocker verlorene Zykluszeit | Vierteljährlich |
| Abschlussrate der Reise | Anteil der Nutzer, die eine definierte Reise beenden, ohne abzubrechen oder Hilfe zu suchen | Nutzer, die die Reise ohne Hilfekontakt abschließen / Nutzer, die die Reise beginnen | Prozent | Portal-Analytik; Ticket-Verknüpfungen | Management von Serviceanfragen; Management des Servicekatalogs | Aufgabenerfolg in Usability-Tests | Monatlich |
| XLA-Erreichung | Anteil der vereinbarten Erlebnisziele, die im Zeitraum erreicht wurden | erreichte Ziele / vereinbarte Ziele | Prozent | Das XLA-Register | Service-Level-Management | Erreichung der Lieferziele | Vierteljährlich |
| Erlebnislücke | Differenz zwischen SLA-Erreichung und Erlebniswert für denselben Service | Rang der SLA-Erreichung minus Rang des Erlebniswerts über Services, oder ein schriftlicher Vergleich | Rangdifferenz oder Notiz | SLA-Berichte und Pulsumfrage | Service-Level-Management | Definition of Done gegenüber Nutzerfeedback | Vierteljährlich |

Definieren Sie für jede Kennzahl die Zielgruppe und den Zeitraum. Nennen Sie, wie kleine Gruppen geschützt werden: Zum Beispiel wird für keine Gruppe von weniger als zehn Personen ein Ergebnis gezeigt. Reibungsereignisse zählen Signale, nicht Schuld, ein Ereignis wird also einem Service und einer Nutzergruppe zugeordnet, nie der Leistungsbeurteilung einer benannten Person.

## Empfehlungen

### Die Vereinbarung mit Nutzern entwerfen

**1. Befragen Sie, bevor Sie messen.** Verbringen Sie Zeit mit einer Stichprobe von Nutzern aus jeder wichtigen Gruppe und fragen Sie: Wie sieht ein guter Tag mit diesem Service aus? Wo verschwendet er Ihre Zeit? Was würden Sie nicht mehr tun, wenn er funktionierte? Nutzen Sie die Gewohnheiten des [menschzentrierten Designs](https://en.wikipedia.org/wiki/Human-centered_design): echte Arbeit beobachten und schreiben, was Sie hören, in den Worten des Nutzers. Die daraus entstehenden Aussagen werden zu den Erlebniszielen der Vereinbarung.

**2. Schreiben Sie Erlebnisaussagen als Ergebnisse.** „Ich kann einen neuen Mitarbeitenden am ersten Morgen produktiv machen“ sagt mehr als „Zugriffsanfrage für neue Mitarbeitende binnen zwei Tagen gelöst“. Halten Sie jede Aussage kurz, in der ersten Person und an einen Service gebunden. Zielen Sie auf drei bis fünf Aussagen je Service, damit Menschen sie sich merken können.

**3. Wählen Sie Kennzahlen aus drei Blickwinkeln.** Wählen Sie für jede Aussage eine Kennzahl aus dem, was Menschen sagen (eine Pulsfrage oder ein Kommentarthema), eine aus dem, was Menschen tun (Abschluss der Reise, wiederholte Kontakte, abgebrochene Anfragen), und wo möglich eine aus dem, was das System aufzeichnet (Latenz für die Schritte der Reise). Wenn die drei nicht übereinstimmen, haben Sie etwas zum Untersuchen gefunden.

**4. Vereinbaren Sie Ziele zurückhaltend.** Setzen Sie anfangs eine Richtung („verlorene Zeit verringern“) und ein Review-Datum statt einer harten Zahl. Harte Ziele für neue Erlebniskennzahlen laden zur Manipulation ein, bevor die Kennzahl verstanden ist. Wenn ein Ziel erscheint, machen Sie es zu einer Spanne und sagen Sie, wer ihm zustimmte.

### Die Daten erheben und lesen

**5. Nutzen Sie kurze, regelmäßige Pulsfragen.** Eine Frage zu einer Aussage, in regelmäßigem Intervall gestellt, ist leichter zu beantworten als eine lange Jahresumfrage. Wechseln Sie die Aussagen ab, halten Sie die Formulierung stabil und vermeiden Sie, dieselbe Person in einem festgelegten Zeitraum mehr als einmal zu fragen. Verknüpfen Sie den Entwurf des Pulses mit den Umfrageprinzipien des vorigen Themas (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

**6. Lesen Sie Kommentare mit einer Methode.** Werkzeuge der [Stimmungsanalyse](https://en.wikipedia.org/wiki/Sentiment_analysis) können große Textmengen sortieren und deuten Sarkasmus, Fachjargon und Kontext falsch. Behandeln Sie die Werkzeugausgabe als ersten Durchgang, lassen Sie jeden Monat einen Menschen eine Stichprobe prüfen und führen Sie eine kurze Liste von Themen, die Sie von Hand kodieren. Der Zweck der Analyse ist, Themen zu finden, über die man mit Nutzern sprechen kann, nicht einen Wert zu erzeugen.

**7. Fügen Sie Verhaltenssignale der Reise hinzu.** Instrumentieren Sie die Reisen, die Nutzern wichtig sind, mit ihrem Wissen: Wo beginnen sie, wo steigen sie aus, und wo bitten sie um Hilfe? [Real User Monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring) von Seitenladezeiten, Fehlern und Schritten gibt eine Sicht, die Umfragen nicht geben können. Sagen Sie Nutzern, was Sie erheben, halten Sie es auf das Nötige und aggregieren Sie es, bevor Sie es teilen.

**8. Schützen Sie kleine Gruppen und Einzelpersonen.** Erlebnisdaten können offenbaren, wer kämpft. Aggregieren Sie Ergebnisse, unterdrücken Sie Gruppen unter einer vereinbarten Größe und nutzen Sie die Daten nie in Leistungsbeurteilungen. Entscheiden Sie, wer rohe Kommentare sehen darf, und speichern Sie sie entsprechend. In regulierten Umfeldern klären Sie mit Datenschutzfachleuten, bevor Sie Verhaltensdaten erheben.

### Die Vereinbarung nutzen

**9. Zeigen Sie SLA und XLA nebeneinander.** Zeigen Sie auf derselben Seite für jeden Service die betriebliche Erreichung und die Erlebniskennzahlen. Die Paarung ist der Punkt: Ein grünes SLA bei fallendem Erlebniswert ist ein Anlass für ein Gespräch, und ein grüner Erlebniswert bei scheiternden SLAs verdient einen Blick darauf, was Nutzern nicht gesagt wird.

**10. Halten Sie ein regelmäßiges Erlebnis-Review mit Nutzern ab.** Treffen Sie sich vierteljährlich mit Vertretern der Nutzergruppen, zeigen Sie die Daten, fragen Sie, was sie bedeuten, und vereinbaren Sie ein bis zwei Verbesserungen zum Ausprobieren. Beziehen Sie den Service Desk und das Produktteam ein, denn die Ursache eines schlechten Erlebnisses sitzt oft im Produkt, nicht im Support.

**11. Finanzieren Sie die Korrekturen.** Eine Vereinbarung, die Reibung identifiziert und dann an Ort und Stelle lässt, lehrt Nutzer, dass die Kennzahlen Theater sind. Legen Sie die zwei oder drei größten Erlebnisprobleme mit Eignern und Daten in den Backlog und berichten Sie darüber im nächsten Review. Siehe die Kennzahlen zur kontinuierlichen Verbesserung weiter hinten in diesem Buch (siehe Thema 9.5, Kennzahlen für kontinuierliche Verbesserung).

**12. Überarbeiten Sie die Vereinbarung, wenn sich Services und Nutzer ändern.** Stellen Sie Aussagen ein, die nicht mehr zählen, und fügen Sie neue hinzu. Protokollieren Sie die Änderungen und markieren Sie sie in Trenddiagrammen, wie Sie es bei jeder Kennzahldefinition täten.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Erlebniswert | Nur zufriedene Nutzer befragen; die Umfrage nach guten Ereignissen terminieren; die Aussage umformulieren, damit ihr leichter zuzustimmen ist | Rücklaufquote und Zusammensetzung der Antwortenden; Protokoll stabiler Formulierungen; Kommentare lesen |
| Stimmungstrend | Das Werkzeug oder die Themenliste abstimmen, bis der Trend steigt; negative Kanäle ausschließen | Menschliche Prüfung einer monatlichen Stichprobe; einen festen Kodierleitfaden führen und Änderungen protokollieren |
| Reibungsereignisse je Nutzer | Ereignisse so umdefinieren, dass weniger zählen; wiederholte Kontakte entmutigen, indem der Desk schwer erreichbar gemacht wird | Kontaktvolumen nach Kanal; Abbruchrate am Service Desk (siehe Thema 3.1, Kennzahlen für den Service Desk) |
| Durch IT-Probleme verlorene Zeit | So fragen, dass niedrige Schätzungen verankert werden; nur Major Incidents zählen | Selbstberichtete Zeit mit gemessener degradierter Zeit vergleichen; Review der Umfrageformulierung |
| Abschlussrate der Reise | Die Reise so eng definieren, dass Fehlschlag außerhalb des Umfangs liegt; schwierige Fälle in einen anderen Kanal lenken | Reisendefinition im Register; Hilfekontaktrate und Eskalationen |
| XLA-Erreichung | Ziele setzen, die schon erreicht sind; einen sehr kleinen Satz von Zielen definieren | Zielsetzung mit Nutzern überprüfen; Erreichung mit Trend und Zielhistorie zeigen |
| Erlebnislücke | Die Services oder Zeiträume wählen, die am besten aussehen; ändern, welche SLAs verglichen werden | Im Voraus vereinbarter fester Vergleichssatz; alle Services zeigen |

Ein gesunder Befund ist ein Erlebnisbild, das zu den Kommentaren und zum Gespräch im Nutzer-Review passt, ein kleiner Satz von Kennzahlen, die sich langsam und aus Gründen bewegen, die das Team erklären kann, und ein Backlog von Erlebniskorrekturen, der kürzer wird.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Nur SLA | Klar, zählbar, vertraglich | Verpasst, was Nutzer spüren; kann grün sein, während Nutzer unzufrieden sind |
| Nur XLA | Nah an dem, was Nutzer schätzen | Schwerer zu messen und zu vergleichen; schwach als Grundlage für Verträge mit Lieferanten |
| SLA mit XLA | Gibt beide Sichten und legt die Lücke offen | Mehr Arbeit; braucht Vertrauen und Urteilsvermögen, um Widersprüche zu lesen |
| Umfragebasierte Erlebniskennzahlen | Direkte Stimme der Nutzer | Antwortverzerrung; Last für Antwortende |
| Verhaltenskennzahlen | Keine Umfragelast; objektiv | Braucht Instrumentierung und Sorgfalt beim Datenschutz; zeigt, was geschah, nicht warum |
| Einzelner Erlebnisindex | Leichte Schlagzeile | Verbirgt Details; leicht zu manipulieren und schwer zu erklären |

Die Antwort in Worten ist, das XLA als Ergänzung zu nutzen, eingeführt für einige Services, bei denen die Lücke zwischen Betrieb und Erlebnis schon sichtbar ist. Ersetzen Sie vertragliche SLAs nicht durch Erlebniskennzahlen, die Lieferanten nicht kontrollieren können. Halten Sie die rechtlichen und kommerziellen Zusagen im SLA und nutzen Sie das XLA, um Verbesserung und Gespräch voranzutreiben.

## Fragen für die Diskussion im Team

**1. Wie sieht für unseren wichtigsten Service ein guter Tag für Nutzer aus, in ihren Worten?**
Versammeln Sie zwei oder drei Nutzer oder nutzen Sie jüngere Interviews wieder und schreiben Sie ihre Aussagen auf. Die Moderation sollte widerstehen, sie in betriebliche Begriffe umzuformulieren. Vergleichen Sie die Aussagen mit dem aktuellen SLA und fragen Sie, welche es abdeckt und welche es ignoriert. Die Lücken sind Kandidaten für Erlebniskennzahlen.

**2. Wo widersprechen sich unsere grünen Dashboards und die Geschichten unserer Nutzer?**
Bitten Sie das Team um einen jüngeren Fall, in dem ein Service seine Ziele erfüllte und Nutzer sich beschwerten. Verfolgen Sie den Fall durch die Daten: Was haben wir gemessen, und was haben wir verpasst? Das Gespräch fördert oft einen fehlenden Schritt, eine Übergabe oder eine zu früh gestoppte Uhr zutage. Halten Sie den Fall als Beispiel für das nächste Review mit Nutzern fest.

**3. Welche drei Kennzahlen würden wir nutzen, um zu wissen, ob diese Erlebnisaussage stimmt?**
Wählen Sie eine Aussage und je eine Kennzahl aus dem, was Menschen sagen, was sie tun und was das System aufzeichnet. Fragen Sie, was jede verpassen könnte und wie jede manipuliert werden könnte. Einigen Sie sich auf den kleinsten Satz, der einen skeptischen Nutzer überzeugen würde.

**4. Was erheben wir über Nutzer, das sie womöglich nicht erwarten, und wäre es ihnen recht?**
Listen Sie Quellen von Verhaltensdaten und den Zweck jeder auf. Bitten Sie einen Nutzervertreter um eine Reaktion. Die Moderation sollte Unbehagen als Information über den Entwurf behandeln, nicht als Hindernis. Entscheiden Sie, was nicht mehr erhoben, was aggregiert wird und wer die Rohdaten sehen darf.

**5. Was täten wir, wenn der Erlebniswert fiele, während jedes SLA grün bliebe?**
Proben Sie die Reaktion. Wer schaut zuerst, was prüft er, und mit wem spricht er? Entscheiden Sie, ob das Team dem Erlebniswert vertrauen oder nach Wegen suchen würde, ihn abzutun. Die Antwort zeigt, wie ernst das Team die Vereinbarung nimmt.

**6. Welche Erlebniskorrekturen haben wir versprochen, und was wurde daraus?**
Gehen Sie die letzten zwei Review-Meetings mit Nutzern durch. Zeigen Sie für jede Zusage Datum, Eigner und Ergebnis. Ist die Liste leer oder veraltet, besprechen Sie warum. Einigen Sie sich auf eine Korrektur, die vor dem nächsten Review zu liefern ist, und auf einen Weg, Nutzern zu sagen, dass es geschah.

## Vier Perspektiven

### Produkt- und Lieferteams

Produktteams halten einen großen Teil der Ursache eines schlechten Erlebnisses: verwirrende Bildschirme, langsame Schritte, unklare Fehler. Erlebniskennzahlen geben ihnen Belege aus dem Live-Gebrauch und speisen das Refinement direkt. Teams sollten vor jeder Planungssitzung die Kommentarthemen lesen und Reisekennzahlen mit dem Backlog verbinden. Sie sollten den Erlebniswert nicht als Teamziel behandeln. Er ist Information über den Service, den sie mit dem Betrieb teilen.

### Service- und Betriebsteams

Betriebsteams sehen die Reibung zuerst: wiederholte Kontakte, Umgehungen und verärgerte Anrufer. Erlebniskennzahlen geben ihnen einen Weg zu zeigen, was das SLA verbirgt, und einen Grund, Ursachen zu beheben, statt Tickets schneller zu schließen. Sie sollten bei Definitionen und Stichproben standhaft bleiben, vermeiden, Nutzer in Kanäle zu lenken, die besser aussehen, und die unzufriedenen Kommentare vollständig lesen (siehe Thema 3.1, Kennzahlen für den Service Desk).

### Führung und Governance

Führungskräfte wählen, ob ein XLA ein Gespräch oder eine Anzeigetafel ist. Sie sollten fragen, was die Erlebnisdaten darüber sagen, wo zu investieren ist, vermeiden, Bezahlung an einen Erlebnisindex zu knüpfen, und die Privatsphäre von Mitarbeiterdaten schützen. Die Governance sollte Definitionen, Stichproben und die Historie von Änderungen verlangen und einen unerklärten Sprung in einer Erlebniskennzahl als Grund behandeln, die Methode zu prüfen.

### Kunden und Nutzer

Nutzer sind die Autoren der Vereinbarung. Sie sollten eingeladen werden zu beschreiben, wie gut aussieht, die Ergebnisse gezeigt bekommen und erfahren, was sich änderte. Sie sollten wissen, was über sie erhoben wird und warum, und einen Weg haben, Nein zu sagen. Nutzer, die oft gefragt werden und nichts besser werden sehen, hören auf zu antworten, und die Stille lässt die Daten besser aussehen als die Wirklichkeit.

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßes Beratungsunternehmen betreibt einen internen IT-Service für 1.800 Mitarbeitende. Die Zahlen unten sind illustrativ.

Der monatliche SLA-Bericht zeigt 99,8 Prozent Verfügbarkeit der Kollaborationsplattform und 96 Prozent der Incidents im Ziel gelöst. Der IT-Direktor ist zufrieden, doch Berater bei Kunden beschweren sich weiter über langsame Anmeldung. Der Service-Manager schlägt ein XLA-Pilotprojekt für die Kollaborationsplattform vor.

In Interviews mit 12 Beratern entstehen drei Aussagen: „Ich kann binnen zwei Minuten, nachdem ich es entschieden habe, an einem Kundengespräch teilnehmen“, „Ich muss nicht bei der IT anrufen, um wieder in mein Konto zu kommen“ und „wenn etwas kaputtgeht, weiß ich, was geschieht“. Das Team wählt Kennzahlen für jede. Für die erste nehmen sie die Pulsbewertung der Aussage und die gemessene Zeit vom Anmeldebeginn bis zur Gesprächsteilnahme aus dem Real User Monitoring des Kunden, nach Region aggregiert. Für die zweite zählen sie Kontakte zum Zurücksetzen von Passwörtern je aktivem Nutzer und Monat. Für die dritte verfolgen sie den Anteil der Incidents, bei denen die Statusmeldung binnen 30 Minuten aktualisiert wurde, und stellen dazu die Pulsfrage.

Die Daten der ersten zwei Monate zeigen, dass die mediane Zeit von der Anmeldung bis zur Gesprächsteilnahme in der Region der Zentrale in Ordnung, in zwei anderen aber lang ist, und dass die Kontakte zum Zurücksetzen von Passwörtern je Nutzer bei Mitarbeitenden auf verwalteten Laptops dreimal höher sind als bei anderen. Der Erlebniswert für die erste Aussage beträgt 3,1 von 5 gegenüber 4,2 beim Büropersonal. Das SLA ist bei beiden grün. Der Service-Manager bringt den Befund ins Nutzer-Review. Das Team vereinbart zwei Verbesserungen: die Konfiguration des Single Sign-on für entfernte Regionen abzustimmen und die Token-Erneuerungseinstellungen auf verwalteten Laptops zu ändern. Drei Monate später fällt die mediane Zeit, die Rücksetzkontakte je Nutzer fallen, und der Erlebniswert steigt auf 3,8. Der Direktor stimmt zu, das XLA für diesen Service zu behalten, es für einen weiteren hinzuzufügen und bis zum nächsten Review kein numerisches Ziel zu setzen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Vereinbaren Sie Erlebniskennzahlen mit Nutzern und überprüfen Sie sie erneut, wenn sich der Service entwickelt, mit kontinuierlicher Einbindung von Stakeholdern. Zu beachten ist, dass ein vom Anbieter allein gesetztes Erlebnisziel nicht beschreibt, was Nutzer spüren.

### KI

KI-Funktionen verändern das Erlebnis direkt, beziehen Sie also Reisen ein, die sie nutzen, und messen Sie das Ergebnis des Nutzers, nicht die Sicherheit des Modells. Koppeln Sie Erlebniswerte mit Aufgabenabschluss und Eskalation an einen Menschen. Zu beachten ist, dass ein Chatbot, der sich angenehm anfühlt, aber die Aufgabe verfehlt, den Wert schönt.

### Automatisierung

Erfassen Sie Reibungsereignisse und den Abschluss von Reisen automatisch, mit Einwilligung und Datenschutzregeln, und messen Sie die Erfassung an der Abdeckung. Zu beachten ist, dass automatische Erlebnisdaten über Einzelpersonen zur Überwachung werden können; aggregieren und minimieren Sie also.

### Analytik

Berichten Sie den Erlebniswert mit betrieblichen Kennzahlen auf derselben Seite und die Lücke zwischen ihnen. Die Entscheidung, die dies untermauert, ist, welchen Service man verbessert, obwohl sein SLA grün ist. Zu beachten ist, dass die Lücke ein Messartefakt sein kann; prüfen Sie also die Stichprobe.

## Branchenperspektive

**Startup.** Enger Kontakt zu Nutzern macht Interviews leicht. Widerstehen Sie dem Bau eines Rahmenwerks: Schreiben Sie drei Erlebnisaussagen für den Kernservice, fragen Sie Nutzer jeden Monat dazu und fügen Sie eine Verhaltenskennzahl hinzu. Förmliche Vereinbarungen kommen später.

**Kleinunternehmen.** Das Personal ist klein und teilt oft eine Führungskraft mit der IT. Nutzen Sie Gespräche und einen sehr kurzen monatlichen Puls. Seien Sie vorsichtig mit Verhaltensdaten, denn kleine Gruppen sind leicht identifizierbar.

**Großunternehmen.** Größe bringt viele Nutzergruppen und Lieferanten. Definieren Sie Erlebnisaussagen je Service und Persona, halten Sie Dashboards je Service und vermeiden Sie einen unternehmensweiten Erlebnisindex. Stimmen Sie das XLA mit Lieferantenverträgen ab, damit Lieferanten Daten beitragen, ohne an Kennzahlen gemessen zu werden, die sie nicht beeinflussen können.

**Behörden und öffentlicher Sektor.** Services stehen oft der Öffentlichkeit ebenso gegenüber wie Mitarbeitenden, mit Pflichten zu Barrierefreiheit, einfacher Sprache und gleichem Zugang. Nehmen Sie Barrierefreiheit in die Erlebnisaussagen und die Kennzahlen auf, testen Sie mit Nutzern, die auf assistive Technik angewiesen sind, und schützen Sie personenbezogene Daten im Einklang mit dem Gesetz. Wo öffentliche Berichterstattung verlangt ist, berichten Sie Methoden mit den Ergebnissen (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind mäßig. Nutzerinterviews brauchen einige Tage je Service. Eine monatliche Pulsumfrage braucht ein Umfragewerkzeug, das viele Organisationen bereits haben. Verhaltenskennzahlen brauchen etwas Instrumentierung, die aus vorhandenem Monitoring und Portal-Analytik kommen kann. Das Review mit Nutzern dauert jedes Quartal einige Stunden. Kommentare zu kodieren braucht jeden Monat ein bis zwei Stunden.

Der Ertrag liegt darin, Probleme zu finden, die SLAs nicht zeigen, etwa langsame Reisen in bestimmten Regionen oder auf bestimmten Geräten, und Verbesserungsgeld dorthin zu lenken, was Nutzer schätzen. Durch IT-Probleme verlorene Zeit lässt sich mit den eigenen Personalsätzen in Kosten verwandeln, wenn Sie sorgfältig messen. Vermeiden Sie allgemeine Aussagen über Produktivitätsgewinne. Bauen Sie den Business Case aus Ihrer eigenen Baseline: verlorene Zeit je Nutzer, Reibungsereignisse je Nutzer und wiederholte Kontakte, vor und nach einer Korrektur. Zählen Sie auch die vermiedenen Kosten von Umgehungen, etwa Schatten-Werkzeuge, die übernommen werden, weil der offizielle Service umständlich ist.

## Anti-Muster und Fallstricke

- **SLAs durch XLAs ersetzen.** Verträge brauchen zählbare Zusagen. Behalten Sie beide und zeigen Sie sie zusammen.
- **Ein zusammengesetzter Erlebnisindex.** Er verbirgt die Ursache und lädt zur Manipulation ein. Zeigen Sie wenige getrennte Kennzahlen.
- **Erlebnis ohne Nutzer definieren.** Im Besprechungsraum geschriebene Aussagen beschreiben die Sicht des Anbieters. Befragen und testen Sie mit Nutzern.
- **Befragen, bis Menschen aufhören zu antworten.** Halten Sie Pulse kurz und wechseln Sie die Themen.
- **Verhaltensdaten erheben, ohne es jemandem zu sagen.** Es bricht Vertrauen und womöglich das Gesetz. Seien Sie offen, was erhoben wird und warum.
- **Erlebnisdaten in Leistungsbeurteilungen nutzen.** Es verwandelt ein Lernwerkzeug in Überwachung und zerstört ehrliche Berichterstattung.
- **Die Kennzahl beheben, nicht die Ursache.** Lenken Sie Nutzer nicht in einen freundlicheren Kanal, um eine Zahl zu verbessern. Beheben Sie die Reise.
- **Die Befunde auf einer Folie lassen.** Finanzieren und verfolgen Sie die Erlebniskorrekturen.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Erlebnisziele | Implizit oder fehlend | Vom Anbieter für einige Services geschrieben | Aussagen mit Nutzern für Schlüsselservices geschrieben | Aussagen jedes Quartal mit Nutzergruppen überprüft und überarbeitet | Über Services und Lieferanten geteilt, gemeinsam mit Nutzern verantwortet |
| Messung | Gelegentliche Umfragen | Pulsumfrage für einen Service | Kennzahlen aus drei Blickwinkeln (sagen, tun, System) für jede Aussage | Kennzahlen im Trend, für kleine Gruppen geschützt und mit SLAs verglichen | Daten über Anbieter kombiniert, mit nutzerkontrollierten Datenschutzentscheidungen |
| Handlung | Beschwerden einzeln bearbeitet | Korrekturen ad hoc vorgenommen | Größte Erlebnisprobleme mit Eignern im Backlog | Korrekturen finanziert, verfolgt und an Nutzer zurückberichtet | Verbesserung über Teams, Lieferanten und Nutzer koordiniert, mit geteiltem Lernen |

## Checkliste

- [ ] Jeder XLA-Service hat drei bis fünf mit Nutzern geschriebene Erlebnisaussagen.
- [ ] Jede Aussage hat Kennzahlen aus mindestens zwei Blickwinkeln (sagen, tun, System).
- [ ] SLA- und Erlebniskennzahlen erscheinen für jeden Service auf derselben Seite.
- [ ] Pulsumfragen sind kurz, regelmäßig und in der Formulierung stabil.
- [ ] Kommentare werden nach einem stabilen Leitfaden kodiert, und ein Mensch prüft monatlich eine Stichprobe.
- [ ] Gruppen unter einer vereinbarten Größe werden in Berichten unterdrückt.
- [ ] Erhobene Verhaltensdaten werden Nutzern offengelegt und auf das Nötige begrenzt.
- [ ] Keine Erlebniskennzahl wird in individuellen Leistungsbeurteilungen genutzt.
- [ ] Ein vierteljährliches Review mit Nutzervertretern steht im Kalender.
- [ ] Die größten Erlebnisprobleme haben Eigner und Daten im Backlog.

## KI-Prompts

**Erlebnisaussagen aus Interviewnotizen entwerfen.**

```text
Here are anonymized notes from [number] interviews with users of [service] in
[type of organization]: [paste notes]. Propose three to five experience
statements in the first person, each tied to one outcome the users care about,
using their wording where possible. For each, suggest one measure from what
people say, one from what they do, and one from what the system records. Do not
invent figures. List your assumptions and anything you could not tell from the
notes.
```

**Die Lücke zwischen SLA und Erlebnis finden.**

```text
For [service] in [period], our SLA results were: [paste results]. Our
experience data (pulse scores, comment themes, friction counts) were: [paste
data]. Describe where the two disagree, offer three possible explanations for
each disagreement, and suggest what to check next. Do not assume a cause the
data cannot support. List your assumptions and what additional data would help.
```

**Einen Datenschutzansatz für Verhaltenskennzahlen überprüfen.**

```text
We plan to collect these behavioral signals for experience measurement:
[list]. Users are [staff, public, or both] in [jurisdiction or sector]. Review
the plan for risks to privacy, trust, and fairness, and suggest minimum
aggregation, retention, and disclosure practices. Flag anything I should take
to a privacy specialist. Do not give legal conclusions. List your assumptions.
```

**Ein vierteljährliches Erlebnis-Review mit Nutzern vorbereiten.**

```text
Draft an agenda and a one-page summary for a quarterly experience review of
[service] with representatives of [user groups]. Include SLA and experience
results side by side, the top comment themes, last quarter's commitments and
their status, and two questions for users. The data: [paste data]. Keep the
tone plain and avoid jargon. List your assumptions and mark any claim that
needs checking.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die Leitplanke für eine Erlebniskennzahl zu finden, bevor Sie sie einem Dashboard hinzufügen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein XLA-Kennzahleneintrag seinen Manipulationsvektor und seine Leitplanke trägt.

## Wichtigste Erkenntnisse

- Ein XLA fügt betrieblichen Zielen Erlebnisziele und -kennzahlen hinzu und ergänzt das SLA.
- Schreiben Sie Erlebnisaussagen mit Nutzern, in ihren Worten, und binden Sie jede an Kennzahlen aus dem, was Menschen sagen und tun und was das System aufzeichnet.
- Zeigen Sie SLA- und Erlebnisergebnisse zusammen und behandeln Sie Widerspruch als Anlass zur Untersuchung.
- Schützen Sie Nutzer: Legen Sie offen, was Sie erheben, aggregieren Sie es, unterdrücken Sie kleine Gruppen und halten Sie es aus Leistungsbeurteilungen heraus.
- Vermeiden Sie einen einzelnen Erlebnisindex und harte Ziele, bevor die Kennzahlen verstanden sind.
- Finanzieren Sie die Korrekturen, die die Daten offenlegen, und sagen Sie Nutzern, was sich änderte.

## Quellen und weiterführende Literatur

1. ISO 9241-210, *Ergonomics of human-system interaction: Human-centred design for interactive systems*, International Organization for Standardization.
2. Norman, D. A., *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
5. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
6. Wikipedia, [User experience](https://en.wikipedia.org/wiki/User_experience).
7. Wikipedia, [Customer experience](https://en.wikipedia.org/wiki/Customer_experience).
8. Wikipedia, [Usability](https://en.wikipedia.org/wiki/Usability).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Human-centered design](https://en.wikipedia.org/wiki/Human-centered_design).
11. Wikipedia, [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis).
12. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
