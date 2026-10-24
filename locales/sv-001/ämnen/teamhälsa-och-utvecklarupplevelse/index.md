# Teamhälsa och utvecklarupplevelse

**Team gör sitt bästa arbete när återkopplingen är snabb, belastningen på sinnet är hanterbar och de kan hitta långa sammanhängande stunder av fokus, så mät de förhållandena tillsammans med teamet, ta bort hindren de avslöjar och använd aldrig talen för att rangordna människorna.**

## Översikt och motiv

Det agila manifestets principer ber oss bygga projekt kring motiverade individer, ge dem den miljö och det stöd de behöver och lita på att de får jobbet gjort. De ber också att sponsorer, utvecklare och användare ska kunna hålla en jämn takt på obestämd tid och att teamet regelbundet reflekterar över hur det kan bli mer effektivt. Mått på teamhälsa och utvecklarupplevelse är hur dessa principer blir kontrollerbara. De frågar hur det är att göra arbetet här, och vad som står i vägen.

[Utvecklarupplevelse](https://en.wikipedia.org/wiki/Developer_experience) är summan av de interaktioner utvecklare har med verktygen, processerna och människorna de arbetar med. Idén är bredare än programvaruutveckling. Operatörer, servicedeskpersonal, analytiker och alla andra som bygger eller driver en tjänst har en upplevelse av sin miljö. Det här ämnet använder "utvecklarupplevelse" för ingenjörerna och "teamhälsa" för den bredare gruppen, och samma mått gäller för båda.

Två forskningsramverk citeras brett. SPACE-ramverket, publicerat av Nicole Forsgren och kollegor 2021, hävdar att utvecklares [produktivitet](https://en.wikipedia.org/wiki/Productivity) inte kan reduceras till ett tal, och föreslår fem dimensioner: nöjdhet och välbefinnande, prestation, aktivitet, kommunikation och samarbete samt effektivitet och flöde. En uppföljning 2023 av Abi Noda, Margaret-Anne Storey, Nicole Forsgren och Michaela Greiler, med titeln "DevEx: What Actually Drives Productivity", fokuserar på tre dimensioner som utvecklare kan känna och organisationer kan ändra: återkopplingsloopar, kognitiv belastning och flowtillstånd. Båda artiklarna rekommenderar att kombinera enkätdata om uppfattningar med data från system om arbetsflöden, och båda varnar för att använda något enskilt mått, särskilt ett aktivitetsantal, som ersättning för produktivitet.

De tre DevEx-dimensionerna är en praktisk utgångspunkt.

- **Återkopplingsloopar.** Hur snabbt får en person veta resultatet av det de gjorde? Långsamma byggen, långsamma tester, långsamma granskningar och långsamma godkännanden lägger var och en till väntan, och väntan bryter koncentration. Snabb återkoppling är också ett kärnstöd för kontinuerlig leverans.
- **[Kognitiv belastning](https://en.wikipedia.org/wiki/Cognitive_load).** Hur mycket måste en person hålla i sinnet för att få något gjort? Komplicerade system, dålig dokumentation, oklart ägarskap och många verktyg höjer belastningen. Att minska den frigör kapacitet för arbetet som spelar roll.
- **[Flowtillstånd](https://en.wikipedia.org/wiki/Flow_(psychology)).** Kan en person hitta ostörda stunder att koncentrera sig i? Möten, aviseringar, oplanerade förfrågningar och kontextbyten nöter alla på det.

Mått inom det här området är ovanligt lätta att missbruka. Antal incheckningar, pull requests, stängda ärenden eller timmar online är aktivitetsmått. De är lätta att samla in och säger lite om människor kan göra bra arbete, och de inbjuder till manipulation. Mått på uppfattningar är subjektiva och värdefulla, och de kan förvrängas om människor fruktar konsekvenserna av ett ärligt svar. Varje mått på människor kan glida över i övervakning. Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller med en etisk udd: när ett mått på människor blir ett mål slutar människor säga sanningen om sitt arbete (se ämne 1.2, Goodharts lag och mätetalens psykologi).

Det här ämnet bygger på interna användares upplevelse som beskrevs tidigare (se ämne 6.4, Användar- och medarbetarupplevelse) och fortsätter i de följande ämnena om välbefinnande, samarbete, kompetens och förbättring.

## Nyckelprinciper

- **Mät förhållandena, inte människorna.** Fråga om miljön och dess hinder och redovisa på teamnivå.
- **Kombinera uppfattning med arbetsflödesdata.** Vad människor känner och vad system registrerar missar var och en en del av bilden.
- **Låt teamet äga sin hälsokontroll.** Människorna närmast arbetet väljer frågorna och läser resultaten först.
- **Använd aldrig dessa mått för att rangordna eller utvärdera individer.** Det skulle göra slut på ärliga svar.
- **Undvik aktivitetsantal som produktivitet.** Antal incheckningar, ärenden eller timmar är inte resultat.
- **Agera synligt på det du hör.** Rätta hindret, eller säg varför inte.
- **Skydda en hållbar takt.** Ett team som kör hett på obestämd tid lånar från sin framtid.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Återkopplingsloopens tid | Tid för en person att få resultatet av en vanlig handling, per looptyp | median och 85:e percentil av minuter eller timmar för bygge, testkörning, väntan på kodgranskning och driftsättning, per team | minuter eller timmar | Tidsstämplar i pipeline- och granskningsverktyg, aggregerade per team | Release- och driftsättningshantering; ständig förbättring | Snabb återkoppling i kontinuerlig leverans | Veckovis |
| Andel fokustid | Andel av arbetstiden i ostörda block av en överenskommen minimilängd, så som teamet rapporterar | teamrapporterade timmar i fokusblock / arbetstimmar, insamlat i en kort puls | procent | Teampuls; kalenderdata bara om teamet väljer det och det aggregeras | Ständig förbättring; kunskapshantering | Skyddad tid för djupt arbete | Månadsvis |
| Betyg på kognitiv belastning | Teamets betyg på hur svårt det är att förstå och ändra ett namngivet system eller en process | medelbetyg och spridning på en kort överenskommen skala, per system | skalpoäng | Kort puls kopplad till ett system eller en process | Tjänstedesign; kunskapshantering | Delad förståelse av arbetet | Kvartalsvis |
| Lösningstid för hinder | Tid från att ett hinder lyfts av teamet till dess borttagande eller ett registrerat beslut att inte ta bort det | median och 85:e percentil av dagar från lyft till löst eller avgjort | dagar | Hinderlista eller spårare | Ständig förbättring; problemhantering | Hinder borttagna | Månadsvis |
| Trend i teamets hälsokontroll | Teamets eget betyg på dimensioner det själv valde, följt över tid | förändring i teamvalda dimensioners betyg mellan kontroller | skalpoäng | Teamets hälsokontroll, ägd av teamet | Ständig förbättring | Teamets reflektion över hur det kan bli mer effektivt | Månadsvis eller kvartalsvis |
| Nöjdhet med verktyg och processer | Teamets betyg på nöjdhet med verktygen och processerna de använder dagligen | medelbetyg eller andel positiva för varje namngivet verktyg eller process | skalpoäng eller procent | Kort puls | Servicenivåhantering; ständig förbättring | Miljöns passning till arbetet | Kvartalsvis |
| Dimensionstäckning | Antal SPACE-dimensioner som täcks av måtten ett team faktiskt använder | antal av de fem dimensionerna med minst ett mått i bruk | antal (0 till 5) | Mätetalsregister | Mätning och rapportering; styrning | Balanserade mått | Årligen |

Aggregera allt på teamnivå och sätt en minsta gruppstorlek, till exempel inget resultat för en grupp mindre än fem personer. Fokustid är teamets egen beskrivning, och varje kalenderhärledd siffra är valfri, aggregerad och överenskommen av teamet. Återkopplingsloopars tider kommer från system och beskriver pipelinen, inte människor. Dimensionstäckning är en kontroll av mätprogrammet, avsedd att förhindra beroende av en enda sorts mått.

## Rekommendationer

### Börja med förhållandena människor arbetar under

**1. Fråga teamet vad som saktar ner dem.** Börja med ett samtal, inte en enkät: vad slösar er tid, vad är svårt att förstå och vad avbryter er mest? Skriv ned svaren med teamets ord. Samtalet hittar problem som ingen instrumentpanel skulle, och det bygger det förtroende senare enkäter behöver. Enas om vilka två eller tre som ska mätas.

**2. Använd de tre DevEx-dimensionerna som en lins.** För var och en av återkopplingsloopar, kognitiv belastning och flowtillstånd, välj en uppfattningsfråga och, där det är möjligt, ett systemmått. För återkopplingsloopar, para "hur nöjd är du med hur lång tid byggen tar?" med byggtiden. För kognitiv belastning, fråga hur svårt det är att förstå och ändra ett namngivet system. För flöde, fråga hur ofta människor kan arbeta utan avbrott. Para vad människor säger med vad system registrerar och titta på oenigheter.

**3. Täck flera SPACE-dimensioner.** Välj mått från minst tre av de fem dimensionerna så att ingen enskild sorts data dominerar. Nöjdhet och välbefinnande, samarbete samt effektivitet och flöde spelar ofta störst roll för ett team som driver tjänster. Behandla aktivitetsmått med stor försiktighet och använd dem bara som sammanhang. Måttet dimensionstäckning håller detta ärligt.

### Mät med omsorg

**4. Låt teamet äga och läsa sin hälsokontroll först.** En teamhälsokontroll är en kort självbedömning på dimensioner teamet väljer, till exempel nöje, stöd, hastighet, lärande och lätthet att släppa. Teamet läser och diskuterar sina egna resultat innan någon annan ser en sammanfattning. Andra ser trender och de hinder teamet ber om hjälp med, inte poäng att jämföra. Det håller verktyget ett lärandestöd, och det beror på [psykologisk trygghet](https://en.wikipedia.org/wiki/Psychological_safety), den delade tron att människor inte kommer att straffas för att de säger ifrån.

**5. Tidta de återkopplingsloopar som spelar roll.** Mät varaktigheten på looparna som människor klagar på: lokalt bygge, testsvit, väntan på kodgranskning, driftsättning till en testmiljö. Redovisa median och 85:e percentil, eftersom en långsam svans gör mer ont än medelvärdet antyder. Dela talen med teamet som äger pipelinen och gör förbättring till ett regelbundet arbete (se ämne 2.7, Mätetal för pull requests och kodgranskning).

**6. Skydda fokus och mät det varsamt.** Fråga om fokus i pulsen och titta på vad som orsakar avbrott: mötesbelastning, aviseringar, oplanerade förfrågningar. Om ett team vill titta på kalendermönster, gör det med deras samtycke och aggregera resultaten. Följ aldrig individers aktivitet eller närvaro. Målet är att hitta strukturella avbrott att ta bort, till exempel ett möte som kunde vara ett dokument.

**7. Följ hinder till lösning.** Håll en synlig lista över hinder teamet har lyft och mät hur lång tid de tar att lösa eller medvetet lägga åt sidan. En lång lista som aldrig krymper lär människor att det är meningslöst att lyfta problem. Beslutet att inte ta bort ett hinder, med ett skäl, räknas som en lösning.

### Använd resultaten för att förbättra

**8. Agera på en eller två saker i taget.** Välj det mest värdefulla hindret, rätta det och berätta för teamet. Synlig handling gör mer för förtroendet än en lång rapport. Motstå frestelsen att starta många initiativ på en gång.

**9. Para personmått med resultatmått.** Titta på hur återkopplingsloopar och kognitiv belastning förhåller sig till leverans- och stabilitetsresultat (se ämne 2.8, DORA-mätetal). Påstå inte orsakssamband utifrån samband i din egen data. Använd parningen för att hitta frågor att utforska, till exempel om team med långsammare granskningar också har längre cykeltider.

**10. Håll aktivitetsantal utanför samtalet.** Redovisa inte incheckningar, kodrader eller stängda ärenden per person. Antal teamutdata kan vara användbara för flöde, men de säger lite om hälsa. Om någon ber om individuella aktivitetsmått, förklara forskningen och erbjud mått på förhållanden i stället.

### Skydda människor

**11. Sätt integritetsregler innan du samlar in.** Skriv ned vad som samlas in, varför, vem som ser det, hur länge det bevaras och vad som aldrig ska göras med det. Aggregera till teamnivå, undertryck små grupper och låt representanter för de inblandade granska reglerna. Använd inte någon av denna data i prestationsbedömningar, befordran eller disciplin.

**12. Gör en hållbar takt till standard.** Bevaka tecken på att ett team kör hett: en lång följd av incidenter utanför kontorstid, ett permanent tillstånd av brådska, stigande hinderlistor, fallande nöjdhet. Behandla dessa som systemproblem att rätta med omfång, bemanning eller prioriteringar. En jämn takt människor kan hålla uppe är ett designmål, och den stöder kvalitet, lärande och bibehållande av personal (se ämne 9.2, Mätetal för nöjdhet och välbefinnande).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Återkopplingsloopens tid | Att utesluta långsamma fall; att mäta en snabb väg som det mesta arbetet inte tar | Redovisa 85:e percentilen; definiera varje loops start och slut i registret |
| Andel fokustid | Att blockera kalendertid utan att fokusera; att rapportera uppblåst fokus för att glädja chefer | Teamägd puls; jämför med orsaker till avbrott; ingen individuell rapportering |
| Betyg på kognitiv belastning | Att betygsätta system lågt för att undvika granskning; att välja lätta system att betygsätta | Betygsätt en fast lista system; jämför med introduktionstid och incidentmönster |
| Lösningstid för hinder | Att stänga hinder utan att rätta dem; att vägra logga hinder | Teamet bekräftar lösning; andel återöppnade hinder |
| Trend i teamets hälsokontroll | Chefer som pressar på för goda poäng; team som justerar poäng för att undvika uppmärksamhet | Teamet äger resultaten; trender delas bara med teamets samtycke |
| Nöjdhet med verktyg och processer | Att enkätera nöjda användare; att träna personal att svara väl | Svarsfrekvens och sammansättning; läs kommentarer; knyt till systemmått |
| Dimensionstäckning | Att räkna en dimension med ett symboliskt mått | Kontrollera att varje räknat mått används i ett beslut |

En sund avläsning är kortare och jämnare återkopplingsloopar, en fallande kognitiv belastning på nyckelsystem, team som rapporterar verkligt fokus, hinder som lyfts och löses, hälsokontroller teamet litar på och ingen användning av datan på individer.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Uppfattningsenkäter | Fångar det system inte kan; låg kostnad | Subjektiva; utsatta för rädsla och trötthet |
| Arbetsflödesmått | Objektiva; kontinuerliga | Missar känslor och orsaker; risk för övervakning |
| Teamägd hälsokontroll | Ärlig och användbar för teamet | Svår att jämföra; svår att skala |
| Standardenkät för hela företaget | Jämförbar över team | Mindre relevant; används för att rangordna |
| Aktivitetsantal | Lätta att samla in | Dåliga ersättningsmått; lätta att manipulera |
| Förhållandefokuserade mått | Pekar på rättningsbara orsaker | Kräver uppföljningsinsats |
| Täta pulser | Aktuella | Enkättrötthet |
| Årlig enkät | Låg börda | Långsam; föråldrad |

Svaret är att kombinera teamägda hälsokontroller och korta pulser med arbetsflödesmått på looparna som människor klagar på, undvika aktivitetsantal och skydda integriteten. Använd jämförelser över hela företaget sparsamt, och aldrig för att rangordna team.

## Frågor att diskutera med teamet

**1. Vilken är den långsammaste återkopplingsloopen i vår arbetsdag, och hur lång tid tar den faktiskt?**
Välj loopen människor klagar mest på. Tidta den ur systemen och jämför med vad människor säger. Facilitatorn bör notera överraskningar, åt båda håll. Enas om en ändring som skulle korta den och vem som äger den.

**2. Vilket system fruktar vi att ändra, och vad gör det svårt?**
Namnge systemet. Ligger svårigheten i koden, dokumentationen, verktygen eller kunskapen i några få huvuden? Fråga vilken förbättring som skulle sänka belastningen mest. Planera hur ni ska veta om det fungerade.

**3. När hade var och en av oss senast ett långt block av ostörd tid, och vad avbröt de som misslyckades?**
Dela ärligt och utan skuldbeläggning. Lista avbrotten och sortera dem som strukturella (möten, aviseringar, oplanerade förfrågningar) och tillfälliga. Välj ett strukturellt avbrott att minska.

**4. Vilket hinder har vi lyft mer än en gång utan resultat?**
Titta på hinderlistan. För varje gammal post, fråga vem som kunde lösa den och vad som blockerar dem. Om teamet har slutat lyfta hinder, diskutera varför. Enas om ett att eskalera med belägg.

**5. Vad skulle få oss att tveka att ge ett ärligt svar i hälsokontrollen?**
Diskutera farhågor om hur resultat kan användas. Facilitatorn bör registrera farhågor och enas om regler: vem som ser datan, vad som aldrig ska göras med den. Om reglerna inte åtnjuter förtroende, säg det och besluta vad som skulle förtjäna förtroende.

**6. Vilka av våra mått kunde stiga medan arbetet blir sämre?**
Lista måtten och tänk på sätt varje kunde förbättras utan att hjälpa någon. Tilldela varje ett skyddsräcke. Ta bort varje mått som inte används i ett beslut.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam vet bäst vad som saktar ner dem och är ägare till sin egen hälsokontroll. De bör namnge hinder, tidta looparna de styr och avgöra med teamet vad som ska rättas först. De bör motstå tryck att redovisa individuell aktivitet och insistera på mått på teamnivå.

### Service- och driftteam

Driftteam bär jour, avbrott och oplanerat arbete som nöter på fokus och takt. De bör lyfta strukturell belastning som ett systemproblem, mäta looparna i sina egna verktyg och hålla ett hållbart schema. De har nytta av delade hinderlistor med leveransteam, eftersom många hinder korsar gränsen.

### Ledning och styrning

Ledare sätter förhållandena och avgör hur data används. De bör finansiera rättelserna som mått på förhållanden avslöjar, skydda integritetsreglerna och be om trender och hinder i stället för poäng att jämföra. Styrningen bör behandla en begäran om individuella aktivitetsmått som ett skäl att ompröva reglerna och bör förvänta sig att förbättringsarbete är synligt.

### Kunder och användare

Användare har nytta av team som kan arbeta lugnt och lära snabbt, eftersom deras problem då blir väl lösta. De märker också när ett team är överväldigat: långsammare svar, upprepade misstag, hög omsättning. Deras återkoppling är belägg om teamhälsa utifrån, och de förtjänar ärlighet om hur rättelser prioriteras.

## I praktiken: ett exempel från tjänstehantering

Ett nationellt försäkringsbolags teknikgrupp har 14 team som bygger och driver tjänster för försäkringar och skador. Ledningen ber om en instrumentpanel för utvecklares produktivitet. Den första begäran gäller incheckningar och stängda ärenden per person. Chefen för teknisk effektivitet föreslår ett annat angreppssätt. Siffrorna nedan är illustrativa.

Hon börjar med samtal i fem team. Tre hinder dyker upp upprepade gånger: testsviten tar 70 minuter, kodgranskningar väntar länge hos team som beror på två seniora granskare och ingen känner sig i stånd att ändra den äldre skadeberäkningstjänsten. Hon mäter det hon kan ur system. Mediantiden för bygge och test är 58 minuter med en 85:e percentil på 92. Mediantiden för väntan på första granskning är 9 arbetstimmar och den 85:e percentilen är 31 timmar. Hon lägger till en kort kvartalsvis puls med de tre DevEx-frågorna, med en minsta redovisningsgrupp på fem. Betyget på kognitiv belastning för skadeberäkningstjänsten är 4,4 på en femgradig skala där 5 är mycket svårt, mot 2,6 för försäkringsportalen. Fokustiden som team rapporterar är ungefär 3 timmar om dagen, med möten och oplanerade förfrågningar som huvudorsaker. Varje team kör sin egen hälsokontroll på dimensioner det själv valt och läser bara den sammanlagda trenden.

Gruppen kommer överens om fyra åtgärder med teamen. Testsviten delas upp och parallelliseras, och den 85:e percentilen faller från 92 till 41 minuter inom två månader. En granskningsrota sprider belastningen bortom de två seniora granskarna, och den 85:e percentilen av väntetid faller till 14 timmar. Tre team kommer överens om ett veckovist block utan möten, och ett team omarbetar hur oplanerade förfrågningar når det. Skadeberäkningstjänsten blir ett gemensamt lärandeprojekt, med parprogrammering och dokumentation, och dess betyg på kognitiv belastning faller till 3,5 under två kvartal. Rapporterad fokustid stiger till ungefär 4 timmar.

När en senior chef återigen ber om individuella antal incheckningar förklarar chefen för teknisk effektivitet forskningen kring SPACE och DevEx och erbjuder instrumentpanelen för förhållanden. Beslutet registreras, med integritetsreglerna som säger att individuell aktivitet aldrig kommer att användas i bedömningar. Ett team ber om att dess hälsokontrollsresultat inte sammanfattas för ledningen det här kvartalet, och begäran beviljas. Personalomsättningen i de berörda teamen faller under nästa år, och hon noterar att hon inte kan bevisa kopplingen och inte kommer att påstå den.

## Agilitet, AI, automatisering och analys

### Agilitet

Mät förhållanden såsom återkopplingsloopar och fokustid tillsammans med teamet och ta bort hindren de avslöjar. Varningen är att användning av talen för att rangordna människor förstör datan.

### AI

AI-assistenter för kodning och skrivande ändrar återkopplingsloopar och kognitiv belastning, till det bättre eller sämre. Fråga teamet om nytta och börda och para användning med omarbete och välbefinnande. Varningen är att användningsstatistik redovisad per person förvandlas till övervakning.

### Automatisering

Automatisera insamling av bygg-, test- och granskningstider och mät verktygskedjan på långsamhet och fel. Varningen är att snabba verktyg ändå kan dölja en långsam organisation, så kombinera data med teamsamtal.

### Analys

Visa trender per team med antal svar och sätt en minsta gruppstorlek. Beslutet detta ger underlag för är vilket hinder som ska tas bort härnäst. Varningen är att små team inte kan vara anonyma.

## Branschperspektiv

**Startup.** Alla känner alla, så samtal slår enkäter. Tidta de huvudsakliga återkopplingsloopar, håll byggen snabba och bevaka tecken på ohållbar takt, eftersom några få människor bär mycket. Importera inte ett stort enkätprogram.

**Småföretag.** Ett litet team kan vara en eller två personer som både bygger och stöder. Deras huvudrisk är avbrott och beroende av individer. Håll en enkel hinderlista, se till att ersättare finns vid frånvaro och fråga varandra regelbundet vad som står i vägen. Data på individnivå är i sig identifierande, så förlita dig på samtal.

**Storföretag.** Skala ger variation och frestelser att jämföra. Tillhandahåll en gemensam verktygslåda (pulsfrågor, looptider) samtidigt som team äger sina hälsokontroller. Aggregera noggrant, dela mönster mellan team för att sprida rättelser och håll rangordningar utanför. Involvera företagsråd eller personalrepresentanter där de finns.

**Offentlig sektor.** Upphandling, säkerhetsregler och godkännandekedjor förlänger återkopplingsloopar, och personal kan ha starka skydd mot övervakning. Mät looparna, involvera representanter i att sätta dataregler och använd fynden för att förenkla processer. Offentliganställda som motiveras av tjänstens värde har nytta av synlig borttagning av hinder (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna är teamens tid för hälsokontroller och pulser, lite instrumentering av pipelines och granskningsverktyg, en analytiker eller coach som hjälper till att tolka resultat och facilitera och den tekniska tiden att ta bort hinder. De flesta av dessa kostnader är små jämfört med kostnaden för långsamma loopar multiplicerad över många människor.

Avkastningen kommer från återvunnen tid, mindre omarbete, bättre bibehållande av personal och snabbare lärande. Uppskatta den ur din egen data: timmarna per vecka som förloras på väntan på byggen och granskningar över gruppen, kostnaden för rekrytering och introduktion för att ersätta människor som slutar och de incident- eller felmönster som är kopplade till överbelastade team. Var försiktig med att omvandla minuter till pengar och ange antagandena. Undvik påståenden ur publicerade studier om produktivitetsvinster om du inte kan spåra deras metod och passform. Kom ihåg kostnaden för att göra fel: ett program som uppfattas som övervakning skadar förtroendet och kvaliteten på varje senare enkät (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Individuella produktivitetsinstrumentpaneler.** De mäter aktivitet, inbjuder till manipulation och skadar förtroendet. Mät förhållanden på teamnivå.
- **Att använda hälsokontrollpoäng för att jämföra team.** Teamen hanterar då poängen. Låt team äga sina resultat.
- **Enkäter utan åtgärd.** Människor slutar svara. Rätta något synligt varje cykel.
- **Att mäta tid online eller närvaro.** Det belönar synlighet och straffar fokus. Mät loopar och hinder.
- **Ett mått för allt.** Det missar det mesta av bilden. Täck flera dimensioner.
- **Att ignorera svansen.** Medianer döljer de långsamma looparna som gör ont. Redovisa percentiler.
- **Att lägga skuld på människor för systemproblem.** Hinder är vanligen strukturella. Rätta strukturen.
- **Att köra hett som normalt.** Permanent brådska bränner ut människor. Behandla ihållande överbelastning som ett planeringsfel.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Förståelse av förhållanden | Anekdot | Enstaka enkät | Regelbundna samtal och pulser om återkopplingsloopar, belastning och flöde | Uppfattnings- och arbetsflödesdata kombineras, med trender på teamnivå | Gemensam bild av förhållanden över team och leverantörer; team samdesignar mått |
| Ägarskap och etik | Ledningen läser allt | Informell omsorg | Teamägda hälsokontroller; skrivna integritetsregler | Regler granskas med representanter; ingen individuell användning upprätthålls | Regler och praxis revideras oberoende; team kontrollerar datadelning |
| Åtgärd | Klagomål ignoreras | Ad hoc-rättelser | Hinderlista med ägare; en eller två rättelser per cykel | Rättelser följs och kopplas till resultat; hållbar takt bevakas | Borttagning av hinder inbyggd i planeringen; lärande delas brett |

## Checklista

- [ ] Team har med egna ord sagt vad som saktar ner dem.
- [ ] Minst en uppfattningsfråga och ett systemmått täcker var och en av återkopplingsloopar, kognitiv belastning och flöde.
- [ ] Måtten kommer från minst tre SPACE-dimensioner.
- [ ] Varje team äger sin hälsokontroll och läser resultaten först.
- [ ] Återkopplingsloopars tider redovisas som median och 85:e percentil.
- [ ] En synlig hinderlista har ägare, och lösningstid följs.
- [ ] Resultat redovisas på teamnivå med en minsta gruppstorlek.
- [ ] Skrivna integritetsregler anger att individuell data inte kommer att användas i bedömningar.
- [ ] Aktivitetsantal redovisas inte som produktivitet.
- [ ] Teamet ser minst en rättelse per cykel.

## AI-prompter

**Skriv utkast till pulsfrågor för de tre DevEx-dimensionerna.**

```text
Draft a short pulse of no more than six questions for [type of team] covering
feedback loops, cognitive load, and flow state. Use neutral wording, a
consistent scale, and one open comment. For each question suggest a matching
system measure we could compare it with. Do not claim research results. List
your assumptions and ways the questions could be misread.
```

**Analysera mönster i en hinderlista.**

```text
Here is the team's obstacle list for the last [period] with dates raised,
dates resolved, and short descriptions: [paste, sanitized]. Group obstacles by
cause, point out long-standing items and patterns, and suggest which one or two
to tackle first and why. Do not infer motives or name individuals. List your
assumptions and what the team should confirm.
```

**Skriv integritetsregler för ett teamhälsoprogram.**

```text
Draft a one-page set of rules for a team health and developer experience
program in [type of organization]. Cover what is collected, purpose, who sees
what, minimum group size, retention, a promise that individual data will not be
used in performance reviews, and how staff can raise concerns. Flag anything I
should review with legal, privacy, and employee representatives. Do not give
legal conclusions. List your assumptions.
```

**Jämför förhållanden med resultat.**

```text
For [number] teams we have conditions measures (feedback loop times, cognitive
load ratings, focus time) and outcome measures (cycle time, change fail rate,
incidents): [paste table]. Describe patterns, say where the data is too sparse
to conclude anything, and suggest hypotheses to test with the teams. Do not
claim causation. List your assumptions and cautions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett mått på teamhälsa eller utvecklarupplevelse.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för personrelaterade mått bär sin manipuleringsvektor, sitt skyddsräcke och sina integritetsregler.

## Viktigaste slutsatser

- Mät förhållandena människor arbetar under: återkopplingsloopar, kognitiv belastning och flöde.
- Kombinera vad människor säger med vad system registrerar och titta på oenigheterna.
- Låt team äga sina hälsokontroller, redovisa på teamnivå och använd aldrig datan på individer.
- Undvik aktivitetsantal som ersättning för produktivitet.
- Agera synligt på ett eller två hinder i taget och följ hur lång tid hinder tar att lösa.
- Skydda en takt teamet kan hålla uppe på obestämd tid.

## Referenser och vidare läsning

1. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
2. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Productivity](https://en.wikipedia.org/wiki/Productivity).
7. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
8. Wikipedia, [Developer experience](https://en.wikipedia.org/wiki/Developer_experience).
9. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
10. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
