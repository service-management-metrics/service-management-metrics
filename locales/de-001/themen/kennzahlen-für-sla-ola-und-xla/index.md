# Kennzahlen für SLA, OLA und XLA

**Ein Service Level Agreement sagt einem Kunden, was versprochen wurde, ein Operational Level Agreement sagt internen Teams, was sie einander schulden, und ein Experience Level Agreement sagt Ihnen, ob es den Menschen, die den Service nutzen, tatsächlich besser geht. Sie brauchen also alle drei und müssen sie ehrlich berichten statt als Wand aus Grün.**

## Überblick und Motivation

Ein [Service Level Agreement (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) ist eine dokumentierte Zusage zwischen einem Service-Anbieter und einem Kunden darüber, was der Service liefern wird: seine Betriebszeiten, seine Verfügbarkeit, wie schnell der Anbieter auf Incidents reagiert und sie löst und wie schnell er Anfragen erfüllt. In ITIL 4 (der Ausgabe 2019 des Rahmenwerks, veröffentlicht vom Eigner, heute AXELOS unter PeopleCert) definiert die Praktik des [Service-Level-Managements](https://en.wikipedia.org/wiki/ITIL) diese Ziele, überwacht sie und berichtet darüber. Ein [Operational Level Agreement (OLA)](https://en.wikipedia.org/wiki/Operational-level_agreement) ist das interne Gegenstück: eine Vereinbarung zwischen Teams derselben Organisation, zum Beispiel zwischen dem Service Desk und dem Netzwerkteam, darüber, was jedes tut und wie schnell, damit das kundenseitige SLA eingehalten werden kann. Ein Underpinning Contract spielt dieselbe Rolle für einen externen Lieferanten (siehe Thema 8.4, Kennzahlen für Lieferanten und Verträge).

Ein Experience Level Agreement (XLA) ist das neueste der drei. Es hält ein vereinbartes Ergebnis darin fest, wie Menschen den Service erleben, etwa wie leicht sie ihre Arbeit erledigen konnten, wie sie sich bei der Interaktion fühlten und ob der Service ihnen half, ihr Ziel zu erreichen. Die Idee ist in der Service-Management-Praxis gewachsen, weil ein SLA erfüllt sein kann, während Nutzer unzufrieden sind. Dieses Thema besitzt die drei Vereinbarungen und ihre Berichterstattung. Die Tiefe dazu, wie Erlebnis gemessen wird, gehört zu Thema 6.2, Experience Level Agreements, und die technischen Gegenstücke der Ziele gehören zu Thema 5.2, SLIs, SLOs und Fehlerbudgets.

Drei agile und Zuverlässigkeitskonzepte stehen neben diesen Vereinbarungen. Ein [Service Level Indicator (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) ist eine gemessene Eigenschaft eines Services, etwa der Anteil erfolgreich bedienter Anfragen. Ein [Service Level Objective (SLO)](https://en.wikipedia.org/wiki/Service_level_objective) ist das interne Ziel für einen SLI, meist strenger als alles, was einem Kunden versprochen wird. Die Praxis des [Site Reliability Engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) behandelt das SLO und das daraus folgende Fehlerbudget als gemeinsames Entscheidungswerkzeug für Produkt und Betrieb. Das SLA ist der Vertrag, das SLO das technische Ziel, der SLI die Messung. Die drei auseinanderzuhalten vermeidet ein verbreitetes Durcheinander, bei dem eine vertragliche Strafklausel genutzt wird, um tägliche technische Entscheidungen zu steuern.

Die Familie hat einen bekannten Fehler namens Watermelon-Reporting: ein Bericht, der außen grün und innen rot ist. Jede SLA-Zeile erscheint als erfüllt, doch Kunden sind frustriert, weil die Messgrößen danach gewählt wurden, was der Anbieter verlässlich treffen konnte, statt danach, was dem Kunden wichtig ist, oder weil Durchschnitte den schlechten Schwanz verbergen, oder weil die Uhr durch das Schlimmste des Wartens angehalten wurde. Das Gegenmittel ist teils technisch (Perzentile, ehrliche Uhren, nutzerzentrierte Indikatoren) und teils sozial (Vereinbarungen, die als Gespräch ausgehandelt, in einem Rhythmus überprüft und als Frage an den Service gelesen werden, nicht als Urteil über ein Team). Die weitere Warnung vor Messgrößen, die zu Zielen werden, steht in Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen.

Agile Teams denken in Objectives und Budgets, ITIL-Service-Level-Manager in Vereinbarungen und Reviews. Die Sichten passen zusammen: Die Vereinbarung nennt das Ergebnis, die Objectives und Indikatoren sind der Weg, wie das Team das Versprechen hält, und die Erlebnismessgrößen bestätigen, dass es zählte.

Ein letzter Begriff: Ein [Perzentil](https://en.wikipedia.org/wiki/Percentile) ist der Wert, unter dem ein genannter Anteil der Beobachtungen liegt. Das 85. Perzentil der Lösungszeit ist die Zeit, innerhalb der 85 Prozent der Tickets gelöst wurden. Die meisten SLA-Ziele werden als Perzentil oder Anteil geschrieben, daher sind die Art, wie das Perzentil berechnet wird, und das, was darin enthalten ist, der Kern des Themas (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

## Leitprinzipien

- **Ergebnisse mit dem Kunden vereinbaren, dann messen.** Eine Vereinbarung ist eine ausgehandelte Aussage darüber, was der Kunde braucht und der Anbieter tragen kann, in den Worten des Kunden geschrieben und gemeinsam überprüft.
- **Verteilungen und Anteile berichten, nie einen einzelnen Durchschnitt.** Eine durchschnittliche Lösungszeit, die das Ziel erfüllt, kann auf einem langen Schwanz sehr verspäteter Arbeit sitzen. Nennen Sie das Perzentil, die Grundgesamtheit und die Anzahl.
- **Die Uhr ehrlich machen.** Jedes Ziel hat ein Startereignis, ein Stoppereignis und eine Liste von Pausenbedingungen. Veröffentlichen Sie die Uhrregeln und berichten Sie, wie oft jede Pause genutzt wird.
- **Die Vereinbarungen schichten.** Das SLA baut auf OLAs und Lieferantenverträgen, und die im Team gesetzten Objectives sollten enger sein als die Versprechen nach außen. Eine Lücke in irgendeiner Schicht zeigt sich oben als Verletzung.
- **Jede betriebliche Kennzahl mit einer Erlebniskennzahl koppeln.** Ein erreichtes Ziel bei schlechtem Erlebnis, oder umgekehrt, ist das nützlichste Signal im Bericht.
- **Beinahe-Verfehlungen zählen.** Arbeit, die knapp innerhalb der Grenze fertig wurde, sagt mehr über Risiko als Arbeit, die weit innerhalb fertig wurde.
- **Über Teams und Services berichten, nie über Menschen.** Vereinbarungen beschreiben, wozu sich ein Service oder ein Team verpflichtet. Sie sind kein Weg, Einzelpersonen zu ordnen.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SLA-Erreichungsrate | Anteil der gemessenen Elemente (Incidents, Anfragen oder Zeitfenster), die im Zeitraum ein genanntes SLA-Ziel erfüllten | Elemente, die das Ziel erfüllten, geteilt durch gemessene Elemente. Die Uhr startet zum in der Vereinbarung definierten protokollierten Zeitpunkt (zum Beispiel Ticketanlage) und stoppt beim definierten Stoppereignis (zum Beispiel bestätigte Wiederherstellung). Ausgeschlossen: als Duplikate stornierte Elemente und Zeit innerhalb vereinbarter Ausschlüsse wie geplanter Wartung. Die Anzahl neben dem Anteil berichten | Prozent, mit n | Zeitstempel des ITSM-Werkzeugs; Monitoring-Daten für zeitbasierte Ziele | Service-Level-Management; Incident-Management; Management von Serviceanfragen | Erreichung des Service Level Objective über ein gleitendes Fenster (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets) | Monatlich, mit wöchentlicher interner Sicht |
| Anteil der Beinahe-Verfehlungen | Anteil der Elemente, die das Ziel erfüllten, aber im letzten Zehntel der erlaubten Zeit fertig wurden | Elemente, die bei 90 Prozent oder mehr der Zielzeit fertig wurden und noch innerhalb lagen, geteilt durch Elemente, die das Ziel erfüllten. Dieselbe Uhr wie beim SLA. Für Zeitfenster nicht zutreffend (gilt nur für Zeit-bis-Ziel-Messgrößen) | Prozent | Zeitstempel des ITSM-Werkzeugs | Service-Level-Management | Anteil der Arbeit nahe der Service-Level-Erwartung in einem Flussdiagramm (siehe Thema 2.1, Flussmaße) | Monatlich |
| Anteil der Uhrpausen | Anteil der gesamten verstrichenen Ticketzeit, die in Zuständen verbracht wird, die die SLA-Uhr anhalten | Gesamte Pausenzeit geteilt durch gesamte verstrichene Zeit von Start bis Stopp, für Elemente im Umfang. Schließt Elemente aus, bei denen kein Pausenzustand genutzt wurde. Nach Pausenzustand berichten | Prozent | Statushistorie des ITSM-Werkzeugs | Service-Level-Management; Incident-Management | Blockierte Zeit und Wartezeit in einer Flusssicht (siehe Thema 2.4, Kennzahlen für den Wertstrom) | Monatlich |
| OLA-Erreichungsrate | Anteil der internen Übergaben zwischen zwei Teams, die das OLA-Ziel erfüllten | Innerhalb des OLA-Ziels abgeschlossene Übergaben geteilt durch erhaltene Übergaben. Die Uhr startet, wenn das empfangende Team zugewiesen wird, und stoppt, wenn es das Element zurückgibt oder schließt. Ausgeschlossen: irrtümlich neu zugewiesene Elemente, gesondert gezählt | Prozent, mit n | Zuweisungshistorie des ITSM-Werkzeugs | Service-Level-Management; Incident-Management | Wartezeit bei Übergaben und blockierte Arbeit zwischen Teams (siehe Thema 9.3, Kennzahlen für Zusammenarbeit und Übergaben) | Monatlich |
| Wartezeit bei Übergaben (85. Perzentil) | Zeit, die ein Element in der Warteschlange eines empfangenden Teams wartet, bevor die Arbeit beginnt | 85. Perzentil der Zeit zwischen Zuweisung an das empfangende Team und der ersten protokollierten Aktion dieses Teams. Ausgeschlossen: auf den Kunden wartende Elemente | Stunden oder Minuten | Zuweisungs- und Aktivitätshistorie des ITSM-Werkzeugs | Service-Level-Management; Incident-Management | Warteschlangenzeit in einer Flusssicht (siehe Thema 2.3, Arbeit in Bearbeitung und Warteschlangen) | Wöchentlich |
| Erlebniswert nach Reise | Bewertung durch Kunden oder Nutzer, wie der Service eine definierte Reise unterstützte, etwa einen neuen Laptop zu bekommen oder sich von einem Ausfall zu erholen | Mittelwert und Verteilung von Umfragebewertungen auf einer festen Skala für im Zeitraum abgeschlossene Reisen. Rücklaufquote und Zusammensetzung der Antwortenden berichten. Ausgeschlossen: unvollständige Umfragen. Kein einzelner Durchschnitt, zeigen Sie also die Verteilung | Bewertungsskala, mit Rücklaufquote | Kurze Umfrage nach der Interaktion; Reiseereignisse aus dem ITSM-Werkzeug | Service-Level-Management; Praktiken zur Kundenzufriedenheit (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit) | Kundenfeedback und Ergebnismessgrößen | Monatlich, mit jeder Welle gezeigt |
| Watermelon-Lücke | Anteil der Berichtszeiträume oder Services, in denen das SLA als erfüllt erscheint, während die Erlebnismessgröße oder eine Nutzerwirkungsmessgröße schlecht erscheint | Services (oder Zeiträume) mit SLA-Erreichung auf oder über dem Ziel und Erlebnis unter dem vereinbarten Niveau, geteilt durch Services (oder Zeiträume) mit SLA-Erreichung auf oder über dem Ziel. Das Erlebnisniveau muss vereinbart sein, bevor der Zeitraum bewertet wird | Prozent der grünen Services | SLA-Erreichung und Erlebniswert zusammen | Service-Level-Management; kontinuierliche Verbesserung | Retrospektive der Ergebnisse gegen Wirkungen | Vierteljährlich |
| Abdeckung und Aktualität der Vereinbarungen | Anteil der Live-Services, deren SLA, OLAs und Lieferantenverträge existieren und innerhalb des vereinbarten Intervalls überprüft wurden | Services mit allen drei Schichten dokumentiert und innerhalb des Intervalls überprüft, geteilt durch Live-Services im Servicekatalog. Das Intervall legt die Organisation fest. Ausgeschlossen: Services in der Stilllegung | Prozent | Servicekatalog und Vereinbarungsregister | Service-Level-Management; Management des Servicekatalogs; Lieferantenmanagement | Arbeitsvereinbarungen und Team-Charters, in regelmäßigem Rhythmus überprüft | Vierteljährlich |

## Empfehlungen

### Die Vereinbarungen aufsetzen

**1. Schreiben Sie jedes SLA in der Sprache des Kunden und binden Sie es an ein Ergebnis.** Beginnen Sie bei dem, was der Kunde braucht, etwa „ein ausgesperrter Mitarbeitender arbeitet bald wieder“, und wählen Sie dann die Messgröße. Eine kurze Vereinbarung mit einer Handvoll aussagekräftiger Ziele schlägt eine lange, die niemand liest. Schreiben Sie die Uhr für jedes Ziel auf: das Startereignis, das Stoppereignis und die Pausenbedingungen (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents).

**2. Formulieren Sie Ziele als Perzentile oder Anteile, mit genannter Grundgesamtheit.** „90 Prozent der Incidents der Priorität 2 binnen vier Stunden wiederhergestellt“ sagt mehr als „durchschnittliche Wiederherstellung unter zwei Stunden“. Einigen Sie sich, was zählt: welche Prioritäten, welche Stunden, welche Anfragetypen. Zeigen Sie bei jedem Prozentsatz die Anzahl, damit ein Monat mit acht Incidents nicht gelesen wird wie ein Monat mit achthundert.

**3. Leiten Sie OLAs aus dem SLA ab und geben Sie jedem ein benanntes zuständiges Team.** Arbeiten Sie rückwärts vom Kundenziel: Wird dem Kunden Wiederherstellung binnen vier Stunden versprochen, müssen die OLAs Raum für Erkennung, Triage, Übergaben und Korrektur lassen. Schreiben Sie jedes OLA als kurze gegenseitige Vereinbarung mit einem empfangenden Team, einer erwarteten Reaktionszeit und einem Weg für Streitfälle. Ein OLA existiert, um Teams beim Planen zu helfen, halten Sie es also so leicht, wie die Beziehung es erlaubt.

**4. Halten Sie die Objectives enger als das Versprechen.** Setzen Sie das interne SLO strenger als das SLA, damit eine schlechte Woche bemerkt und korrigiert wird, bevor es eine für Kunden sichtbare Verletzung gibt (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets). Behandeln Sie das SLA als Untergrenze, die Finanzen und Recht kümmert, und das SLO als die Zahl, nach der Ingenieure steuern. Nutzen Sie das Fehlerbudget als Weg, wie Produkt und Betrieb zwischen Funktionsarbeit und Zuverlässigkeitsarbeit entscheiden.

### Ehrlich messen

**5. Veröffentlichen Sie die Uhrregeln und berichten Sie über Pausen.** Der häufigste Weg zu einem grünen Bericht ist ein großzügiger Pausenzustand, etwa „wartet auf Kunden“, genutzt, wenn der Anbieter selbst wartet. Berichten Sie den Anteil der Uhrpausen nach Pausenzustand, ziehen Sie jeden Monat einige pausierte Tickets als Stichprobe und fragen Sie, ob der Kunde zustimmen würde, dass die Uhr hätte anhalten sollen. Halten Sie die Liste erlaubter Pausengründe kurz und in der Vereinbarung festgeschrieben.

**6. Zeigen Sie die ganze Verteilung neben dem Ziel.** Stellen Sie den Median, das 85. oder 95. Perzentil und das schlechteste Dezil neben die Erreichungsrate. Eine flache Erreichung von 95 Prozent kann einen Schwanz von Arbeit verbergen, die Tage dauerte. (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

**7. Verfolgen Sie Beinahe-Verfehlungen und Ursachen von Verletzungen.** Der Anteil der Beinahe-Verfehlungen sagt Ihnen, wie viel Glück in der grünen Zahl steckt. Tritt eine Verletzung auf, erfassen Sie die Ursachenkategorie und ob es ein Kapazitäts-, Übergabe-, Lieferanten- oder Definitionsproblem war. Verknüpfen Sie die größten Kategorien mit dem Problemmanagement (siehe Thema 4.1, Kennzahlen für das Problemmanagement).

**8. Messen Sie die OLA-Warteschlange, nicht nur die Erreichung.** Die Wartezeit bei Übergaben am 85. Perzentil zeigt, wo Arbeit stockt, lange bevor eine SLA-Verletzung erscheint. Teilen Sie sie mit dem sendenden und dem empfangenden Team und beschreiben Sie sie als Eigenschaft des Flusses zwischen ihnen. Das Gespräch gilt der Warteschlange, nie den Menschen darin (siehe Thema 2.3, Arbeit in Bearbeitung und Warteschlangen).

### Erlebnis hinzufügen und die Lücke schließen

**9. Koppeln Sie jedes SLA mit einer Erlebnismessgröße für dieselbe Reise.** Fragen Sie Nutzer nach der Interaktion kurz, ob es funktionierte und wie schwer es war, und berichten Sie die Rücklaufquote und die Zusammensetzung der Antwortenden. Vereinbaren Sie im Voraus, welches Niveau als gut genug zählt, damit ein XLA ein ausgehandeltes Ergebnis ist und keine nachträglich erfundene Zahl (siehe Thema 6.2, Experience Level Agreements, und Thema 6.1, Kennzahlen für Kundenzufriedenheit).

**10. Berichten Sie die Watermelon-Lücke und behandeln Sie sie als Befund.** Verfolgen Sie, wie oft ein SLA erfüllt ist, während das Erlebnis schlecht ist. Eine wachsende Lücke sagt Ihnen, dass die SLA-Messgrößen von dem abdriften, was Nutzern wichtig ist, und die richtige Antwort ist, die Messgröße zu überarbeiten, nicht die Abweichung zu erklären. Überprüfen Sie sie vierteljährlich im Beisein des Kundenvertreters.

**11. Überprüfen Sie die Vereinbarungen nach Plan und stellen Sie die ein, die niemand nutzt.** Prüfen Sie jede Vereinbarung gegen den Servicekatalog, die Lieferantenverträge und die tatsächliche Arbeit. Ein kleinerer Satz lebender Vereinbarungen ist leichter zu berichten und schwerer zu manipulieren.

**12. Berichten Sie jeden Service in einer Sicht, die alle drei Schichten verbindet.** Zeigen Sie für jeden Service auf einer Seite die SLA-Erreichung, die Verteilung, die Übergabewartezeiten des OLA, den Erlebniswert und die offene Verbesserungsarbeit. Leiten Sie den Status aus den Daten ab, nicht aus einer vom Serviceeigner gewählten Farbe. Machen Sie die Seite für den Kunden und die Teams offen (siehe Thema 11.1, Ein Dashboard für Servicekennzahlen entwerfen).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| SLA-Erreichungsrate | Das Ziel leicht wählen; Tickets früh schließen und später wieder eröffnen; die Priorität nach unten umklassifizieren; harte Fälle als „außerhalb des Umfangs“ ausschließen | Wiedereröffnungsrate und Rate der Prioritätsumklassifizierung; Stichprobe geschlossener Tickets gemeinsam mit dem Kunden gelesen; Review der Ausschlussliste jedes Quartal |
| Anteil der Beinahe-Verfehlungen | Die Uhr eine Minute vor der Grenze stoppen und die Arbeit dann inoffiziell fortsetzen; ein Ticket in zwei kürzere teilen | Zeit vom letzten Kundenkontakt bis zur bestätigten Wiederherstellung; Zahl der verknüpften oder Kind-Tickets je Incident |
| Anteil der Uhrpausen | Pausenzustände bei Tickets nutzen, die nicht auf den Kunden warten; Arbeit in einen nicht gezählten Zustand verschieben | Pausengründe stichprobenartig geprüft; Anteil der vom Kunden rückgängig gemachten Pausen; Erlebniswert für pausierte Tickets |
| OLA-Erreichungsrate | Übergaben an den Sender zurückweisen, um die Uhr neu zu starten; Elemente als angenommen markieren, ohne die Arbeit zu beginnen | Zahl der Rückläufe je Element und Gesamtzeit bis zur Wiederherstellung über Teams; das Ende-zu-Ende-SLA-Ergebnis |
| Wartezeit bei Übergaben (85. Perzentil) | An eine Person statt an die Teamwarteschlange zuweisen, um das Warten zu verbergen; eine Alibi-Erstaktion protokollieren | Qualität der Erstaktion stichprobenartig geprüft; Zeit von der Zuweisung bis zum ersten für den Kunden sichtbaren Update |
| Erlebniswert nach Reise | Umfragen nur an zufriedene Nutzer senden; Suggestivfragen stellen; Antwortende dazu anleiten, hohe Bewertungen zu geben | Zusammensetzung der Antwortenden gegen die Grundgesamtheit; Rücklaufquote neben dem Wert gezeigt; offene Kommentare im Review gelesen |
| Watermelon-Lücke | Das Erlebnisniveau niedrig setzen, damit die Lücke klein bleibt; die Erlebnismessgröße ändern, wenn sie einbricht | Erlebnisniveau im Voraus vereinbart und Änderungen mit Gründen protokolliert; Trend der gesamten Verteilung |
| Abdeckung und Aktualität der Vereinbarungen | Eine Vereinbarung ohne echtes Review als überprüft markieren; ein Platzhalterdokument als SLA zählen | Beleg für das Review (Teilnehmende, Änderungen, Entscheidungen); Stichprobe von Vereinbarungen auf tatsächlichen Inhalt und Kundenfreigabe gelesen |

Ein gesunder Befund zeigt Erreichung, die sich aus verständlichen Gründen bewegt, Beinahe-Verfehlungen, die wenige und erklärt sind, Pausen, die innerhalb der vereinbarten Liste bleiben, Übergabewartezeiten, die von den Teams besprochen werden, die sie besitzen, und eine Erlebnismessgröße, die weitgehend mit dem SLA übereinstimmt. Wo die beiden abweichen, hat das Team schon eine Notiz zur Ursache und ein Verbesserungselement.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Vertragliche SLAs mit Strafen | Klar, durchsetzbar, rechtlich anerkannt | Fördert Uhrspiele und defensive Berichterstattung; Strafen können die Beziehung verderben |
| SLAs ohne Strafen, mit regelmäßigem Review | Schafft Vertrauen und ehrliche Daten; konzentriert sich auf Lernen | Weniger Druckmittel, wenn ein Lieferant Ziele durchgängig verfehlt |
| Detaillierte OLAs zwischen allen Teams | Klare Erwartungen und weniger Streit | Bürokratie; Teams optimieren die eigene Uhr statt die des Kunden |
| Leichte OLAs mit gemeinsamem Ende-zu-Ende-Ziel | Fördert Zusammenarbeit; weniger Papierkram | Braucht Vertrauen und gute Sicht auf Warteschlangen, um Streit beizulegen |
| XLAs zu SLAs hinzufügen | Zeigt, ob der Service Menschen hilft | Umfragedaten sind verrauschter und langsamer; Zuordnung ist schwerer |

Halten Sie die Vereinbarung klein, berichten Sie die Verteilung und nutzen Sie Erlebnisdaten, um die betrieblichen Daten zu prüfen. Investieren Sie Aufwand in die Uhrregeln und die Übergaben, wo die meiste Uneinigkeit über eine Zahl entsteht.

## Fragen für die Diskussion im Team

**1. Wenn unser SLA-Bericht ganz grün ist, was würden wir von Nutzern über den Service erwarten?**
Bitten Sie die Gruppe, einen Service zu nennen, der mehrere Monate grün war, und sammeln Sie dann, was Nutzer in Kommentaren und Beschwerden tatsächlich sagen. Vergleichen Sie die beiden. Die Moderation sollte nach Lücken zwischen der Messgröße und dem gelebten Erlebnis suchen und notieren, welche Messgrößen gewählt wurden, weil sie leicht zu treffen sind.

**2. Wo stoppt unsere Uhr, und wer hat das entschieden?**
Gehen Sie die Start-, Stopp- und Pausenregeln für ein wichtiges Ziel durch und fragen Sie, wer jede schrieb. Schauen Sie auf den Anteil der Tickets in einem Pausenzustand und fragen Sie, ob Kunden zustimmen würden. Einigen Sie sich auf eine Regel, die zu schärfen oder zu klären ist.

**3. Welche unserer OLAs helfen Teams beim Planen, und welche weisen nur Schuld zu?**
Listen Sie die internen Vereinbarungen auf und fragen Sie, wer jede liest und wann. Besprechen Sie, was nach einem verfehlten OLA geschieht: ein Gespräch über die Warteschlange oder eine Suche nach dem Schuldigen. Ziel ist, die Diskussion zum Arbeitsfluss zwischen Teams zu verschieben. Wählen Sie ein OLA zum Vereinfachen oder Einstellen.

**4. Wie viel unseres Grüns ist Glück?**
Zeigen Sie den Anteil der Beinahe-Verfehlungen für das wichtigste Ziel. Besprechen Sie, was geschähe, wenn der nächste Monat ein paar mehr harte Fälle oder ein paar weniger verfügbare Menschen hätte. Fragen Sie, ob das Team Puffer hat und wo er sitzt.

**5. Was würde der Kunde gern von uns versprochen sehen, das wir heute nicht messen?**
Laden Sie den Kundenvertreter oder einen Nutzer ein, in eigenen Worten zu beschreiben, was ihm wichtig ist, etwa eine Person erreichen zu können oder einen Laptop vor dem ersten Tag zu bekommen. Halten Sie zwei oder drei Ergebnisse fest. Entscheiden Sie, welche eine kurze Umfragefrage oder ein bereits in den Daten vorhandenes Ereignis sein könnten und wie sich die Gruppe auf ein gutes Niveau einigen würde.

**6. Woher würden wir wissen, wenn unsere SLA-Messgrößen von dem abgedriftet wären, was Nutzern wichtig ist?**
Besprechen Sie die Watermelon-Lücke als Signal und fragen Sie, wer sie ansieht. Überlegen Sie, wie oft die Vereinbarungen überprüft werden und ob der Kunde teilnimmt. Einigen Sie sich auf ein Review-Datum und die mitzubringenden Belege, einschließlich einer Stichprobe von Tickets und der neuesten Erlebnisergebnisse.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams, die ihre Services auch betreiben, erfüllen das SLA über ihre eigenen Objectives und Fehlerbudgets und spüren die Kosten, wenn eine SLA-Strafe oder eine Kundeneskalation geplante Arbeit unterbricht. Sie sollten SLOs enger halten als SLAs und das SLA als Sicherheitsuntergrenze behandeln, nicht als tägliches Ziel (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets).

### Service- und Betriebsteams

Betriebsteams tragen die Uhren. Sie brauchen klare Regeln für Start, Stopp und Pausenbedingungen, gemeinsame OLAs, die die empfangende Warteschlange benennen, und Sicht auf Übergabewartezeiten. Sie sollten Ursachen von Verletzungen schlicht berichten und als Eingabe für Problem- und Kapazitätsarbeit nutzen (siehe Thema 4.1, Kennzahlen für das Problemmanagement). Sie sollten dem Druck widerstehen, ein Ergebnis über die Uhr zu erklären, statt die Ursache zu beheben.

### Führung und Governance

Führungskräfte nutzen SLA-Berichte, um zu sehen, ob Zusagen erfüllt werden und wo zu investieren ist. Sie sollten Verteilungen, den Anteil der Uhrpausen, den Anteil der Beinahe-Verfehlungen und die Watermelon-Lücke verlangen und eine ununterbrochene Reihe von Grün mit Neugier behandeln. Die Verbesserungsarbeit zu finanzieren, die einer Analyse von Verletzungen folgt, und ehrliche Berichterstattung vor Schuldzuweisung zu schützen, zählt mehr als das Ziel selbst (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

### Kunden und Nutzer

Kunden wollen, dass die Vereinbarung beschreibt, was sie spüren: wie schnell das Problem behoben wird, wie oft es wiederkehrt und ob sie jemanden erreichen, der hilft. Sie sollten Teil des Reviews der Vereinbarungen sein und einen Weg haben zu sagen, wenn ein grüner Bericht nicht zu ihrem Erlebnis passt. Eine lesbare einseitige Zusammenfassung, mit den Gründen für jede Verletzung und der geplanten Korrektur, schafft mehr Vertrauen als eine lange Tabelle der Erreichung.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Krankenhauses unterstützt ein klinisches Terminplanungssystem, das Stationspersonal nutzt. Der Serviceeigner, der Service Desk, das Anwendungsteam und das Infrastrukturteam treffen sich monatlich. Alle Zahlen unten sind illustrativ.

Das SLA verspricht, dass 90 Prozent der Incidents der Priorität 2 (teilweiser Funktionsverlust, der eine Station betrifft) binnen vier Stunden wiederhergestellt werden, gemessen ab Ticketanlage, in einem Service rund um die Uhr, sieben Tage die Woche. Der Monatsbericht zeigt eine Erreichung von 94 Prozent bei 36 Incidents (illustrativ), bequem grün. Die Erlebnisumfrage, nach jedem Abschluss der Priorität 2 versandt, hat eine Rücklaufquote von 41 Prozent (illustrativ) und eine mediane Bewertung von 3 auf einer Fünf-Punkte-Skala, deutlich unter dem Niveau von 4, das Serviceeigner und Stationsleitungen als XLA vereinbart hatten. Die Watermelon-Lücke ist zum dritten Monat in Folge sichtbar.

Das Team betrachtet die Verteilung. Die mediane Wiederherstellung beträgt 1 Stunde 40 Minuten (illustrativ), doch das 95. Perzentil liegt bei 3 Stunden 50 Minuten (illustrativ), und der Anteil der Beinahe-Verfehlungen beträgt 31 Prozent (illustrativ): fast ein Drittel der „erfüllten“ Incidents wurde im letzten Zehntel der erlaubten Zeit fertig. Es schaut auf den Anteil der Uhrpausen und stellt fest, dass 22 Prozent (illustrativ) der verstrichenen Zeit im Zustand „wartet auf Kunden“ verbracht werden. Eine Stichprobe von zehn pausierten Tickets zeigt vier, bei denen die Station geantwortet hatte und das Ticket bis zur nächsten Schicht pausiert blieb, und bei drei weiteren wartete das Anwendungsteam auf das Infrastrukturteam. Die Wartezeit bei Übergaben am 85. Perzentil für die Infrastruktur-Warteschlange beträgt 2 Stunden 10 Minuten (illustrativ) bei einem OLA von 30 Minuten (illustrativ), und die OLA-Erreichungsrate für diese Übergabe liegt bei 58 Prozent (illustrativ).

Die Entscheidung ist praktisch. Sie ändern die Uhrregel, sodass „wartet auf Kunden“ nur nach einer dokumentierten Anfrage an den Kunden genutzt werden darf und die Uhr bei der nächsten Antwort weiterläuft. Sie fügen für die Infrastruktur-Warteschlange einen Bereitschaftsweg während der Stationszeiten hinzu und vereinbaren ein kleineres OLA, mit einem Review in einem Monat. Sie nehmen die Erlebnismessgröße und die Watermelon-Lücke in den einseitigen Monatsbericht auf und laden eine Stationsleitung zum Review ein. Sie senken außerdem das interne SLO auf eine strengere Wiederherstellung binnen vier Stunden für 95 Prozent der Incidents, damit das Team Ärger bemerkt, bevor das SLA gefährdet ist.

Ein Manipulationsrisiko zeigt sich im zweiten Monat. Nach der Änderung der Pausenregel sinkt die Erreichung auf 89 Prozent (illustrativ), und eine Führungskraft bittet den Service Desk, „die Prioritäten nachzuprüfen“. Das Team bemerkt einen Anstieg von Herabstufungen von Priorität 2 auf Priorität 3, koppelt die Erreichung mit den Raten von Umklassifizierung und Wiedereröffnung und verlangt für jede Prioritätsänderung einen Grund im Datensatz. Im dritten Monat beträgt die Erreichung 91 Prozent (illustrativ), das 95. Perzentil ist niedriger, der Anteil der Beinahe-Verfehlungen ist gefallen, und die mediane Erlebnisbewertung ist auf 3,8 gestiegen (illustrativ). Die Lücke verengt sich, weil die Arbeit besser wurde, und die Zahlen sind glaubwürdig.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Vereinbaren Sie Service Levels mit Stakeholdern und überprüfen Sie sie regelmäßig, damit die Ziele dem folgen, was Nutzer brauchen, während sich der Service entwickelt. Zu beachten ist, dass ein über Jahre unangetastetes festes Ziel die Vergangenheit misst.

### KI

KI kann Verletzungen zusammenfassen, vorhersagen, welche Tickets ein Ziel verfehlen werden, und Eskalationen vorschlagen. Koppeln Sie die Erreichung mit dem Erlebniswert und der Watermelon-Lücke und halten Sie fest, welche Vorhersagen richtig waren. Zu beachten ist, dass ein KI-Anstoß zum Schutz des Ziels Menschen dazu drängen kann, Uhren anzuhalten oder umzupriorisieren; prüfen Sie also die Nutzung von Pausen.

### Automatisierung

Berechnen Sie die Erreichung aus Ereigniszeitstempeln und machen Sie die Pausenregeln sichtbar. Messen Sie automatische Eskalation an falschen Eskalationen und an verpassten Verletzungen. Zu beachten ist, dass eine automatische Pause bei einem Zustand wie „wartet auf Kunden“ ein leichter Weg zur Manipulation ist.

### Analytik

Berichten Sie die Erreichung mit Beinahe-Verfehlungen und Perzentilen und zeigen Sie den Erlebniswert daneben. Die Entscheidung, die dies untermauert, ist, welche Vereinbarung neu zu verhandeln ist. Zu beachten ist, dass die Erreichung über kleine Ticketzahlen schwankt; zeigen Sie also die Anzahl hinter jedem Prozentsatz.

## Branchenperspektive

**Startup.** Ein kleines Unternehmen hat oft gar kein förmliches SLA, nur ein informelles Versprechen an einige frühe Kunden. Schreiben Sie eine Seite, die die Servicezeiten, ein Reaktionsziel und ein als Perzentil formuliertes Wiederherstellungsziel nennt, und führen Sie ein SLO im Team. Kundengespräche treten an die Stelle eines XLA, schreiben Sie also jeden Monat auf, was die drei wichtigsten Kunden sagen.

**Kleinunternehmen.** Ein kleines IT-Team hängt meist stark von externen Lieferanten ab, sodass die Underpinning Contracts mehr zählen als interne OLAs. Prüfen Sie, dass die Zusage jedes Lieferanten mindestens so streng ist wie das SLA, das Sie Ihren eigenen Nutzern geben, und verfolgen Sie die tatsächliche Leistung des Lieferanten (siehe Thema 8.4, Kennzahlen für Lieferanten und Verträge). Eine einfache Monatsseite mit Erreichung, Beinahe-Verfehlungen und einer kurzen Nutzerumfrage genügt.

**Großunternehmen.** Große Organisationen brauchen ein Register der Vereinbarungen und eine Abdeckungskennzahl. Standardisieren Sie Uhrregeln und Definitionen über Services, damit Aggregationen aussagekräftig sind (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen). Hüten Sie sich vor dem Watermelon-Effekt in Management-Aggregationen, wo Hunderte grüner Zeilen einige Services mit ernstem Nutzerschmerz verbergen.

**Behörden und öffentlicher Sektor.** Öffentliche Stellen haben oft gesetzliche Servicestandards, Beschaffungsregeln, die SLAs in Verträgen festschreiben, und eine Pflicht, Ergebnisse zu veröffentlichen. Halten Sie die veröffentlichte Messgröße klar und überprüfbar, bewahren Sie die Uhrregeln und die Belege für die Prüfung auf und behandeln Sie Bürger als Kunden mit Stimme im Review (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung). Wo der Vertrag starr ist, fügen Sie eine Erlebnismessgröße daneben hinzu, ohne den Vertragswortlaut zu ändern.

## Business Case: Motive, ROI und TCO

Der Fall für bessere Vereinbarungskennzahlen ist ein Fall für Vertrauen und für das Vermeiden vergeudeten Aufwands. Berichte, die zum Empfinden der Nutzer passen, verringern Eskalationen und Streit, verkürzen die monatliche Auseinandersetzung darüber, wessen Zahl stimmt, und lassen Führungskräfte die Arbeit finanzieren, auf die es ankommt. Klare OLAs verringern Übergabeverzögerungen, die zu den größten Beiträgen zu langen Wiederherstellungen gehören. Eine früh gefangene Watermelon-Lücke vermeidet die größeren Kosten einer schiefgehenden Kundenbeziehung oder Vertragsverlängerung.

Die Kosten sind mäßig: Zeit, die Vereinbarungen zu schreiben und zu überprüfen, verlässliche Uhr- und Übergabedaten (siehe Thema 1.5, Datenquellen und Instrumentierung), eine kurze Umfrage und ein Monats-Review. Die Gesamtkosten wachsen mit der Zahl der Vereinbarungen, weniger und einfachere sind also billiger zu besitzen.

Der Ertrag zeigt sich als weniger überraschende Verletzungen, weniger Zeit für das Erklären von Berichten und besser informierte Investitionsentscheidungen. Behandeln Sie diese als Muster, die man beobachtet und im Zeitverlauf vergleicht, nicht als Rechnung. Vergleichen Sie den Aufwand eines Monats-Reviews mit den Kosten eines eskalierten Streits oder einer verlorenen Verlängerung in Ihrer eigenen Organisation, anhand Ihrer eigenen Daten (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Nur Durchschnitte berichten.** Ein Durchschnitt verbirgt einen langen Schwanz verspäteter Arbeit. Berichten Sie Perzentile, den Anteil der Beinahe-Verfehlungen und die Anzahl.
- **Das SLA um das schreiben, was leicht zu treffen ist.** Ein aus Bequemlichkeit gewähltes Ziel liefert einen immer grünen Bericht. Beginnen Sie bei dem, was der Kunde braucht, und zeigen Sie die Lücke offen.
- **Die Uhr anhalten, um die Zahl zu verbessern.** Großzügige Pausenzustände machen das SLA zur Fiktion. Veröffentlichen Sie die Pausenregeln, prüfen Sie Stichproben und berichten Sie den Pausenanteil.
- **OLAs als Waffe.** Ein OLA, das genutzt wird, um dem nächsten Team die Schuld zu geben, lehrt Teams, Arbeit zurückzuspielen. Behandeln Sie Verfehlungen als Information über die Warteschlange und beheben Sie den Fluss.
- **Strafengetriebene Berichterstattung.** Hohe Strafen fördern defensive Klassifizierung und Streit über die Uhr. Nutzen Sie Strafen sparsam und koppeln Sie sie mit Wiedereröffnungs- und Umklassifizierungsraten.
- **Erlebnisdaten ohne Rücklaufquote.** Ein hoher Wert aus einer winzigen, selbst gewählten Stichprobe führt in die Irre. Zeigen Sie die Rücklaufquote und die Zusammensetzung der Antwortenden neben jedem Ergebnis.
- **Vereinbarungen, die niemand überprüft.** Veraltete Vereinbarungen beschreiben einen Service, den es nicht mehr gibt. Planen Sie Reviews und stellen Sie Ungenutztes ein.
- **Individuelle Ziele aus Teamvereinbarungen.** Ein Team-SLA in persönliche Quoten zu zerlegen führt zu hastigen Schließungen und zum Ordnen. Halten Sie die Vereinbarung auf Ebene von Service und Team.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Entwurf der Vereinbarung | Mündliche Versprechen oder kopierte Vorlagen; Ziele nach Gewohnheit gewählt | Einige schriftliche SLAs; OLAs selten; Uhren unterscheiden sich zwischen Teams | Eine kurze Vorlage mit ergebnisbasierten Zielen, Perzentilen und schriftlichen Uhrregeln | Vereinbarungen im Rhythmus mit dem Kunden überprüft und an SLOs gebunden | Schichten aus SLA, OLA, Lieferantenvertrag und SLO gemeinsam angepasst, wenn sich Bedingungen ändern |
| Messqualität | Manuelle Zählungen; Durchschnitte; Pausen undokumentiert | Werkzeugbasierte Erreichung für einige Services; Pausennutzung nicht überprüft | Eine Definition und Datenquelle; Verteilungen und Pausenanteil gezeigt | Beinahe-Verfehlungen, Ursachen von Verletzungen und Übergabewartezeiten im Trend und stichprobenartig geprüft | Team- und Lieferantendaten abgeglichen; Definitionen überarbeitet, wenn sie Entscheidungen nicht mehr informieren |
| Verknüpfung mit Erlebnis | Kein Nutzerfeedback am SLA | Ad-hoc-Umfragen für einige Services | Eine kurze Umfrage für Schlüsselreisen, Rücklaufquote gezeigt | Erlebnisziele mit Kunden vereinbart und Watermelon-Lücke berichtet | Erlebnis- und Betriebsmessgrößen steuern gemeinsame Verbesserungsarbeit mit Kunden |
| Nutzung zur Verbesserung | Nach einer Beschwerde berichtet | Verletzungen in Teammeetings besprochen | Monats-Review mit Eignern und Maßnahmen | Ursachen von Verletzungen speisen finanzierte Verbesserungs- und Problemarbeit | Kunden, Lieferanten und Teams planen Verbesserung gemeinsam aus derselben Sicht |

## Checkliste

- [ ] Jedes SLA nennt sein Ergebnis, sein Ziel als Perzentil oder Anteil und seine Grundgesamtheit.
- [ ] Startereignis, Stoppereignis und erlaubte Pausenbedingungen sind für jedes Ziel aufgeschrieben.
- [ ] Jedes kundenseitige SLA hat OLAs oder Lieferantenverträge, die darin passen, jeweils mit einem benannten zuständigen Team.
- [ ] Interne Objectives sind strenger als die versprochenen SLA-Ziele.
- [ ] Berichte zeigen die Verteilung, die Anzahl, den Anteil der Beinahe-Verfehlungen und den Anteil der Uhrpausen.
- [ ] Jeden Monat wird eine Stichprobe pausierter und geschlossener Tickets gelesen.
- [ ] Jeder Schlüsselservice hat eine Erlebnismessgröße mit vereinbartem Niveau, und die Rücklaufquote wird gezeigt.
- [ ] Die Watermelon-Lücke wird verfolgt und mit einem Kundenvertreter überprüft.
- [ ] Vereinbarungen werden nach Plan überprüft und bei Nichtnutzung eingestellt.
- [ ] Keine Vereinbarungskennzahl wird genutzt, um einzelne Menschen zu ordnen.

## KI-Prompts

**Ein SLA auf Probleme bei Uhr und Formulierung prüfen.**

```text
Here is the text of our SLA for [service]: [paste agreement text]. The targets
are [list of targets], measured in [tool]. Identify ambiguities in the start
event, stop event, and pause conditions, places where an average could hide a
long tail, and wording a customer could read differently from us. Suggest
clearer wording and the questions I should ask the customer. Do not invent
benchmark values or legal conclusions. List your assumptions.
```

**Ein OLA zwischen zwei Teams entwerfen.**

```text
I need a short operational level agreement between [sending team] and
[receiving team] to support our SLA of [SLA target] for [service]. The typical
hand-off is [description], and the queue is [queue name or tool]. Draft a one
page OLA with the purpose, the expected response, the clock rules, a way to
settle disputes, and a review date. Keep the tone cooperative and do not suggest
penalties unless I ask. Do not invent target values; ask me for them. List your
assumptions.
```

**In unseren Daten nach einer Watermelon-Lücke suchen.**

```text
Here is a summary of SLA attainment and an experience measure for [list of
services] over [period]: [paste the table]. Identify services where the SLA reads
as met and experience reads as poor, and suggest possible explanations to
investigate, such as clock pauses, priority reclassification, or a poorly chosen
measure. Propose questions and a small sample of tickets to read for each. Do not
assume causes or invent thresholds. List your assumptions.
```

**Eine kurze Erlebnisumfrage für ein XLA entwerfen.**

```text
We want to add an experience measure for [journey, for example getting a new
laptop] for [audience]. Draft [number] neutral questions, a plan for when and how
to send them, and how to report the response rate and respondent mix. Flag
wording that could bias answers and suggest how to agree the target level with
[customer representative role]. Do not invent benchmark scores. List your
assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um herauszufinden, welches Thema die Kennzahl hinter einer SLA-Zeile definiert und welche Leitplanke daneben stehen sollte.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass Änderungen an diesem Thema Vorlage, Uhrregeln und Manipulationstabelle im Gleichschritt halten.

## Wichtigste Erkenntnisse

- Ein SLA ist ein Versprechen an den Kunden, ein OLA ein Versprechen zwischen Teams und ein XLA ein vereinbartes Erlebnisergebnis; jedes braucht eine eigene Messgröße und einen Eigner.
- Berichten Sie Perzentile, Anzahlen, Beinahe-Verfehlungen und den Anteil der Uhrpausen, denn Durchschnitte und stille Pausen erzeugen grüne Berichte über schlechten Service.
- Leiten Sie OLAs aus dem SLA ab und halten Sie interne Objectives enger als das Versprechen.
- Koppeln Sie jedes SLA mit einer Erlebnismessgröße für dieselbe Reise und berichten Sie die Watermelon-Lücke als Befund, auf den zu reagieren ist.
- Überprüfen Sie Vereinbarungen nach Plan mit dem Kunden im Raum und stellen Sie ein, was niemand nutzt.
- Halten Sie jede Vereinbarungskennzahl auf Ebene von Services und Teams, nie von Einzelpersonen.

## Quellen und weiterführende Literatur

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Operational-level agreement](https://en.wikipedia.org/wiki/Operational-level_agreement).
10. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
11. Wikipedia, [Service level objective](https://en.wikipedia.org/wiki/Service_level_objective).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
