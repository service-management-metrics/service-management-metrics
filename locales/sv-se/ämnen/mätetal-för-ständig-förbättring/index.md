# Mätetal för ständig förbättring

**Förbättring är en vana att lägga märke till, pröva och kontrollera, så mät om idéer blir ändringar, om ändringar kontrolleras för effekt och om samma problem fortsätter att återkomma, och håll arbetet i händerna på de människor som gör det.**

## Översikt och motiv

En av det agila manifestets principer säger att teamet med jämna mellanrum reflekterar över hur det kan bli mer effektivt och sedan finjusterar och anpassar sitt beteende därefter. ITIL uttrycker samma övertygelse i sina vägledande principer och sin praktik ständig förbättring: tjänster och sättet de drivs på bör förbättras hela tiden, i små steg, utifrån belägg. Båda ber om samma sak, nämligen en stående vana av förbättring och inte ett enstaka program.

De flesta organisationer tror att de gör detta. Många har ett möte i stil med en retrospektiv som genererar en lista med åtgärder, ett register över förbättringsidéer eller en årlig förbättringsplan. Det vanliga misslyckandet är att listan växer och lite händer. Åtgärder överenskoms på ett möte och glöms. Förbättringar görs och kontrolleras aldrig, så ingen vet om de hjälpte. Samma problem återkommer under ett annat namn. Mått på ständig förbättring är sättet att skilja en organisation som förbättras från en som bara talar om det.

[Ständig förbättringsprocess](https://en.wikipedia.org/wiki/Continual_improvement_process) har djupa rötter i kvalitetsledning. Cykeln [Plan-Do-Check-Act](https://en.wikipedia.org/wiki/PDCA), förknippad med W. Edwards Deming och Walter Shewhart, beskriver förbättring som upprepade små experiment: planera en ändring, pröva den, kontrollera resultatet och agera på det du lär dig. [Kaizen](https://en.wikipedia.org/wiki/Kaizen) är den japanska termen för kontinuerlig förbättring av arbetssätt, med allas delaktighet. Båda kommer från [lean-tillverkning](https://en.wikipedia.org/wiki/Lean_manufacturing) och Toyotas produktionssystem, och båda är nu standardvokabulär i tjänste- och programvaruarbete. ITIL 4 erbjuder en modell för ständig förbättring vars steg frågar vad visionen är, var du är nu, var du vill vara, hur du ska ta dig dit, att vidta åtgärd, om du kom dit och hur du håller upp farten. Den är en uppmaning till samtal, inte en procedur att följa mekaniskt.

Några idéer hjälper.

- **Förbättra begränsningen.** [Teorin om begränsningar](https://en.wikipedia.org/wiki/Theory_of_constraints), utvecklad av Eliyahu Goldratt, säger att ett systems genomflöde begränsas av dess långsammaste del, så förbättringar någon annanstans tillför lite. Hitta begränsningen med flödesmåtten från tidigare i boken och förbättra den först (se ämne 2.3, Pågående arbete och köteori).
- **Hitta orsaker, inte symptom.** [Grundorsaksanalys](https://en.wikipedia.org/wiki/Root_cause_analysis) letar efter de underliggande orsakerna till ett problem så att en rättelse av dem stoppar dess återkomst. Överanvändning av enkla metoder kan vilseleda när problem har flera orsaker, så undersök bidragande faktorer.
- **Ifrågasätt antagandena.** [Dubbelkretslärande](https://en.wikipedia.org/wiki/Double-loop_learning), en term från Chris Argyris och Donald Schön, går bortom att rätta handlingen för att granska de föreställningar och regler som ledde till den. Team som bara rättar symptom (enkelkretslärande) tenderar att möta samma problem igen.
- **Förbättring behöver kapacitet.** Ett team på sin yttersta gräns har inget utrymme att förbättra. Skyddad kapacitet är en förutsättning, och en takt som kan upprätthållas är en del av det som gör förbättring möjlig (se ämne 9.2, Mätetal för nöjdhet och välbefinnande).

Förbättringsmått inbjuder till egen manipulation. Om antalet slutförda åtgärder är ett mål kommer team överens om triviala åtgärder. Om besparingar från förbättringar är ett mål blåses påståenden upp. Om antalet inskickade idéer är ett mål svämmar idéer över och ingen agerar på dem. Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller: mät om förbättringar fungerar, och inte hur upptaget förbättringsprogrammet ser ut (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Nyckelprinciper

- **Förbättring hör till de människor som gör arbetet.** De ser problemen och de möjliga rättelserna först.
- **Arbeta i små steg och kontrollera varje.** Små experiment minskar risk och påskyndar lärande.
- **Mät uppföljning och effekt, inte aktivitet.** Slutförda åtgärder och bekräftade effekter spelar större roll än genererade idéer.
- **Förbättra begränsningen först.** Insats bort från flaskhalsen tillför lite.
- **Rätta orsaker.** Leta efter bidragande faktorer och ifrågasätt antagandena bakom dem.
- **Skydda kapacitet för förbättring.** Det sker inte på ledig tid som inte finns.
- **Fira lärande, inklusive från misslyckade experiment.** En prövad idé som inte fungerade är information.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Uppföljningsgrad för åtgärder | Andel förbättringsåtgärder överenskomna i granskningar som slutfördes senast sitt överenskomna datum | åtgärder slutförda senast datum / åtgärder som förföll under perioden | procent | Förbättringsregister eller teamets backlog | Ständig förbättring | Reflektionsåtgärder levererade | Månadsvis |
| Förbättringsbacklogens ålder | Ålder på öppna förbättringsposter, med uppmärksamhet på de äldsta | median och 85:e percentilens ålder i dagar på öppna poster; ålder på den äldsta | dagar | Förbättringsregister | Ständig förbättring | Backlogens ålder | Månadsvis |
| Grad av effektkontroll | Andel slutförda förbättringar vars effekt kontrollerades mot en baslinje | slutförda förbättringar med en registrerad kontroll före och efter / slutförda förbättringar | procent | Förbättringsregister med baslinje- och resultatfält | Ständig förbättring; mätning och rapportering | Lärande av experiment | Kvartalsvis |
| Tid från idé till försök | Tid från att en förbättringsidé lyfts till det första försöket i det verkliga arbetet | median och 85:e percentil av dagar från lyft till första försök | dagar | Förbättringsregister | Ständig förbättring | Snabb återkoppling på ändringar | Månadsvis |
| Andel idéer från frontlinjen | Andel förbättringsidéer lyfta av människor som gör arbetet, räknat på teamnivå | idéer lyfta av teammedlemmar som gör arbetet / lyfta idéer | procent | Förbättringsregister | Ständig förbättring | Självorganiserande team | Kvartalsvis |
| Upprepningsgrad för problem | Andel problem som återkommer efter en förbättring avsedd att ta bort deras orsak | problem som återkommer inom en angiven period efter att en relaterad förbättring stängts / förbättringar stängda med en relaterad orsak | procent | Incident-, problem- och förbättringsposter länkade efter orsak | Problemhantering; ständig förbättring | Undkommet fel efter en rättelse | Kvartalsvis |
| Andel kapacitet för förbättring | Andel av teamets kapacitet som läggs på förbättringsarbete | kapacitet eller slutförda poster taggade som förbättring / total kapacitet eller slutförda poster | procent | Arbetstyper i arbetsverktyget | Ständig förbättring; kapacitets- och prestandahantering | Tid för reflektion och teknisk förträfflighet | Månadsvis |

Definiera "förbättringspost" i registret och håll den skild från vanligt backlogarbete och från korrigerande reparationer. Uppföljningsklockan startar när åtgärden överenskoms med en ägare och ett datum. En effektkontroll kräver en baslinje registrerad före ändringen och en definierad indikator, och resultatet kan vara "ingen effekt" eller "kan inte avgöras". Upprepningsgrad för problem beror på en registrerad orsak, och matchningsregeln skrivs i registret. Alla mått beskriver team och systemet, inte individer.

## Rekommendationer

### Gör förbättring synlig och ägd

**1. Håll en synlig förbättringslista per team.** Placera förbättringsposter där teamet redan tittar, till exempel på sin tavla eller i sin backlog, och tagga dem. Varje post har en ägare, ett angivet problem, en förväntad effekt, en indikator och ett datum. En lista som lever i ett separat verktyg eller ett dokument ingen öppnar förfaller. Visa de äldsta posterna så att listan inte kan gömma sig.

**2. Håll regelbunden, kort reflektion.** Med jämn rytm frågar teamet vad som går bra, vad som kommer i vägen och vad man ska pröva härnäst. Håll det kort och specifikt och avsluta med ett litet antal åtgärder som har ägare. Om ditt team väljer att använda ett namngivet format för detta, till exempel en retrospektiv, är det teamets val. Principen är den regelbundna vanan.

**3. Kom överens om färre åtgärder och slutför dem.** Två eller tre åtgärder som slutförs lär mer än ett dussin som inte gör det. Kontrollera uppföljningsgraden. När åtgärder upprepade gånger glider, fråga varför: oklart ägarskap, ingen kapacitet eller åtgärder som var för stora. Dela stora i små steg.

**4. Skydda kapacitet.** Reservera en andel av kapaciteten för förbättring och planera den som vilket annat arbete som helst (se ämne 2.5, Mätetal för leveransprognoser och planering). När teamet är överbelastat, minska intaget av nytt arbete i stället för att ställa in förbättring, eftersom förbättring ofta är det som minskar överbelastningen. Följ den andel som används.

### Hitta det som spelar roll

**5. Leta efter begränsningen.** Använd flödesdata för att hitta var arbete väntar och vad som begränsar genomflödet. Förbättringar vid begränsningen höjer hela systemets utdata. Förbättringar någon annanstans kanske bara flyttar högen av arbete. Tillämpa samma syn på incidenthantering, ändringsgodkännande och uppfyllande av förfrågningar.

**6. Använd belägg för att välja.** Välj förbättringar utifrån data och utifrån människorna närmast smärtan: upprepade incidenter, långa väntor, omarbete, användarklagomål, hinderlistor. Länka varje förbättring till ett registrerat problem. Det knyter förbättringsregistret till problemhantering (se ämne 4.1, Mätetal för problemhantering).

**7. Leta efter orsaker och bidragande faktorer.** För återkommande problem, fråga varför mer än en gång och leta efter förhållanden såväl som utlösare. Var försiktig med att stanna vid den första rimliga orsaken, eller vid en person. Ifrågasätt antaganden: varför arbetar vi så här, och behövs regeln fortfarande? Det är där dubbelkretslärande lönar sig.

### Pröva smått, kontrollera sedan

**8. Kör små experiment med en baslinje.** Ange ändringen, den förväntade effekten och indikatorn. Registrera baslinjen före ändringen. Pröva den i liten skala under en kort period och jämför sedan. Cykeln Plan-Do-Check-Act är en enkel ram. Ju kortare tid från idé till försök, desto snabbare lärande.

**9. Kontrollera effekten och registrera den ärligt.** Efter en ändring, jämför indikatorn med baslinjen och med vad annat som ändrades. Registrera om effekten sågs, inte sågs eller var oklar. Team som aldrig hittar "ingen effekt" kontrollerar förmodligen inte noggrant (se ämne 6.5, Värdeförverkligande och affärsresultat).

**10. Behåll det som fungerar och släpp det som inte gör det.** Sprid förbättringar som fungerar till andra team där de passar och avveckla ändringar som tillförde kostnad utan nytta. Se över äldre ändringar, eftersom förhållanden förändras. Standarder bör utvecklas allteftersom teamet lär sig.

### Håll vanan levande

**11. Gör det tryggt att föreslå och att stoppa.** Människor lyfter idéer när tidigare idéer hördes och agerades på. De tiger när idéer försvinner eller medför extra arbete för förslagsställaren. Svara på varje idé, även om svaret är "inte nu", med ett skäl. Låt team stoppa förbättringar som inte fungerar.

**12. Gör inte förbättring till ett mål.** Sätt inte mål för antalet idéer, antalet stängda åtgärder eller påstådda besparingar. Redovisa uppföljningen, effektkontrollerna, upprepningsgraden och några berättelser. Jämför varje team med sitt eget förflutna och dela goda idéer mellan team utan att rangordna dem.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Uppföljningsgrad för åtgärder | Att komma överens om triviala åtgärder; att flytta förfallodatum; att stänga utan att göra | Granska åtgärdernas storlek och värde; datumändringar loggade; grad av effektkontroll |
| Förbättringsbacklogens ålder | Att stänga gamla poster som "görs inte" utan ett beslut; att dela poster för att nollställa åldern | Registrera skäl för stängning; följ poster stängda utan åtgärd; granska de äldsta |
| Grad av effektkontroll | Att registrera en kontroll utan baslinje; att bara kontrollera framgångar | Baslinje daterad före ändringen; ta med inga och negativa resultat |
| Tid från idé till försök | Att kalla en plan för ett försök; att pröva triviala varianter | Definiera ett försök som en ändring i det verkliga arbetet; titta på betydelsen av prövade idéer |
| Andel idéer från frontlinjen | Chefer som lägger idéer under personalens namn; obligatoriska idékvoter | Idéer per upphovsperson registrerade på teamnivå; inga kvoter; fråga teamet |
| Upprepningsgrad för problem | Att registrera olika orsaker för samma problem; att stänga den tidigare posten under en annan typ | Matcha efter orsak med en registrerad regel; granskning av någon utanför teamet |
| Andel kapacitet för förbättring | Att tagga vanligt arbete som förbättring; att schemalägga tid som sedan används för leverans | Stickprova poster för typ; jämför med faktiskt spenderad tid |

En sund avläsning är en kort lista med åtgärder som slutförs, idéer som når försök inom dagar eller veckor, effekter som kontrolleras och ibland gör besviken, fallande upprepade problem och skyddad kapacitet som används.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Stora förbättringsprogram | Synliga; kan ta itu med stora frågor | Långsamma; frånkopplade från det dagliga arbetet |
| Små kontinuerliga experiment | Snabbt lärande, låg risk | Kan missa strukturella problem |
| Centralt förbättringsteam | Kunskap och konsekvens | Långt från arbetet; idéer stannar av |
| Teamägd förbättring | Relevant och motiverad | Varierande kvalitet; kräver stöd |
| Idéprogram med belöningar | Genererar volym | Kvoter och manipulation; låg kvalitet |
| Beläggsbaserat urval | Fokuserar på verkliga problem | Kräver data och tid |
| Formella effektkontroller | Ärligt lärande | Insats; kan kännas byråkratiskt om det är tungt |
| Inga kontroller | Snabbt | Inget lärande om vad som fungerar |

Svaret är att hålla förbättring nära teamen, i små experiment med lätta effektkontroller, stödda av några få människor som hjälper till med data och metod och av ledare som skyddar kapacitet och lyssnar på resultaten.

## Frågor att diskutera med teamet

**1. Vilken förbättring kom vi överens om vid vår senaste granskning, och hände den?**
Titta på åtgärderna. För var och en, fråga om den slutfördes, övergavs eller glömdes och varför. Facilitatorn bör notera skälen. Enas om hur många åtgärder teamet verkligen kan slutföra och skär ned nästa lista till det.

**2. Vilken ändring vi nyligen gjorde vet vi hjälpte, och hur vet vi det?**
Välj en nylig ändring och leta efter baslinjen och resultatet. Om det inte finns något, diskutera hur man kontrollerar nästa gång. Besluta om en enkel indikator för nästa experiment.

**3. Vad fortsätter att komma tillbaka oavsett hur många gånger vi rättar det?**
Lista återkommande problem. För ett, fråga varför det återkommer och vilket antagande som ligger bakom det nuvarande angreppssättet. Fundera på om rättelsen behandlar ett symptom. Välj ett återkommande problem för en djupare titt.

**4. Var väntar arbete längst, och vad är begränsningen?**
Använd flödesdata. Fråga om förbättringarna teamet arbetar med berör begränsningen. Om inte, diskutera om fokus ska ändras.

**5. Hur mycket av vår vecka går till förbättring, och vad skyddar den?**
Jämför planen med verkligheten. Diskutera vad som tar tiden. Enas om en regel för att skydda en liten andel och vad som ska skäras bort om teamet är överbelastat.

**6. Vad hände med den senaste idén någon föreslog, och hur fick de veta det?**
Följ en idé. Besvarades den, prövades den eller gick den förlorad? Diskutera hur man ser till att varje idé får ett svar och ett skäl.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam är den främsta källan till förbättringsidéer och de bästa domarna om de fungerar. De bör hålla en synlig lista, slutföra några få åtgärder varje cykel, kontrollera effekter och dela vad de lär sig. De behöver skyddad kapacitet och ledare som svarar.

### Service- och driftteam

Driftteam ser upprepade incidenter, långsamma godkännanden och manuellt rutinarbete varje dag. De bör länka förbättringar till registrerade problem, följa upprepade problem och avsätta tid för rättelser som minskar deras egen belastning. Deras återkoppling visar om förbättringar når användaren.

### Ledning och styrning

Ledare skapar förhållandena: skyddad kapacitet, trygghet att föreslå och att stoppa och uppmärksamhet på resultat. De bör be om uppföljning och effektkontroller, acceptera ärliga fynd om "ingen effekt", undvika kvoter och finansiera förbättringar som behöver investering. Styrningen bör titta på förbättringsregistret över team efter mönster som behöver strukturell åtgärd.

### Kunder och användare

Användare har nytta av tjänster som fortsätter bli bättre, och de är en rik källa till idéer. De bör tillfrågas, få veta vad som ändrades och bjudas in att kontrollera effekten. Upprepade klagomål om samma fråga är en signal att förbättring inte når orsaken.

## I praktiken: ett exempel från tjänstehantering

En nationell skattemyndighets grupp för digitala tjänster driver en deklarationsportal, ett betalningssystem och en kontaktcenterplattform med åtta team. Varje team håller en förbättringslista, och gruppen redovisar antalet slutförda förbättringar varje kvartal. Siffrorna nedan är illustrativa.

Chefen för tjänsteförbättring märker att det redovisade antalet stiger medan samma smärtpunkter kvarstår. Hon granskar listorna. Över gruppen är 212 förbättringsposter öppna, med en medianålder på 7 månader och den äldsta på 26 månader. Av åtgärderna som överenskoms vid förra kvartalets granskningar slutfördes 38 procent senast sitt datum. Av de 64 förbättringar som slutfördes förra året hade bara 9 en registrerad baslinje och ett resultat, en grad av effektkontroll på 14 procent, och 3 av de 9 visade ingen effekt. Upprepade problem är vanliga: av 25 incidenter länkade till förbättringar avsedda att ta bort deras orsak återkom 11 inom sex månader, en upprepningsgrad på 44 procent. Förbättringsarbete tar ungefär 4 procent av kapaciteten.

Gruppen kommer överens om fyra ändringar med teamen. Varje team trimmar sin lista till de poster det kan ta itu med de närmaste två månaderna och anger varför det parkerar eller stänger resten. Team kommer överens om högst tre åtgärder åt gången, med namngivna ägare. För varje förbättring registreras en baslinje och en indikator före ändringen, och resultatet registreras efteråt, inklusive "ingen effekt". En kvartalsvis granskning tittar på de återkommande problemen över team och väljer två för en djupare orsaksanalys, där kontaktcentret och betalningsteamen undersöker en gemensam orsak tillsammans. Varje team reserverar 10 procent av kapaciteten för förbättring, skyddat av en regel att inställning kräver teamchefens medgivande och en loggpost. Rapporten till ledare ändras från antalet slutförda förbättringar till uppföljning, effektkontroller och upprepade problem.

Efter två kvartal faller öppna poster till 74 med en medianålder på 2 månader. Uppföljningen stiger till 81 procent, graden av effektkontroll till 70 procent, där 9 av 36 kontrollerade förbättringar visar ingen effekt och släpps. Upprepningsgraden för problem faller till 20 procent, och tid från idé till försök har en median på 9 dagar. Biträdande direktören ber om ett mål på 100 slutförda förbättringar per kvartal. Chefen för tjänsteförbättring förklarar att antalet var skälet till att de tidigare talen vilseledde och föreslår att följa uppföljning, effekt och upprepningsgrad. Beslutet registreras, och ett teams begäran att köra ett fyra veckors experiment på sin godkännandeprocess beviljas.

## Agilitet, AI, automatisering och analys

### Agilitet

Håll förbättring i händerna på de människor som gör arbetet och granska åtgärder i regelbunden rytm. Varningen är att ett mål för antalet förbättringar uppmuntrar triviala.

### AI

AI kan föreslå förbättringar utifrån ärenden och incidenter. Följ andelen förslag som ett team prövade och resultatet av effektkontrollen. Varningen är att en AI-genererad backlog av idéer kan överbelasta teamet, så begränsa pågående arbete.

### Automatisering

Automatisera påminnelser och spårning av förbättringsåtgärder och mät graden av effektkontroll. Varningen är att automatisering som tjatar utan överenskommet ägarskap ignoreras.

### Analys

Redovisa grad av effektkontroll och upprepningsgrad för problem med antal. Beslutet detta ger underlag för är vilka förbättringar som fungerade. Varningen är att effekter är svåra att tillskriva, så beskriv osäkerheten.

## Branschperspektiv

**Startup.** Förbättring sker ständigt och informellt. Håll en kort lista, skriv ned förväntade effekter och kontrollera dem och skydda en liten del av tiden. Undvik tung process och bevaka att förbättring inte helt trängs ut av tillväxt.

**Småföretag.** En eller två personer gör allt, och förbättring konkurrerar med brandbekämpning. Välj ett återkommande problem varje kvartal, rätta dess orsak och kontrollera effekten. Fråga användare vad som irriterar dem och agera på en sak.

**Storföretag.** Skala gör förbättring ojämn och idéer svåra att dela. Tillhandahåll ett gemensamt registerformat och lätt coachning, låt team äga sina listor och använd ett forum över team för att sprida det som fungerar och för att ta itu med delade begränsningar. Undvik centrala kvoter.

**Offentlig sektor.** Förbättring kan begränsas av upphandling, lagstiftning och godkännandekedjor och granskas offentligt. Dokumentera experiment och deras resultat, involvera användare i att välja och kontrollera förbättringar och redovisa ärligt om effekter, inklusive de som inte fungerade. Leta efter förbättringar som tar bort börda från medborgare (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna är skyddad kapacitet, som är den främsta kostnaden, insatsen att registrera baslinjer och resultat och en del coachning eller facilitering. Verktyg kan vara så enkla som teamets befintliga tavla.

Avkastningen är färre upprepade problem, lägre rutinarbete, kortare väntor och bättre moral i team som ser sina idéer bli förändring. Bygg caset ur din egen data: kostnaden för återkommande incidenter och andelen som tagits bort av förbättringar, tid som sparats av förbättringar med kontrollerade effekter och kostnaden för förbättringar som gjordes och inte fungerade, något som kontroller nu förhindrar att man upprepar. Undvik att citera publicerad avkastning på förbättringsprogram om du inte kan spåra deras källa och metod. Räkna också kapacitetens alternativkostnad (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att räkna slutförda förbättringar.** Team kommer överens om triviala ändringar. Mät uppföljning och effekt.
- **Idékvoter.** De genererar volym och brus. Svara på de idéer som kommer.
- **Inga baslinjer.** Ingen vet om något hjälpte. Registrera före och efter.
- **Bara framgångar registrerade.** Lärande av misslyckanden går förlorat. Registrera inga-resultat.
- **Långa listor utan beskärning.** Listan förlorar trovärdighet. Trimma till vad teamet kommer att göra.
- **Förbättring på ledig tid.** Det finns ingen. Skydda kapacitet.
- **Att rätta symptom.** Problemet återkommer. Fråga varför mer än en gång och ifrågasätt antaganden.
- **Förbättring av ett avlägset team.** Idéer stannar av. Håll det hos de människor som gör arbetet.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Vana och ägarskap | Förbättring är enstaka | Reflektion sker; åtgärder går ofta förlorade | Synlig teamlista med ägare; litet antal åtgärder slutförs | Uppföljning och tid från idé till försök hanteras; kapacitet skyddas | Förbättring är rutin och delas över team, leverantörer och användare |
| Belägg och effekt | Åsikter | Vissa mått efter ändringar | Baslinje och resultat registreras för varje förbättring | Effektkontroller inkluderar inga-resultat; upprepade problem följs efter orsak | Lärande på portföljnivå styr var man förbättrar härnäst, med partner |
| Djup | Rättelser av symptom | Viss orsaksanalys | Orsaksanalys för återkommande problem | Begränsningar identifieras ur flödesdata; antaganden ifrågasätts | Systemiska förbättringar över värdeströmmen, med delad styrning |

## Checklista

- [ ] Varje team har en synlig förbättringslista med ägare, förväntade effekter och datum.
- [ ] Regelbunden, kort reflektion avslutas med ett litet antal ägda åtgärder.
- [ ] Uppföljning av åtgärder och åldern på de äldsta posterna granskas månadsvis.
- [ ] Kapacitet för förbättring är planerad, skyddad och följd.
- [ ] Förbättringar är länkade till registrerade problem eller belägg.
- [ ] En baslinje och en indikator registreras före varje ändring.
- [ ] Effekter kontrolleras och registreras, inklusive ingen effekt.
- [ ] Upprepade problem följs efter orsak efter förbättringar.
- [ ] Varje idé får ett svar med ett skäl.
- [ ] Det finns inga kvoter eller mål för idéer, åtgärder eller besparingar.

## AI-prompter

**Välj förbättringar utifrån belägg.**

```text
Here are our recurring problems and obstacles with rough counts and impact:
[paste]. Here is our flow data on where work waits: [paste]. Suggest which two
or three improvements are most likely to matter, why, and what evidence would
confirm or contradict that. Recommend a small experiment for each, with a
baseline and an indicator. Do not invent figures. List your assumptions.
```

**Utforma ett litet experiment.**

```text
We want to try [change] to address [problem] in [team and process]. Design a
small experiment: the expected effect, the baseline to record now, the
indicator and how to measure it, the trial period, how to tell whether other
changes confused the result, and what we will do if there is no effect. Keep it
light. List your assumptions and risks.
```

**Granska en förbättringslista.**

```text
Here is our improvement list with age, owner, and expected effect for each item:
[paste]. Identify items that are too vague, too large, or stale, suggest a
shorter list the team could finish in two months, and propose a note to explain
the items we are parking and why. Do not judge individuals. List your
assumptions.
```

**Analysera ett återkommande problem.**

```text
Problem: [describe]. Past fixes and when it recurred: [paste]. Suggest
contributing factors beyond the first plausible cause, assumptions to question
(double-loop learning), and a few ways to test each hypothesis cheaply. Do not
assume a single root cause. List your assumptions and questions for the team.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett förbättringsmått.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för förbättringsmått mäter uppföljning och effekt, med sin manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- Håll en synlig förbättringslista per team, med några få ägda åtgärder åt gången, och slutför dem.
- Registrera en baslinje före varje ändring, kontrollera effekten efteråt och registrera inga-resultat.
- Följ uppföljning, effektkontroller, upprepade problem och åldern på de äldsta posterna.
- Förbättra begränsningen först och leta efter orsaker och antagandena bakom dem.
- Skydda kapacitet för förbättring inom en hållbar takt.
- Sätt inte kvoter för idéer, åtgärder eller besparingar.

## Referenser och vidare läsning

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Continual Improvement*, TSO, 2020.
2. Deming, W. E., *Out of the Crisis*, MIT Center for Advanced Engineering Study, 1982 (MIT Press edition, 2000).
3. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
4. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
5. Argyris, C., "Teaching smart people how to learn," *Harvard Business Review*, 69(3), 1991.
6. Rother, M., *Toyota Kata: Managing People for Improvement, Adaptiveness, and Superior Results*, McGraw-Hill, 2009.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
9. Wikipedia, [PDCA](https://en.wikipedia.org/wiki/PDCA).
10. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
11. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
12. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Double-loop learning](https://en.wikipedia.org/wiki/Double-loop_learning).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
