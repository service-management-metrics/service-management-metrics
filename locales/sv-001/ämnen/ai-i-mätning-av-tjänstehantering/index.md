# AI i mätning av tjänstehantering

**Skriv ned hur arbetet ser ut i dag innan AI förändrar det, mät sedan varje användning av AI mot den baslinjen och mot jämförbart arbete utan den, eftersom påståendena kommer att vara stora och beläggen vanligtvis små.**

## Översikt och motiv

Artificiell intelligens finns nu inuti många av de verktyg som team använder för att bygga och driva tjänster. [Artificiell intelligens](https://en.wikipedia.org/wiki/Artificial_intelligence) (AI) är beräkningssystems förmåga att utföra uppgifter som förknippas med mänsklig intelligens. Inom den lär sig [maskininlärnings](https://en.wikipedia.org/wiki/Machine_learning)system mönster ur data, och [generativa AI](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)-system, ofta byggda på [stora språkmodeller](https://en.wikipedia.org/wiki/Large_language_model), producerar text, kod och annat innehåll som svar på prompter. Inom it-tjänstehantering (ITSM) dyker dessa förmågor upp i ärendetriagering, sammanfattning av incidenter, utkast till kunskapsartiklar, föreslagna svar för servicedesk, kodkomplettering och granskning i leveranspipelines, avvikelsedetektering i övervakning och samtalsassistenter för användare. [AIOps](https://en.wikipedia.org/wiki/AIOps) är namnet som ofta ges åt tillämpningen av AI på it-driftsdata.

Påståendena om dessa verktyg är stora, och beläggen i en given organisation är vanligtvis små. Leverantörer redovisar sparad tid. Tidiga användare redovisar entusiasm. Chefer ber om den effektivitetsvinst som utlovades. Team rapporterar under tiden att utdatan behöver kontrolleras, att vissa förslag är självsäkert felaktiga och att arbetet känns annorlunda. Mätning är hur en organisation tar reda på vilket av dessa som stämmer för dess eget arbete. Den här delen av boken tar AI på allvar som något som ska mätas, med samma skyddsräcken som vilken annan mätetalsfamilj som helst.

AI ändrar mätproblemet på fyra sätt.

- **Volym och hastighet stiger medan kvalitet blir svårare att se.** AI kan producera ärenden, svar, kod och dokument snabbt, så mått på utdata går upp. Om utdatan är bra är en separat fråga (se ämne 10.4, Mätetalsinflation och kvalitetsurvattning).
- **Baslinjer försvinner.** När AI väl används dagligen kan du inte återskapa hur arbetet såg ut utan den. En baslinje måste fångas före ändringen, eller så måste en jämförelsegrupp finnas.
- **Människor blir kvar i loopen, med följder.** Utformningar med [människa i loopen](https://en.wikipedia.org/wiki/Human-in-the-loop) håller en person ansvarig för resultatet. Människor som granskar maskinell utdata kan ge efter för den för lättvindigt, ett mönster känt som [automatiseringsbias](https://en.wikipedia.org/wiki/Automation_bias), eller så kan de lägga mer tid på att kontrollera än de sparade.
- **Utdata kan vara flytande och felaktig.** En [hallucination](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) är en självsäker utdata som inte stöds av indata eller av fakta. Mått måste inkludera en kontroll av riktigheten, stickprovad av en person.

Agila och ITIL-baserade arbetssätt ger båda en hållning till detta. De agila målen om kontinuerlig leverans, ständig förbättring och fortlöpande utveckling föreslår att man behandlar varje användning av AI som ett litet experiment: ange den förväntade nyttan, pröva med några villiga människor, jämför och besluta. ITIL:s vägledande princip att gå framåt iterativt med återkoppling pekar åt samma håll, och dess betoning på värde frågar vilket utfall som förbättras för användare och verksamhet, inte hur mycket text som produceras. Målet om motiverade människor tjänas när AI avlastar tråkigt arbete och respekterar deras omdöme, och det tjänas inte när AI blir ett sätt att öka takten eller att övervaka de människor som använder den. Hållbar takt innebär att sparad tid inte tyst ska omvandlas till mer efterfrågan.

Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller AI i sin skarpaste form. Om "AI-införande" eller "AI-genererad andel av kod" blir ett mål kommer människor att använda verktyget där det inte hjälper, och kvaliteten får betala för talet (se ämne 1.2, Goodharts lag och mätetalens psykologi).

Det här ämnet täcker grunderna: var AI kommer in i arbetet, vilka baslinjer som ska fångas och vilka mått som visar om en användning av AI hjälper. De följande ämnena går djupare in på stött arbete, på agenter och chattbottar, på inflation och urvattning och på styrning. Fakta om AI-produkter och regler förändras snabbt, och uttalanden om specifika verktyg eller regelverk i den här delen är daterade till oktober 2026 och bör kontrolleras på nytt.

## Nyckelprinciper

- **Fånga en baslinje innan AI införs.** Utan en är varje påstående om nytta en åsikt.
- **Behandla varje användning som ett experiment med en jämförelse.** Jämför med liknande arbete utan AI, över samma period.
- **Mät kvalitet genom stickprov, tillsammans med människor.** Flytande utdata är inte riktig utdata.
- **Räkna den fulla kostnaden.** Inkludera granskningstid, omarbete, licenser och inferenskostnader.
- **Håll människor ansvariga och informerade.** Personen som använder AI svarar för resultatet.
- **Låt inte AI bli en takthöjning eller en övervakare.** Sparad tid är ett val om hur tiden ska användas.
- **Börja med villiga människor och verkliga problem.** Påbud ger användning utan värde.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Baslinjens fullständighet | Andel planerade AI-användningsfall som har en registrerad baslinje före införandet för sina huvudindikatorer | användningsfall med daterad baslinje / planerade användningsfall | procent | Register över användningsfall | Ständig förbättring; mätning och rapportering | Baslinje före ett experiment | Kvartalsvis |
| AI-användningens täckning | Andel av de berättigade arbetsposterna eller uppgifterna där AI användes, per användningsfall | poster där AI-stöd användes / berättigade poster, från verktygsloggar eller användartaggar, på teamnivå | procent | Verktygsanvändningsloggar, taggar | Servicedesk; incidenthantering; release- och driftsättningshantering | Införande av ett verktyg hos villiga team | Månadsvis |
| Acceptans- och åsidosättandegrad för förslag | Andel AI-förslag som accepterades som de var, redigerades eller avvisades | förslag i varje kategori / erbjudna förslag | procent | Verktygsloggar aggregerade per team | Servicedesk; kunskapshantering | Granskning av maskinella förslag | Månadsvis |
| Riktighet i granskad utdata | Andel stickprovade AI-utdata som en kvalificerad granskare bedömde som riktiga och ändamålsenliga | utdata bedömda som riktiga / stickprovade utdata | procent | Stickprovsgranskningsregister | Kvalitetssäkring; kunskapshantering | Definition av klart för utdatan | Månadsvis |
| Uppgiftstid mot baslinje | Tid för att slutföra en definierad uppgift med AI jämfört med baslinjen eller en jämförelsegrupp | median och 85:e percentil av uppgiftstid med AI minus samma för baslinje eller jämförelse | minuter eller timmar | Tidtagna uppgifter, ärendetidsstämplar | Servicedesk; incidenthantering | Cykeltid för en uppgift | Kvartalsvis |
| Kostnad per AI-stödd uppgift | Total kostnad för AI-stött arbete per uppgift, inklusive granskning och omarbete | (licens- och användningskostnad + kostnad för granskning och omarbete i tid) / uppgifter slutförda med AI | valuta per uppgift | Leverantörsfakturor, tidsuppskattningar, arbetsverktyg | Ekonomistyrning av tjänster | Kostnad att leverera per utfall | Kvartalsvis |
| Resultatförflyttning mot jämförelse | Förändring i resultatindikatorn för AI-stött arbete jämfört med liknande icke-stött arbete | förändring i indikator för den AI-stödda gruppen minus förändring för jämförelsegruppen | indikatorenheter | Resultatmått per användningsfall (kvalitet, nöjdhet, återöppningsgrad, fel) | Ständig förbättring | Lärande av experiment | Kvartalsvis |

Definiera varje användningsfall efter uppgiften, användarna och resultatindikatorerna och registrera dem i registret. AI-användningens täckning är ett beskrivande mått och inte ett mål. Riktighet i granskad utdata bedöms mot en skriven standard av någon kvalificerad som inte producerade utdatan. Uppgiftstid inkluderar tiden för att ge prompter, granska och rätta såväl som att generera. Kostnad per uppgift räknar med den människotid som läggs på att kontrollera och rätta. Resultatförflyttning kräver en jämförelse vald i förväg och en anteckning om andra förändringar under perioden.

## Rekommendationer

### Bestäm var AI hör hemma

**1. Lista uppgifterna och problemet varje användning av AI tar itu med.** Börja från smärtan, inte från verktyget: upprepade utkast, långsam triagering, utspridd kunskap, långa granskningar, bullriga larm. För varje kandidatanvändning, skriv problemet, vem som känner det, resultatet som bör förbättras och riskerna. Hoppa över användningar utan ett tydligt problem. Detta är registret som baslinjen och måtten hänger på.

**2. Klassificera risken för varje användning.** Ett verktyg som skriver utkast till interna anteckningar bär en annan risk än ett som ändrar produktionssystem, svarar kunder eller fattar beslut om människor. Klassificera användningar efter skadan om utdatan är fel, vem som berörs och om en person granskar den innan den får verkan. Användningar med högre risk behöver starkare mått, stickprov och styrning (se ämne 10.5, Mätetal för AI-styrning och AI-risk).

**3. Börja med villiga människor och avgränsade uppgifter.** Pilotera med frivilliga på en uppgift som är vanlig och kontrollerbar. Frivilliga ger ärlig återkoppling och anpassar verktyget till sitt arbete. En avgränsad uppgift gör baslinjer och jämförelser möjliga. Undvik att börja med det mest känsliga arbetet.

### Fånga baslinjer och ordna jämförelser

**4. Registrera baslinjen före första användningen.** För varje användningsfall, fånga det nuvarande läget för indikatorerna: tid att slutföra, kvalitets- eller felgrad, omarbete, användarnas nöjdhet och kostnad. Ta tillräckligt många observationer för att se den normala variationen (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal). Datera baslinjen och behåll den. En baslinje tagen efter utrullning är en bild av den nya världen.

**5. Bygg en jämförelse.** Där det är möjligt, håll en liknande grupp eller uppsättning uppgifter som inte använder AI under pilotperioden, eller växla användning per vecka eller uppgiftstyp på ett rättvist sätt. Randomisering är idealiskt och ofta opraktiskt. Ange tydligt vad annat som ändrades. Utan en jämförelse kommer förbättringar som beror på säsong, bemanning eller lärande att tillskrivas verktyget.

**6. Mät tid ärligt.** Tid till ett första utkast är sällan rätt mått. Mät tid till ett färdigt, kontrollerat resultat, inklusive prompter, granskning och rättelse. Människor rapporterar ofta sparad tid utifrån genereringssteget, och granskningssteget äter upp en del av den eller hela. Tidsstudier på ett stickprov uppgifter är värda mödan.

### Mät kvalitet och kostnad

**7. Stickprova utdata för granskning av kvalificerade människor.** Varje månad, dra ett slumpmässigt stickprov av AI-stödda utdata och låt en kvalificerad person bedöma dem mot en skriven standard. Redovisa riktighet, vilka slags fel som hittades och trender. Detta är det främsta skyddet mot att flytande misstag sprids. Håll granskaren oberoende av producenten och rotera granskare.

**8. Bevaka acceptans- och åsidosättandemönster.** En mycket hög acceptansgrad kan signalera automatiseringsbias, där människor accepterar utan att kontrollera. En mycket låg grad kan signalera ett verktyg som inte är användbart. Använd graderna som underlag för samtal med teamet och fråga vad talen betyder i deras erfarenhet. Sätt inga mål för acceptans.

**9. Räkna den fulla kostnaden per uppgift.** Inkludera licensavgifter, användningsbaserade avgifter, tiden som läggs på att ge prompter, granska och rätta, utbildning och styrningsinsats. Jämför med baslinjekostnaden. Ett verktyg som snabbt gör utkast och behöver kraftig rättelse kan kosta mer än det gamla sättet. Inkludera kostnaden för misstag som når användare.

### Få människosidan rätt

**10. Skydda människor från övervakning och från smygande taktökning.** Aggregera AI-användningsdata på teamnivå och använd den inte för att betygsätta individer. Använd inte användning som ett prestationsmått. Kom överens i förväg om att sparad tid inte automatiskt blir extra arbetsbelastning och besluta tillsammans med teamet vad den ska användas till: kvalitet, lärande, förbättring eller annat arbete. En jämn takt är ett designmål (se ämne 9.2, Mätetal för nöjdhet och välbefinnande).

**11. Fråga de människor som använder den.** Korta pulser och samtal avslöjar det talen missar: var verktyget hjälper, var det frustrerar, var det flyttar arbetet från att skapa till att kontrollera och om det ändrar arbetets tillfredsställelse. Behandla farhågor om färdigheter, kvalitet och anställningstrygghet med respekt.

**12. Besluta, publicera och återbesök.** Vid slutet av varje pilot, besluta att skala, anpassa eller stoppa och registrera beläggen. Dela resultat ärligt, inklusive inga och negativa. Återbesök beslut när verktygen förändras, vilket de gör snabbt. En användning som inte hjälpte förra året kan hjälpa nu, och tvärtom.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Baslinjens fullständighet | Att registrera baslinjer i efterhand; att använda bekväma indikatorer | Datumstämplade baslinjer; oberoende granskning av baslinjemetoden |
| AI-användningens täckning | Att påbjuda användning; att räkna triviala eller automatiska anrop | Aldrig ett mål; jämför med resultatförflyttning; räkna meningsfull användning |
| Acceptans- och åsidosättandegrad för förslag | Att belöna acceptans; att göra avvisande krångligt | Inga mål; riktighet i granskad utdata; fråga användare om deras erfarenhet |
| Riktighet i granskad utdata | Att stickprova lätta utdata; överseende granskare | Slumpmässigt stickprov av oberoende granskare; skriven standard; roterande granskare |
| Uppgiftstid mot baslinje | Att bara tidta genereringen; att välja lätta uppgifter | Tid till kontrollerat resultat; stickprova uppgifter slumpmässigt; inkludera granskning och omarbete |
| Kostnad per AI-stödd uppgift | Att utelämna granskningstid eller styrningskostnad | Checklista för full kostnad; jämför med tidsstudier |
| Resultatförflyttning mot jämförelse | Att välja gynnsamma grupper eller perioder; att ignorera andra förändringar | Jämförelse och period överenskomna i förväg; lista över andra förändringar |

En sund avläsning är baslinjer för varje pilot, mätt tid till färdiga resultat, riktighet kontrollerad av kvalificerade människor, kostnader som inkluderar granskning, resultat som jämförs rättvist och team som säger att verktyget tjänar deras omdöme.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Pilot med frivilliga | Ärlig återkoppling; låg risk | Frivilliga är entusiaster; resultat generaliserar kanske inte |
| Påbjuden utrullning | Snabb täckning | Användning utan värde; förbittring; manipulation |
| Kontrollerad jämförelse | Trovärdigt belägg | Insats; inte alltid möjlig |
| Enbart före och efter | Enkelt | Förvirrat av andra förändringar |
| Leverantörsrapporterade besparingar | Lätta att få | Optimistiska; utan sammanhang |
| Egna tidtagna uppgifter | Förankrade i ditt arbete | Tidskrävande; små stickprov |
| Tung granskning av varje utdata | Säkert | Tar bort nyttan |
| Stickprovsgranskning | Skalar | Vissa fel slinker igenom |

Svaret är att köra små piloter med baslinjer och jämförelser, stickprova utdata för kvalitet, räkna full kostnad och besluta utifrån beläggen. Använd leverantörstal som hypoteser att testa.

## Frågor att diskutera med teamet

**1. Var förväntar vi oss att AI ska hjälpa oss, och vad skulle vi se om den gjorde det?**
Lista kandidatanvändningar och, för var och en, indikatorn och baslinjen vi har i dag. Facilitatorn bör pressa på för specifika svar: vilken uppgift, vilket mått, vilken storlek på förändring som skulle spela roll. Välj en användning att pilotera och kom överens om baslinjen.

**2. Vad skulle få oss att lita på eller misstro ett AI-förslag, och hur skulle vi veta att vi hade fel?**
Diskutera fall där utdatan var felaktig och hur det märktes. Fundera på hur granskning fungerar i praktiken och om press leder till att den hoppas över. Enas om en stickprovsmetod som någon oberoende kör.

**3. Hur mycket av tiden vi sparar skulle gå åt till kontroll?**
Tidta en verklig uppgift med och utan verktyget, inklusive prompter och granskning. Jämför med vad människor förväntar sig. Samtalet avslöjar ofta var vinsten finns och var den inte gör det.

**4. Vad ska vi göra med tid vi sparar?**
Besluta i förväg. Alternativen inkluderar kvalitetsarbete, lärande, förbättring eller mindre press. Diskutera hur man hindrar att tiden tyst absorberas i mer efterfrågan. Kom överens med ledare om hur teamet ska skydda den.

**5. Vad skulle vi inte vilja att AI gjorde här, och varför?**
Lista uppgifter som kräver mänskligt omdöme, empati eller ansvar. Diskutera risker för användare och för färdigheter. Facilitatorn bör registrera gränserna som indata till styrningen.

**6. Hur ska vi veta när vi ska sluta?**
Definiera det belägg som skulle avsluta piloten eller användningen. Kom överens om vem som beslutar och när. En pilot utan avslutskriterier blir en permanent inrättning.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam använder AI för kod, test, granskningar och dokumentation. De bör mäta tid till ett granskat, fungerande resultat, bevaka kvalitet och fel och hålla mänsklig granskning meningsfull. De bör motstå mått som räknar genererade rader eller acceptans och insistera på resultatmått såsom fel och stabilitet.

### Service- och driftteam

Drift- och servicedeskteam använder AI för triagering, sammanfattningar, förslag och övervakning. De bör jämföra hanterings- och lösningskvalitet med baslinjer, stickprova utdata och bevaka effekter på användare och på återkommande kontakter. De bör rådfrågas innan AI placeras framför användare.

### Ledning och styrning

Ledare sponsrar AI-program och möter press att visa vinster. De bör insistera på baslinjer och jämförelser, finansiera granskningsarbetet, undvika användningsmål och skydda människor från övervakning och smygande taktökning. Styrningen bör kräva riskklassificering och belägg före skalning.

### Kunder och användare

Användare möter AI i svar, förslag och automatiserade handlingar. De vill ha riktig, begriplig hjälp och möjlighet att nå en person. De bör få veta när de interagerar med AI där det är lämpligt, och deras återkoppling är nyckelbelägg för om det hjälper (se ämne 6.1, Mätetal för kundnöjdhet).

## I praktiken: ett exempel från tjänstehantering

Ett medelstort försäkringsbolags teknikgrupp driver en intern servicedesk för 4 000 anställda och flera produktteam. Ledningen köper licenser för en AI-assistent och ber om en rapport över sparad tid efter tre månader. Siffrorna nedan är illustrativa.

Chefen för tjänstehantering insisterar på en baslinje. För servicedeskens vanligaste uppgift, att skriva svar på behörighets- och lösenordsförfrågningar, tidtar hon 120 färska ärenden: en mediantid för hantering på 11 minuter, en 85:e percentil på 24, en återöppningsgrad på 6 procent och ett nöjdhetsbetyg från enkäten som är stabilt. Hon väljer två team att pilotera assistenten och behåller två liknande team som jämförelse. Pilotteamen är frivilliga.

Efter åtta veckor är pilotteamens mediantid för hantering 8 minuter och 85:e percentilen 19, jämfört med 11 och 23 i jämförelseteamen. Verktygsloggarna visar att agenter accepterar förslag som de är i 52 procent av fallen, redigerar dem i 38 procent och avvisar dem i 10 procent. Ett månatligt slumpmässigt stickprov om 80 svar, granskade av en senior agent utanför piloten, finner 91 procent helt riktiga, med fel koncentrerade till en sällan använd procedur där assistenten gav föråldrade steg. Återöppningsgraden i pilotteamen stiger något till 7 procent, inom den normala variationen. Kostnaden per ärende faller måttligt när licenser och granskningstid räknas med. En enkät visar att agenter uppskattar utkasten och ogillar den extra kontrollen av långa svar. Två agenter säger att de känner press att hantera fler ärenden per timme.

Chefen för tjänstehantering redovisar en tidsbesparing på ungefär en fjärdedel vid medianen och anger förbehållen: två team, åtta veckor, frivilliga och en återöppningsgrad som behöver bevakas. Hon kommer överens med ledare om att den sparade tiden ska gå till kunskapsbasen och till komplexa fall och att inga ärendemål höjs. Den föråldrade proceduren rättas i kunskapsbasen. En senior chef ber om obligatorisk användning företagsövergripande och ett mål på 80 procents acceptans. Hon avböjer målet och förklarar att ett acceptansmål skulle belöna att inte kontrollera, och föreslår att utöka piloten till två team till med samma mått. Beslutet registreras.

## Agilitet, AI, automatisering och analys

### Agilitet

Inför AI i små steg tillsammans med intressenter, med en baslinje och en jämförelse för varje steg, och granska resultatet vid det regelbundna förbättringssamtalet. Varningen är att rulla ut AI överallt på en gång tar bort jämförelsegruppen.

### AI

Hela det här ämnet handlar om AI, så regeln är enkel: registrera arbetet som det är i dag, mät varje användning mot den baslinjen och mot jämförbart arbete utan AI och para varje hastighetsvinst med ett kontrollerat kvalitetsmått. Namnge en ägare för varje användning och bestäm i förväg var en människa beslutar. Varningen är att leverantörstal beskriver andra organisationer, så använd dina egna data.

### Automatisering

Samla in användnings-, förslags-, acceptans- och åsidosättandehändelser automatiskt och mät automatisering som tillämpar AI-utdata på dess fel- och återkallandegrader. Varningen är att acceptansgrader kan stiga därför att människor slutar kontrollera, så stickprova accepterad utdata.

### Analys

Redovisa riktighet från ett granskat stickprov med stickprovsstorleken, och resultat mot en jämförelse med de angivna gränserna. Beslutet detta ger underlag för är om en användning av AI ska utökas, ändras eller stoppas. Varningen är att små piloter ger brusiga resultat, så undvik att utlova ett tal från en pilot.

## Branschperspektiv

**Startup.** Verktyg införs snabbt och ofta informellt. Fånga en enkel baslinje för tid och fel för huvudanvändningen, behåll mänsklig granskning av allt som vänder sig till kunder och undvik att låsa in sig hos en enda leverantör tidigt. Bevaka säkerhet och dataexponering när personal använder publika verktyg.

**Småföretag.** Färdiga assistenter kan ge verklig hjälp med utkast och rutinuppgifter. Mät i liten skala: tid för några verkliga uppgifter och andelen rättelser. Var försiktig med konfidentiella data och kontrollera leverantörens villkor för hur data används.

**Storföretag.** Skala kräver styrning, upphandlingsstandarder och ett gemensamt mätsätt. Kör piloter med jämförelse, publicera resultat internt och dela baslinjer och metoder mellan team. Se upp för program som redovisar användning som framgång.

**Offentlig sektor.** Beslut som påverkar medborgare kan omfattas av lagliga skyldigheter om öppenhet, rättvisa och mänsklig granskning. Klassificera användningar efter risk, för register över hur AI användes i beslut och var öppen om det. Upphandlingsregler och dataskydd gäller, och vissa jurisdiktioner har särskilda AI-lagar som bör kontrolleras i dagsläget (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna är licenser eller användningsavgifter, integration, utbildning, tiden för att fånga baslinjer och köra jämförelser, den människotid som läggs på att granska och rätta utdata och styrningsinsats. Kostnader kan skala med användning och förändras med leverantörens prissättning, så modellera ett intervall.

De potentiella avkastningarna är återvunnen tid på repetitiva uppgifter, snabbare utkast och sökning, bättre täckning av kunskap och avlastning för personal från tråkigt arbete. Dessa är möjligheter att testa, inte antaganden att räkna hem. Bygg caset ur dina egna piloter: mätt uppgiftstid till ett kontrollerat resultat, granskad riktighet, omarbete och full kostnad per uppgift, mot baslinje och jämförelse. Undvik att citera produktivitetsprocent från leverantörs- eller enkätkällor om du inte kan spåra metoden och passformen till ditt arbete. Inkludera risken för misstag som når användare och kostnaden för att styra verktygen (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att införa AI utan baslinje.** Du kan inte avgöra vad som ändrades. Fånga den först.
- **Att mäta genereringshastighet.** Besparingen kan försvinna i granskning. Mät tid till ett kontrollerat resultat.
- **Införandemål.** De ger användning utan värde. Behandla täckning som beskrivande.
- **Att lita på leverantörspåståenden.** De är hypoteser. Testa dem på ditt arbete.
- **Granskning som inte är verklig.** Automatiseringsbias gör granskning till en stämpel. Stickprova och kontrollera oberoende.
- **Att omvandla sparad tid till mer efterfrågan.** Det urholkar förtroende och hållbar takt. Bestäm i förväg vad tiden är till för.
- **Att övervaka individuell användning.** Det föder rädsla. Aggregera till teamnivå.
- **Piloter utan slut.** De blir permanenta som standard. Sätt avslutskriterier.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Syfte och baslinjer | Verktyg införs av entusiasm | Användningsfall listade | Register med problem, riskklass, baslinje och indikator för varje användning | Baslinjer och jämförelser krävs före skalning; resultat publiceras | Delade baslinjer och metoder över team och partner; användningar avvecklas när belägget bleknar |
| Belägg för nytta | Anekdoter och leverantörspåståenden | Informella tidsuppskattningar | Tidtagna uppgifter; stickprovad riktighet; full kostnad per uppgift | Resultatförflyttning mot jämförelse redovisas med gränser | Portföljbild av var AI hjälper, med lärande delat brett |
| Människor och takt | Påbud; övervakning | Informell omsorg | Endast data på teamnivå; sparad tid fördelas genom överenskommelse | Farhågor följs; färdigheter och nöjdhet mäts | Samdesign av AI-användning med användare och personal; bibehållen takt skyddas |

## Checklista

- [ ] Varje användning av AI har ett skrivet problem, en riskklass, en ägare och avslutskriterier.
- [ ] En daterad baslinje finns för varje pilot före första användningen.
- [ ] En jämförelsegrupp eller jämförelseuppgifter är definierade i förväg.
- [ ] Tid mäts till ett färdigt, kontrollerat resultat.
- [ ] Utdata stickprovas månadsvis och granskas av kvalificerade, oberoende människor.
- [ ] Full kostnad per uppgift inkluderar granskning och omarbete.
- [ ] Användningsdata aggregeras på teamnivå och används inte för individer.
- [ ] Teamet har kommit överens om vad sparad tid ska användas till.
- [ ] Användare tillfrågas om sin erfarenhet av verktyget.
- [ ] Piloter slutar i ett registrerat beslut att skala, anpassa eller stoppa.

## AI-prompter

**Skriv ett utkast till en post för ett användningsfall.**

```text
We are considering using AI for [task] in [team and service]. Draft a use case
register entry: the problem and who feels it, the outcome that should improve,
risk classification and why, the human review step, baseline indicators to
capture now, a comparison approach, cost components to track, exit criteria,
and questions for the team. Do not assume specific vendor features or claim
benefits. List your assumptions.
```

**Utforma en studie med tidtagna uppgifter.**

```text
Design a small study to measure the effect of an AI assistant on [task]. Propose
how to select tasks, how to compare with and without the tool fairly, what to
time (including prompting, review, and correction), how to judge output quality,
and how to avoid bias. Keep it practical for a team of [number] people.
Do not state expected results. List your assumptions and limits of the design.
```

**Planera stickprov av utdata.**

```text
Our AI-assisted outputs per month are about [number] of types [list]. Design a
monthly random sampling and review process: sample size and selection method (with
the reasoning, avoiding overstated precision), who reviews, the written standard,
error categories, how to report, and how to use findings. List your assumptions
and risks.
```

**Besluta vad sparad tid ska användas till.**

```text
Our pilot saved a median of [value] per task for [number] tasks per week in
[team]. Suggest options for using the time that support quality, learning, and
a sustainable pace, with the trade-offs and risks of each, and a way to agree
the choice with the team and leaders. Do not assume the savings will persist.
List your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett AI-relaterat mätetal innan det redovisas.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för AI-mätetal registrerar sin baslinje, sin jämförelse, sin manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- Fånga en daterad baslinje innan AI används och jämför med liknande arbete utan den.
- Mät tid till ett färdigt, kontrollerat resultat och stickprova utdata för riktighet med oberoende granskare.
- Räkna full kostnad, inklusive granskning och omarbete.
- Behandla användning och acceptans som beskrivande, aldrig som mål.
- Bestäm i förväg vad sparad tid ska användas till och håll en hållbar takt.
- Håll användningsdata på teamnivå och avsluta varje pilot med ett registrerat beslut.

## Referenser och vidare läsning

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
4. Bender, E. M., Gebru, T., McMillan-Major, A., and Shmitchell, S., "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 2021.
5. Russell, S., and Norvig, P., *Artificial Intelligence: A Modern Approach*, 4th ed., Pearson, 2020.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
8. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
9. Wikipedia, [Generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence).
10. Wikipedia, [Large language model](https://en.wikipedia.org/wiki/Large_language_model).
11. Wikipedia, [AIOps](https://en.wikipedia.org/wiki/AIOps).
12. Wikipedia, [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop).
13. Wikipedia, [Automation bias](https://en.wikipedia.org/wiki/Automation_bias).
14. Wikipedia, [Hallucination (artificial intelligence)](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
