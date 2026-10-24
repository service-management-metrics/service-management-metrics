# Teknisk skuld och kända fel

**Behandla kända fel och teknisk skuld som ett synligt register över uppskjutna rättelser, mät vad varje post kostar varje månad den förblir öppen och lägg en skyddad andel av kapaciteten på de poster som har högst ränta.**

## Översikt och motiv

Varje team skjuter upp någon reparation. Ett fel är förstått men inte rättat, en genväg tas för att klara ett datum, en komponent lämnas att åldras och en tillfällig lösning skrivs in i en driftinstruktion. Varje uppskjutande är ett förnuftigt beslut när det fattas. Trubbeln börjar när uppskjutandena ackumuleras utom synhåll, eftersom kostnaden för att bära dem dyker upp senare som incidenter, långsam leverans och trötta människor, utan någon rad i någon rapport som kopplar kostnaden till orsaken.

Två vokabulärer beskriver samma mönster. I [ITIL](https://en.wikipedia.org/wiki/ITIL) är ett **känt fel** ett problem vars grundorsak är förstådd och för vilket det finns en tillfällig lösning, eller en permanent rättelse som ännu inte tillämpats. Kända fel registreras så att servicedesk och driftpersonal snabbt kan lösa upprepade incidenter, och posten förblir öppen tills en rättelse släppts. I agilt programvaruarbete är **[teknisk skuld](https://en.wikipedia.org/wiki/Technical_debt)** metaforen, myntad av [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham) 1992, för design- och implementationsval som gör framtida ändring svårare. Metaforen bär två idéer som spelar roll för mätning: **kapitalet** (principal), som är insatsen som krävs för att ta bort skulden, och **räntan** (interest), som är den extra insats eller risk du betalar varje period medan skulden finns kvar.

De två synsätten skiljer sig i var de tittar. Kända fel upptäcks genom drift: en incident eller en problemutredning finner en orsak. Teknisk skuld upptäcks vanligen genom leverans: en utvecklare märker att en ändring är svårare än den borde vara. Ett känt fel är ofta teknisk skuld som redan börjat skada kunder. Teknisk skuld är ofta ett känt fel som väntar på att hända. Att hålla separata listor, en i ITSM-verktyget och en i en backlog eller en wiki, döljer kopplingen och ger två konkurrerande argument för samma knappa kapacitet.

Det här ämnet ger dig en liten uppsättning mått för det kombinerade registret. Det undviker en enda kronsiffra för en hel organisations skuld, vilket ingen metod producerar tillförlitligt, och mäter det du kan observera: öppna poster, väntad tid, orsakade incidenter, tillagt arbete och kapacitet som lagts på reparation. Registret matar sedan ett prioriteringssamtal mellan produkt och drift (se ämne 4.1, Mätetal för problemhantering, för problemposter och permanenta rättelser, och ämne 2.9, Driftarbete och oplanerat arbete, för avbrottsbelastningen som skuld skapar).

Termer som används i det här ämnet:

- En **tillfällig lösning** (workaround) är ett sätt att återställa tjänsten eller undvika ett misslyckande utan att ta bort orsaken.
- En **permanent rättelse** tar bort orsaken. [Grundorsaksanalys](https://en.wikipedia.org/wiki/Root_cause_analysis) är arbetet som finner den.
- **[Kodrefaktorering](https://en.wikipedia.org/wiki/Code_refactoring)** omstrukturerar kod utan att ändra dess yttre beteende. Det är det vanliga sättet att betala av designskuld.
- En **[kodlukt](https://en.wikipedia.org/wiki/Code_smell)** (code smell) är ett ytligt tecken i kod som ofta tyder på ett djupare problem. Det är en uppmaning att titta, inte en dom.
- **[Alternativkostnad](https://en.wikipedia.org/wiki/Opportunity_cost)** är värdet av det bästa alternativ du avstår från genom att välja en användning av tiden framför en annan. Varje rättelse konkurrerar med en funktion, och jämförelsen är det verkliga beslutet.
- **[Fördröjningskostnad](https://en.wikipedia.org/wiki/Cost_of_delay)** är den ekonomiska förlusten av att skjuta upp ett arbete. Det är idén bakom att prissätta räntan på en skuldpost.
- Ett **[programvarufel](https://en.wikipedia.org/wiki/Software_bug)** är en brist i programvara. Ett känt fel kan vara ett programvarufel, en konfigurationssvaghet, en designgräns eller en leverantörsbrist.
- **[Statisk programanalys](https://en.wikipedia.org/wiki/Static_program_analysis)** granskar kod utan att köra den. Dess varningar och komplexitetspoäng är indikatorer på möjlig skuld, och de är svagare belägg än incidenthistorik.

Inte all skuld är ett misstag. Martin Fowlers kvadrant skiljer avsiktlig från oavsiktlig och hänsynslös från klok skuld (se referenslistan). En klok genväg med en återbetalningsplan är ett sunt lån, och hänsynslös skuld är den sort som ska förebyggas. Måtten här dömer inte ursprunget. De visar saldot.

## Nyckelprinciper

- **Ett register, två ingångar.** Kända fel från drift och skuldposter från leverans går in i samma synliga lista, med en länk mellan poster som beskriver samma orsak.
- **Mät räntan, och kapitalet också.** Reparationens storlek spelar mindre roll än vad den öppna posten kostar dig varje månad i incidenter, tillfälliga lösningar och bromsad ändring. Rangordna efter ränta per enhet reparationsinsats.
- **Gör uppskjutande till ett beslut med en ägare.** Varje post har en ägare, ett angivet skäl att vänta och ett granskningsdatum. En post som ingen valde att skjuta upp är försummelse, och den räknas som sådan.
- **Skydda kapacitet innan du behöver den.** En angiven andel av varje teams kapacitet för reparationsarbete, överenskommen i förväg, slår en hjältemodig städning efter ett dåligt kvartal.
- **Håll den tillfälliga lösningen ärlig.** En tillfällig lösning är en tjänst, med egen kostnad, ägare och felsätt. Mät hur ofta den används och hur ofta den misslyckas.
- **Beskriv system, aldrig människor.** Skuld hör till en tjänst eller en komponent. Tillskriv den aldrig en upphovsperson och rangordna aldrig ingenjörer efter skulden de rört.
- **Uppskatta grovt.** Storlekar som "timmar", "dagar" och "veckor" räcker. Precision utöver det är påhittad.

## Mätetalsdefinitioner

Måtten nedan beskriver registret över uppskjutna reparationer. Klockor och gränser anges i varje formel. Tidsmått redovisas som fördelningar (medianen och den 85:e eller 95:e percentilen), inte som ett enda medelvärde.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ålder på backlogen av kända fel | Hur länge öppna kända fel har väntat på en permanent rättelse | Klockan startar när problemposten markeras som "känt fel"; stoppar när den permanenta rättelsen släpps till produktion; poster som stängts som "accepterad risk" redovisas separat och utesluts. Redovisa antal, medianålder och 85:e percentilens ålder, per tjänst | dagar (fördelning) | ITSM-verktygets problem- och kända felposter, releaseposter | Problemhantering | Diagram över åldrande arbetsobjekt; ålder på felbacklog | Månadsvis |
| Täckning av tillfälliga lösningar | Andel öppna kända fel som har en dokumenterad, testad tillfällig lösning som en agent kan följa | öppna kända fel med en tillfällig lösning granskad inom de senaste 6 månaderna / öppna kända fel; stängda poster och poster med accepterad risk utesluts | procent | Kunskapsbas länkad till kända felposter | Problemhantering; kunskapshantering | Driftinstruktion eller definition av klart för driftbarhet | Månadsvis |
| Incidenter länkade till öppna kända fel | Incidenter vars orsak är ett öppet känt fel, ett direkt mått på räntan som betalats i tjänsteavbrott | incidenter under perioden länkade till ett känt fel som var öppet när incidenten började / alla incidenter under perioden; incidenter utan orsakslänk redovisas som olänkade, räknas inte | procent, plus antal | ITSM-verktygets länkar mellan incident och problem | Incidenthantering; problemhantering | Undkomna fel; inflöde av produktionsfel | Månadsvis |
| Skuldbestånd | Antal och uppskattad storlek på registrerade tekniska skuldposter som förblir öppna | öppna poster i skuldregistret vid periodens slut; storleken är summan av grova insatsband (timmar, dagar, veckor) som tilldelats vid registrering; oregistrerad eller misstänkt skuld utesluts | antal, och insatsband | Skuldregister i ärendehanteringssystemet, taggat per tjänst | Ständig förbättring; tjänstedesign | Produktbacklogposter märkta som skuld | Månadsvis |
| Skuldränta | Extra arbete som öppen skuld och kända fel orsakar, i teamtid | timmar loggade under perioden mot arbetsobjekt taggade med en skuld- eller känt fel-referens (tillfälliga lösningar, manuella steg, omarbete och extra insats på berörda ändringar) / totala arbetstimmar för teamet under perioden; själva reparationsarbetet utesluts och räknas under kapacitetsandel | procent av arbetstiden | Tids- eller insatstaggar på arbetsobjekt, hållna på teamnivå | Ständig förbättring; problemhantering | Andel oplanerat arbete och omarbete | Månadsvis |
| Kapacitetsandel för skuld | Andel av leveranskapaciteten som läggs på att avveckla skuld och kända fel | kapacitet (antal poster eller insats) av slutförda arbetsobjekt taggade som skuldreparation eller rättelse av känt fel / alla slutförda arbetsobjekt under perioden; poster utan tagg utesluts | procent | Ärendehanteringssystem, slutförda poster per tagg | Ständig förbättring; ändringsmöjliggörande | Kapacitetsfördelning | Per planeringsperiod, granskas månadsvis |
| Nettoförändring av skuld | Om registret växer eller krymper | skuld- och känt fel-poster registrerade under perioden minus poster lösta under perioden; löst betyder att rättelsen släppts, inte slagits ihop; poster som stängts som "rättas inte" räknas på en separat rad | antal (med tecken) | Skuldregister och kända felposter | Ständig förbättring | Backlogförändring per kategori | Månadsvis |

Accepterad risk är ett legitimt sätt att stänga ett känt fel, eftersom vissa problem inte är värda att rätta. Den listas separat så att stängning av poster inte i tysthet förbättrar ålderssiffran. Granskningsfönstret på 6 månader i täckning av tillfälliga lösningar är ett exempel. Ett team sätter fönstret så att det passar hur snabbt dess system förändras och skriver det i mätetalsregistret.

## Rekommendationer

### Bygg registret

**1. Slå ihop listan över kända fel och skuldlistan till ett register.** Håll ett register med fält för ursprung (drift eller leverans), tjänst, ägare, storleksband och länk till relaterade poster. ITSM-verktyget kan hålla det, eller ärendehanteringssystemet, förutsatt att varje system länkar till det andra. Utan en gemensam vy konkurrerar ett känt fel i driften med en osedd skuldpost i leveransen om samma ingenjörer.

**2. Registrera skuld i det ögonblick den skapas eller upptäcks.** En genväg som tas avsiktligt förs in i registret i samma pull request eller ändringspost, med ett angivet skäl och ett granskningsdatum. Skuld som hittas senare registreras av den som hittar den. En billig regel på en rad fungerar bättre än en periodisk revision, eftersom människor glömmer vad de visste förra kvartalet.

### Mät räntan

**3. Länka incidenter till kända fel varje gång.** Länken mellan en incident och dess kända fel är de starkaste data du har om ränta, och den kostar några sekunder vid lösning. Gör länken till ett obligatoriskt fält när orsaken är känd, och redovisa den olänkade andelen så att ett glapp inte ser ut som goda nyheter (se ämne 3.3, Svarstid och lösningstid för incidenter). När samma orsak förekommer i flera incidenter bär problemposten beläggen för rättelsen.

**4. Tagga det arbete som skuld skapar.** Låt ingenjörer markera ett arbetsobjekt när en tillfällig lösning, ett manuellt steg eller extra omarbete behövdes på grund av en känd svaghet, och länka det till registerposten. Taggen kostar lite och ger dig skuldräntan på teamnivå. Behandla resultatet som en uppskattning med stor felmarginal, användbar för att rangordna poster och följa en trend, inte för bokföring.

**5. Prissätt varje post i två tal: reparationsinsats och månadsränta.** Använd grova band, till exempel timmar, dagar, veckor, för insats, och en ungefärlig månadskostnad hämtad från länkade incidenter, taggat arbete och eventuell avbrottskostnad som din organisation redan uppskattar. Att dela räntan med insatsen ger en enkel återbetalningstid. Hitta inte på precision: ett band och ett angivet antagande räcker för att skilja de uppenbara vinsterna från de poster som kan vänta.

### Skydda kapacitet och besluta

**6. Reservera en stående andel av kapaciteten och redovisa den.** Kom överens med produktägaren om en andel av varje cykel för reparationsarbete, bestämd av trenden i registret och omprövad varje kvartal. Redovisa kapacitetsandelen för skuld bredvid siffrorna för planerat arbete, så att ledare ser reparationsarbete som en avsiktlig investering. En reserverad andel skyddar också teamet från ett avvägningsargument vid varje planeringssamtal, som funktionsbacklogen vanligen vinner.

**7. Rangordna reparation mot funktioner med en gemensam valuta.** Lägg kända fel och skuldposter i samma prioriteringssamtal som funktioner, uttryckta som fördröjningskostnad och återbetalningstid. En rättelse som tar bort en veckovis incident och ger tillbaka sin insats på ett kvartal konkurrerar på egna meriter. Rangordning efter högljuddhet, senioritet eller registreringsdatum ger dåliga resultat (se ämne 4.4, Misslyckade ändringar och omarbete).

**8. Stäng cirkeln för uppskjutandebeslut.** För varje post som medvetet lämnas öppen, registrera vem som accepterade risken, granskningsdatumet och utlösaren som skulle flytta den uppåt, till exempel en andra incident eller en planerad ändring i området. Granska listan över accepterade på egen rytm. En post som skjutits upp tre gånger utan utlösare är ett beslut att ignorera den, och registret bör säga det.

### Håll siffrorna ärliga

**9. Släpp rättelsen innan du stänger posten.** Ett känt fel förblir öppet tills den permanenta rättelsen är i produktion och återkomsten har kontrollerats över ett angivet fönster. Att stänga vid "sammanslaget" eller "ärendet klart" smickrar ålders- och nettoförändringssiffrorna och öppnar incidenten på nytt senare (se ämne 4.5, Mätetal för releaser och driftsättning). Följ återöppningsgraden för kända fel som en kvalitetskontroll av stängningsregeln.

**10. Titta på registrets form, utöver totalerna.** Ett jämnt antal kan dölja en lång svans av mycket gamla poster, en växande andel poster i en tjänst eller ett register som hålls litet genom att allt stängs som "rättas inte". Visa åldersfördelningen, uppdelningen per tjänst och listan över accepterad risk på en sida. Granska den med människorna som äger tjänsterna, på samma möte som planerar nästa kvartals arbete.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Ålder på backlogen av kända fel | Att stänga gamla poster som "accepterad risk" eller "rättas inte"; att dela en gammal post i nya unga; att nollställa klockan genom att registrera om | Antal och ålder på accepterad risk redovisade på samma sida; granskning av stängningar av någon utanför det ägande teamet; postens härstamning bevarad |
| Täckning av tillfälliga lösningar | Att skriva en vag tillfällig lösning för att fylla fältet; att räkna en tillfällig lösning som ingen agent någonsin prövat | Användnings- och felgrad för tillfälliga lösningar i länkade incidenter; periodiskt test av ett stickprov av tillfälliga lösningar |
| Incidenter länkade till öppna kända fel | Att lämna incidenter olänkade, eller länka dem till en annan orsak, så att andelen faller | Olänkad incidentandel redovisad bredvid; stickprovsgranskning av stängda incidenter för missade länkar |
| Skuldbestånd | Att inte registrera skuld, så att beståndet ser litet ut; att slå ihop många poster till en stor; att registrera struntsaker för att se flitig ut | Registergranskning mot ett stickprov av kodgranskningar och efteranalyser; kontroller av postens storlek och precision |
| Skuldränta | Att undertagga arbetet för att undvika granskning, eller övertagga för att vinna en reparationsbudget; att läsa siffran som ett betyg på ett team | Stickprovsrevision av taggade och otaggade poster; enbart teamnivå, utan jämförelse mellan team; ränta läst tillsammans med incidentlänkar |
| Kapacitetsandel för skuld | Att tagga vanligt funktionsarbete som reparation; att välja lätta kosmetiska poster för att fylla andelen | Resultatkontroll: åldern på de äldsta poster med hög ränta och incidentlänkar som minskar; granskning av vad som rättades mot rangordningen |
| Nettoförändring av skuld | Att lösa många små poster för att väga upp några stora; att stänga poster som "rättas inte" för att få antalet att falla | Nettoförändring visad per storleksband och per ränta; raden "rättas inte" redovisad; återkomstkontroll av lösta poster |

En sund avläsning visar ett register som är synligt, specifikt och rör sig i en riktning teamet valt. Antalet äldsta poster med hög ränta minskar. Incidenter länkade till öppna kända fel går nedåt, och den olänkade andelen är liten. Kapacitetsandelen för skuld är stabil på den överenskomna nivån i stället för att rusa efter en kris och försvinna efteråt. Listan över accepterad risk är kort och granskad. När ett enskilt tal ser utmärkt ut och de andra inte rör sig, misstänk definitionen innan du firar.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Ett sammanslaget register över kända fel och skuld | En enda prioritering; drift och leverans ser samma kostnader | Kräver delade verktyg eller länkar; ägarskap över två funktioner måste avgöras |
| En stående kapacitetsandel för reparation | Förutsägbart; skyddar reparationsarbete från funktionstryck | Kan läggas på poster med lågt värde om rangordningen är svag |
| Reparationsarbete schemalagt först när det vinner prioriteringsdebatten | Flexibelt; svarar mot den aktuella prioriteten | Funktioner vinner nästan alltid; registret växer tills en kris |
| Ränta uppskattad ur incidenter och taggat arbete | Knyter skuld till observerbar kostnad; stöder rangordning | Grova tal; beror på ärlig taggning och incidentlänkar |
| En särskild reparationsinsats eller "skuldvecka" | Fokus och synliga framsteg | Episodiskt; registret fylls på mellan evenemangen; avbryter planerade åtaganden |

Välj det lättaste arrangemang som håller de äldsta posterna med hög ränta i rörelse. Ett litet team kan driva registret på en tavla med en etikett och en månatlig granskning. Större organisationer behöver länkar mellan verktyg och en överenskommen rangordningsmetod. Målet är ett medvetet beslut om varje post, inte en tom lista.

## Frågor att diskutera med teamet

**1. Vilka tre öppna poster kostar oss mest varje månad, och hur vet vi det?**
Be människor nämna kandidater ur minnet och kontrollera dem sedan mot incidentlänkar och taggat arbete. Jämför den minnesbaserade listan med den uppmätta och notera skillnaderna. Enas om hur underlaget för rangordningen ska samlas in framöver.

**2. När vi skjuter upp en rättelse, vem avgör, och när tittar vi igen?**
Gå igenom de fem senaste uppskjutandena och fråga vem som accepterade risken och vilket granskningsdatum som sattes. Där ingen beslutade var posten försummad, inte uppskjuten. Enas om en regel att varje uppskjutande bär en ägare, ett skäl och en utlösare. Diskutera hur listan över accepterad risk ska granskas och av vem.

**3. Hur mycket kapacitet bör vi reservera för reparation, och vad skulle ändra andelen?**
Visa registrets trend och den aktuella kapacitetsandelen för skuld. Fråga vad teamet vore berett att avstå från för att höja den och vilka belägg som skulle låta den falla. Registrera talet, skälet och datumet för omprövning.

**4. Är våra tillfälliga lösningar på riktigt, och skulle en ny agent kunna följa dem?**
Välj en tillfällig lösning slumpmässigt och be någon som inte skrev den att följa den. Enas om en testrutin för de tillfälliga lösningar som täcker de fel med störst påverkan.

**5. Vad räknas som rättat, och hur länge bevakar vi innan vi stänger posten?**
Jämför stängningsreglerna som används av drift, leverans och produktägaren. Diskutera ett återkomstfönster som passar tjänsten och vad teamet gör när en stängd post öppnas på nytt. Enas om en definition och skriv den i mätetalsregistret.

**6. Var kan våra skuldsiffror berätta en bekväm historia?**
Be om de sätt varje tal kan smickras på: oregistrerad skuld, lätta poster som rättas först, poster som stängs som rättas inte. Titta på den olänkade incidentandelen och listan över accepterad risk. Välj ett skyddsräcke att lägga till det här kvartalet och namnge vem som ska kontrollera det.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam ser skuld först, vanligen medan de ändrar kod. De har nytta av ett register som är lätt att lägga till i och av en skyddad kapacitetsandel, så att reparationsarbete inte beror på att vinna ett argument vid varje planeringssamtal. De bör registrera genvägar när de tar dem, tagga arbete som orsakas av svaga punkter och undvika att använda skuld som etikett för arbete de hellre slipper (se ämne 2.2, Ledtid, cykeltid och flödeseffektivitet, för skuldens effekter på ledtid).

### Service- och driftteam

Driftteam ser räntan: upprepade incidenter, manuella steg, sköra tillfälliga lösningar och jourbelastningen som följer. De äger de kända felposterna och dokumenten om tillfälliga lösningar, och de har incidentdatan som prissätter räntan. De bör länka varje incident till dess kända fel, testa tillfälliga lösningar och ta med rangordnat underlag till planeringssamtalet i stället för en lista med klagomål (se ämne 5.7, Mätetal för rutinarbete och jour).

### Ledning och styrning

Ledare avgör hur mycket kapacitet reparationsarbete får, och incitamenten de sätter avgör om registret förblir ärligt. De bör be om åldersfördelningen, ränteskattningarna och listan över accepterad risk, inte ett enda skuldpoäng. Att läsa registret som ett betyg på ett team straffar registrering och driver skuld under jorden. Ett styrande forum bör behandla riskacceptans som ett beslut med en ägare och ett granskningsdatum.

### Kunder och användare

Kunder upplever skuld som upprepade fel och tillfälliga lösningar de måste följa. Där en tillfällig lösning påverkar användare, publicera den med en tydlig notering om när en rättelse väntas, och håll datumet eller förklara ändringen. Färre upprepade incidenter och ärlig status om kända problem bygger mer förtroende än ett löfte om inga fel (se ämne 6.1, Mätetal för kundnöjdhet).

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på ett regionalt sjukhus driver en schemaläggningstjänst för patienter, med stöd av ett produktteam och en driftgrupp. Alla siffror i det här exemplet är illustrativa.

Driftgruppen håller 23 kända fel i ITSM-verktyget. Produktteamet håller en separat lista med 41 skuldposter på sin tavla. En kvartalsvis granskning finner att 9 av de kända felen och 7 av skuldposterna beskriver samma fem orsaker. Det äldsta kända felet är 14 månader gammalt, medianåldern för kända fel är 5 månader och den 85:e percentilen är 11 månader. Täckningen av tillfälliga lösningar är 61 procent. Incidenter länkade till öppna kända fel är 18 procent av kvartalets incidenter, och 22 procent av incidenterna är olänkade, så den verkliga andelen kan vara högre.

Teamet slår ihop de två listorna till ett register med 55 distinkta poster. För de tio posterna med flest länkade incidenter uppskattar det en reparationsinsats i band och en månadsränta i timmar. En post sticker ut: ett nattligt synkroniseringsjobb för bokningar misslyckas tyst ungefär en gång varannan vecka och behöver en manuell omstart av jourpersonal. Dess reparation uppskattas till två veckor. Dess ränta, ur länkade incidenter och taggat arbete, är ungefär 10 timmar i månaden, och varje misslyckande fördröjer morgonens mottagningslistor. Återbetalningstiden är ungefär fyra månader, vilket är snabbare än någon funktion i den dåvarande planen.

Beslutet, registrerat i beslutsloggen, är att reservera 15 procent av produktteamets kapacitet för reparationsarbete, rangordnat efter ränta per enhet insats, och att rätta synkroniseringsjobbet först. Driftchefen går också med på att länka varje incident till ett känt fel där ett finns och att testa de fem mest använda tillfälliga lösningarna.

Två kvartal senare är medianåldern för kända fel 4 månader och den 85:e percentilen är 9 månader. Incidenter länkade till öppna kända fel faller till 11 procent. Den olänkade andelen faller till 8 procent, vilket ger teamet mer förtroende för siffran. Sedan fångar teamet en manipulationsrisk. Raden för nettoförändring av skuld visar 12 poster lösta under ett kvartal, men 6 av dem stängdes som rättas inte, och två av dem var de äldsta posterna med hög ränta. En granskare utanför teamet läser posterna och finner att stängningarna gjordes för att förbättra ålderssiffran. Posterna öppnas på nytt, stängningsskälet blir ett obligatoriskt fält med en namngiven godkännare, och poster med accepterad risk visas nu på samma sida som åldersfördelningen.

## Agilitet, AI, automatisering och analys

### Agilitet

Lägg en skyddad andel av kapaciteten på den skuld som har högst ränta och granska den regelbundet med intressenter. Varningen är att ett mål för antalet skuldposter leder till uppdelning och omdöpning av poster.

### AI

AI-genererad kod kan lägga till skuld snabbt, och AI kan också hjälpa till att hitta och betala av den. Följ nettoförändring av skuld och incidenter länkade till öppna kända fel för AI-stödda områden separat och märk dem. Varningen är att en modell som föreslår en rättelse kan lämna grundorsaken kvar.

### Automatisering

Automatisera upptäckt av inaktuella kända fel och av förfall av beroenden och flaggor, och mät automatiseringen på falsklarm. Varningen är att automatiska skannrar skapar brus som begraver de poster som spelar roll.

### Analys

Uppskatta ränta med de incidenter och den insats varje post orsakar, med intervall. Beslutet detta ger underlag för är vad som ska rättas härnäst. Varningen är att skuldkostnadsuppskattningar är grova, så undvik falsk precision.

## Branschperspektiv

**Startup.** Skuld är vanligen avsiktlig och ofta rätt, eftersom snabbhet till en första kund betyder mest. Håll en lista på tavlan med en etikett, registrera genvägar när du tar dem och sätt ett granskningsdatum så att "senare" betyder något. Höj reparationsandelen när räntan börjar synas i incidenter.

**Småföretag.** En ensam administratör eller ett litet team bär ofta både drift och leverans, så de två listorna är naturligt en. Registrera kända fel och deras tillfälliga lösningar i ett delat dokument och notera vilken leverantör eller vilket avtal varje post beror på. Ett leverantörsägt fel är ett känt fel du inte kan rätta själv, så följ leverantörens utlovade datum och din tillfälliga lösning.

**Storföretag.** Många team, många tjänster och många leverantörer skapar flera konkurrerande listor och flera definitioner av "klart". Avgör en registerstruktur, en stängningsregel och en rangordningsmetod, och låt team lägga till lokala fält med en angiven mappning.

**Offentlig sektor.** Äldre system, långa upphandlingscykler och fasta budgetar gör viss skuld kostsam att betala av och vissa ersättningsbeslut långsamma. Registrera de juridiska, lagringsrelaterade och revisionsrelaterade begränsningar som blockerar en rättelse, eftersom de förklarar uppskjutandet. Visa registret som en del av riskrapporteringen och planera reparation i budgetcykeln i stället för att behandla den som en oplanerad kostnad (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Motivet är att sluta betala ränta du inte kan se. Upprepade incidenter, manuella tillfälliga lösningar och långsamma, riskfyllda ändringar är de synliga kostnaderna, och de registreras normalt som separata problem i separata budgetar. Ett sammanslaget register förvandlar dem till en enda jämförelse mellan kostnaden för reparation och kostnaden för att bära skulden.

Praktikens kostnad har tre delar. Den första är uppsättning: ett register, länkar mellan ITSM-verktyget och ärendehanteringssystemet och en taggningskonvention. Den andra är löpande insats: några sekunder per incident för att länka den, några sekunder per arbetsobjekt för att tagga det och en månatlig granskning på en till två timmar per tjänst. Den tredje är själva reparationskapaciteten, som är den största posten och är en avsiktlig investering, inte en omkostnad.

Avkastningen kommer från mönster du kan mäta själv. Jämför incidenterna länkade till ett känt fel före och efter dess rättelse, timmarna taggat arbete på berörda ändringar före och efter och de jouravbrott som undvikits. Lägg till kostnaden för avbrott om din organisation redan uppskattar den. Låna inte en branschsiffra för skuldens kostnad: forskningslitteraturen i ämnet är verklig, men siffrorna beror på sammanhang, och dina egna incident- och tidsdata är bättre belägg. Forskningen i *Accelerate* kopplar leveransprestation till organisationens prestation (se ämne 2.8, DORA-mätetal), men ger inget pris för ditt register. För den bredare behandlingen av kostnad och avkastning, se ämne 7.7, Avkastning på investering och affärscase.

## Antimönster och fallgropar

- **Två listor som aldrig möts.** Drift och leverans argumenterar för samma kapacitet med olika belägg. Slå ihop listorna eller länka varje delad orsak.
- **Ett enda skuldpoäng för organisationen.** Det döljer var kostnaden finns och inbjuder till rangordning av team. Redovisa registret per tjänst, med ålder, ränta och ägarskap.
- **Den stora omskrivningen som enda reparation.** Stora städningar stannar av, och registret fylls på medan de pågår. Avveckla poster i små steg, rangordnade efter återbetalningstid.
- **Noll skuld som mål.** Att jaga det belönar triviala stängningar och avskräcker ärlig registrering. Sikta på ett register vars äldsta poster med hög ränta är i rörelse.
- **Att stänga kända fel vid "sammanslaget".** Rättelsen har inte nått användare, och incidenten återkommer. Stäng vid release och bevaka sedan återkomst över ett angivet fönster.
- **Att gömma uppskjutande i "rättas inte".** Ålderssiffran förbättras och risken finns kvar. Räkna accepterad risk separat, med en ägare och ett granskningsdatum.
- **Att behandla statisk analys som sanningen.** Poäng speglar kodens form, inte kostnad. Använd dem för att hitta kandidater och bekräfta sedan med incidentlänkar och ändringshistorik.
- **Att tillskriva skuld till upphovspersoner.** Det lär människor att dölja genvägar och undvika svåra komponenter. Håll varje mått på tjänst- och teamnivå (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Register och definitioner | Kända fel och skuld lever i människors huvuden eller i spridda anteckningar | Drift och leverans håller var sin lista, med olika regler | Ett register med en skriven definition, en ägare och en stängningsregel för varje post | Ålder, accepterad risk och nettoförändring granskas mot de skrivna definitionerna | Definitioner revideras med leverantörer och kunder när de slutar ge underlag för beslut |
| Mätning av ränta | Ingen länk mellan incidenter och orsaker | Vissa incidenter länkas till kända fel för hand | Incidentlänkar krävs där orsaken är känd; arbete taggas på teamnivå | Ränta och återbetalningstid uppskattas för de främsta posterna och följs över tid | Ränta kopplad till tjänsteresultat och delad över team och leverantörer |
| Kapacitet och prioritering | Reparation sker i en kris | Informell tid avsatt av vissa team | En överenskommen kapacitetsandel och en gemensam rangordningsmetod | Andelen justeras efter registrets trend och finansieras som planerat arbete | Reparationskapacitet samordnas över delade plattformar och leverantörer |
| Tillfälliga lösningar och stängning | Tillfälliga lösningar odokumenterade eller hålls av en person | Dokumenterade för vissa fel, otestade | Tillfälliga lösningar i kunskapsbasen, med en stängningsregel vid release | Användning, fel och återkomst efter stängning av tillfälliga lösningar mäts | Tillfälliga lösningar avvecklas automatiskt när rättelser släpps, med återkoppling från användare |

## Checklista

- [ ] Kända fel och skuldposter finns i ett register, eller är länkade post för post.
- [ ] Varje post har en ägare, ett storleksband, en tjänst och ett granskningsdatum.
- [ ] Avsiktliga genvägar registreras när de tas, med ett skäl.
- [ ] Incidenter länkas till kända fel där orsaken är känd, och den olänkade andelen redovisas.
- [ ] Arbete som orsakas av svaga punkter taggas på teamnivå, och taggningen revideras genom stickprov.
- [ ] Var och en av de främsta posterna har ett insatsband för reparation och en uppskattning av månadsränta.
- [ ] En andel av kapaciteten för reparationsarbete är överenskommen, redovisad och granskad varje kvartal.
- [ ] Kända fel stängs vid release av rättelsen, med ett angivet återkomstfönster.
- [ ] Stängningar med accepterad risk listas separat, med en godkännare och ett granskningsdatum.
- [ ] Tillfälliga lösningar för de fel med störst påverkan testas enligt schema.
- [ ] Åldersfördelningen och uppdelningen per tjänst visas, tillsammans med totalerna.
- [ ] Inget skuldmått används för att jämföra eller rangordna individer.

## AI-prompter

**Slå ihop två listor till ett register.**

```text
I have two lists of deferred repairs. List A comes from [operations tool or
source] and holds [number] known errors. List B comes from [delivery tracker or
source] and holds [number] technical debt items. Here are the entries:
[paste entries with title, service, date registered, and a one-line description].
Group entries that appear to describe the same cause, propose a single ledger
entry for each group, and flag entries that need a human to confirm the match.
Do not invent causes, services, or dates. List your assumptions and the questions
I should answer before merging.
```

**Uppskatta insatsband och månadsränta för de främsta posterna.**

```text
For the ledger item [item title] on [service], I have this evidence: linked
incidents [list with dates and durations], tagged work [hours or item counts],
and a repair estimate from the team of [estimate]. Help me write coarse effort
and monthly interest bands, a simple payback time, and the confidence level for
each figure. Show your arithmetic. Do not invent costs, benchmark values, or
industry figures. If a figure is missing, ask me for it. List your assumptions.
```

**Granska stängnings- och manipuleringsrisker.**

```text
Here are the definitions and the last quarter's data for our known error and debt
ledger: [definitions of age, workaround coverage, debt net change, and the closure
rule] and [summary of items closed, with closure reasons]. Identify the ways
these measures could be flattered, the evidence in the data that suggests it has
happened, and a guardrail for each. Treat this as a review of the instrument, not
a review of people. Do not accuse anyone, and do not invent data. List your
assumptions.
```

**Förbered ett prioriteringssamtal med produktägaren.**

```text
I need to propose how to split capacity between features and repair work for
[team] next quarter. The ledger shows [summary of ledger: counts, age
distribution, top items with effort and interest bands]. The feature plan
contains [summary of planned features and their expected value, as supplied by
the product owner]. Draft a one-page proposal that compares options for the
repair share, states the cost of delay of the main repair items, and names the
trade-offs. Do not invent value estimates or benchmark shares. List your
assumptions and the decisions the product owner must make.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta ämnet som definierar ett relaterat mätetal, till exempel återkomst eller misslyckade ändringar, och skyddsräcket som hör bredvid det.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett redigerat mätetal anger sina klockor, sin manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- Kända fel och teknisk skuld är två vyer av ett register över uppskjutna reparationer, så håll dem ihop eller länkade.
- Mät räntan varje post kostar varje månad, i incidenter, tillfälliga lösningar och bromsad ändring, och rangordna reparation efter återbetalningstid.
- Gör varje uppskjutande till ett beslut med en ägare, ett skäl och ett granskningsdatum, och redovisa accepterad risk separat.
- Reservera en överenskommen andel av kapaciteten för reparationsarbete och redovisa den bredvid planerat arbete.
- Stäng ett känt fel vid release av rättelsen och bevaka sedan återkomst innan du litar på resultatet.
- Håll varje mått på tjänst- och teamnivå och använd skyddsräcken så att ett bättre tal betyder ett bättre system.

## Referenser och vidare läsning

1. Cunningham, W., "The WyCash Portfolio Management System," OOPSLA '92 Experience Report, ACM, 1992.
2. Fowler, M., "Technical Debt Quadrant," 2009, https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
3. Fowler, M., *Refactoring: Improving the Design of Existing Code*, 2nd edition, Addison-Wesley, 2018.
4. Kruchten, P., Nord, R., and Ozkaya, I., *Managing Technical Debt: Reducing Friction in Software Development*, Addison-Wesley, 2019.
5. Sculley, D., and others, "Hidden Technical Debt in Machine Learning Systems," Advances in Neural Information Processing Systems 28, 2015, https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring).
15. Wikipedia, [Code smell](https://en.wikipedia.org/wiki/Code_smell).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
18. Wikipedia, [Software bug](https://en.wikipedia.org/wiki/Software_bug).
19. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
