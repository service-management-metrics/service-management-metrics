# Goodharts Gesetz und die Psychologie von Kennzahlen

**Jede Zahl, die Sie belohnen, in eine Rangfolge bringen oder mit der Sie drohen, beginnt die Arbeit zu verändern, die sie beschreiben sollte. Deshalb wird jede Kennzahl in diesem Buch als Frage genutzt, die ein Team diskutiert, und mit einer Leitplanke gekoppelt, die ihre Manipulation auffängt.**

## Überblick und Motivation

[Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) ist die älteste Warnung der Messlehre. Der Ökonom Charles Goodhart bemerkte 1975, als er über die britische Geldpolitik schrieb, dass eine statistische Regelmäßigkeit dazu neigt zusammenzubrechen, sobald Behörden sie zu Steuerungszwecken unter Druck setzen. Die populäre Formulierung kam später. Die Anthropologin Marilyn Strathern fasste es 1997 so: „Wenn eine Messgröße zum Ziel wird, hört sie auf, eine gute Messgröße zu sein.“ Beide Sätze sagen dasselbe: In dem Moment, in dem eine Zahl dazu dient, Menschen zu steuern, steuern Menschen die Zahl.

Dieselbe Idee hat andere Namen. [Campbells Gesetz](https://en.wikipedia.org/wiki/Campbell%27s_law) des Sozialwissenschaftlers Donald Campbell besagt: Je mehr ein quantitativer Indikator für Entscheidungen genutzt wird, desto stärker unterliegt er Verfälschungsdruck und desto mehr verzerrt er die Prozesse, die er überwachen soll. Der [Kobra-Effekt](https://en.wikipedia.org/wiki/Cobra_effect) ist die Geschichte einer Prämie, die mehr von dem hervorbrachte, was sie beseitigen sollte. Jedes davon ist ein Beispiel für einen [Fehlanreiz](https://en.wikipedia.org/wiki/Perverse_incentive): eine Belohnung, die Verhalten von dem wegdrängt, was der Belohnende wollte.

Teams, die IT-Services entwickeln und betreiben, sind ungewöhnlich exponiert. Kontinuierliche Auslieferung und IT-Service-Management (ITSM), wie von [ITIL](https://en.wikipedia.org/wiki/ITIL) kodifiziert, erzeugen beide einen steten Strom von Zeitstempeln, Zählungen und Status. Ein Ticketsystem erfasst, wann ein Ticket eröffnet, wann es zugewiesen wurde, wann die Uhr pausierte und wann es geschlossen wurde. Ein Liefer-Werkzeug erfasst, wann Arbeit begann und endete. Diese Zahlen sind billig zu erheben, leicht darzustellen und leicht zu Zielen zu machen. Sie lassen sich auch leicht bewegen, ohne jemandem zu helfen.

Drei Begriffe kehren in diesem Thema und im Rest des Buches wieder. Eine **Messgröße** beschreibt etwas. Ein **Ziel** ist eine Zahl, die jemand erreichen soll. Eine **Leitplanke** ist eine zweite Messgröße oder eine Praktik, im Voraus gewählt, die sich bewegen würde, wenn die erste Messgröße manipuliert würde. Der Schritt von der Messgröße zum Ziel ist der, an dem der Ärger beginnt, und die Leitplanke ist die Art, es zu bemerken.

Dieses Thema setzt die Regel, die jedes andere Thema bestimmt. Jede Kennzahlenfamilie im Buch kommt mit ihrem Manipulationsvektor (wie sie typischerweise manipuliert wird) und ihrer Leitplanke. Wenn ein späteres Thema das auszulassen scheint, behandeln Sie das Thema als unfertig.

### Warum Menschen Zahlen manipulieren

Manipulation ist meist keine Unehrlichkeit. Sie ist die gewöhnliche Reaktion fähiger Menschen auf die Anreize vor ihnen. Vier Kräfte wirken.

- **Druck.** Der Bonus, die Beurteilung, die Vertragsverlängerung oder der Ruf von jemandem hängt von der Zahl ab. Auch ohne formale Verbindung schließen Menschen aus dem, was die Führung darstellt, darauf, was der Führung wichtig ist.
- **Surrogation.** [Surrogation](https://en.wikipedia.org/wiki/Surrogation) ist die Neigung, die Messgröße so zu behandeln, als wäre sie die Sache, für die sie steht. Forschende, die sie in Organisationen untersuchten, fanden, dass an eine Messgröße gebundene variable Vergütung sie wahrscheinlicher macht. Ein Team, das „geschlossene Tickets“ verfolgt, beginnt zu glauben, das Ziel seien geschlossene Tickets und nicht gelöste Probleme.
- **Angst.** Bringt eine schlechte Zahl Schuldzuweisung, verbergen Menschen schlechte Nachrichten. Incidents werden herabgestuft, Ausfälle als „geplante Wartung“ umetikettiert und Fehler als Funktionswünsche erfasst.
- **Lokale Optimierung.** Ein Team verbessert den Teil des Systems, an dem es gemessen wird, und schiebt Kosten auf einen Teil, an dem nicht gemessen wird. Der Service Desk schließt schnell, und der Second-Level-Support erbt die Wiederholungen.

Diese Kräfte zu verstehen ist wichtig, weil das Mittel nicht strengere Kontrolle ist, sondern die Veränderung der Bedingungen, die Manipulation rational machen.

## Leitprinzipien

- **Messen, um zu lernen, nicht um zu urteilen.** Zeigen Sie die Zahlen zuerst dem Team, das die Arbeit leistet, und nutzen Sie sie, um Fragen zu stellen.
- **Jede Kennzahl mit einer Leitplanke koppeln.** Geschwindigkeit mit Qualität, Menge mit Ergebnis, Kosten mit Erlebnis.
- **Teams und Systeme beschreiben, nie Menschen in eine Rangfolge bringen.** Individuelle Ranglisten sind der schnellste Weg, eine Datenquelle zu verfälschen.
- **Ergebnisse und Trends gegenüber Zielen bevorzugen.** Eine Richtung und ein Gespräch schlagen einen Schwellenwert.
- **Die Definition aufschreiben, einschließlich der Uhren.** Mehrdeutige Definitionen sind der Ort, an dem sich Manipulation versteckt.
- **Mit Veränderung rechnen.** Verabschieden oder überarbeiten Sie eine Kennzahl, wenn sie keine Entscheidungen mehr untermauert.
- **Schlechte Nachrichten sicher machen.** Wird ehrliches Berichten bestraft, werden die Daten lügen.

## Kennzahlendefinitionen

Die folgenden Kennzahlen sind keine Service- oder Liefermessgrößen. Sie sind Messgrößen für die Gesundheit der Kennzahlenpraxis selbst und zeigen die Form, die jede Kennzahlentabelle in diesem Buch hat. Die ersten drei sind Beispiele für Leitplanken, die in späteren Themen durchgängig auftauchen.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Leitplanken-Abdeckung | Anteil der berichteten Kennzahlen, die eine benannte, verfolgte Leitplanke haben | Kennzahlen mit Leitplanke / berichtete Kennzahlen | Prozent | Kennzahlenregister (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen) | Messung und Berichterstattung; kontinuierliche Verbesserung | Retrospektive zu Arbeitsvereinbarungen | Vierteljährlich |
| Wiedereröffnungsrate | Anteil geschlossener Tickets oder Arbeitselemente, die innerhalb eines festgelegten Zeitfensters wieder eröffnet wurden | im Zeitraum innerhalb von 14 Tagen wieder eröffnete Elemente / im Zeitraum geschlossene Elemente | Prozent | Statusverlauf des ITSM-Werkzeugs oder Issue-Trackers | Incident-Management; Problemmanagement | Definition of Done; entwichene Fehler | Monatlich |
| Anzahl der Definitionsänderungen | Anzahl der Änderungen an Kennzahlendefinitionen oder Status-Workflows in einem Zeitraum, mit Begründungen | Anzahl der Einträge im Änderungsprotokoll der Definitionen | Anzahl | Änderungsprotokoll des Kennzahlenregisters | Messung und Berichterstattung | Arbeitsvereinbarungen | Vierteljährlich |
| Nutzungsrate von Kennzahlen | Anteil der berichteten Kennzahlen, die im Zeitraum in einer Entscheidung herangezogen wurden | in einer erfassten Entscheidung herangezogene Kennzahlen / berichtete Kennzahlen | Prozent | Entscheidungsprotokoll oder Review-Notizen | Kontinuierliche Verbesserung | Retrospektiv-Maßnahmen | Vierteljährlich |
| Wahrnehmungslücke | Differenz zwischen dem Ergebnis einer Zufriedenheitsumfrage und einem aus Tickets abgeleiteten Servicelevel für denselben Service | aus der Umfrage abgeleitete Rate minus aus dem Tracker abgeleitete Rate | Prozentpunkte | Umfragewerkzeug und ITSM-Werkzeug | Service-Level-Management | Feedback aus dem Stakeholder-Review | Vierteljährlich |

Die Wiedereröffnungsrate zählt nur Elemente, die im selben Datensatz wieder eröffnet wurden. Ein Element, das geschlossen und dann als neues Ticket erneut erfasst wurde, taucht nicht auf. Teil des Sinns des nächsten Abschnitts ist, dass die Leitplanke ihre eigene Leitplanke braucht, etwa die Verknüpfung doppelter Tickets mit ihren Originalen.

## Empfehlungen

### Das Messsystem gestalten

**1. Beginnen Sie mit einer Frage, nicht mit einer Zahl.** Schreiben Sie vor dem Hinzufügen einer Kennzahl die Frage auf, die sie beantwortet, und die Entscheidung, die sie untermauert. „Bekommen Nutzer ihre Probleme gleich beim ersten Mal gelöst?“ ist eine Frage. „Die durchschnittliche Bearbeitungszeit senken“ ist ein Ziel, das sich als Frage ausgibt. Eine Kennzahl ohne angehängte Entscheidung ist ein Kandidat für die Verabschiedung.

**2. Wählen Sie Kennzahlen in Spannung.** Eine einzelne Zahl lädt zur Überoptimierung ein, wählen Sie also Paare, die gegeneinander ziehen: Durchlaufzeit mit Change-Fehlerrate, Ticket-Schließgeschwindigkeit mit Wiedereröffnungsrate, Verfügbarkeit mit nutzerberichtetem Erlebnis. Das Paar muss keine Formel sein. Es muss zusammen auf derselben Seite gezeigt werden.

**3. Definieren Sie die Uhren und die Ausschlüsse.** Schreiben Sie für jede Zeitmessgröße auf, wo die Uhr startet, wo sie stoppt und wann sie pausieren darf. Die meiste Manipulation in Servicedaten sitzt in diesen Grenzen: Ein Ticket im Status „wartet auf Kunden“ stoppt die Servicelevel-Uhr, und ein Change, der erst nach seiner Umsetzung erfasst wird, entgeht der Change-Durchlaufzeit. Gibt es einen Pausenstatus, berichten Sie, wie oft er genutzt wird.

**4. Verwenden Sie Verteilungen und Perzentile.** Ein Durchschnitt der Ticket-Lösungszeiten kann sich verbessern, weil einige leichte Tickets schnell geschlossen wurden, während die schweren altern. Zeigen Sie den Median und ein hohes Perzentil (zum Beispiel das 85. oder 95.) und zeigen Sie die ältesten offenen Elemente. Das Alter von Arbeitselementen und das älteste offene Ticket sind schwer zu manipulieren, ohne die Arbeit tatsächlich abzuschließen (siehe Thema 2.1, Flussmaße).

**5. Führen Sie ein Kennzahlenregister.** Ein kurzes Register listet jede Kennzahl, ihren Eigner, ihre Definition, ihre Datenquelle, ihren Manipulationsvektor, ihre Leitplanke und das Datum der letzten Überprüfung. Es ist langweilig, und es ist die wirksamste einzelne Gewohnheit in diesem Thema (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

### Kennzahlen sicher einführen

**6. Zeigen Sie zuerst dem Team die Rohdaten.** Teams, die die Zahlen vor der Führung sehen, stellen deren Genauigkeit bereitwilliger infrage. Beginnen Sie mit den zugrunde liegenden Elementen, nicht mit dem Diagramm. Wenn die Daten ein Gespräch mit den Menschen, die sie erzeugt haben, nicht überstehen, überstehen sie kein Dashboard.

**7. Trennen Sie Lernsichten von Rechenschaftssichten.** Die Arbeitssicht eines Teams kann viele Messgrößen enthalten, auch hässliche. Was an die Führung geht, sollte eine kleine, stabile Menge sein. Fordert die Führung die Arbeitssicht an, ist zu erwarten, dass sich die Arbeitssicht ändert, um besser auszusehen.

**8. Knüpfen Sie keine individuelle Vergütung, Disziplinarmaßnahme oder Rangfolge an eine Kennzahl.** Teams kann man bitten, ihre Zahlen zu erklären und zu verbessern. Individuelle Ziele für Ticketzahlen, Story Points oder Commits bringen Menschen bei, die Zahl zu maximieren. Der Ansatz mit [Leistungskennzahlen](https://en.wikipedia.org/wiki/Key_performance_indicator) (KPI) kann funktionieren, wenn die Indikatoren für das Gesamtsystem gewählt und regelmäßig überprüft werden. Er scheitert, wenn er zur Scorecard pro Person wird.

**9. Machen Sie ehrliches Berichten sicher.** [Psychologische Sicherheit](https://en.wikipedia.org/wiki/Psychological_safety) ist die Überzeugung, nicht bestraft zu werden, wenn man mit einem Fehler oder einer Sorge spricht. Ein schuldfreies Review eines Incidents ist ein Beispiel dafür in der Praxis. Ohne sie sinken Incident-Zahlen aus dem falschen Grund: Menschen hören auf zu melden.

### Das System ehrlich halten

**10. Führen Sie ein Manipulations-Review durch.** Stellen Sie einmal im Quartal dem Team zu jeder berichteten Kennzahl eine Frage: „Wenn wir diese Zahl gut aussehen lassen wollten, ohne jemandem zu helfen, was würden wir tun?“ Schreiben Sie die Antworten auf und prüfen Sie dann, ob die Leitplanke jede davon auffangen würde. Die Übung ist billig, bringt nützliche Ideen hervor und verschiebt das Gespräch von Verdacht zu Gestaltung.

**11. Prüfen Sie die Definitionen an der Wirklichkeit.** Ziehen Sie eine kleine Zahl geschlossener Elemente als Stichprobe und lesen Sie sie. Wurden sie wirklich gelöst? War die Priorität ehrlich? Bedeutete der Status „wartet auf Kunden“, dass tatsächlich auf den Kunden gewartet wurde? Eine Stichprobe von fünfzehn Minuten sagt oft mehr als ein Monat Dashboards.

**12. Verabschieden Sie Kennzahlen.** Eine Kennzahl, die zwei Quartale lang in keiner Entscheidung herangezogen wurde, ist Aufwand ohne Nutzen. Entfernen Sie sie und sagen Sie es. Weniger Kennzahlen, jede vertrauenswürdig, schlagen viele.

## Manipulationsvektoren und Leitplanken

Die Tabelle deckt die Kennzahlen des vorigen Abschnitts ab. Spätere Themen wenden dieselbe Form auf Service- und Liefermessgrößen an.

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Leitplanken-Abdeckung | Eine Leitplanke auf dem Papier benennen, ohne sie je zu verfolgen | Das Register prüfen: Eine Leitplanke zählt nur, wenn ihr letzter Wert auf demselben Dashboard erscheint |
| Wiedereröffnungsrate | Das Ticket schließen und ein neues eröffnen statt wiederzueröffnen; das Zeitfenster verlängern, bis Wiedereröffnungen außerhalb davon fallen | Rate doppelter und verknüpfter Tickets; Wiederkehr derselben Ursache über Tickets hinweg |
| Anzahl der Definitionsänderungen | Änderungen nicht protokollieren, damit die Zahl niedrig bleibt; einen Workflow ändern, ohne es jemandem zu sagen | Bei jedem Review das Statusmodell im Werkzeug mit dem Register vergleichen |
| Nutzungsrate von Kennzahlen | Pro forma jede Kennzahl in einem Entscheidungsprotokoll zitieren | Fragen, was sich wegen des Zitats geändert hat; das Protokoll stichprobenartig prüfen |
| Wahrnehmungslücke | Nur zufriedene Nutzer befragen; Umfragen auf Zeitpunkte nach einer guten Interaktion lenken | Rücklaufquote und Zusammensetzung der Antwortenden; offene Kommentare im Review vorlesen |

Ein gesunder Befund ist eine Kennzahlenpraxis, die sich verändert: Definitionen werden aus schriftlich festgehaltenen Gründen angepasst, Kennzahlen kommen und gehen, und das Team kann eine Geschichte über eine Entscheidung erzählen, die eine Zahl verändert hat.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Messen ohne Ziele | Verringert Manipulation; lädt zu ehrlicher Diskussion ein | Kann zu Berichten verkommen, auf die niemand reagiert |
| Ziele mit Leitplanken | Gibt Richtung und Dringlichkeit; das Paar begrenzt Manipulation | Mehr Pflegeaufwand; auch die Leitplanke wird mit der Zeit manipuliert |
| Individuelle Kennzahlen | Leicht verständlich; wirkt fair | Verfälscht Daten; schadet der Zusammenarbeit |
| Team- und Servicekennzahlen | Entspricht dem tatsächlichen Ablauf der Arbeit | Schwerer zuzuordnen; verbirgt individuellen Unterstützungsbedarf |
| Wenige Kennzahlen | Leichter zu vertrauen und zu merken | Blinde Flecken; ein neues Problem kann übersehen werden |
| Viele Kennzahlen | Breite Abdeckung | Verwässert Aufmerksamkeit; jede Kennzahl ist schwach gesteuert |

Die Antwort in Worten: Setzen Sie Ziele sparsam ein, für gut verstandene und schwer zu manipulierende Zustände, etwa ein Service Level Objective, um das Nutzer gebeten haben. Auch dann sollten Sie das Ziel an den Service binden und nicht an die Beurteilung einer Person. Das Ziel ist nicht, Zahlen aus der Entscheidungsfindung zu entfernen. Es ist, die Zahlen mit der Wirklichkeit verbunden zu halten, indem man die Menschen, die sie erzeugen, auf seiner Seite behält.

## Fragen für die Diskussion im Team

**1. Welche Zahl auf unserem aktuellen Dashboard würden wir am ehesten verbessern wollen, ohne die Arbeit zu verbessern?**
Beginnen Sie mit der Kennzahl, auf die Menschen zuerst schauen, und gehen Sie dann zu der, nach der die Führung fragt. Fragen Sie nach konkreten Zügen: Was würden wir mit den Daten tun, wenn wir unter Druck stünden? Die Moderation sollte jede Antwort ohne Wertung festhalten, denn die Liste wird zu den Manipulationsvektoren für das Register. Fragen Sie zum Schluss, welche der Züge unsere Leitplanken auffangen würden und welche nicht.

**2. Wo startet und stoppt die Uhr in unserer wichtigsten Zeitmessgröße, und wer hat das entschieden?**
Bitten Sie die Gruppe, den Lebenszyklus des Tickets oder Arbeitselements an einem Whiteboard zu zeichnen und jeden Status zu markieren. Suchen Sie nach Status, in denen Zeit verschwinden kann, etwa Warten auf einen Kunden oder Zurückgestellt. Zählen Sie, wie oft jeder Status genutzt wird und von wem. Das Gespräch zeigt oft, dass zwei Teams dasselbe Wort unterschiedlich verwenden.

**3. Wann hat uns eine Zahl zuletzt dazu gebracht, etwas Unhilfreiches zu tun?**
Laden Sie zu Geschichten ein, nicht zu Schuldzuweisung. Verbreitete Beispiele sind das Schließen von Tickets vor der Überprüfung, das Aufteilen von Changes, um Deployment-Zahlen zu erhöhen, oder das Umklassifizieren eines Incidents, um einen Verstoßbericht zu vermeiden. Die Moderation sollte fragen, was die Person schützen wollte. Die Antwort zeigt meist den Anreiz, der geändert werden muss.

**4. Wer sieht unsere Kennzahlen, und was geschieht dort mit ihnen?**
Verfolgen Sie jede Kennzahl vom Team bis zu ihrem Publikum. Fragen Sie, ob irgendeine Version davon genutzt wird, um Teams oder Menschen zu vergleichen. Fragen Sie, was das Team zeigen würde, wenn das Publikum ein anderes wäre. Wo das Team die gezeigten Zahlen ändern würde, gibt es eine Vertrauenslücke, die mit dem Publikum zu besprechen ist.

**5. Was ist die Leitplanke für jede unserer fünf wichtigsten Kennzahlen, und steht sie auf derselben Seite?**
Machen Sie eine zweispaltige Liste an einer Tafel. Hat eine Kennzahl keine Leitplanke, einigen Sie sich auf einen Kandidaten und einen Verantwortlichen, der ihn ein Quartal lang erprobt. Existiert eine Leitplanke, wird aber selten angesehen, diskutieren Sie, warum. Vermeiden Sie eine Leitplanke, die lediglich die Umkehrung der Kennzahl ist, denn das sagt nichts Neues.

**6. Welche Kennzahl sollten wir in diesem Quartal verabschieden?**
Fragen Sie nach Belegen: Wann wurde sie zuletzt in einer Entscheidung genutzt? Kann sich niemand erinnern, verabschieden Sie sie probeweise und schauen Sie, ob es jemand bemerkt. Die Moderation sollte die Verabschiedung als normales Ereignis behandeln. Teams, die nie Kennzahlen aufgeben, enden mit Berichten, denen niemand traut oder die niemand liest.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams begegnen Manipulation bei Velocity, Durchsatz und Deployment-Zahlen. [Velocity](https://en.wikipedia.org/wiki/Velocity_(software_development)) ist insbesondere ein Planungswerkzeug für ein Team, kein Maß für Produktivität, und der Vergleich von Teams damit führt zu aufgeblähten Schätzungen. Lieferteams sollten ihre Arbeitsmessgrößen für sich behalten, eine kleine Menge nach außen veröffentlichen und jede Geschwindigkeitsmessgröße mit einer Qualitätsmessgröße koppeln (siehe Thema 2.5, Kennzahlen für Lieferprognosen und Planung).

### Service- und Betriebsteams

Serviceteams begegnen Manipulation bei Lösungszeit, Lösung beim Erstkontakt und Servicelevel-Erfüllung. Die uhrpausierenden Status und Prioritätsfelder sind die üblichen Stellen des Abdriftens. Betriebsteams sollten Statusübergänge regelmäßig prüfen, die Nutzung von Pausenstatus berichten und wiederholte Kontakte und Wiedereröffnungsrate neben der Geschwindigkeit beobachten. Teams im Bereitschaftsdienst sollten bei Messgrößen besonders vorsichtig sein, die Nicht-Alarmiertwerden belohnen, denn sie bestrafen ehrliches Alarmieren (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents).

### Führung und Governance

Führungskräfte setzen Anreize, oft ohne es zu beabsichtigen. Eine in einem Review gestellte Frage („Warum ist das rot?“) bringt dem Team bei, was es verbergen soll. Führungskräfte sollten fragen, was das Team aus einer Zahl gelernt hat, Ranglisten aus dem Raum halten, offenes Berichten schützen und die Verbesserungsarbeit finanzieren, die eine schlechte Zahl offenlegt. Governance-Gremien sollten das Kennzahlenregister und das Manipulations-Review als Teil der Berichterstattung erwarten und eine definierte Änderung einer Kennzahl als normal behandeln.

### Kunden und Nutzer

Nutzer erleben die Wirkung von Manipulation als Service, der auf dem Papier gut aussieht und sich in der Praxis schlecht anfühlt: ein geschlossenes Ticket, das nicht behoben wurde, ein als geplant bezeichneter Ausfall, eine Umfrage, die sie nie erreichte. Nutzer sind auch die beste Leitplanke. Ihr Feedback in Form von Umfragen, Beschwerden und Kommentaren sollte neben den operativen Zahlen stehen und vollständig gelesen statt auf eine Punktzahl reduziert werden (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Krankenhauses betreibt einen Service Desk und mehrere Produktteams, die klinische Anwendungen entwickeln. Die Zahlen in diesem Beispiel sind illustrativ.

Die Führung setzt das Ziel, 90 Prozent der Incidents innerhalb der vereinbarten Zeit zu schließen. Binnen zwei Monaten zeigt das Dashboard 94 Prozent. Die Leiterin des Servicebetriebs ist erfreut, aber beunruhigt, weil sich das klinische Personal mehr statt weniger beschwert. Sie bittet das Team, ein Manipulations-Review der Kennzahl durchzuführen.

Das Team skizziert den Ticket-Lebenszyklus. Es stellt fest, dass Tickets im Schnitt zweimal in „wartet auf Kunden“ wechseln und die Zeit in diesem Status gewachsen ist. Eine Stichprobe von 30 geschlossenen Tickets zeigt, dass 7 mit dem Vermerk „keine Antwort vom Nutzer“ nach einem einzigen Anrufversuch geschlossen wurden. Außerdem stellt es fest, dass die Wiedereröffnungsrate nur deshalb flach ist, weil Nutzern gesagt wurde, sie sollten „ein neues Ticket eröffnen“, wenn das Problem wiederkehrte.

Das Team nimmt drei Änderungen vor. Erstens zeigt das Diagramm der Lösungszeit nun den Median, das 90. Perzentil und das älteste offene Ticket, zusammen mit dem Anteil der in Pausenstatus verbrachten Zeit. Zweitens ergänzt das Dashboard eine Rate wiederholter Kontakte, definiert als Anteil neuer Tickets desselben Nutzers zum selben Service innerhalb von 14 Tagen. Drittens geht eine kurze Umfrage an eine Zufallsstichprobe geschlossener Tickets, und ihre offenen Kommentare werden im monatlichen Review gelesen.

Drei Monate später sinkt die Hauptzahl der Erfüllung auf 88 Prozent, was sich wie eine schlechte Nachricht anfühlt. Die Rate wiederholter Kontakte ist jedoch gefallen, und Umfragekommentare über ungelöste Probleme sind seltener geworden. Die Leiterin des Betriebs sagt der Führung, die alte Zahl sei aufgebläht gewesen und das neue Bild ehrlicher, und bittet sie, ein Servicelevel-Ziel auf Basis der korrigierten Definition zu akzeptieren. Die im Entscheidungsprotokoll festgehaltene Entscheidung lautet, das Ziel nach einem weiteren Quartal Daten festzulegen und nicht sofort.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Kurze Feedbackschleifen lassen ein Team Manipulation früh bemerken. Eine gut passende Praktik ist, in jedem regelmäßigen Review einige Rohelemente zu lesen und mit der Hauptzahl zu vergleichen, mit Stakeholdern im Raum. Zu beachten ist, dass eine Schleife, die Berichtsgeschwindigkeit belohnt, selbst zum Ziel werden kann; halten Sie den Zweck jedes Reviews deshalb auf dem Lernen.

### KI

KI verändert, wie Manipulation aussieht. Ein Modell kann in großer Menge plausible Lösungsnotizen, Statusmeldungen oder Ticketkategorien erzeugen, sodass eine Kennzahl, die solche Artefakte zählt, ohne echte Arbeit erfüllt werden kann. Koppeln Sie jede KI-beeinflusste Zählung mit einer stichprobenartigen menschlichen Qualitätsprüfung und berichten Sie den Anteil der KI-Ausgaben, den ein Mensch geändert hat. Zu beachten ist, dass eine niedrige Korrekturrate gute Entwürfe oder nachlässige Prüfung bedeuten kann; lesen Sie beide zusammen.

### Automatisierung

Automatisierte Erhebung beseitigt manuelle Änderungen an den Daten und schließt damit einige Manipulationswege. Automatisieren Sie die Leitplanke ebenso wie die Kennzahl, sodass beide auf derselben Seite erscheinen. Zu beachten ist, dass Menschen dann die Eingaben manipulieren, die die Automatisierung liest, etwa die Ticketkategorie oder den Pausenstatus; prüfen Sie Definitionen deshalb anhand einer Stichprobe echter Elemente.

### Analytik

Analyse kann Manipulation durch auffällige Verteilungen aufdecken, etwa eine Spitze geschlossener Tickets kurz vor einem Berichtsstichtag oder eine Häufung genau am Zielwert. Nutzen Sie diese Muster als Anstoß für ein Gespräch, nicht als Beweis böser Absicht. Zu beachten ist, dass jede Erkennungsregel bekannt wird und dann umgangen wird; wechseln Sie deshalb Leitplanken und halten Sie einen Menschen im Review.

## Branchenperspektive

**Startup.** Kleine Teams haben wenige Kennzahlen und starkes Vertrauen, was hilft. Die Gefahr ist, ein großes Unternehmens-Dashboard zu früh zu importieren. Beginnen Sie mit zwei oder drei Messgrößen, die die Gründer tatsächlich nutzen, schreiben Sie deren Definitionen auf und halten Sie sie aus Gesprächen über individuelle Leistung heraus.

**Kleinunternehmen.** Die Ressourcen sind knapp, und die Person, die die IT leitet, berichtet oft direkt an die Inhaberin oder den Inhaber. Eine einzelne Kundenbeschwerde kann jedes Dashboard übertrumpfen. Halten Sie die Menge klein, bevorzugen Sie direktes Feedback von Nutzern und behandeln Sie von Anbietern gelieferte Berichte mit Vorsicht, denn der Anbieter hat eigene Anreize.

**Großunternehmen.** Größe vervielfacht die Nachfrage nach vergleichbaren Zahlen ebenso wie den Druck, sie zu manipulieren. Verwenden Sie eine kleine Standardmenge mit schriftlichen Definitionen, halten Sie Arbeitsansichten der Teams getrennt von Verdichtungen und vermeiden Sie den Vergleich von Teams, die an verschiedenen Arten von Services arbeiten. Ein Kennzahlenregister und ein Überprüfungsrhythmus werden unverzichtbar.

**Behörden und öffentlicher Sektor.** Berichtspflichten und vertragliche Servicelevel können manche Ziele unverhandelbar machen. Behandeln Sie sie als Entwurfsvorgaben: Erfüllen Sie sie, zeigen Sie die Leitplanke daneben und berichten Sie die verwendeten Definitionen. Öffentliche Rechenschaftspflicht erhöht die Kosten, schlechte Nachrichten zu verbergen, schaffen Sie also sichere interne Kanäle und gehen Sie offen mit korrigierten Definitionen um (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten der Anwendung dieses Themas sind überwiegend Zeit: einige Stunden, um Definitionen und ein Register zu schreiben, ein kurzes vierteljährliches Manipulations-Review und gelegentliche Stichproben geschlossener Elemente. Werkzeugkosten fallen kaum an. Die größeren Kosten sind die Aufmerksamkeit der Führung, denn die Disziplin funktioniert nur, wenn sich die Menschen, die die Zahlen lesen, konsistent verhalten.

Der Ertrag kommt aus vermiedener Verschwendung und besseren Entscheidungen. Auf verfälschten Daten getroffene Entscheidungen können Investitionen auf das falsche Problem lenken, etwa einen Service Desk aufzustocken, um Tickets schneller zu schließen, wenn das eigentliche Problem wiederholte Kontakte wegen eines Fehlers sind. Manipulation untergräbt zudem das Vertrauen zwischen dem Team und den Menschen, die auf es angewiesen sind, und das ist schwer zu reparieren. Beschreiben Sie den Nutzen als Muster und nicht mit einem erfundenen Prozentsatz: weniger Rücknahmen von Entscheidungen, weniger Überraschungen in Audits und bessere Übereinstimmung zwischen operativen Zahlen und Nutzererleben. Brauchen Sie Zahlen für einen Business Case, messen Sie eigene Baselines, etwa Wahrnehmungslücke und Rate wiederholter Kontakte, vor und nach der Änderung.

## Anti-Muster und Fallstricke

- **Ziele ohne Leitplanken.** Ein einzelnes Ziel wird auf jedem verfügbaren Weg erreicht. Fügen Sie eine gekoppelte Messgröße hinzu, bevor das Ziel verkündet wird.
- **Ranglisten von Menschen oder Teams.** Sie laden zur Manipulation ein und entmutigen Hilfe zwischen Teams. Zeigen Sie jedem Team seinen eigenen Trend, mit Kontext.
- **Kennzahlen als Strafe.** Eine rote Zahl, die Schuldzuweisung bringt, wird durch Verschleierung grün. Fragen Sie stattdessen, was das Team braucht.
- **Durchschnitte schiefer Daten.** Sie verbergen das Ende der Verteilung, an dem Nutzer leiden. Verwenden Sie Perzentile und das Alter des ältesten Elements.
- **Definitionen stillschweigend ändern.** Trendlinien werden bedeutungslos. Protokollieren Sie jede Änderung mit Begründung und markieren Sie sie im Diagramm.
- **Die Leitplanke als neues Ziel behandeln.** Dann wird die Leitplanke manipuliert. Überprüfen Sie beide zusammen und wechseln Sie Leitplanken, wenn sie an Wirkung verlieren.
- **Eitelkeitskennzahlen.** Zählungen, die nur steigen, etwa bearbeitete Tickets oder Commits, sagen nichts über Ergebnisse. Bevorzugen Sie Messgrößen, die auch fallen können.
- **Qualitative Belege ignorieren.** Zahlen allein können nicht zeigen, dass sich ein geschlossenes Ticket ungelöst anfühlte. Lesen Sie die Kommentare.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definitionen und Uhren | Informell; jeder zählt anders | Für einige Kennzahlen aufgeschrieben | Eine schriftliche Definition je Kennzahl, mit Uhren und Ausschlüssen | Definitionen überprüft und Änderungen mit Gründen protokolliert | Definitionen über Teams und Lieferanten abgestimmt, überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| Leitplanken | Keine | Für einige Kennzahlen benannt | Jede berichtete Kennzahl hat eine Leitplanke auf derselben Seite | Leitplanken werden jedes Quartal auf Manipulation überprüft | Leitplanken wechseln und werden gemeinsam mit den Gemessenen entworfen |
| Nutzung und Sicherheit | Zahlen dienen der Schuldzuweisung | Das Team sieht seine eigenen Zahlen | Das Team sieht die Daten zuerst; keine individuellen Rangfolgen | Die Führung stellt Lernfragen; Berichten ist sicher | Kunden und Lieferanten teilen eine offene Sicht auf die Zahlen |

## Checkliste

- [ ] Jede berichtete Kennzahl hat eine schriftliche Frage und eine Entscheidung, die sie untermauert.
- [ ] Jede Zeitmessgröße hat eine schriftliche Start-, Stopp- und Pausenregel.
- [ ] Jede berichtete Kennzahl hat eine benannte, daneben gezeigte Leitplanke.
- [ ] Zeitmessgrößen zeigen Perzentile und das Alter des ältesten offenen Elements.
- [ ] Ein Kennzahlenregister mit Eigner, Definition, Manipulationsvektor, Leitplanke und Überprüfungsdatum existiert.
- [ ] Das Team sieht seine Daten vor der Führung.
- [ ] Keine individuelle Rangfolge, Vergütung oder Disziplinarmaßnahme ist an eine Kennzahl geknüpft.
- [ ] Ein vierteljährliches Manipulations-Review steht im Kalender.
- [ ] Eine Stichprobe geschlossener Elemente wird jedes Quartal auf Ehrlichkeit gelesen.
- [ ] Mindestens eine Kennzahl wurde im vergangenen Jahr verabschiedet oder neu gestaltet.

## KI-Prompts

**Ein Manipulations-Review einer Kennzahl durchführen.**

```text
I lead [team name], which runs [type of service or delivery work]. We report
this metric: [metric name], defined as [definition including where the clock
starts and stops]. It is used by [audience] to [decision or target]. Our data
comes from [tool].

List the realistic ways this metric could be made to look better without
improving the service for users. For each, suggest a guardrail metric or
practice that would reveal it and say what the guardrail's own gaming vector
would be. Do not invent benchmark values. List your assumptions and anything you
could not determine from what I gave you.
```

**Einen Eintrag im Kennzahlenregister entwerfen.**

```text
Draft a metric register entry for [metric name] for [team name]. Fields: question
it answers, decision it informs, definition, formula, unit, data source, owner
role, review cadence, gaming vector, guardrail, and how users or customers
would notice if it were wrong. Base the entry only on this description:
[describe the metric and current process]. Mark every field you had to assume,
and list questions I should answer to complete the entry.
```

**Eine Stichprobe geschlossener Tickets prüfen.**

```text
Here are [number] closed tickets from [service], with fields [list fields] and
the resolution notes pasted below. Review each for signs that the ticket was
closed without the problem being solved, that a pause state was used to stop
the clock, or that priority or category looks adjusted. Report patterns, not
individuals. Do not guess at causes not supported by the text. Tell me what you
could not judge from the data and what additional fields would help.

[paste tickets, with personal data removed]
```

**Planen, wie eine Kennzahl sicher eingeführt wird.**

```text
We plan to introduce [metric] to [audience]. Current context: [team size,
culture, previous experience with metrics]. Propose a rollout plan covering who
sees the data first, how we explain the purpose, what we will not use it for,
which guardrail we show with it, and when we review whether it is working.
Flag risks of gaming or fear and suggest how to reduce them. List your
assumptions and do not invent statistics.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema und die gekoppelte Leitplanke für eine Kennzahl zu finden, die Sie einführen wollen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein neues Kennzahlenthema seinen Manipulationsvektor und seine Leitplanke trägt.

## Wichtigste Erkenntnisse

- Eine Messgröße, die zum Ziel wird, beschreibt die Arbeit nicht mehr, nutzen Sie Zahlen also, um Fragen zu stellen.
- Manipulation ist eine normale Reaktion auf Druck und Angst, und sie nimmt ab, wenn man Bedingungen ändert, nicht wenn man kontrolliert.
- Jede Kennzahl braucht eine schriftliche Definition mit ihren Uhren und eine daneben gezeigte Leitplanke.
- Bevorzugen Sie Perzentile und das Alter des ältesten Elements gegenüber Durchschnitten.
- Beschreiben Sie Teams und Services, bringen Sie nie Einzelpersonen in eine Rangfolge, und lassen Sie das Team seine Daten zuerst sehen.
- Überprüfen Sie jedes Quartal auf Manipulation und verabschieden Sie Kennzahlen, die keine Entscheidungen mehr untermauern.

## Quellen und weiterführende Literatur

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
5. Choi, J., Hecht, G. W., and Tayler, W. B., "Lost in translation: The effects of incentive compensation on strategy surrogation," *The Accounting Review*, 87(4), 2012.
6. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Cobra effect](https://en.wikipedia.org/wiki/Cobra_effect).
11. Wikipedia, [Perverse incentive](https://en.wikipedia.org/wiki/Perverse_incentive).
12. Wikipedia, [Surrogation](https://en.wikipedia.org/wiki/Surrogation).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
16. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
