# Mätetal för prognoser och prediktiv analys

**En prognos är ett intervall med en meritlista, inte ett datum eller ett tal att försvara, så mät hur ofta det faktiska resultatet föll inom det angivna intervallet, om intervallet var ärligt med sin bredd och om någon fattade ett bättre beslut tack vare det.**

## Översikt och motiv

[Prognostisering](https://en.wikipedia.org/wiki/Forecasting) uppskattar en framtida kvantitet utifrån tidigare data och angivna antaganden. Tjänsteorganisationer prognostiserar efterfrågan på support, kapacitet för en plattform, datum då ett arbete blir klart, risken att en ändring misslyckas och kostnaden för en tjänst nästa år. Prediktiva modeller, inklusive maskininlärningsmodeller, utvidgar detta till att poängsätta enskilda poster: vilket ärende som kommer att överskrida sitt mål, vilken ändring som är riskfylld, vilken incident som sannolikt återkommer.

Prognoser och förutsägelser misslyckas på vanliga sätt. Det förflutna kanske inte liknar framtiden, eftersom en tjänst, ett team eller ett verktyg har förändrats. Datan kan vara tunn eller partisk. Intervallet kan vara för smalt, eftersom ett enda tal ser mer hjälpsamt ut än ett intervall. Och prognosen kan användas som ett åtagande, så att människor arbetar för att få den att slå in eller döljer det som motsäger den.

Tidigare ämnen gav prognoser för specifika användningar: leveransdatum utifrån genomflöde (se ämne 2.5, Mätetal för leveransprognoser och planering), kapacitet utifrån efterfrågan (se ämne 5.4, Mätetal för kapacitet och prestanda) och kostnad (se ämne 7.5, Tjänstekostnad och enhetsekonomi). Det här ämnet ger den allmänna metoden för att mäta kvaliteten på vilken prognos eller förutsägelse som helst, som gäller alla dem. Det täcker också prediktiva modeller vars utdata styr en handling, där kostnaden för en felaktig förutsägelse faller på någon.

Termer som används här. En **punktprognos** är ett enda förutsagt värde. Ett **prognosintervall** är ett intervall avsett att innehålla det faktiska värdet med en angiven sannolikhet. **Kalibrering** är överensstämmelsen mellan angiven sannolikhet och observerad frekvens: av de prognoser som sade 80 procent bör ungefär 80 procent slå in. **Prognosfel** är skillnaden mellan prognos och utfall. En **baslinjeprognos** är en enkel metod, såsom "samma som förra perioden", mot vilken en mer komplex metod jämförs. En **falsk positiv** är en förutsägelse av en händelse som inte inträffar, och en **falsk negativ** är ett misslyckande att förutsäga en som inträffar. **Drift** är en förändring i datan eller i sambandet mellan indata och utfall som minskar en modells riktighet över tid.

## Nyckelprinciper

- **Prognostisera i intervall och för en meritlista.** En prognos som aldrig kontrolleras kan inte förbättras.
- **Jämför med en enkel baslinje.** En komplex modell som inte slår "samma som förra perioden" förtjänar inte sin kostnad.
- **Kalibrering spelar lika stor roll som riktighet.** En prognos som säger 90 procent bör ha rätt ungefär nio gånger av tio.
- **Anpassa kostnaden för fel efter beslutet.** Ett falskt larm och en miss kostar inte lika mycket.
- **Bevaka drift.** Prognoser försämras när världen förändras, så övervaka dem.
- **En prognos är inte ett åtagande.** Förvandla den inte till ett mål för människor.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Täckning av prognosintervall | Andel faktiska utfall som föll inom det angivna prognosintervallet | utfall inom intervallet / utvärderade prognoser; utvärderade prognoser är de vars utfall är känt | procent | Prognoslogg och utfall | Kapacitets- och prestandahantering; ekonomistyrning | Prognos med intervall utifrån genomflöde | Kvartalsvis |
| Prognosfel | Typisk storlek på skillnaden mellan prognos och utfall | median av absolut fel och dess 85:e percentil, där absolut fel = absolutbeloppet av (prognos minus utfall) / utfall, över utvärderade prognoser | procent | Prognoslogg och utfall | Kapacitets- och prestandahantering | Planeringsgenomgång | Kvartalsvis |
| Skicklighet mot baslinje | Förbättring av prognosmetoden jämfört med en enkel baslinje | 1 minus (metodens medianfel i absolut mening / baslinjens medianfel i absolut mening) över samma prognoser | kvot | Prognoslogg, baslinjelogg och utfall | Ständig förbättring | Experimentera och jämför | Kvartalsvis |
| Kalibreringsglapp | Skillnad mellan angiven sannolikhet och observerad frekvens | för varje sannolikhetsband, absolutbeloppet av (angiven sannolikhet minus observerad andel) medelvärdesbildat över band; band med färre än ett angivet antal fall redovisas separat | procentenheter | Probabilistisk prognoslogg och utfall | Riskhantering; ändringsmöjliggörande | Retrospektiv om uppskattningar | Kvartalsvis |
| Precision och återkallning för larm | För ett prediktivt larm eller en poäng, andelen larm som var rätt och andelen händelser som fångades | precision = sanna positiva / (sanna positiva + falska positiva); återkallning = sanna positiva / (sanna positiva + falska negativa) | procent | Förutsägelselogg och utfall | Incidenthantering; händelsehantering | Definition av klart för modellen | Månadsvis |
| Signal om prognosdrift | Ökning av fel över tid jämfört med en referensperiod | median av absolut fel i det senaste fönstret minus median av absolut fel i referensfönstret, med fönsterstorlekarna angivna | procentenheter | Prognoslogg och utfall | Ständig förbättring; kapacitetshantering | Inspektera och anpassa | Månadsvis |
| Koppling mellan prognos och beslut | Andel prognoser som citeras i ett registrerat beslut | prognoser citerade i beslutsloggen / publicerade prognoser | procent | Beslutslogg och prognoslogg | Ständig förbättring; styrning | Granskningsåtgärder | Kvartalsvis |

Prognosfel och täckning beräknas bara för prognoser vars utfall är känt, så färska prognoser utesluts tills dess. Precision och återkallning beror på hur en händelse definieras, så definitionen av händelsen, till exempel "en ändring som orsakar en incident inom 48 timmar", anges tillsammans med mätetalet.

## Rekommendationer

### Prognostisera ärligt

**1. Publicera intervall, inte enskilda datum.** Ge ett intervall med en angiven sannolikhet, till exempel "mellan 12 och 18 arbetsdagar, med 85 procents säkerhet", och förklara antagandet bakom det. Ett enda tal inbjuder till ett åtagande.

**2. För en prognoslogg.** Registrera varje prognos när den görs: kvantiteten, värdet eller intervallet, datumet, metoden och antagandena. Lägg till utfallet när det är känt. Utan loggen finns ingen meritlista.

**3. Börja med en enkel baslinje.** Jämför varje ny metod med en naiv, till exempel förra periodens värde eller ett färskt medelvärde. Om en komplex metod inte tydligt slår den över tid, behåll den enkla.

**4. Ange de antaganden som skulle göra prognosen ogiltig.** En prognos av efterfrågan förutsätter ingen stor lansering, inget avbrott, ingen ny kundgrupp. Skriv antagandet bredvid talet så att en läsare vet när hen ska misstro det.

### Mät kvalitet

**5. Kontrollera täckning och kalibrering.** Räkna hur ofta utfall faller inom intervallet. Om ett intervall på 85 procent innehåller utfallet bara hälften av gångerna är det för smalt. Redovisa kalibrering med antalet fall, eftersom små stickprov är brusiga.

**6. Läs fel som en fördelning.** Ett medianfel på 10 procent kan dölja enstaka missar på 50 procent som spelar mest roll. Visa en hög percentil och de största missarna och granska dem.

**7. Anpassa måttet efter beslutets kostnad.** För ett prediktivt larm, välj precision eller återkallning efter kostnaden för ett falskt larm och för en miss. Ett bedrägerilarm och ett förslag om dirigering med låg risk har olika balans.

**8. Bevaka drift.** Jämför färskt fel med en referensperiod och undersök ökningar. Vanliga orsaker är en ny tjänst, en ändrad process, nya verktyg eller en förändring i hur data registreras.

### Använd prognoser väl

**9. Länka prognoser till beslut.** Säg vilket beslut en prognos ger underlag för och registrera i beslutsloggen vad som beslutades. Avveckla prognoser som ingen använder.

**10. Håll prognoser borta från mål för människor.** En prognos av incidentvolym som blir en kvot för servicedesken kommer att förvränga rapporteringen. Behandla prognoser som information om ett system.

**11. Håll en människa ansvarig för att agera på förutsägelser.** För modeller som poängsätter poster, namnge ägaren, åtgärden som vidtas på en poäng, hur en person kan åsidosätta den och hur fel rapporteras. Granska falska positiva och falska negativa med stickprovade fall.

**12. Bevaka partiskhet och skada.** En modell tränad på tidigare beslut kan upprepa deras partiskhet. Kontrollera resultat för grupper av användare eller tjänster som drabbas olika och redovisa vad kontrollen inte kan visa. Den här boken ger inte juridisk rådgivning, så kontrollera skyldigheter med din egen juridiska rådgivare.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Täckning av prognosintervall | Att vidga intervall tills täckningen ser bra ut; att bara utvärdera lätta prognoser | Redovisa intervallets bredd med täckningen; utvärdera alla loggade prognoser |
| Prognosfel | Att revidera prognosen strax före utfallet; att välja utvärderingsfönstret | Använd den loggade ursprungsprognosen; fastlägg fönstret i förväg |
| Skicklighet mot baslinje | Att välja en svag baslinje; att trimma metoden på utvärderingsdata | Kom överens om baslinjen i förväg; utvärdera på data som inte använts för trimning |
| Kalibreringsglapp | Att använda få band eller få fall; att slå ihop band för att dölja glapp | Redovisa antalet fall per band; minsta antal fall |
| Precision och återkallning för larm | Att omdefiniera händelser i efterhand; att räkna dubbletter | Fastlägg händelsedefinitionen i förväg; ta bort dubbletter; stickprova larm |
| Signal om prognosdrift | Att nollställa referensperioden; att ignorera långsam drift | Fastlägg referensfönstret och se över det enligt schema |
| Koppling mellan prognos och beslut | Att citera prognoser i en logg utan effekt på beslutet | Fråga vad som ändrades; stickprova poster |

En sund avläsning är intervall som täcker den angivna andelen utfall utan att vara absurt breda, enkla baslinjer som komplexa metoder slår med tydlig marginal, drift som upptäcks och undersöks och prognoser som förekommer i beslut.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Enkla baslinjeprognoser | Lätta att förklara och underhålla; svåra att överanpassa | Missar mönster och förändringar |
| Statistiska modeller eller maskininlärning | Fångar fler mönster; skalar över poster | Svåra att förklara; drift; kräver övervakning och data |
| Punktprognoser | Lätta att kommunicera | Falsk precision; inbjuder till åtagande |
| Intervallprognoser | Ärliga om osäkerhet | Svårare att kommunicera; kan läsas som vaga |
| Expertbedömning | Använder sammanhang en modell saknar | Partisk; svår att följa |

Slutsatsen är att börja enkelt, föra loggen, visa intervall och lägga till komplexitet bara när den förtjänar sin plats mot en baslinje. Bedömning och modeller kan samverka om båda loggas och kontrolleras.

## Frågor att diskutera med teamet

**1. Vilken är den senaste prognosen vi gjorde, och hur gick det?**
De flesta team vet inte, eftersom prognoser inte loggas. Be om talet, antagandet och utfallet. Lägg märke till om överraskningen kom från datan eller antagandet. Följ upp genom att starta en prognoslogg med det exemplet.

**2. Vilken prognos behandlar vi som ett åtagande, och vem betalar när den är fel?**
Leta efter prognoser som blev mål, till exempel leveransdatum eller volymtal. Fråga vem som känner press och vad de gör. Diskutera intervall och språket som används för att kommunicera dem. Följ upp genom att skriva om ett åtagande som ett intervall med antaganden.

**3. Slår vår prediktiva modell eller vårt verktyg "samma som förra perioden"?**
Be om jämförelsen, inte leverantörens påstående. Team saknar ofta en baslinje. Diskutera hur man jämför rättvist över samma fall. Följ upp genom att köra baslinjen vid sidan om under ett kvartal.

**4. Vad kostar ett falskt larm oss, och vad kostar en miss?**
Detta avgör balansen mellan precision och återkallning. Be om verkliga exempel. Kostnader är ofta olika för olika människor, till exempel en jourhavande tekniker och en kund. Följ upp genom att enas om vilket fel som spelar mest roll.

**5. Vad skulle få våra prognoser att sluta fungera, och skulle vi märka det?**
Diskutera förändringar såsom en ny produkt, ett nytt verktyg eller ett annat sätt att registrera data. Be om signalen som skulle visa drift. Följ upp genom att lägga till en driftkontroll och en ägare.

**6. Vem agerar på en förutsägelse, och kan de säga nej?**
För poängsatta poster, fråga vem som avgör vad som händer. Leta efter automatiska handlingar utan åsidosättande. Diskutera hur fel rapporteras och rättas. Följ upp genom att skriva åsidosättanderegeln.

## Fyra perspektiv

### Produkt- och leveransteam

Prognostisera utifrån er egen historik och ge intervall. Logga prognoser och jämför dem med utfall och markera de förändringar som gör historiken till en dålig guide, såsom ett nytt verktyg eller en teamförändring. Håll teamlokala planeringstal borta från jämförelser mellan team.

### Service- och driftteam

Prognoser av efterfrågan, kapacitet och incidenter hjälper bemanning och förebyggande. Använd dem för att planera, inte för att sätta kvoter. Bevaka larmodeller som ökar bruset och rapportera falska positiva så att modeller kan justeras.

### Ledning och styrning

Be om meritlistan bakom en prognos, inte bara dess värde, och om intervallet. Undvik att förvandla prognoser till mål för människor. För prediktiva modeller som används i drift, be om ägaren, åsidosättanderegeln och kontrollen av partiskhet.

### Kunder och användare

Ni känner prognosers effekt som väntan, avbrott och beslut som fattas om er. Fråga hur förutsägelser som berör er kontrolleras och hur ni kan ifrågasätta en. Era rapporter om felaktiga utfall är en del av den återkoppling modellen behöver.

## I praktiken: ett exempel från tjänstehantering

Ett regionalt myndighetsverks it-servicedesk prognostiserar veckovis ärendevolym för att planera bemanning. Siffrorna i det här exemplet är illustrativa. Ett leverantörsverktyg erbjuder en maskininlärningsprognos, och chefen vill veta om den ska tas i bruk.

Teamet startar en prognoslogg. Under tio veckor registrerar de tre prognoser för varje vecka: leverantörens punktprognos, en naiv baslinje (medelvärdet av de senaste fyra veckorna) och ett intervall utifrån baslinjens senaste fel. Efteråt beräknar de prognosfel för var och en. Leverantörens medianfel är 11 procent och baslinjens 13 procent, så skickligheten mot baslinje är 15 procent. Leverantörens 85:e percentil för fel är 38 procent, med stora missar i veckor med meddelanden från myndigheten, som inte finns i de data verktyget använder.

Teamet tar leverantörens prognos i bruk som en indata, lägger till ett fält för kända händelser och publicerar ett intervall baserat på tidigare fel. Täckningen för prognosintervall för det angivna intervallet på 85 procent är ungefär 80 procent över de tio veckorna, med ett litet antal, så de redovisar den med förbehållet att tio fall är få. De sätter också upp en driftkontroll som jämför de senaste åtta veckornas fel med de första åtta.

En manipuleringsrisk dyker upp. En teamledare noterar att prognosen används för att sätta bemanning och föreslår att lägga en buffert på prognosen så att teamet ser välbemannat ut. Teamet håller prognosen ärlig och registrerar bemanningsbufferten som ett separat beslut. Det som förblir svårt: händelser verktyget inte kan se orsakar fortfarande stora missar, och tio veckors data räcker inte för att bedöma kalibrering. Planen är att se över igen efter en längre period.

## Agilitet, AI, automatisering och analys

### Agilitet

Korta planeringscykler låter ett team kontrollera prognoser ofta och revidera dem tillsammans med intressenter. En god praxis är att prognostisera med intervall utifrån teamets eget genomflöde och att se över meritlistan vid det regelbundna förbättringssamtalet. Varningen är att en prognos som behandlas som ett löfte leder till att man lägger på marginal, döljer eller delar upp arbete.

### AI

Maskininlärningsmodeller och AI-assistenter kan producera prognoser och riskpoäng, med sken av precision. Jämför dem med en baslinje, behåll en ägare, kontrollera kalibrering och graden av falska positiva och negativa genom stickprov och håll en människa ansvarig för handlingar som vidtas på en poäng (se ämne 10.5, Mätetal för AI-styrning och AI-risk). Varningen är att en AI-genererad prognos kan ge ett självsäkert tal utan intervall och utan angivna antaganden, så be om båda.

### Automatisering

Automatisera prognosloggning, insamling av utfall och beräkning av fel och täckning så att meritlistan bygger sig själv. Mät automatiserade handlingar som följer på en förutsägelse på deras felaktiga handlingar. Varningen är att automatisering som agerar på en prognos, till exempel att skala kapacitet eller larma, gör prognosfel synliga för användare, så lägg till gränser och översyn.

### Analys

Det här ämnet är analysen av prognoser: visa fel som en fördelning, täckning med antal och drift med fönstret som användes. Beslutet detta ger underlag för är hur mycket man kan lita på en prognos och när man ska byta metod. Varningen är att små stickprov ger instabil kalibrering, så ange antalet prognoser bakom varje tal (se ämne 10.8, Mätetal för analys och datakvalitet).

## Branschperspektiv

**Startup.** Historiken är kort och tjänsten förändras ofta, så prognoser är svaga. Använd enkla baslinjer och breda intervall och för en kort logg. Undvik att köpa prognosverktyg innan det finns data.

**Småföretag.** Säsongsvariation och några få stora kunder dominerar. Använd förra årets motsvarande period som baslinje och notera händelser som bryter mönstret. Var försiktig med leverantörsprognoser som påstår precision.

**Storföretag.** Många prognoser över team behöver en gemensam logg och gemensamma definitioner. Jämför metoder rättvist mellan team och undvik att rangordna team efter prognosriktighet. Se över modeller för drift enligt schema.

**Offentlig sektor.** Prognoser stöder ofta budget- och bemanningsbeslut som är offentliga. Dokumentera metoder och antaganden och kontrollera regler för automatiserade beslut som påverkar människor. Planera för externa händelser såsom politiska förändringar som bryter datan (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna är dataarbete, prognosloggning, verktyg för modellering om sådana används, granskningstid och övervakning av modeller för drift. Att börja med en logg och en naiv baslinje kostar mycket lite.

Avkastningen är bättre planering: kapacitet som kommer före behovet, bemanning som motsvarar efterfrågan och färre överraskningar. Den är svår att tillskriva, så undvik att påstå ett tal. Jämför kostnaden och felet för en prognosmetod med baslinjen över tid och ange antagandena som intervall (se ämne 7.7, Avkastning på investering och affärscase). Risksidan är kostnaden för att förlita sig för mycket på en modell som har glidit och för beslut fattade på falsk precision.

## Antimönster och fallgropar

- **Prognoser med ett enda tal behandlade som löften.** De ger marginaler och skuldbeläggning. Publicera intervall med antaganden.
- **Ingen prognoslogg.** Det finns inget sätt att lära. Registrera prognoser och utfall.
- **Att köpa en modell utan baslinje.** Vinsten är okänd. Jämför med "samma som förra perioden".
- **Att bedöma riktighet på träningsdatan.** Det smickrar modellen. Utvärdera på senare data.
- **Att ignorera falska positiva.** Brusiga förutsägelser lär människor att ignorera dem. Redovisa precision och återkallning.
- **Prognoser som mål för människor.** De förvränger datan. Använd dem för planering.
- **Ingen driftkontroll.** Modeller försämras i det tysta. Övervaka fel över tid.
- **Förutsägelser utan mänsklig ägare.** Felaktiga handlingar har ingen som svarar för dem. Namnge en ägare och en åsidosättanderegel.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Prognospraxis | Enskilda tal; inget register | Vissa intervall; informella anteckningar | Prognoslogg med intervall, antaganden och utfall | Fel, täckning och baslinje jämförs i regelbunden rytm | Prognoser och metoder förbättras genom experiment och delas över team |
| Prediktiva modeller | Leverantörspåståenden accepteras | Pilot jämförd med en baslinje | Ägare, utvärdering och åsidosättanderegel per modell | Drift, precision och återkallning övervakas | Modellens livscykel hanteras med tillsyn och avveckling |
| Användning i beslut | Prognoser som åtaganden | Prognoser visas för beslutsfattare | Prognoser länkade till beslut i en logg | Beslut ses över mot prognosutfall | Beslut anpassas efter prognososäkerhet |

## Checklista

- [ ] En prognoslogg registrerar kvantitet, värde eller intervall, datum, metod och antaganden.
- [ ] Utfall läggs till och prognosfel redovisas som en fördelning.
- [ ] En enkel baslinje körs vid sidan av varje komplex prognos.
- [ ] Intervalltäckning redovisas med intervallets bredd och antalet fall.
- [ ] Prediktiva larm redovisar precision och återkallning mot en fastlagd händelsedefinition.
- [ ] Drift kontrolleras mot ett fastlagt referensfönster.
- [ ] Varje prediktiv modell har en ägare, en åsidosättanderegel och ett översynsdatum.
- [ ] Prognoser är länkade till beslut i en beslutslogg.
- [ ] Prognoser används inte som individuella mål.
- [ ] Varje mätetal har en manipuleringsvektor och ett skyddsräcke visat bredvid.

## AI-prompter

**Utforma en prognoslogg och baslinje.**

```text
We forecast [quantity] for [purpose]. Our data is [description of history and
source]. Propose a forecast log with fields, a simple baseline method, and how to
compute error and interval coverage later. Do not invent expected accuracy.
Mark assumptions, and list questions I should answer about the data.
```

**Utvärdera en prognosmetod mot en baslinje.**

```text
Below are logged forecasts and actuals for [period]: [paste data without personal
information], with a baseline forecast alongside. Compute the median and 85th
percentile of absolute percentage error for each, interval coverage if intervals
are given, and the skill against the baseline. Do not extrapolate beyond the
data. State the number of cases, say what you could not judge, and list your
assumptions.
```

**Granska tillsynen över en prediktiv modell.**

```text
We use a model that [describes what it predicts and what action follows]. Draft
a review of its oversight: owner, evaluation evidence we should ask for, how
errors are reported, the override rule, drift checks, and questions about bias.
Do not make claims about legal requirements; list questions for our legal
adviser. Mark assumptions.
```

**Granska manipuleringsrisken i prognosmåtten.**

```text
We report these forecast measures: [paste measures and definitions]. Context:
[team size, tools, audience]. For each measure, list realistic ways it could look
better without improving forecasts, propose a guardrail, and say how that
guardrail could be gamed. Do not invent benchmark values. List your assumptions.
```

## AI-färdigheter

- [Demand forecasting](../../../../skills/demand-forecasting/SKILL.md): använd för att bygga och kontrollera en efterfrågeprognos med intervall.
- [Trend analysis](../../../../skills/trend-analysis/SKILL.md): använd för att undersöka trender och förändringar före prognostisering.
- [Machine learning model card](../../../../skills/machine-learning-model-card/SKILL.md): använd för att dokumentera en prediktiv modells syfte, data och gränser.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det ämne som täcker ett mätetal och dess parade skyddsräcke.

## Viktigaste slutsatser

- En prognos är ett intervall med en meritlista, så logga prognoser och jämför dem med utfall.
- Jämför varje modell med en enkel baslinje och behåll den komplexa bara om den tydligt slår den.
- Kontrollera intervalltäckning och kalibrering med antalet fall bakom dem.
- Välj precision eller återkallning efter kostnaden för ett falskt larm och för en miss.
- Förvandla inte prognoser till mål för människor och håll en människa ansvarig för handlingar som vidtas på en förutsägelse.

## Referenser och vidare läsning

1. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
2. Wikipedia, [Prediction interval](https://en.wikipedia.org/wiki/Prediction_interval).
3. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
4. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
5. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
6. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
7. Hyndman, R. J., and Athanasopoulos, G., *Forecasting: Principles and Practice*, 3rd edition, OTexts, 2021, https://otexts.com/fpp3/
