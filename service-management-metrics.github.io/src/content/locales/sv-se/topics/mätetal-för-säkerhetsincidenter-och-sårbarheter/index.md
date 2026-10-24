# Mätetal för säkerhetsincidenter och sårbarheter

**Säkerhet är en del av att leverera och driva en tjänst kontinuerligt, så mät hur länge människor förblir exponerade, hur fort du innesluter det som går fel och hur villiga kollegor är att räcka upp handen, och förvandla aldrig ett misstag till ett skäl för skuldbeläggning.**

## Översikt och motiv

Varje tjänst bär svagheter, och några av dem kommer att utnyttjas mot den. En [sårbarhet](https://en.wikipedia.org/wiki/Vulnerability_(computing)) är en svaghet i programvara, maskinvara, konfiguration eller process som kan utnyttjas för att skada ett systems konfidentialitet, riktighet eller tillgänglighet. En säkerhetsincident är en händelse där den skadan inträffar eller trovärdigt hotas. Mått inom det här området försöker besvara två frågor. Hur exponerade är vi, och hur snabbt hittar, rättar och återhämtar vi oss från problem?

Den agila traditionen och DevOps-traditionen behandlar säkerhet som en egenskap hos kontinuerlig leverans, inte en grind i slutet av den. [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps) utvidgar DevOps-idén genom att bygga in säkerhetskontroller i pipelinen och dela ansvar mellan utveckling, säkerhet och drift. ITIL bidrar, genom sin praktik informationssäkerhetshantering, med policy, riskbaserat tänkande och kopplingen till incident-, ändrings- och tillgångshantering. De två möts i det dagliga arbetet: beroendeuppdateringar anländer som vanliga ändringar, sårbarhetsfynd blir backlogposter med ägare och incidenter hanteras med samma skuldfria granskningar som alla andra (se ämne 4.2, Mätetal för efteranalyser och lärande).

Säkerhetsmått är utsatta för särskilda förvrängningar.

- **Att räkna fynd belönar att inte titta.** Ett team som skannar mindre hittar mindre. Ett rått antal sårbarheter kan falla därför att en skanner förlorade åtkomst, inte därför att något förbättrades.
- **Allvarlighetspoäng är indata, inte sanningar.** [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) (CVSS) ger ett allvarlighetspoäng för en sårbarhet i det abstrakta, och register såsom [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (CVE) ger dem identifierare. Huruvida en sårbarhet spelar roll för dig beror på om den är nåbar i din miljö, om en exploatering är i bruk och hur värdefull den berörda tillgången är. Ett rått allvarlighetspoäng som används ensamt skickar insats till fel ställen.
- **Skuldbeläggning undertrycker rapporter.** Om människor straffas för att ha klickat på en länk eller för att rapportera en incident de orsakat slutar rapporterna, och exponeringen växer osedd. Psykologisk trygghet är en säkerhetskontroll.
- **Tidsmått döljer svansen.** En mediantid för patchning kan se frisk ut medan en handfull kritiska system sitter exponerade i månader.

Det här ämnet ger huvudmåtten, med deras definitioner, manipuleringsvektorer och skyddsräcken. Det bygger på tillgångs- och konfigurationsregistren från föregående del, eftersom du inte kan patcha eller skanna det du inte kan hitta (se ämne 7.1, Mätetal för it-tillgångshantering, och ämne 7.4, Mätetal för konfigurations- och CMDB-kvalitet). En varning: detta är en mätguide, inte en säkerhetshandbok. Välj kontroller tillsammans med kvalificerade säkerhetsproffs och följ de standarder och juridiska skyldigheter som gäller dig, till exempel ISO/IEC 27001 och nationella myndigheters vägledning.

Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller skarpt för säkerhet. När ett mått blir ett mål omklassificerar människor fynd, utesluter tillgångar från skanningar och stänger ärenden utan att rätta orsaken (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Nyckelprinciper

- **Mät exponeringstid såväl som antal.** Hur länge en svaghet förblir öppen spelar större roll än hur många som hittas.
- **Prioritera efter sammanhang.** Kombinera allvarlighet, exploaterbarhet, nåbarhet och tillgångens värde.
- **Kontrollera täckning först.** En ren rapport från en skanning som missade hälften av beståndet är falsk trygghet.
- **Bygg in säkerhet i pipelinen.** Gör säkra val till den lätta standarden och ge snabb återkoppling.
- **Samarbeta över discipliner.** Säkerhet, utveckling och drift äger resultat tillsammans.
- **Gör rapportering trygg.** Skuldfri hantering av misstag håller signalerna flödande.
- **Aggregera data om mänskligt beteende.** Redovisa gruppmönster och namnge eller rangordna aldrig individer.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Exponeringsfönster | Tid en känd sårbarhet förblir öppen på tillgångar inom omfånget, per prioritetsband | median och 85:e percentil av dagar från datumet då den var känd att gälla tillgången till datumet då en rättelse eller godkänd begränsning verifieras | dagar | Sårbarhetsskanner, ärendesystem, ändringsposter | Informationssäkerhetshantering; problemhantering | Tid att rätta ett fel i backlogen | Veckovis |
| Patchefterlevnad | Andel tillgångar inom omfånget som uppfyller patchpolicyns fönster för sin klass | tillgångar patchade inom policyfönstret / tillgångar inom omfånget som krävde en patch under perioden | procent | Verktyg för slutpunkts- och serverhantering, tillgångsregister | Informationssäkerhetshantering; release- och driftsättningshantering | Beroenden hålls aktuella i pipelinen | Veckovis |
| Försenade kritiska fynd | Antal och ålder på kritiska fynd förbi sin policyfrist | antal kritiska fynd bortom frist; ålder på det äldsta | antal; dagar | Sårbarhetshanteringssystem | Informationssäkerhetshantering; riskhantering | Säkerhetsfel som överskrider den överenskomna gränsen | Veckovis |
| Skanningstäckning | Andel tillgångar inom omfånget som bedömts inom det krävda intervallet | tillgångar skannade framgångsrikt under det senaste intervallet / tillgångar inom omfånget | procent | Skannerrapporter sammanfogade med tillgångsregistret | Informationssäkerhetshantering; it-tillgångshantering | Pipelinekontroller körs vid varje bygge | Veckovis |
| Tid till inneslutning | Tid från upptäckt av en bekräftad säkerhetsincident till inneslutning | median och 85:e percentil av timmar från upptäckt till inneslutning | timmar | Incidentposter | Incidenthantering; informationssäkerhetshantering | Tid att återställa tjänsten efter ett fel | Per incident, granskas månadsvis |
| Ålder på riskundantag | Ålder på undantag med accepterad risk, och andelen förbi sitt granskningsdatum | dagar sedan godkännande; undantag förbi granskningsdatum / öppna undantag | dagar; procent | Undantagsregister | Riskhantering; informationssäkerhetshantering | Granskning av teknisk skuld | Månadsvis |
| Rapporteringsgrad för säkerhet | Andel personalrapporterade misstänkta händelser relativt bekräftade säkerhetshändelser, som en indikator på rapporteringskultur | rapporter från personal under perioden / bekräftade misstänkta händelser under perioden, med trend på gruppnivå | kvot | Säkerhetsbrevlåda, incidentposter | Informationssäkerhetshantering; incidenthantering | Att öppet lyfta hinder | Månadsvis |

Ange prioritetsbanden och policyfönstren i registret. Exponeringsfönstret startar när sårbarheten är känd att gälla tillgången, vilket är den senare av offentliggörandet och tidpunkten då tillgången är känd att köra den berörda komponenten, och det stoppar vid verifierad åtgärd eller en dokumenterad, tidsbegränsad begränsning. Tid till inneslutning startar vid upptäckt, inte vid det första larm som ingen läste. Uteslut testfynd och falska positiva först efter granskning. Rapporteringsgrad för säkerhet beskriver grupper och trender, aldrig individer.

## Rekommendationer

### Känn ditt bestånd och din exponering

**1. Utgå från tillgångs- och beroenderegistren.** Skanningar, patchning och ägarskap beror alla på att veta vad som finns. Länka varje fynd till en tillgång, en ägare och en tjänst och mät skanningstäckning mot registret. Där täckningen är låg, rätta det innan du läser fynden. En oskannad tillgång är en okänd, vilket är värre än en känd svaghet.

**2. Minska först [angreppsytan](https://en.wikipedia.org/wiki/Attack_surface).** Ta bort det som inte behövs: oanvända tjänster, öppna portar, gamla konton, bortglömda miljöer. Allt du avvecklar är något du inte behöver patcha. Följ antalet internetexponerade tjänster och vilande konton som enkla indikatorer och granska dem med ägare.

**3. Ta med din programvaruförsörjningskedja.** Moderna tjänster är beroende av många komponenter. [Programvaruförsörjningskedjan](https://en.wikipedia.org/wiki/Software_supply_chain) omfattar bibliotek, byggverktyg, containeravbilder och leverantörerna bakom dem. Använd programvarustycklistorna som beskrevs tidigare för att hitta var en sårbar komponent används (se ämne 7.2, Mätetal för programvarutillgångar och licenser) och ta med beroendefynd i samma mått som infrastrukturfynd.

### Prioritera och rätta

**4. Rangordna efter sammanhang, inte enbart efter allvarlighetspoäng.** Kombinera CVSS-allvarligheten med om en exploatering är känd för att vara i bruk, om den sårbara komponenten är nåbar och tillgångens betydelse. Offentliga listor över sårbarheter som är kända för att utnyttjas hjälper med den första faktorn. Skriv rangordningsreglerna, granska dem och registrera skälet när en post med hög allvarlighet nedprioriteras.

**5. Sätt policyfönster per band och redovisa mot dem.** För varje prioritetsband, kom överens om en måltid för att åtgärda eller begränsa. Redovisa andelen inom fönstret, medianen och 85:e percentilen av exponering och den äldsta öppna posten. Fönster är mål för samtal, och de äldsta posterna förtjänar uppmärksamhet eftersom de visar var processen fallerar (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

**6. Behandla patchning som vanlig, frekvent ändring.** Den säkraste patchprocessen är en som körs ofta och är tråkig. Små, frekventa uppdateringar är lättare att testa och vända tillbaka än stora sällsynta, och automatiska pipelines kan tillämpa dem kontinuerligt. Använd angreppssättet ändringsmöjliggörande för riskbaserat godkännande och behåll en nödväg för brådskande rättelser (se ämne 4.3, Mätetal för ändringsmöjliggörande).

**7. Gör undantag synliga och kortlivade.** Ibland är en rättelse inte möjlig. Registrera ett undantag med ett skäl, en kompenserande kontroll, en ägare och ett granskningsdatum och redovisa undantagens ålder. Undantag utan granskningsdatum blir permanenta, och permanenta undantag blir det verkliga riskregistret.

### Svara och lär

**8. Öva incidentrespons.** [Hantering av datasäkerhetsincidenter](https://en.wikipedia.org/wiki/Computer_security_incident_management) täcker förberedelse, upptäckt, inneslutning, utrotning, återhämtning och lärdomar. Öva med övningar, registrera tid till inneslutning från upptäckt och granska varje betydande incident skuldfritt. Strukturen för hantering av säkerhetsincidenter liknar den för hantering av större incidenter (se ämne 3.4, Mätetal för större incidenter).

**9. Mät inneslutning, inte bara upptäckt.** Upptäcktsverktyg producerar larm, och värdet ligger i vad som händer sedan. Följ hur lång tid bekräftade incidenter tar att innesluta och återhämta, och vilken andel som hittades av din egen övervakning jämfört med rapporterats av utomstående. En stigande andel internt upptäckta incidenter är ett tecken på förbättrad insyn.

**10. Lär av nästan-missar.** Ett nätfiskemejl som rapporterades och blockerades, eller en sårbarhet som hittades av en kollega före en angripare, är en gratis lärdom. Registrera och granska dessa som du skulle göra med en incident och tacka personen som rapporterade. Rapporteringsgraden för säkerhet är en hälsoindikator för den kulturen, och den bör stiga med förtroende.

### Bygg kulturen och pipelinen

**11. Placera kontroller där utvecklare arbetar.** Kör beroende- och statisk analys i bygget, ge återkoppling i pull requesten och fäll bygget bara på frågor teamet är överens om är blockerare. Snabb, relevant återkoppling blir rättad. En flod av fynd med lågt värde ignoreras. Följ rättelsetiden för pipelinefynd och justera reglerna med teamen (se ämne 2.7, Mätetal för pull requests och kodgranskning).

**12. Utbilda och testa utan att skämma ut.** Medvetenhetsövningar, till exempel simulerat nätfiske, kan bygga färdigheter, och de kan också skada förtroendet när resultat används för att namnge eller disciplinera individer. Redovisa bara aggregerade resultat, fokusera på hur många som rapporterar misstänkta meddelanden och förklara syftet. Om en övning får personal att känna sig lurad, ändra den.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Exponeringsfönster | Att stänga fynd utan verifiering; att ändra startdatum; att omklassificera allvarlighet | Verifieringssteg av någon utanför det rättande teamet; regel för startdatum i registret; logg över allvarlighetsändringar |
| Patchefterlevnad | Att utesluta tillgångar som är svåra att patcha ur omfånget; att räkna en patch som tillämpad när systemet inte startades om | Omfångsändringar loggade; verifiera installerad version från tillgången, inte ärendet |
| Försenade kritiska fynd | Att dela upp fynd eller slå ihop dem; att nedgradera allvarlighet | Räkna per unik sårbarhet och tillgång; granska alla allvarlighetsändringar |
| Skanningstäckning | Att skanna en snävare uppsättning; att räkna en skanning som misslyckades med att autentisera | Täckning mot tillgångsregistret; skanningskvalitet (autentiserad, fullständig) |
| Tid till inneslutning | Att starta klockan senare; att deklarera inneslutning för tidigt | Klockan startar vid första upptäcktssignalen; verifiera inneslutning med belägg |
| Ålder på riskundantag | Att förnya undantag automatiskt; att dela undantag för att minska åldern | Granska undantagsförnyelser med ett skäl; begränsa förnyelser utan nya belägg |
| Rapporteringsgrad för säkerhet | Att uppmuntra rapporter med lågt värde; att avskräcka rapporter för att förbättra andra tal | Rapporternas kvalitet; läs kommentarerna; enkät om huruvida människor känner sig trygga med att rapportera |

En sund avläsning är hög skanningstäckning, en kort och krympande svans av exponering, ärliga undantag med granskningsdatum, incidenter som innesluts snabbt och oftare hittas internt och personal som berättar om misstänkta händelser utan rädsla.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Prioritering enbart efter allvarlighetspoäng | Enkel, konsekvent | Ignorerar sammanhang; skickar insats till fel ställen |
| Sammanhangsbaserad prioritering | Fokuserar på verklig risk | Kräver data och omdöme |
| Fasta patchfönster | Tydliga förväntningar | Kan tvinga fram riskfyllda förhastade ändringar |
| Riskbaserade fönster | Passar situationen | Svårare att revidera |
| Frekvent automatisk patchning | Små ändringar, mindre exponering | Kräver goda tester och återställning |
| Sällsynta stora patchcykler | Bekant | Längre exponering, större risk per ändring |
| Simulerat nätfiske | Bygger medvetenhet | Kan urholka förtroendet om det missbrukas |
| Fokus på rapporteringskultur | Lyfter fram problem tidigt | Svårt att mäta direkt |

Svaret är att rangordna efter sammanhang, patcha ofta i små steg med god återställning, registrera undantag med frister och investera i rapporteringskultur som en kontroll.

## Frågor att diskutera med teamet

**1. Hur mycket av vårt bestånd ser våra skanningar faktiskt?**
Jämför de skannade tillgångarna med tillgångsregistret. Fråga vad som saknas och varför. Facilitatorn bör leta efter kategorier som systematiskt är oskannade, till exempel containrar, distansenheter eller tredjepartssystem. Enas om ett glapp att stänga det här kvartalet.

**2. Vad är vårt äldsta öppna kritiska fynd, och varför är det fortfarande öppet?**
Titta på svansen, inte medelvärdet. Följ de äldsta: vem som äger dem, vad som blockerar dem och vad den kompenserande kontrollen är. Facilitatorn bör fråga om undantaget är registrerat. Enas om vem som ska lösa upp det äldsta.

**3. När orsakade en säkerhetsrättelse senast ett avbrott, och vad ändrades efteråt?**
Minns ett exempel. Var orsaken en förhastad rättelse eller ett saknat test? Diskutera hur patchning kan göras rutinmässig och säker. Länka svaret till ändrings- och releasepraxis.

**4. Om en kollega rapporterade ett misstänkt e-postmeddelande i dag, vad skulle hända med dem?**
Beskriv den verkliga vägen från rapport till respons, inklusive hur rapportören tackas. Fråga om någon har blivit generad för att ha rapporterat eller klickat. Samtalet gäller förtroende. Enas om en liten ändring som gör rapportering lättare eller tryggare.

**5. Vilka av våra säkerhetstal skulle kunna stiga medan vi blir mindre säkra?**
Lista måtten och fundera på hur vart och ett kunde förbättras genom att snäva in omfånget eller byta etikett. Tilldela varje ett skyddsräcke. Övningen bygger registerposten inför nästa granskning.

**6. Hur snabbt kan vi innesluta en bekräftad incident, och hur vet vi det?**
Granska de två senaste incidenterna och följ upptäckt till inneslutning. Notera förseningar. Fråga vilka övningar vi har kört. Enas om att köra en före nästa granskning.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam gör de flesta rättelserna och inför många av svagheterna. De bör hålla beroenden aktuella som en del av det normala flödet, behandla säkerhetsfynd som backlogposter med ägare och datum och använda pipelinekontroller som ger snabb, relevant återkoppling. De behöver tydliga prioriteter och tiden att agera på dem, och de bör fritt kunna lyfta farhågor.

### Service- och driftteam

Driftteam driver skannrarna, tillämpar patchar och svarar på incidenter. De bör hålla tillgångslänkarna aktuella, redovisa täckning ärligt och hantera undantag med frister. De behöver också skyddad tid för att öva incidentrespons och en skuldfri kultur när misstag sker.

### Ledning och styrning

Ledare sätter riskaptiten och avgör om säkerhet finansieras som en kontinuerlig verksamhet eller som ett projekt. De bör be om exponeringsfönster och de äldsta öppna posterna snarare än totaler, skydda rapporteringskulturen och acceptera att talen stiger när insynen förbättras. Styrningen bör kräva belägg för undantag och för incidentlärande.

### Kunder och användare

Användare är både förmånstagare och en försvarslinje. De vill ha tjänster som skyddar deras data, och de vill ha tydlig, rättvis vägledning. De bör få veta omgående när en incident påverkar dem, behandlas respektfullt när de rapporterar problem och få säkerhetsåtgärder som inte gör deras arbete svårare än nödvändigt (se ämne 6.4, Användar- och medarbetarupplevelse).

## I praktiken: ett exempel från tjänstehantering

En regional kreditförening driver internetbank, en mobilapp och kontorssystem med ett litet tekniskt team och en utlagd säkerhetsdriftstjänst. Siffrorna nedan är illustrativa.

Styrelsen ber om en säkerhetsinstrumentpanel. Det första utkastet från säkerhetsanalytikern visar 4 200 öppna sårbarheter och fallande, och 96 procents patchefterlevnad. Teknikchefen frågar om skanningstäckning. Genom att sammanfoga skannerns utdata med tillgångsregistret finner analytikern att 31 procent av servrarna och nästan alla containrar inte skannades de senaste 30 dagarna, därför att skannern förlorade autentiseringsuppgifter efter en migrering. Bland de tillgångar som skannades är medianen för exponeringsfönstret för kritiska sårbarheter 9 dagar, och den 85:e percentilen är 41 dagar. Det äldsta kritiska fyndet är 212 dagar gammalt, på ett äldre system med ett undantag som gick ut fyra månader tidigare. Patchefterlevnaden på 96 procent beräknades bara på de tillgångar som patchverktyget rapporterade.

Teamet gör fyra ändringar med teknik och drift. Skanningstäckning blir första raden på instrumentpanelen, med ett mål att nå full täckning av registret, och skanningsautentiseringen repareras och övervakas. Prioriteringen lägger till exploateringsstatus och tillgångens betydelse till allvarlighetspoängen, så att de 4 200 fynden reduceras till en kort lista på ungefär 60 som spelar roll nu. Beroendeuppdateringar flyttas in i pipelinen som frekventa små ändringar med automatiska tester. Undantag får en ägare, en kompenserande kontroll och ett granskningsdatum, och det utgångna granskas av riskkommittén. Säkerhetsanalytikern ändrar också hur resultat av simulerat nätfiske redovisas: bara rapporteringsgraden på gruppnivå visas, och analytikern tackar personligen kollegorna som rapporterar.

Två månader senare är skanningstäckningen 97 procent, den 85:e percentilen av exponeringsfönstret för kritiska poster är 14 dagar och det äldsta kritiska fyndet är ett begränsat undantag med 60 dagar till granskningen. Ett misstänkt e-postmeddelande med en betalningsbegäran rapporteras av en kontorsmedarbetare inom minuter, och incidenten innesluts på under två timmar. Styrelsen ber om att antalet öppna sårbarheter ska halveras till årets slut. Teknikchefen föreslår att redovisa exponeringsfönster och försenade kritiska fynd i stället, med förklaringen att ett antal kan falla genom att skanna mindre. Beslutet registreras, och styrelsen går med på att granska de nya måtten vid nästa möte.

## Agilitet, AI, automatisering och analys

### Agilitet

Behandla säkerhet som en del av kontinuerlig leverans, med rättelser som flödar genom samma pipeline och granskning som andra ändringar. Varningen är att mål för antalet sårbarheter uppmuntrar omklassificering.

### AI

AI tillför nya risker, till exempel promptinjektion och dataläckage, och AI-verktyg kan hjälpa till att göra triage av fynd. Följ incidenter som rör AI-system och andelen AI-triagerade fynd som en människa bekräftade. Varningen är att en AI som avfärdar ett verkligt fynd ger falsk trygghet.

### Automatisering

Automatisera skanning och patchning där det är säkert och mät skanningstäckning och misslyckade patchar. Varningen är att automatisk patchning kan bryta tjänster, så använd stegvisa utrullningar och återställning.

### Analys

Redovisa exponeringsfönster som en fördelning per allvarlighet med antal. Beslutet detta ger underlag för är var exponeringen ska skäras ned först. Varningen är att sårbarhetspoäng är indata, inte resultat, så kombinera dem med exploaterbarhet och tillgångens betydelse.

## Branschperspektiv

**Startup.** Det finns vanligen inget särskilt säkerhetsteam, så bygg in grunderna i pipelinen: beroendeuppdateringar, hemlighetsskanning, flerfaktorsautentisering och minsta möjliga behörighet. Följ exponeringsfönstret för en kort lista över kritiska system och ha en enkel incidentplan. Motstå att köpa en stor verktygsuppsättning innan du känner till ditt bestånd.

**Småföretag.** Utlagda tjänster och molnverktyg bär det mesta av risken. Håll en inventering, slå på flerfaktorsautentisering överallt, håll system uppdaterade automatiskt och vet vem du ska ringa vid en incident. Mät patchefterlevnad och tid att återställa säkerhetskopior. Undvik att skämma ut personal som rapporterar misstag.

**Storföretag.** Skala behöver konsekventa data över många team och verktyg. Definiera prioritetsband och fönster centralt, låt team äga sina fynd, redovisa exponering per affärstjänst och kör regelbundna övningar. Samordna med leverantörers säkerhetsteam och testa överlämningarna.

**Offentlig sektor.** Sektorer möter ofta obligatoriska direktiv med frister för specifika sårbarheter, formella skyldigheter att rapportera incidenter och revisionskrav. Behandla dem som designunderlag: följ efterlevnad av direktivfrister, behåll belägg och rapportera incidenter som krävs samtidigt som individers integritet skyddas (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna är skannings- och övervakningsverktyg, som kanske redan ägs; tiden att underhålla tillgångslänkarna; teknisk tid att rätta fynd och uppdatera beroenden; förberedelse och övningar för incidentrespons; och utbildning. Pipelinekontroller kostar installationstid och en del byggtid. Utlagd övervakning har en tjänsteavgift.

Avkastningen är lägre sannolikhet och lägre konsekvens av incidenter, kortare exponering och färre förhastade nödändringar. Dessa nyttor är verkliga och svåra att kvantifiera, eftersom incidenten som inte inträffade inte lämnar något spår. Undvik att citera branschgenomsnitt för intrångskostnader eller incidentfrekvenser om du inte kan spåra källan och dess relevans. Bygg caset ur din egen data: trenden för exponeringsfönstret, antalet nödändringar orsakade av sen patchning, tiden som lagts på manuellt patcharbete som automatisering tog bort och kostnaden för dina tidigare incidenter inklusive personaltid och kundpåverkan. Beskriv riskminskning i termer av specifika scenarier, så som det tidigare ämnet om affärscase föreslår (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att redovisa antal sårbarheter.** Antal faller när skanningar missar saker. Redovisa exponeringsfönster, försenade poster och täckning.
- **Att prioritera enbart efter allvarlighetspoäng.** Det ignorerar nåbarhet och exploatering. Lägg till sammanhang.
- **Att behandla skanningen som sanningen.** Kontrollera täckning och skanningskvalitet mot tillgångsregistret.
- **Permanenta undantag.** De blir dold risk. Ge varje undantag en ägare och ett granskningsdatum.
- **Att skämma ut människor för misstag.** Rapporterna slutar. Använd skuldfri granskning och aggregerade resultat.
- **Säkerhet som en grind i slutet.** Det saktar leverans och inbjuder till kringgåenden. Bygg in kontroller i pipelinen.
- **Patchcykler i en enda stor omgång.** De är riskfyllda och långsamma. Patcha ofta i små ändringar.
- **Att ignorera leverantörer.** Deras svagheter är dina. Följ leverantörers säkerhetsskyldigheter och incidenter.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Insyn | Enstaka skanningar av vissa system | Regelbundna skanningar av huvudsystem | Skanningstäckning följs mot tillgångsregistret; fynd länkas till ägare | Täckning, exponeringsfönster och undantag hanteras och följs över tid | Delad bild över team och leverantörer, inklusive beroenden |
| Prioritering och rättelse | Rätta efter den högljuddaste begäran | Listor baserade på allvarlighet | Sammanhangsbaserad rangordning; policyfönster per band; frekventa små patchar | Fönster och svansen granskas; pipelinekontroller justeras med team | Automatiserad, riskbaserad åtgärd med mänsklig tillsyn |
| Respons och kultur | Ad hoc-respons; skuldbeläggning | Grundplan, sällan prövad | Övad plan; skuldfri granskning; rapportering värderas | Tid till inneslutning och andel intern upptäckt hanteras; rapporteringskultur mäts | Gemensamma övningar med leverantörer och kunder; lärande delas brett |

## Checklista

- [ ] Skanningstäckning mäts mot tillgångsregistret.
- [ ] Fynd länkas till en tillgång, en ägare och en tjänst.
- [ ] Prioritetsband kombinerar allvarlighet, exploatering, nåbarhet och tillgångens betydelse.
- [ ] Policyfönster per band är överenskomna, och exponeringsfönster och den äldsta öppna posten redovisas.
- [ ] Beroende- och pipelinekontroller körs vid varje bygge, med överenskomna blockerare.
- [ ] Patchning körs som frekventa, små, testade ändringar med en nödväg.
- [ ] Undantag har en ägare, en kompenserande kontroll och ett granskningsdatum.
- [ ] Incidentrespons övas, och tid till inneslutning mäts från upptäckt.
- [ ] Data om mänskligt beteende redovisas bara aggregerat, och rapportering tackas.
- [ ] Leverantörers säkerhetsskyldigheter och incidenter följs.

## AI-prompter

**Granska en regel för prioritering av sårbarheter.**

```text
Our current rule for prioritizing vulnerabilities is: [describe]. Our data
fields include: [list, for example severity score, exploit status, asset
importance, internet exposure]. Review the rule for blind spots and ways it
could be gamed, and propose a context-based ranking with clear bands and policy
windows. Do not state specific numbers as industry standards. List your
assumptions and what a security specialist should confirm.
```

**Kontrollera skanningstäckning.**

```text
Here is a summary of our asset register by class and the assets seen by our
scanner in the last [interval]: [paste counts or sanitized lists]. Identify
classes with low coverage, likely reasons for gaps, and the quickest checks to
confirm each reason. Suggest how to report coverage so that a failed or
partial scan does not look like success. List your assumptions.
```

**Planera en tabletop-övning.**

```text
Design a 90-minute tabletop exercise for [type of organization] on this
scenario: [describe, for example a compromised supplier credential]. Include
roles, a timeline of injects, decisions to prompt, what to record (including
time to detect and contain), and questions for a blameless debrief. Do not
include real names or systems. List your assumptions and what to adapt to our
context.
```

**Skriv ett skuldfritt meddelande för ett rapporterat misstag.**

```text
A colleague reported that they [describe, for example clicked a link in a
phishing email]. Draft a short, kind reply from the security team that thanks
them, explains what we will do, and asks for details we need. Then draft an
aggregate note for the weekly update that shares the lesson without naming
anyone. List your assumptions and any tone choices I should review.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett säkerhets- eller sårbarhetsmått.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för säkerhetsmått bär sin manipuleringsvektor, sitt skyddsräcke och sina integritetsregler.

## Viktigaste slutsatser

- Mät exponeringstid, de äldsta öppna posterna och skanningstäckning, inte råa antal fynd.
- Prioritera efter sammanhang: allvarlighet, exploatering, nåbarhet och tillgångens betydelse.
- Patcha ofta i små, testade ändringar och ge varje undantag en ägare och ett granskningsdatum.
- Inneslut incidenter snabbt, lär skuldfritt och följ intern upptäckt.
- Behandla rapporteringskultur som en kontroll: tacka människor som rapporterar och rangordna aldrig individer.
- Bygg in säkerhetskontroller i pipelinen så att säkra val är de lätta.

## Referenser och vidare läsning

1. National Institute of Standards and Technology, *Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology*, NIST Special Publication 800-40 Revision 4, 2022.
2. National Institute of Standards and Technology, *Computer Security Incident Handling Guide*, NIST Special Publication 800-61 (latest revision).
3. Forum of Incident Response and Security Teams, *Common Vulnerability Scoring System*, specification (latest version), https://www.first.org/cvss/.
4. Cybersecurity and Infrastructure Security Agency, *Known Exploited Vulnerabilities Catalog*, https://www.cisa.gov/known-exploited-vulnerabilities-catalog.
5. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Vulnerability (computing)](https://en.wikipedia.org/wiki/Vulnerability_(computing)).
9. Wikipedia, [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps).
10. Wikipedia, [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System).
11. Wikipedia, [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Attack surface](https://en.wikipedia.org/wiki/Attack_surface).
14. Wikipedia, [Software supply chain](https://en.wikipedia.org/wiki/Software_supply_chain).
15. Wikipedia, [Computer security incident management](https://en.wikipedia.org/wiki/Computer_security_incident_management).
