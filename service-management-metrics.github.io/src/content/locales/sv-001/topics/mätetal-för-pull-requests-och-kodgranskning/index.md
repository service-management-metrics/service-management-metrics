# Mätetal för pull requests och kodgranskning

**Granskning är där färdigt arbete oftast väntar, så mät hur länge en ändring ligger innan någon tittar på den, hur stor den är och hur ofta den kommer tillbaka, och para varje hastighetstal med en kvalitetssignal så att snabbare aldrig betyder slarvigare.**

## Översikt och motiv

En [pull request](https://en.wikipedia.org/wiki/Pull_request) är ett förslag att slå ihop en uppsättning ändringar från en gren i ett [versionshanteringsarkiv](https://en.wikipedia.org/wiki/Version_control) med en annan, tillsammans med samtalet om huruvida den ska slås ihop. I många team är den den formella porten mellan "författaren tror att det fungerar" och "teamet är överens om att det kan levereras." Samtalet är en form av [kodgranskning](https://en.wikipedia.org/wiki/Code_review): en annan person än författaren läser ändringen, ställer frågor och godkänner den eller ber om revideringar. Vissa plattformar kallar samma sak en merge request; det här ämnet använder "pull request" för båda.

Granskning är värd att mäta av ett enkelt skäl. I flödessynen på leverans tillbringar ett arbetsobjekt det mesta av sitt liv med att vänta, och granskning är en av de väntor som helt ligger inom teamets kontroll. En delad flaskhals i plattformen eller ett externt beroende kräver att andra människor ändras. En pull request som väntar två dagar på en första titt kräver bara att teamets egna vanor ändras. Flödesmåtten i den här boken (se ämne 2.1, Flödesmått, och ämne 2.2, Ledtid, cykeltid och flödeseffektivitet) ger det allmänna vokabuläret. Det här ämnet zoomar in på ett steg i cykeln och ger det egna instrument.

Agila och ITIL-baserade synsätt möts här på ett användbart sätt. Ur ett agilt perspektiv är granskning en återkopplingsloop och en undervisningsmekanism. Den sprider kunskap om kodbasen, fångar fel tidigt och upprätthåller teamets arbetsöverenskommelser och definition av klart. Ur ett ITIL-perspektiv stöder samma aktivitet flera praktiker. I ITIL 4 omfattar praktiken programvaruutveckling och hantering hur programvara byggs och kontrolleras, ändringsmöjliggörande omfattar hur ändringar bedöms och auktoriseras och driftsättningshantering omfattar hur ändringar når produktionsmiljön. En kollegagranskad pull request är för många organisationer beviset på att en standardändring bedömdes före release. Att behandla granskning som en uppmätt, förbättringsbar aktivitet tjänar båda synsätten: det agila teamet vill ha snabbare återkoppling, och ITIL-praktiken vill ha tillförlitlig försäkran om att ändringar kontrollerats.

Risken att ha i sikte hela tiden är att granskningshastighet och granskningskvalitet lätt kan skiljas åt. Ett team kan halvera sin tid till första granskning genom att godkänna allt på stubben, och instrumentpanelen visar en triumf medan kodbasen blir sämre. [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller med ovanlig kraft för den här mätetalsfamiljen (se ämne 1.2, Goodharts lag och mätetalens psykologi), eftersom siffrorna är billiga att samla in, synliga för alla och trivialt lätta att flytta utan att ändra det de var avsedda att representera. Varje rekommendation nedan är skriven med det i åtanke.

**Författaren** öppnade pull requesten och en **granskare** bedömer den. En **granskningsrunda** är en loop av "författaren pushar, granskaren svarar." **Omarbete** är ändring som görs efter en granskningskommentar, eller efter sammanslagningen, för att rätta något den första versionen gjorde fel. **Kontinuerlig integration (CI)** är praktiken att ofta slå ihop arbete i en gemensam linje och kontrollera varje sammanslagning automatiskt; se [kontinuerlig integration](https://en.wikipedia.org/wiki/Continuous_integration).

Alla mätetal i det här ämnet beskriver team och arkiv. De rangordnar aldrig granskare eller författare. Antal granskningar på individnivå är lätta att ta fram och frestande att använda, och att göra det förvandlar en samarbetspraktik till en tävling (se ämne 9.1, Teamhälsa och utvecklarupplevelse).

## Nyckelprinciper

- **Väntan dominerar granskning.** I de flesta team är den största delen av granskningstiden att pull requesten ligger oläst, inte diskussionen när en granskare väl börjat. Mät väntan innan du mäter samtalet.
- **Små ändringar granskas snabbare och bättre.** Storlek är ett av de få grepp som förbättrar både hastighet och grundlighet samtidigt, eftersom en granskare kan hålla en liten ändring i huvudet.
- **Hastighet utan granskning är ingen förbättring.** Varje hastighetsmått i det här ämnet behöver en kvalitetsmotsvarighet, och paret läses tillsammans.
- **Granskning är en teamkapacitet, inte en personlig.** Belastningen bör spridas över teamet. Ett mått som visar koncentration pekar på ett designproblem i teamet, aldrig på en person att berömma eller lasta.
- **Fördelningar slår medelvärden.** Granskningstider har en lång svans av fastnade pull requests, så redovisa medianen och en hög percentil (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).
- **Definiera klockan och låt den vara.** Ange när klockan startar och stoppar, vilka händelser som pausar den och vilken automatiserad aktivitet som utesluts, och skriv det där datan finns (se ämne 1.5, Datakällor och instrumentering).
- **Granskningsmått tjänar teamet som äger arbetet.** De är ett underlag för teamets egen retrospektiv, inte ett styrkort för någon annan.

## Mätetalsdefinitioner

Klockorna nedan förutsätter att versionshanteringsplattformen registrerar händelsetiderna för öppnande, granskningsförfrågningar, kommentarer, godkännanden, pushar och sammanslagningar. Utkast, pull requests som öppnats av botar och pull requests som stängts utan sammanslagning utesluts om inte en rad säger annat. "Arbetstimmar" betyder teamets deklarerade arbetstid, så att en pull request som öppnas en fredagskväll inte ackumulerar en helg av väntan.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tid till första granskning | Väntan mellan att en pull request blir redo för granskning och det första substantiella mänskliga svaret | Klockan startar när pull requesten lämnar utkaststatus eller öppnas som redo, stoppar vid första granskningskommentar, ändringsbegäran eller godkännande av någon annan än författaren; bot- och författarkommentarer och rena etikettändringar utesluts. Redovisa medianen och 85:e percentilen i arbetstimmar | arbetstimmar | Händelsehistorik i versionshanteringsplattformen | Programvaruutveckling och hantering; ändringsmöjliggörande | Arbetsöverenskommelse om granskningsresponsivitet; flöde av pågående arbete | Veckovis |
| Granskningscykeltid | Total tid från redo för granskning till sammanslagning | Klockan startar när pull requesten är redo för granskning, stoppar vid sammanslagning; pull requests som stängts utan sammanslagning utesluts och räknas separat. Redovisa medianen och 85:e percentilen i arbetstimmar | arbetstimmar | Händelsehistorik i versionshanteringsplattformen | Driftsättningshantering; ändringsmöjliggörande | Cykeltid för granskningssteget på teamets tavla | Veckovis |
| Pull requests storlek | Mängden ändring i en pull request | Rader tillagda plus rader borttagna, exklusive genererade filer, låsfiler, medföljande kod och rena namnbyten, enligt arkivets ignoreringsregler. Redovisa medianen och 85:e percentilen per sammanslagen pull request | ändrade rader | Diffstatistik från versionshanteringsplattformen | Programvaruutveckling och hantering | Liten batchstorlek; skivning av berättelser | Veckovis |
| Granskningsrundor | Antal loopar av författarens push och granskarens svar före sammanslagning | Antal distinkta cykler av "ändringar begärda" eller kommentar-sedan-push per sammanslagen pull request; den första inlämningen är runda noll och misslyckade automatiska kontroller utesluts. Redovisa medianen och 85:e percentilen | antal | Gransknings- och pushhändelser i versionshanteringsplattformen | Ständig förbättring; programvaruutveckling och hantering | Omarbetningssignal i granskningssteget; definition av klart | Veckovis |
| Koncentration av granskningsbelastning | Hur ojämnt granskningsarbetet är fördelat över ett team | Andel av teamets slutförda granskningar som hanterats av de två mest upptagna granskarna över rullande 4 veckor; granskningar av ens egen pull request och botgranskningar utesluts. Redovisas för teamet, aldrig med namn | procent | Granskningshändelser i versionshanteringsplattformen, aggregerade till team | Ständig förbättring; kunskapshantering | Delat kodägande; kollektivt ägande | Månadsvis |
| Antal inaktuella pull requests | Pull requests som varit öppna längre än teamets överenskomna gräns | Pull requests som fortfarande är öppna och inte utkast vars ålder sedan redo för granskning överstiger teamets gräns, räknade vid ögonblicksbilden; utkast utesluts | antal | Lista över öppna pull requests i versionshanteringsplattformen | Ändringsmöjliggörande; ständig förbättring | Ålder på arbetsobjekt; WIP-gräns | Veckovis |
| Rättelsegrad efter sammanslagning | Andel sammanslagna pull requests som följs av en korrigerande ändring strax efter | Sammanslagna pull requests som inom 14 dagar följts av en rättelse, återställning eller snabbrättelse kopplad till samma ändring / sammanslagna pull requests under perioden; planerat uppföljningsarbete märkt som sådant utesluts | procent | Versionshanteringshistorik, länkade ärenden samt incident- eller ändringsposter | Ändringsmöjliggörande; incidenthantering | Inbyggd kvalitet; definition av klart | Månadsvis |

Tid till första granskning är det största greppet och det mått de flesta team bör börja med. Granskningscykeltid är dess utfallsmått och är en komponent av de längre ledtider som diskuteras i ämne 2.2. Fönstret på 14 dagar och gränsen för inaktuell är exempel; varje team väljer värden som passar dess releaserytm och skriver ned dem. Där siffrorna matar den bredare leveransbilden tar DORA-familjen (se ämne 2.8, DORA-mätetal) och måtten för misslyckade ändringar (se ämne 4.4, Misslyckade ändringar och omarbete) över.

## Rekommendationer

### Mät väntan före arbetet

**1. Börja med tid till första granskning.** Det är oftast det största bidraget till granskningstid och det billigaste att förbättra. Instrumentera det ur plattformens händelsehistorik så att ingen behöver mata in något. Redovisa medianen och en hög percentil, eftersom en median på tre timmar med en 95:e percentil på fyra dagar betyder att vissa ändringar glöms bort.

**2. Uteslut botar och utkast från klockan, och säg det.** Automatiska kontroller, botar för beroendeuppdateringar och formateringsverktyg skapar kommentarer inom sekunder, och att räkna dem får väntan att se utmärkt ut. Starta klockan när författaren markerar ändringen som redo, inte när grenen först pushas. Publicera reglerna bredvid diagrammet.

**3. Använd arbetstimmar och skriv ned teamets kalender.** En pull request som öppnas sent en fredag bör inte bära en helg av väntan. Ett team spritt över tidszoner behöver en regel för vems timmar som räknas, och ofta är det ärliga svaret att överlämningskostnaden över zoner är det som är värt att se. Ange valet och håll det stabilt.

### Forma arbetet så att det går att granska

**4. Håll pull requests små och behandla storlek som en teamvana.** Följ medianen och 85:e percentilen av storlek och titta på de stora som en uppsättning snarare än som enskilda misslyckanden. Team finner vanligen att stora ändringar kommer av några få orsaker: arbete som inte skurits tillräckligt fint, blandning av omstrukturering med nytt beteende eller att man väntat för länge med att slå ihop. Skiva arbetet så att varje pull request gör en sak, vilket också motsvarar principen om små batchar bakom [trunkbaserad utveckling](https://en.wikipedia.org/wiki/Trunk-based_development) och frekvent driftsättning.

**5. Sätt inte ett hårt storlekstak som mål.** En gräns som "högst 400 rader" inbjuder till att dela upp en ändring i konstgjorda bitar som var för sig är oläsliga eller som bryter bygget när de slås ihop ensamma. Använd storlek som samtalsstartare i retrospektiven och ge teamet tekniker för skivning, till exempel funktionsomkopplare, förberedande omstrukturering i en egen pull request och sammanslagning bakom en flagga.

**6. Gör granskningsförfrågan uttrycklig.** En pull request som inte namnger någon granskare väntar på en frivillig, och frivilliga är sällsynta. Enas om vem som tillfrågas, hur teamet underrättas och vad förväntningen på svar är, i arbetsöverenskommelsen. En delad granskningsrotation, eller en daglig granskningstid, minskar oftast väntan mer än någon verktygsinställning.

### Sprid belastningen och kunskapen

**7. Bevaka belastningskoncentration som en risk på teamnivå.** Om två personer hanterar de flesta granskningar begränsar deras tillgänglighet teamets flöde, och deras frånvaro stoppar det. Granska koncentrationsmåttet månadsvis och agera genom teamets utformning: rotera standardgranskaren, para nyare medlemmar med erfarna och skriv ned de delar av koden som bara en person kan granska. Publicera ingen resultattabell per person.

**8. Använd granskning för att dela kunskap och skydda det syftet.** Granskningens långsiktiga värde omfattar lärande, delat ägande och konsekvent stil, såväl som felupptäckt. [Parprogrammering](https://en.wikipedia.org/wiki/Pair_programming) och mobprogrammering flyttar en del av det utbytet tidigare i processen; där ett par redan har arbetat med en ändring är en lättare granskning rimlig. Gör valet till ett teambeslut, skrivet i arbetsöverenskommelsen, så att "parat, alltså granskat lätt" är en synlig regel och inte en ursäkt.

### Styr själva granskningen

**9. Låt automatisering hantera det den gör bra.** Formatering, lintning och grundläggande kontroller hör hemma i pipelinen, så att mänsklig uppmärksamhet går till design, korrekthet och risk. [Statisk programanalys](https://en.wikipedia.org/wiki/Static_program_analysis) och automatiska tester minskar antalet triviala granskningsrundor. De återstående rundorna säger då mer om designsamtalet och mindre om stiluppfattningar.

**10. Läs granskningsrundor som en signal om tydlighet, inte som ett felantal.** Många rundor kan betyda att kravet var oklart, att författaren saknade sammanhang, att granskaren bad om smakändringar eller att ändringen var stor. Noll rundor på varje pull request kan betyda utmärkt arbete eller att ingen tittade. Stickprova en handfull pull requests med ovanligt många eller ovanligt få rundor och läs dem tillsammans som ett team.

### Para hastighet med kvalitet och håll tiden synlig

**11. Visa alltid en kvalitetsmotsvarighet bredvid granskningshastighet.** Rättelsegraden efter sammanslagning, incidenter kopplade till nyliga ändringar och andelen fel som hittas efter release är de naturliga partnerna (se ämne 4.4, Misslyckade ändringar och omarbete). Om granskningstiden förbättras medan rättelsegraden försämras har teamet bytt försäkran mot hastighet, och åtgärden är ett samtal snarare än ett mål. Visa båda i samma diagram.

**12. Koppla granskning till flödesbilden och till oplanerat arbete.** En snabbare granskning hjälper bara om nästa steg inte bara köar arbetet (se ämne 2.3, Pågående arbete och köteori). Brådskande granskningsförfrågningar som avbryter planerat arbete har en egen kostnad (se ämne 2.9, Driftarbete och oplanerat arbete).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Tid till första granskning | Att posta ett snabbt "ser bra ut" eller en emoji som första svar; att tilldela en bot eller en vänlig granskare; att markera en pull request redo först efter att någon i förväg gått med på att titta | Rättelsegrad efter sammanslagning; stickprov av godkännanden utan kommentarer; kräv i arbetsöverenskommelsen att första svar ska vara substantiella |
| Granskningscykeltid | Att slå ihop utan att vänta på granskning; att dela upp en ändring i små bitar för att passera snabbare; att stänga och öppna en pull request på nytt för att nollställa klockan | Antal stängda-och-återöppnade pull requests; granskningsrundor; rättelsegrad efter sammanslagning; regler för skyddade grenar som kräver godkännande |
| Pull requests storlek | Att utesluta filer ur räkningen; att dela upp en enda ändring i bitar som inte kan förstås var för sig; att vaddera storleken med genererad kod | Granska ignoreringsreglerna varje kvartal; kontrollera att uppdelade bitar bygger och klarar tester ensamma; läs ett stickprov av de minsta och största |
| Granskningsrundor | Att godkänna vid första genomgången för att hålla antalet lågt; att flytta diskussion till chatt så att den inte lämnar spår; författare som pushar många rättelser i en enda incheckning för att dölja rundor | Rättelsegrad efter sammanslagning; stickprov av pull requests med noll rundor; håll diskussionen i pull requesten |
| Koncentration av granskningsbelastning | Att dela upp granskningar i många små godkännanden för att sprida antalet; att tilldela granskningar till dem med ledig tid men utan kunskap | Granska granskarens kunskap för riskfyllda områden; bevaka rättelsegrad efter sammanslagning per område; håll måttet på teamnivå |
| Antal inaktuella pull requests | Att stänga inaktuella pull requests utan sammanslagning; att konvertera dem till utkast för att dölja dem; att höja gränsen för inaktuell | Antal pull requests som stängts utan sammanslagning; antal långlivade utkast; se över gränsen med teamet varje kvartal |
| Rättelsegrad efter sammanslagning | Att registrera rättelser under ett nytt arbetsobjekt utan länk; att märka korrigerande arbete som planerad uppföljning; att undvika måttet genom att fördröja rättelsen förbi fönstret | Jämför med incident- och ändringsmisslyckandedata; stickprov av uppföljningsobjekt; revision av de etiketter som används |

En sund avläsning är en lugn sådan. Tid till första granskning är kort och svansen är också kort, så ingen pull request väntar i dagar. Storleken ligger i ett intervall teamet tycker är lätt att läsa, med några få stora ändringar som teamet kan förklara. Granskningsrundor är låga men inte noll, belastningskoncentrationen är måttlig, antalet inaktuella är litet och rättelsegraden efter sammanslagning är stabil. När en siffra förbättras kraftigt bör någon kontrollera att dess parade skyddsräcke inte rörde sig åt fel håll.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Snabb granskning med strikta svarsförväntningar | Korta återkopplingsloopar; mindre kontextförlust för författaren; lägre pågående arbete | Press att godkänna snabbt; avbryter fokuserat arbete |
| Långsam, grundlig granskning | Noggrann läsning av design och risk; starkare kunskapsöverföring | Längre cykeltid; större batchar byggs upp; författare går vidare och förlorar sammanhang |
| Små pull requests | Lättare att läsa och återställa; jämnare flöde | Mer omkostnad per ändring; kan splittra en funktion i förvirrande steg |
| Stora pull requests | Färre överlämningar; hela funktionen synlig på en gång | Granskningar blir ytliga; svårare att återställa; långa väntor |
| Krav på godkännande från en namngiven ägare | Tydligt ansvar för riskfyllda områden; stöder ändringsauktorisering | Skapar en flaskhals och en enskild felpunkt |
| Automatiska kontroller före mänsklig granskning | Frigör människor för design och risk; konsekvent | Kan skapa falsk trygghet; kräver underhåll |

Ingen enskild policy vinner. Syftet är att korta väntan och samtidigt bevara granskningen, och den vanliga vägen är mindre ändringar, tydliga granskningsförväntningar, stark automatisering för rutinkontroller och en teamöverenskommelse om hur en bra granskning ser ut. Granskningsmått är mest användbara som frågor för en retrospektiv och minst användbara som mål.

## Frågor att diskutera med teamet

**1. Var tillbringar en pull request det mesta av sitt liv, i väntan eller i granskning?**
Be teamet gissa innan det tittar på data och visa sedan fördelningen mellan tid till första granskning och återstående tid till sammanslagning. De flesta grupper överraskas av hur mycket som är väntan. Facilitatorn bör notera vilka gissningar som var fel och fråga vad varje felgissning säger om hur teamet upplever granskning. Avsluta med en ändring som angriper den största väntan.

**2. Hur ser en bra granskning ut i det här teamet, och hur skulle en utomstående kunna se det?**
Lista de beteenden teamet värdesätter, till exempel att fråga om design, kontrollera tester och förklara skälet till en begäran. Fråga sedan vilka av dem som lämnar ett synligt spår i pull requesten. Diskutera hur man skiljer ett substantiellt första svar från ett symboliskt utan att övervaka individer. Enas om en kort skriven beskrivning att lägga i arbetsöverenskommelsen.

**3. Hur stort är för stort för oss, och vad gör vi när arbetet verkligen är stort?**
Titta på storleksfördelningen och välj några av de största pull requesterna. Fråga varför var och en var stor och om den kunde ha skurits. Diskutera tekniker som funktionsomkopplare, förberedande omstrukturering och sammanslagning bakom en flagga. Facilitatorn bör motstå att sätta en numerisk gräns och i stället enas om en vana teamet prövar i en månad.

**4. Vem granskar vår mest riskfyllda kod, och vad händer när hen är borta?**
Kartlägg kodens områden mot de människor som kan granska dem väl. Titta på belastningskoncentrationen och på områden med en enda kvalificerad granskare. Diskutera hur man odlar en andra granskare i varje, genom parning eller roterande tilldelningar. Håll samtalet om teamets motståndskraft, inte om någons belastningsrangordning.

**5. Om vår granskningshastighet fördubblades i morgon, vad skulle vi vilja vara sant om kvaliteten?**
Be gruppen nämna de kvalitetssignaler de skulle bevaka, till exempel rättelser efter sammanslagning, incidenter kopplade till nyliga ändringar eller antalet återställningar. Kontrollera om de signalerna för närvarande syns bredvid hastighetsdiagrammet. Diskutera vad som skulle vara ett tidigt tecken på att hastighet köpts på bekostnad av granskning. Enas om vilken motsvarighet som ska visas på instrumentpanelen.

**6. Vilka granskningssiffror skulle vi frestas att förbättra på ett sätt som inte hjälper?**
Gå igenom varje mätetal och fråga hur en person under press kunde få det att se bättre ut utan att göra något bättre. Jämför svaren med manipulationstabellen ovan och lägg till teamets egna idéer. Syftet är att namnge risken innan den inträffar. Enas om vilket skyddsräcke som ska granskas vid sidan av varje mätetal.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam äger granskningsprocessen och bör äga dess mätetal. De har mest nytta av att korta väntan med enkla överenskommelser: en daglig granskningstid, en tydlig begäransprocess och små ändringar. De bör använda siffrorna i retrospektiv, hålla pågående arbete lågt och motstå frestelsen att optimera ett enda diagram. Granskning är också där nyare medlemmar lär sig kodbasen, så skydda det syftet.

### Service- och driftteam

Driftteam möter granskning där infrastrukturkod, konfiguration och automatisering av driftinstruktioner ändras via pull requests. För dem är granskning ofta en del av hur en standardändring godkänns och belägges (se ämne 4.3, Mätetal för ändringsmöjliggörande). De bör enas om vilka ändringar som behöver granskas av en andra person, hur snabbt brådskande rättelser granskas och hur nödändringar granskas i efterhand, så att en forcerad rättelse ändå undersöks. En tunn granskning av en riskfylld ändring visar sig senare som en incident.

### Ledning och styrning

Ledare bör behandla granskningsmått som signaler om teamhälsa och flöde, inte som produktivitetsbetyg. De bör be om det parade kvalitetsmåttet närhelst ett hastighetstal redovisas, stödja den tid som noggrann granskning tar och undvika att jämföra team på rå granskningstid, eftersom arkiv och risker skiljer sig. Styrande organ kan använda granskningsbelägg som en del av ändringsförsäkran, förutsatt att de accepterar att en dokumenterad, stickprovad granskningsprocess är starkare än ett antal godkännanden.

### Kunder och användare

Kunder ser inte pull requests, men de känner resultaten: hur snart en rättelse anländer och hur ofta en release för med sig ett nytt fel. Korta granskningsväntor hjälper brådskande rättelser nå dem snabbare, och eftertänksam granskning hjälper till att hålla fel borta från dem. Där en tjänst har en publicerad release- eller felhistorik har kunder nytta av att teamet visar färre återställningar och färre upprepade rättelser över tid.

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på ett regionalt sjukhus driver en webbtjänst för patientbokning, byggd av ett produktteam på sju och driftad med en liten driftsäkerhetsgrupp. Alla siffror i det här exemplet är illustrativa.

Vid en kvartalsgranskning finner teamet att dess granskningscykeltid har en median på 26 arbetstimmar och en 85:e percentil på 71 arbetstimmar (illustrativt). En uppdelning av cykeln visar att mediantiden till första granskning är 19 arbetstimmar, så det mesta av fördröjningen är väntan. Pull requests storlek har en median på 180 rader och en 85:e percentil på 900 rader (illustrativt), och de två mest upptagna granskarna hanterar 68 procent av granskningarna (illustrativt). Rättelsegraden efter sammanslagning ligger på 9 procent (illustrativt).

Teamet gör tre överenskommelser. De sätter en daglig granskningstid på 30 minuter, skriver förväntan om ett första svar inom en arbetsdag i sin arbetsöverenskommelse och roterar en "granska först"-plikt varje vecka. De antar också en skivningsvana för stort arbete, med funktionsomkopplare så att delfunktioner kan slås ihop säkert. De sätter ingen storleksgräns och inget mål för tid till första granskning.

Efter två månader faller mediantiden till första granskning till 6 arbetstimmar och 85:e percentilen av granskningscykeltid faller till 34 arbetstimmar (illustrativt). Belastningskoncentrationen sjunker till 52 procent (illustrativt), och rättelsegraden efter sammanslagning håller sig på 9 procent.

Teamet fångar sedan en manipulationsrisk. Ett stickprov av godkännanden visar att ungefär en tredjedel av de första svaren anländer inom minuter och bara lyder "LGTM" på ändringar som rör logiken för bokningspåminnelser. Hastighetsvinsten var delvis verklig och delvis en gummistämpel. Rättelsegraden efter sammanslagning hade ännu inte rört sig eftersom den berörda koden körs i en månadscykel. Teamet ändrar arbetsöverenskommelsen så att ett första svar måste innehålla antingen en fråga, en kommentar om en specifik del av ändringen eller en uttrycklig notering om vad som kontrollerats, och lägger till den stickprovade andelen godkännanden utan kommentar i sitt granskningsdiagram. De enas också om att ändringar av patientvänd påminnelselogik behöver två granskare, varav en kommer från driftgruppen. Beslutet, med skälen, går in i teamets beslutslogg.

## Agilitet, AI, automatisering och analys

### Agilitet

Snabba, små granskningar stöder kontinuerlig leverans och ett hållbart tempo. En praktisk vana är att enas om en teamnorm för tid till första granskning och att prata om inaktuella pull requests vid den regelbundna teamgranskningen. Varningen är att granskningshastighet som behandlas som ett mål leder till gummistämplande, så para den med rättelser efter sammanslagning.

### AI

AI-genererade ändringar kan höja antalet och storleken på pull requests, och AI-granskningsverktyg kan snabba på den första titten. Para tid till första granskning med rättelsegraden efter sammanslagning för AI-stödda ändringar och redovisa granskningsbelastning per granskarroll, inte per person. Varningen är att en granskningskommentar från en bot kan räknas som en granskning, så räkna mänsklig granskning separat.

### Automatisering

Hämta granskningshändelser från kodplattformen automatiskt och kör automatiska kontroller före mänsklig granskning så att människor lägger tid på omdöme. Mät själva kontrollerna på falsklarm och på fel som undkommer dem. Varningen är att tung automatisering kan göra mänsklig granskning ytlig, eftersom människor antar att verktygen fångade allt.

### Analys

Visa fördelningar av storlek, tid till första granskning och granskningsrundor per team, aldrig per individ. Beslutet detta ger underlag för är var granskningskapacitet eller ändringsstorlek behöver uppmärksamhet. Varningen är att dessa siffror beskriver granskningssystemet, och varje användning som rangordnar människor kommer att driva dem mot mindre, säkrare, mindre användbara ändringar.

## Branschperspektiv

**Startup.** Ett litet team kan granska på minuter eftersom alla kan koden, och den främsta risken är att hoppa över granskning när tiden är knapp. Håll mätetalen få: tid till första granskning och storlek räcker. Etablera vanan med små ändringar tidigt, eftersom den är mycket svårare att införa när kodbasen och teamet växer.

**Småföretag.** Ofta underhåller en eller två utvecklare, eller en extern leverantör, programvaran. Granskning kan ske av en enda kollega eller av leverantörens egen personal. Fråga leverantörer hur de granskar och om pull requestdata kan delas, och för en enkel förteckning över vilka ändringar som granskats av vem, eftersom granskning är den främsta kontrollen mot misstag i ett litet team.

**Storföretag.** Många team, arkiv och godkännanderegler skapar stor variation. Standardisera definitionerna av klockorna och undantagen så att plattformsdata är jämförbara, men rangordna inte team efter rå granskningstid, eftersom risk och kodbas skiljer sig. Bevaka granskningskrav som införts för revision och som lägger till väntan utan att lägga till granskning, och leta efter möjligheter att ersätta manuella godkännanden med automatiska kontroller och stickprovsgranskning.

**Offentlig sektor.** Åtskillnad av uppgifter, revisionsspår och upphandlingsregler kräver ofta oberoende godkännande för ändringar. Behandla de reglerna som designunderlag: registrera vem som godkände vad och när, och mät den väntan de skapar. Där leverantörer skriver koden, ange granskningsbelägg och dataåtkomst i avtalet (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Motivet är att korta den del av leveransen som både är långsam och styrbar, samtidigt som kollegagranskningens fördelar behålls: färre fel, delad kunskap och ett revisionsspår. Väntande pull requests håller tillbaka färdigt arbete från användarna, ökar kostnaden för kontextbyte för författare och gör sammanslagningskonflikter mer sannolika allteftersom grenar åldras. Att minska väntan betalar sig därför genom snabbare leverans, mindre omarbete och mindre frustration.

Kostnaden för att samla in de här mätetalen är låg när versionshanteringsplattformen tillhandahåller händelsehistorik och ett API. De främsta kostnaderna är tiden för att definiera klockorna och undantagen, för att bygga eller konfigurera rapporten och för att regelbundet granska siffrorna. Den större kostnaden är beteendemässig: tiden människor ger åt att granska snabbt, som konkurrerar med annat arbete. Den tiden är den verkliga investeringen, och den bör budgeteras snarare än behandlas som gratis.

Avkastningen visar sig som kortare granskningscykeltid, färre inaktuella pull requests och en stabil eller fallande rättelsegrad efter sammanslagning. Undvik att på förhand hävda en viss procentuell förbättring, eftersom resultaten beror på utgångsläge och team. Ett trovärdigt case jämför teamets egna fördelningar före och efter, tillsammans med dess kvalitetsmotsvarighet, snarare än att citera siffror från andra organisationer. Boken *Accelerate* från 2018 redovisar forskning som kopplar tekniska och kulturella praktiker till leveransprestation och är en rimlig källa för det allmänna argumentet, men siffrorna för ditt team kommer från din egen data.

## Antimönster och fallgropar

- **Att rangordna granskare eller författare.** Individuella resultattabeller över slutförda granskningar eller ändrade rader förstör samarbetet. Redovisa på teamnivå och använd siffrorna för att justera teamets vanor.
- **Att sätta mål för tid till första granskning utan kvalitetsmotsvarighet.** Resultatet är gummistämpeln. Visa rättelsegraden efter sammanslagning och ett stickprov av godkännanden utan kommentarer bredvid varje hastighetsdiagram.
- **Att sätta en hård storleksgräns.** Team delar upp arbete på konstgjort sätt för att följa den. Använd storlek som samtal och lär ut skivningstekniker i stället.
- **Att behandla noll kommentarer som framgång.** Ett ogranskat godkännande kan spegla förtroende eller ouppmärksamhet. Stickprova sådana pull requests och läs dem tillsammans.
- **Att räkna botaktivitet som granskning.** Automatiska kommentarer får väntan att se kort ut. Uteslut botar ur klockan och ur belastningsmåtten.
- **Att ignorera tidszoner och kalendrar.** Rå klocktid får helg- och regionsöverskridande väntor att se ut som långsam granskning. Använd arbetstimmar och namnge kalendern.
- **Att låta listan över inaktuella växa.** Gamla pull requests samlar sammanslagningskonflikter och förlorar sammanhang. Granska listan veckovis och antingen slå ihop, omarbeta eller stäng varje objekt med ett skäl.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Definition och klockor | Granskningstid gissas eller redovisas på känn | Vissa team exporterar tider från plattformen med egna regler | En skriven definition av varje klocka, med undantag för botar, utkast och kalendrar | Definitioner granskas i en rytm; ändringar loggas med skäl | Definitioner samordnade över team och leverantörer och reviderade när de slutar ge underlag för beslut |
| Granskningspraxis | Granskningar sker när någon märker det | Informella normer i vissa team | Skriven arbetsöverenskommelse om förfrågningar, svarsförväntningar och vad en granskning omfattar | Normer justeras utifrån data; kunskapsdelning och riskområden följs | Granskningspraxis samordnas över team och leverantörer, med automatisering som hanterar rutinkontroller |
| Kvalitetsmotsvarighet | Ingen koppling mellan granskning och fel | Enstaka titt på rättelser efter sammanslagning | Rättelsegrad efter sammanslagning visas bredvid granskningshastighet | Skyddsräcken granskas regelbundet; stickprovade godkännanden läses | Granskningsbelägg kopplas till ändringsförsäkran och incidentlärande över tjänster |
| Användning i förbättring | Siffror oanvända | Visas vid vissa retrospektiv | Granskas av det ägande teamet i en fast rytm | Luckor leder till planerat, resurssatt förbättringsarbete | Förbättringsidéer flödar från team till delad praxis och tillbaka |

## Checklista

- [ ] Klockorna för tid till första granskning och granskningscykeltid är nedskrivna, med start, stopp och undantag.
- [ ] Botar, utkast och pull requests som stängts utan sammanslagning utesluts eller räknas separat, och reglerna är synliga.
- [ ] Tider redovisas som medianen och en hög percentil i arbetstimmar.
- [ ] Pull requests storlek mäts med en överenskommen ignoreringslista för genererade och medföljande filer.
- [ ] Teamet har en skriven överenskommelse om hur granskningar begärs och hur snart ett första svar förväntas.
- [ ] Koncentration av granskningsbelastning redovisas endast på teamnivå.
- [ ] En rättelsegrad efter sammanslagning eller en annan kvalitetsmotsvarighet visas i samma diagram som granskningshastighet.
- [ ] Ett stickprov av godkännanden utan kommentarer och mycket snabba godkännanden läses varje månad.
- [ ] Listan över inaktuella pull requests granskas veckovis.
- [ ] Granskningsdata används i retrospektiv och inte i individuella utvärderingar.
- [ ] Kodområden med en enda kvalificerad granskare är listade och har en plan.

## AI-prompter

**Skriv utkast till klockdefinitioner för granskningsmått.**

```text
I want to define review metrics for [team or repository]. Our platform is
[version control platform] and our workflow is [describe: draft pull requests,
required approvals, merge rules, bots in use]. Draft precise definitions for time
to first review and review cycle time, stating the event that starts and stops
each clock, what is excluded (bots, drafts, closed unmerged), how working hours
are handled for [time zones and working calendar], and which percentiles to
report. Do not invent benchmark values or tool features. List your assumptions and
the questions I should answer to finish the definitions.
```

**Analysera en export av granskningsdata.**

```text
Here is an anonymized export of merged pull requests for [team] over [period],
with columns [list columns, for example ready time, first review time, merge time,
lines changed, review rounds, linked fix flag]: [paste data or summary]. Compute
the median and 85th percentile for each time measure and for size, split the
review cycle into waiting and reviewing, and point out patterns that deserve a
conversation. Do not rank individuals, and do not compare with outside
benchmarks. List your assumptions and any data quality problems you notice.
```

**Hitta manipulationsrisker i våra granskningsmått.**

```text
Our team reports these review metrics: [list metrics and how each is calculated].
The pressures on us are [for example a release deadline, a leadership target, a
supplier contract]. For each metric, describe plausible ways it could be improved
without improving review, the early signs of each, and a paired guardrail metric
or practice that would catch it. Do not invent statistics. List your assumptions
and tell me what you would need to know to rank the risks.
```

**Förbered en retrospektiv om granskningsflödet.**

```text
Prepare a 45-minute retrospective agenda for [team] on review flow. Inputs: time
to first review [value], review cycle time [value], median size [value], load
concentration [value], and post-merge fix rate [value], all labeled with their
definitions. Suggest questions that surface causes, one small experiment the team
could run for [duration], and the quality signal to watch during the experiment.
Do not invent causes or targets. List your assumptions and the data I should bring.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta ämnet som definierar ett relaterat flödes- eller kvalitetsmätetal och skyddsräcket som bör sitta bredvid ett granskningsmätetal.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ändringar i det här ämnet håller mallen, manipulationstabellen och korsreferenserna konsekventa.

## Viktigaste slutsatser

- Det mesta av granskningsfördröjningen är väntan, så mät tid till första granskning och granskningscykeltid som fördelningar i arbetstimmar.
- Mindre pull requests granskas snabbare och noggrannare; lär ut skivning i stället för att införa ett storlekstak.
- Para varje hastighetsmått med en kvalitetsmotsvarighet, till exempel rättelsegraden efter sammanslagning, och läs de två tillsammans.
- Behandla granskningsbelastning som en teamkapacitet och redovisa koncentration på teamnivå, aldrig som en rangordning av människor.
- Granskningsmått är frågor för en retrospektiv, och de tjänar teamet som äger arbetet.

## Referenser och vidare läsning

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
3. Google, *Code Review Developer Guide*, Google Engineering Practices documentation, https://google.github.io/eng-practices/review/
4. Bacchelli, A., and Bird, C., "Expectations, Outcomes, and Challenges of Modern Code Review," *Proceedings of the 35th International Conference on Software Engineering (ICSE)*, 2013.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Schwaber, K., and Sutherland, J., *The Scrum Guide*, Scrum.org and Scrum Inc., 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
9. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
10. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
13. Wikipedia, [Trunk-based development](https://en.wikipedia.org/wiki/Trunk-based_development).
14. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
15. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
