# Driftarbete och oplanerat arbete

**Ett team som bygger och driftar en tjänst har en enda kapacitetspool, så gör uppdelningen mellan planerad ändring och driftarbete synlig, skydda den med uttryckliga regler för avbrott och expedieringar och läs andelen oplanerat arbete som en signal om systemet snarare än en dom över människorna.**

## Översikt och motiv

Varje team som bygger och driftar en tjänst lägger sin tid på två breda slags arbete. **Förändringsarbete** för tjänsten framåt: nya funktioner, planerade förbättringar, migreringar och borttagande av kända svagheter. **Driftarbete** (run work) håller tjänsten igång: att besvara incidenter och förfrågningar, svara på larm, tillämpa rutinpatchar, återställa åtkomst och hantera de manuella uppgifter som tjänsten fortfarande kräver. Båda är legitima, och en tjänst som har användare behöver båda. Problemen börjar när ingen kan säga hur mycket av varje teamet gör, eftersom planen då i tysthet förutsätter kapacitet som driftarbetet redan har förbrukat.

Arbete kan också sorteras efter om det var förutsett. **Planerat arbete** valdes före perioden började, till exempel under planeringen eller i ett kvartalsåtagande. **Oplanerat arbete** kommer in under perioden och kräver uppmärksamhet som inte budgeterats: en produktionsincident, en brådskande förfrågan från en senior intressent, en säkerhetsrättelse eller ett fel som blockerar en kund. De två axlarna överlappar men är inte desamma. Det mesta driftarbetet är oplanerat till sin tidpunkt även när volymen är förutsägbar, och en del driftarbete, till exempel en schemalagd förnyelse av certifikat, är helt planerat. Förändringsarbete kan också vara oplanerat, som när en förordning ändras och ett team måste svara inom veckor.

Agila och ITIL-baserade synsätt beskriver samma tryck med olika ord. I tidsboxad planering är ett åtagande en prognos av kapacitet, och arbete som kommer in mitt i perioden tränger antingen undan något eller skjuts upp. På en flödestavla har pågående arbete uttryckliga gränser och det finns ofta en dedikerad fil för brådskande objekt, och frågan är hur många brådskande objekt systemet kan absorbera innan flödet kollapsar (se ämne 2.1, Flödesmått). I ITIL 4 (versionen publicerad 2019) beskriver incidenthantering, hantering av serviceförfrågningar och problemhantering hur driftarbete tas emot, prioriteras och löses, medan ändringsmöjliggörande och praktiken programvaruutveckling och hantering styr planerad ändring. Praktikerna beskriver arbetsflöden. De säger sällan hur ett enskilt team ska dela sina timmar mellan dem, och det är den luckan det här ämnet arbetar i.

Flera termer återkommer här. Ett **avbrott** (interrupt) är varje efterfrågan som kommer in utanför planeringscykeln och drar en person bort från objektet hen arbetar med. **Avbrottsbelastning** är den samlade effekten av de efterfrågningarna på ett team under en period, mätt som antal, som timmar eller som den andel kapacitet de förbrukar. En **expediering** (expedite) är ett arbetsobjekt som tillåts hoppa över kön, vanligen därför att dess [fördröjningskostnad](https://en.wikipedia.org/wiki/Cost_of_delay) är hög och omedelbar. En **expressfil** (expedite lane) är en regel, ofta en dedikerad rad på en tavla, som begränsar hur många expedieringar som får pågå samtidigt. **Kapacitetsfördelning** är den uttryckliga uppdelningen av ett teams kapacitet mellan slags arbete, till exempel en angiven andel för planerad ändring, en andel för driftarbete och en andel för förbättring.

Oplanerat arbete är den största dolda skatten på planerad leverans: varje avbrott kostar sin egen tid plus återhämtningstiden som går förlorad till [uppgiftsbyte](https://en.wikipedia.org/wiki/Task_switching_(psychology)), och forskning om avbrutet arbete (Mark, Gudith och Klocke, 2008) fann att människor kompenserar genom att arbeta snabbare till priset av mer stress. En anmärkning om riktning. En hög andel oplanerat arbete är inte i sig ett fel. En nyligen lanserad tjänst, ett pågående avbrott eller en reglerad händelse kan legitimt förbruka det mesta av ett teams kapacitet under en tid. Syftet är varken att driva oplanerat arbete till noll eller att dölja det, utan att se det, prissätta det och avgöra medvetet hur mycket av det teamet ska absorbera och hur mycket organisationen måste åtgärda uppströms. Oplanerat arbete som återkommer av samma orsak är det mest användbara slaget att hitta, eftersom det pekar på en problempost, ett övervakningsglapp eller ett objekt av [teknisk skuld](https://en.wikipedia.org/wiki/Technical_debt) som är billigare att ta bort än att fortsätta betala för.

## Nyckelprinciper

- **Kapacitet är ändlig och delad.** Varje timme som ges åt driftarbete eller en expediering är en timme som inte ges åt planerad ändring, så gör uppdelningen uttrycklig och synlig i stället för att låta den uppstå ur den som ropar högst.
- **Klassificera arbete när det kommer in, inte efteråt.** Märk varje objekt som planerat eller oplanerat och som förändring eller drift i det ögonblick det går in i systemet, eftersom omklassificering vid periodens slut är en erinran och inte en observation.
- **Avbrott har ett pris utöver sin varaktighet.** Räkna återhämtningskostnaden för byte såväl som minuterna som läggs, och föredra utformningar som buntar eller dirigerar avbrott till en namngiven person.
- **Expediera enligt regel, inte enligt rang.** En expressfil med en gräns och ett inträdesprov skyddar flödet; obegränsad expediering efter senioritet tar bort det.
- **Reservera kapacitet med avsikt.** En planerad buffert är ärligare än en plan som förutsätter ingen.
- **Behandla upprepat oplanerat arbete som ett fel i systemet.** En veckovis upprepning är en kandidat för en problempost eller en automatisering.
- **Mät team och tjänster, aldrig individer.** Personen som besvarar flest avbrott är oftast den som kan mest; att rangordna dem straffar fel sak (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Mätetalsdefinitioner

Sju mätetal beskriver hur kapacitet delas upp och störs. Vart och ett behöver en skriven klassificeringsregel, eftersom alla beror på hur objekt märks. Perioden i varje formel är samma fasta fönster för teamet, till exempel en vecka, en månad eller ett kvartal.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Andel oplanerat arbete | Andel slutförda arbetsobjekt, räknade, som inte fanns i planen vid periodens början | objekt som slutförts under perioden och som kom in på tavlan eller i backlogen efter att perioden börjat / alla objekt som slutförts under perioden; klockan startar vid planeringstillfället och stoppar vid periodens slut; avbrutna objekt och objekt som fortfarande är öppna utesluts | procent | Ärendehanteringssystem med objektets skapandetid och planeringsögonblicksbilden | Incidenthantering; hantering av serviceförfrågningar | Omfattningsändring; arbetsobjektstyper | Månadsvis |
| Följsamhet till kapacitetsfördelning | Hur nära faktisk insats motsvarar den angivna uppdelningen mellan förändringsarbete, driftarbete och förbättringsarbete | för varje kategori, absolut skillnad mellan faktisk andel och överenskommen andel, summerad och halverad; faktisk andel är slutförda objekt (eller loggad insats där teamet registrerar den) i den kategorin / alla slutförda objekt; objekt utan kategori redovisas separat och tappas inte bort | procentenheter | Arbetstypfält i ärendehanteringssystemet och tidsregistreringar där de finns | Ständig förbättring; kapacitets- och prestandahantering | Kapacitetsfördelning eller kapacitetsplanering | Månadsvis |
| Avbrottsfrekvens | Hur ofta efterfrågningar utanför planen når teamet och når de människor som utför planerat arbete | avbrott som teamet tagit emot under perioden / arbetsdagar under perioden, där ett avbrott är varje ärende, larm, meddelandebegäran eller förfrågan som loggats i teamets intagskanal och inte redan finns i planen; dubbletter av samma underliggande efterfrågan räknas en gång | avbrott per arbetsdag | Intagskanalens logg, ITSM-kö, larmsystem och teamets avbrottslogg | Incidenthantering; hantering av serviceförfrågningar; övervakning och händelsehantering | Avbrottslogg eller teamets arbetsöverenskommelse | Veckovis |
| Expedieringsgrad | Andel slutförda objekt som använde expressfilen | objekt som slutförts under perioden och som gick in i expressfilen / alla objekt som slutförts under perioden; klockan startar när objektet markeras som expedierat och stoppar vid slutförande; objekt som nedgraderats ur filen innan arbetet började räknas separat | procent | Tavlans filhistorik eller prioritetsfältets historik | Incidenthantering; ändringsmöjliggörande (nödändring) | Expedieringsklass av tjänst | Månadsvis |
| Undanträngning av planerat arbete | Antal planerade objekt som trängts ut eller övergetts för att ge plats åt oplanerat arbete | planerade objekt som tagits bort från perioden, skjutits upp eller lämnats ofullbordade med ett registrerat skäl "undanträngt av oplanerat arbete" under perioden (antal); objekt som tagits bort därför att målet ändrades utesluts | antal objekt | Tavlans ändringshistorik, med skälfältet | Ändringsmöjliggörande; ständig förbättring | Skydd av leveransmål; omfattningsförhandling | Månadsvis |
| Andel upprepat oplanerat arbete | Andel oplanerade objekt vars orsak matchar ett tidigare oplanerat objekt i återblicksfönstret | oplanerade objekt som slutförts under perioden och som länkar till samma problempost, larmregel eller orsaksetikett som ett tidigare objekt inom återblicksfönstret (till exempel 90 dagar) / alla oplanerade objekt som slutförts under perioden; objekt utan orsaksetikett redovisas som ett separat oklassificerat antal | procent | ITSM-incident- och problemposter, orsaksetiketter i ärendehanteringssystemet | Problemhantering; hantering av kända fel | Åtgärdspunkter från retrospektiv; återkommande feletiketter | Månadsvis |
| Tillförlitlighet i planerat åtagande | Andel av de objekt teamet planerade för perioden som det slutförde under perioden | planerade objekt som slutförts under perioden / planerade objekt vid periodens början; objekt som lagts till efter starten utesluts ur båda antalen | procent | Planeringsögonblicksbild och slutförandehistorik i ärendehanteringssystemet | Hantering av servicenivåer; ändringsmöjliggörande | Prognostillförlitlighet | Månadsvis |

Tidsmått i det här ämnet, till exempel åldern på ett expedierat objekt, bör visas som percentiler (till exempel medianen och 85:e percentilen) och inte som ett medelvärde, eftersom en enda lång incident förvränger ett medelvärde (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

## Rekommendationer

### Gör uppdelningen synlig

**1. Märk varje objekt med två fält vid intaget.** Lägg till en arbetstyp (förändring, drift, förbättring) och en planerad-flagga (planerat, oplanerat) i intagsformuläret i ärendehanteringssystemet eller ITSM-verktyget och gör båda obligatoriska. Etiketterna är billiga när de sätts vid skapandet och opålitliga när de rekonstrueras senare. Skriv definitionen av varje värde i en mening i teamets arbetsöverenskommelse och se över den när etiketterna slutar beskriva arbetet (se ämne 1.5, Datakällor och instrumentering).

**2. Frys en planeringsögonblicksbild.** "Oplanerat" har bara mening i förhållande till en plan, så fånga listan över objekt vid periodens början och spara den. Jämför slutfört arbete mot ögonblicksbilden, inte mot hur tavlan ser ut i slutet.

### Fördela kapacitet med avsikt

**3. Enas om en kapacitetsfördelning och behandla den som en hypotes.** Besluta, som team och tillsammans med produktägaren eller tjänsteägaren, ungefär hur stor andel som går till planerad ändring, till driftarbete och till förbättring. Börja från vad data visar att teamet faktiskt har gjort de senaste perioderna och välj sedan ett mål som rör sig i den riktning du vill. Se över uppdelningen vid varje planeringscykel; en fast procentsats kopierad från ett annat teams bild är en gissning och inte ett beslut.

**4. Reservera en buffert dimensionerad utifrån din egen historik.** Använd teamets egen avbrottsförteckning för att dimensionera en buffert för oplanerat arbete, till exempel genom att titta på mitten och det övre intervallet av den veckovisa oplanerade andelen under de senaste perioderna, och planera bara den kapacitet som återstår. En buffert som regelbundet är oanvänd kan krympa; en som regelbundet är uttömd behöver en större fördelning eller en orsak som tas bort. Sambandet mellan belastning och fördröjning i en kö (se [Littles lag](https://en.wikipedia.org/wiki/Little%27s_law) och ämne 2.3, Pågående arbete och köteori) förklarar varför ett system som körs vid full utnyttjandegrad saknar utrymme att absorbera en överraskning.

### Utforma avbrottsvägen

**5. Dirigera avbrott till en namngiven roll.** Rotera en enda person, ofta kallad avbrottshanterare, jourtekniker eller sköld, att ta emot inkommande efterfrågningar under en dag eller en vecka, medan de andra skyddar sitt fokus. Rollen har en skriven omfattning, en överlämningsanteckning och en gräns för hur länge den varar så att belastningen delas rättvist. Team i en rotation bör koppla den till jourpraxis (se ämne 5.7, Mätetal för rutinarbete och jour).

**6. Gör triage vid dörren.** Avbrott skiljer sig enormt i brådska. Tillämpa en kort [triage](https://en.wikipedia.org/wiki/Triage)regel vid intaget som ställer tre frågor: är en tjänst nere eller en användare blockerad, finns det ett datum som inte kan flyttas och kan efterfrågan vänta till nästa planeringstillfälle? Objekt som inte uppfyller någon av de tre går till backlogen och planeras som vilket annat arbete som helst. I ITIL 4:s termer är detta prioriteringssteget i incidenthantering och hantering av serviceförfrågningar tillämpat på teamets eget intag.

### Styr expressfilen

**7. Ge expressfilen en gräns och ett inträdesprov.** Filen rymmer högst ett eller två objekt åt gången, och ett objekt kommer in bara om dess fördröjningskostnad är hög och omedelbar och beställaren kan ange den. Ett angivet prov låter teamet säga nej till förfrågan som bara är högljudd. Om filen alltid är full har den slutat vara ett undantag, och teamet bör se över inträdesprovet och orsakerna uppströms. Filen är en [tjänsteklass](https://en.wikipedia.org/wiki/Class_of_service) med egna regler; se Kanban-litteraturen för den underliggande idén (Anderson, 2010).

### Ta bort källorna

**8. Länka oplanerade objekt till en orsak och granska upprepningarna.** Lägg till en orsaksetikett eller en länk till en problempost på varje oplanerat objekt. En gång i månaden, lista de orsaker som återkommer och skicka de främsta till problemhantering, till backlogen som objekt av teknisk skuld eller till förbättringar av övervakningen (se ämne 4.1, Mätetal för problemhantering, och ämne 4.6, Teknisk skuld och kända fel). Andelen upprepat oplanerat arbete talar om för dig om de rättelserna får genomslag. Mönstret liknar elimineringen av rutinarbete (toil) som beskrivs i Googles SRE-bok, där upprepande manuellt driftarbete behandlas som något som ska konstrueras bort; boken föreslår att hålla det under en andel av en ingenjörs tid (Beyer med flera, 2016), en riktlinje varje team bör pröva mot sin egen data i stället för att anta den som ett mål.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Andel oplanerat arbete | Att lägga till objekt i planeringsögonblicksbilden sent så att de räknas som planerade; att lämna brådskande arbete ospårat så att det aldrig räknas; att märka planerade objekt som oplanerade för att ursäkta en missad plan | Fryst planeringsögonblicksbild med tidsstämpel; antal oklassificerade; ett stickprov av stängda objekt läses varje kvartal för att jämföra etiketten med vad som hände |
| Följsamhet till kapacitetsfördelning | Att flytta objekt mellan kategorier för att matcha den överenskomna uppdelningen; att dela upp ett objekt i flera för att förskjuta andelarna; att välja en uppdelning teamet redan når | Fasta kategoridefinitioner skrivna i arbetsöverenskommelsen; ett stickprov av objektbeskrivningar mot deras kategori; tillförlitlighet i planerat åtagande |
| Avbrottsfrekvens | Att förvandla avbrott till tysta tjänster som aldrig når loggen; att slå ihop flera efterfrågningar i en post; att avskräcka människor från att fråga | Jämför loggen med trafiken i intagskanalen och larmhistoriken; fråga teamet i retrospektiven om loggen stämmer med deras upplevelse |
| Expedieringsgrad | Att hålla brådskande arbete utanför filen för att se disciplinerad ut, eller lägga allt i den för att få fart; att omdefiniera expediering till att betyda "viktigt" | Filgräns med ett inträdesprov; andel expedierade objekt som uppfyllde provet vid granskning; undanträngning av planerat arbete |
| Undanträngning av planerat arbete | Att registrera undanträngning som en omfattningsändring av eget val; att låta planerade objekt misslyckas i tysthet utan skäl; att undvika planerade objekt som sannolikt trängs undan | Skälfält som krävs på varje borttaget eller ofullbordat objekt; tillförlitlighet i planerat åtagande; granskning av skäl i retrospektiven |
| Andel upprepat oplanerat arbete | Att använda en grov orsaksetikett så att upprepningar döljs, eller en fin så att inget upprepas; att stänga problemposten för att ta bort länken | Orsaksetikettens taxonomi granskas kvartalsvis; antal oklassificerade; återkomstkontroll efter att en problempost stängts |
| Tillförlitlighet i planerat åtagande | Att planera smått för att slutföra allt; att vaddera uppskattningar; att räkna ett delobjekt som klart; att släppa svåra objekt innan perioden börjar | Storlek och värde på planerade objekt jämförda över tid; resultatkontroll av leveransmålet; andel oplanerat arbete, så att ett högt värde inte läses som hälsa när planen var försagd |

En sund avläsning är en andel oplanerat arbete som teamet kan förklara, en expressfil som sällan är full och en andel upprepningar som faller efter rättelser. En misstänkt perfekt avläsning är det som ska undersökas. Ett team som redovisar noll oplanerat arbete har antingen en mycket stilla tjänst eller en ospårad, och sättet att avgöra vilket är att jämföra loggen med larm- och ärendehistoriken.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Fast kapacitetsfördelning (angivna procentsatser) | Lätt att förklara; skyddar förbättringsarbete från att svältas | Ignorerar verklig variation; kan manipuleras genom ometikettering |
| Reserverad buffert dimensionerad ur historik | Matchar planen mot den verkliga avbrottsbelastningen | Kräver flera perioder av pålitliga data; kan dölja en kronisk orsak |
| Roterande avbrottshanterare | Skyddar fokuset hos större delen av teamet; sprider belastningen rättvist | Hanterarens eget planerade arbete stannar av; rollen behöver överlämning och stöd |
| Strikt expedieringsgräns | Håller flödet förutsägbart; tvingar fram en angiven fördröjningskostnad | Beställare kan gå runt den; en verklig nödsituation kan kännas blockerad |
| Att räkna objekt i stället för insats | Enkelt och svårt att blåsa upp | Behandlar mycket olika storlekar lika |

Den praktiska hållningen för de flesta team är att räkna objekt först, lägga till insats bara där objektantal vilseleder, skydda en liten buffert och en liten expressfil och använda orsaksetiketten för att angripa den största upprepningen.

## Frågor att diskutera med teamet

**1. Hur stor andel av förra periodens slutförda arbete var oplanerat, och hur vet vi det?**
Öppna planeringsögonblicksbilden bredvid listan över slutförda objekt och räkna objekten som inte fanns i planen. Jämför resultatet med var och ens känsla för perioden; de skiljer sig ofta. Facilitatorn bör fråga hur många objekt som aldrig loggades, eftersom det ärliga svaret formar varje annat tal.

**2. Vilka tre källor till avbrott kostar oss mest, och vem kunde ta bort dem?**
Lista källorna efter antal och efter den insats de absorberade, till exempel larm, upprepade förfrågningar, eskaleringar och ad hoc-förfrågningar från intressenter. Markera varje som möjlig att ta bort, möjlig att dirigera eller oundviklig. Facilitatorn bör driva på för en namngiven ägare utanför teamet för varje källa teamet inte kan åtgärda själv.

**3. Vilken uppdelning mellan förändrings-, drift- och förbättringsarbete vill vi egentligen ha?**
Jämför uppdelningen data visar med den människor tror att de har och med den ledningen förväntar sig. Diskutera vilka slags arbete teamet skulle släppa först under press, eftersom det avslöjar de verkliga prioriteringarna. Välj ett mål för nästa period och ett sätt att kontrollera det.

**4. Vad är vår regel för expressfilen, och vem avgör?**
Läs den nuvarande regeln högt, eller notera att ingen finns. Be om de tre senaste expedieringarna och pröva var och en mot en angiven fördröjningskostnad. Diskutera vad teamet gör när en senior person ber om ett hopp som inte klarar provet och vem som backar beslutet.

**5. När vi blir avbrutna, vad kostar det oss efter att avbrottet är över?**
Be människor beskriva hur lång tid det tar att hitta tillbaka till sin plats i en uppgift efter ett typiskt avbrott.

**6. Vilket oplanerat objekt har kommit tillbaka mer än en gång, och vad skulle stoppa det?**
Ta det senaste kvartalets oplanerade objekt och leta efter upprepningar per orsak. Välj den med högst total insats och följ varför den återkommer: ett saknat larm, ett orättat fel, ett manuellt steg eller ett leverantörsproblem. Besluta om den går till en problempost, till backlogen eller till ett leverantörssamtal.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam känner oplanerat arbete som trasiga planer och glidande prognoser. De har nytta av etikettering vid intaget, en fryst planeringsögonblicksbild och en prognos byggd på en buffert baserad på historik (se ämne 2.5, Mätetal för leveransprognoser och planering). Undanträngningsförteckningen visar produktägare vad varje sen förfrågan kostade.

### Service- och driftteam

Driftteam bär det mesta av driftarbetet. De behöver en namngiven avbrottshanterare, en triageregel och en väg från återkommande förfrågningar och larm till rättelser (se ämne 5.5, Mätetal för övervakning och larmkvalitet). Andelen upprepningar är deras starkaste argument för investering i problemhantering.

### Ledning och styrning

Ledare sätter den verkliga fördelningen genom de förfrågningar de gör och de tidsfrister de accepterar. De bör be om kvoten och dess orsaker, finansiera förbättringsarbete som tar bort upprepade avbrott och undvika att använda expedieringar som det normala sättet att få saker gjorda.

### Kunder och användare

Kunder ser oplanerat arbete som avbrott, långsamma svar och försenade funktioner. De vinner när teamet har utrymme att åtgärda orsaker, och de behöver en rättvis väg för att väcka brådska. Servicenivåavtal (se [servicenivåavtal](https://en.wikipedia.org/wiki/Service-level_agreement)) bör spegla den avbrottsbelastning teamet bär (se ämne 5.1, Mätetal för SLA, OLA och XLA).

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på ett regionalt sjukförsäkringsbolag driver en skadeplattform med ett produktteam på sju personer och en delad servicedesk. Teamet bygger nya funktioner och stöder också plattformen i produktion. Alla siffror i det här exemplet är illustrativa.

Under sex veckor föll teamets tillförlitlighet i planerat åtagande från ungefär 85 procent till 55 procent, och produktägaren började ifrågasätta teamets uppskattningar. Teamledaren hämtar ärendehanteringssystemets historik. Med de frysta planeringsögonblicksbilderna är andelen oplanerat arbete 41 procent räknat i antal under den senaste perioden, jämfört med teamets minnesbild av "kanske en femtedel". Antalet oklassificerade är 9 procent, så kvoten är rimligt pålitlig.

En uppdelning av de oplanerade objekten efter orsak visar att 14 av 24 var driftarbete, och av dem går 9 tillbaka på ett enda batchjobb för skadeinlämning som fallerar efter en dataformatändring hos en partner och startas om för hand varje gång. Andelen upprepat oplanerat arbete är 58 procent. Avbrottsfrekvensen är 6 per arbetsdag, och 4 av dem når ingenjörerna som utför det planerade arbetet, eftersom servicedesken eskalerar direkt till den som svarar först. Expressfilen håller två objekt åt gången de flesta dagar, och expedieringsgraden är 23 procent. Undanträngning av planerat arbete är 7 objekt under perioden, varav 5 bär skälet "undanträngt av oplanerat arbete".

Teamet fattar fyra beslut tillsammans med produktägaren och tjänsteägaren. För det första blir en ingenjör i taget avbrottshanterare med en skriven omfattning och en överlämningsanteckning, och eskaleringar går bara till den personen. För det andra begränsas expressfilen till ett objekt, med ett inträdesprov som kräver en angiven fördröjningskostnad, och varje expediering registrerar objektet den trängde undan. För det tredje lyfts batchjobbets fel som en problempost, med en rättelse och ett partnersamtal placerade i backlogen som förbättringsarbete, med 15 procent av kapaciteten, vilket är den andel teamet väljer som sin första fördelning till förbättring. För det fjärde planerar teamet nästa periods arbete med en buffert dimensionerad ur det övre intervallet av dess senaste oplanerade andel, inte med full last.

Sex veckor senare är andelen oplanerat arbete 27 procent, andelen upprepningar 22 procent, avbrottsfrekvensen som når planerade arbetare 1,5 per dag och tillförlitligheten i planerat åtagande ungefär 78 procent (allt illustrativt). Teamet har inte nått sina tidigare 85 procent, och säger det.

Manipulationsrisken teamet fångar: under den andra perioden med det nya upplägget sjunker avbrottsfrekvensen kraftigt, och teamledaren märker att människor skickar meddelanden direkt till hanteraren, så att tjänster aldrig når loggen. En jämförelse av loggen med intagskanalen och larmhistoriken visar att den verkliga volymen var oförändrad. Teamet enas om att hanteraren omdirigerar direktmeddelanden till intagskanalen. Felet låg i vägens utformning, inte hos någon person.

## Agilitet, AI, automatisering och analys

### Agilitet

Ett team som bygger och driftar en tjänst har en enda kapacitetspool, och ett hållbart tempo behöver ärliga gränser för avbrott. Ett praktiskt steg är att enas om en kapacitetsuppdelning med intressenter och granska den oplanerade andelen vid det regelbundna förbättringssamtalet. Varningen är att ett mål för den oplanerade andelen kan driva team att märka driftarbete som planerat.

### AI

AI kan förskjuta arbete mellan planerat och oplanerat, till exempel genom att automatisera rutinrättelser samtidigt som den lägger till gransknings- och tillsynsuppgifter. Följ andelen oplanerat arbete och andelen upprepat oplanerat arbete före och efter AI-ändringar och ta med tid som läggs på att rätta AI-utdata som en egen kategori. Varningen är att dolt rättelsearbete kan sluka den kapacitet AI var tänkt att frigöra.

### Automatisering

Fånga arbetstypen ur ärendehanteringssystemet automatiskt med en liten, överenskommen uppsättning kategorier. Mät automatisering efter det oplanerade arbete den tar bort och de nya incidenter den orsakar. Varningen är att automatisk åtgärd som startar om tjänster utan att registrera orsak får upprepat oplanerat arbete att se ut som nytt arbete.

### Analys

Visa andelen oplanerat arbete över tid och orsakerna till upprepade objekt. Beslutet detta ger underlag för är hur mycket kapacitet som ska reserveras och vilka avbrottskällor som ska tas bort. Varningen är att kategorier väljs av människor, så granska ett stickprov av objekt för ärlig klassificering.

## Branschperspektiv

**Startup.** Nästan allt arbete känns brådskande och samma få personer gör förändrings- och driftarbete. Håll klassificeringen till två etiketter och sätt en uttrycklig gräns för expedieringar. Andelen oplanerat arbete är beläggen för att säga "vi kan göra färdplanen eller supportbelastningen, inte båda."

**Småföretag.** En administratör eller ett litet team hanterar ofta varje förfrågan. Använd verktygets ärendetyper som klassificering, logga avbrott i en månad för att lära mönstret och reservera ett fast dagligt block för planerat arbete. Be leverantörer om deras volym- och upprepningsorsaksrapporter.

**Storföretag.** Oplanerat arbete för ett team är ofta planerat arbete för ett annat. Enas om gemensamma definitioner, redovisa per team och per tjänst och finansiera rättelser på den nivå där orsaken finns (se ämne 9.3, Mätetal för samarbete och överlämningar).

**Offentlig sektor.** Kapacitet kan vara fastställd av personaltak, och driftarbete kan vara bestämt av lag eller revisionsfynd. Gör dessa till en del av fördelningen, dokumentera klassificeringsreglerna och behåll ett revisionsspår (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Motivet är förutsägbar leverans: en plan som ignorerar avbrottsbelastningen missas upprepade gånger, och synligt oplanerat arbete ger teamet en starkare röst när det ber om tid för att ta bort orsaker.

Kostnaden för att samla in de här måtten är måttlig när etiketterna och planeringsögonblicksbilden är en del av det normala arbetsflödet. De främsta kostnaderna är tiden för att enas om definitioner, disciplinen att märka vid intaget, en liten mängd verktyg för att sammanfoga data från ärendehanteringssystem och ITSM (se ämne 1.5, Datakällor och instrumentering) och avbrottshanterarens timmar, vars eget planerade arbete saktar ner. Att lägga till tidsregistreringar på timnivå kostar betydligt mer och uppskattas ofta inte, så lägg till dem bara om objektantal visar sig vilseleda. Den totala ägandekostnaden domineras av människors tid, så räkna den.

Avkastningen visar sig i mönster teamet kan mäta själv snarare än i en antagen siffra. Leta efter en fallande andel upprepat oplanerat arbete efter problemrättelser, en stigande tillförlitlighet i planerat åtagande, färre undanträngda planerade objekt och färre avbrott som når människor i planerat arbete. Där timmar är kända kan den insats som återvinns genom en borttagen återkommande orsak prissättas med teamets egen kostnad per timme och ställas mot insatsen för rättelsen (se ämne 7.5, Tjänstekostnad och enhetsekonomi, och ämne 7.7, Avkastning på investering och affärscase). Låna inte branschprocentsatser för oplanerat arbete; ingen siffra från en annan organisation ersätter din egen historik.

## Antimönster och fallgropar

- **Att behandla allt oplanerat arbete som misslyckande.** En del av det är tjänsten som gör sitt jobb, och ett mål på noll driver arbete ut ur loggen. Fråga i stället vilken del som är förväntad, vilken som är undvikbar och sätt en buffert för den förra.
- **Hjältekultur.** Personen som räddar varje nödsituation blir oumbärlig, trött och en enskild felpunkt. Dela i stället avbrottsrollen genom rotation och belöna borttagande av orsaker.
- **Allt är en expediering.** En fil som alltid är full är bara en andra kö. Sätt i stället en gräns, kräv en angiven fördröjningskostnad och granska inträdesprovet månadsvis.
- **Att planera vid full utnyttjandegrad.** En plan utan slack garanterar att varje överraskning tränger undan något. Dimensionera i stället en buffert utifrån din egen avbrottshistorik och planera den kapacitet som återstår.
- **Att klassificera i efterhand.** Etiketter som läggs till vid periodens slut speglar minne och humör. Kräv i stället etiketterna vid intaget och frys planeringsögonblicksbilden.
- **Att tyst absorbera efterfrågan.** Tjänster som aldrig når loggen gör belastningen osynlig och planeringen fel. Gör i stället en intagsväg till regel och omdirigera sidokanalsförfrågningar till den.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Klassificering och synlighet | Arbete märks inte; oplanerat arbete känns, räknas inte | Vissa team märker planerat och oplanerat arbete med egna ord | En skriven definition av arbetstyper och planerad-flaggan, tillämpad vid intaget med en planeringsögonblicksbild | Andel oplanerat och antal oklassificerade följs över tid och granskas varje period | Definitioner delas över team och leverantörer och revideras när de slutar ge underlag för beslut |
| Kapacitetsfördelning | Kapacitet antas vara fullt tillgänglig för planerat arbete | En grov buffert tillämpas av vissa team | En överenskommen uppdelning mellan förändring, drift och förbättring, med en buffert dimensionerad ur historik | Följsamhet granskas och uppdelningen justeras med produkt- och tjänsteägare | Fördelning förhandlas över team som delar plattformar, tjänster och människor |
| Hantering av avbrott och expediering | Vem som helst avbryter vem som helst; brådska sätts av senioritet | En vana med en jourperson eller en brådskande rad finns i vissa team | En namngiven avbrottsroll, en triageregel och en expressfil med en gräns och ett inträdesprov | Expedieringsgrad, undanträngning och avbrottsfrekvens granskas mot ett skyddsräcke | Avbrottsdirigering och expedieringsregler samordnas över team, med delad jour och eskaleringsvägar |
| Borttagande av orsaker | Samma problem återkommer och rättas med hjältedåd | Vissa upprepningar märks och diskuteras i retrospektiv | Oplanerade objekt bär en orsaksetikett och de främsta upprepningarna går till problemhantering | Andel upprepningar följs och rättelser finansieras som planerat förbättringsarbete | Orsaker spåras över team, leverantörer och kunder, och förbättring är rutin |

## Checklista

- [ ] Varje arbetsobjekt bär en arbetstyp (förändring, drift, förbättring) och en planerad-flagga, satta vid intaget.
- [ ] Definitioner av planerat, oplanerat, förändring och drift är skrivna i teamets arbetsöverenskommelse.
- [ ] En planeringsögonblicksbild fryses vid början av varje period och sparas.
- [ ] Andelen oplanerat arbete redovisas som en trend, bredvid antalet oklassificerade.
- [ ] Teamet och dess ägare har enats om en kapacitetsfördelning och granskat den det senaste kvartalet.
- [ ] En intagsväg finns, och sidokanalsförfrågningar omdirigeras till den.
- [ ] En avbrottsroll med en skriven omfattning roterar inom teamet.
- [ ] Expressfilen har en gräns, ett inträdesprov och en förteckning över vad varje expediering trängde undan.
- [ ] Oplanerade objekt bär en orsaksetikett eller en länk till en problempost, och upprepningar granskas månadsvis.
- [ ] Mått redovisas på team- och tjänstenivå och används aldrig för att rangordna individer.

## AI-prompter

**Utforma en arbetsklassificering för intag.**

```text
Our team is [team description, for example a platform team of six that builds
and supports an internal service]. We use [tracker or ITSM tool]. We want to
tag every item at intake as change, run, or improvement, and as planned or
unplanned. Draft clear one-sentence definitions for each value, three edge
cases that people will argue about with a suggested ruling for each, and a
short intake form. Do not invent features of our tool or benchmark values. List
your assumptions and the questions I should answer to refine the definitions.
```

**Analysera en avbrottslogg efter mönster.**

```text
Here is a summary of our interrupts over [period]: [paste anonymized counts by
source, day, and type, with no names of individuals]. Group them into sources
that could be removed, routed to one person, batched, or accepted. For each
group, suggest one experiment and one measure of whether it worked. Do not
invent benchmark values or compare us to other organizations. List your
assumptions and the data you would need to be more confident.
```

**Skriv ett utkast till en policy för expressfilen.**

```text
We run [flow board, time-boxed planning, continuous flow, or a hybrid] with a team of [team size]
and a service level of [service levels, if any]. Draft a one-page expedite
policy with an entry test based on a stated cost of delay, a limit on items in
the lane, a rule for what happens to the displaced item, and a monthly review
question list. Keep the language neutral and avoid naming individuals. Do not
invent thresholds; mark the ones I must choose. List your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta vilket ämne som äger ett relaterat mätetal, till exempel incidentvolym eller rutinarbete, och skyddsräcket som hör bredvid.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en redigerad version av det här ämnet håller sina klockor, klassificeringsregler och manipulationstabell i takt.

## Viktigaste slutsatser

- Planerat och oplanerat arbete, och förändrings- och driftarbete, delar en kapacitetspool, så gör uppdelningen synlig och enas om den med avsikt.
- Märk arbete vid intaget och frys en planeringsögonblicksbild, eftersom "oplanerat" bara betyder något mot en registrerad plan.
- Avbrott kostar återhämtningstid såväl som minuter, så dirigera dem till en namngiven roll och gör triage vid dörren.
- En expressfil behöver en gräns, ett inträdesprov och en förteckning över vad varje expediering trängde undan.
- Upprepat oplanerat arbete är den starkaste signalen för problemhantering och förbättringsarbete, och andelen upprepningar visar om rättelser får genomslag.
- Redovisa på team- och tjänstenivå, jämför ett team med dess egen historik och rangordna aldrig individer.

## Referenser och vidare läsning

1. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Rau, V., "Eliminating Toil," chapter 5 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/eliminating-toil/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Kim, G., Behr, K., and Spafford, G., *The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win*, IT Revolution Press, 2013.
8. DeMarco, T., *Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency*, Broadway Books, 2001.
9. Mark, G., Gudith, D., and Klocke, U., "The cost of interrupted work: more speed and stress," in *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2008)*, ACM, 2008.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Kanban (development)](https://en.wikipedia.org/wiki/Kanban_(development)).
12. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
13. Wikipedia, [Task switching (psychology)](https://en.wikipedia.org/wiki/Task_switching_(psychology)).
14. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
16. Wikipedia, [Triage](https://en.wikipedia.org/wiki/Triage).
17. Wikipedia, [Class of service](https://en.wikipedia.org/wiki/Class_of_service).
18. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
