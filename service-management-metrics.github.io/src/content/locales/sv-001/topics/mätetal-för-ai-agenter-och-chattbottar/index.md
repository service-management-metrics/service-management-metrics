# Mätetal för AI-agenter och chattbottar

**En samtalsassistent har hjälpt först när användarens problem är löst och förblir löst, så mät verifierad lösning, återkommande kontakter, kvaliteten på överlämningen till en person och skadan av felaktiga handlingar, och belöna aldrig en bot för att hålla människor borta från hjälp.**

## Översikt och motiv

Många organisationer placerar nu en samtalsassistent mellan användare och servicedesken, och vissa ger AI-agenter förmågan att agera: återställa ett lösenord, beställa utrustning, starta om en tjänst, ändra en konfiguration. En [chattbott](https://en.wikipedia.org/wiki/Chatbot) är ett program som för ett samtal, och en [virtuell assistent](https://en.wikipedia.org/wiki/Virtual_assistant) lägger till förmågan att utföra uppgifter å användarens vägnar. Den bredare idén om en [intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent) är ett system som uppfattar en omgivning och vidtar handlingar mot mål. Moderna språkmodeller gör dessa system långt mer kapabla till öppet samtal än deras regelbaserade föregångare, och det första samtalsprogrammet, Joseph Weizenbaums ELIZA från 1960-talet, visade redan hur lätt människor tillskriver förståelse åt en maskin som bara producerar rimliga svar.

Dragningskraften är uppenbar. Användare får hjälp när som helst på dygnet utan att vänta. Team lägger mindre tid på rutinförfrågningar. [Självbetjäning](https://en.wikipedia.org/wiki/Self-service) har länge varit ett mål för ITSM, och shift-left, flytten av lösning till tidigare och billigare punkter, är en kärnidé för servicedesken (se ämne 3.7, Mätetal för självbetjäning och automatisering). Mätproblemet är att de uppenbara talen belönar fel saker. En bot som avslutar ett samtal räknas som att ha "inneslutit" det, oavsett om användaren fick hjälp eller gav upp. En bot som aldrig erbjuder en människa maximerar inneslutning. En bot som självsäkert ger ett felaktigt svar producerar ett tyst misslyckande som visar sig som en arg kontakt dagar senare.

Två slags system behöver särskilda mått.

- **Samtalsassistenter** svarar på frågor, vägleder användare och samlar in information. Deras risk är felaktiga eller ohjälpsamma svar och att fånga användare i loopar. Måtten fokuserar på lösning, riktighet och vägen till en person.
- **Agenter som agerar** ändrar saker i världen: konton, system, ärenden, pengar. Deras risk är en felaktig handling med verkliga följder. Måtten fokuserar på handlingarnas riktighet, möjligheten att återkalla dem, behörighetsgränser och spårbarhet. Dessa användningar kräver starkare styrning och ofta mänskligt godkännande för följdtunga steg (se ämne 10.5, Mätetal för AI-styrning och AI-risk).

Flera designfrågor formar vad du mäter.

- **Ärlighet om vad användaren talar med.** Många jurisdiktioner har eller utvecklar skyldigheter att berätta för människor när de interagerar med ett AI-system, och i oktober 2026 utvecklas dessa regler, så kontrollera vad som gäller dig. God praxis är att säga det tydligt i alla fall.
- **En väg ut.** Användare måste kunna nå en person utan kamp. En bot som döljer vägen till en människa är ett [mörkt mönster](https://en.wikipedia.org/wiki/Dark_pattern), en design som lurar eller fångar användare till utfall de inte skulle välja.
- **Tillgänglighet.** Samtalsgränssnitt måste fungera för människor som använder hjälpmedel, de med begränsad språkförmåga och de som behöver ett annat språk eller en annan kanal.
- **Automatiserade beslut.** När en assistents utdata påverkar en persons rättigheter eller tillgång gäller ämnet [automatiserat beslutsfattande](https://en.wikipedia.org/wiki/Automated_decision-making) och skyldigheterna kring det. Låt sådana beslut ligga hos människor, eller med starka skyddsåtgärder.

Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) är livfullt här: om inneslutning eller avledning är målet är det billigaste sättet att nå det att göra människan svårare att nå (se ämne 1.2, Goodharts lag och mätetalens psykologi). Måtten nedan sätter lösning och användarens utfall först.

## Nyckelprinciper

- **Lösning är måttet, inte inneslutning.** Ett samtal som tog slut är inte ett problem som löstes.
- **Verifiera och kontrollera återkomst.** Räkna en kontakt som löst först när användaren bekräftar eller inte kommer tillbaka.
- **Ge alltid en väg till en person.** Gör vägen lätt, snabb och synlig och för över sammanhanget.
- **Var ärlig om systemet.** Säg att det är en AI, vad den kan göra och vad den inte kan.
- **Begränsa vad agenter får göra.** Ge minsta möjliga behörighet, kräv godkännande för följdtunga handlingar och för en spårbar logg.
- **Mät kvaliteten på svar genom stickprov.** Flytande svar kan vara felaktiga.
- **Lyssna på användare och på personalen som plockar upp bitarna.** De ser vad måtten missar.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Grad av verifierad lösning | Andel bottsamtal där användaren bekräftade att frågan var löst eller inte återkom inom en angiven period | samtal med bekräftad lösning eller ingen återkommande kontakt inom 7 dagar / samtal som startade med en löstbar avsikt | procent | Samtalsloggar, användarbekräftelse, ärende- och kontaktdata | Servicedesk; kunskapshantering | Fungerande utfall för användaren | Veckovis |
| Grad av återkommande kontakt | Andel botavslutade samtal som följdes av en kontakt om samma fråga via vilken kanal som helst | samtal följda av en relaterad kontakt inom 7 dagar / samtal avslutade utan överlämning | procent | Samtalsloggar kopplade till ärende- och kontaktregister | Servicedesk; incidenthantering | Undkomna fel | Veckovis |
| Fullständighet i överlämningens sammanhang | Andel överlämningar till en person där personen hade den information som behövdes utan att be användaren upprepa | stickprovade överlämningar bedömda som fullständiga av den mottagande agenten / stickprovade överlämningar | procent | Stickprovade överlämningar, agentens återkoppling | Servicedesk; kunskapshantering | Smidigt samarbete över gränsen | Månadsvis |
| Tid till människa | Tid från att användaren ber om en person, eller boten beslutar att lämna över, till att en person tar över | median och 85:e percentil i minuter | minuter | Samtalsloggar, ködata | Servicedesk; incidenthantering | Responsivitet när användaren behöver hjälp | Veckovis |
| Svarens riktighet | Andel stickprovade botsvar som en kvalificerad granskare bedömde som riktiga, fullständiga och säkra | svar bedömda som riktiga / stickprovade svar | procent | Stickprovsgranskning | Kunskapshantering; kvalitetssäkring | Definition av klart för ett svar | Månadsvis |
| Botnöjdhet och ansträngning | Användarens betyg av nöjdhet och enkelhet efter ett samtal, med kommentarer | gynnsamma omdömen / omdömen; medelvärde för ansträngning | procent; skalpoäng | Kort enkät efter samtalet | Servicedesk; kundupplevelse | Återkoppling på fungerande programvara | Veckovis |
| Återkallandegrad för agenthandlingar | Andel handlingar som en AI-agent vidtog som behövde rättas, göras ogjorda eller eskaleras | handlingar som återkallats eller rättats / vidtagna handlingar, per handlingstyp och riskklass | procent | Handlingslogg, ändringsregister | Ändringsmöjliggörande; incidenthantering | Omarbete och återställning | Veckovis |

Definiera de avsikter boten hanterar och undanta från inneslutning de som den alltid ska lämna över. Verifierad lösning räknar ett samtal bara om frågan låg inom omfånget och användaren antingen bekräftade eller inte visade någon återkommande kontakt. Tid till människa startar vid användarens begäran, inte vid slutet av en meny. Svarens riktighet bedöms mot kunskapsbasen och policyn av en person som inte byggde boten. Återkallande av agenthandlingar delas upp per handlingstyp och riskklass, och varje skadlig handling redovisas separat som en incident.

## Rekommendationer

### Definiera framgång som lösning

**1. Definiera avsikterna och det utfall du vill ha.** Lista de problem assistenten ska hantera, till exempel lösenordsåterställning, behörighetsstatus och hur-frågor, och utfallet för var och en: besvarat, utfört eller överlämnat. Bestäm vilka avsikter som alltid måste gå till en person: klagomål, allt som rör nöd, säkerhet, rättigheter eller pengar. En bot som försöker hantera allt misslyckas illa i ytterkanterna.

**2. Mät verifierad lösning och återkomster.** Fråga användare i slutet om deras fråga är löst och leta också efter relaterade kontakter efteråt. Ingendera räcker ensam: användare som ger upp svarar inte, och en del som fick hjälp ringer ändå. Tillsammans approximerar de verklig lösning. Behandla graden av återkommande kontakt som det viktigaste skyddsräcket för varje inneslutningstal (se ämne 3.1, Mätetal för servicedesk).

**3. Undvik inneslutning som mål.** Redovisa inneslutning bara som ett beskrivande tal och alltid bredvid verifierad lösning, återkomster och nöjdhet. Stigande inneslutning med stigande återkomster betyder att boten vänder bort människor. Sätt inget inneslutningsmål och knyt ingens prestation till det.

### Gör vägen till en person lätt och bra

**4. Låt användare nå en person när som helst.** Erbjud ett tydligt, enkelt sätt att be om en människa och respektera det. Mät tid till människa och andelen samtal där användare bad mer än en gång. Testa vägen själv regelbundet. Där en person inte är tillgänglig, säg när en blir det och erbjud återuppringning.

**5. Lämna över med sammanhanget.** När boten överför ett samtal till en person, inkludera sammanfattningen, vad som prövats, användarens egna ord och relevanta kontouppgifter så att användaren inte behöver upprepa sig. Be mottagande agenter bedöma om överlämningen var fullständig och stickprova resultaten. Dåliga överlämningar får användare att lita mindre både på boten och på tjänsten (se ämne 9.3, Mätetal för samarbete och överlämningar).

**6. Utforma för alla användare.** Testa assistenten med användare som använder hjälpmedel, som skriver på andra språk, som har bråttom eller är i nöd och som inte är bekväma med tekniken. Erbjud andra kanaler. Mät verifierad lösning och nöjdhet per användargrupp där det är säkert och lagligt. Medelvärden döljer de som boten sviker mest.

### Kontrollera kvaliteten på vad den säger och gör

**7. Stickprova svar för riktighet och säkerhet.** Varje månad, dra ett slumpmässigt stickprov av samtal och låt en kvalificerad person bedöma svaren: riktiga, fullständiga, säkra och ärliga om osäkerhet. Registrera fel efter typ: föråldrade, påhittade, i strid med policy eller missförstådda. Mata felen till kunskapsbasen och konfigurationen. Lägg till riktade test för känsliga ämnen och för försök att pressa assistenten utanför sitt omfång.

**8. Håll kunskapen aktuell.** En assistent är bara så bra som innehållet och verktygen den drar på. Länka svarsfel till kunskapsartiklar och mät aktualiteten hos den kunskap den använder (se ämne 3.6, Mätetal för kunskapshantering). Där systemet använder hämtning ur en kunskapsbas, inkludera en kontroll av att det anger sina källor och att källorna är rätt.

**9. Var ärlig mot användare.** Ange i början att de talar med en AI och vad den kan och inte kan göra. Ge den inte ett mänskligt namn eller en mänsklig framtoning som antyder något annat. Där den är osäker bör den säga det och erbjuda en person. Kontrollera gällande lag om upplysning.

### Styr agenter som agerar

**10. Klassificera handlingar efter risk och sätt behörigheter därefter.** För varje handling en agent kan vidta, definiera dess riskklass: informativ, återkallbar med låg påverkan eller följdtung. Ge minsta nödvändiga behörighet. Kräv mänskligt godkännande för följdtunga handlingar. För en spårbar logg över varje handling med skälet, användaren och resultatet. Dessa kontroller knyter an till ändrings- och säkerhetsmåtten i tidigare delar (se ämne 8.1, Mätetal för säkerhetsincidenter och sårbarheter, och ämne 8.2, Mätetal för risker och kontroller).

**11. Mät handlingarnas riktighet och återkallbarhet.** Följ återkallandegraden per handlingstyp och granska varje skadlig handling som en incident, skuldfritt. Testa agenter i en säker miljö innan åtkomst ges och testa om när modellen eller verktygen ändras. En ny modellversion kan ändra beteende, så behandla den som en ändring som behöver kontroll (se ämne 4.3, Mätetal för ändringsmöjliggörande).

**12. Lyssna på människorna som plockar upp bitarna.** Servicedeskens personal ser följderna av botmisslyckanden: arga användare, upprepade kontakter och röror att städa upp. Fråga dem regelbundet vad boten gör fel och vad som gör det svårare. Deras återkoppling och användarnas kommentarer är belägg som inget mått fångar fullt ut, och det bör forma nästa omgång ändringar.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Grad av verifierad lösning | Att räkna varje samtalsslut som löst; att ställa ledande bekräftelsefrågor | Definiera bekräftelse neutralt; grad av återkommande kontakt; stickprova samtal |
| Grad av återkommande kontakt | Att bara mäta via en kanal; korta fönster | Koppla ihop alla kanaler; använd ett längre fönster som kontroll; stickprova återkomster |
| Fullständighet i överlämningens sammanhang | Att skicka en lång avskrift i stället för en sammanfattning; att stickprova lätta överlämningar | Bedömning av mottagande agent; slumpmässigt stickprov; tid till lösning efter överlämning |
| Tid till människa | Att starta klockan efter menyer; att räkna en köbekräftelse som övertagande | Klockan startar vid begäran; övertagande betyder att en person är aktiv i samtalet |
| Svarens riktighet | Att stickprova lätta samtal; överseende granskare | Slumpmässigt stickprov av oberoende granskare; motstridiga testfall |
| Botnöjdhet och ansträngning | Att bara enkätera slutförda samtal; att placera enkäten där bara nöjda användare når den | Enkätera även avbrutna samtal; svarsfrekvens och sammansättning; läs kommentarer |
| Återkallandegrad för agenthandlingar | Att inte logga återkallanden; att omklassificera rättelser som nytt arbete | Manipuleringsskyddad handlingslogg; länka återkallanden till handlingar; incidentgranskning |

En sund avläsning är hög verifierad lösning med låga återkomster, lätta och snabba vägar till en person med fullständiga överlämningar, riktiga svar vid stickprovsgranskning, nöjda användare över grupper och agenter vars handlingar sällan behöver återkallas och aldrig orsakar skada oupptäckt.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Regelbaserad bot | Förutsägbar, lätt att testa | Smal; skör; frustrerande utanför manus |
| Språkmodellassistent | Flexibel, flytande | Kan ha fel med självförtroende; svårare att testa |
| Hämtning ur godkänd kunskap | Förankrade svar, lättare att rätta | Beror på innehållets kvalitet |
| Öppen generering | Bred täckning | Högre risk för påhitt |
| Mänskligt godkännande av handlingar | Säkerhet | Långsammare; granskartrötthet |
| Autonoma handlingar | Hastighet | Större sprängradie när det blir fel |
| Strikt omfång med tidig överlämning | Säkert | Lägre inneslutning |
| Brett omfång | Högre inneslutning | Fler fel i ytterkanterna |

Svaret är att börja med smala, väl förstådda avsikter, förankra svar i godkänd kunskap, göra mänsklig hjälp lätt och utvidga omfång och autonomi bara i den takt måtten motiverar.

## Frågor att diskutera med teamet

**1. Om en användare ville ha en person just nu, hur många steg skulle det ta, och har vi prövat det själva?**
Testa vägen tillsammans. Räkna stegen och väntan. Facilitatorn bör notera varje hinder. Enas om ändringar så att vägen blir kort och mät tid till människa.

**2. Hur stor andel av samtalen vår bot avslutade löste faktiskt problemet?**
Kontrollera återkomster och bekräftelser för ett stickprov. Jämför med inneslutningstalet. Diskutera glappet. Besluta vilket tal ledare bör se.

**3. Vad gör vår bot fel, och vem får veta det?**
Fråga servicedesken. Granska stickprovade samtal. Leta efter mönster: föråldrade artiklar, tvetydiga frågor, känsliga ämnen. Enas om en väg från fel till rättelser, med en ägare.

**4. Vilka handlingar får agenten vidta på egen hand, och vilka kräver en person?**
Lista handlingar med deras riskklasser och behörigheter. Fråga vad det värsta realistiska misslyckandet för var och en skulle vara. Enas om godkännanderegler och den spårbara loggen och vem som granskar skadliga fall.

**5. Vem sviker boten i det tysta?**
Tänk på användare som har bråttom, är i nöd, har tillgänglighetsbehov eller begränsat språk. Titta på lösning och nöjdhet per grupp, där det är säkert. Enas om ett test med sådana användare.

**6. Vad skulle få oss att stänga av boten eller begränsa dess omfång?**
Definiera beläggen: återkomster över en nivå, skadliga handlingar, riktighet under en standard. Besluta vem som får besluta. En stoppregel i förväg gör det lättare att agera.

## Fyra perspektiv

### Produkt- och leveransteam

Team som bygger assistenten äger dess kvalitet. De bör definiera avsikter, förankra svar i godkänd kunskap, testa med motstridiga fall, släppa ändringar under kontroll och läsa misslyckandena. De bör protestera mot inneslutningsmål som belönar att fånga användare.

### Service- och driftteam

Servicedeskens personal arbetar med assistenten och ärver dess misslyckanden. De bör bedöma överlämningar, flagga felaktiga svar, hålla kunskapen aktuell och ta över snabbt när de ombeds. De är de bästa domarna om assistenten hjälper användare, och deras arbetsbelastning och stress är en del av bilden.

### Ledning och styrning

Ledare sponsrar assistenten och vill ha besparingar. De bör be om verifierad lösning, återkomster och nöjdhet bredvid inneslutning, kräva en stoppregel, finansiera den mänskliga vägen och granska riskklasser för agenter. Styrningen bör kontrollera upplysning, tillgänglighet och rättsliga skyldigheter.

### Kunder och användare

Användare vill ha hjälp med liten ansträngning och utan knep. De bör veta att de talar med en AI, lätt kunna nå en person och lita på att systemet inte agerar utan goda skäl. Deras erfarenhet, särskilt av misslyckande, är det främsta beläggen för om assistenten är värd att ha.

## I praktiken: ett exempel från tjänstehantering

Ett nationellt universitet driver en student- och personalservicedesk som hanterar ungefär 30 000 kontakter i månaden. Det lanserar en chattbott för vanliga förfrågningar, och leverantörens instrumentpanel redovisar en inneslutningsgrad på 74 procent. Siffrorna nedan är illustrativa.

Chefen för studentservice kontrollerar. Bland botavslutade samtal den senaste månaden följdes 29 procent av en relaterad kontakt via e-post eller telefon inom sju dagar. Verifierad lösning, med användarens bekräftelse och avsaknad av återkomst, är 49 procent för avsikter inom omfånget. Mediantiden för att nå en person efter att ha bett om det är 6 minuter, med en 85:e percentil på 22, delvis därför att vägen kräver tre menysteg. Ett stickprov om 100 samtal granskade av två erfarna rådgivare finner 88 riktiga svar och 12 bristfälliga: 7 föråldrade, 3 med påhittade detaljer om en tidsfrist och 2 som felhanterade känsliga fall med en student i svårigheter. Mottagande agenter bedömer 54 procent av överlämningarna som fullständiga. Nöjdheten med boten är lägre för studenter som använder skärmläsare och för dem som skriver på andra språk än svenska. Servicedeskens team rapporterar många kontakter som börjar med "chattboten kunde inte hjälpa".

Chefen för studentservice gör ändringar tillsammans med teamet. Känsliga avsikter, till exempel välfärd, klagomål och tvister om avgifter, dirigeras direkt till en person, och boten säger det. Ett alternativ "prata med en person" visas på varje skärm, och tid till människa följs, med ett mål att svara inom några minuter under bemannade tider. Överlämningar inkluderar en automatisk sammanfattning och användarens egna ord. Kunskapsbasens ägare rättar föråldrade artiklar, och en månatlig stickprovsgranskning matar dem. Assistenten begränsas till att svara utifrån godkänt innehåll och måste säga när den inte vet. En andra pilot låter en agent återställa lösenord efter identitetsverifiering, med varje handling loggad och återkallbar inom en tidsgräns, och en återkallandegrad följs. Instrumentpanelen ersätter inneslutning med verifierad lösning, grad av återkommande kontakt, riktighet, tid till människa och nöjdhet per grupp.

Tre månader senare når verifierad lösning 66 procent för avsikter inom omfånget, graden av återkommande kontakt faller till 14 procent, mediantiden till människa faller till 2 minuter, andelen fullständiga överlämningar stiger till 86 procent och riktigheten i stickprovade svar stiger till 95 procent, utan felhanterade känsliga fall i stickprovet. Återkallandegraden för agenthandlingar i lösenordspiloten är 1,2 procent. Rektorns kansli ber om ett inneslutningsmål på 85 procent. Chefen för studentservice förklarar att ett högre inneslutningsmål skulle belöna att dölja vägen till en person och föreslår verifierad lösning och återkomster som måtten, med en översyn av vad som ska utökas härnäst. Beslutet registreras.

## Agilitet, AI, automatisering och analys

### Agilitet

Förbättra assistenter i små steg med återkoppling från användare och de som tar över och granska misslyckanden regelbundet tillsammans med intressenter. Varningen är att belöna inneslutning lär boten att hålla människor borta från hjälp.

### AI

En samtalsassistent har hjälpt först när problemet är löst och förblir löst, så mät verifierad lösning, återkomster, överlämningskvalitet och återkallande av agenthandlingar. Definiera människans roll: vem som godkänner handlingar, när boten måste lämna över och hur en person åsidosätter den. Varningen är att ett trevligt samtal ändå kan misslyckas med uppgiften.

### Automatisering

Logga varje samtal och varje agenthandling, med behörigheter och ett sätt att rulla tillbaka, och mät automatiseringen på felaktiga handlingar. Varningen är att en agent med breda behörigheter kan orsaka skada i hög fart, så begränsa omfånget och granska loggar.

### Analys

Redovisa lösning verifierad genom användarens bekräftelse eller ett fönster utan återkomst, med antal, och läs ett stickprov av samtal. Beslutet detta ger underlag för är var assistenten är säker att utvidga. Varningen är att nöjdhetsbetyg på botsamtal lutar åt användare som slutförde.

## Branschperspektiv

**Startup.** En assistent kan täcka support till låg kostnad, och ett dåligt svar kan kosta en kund. Håll omfånget smalt, förankra svar i din dokumentation, gör det mänskliga alternativet uppenbart och läs varje eskalering. Var försiktig med att låta en agent agera på konton eller betalningar.

**Småföretag.** En färdig assistent på en webbplats kan hantera vanliga frågor. Testa den som en kund skulle, se till att ett telefonnummer eller en e-postadress är lätt att hitta och granska samtal varje vecka. Kontrollera vad leverantören gör med data.

**Storföretag.** Skala erbjuder besparingar och risk. Kör en styrningsprocess för riskklasser, godkännanden och spårbarhet, mät per avsikt och användargrupp och se till att en person kan nås i varje kanal. Samordna mellan support, säkerhet, juridik och tillgänglighet.

**Offentlig sektor.** Medborgare kan sakna alternativ leverantör, och skyldigheter om tillgänglighet, språktillgång och rättvis behandling gäller starkt. Håll en person nåbar, undvik automatiserade beslut om rättigheter utan skyddsåtgärder, publicera hur assistenten används och kontrollera upplysnings- och förvaltningsrättsliga skyldigheter (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna är licenser eller användningsavgifter, integration, förberedelse av innehåll, löpande stickprov och granskning, underhåll av kunskapsbasen, testning och styrning. En god mänsklig väg kostar också pengar, eftersom den måste bemannas.

De potentiella avkastningarna är kortare väntan för enkla frågor, avlastning från repetitiva kontakter och täckning utanför kontorstid. Risksidan inkluderar återkomster, förlorat förtroende, skada från felaktiga svar eller handlingar och rättslig exponering. Bygg caset ur dina egna tal: verifierad lösning och återkomster, kostnaden per löst kontakt inklusive överlämningar, personalens tid som läggs på att rätta botmisslyckanden och nöjdhet per grupp. Undvik att använda en leverantörs påståenden om inneslutning eller avledning som din uppskattning. Räkna kostnaden för den mänskliga vägen och för styrning (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Inneslutning som mål.** Det belönar att hålla människor borta från hjälp. Redovisa verifierad lösning och återkomster.
- **Dold eller långsam väg till en person.** Det är ett mörkt mönster, och användare märker det. Gör den kort och testa den.
- **Överlämning utan sammanhang.** Användare upprepar sig och förtroendet faller. Skicka en sammanfattning.
- **Att låta boten hantera känsliga fall.** Välfärd, klagomål och rättigheter behöver människor. Dirigera dem direkt.
- **Autonoma handlingar utan spårbarhet eller godkännande.** Ett fel kan skalas. Klassificera, begränsa och logga.
- **Att bara mäta det leverantörens instrumentpanel visar.** Den smickrar. Koppla in dina egna data.
- **Att ignorera grupper boten sviker.** Medelvärden döljer dem. Testa och segmentera där det är säkert.
- **Ingen stoppregel.** En bot som misslyckas står kvar. Definiera beläggen som skulle begränsa eller stänga av den.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Utfall | Inneslutning redovisas | Nöjdhet enkäteras | Verifierad lösning och återkomster följs per avsikt | Segmenterat per användargrupp; stoppregler definierade; riktighet stickprovas månadsvis | Assistent, personal och kunskap förbättras tillsammans med delade belägg |
| Vägen till människor | Svår att hitta | Alternativ finns | Kort väg; tid till människa följs; överlämningar bär sammanhang | Överlämningskvalitet bedöms och förbättras; bemanning anpassas efter efterfrågan | Bot och personal samarbetar smidigt över kanaler, med användarens val respekterat |
| Agenter som agerar | Ad hoc-automatisering | Skriptade handlingar | Riskklassificerade handlingar, minsta behörighet, godkännande och spårbarhet | Återkallandegrad och skada granskas; ändringar kontrolleras | Agentbeteende styrs över organisationen och leverantörer med oberoende försäkran |

## Checklista

- [ ] Assistentens avsikter är listade, med de som alltid måste gå till en person.
- [ ] Verifierad lösning och grad av återkommande kontakt redovisas bredvid inneslutning.
- [ ] En synlig, kort väg till en person finns på varje skärm, och tid till människa mäts.
- [ ] Överlämningar inkluderar en sammanfattning och användarens ord och bedöms av mottagande agenter.
- [ ] Svar stickprovas månadsvis av kvalificerade, oberoende granskare.
- [ ] Användare får veta att de talar med en AI och vad den kan göra.
- [ ] Tillgänglighets- och annanspråkstestning görs med verkliga användare.
- [ ] Agenthandlingar är riskklassificerade, har minsta behörighet och är spårbart loggade.
- [ ] Återkallandegrader och skadliga handlingar granskas skuldfritt.
- [ ] En stoppregel definierar när assistenten ska begränsas eller stängas av.

## AI-prompter

**Definiera avsikter och överlämningsregler.**

```text
We run a service desk for [type of organization]. The most common contact reasons
are: [list with volumes]. Propose which intents a chatbot should handle fully,
which it should only help with and then hand off, and which must always go to a
person, with reasons. Include handoff information to pass along. Do not invent
statistics. List your assumptions and risks for sensitive cases.
```

**Kontrollera ett inneslutningspåstående.**

```text
Our chatbot dashboard shows containment of [value]. We also have: return contacts
within seven days [value], survey results [values], and a sample of
conversations [describe]. Explain what verified resolution might be, how to
compute it from our data, what the gap between containment and resolution
suggests, and what to check next. Do not claim causes the data cannot support.
List your assumptions.
```

**Utforma en riskklassificering för agenthandlingar.**

```text
An AI agent might take these actions: [list]. For each, propose a risk class
(informational, reversible low impact, consequential), the permission it should
need, whether a person must approve, what to log, how to reverse it, and a
test to run before enabling it. Do not assume specific tools. List your
assumptions and decisions needing security and legal input.
```

**Planera en granskning av botsamtal.**

```text
Design a monthly review of bot conversations: sample size and selection
(including some abandoned ones and some from user groups at risk of poor
service), reviewer qualifications, a short rubric for correctness, safety, and
honesty about uncertainty, how to record errors and fix their sources, and how to
report without identifying users. List your assumptions and privacy cautions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett mått på chattbottar eller AI-agenter.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för chattbottsmått mäter lösning och bär sin manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- Mät verifierad lösning och återkommande kontakter och behandla inneslutning bara som ett beskrivande tal.
- Gör vägen till en person kort och synlig och lämna över med sammanhanget.
- Stickprova svar för riktighet och säkerhet och håll den kunskap assistenten använder aktuell.
- Var ärlig med att användare talar med en AI och testa med de användare som löper störst risk att sviktas.
- För agenter som agerar: klassificera risk, begränsa behörigheter, kräv godkännande för följdtunga handlingar och för en spårbar logg.
- Definiera en stoppregel i förväg.

## Referenser och vidare läsning

1. Weizenbaum, J., "ELIZA: A computer program for the study of natural language communication between man and machine," *Communications of the ACM*, 9(1), 1966.
2. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
3. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
4. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Virtual assistant](https://en.wikipedia.org/wiki/Virtual_assistant).
9. Wikipedia, [Intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent).
10. Wikipedia, [Self-service](https://en.wikipedia.org/wiki/Self-service).
11. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
12. Wikipedia, [Automated decision-making](https://en.wikipedia.org/wiki/Automated_decision-making).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
