# Kennzahlen für KI-Governance und -Risiken

**KI-Nutzung braucht dieselbe Disziplin wie jede Änderung an einem laufenden Service: wissen, wo sie ist, wem sie gehört, wie riskant sie ist, wie sie getestet und geändert wird und was geschieht, wenn sie schiefgeht, mit einer Aufsicht, die Menschen tatsächlich ausüben können.**

## Überblick und Motivation

KI gelangt durch viele Türen in eine Organisation. Ein Team übernimmt einen Programmierassistenten. Ein Anbieter fügt einem bereits genutzten Produkt eine generative Funktion hinzu. Ein Mitarbeiter fügt ein Dokument in ein öffentliches Werkzeug ein. Eine Abteilung baut ein Modell, um Anfragen zu bewerten. Jedes ist eine Nutzung von KI mit eigenem Nutzen und Risiko, und wenige sind an einer Stelle sichtbar. Governance ist die Gesamtheit der Strukturen, Richtlinien und Praktiken, die diese Nutzungen bekannt, rechenschaftspflichtig und hinreichend sicher machen. Risikokennzahlen sagen, ob die Governance funktioniert.

ITIL hat die Bausteine: Governance des Service-Wertschöpfungssystems, Risikomanagement, Change-Befähigung, Informationssicherheitsmanagement, Lieferantenmanagement und kontinuierliche Verbesserung. Agile und DevOps-Arbeitsweisen liefern die Gewohnheit kleiner, kontrollierter, umkehrbarer Änderung und automatisierter Prüfungen in der Pipeline. KI-Governance braucht kein eigenes Universum. Sie braucht diese Praktiken, angewandt auf Dinge, die sich anders verhalten als herkömmliche Software.

Was ist bei KI anders?

- **Verhalten ist statistisch und kann sich ohne Codeänderung ändern.** Ein Modell kann sich nach einem Update des Anbieters, einer Änderung seiner Eingaben oder einer Änderung des Prompts anders verhalten. Die Daten, die es in Produktion sieht, können von den Daten abweichen, mit denen es getestet wurde, ein im maschinellen Lernen als Drift bekanntes Phänomen. Ein System kann leise verfallen.
- **Ausgaben sind nicht vollständig vorhersagbar.** Testen kann nicht jede Eingabe abdecken, daher erfolgt die Evaluierung durch Stichproben und gezielte Tests, nicht durch Beweis. Systeme können auf Arten versagen, die ihre Bauer nicht vorhersahen.
- **Schäden können diffus und ungleich sein.** [Algorithmische Verzerrung](https://en.wikipedia.org/wiki/Algorithmic_bias) ist ein systematischer Fehler, der für manche Gruppen zu unfairen Ergebnissen führt. Sie kann aus Daten, Entwurf oder Nutzung entstehen und zeigt sich womöglich nicht in der Gesamtgenauigkeit.
- **Neue Angriffsflächen erscheinen.** [Prompt Injection](https://en.wikipedia.org/wiki/Prompt_injection) ist ein Angriff, bei dem in Eingabedaten versteckte Anweisungen ein Sprachmodell zu unbeabsichtigtem Verhalten manipulieren. Modelle lassen sich dazu bringen, Daten zu verraten oder Handlungen vorzunehmen, die ihre Eigner nicht beabsichtigten.
- **Die Abhängigkeit von Lieferanten ist tief.** Viele KI-Fähigkeiten kommen von externen Anbietern, mit begrenzter Sicht darauf, wie sie gebaut oder geändert werden. Lieferantenkennzahlen zählen mehr (siehe Thema 8.4, Kennzahlen für Lieferanten und Verträge).
- **Regeln entstehen und unterscheiden sich nach Ort.** Gesetze, Standards und Anleitungen zu KI entwickeln sich schnell. Das [KI-Gesetz](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act) der Europäischen Union verfolgt einen risikobasierten Ansatz mit Pflichten, die in Phasen gelten, und andere Rechtsordnungen gehen andere Wege. Standards wie ISO/IEC 42001 zu KI-Managementsystemen und das NIST AI Risk Management Framework bieten Strukturen. Aussagen zu bestimmten Regeln in diesem Thema sind auf den Stand Oktober 2026 datiert und sollten neu geprüft werden, und rechtlicher Rat sollte Ihre Pflichten leiten. Das weitere Feld wird unterschiedlich als [verantwortungsvolle KI](https://en.wikipedia.org/wiki/Responsible_AI) oder vertrauenswürdige KI beschrieben, und die Frage, wie das Recht KI behandeln sollte, ist Gegenstand der [Regulierung künstlicher Intelligenz](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).

Governance kann auf zwei entgegengesetzte Arten scheitern. Sie kann so schwer sein, dass Teams sie meiden und KI-Nutzung als [Schatten-IT](https://en.wikipedia.org/wiki/Shadow_IT) in den Untergrund geht. Oder sie kann eine Papierübung sein, mit einer Richtlinie und einem Register, die die Praxis nicht spiegeln. Die agilen Ziele legen den Mittelweg nahe: kontinuierliche Einbeziehung von Stakeholdern beim Setzen der Regeln, kleine und schnelle Genehmigungen für Nutzungen mit geringem Risiko, tiefere Prüfung dort, wo Schaden möglich ist, und kontinuierliche Verbesserung der Kontrollen, während die Erfahrung wächst. Motivierte Menschen mit klaren Grenzen, denen vertraut wird, innerhalb derer Urteilsvermögen zu nutzen, werden Probleme melden. Menschen, die Bestrafung fürchten, nicht.

Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt für Governance-Kennzahlen: Ist „Prozentsatz registrierter KI-Nutzungen“ ein Ziel, füllen sich Register mit Einträgen, die niemand liest, und die tatsächlichen Nutzungen bleiben außer Sicht (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Dieses Thema baut auf den Themen zu Risiko, Compliance und Sicherheit in Teil 8 und auf den früheren Themen dieses Teils auf.

## Leitprinzipien

- **Wissen, wo KI genutzt wird.** Ein Register der Nutzungen, einschließlich der in Produkte eingebetteten und derer, die Beschäftigte selbst übernehmen, ist die Grundlage.
- **Prüfung am Risiko ausrichten.** Leicht bei Nutzungen mit geringem Risiko, tiefer bei folgenreichen.
- **Änderungen an Modellen und Prompts als Changes behandeln.** Sie brauchen Tests, Genehmigung im Verhältnis zum Risiko und die Möglichkeit zum Rollback.
- **Vor und während der Nutzung evaluieren.** Testen Sie an realistischen Fällen und testen Sie in Produktion weiter.
- **Bedeutsame menschliche Aufsicht halten.** Eine Person muss verstehen, hinterfragen und übersteuern können und die Zeit und Befugnis dafür haben.
- **Aus Incidents ohne Schuldzuweisung lernen.** KI-Fehlschläge sind neu, und Melden ist der Weg, wie die Organisation lernt.
- **Genehmigung für die sicheren Fälle schnell machen.** Langsame Governance treibt Nutzung aus dem Blickfeld.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Abdeckung des KI-Nutzungsregisters | Anteil der auf unabhängigem Weg gefundenen KI-Nutzungen, die mit Eigner und Risikoklasse im Register stehen | Nutzungen im Register mit Eigner und Risikoklasse / durch unabhängige Entdeckung gefundene Nutzungen (Beschaffung, Spesen, Identität, Netzwerk und Berichte des Personals) | Prozent | Register, Beschaffungs- und Spesendaten, Identitätsprotokolle, Umfragen | Governance; IT-Asset-Management; Risikomanagement | Sichtbare Arbeit und klare Verantwortung | Vierteljährlich |
| Aktualität der Risikobewertung | Anteil der Nutzungen mit mittlerem und hohem Risiko, deren Risikobewertung im verlangten Zyklus liegt | im Zyklus bewertete Nutzungen / Nutzungen mit mittlerem und hohem Risiko | Prozent | Risikobewertungen | Risikomanagement; Informationssicherheitsmanagement | Regelmäßige Reflexion über Risiken | Vierteljährlich |
| Abdeckung der Change-Kontrolle | Anteil der Änderungen an Modellen, Prompts, Werkzeugen und Datenquellen in Produktion, die mit den verlangten Tests durch die Change-Kontrolle gingen | Änderungen mit Change-Datensatz, Tests und Genehmigung im Verhältnis zum Risiko / erkannte Änderungen | Prozent | Change-Datensätze, verglichen mit Versionshistorie und Release-Notizen der Anbieter | Change-Befähigung; Release- und Deployment-Management | Kleine, kontrollierte, umkehrbare Änderungen | Monatlich |
| Aktualität der Evaluierung | Anteil der Produktionsnutzungen mit aktueller Evaluierung (Genauigkeit, Sicherheit und, wo relevant, Fairness) und Ergebnissen innerhalb der Toleranz | Nutzungen mit Evaluierung im Zyklus und akzeptablen Ergebnissen / Produktionsnutzungen im Umfang | Prozent | Evaluierungsunterlagen | Qualitätssicherung; Risikomanagement | Definition of Done für Verhalten | Vierteljährlich |
| Nachweisrate menschlicher Aufsicht | Anteil der beprobten folgenreichen Ausgaben oder Entscheidungen mit erfasster, substanzieller menschlicher Prüfung | beprobte Elemente mit dokumentierter Prüfung, die das Ergebnis hätte ändern können / beprobte Elemente | Prozent | Beprobte Entscheidungsunterlagen | Risikomanagement; Governance | Review vor dem Release | Monatlich |
| Rate von KI-Incidents und Zeit bis zur Eindämmung | Incidents mit KI (schädliche Ausgabe, Datenexposition, unsichere Handlung) je Nutzung und die Zeit, sie einzudämmen | Incidents je Produktionsnutzung und Quartal; Median und 85. Perzentil der Stunden von der Erkennung bis zur Eindämmung | Incidents; Stunden | Mit KI getaggte Incident-Datensätze | Incident-Management; Informationssicherheitsmanagement | Schuldfreie Reaktion und Lernen | Vierteljährlich |
| Aktualität der KI-Sorgfaltsprüfung bei Lieferanten | Anteil der Lieferanten mit KI-Funktionen in kritischen Services, deren KI-spezifische Bewertung aktuell ist | Lieferanten mit aktueller KI-Bewertung / kritische Lieferanten mit KI-Funktionen | Prozent | Lieferantenbewertungen | Lieferantenmanagement; Risikomanagement | Regelmäßiges Review von Abhängigkeiten | Vierteljährlich |

Definieren Sie „KI-Nutzung“ im Register weit: Modelle, die Sie bauen, Services, die Sie kaufen, Funktionen in Produkten und Werkzeuge, die Beschäftigte nutzen. Die Risikoklassen und Zyklen werden in der Richtlinie festgelegt. Die Registerabdeckung wird gegen unabhängige Entdeckung gemessen, nicht gegen das Register selbst. Die Abdeckung der Change-Kontrolle verlangt einen Weg, Änderungen zu erkennen: Versionsverwaltung, Mitteilungen von Anbietern, Konfigurationsüberwachung. Der Nachweis menschlicher Aufsicht verlangt, dass die Prüfung das Ergebnis hätte ändern können, nicht dass ein Knopf gedrückt wurde. Incident-Raten beschreiben Nutzungen und Systeme und werden nicht genutzt, um Menschen zu bewerten.

## Empfehlungen

### Kennen und klassifizieren

**1. Bauen Sie das Register durch Finden ebenso wie durch Fragen.** Beginnen Sie mit einer Umfrage und einer Richtlinie und prüfen Sie dann gegen Beschaffungs- und Spesenunterlagen, Identitäts- und Zugriffsprotokolle, Netzwerk- und Cloud-Abrechnungsdaten und Produktupdates der Anbieter. Beziehen Sie KI-Funktionen in Werkzeugen ein, die Sie bereits besitzen. Erwarten Sie Überraschungen: Menschen nutzen Werkzeuge, die Sie nicht genehmigt haben, oft aus guten Gründen. Behandeln Sie das als Information (siehe Thema 7.2, Kennzahlen für Software-Assets und Lizenzen).

**2. Weisen Sie jeder Nutzung einen Eigner und eine Risikoklasse zu.** Der Eigner ist die Person, die für die Nutzung und ihre Ergebnisse rechenschaftspflichtig ist. Die Risikoklasse spiegelt den Schaden bei Versagen des Systems: wer betroffen ist, ob Entscheidungen über Menschen beteiligt sind, ob es selbstständig handelt, welche Daten es berührt und wie umkehrbar die Wirkungen sind. Nutzen Sie wenige Klassen mit klaren Regeln. Greifen Sie auf anerkannte Rahmenwerke zurück, etwa das NIST AI Risk Management Framework, ISO/IEC 42001 und geltendes Recht, und passen Sie sie an Ihren Kontext an.

**3. Machen Sie die Genehmigung verhältnismäßig.** Für Nutzungen mit geringem Risiko genügt eine schnelle Selbstregistrierung mit wenigen Fragen. Verlangen Sie für folgenreiche Nutzungen eine Risikobewertung, Evaluierungsergebnisse, einen definierten Entwurf der menschlichen Aufsicht und Freigabe. Ein schneller Weg für die sichere Mehrheit hält Menschen im System, und ein langsamerer Weg für die gefährlichen Wenigen gibt ihnen die gebotene Prüfung.

### Testen und Änderung kontrollieren

**4. Evaluieren Sie an realistischen Fällen, vor und während der Nutzung.** Bauen Sie eine Menge von Testfällen, die echte Eingaben spiegeln, einschließlich schwieriger und gegnerischer, und bewerten Sie die Ausgaben gegen schriftliche Kriterien. Schließen Sie Prüfungen auf Sicherheit und, wo Menschen betroffen sein könnten, auf Fairness ein. Wiederholen Sie die Evaluierungen planmäßig und wann immer sich Modell, Prompt oder Daten ändern. Ein Red Team, eine Gruppe, die das System gezielt angreift, um Schwächen zu finden, ist bei Nutzungen mit höherem Risiko eine nützliche Praxis. Siehe die Stichprobenpraktiken für gestützte Arbeit (siehe Thema 10.2, KI-gestützte Arbeit messen).

**5. Stellen Sie Modelle, Prompts und Werkzeuge unter Change-Kontrolle.** Versionieren Sie Prompts und Konfigurationen wie Code. Verlangen Sie für Änderungen Tests und Genehmigung im Verhältnis zum Risiko, erfassen Sie sie und behalten Sie die Möglichkeit zum Rollback. Verfolgen Sie vom Anbieter getriebene Modellupdates, die das Verhalten ohne Vorankündigung ändern können, und vereinbaren Sie mit Lieferanten, wie Sie informiert werden. Behandeln Sie ein Modell-Upgrade als Change, der Kontrolle braucht (siehe Thema 4.3, Kennzahlen für die Change-Befähigung).

**6. Überwachen Sie in Produktion.** Beobachten Sie Drift bei Eingaben und Ausgaben, steigende Fehler- und Überschreibungsraten und ungewöhnliche Muster. Setzen Sie Schwellen, die ein Review auslösen. Überwachen Sie bei Systemen, die handeln, die Handlungsprotokolle. Monitoring ist der Weg, die Probleme zu finden, die das Testen verpasste.

### Menschliche Aufsicht real halten

**7. Entwerfen Sie Aufsicht, die funktionieren kann.** Eine Person, die jede Ausgabe eines schnellen Systems prüft, kann nicht mithalten, und eine Person, die genehmigen soll, was sie nicht verstehen kann, übt keine Aufsicht aus. Definieren Sie, was der Mensch tut, welche Informationen er hat, wie viel Zeit und welche Befugnis zum Übersteuern. Beproben Sie Reviews, um zu prüfen, dass sie substanziell sind. Achten Sie auf Automation Bias, die Neigung, maschinelle Ausgaben anzunehmen (siehe Thema 10.1, KI in der Messung des Service-Managements).

**8. Führen Sie Audit-Trails.** Erfassen Sie Eingaben, Ausgaben, Versionen, Entscheidungen und Handlungen so, dass sie Untersuchung stützen, vorbehaltlich Datenschutzregeln und Aufbewahrungsgrenzen. Ein [Audit-Trail](https://en.wikipedia.org/wiki/Audit_trail) lässt Sie beantworten, was geschah und warum. Bedenken Sie bei folgenreichen Entscheidungen über Menschen, welche Erklärung Sie geben können und welcher Rechtsweg besteht (siehe Thema 8.3, Kennzahlen für Compliance und Audit).

**9. Schützen Sie Daten und widerstehen Sie Manipulation.** Kontrollieren Sie, welche Daten KI-Systeme sehen und hinaussenden können. Testen Sie auf Prompt Injection und Datenabfluss, besonders bei Systemen, die externe Inhalte lesen oder Zugriff auf Werkzeuge haben. Wenden Sie die Prinzipien geringster Rechte an, die für Agenten gelten, die handeln (siehe Thema 10.3, Kennzahlen für KI-Agenten und Chatbots, und Thema 8.1, Kennzahlen für Sicherheitsvorfälle und Schwachstellen). Bedenken Sie Datenschutz beim Entwurf und beziehen Sie Datenschutzfachleute ein.

### Reagieren und lernen

**10. Behandeln Sie KI-Incidents als Incidents.** Definieren Sie, was zählt: schädliche oder verzerrte Ausgaben, Datenexposition, unsichere Handlungen, bedeutende Fehler, die Nutzer erreichen. Nutzen Sie Ihren normalen Incident-Prozess mit dem KI-Tag, überprüfen Sie schuldfrei und speisen Sie Lehren in Evaluierungen und Kontrollen. Machen Sie Melden für Personal und Nutzer leicht. Die Zeit bis zur Eindämmung zählt wie bei jedem Incident (siehe Thema 3.4, Kennzahlen für Major Incidents).

**11. Steuern Sie die KI der Lieferanten.** Fragen Sie Lieferanten, welche KI-Funktionen sie nutzen, wie sie getestet und geändert werden, wie Daten behandelt werden und wie Incidents gemeldet werden. Nehmen Sie, wo es zählt, KI-spezifische Bedingungen in Verträge auf, einschließlich der Mitteilung wesentlicher Modelländerungen. Bewerten Sie kritische Lieferanten im Zyklus neu (siehe Thema 8.4, Kennzahlen für Lieferanten und Verträge).

**12. Überprüfen Sie die Governance selbst.** Prüfen Sie jedes Quartal, was die Kennzahlen zeigen: wo Nutzungen unregistriert blieben, welche Genehmigungen zu langsam waren, welche Kontrollen Probleme nicht fingen. Passen Sie Richtlinie und Wege an. Beziehen Sie Personal und Nutzer in das Review ein. Halten Sie die Regeln kurz, klar und aktuell und stellen Sie Kontrollen ein, die ihre Kosten nicht verdienen.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Abdeckung des KI-Nutzungsregisters | Triviale Nutzungen registrieren, um den Prozentsatz zu heben; Nenner auf das Registrierte beschränken | Unabhängige Entdeckung für den Nenner; Registereinträge auf Qualität beproben; Amnestie für unregistrierte Nutzungen |
| Aktualität der Risikobewertung | Oberflächliche Bewertungen, die immer bestehen; Nutzungen mit geringem Risiko bewerten | Bewertungstiefe überprüfen; prüfen, dass die Risikoklasse zu den Kriterien passt |
| Abdeckung der Change-Kontrolle | Änderungen von Anbietern nicht erkennen; Änderungen nachträglich erfassen | Erkennung über Versionshistorie und Mitteilungen der Anbieter; Change-Datensätze vor dem Release datiert |
| Aktualität der Evaluierung | Evaluierungen an leichten Fällen; Toleranzen nach Sicht der Ergebnisse wählen | Testmengen von unabhängiger Partei überprüft; Schwellen vorab gesetzt |
| Nachweisrate menschlicher Aufsicht | Genehmigen klicken, ohne zu lesen; Review dokumentieren, das das Ergebnis nicht ändern konnte | Reviews auf Substanz beproben; gesäte bekannte Fehler; Last der Reviewer |
| Rate von KI-Incidents und Zeit bis zur Eindämmung | Incidents nicht melden; die Definition verengen | Leichtes, schuldfreies Melden; mit Nutzerbeschwerden und Prüfbefunden vergleichen |
| Aktualität der KI-Sorgfaltsprüfung bei Lieferanten | Fragebögen, die das Marketing beantwortet; Bewertungen ohne Beleg | Belegpflicht für kritische Lieferanten; unabhängige Verifizierung |

Ein gesunder Befund ist ein Register, das unabhängige Entdeckung bestätigt, Bewertungen, die zum Risiko passen, Changes, die durch die Kontrolle gehen, aktuelle Evaluierungen, Aufsicht, die echte Fehler findet, bereitwillig gemeldete und schnell eingedämmte Incidents und Lieferanten, die teilen, was sie ändern.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Zentrale Genehmigung jeder KI-Nutzung | Kontrolle, Konsistenz | Langsam; treibt Nutzung in den Untergrund |
| Selbstregistrierung mit Risikostufen | Schnell für die sichere Mehrheit | Braucht gute Kriterien und Stichproben |
| Verbot öffentlicher Werkzeuge | Verringert Datenexposition | Schatten-Nutzung; verlorener Nutzen |
| Genehmigte Werkzeuge mit Anleitung | Sichtbare und steuerbare Nutzung | Braucht Bereitstellung und Unterstützung |
| Schwere Dokumentation | Beleg für Prüfungen | Last; spiegelt womöglich die Praxis nicht |
| Automatisierte Evaluierung in der Pipeline | Kontinuierlich, konsistent | Braucht gute Testmengen; kann neue Fehler verpassen |
| Menschliches Review von allem | Sicherheit | Nicht skalierbar; Ermüdung |
| Risikobasierte Stichproben | Praktisch | Manche Fehler rutschen durch |

Die Antwort in Worten ist, genehmigte Werkzeuge und einen schnellen Weg für Nutzungen mit geringem Risiko zu bieten, Prüfung auf folgenreiche zu konzentrieren, Evaluierung und Monitoring zu automatisieren und menschliche Aufsicht dort zu halten, wo sie wirklich funktionieren kann.

## Fragen für die Diskussion im Team

**1. Wo nutzen wir heute KI, die auf keiner Liste steht?**
Fragen Sie das Team ehrlich und bieten Sie Amnestie an. Schauen Sie auf Werkzeuge für Entwurf, Zusammenfassung, Programmierung und Analyse, auch solche in Produkten. Die Moderation sollte Nutzungen ohne Urteil festhalten. Einigen Sie sich, wer sie registriert und welche einen näheren Blick brauchen.

**2. Wenn unsere folgenreichste KI-Nutzung einen schädlichen Fehler machte, wie würden wir es herausfinden und was täten wir?**
Gehen Sie Erkennung, Eindämmung, Kommunikation und Lernen durch. Notieren Sie Lücken bei Monitoring, Verantwortung und Befugnis, sie abzuschalten. Einigen Sie sich auf eine Verbesserung.

**3. Was kann sich unter uns ändern, ohne dass es jemand genehmigt?**
Listen Sie Modelle, Prompts, Datenquellen und Anbieter-Updates auf. Fragen Sie bei jedem, woher wir wüssten, dass es sich änderte, und wie wir es testen würden. Einigen Sie sich, wo Erkennung oder ein Test hinzuzufügen ist.

**4. Könnte die Person, die in unserem Prozess KI-Ausgaben prüft, einen schweren Fehler realistisch fangen?**
Schauen Sie auf Volumen, Informationen, Zeit und Befugnis. Testen Sie mit einem gesäten Fehler. Kann Review nicht funktionieren, gestalten Sie den Prozess um, bevor Sie mehr KI hinzufügen.

**5. Welche unserer Regeln fände ein beschäftigter Kollege leicht zu befolgen, und welche würde er umgehen?**
Listen Sie die aktuellen Regeln auf und testen Sie sie an echten Arbeitsabläufen. Besprechen Sie, warum Regeln umgangen werden. Einigen Sie sich auf Änderungen, die den sicheren Weg zum leichten machen.

**6. Was haben uns unsere Lieferanten über ihre KI gesagt, und was haben wir nicht gefragt?**
Prüfen Sie jüngere Fragebögen und Verträge. Identifizieren Sie kritische Lieferanten mit KI-Funktionen und die Informationslücken. Einigen Sie sich auf Fragen für das nächste Review.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams bauen und übernehmen KI-Funktionen und erleben Governance als Reibung oder als Hilfe. Sie sollten Nutzungen früh registrieren, an realistischen Fällen testen, Prompts und Modelle unter Versionskontrolle stellen und Aufsicht entwerfen, die funktioniert. Sie profitieren von schneller Genehmigung für Nutzungen mit geringem Risiko.

### Service- und Betriebsteams

Betriebsteams betreiben KI in Produktion und reagieren auf ihre Incidents. Sie sollten auf Drift achten, Handlungsprotokolle führen, KI-Incidents taggen und die Befugnis und die Mittel haben, ein System abzuschalten. Sie nutzen auch selbst KI und sollten dieselben Regeln befolgen.

### Führung und Governance

Führungskräfte setzen den Risikoappetit und sind für Ergebnisse rechenschaftspflichtig. Sie sollten Register, Evaluierung und Monitoring finanzieren, akzeptieren, dass manche KI-Nutzungen nicht bestehen, unabhängige Entdeckung von Nutzungen verlangen und Incidents und Zeit bis zur Eindämmung verfolgen. Governance-Gremien sollten Regeln kurz halten, sie regelmäßig überprüfen und sicherstellen, dass Personal und Nutzer eine Stimme haben.

### Kunden und Nutzer

Nutzer sind von KI-Entscheidungen und -Ausgaben betroffen, oft ohne es zu wissen. Sie verdienen zu erfahren, wann KI in Angelegenheiten beteiligt ist, die sie betreffen, einen Menschen zu erreichen und Entscheidungen anzufechten. Beschwerden und Einsprüche sind wesentlicher Beleg dafür, wie Governance in der Praxis funktioniert.

## In der Praxis: ein Beispiel aus dem Service-Management

Die Technologie- und Betriebssparte einer Regionalbank übernimmt eine KI-Richtlinie, nachdem ein Mitarbeiter Kundendaten in ein öffentliches Werkzeug eingefügt hat. Das Compliance-Team veröffentlicht ein Register und erwartet, dass jede Nutzung aufgelistet wird. Die Zahlen unten sind illustrativ.

Drei Monate später listet das Register 38 KI-Nutzungen. Die Leiterin des Technologierisikos prüft auf unabhängigem Weg: Beschaffungs- und Spesendaten, Identitätsprotokolle mit Anmeldungen bei KI-Services, Netzwerkdaten und eine anonyme Mitarbeiterumfrage. Die Entdeckung findet 94 Nutzungen, die Registerabdeckung beträgt also 40 Prozent. Siebzehn sind Funktionen in Werkzeugen, die die Bank bereits lizenziert, und zwölf sind öffentliche Werkzeuge, die Beschäftigte nutzen. Von den 38 registrierten Nutzungen haben nur 14 eine Risikoklasse, und die drei mit dem höchsten Risiko, ein Modell, das Betrugsalarme bewertet, ein Chatbot für Kunden und ein Werkzeug, das Beschwerden zusammenfasst, hatten im letzten Jahr keine Evaluierung. Änderungen an der Konfiguration des Betrugsmodells und an den Prompts des Chatbots nehmen die Teams direkt vor, und die Change-Datensätze des letzten Quartals decken 21 Prozent der in der Versionshistorie gefundenen Änderungen ab. Eine Stichprobe von 60 vom Modell abgewiesenen Betrugsalarmen zeigt bei 52 eine erfasste menschliche Prüfung, aber eine gesäte Menge von fünf bekannten Fehlern wurde nur von einem Reviewer entdeckt, weil Reviewer jeweils mehrere Hundert Alarme am Tag bearbeiten. Ein Incident, bei dem der Chatbot Kunden einen veralteten Gebührenbetrag nannte, wurde durch eine Beschwerde gefunden, und es dauerte sechs Tage, ihn einzudämmen, weil niemand die Befugnis hatte, ihn abzuschalten.

Die Leiterin des Technologierisikos gestaltet die Governance mit den Teams neu. Eine kurze Selbstregistrierung mit fünf Fragen bringt Nutzungen mit geringem Risiko binnen Minuten ins Register, und ein Amnestiezeitraum ermutigt Beschäftigte, die Werkzeuge aufzulisten, die sie nutzen. Risikoklassen beruhen auf Schaden, Daten und Autonomie. Nutzungen mit höherem Risiko brauchen eine Bewertung, eine Evaluierung gegen realistische und gegnerische Fälle und einen definierten Entwurf der Aufsicht. Modelle, Prompts und Werkzeuge kommen unter Change-Kontrolle mit Tests im Verhältnis zum Risiko, und die Prompts des Chatbots werden mit Rollback versioniert. Der Prozess der Betrugsalarme wird so umgestaltet, dass Reviewer weniger, besser priorisierte Alarme bearbeiten, und gesäte Fehler prüfen ihre Erkennung. Ein benannter Eigner für jede Nutzung mit hohem Risiko hat die Befugnis, sie abzuschalten, und die Incident-Reaktion deckt KI ab. Die Cloud- und KI-Lieferanten der Bank werden gefragt, welche KI-Funktionen sie nutzen und wie Änderungen mitgeteilt werden.

Zwei Quartale später beträgt die Registerabdeckung nach unabhängiger Entdeckung 88 Prozent, alle Nutzungen mit hohem Risiko sind im Zyklus bewertet und evaluiert, die Abdeckung der Change-Kontrolle beträgt 84 Prozent, die Erkennung gesäter Fehler durch Reviewer steigt auf 4 von 5, und die mediane Zeit bis zur Eindämmung eines KI-Incidents beträgt 3 Stunden. Beschäftigte nutzen für die meisten Aufgaben genehmigte Werkzeuge. Ein leitender Manager bittet um ein Ziel von 100 Prozent Registerabdeckung. Die Leiterin des Technologierisikos schlägt vor, die Abdeckung gegen unabhängige Entdeckung, die Aktualität der Bewertung und die Incident-Bearbeitung zu verfolgen, und erklärt, dass ein Register ohne Entdeckung 100 Prozent erreichen und dennoch das Risiko verpassen kann. Die Entscheidung wird festgehalten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Steuern Sie KI wie eine Änderung an einem laufenden Service, mit einem leichten, regelmäßigen Review und Stakeholdern am Tisch, statt einer einmaligen Genehmigung. Zu beachten ist, dass schwere Genehmigungs-Gates Teams dazu bringen, KI-Nutzung zu verbergen.

### KI

Führen Sie ein Register jeder KI-Nutzung mit Eigner, Risikoklasse, Evaluierungsdatum und einem Punkt menschlicher Aufsicht und messen Sie die Abdeckung gegen unabhängige Entdeckung. Testen Sie, dass Aufsicht ausgeübt werden kann. Zu beachten ist, dass dieses Buch keinen Rechtsrat gibt und Pflichten nach Ort und Zeit variieren; prüfen Sie sie also mit Ihrem eigenen Rechtsberater.

### Automatisierung

Automatisieren Sie Entdeckung und Beleg-Erfassung für Änderungen an Modellen, Prompts und Daten und messen Sie die Automatisierung an verpassten Änderungen. Zu beachten ist, dass automatisierte Evaluierungs-Suiten testen, wofür sie gebaut wurden; fügen Sie also neue Tests hinzu, wenn Fehler auftreten.

### Analytik

Berichten Sie die Aktualität von Bewertungen und Evaluierungen mit Daten und Zählungen. Die Entscheidung, die dies untermauert, ist, wo die Aufsicht dünn ist. Zu beachten ist, dass Incident-Zahlen für KI klein und ungleichmäßig sind; kombinieren Sie sie also mit Berichten über Beinahe-Vorfälle.

## Branchenperspektive

**Startup.** Geschwindigkeit zählt, und die Risiken sind vor allem Datenexposition und unzuverlässige Ausgaben. Führen Sie eine kurze Liste von Werkzeugen und Nutzungen mit Eignern, setzen Sie einige klare Regeln, welche Daten wo genutzt werden dürfen, und versionieren Sie Prompts. Überprüfen Sie erneut, wenn die Forderungen der Kunden nach Gewissheit wachsen.

**Kleinunternehmen.** Beschäftigte werden öffentliche Werkzeuge nutzen. Bieten Sie eine genehmigte Option, schreiben Sie eine einseitige Regel zu Daten und überprüfen Sie, wie Werkzeuge genutzt werden. Fragen Sie Lieferanten nach ihren KI-Funktionen und führen Sie Buch, wo KI Entscheidungen über Kunden oder Personal trifft.

**Großunternehmen.** Größe braucht ein Betriebsmodell: Register, Risikostufen, Evaluierungsstandards, Change-Kontrolle und Incident-Prozess, in vorhandene Risiko- und Sicherheitsfunktionen integriert. Nutzen Sie unabhängige Entdeckung, automatisieren Sie Evaluierung in Pipelines und richten Sie sich an Standards aus. Geben Sie Teams einen schnellen Weg.

**Behörden und öffentlicher Sektor.** Entscheidungen, die Bürger betreffen, bringen Pflichten zu Transparenz, Fairness und Einspruch, und Beschaffungs- und Rechtsrahmen prägen, was erlaubt ist. Führen Sie, wo verlangt, öffentliche Verzeichnisse von Nutzungen mit großer Wirkung, bewerten Sie die Wirkung auf Rechte, halten Sie Menschen bedeutsam in der Schleife und prüfen Sie aktuelles Recht und aktuelle Anleitung (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten umfassen den Aufwand, das Register aufzubauen und zu pflegen, Werkzeuge oder Analyse für die Entdeckung, Risikobewertungen, Evaluierungsmengen und -läufe, Change-Kontrolle für Prompts und Modelle, Monitoring, Schulung und Kapazität für die Incident-Reaktion. Governance fügt bei Nutzungen mit höherem Risiko auch etwas Verzögerung hinzu. Diese Kosten skalieren mit Zahl und Risiko der Nutzungen, was ein Grund ist, die Genehmigung bei geringem Risiko leicht zu halten.

Der Ertrag umfasst vermiedenen Schaden und vermiedene Exposition, weniger Überraschungen bei Prüfungen und regulatorischen Reviews, schnellere sichere Einführung durch klare Regeln und Vertrauen von Kunden und Personal. Bauen Sie den Business Case aus Ihren eigenen Daten: die Zahl der außerhalb des Registers gefundenen Nutzungen und die Daten, die sie berühren, Incidents und ihre Kosten, die in Ad-hoc-Genehmigungen verbrachte Zeit davor und danach und Befunde in Prüfungen. Vermeiden Sie, veröffentlichte Statistiken zu KI-Incidents oder Bußgeldern ohne nachvollziehbare Quelle und Relevanz für Ihren Kontext zu zitieren. Beziehen Sie die Kosten des Nicht-Steuerns ein, zu denen die Möglichkeit erheblichen rechtlichen und Reputationsschadens gehört (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Ein Register, das niemand prüft.** Die Abdeckung sieht hoch aus und verpasst die echten Nutzungen. Nutzen Sie unabhängige Entdeckung.
- **Pauschale Verbote.** Sie treiben Nutzung in den Untergrund. Bieten Sie genehmigte Werkzeuge und einen schnellen Weg.
- **Prompts und Modelle als Konfiguration behandeln, die niemandem gehört.** Verhalten ändert sich unbemerkt. Stellen Sie sie unter Change-Kontrolle.
- **Nur einmal evaluieren.** Systeme driften und ändern sich. Wiederholen Sie planmäßig und bei Änderung.
- **Aufsicht nur dem Namen nach.** Reviewer können nicht fangen, was sie nicht sehen. Testen Sie mit gesäten Fehlern und beheben Sie die Last.
- **Keine Befugnis zum Abschalten.** Eindämmung dauert Tage. Benennen Sie Eigner mit der Macht, ein System zu stoppen.
- **Die KI der Lieferanten ignorieren.** Ihr Risiko umfasst ihres. Fragen, vertraglich binden und neu bewerten.
- **Regeln, die niemand befolgen kann.** Sie werden umgangen. Halten Sie sie kurz und machen Sie den sicheren Weg leicht.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Kennen und klassifizieren | Keine Sicht auf KI-Nutzung | Richtlinie und eine Teilliste | Register mit Eigner und Risikoklasse; unabhängige Entdeckung für die Abdeckung genutzt | Abdeckung, Aktualität der Bewertung und Genehmigungszeiten gesteuert | Gemeinsame Registersicht über Geschäftsbereiche und Lieferanten; Klassen mit Regulierern und Nutzern überprüft |
| Testen und Änderung | Ad hoc | Etwas Evaluierung für manche Nutzungen | Evaluierung an realistischen Fällen; Prompts und Modelle unter Change-Kontrolle | Kontinuierliche Evaluierung und Driftüberwachung; Abdeckung gesteuert | Automatisierte, risikobasierte Evaluierung und Change in Pipelines, unabhängig geprüft |
| Aufsicht und Lernen | Verlass auf Vertrauen | Review existiert im Prinzip | Aufsicht entworfen und beprobt; KI-Incidents getaggt und schuldfrei überprüft | Tests mit gesäten Fehlern, Zeit bis zur Eindämmung und Lieferantenbewertungen gesteuert | Aufsicht, Incident-Lernen und Richtlinie gemeinsam mit Personal, Nutzern und Partnern entwickelt |

## Checkliste

- [ ] Ein Register listet KI-Nutzungen mit Eigner und Risikoklasse, gegen unabhängige Entdeckung geprüft.
- [ ] Ein schneller Weg existiert für Nutzungen mit geringem Risiko und ein tieferer für folgenreiche.
- [ ] Nutzungen mit höherem Risiko haben eine aktuelle Risikobewertung und einen definierten Entwurf der Aufsicht.
- [ ] Evaluierungen an realistischen und gegnerischen Fällen sind aktuell und werden bei Änderung wiederholt.
- [ ] Prompts, Modelle, Werkzeuge und Datenquellen sind versioniert und unter Change-Kontrolle.
- [ ] Produktions-Monitoring achtet auf Drift, Fehler, Überschreibungen und ungewöhnliche Handlungen.
- [ ] Aufsicht wird mit gesäten Fehlern getestet, und die Last der Reviewer ist realistisch.
- [ ] Audit-Trails stützen Untersuchung innerhalb von Datenschutz- und Aufbewahrungsregeln.
- [ ] KI-Incidents werden getaggt, schuldfrei überprüft, und Eigner können Systeme abschalten.
- [ ] Lieferanten mit KI-Funktionen werden bewertet und zur Mitteilung wesentlicher Änderungen verpflichtet.

## KI-Prompts

**Eine Risikoklassifizierung für KI-Nutzungen entwerfen.**

```text
Propose a simple risk classification (three or four levels) for AI uses in [type of
organization] based on harm if wrong, who is affected, involvement of decisions
about people, autonomy of actions, data sensitivity, and reversibility. For each
level, state example uses, the approvals and evidence required, and the review
cycle. Do not state legal conclusions. List your assumptions and points to confirm
with legal, risk, and security specialists.
```

**Ein Registrierungsformular entwerfen.**

```text
Design a short self-service registration form for new AI uses, with no more than
eight questions, that assigns an initial risk class automatically and routes
higher-risk uses to review. Cover purpose, data, users affected, autonomy, vendor,
and owner. Explain how to keep it quick for low-risk cases. List your assumptions
and risks of misclassification.
```

**Eine Evaluierungsmenge planen.**

```text
We use AI for [task] in [process]. Help design an evaluation set: types of
realistic cases, difficult and adversarial cases, written criteria for correct
and safe outputs, checks for fairness where people are affected, how big a set is
practical, how often to rerun it, and what changes should trigger a rerun. Do not
claim a set is sufficient. List your assumptions and limits.
```

**Einen KI-Incident überprüfen.**

```text
Here is a description of an AI-related incident: [paste, without personal data].
Draft a blameless review: timeline, how it was detected, contributing factors
(data, prompt, model, oversight, supplier, process), impact, what contained it,
and actions with owners. Suggest changes to evaluation, monitoring, and change
control. Do not assign blame to individuals. List your assumptions and open
questions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Kennzahl zu KI-Governance oder -Risiko zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer KI-Governance-Kennzahl unabhängigen Beleg nutzt und seinen Manipulationsvektor und seine Leitplanke trägt.

## Wichtigste Erkenntnisse

- Bauen Sie das KI-Register durch unabhängige Entdeckung und richten Sie die Prüfung am Risiko aus, mit einem schnellen Weg für sichere Nutzungen.
- Behandeln Sie Modelle, Prompts, Werkzeuge und Datenquellen als Changes, die Tests, Genehmigung und Rollback brauchen.
- Evaluieren Sie vor der Nutzung und während der Nutzung, an realistischen und gegnerischen Fällen.
- Entwerfen Sie menschliche Aufsicht, die funktionieren kann, und testen Sie sie mit gesäten Fehlern.
- Behandeln Sie KI-Incidents wie andere Incidents, mit schuldfreiem Review, und geben Sie Eignern die Macht, Systeme abzuschalten.
- Fragen Sie Lieferanten nach ihrer KI, halten Sie die Regeln kurz und den sicheren Weg leicht.

## Quellen und weiterführende Literatur

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. ISO/IEC 23894, *Information technology: Artificial intelligence: Guidance on risk management*, International Organization for Standardization, 2023.
4. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
5. Organisation for Economic Co-operation and Development, *OECD AI Principles*, 2019 (updated 2024).
6. Mitchell, M., et al., "Model Cards for Model Reporting," *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias).
9. Wikipedia, [Prompt injection](https://en.wikipedia.org/wiki/Prompt_injection).
10. Wikipedia, [Artificial Intelligence Act](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act).
11. Wikipedia, [Responsible AI](https://en.wikipedia.org/wiki/Responsible_AI).
12. Wikipedia, [Regulation of artificial intelligence](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).
13. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
