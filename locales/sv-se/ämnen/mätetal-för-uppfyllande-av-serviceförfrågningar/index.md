# Mätetal för uppfyllande av serviceförfrågningar

**Mät hur lång tid rutinförfrågningar tar ur användarens synvinkel, hur stor del av den tiden som är väntan, vilka katalogobjekt som driver efterfrågan och hur mycket av arbetet som är automatiserat, och använd bilden för att utforma om de vanliga förfrågningarna i stället för att pressa de människor som hanterar dem.**

## Översikt och motiv

En **serviceförfrågan** är en rutinförfrågan från en användare om något en tjänst är utformad för att tillhandahålla: ett konto, åtkomst till en mapp, en bärbar dator, en programvarulicens, en uppgift. Den skiljer sig från en **incident**, som är ett oplanerat avbrott i en tjänst (se ämne 3.2, Incidentvolym och prioritet), och från en **ändring**, som modifierar en tjänst och kräver ett nytt omdöme om risk (se ämne 4.3, Mätetal för ändringsmöjliggörande). I [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 omfattas arbetet av praktiken hantering av serviceförfrågningar, och arbetet beskrivs vanligen som en upprepbar **förfrågningsmodell**: den information som behövs, godkännandena, stegen och den förväntade tiden.

Förfrågningar spelar roll för mätetal eftersom de är förutsägbar efterfrågan. En incident är en överraskning; en förfrågan om en nyanställds bärbara dator kommer varje månad och följer samma steg. Den förutsägbarheten gör förfrågningar till den bästa kandidaten för design, standardisering och [processautomatisering](https://en.wikipedia.org/wiki/Process_automation). Det betyder också att fördröjningar sällan orsakas av svårigheter. De orsakas av köer, godkännanden och överlämningar, så den användbara frågan är var förfrågan väntar, inte hur fort någon skriver.

Analysenheten är **katalogobjektet**: en namngiven sak en användare kan be om i [tjänstekatalogen](https://en.wikipedia.org/wiki/Service_catalog). Mått per objekt är långt mer användbara än ett enda blandat tal, eftersom en förfrågan om lösenordsåterställning och en förfrågan om ett serverbygge har olika klockor, olika ägare och olika rimliga mål. Ett blandat medelvärde döljer båda.

De agila och ITIL-baserade synsätten möts här med liten friktion. ITIL frågar om tjänsten levererar det överenskomna resultatet inom den överenskomna tiden. Agil flödespraxis frågar hur lång tid arbete tar att flöda från förfrågan till klart, hur mycket som står i köer och hur mycket arbete som pågår samtidigt. En förfrågan är ett arbetsobjekt som rör sig genom ett arbetsflöde, så flödesmätningens verktyg, till exempel cykeltid och arbetsobjektets ålder, gäller direkt (se ämne 2.1, Flödesmått). Vokabulären skiljer sig. Aritmetiken är densamma.

Tre termer återkommer. **Uppfyllandetid** är den förflutna tiden från det ögonblick användaren skickar in förfrågan till det ögonblick användaren bekräftar, eller systemet registrerar, att saken levererats. **Aktiv tid** (hands-on time) är den tid någon aktivt arbetar med förfrågan, och **väntetid** är allt annat, inklusive godkännanden och väntan på användaren. Skillnaden mellan dem är vad en förfrågningsmodell bör krympa. **Automatiseringsandel** är den del av förfrågningarna som uppfylls utan att en person rör vid dem efter inskickandet.

Tidsmått kräver omsorg. Uppfyllandetider är sneda: de flesta förfrågningar blir klara snabbt och några få tar mycket lång tid. Ett medelvärde dras runt av de få, så redovisa medianen och en hög [percentil](https://en.wikipedia.org/wiki/Percentile) som den 85:e eller 95:e (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal). Mål som överenskommits med kunder, till exempel de i ett [servicenivåavtal (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement), bör anges på samma sätt: "85 procent av laptopförfrågningar uppfyllda inom 5 arbetsdagar" säger mer än "medelvärde 3 dagar".

Slutligen en varning från mätningens psykologi. När ett team bedöms efter att stänga förfrågningar snabbt är det billigaste sättet att förbättra siffran att ändra vad som räknas som stängt, eller att pausa klockan. [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller fullt ut (se ämne 1.2, Goodharts lag och mätetalens psykologi). Varje mätetal nedan paras därför med ett skyddsräcke, och inget av dem beskriver en enskild handläggare.

## Nyckelprinciper

- **Mät per katalogobjekt.** Varje objekt har sin egen förfrågningsmodell, ägare och rimliga mål, så blandade tal vilseleder.
- **Starta klockan när användaren ber om något och stoppa den när användaren har det.** Interna milstolpar är användbara som diagnostik, men de är inte kundens upplevelse.
- **Skilj väntetid från aktiv tid.** Glappet mellan dem visar var omdesign lönar sig, och det är sällan i själva arbetet.
- **Redovisa fördelningar, inte medelvärden.** En median och en 95:e percentil beskriver vad användare genomlever.
- **Behandla efterfrågan som en signal.** Volym per objekt visar vad användare behöver, vad som är förvirrande och vad som förtjänar automatisering eller självbetjäning.
- **Automatisera det stabila och frekventa först.** Automatiseringsandel är ett resultat av god förfrågningsdesign, inte ett mål att jaga för sin egen skull.
- **Mät teamet och tjänsten, aldrig personen.** Förfrågningar flödar genom system, och variation mellan handläggare speglar mest mixen av arbete.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Uppfyllandetid för förfrågan | Förfluten tid för att leverera en förfrågan, visad som en median och en 95:e percentil per katalogobjekt | klockan startar när användaren skickar in förfrågan, stoppar när användaren bekräftar leverans eller leveransen registreras; förfrågningar som avbrutits av användaren utesluts; tid som väntar på användaren redovisas separat, tas inte bort | arbetsdagar eller timmar | Förfrågningshistorik i ITSM-verktyget | Hantering av serviceförfrågningar | Cykeltid på teamets tavla (se ämne 2.2, Ledtid, cykeltid och flödeseffektivitet) | Veckovis, trend månadsvis |
| Uppfyllande inom mål | Andel förfrågningar som levererats inom det mål som överenskommits för deras katalogobjekt | förfrågningar uppfyllda inom målet / förfrågningar uppfyllda under perioden; klocka som ovan, objekt som fortfarande är öppna utesluts och räknas i backlogens ålder i stället | procent | Förfrågningshistorik i ITSM-verktyget; måltabell för katalogobjekt | Hantering av servicenivåer | Förväntad servicenivå | Månadsvis |
| Förfrågningsbacklog och ålder | Antal öppna förfrågningar och hur gamla de äldsta är, per katalogobjekt | öppna förfrågningar vid periodens slut (antal); ålder på varje öppen förfrågan = rapportdatum minus inskickningsdatum; redovisa antalet, medianåldern och den äldsta åldern | antal och dagar | Öppen förfrågningskö i ITSM-verktyget | Hantering av serviceförfrågningar | Pågående arbete och åldrande arbetsobjekt (se ämne 2.3, Pågående arbete och köteori) | Veckovis |
| Godkännandeväntan | Tid en förfrågan väntar på ett godkännande | klockan startar när godkännandet begärs, stoppar när det beviljas eller avslås; förfrågningar utan godkännandesteg utesluts | timmar | Godkännandelogg i ITSM-verktyget | Hantering av serviceförfrågningar; ändringsmöjliggörande | Blockerad tid eller en "väntar"-kolumn på tavlan | Månadsvis |
| Förfrågningsvolym per katalogobjekt | Antal förfrågningar som skickats in för varje objekt, med dess andel av alla förfrågningar | förfrågningar inskickade per objekt under perioden; förfrågningar som skickats in på nytt som dubbletter, om de identifieras, utesluts; redovisa antalet och andelen av totalen | antal och procent | Förfrågningsposter i ITSM-verktyget | Hantering av tjänstekatalog | Efterfrågeanalys för att forma backlogen | Månadsvis |
| Automatiseringsandel | Andel förfrågningar som uppfylls utan manuellt steg efter inskickandet | förfrågningar som uppfyllts från början till slut genom automatisering / förfrågningar som uppfyllts under perioden; en förfrågan som en person rört vid i något uppfyllandesteg räknas som manuell; godkännanden av en person räknas inte som manuella uppfyllandesteg om policyn kräver dem | procent | Uppfyllandeposter i ITSM-verktyget och loggar från automatiseringsplattformen | Hantering av serviceförfrågningar; automatisering inom tjänstevärdekedjan | Automatisering i definitionen av klart | Månadsvis |
| Återöppningsgrad för förfrågningar | Andel uppfyllda förfrågningar som användaren öppnar på nytt eller väcker på nytt därför att resultatet var fel eller ofullständigt | förfrågningar som öppnats på nytt eller väckts på nytt för samma objekt av samma användare inom 7 dagar efter uppfyllande / förfrågningar som uppfyllts under perioden; sjudagarsfönstret är ett exempel som teamet skriver ned | procent | Förfrågningshistorik i ITSM-verktyget | Hantering av serviceförfrågningar | Omarbetsgrad; undkomna fel | Månadsvis |

Uppfyllandetid räknar arbetstid bara om teamet har enats om en kalender och registrerat den; annars använd förfluten tid i timmar och säg det. Backlogmåttet bär tre tal med avsikt, eftersom ett antal ensamt inte säger något om väntan. Definitionen av automatiseringsandel lämnar mänskliga godkännanden utanför den "manuella" räkningen eftersom många godkännanden är ett policybeslut, inte en uppfyllandekostnad; godkännandeväntan mäts separat så att fördröjningen förblir synlig.

## Rekommendationer

### Definiera klockorna och enheten

**1. Mät per katalogobjekt och publicera objektlistan.** Börja med de tio främsta objekten efter volym, som vanligen täcker en stor andel av förfrågningarna, och lägg till objekt allteftersom datan tillåter. Ge varje objekt en ägare, ett angivet mål och en enradsdefinition av "levererat". Objektlistan är nämnaren för allt annat, så förvara den i mätetalsregistret (se ämne 1.4, Styrning och ägarskap av mätetal).

**2. Skriv ned klockans start och stopp för varje objekt.** För de flesta objekt startar klockan vid inskickandet och stoppar när användaren kan använda det hen bad om, inte när ett ärende stängs. En bärbar dator är levererad när den är i användarens händer, inte när kuriren är bokad.

**3. Besluta en gång hur väntan på användaren behandlas.** Vissa förfrågningar stannar av därför att användaren inte har svarat på en fråga. Att pausa klockan för det är rimligt, men det är också det lättaste greppet att missbruka. Registrera pausen som ett separat tillstånd med ett skäl, redovisa pausad tid som ett eget tal och granska pausgraden per objekt (se ämne 1.5, Datakällor och instrumentering).

### Redovisa vad användare upplever

**4. Visa medianen och 95:e percentilen, med ett antal.** Lägg båda i ett diagram per objekt, med antalet förfrågningar bakom varje punkt. En median på två dagar med en 95:e percentil på tjugo säger att de flesta användare är väl betjänade och att en svans behöver undersökas, vilket ett medelvärde på fyra dagar döljer. När antalet är litet, säg det och visa de enskilda förfrågningarna i stället för en percentil.

**5. Gör åldern på öppna förfrågningar synlig.** Uppfyllandetid är bara känd efter att en förfrågan blivit klar, så den släpar. En lista över de äldsta öppna förfrågningarna per objekt, sorterad efter ålder, talar om för ett team var det ska titta i dag. I flödestermer är detta arbetsobjektets ålder mot objektets vanliga cykeltid, och det är den mest handlingsbara vy en förfrågningskö kan ha.

**6. Dela upp förfluten tid i aktiv tid, godkännandetid och tid som väntar på användare.** Ta ett stickprov av uppfyllda förfrågningar för ett objekt och dela upp var och en i tiden i varje tillstånd. De flesta team finner att aktivt arbete är en liten andel av den förflutna tiden. Fyndet flyttar förbättringssamtalet från "arbeta fortare" till "ta bort kön mellan stegen", vilket är kärnan i läran om köer och flöde (se ämne 2.3, Pågående arbete och köteori).

### Använd efterfrågan för att forma tjänsten

**7. Läs volym per objekt som ett budskap från användare.** En stigande volym för ett objekt kan betyda växande behov, en förvirrande produkt eller ett fel någon annanstans, till exempel en trasig process som skickar människor tillbaka för att fråga igen. Ett objekt med mycket låg volym kan vara en kandidat att avveckla ur katalogen. Jämför volym med användningsdata (se ämne 6.3, Mätetal för tjänsteanvändning och katalog).

**8. Rangordna automatiseringskandidater efter volym, stabilitet och aktiv tid.** De bästa första kandidaterna har hög volym, varierar sällan och bär märkbar aktiv tid. Börja med objektet vars steg redan är identiska varje gång, till exempel åtkomst till en standardgrupp, och automatisera stegen innan du rör undantagen. Följ automatiseringsandelen per objekt så att framsteg syns, och skicka frågor om självbetjäning och avvisning till deras eget ämne (se ämne 3.7, Mätetal för självbetjäning och automatisering).

**9. Utforma om godkännanden innan du lägger till människor.** Godkännandeväntan dominerar ofta den förflutna tiden. Fråga för varje godkännande om det krävs av policy, om en förhandsgodkänd standardförfrågan skulle duga och om godkännaren kan vara en roll med en ställföreträdare snarare än en enskild person. Att förhandsgodkänna förfrågningar med låg risk och väl förstådda motsvarar idén med standardändringar i ändringsmöjliggörande, och det tar bort köer utan att ta bort kontroll.

### Håll siffrorna ärliga

**10. Para alltid hastighet med kvalitet.** Redovisa uppfyllandetid bredvid återöppningsgraden och en nöjdhetssignal för samma objekt (se ämne 6.1, Mätetal för kundnöjdhet). En snabbare förfrågan som kommer tillbaka återöppnad är långsammare än den ser ut. Om hastigheten förbättras och återöppningsgraden stiger med den, behandla hastighetsvinsten som obevisad.

**11. Håll förfrågningar, incidenter och ändringar åtskilda i datan.** Att blanda dem förvränger alla tre. En lösenordsåterställning som egentligen är ett symptom på en felaktig inloggningstjänst är en incident, och en förfrågan om att ändra hur en tjänst fungerar är en ändring. Klassificera vid intaget med en kort regel, stickprova felklassificerade objekt kvartalsvis och jämför förfrågnings- och incidentvolymer sida vid sida (se ämne 3.1, Mätetal för servicedesk).

**12. Granska objekttabellen med det team som gör arbetet.** Träffas månadsvis i trettio minuter kring tabellen per objekt: volym, median och 95:e percentil, äldsta öppna förfrågan, automatiseringsandel, återöppningsgrad. Välj ett objekt och en ändring att pröva och titta på samma tabell nästa månad för att se vad som hände.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Uppfyllandetid för förfrågan | Att pausa klockan för "väntar på användare" oavsett om användaren är orsaken; att stänga förfrågningar före leverans och öppna dem som nya; att dela upp en förfrågan i flera små | Andel pausad tid per objekt, med en stickprovsrevision av pausskäl; återöppningsgrad; användarbekräftelse av leverans före stängning |
| Uppfyllande inom mål | Att omdefiniera målet så att det blir lättare; att bara räkna förfrågningar som blir klara och ignorera de gamla öppna; att plocka snabba objekt till målmängden | Backlogens ålder för öppna förfrågningar; ändringar av mål loggas i mätetalsregistret med ett skäl; målmängden täcker alla objekt efter volym |
| Förfrågningsbacklog och ålder | Att stänga gamla förfrågningar som "inget svar" eller "inaktuella"; att flytta förfrågningar till en annan kö eller kategori så att de lämnar den räknade kön | Antal förfrågningar som stängts utan leverans, per skäl; kategori- och köflyttar granskas vid det månatliga mötet |
| Godkännandeväntan | Godkännare godkänner utan att läsa för att hålla sin tid låg; beställare jagar godkännare utanför systemet så att den loggade väntan blir kort | Stickprovsgranskning av godkända förfrågningar mot policy; återöppningsgrad och säkerhetsundantag för godkända objekt; antal godkännandesteg per objekt |
| Förfrågningsvolym per katalogobjekt | Att minska volymen genom att göra katalogen svårare att hitta eller avskräcka från förfrågningar; att omklassificera förfrågningar som incidenter eller "allmänna frågor" | Användarnöjdhet för katalogen; andel kontakter klassificerade som "övrigt"; användningsdata för tjänsten (se ämne 6.3, Mätetal för tjänsteanvändning och katalog) |
| Automatiseringsandel | Att automatisera de triviala objekten för att höja procentsatsen; att räkna en skriptad förfrågan som en person fortfarande kontrollerar för hand som automatiserad; att dölja manuella steg i ett separat ärende | Andel viktad efter förfrågningsvolym och borttagen aktiv tid; andel misslyckad automatisering och återgång till manuellt; stickprov av "automatiserade" förfrågningar spårade från början till slut |
| Återöppningsgrad för förfrågningar | Att avskräcka från återöppning genom att göra det svårt; att be användare öppna en ny förfrågan, vilket nollställer räknaren | Upprepade förfrågningar från samma användare för samma objekt inom fönstret; användarnöjdhet per objekt; återöppning tillåten från notifieringen |

En sund avläsning ser ut så här. Median och 95:e percentil faller tillsammans, eller så faller den 95:e percentilen medan medianen håller. Den äldsta öppna förfrågan är inte mycket äldre än den 95:e percentilen av uppfyllda. Återöppningsgrad och nöjdhet förblir platta eller förbättras medan hastigheten förbättras. Automatiseringsandelen stiger på de objekt som spelar roll efter volym, och själva volymen ändras av skäl teamet kan förklara. Om en siffra förbättras kraftigt medan dess skyddsräcke driver åt andra hållet, gå och titta på de underliggande förfrågningarna.

## Avvägningar: för- och nackdelar

| Val | Fördelar | Nackdelar |
| --- | --- | --- |
| Mätning per objekt | Mål passar arbetet; visar var omdesign lönar sig | Mer data att underhålla; små objekt har få datapunkter |
| Median och 95:e percentil i stället för medelvärdet | Beskriver vad användare genomlever; tål extremvärden | Svårare att förklara för chefer vana vid ett tal; instabilt för objekt med låg volym |
| Att pausa klockan när man väntar på användaren | Rättvist mot teamet när användaren orsakar fördröjningen | Lätt att missbruka; döljer effekten av oklara formulär och dålig kommunikation |
| Att räkna automatiseringsandel | Gör framsteg i automatisering synliga och knyter dem till kostnad | Belönar lätta automatiseringar; säger inget om kvalitet om den inte paras med felgrad |
| Att mäta från användarens inskickande till användarens bekräftelse | Stämmer med kundens upplevelse | Beror på användarbekräftelse, som ofta saknas; behöver en standardregel |
| Strikt åtskillnad mellan förfrågningar och incidenter | Renare data och bättre mål | Kräver intagsdisciplin och diskussioner om gränsfall |

Den centrala avvägningen ligger mellan ett rent tal och ett rättvist. En strikt klocka som aldrig pausar är enkel och svår att manipulera, men den straffar teamet när användaren är långsam. En flexibel klocka är rättvisare men behöver revision. De flesta team gör klokt i att börja strikt, lägga till ett uttryckligt pausat tillstånd med ett skäl och redovisa den pausade andelen öppet.

## Frågor att diskutera med teamet

**1. Vilka tre katalogobjekt orsakar mest väntan för våra användare, och hur vet vi det?**
Ta med tabellen per objekt över volym, median och 95:e percentil för uppfyllandetid. Be gruppen välja objekt efter total väntan (volym gånger typisk väntan), inte efter hur irriterande de känns. Jämför svaret med människors första instinkt. Facilitatorn bör notera var data och instinkt skiljer sig.

**2. Var startar och stoppar vår klocka, och skulle en användare hålla med?**
Välj ett vanligt objekt och gå igenom dess resa så som användaren ser den, från första klicket till det ögonblick hen kan använda resultatet. Markera var vår ärendestatus säger "klart" och var användaren skulle säga "klart". Varje glapp mellan de två är osynlig väntan. Enas om en ändring av stopphändelsen och skriv den i mätetalsregistret.

**3. Hur stor del av vår förflutna tid är människor som arbetar, och hur stor del är väntan?**
Ta ett stickprov av tio uppfyllda förfrågningar för ett objekt och dela upp var och en i aktiv tid, godkännandetid och tid som väntar på användaren. Visa resultatet som ett staplat diagram. Fråga vad som skulle behöva vara sant för att väntan skulle halveras. Den här frågan flyttar oftast rummet från "vi behöver mer personal" till "vi behöver färre överlämningar".

**4. Vilka godkännanden skulle kunna ersättas av en förhandsöverenskommen regel?**
Lista godkännandena för de främsta objekten och policyskälet för vart och ett. Där ingen minns det senaste avslaget kan godkännandet vara en ritual.

**5. Om vi automatiserade nästa katalogobjekt, skulle talet stiga av rätt skäl?**
Diskutera hur automatiseringsandelen kan stiga genom lätta objekt eller objekt med låg volym medan användare inte ser någon skillnad. Fråga vad teamet skulle mäta för att bekräfta att en automatisering hjälpte: borttagen aktiv tid, felgrad, återöppningsgrad och nöjdhet. Besluta vilket objekt som ska automatiseras härnäst utifrån volym och aktiv tid, inte enbart lätthet.

**6. Vad skulle vi göra om ett tal på den här sidan blev sämre, och vem skulle få skulden?**
Kör tankeexperimentet öppet. Fråga vad teamet skulle frestas att ändra i datan innan det ändrade tjänsten. Enas om att det första svaret på ett försämrat tal är att titta på förfrågningarna bakom det.

## Fyra perspektiv

### Produkt- och leveransteam

Produktteam genererar förfrågningar om sina egna tjänster: åtkomst till miljöer, nya pipelines, testdata, licensnycklar. Långa uppfyllandetider för dessa syns som overksamt arbete i teamets eget flöde, så måttet hör hemma på deras tavla som ett blockerat tillstånd. Team som äger en tjänst bör publicera sina egna förfrågningsobjekt och mål och behandla upprepade förfrågningar som backlogkandidater (se ämne 2.6, Mätetal för backlog och förfining). Där en förfrågan egentligen är en saknad plattformsförmåga är den upprepade efterfrågan argumentet för att bygga den.

### Service- och driftteam

För de människor som uppfyller förfrågningar är tabellen per objekt en karta över var insatsen går. De vet vilka steg som är manuella, vilka godkännanden som stannar av och vilka formulär som ger vag indata. De bör äga förfrågningsmodellerna, automatiseringsbacklogen och den månatliga granskningen, och de bör vara den första publiken för datan. Siffrorna beskriver kön och processen, så gör det uttryckligt att ingen rangordnas och att variation mellan människor mest speglar mixen av förfrågningar de tar emot.

### Ledning och styrning

Ledare behöver en kort vy: median och 95:e percentil för huvudobjekten, andelen uppfylld inom mål, de äldsta öppna förfrågningarna och trenden i automatiseringsandel och kostnad per förfrågan (se ämne 7.5, Tjänstekostnad och enhetsekonomi). Styrningens uppgift är att fråga vad som ändrades, inte vem som är långsam. Ledare godkänner också policysidan av godkännanden, så de håller greppet som mest minskar väntan.

### Kunder och användare

Användare bryr sig om tre saker: hur länge, hur förutsägbart och hur mycket möda. De bryr sig sällan om interna tillstånd. Visa dem ett enkelt mål per objekt ("bärbara datorer på fem arbetsdagar"), tala om var deras förfrågan finns och be dem bekräfta leverans. Samla in en enfrågenöjdhetssignal vid stängning och läs kommentarerna.

## I praktiken: ett exempel från tjänstehantering

En regional högskolas it-avdelning (en fiktiv organisation) driver en servicedesk och ett litet plattformsteam. Siffrorna nedan är illustrativa, inte från någon verklig organisation.

Vid den månatliga granskningen tittar teamet på tabellen per objekt. Över alla förfrågningar är den genomsnittliga uppfyllandetiden 3,1 arbetsdagar, vilket ser acceptabelt ut och knappt har rört sig på ett år. Per objekt är bilden en annan. "Åtkomst till delad enhet" har en median på 0,4 dagar och en 95:e percentil på 2 dagar. "Licens för avdelningsprogramvara" har en median på 2 dagar och en 95:e percentil på 11 dagar. "Bärbar dator för nyanställd" har en median på 6 dagar och en 95:e percentil på 15 dagar. De tre främsta objekten efter volym är åtkomst till delad enhet, licensförfrågningar och bärbara datorer för nyanställda, med illustrativa andelar på 32, 21 och 9 procent av alla förfrågningar.

Teamet stickprovar tio laptopförfrågningar och delar upp tiden. Illustrativt resultat: ungefär 0,5 dagar aktivt arbete, 2,5 dagar som väntar på en närmaste chefs godkännande, 1,5 dagar som väntar på lagerbekräftelse och resten i en kö hos kuriren. Godkännandeväntan är den största biten.

Beslutet följer av datan. Teamet föreslår, tillsammans med ekonomiägaren och säkerhetsägaren, att bärbara datorer i standardkatalogen förhandsgodkänns när den nyanställdas roll bekräftats av personalavdelningen, med chefen underrättad i stället för tillfrågad. De kopplar också lagerkontrollen till lagersystemet. De sätter experimentet till ett kvartal och enas om vad som skulle räknas som framgång: den 95:e percentilen för bärbara datorer faller, och återöppningsgraden och nöjdhetsbetyget förblir oförändrade.

En manipulationsrisk dyker upp i den andra månaden. Medianen för licenser sjunker kraftigt, från 2 dagar till under 1. Granskningen märker att andelen pausad tid för "väntar på användare" för objektet har hoppat från illustrativa 5 procent till 40 procent, och återöppningsgraden har stigit. Ett stickprov visar att handläggare pausade förfrågningar med ett generiskt meddelande i det ögonblick en licens behövde någon kontroll, vilket stoppade klockan. Teamet lägger inte skulden på handläggarna. De ser att målet gjorde pausning attraktiv och att pausorsaksfältet var fritext. De ändrar pausorsaken till en kort lista, kräver en specifik fråga till användaren och lägger till andelen pausad tid som en stående kolumn bredvid medianen. Licensmedianen återgår till nära sin tidigare nivå, återöppningsgraden faller, och teamet använder den sparade diskussionstiden till att utforma om licensformuläret, som gav upphov till de oklara förfrågningarna.

Efter kvartalet (illustrativt) faller den 95:e percentilen för bärbara datorer från 15 till 9 dagar och automatiseringsandelen för åtkomst till delad enhet når 70 procent. Teamet loggar båda ändringarna och väljer licensformuläret som nästa experiment.

## Agilitet, AI, automatisering och analys

### Agilitet

Behandla vanliga förfrågningar som små produkter som teamet förbättrar kontinuerligt tillsammans med de människor som använder dem. Varningen är att ett mål för uppfyllandetid kan leda till att förfrågningar stängs i förtid eller delas upp, så para det med återöppningsgrad för förfrågningar.

### AI

AI kan skriva utkast till svar, fylla i formulär och dirigera förfrågningar, och kan slutföra vissa förfrågningar helt utan person inblandad. Para automatiseringsandel med återöppningsgrad för förfrågningar och med andelen AI-hanterade förfrågningar som behövde en person efteråt. Varningen är att en AI som missförstår en förfrågan kan skapa fel åtkomst eller beställning, så godkännanderegler gäller fortfarande.

### Automatisering

Automatisera godkännanden, etablering och statusuppdateringar för standardförfrågningar och mät automatiseringen på fel och manuellt omarbete. Visa godkännandeväntan separat, eftersom den ofta är den längsta väntan. Varningen är att automatisering utan tydligt ägarskap lämnar misslyckade förfrågningar i en kö som ingen bevakar.

### Analys

Visa uppfyllandetid som en fördelning per katalogobjekt och ta med den äldsta öppna förfrågan. Beslutet detta ger underlag för är vilken förfrågan som ska utformas om först. Varningen är att blanda enkla och komplexa objekt i ett medelvärde döljer båda.

## Branschperspektiv

**Startup.** En startup har få förfrågningstyper och ingen formell katalog, och samma människor hanterar förfrågningar och bygger produkten. Mät de tre eller fyra förfrågningar som blockerar nya medarbetare, till exempel konton och utrustning, och följ den äldsta öppna förfrågan. Automatisera introduktionen tidigt, eftersom varje nyanställning upprepar den.

**Småföretag.** Ett småföretag förlitar sig ofta på en it-person eller en extern leverantör. Använd en enkel delad tavla med en kolumn för varje tillstånd och följ förfrågningens ålder och volym per typ. Be leverantören om den månatliga volymen per objekt och den äldsta öppna förfrågan.

**Storföretag.** Ett storföretag har hundratals katalogobjekt, många uppfyllandegrupper och skiktade godkännanden. Koncentrera dig på de främsta objekten efter volym och på de längst väntande objekten efter total väntan. Standardisera klockdefinitionen över uppfyllandegrupper innan du jämför dem och redovisa överlämningar mellan grupper separat (se ämne 9.3, Mätetal för samarbete och överlämningar). Leverantörers uppfyllandetider hör hemma i samma vy, mätta från kundens förfrågan, inte leverantörens mottagande.

**Offentlig sektor.** Offentliga organ lägger till obligatoriska godkännanden, upphandlingsregler och arkivskyldigheter, så en del väntetid är policy och bör märkas som sådan snarare än räknas som fördröjning att ta bort. Publicera mål per objekt på vanligt språk där tjänsteåtaganden är offentliga. Redovisa på ett sätt som en tillsynsmyndighet eller ett granskande organ kan återskapa, med definitionerna nedskrivna.

## Affärscase: motiv, ROI och TCO

Förfrågningar är en stor och repetitiv andel av det arbete som når en servicedesk, så även måttlig omdesign får bred effekt. De främsta motiven är kortare och mer förutsägbara väntetider för användare, lägre hanteringsinsats per förfrågan, färre upprepade kontakter och kapacitet som frigörs för problem- och förbättringsarbete.

Kostnadssidan är mestadels engångs och måttlig. Att definiera katalogobjekten, enas om klockorna och se till att verktyget registrerar de nödvändiga tillstånden är några dagars arbete per grupp, plus en liten löpande insats för att hålla pipelinen korrekt (se ämne 1.5, Datakällor och instrumentering). Automatisering har sin egen bygg- och underhållskostnad, som omfattar att övervaka automatiseringarna, hantera fel och uppdatera dem när målsystemen ändras. Räkna det i den totala ägandekostnaden utöver licensen eller byggtiden.

Avkastningen bör uppskattas ur din egen data och inte ur ett allmänt riktmärke. För ett objekt, multiplicera månadsvolymen med sparad aktiv tid och med den belastade kostnaden för tiden och dra sedan av bygg- och driftkostnaden för ändringen. Lägg till värdet av väntetiden som tagits bort för användare, med en metod du kan försvara, och visa det separat eftersom det är en uppskattning av ett annat slag. Ingen siffra i det här ämnet är ett riktmärke, och exempelsiffrorna är illustrativa. Koppla affärscaset till enhetskostnad per förfrågan där ekonomidata finns (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Ett blandat medelvärde för alla förfrågningar.** Det döljer både de snabba vinsterna och den långa svansen. Redovisa per objekt, med en median och en 95:e percentil.
- **Att stänga ärendet och kalla det levererat.** Användaren kanske fortfarande inte har något. Definiera leverans från användarens sida och be om bekräftelse.
- **Fria pausstatusar.** Ett "väntar"-tillstånd utan skäl låter klockan stoppas av vilken orsak som helst. Använd en kort lista med skäl och redovisa den pausade andelen.
- **Att räkna automatisering efter antal objekt.** Tio automatiserade sällsynta objekt kan lyfta procentsatsen utan att hjälpa någon. Väg efter volym och aktiv tid.
- **Att rangordna handläggare efter stängda förfrågningar.** Det belönar plockande av lätta ärenden och straffar dem som tar svåra. Redovisa bara på team- och objektnivå.
- **Att dölja efterfrågan för att se effektiv ut.** Att göra katalogen svår att använda sänker volymen och höjer frustrationen. Para volym med nöjdhets- och användningsdata.
- **Att behandla godkännanden som orörbara.** Godkännanden är ofta den största fördröjningen och granskas sällan. Fråga vad var och en skyddar och om en regel kan göra jobbet.
- **Att blanda förfrågningar med incidenter.** Det förvränger båda uppsättningarna siffror. Klassificera vid intaget och stickprova klassificeringen.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Definitioner och klockor | Förfrågningar räknas som ärenden; klockans slut är vad "stängd" råkar betyda | Vissa team definierar start och stopp per objekt; definitionerna skiljer sig | En skriven klockdefinition per katalogobjekt, delad över team | Definitioner granskas i en rytm och ändringar loggas med skäl | Definitioner följer kundens syn över leverantörer och revideras när de slutar ge underlag för beslut |
| Data och rapportering | Antal hämtas för hand ur verktyget | Rapporter för vissa objekt från ITSM-verktyget; medeltider | Median och 95:e percentil per objekt från en datakälla | Trender, backlogens ålder och andel pausad tid granskas med sina skyddsräcken | Uppfyllandedata från interna team och leverantörer kombineras och kopplas till användarresultat |
| Efterfrågan och automatisering | Förfrågningar hanteras en och en; ingen bild av upprepad efterfrågan | De främsta objekten identifieras informellt; några skript | Förfrågningsmodeller dokumenterade för de främsta objekten; automatiseringsbacklog rangordnad efter volym och aktiv tid | Automatiseringsandel och felgrad följs; godkännanden utformas om på belägg | Efterfrågan, självbetjäning och automatisering planeras tillsammans över organisationen och anpassas fortlöpande |
| Användning i förbättring | Siffror rapporteras uppåt, används inte | Enstaka rättelser efter klagomål | Månatlig granskning av det team som gör arbetet | Finansierade förbättringar knutna till resultat per objekt | Förbättringsidéer kommer från team, användare och leverantörer, och resultat matas tillbaka till katalogdesignen |

## Checklista

- [ ] Varje katalogobjekt inom omfattningen har en ägare, en enradsdefinition av "levererat" och ett angivet mål.
- [ ] Start- och stopphändelserna för uppfyllandeklockan är nedskrivna för varje objekt.
- [ ] Väntan på användaren är ett separat tillstånd med en kort lista skäl, och pausad tid redovisas.
- [ ] Rapporter visar medianen och 95:e percentilen per objekt, med antalet förfrågningar bakom varje.
- [ ] De äldsta öppna förfrågningarna är synliga för teamet varje vecka.
- [ ] Aktiv tid, godkännandetid och väntetid har stickprovats för de främsta objekten.
- [ ] Volym per objekt granskas månadsvis och jämförs med användnings- eller nöjdhetsdata.
- [ ] Automatiseringsandel är viktad efter volym och paras med fel- och återgångsgrad.
- [ ] Varje hastighetsmått paras med återöppningsgraden och en användarnöjdhetssignal.
- [ ] Förfrågningar, incidenter och ändringar klassificeras vid intaget, och klassificeringen stickprovas.
- [ ] Ingen rapport rangordnar enskilda handläggare.

## AI-prompter

**Skriv utkast till en förfrågningsmodell och klockdefinition för ett katalogobjekt.**

```text
I am defining the measurement for this catalog item: [catalog item name]. The
steps today are [list steps and who does each], the approvals are [list
approvals], and our tool is [ITSM tool]. Draft a request model with the
information required, the start and stop events of the fulfillment clock, the
states in which the clock may pause and the allowed reasons, and a list of
timestamps I need the tool to record. Do not invent benchmark values or tool
features. List your assumptions and the questions I should answer to finish the
definition.
```

**Dela upp förfluten tid i aktiv tid och väntetid.**

```text
Here is a sample of [number] fulfilled requests for [catalog item] with state
change times: [paste anonymized state history, no names]. Compute, for each
request and for the sample, the hands-on time, approval wait, and waiting-for-user
time, and show the median and the range. Point out which state holds the most
time and what questions I should ask the team about it. Do not infer causes
without evidence, and do not compare individual people. List your assumptions.
```

**Rangordna automatiseringskandidater.**

```text
Here is a table of catalog items with monthly volume, median hands-on time,
variation in steps, and the systems each touches: [paste table]. Suggest a way
to rank automation candidates using volume, stability, and hands-on time, and
explain the ranking for the top [number] items. Flag items where automation could
create security or quality risk, and list what I should verify with [control
owner role] first. Do not invent savings figures or benchmark values. List your
assumptions.
```

**Granska en uppfyllandepanel efter manipulationsrisk.**

```text
This is our request fulfillment dashboard: [describe metrics, definitions, and
targets]. For each metric, list how it could be gamed or misread, the
observable sign in the data, and a paired guardrail metric or practice. Check
that nothing ranks individuals, and suggest wording changes that reduce
pressure on the team. Do not invent thresholds; ask me for any you need. List
your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta definitionen, manipuleringsvektorn och skyddsräcket för ett förfrågningsmätetal samt de angränsande ämnena som paras med det.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ändringar i det här ämnet håller mallen, klockorna och skyddsräckesparningarna intakta.

## Viktigaste slutsatser

- Mät uppfyllande per katalogobjekt, från användarens inskickande till användarens bekräftelse, och redovisa medianen och en hög percentil.
- Det mesta av den förflutna tiden är väntan, så dela upp aktiv tid, godkännandetid och tid som väntar på användaren innan du avgör vad som ska rättas.
- Läs volym per objekt som ett budskap från användare och automatisera de frekventa och stabila objekten först.
- Para varje hastighetstal med återöppningsgraden och en nöjdhetssignal och redovisa pausad tid öppet.
- Beskriv kön och processen, aldrig personen.

## Referenser och vidare läsning

1. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
2. AXELOS, *ITIL 4 Practice Guide: Service Request Management*, TSO (The Stationery Office), 2020.
3. ISO/IEC 20000-1, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Process automation](https://en.wikipedia.org/wiki/Process_automation).
12. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
