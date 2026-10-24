# Incidentvolym och prioritet

**Räkna incidenter mot den användning som gav upphov till dem, läs prioritet som en mix snarare än ett betyg och bevaka upprepningar, eftersom formen på incidentefterfrågan talar om var du ska investera långt innan någon enskild lösningstid gör det.**

## Översikt och motiv

En incident är, i [ITIL](https://en.wikipedia.org/wiki/ITIL) 4:s termer, ett oplanerat avbrott i en tjänst eller en försämring av dess kvalitet. [Incidenthantering](https://en.wikipedia.org/wiki/Incident_management) är praktiken som återställer normal tjänstedrift så fort som är praktiskt möjligt och begränsar skadan för verksamheten. Varje incident är också en signal: något i tjänsten, dess ändringar, dess användare eller dess övervakning fungerade inte som väntat. Antalet och karaktären hos incidenter är därför ett av de mest informativa efterfrågemåtten ett driftteam har.

Volym ensam är en dålig vägvisare. En ökning av incidenter kan betyda att tjänsten blev sämre, eller att fler människor använder den, eller att övervakningen förbättrades och nu ser fel som tidigare förblev orapporterade. Ett fall kan betyda att tillförlitlighetsarbetet gav resultat, eller att användare slutade bry sig om att rapportera. Det här ämnet handlar om att läsa volym med tillräckligt sammanhang för att skilja de berättelserna åt: att normalisera mot användning, dela upp efter kategori och tjänst och bevaka mixen av prioriteter och takten på upprepningar.

Prioritet är ämnets andra hälft. ITIL-praxis härleder vanligen prioritet ur två indata: påverkan (hur stor del av verksamheten som berörs) och brådska (hur snabbt verksamheten behöver rättelsen). Paret mappas till en prioritetsnivå som sätter det förväntade svaret. Agila team har en nära motsvarighet i hur de triagerar en backlog: allvarlighets- och brådskeetiketter på fel och en "tjänsteklass" på en flödestavla som avgör vad som hoppar över kön. Orden skiljer sig; frågan är densamma: vad måste hanteras först, och varför.

ITIL-synsättet behandlar incidenter som poster som ägs av en servicedesk och lösargrupper, med kategorier, prioriteter och servicenivåmål. Det agila synsättet behandlar oplanerat arbete som ett avbrott i flödet som konkurrerar med planerat arbete (se ämne 2.9, Driftarbete och oplanerat arbete). Båda synsätten har nytta av samma mått, om måtten beskriver systemet och inte människorna i det. [Servicedesken](https://en.wikipedia.org/wiki/Help_desk_software) är där de flesta poster börjar, och dess egna mätetal behandlas separat (se ämne 3.1, Mätetal för servicedesk). Hur fort incidenter besvaras och löses behandlas i ämne 3.3, Svarstid och lösningstid för incidenter. Större incidenter har egna mått (se ämne 3.4, Mätetal för större incidenter).

Flera termer återkommer nedan. En **percentil** är värdet under vilket en angiven andel av observationerna faller, så den 85:e percentilen är värdet som 85 procent av observationerna inte överstiger. Ett **servicenivåavtal (SLA)** är ett dokumenterat åtagande mellan en leverantör och en kund. Ett **konfigurationsobjekt (CI)** är en komponent som behöver hanteras för att leverera en tjänst. En **Poissonprocess** beskriver händelser som anländer oberoende av varandra med någon genomsnittlig takt, vilket är en användbar första modell för incidentankomster (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

Varningen från ämne 1.2 (Goodharts lag och mätetalens psykologi) gäller här mer än på de flesta ställen. Incidentantal och prioriteter förs in av människor, ofta under press, och siffran som hör till en post kan ändras genom att ändra hur posten skrivs. Varje mätetal nedan har en manipuleringsvektor, och skyddsräckena är en del av definitionen.

## Nyckelprinciper

- **Normalisera innan du jämför.** Ett antal betyder lite utan den användning, användarbas eller transaktionsvolym det kom från. Jämför frekvenser mellan perioder och tjänster och visa det råa antalet bredvid.
- **Läs mixen, inte ett enda tal.** Prioritetsfördelning, kategorifördelning och andelen upprepningar säger mer tillsammans än någon summa.
- **Prioritet är en regel, inte ett humör.** Härled den ur påverkan och brådska med en skriven matris och mät hur ofta den ändras i efterhand.
- **Skilj incidenter från förfrågningar.** En förfrågan om något normalt är inte ett fel. Att räkna båda tillsammans blåser upp incidentvolymen och döljer vad servicedesken lägger sin tid på (se ämne 3.5, Mätetal för uppfyllande av serviceförfrågningar).
- **Upprepningar är den mest värdefulla signalen.** En incident som kommer tillbaka pekar på ett problem som ännu inte är löst (se ämne 4.1, Mätetal för problemhantering).
- **Mät tjänster och team, aldrig handläggare.** Antal per person inbjuder till rangordning, och rangordning förstör data (se ämne 1.2, Goodharts lag och mätetalens psykologi).
- **Räkna med att volymen rör sig av skäl som inte är kvalitet.** Releaser, säsonger, kampanjer och förändringar i rapporteringskanaler förskjuter alla antalen. Kommentera diagrammet.

## Mätetalsdefinitioner

Tabellen listar mätetalen i det här ämnet. Klockor och gränser anges i formelkolumnen. "Stängd" och "öppnad" syftar på tidsstämplar i incidentposten; öppningstiden är när posten skapas eller när övervakningssystemet skapar den, och stängningstiden är när incidenten bekräftas löst och stängs.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Incidentvolym per tjänst | Antal incidenter som öppnats för en tjänst under en period | incidenter med en öppningstid inom perioden, hänförda till den berörda tjänsten; serviceförfrågningar, dubbletter som slagits ihop i en överordnad post och poster som avbrutits som felaktigt väckta utesluts | antal | Incidentposter i ITSM-verktyget | Incidenthantering | Produktionsfel eller oplanerade arbetsobjekt per team | Veckovis, granskas månadsvis |
| Normaliserad incidentfrekvens | Incidenter i förhållande till tjänstens användning | incidenter som öppnats under perioden / användningsmått för samma period och omfattning (aktiva användare, sessioner eller transaktioner, valt och registrerat per tjänst) x 1 000; användningsmåttet måste komma från en annan källa än incidentverktyget | incidenter per 1 000 användningsenheter | ITSM-verktyg samt användningsdata från analys eller övervakning | Incidenthantering; hantering av servicenivåer | Feltäthet per release eller per användare | Månadsvis |
| Prioritetsmix | Andel öppnade incidenter på varje prioritetsnivå | incidenter på den prioritet som registrerades vid öppnandet / alla incidenter som öppnats under perioden, visat för varje nivå; omklassificerade incidenter räknas vid öppningsprioriteten och visas igen vid stängningsprioriteten | procent per nivå | ITSM-verktyg, inklusive historiken över prioritetsändringar | Incidenthantering | Allvarlighetsfördelning av fel; tjänsteklassmix | Månadsvis |
| Omklassificeringsgrad för prioritet | Andel incidenter vars prioritet ändrades mellan öppnande och stängning | incidenter som stängts under perioden vars stängningsprioritet skiljer sig från öppningsprioriteten / incidenter som stängts under perioden | procent | Revisionsspår i ITSM-verktyget | Incidenthantering | Omtriagegrad i felbacklogen | Månadsvis |
| Kategorikoncentration | Andel av incidentvolymen som hålls av de största kategorierna | incidenter i de fem främsta kategorierna efter antal / alla kategoriserade incidenter under perioden; okategoriserade incidenter redovisas separat som en egen andel | procent | Kategori- och tjänstefält i ITSM-verktyget | Incidenthantering; problemhantering | Felkluster per komponent eller epos | Månadsvis |
| Upprepningsgrad för incidenter | Andel incidenter som återkommer för samma tjänst, konfigurationsobjekt och kategori inom ett angivet fönster | incidenter under perioden med en tidigare stängd incident för samma tjänst, CI och kategori i det föregående fönstret (till exempel 30 dagar, satt en gång och registrerat) / incidenter som öppnats under perioden; en återöppnad post räknas som en återöppning, inte en upprepning | procent | ITSM-verktyg och CMDB-länkar | Incidenthantering; problemhantering | Regressions- eller undkomna fel-grad | Månadsvis |
| Återöppningsgrad | Andel stängda incidenter som öppnades på nytt | incidenter som stängts under perioden och som senare öppnats på nytt inom ett angivet fönster (till exempel 7 dagar) / incidenter som stängts under perioden | procent | Statushistorik i ITSM-verktyget | Incidenthantering | Återöppnade fel; omarbete | Månadsvis |
| Andel upptäckta av övervakning | Andel incidenter som först väcktes av övervakning innan en användare rapporterade dem | incidenter vars första händelse är ett automatiskt larm / alla incidenter som öppnats under perioden; incidenter som öppnats av en person utifrån ett larm räknas efter larmtiden | procent | ITSM-verktyg, övervakningsintegration | Övervakning och händelsehantering; incidenthantering | Larmdrivna kontra kundrapporterade fel | Månadsvis |

Två anmärkningar om definitionerna. Den första är att "prioritet" i den här tabellen är den prioritet posten bär, som bör komma ur matrisen för påverkan och brådska och inte ur den ordning människor vill ha arbetet gjort. Den andra är att volym som redovisas för en period är ett antal öppningar, inte ett antal öppna incidenter en given dag. Det öppna antalet vid ett givet ögonblick är ett backlogmått och hör hemma med åldrande (se ämne 3.3, Svarstid och lösningstid för incidenter).

## Rekommendationer

### Räkna noga

**1. Skriv ned vad en incident är och inte är.** Många verktyg håller incidenter, förfrågningar, larm och problem i en tabell. Besluta vilka posttyper som räknas, dokumentera filtret och tillämpa det varje gång. En ändring av filtret ändrar trenden, så logga ändringar med datum och skäl (se ämne 1.5, Datakällor och instrumentering).

**2. Avduplicera innan du redovisar.** När ett fel producerar femtio ärenden är den överordnade incidenten händelsen och barnen är ett mått på dess räckvidd. Redovisa båda talen: överordnade incidenter för hur många fel som inträffade, och länkade poster för hur många människor som kände dem. Att blanda de två får ett stort avbrott att se ut som en månad av rutinarbete.

**3. Hänför incidenter till tjänster såväl som team.** Tjänsten är det verksamheten köper och förstår. Använd tjänstekatalogen (ITIL:s "service catalogue") för att definiera listan och se över mappningen från CI:er när tjänster ändras. En incident utan tjänst är ett datakvalitetsproblem att rätta, och andelen sådana poster är värd att redovisa.

### Normalisera och tolka volym

**4. Normalisera mot ett användningsmått från en annan källa.** Dividera med aktiva användare, sessioner eller transaktioner, hämtade från analys eller övervakning och inte från incidentverktyget. En tjänst som fördubblade sina användare och sina incidenter har inte blivit sämre; en tjänst vars incidenter fördubblades med platt användning har. Visa det råa antalet bredvid frekvensen så att ingen tror att nämnaren döljer något.

**5. Använd ett kontrolldiagram, inte en trendpil.** Incidentantal varierar från vecka till vecka även när inget har ändrats. Ett [kontrolldiagram](https://en.wikipedia.org/wiki/Control_chart) visar det vanliga variationsintervallet, så att teamet reagerar på en signal och låter brus vara. Veckoantal som rör sig inom gränserna är inte nyheter; en ihållande följd på ena sidan av medelvärdet är det. Justera för [säsongsvariation](https://en.wikipedia.org/wiki/Seasonality) som kvartalsslut, helger och releasecykler genom att jämföra lika perioder.

**6. Kommentera diagrammet med händelser.** Markera releaser, migreringar, kampanjer, avbrott i beroenden och ändringar av rapporteringskanalen. Ett nytt självbetjäningsformulär eller en mer synlig knapp för "rapportera ett problem" kan höja volymen medan tjänsten förblir densamma. De flesta volymargument tar snabbt slut när diagrammet visar vad som hände den veckan.

### Hantera prioritet med regler

**7. Härled prioritet ur påverkan och brådska med en publicerad matris.** Definiera påverkan i termer av berörda användare och verksamhetsfunktioner och brådska i termer av hur snart skadan växer. Publicera matrisen på sidan där handläggare väljer värdena, med två eller tre genomarbetade exempel per cell. Undvik fält för fritt prioritetsval; de blir förhandling, och antalet incidenter med prioritet 1 blir ett mått på övertalningsförmåga.

**8. Redovisa mixen och omklassificeringsgraden tillsammans.** En sund mix har ett litet antal incidenter med högsta prioritet och en bred bas av lägre. Om den översta nivån växer, fråga om skadan växte eller om kunder lärde sig att "kritisk" får uppmärksamhet. Omklassificeringsgraden visar hur väl matrisen passar: täta ändringar vid stängning betyder att regeln är oklar eller att den första bedömningen är forcerad. Granska ett stickprov av omklassificerade poster varje månad i gruppen som äger matrisen.

**9. Håll prioritet och den agila tjänsteklassen i linje.** Där leveransteam får incidentdrivet arbete, använd samma ord och samma matris, eller publicera en tydlig mappning. Ett team som kallar ett fel "högt" medan driften kallar samma fel "medel" förlorar tid på översättning. Reservera ett uttryckligt utrymme för expedierat arbete så att avbrottet syns i flödesmåtten (se ämne 2.1, Flödesmått).

### Leta efter upprepningar och mönster

**10. Följ upprepningar och återöppningar som separata signaler.** En återöppning betyder att den första rättelsen inte höll; en upprepning betyder att samma slags fel återvände efter en ordentlig rättelse. Det första pekar på lösningskvalitet och det andra på en olöst orsak. Länka upprepande kluster till problemposter och sluta räkna en incident som åtgärdad när den sannolikt kommer tillbaka (se ämne 4.1, Mätetal för problemhantering).

**11. Använd [Paretoprincipen](https://en.wikipedia.org/wiki/Pareto_principle) för att välja var du ska titta.** Sortera kategorier och tjänster efter incidentantal och se hur få som står för det mesta av volymen. Undersök de främsta innan du bygger nya rapporter för resten. Formen är en uppmaning till [grundorsaksanalys](https://en.wikipedia.org/wiki/Root_cause_analysis), inte en slutsats, eftersom en kategori med högt antal kan vara den som helt enkelt är lätt att kategorisera.

**12. Återför fynden till leverans och till servicedesken.** Dela kategori- och upprepningsvyerna med de team som bygger och ändrar tjänsterna, i ett regelbundet samtal snarare än en rapport. Para varje återkommande kluster med en ägare, ett nästa steg och ett datum och lägg arbetet i samma backlog som andra prioriteringar (se ämne 2.6, Mätetal för backlog och förfining). Volymen faller när orsaker tas bort, och det kräver planerad kapacitet.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Incidentvolym per tjänst | Att logga incidenter som förfrågningar, slå ihop orelaterade ärenden, avskräcka användare från att rapportera eller stänga dubbletter som "inget fel funnet" | Användarrapporterad kontaktvolym och förfrågningsvolym bredvid incidentvolym; nöjdhet och övergivna samtal från servicedesken; stickprov av förfrågningar som läses som fel |
| Normaliserad incidentfrekvens | Att välja nämnaren som ger den bästa siffran, eller ändra användningsdefinitionen mellan perioder | Fast användningsmått per tjänst, registrerat i registret; råa antal visade bredvid frekvensen |
| Prioritetsmix | Att sänka prioriteter för att se lugn ut eller höja dem för att få uppmärksamhet; att tilldela en låg prioritet för att undvika ett svarsmål | Omklassificeringsgrad för prioritet; månatlig stickprovsgranskning mot matrisen för påverkan och brådska; kundrapporterad påverkan |
| Omklassificeringsgrad för prioritet | Att inte ändra prioritet när den borde ändras, så att graden ser stabil ut; att ändra den först vid stängning för att passa målet | Stickprov av poster där påverkan ändrades under incidenten; granskningar av incidenttidslinjer |
| Kategorikoncentration | Att använda en samlingskategori, eller dela upp en stor kategori i flera för att dölja koncentration | Andel okategoriserade och "övrigt"-poster; periodisk granskning av kategorilistan; kontroller av kategorier mot lösningsanteckningar |
| Upprepningsgrad för incidenter | Att öppna en ny incident med annan formulering eller annat CI för att undvika länken; att stänga tidigt för att undvika en återöppning | Granskning av nästan-dubbletter efter text och tjänst; återöppningsgrad; länkgrad till problemposter |
| Återöppningsgrad | Att be användare öppna ett nytt ärende i stället för att öppna på nytt; att stänga ärenden sent för att undvika återöppningar | Antal nya ärenden som hänvisar till ett nyligen stängt; kundbekräftelse av lösning; fördelning av tid till stängning |
| Andel upptäckta av övervakning | Att skapa brusiga larm som öppnar incidenter automatiskt, eller låta människor märka om användarrapporter som larm | Larmkvalitetsmått som andel åtgärdbara larm (se ämne 5.5, Mätetal för övervakning och larmkvalitet); revision av incidentkälla |

En sund avläsning är tråkig och förklarbar. Normaliserade frekvenser är stadiga eller fallande för stabila tjänster och stiger när användning eller ändring stiger av ett skäl som diagrammet visar. Prioritetsmixen är stabil, omklassificeringen är låg och en liten uppsättning kategorier får avsiktlig uppmärksamhet. Upprepningar och återöppningar faller efter planerat problemarbete, och en rörelse i vilket mätetal som helst har en förklaring som någon kan ge utan att försvara siffran.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Råa incidentantal | Enkla, lätta att förklara, alltid tillgängliga | Blandar användning, kvalitet och rapporteringsbeteende i ett tal |
| Frekvenser mot användning | Möjliggör rättvis jämförelse över perioder och tjänster | Kräver en betrodd användningskälla; nämnare kan ifrågasättas |
| Fast matris för påverkan och brådska | Konsekvent prioritet över team; granskningsbar | Kan kännas stel; gränsfall behöver omdöme och en väg att åsidosätta |
| Fritt prioritetsval | Snabbt och flexibelt för erfarna handläggare | Inkonsekvent, öppet för press, svårt att jämföra över tid |
| Detaljerat kategoriträd | Visar var efterfrågan kommer ifrån | Svårt att använda under press; människor väljer första träffen eller "övrigt" |
| Kort kategorilista med etiketter | Snabb att tillämpa och konsekvent | Mindre detaljer; kan dölja mönster som behöver textanalys |
| Upprepningsgrad per CI och kategori | Pekar på olösta orsaker | Beror på bra CI-data; falska länkar och missar förekommer båda |

Acceptera att inget enskilt mått är rätt. Använd råa antal för kapacitetsplanering, frekvenser för hälsa, prioritetsmixen för risk och upprepningar för förbättring, och visa var och en för vad den är. Håll kategorilistan så kort att människor använder den och förbättra trädet bara när ett beslut behöver finare detaljer.

## Frågor att diskutera med teamet

**1. Vad räknas som en incident här, och tillämpar alla regeln på samma sätt?**
Ta tio nyliga poster och be var och en märka dem som incident, förfrågan eller något annat. Jämför svaren och diskutera oenigheter. Facilitatorn bör leta efter vanor som att behandla varje ärende från en senior person som en incident, och sedan enas om en skriven regel med exempel. Registrera datumet så att senare trender kan läsas rätt.

**2. När incidentvolymen steg förra kvartalet, vad visste vi då om användning och ändring?**
Lägg diagrammet bredvid en tidslinje över releaser, kampanjer och användningssiffror. Fråga vilken ökning som var förklarad och vilken som inte var det. Diskussionen visar ofta hur sällan nämnaren finns på sidan. Enas om vilket användningsmått varje tjänst ska bära från och med nu.

**3. Hur avgörs prioritet, och när överraskade den oss senast?**
Gå igenom matrisen för påverkan och brådska med ett nyligt exempel från varje prioritetsnivå. Fråga var handläggare gissar och var kunder eller chefer trycker på. Jämför öppningsprioriteten och stängningsprioriteten för några poster. Besluta en ändring av matrisen eller dess exempel som minskar gräl.

**4. Vilka tre kategorier tar det mesta av vår incidentvolym, och vem arbetar med att ta bort orsaken?**
Lista de främsta kategorierna och, för varje, ägaren till den underliggande orsaken. Om svaret är "ingen" är det ett fynd. Fråga om kategorin är ett verkligt kluster eller en vana i märkningen. Välj ett kluster att undersöka med leveransteamet det här kvartalet.

**5. Hur skiljer vi en upprepning från en återöppning, och vad gör vi åt var och en?**
Visa teamet två eller tre par av poster och fråga vilka som är upprepningar. Diskutera vad en återöppning säger om kvaliteten på den första rättelsen och vad en upprepning säger om orsaken. Facilitatorn bör styra gruppen mot att länka upprepande kluster till problemposter i stället för att stänga dem en i taget. Enas om vem som granskar dem och hur ofta.

**6. Vad skulle vi frestas att ändra om vårt incidentantal granskades av seniora ledare varje vecka?**
Be gruppen föreställa sig siffran på en vägg. Vilka vanor skulle förskjutas: hur saker loggas, hur ärenden slås ihop, hur prioriteter sätts? Namnge trycket öppet och utan skuldbeläggning. Enas om vilket skyddsräcke som skulle visa förskjutningen och vem som tittar på det.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam får resultatet av det här ämnet som efterfrågan. Kategori- och upprepningsvyerna visar vilka delar av produkten som orsakar mest besvär, och prioritetsmixen visar hur mycket avbrottsarbete det ska planeras för. Team bör behandla incidentdrivet arbete som en del av sin kapacitet, hålla det synligt i flödesmåtten och använda upprepande kluster för att motivera tillförlitlighetsarbete i backlogen (se ämne 2.9, Driftarbete och oplanerat arbete). Att räkna incidenter per release är en användbar trend, men den bör aldrig bli ett skuldmått för enskilda utvecklare.

### Service- och driftteam

Service- och driftteam skapar posterna och känner trycket kring prioritet. De har nytta av en tydlig matris, en kort kategorilista och snabba sätt att länka dubbletter. De bör kontrollera datan i sina egna verktyg, till exempel andelen okategoriserade poster och omklassificeringsgraden, innan andra gör det. Driftteam är väl placerade att köra den månatliga stickprovsgranskningen och att mata upprepande kluster in i problemhantering.

### Ledning och styrning

Ledare vill veta om tjänsten blir bättre och var de ska investera. De bör be om normaliserade frekvenser, prioritetsmixen och upprepningsvyn, med kommentarer, och motstå en enda volymsiffra. Mål för "färre incidenter" inbjuder till undertryckande, så sätt förväntningar på resultat som kundpåverkan och minskning av upprepningar i stället. Styrningen bör äga prioritetsmatrisen och godkänna ändringar av den, med effekten på trendlinjer noterad.

### Kunder och användare

Kunder upplever incidenter som avbrutet arbete, inte som kategorier. De behöver ett enkelt sätt att rapportera ett fel, en rättvis prioritet baserad på deras påverkan och ärliga uppdateringar. Om rapportering avskräcks eller prioriteter känns godtyckliga kommer volymen att falla och förtroendet med den. Dela de viktigaste fynden i termer användare känner igen, till exempel tjänsterna som förbättrats och problemen som tagits bort (se ämne 6.1, Mätetal för kundnöjdhet).

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på ett regionalt sjukhus stöder ett patientjournalsystem, ett bokningssystem och ett meddelandeverktyg för personal. Alla siffror i det här exemplet är illustrativa.

Månadsrapporten visar 640 incidenter under kvartalets sista månad, upp från 520 månaden innan. Ledningen ber om en återhämtningsplan. Tjänsteägaren för bokningssystemet, vars antal steg mest, ber att få titta på datan innan hen går med på att tjänsten blev sämre.

Tre fakta framträder. För det första fick bokningssystemet en ny klinikgrupp den månaden, och aktiva användare steg med ungefär 30 procent (illustrativt). Normaliserad var incidentfrekvensen per 1 000 sessioner grovt platt. För det andra var 90 av de extra posterna länkade till en överordnad incident, ett misslyckat gränssnitt mot ett laboratoriesystem, så antalet distinkta fel steg med bara en handfull. För det tredje förskjöts prioritetsmixen: andelen med högsta prioritet var 2 procent månaden innan och är nu 7 procent. Omklassificeringsgraden hade också fördubblats, och ett stickprov på 20 poster visade att ungefär hälften av de höga prioriteterna hade sänkts vid stängning.

Teamet fattar tre beslut. De redovisar överordnade incidenter och länkade poster separat. De lägger till aktiva sessioner i rapporten som nämnare. De håller en halvtimmes session med servicedesken och kliniska ledare för att tillämpa matrisen för påverkan och brådska på de stickprovade posterna, vilket visar att "en klinik kan inte boka patienter" hade behandlats som medel av vissa handläggare och som hög av andra. Matrisen får två kliniska exempel per cell.

Manipulationsrisken de fångar är tyst. En chef hade bett handläggare undvika prioritet 1 för bokningssystemet eftersom varje sådan utlöste en granskning, så poster öppnades på en lägre prioritet och höjdes senare, eller höjdes aldrig. Omklassificeringsgraden och stickprovsgranskningen avslöjade mönstret. Teamet enas om att granskningar handlar om lärande, publicerar det uttalandet och följer andelen incidenter som öppnats under stängningsprioriteten som skyddsräcke. Kategorikoncentrationen visar också gränssnittsfelet överst på listan, så en problempost öppnas och en rättelse schemaläggs med gränssnittsteamet.

## Agilitet, AI, automatisering och analys

### Agilitet

Granska incidentefterfrågan vid regelbundna förbättringssamtal med de produktteam som äger de berörda tjänsterna och välj en upprepad orsak att ta bort. Varningen är att ett mål om färre incidenter kan minska ärlig rapportering, så behåll andelen upptäckta av övervakning bredvid antalet.

### AI

AI kan klassificera och prioritera incidenter i volym, vilket förskjuter prioritetsmixen och kategorikoncentrationen utan någon förändring i verklig påverkan. Para prioritetsmixen med en stickprovsbaserad mänsklig kontroll av prioritetens ärlighet och redovisa omklassificeringsgraden för AI-tilldelade prioriteter. Varningen är att en modell tränad på tidigare ärenden upprepar gamla kategorivanor, så bevaka nya slags incidenter som förs in under gamla etiketter.

### Automatisering

Fånga incidentskapande, prioritetsändringar och övervakningslarm automatiskt så att volymen räknas ur händelser, och mät det automatiska klassificeringssteget på dess felfrekvens. Varningen är att larmstormar skapar incidentantal som speglar verktyg, inte användarskada, så normalisera efter användning och avduplicera.

### Analys

Normalisera volym efter användning och visa prioritet som en mix över tid, med upprepade incidenter länkade till en orsak. Beslutet detta ger underlag för är var man ska investera i förebyggande. Varningen är att ett lågt antal incidenter med hög prioritet är för litet för att jämföras från månad till månad, så använd längre fönster.

## Branschperspektiv

**Startup.** Volymen är liten och teamet känner varje incident, så frekvenser och matriser kan kännas tunga. Behåll ett enkelt antal per tjänst och en kort lista med kategorier, och skriv ned på en sida vad som räknas som en incident. Bevaka upprepningar, eftersom ett litet team snabbt kan eliminera ett upprepande fel och vinna tid tillbaka.

**Småföretag.** Servicedesken kan vara en enda person som använder ett hostat verktyg. Använd verktygets standardrapporter, håll prioritet till några få nivåer med en enkel regel för påverkan och brådska och kontrollera att förfrågningar inte räknas som incidenter. Jämför från månad till månad med anteckningar om förändringar, till exempel ny personal eller ny programvara.

**Storföretag.** Många tjänster, leverantörer och deskar gör konsekvens till huvudfrågan. Enas om en matris för påverkan och brådska, ett kategorischema med begränsat djup och en regel för avduplicering, och låt lokala team lägga till etiketter utan att ändra det gemensamma schemat. Normalisera per tjänst och granska trender med kontrolldiagram och kommentarer. Leverantörsorsakade incidenter behöver en gemensam definition i avtal (se ämne 5.1, Mätetal för SLA, OLA och XLA).

**Offentlig sektor.** Incidenter kan bära rapporteringsskyldigheter, revisionsbehov och allmänt intresse, särskilt där tjänster påverkar medborgares rättigheter eller säkerhet. Dokumentera prioritetsmatrisen och kategorischemat, behåll ett revisionsspår över ändringar av prioritet och var försiktig med varje publicerat antal, eftersom offentlig redovisning kan skapa starkt tryck på hur poster skrivs. Användningsdata kan begränsas av integritetsregler, så ange den nämnare du legitimt kan använda (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Motivet är efterfrågehantering. Incidenter förbrukar kvalificerad tid, avbryter planerat arbete och stör användare. Att förstå volym, prioritet och upprepningar låter en organisation ta bort orsaker, dimensionera bemanning mot verklig efterfrågan och visa ledare var tillförlitlighetsarbete skulle löna sig.

Kostnaden har tre delar. Uppsättningen omfattar att definiera incident och förfrågan, enas om prioritetsmatrisen och kategorischemat och länka användningsdata till tjänster. Driftkostnaden är möda att hålla poster rena, en månatlig stickprovsgranskning och en person som underhåller rapporten. En tredje kostnad är tiden att agera på fynden, vilket är där det mesta av avkastningen kommer ifrån, så planera kapacitet för den.

Avkastningen beskrivs bäst som mönster du kan mäta själv. De inkluderar färre upprepningar efter problemarbete, mindre tid i prioritetstvister, färre överraskande eskaleringar och en bättre matchning mellan bemanning och efterfrågan. Undvik att lova en procentuell minskning av incidenter; den beror på tjänsten, utgångsläget och arbetet som görs. Den totala ägandekostnaden är mestadels människors tid, så räkna den och jämför den med tiden som upprepade incidenter för närvarande förbrukar.

## Antimönster och fallgropar

- **Att redovisa ett rått antal som ett hälsobetyg.** Användning, ändring och rapporteringsbeteende flyttar det alla. Visa normaliserade frekvenser, råa antal och kommentarer tillsammans.
- **Mål för färre incidenter.** De belönar undertryckande och felmärkning. Sätt mål för minskning av upprepningar och kundpåverkan och behåll incidentantalet som information.
- **Att räkna förfrågningar som incidenter.** Volymen stiger och tjänsten ser sämre ut än den är. Skilj posttyperna åt och redovisa var och en.
- **Fritt prioritetsval.** Prioritet blir förhandling och mixen blir meningslös. Använd en publicerad matris och stickprova för konsekvens.
- **Ett kategoriträd som ingen använder.** Människor väljer första träffen och "övrigt" växer. Håll det kort, granska "övrigt" månadsvis och rensa det som inte används.
- **Att räkna varje länkat ärende som ett separat fel.** Ett enda avbrott dominerar månaden. Redovisa överordnade incidenter och antalet länkade poster.
- **Att rangordna handläggare eller team efter incidentantal.** Antal per person speglar arbetsfördelning och ärendevanor. Aggregera till tjänster och granska mönster, inte människor.
- **Att ignorera upprepningar.** Samma fel rättas om och om igen, och ingen äger orsaken. Länka upprepningar till problemposter och tilldela en ägare.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Definitioner och räkning | Människor är oense om vad en incident är; antal kommer från ad hoc-exporter | Vissa team filtrerar förfrågningar från incidenter; reglerna skiljer sig | En skriven definition, ett filter och en avdupliceringsregel för alla team | Definitionsändringar loggas och visas i trenddiagram; andelen okategoriserade poster följs | Definitioner granskas med leverantörer och kunder och revideras när de slutar ge underlag för beslut |
| Normalisering och tolkning | Bara råa antal | Användningsdata används av några tjänster | Ett namngivet användningsmått per tjänst från en separat källa | Kontrolldiagram med kommentarer används i granskningar | Användnings-, ändrings- och incidentdata länkas över team och leverantörer för att förklara efterfrågan |
| Prioritetspraxis | Prioritet väljs på känn | Matris finns i vissa team | En matris med exempel, visad där prioritet väljs | Mix och omklassificeringsgrad granskas och stickprovas månadsvis | Matrisen trimmas med kunder och kliniska eller verksamhetsägare när förhållanden ändras |
| Upprepningar och mönster | Upprepningar märks ur minnet | Kategorilistor granskas då och då | Upprepnings- och återöppningsgrad redovisas månadsvis med ett angivet fönster | Upprepande kluster länkas till problemposter med ägare och datum | Orsaksborttagning över team och leverantörer finansieras och följs till minskad efterfrågan |

## Checklista

- [ ] En skriven definition skiljer incidenter från förfrågningar, larm och problem.
- [ ] Överordnade incidenter och länkade poster redovisas separat.
- [ ] Varje incident hänförs till en tjänst ur tjänstekatalogen.
- [ ] Varje tjänst har ett namngivet användningsmått från en annan källa än incidentverktyget.
- [ ] Rapporter visar det råa antalet, den normaliserade frekvensen och kommentarer för releaser och kampanjer.
- [ ] Ett kontrolldiagram används innan någon reagerar på en förändring i veckovolym.
- [ ] Prioritet härleds ur en publicerad matris för påverkan och brådska med exempel.
- [ ] Prioritetsmixen och omklassificeringsgraden granskas tillsammans varje månad.
- [ ] Kategorilistan är kort, och andelen "övrigt" och okategoriserade poster följs.
- [ ] Upprepnings- och återöppningsgrad använder angivna fönster och redovisas separat.
- [ ] Upprepande kluster länkas till problemposter med en ägare.
- [ ] Ingen rapport rangordnar enskilda handläggare efter incidentantal.

## AI-prompter

**Kontrollera en definition av incidentvolym efter tvetydighet.**

```text
We count incident volume for [service or team] from [ITSM tool]. Our current
filter is [describe record types, statuses, and exclusions] and our period is
[period]. Review the definition for ambiguity, including how requests, duplicates,
merged tickets, and cancelled records are handled. Suggest a clear written rule
and a short list of examples that would settle disagreements. Do not invent
benchmark values. List your assumptions and the questions I should answer to
complete the definition.
```

**Utforma en normaliserad incidentfrekvens.**

```text
For the service [service name] I want an incident rate normalized by usage. The
available usage measures are [list, for example active users, sessions,
transactions] from [source]. Compare the options, say which fits best and why,
and describe what could distort each one. Propose how to show the raw count, the
rate, and annotations for [events such as releases or campaigns] on one chart.
Do not invent figures or thresholds. List your assumptions.
```

**Granska en matris för påverkan och brådska.**

```text
Here is our priority matrix: [paste impact levels, urgency levels, and the
resulting priorities], and here are [number] anonymized example incidents:
[paste short descriptions]. Apply the matrix to each example, point out where two
readers could reach different priorities, and suggest wording or examples that
reduce the disagreement. Identify ways the matrix could be gamed. Do not invent
response targets or benchmark values. List your assumptions.
```

**Analysera kategorier och upprepningar efter förbättringskandidater.**

```text
I have incident records for [period] with these fields: [list fields, for
example service, category, CI, opening time, closing time, reopen flag]. Describe
a method to find the top categories, to separate reopens from repeats using a
window of [window], and to choose [number] candidates for problem investigation.
Explain how to check for catch-all categories and near-duplicate records. Do not
invent patterns in data I have not shown you. List your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta ämnet som definierar ett relaterat mätetal och skyddsräcket som bör sitta bredvid.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett redigerat mätetalsämne behåller sina klockor, manipuleringsvektorer och skyddsräcken fullständiga.

## Viktigaste slutsatser

- Incidentvolym speglar användning, ändring och rapporteringsbeteende lika mycket som kvalitet, så normalisera den och kommentera den.
- Läs prioritet som en mix, härled den ur en publicerad matris för påverkan och brådska och bevaka omklassificeringsgraden.
- Redovisa överordnade incidenter och länkade poster separat så att ett avbrott inte ser ut som en månad av rutinarbete.
- Upprepningar och återöppningar är de mest användbara signalerna, eftersom de pekar på orsaker och rättelser som inte höll.
- Aggregera till tjänster och team, aldrig till enskilda handläggare, och para varje mätetal med ett skyddsräcke.
- Använd kontrolldiagram och Paretovyer för att avgöra var du ska titta och ge sedan varje kluster en ägare och kapacitet.

## Referenser och vidare läsning

1. Axelos (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. ISO/IEC 20000-1, *Information technology: Service management: Service management system requirements*, International Organization for Standardization.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [Help desk software](https://en.wikipedia.org/wiki/Help_desk_software).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
13. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
