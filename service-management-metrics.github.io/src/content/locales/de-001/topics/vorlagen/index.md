# Vorlagen

Vier Vorlagen zum Kopieren und Anpassen: eine Kennzahlen-Charta, eine Kennzahlenkarte, eine Dashboard-Spezifikation und eine Review-Agenda. Sie sind Ausgangspunkte. Ersetzen Sie den Text in Klammern, löschen Sie, was nicht passt, und halten Sie jedes Dokument, wo Sie können, bei einer Seite.

## Kennzahlen-Charta

```text
Kennzahlen-Charta für [Team, Service oder Organisation]

Zweck
Wir messen [Services und Arbeitsweisen], um [zu verbessern ... / zu sehen ... /
zu entscheiden ...]. Die Kennzahlen helfen uns, unsere eigene Arbeit zu sehen
und zu verbessern. Sie sind kein Weg, Einzelne zu beurteilen.

Wofür die Daten da sind
- Team-Reviews, wie die Arbeit läuft und was als Nächstes auszuprobieren ist.
- Entscheidungen, wo in Services, Werkzeuge und Fähigkeiten zu investieren ist.
- Berichterstattung, die [Regulierer/Kunden] verlangen: [Liste, getrennt geführt].

Wofür die Daten nie genutzt werden
- Einzelne zu ordnen oder zu vergleichen.
- Individuelle Leistungsbeurteilungen, Bezahlung, Beförderung oder Entlassung.
- [Fügen Sie die Sorgen hinzu, die Ihre Teams äußerten.]

Wer was sieht
- Jedes Team sieht seine eigenen Daten zuerst und besitzt die Deutung.
- [Rolle] sieht aggregierte Trends von Services und Teams.
- Sichten auf Einzelebene sind in [Werkzeugen] abgeschaltet.

Gehaltene Daten
- [Was erhoben wird, aus welchen Systemen, wie lange.]

Anfechtungen
- Jede Person darf eine Zahl anfechten. Wir antworten binnen [Zahl] Arbeitstagen.
- Kontakt: [Name oder Gruppe].

Verstöße
- Melden Sie jede Nutzung entgegen dieser Charta an [Weg]. Ergebnisse werden
  ohne Namen veröffentlicht.

Review
- Wir überprüfen diese Charta alle [sechs Monate] mit den Teams.

Unterzeichnet: [Sponsor], [Teamvertreter]   Datum: [Datum]
```

## Kennzahlenkarte

```text
Kennzahlenkarte: [Name der Kennzahl]

Frage, die sie beantwortet: [die Frage, die das Publikum stellte]
Entscheidung, die sie informiert: [was jemand anders tun könnte]
Definition: [in einfachen Worten]
Formel: [wie sie berechnet wird]
Einheit: [Einheit]   Rhythmus: [wie oft]
Regeln für Uhr oder Grenzen: [wann das Zählen beginnt, endet, pausiert]
Datenquelle: [System und Feld]   Aktualisierung: [Intervall]
Eigner: [Rolle]   Person, die man fragen kann: [Name oder Gruppe]
Publikum: [Team, Serviceeigner, Führung]
Ebene: [Team, Service oder System. Nie eine Einzelperson.]
Darstellung: [Median und Perzentil, Run Chart, Verteilung]
Basislinie: [Zeitraum und Wert aus unseren eigenen Daten]
Bekannte Grenzen: [Lücken, Änderungen der Eingabegewohnheiten, Stichprobengröße]
Manipulationsvektor: [wie sie besser aussehen könnte, ohne besser zu sein]
Leitplanke: [gekoppelte Kennzahl oder Praxis]
Begleitendes Ergebnis: [das Ergebnis, mit dem sie zu lesen ist]
Verwandtes Thema: (siehe Thema [N.M], [Titel])
Ausmustern, wenn: [Bedingung]
Zuletzt überprüft: [Datum]   Änderungen seit dem letzten Review: [Notizen]
```

## Dashboard-Spezifikation

```text
Dashboard-Spezifikation: [Name]

Publikum: [Team, Serviceeigner, Führung]
Eigner: [Rolle]   Review-Rhythmus: [monatlich oder vierteljährlich]   Review-Datum: [Datum]
Fragen, die es beantwortet
1. [Frage]
2. [Frage]

Kennzahlen (nicht mehr als etwa neun)
| Kennzahl | Frage | Begleitende Leitplanke | Darstellung | Quelle | Aktualisierung |
| [Name] | [Nr.] | [Name] | [Sparkline / Run Chart / Verteilung] | [System] | [Intervall] |

Kontext, der zu jedem Wert gezeigt wird
- Trend über [Zeitraum], Ereignisnotizen, Link zur Definition, Stichprobengröße, wo klein.

Statusfarben
- [Keine, oder die genannte Regel, die gewöhnliche Schwankung berücksichtigt.]

Zugriff
- [Wer was sehen darf. Sichten auf Einzelebene: aus.]

Datenqualitätsprüfungen
- [Aktualität, Zeilenzahlen, Abgleich mit der Quelle.]

Ausmusterung
- Von diesem Dashboard ersetzte Berichte: [Liste] ausgemustert am [Datum].
- Kennzahlen, die auszumustern sind, wenn: [Bedingungen].

Vom Publikum genehmigt: [Namen oder Rollen]   Datum: [Datum]
```

## Review-Agenda

Ein Team-Review von 45 Minuten, monatlich oder vierteljährlich. Es ist ein Gespräch über die Arbeit, vom Team geführt.

```text
Kennzahlen-Review für [Team], [Datum]

1. Check-in (5 Minuten)
   Wie läuft die Arbeit? Gibt es etwas, das die Zahlen nicht zeigen?

2. Ereignisse seit dem letzten Mal (5 Minuten)
   Releases, Incidents, Besetzungswechsel, Richtlinienänderungen. Notizen zur
   Anzeige hinzufügen.

3. Trends und Verteilungen (15 Minuten)
   Bei jeder Kennzahl: Was sehen wir? Ist es gewöhnliche Schwankung oder ein Signal?
   Jede Kennzahl mit ihrer Leitplanke lesen. Aktualität der Daten und bekannte
   Lücken prüfen.

4. Entscheidungen (10 Minuten)
   Was probieren wir aus, stoppen oder ändern wir? Jede Entscheidung erfassen,
   auch die Entscheidung zu warten und zu beobachten. Einen Eigner und ein Datum
   zum erneuten Hinsehen benennen.

5. Letzte Entscheidungen (5 Minuten)
   Halfen die Entscheidungen vom letzten Mal? Was haben wir gelernt?

6. Die Kennzahlen selbst (5 Minuten)
   Welche Kennzahl verwirrte oder täuschte uns? Welche könnten wir ausmustern?
   Was fehlt?

Erfassen: Entscheidungen, Eigner, Daten, Änderungen an Kennzahlen.
Regel: kein Vergleich von Einzelnen. Zahlen beschreiben das System.
```
