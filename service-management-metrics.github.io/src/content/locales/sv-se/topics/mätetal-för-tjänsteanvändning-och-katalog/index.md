# Mätetal för tjänsteanvändning och katalog

**En tjänst som ingen väljer, hittar eller slutför en förfrågan för har inte levererat värde, så mät hur människor upptäcker och använder det du erbjuder och håll katalogen lika ärlig som en backlog.**

## Översikt och motiv

Team investerar i tjänster och upptäcker sedan att människor inte använder dem. Den nya självbetjäningsportalen kringgås med e-post. En noggrant utformad katalogpost för programvaruåtkomst får två förfrågningar om året medan hundra i månaden anländer via chatt. En övervakningstjänst lanseras och hälften av teamen den byggdes för ansluter aldrig till den. Införande är den saknade halvan av leverans: en tjänst är värdefull först när dess avsedda användare börjar, fortsätter och slutför att använda den.

**Tjänstekatalogen** är listan över tjänster och beställningsbara poster som en organisation erbjuder, beskrivna i termer dess användare kan förstå. En [tjänstekatalog](https://en.wikipedia.org/wiki/Service_catalog) har vanligen en kundvänd vy, som listar vad en användare kan be om och hur, och en teknisk vy, som registrerar hur varje tjänst är byggd och supporterad. Agila team känner igen formen: en katalog är en sorts [produktbacklog](https://en.wikipedia.org/wiki/Product_backlog) i omvänd riktning. En backlog listar vad du avser att bygga. En katalog listar vad du redan erbjuder, och båda behöver samma omsorg: ordning, beskärning, tydlig formulering och en jämn ström av återkoppling från användare (se ämne 2.6, Mätetal för backlog och förfining).

**Införande** är i vilken utsträckning de avsedda användarna tar upp och fortsätter använda en tjänst. Studiet av hur nya arbetssätt sprids har lång historia; teorin om [innovationers spridning](https://en.wikipedia.org/wiki/Diffusion_of_innovations) beskriver införande som en process över tid, med tidiga användare, en majoritet och eftersläntrare. För en intern tjänst är den praktiska lärdomen att införande sällan sker på grund av ett tillkännagivande. Det sker när tjänsten är lätt att hitta, lätt att använda och tydligt bättre än kringgåendet.

Införandemått är frestande att förvandla till mål. Att tvinga en kanal får ett användningstal att se bra ut medan användare ogillar det och bygger kringgåenden. Att pressa varje förfrågan in i en katalogpost får katalogtäckningen att stiga medan genomförandet faller. Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller, så varje mått här paras med en kontroll att verkligt värde, inte bara användning, stiger (se ämne 1.2, Goodharts lag och mätetalens psykologi).

Det här ämnet täcker fyra saker: om människor använder en tjänst (införande), om de kan hitta och slutföra det de kom för (katalog och förfrågningsflöde), om katalogen är aktuell och ärlig (hygien) och om användningen är koncentrerad till några få poster (form). Det kopplar till uppfyllande av förfrågningar (se ämne 3.5, Mätetal för uppfyllande av serviceförfrågningar) och självbetjäning (se ämne 3.7, Mätetal för självbetjäning och automatisering), som täcker vad som händer efter att förfrågan gjorts.

## Nyckelprinciper

- **Införande är ett resultat, så fråga vad användaren försökte göra.** Räkna slutförda mål, inte sidvisningar.
- **Mät tratten, inte bara totalen.** Var människor hoppar av talar om vad som ska rättas.
- **Jämför med alternativet.** En tjänst konkurrerar med e-post, chatt, ett telefonsamtal och ett kringgående.
- **Håll katalogen så liten och aktuell som den kan vara.** Föråldrade poster lär användare att sluta leta.
- **Segmentera innan du drar slutsatser.** Medelvärden över alla användare döljer grupperna för vilka tjänsten inte fungerar.
- **Tvinga aldrig fram användning för att höja ett tal.** Mandat ger tal, inte införande.
- **Behandla låg användning som en fråga till ägaren och användarna.** Det kan betyda att tjänsten inte behövs.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Införandegrad | Andel kvalificerade användare som använde en tjänst minst en gång under perioden | distinkta kvalificerade användare med minst en slutförd användning / kvalificerade användare | procent | Tjänstens användningsloggar sammanfogade med användarkatalogen | Hantering av tjänstekatalog; servicenivåhantering | Funktionsinförande; granskning av produktresultat | Månadsvis |
| Andel aktiv användning | Andel av de som infört tjänsten som fortfarande använder den över tid | användare aktiva under perioden som också använde tjänsten under föregående period / användare aktiva under föregående period | procent | Användningsloggar; kohorttabeller | Ständig förbättring | Retention i produktanalys | Månadsvis |
| Katalogtäckning | Andel förfrågningar som anländer genom katalogen i stället för ad hoc-kanaler | förfrågningar skapade via katalogen / alla förfrågningar, från alla kanaler | procent | Verktyg för hantering av förfrågningar; taggar i brevlåda och chatt | Hantering av serviceförfrågningar; hantering av tjänstekatalog | Backlogposter som bär en skriven definition | Månadsvis |
| Övergivandegrad för förfrågningar | Andel påbörjade förfrågningar som användaren inte skickar in | förfrågningar påbörjade men inte inskickade inom 24 timmar / påbörjade förfrågningar | procent | Portalanalys | Hantering av serviceförfrågningar | Uppgiftsövergivande i användbarhetstester | Månadsvis |
| Sökframgång | Andel katalogsökningar som slutar i en förfrågan eller ett visat svar | sökningar följda av en förfrågan eller en kunskapsvisning inom sessionen / sökningar | procent | Portalens sökloggar | Kunskapshantering; hantering av tjänstekatalog | Hittbarhet i användarforskning | Månadsvis |
| Andel föråldrade poster | Andel katalogposter förbi sitt granskningsdatum eller utan användning under en fastställd period | poster försenade för granskning eller med noll förfrågningar på 12 månader / poster i katalogen | procent | Katalogregister | Hantering av tjänstekatalog | Backlogens ålder och beskärning | Kvartalsvis |
| Förfrågningskoncentration | Andel förfrågningar som står för de mest efterfrågade posterna | förfrågningar för de fem främsta posterna / alla katalogförfrågningar | procent | Verktyg för hantering av förfrågningar | Hantering av serviceförfrågningar | Pareto över arbete per typ | Kvartalsvis |

Ange användarbasen för varje mått. "Kvalificerade användare" måste definieras innan du mäter, till exempel personal i de roller som kan använda en tjänst, och listan registreras i mätetalsregistret. Räkna en användning först när den slutar i ett slutfört resultat, till exempel ett levererat åtkomstbeviljande, och inte när en sida laddas. Uteslut testkonton och automatiserad trafik.

## Rekommendationer

### Känn dina tjänster och dina användare

**1. Definiera den avsedda publiken för varje tjänst.** Innan du mäter införande, skriv ned vem tjänsten är till för och varför de skulle använda den i stället för alternativet. En ny analystjänst byggd för ekonomipersonal har inte "lågt införande" om bara ekonomipersonal var avsedda att använda den. Utan en definierad publik är införandegraden ett tal om ingen.

**2. Registrera alternativet.** För varje större tjänst, lista vad människor gör nu när de inte använder den: frågar en kollega, skickar ett e-postmeddelande, köper ett verktyg, kör ett kalkylblad. Behandla alternativet som en konkurrent i den mening som spelar roll: det är dit dina användare går när din tjänst är svårare. Jämför ansträngningen för båda vägarna under utformning och granskning.

**3. Beskriv poster på användarspråk.** Titlar som "Programvaruåtkomst, standard" och "Laptopbyte, skadad" är lättare att hitta än interna namn. Testa titlar genom att be några användare hitta en post utifrån ett kort scenario. Formuleringsproblem syns snabbt i sökloggarna.

**4. Håll en ägare för varje post.** Varje katalogpost har en namngiven ägare, ett granskningsdatum, en beskrivning av publiken och den förväntade volymen. Poster utan ägare driver iväg. Om ingen kan säga vem som använder en post och varför är den en kandidat för borttagning.

### Mät resan

**5. Instrumentera tratten.** För varje viktig tjänst, registrera stegen från upptäckt till slutfört resultat: hitta posten, påbörja förfrågan, fyll i formuläret, skicka in, ta emot resultatet. En vy av [konverteringstratten](https://en.wikipedia.org/wiki/Conversion_funnel) visar var användare lämnar. Rätta det största bortfallet först. Kontrollera att rättelserna gör formuläret kortare eller tydligare, inte bara datan snyggare.

**6. Använd kohorter för att se retention.** En [kohortanalys](https://en.wikipedia.org/wiki/Cohort_analysis) grupperar användare efter när de först använde tjänsten och följer varje grupp. Den skiljer en tjänst som behåller sina användare från en som lockar dem en gång och förlorar dem. Använd den för tjänster som bör användas upprepade gånger, till exempel servicedeskens portal eller en driftsättningspipeline.

**7. Läs sökloggar för att se vad människor inte kan hitta.** Sökningar utan resultat, eller sökningar som upprepas med andra ord, pekar på glapp i namngivning, i innehåll eller i själva katalogen. Granska de främsta sökningarna utan resultat månadsvis och avgör för var och en: byt namn på en post, lägg till ett synonymord, skriv en artikel eller skapa en ny post. Verktyg för [webbanalys](https://en.wikipedia.org/wiki/Web_analytics) kan leverera detta, och det kan portalens egna loggar också.

**8. Segmentera efter grupp.** Bryt ned införande och övergivande efter roll, plats, enhet och tillgänglighetsbehov där du har lagligt och etiskt tillträde till den informationen. Aggregatet kan se friskt ut medan nattpersonal eller användare på mobila enheter fallerar dubbelt så ofta. Undertryck små grupper för att skydda människor och kombinera med upplevelsemåtten i föregående ämnen (se ämne 6.2, Överenskommelser om upplevelsenivå).

### Håll katalogen ärlig

**9. Beskär enligt schema.** Granska katalogen varje kvartal. Ta bort eller slå ihop poster utan användning, avveckla poster för nedlagda tjänster och rätta poster med hög övergivandegrad. En mindre, korrekt katalog tjänar användare bättre än en fullständig, föråldrad. Behandla borttagning som normalt och registrera skälet.

**10. Titta på efterfrågans form.** I de flesta kataloger står några få poster för de flesta förfrågningar, ett mönster som ofta beskrivs genom [Paretoprincipen](https://en.wikipedia.org/wiki/Pareto_principle). Använd det för att rikta designinsats mot de frekventa posterna och för att automatisera de som är rutinmässiga (se ämne 3.7, Mätetal för självbetjäning och automatisering). Släpp inte den långa svansen utan att titta, eftersom sällsynta poster kan betyda mycket för de människor som behöver dem.

**11. Tvinga inte fram införande.** Om en tjänst behövs kommer användare när den är lätt. Där organisationen kräver en kanal av skäl som gäller kontroll eller revision, säg det och var öppen med att talet speglar en regel, inte en preferens. Undvik [mörka mönster](https://en.wikipedia.org/wiki/Dark_pattern), till exempel att gömma telefonnumret eller göra alternativet svårare, eftersom de höjer användningen och sänker förtroendet.

**12. Stäng cirkeln med ägare och användare.** Dela tratten, sökglappen och listan över föråldrade poster med postägare månadsvis. Fråga användare, i enkäten och i granskningar, varför de använder eller undviker en tjänst (se ämne 6.1, Mätetal för kundnöjdhet). Registrera vad du ändrade i registret och tala om för användare att det hände.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Införandegrad | Att tvinga användning; att räkna inloggningar eller sidvisningar som användning; att snäva in "kvalificerade användare" till dem som redan använder den | Definition av slutfört resultat; jämför med nöjdhets- och ansträngningsbetyg; publicera regeln för kvalificerade användare |
| Andel aktiv användning | Att automatiskt registrera användare så att de ser aktiva ut; att skicka aviseringar som räknas som aktivitet | Räkna bara användarinitierade slutförda handlingar; stickprovsintervjuer med användare som slutat |
| Katalogtäckning | Att tvinga varje förfrågan in i en generisk katalogpost; att stänga e-postförfrågningar med "använd portalen" | Övergivandegrad för förfrågningar och nöjdhet; räkna hur många förfrågningar som väcks på nytt via en annan kanal |
| Övergivandegrad för förfrågningar | Att ta bort formulärfält som behövs, vilket flyttar arbete till uppfyllandet; att räkna övergivna förfrågningar först efter ett långt fönster | Omarbete och andel förtydliganden vid uppfyllande (se ämne 3.5, Mätetal för uppfyllande av serviceförfrågningar) |
| Sökframgång | Att räkna varje klick som framgång; att lägga till irrelevanta artiklar som matchar varje fråga | Kontrollera att resultatet användes (förfrågan gjord, artikel betygsatt som hjälpsam); läs sökningar utan resultat |
| Andel föråldrade poster | Att markera poster som granskade utan att läsa dem; att nollställa granskningsdatum i bulk | Stickprova granskade poster för korrekthet; visa datum för senaste verkliga ändring |
| Förfrågningskoncentration | Att dela populära poster i många; att slå ihop orelaterade poster för att dölja efterfrågan i den långa svansen | Fast postnomenklatur med ändringslogg; titta på svansen per kategori |

En sund avläsning är en katalog där de mest använda posterna fungerar väl och blir lättare, där användare väljer tjänsten därför att den är bättre än alternativet och där avveckling av en post är rutin.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Påtvingad kanal | Förutsägbar volym, lätt att revidera | Förbittring, kringgåenden, uppblåsta tal |
| Frivilligt införande | Ärlig signal om värde | Långsammare; vissa tjänster kanske aldrig införs |
| Stor katalog | Fullständig, täcker sällsynta behov | Svår att söka i; blir föråldrad |
| Liten katalog | Lätt att hitta i och underhålla | Sällsynta behov faller utanför; användare tar till e-post |
| Trattmått | Pekar ut var användare hoppar av | Kräver instrumentering; kan uppmuntra att optimera formuläret på bekostnad av resultatet |
| Enkät om varför | Förklarar beteende | Skevad av vem som svarar; svår att skala |

Svaret är att föredra frivilligt införande med en tydlig kvalitetsfördel och att använda mandat bara där kontroll eller regelefterlevnad kräver det, med talet märkt därefter. Håll katalogen tillräckligt liten för att underhålla och lägg svansen i en sökbar kunskapsbas, inte i hundra halvanvända poster.

## Frågor att diskutera med teamet

**1. Vem är var och en av våra huvudtjänster till för, och hur skulle vi veta att de använder den?**
Lista de fem tjänster ditt team lägger mest tid på och skriv den avsedda publiken för var och en. Fråga sedan hur införande kunde mätas för dem. Facilitatorn bör leta efter tjänster där ingen kan namnge publiken, eftersom de sannolikt saknar en införandeplan.

**2. Vad gör människor när de inte använder vår tjänst, och varför?**
För en tjänst med lågt införande, intervjua eller enkätera några användare som undviker den. Alternativet är vanligen avslöjande: det kan vara snabbare, mer bekant eller mer flexibelt. Besluta om tjänsten ska förbättras, alternativet ändras eller om man ska acceptera att tjänsten inte behövs.

**3. Var hoppar användare av vår mest efterfrågade post?**
Visa tratten för den främsta posten, från första visning till inskickning. Be teamet gissa var det största bortfallet är och jämför sedan. Enas om en ändring att testa och säg hur du ska kontrollera att den hjälpte utan att flytta problemet någon annanstans.

**4. Vad skulle vi ta bort från katalogen om vi vågade?**
Skriv ut listan över poster utan förfrågningar på ett år. Fråga vad som skulle hända om var och en försvann. Samtalet finner ofta att en post finns för att någon en gång bad om den. Enas om ett datum för att ta bort eller slå ihop de första fem, och en notis till användare.

**5. Var puffar eller tvingar vi användare, och är det värt kostnaden?**
Lista varje ställe där en regel eller design pressar användare in i en kanal. Fråga vilka som verkligen behövs och vilka som är vana. Facilitatorn bör utforska hur användare upplever var och en och om de resulterande talen betyder det ledare tror att de betyder.

**6. Vad söker människor efter som vi inte har?**
Granska de främsta sökningarna utan resultat. För var och en, avgör om du ska lägga till en post, skriva en artikel eller förklara att tjänsten inte finns. Fråga vem som äger den här granskningen och hur ofta den ska ske.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam bygger tjänster och funktioner som behöver införande för att spela roll. De bör definiera publiken i början, bygga in användningsmått i tjänsten och granska tratten efter lansering. Införandedata är återkoppling på arbetet, och den hör hemma i förfining och granskning. Team bör undvika att förklara en release klar när den levereras. Klart betyder att de avsedda användarna får nyttan.

### Service- och driftteam

Driftteam driver katalogen och ser förfrågningarna som anländer genom varje kanal. De bör hålla katalogen aktuell, tagga förfrågningar som kringgår den och fråga varför. De bör inte stänga en förfrågan genom att omdirigera den, eftersom det döljer signalen. Sökglapp och övergivande är deras bästa källa till förbättringar av portalen.

### Ledning och styrning

Ledare avgör om införande är ett samtal eller en kvot. De bör fråga vad tjänsten är till för, vem den hjälper och varför människor väljer den. De bör undvika att sätta införandemål för enskilda team, stödja avveckling av oanvända tjänster och förvänta sig att se införande bredvid nöjdhet och ansträngning. Där ett mandat är motiverat bör ledare förklara det för användare.

### Kunder och användare

Användare vill få det de behöver med liten ansträngning. De märker när en portal är svår att söka i, när formulär frågar efter saker organisationen redan vet och när det gamla sättet är snabbare. Deras beteende, och vad de säger, är den ärligaste införandesignalen. De bör tillfrågas varför de undviker en tjänst och få veta vad som ändrades som följd.

## I praktiken: ett exempel från tjänstehantering

En nationell transportmyndighets it-avdelning driver en servicedesk, en självbetjäningsportal med en katalog på ungefär 140 poster och flera produktteam. Siffrorna nedan är illustrativa.

Portalen lanserades för ett år sedan, och ledningen satte ett mål på 80 procent av förfrågningarna genom den. Den månatliga rapporten visar 78 procent täckning, och chefen för tjänstehantering är nöjd tills hon läser kommentarerna från användarenkäten. Personal på regionala kontor säger att portalen är långsam och formulären långa. Hon ber katalogansvarig titta på tratten och sökloggarna.

Tratten för "Utrustning till ny medarbetare" visar 1 100 påbörjade och 640 inskickade per kvartal, en övergivandegrad på 42 procent. Formuläret har 23 fält. Sökloggen visar att termen "laptop" ger åtta poster och att termen "VPN" inte ger någon, fastän det är den mest sökta termen. Av 140 katalogposter hade 38 ingen förfrågan på 12 månader och 21 är försenade för granskning. De fem främsta posterna står för 61 procent av förfrågningarna, och ytterligare 15 procent av förfrågningarna anländer via e-post och loggas för hand.

Teamet gör fyra ändringar. Det kortar nyanställdsformuläret till nio fält genom att använda data som HR-systemet redan håller. Det lägger till en VPN-artikel och en post med synonymord. Det slår ihop de åtta laptopposterna till två. Och det avvecklar 19 av de oanvända posterna med en notis till ägarna. Det ändrar också hur den månatliga rapporten läses: täckningen visas med övergivandegraden och enkätfrågan "hur lätt var det att få det du behövde?" Tre månader senare faller övergivandet av nyanställdsposten till 24 procent, portalens täckning är 74 procent och ansträngningsbetyget från de regionala kontoren stiger. Chefen frågar varför täckningen föll. Chefen för tjänstehantering förklarar att e-postförfrågningar tidigare tvångsstängdes, och att det lägre talet är ärligare och upplevelsen är bättre. Beslutsloggen registrerar att målet ersätts av en riktning: minska övergivandet och höja ansträngningsbetyget, med täckningen granskad men inte målsatt.

## Agilitet, AI, automatisering och analys

### Agilitet

Behandla katalogen som en backlog som förfinas med sina användare och ta bort poster som ingen använder. Varningen är att ett mål för antalet katalogposter ger oreda.

### AI

AI-sökning och assistenter kan ändra hur människor hittar tjänster, vilket flyttar införande- och övergivandetal. Para sökframgång med övergivandegrad och med andelen AI-förslag som accepterades och slutfördes. Varningen är att en modell kan rekommendera en tjänst som personen inte kan beställa, så kontrollera behörighetsregler.

### Automatisering

Fånga sök-, visnings- och förfrågningshändelser automatiskt och flagga föråldrade katalogposter för ett mänskligt beslut. Mät automatisering vid uppfyllande på dess felgrad. Varningen är att automatisk städning som tar bort poster kan dölja tjänster som människor sällan använder men behöver.

### Analys

Visa införande och övergivande per katalogpost med antal, och förfrågningarnas koncentration. Beslutet detta ger underlag för är vilka poster som ska omarbetas eller avvecklas. Varningen är att poster med låg volym har brusiga grader.

## Branschperspektiv

**Startup.** Ofta finns ingen katalog. En enkel sida med "så får du X" och en delad kanal räcker. Bevaka vad människor ber om och förvandla de fem främsta förfrågningarna till korta guider. Mät införande av interna verktyg genom att fråga användare och hoppa över formella trattar.

**Småföretag.** Få människor tillhandahåller it, och förfrågningar anländer genom varje kanal. En måttlig katalog på 10 till 20 poster täcker de flesta behov. Tvinga inte användare in i en portal som kostar mer att underhålla än förfrågningarna den hanterar. Granska listan två gånger om året.

**Storföretag.** Skala ger en katalog stor nog att behöva styrning: ägare, granskningsdatum och en nomenklatur. Segmentera införande efter affärsenhet och region och undvik företagsövergripande mandat som ignorerar lokala behov. Se upp för leverantörer vars katalogposter räknas men inte används.

**Offentlig sektor.** Tjänster når allmänheten såväl som personal, med skyldigheter kring tillgänglighet, språk och lika tillgång. Ta med assisterade kanaler (telefon, personligt) i måtten så att digitalt införande inte döljer utestängning. Där juridiska eller policyregler kräver en kanal, ange det i rapporter (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna är måttliga. Användningsloggar och förfrågningsdata finns vanligen redan. Analys av tratt och sökning behöver tillträde till portalanalys, vilket de flesta plattformar ger. Den främsta tidskostnaden är den kvartalsvisa kataloggranskningen och en månatlig titt på sökglapp och bortfall, några timmar vardera. Att rätta formulär och slå ihop poster kostar design- och konfigurationstid.

Avkastningen kommer från tjänster som används, förfrågningar som slutförs och mindre slöseri vid uppfyllande. Ett kortare formulär som minskar övergivandet minskar upprepade kontakter och manuell hantering. Att beskära oanvända poster minskar underhållet. Bygg caset ur dina egna siffror: övergivandegrad, manuell hanteringstid per förfrågan via e-post och kostnaden att underhålla en oanvänd post, före och efter ändringar. Undvik publicerade påståenden om portalers avkastning som du inte kan spåra, eftersom de beror på organisation och metod.

## Antimönster och fallgropar

- **Att räkna lanseringar som införande.** En tjänst är införd när avsedda användare slutför resultat med den. Mät användningen, inte tillkännagivandet.
- **Att tvinga en kanal för att höja ett tal.** Användare kringgår det. Förbättra tjänsten och låt talet följa.
- **Att lägga till poster och aldrig ta bort några.** Katalogen blir osökbar. Beskär varje kvartal.
- **Att bara titta på totaler.** Segmentera efter grupp och titta på tratten.
- **Att stänga förfrågningar som skickats via e-post med en omdirigering.** Det döljer efterfrågan och irriterar användare. Hantera förfrågan och rätta vägen.
- **Att använda sidvisningar som användning.** Räkna slutförda resultat.
- **Att behandla låg användning som användarnas misslyckande.** Fråga om tjänsten behövs och är lätt att använda.
- **Att låta postägare förfalla.** Tilldela ägare och granskningsdatum för varje post.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Katalogdesign | Lista som vuxit fram på begäran | Katalog finns, formuleringen inkonsekvent | Poster på användarspråk med ägare och granskningsdatum | Kvartalsvis beskärning; nomenklatur hanteras | Katalog delad över team och leverantörer; poster samdesignade med användare |
| Mätning av införande | Anekdot | Förfrågningsantal per post | Införande definierat av kvalificerade användare och slutförda resultat | Trattar, kohorter och segment granskas månadsvis | Införande länkat till upplevelse och resultat över tjänster |
| Förbättring | Ad hoc-rättelser | Rättelser efter klagomål | Sökglapp och bortfall granskas månadsvis | Rättelser prioriteras och följs i en backlog | Förbättring samordnas med användare, med avvecklade tjänster redovisade öppet |

## Checklista

- [ ] Varje större tjänst har en skriven avsedd publik och en alternativ väg.
- [ ] Införande definieras som slutförda resultat av kvalificerade användare.
- [ ] Katalogposter har ägare, beskrivningar på användarspråk och granskningsdatum.
- [ ] Tratten är instrumenterad för de mest efterfrågade posterna.
- [ ] Sökningar utan resultat granskas månadsvis.
- [ ] Införande och övergivande segmenteras efter grupp, med små grupper undertryckta.
- [ ] Förfrågningar som anländer utanför katalogen taggas och räknas.
- [ ] Katalogen beskärs varje kvartal, med skäl registrerade.
- [ ] Införande visas bredvid nöjdhets- eller ansträngningsmått.
- [ ] Inget införandemål sätts för ett enskilt team eller en enskild person.

## AI-prompter

**Analysera en förfrågningstratt.**

```text
For the catalog item [item name] in [type of organization], our portal data for
[period] is: views [number], starts [number], submissions [number], and
fulfilled [number]. The form has [number] fields: [list]. Describe where users
likely struggle, suggest three changes to test, and say how I would check that
each change helped without moving the problem to fulfilment. Do not invent
benchmark values. List your assumptions and what additional data you need.
```

**Granska sökloggar efter katalogglapp.**

```text
Here are the top [number] catalog searches from [period] with result counts:
[paste data]. Group them into themes, flag searches that return nothing or too
many items, and suggest whether each needs a new item, a rename, a synonym, or a
knowledge article. Do not guess at services we may not offer. List your
assumptions and the questions I should ask the item owners.
```

**Planera en katalogbeskärning.**

```text
I manage a catalog of [number] items. For each of these items I have request
counts for 12 months, review dates, and owners: [paste a summary]. Propose
criteria for removing, merging, or keeping an item, a short note to owners, and a
way to avoid dropping rare but critical items. Include a check that we are not
simply moving requests to email. List your assumptions.
```

**Skriv utkast till en införandedefinition för en tjänst.**

```text
Service: [name]. Intended users: [roles]. Alternative path today: [what they do
now]. Draft a one-page adoption definition covering eligible users, what counts
as a completed use, the data source, how to exclude test and automated traffic,
how the measure could be gamed, and a guardrail. Do not invent targets. List
your assumptions and anything I need to confirm.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett införande- eller katalogmått.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en ny post för katalogmått har sin manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- Införande betyder att avsedda användare slutför resultat med en tjänst, så definiera publiken och räkna slutföranden.
- Mät tratten, sökglappen och användarnas retention och segmentera efter grupp.
- Jämför tjänsten med alternativet användare har i dag.
- Håll katalogen liten, ägd och beskuren varje kvartal.
- Tvinga inte fram användning för att höja ett tal, och para införande med nöjdhet och ansträngning.
- Behandla låg användning som en fråga om behov och lätthet, inte som användarnas misslyckande.

## Referenser och vidare läsning

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Hunnebeck, L., *ITIL Service Design* (service catalogue management), The Stationery Office, 2011.
3. Hunt, A. and Thomas, D., *The Pragmatic Programmer*, Addison-Wesley, for the habit of removing what is no longer useful.
4. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
5. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
6. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Conversion funnel](https://en.wikipedia.org/wiki/Conversion_funnel).
9. Wikipedia, [Cohort analysis](https://en.wikipedia.org/wiki/Cohort_analysis).
10. Wikipedia, [Web analytics](https://en.wikipedia.org/wiki/Web_analytics).
11. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
12. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
