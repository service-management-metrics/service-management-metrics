# Mätetal för backlog och förfining

**En backlog är en kö av löften, så mät hur många löften som väntar, hur länge de har väntat och hur stor del av nästa stunds arbete som verkligen är redo, och behandla en växande hög av gamla objekt som ett beslut du ännu inte har fattat.**

## Översikt och motiv

Varje team som bygger eller driftar en tjänst för en lista över arbete det har gått med på att överväga. I agil praxis är den listan [produktbacklogen](https://en.wikipedia.org/wiki/Product_backlog), en ordnad uppsättning objekt som beskriver vad som kan göras för att förbättra produkten. På en flödestavla är motsvarigheten de objekt som väntar till vänster om de påbörjade kolumnerna. I it-tjänstehantering (ITSM), så som den beskrivs av [ITIL](https://en.wikipedia.org/wiki/ITIL), är motsvarigheterna de öppna incidenterna, serviceförfrågningarna, problemen och ändringarna som väntar i en kö. Alla dessa är backlogar. De skiljer sig i vem som fyller dem, hur fort objekt måste lämna dem och vad det betyder att ett objekt väntar.

De flesta data kommer från ett [ärendehanteringssystem](https://en.wikipedia.org/wiki/Issue_tracking_system) eller ett ITSM-verktyg. Backlogmått besvarar en enkel fråga: står mängden utlovat arbete i proportion till kapaciteten att utföra det, och är det utlovade arbetet fortfarande värt att göra? En backlog som växer utan gräns beskriver inte en plan. Den beskriver en önskelista, och varje läsare av den, från produktägaren till kunden som väckte ett objekt, kommer att bilda sin egen uppfattning om när det blir gjort. Det ärliga svaret är ofta "aldrig", och kostnaden för att inte säga det betalas i förtroende, i tid som läggs på att läsa om gamla objekt och i beslut som fattas på inaktuell information.

Förfining är aktiviteten som håller en backlog användbar. I agil praxis är förfining av produktbacklogen det pågående arbetet att lägga till detaljer, uppskattningar och ordning till objekt så att de är redo att påbörjas. Team som drar arbete allteftersom kapacitet frigörs kallar ofta samma aktivitet påfyllning eller backlogstädning. I ITSM visar den sig som triage, kategorisering och städning av en lista över kända fel eller problem. Måtten i det här ämnet mäter backlogens storlek och ålder, hur mycket arbete som är redo och hur väl förfiningen håller ett fönster av redo arbete framför teamet.

Fyra termer återkommer. Ett **objekt** är en enskild post i en backlog, till exempel en [användarberättelse](https://en.wikipedia.org/wiki/User_story), ett fel, en serviceförfrågan eller en problempost. **Objektets ålder** är den förflutna tiden sedan objektet kom in i backlogen, vilket skiljer sig från ålder på arbetsobjekt i flödesmätning, där klockan startar när arbetet börjar (se ämne 2.1, Flödesmått). **Redo** betyder att ett objekt uppfyller ett teams skrivna definition av redo, så att teamet kan påbörja det och räkna med att slutföra det inom ett servicenivåfönster. **Förfining** är arbetet att göra objekt redo och att ta bort objekt som aldrig kommer att göras.

Produkt- och servicebacklogar beter sig olika, och att blanda dem är det vanligaste felet på det här området. En produktbacklog är en plats där objekt medvetet hålls tills produktägaren avgör deras ordning. Väntan är ett normalt tillstånd, och ett gammalt objekt är ett skäl att fråga om det fortfarande spelar roll. En servicebacklog av incidenter och förfrågningar är en kö med ett löfte knutet till sig: kunden förväntar sig ett svar inom en viss tid. Väntan där är en kostnad för kunden från första minuten. En produktbacklog bör rensas; en servicebacklog bör tömmas. Lägg de två i ett diagram och diagrammet kommer att vilseleda.

Det agila synsättet behandlar backlogen som en levande artefakt som ägs av en produktägare, hålls tillräckligt kort för att förstås och ordnas efter värde. ITIL-synsättet behandlar öppna poster som pågående arbete mot en överenskommen servicenivå, ägt av en praktik. Båda synsätten delar ett faktum ur köteorin: en kö som får objekt fortare än den släpper ut dem kommer att växa, och tiden ett objekt väntar växer med kön (se ämne 2.3, Pågående arbete och köteori). [Littles lag](https://en.wikipedia.org/wiki/Little%27s_law) länkar könstorleken, takten i vilken objekt lämnar och den genomsnittliga tid ett objekt tillbringar i systemet, och det är skälet till att backlogens storlek och backlogens ålder är två vyer av samma sak.

En sista distinktion håller ämnet ärligt. En backlog är inte ett mått på produktivitet eller på hur upptaget ett team är. En stor backlog kan betyda en populär produkt, en dåligt rensad lista eller ett team med för lite resurser, och siffran ensam kan inte säga vilket.

## Nyckelprinciper

- **Mät ålder såväl som storlek.** Storlek säger hur mycket som väntar; ålder säger hur länge, och de äldsta objekten visar var beslut undviks.
- **Håll produkt- och servicebacklogar åtskilda.** En hållen idé och en väntande kund är olika saker, och var och en behöver sin egen avläsning.
- **Sikta på redo arbete, inte en lång lista.** Några veckors redo, väl ordnat arbete är värt mer än tusen objekt som ingen har tittat på.
- **Rensning är en funktion.** Att ta bort ett objekt du aldrig kommer att göra är ärligt arbete, och en kasseringsgrad som aldrig är över noll är en varning.
- **Använd fördelningar.** Redovisa medianen och den 85:e percentilen av objektens ålder och visa det äldsta objektet, eftersom medelvärden döljer svansen.
- **Beskriv teamet och systemet.** Backlogmått visar hur arbete når ett team och hur det hanteras, aldrig hur en individ presterade.
- **Knyt varje siffra till ett beslut.** Om ett backlogdiagram inte skulle ändra vad du gör härnäst, avveckla det.

## Mätetalsdefinitioner

Mätetalen nedan gäller en enskild backlog i taget. Välj backlogen först (en produktbacklog, en incidentkö, en serviceförfrågningskö, en problemlista) och redovisa varje mätetal per backlog. Percentiler använder den metod för [percentiler](https://en.wikipedia.org/wiki/Percentile) som anges i ämne 1.6, Statistisk läskunnighet för tjänstemätetal.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Backlogens storlek | Antal öppna objekt i en namngiven backlog vid en tidpunkt | Antal objekt med status öppen eller redo på ögonblicksbildens datum; utesluter objekt under arbete och stängda objekt | objekt | Ögonblicksbild från ärendehanteringssystem eller ITSM-verktyg | Incidenthantering; hantering av serviceförfrågningar; problemhantering | Produktbacklog; intagskö | Veckovis |
| Backlogens ålder | Fördelning av hur länge öppna objekt har väntat | För varje öppet objekt, ögonblicksbildens datum minus datumet då det kom in i backlogen; redovisa medianen, 85:e percentilen och det äldsta objektet | dagar | Skapande- och statushistorik i ärendehanteringssystem eller ITSM-verktyg | Incidenthantering; problemhantering; ständig förbättring | Backlogens hälsa; granskning av åldrade objekt | Veckovis |
| Djup på redo arbete | Hur långt framåt teamet har redo arbete | Objekt som uppfyller definitionen av redo / genomsnittligt antal objekt som slutförts per vecka under de senaste sex perioderna | veckor | Redo-flagga och genomflödeshistorik i ärendehanteringssystemet | Verksamhetsanalys; hantering av serviceförfrågningar | Definition av redo; förfining | Per planeringsperiod |
| Förfiningstäckning | Andel av närtidsfönstret som är redo | Objekt i de följande två tvåveckorsperioderna av förväntat arbete (eller de översta N efter ordning) som uppfyller definitionen av redo / objekt i det fönstret | procent | Ordning, redo-flagga och planerat arbete i ärendehanteringssystemet | Verksamhetsanalys; ändringsmöjliggörande (för planerad ändring) | Förfining av produktbacklogen | Per planeringsperiod |
| Inflödes-utflödeskvot för backlog | Om objekt anländer fortare än de lämnar | Objekt som lagts till under perioden / objekt som tagits bort från backlogen genom slutförande eller kassering under samma period; en kvot över 1 betyder tillväxt | kvot | Skapande- och lösningshändelser i ärendehanteringssystem eller ITSM-verktyg | Incidenthantering; hantering av serviceförfrågningar; kapacitets- och prestandahantering | Ankomst- och avgångstakter | Veckovis |
| Kasseringsgrad för backlog | Andel objekt som lämnar utan leverans | Objekt som stängts som ska inte göras, dubblett eller föråldrat / alla objekt som lämnat backlogen under perioden; utesluter objekt som stängts som klara | procent | Lösningsfält i ärendehanteringssystemet | Ständig förbättring; problemhantering (granskning av kända fel) | Rensning av backlogen; produktägarens ordning | Månadsvis |
| Servicebacklog bortom mål | Andel öppna serviceobjekt som är äldre än sitt överenskomna svars- eller lösningsfönster | Öppna objekt vars förflutna tid överstiger servicemålet / alla öppna objekt i kön; klockan löper från loggning och pausar bara i tillstånd som den skrivna definitionen tillåter | procent | ITSM-verktyg med serviceklocka | Hantering av servicenivåer; incidenthantering; hantering av serviceförfrågningar | Expressfil; förväntad servicenivå | Dagligen eller veckovis |

Tre klockor behöver anges tydligt. Backlogens ålder startar när objektet skapas i backlogen och stoppar när det lämnar genom slutförande eller kassering, så ett objekt som öppnas på nytt startar en ny ålder. Djup på redo arbete använder genomflöde från endast slutförda objekt, aldrig planerad velocity, eftersom planerad velocity är en prognos. Servicebacklog bortom mål använder serviceklockan, som kan skilja sig från backlogens ålder på grund av tillåtna pauser (se ämne 5.1, Mätetal för SLA, OLA och XLA).

## Rekommendationer

### Ställ in backlogen så att den kan mätas

**1. Namnge varje backlog och dess ägare.** Varje backlog inom omfattningen har en ägare, ett syfte och en lista över objekttyper. En produktbacklog tillhör en produktägare; en incidentkö tillhör servicedesken eller lösargruppen. Utan en namngiven ägare avgör ingen när ett gammalt objekt ska bort.

**2. Skilj hållna objekt från köade löften.** Märk varje objekt som antingen en idé teamet håller för ordning eller ett åtagande någon väntar på. Redovisa backlogens storlek och ålder separat för vardera. En supportförfrågan som ligger i en produktbacklog är ett köat löfte på fel plats, och den förtjänar en serviceklocka.

**3. Skriv definitionen av redo och håll den kort.** En definition av redo listar de få saker ett team behöver veta innan det börjar: det eftersträvade resultatet, en grov storlek, acceptansvillkoren och eventuella beroenden. Håll den till en handfull rader och revidera den när den slutar förutsäga smidigt arbete. En lång checklista förvandlar förfining till pappersarbete och inbjuder till att kryssa rutor.

**4. Registrera inkomstdatumet och avgångsorsaken.** Ålder och kasseringsgrad beror båda på två fält: datumet då ett objekt kom in och orsaken till att det lämnade. Gör båda obligatoriska i verktyget och lägg till en kontrollerad lista med avgångsorsaker som klart, dubblett, föråldrat och ska inte göras. Saknade datum är den vanligaste orsaken till oanvändbar backlogålder (se ämne 1.5, Datakällor och instrumentering).

### Läs storlek och ålder tillsammans

**5. Redovisa backlogens ålder som en fördelning.** Visa medianen, den 85:e percentilen och det äldsta objektet samt ett histogram per åldersband som under 30 dagar, 30 till 90, 90 till 180 och över 180. En platt genomsnittsålder kan dölja en växande hög av uråldriga objekt eftersom nya objekt drar ner genomsnittet. Vyn över det äldsta objektet är den svåraste att dölja.

**6. Använd inflödes-utflödeskvoten för att se tillväxt tidigt.** En kvot som ständigt ligger över 1 betyder att backlogen kommer att växa, oavsett nuvarande storlek. Rita den som en rullande fyraveckorssiffra för att jämna ut helger och releaseveckor. Para den med genomflöde så att teamet kan se om tillväxten kommer från stigande efterfrågan eller fallande leverans (se ämne 2.1, Flödesmått).

**7. Omvandla storlek till tid med genomflöde.** Dividera backlogens storlek med genomsnittligt antal objekt som slutförs per period för att få ett grovt antal perioder av väntande arbete, en direkt användning av Littles lag. Ange tydligt att det är ett medelvärde, inte ett löfte, och visa intervallet med ett lägre och ett högre genomflöde från nyliga perioder. En produktbacklog på hundra objekt som motsvarar ett års arbete är ett samtal om omfattning, inte ett schema.

### Håll förfiningen flytande

**8. Sikta på ett fönster av redo arbete, inte en full backlog av det.** Förfina tillräckligt för nästa en till tre veckors arbete och inte mer. Detaljer som läggs till i ett objekt som inte påbörjas på sex månader blir oftast inaktuella, så mät djup på redo arbete och låt det flyta inom ett målband, till exempel en till tre veckors arbete, som teamet väljer och ser över. Ett djup långt över bandet är slöseri; ett djup under en veckas arbete är en risk för tomgång eller forcerad planering.

**9. Mät förfiningstäckning på de objekt som är på väg att påbörjas.** Förfiningstäckningen tittar bara på toppen av ordningen. Den besvarar frågan planeringsmötet kommer att ställa: om vi startade nu, skulle de närmaste objekten vara redo? Redovisa den strax före planeringen, när en miss fortfarande kan rättas, snarare än efteråt.

**10. Gör förfining till en regelbunden, kort aktivitet.** Agil vägledning, inklusive Scrum Guide, beskriver förfining som en pågående aktivitet och överlåter formen åt teamet. Många team tycker att en kort, tät session fungerar bättre än ett långt möte.

### Rensa och granska

**11. Rensa enligt schema och redovisa kasseringsgraden.** Granska de äldsta objekten varje månad och fråga om var och ett: kommer vi att göra det här inom de närmaste sex månaderna, och om inte, varför behålla det? Att stänga ett objekt med angivet skäl är inte ett misslyckande. Ett team som aldrig kasserar hamstrar förmodligen, och ett som kasserar det mesta det får in accepterar förmodligen arbete det borde ha avböjt vid dörren.

**12. Hantera servicebacklogar genom att tömma, inte rensa.** För incident- och förfrågningsköer är den första frågan om objekt ligger inom sitt servicefönster. Följ andelen bortom mål och det äldsta öppna objektet och behåll expressfilen för objekt som inte kan vänta. Problem- och kända fel-listor ligger mellan de två världarna: de hålls tills en rättelse finansieras, så granska dem som en produktbacklog, med ett angivet granskningsdatum för varje post (se ämne 4.6, Teknisk skuld och kända fel).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Backlogens storlek | Att stänga objekt i bulk som föråldrade, dela upp objekt för att se upptagen ut eller dölja arbete i sidolistor och kalkylblad | Kasseringsgrad för backlog med avgångsorsaker; periodisk jämförelse av verktyget mot den verkliga förteckningen över förfrågningar; kundåterkoppling om kasserade objekt |
| Backlogens ålder | Att nollställa inkomstdatumet genom att klona eller återskapa gamla objekt; att flytta objekt mellan backlogar; att öppna på nytt i stället för att väcka på nytt för att ändra klockan | Revision av klonade och flyttade objekt; granskning av det äldsta objektet; ålder mätt från första skapande över länkade poster |
| Djup på redo arbete | Att markera objekt redo utan att kontrollera dem; att blåsa upp djupet genom att skriva detaljerade objekt för arbete med lågt värde | Stickprov av redo objekt lästa mot definitionen; omarbetnings- eller retur-till-förfining-grad när arbetet startar |
| Förfiningstäckning | Att kryssa redo-flaggan för att nå talet; att smalna av fönstret så att färre objekt räknas | Antal objekt som skickats tillbaka efter planering; måluppfyllelse i leverans och omfattningsändring mitt i perioden (se ämne 2.5, Mätetal för leveransprognoser och planering) |
| Inflödes-utflödeskvot för backlog | Att snabbt stänga de lätta objekten för att driva upp utflödet, eller vägra nya objekt vid dörren för att hålla inflödet nere | Ålder på de äldsta objekten; kasseringsgrad; andel förfrågningar som avvisats utan skäl; kundrapporterade obemötta behov |
| Kasseringsgrad för backlog | Att kassera objekt som användare fortfarande vill ha, för att krympa storleken; eller att undvika kassering så att talet ser milt ut | Granskning av ett stickprov av kasserade objekt med den som bad om dem; återöppnings- och återväckningsgrad för kasserade objekt |
| Servicebacklog bortom mål | Att pausa klockan med ett väntar-på-kund-tillstånd, nedgradera prioritet eller stänga och öppna på nytt för att nollställa fönstret | Andel tid i pauslägen; återöppningsgrad (se ämne 1.2, Goodharts lag och mätetalens psykologi); användarnöjdhet för stängda ärenden |

En sund avläsning visar en backlog vars storlek är stadig eller långsamt fallande, vars äldsta objekt är få och vart och ett har en ägare och ett angivet skäl, och vars närtidsfönster mestadels är redo. Inflödes-utflödeskvoten ligger nära 1, kasseringsgraden är varken noll eller dominerande och förfiningstäckningen stiger utan att planerat arbete blir skörare. När siffrorna ser bra ut men kunder fortfarande rapporterar att ingenting händer med deras förfrågningar, lita på kunderna och granska datan.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Liten, aggressivt rensad produktbacklog | Lätt att förstå och hålla ordnad; ärlig om kapacitet | Risk att kassera idéer som skulle ha spelat roll senare; beställare kan känna sig ignorerade |
| Stor, bibehållen backlog | Bevarar varje idé och förfrågan; användbar historik | Kostsam att läsa; inaktuella objekt vilseleder planering och döljer verkliga prioriteringar |
| Djupt redo-fönster (många veckor förfinade) | Smidig planering; färre överraskningar när arbetet startar | Förfinade detaljer blir inaktuella; möda läggs på arbete som kanske aldrig startar |
| Grunt redo-fönster (ungefär en vecka) | Lite bortkastade detaljer; förblir flexibelt | Planering kan stanna av när några objekt inte är redo; mindre ledtid för att upptäcka beroenden |
| Strikt definition av redo | Färre vaga starter; förutsägbart arbete | Kan bli en port som bromsar flödet och uppmuntrar till att kryssa rutor |
| Lätt definition av redo | Snabb; litar på teamet | Mer upptäckt under arbetet; mer ändring mitt i perioden |

Det praktiska svaret är att hålla backlogen så liten att den kan läsas i ett sträck, behålla ett redo-fönster på ungefär en till tre veckors arbete och låta definitionen av redo vara så kort att människor minns den. Serviceköer kräver motsatt hållning: liten är inte ett mål, att bli klar inom det överenskomna fönstret är det. Välj den cell i varje rad som passar ditt sammanhang och skriv ned skälet.

## Frågor att diskutera med teamet

**1. Om vi slutade lägga till objekt i dag, hur lång tid skulle det ta att tömma backlogen vid vårt senaste genomflöde, och känns det talet trovärdigt?**
Börja med att dividera backlogens storlek med det typiska antalet objekt som slutförs per period och visa intervallet med de bästa och sämsta nyliga perioderna. Fråga om teamet tror på resultatet och vart tiden verkligen skulle ta vägen. Om talet är längre än ett år för en produktbacklog, fråga vilka objekt som kunde tas bort utan att någon märkte det.

**2. Vilka är de fem äldsta objekten, och vem bestämde att de fortfarande skulle vara kvar?**
Läs de fem äldsta objekten högt med deras inkomstdatum. Be för vart och ett om en namngiven ägare och ett skäl till att det finns kvar, till exempel väntan på ett beroende, en medveten uppskjutning eller försummelse. Enas om en åtgärd för vart och ett: schemalägg det, kassera det eller skriv ned varför det stannar och när man ska titta igen.

**3. Vad betyder "redo" här, och kom våra senaste överraskningar från objekt som inte var det?**
Be var och en skriva definitionen av redo med egna ord och jämför sedan. Skillnaderna är det första fyndet. Titta tillbaka på objekt som orsakade frågor eller omarbete mitt i perioden och fråga vad som hade gjort dem redo. Facilitatorn bör motstå att lägga till checklistepunkter för varje överraskning och i stället välja den eller de två som skulle ha förhindrat mest smärta.

**4. Vilka av våra backlogar håller idéer, och vilka håller löften till någon?**
Lista varje backlog och sortera dess objekt i de två slagen. Supportförfrågningar, incidenter och åtagna kundobjekt är löften och behöver en serviceklocka; idéer och förbättringar hålls för ordning. Diskutera var de två är blandade och vad det gör med åldersdiagrammet. Resultatet kan vara så enkelt som en etikett och ett filter som låter vardera redovisas för sig.

**5. När tog vi senast bort objekt med avsikt, och hur reagerade beställarna?**
Rensning känns ofta riskabel, så titta på beläggen. Kontrollera kasseringsgraden och stickprova några kasserade objekt. Fråga om beställaren fick veta det och om någon bad om att få tillbaka ett objekt. Facilitatorn bör hjälpa gruppen enas om ett enkelt budskap till beställare ("vi planerar inte att göra det här; här är varför; väck det igen om omständigheterna ändras") så att rensning blir rutin och respektfull.

**6. Om vi ville få våra backlogdiagram att se bättre ut utan att hjälpa någon, vad skulle vi göra?**
Kör manipulationsgranskningen från ämne 1.2 på varje backlogmätetal. Troliga svar inkluderar att stänga gamla objekt i bulk, klona objekt för att nollställa åldern, markera objekt redo i förtid och smalna av fönstret som täckningen räknar. Kontrollera för varje svar om skyddsräcket i tabellen ovan skulle fånga det. Registrera de som skulle slinka igenom och välj en ny kontroll att pröva nästa kvartal.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam använder backlogmått för att hålla planeringen lugn. Djup på redo arbete och förfiningstäckning talar om för teamet om nästa planeringssession blir smidig, och backlogens ålder visar vilka löften som i tysthet ruttnar. En bra vana är att granska ålder, inflöde-utflöde och redodjup i några minuter vid varje förfiningssession och sedan agera på en sak. Team bör publicera en liten, stabil uppsättning utåt och behålla detaljerade åldersband för eget bruk (se ämne 2.5, Mätetal för leveransprognoser och planering).

### Service- och driftteam

Driftteam driver köer med klockor. Deras centrala avläsning är andelen öppna objekt bortom mål tillsammans med det äldsta öppna objektet, uppdelat efter prioritet och pausläge. Problem- och kända fel-listor behöver ett granskningsdatum på varje post så att hållna objekt inte blir permanenta. Team bör också bevaka inflödes-utflödeskvoten för incidentkön, eftersom en kvot över 1 under flera veckor är ett tidigt tecken på underbemanning eller en återkommande orsak (se ämne 3.2, Incidentvolym och prioritet).

### Ledning och styrning

Ledare ser en backlog som ett avsiktsuttalande. En mycket stor backlog säger att organisationen lovar mer än den kan leverera, och en snabbt krympande kan betyda rensning eller minskad efterfrågan. Fråga vilket beslut siffran ger underlag för. Finansiera tid för förfining och rensning, undvik mål på rå backlogstorlek och be om åldersfördelningen och kassationsorsakerna när en storleksiffra presenteras (se ämne 1.3, Resultat före leverans: att välja vad som ska mätas).

### Kunder och användare

Kunder upplever backlogen som tystnad. Ett objekt som väcktes för sex månader sedan utan svar säger mer än något diagram. Användare värdesätter att få veta sanningen: det är planerat, det är inte planerat och här är varför, eller det väntar på ett beroende. Ge beställare ett sätt att se status på sina objekt och behandla kasserade objekt som en kommunikationsuppgift, inte en dataputsning (se ämne 3.5, Mätetal för uppfyllande av serviceförfrågningar).

## I praktiken: ett exempel från tjänstehantering

Ett medelstort regionalt försäkringsbolag driver en intern skadeapplikation med ett produktteam och en separat servicedesk. Siffrorna i det här exemplet är illustrativa.

Produktteamets backlog innehåller 412 objekt. Medianåldern är 138 dagar, den 85:e percentilen är 410 dagar och det äldsta objektet är 29 månader gammalt. Teamet slutför ungefär 14 objekt per tvåveckorsperiod, så backlogen motsvarar ungefär 29 tvåveckorsperioder av arbete vid det senaste genomflödet. Förfiningstäckningen för de närmaste två perioderna är 55 procent, och planeringen drar ofta över eftersom teamet upptäcker saknade detaljer. Servicedesken visar en annan bild: 63 öppna förfrågningar, varav 9 procent ligger bortom mål, och en inflödes-utflödeskvot nära 1.

En produktägare ber om ett mindre tal och föreslår ett mål på färre än 200 objekt vid kvartalets slut. Teamet vill inte behandla det som ett mål i sig. I stället håller det en genomgång. Det märker objekt som hållna idéer eller utlovat arbete och finner att 38 av de 412 är supportförfrågningar som kunder fått veta skulle hanteras. De flyttar dem till servicekön med en serviceklocka. De läser de äldsta 40 objekten och finner att 22 är föråldrade eller dubbletter. De stänger dem med avgångsorsaker och berättar för beställarna. De sätter ett redo-band på en till två tvåveckorsperioder och lägger en kort veckosession på att förfina bara toppen av ordningen.

Under tre tvåveckorsperioder faller backlogens storlek till 301 och kasseringsgraden för månaden är 31 procent, vilket är högt med avsikt och flaggas i granskningen. Förfiningstäckningen stiger till 88 procent. En snabb titt på datan avslöjar en manipulationsrisk: backlogens storlek föll fortare än väntat eftersom två teammedlemmar klonade en handfull åldrande objekt till nya för att undvika listan över gamla objekt. Teamet fångar detta när diagrammet över det äldsta objektet inte längre stämmer med kasseringsstickprovet. De enas om att mäta ålder från första skapande över länkade poster och att granska kloner vid varje rensningssession. Beslutet som registreras för ledningen är att släppa storleksmålet och i stället redovisa åldersfördelningen, redo-fönstret och kassationsorsakerna varje kvartal.

## Agilitet, AI, automatisering och analys

### Agilitet

Förfining håller nästa stunds arbete förstått och redo, i samtal med intressenter. En användbar praxis är att granska backlogens ålder och djup på redo arbete tillsammans och att ta bort eller besluta om objekt som väntat för länge. Varningen är att en backlog som städas bara för att se kort ut, genom att kassera objekt utan att berätta för beställarna, skadar förtroendet.

### AI

AI-verktyg kan generera och dela upp backlogobjekt i volym, vilket blåser upp backlogens storlek utan att tillföra värde. Mät djup på redo arbete och kasseringsgrad och para backlogens storlek med andelen AI-skapade objekt som når leverans. Varningen är att en stor AI-genererad backlog kan tillföra brus för dem som måste prioritera den.

### Automatisering

Hämta backlogens storlek och ålder ur ärendehanteringssystemet automatiskt och flagga objekt som passerar en åldersgräns för ett mänskligt beslut, inte för automatisk radering. Automatisering som stänger inaktuella objekt bör själv mätas för felaktigt stängda objekt. Varningen är att en bot som stänger gamla objekt förbättrar åldersiffran utan att svara beställaren.

### Analys

Visa åldersfördelningen och inflödes-utflödeskvoten över tid, med de äldsta objekten listade. Beslutet detta ger underlag för är vad som ska åtas, skjutas upp eller släppas. Varningen är att enbart backlogens storlek säger lite, eftersom en lång backlog av väl förstådda små objekt kan vara friskare än en kort av vaga objekt.

## Branschperspektiv

**Startup.** Backlogen är ofta en enda lista i grundarens huvud eller en enkel tavla. Följ bara åldern på de äldsta objekten och om nästa arbetsstycke är redo. Rensa hårt och ofta, eftersom rätt svar för en idé som är tre månader gammal ofta är att glömma den.

**Småföretag.** Produkt- och tjänstearbete delar vanligen team, så backlogen blandar hållna idéer och kundlöften. Skilj dem åt med en etikett tidigt. En enda lista som läses varje vecka i ett kort möte slår utarbetade mått. Bevaka åldern på kundvända objekt först, eftersom en glömd förfrågan kan kosta en relation.

**Storföretag.** Många team och många köer mångdubblar sätten att missförstå en backlog. Definiera mätetalen en gång, med klockorna och avgångsorsakerna, och undvik att rulla in produktbacklogens storlek i en enda portföljsiffra. Jämför ett team med dess egen historik, aldrig med ett annat team med annat arbete (se ämne 2.4, Mätetal för värdeström). Problem- och kända fel-listor förtjänar sin egen granskningsrytm.

**Offentlig sektor.** Åtaganden gentemot medborgare, lagstadgade svarstider och revisionsspår formar serviceköerna. Behandla de lagstadgade klockorna som fasta indata och redovisa andelen bortom mål med de definitioner som använts. Produktbacklogar kan begränsas av finansieringsomgångar och upphandling, så redo-fönstret kan behöva vara längre än i ett kommersiellt team. Håll kassationsorsaker synliga, eftersom offentlig ansvarsskyldighet gör tyst bortsortering riskabel.

## Affärscase: motiv, ROI och TCO

Kostnaden för de här mätetalen är måttlig. De flesta data finns redan i ärendehanteringssystemet eller ITSM-verktyget. Kostnaderna är ett obligatoriskt inkomstdatum och en avgångsorsak, en kort rensningssession varje månad, några minuter i förfining för att titta på ålders- och redodiagrammen och en del möda för att skilja produkt- och servicebacklogar åt. Ett kalkylblad eller verktygets inbyggda rapporter räcker för att börja, och ingen ny produkt behöver köpas.

Avkastningen kommer från undviket slöseri och tydligare löften. Team som behåller ett redo-fönster lägger mindre planeringstid på att återupptäcka vad ett objekt betyder, och team som rensar slutar läsa om objekt som aldrig kommer att göras. Kunder får ärliga svar tidigare, vilket minskar återkommande kontakter och eskaleringar. Beskriv nyttan i termer av mönster teamet själv kan kontrollera: kortare planeringssessioner, färre objekt som skickas tillbaka till förfining efter att arbetet startat, färre påminnelser om gamla förfrågningar och färre överraskningar när ledningen frågar vad som finns i pipelinen. Det här ämnet anger ingen procentsats, eftersom ingen kan ges utan en källa. Mät din egen baslinje under ett kvartal och jämför.

## Antimönster och fallgropar

- **Att behandla backlogens storlek som ett produktivitets- eller prestationsbetyg.** Storleken beror på efterfrågan, omfattning och rensningsvanor. Redovisa storlek med ålder och kassationsorsaker och jämför aldrig team på den.
- **Att blanda hållna idéer och kundlöften i en lista.** Åldersdiagrammet läses då som försummelse och serviceklockan saknas. Dela upp dem med en etikett och redovisa var för sig.
- **Att förfina allt.** Detaljerade objekt som inte påbörjas på månader blir inaktuella. Behåll ett redo-fönster och förfina precis före behovet.
- **Att aldrig kassera.** En ständigt växande lista gör varje uttalande om omfattning falskt. Rensa enligt schema och registrera skälet varje gång.
- **Att nollställa ålder genom att klona eller flytta objekt.** Det smickrar diagrammet och förlorar historik. Mät ålder från första skapande över länkade poster och granska kloner.
- **En definition av redo som används som port.** Om den blockerar arbete som teamet säkert kunde påbörja bromsar den flödet. Håll den kort och låt teamet åsidosätta den med ett angivet skäl.
- **Mål på rå storlek.** Ett mål på färre än N objekt inbjuder till massstängning. Sätt mål på åldern på de äldsta objekten eller andelen bortom servicemål, med ett skyddsräcke.
- **Att använda genomsnittsålder.** Nya objekt drar ner genomsnittet medan gamla hopar sig. Visa medianen, den 85:e percentilen och det äldsta objektet.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Definitioner och data | Inkomstdatum och avgångsorsaker saknas eller är inkonsekventa | Vissa team registrerar datum; definitioner av redo skiljer sig | En skriven definition av redo och av backlogens ålder; obligatoriskt inkomstdatum och avgångsorsak | Datakvaliteten stickprovas; ålder mäts över kloner och flyttar | Definitioner delas över team och leverantörer och revideras när de slutar ge underlag för beslut |
| Backlogens hälsa | Backlogen växer obemärkt; ingen rensning | Enstaka uppstädning när listan blir ohanterlig | Schemalagd rensning; produkt- och servicebacklogar åtskilda | Storlek, ålder, inflöde-utflöde och kasseringsgrad följs över tid och granskas med ett skyddsräcke | Backlogpolicy trimmas över team till efterfrågan och kapacitet; kunder ser status på sina objekt |
| Förfining | Ad hoc-detaljer läggs till vid planering | Regelbundna sessioner för vissa team | Kort, regelbunden förfining med ett överenskommet redo-fönster | Täckning och redodjup granskas och kopplas till leveransresultat | Förfining delas över team och beroenden; fönstret anpassas efter förhållanden |
| Användning i beslut | Siffror visas bara när något går fel | Redovisas till ledningen utan diskussion | Teamet granskar ålder och redodjup i förfining | Finansierat förbättringsarbete följer av granskningen | Backlogbelägg ger underlag för portfölj- och kapacitetsbeslut över organisationen |

## Checklista

- [ ] Varje backlog har en namngiven ägare och ett angivet syfte.
- [ ] Hållna idéer och kundlöften är märkta och redovisas separat.
- [ ] Varje objekt har ett obligatoriskt inkomstdatum och en avgångsorsak ur en kontrollerad lista.
- [ ] Teamet har en kort skriven definition av redo.
- [ ] Backlogens ålder redovisas som median, 85:e percentil och äldsta objekt.
- [ ] Inflödes-utflödeskvoten visas som en rullande siffra bredvid genomflöde.
- [ ] Ett redo-fönster är överenskommet, och djup på redo arbete redovisas mot det.
- [ ] Förfiningstäckning redovisas före planering, inte efter.
- [ ] En månatlig rensningssession finns i kalendern och kasseringsgraden redovisas.
- [ ] Serviceköer visar andelen bortom mål och användningen av pauslägen.
- [ ] Manipulationsgranskningen för backlogmätetal har körts det här kvartalet.

## AI-prompter

**Bedöm hälsan hos en backlog.**

```text
I work with [team name], which owns [type of backlog, such as a product
backlog or incident queue]. Here is a summary of the backlog: [number of
items], age distribution [median, 85th percentile, oldest item], items finished
per [week] [numbers], items added per [week] [numbers], and
discard reasons [counts]. Our definition of ready is: [definition].

Explain what this combination of figures could mean, listing at least three
different explanations, and suggest what extra data would tell them apart. Do not
invent benchmark values or targets. List your assumptions and anything you could
not determine from what I gave you.
```

**Skriv ett utkast till en definition av redo.**

```text
Help me draft a short definition of ready for [team name], which works on
[type of work]. Our current problems with unready items are: [list of
problems]. Propose no more than six criteria, say what problem each criterion
addresses, and describe how the team could check each one in under a minute.
Also suggest when the team should be allowed to start an item that does not meet
the definition. Do not copy any framework text. List your assumptions.
```

**Planera en rensningssession för backlogen.**

```text
Plan a [length of time] pruning session for the backlog of [team name]. The
backlog has [number] items, and the oldest are [age]. The leave reasons we
use are [list]. Propose an agenda, the questions to ask about each old item, a
simple message to send to requesters whose items are removed, and the data to
record afterward. Point out ways the session could be gamed and how to catch
them. Do not invent statistics. List your assumptions.
```

**Skilj produkt- och tjänstearbete i en blandad backlog.**

```text
Here is a sample of [number] items from our combined backlog in [tool name],
with fields [list of fields]. Classify each item as a held idea, a customer
promise with a service expectation, or unclear, and explain your reasoning. Then
suggest labels and a simple rule for routing future items. Report patterns, not
individuals, and do not guess at facts not present in the data. List your
assumptions and the items you could not classify.

[paste items, with personal data removed]
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket och de angränsande ämnena för ett backlogmätetal du är på väg att införa.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett reviderat backlogämne håller sina manipuleringsvektorer, skyddsräcken och korsreferenser konsekventa.

## Viktigaste slutsatser

- En backlog är en kö av löften, så läs storlek och ålder tillsammans och visa de äldsta objekten.
- Håll hållna idéer och kundlöften i separata vyer, eftersom väntan betyder olika saker i var och en.
- Sikta på ett kort fönster av redo arbete och mät förfiningstäckning på de objekt som är på väg att påbörjas.
- Rensa enligt schema, registrera varför objekt lämnar och behandla en kasseringsgrad på noll som en varning.
- Sätt mål på ålder och servicefönster, inte rå storlek, och para varje backlogmätetal med ett skyddsräcke.
- Backlogmått beskriver hur arbete når ett team och hur det hanteras och rangordnar aldrig människor.

## Referenser och vidare läsning

1. Schwaber, K., and Sutherland, J., *The Scrum Guide*, 2020, https://scrumguides.org/scrum-guide.html.
2. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
3. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Cohn, M., *User Stories Applied: For Agile Software Development*, Addison-Wesley, 2004.
6. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [User story](https://en.wikipedia.org/wiki/User_story).
11. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
12. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
13. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
