# Mätetal för analys och datakvalitet

**Varje tal i den här boken är bara så pålitligt som datan och analysen bakom det, så mät datans kvalitet, analysens hållbarhet och resultatets användning i ett beslut, och säg alltid vad ett tal inte kan visa.**

## Översikt och motiv

[Analys](https://en.wikipedia.org/wiki/Analytics) är användningen av data och statistik för att besvara frågor och ge underlag för beslut. Inom tjänstehantering sträcker den sig från en enkel veckovis räkning av ärenden till modeller som förutsäger vilka ändringar som kommer att misslyckas. Analys är det fjärde perspektivet i den här boken, vid sidan av agil praxis, AI och automatisering, och det är också det som de andra tre perspektiven beror av. En instrumentpanel byggd på dålig [datakvalitet](https://en.wikipedia.org/wiki/Data_quality) ger självsäkra svar på fel frågor.

Datakvalitet är en uppsättning egenskaper: om data är fullständiga, riktiga, konsekventa, aktuella, unika och giltiga. Tidigare ämnen behandlade var tjänstedata kommer ifrån och hur man läser dem (se ämne 1.5, Datakällor och instrumentering, och ämne 1.6, Statistisk läskunnighet för tjänstemätetal). Det här ämnet förvandlar dessa idéer till mått som ett team kan följa om sina egna data och sin egen analys, på samma sätt som del 4 mäter ändring. Det täcker också analys som praxis: frågorna som ställs, metoderna som används, vem som kontrollerar dem och om resultatet ändrade ett beslut.

Analys är attraktiv därför att den skalar. En analytiker kan betjäna många team, och en modell kan poängsätta varje ärende. Samma skala förstärker misstag. En feltolkad definition i en delad datamängd sprids till varje rapport byggd på den, och en modell tränad på tidigare beteende kan upprepa gammal partiskhet i hög fart. AI-verktyg som skriver frågor, diagram och sammanfattningar gör analys billigare och gör också fel lättare att producera med självförtroende, så kontroll spelar större roll.

Termer som används här. En **datamängd** är en definierad samling poster, till exempel ärenden eller driftsättningar. **Härkomst** är registret över var data kom ifrån och vad som gjordes med dem. **Avstämning** jämför två källor som borde stämma överens. Ett **datakontrakt** är en överenskommelse mellan producenten och användarna av en datamängd om dess struktur, betydelse och kvalitet. En **analys** är en fråga, en metod och ett resultat. **Osäkerhet** är intervallet inom vilket ett värde kan ligga, givet datan och metoden. En **beslutslogg** registrerar de beslut ett tal gav underlag för.

## Nyckelprinciper

- **Börja från frågan och beslutet.** En analys utan ett beslut kopplat till sig är omkostnad.
- **Mät data om datan.** Fullständighet, aktualitet och avstämning är mått ett team kan äga.
- **Behåll härkomsten.** Ett tal du inte kan spåra till sin källa kan inte rättas.
- **Ange osäkerhet och gränser.** Visa antalet bakom en grad och säg vad talet inte kan visa.
- **Kontrollera analys som kod.** Granska definitioner och frågor och håll dem i versionshantering.
- **Skydda människor.** Analys av människors beteende behöver integritetsgränser, och resultat beskriver team och tjänster.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fullständighet i obligatoriska fält | Andel poster med alla fält som krävs för de mätetal som använder dem | poster med varje obligatoriskt fält närvarande och giltigt / poster inom omfånget | procent | Utdrag ur källsystem och datakvalitetskontroller | Mätning och rapportering; kunskapshantering | Definition av klart för poster | Månadsvis |
| Datans aktualitet | Åldern på de senaste uppgifterna i en datamängd när en rapport läses | median och maximum av (tid då rapporten läses minus tid för den senast inlästa posten) över datamängder | timmar | Pipelineloggar och metadata för datamängder | Mätning och rapportering | Snabb återkoppling | Veckovis |
| Avstämningsavvikelse | Skillnad mellan två källor som borde stämma överens om samma kvantitet | absolut skillnad mellan källa A och källa B / källa A, för ett angivet stickprov av kvantiteter och period | procent | Två källsystem | Mätning och rapportering; ekonomistyrning | Arbetsöverenskommelser om definitioner | Kvartalsvis |
| Täckning av härkomst | Andel rapporterade mätetal vars källa, omvandlingar och ägare är dokumenterade | mätetal i registret med dokumenterad härkomst / rapporterade mätetal | procent | Mätetalsregister och datakatalog | Styrning | Teamöverenskommelser | Kvartalsvis |
| Felgrad i datapipelinekörningar | Andel datapipelinekörningar som misslyckas eller läser in ofullständiga data | datapipelinekörningar som misslyckades eller läste in ofullständiga data / startade körningar | procent | Loggar från datapipelines | Mätning och rapportering | Kontinuerlig integration för data | Veckovis |
| Granskningsgrad för analys | Andel publicerade analysdelar som granskades av en andra person före användning | analysdelar med en registrerad granskning / analysdelar publicerade för en beslutsfattande publik | procent | Analysregister och granskningslogg | Mätning och rapportering; ständig förbättring | Kollegial granskning | Kvartalsvis |
| Beslutsanvändningsgrad | Andel rapporterade mätetal som citeras i ett registrerat beslut under perioden | mätetal citerade i en beslutsloggspost / rapporterade mätetal | procent | Beslutslogg och mätetalsregister | Ständig förbättring | Retrospektiva åtgärder | Kvartalsvis |

Fullständighet räknar ett fält som närvarande bara om det innehåller ett giltigt värde, så en platshållare såsom "saknas" räknas inte. Avstämningsavvikelse gäller ett namngivet stickprov av kvantiteter, till exempel ärendeantal för en månad, och anger stickprovet.

## Rekommendationer

### Gör datakvalitet synlig

**1. Definiera datakvalitet i termer av mätetalen.** Lista de fält och tidsstämplar dina viktigaste mätetal beror av och definiera hur giltiga värden ser ut för var och en. Kontrollera dessa först, eftersom en saknad tidsstämpel bryter ett tidsmått.

**2. Kontrollera vid källan, inte bara i rapporten.** En kvalitetskontroll som körs när data skapas, till exempel ett obligatoriskt fält i ärendeformuläret, förhindrar fel som ingen senare rensning kan reparera fullt ut. Lägg också till kontroller när data läses in.

**3. Publicera kvalitet bredvid talen.** Visa fullständighet och aktualitet på instrumentpanelen som visar mätetalet. En läsare bör se datans kvalitet utan att fråga.

**4. Stäm av enligt schema.** Jämför minst en kvantitet mellan två system varje kvartal, till exempel antalet ändringar i ändringsregistret och i pipelinen. Undersök och förklara skillnader och registrera fyndet.

### Håll analysen ärlig

**5. Skriv frågan och beslutet först.** Före analysen, registrera frågan, beslutet den ger underlag för och vem som ska besluta. När beslutet har fattats, registrera vad som beslutades.

**6. Håll härkomst och definitioner i ett register.** Länka varje mätetal till dess källa, omvandling, ägare och översynsdatum (se ämne 1.4, Styrning och ägarskap av mätetal). Ändringar av definitioner loggas med skäl och markeras i diagram.

**7. Granska varje analys.** En andra person kontrollerar definitioner, frågor och slutsatser för varje analys som används i ett beslut. Håll frågor i versionshantering så att de kan köras om.

**8. Ange osäkerhet och gränser.** Visa antalet poster bakom varje grad, intervall där de spelar roll och vad analysen inte kan visa. Undvik precision i ett enda tal där datan inte stöder det.

### Styr användningen

**9. Använd datakontrakt för delade datamängder.** Teamet som producerar en datamängd anger dess betydelse, fält, aktualitet och kända problem och meddelar användare när den ändras. Brytande ändringar kräver förvarning.

**10. Skydda människor i datan.** Besluta vem som får se råa poster, hur länge data sparas och vilken minsta gruppstorlek som gäller för rapporter. Håll analys på team- och tjänstenivå och kontrollera de integritetsregler som gäller dig.

**11. Avveckla rapporter och datamängder.** En rapport som ingen använder kostar fortfarande underhåll och kan vilseleda. Se över användning och avveckla det som inte citeras i beslut.

**12. Behandla AI-stödd analys som ogranskad tills den kontrollerats.** AI-verktyg kan skriva en fråga eller en sammanfattning som ser riktig ut och är fel. Granska frågan, kör om på ett litet känt stickprov och registrera att den kontrollerats.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Fullständighet i obligatoriska fält | Att fylla fält med platshållare eller standardvärden; att göra fält valfria | Giltighetskontroller på innehållet; stickprova poster för verkliga värden |
| Datans aktualitet | Att tidsstämpla inläsningar i stället för händelser; att läsa in tomma uppdateringar | Kontrollera händelsetid mot inläsningstid; radantal per inläsning |
| Avstämningsavvikelse | Att välja kvantiteter som råkar stämma; att justera en källa så att den matchar | Rotera kvantiteter; för en spårbar logg över justeringar |
| Täckning av härkomst | Att dokumentera härkomst ytligt; att kopiera text mellan poster | Stickprova poster och spåra ett mätetal från början till slut |
| Felgrad i datapipelinekörningar | Att markera misslyckade körningar som omförsökta eller lyckade; att radera loggar | Jämför postantal med källan; larma på luckor |
| Granskningsgrad för analys | Stämpelgranskningar; granskning efter beslutet | Kontrollera granskarens anteckningar; kräv granskning före användning |
| Beslutsanvändningsgrad | Att citera mätetal i en logg utan effekt på beslutet | Fråga vad som ändrades; stickprova poster |

En sund avläsning är datakvalitetstal som är synliga och stabila, skillnader mellan källor som förklaras, analys som granskas före användning och mätetal som kommer och går allteftersom beslut kräver.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Strikt datavalidering vid inmatning | Förhindrar fel tidigt | Friktion för användare; platshållarposter |
| Rensa data i efterhand | Flexibelt; saktar inte ned användare | Döljer orsaken; fel finns kvar i vissa rapporter |
| Centralt analysteam | Konsekventa metoder och kvalitet | Flaskhals; avstånd från arbetet |
| Självbetjäningsanalys hos team | Snabbt; nära arbetet | Inkonsekventa definitioner; ojämn kvalitet |
| AI-stödd analys | Snabba utkast; sänker tröskeln | Självsäkra fel; svag reproducerbarhet |

Slutsatsen är att förhindra fel vid källan, dela definitioner och härkomst på ett ställe och kräva granskning av varje analys som ger underlag för ett beslut. Hastighet från självbetjäning och AI är välkommen när kontrollen hänger med.

## Frågor att diskutera med teamet

**1. Vilka tre tal på vår instrumentpanel skulle vi mest ångra om datan under dem var fel?**
Börja med de tal som driver beslut eller mål. Fråga vad datan beror av och vem som äger källan. Människor upptäcker ofta att ett nyckeltal beror av ett fält som matas in för hand. Följ upp genom att välja ett att kontrollera den här månaden.

**2. När var två rapporter oense, och hur löste vi det?**
Berättelser om motstridiga tal visar var definitioner skiljer sig. Fråga om lösningen registrerades och om orsaken rättades. Facilitatorn bör notera upprepade orsaker, till exempel olika tidszoner eller statusdefinitioner. Följ upp genom att enas om en definition och en ägare.

**3. Hur gammal är datan i rapporten vi tittar på mest?**
Många vet inte. Fråga hur aktualitet visas och om en föråldrad inläsning skulle märkas. Diskutera kostnaden för ett föråldrat beslut. Följ upp genom att lägga till aktualitet i rapporten.

**4. Vem granskade den senaste analysen som ändrade ett beslut?**
Leta efter ett andra par ögon på definitioner och frågor. Om det inte fanns något, diskutera varför. Fråga vilken granskning som vore proportionerlig. Följ upp genom att välja ett enkelt granskningssteg för varje analys som ger underlag för ett betydande beslut.

**5. Vad kan vårt mest använda mätetal inte berätta för oss?**
Att namnge gränser är vanan hos god analys. Be om specifika blinda fläckar, till exempel användare som inte kontaktar support. Registrera gränserna bredvid mätetalet. Följ upp genom att lägga till ett mått som täcker en blind fläck.

**6. Hur använder vi AI-verktyg för att skriva frågor och sammanfattningar, och hur kontrollerar vi dem?**
Be om faktisk praxis, inte policy. Lyssna efter ogranskad utdata som används i rapporter. Diskutera en enkel kontroll, till exempel att köra om på ett känt stickprov. Följ upp genom att enas om en regel för AI-stödd analys.

## Fyra perspektiv

### Produkt- och leveransteam

Era verktyg producerar mycket av de data andra analyserar. Håll tidsstämplar, identifierare och statusar pålitliga och tala om för dataanvändare när ett fält ändras. Inkludera datakvalitet i definitionen av klart för nya funktioner som producerar data.

### Service- och driftteam

Ärendedata beror på hur människor fyller i formulär under press. Gör den riktiga inmatningen till den lätta, kontrollera datakvaliteten i verktyget och säg ifrån när ett mätetal feltolkar arbetet. Backdatera inte och massuppdatera inte poster för att förbättra ett tal.

### Ledning och styrning

Be om datakvalitet och härkomst bredvid varje tal som stöder ett beslut eller ett mål. Finansiera datateknik och granskningstid, inte bara instrumentpaneler. Skydda integritet och undvik att använda analys av individer för att utvärdera människor.

### Kunder och användare

Data om dig styr hur tjänsten behandlar dig, så fråga vad som samlas in och hur det används. Där din återkoppling finns i datan, till exempel enkätsvar, fråga hur den skyddas och hur den nådde ett beslut.

## I praktiken: ett exempel från tjänstehantering

Ett regionalt energibolags it-avdelning bygger en instrumentpanel för incidentlösningstid och andel misslyckade ändringar åt sin ledningsgrupp. Siffrorna i det här exemplet är illustrativa. Instrumentpanelen visar en mediantid för lösning på 3,1 timmar och en andel misslyckade ändringar på 4 procent.

En analytiker kontrollerar kvaliteten före lanseringen. Fullständigheten i obligatoriska fält för tidsstämpeln för löst är 91 procent, där de saknade posterna mest är större incidenter som registrerats i efterhand. Aktualiteten är 26 timmar, eftersom utdraget körs över natten. Avstämning av ändringsregistret mot pipelinen visar 8 procent fler produktionsändringar i pipelinen än i ändringsregistret, så andelen misslyckade har ett nämnarproblem.

Teamet gör ändringar. Ärendeformuläret kräver tid för löst och kontrollerar att den är senare än tiden för öppnat. Instrumentpanelen visar antalet incidenter bakom varje tal, datans ålder och fullständigheten i de fält som används. Ett datakontrakt anger att ändringsregistret är den auktoritativa källan för godkända ändringar och pipelinen för driftsättningar, med en månatlig avstämning. Den första avstämningen förklarar gapet som nödändringar registrerade bara i pipelinen.

En manipuleringsrisk dyker upp när en chef föreslår att utesluta incidenter med saknad lösningstid för att förbättra fullständigheten. Teamet vägrar och rättar inmatningen. Resultatet är ett bredare intervall runt medianen och en andel misslyckade ändringar på 6 procent. Beslutsloggen registrerar att ledningsgruppen valde att vänta ett kvartal innan ett mål sattes. Det som förblir svårt: backdaterade poster går inte alla att upptäcka, och avstämningen beror på en manuell identifierarlänk.

## Agilitet, AI, automatisering och analys

### Agilitet

Korta återkopplingsloopar hjälper datakvaliteten: rätta formuläret, kontrollera nästa dags data och fråga användarna. En god praxis är att se över datakvalitetstal vid det regelbundna förbättringssamtalet med de människor som matar in datan. Varningen är att ständiga ändringar av fält och statusar bryter trender, så logga varje definitionsändring.

### AI

AI kan skriva frågor, skriva utkast till diagram, sammanfatta kommentarer och flagga avvikelser, och den kan också hitta på rimliga resultat. Behandla AI-stödd analys som ogranskad tills en person kontrollerar frågan och kör om den på ett litet känt stickprov, och registrera att den kontrollerats. Varningen är att AI-sammanfattningar av enkätkommentarer kan feltolka språk och ton, så läs ett stickprov av originalen.

### Automatisering

Automatisera datakvalitetskontroller vid inläsning och vid rapporttillfället och mät pipelines på fel och luckor. Larma på uteblivna inläsningar och plötsliga förändringar i volym. Varningen är att automatiska rensningsregler kan dölja ett källproblem, så redovisa vad som ändrades och varför.

### Analys

Det här ämnet handlar om analys, så praxis är en kort anteckning om varje mätetal: dess fråga, beslut, härkomst, kvalitet och gränser. Beslutet detta ger underlag för är om man kan lita på ett tal nog för att agera. Varningen är att prydliga instrumentpaneler kan vila på svaga data, så visa kvalitetstalen bredvid resultatet och håll definitionerna av Service Management Metrics i ett register.

## Branschperspektiv

**Startup.** Data är små och föränderliga. Håll en enda sanningskälla för varje mätetal, skriv definitioner i ett kort dokument och undvik att bygga en dataplattform innan frågorna är tydliga.

**Småföretag.** Data kan finnas i ett hostat verktyg med fasta rapporter. Kontrollera hur verktyget definierar varje mått, exportera stickprov för att verifiera och håll en kort lista över vad rapporterna inte kan visa.

**Storföretag.** Många källor och team skapar motstridiga definitioner. Använd ett delat mätetalsregister, datakontrakt och regelbunden avstämning och ge team medlen att kontrollera sina egna data.

**Offentlig sektor.** Handlingar kan omfattas av regler om gallring, åtkomst och offentlig rapportering. Dokumentera härkomsten för varje publicerat tal och behåll integritetsregler för data om människor (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaden är personaltid för datakvalitetskontroller, avstämning, dokumentation och granskning, plus verktyg för datapipelines och kataloger där de används. Mycket av det kan börja med små steg, till exempel validering i ärendeformuläret.

Avkastningen är beslut fattade på bättre tal, mindre tid som läggs på att bråka om vilken rapport som är riktig och mindre omarbete när ett feltolkat tal upptäcks sent. Beskriv den som ett mönster, inte som ett tal: färre omkastade beslut och färre tvister. Om du behöver tal för ett case, mät dina egna baslinjer, till exempel avstämningsavvikelse och tid som läggs på att lösa rapporttvister, före och efter ändringen (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Rensning bara i rapporten.** Källan fortsätter producera fel. Rätta inmatnings- och inläsningskontroller.
- **Instrumentpaneler utan kvalitetstal.** Läsare kan inte bedöma talet. Visa fullständighet, aktualitet och antal.
- **Odokumenterade definitioner.** Tal ändrar betydelse i det tysta. Behåll härkomst och en ändringslogg.
- **Ogranskad analys.** Fel når beslut. Kräv en andra titt.
- **Att lita på AI-sammanfattningar.** De kan vara flytande och felaktiga. Kontrollera frågor och stickprova originalen.
- **Analys av individer.** Den blir övervakning och korrumperar data. Redovisa på teamnivå med en minsta gruppstorlek.
- **Att aldrig avveckla rapporter.** De ackumuleras och vilseleder. Se över användning och ta bort.
- **Enskilda tal utan osäkerhet.** De inbjuder till överreaktion. Visa antal och intervall.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Datakvalitet | Okänd kvalitet; kalkylblad för hand | Fullständighet kontrolleras för nyckelfält | Kvalitetskontroller vid inmatning och inläsning, visade i rapporter | Avstämning och kvalitetstrender ses över i regelbunden rytm | Kvalitet hanteras med datakontrakt över team |
| Härkomst och definitioner | Definitioner i människors huvuden | Vissa definitioner skrivna | Register med källa, ägare och ändringslogg | Härkomst spåras från början till slut för nyckelmätetal | Definitioner delas över team och leverantörer |
| Analyspraxis | Engångsrapporter; ingen granskning | Viss kollegial granskning | Frågor, beslut och granskning registreras | Analys återanvänds, granskas och avvecklas | Analys inbäddad i beslut med återkoppling på resultat |

## Checklista

- [ ] Varje nyckelmätetal listar de fält och tidsstämplar det beror av.
- [ ] Obligatoriska fält valideras vid inmatning, inte bara rensas senare.
- [ ] Rapporter visar fullständighet, aktualitet och antalet bakom varje grad.
- [ ] Minst en kvantitet stäms av mellan två källor varje kvartal.
- [ ] Ett register registrerar källa, omvandling, ägare och översynsdatum för varje mätetal.
- [ ] Definitionsändringar loggas och markeras i diagram.
- [ ] Analys som ger underlag för ett beslut granskas av en andra person.
- [ ] Regler finns för AI-stödd analys, inklusive en kontroll på ett känt stickprov.
- [ ] Åtkomst, lagring och minsta gruppstorlek är definierade för personrelaterade data.
- [ ] Varje mätetal har en manipuleringsvektor och ett skyddsräcke visat bredvid.

## AI-prompter

**Skriv ett utkast till datakvalitetskontroller för ett mätetal.**

```text
We report this metric: [metric name], defined as [definition including clock start
and stop]. It depends on these fields in [tool]: [list fields]. Propose data quality
checks for completeness, validity, timeliness, and consistency, and say where each
check should run (at entry, at load, or in the report). Do not invent thresholds;
use placeholders. Mark assumptions and list questions I should answer.
```

**Granska en analys innan den används.**

```text
Here is an analysis we plan to use for a decision: [paste question, method,
query or steps, and result, without personal data]. Review it for unclear
definitions, wrong denominators, small samples, missing uncertainty, and
conclusions that go beyond the data. Do not assume facts not in the text. List
what you could not judge and what a human reviewer should check.
```

**Planera en avstämning mellan två system.**

```text
Two systems should agree on [quantity]: [system A] and [system B]. Propose a
reconciliation plan: the sample, the period, how to match records, how to
classify differences, and how to record findings. Do not invent expected
variance. List assumptions and the access I would need.
```

**Granska manipuleringsrisken i datakvalitetsmått.**

```text
We report these data quality measures: [paste measures and definitions].
Context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without improving the data, propose a guardrail, and say how
that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## AI-färdigheter

- [Data quality](../../../../skills/data-quality/SKILL.md): använd för att definiera och kontrollera kvaliteten på en datamängd.
- [Data pipeline](../../../../skills/data-pipeline/SKILL.md): använd för att utforma och granska pipelinen som läser in tjänstedata.
- [Statistical analysis](../../../../skills/statistical-analysis/SKILL.md): använd för att kontrollera att en metod och dess osäkerhet passar frågan.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det ämne som täcker ett mätetal och dess parade skyddsräcke.

## Viktigaste slutsatser

- Ett tal är bara så pålitligt som dess data, så mät fullständighet, aktualitet och avstämning och visa dem bredvid resultatet.
- Håll härkomst och definitioner i ett register och logga varje ändring.
- Granska analys innan den ger underlag för beslut, även AI-stödd.
- Ange osäkerhet och gränser och visa antalet bakom varje grad.
- Håll analys på team- och tjänstenivå, med integritetsgränser för data om människor.

## Referenser och vidare läsning

1. Wikipedia, [Analytics](https://en.wikipedia.org/wiki/Analytics).
2. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
3. Wikipedia, [Data lineage](https://en.wikipedia.org/wiki/Data_lineage).
4. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
5. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
6. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
7. Wikipedia, [Reproducibility](https://en.wikipedia.org/wiki/Reproducibility).
