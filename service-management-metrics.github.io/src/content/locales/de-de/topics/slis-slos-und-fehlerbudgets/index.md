# SLIs, SLOs und Fehlerbudgets

**Ein Service Level Objective verwandelt „zuverlässig genug“ in eine Zahl, die Nutzer, Produktteams und Betriebsteams alle sehen können, und das dabei übrig bleibende Fehlerbudget verwandelt diese Zahl in eine gemeinsame, ausgebbare Entscheidung über Risiko statt in einen Streit um Schuld.**

## Überblick und Motivation

Jeder Service hat bereits ein Maß an Zuverlässigkeit, ob es jemand gemessen hat oder nicht. Nennt es niemand, nehmen Nutzer ein Niveau an, das Produktteam ein anderes, und das Betriebsteam verteidigt ein drittes. Der Unterschied wird bei einem Ausfall entdeckt. Dieses Thema behandelt die drei verbundenen Ideen, mit denen das [Site Reliability Engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) diese Lücke schließt: den Service Level Indicator, das Service Level Objective und das Fehlerbudget.

Ein [Service Level Indicator (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) ist eine Messung eines Aspekts des Services, wie Nutzer ihn erleben. Typische Aspekte sind, ob eine Anfrage erfolgreich war, wie lange sie dauerte, ob die zurückgegebenen Daten aktuell waren und ob sie korrekt waren. Ein guter SLI wird als Verhältnis ausgedrückt: die Zahl guter Ereignisse geteilt durch die Zahl gültiger Ereignisse, über ein definiertes Fenster. Ein [Service Level Objective (SLO)](https://en.wikipedia.org/wiki/Service-level_objective) ist das Ziel für dieses Verhältnis über einen Zeitraum, zum Beispiel „99,9 Prozent der gültigen Checkout-Anfragen sind über gleitende 28 Tage erfolgreich“. Das **Fehlerbudget** ist das, was das Objective schiefgehen lässt: 100 Prozent minus das SLO. Bei 99,9 Prozent beträgt das Budget 0,1 Prozent der gültigen Ereignisse.

Das Fehlerbudget verändert das Gespräch. Hat der Service wenig von seinem Budget verbraucht, hat das Team Raum, schneller zu releasen, riskante Changes zu versuchen und Experimente durchzuführen. Ist das Budget fast aufgebraucht, verlangsamt dasselbe Team die Funktionsarbeit und investiert Aufwand in Zuverlässigkeit, bis sich das Budget erholt. Die Entscheidung kommt aus einer im Voraus vereinbarten Zahl und hängt daher nicht davon ab, wer im Meeting am ranghöchsten oder überzeugendsten ist.

Die **Burn Rate** gibt an, wie schnell das Budget verbraucht wird, relativ zu der Rate, die genau alles bis zum Ende des Fensters verbrauchen würde. Eine Burn Rate von 1 bedeutet, dass das Budget genau am Ende des Fensters weg ist. Eine Burn Rate von 10 bedeutet, dass es in einem Zehntel des Fensters weg ist. Die Burn Rate ist die Brücke vom SLO zum Alarmieren, denn sie sagt, wie dringend ein Problem ist, gemessen an dem, was es das Objective kostet.

Agile und ITIL-Sicht treffen sich hier, und sie nutzen verschiedenes Vokabular für verwandte Ideen. In ITIL 4 ist das Service-Level-Management die Praktik, die Service Levels festlegt, misst und berichtet, und das [Service Level Agreement (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) ist die dokumentierte Vereinbarung zwischen einem Anbieter und einem Kunden (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA). Ein SLO ist ein internes Ziel, das meist strenger ist als das SLA und dem Team gehört, das den Service betreibt. Ein SLA hat Konsequenzen, etwa Gutschriften oder Strafen. Ein SLO hat eine Entscheidungsregel. Agile Teams, die ihre Services besitzen („you build it, you run it“), nutzen SLOs, um die Kosten von Zuverlässigkeit im selben Backlog sichtbar zu machen wie Funktionen. Teams, die der ITIL-Praxis folgen, können SLIs als messbare Form dessen behandeln, was Kunden als Bedarf nennen, und das SLO als das Arbeitsziel, das das SLA sicher hält.

[Verfügbarkeit](https://en.wikipedia.org/wiki/Availability) ist der bekannteste SLI und wird an anderer Stelle ausführlich behandelt (siehe Thema 5.3, Verfügbarkeitskennzahlen). Latenz, Korrektheit, Aktualität und Durchsatz sind ebenfalls Kandidaten. Die Kunst ist, Indikatoren nach dem zu wählen, was Nutzern wichtig ist, statt nach dem, was leicht zu sammeln ist. Die CPU-Auslastung eines Servers ist leicht zu sammeln und sagt wenig darüber, ob ein Kunde bezahlen konnte. Der Anteil der Zahlungsanfragen, die binnen zwei Sekunden abgeschlossen werden, sagt sehr viel. Berichten Sie bei Latenz [Perzentile](https://en.wikipedia.org/wiki/Percentile), nicht Durchschnitte, denn ein Durchschnitt verbirgt den langsamen Schwanz, den Nutzer bemerken (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen, und Thema 5.4, Kennzahlen für Kapazität und Leistung).

## Leitprinzipien

- **Beim Nutzer beginnen, nicht beim Server.** Wählen Sie Indikatoren, die ein Erlebnis beschreiben, das ein Mensch wiedererkennen würde, etwa „meine Zahlung ging durch“, und arbeiten Sie rückwärts zu dem, was zu messen ist.
- **Ein Ziel unter 100 Prozent ist eine Entscheidung, kein Eingeständnis.** Perfekte Zuverlässigkeit ist unerreichbar und unbezahlbar, und Nutzer können den Unterschied ab einem gewissen Punkt meist nicht erkennen. Das Budget macht diese Abwägung ausdrücklich.
- **Das Objective mit den Menschen festlegen, die davon abhängen.** Das SLO ist eine ausgehandelte Vereinbarung zwischen Produkt, Betrieb und Kunden, keine von einem Team allein gewählte Zahl.
- **Konsequenzen vereinbaren, bevor das Budget aufgebraucht ist.** Eine in einer ruhigen Woche geschriebene Fehlerbudget-Richtlinie wird in einer stressigen befolgt. Eine während eines Ausfalls erfundene Richtlinie wird bestritten.
- **Auf Verbrauch alarmieren, nicht auf jedes Flackern.** Rufen Sie einen Menschen nur dann, wenn das Budget schnell genug verbraucht wird, um das Objective zu bedrohen, und leiten Sie langsameren Verbrauch in Tickets.
- **SLOs beschreiben Services, nie Menschen.** Das Budget gehört zu einem Service und seinem Team. Es ist nie eine Punktzahl für einen Ingenieur.

## Kennzahlendefinitionen

Die folgenden Kennzahlen beschreiben das SLO-System für einen Service. Die ersten vier sind der Kern der Praxis, und die letzten zwei beschreiben, wie gesund die Praxis selbst ist. Jede Uhr und Grenze ist in der Formelspalte genannt. „Gültige Ereignisse“ sind die Ereignisse, die nach den im SLO-Dokument vereinbarten Ausschlüssen zum SLI zählen, etwa sind Anfragen aus den eigenen Lasttests des Teams ausgeschlossen.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SLI-Erreichung | Der Anteil gültiger Ereignisse, die gut waren, für einen Indikator eines Services | gute Ereignisse / gültige Ereignisse, für das Fenster vom Beginn bis zum Ende des Berichtszeitraums; durch das SLO-Dokument ausgeschlossene Ereignisse (Lasttests, im Voraus angekündigte geplante Wartung, falls das SLO es so sagt) werden aus Zähler und Nenner entfernt | Prozent | Telemetrie von Load Balancer, Anwendung oder synthetischer Sonde; die Monitoring- oder Observability-Plattform | Service-Level-Management; Monitoring und Ereignismanagement | Definition of Done für Betreibbarkeit; Stakeholder-Review der Service-Gesundheit | Kontinuierlich, täglich und je Fenster berichtet |
| SLO-Einhaltung | Ob der SLI das Objective über das SLO-Fenster erfüllte und für wie viele jüngere Fenster | Fenster, in denen die SLI-Erreichung auf oder über dem Objective lag / ausgewertete Fenster, über die letzten 12 Monate; ein noch offenes Fenster ist ausgeschlossen | Prozent der Fenster | Historie der SLI-Erreichung | Service-Level-Management; kontinuierliche Verbesserung | Teamziel oder Arbeitsvereinbarung zur Zuverlässigkeit | Monatlich, mit vierteljährlichem Trend |
| Verbleibendes Fehlerbudget | Der Teil des Budgets, der im aktuellen Fenster noch nicht verbraucht ist | 1 - (bisherige schlechte Ereignisse / erlaubte schlechte Ereignisse für das ganze Fenster), wobei erlaubte schlechte Ereignisse = (1 - SLO) x erwartete gültige Ereignisse für das ganze Fenster; die Uhr startet am Fensterbeginn und stoppt am Fensterende | Prozent des Budgets | SLI-Erreichung und die Volumenprognose | Service-Level-Management; Risikomanagement | Release-Bereitschaftsprüfung; Eingabe für geplante Arbeit | Täglich, wöchentlich überprüft |
| Burn Rate | Die Geschwindigkeit, mit der das Budget verbraucht wird, relativ zur Rate gleichmäßigen Verbrauchs | (schlechte Ereignisse / gültige Ereignisse über einen Rückblickzeitraum) / (1 - SLO); der Rückblickzeitraum ist genannt, zum Beispiel 1 Stunde oder 6 Stunden | Verhältnis (1 bedeutet genau im Budget) | SLI-Telemetrie in feiner Zeitauflösung | Monitoring und Ereignismanagement; Incident-Management | Alarmregeln für die Bereitschaft; Swarming-Auslöser | Kontinuierlich, in Alarmregeln ausgewertet |
| Einhaltung der Budget-Richtlinie | Wie oft die vereinbarte Konsequenz angewandt wurde, wenn ein Auslöser in der Fehlerbudget-Richtlinie erreicht wurde | Auslöser im Zeitraum, bei denen die Richtlinienmaßnahme innerhalb der vereinbarten Zeit ergriffen wurde / im Zeitraum erreichte Auslöser; förmlich mit erfasstem Grund erlassene Auslöser werden gesondert gezählt, nicht entfernt | Prozent | Richtliniendokument, Entscheidungsprotokoll und Backlog-Historie | Service-Level-Management; Change-Befähigung | Arbeitsvereinbarung; Umsetzung aus der Retrospektive | Vierteljährlich |
| SLO-Abdeckung | Der Anteil kritischer Nutzerreisen oder Services im Umfang, die ein aktuelles SLO und einen funktionierenden SLI haben | Services oder Reisen im Umfang mit mindestens einem SLO, dessen SLI-Daten in den letzten 7 Tagen eintrafen / Services oder Reisen im Umfang; „im Umfang“ ist im Servicekatalog aufgeführt | Prozent | Servicekatalog, SLO-Register und Monitoring-Konfiguration | Management des Servicekatalogs; Service-Level-Management | Liste der Service-Verantwortung des Teams | Vierteljährlich |

Der Rückblick der Burn Rate und das SLO-Fenster sind Wahlentscheidungen. Ein gleitendes 28-Tage-Fenster deckt ganze Wochen ab. Nennen Sie die Wahl im SLO-Dokument und halten Sie sie stabil, sonst führt der Trend in die Irre.

## Empfehlungen

### Indikatoren nach dem wählen, was Nutzern wichtig ist

**1. Beginnen Sie mit kritischen Nutzerreisen.** Listen Sie die drei bis sechs Dinge auf, die ein Nutzer tun können muss, damit der Service es wert ist, genutzt zu werden, etwa anmelden, suchen, bezahlen und einen Kontoauszug herunterladen. Schreiben Sie jedes als Satz von der Seite des Nutzers. Wählen Sie dann den SLI, der zeigt, ob dieser Satz wahr war. So bleiben die SLOs wenige, und ein Katalog technischer Messuhren, den niemand liest, wird vermieden.

**2. Drücken Sie jeden SLI als gute Ereignisse über gültige Ereignisse aus.** Ein Verhältnis ist leicht zu erklären, leicht zu aggregieren und leicht in ein Budget zu verwandeln. Definieren Sie „gut“ mit einer Schwelle, die Nutzer akzeptieren würden, und definieren Sie „gültig“ so, dass Verkehr, den Sie vernünftigerweise nicht bedienen können, etwa wegen Missbrauchs blockierte Anfragen, dokumentiert ausgeschlossen wird. Schreiben Sie beide Definitionen ins SLO-Dokument, denn im Nenner verstecken sich die meisten Meinungsverschiedenheiten.

**3. Messen Sie so nah am Nutzer, wie praktikabel.** Eine serverseitige Erfolgsrate kann perfekt sein, während ein Netzwerk- oder Client-Problem den Service unbenutzbar macht. Messen Sie am Load Balancer oder Edge und ergänzen Sie eine synthetische Sonde oder clientseitige Messung für die wichtigsten Reisen. Jeder Messpunkt hat Kosten und einen blinden Fleck, halten Sie also fest, welchen jeder SLI nutzt (siehe Thema 1.5, Datenquellen und Instrumentierung).

**4. Nutzen Sie bei Latenz Perzentile, mit einer Schwelle.** „95 Prozent der Suchanfragen werden in unter 800 Millisekunden abgeschlossen“ ist ein SLI. „Durchschnittliche Latenz“ ist keiner, weil einige schnelle Anfragen viele langsame ausgleichen können. Nutzen Sie, wo es hilft, zwei Schwellen, etwa einen Median und ein 99. Perzentil, denn der langsame Schwanz prägt, wie sich der Service anfühlt (siehe Thema 5.4, Kennzahlen für Kapazität und Leistung).

### Objectives setzen, die Menschen verteidigen können

**5. Setzen Sie das erste SLO aus der aktuellen Leistung und dem Nutzerbedarf, und verschärfen Sie dann.** Messen Sie den SLI einige Wochen, fragen Sie Nutzer und Support-Mitarbeitende, welches Niveau sie bemerken, und setzen Sie ein Objective, das der Service heute mit etwas Spielraum erfüllen kann. Ein Objective weit über der aktuellen Leistung ist eine dauerhafte Verletzung, und die Menschen hören auf, es anzusehen. Ein Objective weit unter dem, was Nutzer bekommen, lässt Qualität unbemerkt verfallen. Überprüfen Sie es nach einem Quartal.

**6. Halten Sie das SLO strenger als das SLA und halten Sie sie getrennt.** Verspricht eine Kundenvereinbarung 99,5 Prozent, könnte das Objective des Teams 99,9 Prozent sein, sodass das Budget erschöpft ist, bevor die vertragliche Linie überschritten wird. Machen Sie SLO und SLA nicht zur selben Zahl und berichten Sie nicht das eine als das andere. Die Vereinbarung ist ein kommerzielles und rechtliches Dokument, das Objective eine technische Entscheidungsregel (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA).

**7. Berücksichtigen Sie Abhängigkeiten.** Ein Service kann nicht zuverlässiger sein als das, wovon er abhängt, es sei denn, er degradiert elegant. Listen Sie die wichtigsten Abhängigkeiten auf, einschließlich Lieferanten, und fragen Sie, was ihre tatsächliche Leistung für Ihr Objective bedeutet.

### Das Budget als Entscheidungswerkzeug betreiben

**8. Schreiben Sie eine Fehlerbudget-Richtlinie, bevor Sie sie brauchen.** Die Richtlinie sagt, was bei definierten Verbrauchsstufen geschieht. Eine einfache Fassung hat drei Schritte: Normalbetrieb, solange Budget bleibt; zusätzliche Prüfung riskanter Changes und Vorrang für Zuverlässigkeitsarbeit, wenn ein genannter Anteil verbraucht ist; und ein Stopp nicht wesentlicher Funktions-Releases, wenn es erschöpft ist, bis sich das Budget erholt. Benennen Sie, wer eine Ausnahme gewähren darf und wie sie erfasst wird. Leitende Personen aus Produkt und Betrieb sollten beide unterzeichnen, damit die Richtlinie für beide Seiten gleichermaßen gilt.

**9. Geben Sie das Budget mit Absicht aus.** Ein Budget, das nie angerührt wird, deutet darauf hin, dass das Objective zu streng oder das Team zu vorsichtig ist. Nutzen Sie überschüssiges Budget für Experimente, schnelleren Release-Takt, Canary-Rollouts und [Feature-Toggles](https://en.wikipedia.org/wiki/Feature_toggle), die Tests in der Produktion mit begrenzter Exposition erlauben, und nutzen Sie [Canary-Releases](https://en.wikipedia.org/wiki/Canary_release), um Probleme zu fangen, während nur ein kleiner Anteil der Nutzer betroffen ist. Behandeln Sie ein durchgängig unberührtes Budget als Anlass zu fragen, ob das Objective zu dem passt, was Nutzer brauchen (siehe Thema 4.5, Kennzahlen für Releases und Deployments).

**10. Alarmieren Sie auf mehrere Burn Rates.** Ein schneller Verbrauch, etwa eine Rate, die hoch genug ist, um binnen einer Stunde einen großen Anteil des Budgets zu verbrauchen, ruft einen Menschen. Ein langsamer Verbrauch, etwa eine mäßige Rate, die das Budget dennoch binnen Tagen erschöpfen würde, erzeugt ein Ticket für die Arbeitszeit. Zwei oder mehr Rückblickfenster zu nutzen fängt plötzliche Ausfälle und schleichende Lecks und verringert Pages für kurze Flackerer, die wenig Budget kosten. Das Kapitel des Site Reliability Workbook zum Alarmieren auf SLOs erklärt das Muster, und die Schwellen sollten für Ihren Service abgestimmt statt kopiert werden (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität).

**11. Verbinden Sie Incidents, Probleme und Lernen mit dem Budget.** Halten Sie nach einem Incident fest, wie viel Budget er verbrauchte, neben Dauer und Auswirkung. Nutzen Sie diese Zahl, um den Problemdatensatz und die Folgemaßnahmen zu priorisieren (siehe Thema 4.1, Kennzahlen für das Problemmanagement, und Thema 4.2, Kennzahlen für Postmortems und Lernen). Die Budgetkosten geben Major-Incident-Reviews auch eine gemeinsame Einheit, um sehr verschiedene Fehlschläge zu vergleichen (siehe Thema 3.4, Kennzahlen für Major Incidents).

### Die Praxis ehrlich und lebendig halten

**12. Überprüfen Sie SLOs jedes Quartal gegen die Wirklichkeit.** Vergleichen Sie das SLO mit Support-Kontakten, Beschwerden und Zufriedenheitsergebnissen. Sind Nutzer unzufrieden, während das SLO grün ist, ist der SLI falsch oder das Ziel zu locker. Ist das SLO rot und niemand beschwert sich, ist das Ziel womöglich zu streng. Halten Sie jede Änderung und den Grund fest und zeigen Sie die Änderung im Trenddiagramm (siehe Thema 6.2, Experience Level Agreements).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| SLI-Erreichung | „Gültige“ Ereignisse verengen, bis die Fehler herausfallen, etwa wiederholte Anfragen oder ganze Fehlerklassen ausschließen; nur die gesündeste Komponente messen; nur von einem günstigen Standort sondieren | SLI-Definition und Ausschlüsse mit Änderungsprotokoll im SLO-Dokument veröffentlichen; den SLI mit Support-Kontakten und Nutzerbeschwerden vergleichen; ein regelmäßiges Review ausgeschlossener Ereignisse und ihres Volumens |
| SLO-Einhaltung | Das Objective so niedrig setzen, dass es immer besteht; die Fensterlänge nach einem schlechten Zeitraum ändern; eine Verletzung als Wartungszeitraum umdefinieren | Objective mit Nutzerbeteiligung gesetzt und nach Plan überprüft; Fenster im Dokument festgelegt; Zahl der Ausschlüsse und ungeplanten Fensteränderungen neben der Einhaltung berichtet |
| Verbleibendes Fehlerbudget | Schlechte Ereignisse als ausgeschlossen umklassifizieren; das erwartete Volumen aufblähen, damit die erlaubte Zahl schlechter Ereignisse größer aussieht; das Fenster früh zurücksetzen | Erlaubte schlechte Ereignisse aus dem tatsächlichen Volumen am Fensterende berechnet; ausgeschlossenes Ereignisvolumen neben dem Budget gezeigt; Fensterdaten im Voraus festgelegt |
| Burn Rate | Alarmschwellen so abstimmen, dass Verbrauch nie auslöst; einen so langen Rückblick nutzen, dass sich schnelle Verbräuche herausmitteln | Test der Alarmabdeckung anhand vergangener Incidents („hätte diese Regel gerufen?“); Anteil handlungsrelevanter Alarme und Zahl verpasster Erkennungen (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität) |
| Einhaltung der Budget-Richtlinie | Routinemäßig Ausnahmen gewähren; eine Richtlinie mit nie erreichbaren Auslösern schreiben; ein Alibi-Zuverlässigkeitsticket als Richtlinienmaßnahme zählen | Ausnahmen gesondert gezählt und überprüft; Anteil der Ausnahmen im Zeitraum; abgeschlossene Zuverlässigkeitsarbeit (siehe Thema 4.1, Kennzahlen für das Problemmanagement) |
| SLO-Abdeckung | Jedem Service ein triviales SLO hinzufügen, um den Prozentsatz zu heben; eine Reise als abgedeckt zählen, wenn keine Daten fließen | Prüfung der Aktualität der SLI-Daten (Daten in den letzten 7 Tagen eingetroffen); Review, ob das SLO eine kritische Reise abdeckt, nicht einen sekundären Endpunkt |

Ein gesunder Befund zeigt einen SLI, der dem folgt, was Nutzer berichten, ein Objective, das manchmal verfehlt und manchmal bequem erfüllt wird, und ein Budget, das mit Absicht ausgegeben wird. Die Richtlinie wird angewandt, wenn ihr Auslöser erreicht ist, Ausnahmen sind selten und erfasst, und jede Änderung einer Definition ist im Diagramm sichtbar. Ein Service, der stets bei 100 Prozent verbleibendem Budget liegt, oder einer, der stets verletzt ist, verdient ein Gespräch über das Objective, nicht Lob oder Tadel. Denken Sie daran, dass jede einzelne Zahl ein Anlass für eine Frage ist (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| SLIs für Nutzerreisen | Entsprechen dem, was Nutzer spüren; wenige; leicht Nicht-Ingenieuren zu erklären | Brauchen Aufwand zur Instrumentierung von Ende zu Ende; können interne Fehler verpassen, die Nutzer noch nicht erreicht haben |
| Komponenten- oder Ressourcen-SLIs (CPU, Speicher, Warteschlangentiefe) | Billig zu sammeln; nützlich für Diagnose und Kapazität | Schlechte Stellvertreter für das Nutzererlebnis; erzeugen viele Alarme, die nicht zählen |
| Gleitendes Fenster | Glatt; keine Klippe am Monatsende; stets aktuell | Schwerer Führungskräften zu erklären als ein Kalendermonat; ein schlechter Tag hängt dem ganzen Fenster nach |
| Alarmierung auf Burn Rate | Ruft, wenn das Objective wirklich gefährdet ist; weniger Fehlalarme | Komplexer zu konfigurieren und zu testen; Schwellen brauchen Abstimmung je Service |

Wählen Sie wenige SLIs, setzen Sie sie mit Nutzern fest und lassen Sie das Budget das Tempo der Veränderung bestimmen. Die richtige Strenge ist das lockerste Objective, das Nutzer noch zufrieden hält, denn jede zusätzliche Neun kostet mehr als die vorige.

## Fragen für die Diskussion im Team

**1. Was muss ein Nutzer dieses Services tun können, und woher wüssten wir, wenn er es nicht könnte?**
Bitten Sie jede Person, die drei wichtigsten Dinge aufzuschreiben, die ein Nutzer mit dem Service tut, ohne auf ein Dashboard zu schauen. Vergleichen Sie die Listen und notieren Sie die Unterschiede zwischen Produkt, Betrieb und Support. Fragen Sie dann, welche dieser Reisen derzeit einen SLI hat. Die Moderation sollte nach wichtigen Reisen ohne Messung und nach Messungen suchen, die keine Reise beschreiben.

**2. Wenn unser SLO 99,9 Prozent betrüge und wir es erfüllten, wären Nutzer zufrieden, und woher wissen wir das?**
Legen Sie das aktuelle SLO neben das letzte Quartal an Support-Kontakten, Beschwerden und Zufriedenheitsergebnissen. Fragen Sie, ob sie übereinstimmen. Ist das SLO grün und Nutzer sind unzufrieden, braucht der SLI oder das Ziel Arbeit. Sind Nutzer zufrieden und das SLO ist rot, ist das Ziel womöglich strenger, als irgendjemand es braucht. Einigen Sie sich auf eine Maßnahme, die Objective und Erlebnis zusammenbringt.

**3. Was würden wir tatsächlich anders tun, wenn das Fehlerbudget aufgebraucht wäre?**
Lesen Sie die aktuelle Fehlerbudget-Richtlinie laut vor oder entwerfen Sie gemeinsam eine, falls keine existiert. Fragen Sie, wer was stoppen würde und wer die Befugnis hat, eine Ausnahme zu gewähren. Die Moderation sollte auf konkrete Maßnahmen drängen, etwa nicht wesentliche Releases pausieren und benannte Personen zur Zuverlässigkeitsarbeit verlagern, statt auf allgemeine Absichten. Eine Richtlinie, von der niemand glaubt, dass sie befolgt wird, ist schlimmer als keine.

**4. Wann sind wir zuletzt ein Risiko eingegangen, weil wir Budget übrig hatten?**
Besprechen Sie, ob das Team sein Budget nutzt oder nur bewacht. Schauen Sie auf das letzte Quartal: Gab es einen Zeitraum, in dem das Budget fast unberührt war, während Releases langsam waren? Fragen Sie, was das Team versucht hätte, wenn es gewusst hätte, dass es sicher war. Diese Frage bringt Übervorsicht ans Licht, und die Antwort weist oft auf ein Canary-Release, einen Toggle oder eine schnellere Pipeline, die dem Team erlauben würde, sein Budget gut zu nutzen.

**5. Welche unserer Alarme hätten für unseren letzten schlimmen Incident rechtzeitig ausgelöst, und welche hätten umsonst ausgelöst?**
Nehmen Sie den letzten bedeutenden Incident und spielen Sie die Alarmhistorie dagegen ab. Zählen Sie die eingetroffenen Pages, wie lange nach Beginn der Auswirkung sie kamen und wie viele Pages für Ereignisse kamen, die fast kein Budget kosteten. Besprechen Sie, ob Burn-Rate-Alarme es besser gemacht hätten. Ziel ist eine kurze Liste von Alarmänderungen, jede mit Eigner, und keine Schuldzuweisung dazu, wer in Bereitschaft war.

**6. Wer besitzt jedes SLO, und wann haben wir zuletzt eines mit Absicht geändert?**
Listen Sie die SLOs auf und schreiben Sie den Eigner neben jedes, als Team oder Rolle. Fragen Sie, wann jedes zuletzt überprüft wurde und was sich änderte. Ein SLO, das ein Jahr lang niemand angefasst hat, ist ein Zeichen, dass es keine Entscheidungen mehr informiert. Einigen Sie sich auf ein Review-Datum für jedes und darauf, wer das Recht hat, ein SLO einzustellen, das nicht mehr nützlich ist.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams gewinnen eine klare Regel dafür, wie schnell sie vorgehen. Bleibt Budget, können sie öfter releasen und kühnere Changes versuchen. Ist es niedrig, legen sie Zuverlässigkeitsarbeit ohne lange Verhandlung in den Backlog. Sie sollten bei der Wahl der Indikatoren helfen, weil sie wissen, welche Reisen zählen, und sie sollten neue Funktionen von Anfang an mit dem SLI im Blick instrumentieren (siehe Thema 2.8, DORA-Kennzahlen). Das Budget ist eine Teamressource, mit der man plant, nie eine Zahl, die man versteckt.

### Service- und Betriebsteams

Betriebsteams nutzen SLOs, um zu entscheiden, was einen Page verdient und was bis zum Morgen warten kann. Alarmierung auf Burn Rate verringert Rauschen und bindet Bereitschaftsarbeit an das, was Nutzer spüren (siehe Thema 5.7, Kennzahlen für Toil und Bereitschaftsdienst). Sie halten die SLI-Definitionen ehrlich, pflegen die Telemetrie dahinter und erfassen Budgetkosten in Incident- und Problemdatensätzen.

### Führung und Governance

Führungskräfte sollten drei Fragen stellen: Was ist das Objective, wie viel Budget bleibt, und was tun wir, wenn es aufgebraucht ist? Sie unterzeichnen die Fehlerbudget-Richtlinie und stützen das Team, wenn die Richtlinie sagt, langsamer zu werden. Sie vermeiden es, die SLO-Einhaltung zu einer Bonuskennzahl zu machen, was zum Verengen von Definitionen und zum Setzen weicher Ziele einlädt.

### Kunden und Nutzer

Kunden profitieren, wenn das Objective widerspiegelt, was sie brauchen, und wenn sie sehen können, wie der Service dagegen abschneidet. Sie sollten bei der Festlegung des Objectives befragt werden, denn ihre Toleranz für Langsamkeit oder Ausfallzeit variiert nach Aufgabe und Tageszeit. Erlebnismessgrößen wie Zufriedenheit und Aufwand prüfen, ob das SLO erfasst, was sie spüren (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler hat ein Checkout-Team, ein Plattformteam und einen Service Desk. Der Checkout-Service ist geschäftskritisch. Alle Zahlen in diesem Beispiel sind illustrativ.

Das Team definiert einen SLI für die Reise „eine Bestellung bezahlen“: den Anteil gültiger Zahlungsanfragen, die binnen 2 Sekunden einen Erfolg zurückgeben, gemessen am Load Balancer. Gültige Anfragen schließen die eigenen Lasttests des Teams und Anfragen aus, die der Betrugsservice absichtlich ablehnt. Das SLO beträgt 99,9 Prozent über gleitende 28 Tage. Das Fenster trägt erwartete 12.000.000 gültige Anfragen, das Budget beträgt also 12.000 schlechte Anfragen (0,1 Prozent). Die Fehlerbudget-Richtlinie, vom Leiter Produkt und vom Leiter Plattform unterzeichnet, hat drei Stufen: bei 50 Prozent verbrauchtem Budget brauchen riskante Changes einen zweiten Reviewer und ein Canary-Rollout; bei 75 Prozent hat Zuverlässigkeitsarbeit im nächsten Planungsgespräch Vorrang; bei 100 Prozent pausieren nicht wesentliche Funktions-Releases, bis sich das Budget erholt.

Am Tag 10 des Fensters sieht das Team 7.800 schlechte Anfragen bei etwa 4.285.714 bisher erwarteten, was eine SLI-Erreichung von etwa 99,82 Prozent ergibt, 65 Prozent verbrauchtes Budget und ein Fenster, das erst zu 36 Prozent verstrichen ist. Die Burn Rate über den Zeitraum beträgt etwa 1,8, bei diesem Tempo ist das Budget also um Tag 15 weg. Ein schlechtes Deployment machte 5.000 der Fehlschläge aus. Der Incident-Datensatz zeigt, dass der Fehlschlag 22 Minuten dauerte, das Major-Incident-Review eine fehlende Prüfung in der Pipeline identifiziert und die Budgetkosten des Incidents im Problemdatensatz erfasst sind (siehe Thema 4.1, Kennzahlen für das Problemmanagement).

Das Team folgt der Richtlinie. Die Maßnahme der zweiten Stufe greift sofort, riskante Changes brauchen also ein Canary-Rollout, und das Planungsmeeting schiebt die Pipeline-Prüfung an die Spitze der Arbeitswarteschlange. Der Product Owner akzeptiert eine Pause bei einer nicht dringenden Aktionsfunktion. Bis Tag 28 sind 94 Prozent des Budgets verbraucht, und das Team beendet das Fenster innerhalb des Objectives.

Das Manipulationsrisiko zeigt sich im Review. Ein anderes Team, das den Suchservice des Händlers betreibt, berichtete 99,95 Prozent für das Quartal, während der Service Desk einen Anstieg von „Suche funktioniert nicht“-Kontakten protokollierte. Bei der Untersuchung fand das Plattformteam, dass das Suchteam „gültig“ so umdefiniert hatte, dass Anfragen ausgeschlossen wurden, die binnen 5 Sekunden wiederholt wurden, was viele echte Fehler entfernte. Das Review stellte die ursprüngliche Definition wieder her, stellte das Quartal neu dar und ergänzte zwei Leitplanken: Jede Änderung einer Definition wird im SLO-Dokument mit Grund festgehalten, und die SLI-Erreichung wird jeden Monat mit Support-Kontakten verglichen. Niemand hatte gelogen, die Änderung war gemacht worden, um Rauschen zu verringern, also war die Korrektur eine klarere Definition, keine Rüge.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Ein Fehlerbudget macht Zuverlässigkeit zu einer gemeinsamen Entscheidung mit Produkt-Stakeholdern und passt zur kontinuierlichen Auslieferung, indem es zeigt, wie viel Risiko das Team ausgeben kann. Überprüfen Sie die Objectives in regelmäßigem Rhythmus. Zu beachten ist, dass ein SLO, das niemand mit Nutzern vereinbart hat, eine Vermutung ist.

### KI

KI-Funktionen brauchen eigene Indikatoren, etwa Korrektheit und Latenz, nicht nur Verfügbarkeit, und das Objective sollte sagen, wie eine falsche Antwort zählt. Koppeln Sie die Verfügbarkeit von KI mit einem durch Stichproben gemessenen Qualitätsindikator. Zu beachten ist, dass ein Service, der schnell mit einer falschen Antwort antwortet, ein Verfügbarkeits-SLO erfüllen und dabei Nutzer enttäuschen kann.

### Automatisierung

Berechnen Sie Indikatoren und Burn Rate automatisch aus Telemetrie und alarmieren Sie auf Burn Rate, nicht auf jedes Flackern. Messen Sie die Alarmierung selbst an verpassten und falschen Alarmen. Zu beachten ist, dass automatische Budget-Freezes nützliche Arbeit lähmen können; behalten Sie also eine menschliche Entscheidung in der Richtlinie.

### Analytik

Wählen Sie Indikatoren, die Nutzer spüren, und zeigen Sie das Fenster und die Zahl der Ereignisse hinter jedem. Die Entscheidung, die dies untermauert, ist, wann Change zu verlangsamen oder in Zuverlässigkeit zu investieren ist. Zu beachten ist, dass ein kurzes Fenster ein schwankendes Budget ergibt; nennen Sie also das Fenster.

## Branchenperspektive

**Startup.** Beginnen Sie mit einem SLO für die wichtigste Reise, am Edge gemessen, mit einer einfachen Richtlinie, die auf eine Seite passt. Bauen Sie keine Plattform für Dutzende SLOs. Das Budget hilft einem kleinen Team, weniger darüber zu streiten, ob man freitags ausliefert.

**Kleinunternehmen.** Ein kleines Unternehmen verlässt sich oft auf gehostete Werkzeuge und Lieferanten, sodass der SLI aus den Statusdaten eines Lieferanten oder einer einfachen externen Sonde kommen kann. Lesen Sie die Service Levels des Lieferanten schriftlich und prüfen Sie sie gegen Ihren eigenen Bedarf.

**Großunternehmen.** Viele Services, Teams und Lieferanten erhöhen den Einsatz für Konsistenz. Stellen Sie eine gemeinsame Vorlage für SLO-Dokumente bereit, ein gemeinsames Register und einen Standardweg, Erreichung und Budget zu berechnen, damit Führungskräfte vergleichen und aggregieren können, ohne über Definitionen zu streiten. Lassen Sie das SLO beim Service-Team und das Register zentral gepflegt.

**Behörden und öffentlicher Sektor.** Services müssen oft gesetzliche oder veröffentlichte Ziele erfüllen, und ein Fehlschlag kann öffentlich berichtet werden. Halten Sie die vertragliche oder gesetzliche Verpflichtung vom internen Objective getrennt und sorgen Sie dafür, dass das interne SLO strenger ist. Dokumentieren Sie SLI-Definition, Ausschlüsse und Datenherkunft für die Prüfung und planen Sie für Barrierefreiheit und für Nutzer, die keinen alternativen Anbieter wählen können (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Das Motiv sind weniger Streit und bessere Entscheidungen über Zuverlässigkeit. Ohne Objective konkurriert Zuverlässigkeitsarbeit mit Funktionen nach der Stärke dessen, der am lautesten argumentiert. Mit Objective und Budget ist die Abwägung sichtbar und im Voraus vereinbart, und Nutzer bekommen einen Service, der so zuverlässig ist, wie sie ihn brauchen, ohne dass das Team für Zuverlässigkeit darüber hinaus zahlt.

Die Kosten haben vier Teile. Der erste ist der Entwurf: Workshops, um Reisen, Indikatoren und Objectives zu wählen und die Richtlinie zu schreiben. Der zweite ist die Instrumentierung: Telemetrie an der richtigen Stelle, Sonden und die Pipeline, die Ereignisse in Erreichung und Budget verwandelt (siehe Thema 1.5, Datenquellen und Instrumentierung). Der dritte ist der Betrieb: Alarmregeln, ein Dashboard, ein vierteljährliches Review und die Zeit, Definitionen aktuell zu halten. Der vierte sind die Opportunitätskosten, wenn die Richtlinie Funktionsarbeit pausiert, die Kosten dafür, die Vereinbarung einzuhalten, und der Grund, sie zu vereinbaren, bevor der Druck kommt.

Der Ertrag zeigt sich in Mustern, die ein Team selbst verfolgen kann: weniger Pages, die kein Handeln erforderten, kürzere Debatten, ob zu releasen ist, Zuverlässigkeitsarbeit, die geplant wird, bevor das Budget erschöpft ist, statt nach einem Major Incident, und weniger Überraschungen für Kunden. Beschreiben Sie den Nutzen, indem Sie die eigenen Zahlen des Teams vor und nach vergleichen, etwa Pages je Rotation und den Budgetanteil, den der größte Incident verbrauchte.

## Anti-Muster und Fallstricke

- **Zu viele SLOs.** Dutzende Objectives verwässern die Aufmerksamkeit, und niemand kann sagen, welches zählt. Beginnen Sie mit den kritischen Nutzerreisen und stellen Sie den Rest ein.
- **SLO gleich SLA.** Eine Zahl als beides zu berichten beseitigt die Sicherheitsmarge und mischt eine technische Regel mit einem kommerziellen Versprechen. Halten Sie das Objective strenger als die Vereinbarung.
- **Eine Richtlinie, die nie durchgesetzt wird.** Ist das Budget erschöpft und nichts ändert sich, verliert die Praxis ihre Glaubwürdigkeit. Lassen Sie Führungskräfte die Richtlinie unterzeichnen und erfassen Sie jede Ausnahme mit ihrem Grund.
- **Das Budget als Punktetafel für Menschen nutzen.** Ingenieure oder Bereitschaftspersonal nach verbrauchtem Budget zu ordnen lässt Menschen Incidents verbergen und Definitionen verengen. Ordnen Sie das Budget dem Service zu und besprechen Sie Ursachen auf Systemebene (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).
- **Bei jedem Einbruch alarmieren.** Auf rohe Symptome zu rufen erzeugt Alarmmüdigkeit und lehrt Menschen, Pages zu ignorieren. Rufen Sie auf Burn Rate und leiten Sie langsamen Verbrauch in Tickets.
- **Setzen und vergessen.** Ein SLO, das niemand überprüft, driftet von dem ab, was Nutzer brauchen. Planen Sie ein vierteljährliches Review und halten Sie fest, was sich änderte und warum.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Indikatoren und Objectives | Zuverlässigkeit in Worten beschrieben; Serververfügbarkeit berichtet | Einige Teams definieren SLIs; Ziele variieren und werden selten überprüft | Kritische Nutzerreisen haben dokumentierte SLIs und SLOs in einer gemeinsamen Vorlage | SLOs im Trend, gegen Nutzerfeedback geprüft und mit Belegen verschärft oder gelockert | SLOs mit Kunden und Lieferanten vereinbart und auf abhängige Services und Verträge abgestimmt |
| Fehlerbudget und Richtlinie | Kein Budget; Zuverlässigkeit gegen Funktionen per Streit entschieden | Ein Budget für einige Services berechnet; keine vereinbarten Konsequenzen | Eine schriftliche Richtlinie, von Produkt und Betrieb unterzeichnet, mit definierten Auslösern | Einhaltung der Richtlinie gemessen, Ausnahmen überprüft, Budget informiert die Release-Planung | Budgetentscheidungen über Teams mit gemeinsamen Abhängigkeiten koordiniert; Richtlinie überarbeitet, wenn sich Bedingungen ändern |
| Alarmierung und Reaktion | Schwellenalarme auf rohen Ressourcen; viele Pages | Einige Burn-Rate-Alarme; Schwellen aus Beispielen kopiert | Burn-Rate-Alarme mit mehreren Fenstern für Schlüssel-SLOs, mit Tickets für langsamen Verbrauch | Alarmqualität gemessen und anhand vergangener Incidents abgestimmt | Alarmierung über Servicketten abgestimmt, Verbesserung durch gemeinsame Reviews getrieben |

## Checkliste

- [ ] Die kritischen Nutzerreisen des Services sind aufgelistet, jede von der Seite des Nutzers geschrieben.
- [ ] Jeder SLI ist als gute Ereignisse über gültige Ereignisse definiert, mit aufgeschriebenen Ausschlüssen.
- [ ] Latenz-SLIs nutzen Perzentile und eine genannte Schwelle, keine Durchschnitte.
- [ ] Jedes SLO nennt sein Ziel, sein Fenster und wo der SLI gemessen wird.
- [ ] Das SLO ist strenger als jedes SLA, und die beiden werden getrennt berichtet.
- [ ] Eine Fehlerbudget-Richtlinie existiert, ist von Führungskräften aus Produkt und Betrieb unterzeichnet und nennt, wer Ausnahmen gewähren darf.
- [ ] Burn-Rate-Alarme nutzen mindestens zwei Rückblickzeiträume, und langsamer Verbrauch erzeugt Tickets statt Pages.
- [ ] Jeder Incident-Datensatz zeigt das Budget, das er verbrauchte.
- [ ] Die SLI-Erreichung wird jeden Monat mit Support-Kontakten und Zufriedenheitsergebnissen verglichen.
- [ ] Jedes SLO hat einen Eigner (ein Team oder eine Rolle) und ein Review-Datum, und Änderungen werden mit Gründen protokolliert.
- [ ] Kein SLO-Ergebnis wird genutzt, um Einzelpersonen zu ordnen oder zu belohnen.

## KI-Prompts

**Kandidaten-SLIs aus Nutzerreisen entwerfen.**

```text
I run [service name], used by [type of users] to do [list of critical user
journeys]. We can measure at [list of measurement points, for example load
balancer, application logs, synthetic probe]. For each journey, propose one or two
candidate SLIs written as good events over valid events, with a suggested
definition of "good," "valid," and exclusions. Note the strengths and blind spots
of each measurement point. Do not invent target values or benchmarks; ask me what
users tolerate. List your assumptions.
```

**Eine Fehlerbudget-Richtlinie entwerfen.**

```text
Help me draft an error budget policy for [service name] with an SLO of [target]
over [window]. Stakeholders are [product role] and [operations role]. Propose
trigger levels, the action at each, who may grant an exception and how it is
recorded, and how the policy is reviewed. Keep it to one page and flag decisions
that need a human sponsor. Do not invent thresholds from other organizations;
present options and trade-offs. List your assumptions.
```

**Ein SLO auf Manipulationsrisiko prüfen.**

```text
Here is our SLO document for [service name]: [paste SLI definition, exclusions,
target, window, and change log]. Identify ways the SLI could be narrowed, the
window or target changed, or events excluded in a way that would make results look
better than the user experience. For each risk, suggest a guardrail metric or
practice. Do not assume intent. List your assumptions and the questions I should
answer.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die verwandten Themen wie Verfügbarkeit, Alarmqualität und Major Incidents zu finden und die Leitplanke, die neben jede SLO-Kennzahl gehört.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass Änderungen an diesem Thema jede Kennzahl der Manipulationstabelle und jeden Querverweis mit Titel erhalten.

## Wichtigste Erkenntnisse

- Wählen Sie wenige SLIs aus dem, was Nutzer tun, und drücken Sie jeden als gute Ereignisse über gültige Ereignisse aus.
- Ein SLO unter 100 Prozent ist eine Entscheidung über Risiko, und das Fehlerbudget ist der Raum, den diese Entscheidung für Veränderung lässt.
- Schreiben Sie die Fehlerbudget-Richtlinie im Voraus, unterzeichnen Sie sie auf Führungsebene und erfassen Sie jede Ausnahme.
- Alarmieren Sie auf Burn Rate mit mehr als einem Rückblickfenster, damit Pages echtes Risiko für das Objective widerspiegeln.
- Schützen Sie die Definitionen: Protokollieren Sie jede Änderung und vergleichen Sie SLI-Ergebnisse mit dem, was Nutzer berichten.
- Ordnen Sie Budget Services und Teams zu, nie Einzelpersonen, und überprüfen Sie jedes SLO mindestens vierteljährlich.

## Quellen und weiterführende Literatur

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Jones, C., Wilkes, J., Murphy, N., and Smith, C., "Service Level Objectives," chapter 4 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/service-level-objectives/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. "Implementing SLOs," chapter 2 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/implementing-slos/
5. "Alerting on SLOs," chapter 5 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/alerting-on-slos/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
9. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
10. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Availability](https://en.wikipedia.org/wiki/Availability).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
