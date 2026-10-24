# Mätetal för FinOps och molnkostnader

**Molnutgifter avgörs av ingenjörer varje dag, så ge de människor som bygger och driver tjänster kostnadsdata, sammanhang och befogenhet att agera på dem, och mät slöseri, fördelning och enhetskostnad med samma omsorg som du ger tillförlitlighet.**

## Översikt och motiv

I ett datacenter avgörs utgifter av inköpsorder och kommer som några få stora steg. I molnet kan en utvecklare binda organisationen vid en återkommande debitering med några rader konfiguration, och en bortglömd testmiljö kan kosta pengar i månader. [Molntjänster](https://en.wikipedia.org/wiki/Cloud_computing) erbjuder åtkomst på begäran till datorresurser, och modellen med [betalning efter användning](https://en.wikipedia.org/wiki/Pay_as_you_go) som följer med betyder att fakturan följer användningen. Det är kraftfullt och riskabelt. Samma flexibilitet som låter ett team skala på minuter låter kostnaden växa fortare än någon märker.

FinOps, en sammandragning av finans och drift (finance och operations), är en praktik och en kultur för att hantera molnkostnad. FinOps Foundation beskriver det som ett operativt ramverk där teknik-, ekonomi-, upphandlings- och affärsteam samarbetar kring datadrivna utgiftsbeslut. Dess centrala idé är att de människor som använder molnresurser bör se och äga sina kostnader, medan ekonomi tillhandahåller strukturen, prognoserna och åtagandena. Det stämmer med de agila målen om kontinuerligt samarbete mellan intressenter och om team som äger sina tjänster, och det stämmer med ITIL:s angelägenhet om ekonomisk styrning av tjänster. Det här ämnet täcker de mått som gör den praktiken konkret. Det bygger på de allmänna kalkyleringsidéerna i föregående ämne (se ämne 7.5, Tjänstekostnad och enhetsekonomi).

Molnkostnad har drag som behöver egna mått.

- **Elasticitet.** [Automatisk skalning](https://en.wikipedia.org/wiki/Autoscaling) anpassar resurser efter efterfrågan, vilket gör kostnaden rörlig och ibland överraskande. [Serverlös databehandling](https://en.wikipedia.org/wiki/Serverless_computing) debiterar per körning och flyttar uppmärksamheten från servrar till förfrågningar.
- **Många små beslut.** Varje val av instansstorlek, lagringsnivå, region och arkitektur ändrar kostnaden. Utgifterna är fördelade över hundratals beslut som fattas av många människor, och de är svåra att se utan taggar och god rapportering.
- **Prismodeller.** Priser på begäran är flexibla och högst. Åtaganden i utbyte mot en [volymrabatt](https://en.wikipedia.org/wiki/Volume_discount), till exempel reserverad kapacitet eller sparplaner, sänker enhetspriset mot ett löfte om användning. Spot- eller avbrytbar kapacitet är billig och kan tas tillbaka. Varje modell har en risk, och rätt blandning beror på hur förutsägbar arbetsbelastningen är. De exakta villkoren skiljer sig mellan leverantörer och ändras ofta, så kontrollera aktuell leverantörsdokumentation innan du förlitar dig på någon detalj.
- **Delad och otaggad kostnad.** Resurser utan ägar- eller syftestagg kan inte tillskrivas. Delade plattformar sprider kostnad över team som förbrukar dem olika.
- **Miljökostnad.** Molnarbetsbelastningar förbrukar energi och orsakar utsläpp, och en arbetsbelastnings [koldioxidavtryck](https://en.wikipedia.org/wiki/Carbon_footprint) är alltmer ett krav att redovisa. Metoder för att uppskatta det utvecklas fortfarande, och tal bör komma med sin metod.

Kostnadsmått i molnet är lätta att vinna genom genvägar. Att skära utgifter genom att stänga av övervakning eller genom att krympa resurser tills tjänsten faller visar en lägre faktura och en sämre tjänst. Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller: varje kostnadsmått här sitter bredvid ett tillförlitlighets- eller kvalitetsmått, och inget team rangordnas efter sin faktura (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Nyckelprinciper

- **Kostnad är ett tekniskt mått.** Team som bygger och driver en tjänst ser och äger dess kostnad.
- **Fördela till ägare.** Varje krona ska kunna knytas till ett team eller en deklarerad delad pool.
- **Para kostnad med kvalitet och tillförlitlighet.** Besparingar som bryter tjänsten är inte besparingar.
- **Optimera kontinuerligt, i små steg.** Granska slöseri regelbundet och agera som en del av det normala arbetet.
- **Prognostisera med intervall.** Rörlig efterfrågan gör prognoser med ett enda tal sköra.
- **Samarbeta över funktioner.** Teknik, ekonomi, upphandling och verksamheten beslutar tillsammans.
- **Rangordna inte team efter deras faktura.** Tjänster skiljer sig, och tillväxt är inte slöseri.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fördelningstäckning | Andel molnutgifter som tillskrivs ett ägande team eller en deklarerad delad pool | utgifter med en giltig ägar- och tjänstetagg, eller i en deklarerad delad pool / totala molnutgifter | procent | Export av molnfakturering, taggpolicy | Ekonomisk styrning av tjänster; it-tillgångshantering | Teamets ägarskap av det de driver | Veckovis |
| Molnenhetskostnad | Kostnad för molnresurser per enhet av något användare värdesätter | molnkostnad för tjänsten under perioden / levererade enheter under perioden | valuta per enhet | Faktureringsdata sammanfogad med tjänstevolym | Ekonomisk styrning av tjänster; servicenivåhantering | Kostnad att betjäna per resultat | Månadsvis |
| Slöserigrad | Andel utgifter på resurser som är overksamma eller tydligt överdimensionerade | utgifter på overksamma eller överdimensionerade resurser, enligt överenskomna regler / totala utgifter på resurserna inom omfånget | procent | Utnyttjandemått och fakturering | Kapacitets- och prestandahantering; ekonomisk styrning | Minskat slöseri i verktygskedjan | Veckovis |
| Åtagandetäckning | Andel av kvalificerad stabil användning som täcks av rabatterade åtaganden | kvalificerad användning täckt av åtaganden / kvalificerad användning | procent | Fakturering och åtagenderapporter | Ekonomisk styrning av tjänster; leverantörshantering | Planering för förutsägbar efterfrågan | Månadsvis |
| Åtagandeutnyttjande | Andel köpta åtaganden som användes | använda åtagandetimmar / köpta åtagandetimmar | procent | Åtagenderapporter | Ekonomisk styrning av tjänster; leverantörshantering | Värde ur planerad investering | Månadsvis |
| Prognosavvikelse | Skillnad mellan prognostiserade och faktiska molnutgifter, per team och totalt | (faktisk minus prognos) / prognos | procent | Prognoslogg och faktureringsdata | Ekonomisk styrning av tjänster | Prognosnoggrannhet | Månadsvis |
| Tid till kvittering av avvikelse | Tid från ett kostnadsavvikelselarm till ett registrerat beslut av ägaren | median och 85:e percentil av timmar från larm till ägarens svar | timmar | Avvikelselarm och ärendeposter | Övervakning och händelsehantering; incidenthantering | Responsivitet på en produktionssignal | Månadsvis |

Definiera omfånget för resurser, taggreglerna och vad som räknas som overksamt eller överdimensionerat och registrera dem. Åtagandetäckning beräknas bara mot stabil basanvändning, inte toppar. Enhetskostnad använder en enhet överenskommen med tjänsteägaren och fast över trenden. Kostnadsdata bör ange om den inkluderar krediter, rabatter, skatter och supportavgifter, och vilken valuta och vilken växelkurs som gäller.

## Rekommendationer

### Gör kostnad synlig och ägd

**1. Tillämpa en liten, obligatorisk uppsättning taggar.** Kräv att varje resurs bär en ägar-, en tjänste- och en miljötagg, tillämpat genom policy vid skapande, inte genom städning efteråt. Fördelningstäckning mäter hur väl detta fungerar. Resurser som inte taggas kan blockeras eller flaggas inom ett dygn till kontoägaren. Håll taggmängden liten så att människor följer den.

**2. Ge team sin egen kostnadsvy.** Ge varje team en daglig eller veckovis vy av sina utgifter per tjänst och miljö, med trender och avvikelser. Människor reagerar på data de kan se och förstå. En rapport som kommer månadsvis och bara går till ekonomi ändrar lite.

**3. Definiera delade kostnadspooler och deras drivare.** Delade plattformar, nätverk och supportavgifter behöver en regel för hur de sprids (se ämne 7.5, Tjänstekostnad och enhetsekonomi). Publicera regeln, granska den med teamen och håll poolen liten. En regel som människor kan följa förtjänar mer förtroende än en rättvis som ingen förstår.

**4. Håll ett kort regelbundet kostnadssamtal.** Samla teknik, ekonomi och produktägare med jämna mellanrum, veckovis eller varannan vecka för stora förbrukare och månadsvis för andra, i trettio minuter. Granska trenden, avvikelserna och optimeringsbackloggen. Detta är kontinuerligt samarbete i praktiken, och det håller kostnad på dagordningen utan en tung process.

### Mät värde, inte bara utgifter

**5. Uttryck kostnad per enhet.** Totala molnutgifter stiger med framgång. Det som spelar roll är kostnad per aktiv kund, per transaktion eller per bygge. Välj en enhet som är meningsfull för tjänsten, följ den över tid och kommentera ändringar. En fallande enhetskostnad med stigande totala utgifter är ett friskt mönster, och en stigande enhetskostnad med oförändrad användning är en uppmaning att undersöka.

**6. Visa tillförlitlighet och kvalitet bredvid kostnad.** Visa kostnad med tillgänglighet, fördröjning och felgrad för samma tjänst (se ämne 5.2, SLI:er, SLO:er och felbudgetar). Kostnadsbesparingar som höjer felgrader är en överföring av kostnad till användare. Ett angreppssätt med felbudget kan göra avvägningen uttrycklig: spendera mindre när tjänsten är långt bättre än vad som behövs och investera när den inte är det.

**7. Följ slöseri med uttryckliga regler.** Definiera overksamt (till exempel ingen meningsfull användning under en period) och överdimensionerat (till exempel utnyttjande konsekvent långt under den tillhandahållna kapaciteten) och redovisa utgifterna för vart och ett. Regler behöver omsorg: ett reservsystem för resiliens ser overksamt ut av design och bör uteslutas och märkas. Se över reglerna när de ger falska positiva.

### Agera på det du hittar

**8. Dimensionera om och städa i det normala arbetet.** Gör borttagning av slöseri till en stående post i teamets backlog, hanterad i små steg som en del av ständig förbättring. Schemalägg icke-produktionsmiljöer att stanna utanför arbetstid, radera frånkopplad lagring, välj lämpliga lagringsnivåer och granska de största posterna först. Små regelbundna ändringar slår sällsynta hjältemodiga städningar, som tenderar att glömmas när trycket stiger.

**9. Anpassa prismodellen till arbetsbelastningen.** Använd åtaganden för stabil basanvändning, på begäran för rörlig last och avbrytbar kapacitet för arbete som tål avbrott. Åta dig stegvis, i små mängder, och följ både täckning och utnyttjande. Överåtagande slösar pengar och underåtagande betalar ett påslag. Involvera ekonomi och upphandling och kontrollera villkoren på nytt med leverantören eftersom de ändras.

**10. Upptäck avvikelser och svara.** Använd avvikelsedetektion på utgifter, som flaggar plötsliga förändringar relativt en baslinje. Verktyg för [avvikelsedetektion](https://en.wikipedia.org/wiki/Anomaly_detection) sträcker sig från enkla trösklar till statistiska modeller. Larma det ägande teamet och mät hur lång tid det tar att kvittera och besluta. Ett felkonfigurerat jobb kan dra upp en stor faktura på timmar, så hastighet spelar roll (se ämne 5.5, Mätetal för övervakning och larmkvalitet).

### Prognostisera och planera

**11. Prognostisera med intervall och drivare.** Bygg prognoser utifrån efterfrågans drivare, till exempel förväntade användare eller transaktioner, tillsammans med enhetskostnad. Använd [avvikelseanalys](https://en.wikipedia.org/wiki/Variance_analysis) för att förklara skillnader mellan prognos och utfall och skilj de som beror på volym, pris och mix. Ge ett intervall och ange antagandena. Prognosavvikelsen bör krympa när modellen förbättras.

**12. Ta med hållbarhet i bilden.** Uppskatta utsläppen kopplade till större arbetsbelastningar med en dokumenterad metod, till exempel leverantörsrapporter eller publicerade metoder, och ange uppskattningens gränser. Jämför val av region, instanstyp och schema på både kostnad och utsläpp. Behandla utsläpp per enhet som en följeslagare till kostnad per enhet och gör inte anspråk på precision som metoden inte kan stödja.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Fördelningstäckning | Att tagga allt till en samlingsägare; att deklarera stora belopp som delade | Andel utgifter ägda av samlingsägare; delad pools storlek och granskning; stickprov av ägarbekräftelse |
| Molnenhetskostnad | Att välja en enhet som växer billigt; att skära i tillförlitlighet för att skära i kostnad | Fast enhetsdefinition; tillförlitlighets- och kvalitetsföljeslagare |
| Slöserigrad | Att snäva in definitionen av overksamt; att flytta slöseri till ett konto utanför omfånget | Regler i registret; skanna alla konton; stickprova resurser som reglerna utesluter |
| Åtagandetäckning | Att åta sig uppblåsta baslinjer för att jaga en hög procentsats | Åtagandeutnyttjande; kontrollera baslinjen mot användningshistoriken |
| Åtagandeutnyttjande | Att lägga till kvalificerad användning som inte behövs för att fylla åtaganden | Jämför med tillväxten i verklig efterfrågan; enhetskostnad |
| Prognosavvikelse | Att lägga på marginal i prognoser; att revidera dem sent | Logga prognosen vid början; följ intervallets bredd och träffgrad |
| Tid till kvittering av avvikelse | Att kvittera larm utan att titta; att stänga larm automatiskt | Registrera ett beslut och utfall; stickprova larm för kvaliteten på svaret |

En sund avläsning är nästan alla utgifter ägda och synliga, enhetskostnad som rör sig av förklarade skäl, slöseri som krymper utan avbrott, åtaganden som används och prognoser vars fel smalnar över tid.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Ett centralt molnteam styr utgifterna | Konsekvens och förhandlingsstyrka | Långsamt; långt från de tekniska besluten |
| Team äger sin molnkostnad | Snabba, välgrundade beslut | Kräver data, utbildning och skyddsräcken |
| Bara på begäran | Flexibelt | Högsta enhetspris |
| Tunga åtaganden | Lägre enhetspris | Inlåsning och slöseri om efterfrågan faller |
| Strikta budgettak | Förhindrar överskridanden | Kan orsaka avbrott eller blockera giltigt arbete |
| Larm och granskning | Bevarar hastighet | Beror på snabb respons |
| Aggressiv omdimensionering | Sparar pengar | Risk för prestanda om det överdrivs |
| Mätt omdimensionering med SLO:er | Balanserat | Kräver tillförlitlighetsdata och omsorg |

Svaret är att ge team data och ägarskap, sätta skyddsräcken såsom larm och budgetar i stället för hårda stopp där tjänsten är kritisk, åta sig gradvis till den stabila baslinjen och alltid para kostnad med tillförlitlighet.

## Frågor att diskutera med teamet

**1. Hur stor del av vår molnfaktura kan vi tillskriva en ägare i dag, och vem går inte att hitta?**
Titta på andelen utgifter med giltiga taggar och de största otaggade posterna. Fråga vem som skulle äga var och en. Facilitatorn bör notera hur många poster ingen gör anspråk på. Enas om ett taggpolicysteg att tillämpa vid skapande.

**2. Vad gjorde vår kostnad per enhet de senaste sex månaderna, och varför?**
Rita enhetskostnaden och kommentera ändringar i arkitektur, pris och volym. Fråga vilka ändringar som var avsiktliga. Om trenden är en överraskning, diskutera vilken data som saknas. Lägg ett kvalitetsmått i diagrammet.

**3. Vilka av våra resurser skulle vi stänga av i morgon om vi vågade?**
Lista kandidater: overksamma miljöer, överdimensionerade databaser, bortglömd lagring. För var och en, fråga vad risken är och vem som beslutar. Enas om ett säkert sätt att testa borttagning av en, till exempel genom schemaläggning eller en ögonblicksbild först.

**4. Hur skulle vi veta inom ett dygn om ett jobb började kosta tio gånger mer?**
Gå igenom larmvägen från fakturan till ägaren. Pröva den med ett tidigare exempel. Samtalet bör avslöja fördröjningar och glapp i ägarskap. Enas om en måltid för att kvittera och besluta, och vem som är ansvarig.

**5. Hur mycket av vår basanvändning skulle vi säkert kunna åta oss, och vad skulle göra oss fel?**
Undersök användningshistoriken efter ett stabilt golv och riskerna mot det: produktändringar, migreringar, prisändringar. Besluta ett första måttligt åtagande och ett granskningsdatum. Ta med ekonomi i diskussionen.

**6. Vilken avvägning mellan kostnad och tillförlitlighet gör vi av misstag?**
Granska nyliga besparingar och incidenter. Hängde några ihop? Diskutera hur avvägningen kan göras uttrycklig, till exempel genom att koppla kostnadsgranskningar till felbudgetar. Besluta vem som kan godkänna en nedskärning som påverkar tillförlitligheten.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam fattar de beslut som driver kostnad och är bäst placerade att minska den. De bör tagga vid skapande, kontrollera sin kostnadsvy regelbundet, bygga in kostnad i designsamtal och behandla slöserireducering som normalt arbete. De bör kunna se effekten av en ändring på kostnaden strax efter att den gjorts, vilket stöder snabbt lärande.

### Service- och driftteam

Drift- och plattformsteam driver delade tjänster, tillämpar policy och driver avvikelselarm. De bör hålla taggefterlevnad enkel, tillhandahålla självbetjäningsrapporter och publicera tydliga regler för delad kostnad. De bör bevaka både kostnaden och tillförlitligheten hos plattformarna de tillhandahåller och hjälpa team att agera utan att bli en grind.

### Ledning och styrning

Ledare och ekonomi vill ha förutsägbara utgifter och gott värde. De bör finansiera verktygen och tiden för kostnadsarbete, acceptera intervall i prognoser, undvika resultattabeller över team och be om enhetskostnad bredvid kvalitet. Styrningen bör kontrollera att åtaganden görs med data och att hållbarhetspåståenden anger sin metod.

### Kunder och användare

Användare känner molnkostnad indirekt, genom priser, funktioner eller tjänstens stabilitet. De har nytta när besparingar finansierar förbättringar och lider när nedskärningar sänker kvaliteten. Där användare debiteras för förbrukning vill de ha tydliga fakturor och möjlighet att påverka dem.

## I praktiken: ett exempel från tjänstehantering

En regional nätbutik driver sin butik och orderplattform på ett offentligt moln, med sex tekniska team. Siffrorna nedan är illustrativa.

Molnutgifterna steg stadigt under ett år, och ekonomichefen ber om en nedskärning. FinOps-ansvarig hämtar faktureringsdatan. Fördelningstäckningen är 68 procent, där en tredjedel av de otaggade utgifterna finns i testkonton. Kostnaden per slutförd order är 0,31 US-dollar, upp från 0,27 sex månader tidigare, medan ordervolymen växte 15 procent. Slöserigraden enligt teamets regler är 14 procent av utgifterna inom omfånget, mest icke-produktionsmiljöer som körs över natten och på helger och några överdimensionerade databaser. Åtagandetäckningen är 20 procent av den stabila baslinjen, med 97 procents utnyttjande av det som köpts. En prognosavvikelse på plus 18 procent förra kvartalet följde på en marknadsföringskampanj som ingen hade sagt till plattformsteamet om. Ett skenande databehandlingsjobb på ett konto kördes i två dagar innan någon märkte det.

Ansvarig kommer överens om fyra ändringar med teknikteamen. En taggpolicy blockerar nya resurser utan ägar- och tjänstetaggar, med en frist på två veckor. Varje team får en veckovis kostnadsvy och en kort plats i det kostnadssamtal som hålls varannan vecka. Icke-produktionsmiljöer schemaläggs att stanna utanför arbetstid, och de tre överdimensionerade databaserna dimensioneras om efter att deras prestanda kontrollerats mot servicenivåmålen. Ett första åtagande täcker 60 procent av den stabila baslinjen, med en granskning om tre månader. Ett avvikelselarm går till det ägande teamet med en förväntan om ett registrerat beslut inom fyra timmar, och planeringskalendern innehåller nu marknadsföringskampanjer.

Efter ett kvartal är fördelningstäckningen 93 procent, slöserigraden faller till 6 procent, kostnaden per order faller till 0,26 US-dollar utan någon ändring i kassans fördröjning eller felgrad, och prognosavvikelsen är plus 5 procent. Åtagandetäckningen är 55 procent med 96 procents utnyttjande. Mediantiden till kvittering av avvikelse är 2 timmar, med den 85:e percentilen på 6. Ekonomichefen ber om en resultattabell som visar kostnad per team. FinOps-ansvarig avböjer, med förklaringen att teamen driver olika tjänster med olika tillväxt, och erbjuder i stället varje teams trend för enhetskostnad med dess tillförlitlighetsmått. Beslutet registreras och nästa granskningsdatum sätts.

## Agilitet, AI, automatisering och analys

### Agilitet

Ge ingenjörer kostnadsdatan och befogenheten att agera och granska den i samma rytm som tillförlitlighet. Varningen är att kostnadsmål som sätts utan sammanhang minskar tillförlitlighet eller fördröjer användbart arbete.

### AI

AI-tjänster kan vara en snabbt växande andel av molnkostnaden, så ge dem egen fördelning, enhetskostnad och avvikelselarm. Para kostnad per förfrågan med svarskvalitet och med levererat värde. Varningen är att en nedskärning av AI-kostnad genom att byta till en svagare modell kan höja mänskligt omarbete.

### Automatisering

Automatisera kontroller av taggning, avvikelselarm och förslag på omdimensionering och mät automatiseringen på falska larm och på besparingar som faktiskt landade. Varningen är att automatiska avstängningar av overksamma resurser kan ta bort något som behövdes.

### Analys

Visa enhetskostnad och slöseri med prognosavvikelse och datans färskhet. Beslutet detta ger underlag för är var man ska optimera och vad man ska åta sig. Varningen är att åtagandebeslut beror på prognoser, så ange deras osäkerhet.

## Branschperspektiv

**Startup.** Krediter och låga fakturor kan dölja dåliga vanor som blir dyra i skala. Tagga från första dagen, schemalägg icke-produktionsresurser och följ kostnad per kund tidigt. Åta dig bara när efterfrågan är förutsägbar.

**Småföretag.** Ett enda konto och några få tjänster gör taggning och granskning enkel. Granska fakturan månadsvis med personen som bygger systemet, ta bort bortglömda resurser och var försiktig med långa åtaganden. Ett budgetlarm är den enskilt mest värdefulla kontrollen.

**Storföretag.** Många konton, team och leverantörer kräver en central FinOps-funktion som stöder team i stället för att styra dem. Standardisera taggar och faktureringsexporter över leverantörer, förhandla åtaganden centralt och ge team deras data. Planera för skillnader i rapportering mellan flera moln.

**Offentlig sektor.** Upphandlingsramverk, dataresidens och fasta årliga budgetar begränsar valen. Dokumentera kostnads- och regionbeslut, modellera effekten av rörliga utgifter på anslag och behåll revisionsspår. Offentliga åtaganden om hållbarhet kan kräva redovisade utsläpp med metoder (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna för en FinOps-praktik är några människors tid att driva rapportering, taggpolicy och det regelbundna samtalet; verktyg, som kan tillhandahållas av molnplattformen eller köpas; och teknisk tid att agera på fynd. En liten praktik kan starta med en faktureringsexport och ett kalkylblad.

Avkastningen kommer från minskat slöseri, bättre priser genom åtaganden, färre överraskningar och bättre beslut om arkitektur. Bygg caset ur dina egna tal: slöserigraden och dess kostnad i den första granskningen, besparingarna av att schemalägga icke-produktionsmiljöer, åtagenderabatten på den del som åtagits och den undvikna kostnaden av avvikelser som fångats tidigt. Undvik att citera branschövergripande slöseriprocent eller besparingssiffror utan en spårbar källa och metod. Ta med praktikens kostnad och risken för överåtagande. Det ekonomiska caset för förbättringar i allmänhet täcks i nästa ämne (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Ett centralt team som säger nej.** Det saktar ner arbetet och team kringgår det. Stöd team med data och skyddsräcken.
- **Att skära i kostnad utan att bevaka tillförlitlighet.** Besparingarna kommer tillbaka som incidenter. Para kostnad med servicenivåmått.
- **Att jaga åtagandetäckning.** En hög procentsats med lågt utnyttjande är slöseri. Följ båda.
- **Månadsrapporter bara till ekonomi.** Ingenjörer ser dem aldrig. Ge team dagliga eller veckovisa vyer.
- **Taggning som ett städprojekt.** Det förfaller. Tillämpa taggar vid skapande.
- **Att rangordna team efter utgifter.** Tillväxt ser ut som slöseri. Visa trender för enhetskostnad med sammanhang.
- **Att prognostisera ett enda tal.** Rörlig efterfrågan bryter det. Använd intervall och drivare.
- **Att påstå exakta utsläpp.** Uppskattningsmetoder är osäkra. Ange metoden och gränserna.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Insyn och ägarskap | Månadsfaktura granskas av ekonomi | Taggar används av vissa team | Obligatoriska taggar; team ser veckovisa kostnadsvyer | Fördelningstäckning hanteras; delade pooler granskas | Kostnadsdata flödar till produktbeslut i nära realtid över leverantörer |
| Optimering | Enstaka städningar | Scheman och omdimensionering av vissa team | Slöseriregler och en stående backlog av optimeringar | Slöseri, åtaganden och enhetskostnad hanteras med tillförlitlighetsföljeslagare | Kontinuerlig, automatiserad optimering med mänsklig tillsyn och delat lärande |
| Planering | Årsbudget | Grova prognoser | Drivarbaserade prognoser med intervall | Avvikelse analyseras och återförs; åtaganden hanteras stegvis | Gemensam prognostisering med verksamheten, leverantörer och hållbarhetsmål |

## Checklista

- [ ] En liten obligatorisk uppsättning taggar (ägare, tjänst, miljö) tillämpas vid skapande av resurser.
- [ ] Fördelningstäckning redovisas veckovis, med de största otaggade posterna listade.
- [ ] Varje team har en veckovis kostnadsvy med trender och avvikelser.
- [ ] Ett regelbundet kostnadssamtal mellan teknik och ekonomi finns i kalendern.
- [ ] Molnenhetskostnad följs bredvid tillgänglighet, fördröjning och felgrad.
- [ ] Slöseriregler är nedskrivna och tillämpade, med undantag märkta.
- [ ] Åtaganden görs stegvis mot stabil basanvändning, med täckning och utnyttjande följda.
- [ ] Prognoser använder drivare och intervall, och avvikelse analyseras.
- [ ] Avvikelselarm når ägare med en förväntad tid att besluta.
- [ ] Utsläppsuppskattningar, om de redovisas, anger sin metod och sina gränser.

## AI-prompter

**Analysera en kostnadstrend.**

```text
Here is a summary of our cloud cost and usage for [service] over [period]:
[paste monthly cost, volume, and any known changes]. Break the change in cost
into volume, price, and mix effects as far as the data allows, suggest what to
check next, and propose a unit cost with a quality companion. Do not invent
prices or discounts. List your assumptions and the data you would need to be
more certain.
```

**Skriv utkast till en taggpolicy.**

```text
Draft a tag policy for [type of organization] using [cloud provider(s)]. Include
a minimal set of mandatory tags, allowed values, how they are enforced at
creation, how violations are reported to owners, and a grace period. Keep it
short enough for engineers to follow. List your assumptions and anything that
depends on provider features I should check in current documentation.
```

**Definiera slöseriregler.**

```text
Propose rules for classifying cloud resources as idle or oversized in [type of
environment], including the metrics used, time windows, exclusions (for example
resilience standbys), and a review process for false positives. Describe how
to avoid harming reliability. Do not set numeric thresholds without saying how
we should calibrate them from our own data. List your assumptions.
```

**Planera ett första åtagande.**

```text
Our steady baseline usage over the last [period] is [summary] and demand risks
are [list]. Outline a cautious plan for a first commitment: how to estimate
the baseline, how much to commit, how to review utilization, and what would
make us stop. Do not assume specific provider discounts or terms. List your
assumptions and questions for finance and procurement.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett molnkostnadsmått.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för molnkostnadsmått bär sin manipuleringsvektor, sitt skyddsräcke och sin tillförlitlighetsföljeslagare.

## Viktigaste slutsatser

- Gör kostnad synlig och ägd: tillämpa taggar vid skapande och ge varje team sin egen veckovy.
- Mät kostnad per enhet bredvid tillförlitlighet och kvalitet, aldrig ensam.
- Ta bort slöseri som en del av det normala arbetet, styrt av skrivna regler.
- Åta dig gradvis till den stabila baslinjen och följ både täckning och utnyttjande.
- Prognostisera med drivare och intervall och bevaka avvikelser med snabb respons.
- Rangordna inte team efter utgifter och ange metoden och gränserna för varje utsläppsuppskattning.

## Referenser och vidare läsning

1. Storment, J. R., and Fuller, M., *Cloud FinOps*, 2nd ed., O'Reilly, 2023.
2. FinOps Foundation, *FinOps Framework*, https://www.finops.org/framework/.
3. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Cloud computing](https://en.wikipedia.org/wiki/Cloud_computing).
7. Wikipedia, [Pay as you go](https://en.wikipedia.org/wiki/Pay_as_you_go).
8. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
9. Wikipedia, [Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing).
10. Wikipedia, [Volume discount](https://en.wikipedia.org/wiki/Volume_discount).
11. Wikipedia, [Carbon footprint](https://en.wikipedia.org/wiki/Carbon_footprint).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection).
14. Wikipedia, [Variance analysis](https://en.wikipedia.org/wiki/Variance_analysis).
