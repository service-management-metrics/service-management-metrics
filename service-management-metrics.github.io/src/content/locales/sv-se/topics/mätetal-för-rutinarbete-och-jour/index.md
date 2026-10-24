# Mätetal för rutinarbete och jour

**En tjänst är bara så tillförlitlig som schemat som tar hand om den, så mät avbrotten, nattbelastningen och andelen tid som går förlorad på repetitivt manuellt arbete för schemat som helhet, och använd talen för att finansiera förebyggande arbete och automatisering, aldrig för att jämföra människor.**

## Översikt och motiv

Tillförlitlighet beskrivs ofta i termer av systemet: tillgänglighet, fördröjning, felgrader. Bakom varje tjänst som har användare mitt i natten finns ett mänskligt system som svarar när systemet fallerar. Det mänskliga systemet har gränser. Ett schema som anropas för ofta, väcker för många människor eller tillbringar större delen av sin vecka på manuella, repetitiva uppgifter blir långsammare, gör fler misstag och förlorar till slut människor. De andra måtten i del 5 kan se friska ut ända fram till den punkt då människorna som håller ihop dem lämnar.

Två idéer organiserar det här ämnet. Den första är [jourarbete](https://en.wikipedia.org/wiki/On-call): ett schema av människor som är nåbara och redo att svara på larm utanför normala arbetsmönster. Ett **anrop** (page) är ett larm som avbryter en responder, vanligen genom en personsökare, ett telefonsamtal eller en pushavisering. Ett **pass** är en period av jourtjänst, till exempel en dag, en vecka eller en natt. Ett **schema** är gruppen människor som turas om att ta pass. Den andra idén är **rutinarbete** (toil), en term från [site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), disciplinen att driva tjänster med programvaruteknikens metoder. I Googles bok *Site Reliability Engineering* är rutinarbete driftarbete knutet till att driva en produktionstjänst som tenderar att vara manuellt, repetitivt, automatiserbart, taktiskt, utan bestående värde och växande i takt med tjänsten. Det är inte detsamma som omkostnader såsom möten, och det är inte helt enkelt arbete någon ogillar.

ITIL 4 har ingen praktik som heter "hantering av rutinarbete." Materialet ligger över flera praktiker. [Incidenthantering](https://en.wikipedia.org/wiki/Incident_management) och övervakning och händelsehantering producerar anropen. Problemhantering tar bort orsakerna som fortsätter att producera dem. Hantering av serviceförfrågningar och driftsättningshantering producerar mycket av det repetitiva manuella arbetet. Personal- och kompetenshantering, och ständig förbättring, äger den mänskliga sidan. Den agila motsvarigheten är teamets arbetsavtal om oplanerat arbete och hållbar takt, och DevOps-vanan att teamet som bygger en tjänst också bär en del av personsökaren för den.

Måtten här handlar om belastning och hållbarhet. Incidenthantering hör till andra ämnen (se ämne 3.3, Svarstid och lösningstid för incidenter, och ämne 3.4, Mätetal för större incidenter), liksom kvaliteten på enskilda larm (se ämne 5.5, Mätetal för övervakning och larmkvalitet). Det här ämnet frågar vad det kostar människorna i schemat att hålla tjänsten igång, och om den kostnaden är hållbar.

### Varför detta hör hemma med tillförlitlighet

Trötthet har driftkonsekvenser. [Sömnbrist](https://en.wikipedia.org/wiki/Sleep_deprivation) försämrar omdöme och reaktionstid, och respondrar som är trötta vid början av en incident tar längre tid på sig att diagnostisera den och är mer benägna att göra ett andra misstag medan de rättar det första. [Larmtrötthet](https://en.wikipedia.org/wiki/Alarm_fatigue) är den besläktade effekten av för många larm: människor slutar behandla varje som brådskande. [Utbrändhet](https://en.wikipedia.org/wiki/Occupational_burnout) är det långsiktiga utfallet av ihållande överbelastning, och den visar sig som avhopp, sjukfrånvaro och bristande engagemang, som är långsamma, dyra och svåra att vända. Ett team som mäter tjänstens tillförlitlighet utan att mäta hållbarheten i sitt schema ser bara effekten och ignorerar en del av orsaken.

Det här ämnet beskriver scheman, pass och tjänster, och det rangordnar aldrig individer. En ITIL-syn utgår från incidenten och tjänsten, en SRE-syn från kostnaden i persontid och en agil syn från kapaciteten för planerat arbete.

## Nyckelprinciper

- **Mät schemat, inte personen.** Redovisa belastning per tjänst, pass och schemaplats. En persons antal anrop beror på passet de drog, och en resultattabell lär människor att dölja avbrott.
- **Räkna när avbrotten sker såväl som hur länge de varar.** Ett anrop på fem minuter klockan 03:00 kan kosta en natts sömn.
- **Definiera rutinarbete snävt och låt teamet klassificera det.** Rutinarbete är en specifik sorts arbete, inte en synonym för arbete människor ogillar.
- **Behandla belastning som en signal för investering.** Hög anropsvolym eller hög andel rutinarbete är belägg för att en tjänst, ett verktyg eller en bemanningsnivå behöver arbete.
- **Para varje belastningsmått med ett kvalitetsmått.** Färre anrop är goda nyheter bara om incidenter fortfarande upptäcks.
- **Visa fördelningar och dela datan med schemat först.** Ett genomsnittligt pass döljer en handfull hemska nätter, och människorna i jour är de bästa domarna om talen stämmer med deras upplevelse.

## Mätetalsdefinitioner

Tabellen ger kärnuppsättningen. Varje tids- eller antalsmått anger var det startar och stoppar och vad som utesluts. "Utanför kontorstid" måste definieras en gång per schema som ett skrivet fönster i lokal tid, inklusive helger och helgdagar, eftersom människorna i ett distribuerat schema kan ha olika lokala tider.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Anrop per pass | Antal anrop levererade till ett schema under ett pass | Antal anrop levererade mellan passets start och slut, ett antal per pass, efter att dubbletter av anrop för samma larmgrupp slagits ihop inom 5 minuter (sammanslagningsfönstret är en teaminställning). Testanrop och anrop som skickats av misstag utesluts. Redovisa medianen och 90:e percentilen över passen, plus det livligaste passet | anrop per pass | Anropsverktyg; jourschema | Incidenthantering; övervakning och händelsehantering | Policy för oplanerat arbete; hållbar takt | Veckogranskning, månadstrend |
| Andel anrop utanför kontorstid | Andel anrop som anländer utanför det skrivna arbetsfönstret | Anrop levererade utanför arbetsfönstret / alla levererade anrop, över perioden. Fönstret sätts per schema i lokal tid; helgdagar räknas som utanför fönstret | procent | Anropsverktyg; schemakalender | Incidenthantering; övervakning och händelsehantering | Arbetsavtal om tillgänglighet | Månadsvis |
| Andel nattavbrott | Hur ofta ett pass innehåller minst ett anrop i det skyddade sömnfönstret | Pass med minst ett anrop i det skyddade sömnfönstret (till exempel 22:00 till 07:00 lokal tid, satt av teamet) / alla pass under perioden. Ett anrop som kvitteras automatiskt utan mänskligt svar utesluts | procent av passen | Anropsverktyg; kvitteringslogg | Incidenthantering; personal- och kompetenshantering | Hållbar takt; teamets hälsokontroll | Månadsvis |
| Andel rutinarbete av tiden | Andel av ett schemas arbetstid som läggs på rutinarbete | Timmar schemat registrerar mot arbete klassificerat som rutinarbete / totala arbetstimmar registrerade av schemat, över en månad. Möten, utbildning och ledighet utesluts ur både täljare och nämnare. Klassificeringen följer de sex kännetecknen för rutinarbete, tillämpade av teamet | procent av tiden | Tidsstickprov eller uppgiftsetiketter i arbetsverktyget; granskning av teamets klassificering | Ständig förbättring; driftsättningshantering; hantering av serviceförfrågningar | Andel oplanerat arbete; kapacitetsfördelning i planerat arbete | Månadsvis, med en kvartalsvis granskning av klassificeringen |
| Rutinarbete per källa | Fördelning av timmar av rutinarbete över namngivna källor såsom manuella omstarter, åtkomstbegäranden, förnyelse av certifikat och triage av ärenden | Timmar av rutinarbete för varje källa / totala timmar av rutinarbete, med de fem främsta källorna listade och en grupp "övrigt". Samma undantag som för andel rutinarbete av tiden | procent av timmarna av rutinarbete per källa | Tidsstickprov eller uppgiftsetiketter i arbetsverktyget | Problemhantering; hantering av serviceförfrågningar | Backlog av förbättringsposter | Kvartalsvis |
| Andel upprepade anrop | Andel anrop orsakade av ett tillstånd som har anropat schemat tidigare inom ett angivet fönster | Anrop vars larmgrupp eller orsakskod matchar ett tidigare anrop inom 30 dagar / alla anrop under perioden. En orsakskod sätts av respondern vid stängning; osatta koder redovisas separat | procent | Anropsverktyg; orsakskoder i incidentposten | Problemhantering; incidenthantering | Åtgärder från retrospektiv; teknisk skuldbacklog | Månadsvis |
| Schemadjup | Hur många kvalificerade respondrar som delar personsökaren jämfört med antalet roller att fylla | Antal personer som slutfört jourberedskap och är tillgängliga för pass / antal passplatser per schemacykel. Ledighet och tjänstgöring på annan plats minskar tillgängligheten. Redovisa som en kvot per schema, aldrig per person | kvot | Schema; beredskapschecklista | Personal- och kompetenshantering | Tvärfunktionellt team; kompetensmatris | Kvartalsvis |
| Borttaget rutinarbete | Återkommande timmar av rutinarbete som tagits ur schemats arbete genom en automatisering eller designändring | Uppskattade månatliga timmar av rutinarbete för en källa före ändringen minus samma efter ändringen, mätt över minst två cykler efter leverans. Timmar som sparats genom en engångsstädning utesluts | timmar per månad | Tidsstickprov före och efter; förbättringsärende | Ständig förbättring; problemhantering | Levererad förbättringspost | Kvartalsvis |

Ett anropsantal är ett antal avbrott, inte incidenter: en incident kan ge ett dussin anrop. Andel rutinarbete av tiden beror på ärlig registrering, så behandla den som en överenskommen uppskattning.

## Rekommendationer

### Definiera termerna innan du räknar

**1. Skriv ned vad som räknas som ett anrop, ett pass och utanför kontorstid.** Team räknar olika saker under samma ord. Ett anrop kan vara vilken avisering som helst, bara de som når en människa eller bara de som kräver åtgärd. Välj en definition, ange sammanslagningsfönstret för dubbletter och registrera arbetsfönstret i lokal tid. Utan detta ändras talen när ett verktyg konfigureras om, och trenden vilseleder.

**2. Kom överens om vad rutinarbete är, med exempel från din egen tjänst.** Utgå från de sex kännetecknen i SRE-boken. Skriv en kort lista över exempel och icke-exempel, till exempel att starta om ett fastnat jobb (rutinarbete), att utforma ett nytt återställningsverktyg (utveckling) och ett planeringsmöte (omkostnad). Se över listan när oenigheter dyker upp.

**3. Välj hur du ska mäta andelen rutinarbete och godta dess gränser.** De billiga alternativen är tidsstickprov, uppgiftsetiketter i arbetsverktyget och en kort uppskattning varannan vecka. Inget är exakt, så välj det med minst omkostnad, kör det i ett kvartal och bedöm trenden mer än det absoluta värdet.

### Mät belastningen på schemat

**4. Redovisa anrop per pass som en fördelning.** Det genomsnittliga passet döljer det schemat känner. Visa medianen, den 90:e percentilen och det livligaste passet, och lägg till en anteckning om vad som hände under det passet. En tyst median med en hemsk svans betyder några få dåliga nätter, vilket är ett annat problem än ett stadigt livligt schema. Se ämne 1.6, Statistisk läskunnighet för tjänstemätetal, för att läsa percentiler.

**5. Lägg tidpunkt bredvid volym.** Andel anrop utanför kontorstid och andel nattavbrott visar när belastningen landar. Fem anrop på kontorstid är ett besvär; fem mellan midnatt och 05:00 är en annan kostnad. Visa båda på samma sida.

**6. Titta på spridningen över pass, inte över människor.** Ett schema där ett återkommande pass (till exempel helgen eller måndagens överlämning) samlar de flesta anropen behöver en annan rättelse än ett där belastningen är jämn. Redovisa andelen anrop per passposition och dag. När datan redovisas per namngiven individ, räkna med att den läses som en rangordning, så producera inte den vyn.

**7. Räkna belastningen från större incidenter separat.** En större incident kan ge fler avbrott på en natt än en normal månad. Redovisa den som en egen rad så att en händelse inte förvränger trenden (se ämne 3.4, Mätetal för större incidenter).

### Koppla belastning till orsaker och till rättelser

**8. Länka anrop till problem och följ upprepningar.** Andelen upprepade anrop visar hur mycket av belastningen som kommer från orsaker som redan är kända. En hög andel upprepningar är ett argument för problemhantering, inte för ett snabbare svar. Mata de främsta återkommande orsakerna in i problembackloggen och registrera länken (se ämne 4.1, Mätetal för problemhantering, och ämne 4.6, Teknisk skuld och kända fel).

**9. Rangordna källor till rutinarbete och angrip den största.** Ett [Paretodiagram](https://en.wikipedia.org/wiki/Pareto_chart) över timmar av rutinarbete per källa visar vanligen att några få källor står för det mesta av tiden. Välj den största, avgör om den kan designas bort, automatiseras eller överlämnas till teamet som äger orsaken och schemalägg den som funktionsarbete. Föredra att ta bort behovet framför att automatisera steget, eftersom ett automatiserat steg fortfarande måste underhållas.

**10. Mät borttaget rutinarbete, inte skrivna automatiseringar.** En automatisering som ingen använder tar inte bort något. Mät timmarna av rutinarbete före och efter, över minst två cykler, och registrera insatsen för att bygga och underhålla automatiseringen. Det är den ärliga avkastningen, och den förhindrar ett program av "automatisering" som lägger till skript utan att ta bort arbete. Se ämne 3.7, Mätetal för självbetjäning och automatisering, för användares införande av automatisering.

### Håll systemet hållbart

**11. Sätt schemagränser i ett teamavtal och bevaka sedan schemadjupet.** Kom överens om hur ofta en person kan vara i jour, hur många nätter i följd som är acceptabelt och vilken vila som följer på en dålig natt. Schemadjupet visar om schemat har tillräckligt många kvalificerade människor för den överenskomna gränsen. Ett schema som nominellt är åtta personer men i praktiken tre, eftersom de andra ännu inte är redo eller är lediga, uppfyller inte gränsen, vad bemanningslistan än säger.

**12. Använd talen för att be om något specifikt.** Ett belastningstal stöder en begäran: en bemanningsändring, tid avsatt från funktionsarbete för att betala av rutinarbete, en ändring av larmtrösklar eller en avveckling. Ange begäran bredvid talet, annars slutar människor registrera (se ämne 1.4, Styrning och ägarskap av mätetal).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Anrop per pass | Att höja larmtrösklar eller tysta larm så att antalet faller; att slå ihop orelaterade larm till ett anrop; att flytta anrop till en ärendekö som ingen bevakar | Detektionstäckning och kundrapporterade incidenter som övervakningen missat (se ämne 5.5, Mätetal för övervakning och larmkvalitet); tid till upptäckt (se ämne 3.3, Svarstid och lösningstid för incidenter) |
| Andel anrop utanför kontorstid | Att omdefiniera arbetsfönstret så att det blir bredare; att schemalägga om jobb och driftsättningar så att anrop flyttas till kontorstid utan att minskas; att omklassificera anrop som "låg brådska" | Total anropsvolym bredvid andelen; det skrivna arbetsfönstret under ändringskontroll; en granskning av vad som flyttats |
| Andel nattavbrott | Att fördröja kvittering till morgonen; att kvittera anrop automatiskt; att bara räkna anrop som nått en människa | Tid till kvittering per timme (se ämne 3.3, Svarstid och lösningstid för incidenter); anrop utan mänskligt svar redovisade separat; kundpåverkan på natten |
| Andel rutinarbete av tiden | Att omklassificera rutinarbete som "utveckling" eller "projektarbete"; att registrera mindre än vad som lades; att bara märka det som är lätt att beskriva | En periodisk revision av klassificerade poster av någon utanför schemat; teamets egen bild av hur veckan kändes; andelen tid som läggs på planerat förbättringsarbete |
| Rutinarbete per källa | Att dela en stor källa i flera små så att ingen sticker ut; att lämna en källa onamngiven i "övrigt" | Ett tak för gruppen "övrigt" (till exempel under en femtedel av timmarna av rutinarbete, en teaminställning); stickprov av posterna i "övrigt" varje kvartal |
| Andel upprepade anrop | Att stänga anrop med en ny orsakskod varje gång så att matchningar missas; att vidga orsakskoder tills allt är distinkt; att förlänga eller förkorta fönstret | Revision av orsakskoder på ett stickprov; återkomst av samma larmgrupp över incidenter (se ämne 4.1, Mätetal för problemhantering) |
| Schemadjup | Att räkna människor som inte slutfört beredskap; att räkna människor som sällan är tillgängliga; att fylla ut bemanningslistan | Andel pass som faktiskt täcks av den nominella poolen; faktiskt antal pass per plats, redovisat utan namn; slutförd beredskapschecklista |
| Borttaget rutinarbete | Att räkna engångsstädningar som återkommande besparingar; att ignorera insatsen för att bygga och underhålla automatiseringen; att göra anspråk på besparingar utan ett före och efter | Timmar före och efter mätta över två cykler; underhållsinsats för automatiseringen; andel rutinarbete av tiden under de följande kvartalen |

En sund avläsning är ett schema vars medianpass är tyst och vars värsta pass är sällsynt, med få anrop på natten, en fallande andel upprepade anrop och en andel rutinarbete som faller därför att källor har tagits bort, inte därför att de omklassificerats. Den visar också insatsen för att komma dit: förbättringsarbete som dyker upp i planen, finansieras och levereras. Om antalet anrop faller medan kunder rapporterar fler incidenter som övervakningen inte fångade blir talen bättre genom att titta bort.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Räkna anrop från anropsverktyget | Automatiskt, billigt och svårt att bestrida | Räknar avbrott, inte deras kostnad; att justera larm ändrar antalet utan att ändra belastningen |
| Tidsstickprov för rutinarbete | Rimlig noggrannhet för måttlig insats | Kräver disciplin; små urval är brusiga |
| Rapportering på schemanivå | Motsvarar hur arbetet är organiserat; säkert att dela brett | Kan dölja en person som har det svårt; behöver en stödjande samtalskanal bredvid |
| Hårt tak för rutinarbete (till exempel SRE-bokens mål att hålla rutinarbete under 50 procent av tiden) | En tydlig signal som utlöser ett svar | Ett tal kan nås genom omklassificering; ett tak behöver stöd från ledningen |

Den centrala spänningen är mellan acceptans och investering. Det är lätt att behandla hög belastning som det normala priset för en viktig tjänst och be människor absorbera den, och det är lätt att sätta ett tak som ingen har makt att verkställa. Vägen igenom är att para varje mått med ett beslut: en tröskel vid vilken teamet stannar och vidtar åtgärd, en namngiven ägare för åtgärden och ett datum att titta igen. Tal på schemanivå är säkra och ibland för grova. När någon har det svårt hör samtalet hemma hos den personen och deras chef, med hjälp av deras egen beskrivning av veckan.

## Frågor att diskutera med teamet

**1. Hur kändes vårt livligaste pass förra kvartalet, och vad säger talen om det?**
Börja med berättelsen före diagrammet. Be människorna som var i jour beskriva passet och jämför det sedan med anrop per pass och nattavbrott. Om talen underskattar upplevelsen, ta reda på vad som saknas, till exempel oregistrerade samtal eller arbete som gjorts efter anropet. Fånga den listan som nästa förbättring av mätningen.

**2. Vad skulle vi säga är rutinarbete i vårt team, och vad skulle vi säga inte är det?**
Lägg fem eller sex nyliga uppgifter på en tavla och be var och en klassificera dem som rutinarbete, utveckling eller omkostnad mot de sex kännetecknen. Räkna med oenighet och behandla den som användbar: oenigheterna visar var definitionen är vag. Enas om en arbetsdefinition för nästa kvartal och skriv ned två exempel på vardera. Undvik att debattera om arbetet är roligt, eftersom frågan är om det är manuellt, repetitivt och automatiserbart.

**3. Vilket larm eller vilken uppgift skulle vi radera först om vi kunde?**
Be om larmet eller den återkommande uppgiften som alla fruktar och fråga sedan vad som hindrar oss från att ta bort det: kostnaden att rätta, en saknad ägare eller en övertygelse att det krävs. Facilitatorn bör leta efter arbete som är billigt att ta bort och vars ägare inte är i rummet. Avsluta med att välja en post till nästa planeringsomgång.

**4. Hur många människor kan faktiskt ta ett pass i dag, och vilka gränser är vi villiga att åta oss?**
Räkna beredskap ärligt: vem som är utbildad, vem som är tillgänglig och vem som har begränsningar. Jämför resultatet med den nominella schemastorleken. Fråga vilken frekvens av jour och vilket antal nätter i följd gruppen anser acceptabelt och kontrollera sedan om nuvarande praxis uppfyller det.

**5. Om vi halverade vårt anropsantal till nästa kvartal, hur skulle vi veta att vi inte bara slutat lyssna?**
Frågan gäller skyddsräcket. Be gruppen lista sätt som anropsantalet kunde falla utan att tjänsten förbättras, till exempel genom att höja trösklar, slå ihop larm eller ignorera en källa. Fråga sedan vad vi skulle se i kundrapporter och i upptäcktsmått om det hade hänt. Enas om skyddsräcket och lägg det på samma sida som volymen.

**6. Vem ser de här talen, och vad vill vi att de ska göra med dem?**
Följ belastningsmåttens väg från schemat till chefer och ledare. Fråga vad varje publik sannolikt drar för slutsatser och om någon vy kan läsas som en rangordning. Enas om formen som går uppåt: på schemanivå, med sammanhang, med en begäran bifogad. Notera varje oro för att individer kan identifieras.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam genererar mycket av jourbelastningen genom ändringarna de släpper. Team som driver det de bygger kan se kopplingen mellan en release och anropen som följer. De bör ta med rutinarbete och jourarbete i kapacitetsplaneringen, schemalägga borttagning av rutinarbete som vanligt backlogarbete och bevaka ändringskvalitet bredvid hastighet (se ämne 2.8, DORA-mätetal).

### Service- och driftteam

Driftteam bär personsökaren oftast och ser den mänskliga kostnaden först. De bör äga definitionerna, köra tidsstickprovet eller märkningen, publicera talen på schemanivå och ta de främsta källorna till rutinarbete och upprepade orsaker till de ägande teamen med belägg. Deras risk är att tyst absorbera belastningen av professionalism. En lugn, saklig journal över nätter och veckor är en effektivare begäran om hjälp än ett klagomål, och journalerna ska aldrig förvandlas till en rangordning av människorna som svarade.

### Ledning och styrning

Ledare avgör bemanning, prioriteringar och om arbete mot rutinarbete finansieras. En ledare som läser en hög andel rutinarbete som dålig prestation lär teamet att sänka den genom att byta etikett. En ledare som läser den som en räkning för arbete organisationen valde att inte finansiera får ärlig data och en plan. Styrningen bör förvänta sig en gräns för schemabelastning och ett synligt svar när den överskrids (se ämne 9.2, Mätetal för nöjdhet och välbefinnande).

### Kunder och användare

Användare ser inte schemat, men de känner effekterna: långsammare diagnos från trötta respondrar, upprepade incidenter från orättade orsaker och avgången av människor som kunde tjänsten. Där användare spänner över många tidszoner formar deras behov utanför kontorstid schemat, och kostnaden för att täcka dem är ett rimligt ämne för ett servicenivåsamtal (se ämne 5.1, Mätetal för SLA, OLA och XLA).

## I praktiken: ett exempel från tjänstehantering

En medelstor nätbutik driver en orderplattform, en kundkontotjänst och en lagerintegration. Ett schema av sex ingenjörer från två produktteam och en liten driftgrupp delar ett veckovist jourpass. Alla siffror i det här exemplet är illustrativa.

Den månatliga granskningen visar en median på 9 anrop per pass och en 90:e percentil på 31. Det livligaste passet hade 58 anrop. Ungefär hälften av alla anrop anländer utanför kontorstid, och 6 av de 8 passen under kvartalet innehöll ett anrop mellan 22:00 och 07:00. Tidsstickprov tyder på att rutinarbete tar 55 procent av arbetstiden.

Det livligaste passet sammanföll med en certifikatsutgång på lagerintegrationen som anropade schemat 22 gånger under en natt. Ett diskutrymmeslarm på en batchserver står för nästan en fjärdedel av anropen, och de flesta stängdes genom att rensa en tillfällig katalog för hand. Andelen upprepade anrop är 41 procent. En Paretovy visar att manuella certifikatsförnyelser, diskstädning och åtkomstbegäranden tar de flesta timmarna av rutinarbete.

Teamet tar tre poster in i de närmaste fyra veckorna: automatisera certifikatsförnyelse, rätta orsaken till den fulla tillfälliga katalogen och flytta åtkomstbegäranden till ett självbetjäningsformulär som ägs av identitetsteamet. Ett arbetsavtal sätter en gräns på ett pass av fyra per person och en vilodag efter en natt med tre eller fler anrop. Schemadjupet är 6 personer för ett överenskommet behov av 8, så två ingenjörer från ett tredje team börjar beredskapsutbildning.

En manipulationsrisk dyker upp vid nästa granskning. Anrop per pass har fallit till en median på 4 och den 90:e percentilen till 12. En chef är nöjd. En teammedlem påpekar att diskutrymmeslarmets tröskel höjdes med 20 punkter och att batchservern fylldes två gånger utan något anrop. Kundrapporterade incidenter om försenade batchbeställningar ökade. Skyddsräcket, kundrapporterade incidenter som övervakningen missade, fångade det. Tröskeländringen återställs, katalogstädningen schemaläggs som en rättelse och teamet lägger till en regel att varje tröskeländring registreras med sitt skäl och granskas efter en månad. Andelen rutinarbete nästa kvartal är 38 procent (illustrativt) och redovisas med stickprovsmetoden bredvid.

## Agilitet, AI, automatisering och analys

### Agilitet

En hållbar takt inkluderar jourschemat, så granska dess belastning med teamet i regelbunden rytm och finansiera förebyggande arbete. Varningen är att ett mål för färre anrop kan leda till att larm tystas.

### AI

AI kan sammanfatta anrop, föreslå steg i driftinstruktioner och göra triage av larm, vilket kan sänka rutinarbete, och den kan lägga till nytt rutinarbete i att kontrollera och korrigera dess resultat. Räkna tid som läggs på att övervaka AI som rutinarbete och para anropsantal med signaler om sömn och välbefinnande. Varningen är att automatiserad första respons kan dölja anrop för människor som fortfarande bär risken.

### Automatisering

Automatisera borttagning av rutinarbete där arbetet är repetitivt och mät det borttagna rutinarbetet och incidenterna automatiseringen orsakade. Varningen är att automatisering byggd utan ägarskap blir en ny källa till jourarbete.

### Analys

Redovisa belastning per schema, aldrig per person, med antalet anrop bakom varje siffra. Beslutet detta ger underlag för är var man ska investera i förebyggande arbete. Varningen är att anropsdata utelämnar informella avbrott, så kombinera den med en kort enkät.

## Branschperspektiv

**Startup.** Ett litet team har ofta inget formellt schema, så alla är i jour hela tiden och kostnaden är osynlig. Räkna anrop och nattliga uppvaknanden i ett kalkylblad och skriv ned de tre största repetitiva uppgifterna. Grundare som själva bär personsökaren är en affärsrisk, inte ett tecken på engagemang.

**Småföretag.** En eller två personer kan driva hela it. Mät det som inte kräver verktyg: samtal utanför kontorstid, uppgifter som upprepas och ledighet som inte kan tas. En leverantör av hanterade tjänster kan ta en del av schemat om avtalet anger svarstider och tider. Schemadjupet är ofta ett, vilket är den största risken.

**Storföretag.** Skala ger följ-solen-scheman, delade plattformar och flera leverantörer. Definiera måtten en gång, sätt lokala arbetsfönster per region och undvik att ta medelvärde över scheman med mycket olika tjänster. Anställningsregler i vissa länder begränsar jourtjänst och kräver vilotider, och dessa hör hemma i schemagränserna.

**Offentlig sektor.** Tjänster kan behöva dygnet runt-täckning enligt lag eller avtal, och bemanningen är bunden av upphandling och lönegrader. Schemagränser och vilaregler styrs ofta av anställningsavtal, så mät mot dem och redovisa när de överskrids. Offentlig ansvarsskyldighet gör uppriktig rapportering mer värdefull och svårare: bygg en säker kanal för belastningsdata och var uttrycklig med att den beskriver systemet och bemanningen, inte individer (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Motivet är att skydda tjänstens kvalitet och behålla kunniga människor. Trötta respondrar diagnostiserar långsammare, och när erfarna människor lämnar går kunskapen med dem. Att ersätta en person har verkliga kostnader i rekrytering, introduktion och minskad produktion under inlärningsperioden, och en organisation kan uppskatta de kostnaderna ur sina egna register. Rutinarbete tar också kapacitet från förbättring. Ett team som lägger större delen av sin tid på manuell drift kan inte minska incidenterna som orsakar den.

Kostnaden för måtten är måttlig. Anropsverktyget räknar redan anrop, och tidsstickprov kostar några minuter per person varannan vecka. Den större kostnaden är att agera på fynden: ingenjörstid för att ta bort rutinarbete, bemanning för ett hållbart schema och granskningstid. Räkna automatiseringens underhåll som en kostnad, eftersom ett oanvänt automatiserat steg blir morgondagens incident.

Avkastningen visar sig som färre anrop från kända orsaker, färre nattavbrott, timmar av rutinarbete som ges tillbaka till förbättringsarbete, lägre avhopp från schemat och snabbare diagnos. Ingen universell siffra gäller, så uppskatta din egen. För en källa till rutinarbete, multiplicera de månatliga timmarna med en belastad timkostnad överenskommen med ekonomi, jämför det med insatsen att ta bort den och granska efter två cykler. För schemats hållbarhet, registrera avgångar och långa frånvaroperioder från schemat och jämför dem med belastningsmått över tid, och behandla kopplingen som en hypotes att pröva, inte en bevisad orsak. Där en siffra behövs, ange den som en uppskattning och visa indata (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att rangordna människor efter anrop.** Det förvandlar ett systemmått till ett prestationsbetyg och lär respondrar att undvika pass och dölja avbrott. Redovisa per schema, passposition och tjänst.
- **Att skära ner anrop genom att tysta larm.** Antalet faller och upptäckten försvagas. Para volym med upptäckt och kundrapporterade incidenter och granska varje tröskeländring.
- **Att kalla allt rutinarbete.** En definition så bred att den inkluderar möten och svåra problem förstör signalen. Använd de sex kännetecknen och håll en lista med exempel.
- **Ett mål för rutinarbete utan befogenhet bakom.** Ett tak som inte kan utlösa ett beslut blir ett tal människor argumenterar om. Kom överens i förväg om vad som händer när det överskrids och vem som beslutar.
- **Att automatisera innan man förstår.** Automatisering kan baka in en dålig process och lägga till underhåll. Fråga först om behovet kan designas bort och mät det borttagna rutinarbetet efteråt.
- **Att ta medelvärde över olika tjänster.** Ett medelvärde över en stabil och en skör tjänst beskriver ingen av dem. Visa varje tjänst och schema separat.
- **Att mäta och inte agera.** Belastningstal utan svar lär människor att datan inte spelar roll. Bifoga ett beslut, en ägare och ett granskningsdatum till varje fynd.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Definitioner och data | Anrop och rutinarbete beskrivs på känn; ingen gemensam definition | Vissa scheman räknar anrop; rutinarbete diskuteras men mäts inte | En skriven definition av anrop, pass, utanför kontorstid och rutinarbete; anropsdata samlas in av verktyg | Fördelningar och tidpunkt följs över tid; rutinarbete stickprovas varje månad och revideras | Definitioner granskas över team och leverantörer; stickprovsinsatsen justeras efter värdet av svaren |
| Schemats hållbarhet | Informellt; samma få människor absorberar personsökaren | Bemanningslistor finns; gränser diskuteras men är inte skrivna | Skrivna gränser för frekvens och vila; schemadjupet känt | Gränser bevakas och överträdelser granskas med åtgärd | Scheman delas över team och leverantörer, och belastningen balanseras när tjänster förändras |
| Användning av talen | Används för att lägga skuld eller ignoreras | Visas för chefer | Visas för schemat först, med besluten de stöder | Paras med skyddsräcken och granskas på en rytm som leder till finansierad förändring | Delas med ledare och partner för att planera bemanning och tjänsteomfång |

## Checklista

- [ ] Anrop, pass, fönstret för utanför kontorstid och sammanslagningsfönstret är definierade skriftligt.
- [ ] Rutinarbete har en skriven definition med exempel och icke-exempel från vår egen tjänst.
- [ ] Anrop per pass redovisas som en median, en hög percentil och det livligaste passet.
- [ ] Andel anrop utanför kontorstid och andel nattavbrott redovisas bredvid volym.
- [ ] Belastning redovisas per schema, passposition och tjänst, aldrig per namngiven person.
- [ ] Andel rutinarbete av tiden stickprovas enligt schema, med metoden nedskriven.
- [ ] De fem främsta källorna till rutinarbete och de främsta återkommande orsakerna till anrop finns i förbättringsbacklogen.
- [ ] Schemagränser och vilaregler finns i ett teamavtal, och schemadjupet kontrolleras varje kvartal.
- [ ] Varje belastningsmått har ett skyddsräcke på samma sida, inklusive upptäckt och kundrapporterade incidenter.
- [ ] Varje granskning slutar med ett beslut, en ägare och ett datum.
- [ ] Tröskel- och larmändringar loggas med ett skäl och granskas efter en månad.

## AI-prompter

**Granska ett schemas belastning och leta efter mönster.**

```text
I help run the on-call rotation for [service or group of services]. The rotation
has [number] people and a shift length of [length]. Our working window is
[hours and time zone], and our protected sleep window is [hours]. Below is
anonymized paging data for [period], with columns [list columns]:

[paste data with names removed]

Describe the distribution of pages per shift, the share of pages out of hours,
and the share of shifts with a night interruption. Point out the busiest shifts,
repeating alert groups, and any pattern by day or shift position. Report at
rotation and service level only, never by person. Do not invent benchmark values
or targets. List your assumptions and what you could not determine from the data.
```

**Klassificera uppgifter som rutinarbete, utveckling eller omkostnad.**

```text
Our team runs [service]. We define toil as work that is manual, repetitive,
automatable, tactical, without enduring value, and growing with the service.
Here is a list of recent tasks with approximate hours: [paste list].

For each task, say whether it fits toil, engineering, or overhead, and name which
of the six characteristics it meets or misses. Flag tasks that are borderline and
say what extra information would settle them. Suggest how each toil source might
be removed by design, automated, or handed to an owning team, without inventing
savings. List your assumptions and questions for the team.
```

**Skriv utkast till manipuleringsvektorer och skyddsräcken för våra belastningsmått.**

```text
We report these on-call and toil metrics for [rotation name]: [list metrics with
definitions]. They are shown to [audience] to support [decision]. Our data comes
from [paging tool, work tracker, survey].

For each metric, list realistic ways it could improve without the rotation being
better off, and propose a guardrail metric or practice that would reveal each one.
Then say how the guardrail itself could be gamed. Do not invent benchmark values.
List your assumptions and any definitions I should tighten.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta de relaterade ämnena och skyddsräckena när du lägger till ett jour- eller rutinarbetsmått på en instrumentpanel.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ändringar i det här ämnet håller varje mätetal parat med en manipuleringsvektor och ett skyddsräcke.

## Viktigaste slutsatser

- Mät belastningen på schemat, per pass, tjänst och tid på dygnet, och rangordna aldrig människorna i det.
- Räkna när avbrotten sker såväl som hur många de är, eftersom nattliga anrop kostar mer än anrop på kontorstid.
- Definiera rutinarbete snävt med dess sex kännetecken, uppskatta dess andel av tiden med en enkel metod och bedöm trenden.
- Länka anrop och källor till rutinarbete till problemarbete och till automatiserings- eller designändringar och mät det rutinarbete som faktiskt tagits bort.
- Para varje belastningsmått med ett skyddsräcke såsom upptäckt och kundrapporterade incidenter, så att lägre tal inte kan köpas genom att titta bort.
- Behandla en tung belastning som en begäran om investering, med ett beslut, en ägare och ett granskningsdatum.

## Referenser och vidare läsning

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Eliminating Toil", https://sre.google/sre-book/eliminating-toil/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Being On-Call", https://sre.google/sre-book/being-on-call/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018. Chapter "Eliminating Toil", https://sre.google/workbook/eliminating-toil/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
7. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
8. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
9. Wikipedia, [Sleep deprivation](https://en.wikipedia.org/wiki/Sleep_deprivation).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
12. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
