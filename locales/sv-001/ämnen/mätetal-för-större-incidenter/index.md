# Mätetal för större incidenter

**Mät större incidenter som sällsynta, kostsamma händelser att lära av, inte som en resultattabell: räkna dem, tidsätt dem ärligt, bedöm deras kundpåverkan, kontrollera att människor fick besked och bevisa att uppföljningsåtgärderna blev gjorda.**

## Översikt och motiv

En större incident är en incident som är allvarlig nog att kräva ett svar bortom den vanliga rutinen. [ITIL](https://en.wikipedia.org/wiki/ITIL), det mest kända ramverket för it-tjänstehantering, beskriver [incidenthantering](https://en.wikipedia.org/wiki/Incident_management_(ITSM)) som att återställa normal tjänstedrift så fort som möjligt, och det förväntar sig att organisationer hanterar sina allvarligaste incidenter genom en särskild, mer samordnad väg. Hur en organisation drar den gränsen är dess eget beslut. Ett vanligt val är en incident som påverkar många användare eller en kritisk tjänst och som kräver att flera team arbetar tillsammans under en samordnare. Skriv ned din egen definition, eftersom varje mätetal i det här ämnet beror på den.

Större incidenter är få. Ett team kan se dussintals vanliga incidenter i veckan och två eller tre större per kvartal. Det ändrar hur du mäter. Den vanliga statistiken för incidentvolym och lösningstid (se ämne 3.2, Incidentvolym och prioritet, och ämne 3.3, Svarstid och lösningstid för incidenter) förutsätter många händelser och belönar medelvärden. Med en handfull större incidenter per period domineras ett medelvärde av en dålig natt, en trendlinje är mestadels brus och en [percentil](https://en.wikipedia.org/wiki/Percentile) är meningslös på fem datapunkter (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal). Det ärliga tillvägagångssättet är att visa varje större incident som en egen rad, med en egen tidslinje, och sammanfatta först över längre fönster.

Agila och ITIL-baserade synsätt möts här mer direkt än någon annanstans i boken. ITIL bidrar med strukturen: en deklarerad större incident, en namngiven samordnare, definierad kommunikation till berörda parter och en granskning efteråt. De [agila](https://en.wikipedia.org/wiki/Agile_software_development) traditionerna och traditionerna inom [driftsäkerhetsutveckling (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) bidrar med vanorna: en [incidentledare](https://en.wikipedia.org/wiki/Incident_commander) som leder insatsen, skuldfri granskning av vad som hände och ett fokus på lärande som matar ständig förbättring. Googles *Site Reliability Engineering* beskriver både incidentledningsmönstret och praktiken med efteranalys (se referenserna). En [efteranalys](https://en.wikipedia.org/wiki/Postmortem_documentation) (postmortem) är i den här meningen en skriven redogörelse för en incident, dess orsaker och åtgärderna som följer, och termen används här utbytbart med "granskning efter incident".

Det här ämnet behandlar fem frågor. Hur ofta inträffar större incidenter? Hur länge varar de, och hur mycket av den tiden går åt innan någon deklarerar en? Hur många användare, och vilka användare, kände det? Hörde människor av oss i tid och i en jämn rytm? Och blev den utlovade uppföljningen av? De relaterade ämnena behandlar det som ligger runt dem: tillgänglighet (se ämne 5.3, Mätetal för tillgänglighet), kvaliteten på den skrivna granskningen (se ämne 4.2, Mätetal för efteranalyser och lärande), de underliggande orsakerna (se ämne 4.1, Mätetal för problemhantering) och ändringen som ofta utlöser dem (se ämne 4.4, Misslyckade ändringar och omarbete).

Termer som används i det här ämnet:

- **Större incident:** en incident som uppfyller dina skrivna deklarationskriterier och utlöser processen för större incidenter.
- **Deklaration:** det ögonblick någon med befogenhet formellt åberopar processen för större incidenter.
- **Tid till återställning:** tiden från början av kundpåverkan till det ögonblick tjänsten är återställd för användare. Ögonblicket då tjänsten återställs är inte detsamma som att hitta [grundorsaken](https://en.wikipedia.org/wiki/Root_cause_analysis).
- **Incidentledare:** rollen som samordnar insatsen, fördelar uppgifter och beslutar. Det är en roll under incidentens varaktighet, inte en befattning.
- **Granskning efter incident:** den strukturerade, skuldfria undersökningen av en incident efter att tjänsten återställts.
- **Åtgärdspunkt:** en specifik, ägd, daterad ändring som följer av en granskning.

## Nyckelprinciper

- **Visa händelser, sammanfatta sedan.** Sällsynta händelser förtjänar enskilda tidslinjer. Redovisa varje större incident separat och använd sammanfattande statistik bara över ett långt fönster, med antalet bredvid.
- **Starta klockan vid påverkan, inte vid medvetenhet.** En varaktighet som börjar när någon märker det döljer upptäcktsglappet, som ofta är den största delen av berättelsen.
- **Mät användarens upplevelse, inte teamets insats.** Kundpåverkan är skälet till att processen finns. Timmar av lösares insats är en kostnad att följa, aldrig ett betyg.
- **Kommunikation är en del av återställningen.** En tjänst som återställs medan användare fortfarande gissar har bara blivit halvt rättad. Behandla aktualiteten i uppdateringar som ett mått på insatsen.
- **Granskningen är inte klar förrän åtgärderna är det.** Ett färdigt dokument med öppna åtgärder har inte ändrat något. Mät uppföljning, inte bara att en granskning finns.
- **Rangordna aldrig människor och straffa aldrig deklarering.** Om att deklarera en större incident skadar deklarantens team i en rapport kommer färre incidenter att deklareras och mätetalen förbättras medan tjänsten blir sämre.
- **Håll deklarationskriterierna stabila.** Att flytta tröskeln ändrar varje mätetal i det här ämnet. Logga varje ändring med skäl och datum.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Antal större incidenter | Större incidenter som deklarerats under en period, per tjänst | Antal incidenter som uppfyllde deklarationskriterierna och deklarerades under perioden, efter deklarationstid; incidenter som nedgraderats inom första timmen listas separat och utesluts | antal per kvartal | Incidentposter i ITSM-verktyget med flaggan för större incident | Incidenthantering | Hälsogranskning av team eller tjänst | Månadsrapport, kvartalstrend |
| Varaktighet för större incident | Tid kunder var påverkade | Tid för återställd tjänst minus tid för påverkansstart, per incident. Påverkansstart är det tidigaste beviset i övervakning eller den första användarrapporten, vilketdera som är tidigare. Delvis återställning registreras som en egen händelse, och den fullständiga återställningen stoppar klockan | minuter, per incident | Övervakningstidslinje, incidenttidslinje i ITSM-verktyget | Incidenthantering; hantering av servicenivåer | Tid till återhämtning i leveransmått (se ämne 2.8, DORA-mätetal) | Per incident; median och maximum över långt fönster kvartalsvis |
| Tid till deklaration | Fördröjning mellan påverkans början och deklarationen av en större incident | Deklarationstid minus tid för påverkansstart, per incident. Incidenter som aldrig deklarerats hittas genom en kvartalsvis genomgång av vanliga incidenter med hög påverkan och inkluderas med en deklarationstid på ej tillämpligt (aldrig deklarerad) | minuter, per incident | Övervakningstidslinje, revisionsspår i ITSM-verktyget | Incidenthantering; övervakning och händelsehantering | Definition av redo för eskalering i teamens arbetsöverenskommelser | Per incident |
| Kundpåverkan | Hur många användare och hur mycket användning som påverkades | Berörda användare (eller misslyckade anrop) multiplicerat med berörda minuter, per incident. Räkna bara användare som försökte använda tjänsten under påverkansfönstret. Planerat underhåll utesluts | användarminuter eller misslyckade anrop | Tjänstetelemetri, supportkontaktposter | Hantering av servicenivåer; incidenthantering | Användarvända servicenivåindikatorer (se ämne 5.2, SLI:er, SLO:er och felbudgetar) | Per incident |
| Aktualitet i kommunikation | Om berörda parter fick besked i tid | Andel större incidenter där det första kundvända meddelandet gick ut inom målet efter deklaration, och andel schemalagda uppdateringar som skickats inom det överenskomna intervallet. Klockan startar vid deklaration. Enbart interna meddelanden utesluts | procent av incidenter; procent av uppdateringar | Statussidans historik, kommunikationslogg i ITSM-verktyget | Incidenthantering; hantering av servicenivåer | Intressentkommunikation i teamets arbetsöverenskommelse | Per incident; kvartalssammanfattning |
| Aktualitet i genomförd granskning | Om en granskning skedde tillräckligt snart för att vara användbar | Andel större incidenter med en publicerad granskning inom det överenskomna antalet arbetsdagar efter återställning. Klockan stoppar vid publicering, inte vid första utkastet. Incidenter som fortfarande är inom fönstret utesluts | procent | Granskningsarkiv, ITSM-verktyg | Ständig förbättring; problemhantering | Förbättringsuppföljning | Kvartalsvis |
| Uppföljning av åtgärdspunkter | Om granskningsåtgärder genomförs | Granskningsåtgärder som slutförts senast förfallodag / granskningsåtgärder som förföll under perioden. Åtgärder som stängts som "ska inte göras" räknas separat med ett skäl, döljs inte | procent; antal försenade | Ärendehanteringssystem länkat till granskningen | Ständig förbättring; problemhantering | Backlogobjekt från retrospektiv | Månadsvis |
| Upprepningsgrad för större incidenter | Återkomst av samma orsak | Större incidenter under perioden vars registrerade orsak matchar en tidigare större incident under de föregående tolv månaderna / större incidenter under perioden. Matchning sker via orsaksfältet, granskat för hand | procent, med antalet visat | Granskningsposter, problemposter | Problemhantering | Förebyggande arbete i backlogen | Kvartalsvis |

Varje rad behöver en skriven klockregel innan den betros. Tvister om påverkansstart och återställningstid är vanliga och löses bäst i förväg (se ämne 1.5, Datakällor och instrumentering).

## Rekommendationer

### Skriv ned vad som gör en incident större

**Publicera deklarationskriterier som vem som helst i jour kan tillämpa.** Kriterier kombinerar vanligen påverkan (berörda användare, en kritisk tjänst försämrad, en säkerhets- eller juridisk risk) med ett behov av samordning (fler än ett team krävs). En kort lista med exempel slår en lång matris. Ange vem som får deklarera och gör klart att deklarera i god tro aldrig är ett misstag, även när incidenten visar sig vara mindre.

**Registrera kriterieversionen i varje incidentpost.** När tröskeln flyttas flyttas trender med den. Ett versionsnummer eller datum på varje post låter dig jämföra lika med lika och förklara ett hopp i antalet som kom av en regeländring.

### Räkna och klassificera utan att göra antalet till ett mål

**Redovisa antalet med sitt sammanhang.** Visa antalet större incidenter per kvartal bredvid tjänsten, utlösaren (ändring, kapacitet, beroende, säkerhet, annat) och kriterieversionen. Ett antal utan sammanhang inbjuder till mål som "färre än tre per kvartal", vilka lär människor att inte deklarera. Behandla ett fallande antal som goda nyheter först när tid till deklaration och kundpåverkan är stabila.

**Skilj deklarerade, nedgraderade och missade åt.** Följ incidenter som deklarerades och nedgraderades, eftersom de visar om kriterierna är rimliga. Granska ett stickprov av vanliga incidenter varje kvartal efter sådana som borde ha deklarerats. De missade är de mest upplysande.

### Tidsätt incidenten från användarens sida

**Starta klockan när kunder är påverkade.** Använd det tidigaste pålitliga beviset, som ofta är en övervakningssignal som föregår det första ärendet. När starten är osäker, registrera uppskattningen och dess källa snarare än tiden då någon märkte det. Glappet mellan påverkansstart och deklaration är ett mått för sig och oftast det billigaste att förbättra.

**Dela upp tidslinjen i faser.** Upptäckt, deklaration, diagnos, begränsning och full återställning har var och en olika orsaker till fördröjning och olika ägare. En fasuppdelning för varje incident visar var tiden gick utan att behöva ett medelvärde. Att återställa tjänsten med en lösning och att rätta orsaken är separata händelser, och den andra hör till problemhantering.

**Använd medianen och värsta fallet över långa fönster, med antalet.** För ett års data, redovisa medianen och den längsta varaktigheten och säg hur många incidenter de kommer från. Undvik en enda medeltid till återställning för större incidenter. Med få händelser är den instabil, och den förvrängs av ett enda långt avbrott (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

### Bedöm kundpåverkan i termer användare skulle känna igen

**Föredra användarbaserad påverkan framför serverbaserad påverkan.** Misslyckade anrop, berörda användare eller berörda transaktioner beskriver vad som hände människor. Minuter av försämrad tjänst på en komponent beskriver vad som hände en maskin. Där du har servicenivåindikatorer, använd dem (se ämne 5.2, SLI:er, SLO:er och felbudgetar) och koppla incidenten till tillgänglighetsbilden (se ämne 5.3, Mätetal för tillgänglighet).

**Lägg till ett påverkansuttalande på vanligt språk i varje post.** En eller två meningar som namnger vem som var berörd och vad de inte kunde göra. Supportkontakter, omnämnanden i sociala medier och kundeskaleringar är belägg för uttalandet, inte mätetal att maximera.

### Mät kommunikation som en del av insatsen

**Sätt kommunikationsmål per publik.** Berörda kunder, interna intressenter och chefer behöver olika meddelanden vid olika tidpunkter. Enas om ett mål för det första meddelandet efter deklaration och en jämn rytm för uppdateringar och mät följsamheten per incident. Rytmen spelar större roll än innehållet: en uppdatering som säger "ingen förändring, nästa uppdatering om trettio minuter" och kommer i tid bygger mer förtroende än tystnad.

**Håll insats och kommunikation i skilda händer.** En kommunikationsansvarig frigör incidentledaren att fokusera på diagnos. Ett litet team kan använda en checklista och en förskriven mall i stället.

### Slut loopen kring lärande

**Håll granskningen snart och publicera den.** Minnet bleknar, så sätt ett fönster för granskningen och mät om det hölls. Genomförd granskning spelar mindre roll än vad granskningen ändrar, så para den med uppföljning. Googles *Site Reliability Engineering* argumenterar för skuldfri granskning och för att skriva ned den (se referenserna), och ämne 4.2 (Mätetal för efteranalyser och lärande) behandlar granskningskvalitet.

**Följ åtgärder till mållinjen och tillåt ärligt "ska inte göras".** Lägg varje åtgärd i den backlog det ägande teamet redan använder, med en ägare och ett datum. Registrera åtgärder som avböjs, med skälet, i stället för att låta dem ruttna. Granska försenade åtgärder vid en drift- eller tjänstegranskning och fråga vad som blockerar dem. Begränsa antalet åtgärder per granskning så att de som återstår är de som spelar roll.

**Leta efter mönster över incidenter och skicka dem till problemhantering.** Upprepade orsaker, gemensamma utlösare och återkommande upptäcktsglapp är signaler som enskilda granskningar missar. Mata dem in i problem- och känt fel-processen (se ämne 4.1, Mätetal för problemhantering) och i planeringen hos de team som äger tjänsterna. Behandla en stigande upprepningsgrad som en uppmaning till utredning, inte en dom.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Antal större incidenter | Att höja deklarationströskeln, hålla incidenter på "hög" prioritet så att de aldrig deklareras, dela upp en händelse i flera poster eller slå ihop flera till en | Fasta, versionshanterade kriterier; kvartalsvist stickprov av vanliga incidenter med hög påverkan; kundpåverkan och tid till deklaration följs bredvid antalet |
| Varaktighet för större incident | Att flytta klockan till en senare påverkansstart, förklara "återställd" medan användare fortfarande misslyckas eller stänga och öppna en ny post | Påverkansstart hämtad från övervakning; återställning bekräftad av en användarvänd indikator; återöppnade och länkade poster räknas som en incident |
| Tid till deklaration | Att deklarera tidigt på allt för att se snabb ut, eller backdatera deklarationen till påverkansstarten | Andel deklarerade incidenter som senare nedgraderats; revisionsspår för deklarationstiden; stickprov av tidslinjer mot rå övervakning |
| Kundpåverkan | Att snäva in definitionen av "berörd", bara räkna användare som väckte ett ärende eller mäta ett beroende som förblev uppe | Påverkan härledd ur telemetri såväl som kontakter; ett påverkansuttalande på vanligt språk granskat vid incidentgranskningen |
| Aktualitet i kommunikation | Att posta ett vagt meddelande för att starta klockan, skicka uppdateringar utan innehåll eller räkna interna meddelanden | Innehållskontroll av ett stickprov av uppdateringar; kundåterkoppling om tydlighet; bara kundvända meddelanden räknas |
| Aktualitet i genomförd granskning | Att publicera ett tunt dokument för att nå datumet, eller förklara en granskning "inte behövlig" | Granskningskvalitet läst av en kollega på ett stickprov (se ämne 4.2, Mätetal för efteranalyser och lärande); andelen efterskänkta granskningar visas |
| Uppföljning av åtgärdspunkter | Att skriva vaga eller triviala åtgärder som är lätta att stänga, stänga åtgärder utan att göra arbetet eller byta etikett till "ska inte göras" | Åtgärdskvalitet stickprovas; stängda åtgärder verifieras mot systemändringen; andel "ska inte göras" och skäl granskas |
| Upprepningsgrad för större incidenter | Att registrera varje orsak som ny genom att välja annan formulering, eller tillskriva allt "mänskligt fel" | En kort orsakstaxonomi med definitioner; orsaksfält granskade av någon utanför incidenten; "mänskligt fel" som orsak accepteras inte utan en systemförklaring |

En sund avläsning är ett måttligt och ganska stabilt antal deklarerade incidenter, med en och annan nedgradering och en och annan missad som hittas i granskning. Tid till deklaration är kort och fallande, kundpåverkan per incident är förstådd och faller där förebyggande arbete gjorts, och nästan alla kundvända uppdateringar är i tid. Granskningar publiceras i tid och deras åtgärder är för det mesta slutförda, med en liten, ärlig uppsättning avböjda åtgärder. Om allt ser perfekt ut, fråga om kriterierna har glidit eller om människor har slutat deklarera (se ämne 1.2, Goodharts lag och mätetalens psykologi). [Lagen uppkallad efter Charles Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) syns lättast här, eftersom kostnaden för en dålig siffra är en minskad vilja att slå larm.

## Avvägningar: för- och nackdelar

| Val | Styrka | Svaghet |
| --- | --- | --- |
| Visa varje incident som en rad | Behåller sammanhang, undviker vilseledande medelvärden på små antal | Svårare att sammanfatta för ledare; kräver en kort berättelse per incident |
| Redovisa ett antal större incidenter | Enkelt, välkänt, synligt för ledningen | Lätt att göra till ett mål; reagerar på ändringar i kriterier |
| Tid från påverkansstart | Speglar användarens upplevelse, blottlägger upptäcktsglappet | Påverkansstart är ibland osäker och kräver omdöme |
| Tid från deklaration | Lätt att fånga och jämföra | Döljer långsam upptäckt och långsam deklaration |
| Användarminuter av påverkan | Jämförbar över incidenter och tjänster | Kräver telemetri; behandlar alla användare och minuter som lika |
| Andel genomförda granskningar | Lätt att samla in, knuffar vanan | Belönar dokumentet, inte lärandet |
| Uppföljningsgrad för åtgärder | Kopplar granskning till förändring | Kan manipuleras med triviala åtgärder; kräver en ägare och en backlog |

Använd en liten uppsättning mått som täcker hela cykeln (deklarera, återställa, berätta, lära, slutföra) i stället för att optimera ett. Lägg till påverkansmått först när telemetrin finns. Där telemetri saknas tjänar ett noggrant skrivet påverkansuttalande bättre än ett påhittat tal.

## Frågor att diskutera med teamet

**1. Vad gör exakt en incident större här, och är alla i jour överens?**
Definitionen är grunden för varje annat tal. Be tre personer klassificera samma nyliga incident och jämför svaren. Oenighet visar var kriterierna är vaga. Facilitatorn bör notera exempel att lägga till i de skrivna kriterierna och enas om vem som får deklarera. Avsluta med att bekräfta att deklarera i god tro alltid är godtagbart, även om incidenten senare nedgraderas.

**2. Hur lång tid var det mellan påverkansstart och deklaration i vår senaste större incident?**
Rekonstruera tidslinjen ur övervakning, inte ur minnet. Glappet är ofta större än väntat och är ibland den längsta fasen. Fråga vilken signal som fanns och vem som såg den, och om glappet kom av oklara kriterier, ett saknat larm eller motvilja att deklarera. Välj en ändring som skulle korta det och besluta hur ni ska veta.

**3. Vem var berörd, och hur vet vi det?**
Jämför vad teamet trodde vid tillfället med vad telemetri och supportkontakter visar senare. Fråga vilka kunder, om några, som drabbades mer än andra och om det var de som betyder mest för verksamheten eller de som minst klarar av det. Diskutera om påverkansuttalandet är något en kund skulle känna igen. Enas om ett mått på påverkan ni kan samla in pålitligt nästa gång.

**4. Hörde människor av oss när de behövde, och var meddelandet användbart?**
Kontrollera det första meddelandet och varje uppdatering mot den överenskomna rytmen. Läs de faktiska meddelandena som en kund skulle göra. Fråga om de sa vad som var känt, vad som inte var känt och när nästa uppdatering skulle komma. Diskutera vem som äger kommunikationen under en incident och om den personen är fri att göra det.

**5. Vad hände med åtgärderna från våra tre senaste granskningar?**
Dra in åtgärderna i en lista och markera var och en som klar, pågående, försenad eller avböjd. För de försenade, fråga vad som blockerar dem: kapacitet, ägarskap, prioritet eller oklar omfattning. Besluta hur försenade åtgärder ska lyftas vid nästa drifts- eller planeringsmöte.

**6. Om vi mättes på antalet större incidenter, vad skulle vi göra annorlunda, och skulle kunderna få det bättre?**
Den här frågan lyfter fram manipuleringsvektorerna innan de uppstår. Be gruppen vara uppriktig om vad de kunde ändra: trösklar, etiketter, vem som deklarerar. Fråga sedan vad det bättre målet är. Ett bra svar rör sig mot kundpåverkan, tid till deklaration och uppföljning, som är svårare att manipulera utan att hjälpa användare. Registrera svaret som ett skyddsräcke.

## Fyra perspektiv

### Produkt- och leveransteam

Produktteam möter större incidenter som avbrott i planerat arbete och som återkoppling på sina egna ändringar. De har mest nytta av tydliga påverkanstal, snabb åtkomst till sina egna incidenttidslinjer och granskningsåtgärder som landar i deras backlog med utrymme att genomföra dem. Reservera kapacitet för incidentuppföljning och behandla åtgärder som arbete med samma ställning som funktioner. Dela orsakskategorier så att en återkommande utlösare leder till en förändring i praxis (se ämne 2.9, Driftarbete och oplanerat arbete).

### Service- och driftteam

Driftteam driver insatsen och bär kostnaden för nattarbetet. De behöver kriterier de kan tillämpa klockan 3 på natten, en incidentledar- och kommunikationsroll de kan bemanna och verktyg som fångar tidslinjen medan händelserna sker i stället för ur minnet efteråt. De bör bevaka den belastning större incidenter lägger på en liten grupp människor (se ämne 5.7, Mätetal för rutinarbete och jour) och använda mätetalen i det här ämnet för att be om förebyggande arbete, inte för att jämföra lösare.

### Ledning och styrning

Ledare sätter klimatet som avgör om människor deklarerar snabbt och rapporterar ärligt. De bör be om berättelsen om varje större incident och trenden över ett år, undvika mål på antalet och fråga om kundpåverkan, upptäcktsglapp och slutförda åtgärder. Finansiera det förebyggande arbete som granskningar rekommenderar och granska det i samma forum som leveransplaner. Styrningen kan då se om lärdomar blir till förändring (se ämne 5.2, SLI:er, SLO:er och felbudgetar, för ett sätt att koppla tillförlitlighet och investering).

### Kunder och användare

Kunder bedömer en större incident efter hur länge de var påverkade, om de fick besked och om det händer igen. De är bättre betjänade av tidiga ärliga meddelanden än av sena polerade. Ge dem en statuskanal, en rytm de kan förlita sig på och en tydlig redogörelse efteråt för vad som hände och vad som kommer att ändras. Där avtal gäller, redovisa i de termer som överenskommits i servicenivåavtalet (se ämne 5.1, Mätetal för SLA, OLA och XLA). Nöjdhet efter en incident är värd att fråga om (se ämne 6.1, Mätetal för kundnöjdhet).

## I praktiken: ett exempel från tjänstehantering

En medelstor nätbutik driver ett skyltfönster, en betalningstjänst och en orderhanteringstjänst, var och en ägd av ett produktteam, med ett delat plattformsteam i jour. En liten grupp för tjänstehantering driver processen för större incidenter. Alla siffror i det här exemplet är illustrativa.

Under de senaste två kvartalen deklarerade butiken fem större incidenter (illustrativt). Tjänstehanteringsgruppen visar var och en som en rad med påverkansstart, deklarationstid, återställningstid, uppskattade misslyckade beställningar, tiden för det första kundmeddelandet och granskningsstatus. De märker att medianglappet mellan påverkansstart och deklaration är 38 minuter (illustrativt), nästan lika långt som mediantiden från deklaration till återställning på 52 minuter (illustrativt). Med fem incidenter behandlar de båda talen som grova och läser tidslinjerna i stället. Tre av de fem visar ett övervakningslarm som utlöstes tidigt och låg okvitterat i en delad kanal.

Teamet beslutar att dirigera den larmklassen till jourens personsökare och lägga till en rad i kriterierna som säger att en ihållande signal om utcheckningsfel räcker för att deklarera, utan att vänta på ärenden. De sätter också ett mål för det första kundmeddelandet inom 20 minuter efter deklaration (illustrativt) och kontrollerar det per incident. Två av fem uppfyllde det. Driftsättningsteamet lägger till en statussidemall som en kommunikationsansvarig kan fylla i under press.

Under samma granskning finner de en manipulationsrisk. En chef för ett produktteam hade föreslagit ett kvartalsmål på "högst två större incidenter". Tjänstehanteringsgruppen påpekar att föregående kvartal hade en incident som låg kvar på hög prioritet i fyra timmar med kunder som misslyckades i utcheckningen, vilken aldrig deklarerades därför att teamet var nära gränsen. De ersätter målet med tre mått: tid till deklaration, misslyckade beställningar per incident och andelen granskningsåtgärder som slutförts i tid. De lägger till skyddsräcket med ett kvartalsvist stickprov av prioritetsincidenter läst av någon utanför det ägande teamet. Nästa kvartal stiger det deklarerade antalet till fyra (illustrativt), mediantiden till deklaration faller och den stickprovade granskningen finner inga missade deklarationer.

## Agilitet, AI, automatisering och analys

### Agilitet

Håll en skuldfri granskning med intressenter efter varje större incident och följ åtgärderna i en regelbunden takt. Varningen är att ett mål om färre större incidenter uppmuntrar till att deklarera färre, så mät tid till deklaration och kundpåverkan också.

### AI

AI kan hjälpa till att upptäcka, sammanfatta och kommunicera under en större incident och skriva första utkastet till en granskning. Para aktualitet i kommunikation med riktigheten i det som kommunicerades och markera vilka delar av en granskning en AI skrev utkast till och en människa kontrollerade. Varningen är att en självsäker AI-sammanfattning av en incident kan vara fel, så en människa äger den slutliga redogörelsen.

### Automatisering

Automatisera fångsten av tidslinjen ur chatt, personsökning och övervakning så att granskningen börjar från fakta, och mät själva incidentverktygen, till exempel personsökningsfel. Varningen är att automatiska statusinlägg kan se ut som kommunikation utan att nå de människor som behöver den.

### Analys

Större incidenter är sällsynta, så använd antal, tidslinjer och kundpåverkan, inte frekvenser och medelvärden. Beslutet detta ger underlag för är vad som ska rättas och vad som ska repeteras. Varningen är att små tal inbjuder till övertolkning, så undvik trendpåståenden ur en handfull händelser.

## Branschperspektiv

**Startup.** En startup kan sakna en formell process för större incidenter, bara den som är vaken. Börja med en definition på ett stycke, en namngiven samordnare för varje händelse och ett delat dokument som registrerar tidslinjen. Räkna incidenter och notera påverkan i en mening. Granskningen kan vara en halv sida och uppföljningen ett objekt i teamets backlog.

**Småföretag.** Ett småföretag är ofta beroende av leverantörer för mycket av sin tjänst, så tidslinjen inkluderar väntan på en leverantör. Registrera leverantörskontakt och svarstider i incidenttidslinjen, eftersom de förklarar mycket av varaktigheten och ger belägg för avtalssamtal. Håll kundkommunikationen enkel: en kanal, en person och ett angivet uppdateringsintervall.

**Storföretag.** Storföretag driver många tjänster och har många incidenter varje period, så ett antal per tjänst och en sammanställning är båda användbara. Riskerna är inkonsekventa kriterier mellan divisioner och en process så tung att den bromsar deklaration. Samordna definitioner, håll processen lätt de första femton minuterna och använd ett gemensamt postformat så att påverkan och kommunikation kan jämföras.

**Offentlig sektor.** Offentliga organ har ofta lagstadgade skyldigheter, till exempel att underrätta en tillsynsmyndighet eller allmänheten, och en högre kostnad för misslyckande för medborgare som saknar alternativ. Lägg till mått på efterlevnad av underrättelseskyldigheter och på påverkan på sårbara grupper och för register som håller för revision och begäranden om allmänna handlingar. Upphandlingscykler kan fördröja åtgärdspunkter, så följ blockerade åtgärder och eskalera dem.

## Affärscase: motiv, ROI och TCO

Motivet är att minska kostnaden för de incidenter som gör mest ont: förlorade intäkter eller förlorad tjänst, skadat förtroende, utbrändhet hos personal och regulatorisk exponering. En liten, konsekvent uppsättning mått för större incidenter visar var den kostnaden kommer ifrån, om upptäckt och kommunikation förbättras och om investeringen i förebyggande får genomslag. Mått som inte visar något annat än ett antal driver kostnad in i att dölja incidenter.

Kostnaderna för insamling är måttliga om datan redan finns i ITSM-verktyget, övervakningssystemet och ärendehanteringssystemet. De främsta kostnaderna är att enas om definitioner, att länka incidentposten till övervakning och till åtgärdsbacklogen och tiden det tar att skriva varje granskning. Mätetalen kostar lite utöver att göra posten konsekvent.

Avkastningen visar sig som kortare tid till deklaration, tydligare kommunikation, färre upprepade incidenter och mindre omarbete. Ingen universell siffra gäller, så uppskatta din egen: ta ditt senaste års större incidenter, uppskatta kostnaden för en timmes påverkan för varje tjänst tillsammans med ekonomi och jämför den med kostnaden för det uppföljningsarbete du skulle behöva för att förebygga de upprepade orsakerna. Den totala ägandekostnaden omfattar granskarnas tid, verktygen för tidslinjer och statussidor och den kapacitet som avsatts för uppföljningsåtgärder, vilket är där de flesta program underinvesterar.

## Antimönster och fallgropar

- **Ett mål för antalet större incidenter.** Det lär människor att undvika att deklarera. Följ i stället tid till deklaration, påverkan och uppföljning och stickprova efter missade deklarationer.
- **En enda medeltid till återställning för större incidenter.** Med få händelser dominerar ett långt avbrott. Visa i stället varje incident, sedan medianen och det längsta över ett år med antalet.
- **Att starta klockan vid deklaration.** Det döljer upptäckts- och deklarationsfördröjning. Starta i stället vid det tidigaste beviset på kundpåverkan och redovisa glappet separat.
- **Att rangordna lösare eller team efter incidentmått.** Det förstör uppriktigheten och bryter granskningen. Redovisa i stället per tjänst och system och håll namn utanför datan.
- **Att behandla granskningen som klar när dokumentet är publicerat.** Förändringen är poängen. Mät i stället uppföljningen av åtgärder och titta på försenade åtgärder varje månad.
- **Tysta tröskeländringar.** Trender blir meningslösa. Versionshantera i stället kriterierna och notera ändringar i rapporten.
- **Att bara räkna ärenden som påverkan.** Många berörda användare ringer aldrig. Använd i stället telemetri och lägg till ett påverkansuttalande på vanligt språk.
- **Att använda måtten för att fördela skuld.** Människor döljer då fakta. Håll i stället granskningar skuldfria, fokusera på villkor och beslut och leta efter systemorsaker.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Definition och klockor | Större betyder vad den mest högljudda säger; tider kommer ur minnet | Vissa team har kriterier och skriver ned start- och sluttider | En skriven, versionshanterad definition med klockregler för påverkansstart, deklaration och återställning | Definition och klockor revideras mot övervakning; ändringar loggas med skäl | Kriterier och klockor överenskomna med leverantörer och kunder, reviderade när de slutar ge underlag för beslut |
| Påverkan och kommunikation | Påverkan beskrivs med anekdoter; uppdateringar skickas när någon minns | Påverkan uppskattas för vissa incidenter; vissa team använder en statussida | Påverkan mäts ur telemetri för nyckeltjänster; uppdateringsmål sätts och följs | Påverkan och kommunikation följs över tid och kopplas till kundåterkoppling | Påverkan delas med kunder och leverantörer i ett gemensamt format, med gemensamma förbättringsåtgärder |
| Granskning och uppföljning | Granskningar är sällsynta och oskrivna; åtgärder glöms | Granskningar skrivs av vissa team; åtgärder registreras men följs inte | Varje större incident granskas i tid; åtgärder följs i teamets backlog | Försenade åtgärder och upprepade orsaker granskas i en rytm, med finansierat förebyggande arbete | Mönster delas över team och leverantörer; lärande ändrar design och planering rutinmässigt |
| Användning i beslut | Siffror åberopas i efterhand | Antal visas för ledare utan sammanhang | Tidslinjer och trender visas för de team som äger tjänsterna | Mått paras med skyddsräcken och används för att prioritera tillförlitlighetsarbete | Tillförlitlighetsinvestering beslutas gemensamt med påverkans- och återkomstbelägg över tjänster |

## Checklista

- [ ] Deklarationskriterierna är skrivna, versionshanterade och kända av alla i jour.
- [ ] Att deklarera i god tro är uttryckligen tryggt, och inget mål finns på antalet.
- [ ] Påverkansstart, deklaration och återställningstider är definierade och hämtas ur övervakning eller ett revisionsspår.
- [ ] Varje större incident visas som en egen rad med en tidslinje indelad i faser.
- [ ] Kundpåverkan härleds ur telemetri där den finns och beskrivs i ett uttalande på vanligt språk.
- [ ] Mål för det första meddelandet och för uppdateringsrytmen är satta och kontrolleras per incident.
- [ ] En granskning publiceras inom det överenskomna fönstret och dess åtgärder finns i det ägande teamets backlog.
- [ ] Försenade åtgärder och upprepade orsaker granskas enligt schema.
- [ ] Ett kvartalsvist stickprov av vanliga incidenter med hög påverkan kontrollerar missade deklarationer.
- [ ] Varje mätetal har ett namngivet skyddsräcke och inget mätetal används för att rangordna individer.

## AI-prompter

**Skriv utkast till deklarationskriterier för granskning.**

```text
I am drafting criteria for declaring a major incident in [organization type].
Our services are [list of services] and our teams are [list of teams]. Users
are [description of users]. Propose a short set of declaration criteria with
two or three examples for each, a list of ambiguities a team might argue about,
and questions I should settle with [stakeholders]. Do not invent thresholds or
benchmark values; use [placeholders] where a number is needed. List your
assumptions.
```

**Rekonstruera och kritisera en incidenttidslinje.**

```text
Here is the timeline of a major incident: [paste timeline with timestamps and
sources]. Identify the impact start, the declaration, mitigation, and full
restoration, and say which timestamps are uncertain and why. Split the duration
into phases and note where the largest delays occurred. Suggest questions to ask
the responders and monitoring evidence to look for. Do not invent facts that are
not in the timeline. List your assumptions.
```

**Granska en uppsättning åtgärder efter incident.**

```text
Below are the actions from [number] post-incident reviews for [service]:
[paste actions with owner, due date, and status]. Group them by theme, flag any
that are vague, trivial, or unowned, and identify patterns that suggest a
problem record or a backlog item for [owning team]. Do not rank individuals or
teams by performance. Do not invent causes. List your assumptions and the
information you would need to improve the analysis.
```

**Pröva ett föreslaget mätetal för manipulation.**

```text
We plan to track [metric name], defined as [definition] and measured from
[data source]. Describe how this metric could be gamed by [role], what honest
behavior it might discourage, and which paired guardrail metric or practice
would catch each case. Keep the suggestions practical for a team of
[team size]. Do not invent benchmark values or sources. List your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta de relaterade ämnena och skyddsräcket som bör sitta bredvid varje mätetal för större incidenter.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en redigerad version av det här ämnet fortfarande följer mallen och konventionerna.

## Viktigaste slutsatser

- Större incidenter är sällsynta, så visa varje med sin tidslinje och sammanfatta bara över långa fönster med antalet bredvid siffran.
- Starta klockan vid kundpåverkan och redovisa glappet före deklaration som ett eget mått.
- Mät påverkan i termer av användare och användning och lägg till ett uttalande på vanligt språk för det siffror missar.
- Behandla aktualitet i kommunikation som en del av insatsen, med mål per publik och en jämn uppdateringsrytm.
- En granskning är klar när dess åtgärder är klara, så följ uppföljning och upprepade orsaker.
- Sätt aldrig ett mål på antalet, rangordna aldrig människor och håll deklarering tryggt.

## Referenser och vidare läsning

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
3. Beyer, B., et al. (eds.), "Managing Incidents," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/managing-incidents/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
7. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
8. Wikipedia, [Incident management (ITSM)](https://en.wikipedia.org/wiki/Incident_management_(ITSM)).
9. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
10. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Incident commander](https://en.wikipedia.org/wiki/Incident_commander).
13. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
