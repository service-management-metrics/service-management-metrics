# Varför mäta tjänstehantering

**Team som bygger och driftar tjänster behöver en liten uppsättning ärliga siffror för att se om arbetet hjälper användarna och blir bättre, och agilitet och ITIL bidrar med var sin halva av den bilden.**

## Översikt och motiv

Varje team som bygger och driftar en tjänst fattar beslut hela dagen: vad som ska göras härnäst, om en release är säker, om servicedesken behöver ytterligare en person, om ett avbrott var en engångshändelse eller ett mönster. Utan mätning vilar de besluten på minne, anekdoter och den som talade sist. Med fel mätning kan de bli sämre än så, eftersom en siffra har en auktoritet som en åsikt saknar. Det här ämnet förklarar varför det är värt mödan att mäta, vad varje tradition bidrar med och vad det kostar att göra fel.

Två traditioner möts i den här boken. [Agil programvaruutveckling](https://en.wikipedia.org/wiki/Agile_software_development) är en uppsättning värderingar och arbetssätt, uttryckta i det agila manifestet från 2001, som favoriserar fungerande programvara, nära samarbete med kunder och förmågan att svara på förändring. Dess mätvanor är empiriska och lokala: ett team granskar sitt eget flöde, tittar på vad det levererade och anpassar sig. [ITIL](https://en.wikipedia.org/wiki/ITIL), ursprungligen Information Technology Infrastructure Library, är en samling vägledning för [it-tjänstehantering](https://en.wikipedia.org/wiki/Information_technology_service_management) (ITSM), arbetet med att utforma, leverera och förbättra it-tjänster. Dess mätvanor är tjänsteorienterade och gemensamma: överenskomna servicenivåer, en tjänstekatalog (ITIL:s egen stavning är "service catalogue") och en disciplin för ständig förbättring. I ITIL 4, ramverkets utgåva från 2019, är mätning och rapportering en av de allmänna ledningspraktikerna, och ständig förbättring är både en praktik och en vägledande princip. Kontrollera ramverksägarens aktuella publikationer innan du förlitar dig på versionsdetaljer, eftersom ramverket fortsätter att utvecklas.

De två synsätten skiljer sig åt på användbara sätt. Agilitet frågar: "bygger vi rätt sak, och hur smidigt flödar arbetet?" ITIL frågar: "uppfyller tjänsten behoven hos dem som använder den, och är den tillförlitlig, supportbar och prisvärd?" Ett team som bara mäter flöde kan leverera snabbt in i en tjänst som användarna tycker är opålitlig. Ett team som bara mäter servicenivåer kan nå varje mål samtidigt som det levererar förändring så långsamt att tjänsten slutar vara relevant. Rörelsen [DevOps](https://en.wikipedia.org/wiki/DevOps) växte fram ur observationen att att bygga och att driva är ett enda system, och att siffrorna som beskriver det därför bör läsas tillsammans. [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), disciplinen som Google beskrev i sina publicerade böcker, lägger till en uttrycklig koppling mellan tillförlitlighetsmål och förändringstakt.

Tre termer återkommer genom hela boken. Ett **mått** beskriver något om arbetet eller tjänsten. Ett **mätetal** är ett mått med en definierad formel, enhet och datakälla, så att två personer som beräknar det får samma svar. Ett **skyddsräcke** är ett andra mått eller en praxis, vald i förväg, som rör sig om det första manipuleras. Varningen bakom skyddsräckena är [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law): när ett mått blir ett mål börjar människor styra siffran i stället för arbetet (se ämne 1.2, Goodharts lag och mätetalens psykologi).

### Vad mätning är till för

Mätning förtjänar sin plats när den gör ett av fyra jobb.

- **Se.** Göra osynligt arbete synligt: kön som ingen tittar på, incidentmönstret över tre team, ändringen som väntar nio dagar på en tid.
- **Besluta.** Ge underlag för ett val mellan två alternativ, till exempel om en typ av förfrågan ska automatiseras eller om felet som orsakar den ska åtgärdas.
- **Lära.** Pröva en övertygelse. Om teamet tror att en ny granskningspraxis minskar omarbete kan en siffra säga om den gjorde det.
- **Redovisa.** Ge användare, kunder och ledare en ärlig redogörelse för vad tjänsten levererar, så att förtroendet vilar på belägg.

En siffra som inte gör något av dessa fyra jobb är en belastning. Senare ämnen upprepar det här provet för varje mätetalsfamilj.

### Kostnaden för att inte mäta något

Ett team som inte mäter något är inte fritt från siffror. Det styrs av underförstådda: det högljuddaste klagomålet, det senaste avbrottet, chefens känsla för hur upptagna människor ser ut. Två kostnader följer.

- **Långsam återkoppling.** Problem som en trend hade visat tidigt kommer som överraskningar. En smygande ökning av återkommande kontakter ser ut som otur tills den är en kris.
- **Ingen grund för förbättring.** Ett team kan inte avgöra om en ändring hjälpte, och kan därför inte lära sig vilka ändringar som ska upprepas.

### Kostnaden för att mäta fel saker

Att mäta fel saker är ofta värre än att inte mäta något, eftersom det styr arbetsinsatsen med falsk säkerhet. Antal stängda ärenden, kodrader, slutförda berättelsepoäng och loggade timmar är lätta att samla in och lätta att visa i diagram, och vart och ett är ett mått på aktivitet, inte på värde för en användare. Forskningen bakom ramverket SPACE (Forsgren med kollegor, 2021) hävdar att produktivitet inte kan fångas i en enda dimension, och att aktivitetsmått som används ensamma vilseleder.

## Nyckelprinciper

- **Mät för ett beslut.** Varje mätetal besvarar en skriven fråga och ger underlag för ett namngivet val. Om ingen kan säga vilket, avveckla det.
- **Förena de två synsätten.** Läs leveransflöde och tjänstehälsa på samma sida, så att hastighet aldrig köps på bekostnad av stabilitet eller tvärtom.
- **Mät resultat först, aktivitet sedan.** Provet är att användarna får det bättre. Aktivitetsmått stöder berättelsen men berättar den inte (se ämne 1.3, Resultat före leverans: att välja vad som ska mätas).
- **Beskriv team och tjänster, aldrig individer.** Rangordning av individer förvränger data och skadar samarbetet.
- **Börja smått och växa.** En handfull betrodda mätetal slår en vägg av svagt styrda.
- **Visa teamet först.** De som utför arbetet är den första publiken och den bästa kontrollen av om data är korrekta.
- **Räkna med förändring.** Definitioner, mätetal och mål revideras när de slutar ge underlag för beslut.

## Mätetalsdefinitioner

Mätetalen nedan beskriver hälsan hos själva mätpraktiken, vilket är där "varför mäta" blir prövbart. Ett team som kan visa dem mäter av skäl. Varje tids- eller antalsbaserad formel anger sina gränser.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Andel beslutskopplade mätetal | Andel rapporterade mätetal som har en skriven fråga och ett namngivet beslut som de ger underlag för | mätetal med en registrerad fråga och ett registrerat beslut / mätetal som rapporteras på instrumentpanelen vid kvartalets slut | procent | Mätetalsregister (se ämne 1.4, Styrning och ägarskap av mätetal) | Mätning och rapportering; ständig förbättring | Åtgärder från retrospektiv; arbetsöverenskommelser | Kvartalsvis |
| Baslinjetäckning | Andel tjänster och team inom omfattningen som har ett registrerat startvärde för vart och ett av de överenskomna kärnmåtten | par av tjänst och mått med en baslinje registrerad de senaste 12 månaderna / alla par av tjänst och mått inom omfattningen; tjänster utanför katalogen är undantagna | procent | Tjänstekatalog och mätetalsregister | Hantering av servicenivåer; mätning och rapportering | Intressentgranskning; teamens instrumentpaneler | Kvartalsvis |
| Mätinsats | Personaltid som läggs på att manuellt samla in, rensa och rapportera mätetal | timmar loggade på manuell insamling och rapportering under månaden, utan tid som läggs på att agera på iakttagelser | timmar per team och månad | Tidsanteckningar eller en kort teamenkät | Mätning och rapportering | Tidsbudget för retrospektiv | Kvartalsvis |
| Dataålder vid granskning | Hur gammal den senaste datapunkten är när gruppen möts för att diskutera den | tidsstämpel för granskningsmötet minus tidsstämpel för den senaste datapunkten på instrumentpanelen; beräknas per mätetal, redovisas som median och 85:e percentilen | dagar | Uppdateringslogg för instrumentpanelen | Mätning och rapportering | Intressentgranskning | Per granskning |
| Genomförande av förbättringar | Andel förbättringsåtgärder från mätetalsgranskningar som slutförs eller medvetet stängs inom det överenskomna tidsfönstret | åtgärder som slutförts eller stängts med motivering inom 90 dagar efter att de väckts / åtgärder som väckts under perioden, räknat från datumet i förbättringsregistret | procent | Register eller backlog för ständig förbättring | Ständig förbättring | Åtgärdspunkter från retrospektiv | Kvartalsvis |

Mätinsatsen räknar medvetet bara manuellt arbete. Tid som läggs på att läsa data och besluta vad som ska göras är själva poängen med övningen och är undantagen, så att automatiserad insamling syns som framsteg.

## Rekommendationer

### Börja med syftet

**1. Skriv skälet före mätetalet.** Skriv en mening för varje föreslaget mått: "Vi mäter X för att besluta Y." Om meningen inte går att skriva är måttet inte redo. Den här enda vanan tar bort de flesta fåfängemätetal innan de når en instrumentpanel.

**2. Namnge publiken och beslutet.** Samma siffra betyder olika saker för ett team, en tjänsteägare och en chef. Skriv ned vem som ska läsa den och vilket val den stöder. En arbetsvy för teamet kan ha tjugo mått. Det som går till ledningen bör vara en liten, stabil uppsättning (se ämne 11.1, Att utforma en instrumentpanel för tjänstemätetal).

### Använd båda traditionerna

**3. Para ett flödesmått med ett tjänstemått.** Välj minst ett mått på hur arbete rör sig, till exempel ledtid eller ålder på arbetsobjekt (se ämne 2.2, Ledtid, cykeltid och flödeseffektivitet), och minst ett mått på hur tjänsten beter sig, till exempel återkommande incidenter eller en servicenivåindikator (se ämne 5.2, SLI:er, SLO:er och felbudgetar). Att visa dem tillsammans förhindrar det vanliga misslyckandet där hastighet och stabilitet hanteras av olika grupper som tittar på olika diagram.

**4. Behandla leverans och drift som ett system.** Forskning som sammanfattas i *Accelerate* (Forsgren, Humble och Kim, 2018) redovisar att programvaruleveransens prestation kan beskrivas med fyra mått som balanserar genomflöde och stabilitet. Vilken uppsättning ett team än antar bör ändringsrelaterade och incidentrelaterade siffror hållas så nära varandra att en ökning i den ena föranleder en titt på den andra (se ämne 2.8, DORA-mätetal).

### Mät ärligt

**5. Föredra några få mått som drar åt olika håll.** Ett enda tal inbjuder till överoptimering, så välj par som hastighet med kvalitet, volym med resultat och kostnad med upplevelse. Paret behöver inte vara en formel. Det behöver synas på samma sida.

**6. Registrera en baslinje innan du ändrar något.** Utan ett startvärde är ett förbättringspåstående en berättelse. Samla in data under några veckor först, med spridningen av värden och inte bara medelvärdet (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal). Baslinjer skyddar också team: de visar att ett dåligt kvartal följde på en ändring i hur arbetet räknades snarare än på sämre prestation.

### Bygg vanan

**7. Granska i en rytm som passar beslutet.** Flödesmått passar ett veckosamtal, eller ett som hålls vid varje steg i kontinuerlig programvaruleverans. Mått på servicenivå och kostnad passar ett månatligt eller kvartalsvis. Ett mätetal som granskas i fel rytm skapar antingen brus eller missar stunden då handling hade hjälpt.

**8. Slut loopen med förbättringsarbete.** En granskning som slutar med "intressant" har slösat bort sina data. Avsluta varje granskning med en eller två namngivna åtgärder, en ägare och ett datum, och följ upp att de slutförs. ITIL:s praktik för ständig förbättring och den agila retrospektiven är två namn på samma disciplin (se ämne 9.5, Mätetal för ständig förbättring).

**9. Säg vad du inte kommer att använda siffrorna till.** Ange tydligt att teammätetal inte kommer att användas för att rangordna eller belöna individer, och att definitioner kommer att ändras öppet. Människor samarbetar med mätning när de litar på hur den kommer att användas (se ämne 11.3, Att införa mätetal utan att skapa rädsla).

## Manipuleringsvektorer och skyddsräcken

Även mätetal om mätning kan manipuleras. Varje rad nedan parar mätetalet med det vanliga sättet att böja det och den kontroll som skulle avslöja det.

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Andel beslutskopplade mätetal | Att i efterhand skriva en rimlig fråga och ett beslut för varje mätetal för att höja procenttalet | Stickprova beslutsloggen: fråga vad som ändrades på grund av mätetalet, och kontrollera datumet då posten skrevs mot datumet då mätetalet först dök upp |
| Baslinjetäckning | Att registrera en baslinje en gång och aldrig uppdatera den, eller välja en bekväm lugn period | Kräv ett angivet datumintervall och en urvalsstorlek för varje baslinje; granska baslinjer efter större förändringar av tjänsten |
| Mätinsats | Att flytta insamlingsarbete utanför böckerna genom att göra det ologgat, eller flytta det till en leverantör | Jämför med en kort enkät om hur lång tid människor säger att rapporteringen tar; ta med leverantörens insats i granskningen |
| Dataålder vid granskning | Att uppdatera instrumentpanelen strax före mötet medan de underliggande posterna fortfarande är inaktuella | Redovisa åldern på den senaste posten i källsystemet såväl som uppdateringstidpunkten |
| Genomförande av förbättringar | Att stänga åtgärder med motiveringen "inte längre relevant" för att nå procenttalet, eller dela upp åtgärder i triviala bitar | Granska motiveringarna för stängda åtgärder varje kvartal, och följ om måttet som åtgärden riktade sig mot rörde sig |

En sund avläsning är en praxis som synbart lever. Mätetal kommer in i och lämnar registret av skrivna skäl, baslinjerna är färska, åtgärder från granskningar slutförs eller överges ärligt, och teamet lägger mer tid på att agera på data än på att samla in dem. Full pott på varje rad är en uppmaning att stickprova de underliggande posterna, inget skäl att fira.

## Avvägningar: för- och nackdelar

| Val | Styrka | Svaghet |
| --- | --- | --- |
| Mät lite | Låg kostnad; låg risk för manipulation; högt förtroende | Blinda fläckar; beslut vilar på anekdoter |
| Mät mycket | Bred täckning; tidig varning på många fronter | Uppmärksamheten späds ut; styrningen blir tunn; insamlingskostnaden växer |
| Förenad vy | Balanserar hastighet och stabilitet; stöder delat ägarskap | Kräver överenskomna definitioner mellan team och en gemensam plats att titta på |
| Mål på mätetal | Ger riktning och brådska | Inbjuder till manipulation; behöver ett parat skyddsräcke |
| Mätetal utan mål | Uppmuntrar ärlig diskussion | Kan driva mot rapporter som ingen agerar på |

Det praktiska svaret är en liten förenad uppsättning, med mål som används sparsamt för förhållanden som är väl förstådda och som användarna har bett om, till exempel ett servicenivåmål. Allt annat är en fråga att diskutera. Syftet är inte att ta bort omdömet ur besluten utan att ge det bättre underlag.

## Frågor att diskutera med teamet

**1. Vilket beslut fattade vi förra kvartalet som en siffra faktiskt ändrade?**
Be gruppen minnas konkreta beslut och reda ut vilka, om några, som berodde på data. Om listan är kort är det användbar information: det betyder att mycket av dagens rapportering inte förtjänar sin plats. Facilitatorn bör anteckna de mätetal som ändrade beslut, eftersom de är kandidater för skydd. Fråga sedan vilka beslut som fattades på instinkt och om en siffra hade kunnat hjälpa.

**2. Vilka av våra nuvarande siffror beskriver aktivitet, och vilka beskriver värde för användarna?**
Visa den nuvarande instrumentpanelen på en skärm och markera varje mätetal som aktivitet (stängda ärenden, körda byggen, slutförda poäng) eller resultat (användare som kan arbeta, problem som inte återkommer). Diskutera inte gränsfall länge. Poängen är att se balansen. Där det bara finns aktivitet, fråga vilket resultat aktiviteten ska ge och hur teamet skulle veta det.

**3. Var finns leverans- och driftsiffrorna i dag, och tittar samma personer på båda?**
Följ var varje mätetalsfamilj lagras och vem som granskar den. Team blir ofta förvånade över att ändringsdata granskas av en grupp och incidentdata av en annan, utan något gemensamt möte. Fråga vilket mönster som kan missas när de två aldrig ses tillsammans. Enas om en plats eller ett möte där de möts.

**4. Vad mäter vi inte som vi skulle ångra att vi inte visste?**
Bjud in oro snarare än mätetal: "Jag är rädd att vi inte skulle märka om ..." Arbeta från svaren till kandidatmått, och sedan till de billigaste data som skulle visa dem. Håll listan kort.

**5. Vad skulle vi behöva tro om våra siffror innan vi visar dem för ledningen?**
Diskutera vad som gör data trovärdiga: stabila definitioner, stickprovskontroller av riktighet och enighet om undantag. Lista teamets tvivel, även små, till exempel en status som används inkonsekvent. Besluta vilka tvivel som måste åtgärdas före bredare delning och vilka som kan redovisas tillsammans med siffran.

**6. Om vi bara kunde behålla tre mätetal nästa kvartal, vilka skulle det vara och varför?**
Begränsningen tvingar fram prioriteringar. Be varje person skriva tre och jämför sedan. Leta efter enighet om resultat och oenighet om aktivitetsmått. Fråga vilket skyddsräcke vart och ett av de tre behöver.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam har mest nytta av snabb, lokal återkoppling: hur länge arbete väntar, var det köar, hur ofta ändringar orsakar problem. De bör behålla en rik arbetsvy för sig själva och publicera en liten uppsättning utåt. Team bör motstå frestelsen att mäta leveransvolym som ersättning för värde, och bör para hastighetsmått med kvalitetsmått från början (se ämne 2.1, Flödesmått).

### Service- och driftteam

Driftteam lever redan med siffror: volymer, svars- och lösningstider, tillgänglighet. Möjligheten är att gå från att rapportera vad som hände till att förklara varför, genom återkommande fel, grundorsaker och andelen arbete som är oplanerat (se ämne 2.9, Driftarbete och oplanerat arbete). De bör också ta med sina data i planeringssamtal med leveransteamen, så att tillförlitlighetsarbete motiveras med belägg snarare än med klagomål.

### Ledning och styrning

Ledare sätter incitamenten, ofta av misstag, genom de frågor de ställer. En ledare som frågar "varför är det här rött?" lär team att dölja rött. En ledare som frågar "vad lärde ni er, och vad behöver ni?" lär team att rapportera ärligt. Styrande organ bör be om registret, skyddsräckena och förbättringsåtgärderna vid sidan av siffrorna, och bör finansiera det arbete som en dålig siffra avslöjar (se ämne 1.4, Styrning och ägarskap av mätetal).

### Kunder och användare

Användare bedömer tjänsten efter om den fungerar och om problem rättas till, inte efter interna mått. Deras egna ord, i enkäter, klagomål och kommentarer, hör hemma bredvid driftsiffrorna som en kontroll av om teamet mäter det som spelar roll (se ämne 6.1, Mätetal för kundnöjdhet).

## I praktiken: ett exempel från tjänstehantering

En medelstor nätbutik driver en servicedesk, ett driftteam och tre produktteam som bygger skyltfönstret samt betalnings- och orderuppfyllelsetjänsterna. Siffrorna nedan är illustrativa.

Ledningen frågar varför kunder klagar på långsam utcheckning när leveransteamen rapporterar att de levererar varje dag och driftteamet rapporterar att tillgängligheten är 99,9 procent. Varje grupp har rätt enligt sina egna mått, och ingen har tittat på dem tillsammans. Chefen för tjänstehantering föreslår en förenad enkelsidig vy för utcheckningstjänsten, byggd på data som teamen redan samlar in.

Vyn visar fyra saker för de senaste tolv veckorna. Ledtiden för ändring har en median på 2 dagar och en 85:e percentil på 9 dagar. Andelen misslyckade ändringar är 8 procent. Incidenterna på utcheckningen är 14, varav 6 delar en orsak, en långsam databasfråga som infördes av en nyligen genomförd release. Mediantiden för återställning är 40 minuter, men sidladdningstiden vid 95:e percentilen har smugit uppåt under sex veckor, ett mönster som tillgänglighetssiffran inte visar eftersom tjänsten tekniskt sett förblev uppe.

Gruppen ser det som var dolt. Tillgänglighet mättes som "utcheckningen svarar", medan användarna upplever "utcheckningen svarar tillräckligt snabbt". Produktteamet och driftteamet enas om att lägga till en latensindikator för utcheckningen med ett mål som produktägaren sätter efter att ha läst kundkommentarer, att behandla den upprepade incidentorsaken som en problempost med en ägare, och att granska den förenade vyn varannan vecka. De registrerar ett beslut: pausa nya utcheckningsfunktioner under en period av kontinuerlig programvaruleverans för att åtgärda frågan och lägga till en prestandakontroll i releasepipelinen.

En manipulationsrisk dyker upp inom en månad. Driftteamet märker att två av de 14 incidenterna hade öppnats som "serviceförfrågningar" eftersom förfrågningskategorin saknar lösningsmål. Teamet inser att ett mål på incidenter hade fått människor att kategorisera gränsfall som förfrågningar. De lägger till andelen omkategoriserade i vyn och stickprovskontrollerar tio ärenden varje månad. Efter ändringen sjunker sidladdningstiden vid 95:e percentilen, upprepade incidenter minskar, och teamet behåller vyn eftersom den har ändrat ett beslut.

## Agilitet, AI, automatisering och analys

### Agilitet

Kontinuerlig leverans och kontinuerlig intressentmedverkan ger en jämn tillförsel av små ändringar och regelbunden återkoppling, vilket är precis vad en handfull ärliga siffror behöver. En användbar praxis är att granska samma lilla uppsättning mått vid varje regelbundet förbättringssamtal och fråga vad teamet ska ändra härnäst. Varningen är att undvika att behandla granskningen som en lägesrapport: en siffra som visas utan ett beslut kopplat till sig är en belastning.

### AI

AI-stött arbete kan höja leveransantal som utkastade ärenden, föreslagna ändringar eller skrivna artiklar, utan att höja det värde en användare får. Para varje volymmått för AI-stött arbete med ett kvalitetsmått, till exempel andelen utkast som en person var tvungen att rätta eller andelen återkommande kontakter för AI-besvarade förfrågningar. Varningen är att en siffra om AI-användning visar införande, inte nytta, så säg vad den inte kan visa.

### Automatisering

Samla in tidsstämplar och statusar automatiskt från systemet som är sanningskälla, så att ingen skriver in siffror i en rapport. En praxis som är värd att införa tidigt är en liten automatiserad kontroll som flaggar saknade tidsstämplar och omöjliga sekvenser. Varningen är att även automatisering behöver mätas: en pipeline eller bot som misslyckas tyst får varje siffra längre fram att se frisk ut.

### Analys

Bestäm frågan och beslutet innan du bygger diagrammet, och visa hur många objekt som ligger bakom varje andel. Använd percentiler och trender i stället för enstaka medelvärden, och markera varje ändring av definition i diagrammet. Varningen är osäkerhet: ett litet antal objekt kan flytta en procentsats långt, så undvik att agera på en månads data. För ITIL 5 specifikt, se ämne 1.8, Mätning av ITIL 5 och värdeutfall.

## Branschperspektiv

**Startup.** Små team har lite process och starkt förtroende, vilket hjälper. Risken är att importera en stor företagsinstrumentpanel innan behovet finns. Börja med två eller tre mått som grundarna läser varje vecka, till exempel ledtid för ändring, en enkel tillförlitlighetsindikator och direkt användarfeedback, och skriv ned deras definitioner.

**Småföretag.** Den som sköter it rapporterar ofta till ägaren, och ett enda kundklagomål kan väga tyngre än vilket diagram som helst. Håll uppsättningen liten, använd de data dina verktyg redan producerar och favorisera samtal med användare. Behandla leverantörsframtagna rapporter med viss försiktighet, eftersom leverantörer har sina egna incitament.

**Storföretag.** Skala mångdubblar efterfrågan på jämförbara siffror och trycket att manipulera dem. Använd en liten standarduppsättning med skrivna definitioner, håll teamens arbetsvyer åtskilda från sammanställningar och undvik att jämföra team som driver mycket olika slags tjänster. Ett mätetalsregister, gemensamma definitioner och en granskningsrytm blir nödvändiga.

**Offentlig sektor.** Avtalade servicenivåer, revisionskrav och skyldigheter till offentlig rapportering kan göra vissa mått icke förhandlingsbara. Behandla dem som designunderlag: uppfyll dem, visa ett skyddsräcke bredvid dem och ange de definitioner som används. Offentlig ansvarsskyldighet höjer kostnaden för att dölja dåliga nyheter, så bygg trygga interna kanaler för uppriktig rapportering (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Motivet för att mäta är bättre beslut till lägre kostnad. Mätning stöder prioritering, visar var slöseriet finns, ger tidig varning om att en tjänst försämras och ger belägg för investeringsansökningar.

Kostnaden har flera delar. Det finns verktyg, som ofta redan finns: ärendesystemet, ärendehanteringssystemet, versionshanteringen och övervakningen. Det finns personaltid för att definiera mätetal, bygga vyer och underhålla ett register. Det finns den återkommande kostnaden för granskningsmöten, som är den största och den mest värdefulla. Den totala ägandekostnaden (TCO) för en mätpraktik omfattar också kostnaden för att agera på iakttagelser, eftersom en insikt utan budget för åtgärden ger liten avkastning.

Avkastningen är svår att ange med en universell siffra, och den här boken uppfinner ingen. Ett användbart sätt att bygga case är att mäta dina egna baslinjer före och efter en ändring: tid som läggs på manuell rapportering, återkommande kontakter, beslut som ändrades för att data var fel och överraskningar som upptäcktes sent. Mönstret att vänta sig är färre överraskningar, kortare diskussioner och bättre överensstämmelse mellan driftsiffror och användarupplevelse. En enkel jämförelse av [avkastning på investering](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) mellan nedlagd insats och sparad insats är en rimlig utgångspunkt, och ämne 7.7, Avkastning på investering och affärscase, behandlar metoden.

## Antimönster och fallgropar

- **Instrumentpanelen med allt.** Dussintals diagram, inga ägare, inga beslut. Välj några få, namnge beslutet var och en ger underlag för och avveckla resten.
- **Ensidig mätning.** Hastighet utan stabilitet, eller stabilitet utan relevans. Para ett flödesmått med ett tjänstemått.
- **Att mäta människor.** Rangordning av individer förvränger data och avskräcker från att hjälpa varandra. Rapportera på nivån team och tjänster.
- **Mål före baslinjer.** Ett mål utan startvärde är en gissning. Registrera en baslinje först och sätt mål efter minst en granskningscykel.
- **Rapporter utan åtgärder.** En granskning som inte ger några ändringar lär människor att ignorera den. Avsluta varje granskning med en namngiven åtgärd, ägare och datum.
- **Tysta definitionsändringar.** Trendlinjer blir meningslösa. Logga varje ändring med skälet och markera den i diagrammet.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Syfte och urval | Mätetal väljs för att verktyget erbjuder dem | Vissa mätetal har ett angivet syfte | Varje rapporterat mätetal har en skriven fråga och ett beslut | Mätetalsuppsättningen granskas mot beslut och avvecklas när den inte används | Mätetal utformas tillsammans med användare och leverantörer kring gemensamma resultat |
| Förenad vy av agilitet och ITIL | Leverans- och tjänstedata hålls isär | Några team ser båda tillsammans | En gemensam vy av flöde och tjänstehälsa per tjänst | Den förenade vyn följs över tid och kopplas till förbättringsarbete | Vyer över team och leverantörer är knutna till användarresultat |
| Baslinjer och insats | Inga baslinjer; manuell insamling | Baslinjer för vissa tjänster; blandad insamling | Baslinjer registrerade för kärnmåtten; insamlingen mestadels automatisk | Baslinjer uppdateras efter ändringar; insatsen följs och minskas | Baslinjer och definitioner justeras fortlöpande när tjänster förändras |
| Användning i förbättring | Siffror noteras och glöms | Enstaka åtgärder efter dåliga veckor | Varje granskning slutar med namngivna åtgärder | Genomförandet av åtgärder mäts och finansieras | Förbättring kommer från alla och är synlig över team |

## Checklista

- [ ] Varje rapporterat mätetal har en skriven fråga och ett namngivet beslut som det ger underlag för.
- [ ] Publiken för varje vy är namngiven, och teamvyer är åtskilda från ledningsvyer.
- [ ] Minst ett flödesmått och ett tjänstemått visas på samma sida.
- [ ] En baslinje med datumintervall och urvalsstorlek finns för varje kärnmått.
- [ ] Varje tidsmått anger var klockan startar och stoppar.
- [ ] Varje mätetal har ett skyddsräcke som visas bredvid.
- [ ] Den manuella insamlingsinsatsen är känd, och den största manuella uppgiften har setts över för automatisering.
- [ ] Team ser sina egna data före ledningen.
- [ ] Ingen individuell rangordning, lön eller disciplinering är kopplad till ett mätetal.
- [ ] Varje granskning slutar med minst en namngiven förbättringsåtgärd, ägare och datum.
- [ ] Minst ett mätetal har avvecklats eller omdefinierats under det senaste året.

## AI-prompter

**Utkast till syftesformulering för varje mätetal.**

```text
We are [team name], responsible for [service or product]. Our current dashboard
shows these metrics: [list of metrics with their definitions]. For each one,
draft a one-sentence statement in the form "We measure X to decide Y", and mark
any metric where you cannot infer a decision from what I have given you. Suggest
questions I should answer to complete each statement. Do not invent benchmark
values or targets. List your assumptions.
```

**Förena leverans- och tjänstevyer.**

```text
Our delivery measures are [list, with definitions and data sources] and our
service measures are [list, with definitions and data sources] for [service
name]. Propose a one-page layout that shows both together, pairs each speed
measure with a stability or quality measure, and notes the data each needs.
Identify any definitions that conflict between the two sets. Do not invent
values or thresholds. List your assumptions and anything you could not
determine.
```

**Planera en baslinje.**

```text
We want to record a baseline for [metric name] for [service or team] before
changing [practice or tool]. The data comes from [source]. Propose how long to
collect data, what summary statistics to record (including percentiles), what
to exclude and why, and how to note any changes in how work was counted during
the period. Do not assume values. List your assumptions and the data quality
risks you see.
```

**Förbered en granskning som leder till handling.**

```text
We hold a [weekly, monthly, or quarterly] review of [metric set] with
[audience]. Draft an agenda and a short set of facilitation questions that
move from reading the numbers to choosing one or two improvement actions, each
with an owner and a date. Include a prompt to check for gaming against each
metric's guardrail. Do not invent data. List your assumptions about the group
and its culture.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta ämnet som behandlar ett mätetal du överväger och dess parade skyddsräcke.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett nytt eller reviderat mätetalsämne behåller syftesformuleringen, manipuleringsvektorn och skyddsräcket.

## Viktigaste slutsatser

- Mät för att se, besluta, lära och redovisa; en siffra som inte gör något av detta är en belastning.
- Agilitet ger snabb, lokal återkoppling på flöde; ITIL ger gemensamma vyer av tillförlitlighet och värde på tjänstenivå. Läs dem tillsammans.
- Att inte mäta något överlåter beslut åt anekdoter, och att mäta fel saker styr arbetsinsatsen med falsk säkerhet.
- Börja med några få mätetal, vart och ett med ett skrivet syfte, en baslinje och ett skyddsräcke.
- Beskriv team och tjänster, aldrig individer, och låt teamet se sina data först.
- Slut loopen: en granskning som inte ger någon åtgärd slösar bort data.

## Referenser och vidare läsning

1. Beck, K., et al., *Manifesto for Agile Software Development*, 2001, https://agilemanifesto.org/.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
5. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
11. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
12. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
13. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
14. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
