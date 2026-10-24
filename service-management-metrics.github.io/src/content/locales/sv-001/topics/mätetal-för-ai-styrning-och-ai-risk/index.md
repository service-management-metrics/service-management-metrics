# Mätetal för AI-styrning och AI-risk

**AI-användning behöver samma disciplin som vilken ändring som helst i en levande tjänst: veta var den finns, vem som äger den, hur riskfylld den är, hur den testas och ändras och vad som händer när den går fel, med tillsyn som människor faktiskt kan utöva.**

## Översikt och motiv

AI kommer in i en organisation genom många dörrar. Ett team tar i bruk en kodassistent. En leverantör lägger till en generativ funktion i en produkt som redan används. En medarbetare klistrar in ett dokument i ett publikt verktyg. En avdelning bygger en modell för att poängsätta förfrågningar. Var och en är en användning av AI med egna nyttor och risker, och få syns på ett ställe. Styrning är den uppsättning strukturer, policyer och praxis som gör dessa användningar kända, ansvarsbelagda och tillräckligt säkra. Riskmått talar om huruvida styrningen fungerar.

ITIL har byggstenarna: styrning av tjänstevärdesystemet, riskhantering, ändringsmöjliggörande, informationssäkerhetshantering, leverantörshantering och ständig förbättring. Agila och DevOps-baserade arbetssätt bidrar med vanan av små, kontrollerade, återkallbara ändringar och av automatiska kontroller i pipelinen. AI-styrning behöver inte ett separat universum. Den behöver dessa praktiker tillämpade på saker som beter sig annorlunda än konventionell programvara.

Vad är annorlunda med AI?

- **Beteendet är statistiskt och kan förändras utan en kodändring.** En modell kan bete sig annorlunda efter en leverantörsuppdatering, en förändring i dess indata eller en förändring i prompten. Datan den ser i produktion kan glida bort från datan den testades på, ett fenomen som inom maskininlärning kallas drift. Ett system kan försämras i det tysta.
- **Utdata är inte fullt förutsägbara.** Testning kan inte täcka varje indata, så utvärdering sker genom stickprov och riktade test, inte genom bevis. System kan misslyckas på sätt deras byggare inte förutsåg.
- **Skador kan vara diffusa och ojämlika.** [Algoritmisk partiskhet](https://en.wikipedia.org/wiki/Algorithmic_bias) är systematiskt fel som leder till orättvisa utfall för vissa grupper. Den kan uppstå ur data, design eller användning, och den syns kanske inte i övergripande riktighetstal.
- **Nya angreppsytor dyker upp.** [Promptinjektion](https://en.wikipedia.org/wiki/Prompt_injection) är ett angrepp där instruktioner dolda i indata manipulerar en språkmodell till oavsiktligt beteende. Modeller kan förmås att avslöja data eller vidta handlingar deras ägare inte avsåg.
- **Beroendet av leverantörer är djupt.** Många AI-förmågor kommer från externa leverantörer, med begränsad insyn i hur de byggs eller ändras. Leverantörsmåtten spelar större roll (se ämne 8.4, Mätetal för leverantörer och avtal).
- **Regler växer fram och skiljer sig åt mellan platser.** Lagar, standarder och vägledning om AI utvecklas snabbt. Europeiska unionens [AI-förordning](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act) har ett riskbaserat angreppssätt med skyldigheter som tillämpas i etapper, och andra jurisdiktioner tar andra vägar. Standarder såsom ISO/IEC 42001 om ledningssystem för AI och NIST:s ramverk för AI-riskhantering erbjuder strukturer. Uttalanden om specifika regler i det här ämnet är daterade till oktober 2026 och bör kontrolleras på nytt, och juridisk rådgivning bör styra dina skyldigheter. Det vidare fältet beskrivs olika som [ansvarsfull AI](https://en.wikipedia.org/wiki/Responsible_AI) eller pålitlig AI, och frågan om hur lagen bör behandla AI är ämnet för [reglering av artificiell intelligens](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).

Styrning kan misslyckas på två motsatta sätt. Den kan vara så tung att team undviker den, och AI-användningen går under jorden som [skugg-it](https://en.wikipedia.org/wiki/Shadow_IT). Eller så kan den vara en pappersövning, med en policy och ett register som inte speglar praxis. De agila målen pekar på mittenvägen: kontinuerlig intressentinvolvering i att sätta reglerna, små och snabba godkännanden för användningar med låg risk, djupare granskning där skada är möjlig och ständig förbättring av kontrollerna allteftersom erfarenheten växer. Motiverade människor med tydliga gränser, som litas på att använda omdöme inom dem, rapporterar problem. Människor som fruktar bestraffning gör det inte.

Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller styrningsmått: när "andel registrerade AI-användningar" är ett mål fylls register med poster ingen läser, och de faktiska användningarna förblir utom synhåll (se ämne 1.2, Goodharts lag och mätetalens psykologi).

Det här ämnet bygger på ämnena om risk, regelefterlevnad och säkerhet i del 8 och på de tidigare ämnena i den här delen.

## Nyckelprinciper

- **Veta var AI används.** Ett register över användningar, inklusive de som är inbäddade i produkter och de som medarbetare tar till sig på egen hand, är grunden.
- **Anpassa granskningen efter risk.** Lätt för användningar med låg risk, djupare för följdtunga.
- **Behandla modell- och promptändringar som ändringar.** De behöver testning, godkännande i proportion till risken och förmågan att rulla tillbaka.
- **Utvärdera före och under användning.** Testa på realistiska fall och fortsätt testa i produktion.
- **Behåll meningsfull mänsklig tillsyn.** En person måste kunna förstå, ifrågasätta och åsidosätta och ha tid och befogenhet att göra det.
- **Lär av incidenter utan skuld.** AI-misslyckanden är nya, och rapportering är hur organisationen lär sig.
- **Gör godkännande snabbt för de säkra fallen.** Långsam styrning driver användning utom synhåll.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Täckning i registret över AI-användningar | Andel AI-användningar funna på oberoende väg som finns i registret med en ägare och en riskklass | användningar i registret med ägare och riskklass / användningar funna genom oberoende upptäckt (upphandling, utlägg, identitet, nätverk och personalrapporter) | procent | Register, upphandlings- och utläggsdata, identitetsloggar, enkäter | Styrning; hantering av it-tillgångar; riskhantering | Synligt arbete och tydligt ägarskap | Kvartalsvis |
| Aktualitet i riskbedömning | Andel användningar med medelhög och hög risk som har en riskbedömning inom den krävda cykeln | användningar bedömda inom cykeln / användningar med medelhög och hög risk | procent | Riskbedömningar | Riskhantering; informationssäkerhetshantering | Regelbunden reflektion över risker | Kvartalsvis |
| Täckning av ändringskontroll | Andel ändringar av modeller, prompter, verktyg och datakällor i produktion som gick genom ändringskontroll med krävda test | ändringar med ändringspost, test och godkännande i proportion till risken / upptäckta ändringar | procent | Ändringsregister jämförda med versionshistorik och leverantörens versionsanteckningar | Ändringsmöjliggörande; release- och driftsättningshantering | Små, kontrollerade, återkallbara ändringar | Månadsvis |
| Aktualitet i utvärdering | Andel produktionsanvändningar med en aktuell utvärdering (riktighet, säkerhet och rättvisa där det är relevant) och resultat inom tolerans | användningar med en utvärdering inom cykeln och godtagbara resultat / produktionsanvändningar inom omfånget | procent | Utvärderingsregister | Kvalitetssäkring; riskhantering | Definition av klart för beteende | Kvartalsvis |
| Grad av belägg för mänsklig tillsyn | Andel stickprovade följdtunga utdata eller beslut med en registrerad, substantiell mänsklig granskning | stickprovade poster med dokumenterad granskning som kunde ha ändrat utfallet / stickprovade poster | procent | Stickprovade beslutsregister | Riskhantering; styrning | Granskning före release | Månadsvis |
| Grad av AI-incidenter och tid till inneslutning | Incidenter som rör AI (skadlig utdata, dataexponering, osäker handling) per användning och tiden att innesluta dem | incidenter per produktionsanvändning per kvartal; median och 85:e percentil av timmar från upptäckt till inneslutning | incidenter; timmar | Incidentregister taggade AI | Incidenthantering; informationssäkerhetshantering | Skuldfritt svar och lärande | Kvartalsvis |
| Aktualitet i leverantörers AI-granskning | Andel leverantörer som tillhandahåller AI-funktioner i kritiska tjänster vars AI-specifika bedömning är aktuell | leverantörer med aktuell AI-bedömning / kritiska leverantörer med AI-funktioner | procent | Leverantörsbedömningar | Leverantörshantering; riskhantering | Regelbunden översyn av beroenden | Kvartalsvis |

Definiera "AI-användning" brett i registret: modeller du bygger, tjänster du köper, funktioner inuti produkter och verktyg personal använder. Riskklasserna och cyklerna fastställs i policyn. Registertäckning mäts mot oberoende upptäckt, inte mot registret självt. Täckning av ändringskontroll kräver ett sätt att upptäcka ändringar: versionshantering, leverantörsmeddelanden, konfigurationsövervakning. Belägg för mänsklig tillsyn kräver att granskningen kunde ha ändrat utfallet, inte att en knapp klickades. Incidentgrader beskriver användningar och system och används inte för att betygsätta människor.

## Rekommendationer

### Känn till och klassificera

**1. Bygg registret genom att hitta såväl som fråga.** Börja med en enkät och en policy och kontrollera sedan mot upphandlings- och utläggsregister, identitets- och åtkomstloggar, nätverks- och molnfaktureringsdata och leverantörsuppdateringar. Inkludera AI-funktioner inbäddade i verktyg du redan äger. Räkna med överraskningar: människor använder verktyg du inte godkänt, ofta av goda skäl. Behandla dem som information (se ämne 7.2, Mätetal för programvarutillgångar och licenser).

**2. Tilldela en ägare och en riskklass till varje användning.** Ägaren är personen som är ansvarig för användningen och dess resultat. Riskklassen speglar skadan om systemet misslyckas: vem som berörs, om beslut om människor ingår, om det agerar på egen hand, vilka data det rör och hur återkallbara effekterna är. Använd få klasser med tydliga regler. Hämta stöd i erkända ramverk, såsom NIST:s ramverk för AI-riskhantering, ISO/IEC 42001 och tillämplig lag, och anpassa dem till ditt sammanhang.

**3. Gör godkännande proportionerligt.** För användningar med låg risk räcker en snabb självbetjäningsregistrering med några frågor. För följdtunga användningar, kräv en riskbedömning, utvärderingsresultat, en definierad utformning av mänsklig tillsyn och underskrift. En snabb väg för den säkra majoriteten håller människor inne i systemet, och en långsammare väg för de farliga få ger dem ordentlig granskning.

### Testa och kontrollera ändring

**4. Utvärdera på realistiska fall, före och under användning.** Bygg en uppsättning testfall som speglar verkliga indata, inklusive svåra och motstridiga, och poängsätt utdata mot skrivna kriterier. Inkludera kontroller av säkerhet och rättvisa där människor kan beröras. Kör om utvärderingarna enligt schema och närhelst modellen, prompten eller datan ändras. Ett rött team, en grupp som avsiktligt angriper systemet för att hitta svagheter, är en användbar praxis för användningar med högre risk. Se stickprovspraxis för stött arbete (se ämne 10.2, Att mäta AI-stött arbete).

**5. Placera modeller, prompter och verktyg under ändringskontroll.** Versionera prompter och konfigurationer som kod. Kräv test och godkännande i proportion till risken för ändringar, registrera dem och behåll förmågan att rulla tillbaka. Följ leverantörsdrivna modelluppdateringar, som kan ändra beteende utan förvarning, och kom överens med leverantörer om hur du ska underrättas. Behandla en modelluppgradering som en ändring som behöver kontroll (se ämne 4.3, Mätetal för ändringsmöjliggörande).

**6. Övervaka i produktion.** Bevaka drift i indata och utdata, stigande fel- och åsidosättandegrader och ovanliga mönster. Sätt tröskelvärden som utlöser granskning. För system som vidtar handlingar, övervaka handlingsloggarna. Övervakning är hur du hittar problemen som testning missade.

### Håll den mänskliga tillsynen verklig

**7. Utforma tillsyn som kan fungera.** En person som granskar varje utdata från ett snabbt system kan inte hänga med, och en person som ombeds godkänna det hen inte kan förstå ger inte tillsyn. Definiera vad människan gör, vilken information hen har, hur mycket tid och vilken befogenhet att åsidosätta. Stickprova granskningar för att kontrollera att de är substantiella. Var uppmärksam på automatiseringsbias, tendensen att acceptera maskinell utdata (se ämne 10.1, AI i mätning av tjänstehantering).

**8. För spårbarhet.** Registrera indata, utdata, versioner, beslut och handlingar på ett sätt som stöder utredning, med förbehåll för integritetsregler och lagringsgränser. Ett [revisionsspår](https://en.wikipedia.org/wiki/Audit_trail) låter dig svara på vad som hände och varför. För följdtunga beslut om människor, fundera på vilken förklaring du kan ge och vilken överklagandeväg som finns (se ämne 8.3, Mätetal för regelefterlevnad och revision).

**9. Skydda data och motstå manipulation.** Kontrollera vilka data AI-system kan se och skicka ut. Testa för promptinjektion och dataläckage, särskilt för system som läser externt innehåll eller har åtkomst till verktyg. Tillämpa principerna om minsta behörighet som används för agenter som agerar (se ämne 10.3, Mätetal för AI-agenter och chattbottar, och ämne 8.1, Mätetal för säkerhetsincidenter och sårbarheter). Beakta integritet vid designen och involvera dataskyddsspecialister.

### Svara och lär

**10. Behandla AI-incidenter som incidenter.** Definiera vad som räknas: skadliga eller partiska utdata, dataexponering, osäkra handlingar, betydande fel som når användare. Använd din vanliga incidentprocess med AI-taggen, granska skuldfritt och mata lärdomar in i utvärderingar och kontroller. Gör det lätt för personal och användare att rapportera. Tid till inneslutning spelar lika stor roll som för vilken incident som helst (se ämne 3.4, Mätetal för större incidenter).

**11. Hantera leverantörers AI.** Fråga leverantörer vilka AI-funktioner de använder, hur de testas och ändras, hur data hanteras och hur incidenter rapporteras. Lägg till AI-specifika villkor i avtal där det spelar roll, inklusive underrättelse om väsentliga modelländringar. Bedöm kritiska leverantörer på nytt enligt en cykel (se ämne 8.4, Mätetal för leverantörer och avtal).

**12. Granska styrningen själv.** Varje kvartal, kontrollera vad måtten visar: var användningar förblev oregistrerade, vilka godkännanden som var för långsamma, vilka kontroller som inte fångade problem. Justera policyn och vägarna. Involvera personal och användare i översynen. Håll reglerna korta, tydliga och aktuella och avveckla kontroller som inte förtjänar sin kostnad.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Täckning i registret över AI-användningar | Att registrera triviala användningar för att höja procenten; nämnare begränsade till det som är registrerat | Oberoende upptäckt för nämnaren; stickprova registerposter för kvalitet; amnesti för oregistrerade användningar |
| Aktualitet i riskbedömning | Lättviktiga bedömningar som alltid godkänns; att bedöma användningar med låg risk | Granska bedömningsdjup; kontrollera att riskklassen motsvarar kriterierna |
| Täckning av ändringskontroll | Att inte upptäcka leverantörsändringar; att registrera ändringar i efterhand | Upptäckt genom versionshistorik och leverantörsmeddelanden; ändringsposter tidsstämplade före release |
| Aktualitet i utvärdering | Utvärderingar på lätta fall; att välja toleranser efter att ha sett resultaten | Testuppsättningar granskade av oberoende part; tröskelvärden satta i förväg |
| Grad av belägg för mänsklig tillsyn | Att klicka på godkänn utan att läsa; att dokumentera granskning som inte kunde ändra utfallet | Stickprova granskningar för substans; utlagda kända fel; granskarbelastning |
| Grad av AI-incidenter och tid till inneslutning | Att inte rapportera incidenter; att snäva in definitionen | Enkel, skuldfri rapportering; jämför med användarklagomål och revisionsfynd |
| Aktualitet i leverantörers AI-granskning | Frågeformulär besvarade av marknadsföring; bedömningar utan belägg | Beläggskrav för kritiska leverantörer; oberoende verifiering |

En sund avläsning är ett register som oberoende upptäckt bekräftar, bedömningar som matchar risken, ändringar som går genom kontroll, utvärderingar som hålls aktuella, tillsyn som hittar verkliga fel, incidenter som rapporteras villigt och innesluts snabbt och leverantörer som delar vad de ändrar.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Centralt godkännande av varje AI-användning | Kontroll, konsekvens | Långsamt; driver användning under jorden |
| Självbetjäningsregistrering med risknivåer | Snabbt för den säkra majoriteten | Kräver goda kriterier och stickprovskontroller |
| Förbud mot publika verktyg | Minskar dataexponering | Skuggbruk; förlorad nytta |
| Godkända verktyg med vägledning | Synlig och hanterbar användning | Kräver tillhandahållande och stöd |
| Tung dokumentation | Belägg för revision | Börda; speglar kanske inte praxis |
| Automatisk utvärdering i pipelinen | Kontinuerlig, konsekvent | Kräver goda testuppsättningar; kan missa nya fel |
| Mänsklig granskning av allt | Säkerhet | Skalar inte; trötthet |
| Riskbaserade stickprov | Praktiskt | Vissa fel slinker igenom |

Svaret är att tillhandahålla godkända verktyg och en snabb väg för användningar med låg risk, koncentrera granskningen på de följdtunga, automatisera utvärdering och övervakning och hålla den mänskliga tillsynen där den verkligen kan fungera.

## Frågor att diskutera med teamet

**1. Var använder vi AI i dag som inte finns på någon lista?**
Fråga teamet ärligt och erbjud amnesti. Titta på verktyg som används för utkast, sammanfattning, kodning och analys, inklusive de inuti produkter. Facilitatorn bör registrera användningar utan att döma. Enas om vem som ska registrera dem och vilka som behöver en närmare titt.

**2. Om vår mest följdtunga AI-användning gjorde ett skadligt misstag, hur skulle vi få veta det och vad skulle vi göra?**
Gå igenom upptäckt, inneslutning, kommunikation och lärande. Notera luckor i övervakning, ägarskap och befogenhet att stänga av den. Enas om en förbättring.

**3. Vad kan ändras under oss utan att någon godkänner det?**
Lista modeller, prompter, datakällor och leverantörsuppdateringar. För var och en, fråga hur vi skulle få veta att den ändrats och hur vi skulle testa den. Enas om var man ska lägga till upptäckt eller ett test.

**4. Skulle personen som granskar AI-utdata i vår process realistiskt kunna fånga ett allvarligt fel?**
Titta på volymen, informationen, tiden och befogenheten. Testa med ett utlagt fel. Om granskningen inte kan fungera, utforma om processen innan mer AI läggs till.

**5. Vilka av våra regler skulle en upptagen kollega tycka var lätta att följa, och vilka skulle hen kringgå?**
Lista de nuvarande reglerna och pröva dem mot verkliga arbetsflöden. Diskutera varför regler kringgås. Enas om ändringar som gör den säkra vägen till den lätta vägen.

**6. Vad har våra leverantörer berättat om sin AI, och vad har vi inte frågat?**
Kontrollera färska frågeformulär och avtal. Identifiera kritiska leverantörer med AI-funktioner och informationsluckorna. Enas om frågor för nästa översyn.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam bygger och inför AI-funktioner, och de upplever styrning som friktion eller som hjälp. De bör registrera användningar tidigt, testa på realistiska fall, placera prompter och modeller under versionshantering och utforma tillsyn som fungerar. De har nytta av snabbt godkännande för användningar med låg risk.

### Service- och driftteam

Driftteam kör AI i produktion och svarar på dess incidenter. De bör övervaka drift, föra handlingsloggar, tagga AI-incidenter och ha befogenheten och medlen att stänga av ett system. De använder också själva AI och bör följa samma regler.

### Ledning och styrning

Ledare sätter riskaptit och är ansvariga för resultaten. De bör finansiera registret, utvärderingen och övervakningen, acceptera att vissa AI-användningar inte kommer att godkännas, be om oberoende upptäckt av användningar och följa incidenter och tid till inneslutning. Styrande organ bör hålla reglerna korta, se över dem regelbundet och se till att personal och användare har en röst.

### Kunder och användare

Användare påverkas av AI-beslut och AI-utdata, ofta utan att veta det. De förtjänar att få veta när AI är inblandad i frågor som berör dem, att nå en person och att överklaga beslut. Klagomål och överklaganden är väsentligt belägg om hur styrningen fungerar i praktiken.

## I praktiken: ett exempel från tjänstehantering

En regional banks teknik- och driftdivision antar en AI-policy efter att en medarbetare klistrat in kunduppgifter i ett publikt verktyg. Regelefterlevnadsteamet publicerar ett register och förväntar sig att varje användning listas. Siffrorna nedan är illustrativa.

Tre månader senare listar registret 38 AI-användningar. Chefen för teknisk risk kontrollerar på oberoende väg: upphandlings- och utläggsdata, identitetsloggar som visar inloggningar till AI-tjänster, nätverksdata och en anonym personalenkät. Upptäckten hittar 94 användningar, så registertäckningen är 40 procent. Sjutton är funktioner inuti verktyg banken redan licensierar, och tolv är publika verktyg som personal använder. Av de 38 registrerade användningarna har bara 14 en riskklass, och de tre med högst risk, en modell som poängsätter bedrägerilarm, en chattbott för kunder och ett verktyg som sammanfattar klagomål, har ingen utvärdering det senaste året. Ändringar av bedrägerimodellens konfiguration och chattbottens prompter görs direkt av teamen, och ändringsregistren för det senaste kvartalet täcker 21 procent av ändringarna som hittas i versionshistoriken. Ett stickprov om 60 bedrägerilarm som modellen avfärdade visar registrerad mänsklig granskning för 52 av dem, men en utlagd uppsättning om fem kända missar fångades av bara en granskare, eftersom granskare var och en hanterar flera hundra larm om dagen. En incident, där chattboten gav kunder ett föråldrat avgiftsbelopp, hittades genom ett klagomål, och det tog sex dagar att innesluta eftersom ingen hade befogenhet att stänga av den.

Chefen för teknisk risk utformar styrningen på nytt tillsammans med teamen. En kort självbetjäningsregistrering med fem frågor placerar användningar med låg risk i registret på minuter, och en amnestiperiod uppmuntrar personal att lista de verktyg de använder. Riskklasser baseras på skada, data och autonomi. Användningar med högre risk behöver en bedömning, en utvärdering mot realistiska och motstridiga fall och en definierad utformning av tillsyn. Modeller, prompter och verktyg placeras under ändringskontroll med test i proportion till risken, och chattbottens prompter versioneras med återställning. Bedrägerilarmprocessen utformas om så att granskare hanterar färre, bättre prioriterade larm, och utlagda fel testar deras upptäckt. En namngiven ägare för varje användning med hög risk har befogenhet att stänga av den, och incidentsvaret täcker AI. Bankens moln- och AI-leverantörer tillfrågas vilka AI-funktioner de använder och hur ändringar meddelas.

Två kvartal senare är registertäckningen genom oberoende upptäckt 88 procent, alla användningar med hög risk är bedömda och utvärderade inom cykeln, täckningen av ändringskontroll är 84 procent, granskarnas upptäckt av utlagda fel stiger till 4 av 5 och mediantiden för att innesluta en AI-incident är 3 timmar. Personalen använder godkända verktyg för de flesta uppgifter. En högre chef ber om ett mål på 100 procents registertäckning. Chefen för teknisk risk föreslår att följa täckning mot oberoende upptäckt, bedömningens aktualitet och incidenthantering och förklarar att ett register utan upptäckt kan nå 100 procent och ändå missa risken. Beslutet registreras.

## Agilitet, AI, automatisering och analys

### Agilitet

Styr AI som en ändring i en levande tjänst, med en lättviktig, regelbunden översyn och intressenter vid bordet, i stället för ett engångsgodkännande. Varningen är att tunga godkännandeportar får team att dölja AI-användning.

### AI

För ett register över varje AI-användning med en ägare, en riskklass, ett utvärderingsdatum och en punkt för mänsklig tillsyn och mät täckning mot oberoende upptäckt. Testa att tillsynen kan utövas. Varningen är att den här boken inte ger juridisk rådgivning, och skyldigheter varierar mellan platser och över tid, så kontrollera dem med din egen juridiska rådgivare.

### Automatisering

Automatisera upptäckt och insamling av belägg för modell-, prompt- och dataändringar och mät automatiseringen på missade ändringar. Varningen är att automatiska utvärderingssviter testar det de byggdes för att testa, så lägg till nya test allteftersom fel dyker upp.

### Analys

Redovisa aktualitet i bedömningar och utvärderingar med datum och antal. Beslutet detta ger underlag för är var tillsynen är tunn. Varningen är att incidentantal för AI är små och ojämna, så kombinera dem med rapporter om tillbud.

## Branschperspektiv

**Startup.** Hastighet spelar roll och riskerna är mest dataexponering och opålitliga utdata. Håll en kort lista över verktyg och användningar med ägare, sätt några tydliga regler om vilka data som får användas var och versionera prompter. Återbesök allteftersom kunders krav på försäkran växer.

**Småföretag.** Personalen kommer att använda publika verktyg. Tillhandahåll ett godkänt alternativ, skriv en enkel regel på en sida om data och se över hur verktygen används. Fråga leverantörer om deras AI-funktioner och för en förteckning över var AI fattar beslut om kunder eller personal.

**Storföretag.** Skala behöver en driftmodell: register, risknivåer, utvärderingsstandarder, ändringskontroll och incidentprocess, integrerade med befintliga risk- och säkerhetsfunktioner. Använd oberoende upptäckt, automatisera utvärdering i pipelines och anpassa efter standarder. Ge team en snabb väg.

**Offentlig sektor.** Beslut som påverkar medborgare för med sig skyldigheter om öppenhet, rättvisa och överklagande, och upphandlings- och rättsliga ramverk formar vad som är tillåtet. För offentliga register över användningar med stor påverkan där det krävs, bedöm påverkan på rättigheter, håll människor meningsfullt i loopen och kontrollera gällande lag och vägledning (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna inkluderar insatsen att bygga och underhålla registret, upptäcktsverktyg eller analys, riskbedömningar, utvärderingsuppsättningar och körningar, ändringskontroll för prompter och modeller, övervakning, utbildning och incidentresponskapacitet. Styrning tillför också en del fördröjning för användningar med högre risk. Dessa kostnader skalar med antalet och risken hos användningar, vilket är ett skäl att hålla godkännande av låg risk lätt.

Avkastningen inkluderar undvikna skador och exponering, färre överraskningar i revisioner och tillsynsgranskningar, snabbare säkert införande genom tydliga regler och förtroende från kunder och personal. Bygg caset ur dina egna data: antalet användningar funna utanför registret och de data de rör, incidenter och deras kostnad, tid som lagts på ad hoc-godkännanden före och efter och fynd i revisioner. Undvik att citera publicerad statistik om AI-incidenter eller böter utan en spårbar källa och relevans för ditt sammanhang. Inkludera kostnaden för att inte styra, som inkluderar möjligheten av betydande rättslig skada och skada på anseendet (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Ett register som ingen kontrollerar.** Täckningen ser hög ut och missar de verkliga användningarna. Använd oberoende upptäckt.
- **Generella förbud.** De driver användning under jorden. Tillhandahåll godkända verktyg och en snabb väg.
- **Att behandla prompter och modeller som konfiguration ingen äger.** Beteende ändras obemärkt. Placera dem under ändringskontroll.
- **Att utvärdera en gång.** System glider och förändras. Kör om enligt schema och vid ändring.
- **Tillsyn bara till namnet.** Granskare kan inte fånga det de inte kan se. Testa med utlagda fel och rätta belastningen.
- **Ingen befogenhet att stänga av.** Inneslutning tar dagar. Namnge ägare med makt att stoppa ett system.
- **Att ignorera leverantörers AI.** Din risk inkluderar deras. Fråga, avtala och bedöm på nytt.
- **Regler ingen kan följa.** De kringgås. Håll dem korta och gör den säkra vägen lätt.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Att känna till och klassificera | Ingen bild av AI-användning | Policy och en ofullständig lista | Register med ägare och riskklass; oberoende upptäckt används för täckning | Täckning, aktualitet i bedömning och godkännandetider hanteras | Delad registerbild över affärsenheter och leverantörer; klasser ses över med tillsynsmyndigheter och användare |
| Testning och ändring | Ad hoc | Viss utvärdering för vissa användningar | Utvärdering på realistiska fall; prompter och modeller under ändringskontroll | Kontinuerlig utvärdering och driftövervakning; täckning hanteras | Automatiserad, riskbaserad utvärdering och ändring i pipelines, oberoende granskad |
| Tillsyn och lärande | Förlitan på förtroende | Granskning finns i princip | Tillsyn utformad och stickprovad; AI-incidenter taggade och skuldfritt granskade | Test med utlagda fel, tid till inneslutning och leverantörsbedömningar hanteras | Tillsyn, incidentlärande och policy samutvecklas med personal, användare och partner |

## Checklista

- [ ] Ett register listar AI-användningar med en ägare och en riskklass, kontrollerat mot oberoende upptäckt.
- [ ] En snabb väg finns för användningar med låg risk och en djupare väg för följdtunga.
- [ ] Användningar med högre risk har en aktuell riskbedömning och en definierad utformning av tillsyn.
- [ ] Utvärderingar på realistiska och motstridiga fall är aktuella och körs om vid ändring.
- [ ] Prompter, modeller, verktyg och datakällor är versionerade och under ändringskontroll.
- [ ] Produktionsövervakning bevakar drift, fel, åsidosättanden och ovanliga handlingar.
- [ ] Tillsyn testas med utlagda fel, och granskarbelastningen är realistisk.
- [ ] Revisionsspår stöder utredning inom integritets- och lagringsregler.
- [ ] AI-incidenter taggas och granskas skuldfritt, och ägare kan stänga av system.
- [ ] Leverantörer med AI-funktioner bedöms och är bundna att underrätta om väsentliga ändringar.

## AI-prompter

**Skriv ett utkast till en riskklassificering för AI-användningar.**

```text
Propose a simple risk classification (three or four levels) for AI uses in [type of
organization] based on harm if wrong, who is affected, involvement of decisions
about people, autonomy of actions, data sensitivity, and reversibility. For each
level, state example uses, the approvals and evidence required, and the review
cycle. Do not state legal conclusions. List your assumptions and points to confirm
with legal, risk, and security specialists.
```

**Utforma ett registreringsformulär.**

```text
Design a short self-service registration form for new AI uses, with no more than
eight questions, that assigns an initial risk class automatically and routes
higher-risk uses to review. Cover purpose, data, users affected, autonomy, vendor,
and owner. Explain how to keep it quick for low-risk cases. List your assumptions
and risks of misclassification.
```

**Planera en utvärderingsuppsättning.**

```text
We use AI for [task] in [process]. Help design an evaluation set: types of
realistic cases, difficult and adversarial cases, written criteria for correct
and safe outputs, checks for fairness where people are affected, how big a set is
practical, how often to rerun it, and what changes should trigger a rerun. Do not
claim a set is sufficient. List your assumptions and limits.
```

**Granska en AI-incident.**

```text
Here is a description of an AI-related incident: [paste, without personal data].
Draft a blameless review: timeline, how it was detected, contributing factors
(data, prompt, model, oversight, supplier, process), impact, what contained it,
and actions with owners. Suggest changes to evaluation, monitoring, and change
control. Do not assign blame to individuals. List your assumptions and open
questions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett mått på AI-styrning eller AI-risk.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för AI-styrningsmått använder oberoende belägg och bär sin manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- Bygg AI-registret genom oberoende upptäckt och anpassa granskningen efter risk med en snabb väg för säkra användningar.
- Behandla modeller, prompter, verktyg och datakällor som ändringar som behöver testning, godkännande och återställning.
- Utvärdera före användning och under användning, på realistiska och motstridiga fall.
- Utforma mänsklig tillsyn som kan fungera och testa den med utlagda fel.
- Behandla AI-incidenter som andra incidenter, med skuldfri granskning, och ge ägare makten att stänga av system.
- Fråga leverantörer om deras AI och håll reglerna korta och den säkra vägen lätt.

## Referenser och vidare läsning

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. ISO/IEC 23894, *Information technology: Artificial intelligence: Guidance on risk management*, International Organization for Standardization, 2023.
4. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
5. Organisation for Economic Co-operation and Development, *OECD AI Principles*, 2019 (updated 2024).
6. Mitchell, M., et al., "Model Cards for Model Reporting," *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias).
9. Wikipedia, [Prompt injection](https://en.wikipedia.org/wiki/Prompt_injection).
10. Wikipedia, [Artificial Intelligence Act](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act).
11. Wikipedia, [Responsible AI](https://en.wikipedia.org/wiki/Responsible_AI).
12. Wikipedia, [Regulation of artificial intelligence](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).
13. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
