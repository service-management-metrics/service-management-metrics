# SLI:er, SLO:er och felbudgetar

**Ett servicenivåmål gör "tillräckligt tillförlitlig" till ett tal som användare, produktteam och driftteam alla kan se, och felbudgeten det lämnar efter sig gör det talet till ett delat, förbrukningsbart beslut om risk i stället för ett argument om skuld.**

## Översikt och motiv

Varje tjänst har redan en nivå av tillförlitlighet, oavsett om någon har mätt den eller inte. Om ingen anger den utgår användare från en nivå, produktteamet från en annan och driftteamet försvarar en tredje. Skillnaden upptäcks under ett avbrott. Det här ämnet täcker de tre sammanlänkade idéer som [site reliability engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) använder för att stänga det glappet: servicenivåindikatorn, servicenivåmålet och felbudgeten.

En [servicenivåindikator (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) är en mätning av en aspekt av tjänsten så som användare upplever den. Typiska aspekter är om en förfrågan lyckades, hur lång tid den tog, om datan som returnerades var färsk och om den var korrekt. En bra SLI uttrycks som en kvot: antalet goda händelser dividerat med antalet giltiga händelser, över ett definierat fönster. Ett [servicenivåmål (SLO)](https://en.wikipedia.org/wiki/Service-level_objective) är målet för den kvoten över en period, till exempel "99,9 procent av giltiga betalningsförfrågningar lyckas över rullande 28 dagar." **Felbudgeten** är vad målet tillåter att gå fel: 100 procent minus SLO:t. Vid 99,9 procent är budgeten 0,1 procent av giltiga händelser.

Felbudgeten ändrar samtalet. Om tjänsten har förbrukat lite av sin budget har teamet utrymme att släppa snabbare, pröva riskfyllda ändringar och köra experiment. Om budgeten nästan är slut saktar samma team ner funktionsarbetet och lägger insats på tillförlitlighet tills budgeten återhämtat sig. Beslutet kommer från ett tal som överenskommits i förväg, så det beror inte på vem som är mest senior eller mest övertygande på mötet.

**Förbrukningstakt** (burn rate) är hur fort budgeten förbrukas, relativt den takt som skulle förbruka precis allt vid fönstrets slut. En förbrukningstakt på 1 betyder att budgeten är slut exakt vid fönstrets slut. En förbrukningstakt på 10 betyder att den är slut på en tiondel av fönstret. Förbrukningstakten är bron från SLO:t till larm, eftersom den säger hur brådskande ett problem är i termer av vad det kostar målet.

De agila och ITIL-baserade synsätten möts här, och de använder olika vokabulär för besläktade idéer. I ITIL 4 är servicenivåhantering praktiken som sätter, mäter och rapporterar servicenivåer, och [servicenivåavtalet (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) är det dokumenterade avtalet mellan en leverantör och en kund (se ämne 5.1, Mätetal för SLA, OLA och XLA). Ett SLO är ett internt mål som vanligen är striktare än SLA:t och ägs av teamet som driver tjänsten. Ett SLA bär konsekvenser, såsom krediter eller viten. Ett SLO bär en beslutsregel. Agila team som äger sina tjänster ("you build it, you run it") använder SLO:er för att göra kostnaden för tillförlitlighet synlig i samma backlog som funktioner. Team som följer ITIL-praktiken kan behandla SLI:er som den mätbara formen av vad kunder säger att de behöver, och SLO:t som det arbetsmål som håller SLA:t säkert.

[Tillgänglighet](https://en.wikipedia.org/wiki/Availability) är den mest bekanta SLI:n och behandlas ingående på annat håll (se ämne 5.3, Mätetal för tillgänglighet). Fördröjning, korrekthet, färskhet och genomflöde är också kandidater. Konsten är att välja indikatorer utifrån det användare bryr sig om, snarare än det som är lätt att samla in. CPU-användning på en server är lätt att samla in och säger lite om huruvida en kund kunde betala. Andelen betalningsförfrågningar som slutförs inom två sekunder säger mycket. För fördröjning, redovisa [percentiler](https://en.wikipedia.org/wiki/Percentile), inte medelvärden, eftersom ett medelvärde döljer den långsamma svansen som användare märker (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal, och ämne 5.4, Mätetal för kapacitet och prestanda).

## Nyckelprinciper

- **Utgå från användaren, inte servern.** Välj indikatorer som beskriver en upplevelse en människa skulle känna igen, till exempel "min betalning gick igenom", och arbeta bakåt till vad som ska mätas.
- **Ett mål under 100 procent är ett beslut, inte ett erkännande.** Perfekt tillförlitlighet är ouppnåeligt och oöverkomligt dyrt, och användare kan vanligen inte se skillnad bortom en viss punkt. Budgeten gör avvägningen uttrycklig.
- **Sätt målet tillsammans med dem som är beroende av det.** SLO:t är ett förhandlat avtal mellan produkt, drift och kunder, inte ett tal valt av ett team ensamt.
- **Kom överens om konsekvenserna innan budgeten tar slut.** En policy för felbudget skriven under en lugn vecka följs under en stressig. En policy som uppfinns under ett avbrott blir föremål för käbbel.
- **Larma på förbrukning, inte på varje blipp.** Anropa en människa bara när budgeten förbrukas så snabbt att målet hotas, och dirigera långsammare förbrukning till ärenden.
- **SLO:er beskriver tjänster, aldrig människor.** Budgeten tillhör en tjänst och dess team. Den är aldrig ett betyg på en ingenjör.

## Mätetalsdefinitioner

Måtten nedan beskriver SLO-systemet för en tjänst. De fyra första är kärnan i praktiken, och de två sista beskriver hur frisk själva praktiken är. Varje klocka och gräns anges i formelkolumnen. "Giltiga händelser" är de händelser som räknas mot SLI:n efter de undantag som överenskommits i SLO-dokumentet, till exempel förfrågningar från teamets egna belastningstester, som utesluts.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SLI-måluppfyllelse | Andelen giltiga händelser som var goda, för en indikator för en tjänst | goda händelser / giltiga händelser, för fönstret från rapporteringsperiodens början till dess slut; händelser som undantagits av SLO-dokumentet (belastningstester, i förväg tillkännagivet planerat underhåll, om SLO:t säger det) tas bort ur både täljare och nämnare | procent | Telemetri från lastbalanserare, applikation eller syntetisk sond; övervaknings- eller observerbarhetsplattformen | Servicenivåhantering; övervakning och händelsehantering | Definition av klart för driftbarhet; intressentgranskning av tjänstens hälsa | Kontinuerligt, redovisas dagligen och per fönster |
| SLO-efterlevnad | Om SLI:n nådde målet över SLO-fönstret, och för hur många nyliga fönster | fönster där SLI-måluppfyllelsen låg på eller över målet / utvärderade fönster, över de senaste 12 månaderna; ett fönster som fortfarande är öppet utesluts | procent av fönstren | Historik över SLI-måluppfyllelse | Servicenivåhantering; ständig förbättring | Teammål eller arbetsavtal om tillförlitlighet | Månadsvis, med en kvartalsvis trend |
| Återstående felbudget | Den del av budgeten som ännu inte förbrukats i det aktuella fönstret | 1 - (dåliga händelser hittills / tillåtna dåliga händelser för hela fönstret), där tillåtna dåliga händelser = (1 - SLO) x förväntade giltiga händelser för hela fönstret; klockan startar vid fönstrets början och stoppar vid dess slut | procent av budgeten | SLI-måluppfyllelse och volymprognosen | Servicenivåhantering; riskhantering | Kontroll av releaseberedskap; underlag till planerat arbete | Dagligen, granskas veckovis |
| Förbrukningstakt | Hastigheten med vilken budgeten förbrukas relativt jämn förbrukningstakt | (dåliga händelser / giltiga händelser över en tillbakablicksperiod) / (1 - SLO); tillbakablicksperioden anges, till exempel 1 timme eller 6 timmar | kvot (1 betyder exakt enligt budget) | SLI-telemetri med fin tidsupplösning | Övervakning och händelsehantering; incidenthantering | Larmregler för jour; utlösare för att samlas kring ett problem | Kontinuerligt, utvärderas i larmregler |
| Efterlevnad av budgetpolicy | Hur ofta den överenskomna konsekvensen tillämpades när en utlösare i policyn för felbudget nåddes | utlösare under perioden där policyåtgärden vidtogs inom den överenskomna tiden / utlösare som nåddes under perioden; utlösare som formellt avstods med ett registrerat skäl räknas separat, tas inte bort | procent | Policydokument, beslutslogg och backloghistorik | Servicenivåhantering; ändringsmöjliggörande | Arbetsavtal; uppföljning efter retrospektiv | Kvartalsvis |
| SLO-täckning | Andelen kritiska användarresor, eller tjänster inom omfånget, som har ett aktuellt SLO och en fungerande SLI | tjänster eller resor inom omfånget med minst ett SLO vars SLI-data anlänt de senaste 7 dagarna / tjänster eller resor inom omfånget; "inom omfånget" listas i tjänstekatalogen | procent | Tjänstekatalog, SLO-register och övervakningskonfiguration | Hantering av tjänstekatalog; servicenivåhantering | Teamets lista över tjänsteägarskap | Kvartalsvis |

Tillbakablicken för förbrukningstakten och SLO-fönstret är val. Ett rullande fönster på 28 dagar täcker hela veckor. Ange valet i SLO-dokumentet och håll det stabilt, annars vilseleder trenden.

## Rekommendationer

### Välj indikatorer utifrån det användare bryr sig om

**1. Börja med kritiska användarresor.** Lista de tre till sex saker en användare måste kunna göra för att tjänsten ska vara värd att använda, till exempel logga in, söka, betala och ladda ner ett kontoutdrag. Skriv var och en som en mening från användarens sida. Välj sedan den SLI som visar om meningen var sann. Det håller SLO:erna få och förhindrar en katalog av tekniska mätare som ingen läser.

**2. Uttryck varje SLI som goda händelser över giltiga händelser.** En kvot är lätt att förklara, lätt att aggregera och lätt att göra till en budget. Definiera "god" med en tröskel som användare skulle acceptera, och definiera "giltig" så att trafik du rimligen inte kan betjäna, till exempel förfrågningar som blockerats för missbruk, utesluts på ett dokumenterat sätt. Skriv båda definitionerna i SLO-dokumentet, eftersom nämnaren är där de flesta oenigheter gömmer sig.

**3. Mät så nära användaren som är praktiskt.** En framgångsgrad på serversidan kan vara perfekt medan ett nätverks- eller klientproblem gör tjänsten oanvändbar. Mät vid lastbalanseraren eller kanten och lägg till en syntetisk sond eller klientsidig mätning för de resor som betyder mest. Varje mätpunkt har en kostnad och en blind fläck, så registrera vilken varje SLI använder (se ämne 1.5, Datakällor och instrumentering).

**4. Använd percentiler för fördröjning, med en tröskel.** "95 procent av sökförfrågningarna slutförs på under 800 millisekunder" är en SLI. "Genomsnittlig fördröjning" är det inte, eftersom några snabba förfrågningar kan väga upp många långsamma. Där det hjälper, använd två trösklar, till exempel en median och en 99:e percentil, eftersom den långsamma svansen formar hur tjänsten känns (se ämne 5.4, Mätetal för kapacitet och prestanda).

### Sätt mål som människor kan försvara

**5. Sätt det första SLO:t utifrån nuvarande prestanda och användarbehov och skärp sedan.** Mät SLI:n i några veckor, fråga användare och supportpersonal vilken nivå de märker och sätt ett mål som tjänsten kan nå i dag med visst utrymme. Ett mål satt långt över nuvarande prestanda är ett permanent brott, och människor slutar titta på det. Ett mål satt långt under vad användare får låter kvaliteten förfalla osedd. Se över det efter ett kvartal.

**6. Håll SLO:t striktare än SLA:t och håll dem åtskilda.** Om ett kundavtal lovar 99,5 procent kan teamets mål vara 99,9 procent, så att budgeten är slut innan den avtalade gränsen korsas. Gör inte SLO:t och SLA:t till samma tal och redovisa inte det ena som det andra. Avtalet är ett kommersiellt och juridiskt dokument, och målet är en teknisk beslutsregel (se ämne 5.1, Mätetal för SLA, OLA och XLA).

**7. Ta hänsyn till beroenden.** En tjänst kan inte vara mer tillförlitlig än det den beror på, såvida den inte degraderar elegant. Lista de viktigaste beroendena, inklusive leverantörer, och fråga vad deras faktiska prestanda innebär för ditt mål.

### Kör budgeten som ett beslutsverktyg

**8. Skriv en policy för felbudget innan du behöver den.** Policyn säger vad som händer vid definierade förbrukningsnivåer. En enkel version har tre steg: normal drift så länge budget finns kvar, extra granskning av riskfyllda ändringar och prioritet för tillförlitlighetsarbete när en angiven andel har förbrukats, och ett stopp för icke nödvändiga funktionsreleaser när den är slut tills budgeten återhämtat sig. Namnge vem som får bevilja ett undantag och hur det registreras. Produkt- och driftchefer bör båda skriva under den, så att policyn gäller båda sidor lika.

**9. Förbruka budgeten med avsikt.** En budget som aldrig rörs tyder på att målet är för strikt eller att teamet är för försiktigt. Använd överskottsbudget för experiment, snabbare releaserytm, kanarieutrullningar och [funktionsomkopplare](https://en.wikipedia.org/wiki/Feature_toggle) som låter dig testa i produktion med begränsad exponering, och använd [kanariereleaser](https://en.wikipedia.org/wiki/Canary_release) för att fånga problem medan bara en liten andel användare påverkas. Behandla en konsekvent orörd budget som en uppmaning att fråga om målet motsvarar vad användare behöver (se ämne 4.5, Mätetal för releaser och driftsättning).

**10. Larma på flera förbrukningstakter.** En snabb förbrukning, till exempel en takt hög nog att förbruka en stor andel av budgeten inom en timme, anropar en människa. En långsam förbrukning, till exempel en måttlig takt som ändå skulle tömma budgeten inom dagar, skapar ett ärende för kontorstid. Att använda två eller fler tillbakablicksfönster fångar både plötsliga fel och långsamma läckor och minskar antalet anrop för korta blippar som kostar lite budget. Kapitlet om larm på SLO:er i The Site Reliability Workbook förklarar mönstret, och trösklarna bör ställas in för din tjänst i stället för att kopieras (se ämne 5.5, Mätetal för övervakning och larmkvalitet).

**11. Koppla incidenter, problem och lärande till budgeten.** Efter en incident, registrera hur mycket budget den förbrukade bredvid dess varaktighet och påverkan. Använd talet för att prioritera problemposten och uppföljningsåtgärderna (se ämne 4.1, Mätetal för problemhantering, och ämne 4.2, Mätetal för efteranalyser och lärande). Budgetkostnaden ger också granskningar av större incidenter en gemensam enhet för att jämföra mycket olika fel (se ämne 3.4, Mätetal för större incidenter).

### Håll praktiken ärlig och levande

**12. Granska SLO:er mot verkligheten varje kvartal.** Jämför SLO:t med supportkontakter, klagomål och nöjdhetsresultat. Om användare är missnöjda medan SLO:t är grönt är SLI:n fel eller målet för löst. Om SLO:t är rött och ingen klagar kan målet vara för strikt. Registrera varje ändring och skälet och visa ändringen i trenddiagrammet (se ämne 6.2, Överenskommelser om upplevelsenivå).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| SLI-måluppfyllelse | Att snäva in "giltiga" händelser tills felen faller bort, till exempel genom att utesluta upprepade förfrågningar eller hela felklasser; att bara mäta den friskaste komponenten; att bara sondera från en gynnsam plats | Publicera SLI-definitionen och undantagen i SLO-dokumentet med en ändringslogg; jämför SLI:n med supportkontakter och användarklagomål; en regelbunden granskning av undantagna händelser och deras volym |
| SLO-efterlevnad | Att sätta målet så lågt att det alltid klaras; att ändra fönstrets längd efter en dålig period; att omdefiniera ett brott som en underhållsperiod | Mål satt med användarmedverkan och granskat enligt schema; fönstret fast i dokumentet; antal undantag och oplanerade ändringar av fönstret redovisade bredvid efterlevnaden |
| Återstående felbudget | Att omklassificera dåliga händelser som undantagna; att blåsa upp den förväntade volymen så att det tillåtna antalet dåliga ser större ut; att nollställa fönstret i förtid | Tillåtna dåliga händelser beräknade ur den faktiska volymen vid fönstrets slut; undantagen händelsevolym visad bredvid budgeten; fönsterdatum fastlagda i förväg |
| Förbrukningstakt | Att ställa in larmtrösklar så att förbrukning aldrig utlöser; att använda en så lång tillbakablick att snabba förbrukningar jämnas ut | Test av larmtäckning med tidigare incidenter ("skulle den här regeln ha larmat?"); andel åtgärdbara larm och antal missade detektioner (se ämne 5.5, Mätetal för övervakning och larmkvalitet) |
| Efterlevnad av budgetpolicy | Att bevilja undantag rutinmässigt; att skriva en policy med utlösare som aldrig nås; att räkna ett symboliskt tillförlitlighetsärende som policyåtgärden | Undantag räknade och granskade separat; andel undantag under perioden; slutfört tillförlitlighetsarbete (se ämne 4.1, Mätetal för problemhantering) |
| SLO-täckning | Att lägga till ett trivialt SLO på varje tjänst för att höja procentsatsen; att räkna en resa som täckt när ingen data flödar | Kontroll av SLI-datans färskhet (data anlänt de senaste 7 dagarna); granskning av om SLO:t täcker en kritisk resa, inte en sekundär ändpunkt |

En sund avläsning visar en SLI som följer det användare rapporterar, ett mål som ibland missas och ibland nås med god marginal och en budget som förbrukas med avsikt. Policyn tillämpas när dess utlösare nås, undantag är sällsynta och registrerade och varje definitionsändring syns i diagrammet. En tjänst som alltid ligger på 100 procent återstående budget, eller en som alltid ligger i brott, förtjänar ett samtal om målet, inte beröm eller skuld. Kom ihåg att varje enskild siffra är en uppmaning att ställa en fråga (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| SLI:er för användarresor | Motsvarar vad användare känner; få till antalet; lätta att förklara för icke-ingenjörer | Kräver insats att instrumentera från början till slut; kan missa interna fel som ännu inte nått användare |
| SLI:er för komponenter eller resurser (CPU, minne, kölängd) | Billiga att samla in; användbara för diagnos och kapacitet | Dåliga ersättningsmått för användarupplevelse; ger många larm som inte spelar roll |
| Rullande fönster | Jämnt; ingen avgrund vid månadsslutet; alltid aktuellt | Svårare att förklara för chefer än en kalendermånad; en dålig dag dröjer kvar under hela fönstret |
| Larm på förbrukningstakt | Anropar när målet verkligen är i fara; färre falsklarm | Mer komplext att konfigurera och testa; trösklar behöver ställas in per tjänst |

Välj få SLI:er, sätt dem med användare och låt budgeten avgöra ändringstakten. Den rätta stringensen är det lösaste mål som ändå håller användare nöjda, eftersom varje extra nia kostar mer än den förra.

## Frågor att diskutera med teamet

**1. Vad behöver en användare av den här tjänsten kunna göra, och hur skulle vi veta om de inte kunde det?**
Be var och en skriva ned de tre viktigaste sakerna en användare gör med tjänsten, utan att titta på någon instrumentpanel. Jämför listorna och notera skillnaderna mellan produkt, drift och support. Fråga sedan vilken av dessa resor som för närvarande har en SLI. Facilitatorn bör leta efter viktiga resor utan mätning och mätningar som inte beskriver någon resa.

**2. Om vårt SLO var 99,9 procent och vi nådde det, skulle användare vara nöjda, och hur vet vi det?**
Lägg det nuvarande SLO:t bredvid det senaste kvartalets supportkontakter, klagomål och nöjdhetsresultat. Fråga om de stämmer överens. Om SLO:t är grönt och användare är missnöjda behöver SLI:n eller målet arbete. Om användare är nöjda och SLO:t är rött kan målet vara striktare än någon behöver. Enas om en åtgärd som för målet och upplevelsen samman.

**3. Vad skulle vi faktiskt göra annorlunda om felbudgeten tog slut?**
Läs den nuvarande policyn för felbudget högt, eller skriv ett utkast tillsammans om ingen finns. Fråga vem som skulle sluta med vad och vem som har befogenhet att bevilja ett undantag. Facilitatorn bör kräva konkreta åtgärder, till exempel att pausa icke nödvändiga releaser och flytta namngivna personer till tillförlitlighetsarbete, snarare än allmänna avsikter. En policy som ingen tror kommer att följas är sämre än ingen policy.

**4. När tog vi senast en risk för att vi hade budget över?**
Diskutera om teamet använder sin budget eller bara vaktar den. Titta på det senaste kvartalet: fanns det en period då budgeten knappt rördes medan releaser var långsamma? Fråga vad teamet skulle ha prövat om det hade vetat att det var säkert. Frågan lyfter fram överdriven försiktighet, och svaret pekar ofta mot en kanariereleas, en omkopplare eller en snabbare pipeline som skulle låta teamet använda sin budget väl.

**5. Vilka av våra larm skulle ha gått i tid för vår senaste dåliga incident, och vilka skulle ha gått för ingenting?**
Ta den senaste betydande incidenten och spela upp larmhistoriken mot den. Räkna anropen som kom, hur lång tid efter att påverkan började och hur många anrop som kom för händelser som kostade nästan ingen budget. Diskutera om larm på förbrukningstakt skulle ha gjort det bättre. Målet är en kort lista över larmändringar, var och en med en ägare, och inte en skulddiskussion om vem som var i jour.

**6. Vem äger varje SLO, och när ändrade vi senast ett med avsikt?**
Lista SLO:erna och skriv ägaren bredvid varje, som ett team eller en roll. Fråga när vart och ett senast granskades och vad som ändrades. Ett SLO som ingen rört på ett år är ett tecken på att det inte längre ger underlag för beslut. Enas om ett granskningsdatum för varje och om vem som har rätt att avveckla ett SLO som slutat vara användbart.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam får en tydlig regel för hur fort de ska röra sig. När budget finns kvar kan de släppa oftare och pröva djärvare ändringar. När den är låg lägger de tillförlitlighetsarbete på backlogen utan en lång förhandling. De bör hjälpa till att välja indikatorerna eftersom de vet vilka resor som spelar roll, och de bör instrumentera nya funktioner med SLI:n i åtanke från början (se ämne 2.8, DORA-mätetal). Budgeten är en teamresurs att planera med, aldrig ett tal att gömma.

### Service- och driftteam

Driftteam använder SLO:er för att avgöra vad som förtjänar ett anrop och vad som kan vänta till morgonen. Larm på förbrukningstakt minskar bruset och knyter jourarbetet till det användare känner (se ämne 5.7, Mätetal för rutinarbete och jour). De håller SLI-definitionerna ärliga, underhåller telemetrin bakom dem och registrerar budgetkostnad i incident- och problemposter.

### Ledning och styrning

Ledare bör ställa tre frågor: vad är målet, hur mycket budget är kvar och vad gör vi om den tar slut? De skriver under policyn för felbudget och stöttar teamet när policyn säger att man ska sakta ner. De undviker att göra SLO-efterlevnad till ett bonusmått, vilket inbjuder till att definitioner snävas in och mjuka mål sätts.

### Kunder och användare

Kunder har nytta av att målet speglar vad de behöver och att de kan se hur tjänsten presterar mot det. De bör konsulteras när målet sätts, eftersom deras tolerans för långsamhet eller driftstopp varierar efter uppgift och tid på dygnet. Upplevelsemått, till exempel nöjdhet och ansträngning, kontrollerar om SLO:t fångar det de känner (se ämne 6.1, Mätetal för kundnöjdhet).

## I praktiken: ett exempel från tjänstehantering

En medelstor nätbutik har ett kassateam, ett plattformsteam och en servicedesk. Kassatjänsten är affärskritisk. Alla siffror i det här exemplet är illustrativa.

Teamet definierar en SLI för resan "betala för en order": andelen giltiga betalningsförfrågningar som returnerar framgång inom 2 sekunder, mätt vid lastbalanseraren. Giltiga förfrågningar utesluter teamets egna belastningstester och förfrågningar som bedrägeritjänsten avvisar av design. SLO:t är 99,9 procent över rullande 28 dagar. Fönstret bär förväntade 12 000 000 giltiga förfrågningar, så budgeten är 12 000 dåliga förfrågningar (0,1 procent). Policyn för felbudget, undertecknad av produktchefen och plattformschefen, har tre nivåer: vid 50 procent förbrukad budget behöver riskfyllda ändringar en andra granskare och en kanarieutrullning; vid 75 procent får tillförlitlighetsarbete prioritet i nästa planeringssamtal; vid 100 procent pausas icke nödvändiga funktionsreleaser tills budgeten återhämtat sig.

Dag 10 i fönstret ser teamet 7 800 dåliga förfrågningar av ungefär 4 285 714 förväntade hittills, vilket ger en SLI-måluppfyllelse på ungefär 99,82 procent, 65 procent av budgeten förbrukad och ett fönster som bara är 36 procent förflutet. Förbrukningstakten över perioden är ungefär 1,8, så i den här takten är budgeten slut omkring dag 15. En dålig driftsättning stod för 5 000 av felen. Incidentposten visar att felet varade i 22 minuter, granskningen av den större incidenten identifierar en saknad kontroll i pipelinen och incidentens budgetkostnad registreras i problemposten (se ämne 4.1, Mätetal för problemhantering).

Teamet följer policyn. Andra nivåns åtgärd gäller genast, så riskfyllda ändringar behöver en kanarieutrullning, och planeringsmötet flyttar pipelinekontrollen överst i arbetskön. Produktägaren accepterar ett stopp för en icke brådskande kampanjfunktion. Vid dag 28 är budgeten 94 procent förbrukad, och teamet avslutar fönstret inom målet.

Manipulationsrisken dyker upp i granskningen. Ett annat team, som driver butikens söktjänst, rapporterade 99,95 procent för kvartalet medan servicedesken loggade en ökning av kontakter om "sökningen fungerar inte". Vid utredningen fann plattformsteamet att sökteamet hade omdefinierat "giltig" så att förfrågningar som upprepats inom 5 sekunder utesluts, vilket tog bort många verkliga fel. Granskningen återställde den ursprungliga definitionen, omräknade kvartalet och lade till två skyddsräcken: varje ändring av en definition registreras i SLO-dokumentet med ett skäl, och SLI-måluppfyllelsen jämförs med supportkontakter varje månad. Ingen ljög, eftersom ändringen gjordes för att minska brus, så rättelsen var en tydligare definition, inte en tillrättavisning.

## Agilitet, AI, automatisering och analys

### Agilitet

En felbudget gör tillförlitlighet till ett delat beslut med produktintressenter, och den passar kontinuerlig leverans genom att visa hur mycket risk teamet kan förbruka. Se över målen i regelbunden rytm. Varningen är att ett SLO som ingen kommit överens om med användare är en gissning.

### AI

AI-funktioner behöver egna indikatorer, till exempel korrekthet och fördröjning, inte bara tillgänglighet, och målet bör säga hur ett felaktigt svar räknas. Para AI-tillgänglighet med en kvalitetsindikator uppmätt genom stickprov. Varningen är att en tjänst som svarar snabbt med ett felaktigt svar kan nå ett tillgänglighets-SLO medan den sviker användare.

### Automatisering

Beräkna indikatorer och förbrukningstakt automatiskt ur telemetri och larma på förbrukningstakt, inte på varje blipp. Mät själva larmandet på missade och falska larm. Varningen är att automatiska budgetfrysningar kan stoppa användbart arbete, så behåll ett mänskligt beslut i policyn.

### Analys

Välj indikatorer användare känner och visa fönstret och antalet händelser bakom varje. Beslutet detta ger underlag för är när man ska sakta ner ändring eller investera i tillförlitlighet. Varningen är att ett kort fönster ger en flyktig budget, så ange fönstret.

## Branschperspektiv

**Startup.** Börja med ett SLO för den viktigaste resan, mätt vid kanten, med en enkel policy som ryms på en sida. Bygg inte en plattform för dussintals SLO:er. Budgeten hjälper ett litet team att argumentera mindre om huruvida man ska släppa på en fredag.

**Småföretag.** Ett småföretag förlitar sig ofta på hostade verktyg och leverantörer, så SLI:n kan komma från en leverantörs statusdata eller en enkel extern sond. Läs leverantörens servicenivåer skriftligt och kontrollera dem mot dina egna behov.

**Storföretag.** Många tjänster, team och leverantörer höjer insatserna för konsekvens. Tillhandahåll en gemensam mall för SLO-dokument, ett gemensamt register och ett standardsätt att beräkna måluppfyllelse och budget, så att ledare kan jämföra och sammanställa utan att argumentera om definitioner. Låt SLO:t ägas av tjänsteteamet och registret kurateras centralt.

**Offentlig sektor.** Tjänster måste ofta nå lagstadgade eller publicerade mål, och ett fel kan rapporteras offentligt. Håll det avtalade eller lagstadgade åtagandet skilt från det interna målet och se till att det interna SLO:t är snävare. Dokumentera SLI-definitionen, undantagen och dataursprunget för revision och planera för tillgänglighet och för användare som inte kan välja en annan leverantör (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Motivet är färre argument och bättre beslut om tillförlitlighet. Utan ett mål konkurrerar tillförlitlighetsarbete med funktioner på styrkan hos den som argumenterar högst. Med ett mål och en budget är avvägningen synlig och överenskommen i förväg, och användare får en tjänst som är så tillförlitlig som de behöver, utan att teamet betalar för tillförlitlighet bortom den punkten.

Kostnaden har fyra delar. Den första är utformning: workshoppar för att välja resor, indikatorer och mål och för att skriva policyn. Den andra är instrumentering: telemetri på rätt ställe, sonder och pipelinen som förvandlar händelser till måluppfyllelse och budget (se ämne 1.5, Datakällor och instrumentering). Den tredje är drift: larmregler, en instrumentpanel, en kvartalsvis granskning och tiden för att hålla definitionerna aktuella. Den fjärde är alternativkostnaden när policyn pausar funktionsarbete, vilket är kostnaden för att hedra avtalet och skälet att komma överens om det innan trycket kommer.

Avkastningen visar sig i mönster ett team kan följa själv: färre anrop som inte krävde någon åtgärd, kortare debatter om huruvida man ska släppa, tillförlitlighetsarbete som schemaläggs innan budgeten tar slut i stället för efter en större incident och färre överraskningar för kunder. Beskriv nyttan genom att jämföra teamets egna siffror före och efter, till exempel anrop per jourperiod och andelen budget som förbrukats av den största incidenten.

## Antimönster och fallgropar

- **För många SLO:er.** Dussintals mål späder ut uppmärksamheten, och ingen kan säga vilket som spelar roll. Börja med de kritiska användarresorna och avveckla resten.
- **SLO lika med SLA.** Att redovisa ett tal som båda tar bort säkerhetsmarginalen och blandar en teknisk regel med ett kommersiellt löfte. Håll målet striktare än avtalet.
- **En policy som aldrig verkställs.** Om budgeten tar slut och ingenting ändras förlorar praktiken sin trovärdighet. Få ledare att skriva under policyn och registrera varje undantag med sitt skäl.
- **Att använda budgeten som ett betyg på människor.** Att rangordna ingenjörer eller jourpersonal efter förbrukad budget får människor att dölja incidenter och snäva in definitioner. Tillskriv budgeten tjänsten och diskutera orsaker på systemnivå (se ämne 1.2, Goodharts lag och mätetalens psykologi).
- **Att larma på varje dipp.** Att anropa på råa symptom skapar larmtrötthet och lär människor att ignorera anrop. Anropa på förbrukningstakt och skicka långsam förbrukning till ärenden.
- **Att ställa in och glömma.** Ett SLO som ingen granskar driver bort från vad användare behöver. Schemalägg en kvartalsvis granskning och registrera vad som ändrats och varför.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Indikatorer och mål | Tillförlitlighet beskrivs med ord; serverdrifttid redovisas | Vissa team definierar SLI:er; mål varierar och granskas sällan | Kritiska användarresor har dokumenterade SLI:er och SLO:er i en gemensam mall | SLO:er följs över tid, kontrolleras mot användaråterkoppling och skärps eller lättas med belägg | SLO:er överenskoms med kunder och leverantörer och anpassas till beroende tjänster och avtal |
| Felbudget och policy | Ingen budget; tillförlitlighet mot funktioner avgörs genom argument | En budget beräknas för några tjänster; inga överenskomna konsekvenser | En skriven policy, undertecknad av produkt och drift, med definierade utlösare | Policyefterlevnad mäts, undantag granskas, budget ger underlag för releaseplanering | Budgetbeslut samordnas över team som delar beroenden; policyn revideras när förhållandena ändras |
| Larm och respons | Tröskellarm på råa resurser; många anrop | Vissa larm på förbrukningstakt; trösklar kopierade från exempel | Larm på förbrukningstakt med flera fönster för nyckel-SLO:er, med ärenden för långsam förbrukning | Larmkvalitet mäts och ställs in med hjälp av tidigare incidenter | Larm anpassas över tjänstekedjor, och förbättring drivs av gemensamma granskningar |

## Checklista

- [ ] De kritiska användarresorna för tjänsten är listade, var och en skriven från användarens sida.
- [ ] Varje SLI är definierad som goda händelser över giltiga händelser, med undantag nedskrivna.
- [ ] SLI:er för fördröjning använder percentiler och en angiven tröskel, inte medelvärden.
- [ ] Varje SLO anger sitt mål, sitt fönster och var SLI:n mäts.
- [ ] SLO:t är striktare än varje SLA, och de två redovisas separat.
- [ ] En policy för felbudget finns, är undertecknad av produkt- och driftledare och namnger vem som får bevilja undantag.
- [ ] Larm på förbrukningstakt använder minst två tillbakablicksperioder, och långsam förbrukning skapar ärenden snarare än anrop.
- [ ] Varje incidentpost visar vilken budget den förbrukade.
- [ ] SLI-måluppfyllelsen jämförs med supportkontakter och nöjdhetsresultat varje månad.
- [ ] Varje SLO har en ägare (ett team eller en roll) och ett granskningsdatum, och ändringar loggas med skäl.
- [ ] Inget SLO-resultat används för att rangordna eller belöna individer.

## AI-prompter

**Skriv utkast till kandidat-SLI:er utifrån användarresor.**

```text
I run [service name], used by [type of users] to do [list of critical user
journeys]. We can measure at [list of measurement points, for example load
balancer, application logs, synthetic probe]. For each journey, propose one or two
candidate SLIs written as good events over valid events, with a suggested
definition of "good," "valid," and exclusions. Note the strengths and blind spots
of each measurement point. Do not invent target values or benchmarks; ask me what
users tolerate. List your assumptions.
```

**Skriv utkast till en policy för felbudget.**

```text
Help me draft an error budget policy for [service name] with an SLO of [target]
over [window]. Stakeholders are [product role] and [operations role]. Propose
trigger levels, the action at each, who may grant an exception and how it is
recorded, and how the policy is reviewed. Keep it to one page and flag decisions
that need a human sponsor. Do not invent thresholds from other organizations;
present options and trade-offs. List your assumptions.
```

**Granska ett SLO efter manipulationsrisker.**

```text
Here is our SLO document for [service name]: [paste SLI definition, exclusions,
target, window, and change log]. Identify ways the SLI could be narrowed, the
window or target changed, or events excluded in a way that would make results look
better than the user experience. For each risk, suggest a guardrail metric or
practice. Do not assume intent. List your assumptions and the questions I should
answer.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta de relaterade ämnena, till exempel tillgänglighet, larmkvalitet och större incidenter, och skyddsräcket som bör sitta bredvid varje SLO-mått.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ändringar i det här ämnet håller varje mätetal i manipuleringstabellen och varje korsreferens försedd med titel.

## Viktigaste slutsatser

- Välj några få SLI:er utifrån vad användare gör och uttryck var och en som goda händelser över giltiga händelser.
- Ett SLO under 100 procent är ett beslut om risk, och felbudgeten är det utrymme det beslutet lämnar för ändring.
- Skriv policyn för felbudget i förväg, skriv under den på ledningsnivå och registrera varje undantag.
- Larma på förbrukningstakt med mer än ett tillbakablicksfönster, så att anrop speglar verklig risk för målet.
- Vakta definitionerna: logga varje ändring och jämför SLI-resultat med vad användare rapporterar.
- Tillskriv budget till tjänster och team, aldrig individer, och granska varje SLO minst kvartalsvis.

## Referenser och vidare läsning

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Jones, C., Wilkes, J., Murphy, N., and Smith, C., "Service Level Objectives," chapter 4 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/service-level-objectives/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. "Implementing SLOs," chapter 2 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/implementing-slos/
5. "Alerting on SLOs," chapter 5 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/alerting-on-slos/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
9. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
10. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Availability](https://en.wikipedia.org/wiki/Availability).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
