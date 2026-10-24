# Datakällor och instrumentering

**Ett mätetal är bara så tillförlitligt som händelserna under det, så namnge sanningskällan för varje siffra, fånga händelser automatiskt i det ögonblick de inträffar och testa pipelinen lika noggrant som du testar diagrammet.**

## Översikt och motiv

De flesta mätetalsprogram lägger sin möda på instrumentpaneler och nästan ingen på rören som matar dem. Det är bakvänt. Ett snyggt diagram byggt på inkonsekventa tidsstämplar, ett statusfält som ingen uppdaterar eller en integration som tyst slutade fungera förra månaden ser auktoritativt ut medan det är fel. Det här ämnet behandlar den oglamorösa grunden för resten av boken: var tjänste- och leveransdata kommer ifrån, hur tillförlitlig varje källa är och vilka datakvalitetsfel som gör ett mätetal ogiltigt innan någon märker det.

Källorna delas in i en handfull familjer. Ett verktyg för [it-tjänstehantering (ITSM)](https://en.wikipedia.org/wiki/Information_technology_service_management) registrerar incidenter, förfrågningar, problem och ändringar, som [ITIL](https://en.wikipedia.org/wiki/ITIL) behandlar som tjänstedriftens kärnposter. Ett [ärendehanteringssystem](https://en.wikipedia.org/wiki/Issue_tracking_system) registrerar backlogen och arbetsobjektens rörelser för agila team. [Versionshantering](https://en.wikipedia.org/wiki/Version_control) registrerar incheckningar, grenar och sammanslagningar. En pipeline för [kontinuerlig integration och kontinuerlig leverans (CI/CD)](https://en.wikipedia.org/wiki/CI/CD) registrerar byggen, testresultat och driftsättningar. Plattformar för övervakning och [observerbarhet](https://en.wikipedia.org/wiki/Observability_(software)) sänder ut telemetri: mätvärden, loggar och spårningar från system i drift. En [konfigurationsdatabas (CMDB)](https://en.wikipedia.org/wiki/Configuration_management_database) registrerar de tjänster och komponenter som saker relaterar till. Enkäter registrerar det som inget system kan observera, till exempel nöjdhet och ansträngning.

En driftsättningshändelse som skrivs av en pipeline är objektiv och svår att förfalska, en ärendestatus som ändras timmar efter arbetet är en erinran, och ett enkätsvar är en uppfattning. Att veta vilken sorts post som ligger bakom en siffra säger vilket fel du ska leta efter först.

Agila och ITIL-baserade synsätt möts vid samma data: båda är tillståndsmaskiner med tidsstämplar, så registrera varje tillståndsändring som en händelse med en pålitlig tid och härled mätetalen ur händelserna.

Tre termer återkommer i det här ämnet. En **sanningskälla** (system of record) är den enda källa som är auktoritativ för ett faktum, till exempel pipelinen för "en driftsättning skedde". **Instrumentering** är den avsiktliga insamlingen av händelser, genom kod, konfiguration eller verktygsintegration, så att ett mätetal kan beräknas utan att någon skriver in det. En **statusmodell** är den uppsättning tillstånd som ett arbetsobjekt eller en post kan befinna sig i och de tillåtna övergångarna mellan dem. Statusmodellen avgör vilka klockor som överhuvudtaget kan beräknas.

I företags- och offentlig skala förvärras problemet. Data passerar genom kopplingar, [ETL-jobb (extract, transform, load)](https://en.wikipedia.org/wiki/Extract,_transform,_load) och rapporteringslager, och varje hopp är en chans för betydelsen att glida. Ett fält som betyder en sak i källan kan betyda något subtilt annorlunda i datalagret, och siffran ser ändå rimlig ut. Botemedlet är att korta avståndet mellan händelse och instrumentpanel och att kontrollera pipelinen enligt schema.

## Nyckelprinciper

- **Fånga händelser, inte sammanfattningar.** Lagra de råa tillståndsändringarna med tidsstämplar och beräkna mätetalen ur dem, så att en definition kan ändras utan att historiken går förlorad.
- **Föredra observation framför självrapportering.** Där ett system kan se händelsen, använd det; reservera människors rapporter för det som bara människor kan säga.
- **Namnge en sanningskälla per faktum.** Dubbla källor går isär, och oenigheten urholkar förtroendet för båda.
- **Utforma statusmodellen före mätetalet.** En klocka kan inte beräknas ur tillstånd som inte finns eller som betyder olika saker i olika team.
- **Behandla pipelinen som en produkt.** Den har ägare, tester, övervakning och en ändringslogg, eftersom datakvaliteten försämras i tysthet.
- **Visa ursprung.** Varje siffra på en instrumentpanel bör leda tillbaka till sina källposter med ett eller två klick.
- **Samla bara in det du kommer att använda, och skydda det.** Varje fält är en kostnad och, när det rör människor, en integritetsplikt.

## Mätetalsdefinitioner

Mätetalen nedan mäter hälsan hos själva datatillförseln. De är instrumentpanelen för instrumenten.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Källtäckning | Andel tjänster och team inom omfattningen vars händelser når mätetalslagret automatiskt | tjänster eller team med ett automatiskt flöde / tjänster eller team inom omfattningen; "inom omfattningen" anges i mätetalsregistret | procent | Mätetalsregister och pipelinekonfiguration | Mätning och rapportering; hantering av tjänstekonfiguration | Teamets arbetsöverenskommelse om verktyg | Kvartalsvis |
| Tidsstämpelkomplettering | Andel stängda arbetsobjekt som bär varje tidsstämpel som behövs för mätetalets klockor | stängda objekt med alla nödvändiga tidsstämplar för tillståndsändringar / objekt som stängts under perioden; objekt som fortfarande är öppna utesluts | procent | Historik i ITSM-verktyg eller ärendehanteringssystem | Incidenthantering; hantering av serviceförfrågningar | Tavlans eller arbetsflödets historik | Månadsvis |
| Efterhandsregistrering | Andel tillståndsändringar som registrerats i efterhand, mätt som glappet mellan händelsetiden och tiden då den fördes in | tillståndsändringar som förts in mer än 24 timmar efter händelsetiden / tillståndsändringar under perioden; klockan startar vid händelsen och stoppar vid inmatningen | procent | Revisionsspår i ärendehanteringssystemet, eller pipelinens händelsetid mot inmatningstid | Ändringsmöjliggörande; incidenthantering | Definition av klart | Månadsvis |
| Dataaktualitet | Hur gamla de nyaste data på en instrumentpanel är när den visas | visningstid minus den nyaste inlästa händelsetiden; redovisa medianen och 95:e percentilen | timmar | Pipelinens körlogg och instrumentpanelens laddningslogg | Mätning och rapportering | Förberedelse inför intressentgranskning | Veckovis |
| Avstämningsavvikelse | Oenighet mellan två källor för samma antal | absolut skillnad mellan de två antalen / antalet från sanningskällan, för en fast period och omfattning | procent | Sanningskällan och rapporteringslagret | Hantering av servicenivåer; ekonomistyrning | Kontroller av releaserapporter | Månadsvis |
| Statusmodellens glidning | Antal olika statusnamn eller övergångar som används jämfört med den dokumenterade modellen | odokumenterade statusar eller övergångar som observerats under perioden (antal); dokumenterade utesluts | antal | Arbetsflödeskonfiguration och händelsehistorik i ärendehanteringssystemet | Ständig förbättring | Arbetsöverenskommelser om arbetsflöde | Kvartalsvis |
| Enkätsvarsfrekvens | Andel inbjudna personer som besvarade en enkät | slutförda svar / levererade inbjudningar; studsade inbjudningar utesluts | procent | Enkätverktyg | Hantering av servicenivåer; kundupplevelse | Intressentgranskning och förbättringsåterkoppling | Per enkätomgång |

Tidsstämpelkompletteringen räknar bara stängda objekt, så en backlog av gamla öppna objekt kan inte dölja ett glapp. Efterhandsregistreringen använder en tröskel på 24 timmar som exempel; ett team väljer en tröskel som passar dess arbete och skriver ned den.

## Rekommendationer

### Koppla varje mätetal till dess källa

**1. Bygg en källkarta innan du bygger en instrumentpanel.** För varje mätetal, registrera sanningskällan, händelsen som startar klockan, händelsen som stoppar den, källans ägare och det kända felläget. Om du inte kan namnge systemet vet du ännu inte var siffran kommer ifrån. Förvara kartan i mätetalsregistret (se ämne 1.4, Styrning och ägarskap av mätetal).

**2. Välj en sanningskälla per faktum.** En driftsättning registreras av pipelinen, en incident av ITSM-verktyget, en kodändring av versionshanteringen, en tjänsterelation av CMDB:n. Där två verktyg håller samma faktum, besluta vilket som gäller och låt det andra läsa från det. Avstämning blir då en kontroll, inte en debatt.

### Fånga händelser i det ögonblick de inträffar

**3. Instrumentera händelsen, inte rapporten.** Låt pipelinen registrera driftsättningen, versionshanteringsvärden registrera sammanslagningen och övervakningssystemet registrera larmet. Data som beror på att någon minns att uppdatera ett fält försämras med avståndet från händelsen och med arbetsbelastningen. Där en automatisk händelse finns, föredra den framför en mänskligt inmatad ersättning för samma faktum (se ämne 2.8, DORA-mätetal).

**4. Gör statusändringar till en bieffekt av arbetet.** Om en grensammanslagning flyttar arbetsobjektet till "i granskning" eller en driftsättning flyttar det till "släppt" behöver ingen komma ihåg det. Integrationer mellan versionshantering, pipeline och ärendehanteringssystem tar bort det mesta av efterhandsregistreringen.

**5. Behåll de råa händelserna och behåll dem oföränderliga.** Lagra varje tillståndsändring med händelsetiden, inmatningstiden och aktörstypen (person eller automatisering). Skriv rättelser som nya händelser, inte som överskrivningar, så att rättelsens historia i sig är data.

### Få tiden rätt

**6. Registrera tid i en standard.** Lagra tidsstämplar i [koordinerad universell tid (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) i ett entydigt format som det som definieras av ISO 8601 och RFC 3339, och konvertera till lokal tid bara för visning. Blandade tidszoner och sommartidsändringar ger i tysthet negativa varaktigheter och klockor som går en timme fel.

**7. Skriv klockreglerna där data finns.** För varje tidsmått, ange vilken händelse som startar klockan, vilken som stoppar den och vilka statusar som pausar den. Ett pausläge är ett designbeslut. Redovisa hur ofta varje pausläge används, eftersom klockan är där tjänstedata oftast formas (se ämne 3.3, Svarstid och lösningstid för incidenter).

### Utforma statusmodellen

**8. Håll statusmodellen liten, gemensam och dokumenterad.** Varje extra status inbjuder till en egen tolkning i varje team. Definiera vad varje tillstånd betyder i en mening, vem som får flytta arbete in i det och vilka övergångar som är tillåtna. Ålder på arbetsobjekt och flödesmått beror på den här modellen (se ämne 2.1, Flödesmått), och jämförelser mellan team beror på att teamen använder samma ord för samma tillstånd. När data överraskar dig, misstänk arbetsflödet först: logga varje ändring av ett arbetsflöde eller fält med datum och skäl, och räkna odokumenterade statusar som en signal om glidning.

### Håll pipelinen ärlig

**9. Testa pipelinen som programvara.** Kontrollera radantal mot källan, kontrollera att obligatoriska fält finns, kontrollera dubbletter och larma när ett flöde upphör. Lägg till en aktualitetsindikator på varje instrumentpanel så att tittarna kan se hur gamla data är. Ett tyst kopplingsfel som lämnar förra månadens siffror på skärmen är bland de vanligaste och mest skadliga felen på det här området (se ämne 11.1, Att utforma en instrumentpanel för tjänstemätetal).

**10. Stäm av enligt schema och stickprova för hand.** Jämför ett antal i rapporteringslagret med källan för en fast period och undersök skillnaden. Läs sedan ett litet stickprov av råa poster. Ett stickprov på femton minuter hittar ofta vad automatiska kontroller inte kan, till exempel en status som används på ett oväntat sätt.

### Hantera människor och enkäter varsamt

**11. Reservera enkäter för det bara en människa kan berätta.** Nöjdhet, ansträngning, förtroende och välbefinnande kan inte observeras ur systemdata. Fråga direkt, håll enkäterna korta, variera tidpunkten och redovisa svarsfrekvensen och vilka som svarade, eftersom de som svarar skiljer sig från dem som inte gör det, en form av [urvalsbias](https://en.wikipedia.org/wiki/Selection_bias). Läs de fria kommentarerna i sin helhet (se ämne 6.1, Mätetal för kundnöjdhet).

**12. Skydda personuppgifter och håll data på teamnivå.** Händelsedata om arbete kan identifiera individer genom incheckningsförfattare, tilldelningsfält och chattposter. Samla in på den nivå som mätetalet behöver, aggregera till team och tjänster och tillämpa integritetsreglerna i din jurisdiktion och organisation. Data på individnivå tenderar, när de väl har samlats in, att användas för rangordning, vilket förvanskar källan (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Källtäckning | Att räkna en tjänst som täckt efter att ett flöde kopplats in, även om det bär nästan inga händelser; att lämna svåra tjänster utanför omfattningen | Händelsevolym per täckt tjänst jämförd med dess kända aktivitet; granska omfattningslistan mot tjänstekatalogen |
| Tidsstämpelkomplettering | Att fylla obligatoriska tidsstämplar med stängningstiden för att klara valideringen | Fördelning av glapp mellan på varandra följande tillstånd; stickprova stängda objekt för att se om tiderna är rimliga |
| Efterhandsregistrering | Att föra in ändringar precis innanför tröskeln; att vidga tröskeln; att registrera alla ändringar genom en enda massuppdatering | Mönster för inmatningstid per timme; andel ändringar gjorda av automatisering jämfört med för hand; revision av massredigeringar |
| Dataaktualitet | Att visa tiden för senaste uppdatering i stället för tiden för den nyaste händelsen | Den nyaste händelsetiden visas på instrumentpanelen; larma när ett flöde inte levererar nya händelser |
| Avstämningsavvikelse | Att välja den period eller omfattning som stämmer av; att justera rapporteringslagret så att det matchar källan utan att hitta orsaken | Fastställ omfattning och period i förväg; registrera varje orsak som hittas och granska orsakerna kvartalsvis |
| Statusmodellens glidning | Att återanvända en befintlig status för en ny betydelse för att undvika att flaggas; att lägga till statusar utan att logga dem | Jämför arbetsflödeskonfigurationen med registret vid varje granskning; läs ett stickprov av objekt i ovanliga tillstånd |
| Enkätsvarsfrekvens | Att bara bjuda in människor som sannolikt svarar; att skicka påminnelser till nöjda användare; att erbjuda belöningar som snedvrider svaren | Respondentmixen jämförd med användarpopulationen; fördelning av svar per omgång; fria kommentarer som läses i granskningen |

En sund avläsning är en uppsättning tråkiga siffror: hög täckning, låg och fallande efterhandsregistrering, aktualitet inom sitt angivna löfte och en känd orsak varje gång avstämningsavvikelsen inte är noll. När en siffra rör sig kan någon säga om arbetet ändrades eller instrumentet.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Automatisk händelseinsamling | Objektiv, aktuell, liten insats när den väl är byggd | Täcker bara det som instrumenterats; går sönder i tysthet när verktyg ändras |
| Manuell inmatning och statusuppdateringar | Fångar sammanhang och omdöme; fungerar utan integration | Sen, inkonsekvent och öppen för manipulation |
| Ett centralt mätetalslager | En definition, ett ställe att testa och styra | Kräver finansiering och ägarskap; kan bli en flaskhals |
| Varje team behåller sina egna data | Passar lokalt arbete; snabbt att komma igång | Definitioner divergerar; sammanställningar är otillförlitliga |
| Råa händelser sparade långsiktigt | Definitioner kan ändras och historik kan räknas om | Lagrings- och integritetskostnad; mer att skydda |

Automatisera det som är observerbart, fråga människor om det som inte är det och behåll den råa posten. Investera först i källorna bakom de två eller tre mätetal som teamet faktiskt använder, inte i en dataplattform för varje tänkbar siffra.

## Frågor att diskutera med teamet

**1. Vilket system är sanningskällan för vårt viktigaste mätetal, och hur vet vi det?**
Be gruppen följa siffran från instrumentpanelen tillbaka till den första händelsen. Notera varje ställe där en person eller en transformation rör data. Facilitatorn bör leta efter steg som ingen kan förklara, eftersom det är där den första undersökningen bör börja.

**2. Vilka av våra tidsstämplar skrivs av ett system, och vilka skrivs in av en person?**
Lista klockorna som används, till exempel tid till svar, tid till lösning och cykeltid. Markera varje start och stopp som automatiskt eller manuellt. För de manuella, fråga hur lång tid efter händelsen inmatningen vanligtvis görs. Diskussionen visar ofta att det mest omdebatterade mätetalet vilar på den minst tillförlitliga tidsstämpeln.

**3. Vad betyder våra statusar, och menar alla team samma sak?**
Lägg arbetsflödet på en tavla och låt människor från olika team förklara varje tillstånd med egna ord. Jämför förklaringarna. Räkna tillstånd där klockan pausar och fråga vem som får använda dem och varför. Enas om en ändring för att ta bort tvetydighet och logga den med skälet.

**4. Hur skulle vi få veta om ett flöde tyst slutade fungera?**
Fråga när någon senast kontrollerade att datan på instrumentpanelen är aktuell. Diskutera vilken varning eller aktualitetsindikator som skulle fånga en stoppad koppling inom ett dygn. Facilitatorn bör driva på för en namngiven ägare och en konkret kontroll, inte en allmän föresats att vara försiktig.

**5. Vad samlar vi in som vi aldrig använder, och vad använder vi som vi inte samlar in väl?**
Lägg fältlistan och mätetalslistan sida vid sida. Markera fält som inte matar något beslut och mätetal som vilar på dåliga fält. Besluta om ett fält att sluta samla in och ett att förbättra det här kvartalet.

**6. Vilka svarar på våra enkäter, och vilka gör det inte?**
Jämför respondenterna med populationen av användare eller teammedlemmar. Titta på svarsfrekvenser per grupp och efter tid på dygnet eller veckan. Diskutera vad tystnaden kan betyda och hur tysta grupper kan nås utan press. Enas om hur svarsfrekvensen ska visas bredvid varje enkätresultat.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam genererar de flesta av de objektiva data: incheckningar, granskningar, byggen och driftsättningar. De har nytta av instrumentering som gör statusändringar till en bieffekt av arbetet, så att tavlan förblir ärlig utan extra möda. De bör hålla arbetsflödet litet och vara försiktiga med att använda aktivitet i versionshanteringen som mått på insats (se ämne 2.2, Ledtid, cykeltid och flödeseffektivitet).

### Service- och driftteam

Serviceteam är beroende av poster som skapas av människor under press, ofta under en incident. Klockreglerna, pauslägena och prioritetsfälten är där glidningen sker. Driftteam bör göra insamlingen av nyckeltider automatisk där det är möjligt, till exempel larmtid och kvitteringstid, granska användningen av pauslägen och hålla övervakningsdata åtskilda från ärendeposten så att var och en kan kontrollera den andra (se ämne 5.5, Mätetal för övervakning och larmkvalitet).

### Ledning och styrning

Ledare beslutar hur mycket som ska investeras i datagrunden, och de sätter de incitament som avgör om datan förblir ärlig. De bör fråga var en siffra kommer ifrån innan de frågar varför den rörde sig, finansiera pipelinens ägarskap som pågående arbete och förvänta sig ett aktualitetsdatum och en definition på varje rapport. Styrande organ bör behandla en dokumenterad ändring i en källa eller en definition som en normal händelse, inte ett misslyckande.

### Kunder och användare

Användare levererar de data som betyder mest om upplevelsen, vanligtvis genom att besvara enkäter, betygsätta interaktioner eller rapportera problem. De behöver veta vad som samlas in, varför och vad som kommer att förändras till följd av det. Korta enkäter och synlig uppföljning håller svarsfrekvensen frisk. Kundvända rapporter om servicenivå bör ange sina källor och definitioner (se ämne 5.2, SLI:er, SLO:er och felbudgetar).

## I praktiken: ett exempel från tjänstehantering

En medelstor nätbutik har ett plattformsteam, tre produktteam och en servicedesk. Alla siffror i det här exemplet är illustrativa.

Ledningen frågar varför ledtiden för ändring i månadsrapporten föll från en median på 9 dagar till 3 dagar på ett kvartal, medan produktteamen rapporterar ingen förändring i hur de arbetar. Chefen för plattformsutveckling misstänker instrumentet och ber om en källkarta över mätetalet.

Kartan visar att ledtiden startar när en ändringspost skapas i ITSM-verktyget och stoppar när dess status sätts till "genomförd". Två produktteam hade börjat skapa posten efter att arbetet var klart, så klockan startade sent. Ett stickprov på 40 poster visar att 12 skapades samma dag som driftsättningen. Efterhandsregistreringen, mätt som glappet mellan driftsättningshändelsen i pipelinen och inmatningen av statusen "genomförd", var 31 procent över den tröskel på 24 timmar som teamet hade satt.

Teamet gör tre ändringar. För det första flyttas klockans start till den första incheckningen som är kopplad till ändringen, hämtad från versionshanteringen, och stoppet flyttas till driftsättningshändelsen som skrivs av pipelinen. För det andra får ITSM-verktyget statusen från pipelinen, så "genomförd" skrivs inte längre in. För det tredje får instrumentpanelen en aktualitetsindikator och en avstämningskontroll av ändringsantal mellan pipelinen och ITSM-verktyget.

Under den nya definitionen är mediantiden för ledtid 7 dagar och 95:e percentilen 21 dagar, och efterhandsregistreringen faller till 4 procent. Ledningen läser först de 7 dagarna som ett sämre resultat. Plattformschefen förklarar att det gamla talet var en artefakt av sen postskapande. Beslutet, skrivet i beslutsloggen, är att räkna om de två föregående kvartalen från råa händelser och markera definitionsändringen i diagrammet. Manipulationsrisken som teamet fångade var subtil: ingen förfalskade en siffra, men sent skapande av poster gav en smickrande siffra. Avstämningsavvikelsen fungerar nu som skyddsräcke, och stickprovet av råa poster granskas varje kvartal.

## Agilitet, AI, automatisering och analys

### Agilitet

Bygg instrumentering i små steg tillsammans med funktionerna, så att varje release lägger till de händelser som behövs för att mäta den, och enas om händelsedefinitionerna med dem som ska läsa siffrorna. Ett praktiskt steg är att lägga till händelsen i definitionen av klart för en ändring. Varningen är att efterhandsinstrumentering efter lansering ger luckor i de tidiga data som ingen senare rättelse kan återvinna.

### AI

AI-system lägger till nya datakällor: prompter, svar, verktygsanrop, mänskliga redigeringar och åsidosättanden. Fånga vem eller vad som agerade, vilken modellversion som kördes och om en person ändrade resultatet, med förbehåll för integritets- och lagringsregler. Varningen är att loggning av prompter kan fånga personliga eller konfidentiella data, så besluta vad som ska lagras innan du börjar.

### Automatisering

Fånga händelser automatiskt i det ögonblick de inträffar, från sanningskällan, och testa pipelinen med kända indata. Automatisering är själv en källa: registrera körningar, fel, omförsök och återställningar. Varningen är tyst fel, där en trasig koppling ger platta, friskt utseende siffror, så övervaka dataaktualitet som ett mätetal.

### Analys

Stäm av minst en siffra mot en oberoende källa varje kvartal och publicera avvikelsen. Beslutet detta ger underlag för är om ett mätetal kan litas på tillräckligt för att användas. Varningen är att rena instrumentpaneler kan vila på svaga data, så visa datakompletteringen bredvid resultatet.

## Branschperspektiv

**Startup.** Data är tunna och förtroendet högt, vilket hjälper. Använd pipelinen och versionshanteringen som huvudkällor, eftersom de inte kräver extra möda, och håll statusmodellen till en handfull tillstånd. Skriv ned varje definition och dess källa på en enda sida och se över den när teamet fördubblas.

**Småföretag.** En person sköter ofta it på en hostad servicedesk. Använd verktygets rapporter, be leverantören om dess definitioner skriftligt och exportera rådata periodvis för att undvika inlåsning.

**Storföretag.** Många verktyg, många team och lager av integration skapar den största risken för definitionsglidning. Investera i en gemensam händelsemodell, ett centralt mätetalslager med namngivna ägare och automatiserade avstämnings- och aktualitetskontroller. Enas om ett litet vokabulär av statusar för hela företaget och låt team lägga till lokala tillstånd endast med en angiven mappning till det.

**Offentlig sektor.** Poster kan vara föremål för lagstiftning om gallring, revision, åtkomst och integritet, och upphandling kan låsa in verktyg och dataformat. Behandla dessa som designunderlag: för ett revisionsspår, dokumentera ursprunget från händelse till rapport och förhandla om rätt till dataexport i avtal. Rapporteringsskyldigheter gör dokumenterade definitioner nödvändiga (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaden för det här ämnet har tre delar. Den första är byggmöda: integrationer, ett mätetalslager och en uppstädning av statusmodellen. Den andra är driftmöda: en ägare för pipelinen, övervakning av flödena och en kvartalsvis avstämnings- och stickprovsrutin. Den tredje är kostnaden för integritets- och säkerhetskontroller för de data du behåller.

Avkastningen kommer från beslut som fattas på siffror som betyder det de ser ut att betyda. Dåliga data leder till felaktiga investeringar, argument om vems siffra som är rätt och omräknade resultat som skadar förtroendet. Beskriv nyttan genom mönster du kan mäta själv: tiden det tar att ta fram en månadsrapport före och efter, antalet avstämningstvister per kvartal samt efterhandsregistreringen och tidsstämpelkompletteringen över tid. Den totala ägandekostnaden domineras av människor, så räkna pipelineägarens timmar.

## Antimönster och fallgropar

- **Att bygga instrumentpanelen före källkartan.** Diagrammet ser färdigt ut medan dess betydelse är okänd. Kartlägg källa, klockor och ägare först.
- **Att lita på manuella statusuppdateringar för tidsmått.** Sen inmatning gör klockorna till fiktion. Automatisera övergångar från pipeline- och versionshanteringshändelser överallt där de finns.
- **Flera sanningskällor för ett faktum.** Tvister följer. Välj en och låt de andra läsa från den.
- **Tysta definitionsändringar.** Trendlinjen blir meningslös. Logga varje ändring med skälet och markera den i diagrammet.
- **Medelvärden av ofullständiga data.** Saknade tidsstämplar är inte slumpmässiga, eftersom de besvärliga objekten ofta är de som hoppas över. Redovisa tidsstämpelkompletteringen bredvid resultatet.
- **Att samla in allt ifall det skulle bli användbart.** Kostnad och integritetsrisk stiger utan att något beslut tjänas. Samla in det en namngiven fråga behöver.
- **Ingen aktualitetsindikator.** En inaktuell instrumentpanel ser likadan ut som en aktuell. Visa åldern på den nyaste händelsen i varje vy.
- **Data på individnivå utan syfte.** Det frestar till rangordning och skadar källan. Aggregera till team- och tjänstenivå och begränsa åtkomsten.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Källor och insamling | Siffror sammanställs för hand från exporter | Vissa verktyg matar en rapport automatiskt; andra gör det inte | Varje mätetal har en namngiven sanningskälla och automatisk insamling där en händelse finns | Täckning och komplettering mäts och följs över tid | Händelser delas över team och leverantörer via överenskomna gränssnitt, med avtal om export |
| Tids- och statusmodeller | Var och en registrerar och läser tid olika | Vissa team dokumenterar sitt arbetsflöde | En tidsstandard och ett gemensamt statusvokabulär med skrivna klockregler | Glidning och efterhandsregistrering övervakas, och ändringar loggas med skäl | Modeller revideras gemensamt med leverantörer och kunder när de slutar ge underlag för beslut |
| Pipelinekvalitet | Fel upptäcks när någon klagar | Enstaka manuella kontroller | Radantal, dubblettkontroller och en aktualitetsindikator på varje instrumentpanel | Avstämning schemalagd och orsaker granskade; pipelinen har en ägare | Pipelinens hälsa redovisas som en tjänst, med finansierad förbättring |
| Enkät- och integritetspraxis | Ad hoc-enkäter; ingen integritetsgranskning | Standardfrågor i vissa team | Korta regelbundna enkäter med svarsfrekvensen visad; data hålls på teamnivå | Respondentmixen granskas och agerar man på | Enkätresultat och integritetspraxis delas öppet med användare |

## Checklista

- [ ] Varje rapporterat mätetal har en namngiven sanningskälla och en namngiven källägare.
- [ ] Källkartan förvaras i mätetalsregistret.
- [ ] Varje tidsmått anger var dess klocka startar, stoppar och pausar.
- [ ] Tidsstämplar lagras i UTC i ett entydigt format, och serverklockor är synkroniserade.
- [ ] Statusändringar genereras av automatisering överallt där en händelse finns.
- [ ] Råa händelser sparas med händelsetid och inmatningstid, och rättelser är nya händelser.
- [ ] Statusmodellen är dokumenterad, och varje ändring loggas med sitt skäl.
- [ ] Varje instrumentpanel visar åldern på sina nyaste data.
- [ ] Antal stäms av mot källan enligt schema, och orsaker registreras.
- [ ] Ett stickprov av råa poster läses varje kvartal.
- [ ] Enkätsvarsfrekvens och respondentmix visas med varje enkätresultat.
- [ ] Personuppgifter minimeras och aggregeras till team- och tjänstenivå.

## AI-prompter

**Bygg en källkarta för ett mätetal.**

```text
I am documenting the data behind this metric: [metric name], defined as
[definition]. Our tools are [list of tools, for example tracker, ITSM tool,
pipeline, monitoring]. Draft a source map with these fields: the event that
starts the clock, the event that stops it, the system of record for each, who or
what creates the event (person or automation), likely failure modes, and checks
that would detect each failure. Do not invent tool features or benchmark values.
List your assumptions and the questions I should answer to complete the map.
```

**Granska en statusmodell efter tvetydighet.**

```text
Here is the workflow for [team or service]: [list of statuses and allowed
transitions, with a one-line meaning for each if known]. The clocks we compute
from it are [list clocks]. Identify statuses that are ambiguous, states where a
clock could stop or pause in a misleading way, and places where two teams might
read the same word differently. Suggest a smaller model that still supports the
clocks, and say what would be lost. Do not guess how our tool is configured. List
your assumptions.
```

**Utforma datakvalitetskontroller för ett flöde.**

```text
We load [data type, for example change records] from [source system] into
[destination] every [schedule]. Required fields are [list fields]. Propose a
practical set of checks for completeness, duplicates, freshness, and
reconciliation against the source, with a suggested alert and an owner role for
each. Keep the set small enough for a team of [team size] to maintain. Do not
invent thresholds; ask me for the ones you need. List your assumptions.
```

**Skriv ett utkast till en kort enkät och en plan för dess svarsfrekvens.**

```text
I want to measure [experience topic, for example effort to get a request
fulfilled] for [audience]. Draft [number] neutral questions, a plan for when and
how to send them, and how to report the response rate and the respondent mix. Flag
wording that could bias answers, and note privacy considerations given that the
data will be held in [tool or location]. Do not invent benchmark response rates.
List your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta vilket ämne som definierar mätetalet du instrumenterar och skyddsräcket som bör sitta bredvid.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett nytt eller redigerat mätetalsämne namnger sin datakälla och sina klockor.

## Viktigaste slutsatser

- Varje mätetal beror på en namngiven sanningskälla, så kartlägg källan innan du bygger diagrammet.
- Fånga händelser automatiskt i det ögonblick de inträffar och behåll de råa händelserna så att definitioner kan ändras utan att historiken går förlorad.
- Tid är också data: använd en standard, skriv klockreglerna och bevaka efterhandsregistrering.
- Håll statusmodellen liten, gemensam och dokumenterad, och logga varje ändring.
- Behandla pipelinen som en produkt med en ägare, tester, en aktualitetsindikator och schemalagd avstämning.
- Använd enkäter för det bara människor kan säga, visa svarsfrekvensen och håll personuppgifter på teamnivå.

## Referenser och vidare läsning

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Kleppmann, M., *Designing Data-Intensive Applications*, O'Reilly Media, 2017.
5. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
6. ISO/IEC 25012:2008, *Software engineering: Software product Quality Requirements and Evaluation (SQuaRE): Data quality model*, International Organization for Standardization.
7. ISO 8601, *Date and time: Representations for information interchange*, International Organization for Standardization.
8. Klyne, G., and Newman, C., *RFC 3339: Date and Time on the Internet: Timestamps*, Internet Engineering Task Force, 2002, https://www.rfc-editor.org/rfc/rfc3339
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
13. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
14. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
15. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
17. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
18. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
19. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
20. Wikipedia, [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
22. Wikipedia, [Selection bias](https://en.wikipedia.org/wiki/Selection_bias).
