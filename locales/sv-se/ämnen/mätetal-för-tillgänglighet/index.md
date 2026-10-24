# Mätetal för tillgänglighet

**Tillgänglighet är andelen tid, eller andelen användarförfrågningar, då en tjänst gjorde det användarna behövde, och den talar bara sanning när du definierar vad "uppe" betyder från användarens sida, räknar planerade och oplanerade avbrott separat och läser aritmetiken bakom nior innan du lovar någon.**

## Översikt och motiv

Tillgänglighet är det mest citerade talet inom tjänstehantering och ett av de minst precist definierade. Ett påstående som "tjänsten var 99,9 procent tillgänglig förra månaden" låter exakt, men döljer minst fyra beslut: vad som räknades som tjänsten, vad som räknades som "tillgänglig", vilka timmar som låg inom omfånget och vilka avbrott som uteslöts. Två team kan rapportera samma tjänst för samma månad och publicera siffror som skiljer sig med en tiopotens utan att någon av dem gjort ett aritmetiskt fel.

Det här ämnet gör dessa beslut uttryckliga. Det täcker beräkning av drifttid och driftstopp, användarviktad tillgänglighet, planerat mot oplanerat avbrott och aritmetiken bakom nior. Det bygger på servicenivåindikatorer (SLI:er), servicenivåmål (SLO:er) och felbudgetar (se ämne 5.2, SLI:er, SLO:er och felbudgetar) och på den avtalsmässiga synen på servicenivåer (se ämne 5.1, Mätetal för SLA, OLA och XLA). Dessa ämnen säger hur man väljer ett mål. Det här säger hur man beräknar talet som målet jämförs med.

### Termer som används i det här ämnet

- **Tillgänglighet** är en tjänsts förmåga att göra det användare behöver när de behöver det, vanligen uttryckt som en procentsats över en period. Det allmänna begreppet beskrivs i artikeln om [hög tillgänglighet](https://en.wikipedia.org/wiki/High_availability).
- **[Driftstopp](https://en.wikipedia.org/wiki/Downtime)** (downtime) är en period då en tjänst är otillgänglig. Det här ämnet använder **avbrott** för en sammanhängande episod av driftstopp och **degradering** för en period då tjänsten fungerar men under en överenskommen kvalitet.
- **Drifttid** (uptime) är komplementet till driftstopp inom mätfönstret. Tidsbaserad tillgänglighet är drifttid dividerad med den totala tiden inom omfånget.
- **Förfrågningsbaserad tillgänglighet** är andelen giltiga förfrågningar som lyckades, så ett fel som drabbar 5 procent av förfrågningarna under en timme räknas som 5 procent av en timmes trafik, inte som en hel timme driftstopp.
- **Användarviktad tillgänglighet** utvidgar den förfrågningsbaserade vyn genom att vikta fel efter antalet eller vikten av de användare som påverkas, till exempel genom att räkna misslyckade sessioner eller misslyckade resor i stället för råa förfrågningar.
- Ett **servicenivåavtal (SLA)** är ett åtagande till en kund, och ett **servicenivåmål (SLO)** är ett internt mål för en indikator. Artiklarna om [servicenivåavtal](https://en.wikipedia.org/wiki/Service-level_agreement) och [servicenivåmål](https://en.wikipedia.org/wiki/Service-level_objective) ger allmänna definitioner.
- **Planerat driftstopp** är ett avbrott som tillkännagivits i förväg och godkänts genom ändringsmöjliggörande. **Oplanerat driftstopp** är allt annat. Gränsen mellan dem är en av de mest omstridda linjerna i tillgänglighetsrapportering.
- **[Genomsnittlig tid mellan fel](https://en.wikipedia.org/wiki/Mean_time_between_failures)** (MTBF) är den genomsnittliga drifttiden mellan avbrott, och **[genomsnittlig tid till reparation](https://en.wikipedia.org/wiki/Mean_time_to_repair)** är den genomsnittliga tiden till återställning. Båda är medelvärden, så den här boken läser dem som fördelningar (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).
- **[Syntetisk övervakning](https://en.wikipedia.org/wiki/Synthetic_monitoring)** använder skriptade sonder som beter sig som en användare och rapporterar framgång eller misslyckande. **[Övervakning av verkliga användare](https://en.wikipedia.org/wiki/Real_user_monitoring)** registrerar upplevelsen hos faktiska användare när de använder tjänsten.
- **[ITIL](https://en.wikipedia.org/wiki/ITIL)** är det mest kända ramverket för it-tjänstehantering. I ITIL 4 syftar praktiken tillgänglighetshantering till att säkerställa att tjänster levererar överenskomna nivåer av tillgänglighet, och den arbetar nära övervakning och händelsehantering, incidenthantering och hantering av tjänstekontinuitet.

### Varför ett enda tal aldrig räcker

Tio avbrott på fyra minuter vardera och ett avbrott på fyrtio minuter ger samma totala driftstopp, men de känns olika för användare och kräver olika svar. Det första mönstret pekar på en skör tjänst. Det andra pekar på långsam detektion eller återställning. Därför kommer måtten här som en liten uppsättning, var och en med ett skyddsräcke, så att ett team kan diskutera tillgänglighet ärligt utan att tävla om flest nior.

### Hur ITIL:s och det agila synsättet skiljer sig

I ITIL är tillgänglighet ett hanterat attribut hos en tjänst, överenskommet med kunden och rapporterat av servicenivåhanteringen mot ett angivet mål, med tydliga servicetider och undantag såsom planerat underhåll.

I agil praxis och site reliability engineering (SRE) är tillgänglighet en SLI bland flera, jämförd med ett SLO. Googles bok *Site Reliability Engineering* säger att tidsbaserad tillgänglighet passar ett enskilt system, medan förfrågningars framgångsgrad passar distribuerade tjänster som alltid är delvis uppe. Den säger också att 100 procent nästan aldrig är rätt mål, eftersom kostnaden för varje extra nia stiger brant.

Använd ITIL:s disciplin av överenskommet omfång, tider och undantag för att definiera nämnaren. Använd SRE:s disciplin av användarcentrerade indikatorer och felbudgetar för att definiera täljaren och för att avgöra vad som ska göras med resultatet.

## Nyckelprinciper

- **Definiera "tillgänglig" från användarens sida.** En tjänst som svarar på hälsokontroller medan användare inte kan logga in är nere för de människor som spelar roll.
- **Skriv ned nämnaren.** Ange tjänstens gräns, tiderna inom omfånget, tidszonen och mätfönstret innan du beräknar något.
- **Räkna planerade och oplanerade avbrott separat.** Redovisa båda, tillsammans, och låt aldrig det ena gömma sig inom det andra.
- **Föredra förfrågningsbaserade och användarviktade mått för distribuerade tjänster.** Ett delvis fel är varken full drifttid eller fullt driftstopp.
- **Omvandla nior till minuter.** Ett mål förstås först när människor kan säga hur många minuter av fel per månad det tillåter.
- **Välj det antal nior användarna behöver.** Bortom den punkten kostar varje extra nia mer än den ger.
- **Beskriv tjänster, aldrig människor.** Tillgänglighet tillhör en tjänst och teamen som driver den, och den är aldrig en individs poäng.

## Mätetalsdefinitioner

Varje rad anger sina klockor och gränser. Kalendertid används om inte en rad säger annat. Där ett mått använder en fördelning, redovisa medianen och den 95:e percentilen och namnge fönstret.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tidsbaserad tillgänglighet | Andel tid inom omfånget då tjänsten uppfyllde den skrivna definitionen av "uppe" | (minuter inom omfånget i fönstret minus minuter av oplanerat driftstopp) / minuter inom omfånget i fönstret. Klockan startar vid den första misslyckade sonden som senare bekräftas som användarpåverkan, eller vid den bekräftade påverkansstarten som registrerats i incidentgranskningen; stoppar när tjänsten åter uppfyller definitionen. Planerat driftstopp inom överenskomna servicetider visas separat, och tid utanför överenskomna servicetider utesluts ur nämnaren | procent | Resultat från syntetisk övervakning; incidentpost med tidsstämplar för påverkansstart och återställning | Tillgänglighetshantering; servicenivåhantering | En tidsbaserad SLI för ett enskilt system (se ämne 5.2, SLI:er, SLO:er och felbudgetar) | Månadsvis |
| Förfrågningsbaserad tillgänglighet | Andel giltiga förfrågningar som lyckades | lyckade giltiga förfrågningar / totala giltiga förfrågningar i fönstret. Giltiga förfrågningar utesluter felformade förfrågningar och klientfel orsakade av anroparen; fel orsakade av tjänsten, inklusive tidsgränser, räknas som fel. Redovisas per tjänst och per användarresa | procent | Loggar och mätetal från lastbalanserare, gateway eller applikation | Tillgänglighetshantering; övervakning och händelsehantering | Framgångsgrads-SLI med ett SLO och en felbudget (se ämne 5.2, SLI:er, SLO:er och felbudgetar) | Daglig trend, månadsrapport |
| Användarviktad tillgänglighet | Tillgänglighet viktad efter de användare eller resor som påverkas, så att ett avbrott vid topp räknas för mer än ett över natten | 1 minus (misslyckade användarsessioner eller misslyckade resor / totala användarsessioner eller resor) i fönstret. En session räknas som misslyckad om ett definierat kritiskt steg misslyckades; delvis framgång redovisas som en separat andel degradering, inte inräknad | procent | Övervakning av verkliga användare; applikationens sessionsloggar; analyshändelser | Tillgänglighetshantering; servicenivåhantering | Resebaserad SLI och upplevelsemåtten i ämne 6.2 (se ämne 6.2, Överenskommelser om upplevelsenivå) | Månadsvis |
| Oplanerat driftstopp | Minuter då tjänsten var otillgänglig utan föregående godkänt besked | Summan av avbrottens varaktighet i fönstret, från bekräftad påverkansstart till bekräftad återställning, för avbrott som inte tillkännagivits och godkänts genom ändringsmöjliggörande innan de började. Överlappande avbrott på samma tjänst slås ihop, summeras inte. Redovisas som totala minuter, antal avbrott samt medianen och den 95:e percentilen av avbrottens varaktighet | minuter | Incidentpost med tidsstämplar för påverkansstart och återställning | Incidenthantering; tillgänglighetshantering | Tid till återställning läst som en fördelning (se ämne 3.3, Svarstid och lösningstid för incidenter) | Månadsvis |
| Andel planerat driftstopp | Andel av allt driftstopp som tillkännagavs och godkändes i förväg | minuter av planerat driftstopp / (minuter av planerat plus oplanerat driftstopp) i fönstret. Ett avbrott räknas som planerat bara om det godkändes genom en ändringspost innan det började och dess start- och sluttider kommunicerades till användare; ett överskridande bortom det godkända fönstret omklassificeras som oplanerat från det ögonblick fönstret tog slut | procent | Ändringspost med godkänt fönster; incidentpost; historik på statussidan | Ändringsmöjliggörande; tillgänglighetshantering | Release- och underhållspraxis som gynnar driftsättning utan driftstopp (se ämne 4.3, Mätetal för ändringsmöjliggörande) | Månadsvis |
| Avbrottsfrekvens och avstånd | Hur ofta avbrott börjar och hur länge tjänsten går mellan dem | Antal avbrott som börjar i fönstret; och för varje par av på varandra följande avbrott, minuterna av drifttid mellan det första avbrottets återställning och det andra avbrottets start, sammanfattade som medianen och den 5:e percentilen. Redovisas inte som ett enda medelvärde när färre än tio intervall finns | antal; minuter | Incidentpost; övervakningshistorik | Incidenthantering; problemhantering | Stabilitetssignal bredvid andel misslyckade ändringar (se ämne 4.4, Misslyckade ändringar och omarbete) | Månadsvis |
| Andel degradering | Tid då tjänsten fungerade men under en överenskommen kvalitet | Minuter då indikatorn för fördröjning, fel eller korrekthet bröt mot sin tröskel, exklusive minuter som redan räknats som driftstopp / minuter inom omfånget. Tröskeln anges per tjänst, till exempel i SLO:t | procent | Övervakning och SLI-mätningar | Tillgänglighetshantering; kapacitets- och prestandahantering | SLI för fördröjning (se ämne 5.4, Mätetal för kapacitet och prestanda) | Månadsvis |
| Mätningstäckning | Hur mycket av tjänstens användarvända beteende som tillgänglighetsmätningen faktiskt observerar | Kritiska användarresor med en aktiv sond eller mätning av verkliga användare / kritiska användarresor listade i tjänstedefinitionen | procent | Tjänstedefinition; övervakningskonfiguration | Övervakning och händelsehantering; tillgänglighetshantering | Observerbarhetstäckning och larmkvalitet (se ämne 5.5, Mätetal för övervakning och larmkvalitet) | Kvartalsvis |

Två anmärkningar om data. En sond som kontrollerar var femte minut kan inte upplösa ett avbrott på två minuter, så registrera sondens intervall bredvid siffran och använd fältet för påverkansstart i incidentposten (se ämne 1.5, Datakällor och instrumentering). Varje gång definitionen av "uppe" ändras, markera det i trenddiagrammet.

## Rekommendationer

### Definiera mätningen

**1. Skriv tjänstedefinitionen före procentsatsen.** Lista tjänstens gräns, de kritiska användarresorna, tiderna inom omfånget, tidszonen och fönstret (en kalendermånad är vanligt). Säg vilka beroenden som räknas: om en betalningsleverantör fallerar och användare inte kan betala, är det då ditt avbrott? Registrera svaret i mätetalsregistret (se ämne 1.4, Styrning och ägarskap av mätetal). De flesta tvister om tillgänglighet är tvister om den sidan, och att avgöra dem i förväg är mycket billigare än att avgöra dem efter ett avbrott.

**2. Definiera "uppe" som ett användarresultat, inte ett servertillstånd.** En hälsokontroll som returnerar framgång medan inloggningen är trasig mäter fel sak. Välj ett litet antal kritiska resor, till exempel "sök och visa en artikel", "logga in" eller "skicka in ett ärende", och definiera framgång för var och en i termer som användare skulle känna igen. Sondera resan från början till slut och behandla ett långsamt svar bortom en överenskommen tröskel som degraderat, inte som uppe.

**3. Använd förfrågningsbaserade mått för distribuerade tjänster och tidsbaserade mått där tjänsten verkligen är på eller av.** En global tjänst är sällan helt nere, så att räkna minuter av totalt fel ignorerar de flesta verkliga fel. Redovisa båda när du kan och säg vilket som är huvudsiffran och varför.

**4. Lägg till användarviktning där belastningen är ojämn.** Ett avbrott på tio minuter klockan 04 och ett vid början av en handelsdag har samma varaktighet och mycket olika kostnad. Vikta efter sessioner eller transaktioner under minuten för felet, eller redovisa avbrottsminuter under högtrafik som en separat siffra.

**5. Mät utifrån, utanför felområdet.** En sond inom samma nätverk eller region som tjänsten fallerar med den, eller fortsätter rapportera framgång medan vägen användare tar är trasig. Kör syntetiska sonder från minst två oberoende platser och jämför dem mot data från verkliga användare.

### Behandla planerade och oplanerade avbrott ärligt

**6. Redovisa planerat och oplanerat driftstopp sida vid sida.** Många avtal utesluter planerat underhåll, vilket är rimligt. Användare upplever det ändå som driftstopp, så visa de uteslutna minuterna och den planerade andelen bredvid huvudsiffran (se ämne 4.3, Mätetal för ändringsmöjliggörande).

**7. Gör det planerade märket svårt att förtjäna.** Definiera planerat som godkänt genom en ändringspost innan avbrottet började, med start- och sluttider kommunicerade till användare i förväg. Ett avbrott som tillkännagivits efter att det börjat är oplanerat. Ett överskridande bortom det godkända fönstret är oplanerat från det ögonblick fönstret tog slut. Dessa tre regler hindrar märket från att bli ett sätt att byta etikett på fel.

**8. Arbeta för att krympa planerat driftstopp.** Rullande driftsättningar, funktionsflaggor, låsfria schemamigreringar och blågröna releaser låter team ändra en tjänst utan att ta ner den. Följ minuter av planerat driftstopp som en trend och fråga vad som skulle krävas för att föra dem mot noll.

### Läs siffrorna väl

**9. Omvandla niorna till minuter och visa dem.** Tabellen nedan ger aritmetiken för en månad på 30 dagar (43 200 minuter) och ett år på 365 dagar (525 600 minuter). Lägg de tillåtna minuterna på instrumentpanelen bredvid målet och visa minuterna som förbrukats hittills i fönstret. Människor fattar bättre beslut om "43 minuter i månaden" än om "tre nior".

| Tillgänglighetsmål | Tillåtet driftstopp under en månad på 30 dagar | Tillåtet driftstopp under ett år på 365 dagar |
| --- | --- | --- |
| 99 procent | 432 minuter (7,2 timmar) | 5 256 minuter (87,6 timmar) |
| 99,5 procent | 216 minuter (3,6 timmar) | 2 628 minuter (43,8 timmar) |
| 99,9 procent | 43,2 minuter | 525,6 minuter (8,76 timmar) |
| 99,95 procent | 21,6 minuter | 262,8 minuter (4,38 timmar) |
| 99,99 procent | 4,32 minuter | 52,56 minuter |
| 99,999 procent | cirka 26 sekunder | cirka 5,26 minuter |

Värdena förutsätter att klockan går under hela fönstret. Om du bara mäter överenskomna servicetider krymper de tillåtna minuterna proportionellt, och du bör säga det.

**10. Respektera kostnaden för varje extra nia och gränserna för dina beroenden.** SRE-boken konstaterar att tillförlitlighetskostnader stiger brant med varje ytterligare nia, och att målet bör spegla vad användare behöver och vad verksamheten är beredd att betala för. En tjänst kan sällan vara mer tillgänglig än de beroenden den behöver i serie. Om tre nödvändiga komponenter var och en når 99,9 procent och en förfrågan behöver alla tre, är den bästa förväntade tillgängligheten för kombinationen ungefär 99,7 procent, eftersom felsannolikheterna adderas när komponenterna är oberoende. Gör multiplikationen innan du lovar en siffra.

**11. Titta på avståndet och formen, inte bara totalen.** Täta korta avbrott kräver ett annat svar än ett enda sällsynt långt avbrott. Länka långa avbrott till detektion och återställning (se ämne 3.3, Svarstid och lösningstid för incidenter) och till vyn för större incidenter (se ämne 3.4, Mätetal för större incidenter).

**12. Stäng cirkeln med felbudgeten och problemposten.** Ett tillgänglighetsmål är användbart när det ändrar vad teamet gör. När månadens budget av tillåtet driftstopp nästan är förbrukad, sakta ner riskfylld ändring och flytta insats till tillförlitlighetsarbete, så som policyn för felbudget beskriver (se ämne 5.2, SLI:er, SLO:er och felbudgetar). När samma orsak återkommer, öppna en problempost och följ den till en rättelse (se ämne 4.1, Mätetal för problemhantering).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Tidsbaserad tillgänglighet | Att sondera en trivial sida som förblir uppe medan den verkliga resan fallerar; att förlänga sondintervallet så att korta avbrott faller mellan kontrollerna; att krympa tiderna inom omfånget; att räkna avbrott som degradering | Användarviktad tillgänglighet och övervakning av verkliga användare; sondintervall angivet bredvid siffran; stickprov av incidenter mot övervakningsregistret |
| Förfrågningsbaserad tillgänglighet | Att räkna lätta förfrågningar (hälsokontroller, cachade resurser) i nämnaren för att späda ut fel; att klassificera serverfel som klientfel; att utesluta upprepningar som användare upplevde som fel | Framgångsgrad per kritisk resa, inte per förfrågan; granskning av undantagslistan; jämförelse med användarrapporterade incidenter |
| Användarviktad tillgänglighet | Att välja viktningen så att fel vid topp betyder lite; att definiera en "lyckad" session så löst att trasiga steg ändå passerar | Publicera viktningsregeln och reslistan; jämför med klagomålsvolym och supportkontakter under avbrott |
| Oplanerat driftstopp | Att omklassificera avbrott som planerade i efterhand; att fördröja den bekräftade påverkansstarten; att dela ett avbrott i två så att det ser kortare ut | Andel planerat driftstopp, med regeln att ett avbrott som tillkännagivits efter att det började är oplanerat; jämför påverkansstart med övervakningsdata |
| Andel planerat driftstopp | Att boka ändringar som godkända fönster så att överskridanden och fel räknas som planerade; att blåsa upp den planerade andelen genom att schemalägga onödigt underhåll | Överskridandeminuter omklassificerade som oplanerade; andel misslyckade ändringar och andel nödändringar (se ämne 4.4, Misslyckade ändringar och omarbete) |
| Avbrottsfrekvens och avstånd | Att slå ihop incidenter, eller öppna en ny incident först efter ett långt glapp, för att hålla antalet lågt; att undertrycka larm så att korta avbrott inte registreras | Stickprov av larm och incidenter mot råa övervakningshändelser; övervakningstäckning och larmkvalitet (se ämne 5.5, Mätetal för övervakning och larmkvalitet) |
| Andel degradering | Att sätta tröskeln så löst att långsam service aldrig bryter mot den; att deklarera degraderad tid som uppe | Percentiler av fördröjning och användarrapporterad långsamhet granskade bredvid siffran (se ämne 5.4, Mätetal för kapacitet och prestanda) |
| Mätningstäckning | Att bara lista de resor som är lätta att sondera, så att täckningen läses som 100 procent; att räkna en resa som täckt av en sond som aldrig körs | Reslista överenskommen med tjänsteägaren och användare; sondernas körhistorik stickprovad varje kvartal |

En sund avläsning visar siffror som rör sig av skäl teamet kan förklara, med både planerat och oplanerat driftstopp synliga och en användarviktad siffra nära huvudsiffran. Var misstänksam mot en perfekt månad som kommer med klagomål. En enstaka ärlig dipp visar att registreringssystemet fungerar.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Tidsbaserad tillgänglighet | Enkel, allmänt förstådd, lätt att jämföra med avtal | Behandlar delvis fel som allt eller inget; ignorerar när och vem |
| Förfrågningsbaserad tillgänglighet | Speglar delvis fel; skalar till distribuerade tjänster | Beror på en sund definition av en giltig förfrågan; kan spädas ut av lätt trafik |
| Användarviktad tillgänglighet | Nära det användare upplevde; visar kostnaden för fel vid topp | Kräver sessions- eller resedata; mer arbete att förklara |
| Att utesluta planerat driftstopp | Motsvarar många avtal; belönar förhandsbesked | Kan dölja verklig påverkan; inbjuder till ommärkning |
| Måttliga mål med felbudgetar | Balanserar tillförlitlighet och leveranshastighet | Kräver disciplin att agera när budgeten är förbrukad |

Svaret är att välja det enklaste mått som passar tjänsten, lägga till användarviktning där belastningen är ojämn och vara uttrycklig om varje undantag. Ett något mindre elegant mått som alla förstår gör mer nytta än ett sofistikerat som ingen litar på.

## Frågor att diskutera med teamet

**1. Vad betyder "tillgänglig" för vår viktigaste tjänst, och skulle en användare hålla med?**
Be var och en beskriva, i en mening, vad en användare måste kunna göra för att tjänsten ska räknas som uppe. Jämför svaren med den skrivna definitionen och med sonden som matar instrumentpanelen. Facilitatorn bör lyssna efter glapp, till exempel att inloggning, sökning eller betalning fungerar i sonden men fallerar i praktiken. Avsluta med att enas om vilka användarresor definitionen måste namnge.

**2. Vilka avbrott från förra kvartalet skulle vår beräkning ha uteslutit, och var det rättvist?**
Lista avbrotten och markera varje som planerat, oplanerat eller uteslutet. Fråga vem som gjorde varje bedömning och när. Facilitatorn bör anteckna fall där användare skulle ha varit oense om märket och använda dem för att skärpa reglerna.

**3. Hur många minuter driftstopp tillåter vårt mål, och hur många har vi förbrukat i det här fönstret?**
Omvandla målet till minuter för månaden och året på en whiteboard. Jämför med minuterna förbrukade hittills. Fråga vad teamet skulle göra annorlunda om bara 20 procent av budgeten var kvar. Det gör det abstrakta målet konkret och kopplar talet till policyn för felbudget.

**4. Var kan vår mätning missa ett fel som användare skulle känna?**
Gå igenom sondernas platser, intervall, täckta resor och beroenden. Fråga vilket fel som skulle passera varje sond och ändå bryta tjänsten för användare. Enas om en ny sond eller ett nytt mått på verkliga användare att lägga till.

**5. Planerar vi avbrott vi skulle kunna undvika?**
Titta på planerat driftstopp över sex månader och fråga vad som tvingade fram varje avbrott. Vissa är oundvikliga, till exempel ett krav från en leverantör. Andra kommer från ett tillvägagångssätt för release eller migrering som kunde ändras. Fråga vad som skulle krävas för att ta bort den största källan och vem som äger det arbetet.

**6. Om huvudsiffran ser perfekt ut, vad skulle få oss att tvivla på den?**
Namnge signalerna som skulle motsäga instrumentpanelen: klagomålsvolym, supportkontakter eller jourteamets minne. Kontrollera om några finns just nu. Enas om en jämförelse att lägga på instrumentpanelen.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam påverkar tillgängligheten varje gång de ändrar en tjänst. De kan utforma för driftsättning utan driftstopp, använda funktionsflaggor för att begränsa sprängradien och behandla felbudgeten som ett underlag för releasebeslut, och läsa tillgänglighet bredvid driftsättningsmått (se ämne 2.8, DORA-mätetal).

### Service- och driftteam

Driftteam äger sonderna, incidentposterna och scheman som producerar datan. De bör hålla definitionen och undantagslistan aktuella, registrera påverkansstarten ärligt och granska övervakningen mot verkliga incidenter. Tillgänglighet tillhör tjänsten och dess schema, aldrig en ingenjör i jour (se ämne 5.7, Mätetal för rutinarbete och jour).

### Ledning och styrning

Ledare sätter incitamenten som avgör om tillgänglighetsdata är uppriktig. En granskning som frågar "varför förlorade ni en nia?" lär team att gömma avbrott i undantagen. Fråga vad teamet lärde sig och vilken investering som skulle minska avbrott, och begär inte fler nior än användare kommer att märka (se ämne 8.4, Mätetal för leverantörer och avtal, för leverantörsåtaganden).

### Kunder och användare

Användare bedömer tillgänglighet efter om de kunde göra det de kom för. De tolererar ett tydligt annonserat underhållsfönster mycket bättre än en överraskning. Ge dem en statussida med ärliga start- och sluttider och läs deras återkoppling bredvid siffrorna (se ämne 6.2, Överenskommelser om upplevelsenivå).

## I praktiken: ett exempel från tjänstehantering

En medelstor nätbutik driver en webbutik, en kassatjänst och en orderspårningstjänst. Siffrorna i det här exemplet är illustrativa.

Kassateamet rapporterar 99,95 procent tidsbaserad tillgänglighet för månaden, vilket tillåter 21,6 minuter oplanerat driftstopp, och instrumentpanelen visar 99,96 procent. Chefen för kundsupport är orolig, eftersom supportkontakter om misslyckade betalningar ökade under samma månad. Hon ber teamet granska mätningen.

Teamet finner tre problem. Sonden kontrollerar en sida "kassan är nåbar" var femte minut, inte hela betalningsresan. Förfrågningsbaserade data visar att under två kvällar orsakade en tidsgräns hos betalningsleverantören att ungefär 4 procent av betalningsförsöken misslyckades i ungefär 50 minuter vardera, och sonden märkte det aldrig eftersom sidan i sig laddades. Och en databasmigrering som överskred sitt godkända fönster med 18 minuter hade registrerats helt som planerat underhåll.

Teamet gör fyra ändringar. Det lägger till en syntetisk sond för hela betalningsresan från två platser med ett intervall på en minut. Det lägger till förfrågningsbaserade och användarviktade siffror, med sessioner som nådde betalningssteget. Det omklassificerar överskridandeminuterna som oplanerade. Och det lägger till andelen planerat driftstopp och mätningstäckning i rapporten.

På den korrigerade grunden visar månaden en tidsbaserad tillgänglighet på 99,93 procent, en förfrågningsbaserad tillgänglighet på 99,90 procent och en användarviktad tillgänglighet på 99,84 procent, eftersom felen föll under kvällstoppen. Alla tre missar målet på 99,95 procent, vilket är obekvämt. Teamet och supportchefen är överens om att det tidigare talet var för generöst. De skriver den korrigerade definitionen i mätetalsregistret och sätter policyn för felbudget i kraft: under nästa månad väntar riskfyllda ändringar i kassan tills budgeten återhämtat sig, och teamet öppnar en problempost för betalningsleverantörens tidsgränser (se ämne 4.1, Mätetal för problemhantering).

Manipulationsrisken de fångar är ommärkning. En chef föreslog att man skulle kalla överskridandet "förlängt underhåll" för att skydda målet. Andelen planerat driftstopp, med regeln att överskridanden blir oplanerade, gjorde omklassificeringen synlig, och teamet behöll den ärliga siffran.

## Agilitet, AI, automatisering och analys

### Agilitet

Definiera tillgänglighet från användarens sida och granska definitionen med intressenter när tjänsten ändras. Varningen är att ett högt antal nior för en komponent säger lite om resan en användare tar.

### AI

AI-komponenter kan fela mjukt, genom att vara långsamma, felaktiga eller otillgängliga bara för vissa indata, vilket ren drifttid missar. Lägg till en kvalitetsjusterad vy, till exempel andelen förfrågningar med ett korrekt, snabbt svar, och para den med användarrapporterade problem. Varningen är att räkna ett degraderat AI-svar som uppe smickrar talet.

### Automatisering

Samla in förfrågningsutfall från verklig trafik och syntetiska sonder automatiskt och mät sonderna på täckning. Varningen är att en sond som kontrollerar en hälsosida kan säga uppe medan användare inte kan logga in.

### Analys

Redovisa tidsbaserad och förfrågningsbaserad tillgänglighet med andelen degradering och ange mätfönstret. Beslutet detta ger underlag för är var tillförlitlighetsarbete kommer att hjälpa användare. Varningen är att sällsynta avbrott gör årsprocentsatser instabila, så visa händelser, inte bara procentsatser.

## Branschperspektiv

**Startup.** Ett litet team har ofta en tjänst och lite övervakning. Börja med en sond på den viktigaste resan och en definition av "uppe" på ett stycke. Välj ett måttligt mål, omvandla det till minuter och undvik att lova nior som teamet ännu inte kan mäta.

**Småföretag.** Tjänsten är ofta hostade verktyg plus några egna system, och tillgängligheten beror på leverantörer. Registrera leverantörsavbrott så som de påverkar dina användare, jämför med vad leverantören rapporterar och håll uppsättningen till två eller tre siffror.

**Storföretag.** Många tjänster, många team och många leverantörer mångdubblar de definitioner som används. Publicera en standarddefinition av tillgänglighet med en kort lista över tillåtna variationer, håll mätetalsregistret aktuellt och se till att reglerna för planerat och oplanerat är desamma över team innan du jämför dem. Föredra rapportering på tjänstenivå framför resultattabeller över team, eftersom tjänster skiljer sig i belastning och kritikalitet.

**Offentlig sektor.** Offentliga tjänster har ofta lagstadgade servicetider, publicerade åtaganden och avtal med formella krediter. Redovisa mot dem så som de är skrivna, visa den användarviktade vyn bredvid och var öppen om undantag (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

De främsta kostnaderna är tiden för att skriva tjänstedefinitionen och registret, övervakning som sonderar kritiska resor utifrån, utanför felområdet, och insatsen att sammanfoga incident-, ändrings- och övervakningsdata så att planerat och oplanerat driftstopp kan skiljas åt. Övervakning av verkliga användare tillför verktygs- och lagringskostnader. De flesta organisationer äger redan en del av datan, så den första investeringen går vanligen till definitioner.

Avkastningen kommer från bättre beslut och färre tvister. Team som mäter från användarens sida hittar fel som hälsokontroller missar, avtal är lättare att hantera med en definition och kostnaden för en extra nia kan ställas mot dess värde för användare. Beskriv nyttan som ett mönster, till exempel färre överraskningar vid avtalsgranskningar, och mät dina egna baslinjer, till exempel glappet mellan huvudsiffran och den användarviktade siffran. Låna inte siffror från andra organisationer.

## Antimönster och fallgropar

- **Att citera niorna utan minuterna.** Ett mål som ingen kan översätta till tillåtet driftstopp kan inte styra beslut. Visa tillåtna och förbrukade minuter bredvid varje mål.
- **Att mäta servern i stället för resan.** En grön hälsokontroll kan sitta bredvid en trasig inloggning. Sondera kritiska resor från början till slut och jämför med data från verkliga användare.
- **Att låta det planerade märket absorbera fel.** En planerad kategori som är lätt att göra anspråk på tömmer den oplanerade siffran. Kräv godkännande före avbrottet, kommunicera det och omklassificera överskridanden.
- **Att ta medelvärde över tjänster och timmar.** En blandad siffra döljer den kritiska tjänsten och den livliga timmen. Redovisa per tjänst och lägg till en användarviktad vy.
- **Att lova fler nior än beroendena tillåter.** Komponenter i serie kan inte överstiga sin kombinerade tillgänglighet. Multiplicera innan du lovar och be leverantörer om deras uppmätta siffror.
- **Att behandla 100 procent som målet.** Kostnaden stiger brant och ändring saktar. Välj målet utifrån användarbehov och använd felbudgeten.
- **Att rangordna team eller människor efter deras nior.** Tjänster skiljer sig i belastning och kritikalitet, och en resultattabell lär team att gömma avbrott. Visa varje tjänst dess egen trend och jämför den med dess eget mål.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Definition och klockor | "Uppe" betyder det övervakningsverktyget visar; avbrottstider uppskattas i efterhand | Skrivet för vissa tjänster; sond- och incidenttider stämmer inte | En skriven definition per tjänst med resor, tider, undantag och klockregler | Definitioner granskas på en rytm; ändringar loggas och markeras i diagram | Definitioner anpassas med leverantörer och kunder och revideras när de slutar ge underlag för beslut |
| Mätkvalitet | Manuella rapporter eller en enda hälsokontroll | Sonder för vissa tjänster; förfrågningsdata i vissa loggar | Sonder utifrån och in på kritiska resor plus förfrågningsbaserade siffror från en standardkälla | Användarviktade siffror från data om verkliga användare; täckning följs och stickprovas | Mätningar delas över team och leverantörer och stäms av automatiskt |
| Hantering av planerat och oplanerat | Ingen skillnad; underhåll räknas ad hoc | Det planerade märket används av vissa team, reglerna skiljer sig | En regel: godkänt före avbrottet och kommunicerat, överskridanden omklassificeras | Planerad andel följs över tid med ett mål att minska den | Ändring utan driftstopp är standard, och planerat driftstopp är sällsynt och förhandlat |
| Användning i beslut | Redovisas efter ett klagomål | Granskas månadsvis av drift | Mål visas i minuter | Policy för felbudget ändrar arbetet, med finansiering | Tillgänglighet, kostnad och upplevelse vägs gemensamt |

## Checklista

- [ ] Varje tjänst har en skriven definition av "tillgänglig" som namnger dess kritiska användarresor.
- [ ] Mätfönstret, tiderna inom omfånget och tidszonen anges för varje siffra.
- [ ] Undantagslistan är nedskriven, granskad och visad bredvid huvudsiffran.
- [ ] Planerat driftstopp kräver en godkänd ändring och förhandsbesked; överskridanden räknas som oplanerade.
- [ ] Sonder körs utifrån, utanför felområdet, med ett angivet intervall, på kritiska resor.
- [ ] En förfrågningsbaserad eller användarviktad siffra står bredvid den tidsbaserade.
- [ ] Varje mål visas som tillåtna minuter och förbrukade minuter i det aktuella fönstret.
- [ ] Antal avbrott och percentiler av varaktighet redovisas, inte bara totalen.
- [ ] Beroendens tillgänglighet multipliceras igenom innan ett mål utlovas.
- [ ] Definitionsändringar loggas och markeras i trenddiagrammet.
- [ ] Tillgänglighet redovisas per tjänst och aldrig per person.

## AI-prompter

**Skriv utkast till en definition av tjänstetillgänglighet.**

```text
I am writing an availability definition for [service name], a [type of service]
used by [user groups]. Its critical user journeys are [list journeys]. Agreed
service hours are [hours and time zone]. Known dependencies are [list]. Our
monitoring consists of [probes, logs, real user data].

Draft a one-page definition covering: what counts as up for each journey, the
measurement window, the in-scope hours, the exclusions, the rule for planned
versus unplanned downtime, the clock start and stop for an outage, and the
metrics to report. Do not invent targets or benchmark values. List your
assumptions and the questions I should answer to finish the definition.
```

**Omvandla ett mål till tillåtet driftstopp och testa det.**

```text
Our target for [service name] is [availability percentage] over [window, for
example a 30-day month]. In-scope time is [hours]. Our essential dependencies
and their stated or measured availability are [list, or "unknown"].

Calculate the downtime this target allows in minutes for the window and for a
year, using the in-scope hours. Then estimate the best combined availability if
the dependencies are needed in series and fail independently, and explain the
formula you used. Flag where my inputs are too uncertain to conclude anything.
Do not supply availability figures for any dependency that I did not give you.
List your assumptions.
```

**Granska en månads avbrott för klassificeringsproblem.**

```text
Here are the outage records for [service name] for [month]: [paste records with
impact start, restore time, planned or unplanned label, approval time, and
notes, with personal data removed].

For each outage, check whether the planned or unplanned label follows this
rule: [paste your rule]. Identify records where the impact start looks late,
where one outage appears to be split or merged, and where an overrun should have
been reclassified. Summarize patterns by service and cause, never by person.
Tell me what you could not judge from the data. List your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta de relaterade ämnena och det parade skyddsräcket för ett tillgänglighetsmått du är på väg att redovisa.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en revision av det här ämnet håller varje mätetal parat med en manipuleringsvektor och ett skyddsräcke.

## Viktigaste slutsatser

- Tillgänglighet är meningsfull först när "uppe", tjänstens gräns, tiderna och undantagen är nedskrivna från användarens sida.
- Förfrågningsbaserade och användarviktade mått beskriver distribuerade tjänster och ojämn belastning bättre än minuter av totalt fel.
- Redovisa planerat och oplanerat driftstopp tillsammans och gör det planerade märket svårt att förtjäna.
- Omvandla varje mål till minuter och multiplicera beroenden i serie innan du lovar ett antal nior.
- Varje extra nia kostar mer än den förra, så välj målet utifrån vad användare behöver och använd felbudgeten för att agera på det.
- Beskriv tjänster och scheman, aldrig människor, och pröva varje huvudsiffra mot användarnas upplevelse.

## Referenser och vidare läsning

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Embracing Risk", https://sre.google/sre-book/embracing-risk/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Service Level Objectives", https://sre.google/sre-book/service-level-objectives/.
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, chapter "Implementing SLOs", https://sre.google/workbook/implementing-slos/.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [High availability](https://en.wikipedia.org/wiki/High_availability).
7. Wikipedia, [Downtime](https://en.wikipedia.org/wiki/Downtime).
8. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
9. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
10. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
11. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
12. Wikipedia, [Synthetic monitoring](https://en.wikipedia.org/wiki/Synthetic_monitoring).
13. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
14. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
