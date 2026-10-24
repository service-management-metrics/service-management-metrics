# Mätetal för servicedesk

**Mät servicedesken efter hur väl den hjälper människor tillbaka till arbetet och hur mycket den lär resten av organisationen, eftersom antal samtal och minuter i telefon belönar hastighet och volym på bekostnad av båda.**

## Översikt och motiv

För de flesta användare är servicedesken tjänsten. De möter sällan ingenjörerna eller ser pipelinen; de möter den som svarar när något går fel. En [helpdesk](https://en.wikipedia.org/wiki/Help_desk) är den avdelning eller person som ger hjälp och information, vanligen om datorproblem. I [it-tjänstehantering (ITSM)](https://en.wikipedia.org/wiki/IT_service_management) är servicedesken den enda kontaktpunkten mellan leverantören och dess användare, och hanterar både incidenter (oplanerade störningar eller potentiella störningar i en tjänst) och serviceförfrågningar (rutinförfrågningar om något tjänsten normalt tillhandahåller). I [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 står servicedeskspraktiken bredvid incidenthantering och hantering av serviceförfrågningar, och den beskrivs genom sitt syfte och sina resultat, inte genom en fast lista med mått. Det här ämnet erbjuder därför praktisk vägledning, inte ett ramverkskrav.

Måtten som växte fram kring desken kommer till stor del från [callcenter](https://en.wikipedia.org/wiki/Call_centre)-traditionen: hur många kontakter som kom in, hur länge människor väntade, hur många gav upp, hur lång tid varje kontakt tog och hur många som löstes vid första försöket. Dessa mått är användbara och billiga, och de är också de lättaste i boken att förvandla till mål som skadar tjänsten. Korta samtal ser effektiva ut tills samma användare ringer tillbaka tre gånger. Låga övergivna samtal ser omtänksamma ut tills handläggare svarar snabbt och löser ingenting. Ämnets uppgift är att beskriva varje mått, ange dess klockor och säga vad det belönar och vad det döljer.

Det agila synsättet lägger till ett andra syfte. Varje kontakt är belägg för vad användare tycker är förvirrande, vad som går sönder och vad de önskar att tjänsten gjorde. Ett agilt team som släpper ofta behöver det beläggen snabbt och på tjänstenivå, inte på ärendenivå. Så desken mäts två gånger: som en verksamhet som besvarar människor väl och som en sensor som matar backlogen. Volymen är bron mellan de två. Ett stigande antal kan betyda tillväxt, en dålig release, en saknad artikel eller en ny kanal, och måttet ensamt kan inte säga vilket (se ämne 3.2, Incidentvolym och prioritet, för hur man läser antal per kategori och prioritet).

Nyckeltermer: [lösning vid första samtalet](https://en.wikipedia.org/wiki/First_call_resolution) är andelen kontakter som löses vid första kontakten; en [automatisk samtalsfördelare](https://en.wikipedia.org/wiki/Automatic_call_distributor) dirigerar inkommande samtal till tillgänglig personal; ett [servicenivåavtal (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) är ett åtagande mellan leverantör och kund; en [percentil](https://en.wikipedia.org/wiki/Percentile) är värdet under vilket en given andel av observationerna faller, så den 85:e percentilen av hanteringstid är den varaktighet som 85 procent av kontakterna blir klara inom; och [kundnöjdhet](https://en.wikipedia.org/wiki/Customer_satisfaction) (se ämne 6.1, Mätetal för kundnöjdhet) är hur väl en tjänst möter användarnas förväntningar.

Termerna "kontakt" och "ärende" är inte desamma. En kontakt är ett försök av en person att nå desken via en kanal som telefon, chatt, e-post, portal, besök eller meddelandetjänst. Ett ärende (också kallat en post) är vad ITSM-verktyget skapar för att följa arbetet. Ett ärende kan omfatta många kontakter, och vissa kontakter, till exempel en lösenordsåterställning som besvaras på stående fot, kan skapa ett ärende bara för registrets skull. Att blanda de två är den vanligaste källan till förvirring i deskrapportering, så definitionerna nedan räknar dem separat.

## Nyckelprinciper

- **Räkna kontakter och ärenden separat och definiera båda.** En kontakt är ett försök att nå desken; ett ärende är en post över arbete. Rapporter som blandar dem går inte att stämma av.
- **Redovisa tider som fördelningar.** Visa medianen och en hög percentil som den 85:e eller 95:e, aldrig bara ett medelvärde, eftersom några få mycket långa eller mycket korta kontakter förvränger medelvärdet.
- **Para varje hastighetsmått med ett resultatmått.** Svarshastighet, övergivna samtal och hanteringstid beskriver insats. Lösning och återkontakt beskriver om användaren fick hjälp.
- **Normalisera volym mot användning.** Ett antal som stiger för att användarbasen växte är en annan historia än ett som stiger per användare.
- **Mät kanaler och tjänster, inte människor.** Dessa mätetal beskriver en desk, en kö, en tjänst och en kanal. De används aldrig för att rangordna eller disciplinera enskilda handläggare.
- **Behandla desken som en sensor.** Varje mätetal bör leda till en fråga till leveransteamen om vad som ska rättas, dokumenteras eller automatiseras uppströms.

## Mätetalsdefinitioner

Tabellen listar sju mått som de flesta servicedeskar kan samla in från sin telefoniplattform och sitt ITSM-verktyg. Tröskelvärden och mål är för varje desk att sätta och skriva ned; det här ämnet anger inga riktmärken.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kontaktvolym | Antal kontakter som desken tagit emot, per kanal och period | antal kontakter som skapats under perioden, per kanal; interna testkontakter, dubbla automatsvar via e-post och utgående samtal som desken ringt utesluts | antal | Logg från telefoni- eller chattplattform; kontaktposter i ITSM-verktyget | Servicedesk | Efterfrågesignal i backlogförfining | Veckovis |
| Kontaktfrekvens | Kontakter i förhållande till storleken på den betjänade populationen, så att tillväxt inte misstas för ett problem | kontakter under perioden / aktiva användare eller aktiva konton under perioden, skalat till 100 användare; användarantalet tas från samma period och definitionen av "aktiv" är nedskriven | kontakter per 100 användare | Kontaktposter samt identitets- eller licenssystemet | Servicedesk; hantering av servicenivåer | Användningsjusterad efterfrågan i produktgranskning | Månadsvis |
| Svarstid | Väntan från det ögonblick en kontakt går in i kön tills en person eller ett automatiskt svar engagerar sig | klockan startar när kontakten köas och stoppar vid första mänskliga svar; övergivna kontakter utesluts ur detta mått och räknas i övergivna samtal; redovisa medianen och 85:e percentilen | sekunder (telefon, chatt); minuter eller timmar (e-post, portal) | Telefoniplattform; chattplattform; tidsstämplar i ITSM-verktyget | Servicedesk | Arbetsöverenskommelse om responsivitet | Dagligen under granskningsfönster, veckovis i trend |
| Andel övergivna samtal | Andel kontakter som avslutas av användaren innan någon engagerar sig | kontakter som avslutats av användaren före första mänskliga svar / köade kontakter; kontakter som avslutats inom en kort respitperiod (anges i definitionen, till exempel fem sekunder) utesluts som oavsiktliga | procent | Telefoniplattform; chattplattform | Servicedesk | Signal om fördröjningskostnad i tjänstegranskning | Veckovis |
| Hanteringstid | Tid desken lägger på en kontakt | klockan startar när en person engagerar sig och stoppar när hen avslutar kontakten, inklusive dokumentationsarbete efter kontakten; väntan på användaren ingår bara om definitionen säger det; redovisa medianen och 85:e percentilen, uppdelat efter kontakttyp | minuter | Telefoniplattform; chattplattform; arbetslogg i ITSM-verktyget | Servicedesk; incidenthantering | Insatssignal i förfining och kapacitetsplanering | Veckovis |
| Andel lösta vid första kontakten | Andel kontakter som löses vid första kontakten utan senare kontakt i samma sak | kontakter som lösts under kontakten och inte följts av en återkontakt i samma fråga från samma användare inom återkontaktsfönstret / berättigade kontakter; samtal där bara en hänvisning krävs och samtal desken inte förväntas lösa utesluts | procent | Lösnings- och länkfält i ITSM-verktyget; användarbekräftelse där den samlas in | Servicedesk; incidenthantering | Kontroll av definition av klart, löst vid första beröring | Månadsvis |
| Återkontaktsgrad | Andel lösta kontakter som följs av en ny kontakt i samma sak | kontakter som inom återkontaktsfönstret (till exempel sju dagar, anges i definitionen) följts av en ny kontakt från samma användare om samma tjänst eller fråga / kontakter som lösts under den tidigare perioden; kontakter om en ny fråga utesluts | procent | Länkning och återöppningshistorik i ITSM-verktyget; kontaktposter | Servicedesk; incidenthantering | Grad av undkomna fel | Månadsvis |

Lösning vid första kontakten har mer än en försvarbar definition, så definitionen är en del av mätetalet. Vissa deskar räknar en kontakt som löst när handläggaren stänger ärendet under samtalet. Andra räknar bara när användaren inte kommer tillbaka inom ett fönster. Det andra är svårare att samla in och svårare att manipulera, och det är det som används här. Ange fönstret, ange vad som räknas som "samma sak" och tillämpa båda på samma sätt varje period.

## Rekommendationer

### Skilj kontakter från ärenden från början

**Ge kontakter och ärenden egna definitioner, identifierare och antal.** En kontakt är en post över ett försök att nå desken, och ett ärende är en post över arbete. Länka dem i verktyget så att en återkontakt i samma sak syns. Rapporter som blandar de två ger en volymsiffra som ingen kan stämma av mot telefoniplattformen.

### Redovisa volym per kanal, kategori och normaliserad frekvens

**Visa total volym, volym per kanal, volym per kategori och kontaktfrekvens per 100 användare.** Totaler ensamma blandar ihop tillväxt med trassel. Ett fall i telefonvolym kan vara ett skifte till chatt, och en ökning av portalkontakter kan vara en medveten framgång för självbetjäning. Rita serien över minst ett år så att säsongsvariation som terminsstarter och räkenskapsårsslut syns.

### Använd fördelningar för varje tidsmått

**Redovisa medianen och en hög percentil för svarstid och hanteringstid.** Medelvärdet av en sned fördelning beskriver nästan ingens upplevelse. Medianen visar den typiska kontakten, och den 85:e eller 95:e percentilen visar hur dålig den långsamma svansen är. Säg hur många kontakter siffran vilar på och märk avläsningen som opålitlig när en kö hanterar bara en handfull kontakter under perioden (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

### Behandla övergivna samtal som en signal om efterfrågan och bemanning

**Läs övergivna samtal tillsammans med svarstid och ankomstmönster.** Människor ger upp när väntan är längre än de förväntade sig, så andelen stiger med väntan, och väntan stiger när ankomsterna överstiger kapaciteten. [Köteorin](https://en.wikipedia.org/wiki/Queueing_theory) förklarar varför väntan växer kraftigt när en kö närmar sig full utnyttjandegrad, vilket är varför en desk som körs nära 100 procent upptagen alltid har långa väntetider och hög andel övergivna samtal. Bemanna efter ankomstmönster per timme och dag snarare än efter ett månadsmedelvärde och visa övergivna samtal per tid på dygnet (se ämne 2.3, Pågående arbete och köteori).

### Definiera lösning vid första kontakten noga och mät den sedan från användarens sida

**Använd en återkontaktsbaserad definition och bekräfta den med en kort fråga till användare.** Att bara räkna kontakter som inte återvänder inom ett angivet fönster är svårare att blåsa upp än en handläggarflagga som sätts vid stängning. Lägg till en enfrågekontroll, till exempel "löstes ditt ärende?", och jämför den med återkontaktssiffran. När de två är oense är användarens svar den bättre vägvisaren, och glappet pekar på var stängning sker i förtid.

### Använd hanteringstid för planering, inte för mål

**Behandla hanteringstid som en kapacitetsindata och en diagnostik och sätt aldrig ett mål för handläggare att slå.** Ett mål på hanteringstid betalar för jäkt, tidiga överföringar och tunn dokumentation. Använd fördelningen per kontakttyp för att planera bemanning och för att hitta kontakter som tar långt längre tid än liknande, vilket ofta pekar på en saknad artikel, ett klumpigt verktyg eller en oklar process. Sikta på systemets orsaker, inte på handläggarna.

### Knyt deskens mått till leveransarbetet

**Granska de främsta kontaktkategorierna med de team som äger tjänsterna.** Varje månad, ta de fem kategorier som genererade flest kontakter per 100 användare och fråga vilken förändring uppströms som skulle ta bort dem: en rättelse, en artikel, ett bättre felmeddelande eller en självbetjäningsväg. Registrera svaren i det ägande teamets backlog. Det förvandlar deskens siffror till förbättringsarbete och är det tydligaste agila användningssättet för datan (se ämne 3.6, Mätetal för kunskapshantering, och ämne 3.7, Mätetal för självbetjäning och automatisering).

### Ta med varje kanal i samma definitioner

**Tillämpa samma klock- och räkneregler på telefon, chatt, e-post, portal, besök och meddelandetjänst.** Asynkrona kanaler har ingen levande kö, så svarstid betyder något annat i var och en. Definiera klockan per kanal och redovisa varje separat innan du kombinerar. En desk som bara publicerar sin bästa kanal döljer upplevelsen för alla andra.

### Koppla måtten till användarens upplevelse

**Para operativa mått med en nöjdhetsfråga efter kontakten och en fritextuppmaning.** Ett snabbt svar på en ohövlig eller ohjälpsam kontakt är ett dåligt resultat, och klockorna kan inte se det. Visa svarsfrekvensen och respondentmixen bredvid betyget, eftersom bara en självvald del av användarna svarar (se ämne 1.5, Datakällor och instrumentering). Läs kommentarerna tillsammans med de människor som besvarar kontakterna, i en teamsituation.

### Håll måtten på team- och könivå

**Redovisa per kö, kanal, tjänst och team och behåll data på handläggarnivå för coachningssamtal som handläggaren deltar i.** Att rangordna enskilda handläggare efter hanteringstid eller lösningsgrad driver till att plocka de lätta kontakterna och undvika de svåra. Det skadar också förtroendet för datan, och användare känner resultatet i hjälpens kvalitet. Använd teamnivåns siffror för att fråga vad systemet behöver.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Kontaktvolym | Handläggare avskräcker från loggning genom att hänvisa användare till kanaler som inte räknas, eller delar upp en kontakt i flera för att få en kö att se upptagen ut; chefer siktar på en lägre volym | Kontaktfrekvens per 100 användare och en periodisk avstämning av telefoniantal mot ärendeantal; en fast regel att varje kanal räknas |
| Kontaktfrekvens | Nämnaren väljs i efterhand (till exempel en bred definition av "aktiv") så att frekvensen ser bättre ut | En skriven, daterad definition av "aktiva användare" och de råa antalen visade bredvid frekvensen |
| Svarstid | Kontakter besvaras av en automatisk hälsning eller en överföring till en tyst kö, eller samtalet tas och läggs i vänteläge; e-post får ett automatsvar som räknas som ett svar | Definiera klockan som första mänskliga svar och följ övergivna samtal och återkontakt bredvid |
| Andel övergivna samtal | Uppringare tappas innan de köas, respitperioden sträcks ut eller ett erbjudande om återuppringning räknas som en besvarad kontakt | Percentiler av svarstid, andel genomförda återuppringningar och en publicerad respitperiod |
| Hanteringstid | Samtal jäktas, överförs tidigt eller avslutas innan problemet är löst; anteckningar lämnas tunna; arbete flyttas till tid efter kontakten som klockan utesluter | Lösning vid första kontakten, återkontaktsgrad och en stickprovsgranskning av dokumentationskvalitet av teamet |
| Andel lösta vid första kontakten | Ärenden stängs under samtalet oavsett resultat, "samma sak" läses snävt eller svåra kontakter klassificeras som "förväntas inte lösas" | Återkontaktsgrad, en enfrågebekräftelse från användaren och periodiska revisioner av undantag av teamet |
| Återkontaktsgrad | Användare ombeds öppna ett nytt ärende för en uppföljning, eller uppföljningar loggas under en annan kategori så att de inte länkas | Länkningsregler i verktyget, en stickprovsrevision av olänkade upprepade kontakter och användarrapporterad lösning |

En sund avläsning är en uppsättning siffror som stämmer med varandra. Svarstid och övergivna samtal rör sig tillsammans, hanteringstid varierar med kontakttyp och inte med dagens mål, lösning vid första kontakten och återkontakt är spegelbilder som summerar nära sitt tak och användarens svar på "löstes ditt ärende?" stämmer med återkontaktssiffran. En enda siffra som förbättras kraftigt medan de andra förblir platta är ett skäl att titta på hur den samlas in innan man firar. En desk som manipuleras visar vanligen symtomen i återkontakt, upprepade kategorier i volymen och stigande klagomål.

## Avvägningar: för- och nackdelar

| Val | Fördel | Kostnad eller risk |
| --- | --- | --- |
| Genomsnittlig hanteringstid som rubrik | Enkel, tillgänglig i varje plattform, lätt att förklara | Belönar jäkt, döljer svansen och inbjuder till mål som skadar lösningen |
| Median och 85:e percentilen för tider | Beskriver det typiska fallet och den långsamma svansen | Kräver tillräckligt många kontakter för att vara stabil och lite mer förklaring |
| Lösning vid första kontakten via handläggarens stängningsflagga | Lätt att samla in | Lätt att blåsa upp och svår att jämföra mellan deskar |
| Lösning vid första kontakten via återkontaktsfönster | Svår att manipulera och närmare användarens upplevelse | Kräver god länkning i verktyget och väntar på att fönstret ska passera innan den kan redovisas |
| Övergivna samtal med respitperiod | Tar bort oavsiktliga påläggningar | Respitperioden kan sträckas ut för att smickra siffran |
| Kontaktfrekvens per 100 användare | Skiljer tillväxt från trassel | Beror på ett pålitligt användarantal och en tydlig definition av "aktiv" |
| Enkät efter kontakten | Fångar det klockorna inte kan | Låg och ojämn svarsfrekvens och en skevhet mot användare med starka känslor |
| Redovisning enbart per team och kö | Skyddar förtroendet och fokuserar på systemet | Ger mindre detaljer för individuell coachning, som behöver en annan, privat process |

Ingen uppsättning mått tar bort spänningen mellan hastighet och omsorg. En desk som besvarar varje kontakt på sekunder och löser lite har en bra kö och en dålig tjänst, och en desk som tar tid på sig att lösa ordentligt kommer att visa längre hanteringstider och väntan. Vägen igenom är att enas om vilket resultat som spelar störst roll det här kvartalet, göra avvägningen uttrycklig och granska paret av mätetal som håller den i balans. Snabbare är bättre bara så länge lösningen håller.

## Frågor att diskutera med teamet

**1. Vad betyder en "kontakt" här, och stämmer vårt antal med vad telefoniplattformen och ITSM-verktyget var för sig redovisar?**
Be gruppen följa en dags kontakter genom varje kanal och jämföra antalen från de två systemen. Notera kontakter som aldrig blir ärenden och ärenden som aldrig började som kontakter. En facilitator bör räkna med ett glapp i början och behandla det som ett fynd om definitioner, inte ett fel hos människorna. Enas om en regel för nästa rapport och vem som äger den.

**2. När vi säger att en kontakt löstes vid första kontakten, hur vet vi att användaren skulle hålla med?**
Granska tio nyliga kontakter markerade som lösta vid första kontakten och kontrollera om någon av användarna kom tillbaka i samma sak. Fråga vad handläggaren kunde ha gjort annorlunda i de som gjorde det. Diskussionen visar oftast var stängning sker innan användaren är redo. Besluta om en enfrågebekräftelse ska läggas till och vad återkontaktsfönstret bör vara.

**3. Vad händer med personen i kö, och när ger hen upp?**
Titta på kurvan över övergivna samtal efter väntad tid. De flesta deskar finner en punkt bortom vilken människor lämnar i stort antal, och den punkten är köns praktiska gräns. Fråga vilka återuppringnings-, chatt- eller automatiska svar som erbjuds och om något av dem räknas som besvarat när ärendet inte är löst. Facilitatorn kan använda detta för att öppna en diskussion om bemanning per timme, inte per månad.

**4. Vilka av våra hanteringstidssiffror skulle ändras om vi uppmärksammade arbete efter kontakten och väntan?**
Lista vad klockan inkluderar och vad den lämnar utanför. Fråga om någon har känt press att korta samtal och vad de gjorde. Den här frågan är lättare att besvara i ett team än i en rapport, så ge människor chansen att tala utan angivande av källa. Enas om en definition och om hanteringstid bara ska användas för planering.

**5. Vilka fem kategorier genererade flest kontakter per 100 användare förra kvartalet, och vem äger rättelsen för var och en?**
Ta med kategoridata och ägarna till de underliggande tjänsterna till samma bord. Fråga för varje kategori om det bästa svaret är en rättelse, en artikel, ett bättre meddelande eller en självbetjäningsväg. Poängen är att gå därifrån med objekt i en backlog och namngivna ägare. Återbesök listan nästa kvartal för att se vilka som rörde sig.

**6. Redovisar vi det här på team- och könivå, och använder någon det för att jämföra individer?**
Fråga gruppen direkt om någon av dessa siffror har använts för att bedöma en person och vilken effekt det hade. Diskutera vad desken skulle sluta göra om individuell jämförelse upphörde och vad den skulle börja göra. Facilitatorn bör registrera alla exempel och ta dem till mätetalsägaren för ett beslut om policyn. Syftet är ett skriftligt åtagande att datan beskriver systemet.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam får den bästa bilden av sin egen tjänst från desken. Kontakter per 100 användare efter en release visar snabbt om en ändring förvirrade människor, och kategorierna visar vad som ska rättas härnäst. Team bör räkna med en månatlig granskning av de främsta kategorierna och behandla dem som backlogunderlag, utan att lägga skuld på desken för att den rapporterar vad användare säger. Be desken om kontaktstickprov såväl som antal, eftersom orden användare använder ofta avslöjar ett märknings- eller designproblem.

### Service- och driftteam

Deskpersonal och deras chefer behöver siffror som hjälper dem planera och förbättra utan att bli mål. Bemanning per timme utifrån ankomstmönster, återkontaktsgranskningar och artikelbegäranden är de mest användbara resultaten. Personalen bör få vara med och bestämma hur mätetalen definieras, eftersom de vet var klockorna vilseleder. De bör se sitt eget teams siffror först och kunna ifrågasätta dem.

### Ledning och styrning

Ledare behöver en kort uppsättning siffror som stämmer med varandra: volym och kontaktfrekvens, svarstid och övergivna samtal, lösning vid första kontakten och återkontakt, samt ett användarnöjdhetsbetyg med sin svarsfrekvens. De bör be om fördelningar och om anteckningar om definitionsändringar, och de bör motstå att sätta ett enda mål på hanteringstid eller på volym. Mål på enbart hastighet inbjuder till den manipulation som beskrivs ovan. Styrningen bör registrera vem som äger varje definition (se ämne 1.4, Styrning och ägarskap av mätetal).

### Kunder och användare

Användare bryr sig om de kom fram, om de behandlades väl och om problemet förblev åtgärdat. De bryr sig inte om hanteringstid. Att berätta för dem vad desken mäter och agera på deras återkoppling bygger förtroende, och det gör också att se till att de kanaler de föredrar mäts och bemannas. Kunder som köper tjänsten betjänas av tydliga åtaganden i ett SLA eller en upplevelseöverenskommelse (se ämne 5.1, Mätetal för SLA, OLA och XLA, och ämne 6.2, Överenskommelser om upplevelsenivå).

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på ett regionalt sjukhus driver en servicedesk med ungefär ett dussin personal för omkring 4 000 kliniska och administrativa användare. Siffrorna nedan är illustrativa och kommer inte från någon verklig organisation.

Teamets veckovy visar 1 900 kontakter (illustrativt), vilket är en kontaktfrekvens på 47,5 kontakter per 100 användare (illustrativt). Telefonens svarstid har en median på 40 sekunder och en 85:e percentil på 6 minuter (illustrativt). Andelen övergivna samtal är 14 procent (illustrativt) och stiger kraftigt på vardagsmorgnar mellan 08:00 och 09:30. Median för hanteringstid är 7 minuter, och 85:e percentilen är 22 minuter (illustrativt). Lösning vid första kontakten enligt återkontaktsfönster är 61 procent (illustrativt), och sjudagars återkontaktsgrad är 19 procent (illustrativt).

Vid den månatliga granskningen tittar deskchefen och teamet för kliniska applikationer på kategorierna. Inloggnings- och passerkortsproblem står för en stor andel av morgonkontakterna, och en nylig ändring av den kliniska applikationens inloggning gav en topp i kontakter om samma felmeddelande. Desken och applikationsteamet beslutar göra tre saker. De ska ändra felmeddelandet och lägga till en länk till artikeln, de ska lägga till ett återuppringningsalternativ för morgontoppen och de ska flytta ett skifts start en timme tidigare för att täcka ankomstmönstret kl. 08:00. De ska granska övergivna samtal, återkontakt och kontaktfrekvens för den kategorin efter fyra veckor.

En bit in i kvartalet föreslår en chef ett mål för hanteringstid på 5 minuter för att minska kön. Teamet visar att kontakterna vid 85:e percentilen är de långsamma som spelar störst roll och att ett mål skulle driva handläggare att avsluta samtal i förtid. De märker också att siffran för lösning vid första kontakten har stigit till 78 procent (illustrativt) under en vecka medan återkontaktsgraden steg till 27 procent (illustrativt). En granskning finner att några skift hade börjat stänga ärenden under samtalet med en anteckning till användaren att ringa tillbaka, vilket räknades som en lösning vid första kontakten. Teamet återställer den återkontaktsbaserade definitionen, lägger till användarbekräftelsefrågan och släpper målet för hanteringstid. Övergivna samtal, svarstid och återkontakt redovisas tillsammans från och med då.

## Agilitet, AI, automatisering och analys

### Agilitet

Behandla deskens återkoppling som underlag för ständig förbättring: en regelbunden granskning med intressenter av de främsta kontaktorsakerna och en ändring för att ta bort en orsak. Varningen är att mål för hanteringstid driver handläggare att jäkta, så håll dem utanför individuella utvärderingar.

### AI

AI-triage och utkast till svar kan korta svarstid och hanteringstid samtidigt som de ändrar vad som når en människa, så de återstående kontakterna är svårare och medelvärdena vilseleder. Para hastighet med återkontaktsgrad och andelen AI-utkast till svar som en handläggare ändrade i väsentlig mån. Varningen är att en virtuell agent som avslutar en konversation inte är ett löst problem, så räkna kontakter som återvänder.

### Automatisering

Samla in kontakt-, kö- och statushändelser automatiskt från telefoni- och ärendesystemen och mät dirigeringsautomatisering på felaktig dirigering och på kontakter som studsar mellan köer. Varningen är att automatisk kategorisering glider, så stickprova ärenden för att kontrollera att kategorin var rätt.

### Analys

Använd percentiler för svarstid, visa antalet kontakter bakom varje andel och dela upp kontaktorsaker så att beslutet är vilken orsak som ska tas bort. Varningen är att små köer ger brusiga procentsatser, så visa intervall eller antal för tjänster med låg volym.

## Branschperspektiv

**Startup.** Desken är ofta en delad inkorg eller en chattkanal som hanteras av den som är ledig. Räkna kontakter per kanal, märk kategorin och titta på de fem främsta varje månad med de människor som bygger produkten. Köp inte en callcenterplattform innan volymen motiverar det, och sätt inga mål för hastighet när två personer besvarar alla kontakter.

**Småföretag.** En person eller en utkontrakterad leverantör driver vanligen en hostad servicedesk. Använd verktygets standardrapporter, be leverantören om dess definitioner av kontakt, lösning och övergivna samtal skriftligt och exportera rådata då och då. En kort återkommande fråga till användare, till exempel "löstes ditt ärende?", ger mer insikt än en lång instrumentpanel.

**Storföretag.** Många köer, språk, verktyg och leverantörer leder till olika definitioner av samma ord. Enas om en gemensam definition av kontakt, lösning vid första kontakten och återkontakt och en gemensam uppsättning kanaler. Redovisa per kö och tjänst, med en standardvy för ledningen, och använd data från arbetskraftshantering för att bemanna efter ankomstmönster. Jämför köer först efter att ha kontrollerat att de använder samma definitioner.

**Offentlig sektor.** Poster kan ha skyldigheter om gallring, åtkomst, revision och integritet, och ett avtal kan fastställa mätetalen och målen för en utkontrakterad desk. Läs avtalsmåtten kritiskt och lägg till skyddsräckesmåtten i rapporteringen även när de inte krävs. Behåll revisionsspåret över definitionsändringar och undvik att samla in personuppgifter som inte behövs. Offentliga tjänster betjänar ofta användare med begränsat kanalval, så tillgängligheten hos varje kanal är en del av bilden (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Motivet för bättre deskmått är en billigare och bättre tjänst, och avkastningen kommer på tre ställen. För det första färre upprepade kontakter: varje återkontakt är arbete desken inte behövde göra och tid användaren inte ville lägga. För det andra rättelser uppströms: deskens kategoridata kan ta bort hela klasser av kontakter när leveransteam agerar på den. För det tredje bättre bemanning: ankomstmönsterdata låter chefer placera människor när användare behöver dem, vilket sänker andelen övergivna samtal och tomgång på en gång.

Kostnaden för insamling är måttlig där telefoniplattformen och ITSM-verktyget redan registrerar händelserna. De främsta kostnaderna är tiden för att enas om definitioner, åtgärda länkningen mellan kontakter och ärenden, lägga till en kort fråga efter kontakten och granska datan med leveransteam.

Ingen avkastningssiffra anges här, eftersom publicerade siffror varierar med organisationen och dess metod och ingen har verifierats för det här ämnet. Uppskatta avkastningen ur din egen data. Ta antalet återkontakter och en uppmätt hanteringstid, multiplicera med kostnaden för en handläggartimme och jämför det med kostnaden för rättelsen. Beskriv resultatet som en uppskattning med sina antaganden och återbesök den efter ändringen (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att sätta mål för genomsnittlig hanteringstid.** Det belönar jäkt och tidiga överföringar. Använd fördelningen per kontakttyp för planering och para den med lösning vid första kontakten och återkontakt.
- **Att räkna en handläggarsatt stängningsflagga som lösning vid första kontakten.** Den kan sättas oavsett resultat. Använd ett återkontaktsfönster och en användarbekräftelse.
- **Att rangordna enskilda handläggare.** Det driver till plockande av lätta kontakter och defensivt beteende. Redovisa per team och kö och håll individuella samtal privata och stödjande.
- **Att redovisa ett medelvärde över alla kanaler som döljer den svagaste kanalen.** Telefon, chatt och e-post beter sig olika. Redovisa varje kanal separat innan du kombinerar.
- **Att läsa volym utan nämnare.** En ökning kan vara tillväxt. Visa kontakter per 100 användare och kategorimixen.
- **Att lämna desken utanför leveransbeslut.** Antal som rapporteras till en instrumentpanel och aldrig diskuteras med produktteamet är bortkastade. Håll en månatlig granskning av de främsta kategorierna med deras ägare.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Definitioner och klockor | Var och en räknar kontakter olika | Några definitioner är skrivna för vissa köer | En skriven definition per mätetal, inklusive klockstart och stopp samt undantag | Definitionsändringar loggas och granskas enligt schema | Definitioner delas med leverantörer och kunder och revideras när de slutar ge underlag för beslut |
| Datainsamling och kvalitet | Antal sammanställs för hand ur exporter | Telefoni- och ITSM-data redovisas var för sig | Kontakter och ärenden länkade, med automatisk insamling över kanaler | Länkning, fullständighet och avstämning mäts och följs över tid | Kontaktdata delas över team och leverantörer via överenskomna gränssnitt |
| Användning i förbättring | Siffror redovisas men diskuteras sällan | Enstaka granskning av upptagna perioder | Månatlig granskning av de främsta kategorierna med tjänsteägare | Förbättringar planeras, finansieras och kontrolleras mot återkontakt och volym | Deskdata driver backlogprioriteringar över produktteam och leverantörer |
| Skyddsräcken och förtroende | Hastighetsmål tillämpas på individer | Viss medvetenhet om manipulation | Parade mått redovisas tillsammans och ingen individuell rangordning | Manipulationskontroller revideras av teamet och användarbekräftelse används | Användare och personal hjälper till att sätta måtten och ser resultaten |

## Checklista

- [ ] Kontakter och ärenden är definierade och räknas separat, och antalen stämmer av.
- [ ] Varje kanal har en skriven klocka för svarstid och ett angivet sätt att behandla automatiska svar.
- [ ] Tidsmått redovisas som medianen och en hög percentil med urvalsstorleken.
- [ ] Övergivna samtal har en skriven respitperiod och visas med svarstid.
- [ ] Lösning vid första kontakten använder ett återkontaktsfönster och en angiven betydelse av "samma sak".
- [ ] En enfrågebekräftelse från användaren samlas in, med sin svarsfrekvens visad.
- [ ] Kontaktfrekvens per 100 användare redovisas, med en skriven definition av "aktiv användare".
- [ ] Inget mål på hanteringstid sätts för handläggare, och inget mätetal rangordnar individer.
- [ ] De främsta kontaktkategorierna granskas månadsvis med de ägande teamen, och åtgärder går till en backlog.
- [ ] Definitioner är versionshanterade och varje ändring är daterad.

## AI-prompter

**Skriv utkast till precisa definitioner av deskens kärnmått.**

```text
I am writing definitions for these service desk measures: [list of measures,
for example contact volume, time to answer, abandonment, handle time, first
contact resolution, recontact]. Our channels are [list channels] and our tools
are [telephony or chat platform and ITSM tool]. For each measure, draft the
definition, formula, clock start and stop, inclusions and exclusions, unit, and
data source. Use the same terms throughout and do not invent benchmark values or
targets. List your assumptions and the questions I should answer to finish.
```

**Granska en uppsättning deskssiffror efter tecken på manipulation.**

```text
Here are our service desk figures for [period]: [paste figures such as volume,
time to answer percentiles, abandonment, handle time percentiles, first contact
resolution, recontact]. Our definitions are [paste definitions]. Look for
patterns that suggest a figure improved because of how it is collected and not
because the service improved, and suggest what to check in the data for each.
Do not accuse individuals and do not invent thresholds. List your assumptions
and what you could not determine from the data given.
```

**Förbered en månatlig granskning av de främsta kontaktkategorierna.**

```text
I am preparing a monthly review of service desk contact categories for
[service or team]. I have [category counts and contacts per 100 users for the
last three months]. Draft an agenda, a short table template, and a list of
questions to ask each service owner about causes, fixes, articles, and
self-service options. Suggest how to record actions in a backlog. Do not invent
numbers or causes. List your assumptions and the data I should bring.
```

**Utforma en kort enkät efter kontakten.**

```text
I want to measure whether users felt helped after contacting the [service desk
name] by [channel]. Draft [number] neutral questions, including one on whether
the issue was resolved, a plan for when to send them, and how to report the
response rate and respondent mix. Flag wording that could bias answers and note
privacy considerations given the data will be held in [tool]. Do not invent
benchmark response rates. List your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta vilket ämne som definierar ett relaterat mätetal och skyddsräcket som bör sitta bredvid ett deskmått.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ändringar i det här ämnet håller varje mätetal parat med en manipuleringsvektor och ett skyddsräcke.

## Viktigaste slutsatser

- Räkna kontakter och ärenden separat, definiera båda och normalisera volym mot användarbasens storlek.
- Redovisa tider som medianen och en hög percentil och säg hur många kontakter varje siffra vilar på.
- Läs svarshastighet, övergivna samtal och hanteringstid som tecken på insats och para dem med lösning vid första kontakten och återkontakt som tecken på resultat.
- Definiera lösning vid första kontakten efter om användaren kommer tillbaka och bekräfta den med en enfrågekontroll.
- Använd desken som en sensor: granska de främsta kategorierna månadsvis med de team som äger tjänsterna.
- Mät köer, kanaler och tjänster och rangordna aldrig enskilda handläggare.

## Referenser och vidare läsning

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997, pp. 305-321.
8. Wikipedia, [Help desk](https://en.wikipedia.org/wiki/Help_desk).
9. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Call centre](https://en.wikipedia.org/wiki/Call_centre).
12. Wikipedia, [First call resolution](https://en.wikipedia.org/wiki/First_call_resolution).
13. Wikipedia, [Automatic call distributor](https://en.wikipedia.org/wiki/Automatic_call_distributor).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
16. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
17. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
