# Mätetal för maskinvarutillgångars livscykel

**Enheter är motiverade människors dagliga verktyg och en ström av kostnad, risk och slöseri, så planera utbyte som ett jämnt flöde i stället för ett periodiskt ryck, mät ålder och fel ur din egen data och behandla säker avyttring och återanvändning som en del av jobbet.**

## Översikt och motiv

Bakom varje tjänst finns fysiska saker: laptops, telefoner, servrar, nätverksutrustning, skrivare och kablarna och rackarna som håller ihop dem. Maskinvara har en livscykel som programvara inte har. Den köps, skeppas, avbildas, delas ut, repareras, flyttas, avvecklas, rensas och återvinns, och varje steg har en kostnad och en risk. En laptop som fallerar under ett kundsamtal kostar mer än laptopen. En avvecklad server som lämnar byggnaden med data på sina diskar kostar långt mer än dess andrahandsvärde. En låda med oanvända telefoner är kapital som inte gör något.

Det agila målet att bygga projekt kring motiverade individer, med den miljö och det stöd de behöver, gäller direkt. Människor kan inte göra sitt bästa arbete på en enhet som är långsam, fallerande eller saknas. ITIL-traditionen bidrar med livscykelsynen och de register som hör till den, täckta i det tidigare ämnet om it-tillgångshantering (se ämne 7.1, Mätetal för it-tillgångshantering). Det här ämnet lägger till de mått som är specifika för fysisk utrustning: hur gammal den är, hur ofta den fallerar, hur väl den används och hur den lämnar.

Maskinvaruplanering görs ofta i stora cykler: byt ut allt vart några år, i ett stort inköp, och lev sedan med konsekvenserna. Ett jämnare alternativ, i andan av kontinuerlig leverans, är att förnya en andel av beståndet kontinuerligt. Det jämnar ut utgifter, sprider arbetsbördan av avbildning och överlämning och låter dig lära av varje parti innan du köper nästa. Det betyder också att du behöver data om ålder och fel för att avgöra när varje enhet ska gå.

Tre idéer organiserar måtten.

- **Ålder och fel.** [Felgraden](https://en.wikipedia.org/wiki/Failure_rate) för en enhetspopulation ändras över dess liv, och [genomsnittlig tid mellan fel](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF) är en vanlig sammanfattning för reparerbara poster. Medelvärden döljer mycket: ett parti med en felaktig komponent kan fela tidigt medan resten är fina. Titta på fel per modell, parti och åldersband och använd din egen historik, inte tillverkares siffror, för att planera.
- **Utnyttjande.** En enhet som ingen använder är slöseri, och en enhet som är överbelastad är en källa till friktion. Mät om utrustning används och om den passar arbetet.
- **Ansvarsfullt avslut.** Avvecklad utrustning kan hålla känsliga data, innehålla värdefulla och farliga material och bidra till elektroniskt avfall. [Elektroniskt avfall](https://en.wikipedia.org/wiki/Electronic_waste) är en växande miljöfråga, och många jurisdiktioner reglerar hur det måste hanteras. Säker [dataradering](https://en.wikipedia.org/wiki/Data_erasure) och certifierad återanvändning eller återvinning är livscykelns slut, inte en eftertanke. Ett angreppssätt med [cirkulär ekonomi](https://en.wikipedia.org/wiki/Circular_economy) håller produkter och material i bruk så länge som möjligt.

Maskinvarumått är utsatta för en bekant förvrängning. Ett team som belönas för en låg genomsnittlig enhetsålder kan förnya enheter som är fina. Ett team som belönas för låga utgifter kan töja livslängder tills fel stör människor. Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller, så varje mått paras med en kontroll att människor och planeten har det bättre, inte bara talet (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Nyckelprinciper

- **Planera ett jämnt flöde.** Förnya en andel av beståndet varje period och lär av varje parti.
- **Besluta utifrån belägg.** Använd din egen fel-, ålders- och användningsdata för att välja när du ska byta ut.
- **Titta på fördelningen.** Medelvärden döljer den gamla, fallerande och overksamma svansen.
- **Räkna total kostnad.** Inköpspriset är en del av en enhets kostnad under dess liv (se ämne 7.5, Tjänstekostnad och enhetsekonomi).
- **Skydda data ända till slutet.** En enhet är inte avvecklad förrän dess data är borta och beläggen är registrerade.
- **Föredra återanvändning och reparation.** Håll utrustning i tjänst så länge den tjänar människor väl.
- **Behandla utrustning som en del av arbetsmiljön.** Människor behöver enheter som fungerar.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Åldersprofil | Fördelning av enhetsålder per klass, och andel bortom den planerade livslängden | medianålder och 85:e percentilens ålder; andel enheter äldre än den planerade livslängden för klassen | år; procent | Tillgångsregistrets inköps- och driftsättningsdatum | It-tillgångshantering; kapacitets- och prestandahantering | Granskning av teknisk hälsa | Kvartalsvis |
| Andel utbyten i tid | Andel enheter som nådde planerat utbyte och byttes inom det planerade fönstret | enheter utbytta inom fönstret / enheter som nådde planerat utbyte under perioden | procent | Tillgångsregister och förnyelseplan | It-tillgångshantering; hantering av serviceförfrågningar | Planerat underhåll av arbetsmiljön | Kvartalsvis |
| Felgrad per modell | Fel per 100 enheter och år, per modell och åldersband | maskinvarufel under perioden / genomsnittligt antal enheter i tjänst, skalat till ett år, gånger 100 | fel per 100 och år | Incident- och reparationsposter sammanfogade med registret | Incidenthantering; it-tillgångshantering | Fel i arbetsmiljön | Kvartalsvis |
| Andel overksamma enheter | Andel utfärdade enheter utan aktivitet under en fastställd period | enheter utan inloggning eller nätverksaktivitet på 60 dagar / utfärdade enheter | procent | Loggar från slutpunktshantering, aggregerade per klass | It-tillgångshantering; ekonomisk styrning | Minskat slöseri | Månadsvis |
| Ledtid för ersättning | Tid för att ersätta en felande eller förlorad enhet med en fungerande | median och 85:e percentil av timmar eller dagar från rapport till att användaren har en fungerande enhet | dagar | Incident- och förfrågningsposter | Incidenthantering; hantering av serviceförfrågningar | Tid för att avblockera en teammedlem | Månadsvis |
| Slutförd säker avyttring | Andel avvecklade enheter med registrerat belägg för dataradering eller förstörelse | avvecklade enheter med belägg för radering eller förstörelse / avvecklade enheter | procent | Avyttringsregister och raderingsintyg | Informationssäkerhetshantering; it-tillgångshantering | Definition av klart för avveckling av utrustning | Månadsvis |
| Grad av återanvändning och återvinning | Andel avvecklade enheter som återanvändes, renoverades eller återvanns genom en godkänd kanal | enheter som återanvänts, renoverats eller återvunnits genom en godkänd kanal / avvecklade enheter | procent | Avyttrings- och partnerregister | It-tillgångshantering; leverantörshantering | Hållbarhetsmål i planeringen | Kvartalsvis |

Definiera enhetsklasserna (till exempel standardlaptop, utvecklararbetsstation, mobiltelefon, server, nätverksswitch), var och en med sin egen planerade livslängd. Felgraden räknar bara maskinvarufel och utesluter programvarufel, användarskador kodade separat och förlust. Klockan för ledtid för ersättning startar vid rapporten och stoppar när användaren bekräftar en fungerande enhet, inte när en skickas. Andel overksamma enheter utesluter enheter som avsiktligt är reserv, som räknas som en separat klass.

## Rekommendationer

### Planera flödet

**1. Sätt en planerad livslängd för varje klass och behandla den som en hypotes.** Utgå från leverantörens garanti och din egen erfarenhet och revidera allteftersom data kommer. En planerad livslängd på några år för laptops, längre för nätverksutrustning och kortare för hårt använda enheter är typisk, men rätt siffra för ditt bestånd kommer från din egen fel- och användningsdata. Skriv motiveringen i registret.

**2. Förnya kontinuerligt i små partier.** Byt ut en jämn andel enheter varje månad eller kvartal, ordnade efter ålder, felhistorik och behov. Små partier jämnar ut kostnaden, sprider avbildnings- och överlämningsarbetet och låter dig testa en ny modell med några få användare innan du förbinder dig. En enda stor förnyelse vart några år koncentrerar risk och insats.

**3. Håll en måttlig buffert av reserver.** En liten pool av färdiga enheter förkortar ledtiden för ersättning vid fel, förluster och nyanställda. Dimensionera bufferten utifrån din egen fel- och rekryteringshistorik och granska den kvartalsvis. Räkna reserver som en egen klass så att de inte förvränger utnyttjandet.

**4. Planera med ekonomi, inte emot dem.** Kom överens om hur enheter aktiveras och skrivs av, och hur en jämn förnyelse syns i budgeten. Regler för [avskrivning](https://en.wikipedia.org/wiki/Depreciation) påverkar när ett utbyte är billigast på papperet, och de bör inte driva utbyte av enheter som fortfarande tjänar människor väl. Håll en delad bild av planen och dess antaganden.

### Lär av din egen data

**5. Studera fel per modell, parti och ålder.** Sammanfoga reparations- och incidentposter med registret och titta på fel per 100 enheter och år per modell och åldersband. Leta efter partier som fallerar tidigt, modeller som fallerar på ett visst sätt och åldern vid vilken fel börjar stiga. Använd fynden för att välja modeller och tidsätta utbyte. Var försiktig med små urval och säg när en modell har för få enheter för att bedömas (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

**6. Använd garanti och reparation klokt.** Känn till vad [garanti](https://en.wikipedia.org/wiki/Warranty) täcker och hur länge, registrera anspråk och jämför kostnaden för reparation med utbyte. Reparation håller utrustning i bruk och utanför avfallsströmmen, och rätten att reparera delar och information är en aktiv policyfråga på flera håll. Föredra modeller som kan repareras och uppgraderas när annat är lika.

**7. Mät användning för att hitta vad som är overksamt och vad som är ansträngt.** Aggregera aktivitetsdata per klass och leta efter enheter som aldrig används och enheter som konsekvent går på max. Overksamma enheter kan omtilldelas eller avvecklas. Ansträngda enheter är friktion, och användare kommer att känna det (se ämne 6.4, Användar- och medarbetarupplevelse). Respektera integriteten: redovisa per klass och grupp, aldrig per person, och använd minsta möjliga data.

**8. Följ ledtid för ersättning som en tjänst.** Mät hur lång tid det tar för en person att få en fungerande enhet efter ett fel eller en förlust och ta med stegen: rapport, godkännande, lager, avbildning, leverans och överlämning. Den 85:e percentilen talar om hur dåliga de olyckliga fallen är. Rätta det långsammaste steget först.

### Hantera enheter väl

**9. Hantera enheter centralt och konsekvent.** [Hantering av mobila enheter](https://en.wikipedia.org/wiki/Mobile_device_management) och liknande verktyg låter dig registrera, konfigurera, uppdatera och rensa enheter på distans, vilket minskar manuellt arbete och risk. Använd dem för att hålla registret korrekt, för att skicka uppdateringar med omsorg om människors fokus och för att stödja respons vid förlorade enheter.

**10. Gör säker avyttring till en definierad process.** Följ en erkänd standard för rensning av media, till exempel vägledningen publicerad av USA:s National Institute of Standards and Technology, eller motsvarande i din jurisdiktion. Registrera metoden, datumet och beläggen för varje enhet och använd certifierade partner för förstörelse och återvinning. Ett avyttringssteg utan belägg är ett glapp.

**11. Föredra återanvändning, sedan återvinning.** Där enheter fortfarande fungerar, omplacera dem internt, skänk dem genom en godkänd partner eller sälj dem efter rensning. Använd certifierade återvinnare för resten. Mät andelen avvecklade enheter som går till varje kanal och skälen för dem som går rakt till avfall. Regler om elektroniskt avfall varierar mellan jurisdiktioner och efterlevs genom tillsyn, så involvera dina kollegor inom juridik och hållbarhet.

**12. Granska livscykeln med människorna som använder den.** En gång per kvartal, samla ekonomi, säkerhet, upphandling, servicedesken och några användare för att titta på ålder, fel, ledtid och avyttring. Fråga vad som fungerar och vad som irriterar människor. Detta är kontinuerligt samarbete kring arbetsmiljön, och det håller planen realistisk.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Åldersprofil | Att byta ut friska enheter för att sänka medelvärdet; att utesluta gamla enheter genom att omklassificera dem som reserver | Felgrad per åldersband; andel overksamma enheter; granskning av omklassificering |
| Andel utbyten i tid | Att vidga det planerade fönstret; att skjuta upp planerade datum genom att redigera planen | Planändringar loggade med skäl; jämför med fel och användaråterkoppling |
| Felgrad per modell | Att koda fel som användarskada eller programvarufel; att fördröja reparationsposter | Stickprova felkodning; jämför reparationsposter med incidentposter |
| Andel overksamma enheter | Att räkna schemalagd bakgrundsaktivitet som användning; att omtilldela overksamma enheter till spökanvändare | Använd mänsklig inloggning som aktivitetssignal; stickprovskontrollera tilldelningar |
| Ledtid för ersättning | Att stoppa klockan vid avsändning; att stänga förfrågan innan användaren har en fungerande enhet | Klockan slutar vid användarens bekräftelse; enkät om nyliga ersättningar |
| Slutförd säker avyttring | Att registrera radering utan belägg; intyg som inte matchats mot serienummer | Matcha intyg mot serienummer; revidera ett stickprov med avyttringspartnern |
| Grad av återanvändning och återvinning | Att räkna enheter skickade till en mäklare med okänd nedströmshantering som återvunna | Kräv certifierade partner och nedströmsrapportering; stickprovsrevisioner |

En sund avläsning är en åldersprofil med en tunn gammal svans, felgrader som vägleder inköp, korta ersättningstider, fullständiga avyttringsbelägg och en fallande andel utrustning som går till avfall.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Förnyelse med fast cykel | Förutsägbar budget och enkla regler | Byter ut enheter som är fina; skapar en stor arbetstopp |
| Kontinuerlig förnyelse i partier | Jämn kostnad och arbetsbelastning; lär mellan partier | Kräver god data och disciplin |
| Kör till fel | Lägsta inköpskostnad | Stör människor; oplanerad kostnad; säkerhetsrisk med gamla system |
| Kort planerad livslängd | Nyare, snabbare, bättre stödd | Högre kostnad och mer avfall |
| Lång planerad livslängd | Lägre kostnad och mindre avfall | Fler fel och säkerhetsexponering i svansen |
| Reparation och återanvändning internt | Håller enheter i bruk; mindre avfall | Kräver kompetens och delar |
| Utlagd avyttring | Specialiserad hantering | Kräver tillsyn av nedströmskedjan |

Svaret är att förnya kontinuerligt i små partier, utifrån ålder, fel och behov, att reparera och återanvända där det tjänar människor och att hålla avyttringskedjan till en standard du kan belägga.

## Frågor att diskutera med teamet

**1. Hur ser ålders- och felbilden för våra enheter ut, och vem har de äldsta?**
Visa åldersfördelningen och felgraden per band. Titta på vem som har de äldsta enheterna och om de är de som mest behöver tillförlitlig utrustning. Facilitatorn bör fråga vad teamet skulle ändra i förnyelseordningen utifrån bilden.

**2. Hur lång tid tar det för någon att få en fungerande enhet efter att deras gått sönder?**
Följ de tre senaste ersättningarna från rapport till fungerande enhet. Notera väntorna. Fråga vilket steg som kunde tas bort eller automatiseras. Enas om en ändring och ett sätt att mäta effekten.

**3. Vilka modeller ger oss mest besvär, och hur vet vi det?**
Lista modeller med högst fel- eller ärendegrad. Kontrollera om urvalet är stort nog att bedöma. Fråga hur fynden påverkar nästa inköp. Om de inte gör det, besluta hur de ska återföras till upphandling.

**4. Vad skulle vi göra om en avvecklad enhet dök upp med data på?**
Gå igenom avyttringsvägen och beläggen som sparas vid varje steg. Fråga var den svagaste länken är och vem som verifierar nedströmspartnern. Enas om en stickprovskontroll av avyttringsbelägg nästa kvartal.

**5. Var är vår utrustning overksam, och varför?**
Titta på enheter utan användning på 60 dagar och på reserver. Fråga om de ska omtilldelas, avvecklas eller behållas. Samtalet avslöjar också missanpassningar mellan vad människor fick och vad de behöver.

**6. Vad skulle krävas för att återanvända eller reparera mer av det vi avvecklar?**
Lista hindren: kompetens, delar, policy eller partner. Fråga hur en pilot med en enhetsklass skulle se ut och hur den skulle mätas. Ta med hållbarhets- och ekonomiperspektiven.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam är beroende av pålitliga maskiner och testenheter, och de känner långsamma byggen och fallerande laptops direkt. De bör flagga utrustningen som saktar ner dem, delta i valet av modeller för sina roller och förvänta sig en snabb ersättningsväg. Team som testar på fysiska enheter, till exempel telefoner, bör behandla dessa enheter som tillgångar med ägare och en förnyelseplan.

### Service- och driftteam

Driftteam driver försörjningskedjan: köp, mottagning, avbildning, driftsättning, reparation och avyttring. De bör hålla register aktuella, bevaka felmönster, hålla en förnuftig reservpool och bevara avyttringsbelägg. De bär det fysiska arbetet, och deras kapacitet begränsar hur fort förnyelsen kan gå.

### Ledning och styrning

Ledare vill ha förutsägbar kostnad, låg risk och en hållbarhetsberättelse. De bör finansiera jämn förnyelse, be om ålders- och feldata i stället för en naken medelålder och kräva avyttringsbelägg. Styrningen bör kontrollera att miljö- och dataskyddsskyldigheter uppfylls och att planen ses över när förhållandena ändras.

### Kunder och användare

Användare vill ha en enhet som fungerar, snabbt ersatt när den inte gör det. De äger också en del av resultatet: att rapportera problem tidigt, lämna tillbaka utrustning och tala om för it när de flyttar. Deras syn på utrustningen och ersättningsprocessen är den mest direkta återkoppling som finns. Involvera dem i valet av modeller för deras arbete.

## I praktiken: ett exempel från tjänstehantering

En regionförvaltnings it-avdelning stöder 3 800 anställda på 40 platser, med en blandning av kontors-, fält- och delade enheter. Siffrorna nedan är illustrativa.

Vart fjärde år bytte förvaltningen ut alla laptops i en enda upphandling, och den senaste cykeln slutade med en topp av fel under året före utbytet och månader av avbildningsarbete under året då det skedde. Tillgångschefen föreslår en jämn förnyelse och bygger en bild ur registret och reparationsposterna. Medianåldern för en laptop är 3,2 år och den 85:e percentilen är 5,1 år. Fel per 100 laptops och år stiger från ungefär 6 för enheter under tre år till ungefär 19 för enheter över fem. En modell köpt i ett enda parti visar 24 fel per 100 och år vid två års ålder, orsakade av ett batterifel. Mediantiden för ersättning är 5 dagar, med en 85:e percentil på 12 dagar, mest väntan på avbildning. Andelen overksamma enheter är 7 procent, mest reserver och enheter hos personal på lång ledighet. Av 410 laptops som avvecklades förra året har 366 ett registrerat raderingsintyg, en slutförandegrad på 89 procent, och 12 procent gick till en återvinnare utan nedströmsrapportering.

Teamet gör fyra ändringar. Det går över till en kvartalsvis förnyelse av ungefär 6 procent av laptopsen, ordnade efter ålder och felhistorik, med fältpersonal och de äldsta enheterna först. Det förhandlar med leverantören om det felaktiga partiet under garanti. Det håller en reservpool på 2 procent av beståndet, förladdad med standardavbilden, vilket kortar väntan på avbildning. Det kräver ett intyg matchat mot serienumret för varje avyttrad enhet och byter till en återvinnare som rapporterar om nedströmshantering. Det startar också en liten pilot för att renovera och omplacera enheter som är yngre än fyra år.

Två kvartal senare är den 85:e percentilen av ledtid för ersättning 4 dagar, andelen enheter över fem år har fallit från 22 procent till 13 procent, slutförandet av avyttringsbelägg är 99 procent och graden av återanvändning och återvinning genom godkända kanaler är 94 procent. Ekonomiavdelningen ber om ett enda mål för genomsnittlig enhetsålder, och tillgångschefen föreslår att följa åldersprofilen och felgraden tillsammans, med förklaringen att en låg medelålder kan köpas genom att byta ut friska enheter. Beslutet registreras i beslutsloggen, med en granskning om sex månader.

## Agilitet, AI, automatisering och analys

### Agilitet

Planera förnyelse som ett jämnt flöde och granska ålders- och feldata med användare regelbundet. Varningen är att en stel ersättningsålder slösar fungerande enheter och belastar budgetar.

### AI

AI-funktioner kan höja maskinvarukraven, till exempel för lokala modeller, vilket ändrar tidpunkten för förnyelse. Följ fel och ålder ur din egen data och lägg till ett mått på enheter som inte kan köra verktygen människor behöver. Varningen är att leverantörspåståenden om AI-redo maskinvara bör prövas mot dina egna arbetsbelastningar.

### Automatisering

Automatisera livscykelhändelser, till exempel garantidatum och avyttringssteg, och mät automatiseringen på missade händelser. Varningen är att automatiska arbetsflöden för rensning och avyttring behöver bevis på slutförande, så revidera ett stickprov.

### Analys

Visa åldersprofilen och felgrader per modell med antal. Beslutet detta ger underlag för är hur mycket som ska förnyas varje period. Varningen är att felgrader för små flottor är brusiga, så undvik slutsatser ur en handfull enheter.

## Branschperspektiv

**Startup.** Enheter köps vid behov och ofta av personen som ska använda dem. Håll en enkel lista med inköpsdatum, rensa enheter vid avgång och undvik att köpa för mycket. Använd ett verktyg för hanterad registrering tidigt, eftersom det är billigare än att eftermontera senare.

**Småföretag.** Kostnaden för en fallerad enhet faller på få människor. Håll en eller två reserver, registrera garantidatum och ha en rutin för rensning och avyttring. Lokala återvinnare och renoverare kan vara goda partner. En checklista på tre rader för avyttring slår ingen alls.

**Storföretag.** Skala gör partibeteende och leverantörshantering viktiga. Använd feldata för att förhandla med leverantörer, standardisera några få modeller per klass och kör kontinuerlig förnyelse med logistikstöd. Anpassa till hållbarhetsrapportering, eftersom maskinvara ofta dominerar it:s avtryck.

**Offentlig sektor.** Upphandlingsregler, arkivering och strikt dataskydd formar livscykeln. Dokumentera rensning enligt en erkänd standard, bevara avyttringsbelägg under den krävda perioden och överväg offentliga åtaganden om hållbarhet och reparation. Offentliga organ kan vara skyldiga att rapportera elektroniskt avfall (se ämne 8.3, Mätetal för regelefterlevnad och revision).

## Affärscase: motiv, ROI och TCO

Kostnaderna är insatsen att sammanfoga register-, reparations- och slutpunktsdata; viss verktyg för enhetshantering om det inte redan finns; reservpoolen; och processarbetet med avyttring med belägg. Besparingarna och nyttorna syns i färre störande fel, en jämnare budget, mindre bortslösad utrustning och lägre risk för en dataincident.

Bygg caset ur din egen data. Jämför kostnaden för att driva en enhet förbi dess planerade livslängd, inklusive supportinsatsen och den förlorade arbetstiden per fel, med kostnaden för att byta ut den tidigare. Jämför kostnaden för reservpoolen med de sparade dagarna av förlorat arbete per fel. Räkna antalet avvecklade enheter utan belägg för radering och kostnaden för den enskilda dataincident som skulle följa. Undvik att citera genomsnittliga enhetslivslängder eller siffror för elektroniskt avfall ur publicerade källor utan att kontrollera deras metod och datum. Total ägandekostnad sammanför dessa delar (se ämne 7.5, Tjänstekostnad och enhetsekonomi), och den fulla [totala ägandekostnaden](https://en.wikipedia.org/wiki/Total_cost_of_ownership) för en enhet omfattar inköp, support, energi, störningar och avyttring.

## Antimönster och fallgropar

- **Att byta ut allt enligt kalender.** Det slösar fungerande enheter och skapar en arbetstopp. Använd ålder, fel och behov.
- **Att köra till fel.** Den oplanerade kostnaden och störningen överstiger besparingen. Bevaka åldersvansen.
- **Att använda medelåldern som mål.** Det kan nås genom att byta ut friska enheter. Visa profilen och felgraden.
- **Att lita på tillverkares tillförlitlighetssiffror.** Din användning skiljer sig. Använd din egen feldata.
- **Att avyttra utan belägg.** En oregistrerad rensning är en risk du inte kan visa att du hanterat.
- **Att skicka enheter till den billigaste återvinnaren.** Nedströmshantering spelar roll. Använd certifierade partner.
- **Att spåra människor genom deras enheter.** Redovisa per klass och grupp, och aldrig per individ.
- **Att ignorera reparation och återanvändning.** Att hålla utrustning i tjänst är billigare och snällare mot miljön.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Planering | Köp när det går sönder | Periodisk förnyelse enligt kalender | Planerad livslängd per klass; jämn förnyelse i partier | Förnyelse tidsatt efter ålder, fel och behov; reserver dimensionerade ur data | Förnyelse samordnad med leverantörer, ekonomi och hållbarhetsmål över platser |
| Lärande ur data | Inga felregister | Reparationsregister förs | Felgrad per modell och ålder följs | Fynd ändrar inköp och tidpunkt; ledtid hanteras | Fel- och användningsdata delas med leverantörer för att förbättra design och villkor |
| Avslut | Enheter försvinner | Informell rensning | Avyttringsprocess med belägg för varje enhet | Belägg revideras; återanvändning och återvinning följs | Cirkulär praxis med certifierade partner och offentlig rapportering |

## Checklista

- [ ] Enhetsklasser och planerade livslängder är definierade, med motiveringen registrerad.
- [ ] En jämn förnyelseplan finns och granskas med ekonomi.
- [ ] Åldersprofil, felgrad per modell och ledtid för ersättning redovisas.
- [ ] En reservpool är dimensionerad utifrån fel- och rekryteringsdata.
- [ ] Overksamma enheter identifieras per klass, med integritetsregler på plats.
- [ ] Garantianspråk och reparationer registreras och används i inköpsbeslut.
- [ ] Varje avvecklad enhet har en registrerad rensningsmetod och belägg.
- [ ] Avyttringspartner är certifierade och rapporterar om nedströmshantering.
- [ ] Grad av återanvändning och återvinning följs.
- [ ] En kvartalsvis granskning inkluderar ekonomi, säkerhet, upphandling, servicedesken och användare.

## AI-prompter

**Analysera feldata efter modell och ålder.**

```text
Here is a summary of hardware failures for [device class] over [period]: model,
number in service, age band, and number of failures: [paste table]. Describe
patterns by model and age, flag batches or models that look unusual, say where
the sample is too small to judge, and suggest what to check next. Do not apply
manufacturer figures or invent benchmark values. List your assumptions.
```

**Utforma en plan för kontinuerlig förnyelse.**

```text
We have [number] devices in these classes: [list with age profile]. Failure and
repair data: [summary]. Budget constraints: [summary]. Propose a quarterly
refresh plan that replaces a steady share, orders replacements by age, failure
history, and user need, and keeps a spares pool. Explain the trade-offs
against a fixed-cycle refresh and what to measure. Do not invent prices. List
your assumptions.
```

**Granska en avyttringsprocess.**

```text
Our disposal process for retired [device types] is: [describe steps, partners,
and records]. Review it for gaps in data sanitization, evidence, chain of
custody, and environmental handling, and suggest improvements and spot checks.
Mention that requirements vary by jurisdiction and should be checked with
legal and security specialists. Do not provide legal conclusions. List your
assumptions.
```

**Minska ledtiden för ersättning.**

```text
Replacing a failed device currently takes these steps and typical waits:
[list]. Identify the slowest steps, suggest changes (for example preloaded
spares, remote enrollment, or simplified approval), and describe how to
measure the effect on the median and 85th percentile. Do not assume tooling we
have not described. List your assumptions and risks.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett mått på maskinvarans livscykel.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för maskinvarumått bär sin manipuleringsvektor, sitt skyddsräcke och sin beläggsregel.

## Viktigaste slutsatser

- Förnya en jämn andel enheter kontinuerligt, utifrån din egen ålders-, fel- och användningsdata.
- Titta på åldersfördelningen och fel per modell, inte medelvärdet.
- Håll ersättning snabb med en reservpool och en kort, mätt väg.
- Behandla säker avyttring med belägg som livscykelns slut och föredra reparation, återanvändning och certifierad återvinning.
- Redovisa per enhetsklass och grupp och spåra aldrig individer genom deras utrustning.
- Granska livscykeln med ekonomi, säkerhet, upphandling och användare tillsammans.

## Referenser och vidare läsning

1. National Institute of Standards and Technology, *Guidelines for Media Sanitization*, NIST Special Publication 800-88 Revision 1, 2014.
2. European Parliament and Council, *Directive 2012/19/EU on waste electrical and electronic equipment (WEEE)*, 2012.
3. Baldé, C. P., et al., *The Global E-waste Monitor*, United Nations University, International Telecommunication Union, and International Solid Waste Association (latest edition).
4. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Failure rate](https://en.wikipedia.org/wiki/Failure_rate).
8. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
9. Wikipedia, [Electronic waste](https://en.wikipedia.org/wiki/Electronic_waste).
10. Wikipedia, [Data erasure](https://en.wikipedia.org/wiki/Data_erasure).
11. Wikipedia, [Circular economy](https://en.wikipedia.org/wiki/Circular_economy).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Depreciation](https://en.wikipedia.org/wiki/Depreciation).
14. Wikipedia, [Warranty](https://en.wikipedia.org/wiki/Warranty).
15. Wikipedia, [Mobile device management](https://en.wikipedia.org/wiki/Mobile_device_management).
16. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
