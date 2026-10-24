# Ledtid, cykeltid och flödeseffektivitet

**Ledtid, cykeltid och flödeseffektivitet betyder bara något när var och en har en skriven start och ett skrivet stopp, en fördelning i stället för ett medelvärde och en bild av den väntan som fyller det mesta av den förflutna tiden.**

## Översikt och motiv

Nästan alla team vill veta hur lång tid arbete tar. Frågan låter enkel och ger upphov till gräl, eftersom "hur lång tid" beror på vem som frågar och var de startar stoppuret. En kund räknar från det ögonblick hen bad om något. En utvecklare räknar från det ögonblick hen tog sig an arbetet. En driftchef räknar från det ögonblick ärendet tilldelades en kö. Alla tre har rätt om sin egen klocka, och alla tre ger olika siffror för samma arbetsstycke.

[Ledtid](https://en.wikipedia.org/wiki/Lead_time) är den förflutna tiden mellan att en förfrågan anländer och att förfrågan är tillgodosedd, sedd från den som bad om det. [Cykeltid](https://en.wikipedia.org/wiki/Cycle_time) är den förflutna tiden mellan det ögonblick teamet åtar sig ett arbetsstycke och det ögonblick det är klart, sedd från teamet som gör det. Skillnaden mellan de två är tiden förfrågan väntade innan teamet började. Flödeseffektivitet är den andel av den förflutna tiden då någon faktiskt arbetade med objektet, i motsats till att objektet väntade. Om ett objekt tog 10 dagar från start till slut och bearbetades under 1 dag är dess flödeseffektivitet 10 procent. Bearbetningstid (touch time) är den arbetande delen. Väntetid är allt annat.

[Lean programvaruutveckling](https://en.wikipedia.org/wiki/Lean_software_development) och Kanban Guide förde över dessa idéer från tillverkning till kunskapsarbete. ITIL-praktiker talar om lösningstid, uppfyllandetid och servicenivåmål, och agila team talar om cykeltid och arbetsobjekt. Det här ämnet ger en uppsättning definitioner som håller när en incident, en förfrågan, en ändring och en berättelse delar ett möte.

Förfluten tid har en egenskap som överraskar människor första gången de mäter den. I det mesta av kunskapsarbetet och tjänstearbetet tillbringar objektet större delen av sitt liv med att vänta: på ett beslut, en granskare, en miljö, en leverantör, ett underhållsfönster eller helt enkelt en person som är upptagen med något annat. Att göra den väntan synlig är det mest användbara de här mätetalen gör. Ett team som inte kan se sin väntetid försöker ofta förbättra sig genom att arbeta snabbare, vilket har liten effekt i ett system där 90 procent av den förflutna tiden går åt i köer. Köbeteende behandlas utförligt i ämne 2.3, Pågående arbete och köteori, och hela värdeströmsbilden finns i ämne 2.4, Mätetal för värdeström.

Tidsmått redovisas som percentiler, till exempel medianen och den 85:e eller 95:e [percentilen](https://en.wikipedia.org/wiki/Percentile), av skälen i ämne 1.6, Statistisk läskunnighet för tjänstemätetal. De råa tidsstämplarna kommer från källorna i ämne 1.5, Datakällor och instrumentering. Flödesmåtten pågående arbete, genomflöde och ålder på arbetsobjekt finns i ämne 2.1, Flödesmått, och DORA-måttet ledtid för ändring finns i ämne 2.8, DORA-mätetal. Det här ämnet behandlar själva tidsmåtten: hur man definierar dem så att de är jämförbara, var deras klockor startar och stoppar och hur man blottlägger väntan i dem.

## Nyckelprinciper

- **Namnge klockan innan du läser siffran.** Varje tidsmått har en starthändelse, en stopphändelse och en lista över undantag. En siffra utan dem är en åsikt.
- **Ledtid tillhör kunden, cykeltid tillhör teamet.** Behåll båda och märk alltid vilken ett diagram visar, eftersom glappet mellan dem är en signal i sig.
- **Redovisa fördelningar, aldrig bara ett medelvärde.** Medianen beskriver det typiska objektet. En hög percentil beskriver den risk kunden faktiskt bär.
- **Väntan är det viktigaste fyndet.** Flödeseffektiviteten är oftast låg, och svaret är att ta bort köer och överlämningar, inte att be människor skynda sig.
- **Pauslägen är designbeslut.** Om klockan kan stoppas genom att flytta ett objekt till en "väntar"-status kommer den statusen att användas, så räkna hur ofta den används och av vem.
- **Jämför ett objekt med sitt eget slag.** En incident, en standardförfrågan, en ändring och en funktion har olika former. Segmentera efter arbetstyp innan du jämför något.
- **Mät system, inte människor.** Tidsmått beskriver hur arbete flödar genom ett team eller en tjänst. De är aldrig en rangordning av individer.

## Mätetalsdefinitioner

Tabellen nedan använder ett vokabulär för agila arbetsobjekt och ITIL-poster. "Arbetsobjekt" betyder varje post som rör sig genom ett arbetsflöde: en berättelse, en uppgift, en incident, en serviceförfrågan, en ändring eller en problempost. Alla varaktigheter är förfluten kalendertid om inget annat anges, och var och en redovisas som medianen och en hög percentil.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ledtid | Förfluten tid från att en förfrågan anländer till att den levereras till den som bad om den | leveranstidsstämpel minus tidsstämpel för förfrågans ankomst, per arbetsobjekt; klockan startar när förfrågan registreras och stoppar när den som bad om den kan använda resultatet; objekt som fortfarande är öppna och objekt som avbrutits före leverans utesluts och räknas separat | dagar eller timmar | Historik i ITSM-verktyg eller ärendehanteringssystem | Hantering av serviceförfrågningar; incidenthantering; ändringsmöjliggörande | Ledtid på teamets tavla; tid från förfrågan till release | Veckovis, granskas månadsvis |
| Cykeltid | Förfluten tid från det ögonblick teamet påbörjar arbetet till det ögonblick det är klart | tidsstämpel för klart minus tidsstämpel för påbörjat, per arbetsobjekt; klockan startar vid första flytten till ett aktivt arbetstillstånd och stoppar vid första flytten till ett klart-tillstånd; tid före starten och efter klart-tillståndet utesluts | dagar eller timmar | Tillståndshistorik i ärendehanteringssystem eller tavla | Incidenthantering; hantering av serviceförfrågningar; ändringsmöjliggörande | Cykeltid (se ämne 2.1, Flödesmått) | Veckovis |
| Bearbetningstid | Tid då en person eller en automatisering aktivt arbetar med objektet | summan av de intervall objektet tillbringar i tillstånd klassade som aktivt arbete; väntande, blockerade och köande tillstånd utesluts | timmar | Tillståndshistorik i ärendehanteringssystemet, med varje tillstånd klassat som aktivt eller väntande | Incidenthantering; hantering av serviceförfrågningar | Processtid i en värdeströmskarta | Månatligt stickprov |
| Väntetid | Tid då objektet står i en kö, är blockerat eller pausat | cykeltid minus bearbetningstid, per arbetsobjekt; ej tillämpligt för objekt utan registrerad start | dagar eller timmar | Tillståndshistorik i ärendehanteringssystemet | Incidenthantering; hantering av servicenivåer | Väntetid eller blockerad tid på en tavla | Månadsvis |
| Flödeseffektivitet | Andel av cykeltiden som lagts på aktivt arbete | summan av bearbetningstid / summan av cykeltid, för objekt som slutförts under perioden; objekt med saknad tillståndshistorik utesluts och räknas separat | procent | Tillståndshistorik i ärendehanteringssystemet | Ständig förbättring; hantering av serviceförfrågningar | Flödeseffektivitet från lean-praxis | Månadsvis |
| Pausandel för klockan | Andel av cykeltiden under vilken den formella serviceklockan var pausad | summan av pauslängder / summan av cykeltid, för objekt som slutförts under perioden; pauser är de statusar som definierats i de skrivna klockreglerna | procent | Statushistorik i ITSM-verktyget | Hantering av servicenivåer; incidenthantering | Tid i blockerad kolumn eller kolumn för vänteläge | Månadsvis |

Starten på cykeltidsklockan är ett teambeslut som måste skrivas ned. Den formella klockan i ett servicenivåavtal (SLA) pausar ofta medan ett objekt väntar på kunden, så det här ämnet redovisar pausandelen i stället för att kasta den tiden. Bearbetningstiden härleds ur tillstånd, så dess noggrannhet beror på hur väl tillstånden beskriver arbetet.

## Rekommendationer

### Definiera klockorna

**1. Skriv start och stopp för varje klocka.** För ledtid är starten förfrågans ankomst, som den registreras av det första system den som bad om det rör vid, och stoppet är det ögonblick då hen kan använda resultatet. För cykeltid är starten den första flytten till ett aktivt tillstånd och stoppet den första flytten till ett klart-tillstånd. Lägg in båda i mätetalsregistret (se ämne 1.4, Styrning och ägarskap av mätetal) och visa definitionen under varje diagram.

**2. Enas om vad "klart" betyder för varje arbetstyp.** En ändring är klar när den körs i produktion och är verifierad, inte när koden slagits ihop. En incident är klar när tjänsten är återställd för användaren, inte när ärendet stängs av ett massjobb på fredagen. En förfrågan är klar när den som bad om den har det hen bad om. Om "klart" skiljer sig mellan team kan cykeltider inte jämföras mellan dem.

**3. Behåll både ledtid och cykeltid och bevaka glappet.** Skillnaden mellan dem är åtagandeväntan: tiden en förfrågan ligger innan teamet börjar. En kort cykeltid bredvid en lång ledtid säger att teamet arbetar effektivt med det det påbörjar och att intaget är flaskhalsen. En lång cykeltid bredvid en kort ledtid säger att förfrågningar accepteras snabbt och sedan stannar av inne i teamet.

### Redovisa tid ärligt

**4. Använd percentiler och säg vilka.** Redovisa medianen och den 85:e eller 95:e percentilen, till exempel "hälften av objekten blev klara inom 4 dagar och 85 procent inom 11 dagar." Det uttalandet är också en prognos: ett nytt objekt har ungefär 85 procents chans att bli klart inom 11 dagar om systemet förblir detsamma. Ett medelvärde kan inte ge dig den meningen, och det flyttar sig långt när ett enda extremvärde dyker upp (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

**5. Rita varje objekt, inte bara sammanfattningen.** Ett spridningsdiagram av cykeltid mot slutdatum visar systemets form i en blick: kluster, en långsam drift uppåt, ett plötsligt steg efter en processändring. Sammanfattande siffror hör hemma bredvid diagrammet. Ett verktyg som bara erbjuder en medelvärdeslinje tar bort den information teamet mest behöver.

**6. Segmentera efter arbetstyp och servicenivåklass.** En brådskande incident, en standardförfrågan, en planerad ändring och en forskningsberättelse har olika förväntade tider. Dela upp data efter typ, och efter prioritet där prioriteten ändrar hur arbetet hanteras, innan du letar efter mönster. Blandade populationer ger en bred fördelning som inte beskriver någons upplevelse.

### Blottlägg väntan

**7. Klassificera varje status som aktiv, väntande eller klar.** Det här är arbetet som gör flödeseffektivitet möjlig. "Under utveckling" och "i granskning med en granskare som arbetar" är aktiva. "Väntar på granskning", "väntar på godkännande", "blockerad" och "väntar på kund" är väntande. Granska klassificeringen med teamet, eftersom etiketterna i ett arbetsflöde sällan berättar hela sanningen, och ett tillstånd som heter "pågår" döljer ofta ett objekt som ingen har rört på en vecka.

**8. Beräkna flödeseffektivitet som diagnostik, inte som mål.** Beräkna den på ett stickprov eller på alla slutförda objekt och använd den för att hitta var väntan bor: vilket tillstånd som håller objekten längst och vilken överlämning som föregår det. Räkna med låga tal och sätt inte ett mål som "nå 40 procent". Att höja talet genom att döpa om väntande tillstånd till aktiva är lätt och värdelöst, och de verkliga vinsterna kommer av att ta bort själva kön (se ämne 2.4, Mätetal för värdeström).

**9. Räkna blockerad och pausad tid separat.** Följ hur ofta objekt går in i ett blockerat eller pausat tillstånd, hur länge de stannar och vad orsaken var. En kort lista över återkommande blockeringsorsaker, till exempel väntan på ett godkännande, en miljö eller en leverantör, talar om vad som ska åtgärdas och vem du ska prata med. Redovisa pausandelen bredvid varje servicenivåresultat som utesluter pausad tid (se ämne 3.3, Svarstid och lösningstid för incidenter).

### Använd siffrorna väl

**10. Styr kön för att styra tiden.** Tiden genom ett system stiger när pågående arbete stiger, ett samband som anges i [Littles lag](https://en.wikipedia.org/wiki/Little%27s_law), som relaterar det genomsnittliga antalet objekt i systemet, ankomst- eller slutförandetakten och den genomsnittliga tid varje objekt tillbringar där. Att begränsa pågående arbete är därför det mest direkta greppet på cykeltid (se ämne 2.3, Pågående arbete och köteori). Att ändra måttets mål utan att ändra kön ändrar bara incitamentet att felrapportera.

**11. Använd cykeltidsfördelningar för prognoser och för servicenivåmål.** Om den 85:e percentilen av cykeltid för standardförfrågningar är 6 dagar kommer ett åtagande på 5 dagar ofta att missas, och ett åtagande på 8 dagar kommer att uppfyllas med marginal. Grunda ett internt mål på vad systemet har åstadkommit och arbeta sedan med systemet för att flytta fördelningen (se ämne 3.5, Mätetal för uppfyllande av serviceförfrågningar, och ämne 4.3, Mätetal för ändringsmöjliggörande).

**12. Behandla en ändrad definition som en händelse.** Om starten eller stoppet för en klocka ändras, markera det i varje diagram och räkna om historiken från råa händelser där det går. Utan den disciplinen visar en trendlinje effekten av en definitionsändring som om den vore en förbättring eller en försämring (se ämne 1.5, Datakällor och instrumentering).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Ledtid | Att fördröja skapandet av förfrågningsposten så att klockan startar sent; att stänga och öppna objekt på nytt för att starta om klockan; att dela upp en förfrågan i många små | Jämför förfrågningsposter med första kontakten i e-post eller chatt på ett stickprov; följ återöppningsgrad; följ storlek och antal objekt per förfrågan |
| Cykeltid | Att starta klockan sent genom att flytta objekt till "pågår" först i slutet; att lämna objekt utanför tavlan tills de nästan är klara; att skära arbete i bitar som inte levererar värde var för sig | Ålder på arbetsobjekt för öppna objekt (se ämne 2.1, Flödesmått); kontrollera att klara objekt är användbara för den som bad om dem; jämför ledtid med cykeltid |
| Bearbetningstid | Att klassificera väntande tillstånd som aktiva, eller logga aktivitet för att se upptagen ut | Granska tillståndsklassificeringen med teamet varje kvartal; stickprova objekt och jämför loggad aktivitet med incheckningar, kommentarer och kalendrar |
| Väntetid | Att skapa nya statusar så att väntetid faller i ett omätt glapp; att flytta väntande objekt till en status utanför arbetsflödet | Räkna odokumenterade statusar och övergångar (se ämne 1.5, Datakällor och instrumentering); bekräfta att cykeltid är lika med bearbetningstid plus väntetid på ett stickprov |
| Flödeseffektivitet | Att omklassificera väntan som aktiv; att välja bara snabba objekt till stickprovet; att slutföra lätta objekt först för att lyfta kvoten | Fast tillståndsklassificering med en ändringslogg; beräkna den på alla slutförda objekt; redovisa den med 85:e percentilen av cykeltid och åldern på öppna objekt |
| Pausandel för klockan | Att pausa den formella serviceklockan av skäl som inte beror på kunden, till exempel interna överlämningar, för att nå SLA:n | Granska pausorsakerna på ett stickprov; redovisa förfluten tid och SLA-tid sida vid sida; se över kundens egen syn på lösningstid (se ämne 5.1, Mätetal för SLA, OLA och XLA) |

En sund avläsning visar en ledtid och en cykeltid som rör sig tillsammans, ett glapp mellan dem som teamet kan förklara, en 85:e percentil som är en stabil multipel av medianen och en flödeseffektivitet som är låg men stigande allteftersom specifika köer tas bort. Varningstecken är en median som förbättras medan den höga percentilen blir sämre, en pausandel som växer i slutet av varje månad och en flödeseffektivitet som hoppar utan någon förändring i hur arbetet görs. När en siffra förbättras bör någon kunna peka på förändringen i arbetet som förklarar det. En manipulationsdriven förbättring klarar vanligen inte det provet. Den bredare psykologin behandlas i ämne 1.2, Goodharts lag och mätetalens psykologi.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Ledtid ur den efterfrågandes synvinkel | Stämmer med vad kunden känner; svår att förbättra genom att ändra interna etiketter | Starthändelsen ligger utanför teamets kontroll och kan vara dåligt registrerad |
| Cykeltid från teamets åtagande | Under teamets kontroll; lätt att beräkna ur tavlans historik | Ignorerar intagsfördröjning; ett team kan se snabbt ut medan förfrågningar väntar |
| Förfluten tid (kalenderklocka) | Enkel, jämförbar och stämmer med kundens upplevelse | Inkluderar nätter och helger, vilket kan vilseleda för team med olika arbetstider |
| Klocka i kontorstid | Passar bemannade servicenivåer och jourmönster | Kräver en kalender per team; döljer den verkliga väntan som kunden upplever |
| Flödeseffektivitet som kvot | Visar hur stor del av tiden som är väntan i ett enda intuitivt tal | Beror på tillståndsklassificering; lätt att blåsa upp; kan misstolkas som ett mål |
| Percentilredovisning | Visar risk och stöder prognoser | Kräver tillräckligt många objekt per period; svårare för vissa målgrupper att läsa än ett medelvärde |

Det praktiska rådet är att börja med förfluten tid, lägga till en vy i kontorstid bara där en servicenivå kräver det och redovisa både ledtid och cykeltid vid en hög percentil. Använd flödeseffektivitet som samtalsstartare i en granskning, med tillståndsklassificeringen på bordet, och undvik att sätta den på ett styrkort.

## Frågor att diskutera med teamet

**1. Var startar vår ledtidsklocka, och var tror kunden att den startar?**
Ta tre nyliga förfrågningar och följ dem från första kontakt till leverans. Markera ögonblicket då förfrågan registrerades i sanningskällan. Jämför glappet mellan första kontakt och skapandet av posten. Facilitatorn bör leta efter dolda köer i e-post, chatt eller en delad inkorg som aldrig syns i ett mätetal.

**2. Vad betyder "klart" för varje typ av arbete vi hanterar?**
Lista arbetstyperna, till exempel incidenter, förfrågningar, ändringar och berättelser, och fråga efter stopphändelsen för var och en. Fråga om den som bad om det skulle hålla med om att arbetet var klart i det ögonblicket. Meningsskiljaktigheter pekar på en klocka som stoppar för tidigt. Enas om en stopphändelse per typ och skriv ned den.

**3. Vilka av våra statusar är väntande, och hur länge står objekt i dem?**
Sätt arbetsflödet på en vägg och markera varje tillstånd som aktivt eller väntande. Be om typisk tid i varje väntande tillstånd ur den senaste månadens data. Det största väntande tillståndet är oftast en överraskning för någon. Välj en kö att undersöka närmare nästa månad.

**4. Vilken percentil lovar vi, och vad har systemet faktiskt åstadkommit?**
Visa fördelningen av cykeltider för det senaste kvartalet med medianen, den 85:e percentilen och den 95:e percentilen. Fråga vilket åtagande teamet för närvarande ger kunder och var det hamnar på fördelningen. Diskutera kostnaden för att lova en snabbare tid än systemet har levererat. Besluta om ett åtagande teamet kan uppfylla av egna skäl.

**5. Vem får pausa klockan, och varför?**
Lista paus- och väntelägestillstånden, vilka som kan använda dem och de angivna skälen. Läs ett stickprov av pausade objekt och fråga om kunden verkligen var orsaken. Diskutera vad som skulle hända om pausandelen visades i samma diagram som SLA-resultatet. Facilitatorn bör hålla tonen nyfiken, eftersom pauslägen ofta finns av legitima skäl som aldrig skrevs ned.

**6. Om flödeseffektiviteten fördubblades nästa kvartal, vad skulle vi ha ändrat i hur arbetet rör sig?**
Be gruppen nämna specifika köer, överlämningar, godkännanden eller batchstorlekar som skulle behöva ändras. Om svaren är allmänna, till exempel "arbeta hårdare" eller "kommunicera bättre", är talet ännu inte kopplat till någon åtgärd. Välj en konkret ändring, förutsäg dess effekt på väntetiden i ett namngivet tillstånd och enas om när ni ska kontrollera.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam äger cykeltidsklockan och ser dess detaljer på tavlan. De tjänar mest på att klassificera tillstånd ärligt, begränsa pågående arbete och läsa spridningsdiagrammet i sina egna retrospektiv. De bör motstå trycket att dela upp arbete i konstgjort små bitar som blir klara snabbt och inte levererar något, och bör visa åldern på öppna objekt bredvid slutförda cykeltider (se ämne 2.1, Flödesmått).

### Service- och driftteam

Serviceteam arbetar med poster som bär formella serviceklockor, och deras pauslägen är där förfluten tid och SLA-tid skiljer sig åt. De bör redovisa båda klockorna, segmentera efter typ och prioritet och registrera orsaken till varje paus. Driftteam är också de naturliga ägarna av köer för godkännanden, underhållsfönster och leverantörssvar, som ofta dominerar den väntetid produktteam ser (se ämne 3.5, Mätetal för uppfyllande av serviceförfrågningar).

### Ledning och styrning

Ledare ber om ledtid eftersom den är siffran närmast det kunden upplever. De bör förvänta sig en definition, en fördelning och en segmentering med varje siffra, och bör fråga var väntan finns innan de frågar varför människor är långsamma. Mål för de här måtten fungerar bäst när de gäller en tjänst eller en värdeström med en namngiven ägare, och när de sätts utifrån vad systemet har levererat. Ett mål som tillämpas på ett medelvärde inbjuder till omklassificering och klockspel.

### Kunder och användare

Kunder upplever ledtid, inklusive all väntan innan arbetet börjar och all väntan efter att teamet tror att det är klart. De behöver en ärlig uppskattning uttryckt som ett intervall, till exempel "de flesta förfrågningar som den här är klara inom en vecka, och nästan alla inom två", och de behöver veta när en paus tillämpades för att teamet väntade på dem. Rapporter till kunder bör ange vilken klocka de använder (se ämne 5.1, Mätetal för SLA, OLA och XLA).

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på ett regionalt sjukhus driver en servicedesk, ett infrastrukturteam och ett applikationsteam som stöder klinisk personal. Alla siffror i det här exemplet är illustrativa.

Servicedesken rapporterar att standardförfrågningar om åtkomst når sitt mål på 5 arbetsdagar i 94 procent av fallen, men avdelningschefer på vårdavdelningarna fortsätter att klaga på att åtkomst tar "ungefär två veckor". Chefen för serviceverksamheten ber teamet mäta ledtid och cykeltid för dessa förfrågningar under ett kvartal, med förfluten kalendertid ur den råa statushistoriken i stället för SLA-timern.

Resultatet för 400 förfrågningar (illustrativt) är en mediancykeltid på 3 dagar och en 85:e percentil på 9 dagar. Ledtiden, mätt från det ögonblick chefen först mejlade den delade brevlådan, har en median på 8 dagar och en 85:e percentil på 16 dagar. Två fynd förklarar glappet. För det första väntar förfrågningar i genomsnitt 3 dagar i brevlådan innan någon skapar ett ärende, vilket är osynligt för SLA:n. För det andra står statusen "väntar på godkännande" för det mesta av cykeltiden: av den 85:e percentilens 9 dagar går ungefär 6 åt till att vänta på att en avdelningschef ska godkänna. Bearbetningstiden på ett stickprov av 30 förfrågningar är ungefär en halv dag, så flödeseffektiviteten är ungefär 8 procent (illustrativt). SLA-resultatet är högt eftersom timern stoppar under "väntar på godkännande" och "väntar på kund", så klockans pausandel är 52 procent av cykeltiden.

Teamet fattar tre beslut. Det lägger till ett webbformulär som skapar ärendet vid första kontakten, så att ledtidsklockan startar där kundens gör. Det kommer överens med avdelningscheferna om att godkännanden för en definierad lista med standardroller är förhandsgodkända, med en kvartalsvis revision i stället för ett godkännande per förfrågan. Och det lägger till pausandel och ledtid i den månatliga tjänstegranskningen bredvid SLA-resultatet. Efter ett kvartal faller medianledtiden till 4 dagar och den 85:e percentilen till 8 dagar (illustrativt), medan SLA-resultatet knappt rör sig.

Under granskningen fångar teamet en manipulationsrisk. En tekniker har börjat flytta ärenden till "väntar på kund" så snart ett godkännandemejl skickats, vilket inte är vad statusen var avsedd för. Pausandelen för den gruppen stiger, revisionen av ett stickprov av pausade ärenden visar mönstret, och teamet skriver om klockreglerna så att bara en begäran om information från den som bad om det kan pausa klockan. Skyddsräcket som fångade problemet var att redovisa pausandelen bredvid SLA-resultatet, vilket är den parning som rekommenderas i det här ämnet.

## Agilitet, AI, automatisering och analys

### Agilitet

Kontinuerlig leverans kortar loopen från en idé till en användares händer, så ledtid är det mått en intressent känner. En bra praxis är att med intressenter besluta var ledtiden startar, till exempel när en förfrågan accepteras, och hålla den definitionen stabil. Varningen är att ett team kan krympa cykeltiden genom att starta klockan senare, så redovisa alltid ledtid från kundens sida också.

### AI

AI-verktyg kan korta bearbetningstiden för utkast och kodning medan väntetiden förblir oförändrad eller längre, så flödeseffektiviteten kan falla även när människor känner sig snabbare. Redovisa bearbetningstid och väntetid separat för AI-stött arbete och para dem med omarbete. Varningen är att en minskning av cykeltiden kan komma av ett grundare granskningsdjup, så stickprova ändringar för att se om kvaliteten höll.

### Automatisering

Beräkna varje klocka ur händelsetidsstämplar i stället för ur fält som människor skriver in, och registrera varje paus med en orsak. Mät automatiseringen själv efter hur mycket väntetid den tar bort och hur ofta den lägger till en ny kö, till exempel ett manuellt godkännandesteg den inte kan hoppa över. Varningen är att retroaktiva statusredigeringar kan skriva om historien, så logga redigeringar.

### Analys

Redovisa percentiler av ledtid och cykeltid och visa kvoten mellan bearbetningstid och ledtid som en trend. Beslutet detta ger underlag för är var väntan ska tas bort, vilket oftast är mellan team. Varningen är att flödeseffektivitet beror på hur finkornigt bearbetningstid registreras, så behandla den som en grov vägledning och inte som en exakt kvot.

## Branschperspektiv

**Startup.** Med ett litet team och få överlämningar är cykeltid lätt att mäta från tavlan och ledtiden ligger nära cykeltiden. Följ båda från dag ett med en enkel tillståndsklassificering och titta på spridningsdiagrammet varje vecka. Flödeseffektiviteten är oftast redan hög för små uppgifter, så den främsta faran är ett informellt intag som döljer förfrågningar i chatten.

**Småföretag.** En enda person kan vara både beställare, godkännare och utförare, och den hostade servicedesken kanske bara erbjuder en SLA-timer. Exportera den råa statushistoriken, beräkna förfluten tid själv och behåll en definition för varje klocka. Det mest användbara fyndet är vanligen hur länge förfrågningar väntar på svar från leverantörer.

**Storföretag.** Många överlämningar mellan team, leverantörer och godkännandenämnder gör väntetiden stor och spridd över organisationer. Enas om ett gemensamt vokabulär för start, stopp och paus, klassificera tillstånd konsekvent över ITSM- och utvecklingsverktyg och segmentera efter arbetstyp och servicenivåklass. Jämförelser mellan team är meningsfulla först när definitionerna är samordnade, och en sammanställning bör byggas ur fördelningar, inte genom att medelvärdesbilda teamens medelvärden.

**Offentlig sektor.** Lagstadgade svarstider, upphandlingsregler och godkännandekedjor skapar väntan som teamet inte kan ta bort på egen hand. Registrera de externt pålagda klockorna separat från de interna, så att den del av fördröjningen som organisationen styr över kan ses och förbättras. Offentlig redovisning av ledtid, med enkla definitioner, skapar förtroende och blottlägger köerna som policy skapar (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Huvudmotivet är att tidsmått förvandlar ett vagt klagomål ("det tar en evighet") till ett lokaliserat problem ("förfrågningar väntar sex dagar på godkännande"). Samma data ger team en sanningsenlig prognos, så att åtaganden gentemot kunder bygger på fördelningen av tidigare arbete i stället för hopp. De visar också var en investering i automatisering, godkännanden eller bemanning skulle korta den förflutna tiden, vilket ofta är ett annat ställe än där människor väntar sig.

Kostnaderna är måttliga när verktygen redan registrerar tillståndsändringar. Uppsättningen innebär att enas om definitionerna, klassificera tillstånden och bygga en vy av fördelningen och spridningsdiagrammet. Driftkostnaderna är tiden för att underhålla tillståndsklassificeringen, granska pausorsaker på ett stickprov och hålla den månatliga granskningen. Där tillståndshistorik saknas eller är opålitlig är den första investeringen den instrumentering som beskrivs i ämne 1.5, Datakällor och instrumentering.

Avkastningen visar sig i mönster ett team kan mäta själv: en kortare cykeltid vid hög percentil för en arbetstyp, färre eskaleringar om sena objekt, färre tvister om vems klocka som är rätt och ett mindre glapp mellan ledtid och cykeltid. Räkna inte med en viss vinst utifrån ett riktmärke. Lean- och flödesförfattare beskriver låg flödeseffektivitet som vanlig, men ingen publicerad siffra bör antas som mål för ditt eget arbete utan dina egna data. Den totala ägandekostnaden domineras av människors tid, så räkna timmarna för mätetalsägaren och granskarna.

## Antimönster och fallgropar

- **Att redovisa medelvärdet.** Ett långt extremvärde drar upp genomsnittet och det typiska objektet beskrivs fel. Redovisa medianen och en hög percentil och rita objekten.
- **Ett tal för allt arbete.** Att blanda incidenter, förfrågningar och funktioner ger en fördelning som inte beskriver något. Segmentera efter arbetstyp och servicenivåklass först.
- **Att bara mäta SLA-klockan.** En timer som stoppar under väntande tillstånd redovisar ett resultat som kunden aldrig upplever. Redovisa förfluten ledtid och pausandelen bredvid.
- **Att sätta ett mål för flödeseffektivitet.** Människor höjer kvoten genom att döpa om tillstånd. Använd den som diagnostik och bedöm framgång efter väntetiden i namngivna köer.
- **Att starta klockan på fel ställe.** En klocka som börjar vid tilldelning eller första arbete döljer intagskön. Starta ledtid vid förfrågan och cykeltid vid åtagandet och publicera båda.
- **Att jämföra team efter cykeltid.** Olika arbete, olika tillstånd och olika definitioner gör rangordningar meningslösa och inbjuder till manipulation. Jämför ett team med dess egen historik och jämför tjänster först när definitionerna är samordnade.
- **Att ignorera öppna objekt.** Cykeltid räknar bara slutfört arbete, så ett fastnat objekt är osynligt tills det tar slut. Följ åldern på objekt som fortfarande pågår (se ämne 2.1, Flödesmått).
- **Att ändra definitioner i tysthet.** Trenden registrerar då en förändring i instrumentet. Logga varje ändring och markera den i diagrammet.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Definitioner och klockor | Människor citerar varaktigheter ur minnet; var och en startar klockan olika | Vissa team definierar cykeltid på sin tavla; ITSM-team citerar SLA-tid | En skriven definition av ledtid, cykeltid och pauser som används av alla team | Definitionsändringar loggas och historiken räknas om från råa händelser | Definitioner samordnade med leverantörer och kunder och reviderade när de slutar ge underlag för beslut |
| Redovisning och analys | Medelvärden i en bild, sammanställda för hand | Vissa team visar medianer eller ett diagram från verktyget | Median och en hög percentil, med ett spridningsdiagram, segmenterat efter arbetstyp | Fördelningar följs över tid och granskas i en rytm; prognoser dras ur dem | Flödesdata över team och leverantörer kombineras för att prognostisera åtaganden från början till slut |
| Väntan och flödeseffektivitet | Väntan skiljs inte från arbete | Blockerade kolumner finns på vissa tavlor | Varje status klassad som aktiv eller väntande; flödeseffektivitet beräknad på alla slutförda objekt | De största köerna undersöks och finansieras för förbättring; pausorsaker granskas | Köer, godkännanden och överlämningar utformas om gemensamt med de team och leverantörer som skapar dem |
| Användning i beslut | Siffror visas vid en kvartalsgranskning och agerar man inte på | Team diskuterar cykeltid i retrospektiv | Servicemål sätts utifrån den observerade fördelningen | Mål paras med skyddsräcken och granskas för manipulation | Kunder ser ärliga intervall, och förbättringsidéer kommer från alla som rör arbetet |

## Checklista

- [ ] Varje tidsmått har en skriven starthändelse, stopphändelse och lista över undantag i mätetalsregistret.
- [ ] Ledtid och cykeltid redovisas båda, och varje diagram är märkt med den det visar.
- [ ] "Klart" är definierat för varje arbetstyp och överenskommet med den som bad om arbetet.
- [ ] Resultat redovisas som medianen och en hög percentil, och objekten ritas.
- [ ] Data är segmenterad efter arbetstyp och, där det är relevant, servicenivåklass.
- [ ] Varje status är klassad som aktiv, väntande eller klar, och klassificeringen granskas varje kvartal.
- [ ] Pausstatusar, vem som får använda dem och deras skäl är nedskrivna och granskas på ett stickprov.
- [ ] Förfluten tid och SLA-tid visas sida vid sida, med pausandelen.
- [ ] Flödeseffektivitet används som diagnostik och finns inte på ett styrkort.
- [ ] Definitionsändringar loggas och markeras i diagrammen.
- [ ] Åldern på öppna objekt granskas tillsammans med slutförda cykeltider.

## AI-prompter

**Skriv utkast till klockregler för en arbetstyp.**

```text
We handle [work type, for example standard access requests] in [tool or tools].
The workflow statuses are [list of statuses]. Draft written clock rules for lead
time and cycle time: the event that starts each clock, the event that stops it,
which statuses pause or exclude time, and what happens to cancelled and reopened
items. Point out statuses whose meaning is ambiguous and questions I should
answer before the rules are final. Do not invent features of our tool or
benchmark values. List your assumptions.
```

**Klassificera statusar som aktiva eller väntande.**

```text
Here is the workflow for [team or service]: [statuses with a one-line meaning
for each]. For each status, propose whether it is active work, waiting, or done,
and explain why. Flag statuses that mix working and waiting, and suggest how to
split them with the smallest change to the workflow. Say how the classification
would change the calculation of flow efficiency. Do not assume how long items
stay in each status. List your assumptions.
```

**Analysera en uppsättning cykeltider.**

```text
Below are cycle times in [unit] for [number] finished items of type [work type],
with finish dates: [data]. Describe the distribution using the median and the
[percentile, for example 85th] percentile, identify clusters or drift over time,
and suggest questions to ask the team about the slow items. Recommend how many
items I need before the percentiles are trustworthy, and explain the reasoning.
Do not invent benchmark values or compare with other organizations. List your
assumptions.
```

**Granska ett mätetal för manipulation.**

```text
We report [metric, for example flow efficiency] for [team or service], defined
as [definition and clocks]. People can influence it by [known behaviors, if
any]. List plausible ways the number could be gamed or misread, a paired
guardrail metric or practice for each, and a sample of records I should read by
hand to check. Do not invent statistics about how often gaming occurs. List
your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta ämnet som definierar ett tidsmått och skyddsräcket som hör bredvid.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett redigerat tidsmått anger sina klockor, undantag och manipuleringsvektor.

## Viktigaste slutsatser

- Ledtid är kundens väntan och cykeltid är teamets väntan, så behåll båda och granska glappet mellan dem.
- Skriv start-, stopp- och pausreglerna för varje klocka och behandla en ändrad definition som en händelse.
- Redovisa medianen och en hög percentil, rita objekten och segmentera efter arbetstyp innan du jämför något.
- Flödeseffektiviteten är oftast låg eftersom det mesta av den förflutna tiden är väntan, så använd den för att lokalisera köer och undvik att göra den till ett mål.
- Visa pausandelen bredvid varje servicenivåresultat som utesluter pausad tid.
- Minska pågående arbete och ta bort överlämningar för att korta tiden, eftersom att säga åt människor att skynda sig inte ändrar köerna.

## Referenser och vidare läsning

1. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. DeGrandis, D., *Making Work Visible: Exposing Time Theft to Optimize Work and Flow*, IT Revolution, 2017.
6. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
12. Wikipedia, [Cycle time](https://en.wikipedia.org/wiki/Cycle_time).
13. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
14. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
