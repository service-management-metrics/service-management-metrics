# Mätetal för tjänstekontinuitet

**En återställningsplan är en hypotes tills en övning har prövat den, så kontinuitetsmått bör räkna vad som faktiskt återställdes, hur snabbt och hur mycket data som kom tillbaka, och aldrig antalet planer på en hylla.**

## Översikt och motiv

De flesta incidentmått beskriver den vanliga dåliga dagen: en misslyckad driftsättning, en mättad databas, en bullrig granne. Tjänstekontinuitet beskriver den sällsynta, svåra dagen, när en region faller, ett datalager förstörs, en leverantör försvinner eller ransomware krypterar hela miljön. [Kontinuitetsplanering för verksamheten](https://en.wikipedia.org/wiki/Business_continuity_planning) är disciplinen att förbereda en organisation på att fortsätta leverera på godtagbara nivåer genom sådana händelser. I ITIL 4 kallas praktiken hantering av tjänstekontinuitet, och den är it-tjänstevyn av det större syftet (se motsvarande ämne i den medföljande *Service Management Guide*).

Två termer bär det mesta av tyngden. [Mål för återställningstid](https://en.wikipedia.org/wiki/Recovery_time_objective) (RTO) är den godtagbara tiden för att återställa en tjänst efter ett avbrott. [Mål för återställningspunkt](https://en.wikipedia.org/wiki/Recovery_point_objective) (RPO) är den godtagbara mängden dataförlust, uttryckt som ett tidsspann: ett RPO på en timme betyder att det är tolererbart att förlora den sista timmens skrivningar och inte mer. Båda kommer från en [verksamhetskonsekvensanalys](https://en.wikipedia.org/wiki/Business_impact_analysis) (BIA), metoden att identifiera vilka aktiviteter som spelar störst roll, vad som beror på vad och vad ett avbrott kostar. Målen är verksamhetsbeslut med ett pris, eftersom snävare mål kräver mer redundans, mer automatisering och mer övningstid.

Svårigheten är att ett mål är ett löfte om en framtida händelse som inte har inträffat. Det ärliga beläggen är ett test. Återställde teamet tjänsten inom RTO i den senaste övningen? Uppfyllde den återställda datan RPO? Var stegen i planen de steg teamet faktiskt tog? Ett kontinuitetsmått är därför mest en mätning av övningar, och mätningens kvalitet beror på hur realistisk övningen var.

Agila team och team inom site reliability engineering (SRE) tillför användbara vanor. Deras system ändras varje vecka, så en plan som skrivits en gång och arkiverats blir föråldrad inom månader. Det agila svaret är att hålla återställning som kod (till exempel med [infrastruktur som kod](https://en.wikipedia.org/wiki/Infrastructure_as_code)), öva ofta och behandla varje övning som en källa till backlogposter. [Kaosteknik](https://en.wikipedia.org/wiki/Chaos_engineering) och övningsdagar tillämpar samma idé i mindre skala: framkalla ett fel med avsikt, på ett kontrollerat sätt, och se vad som händer. SRE-synen beskrivs i Googles bok *Site Reliability Engineering*, och det bredare fältet sammanfattas i artikeln om [site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).

### Hur synsätten skiljer sig

- **ITIL-syn.** Hantering av tjänstekontinuitet är en praktik som sätter återställningsmål utifrån BIA, utformar planer och bevisar dem med tester. Dess resultat är planer, övningsrapporter och registrerade fynd. Standarden [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301) beskriver ett ledningssystem för kontinuitet i verksamheten. Per oktober 2026: kontrollera den aktuella utgåvan direkt om en kund eller tillsynsmyndighet kräver överensstämmelse.
- **Agil syn.** Återställningsförmåga är en produktegenskap i definitionen av klart. En berättelse som lägger till ett datalager är inte klar förrän dess återställningsväg har prövats.
- **SRE-syn.** Tillförlitlighetsarbete budgeteras och mäts. Failover, återställningsövningar och övningsdagar är schemalagt arbete med ägare och fynd som går in i backlogen.

Det här ämnet täcker sju mått: återställning mot tids- och datamål i tester, övningstäckning och aktualitet, återställningar från säkerhetskopior, stängning av fynd och plans aktualitet. Verkliga avbrott finns i mätetal för större incidenter (se ämne 3.4, Mätetal för större incidenter) och tillgänglighetsmått (se ämne 5.3, Mätetal för tillgänglighet). Mål uttryckta som användarvända mål finns i ämnet om indikatorer och budgetar (se ämne 5.2, SLI:er, SLO:er och felbudgetar). "Återställningstid efter misslyckad driftsättning" i DORA-forskningsprogrammet är en mycket mindre klocka (se ämne 2.8, DORA-mätetal). Grundorsaker som tester avslöjar hör till ämnena om problem och lärande (se ämne 4.1, Mätetal för problemhantering, och ämne 4.2, Mätetal för efteranalyser och lärande).

En **nivå** (tier) är en klass av tjänster grupperade efter hur snabbt de måste komma tillbaka. En **tabletop-övning** är en diskussionsbaserad genomgång utan systemändringar. En **övningsdag** (game day) är en praktisk övning där ett team framkallar eller simulerar ett fel och observerar responsen. Ett **fynd** är ett registrerat glapp mellan planen och vad som hände. **Plans aktualitet** är hur väl en plan speglar tjänsten som den ser ut i dag.

## Nyckelprinciper

- **Testa, påstå sedan.** Ett RTO eller RPO är validerat först av en återställning som faktiskt utförts och tidtagits. Redovisa målet och det senast visade resultatet sida vid sida.
- **Mät realism, inte bara framgång.** En återställning av en tom testdatabas som klarades på minuter säger lite om en återställning i produktionsstorlek. Registrera varje övnings omfång och förhållanden bredvid resultatet.
- **Dela in beståndet i nivåer och lägg insatsen efter nivå.** Kritiska tjänster får täta, realistiska tester. Tjänster på låg nivå får lättare kontroller. Ett enda frekvensmål för allt slösar insats eller missar risk.
- **Behandla fynd som övningens produkt.** Det värdefulla resultatet av en övningsdag är en stängd lista över glapp. Ett test utan fynd är antingen utmärkt eller för milt, och du bör ta reda på vilket.
- **Beskriv tjänster och scheman, aldrig individer.** Övningsresultat beskriver systemet och planen. Ingen rangordnas efter hur snabbt de återställde en övning.
- **Visa varje övning som en egen rad.** Det finns få tester per tjänst och år, så medelvärden vilseleder (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

## Mätetalsdefinitioner

Varje mätetal listar klockan eller räkningen, vad som utesluts och datakällan. Varje rad behöver en skriven regel innan den kan litas på. En "nivå 1-tjänst" nedan betyder en tjänst i den högsta återställningsnivån som definieras av din egen BIA.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Andel RTO uppfyllt | Andel återställningsövningar där tjänsten återställdes inom sitt angivna RTO | övningar med återställningstid <= RTO / genomförda övningar. Klockan startar vid övningsfelets deklarerade början (injiceringstid eller scenariots deklaration) och stoppar när tjänsten klarar sin överenskomna hälsokontroll för verkliga eller syntetiska användare. Tabletop-övningar och övningar utan tidtagen återställning utesluts och räknas separat | procent, med antalet övningar visat | Övningsrapport, tidslinje från övervakning, tjänsteregister med RTO | Hantering av tjänstekontinuitet; tillgänglighetshantering | Övningsdagens resultat; tid till återställning i leveransmått | Per övning; sammanställs kvartalsvis |
| Andel RPO uppfyllt | Andel återställningsövningar där dataförlusten höll sig inom det angivna RPO | övningar med uppmätt dataförlustspann <= RPO / övningar som återställer data. Dataförlustspannet är tiden mellan den sista skrivningen som finns efter återställning och felets ögonblick. Övningar som inte återställer något tillstånd utesluts | procent, med antalet övningar visat | Övningsrapport, jämförelse av återställd data med källan eller skrivloggen | Hantering av tjänstekontinuitet; informationssäkerhetshantering | Återställningsövning som en del av definitionen av klart | Per övning; sammanställs kvartalsvis |
| Testad återställningstäckning | Andel nivå 1- och nivå 2-tjänster som hade ett praktiskt återställningstest inom sitt överenskomna testintervall | tjänster med ett kvalificerande test inom intervallet / tjänster inom omfånget. Ett kvalificerande test är praktiskt (inte enbart tabletop) och återställer tjänsten i test- eller produktionsmiljön. Intervallet sätts per nivå | procent, per nivå | Tjänsteregister, övningskalender och rapporter | Hantering av tjänstekontinuitet; hantering av tjänstekatalog | Schema för övningsdagar | Månadsvis |
| Dagar sedan senaste lyckade återställningstest | Åldern på det senaste godkända återställningstestet för varje kritisk tjänst | rapportdatum minus datum för det senaste test som uppfyllde både RTO och RPO. Ett misslyckat test nollställer inte klockan. Tjänster som aldrig testats visas som "aldrig" och inte som noll | dagar, per tjänst, med den äldsta markerad | Övningsrapporter, tjänsteregister | Hantering av tjänstekontinuitet | Schema för övningsdagar; arbetsobjekts ålder | Månadsvis |
| Andel lyckade återställningar från säkerhetskopia | Andel försökta återställningar från säkerhetskopia som slutfördes med verifierad, användbar data | återställningar som slutfördes och klarade en dataverifiering / försökta återställningar, över automatiska och manuella återställningstester. Enbart säkerhetskopieringsjobbets framgång utesluts, eftersom ett jobb som körts inte är en återställning som fungerat | procent, per datanivå | Loggar från säkerhetskopieringssystemet, resultat från automatisk återställningsverifiering | Hantering av tjänstekontinuitet; infrastruktur- och plattformshantering | Återställningsövning; driftbarhetskriterier i definitionen av klart | Veckovis för automatiska tester; månadsvis i granskning |
| Andel stängda övningsfynd | Andel fynd från återställningsövningar som stängts inom sin överenskomna tid, uppdelat efter allvarlighet | fynd stängda inom målet / fynd som förföll under perioden. Klockan startar när fyndet registreras i övningsrapporten och stoppar vid verifierad rättelse, vilket betyder ett omtest eller en granskning som bekräftar den. Fynd som accepterats som risker av en namngiven ägare räknas separat | procent, med antalet försenade fynd | Övningsrapport, ärendehanteringssystem | Hantering av tjänstekontinuitet; ständig förbättring | Åtgärder från retrospektiv; backlogposters ålder | Månadsvis |
| Plans aktualitet | Andel kontinuitetsplaner och driftinstruktioner som granskats efter den senaste materiella ändringen av sin tjänst, eller inom sitt granskningsintervall | planer med ett granskningsdatum senare än den senaste materiella ändringen och inom intervallet / planer inom omfånget. Materiell ändring betyder en ändringspost märkt som att den ändrar arkitektur, datalager, beroenden eller leverantörer | procent, med åldern på den äldsta ogranskade planen | Planarkiv (versionshantering), ändringsposter, tjänsteregister | Hantering av tjänstekontinuitet; ändringsmöjliggörande | Definitionen av klart inkluderar uppdatering av driftinstruktion | Kvartalsvis |

RTO-klockan i en övning skiljer sig från klockan i ett verkligt avbrott, som startar vid påverkan (se ämne 3.4, Mätetal för större incidenter), så jämför övningar med övningar. En nära manuskriptstyrd övning mäter repetitionshastighet, så registrera hur mycket överraskning den innehöll.

## Rekommendationer

### Sätt mål som kan testas

**1. Härled RTO och RPO ur en verksamhetskonsekvensanalys och skriv dem bredvid tjänsten.** BIA frågar verksamheten vad en timme, en dag och en vecka av avbrott kostar och vilken data den har råd att förlora. Registrera svaren i tjänsteregistret så att varje test kan jämföras med ett angivet mål. Mål som valts av ingenjörer ensamma tenderar att vara antingen oöverkomliga eller orelaterade till vad kunder behöver.

**2. Dela in tjänsterna i nivåer och sätt testintervall per nivå.** Ett litet antal nivåer, kanske tre eller fyra, är lättare att driva än en annan regel för varje tjänst. Ge den översta nivån de tätaste och mest realistiska testerna och ge den lägsta nivån en lätt kontroll, till exempel en periodisk återställning av ett urval. Skriv ned intervallen och granska dem när BIA ändras.

**3. Kontrollera att målet passar arkitekturen.** Ett RPO på fem minuter med en nattlig säkerhetskopia är en motsägelse som ett test avslöjar i värsta ögonblick. Jämför varje mål med design för säkerhetskopiering, replikering och failover före den första övningen och registrera varje glapp som ett fynd.

### Testa på sätt som avslöjar något

**4. Blanda tabletop-övningar, återställningsövningar och övningsdagar.** En tabletop-övning är billig och hittar glapp i roller, kontakter och beslut. En praktisk återställningsövning hittar glapp i rutiner, behörigheter och data. En övningsdag, som framkallar ett fel och bevakar responsen, hittar glapp i övervakning, driftinstruktioner och samordning. Redovisa varje typ separat så att en följd av lätta tabletop-övningar inte ser ut som bevis på återställning.

**5. Tidta återställningen på data i produktionsstorlek.** En återställning som fungerar på en liten kopia kan fallera på den verkliga volymen på grund av genomströmnings- eller lagringsgränser. Där fullskaliga tester är för kostsamma att köra ofta, kör ett periodiskt och ange eventuell extrapolering. Registrera datastorleken med resultatet.

**6. Verifiera att återställd data är användbar.** Lägg till en automatisk kontroll efter återställning, till exempel ett radantal, en kontrollsumma eller en syntetisk transaktion. Räkna en återställning som lyckad först när den kontrollen klaras.

**7. Lägg till överraskning gradvis.** Tidiga övningar kan vara annonserade och manusstyrda. Senare bör hålla inne detaljer om felet och inkludera beroenden som utgångna autentiseringsuppgifter eller en onåbar leverantör. Registrera nivån av överraskning så att resultat kan läsas i sitt sammanhang.

### Förvandla fynd till ändring

**8. Logga varje fynd med en ägare, en allvarlighetsgrad och ett förfallodatum.** En övningsdag ger en lista: en saknad behörighet, ett steg i en driftinstruktion som inte längre stämmer med verktyget, en övervakare som aldrig gick. Lägg varje i teamets backlog med samma synlighet som funktionsarbete. Följ åldern på öppna fynd och andelen som stängts i tid och bekräfta stängning genom omtest där det är praktiskt.

**9. Länka fynd till problemhantering och lärande.** Ett fynd som återkommer över övningar är ett problem i ITIL:s mening (se ämne 4.1, Mätetal för problemhantering). Granska varje övning utan skuldbeläggning, som du skulle göra med en efteranalys, och följ åtgärder till stängning (se ämne 4.2, Mätetal för efteranalyser och lärande).

### Håll planerna levande

**10. Håll planer och driftinstruktioner i versionshantering och länka dem till ändring.** När en ändringspost ändrar arkitektur, ett datalager eller en leverantör, kräv att den ägande planen granskas i samma arbetsinsats (se ämne 4.3, Mätetal för ändringsmöjliggörande). Mät plans aktualitet mot den senaste materiella ändringen och inte bara mot kalendern. En plan som granskas varje kvartal och ignorerar förra månadens migrering är aktuell bara till namnet.

**11. Håll beroendekartan ärlig.** Återställningsordningen beror på delade tjänster som identitet, namnuppslag och hemlighetslagring. Stäm av kartan mot konfigurationsposter och rätta glappen som övningar avslöjar (se ämne 7.4, Mätetal för konfigurations- och CMDB-kvalitet).

**12. Ta med leverantörer och rotera övningsansvaret.** Be varje kritisk leverantör om dess egna testbelägg och kom överens om hur de gemensamma stegen ska övas (se ämne 8.4, Mätetal för leverantörer och avtal). Övningar förbrukar tid, så dela ansvaret över ett schema och räkna det som driftbelastning (se ämne 5.7, Mätetal för rutinarbete och jour).

## Manipuleringsvektorer och skyddsräcken

Kontinuitetstal är lätta att smickra eftersom få människor tittar noga på en övning, och det verkliga testet sker sällan. Tabellen parar varje mätetal med ett sätt det manipuleras på och kontrollen som fångar det. Parningarna följer formen i ämne 1.2 (se ämne 1.2, Goodharts lag och mätetalens psykologi).

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Andel RTO uppfyllt | Att välja en liten testdatamängd, ett lätt scenario eller ett repeterat manus; att starta klockan sent, efter att teamet har börjat; att lätta på hälsokontrollen så att "återställd" kommer snabbare; att sätta ett generöst RTO så att varje test klaras | Registrera datastorlek, scenariots överraskning och hälsokontrollens definition med varje resultat; jämför RTO med BIA; visa varje övning som en egen rad, inklusive misslyckanden |
| Andel RPO uppfyllt | Att mäta förlust bara för den primära tabellen och inte för allt tillstånd; att testa en replik som är synkroniserad eftersom ingen belastning körs; att omdefiniera RPO efter ett missat resultat | Verifiera dataförlust mot skrivloggen över alla datalager inom omfånget; testa under realistisk skrivbelastning; håll en ändringslogg över mål med skäl |
| Testad återställningstäckning | Att räkna tabletop-diskussioner som tester; att testa en trivialt liten tjänst för att höja procentsatsen; att krympa listan inom omfånget genom att omklassificera tjänster till en lägre nivå | Kräv praktiska tester för nivå 1-antalet; redovisa täckning viktad efter tjänsters kritikalitet; revidera nivåändringar mot BIA |
| Dagar sedan senaste lyckade återställningstest | Att köra om ett lätt test för att nollställa åldern; att märka ett delvis test som godkänt; att nollställa datumet efter en skrivbordsgranskning | Visa omfånget på det senaste godkända testet; visa den äldsta åldern och tjänsterna som aldrig testats; kräv att både RTO och RPO uppfyllts |
| Andel lyckade återställningar från säkerhetskopia | Att redovisa säkerhetskopieringsjobbets framgång som återställningens framgång; att bara testa säkerhetskopior som är kända för att vara bra; att verifiera med en kontroll som inte kan fela | Följ återställningar av slumpmässigt valda säkerhetskopior; kräv ett dataverifieringsresultat; granska själva kontrollen vid varje revision |
| Andel stängda övningsfynd | Att stänga fynd utan rättelse; att sänka allvarlighetsgraden för att lätta förfallodatumet; att dela ett fynd i många lätta; att registrera få fynd från början | Verifiera stängning genom omtest; redovisa fynd per övning bredvid stängningsandelen, eftersom ett fallande antal kan betyda mildare övningar; granska ändringar av allvarlighetsgrad |
| Plans aktualitet | Att uppdatera ett granskningsdatum utan att läsa planen; att markera ändringar som icke materiella; att fylla planen med generisk text som aldrig blir föråldrad | Stickprova planer och gå igenom dem med någon som inte skrev dem; jämför andelen märkta materiella ändringar med arkitekturändringarnas historik; länka aktualitet till testresultat |

En sund avläsning visar en handfull tester per kvartal med ärlig variation: några klarade vid första försöket, några misslyckades och upprepades, och fynden från varje syns i backlogen och stängs inom den angivna tiden. Perfekta poäng år efter år är ett skäl att fråga hur svåra övningarna är.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Täta små automatiska återställningstester | Billiga, kontinuerliga belägg; fångar tysta säkerhetskopieringsfel tidigt | Testar inte samordning, människor eller fullskalig återställning |
| Årlig fullskalig failoverövning | Realistisk; övar människor, leverantörer och beroenden tillsammans | Dyr och sällsynt; svår att upprepa efter en rättelse; bär risk om den körs i produktion |
| Tabletop-övningar | Låg kostnad; hittar glapp i roller och beslut; bra för utbildning | Bevisar inte att tekniken fungerar; lätta att köra utan att lära sig något |
| Övningsdagar i produktion med framkallat fel | Högsta realism; testar övervakning och driftinstruktioner som de är | Kräver mogna skyddsåtgärder och ledningens stöd; kan skada kunder om de körs vårdslöst |
| Mål i nivåer | Lägger insatsen där risken finns | Nivåplaceringar kan driva och behöver en ägare |

Det praktiska svaret är ett lagerprogram: billiga automatiska återställningskontroller hela tiden, praktiska övningar för varje nivå 1-tjänst med ett fast intervall, en större övning på en längre cykel och tabletop-övningar för beslut och kommunikation. Ange intervallen så att läsaren kan bedöma hur färska beläggen är.

## Frågor att diskutera med teamet

**1. När återställde vi senast vår viktigaste tjänst, och vad bevisade vi egentligen?**
Be om datumet, datastorleken, scenariot och resultatet och skriv dem på en tavla. Facilitatorn bör avstå från att döma och fokusera på glappet mellan påståendet och beläggen. Avsluta med att enas om ett test som skulle stänga det största glappet.

**2. Vem valde vårt RTO och RPO, och skulle verksamheten fortfarande välja dem i dag?**
Spåra varje mål tillbaka till en verksamhetskonsekvensanalys eller ett beslut. Fråga om arkitekturen kunde möta målet på papperet och om kostnaden för att möta det någonsin angavs. Enas om vem som ska bekräfta de främsta tjänsternas mål med verksamheten och senast när.

**3. Vad skulle en misslyckad övning kosta oss i anseende, och formar det hur svåra våra övningar är?**
Frågan lyfter fram trycket som gör övningar milda. Fråga om ett misslyckat test behandlas som ett misslyckande för teamet eller en framgång för övningen.

**4. Vilka fynd från vår senaste övning är fortfarande öppna, och varför?**
Läs listan högt med åldrar och ägare. För varje försenad post, fråga vad som blockerar den: konkurrerande arbete, oklart ägarskap, kostnad eller en övertygelse att risken är acceptabel. Målet är att inget fynd sitter i ett tillstånd utan ägare.

**5. Vad antar vår plan som inte längre är sant?**
Välj en plan och läs den med en person som inte skrev den. Leta efter avvecklade verktyg, omdöpta konton och avgångna leverantörer. Fråga hur planen skulle uppdateras när tjänsten ändras och vem som märker när den inte är det. Länka svaret till ändringsprocessen.

**6. Vilket beroende skulle stoppa allt, och har vi någonsin testat utan det?**
Delade tjänster som identitet, namnuppslag, hemligheter och själva anropssystemet är vanliga enskilda felpunkter. Be teamet nämna dem och beskriva den senaste gången var och en var otillgänglig med avsikt.

## Fyra perspektiv

### Produkt- och leveransteam

Produktteam äger designen som gör återställning möjlig, så de möter kontinuitet som en del av definitionen av klart för kritiska tjänster: en säkerhetskopieringsväg, en återställningsrutin och en driftinstruktion som fungerar. De bör köra återställningsövningar som en del av sin egen rytm, lagra återställningskod med tjänsten och behandla en misslyckad övning som en backlogpost.

### Service- och driftteam

Driftteam kör de flesta övningar och bär belastningen av att förbereda dem. De bör hålla övningskalendern, registrera tidslinjer medan övningen pågår och skriva fynd samma dag. Resultat beskriver tjänsten och planen, och ingen rangordnas efter hur snabbt en individ återställde en övning.

### Ledning och styrning

Ledare sätter målen med verksamheten och avgör hur mycket återställning som är värd att köpa. De bör be att få se det senast visade resultatet bredvid varje mål, beläggens ålder och de öppna fynden, och undvika att belöna ett rent blad. Styrande organ bör förvänta sig en liten, stabil uppsättning kontinuitetsmått, länkade till riskregistret och till reglerad rapportering där det gäller (se ämne 8.2, Mätetal för risker och kontroller, och ämne 8.5, Reglerad och statlig rapportering).

### Kunder och användare

Kunder ser sällan kontinuitet förrän den spelar roll, och då bedömer de den helt efter utfallet: hur länge de var utan tjänsten och om deras data överlevde. De har nytta av tydliga uttalanden om vad som utlovas, i termer de kan förstå, och av ärlig kommunikation när en incident åberopar planen. Där avtal innehåller återställningsåtaganden, dela övningsbelägg på begäran (se ämne 5.1, Mätetal för SLA, OLA och XLA).

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på ett regionalt sjukhus driver ett schemaläggningssystem för patienter, ett arkiv för medicinska bilder och en meddelandetjänst för personalen. Ett produktteam på åtta underhåller schemaläggningen, och ett driftteam driver plattformen. Alla siffror i det här exemplet är illustrativa.

Avdelningens register listar schemaläggningen som nivå 1 med ett RTO på 2 timmar och ett RPO på 15 minuter. Dess kvartalsrapport visar "andel RTO uppfyllt: 100 procent över 4 övningar" och "testad återställningstäckning: 100 procent." En ny driftchef läser övningsrapporterna bakom talen. Tre av de fyra övningarna var tabletop-övningar, och den enda praktiska återställningen använde en kopia av databasen med ungefär en tiondel av produktionsdatan. Ingen hade återställt en säkerhetskopia till en ren miljö på 14 månader.

Teamet beslutar att ändra vad som mäts och testas. Det omdefinierar testad återställningstäckning till att bara räkna praktiska tester, vilket sänker siffran till 33 procent över de tre nivå 1-tjänsterna. Det schemalägger en återställning i produktionsstorlek för schemaläggningen, med automatisk verifiering av radantal och en syntetisk bokningstransaktion. Körningen tar 3 timmar 40 minuter mot ett RTO på 2 timmar, och den återställda datan ligger 40 minuter efter felpunkten mot ett RPO på 15 minuter, eftersom logg-leveransen hade pausats under en migrering och aldrig återupptagits. Övningsdagen ger 9 fynd: 2 med hög, 5 med medelhög och 2 med låg allvarlighet.

Beslutet som registrerats i loggen är att behandla missen som årets mest värdefulla resultat. Teamet öppnar arbete för att återuppta logg-leveransen med ett larm på dess eftersläpning, för att parallellisera återställningen och för att flytta en datavolym till snabbare lagring. RTO förblir 2 timmar, och teamet lägger till en dokumenterad manuell reservrutin för schemaläggningen. Andelen stängda fynd under de första 60 dagarna är 7 av 9 i tid, med de två andra accepterade som risker av namngivna ägare.

Manipulationsrisken som fångades här var subtil. Ingen förfalskade ett tal: ett generöst antal tabletop-övningar och en liten testdatamängd gjorde rapporten grön. Skyddsräckena som fungerade var att registrera datastorlek och övningstyp med varje resultat och praxisen att läsa de underliggande övningsrapporterna. I nästa rapport visar teamet varje övning som en egen rad, med den misslyckade körningen inkluderad.

## Agilitet, AI, automatisering och analys

### Agilitet

Öva återställning i små, täta övningar med intressenter och rätta det de avslöjar. Varningen är att manusstyrda övningar som alltid klaras ger falsk trygghet.

### AI

AI-tjänster lägger till nya beroenden, till exempel modeller, vektorlager och tredjeparts-API:er, i återställningsplanen. Ta med dem i testad återställningstäckning och para återställningstid med en kontroll att svaren är korrekta efter återställning. Varningen är att en återställd AI-tjänst kan köra en annan modellversion eller förlora sin data, så verifiera beteende, inte bara tillgänglighet.

### Automatisering

Automatisera verifiering av säkerhetskopior och återställningstester och mät automatiseringen på misslyckade återställningar. Varningen är att en säkerhetskopia som slutförs inte är en säkerhetskopia som återställs, så testa återställningen.

### Analys

Redovisa mål som uppfyllts i tester med datumen för det senaste testet och de övningsfynd som stängts. Beslutet detta ger underlag för är vilken återställning som är minst bevisad. Varningen är att få verkliga återställningar betyder små urval, så visa antal.

## Branschperspektiv

**Startup.** Det finns vanligen en produktionsmiljö, ett litet team och en hanterad molnleverantör. Det mest värdefulla måttet är det enklaste: återställ produktionsdatabasen från säkerhetskopia till en ren miljö varje månad, tidta det och verifiera resultatet. Skriv RTO och RPO på en sida.

**Småföretag.** It är ofta utlagt eller drivs av en eller två personer på hostade tjänster. Fråga leverantören skriftligt vilken återställning den åtar sig och vilka belägg den kan visa, och testa en återställning av din egen data per kvartal. Håll en plan på en sida där den kan läsas när huvudsystemen är nere.

**Storföretag.** Många tjänster, många leverantörer och delade plattformar gör nivåindelning och en beroendekarta nödvändiga. Investera i ett centralt tjänsteregister med mål, en övningskalender, automatisk återställningsverifiering och konsekvent rapportering så att resultat kan jämföras över team.

**Offentlig sektor.** Kontinuitetsskyldigheter kan följa av lag, revision eller policy, och en offentlig tjänst kan behöva fortsätta fungera under nödsituationer. Beläggen för testning granskas ofta externt, så håll övningsrapporter, fynd och stängningsposter i en form som en revisor kan läsa. Upphandling kan låsa fast återställningsarrangemang, så ta med övningsrättigheter och belägg i avtal (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Skälen att investera är kostnaden för ett svårt avbrott som varar längre än verksamheten tål, förlusten av data som inte kan återskapas och skyldigheterna mot kunder, tillsynsmyndigheter och försäkringsgivare som ber om belägg för beredskap. Kontinuitetsarbete är en försäkring, så avkastningen är den undvikna förlusten och beslutsfattarnas förtroende, och den är svår att uttrycka som en siffra utan att hitta på en. Beskriv den genom mönster du kan observera: glappet mellan angiven och visad återställningstid, antalet fynd med hög allvarlighet som hittats i övningar i stället för i verkliga händelser och tiden att besvara en kunds eller revisors begäran om belägg.

Kostnaderna kommer i tre grupper: redundansen och verktygen målen kräver, människors tid att planera, köra och granska övningar och insatsen att hålla planer och beroendekartor aktuella.

Den totala ägandekostnaden domineras av människor och av de snävare nivåerna. Att gå från ett RTO på 24 timmar till 2 timmar ändrar designen och räkningen, så gör den avvägningen uttrycklig med verksamheten. Små, täta, automatiska tester tenderar att kosta mindre än en stor årlig händelse eftersom fel dyker upp medan de är billiga att rätta.

## Antimönster och fallgropar

- **Planen på hyllan.** Ett dokument räknas som förberedelse, och ingen har prövat det. Redovisa i stället datumet och resultatet för det senaste praktiska testet bredvid varje mål.
- **Framgång för säkerhetskopia som framgång för återställning.** Jobb rapporterar grönt medan datan inte kan återställas. Testa i stället återställningar regelbundet och verifiera datan innan en framgång räknas.
- **Repeterad teater.** Övningen är manusstyrd och körs av planens författare. Lägg i stället till överraskning gradvis.
- **Ett mål för allt.** Varje tjänst har ett RTO på fyra timmar eftersom mallen sa det. Dela i stället in tjänsterna i nivåer utifrån en verksamhetskonsekvensanalys och sätt mål som passar.
- **Fynd som aldrig stängs.** Övningsrapporten listar glapp och backlogen ser dem aldrig. Ge i stället varje fynd en ägare och ett förfallodatum och verifiera stängning genom omtest.
- **Att straffa det misslyckade testet.** Ett team som får skulden för ett missat RTO slutar köra svåra tester. Kom i stället överens i förväg om att en misslyckad övning med goda fynd är ett gott utfall och granska den utan skuldbeläggning.
- **Föråldrade planer efter snabb förändring.** Kalendern driver granskningen, och arkitekturändringar slinker igenom. Länka i stället plangranskning till materiella ändringsposter och mät plans aktualitet mot dem.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Mål och nivåer | RTO och RPO oskrivna eller kopierade från en mall | Mål skrivna för vissa nyckeltjänster | Nivåer och mål kommer från en verksamhetskonsekvensanalys och finns i tjänsteregistret | Mål granskas mot visade resultat och arkitektur | Mål överenskoms gemensamt med verksamheten och leverantörer och justeras när tjänsterna förändras |
| Testning och belägg | Återställning aldrig testad, eller testad en gång efter en incident | Ad hoc-återställningstester av vissa team; resultat i personliga anteckningar | Testintervall per nivå med registrerat omfång, tidslinje och resultat | Resultat följs över tid, med tabletop-övningar, återställningsövningar och övningsdagar redovisade separat | Övningar över team och leverantörer med överraskning, schemalagda utifrån risk |
| Fynd och lärande | Glapp märks informellt | Fynd listas efter vissa övningar | Varje fynd har en ägare, allvarlighetsgrad och förfallodatum | Stängningsandel och ålder granskas, med omtest som bekräftar stängning | Fynd matar delade plattformar, leverantörsavtal och designstandarder |
| Plans aktualitet | Planer skrivna en gång | Planer uppdateras efter incidenter | Planer i versionshantering med ett granskningsintervall | Granskning länkad till materiella ändringar och mätt | Planer och driftinstruktioner testas som kod och genereras ur tjänstedefinitionen där det är möjligt |

## Checklista

- [ ] Varje nivå 1-tjänst har ett skrivet RTO och RPO som kom från en verksamhetskonsekvensanalys.
- [ ] Tjänsteregistret visar varje tjänsts nivå, mål och testintervall.
- [ ] RTO- och RPO-klockorna, hälsokontrollen och undantagen är nedskrivna (se ämne 1.5, Datakällor och instrumentering).
- [ ] Praktiska återställningstester, tabletop-övningar och övningsdagar redovisas som separata typer.
- [ ] Varje återställningstest registrerar datastorlek, scenario, nivå av överraskning och uppmätt återställningstid och dataförlust.
- [ ] Återställningar från säkerhetskopia testas automatiskt, och en dataverifiering avgör framgång.
- [ ] Varje övningsfynd har en ägare, en allvarlighetsgrad, ett förfallodatum och en plats i backlogen.
- [ ] Plangranskning är länkad till materiella ändringsposter, och den äldsta ogranskade planen är synlig.
- [ ] Beroendekartan inkluderar delade tjänster, och minst ett scenario tar bort en av dem.
- [ ] Varje mätetal i det här ämnet har ett namngivet skyddsräcke och en ägare i mätetalsregistret (se ämne 1.4, Styrning och ägarskap av mätetal).
- [ ] Övningsansvaret roterar, och tiden det tar räknas som driftbelastning.

## AI-prompter

**Utforma ett återställningstest och måtten som hör till det.**

```text
I want to test recovery of [service name], a [tier] service with a stated RTO of
[RTO] and RPO of [RPO]. Its main components are [list: data stores, queues,
compute, shared services] and its suppliers are [list]. Draft a test plan with a
realistic scenario, the event that starts the clock, the health check that stops
it, how to measure data loss against the RPO, the data size to use, what to
record, and the safeguards to prevent harm to production. Do not invent
benchmark times or claim that any objective is achievable. List your assumptions
and the questions I should answer to finish the plan.
```

**Granska övningsrapporter efter smickrande belägg.**

```text
Here are summaries of our last [number] recovery exercises: [paste for each:
type, date, scope, data size, restore time, data loss, findings count]. Our
objectives are [RTO and RPO per tier]. Identify where the reported results
could overstate real recovery capability, such as small datasets, scripted
scenarios, tabletop-only coverage, or loose health checks. Suggest what extra
information to record and which guardrail metrics to pair with each result. Do
not invent benchmark values or assume facts I have not given. List your
assumptions.
```

**Förvandla anteckningar från en övningsdag till fynd och backlogposter.**

```text
Here are the raw notes from a game day on [service]: [paste notes and
timeline]. Extract each gap between the plan and what happened as a separate
finding with a short title, a description, a suggested severity using this scale
[severity scale], a candidate owner role (not a named person), and how we could
verify the fix. Group findings that may share a root cause. Do not invent events
that are not in the notes. List your assumptions and anything that needs
clarifying.
```

**Kontrollera en plans aktualitet mot nyliga ändringar.**

```text
Here is the continuity plan for [service] last reviewed on [date]: [paste plan
or outline]. These are the material changes since then: [list changes to
architecture, data stores, dependencies, suppliers, and tooling]. Identify
steps, contacts, tools, and dependencies in the plan that the changes may have
made wrong, and list questions a reviewer should ask. Do not invent details
about our systems. List your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta ämnet som definierar ett kontinuitets-, återställnings- eller övningsmått och skyddsräcket att para med det.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett redigerat kontinuitetsmått anger sina klockor, undantag och sin manipuleringsvektor.

## Viktigaste slutsatser

- Ett återställningsmål är ett löfte, och bara en tidtagen, realistisk övning visar om det kan hållas.
- Redovisa det senast visade resultatet och dess ålder bredvid varje RTO och RPO och visa varje övning som en egen rad.
- Testa återställningar, inte säkerhetskopior: en återställning räknas först när datan har verifierats som användbar.
- Produkten av en övning är en stängd lista över fynd, så följ deras ålder och bekräfta stängning genom omtest.
- Håll planer i versionshantering och knyt deras granskning till materiell ändring, inte bara till kalendern.
- Mät tjänster och planer, aldrig människor, och gör en misslyckad övning med goda fynd till ett tryggt och respekterat resultat.

## Referenser och vidare läsning

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. ISO 22301:2019, *Security and resilience: Business continuity management systems: Requirements*, International Organization for Standardization.
5. ISO 22313:2020, *Security and resilience: Business continuity management systems: Guidance on the use of ISO 22301*, International Organization for Standardization.
6. Rosenthal, C., and Jones, N., *Chaos Engineering: System Resiliency in Practice*, O'Reilly Media, 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning).
9. Wikipedia, [Recovery time objective](https://en.wikipedia.org/wiki/Recovery_time_objective).
10. Wikipedia, [Recovery point objective](https://en.wikipedia.org/wiki/Recovery_point_objective).
11. Wikipedia, [Business impact analysis](https://en.wikipedia.org/wiki/Business_impact_analysis).
12. Wikipedia, [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301).
13. Wikipedia, [Backup](https://en.wikipedia.org/wiki/Backup).
14. Wikipedia, [Chaos engineering](https://en.wikipedia.org/wiki/Chaos_engineering).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
