# Överenskommelser om upplevelsenivå

**Ett upplevelsenivåavtal lägger frågan "hur kändes det att använda?" till frågan "nådde tjänsten sitt mål?", och det fungerar bara när upplevelsemåtten väljs tillsammans med användare och hålls bredvid de operativa.**

## Översikt och motiv

Ett [servicenivåavtal](https://en.wikipedia.org/wiki/Service-level_agreement) (SLA) registrerar vad en leverantör åtar sig att leverera, vanligen i termer leverantören kan räkna: tillgänglighet, svarstid, lösningstid. Dessa mått är användbara och de är också ofullständiga. Ett team kan nå varje mål på instrumentpanelen medan användare ägnar sin vecka åt att kringgå långsamma inloggningar, upprepa sig för en servicedesk och vänta på godkännanden. Det här glappet mellan grön rapportering och missnöjda användare kallas ibland vattenmeloneffekten: grön på utsidan, röd på insidan (se ämne 5.1, Mätetal för SLA, OLA och XLA).

Ett **upplevelsenivåavtal (XLA)** är ett avtal, mellan en leverantör och de människor som använder en tjänst, om den upplevelse tjänsten ska ge. Det anger önskade resultat och känslor, till exempel "jag kan börja arbeta inom några minuter efter att jag kommit" eller "jag litar på att min förfrågan kommer att hanteras", och det namnger de mått som ska visa om de uppfylls. Termen används över hela gemenskapen kring it-tjänstehantering (ITSM), och dess exakta definition varierar mellan författare och leverantörer. Kontrollera ramverksägarens aktuella publikationer innan du beskriver ett XLA som en del av ITIL och ange vilken användning du följer. Det här ämnet behandlar XLA som en praktisk idé: ett avtal som placerar upplevelsemått bredvid operativa.

Idén har rötter utanför it. [Användarupplevelse](https://en.wikipedia.org/wiki/User_experience) är en persons samlade upplevelse av att använda en produkt, ett system eller en tjänst, och [kundupplevelse](https://en.wikipedia.org/wiki/Customer_experience) är summan av en kunds interaktioner med en organisation över tid. [Användbarhet](https://en.wikipedia.org/wiki/Usability) gäller hur effektivt, ändamålsenligt och tillfredsställande människor kan nå sina mål. Agila team känner detta område från designtänkande och användarforskning och från intressentgranskningar där användare reagerar på fungerande programvara. Ett XLA ger samma uppmärksamhet åt tjänsten i drift.

Upplevelse är svår att mäta och lätt att förvränga. En enkät som bara når nöjda användare, ett stämningspoäng inställt för att stiga eller ett enda "upplevelseindex" som ingen kan förklara vilseleder lika säkert som en manipulerad ärendetid. Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller fullt ut: upplevelsemått är samtalsstartare, inte kvoter (se ämne 1.2, Goodharts lag och mätetalens psykologi).

Det här ämnet bygger på enkätmåtten i föregående ämne (se ämne 6.1, Mätetal för kundnöjdhet) och lägger till beteendebaserade och resebaserade mått som inte beror på att man frågar.

## Nyckelprinciper

- **Börja med resultat människor bryr sig om.** Fråga användare hur en bra dag ser ut och skriv avtal med deras ord.
- **Para upplevelse med drift.** Ett XLA sitter bredvid ett SLA, inte i stället för det.
- **Använd några få mått från olika vinklar.** Kombinera vad människor säger, vad de gör och vad systemet registrerar.
- **Mät resor såväl som kontaktpunkter.** En upplevelse är hela vägen från behov till resultat.
- **Var ärlig om osäkerhet.** Upplevelsedata är brusiga, och små grupper behöver skydd.
- **Kom överens om mål med användare och revidera dem.** Ett XLA är ett levande avtal, granskat med de människor det beskriver.
- **Använd aldrig upplevelsedata för att rangordna individer.**

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Upplevelsepoäng | Genomsnittligt betyg på ett överenskommet upplevelsepåstående, för en tjänst och publik | medelbetyg över giltiga svar på ett påstående på en fast skala | skalpoäng | Kort pulsenkät, skickad enligt schema | Servicenivåhantering; ständig förbättring | Återkoppling från intressentgranskning; granskning av produktresultat | Månadsvis |
| Stämningstrend | Tonens riktning i fritextkommentarer för en tjänst | andel kommentarer kodade positiva minus andel kodade negativa, per period | procentenheter | Kodade enkätkommentarer och ärendekommentarer | Ständig förbättring | Teman från retrospektiv | Månadsvis |
| Friktionshändelser per användare | Antal signaler på att en användare stötte på besvär, normaliserat per aktiva användare | (upprepade kontakter + återöppnade poster + misslyckade inloggningar utöver ett fastställt antal + övergivna förfrågningar) / aktiva användare | händelser per användare | Ärendesystem, identitetsloggar, förfrågningsportal | Servicedesk; incidenthantering | Fel som hittas i användning | Månadsvis |
| Tid som förloras på it-problem | Uppskattad tid användare förlorar på tjänsteproblem under en period | självrapporterade förlorade minuter per användare, eller uppmätt tid i degraderat tillstånd viktad efter påverkade användare | minuter per användare | Pulsenkät; övervakning sammanfogad med användarantal | Tillgänglighetshantering; incidenthantering | Cykeltid som förloras på hinder | Kvartalsvis |
| Genomförandegrad för resa | Andel användare som slutför en definierad resa utan att överge den eller söka hjälp | användare som slutför resan utan en hjälpkontakt / användare som påbörjar resan | procent | Portalanalys; ärendelänkar | Hantering av serviceförfrågningar; hantering av tjänstekatalog | Uppgiftsframgång i användbarhetstester | Månadsvis |
| XLA-måluppfyllelse | Andel överenskomna upplevelsemål som nåtts under perioden | uppnådda mål / överenskomna mål | procent | XLA-registret | Servicenivåhantering | Uppnående av leveransmål | Kvartalsvis |
| Upplevelseglapp | Skillnaden mellan SLA-måluppfyllelse och upplevelsepoäng för samma tjänst | rangordning av SLA-måluppfyllelse minus rangordning av upplevelsepoäng över tjänster, eller en skriven jämförelse | rangskillnad eller anteckning | SLA-rapporter och pulsenkät | Servicenivåhantering | Definition av klart mot användaråterkoppling | Kvartalsvis |

Definiera publiken och perioden för varje mått. Ange hur små grupper skyddas: till exempel visas inget resultat för någon grupp på färre än tio personer. Friktionshändelser räknar signaler, inte skuld, så en händelse knyts till en tjänst och en användargrupp, aldrig till en namngiven persons prestationsbedömning.

## Rekommendationer

### Utforma avtalet med användare

**1. Intervjua innan du mäter.** Tillbringa tid med ett urval användare från varje viktig grupp och fråga: Hur ser en bra dag med den här tjänsten ut? Var slösar den din tid? Vad skulle du sluta göra om den fungerade? Använd vanor från [människocentrerad design](https://en.wikipedia.org/wiki/Human-centered_design): observera verkligt arbete och skriv vad du hör med användarens ord. De påståenden som blir resultatet blir avtalets upplevelsemål.

**2. Skriv upplevelsepåståenden som resultat.** "Jag kan få en ny medarbetare produktiv på deras första morgon" säger mer än "åtkomstbegäran för ny medarbetare löst på två dagar." Håll varje påstående kort, i första person och knutet till en tjänst. Sikta på tre till fem påståenden per tjänst så att människor kan minnas dem.

**3. Välj mått från tre vinklar.** För varje påstående, välj ett mått från vad människor säger (en pulsfråga eller ett kommentarstema), ett från vad människor gör (genomförande av resa, upprepade kontakter, övergivna förfrågningar) och där det är möjligt ett från vad systemet registrerar (fördröjning för stegen i resan). När de tre är oense har du hittat något att undersöka.

**4. Kom överens om mål med lätt hand.** I början, sätt en riktning ("minska förlorad tid") och ett granskningsdatum i stället för ett hårt tal. Hårda mål för nya upplevelsemått inbjuder till manipulation innan måttet är förstått. När ett mål väl dyker upp, gör det till ett intervall och säg vem som kom överens om det.

### Samla in och läs datan

**5. Använd korta, regelbundna pulsfrågor.** En fråga om ett påstående, ställd med jämna mellanrum, är lättare att svara på än en lång årlig enkät. Rotera påståendena, håll formuleringen stabil och undvik att fråga samma person mer än en gång under en fastställd period. Länka pulsutformningen till enkätprinciperna i föregående ämne (se ämne 6.1, Mätetal för kundnöjdhet).

**6. Läs kommentarer med en metod.** Verktyg för [stämningsanalys](https://en.wikipedia.org/wiki/Sentiment_analysis) kan sortera stora textmängder, och de misstolkar sarkasm, jargong och sammanhang. Behandla verktygets resultat som en första genomgång, låt en människa kontrollera ett stickprov varje månad och håll en kort lista över teman som du kodar för hand. Poängen med analysen är att hitta ämnen att prata om med användare, inte att producera ett poäng.

**7. Lägg till beteendesignaler från resan.** Instrumentera resorna användare bryr sig om, med deras vetskap: var börjar de, var hoppar de av och var ber de om hjälp? [Övervakning av verkliga användare](https://en.wikipedia.org/wiki/Real_user_monitoring) av sidladdningstider, fel och steg ger en vy som enkäter inte kan. Tala om för användare vad du samlar in, begränsa det till vad du behöver och aggregera det innan du delar det.

**8. Skydda små grupper och individer.** Upplevelsedata kan avslöja vem som har det svårt. Aggregera resultat, undertryck grupper under en överenskommen storlek och använd aldrig datan i prestationsbedömningar. Avgör vem som får se råa kommentarer och lagra dem därefter. I reglerade miljöer, kontrollera med integritetsspecialister innan du samlar in beteendedata.

### Använd avtalet

**9. Visa SLA och XLA sida vid sida.** På samma sida, visa operativ måluppfyllelse och upplevelsemåtten för varje tjänst. Parningen är poängen: ett grönt SLA med ett fallande upplevelsepoäng är en uppmaning till ett samtal, och ett grönt upplevelsepoäng med fallerande SLA:er förtjänar en titt på vad användare inte får veta.

**10. Håll en regelbunden upplevelsegranskning med användare.** Möt representanter för användargrupperna kvartalsvis, visa datan, fråga vad den betyder och kom överens om en eller två förbättringar att pröva. Ta med servicedesken och produktteamet, eftersom orsaken till en dålig upplevelse ofta finns i produkten, inte i supporten.

**11. Finansiera rättelserna.** Ett avtal som identifierar friktion och sedan lämnar den på plats lär användare att måtten är teater. Lägg de två eller tre främsta upplevelseproblemen i backlogen med ägare och datum och redovisa om dem vid nästa granskning. Se måtten för ständig förbättring senare i den här boken (se ämne 9.5, Mätetal för ständig förbättring).

**12. Revidera avtalet när tjänster och användare förändras.** Avveckla påståenden som inte längre spelar roll och lägg till nya. Logga ändringarna och markera dem i trenddiagram, som du skulle göra för vilken mätetalsdefinition som helst.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Upplevelsepoäng | Att enkätera bara nöjda användare; att tidsätta enkäten efter goda händelser; att omformulera påståendet så att det är lättare att hålla med om | Svarsfrekvens och svarandenas sammansättning; logg över stabil formulering; läs kommentarer |
| Stämningstrend | Att justera verktyget eller temalistan tills trenden stiger; att utesluta negativa kanaler | Mänsklig kontroll av ett månatligt stickprov; håll en fast kodningsguide och logga ändringar |
| Friktionshändelser per användare | Att omdefiniera händelser så att färre räknas; att avskräcka från upprepade kontakter genom att göra desken svår att nå | Kontaktvolym per kanal; andel övergivna kontakter vid servicedesken (se ämne 3.1, Mätetal för servicedesk) |
| Tid som förloras på it-problem | Att fråga på ett sätt som förankrar låga uppskattningar; att bara räkna större incidenter | Jämför självrapporterad tid med uppmätt degraderad tid; granskning av enkätformulering |
| Genomförandegrad för resa | Att definiera resan så snävt att misslyckande ligger utanför omfånget; att styra svåra fall till en annan kanal | Resedefinition i registret; andel hjälpkontakter och eskaleringar |
| XLA-måluppfyllelse | Att sätta mål som redan är nådda; att definiera en mycket liten uppsättning mål | Granska målsättningen med användare; visa måluppfyllelse med trend och målhistorik |
| Upplevelseglapp | Att välja de tjänster eller perioder som ser bäst ut; att ändra vilka SLA:er som jämförs | Fast jämförelseuppsättning överenskommen i förväg; visa alla tjänster |

En sund avläsning är en upplevelsebild som stämmer med kommentarerna och samtalet vid användargranskningen, en liten uppsättning mått som ändras långsamt och av skäl teamet kan förklara och en backlog av upplevelserättelser som blir kortare.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Enbart SLA | Tydligt, räknebart, avtalsmässigt | Missar det användare känner; kan vara grönt medan användare är missnöjda |
| Enbart XLA | Nära det användare värdesätter | Svårare att mäta och jämföra; svagt som grund för avtal med leverantörer |
| SLA med XLA | Ger båda vyerna och avslöjar glappet | Mer arbete; kräver förtroende och omdöme för att läsa oenigheter |
| Enkätbaserade upplevelsemått | Användarnas direkta röst | Svarsbias; börda för de svarande |
| Beteendemått | Ingen enkätbörda; objektiva | Kräver instrumentering och integritetsomsorg; visar vad som hände, inte varför |
| Ett enda upplevelseindex | Lätt rubrik | Döljer detaljer; lätt att manipulera och svårt att förklara |

Svaret är att använda XLA som ett tillägg, infört för några få tjänster där glappet mellan drift och upplevelse redan syns. Ersätt inte avtalsmässiga SLA:er med upplevelsemått som leverantörer inte kan styra. Håll de juridiska och kommersiella åtagandena i SLA:t och använd XLA för att driva förbättring och samtal.

## Frågor att diskutera med teamet

**1. Hur ser en bra dag ut för användare av vår viktigaste tjänst, med deras ord?**
Samla två eller tre användare, eller återanvänd nyliga intervjuer, och skriv ned deras påståenden. Facilitatorn bör motstå att omformulera dem i operativa termer. Jämför påståendena med det nuvarande SLA:t och fråga vilka påståenden det täcker och vilka det ignorerar. Glappen är kandidater för upplevelsemått.

**2. Var är våra gröna instrumentpaneler och våra användares berättelser oense?**
Be teamet om ett nyligt fall där en tjänst nådde sina mål och användare klagade. Följ fallet genom datan: vad mätte vi, och vad missade vi? Samtalet avslöjar ofta ett saknat steg, en överlämning eller en klocka som stoppade för tidigt. Registrera fallet som ett exempel för nästa granskning med användare.

**3. Vilka tre mått skulle vi använda för att veta om det här upplevelsepåståendet är sant?**
Välj ett påstående och välj ett mått från vad människor säger, ett från vad de gör och ett från vad systemet registrerar. Fråga vad vart och ett kan missa och hur vart och ett kan manipuleras. Enas om den minsta uppsättning som skulle övertyga en skeptisk användare.

**4. Vad samlar vi in om användare som de kanske inte förväntar sig, och skulle de vara bekväma med det?**
Lista datakällor för beteende och syftet med var och en. Be en användarrepresentant reagera. Facilitatorn bör behandla obehag som information om designen, inte som ett hinder. Besluta vad som ska sluta samlas in, vad som ska aggregeras och vem som får se rådatan.

**5. Vad skulle vi göra om upplevelsepoängen föll medan varje SLA förblev grönt?**
Repetera svaret. Vem tittar först, vad kontrollerar de och vem pratar de med? Avgör om teamet skulle lita på upplevelsepoängen eller leta efter sätt att avfärda det. Svaret visar hur allvarligt teamet tar avtalet.

**6. Vilka upplevelserättelser har vi lovat, och vad hände med dem?**
Gå igenom de två senaste granskningsmötena med användare. För varje åtagande, visa datum, ägare och utfall. Om listan är tom eller föråldrad, diskutera varför. Enas om en rättelse att leverera före nästa granskning och ett sätt att tala om för användare att det hände.

## Fyra perspektiv

### Produkt- och leveransteam

Produktteam håller mycket av orsaken till en dålig upplevelse: förvirrande skärmar, långsamma steg, otydliga fel. Upplevelsemått ger dem belägg från levande användning, och de matar förfining direkt. Team bör läsa kommentarsteman före varje planeringstillfälle och koppla resemått till backlogen. De bör inte behandla upplevelsepoängen som ett teammål. Det är information om tjänsten de delar med driften.

### Service- och driftteam

Driftteam ser friktionen först: upprepade kontakter, kringgåenden och arga uppringare. Upplevelsemått ger dem ett sätt att visa vad SLA:t döljer, och ett skäl att rätta orsaker i stället för att stänga ärenden snabbare. De bör hålla fast vid definitioner och urval, undvika att styra användare till kanaler som ser bättre ut och läsa de missnöjda kommentarerna i sin helhet (se ämne 3.1, Mätetal för servicedesk).

### Ledning och styrning

Ledare väljer om ett XLA är ett samtal eller en resultattavla. De bör fråga vad upplevelsedatan säger om var man ska investera, undvika att koppla lön till ett upplevelseindex och skydda integriteten hos personaldata. Styrningen bör be om definitionerna, urvalet och historiken över ändringar och bör behandla ett oförklarat hopp i ett upplevelsemått som ett skäl att kontrollera metoden.

### Kunder och användare

Användare är avtalets författare. De bör bjudas in att beskriva hur det ser ut när det är bra, få se resultaten och få veta vad som ändrats. De bör veta vad som samlas in om dem och varför, och ha ett sätt att säga nej. Användare som tillfrågas ofta och ser ingenting förbättras slutar svara, och tystnaden får datan att se bättre ut än verkligheten.

## I praktiken: ett exempel från tjänstehantering

Ett medelstort konsultföretag driver en intern it-tjänst för 1 800 medarbetare. Siffrorna nedan är illustrativa.

Den månatliga SLA-rapporten visar 99,8 procent tillgänglighet för samarbetsplattformen och 96 procent av incidenterna lösta inom målet. It-chefen är nöjd, men konsulter hos kunder fortsätter klaga på långsam inloggning. Servicechefen föreslår en XLA-pilot för samarbetsplattformen.

I intervjuer med 12 konsulter framträder tre påståenden: "Jag kan ansluta till ett kundsamtal inom två minuter efter att jag bestämt mig", "Jag behöver inte ringa it för att komma tillbaka in på mitt konto" och "när något går sönder vet jag vad som händer." Teamet väljer mått för vart och ett. För det första tar de pulsbetyget för påståendet och den uppmätta tiden från inloggningens start till att samtalet ansluts ur övervakningen av verkliga användare hos kunden, aggregerad per region. För det andra räknar de kontakter om lösenordsåterställning per aktiv användare och månad. För det tredje följer de andelen incidenter där statusmeddelandet uppdaterades inom 30 minuter och ställer pulsfrågan om det.

De första två månadernas data visar att mediantiden från inloggning till samtalsanslutning är bra i huvudkontorets region men lång i två andra, och att lösenordsåterställningskontakter per användare är tre gånger högre för personal på hanterade laptops än för andra. Upplevelsepoängen för det första påståendet är 3,1 av 5 mot 4,2 för kontorsbaserad personal. SLA:t är grönt för båda. Servicechefen tar fyndet till användargranskningen. Teamet kommer överens om två förbättringar: att justera konfigurationen för enkel inloggning för fjärrregioner och att ändra inställningarna för förnyelse av token på hanterade laptops. Tre månader senare faller mediantiden, återställningskontakterna per användare faller och upplevelsepoängen stiger till 3,8. Chefen går med på att behålla XLA för den här tjänsten, att lägga till det på ytterligare en och att inte sätta något numeriskt mål före nästa granskning.

## Agilitet, AI, automatisering och analys

### Agilitet

Kom överens om upplevelsemått med användare och se över dem när tjänsten utvecklas, med kontinuerligt intressentengagemang. Varningen är att ett upplevelsemål som leverantören satt ensam inte kommer att beskriva det användare känner.

### AI

AI-funktioner ändrar upplevelsen direkt, så ta med resor som använder dem och mät användarens resultat, inte modellens säkerhet. Para upplevelsepoäng med uppgiftsframgång och eskalering till en människa. Varningen är att en chatbot som känns trevlig medan den sviker uppgiften smickrar poängen.

### Automatisering

Samla in friktionshändelser och genomförandegrad för resor automatiskt, med samtycke och integritetsregler, och mät insamlingen på täckning. Varningen är att automatiska upplevelsedata om individer kan bli övervakning, så aggregera och minimera.

### Analys

Redovisa upplevelsepoängen med operativa mått på samma sida, och glappet mellan dem. Beslutet detta ger underlag för är vilken tjänst som ska förbättras trots att dess SLA är grönt. Varningen är att glappet kan vara en mätartefakt, så kontrollera urvalet.

## Branschperspektiv

**Startup.** Nära kontakt med användare gör intervjuer lätta. Motstå att bygga ett ramverk: skriv tre upplevelsepåståenden för kärntjänsten, fråga användare om dem varje månad och lägg till ett beteendemått. Formella avtal kommer senare.

**Småföretag.** Personalen är liten och delar ofta chef med it. Använd samtal och en mycket kort månatlig puls. Var försiktig med beteendedata, eftersom små grupper lätt kan identifieras.

**Storföretag.** Skala ger många användargrupper och leverantörer. Definiera upplevelsepåståenden per tjänst och persona, håll instrumentpaneler per tjänst och undvik ett företagsövergripande upplevelseindex. Anpassa XLA till leverantörsavtal så att leverantörer bidrar med data utan att hållas till mått de inte kan påverka.

**Offentlig sektor.** Tjänster möter ofta allmänheten såväl som personal, med skyldigheter kring tillgänglighet, klarspråk och lika tillgång. Ta med tillgänglighet i upplevelsepåståendena och måtten, testa med användare som förlitar sig på hjälpmedelsteknik och skydda personuppgifter i enlighet med lagen. Där offentlig rapportering krävs, redovisa metoder med resultaten (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaden är måttlig. Användarintervjuer tar några dagar per tjänst. En månatlig pulsenkät behöver ett enkätverktyg, som många organisationer redan har. Beteendemått behöver viss instrumentering, som kan komma från befintlig övervakning och portalanalys. Granskningen med användare tar några timmar varje kvartal. Att koda kommentarer tar en till två timmar varje månad.

Avkastningen ligger i att hitta problem som SLA:er inte visar, till exempel långsamma resor i specifika regioner eller på specifika enheter, och i att rikta förbättringspengar mot det användare värdesätter. Tid som förloras på it-problem kan omvandlas till en kostnad med dina egna personalkostnader om du mäter noggrant. Undvik generiska påståenden om produktivitetsvinster. Bygg caset från din egen baslinje: förlorad tid per användare, friktionshändelser per användare och upprepade kontakter, före och efter en rättelse. Räkna också den undvikna kostnaden för kringgåenden, till exempel skuggverktyg som införts därför att den officiella tjänsten är besvärlig.

## Antimönster och fallgropar

- **Att ersätta SLA:er med XLA:er.** Avtal behöver räknebara åtaganden. Behåll båda och visa dem tillsammans.
- **Ett sammansatt upplevelseindex.** Det döljer orsaken och inbjuder till manipulation. Visa några få separata mått.
- **Att definiera upplevelse utan användare.** Påståenden skrivna i ett mötesrum beskriver leverantörens syn. Intervjua och testa med användare.
- **Att enkätera tills människor slutar svara.** Håll pulser korta och rotera ämnen.
- **Att samla in beteendedata utan att säga det till någon.** Det bryter förtroende och kan bryta mot lagen. Var öppen om vad som samlas in och varför.
- **Att använda upplevelsedata i prestationsbedömningar.** Det förvandlar ett lärandeverktyg till övervakning och förstör ärlig rapportering.
- **Att rätta måttet, inte orsaken.** Omdirigera inte användare till en vänligare kanal för att förbättra ett tal. Rätta resan.
- **Att lämna fynden på en bild.** Finansiera och följ upplevelserättelserna.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Upplevelsemål | Implicita eller frånvarande | Skrivna av leverantören för vissa tjänster | Påståenden skrivna med användare för nyckeltjänster | Påståenden granskas och revideras varje kvartal med användargrupper | Delade över tjänster och leverantörer, ägda gemensamt med användare |
| Mätning | Enstaka enkäter | Pulsenkät för en tjänst | Trevinkelmått (säga, göra, system) för varje påstående | Mått följs över tid, skyddas för små grupper och jämförs med SLA:er | Data kombineras över leverantörer, med användarstyrda integritetsval |
| Åtgärd | Klagomål hanteras ett i taget | Rättelser görs ad hoc | De främsta upplevelseproblemen i backlogen med ägare | Rättelser finansieras, följs och redovisas tillbaka till användare | Förbättring samordnas över team, leverantörer och användare, med lärande delat |

## Checklista

- [ ] Varje XLA-tjänst har tre till fem upplevelsepåståenden skrivna med användare.
- [ ] Varje påstående har mått från minst två vinklar (säga, göra, system).
- [ ] SLA- och upplevelsemått visas på samma sida för varje tjänst.
- [ ] Pulsenkäter är korta, regelbundna och stabila i formulering.
- [ ] Kommentarer kodas efter en stabil guide och en människa kontrollerar ett månatligt stickprov.
- [ ] Grupper under en överenskommen storlek undertrycks i rapporter.
- [ ] Insamlad beteendedata redovisas för användare och begränsas till behov.
- [ ] Inget upplevelsemått används i individuella prestationsbedömningar.
- [ ] En kvartalsvis granskning med användarrepresentanter finns i kalendern.
- [ ] De främsta upplevelseproblemen har ägare och datum i backlogen.

## AI-prompter

**Skriv utkast till upplevelsepåståenden utifrån intervjuanteckningar.**

```text
Here are anonymized notes from [number] interviews with users of [service] in
[type of organization]: [paste notes]. Propose three to five experience
statements in the first person, each tied to one outcome the users care about,
using their wording where possible. For each, suggest one measure from what
people say, one from what they do, and one from what the system records. Do not
invent figures. List your assumptions and anything you could not tell from the
notes.
```

**Hitta glappet mellan SLA och upplevelse.**

```text
For [service] in [period], our SLA results were: [paste results]. Our
experience data (pulse scores, comment themes, friction counts) were: [paste
data]. Describe where the two disagree, offer three possible explanations for
each disagreement, and suggest what to check next. Do not assume a cause the
data cannot support. List your assumptions and what additional data would help.
```

**Granska ett integritetstillvägagångssätt för beteendemått.**

```text
We plan to collect these behavioral signals for experience measurement:
[list]. Users are [staff, public, or both] in [jurisdiction or sector]. Review
the plan for risks to privacy, trust, and fairness, and suggest minimum
aggregation, retention, and disclosure practices. Flag anything I should take
to a privacy specialist. Do not give legal conclusions. List your assumptions.
```

**Förbered en kvartalsvis upplevelsegranskning med användare.**

```text
Draft an agenda and a one-page summary for a quarterly experience review of
[service] with representatives of [user groups]. Include SLA and experience
results side by side, the top comment themes, last quarter's commitments and
their status, and two questions for users. The data: [paste data]. Keep the
tone plain and avoid jargon. List your assumptions and mark any claim that
needs checking.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta skyddsräcket för ett upplevelsemått innan du lägger till det på en instrumentpanel.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för XLA-mått bär sin manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- Ett XLA lägger till upplevelsemål och mått till operativa mål, och det kompletterar SLA:t.
- Skriv upplevelsepåståenden med användare, med deras ord, och knyt vart och ett till mått från vad människor säger, gör och vad systemet registrerar.
- Visa SLA- och upplevelseresultat tillsammans och behandla oenighet som en uppmaning att undersöka.
- Skydda användare: redovisa vad du samlar in, aggregera det, undertryck små grupper och håll det utanför prestationsbedömningar.
- Undvik ett enda upplevelseindex och undvik hårda mål innan måtten är förstådda.
- Finansiera de rättelser datan avslöjar och tala om för användare vad som ändrats.

## Referenser och vidare läsning

1. ISO 9241-210, *Ergonomics of human-system interaction: Human-centred design for interactive systems*, International Organization for Standardization.
2. Norman, D. A., *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
5. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
6. Wikipedia, [User experience](https://en.wikipedia.org/wiki/User_experience).
7. Wikipedia, [Customer experience](https://en.wikipedia.org/wiki/Customer_experience).
8. Wikipedia, [Usability](https://en.wikipedia.org/wiki/Usability).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Human-centered design](https://en.wikipedia.org/wiki/Human-centered_design).
11. Wikipedia, [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis).
12. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
