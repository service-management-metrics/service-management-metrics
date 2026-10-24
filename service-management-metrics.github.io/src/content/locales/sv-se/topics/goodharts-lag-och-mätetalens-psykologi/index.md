# Goodharts lag och mätetalens psykologi

**Varje siffra du belönar, rangordnar eller hotar med kommer att börja förändra det arbete den var avsedd att beskriva, så varje mätetal i den här boken används som en fråga för ett team att diskutera och paras med ett skyddsräcke som fångar upp manipulationen.**

## Översikt och motiv

[Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) är mätningens äldsta varning. Ekonomen Charles Goodhart noterade 1975, när han skrev om brittisk penningpolitik, att en statistisk regelbundenhet tenderar att kollapsa när myndigheter sätter press på den i styrsyfte. Den populära formuleringen kom senare. Antropologen Marilyn Strathern uttryckte den 1997 som "När ett mått blir ett mål upphör det att vara ett bra mått." De två meningarna säger samma sak: i samma stund som en siffra används för att styra människor styr människor siffran.

Samma idé har andra namn. [Campbells lag](https://en.wikipedia.org/wiki/Campbell%27s_law), från samhällsvetaren Donald Campbell, säger att ju mer en kvantitativ indikator används för beslut, desto mer utsätts den för korruptionstryck och desto mer förvränger den de processer den är avsedd att övervaka. [Kobraeffekten](https://en.wikipedia.org/wiki/Cobra_effect) är berättelsen om en belöning som gav mer av det den var tänkt att få bort. Var och en är ett exempel på ett [perverst incitament](https://en.wikipedia.org/wiki/Perverse_incentive): en belöning som driver beteendet bort från det som belöningsgivaren ville.

Team som bygger och driftar it-tjänster är ovanligt utsatta. Kontinuerlig leverans och it-tjänstehantering (ITSM), så som den kodifieras av [ITIL](https://en.wikipedia.org/wiki/ITIL), producerar båda en jämn ström av tidsstämplar, antal och statusar. Ett ärendesystem registrerar när ett ärende öppnades, när det tilldelades, när klockan pausades och när det stängdes. Ett leveransverktyg registrerar när arbete startade och slutfördes. De här siffrorna är billiga att samla in, lätta att visa i diagram och lätta att göra till mål. De är också lätta att flytta utan att hjälpa någon.

Tre termer återkommer i det här ämnet och i resten av boken. Ett **mått** beskriver något. Ett **mål** är en siffra som någon förväntas nå. Ett **skyddsräcke** är ett andra mått eller en praxis, vald i förväg, som skulle röra sig om det första måttet manipulerades. Steget från mått till mål är där problemen börjar, och skyddsräcket är hur du märker det.

Det här ämnet fastställer regeln som styr alla andra ämnen. Varje mätetalsfamilj i boken kommer med sin manipuleringsvektor (hur den typiskt manipuleras) och sitt skyddsräcke. Om ett senare ämne verkar hoppa över det, betrakta ämnet som ofullständigt.

### Varför människor manipulerar siffror

Manipulation är oftast inte oärlighet. Det är kapabla människors vanliga svar på de incitament som ligger framför dem. Fyra krafter verkar.

- **Press.** Någons bonus, utvärdering, avtalsförlängning eller rykte beror på siffran. Även utan formell koppling drar människor slutsatser om vad ledningen bryr sig om utifrån vad ledningen visar i diagram.
- **Surrogation.** [Surrogation](https://en.wikipedia.org/wiki/Surrogation) är tendensen att behandla måttet som om det vore det det står för. Forskare som studerat det i organisationer fann att incitamentslön knuten till ett mått gör detta mer sannolikt. Ett team som följer "stängda ärenden" börjar tro att målet är stängda ärenden, inte lösta problem.
- **Rädsla.** När en dålig siffra leder till skuldbeläggning döljer människor dåliga nyheter. Incidenter nedgraderas, avbrott byter etikett till "planerat underhåll" och fel loggas som funktionsönskemål.
- **Lokal optimering.** Ett team förbättrar den del av systemet det bedöms på och skjuter över kostnaden på en del det inte bedöms på. Servicedesken stänger snabbt och andra linjen ärver upprepningarna.

Det är viktigt att förstå de här krafterna eftersom botemedlet inte är striktare övervakning. Det är att ändra de förhållanden som gör manipulation rationell.

## Nyckelprinciper

- **Mät för att lära, inte för att döma.** Visa siffrorna för teamet som gör arbetet först, och använd dem för att ställa frågor.
- **Para varje mätetal med ett skyddsräcke.** Hastighet med kvalitet, volym med resultat, kostnad med upplevelse.
- **Beskriv team och system, rangordna aldrig människor.** Individuella resultattabeller är det snabbaste sättet att förstöra en datakälla.
- **Föredra resultat och trender framför mål.** En riktning och ett samtal slår ett tröskelvärde.
- **Skriv ned definitionen, inklusive klockorna.** Otydliga definitioner är där manipulation gömmer sig.
- **Räkna med förändring.** Avveckla eller utforma om ett mätetal när det slutar ge underlag för beslut.
- **Gör dåliga nyheter trygga.** Om ärlig rapportering bestraffas kommer data att ljuga.

## Mätetalsdefinitioner

Mätetalen nedan är inte tjänste- eller leveransmått. De är mått på hälsan hos själva mätetalspraktiken, och de visar den form som varje mätetalstabell i den här boken har. De tre första är exempel på skyddsräcken som förekommer genom hela de senare ämnena.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Skyddsräckestäckning | Andel rapporterade mätetal som har ett namngivet, följt skyddsräcke | mätetal med skyddsräcke / rapporterade mätetal | procent | Mätetalsregister (se ämne 1.4, Styrning och ägarskap av mätetal) | Mätning och rapportering; ständig förbättring | Retrospektiv av arbetsöverenskommelser | Kvartalsvis |
| Återöppningsgrad | Andel stängda ärenden eller arbetsobjekt som öppnats på nytt inom ett angivet fönster | objekt som öppnats på nytt inom 14 dagar / objekt som stängts under perioden | procent | Statushistorik i ITSM-verktyg eller ärendehanteringssystem | Incidenthantering; problemhantering | Definition av klart; undkomna fel | Månadsvis |
| Antal definitionsändringar | Antal ändringar av mätetalsdefinitioner eller statusarbetsflöden under en period, med skäl | antal poster i loggen över definitionsändringar | antal | Ändringslogg i mätetalsregistret | Mätning och rapportering | Arbetsöverenskommelser | Kvartalsvis |
| Användningsgrad för mätetal | Andel rapporterade mätetal som åberopades i ett beslut under perioden | mätetal som åberopats i ett registrerat beslut / rapporterade mätetal | procent | Beslutslogg eller granskningsanteckningar | Ständig förbättring | Åtgärder från retrospektiv | Kvartalsvis |
| Uppfattningsglapp | Skillnaden mellan ett nöjdhetsenkätresultat och en ärendebaserad servicenivå för samma tjänst | enkätbaserad andel minus ärendehanteringsbaserad andel | procentenheter | Enkätverktyg och ITSM-verktyg | Hantering av servicenivåer | Återkoppling från intressentgranskning | Kvartalsvis |

Återöppningsgraden räknar bara objekt som öppnats på nytt i samma post. Ett objekt som stängts och sedan väckts på nytt som ett nytt ärende syns inte. En del av poängen med nästa avsnitt är att skyddsräcket behöver sitt eget skyddsräcke, till exempel att koppla dubblettärenden till sina original.

## Rekommendationer

### Utforma mätsystemet

**1. Börja från en fråga, inte en siffra.** Innan du lägger till ett mätetal, skriv frågan det besvarar och beslutet det ger underlag för. "Får användarna sina problem lösta första gången?" är en fråga. "Minska den genomsnittliga handläggningstiden" är ett mål som låtsas vara en. Ett mätetal utan kopplat beslut är en kandidat för avveckling.

**2. Välj mätetal i spänning.** Ett enda tal inbjuder till överoptimering, så välj par som drar åt olika håll: ledtid med andel misslyckade ändringar, ärendens stängningshastighet med återöppningsgrad, tillgänglighet med användarrapporterad upplevelse. Paret behöver inte vara en formel. Det behöver visas tillsammans, på samma sida.

**3. Definiera klockorna och undantagen.** För varje tidsmått, skriv var klockan startar, var den stoppar och när den får pausa. Det mesta av manipulationen i tjänstedata finns i dessa gränser: ett ärende som läggs i "väntar på kund" stoppar servicenivåklockan, och en ändring som registreras först efter att den tillämpats undgår ledtiden för ändring. Om ett pausläge finns, redovisa hur ofta det används.

**4. Använd fördelningar och percentiler.** Ett medelvärde av ärendens lösningstider kan förbättras för att några få enkla ärenden stängdes snabbt medan de svåra åldras. Visa medianen och en hög percentil (till exempel den 85:e eller 95:e), och visa de äldsta öppna objekten. Ålder på arbetsobjekt och det äldsta öppna ärendet är svåra att manipulera utan att faktiskt slutföra arbetet (se ämne 2.1, Flödesmått).

**5. För ett mätetalsregister.** Ett kort register listar varje mätetal, dess ägare, definition, datakälla, manipuleringsvektor, skyddsräcke och datum för senaste granskning. Det är tråkigt och det är den enskilt mest effektiva vanan i det här ämnet (se ämne 1.4, Styrning och ägarskap av mätetal).

### Inför mätetal tryggt

**6. Visa teamet först, och visa rådata.** Team som ser siffrorna före ledningen är mer villiga att ifrågasätta deras riktighet. Börja med de underliggande objekten, inte diagrammet. Om data inte tål ett samtal med dem som genererade dem tål de inte en instrumentpanel.

**7. Skilj lärandevyer från ansvarsvyer.** Ett teams arbetsvy kan innehålla många mått, även fula. Det som går till ledningen bör vara en liten, stabil uppsättning. Om ledningen ber om arbetsvyn, räkna med att arbetsvyn ändras för att se bättre ut.

**8. Knyt inte individuell lön, disciplinering eller rangordning till ett mätetal.** Team kan ombes förklara sina siffror och förbättra dem. Individuella mål för antal ärenden, berättelsepoäng eller incheckningar lär människor att maximera antalet. Tillvägagångssättet med [nyckeltal](https://en.wikipedia.org/wiki/Key_performance_indicator) kan fungera när indikatorerna väljs för hela systemet och granskas regelbundet. Det misslyckas när det blir ett styrkort per person.

**9. Gör ärlig rapportering trygg.** [Psykologisk trygghet](https://en.wikipedia.org/wiki/Psychological_safety) är tron att du inte kommer att straffas för att du säger ifrån om ett misstag eller en oro. En skuldfri granskning av en incident är ett exempel på det i praktiken. Utan den sjunker incidentantalen av fel skäl: människor slutar rapportera.

### Håll systemet ärligt

**10. Håll en manipulationsgranskning.** En gång per kvartal, ställ teamet en fråga om varje rapporterat mätetal: "Om vi ville att den här siffran skulle se bra ut utan att hjälpa någon, vad skulle vi göra?" Skriv ned svaren och kontrollera sedan om skyddsräcket skulle fånga var och en. Övningen är billig, ger användbara idéer och flyttar samtalet från misstänksamhet till design.

**11. Granska definitionerna mot verkligheten.** Stickprova ett litet antal stängda objekt och läs dem. Var de verkligen lösta? Var prioriteten ärlig? Betydde tillståndet "väntar på kund" att man faktiskt väntade på kunden? Ett stickprov på femton minuter säger ofta mer än en månads instrumentpaneler.

**12. Avveckla mätetal.** Ett mätetal som inte har åberopats i ett beslut på två kvartal är en belastning. Ta bort det och säg det. Färre mätetal, vart och ett betrott, slår många.

## Manipuleringsvektorer och skyddsräcken

Tabellen täcker mätetalen i avsnittet ovan. Senare ämnen tillämpar samma form på tjänste- och leveransmått.

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Skyddsräckestäckning | Att namnge ett skyddsräcke på papper utan att någonsin följa det | Granska registret: ett skyddsräcke räknas bara om dess senaste värde visas på samma instrumentpanel |
| Återöppningsgrad | Att stänga ärendet och väcka ett nytt i stället för att öppna det på nytt; att förlänga fönstret tills återöppningarna hamnar utanför det | Andel dubbletter och länkade ärenden; återkomst av samma orsak över ärenden |
| Antal definitionsändringar | Att inte logga ändringar så att antalet förblir lågt; att ändra ett arbetsflöde utan att säga det till någon | Jämför statusmodellen i verktyget med registret vid varje granskning |
| Användningsgrad för mätetal | Att åberopa varje mätetal i en beslutslogg som en formalitet | Fråga vad som ändrades på grund av hänvisningen; stickprova loggen |
| Uppfattningsglapp | Att enbart enkätera nöjda användare; att styra enkäter till tider efter en bra interaktion | Enkätens svarsfrekvens och mixen av respondenter; fria kommentarer som läses upp i en granskning |

En sund avläsning är en mätetalspraktik som förändras: definitioner justeras av skäl som skrivs ned, mätetal kommer och går, och teamet kan berätta en historia om ett beslut som en siffra ändrade.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Mäta utan mål | Minskar manipulation; inbjuder till ärlig diskussion | Kan driva mot rapportering som ingen agerar på |
| Mål med skyddsräcken | Ger riktning och brådska; paret begränsar manipulation | Mer arbete att underhålla; skyddsräcket manipuleras också med tiden |
| Individuella mätetal | Lätta att förstå; verkar rättvisa | Förstör data; skadar samarbetet |
| Team- och tjänstemätetal | Stämmer med hur arbete verkligen sker | Svårare att tillskriva; döljer individuella stödbehov |
| Få mätetal | Lättare att lita på och minnas | Blinda fläckar; kan missa ett nytt problem |
| Många mätetal | Bred täckning | Späder ut uppmärksamheten; varje mätetal är svagt styrt |

Svaret i klartext är att använda mål sparsamt, för förhållanden som är väl förstådda och svåra att manipulera, till exempel ett servicenivåmål som användarna har bett om. Även då, föredra att knyta målet till tjänsten, inte till en persons utvärdering. Målet är inte att ta bort siffror ur beslutsfattandet. Det är att hålla siffrorna kopplade till verkligheten genom att ha de människor som producerar dem på din sida.

## Frågor att diskutera med teamet

**1. Vilken siffra på vår nuvarande instrumentpanel skulle vi mest frestas att förbättra utan att förbättra arbetet?**
Börja med mätetalet som människor tittar på först och gå sedan till det som ledningen frågar om. Be om konkreta drag: vad skulle vi göra med datan om vi var under press? Facilitatorn bör anteckna varje svar utan att döma det, eftersom listan blir manipuleringsvektorerna i registret. Avsluta med att fråga vilka av dragen våra skyddsräcken skulle fånga och vilka de skulle missa.

**2. Var startar och stoppar en klocka i vårt viktigaste tidsmått, och vem bestämde det?**
Be gruppen rita ärendets eller arbetsobjektets livscykel på en whiteboard och markera varje tillstånd. Leta efter tillstånd där tid kan försvinna, till exempel att vänta på en kund eller vänteläge. Räkna hur ofta varje tillstånd används och av vem. Samtalet visar ofta att två team använder samma ord på olika sätt.

**3. När fick en siffra oss senast att göra något ohjälpsamt?**
Bjud in berättelser, inte skuldbeläggning. Vanliga exempel är att stänga ärenden innan de verifierats, att dela upp ändringar för att höja antalet driftsättningar eller att klassa om en incident för att undvika en överträdelserapport. Facilitatorn bör fråga vad personen försökte skydda. Svaret visar oftast vilket incitament som behöver ändras.

**4. Vem ser våra mätetal, och vad händer med dem där?**
Följ varje mätetal från teamet till dess publik. Fråga om någon version av det används för att jämföra team eller människor. Fråga vad teamet skulle visa om publiken var en annan. Där teamet skulle ändra de siffror det visar finns ett förtroendeglapp att prata om med publiken.

**5. Vad är skyddsräcket för var och en av våra fem viktigaste mätetal, och finns det på samma sida?**
Gör en lista i två kolumner på en tavla. Om ett mätetal saknar skyddsräcke, enas om en kandidat och en ägare som prövar den under ett kvartal. Om ett skyddsräcke finns men sällan visas, diskutera varför. Undvik att välja ett skyddsräcke som bara är motsatsen till mätetalet, eftersom det inte säger något nytt.

**6. Vilket mätetal ska vi avveckla det här kvartalet?**
Be om belägg: när användes det senast i ett beslut? Om ingen minns, avveckla det på prov och se om någon märker det. Facilitatorn bör behandla avveckling som en normal händelse. Team som aldrig släpper mätetal får rapporter som ingen litar på eller läser.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam möter manipulation genom velocity, genomflöde och antal driftsättningar. [Velocity](https://en.wikipedia.org/wiki/Velocity_(software_development)) i synnerhet är ett planeringsverktyg för ett team, inte ett mått på produktivitet, och att jämföra team med det leder till uppblåsta uppskattningar. Leveransteam bör behålla sina arbetsmått för sig själva, publicera en liten uppsättning utåt och para varje hastighetsmått med ett kvalitetsmått (se ämne 2.5, Mätetal för leveransprognoser och planering).

### Service- och driftteam

Serviceteam möter manipulation genom lösningstid, lösning vid första kontakten och efterlevnad av servicenivåer. Tillstånden som pausar klockan och prioritetsfälten är de vanliga ställena där drift uppstår. Driftteam bör regelbundet granska statusövergångar, redovisa användningen av pauslägen och bevaka återkommande kontakter och återöppningsgrad bredvid hastighet. Team i jour bör vara särskilt försiktiga med mått som belönar att inte bli larmad, eftersom de straffar ärlig larmning (se ämne 3.3, Svarstid och lösningstid för incidenter).

### Ledning och styrning

Ledare sätter incitamenten, ofta utan att mena det. En fråga som ställs i en granskning ("varför är det här rött?") lär teamet vad det ska dölja. Ledare bör fråga vad teamet lärde sig av en siffra, hålla resultattabeller utanför rummet, skydda uppriktig rapportering och finansiera det förbättringsarbete som en dålig siffra avslöjar. Styrande organ bör förvänta sig mätetalsregistret och manipulationsgranskningen som en del av rapporteringen, och behandla en definierad förändring i ett mätetal som normal.

### Kunder och användare

Användare upplever effekten av manipulation som en tjänst som ser bra ut på papper men känns dålig i praktiken: ett ärende som stängts utan att vara åtgärdat, ett avbrott som märkts som planerat, en enkät som aldrig nådde dem. Användarna är också det bästa skyddsräcket. Deras återkoppling, i form av enkäter, klagomål och kommentarer, bör ligga bredvid driftsiffrorna och läsas i sin helhet, inte reduceras till ett betyg (se ämne 6.1, Mätetal för kundnöjdhet).

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på ett regionalt sjukhus driver en servicedesk och flera produktteam som bygger kliniska applikationer. Siffrorna i det här exemplet är illustrativa.

Ledningen sätter ett mål att stänga 90 procent av incidenterna inom den överenskomna tiden. Inom två månader visar instrumentpanelen 94 procent. Chefen för serviceverksamheten är nöjd men orolig, eftersom klinisk personal klagar mer, inte mindre. Hon ber teamet göra en manipulationsgranskning av mätetalet.

Teamet skissar ärendets livscykel. De upptäcker att ärenden flyttas till "väntar på kund" i genomsnitt två gånger vardera, och att tiden i det tillståndet har ökat. Ett stickprov på 30 stängda ärenden visar att 7 stängdes med anteckningen "inget svar från användaren" efter ett enda ringförsök. De upptäcker också att återöppningsgraden bara är jämn eftersom användare fick höra att de skulle "skapa ett nytt ärende" när problemet kom tillbaka.

Teamet gör tre ändringar. För det första visar lösningstidsdiagrammet nu medianen, den 90:e percentilen och det äldsta öppna ärendet, tillsammans med andelen tid som tillbringas i pauslägen. För det andra lägger instrumentpanelen till en grad av återkommande kontakter, definierad som andelen nya ärenden från samma användare om samma tjänst inom 14 dagar. För det tredje går en kort enkät till ett slumpmässigt urval av stängda ärenden, och dess fria kommentarer läses i den månatliga granskningen.

Tre månader senare sjunker huvudsiffran för efterlevnad till 88 procent, vilket känns som dåliga nyheter. Graden av återkommande kontakter har dock minskat, och enkätkommentarer om olösta problem har blivit ovanligare. Chefen för driften berättar för ledningen att den gamla siffran var uppblåst och att den nya bilden är ärligare, och hon ber dem acceptera ett servicenivåmål baserat på den korrigerade definitionen. Beslutet, som registreras i beslutsloggen, är att sätta målet efter ytterligare ett kvartals data i stället för omedelbart.

## Agilitet, AI, automatisering och analys

### Agilitet

Korta återkopplingsloopar låter ett team märka manipulation tidigt. En praxis som passar bra är att läsa några råa objekt vid varje regelbunden granskning och jämföra dem med huvudsiffran, med intressenter i rummet. Varningen är att en loop som belönar rapporteringshastighet i sig kan bli ett mål, så håll syftet med varje granskning på lärande.

### AI

AI förändrar hur manipulation ser ut. En modell kan producera rimliga lösningsanteckningar, statusuppdateringar eller ärendekategorier i volym, så ett mätetal som räknar dessa artefakter kan uppfyllas utan något verkligt arbete. Para varje AI-påverkat antal med en stickprovsbaserad mänsklig kontroll av kvaliteten, och redovisa andelen AI-utdata som en person ändrade. Varningen är att en låg korrigeringsgrad kan betyda bra utkast eller slarvig granskning, så läs de två tillsammans.

### Automatisering

Automatiserad insamling tar bort manuella redigeringar av data, vilket stänger vissa manipulationsvägar. Automatisera skyddsräcket såväl som mätetalet, så att båda syns på samma sida. Varningen är att människor då manipulerar de indata som automatiseringen läser, till exempel ärendekategorin eller pausläget, så granska definitionerna mot ett stickprov av verkliga objekt.

### Analys

Analys kan avslöja manipulation genom egendomliga fördelningar, till exempel en topp av ärenden som stängs strax före en rapporteringsfrist, eller en klunga exakt på målvärdet. Använd de mönstren för att inleda ett samtal, inte som bevis för ond avsikt. Varningen är att varje upptäcktsregel blir känd och sedan undviks, så rotera skyddsräckena och ha en människa med i granskningen.

## Branschperspektiv

**Startup.** Små team har få mätetal och starkt förtroende, vilket hjälper. Faran är att importera en stor företagsinstrumentpanel för tidigt. Börja med två eller tre mått som grundarna faktiskt använder, skriv ned deras definitioner och håll dem borta från samtal om individuell prestation.

**Småföretag.** Resurserna är knappa, och den som sköter it rapporterar ofta direkt till ägaren. Ett enda kundklagomål kan väga tyngre än vilken instrumentpanel som helst. Håll uppsättningen liten, föredra direkt återkoppling från användare och behandla leverantörsframtagna rapporter med viss försiktighet, eftersom leverantören har sina egna incitament.

**Storföretag.** Skala mångdubblar både efterfrågan på jämförbara siffror och trycket att manipulera dem. Använd en liten standarduppsättning med skrivna definitioner, håll teamens arbetsvyer åtskilda från sammanställningar och undvik att jämföra team som arbetar med olika slags tjänster. Ett mätetalsregister och en granskningsrytm blir nödvändiga.

**Offentlig sektor.** Rapporteringsskyldigheter och avtalade servicenivåer kan göra vissa mål icke förhandlingsbara. Behandla dem som designunderlag: uppfyll dem, visa skyddsräcket bredvid dem och redovisa de definitioner som använts. Offentlig ansvarsskyldighet höjer kostnaden för att dölja dåliga nyheter, så bygg trygga interna kanaler och var öppen med korrigerade definitioner (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaden för att tillämpa det här ämnet är mestadels tid: några timmar för att skriva definitioner och ett register, en kort kvartalsvis manipulationsgranskning och enstaka stickprov av stängda objekt. Verktygskostnaden är liten. Den större kostnaden är ledningens uppmärksamhet, eftersom disciplinen bara fungerar om de som läser siffrorna beter sig konsekvent.

Avkastningen kommer från undviket slöseri och bättre beslut. Beslut som fattas på förvanskade data kan styra investeringar till fel problem, till exempel att bemanna en servicedesk för att stänga ärenden snabbare när det verkliga problemet är återkommande kontakter från ett fel. Manipulation urholkar också förtroendet mellan teamet och de som förlitar sig på det, vilket är svårt att reparera. Beskriv nyttan som ett mönster, inte med en påhittad procentsats: färre omvända beslut, färre överraskningar i revisioner och bättre överensstämmelse mellan driftsiffror och användarupplevelse. Om du behöver siffror till ett affärscase, mät dina egna baslinjer, till exempel uppfattningsglappet och graden av återkommande kontakter, före och efter ändringen.

## Antimönster och fallgropar

- **Mål utan skyddsräcken.** Ett ensamt mål nås på vilken tillgänglig väg som helst. Lägg till ett parat mått innan målet tillkännages.
- **Resultattabeller över människor eller team.** De inbjuder till manipulation och avskräcker från hjälp mellan team. Visa varje team dess egen trend, med sammanhang.
- **Mätetal som straff.** En röd siffra som medför skuldbeläggning blir grön genom döljande. Fråga i stället vad teamet behöver.
- **Medelvärden av sneda data.** De döljer svansen där användare lider. Använd percentiler och åldern på det äldsta objektet.
- **Att ändra definitioner i tysthet.** Trendlinjer blir meningslösa. Logga varje ändring med skälet och markera den i diagrammet.
- **Att behandla skyddsräcket som det nya målet.** Då manipuleras skyddsräcket. Granska båda tillsammans och rotera skyddsräcken när de förlorar kraft.
- **Fåfängemätetal.** Antal som bara går upp, till exempel hanterade ärenden eller incheckningar, säger ingenting om resultat. Föredra mått som kan falla såväl som stiga.
- **Att ignorera kvalitativa belägg.** Siffror ensamma kan inte visa att ett stängt ärende kändes olöst. Läs kommentarerna.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Definitioner och klockor | Informella; var och en räknar olika | Skrivna för vissa mätetal | En skriven definition per mätetal, med klockor och undantag | Definitioner granskas och ändringar loggas med skäl | Definitioner samordnade över team och leverantörer, reviderade när de slutar ge underlag för beslut |
| Skyddsräcken | Inga | Namngivna för vissa mätetal | Varje rapporterat mätetal har ett skyddsräcke på samma sida | Skyddsräcken granskas för manipulation varje kvartal | Skyddsräcken roterar och utformas tillsammans med dem som mäts |
| Användning och trygghet | Siffror används för att fördela skuld | Teamet ser sina egna siffror | Teamet ser data först; inga individuella rangordningar | Ledningen ställer lärandefrågor; rapportering är trygg | Kunder och leverantörer delar en uppriktig bild av siffrorna |

## Checklista

- [ ] Varje rapporterat mätetal har en skriven fråga och ett beslut som det ger underlag för.
- [ ] Varje tidsmått har en skriven start-, stopp- och pausregel.
- [ ] Varje rapporterat mätetal har ett namngivet skyddsräcke som visas bredvid.
- [ ] Tidsmått visar percentiler och åldern på det äldsta öppna objektet.
- [ ] Ett mätetalsregister finns med ägare, definition, manipuleringsvektor, skyddsräcke och granskningsdatum.
- [ ] Teamet ser sina data före ledningen.
- [ ] Ingen individuell rangordning, lön eller disciplinering är kopplad till ett mätetal.
- [ ] En kvartalsvis manipulationsgranskning finns i kalendern.
- [ ] Ett stickprov av stängda objekt läses för ärlighet varje kvartal.
- [ ] Minst ett mätetal har avvecklats eller utformats om under det senaste året.

## AI-prompter

**Håll en manipulationsgranskning av ett mätetal.**

```text
I lead [team name], which runs [type of service or delivery work]. We report
this metric: [metric name], defined as [definition including where the clock
starts and stops]. It is used by [audience] to [decision or target]. Our data
comes from [tool].

List the realistic ways this metric could be made to look better without
improving the service for users. For each, suggest a guardrail metric or
practice that would reveal it and say what the guardrail's own gaming vector
would be. Do not invent benchmark values. List your assumptions and anything you
could not determine from what I gave you.
```

**Skriv ett utkast till en post i mätetalsregistret.**

```text
Draft a metric register entry for [metric name] for [team name]. Fields: question
it answers, decision it informs, definition, formula, unit, data source, owner
role, review cadence, gaming vector, guardrail, and how users or customers
would notice if it were wrong. Base the entry only on this description:
[describe the metric and current process]. Mark every field you had to assume,
and list questions I should answer to complete the entry.
```

**Granska ett stickprov av stängda ärenden.**

```text
Here are [number] closed tickets from [service], with fields [list fields] and
the resolution notes pasted below. Review each for signs that the ticket was
closed without the problem being solved, that a pause state was used to stop
the clock, or that priority or category looks adjusted. Report patterns, not
individuals. Do not guess at causes not supported by the text. Tell me what you
could not judge from the data and what additional fields would help.

[paste tickets, with personal data removed]
```

**Planera hur ett mätetal införs tryggt.**

```text
We plan to introduce [metric] to [audience]. Current context: [team size,
culture, previous experience with metrics]. Propose a rollout plan covering who
sees the data first, how we explain the purpose, what we will not use it for,
which guardrail we show with it, and when we review whether it is working.
Flag risks of gaming or fear and suggest how to reduce them. List your
assumptions and do not invent statistics.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta ämnet och det parade skyddsräcket för ett mätetal som du är på väg att införa.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett nytt mätetalsämne har sin manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- Ett mått som blir ett mål slutar beskriva arbetet, så använd siffror för att ställa frågor.
- Manipulation är ett normalt svar på press och rädsla, och den minskar genom att förändra förhållanden, inte genom övervakning.
- Varje mätetal behöver en skriven definition med sina klockor och ett skyddsräcke som visas bredvid.
- Föredra percentiler och åldern på det äldsta objektet framför medelvärden.
- Beskriv team och tjänster, rangordna aldrig individer, och låt teamet se sina data först.
- Granska för manipulation varje kvartal och avveckla mätetal som inte längre ger underlag för beslut.

## Referenser och vidare läsning

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
5. Choi, J., Hecht, G. W., and Tayler, W. B., "Lost in translation: The effects of incentive compensation on strategy surrogation," *The Accounting Review*, 87(4), 2012.
6. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Cobra effect](https://en.wikipedia.org/wiki/Cobra_effect).
11. Wikipedia, [Perverse incentive](https://en.wikipedia.org/wiki/Perverse_incentive).
12. Wikipedia, [Surrogation](https://en.wikipedia.org/wiki/Surrogation).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
16. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
