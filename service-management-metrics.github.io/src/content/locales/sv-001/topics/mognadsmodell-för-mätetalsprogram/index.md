# Mognadsmodell för mätetalsprogram

**Använd den gemensamma femnivåskalan för att beskriva var ett mätetalsprogram befinner sig och för att välja nästa lilla steg, aldrig som ett betyg att visa, jämföra eller certifiera.**

## Översikt och motiv

Varje annat ämne i den här boken slutar med en liten mognadstabell för sitt ämne. Det här ämnet tillämpar samma skala på mätetalsprogrammet som helhet. Frågan är inte hur bra ett teams incidenttider är. Den är hur väl organisationen samlar in, läser och agerar på mått överhuvudtaget: om definitioner är delade, om datan åtnjuter förtroende, om talen leder till beslut och om de mätta människorna ser programmet som hjälp.

En mognadsmodell är en beskrivning av stadier som en organisation kan passera allteftersom en praxis utvecklas. Det mest kända exemplet inom programvara är [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model), som växte fram ur arbete vid Software Engineering Institute och spreds vitt. Dess inflytande var stort, och det var kritiken som följde också. Organisationer jagade nivån och inte förmågan, revisorer betygsatte pappersarbete och modellen kom att användas som ett märke. En ansvarsfull användning av vilken mognadsmodell som helst håller tre varningar i sikte. Skalan är ett samtalsverktyg och inte en certifiering. Högre är inte alltid bättre, eftersom rätt nivå beror på sammanhanget. Och modellen är ingen ersättning för utfall: ett moget program som inte förbättrar tjänster är ett mycket prydligt misslyckande, och en nivå som visas som ett märke liknar mycket ett [fåfängemått](https://en.wikipedia.org/wiki/Vanity_metric), ett tal som ser bra ut och inte ger underlag för något beslut.

Skalan som används här är den som delas över boken och *Service Management Guide*: Initiera, Utveckla, Standardisera, Styra och Orkestrera (se den gemensamma mognadsmodellen i specifikationen). Den är medvetet inte densamma som processmognadsskalorna i ITIL, i ISO/IEC 33000 eller i Capability Maturity Model, och ett team bör inte hävda ett betyg i något av dessa ramverk på grundval av den här.

De agila målen pekar på hur den ska användas. Ständig förbättring innebär att modellen är till för att hitta nästa steg, inte för att nå ett slutläge. Fortlöpande utveckling innebär att ett program som nådde Orkestrera förra året kan gå tillbaka om människor lämnar eller prioriteringar skiftar, så självskattningen upprepas. Kontinuerlig intressentinvolvering innebär att bedömningen görs med teamen och inte på dem. En hållbar takt innebär att programmet tar ett steg i taget och inte försöker hoppa tre nivåer på ett kvartal. Och att bygga kring motiverade individer innebär att de som gör arbetet bedömer om programmet hjälper dem. Detta är samma logik som praktiken ständig förbättring i ITIL, där en organisation kontrollerar nuläget, anger en riktning och förbättrar i små steg, en vana nära [kaizen](https://en.wikipedia.org/wiki/Kaizen), den japanska idén om kontinuerlig förbättring av alla. Den mer allmänna idén är [ständig förbättringsprocess](https://en.wikipedia.org/wiki/Continual_improvement_process) (se ämne 9.5, Mätetal för ständig förbättring).

Modellen har en särskild fälla i sammanhanget mätetal. Ett program som bedöms på sina egna mått inbjuder till just den förvrängning det varnar för. Om "antal mått med definitioner" blir ett mål, förökar sig definitioner. Angreppssättet i det här ämnet använder därför belägg från arbetet (vilka beslut som ändrades, vad team säger) utöver antal, och det håller bedömningen ägd av teamen, som har minst att vinna på att blåsa upp den (se ämne 1.2, Goodharts lag och mätetalens psykologi). Ett kompletterande bedömningsformulär för team finns i bilagorna (se ämne 12.5, Självskattning av mognad).

## Nyckelprinciper

- **Skalan är ett samtalsverktyg.** Den hjälper människor att beskriva nuläget och välja ett nästa steg, och den är inte till för att betygsätta, rangordna eller certifiera.
- **Bedöm tillsammans med teamen.** Självskattning, diskuterad öppet, är mer riktig än extern poängsättning.
- **Döm efter belägg.** Fråga vilka beslut som ändrades, vad människor säger och vad datan visar, såväl som vilka dokument som finns.
- **Dimensioner kan skilja sig.** Ett program kan vara starkt i verktyg och svagt i förtroende. Redovisa profilen, inte ett enda tal.
- **Gå ett steg i taget.** Sikta på nästa nivå i en eller två dimensioner, inte på allt på en gång.
- **Högre är inte alltid bättre.** Välj den nivå som passar organisationens storlek, risk och behov.
- **Räkna med tillbakagång.** Personalomsättning, omorganisation och press kan driva ett program tillbaka. Bedöm på nytt regelbundet.
- **Publicera aldrig en resultattabell över team.** Aggregera för programmet och dela teamresultat bara med teamet.

## Mätetalsdefinitioner

Måtten nedan beskriver programmets hälsa och dess bedömning. De är till för programteamet och sponsorerna, och de läses som signaler för diskussion.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Deltagande i bedömning | Andel deltagande team som slutförde en självbedömning med eget samtal | team som slutförde och diskuterade / deltagande team | procent | Bedömningsregister | Ständig förbättring | Reflektion och retrospektiv | Två gånger om året |
| Profil per dimension | Fördelningen av teams självskattade nivåer i varje dimension, visad som ett intervall och inte ett enda betyg | antal team på varje nivå, per dimension | team per nivå | Självbedömningar, aggregerade | Ständig förbättring; styrning | Synligt arbete | Två gånger om året |
| Förbättringsåtgärder från bedömningar | Andel överenskomna nästa steg som slutfördes, släpptes med ett skäl eller fortfarande pågår | åtgärder stängda eller avförda med skäl / överenskomna åtgärder | procent | Förbättringsregister | Ständig förbättring | Små experiment | Kvartalsvis |
| Beslutsbelägg | Andel stickprovade mått där teamet kan namnge ett beslut eller ett medvetet val som måttet gav underlag för det senaste kvartalet | mått med ett namngivet beslut / stickprovade mått | procent | Teamintervjuer; granskningsanteckningar | Ständig förbättring | Belägg framför ceremoni | Kvartalsvis |
| Förtroende för definitioner och data | Instämmande på teamnivå att definitionerna är tydliga och datan är riktig | andel som instämmer i en kort teamenkät; svarsfrekvens visas | procent | Anonym teamenkät | Kunskapshantering; informationshantering | Delad förståelse | Två gånger om året |
| Tid till nästa nivå (beskrivande) | Förfluten tid för ett team att flytta en dimension upp en nivå där det valde att göra det | median i månader från överenskommet steg till teamets ombedömning | månader | Bedömningshistorik | Ständig förbättring | Hållbar takt | Årligen |
| Bedömningsbörda | Timmar som bedömningen tar per team | median i timmar per team | timmar | Tidsuppskattningar från team | Ständig förbättring | Hållbar takt | Två gånger om året |

Deltagande mäts som slutförande med diskussion, eftersom ett formulär som fylls i ensam säger lite. Profilen är ett intervall och räknas aldrig ihop till ett enda mognadstal. Tid till nästa nivå är beskrivande: en snabb uppstigning kan spegla uppblåst självpoängsättning, och en långsam kan spegla lämplig omsorg. Bedömningsbörda är en kontroll av själva bedömningen, som bör ta högst en timme eller två per team.

## Rekommendationer

### Använd skalan väl

**1. Definiera dimensionerna för ett mätetalsprogram.** En fungerande uppsättning har sex dimensioner: (a) frågor och syfte, om mått besvarar frågor som publiker ställt; (b) definitioner och ägarskap, om mått har skrivna definitioner och ägare; (c) data och verktyg, om datan är riktig, aktuell och portabel; (d) användning i beslut, om tal ger underlag för val; (e) förtroende och trygghet, om människor tror att datan hjälper dem; och (f) översyn och utveckling, om programmet trimmar sig självt. Sex är nog för att vara användbart och få nog för att diskutera på en timme.

**2. Beskriv hur varje nivå ser ut.** Tabellen i avsnittet "Mognadsmodell" nedan ger korta beskrivningar för varje dimension på varje nivå. Behandla dem som uppslag. Ett team bör anpassa formuleringarna till sitt eget sammanhang och skriva ned egna exempel.

**3. Räkna inte medelvärde.** Ett enda sammanlagt betyg döljer mönstret som spelar roll. Ett program med hög verktygsmognad och lågt förtroende är i en annan situation än ett med det omvända, och nästa steg skiljer sig. Visa profilen.

### Bedöm med och inte på teamen

**4. Gör det till ett samtal på en timme.** Samla ett team med tabellen. Be var och en markera enskilt var de tror att teamet är i varje dimension och jämför sedan. Diskutera skillnader, eftersom de avslöjar olika erfarenheter av samma program. Enas om en teambild, registrera beläggen bakom den och välj ett eller två nästa steg.

**5. Be om belägg.** För varje nivå som hävdas, be om ett exempel. "Vi använder talen i beslut" inbjuder frågan "Vilka beslut förra kvartalet?" Använd stickprovade mått och intervjuer för att kontrollera. Detta respekterar människor och hindrar bedömningen från att glida in i önsketänkande.

**6. Låt resultaten stanna hos teamet.** Ett teams profil tillhör teamet. Programmet delar aggregerade intervall och gemensamma teman, inte en rangordning. Gör klart att bedömningen inte påverkar finansiering, anseende eller medarbetarsamtal. Om den gör det kommer team att blåsa upp den och värdet går förlorat (se ämne 11.3, Att införa mätetal utan att skapa rädsla).

### Välj nästa steg

**7. Välj den dimension som begränsar de andra.** Förtroende och trygghet begränsar ofta allt annat: utan det förvrängs data och beslut blir misstänkta. Definitioner och ägarskap begränsar ofta data och användning. Ett vanligt mönster är att stärka förtroende och definitioner först, sedan data, sedan användning och översyn. Leta efter dimensionen där en liten förbättring skulle låsa upp de andra.

**8. Sätt ett litet, konkret steg.** Ett nästa steg bör vara ett som ett team kan slutföra på ett kvartal och känna igen: "enas om en stadga", "skriv definitioner för våra fyra mått", "automatisera två flöden", "håll en månatlig översyn där vi registrerar beslut". Undvik steg som "nå nivå 4". Nivåer beskriver ett tillstånd, och steg beskriver arbete.

**9. Länka steg till förbättringsregistret.** Placera åtgärderna på samma ställe som annat förbättringsarbete, med ägare och datum, och se över framsteg vid det regelbundna förbättringssamtalet (se ämne 9.5, Mätetal för ständig förbättring). Ett steg som inte är finansierat eller schemalagt kommer inte att ske.

### Håll det ärligt och lätt

**10. Kalibrera mellan team utan att rangordna dem.** Håll en kort session där team delar exempel på vad de kallar nivå 3 i en dimension. Diskutera skillnader i standarder. Syftet är en delad förståelse, inte lika betyg. Rotera facilitatorn och bjud in ett team utanför programmet att utmana formuleringen.

**11. Bedöm på nytt i en rytm och som svar på händelser.** Två gånger om året räcker för de flesta program. Bedöm på nytt efter en omorganisation, ett verktygsbyte eller ett brott mot stadgan, eftersom dessa kan flytta förtroendet åt endera hållet. Bevaka tillbakagång och behandla den som information, inte misslyckande.

**12. Avveckla eller revidera själva modellen.** Varje år, fråga teamen om dimensionerna och nivåbeskrivningarna fortfarande passar. Skriv om det som förvirrar och ta bort det som ingen använder. En modell som inte ändrats på fem år kan beskriva ett program som inte längre finns.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Deltagande i bedömning | Att fylla i formulär för att möta en kvot; en person som fyller i åt teamet | Kräv ett teamsamtal; be om beläggen bakom varje påstående |
| Profil per dimension | Att blåsa upp nivåer för att se bra ut; att underskatta sig för att få hjälp | Länka inte till finansiering eller anseende; be om belägg; kalibrera öppet |
| Förbättringsåtgärder från bedömningar | Att välja triviala steg att stänga; att stänga utan att göra | Se över stegens storlek och värde; kontrollera utfall vid nästa bedömning |
| Beslutsbelägg | Att uppfinna beslut i efterhand; att lista beslut utan betydelse | Be om datum och de inblandade; godta "valde att inte göra något" som ett beslut |
| Förtroende för definitioner och data | Att coacha respondenter; låg svarsfrekvens som döljer missnöje | Anonymitet och minsta gruppstorlek; visa svarsfrekvenser; tala med team direkt |
| Tid till nästa nivå (beskrivande) | Att forcera påståenden om framsteg; att dölja tillbakagång | Håll beskrivande; läs med belägg; registrera tillbakagång utan påföljd |
| Bedömningsbörda | Att hoppa över samtalet för att skära timmar | Följ timmar tillsammans med deltagande och beläggens kvalitet |

En sund avläsning visar en profil med en blandning av nivåer, där förtroende och definitioner stiger före verktyg och polering, nästa steg som är små och slutförda, beslut som team kan namnge och ett ärligt register över enstaka tillbakagång.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Teamets självbedömning | Ärlig, ägd, snabb | Subjektiv; kräver kalibrering |
| Extern bedömning | Konsekvent; oberoende | Kostsam; inbjuder till att uppträda för bedömaren |
| Ett enda sammanlagt betyg | Lätt att kommunicera | Döljer mönstret; inbjuder till mål |
| Profil per dimension | Visar var man ska agera | Svårare att sammanfatta |
| Årlig bedömning | Lätt | Långsam att märka tillbakagång |
| Två gånger om året med händelseutlösare | Lyhörd | Mer insats |
| Länkad till finansiering | Väcker uppmärksamhet | Uppblåsning och manipulation |
| Hållen skild från finansiering | Ärliga data | Kräver andra sätt att få stöd |

Svaret är att köra en lätt självbedömning med belägg, redovisa profiler och intervall, låta resultaten stanna hos teamen och knyta nästa steg till förbättringsregistret, inte till finansiering eller anseende.

## Frågor att diskutera med teamet

**1. Vilken av de sex dimensionerna skulle vi säga är vår svagaste, och vad får oss att säga det?**
Låt var och en välja en enskilt och dela sedan. Facilitatorn bör be om ett färskt exempel. Leta efter mönster och enas om vilken dimension som begränsar de andra.

**2. Kan vi namnge ett beslut från förra kvartalet som ett mått ändrade?**
Lista dem. Om listan är kort, fråga varför. Diskutera om problemet är måtten, datan eller vanan att titta.

**3. Var skulle vi placera oss på förtroende och trygghet, och hur vet vi det?**
Titta på tillbudsrapporter, ifrågasättanden och enkätresultat. Jämför med hur människor talar i praktiken. Enas om en sak ledare kunde göra för att flytta det.

**4. Hur skulle ett litet, konkret nästa steg se ut för vår svagaste dimension?**
Skriv ett utkast i en mening, med en ägare och ett datum. Kontrollera att det kan slutföras på ett kvartal. Enas om hur vi ska veta att det fungerade.

**5. Vad skulle få den här bedömningen att kännas som ett hot, och hur förhindrar vi det?**
Diskutera användningar av resultaten som människor skulle frukta. Skriv ned vad resultaten aldrig kommer att användas till. Kontrollera att programledaren håller med.

**6. Finns det en nivå vi inte behöver nå?**
Tänk på vår storlek, våra risker och våra mål. Beskriv en nivå som är bra nog för tillfället och en signal som skulle tala om för oss att återbesöka den.

## Fyra perspektiv

### Produkt- och leveransteam

Team bedömer sig själva, väljer nästa steg och behåller sina resultat. De bör använda samtalet för att lyfta fram skillnader i erfarenhet, be om belägg och sätta steg små nog att slutföra. De bör protestera mot varje försök att förvandla profilen till en rangordning.

### Service- och driftteam

Driftteam bär tunga data- och incidentbördor och kan se var programmet stöder dem eller belastar dem. De bör notera var verktyg eller definitioner blockerar deras arbete, be att jour- och incidentdata hanteras med omsorg och ge öppen återkoppling på bedömningsbördan.

### Ledning och styrning

Ledare sponsrar programmet och får den aggregerade bilden. De bör be om profiler och gemensamma teman, motstå att be om ett enda betyg, finansiera de nästa steg som team väljer och inte knyta finansiering eller anseende till bedömningen. De bör också föregå med gott exempel genom att beskriva beslut som mått gav underlag för.

### Kunder och användare

Kunder och användare har nytta när programmet förbättrar tjänster och när deras återkoppling är en del av måtten. Där de är partner kan de delta i att bedöma mått som rör dem, till exempel användbarheten hos nöjdhetsenkäter, och i att se över hur deras data används.

## I praktiken: ett exempel från tjänstehantering

En nationell försäkringsgrupp har 20 leverans- och supportteam och ett mätetalsprogram som pågått i 18 månader. Sponsorn ber om "ett mognadsbetyg för varje team" som vägledning för investeringar. Programledaren är försiktig och minns hur en tidigare poängsättning i revisionsstil fick team att förbereda pärmar med dokument. Siffrorna nedan är illustrativa.

Programledaren föreslår i stället en profil över sex dimensioner, bedömd av teamen i ett timslångt samtal med en facilitator utanför teamet, med resultaten hållna av teamet. Hon säger till sponsorn att programmet kommer att redovisa intervall och gemensamma teman och att inget teams profil kommer att länkas till finansiering. Sponsorn håller med, och beslutet registreras.

Nitton av 20 team slutför bedömningen med ett samtal, så deltagandet är 95 procent. Profilen visar ett spann: i frågor och syfte ligger de flesta team på nivå 2 eller 3; i definitioner och ägarskap ett spann från 1 till 4; i data och verktyg mest 3; i användning i beslut mest 2; i förtroende och trygghet en delning mellan 2 och 4; och i översyn och utveckling mest 1 eller 2. Beläggskontrollerna är avslöjande. Elva team hävdade nivå 3 för användning i beslut, men när de ombads namnge ett beslut från det senaste kvartalet som ett mått gav underlag för kunde bara sex det. Programledaren noterar detta utan att döma, och det blir ett tema: teamen har instrumentpaneler och håller sällan översyner som registrerar beslut.

De nästa stegen är små. Åtta team väljer en månatlig översyn med en beslutslogg. Fyra väljer att skriva definitioner för sina mått. Tre väljer att enas om en stadga. Sex månader senare är 14 av 17 överenskomna steg klara, ett är släppt med ett skäl och två pågår. En upprepad bedömning visar beslutsbelägg som stiger från 38 procent till 71 procent av stickprovade mått, och förtroendeenkäten som går från 54 till 67 procents instämmande. Ett team halkar tillbaka i förtroende efter en omorganisation, och facilitatorn registrerar det som information, inte misslyckande. Ett år senare ber sponsorn återigen om ett enda betyg för årsrapporten. Programledaren erbjuder en enkelsidig profil med intervall, tre teman och de slutförda förbättringsstegen. Sponsorn godtar, och rapporten anger tydligt att skalan är ett samtalsverktyg.

## Agilitet, AI, automatisering och analys

### Agilitet

Använd modellen som ett samtal vid regelbundna förbättringsöversyner, där teamet väljer sitt eget nästa lilla steg. Varningen är att ett mognadsbetyg som visas på en vägg blir ett mål.

### AI

Lägg till AI-perspektivet i bedömningen: om AI-användningar inventeras, om AI-stödda mått har kvalitetspar och om människor kan ifrågasätta AI-härledda tal. Varningen är att en AI-skriven självbedömning kan låta självsäker och missa lokala fakta, så teamet måste skriva sin egen.

### Automatisering

Automatisera insamlingen av belägg för bedömningen, till exempel andelen mått med ägare och skyddsräcken, men låt människor tolka den. Varningen är att belägg som samlas automatiskt kan vara ofullständiga, så säg vad de utesluter.

### Analys

Visa profilen över dimensioner, inte ett enda betyg, med beläggen bakom varje omdöme. Beslutet detta ger underlag för är vad som ska förbättras härnäst. Varningen är att omdömen är bedömningar av de bedömda själva, så undvik att jämföra team på dem.

## Branschperspektiv

**Startup.** En formell bedömning är sannolikt överdriven. Ett kort samtal två gånger om året över de sex dimensionerna, med ett eller två små steg, räcker. Bevaka rädslan att mått ska användas för bedömning, eftersom små team känner detta starkt.

**Småföretag.** Använd dimensionerna som en checklista för ett samtal med ägaren och personalen. Fråga om de få mått ni behåller besvarar verkliga frågor, om människor vet vad de betyder och om de används. Välj ett steg. Lägg inte mer än en timme.

**Storföretag.** Skala kräver en lätt, konsekvent process: samma dimensioner, självbedömning med en facilitator, kalibreringssessioner och aggregerade profiler. Motstå ett centralt poängkontor. Länka nästa steg till förbättringsregister och redovisa intervall och teman för sponsorer. Skydda mot att skalan förvandlas till en efterlevnadsövning.

**Offentlig sektor.** Revisions- och tillsynsorgan kan be om mognadsbetyg. Var tydlig med skillnaden mellan det här interna samtalsverktyget och varje formellt ramverk. Låt teamresultat stanna hos teamen, ge aggregat till tillsyn och var öppen om vad skalan är och inte är (se ämne 8.3, Mätetal för regelefterlevnad och revision).

## Affärscase: motiv, ROI och TCO

Kostnaderna är små: en timme eller två per team två gånger om året, en facilitator, viss analys och insatsen att genomföra förbättringsstegen. De större kostnaderna kommer när modellen missbrukas, med konsulter, poängkontor och pärmar med belägg.

Avkastningen kommer från bättre riktad insats. I stället för att sprida investeringen över alla dimensioner hittar programmet den begränsande dimensionen och åtgärdar den. Andra avkastningar inkluderar tidigare igenkänning av tillbakagång, ett delat språk mellan team och förbättringssteg som team valde och äger. Bygg caset ur dina egna data: slutförda förbättringssteg, förändringar i beslutsbelägg och trygghetsenkätens resultat och insatsen bedömningen tog. Undvik att citera publicerade påståenden om avkastning på mognadsförbättring utan en spårbar källa och relevans för ditt sammanhang (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Mognadsmärket.** Nivån blir målet. Använd den som ett samtal, med belägg.
- **Ett enda sammanlagt tal.** Mönstret går förlorat och mål dyker upp. Visa profilen.
- **Poängsättning av revisorer.** Team förbereder dokument för att uppträda. Använd självbedömning med en facilitator.
- **Att länka betyget till finansiering.** Uppblåsning följer. Håll bedömningen separat.
- **Att jaga högsta nivån.** Inte varje program behöver Orkestrera. Välj det som passar.
- **Bedöma och glömma.** Inga steg följer. Länka steg till förbättringsregistret.
- **För lång bedömning.** Bördan växer och kvaliteten faller. Håll den till en timme.
- **Att ignorera tillbakagång.** Program halkar tillbaka efter förändring. Bedöm på nytt i en rytm och efter händelser.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Frågor och syfte | Mått samlas därför att data finns | Vissa team anger de frågor de ställer | Publiker och frågor nedskrivna; mått kopplade till dem | Täckning av frågor ses över; obesvarade frågor driver nya mått | Publiker, inklusive kunder och leverantörer, formar måtten; frågor utvecklas med tjänsterna |
| Definitioner och ägarskap | Definitioner varierar per person | Vissa skrivna; informella ägare | Katalog med definition, källa, ägare och begränsningar för varje mått | Fullständighet i definitioner och ifrågasättanden hanteras | Definitioner samägs över team och leverantörer; revideras när de slutar ge underlag för beslut |
| Data och verktyg | Manuell och skör | Vissa automatiska flöden | Testade pipelines, delat lager, portabla data | Tillförlitlighet, avstämning och beredskap för utträde hanteras | Federerade pipelines med delade kontrakt; källor förbättras utifrån återkoppling |
| Användning i beslut | Tal visas, används sällan | Används i vissa översyner | Regelbundna översyner som registrerar beslut | Beslutsbelägg följs och agerar man på | Beslut länkade över team till utfall; lärande delas |
| Förtroende och trygghet | Rädsla eller likgiltighet | Muntliga försäkringar | Skriven stadga; individvyer av; trygghetsenkät | Brott ses över öppet; signaler om öppenhet hanteras | Förtroende är rutin; programmet formas av personal och partner |
| Översyn och utveckling | Ingen | Enstaka uppstädning | Periodisk översyn med team; avvecklingsregel | Bedömningssteg finansieras och slutförs | Programmet förbättras ständigt, med förändringar från alla |

## Checklista

- [ ] De sex dimensionerna är överenskomna, och nivåbeskrivningarna är anpassade till vårt sammanhang.
- [ ] Varje team bedömer sig självt i ett samtal på ungefär en timme, med en facilitator.
- [ ] Varje hävdad nivå backas av ett exempel eller en stickprovskontroll.
- [ ] Resultat visas som profiler och intervall, aldrig som ett enda medelvärde eller en rangordning.
- [ ] Ett teams resultat stannar hos teamet, och aggregatet delas med sponsorer.
- [ ] Bedömningen är inte länkad till finansiering, anseende eller medarbetarsamtal, och detta är nedskrivet.
- [ ] Varje team kommer överens om ett eller två små nästa steg, med en ägare och ett datum.
- [ ] Nästa steg följs i förbättringsregistret.
- [ ] Ombedömning sker minst två gånger om året och efter större händelser.
- [ ] Själva modellen ses över årligen med teamen.

## AI-prompter

**Förbered ett självbedömningssamtal.**

```text
Prepare a one-hour facilitation plan for a team's self-assessment of its metrics
program across six dimensions: questions and purpose, definitions and ownership,
data and tooling, use in decisions, trust and safety, and review and evolution.
Use five levels: Initiate, Develop, Standardize, Manage, Orchestrate. Include
private marking, comparison, evidence questions, and agreeing one or two small
next steps. Do not produce a score. List your assumptions.
```

**Förvandla en svag dimension till steg.**

```text
Our team rates itself at Level [n] on [dimension] of its metrics program. Evidence:
[paste]. Suggest three small steps, each finishable in one quarter, that could move
us toward Level [n+1]. For each step, describe the owner, the effort, the likely
benefit, and how we would know it worked. Do not promise outcomes. List your
assumptions and risks.
```

**Kontrollera belägg för en hävdad nivå.**

```text
A team claims Level [n] on [dimension] and gives this evidence: [paste]. Act as a
curious colleague. List questions to test whether the evidence supports the claim,
what examples would be convincing, and what signs would suggest the claim is
optimistic. Do not judge the team. List your assumptions.
```

**Sammanfatta profiler utan att rangordna.**

```text
Here are aggregated counts of teams at each level for each dimension: [paste]. Write
a half-page summary for sponsors that describes the range, three common themes, and
the improvement steps teams chose. Do not rank teams, produce a single score, or
claim causes without evidence. List caveats about self-assessment.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att koppla programmets mått till mognadsdimensionerna och deras parade skyddsräcken.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en mognadsbedömning redovisar profiler, låter resultat stanna hos team och undviker ett enda betyg.

## Viktigaste slutsatser

- Använd den gemensamma femnivåskalan som ett samtalsverktyg, aldrig som ett märke, en rangordning eller en certifiering.
- Redovisa en profil över sex dimensioner och inte ett enda medelvärde.
- Bedöm tillsammans med teamen, be om belägg och låt varje teams resultat stanna hos teamet.
- Välj små nästa steg i den dimension som begränsar de andra, ofta förtroende och definitioner.
- Följ steg i förbättringsregistret och bedöm på nytt regelbundet, eftersom program går tillbaka.
- Högre är inte alltid bättre, och utfall spelar större roll än nivåer.

## Referenser och vidare läsning

1. Paulk, M., et al., *Capability Maturity Model for Software, Version 1.1*, Software Engineering Institute, Carnegie Mellon University, 1993.
2. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
3. ISO/IEC 33001, *Information technology: Process assessment: Concepts and terminology*, International Organization for Standardization, 2015.
4. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
5. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model).
8. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
9. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
