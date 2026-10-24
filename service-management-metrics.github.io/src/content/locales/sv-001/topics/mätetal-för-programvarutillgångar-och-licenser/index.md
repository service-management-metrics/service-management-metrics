# Mätetal för programvarutillgångar och licenser

**Programvara köps, prenumereras på, byggs och lånas, och varje väg skapar skyldigheter och kostnader, så mät vad du har rätt till, vad du faktiskt använder och vad du är beroende av, och gör det lätt för team att välja verktyg utan att skapa överraskningar senare.**

## Översikt och motiv

Programvara är den tillgångsklass som förändras snabbast och är svårast att se. En utvecklare lägger till ett bibliotek på minuter. Ett team registrerar sig för ett verktyg som programvara som tjänst på ett företagskort. En leverantör ändrar sin prismodell mellan förnyelser. Ett avtal tillåter 500 användare och 700 har konton. [Programvarutillgångshantering](https://en.wikipedia.org/wiki/Software_asset_management) (SAM) är den affärsmetod som hanterar och optimerar inköp, driftsättning, underhåll, användning och avyttring av programvara inom en organisation. Den ligger inom den bredare praktiken it-tillgångshantering (se ämne 7.1, Mätetal för it-tillgångshantering) och delar dess disciplin av register, ägare och livscykler.

Kontinuerlig leverans och programvarutillgångshantering drar åt olika håll när det gäller hastighet. Team som levererar kontinuerligt behöver välja och införa verktyg snabbt, och de bygger på öppen källkod i hundratal komponenter. Programvarutillgångshantering vill veta vad som används, på vilka villkor, till vilken kostnad och med vilken risk. Båda har rätt. Vägen igenom är kontinuerligt samarbete mellan team, upphandling, juridik, säkerhet och ekonomi: gör den godkända vägen snabb, gör katalogen över godkända verktyg lätt att hitta och gör kontrollerna automatiska. Att sakta ner team med en lång godkännandeprocess producerar [skugg-it](https://en.wikipedia.org/wiki/Shadow_IT), som är motsatsen till den insyn alla vill ha.

Fyra slags programvara spelar roll, och måtten skiljer sig mellan dem.

- **Licensierad programvara** installerad på enheter eller servrar, styrd av en [programvarulicens](https://en.wikipedia.org/wiki/Software_license) som säger vem som får använda den, hur många som får använda den och på vilka villkor. Rättigheter kan gälla per användare, per enhet, per kärna eller per plats, och enheten avgör hur du räknar.
- **Programvara som tjänst.** [Programvara som tjänst](https://en.wikipedia.org/wiki/Software_as_a_service) (SaaS) nås över ett nätverk och betalas med prenumeration, ofta per plats eller per användning. Den är lätt att införa och lätt att glömma. Överlappande verktyg och oanvända platser ackumuleras.
- **Komponenter med öppen källkod.** [Programvara med öppen källkod](https://en.wikipedia.org/wiki/Open-source_software) finns under licenser som ger breda rättigheter med villkor. Vissa licenser, kallade [copyleft](https://en.wikipedia.org/wiki/Copyleft)-licenser, kräver att härlett arbete delas under samma villkor. Efterlevnad beror på hur en komponent används och distribueras, och tolkningen av en licens är en juridisk fråga.
- **Programvara du bygger.** Din egen kod är en tillgång, och den beror på många komponenter. En [programvarustycklista](https://en.wikipedia.org/wiki/Software_bill_of_materials) (SBOM) är en lista över komponenterna i en programvara. Den hjälper dig att besvara vilka av dina tjänster som använder ett givet bibliotek när en sårbarhet eller en licensfråga dyker upp.

Programvarutillgångsmått är utsatta för den vanliga förvrängningen. En licensposition kan se frisk ut eftersom inventeringen är ofullständig. Kostnaden för hyllvärmare kan se låg ut eftersom avtal förkortades före granskningen. Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller, så varje mått här paras med en oberoende kontroll (se ämne 1.2, Goodharts lag och mätetalens psykologi).

En varning om juridik: licensvillkor och revisionsrättigheter är juridiska frågor. Det här ämnet beskriver mätpraxis. Det tolkar ingen licens, och det ersätter inte råd från kvalificerade jurister för din situation och jurisdiktion.

## Nyckelprinciper

- **Mät rättighet mot användning.** Att veta vad du får använda och vad du använder är kärnjämförelsen.
- **Räkna i den enhet licensen använder.** Användare, enheter, kärnor och prenumerationer är olika, och att blanda dem döljer svaret.
- **Gör den godkända vägen till den snabba vägen.** En synlig katalog och snabbt godkännande minskar skuggadoption.
- **Ta med komponenter såväl som produkter.** Bibliotek med öppen källkod och deras licenser är en del av beståndet.
- **Granska före förnyelse.** Den bästa tiden att skära bort slöseri är före avtalsdatumet.
- **Håll juridik i samtalet.** Tolkning hör hemma hos människor som är kvalificerade att ge den.
- **Dela bilden med team.** Team som ser sin egen användning och kostnad gör bättre val.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Effektiv licensposition | Jämförelse av innehavda rättigheter med funnen användning, per produkt, i licensens egen räkneenhet | innehavda rättigheter minus funna driftsättningar eller användare, per produkt | enheter (överskott positivt, underskott negativt) | Rättighetsregister, upptäcktsverktyg, identitetssystem | It-tillgångshantering; leverantörshantering | Synlig katalog och användningsdata för team | Månadsvis för nyckelprodukter; kvartalsvis för andra |
| Licensutnyttjandegrad | Andel betalda rättigheter som är i aktiv användning | rättigheter med aktivitet de senaste 90 dagarna / betalda rättigheter | procent | Leverantörens användningsrapporter, identitetsloggar, rättighetsregister | It-tillgångshantering; ekonomisk styrning | Retrospektiv om verktygens värde | Månadsvis |
| Kostnad för hyllvärmare | Årlig kostnad för rättigheter som betalas och inte används | summan av (oanvända rättigheter gånger enhetskostnad) | valuta per år | Rättighetsregister, användningsdata, fakturor | It-tillgångshantering; ekonomisk styrning | Minskat slöseri i verktygskedjan | Kvartalsvis |
| Antal ej sanktionerade applikationer | Antal programvaruapplikationer i bruk som inte finns i den godkända katalogen | applikationer som setts i utläggsdata, loggar för enkel inloggning eller nätverksdata och som inte finns i katalogen | antal | Utläggsrapporter, identitetsleverantör, nätverks- och slutpunktsdata | It-tillgångshantering; informationssäkerhetshantering | Team som väljer verktyg med synligt stöd | Månadsvis |
| Förnyelseberedskap | Andel förnyelser som hade en användningsgranskning före uppsägningsdatumet | förnyelser med en slutförd användningsgranskning minst 90 dagar före uppsägningsdatum / förnyelser som förfaller under perioden | procent | Avtalsregister och granskningsposter | Leverantörshantering; ekonomisk styrning | Planering i förväg för förändring | Kvartalsvis |
| SBOM-täckning | Andel produktionstjänster med en aktuell programvarustycklista | tjänster med en SBOM genererad under den senaste releasecykeln / produktionstjänster | procent | Utdata från byggpipelinen, tjänstekatalog | It-tillgångshantering; informationssäkerhetshantering | Definitionen av klart inkluderar insyn i beroenden | Månadsvis |
| Täckning av granskning av öppen källkod | Andel komponenter i produktion med en registrerad licensidentifiering och ett policybeslut | komponenter med licens och beslut registrerade / komponenter funna i SBOM:er | procent | Verktyg för programvarusammansättningsanalys, policyregister | It-tillgångshantering; leverantörshantering | Granskning av beroenden i pipelinen | Månadsvis |

Ange räkneenheten för varje produkt i registret. Utnyttjande räknar aktivitet från en definierad händelse, till exempel inloggning, och ett angivet fönster. Uteslut tjänstekonton och testkonton ur användarantal bara när licensvillkoren tillåter det, och registrera regeln. Kostnad är avtalets enhetspris efter överenskomna rabatter, och prisets datum registreras.

## Rekommendationer

### Vet vad du håller och vad du använder

**1. Håll ett rättighetsregister för varje produkt som kostar pengar eller bär skyldigheter.** Posten bör innehålla leverantör, produkt, licenstyp, räkneenhet, kvantitet, löptid, pris, förnyelse- och uppsägningsdatum, begränsningar och ägaren. Lagra avtalet eller en länk till det. Måttet beror på det här registret, och registret finns ofta inte för prenumerationer som köpts utanför upphandlingen.

**2. Mät användning med leverantörens enhet.** Platslicenser räknar namngivna användare, och processorlicenser räknar kärnor. Utnyttjande mot fel enhet ger falsk trygghet. Där villkoren är komplexa, be upphandling och juridik beskriva räkneregeln på vanlig svenska en gång och registrera den.

**3. Kombinera tre källor till användningsdata.** Leverantörens adminkonsol, din identitetsleverantörs inloggningsloggar och dina upptäcktsverktyg ser var och en en del. Där de är oense, ta reda på varför. En plats som är tilldelad men aldrig använd är en kandidat för återtagande, och en användare som syns i en logg och inte i en annan kan vara ett dataproblem.

**4. Ta tillbaka oanvända platser som standard.** Sätt en regel, till exempel att ta bort åtkomst efter 90 dagar utan användning och återställa den på begäran. Gör det lätt att återställa så att regeln inte frustrerar människor. Återtagande är en kontinuerlig praxis, inte ett projekt, och fungerar bäst när det är automatiserat och tillkännagivet.

### Gör rätt väg till den lätta vägen

**5. Publicera en katalog över godkända verktyg.** Lista vad team kan använda, vad det kostar, vem som stöder det och hur man begär åtkomst. Lägg till en snabb väg för att föreslå ett nytt verktyg, med en kort granskning av säkerhet, integritet och kostnad. En katalog som hjälper människor att hitta det befintliga verktyget förhindrar dubbla inköp (se ämne 6.3, Mätetal för tjänsteanvändning och katalog).

**6. Bevaka vildväxt utan att straffa den.** Använd utläggsdata, loggar för enkel inloggning och nätverksdata för att hitta applikationer som inte finns i katalogen. Behandla var och en som ett samtal: vad behöver teamet, och kunde ett godkänt verktyg tjäna? Räkna de ej sanktionerade applikationerna och följ trenden, och sikta på att föra in användbara under hantering, inte på att utplåna dem.

**7. Ge team insyn i sin egen användning och kostnad.** En månatlig vy över platser, användning och kostnad per team låter dem städa sina egna prenumerationer. Insyn fungerar bättre än övervakning, och den respekterar den agila preferensen för självorganiserande team med den information de behöver.

### Planera förnyelser och hantera beroende

**8. Granska användning före varje betydande förnyelse.** Sätt en granskning 90 till 120 dagar före uppsägningsdatumet, med ägaren, upphandling och ekonomi. Ta med utnyttjande, kostnad för hyllvärmare, alternativ och teamets återkoppling. Förnyelseberedskap är andelen förnyelser som når den här granskningen i tid. Ett missat uppsägningsdatum är en kostnad med en orsak.

**9. Bevaka inlåsning hos leverantör.** [Leverantörsinlåsning](https://en.wikipedia.org/wiki/Vendor_lock-in) gör det kostsamt att byta leverantör. Registrera utvägen för viktiga produkter: dataexportformat, avtalsvillkor vid uppsägning och insatsen att ersätta. Du behöver inte undvika beroende, men du bör känna till dess pris.

**10. Generera en SBOM vid varje release.** Byggverktyg kan producera en SBOM automatiskt som en del av pipelinen, så att informationen hålls aktuell utan löpande insats. Lagra den med releasen och gör den sökbar så att du kan besvara vilka tjänster som använder en komponent. Detta stöder licensiering och säkerhetsrespons lika.

**11. Granska licenser för öppen källkod i pipelinen.** Verktyg för [programvarusammansättningsanalys](https://en.wikipedia.org/wiki/Software_composition_analysis) identifierar komponenter och deras licenser. Kom överens med juridik om en kort policy om vilka licenser som är godkända, vilka som behöver granskning och vilka som inte är tillåtna för din användning, och låt pipelinen flagga undantag. Håll policybesluten i ett register. Verktyget identifierar licenser, och en person som är kvalificerad att tolka dem avgör de svåra fallen.

### Förbered dig lugnt på revisioner

**12. Håll belägg redo, inte en kapplöpning.** En [programvarurevision](https://en.wikipedia.org/wiki/Software_audit) av en leverantör eller en tillsynsmyndighet ber dig visa att din användning stämmer med dina rättigheter. Om rättighetsregister och användningsdata redan stäms av varje månad är en revision en rutinbegäran. Engagera juridik och upphandling tidigt, svara genom en kanal och självrapportera inga slutsatser som du inte har gått igenom med dem.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Effektiv licensposition | Att räkna i en gynnsam enhet; att lämna skuggdriftsättningar utanför upptäckten | Räkna i licensens egen enhet; jämför med utläggs- och identitetsdata; juridisk granskning av räkneregeln |
| Licensutnyttjandegrad | Att förkorta aktivitetsfönstret; att räkna inloggningar från robotar eller tjänstekonton som användning | Fast fönster i registret; uteslut icke-mänskliga konton; jämför med leverantörens användningsrapport |
| Kostnad för hyllvärmare | Att omförhandla eller säga upp strax före granskningen för att minska talet; att ignorera prenumerationer på kort | Ta med alla utgiftskällor; följ kostnaden vid början av uppsägningsfönstret |
| Antal ej sanktionerade applikationer | Att godkänna allt i katalogen för att minska antalet; att dölja användning genom privata konton | Granskningskriterier för katalogen; titta på utläggs- och identitetsdata; fråga team vad de behöver |
| Förnyelseberedskap | Att hålla en rutinmässig granskning; att sätta uppsägningsdatumet senare | Granskningschecklista med obligatoriska indata; avtalsdatum som hålls av upphandling |
| SBOM-täckning | Att generera SBOM:er som utelämnar transitiva beroenden; att räkna byggutdata som inte släpps | Definiera djup i registret; stickprovskontrollera en SBOM mot den driftsatta artefakten |
| Täckning av granskning av öppen källkod | Att markera komponenter som granskade utan ett beslut; att acceptera "okända" licenser | Räkna komponenter med okänd licens; granska ett stickprov av beslut |

En sund avläsning är en licensposition som stämmer med oberoende belägg, en utnyttjandegrad som stiger därför att platser tas tillbaka och inte därför att definitionen ändrades, ett antal ej sanktionerade applikationer som faller när katalogen förbättras och förnyelser som anländer med en granskning.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Centralt godkännande av alla verktyg | Stark kontroll, en bild | Långsamt; uppmuntrar skugg-it |
| Teamens val inom skyddsräcken | Snabbt; passar teamens behov | Mer variation; kräver insyn och granskning |
| Aggressivt återtagande av platser | Sparar kostnad | Kan frustrera användare om återställning är långsam |
| Generös platstilldelning | Låg friktion | Slöseri ackumuleras |
| Företagsavtal | Lägre enhetskostnad, enklare | Inlåsning; betalar för onödig bredd |
| Betalning per användning | Anpassar kostnaden till användning | Oförutsägbara fakturor |
| Automatisk licensskanning | Konsekvent och snabb | Behöver mänskligt omdöme i gränsfall |
| Manuell granskning av komponenter | Noggrann | Skalar inte för stora beroendeträd |

Svaret är att ge team val inom tydliga skyddsräcken, automatisera kontrollerna och lägga mänsklig uppmärksamhet på de stora avtalen och de svåra licensfrågorna. Håll en snabb väg för nya verktyg och en lätt väg för att återställa åtkomst som tagits tillbaka.

## Frågor att diskutera med teamet

**1. Vilka tre produkter kostar oss mest, och vet vi hur många som använder dem?**
Lista de största avtalen och räkneenheten för vart och ett. Jämför med användningsdata. Facilitatorn bör leta efter produkter där ingen känner till enheten eller där användningsdata inte finns. Enas om att samla in data för en före nästa förnyelse.

**2. Hur införs ett nytt verktyg här, och hur lång tid tar det?**
Följ ett nyligt exempel från begäran till åtkomst. Fråga hur många team som hoppade över vägen, och varför. Svaret visar om den godkända vägen är snabb. Enas om en förbättring av vägen och ett sätt att ta reda på om den fungerade.

**3. Vad skulle hända om en leverantör bad oss bevisa vår licensposition nästa månad?**
Gå igenom vem som skulle svara, vilka register som finns och vilka glapp det finns. Samtalet ska inte syfta till att hitta juridiska slutsatser, bara att identifiera saknade register. Namnge människorna inom juridik och upphandling som skulle vara involverade och hur teamet skulle nå dem.

**4. Var tar vi tillbaka oanvända platser, och var gör vi det inte?**
Granska reglerna för återtagande för de främsta produkterna. Fråga vad som skulle hända om en regel tillämpades på resten. Diskutera hur man gör det smärtfritt att återställa åtkomst, eftersom det är det som gör regeln acceptabel.

**5. Kan vi säga vilka av våra tjänster som använder ett givet bibliotek med öppen källkod?**
Välj ett välkänt bibliotek och försök besvara. Om det tar mer än några minuter, diskutera varför. Enas om vilket pipelinesteg som skulle kunna producera en SBOM och var resultaten kunde lagras.

**6. Vad är vi beroende av som skulle vara svårt att lämna?**
Lista produkter vars data eller arbetsflöde är djupt knutet till en leverantör. Fråga vad det skulle kosta att lämna och hur ni skulle börja. Facilitatorn kan registrera svaret som underlag för förnyelseplanering.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam väljer verktyg och bibliotek dagligen. De bör använda den godkända katalogen där den tjänar dem, föreslå tillägg med en kort notis och låta pipelinen generera SBOM:er och flagga licensproblem. De behöver snabba svar: en tydlig policy om vanliga licenser och en väg att fråga om ovanliga. Ett team som ser sina egna plats- och utgiftsdata städar upp utan att bli tillsagt.

### Service- och driftteam

Driftteam driver upptäckt, hanterar åtkomst och tar emot förnyelser och revisioner. De bör stämma av användningsdata mot rättigheter, ta tillbaka oanvända platser enligt schema och hålla avtalsregistret aktuellt. De bär också supportbördan av ohanterade verktyg, vilket är ett bra skäl att föra in användbara under hantering.

### Ledning och styrning

Ledare vill undvika oplanerad kostnad och juridisk exponering utan att sakta ner team. De bör finansiera automatiseringen, be om de oberoende belägg som ligger bakom påståenden om licensposition och hålla juridik och upphandling med i bilden. Styrningen bör förvänta sig att förnyelser granskas i tid och att policyn för öppen källkod tillämpas i pipelinen.

### Kunder och användare

Användare vill att verktyget de behöver ska fungera första gången, utan lång väntan. De märker när åtkomst försvinner utan förvarning eller när två verktyg gör samma jobb. De bör få veta när platser kommer att tas tillbaka, få en lätt väg att be om åtkomst och rådfrågas när ett verktyg byts ut.

## I praktiken: ett exempel från tjänstehantering

En regional nyhetsorganisations teknikgrupp stöder 900 anställda och driver en publiceringsplattform med ungefär 40 tjänster. Siffrorna nedan är illustrativa.

Ekonomichefen frågar varför programvarukostnaderna har vuxit snabbare än antalet anställda. Programvarutillgångschefen samlar in data. Rättighetsregistren täcker 61 produkter. Inloggningsloggar och leverantörsrapporter visar att designpaketet har 220 platser och 140 aktiva användare de senaste 90 dagarna, en utnyttjandegrad på 64 procent, där oanvända platser kostar ungefär lika mycket som en ingenjörs lön. Utläggsdata visar 37 applikationer som inte finns i katalogen, mest samarbets- och analysverktyg som köpts av team. Tre av de största förnyelserna hade uppsägningsdatum som passerade utan en användningsgranskning.

Teamet gör fyra ändringar med produktteamen. En regel för återtagande av platser tar bort åtkomst efter 90 dagar utan användning, med en begäran med ett klick för att återställa den. En katalogsida listar godkända verktyg, deras kostnad och en ägare, med en tvådagarsväg för att föreslå ett nytt verktyg. Förnyelsegranskningar börjar 100 dagar före uppsägningsdatumet, med en checklista över utnyttjande, alternativ och teamets återkoppling. Publiceringsplattformens byggpipeline genererar nu en SBOM vid varje release, och en licensskanning flaggar komponenter med okända eller begränsade licenser för granskning av juridik.

Tre månader senare är utnyttjandet av designpaketet 86 procent efter att 60 platser tagits tillbaka, och en förnyelse omförhandlas till ett lägre antal platser. Antalet ej sanktionerade applikationer faller från 37 till 24, när teamet lägger till fyra användbara verktyg i katalogen och avvecklar dubbletter. SBOM-täckningen är 70 procent av produktionstjänsterna. Skanningen hittar en komponent med okänd licens i en sällan använd tjänst, som juridik granskar och teamet ersätter. En leverantör begär en licensverifiering för en annan produkt, och registren som tas fram för revisionen stämmer, med en korrigering. Chefen ber om ett löfte om 100 procents utnyttjande, och programvarutillgångschefen förklarar att en frisk siffra lämnar visst utrymme för nyanställda och förändringar, och hon föreslår ett intervall som riktlinje, inte som mål. Beslutet registreras.

## Agilitet, AI, automatisering och analys

### Agilitet

Gör det lätt för team att välja verktyg genom en kort, synlig process och granska användning med intressenter regelbundet. Varningen är att en sträng godkännandeprocess driver människor till ej sanktionerade verktyg.

### AI

AI-tjänster tillför nya licensmodeller, baserade på platser, tokens eller användning, och nya skyldigheter kring data och modellvillkor. Följ licensutnyttjande och kostnad per aktiv användare för AI-verktyg och para dem med en nyttokontroll från användare. Varningen är att användningsbaserad prissättning kan växa obemärkt, så sätt larm och ägare.

### Automatisering

Samla in rättighets- och användningsdata automatiskt och generera programvarustycklistan i pipelinen. Mät automatiseringen på täckning och falska positiva. Varningen är att en stycklista som genereras men inte läses inte minskar risken.

### Analys

Visa effektiv licensposition och kostnad för hyllvärmare med datumet för datan. Beslutet detta ger underlag för är vad som ska förnyas, minskas eller släppas. Varningen är att licensregler är komplexa, så be en specialist om avtalstolkning.

## Branschperspektiv

**Startup.** Verktyg väljs snabbt och betalas med kort. Håll en lista på en sida över prenumerationer med ägare och förnyelsedatum, granska den kvartalsvis och använd gratisnivåer med avsikt. Var uppmärksam på licenser för öppen källkod innan du distribuerar programvara eller tar in investeringar, eftersom investerare kan fråga.

**Småföretag.** En handfull produkter står för det mesta av kostnaden. Följ antalet platser för hand, sätt kalenderpåminnelser för förnyelser och be leverantörer om användningsrapporter. Se upp för prenumerationer som förnyas automatiskt och för licenser knutna till en person som slutat.

**Storföretag.** Komplexa avtal, fusioner och många affärsenheter gör rättighetsregister svåra. Investera i en datamodell som håller räkneenheter, automatisera upptäckts- och identitetsflöden och ge juridik och upphandling en plats i pipelinen för policyn om öppen källkod. Räkna med leverantörsrevisioner och förbered belägg i förväg.

**Offentlig sektor.** Upphandlingsregler, licensiering för allmännytta och krav på suveränitet formar valen. Dokumentera skälen för inköp, behåll avtalsregister under den krävda perioden och överväg öppna standarder och utvägar som krav. Öppenhet om programvaruutgifter kan vara en lagstadgad skyldighet (se ämne 8.4, Mätetal för leverantörer och avtal).

## Affärscase: motiv, ROI och TCO

Kostnaderna är tiden att bygga rättighetsregistret, verktyg för användnings- och sammansättningsanalys och insatsen att granska förnyelser. Vissa verktyg är redan licensierade som en del av identitets- eller slutpunktsplattformar. Den rutinmässiga kostnaden är några timmar i månaden för ett litet bestånd och mer för ett stort. Att automatisera återtagande och SBOM-generering sänker den.

Avkastningen kommer från undvikna utgifter och undvikna överraskningar. Oanvända platser är direkta besparingar vid förnyelse. Tidiga förnyelsegranskningar låter dig förhandla utifrån kunskap. Att känna dina beroenden förkortar svaret på sårbarheter och licensfrågor. Undvik att citera branschprocent för besparingar som du inte kan spåra. Mät din egen baslinje: oanvända platser gånger enhetskostnad, antalet förnyelser som granskats sent, tiden att besvara "vilka tjänster använder den här komponenten" och kostnaden för eventuella tidigare revisionsfynd. Ta med programmets egen kostnad och räkna undvikt juridisk exponering bara där du kan beskriva en specifik risk som minskats. De följande ämnena om kostnad tar den ekonomiska synen längre (se ämne 7.5, Tjänstekostnad och enhetsekonomi).

## Antimönster och fallgropar

- **Att räkna i fel enhet.** Ett platsantal för en licens såld per kärna vilseleder. Registrera enheten.
- **Att behandla leverantörens rapport som hela sanningen.** Kombinera den med dina egna loggar.
- **Att blockera verktyg som standard.** Team går runt blockeringen. Gör den godkända vägen snabb.
- **Att ta tillbaka utan väg tillbaka.** Användare förlorar förtroende. Gör återställning lätt och snabb.
- **Att granska förnyelser efter uppsägningsdatumet.** Hävstången är borta. Börja tidigt.
- **Att skanna licenser och ignorera resultaten.** En skanning utan policy och beslutsägare är brus.
- **Att tolka licenser i leveransteamet.** Svåra fall hör hemma hos juridik.
- **Att behandla SBOM:er som pappersarbete.** Om ingen frågar mot dem förfaller de. Använd dem i beredskapsövningar.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Rättigheter och användning | Avtal i e-post; inga användningsdata | Register för huvudprodukter; enstaka användningskontroller | Rättighetsregister med räkneenheter; användning ur identitets- och leverantörsdata | Licensposition och utnyttjande granskas månadsvis; platser tas tillbaka automatiskt | Användning och utgifter delas med team; köp- och användningsdata flödar mellan leverantörer och organisationen |
| Väg för införande | Team köper det de gillar | En lista över godkända verktyg | Snabb katalogväg med ägare och granskningskriterier | Ej sanktionerade applikationer följs och absorberas eller avvecklas | Verktygsval samdesignas med team; gemensamma tjänster återanvänds över organisationen |
| Komponenter och beroenden | Okänt | Manuella komponentlistor för vissa tjänster | SBOM genereras vid release; licenspolicy överenskommen med juridik | Täckning följs; undantag granskas; beredskapsövningar körs | SBOM:er och policy delas med leverantörer och kunder; utvägar planeras |

## Checklista

- [ ] Varje betald produkt eller produkt som bär skyldigheter har ett rättighetsregister med enhet, kvantitet, löptid och ägare.
- [ ] Användning kommer från minst två källor, jämförda månadsvis för nyckelprodukter.
- [ ] Återtagande av platser har en regel, ett besked och en lätt väg tillbaka.
- [ ] En katalog över godkända verktyg finns med en snabb väg för att föreslå ett nytt verktyg.
- [ ] Utläggs- och identitetsdata kontrolleras för ej sanktionerade applikationer.
- [ ] Förnyelsegranskningar börjar minst 90 dagar före uppsägningsdatumet.
- [ ] SBOM:er genereras och lagras för varje release av produktionstjänster.
- [ ] En licenspolicy överenskommen med juridik flaggar undantag i pipelinen.
- [ ] Leverantörsutvägar är registrerade för viktiga produkter.
- [ ] Kontakter inom juridik och upphandling för revisioner är namngivna och kända för team.

## AI-prompter

**Bygg en mall för rättighetsregister.**

```text
Draft a template for recording software entitlements for [type of organization],
covering these product types: [licensed, SaaS, open-source, built]. Fields should
include counting unit, quantity, term, price, notice date, restrictions, owner,
usage source, and exit notes. Suggest how to fill each field from existing
sources: [list]. Do not interpret any license terms. List your assumptions and
the fields that need legal or procurement input.
```

**Förbered en förnyelsegranskning.**

```text
We have a renewal for [product] with a notice date of [date]. Facts: entitled
[number] [units], active use [number] in the last 90 days, annual cost
[amount], and team feedback [summary]. Draft a one-page renewal review with
questions to ask, options (renew as is, reduce, replace, renegotiate), and the
information we still need. Do not invent market prices. List your assumptions.
```

**Utforma en regel för återtagande av platser.**

```text
Propose a seat reclamation policy for [product] used by [number] people in
[type of organization]. Include the inactivity window, notice to users, how
to restore access, exceptions (for example leave or seasonal use), and how to
measure whether it helps without annoying users. Context: [tools available].
List your assumptions and risks.
```

**Gör triage av ett resultat från licensskanning.**

```text
Our scan of [service] found these components and licenses: [paste list with
license identifiers]. Our policy: approved [list], review needed [list], not
permitted [list]. Sort the components into those three groups, flag unknown or
ambiguous cases, and suggest what to ask legal for each flagged item. Do not
give legal conclusions. List your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett mått på programvarutillgångar eller licenser.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för programvarumått anger sin räkneenhet, sin manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- Jämför rättigheter med faktisk användning, räknade i licensens egen enhet.
- Gör den godkända vägen till den snabba vägen, så att team inte behöver dölja det de använder.
- Granska användning före uppsägningsdatum för förnyelser och ta tillbaka oanvända platser enligt en synlig regel.
- Generera SBOM:er i pipelinen och flagga licenser mot en policy överenskommen med juridik.
- Håll juridik och upphandling involverade i tolkning och revisioner.
- Ge team insyn i sin egen användning och kostnad.

## Referenser och vidare läsning

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. ISO/IEC 19770-3, *Information technology: IT asset management: Part 3: Entitlement schema*, International Organization for Standardization.
3. National Telecommunications and Information Administration, *The Minimum Elements For a Software Bill of Materials (SBOM)*, United States Department of Commerce, 2021.
4. ISO/IEC 5962, *Information technology: SPDX Specification*, International Organization for Standardization, 2021.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Software asset management](https://en.wikipedia.org/wiki/Software_asset_management).
8. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
9. Wikipedia, [Software license](https://en.wikipedia.org/wiki/Software_license).
10. Wikipedia, [Software as a service](https://en.wikipedia.org/wiki/Software_as_a_service).
11. Wikipedia, [Open-source software](https://en.wikipedia.org/wiki/Open-source_software).
12. Wikipedia, [Copyleft](https://en.wikipedia.org/wiki/Copyleft).
13. Wikipedia, [Software bill of materials](https://en.wikipedia.org/wiki/Software_bill_of_materials).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
16. Wikipedia, [Software composition analysis](https://en.wikipedia.org/wiki/Software_composition_analysis).
17. Wikipedia, [Software audit](https://en.wikipedia.org/wiki/Software_audit).
