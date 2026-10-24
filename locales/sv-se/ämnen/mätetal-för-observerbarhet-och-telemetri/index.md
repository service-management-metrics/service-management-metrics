# Mätetal för observerbarhet och telemetri

**Observerbarhet är förmågan att ställa nya frågor till en körande tjänst och få svar ur dess egna signaler, så mät hur mycket av tjänsten du kan se, hur bra signalerna är, hur fort de leder till förståelse och vad telemetrin kostar, i stället för att räkna instrumentpaneler eller datavolym.**

## Översikt och motiv

[Observerbarhet](https://en.wikipedia.org/wiki/Observability_(software)) är en egenskap hos ett system: hur väl dess inre tillstånd kan förstås utifrån de utdata det producerar. I praktiken kallas dessa utdata [telemetri](https://en.wikipedia.org/wiki/Telemetry) och grupperas vanligen i tre slag. **Loggar** är register över enskilda händelser. **Mätvärden** är numeriska mätningar över tid, till exempel förfrågningsfrekvens eller felfrekvens. **Spår** följer en enskild förfrågan genom delarna av ett distribuerat system. Många team lägger till profiler, händelser från användarens enhet och affärshändelser.

Övervakning ställer kända frågor, såsom "är felfrekvensen över ett tröskelvärde?", och larmar när svaret är ja. Observerbarhet syftar till att låta ett team ställa frågor det inte planerat för, såsom "varför är förfrågningar från den här regionen långsamma för det här kundsegmentet?". Båda behövs. Övervakning behandlas i tidigare ämnen (se ämne 5.5, Mätetal för övervakning och larmkvalitet). Det här ämnet täcker kvaliteten på själva signalerna och praxis att förstå system utifrån dem.

Telemetri har kostnader och risker. Att samla in allt är dyrt i lagring och pengar och kan fånga personuppgifter eller konfidentiella data. Att samla in för lite lämnar ett team blint under en incident. Telemetri är också data i den mening som det föregående ämnet avser (se ämne 10.8, Mätetal för analys och datakvalitet), så den har frågor om fullständighet, aktualitet och härkomst. Och eftersom AI-verktyg läser telemetri för att sammanfatta incidenter och föreslå orsaker avgör signalernas kvalitet om sammanfattningen är rätt.

Termer som används här. En **signal** är en ström av telemetri, till exempel en logg, ett mätvärde eller ett spår. **Instrumentering** är koden som producerar signaler. **Kardinalitet** är antalet distinkta värden på en etikett på ett mätvärde, och hög kardinalitet ökar kostnaden. En **servicenivåindikator (SLI)** mäter en aspekt av tjänsten så som användare upplever den (se ämne 5.2, SLI:er, SLO:er och felbudgetar). **Stickprovstagning** behåller bara en andel av datan, vilket sparar kostnad och förlorar detaljer. **Lagringstid** är hur länge data sparas. **Korrelation** innebär att länka signaler som beskriver samma förfrågan eller händelse genom delade identifierare.

## Nyckelprinciper

- **Instrumentera för frågor, inte för volym.** Välj signaler som besvarar frågor om användarupplevelse och systembeteende.
- **Mät vad du kan se och vad du inte kan.** Täckning av tjänster och resor visar blinda fläckar.
- **Signaler måste vara länkade.** Identifierare som förbinder en logg, ett spår och ett mätvärde gör förståelsen snabb.
- **Telemetri är en kostnad och en risk.** Budgetera den och håll personuppgifter och konfidentiella data utanför om det inte finns ett skäl och en regel.
- **Observerbarhet tjänar människor.** Mät tid till förståelse och upplevelsen hos dem som har jour.
- **Öppna standarder minskar inlåsning.** Föredra gemensamma format för instrumentering där de passar och kontrollera gällande specifikationer.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Täckning av instrumentering | Andel tjänster och kritiska användarresor som sänder de överenskomna kärnsignalerna | tjänster eller resor med loggar, mätvärden och spår som uppfyller den överenskomna standarden / tjänster eller resor i tjänstekatalogen | procent | Tjänstekatalog och inventering av telemetriplattformen | Övervakning och händelsehantering; konfigurationshantering av tjänster | Definition av klart för nya tjänster | Kvartalsvis |
| Fullständighet i spår | Andel stickprovade förfrågningar med ett obrutet spår från ingång till sista beroende | förfrågningar vars spår omfattar alla förväntade hopp / förfrågningar i ett kontrollerat stickprov | procent | Spårningsplattform och en stickprovskontroll | Övervakning och händelsehantering | Test av observerbarhet i en funktion | Månadsvis |
| Grad av signalkorrelation | Andel incidenter där loggar, mätvärden och spår kunde kopplas ihop med en identifierare | incidenter med en fungerande koppling i tidslinjegranskningen / granskade incidenter | procent | Incidentgranskningar och spårningsplattform | Incidenthantering; problemhantering | Retrospektiva åtgärder | Kvartalsvis |
| Tid till förståelse | Tid från upptäckt till en registrerad fungerande förklaring av orsaken | median och 85:e percentil av (tiden då den första fungerande orsaken registreras minus tiden då incidenten upptäcktes) för incidenter med en registrerad orsak | minuter | Incidenttidslinje och granskningsanteckningar | Incidenthantering | Skuldfri granskning | Kvartalsvis |
| Telemetrikostnad per tjänst | Telemetriutgift hänförd till en tjänst, per enhet av tjänstens användning | telemetrikostnad fördelad på tjänsten / en angiven enhet av användning, till exempel 1 000 förfrågningar | valuta per enhet | Telemetrifakturering och användningsdata | Ekonomistyrning | Kostnad som designindata | Månadsvis |
| Känsliga data i telemetri | Antal bekräftade poster som innehåller data som inte borde finnas där | bekräftade fall funna genom skanning eller granskning under perioden | antal | Telemetriskanningar och granskningar | Informationssäkerhetshantering | Definition av klart; integritetsgranskning | Månadsvis |
| Incidenter i blinda fläckar | Incidenter som först rapporterats av användare där telemetrin inte visade några tecken | incidenter först rapporterade av användare utan relaterat larm eller relaterad signal / incidenter under perioden | procent | Incidentregister och granskningsanteckningar | Incidenthantering; övervakning | Retrospektiva åtgärder | Kvartalsvis |

Täckning av instrumentering beror på en överenskommen kärnstandard, till exempel förfrågningsfrekvens, felfrekvens, latens och en spåridentifierare, angiven i mätetalsregistret. Tid till förståelse räknar bara incidenter där en orsak registrerats, så incidenter utan känd orsak redovisas separat.

## Rekommendationer

### Bestäm vad som ska ses

**1. Börja från användarresor och servicenivåer.** Lista de resor som spelar roll och indikatorerna som visar om användare lyckas. Instrumentera dem först, eftersom de knyter telemetrin till utfall (se ämne 5.2, SLI:er, SLO:er och felbudgetar).

**2. Kom överens om en kärnstandard.** Definiera de minsta signaler varje tjänst sänder och konventionerna för namn och identifierare. Lägg standarden i definitionen av klart för nya tjänster.

**3. Kartlägg täckningen ärligt.** Jämför tjänstekatalogen med de tjänster som sänder kärnsignalerna. Lista luckorna och deras ägare och ta itu med de med störst användarpåverkan först.

### Gör signaler användbara

**4. Länka signaler med delade identifierare.** För en förfrågnings- eller spåridentifierare genom loggar, mätvärden och spår så att en person kan gå från en långsam förfrågan till de exakta loggraderna. Testa detta i en övning.

**5. Testa instrumentering som kod.** Ett spår som bryts vid en kö, eller en logg med fel tidszon, slösar bort en incident. Kontrollera fullständighet med stickprovade förfrågningar och rätta brotten.

**6. Styr kardinalitet och stickprovstagning medvetet.** Etiketter med hög kardinalitet kan skapa stora kostnader, och stickprovstagning kan släppa den sällsynta händelse du behöver. Bestäm var du ska ta stickprov, registrera frekvensen och behåll fullständiga data för fel och långsamma förfrågningar där det är överkomligt.

**7. Håll känsliga data utanför.** Bestäm vad som inte får förekomma i loggar och spår, till exempel personuppgifter, inloggningsuppgifter och hälso- eller betalningsuppgifter. Skanna efter det och rätta källan. Kontrollera skyldigheter med din juridiska rådgivare, eftersom den här boken inte ger juridisk rådgivning.

### Mät förståelse

**8. Mät tid till förståelse, inte bara tid till rättelse.** Tiden från upptäckt till en fungerande förklaring visar hur väl signalerna stöder människor. Se över de längsta fallen för att se vilken signal som saknades.

**9. Räkna de blinda fläckarna.** Incidenter som användare hittade först är det tydligaste beläggen för en lucka. För var och en, fråga vilken signal som skulle ha visat den och lägg till den.

**10. Se över instrumentpaneler och larm för användning.** Avveckla instrumentpaneler som ingen öppnar och larm som aldrig leder till handling (se ämne 5.5, Mätetal för övervakning och larmkvalitet). En mindre uppsättning som människor litar på slår en vägg av diagram.

### Hantera kostnad och standarder

**11. Budgetera och fördela telemetrikostnad.** Fördela kostnaden på tjänster och bevaka trenden. Sätt lagringstid efter värde: behåll detaljerade data en kort tid, sammanfattningar längre och radera det som saknar användning.

**12. Föredra öppna standarder där de passar.** Gemensam instrumentering och dataformat, såsom de som underhålls av projektet OpenTelemetry, gör det lättare att byta verktyg. Kontrollera den gällande specifikationen och dina verktygs stöd innan du åtar dig, eftersom standarder och produkter förändras.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Täckning av instrumentering | Att lägga till en minimal signal i varje tjänst för att klara standarden; att undanta svåra tjänster från katalogen | Fullständighet i spår och incidenter i blinda fläckar; se över katalogen för utelämnanden |
| Fullständighet i spår | Att bara stickprova enkla förfrågningar; att räkna delvisa spår som fullständiga | Definiera kontrollstickprovet efter typ av förfrågan; kontrollera täckning av beroenden |
| Grad av signalkorrelation | Att bara granska incidenter som gick bra; att räkna en koppling som finns på papperet | Granska ett slumpmässigt stickprov av incidenter; kör en kopplingsövning |
| Tid till förståelse | Att registrera en orsak tidigt och löst; att lämna orsaken blank för svåra fall | Se över orsaksposter för kvalitet; redovisa incidenter utan orsak separat |
| Telemetrikostnad per tjänst | Att släppa signaler för att skära kostnad; att flytta kostnad till ett annat konto | Incidenter i blinda fläckar och tid till förståelse; stäm av total utgift |
| Känsliga data i telemetri | Att skanna för snävt; att inte rapportera fynd | Skanningstäckning och oberoende granskning; följ tid till borttagning |
| Incidenter i blinda fläckar | Att räkna en incident som upptäckt när ett larm utlöstes efter att användare rapporterat; att definiera signal brett | Jämför tidsstämplar för första signal och första användarrapport; stickprova granskningar |

En sund avläsning är täckning som stiger tillsammans med antalet fullständiga spår och kopplingar, en fallande andel incidenter som användare hittar först, tid till förståelse som faller utan att signaler skärs bort, telemetrikostnad som är förstådd och fördelad och fynd av känsliga data som rättas snabbt.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Samla in allt, behåll länge | Maximal förmåga att utreda | Hög kostnad och risk; svårt att söka |
| Ta stickprov och behåll kort | Lägre kostnad | Kan missa sällsynta händelser och gamla incidenter |
| Standardinstrumentering över tjänster | Konsekvent; snabbare förståelse | Insats att införa; passar kanske inte varje tjänst |
| Teamvald instrumentering | Passar lokala behov | Inkonsekvent; svårt att koppla ihop signaler |
| AI-sammanfattningar av telemetri | Snabbare första bild | Kan vara fel; beror på signalkvalitet |

Slutsatsen är att behålla rika data för fel och långsamma förfrågningar, ta stickprov av det rutinmässiga och sätta lagringstid efter värde. En måttlig, konsekvent, länkad uppsättning signaler slår en stor olänkad hög.

## Frågor att diskutera med teamet

**1. Under vår senaste incident, vad ville vi veta som vi inte kunde ta reda på?**
Detta avslöjar den saknade signalen. Be människor minnas frågan och var de tittade. Räkna med svar som "vilka kunder som berördes" eller "vad som ändrades". Följ upp genom att besluta vem som lägger till signalen och hur den testas.

**2. För vår viktigaste användarresa, hur skulle vi veta att den misslyckades?**
Gå igenom resan steg för steg. Fråga vilken signal som visar framgång vid varje steg och hur snart. Leta efter steg utan signal. Följ upp genom att lägga till en indikator för det svagaste steget.

**3. Kan vi följa en förfrågan från användarens klick till databasen och tillbaka?**
Pröva det live. Lägg märke till var spåret bryts, till exempel vid en kö eller ett anrop till tredje part. Fråga hur lång tid det tar att hitta de matchande loggraderna. Följ upp genom att rätta det största brottet.

**4. Hur mycket spenderar vi på telemetri, och vad får vi för det?**
Många team känner inte till kostnaden per tjänst. Fråga vilka signaler som använts det senaste kvartalet. Diskutera vad som kunde stickprovas eller raderas utan skada. Följ upp genom att välja en signal att se över.

**5. Vilken känslig information kan finnas i våra loggar och spår i dag?**
Sök tillsammans efter exempel. Vanliga fall är e-postadresser, token och fritextfält. Fråga hur det hamnade där och vem som kan läsa det. Följ upp genom att enas om en regel och en skanning.

**6. Hur använder vi AI-verktyg på vår telemetri, och vem kontrollerar vad de säger?**
Lyssna efter okontrollerade sammanfattningar av incidenter. Fråga vilka data som skickas till ett verktyg och på vilka villkor. Diskutera hur en person verifierar en föreslagen orsak. Följ upp genom att skriva en kort regel.

## Fyra perspektiv

### Produkt- och leveransteam

Ni bestämmer vad en tjänst sänder. Lägg till instrumentering när ni bygger, inkludera identifieraren som länkar signaler och testa den som en del av arbetet. Behandla saknad observerbarhet som en brist, eftersom nästa incident kommer att betala för den.

### Service- och driftteam

Ni använder telemetri under press. Berätta för teamet vilka signaler som hjälpte och vilka som saknades och håll larm knutna till användarpåverkan. Följ tid till förståelse och incidenter i blinda fläckar och ta dem till produktteamet.

### Ledning och styrning

Finansiera observerbarhet som en del av tjänsten, med budgetar för telemetri och för att rätta luckor. Be om täckning, incidenter i blinda fläckar och kostnadstrender, inte antalet instrumentpaneler. Sätt regler för känsliga data och för användningen av AI-verktyg på telemetri.

### Kunder och användare

Ni är ofta först med att märka ett problem, så fråga hur ni rapporterar det och hur snabbt det länkas till tjänstens signaler. Era rapporter minskar blinda fläckar, och ni bör få veta vad som lärdes. Fråga vilken telemetri som samlas in om er och varför.

## I praktiken: ett exempel från tjänstehantering

En medelstor nätbutik driver en kassatjänst som består av åtta mindre tjänster. Siffrorna i det här exemplet är illustrativa. Kunder rapporterar enstaka fel vid betalning, men instrumentpanelerna visar friska felfrekvenser och normal latens.

Teamet mäter. Täckning av instrumentering är 6 av 8 tjänster som uppfyller kärnstandarden. En kontroll av 50 stickprovade kassaförfrågningar visar en fullständighet i spår på 62 procent, eftersom spåret bryts vid en meddelandekö och vid ett betalningsanrop till tredje part. I de sex senaste incidenterna är graden av signalkorrelation två av sex, eftersom loggar använder en annan förfrågningsidentifierare än spår. Incidenter i blinda fläckar är tre av sex.

Teamet för en enda förfrågningsidentifierare genom kön och loggarna, lägger till ett spårsegment runt betalningsanropet och instrumenterar de två saknade tjänsterna. Efter en månad når fullständigheten i spår ungefär 90 procent i stickprovskontrollen och nästa incident får en fungerande förklaring på 35 minuter, mot flera timmar förut. De skannar också loggar och hittar kunders e-postadresser i ett felmeddelande, som de tar bort vid källan, och fynden av känsliga data faller till noll nästa månad.

En manipuleringsrisk dyker upp. En chef ber om att höja täckningen av instrumentering genom att markera de två återstående tjänsterna som "utanför omfånget". Teamet avböjer, eftersom antalet incidenter i blinda fläckar skulle förbli högt, och registrerar luckan med en ägare. Det som förblir svårt: telemetrikostnaden per kassaförfrågan har stigit, och teamet har ännu inte beslutat hur länge spår ska behållas. Nästa kvartals plan är att ta stickprov av rutinmässiga spår och behålla fullständiga detaljer för fel.

## Agilitet, AI, automatisering och analys

### Agilitet

Inkludera observerbarhet i definitionen av klart, så att varje inkrement av en tjänst kan förstås i produktion. En god praxis är att se över den senaste incidentens saknade signaler vid det regelbundna förbättringssamtalet och lägga till dem som backlogposter. Varningen är att observerbarhetsarbete ofta skjuts upp till förmån för funktioner, så gör det synligt och skydda tid för det.

### AI

AI kan sammanfatta telemetri, korrelera signaler och föreslå orsaker, och AI-funktioner behöver själva telemetri såsom indata, utdata, latens, kostnad och användarrespons. Para AI-föreslagna orsaker med en mänsklig kontroll och redovisa hur ofta de hade rätt, och övervaka AI-funktioner för kvalitet såväl som tillgänglighet (se ämne 10.1, AI i mätning av tjänstehantering). Varningen är att prompter och svar i loggar kan innehålla personuppgifter, så bestäm vad som ska registreras innan du börjar.

### Automatisering

Automatisera insamling, korrelation och larmning och automatisera kontrollerna av täckning och känsliga data. Mät själva telemetripipelinen på tappade data och fördröjning, eftersom en trasig pipeline ser ut som ett friskt system. Varningen är att automatisk åtgärd som agerar på en signal kan maskera orsaken, så logga vad den gjorde.

### Analys

Använd telemetri för att besvara frågor om användarupplevelse och systembeteende, med SLI:er länkade till utfall. Beslutet detta ger underlag för är var man ska investera i signaler och var man ska minska kostnad. Varningen är att datavolym inte är insikt och att aggregerade mätvärden kan dölja de användare som drabbas, så kontrollera fördelningar och segment och visa antalet händelser bakom varje tal (se ämne 10.8, Mätetal för analys och datakvalitet).

## Branschperspektiv

**Startup.** Börja med några få signaler på den huvudsakliga användarresan och en spåridentifierare i loggar. Undvik att köpa en stor plattform innan frågorna är tydliga och bevaka kostnaden allteftersom användningen växer.

**Småföretag.** Hostade tjänster ger ofta begränsad telemetri. Fråga leverantörer vad du kan se och behåll en enkel extern kontroll av den huvudsakliga resan. Undvik att samla personuppgifter i loggar.

**Storföretag.** Många team och verktyg behöver en delad standard, delade identifierare och central kostnadsfördelning. Låt team lägga till signaler inom standarden och hantera lagringstid och åtkomst centralt.

**Offentlig sektor.** Regler om dataplats, lagringstid och åtkomst formar vad du kan samla in och var det lagras. Dokumentera telemetrins dataflöden och kontrollera skyldigheter med juridiska rådgivare (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna är instrumenteringsarbete, plattforms- eller tjänsteavgifter, lagring per lagringstid och personaltid för att underhålla standarder och instrumentpaneler. Telemetrikostnaden kan växa snabbt med volym och kardinalitet, så budgetera och fördela den.

Avkastningen är snabbare förståelse vid incidenter, färre incidenter som användare hittar först och bättre beslut om var man ska förbättra. Dessa nyttor är verkliga och svåra att prissätta, så undvik att hitta på ett tal. Jämför din egen tid till förståelse och andel incidenter i blinda fläckar före och efter arbetet och ange antagandena som intervall (se ämne 7.7, Avkastning på investering och affärscase). Risksidan är kostnaden för en dataläcka genom telemetri och kostnaden för telemetri som aldrig används.

## Antimönster och fallgropar

- **Att räkna instrumentpaneler.** Fler diagram betyder inte mer förståelse. Mät täckning, kopplingar och tid till förståelse.
- **Att samla in allt för alltid.** Kostnad och risk växer med liten användning. Sätt lagringstid efter värde.
- **Olänkade signaler.** Loggar, mätvärden och spår som inte kan kopplas ihop saktar ned varje incident. Skicka delade identifierare.
- **Att ta bort den sällsynta händelsen genom stickprov.** Felet du behöver är det du släppte. Behåll fel och långsamma förfrågningar.
- **Känsliga data i loggar.** De sprids och är svåra att ta bort. Skanna och rätta källan.
- **Larm på varje signal.** Brus lär människor att ignorera larm. Larma på användarpåverkan.
- **Att lita på AI-sammanfattningar okontrollerat.** De kan vara fel, och signalerna kan vara ofullständiga. Verifiera mot datan.
- **Instrumentering som någon annans jobb.** De som skriver koden vet vad den ska sända. Gör det till en del av arbetet.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Täckning och standard | Signaler varierar per team; blinda fläckar okända | Huvudtjänster instrumenterade | Kärnstandard och täckning följs mot katalogen | Incidenter i blinda fläckar ses över och luckor täpps till | Täckning inbyggd i skapandet av tjänster och justerad efter användarpåverkan |
| Signalkvalitet och länkning | Bara loggar; inga delade identifierare | Vissa spår och mätvärden | Delade identifierare; fullständighet i spår kontrolleras | Tid till förståelse ses över; övningar körs | Signaler anpassar sig automatiskt till de frågor som ställs |
| Kostnad och styrning | Kostnad okänd; inga dataregler | Kostnad synlig totalt | Kostnad fördelad; regler för lagringstid och känsliga data | Kostnad och datafynd ses över i regelbunden rytm | Telemetrikostnad och risk hanteras efter värde över team |

## Checklista

- [ ] En kärnsignalstandard är skriven och ingår i definitionen av klart.
- [ ] Täckning av instrumentering följs mot tjänstekatalogen.
- [ ] En förfrågnings- eller spåridentifierare länkar loggar, mätvärden och spår.
- [ ] Fullständighet i spår kontrolleras på ett stickprov av verkliga förfrågningar.
- [ ] Tid till förståelse registreras för incidenter, med orsaken.
- [ ] Incidenter i blinda fläckar räknas och var och en leder till en signal.
- [ ] Telemetrikostnad fördelas på tjänster, och lagringstid sätts efter värde.
- [ ] Känsliga data i telemetri skannas efter och rättas vid källan.
- [ ] Regler finns för AI-verktyg som läser telemetri.
- [ ] Varje mätetal har en manipuleringsvektor och ett skyddsräcke visat bredvid.

## AI-prompter

**Utforma en kärnsignalstandard.**

```text
Our service is [description], made of [number] components in [technologies]. Our
most important user journeys are [list]. Propose a core signal standard: the
minimum logs, metrics, and traces each component should emit, the naming and
identifier conventions, and how to check conformance. Do not recommend specific
vendors unless I name them. Mark assumptions and list questions I should answer.
```

**Hitta luckor i observerbarhet ur en incidentgranskning.**

```text
Here is a summary of a recent incident, with timeline and notes (personal data
removed): [paste]. Identify moments where the team lacked a signal, could not
link signals, or relied on a guess. For each, propose the signal or link that
would have helped, as a suggestion for the team to evaluate. Do not assert
causes that the text does not support. List what you could not judge and your
assumptions.
```

**Planera en skanning efter känsliga data i telemetri.**

```text
We keep logs and traces in [tools]. Draft a plan to find sensitive data in them:
categories of data to look for, where to look, how to sample, how to report
findings, and how to fix at the source. Do not state legal requirements; list
questions for our legal adviser. List assumptions and what you would need access
to.
```

**Granska manipuleringsrisken i observerbarhetsmåtten.**

```text
We report these observability measures: [paste measures and definitions].
Context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without improving understanding, propose a guardrail, and say
how that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## AI-färdigheter

- [Anomaly analysis](../../../../skills/anomaly-analysis/SKILL.md): använd för att undersöka ovanliga mönster i telemetri innan en orsak fastställs.
- [Root cause analysis](../../../../skills/root-cause-analysis/SKILL.md): använd för att förvandla signaler och tidslinjer till en testad förklaring.
- [Service level agreement](../../../../skills/service-level-agreement/SKILL.md): använd för att koppla indikatorer till de avtal och mål de stöder.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det ämne som täcker ett mätetal och dess parade skyddsräcke.

## Viktigaste slutsatser

- Observerbarhet handlar om att kunna ställa nya frågor till en körande tjänst, så mät täckning, länkade signaler och tid till förståelse.
- Incidenter som användare hittar först är det tydligaste beläggen för blinda fläckar, så räkna dem och lägg till signaler.
- Delade identifierare över loggar, mätvärden och spår är det som gör förståelsen snabb.
- Telemetri kostar pengar och kan läcka känsliga data, så budgetera den, sätt lagringstid efter värde och skanna efter känsligt innehåll.
- Kontrollera AI-sammanfattningar av telemetri mot datan, eftersom de beror på signalkvalitet.

## Referenser och vidare läsning

1. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
2. Wikipedia, [Telemetry](https://en.wikipedia.org/wiki/Telemetry).
3. Wikipedia, [Distributed tracing](https://en.wikipedia.org/wiki/Tracing_(software)).
4. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
5. Wikipedia, [Log management](https://en.wikipedia.org/wiki/Log_management).
6. Wikipedia, [Service-level indicator](https://en.wikipedia.org/wiki/Service-level_indicator).
7. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
