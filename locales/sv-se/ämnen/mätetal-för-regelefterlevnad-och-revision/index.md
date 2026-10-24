# Mätetal för regelefterlevnad och revision

**Regelefterlevnad är lättast och mest ärlig när beläggen produceras av själva arbetet, så mät hur mycket belägg som kommer automatiskt, hur fort fynd rättas och hur ofta samma fynd kommer tillbaka, och behandla revisorer som intressenter som går med i samtalet tidigt.**

## Översikt och motiv

De flesta organisationer som bygger och driver it-tjänster svarar inför någon: tillsynsmyndigheter, kunder, certifieringsorgan, försäkringsgivare, styrelser. [Regelefterlevnad](https://en.wikipedia.org/wiki/Regulatory_compliance) är att följa lagar, regler och standarder och att visa att man gör det. En revision är en systematisk granskning av belägg för att bedöma om det stämmer. Inom it omfattar detta revisioner av kontroller för finansiell rapportering, skyldigheter kring dataskydd, säkerhetscertifieringar och avtalsmässiga åtaganden. [It-revision](https://en.wikipedia.org/wiki/Information_technology_audit) granskar kontrollerna kring system och de data de håller.

Regelefterlevnad och kontinuerlig leverans har rykte om friktion. Regelefterlevnad ber om dokument, underskrifter och godkännanden före ändring, och kontinuerlig leverans gynnar små ändringar som släpps kontinuerligt. Friktionen är verklig när regelefterlevnad behandlas som en fas i slutet. Den minskar när regelefterlevnad byggs in i arbetsflödet. Ändringsposter, kodgranskningar, automatiska tester och åtkomstloggar är belägg, och en leveranspipeline producerar dem varje dag. [Kontinuerlig revision](https://en.wikipedia.org/wiki/Continuous_auditing) använder automatiska kontroller av kontroller nära realtid i stället för periodiska stickprov, och den matchar rytmen i kontinuerlig leverans. Ett [revisionsspår](https://en.wikipedia.org/wiki/Audit_trail) är ett register som visar vem som gjorde vad, när, i vilket system, och det är ofta det starkaste beläggen du har.

ITIL beskriver de relevanta praktikerna: informationssäkerhetshantering, riskhantering och styrning av tjänstevärdesystemet, och pekar på standarder såsom [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) för system för informationssäkerhetshantering. Ramverk som organisationer vanligen möter inkluderar rapporteringsregimer för finansiella kontroller, till exempel [Sarbanes–Oxley Act](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act) i USA, dataskyddslagar såsom [dataskyddsförordningen (GDPR)](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) i Europeiska unionen och intygsrapporter såsom [SOC 2](https://en.wikipedia.org/wiki/SOC_2), som granskar kontroller relevanta för säkerhet och besläktade kriterier. Detaljerna skiljer sig efter jurisdiktion, sektor och datum, och det här ämnet beskriver mätpraxis, inte juridiska krav. Arbeta med dina kollegor inom regelefterlevnad, juridik och revision för vad som gäller dig.

Målet med efterlevnadsmått är att lära sig hur väl organisationen uppfyller sina skyldigheter och hur mycket insats det tar, så att båda kan förbättras. Risken är att regelefterlevnad blir en föreställning för revisorn. Ett team kan klara en revision genom att producera dokument i sista stund och ändå köra riskfylld praxis. Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller: när "revisionsfynd" är ett mål undviker människor granskning, snäver in omfånget och förhandlar om formuleringar (se ämne 1.2, Goodharts lag och mätetalens psykologi).

Två tankegångar hjälper.

- **Regelefterlevnad som biprodukt.** Om pipelinen registrerar granskning, testning, godkännande och driftsättning automatiskt finns belägg oavsett om en revision är nära. Detta tar också bort frestelsen att rekonstruera belägg i efterhand.
- **Revisorer som intressenter.** Agil praxis värderar kontinuerligt samarbete med intressenter. Revisorer och bedömare är intressenter med legitima frågor. Att involvera dem i utformningen av kontroller och belägg minskar överraskning och omarbete, samtidigt som deras oberoende bevaras.

## Nyckelprinciper

- **Producera belägg som en biprodukt av arbetet.** Pipelines, ärenden och loggar bör besvara de flesta revisionsfrågor.
- **Koppla skyldigheter till kontroller och ägare.** Varje skyldighet har en kontroll, och varje kontroll har en ägare.
- **Samarbeta tidigt med revisorer.** Dela utformningar och beläggsansatser före revisionen och bevara deras oberoende.
- **Rätta orsaker, inte fynd.** Ett fynd som stängs utan att orsaken tas bort kommer tillbaka.
- **Mät insats såväl som resultat.** Kostnaden för regelefterlevnad är en del av bilden.
- **Behåll uppdelning av arbetsuppgifter där det spelar roll.** Oberoende granskning är en kontroll som automatisering kan stödja men inte ersätta.
- **Var ärlig om glapp.** Svagheter som du själv rapporterar är bättre än de som andra hittar.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Täckning av skyldigheter | Andel tillämpliga skyldigheter kopplade till en kontroll med en ägare och en beläggskälla | skyldigheter kopplade till minst en kontroll med ägare och beläggskälla / tillämpliga skyldigheter | procent | Skyldighetsregister och kontrollregister | Styrning; informationssäkerhetshantering; riskhantering | Definitionen av klart inkluderar kontrollbelägg | Kvartalsvis |
| Automatiseringsgrad för belägg | Andel kontrollbelägg inom omfånget som samlas in automatiskt från register | kontrollbelägg som samlats in automatiskt / krävda beläggsposter | procent | Kontrollregister, pipeline- och systemloggar | Informationssäkerhetshantering; ändringsmöjliggörande | Pipelinen registrerar granskning, test och driftsättning automatiskt | Kvartalsvis |
| Genomloppstid för belägg | Tid för att leverera belägg som begärts av en revisor eller bedömare | median och 85:e percentil av dagar från begäran till accepterat belägg | dagar | Spårare för revisionsbegäranden | Styrning; informationssäkerhetshantering | Responsivitet på en intressents fråga | Per revision |
| Stängningstid för fynd | Tid för att stänga revisionsfynd efter allvarlighet | median och 85:e percentil av dagar från utfärdat fynd till verifierad stängning | dagar | Fyndspårare | Ständig förbättring; riskhantering | Tid att rätta ett fel | Månadsvis |
| Upprepningsgrad för fynd | Andel fynd som återkommer från en tidigare revision eller granskning | fynd som i sak matchar ett tidigare stängt fynd / fynd under perioden | procent | Fyndspårare med orsakslänkar | Ständig förbättring; problemhantering | Återkommande fel efter en rättelse | Per revisionscykel |
| Konflikter i uppdelning av arbetsuppgifter | Antal åtkomst- eller godkännandekombinationer som bryter mot uppdelningsregler, och tid att lösa | upptäckta konflikter; mediandagar att lösa | antal; dagar | Verktyg för identitets- och åtkomsthantering, ändringsposter | Informationssäkerhetshantering; ändringsmöjliggörande | Oberoende granskning av ändringar | Månadsvis |
| Revisionsinsats | Persontimmar organisationen lägger på att förbereda och stödja en revisionscykel, per omfångsenhet | timmar loggade till revisionsförberedelse och stöd / kontroller eller system inom omfånget | timmar per enhet | Tidsregister eller insatsuppskattningar | Styrning; ständig förbättring | Kostnad för arbete som inte är leverans | Per revisionscykel |

Ange skyldigheterna inom omfånget och revisionsomfånget i registret. Stängningstid startar när fyndet utfärdas och stoppar när revisorn eller en oberoende verifierare bekräftar stängning, inte när teamet säger att det är klart. Upprepade fynd matchas efter orsak, inte efter formulering, och matchningsregeln registreras. Revisionsinsats är ett trendmått för organisationen och aldrig ett mått på individer.

## Rekommendationer

### Känn dina skyldigheter och kontroller

**1. Lista de skyldigheter som gäller, på vanligt språk.** Tillsammans med kollegor inom juridik och regelefterlevnad, lista lagar, standarder, avtal och policyer som binder tjänsten, och vad var och en kräver i termer av resultat. Håll listan kort och läsbar. Skyldigheter som ingen kan ange tydligt är de som orsakar revisionsöverraskningar.

**2. Koppla varje skyldighet till kontroller, ägare och belägg.** För varje skyldighet, namnge kontrollen som uppfyller den, den ansvariga personen och beläggen som visar att kontrollen fungerar. Där en kontroll uppfyller flera skyldigheter, säg det, eftersom det minskar dubbelarbete. Täckning av skyldigheter mäter fullständigheten i den kopplingen. Okopplade skyldigheter är glapp att stänga eller att acceptera medvetet.

**3. Föredra färre, starkare kontroller.** En kontroll som är automatiserad och testad är värd flera manuella. Leta efter kontroller som överlappar och avveckla de som inte tjänar någon skyldighet. Varje kontroll kostar insats att driva och att belägga (se ämne 8.2, Mätetal för risker och kontroller).

### Gör belägg till en biprodukt

**4. Låt pipelinen producera beläggen.** Länka varje produktionsändring till en begäran, en kodgranskning, testresultat och ett godkännande där ett krävs, allt registrerat automatiskt. En driftsättningspost som visar detta berättar för revisorn vad som hände utan att ett dokument skrivs. Detta förlitar sig på de kontinuerliga leveranspraxis som agila team redan använder (se ämne 4.5, Mätetal för releaser och driftsättning).

**5. Använd policykontroller i pipelinen.** Koda regler, till exempel "ingen driftsättning utan en granskning av någon annan än upphovspersonen" eller "ingen produktionsåtkomst utan ett ärende", som automatiska kontroller. Kontrollen är både en kontroll och sitt eget belägg. Håll reglerna synliga och versionshanterade, så att ändringar av dem också registreras. Detta stöder [uppdelning av arbetsuppgifter](https://en.wikipedia.org/wiki/Segregation_of_duties), principen att ingen enskild person bör kontrollera alla steg i en känslig process.

**6. Bevara revisionsspår ordentligt.** Håll åtkomst- och ändringsloggar på ett sätt som inte kan ändras av de människor de beskriver, behåll dem under den krävda perioden och gör dem sökbara. Ett spår som kan redigeras av dem det registrerar är ett svagt belägg. Kontrollera lagringsregler med kollegor inom juridik.

**7. Mät hur mycket belägg som är automatiskt.** Automatiseringsgraden för belägg visar var manuell insamling kvarstår. Rangordna de manuella posterna efter insats och risk och automatisera de värsta först. När graden stiger faller revisionsinsats och genomloppstid.

### Arbeta med revisorer

**8. Bjud in revisorer i utformningen.** Dela planerade ändringar av kontroller och belägg med intern revision och externa bedömare tidigt och fråga vad som skulle tillfredsställa dem. Oberoende betyder att de inte utformar dina kontroller, och det betyder inte att de inte kan tala om vilka belägg de kommer att behöva. Tidiga samtal minskar omarbete. Institute of Internal Auditors publicerar standarder för yrket som förklarar rollen för [intern revision](https://en.wikipedia.org/wiki/Internal_audit).

**9. Förbered ett beläggsindex.** Håll ett levande index över var varje typ av belägg finns och hur det hämtas. Följ genomloppstiden för beläggsbegäranden och använd förseningar för att hitta saknad automatisering. En kort, jämn process slår en kapplöpning före varje revision.

**10. Kom överens om innebörden av väsentlighet och omfång.** Fråga revisorer hur de bedömer vad som spelar roll och vad som ligger inom omfånget och registrera svaret. En gemensam förståelse förhindrar tvister senare. Snäva inte in omfånget för att undvika granskning och vidga det inte utan skäl.

### Rätta orsaker och lär

**11. Behandla varje fynd som en problempost.** Hitta orsaken, rätta den och verifiera stängning av någon oberoende. Länka upprepade fynd till de tidigare och undersök varför den första rättelsen inte höll. En hög upprepningsgrad för fynd pekar på rättelser som behandlade symptom, vilket knyter an till problemhantering (se ämne 4.1, Mätetal för problemhantering).

**12. Följ kostnaden och driv ned den.** Registrera revisionsinsats över cykler. Om insatsen är hög och jämn, leta efter dubbelarbete över revisioner, manuell beläggsinsamling och kontroller som inte tjänar någon. Redovisa insatstrenden med resultaten. Regelefterlevnad är värd sin kostnad när den minskar verklig risk, och måtten hjälper dig att avgöra.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Täckning av skyldigheter | Att koppla skyldigheter till svaga eller irrelevanta kontroller; att definiera skyldigheter snävt | Granskning av kontrollers relevans av en andra part; testa kontrollerna (se ämne 8.2, Mätetal för risker och kontroller) |
| Automatiseringsgrad för belägg | Att räkna skärmdumpar eller exporter som automatiska; att automatisera belägg med lågt värde först | Definiera automatisk som systemgenererad och manipuleringsbeständig; rangordna efter risk |
| Genomloppstid för belägg | Att tillhandahålla delvisa belägg snabbt; att förhandla om begärans formulering | Räkna bara accepterade belägg; följ uppföljningsbegäranden |
| Stängningstid för fynd | Att stänga fynd utan verifiering; att omklassificera allvarlighet | Oberoende verifiering; logg över allvarlighetsändringar |
| Upprepningsgrad för fynd | Att omformulera fynd så att de inte matchar; att stänga det tidigare fyndet som en annan typ | Matcha efter orsak med en registrerad regel; granskning av intern revision |
| Konflikter i uppdelning av arbetsuppgifter | Att flytta konflikter till system utanför omfånget; att bevilja tillfällig åtkomst som aldrig registreras | Täck alla system med känsliga processer; granska tillfällig åtkomst |
| Revisionsinsats | Att inte logga timmar; att flytta insats till andra budgetar | Stickprova tidsregister; jämför med teamenkäter |

En sund avläsning är stigande automatisering av belägg, kortare och jämnare genomloppstid, fynd stängda med verifiering, en låg upprepningsgrad och revisionsinsats som faller allteftersom processen mognar.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Periodiska manuella belägg | Bekant för revisorer | Kostsamt; rekonstruerat i efterhand |
| Automatiska kontinuerliga belägg | Billigt att underhålla; aktuellt | Kräver teknik; revisorer måste lita på källan |
| Tunga godkännanden | Synlig kontroll | Långsamt; buntar ändring |
| Automatiska policykontroller | Konsekventa och snabba | Reglerna måste vara rätt och synliga |
| Tidigt revisorsengagemang | Färre överraskningar | Kräver omsorg för att bevara oberoende |
| Revision i slutet | Tydlig åtskillnad | Sena fynd; omarbete |
| En kontroll för många skyldigheter | Effektivt | Ett enda fel påverkar flera skyldigheter |
| Många specifika kontroller | Tydlig koppling | Dubbelarbete |

Svaret är att automatisera belägg ur pipelinen och registren, involvera revisorer tidigt i utformningen samtidigt som deras oberoende bevaras och hålla en slimmad uppsättning starka kontroller kopplade till skyldigheter.

## Frågor att diskutera med teamet

**1. Vilken revisionsfråga tar längst tid för oss att besvara, och varför?**
Välj den långsammaste beläggsbegäran från den senaste revisionen och följ den. Saknas beläggen, är de utspridda eller finns de i någons huvud? Diskutera vad som skulle göra dem automatiska. Facilitatorn bör fånga kostnaden i timmar.

**2. Kan vi visa, för vilken produktionsändring som helst den senaste månaden, vem som granskade den och vilka tester som kördes?**
Välj en ändring slumpmässigt och försök. Notera var kedjan bryts. Enas om en förbättring av ändringsposten eller pipelinen som stänger glappet.

**3. Vad lovade vi vid den senaste revisionen, och höll det?**
Granska fynden och rättelserna. För var och en, fråga om orsaken togs bort och vem som verifierade stängning. Leta efter upprepningar. Enas om ett fynd att undersöka djupare.

**4. Vad skulle revisorer säga om vi frågade hur man gör belägg lättare?**
Planera ett samtal med intern revision eller en bedömare om beläggsutformning. Fråga vad de litar på och vad de inte litar på. Facilitatorn bör behandla deras svar som information och hålla reglerna om oberoende i åtanke.

**5. Vilka kontroller driver vi som ingen skyldighet behöver?**
Lista kontroller och skyldigheterna de tjänar. Hitta de utan tydligt syfte. Diskutera att avveckla dem och beläggen för att de är onödiga.

**6. Var kunde en person göra något känsligt från början till slut här?**
Tänk på driftsättning, åtkomstbeviljanden och betalningar. Kontrollera om verktyg tvingar fram uppdelning eller bara policy. Diskutera kompenserande kontroller, till exempel automatisk granskning, där personalen är liten.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam producerar mycket av beläggen genom att göra sitt arbete väl. De bör hålla ändrings-, gransknings- och testposter länkade, använda policykontroller i pipelinen och lyfta farhågor om kontroller som saktar arbetet utan att minska risk. De har nytta av tidiga samtal med revisorer om vilka belägg som räcker.

### Service- och driftteam

Driftteam driver åtkomsthantering, loggning, säkerhetskopior och incidenthantering, som är centrala för många revisioner. De bör hålla loggar manipuleringsbeständiga och bevarade, sköta åtkomstgranskningar enligt schema och hålla beläggsindexet. De bär bördan av manuella belägg och kan peka på var automatisering skulle hjälpa mest.

### Ledning och styrning

Ledare är ansvariga för regelefterlevnad och ofta för revisionsresultat. De bör finansiera automatisering av belägg, be om täckning och upprepningsgrad för fynd i stället för bara antalet fynd och stödja revisorernas oberoende. Styrningen bör förvänta sig ärliga rapporter om glapp och en plan för var och en.

### Kunder och användare

Kunder och användare förlitar sig på regelefterlevnad som försäkran om hur deras data och tjänster hanteras. De har nytta när intygsrapporter är tydliga, när incidenter rapporteras som krävs och när kontroller inte gör legitim användning svårare än nödvändigt. Öppen kommunikation om regelefterlevnad bygger förtroende.

## I praktiken: ett exempel från tjänstehantering

Ett medelstort betalningsföretag driver en kortbehandlingsplattform och bedöms årligen mot ett ramverk för säkerhetsförsäkran och en dataskyddsregim. Siffrorna nedan är illustrativa.

Revisionsförberedelser tar teknikteamen ungefär sex veckor varje år. Förra årets bedömning avslutades med 14 fynd, varav 5 upprepade sig från året före. Chefen för regelefterlevnad kartlägger läget. Täckningen av skyldigheter är 83 procent, där 17 procent av skyldigheterna saknar en namngiven kontrollägare. Automatiseringen av belägg är 22 procent, och det mesta beläget för ändringsgodkännande kommer från skärmdumpar av ärenden sammanställda för hand. Mediangenomloppstiden för belägg är 9 dagar, med en 85:e percentil på 21 dagar. Mediantiden för stängning av fynd är 74 dagar, och stängning markerades ofta av det ägande teamet utan verifiering.

Chefen för regelefterlevnad arbetar med leverans- och driftteamen och med den interna revisorn. De ändrar fyra saker. Varje produktionsändring i pipelinen länkar nu till begäran, kodgranskningen av någon annan än upphovspersonen, testresultaten och driftsättningen, registrerade automatiskt i ändringsposten. En policykontroll blockerar en driftsättning som saknar en oberoende granskning och loggar undantagsvägen för nödfall. Åtkomstgranskningar körs kvartalsvis ur identitetssystemet, som visar konflikter i uppdelning av arbetsuppgifter direkt. Varje fynd blir en problempost, med en oberoende verifierare från intern revision, och upprepade fynd länkas till sina föregångare.

Vid nästa bedömning är automatiseringsgraden för belägg 71 procent, mediangenomloppstiden för belägg är 2 dagar, den 85:e percentilen är 5 dagar och revisionsförberedelsen tar ungefär två veckor. Täckningen av skyldigheter är 97 procent, och de återstående posterna har dokumenterad acceptans. Fynden faller till 6, med en upprepning, och mediantiden för stängning är 31 dagar med oberoende verifiering. Verkställande direktören ber om noll fynd nästa år. Chefen för regelefterlevnad föreslår att följa upprepade fynd, stängningstid och automatisering av belägg, och förklarar att ett mål på noll fynd driver team att dölja problem eller snäva in omfånget, och att en bedömare som inte hittar något kanske inte har tittat hårt nog. Beslutet registreras, och styrelsen går med på att granska måtten vid nästa möte.

## Agilitet, AI, automatisering och analys

### Agilitet

Producera belägg som en biprodukt av arbetet och bjud in revisorer till samtalet tidigt. Varningen är att ett mål för revisionsfynd kan avskräcka från ärlig självrapportering.

### AI

AI-relaterade skyldigheter förändras, så kontrollera lagen som gäller dig med din juridiska rådgivare och håll en förteckning över AI-system som belägg. Be inte ett AI-verktyg att ange efterlevnadspåståenden. Varningen är att AI-genererade sammanfattningar av belägg behöver en person som verifierar dem mot källan.

### Automatisering

Automatisera insamling av belägg från pipelines och verktyg och mät automatiseringsgrad för belägg och genomloppstid. Varningen är att automatisering kan producera belägg som är fullständiga men fel, så stickprova dem.

### Analys

Redovisa upprepade fynd och stängningstid med antal. Beslutet detta ger underlag för är var kontroller upprepade gånger fallerar. Varningen är att revisionsinsats är en kostnad, inte ett mål, och att minska den inte bör minska täckningen.

## Branschperspektiv

**Startup.** Skyldigheter kan komma plötsligt med en stor kund eller en finansieringsrunda. Bygg vanor tidigt: kamratgranskning, ändringsposter och åtkomstkontroll i pipelinen, så att belägg finns när det efterfrågas. Välj ett ramverk när verksamheten behöver det och koppla det till det du redan gör.

**Småföretag.** Efterlevnadsskyldigheter är ofta fastställda av avtal och lag, och resurserna är begränsade. Håll en kort lista över skyldigheter, förlita dig på hanterade tjänster med egna intygsrapporter och håll en enkel beläggsmapp. Var försiktig med att köpa efterlevnadsverktyg som kostar mer än risken de adresserar.

**Storföretag.** Många skyldigheter överlappar, så ett enhetligt kontrollramverk som kopplar en kontroll till många skyldigheter sparar stor insats. Använd gemensamma beläggskällor, en delad fyndspårare och en kalender över revisioner för att undvika upprepade begäranden. Samordna intern revision, regelefterlevnad och säkerhet så att team inte granskas tre gånger för samma sak.

**Offentlig sektor.** Efterlevnadsskyldigheter är omfattande och offentliga, inklusive regler om upphandling, arkiv, tillgänglighet och dataskydd, med revisioner av nationella organ. Dokumentera beslut och belägg under den krävda perioden, gör rapporter konsekventa över myndigheter där det är möjligt och håll en tydlig linje mellan oberoende revision och ledning. Skyldigheter kan ändras med val och lagstiftning (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna inkluderar verktyg för kontrollregistret, pipelineintegration för belägg, identitets- och loggsystem och tiden för efterlevnadspersonal och team. Den inledande insatsen att automatisera belägg är betydande, och den ersätter återkommande manuellt arbete.

Avkastningen är lägre återkommande revisionsinsats, snabbare svar på begäranden, färre upprepade fynd och en ärligare bild av kontrollernas hälsa. De inkluderar också den undvikna kostnaden för överraskningar sent i en certifieringscykel. Bygg caset ur dina egna tal: timmar för revisionsförberedelse före och efter, genomloppstid för belägg, antalet och åldern på fynd och kostnaden för eventuell revisionsrelaterad fördröjning i en affär. Undvik att citera studier av kostnaden för regelefterlevnad om du inte kan spåra deras metod och relevans. Räkna programmets kostnad och risken för överautomatisering av svaga kontroller. Den bredare ekonomiska behandlingen finns i föregående dels sista ämne (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att förbereda sig för revisionen den sista månaden.** Det ger rekonstruerade belägg och en kapplöpning. Registrera belägg medan arbetet sker.
- **Skärmdumpar som belägg.** De är manuella, lätta att ändra och dyra. Använd systemgenererade register.
- **Att sikta på noll fynd.** Det belönar snävt omfång och dolda problem. Följ stängning, upprepningar och täckning.
- **Att stänga fynd genom påstående.** Samma fynd återkommer. Verifiera stängning oberoende.
- **Att behandla revisorer som motståndare.** Det ökar kostnaden på båda sidor. Samarbeta om beläggsutformning samtidigt som oberoendet bevaras.
- **Kontroller som inte tjänar någon skyldighet.** De kostar insats och föder cynism. Avveckla dem.
- **Att automatisera en dålig kontroll.** Det producerar belägg för en svag kontroll i stor skala. Testa kontrollen först.
- **Manuell uppdelning av arbetsuppgifter.** Den förlitar sig på minne. Tillämpa den i verktyg och granska undantag.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Skyldigheter och kontroller | Kända av några få personer | Lista över skyldigheter och kontroller | Kopplade till kontroller, ägare och beläggskällor | Täckning följs; överlapp minskas; kontroller testas | Enhetligt kontrollramverk över team, leverantörer och regimer |
| Belägg | Sammanställs före revisioner | Standardmallar och en beläggsmapp | Pipelines och register producerar mycket belägg | Automatiseringsgrad, genomloppstid och insats hanteras | Kontinuerlig försäkran där revisorer konsumerar belägg direkt |
| Fynd och lärande | Fynd bestrids och stängs genom påstående | Fynd följs | Fynd behandlas som problemposter med oberoende verifiering | Upprepningar och stängningstid analyseras och matas in i kontrollutformning | Fynd delas över organisationen och med partner; förbättring är rutin |

## Checklista

- [ ] Tillämpliga skyldigheter är listade på vanligt språk, med ägare.
- [ ] Varje skyldighet är kopplad till kontroller och en beläggskälla.
- [ ] Produktionsändringar bär länkade belägg för begäran, granskning, test och driftsättning automatiskt.
- [ ] Policykontroller tillämpar granskning och uppdelning av arbetsuppgifter i pipelinen.
- [ ] Revisionsspår är manipuleringsbeständiga och bevarade under den krävda perioden.
- [ ] Ett beläggsindex finns, och genomloppstid för begäranden mäts.
- [ ] Revisorer rådfrågas om beläggsutformning medan oberoende bevaras.
- [ ] Fynd loggas som problemposter och stängs med oberoende verifiering.
- [ ] Upprepade fynd länkas till sina föregångare och undersöks för orsak.
- [ ] Revisionsinsats följs som en trend och granskas för dubbelarbete.

## AI-prompter

**Koppla skyldigheter till kontroller.**

```text
Here is a list of obligations that apply to our service in [sector and
jurisdiction]: [paste in plain language]. Here is our list of controls:
[paste]. Build a table mapping each obligation to controls, the evidence that
shows each control operates, and an owner role. Flag obligations with no
control, controls with no obligation, and weak evidence. Do not give legal
conclusions. List your assumptions and questions for legal and compliance.
```

**Planera automatisering av belägg.**

```text
Our manual audit evidence includes: [list items with hours spent]. Our systems
of record are: [list tools]. Rank the evidence items by effort and risk and
propose how each could be collected automatically from a system of record,
what makes the evidence trustworthy (tamper resistance, completeness), and
what to confirm with auditors. Do not assume features of specific tools. List
your assumptions.
```

**Analysera upprepade fynd.**

```text
Here are findings from the last [number] audit cycles, with causes and fixes:
[paste, sanitized]. Group findings by underlying cause, identify repeats, and
suggest why earlier fixes did not hold. Propose a rule for matching findings
by cause and a verification step for closure. Do not speculate beyond the
information given. List your assumptions.
```

**Förbered ett tidigt samtal med revisorer.**

```text
Draft an agenda for a meeting with internal audit about changing how we
produce evidence for [control or process]. Include what we plan to change, the
questions we need answered (acceptable evidence, sampling, materiality), what
we will not ask them to do to preserve independence, and how we will record
the outcome. Use plain language. List your assumptions and risks.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett efterlevnads- eller revisionsmått.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för efterlevnadsmått bär sin manipuleringsvektor, sitt skyddsräcke och sin oberoenderegel.

## Viktigaste slutsatser

- Producera belägg som en biprodukt av leverans, ur pipelines och register, och mät hur mycket som är automatiskt.
- Koppla varje skyldighet till en kontroll, en ägare och en beläggskälla.
- Bjud in revisorer i beläggsutformning tidigt och skydda deras oberoende.
- Stäng fynd genom att ta bort orsaker, verifiera stängning oberoende och bevaka upprepningsgraden för fynd.
- Undvik mål såsom noll fynd och följ insats tillsammans med resultat.
- Tillämpa uppdelning av arbetsuppgifter i verktyg och håll revisionsspår manipuleringsbeständiga.

## Referenser och vidare läsning

1. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
2. Institute of Internal Auditors, *Global Internal Audit Standards*, 2024.
3. American Institute of Certified Public Accountants, *Trust Services Criteria* (used in SOC 2 examinations), latest version.
4. Kim, G., Humble, J., Debois, P., and Willis, J., *The DevOps Handbook*, IT Revolution, 2016.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Regulatory compliance](https://en.wikipedia.org/wiki/Regulatory_compliance).
8. Wikipedia, [Information technology audit](https://en.wikipedia.org/wiki/Information_technology_audit).
9. Wikipedia, [Continuous auditing](https://en.wikipedia.org/wiki/Continuous_auditing).
10. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
11. Wikipedia, [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001).
12. Wikipedia, [Sarbanes–Oxley Act](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act).
13. Wikipedia, [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).
14. Wikipedia, [SOC 2](https://en.wikipedia.org/wiki/SOC_2).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
16. Wikipedia, [Segregation of duties](https://en.wikipedia.org/wiki/Segregation_of_duties).
17. Wikipedia, [Internal audit](https://en.wikipedia.org/wiki/Internal_audit).
