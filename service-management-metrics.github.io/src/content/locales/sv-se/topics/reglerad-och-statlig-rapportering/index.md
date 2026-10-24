# Reglerad och statlig rapportering

**Obligatorisk rapportering är ett fast krav att designa runt, så bygg den ur samma register som du använder för att driva tjänsten, håll rapporteringsvyn skild från lärandevyn och skydda de människor som gör arbetet från mål som förvränger det.**

## Översikt och motiv

Många organisationer måste rapportera om sina tjänster oavsett om de skulle välja det. Tillsynsmyndigheter ber om incidentanmälningar, tillgänglighetssiffror och belägg för kontroller. Regeringar kräver att myndigheter publicerar prestationsdata, utgifter och tillgänglighetsredogörelser. Finansiärer och tillsynsorgan ber om resultat mot åtaganden. Avtal kräver tjänsterapporter. I sådana miljöer är rapportering inte ett internt ledningsval. Det är en skyldighet med ett förfallodatum, en definition och ibland ett vite.

Den [offentliga sektorn](https://en.wikipedia.org/wiki/Public_sector) har särskilda drag. [Ansvarsskyldighet](https://en.wikipedia.org/wiki/Accountability) inför medborgare och folkvalda organ är en kärnskyldighet, och den utövas genom revision, lagstiftning, [offentlighetslagar](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country) och publicerade resultat. Praxis kring [öppen förvaltning](https://en.wikipedia.org/wiki/Open_government) och [öppna data](https://en.wikipedia.org/wiki/Open_data) gör information tillgänglig för granskning och återanvändning. Regler för [offentlig upphandling](https://en.wikipedia.org/wiki/Public_procurement) formar vad som kan köpas och hur, och skyldigheter kring [arkivhantering](https://en.wikipedia.org/wiki/Records_management) styr hur länge information bevaras. [Valuta för pengarna](https://en.wikipedia.org/wiki/Value_for_money) är ett vanligt prov på offentliga utgifter, och oberoende organ genomför [effektivitetsrevisioner](https://en.wikipedia.org/wiki/Performance_audit) för att granska det. Detaljerna skiljer sig efter land, förvaltningsnivå och sektor, och det här ämnet beskriver mätpraxis, inte juridiska krav. Arbeta med dina kollegor inom juridik, regelefterlevnad och arkiv.

Reglerade privata organisationer, till exempel inom finans, hälsa, energi och telekommunikation, delar många av dessa drag. De möter skyldigheter att anmäla incidenter, rapportering om resiliens och tillsynsgranskningar. Den gemensamma tråden är att någon utanför leveransteamet definierar vad som måste rapporteras och när.

Kontinuerlig leverans och ITIL-praxis har båda något att erbjuda. Det agila målet om kontinuerligt samarbete med intressenter sträcker sig till tillsynsorgan, som är intressenter med legitima behov, och tidiga samtal om vad de kräver kan förhindra omarbete. Den agila vanan att leverera små, fungerande inkrement kontinuerligt passar rapportering: rapporter som produceras automatiskt ur register är mer korrekta och billigare än de som sätts samman för hand varje kvartal. ITIL:s praktik mätning och rapportering, och dess servicenivåhantering, ger vokabulären för att definiera vad som mäts och delas.

Rapporteringsskyldigheter skapar tre välkända faror.

- **Förvrängning genom mål.** När en redovisad siffra bär en konsekvens böjer sig arbetet mot siffran. Litteraturen om mål i den offentliga sektorn, inklusive John Seddons skrifter om systemtänkande i offentlig sektor och Jerry Mullers analys av mätfixering, beskriver många fall där att nå målet och att tjäna allmänheten gick isär. Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller med full kraft (se ämne 1.2, Goodharts lag och mätetalens psykologi).
- **Två uppsättningar tal.** Den lagstadgade definitionen av en siffra skiljer sig ofta från den teamet använder internt. Om teamet styr efter den ena och redovisar den andra litar ingen på någondera. Håll båda synliga, stäm av dem och förklara skillnaderna.
- **Rapportering som en börda.** Manuella, upprepade, inkonsekventa begäranden förbrukar kunniga människor. Ju mer rapporteringen beror på hjältemodigt kalkylbladsarbete, desto mer fel och fördröjning smyger sig in.

Det här ämnet bygger på mätetalen för regelefterlevnad, risk och leverantörer i den här delen (se ämne 8.2, Mätetal för risker och kontroller, ämne 8.3, Mätetal för regelefterlevnad och revision, och ämne 8.4, Mätetal för leverantörer och avtal) och på datagrunderna från den första delen (se ämne 1.5, Datakällor och instrumentering).

## Nyckelprinciper

- **Behandla skyldigheter som designunderlag.** Lista dem tidigt, med definitioner, förfallodatum och ägare, och utforma datainsamlingen runt dem.
- **Producera rapporter ur register.** Automatisera utdragen och håll ursprunget synligt.
- **Skilj rapporteringsvyn från lärandevyn.** Team behöver uppriktiga arbetsmått som inte begränsas av vad som redovisas.
- **Stäm av definitioner.** Visa hur lagstadgade siffror förhåller sig till teamets egna mått.
- **Rapportera ärligt, inklusive dåliga nyheter.** Rättelser och sammanhang bygger förtroende.
- **Skydda människor från perversa mål.** Använd lagstadgade mål med följeslagarmått och förklara deras gränser.
- **Gör publicerad data användbar.** Tillgänglighet, tydlighet och format spelar roll för allmänheten.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Täckning av rapporteringsskyldigheter | Andel rapporteringsskyldigheter med en namngiven ägare, en angiven definition, en datakälla och en kalenderpost | skyldigheter med alla fyra / rapporteringsskyldigheter inom omfånget | procent | Skyldighetsregister | Mätning och rapportering; styrning | Arbetsavtal med intressenter om informationsbehov | Kvartalsvis |
| Punktlighet i rapportering | Andel krävda rapporter inlämnade senast sitt förfallodatum | rapporter inlämnade senast förfallodatum / rapporter som förföll under perioden | procent | Rapporteringskalender och inlämningsposter | Mätning och rapportering | Åtaganden mot intressenter uppfyllda | Månadsvis |
| Omräkningsgrad | Andel inlämnade rapporter eller siffror som senare korrigerats | rapporter eller siffror korrigerade efter inlämning / inlämnade rapporter eller siffror | procent | Inlämningslogg och korrigeringslogg | Mätning och rapportering; ständig förbättring | Undkomna fel | Kvartalsvis |
| Spårbarhetstäckning | Andel redovisade siffror som kan spåras till ett register genom dokumenterade steg | siffror med dokumenterat ursprung till ett register / redovisade siffror | procent | Dokumentation av ursprung, rapportspecifikationer | Mätning och rapportering; kunskapshantering | Reproducerbara byggen | Kvartalsvis |
| Definitionsöverensstämmelse | Andel redovisade mått för vilka den lagstadgade definitionen och den interna definitionen är dokumenterade och avstämda | mått med dokumenterad avstämning / redovisade mått med en lagstadgad definition | procent | Mätetalsregister | Mätning och rapportering; servicenivåhantering | Delad definition av klart | Kvartalsvis |
| Rapporteringsinsats | Persontimmar som läggs på att producera en återkommande rapport | loggade timmar per rapportcykel, med andelen som är manuellt utdrag och sammanställning | timmar | Tidsuppskattningar, insatsloggar | Mätning och rapportering; ständig förbättring | Kostnad för arbete som inte är leverans | Per rapportcykel |
| Tillgänglighetsefterlevnad i publicering | Andel publicerade rapporter och dataset som uppfyller den krävda tillgänglighetsstandarden | publicerade poster som klarar en tillgänglighetskontroll / publicerade poster | procent | Tillgänglighetstestresultat | Mätning och rapportering; kunskapshantering | Inkluderande definition av klart | Kvartalsvis |

Skriv den lagstadgade definitionen, källan och förfallodatumet bredvid varje redovisat mått. En rapport är "i tid" när den accepteras av mottagande organ, inte när den skickas, om acceptans registreras. En omräkning räknar varje korrigering av en siffra som redan lämnats in, frivillig eller krävd. Rapporteringsinsats är ett trendmått för organisationen och aldrig ett mått på individer. Tillgänglighetsefterlevnad kontrolleras mot den standard som gäller dig, till exempel Web Content Accessibility Guidelines.

## Rekommendationer

### Behandla skyldigheter som designunderlag

**1. Håll ett register över rapporteringsskyldigheter.** För var och en, registrera kravet, den juridiska eller avtalsmässiga källan, vad som ska rapporteras, definitionen, förfallodatumet, mottagande organ, den interna ägaren och datakällan. Granska det när lagar, avtal eller tillsynsmyndigheter ändras. Skyldigheter som är kända tidigt kan designas in, och de som upptäcks sent måste sättas samman för hand.

**2. Involvera tillsynsorganet tidigt.** Fråga tillsynsmyndigheter, revisorer och finansiärer vad de kommer att göra med datan och vad de behöver. Vissa hjälper dig att forma en definition eller accepterar data i en form du redan producerar. Agil praxis värderar samarbete med intressenter, och tillsynsorgan är intressenter. För register över dessa samtal och bevara oberoende där det spelar roll.

**3. Utforma datainsamlingen för rapportering från början.** När du bygger en tjänst, ta med de händelser och fält som krävda rapporter kommer att behöva: incidenttidsstämplar, påverkan, kategorier, användarantal. Att lägga till dem senare är kostsamt. Definiera dem en gång och dela definitionen över team, med en enda ägare för definitionen (se ämne 1.4, Styrning och ägarskap av mätetal).

### Producera rapporter ur register

**4. Automatisera pipelinen från post till rapport.** Hämta ur incident-, ändrings- och tjänstesystemen med skriptade frågor, tillämpa dokumenterade transformationer och producera rapporten med en granskad mall. Automatiska rapporter är repeterbara, snabbare och lättare att revidera än manuella. Versionshantera frågorna och mallarna så att en tidigare rapport kan reproduceras.

**5. Dokumentera ursprung.** För varje redovisad siffra, notera var den kommer ifrån, hur den beräknas och vem som kontrollerar den. Spårbarhetstäckning mäter hur väl detta görs. En revisor eller en journalist som frågar "var kommer det här talet ifrån?" bör få ett tydligt svar på minuter.

**6. Granska före inlämning, med en oberoende läsare.** Låt någon utanför teamet som producerade rapporten kontrollera definitionerna, aritmetiken och berättelsen. Granskningar fångar fel och ostödda påståenden. Registrera granskningen. En kort godkännandesignatur från den ansvariga personen gör ägarskapet tydligt.

**7. Korrigera öppet.** När ett fel hittas efter inlämning, korrigera det omgående, förklara vad som ändrades och notera orsaken. En omräkningsgrad nära noll är misstänkt om datan är komplex. En synlig, snabb korrigering bygger mer förtroende än en siffra som lämnas kvar.

### Håll rapportering och lärande åtskilda

**8. Håll en arbetsvy för teamet.** Team behöver mått som hjälper dem att förbättra, till exempel percentiler, åldern på de äldsta posterna och kvalitetsföljeslagare. Dessa är sällan desamma som lagstadgade siffror. Begränsa inte arbetsvyn till det som redovisas och styr inte enbart efter den redovisade siffran.

**9. Stäm av lagstadgade och interna definitioner.** Där ett krävt mått skiljer sig från teamets, dokumentera skillnaderna och visa båda. Till exempel kan en tillsynsmyndighets tillgänglighetssiffra utesluta planerat underhåll, medan användare upplever det som driftstopp. Visa avstämningen i mätetalsregistret och i rapportens anteckningar. Detta skyddar mot problemet med "två uppsättningar tal".

**10. Para lagstadgade mål med följeslagare.** Om ett mål pålägges, lägg till mått som skulle avslöja förvrängning: kvalitet, användarupplevelse och arbetet som lämnats utanför. Para till exempel ett mål för tid till första svar med ett mått på lösning och på upprepade kontakter (se ämne 3.1, Mätetal för servicedesk). Förklara i rapporten hur siffran bör läsas.

### Publicera för allmänheten

**11. Gör publicerad information användbar.** Publicera i öppna, maskinläsbara format där lagen och integriteten tillåter, med tydliga beskrivningar, definitioner och datum. Uppfyll tillgänglighetsstandarder för dokument och webbsidor. Att publicera data på ett sätt som människor inte kan läsa eller återanvända uppfyller bokstaven och besegrar syftet. Testa med verkliga användare, inklusive de som använder hjälpmedelsteknik (se ämne 6.4, Användar- och medarbetarupplevelse).

**12. Skydda integritet och säkerhet i det du publicerar.** Aggregera och undertryck små tal som kan identifiera människor, undvik att publicera detaljer som hjälper angripare och kontrollera reglerna för utlämnande med specialister. Tillämpa samma omsorg på svar enligt offentlighetslagar. Registrera beslut om maskning och skälen för dem.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Täckning av rapporteringsskyldigheter | Att behandla skyldigheter snävt; att lista ägaren utan överenskommelse | Granskning av registret av regelefterlevnad eller intern revision; bekräftelse från ägare |
| Punktlighet i rapportering | Att lämna in ofullständiga rapporter för att klara datumet; att räkna utkast som inlämningar | Fullständighetskontroll vid inlämning; räkna bara accepterade rapporter; omräkningsgrad |
| Omräkningsgrad | Att undertrycka korrigeringar; att göra korrigeringar i det tysta | Korrigeringslogg granskad av en oberoende läsare; en låg grad läses med spårbarhet |
| Spårbarhetstäckning | Att dokumentera ursprung ytligt; att bara ta med enkla siffror | Stickprova ursprung genom att göra om en beräkning från källan |
| Definitionsöverensstämmelse | Att förklara definitioner som avstämda utan avstämning; att anta den lagstadgade definitionen bara i rapporten | Avstämningsdokument granskat; visa båda siffrorna sida vid sida |
| Rapporteringsinsats | Att inte logga timmar; att flytta arbete till andra team | Jämför med teamets återkoppling; ta med alla bidragsgivare i uppskattningen |
| Tillgänglighetsefterlevnad i publicering | Att köra en kontrollant som bara hittar vissa problem; att publicera en separat tillgänglig version som släpar efter | Manuell testning med hjälpmedelsteknik; kontrollera likvärdighet mellan versioner |

En sund avläsning är varje skyldighet ägd, rapporter i tid och korrekta med synliga korrigeringar, siffror spårbara till register, lagstadgade och interna definitioner avstämda, fallande rapporteringsinsats och publicerad information som allmänheten kan använda.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Manuell sammanställning av rapporter | Flexibel; fungerar med vilken data som helst | Långsam, felbenägen, beroende av individer |
| Automatisk rapportering | Repeterbar, reviderbar, billig att köra | Uppsättningsinsats; kan befästa en dålig definition |
| En uppsättning mått för allt | Enkel | Förvränger arbete; lagstadgade siffror passar sällan teamets behov |
| Separata rapporterings- och lärandevyer | Uppriktigt lärande; ärlig rapportering | Kräver avstämning och disciplin |
| Hårda lagstadgade mål | Tydlig ansvarsskyldighet | Perversa effekter; manipulation |
| Mål med följeslagare och sammanhang | Avslöjar förvrängning | Mer att förklara |
| Tidigt samarbete med tillsynsmyndigheter | Färre överraskningar | Tid; gränser att upprätthålla |
| Enbart armlängds avstånd | Tydligt oberoende | Sen återkoppling; omarbete |

Svaret är att automatisera rapporter ur register, hålla en arbetsvy för teamet skild från rapporteringsvyn, stämma av definitioner öppet och engagera tillsynsorgan tidigt samtidigt som deras oberoende bevaras.

## Frågor att diskutera med teamet

**1. Vilka rapporter är vi skyldiga, till vem och senast när, och vem äger var och en?**
Sammanställ listan i rummet och jämför den med registret. Glapp dyker ofta upp: rapporter som är skyldiga enligt avtal, till finansiärer eller enligt regler få känner till. Facilitatorn bör registrera nya poster och tilldela ägare.

**2. Vilken redovisad siffra skulle vi hantera annorlunda om den inte redovisades?**
Välj ett lagstadgat eller avtalat mått och fråga vad teamet skulle göra om ingen mätte det. Svaret avslöjar var siffran och syftet går isär. Diskutera vilket följeslagarmått som skulle visa skillnaden.

**3. Kan vi reproducera förra kvartalets rapport från källan i dag?**
Försök med en rapport. Notera vad som är manuellt, odokumenterat eller förlorat. Enas om det första steget att automatisera eller dokumentera och vem som gör det.

**4. Hur hanterar vi ett fel som hittas efter inlämning?**
Granska processen och det senaste exemplet. Var korrigeringen snabb och öppen? Kände någon rädsla för att lyfta det? Enas om vad som gör korrigering normalt.

**5. Vad skulle en person som använder hjälpmedelsteknik uppleva när personen läser vår publicerade rapport?**
Testa en publicerad post tillsammans eller granska en nylig tillgänglighetskontroll. Fråga vem som äger tillgänglighet för publicerade dokument. Enas om en rättelse och en process för att förhindra återkomst.

**6. Vad gör tillsynsmyndigheten eller tillsynsorganet faktiskt med vår data?**
Många team vet inte. Planera ett samtal för att ta reda på det och för att fråga om en annan form skulle tjäna dem lika väl. Facilitatorn bör notera gränser för oberoende.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam bygger de händelser och fält som rapporterna beror på, och de känner trycket från lagstadgade mål. De bör ta med rapporteringsbehov i definitionen av klart, hålla en uppriktig arbetsvy och flagga när ett mål förvränger arbetet. Tidiga samtal med de som rapporterar hjälper till att förhindra omarbete.

### Service- och driftteam

Driftteam genererar det mesta av underliggande data och förbereder ofta rapporterna. De bör dokumentera ursprung, automatisera utdrag och hålla en korrigeringslogg. De är väl placerade att förklara hur en siffra bör läsas och att varna när den vilseleder.

### Ledning och styrning

Ledare är ansvariga för riktigheten och ärligheten i det som rapporteras. De bör be om spårbarhet och avstämning, motstå att förvandla lagstadgade siffror till individuella mål, skydda människor som lyfter fel och stödja engagemang med tillsynsorgan. Styrningen bör granska skyldighetsregistret och omräkningshistoriken.

### Kunder och användare

Allmänheten och kunder förlitar sig på publicerad information för att hålla tjänster ansvariga. De behöver data de kan hitta, läsa och återanvända, i tillgängliga format, med tydliga förklaringar av vad den betyder. De förtjänar också omgående besked när en incident påverkar dem, så som regler kan kräva.

## I praktiken: ett exempel från tjänstehantering

En nationell myndighet tillhandahåller digitala licenstjänster som används av flera miljoner människor om året. Den måste rapportera månadsvis till ett departement, publicera årliga prestationsdata och underrätta sin tillsynsmyndighet om större tjänsteincidenter inom en fast tid. Siffrorna nedan är illustrativa.

En intern granskning finner att myndigheten är skyldig 31 rapporter av olika slag, och att bara 22 finns i skyldighetsregistret med en namngiven ägare och en definition, en täckning på 71 procent. Månadssiffror sätts samman för hand på ungefär 60 timmar, mest genom att hämta från tre system till ett kalkylblad. Spårbarheten är dålig: för huvudsiffran, tillgänglighet, kan ingen reproducera förra årets tal. Departementets definition av tillgänglighet utesluter planerat underhåll, och myndighetens egen arbetsvy räknar det, vilket förklarar varför användare och departementet ser olika bilder. Myndigheten nådde sitt mål för tid till första svar varje månad, och servicedesken har börjat kvittera förfrågningar automatiskt för att nå det, medan tid till lösning har stigit. Två publicerade rapporter föll vid ett tillgänglighetstest när de kontrollerades med en skärmläsare.

Myndighetens chef för tjänsteprestation kommer överens om ändringar med departementet och leverans- och driftteamen. Skyldighetsregistret blir fullständigt, med ägare, definitioner och datum. Månadssiffror kommer från skriptade frågor mot incident- och övervakningssystemen, med en dokumenterad transformation och en granskad mall, vilket minskar insatsen till ungefär 8 timmar. En avstämningsanteckning anger de lagstadgade och interna definitionerna av tillgänglighet med båda siffrorna visade i rapporten. Målet för första svar paras med tid till lösning och upprepade kontakter i arbetsvyn, och departementet går med på att se följeslagarmåtten. Myndigheten korrigerar också en tillgänglighetssiffra från föregående kvartal, förklarar orsaken och publicerar korrigeringen. Publicerade rapporter produceras i en tillgänglig mall, och ett skärmläsartest läggs till i releasechecklistan.

Ett år senare är täckningen av skyldigheter 100 procent, rapporter är i tid, omräkningsgraden är låg med varje korrigering förklarad, spårbarheten täcker alla huvudsiffror och rapporteringsinsatsen har fallit med ungefär 85 procent. Ministerns kansli ber om ett nytt mål på 99,95 procents tillgänglighet, med myndighetens ledare ansvariga. Chefen för tjänsteprestation förklarar skillnaden mellan den lagstadgade och den användarupplevda siffran och föreslår ett mål med följeslagarmått och ett granskningsdatum. Beslutet registreras, och departementet går med på en gemensam granskning av definitionen före nästa rapporteringsår.

## Agilitet, AI, automatisering och analys

### Agilitet

Designa för fasta rapporteringskrav och håll rapporteringsvyn skild från lärandevyn. Varningen är att ett rapporteringsmål kan förvränga det arbete det beskriver.

### AI

Där AI stöder reglerade processer kan rapporten behöva visa hur beslut fattades och vem som var ansvarig. Kontrollera kraven med din juridiska rådgivare och för register över AI-användning. Varningen är att AI-utdata som används i en inlämning behöver mänsklig verifiering.

### Automatisering

Bygg rapporter ur samma register som används för att driva tjänsten och automatisera kontroller som körs före inlämning. Mät processen på omräkningar. Varningen är att automatisering kan sprida ett fel till många rapporter.

### Analys

Redovisa med de definitioner som använts och datumet för datan. Beslutet detta ger underlag för är vad som måste rapporteras och var datan kommer ifrån. Varningen är att definitioner skiljer sig mellan regimer, så undvik att anta att en är universell.

## Branschperspektiv

**Startup.** Rapporteringsskyldigheter kan komma med en första företagskund eller en tillsynsmyndighet. Börja med en kort lista över skyldigheter, producera rapporter ur dina egna system och undvik att bygga en separat rapporteringsprocess. Var försiktig när du lovar servicenivåer i avtal.

**Småföretag.** Skyldigheter är ofta avtalsmässiga eller knutna till en enda tillsynsmyndighet. Håll en kalender, använd mallar och dokumentera hur tal görs. En liten, korrekt rapport slår en stor, hastig.

**Storföretag.** Många skyldigheter över regioner och regimer kräver ett centralt register, gemensamma definitioner och delade verktyg för utdrag. Se upp för dubbla begäranden till samma team. Använd en enda sanningskälla för incident- och tjänstedata, med vyer för varje regim.

**Offentlig sektor.** Detta är ämnets hemmaplan. Planera för lagstiftning, ministerbegäranden, revision, begäranden enligt offentlighetslagar och offentlig granskning. Publicera data öppet där lagen tillåter, uppfyll tillgänglighetsskyldigheter, bevara register under den krävda perioden och dokumentera beslut. Motstå att förvandla lagstadgade siffror till individuella prestationsmål och beakta effekterna av mål på medborgare och personal.

## Affärscase: motiv, ROI och TCO

Kostnaderna är insatsen att bygga och underhålla skyldighetsregistret, tekniken för automatiska utdrag och mallar, granskningstid och tillgänglighetstestning. Jämfört med manuell sammanställning flyttar automatisering insats från upprepat arbete till ett engångsbygge och lätt underhåll.

Avkastningen är färre fel och korrigeringar, mindre personaltid på sammanställning, snabbare svar på tillsynsbegäranden och större förtroende hos tillsynsmyndigheter och allmänheten. Bygg caset ur dina egna data: timmar per rapport före och efter, antalet och effekten av omräkningar, tiden att besvara en tillsynsfråga och kostnaden för eventuellt undvikt vite eller kritiskt revisionsfynd. Undvik att citera uppskattningar av efterlevnadsbördan om du inte kan spåra källan och metoden. Ta med kostnaden för fortsatt engagemang med tillsynsorgan och jämför den med kostnaden för överraskningar (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att styra enbart efter den lagstadgade siffran.** Det förvränger arbetet. Håll en arbetsvy med följeslagarmått.
- **Två oavstämda uppsättningar tal.** Förtroendet kollapsar. Dokumentera och visa skillnaderna.
- **Handbyggda kalkylblad som system.** De går sönder och beror på individer. Automatisera ur register.
- **Att lämna in ofullständiga rapporter för att klara ett datum.** Det byter ett misslyckande mot ett annat. Kom överens om förlängningar eller lämna in med tydliga reservationer.
- **Korrigeringar i det tysta.** De undergräver förtroendet. Korrigera öppet och förklara.
- **Individuella mål ur lagstadgade siffror.** De belönar manipulation och straffar ärlig personal. Håll siffror på tjänstenivå.
- **Oläsliga publikationer.** Efterlevnad till formen besegrar syftet. Publicera användbar, tillgänglig data.
- **Att ignorera integritet vid publicering.** Små tal kan identifiera människor. Aggregera och granska utlämnande.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Skyldigheter och definitioner | Kända av några få personer | Delvis lista | Register med ägare, definitioner och datum; lagstadgade och interna definitioner avstämda | Registret granskas mot lagändringar; avstämningen underhålls | Definitioner samutvecklas med tillsynsorgan; delas över myndigheter |
| Produktion och kvalitet | Manuell sammanställning | Mallar, vissa skript | Automatiserad ur register med ursprung och oberoende granskning | Omräkningar analyseras; insats och punktlighet hanteras | Rapporter produceras kontinuerligt; tillsynsorgan når data direkt |
| Användning och publicering | Rapportera för att tillfredsställa begäran | Publiceras på begäran | Arbetsvy skild från rapporteringsvy; tillgänglig, återanvändbar publicering | Följeslagarmått med mål; användartestning av publikationer | Öppna, länkade data med allmänhetens deltagande i designen |

## Checklista

- [ ] Ett register listar varje rapporteringsskyldighet med ägare, definition, källa, förfallodatum och mottagande organ.
- [ ] Krävda fält och händelser byggs in i tjänster från början.
- [ ] Rapporter produceras ur register med versionshanterade frågor och mallar.
- [ ] Varje redovisad siffra har dokumenterat ursprung och en namngiven kontrollant.
- [ ] En oberoende läsare granskar rapporter före inlämning.
- [ ] Lagstadgade och interna definitioner är avstämda och båda visas.
- [ ] Korrigeringar loggas, förklaras och publiceras omgående.
- [ ] Lagstadgade mål har följeslagarmått och sammanhang i rapporten.
- [ ] Publicerade rapporter och dataset uppfyller den tillämpliga tillgänglighetsstandarden och integritetsgranskning.
- [ ] Ett samtal med varje större tillsynsorgan om dess behov finns i kalendern.

## AI-prompter

**Bygg ett skyldighetsregister.**

```text
Here is a list of reports, notifications, and publications that we believe we
owe: [paste with sources, in plain language]. Structure them into a register
with fields for requirement, source, definition, data source, due date,
receiving body, and owner role. Flag missing information and obligations that
look duplicated across teams. Do not give legal conclusions. List your
assumptions and questions for legal and compliance.
```

**Stäm av två definitioner.**

```text
The statutory definition of [measure] is: [text]. Our internal definition is:
[text]. Our data fields are: [list]. Explain the differences, describe how each
affects the number, suggest how to show both in a report, and propose a short
note explaining the difference to readers. Do not assume facts not given.
List your assumptions.
```

**Planera rapportautomatisering.**

```text
We produce [report] monthly using these manual steps and sources: [list with
hours]. Propose a plan to automate it from systems of record, including
documented queries, a transformation step, lineage notes, review, and
reproducibility of past reports. Suggest what to keep manual and why. Do not
assume specific tools. List your assumptions and risks.
```

**Granska en publicerad rapport för användbarhet.**

```text
Here is the text structure of a report we plan to publish: [paste headings and
sample tables, with no sensitive content]. Review it for plain language,
definitions, context for figures, accessibility of tables and charts, and
privacy risks from small numbers. Suggest improvements. Remind me to test with
assistive technology and to check disclosure rules with specialists. List your
assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett lagstadgat eller reglerat rapporteringsmått.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för rapporteringsmått visar sin definition, avstämning, manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- Behandla rapporteringsskyldigheter som designunderlag, listade med ägare, definitioner och förfallodatum.
- Producera rapporter ur register med ursprung och oberoende granskning.
- Håll en uppriktig arbetsvy skild från rapporteringsvyn och stäm av definitioner öppet.
- Para lagstadgade mål med följeslagarmått och förvandla dem aldrig till individuella mål.
- Korrigera fel öppet och snabbt.
- Publicera information som allmänheten kan hitta, läsa och återanvända, med integriteten skyddad.

## Referenser och vidare läsning

1. Seddon, J., *Systems Thinking in the Public Sector*, Triarchy Press, 2008.
2. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
3. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
4. European Parliament and Council, *Directive (EU) 2016/2102 on the accessibility of the websites and mobile applications of public sector bodies*, 2016.
5. Government Digital Service, *Service Standard*, United Kingdom, https://www.gov.uk/service-manual/service-standard.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Public sector](https://en.wikipedia.org/wiki/Public_sector).
9. Wikipedia, [Accountability](https://en.wikipedia.org/wiki/Accountability).
10. Wikipedia, [Freedom of information laws by country](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country).
11. Wikipedia, [Open government](https://en.wikipedia.org/wiki/Open_government).
12. Wikipedia, [Open data](https://en.wikipedia.org/wiki/Open_data).
13. Wikipedia, [Public procurement](https://en.wikipedia.org/wiki/Public_procurement).
14. Wikipedia, [Records management](https://en.wikipedia.org/wiki/Records_management).
15. Wikipedia, [Value for money](https://en.wikipedia.org/wiki/Value_for_money).
16. Wikipedia, [Performance audit](https://en.wikipedia.org/wiki/Performance_audit).
17. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
