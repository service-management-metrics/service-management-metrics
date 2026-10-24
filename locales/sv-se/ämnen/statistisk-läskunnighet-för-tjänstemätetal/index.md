# Statistisk läskunnighet för tjänstemätetal

**Ärende- och flödesdata är sneda, ojämna och ofta tunna, så redovisa medianer och höga percentiler i stället för medelvärden, säg hur många objekt som ligger bakom varje andel och skilj vanlig variation från verklig förändring innan någon reagerar.**

## Översikt och motiv

De flesta tjänstemätetal kommer som en enda siffra på en instrumentpanel: genomsnittlig lösningstid, procent incidenter lösta inom målet, ärenden stängda den här veckan. En enda siffra känns exakt. Den är oftast en hoptryckt sammanfattning av en rörig samling händelser, och hoptryckningen avgör vad läsaren ser. Statistisk läskunnighet är i den här bokens mening den lilla uppsättning vanor som håller sammanfattningen ärlig: välj en sammanfattning som passar datans form, vet hur mycket data som ligger bakom den och skilj verklig förändring från brus.

Datans form är det första problemet. Tidsmått som lösningstid, cykeltid och väntetid är begränsade nedåt av noll och har en lång svans åt höger. De flesta objekt blir klara snabbt, och några få tar mycket lång tid. Sådana data är [sneda](https://en.wikipedia.org/wiki/Skewness), och aritmetiskt medelvärde dras mot svansen, så ett fastnat ärende kan flytta genomsnittet mer än hundra rutinärenden. [Medianen](https://en.wikipedia.org/wiki/Median), mittvärdet när objekten sorteras, påverkas mycket mindre. En [percentil](https://en.wikipedia.org/wiki/Percentile) generaliserar den: den 85:e percentilen är värdet som 85 procent av objekten blir klara inom. Varaktigheter av det här slaget modelleras ofta med en [lognormalfördelning](https://en.wikipedia.org/wiki/Log-normal_distribution), där värdets logaritm är symmetrisk. Läxan är att "typiskt" och "genomsnittligt" skiljer sig åt för sneda data.

Urvalsstorleken är det andra problemet. Ett team som löser 12 incidenter med prioritet 1 under ett kvartal och rapporterar "83 procent inom målet" beskriver 10 av 12. Ytterligare ett missat mål skulle flytta siffran åtta punkter. Det ärliga uttalandet inkluderar antalet, och ofta ett intervall. Ett [konfidensintervall](https://en.wikipedia.org/wiki/Confidence_interval) är ett intervall beräknat ur data som uttrycker hur långt det sanna värdet rimligen kan ligga från det observerade. Intervall är breda för små urval och smala för stora, vilket är rätt budskap för ett kvartal med 12 incidenter.

Variation är det tredje problemet. Varje process producerar siffror som vickar från vecka till vecka utan att något har ändrats. Walter Shewhart, som arbetade med tillverkningskvalitet på 1920-talet, skilde denna rutinmässiga vickning från signaler som förtjänar utredning, och gav oss [kontrolldiagrammet](https://en.wikipedia.org/wiki/Control_chart). Att tillämpa diagram av det här slaget på en process kallas [statistisk processtyrning](https://en.wikipedia.org/wiki/Statistical_process_control). Delar av det sista misstaget är [regression mot medelvärdet](https://en.wikipedia.org/wiki/Regression_toward_the_mean): ett extremt värde tenderar att följas av ett mindre extremt, så veckan efter en förskräcklig vecka ser ut som en återhämtning oavsett om någon gjort något.

Agil flödespraxis, till exempel Kanban Guides användning av percentiler av cykeltid och ålder på arbetsobjekt, ber redan om fördelningar och prognoser uttryckta som sannolikheter (se ämne 2.1, Flödesmått). I ITIL 4 beror praktikerna mätning och rapportering och ständig förbättring båda på mått som betyder det de ser ut att betyda, och hantering av servicenivåer beror på mål som sätts mot realistisk variation. Statistisk läskunnighet är det gemensamma lagret under båda. Den stöder också skyddsräcket i ämne 1.2, Goodharts lag och mätetalens psykologi: ett team som visar hela fördelningen har färre ställen att gömma ett manipulerat medelvärde.

Vanlig variation (common-cause) är inbyggd i en process, och variation av särskild orsak (special-cause) kommer från något specifikt som ändrades eller gick fel. Ett servicenivåavtal (SLA) är ett dokumenterat åtagande gentemot en kund, och ett servicenivåmål (SLO) är ett mål för ett mått.

## Nyckelprinciper

- **Anpassa sammanfattningen till formen.** Använd medianer och percentiler för varaktigheter och visa hela fördelningen när beslutet spelar roll. Reservera medelvärdet för data som är ungefär symmetriska, eller för summor som kostnad.
- **Varje andel bär sitt antal.** En procentsats utan täljare och nämnare är ett påstående utan belägg. Under ett angivet minimiantal, visa de råa objekten i stället för en andel.
- **Vanlig variation är inte nyheter.** Känn till ett måtts normala intervall innan du reagerar. Svara på signaler, inte på varje rörelse.
- **Osäkerhet är en del av svaret.** Uttryck prognoser som sannolikheter ("85 procent av objekten blir klara inom 9 dagar") och uppskattningar som intervall, och motstå falsk precision.
- **Visa fördelningar för teamet som äger arbetet.** Råa objekt och histogram gör ovanliga fall synliga, och de gör tyst manipulation svårare.
- **Korrelation, urval och tidpunkt förklarar många "förbättringar".** Fråga vad mer som ändrades, vem som lämnades utanför data och om utgångspunkten var ovanligt dålig.
- **Håll statistiken proportionerlig.** Ett team behöver en handfull tekniker som används konsekvent, inte en statistikkurs. Förklara varje diagram med enkla ord.

## Mätetalsdefinitioner

Mätetalen nedan beskriver den statistiska kvaliteten hos en mätetalspraktik och fördelningen av tjänstearbete. Tidsmått använder de klockor som anges i varje rad, och definitionerna är avsedda att återanvändas av de ämnen som följer (se ämne 3.3, Svarstid och lösningstid för incidenter, och ämne 2.2, Ledtid, cykeltid och flödeseffektivitet).

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mediantid för lösning | Mittvärdet av lösningstiderna för incidenter som lösts under perioden | 50:e percentilen av (tidsstämpel för löst minus tidsstämpel för skapat) över incidenter som lösts under perioden; klockan startar när ärendet skapas och stoppar vid lösning; pauser redovisas separat, dras inte av; avbrutna ärenden och dubbletter utesluts | timmar eller dagar | Statushistorik i ITSM-verktyget | Incidenthantering; mätning och rapportering | Median för cykeltid | Veckovis eller månadsvis |
| Lösningstid vid hög percentil | Tiden inom vilken de flesta incidenter löses, med percentilen namngiven | 85:e (eller 95:e) percentilen av samma förflutna tid som ovan; beräknas bara om minst 20 objekt lösts, annars listas de råa objekten | timmar eller dagar | Statushistorik i ITSM-verktyget | Incidenthantering; hantering av servicenivåer | Prognos med percentil av cykeltid | Veckovis eller månadsvis |
| Ålder på äldsta öppna objekt | Åldern på det äldsta objekt som fortfarande är öppet, plus antalet objekt som är äldre än den höga percentilen | nu minus tidsstämpel för skapat för öppna objekt, ingen paus avdragen; räknar alla öppna objekt i tjänstekön inklusive de som väntar på kunden | dagar | ITSM-verktyg eller ärendehanteringssystem | Incidenthantering; problemhantering | Ålder på arbetsobjekt | Veckovis |
| Täckning av andelsrapportering | Andel rapporterade andelar som visar täljare, nämnare och en kontroll av minimiantal | andelar som rapporterats med antal och en urvalsflagga / rapporterade andelar; räknar bara andelar som publicerats i periodens granskningspaket | procent | Mätetalsregister (se ämne 1.4, Styrning och ägarskap av mätetal) | Mätning och rapportering | Arbetsöverenskommelser | Kvartalsvis |
| Signalfrekvens i kontrolldiagram | Andel punkter i ett måtts kontrolldiagram som signalerar variation av särskild orsak enligt teamets skrivna regler | punkter som flaggas enligt reglerna / ritade punkter, över de senaste 20 eller fler punkterna; reglerna fastställs i förväg och loggas | procent | Kontrolldiagramverktyg eller kalkylblad | Ständig förbättring | Retrospektiv granskning av processen | Månadsvis |
| Intervallbredd | Bredden på det angivna osäkerhetsintervallet för en huvudandel | övre gräns minus nedre gräns för intervallet, med metoden som namngivits i registret, för periodens huvudandel | procentenheter | Beräknas från ITSM-antal | Hantering av servicenivåer | Prognosintervall i planering | Månadsvis |

Där ett avtal anger ett medelvärde, redovisa den avtalade siffran och visa medianen och percentilen bredvid.

## Rekommendationer

### Sammanfatta tidsdata ärligt

**1. Använd som standard medianen och en namngiven hög percentil.** För lösningstid, cykeltid och uppfyllandetid, publicera medianen och den 85:e eller 95:e percentilen tillsammans, och skriv percentilen i mätetalets namn. Medianen säger vad som är typiskt, och den höga percentilen säger vad en kund rimligen kan lovas. Om du måste välja ett enda tal för ett åtagande, välj percentilen.

**2. Visa formen såväl som sammanfattningen.** Ett histogram eller ett spridningsdiagram över lösningstid efter stängningsdatum visar kluster, långa svansar och plötsliga skiften som ingen sammanfattning visar. När bilden och siffran är oense, tro på bilden och undersök siffran.

**3. Lägg till åldern på det äldsta öppna objektet.** Percentiler av avslutat arbete ser bakåt och ignorerar allt som fortfarande sitter fast. Redovisa det äldsta öppna objektet och hur många öppna objekt som redan är äldre än din höga percentil (se ämne 2.1, Flödesmått). Det är det enskilt mest användbara korrektivet för medelvärden som förbättras för att svåra objekt lämnas att åldras.

### Respektera små urval och osäkerhet

**4. Publicera antalet med varje andel.** Skriv "10 av 12 lösta inom målet" i stället för "83 procent". Lägg till en regel att andelar baserade på färre än ett angivet antal objekt visas som antal eller som de underliggande objekten. Tröskeln är ett omdöme: skriv ned den, granska den och tillämpa den överallt.

**5. Använd intervall för huvudandelar och prognoser.** För en proportion som andelen ändringar som misslyckas, beräkna ett konfidensintervall med en metod som ditt team är överens om och notera metoden i registret. För leveransprognoser säger ett urvalsbaserat intervall (till exempel "troligen mellan 8 och 14 objekt per vecka") planerare mer än en enda siffra för genomflöde. Om intervallet är för brett för att ge underlag för ett beslut, säg det.

### Skilj signal från brus

**6. Rita kontrolldiagram för de mått du agerar på.** Ett enkelt diagram för individuella värden ritar varje punkt i tidsordning med en mittlinje och gränser beräknade ur data, och det flaggar punkter utanför gränserna eller sviter på ena sidan av mitten. Börja med veckomedianen för lösningstid och veckovolym. Skriv signalreglerna en gång (till exempel en punkt bortom gränserna, eller en svit på åtta på ena sidan) och håll dem fasta, så att teamet inte justerar reglerna tills diagrammet stämmer med dess känslor.

**7. Agera på signaler och lämna vanlig variation i fred.** När en punkt ligger inom gränserna, motstå en förklaring till den; det är processen som beter sig som den normalt gör. När en signal dyker upp, fråga vad som ändrades den veckan: en release, en bemanningslucka, ett leverantörsavbrott, en ny kategori. Om processen är stabil men otillfredsställande är förbättringen en förändring av systemet, inte ett samtal med den som hade den röda veckan.

**8. Räkna med regression mot medelvärdet efter en extrem period.** Om du lanserar ett initiativ under årets sämsta månad kommer en viss förbättring att följa av en slump. Jämför mot en längre baslinje, mot en liknande tjänst som inte ändrades eller mot kontrollgränserna innan du kreditterar initiativet. Ett före-och-efter-par av två punkter är den svagaste formen av belägg.

### Resonera varsamt om orsak och urval

**9. Fråga vad som saknas i data.** Enkätsvar kommer från människor som valde att svara. Stängda ärenden utesluter de som fortfarande är öppna. Innan du drar en slutsats, lista vem eller vad som saknas och hur det kan luta resultatet.

**10. Ändra definitioner med avsikt och markera dem i diagrammet.** En ny statusmodell, en ny prioritetsmatris eller en ny kategorilista ändrar data utan att ändra arbetet. Kommentera varje ändring i diagrammet och starta om kontrollgränserna efter den (se ämne 1.5, Datakällor och instrumentering).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Mediantid för lösning | Att stänga snabba ärenden först och lämna svåra öppna; att dela upp ett ärende i flera enkla; att pausa klockan i ett kundväntetillstånd | Lösningstid vid hög percentil och ålder på äldsta öppna objekt; andel tid i pauslägen; andel länkade ärenden |
| Lösningstid vid hög percentil | Att välja en percentil som smickrar resultatet, eller ändra den mellan rapporter; att utesluta långa fall som "extremvärden" eller omklassificera dem | Percentilen fastställd i registret; en lista över uteslutna objekt med skäl; ålder på äldsta öppna objekt |
| Ålder på äldsta öppna objekt | Att stänga eller slå ihop det äldsta objektet utan att lösa det; att flytta det till en annan kö eller kategori | Återöppningsgrad; stickprovsrevision av de äldsta stängda objekten; antal kööverföringar |
| Täckning av andelsrapportering | Att fästa ett antal med liten stil medan rubrikerna fortfarande leder med procentsatsen; att sätta minimiantalet så lågt att det aldrig utlöses | Granska den faktiska instrumentpanelen, inte registret; minimiantalet granskas tillsammans med intervallbredden |
| Signalfrekvens i kontrolldiagram | Att vidga gränserna, lägga till regler eller starta om baslinjen så att signaler försvinner; att flytta punkter genom att ändra måttet | Regler och gränser lagras i registret med ändringshistorik; jämför mot det råa histogrammet |
| Intervallbredd | Att välja en metod eller ett fönster som ger ett smalt intervall; att slå ihop olikartade tjänster för att förstora urvalet | Metoden namngiven i registret; uppdelning per tjänst tillgänglig på begäran; sammanslagna och osammanslagna resultat jämförs |

En sund avläsning visar medianer och percentiler som rör sig i samma riktning som användarnas upplevelse, en kort lista med gamla objekt som krymper utan att i tysthet omklassificeras och andelar som visas med sina antal. Signalfrekvensen i kontrolldiagrammet bör vara låg men inte noll: ett diagram som aldrig signalerar kanske inte kan det, och ett som alltid signalerar speglar en instabil process eller dåligt valda regler.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Medellösningstid | Enkel, stämmer med många avtal, lätt att summera | Domineras av svansen; döljer vad kunder typiskt upplever |
| Median plus hög percentil | Tål extremvärden; stöder löften till kunder | Kräver en smula förklaring; percentiler behöver tillräckligt många objekt för att vara stabila |
| Råa andelar utan antal | Kompakta och välkända | Döljer små urval och inbjuder till övertolkning |
| Andelar med antal och intervall | Ärliga om osäkerhet; avskräcker från överreaktion | Ser mindre beslutsamt ut; intervallmetoder kräver enighet |
| Kontrolldiagram | Skiljer signal från brus; vägleder när man ska agera | Behöver tillräckligt många punkter och stabila definitioner; gränser kan missförstås eller manipuleras |
| Före-och-efter-jämförelse | Snabb och lätt att kommunicera | Benägen till regression mot medelvärdet och till sammanfallande ändringar |

För en tjänst med en handfull incidenter per år är ingen statistik stabil, och rätt metod är att läsa varje incident. För en servicedesk med hög volym är fördelningsmedvetna mått billiga och klart överlägsna. Välj efter volym och efter hur stora insatserna är i beslutet.

## Frågor att diskutera med teamet

**1. Vilket av våra nuvarande instrumentpanelstal är ett medelvärde av något skevt, och vad skulle medianen och den 95:e percentilen visa?**
Välj det mest bevakade tidsmåttet och beräkna alla tre på samma uppsättning objekt före mötet. Fråga om berättelsen som medelvärdet berättar stämmer med vad användarna säger. Avsluta med att enas om vilken sammanfattning som blir rubriken och var de andra ska visas.

**2. Hur många objekt ligger bakom vår mest citerade procentsats, och skulle vi fortfarande citera den om vi skrev ut antalen?**
Lista de tre procentsatser som ledningen läser mest. Skriv bredvid var och en täljaren och nämnaren för den senaste perioden. Fråga vad ett enda extra lyckat eller misslyckat fall skulle göra med siffran. Enas om ett minimiantal under vilket teamet visar objekten i stället för en andel.

**3. När kreditterade vi senast en förbättring till ett initiativ, och vad mer var sant då?**
Välj en nylig framgångshistoria. Fråga när måttet var som sämst, hur den längre historiken ser ut och om en jämförbar tjänst också förbättrades. Behåll en nyfiken ton.

**4. Vad är det normala intervallet för våra nyckelmått, och vem skulle kunna säga att en given vecka är ovanlig?**
Rita de senaste 20 eller fler veckovärdena för ett mått och dra mittlinjen och gränserna, eller beräkna dem ungefärligt. Fråga vilka veckor teamet reagerade på som låg inom intervallet. Enas om vem som äger diagrammet och var signalreglerna är nedskrivna.

**5. Vem eller vad saknas i våra data?**
Lista måttets källor: stängda ärenden, enkätsvar, övervakade tjänster, verktyg med tidsstämplar. Fråga för var och en vem som är utesluten och varför. Fånga varje lucka som en åtgärd eller ett förbehåll.

**6. Hur skulle vi förklara ett brett intervall eller ett "vi vet inte än" för ledningen utan att det låter som en ursäkt?**
Öva formuleringen på ett verkligt exempel: "Mellan 70 och 95 procent, på 12 incidenter; vi räknar med att snäva in det efter nästa kvartal." Fråga vad publiken behöver besluta och om intervallet ändrar beslutet. Skriv ett kort manus på mötet.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam använder cykeltid och genomflöde för att prognostisera, och de har mest nytta av percentilbaserade prognoser i stället för medelvärden (se ämne 2.1, Flödesmått). En prognos som anges som ett intervall med en sannolikhet är lättare att försvara än ett datum. Motstå att läsa en periods förändring som en trend (se ämne 2.5, Mätetal för leveransprognoser och planering).

### Service- och driftteam

Driftteam äger ärendedata och incidentklockorna, så de är bäst placerade att publicera medianer, percentiler och det äldsta öppna objektet, och att förklara pausreglerna. De bör rita veckovolym och lösningstid med kontrollgränser så att ett verkligt skifte, till exempel en felaktig release, skiljs från en dålig vecka. När en tjänst har få incidenter bör de granska varje incident i stället för att beräkna andelar (se ämne 3.3, Svarstid och lösningstid för incidenter).

### Ledning och styrning

Ledare ställer de frågor som formar vad team visar. Att fråga "varför gick det här upp?" om varje vickning lär organisationen att förklara brus och att dölja det. Ledare bör fråga om en rörelse ligger inom normalt intervall, hur många objekt som ligger bakom en siffra och vad som har ändrats i processen. Styrande organ kan kräva antal på huvudandelar.

### Kunder och användare

Kunder upplever enskilda fall, inte medelvärden. De minns den enda förfrågan som tog fem veckor, och ett medelvärde på två dagar reparerar inte det minnet. Percentilåtaganden ("nio av tio förfrågningar inom tre arbetsdagar") stämmer bättre med kundens mentala modell än medeltider. Enkätresultat bör visas med svarsantal, och fria kommentarer bör läsas tillsammans med siffrorna (se ämne 6.1, Mätetal för kundnöjdhet).

## I praktiken: ett exempel från tjänstehantering

En medelstor nätbutik har en servicedesk och ett driftteam som stöder dess webbshop. Siffrorna nedan är illustrativa.

Ledningen ser en månatlig rubrik: "genomsnittlig lösningstid för incidenter föll från 9,1 timmar till 7,4 timmar." Driftchefen ombeds bekräfta det och presentera planen för nästa mål, 6 timmar. Innan hon går med på det ber hon analytikern hämta de underliggande objekten och rita upp dem. Av 240 incidenter under månaden (illustrativt) är medianen 2,5 timmar, den 85:e percentilen 14 timmar, och 9 incidenter är äldre än 5 dagar och fortfarande öppna. Månaden innan var medianen 2,6 timmar. Genomsnittet föll för att tre mycket långa incidenter från föregående månad, en av dem 11 dagar gammal, råkade lösas tidigare under perioden, och för att en omgång ärenden om lösenordsåterställning omkategoriserades till en snabbstängande förfrågningstyp.

Teamet ritar veckomedianen för de senaste 26 veckorna. Mittlinjen ligger nära 2,6 timmar, och varje punkt från de senaste två månaderna ligger inom gränserna. Rubrikfallet är inte en signal. Omkategoriseringen under den andra veckan ändrade definitionen mitt i diagrammet, så teamet markerar den och startar om gränserna från den punkten.

De beslutar tre ändringar. Månadsrapporten ska visa medianen, den 85:e percentilen och det äldsta öppna objektet, med antalet incidenter bakom var och en. Det föreslagna medelvärdesmålet på 6 timmar ersätts av ett samtal om ett percentilmål, som sätts efter ett kvartals data under den nya definitionen. Teamet ska också lista de 9 gamla incidenterna med en ägare och ett nästa steg för var och en.

Manipulationsrisken de fångar dyker upp vid nästa granskning. En chef föreslår att de 9 äldsta incidenterna stängs som "inte längre reproducerbara" för att få siffran för äldsta objekt att se frisk ut. Eftersom registret parar ålder på äldsta öppna objekt med återöppningsgrad och en stickprovsrevision av gamla stängningar läser teamet tre av de föreslagna stängningarna, finner att två fortfarande är aktuella och håller dem öppna. Siffran för äldsta objekt förblir obekväm i ytterligare en månad. Det är det avsedda beteendet.

## Agilitet, AI, automatisering och analys

### Agilitet

Täta leveranser ger många små urval, vilket är bra för att se förändring, men varje urval är litet. En användbar praxis är att visa kontrolldiagram över ett rullande fönster och vid regelbundna granskningar diskutera bara signaler, inte varje vickning. Varningen är att undvika att reagera på brus: ett team som ändrar kurs efter varje dipp kommer aldrig att se effekten av någon ändring.

### AI

AI-stött arbete förskjuter ofta hela fördelningen, till exempel snabbare första svar med mer varierande kvalitet. Jämför före och efter med percentiler och det äldsta objektet, och para hastighet med ett kvalitetsmått. Varningen är att ett modellbyte kan ändra data mitt i en trend, så markera modell- och promptändringar i diagrammet.

### Automatisering

Automatisera beräkningen och visningen av medianer, höga percentiler, antal och intervall, så att rätt form är standard och ingen räknar om för hand. Automatisering behöver också få sina egna urvalsstorlekar och felfrekvenser redovisade. Varningen är att automatiska larm på tröskelvärden skapar falsklarm när data är sneda, så grunda larm på kontrollgränser, inte fasta tal.

### Analys

Säg alltid hur många objekt som ligger bakom en andel och visa ett intervall när antalet är litet. Använd prognoser som intervall, inte enstaka datum. Varningen är att statistisk signifikans inte betyder praktisk betydelse, och att ett litet urval kan dölja ett verkligt problem, så kombinera siffrorna med att läsa faktiska objekt.

## Branschperspektiv

**Startup.** Volymerna är små, så de flesta andelar består av några få objekt och intervallen är breda. Läs varje incident i stället för att beräkna statistik, för ett enkelt veckodiagram över ett eller två mått och undvik att utropa trender utifrån tre punkter. När volymen växer, gå över till medianer och percentiler tidigt så att vanorna redan finns på plats.

**Småföretag.** Personen som sköter it äger också datan, och urvalet är vanligtvis litet. Redovisa antal, inte procentsatser, för sällsynta händelser och jämför mot din egen längre historik. Kontrollera vad en leverantörs "svarstidsklocka" egentligen mäter.

**Storföretag.** Volymen gör fördelningar meningsfulla, och den uppmuntrar också sammanställningar som blandar olikartade tjänster. Jämför lika med lika, publicera definitionerna och percentilen som används och håll ett gemensamt bibliotek med diagram- och beräkningsregler så att team inte beräknar samma mått på tre sätt.

**Offentlig sektor.** Avtal och lagstadgad rapportering fastställer ofta ett medelvärde eller en tröskelprocent, och de definitionerna är inte förhandlingsbara. Redovisa den krävda siffran exakt som den är definierad och visa medianen, percentilen och antalen bredvid så att tillsynsorgan ser hela bilden. Offentlig granskning gör ärlig osäkerhet mer värdefull, eftersom en alltför självsäker siffra är dyr att dra tillbaka (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Det tar några timmar att enas om sammanfattningsregler, bygga ett histogram och ett kontrolldiagram från en export och lägga till antal i en rapportmall, plus några minuter varje cykel för att hålla dem aktuella. De flesta verktyg beräknar redan percentiler. Den större kostnaden är ett samtal med människor som är vana vid en enda tröstande siffra.

Avkastningen är bättre beslut och mindre bortkastad reaktion. Team slutar omorganisera efter en dålig vecka, slutar kreditera initiativ för slumpmässiga förbättringar och slutar lova medelvärden som hälften av deras kunder inte upplever. Låna inte en siffra: räkna hur ofta förra årets beslut ändrades i efterhand och hur många "förbättringar" som försvann nästa period, och använd de antalen för att dimensionera caset.

## Antimönster och fallgropar

- **Att medelvärdesbilda sneda varaktigheter.** Medelvärdet dras av svansen och döljer vad användare känner. Redovisa medianen och en namngiven hög percentil och visa det äldsta öppna objektet.
- **Procentsatser från små urval.** "100 procent" av tre objekt är en anekdot. Visa antal och tillämpa en regel om minimiantal.
- **Att reagera på varje vickning.** Att jaga varje röd vecka slösar möda och lär team att förklara brus. Använd kontrollgränser och skrivna signalregler.
- **Före-och-efter-bevis.** Två punkter kan inte skilja en insats från slump eller regression mot medelvärdet. Använd en längre baslinje och en jämförelse.
- **Att flytta målstolparna i diagrammet.** Att ändra gränser, regler eller definitioner i efterhand får vilket diagram som helst att stämma med berättelsen. Fastställ reglerna, logga ändringar och kommentera dem.
- **Att utesluta extremvärden som standard.** De längsta fallen är oftast de som kunder minns. Uteslut bara med ett skrivet skäl och lista vad som uteslutits.
- **Falsk precision.** Att redovisa 83,3 procent från 12 objekt antyder kunskap som data saknar. Avrunda ärligt och visa ett intervall.
- **Att slå ihop olikartat arbete.** En blandad tid för lösenordsåterställningar och datacenterhaverier beskriver ingen av dem. Segmentera först.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Sammanfattningar av tidsdata | Enbart medelvärden | Vissa team visar medianer | Median plus en namngiven percentil och äldsta öppna objekt är standard | Fördelningar granskas med ett skyddsräcke och följs över tid | Percentilåtaganden överenskomna med kunder och leverantörer, och reviderade när data ändras |
| Urvalsstorlek och osäkerhet | Andelar citeras utan antal | Antal visas i vissa rapporter | Antal och en regel om minimiantal på varje andel | Intervall på huvudandelar, metod i registret | Osäkerhet delas öppet med kunder och används i planering över team |
| Variation och orsakssamband | Varje förändring förklaras | Några diagram med gränser | Kontrolldiagram med skrivna regler för nyckelmått | Signaler utlöser planerad utredning; initiativ kontrolleras mot baslinje | Delade diagrambibliotek över tjänster; baslinjer jämförs mellan team utan rangordning |

## Checklista

- [ ] Varje tidsmått redovisar en median och en namngiven hög percentil, inte enbart ett medelvärde.
- [ ] Åldern på det äldsta öppna objektet och antalet objekt bortom den höga percentilen redovisas.
- [ ] Varje rapporterad andel visar sin täljare och nämnare.
- [ ] En regel om minimiantal är nedskriven och tillämpas på alla andelar.
- [ ] Huvudandelar och prognoser visar ett intervall, med metoden namngiven i registret.
- [ ] Kontrolldiagram finns för de tre mått teamet agerar på, med skrivna signalregler.
- [ ] Definitionsändringar kommenteras i diagram och loggas i registret.
- [ ] Uteslutna objekt listas med skäl.
- [ ] Förbättringspåståenden kontrolleras mot en längre baslinje innan de upprepas.
- [ ] Varje mätetals manipuleringsvektor och skyddsräcke finns i registret (se ämne 1.4, Styrning och ägarskap av mätetal).

## AI-prompter

**Kontrollera om en sammanfattning passar data.**

```text
I have [number] values of [measure, such as incident resolution time] for
[service] over [period]. The clock starts at [start event] and stops at
[stop event]. Pauses are [handled how]. The values are pasted below.

Describe the shape of the distribution, compute the mean, median, and the
[percentile, such as 85th] and [second percentile, such as 95th], and tell me
which summary best represents a typical case and which supports a promise to
customers. Point out any values that look like data errors, but do not remove
them. Do not invent benchmark values. List your assumptions and what you could
not determine from the data.

[paste values, with personal data removed]
```

**Uttryck en andel med dess osäkerhet.**

```text
Our team reports [rate name] as [numerator] out of [denominator] for [period]
and [service]. Show how to present this with the counts, explain in plain words
how much one more or one fewer success would change it, and calculate a
confidence interval using [method, or "a method you recommend and name"].
Suggest wording that a non-technical leader can understand and a minimum-count
rule for when to show items instead of a rate. Do not invent comparison
figures. List your assumptions, including the method and any data conditions it
needs.
```

**Bedöm om en förändring är en signal eller brus.**

```text
Here are [number] consecutive [weekly or monthly] values of [measure] for
[service]. A change happened in [period]: [describe the intervention, release,
or definition change]. Plot or describe a control chart with a center line and
limits, apply these signal rules: [list rules, such as one point beyond the
limits or a run of eight on one side], and tell me which points signal. Say
whether the change is distinguishable from ordinary variation, and what other
explanations, such as regression toward the mean or a definition change, I
should rule out. Do not claim causation. List your assumptions and the extra
data that would help.

[paste values]
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta ämnet och det parade skyddsräcket för ett tids- eller andelsmätetal innan du publicerar det.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett statistiskt mått som läggs till i ett ämne har sin definition, sina klockor, sin manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- Tjänstevaraktigheter är sneda, så redovisa medianen och en namngiven hög percentil och lägg till åldern på det äldsta öppna objektet.
- Varje andel bär sitt antal, och små urval visas som objekt eller med ett intervall, inte som en självsäker procentsats.
- Känn till ett måtts normala intervall med ett kontrolldiagram innan du reagerar på en enda vecka.
- Var misstänksam mot förbättringar som mäts med två punkter: regression mot medelvärdet och definitionsändringar förklarar många av dem.
- Ärlig osäkerhet är en styrka i en rapport, och den är ett skyddsräcke mot manipulation i Goodharts anda (se ämne 1.2, Goodharts lag och mätetalens psykologi).
- Håll tekniken proportionerlig: några konsekventa metoder, förklarade med enkla ord, tjänar ett team bättre än många oförklarade.

## Referenser och vidare läsning

1. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
2. Shewhart, W. A., *Economic Control of Quality of Manufactured Product*, D. Van Nostrand, 1931.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
5. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd edition, Wiley, 2014.
6. Kahneman, D., *Thinking, Fast and Slow*, Farrar, Straus and Giroux, 2011.
7. Tufte, E. R., *The Visual Display of Quantitative Information*, 2nd edition, Graphics Press, 2001.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Wikipedia, [Skewness](https://en.wikipedia.org/wiki/Skewness).
10. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
11. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
12. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
14. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
15. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
16. Wikipedia, [Regression toward the mean](https://en.wikipedia.org/wiki/Regression_toward_the_mean).
