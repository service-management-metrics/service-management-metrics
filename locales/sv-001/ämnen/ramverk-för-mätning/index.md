# Ramverk för mätning

**Ett mätramverk är ett sätt att avgöra vilka siffror som förtjänar en plats på sidan, och de bästa börjar alla med ett mål och en fråga, så välj det lättaste ramverk som håller varje mätetal knutet till ett beslut.**

## Översikt och motiv

Ett team som vill mäta sitt arbete möter ett tidigt problem: det finns tusentals möjliga siffror och ingen regel för att välja bland dem. Ett mätramverk tillhandahåller regeln. Det namnger en utgångspunkt (ett mål, en strategi, en handfull kritiska villkor) och beskriver hur man tar sig från den utgångspunkten till en liten uppsättning mått som människor kommer att läsa och agera på. Ramverk skiljer sig i vokabulär, men de delar ett syfte: att hålla varje siffra kopplad till ett skäl att ha den.

Det här ämnet behandlar fem idéer som förekommer i nästan varje organisation som driver tjänster. Den första är Goal-Question-Metric (GQM), utvecklad av programvaruutvecklingsforskaren [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili) och kollegor. Den utgår från ett mål, ställer de frågor som skulle visa om målet nås och väljer först därefter mätetal. Den andra är [mål och nyckelresultat](https://en.wikipedia.org/wiki/OKR) (OKR:er), en målsättningsmetod som populariserades på Intel av Andrew Grove och senare på Google genom John Doerr. Ett mål säger vart ett team vill komma, och en handfull nyckelresultat säger hur det ska veta att det har kommit fram. Den tredje är [balanserat styrkort](https://en.wikipedia.org/wiki/Balanced_scorecard), som introducerades av Robert Kaplan och David Norton 1992 och som ber organisationer att se på finansiella resultat, kunder, interna processer samt lärande och tillväxt tillsammans, så att ingen enskild vy dominerar.

Den fjärde och femte idén är äldre och enklare. En [kritisk framgångsfaktor](https://en.wikipedia.org/wiki/Critical_success_factor) (CSF) är ett villkor som måste vara sant för att ett mål ska nås, och ett [nyckeltal](https://en.wikipedia.org/wiki/Key_performance_indicator) (KPI) är ett mått på hur väl det villkoret håller. ITIL, ramverket för it-tjänstehantering (ITSM) som publiceras av Axelos och senare PeopleCert, använder just denna parning. I ITIL 4 (versionen i utbredd användning i oktober 2026) säger vägledningen om mätning och rapportering och om ständig förbättring åt utövare att definiera CSF:er för en tjänst eller praktik och sedan välja KPI:er som visar framsteg mot dem. Det bredare [ITIL](https://en.wikipedia.org/wiki/ITIL)-tillvägagångssättet sammanfattas här, det återges inte.

Agila och ITIL-baserade synsätt möts användbart på det här området. Agil praxis favoriserar korta lärandecykler: ett team ställer en hypotes, prövar något, granskar resultatet och justerar. ITIL-praxis favoriserar definierade tjänster, överenskomna servicenivåer och en styrd process för förbättring. Ett ramverk som GQM passar den agila vanan att fråga vad teamet vill lära sig. Ett balanserat styrkort passar ITIL:s behov av att visa ledare en avrundad bild av tjänstens hälsa. OKR:er ligger mellan de två, eftersom de granskas i korta cykler men skrivs på det resultatspråk som styrande organ förstår.

Tre termer återkommer i det här ämnet. Ett **mål** är ett uttalande om ett avsett resultat för en namngiven publik. En **fråga** är något du skulle behöva veta för att kunna säga om målet nås. Ett **mätetal** är ett definierat sätt att räkna eller tidsätta något som hjälper till att besvara en fråga. Ramverken skiljer sig i hur de behandlar den tredje termen, men alla insisterar på att den kommer sist, efter målet och frågan. Den ordningen är det starkaste skyddet mot det misslyckande som Goodharts lag beskriver (se ämne 1.2, Goodharts lag och mätetalens psykologi), där en siffra ersätter det syfte den valdes för att tjäna.

Inget ramverk rättar till ett dåligt val av mål, och inget tar bort behovet av skyddsräcken. Behandla ett ramverk som byggnadsställning för ett samtal och räkna med att ändra det när arbetet förändras. KPI:er i synnerhet kan bli [fåfängemätetal](https://en.wikipedia.org/wiki/Vanity_metric), antal som bara stiger och aldrig ger underlag för ett beslut, till exempel totalt antal hanterade ärenden. De bredare skälen att mäta överhuvudtaget redovisas på annat håll (se ämne 1.1, Varför mäta tjänstehantering).

### Hur ramverken skiljer sig

Ramverken besvarar något olika frågor, och det är vanligt att blanda dem. Använd tabellen nedan som karta.

| Ramverk | Utgångspunkt | Typiskt resultat | Bäst för | Typisk horisont |
| --- | --- | --- | --- | --- |
| Goal-Question-Metric | Ett specifikt mål för en produkt, process eller tjänst | Ett träd av mål, frågor och mätetal | Att utforma ett mätprogram för ett team eller en tjänst | Veckor till månader |
| OKR:er | Ett ambitiöst mål för nästa period | Några få mål, vart och ett med mätbara nyckelresultat | Att få team att dra åt samma håll kring resultat och fokusera insatsen | Kvartal |
| Balanserat styrkort | En organisations strategi | Mål och mått i fyra perspektiv | Att visa ledare en avrundad bild och koppla strategi till verksamhet | År |
| CSF:er och KPI:er | En tjänst, praktik eller ett mål | Några få villkor som måste gälla, vart och ett med indikatorer | Att driva en definierad ITIL-praktik och rapportera dess hälsa | Löpande, granskas regelbundet |

## Nyckelprinciper

- **Börja från målet, sedan frågan, sedan mätetalet.** Ett mätetal som väljs först har inget sätt att bedömas som användbart.
- **Gör publiken och beslutet uttryckliga.** Varje mål namnger vem som har nytta, och varje mätetal namnger vem som ska agera på det.
- **Håll uppsättningen liten.** Några få mått som läses och litas på slår en lång lista som man bläddrar förbi.
- **Balansera bilden.** Para hastighet med kvalitet, kostnad med upplevelse och kortsiktig leverans med långsiktigt lärande, så att inget ramverk belönar det ena på bekostnad av det andra.
- **Behandla mål som hypoteser.** Ett mål och dess siffror är ett vad som kan vara fel, så granska dem enligt schema och ändra dem med ett registrerat skäl.
- **Använd ramverk för att beskriva team och tjänster, aldrig för att rangordna människor.** Styrkort, nyckelresultat och KPI:er tillhör ett team eller en tjänst.
- **Kombinera ramverk med avsikt.** Säg vilket ramverk som äger vilket beslut, så att samma siffra inte definieras på tre sätt.

## Mätetalsdefinitioner

Mätetalen nedan mäter hälsan hos ett ramverk i bruk, inte hälsan hos en tjänst. De visar om mål och mätetal fortfarande hänger ihop, och de gäller vilket ramverk ett team än väljer. Antal räknas per team eller tjänst, aldrig per person.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Målspårbarhet | Andel rapporterade mätetal som kan spåras till ett skrivet mål och en fråga | mätetal med ett registrerat mål och en fråga / rapporterade mätetal | procent | Mätetalsregister (se ämne 1.4, Styrning och ägarskap av mätetal) | Mätning och rapportering; ständig förbättring | Leveransmål; produktmål | Kvartalsvis |
| Fördelning av nyckelresultatpoäng | Spridningen av slutpoäng för nyckelresultat vid periodens slut, visad som andelen i varje band | nyckelresultat i varje poängband (till exempel 0,0 till 0,3, 0,4 till 0,6, 0,7 till 1,0) / nyckelresultat som poängsatts under perioden; utesluter nyckelresultat som släppts med ett registrerat skäl | procent per band | OKR-uppföljningsverktyg eller teamdokument | Ständig förbättring; hantering av servicenivåer | Kvartalsplanering; granskning | Kvartalsvis |
| Perspektivtäckning | Andel av det balanserade styrkortets fyra perspektiv som har minst ett mått med ett aktuellt värde | perspektiv med ett mått som rapporterats den senaste perioden / fyra | procent | Styrkort eller instrumentpanel | Mätning och rapportering; styrning av tjänstevärdessystemet | Intressentgranskning (kund- och lärandevyer) | Kvartalsvis |
| Ålder på indikatorgranskning | Tid sedan varje KPI:s definition och mål senast granskades | granskningsdatum minus datumet för den senaste granskningen; klockan startar vid den senast registrerade granskningen och stoppar på rapportdatumet; redovisa medianen och den äldsta | dagar | Ändringslogg i mätetalsregistret | Ständig förbättring; mätning och rapportering | Åtgärder från retrospektiv | Kvartalsvis |
| Täckning från CSF till KPI | Andel kritiska framgångsfaktorer med minst en KPI som för närvarande rapporteras | CSF:er med en aktuell KPI / CSF:er definierade för tjänsten eller praktiken | procent | Praktik- eller tjänstedokumentation; mätetalsregister | CSF- och KPI-tillvägagångssättet i ITIL:s praktikvägledningar | Definition av klart; arbetsöverenskommelser | Kvartalsvis |

Målspårbarhet räknar ett mätetal som spårat bara om både målet och frågan är skrivna och publiken är namngiven; enbart ett mål räcker inte. Fördelningen av nyckelresultatpoäng bör läsas som en spridning, inte ett medelvärde, eftersom ett medelvärde döljer ett team som underskattade allt och ett team som misslyckades med allt. Åldern på indikatorgranskning utesluter mätetal som avvecklats under perioden.

## Rekommendationer

### Välj och kombinera ramverk

**1. Välj det minsta ramverk som gör jobbet.** Ett enskilt serviceteam med ett förbättringsproblem behöver sällan ett fullständigt balanserat styrkort. GQM räcker ofta, eftersom det har en tydlig slutpunkt: ett träd med ett mål, några frågor och några mätetal. Lägg till struktur först när ett beslut kräver det.

**2. Skriv mål i tre delar: syfte, ämne och synvinkel.** GQM-mål formuleras traditionellt som att förbättra en angiven kvalitet hos ett angivet ämne ur en angiven synvinkel, till exempel att förbättra tydligheten i incidentuppdateringar för dem som är beroende av servicedesken. Strukturen tvingar dig att säga vem som har nytta. Om ett mål saknar synvinkel är det förmodligen en slogan.

**3. Ställ frågor som en person skulle kunna besvara med en kort berättelse.** "Hur snabbt hör användare av sig igen efter att de rapporterat ett problem?" är en bra fråga, eftersom du kan föreställa dig ett svar och beläggen bakom det. "Vad är vår prestation?" är det inte. Sikta på tre till fem frågor per mål och räkna med att vissa besvaras med intervjuer eller stickprov, inte med en siffra.

**4. Välj mätetal sist, och välj fler än ett.** För varje fråga, namnge kandidatmätetalen, datakällan och manipuleringsvektorn (se ämne 1.5, Datakällor och instrumentering). Ta med minst ett mätetal i spänning med de andra, till exempel svarstid bredvid återöppningsgrad. Om en fråga saknar genomförbart mätetal, säg det och planera en kvalitativ kontroll.

**5. Bestäm vilket ramverk som äger vilket beslut.** Ett vanligt upplägg är att det balanserade styrkortet eller motsvarande håller de få mått som ledare granskar, att OKR:er håller de förbättringar ett team valt det här kvartalet och att CSF:er och KPI:er beskriver en praktiks löpande hälsa. Skriv ned upplägget i mätetalsregistret så att varje siffra har en enda definition och en enda ägare.

### Använd OKR:er väl

**6. Skriv mål som resultat och nyckelresultat som belägg.** Ett mål som "Användare får sina problem lösta utan att behöva jaga oss" är ett resultat. Ett nyckelresultat som "mediantiden till en användbar första uppdatering faller från [nuvarande värde] till [målvärde]" är belägg. Nyckelresultat som läses som uppgifter ("lansera en ny portal") är aktiviteter, inte resultat. Om du inte kan säga vad som skulle förändras för en användare är nyckelresultatet inte färdigt.

**7. Håll OKR:er på team- och tjänstenivå.** Att sätta dem för individer tenderar att förvandla dem till uppgiftslistor och underlag för medarbetarsamtal, och inbjuder till den manipulation som Goodharts lag förutsäger. Låt ett team skriva sina egna nyckelresultat öppet och låt team se varandras. Undvik kaskader där varje nivå måste omformulera nivån ovanför.

**8. Behandla poängen som ett samtal, inte ett betyg.** Team som ser en perfekt poäng som målet skriver försagda nyckelresultat. En poängfördelning som klumpar sig i toppen tyder på underskattning, och en som klumpar sig i botten tyder på att målen var fantasier. Granska spridningen varje kvartal och fråga vad teamet lärde sig av varje miss.

### Använd styrkort, CSF:er och KPI:er väl

**9. Definiera CSF:er före KPI:er.** En kritisk framgångsfaktor är ett uttalande om vad som måste vara sant, till exempel "användare kan hitta och använda rätt självbetjäningsartikel". En KPI visar sedan om det är sant. Att börja med KPI:n inbjuder dig att räkna det som är lätt att räkna. Fråga för varje CSF: "om det här slutade vara sant, hur snabbt skulle vi märka det, och av vad?" Svaret är KPI:n.

**10. Använd styrkortets perspektiv för att förhindra en ensidig bild.** De fyra klassiska perspektiven är finansiellt, kund, intern process samt lärande och tillväxt. Tjänsteorganisationer döper ofta om dem, till exempel kostnad, användarupplevelse, driftshälsa och förmåga. Det som spelar roll är att varje perspektiv har minst ett mått med ett aktuellt värde, och att en försämring i ett läses bredvid de andra (se ämne 6.5, Värdeförverkligande och affärsresultat).

**11. Koppla strategi till mått med en enkel karta.** En [strategikarta](https://en.wikipedia.org/wiki/Strategy_map) drar pilar från förmåga till process till kund till finansiella resultat. Den är användbar för samtal och dålig som räknare. Rita den, argumentera om pilarna och välj sedan några få mått. Försök inte göra diagrammet kvantitativt exakt.

**12. Granska ramverken enligt kalender.** Sätt en kvartalsvis granskning där teamet frågar om varje mål, nyckelresultat och KPI fortfarande spelar roll och fortfarande får människor att agera rätt. Avveckla det som inte längre tjänar och registrera skälet. Mätetal som överlever sina mål blir fåfängemätetal.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Målspårbarhet | Att skriva ett mål och en fråga efter att mätetalet redan finns, för att få registret att se komplett ut; vaga mål som motiverar vilket mätetal som helst | Stickprova fem poster varje kvartal och fråga om frågan kunde ha lett till ett annat mätetal; kontrollera att publiken och beslutet är namngivna |
| Fördelning av nyckelresultatpoäng | Att skriva lätta nyckelresultat så att poängen klumpar sig nära 1,0; att poängsätta generöst i efterhand; att släppa nyckelresultat som går dåligt utan att registrera varför | Antal nyckelresultat som släppts med sina skäl; jämför nyckelresultat med föregående periods utfall; granska medianambitionen med ledningen |
| Perspektivtäckning | Att lägga till ett symboliskt mått i ett perspektiv så att det räknas som täckt; att välja mått som inte kan röra sig | Kontrollera att varje perspektivmått har ändrat värde det senaste året och har ett skrivet beslut kopplat |
| Ålder på indikatorgranskning | Att registrera en granskning utan att läsa indikatorn; att bara ändra datumet | Kräv ett skrivet utfall (behållen, ändrad, avvecklad) för varje granskning och stickprova loggen |
| Täckning från CSF till KPI | Att tilldela en KPI som saknar samband med CSF:n för att nå full täckning; att välja en KPI som inte kan avslöja ett misslyckande | Fråga för varje par vilken avläsning som skulle visa att CSF:n misslyckas; leta efter KPI:er som aldrig har varit röda |

En sund avläsning är en där mål ändras när världen ändras, några nyckelresultat missas av angivna skäl och antalet rapporterade mätetal minskar eller är stabilt snarare än växer. Om allt är grönt, poängen klumpar sig i toppen och ingen kan nämna ett mätetal som avvecklats i år har ramverket blivit dekoration.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Goal-Question-Metric | Knyter varje mätetal till ett skäl; lätt att förklara; fungerar i teamskala | Kräver en facilitatorledd session; kan bli en pappersövning; säger lite om prioritet mellan mål |
| OKR:er | Fokuserar ett kvartal på några få resultat; synliga över team; passar korta planeringscykler | Lätt att skriva nyckelresultat som uppgifter; poäng kan manipuleras; individuella OKR:er flyter ihop med medarbetarsamtal |
| Balanserat styrkort | Ger ledare en avrundad bild; kopplar strategi till verksamhet | Tungt att underhålla; perspektiven kan bli rutor att fylla; långsamt att spegla förändring |
| CSF:er och KPI:er | Välkända i ITIL-praktiken; passar bra för rapportering om en tjänst i drift | Lätt att glida mot fåfänge-KPI:er; indikatorer blir inaktuella utan granskning |
| Inget ramverk | Lätt och snabbt för ett mycket litet team | Mätetal ansamlas utan skäl; argument om vad som ska mätas upprepas |
| Flera ramverk tillsammans | Varje beslut får det verktyg som passar | Dubbla definitioner; förvirring om vilken siffra som är auktoritativ |

Välj ramverkets tyngd efter insatserna. En liten intern tjänst behöver ett mål, tre frågor och några få mätetal på en sida. En tjänst som levereras enligt avtal kan behöva KPI:er definierade till nivån av ett servicenivåavtal (se ämne 5.1, Mätetal för SLA, OLA och XLA).

## Frågor att diskutera med teamet

**1. Vilket mål tjänar var och en av våra rapporterade mätetal, och vem skulle märka om vi slutade rapportera det?**
Lista mätetalen på en tavla och skriv målet bredvid varje. Där målet saknas, fråga vem som bad om mätetalet och varför. Vissa visar sig vara ärvda från ett tidigare projekt och kan avvecklas. Facilitatorn bör behandla ett mätetal utan mål som en normal upptäckt, inte ett misslyckande.

**2. Om vi bara kunde besvara tre frågor om vår tjänst, vilka skulle det vara?**
Det tvingar fram en rangordning av frågor före mätetal. Låt var och en skriva tre och klustra dem sedan. Jämför klustret med den instrumentpanel teamet har i dag. Gapen mellan de två är vanligen sessionens mest användbara resultat.

**3. Vilka av våra nyckelresultat beskriver ett resultat för användare, och vilka beskriver arbete vi planerar att göra?**
Läs varje nyckelresultat högt och fråga om en användare skulle märka det om det uppnåddes. Om svaret är nej, skriv om det som ett resultat eller flytta det till planen. Facilitatorn kan nämna att uppgifter är bra, men att de hör hemma i en backlog. Avsluta med att enas om ett nyckelresultat att skriva om det här kvartalet.

**4. Var är våra fyra styrkortsperspektiv oense, och vad säger det oss?**
Be gruppen leta efter en nylig period då ett perspektiv förbättrades medan ett annat försämrades, till exempel kostnaden föll medan upplevelsen sjönk. Diskutera orsaken och om någon såg det komma. Det bygger vanan att läsa mått tillsammans. Notera varje perspektiv som saknar mått och bestäm om ni ska lägga till ett eller säga öppet att det inte ingår i omfattningen.

**5. Vilken avläsning skulle för varje kritisk framgångsfaktor tala om för oss att den misslyckas?**
Välj två CSF:er och namnge KPI:n, fråga sedan vilket värde som skulle utlösa ett samtal. Om teamet inte kan säga det gör KPI:n inte sitt jobb. Leta efter KPI:er som aldrig har bytt färg, vilket oftast tyder på ett för löst satt tröskelvärde. Facilitatorn bör fråga vad KPI:ns manipuleringsvektor skulle vara.

**6. Vilket ramverk bör äga vilket beslut, och var definierar vi i dag samma siffra två gånger?**
Följ ett mätetal, till exempel incidentlösningstid, genom varje rapport där det förekommer. Jämför definitionerna. Skillnader i klockor eller undantag är vanliga och förklarar ofta argument mellan team. Enas om en ägare och en definition och registrera den i registret.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam möter ramverk främst som OKR:er och, om de har tur, GQM. Ett team har mest nytta när det skriver sina egna mål och nyckelresultat, kopplade till vad dess användare behöver, och när det håller arbetsmåtten åtskilda från dem som ledare ser. Ett team bör vara på sin vakt mot nyckelresultat som belönar leverans, till exempel berättelsepoäng eller releaser, eftersom de inbjuder till det beteende som ramverken var avsedda att förhindra (se ämne 1.3, Resultat före leverans: att välja vad som ska mätas).

### Service- och driftteam

Driftteam möter ramverk främst som CSF:er och KPI:er inom ITIL-praktiker, samt servicenivåmål överenskomna med kunder. De har nytta av att definiera CSF:n på enkelt språk innan de väljer KPI:n, av att redovisa percentiler för tidsmått och av att hålla tillförlitlighetsmått som servicenivåindikatorer och servicenivåmål bredvid användarnas upplevelse (se ämne 5.2, SLI:er, SLO:er och felbudgetar). De bör också motstå frestelsen att behålla KPI:er som sattes för år sedan och inte längre har något att göra med hur tjänsten används.

### Ledning och styrning

Ledare väljer ramverken, vanligtvis genom att be om ett styrkort eller om OKR:er, och vad de gör med siffrorna avgör hur ramverken beter sig. En ledare som straffar ett missat nyckelresultat lär team att skriva lätta. En ledare som frågar vad teamet lärde sig lär dem att skriva ärliga. Styrande organ bör förvänta sig ett mätetalsregister, ett litet antal rapporterade mått och en regelbunden granskning av om själva ramverket fungerar (se ämne 11.4, Mognadsmodell för mätetalsprogram).

### Kunder och användare

Kunder och användare ser sällan ramverket, bara dess effekter. Ett väl utformat visar sig som tjänster som förbättras på de sätt de bett om och som ärlig rapportering om det som inte har förbättrats. Ett dåligt visar sig som gröna rapporter som inte stämmer med upplevelsen. Ta med en användarsynvinkel i varje mål och låt användarfeedback sitta i styrkortets kundperspektiv bredvid driftsiffrorna (se ämne 6.2, Överenskommelser om upplevelsenivå).

## I praktiken: ett exempel från tjänstehantering

En medelstor nätbutik driver en kundsupportplattform och en självbetjäningsportal med flera produktteam och en liten tjänstedriftsgrupp. Alla siffror är illustrativa.

Ledningen ber om ett balanserat styrkort och, separat, om kvartalsvisa OKR:er. Inom ett kvartal har teamet 31 rapporterade mått, och ingen kan säga varför hälften av dem finns. Tjänsteägaren håller en halvdagssession med GQM kring ett mål: "Förbättra tydligheten i hjälpen för kunder som inte kan slutföra en betalning, ur kundens synvinkel."

Sessionen ger fyra frågor. Hittar kunder rätt hjälpartikel? Behöver de kontakta support efter att ha läst den? Hur lång tid tar ett betalningsproblem att lösa när de väl kontaktar support? Upplever de att svaret var tydligt? Av de 31 måtten motsvarar nio dessa frågor. Tre nya behövs: sökframgång för artiklar, kontaktfrekvens efter en artikelvisning och en enfrågeenkät efter lösning. De återstående 22 markeras för avveckling, med ägarens medgivande.

Kvartalets OKR skrivs som ett resultat. Målet är "Kunder löser betalningsproblem utan att behöva jaga oss." De tre nyckelresultaten är mediantiden och 90:e percentilen för tid till lösning, kontaktfrekvensen efter artikelvisningar och enkätresultatet om tydlighet. Styrkortet låter kundperspektivet peka på samma mått, så det finns en definition, inte två.

Mitt i kvartalet dyker en manipulationsrisk upp. Kontaktfrekvensen efter artikelvisningar sjunker kraftigt, vilket ser ut som framgång. En granskare stickprovar 20 sessioner och finner att en omdesign flyttat länken "kontakta oss" tre skärmar djupare. Färre människor når support, och enkäten visar lägre tydlighetspoäng. Teamet lägger till sökavbrott och enkätkommentarerna som skyddsräcken och återställer länken.

I slutet av kvartalet är nyckelresultatens poäng 0,6, 0,8 och 0,5, vilka teamet presenterar som de är. Ledningen frågar vad teamet lärde sig, inte varför poängen inte var högre. Beslutet, registrerat i beslutsloggen, är att behålla målet ett andra kvartal, ersätta kontaktfrekvensen med andelen kunder som löser problemet vid första besöket och avveckla sex styrkortsmått till.

## Agilitet, AI, automatisering och analys

### Agilitet

Mål och frågor bör ses över när teamet lär sig, så välj ett ramverk som är lätt nog att revidera vid regelbundna förbättringsgranskningar med intressenter. Ett praktiskt tillvägagångssätt är att skriva målet, frågan och två eller tre indikatorer på en sida och granska den ofta. Varningen är att ett ramverk som används som en engångsdesignövning blir inaktuellt, och instrumentpanelen driver bort från målen.

### AI

Lägg till AI i ramverket uttryckligen: vilket mål tjänar en AI-stödd praxis, vilken fråga besvarar dess mått och vilket kvalitetsmått paras med det. Att anpassa sig till ett styrningsvokabulär som NIST AI Risk Management Framework kan hjälpa, men kontrollera vad den aktuella texten säger innan du citerar den. Varningen är att ett ramverk som bara mäter AI-användning kommer att belöna användning för dess egen skull.

### Automatisering

Använd automatisering för att hålla spårbarheten från mål till indikator aktuell, till exempel genom att flagga indikatorer utan kopplat mål. Ta med automatisering i ramverket som något att mäta efter dess resultat och dess fel. Varningen är att ett ramverk kan bli en stor automatiserad rapport som ingen läser.

### Analys

Välj indikatorer som data kan stödja och säg vilket beslut var och en ger underlag för. När flera ramverk gäller, till exempel mål och nyckelresultat, ett balanserat styrkort och ITIL:s kritiska framgångsfaktorer, kartlägg dem till en enda uppsättning i stället för att köra tre. Varningen är att ett ramverk inte kan rätta till dåliga data, så para valet av indikatorer med datakvalitetskontrollerna i ämne 1.5, Datakällor och instrumentering.

## Branschperspektiv

**Startup.** En startup behöver oftast ett mål, tre frågor och en handfull mätetal, hållna på en enda sida. OKR:er är vanliga och fungerar bra när de skrivs av teamet som ska göra arbetet. Motstå att lägga till ett styrkort tills investerare eller kunder kräver ett.

**Småföretag.** Resurserna är knappa, så välj ett ramverk och använd det lätt. CSF:er och KPI:er skrivna för de två eller tre saker som verksamheten inte har råd att göra fel på räcker ofta. Föredra direkt återkoppling från kunder framför utförlig poängsättning.

**Storföretag.** Flera ramverk samexisterar vanligen, vilket gör ägarskapet av definitioner till den största utmaningen. För ett register, utse vilket ramverk som håller vilken siffra och håll en årlig granskning av hela upplägget. Akta dig för kaskader som tvingar varje team att omformulera företagsmålen med egna ord.

**Offentlig sektor.** Påbjuden rapportering och avtalade servicenivåer fungerar som fasta KPI:er. Behandla dem som givna och använd GQM eller OKR:er för förbättringsarbetet runt dem. Offentlig ansvarsskyldighet höjer insatserna för en vilseledande siffra, så publicera definitioner och var öppen med ändringar (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaden för ett ramverk är mestadels tid: en facilitatorledd session för att utforma mått, en kort kvartalsgranskning och underhållet av ett register. Programvara för OKR:er eller styrkort finns, men ett dokument eller kalkylblad räcker ofta i liten skala. Den större kostnaden är ledningens uppmärksamhet, eftersom ett ramverk som ledare inte använder blir rapportering för sin egen skull.

Avkastningen kommer från färre, bättre mått. Team som kan säga varför varje siffra finns lägger mindre tid på att ta fram rapporter som ingen läser, grälar mindre om definitioner och märker snabbare när ett mått har slutat ge underlag för beslut. I stället för att citera en siffra, mät dina egna baslinjer: antalet rapporterade mätetal, andelen med ett registrerat mål och tiden som läggs på att förbereda återkommande rapporter, före och efter att ha infört ramverket. En fylligare behandling av avkastning på investering finns på annat håll (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Mätetal före mål.** Att utgå från den data du har ger en instrumentpanel över det som är lätt att räkna. Skriv målet och frågan först och se sedan vilka data som passar.
- **OKR:er som uppgiftslistor.** Nyckelresultat som namnger aktiviteter får varje kvartal att se upptaget ut och säger ingenting om resultat. Skriv om varje som belägg som en användare skulle märka.
- **OKR:er och styrkort som individuella mål.** De inbjuder till manipulation och avskräcker från hjälp mellan människor. Håll dem på team- och tjänstenivå.
- **Ett styrkort med tomma eller symboliska perspektiv.** Att fylla varje ruta med något är inte detsamma som att se helheten. Kräv ett aktuellt värde och ett beslut för var och en.
- **KPI:er som aldrig ändras.** Om en indikator har varit grön i åratal är dess tröskel förmodligen fel eller så mäter den inget som kan misslyckas. Fråga vilken avläsning som skulle visa ett problem och återställ den sedan.
- **Ramverk staplade utan ägarskap.** Tre ramverk som definierar samma mått på tre sätt skapar argument. Namnge en ägare och en enda definition.
- **Att belöna poängen.** Om en perfekt OKR-poäng ger beröm eller lön kommer team att skriva lätta nyckelresultat. Belöna ärligt lärande och goda frågor.
- **Ramverk som ceremoni.** En dag av workshoppar som ger en laminerad affisch ändrar ingenting. Behåll resultatet i registret och granska det enligt kalender.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Mål och frågor | Mätetal väljs för att data finns | Vissa team skriver mål före mätetal | Ett gemensamt mål- och frågeformat; varje rapporterat mätetal kan spåras till ett | Spårbarhet granskas och luckor leder till finansierat arbete | Mål skrivs tillsammans med kunder och leverantörer och revideras när förhållandena ändras |
| Användning av ramverk | Ad hoc; inget angivet ramverk | Team antar olika ramverk med olika vokabulär | En skriven överenskommelse säger vilket ramverk som äger vilket beslut | Ramverkets resultat granskas och oanvända delar släpps | Ramverk samordnas över team och leverantörer med en uppsättning definitioner |
| Indikatorer och poängsättning | KPI:er sätts en gång och granskas aldrig | Vissa KPI:er har ägare och tröskelvärden | KPI:er och nyckelresultat har ägare, definitioner och skyddsräcken | Poäng och indikatorer följs över tid och granskas för manipulation varje kvartal | Indikatorer avvecklas och ersätts rutinmässigt, med ändringar kopplade till resultat |
| Användning i beslut | Rapporter produceras och ignoreras | Ledare ber om siffror när något går fel | Granskningar registrerar beslut som siffror påverkade | Lärandefrågor är standard; missade mål diskuteras utan skuldbeläggning | Förbättringsplanering över team använder samma gemensamma mål och mått |

## Checklista

- [ ] Varje rapporterat mätetal kan spåras till ett skrivet mål, en fråga och en namngiven publik.
- [ ] Ett mätetalsregister anger vilket ramverk som äger varje mätetal och dess enda definition.
- [ ] Mål är skrivna med ett syfte, ett ämne och en synvinkel.
- [ ] Varje nyckelresultat beskriver ett resultat som någon skulle märka, inte en uppgift.
- [ ] OKR:er, styrkortsmått och KPI:er tillhör team eller tjänster, inte individer.
- [ ] Varje kritisk framgångsfaktor har minst en aktuell KPI och en angiven avläsning som skulle visa misslyckande.
- [ ] Varje styrkortsperspektiv har ett mått med ett aktuellt värde.
- [ ] Varje mätetal har en namngiven manipuleringsvektor och ett skyddsräcke.
- [ ] En kvartalsvis granskning frågar om varje mål, nyckelresultat och KPI fortfarande spelar roll.
- [ ] Minst ett mätetal eller en indikator har avvecklats eller utformats om under det senaste året, med skälet registrerat.

## AI-prompter

**Förvandla ett mål till frågor och kandidatmätetal.**

```text
Our team is [team name], which runs [type of service or delivery work] for
[audience]. Our goal is: [goal stated as purpose, subject, and viewpoint]. Using
the Goal-Question-Metric approach, propose three to five questions that would
show whether we are meeting this goal. For each question, suggest candidate
metrics we could define, the kind of data source we would need, the likely
gaming vector, and a guardrail. Do not invent benchmark values or statistics.
List your assumptions and anything you could not determine from what I gave you.
```

**Granska utkast till OKR:er.**

```text
Here are our draft objectives and key results for [period]: [paste OKRs]. Our
team is [team name] and our users are [audience]. Review each key result and
tell me whether it describes an outcome or an activity, whether it could be met
without helping users, and what guardrail would show that. Suggest rewrites
where needed, using [placeholders] for any numbers we must supply ourselves.
Do not invent targets or benchmark values. List your assumptions and questions I
should answer.
```

**Kartlägg kritiska framgångsfaktorer till KPI:er.**

```text
For the ITIL practice [practice name] in our organization, which serves
[audience], here are the critical success factors we have drafted: [list CSFs].
Propose KPIs for each that could be collected from [data sources]. For each KPI,
state where the clock starts and stops if it is a time measure, what reading
would show the factor is failing, and how it might be gamed. Do not state
benchmark values or compliance claims. List your assumptions.
```

**Granska ett styrkort efter balans.**

```text
Our scorecard has these measures, grouped by perspective: [paste measures by
perspective]. We are [type of organization]. Identify perspectives that are
thin, measures that appear to duplicate each other, and measures that could
move in a way that hides a problem in another perspective. Suggest guardrails
and measures to retire. Do not invent figures or sources. List your
assumptions and what you could not judge from the data I gave you.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta vilket ämne som äger ett mätetal och dess parade skyddsräcke innan du placerar det i ett ramverk.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en ramverksbaserad mätetalspost har sin definition, manipuleringsvektor och skyddsräcke.

## Viktigaste slutsatser

- Ett ramverk avgör vilka mätetal som förtjänar en plats, och den vanliga regeln är att börja från ett mål och en fråga och sedan välja mätetalet.
- Goal-Question-Metric passar för att utforma mått för ett team, OKR:er passar för att fokusera ett kvartal, styrkort passar för avrundade ledningsvyer och CSF:er med KPI:er passar för att driva en ITIL-praktik.
- Använd det lättaste ramverk som fungerar och säg vilket som äger vilken siffra.
- Varje ramverk kan manipuleras, så para varje mätetal med ett skyddsräcke och granska uppsättningen enligt kalender.
- Håll ramverk på team- och tjänstenivå, aldrig som individuella mål.
- Avveckla mål, nyckelresultat och indikatorer som inte längre ger underlag för beslut.

## Referenser och vidare läsning

1. Basili, V. R., Caldiera, G., and Rombach, H. D., "The Goal Question Metric Approach," in *Encyclopedia of Software Engineering*, Wiley, 1994.
2. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January-February 1992.
3. Kaplan, R. S., and Norton, D. P., *The Balanced Scorecard: Translating Strategy into Action*, Harvard Business School Press, 1996.
4. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
5. Grove, A. S., *High Output Management*, Random House, 1983.
6. Rockart, J. F., "Chief Executives Define Their Own Data Needs," *Harvard Business Review*, March-April 1979.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
9. Axelos, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
10. Wikipedia, [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili).
11. Wikipedia, [OKR](https://en.wikipedia.org/wiki/OKR).
12. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
13. Wikipedia, [Critical success factor](https://en.wikipedia.org/wiki/Critical_success_factor).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
17. Wikipedia, [Strategy map](https://en.wikipedia.org/wiki/Strategy_map).
