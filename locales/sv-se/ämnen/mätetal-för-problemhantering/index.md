# Mätetal för problemhantering

**Mätetal för problemhantering visar om ett team tar bort orsakerna till sina incidenter eller bara lagar deras symptom, så mät hur många orsaker som hittas, hur fort de rättas för gott och om samma incidenter kommer tillbaka.**

## Översikt och motiv

Ett team som återställer tjänsten snabbt kan ändå sitta fast i ett löpband. Samma fel återvänder med några veckors mellanrum, samma människor larmas och incidenttalen ser friska ut eftersom varje reparation är snabb. Problemhantering är praktiken som kliver av löpbandet. Den tittar över incidenter, hittar den underliggande orsaken och får den orsaken borttagen eller begränsad. Det här ämnet behandlar de siffror som talar om huruvida det arbetet sker och om det fungerar.

Fyra termer bär ämnet. En **incident** är ett oplanerat avbrott i en tjänst eller en försämring av dess kvalitet, så som [ITIL](https://en.wikipedia.org/wiki/ITIL)-ramverket använder ordet (se ämne 3.3, Svarstid och lösningstid för incidenter). Ett **problem** är den underliggande orsaken, eller den misstänkta orsaken, till en eller flera incidenter. Ett **känt fel** är ett problem vars orsak är förstådd och för vilket en tillfällig lösning är registrerad, hållen i en [databas över kända fel](https://en.wikipedia.org/wiki/Known_error_database) så att nästa person som möter symptomet kan hitta den. En [tillfällig lösning](https://en.wikipedia.org/wiki/Workaround) (workaround) minskar eller undviker påverkan av en incident eller ett problem utan att ta bort dess orsak. Den permanenta rättelsen är ändringen som tar bort orsaken.

Att hitta orsaken är uppgiften för [grundorsaksanalys](https://en.wikipedia.org/wiki/Root_cause_analysis). Vanliga tekniker inkluderar [fem varför](https://en.wikipedia.org/wiki/Five_whys), [Ishikawadiagrammet](https://en.wikipedia.org/wiki/Ishikawa_diagram) och [Paretodiagrammet](https://en.wikipedia.org/wiki/Pareto_chart), som rangordnar orsaker efter hur ofta de inträffar eller hur mycket skada de gör. Komplexa system har ofta flera bidragande orsaker och ingen enskild syndare, så en bra problempost namnger de faktorer som, när de tagits bort, stoppar återkomsten, och säger hur säkert teamet är.

Mätetalen spelar roll eftersom problemhantering har en inbyggd rapporteringsfälla. Att öppna en problempost är lätt och känns produktivt. Att stänga en är också lätt, eftersom en post kan stängas med en anteckning. Ingen av händelserna visar att något blev bättre för användare. De mått som är värda att bevaka ligger längre nedströms: om incidenter länkade till ett problem slutar återkomma, om kända fel faktiskt används av de människor som är i jour och hur lång tid en diagnostiserad orsak väntar på sin rättelse.

ITIL-synen och det agila synsättet möts här utan större friktion. I ITIL 4 är problemhantering en praktik inom tjänstevärdessystemet, nära incidenthantering, ändringsmöjliggörande och kunskapshantering. Dess agila motsvarighet är strömmen av små, belagsbaserade rättelser som flödar genom ett teams [backlog](https://en.wikipedia.org/wiki/Backlog), retrospektivet som upptäcker ett mönster och vanan att behandla tillförlitlighetsarbete som vanligt produktarbete. Där ITIL-synen betonar poster, ägarskap och det kända felet betonar den agila synen små batchar och snabb återkoppling. Båda vill ha färre upprepade incidenter, och det resultatet är måttet att hålla framför alla.

Det här ämnet upprepar inte incidentklockorna (se ämne 3.3, Svarstid och lösningstid för incidenter) eller måtten för större incidenter (se ämne 3.4, Mätetal för större incidenter), och det behandlar granskningsuppföljning bara där den matar problem (se ämne 4.2, Mätetal för efteranalyser och lärande). Backlogen av kända fel och den bredare idén om [teknisk skuld](https://en.wikipedia.org/wiki/Technical_debt) behandlas i ämne 4.6, Teknisk skuld och kända fel. Här är fokus problemposten och de resultat den ger. Driftsättningsbaserade återställnings- och felmått finns i ämne 2.8, DORA-mätetal.

## Nyckelprinciper

- **Mät återkomst, inte pappersarbete.** Provet för problemhantering är att länkade incidenter slutar komma tillbaka. Antal öppnade och stängda poster beskriver aktivitet och säger lite om resultatet.
- **Skilj tre ögonblick åt.** Att upptäcka att ett mönster finns, att identifiera dess orsak och att ta bort orsaken är olika händelser med olika klockor och olika ägare. Att slå ihop dem döljer var fördröjningen sitter.
- **En tillfällig lösning är ett steg, inte ett slut.** Registrera den, använd den och följ hur länge den förblir det enda skyddet. En tillfällig lösning som lever i åratal är skuld med en ägare som ingen kan namnge.
- **Lägg rättelsen där arbetet finns.** En permanent rättelse landar vanligen som en ändring eller ett backlogobjekt som ägs av ett produktteam. Mät den i teamets eget flöde och visa den för det team som äger tjänsten.
- **Länka incidenter till problem vid källan.** Varje mått här beror på länken mellan en incident och ett problem. Om länken är svag är siffrorna svaga.
- **Föredra fördelningar och kohorter framför medelvärden.** Problemvaraktigheter är långa och sneda, och några få gamla poster dominerar varje medelvärde (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).
- **Beskriv team och tjänster, aldrig människor.** Problem är systemegenskaper. En tabell över stängda problem per analytiker förvandlar en utredning till en kvot.

## Mätetalsdefinitioner

Alla klockor använder tidsstämplarna från problemposten, de länkade incidentposterna och den länkade ändringen eller backlogobjektet. Om inte en rad säger annat räknas problem per tjänst och per ägande team, och sammanslagna eller duplicerade poster utesluts. Percentiler föredras framför medelvärden för varje varaktighet. Siffrorna i det här ämnets exempel är illustrativa.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Öppnade och stängda problem | Flödet av problemposter in i och ut ur öppet tillstånd, per tjänst | Antal öppnade under perioden och antal stängda under perioden, var och en per stängningskod (rättat, accepterad risk, dubblett, kan inte återskapas); dubbletter visas men utesluts ur antalet "rättat" | antal per period | ITSM-problemposter | Problemhantering | Backlogintag och genomflöde | Månadsvis |
| Problembacklogens ålder | Hur länge öppna problem har väntat | För varje öppet problem, ögonblicksbildens datum minus postens skapandedatum; redovisa medianen och 85:e percentilen för öppna problem och det äldsta, per prioritet | dagar | ITSM-problemposter | Problemhantering | Ålder på arbetsobjekt på tavlan | Månadsvis |
| Länkgrad mellan incident och problem | Andel incidenter som pekar på ett problem eller känt fel där ett förväntas | Incidenter under perioden med ett länkat problem eller känt fel / incidenter under perioden med prioritet hög eller högre, eller återöppnade, eller i en upprepad kategori; incidenter stängda som användarfel eller dubbletter utesluts | procent | ITSM-incident- och problemposter | Incidenthantering; problemhantering | Mönsterupptäckt i retrospektiv | Månadsvis |
| Tid till grundorsak | Hur lång tid ett diagnostiserat problem tar att nå en registrerad orsak | Klockan startar när problemposten skapas och stoppar när orsaken är registrerad och en andra person har granskat den; problem stängda utan orsak utesluts och räknas separat; redovisa medianen och 85:e percentilen | dagar | ITSM-problemposter och deras revisionsspår | Problemhantering | Spike eller tidsboxad utredning | Månadsvis |
| Återanvändningsgrad för kända fel | Hur ofta ett känt fel används när en incident kommer in | Incidenter lösta med ett länkat känt fel eller dess tillfälliga lösning / incidenter under perioden vars symptom matchar ett känt fel som fanns vid tillfället; incidenter utan matchande känt fel utesluts | procent | ITSM-incidentlänkar; användning av kunskapsartiklar | Kunskapshantering; problemhantering | Användning av teamets driftinstruktion eller spelbok | Månadsvis |
| Tid till permanent rättelse | Hur länge ett problem är exponerat från diagnos till att rättelsen körs i produktion | Klockan startar när orsaken registreras och stoppar när den länkade rättelseändringen genomförts och bekräftats; problem stängda som accepterad risk utesluts och räknas separat; redovisa medianen och 85:e percentilen | dagar | Problemposter; ändringsposter eller driftsättningshändelser från pipelinen | Problemhantering; ändringsmöjliggörande | Cykeltid för rättelseobjektet | Månadsvis |
| Återkomstgrad efter rättelse | Andel rättade problem vars länkade symptom återvände | Problem stängda som rättade i ett kohortkvartal med en ny matchande incident inom 90 dagar efter att rättelsen gick live / problem stängda som rättade det kvartalet; 90-dagarsfönstret är ett exempel och anges i diagrammet | procent | ITSM-incident- och problemposter; driftsättningshändelser | Problemhantering; ständig förbättring | Grad av undkomna fel eller regression | Kvartalsvis |
| Andel enbart med tillfällig lösning | Andel kända problem som skyddas enbart av en tillfällig lösning | Öppna problem i tillståndet känt fel utan någon rättelse schemalagd / öppna problem i tillståndet känt fel; problem med accepterad risk och en namngiven ägare och ett granskningsdatum visas som en separat grupp | procent | ITSM-problemposter | Problemhantering; riskhantering | Register över teknisk skuld | Månadsvis |

Fönstret på 90 dagar, matchningsregeln för symptom och definitionen av "förväntad" i länkgraden är exempel. Ett team väljer värden som passar dess tjänster och skriver dem i mätetalsregistret (se ämne 1.4, Styrning och ägarskap av mätetal). Att räkna problem stängda som "rättat" separat från andra stängningskoder håller paret öppnade-och-stängda ärligt.

## Rekommendationer

### Besluta vad som räknas som ett problem

**1. Öppna ett problem på belägg och säg vad beläggen är.** Bra utlösare är upprepade incidenter med samma symptom, en större incident med okänd orsak, en trend som hittats i granskning eller en risk som upptäckts före någon incident. Skriv utlösaren på posten, till exempel "fem incidenter på sex veckor länkade till samma tjänst". Om varje ovanlig incident blir en problempost fylls backlogen med brus och ingen läser den.

**2. Använd en liten, gemensam uppsättning stängningskoder.** Rättat, accepterad risk, dubblett, kan inte återskapas och sammanslaget räcker för de flesta team. Varje kod har en enmeningsbetydelse och en ägare som får använda den. Mixen av stängningskoder är mer upplysande än antalet stängda, eftersom den visar hur mycket arbete som tog bort en orsak och hur mycket som slutade utan en ändring.

### Länka incidenter och problem vid källan

**3. Gör länken till ett steg i incidentstängningen.** Be lösaren länka incidenten till ett problem, ett känt fel eller "inget funnet" innan hen stänger den. Erbjud matchande förslag från verktyget när det kan, och låt en människa avgöra. En länk som görs veckor senare i en massövning är opålitlig (se ämne 1.5, Datakällor och instrumentering).

**4. Enas om hur symptom matchas.** Återkomst beror på att avgöra när två incidenter är "samma". En kort taxonomi över orsak och symptom, med definitioner och exempel, är bättre än fritext. Granska ett stickprov av matchningar varje kvartal, eftersom felmatchningar i båda riktningar skevar återkomstgraden.

**5. Låt mönstergranskning mata problemlistan.** En månatlig granskning av incidentkategorier, per tjänst och med ett [Paretodiagram](https://en.wikipedia.org/wiki/Pareto_chart), visar vilka få orsaker som ger det mesta av besväret. Använd granskningen för att öppna problem och prioritera dem och skicka upprepade orsaker från granskningar av större incidenter in i samma lista (se ämne 3.2, Incidentvolym och prioritet).

### Mät de tre fördröjningarna

**6. Tidsätt stegen separat.** Mät från postens skapande till registrerad orsak och från registrerad orsak till att rättelsen körs i produktion. Den första fördröjningen pekar på utredningskapacitet, åtkomst till data och kompetens. Den andra pekar på prioritering, ändringsprocessen och konkurrerande funktionsarbete. En enda "tid att stänga ett problem" blandar dem och ger ingen en tydlig åtgärd.

**7. Redovisa de gamla.** Visa medianen och 85:e percentilen av öppna problems ålder och lista de äldsta per tjänst. Några få poster som är flera år gamla flyttar ett medelvärde och säger lite, medan listan över de äldsta inbjuder till ett beslut: rätta, acceptera risken med en namngiven ägare och ett granskningsdatum eller stäng med ett skäl.

### Lägg rättelsen i det normala flödet

**8. Behandla en permanent rättelse som ett backlogobjekt med en ägare och ett datum.** Länka problemet till ändringen eller arbetsobjektet som bär rättelsen och visa rättelsen på samma tavla som funktionsarbete. Prioritera med en överenskommen regel, till exempel att väga kostnaden för återkommande incidenter mot insatsen att rätta. Där en rättelse behöver en ändring bör standardändringsvägen vara snabb för lågriskkorrigeringar (se ämne 4.3, Mätetal för ändringsmöjliggörande).

**9. Be om den tillfälliga lösningen och utgångsdatumet tillsammans.** En tillfällig lösning köper tid. Registrera den som ett känt fel, testa att jourteamet kan hitta och köra den och sätt ett granskningsdatum för rättelsen. Andelen enbart med tillfällig lösning blir då en lista över beslut, inte en tyst hög av skuld (se ämne 4.6, Teknisk skuld och kända fel).

### Kontrollera att rättelser fungerade

**10. Följ varje rättelse med ett återkomstfönster.** När en rättelse är live, bevaka matchande incidenter under ett angivet fönster och redovisa andelen rättelser som höll per kvartalskohort. Återkomst är det närmaste ett resultatmått den här praktiken har. Om den är hög, fråga om orsaken hittades eller bara en bidragande faktor och öppna analysen på nytt.

**11. Mät återanvändning av kända fel där lösarna arbetar.** Räkna hur ofta ett känt fel eller dess tillfälliga lösning används när en matchande incident kommer in. En låg återanvändningsgrad med många kända fel betyder oftast att posterna är svåra att hitta, inaktuella eller skrivna för analytikern i stället för lösaren. Rätta artikeln och dess placering innan du lägger till fler (se ämne 3.6, Mätetal för kunskapshantering).

### Håll siffrorna ärliga

**12. Visa kohorter och förbehåll bredvid varje diagram.** Registrera definitionerna, stängningskodsmixen och varje regeländring i själva diagrammet. Kvartalskohorter av rättade problem visar återkomst utan att blanda gammalt och nytt arbete. Para varje antal med ett resultatmått så att inget tal står ensamt (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Öppnade och stängda problem | Att öppna många triviala poster; att dela upp ett problem i flera; att stänga poster som dubbletter eller "kan inte återskapas" för att rensa listan | Stängningskodsmix; återkomstgrad efter rättelse; ett stickprov av stängda poster läses varje kvartal |
| Problembacklogens ålder | Att stänga de äldsta posterna utan rättelse; att öppna på nytt som en ny post för att nollställa klockan; att omklassificera ett problem som en förfrågan | Länka nya poster till sina original och redovisa ålder från den första posten; lista över stängningar per skäl; granskning av accepterade risker |
| Länkgrad mellan incident och problem | Att länka varje incident till ett vagt samlingsproblem för att höja graden | Andel länkar som pekar på de fem största problemen; stickprov av länkar kontrollerade för en verklig matchning; återkomst av länkade symptom |
| Tid till grundorsak | Att registrera en snabb, ytlig orsak för att stoppa klockan; att namnge "mänskligt fel"; att hoppa över den andra granskaren | Återkomstgrad efter rättelse; orsakstaxonomin med "mänskligt fel" inte accepterat ensamt; granskning av ett stickprov av orsaker mot beläggen |
| Återanvändningsgrad för kända fel | Att räkna en länk som lagts till efter att incidenten stängts; att lägga till ett känt fel på varje incident för en tjänst | Tid mellan incidentstängning och länken; lösarnas återkoppling om huruvida posten hjälpte; granskning av poster som inte använts på 90 dagar |
| Tid till permanent rättelse | Att markera ändringen som genomförd innan rättelsen är verifierad; att stänga som accepterad risk för att slippa arbetet | Återkomstgrad efter rättelse; lista över accepterade risker med ägare och granskningsdatum; verifieringssteg innan klockan stoppar |
| Återkomstgrad efter rättelse | Att definiera symptom snävt så att återkomster inte matchar; att vidga stängningsfönstret så att rättelser faller i tidigare kohorter; att fördröja länkning | Orsakstaxonomi granskad av någon utanför det ägande teamet; incidentlänkgrad; fast fönster angivet i förväg |
| Andel enbart med tillfällig lösning | Att schemalägga en platshållarrättelse utan verkligt datum; att flytta problem till accepterad risk; att sänka problemets prioritet | Ålder på schemalagda rättelser som glidit; lista över accepterade risker granskad med en namngiven chefsägare; kostnad för upprepade incidenter per problem |

En sund avläsning ser stilla och lite tråkig ut. Antalen öppnade och stängda är ungefär i takt, de äldsta öppna problemen har var och en ett registrerat beslut, andelen rättelser som höll är hög och kohortlinjerna är stadiga, och kända fel används av de människor som möter symptomen. Varningsmönstret är ett långt, snyggt antal stängda tillsammans med incidenter som fortsätter att återvända. När aktivitetssiffrorna ser utmärkta ut och användare ändå möter samma fel, lita på användarna.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Formella problemposter för återkommande och större incidenter | Tydlig ägare, historik och länk till rättelser; stöder revision | Processomkostnad; poster kan bli inaktuella |
| Att rätta orsaker i teamets backlog utan problempost | Snabbt, lättviktigt, nära arbetet | Mönster över team förblir osedda; inget delat känt fel |
| Strikta stängningskoder och kvartalskohorter | Ärlig resultatbild; tål snygga antal | Långsammare att läsa; kräver disciplin i datainmatning |
| Att räkna stängda problem som ett mål | Lätt att förklara och rita | Inbjuder till stängning för antalets skull; belönar små problem |
| Återkomstuppföljning för rättade problem | Det närmaste tillgängliga måttet på om det fungerade | Kräver god symptommatchning och ett tillräckligt långt fönster |
| Återanvändningsuppföljning för kända fel | Visar om kunskapen hjälper lösare | Beror på att lösare länkar posten; kan manipuleras |

Team som rättar orsaker snabbt inom sin egen backlog bör ändå registrera orsaken där den bredare organisationen kan se den, så att ett annat team som möter samma symptom har nytta av det. Investera först i länken mellan incidenter och problem och i återkomstfönstret. Dessa två delar gör varje annat mått tolkningsbart.

## Frågor att diskutera med teamet

**1. Vilka tre incidenter lagade vi oftast förra kvartalet, och vad hindrade oss från att rätta deras orsak?**
Lista de upprepade incidenterna från servicedesken eller incidentverktyget och sortera dem efter antal förekomster. Fråga för var och en vad hindret var: ingen utredningstid, ingen överenskommen orsak, en rättelse som konkurrerar med funktioner eller en rättelse som behöver ett annat team. Facilitatorn bör leta efter hinder som upprepas över de tre, eftersom de pekar på en systemrättelse snarare än en teknisk.

**2. När vi länkar en incident till ett problem, vem gör det, när och hur vet vi att det är rätt problem?**
Gå igenom en nylig incident från stängning till länk. Notera om länken görs under incidenten, vid stängning eller i en senare uppstädning. Granska ett litet stickprov av länkar tillsammans för verkliga matchningar. Enas om en ändring som gör länken lättare eller mer pålitlig.

**3. Hur länge väntar en diagnostiserad orsak på sin rättelse, och vem avgör ordningen?**
Ta problemen med en registrerad orsak och titta på tiden sedan diagnos. Fråga vem som prioriterar dem och vilken regel de använder. Diskussionen visar ofta att fördröjningen är en kö framför produktbacklogen snarare än en teknisk svårighet. Enas om hur problemrättelser jämförs med funktionsarbete.

**4. Vilka är våra äldsta tillfälliga lösningar, och vad skulle vi förlora om vi behöll dem ytterligare ett år?**
Namnge de tre längst levande tillfälliga lösningarna och vad de kostar i manuell insats, risk och kunskapen hos de människor som fortfarande minns dem. Fråga vad som skulle hända om personen som kan den tillfälliga lösningen var borta. Besluta för var och en om den ska rättas, risken accepteras med en ägare och ett granskningsdatum eller tjänsten avvecklas.

**5. Om ett rättat problem kommer tillbaka, får vi veta det, och hur fort?**
Fråga hur ett återvändande symptom skulle märkas och vem som skulle öppna analysen på nytt. Diskutera om återkomstfönstret är tillräckligt långt för det slags fel det gäller. Facilitatorn bör hjälpa gruppen enas om ett fönster och en matchningsregel och besluta vilket team som granskar matchningarna så att det ägande teamet inte betygsätter sitt eget arbete.

**6. Använder människorna i jour våra kända fel, och vad skulle få dem att nå efter ett?**
Fråga lösare när de senast sökte efter ett känt fel och vad de fann. Titta på var posterna bor, hur de är betitlade och om de säger vad man ska göra först. Välj en post att skriva om med en lösare och pröva den under nästa jourvecka.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam äger de flesta permanenta rättelser och känner dragningen från funktionsarbete. De har nytta av att se incidentkostnaden för ett återkommande fel bredvid insatsen att rätta det, och av en tydlig plats för rättelseobjekt i backlogen. De bör motstå att behandla problemarbete som ett avbrott och i stället reservera en synlig andel av kapaciteten för det. Retrospektivet är ett naturligt ställe att upptäcka mönster och öppna problem (se ämne 2.1, Flödesmått).

### Service- och driftteam

Driftteam ser de upprepade symptomen först och bär kostnaden i larm och manuellt arbete. De för problem- och känt fel-posterna, kör mönstergranskningen och kontrollerar att länkar görs. Deras risk är att lägga insats på poster i stället för att ta bort orsaker. De bör hålla stängningskoderna få, göra det kända felet till det första en lösare ser och lämna rättelser till det ägande teamet med beläggen bifogade.

### Ledning och styrning

Ledare avgör om tillförlitlighetsarbete vinner mot funktioner, och de sätter incitamenten för vad som registreras. De bör be om återkomst per kohort och om de äldsta öppna problemen före antal, och behandla accepterad risk som ett beslut som kräver en namngiven ägare och ett granskningsdatum. Att redovisa en fallande backlog utan återkomst belönar stängning. Styrningen bör titta på trender och beslut, inte på en resultattabell över team (se ämne 4.6, Teknisk skuld och kända fel).

### Kunder och användare

Användare bedömer problemhantering efter en sak: fortsätter samma sak att gå fel. De ser inte problemposter och bryr sig inte om hur många som stängdes. Där avtal tillåter det, berätta för kunder om ett känt problem, den tillfälliga lösningen och datumet då en rättelse förväntas och rapportera sedan tillbaka när den landar. En rättelse som tillkännages och levereras bygger mer förtroende än en tyst.

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på ett regionalt sjukhus stöder en klinisk bokningsapplikation som används av vårdavdelningar och öppenvårdsmottagningar. Ett produktteam bygger och driftar applikationen, ett infrastrukturteam driftar plattformen och en servicedesk tar samtal. Alla siffror i det här exemplet är illustrativa.

Vid en kvartalsgranskning märker avdelningschefen att problempanelen ser utmärkt ut: 46 problem stängda mot 31 öppnade, och det äldsta öppna problemet är 140 dagar. Avdelningschefer på vårdavdelningarna klagar fortfarande på att bokningsskärmen fryser vid skiftbyte. Tjänsteägaren ber om länkgraden mellan incident och problem och återkomstgraden efter rättelse, som ännu inte finns på panelen.

Datan berättar en annan historia. Stängningskodsmixen visar att 22 av de 46 stängningarna var "kan inte återskapas" eller "dubblett". Länkgraden för incidenter med hög prioritet är 38 procent. Frysningsincidenterna loggades i fyra kategorier, så inget mönster var synligt. När ett stickprov på 30 incidenter länkades om för hand pekade 17 av dem på en orsak: ett databaslås som hölls av ett nattjobb som drog över in på morgonskiftet. Återkomsten för problem som rättades under föregående kvartal var 27 procent, högre än någon väntat sig.

Teamet fattar tre beslut. För det första får taxonomin för orsak och symptom en post "bokningsfrysning", och att länka ett problem eller "inget funnet" blir ett obligatoriskt steg vid incidentstängning. För det andra flyttas nattjobbsproblemet från infrastrukturbacklogen till produktteamets tavla med en ägare och ett måldatum, och en tillfällig lösning (en schemalagd omstart efter jobbet) registreras som ett känt fel och prövas med servicedesken. För det tredje ersätter panelen antalet stängda med tre tal: andelen rättelser som höll efter 90 dagar, medianen och 85:e percentilen av tiden från registrerad orsak till rättelse och de äldsta öppna problemen med sina beslut.

Åtta veckor senare tas låset bort genom en ändring av jobbet. Incidenter i frysningskategorin faller från ungefär nio i månaden till två, och återanvändningen av kända fel stiger till 71 procent för de symptom som återstår, mest därför att servicedesken nu hittar omstartsposten. Manipulationsrisken teamet fångade låg i dess egen tidigare vana: att stänga poster som "kan inte återskapas" när en incident föll utanför arbetstid. Stängningskodsmixen, stickprovet av stängda poster som läses varje kvartal och återkomstkohorten fungerar nu som skyddsräcken. Ingen rangordnas, och granskningen listar tjänster och beslut, inte analytiker.

## Agilitet, AI, automatisering och analys

### Agilitet

Väv in problemarbete i den vanliga backlogen och förbättringssamtalen, så att permanenta rättelser konkurrerar öppet med nytt arbete. Varningen är att ett mål för att stänga problem snabbt leder till att de stängs med tillfälliga lösningar.

### AI

AI kan klustra incidenter, föreslå grundorsaker och skriva utkast till problemposter, vilket kan höja problemantal och länkgrader utan att ta bort orsaker. Para länkgrad med återkomstgrad efter rättelse och märk vilka orsaker som föreslagits av AI och bekräftats av en människa. Varningen är att en AI-föreslagen orsak kan vara rimlig och fel, så verifiera innan du stänger.

### Automatisering

Länka incidenter till problem automatiskt där signaler matchar och mät matchningen på felaktiga länkar. Varningen är att automatisk stängning av ett problem när incidenter upphör döljer en orsak som bara har blivit tyst.

### Analys

Visa tid till permanent rättelse som en fördelning och återkomstgraden efter rättelser. Beslutet detta ger underlag för är vilka orsaker som förtjänar kapacitet. Varningen är att återkomst behöver ett långt fönster, så säg hur länge du bevakade.

## Branschperspektiv

**Startup.** Det finns sällan en separat problemprocess. Teamet rättar orsaker direkt, och risken är att ingen minns varför. Håll en enkelsidig lista över återkommande incidenter och deras orsaker, länka rättelser till ärendehanteringssystemet och granska listan månadsvis. Mät återkomst och åldern på de äldsta objekten; hoppa över formella stängningskoder tills teamet växer.

**Småföretag.** En it-person eller en leverantör av hanterade tjänster kan sköta allt. Be leverantören om dess problemposter och incidentkategorierna bakom dem samt den skrivna definitionen av "löst". En kort lista över de fem främsta upprepade problemen, med en namngiven ägare och ett datum för vart och ett, slår ett tungt verktyg. Exportera posterna periodvis för att undvika inlåsning.

**Storföretag.** Många tjänster och leverantörer skapar det största behovet av gemensamma definitioner. Enas om orsakstaxonomin, stängningskoderna och återkomstfönstret över team, namnge problemägare per tjänst och redovisa per tjänst och kohort. Där en leverantör håller en rättelse, följ leverantörens svar mot avtalet (se ämne 8.4, Mätetal för leverantörer och avtal) och eskalera via en dokumenterad väg.

**Offentlig sektor.** Revision, ändringskontroll och upphandling kan förlänga vägen från orsak till rättelse, så klockan för tid till rättelse bör visa var fördröjningen sitter: utredning, godkännande, upphandling eller schemaläggning. Accepterade risker behöver registrerade ägare och granskningsdatum som håller för revision. Regler om gallring och integritet gäller incident- och problemposter, särskilt där kliniska uppgifter eller medborgaruppgifter förekommer i dem.

## Affärscase: motiv, ROI och TCO

Kostnaden har tre delar. Den första är utredningstid: människor med kompetensen och åtkomsten att analysera incidenter, vilket konkurrerar med deras annat arbete. Den andra är själva rättelsen, levererad via backlogen och ändringsprocessen. Den tredje är kostnaden för att registrera och rapportera: att länka incidenter, hålla taxonomier, köra mönstergranskningen och underhålla databasen över kända fel. Dessa kostnader är mestadels människors tid, så räkna timmar.

Avkastningen visar sig som incidenter som slutar återkomma, färre larm och mindre manuell insats för tillfälliga lösningar, kortare incidenthantering därför att lösare hittar kända fel och färre eskaleringar till ingenjörer. Ingen universell siffra gäller, så uppskatta din egen. För en återkommande incident, multiplicera förekomster per år med den genomsnittliga hanteringsinsatsen och en uppskattning av verksamhetspåverkan per förekomst och jämför det sedan med insatsen att rätta den. Granska uppskattningen med tjänsteägaren, ange den som en uppskattning och återbesök den efter att återkomstfönstret har visat vad som hände. Problemhantering betalar sig bäst på de få orsaker som ger det mesta av incidentbelastningen, vilket Paretovyn hittar snabbt.

## Antimönster och fallgropar

- **Stängning som mål.** Ett mål för stängda problem belönar triviala poster och förtida stängning. Redovisa resultatmått först och visa stängningskodsmixen.
- **Problemposter som kyrkogård.** Poster står öppna utan ägare, datum eller beslut. Granska listan över de äldsta i en rytm och kräv ett beslut för varje objekt.
- **Att stanna vid "mänskligt fel".** Det namnger vem som rörde vid systemet och inte varför systemet tillät felet. Acceptera en orsak först när den namnger ett villkor som kan ändras.
- **Att rätta ingenting förrän grundorsaken är säker.** Komplexa fel kan sakna en enskild orsak. Tillämpa en tillfällig lösning och den bäst understödda rättelsen och bevaka sedan återkomst.
- **Tillfälliga lösningar utan utgång.** En tillfällig lösning utan granskningsdatum blir permanent. Registrera en ägare och ett datum när det kända felet skapas.
- **Svaga incidentlänkar.** Saknade eller slarviga länkar gör återkomst osynlig. Gör länkning till en del av incidentstängningen och stickprova länkarna.
- **Problemarbete utanför backlogen.** Rättelser som bor i en separat kö väntar för evigt. Lägg rättelseobjektet på det ägande teamets tavla och prioritera det mot funktioner.
- **Att jämföra analytiker eller team efter stängda poster.** Det belönar lätta tjänster och inbjuder till manipulation. Jämför tjänster över tid mot deras egen historik och läs kohorterna.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Problemidentifiering och länkning | Problem öppnas bara efter stora avbrott; inga incidentlänkar | Vissa team länkar incidenter; kategorier skiljer sig mellan team | Gemensam taxonomi och stängningskoder; länk görs vid incidentstängning | Länkgrad och matchningskvalitet stickprovas och granskas | Mönster upptäcks över team och leverantörer, med delade kända fel |
| Grundorsak och kända fel | Orsak registreras i fritext, om alls | Kända fel hålls av vissa team på olika ställen | En databas över kända fel; andra personens granskning av orsaker | Tid till grundorsak och återanvändning av kända fel följs över tid och agerar man på | Lösare, leverantörer och kunder bidrar till och använder delade poster |
| Rättelseleverans | Rättelser sker när någon har tid | Rättelser spåras i ett teams egen lista | Rättelse länkad till ett backlogobjekt eller en ändring med en ägare och ett datum | Tid till permanent rättelse granskas, med kapacitet reserverad för den | Rättelseprioritet sätts gemensamt med produkt- och leverantörsfärdplaner |
| Resultat och lärande | Antal poster redovisas | Backlogens ålder redovisas i vissa granskningar | Återkomst efter rättelse och andel enbart med tillfällig lösning redovisas med definitioner | Kohorter paras med skyddsräcken och används i finansieringsbeslut | Definitioner revideras när de slutar ge underlag för beslut; förbättring är rutin |

## Checklista

- [ ] Mätetalsregistret definierar ett problem, ett känt fel och varje stängningskod.
- [ ] Incidentstängning omfattar en länk till ett problem, ett känt fel eller "inget funnet".
- [ ] En taxonomi över orsak och symptom finns, med definitioner och exempel.
- [ ] Varje problem har en ägare, en utlösare och ett beslutsdatum.
- [ ] Tid till grundorsak och tid till permanent rättelse mäts separat, med percentiler.
- [ ] Varje permanent rättelse är länkad till ett backlogobjekt eller en ändring med en ägare.
- [ ] Varje tillfällig lösning har en ägare och ett granskningsdatum.
- [ ] Återkomst efter rättelse följs per kvartalskohort med ett angivet fönster.
- [ ] Återanvändning av kända fel mäts där lösarna arbetar.
- [ ] De äldsta öppna problemen granskas i en rytm, och varje beslut registreras.
- [ ] Ett stickprov av stängda poster läses varje kvartal för att kontrollera stängningskoder och orsaker.
- [ ] Rapporter beskriver tjänster och team, och ingen tabell rangordnar individer.

## AI-prompter

**Hitta kandidatproblem i en uppsättning incidenter.**

```text
Here is an export of incidents for [service or team] from [start date] to [end
date]: [paste incident fields such as id, opened time, category, short
description, resolution note]. Group incidents that may share an underlying
cause, explain the evidence for each group, and rank groups by occurrence count
and by [impact measure, for example hours of user impact]. Mark groups where the
evidence is weak. Do not invent causes, counts, or benchmark values. List your
assumptions and the extra data that would raise your confidence.
```

**Granska stängningskoder och problemposter.**

```text
Below are [number] closed problem records for [service or team]: [paste id,
closing code, recorded cause, fix reference, closing date]. Check each record
for a closing code that does not match its text, a cause that names a person
instead of a condition, and a fix with no link. Summarize patterns and suggest
three questions for a reviewer. Do not rank people or invent facts about the
records. List your assumptions.
```

**Utforma ett återkomstmått.**

```text
We want to measure whether fixed problems stay fixed for [service or team]. Our
tools are [ITSM tool, deployment tool], our incident categories are [list], and
our closing codes are [list]. Propose a definition, formula, clock start and
stop, matching rule for symptoms, recurrence window, and exclusions, with a
chart layout showing quarterly cohorts. Suggest how it could be gamed and a
guardrail for each case. Ask me for the thresholds you need instead of
inventing them. List your assumptions.
```

**Förbered en beslutsgranskning av åldrade problem.**

```text
Here are the open problems older than [number] days for [service or team]:
[paste id, age, priority, owner, last update, workaround status]. Draft an agenda
for a [length]-minute review in which each item receives one of three decisions:
fix with a date, accept the risk with a named owner and review date, or close
with a reason. Suggest the evidence to bring for each decision. Do not invent
costs or outcomes. List your assumptions and the questions I should answer
first.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta ämnena som definierar de incident-, ändrings- och kunskapsmått som problemmätetal beror på och skyddsräcket att para med varje.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett nytt eller redigerat problemmätetal anger sina klockor, undantag, manipuleringsvektor och skyddsräcke.

## Viktigaste slutsatser

- Måttet på problemhantering är återkomst: om de incidenter som är länkade till ett problem slutar komma tillbaka.
- Tidsätt stegen separat, från post till registrerad orsak och från orsak till att rättelsen körs i produktion.
- Länka incidenter till problem vid stängning, enas om hur symptom matchas och stickprova länkarna.
- En tillfällig lösning är ett steg med en ägare och ett granskningsdatum, och andelen enbart med tillfällig lösning visar hur mycket risk som bärs.
- Lägg permanenta rättelser i det ägande teamets backlog och redovisa resultatmått före antal poster.
- Beskriv tjänster, kohorter och beslut. Rangordna aldrig analytiker eller team efter stängda problem.

## Referenser och vidare läsning

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Ohno, T., *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Known error database](https://en.wikipedia.org/wiki/Known_error_database).
10. Wikipedia, [Workaround](https://en.wikipedia.org/wiki/Workaround).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
13. Wikipedia, [Ishikawa diagram](https://en.wikipedia.org/wiki/Ishikawa_diagram).
14. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
15. Wikipedia, [Backlog](https://en.wikipedia.org/wiki/Backlog).
16. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
