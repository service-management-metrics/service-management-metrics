# Självskattning av mognad

En samlad självskattning för ett team. Den använder den gemensamma femnivåskalan (Initiera, Utveckla, Standardisera, Styra, Orkestrera) i två vyer: de sex dimensionerna i ett mätetalsprogram och de mätetalsområden som täcks av del 2 till 10. Den tar ungefär en timme. Den är ett samtalsverktyg och inte en certifiering, och den är inte densamma som processmognadsskalorna i ITIL, ISO/IEC 33000 eller Capability Maturity Model. Resultaten stannar hos teamet (se ämne 11.4, Mognadsmodell för mätetalsprogram).

## Så här genomför du den

1. **Samla teamet i en timme** med en facilitator som inte är teamets chef. Visa skalan nedan.
2. **Markera enskilt.** Var och en markerar den nivå hen tror att teamet ligger på, för varje rad, på egen hand.
3. **Jämför och diskutera.** Skillnader avslöjar olika erfarenheter av samma praxis. Be om ett exempel för varje nivå som hävdas ("Vilket beslut förra kvartalet?").
4. **Enas om en teambild** och skriv ned beläggen bakom den.
5. **Välj ett eller två små nästa steg,** vart och ett möjligt att slutföra på ett kvartal, med en ägare och ett datum. Lägg dem i förbättringsregistret (se ämne 9.5, Mätetal för ständig förbättring).
6. **Låt resultatet stanna hos teamet.** Dela bara aggregerade intervall och teman bortom teamet. Räkna aldrig ihop raderna till ett enda betyg och rangordna aldrig team.

Bedöm på nytt ungefär två gånger om året och efter en omorganisation, ett verktygsbyte eller ett brott mot mätetalsstadgan. Räkna med att vissa rader halkar tillbaka och behandla det som information.

## Skalan

| Nivå | Namn | Så ser det ut |
| --- | --- | --- |
| 1 | **Initiera** | Teamet känner igen praxisen men har inget konsekvent sätt att utföra den. Arbetet är ad hoc, beror på individer och är mestadels odokumenterat. |
| 2 | **Utveckla** | Vissa team har fungerande praxis, men den skiljer sig från team till team. Tidiga verktyg, mallar och vanor finns men delas eller förväntas inte. |
| 3 | **Standardisera** | Ett gemensamt, lättviktigt angreppssätt är nedskrivet och används över team. Roller är tydliga. Angreppssättet är en startpunkt som team får anpassa med ett angivet skäl. |
| 4 | **Styra** | Utfall mäts och ses över. Luckor leder till förbättringsarbete som är planerat och försett med resurser. |
| 5 | **Orkestrera** | Praxisen samordnas över team, leverantörer och kunder och anpassas ständigt när förhållandena ändras. Förbättring är rutin och kommer från alla. |

Högre är inte alltid bättre. Välj den nivå som passar din storlek, risk och dina behov och skriv ned varför.

## Vy 1: mätetalsprogrammet

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Frågor och syfte | Mått samlas därför att data finns | Vissa team anger de frågor de ställer | Publiker och frågor nedskrivna; mått kopplade till dem | Täckning av frågor ses över; obesvarade frågor driver nya mått | Publiker, inklusive kunder och leverantörer, formar måtten |
| Definitioner och ägarskap | Definitioner varierar per person | Vissa skrivna; informella ägare | Katalog med definition, källa, ägare och begränsningar | Fullständighet i definitioner och ifrågasättanden hanteras | Definitioner samägs över team och leverantörer |
| Data och verktyg | Manuell och skör | Vissa automatiska flöden | Testade pipelines, delat lager, portabla data | Tillförlitlighet, avstämning och beredskap för utträde hanteras | Federerade pipelines med delade kontrakt |
| Användning i beslut | Tal visas, används sällan | Används i vissa översyner | Regelbundna översyner som registrerar beslut | Beslutsbelägg följs och agerar man på | Beslut länkade över team till utfall |
| Förtroende och trygghet | Rädsla eller likgiltighet | Muntliga försäkringar | Skriven stadga; individvyer av; trygghetsenkät | Brott ses över öppet; signaler om öppenhet hanteras | Förtroende är rutin; programmet formas av personal och partner |
| Översyn och utveckling | Ingen | Enstaka uppstädning | Periodisk översyn med team; avvecklingsregel | Bedömningssteg finansieras och slutförs | Programmet förbättras ständigt av alla |

## Vy 2: mätetalsområdena

För varje område, markera den nivå som bäst beskriver hur ditt team mäter och använder det i dag. Hoppa över områden som inte gäller. Uppslagen är exempel på vad ett team på nivå 3 kan säga.

| Område | Hemdel | Ett team på nivå 3 kan säga |
| --- | --- | --- |
| Flöde och kontinuerlig leverans | Del 2 | Vi känner våra led- och cykeltider som fördelningar, vi begränsar pågående arbete och vi läser leveranshastighet bredvid stabilitet (se ämne 2.8, DORA-mätetal). |
| Servicedesk, incidenter och förfrågningar | Del 3 | Vi mäter tid till en användbar lösning med återkommande kontakter, och våra större incidenter har en standardiserad granskning (se ämne 3.4, Mätetal för större incidenter). |
| Problem, ändring och release | Del 4 | Våra ändringar följer en väg i proportion till risken, och vi följer omarbete och kostnaden för kända fel (se ämne 4.3, Mätetal för ändringsmöjliggörande). |
| Servicenivå, tillgänglighet och tillförlitlighet | Del 5 | Våra servicenivåer är definierade utifrån användarutfall, med en felbudget som används i beslut (se ämne 5.2, SLI:er, SLO:er och felbudgetar). |
| Kund och upplevelse | Del 6 | Vi frågar användare om deras upplevelse på sätt som inte tröttar dem, och vi agerar på svaren (se ämne 6.2, Överenskommelser om upplevelsenivå). |
| Tillgångar, konfiguration och ekonomi | Del 7 | Vi vet vad vi äger och driver, och kostnaden per användningsenhet för våra tjänster (se ämne 7.5, Tjänstekostnad och enhetsekonomi). |
| Säkerhet, risk, regelefterlevnad och leverantörer | Del 8 | Våra belägg för risk och kontroller är verkliga, våra leverantörer mäts på utfall och inget av det manipuleras för revision (se ämne 8.2, Mätetal för risker och kontroller). |
| Människor, team och förbättring | Del 9 | Vi hör från våra medarbetare om takt och välbefinnande, och vi följer förbättringsarbete hela vägen till resultat (se ämne 9.1, Teamhälsa och utvecklarupplevelse). |
| Mätetal för AI, automatisering och analys | Del 10 | Vi jämför AI-stött arbete med en baslinje, stickprovar utdata för användbarhet och registrerar våra AI-användningar (se ämne 10.1, AI i mätning av tjänstehantering). Våra automatiseringar och pipelines har ägare, kontroller efter körning och ett testat sätt att göra ogjort (se ämne 10.6, Mätetal för automatisering och orkestrering, och ämne 10.7, Mätetal för pipelines och automatiserade ändringar). Vi visar datakvalitet och osäkerhet bredvid våra tal och loggar våra prognoser mot utfall (se ämne 10.8, Mätetal för analys och datakvalitet, och ämne 10.9, Mätetal för prognoser och prediktiv analys). |
| Grunder i ITIL 5 | Del 1 | Vi har en estatkarta med ägare, utfallsuttalanden med belägg och en verifieringslogg för påståenden om ITIL 5, var och en märkt verifierad eller obekräftad (se ämne 1.8, Mätning av ITIL 5 och värdeutfall). |

## Att registrera resultatet

```text
Team: [namn]   Datum: [datum]   Facilitator: [namn]
Deltagare: [roller]

Vy 1
| Dimension | Teamets bild | Belägg | Nästa steg (ägare, datum) |
| [rad] | [1-5] | [exempel] | [steg] |

Vy 2
| Område | Teamets bild | Belägg | Nästa steg |
| [rad] | [1-5 eller ej tillämpligt] | [exempel] | [steg] |

Skillnader som överraskade oss: [anteckningar]
Vad vi aldrig kommer att använda detta till: [rangordning, finansiering, medarbetarsamtal]
Nästa bedömning: [datum]
```

## Att läsa profilen

- **Leta efter den begränsande raden.** Förtroende och definitioner begränsar ofta de andra. En liten vinst där kan låsa upp resten.
- **Jämför rader, inte team.** Den användbara frågan är var ditt team är starkare eller svagare, inte hur det står sig mot ett annat.
- **Fråga vad som ändrades.** En ökning efter ett kvartal bör backas av ett beslut, en vana eller ett resultat du kan namnge. En ökning utan belägg tyder på att markeringen var optimistisk.
- **Stanna vid bra nog.** Ett team kan rimligen stanna på nivå 3 i vissa rader i flera år.
