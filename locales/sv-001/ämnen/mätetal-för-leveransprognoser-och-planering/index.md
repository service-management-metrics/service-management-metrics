# Mätetal för leveransprognoser och planering

**Team som levererar programvara kontinuerligt och också driftar levande tjänster behöver ärliga prognoser, inte åtaganden som pressats fram ur uppskattningar, så planera utifrån flödet av slutfört arbete, ge intervall i stället för datum och håll varje teamlokalt planeringstal utanför jämförelser och utanför mål.**

## Översikt och motiv

Intressenter ställer två frågor till varje leveransteam: "När blir det klart?" och "Hur mycket kan ni ta på er?" Det agila svaret utgår från syftena i principerna bakom det agila manifestet: leverera värdefull programvara kontinuerligt, samarbeta med intressenter varje dag, reflektera och förbättra regelbundet och bygg arbetet kring motiverade människor som får förtroende att få det gjort. Prognostisering som tjänar de syftena är ett samtal bland intressenter om sannolika utfall och risk. Det är inte ett löfte som pressats fram under tvång.

Team som driftar levande tjänster har en extra svårighet. Deras kapacitet delas mellan planerad ändring, oplanerat incidentarbete, serviceförfrågningar och förbättring. En plan som ignorerar driftbelastningen kommer att misslyckas av skäl som ingen planerade för (se ämne 2.9, Driftarbete och oplanerat arbete). It-tjänstehantering (ITSM), så som den kodifieras av ITIL, behandlar detta som en fråga om kapacitet och efterfrågan. [Kapacitetsplanering](https://en.wikipedia.org/wiki/Capacity_planning) är processen att fastställa den kapacitet en organisation behöver för att möta förändrad efterfrågan. Den agila praxisen att planera mot det teamet faktiskt kan slutföra är samma idé på teamnivå.

Det finns två breda sätt att prognostisera leverans:

- **Utifrån uppskattningar.** Teamet storleksbedömer objekt i någon enhet, summerar storlekarna och dividerar med en takt. Många team använder relativ storleksbedömning som [berättelsepoäng](https://en.wikipedia.org/wiki/Story_point), och takten kallas [velocity](https://en.wikipedia.org/wiki/Velocity_(software_development)). Det är snabbt att komma igång med, beror på teamets uppskattningsvanor och är bara meningsfullt inom ett team.
- **Utifrån flödesdata.** Teamet använder sin egen förteckning över slutfört arbete: hur många objekt det slutför per vecka (genomflöde) och hur lång tid objekt tar från start till slut (cykeltid). Eftersom det är antal och förfluten tid, inte åsikter, står de emot glidning och kan kombineras med simulering för att ge ett intervall av utfall. Det här tillvägagångssättet kommer från flödestraditionen, som inkluderar Kanban Guide, och fungerar med vilket sätt att organisera arbete som helst, inklusive team som levererar kontinuerligt utan någon fast planeringsperiod.

Det här ämnet lutar mot det andra tillvägagångssättet, eftersom kontinuerlig programvaruleverans producerar en jämn ström av slutförda objekt som flödesdata beskriver direkt (se ämne 2.1, Flödesmått, och ämne 2.2, Ledtid, cykeltid och flödeseffektivitet). Det behandlar ändå det första, eftersom många team använder uppskattningar, och eftersom missbruket av velocity hör till de vanligaste sätten leveransmått går fel.

Prognoser är [prognostisering](https://en.wikipedia.org/wiki/Forecasting) av en osäker framtid, och osäkerhet är poängen. Idén om [osäkerhetskonen](https://en.wikipedia.org/wiki/Cone_of_Uncertainty) säger att tidiga uppskattningar är de mest osäkra. [Planeringsfelslutet](https://en.wikipedia.org/wiki/Planning_fallacy) säger att människor underskattar hur lång tid deras egna planer tar även när de vet att liknande planer blev sena. Bra prognosmått namnger detta och mäter hur ofta prognoser träffar.

Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) spelar roll här, eftersom prognoser och planer lätt blir löften och sedan mål. När ett team bedöms efter att hålla ett datum döljer det risk, tummar på kvaliteten eller underskattar medvetet (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Nyckelprinciper

- **Prognostisera utifrån slutfört arbete.** Det teamet har levererat är ett bättre belägg än det någon tror att det kommer att leverera.
- **Ge ett intervall med en sannolikhet.** "Troligen i slutet av nästa månad, mycket troligt i slutet av månaden efter" slår ett enda datum.
- **Planera mot verklig kapacitet.** Ta med driftarbete, lämna tid för förbättring och planera inte för full utnyttjandegrad.
- **Håll uppskattningar lokala.** Varje storleksenhet är ett privat planeringsverktyg för ett team, aldrig en grund för jämförelse.
- **Mät prognoskvalitet, inte bara leverans.** En prognos som är rätt av fel skäl är tur.
- **Behandla prognosen som delad.** Intressenter och team bygger den tillsammans och reviderar den när fakta ändras.
- **Lita på teamet.** Människor som får förtroende och stöd ger ärliga prognoser.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Träffgrad för prognoser | Andel prognoser där det faktiska resultatet föll inom det angivna intervallet | prognoser vars faktiska utfall låg inom det angivna intervallet / gjorda prognoser | procent | Prognoslogg och leveransposter | Kapacitets- och prestandahantering; ständig förbättring | Prognosnoggrannhet i planeringssamtal | Månadsvis |
| Prognosintervallets bredd | Hur brett det angivna intervallet var, i förhållande till medianprognosen | (övre gräns minus nedre gräns) / medianprognos | kvot | Prognoslogg | Kapacitets- och prestandahantering | Osäkerhetskonens avsmalning | Månadsvis |
| Måluppfyllelse i leverans | Andel angivna leveransmål som uppfylldes för perioden, bedömd efter resultat | uppfyllda mål / satta mål | procent | Målposter överenskomna med intressenter | Hantering av servicenivåer; ständig förbättring | Resultatgranskning med intressenter | Månadsvis eller per release av ett mål |
| Omfattningsändringsgrad | Andel åtaget arbete som lades till, togs bort eller omstorleksbedömdes efter att prognosen gjorts | objekt som lagts till eller tagits bort efter prognosen / objekt i den ursprungliga prognosen | procent | Ändringshistorik i ärendehanteringssystemet | Ändringsmöjliggörande; hantering av servicenivåer | Anpassning av backlogen till återkoppling | Månadsvis |
| Kapacitetsfördelning | Andel av teamets kapacitet som läggs på förändring, driftarbete och förbättring | slutförda objekt eller timmar i varje kategori / alla slutförda objekt eller timmar | procent | Ärendehanteringssystem med arbetstyp | Kapacitets- och prestandahantering; incidenthantering | Fördelning av arbetstyper | Månadsvis |
| Genomflödets stabilitet | Variation i veckovist genomflöde | standardavvikelse för veckovist genomflöde / medelvärde av veckovist genomflöde | kvot | Ärendehanteringssystem | Kapacitets- och prestandahantering | Flödets förutsägbarhet | Månadsvis |
| Lokal velocity | Ett enskilt teams slutförda arbete i dess egen storleksenhet per planeringsperiod | summan av uppskattningar för objekt som uppfyller definitionen av klart under perioden | teamdefinierade poäng | Ärendehanteringssystem | Kapacitets- och prestandahantering | Hjälpmedel för teamets kapacitetsplanering | Per planeringsperiod |

Definiera klockorna. En prognos är "gjord" när den registreras och delas med intressenter, och "uppfylld" när resultatet är släppt och i bruk, inte när koden slås ihop. Genomflöde räknar objekt som uppfyller definitionen av klart, där objekt av olika typ räknas i separata serier om deras storlek skiljer sig mycket. Lokal velocity visas bara för teamet som äger den.

## Rekommendationer

### Prognostisera utifrån flöde

**1. Bygg prognosen på genomflöde och cykeltid.** Räkna objekten som blev klara varje vecka de senaste 12 till 26 veckorna. Använd den historiken för att prognostisera hur många objekt som blir klara till ett givet datum, eller när en uppsättning objekt sannolikt blir klara. En simulering med [Monte Carlo-metoden](https://en.wikipedia.org/wiki/Monte_Carlo_method), som drar ur teamets egen historik tusentals gånger, förvandlar historiken till ett sannolikhetsintervall. Enkla kalkylblad eller små skript gör detta bra. Ange historikfönstret och prognosens datum.

**2. Redovisa percentiler av utfall.** Säg "50 procent troligt senast den 14 mars, 85 procent troligt senast den 4 april, 95 procent troligt senast den 18 april." Varje percentil är ett ärligt uttalande om risk, och intressenter kan välja hur mycket marginal de behöver. Ett enda datum döljer det valet (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

**3. Använd cykeltidspercentiler för enskilda objekt.** För ett enskilt objekt svarar den 85:e percentilen av tidigare cykeltider på "hur lång tid kan det här ta?" bättre än någon uppskattning. Visa den på tavlan, som en linje mot vilken åldern på objekt under arbete kan jämföras (se ämne 2.1, Flödesmått).

**4. Håll objektstorlekarna ungefär jämna.** Genomflödesbaserad prognostisering fungerar bäst när objekten är små och tillräckligt lika för att räknas. Team kommer dit genom att skära arbetet i den minsta bit som ändå levererar värde, en vana som i sig hör till kontinuerlig programvaruleverans. Om objekt varierar mycket, följ separata serier för olika arbetstyper.

**5. Uppdatera prognosen när fakta ändras.** En prognos är en levande vy. När omfattningen ändras, teamets storlek ändras eller en stor incident förbrukar en vecka, kör om den och berätta för intressenterna. Versionshantera prognoserna så att du kan bedöma dem senare.

### Planera mot verklig kapacitet

**6. Fördela kapacitet efter arbetstyp.** Registrera vilken andel av teamets slutförda arbete som var planerad ändring, oplanerat driftarbete, serviceförfrågningar och förbättring. Planera för den andel erfarenheten visar, inte för ett ideal. Team som driftar levande tjänster upptäcker ofta att en tredjedel eller mer av deras kapacitet går till driftarbete, och siffran är deras att mäta, inte att låna (se ämne 2.9, Driftarbete och oplanerat arbete).

**7. Reservera kapacitet för förbättring.** Ständig förbättring är en stående del av arbetet, så planera tid för den i fördelningen och skydda den. Team som klämmer ut den under varje upptagen period ser sin driftbelastning stiga, vilket klämmer ut den ännu mer. Följ förbättringsandelen och förbättringarnas effekt på driftandelen.

**8. Planera inte för full utnyttjandegrad.** Ett team planerat på 100 procent har inget utrymme för variation, och köer växer när utnyttjandegraden närmar sig gränsen (se ämne 2.3, Pågående arbete och köteori). Lämna slack för det oväntade och behandla det som ett designval och inte som slöseri.

### Använd uppskattningar varsamt om du använder dem

**9. Behandla velocity som ett lokalt planeringshjälpmedel.** Om ett team storleksbedömer arbete i berättelsepoäng kan dess velocity hjälpa det att avgöra hur mycket det ska ta på sig i nästa planeringssamtal, och den bör bara jämföras med samma teams nära förflutna. Jämför aldrig team, sätt aldrig ett velocitymål och redovisa aldrig velocity uppåt som mått på produktivitet. Poäng har ingen gemensam enhet mellan team, och trycket att höja talet blåser upp uppskattningarna utan att leverera mer.

**10. Jämför uppskattningar med faktiska cykeltider då och då.** Rita uppskattningar mot hur lång tid objekt tog. Om stora uppskattningar inte tar längre tid än små köper uppskattningsarbetet inte mycket, och att räkna objekt kan tjäna teamet lika väl. Om de korrelerar bär uppskattningarna information värd att behålla. Låt teamet avgöra med data.

### Mät om det fungerar

**11. Logga varje prognos och poängsätt den.** Registrera prognosen, intervallet och det faktiska resultatet och beräkna sedan träffgraden. En välkalibrerad prognos vid den 85:e percentilen bör slå in ungefär 85 procent av gångerna. Om träffarna ligger långt över eller under, justera metoden. Dela loggen med intressenter, eftersom förtroendet för prognosen byggs av meritlistan.

**12. Bedöm leveransmål efter resultat.** Ett mål som "kunder kan betala mot faktura" är uppfyllt när kunder kan göra det, inte när uppgifterna är stängda. Enas om mål med intressenter med enkla ord, granska dem tillsammans och registrera resultatet. Det håller planeringen knuten till kontinuerligt samarbete och avskräcker från att leverera arbete som ingen använder (se ämne 1.3, Resultat före leverans: att välja vad som ska mätas).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Träffgrad för prognoser | Att ange mycket breda intervall så att varje prognos träffar; att göra om prognosen i efterhand | Prognosintervallets bredd; behåll den ursprungliga prognosen i loggen; jämför intervall med kollegors historik |
| Prognosintervallets bredd | Att smalna av intervall för att se självsäker ut | Träffgrad för prognoser; kräv att intervallet byggs på registrerad historik |
| Måluppfyllelse i leverans | Att sätta lätta mål; att omdefiniera ett mål i efterhand; att räkna leverans som resultat | Intressenter bedömer resultatet; målformuleringen sparas i en logg; kontrollera användningsdata för den levererade ändringen |
| Omfattningsändringsgrad | Att frysa omfattningen genom att vägra giltiga ändringar; att dölja omfattningsändring genom att omstorleksbedöma objekt | Intressenternas nöjdhet med responsivitet; ändringsskäl registreras |
| Kapacitetsfördelning | Att felmärka driftarbete som förbättring; att dölja driftbelastning genom att arbeta utanför tavlan | Stäm av mot incident- och förfrågningsposter; stickprova objekt för typ |
| Genomflödets stabilitet | Att dela upp objekt i triviala bitar för att höja antalet; att stänga objekt utan att slutföra dem | Fördelning av objektstorlek; återöppningsgrad; stickprova för levererat värde |
| Lokal velocity | Att blåsa upp uppskattningar; att dela upp berättelser för att kräva poäng; att jämföra team | Håll den teamprivat; jämför med genomflöde och cykeltid; sätt aldrig ett mål |

En sund avläsning är prognoser som slår in ungefär i den angivna takten, mål som intressenter är överens om uppfylldes, en kapacitetsbild som stämmer med vad teamet upplever och ett velocitytal som, om det finns, används av teamet och ingen annan.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Flödesbaserad prognostisering | Använder verkliga data, står emot uppblåsning, ger intervall | Kräver stadig historik och objekt av liknande storlek |
| Uppskattningsbaserad prognostisering | Snabb att komma igång med, uppmuntrar till diskussion om arbetet | Subjektiv, blåses upp under press, inte jämförbar mellan team |
| Åtagande med ett enda datum | Enkelt att kommunicera | Döljer risk; straffar ärlighet |
| Intervall med sannolikhet | Ärligt om osäkerhet | Svårare för vissa intressenter att läsa till en början |
| Planering vid full utnyttjandegrad | Ser effektivt ut | Köer växer; inget utrymme för incidenter eller lärande |
| Planerad slack | Absorberar variation och stöder förbättring | Ser ut som tomgångskapacitet för de ointresserade |

Svaret i klartext är att börja från flödesdata, lägga till uppskattningar bara där de hjälper teamet och tala i intervall. Där ett avtal kräver ett datum, ge datumet som den 85:e eller 95:e percentilen stöder och säg vad som skulle ändra det.

## Frågor att diskutera med teamet

**1. Vad skulle vi säga om en intressent frågade "när blir det klart" och ville ha ett ärligt svar?**
Be teamet svara för ett verkligt arbetsstycke, först med ett enda datum och sedan med ett intervall. Notera skillnaden i hur bekvämt varje svar känns. Facilitatorn bör fånga vad teamet skulle behöva veta för att kunna ge intervallet ärligt, till exempel historik, objektstorlek och kända risker.

**2. Hur mycket av vår kapacitet går egentligen till planerad ändring, och hur vet vi det?**
Titta på de senaste tre månadernas slutförda arbete per typ. Jämför med planen teamet gjorde. Samtalet avslöjar ofta att driftarbetet är större än planerat och att förbättringsarbetet är mindre. Enas om vad fördelningen bör vara och vilket beslut som skulle ändra den.

**3. Var hjälper våra uppskattningar oss, och var kostar de bara tid?**
Rita ett stickprov av uppskattningar mot faktiska cykeltider. Diskutera om större uppskattningar verkligen var långsammare. Om sambandet är svagt, fråga vad teamet skulle göra annorlunda om det bara räknade objekt. Besluta om ni ska fortsätta, förenkla eller sluta uppskatta under en prövoperiod.

**4. Vem ser våra planeringstal på teamnivå, och vad händer med dem?**
Följ varje planeringstal från teamet till dess publik. Fråga om någon jämför team med det eller sätter mål. Om så är fallet, diskutera hur man stoppar det och vad man kan erbjuda i stället. Facilitatorn bör vara beredd att förklara att lokala tal förlorar sitt värde när de reser.

**5. När misslyckades en prognos av oss, och vad lärde vi oss?**
Välj en miss och följ den. Var det omfattningsändring, en stor incident, ett beroende eller ett felaktigt antagande? Vad hade flaggat det tidigare? Enas om en förändring av prognospraxisen, till exempel att registrera beroenden eller uppdatera prognosen varje vecka.

**6. Vilka mål uppfyllde vi förra kvartalet, och vem sa det?**
Lista leveransmålen och vem som bedömde vart och ett. Om teamet bedömde sina egna mål, diskutera hur intressenter kan tas med. Samtalet stöder kontinuerligt samarbete, och det visar om mål handlar om resultat eller om uppgifter.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam äger prognosen och flödesdata som stöder den. De bör publicera intervall, hålla objekt små och göra om prognosen när fakta ändras. Team som väljer att storleksbedöma arbete i poäng bör hålla talen inom teamet. Syftet är en jämn ström av slutfört, värdefullt arbete och en prognos som intressenter litar på eftersom den har en meritlista.

### Service- och driftteam

Driftteam bär den efterfrågan som stör planer. De bör dela incident- och förfrågningsbelastning med leveransteamen, så att kapacitetsplaner utgår från verkliga siffror. Driftteam som också levererar ändring kan använda samma flödesbaserade prognostisering för sitt eget arbete. Gemensam planering av förändrings- och driftarbete är ett bra ställe för kontinuerligt samarbete över båda grupperna.

### Ledning och styrning

Ledare avgör om en prognos är ett riskuttalande eller ett löfte. De bör be om intervall, finansiera slack och förbättring och motstå att använda velocity eller genomflöde för att jämföra team. Styrande organ bör titta på träffgrad för prognoser över tid och på måluppnåelse, och behandla upprepade missar som en signal om systemet, till exempel beroenden och driftbelastning, inte om människorna.

### Kunder och användare

Användare bryr sig om när de får se ändringen och om den kommer att hjälpa. Ett intervall med en angiven säkerhet tjänar dem bättre än ett datum som glider. De bör vara delaktiga i att bedöma om mål uppfylldes, eftersom det är de som känner resultatet. Att berätta för användare när en prognos ändras, och varför, är en del av att behandla dem som medarbetare.

## I praktiken: ett exempel från tjänstehantering

Ett regionalt energibolags digitala team bygger en kundportal för fakturering och driftar den i produktion. Siffrorna nedan är illustrativa.

Teamet har av sina intressenter ombetts ange ett datum för en ny funktion för betalningsplaner bestående av 22 objekt. Förra kvartalet gav teamet ett fast datum baserat på sina uppskattningar, missade det med fem veckor på grund av två större incidenter och förlorade intressenternas förtroende. Den här gången hämtar leveranschefen genomflödet för de senaste 20 veckorna, som varierar från 3 till 9 objekt i veckan med en median på 6, och noterar att driftarbete stod för ungefär 35 procent av de slutförda objekten.

Hon kör en simulering utifrån historiken. Den visar att 22 objekt blir klara inom 4 veckor ungefär hälften av gångerna, inom 6 veckor ungefär 85 procent av gångerna och inom 8 veckor ungefär 95 procent av gångerna. Hon presenterar de tre datumen för intressenterna, tillsammans med antagandena: teamets storlek oförändrad, driftbelastning som de senaste 20 veckorna och ingen ny omfattning. En produktägare frågar om en lansering på ett visst faktureringsdatum åtta veckor bort. Teamet och intressenterna enas om att planera för 85-procentsdatumet, behålla de sista två veckorna som buffert och sätta en kontrollpunkt varannan vecka för att göra om prognosen.

Vid den första kontrollpunkten har ett fel i betalningsgatewayen tagit tre dagar och simuleringen flyttar 85-procentsdatumet en vecka. Teamet berättar för intressenterna samma dag, med skälet, och de enas om att flytta ut ett objekt med lågt värde. Funktionen går live på buffertdatumet. Leveransmålet, "kunder kan ställa in en betalningsplan utan att ringa", bedöms av produktägaren och en kundpanel efter tre veckor. Det uppfylls för de flesta kunder, och ett kommentarstema visar förvirring kring en skärm, som läggs i backlogen. Teamet registrerar att dess träffgrad för prognoser för kvartalet är fyra av fem. Intressenterna ber leveranschefen ta med prognosintervall till nästa planeringstillfälle, och teamet slutar använda berättelsepoäng eftersom att räkna objekt gav samma svar.

## Agilitet, AI, automatisering och analys

### Agilitet

Planera utifrån flödet av slutfört arbete och revidera ofta med intressenter, med intervall i stället för datum. En bra praxis är att prognostisera med teamets egen genomflödeshistorik och visa intervallet vid varje regelbunden granskning. Varningen är att varje teamlokalt planeringstal, som velocity, blir ett mål så fort det jämförs mellan team.

### AI

AI-stöd kan ändra genomflödet snabbt och ojämnt, vilket gör gammal historik till en dålig vägvisare en tid. Markera datumen då AI-verktyg infördes i genomflödesdiagrammet, vidga prognosintervallet efter ändringen och para träffgrad för prognoser med omarbete. Varningen är att AI-genererade uppskattningar ser precisa ut, så behandla dem som underlag för diskussion och kontrollera dem mot teamets egen historik.

### Automatisering

Beräkna prognoser automatiskt ur ärendehanteringsdata, så att de uppdateras utan möte. Följ noggrannheten hos de prognoserna som ett mått på prognosmetoden. Varningen är att en automatisk prognos som visas utan sitt intervall inbjuder till falsk säkerhet, så visa intervallet som standard.

### Analys

Använd simulering eller percentilbaserade intervall ur tidigare genomflöde och redovisa träffgrad för prognoser med antalet prognoser bakom. Beslutet detta ger underlag för är vad som ska utlovas och när man ska planera om. Varningen är att prognoser misslyckas när omfattning eller kapacitet förskjuts, så följ omfattningsändringsgraden bredvid dem.

## Branschperspektiv

**Startup.** Prioriteringar ändras snabbt, så håll prognoser korta och grova. Följ genomflödet från början, eftersom det inte kostar något, och ge grundare intervall. Motstå att importera ett planeringssystem byggt för stora team.

**Småföretag.** En eller två personer kan göra förändrings- och driftarbete tillsammans, utan ledig kapacitet. Var uttrycklig med uppdelningen och tala om för ägaren när en incident kommer att flytta ett datum. Ett enkelt veckovist antal slutförda objekt räcker.

**Storföretag.** Många team och beroenden gör att prognoser beror på andra teams flöde. Prognostisera varje team ur dess egna data, gör beroenden synliga och kombinera intervall varsamt, eftersom att addera bästa fall ger en vilseledande summa. Undvik sammanställningar som jämför team efter velocity.

**Offentlig sektor.** Fasta budgetar, upphandling och lagstadgade datum skapar tryck mot åtaganden med ett enda datum. Ange datumet som den valda percentilen stöder, förklara antagandena och registrera omfattningsavvägningar öppet. Där ett obligatoriskt datum finns, planera omfattningen så att den passar (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaden är låg. Genomflödes- och cykeltidsdata finns vanligen i teamets ärendehanteringssystem. Ett prognoskalkylblad eller ett litet skript tar en dag att bygga, och en prognos tar minuter att uppdatera. Den återkommande kostnaden är tiden för att logga prognoser och resultat och för att hålla ett kort kontrollpunktssamtal med intressenter.

Avkastningen kommer från färre överraskningar och bättre beslut. Intressenter som förstår risken kan välja en buffert, justera omfattningen eller ordna om arbetet tidigt. Team lägger mindre tid på uppskattningsceremonier om att räkna objekt tjänar lika väl. Konflikter om missade datum och de kvalitetsgenvägar de framkallar minskar. Bygg caset på din egen meritlista: andelen prognoser som höll, tiden som läggs på uppskattning och omfattningsändringar som gjordes tidigt snarare än sent. Låna inte förutsägbarhetssiffror från andra organisationer.

## Antimönster och fallgropar

- **Att behandla en prognos som ett åtagande.** Det förvandlar prognosen till ett mål, och ärlighet blir kostsamt. Presentera intervall och revidera dem.
- **Att jämföra team efter velocity.** Poäng är lokala, och jämförelse blåser upp dem. Jämför ett team bara med dess eget förflutna.
- **Att planera vid full utnyttjandegrad.** Variation blir fördröjning. Lämna slack.
- **Att ignorera driftarbete.** Planer misslyckas på den belastning ingen planerade för. Mät och planera fördelningen.
- **Att använda ett enda datum för allt.** Använd percentiler och säg vilken du valde.
- **Att uppskatta mer precist än data stöder.** Detaljerade uppskattningar för avlägset arbete är de minst pålitliga. Prognostisera avlägset arbete grovt.
- **Att sätta ett velocity- eller genomflödesmål.** Talet kommer att stiga och värdet gör det inte.
- **Att aldrig poängsätta prognoser.** Utan en meritlista kan förtroende inte växa.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Prognosmetod | Gissningar med ett enda datum | Uppskattningar summerade för hand | Flödesbaserade intervall med percentiler | Prognoser loggade och poängsatta; metoden trimmas utifrån träffgrad | Prognoser kombineras över team och beroenden, delas live med intressenter |
| Kapacitetsplanering | Planer ignorerar driftarbete | Driftbelastningen är ungefärligt känd | Kapacitet fördelas per arbetstyp utifrån data | Fördelningen granskas mot resultat; förbättringstid skyddas | Kapacitet planeras gemensamt med leverantörer och drift över tjänster |
| Mål och användning av siffror | Mål är uppgiftslistor | Mål är nedskrivna | Mål bedöms efter resultat med intressenter | Missar analyseras som systemsignaler; lokala tal hålls privata | Mål sätts och bedöms i samarbete med användare; lärande delas över team |

## Checklista

- [ ] Prognoser byggs på teamets egen historik över genomflöde och cykeltid.
- [ ] Prognoser ges som intervall med percentiler, med antaganden angivna.
- [ ] Varje prognos loggas med sitt intervall och faktiska resultat.
- [ ] Träffgrad och intervallbredd för prognoser granskas månadsvis.
- [ ] Kapacitet fördelas per arbetstyp, inklusive driftarbete och förbättring.
- [ ] Planerad utnyttjandegrad lämnar slack för variation och incidenter.
- [ ] Varje storleksenhet eller velocity är privat för teamet och bär inget mål.
- [ ] Leveransmål skrivs som resultat och bedöms med intressenter.
- [ ] Omfattningsändringar registreras med skäl.
- [ ] Prognoser uppdateras när fakta ändras, och intressenter informeras.

## AI-prompter

**Bygg en genomflödesbaserad prognos.**

```text
Our team finished these numbers of items in each of the last [number] weeks:
[paste weekly counts]. We want to know when [number] items are likely to be
finished. Explain how to produce a probability range using our own history,
give a worked example of a simple simulation method, and describe what
assumptions it makes. Do not invent history or benchmark values. List your
assumptions and the conditions under which the forecast would not apply.
```

**Granska hur vi använder uppskattningar.**

```text
We size items as [unit] and use [practice] to plan. Here is a sample of
[number] finished items with estimates and actual cycle times in days:
[paste data]. Describe whether estimates predict cycle time in this sample,
what that implies for how much effort estimating deserves, and what we could
try instead. Do not claim results beyond the data. List your assumptions.
```

**Planera kapacitet över förändrings- och driftarbete.**

```text
Over the last [period], our team finished [counts] items of these types:
[planned change, incidents, requests, improvement]. Propose a capacity
allocation for the next [period] that leaves slack, and describe how to
explain it to stakeholders. Suggest how to detect if operational work is
being mislabeled. Do not invent industry ratios. List your assumptions.
```

**Skriv ett utkast till en prognosgranskning med intressenter.**

```text
Draft an agenda and a one-page summary for a forecast checkpoint on
[piece of work]. Data: original forecast [range], current status [description],
changes since the last checkpoint [list]. Include the updated range, what
changed it, options for scope or timing, and the questions we need
stakeholders to answer. Use plain language. List your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett prognos- eller planeringsmätetal.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en reviderad post för ett planeringsmätetal behåller sin manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- Prognostisera utifrån flödet av slutfört arbete och ge intervall med sannolikheter i stället för enstaka datum.
- Planera mot verklig kapacitet, inklusive driftarbete, förbättringstid och slack.
- Behandla varje uppskattningsenhet eller velocity som ett privat hjälpmedel för ett team, aldrig som ett mål eller en jämförelse.
- Poängsätt dina prognoser: träffgraden bygger förtroende.
- Bedöm leveransmål efter resultat, tillsammans med intressenter och användare.
- Lita på och stöd teamet: ärliga prognoser kommer från människor som inte straffas för osäkerhet.

## Referenser och vidare läsning

1. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Humble, J., and Farley, D., *Continuous Delivery*, Addison-Wesley, 2010.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Cohn, M., *Agile Estimating and Planning*, Prentice Hall, 2005.
6. Kahneman, D., and Tversky, A., "Intuitive prediction: biases and corrective procedures," *TIMS Studies in Management Science*, 12, 1979.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
9. Wikipedia, [Story point](https://en.wikipedia.org/wiki/Story_point).
10. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
11. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
12. Wikipedia, [Cone of Uncertainty](https://en.wikipedia.org/wiki/Cone_of_Uncertainty).
13. Wikipedia, [Planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method).
