# Mätetal för releaser och driftsättning

**Att driftsätta kod och att släppa den till användare är olika händelser med olika risker, så mät dem separat, räkna var och en enligt en skriven regel och läs frekvens, ledtid, batchstorlek och flaggstädning tillsammans i stället för att fira någon enskild siffra.**

## Översikt och motiv

Många team använder orden "driftsättning" och "release" som om de betydde samma sak. Det gör de inte, och skillnaden är den mest användbara idén i det här ämnet. En **driftsättning** är handlingen att lägga en version av programvaran i en miljö, vanligen produktion, så som det beskrivs i artikeln om [programvarudriftsättning](https://en.wikipedia.org/wiki/Software_deployment). En **release** är det ögonblick en ändring blir tillgänglig för sina avsedda användare, ett beslut som [releasehantering](https://en.wikipedia.org/wiki/Release_management) finns för att styra. När de två sker tillsammans är en driftsättning en release och ett tal beskriver båda. När de skiljs åt kan teamet driftsätta ofta och tyst och släppa med avsikt.

Åtskillnaden spelar roll eftersom de två händelserna bär olika risker. En driftsättning bär teknisk risk: det nya bygget kanske inte startar, kan bryta ett beroende eller kan behöva en återställning. En release bär verksamhets- och användarrisk: ändringen kan förvirra kunder eller kan behöva landa på ett överenskommet datum. Team som kopplar ihop de två händelserna accepterar båda riskerna på en gång, vilket driver dem mot stora batchar av ändring som släpps sällan. Team som skiljer dem åt tar den tekniska risken i små steg och användarrisken i kontrollerade steg.

Det främsta verktyget för åtskillnad är [funktionsomkopplaren](https://en.wikipedia.org/wiki/Feature_toggle), också kallad funktionsflagga: en brytare i konfigurationen som slår på eller av ett beteende utan en ny driftsättning. Närliggande tekniker inkluderar [kanarieutrullningen](https://en.wikipedia.org/wiki/Canary_release), som först exponerar en ändring för en liten andel trafik, och [blågrön driftsättning](https://en.wikipedia.org/wiki/Blue-green_deployment), som håller två produktionsmiljöer och växlar trafik mellan dem. Alla låter dig besvara två separata frågor: körs den nya versionen säkert, och vem ska se det nya beteendet och när.

Termerna nedan återkommer i det här ämnet.

- En **release** är en version eller uppsättning ändringar som gjorts tillgänglig för användare.
- En **driftsättning** är förflyttningen av en version till en miljö. ITIL 4 namnger en praktik för detta, driftsättningshantering.
- En **mörk lansering** (dark launch) är en driftsättning vars nya beteende är avstängt för användare.
- En **stegvis utrullning** (progressive rollout) är en release som vidgar exponeringen i steg, till exempel 1 procent, 10 procent och sedan alla.
- En **batch** är den uppsättning ändringar som levereras tillsammans i en driftsättning eller release. Batchstorlek är antalet ändringar, eller mängden ändring, i den.
- **Releaseledtid** är den förflutna tiden från en angiven startpunkt tills ändringen är tillgänglig för sina användare. Ditt team skriver ned startpunkten, eftersom flera är i vanligt bruk.
- En **percentil** är ett värde under vilket en angiven andel av observationerna faller. Den 85:e percentilen av releaseledtid är talet som 85 procent av releaserna slår.

De agila och ITIL-baserade synsätten möts här. Ett agilt team som följer [kontinuerlig leverans](https://en.wikipedia.org/wiki/Continuous_delivery) vill att varje ändring ska kunna släppas när som helst och behandlar releasen som ett verksamhetsbeslut som fattas skilt från den tekniska handlingen. En ITIL-utövare ser releasehantering, driftsättningshantering och ändringsmöjliggörande som praktiker som planerar, schemalägger och styr förflyttningen av ändring in i levande användning. De två synsätten krockar när releasehantering förstås som en kalender av stora händelser. De passar ihop när praktiken förstås som förmågan att släppa säkert på begäran, med kontrollerna inbyggda i pipelinen och flaggorna.

Det här ämnet upprepar inte definitionerna av de fem leveransprestationsmåtten från DORA-forskningsprogrammet (se ämne 2.8, DORA-mätetal), inte heller måtten för misslyckande och omarbete efter en release (se ämne 4.4, Misslyckade ändringar och omarbete) eller volymen och godkännandet av ändringar (se ämne 4.3, Mätetal för ändringsmöjliggörande). Det lägger till det de ämnena lämnar öppet: hur man räknar releaser som skilda från driftsättningar, hur länge en färdig ändring väntar innan användare får den, hur stora batcharna är och om flaggorna som gör åtskillnaden möjlig hålls snygga.

Slutligen är release- och driftsättningsantal frestande tal för en ledningsinstrumentpanel, och [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller genast (se ämne 1.2, Goodharts lag och mätetalens psykologi). Ett antal driftsättningar stiger när ändringar delas upp i triviala bitar. Ett antal releaser stiger när en etikett ändras. Varje mätetal nedan kommer därför med det sätt det böjs på och skyddsräcket som fångar böjningen.

## Nyckelprinciper

- **Driftsättning och release är två händelser.** Mät dem separat varhelst arkitekturen tillåter det, och säg tydligt var de fortfarande är en händelse.
- **Räkna enligt en skriven regel.** En driftsättning räknas när en namngiven miljö fick en namngiven version med ett lyckat resultat. En release räknas när de avsedda användarna kan nå ändringen. Skriv regeln en gång och tillämpa den på samma sätt varje gång.
- **Beskriv en tjänst, inte en person.** Antal tillhör en tjänst och dess team, aldrig en individ.
- **Mät väntan, inte bara arbetet.** Releaseledtid innehåller ofta dagar av väntan på ett fönster, ett godkännande eller ett beslut. Väntan är där förbättringen oftast bor.
- **Små batchar är hävstången.** Frekvens och storlek är två vyer av samma sak. Para varje antal med ett mått på hur mycket ändring varje release bar.
- **Flaggor är lager med en bärkostnad.** En flagga som lever för länge blir död kod och en källa till fel, så följ flaggans ålder lika noga som flaggtäckningen.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Driftsättningsfrekvens | Hur ofta en tjänst får en lyckad driftsättning i produktion | Antal lyckade produktionsdriftsättningar av tjänsten under perioden / dagar i perioden; driftsättningar till test- eller stagingmiljöer, misslyckade eller återställda driftsättningar och omdriftsättningar av ett oförändrat bygge utesluts; enbart konfigurationsdriftsättningar räknas i en separat serie | Driftsättningar per dag eller per vecka | Händelselogg från driftsättningspipelinen | Driftsättningshantering | Kontinuerlig leverans; att leverera ett fungerande inkrement | Veckovis |
| Releasefrekvens | Hur ofta användare får en ändring de kan nå | Antal releasehändelser under perioden / dagar i perioden; en releasehändelse är det ögonblick en ändring, eller en grupp ändringar, blir nåbar för sina avsedda användare (en flagga påslagen för alla användare, det sista steget i en stegvis utrullning eller en driftsättning av en ändring utan flagga); en mörk lansering, en utrullning som stoppats vid ett delsteg och en flaggändring som bara påverkar interna användare utesluts | Releaser per vecka eller per månad | Flaggtjänstens revisionslogg sammanfogad med pipelineloggen och releasekalendern | Releasehantering | Release i slutet av varje inkrement; ett potentiellt leveransbart inkrement gjort tillgängligt | Veckovis, granskas månadsvis |
| Releaseledtid | Hur länge en färdig ändring väntar innan användare kan nå den | Klockan startar när ändringen slås ihop med huvudlinjen och har klarat sina automatiska kontroller (eller, om ditt team skriver det så, vid första incheckningen) och stoppar när ändringen släpps enligt definitionen ovan; redovisa medianen och 85:e percentilen av ändringar som släppts under perioden; ändringar som ännu inte släppts utesluts och redovisas som en ålder på väntande arbete | Timmar eller dagar | Versionshantering sammanfogad med pipelinen och flaggornas revisionslogg | Releasehantering; driftsättningshantering | Ledtid från klart till levererat; ledtid till kund | Veckovis, granskas månadsvis |
| Glapp mellan driftsättning och release | Hur länge driftsatt kod förblir mörk innan användare kan nå den | Klockan startar när ändringen driftsätts i produktion och stoppar när den släpps; redovisa medianen och 85:e percentilen; ändringar som släpps i samma ögonblick som driftsättningen har ett glapp på noll och ingår; ändringar som driftsatts och senare tagits bort utan release utesluts och räknas separat | Timmar eller dagar | Pipelineloggen sammanfogad med flaggornas revisionslogg | Releasehantering; driftsättningshantering | Mörk lansering; att skilja driftsättning från release | Månadsvis |
| Releasebatchens storlek | Hur mycket ändring som levereras tillsammans i en release | Median och 85:e percentil av antalet sammanslagna ändringar (pull requests eller arbetsobjekt) per release under perioden; ändringsenheten är nedskriven; varje ändring räknas en gång, i den release som gjorde den nåbar | Ändringar per release | Versionshantering och ärendehanteringssystemet sammanfogade med releasehändelsen | Releasehantering; ändringsmöjliggörande | Små batchar; vertikala skivor av arbete | Per release, granskas månadsvis |
| Funktionsflaggtäckning | Andel användarsynliga ändringar som släpptes bakom en flagga | Användarsynliga ändringar som släppts under perioden som hade en flagga vid releasen / alla användarsynliga ändringar som släppts under perioden; infrastrukturändringar och felrättningar som inte kan flaggas utesluts, och regeln för "användarsynlig" är nedskriven | Procent | Flaggtjänst sammanfogad med ärendehanteringssystemet och releaseloggen | Releasehantering; ändringsmöjliggörande | Stegvis leverans; experimentdriven utveckling | Månadsvis |
| Antal inaktuella flaggor | Hur många flaggor som överlevt sitt syfte | Antal releaseflaggor som fortfarande finns i kod eller konfiguration mer än ett angivet antal dagar efter att ändringen de skyddar nått alla användare; permanenta driftflaggor (nödbrytare, behörighetsflaggor) märks och utesluts; åldersgränsen är nedskriven per flaggtyp | Flaggor, och medianåldern på releaseflaggor i dagar | Flaggtjänstens inventering sammanfogad med kodsökning | Releasehantering; kunskapshantering | Städning av teknisk skuld; klarkriteriet att ta bort en flagga | Månadsvis |

## Rekommendationer

### Skriv ned vad som räknas som en driftsättning och som en release

**Definiera båda händelserna innan du räknar någondera.** En driftsättning räknas när en namngiven version nådde en namngiven miljö och pipelinen rapporterade framgång. En release räknas när de avsedda användarna kan nå ändringen, vilket för en flaggad ändring är ögonblicket då flaggan slås på för dem och inte ögonblicket då koden anlände. Ange undantagen i samma mening: testmiljöer, återställningar, omdriftsättningar av ett oförändrat bygge och exponering enbart internt.

### Redovisa de två serierna sida vid sida

**Visa driftsättningsfrekvens och releasefrekvens i ett diagram.** Där linjerna sammanfaller kopplar tjänsten fortfarande ihop de två händelserna. Där driftsättningar ligger långt före releaser har teamet börjat skilja dem åt, och avståndet mellan linjerna är ett tecken på förmågan. Ett enda kombinerat tal döljer detta och låter ett team göra anspråk på en hög frekvens som användare aldrig ser.

### Mät releaseledtid från en angiven start till användaren

**Välj klockstarten en gång och behåll den.** Att starta vid första incheckningen visar hela resan, och att starta vid sammanslagning med huvudlinjen isolerar releasepipelinen och dess godkännanden. Båda är godtagbara om det anges i diagrammet och aldrig ändras i tysthet. Avsluta klockan vid releasen, inte driftsättningen, annars slutar måttet mäta vad användaren väntade på.

### Följ batchstorlek bredvid frekvens

**Para varje frekvens med en storlek.** Ett team kan höja sitt driftsättningsantal genom att skära en ändring i skivor som inte är oberoende användbara, och antalet stiger medan det verkliga flödet förblir detsamma. Median och 85:e percentil av batchstorlek visar om skivorna är verkliga. Små batchar är lättare att granska, testa och vända tillbaka, och det är den nytta frekvensen är ett ersättningsmått för.

### Behandla stegen i en stegvis utrullning som händelser

**Registrera varje steg av en utrullning med en tidsstämpel.** En utrullning som går från 1 procent till 10 procent till alla ger tre tidsstämplar, och var och en är en chans att stoppa. Fånga steget, exponeringsandelen och resultatet av hälsokontrollen som tillät nästa steg. Det låter dig skilja en utrullning som pausats för en verklig signal från en som stannat av.

### För ett flaggregister med ägare och utgångsdatum

**Ge varje releaseflagga en ägare, ett syfte och ett planerat borttagningsdatum vid skapandet.** Flaggtjänsten eller ett enkelt register kan hålla dessa. Granska registret månadsvis och beräkna antalet inaktuella flaggor. En flagga som lämnas på efter full utrullning är död kod som fortfarande förgrenar. Behandla borttagningen som en del av klart för ändringen.

### Märk flaggor efter typ

**Skilj tillfälliga releaseflaggor från permanenta driftflaggor.** Nödbrytare och behörighetsflaggor är permanenta till sin natur, medan releaseflaggor bör tas bort efter full utrullning. Att blanda typerna gör antalet inaktuella brusigt och inbjuder team att radera en brytare som någon behöver under en incident. Kräv typen när flaggan skapas.

### Länka releaser till incident- och ändringsposter

**Registrera releaseidentifieraren på incidenten och ändringen.** En releasehändelse bör kunna spåras från incidentverktyget, så att orsaken till en incident kan kopplas till ändringen som släpptes, oavsett om den driftsattes förra veckan eller slogs på i morse. Utan länken tillskriver instabilitetsmått misslyckanden till driftsättningsdatumet och missar misslyckanden orsakade av en flaggändring. Flaggändringar i produktion är ändringar i ITIL:s mening och bör vara synliga för ändringsmöjliggörande, även när de är förhandsgodkända som standardändringar (se ämne 4.3, Mätetal för ändringsmöjliggörande).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Driftsättningsfrekvens | Att dela upp en ändring i triviala driftsättningar; att omdriftsätta oförändrade byggen; att räkna driftsättningar till staging; att räkna enbart konfigurationsdriftsättningar med huvudserien | Releasebatchens storlek och andelen driftsättningar med en användarsynlig ändring; den separata konfigurationsserien; andel misslyckade ändringar bredvid |
| Releasefrekvens | Att byta etikett på driftsättningar till releaser; att räkna en flagga påslagen för intern personal som en release; att släppa tomma eller kosmetiska ändringar för att nå ett mål; att räkna varje steg i en utrullning som en separat release | En skriven definition av release; stickprov av releaser varje kvartal kontrollerade mot användarsynliga ändringar; batchstorlek och antal kundvända ändringar |
| Releaseledtid | Att starta klockan senare, till exempel vid godkännande i stället för sammanslagning; att utesluta ändringar som väntat länge som "blockerade"; att släppa en trivial ändring först för att dra ner medianen; att avsluta klockan vid driftsättning | 85:e percentilen och åldern på den äldsta väntande ändringen; en fast skriven start; en kvartalsvis granskning av de långsammaste 10 procenten av ändringar |
| Glapp mellan driftsättning och release | Att slå på en flagga för en symbolisk användare för att registrera releasen tidigt; att lämna länge mörk kod utanför stickprovet genom att kalla den "inte en release"; att radera mörk kod för att undvika ett långt glapp | Exponeringsandel vid release (ett tröskelvärde för vad som räknas som släppt); antal ändringar som driftsatts och tagits bort utan release; antal inaktuella flaggor |
| Releasebatchens storlek | Att dela upp arbete i konstgjorda pull requests; att slå ihop orelaterade ändringar i en för att sänka antalet releaser; att bara räkna den stora ändringen i ett knippe | Median ändringsstorlek i rader eller filer som sammanhangsmått; granskning av ett stickprov av releaser för orelaterad buntning; frekvens bredvid storlek |
| Funktionsflaggtäckning | Att lägga till flaggor på triviala ändringar för att höja graden; att bara flagga de säkra ändringarna och leverera riskfyllda oflaggade; att skapa en flagga utan något praktiskt sätt att stänga av den | Testresultat med flaggan av för ett stickprov av flaggor; antalet inaktuella flaggor; incidentorsaker som saknade flagga |
| Antal inaktuella flaggor | Att byta etikett på releaseflaggor till permanenta för att lämna det inaktuella antalet; att radera flaggposten medan den lämnas i koden; att förlänga utgångsdatum utan granskning | En periodisk kodsökning mot registret; granskning av varje ändring av flaggtyp; åldern på den äldsta releaseflaggan |

En sund avläsning visar driftsättningar som ligger före releaser för tjänster som använder flaggor, med ett måttligt glapp, en liten och stadig batchstorlek och en 85:e percentil av ledtid som inte ligger långt över medianen. Flaggtäckningen är hög för riskfyllda ändringar, och antalet inaktuella flaggor är lågt eller fallande. En avläsning som ser för bra ut, till exempel en hög frekvens tillsammans med växande batchstorlekar eller ett noll inaktuella flaggor med ett svällande antal permanenta flaggor, förtjänar en stickprovsrevision före något firande.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Driftsätt kontinuerligt och släpp via flagga | Liten teknisk risk per driftsättning; releasetidpunkten blir ett verksamhetsval; snabb avstängning | Kräver flaggdisciplin och verktyg; lägger till kodvägar som måste testas och tas bort |
| Koppla ihop driftsättning och release | Enkelt att förklara; en händelse att räkna; ingen flaggskuld | Varje release bär både teknisk risk och användarrisk, vilket uppmuntrar stora batchar som släpps sällan |
| Schemalagt releasetåg | Förutsägbart för support och tillsynsmyndigheter | Ändringar väntar på nästa tåg; antalet speglar kalendern, inte förmågan |
| Stegvis utrullning per procent | Begränsar effekten av en dålig release; ger belägg vid varje steg | Kräver god telemetri och en hälsokontroll; blandade versioner kan köra sida vid sida en tid |
| Räkna både driftsättningar och releaser | Visar åtskillnad och väntan | Kräver att en flaggrevisionslogg eller releaseposter sammanfogas med pipelinen |

En tjänst som ännu inte kan skilja driftsättning från release, till exempel en mobilapplikation som distribueras genom en appbutiks granskning, bör mäta det den kan: releasefrekvens, releaseledtid och batchstorlek, med butiksgranskningens tid redovisad som en separat väntan.

## Frågor att diskutera med teamet

**1. Använder vi orden "driftsättning" och "release" för samma händelse, och stämmer det med vad som sker?**
Be tre personer beskriva den senaste ändringen som gick live och notera när koden anlände och när användare först kunde använda den. Facilitatorn bör hjälpa gruppen enas om en mening för varje term och avgöra vilken av de två händelserna varje befintligt panelnummer mäter.

**2. Vad är den längsta tid en färdig ändring har väntat på release, och varför?**
Ta fram den äldsta sammanslagna ändringen som användare fortfarande inte kan nå. Följ dess väg från sammanslagning till nu och skriv ned varje väntan längs vägen.

**3. Om vårt driftsättningsantal fördubblades, vad skulle vi kontrollera innan vi kallade det goda nyheter?**
Bjud in gruppen att nämna sätt antalet kan stiga utan att mer värde når användare. Titta på batchstorlek, andelen driftsättningar med en användarsynlig ändring och fel- och omarbetssiffrorna. Facilitatorn bör notera vilka av dessa kontroller som redan finns på panelen och vilka som behöver läggas till innan någon sätter ett mål.

**4. Vilka av våra flaggor skulle vi vara rädda att radera, och vad säger det oss?**
Gå igenom flaggregistret och välj de tre äldsta. Fråga vem som äger var och en, vad den skyddar och vad som skulle hända om den togs bort. Rädsla för radering betyder oftast ett saknat test, en saknad ägare eller en saknad anteckning om syfte. Enas om ett borttagningsdatum för minst en och om kontrollen som skulle göra borttagning säker.

**5. Vem avgör när en ändring släpps, och har de den information de behöver?**
Där release är ett verksamhetsval behöver den som gör det se utrullningens tillstånd, hälsosignalerna och supportberedskapen. Fråga var de fakta finns i dag och hur snabbt beslutsfattaren kan vända en release.

**6. Vilken release förra kvartalet gick sämst, och vilket mått skulle ha varnat oss?**
Välj en release som orsakade besvär och läs tidslinjen tillsammans. Fråga om batchen var stor, glappet långt, utrullningen hade steg och om en flagga kunde ha begränsat skadan. Välj ett mått att lägga till eller ett tröskelvärde att skärpa som följd.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam använder dessa mått för att se om deras pipeline och flaggor verkligen ger dem kontroll över exponering. De mest användbara vyerna är glappet, batchstorleken och åldern på den äldsta väntande ändringen, eftersom var och en pekar på något teamet kan ändra.

### Service- och driftteam

Drift- och supportteam bryr sig om vad som ändras i produktion och när. Releasehändelser och flaggändringar behöver vara synliga för dem, helst med en releaseidentifierare på varje incident. Stegvis utrullning och snabb avstängning minskar antalet incidenter som behöver en fullständig återställning, och måtten hjälper driftteam att be om de kontroller som gör deras arbete lugnare.

### Ledning och styrning

Ledare bör be om trender och spridning för varje tjänst, och om svaret på en enkel fråga: hur lång tid tar det för en färdig ändring att nå användare, och hur säkert. Ett mål för driftsättningsfrekvens över team inbjuder till uppdelning och omdöpning, så föredra mål för resultat som fördelningar av ledtid och för borttagande av kända väntor. Styrningen kan minska belastningen av releasegodkännanden genom att förhandsgodkänna flaggade ändringar med låg risk, så länge flaggornas revisionsspår är fullständigt (se ämne 4.3, Mätetal för ändringsmöjliggörande).

### Kunder och användare

Kunder ser releaser, inte driftsättningar. De bryr sig om att rättelser kommer snart, att nytt beteende inte överraskar dem och att en dålig ändring kan vändas snabbt. Ett team som skiljer de två händelserna åt kan ge kunder tidig åtkomst till en funktion, kan tillkännage ett datum det kan hålla och kan återställa en funktion utan att förlora resten. Para dessa mått med kundvända sådana (se ämne 5.3, Mätetal för tillgänglighet, och ämne 6.1, Mätetal för kundnöjdhet).

## I praktiken: ett exempel från tjänstehantering

En regional nätbutik driver en produktsökningstjänst som ägs av ett produktteam, med stöd av ett plattformsteam och servicedesken. Tjänsten driftsätts i produktion genom en pipeline och har en flaggtjänst som infördes för sex månader sedan. Alla siffror nedan är illustrativa.

Under det senaste kvartalet gjorde teamet 52 produktionsdriftsättningar, ungefär fyra i veckan. Releasefrekvensen, räknad som de ögonblick då en ändring blev nåbar för alla avsedda användare, var 11 under samma kvartal, ungefär en i veckan. Mediantiden för releaseledtid, från sammanslagning till release, var 9 dagar, med en 85:e percentil på 21 dagar. Medianglappet mellan driftsättning och release var 6 dagar. Mediannivån på releasebatchens storlek var 3 ändringar och den 85:e percentilen var 14. Flaggtäckningen för användarsynliga ändringar var 58 procent, och 17 releaseflaggor låg mer än 30 dagar förbi full utrullning.

Manipulationsrisken syns redan. Vissa driftsättningar var enbart konfiguration, och pipelinen räknade var och en som en driftsättning, så panelen visar nu en separat konfigurationsserie och den månatliga granskningen stickprovar 10 driftsättningar för en användarsynlig ändring. En regionchef ser driftsättningsantalet och ber teamet höja det för att matcha ett annat teams siffra. Teamledaren motsätter sig målet och tar i stället med hela uppsättningen tal till den månatliga granskningen. Granskningen finner att glappet är långt därför att releaser väntar på en veckovis genomgång för marknadsföring och support, att fyra av de 17 inaktuella flaggorna skyddar kodvägar som ingen har testat och att den 85:e percentilen av batchstorlek kommer från några få releaser som buntade orelaterade ändringar före ett helgfrys.

Beslutet, registrerat i beslutsloggen, har fyra delar. Support och marknadsföring ska delta i en kortare genomgång två gånger i veckan, så att releasebeslutet inte längre väntar på den veckovisa luckan. Varje releaseflagga får en ägare och ett borttagningsdatum, och de fyra otestade inaktuella flaggorna tas bort inom de närmaste två veckorna. Releaser som buntar orelaterade ändringar behöver ett angivet skäl i releasenotisen. Och teamet avböjer det gemensamma driftsättningsmålet och erbjuder i stället en delad vy av varje tjänsts fördelning av releaseledtid och flaggstädning. Ändringsansvarig går med på att behandla flaggade ändringar som klarar pipelinekontrollerna som standardändringar, med en granskning nästa kvartal. Nästa kvartal (illustrativt) faller mediantiden för releaseledtid till 5 dagar, antalet inaktuella flaggor faller till 6 och andelen misslyckade ändringar förblir stadig, så experimentet fortsätter.

## Agilitet, AI, automatisering och analys

### Agilitet

Att skilja driftsättning från release låter ett team leverera små ändringar kontinuerligt och släppa när intressenter är redo. Granska flaggstädning regelbundet. Varningen är att räkna driftsättningar belönar uppdelning av ändringar.

### AI

AI-stödd kodning kan höja driftsättningsantal och batchstorlekar. Para frekvens med återställningstid efter misslyckad driftsättning och antalet inaktuella flaggor och märk AI-stödda ändringar i datan. Varningen är att fler driftsättningar med mer omarbete inte är framsteg.

### Automatisering

Räkna driftsättningar och releaser ur pipelinehändelser och automatisera påminnelser om flaggstädning. Mät pipelinen på dess egen felgrad. Varningen är att manuella releaser utanför pipelinen försvinner ur datan.

### Analys

Visa frekvens med ledtid och batchstorlek samt glappet mellan driftsättning och release. Beslutet detta ger underlag för är var vägen till användare är långsam. Varningen är att definitioner av driftsättning skiljer sig mellan team.

## Branschperspektiv

**Startup.** En startup har ofta en enda tjänst och ett flaggbibliotek i koden, så driftsättning och release kan skiljas åt billigt. Håll ett enkelt register över flaggor med utgångsdatum och vänta på tillräcklig volym innan du litar på percentiler.

**Småföretag.** Ett småföretag kan driva paketerad eller inköpt programvara där leverantören styr releasen. De användbara måtten är tiden mellan leverantörens release och att verksamheten antar den, och batchen av ändringar som anländer tillsammans i en större version. Registrera leverantörens releasedatum och dina egna driftsättningsdatum så att väntan däremellan blir synlig.

**Storföretag.** Ett storföretag möter många tjänster med olika releasestilar, en central ändringsprocess och delade miljöer. Huvudarbetet är att enas om definitionerna av driftsättning och release över team och leverantörer och att hålla en sammanställning som respekterar skillnaderna. Använd spridning och trender för styrning och behandla flaggplattformen som en delad tjänst med en ägare.

**Offentlig sektor.** Releaser är ofta knutna till fasta datum, lagstiftning, upphandlingscykler eller försäkransportar, så releasefrekvensen kan vara låg av goda skäl. Driftsättningsfrekvens och glappet mellan driftsättning och release kan ändå visa hur mycket av risken som tagits tidigt och hur mycket som väntar på datumet. Redovisa väntan på externa portar separat från teamets egen pipelinetid.

## Affärscase: motiv, ROI och TCO

Motivet för dessa mått är att minska risken och fördröjningen mellan att slutföra en ändring och att leverera dess värde. Stora batchar som släpps sällan bär mer ändring per händelse, så ett misslyckande är svårare att diagnostisera och svårare att vända. Att skilja driftsättning från release ger teamet ett sätt att ta teknisk risk tidigt och i små mängder och att ta användarrisk med avsikt. Måtten visar om åtskillnaden är verklig och var ändring väntar.

Kostnaderna är måttliga. Att samla in driftsättnings- och releasehändelser kräver att pipelineloggen och flaggornas revisionslogg sammanfogas med versionshantering och ärendehanteringssystemet, vilket är en engångsintegration följd av enstaka underhåll (se ämne 1.5, Datakällor och instrumentering). Själva flaggpraxisen har löpande kostnader: plattformen eller biblioteket, registret, testning av båda vägarna för en flaggad ändring och städning av utgångna flaggor. Den främsta dolda kostnaden är flaggskuld, som antalet inaktuella flaggor håller synlig.

Avkastningen följer ett mönster som de flesta team kan observera i sin egen data. Kortare releaseledtid betyder en snabbare återkopplingsloop om huruvida en ändring hjälper användare. Mindre batchar betyder lättare diagnos och lättare vändning. Ett kortare glapp mellan driftsättning och release betyder mindre tid som färdigt arbete står orealiserat. Hitta inte på en siffra för värdet. Använd teamets egna exempel på ändringar som legat mörka i veckor och trenden i dess egna mått.

## Antimönster och fallgropar

- **Att sätta ett mål för driftsättningsfrekvens för varje team.** Det inbjuder till uppdelning och omdöpning. Sätt i stället resultatmål, till exempel en smalare fördelning av ledtid, och låt frekvensen följa.
- **Att behandla ett releasetåg som bevis på förmåga.** En fast kalender ger ett jämnt antal och döljer åldern på väntande arbete. Följ åldern på den äldsta sammanslagna ändringen som användare inte kan nå.
- **Att räkna konfigurationsändringar som driftsättningar i huvudserien.** Det blåser upp talet. Håll en separat serie och visa den bredvid huvudserien.
- **Att aldrig ta bort flaggor.** Koden ackumulerar döda grenar och otestade kombinationer. Ge varje releaseflagga en ägare och ett borttagningsdatum och behandla borttagning som en del av klart.
- **Att ändra flaggor i produktion utan en post.** En flaggändring är en ändring av produktionsbeteende. Skicka den till revisionsloggen och gör den synlig för ändringsmöjliggörande.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Definitioner och klockor | "Driftsättning" och "release" används utbytbart; var och en räknar olika | Några team skriver ned sina egna definitioner | En skriven definition av driftsättning och release, med klockor och undantag, i mätetalsregistret | Definitionsändringar loggas och markeras i diagram; stickprov kontrolleras varje kvartal | Definitioner revideras gemensamt med leverantörer och styrning när de slutar ge underlag för beslut |
| Åtskillnad av driftsättning och release | Varje driftsättning är en release | Vissa team använder flaggor eller stegvis utrullning för riskfyllda ändringar | Flaggor och stegvis utrullning är ett standardalternativ, med releasehändelser registrerade | Glapp, batchstorlek och utrullningssteg följs över tid och granskas | Releasetidpunkt samordnas över team och leverantörer för relaterade tjänster |
| Datainsamling | Antal sammanställs för hand ur ärenden och chatt | Pipelinedata för vissa tjänster; releaser registreras för hand | Driftsättningar, releaser och flaggändringar fångas automatiskt för de flesta tjänster | Datakvalitet (länkgrad, revision av stickprov) mäts och följs över tid | Händelser delas över team och leverantörer via överenskomna gränssnitt |
| Flaggstädning | Inget register | Informell lista i vissa team | Register med ägare, typ och utgångsdatum för varje releaseflagga | Antal inaktuella flaggor följs över tid; borttagning är en del av klart och kontrolleras | Flaggplattformen hanteras som en delad tjänst med automatiska utgångspåminnelser |
| Användning av siffrorna | Redovisas uppåt som ett enda antal | Team tittar på sina egna diagram då och då | Granskas månadsvis av det ägande teamet bredvid fel- och omarbetssiffrorna | Trender matar finansierad förbättring med ett skyddsräcke | Spridning och trender ger underlag för plattformsinvestering och ändringspolicy över organisationen |

## Checklista

- [ ] "Driftsättning" och "release" är definierade skriftligt, med klockhändelser och undantag för vardera.
- [ ] Driftsättningar till produktion fångas automatiskt från pipelinen, med testmiljöer uteslutna.
- [ ] Releasehändelser fångas från flaggornas revisionslogg, utrullningssteg eller releaseposter.
- [ ] Releaseledtid använder en angiven klockstart och redovisar medianen och 85:e percentilen.
- [ ] Glappet mellan driftsättning och release och releasebatchens storlek redovisas bredvid frekvens.
- [ ] Enbart konfigurationsdriftsättningar visas i en separat serie.
- [ ] Varje releaseflagga har en ägare, en typ och ett utgångsdatum i ett register.
- [ ] Inaktuella flaggor granskas månadsvis och deras borttagning är en del av klart.
- [ ] Releaseidentifierare förekommer på incident- och ändringsposter.
- [ ] Ett stickprov av driftsättningar och releaser revideras varje kvartal mot definitionerna.
- [ ] Ett förbättringsexperiment, knutet till den längsta väntan, pågår med ett granskningsdatum.

## AI-prompter

**Skriv utkast till definitioner av driftsättning och release för en tjänst.**

```text
I am defining release and deployment metrics for [service name]. Our tools are
[version control host, CI/CD system, flag service, issue tracker, ITSM tool].
Our release style is [continuous, weekly train, monthly, store-reviewed, or
other]. For deployment frequency, release frequency, release lead time,
deployment-to-release gap, release batch size, feature flag coverage, and stale
flag count, draft a definition that states where the clock starts and stops,
what is counted and excluded, the data source, and one ambiguity to resolve. Do
not invent benchmark values or claim our practice matches any published
performance band. List your assumptions and the questions I should answer to
finish the definitions.
```

**Kontrollera en releasemätetalsuppsättning efter manipulationsrisker.**

```text
Here is how we compute and report our release and deployment metrics:
[description of each metric, its data source, and how it is reported]. The
audience is [team, leadership, or governance body] and the targets, if any,
are [targets or none]. For each metric, list plausible ways the number could
be inflated, hidden, or distorted without real improvement, and suggest a paired
guardrail metric or practice that would catch it. Do not invent statistics. List
your assumptions and any information you would need to be more precise.
```

**Analysera en export av driftsättningar, releaser och flaggor.**

```text
I will paste a small export with these fields: [list fields, for example
deployment id, deployment time, result, change ids, flag name, flag on time,
exposure share, release time]. It covers [number] deployments and [number]
flags for [service name] between [start date] and [end date]. Compute the
median and 85th percentile of release lead time and of the deployment-to-release
gap, the batch size distribution, and the list of flags past [age limit] days
since full rollout, showing the counts behind each. Flag records with missing
links or suspicious timestamps. Do not extrapolate beyond the data or compare
the result with outside benchmarks. List your assumptions and the data quality
issues that limit the conclusions.
```

**Planera ett experiment med flaggstädning och releasevänta.**

```text
Our longest release wait is [description of the wait, with date range and
counts], and our flag register holds [number] release flags, of which [number]
are past their expiry date. Constraints are [constraints, for example regulated
releases, store review, shared test environment]. Propose three small
experiments of four to six weeks, each with a hypothesis, a way to observe the
effect, a guardrail metric, and a risk. Do not invent expected improvement
figures. List your assumptions and what we should check before starting.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta de relaterade ämnena om ändringar, releaser och incidenter och skyddsräcket som bör sitta bredvid varje releasemått.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en reviderad version av det här ämnet håller sina klockor, manipuleringsvektorer och korsreferenser konsekventa.

## Viktigaste slutsatser

- En driftsättning lägger en version i en miljö och en release gör en ändring nåbar för användare. Mät de två separat där du kan.
- Releaseledtid bör sluta vid releasen, med en angiven start, och redovisas som median och 85:e percentil.
- Glappet mellan driftsättning och release och batchstorleken visar om åtskillnaden är verklig, och de skyddar frekvensen mot uppdelning och omdöpning.
- Funktionsflaggor gör åtskillnad möjlig och bär en kostnad, så följ täckning och inaktuella flaggor med ägare och utgångsdatum.
- Räkna enligt skrivna regler, länka releaser till incidenter och ändringar och jämför en tjänst med dess egen historik i stället för med andra team.

## Referenser och vidare läsning

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
3. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
4. Hodgson, P., "Feature Toggles (aka Feature Flags)," martinfowler.com, 2017, https://martinfowler.com/articles/feature-toggles.html
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
7. Wikipedia, [Release management](https://en.wikipedia.org/wiki/Release_management).
8. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
9. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
10. Wikipedia, [Blue-green deployment](https://en.wikipedia.org/wiki/Blue-green_deployment).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
