# DORA-mätetal

**DORA-mätetalen beskriver hur snabbt och hur säkert ett teams programvaruändringar når produktion, så läs hastighetsmåtten och stabilitetsmåtten tillsammans, beräkna dem ur pipeline- och incidenthändelser och använd dem för att inleda samtal om ett leveranssystem, aldrig för att rangordna team eller människor.**

## Översikt och motiv

DORA-mätetalen kommer från forskningsprogrammet [DevOps Research and Assessment (DORA)](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment), en långvarig studie av hur praxis för programvaruleverans relaterar till resultat för team och organisationer. Nicole Forsgren, Jez Humble och Gene Kim presenterade de tidiga resultaten i boken [Accelerate](https://en.wikipedia.org/wiki/Accelerate_(book)) 2018, och programmet har fortsatt under Google Cloud med en årlig rapport. Forskningen frågade vilka mätbara aspekter av leverans som förutsäger goda resultat och landade i en liten uppsättning mått på prestation i programvaruleverans som kan beräknas ur leveranspipelinen och incidentregistret.

I oktober 2026 beskriver DORA:s webbplats fem mått på prestation i programvaruleverans, uppdelade i två grupper. Tre beskriver **genomflöde**, alltså hur fort ändringar rör sig: ledtid för ändring, driftsättningsfrekvens och återställningstid efter misslyckad driftsättning. Två beskriver **instabilitet**, alltså hur ofta en release orsakar problem: andel misslyckade ändringar och omarbetsgrad vid driftsättning. Tidigare publikationer beskrev fyra mått, med "tid till återställning av tjänst" i stället för återställningstid efter misslyckad driftsättning och utan omarbetsgraden. Definitionerna har förfinats genom åren, så ange alltid vilken utgåva av vägledningen du följer och datumet då du senast kontrollerade den.

Forskningsfyndet som gjorde måtten berömda är att hastighet och stabilitet tenderar att röra sig tillsammans över team. Team som driftsatte ofta och hade korta ledtider betalade i genomsnitt inte för det med fler fel. Det kullkastar det gamla antagandet att gå fortare betyder att förstöra mer. Det är ett mönster i enkät- och pipelinedata, inte en lag, och det gäller team som har investerat i praktiker som [kontinuerlig leverans](https://en.wikipedia.org/wiki/Continuous_delivery), små batchar, automatiserad testning och snabb återkoppling. Måtten är signaler om de underliggande förmågorna. De är inte förmågorna själva.

Termerna nedan återkommer i det här ämnet.

- En **driftsättning** är handlingen att lägga en version av programvaran i en given miljö. Det här ämnet menar produktion om det inte sägs annat.
- En **ändring** är en uppsättning modifieringar av programvaran, vanligen en eller flera incheckningar som levereras tillsammans. I ITIL 4 har ordet en vidare betydelse och omfattar varje tillägg, modifiering eller borttagning som kan påverka tjänster, och [ITIL](https://en.wikipedia.org/wiki/ITIL)-praktiken som styr det är ändringsmöjliggörande.
- En **misslyckad driftsättning** är en driftsättning som orsakar en försämrad tjänst eller ett avbrott i produktion och kräver åtgärd, till exempel en snabbrättelse, en återställning eller en patch. Ditt team skriver ned den exakta regeln, eftersom forskningen överlåter det åt lokal definition.
- En **återställning** (rollback) är handlingen att återföra produktion till den tidigare kända fungerande versionen.
- En **percentil** är ett värde under vilket en angiven andel av observationerna faller. Den 85:e percentilen av ledtid är talet som 85 procent av ändringarna slår.

Agila och ITIL-baserade synsätt möts på denna grund. Ett agilt team ser dessa siffror som återkoppling på sin ingenjörspraxis och sina arbetsöverenskommelser. En ITIL-utövare ser dem som resultatbelägg för ändringsmöjliggörande, releasehantering, driftsättningshantering och incidenthantering. Spänningen gäller oftast kontroll. En traditionell ändringsgranskningsnämnd försöker minska fel genom att granska varje ändring innan den levereras. DORA-forskningen fann att tungt externt godkännande inte var förknippat med bättre stabilitet, och att kollegagranskning, automatiserad testning och små ändringar var det. I ITIL 4 tar ändringsmöjliggörande hänsyn till detta genom att skilja standard-, normala och nödändringar och genom att låta ändringar med låg risk förhandsgodkännas (se ämne 4.3, Mätetal för ändringsmöjliggörande).

Måtten har också begränsningar som forskningen själv anger, och de praktiska råden i det här ämnet bygger på dem. De beskriver ett leveranssystem för en applikation eller tjänst, de är avsedda för förbättringssamtal och de säger ingenting om huruvida arbetet som levereras är värdefullt. Ett team kan visa utmärkta siffror medan det levererar fel sak. Av det skälet står det här ämnet bredvid, och inte ovanför, flödesmåtten (se ämne 2.1, Flödesmått), tillförlitlighetsmåtten för tjänster (se ämne 5.2, SLI:er, SLO:er och felbudgetar) och resultatmåtten (se ämne 1.3, Resultat före leverans: att välja vad som ska mätas).

Slutligen inbjuder måtten till [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) i samma ögonblick de dyker upp på en ledningsinstrumentpanel. Driftsättningsfrekvens är lättast att blåsa upp och antal misslyckade driftsättningar är lättast att dölja. Varje rekommendation nedan parar därför ett mått med en kontroll av hur det kan böjas (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Nyckelprinciper

- **Beräkna ur händelser, inte ur minnet.** Driftsättningar kommer från pipelinen, fel och återställningar från incidentregistret och ledtid från versionshantering sammanfogad med pipelinen (se ämne 1.5, Datakällor och instrumentering).
- **Läs hastighet och stabilitet som en bild.** Ett snabbt team med stigande fel, eller ett stabilt team som levererar kvartalsvis, berättar något som ingen av halvorna visar ensam.
- **Mät en tjänst eller applikation, inte en person.** Analysenheten är ett leveranssystem. Individer driftsätter inte ensamma, och att rangordna dem förstör data.
- **Jämför ett team med dess eget förflutna, inte med ett annat team.** Sammanhanget skiljer sig kraftigt mellan en betalningstjänst, en dataplattform och en mobilapp, och forskningen själv varnar för att använda måtten som en resultattabell.
- **Använd fördelningar för tider.** Ledtid och återställningstid har långa svansar, så redovisa medianen och en hög percentil (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).
- **Behandla måtten som symtom.** När en siffra rör sig, leta efter orsaken i förmågorna under den, till exempel batchstorlek, testautomatisering, granskningspraxis och arkitektur, och kör sedan ett experiment.
- **Skriv ned definitionerna.** Fel, driftsättning och "start av arbete" är omdömesfrågor. Registrera valet och håll det stabilt så att trenden betyder något.

## Mätetalsdefinitioner

De fem mätetalen nedan följer DORA:s vägledning per oktober 2026. Formlerna anger de klockor och undantag ditt team bör skriva ned. Där forskningen lämnar en gräns öppen visar tabellen ett rimligt standardval och rekommendationerna förklarar valet.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ledtid för ändring | Tid för en åtagen ändring att nå produktion | Klockan startar vid ändringens första incheckning (eller dess sammanslagning till huvudgrenen, om det anges i definitionen) och stoppar när driftsättningen i produktion slutförts framgångsrikt; redovisa medianen och 85:e percentilen för ändringar som driftsatts under perioden; ändringar som aldrig driftsatts utesluts och redovisas separat som pågående arbete | Timmar eller dagar | Versionshantering sammanfogad med driftsättningspipelinen | Driftsättningshantering; releasehantering; ändringsmöjliggörande | Cykeltid; ledtid till produktion | Veckovis eller per release, granskas månadsvis |
| Driftsättningsfrekvens | Hur ofta ett team driftsätter i produktion | Antal lyckade driftsättningar av applikationen i produktion under perioden / dagar i perioden; misslyckade eller återställda driftsättningar utesluts ur antalet lyckade; driftsättningar i testmiljöer utesluts | Driftsättningar per dag eller per vecka | Händelselogg från driftsättningspipelinen | Driftsättningshantering; releasehantering | Kontinuerlig leverans; release i slutet av varje inkrement | Veckovis |
| Återställningstid efter misslyckad driftsättning | Hur lång tid det tar att återhämta sig när en driftsättning orsakar ett fel i produktion | Klockan startar när felet upptäcks eller rapporteras (samma regel varje gång) och stoppar när tjänsten är återställd för användare; redovisa medianen och 85:e percentilen för misslyckade driftsättningar under perioden; incidenter som inte orsakats av en driftsättning utesluts | Minuter eller timmar | Incidentregister sammanfogat med driftsättningshändelser och övervakningslarm | Incidenthantering; hantering av tjänstekontinuitet | Tid till återhämtning; återställningsarbete | Per fel, granskas månadsvis |
| Andel misslyckade ändringar | Andel driftsättningar i produktion som orsakar ett fel som kräver åtgärd | Driftsättningar som krävde en snabbrättelse, återställning, patch eller incidentrespons / alla driftsättningar i produktion under perioden; regeln som kopplar ett fel till dess driftsättning är nedskriven och tillämpas på samma sätt varje gång | Procent | Driftsättningshändelser sammanfogade med incidenter, återställningar och snabbrättelser | Ändringsmöjliggörande; incidenthantering | Definition av klart; undkomna fel | Månadsvis |
| Omarbetsgrad vid driftsättning | Andel driftsättningar i produktion som var oplanerade och gjordes för att rätta ett användarvänt problem | Oplanerade driftsättningar som gjorts som svar på ett produktionsproblem / alla driftsättningar i produktion under perioden; planerade driftsättningar som råkar innehålla en rättelse utesluts; regeln för "oplanerad" är nedskriven | Procent | Pipelinelogg märkt efter driftsättningsorsak, länkad till incident- eller felposter | Ändringsmöjliggörande; problemhantering | Oplanerat arbete; felrättning släppt utanför planen | Månadsvis |

Två anmärkningar om tabellen. För det första överlappar andel misslyckade ändringar och omarbetsgrad vid driftsättning varandra och är inte samma sak: ett fel som teamet märker och återställer utan någon ny driftsättning räknas i andelen misslyckade ändringar men inte i omarbetsgraden, medan en planerad rättelse som teamet schemalägger inte räknas i någondera. För det andra behandlar forskningen **driftsättning** som enheten och räknar per applikation, så en plattform med femtio tjänster har femtio uppsättningar siffror, inte en.

## Rekommendationer

### Börja med definitioner och klockor

**1. Skriv en enkelsidig definition för varje mätetal innan du ritar det.** Ange vad som räknas som en driftsättning, vilken miljö som är produktion, var klockan startar för ledtid och hur ett fel kopplas till en driftsättning. Lägg sidan i mätetalsregistret (se ämne 1.4, Styrning och ägarskap av mätetal). En definition som bara finns i någons huvud kommer att glida första gången verktyget eller teamet ändras.

**2. Välj en start för ledtid och håll dig till den.** De vanligaste valen är den första incheckningen på ändringen, sammanslagningen till huvudgrenen och skapandet av ett ärende. Den första incheckningen mäter leveranssystemet och ignorerar tid arbetet låg i en backlog. Ärendestarten mäter mer av kundens väntan men blandar in prioritering (se ämne 2.2, Ledtid, cykeltid och flödeseffektivitet). Använd en konsekvent och säg vilken i varje diagram.

**3. Tillskriv fel med en angiven regel.** Ett fel tillhör en driftsättning när, till exempel, en incident öppnas inom ett angivet fönster efter driftsättningen och dess orsaksanalys pekar på den ändringen, eller när en återställning eller snabbrättelse är märkt till den. Välj en regel som människor kan tillämpa utan gräl, granska ett stickprov av fall varje kvartal och håll regeln densamma tillräckligt länge för att se en trend.

### Instrumentera från pipelinen

**4. Ta driftsättningshändelser från pipelinen, inte från ett kalkylblad.** Ett [CI/CD](https://en.wikipedia.org/wiki/CI/CD)-system som registrerar varje driftsättning i produktion med en tidsstämpel, en version och ett resultat ger dig driftsättningsfrekvens och stoppet för ledtidsklockan utan någon mänsklig inmatning. Handinmatade antal är sena och inkonsekventa, och de inbjuder till de efterhandsregistreringsproblem som beskrivs i ämne 1.5, Datakällor och instrumentering. Open source-projektet Four Keys från DORA-teamet är ett genomfört exempel på hur man samlar in dessa händelser, men vilken likvärdig egen pipeline som helst duger.

**5. Sammanfoga incidentregistret med driftsättningar.** Fel- och återställningsmått behöver två källor: driftsättningsloggen och incidentverktyget. Lägg till ett fält i incidentposten för "orsakad av driftsättning" och driftsättningens identifierare, ifyllt under lösningen och kontrollerat i efteranalysen (se ämne 4.2, Mätetal för efteranalyser och lärande). Utan sammanfogningen blir andelen misslyckade ändringar en gissning.

**6. Märk orsaken till varje driftsättning.** Omarbetsgraden behöver skilja planerade driftsättningar från oplanerade rättelser. En enkel etikett på pipelinekörningen, till exempel "planerad ändring" eller "rättelse av produktionsproblem", räcker. Håll etikettlistan kort så att människor inte behöver tänka på den under press.

### Redovisa siffrorna ärligt

**7. Redovisa fördelningar och antal, inte ett enda medelvärde.** Visa medianen och den 85:e percentilen för ledtid och återställningstid, med antalet observationer bakom var och en. En vecka med två driftsättningar och ett fel har en andel misslyckade ändringar på 50 procent som betyder mycket lite, så visa antalen bredvid procentsatsen och föredra ett längre fönster för andelar (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

**8. Visa genomflödes- och instabilitetsgrupperna sida vid sida.** Lägg de tre genomflödesmåtten och de två instabilitetsmåtten i en vy, per tjänst, med trenden över minst ett kvartal. Publicera aldrig driftsättningsfrekvens utan felmåtten bredvid. Om en ledare ber om ett enda tal, förklara att det inte finns någon enskild DORA-poäng och erbjud tvågruppsvyn i stället.

**9. Håll jämförelser inom ett teams egen historik.** Ett team som flyttar sin medianledtid från nio dagar till fem har lärt sig något. Att rangordna det mot ett annat team med annan arkitektur, reglerbörda eller releasetåg bevisar lite och lär båda teamen att skydda sina siffror. När du måste sammanställa för styrning, visa spridningen över tjänster och förbättringstrenden, inte en resultattabell (se ämne 1.2, Goodharts lag och mätetalens psykologi).

### Förbättra systemet siffrorna beskriver

**10. Minska batchstorleken först.** Små ändringar kortar ledtiden, gör fel lättare att diagnostisera och sänker kostnaden för en återställning. Tekniker inkluderar [funktionsomkopplare](https://en.wikipedia.org/wiki/Feature_toggle), trunkbaserat arbetssätt och att dela upp arbete så att varje inkrement kan levereras ensamt (se ämne 2.7, Mätetal för pull requests och kodgranskning). Följ medianstorleken på ändringar bredvid ledtid så att du kan se om batchen verkligen krymper.

**11. Investera i snabb upptäckt och snabb reversering.** Återställningstiden faller när teamet kan se ett fel inom minuter och när det kan [återställa](https://en.wikipedia.org/wiki/Rollback_(data_management)) eller stänga av en ändring utan ett nytt bygge. En [kanarieutrullning](https://en.wikipedia.org/wiki/Canary_release), en funktionsomkopplare och en automatisk återställning kortar var och en intervallet mellan fel och återställning. Mät tiden från driftsättning till upptäckt separat, eftersom långsam upptäckt gömmer sig inuti en återställningstid (se ämne 3.3, Svarstid och lösningstid för incidenter).

**12. Använd siffrorna för att välja en förmåga att förbättra.** Välj ett svagt mått, fråga varför det är svagt och välj en praxis ur forskningens förmågelista som åtgärdar orsaken, till exempel testautomatisering, löst kopplad arkitektur eller lättviktigt ändringsgodkännande. Kör ändringen i ett kvartal och titta på trenden. Para experimentet med ett retrospektivämne så att teamet äger förbättringen (se ämne 9.5, Mätetal för ständig förbättring).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Ledtid för ändring | Att flytta klockans start senare, till exempel starta vid sammanslagning i stället för första incheckning; att slå ihop tidigt till en långlivad gren; att utesluta svåra ändringar som "inte kod"; att skicka triviala ändringar genom pipelinen för att dra ner medianen | Percentil och ålder på pågående arbete; en fast skriven start för klockan; stickprov av de långsammaste 10 procenten av ändringar varje kvartal; fördelning av ändringsstorlek |
| Driftsättningsfrekvens | Att dela upp en ändring i många triviala driftsättningar; att driftsätta oförändrade byggen på nytt; att räkna driftsättningar till staging eller tomma konfigurationsändringar | Ändringsstorlek per driftsättning; andel driftsättningar som innehåller användarsynlig ändring; andel misslyckade ändringar och omarbetsgrad bredvid |
| Återställningstid efter misslyckad driftsättning | Att starta klockan sent eller stänga incidenter tidigt; att omklassificera ett fel som en ny incident efter en delvis rättelse; att höja tröskeln för vad som är ett "fel" | Återkomst av samma incident inom ett angivet fönster; klockstart hämtad från övervakningslarm; kundrapporterad påverkanstid |
| Andel misslyckade ändringar | Att inte koppla incidenter till driftsättningar; att bara räkna fel som ger ett fullständigt avbrott; att vidga fönstret så att fel faller utanför det; att rätta framåt och kalla det en ny ändring | Granska ett stickprov av incidenter mot driftsättningsloggen varje kvartal; följ andelen incidenter med en registrerad driftsättningslänk; omarbetsgrad vid driftsättning |
| Omarbetsgrad vid driftsättning | Att märka rättelser som planerat arbete; att bunta en rättelse i en schemalagd release; att undvika rättelsedriftsättningar genom att fördröja rättelsen | Fel- och undkomna fel-antal ur ärendehanteringssystemet; ålder på öppna produktionsfel; etikettrevision på ett stickprov av driftsättningar |

En sund avläsning visar ledtid och återställningstid som krymper eller ligger stabilt på låg nivå, driftsättningsfrekvens som är stabil eller stigande med små ändringar, och fel- och omarbetsgrader som är platta eller fallande, med antal som är stora nog att lita på. Misstänkta avläsningar inkluderar ett plötsligt hopp i driftsättningsfrekvens utan någon förändring i arbetet, en felgrad som faller till noll inom en månad och en återställningstid som sjunker medan kundklagomålen förblir desamma. Var och en kräver en titt på instrumentet före ett firande.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Använd alla fem DORA-mätetal per tjänst | Forskningsbaserat, balanserar hastighet mot stabilitet, beräknat ur objektiva händelser | Kräver en pipeline och ett incidentregister som sammanfogas rent; säger inget om huruvida arbetet var värdefullt |
| Redovisa bara driftsättningsfrekvens och ledtid | Lätt att samla in ur pipelinen | Belönar enbart hastighet och inbjuder till just den manipulation som stabilitetsmått fångar |
| Använd lokala definitioner per team | Passar teamets arkitektur och releasestil | Team kan inte jämföras, och sammanställningar är otillförlitliga |
| Använd en organisationsövergripande definition | Konsekvent rapportering; enkel styrning | Passar vissa system dåligt, till exempel stordatorer med batchfönster eller reglerade releaser |
| Jämför team mot publicerade prestationsband | Ger ledare en snabb känsla för position | Ignorerar sammanhang, och forskningen varnar för att banden inte är mål för varje team |
| Använd måtten för teamets egen förbättring | Bygger ägarskap; stöder ärliga data | Ger mindre trygghet till ledare som vill ha en enda poäng |

Den centrala spänningen ligger mellan jämförbarhet och ärlighet. Ju mer ett tal används för att bedöma team, desto mer böjs datan och desto mindre hjälper den teamet som äger den. Använd måtten för att stödja förbättring först, acceptera ofullständig jämförbarhet och håll ledarnivåns vyer till trender och spridning. Där reglerad rapportering kräver en standarddefinition, dokumentera den och håll teamnivåns förbättringsvy åtskild.

## Frågor att diskutera med teamet

**1. Vilka av våra fem DORA-tal kommer från händelser, och vilka kommer från någons minne?**
Följ varje mätetal tillbaka till dess källa. Notera var en person skriver in ett datum eller avgör om något räknas som ett fel. Facilitatorn bör hjälpa gruppen rangordna de manuella stegen efter hur mycket de kan förvränga siffran och enas om vilket som ska automatiseras först.

**2. Var exakt startar och stoppar vår ledtidsklocka, och är alla överens?**
Be tre personer beskriva klockans start och stopp för den senaste ändringen som levererades. Jämför svaren. Skillnader dyker oftast upp kring första incheckningen, sammanslagningen, ett ärende och godkännandesteget. Enas om en definition och skriv ned den, och diskutera vilken väntetid den valda definitionen döljer.

**3. Vad räknas som en misslyckad driftsättning för oss, och vem avgör?**
Gå igenom de fem senaste produktionsincidenterna och fråga om var och en hör till en driftsättning. Oenigheter visar var regeln är oklar. Diskutera vad som händer med ett fel som rättas med en konfigurationsändring, en återställning eller en snabb patch och besluta hur var och en registreras.

**4. Om driftsättningsfrekvensen fördubblades nästa kvartal, vad skulle vi kontrollera innan vi kallade det goda nyheter?**
Bjud in gruppen att nämna sätten talet kan stiga utan att leverera mer värde. Titta på ändringsstorlek, andelen driftsättningar med användarsynlig ändring och fel- och omarbetsgraderna. Facilitatorn bör notera vilka kontroller som redan finns på instrumentpanelen och vilka som behöver läggas till.

**5. Hur används de här siffrorna av människor utanför teamet?**
Fråga vem som ser dem, i vilken form och vad de gör med dem. Lyssna efter jämförelse med andra team, mål satta utifrån och användning i individuella utvärderingar. Diskutera vad teamet skulle behöva se ändras i den användningen för att kunna lita på sin egen data och vem som har ställning att göra ändringen.

**6. Vilken enskild förmåga skulle mest förbättra vårt svagaste tal, och vad är ett litet experiment att pröva?**
Välj det svagaste mätetalet och prata igenom dess sannolika orsaker, till exempel stora batchar, långsam granskning, opålitliga tester eller ett manuellt releasesteg. Välj en orsak och utforma ett experiment på fyra till sex veckor med ett sätt att se effekten. Enas om ett datum för att granska resultatet och vem som tar med datan.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam äger förmågorna som driver dessa siffror: små ändringar, automatiserade tester, en snabb pipeline och en vana att granska varandras arbete. De bör använda måtten som en spegel för sin egen ingenjörspraxis, sätta sina egna förbättringsmål och motstå trycket att rapportera ett enda tal uppåt. De bestämmer också definitionerna, så de bär plikten att hålla dem ärliga (se ämne 2.7, Mätetal för pull requests och kodgranskning).

### Service- och driftteam

Driftteam håller incidentregistret som fel- och återställningsmått beror på. De hjälper leveransteamet genom att märka incidenter med driftsättningen som orsakade dem, genom att tillhandahålla övervakning som upptäcker fel snabbt och genom att delta i granskningen av varje misslyckad driftsättning. De bör bevaka att leveranshastigheten inte köper instabilitet som de absorberar som jourbelastning (se ämne 5.7, Mätetal för rutinarbete och jour) och be om de återställnings- och upptäcktsinvesteringar som minskar återställningstiden.

### Ledning och styrning

Ledare bör be om trender och spridning över tjänster, de två måttgrupperna tillsammans och de förbättringsexperiment som ligger bakom dem. De bör undvika mål som låser fast ett tal, till exempel "driftsätt dagligen", och undvika att använda måtten i individuella utvärderingar. Styrande organ kan använda siffrorna som belägg för att en lättare ändringsgodkännandeväg är säker, eller som skäl att se över den, genom att visa om stabiliteten förblev stadig när processen ändrades (se ämne 4.4, Misslyckade ändringar och omarbete).

### Kunder och användare

Kunder bryr sig sällan om antal driftsättningar. De bryr sig om hur snabbt en rättelse eller funktion når dem, hur sällan en release förstör något de förlitar sig på och hur fort tjänsten återvänder när det händer. Använd DORA-mätetalen som internt belägg för att dessa resultat är sannolika och komplettera dem med kundvända mått som tillgänglighet och nöjdhet (se ämne 5.3, Mätetal för tillgänglighet, och ämne 6.1, Mätetal för kundnöjdhet).

## I praktiken: ett exempel från tjänstehantering

En medelstor nätbutik driver en utcheckningstjänst som ägs av ett produktteam, med stöd av ett plattformsteam och servicedesken. Alla siffror nedan är illustrativa.

Teamet har driftsatt i produktion ungefär två gånger i veckan, med en ledtid (första incheckning till produktion) på en median på 11 dagar och en 85:e percentil på 26 dagar. Under föregående kvartal följdes 6 av 24 driftsättningar (25 procent, illustrativt) av en återställning eller en incident. Mediantiden för återställning för dessa fel var 3 timmar. Ändringsgranskningsnämnden möts varje vecka och granskar varje ändring av utcheckningstjänsten.

Teamet föreslår en plan. Det ska dela upp stora ändringar, lägga till automatiska kontroller i pipelinen, lägga nytt beteende bakom funktionsomkopplare och be nämnden förhandsgodkänna lågriskändringar som klarar kontrollerna som standardändringar. Ändringsansvarig är tveksam, så teamet går med på att redovisa alla fem mätetal månadsvis och att avbryta experimentet om felgraden stiger två månader i rad.

Efter ett kvartal är siffrorna (illustrativt) 19 driftsättningar i månaden, en medianledtid på 3 dagar med en 85:e percentil på 8 dagar, en andel misslyckade ändringar på 8 procent, en medianåterställningstid på 40 minuter och en omarbetsgrad på 5 procent. Teamet är nöjt, och en regionchef ber att få jämföra utcheckningsteamets driftsättningsfrekvens med de andra produktteamen och sätta ett gemensamt mål.

Teamledaren tar med fördelningen av omarbete och fel till granskningen och märker en manipulationsrisk. Driftsättningsfrekvensen har hjälpts av ett antal små konfigurationsdriftsättningar som pipelinen räknar, och medianen av ändringsstorlek krymper fortare än det faktiska arbetet. Värre är att två incidenter förra månaden rättades med en konfigurationsändring som pipelinen loggade som en normal driftsättning märkt "planerad", så omarbetsgraden underskattades. Andelen misslyckade ändringar såg bra ut delvis för att de två incidenterna inte hade kopplats till sina ursprungliga driftsättningar.

Beslutet, registrerat i beslutsloggen, har fyra delar. Driftsättningar enbart av konfiguration räknas separat och visas bredvid huvudtalet. Driftsättningsorsaksetiketten revideras månadsvis på ett stickprov av 10 driftsättningar. Incidentverktyget kräver nu driftsättningens identifierare när orsaken är en ändring. Och teamet avböjer det gemensamma målet för driftsättningsfrekvens och erbjuder i stället en delad vy som visar varje tjänsts trend och dess felgrad. Ändringsansvarig går med på att behålla förhandsgodkännandet av standardändringar, med en granskning i slutet av nästa kvartal.

## Agilitet, AI, automatisering och analys

### Agilitet

DORA-mätetalen beskriver hur snabbt och säkert ändringar når produktion, vilket är den praktiska kärnan i kontinuerlig leverans. En bra praxis är att läsa hastighets- och stabilitetsmåtten tillsammans vid en regelbunden granskning med intressenter och välja en förbättring. Varningen är att teamet kan blåsa upp driftsättningsfrekvensen genom att dela upp ändringar, så bevaka ändringsstorlek och omarbete.

### AI

AI-stödd kodning kan höja ändringsvolymen och korta ledtiden medan den höjer omarbete eller misslyckade ändringar. Redovisa AI-stödda och andra ändringar tillsammans på samma stabilitetsmått och jämför återställningstid efter misslyckad driftsättning och omarbetsgrad vid driftsättning före och efter införandet. Varningen är att DORA-forskningen om AI utvecklas, så kontrollera de aktuella publicerade rapporterna innan du citerar något fynd.

### Automatisering

Beräkna alla fem mått ur pipeline- och incidenthändelser automatiskt, med en tydlig regel för vad som räknas som en driftsättning och ett fel. Mät själva pipelinen på dess egna fel och opålitlighet. Varningen är att automatisering kan dölja manuella steg som ligger utanför pipelinen, till exempel ett godkännande via e-post, så kartlägg den verkliga vägen en gång.

### Analys

Redovisa fördelningar, inte bara medelvärden, och jämför ett team med dess eget förflutna, inte med andra team. Beslutet detta ger underlag för är var leveranssystemet är långsamt eller skört. Varningen är att resultattabeller över team uppmuntrar till manipulation, och att siffrorna beror på lokala definitioner av en driftsättning och ett fel.

## Branschperspektiv

**Startup.** Ett litet team driftsätter ofta många gånger om dagen och har tunna incidentregister, så driftsättningsfrekvens och ledtid är lätta men feldata är fläckiga. Börja med att märka varje återställning och snabbrättelse i pipelinen och föra en enkel incidentlogg med driftsättningens identifierare. Låt inte en hög frekvens övertyga dig om att stabiliteten är bra utan att kontrollera felgraden.

**Småföretag.** En hostad plattform eller en utkontrakterad utvecklare kan driftsätta bara månadsvis, med lite verktyg. Räkna det du kan för hand under några månader, be leverantören om driftsättnings- och incidentdatum skriftligt och fokusera på ledtid och felgrad. Använd siffrorna för att avgöra om mindre ändringar som levereras kontinuerligt skulle minska risken, inte för att jaga ett band.

**Storföretag.** Många team, flera releasestilar och en blandning av moderna och äldre system gör konsekventa definitioner svåra. Enas om en gemensam miniminivå av definition för varje mätetal, publicera den och låt ett team lägga till strängare lokala med ett angivet skäl. Sammanställ genom att visa spridningen och trenden per tjänst i stället för ett medelvärde, och håll teamnivåns detaljer synliga bara för det ägande teamet och dess stödjande grupper.

**Offentlig sektor.** Releasefönster, revisionsregler och upphandlingsavtal formar vad som är möjligt, och vissa system drivs av leverantörer. Ta med rätt till leverans- och incidentdata i avtal så att mätetalen kan beräknas. Använd siffrorna som belägg för att ett moderniseringsprogram kortar ledtider utan att höja felgraden och redovisa alla mått tillsammans så att resultaten inte väljs ut (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Motivet är att korta tiden mellan en idé och dess användning samtidigt som produktionen hålls stabil. Programmets kostnad har tre delar: instrumentering (pipelinehändelser, driftsättningsetiketter och incidentsammanfogningen), granskningsrutinen (en månatlig titt på trenderna och ett kvartalsvis stickprov av fel- och omarbetsfall) och det förbättringsarbete siffrorna pekar på, till exempel testautomatisering eller en snabbare pipeline. De två första är måttliga. Den tredje är där den verkliga utgiften ligger, och den läggs på ingenjörsförmåga, inte på mätning.

Avkastningen kommer från beslut som siffrorna gör lättare. Ett team kan visa en ändringsnämnd att små ändringar är säkra och därmed avveckla ett godkännandesteg. En plattformsgrupp kan se vilka tjänster som har långsamma pipelines eller dålig återställning och placera sin investering därefter. Ett driftteam kan argumentera med data för ett bättre upptäcktsverktyg. Beskriv avkastningen genom mönster du själv kan observera, till exempel tiden från incheckning till produktion, andelen releaser som behöver en rättelse och jourbelastningen per release, före och efter en ändring. Undvik att citera riktmärkessiffror från andra organisationer som förväntad avkastning, eftersom ditt sammanhang skiljer sig. Den totala ägandekostnaden domineras av människors tid, så håll mätetalsuppsättningen liten och automatisera insamlingen (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att behandla måtten som ett prestationsstyrkort för individer.** Det bryter forskningsgrunden och förstör data. Redovisa bara på tjänste- och teamnivå.
- **Att sätta mål som "driftsätt dagligen" eller "ledtid under en dag".** Målet ersätter syftet. Sätt en förbättringsriktning och ett experiment och behåll talet som en signal.
- **Att rangordna team mot varandra eller mot publicerade band.** Sammanhanget skiljer sig och manipulation följer. Jämför ett team med dess egen trend och använd band bara som lös orientering.
- **Att redovisa hastighet utan stabilitet.** Paret är poängen. Visa alltid genomflödes- och instabilitetsgrupperna tillsammans.
- **Att låta definitioner glida.** Fel, driftsättning och ledtidens start ändras i tysthet med verktyget. Logga varje ändring av en definition med sitt skäl och markera den i diagrammet.
- **Att räkna driftsättningar av vad som helst.** Konfigurationspushar, testmiljöreleaser och omdriftsättningar av samma bygge blåser upp antalet. Definiera en driftsättning i produktion och visa andra slag separat.
- **Att ignorera vad som levereras.** Starka siffror kan dölja arbete som inte spelar roll. Läs dem bredvid flödes- och resultatmått (se ämne 2.9, Driftarbete och oplanerat arbete).
- **Att jaga måttet i stället för förmågan.** Ledtiden faller mest pålitligt när batchar krymper och tester blir snabbare. Förbättra praxisen och låt talet följa.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Definitioner och klockor | Var och en definierar driftsättning och fel olika | Några team dokumenterar sina definitioner | En skriven definition per mätetal, med klockor och undantag, i mätetalsregistret | Definitionsändringar loggas och markeras i diagram; stickprov kontrolleras varje kvartal | Definitioner revideras gemensamt med leverantörer och styrning när de slutar ge underlag för beslut |
| Datainsamling | Antal sammanställs för hand ur ärenden | Pipelinedata för vissa tjänster; incidenter länkas för hand | Driftsättningar, orsaker och incidentlänkar fångas automatiskt för de flesta tjänster | Datakvalitet (länkgrad, etikettrevision) mäts och följs över tid | Händelser delas över team och leverantörer via överenskomna gränssnitt |
| Användning av siffrorna | Redovisas uppåt som en enda poäng | Team tittar på sina egna diagram då och då | Genomflödes- och instabilitetsgrupperna granskas tillsammans månadsvis av det ägande teamet | Trender matar finansierade förbättringsexperiment med ett skyddsräcke | Spridning och trender ger underlag för plattformsinvesteringar och ändringspolicy över organisationen |
| Skyddsräcken mot manipulation | Inga | Informell medvetenhet | Parade skyddsräcken listade för varje mätetal | Skyddsräcken och stickprov granskas, med manipulationsfall registrerade | Skyddsräcken trimmas fortlöpande när team och verktyg ändras |

## Checklista

- [ ] De fem mätetalen är definierade skriftligt, med klockor, undantag samt datum och utgåva av den DORA-vägledning som följs.
- [ ] Driftsättningar i produktion registreras av pipelinen med en tidsstämpel, en version och ett resultat.
- [ ] Starten för ledtid (första incheckning, sammanslagning eller annat) är angiven och tillämpas konsekvent.
- [ ] Incidenter bär ett fält för driftsättningen som orsakade dem, ifyllt under lösningen.
- [ ] Varje driftsättning bär en orsaksetikett, och ett stickprov revideras månadsvis.
- [ ] Tider redovisas som medianen och en hög percentil, med antal.
- [ ] Genomflödes- och instabilitetsmått visas tillsammans för varje tjänst.
- [ ] Ändringsstorlek följs bredvid driftsättningsfrekvens och ledtid.
- [ ] Siffrorna används inte i individuella utvärderingar eller för att rangordna team.
- [ ] En namngiven ägare granskar mätetalen månadsvis och loggar varje ändring av en definition.
- [ ] Ett förbättringsexperiment, knutet till det svagaste mätetalet, pågår med ett granskningsdatum.

## AI-prompter

**Skriv en enkelsidig definitionsuppsättning för de fem mätetalen.**

```text
I am defining the DORA software delivery metrics for [service or application
name]. Our tools are [version control host, CI/CD system, incident tool, ITSM
tool]. Our release style is [continuous, weekly, monthly, or other]. For change
lead time, deployment frequency, failed deployment recovery time, change fail
rate, and deployment rework rate, draft a definition with where the clock starts
and stops, what is counted and excluded, the data source, and one risk of
ambiguity. Do not invent benchmark values or claim our practice matches any
published performance band. List your assumptions and the questions I should
answer to finish the definitions.
```

**Kontrollera en mätetalsuppsättning efter manipulationsrisker.**

```text
Here is how we currently compute our delivery metrics: [description of each
metric, its data source, and how it is reported]. The audience is [team,
leadership, or governance body]. For each metric, list plausible ways the number
could be inflated, hidden, or distorted without real improvement, and suggest a
paired guardrail metric or practice that would catch it. Do not invent
statistics. List your assumptions and any information you would need to be more
precise.
```

**Analysera en dataexport av driftsättningar och incidenter.**

```text
I will paste a small export of [number] production deployments and [number]
incidents with these fields: [list fields, for example deployment id, timestamp,
result, reason tag, incident id, opened time, resolved time, deployment link].
Compute the median and 85th percentile of recovery time, the change fail rate,
and the rework rate, showing the counts behind each. Flag records with missing
links or suspicious timestamps. Do not extrapolate beyond the data or compare
the result with outside benchmarks. List your assumptions and the data quality
issues that limit the conclusions.
```

**Planera ett förbättringsexperiment.**

```text
Our weakest delivery metric is [metric name], currently [value as reported,
with date range and counts]. Likely causes the team has discussed are [list]. Our
constraints are [constraints, for example regulated releases, shared test
environment]. Propose three small experiments of four to six weeks, each with a
hypothesis, a way to observe the effect, a guardrail metric, and a risk. Do not
invent expected improvement figures. List your assumptions and what we should
check before starting.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta de relaterade ämnena om ändringar, releaser och incidenter och skyddsräcket som bör sitta bredvid varje DORA-mätetal.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en reviderad version av det här ämnet håller sina klockor, manipuleringsvektorer och korsreferenser konsekventa.

## Viktigaste slutsatser

- DORA-mätetalen är fem mått på programvaruleverans, tre av genomflöde och två av instabilitet, och de är mest användbara när de läses tillsammans för en tjänst.
- Beräkna dem ur pipeline- och incidenthändelser med skrivna definitioner, eftersom fel och ledtidens start är omdömesfrågor.
- Använd dem för att lära om ett leveranssystem och jämför ett team med dess egen historik, aldrig för att rangordna människor eller team.
- Redovisa medianer, höga percentiler och antal och para varje mätetal med ett skyddsräcke som fångar dess manipulation.
- Förbättra de underliggande förmågorna, till exempel små batchar, snabb upptäckt och enkel återställning, och låt siffrorna följa.
- Ange utgåvan och datumet för vägledningen du följer, eftersom definitionerna har förfinats över tid.

## Referenser och vidare läsning

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. DORA, *DORA research program*, Google Cloud, https://dora.dev/research/
4. DORA, *Four Keys project*, https://github.com/dora-team/fourkeys
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
6. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [DevOps Research and Assessment](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment).
9. Wikipedia, [Accelerate (book)](https://en.wikipedia.org/wiki/Accelerate_(book)).
10. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
16. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
