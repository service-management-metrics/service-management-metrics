# Pågående arbete och köteori

**Ett team som är fullt upptaget är ett team vars arbete väntar, så mät hur mycket arbete som pågår, hur länge det köar och hur nära kapacitetsgränsen teamet kör, och använd köernas aritmetik för att sätta gränser innan fördröjningarna kommer.**

## Översikt och motiv

Varje serviceteam har en kö, oavsett om det använder ordet. Incidenter väntar på triage, förfrågningar väntar på godkännande, ändringar väntar på en granskningstid och backlogobjekt väntar på att någon ska dra dem. Det mesta av den förflutna tiden i de här systemen går åt till att vänta, inte arbeta. Måtten i det här ämnet förklarar varför väntan växer, hur man ser den tidigt och vad ett team kan göra åt den.

Den centrala storheten är [pågående arbete](https://en.wikipedia.org/wiki/Work_in_process) (WIP), antalet objekt som har påbörjats och ännu inte slutförts. Agila team som styr flöde gör WIP synligt på en tavla och sätter tak för det med en WIP-gräns. Servicedrift enligt ITIL räknar öppna incidenter, förfrågningar och ändringar och kallar samlingen en kö eller en backlog av poster. De två synsätten beskriver samma sak: objekt inuti ett system som ännu inte har levererat dem. Det här ämnet använder "pågående arbete" för båda och anger gränsen varje gång (vilka statusar som räknas som "pågår" och vilka som inte gör det), eftersom den gränsen avgör varje siffra som följer.

Matematiken kommer från [köteorin](https://en.wikipedia.org/wiki/Queueing_theory), läran om väntköer. Dess mest användbara resultat för ett serviceteam är [Littles lag](https://en.wikipedia.org/wiki/Little%27s_law), bevisad av John Little 1961. För ett stabilt system är det genomsnittliga antalet objekt i systemet lika med den genomsnittliga ankomsttakten multiplicerad med den genomsnittliga tid ett objekt tillbringar i systemet. I leveranstermer är genomsnittligt WIP lika med genomsnittligt genomflöde multiplicerat med genomsnittlig cykeltid. Lagen gäller oavsett i vilken ordning objekten betjänas, vilket gör den till en billig rimlighetskontroll av vilken uppsättning flödesmått som helst (se ämne 2.1, Flödesmått, och ämne 2.2, Ledtid, cykeltid och flödeseffektivitet).

Det andra resultatet är obekvämare. När en delad resurs närmar sig full användning stiger väntetiden snabbare och snabbare. En närliggande approximation, [Kingmans formel](https://en.wikipedia.org/wiki/Kingman%27s_formula), visar att kofördröjningen växer med utnyttjandegraden i proportion till kvoten mellan utnyttjandegraden och den återstående lediga andelen, och också växer med variabiliteten i ankomster och betjäningstider. Support- och driftarbete är variabelt till sin natur, eftersom incidenter kommer i skurar och insatsen per objekt varierar kraftigt. Ett team som planerar att vara 100 procent upptaget har därför planerat för långa väntetider, och den första större incidenten förvandlar långa väntetider till en backlog som tar veckor att arbeta av.

Termer som används i det här ämnet:

- **Ankomsttakt** är antalet objekt som kommer in i systemet per tidsenhet.
- **Genomflöde** (eller avgångstakt) är antalet objekt som lämnar systemet som slutförda, per tidsenhet.
- **Cykeltid** är den förflutna tiden från det ögonblick ett objekt går in över systemgränsen till det ögonblick det lämnar den. Det här ämnet använder samma klocka som i ämne 2.2.
- **Kötid** (queue time) är den del av den förflutna tiden under vilken ett objekt väntar och ingen arbetar med det.
- **Utnyttjandegrad** är den andel av tillgänglig kapacitet som används. För ett team uttrycks kapacitet i arbetstimmar eller i ett antal objekt som kan hanteras parallellt. Utnyttjandegrad är en egenskap hos ett team eller en resurspool, aldrig hos en individ.
- **WIP-gräns** är ett överenskommet maximalt antal objekt i ett steg eller i hela systemet. Ett nytt objekt påbörjas inte när gränsen är nådd.
- En **flaskhals** är det steg som har minst kapacitet i förhållande till efterfrågan. Den sätter takten för hela kedjan, en poäng som utvecklas av [begränsningsteorin](https://en.wikipedia.org/wiki/Theory_of_constraints) och dess idé om [flaskhalsen](https://en.wikipedia.org/wiki/Bottleneck_(production)).

Agila och ITIL-baserade synsätt möts här: ITIL 4 (2019) behandlar kapacitets- och prestandahantering, incidenthantering och hantering av serviceförfrågningar som praktiker som beror på att kapaciteten matchas mot efterfrågan, och agila metoder uttrycker samma idé som att begränsa pågående arbete och slutföra före start. [Lean programvaruutveckling](https://en.wikipedia.org/wiki/Lean_software_development) behandlar oavslutat arbete som lager med bärkostnad och risk.

## Nyckelprinciper

- **Väntan dominerar den förflutna tiden.** I de flesta tjänste- och leveranssystem väntar objekt långt längre än någon arbetar med dem, så att minska väntan är ett större grepp än att arbeta snabbare.
- **Littles lag länkar de tre flödestalen.** Genomsnittligt WIP, genomflöde och cykeltid kan inte sättas oberoende av varandra. Om du vill ha kortare cykeltid vid samma genomflöde måste du sänka WIP.
- **Fördröjningen växer brant nära full utnyttjandegrad.** Slack är priset för responsivitet. Ett team utan ledig kapacitet kan inte absorbera en skur eller ett brådskande objekt utan att göra allt annat sent.
- **Variabilitet förstärker köer.** Ojämna ankomster och ojämna objektstorlekar förlänger köer även när den genomsnittliga belastningen ser acceptabel ut. Minska variabiliteten där du kan och buffra den där du inte kan.
- **Begränsa WIP för att slutföra arbete, inte för att se upptagen ut.** En WIP-gräns är en utlösare för ett samtal om blockerat arbete och kapacitet, inte en efterlevnadsregel.
- **Mät på systemnivå.** WIP, kölängd och utnyttjandegrad beskriver team och tjänster, aldrig människorna i dem.
- **Redovisa fördelningar, inte medelvärden.** Kötider har långa svansar, så visa medianen och en hög percentil som den 85:e eller 95:e (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

## Mätetalsdefinitioner

Sju mått täcker ämnet. Vart och ett definieras för en namngiven gräns som teamet skriver i sitt mätetalsregister (se ämne 1.4, Styrning och ägarskap av mätetal).

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pågående arbete | Antal objekt som påbörjats och inte slutförts inom den överenskomna gränsen | Antal objekt i "pågår"-statusar vid ögonblicksbildens tidpunkt; objekt i backlogen eller "redo"-kön före första arbetsstatus och objekt som redan är klara utesluts | objekt | Statushistorik i ärendehanteringssystem eller ITSM-verktyg | Incidenthantering; hantering av serviceförfrågningar | WIP-antal på tavlan | Daglig ögonblicksbild, granskas veckovis |
| Kölängd | Antal objekt som väntar på att arbete ska börja eller väntar mellan steg | Antal objekt i väntande statusar (till exempel "ny", "väntar på triage", "väntar på granskning") vid ögonblicksbildens tidpunkt; blockerade objekt redovisas separat, läggs inte till | objekt | Statushistorik i ärendehanteringssystem eller ITSM-verktyg | Incidenthantering; ändringsmöjliggörande | Redo-kolumnen och kökolumner på en tavla | Daglig ögonblicksbild, granskas veckovis |
| Kötid | Förfluten tid ett objekt tillbringar med att vänta innan arbete börjar, per steg | Klockan startar när objektet går in i en väntande status och stoppar när det går in i nästa aktiva status; tid i en status märkt "blockerad på kund" utesluts och redovisas som en egen siffra; redovisa medianen och den 85:e percentilen | timmar eller dagar | Tidsstämplar för statusövergångar i ärendehanteringssystemet eller ITSM-verktyget | Servicedesk; incidenthantering; ändringsmöjliggörande | Väntetid i en värdeström; tid i kökolumner | Veckovis |
| Ankomst- och avgångstakt | Objekt som kommer in i och lämnar systemet per period, och deras skillnad som nettokötillväxt | Ankomster = objekt som går in över gränsen under perioden; avgångar = objekt som slutförs under perioden; nettotillväxt = ankomster minus avgångar; objekt som öppnas på nytt räknas som ankomster bara om teamet definierar dem så | objekt per vecka | Skapande- och lösningstidsstämplar i ärendehanteringssystemet eller ITSM-verktyget | Övervakning och händelsehantering; incidenthantering | Genomflöde och kumulativt flödesdiagram | Veckovis |
| Teamets belastningskvot | Andel av teamets kapacitet som planerat och förväntat arbete skulle förbruka | Timmar av förväntad efterfrågan under perioden (ankomster gånger genomsnittlig insats per objekt) / timmar av tillgänglig kapacitet efter ledighet och fasta åtaganden; teamet anger hur det uppskattar insats; individer redovisas aldrig | procent | Kapacitetsplan, insatshistorik i ärendehanteringssystemet, schema | Kapacitets- och prestandahantering; hantering av personal och kompetens | Teamets kapacitet i planerat arbete | Månadsvis, och vid varje planeringstillfälle |
| Andel överträdelser av WIP-gräns | Andel dagar då ett steg eller systemet överskrider sin överenskomna WIP-gräns | Dagar med WIP över gränsen / arbetsdagar under perioden; dagar då teamet registrerade ett avsiktligt undantag med ett skäl redovisas separat | procent av dagar | Dagliga WIP-ögonblicksbilder och undantagsloggen | Ständig förbättring; incidenthantering | Arbetsöverenskommelse om WIP-gräns | Veckovis |
| Konsistenskvot enligt Littles lag | Kontroll av att de tre flödestalen stämmer med varandra | Genomsnittligt WIP under perioden / (avgångar per dag gånger medelcykeltid i dagar) för samma gräns och period; en kvot nära 1 betyder att definitionerna är konsekventa, en kvot långt från 1 betyder att en gräns eller klocka är inkonsekvent | kvot | Samma ärendehanteringsdata som de andra flödesmåtten | Mätning och rapportering | Rimlighetskontroll av flödesmått i en retrospektiv | Månadsvis |

## Rekommendationer

### Definiera gränsen först

**1. Skriv systemgränsen innan du räknar något.** Ange vilken status som startar "pågår" och vilken som avslutar det, och vilka objekt som utesluts (till exempel schemalagt underhåll, eller objekt som väntar på en kund). Två team som räknar WIP olika ger siffror som inte kan jämföras, och en gräns som flyttas i tysthet bryter Littles lag-kontrollen. Registrera gränsen i mätetalsregistret och ändra den bara med ett loggat skäl.

**2. Skilj väntan från arbete i statusmodellen.** Om en enda status täcker både "köad för granskning" och "under granskning" är kötid osynlig. Ge väntande tillstånd egna namn, så som beskrivs i ämne 1.5, Datakällor och instrumentering, så att övergångarnas tidsstämplar avslöjar fördröjningen. Kostnaden för en extra status är liten jämfört med värdet av att se var objekt står.

### Använd Littles lag som konsistenskontroll

**3. Kör kontrollen enligt Littles lag varje månad.** Beräkna genomsnittligt WIP, genomflöde och medelcykeltid för samma period och gräns, och se om de ungefär stämmer. En stor avvikelse betyder oftast att objekt går in i eller lämnar systemet utan att räknas, eller att gamla objekt är parkerade i en status som ingen bevakar. Rätta datan innan du tolkar någon trend. Lagen är ett teorem om stabila system, så tillämpa den på perioder då kön inte växte eller krympte dramatiskt.

### Bevaka utnyttjandegrad och kötillväxt

**4. Planera för slack där variabiliteten är hög.** För incidenthantering, jourarbete och varje kö som matas av slumpmässig efterfrågan, planera under full kapacitet så att en skur inte blir en backlog. Team upptäcker ofta att en belastningskvot som ser bekväm ut på papper redan är för hög när avbrott räknas in (se ämne 2.9, Driftarbete och oplanerat arbete). Enas med dem som gör arbetet om målintervallet och granska det efter varje större incident.

**5. Följ nettokötillväxt såväl som kölängd.** En kö på 40 objekt som krymper är sund, och en kö på 15 som växer med 5 objekt i veckan är det inte. Jämför ankomster och avgångar varje vecka och rita trenden med ett [kumulativt flödesdiagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), där ett vidgat band för ett steg signalerar växande WIP där. När ankomsterna överstiger avgångarna under flera veckor växer kön utan gräns och ett beslut är aktuellt: lägg till kapacitet, minska efterfrågan eller ändra vad som accepteras.

**6. Läs kötid per steg för att hitta flaskhalsen.** Dela upp den förflutna tiden i väntperioder per steg. Steget med längst kötid och flest väntande objekt är en kandidat till flaskhals. Att förbättra något annat steg kortar inte hela systemet, så rikta förbättringsinsatsen mot begränsningen och kontrollera igen efteråt eftersom begränsningen flyttar sig.

### Begränsa WIP på ett sätt som fungerar

**7. Sätt den första WIP-gränsen utifrån observation och justera sedan.** Börja nära det nuvarande genomsnittliga WIP, eller något under, och observera vad som händer med cykeltid och blockerade objekt. Sänk gränsen steg för steg så länge teamet fortfarande kan hålla varje person produktiv på att slutföra arbete. Det finns inget universellt rätt tal, och ett tal lånat från ett annat team bär inget belägg för ditt.

**8. Behandla en överträdelse som en uppmaning, inte ett regelbrott.** När WIP överstiger gränsen, fråga vad som blockerar slutförandet och vem som kan svärma kring det. En överträdelse som registreras med ett skäl, till exempel en brådskande produktionsrättelse, är information. Om överträdelser blir rutin är gränsen fel eller systemet överbelastat, och svaret är ett kapacitetssamtal snarare än en tillrättavisning.

**9. Tillämpa gränser på hela värdeströmmen, inte en kolumn.** En gräns enbart på "pågår" låter arbete hopa sig i köer för granskning, test och godkännande. Begränsa antalet objekt i systemet från början till slut och lägg till stegsgränser där en viss kö fortsätter att växa. Delade steg som en ändringsgranskning eller en testmiljö förtjänar sin egen synliga gräns och sin egen kötid.

### Hantera brådskande och variabelt arbete med avsikt

**10. Ge expedierat arbete en policy.** Utan en överskrider brådskande objekt i tysthet varje gräns och teamet kan inte skilja planerad från oplanerad belastning. Definiera vad som kvalificerar, hur många expedierade objekt som får pågå och vilket arbete som pausar. Räkna expedierade objekt och deras effekt på kötid, så att brådskans kostnad syns för dem som begär den (se ämne 2.9, Driftarbete och oplanerat arbete).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Pågående arbete | Att flytta objekt till en "parkerad" eller "vänteläge"-status för att hålla sig under gränsen; att dela upp objekt så att de ser mindre ut; att starta arbete utanför tavlan | Antal objekt i parkerade statusar och deras ålder; stickprova tavlan mot det verkliga arbetet; redovisa det äldsta objektet under arbete |
| Kölängd | Att stänga och öppna objekt på nytt; att avvisa nya objekt i dörren; att döpa om väntande statusar så att de faller utanför räkningen | Återöppningsgrad och avvisningsgrad bredvid kölängd; granskning av statusdefinitioner vid varje mätetalsgranskning |
| Kötid | Att starta klockan sent genom att skapa posten efter att arbetet är redo; att pausa klockan genom blockerade eller kundväntande statusar; att markera ett objekt som pågående när det bara har öppnats | Fördelning av tid i blockerade och pausstatusar; andel objekt som skapats efter att de påbörjats; väntan rapporterad av beställaren i en kort enkät |
| Ankomst- och avgångstakt | Att stänga objekt snabbt för att höja avgångarna; att dela upp en förfrågan i många för att höja båda antalen; att räkna dubbletter som ankomster | Kvalitets- och återöppningsmått på stängda objekt (se ämne 3.3, Svarstid och lösningstid för incidenter); fördelning av objektstorlek; kontroll av kundresultat |
| Teamets belastningskvot | Att underskatta insatsen för att visa ledig kapacitet, eller överdriva efterfrågan för att motivera bemanning; att redovisa en kvot för en gynnsam period | Jämför uppskattad och faktisk insats per objekt; visa kvoten med sin trend och avbrottsandelen; kollegial granskning av uppskattningsmetoden |
| Andel överträdelser av WIP-gräns | Att höja gränsen för att stoppa överträdelser; att dölja överträdelser genom att flytta objekt från tavlan; att bevilja undantag frikostigt | Antal och skäl för undantag; historik över gränsändringar med datum; percentil av cykeltid bredvid överträdelsegraden |
| Konsistenskvot enligt Littles lag | Att justera gränsen eller perioden tills kvoten närmar sig 1; att utesluta långlivade objekt som extremvärden | Fastställ gräns och period i förväg; publicera de uteslutna objekten och deras antal; granska ändringar av gränsen med ett skäl |

En sund avläsning är ett team vars WIP är stabilt eller fallande, vars percentiler av kötid är platta eller förbättras, vars ankomster och avgångar ungefär balanserar och vars överträdelser kommer med skäl som leder till åtgärd. Kvoten enligt Littles lag ligger nära 1 för att datan är konsekvent, inte för att någon har trimmat den.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Snäva WIP-gränser | Kortare cykeltid, tidigare upptäckt av problem, mer slutförande | Tomgång kan uppstå i ett steg; kräver disciplin och en del korsutbildning; kan frustrera intressenter som vill att arbete ska startas |
| Lösa eller inga WIP-gränser | Alla ser upptagna ut och förfrågningar accepteras snabbt | Långa köer, långsam leverans, dolda blockeringar, mycket kontextbyte |
| Planerad slackkapacitet | Absorberar skurar och brådskande arbete; håller svarstiderna korta | Ser ut som slöseri i en utnyttjanderapport; kräver att ledningen accepterar lägre skenbar effektivitet |
| Hög planerad utnyttjandegrad | Ser effektivt och billigt ut per timme | Väntan växer brant när belastningen närmar sig kapaciteten; skör vid varje störning |
| Att använda Littles lag för planering | Enkel, allmän och snabb att tillämpa | Giltig bara för stabila system och för medelvärden; säger ingenting om ett enskilt objekt |

Begränsa WIP och behåll slack där variabiliteten och kostnaden för fördröjning är höga, och acceptera lösare gränser där arbetet är jämnt och oberoende.

I den enklaste läroboksmodellen för en enda betjänare med slumpmässiga ankomster och betjäningstider (en M/M/1-kö) är den genomsnittliga tiden i systemet betjäningstiden dividerad med ett minus utnyttjandegraden: 2 gånger vid 50 procent, 5 gånger vid 80 procent, 10 gånger vid 90 procent och 20 gånger vid 95 procent. Verkliga team är inte enskilda betjänare, så behandla siffrorna som kurvans form, inte som en prognos.

## Frågor att diskutera med teamet

**1. Vad räknas som "pågår" för oss, och räknar vi alla det på samma sätt?**
Be var och en nämna den första och sista status som gör ett objekt till en del av WIP och jämför svaren. Leta efter statusar som "vänteläge" eller "väntar på kund" som vissa räknar och andra inte. Enas om en gräns och skriv ned den. Facilitatorn bör notera hur svaren skulle ändra WIP-talet, eftersom det visar hur känsligt måttet är för definitionen.

**2. Var väntar våra objekt längst, och vem äger den kön?**
Rita flödet från ankomst till klart och markera väntpunkterna. Uppskatta mediantiden och 85:e percentilens väntan vid varje punkt med hjälp av en nyligen genomförd månads data. Diskutera vilken kö ingen äger, till exempel ett godkännandesteg eller en delad testmiljö. Enas om en kö att undersöka i detalj och en person som tar med data nästa gång.

**3. Hur upptagen är för upptagen för den sorts arbete vi gör?**
Jämför den planerade belastningen med den andel tid som faktiskt går åt till avbrott och brådskande objekt. Fråga vad som hände med kön förra gången efterfrågan sköt i höjden. Diskutera idén att ett team utan ledig kapacitet inte kan svara snabbt. Facilitatorn bör styra mot ett målintervall för belastningskvoten, inte ett enda tal, och en plan för vad som händer när intervallet överskrids.

**4. Växer, krymper eller är vår kö stabil, och hur vet vi det?**
Titta på ankomster och avgångar de senaste åtta veckorna. Ett enkelt diagram räcker. Fråga om någon hade märkt en långsam ökning innan den blev ett problem, och vilken signal som skulle utlösa åtgärd. Enas om vad ett team ska göra när avgångarna ligger efter ankomsterna tre veckor i rad.

**5. Vad skulle hända om vi sänkte vår WIP-gräns med ett?**
Be människor förutsäga vilka objekt som skulle vänta, vilka som skulle bli klara tidigare och vad de skulle göra när de inte kan starta något nytt. Lyft fram rädslor som att ses som overksam.

**6. Stämmer våra siffror med varandra?**
Ta en månads data och beräkna genomsnittligt WIP, genomflöde och medelcykeltid. Kontrollera om WIP ungefär är genomflöde gånger cykeltid. Om inte, jaga orsaken, till exempel objekt som är slutförda men inte stängda, eller objekt som stängts utan att ha påbörjats. Facilitatorn bör behandla en avvikelse som en gåva: den pekar på ett data- eller definitionsproblem som annars skulle förvanska varje annat flödesmått.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam känner effekterna av för mycket WIP som kontextbyte, sen återkoppling och oavslutat arbete som förfaller. De har mest nytta av synliga WIP-gränser, små objekt och en vana att slutföra före start. Ett team bör titta på sina egna kötider mellan steg, till exempel väntan på granskning, eftersom de fördröjningarna vanligen är större än tiden som läggs på kodning (se ämne 2.7, Mätetal för pull requests och kodgranskning).

### Service- och driftteam

Driftteam möter slumpmässig efterfrågan, så köeffekterna är starka. En servicedesk, en jourrotation och en ändringsgranskningsnämnd beter sig var och en som en kö med variabla ankomster. De här teamen behöver uttrycklig slack, tydliga prioritetsregler och en policy för expedierat arbete så att brådskande objekt inte i tysthet tränger undan allt annat (se ämne 3.1, Mätetal för servicedesk, och ämne 5.7, Mätetal för rutinarbete och jour). Mät kötid vid varje överlämning och bevaka arbete som studsar mellan grupper (se ämne 9.3, Mätetal för samarbete och överlämningar).

### Ledning och styrning

Ledare påverkar köer genom den efterfrågan de accepterar och den utnyttjandegrad de belönar. De bör be om percentiler av kötid och nettokötillväxt såväl som utnyttjandegrad, och förvänta sig att en sund tjänst går under full kapacitet. En begäran att lägga till fler projekt på ett team som redan är vid sin gräns är ett beslut att förlänga allas cykeltid, och styrningen bör göra den avvägningen uttrycklig. Finansiera kapacitet för begränsningen i stället för allmänna effektivitetskampanjer (se ämne 5.4, Mätetal för kapacitet och prestanda).

### Kunder och användare

Kunder upplever köande som att vänta på ett svar, och de bryr sig sällan om hur upptaget teamet är. De behöver ärliga förväntningar baserade på fördelningen av tidigare väntetider, ett sätt att se status på sin förfrågan och en eskaleringsväg för brådskande behov. Att begränsa WIP kan betyda långsammare acceptans av nya förfrågningar och snabbare slutförande av accepterade, och det valet bör förklaras för dem (se ämne 6.2, Överenskommelser om upplevelsenivå).

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på ett regionalt sjukhus har en servicedesk, ett infrastrukturteam och ett applikationsteam. Alla siffror i det här exemplet är illustrativa.

Applikationsteamet hanterar serviceförfrågningar och små ändringar för kliniska system. Under ett kvartal visar dess instrumentpanel en mediancykeltid som steg från 6 arbetsdagar till 11, medan teamet säger att det går "för fullt". Belastningskvoten teamet beräknar för kvartalet är 98 procent. Den 85:e percentilen av kötid för steget "väntar på klinisk signering" är 9 arbetsdagar, och det genomsnittliga WIP på tavlan är 44 objekt mot ett genomflöde på 4 objekt per arbetsdag. Med Littles lag ger 44 dividerat med 4 en underförstådd medelcykeltid på 11 arbetsdagar, vilket stämmer med den uppmätta siffran, så datan är konsekvent och teamet litar på den.

Avdelningschefen föreslår först att anställa en konsult. Teamledaren pekar på stegfördelningen: av de 11 dagarna står kön före klinisk signering och kön före driftsättning för det mesta av den förflutna tiden, och aktivt arbete är en liten andel. Ankomsterna under kvartalet översteg avgångarna med ungefär 2 objekt i veckan, så kön växte stadigt. Teamet har också accepterat varje brådskande förfrågan, och de expedierade objekten saknar policy.

Teamet beslutar fyra ändringar, registrerade i beslutsloggen. Det sätter en systemövergripande WIP-gräns på 30 objekt, med en stegsgräns på 8 för signeringskön. Det planerar för en belastningskvot på ungefär 80 procent så att förväntade avbrott ryms. Det skriver en expresspolicy som tillåter högst två brådskande objekt under arbete. Det ber den kliniska signeringsgruppen hålla en kort daglig granskningstid i stället för ett veckomöte. Efter åtta veckor redovisar teamet en mediancykeltid på 7 arbetsdagar, en 85:e percentil av kötid vid signering på 3 arbetsdagar och en överträdelsegrad på 10 procent av dagarna, med skälen loggade.

Teamet fångar en manipulationsrisk i den andra månaden. Överträdelsegraden ser utmärkt ut, men ett stickprov av tavlan visar flera objekt i en ny status kallad "väntande", som ligger utanför WIP-räkningen, och skyddsräcket med antalet parkerade statusar hade trendat uppåt. Teamet tar bort statusen, flyttar tillbaka objekten in i räkningen och kräver att varje ny status läggs till i registret med en definition. Överträdelsegraden stiger till 18 procent under några veckor, vilket teamet accepterar som den ärliga siffran, och faller sedan när blockerade objekt löses.

## Agilitet, AI, automatisering och analys

### Agilitet

Att begränsa pågående arbete stöder ett hållbart tempo och kontinuerlig leverans: färre saker pågående betyder att var och en blir klar tidigare och att återkopplingen kommer tidigare. En praktisk vana är att enas med teamet och intressenterna om en gräns och granska överträdelser vid det regelbundna förbättringssamtalet. Varningen är att en gräns som tillämpas som en regel, utan diskussion, kommer att manipuleras genom att dela upp eller dölja arbete.

### AI

AI-stöd gör det lätt att starta mer arbete parallellt, eftersom ett utkast kostar lite. Det kan höja pågående arbete och kölängd för de människor som måste granska och besluta. Para varje ökning av påbörjat arbete med kötid vid granskning och med belastningskvoten för granskningsteamet. Varningen är att mer AI-påbörjat arbete kan överges, så räkna kasserade utkast såväl som slutförda.

### Automatisering

Läs kölängd och ankomsttakter ur sanningskällan automatiskt och sätt larm på trender, till exempel en stigande belastningskvot, såväl som på fasta tröskelvärden. Automatisering som dirigerar arbete bör mätas på felaktig dirigering och på den kö den skapar när den fallerar. Varningen är att en regel för automatisk tilldelning i tysthet kan koncentrera arbete till några få personer eller ett enda team.

### Analys

Använd Littles lag som konsistenskontroll mellan pågående arbete, genomflöde och cykeltid och behandla ett stort glapp som ett data- eller definitionsproblem. Beslutet detta ger underlag för är var gränser och kapacitet ska sättas. Varningen är att lagen förutsätter ett stabilt system, så tillämpa den inte över en period med en stor förändring i ankomster.

## Branschperspektiv

**Startup.** Efterfrågan är ojämn och frestelsen är att starta allt. En enkel tavla med en synlig WIP-gräns och en veckovis kontroll av det äldsta objektet under arbete räcker. Behåll slack för produktionsproblem, eftersom ett enda avbrott kan förbruka hela teamet.

**Småföretag.** En eller två personer hanterar ofta support, projekt och administration, och inkorgen är kön. Skilj planerat från reaktivt arbete, sätt en daglig gräns för påbörjade uppgifter och tala om för kunder den vanliga väntan för varje slags förfrågan.

**Storföretag.** Många team delar steg som ändringsgodkännande, säkerhetsgranskning och testmiljöer, och de delade köerna är ofta de längsta. Mät kötid vid delade steg och publicera den, ge varje delat steg en ägare och undvik att redovisa utnyttjandegrad som mål. Verktyg kan räkna WIP olika mellan team, så enas om en gemensam gräns och ett gemensamt statusvokabulär innan du sammanställer (se ämne 2.4, Mätetal för värdeström).

**Offentlig sektor.** Lagstadgade tidsfrister, upphandlingssteg och formella godkännanden skapar långa köer som team inte styr över. Skilj den tid ett team styr över från tiden som går åt till att vänta på andra organ och redovisa båda. Där servicemål sätts i lag eller reglering, dokumentera klockreglerna och eventuella pauser och behåll revisionsspåret (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Motivet är snabbare, mer förutsägbar leverans utan att anställa fler, eftersom väntan dominerar den förflutna tiden och en måttlig minskning av WIP eller av en lång godkännandekö kortar cykeltiden för varje objekt som följer. Planerad slack låter också ett team absorbera en större incident utan att förlora veckor av annat arbete.

Kostnaderna är måttliga och mestadels människor: möda för att definiera gränser och statusar, för att bygga en daglig WIP-ögonblicksbild och en rapport över kötid ur befintliga verktygsdata och för att hålla en kort veckogranskning. Att begränsa WIP betyder också att säga inte än till vissa förfrågningar, vilket kräver intressentens medgivande, och ledig kapacitet är en skenbar kostnad som ledare behöver förstå som en försäkring mot fördröjning.

Avkastningen bör beskrivas genom mönster organisationen kan mäta själv snarare än genom lånade procentsatser. Följ medianen och den 85:e percentilen av cykeltid före och efter gränser, antalet objekt som åldrats bortom ett överenskommet tröskelvärde, överträdelsegraden och dess skäl samt andelen tid som läggs på brådskande arbete. Affärscaset är starkast när det knyter kötid till något som verksamheten redan känner, till exempel väntan på åtkomst för en nyanställd, en ändring i ett kliniskt system eller en kundrättelse. Den totala ägandekostnaden domineras av tiden för de människor som granskar och agerar på siffrorna, så räkna den tiden mot den fördröjning den tar bort. Ett team bör bygga sin egen baslinje, eftersom inga riktmärken anges här.

## Antimönster och fallgropar

- **Att sikta på 100 procents utnyttjandegrad.** Det garanterar långa väntetider och skör leverans. Planera en belastningskvot med slack och granska den efter störningar.
- **Att bara begränsa kolumnen "pågår".** Arbete hopar sig då i köer utanför gränsen. Begränsa systemet från början till slut och lägg till stegsgränser där köer växer.
- **Att behandla WIP-gränsen som en regel att driva igenom.** Människor döljer arbete för att följa den. Använd en överträdelse som en uppmaning att fråga vad som är blockerat och logga skälet.
- **Att parkera objekt i obegränsade statusar.** Antalet förblir lågt medan arbete väntar osett. Ta med parkerade statusar i en synlig räkning och granska deras ålder.
- **Att mäta utnyttjandegrad för individer.** Det belönar att se upptagen ut och inbjuder till rangordning. Mät teamet eller resurspoolen och publicera aldrig en siffra per person.
- **Att ignorera ankomstsidan.** Team arbetar med avgångar medan efterfrågan fortsätter att växa. Följ ankomster och fatta ett uttryckligt beslut om vad som ska accepteras när de överstiger kapaciteten.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Definitioner och gränser | Var och en räknar WIP på sitt eget sätt | Vissa team skriver en gräns för sin tavla | En skriven gräns och ett statusvokabulär, med väntande tillstånd skilda från arbetande | Gränsändringar loggas och kontrollen enligt Littles lag körs månadsvis | Gränser samordnade med leverantörer och partnerteam och reviderade när de slutar ge underlag för beslut |
| WIP-gränser och slack | Inga gränser; alla upptagna | Informella gränser på en kolumn | Systemövergripande gränser och stegsgränser, med en överträdelselogg och ett angivet belastningsintervall | Gränser justeras utifrån cykeltids- och köbelägg i en rytm | Gränser och kapacitet samordnade över team som delar steg |
| Kösynlighet | Väntan syns bara genom klagomål | Kölängd räknas på vissa tavlor | Percentiler av kötid per steg visas för det ägande teamet | Nettokötillväxt följs över tid med skyddsräcken och agerar man på i finansierat arbete | Kötid vid delade och externa steg redovisas öppet för kunder och leverantörer |
| Användning i beslut | Kapacitetsbegäranden argumenteras med anekdoter | Utnyttjandegrad citeras för att motivera bemanning | Köbelägg och cykeltidsbelägg används i planering | Avvägningar mellan efterfrågan och kapacitet avgörs med data i styrningsgranskningar | Efterfrågan formas gemensamt med kunder med hjälp av väntetidsfördelningar |

## Checklista

- [ ] Systemgränsen för WIP är skriven, med start- och slutstatusar och undantag.
- [ ] Väntande tillstånd och arbetande tillstånd är separata statusar i arbetsflödet.
- [ ] En daglig WIP- och köögonblicksbild fångas och sparas.
- [ ] Kötid redovisas som en median och en hög percentil, per steg.
- [ ] Ankomster och avgångar ritas upp veckovis, med ett kumulativt flödesdiagram.
- [ ] En WIP-gräns finns för systemet och för varje steg med en växande kö.
- [ ] Gränsöverträdelser loggas med ett skäl och granskas veckovis.
- [ ] En policy definierar expedierat arbete och sätter tak för antalet under arbete.
- [ ] Teamets belastningskvot uppskattas på teamnivå, aldrig per person, med metoden angiven.
- [ ] Kontrollen enligt Littles lag körs månadsvis och avvikelser undersöks.
- [ ] Parkerade och blockerade statusar räknas och deras ålder granskas.
- [ ] Varje ändring av en gräns, status eller WIP-gräns loggas med datum och skäl.

## AI-prompter

**Kontrollera gränsen och statusarna bakom en WIP-räkning.**

```text
I want to define work in process for [team or service]. Our workflow statuses
are [list of statuses with a one-line meaning each], and these items are
excluded: [exclusions]. Identify ambiguities in which statuses count as in
process, which are waiting, and which are blocked. Suggest a boundary and a
cleaner status list, and say what the change would do to the WIP number. Do not
guess how our tool is configured and do not invent benchmark values. List your
assumptions and the questions I should answer.
```

**Kör en konsistenskontroll enligt Littles lag.**

```text
Here is data for [team or service] over [period]: average WIP [value],
departures per day [value], and mean cycle time in days [value], using the
boundary [boundary description]. Compute the ratio of average WIP to departures
times cycle time, and explain what a mismatch could mean given this boundary,
such as items parked, items closed without being started, or an unstable period.
Suggest checks I can make in [tracker or ITSM tool]. Do not invent figures or
thresholds. List your assumptions.
```

**Planera ett första experiment med WIP-gräns.**

```text
Our team is [team size and roles], working on [type of work]. Current average WIP
is [value], with stages [list of stages], and the longest queue is [stage]. Draft
a time-boxed experiment to introduce a WIP limit: a hypothesis, the limit to try
and why, the measures to watch (including at least one guardrail), what counts as
an exception, and a review date. Do not state a universal correct limit or
benchmark values. List your assumptions and the risks.
```

**Hitta den sannolika flaskhalsen ur stegdata.**

```text
For [team or service], here is queue time and WIP by stage over [period]: [table
of stage, median queue time, 85th percentile queue time, items waiting, and
capacity notes]. Rank the stages as candidates for the constraint, explain the
reasoning in plain language, and suggest one low-cost experiment for the top
candidate and one measure that would show it worked. Do not invent data or
benchmarks. List your assumptions and what additional data would change the
ranking.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta vilket ämne som definierar ett flödes- eller kapacitetsmått du lägger till och skyddsräcket som bör sitta bredvid.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett redigerat mätetal anger sina klockor, sin gräns, sin manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- Väntan dominerar den förflutna tiden, så mät WIP, kölängd och kötid per steg och redovisa medianer och höga percentiler.
- Littles lag knyter ihop genomsnittligt WIP, genomflöde och cykeltid, vilket gör den till ett snabbt prov på om dina definitioner är konsekventa.
- Fördröjningen stiger brant när utnyttjandegraden närmar sig full kapacitet, så planera slack där efterfrågan är variabel.
- Begränsa WIP för hela systemet, behandla överträdelser som uppmaningar till samtal och skydda mot att döpa om arbete för att hålla sig under gränsen.
- Bevaka ankomster och avgångar, eftersom en kö som växer vecka efter vecka kräver ett beslut om kapacitet eller efterfrågan.
- Mät team och tjänster, aldrig individer, och enas om en skriven gräns innan du jämför siffror.

## Referenser och vidare läsning

1. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
2. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
3. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
6. Hopp, W. J., and Spearman, M. L., *Factory Physics*, 3rd edition, Waveland Press, 2011.
7. Kleinrock, L., *Queueing Systems, Volume 1: Theory*, Wiley, 1975.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
10. Wikipedia, [Work in process](https://en.wikipedia.org/wiki/Work_in_process).
11. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
12. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
13. Wikipedia, [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula).
14. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
15. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
16. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
17. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
