# Mätetal för kapacitet och prestanda

**Mät hur full en tjänst är, hur långsamma dess långsammaste förfrågningar är och hur mycket utrymme som återstår innan användare märker det, och prognostisera sedan efterfrågan med intervall så att kapaciteten kommer före behovet, inte efter klagomålet.**

## Översikt och motiv

Tillgänglighet talar om huruvida en tjänst svarar. Kapacitet och prestanda talar om hur väl den svarar, och hur länge den fortsätter göra det när efterfrågan växer. En kassasida som svarar på åtta sekunder är "uppe" enligt de flesta tillgänglighetsdefinitioner och "trasig" enligt varje kunds definition. En databas på 95 procent av sin lagring är frisk i dag och ett avbrott nästa månad. Det här ämnet täcker de mått som stänger dessa glapp.

[Kapacitetsplanering](https://en.wikipedia.org/wiki/Capacity_planning) är praktiken att fastställa de resurser en tjänst behöver för att möta förändrad efterfrågan. I ITIL 4 hör detta till praktiken kapacitets- och prestandahantering, som syftar till att säkerställa att tjänster uppnår överenskommen och förväntad prestanda och tillgodoser nuvarande och framtida efterfrågan kostnadseffektivt. Praktiken beskriver detta på tre nivåer: verksamheten (vad organisationen kommer att kräva av sina tjänster), tjänsten (hur en tjänst beter sig under belastning) och komponenten (hur varje server, databas, nätverkslänk eller kö beter sig). Måtten i det här ämnet verkar mest på tjänste- och komponentnivå, och de behöver underlag från verksamhetsnivån för att prognostisera något.

[Site reliability engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) behandlar fördröjning, trafik, fel och mättnad som de fyra signaler som är värda att bevaka på varje användarvänt system, och knyter prestandamål till servicenivåmål (se ämne 5.2, SLI:er, SLO:er och felbudgetar). Agila team möter kapacitet som en leveransfråga: kan nästa release bära den förväntade belastningen, och vem äger svaret? Att behandla prestanda som ett acceptanskriterium, kontrollerat i pipelinen, flyttar samtalet tidigare.

Flera termer återkommer i det här ämnet. **Utnyttjande** är andelen av en resurs kapacitet som används över ett intervall, till exempel andelen processortid som är upptagen. **Mättnad** är mängden arbete som väntar eftersom en resurs är fullt utnyttjad, till exempel längden på en körkö eller en backlog av förfrågningar. Utnyttjande säger hur upptagen en resurs är. Mättnad säger om arbete köar för den, och köer är vad användare känner. **[Fördröjning](https://en.wikipedia.org/wiki/Latency_(engineering))** (latency) är tiden mellan en förfrågan och dess svar. **[Genomflöde](https://en.wikipedia.org/wiki/Throughput)** är takten med vilken en tjänst slutför arbete, till exempel förfrågningar per sekund. **Marginal** (headroom) är glappet mellan nuvarande toppbelastning och den belastning vid vilken tjänsten slutar nå sina mål. **Efterfrågan** är det arbete användare och verksamhet ber tjänsten om, vilket inte är detsamma som det arbete den slutför: en tjänst som är överbelastad slutför mindre än vad som begärdes.

En egenskap hos väntelinjer förklarar varför dessa mått beter sig som de gör. [Köteori](https://en.wikipedia.org/wiki/Queueing_theory) visar att för en tjänst med slumpmässiga ankomster växer väntetiden långsamt medan utnyttjandet är måttligt och stiger sedan brant när utnyttjandet närmar sig fullt bruk. [Littles lag](https://en.wikipedia.org/wiki/Little%27s_law) relaterar det genomsnittliga antalet förfrågningar i ett system till ankomsttakten och den genomsnittliga tid var och en tillbringar där. En resurs med högt genomsnittligt utnyttjande är nära en avgrund. Kurvans exakta form beror på tjänsten, så hitta den genom att testa ditt eget system med [belastningstestning](https://en.wikipedia.org/wiki/Load_testing) i stället för att låna ett tröskelvärde från en allmän artikel.

Fördröjning behöver särskild omsorg eftersom medelvärdet döljer upplevelsen som spelar roll. En [percentil](https://en.wikipedia.org/wiki/Percentile) anger värdet under vilket en given andel av observationerna faller: den 95:e percentilen (p95) är den fördröjning som 95 procent av förfrågningarna slår. [Svansfördröjning](https://en.wikipedia.org/wiki/Tail_latency) tenderar att dominera i system där en användarhandling förgrenar sig i många interna anrop. Redovisa percentiler i stället för enbart medelvärdet (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal, och ämne 3.3, Svarstid och lösningstid för incidenter, som för samma resonemang om lösningstid).

Slutligen beror kapacitet på att [prognostisera](https://en.wikipedia.org/wiki/Forecasting) efterfrågan, och efterfrågan har mönster: dagliga cykler, veckocykler och [säsongsvariation](https://en.wikipedia.org/wiki/Seasonality) knuten till kalendern, kampanjer och produktlanseringar. [Automatisk skalning](https://en.wikipedia.org/wiki/Autoscaling) ändrar hur detta känns, eftersom molnplattformar kan lägga till resurser på minuter, men tar inte bort ämnet. Automatisk skalning har gränser, en fördröjning, en kostnad och beroenden som inte skalar, till exempel en databas eller ett tredjepartsgränssnitt. Kostnadssidan hör hemma hos FinOps (se ämne 7.6, Mätetal för FinOps och molnkostnader).

Angränsande ämnen täcker tillgänglighetsaritmetik (se ämne 5.3, Mätetal för tillgänglighet), larmutformning (se ämne 5.5, Mätetal för övervakning och larmkvalitet) och schemabelastning (se ämne 5.7, Mätetal för rutinarbete och jour). Här är ämnet tjänstens egna resurser och svarstider.

## Nyckelprinciper

- **Mät mättnad såväl som utnyttjande.** Utnyttjande visar hur upptagen en resurs är, och mättnad visar om arbete väntar. Användare upplever väntan.
- **Redovisa fördröjning som en fördelning.** Använd percentiler per användarvänd operation och håll den långsamma svansen synlig. Ett medelvärde av en skev fördelning beskriver nästan ingen.
- **Knyt mål till användarupplevelse.** En tröskel är meningsfull när den kan spåras till något en användare eller verksamheten bryr sig om, inte till vad ett verktyg råkar rita.
- **Planera med intervall och granska dem.** En prognos är ett intervall med angivna antaganden. Jämför den med vad som hände och lär av felet.
- **Känn dina gränser genom att testa.** Kapacitet är en hypotes tills ett realistiskt belastningstest bekräftar den. Upprepa testet efter ändringar som spelar roll.
- **Beskriv system, aldrig människor.** Dessa mått tillhör tjänster, komponenter och team. De är aldrig ett betyg på individer.
- **Väg kostnad mot risk.** Reservkapacitet kostar pengar, och saknad kapacitet kostar kunder. Gör avvägningen synlig så att den väljs, inte glider in i.

## Mätetalsdefinitioner

Tabellen listar sju mått. Klockorna och gränserna anges i varje formel. Percentilbaserade mått använder ett fast fönster, angivet i registret, och beräknas ur råa observationer eller ur histogram, aldrig som ett medelvärde av medelvärden.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Resursutnyttjande | Andel av en resurs kapacitet som används över ett intervall, redovisad som en hög percentil av intervallserien | upptagen kapacitet / total kapacitet, per intervall om 1 till 5 minuter; redovisa medianen och den 95:e percentilen över granskningsfönstret; underhållsfönster där resursen tömts utesluts | procent | Infrastrukturövervakning och mätetal från molnplattformen | Kapacitets- och prestandahantering; övervakning och händelsehantering | Driftacceptanskriterier i definitionen av klart; SRE:s resurssignaler | Veckovis |
| Mättnad | Mängden arbete som väntar på en resurs som är fullt utnyttjad | kölängd, körkö, väntande förfrågningar eller strypta förfrågningar, per intervall; redovisa den 95:e percentilen och andelen intervall med någon väntan; intervall utan efterfrågan utesluts | antal, eller procent av intervallen | Applikations- och infrastrukturtelemetri | Kapacitets- och prestandahantering; övervakning och händelsehantering | SRE:s mättnadssignal; gräns för pågående arbete på en tjänstekö | Veckovis |
| Percentil av fördröjning | Tid för att besvara en förfrågan för en användarvänd operation, redovisad vid medianen, p95 och p99 | svarstid från att förfrågan tas emot vid kanten till sista byten skickats, per lyckad förfrågan; misslyckade förfrågningar redovisas som fel, inte som snabba svar; mät över ett rullande fönster | millisekunder | Loggar från lastbalanserare eller gateway, spårning, övervakning av verkliga användare | Servicenivåhantering; kapacitets- och prestandahantering | SRE:s fördröjningsindikator och servicenivåmål | Kontinuerligt, granskas veckovis |
| Marginal | Återstående belastning en tjänst kan bära innan den bryter mot sina mål | (testad eller modellerad brytpunktsbelastning - nuvarande toppbelastning) / nuvarande toppbelastning; toppen är den livligaste timmen i fönstret; brytpunktsbelastningen är den belastning vid vilken fördröjningsmålet först bryts i ett test, inte hårdvarans maximum | procent, eller dagar vid nuvarande tillväxt | Resultat från belastningstester och trafiktelemetri | Kapacitets- och prestandahantering; servicenivåhantering | Icke-funktionella krav och prestandatester i pipelinen | Månadsvis, och före större lanseringar |
| Prognosfel | Skillnaden mellan prognostiserad och faktisk efterfrågan för en period | absolut (prognostiserad topp - faktisk topp) / faktisk topp, för en angiven horisont; prognosen fryses vid horisontens början och revideras inte efteråt; oprognostiserade engångshändelser listas, tas inte bort | procent | Prognosregister och trafiktelemetri | Kapacitets- och prestandahantering; efterfrågerelaterad planering i ekonomisk styrning av tjänster | Release- och färdplansprognoser; SRE:s efterfrågeprognoser | Kvartalsvis |
| Ledtid för kapacitet | Tid som behövs för att ta ny kapacitet i bruk när behovet accepterats | klockan startar när kapacitetsbegäran godkänns och stoppar när kapaciteten bär produktionstrafik; redovisa medianen och den 85:e percentilen; avbrutna begäranden utesluts | dagar | Begäransposter i ITSM-verktyget, ändringsposter, provisioneringsloggar | Kapacitets- och prestandahantering; hantering av serviceförfrågningar; ändringsmöjliggörande | Ledtid för en plattformsbacklogpost (se ämne 2.2, Ledtid, cykeltid och flödeseffektivitet) | Kvartalsvis |
| Täckning av prestandatester | Andel kritiska tjänster med ett aktuellt, realistiskt belastningstest | kritiska tjänster med ett godkänt belastningstest yngre än en angiven ålder, på en representativ miljö och arbetsbelastning / kritiska tjänster i registret; åldersgränsen är nedskriven | procent | Testresultatlager och tjänsteregister | Kapacitets- och prestandahantering; releasehantering | Icke-funktionella tester i pipelinen för kontinuerlig leverans | Kvartalsvis |

Tillsammans besvarar dessa fyra frågor: hur full är den, hur långsam är den, hur mycket utrymme är kvar och hur snabbt kan vi svara när svaret ändras.

## Rekommendationer

### Börja med användaren, sedan resursen

**1. Välj de få operationer användare bryr sig om och mät dem.** En tjänst har hundratals ändpunkter och en handfull resor som spelar roll, till exempel att logga in, söka, betala och ladda ner ett kontoutdrag. Kom överens om dessa med produktägare och kunder och sätt en fördröjningsförväntan för var och en. Dessa länkar naturligt till servicenivåindikatorer (se ämne 5.2, SLI:er, SLO:er och felbudgetar).

**2. Para varje resursdiagram med ett mättnadsdiagram.** Att bara visa processoranvändning inbjuder till den falska tryggheten "den nådde bara 70 procent". Lägg till kön, de väntande förfrågningarna eller antalet strypningar bredvid. När mättnad dyker upp innan utnyttjandet ser alarmerande ut har du hittat den verkliga begränsningen, och den begränsningen är ofta inte resursen du bevakade, till exempel en anslutningspool, en trådgräns eller en hastighetsgräns på ett partnergränssnitt.

**3. Föredra den livliga svansen framför det tysta medelvärdet.** Medelvärden över ett dygn blandar nattens död med lunchtoppen. Titta på den livligaste perioden och registrera datum och orsak till de värsta intervallen. Planeringsfrågan är hur tjänsten beter sig under sin värsta förväntade timme.

### Redovisa fördröjning ärligt

**4. Publicera percentiler per operation och namnge fönstret.** Ange medianen, p95 och p99 för varje viktig operation över ett rullande fönster och säg vilka förfrågningar som ingår. Ta aldrig medelvärde av percentiler över servrar eller över operationer, eftersom resultatet inte motsvarar någon verklig användares upplevelse; kombinera histogram eller de råa observationerna i stället. Om urvalet är litet, säg det, eftersom en p99 från några hundra förfrågningar är ett brusigt tal (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

**5. Mät där användaren är, såväl som där servern är.** Tidsmätningar på serversidan lämnar utanför nätverket, webbläsaren och enheten. Lägg till övervakning av verkliga användare eller syntetiska kontroller så att du kan skilja en långsam backend från en långsam sista sträcka.

**6. Räkna fel och tidsgränser tillsammans med fördröjning, inte i stället för den.** En tjänst som fallerar snabbt ser snabb ut i ett fördröjningsdiagram, och en tjänst som överskrider tidsgränsen ser långsam ut av fel skäl. Redovisa felgraden med fördröjningspercentilen så att ett snabbt fel inte kan smickra resultatet.

### Hitta gränserna och lämna sedan utrymme

**7. Testa brytpunkten med avsikt.** Kör belastningstester som spelar upp en realistisk blandning av operationer, trappa upp belastningen och notera var fördröjningsmålet först bryts och vilken resurs som mättas först. Testa på en miljö som liknar produktion på de sätt som spelar roll och skriv ned de sätt den inte gör det. Ett misslyckat test på en säker plats är den billigaste incident du kommer att ha (se ämne 4.5, Mätetal för releaser och driftsättning, för att lägga kontroller i pipelinen).

**8. Sätt marginalen som en policy och granska den som en avvägning.** Bestäm hur mycket marginal en tjänst håller över sin förväntade topp, och varför. Kritiska kundvända tjänster motiverar mer, interna batchtjänster mindre. Siffran är ett verksamhetsval om kostnad och risk, så registrera resonemanget och ompröva det när kostnaden för ett avbrott eller priset på kapacitet ändras. Kopiera inte en siffra från en annan organisation.

### Prognostisera efterfrågan med dem som känner den

**9. Fråga verksamheten vad som kommer och skriv ned prognosen.** Marknadsföringskampanjer, nya kunder, regulatoriska tidsfrister och säsongshändelser ändrar efterfrågan långt innan trafiken visar det. Håll ett kort prognosregister med datum, antaganden, intervallet, ägaren och källan till varje indata. En prognos given som ett intervall, till exempel ett lågt, ett förväntat och ett högt fall, är ärligare än ett enda tal och mer användbar för att avgöra hur mycket som ska köpas.

**10. Poängsätt prognosen och använd felet för att förbättra den.** Efter varje period, jämför den frusna prognosen med vad som hände, med hjälp av prognosfelet, och lista orsakerna till stora missar. Vanliga orsaker är en oannonserad kampanj, en förändring i användarbeteende och ett beroende som flyttat sig. Syftet är inte ett fel på noll, vilket inte är uppnåeligt, utan att lära sig vilka indata som är pålitliga och att vidga intervallet där de inte är det.

### Gör det lätt att lägga till kapacitet

**11. Förkorta ledtiden för kapacitet innan du jagar noggrannhet.** Om ny kapacitet tar veckor att komma måste du prognostisera långt i förväg och bära mer reserv. Om den tar minuter kan du köra närmare behovet. Titta på stegen mellan "godkänd" och "bär trafik", till exempel upphandling, godkännande, provisionering, konfiguration och testning, och ta bort de längsta väntorna först (se ämne 4.3, Mätetal för ändringsmöjliggörande). I ITIL-termer är detta ett val av kapacitetsstrategi, att leda efterfrågan, matcha den eller släpa efter den; välj medvetet, per tjänst.

**12. Behandla automatisk skalning som ett system att mäta.** Registrera hur ofta skalningen utlöses, hur lång tid ny kapacitet tar på sig att bli användbar, hur ofta den når sitt konfigurerade maximum och vad den kostar. En skalare som sitter fast vid sin gräns är en kapacitetsplan som redan har misslyckats. Granska dessa tillsammans med kostnadsvyn så att prestanda och utgifter diskuteras tillsammans (se ämne 7.5, Tjänstekostnad och enhetsekonomi).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Resursutnyttjande | Att ta medelvärde över långa intervall för att dölja toppar; att räkna ledig reserverad kapacitet som "använd"; att bara redovisa de tystaste resurserna | Den 95:e percentilen under högtrafik bredvid medelvärdet; mättnadsmått; lista över resurser inom omfånget granskad mot tjänstekartan |
| Mättnad | Att höja könivåerna så att inget redovisas som avvisat eller strypt; att flytta väntan till en annan kö som inte mäts | Fördröjningspercentil och felgrad för samma operation; kötid från början till slut, inte ett steg; granskning av alla köer i vägen |
| Percentil av fördröjning | Att bara redovisa medelvärdet eller medianen; att släppa långsamma eller misslyckade förfrågningar ur urvalet; att mäta från en snabb intern plats; att utesluta "extremvärden" | p95 och p99 alltid visade; fel- och tidsgränsgrad visade bredvid fördröjningen; övervakning av verkliga användare jämförd med serversidans tidtagning; råa urvalsstorleken visad |
| Marginal | Att välja en mild testbelastning; att testa en större miljö än produktion; att definiera brytpunkten som hårdvarans maximum | Testbelastningen granskad mot produktionstrafikens form; skriftlig lista över skillnader mellan test och produktion; marginalen testad på nytt efter relevanta ändringar |
| Prognosfel | Att revidera prognosen i efterhand; att sätta mycket vida intervall så att varje utfall är "inom intervallet"; att ta bort månader med överraskningar som "oprognostiserade händelser" | Prognos fryst och daterad i registret; intervallets bredd redovisad med felet; varje undantagen händelse listad och granskad |
| Ledtid för kapacitet | Att starta klockan senare genom att fördröja godkännandeposter; att stänga begäranden när beställningen läggs i stället för när kapaciteten bär trafik; att dela upp begäranden | Klocka definierad från godkännande till att trafik bärs; stickprov av stängda begäranden jämfört med provisioneringsloggar; antal begäranden som öppnats på nytt |
| Täckning av prestandatester | Att köra ett trivialt test för att göra anspråk på täckning; att krympa listan över kritiska tjänster; att behålla ett gammalt godkänt test i böckerna | Testets ålder och arbetsbelastningens realism registrerade; listan över kritiska tjänster granskad mot tjänstekatalogen och incidenthistoriken; misslyckade tester redovisade såväl som godkända |

En sund avläsning visar utnyttjande med synliga dagliga cykler och marginal, mättnad som visar sig sällan och kort, fördröjningspercentiler som är stabila eller förbättras vid de livligaste timmarna och ett prognosfel som är känt och sakta krymper. Det sunda tecknet är att överraskningar diskuteras med sina orsaker. Perfekta siffror bör väcka misstanke, eftersom de vanligen betyder att mätningen är mild.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Kör med generös marginal | Absorberar överraskningar; skyddar fördröjning och tillgänglighet | Högre kostnad; döljer ineffektivitet och svag prognostisering |
| Kör snålt med snabb automatisk skalning | Lägre kostnad; kapaciteten följer efterfrågan | Beror på skalningshastighet och gränser; beroenden kanske inte skalar; svårare att resonera om under en incident |
| Percentilmål för fördröjning | Speglar hur långsamma förfrågningar känns; motstår medelvärdestrick | Behöver mer data och större urval; brusiga vid höga percentiler för tjänster med låg trafik |
| Enbart medelvärde eller median för fördröjning | Enkelt och stabilt | Döljer svansen som driver klagomål och avhopp |
| Syntetiska belastningstester | Kontrollerade, upprepbara, säkra | Bara så realistiska som arbetsbelastningsmodellen och miljön |
| Produktionstelemetri som grund | Speglar verkligt beteende och verklig blandning | Visar gränser först när de nåtts; kan inte sondera bortom nuvarande efterfrågan |
| Detaljerade prognosmodeller | Fångar säsongsvariation och tillväxt | Kräver data och kunskap; en falsk känsla av precision när indata är svaga |
| Enkla intervall överenskomna med verksamheten | Lätta att förklara och uppdatera; fokuserar på antaganden | Grövre; beror på ärliga indata från verksamheten |

Välj den lättaste metod som stöder beslutet. För de flesta tjänster räcker en veckovis titt på utnyttjande under högtrafik, mättnad och fördröjningspercentiler, ett belastningstest före större ändringar och en kvartalsvis prognosgranskning. Lägg till modellering där kostnaden för att ha fel är stor.

## Frågor att diskutera med teamet

**1. Vilka tre användarresor spelar störst roll, och vilken svarstid förväntar sig användare för var och en?**
Be gruppen nämna resorna och jämför sedan med vad instrumentpanelerna ritar. Facilitatorn bör driva på för en förväntan som kan spåras till en användare eller kund, inte en teknisk preferens.

**2. Var är vår tjänst nära en avgrund, och hur vet vi det?**
Leta efter resurser som anslutningspooler, trådgränser eller en partners hastighetsgräns. Fråga när var och en senast testades till sin brytpunkt. Om ingen vet är det första arbetet.

**3. Hur redovisar vi fördröjning i dag, och vad skulle den långsammaste procenten av användare säga?**
Visa medelvärdet, medianen, p95 och p99 för en operation sida vid sida och diskutera glappet. Fråga vilka förfrågningar som utesluts och varför, och om misslyckade förfrågningar räknas.

**4. Hur mycket marginal håller vi, vem valde den och när omprövade vi senast valet?**
Diskutera kostnaden för marginalen och kostnaden för ett avbrott den livligaste dagen. Enas om ett granskningsdatum och vilka belägg som skulle ändra marginalen.

**5. Hur bra var våra tre senaste efterfrågeprognoser, och vad lärde vi oss?**
Jämför de daterade prognoserna med utfallen och orsakerna till stora missar. Fråga vad verksamheten visste som drift inte fick. Besluta om en indata att lägga till i prognosregistret, till exempel marknadsföringskalendern eller ett lanseringsschema.

**6. Om vi behövde dubbel kapacitet nästa månad, vad skulle stoppa oss?**
Lista varje steg från begäran till produktionstrafik och markera var det väntar. Ta med upphandling, godkännanden, licensiering och beroenden som inte skalar. Facilitatorn bör leta efter den längsta väntan som inte är teknisk, eftersom den ofta är ett godkännande eller ett avtal. Enas om ett steg att förkorta och mät effekten genom ledtid för kapacitet.

## Fyra perspektiv

### Produkt- och leveransteam

Ta med en prestandaförväntan i acceptanskriterierna för funktioner som rör livliga vägar, kör ett belastningstest i pipelinen där det är praktiskt och berätta för drift om lanseringar tidigt. Se upp för vanan att behandla prestanda som en senare "härdnings"-uppgift, som förvandlas till oplanerat arbete (se ämne 2.9, Driftarbete och oplanerat arbete).

### Service- och driftteam

Driftteam äger telemetrin, kapacitetsplanen och responsen när en gräns nås. De behöver mättnad och svansfördröjning på de instrumentpaneler de faktiskt använder, ett prognosregister delat med verksamheten och testresultat som man litar på. De bör registrera varje kapacitetsrelaterad incident med dess orsak (se ämne 4.1, Mätetal för problemhantering, och ämne 3.4, Mätetal för större incidenter).

### Ledning och styrning

Ledare avgör hur mycket risk och kostnad organisationen accepterar, och marginalpolicyn är där det beslutet syns. Be om fördröjningspercentiler och marginal per kritisk tjänst, med prognosfelet bredvid, och behandla begäranden om kapacitet som investeringsbeslut som bär belägg. Styrande organ bör motstå ett organisationsövergripande utnyttjandemål, som driver varje tjänst till samma punkt på avgrunden.

### Kunder och användare

Kunder känner långsamhet som otillförlitlighet, långt innan något tillgänglighetstal ändras. Ange prestanda i termer av percentiler vid angiven belastning och dela hur tjänsten hanterar högtrafikperioder (se ämne 5.1, Mätetal för SLA, OLA och XLA, och ämne 6.2, Överenskommelser om upplevelsenivå).

## I praktiken: ett exempel från tjänstehantering

En medelstor nätbutik driver en webbutik, en betaltjänst och en ordertjänst, var och en ägd av ett produktteam, med ett plattformsteam som tillhandahåller delad infrastruktur. Alla siffror i det här exemplet är illustrativa.

Plattformsteamets veckogranskning visar webbutikens sökning med en medianfördröjning på 180 millisekunder och en p95 på 420 millisekunder, båda inom målet, och processoranvändning på en 95:e percentil under högtrafik på 58 procent. Tre veckor före en planerad rea rapporterar en supportansvarig att kunder säger att sajten "kryper" under kvällskampanjer. Instrumentpanelen är grön.

Teamet tittar på p99 för sökning vid den livligaste timmen under den föregående reaan och finner 3,1 sekunder, mot ett p99-mål på 1,5 sekunder. Mättnad berättar resten: anslutningspoolen till produktdatabasen visar väntande förfrågningar i 14 procent av minutintervallen under toppen, medan processoranvändningen aldrig översteg 60 procent. Begränsningen var aldrig processorn. Det var en poolgräns som sattes när trafiken var en tredjedel av dagens.

Produktägaren och plattformsledaren kör ett belastningstest vid 1,5 gånger fjolårets topp, med produktionens blandning av operationer. Testet visar att p99-målet bryts vid 1,15 gånger fjolårets topp, så marginalen är 15 procent mot en policy på 40 procent för kundvända tjänster. Marknadsföringskalendern tyder på en efterfrågan på 1,6 gånger fjolårets topp på öppningsdagen. Den gamla prognosen, frusen i registret, hade satt intervallet till 1,2 till 1,4, och felet mot fjolårets rea var 22 procent, mest från en oannonserad e-postkampanj.

Beslutet, registrerat i beslutsloggen, har fyra delar. För det första, höj poolgränsen och lägg till läsrepliker och testa på nytt. För det andra, lägg till en beredskapschecklista för rea i releaseprocessen så att kampanjer når prognosregistret minst sex veckor i förväg. För det tredje, lägg till p99 och poolmättnad i veckogranskningen. För det fjärde, kom överens med ekonomi om kostnaden för den extra kapaciteten under reafönstret, med schemalagd skalning i stället för reserv året runt.

Efter ändringarna visar ett andra test att p99-målet håller till 1,8 gånger fjolårets topp. Manipulationsrisken dök upp under granskningen. En konsult hade föreslagit en "snabb vinst" genom att utesluta förfrågningar långsammare än 5 sekunder ur fördröjningsrapporten, med motiveringen att de var extremvärden. Teamet vägrade: de uteslutna förfrågningarna var precis de kunder som klagade. Skyddsräcket var att hålla fel- och tidsgränsgrader bredvid varje fördröjningspercentil och att registrera urvalsstorleken. Under reaan toppar p99 på 1,2 sekunder, poolmättnaden stannar under 1 procent av intervallen och prognosfelet är 9 procent, registrerat i registret med skälet till den återstående missen.

## Agilitet, AI, automatisering och analys

### Agilitet

Planera kapacitet i korta cykler med produktintressenter och använd prognoser som intervall som uppdateras med data. Varningen är att överprovisionering för att skydda en huvudsiffra slösar pengar.

### AI

AI-arbetsbelastningar, till exempel modellinferens, har varierande och ibland kostsam efterfrågan, och AI-funktioner kan ändra användningsmönster snabbt. Följ fördröjningspercentiler och kostnad per förfrågan för AI-vägar och para dem med svarskvalitet. Varningen är att optimering för hastighet kan sänka svarskvaliteten, så mät båda.

### Automatisering

Samla in utnyttjande och fördröjning automatiskt och automatisera skalning inom gränser. Mät skalningen på svängningar och på kostnaden den lägger till. Varningen är att automatisk skalning döljer mättnad tills gränserna nås, så följ marginalen, inte bara den aktuella belastningen.

### Analys

Visa percentilfördröjning och marginal med prognosintervall och prognosfelets historik. Beslutet detta ger underlag för är när man ska lägga till kapacitet. Varningen är att prognoser från kort historik är sköra, så ange intervallet.

## Branschperspektiv

**Startup.** Trafiken är liten och tillväxten osäker, så billiga mått slår invecklade. Följ fördröjningspercentiler för de två eller tre resor som tjänar pengar, bevaka mättnad på databasen och kör ett enkelt belastningstest före lanseringar. Sätt ett utgiftslarm så att ett fel eller en trafiktopp inte blir en räkning.

**Småföretag.** Tjänster är ofta hostade eller inköpta, så kapacitet är en leverantörsfråga. Be leverantören om prestanda- och kapacitetsrapporter skriftligt, ta reda på vad avtalet säger om högtrafikperioder och bevaka kundens vy med några syntetiska kontroller. Följ marginalen på det system verksamheten inte kan vara utan.

**Storföretag.** Många tjänster delar infrastruktur, så kapacitetsproblem dyker upp på fel ställe. Investera i en tjänstekarta som länkar tjänster till komponenterna de använder, en gemensam prognosprocess med affärsenheterna och gemensamma definitioner av fördröjningspercentiler över team. Sätt marginalpolicy efter tjänsters kritikalitet.

**Offentlig sektor.** Efterfrågan formas av tidsfrister fastställda i lag, till exempel datum för deklaration, bidragsansökningar och val, och fel på de datumen är offentliga. Prognoser bör använda den lagstadgade kalendern, och kapacitet för toppen kan behöva avtalas månader i förväg. Upphandlingsledtider förlänger ledtiden för kapacitet, så mät dem och planera kring dem. Offentliga rapporter om tjänsters prestanda bör ange percentilen och belastningsvillkoren (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaden har fyra delar. Den första är instrumentering: telemetri och dess lagring. Den andra är testning: en representativ miljö och arbetsbelastningsmodeller som behöver underhållas. Den tredje är planeringsrutinen: att hålla prognosregistret och granska felet varje kvartal. Den fjärde är själva reservkapaciteten, som ofta är den största kostnaden och den mest värd att göra uttrycklig.

Avkastningen kommer från färre kapacitetsrelaterade incidenter, bättre beslut om när man ska köpa och när inte och undvikna utgifter för kapacitet som data visar är onödig. Lova inte en procentuell besparing i förväg. Mät i stället ditt eget mönster: antalet incidenter med kapacitetsorsak per kvartal, andelen toppar som krävde nödåtgärd, utgifterna för overksam kapacitet i förhållande till den överenskomna marginalpolicyn och trenden i prognosfel. Googles SRE-bok behandlar tillförlitlighet som ett ekonomiskt beslut.

Den totala ägandekostnaden domineras av människor och testmiljön. Ett litet team kan börja med befintlig övervakning, en veckogranskning och ett belastningstest för den viktigaste resan.

## Antimönster och fallgropar

- **Att redovisa genomsnittligt utnyttjande som kapacitetsberättelsen.** Medelvärdet döljer toppen och avgrunden. Redovisa den höga percentilen under högtrafik och mättnadsmåttet.
- **Medelvärde för fördröjning på chefernas instrumentpanel.** Svansen driver klagomålen. Visa p95 och p99, med felgrader och urvalsstorlek.
- **Att utesluta "extremvärden" ur fördröjning.** De långsammaste förfrågningarna är verkliga användare. Behåll dem och undersök orsaken i stället för att trimma datan.
- **Att ta medelvärde av percentiler över servrar.** Resultatet beskriver ingen. Kombinera histogram eller råa observationer innan percentilen beräknas.
- **Kapacitetsplaner byggda enbart på fjolårets trafik.** Efterfrågan beror på affärshändelser. Ta med affärskalendern och granska prognosfelet.
- **Att testa i en miljö olik produktion.** Ett godkänt resultat ger falsk trygghet. Registrera skillnaderna och korrigera för dem, eller testa i produktion på ett säkert sätt.
- **Att använda kapacitetsmått för att rangordna ingenjörer eller team.** Utnyttjande och fördröjning beskriver system. Granska dem i termer av tjänstedesign och efterfrågan och håll individer utanför bilden.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Mätning av utnyttjande, mättnad och fördröjning | Medelvärden från några få servrar; larm vid hög processoranvändning | Vissa team ritar fördröjningspercentiler och köer | Gemensamma definitioner: percentiler per nyckeloperation, mättnad bredvid utnyttjande, fönster nedskrivna | Följs över tid mot mål, paras med felgrader, granskas veckovis | Definitioner revideras gemensamt med leverantörer och kunder; användarsidans och serversidans vyer stäms av |
| Gränser och marginal | Gränser okända tills ett fel inträffar | Enstaka belastningstester före stora lanseringar | Belastningstester på kritiska tjänster mot en skriven marginalpolicy | Marginal följs per tjänst och testas på nytt efter relevanta ändringar | Marginalpolicyn justeras utifrån kostnads-, risk- och incidentdata över team och leverantörer |
| Prognostisering | Ad hoc-gissningar vid tidpunkten för en begäran | Enskilda team håller prognoser i huvudet eller i kalkylblad | Ett gemensamt prognosregister med intervall och ägare, matat av affärskalendern | Prognosfelet poängsätts och granskas, med orsaker till missar | Prognoser byggs med verksamheten och leverantörer; indata förbättras rutinmässigt |
| Kapacitetsleverans | Kapacitet läggs till efter en incident | Standardbegäranden för vanliga fall | Dokumenterad väg från godkännande till produktionstrafik, med ledtid för kapacitet mätt | De längsta väntorna riktas in med finansierad förbättring | Kapacitet läggs till automatiskt inom policyn; skalningsbeteende och kostnad granskas tillsammans |

## Checklista

- [ ] De kritiska användarresorna är namngivna, var och en med en fördröjningsförväntan överenskommen med dess ägare.
- [ ] Fördröjning redovisas som medianen, p95 och p99 per operation, med fönster och urvalsstorlek angivna.
- [ ] Percentiler beräknas ur histogram eller råa observationer, aldrig med medelvärde över servrar.
- [ ] Varje utnyttjandediagram har ett mättnadsdiagram bredvid.
- [ ] Fel- och tidsgränsgrader visas bredvid varje fördröjningspercentil.
- [ ] Varje kritisk tjänst har ett belastningstest, med skillnader i arbetsbelastning och miljö nedskrivna.
- [ ] En marginalpolicy finns per tjänstekritikalitet, med resonemanget registrerat.
- [ ] Ett daterat prognosregister håller intervall, antaganden och ägare och matas av affärskalendern.
- [ ] Prognosfelet granskas varje kvartal, med orsaker till stora missar registrerade.
- [ ] Ledtid för kapacitet mäts från godkännande till att trafik bärs.
- [ ] Gränser, fördröjning och kostnad för automatisk skalning granskas med tjänsteägaren.
- [ ] Inget kapacitets- eller prestandamått redovisas per individ.

## AI-prompter

**Granska en fördröjningsrapport efter dold förvrängning.**

```text
Here is how we report latency for [operation or service]: [description of the
measurement point, the window, the statistics shown, and which requests are
included or excluded]. Our users care about [user journey or expectation].
Identify ways this report could understate the experience of the slowest users,
such as averaging, exclusion rules, sampling, or measurement location. Suggest
what to show instead and what additional data I would need. Do not invent
benchmark values or thresholds; ask me for the ones you need. List your
assumptions.
```

**Skriv utkast till en belastningstestplan för en tjänst.**

```text
I need a load test plan for [service name]. Its main user journeys are
[journeys], its dependencies are [dependencies], and its production traffic mix
is roughly [description of mix]. The test environment differs from production
in these ways: [differences]. Propose a workload model, a ramp pattern, the
measures to record (latency percentiles, error rate, utilization, saturation),
the stop conditions, and the questions the results should answer. Do not
assume tool features or invent target values. List your assumptions and the
risks of the test.
```

**Strukturera en efterfrågeprognos tillsammans med verksamheten.**

```text
I am preparing a capacity forecast for [service] covering [horizon]. Known
inputs: [historical traffic description], [business events and dates], and
[planned changes]. Draft a forecast register layout with low, expected, and high
cases, the assumptions behind each, the owner of each input, and a review
routine that scores forecast error. Suggest questions to ask [business
stakeholders]. Do not invent growth rates or seasonal factors. List your
assumptions.
```

**Hitta den verkliga begränsningen utifrån symptom.**

```text
A service shows these symptoms during peak load: [symptoms, for example slow
p99, queue growth, error types]. Utilization data: [summary of resource
utilization]. Saturation data: [summary of queues, pools, throttling].
Architecture notes: [short description]. List the resources and limits that
could be the constraint, the evidence that would distinguish between them, and
the cheapest next test for each. Do not claim a cause that the data does not
support. List your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta ämnet som definierar ett kapacitets- eller prestandamått, dess klockor och skyddsräcket som hör bredvid det.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett redigerat ämne om kapacitet eller prestanda håller varje mätetal parat med en manipuleringsvektor och ett skyddsräcke.

## Viktigaste slutsatser

- Mät mättnad tillsammans med utnyttjande, eftersom användare känner kön, inte procentsatsen.
- Redovisa fördröjning som percentiler per operation, med felgrader och urvalsstorlek, och ta aldrig medelvärde av percentiler.
- Hitta gränser genom testning och sätt marginalen som en registrerad policy som väger kostnad mot risk.
- Prognostisera efterfrågan som intervall tillsammans med verksamheten, frys prognosen och lär av felet.
- Förkorta ledtiden för kapacitet och mät automatisk skalning, så att kapaciteten följer behovet.
- Beskriv tjänster och system, aldrig människor, och behandla perfekt utseende tal som en uppmaning att kontrollera mätningen.

## Referenser och vidare läsning

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Google, "Monitoring Distributed Systems," chapter in *Site Reliability Engineering*, 2016, https://sre.google/sre-book/monitoring-distributed-systems/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. Dean, J., and Barroso, L. A., "The Tail at Scale," *Communications of the ACM*, 56(2), 2013.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Gregg, B., *Systems Performance: Enterprise and the Cloud*, 2nd edition, Addison-Wesley, 2020.
7. Allspaw, J., *The Art of Capacity Planning*, O'Reilly Media, 2008.
8. Gunther, N. J., *Guerrilla Capacity Planning*, Springer, 2007.
9. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
10. AXELOS (now PeopleCert), *ITIL 4 Foundation* and the ITIL 4 practice guide for capacity and performance management, 2019 onwards.
11. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Latency (engineering)](https://en.wikipedia.org/wiki/Latency_(engineering)).
14. Wikipedia, [Throughput](https://en.wikipedia.org/wiki/Throughput).
15. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
16. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
17. Wikipedia, [Load testing](https://en.wikipedia.org/wiki/Load_testing).
18. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
19. Wikipedia, [Tail latency](https://en.wikipedia.org/wiki/Tail_latency).
20. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
21. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
22. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
