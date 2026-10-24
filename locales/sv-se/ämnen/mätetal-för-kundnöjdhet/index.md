# Mätetal för kundnöjdhet

**Nöjdhetspoäng talar om hur människor kände inför ett ögonblick av service, så ställ korta, ärliga frågor vid rätt tidpunkt, läs kommentarerna före talen och låt aldrig ett poäng bli en kvot.**

## Översikt och motiv

Driftmått säger vad tjänsten gjorde. Nöjdhetsmått säger hur det var att ta emot den. Ett ärende kan stängas inom sin måltid och ändå lämna användaren fast, och en återställd tjänst kan ändå kännas som en dålig vecka. Agila team ställer samma fråga i slutet av varje inkrement: hjälpte detta de människor det var till för? It-tjänstehantering (ITSM), så som den kodifierats av ITIL, ställer den genom värdet en tjänst samskapar med sina kunder. Nöjdhetsmätning är där de två frågorna möts.

[Kundnöjdhet](https://en.wikipedia.org/wiki/Customer_satisfaction) är ett mått på hur väl produkter och tjänster möter eller överträffar vad kunder förväntar sig. I tjänstearbete samlas den vanligen in genom enkät, och den kommer i tre vanliga former som det här ämnet täcker:

- **Kundnöjdhetspoäng (CSAT):** ett betyg på en specifik interaktion eller tjänst, vanligen på en femgradig skala, redovisat som andelen nöjda svar.
- **Nettopromotorindex (NPS):** baserat på en fråga om hur sannolikt det är att en svarande rekommenderar ett företag, en produkt eller en tjänst. Svarande som svarar 9 eller 10 är promotorer, de som svarar 0 till 6 är kritiker och poängen är procentandelen promotorer minus procentandelen kritiker. [Nettopromotorindex](https://en.wikipedia.org/wiki/Net_promoter_score) populariserades av Fred Reichheld i en artikel i *Harvard Business Review* 2003.
- **Kundansträngningspoäng (CES):** ett betyg på hur mycket ansträngning det tog att få något gjort, eller hur lätt det var. Dess upphovsmän hävdade att minskad ansträngning förutsäger lojalitet bättre än att förtjusa människor. Behandla det påståendet som en hypotes att pröva i ditt eget sammanhang, inte som fastställt faktum.

I en intern it-miljö är "kunden" en kollega, och enkäten är en kort fråga efter ett ärende eller en release. Principerna är desamma, och de etiska skyldigheterna är större, eftersom människorna du frågar arbetar med dig i morgon.

Enkäter är en form av [enkätmetodik](https://en.wikipedia.org/wiki/Survey_methodology), ett fält med decennier av rön om hur frågeformulering, tidpunkt och urval ändrar svar. Team som hoppar över den tenderar att producera poäng som rör sig av skäl som inte har med servicekvalitet att göra. Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller med extra kraft här: när personal belönas för ett högt poäng lär de sig att be om det (se ämne 1.2, Goodharts lag och mätetalens psykologi).

Det här ämnet ger dig definitionerna, datahygienen och vanorna som håller nöjdhetsmått ärliga. Nästa ämne utvidgar dem mot en fullare bild av upplevelse (se ämne 6.2, Överenskommelser om upplevelsenivå).

## Nyckelprinciper

- **Fråga om ett specifikt ögonblick.** En enkät knuten till ett stängt ärende eller en release ger skarpare svar än en allmän årlig fråga.
- **Håll den kort.** Ett betyg och en öppen kommentar slår tio frågor som de flesta hoppar över.
- **Läs kommentarerna.** Poängen talar om hur mycket, och orden talar om varför.
- **Redovisa vem som svarade.** Ett poäng utan svarsfrekvens och svarandenas sammansättning är ett rykte.
- **Stäng cirkeln.** Människor som rapporterar en dålig upplevelse bör få återkoppling.
- **Jämför med dig själv över tid.** Jämförelser mellan företag döljer skillnader i metod, publik och kultur.
- **Skydda de svarande.** Samla in bara det du behöver, säg hur det ska användas och rangordna inte individer efter det.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CSAT | Andel svar som är nöjda, för en definierad interaktionstyp | svar med betyg 4 eller 5 på en femgradig skala / giltiga svar | procent | Enkät efter interaktionen, knuten till ärendet eller releasen | Servicedesk; incidenthantering; servicenivåhantering | Återkoppling från intressentgranskning | Veckovis eller månadsvis |
| NPS | Promotorer minus kritiker för en definierad tjänst och publik | procent som svarar 9 eller 10 minus procent som svarar 0 till 6 | poäng, intervall -100 till 100 | Relationsenkät, skickad med fast intervall | Ständig förbättring; servicenivåhantering | Granskning av produktresultat | Kvartalsvis |
| CES | Medelvärde eller andel positiva betyg på hur lätt det var att få något gjort | positiva svar / giltiga svar, eller medelbetyg | procent eller medelvärde | Enkät efter interaktionen, knuten till ärendet, förfrågan eller releasen | Hantering av serviceförfrågningar; servicedesk | Användbarhetsåterkoppling i förfining | Månadsvis |
| Svarsfrekvens för enkät | Andel inbjudna användare som svarade | mottagna svar / levererade enkäter | procent | Enkätverktyg och ärendesystem | Mätning och rapportering | Deltagande i återkoppling vid granskningar | Månadsvis |
| Svarandetäckning | Hur nära svarandes sammansättning motsvarar användarpopulationen på överenskomna dimensioner | andel svarande i varje grupp jämförd med andelen användare i den gruppen, per grupp | procentenheter | Enkätverktyg sammanfogat med användarkatalogen eller ärendedata | Mätning och rapportering | Intressentkarta | Kvartalsvis |
| Andel kommentarsteman | Andel fritextkommentarer tilldelade varje tema | kommentarer i tema / kodade kommentarer | procent | Kodade enkätkommentarer | Ständig förbättring | Teman från retrospektiv | Månadsvis |
| Tid till uppföljning av kritiker | Tid från ett lågt betyg till en dokumenterad kontakt med användaren | tidsstämpel för uppföljningsanteckning minus tidsstämpel för lågt betyg, median och 85:e percentil | timmar eller dagar | Enkätverktyg och ärendesystem | Incidenthantering; ständig förbättring | Återkopplingsloop i arbetsavtalet | Månadsvis |

Klockorna och gränserna spelar roll. CSAT och CES räknar bara svar på den specifika interaktionen, aldrig allmänt humör. Tid till uppföljning av kritiker startar i det ögonblick det låga betyget registreras, inte när någon först läser det. Uteslut testposter och svar från medlemmar i teamet som mäts.

## Rekommendationer

### Utforma instrumentet

**1. Välj en fråga per syfte.** Använd CSAT efter en interaktion för att lära dig hur den interaktionen gick, CES efter något användaren behövde göra för att lära dig var friktionen sitter och NPS med jämna mellanrum för att lära dig om den övergripande relationen. Att blanda de tre i ett formulär inbjuder till enkättrötthet och grumliga resultat. Om du bara har råd med en, välj den som motsvarar beslutet du behöver fatta.

**2. Skriv neutral, specifik formulering.** "Hur nöjd var du med hur din förfrågan hanterades?" är bättre än "Hur bra var vår service?" Undvik dubbelfrågor som frågar om hastighet och vänlighet på en gång. Erbjud en konsekvent skala, märk dess ändar och håll svarens ordning densamma varje gång. En [Likertskala](https://en.wikipedia.org/wiki/Likert_scale) är en vanlig utformning, och små ändringar i etiketter kan förskjuta resultat, så ändra dem inte nonchalant.

**3. Lägg till en öppen fråga.** "Vad är den främsta orsaken till ditt betyg?" kostar den svarande lite och ger teamet dess rikaste data. Kommentarer förklarar poängen, avslöjar problem som talen inte kan och ger agenter något att lära av. Läs dem i en regelbunden granskning, högt om möjligt.

**4. Tidsätt enkäten nära händelsen.** Skicka frågan strax efter att ärendet löses eller releasen landar, medan minnet är färskt. Skicka den inte i stängningsögonblicket av en agent som hoppas på ett högt betyg. En kort fördröjning, satt av systemet, tar bort frestelsen att coacha svaret.

### Gör talen pålitliga

**5. Redovisa svarsfrekvens och svarandenas sammansättning bredvid varje poäng.** Ett nöjdhetspoäng från 4 procent av användarna är ett uttalande om de svarande. Jämför vem som svarade med vem som bjöds in, med hjälp av attribut du redan har, till exempel region, tjänst eller typ av förfrågan. Stora glapp betyder att poängen behöver en varningsetikett. Representativitet är ett kärntema i forskningen om [svarsbias](https://en.wikipedia.org/wiki/Response_bias), och poängen för ett serviceteam är helt enkelt att titta.

**6. Visa osäkerhet.** Små urval svänger kraftigt. En [felmarginal](https://en.wikipedia.org/wiki/Margin_of_error) eller ett [konfidensintervall](https://en.wikipedia.org/wiki/Confidence_interval) bredvid en månatlig CSAT hindrar teamet från att reagera på brus (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal). Om ett team har färre än ett par dussin svar under en period, redovisa antal och läs kommentarer, inte procentsatser.

**7. Undvik att välja vem som tillfrågas.** Om personen som stängde ärendet avgör om enkäten skickas stiger poängen av fel skäl. Skicka enkäten automatiskt till varje kvalificerad interaktion, eller till ett slumpmässigt urval om volymen är hög. Dokumentera regeln, inklusive eventuella undantag, i mätetalsregistret.

**8. Skilj en persons nöjdhet från en persons prestation.** Nöjdhet beror på faktorer en enskild agent inte styr: produktens kvalitet, kön, policyn, användarens humör. Rangordna inte agenter efter CSAT. Använd den på team- och tjänstenivå och använd kommentarer för coachningssamtal som agenten välkomnar.

### Agera på det du hör

**9. Stäng cirkeln med missnöjda användare.** Kontakta människor som rapporterar en dålig upplevelse, fråga vad som hade hjälpt och registrera vad du lär dig. Sätt ett mål för uppföljningstiden och gör uppföljningen till ett samtal, inte en begäran om att ändra betyget. Att ändra ett betyg på begäran är en förvrängning, så uppföljningen bör syfta till att rätta problemet och lära sig.

**10. Koda kommentarer i teman och följ dem.** Kom överens om en kort lista över teman, till exempel "var tvungen att upprepa mig", "långsamt svar", "rättelsen höll inte", "otydlig kommunikation" och "vänlig och hjälpsam". Koda ett stickprov varje månad, för hand eller med ett verktyg, och låt en människa kontrollera resultaten. Trender i teman visar ofta problem innan ett poäng rör sig.

**11. Länka nöjdhet till driftdata.** Jämför CSAT med lösningstid, återöppningsgrad och antalet kontakter per fråga. Paren talar om huruvida hastighet köper nöjdhet eller om teamet är snabbt och fel. Använd dem för att hitta berättelser att undersöka, inte för att bevisa en regel.

**12. Behandla jämförelsetal med försiktighet.** Publicerade eller leverantörsleverade siffror för nöjdhetspoäng beror på metod, publik och region, och din egen historik är en bättre jämförelse. Om du använder en extern jämförelse, ange dess källa, metod och datum och sätt inte ett mål utifrån den utan att pröva om din metod motsvarar den. Hitta aldrig på ett jämförelsetal.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| CSAT | Agenter coachar användare att ge högsta betyg; enkäter skickas bara efter lätta ärenden; svåra ärenden stängs utan enkät | Automatisk enkät till varje kvalificerat ärende; svarsfrekvens och svarandenas sammansättning; återöppningsgrad |
| NPS | Att enkätera bara vänliga användare; att tidsätta enkäten efter en bra händelse; att fråga ansikte mot ansikte; att byta etikett på skalpunkter | Fast publik och schema i registret; svarandetäckning; läs kritikernas kommentarer |
| CES | Att ta bort steg i formuläret på ett sätt som flyttar arbetet någon annanstans; att bara fråga efter smidiga förfrågningar | Antal kontakter per fråga; uppfyllandetid och omarbete för förfrågningar (se ämne 3.5, Mätetal för uppfyllande av serviceförfrågningar) |
| Svarsfrekvens för enkät | Att bjuda in bara människor som sannolikt svarar; att skicka enkäten till en annan lista varje gång | Inbjudningsregeln nedskriven; jämför inbjudna med användarpopulationen |
| Svarandetäckning | Att släppa svårnådda grupper ur jämförelsen; att omvikta utan att säga det | Publicera dimensionerna och metoden; visa det ovägda resultatet bredvid det vägda |
| Andel kommentarsteman | Att koda kommentarer för att undvika dåliga teman; att slå ihop teman så att inget ser stort ut | En andra person kodar ett stickprov; håll temalistan stabil och logga ändringar |
| Tid till uppföljning av kritiker | Att logga en anteckning utan att kontakta användaren; att kontakta användaren för att be om ett bättre poäng | Kontrollera uppföljningsanteckningar för innehåll; fråga användaren i nästa enkät om någon kontaktade dem |

En sund avläsning är en stabil svarsfrekvens, en svarandemix nära användarmixen, ett poäng som rör sig med upplevelsen användare beskriver i kommentarer och missnöjda användare som säger att någon kom tillbaka till dem.

## Avvägningar: för- och nackdelar

| Mått | Styrka | Svaghet |
| --- | --- | --- |
| CSAT | Enkel, snabb, knuten till ett specifikt ögonblick | Lätt att blåsa upp; säger lite om hela relationen |
| NPS | En fråga, lätt att följa över tid | Döljer skälen; ett tal komprimerar en bred fördelning; kulturella skillnader påverkar skalan |
| CES | Pekar direkt på friktion teamet kan ta bort | Mindre allmänt förstådd; beläggen är omstridda |
| Årlig lång enkät | Rik, täcker många tjänster | Långsam, låg svarsfrekvens, svår att agera på |
| Enbart kommentarer | Konkreta, minnesvärda | Svåra att jämföra över tid; sårbara för de högljuddaste rösterna |
| Beteendesignaler | Ingen enkätbörda; objektiva | Fångar inte känslor; kan misstolka orsak |

Svaret är att kombinera en kort interaktionsenkät, en enstaka relationsenkät och kommentarerna och att läsa alla tre med driftdatan. Nöjdhetsmått fungerar som ett samtal mellan användare och teamet. De fallerar som en resultattavla.

## Frågor att diskutera med teamet

**1. Vad gör vi med ett poäng som är lågt och ett som är högt?**
Be teamet beskriva, i praktiken, senaste gången ett lågt poäng ledde till en ändring. Fråga sedan samma sak om ett högt poäng. Om svaren är vaga är enkäten en ritual. Facilitatorn bör leta efter en konkret länk från datan till en åtgärd och enas om ett ställe där den länken ska registreras.

**2. Vem svarar på våra enkäter, och vem svarar inte?**
Be teamet nämna de grupper av användare de hör minst från. Jämför med inbjudningslistan och användarkatalogen. Samtalet avslöjar ofta att de tystaste användarna har de svåraste problemen. Enas om ett sätt att nå en tyst grupp det här kvartalet, till exempel ett kort samtal eller en annan kanal.

**3. När i interaktionen frågar vi, och vem avgör?**
Gå igenom vägen från lösning till enkät. Hitta varje punkt där en människa kan påverka om, när eller hur enkäten skickas. Enas om vilka av dessa punkter som bör automatiseras. Facilitatorn kan fråga vad en agent kunde göra för att skydda ett poäng, som en designfråga och inte en anklagelse.

**4. Vad hör en kritiker från oss efter att de svarat?**
Titta på några nyliga låga betyg och läs uppföljningsanteckningarna. Fråga om användaren skulle känna sig hörd. Diskutera hur uppföljningen kan göras användbar utan att be om ett ändrat betyg. Besluta vem som äger uppföljningen och vad måltiden är.

**5. Vilka kommentarer från förra månaden ändrade vad vi gjorde?**
Skriv ut eller visa tio kommentarer slumpmässigt. Fråga teamet vilka som agerades på, vilka som inte gjorde det och varför. Det håller fokus på orden och bygger en vana att läsa dem. Enas om att koda teman nästa månad och att granska trenden.

**6. Vilket publicerat tal är vi frestade att jämföra oss med, och är jämförelsen rättvis?**
Namnge siffran, dess källa, dess metod och dess publik och jämför var och en med din egen. Fråga om det skulle ändra ett beslut. Om inte, lägg det åt sidan och använd din egen trend. Facilitatorn bör registrera svaret i mätetalsregistret.

## Fyra perspektiv

### Produkt- och leveransteam

Produktteam använder nöjdhetsåterkoppling för att avgöra vad som ska rättas eller byggas härnäst, och korta enkäter efter en release ger en snabbare läsning än nästa kvartalsgranskning. Leveransteam bör koppla kommentarer till backlogposter, visa användare vad som ändrats och undvika att behandla ett poäng som ett leveransmål. En ökning av kommentarer om ansträngning eller förvirring efter en release är en signal att titta på releasen, inte på enkäten.

### Service- och driftteam

Servicedeskar samlar in det mesta av interaktionsdatan och känner trycket från poängen mest. Driftteam bör skicka enkäter automatiskt, publicera urvalsregeln och använda kommentarer för teamets lärande. De bör hålla CSAT bredvid återöppningsgrad och upprepade kontakter, så att snabba stängningar inte ser ut som goda utfall (se ämne 3.1, Mätetal för servicedesk).

### Ledning och styrning

Ledare sätter klimatet för manipulation. En begäran om "95 procent nöjdhet vid årets slut" lär personal att skydda talet. Ledare bör be om svarsfrekvens, svarandenas sammansättning och de främsta kommentarsteman, finansiera rättelserna kommentarerna avslöjar och hålla nöjdhet utanför individuell lön och rangordning. Styrningen bör förvänta sig en angiven metod för varje siffra den redovisar externt.

### Kunder och användare

Användare ger sin tid och sin uppriktighet. De förtjänar en kort enkät, ett tydligt skäl till att man frågar, ett löfte om hur deras svar ska användas och ett svar när de rapporterar ett problem. Där enkäten inte är anonym, säg det. Användare som ser att ingenting ändras slutar svara, och tystnaden kommer att se ut som nöjdhet.

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på ett regionalt sjukhus driver en servicedesk och ett litet team som bygger kliniska applikationer. Siffrorna nedan är illustrativa.

Servicedeskens månatliga CSAT är 92 procent, beräknad ur 140 svar av ungefär 3 100 stängda ärenden, en svarsfrekvens på 4,5 procent. Ledningen är nöjd. Servicechefen läser kommentarerna och märker att många positiva svar kommer från personal i administrationen, medan sjuksköterskor på nattpass knappt syns. Hon jämför svarandemixen med användarkatalogen och finner att nattpersonalen är ungefär 18 procent av användarna och 3 procent av de svarande.

Teamet gör tre ändringar. Enkäten blir ett formulär med två frågor, ett betyg och en kommentar, skickat automatiskt av ärendesystemet fyra timmar efter lösning, till varje ärende. En sms-version erbjuds personal på pass. Den månatliga rapporten visar nu CSAT med svarsfrekvensen, konfidensintervallet, svarandemixen mot användarmixen och de fem främsta kommentarsteman.

Inom två månader stiger svarsfrekvensen till ungefär 11 procent och CSAT sjunker till 84 procent. Kommentarsteman visar "var tvungen att ringa tillbaka" och "rättelsen höll inte" som de två främsta klagomålen, koncentrerade till de kliniska systemen. It-chefen säger till styrelsen att det gamla poängen speglade vem som svarade, och att det nya poängen är en bättre vägledning. Produktteamet lägger till en backlogpost för att rätta det återkommande felet bakom återuppringningarna, och servicedesken börjar kontakta varje användare som ger betyget 1 eller 2 inom en arbetsdag. Under nästa kvartal faller andelen upprepade kontakter för de kliniska systemen, och andelen kommentarer om "var tvungen att ringa tillbaka" faller med den. Teamet registrerar beslutet i sin logg och sätter inget CSAT-mål.

## Agilitet, AI, automatisering och analys

### Agilitet

Be om återkoppling kontinuerligt och i små mängder och granska kommentarer med intressenter vid varje regelbundet förbättringssamtal. Varningen är att enkättrötthet sänker svarsfrekvensen och skevar vem som svarar.

### AI

AI kan sammanfatta kommentarer och stämning i stor volym, och AI-stödda interaktioner kan betygsättas annorlunda än mänskliga. Redovisa nöjdhet separat för AI-hanterade och människohanterade kontakter, para poäng med kommentarsteman och låt en människa läsa ett stickprov. Varningen är att en stämningsmodell kan misstolka tonfall eller språk, så kontrollera den mot ett manuellt stickprov.

### Automatisering

Utlös enkäter automatiskt vid ett valt ögonblick och mät enkätprocessen på svarsfrekvens och svarandenas sammansättning. Varningen är att automatiska enkäter efter bara lyckade kontakter skevar poängen uppåt.

### Analys

Visa poäng med antalet svar och svarandenas sammansättning och läs kommentarer före tal. Beslutet detta ger underlag för är vilka resor som ska förbättras. Varningen är att poäng över få svar rör sig mycket, så visa antalet.

## Branschperspektiv

**Startup.** Nära kontakt med användare gör korta samtal bättre än enkäter i början. Lägg till en enkät med en fråga när volymen växer och fortsätt läsa varje kommentar. Motstå frestelsen att publicera ett poäng innan du har tillräckligt många svar för att det ska betyda något.

**Småföretag.** En enda missnöjd kund kan betyda mer än ett poäng. Använd enkäten som en uppmaning att prata med människor och för register över uppföljningarna. Leverantörsleverade nöjdhetsrapporter förtjänar skepsis om metoden.

**Storföretag.** Skala ger segment och frestelsen att sammanställa. Håll poäng per tjänst och publik, publicera metoden och undvik att ta medelvärde av olika tjänster till ett tal. Använd en stabil enkätplattform med automatiskt utskick och behandla varje rangordning mellan team med försiktighet.

**Offentlig sektor.** Offentliga organ har ofta formella skyldigheter att samla in användaråterkoppling och att publicera resultat, tillsammans med skyldigheter kring tillgänglighet och integritet. Erbjud tillgängliga enkätkanaler, skydda de svarandes identitet och publicera metoder med resultaten. Där en nöjdhetssiffra förekommer i ett avtal eller en lagstadgad rapport, definiera den exakt och visa skyddsräcket bredvid (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

De direkta kostnaderna är enkätverktyg, som många ärendesystem redan inkluderar, en till två timmar varje månad för att granska kommentarer och koda teman och tiden att följa upp med missnöjda användare. Den större kostnaden är disciplinen att agera på det du hör. Det finns inget behov av en ny plattform för att börja.

Avkastningen visar sig som rättelser användare värdesätter och undvikt slöseri. Kommentarer talar om var friktionen sitter, så att du kan ta bort orsaker till upprepade kontakter och rättelser som inte höll i stället för att lägga till personal för att hantera dem. En bättre bild av vem som inte svarar skyddar dig från beslut baserade på ett självselekterat fåtal. Beskriv nyttan i termer av problem som hittats och tagits bort och mät dina egna baslinjer före och efter: andel upprepade kontakter, återöppningsgrad och tid till första användbara svar. Använd inte en påhittad procentsats för att motivera programmet. Om du behöver siffror, bygg dem ur din egen data.

## Antimönster och fallgropar

- **Att behandla poängen som ett mål.** Det kommer att nås genom att välja vem som tillfrågas eller coacha svaret. Använd det som en fråga och para det med kommentarer och driftmått.
- **Att enkätera bara efter lätta ärenden.** Skicka till varje kvalificerad interaktion, automatiskt.
- **Att rangordna agenter efter CSAT.** Det straffar människor som tar svåra fall. Använd team- och tjänstevyer och lär av kommentarer.
- **Att be om ett bättre poäng.** Uppföljning av ett lågt betyg bör syfta till att rätta problemet. Be inte om en ändring.
- **Att redovisa ett poäng utan svarsfrekvens.** Visa alltid vem som svarade och hur många.
- **Att ändra frågan och behålla trenden.** Logga ändringar och markera brottet i diagrammet.
- **Att importera ett jämförelsetal utan dess metod.** Jämför med din egen historik först.
- **Att samla in kommentarer och aldrig läsa dem.** Lägg en granskning i kalendern och tilldela en ägare.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Instrument och urval | Enstaka ad hoc-enkät | Enkät finns för vissa tjänster, skickas för hand | Kort enkät skickas automatiskt till alla kvalificerade interaktioner | Urvalsregel, formuleringsändringar och undantag loggas och granskas | Instrument anpassas över team och leverantörer och revideras med användare |
| Datakvalitet | Bara poäng | Svarsfrekvens redovisas | Svarsfrekvens, svarandenas sammansättning och osäkerhet redovisas | Svarandetäckning hanteras; kodning kontrolleras av en andra person | Delad bild av upplevelse över tjänster, med användare delaktiga i tolkningen |
| Åtgärd och uppföljning | Poäng redovisas, ingenting ändras | Enstaka rättelser utifrån kommentarer | Uppföljning av kritiker med en måltid; teman följs | Teman driver finansierat förbättringsarbete och länkas till driftdata | Den slutna cirkeln spänner över team och leverantörer; användare ser vad som ändrats |

## Checklista

- [ ] Varje enkät har ett angivet syfte och ett beslut den ger underlag för.
- [ ] Frågorna är korta, neutrala och inkluderar en öppen kommentar.
- [ ] Enkäten skickas automatiskt till varje kvalificerad interaktion eller till ett dokumenterat slumpmässigt urval.
- [ ] Svarsfrekvens och svarandenas sammansättning visas bredvid varje poäng.
- [ ] Osäkerhet visas, och små urval redovisas som antal.
- [ ] Ingen enskild agent rangordnas efter nöjdhet.
- [ ] En namngiven person följer upp låga betyg inom en överenskommen tid.
- [ ] Kommentarer kodas i en stabil lista över teman och granskas månadsvis.
- [ ] Ändringar av formulering och urval loggas och markeras i diagram.
- [ ] Svarande får veta hur deras svar används, och personuppgifter skyddas.

## AI-prompter

**Granska ett enkätinstrument.**

```text
I run [service or team] for [type of organization]. We survey [audience] after
[event] using this wording: [paste questions and scale]. Review it for leading
language, double-barrelled questions, unclear scales, and burden on the
respondent. Suggest a shorter version that keeps one rating and one open
comment. Do not invent benchmark values or claim research results you cannot
cite. List your assumptions and what you could not judge from the text.
```

**Koda enkätkommentarer i teman.**

```text
Here are [number] anonymized survey comments for [service], from [period]:
[paste comments with personal data removed]. Propose a short list of themes (no
more than eight) and assign each comment to one theme, with a confidence note
where it is ambiguous. Report the count per theme and three representative
quotes per theme. Do not identify individuals. Tell me what a person should
check before relying on this coding, and list your assumptions.
```

**Kontrollera representativitet.**

```text
We received [responses] responses from [invited] invitations. Respondents by
[dimension, for example region or shift]: [counts]. Our user population by the
same dimension: [counts]. Compare the two, describe where the respondent mix
differs, and say what cautions we should attach to our satisfaction score.
Suggest two practical ways to reach underrepresented groups. Do not infer
causes beyond the data, and list your assumptions.
```

**Planera en uppföljning som stänger cirkeln.**

```text
Draft a short process for following up with users who give a rating of
[threshold] or lower in [service]. Include who contacts them, within what time,
what to say, what to record, and how to avoid asking for a changed rating.
Context: [team size, tools, hours]. List your assumptions and any steps that
depend on tooling I have not described.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett nöjdhetsmått innan du publicerar det.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en reviderad post för enkätmått behåller sin manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- Nöjdhetspoäng beskriver hur ett ögonblick av service kändes, så knyt enkäter till specifika händelser och håll dem korta.
- Redovisa alltid svarsfrekvens, svarandenas sammansättning och osäkerhet med poängen.
- Kommentarer förklarar talen, så läs dem varje månad och koda dem i teman.
- Skicka enkäter automatiskt och be aldrig användare ändra ett betyg.
- Använd nöjdhet på team- och tjänstenivå, aldrig för att rangordna människor, och behandla externa jämförelsetal med försiktighet.
- Stäng cirkeln: människor som rapporterar en dålig upplevelse bör få återkoppling och se förändring.

## Referenser och vidare läsning

1. Reichheld, F. F., "The One Number You Need to Grow," *Harvard Business Review*, 81(12), 2003.
2. Dixon, M., Freeman, K., and Toman, N., "Stop Trying to Delight Your Customers," *Harvard Business Review*, 88(7/8), 2010.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Likert, R., "A technique for the measurement of attitudes," *Archives of Psychology*, 22(140), 1932.
5. Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., and Tourangeau, R., *Survey Methodology*, 2nd ed., Wiley, 2009.
6. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
7. Wikipedia, [Net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score).
8. Wikipedia, [Survey methodology](https://en.wikipedia.org/wiki/Survey_methodology).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Likert scale](https://en.wikipedia.org/wiki/Likert_scale).
11. Wikipedia, [Response bias](https://en.wikipedia.org/wiki/Response_bias).
12. Wikipedia, [Margin of error](https://en.wikipedia.org/wiki/Margin_of_error).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
