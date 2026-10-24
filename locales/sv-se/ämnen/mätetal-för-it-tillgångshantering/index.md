# Mätetal för it-tillgångshantering

**Du kan inte stödja, säkra eller betala förnuftigt för det du inte kan hitta, så mät hur korrekta, fullständiga och aktuella dina tillgångsregister är, och bygg vanan att registrera tillgångar som en biprodukt av det dagliga arbetet i stället för en årlig storstädning.**

## Översikt och motiv

Varje tjänst vilar på saker: laptops, servrar, licenser, molnkonton, nätverksenheter och de data och avtal som hör till dem. [It-tillgångshantering](https://en.wikipedia.org/wiki/IT_asset_management) (ITAM) är den uppsättning affärsmetoder som förenar ekonomiska, avtalsmässiga och inventeringsfunktioner för att stödja livscykelhantering och strategiskt beslutsfattande för it-miljön. Den besvarar frågor som andra praktiker är beroende av. Vad äger vi? Var finns det? Vem ansvarar för det? Vad kostar det? När måste det förnyas, patchas eller bytas ut?

Kontinuerlig leverans och ITIL möts besvärligt på det här området. Team som levererar programvara kontinuerligt skapar och förstör infrastruktur hela tiden: containrar, virtuella maskiner, testmiljöer och molnkonton dyker upp på minuter. Ett kalkylblad per kvartal hänger inte med. ITAM i ITIL-traditionen insisterar på register, ägare och livscykler, och det insisterandet är riktigt, eftersom ohanterade tillgångar är där säkerhetsluckor, bortslösade pengar och brister i regelefterlevnad växer. Det agila bidraget är kontinuerligt samarbete över upphandling, ekonomi, säkerhet och drift, och den praktiska vanan att registrera tillgångar automatiskt när de skapas, genom pipelines och infrastruktur som kod, så att registret är en biprodukt av arbetet.

Tre termer återkommer i det här ämnet.

- **Tillgång:** en post av värde för organisationen som hanteras genom en livscykel. I ITAM omfattar detta maskinvara, programvara, molnresurser, prenumerationer och ibland data.
- **Tillgångspost:** posten som beskriver en tillgång: vad den är, vem som äger den, var den finns, vilket tillstånd den är i, vad den kostar och vad den är länkad till.
- **Livscykel:** de steg en tillgång går igenom, vanligen begärd, upphandlad, mottagen, driftsatt, i bruk, underhållen, avvecklad och avyttrad. Tänkandet kring [produktlivscykel](https://en.wikipedia.org/wiki/Product_lifecycle) gäller för varje tillgångsklass, med olika steg för en laptop och en molnprenumeration.

ITAM överlappar med konfigurationshantering, som följer relationerna mellan komponenter så att du kan förstå konsekvensen av ändring, och de följande ämnena tar programvara, maskinvara och konfiguration i tur och ordning (se ämne 7.2, Mätetal för programvarutillgångar och licenser, ämne 7.3, Mätetal för maskinvarutillgångars livscykel, och ämne 7.4, Mätetal för konfigurations- och CMDB-kvalitet). Skillnaden gäller syfte: tillgångshantering betonar ägarskap, kostnad och livscykel, medan konfigurationshantering betonar struktur och beroende. Samma inventering matar ofta båda.

Standarden som de flesta ITAM-program hänvisar till är ISO/IEC 19770, en familj av standarder för system för it-tillgångshantering. Hänvisa till den med namn och omfång och läs den från standardiseringsorganet innan du förlitar dig på någon detalj. Det här ämnet återger inte dess text.

Tillgångsmått är lätta att förvandla till mål, och målen är lätta att nå på papperet. Ett register kan visa 100 procents noggrannhet eftersom det bara registrerar det som redan var känt. Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller: mät noggrannhet mot oberoende belägg och behandla ett perfekt tal som ett skäl att titta hårdare (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Nyckelprinciper

- **Registrera vid ändringens ögonblick.** Tillgångar bör komma in i och lämna registret som en del av arbetet som skapar eller tar bort dem.
- **Mät mot oberoende belägg.** Noggrannhet betyder överensstämmelse med verkligheten, kontrollerad med en annan metod än själva registret.
- **Varje tillgång har en ägare.** En tillgång som ingen äger kommer inte att patchas, betalas förnuftigt eller avvecklas.
- **Håll registret så litet det kan vara.** Fånga de fält beslut behöver och inte fler.
- **Kombinera källor.** Upptäcktsverktyg, upphandling, ekonomi, identitet och molnfakturering ser var och en en del av beståndet.
- **Samarbeta över funktioner.** Upphandling, ekonomi, säkerhet och drift delar registret och dess kvalitet.
- **Behandla glapp som information.** En ouppklarad tillgång är ett fynd att förstå, inte ett misslyckande att dölja.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Registrets noggrannhet | Andel stickprovade tillgångar vars post stämmer med det som hittas | stickprovade tillgångar där posten stämmer med fysiska eller tekniska belägg på alla överenskomna fält / stickprovade tillgångar | procent | Revisionsstickprov jämfört med tillgångsregistret och upptäcktsdata | It-tillgångshantering; konfigurationshantering | Definition av klart inkluderar att registrera tillgången | Kvartalsvis |
| Upptäcktstäckning | Andel förväntade tillgångar som sågs av upptäckt under perioden | tillgångar sedda av minst en upptäcktskälla de senaste 30 dagarna / tillgångar i registret som upptäckt kan se | procent | Upptäcktsverktygets rapporter sammanfogade med registret | It-tillgångshantering; övervakning och händelsehantering | Tillståndet i infrastruktur som kod stämmer med verkligheten | Månadsvis |
| Avstämningsgrad | Andel tillgångar som matchats över oberoende källor | tillgångar matchade i både registret och en andra källa (till exempel upphandling, identitet eller molnfakturering) / tillgångar i endera källan | procent | Register, upphandling, identitet, exporter från molnfakturering | It-tillgångshantering; leverantörshantering | En enda sanningskälla för miljöer | Månadsvis |
| Andel tillgångar utan ägare | Andel tillgångar utan en namngiven, giltig ägare | tillgångar utan ägare eller med en ägare som lämnat / tillgångar i registret | procent | Register sammanfogat med personkatalogen | It-tillgångshantering; informationssäkerhetshantering | Tydligt ägarskap av tjänster och komponenter | Månadsvis |
| Fullständighet i livscykelsteg | Andel tillgångar med ett aktuellt livscykelsteg och de datum steget kräver | tillgångar med steg och nödvändiga datum registrerade / tillgångar i registret | procent | Register | It-tillgångshantering; release- och driftsättningshantering | Miljöns livscykel följs i pipelinen | Månadsvis |
| Tid att registrera | Fördröjning mellan en tillgångsändring och dess uppdatering i registret | median och 85:e percentil av timmar eller dagar från ändringshändelsen till registeruppdateringen | dagar | Ändrings-, upphandlings- eller pipelinehändelser jämförda med registrets tidsstämplar | It-tillgångshantering; ändringsmöjliggörande | Automatisk registrering i pipelinen | Månadsvis |
| Andel ouppklarade tillgångar | Andel förväntade tillgångar som inte kan lokaliseras eller förklaras vid revision | tillgångar som förväntades men inte hittades, och som inte förklaras av en godkänd avyttring / förväntade tillgångar | procent | Revisionsresultat | It-tillgångshantering; informationssäkerhetshantering | Retrospektivt fynd om förlorade poster | Per revision |

Ange vad "tillgång" omfattar för varje klass. En laptop, en virtuell maskin, en prenumeration och en licens är olika, och postens fält och beläggen skiljer sig. Tid att registrera startar vid händelsen som skapade ändringen, till exempel mottagen leverans, en pipelinekörning eller en prenumerations start, och stoppar när registret speglar den. Uteslut tillgångar som avsiktligt ligger utanför omfånget, till exempel kortlivade testcontainrar, och lista dem som en undantagsklass i registret.

## Rekommendationer

### Avgör vad du hanterar

**1. Lista de tillgångsklasser som spelar roll och varför.** Börja med de som bär kostnad, risk eller juridisk skyldighet: användarenheter, servrar och molnkonton, nätverksutrustning, programvarulicenser och prenumerationer och kritiska datalager. För varje klass, skriv de beslut posten måste stödja: patchning, förnyelse, revision, utbyte, avyttring. Hoppa över klasser som inget beslut behöver.

**2. Definiera minimifälten.** För varje klass, välj de få fält som besluten kräver: identifierare, typ, ägare, plats eller konto, status, förvärvs- och slutdatum, kostnadsställe och länkar till tjänsten den stöder. En kort post som är korrekt är värd mer än en lång som är föråldrad. Registrera definitionen i mätetalsregistret.

**3. Tilldela en ägare för varje klass och varje tillgång.** Klassägaren utformar posten och processen. Tillgångsägaren är personen eller teamet som är ansvarigt för tillgången i bruk. Använd ett team, inte en individ, när en tillgång delas, och håll katalogen aktuell så att avgångar inte gör tillgångar föräldralösa.

### Fånga tillgångar medan arbetet sker

**4. Registrera tillgångar i pipelinen.** Där infrastruktur skapas av kod, låt pipelinen skriva till registret vid skapande och borttagning. Det gör tid att registrera nära noll och får registret att stämma med koden. Den agila praxisen att leverera ändring kontinuerligt stöder detta: om varje driftsättning uppdaterar registret är registret sällan fel.

**5. Länka upphandling och register.** För inköpt maskinvara och programvara, gör inköpsordern eller skapandet av prenumerationen till utlösaren för en post, och varumottagning eller aktivering till utlösaren för en tillståndsändring. Praxis för [lagerhantering](https://en.wikipedia.org/wiki/Inventory_management) av fysiska varor erbjuder användbara mönster för att ta emot, lagra och utlämna poster. Där inköp sker utanför upphandlingen, till exempel teamens kreditkort för prenumerationer, lägg till en månatlig kontroll av utläggsdata.

**6. Använd upptäckt som en kontroll, inte som registret.** Upptäcktsverktyg skannar nätverk och molnkonton och rapporterar vad de hittar. De är bra på att tala om vad som finns och dåliga på att tala om vem som äger det eller varför. Använd dem för att upptäcka saknade och okända tillgångar och för att jämföra med registret. Steget att matcha en källa mot en annan är en form av [avstämning](https://en.wikipedia.org/wiki/Reconciliation_(accounting)), samma idé som revisorer använder för att jämföra två uppsättningar register.

**7. Tagga och märk vid skapande.** Kräv en ägare och en tjänstetagg på varje molnresurs och en etikett på varje fysisk enhet. Metoder för [tillgångsspårning](https://en.wikipedia.org/wiki/Asset_tracking) såsom streckkoder och radiofrekvensetiketter hjälper med fysiska poster i lager och kontor. Otaggade resurser är fynd för ägarens team, hanterade som en normal del av driften.

### Mät ärligt

**8. Revidera med ett slumpmässigt stickprov.** Varje kvartal, dra ett slumpmässigt stickprov av tillgångar ur registret och kontrollera dem mot belägg: hitta enheten, inspektera resursen, bekräfta ägaren. Dra sedan ett stickprov åt andra hållet, ur upptäcktsresultat och upphandlingsdata, och kontrollera att var och en finns i registret. De två riktningarna avslöjar olika glapp. Redovisa noggrannhet för varje klass separat.

**9. Bevaka datakvalitet över tid.** Registrens fullständighet, noggrannhet och aktualitet är aspekter av [datakvalitet](https://en.wikipedia.org/wiki/Data_quality). Följ trenden per fält och per klass och titta på vilka fält som driver snabbast. Avdrift i ägare och plats är normalt och talar om var man ska automatisera.

**10. Redovisa glappen.** Visa de ouppklarade tillgångarna, andelen utan ägare och de oavstämda posterna såväl som den övergripande noggrannheten. En rapport som döljer sina undantag är en rapport om rapporten. Namnge en ägare och ett datum för varje klass av glapp.

### Stäng cirkeln

**11. Avveckla tillgångar lika medvetet som du skapar dem.** Avyttring behöver också register: datumet, metoden och, för enheter som höll data, belägg för att datan raderats. En [spårbarhetskedja](https://en.wikipedia.org/wiki/Chain_of_custody) (chain of custody) visar vem som hanterade en tillgång och när. Avvecklade tillgångar som fortfarande finns i registret blåser upp kostnader och förvirrar revisioner.

**12. Använd registret i vardagliga beslut.** Patchning, förnyelser, säkerhetssvar och budgetering bör läsa från registret. När människor använder det, rättar de det. När registret bara är till för revisioner förfaller det. Granska registrets användning med teamen som är beroende av det och rätta de fält de klagar på först.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Registrets noggrannhet | Att stickprova de lätta tillgångarna; att revidera först efter en städning; att räkna en matchning på färre fält | Slumpmässigt stickprov draget av någon utanför teamet; fast fältlista; stickprov från båda riktningarna |
| Upptäcktstäckning | Att snäva in "förväntade tillgångar" till det upptäckt kan se; att utesluta nätverk som är svåra att skanna | Dokumentera undantag; jämför med upphandling och molnfakturering |
| Avstämningsgrad | Att välja en andra källa som härletts ur den första; att automatiskt matcha på svaga nycklar | Använd verkligt oberoende källor; stickprovskontrollera matchningar för hand |
| Andel tillgångar utan ägare | Att tilldela ett samlingsteam som ägare; att föra in en platshållarperson | Antal tillgångar ägda av samlingsteam; stickprov av ägarbekräftelse |
| Fullständighet i livscykelsteg | Att fylla i standarddatum; att sätta varje tillgång till "i bruk" | Jämför steg med belägg i revisionen; titta på åldersfördelningen |
| Tid att registrera | Att bakdatera ändringshändelser; att registrera händelsetiden som registertid | Jämför med källsystemets tidsstämplar; revisionsspår på redigeringar |
| Andel ouppklarade tillgångar | Att avskriva tillgångar utan godkännande; att omklassificera dem som avyttrade | Andel avyttringar med godkännande och belägg; jämför avskrivningar med ekonomins register |

En sund avläsning är en noggrannhetssiffra som ligger under 100 procent av ärliga skäl, med synliga glapp som krymper, ägare som bekräftar sina tillgångar när de tillfrågas och ett register som människor använder för att fatta beslut.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Automatisk registrering | Snabb, konsekvent, låg insats | Kräver teknik; missar saker utanför pipelinen |
| Manuell registrering | Flexibel, fungerar för vad som helst | Långsam, felbenägen, förfaller |
| Upptäcktsdriven | Hittar det okända | Kan inte ange ägarskap eller syfte |
| Upphandlingsdriven | Fångar kostnad och avtal | Missar skuggköp och gratisnivåer |
| Stram kontroll av inköp | Starkt register | Saktar team; uppmuntrar kringgåenden |
| Lätt kontroll med kontroller | Snabb; förlitar sig på förtroende | Fler glapp att hitta och rätta |
| Stort registerschema | Rik rapportering | Svårt att hålla korrekt |
| Litet registerschema | Lätt att underhålla | Begränsad analys |

Svaret är att automatisera registrering där infrastruktur är kod, använda upptäckts- och faktureringsdata som oberoende kontroller och hålla registret litet. Lita på att team skapar det de behöver, be dem tagga det och verifiera med stickprov.

## Frågor att diskutera med teamet

**1. Om vi i morgon måste hitta varje tillgång knuten till vår viktigaste tjänst, hur lång tid skulle det ta?**
Välj en tjänst och spåra dess tillgångar ur registret och ur andra källor. Tidta övningen och notera glappen. Facilitatorn bör registrera vilka källor som stämde överens och vilka som inte gjorde det. Resultatet visar om registret är ett fungerande verktyg eller ett dokument.

**2. Vilka tillgångar skapas utan att någon i det här rummet vet om det?**
Tänk på molnkonton, prenumerationer, testmiljöer och enheter köpta utanför upphandlingen. Fråga hur dessa skulle synas. Samtalet hittar läckorna. Enas om en källa till oberoende belägg att lägga till i avstämningen det här kvartalet.

**3. Vem äger tillgångarna vi har i dag, och hur vet vi att de fortfarande finns kvar?**
Ta ett stickprov av tillgångar och be de namngivna ägarna bekräfta. Notera hur många ägare som bytt roll eller lämnat. Besluta hur katalogen och registret ska hållas i takt, till exempel genom en automatisk kontroll när någon slutar.

**4. Hur reviderar vi vårt eget register utan att rätta våra egna läxor?**
Diskutera vem som drar stickprovet och vem som kontrollerar det. Fråga vad som skulle hända om resultatet var dåligt. Facilitatorn bör utforska om människor känner sig trygga med att redovisa ett dåligt tal, eftersom en otrygg revision producerar goda tal.

**5. Vad registrerar vi som ingen använder?**
Lista fälten i registret och fråga vilka beslut som använder vart och ett. Fält utan användare är kandidater för borttagning. Fält som används men är opålitliga är kandidater för automatisering. Enas om två ändringar.

**6. Vad händer med en tillgång mellan "behövs inte längre" och "borta"?**
Följ en avvecklad enhet eller en nedlagd tjänst. Vem bekräftar att data raderats? När stängs posten? Glappen på den här vägen är där kostnad, risk och revisionsfynd ackumuleras.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam skapar de flesta nya tillgångar, och de känner registerföring som friktion om den inte är automatisk. De bör behandla tillgångsposten som en del av definitionen av klart för en miljö, låta pipelines registrera det de skapar och tagga resurser med ägare. De har nytta av ett korrekt register när de behöver hitta kostnader, patcha eller avveckla en miljö.

### Service- och driftteam

Driftteam är beroende av registret för patchning, incidentrespons och kapacitet. De bör stämma av upptäckt mot registret, driva tillgångar utan ägare och redovisa glapp som fynd. De håller också i den fysiska hanteringen: mottagning, avbildning, lagring och avyttring, där register över spårbarhetskedjan spelar roll.

### Ledning och styrning

Ledare och revisorer förlitar sig på tillgångsdata för kostnadskontroll, säkerhetsförsäkran och regelefterlevnad. De bör be om noggrannhetsmetoden och glapplistan, inte bara huvudsiffran, och finansiera automatisering av registrering. Styrningen bör förvänta sig att registret används i beslut och bör behandla en redovisad 100-procentsiffra med misstänksamhet.

### Kunder och användare

Användare upplever tillgångshantering när en enhet anländer klar, en licens finns där när den behövs och en förlorad laptop hanteras väl. Deras återkoppling om introduktion och utrustning är belägg för hur processen fungerar i praktiken (se ämne 6.4, Användar- och medarbetarupplevelse). De har också en roll: att tala om för it när utrustning flyttas eller lämnar.

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på ett medelstort logistikföretag stöder ungefär 2 400 anställda och driver en produktplattform på molninfrastruktur. Siffrorna nedan är illustrativa.

En intern revision ber om antalet enheter och molnresurser företaget äger. Registret visar 3 100 användarenheter och 1 850 molnresurser. Tillgångschefen beslutar att pröva siffrorna innan de redovisas. Hon drar ett slumpmässigt stickprov på 100 enheter ur registret och finner 87 som stämmer på alla fyra överenskomna fält, en noggrannhet på 87 procent. Från andra hållet drar hon 100 enheter ur verktyget för slutpunktshantering och finner 94 i registret. Upptäcktstäckningen av molnbeståndet är 82 procent, eftersom tre konton skapade av projektteam inte är anslutna till upptäcktsverktyget. Avstämning av molnfaktureringsexporten mot registret matchar 71 procent av de debiterade resurserna, och de omatchade är mest otaggade testmiljöer. Andelen tillgångar utan ägare är 9 procent, med en tredjedel av dem ägda av människor som lämnat.

Teamet gör fyra ändringar med produktteamen och ekonomi. Pipelinemallarna registrerar nu varje ny miljö och kräver en ägare och en tjänstetagg. Den månatliga molnfakturan stäms av mot registret, med otaggade resurser redovisade till kontoägare. En månatlig kontroll jämför personkatalogen med tillgångsägare och skickar en lista till chefer när någon slutar. Varumottagning på lagret utlöser en registeruppdatering samma dag. De ändrar också hur de redovisar: revisionssammanfattningen visar noggrannhet från båda stickprovsriktningarna, glapplistan och andelen utan ägare.

Efter två kvartal är noggrannheten från registerstickprovet 93 procent, avstämningen av molnbeståndet 90 procent och andelen utan ägare 3 procent. Ekonomichefen ber om ett enda tal för "registrets noggrannhet" till styrelsen. Tillgångschefen ger siffran med metoden och glapplistan och avböjer att redovisa ett mål på 100 procent, med förklaringen att syftet är att hålla glappen synliga och krympande. Beslutet registreras, och teamet noterar att det lägre talet från en bättre metod är mer användbart än den tidigare overifierade siffran.

## Agilitet, AI, automatisering och analys

### Agilitet

Registrera tillgångar som en biprodukt av det dagliga arbetet och granska noggrannheten med ägare i regelbunden rytm, i stället för en årlig storstädning. Varningen är att ett mål för noggrannhet kan driva team att radera poster de inte kan bekräfta.

### AI

AI-verktyg och prenumerationer är också tillgångar, och de införs ofta utan ett register. Ta med AI-tjänster, modeller och datakällor i upptäckten och para registrets noggrannhet med andelen tillgångar utan ägare. Varningen är att AI-funktioner som slås på i befintliga produkter inte syns som nya inköp, så fråga leverantörer vad som är påslaget.

### Automatisering

Kör upptäckt automatiskt och stäm av den mot inköps- och identitetsregister och mät upptäckt på täckning och felaktiga matchningar. Varningen är att upptäckt hittar det den riktas mot, så revidera det den missar.

### Analys

Redovisa noggrannhet ur en stickprovsrevision med stickprovsstorleken, såväl som ur verktygens antal. Beslutet detta ger underlag för är var man ska investera i upptäckt och ägarskap. Varningen är att avstämning av två bristfälliga källor kan se ren ut medan båda är fel.

## Branschperspektiv

**Startup.** Det finns kanske inget formellt register, bara molnkonton och några laptops. Håll en enkel lista med ägare, tagga molnresurser från början och granska listan månadsvis. Undvik att köpa en plattform innan du vet vilka frågor du behöver besvara.

**Småföretag.** En enda administratör kan hantera allt. Ett kalkylblad med några fält kan fungera, om någon kontrollerar det mot inköp två gånger om året. Var uppmärksam på licenser och prenumerationer, som är lätta att tappa koll på, och på avyttring av enheter som höll data.

**Storföretag.** Skala behöver automatisering, tydliga klassägare och avstämning över flera källor. Räkna med att förvärv medför obekanta bestånd och planera ett standardsätt att föra in dem i samma register. Anpassa med ekonomi om tillgångsredovisning, inklusive hur [anläggningstillgångar](https://en.wikipedia.org/wiki/Fixed_asset) aktiveras och skrivs av, och kom överens om var it-registret och ekonomins huvudbok måste stämma.

**Offentlig sektor.** Offentliga organ möter revision, upphandlingsregler och skyldigheter kring register, och håller ofta känsliga data på enheter. Behåll belägg för avyttring, dokumentera spårbarhetskedjan och anpassa registret till krävd tillgångsrapportering. Behandla registret som en del av beläggen vid revisioner (se ämne 8.3, Mätetal för regelefterlevnad och revision).

## Affärscase: motiv, ROI och TCO

Kostnaderna omfattar tid att utforma posten, verktyg för upptäckt och avstämning om du inte har dem, teknisk insats för att registrera tillgångar i pipelines och den rutinmässiga insatsen av stickprov och rättelser. Många organisationer äger redan verktyg för upptäckt och slutpunkter. Ett måttligt team kan driva ett program, och den löpande kostnaden är låg när registreringen är automatiserad.

Avkastningen är undvikt slöseri och minskad risk. Korrekta register minskar betalning för oanvända prenumerationer och resurser, påskyndar incidentrespons och patchning eftersom du vet vad som finns och minskar revisionsinsatsen. Undvik att göra anspråk på specifika procentuella besparingar från publicerade studier. Mät din egen baslinje: antalet molnresurser utan ägare och deras månadskostnad, tiden att besvara en revisionsfråga och licenser som betalas men inte används. Räkna riskkostnaden också: en okänd server är en säkerhetsexponering, och en förlorad enhet med data har en kostnad för underrättelse. Den ekonomiska behandlingen av kostnader täcks senare i den här delen (se ämne 7.5, Tjänstekostnad och enhetsekonomi).

## Antimönster och fallgropar

- **Den årliga storstädningen.** En stor insats en gång om året förfaller inom veckor. Registrera kontinuerligt och stickprova varje kvartal.
- **Att bara revidera registret.** Det bevisar att registret stämmer med sig självt. Stickprova från oberoende belägg i båda riktningarna.
- **En perfekt siffra.** En siffra på 100 procent betyder vanligen snävt omfång eller svaga belägg. Titta på vad som uteslutits.
- **Ägarfält fyllda med ett samlingsteam.** Det ser fullständigt ut och är oanvändbart. Räkna samlingsägarskap som ett glapp.
- **För många fält.** Människor fyller dem med standardvärden. Håll registret till det beslut behöver.
- **Verktyg först, process senare.** En upptäcktsplattform utan ägarskaps- och livscykelregler producerar en större oreda. Bestäm frågorna först.
- **Att straffa team för glapp.** De döljer tillgångar. Behandla glapp som fynd och rätta orsaken.
- **Att glömma avyttring.** Avvecklade tillgångar som stannar kvar i registret eller lämnar utan raderingsbevis skapar kostnad och risk.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Insamling | Kalkylblad uppdateras när man minns | Register för huvudklasser, mest manuellt | Registrering knuten till upphandling och pipelines | Registrering automatiserad; tid att registrera mäts | Tillgångar registreras över team och leverantörer ur ett flöde av händelser |
| Noggrannhet | Okänd | Enstaka räkningar | Kvartalsvis oberoende stickprov i båda riktningarna | Noggrannhet och glapp följs per klass och matas in i förbättring | Oberoende kontroller delas över it, ekonomi och säkerhet |
| Användning | Registret används bara för revisioner | Används av några få team | Patchning, förnyelse och budgetering läser från registret | Användningen granskas; fält justeras efter beslut | Registret driver automatiska beslut med mänsklig tillsyn |

## Checklista

- [ ] Tillgångsklasser och de beslut varje post stöder är listade.
- [ ] Minimifält per klass är definierade och registrerade i mätetalsregistret.
- [ ] Varje klass och varje tillgång har en namngiven ägare, hållen aktuell mot katalogen.
- [ ] Pipelines registrerar ny infrastruktur med en ägare och en tjänstetagg.
- [ ] Upphandling och skapande av prenumerationer utlöser tillgångsposter.
- [ ] Upptäckts- och faktureringsdata stäms av mot registret månadsvis.
- [ ] Ett slumpmässigt stickprov revideras varje kvartal i båda riktningarna.
- [ ] Glapplistor med ägare och datum publiceras med noggrannhetssiffror.
- [ ] Avyttring har en registrerad metod och belägg för dataradering.
- [ ] Oanvända fält tas bort; registret används i dagliga beslut.

## AI-prompter

**Utforma en minimitillgångspost.**

```text
We manage these classes of IT asset in [type of organization]: [list]. The
decisions our asset data must support are: [list, for example patching,
renewal, audit, refresh, disposal]. For each class, propose the minimum fields
for the record, which source should supply each field, and how each could be
verified independently. Do not invent regulatory requirements. List your
assumptions and anything I should confirm with finance, security, or legal.
```

**Planera ett tvåvägs revisionsstickprov.**

```text
Our register holds [number] assets across [classes]. We also have discovery
data, procurement data, and cloud billing data. Design a quarterly audit with
random samples drawn from the register and from the other sources, say how big
each sample should be for a useful read (explain the reasoning without
overstating precision), what to record, and how to report accuracy and gaps
honestly. List your assumptions.
```

**Analysera ett avstämningsresultat.**

```text
We reconciled our register with [source] and found: matched [number], in the
register only [number], in the source only [number]. Here are examples of each
group with the fields we hold: [paste anonymized examples]. Suggest likely
reasons for each mismatch, which are quick to fix, which need a process change,
and what to check first. Do not assume causes the data cannot support. List
your assumptions.
```

**Skriv utkast till en kontroll av avgångar och byten.**

```text
Draft a simple monthly process to find assets whose owners have left or changed
role, using the people directory and the asset register. Include steps, who
receives the list, the time allowed to reassign, what happens if nobody
responds, and how to record the outcome. Context: [tools and team size]. List
your assumptions and privacy considerations I should check.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett tillgångsmått innan du redovisar det.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för tillgångsmått bär sin manipuleringsvektor, sitt skyddsräcke och sin regel om oberoende belägg.

## Viktigaste slutsatser

- Registrera tillgångar vid ändringens ögonblick, helst genom pipelines och upphandling, så att registret är en biprodukt av arbetet.
- Mät noggrannhet mot oberoende belägg, med stickprov i båda riktningarna.
- Varje tillgång behöver en ägare, och tillgångar utan ägare är fynd.
- Håll registret litet och gör det användbart i dagliga beslut.
- Redovisa glappen, inte bara huvudsiffran, och misstro en perfekt siffra.
- Planera avyttring lika noggrant som skapande.

## Referenser och vidare läsning

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: IT Asset Management*, TSO, 2020.
3. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
4. Redman, T. C., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
5. Wikipedia, [IT asset management](https://en.wikipedia.org/wiki/IT_asset_management).
6. Wikipedia, [Product lifecycle](https://en.wikipedia.org/wiki/Product_lifecycle).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Inventory management](https://en.wikipedia.org/wiki/Inventory_management).
9. Wikipedia, [Reconciliation (accounting)](https://en.wikipedia.org/wiki/Reconciliation_(accounting)).
10. Wikipedia, [Asset tracking](https://en.wikipedia.org/wiki/Asset_tracking).
11. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
12. Wikipedia, [Chain of custody](https://en.wikipedia.org/wiki/Chain_of_custody).
13. Wikipedia, [Fixed asset](https://en.wikipedia.org/wiki/Fixed_asset).
