# Mätetal för kunskapshantering

**Mät kunskap efter om den används och litas på i behovets ögonblick, inte efter hur mycket av den som finns: bevaka länkgrad, återanvändning, färskhet och sökbarhet tillsammans, och behandla varje artikelantal som en fråga om arbetet snarare än ett betyg.**

## Översikt och motiv

Ett serviceteam samlar kunskap varje dag: hur man återställer en tjänst, vad ett förvirrande felmeddelande egentligen betyder, vilken lösning som höll senast. [Kunskapshantering](https://en.wikipedia.org/wiki/Knowledge_management) är disciplinen att göra den kunskapen tillgänglig för nästa person som behöver den. I ITIL 4 (2019 års utgåva av ramverket publicerad av AXELOS, och den vitt dokumenterade grunden för den här boken) är kunskapshantering en praktik i sig, och [ITIL](https://en.wikipedia.org/wiki/ITIL) förväntar sig också att den stöder incidenthantering, problemhantering och servicedesken. Det här ämnet behandlar hur man avgör om det stödet är verkligt.

Det mesta av kunskapshanteringens användbara resultat hamnar i en [kunskapsbas](https://en.wikipedia.org/wiki/Knowledge_base): ett lager av artiklar, driftinstruktioner, poster över kända fel och korta svar på hur-frågor. En [driftinstruktion](https://en.wikipedia.org/wiki/Runbook) (runbook) är en skriven uppsättning steg för en rutinoperation eller en återställning. Artiklar är den uttryckliga delen av vad ett team vet. Den [tysta kunskapen](https://en.wikipedia.org/wiki/Tacit_knowledge) hos erfarna människor, till exempel en känsla av att ett larm är brus, kan inte skrivas ned fullt ut, och inget mätetal i det här ämnet mäter den direkt.

I ITIL-synen är kunskap en hanterad tillgång med en livscykel: skapad, granskad, publicerad, använd och avvecklad. I det agila synsättet måste dokumentation förtjäna sin plats, samtal och parning bär mycket och skriven kunskap är en biprodukt av att slutföra arbete. Båda synsätten är överens om provet: hjälpte kunskapen någon att lösa ett verkligt problem snabbare eller bättre än hen annars hade gjort?

Metoden som kopplar samman de två synsätten mest direkt är [Knowledge-Centered Service (KCS)](https://en.wikipedia.org/wiki/Knowledge-centered_support), en metodik från Consortium for Service Innovation. I KCS fångas och förbättras kunskap som en del av att lösa problemet, inte efteråt. Människor arbetar i två loopar. Lösningsloopen är lösningens ögonblick: sök efter en befintlig artikel, återanvänd och förbättra den om den hittas, skapa en om inte. Utvecklingsloopen är den längre cykeln som studerar hur kunskap presterar och förbättrar systemet runt den. KCS föreslår också egna indikatorer, till exempel takten i vilken lösta ärenden länkas till artiklar. Det här ämnet sammanfattar dessa idéer på ett leverantörsneutralt sätt; team som formellt antar KCS bör läsa konsortiets egen praktikguide.

Antalet artiklar i en kunskapsbas är ett lager, inte ett resultat, och det stiger lika lätt av försummelse som av omsorg. Mätetalen nedan är knutna till ett användningsögonblick i stället: ett stängt ärende, en gjord sökning, en läsares reaktion. Även de kan böjas (se ämne 1.2, Goodharts lag och mätetalens psykologi).

Kontakt- och hanteringsmått hör hemma hos [servicedesken](https://en.wikipedia.org/wiki/Service_desk) (se ämne 3.1, Mätetal för servicedesk). Volym och upprepningsmönster kommer från incidentdata (se ämne 3.2, Incidentvolym och prioritet). Självbetjäningsframgång, där användare konsumerar artiklar utan en handläggare, behandlas separat (se ämne 3.7, Mätetal för självbetjäning och automatisering). Det här ämnet håller sig till kunskapens egen hälsa och dess användning av de människor som löser problem.

## Nyckelprinciper

- **Mät användning vid arbetsstället.** En artikel som är länkad till ett löst ärende eller hittad av en sökning är belägg för värde. En artikel som bara finns är det inte.
- **Fånga i arbetets flöde.** Kunskap skriven under lösning är färskare och billigare än kunskap skriven i en separat dokumentationsinsats, så mätetal bör belöna fångst som en del av att slutföra arbete.
- **Läs färskhet mot användning.** Gammal är inte detsamma som fel. Granskningsinsatsen hör hemma på artiklar som används ofta, inte jämnt fördelad över en katalog av mestadels olästa sidor.
- **Stickprova för relevans.** En länk mellan ett ärende och en artikel bevisar bara att någon skapade länken. Ett litet mänskligt stickprov på om artikeln verkligen passade säger om länken betyder något.
- **Beskriv team och kunskapsområden, aldrig individer.** Antal bidrag per person förvandlar en delad tillgång till en tävling och lär människor att skriva skräp (se ämne 1.2, Goodharts lag och mätetalens psykologi).
- **Para varje volymmått med en kvalitetssignal.** Länkgrad med relevans, artikelskapande med dubbletter, återanvändning med läsarnas återkoppling.

## Mätetalsdefinitioner

Tabellen listar sju mätetal. Tidsfönster (till exempel granskningsperioden för färskhet) är val ett team gör och skriver ned; inget värde här är ett riktmärke. Genomgående betyder "ärende" en incident- eller serviceförfrågningspost i ITSM-verktyget (verktyget för it-tjänstehantering), och större incidenter redovisas separat så att de inte förvränger kvoterna (se ämne 3.4, Mätetal för större incidenter).

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kunskapslänkgrad | Andel lösta ärenden som har minst en kunskapsartikel bifogad i lösningsögonblicket | ärenden lösta under perioden med minst en länkad artikel / ärenden lösta under perioden. Räknar lösningsdatum; utesluter större incidenter, ärenden stängda som dubbletter och ärenden som automatiskt stängts utan mänskligt arbete | procent | ITSM-verktyg: ärende- och artikellänktabeller | Kunskapshantering; incidenthantering | Definition av klart inkluderar att fånga vad som lärts | Veckovis för teamet; månadsvis för granskning |
| Återanvändningskvot | Andel artikellänkar som pekar på en befintlig artikel snarare än på en som skapats under det ärendet | länkar till artiklar som fanns innan ärendet öppnades / alla artikellänkar som gjorts på lösta ärenden under perioden. Utesluter länkar som lagts till efter att ärendet stängts | procent | ITSM-verktyg: artikelns skapandedatum mot ärendets öppningsdatum | Kunskapshantering; ständig förbättring | Återanvändning framför omarbete; delat ägande av kodbasen och dess dokumentation | Månadsvis |
| Artikelfärskhet | Andel artiklar i bruk som har granskats, eller använts och bekräftats korrekta, inom ett angivet granskningsfönster | artiklar i bruk med ett gransknings- eller bekräftat användningsdatum inom fönstret / artiklar i bruk. En artikel är i bruk om den länkades till ett ärende eller visades för en läsare de senaste 12 månaderna (ett teamval); utkast och avvecklade artiklar utesluts | procent | Metadata och visningslogg i kunskapsbasen | Kunskapshantering; servicedesk | Backlogförfining av dokumentation; åtgärder från retrospektiv | Månadsvis |
| Andel sökningar utan träff | Andel kunskapssökningar som inte ger någon artikel | sökningar med noll träffar / alla sökningar. Utesluter sökningar av botar och automatiska kontroller; räknar varje sökning en gång även om den upprepas inom en minut | procent | Sökloggen i kunskapsbasen eller portalen | Kunskapshantering; servicedesk; hantering av serviceförfrågningar | Upptäckt av obemött användarbehov; backloginput | Veckovis |
| Hjälpsamhetsgrad | Andel läsarrespons som säger att artikeln hjälpte, visad med svarsfrekvensen | hjälpsamma röster / (hjälpsamma röster + ej hjälpsamma röster) för artiklar under perioden; svarsfrekvens = återkopplingsröster / artikelvisningar | procent, med svarsfrekvens | Återkopplingswidget och visningslogg i kunskapsbasen | Kunskapshantering; kundupplevelse | Återkoppling från intressentgranskning av dokumentation | Månadsvis |
| Tid till publicering | Förfluten tid från att ett artikelutkast skapas till att det granskats och är synligt för sin publik | klockan startar vid utkastets skapande, stoppar vid publicering (eller vid första godkända synliga tillstånd). Utesluter tid i ett tillstånd "i vänteläge, väntar på produktrelease"; redovisas som median och 85:e percentil | dagar (median och 85:e percentil) | Arbetsflödeshistorik i kunskapsbasen | Kunskapshantering | Ledtid för ett arbetsobjekt från start till klart (se ämne 2.2, Ledtid, cykeltid och flödeseffektivitet) | Månadsvis |
| Bidragsbredd | Spridningen av artikelskapande och förbättring över teamet, mätt utan att namnge människor | unika bidragsgivare som skapade eller förbättrade en artikel under perioden / teammedlemmar som löste ärenden under perioden. Redovisas bara för ett team, aldrig som en lista med namn | procent | Redigeringshistorik i kunskapsbasen sammanfogad med teammedlemskap | Kunskapshantering; ständig förbättring | Kollektivt ägande; parning och svärmning | Kvartalsvis |

Kunskapslänkgraden har en klocka som är lätt att missa. Länken måste finnas när ärendet löses, inte när någon städar en vecka senare, eftersom sen länkning mäter städning och inte säger något om användning under lösningen. Återanvändningskvoten beror på ett pålitligt skapandedatum för artiklar. Om artiklar migreras eller importeras i bulk nollställs deras skapandedatum och kvoten vilseleder tills migreringen är markerad.

## Rekommendationer

### Besluta vad kunskapen är till för

**1. Knyt varje kunskapsmätetal till ett användningsfall.** Namnge de människor kunskapen tjänar: deskanalytiker som löser första kontakten, ingenjörer i jour som hanterar ett larm eller användare som hjälper sig själva. Varje publik behöver olika mått. En driftinstruktion för en ingenjör i jour bedöms efter om stegen återställde tjänsten, medan en artikel om lösenordsåterställning bedöms efter om användaren slutade kontakta desken. Registrera det i ditt register (se ämne 1.4, Styrning och ägarskap av mätetal).

**2. Börja med länkgrad och relevans, inte artikelantal.** Länkgraden visar om kunskap överhuvudtaget kommer in i lösningsögonblicket. Para den från början med ett litet månatligt stickprov där en person läser 20 eller 30 länkade ärenden och bedömer om artikeln passade. En länkgrad på 70 procent där hälften av länkarna är irrelevanta är sämre än en länkgrad på 40 procent med ärliga länkar, eftersom den första döljer kunskapsglappet som den andra avslöjar.

**3. Skilj "ingen artikel fanns" från "artikel fanns men hittades inte".** När ett ärende stängs utan länk skiljer sig skälen och därmed rättelserna. Lägg till ett kort stängningsval, till exempel "ingen artikel fanns" och "artikel hittades inte", och redovisa dem som andelar av olänkade ärenden. Det första pekar på innehåll att skriva; det andra pekar på sökning, namngivning och struktur. Håll valet valfritt där det skulle sakta ner desken och stickprova i stället.

### Fånga kunskap när arbetet blir klart

**4. Gör fångst till en del av definitionen av klart.** I ett agilt team är ett arbetsobjekt som ändrar hur en tjänst beter sig inte klart förrän driftinstruktionen, posten över kända fel eller hjälpartikeln är uppdaterad. I servicedesken är ett ärende som krävde upptäckt inte löst förrän upptäckten är fångad eller en befintlig artikel förbättrad. Det är KCS-idén om att arbeta i lösningsloopen, och den håller kostnaden för att skriva låg eftersom den som skriver har sammanhanget färskt.

**5. Tillåt ett lättviktigt utkasttillstånd.** Många team förlorar kunskap därför att varje artikel måste passera en tung granskning innan någon kan se den. KCS-liknande praxis skiljer en pågående artikel, synlig för teamet, från en validerad, synlig för en bredare publik. Mät tid till publicering för båda stegen separat, som medianer och 85:e percentilen, så att långsamma granskningar syns som en kö och inte som ett vagt klagomål (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

**6. Föredra att förbättra framför att skapa.** En växande hög av nästan-dubbletter försämrar sökningen och gör färskhet svårare att upprätthålla. Bevaka återanvändningskvoten bredvid skapandeantalet och när skapandet stiger medan återanvändningen faller, leta efter dubbletter. Gör sammanslagning och avveckling lätt och synlig och räkna en sammanslagning som ett positivt bidrag.

### Håll kunskapen aktuell och sökbar

**7. Granska artiklarna som används.** Koncentrera granskningsinsatsen där användningen är hög. Sortera artiklar i bruk efter hur ofta de länkades eller visades och sätt ett granskningsfönster för den främsta gruppen som är kortare än för den långa svansen. En inaktuell artikel som ingen läser kostar lite; en inaktuell artikel som förekommer i en tredjedel av lösningarna kan vilseleda hundratals ärenden. Redovisa färskhet för den mycket använda gruppen som en egen rad så att medelvärdet för hela basen inte döljer den.

**8. Behandla sökfel som backlogobjekt.** Läs de vanligaste sökningarna utan träff varje månad och avgör för var och en om en artikel ska skrivas, ett synonym läggas till, en artikel döpas om eller frågan accepteras höra hemma någon annanstans. Det förvandlar ett mätetal till en kort, konkret lista som teamet kan arbeta av. Det visar också verkligt vokabulär, eftersom användare och analytiker sällan använder de ord som tjänstekatalogen använder.

**9. Läs orden bakom rösterna.** Hjälpsamhetsgraden är billig och brusig. Svarsfrekvenser är vanligen låga och lutar mot starka åsikter. Visa svarsfrekvensen bredvid hjälpsamhetsgraden och läs de skrivna kommentarerna på de mest visade artiklarna i en stående granskning. En enda kommentar som "steg 4 finns inte längre i den nya versionen" är värd mer än tusen omärkta röster.

**10. Koppla kunskap till problem och efteranalyser.** En återkommande incident som upprepade gånger löses med samma artikel är en signal till problemhantering, som letar efter den underliggande orsaken och kan ta bort behovet av artikeln (se ämne 4.1, Mätetal för problemhantering). Poster över kända fel och lärdomar från efteranalyser är kunskapstillgångar med egen livscykel (se ämne 4.2, Mätetal för efteranalyser och lärande, och ämne 4.6, Teknisk skuld och kända fel). Titta på de tio mest länkade artiklarna varje kvartal och fråga vilka som bör avvecklas genom att rätta orsaken.

### Styr utan att rangordna

**11. Redovisa bidrag på teamnivå.** Bidragsbredd talar om för dig om kunskapsarbetet är delat eller koncentrerat till två personer. Det är en risk värd att se, eftersom det är samma mönster som en [busfaktor](https://en.wikipedia.org/wiki/Bus_factor) på två. Det får aldrig bli en resultattabell över författare, som skulle belöna antalet redigeringar och lära människor att dela upp artiklar eller göra triviala ändringar. Om en koncentration framträder, behandla den som ett teamsamtal om tid, stöd och tillstånd att skriva (se ämne 9.4, Mätetal för kompetens och lärande).

**12. Avveckla mått som slutar hjälpa.** Om ingen agerar på länkgraden, flytta uppmärksamheten till relevans eller färskhet hos den mycket använda gruppen. Logga alla definitionsändringar med skälet, eftersom en ändrad formel bryter trendlinjen (se ämne 1.5, Datakällor och instrumentering).

## Manipuleringsvektorer och skyddsräcken

Varje mätetal i definitionstabellen finns här. Kunskapsmätetal är särskilt utsatta eftersom handlingen att länka eller granska är ett snabbt klick, medan det verkliga värdet ligger i innehållet.

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Kunskapslänkgrad | Att bifoga vilken artikel som helst, ofta en allmän eller mycket populär, till varje ärende före stängning; att länka i efterhand i bulk | Månatligt relevansstickprov av länkade ärenden; andel länkar som går till samma få artiklar; länktidsstämpel mot lösningstidsstämpel |
| Återanvändningskvot | Att skapa en ny artikel för varje ärende och genast länka den så att den räknas som återanvändning nästa gång; eller att aldrig skapa något så att kvoten ser perfekt ut | Andel dubblettartiklar funna genom en periodisk sökning; andel ärenden stängda med skälet "ingen artikel fanns" |
| Artikelfärskhet | Att markera artiklar som granskade utan att kontrollera dem; att nollställa granskningsdatumet genom triviala redigeringar; att bara räkna de artiklar som är lätta att granska | Stickprov av nyligen granskade artiklar prövade mot den verkliga tjänsten; hjälpsamhetsgrad och skrivna kommentarer på samma artiklar |
| Andel sökningar utan träff | Att lägga till vaga eller samlande artiklar som matchar vilken fråga som helst; att proppa in nyckelord; att utesluta besvärliga söktermer ur loggen | Klick följt av en kontakt i samma ämne inom ett kort fönster; hjälpsamhetsgrad; manuell läsning av de främsta söktermerna |
| Hjälpsamhetsgrad | Att bara uppmana nöjda läsare att rösta; att dölja alternativet ej hjälpsam; att rösta inifrån teamet | Svarsfrekvens och respondentmix visas med graden; skrivna kommentarer; kontaktfrekvens efter att ha läst artikeln |
| Tid till publicering | Att publicera ett tunt skelett för att stoppa klockan; att dela upp en artikel i bitar; att flytta utkast till ett tillstånd som klockan utesluter | Relevans och hjälpsamhet hos nyligen publicerade artiklar; antal och ålder på utkast i uteslutna tillstånd |
| Bidragsbredd | Att göra triviala redigeringar så att alla framstår som bidragsgivare; att be människor lägga till en mening för att uppfylla en kvot | Storlek och substans på redigeringar stickprovas; återanvändning och hjälpsamhet hos de bidragna artiklarna; inga namn i rapporten |

En sund avläsning visar länkade artiklar som ett mänskligt stickprov bekräftar är relevanta, en återanvändningskvot som stiger allteftersom basen mognar, en mycket använd uppsättning artiklar med nyliga verifierade granskningar, en kort lista med sökfel som teamet arbetar sig igenom och bidrag spridda över teamet. Vissa ärenden utan artikel, för att de verkligen var nya, är tecken på en ärlig bas, inte en misslyckad.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Sikta på en hög länkgrad | Driver in fångst och återanvändning i den dagliga rutinen; enkelt att förstå | Inbjuder till meningslösa länkar; döljer luckor där ingen artikel finns |
| Stickprova för relevans för hand | Avslöjar om länkar betyder något; bygger gemensamma standarder | Tar analytikertid; små stickprov är brusiga; beror på stickprovarens omdöme |
| Granska allt enligt ett fast schema | Lätt att planera och granska; jämnt tillämpat | Lägger insats på artiklar som ingen läser; försummar de mycket använda |
| Granska efter användning | Riktar insatsen dit fel kunskap gör mest skada | Kräver pålitliga visnings- och länkdata; artiklar i den långa svansen kan ruttna osedda |
| Formellt KCS-införande | Ger en sammanhängande, prövad uppsättning praktiker och indikatorer | Kräver ihållande investering, coachning och verktygsstöd; tungt för ett mycket litet team |
| Samtal och parning i stället för artiklar | Överför omdöme och sammanhang; liten omkostnad | Skalar inte till skift, semestrar och personalomsättning; kunskap lämnar med människor |

Mät precis tillräckligt för att se om kunskap används och litas på och lägg den sparade insatsen på innehåll. För ett litet team är en länkgrad med ett månatligt relevansstickprov och en kort lista med sökfel ett fullständigt program. För en stor desk betalar sig hela uppsättningen bara om någon äger granskningen och agerar på den.

## Frågor att diskutera med teamet

**1. När vi senast löste ett svårt ärende, varifrån kom kunskapen, och vart tog den vägen efteråt?**
Välj ett nyligt ärende som tog verklig möda och följ vägen för det som lärdes. Hittades en artikel, frågades en kollega eller räknades ett svar ut från grunden? Fråga om nästa person med samma problem skulle hitta svaret på under fem minuter. Facilitatorn bör leta efter glappet mellan vad teamet vet och vad kunskapsbasen innehåller.

**2. Om vi höjde vår länkgrad till ett angivet mål nästa månad, hur skulle vi kunna göra det utan att hjälpa någon?**
Gör manipulationslistan uttrycklig och behandla den som designunderlag snarare än en anklagelse. Vanliga svar är att länka en allmän artikel, länka i bulk vid stängning och välja den mest populära artikeln. Fråga för varje svar vilket skyddsräcke i tabellen som skulle fånga det och hur snabbt. Facilitatorn bör lämna mötet med minst en ny kontroll, till exempel ett månatligt relevansstickprov, och en ägare för den.

**3. Vilka fem artiklar förlitar vi oss mest på, och när verifierades de senast mot den verkliga tjänsten?**
Titta på de mest länkade och mest visade artiklarna och läs två av dem högt tillsammans. Samtalet visar ofta att artiklarna med mest effekt är de som får minst omsorg, vilket är argumentet för att granska efter användning.

**4. Vad söker människor efter som vi inte har?**
Ta med de främsta sökningarna utan träff och skälen för olänkade ärenden. Gruppera dem i artiklar att skriva, ord att lägga till och frågor som hör hemma hos ett annat team. Facilitatorn bör fånga en kort lista med de tre nästa objekten och planera hur de ska skrivas under normalt arbete, inte i ett särskilt projekt.

**5. Vem skriver vår kunskap, och vad kostar det dem att göra det?**
Diskutera fångst ärligt. Ses skrivande som en del av jobbet, eller som extra arbete efter arbetet? Fråga vad som bromsar det: en tung mall, en långsam granskning, rädsla för att ha fel eller ingen tid i slutet av ett hårt skift. Facilitatorn bör styra bort från att jaga individer och mot förändringar i verktyg, tid och tillstånd.

**6. Vilka av våra artiklar borde vi sluta behöva?**
Ta de mest återanvända artiklarna och fråga vilken återkommande orsak de kringgår. En återställningsprocedur som används 200 gånger i månaden kan vara ett symptom på ett fel i produkten, en förvirrande skärm eller en saknad automatisering. Besluta vilka objekt som ska lämnas till problemhantering eller produktteamet och vilka som ska automatiseras (se ämne 3.7, Mätetal för självbetjäning och automatisering). Facilitatorn bör notera att det bästa resultatet av gott kunskapsarbete ibland är färre artiklar.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam skapar mycket av den kunskap en tjänst kommer att behöva: hur en funktion beter sig, vad ett nytt fel betyder, hur man återställer. Om den kunskapen inte fångas före release får servicedesken och jourteamen lära sig den den hårda vägen. Ta med driftinstruktionen och hjälpartikeln i definitionen av klart och bevaka länkgrad och sökfel för de tjänster du äger som återkoppling. När samma artikel länkas många gånger, behandla det som en felrapport om produkten, inte som en framgång för dokumentationen.

### Service- och driftteam

Servicedesk- och driftteam är de främsta producenterna och konsumenterna av kunskapsbasen, så mätetalen är mestadels deras att använda. Arbeta lösningsloopen ärligt: sök först, återanvänd och förbättra, skapa när inget passar. Använd länkgrad med ett relevansstickprov och läs sökningar utan träff som en backlog. Undvik varje resultattabell över författare eller redaktörer, eftersom kunskapsbasen är ett delat verktyg och personliga antal skadar den (se ämne 3.1, Mätetal för servicedesk).

### Ledning och styrning

Ledare avgör om kunskapsarbete får tid, så de avgör kunskapens kvalitet. Be om relevansstickprovet och färskheten hos de mycket använda artiklarna innan du ber om artikelantalet. Motstå mål på länkgrad eller artikelskapande utan skyddsräcke och räkna med att höra när siffrorna faller av goda skäl, till exempel en sammanslagen uppsättning dubbletter. Finansiera granskningen av artiklar med hög användning och de rättelser som gör artiklar onödiga.

### Kunder och användare

Användare möter kunskap genom sökning, en portal, en chattbot eller svaret en analytiker ger dem. Det de märker är om det första svaret är rätt och om de måste upprepa sig. Deras egen återkoppling på artiklar, deras sökningar som kommer upp tomma och deras upprepade kontakter är de bästa skyddsräckena för allt i det här ämnet. Om användare ombeds betygsätta artiklar, tala om för dem vad som händer med återkopplingen och agera på den synligt (se ämne 6.1, Mätetal för kundnöjdhet).

## I praktiken: ett exempel från tjänstehantering

Ett medelstort försäkringsbolag driver en intern it-servicedesk med ett dussin analytiker som stöder personal på flera kontor. Desken delar en kunskapsbas med två produktteam som äger skadeapplikationen och dokumentportalen. Alla siffror i det här exemplet är illustrativa.

Ledningen har bett om bättre lösning vid första kontakten (se ämne 3.1, Mätetal för servicedesk) och sätter ett mål för kunskapslänkgraden på 60 procent, upp från illustrativa 38 procent. Inom sex veckor visar instrumentpanelen 64 procent. Deskchefen är inte övertygad, eftersom analytiker fortfarande klagar på att de inte kan hitta svar, och en produktteamchef nämner att tre av artiklarna hon äger förekommer på de flesta stängda ärenden.

Teamet kör en manipulationsgranskning och ett relevansstickprov. De läser 30 länkade ärenden, slumpmässigt valda från föregående månad, och bedömer om artikeln passade ärendet. I en illustrativ räkning är 11 av de 30 länkarna till en allmän artikel "Så loggar du ett ärende" eller en allmän nätverksöversikt som inte adresserade problemet. De finner också att länkarna gjordes inom några sekunder efter att ärendet stängdes, ett mönster som antyder vana och inte användning. Deskchefen tittar på återanvändningskvoten, som är uppåt, och på andelen olänkade ärenden med skälet "ingen artikel fanns", som har sjunkit till nästan ingenting, eftersom analytiker nu väljer den närmaste artikeln. Kunskapsglappet har blivit osynligt.

Teamet fattar tre beslut. För det första dras länkgradsmålet tillbaka och ersätts av en relevansjusterad vy: länkgraden redovisas bredvid den stickprovade andelen relevanta länkar, och stängningsskälet "ingen artikel fanns" görs lätt att välja och behandlas inte som ett misslyckande. För det andra läses sökningarna utan träff varje månad, och de fem främsta blir de nästa skrivuppgifterna, delade över desken. För det tredje granskas de 20 mest länkade artiklarna för färskhet inom en månad, ägda av det berörda produktteamet, och varje artikel som länkas till mer än en fjärdedel av en tjänsts ärenden lämnas till problemhantering som kandidat för en permanent rättelse (se ämne 4.1, Mätetal för problemhantering).

Två månader senare har rubrikens länkgrad fallit tillbaka till illustrativa 51 procent, vilket känns som dåliga nyheter. Den stickprovade relevansen har stigit från 63 procent till 85 procent i illustrativa termer, andelen sökningar utan träff har fallit och ett upprepat inloggningsproblem med dokumentportalen har rättats vid sin orsak, vilket avvecklade tre artiklar. Chefen ber ledningen bedöma programmet efter relevans och avvecklade kringgåenden, inte efter den råa länkgraden.

## Agilitet, AI, automatisering och analys

### Agilitet

Behandla kunskap som en biprodukt av att lösa problem, med kort återkoppling från användare om huruvida en artikel hjälpte. Varningen är att mål för artikelantal ger tunt, duplicerat innehåll.

### AI

AI kan skriva utkast till artiklar, besvara frågor ur kunskapsbasen och lyfta fram luckor, vilket höjer artikelantal och användning medan kvaliteten kan falla. Para länkgrad och återanvändning med hjälpsamhetsgraden och med andelen AI-skrivna artikelutkast som en människa granskade före publicering. Varningen är att en inaktuell eller felaktig artikel som en AI levererar självsäkert skalar felet.

### Automatisering

Fånga sök-, visnings- och länkhändelser automatiskt och automatisera färskhetspåminnelser till ägare. Mät automatiseringen på hur många påminnelser som leder till en uppdatering. Varningen är att automatisk utgång som avpublicerar artiklar kan ta bort användbart innehåll.

### Analys

Använd sökloggar för att se frågor utan träff och visa hjälpsamhet med antalet svar. Beslutet detta ger underlag för är vilka artiklar som ska skrivas, rättas eller avvecklas. Varningen är att visningar av en artikel inte är detsamma som hjälp som fåtts.

## Branschperspektiv

**Startup.** Kunskap bor i några få huvuden och i chatthistorik. Skriv en kort lista med driftinstruktioner för det som går sönder på natten och registrera rättelsen efter varje incident. En månatlig kontroll av att de främsta driftinstruktionerna fortfarande fungerar är tillräcklig mätning.

**Småföretag.** En person är ofta både servicedesk, administratör och ägare av kunskapen. Risken är busfaktorn, eftersom kunskapen försvinner om personen gör det. Använd ett enkelt delat arkiv, håll artiklar korta och låt en konsult eller kollega testa de viktigaste procedurerna. En regelbunden genomläsning av de mest använda sidorna slår vilken instrumentpanel som helst.

**Storföretag.** Skala ger dubblettartiklar och ojämn kvalitet. Använd gemensamma definitioner av länkgrad, färskhet och återanvändning, redovisa per tjänst och team och utse ägare för artiklarna med hög användning. Undvik att jämföra team, eftersom tjänstemix och basens ålder skiljer sig.

**Offentlig sektor.** Arkivregler, tillgänglighetskrav och revisionsförväntningar kan styra hur kunskap lagras, granskas och avvecklas. Behandla dessa som designunderlag: behåll ett godkännandespår för artiklar som påverkar medborgare och publicera tillgängligt innehåll. Återkoppling och sökfel från medborgare är särskilt värdefulla (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna för kunskapsmätetal är måttliga. Verktygsdatan finns oftast redan i ITSM-plattformen och kunskapsbasen. De främsta kostnaderna är tiden för att definiera måtten, det lilla månatliga stickprovet som kontrollerar relevans, granskningstiden för artiklar med hög användning och disciplinen att fånga kunskap medan man löser problem. Om kunskapsplattformen saknar användbara länk- eller sökdata bör kostnaden för att instrumentera den tas med (se ämne 1.5, Datakällor och instrumentering).

Avkastningen är ett mönster, och boken anger ingen siffra för den. När analytiker snabbt hittar en korrekt artikel går lösningen snabbare och blir mer konsekvent, nya medarbetare blir användbara tidigare och ingenjörer i jour beror mindre på några få experter. När användare hittar svar själva får desken färre upprepade kontakter för kända frågor. Mätetalen hjälper genom att visa var kunskap saknas, är inaktuell eller oanvänd, så att knapp skrivtid går till de artiklar som spelar roll.

Den totala ägandekostnaden omfattar underhåll. Artiklar förfaller när tjänster ändras, så granskningstid är en löpande kostnad, och ett program som ignorerar den kommer att överskatta nyttan. För att uppskatta avkastningen för ditt eget team, jämför ett stickprov av dina egna ärenden före och efter och märk dina antaganden.

## Antimönster och fallgropar

- **Att räkna artiklar eller visningar som framgång.** Volymen stiger med oordning och visningar kan signalera förvirring. Mät i stället användning i lösning, relevans och återkoppling.
- **Ett mål på länkgrad utan relevanskontroll.** Människor kommer att bifoga vilken artikel som helst. Stickprova länkade ärenden månadsvis och redovisa den relevanta andelen bredvid graden.
- **Att rangordna författare eller redaktörer.** Personliga summor ger tunna redigeringar och uppdelade artiklar. Redovisa bidragsbredd för teamet och diskutera den som en kapacitetsfråga.
- **Att granska alla artiklar enligt ett fast schema.** Insatsen går till sidor som ingen läser. Granska efter användning och avveckla det oanvända.
- **Att publicera skelett för att stoppa klockan.** En snabb, tunn artikel besegrar tid till publicering. Para den med hjälpsamhet och graden av uppföljande kontakter.
- **Att ignorera sökningar som misslyckas.** Misslyckade sökningar är den tydligaste signalen om obemött behov. Läs dem varje månad och förvandla de främsta objekten till arbete.
- **Att skilja kunskap från arbetet.** Ett dokumentationsprojekt i slutet av kvartalet ger inaktuella sidor. Fånga under lösning och i definitionen av klart.
- **Att behandla kunskapsbasen som permanent.** Innehåll förfaller. Gör avveckling och sammanslagning till rutin och ge kredit för det.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Fångst och länkning | Kunskap bor i huvuden och chatt; länkar är sällsynta | Vissa team länkar artiklar till ärenden, praxis varierar | En skriven regel för länkning och fångst; stängningsskäl registreras | Länkgrad och relevansstickprov granskas månadsvis och kopplas till förbättring | Fångst är en del av arbetsflödet över desk, drift och produktteam; definitioner revideras när de slutar ge underlag för beslut |
| Färskhet och ägarskap | Inga ägare; artiklar åldras osedda | Ägare namngivna för nyckeltjänster | Granskningsfönster satta, med kortare fönster för mycket använda artiklar | Färskhet hos artiklar med hög användning följs över tid och finansieras | Granskningsansvar delas med leverantörer och produktteam; avveckling är rutin |
| Sökbarhet och återkoppling | Sökning är ad hoc; inga söndata | Söklogg finns men läses inte | Sökningar utan träff och läsarrespons granskas i en fast rytm | Sökfel driver en backlog och paras med kontaktdata | Användare, analytiker och chattbotar hämtar från en kunskapskälla; återkoppling ändrar synbart innehållet |
| Användning i förbättring | Mätetal, om några, är antal | Antal visas för teamet | Mätetal paras med skyddsräcken och visas först för teamet | Mycket länkade artiklar matar problemhantering och automatiseringsbeslut | Kunskaps-, problem- och produktbacklogar hanteras tillsammans över team |

## Checklista

- [ ] Varje kunskapsmätetal namnger den publik det tjänar och beslutet det ger underlag för.
- [ ] Länkgraden har en skriven definition, inklusive klockan, undantagen och behandlingen av större incidenter.
- [ ] Ett månatligt stickprov kontrollerar att länkade artiklar är relevanta för ärendena.
- [ ] Ärendestängning registrerar "ingen artikel fanns" och "artikel hittades inte" som skilda skäl.
- [ ] Tid till publicering redovisas som median och en hög percentil, med utkast- och publicerat steg åtskilda.
- [ ] Ett granskningsfönster är satt för artiklar i bruk, kortare för de mest använda.
- [ ] De främsta sökningarna utan träff läses varje månad och förvandlas till backlogobjekt.
- [ ] Läsarrespons visas med sin svarsfrekvens, och kommentarer på de främsta artiklarna läses.
- [ ] Bidrag redovisas bara för teamet, utan namngivna listor.
- [ ] De mest länkade artiklarna granskas varje kvartal som kandidater för permanenta rättelser.
- [ ] Definitionsändringar loggas med skäl.

## AI-prompter

**Kontrollera om länkade artiklar passar sina ärenden.**

```text
I run knowledge reviews for [team name], which supports [type of service]. Below
are [number] resolved cases, each with its summary, resolution notes, and the
title and text of the linked article. For each pair, judge whether the article
fits the case as a relevant answer, a partial answer, or an unrelated link, and
give a one-line reason. Report patterns by article and by service. Do not name
or rank individual analysts. Do not invent facts about the service. List your
assumptions and anything you could not judge from the text.

[paste cases and articles with personal data removed]
```

**Förvandla misslyckade sökningar till en skrivbacklog.**

```text
Here are the most frequent searches in [knowledge base or portal name] that
returned no results in [period]: [list of search terms with counts]. Group them
into themes. For each theme, suggest whether it needs a new article, a synonym
or rename of an existing article ([list of related article titles]), a link to
another team, or no action. Do not invent articles or facts about our systems.
List your assumptions and the questions I should answer before writing anything.
```

**Utforma en lättviktig uppsättning kunskapsmått.**

```text
Design a small set of knowledge management measures for [team name], a
[team size] team using [ITSM tool] and [knowledge tool]. Our main goal is
[goal, such as faster first contact resolution or less dependence on experts].
For each measure give the definition, the clock or boundary, the data source,
the likely gaming vector, and a guardrail. Do not propose individual
rankings, invent benchmark values, or cite sources. List your assumptions and
the data fields you would need that I did not mention.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta relaterade ämnen och det parade skyddsräcket när du lägger till ett kunskapsmätetal på din instrumentpanel.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett kunskapsmätetal bär sin manipuleringsvektor, sitt skyddsräcke och sina korsreferenser i rätt form.

## Viktigaste slutsatser

- Mät kunskap i användningsögonblicket: länkad i lösning, hittad genom sökning, bekräftad av läsare.
- Para länkgrad med ett mänskligt relevansstickprov, eftersom en länk bara bevisar att någon klickade.
- Granska färskhet efter användning och lägg insatsen där en felaktig artikel skulle vilseleda flest ärenden.
- Behandla misslyckade sökningar och mycket länkade artiklar som signaler om nytt innehåll, bättre namngivning eller en permanent rättelse.
- Redovisa bidrag för teamet och rangordna aldrig författare.
- Färre, bättre artiklar tyder ofta på en friskare bas än en större.

## Referenser och vidare läsning

1. Consortium for Service Innovation, *KCS v6 Practices Guide*, first released 2016 and updated since, https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide (check the page for the current version).
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
3. Nonaka, I., and Takeuchi, H., *The Knowledge-Creating Company*, Oxford University Press, 1995.
4. Hansen, M. T., Nohria, N., and Tierney, T., "What's your strategy for managing knowledge?", *Harvard Business Review*, March-April 1999.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Wikipedia, [Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Knowledge base](https://en.wikipedia.org/wiki/Knowledge_base).
10. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
11. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
12. Wikipedia, [Knowledge-centered support](https://en.wikipedia.org/wiki/Knowledge-centered_support).
13. Wikipedia, [Service desk](https://en.wikipedia.org/wiki/Service_desk).
14. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
