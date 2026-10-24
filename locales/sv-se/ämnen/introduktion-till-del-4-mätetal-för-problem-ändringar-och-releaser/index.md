# Introduktion till del 4: Mätetal för problem, ändringar och releaser

**Mätetal för problem, ändringar och releaser visar om det sätt på vilket ett team ändrar sina tjänster och lär sig av misslyckanden gör dem både snabbare att förbättra och stadigare att driva.**

Varje ändring av en levande tjänst är ett vad. Den kan leverera värde tidigare, eller så kan den förstöra något användare förlitar sig på. Del 3 mätte hur väl support och återställning fungerar när saker går fel (se ämne 3.0, Introduktion till del 3: Mätetal för servicedesk, incidenter och förfrågningar). Den här delen tittar på myntets andra sida: hur förändring kommer in i miljön, hur ofta den orsakar besvär och hur väl organisationen lär sig så att samma besvär inte återvänder.

Kontinuerlig leverans och ITIL närmar sig det här området från olika håll. Agil praxis favoriserar kontinuerlig programvaruleverans i små ändringar och behandlar snabb återkoppling som en säkerhetsåtgärd. ITIL-praktiker som problemhantering, ändringsmöjliggörande och releasehantering finns för att skydda stabilitet och för att hitta och ta bort orsakerna till incidenter. Mätetalen i den här delen låter båda synsätten prövas mot samma belägg. Om frekvent förändring är säker kommer fel- och omarbetsmåtten att visa det. Om en kontroll bromsar leverans utan att minska risk kommer godkännande- och ledtidsmåtten att visa det i stället.

Två förbehåll löper genom hela delen. Hastighet och stabilitet måste läsas tillsammans, eftersom ett tal som förbättrar det ena medan det i tysthet skadar det andra är en dålig affär. Tidsmått bör också läsas som fördelningar med percentiler, så som det anges i del 1 (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal). Varje mätetal här beskriver ett team, en tjänst eller ett system. Inget av dem rangordnar en individ, och inget är ett mål att driva isolerat (se ämne 1.2, Goodharts lag och mätetalens psykologi).

De fyra perspektiven formar den här delen. Kontinuerlig leverans gör små, täta ändringar till norm, så ändrings- och releasemått beskriver flöde och säkerhet tillsammans. AI-stödda ändringar och AI-genererade riskpoäng behöver egen kvalitetsparning. Pipelines automatiserar belägg och godkännanden, så automatiseringen måste mätas på sina fel. Analys länkar ändringar, incidenter och problem och säger hur många fall som ligger bakom varje frekvens.

## Ämnen i den här delen

- **4.1 Mätetal för problemhantering**: öppnade och stängda problem, återanvändning av kända fel, återkomst och tid till permanent rättelse.
- **4.2 Mätetal för efteranalyser och lärande**: genomförda granskningar, stängning av åtgärdspunkter, återkomst av orsaker och skuldfria lärandesignaler.
- **4.3 Mätetal för ändringsmöjliggörande**: ändringsvolym per typ, ledtid för godkännande, andel standardändringar och automatisering av godkännande.
- **4.4 Misslyckade ändringar och omarbete**: andel misslyckade ändringar, andel nödändringar, återställnings- och snabbrättelsegrader och konsekventa definitioner av misslyckande.
- **4.5 Mätetal för releaser och driftsättning**: driftsättningsfrekvens, releasefrekvens, användning av funktionsflaggor, releaseledtid och att skilja driftsättning från release.
- **4.6 Teknisk skuld och kända fel**: backlog av kända fel, skuldbestånd och ränta samt att prioritera rättelser mot funktionsarbete.

## Hur ämnena hänger ihop

Delen delas i två halvor som beror på varandra. Ämnena 4.1 och 4.2 handlar om lärande: hur incidenter spåras till orsaker och hur granskningar blir rättelser som slutförs. Ämnena 4.3, 4.4 och 4.5 handlar om ändring: hur den godkänns, hur ofta den misslyckas och hur den når användare. Ämne 4.6 förenar halvorna, eftersom skulden och de kända felen som lärandet avslöjar är samma objekt som konkurrerar med nya funktioner om teamets tid.

Den viktigaste parningen är mellan hastighet och fel. Driftsättnings- och releasefrekvens i ämne 4.5 (se ämne 4.5, Mätetal för releaser och driftsättning) beskriver hur ofta förändring når produktion, och DORA-forskningsprogrammet parar sådana genomflödesmått med stabilitetsmått (se ämne 2.8, DORA-mätetal). Ämne 4.4 (se ämne 4.4, Misslyckade ändringar och omarbete) levererar den stabilitetssidan. Ett team som driftsätter oftare medan dess fel- och omarbetsgrader förblir platta eller faller förbättras. Ett team vars frekvens stiger medan återställningar och snabbrättelser stiger med den flyttar kostnaden någon annanstans.

Ändringsmöjliggörande ligger mellan de två. Ämne 4.3 (se ämne 4.3, Mätetal för ändringsmöjliggörande) mäter kontrollsidan: hur lång tid godkännande tar, hur stor del av ändringen som är förhandsgodkänd som standard och hur stor del av godkännandet som är automatiserat. Ledtid för godkännande är kostnaden för en kontroll, och andelen misslyckade ändringar från ämne 4.4 är beviset på om den kontrollen fungerar. Lästa tillsammans visar de om ett tungt godkännandesteg köper säkerhet eller bara lägger till fördröjning, och om lättare, automatiserat godkännande har hållit felen stadiga.

Lärandeämnena vaktar de andra. Problemhantering i ämne 4.1 (se ämne 4.1, Mätetal för problemhantering) mäter återkomst och tid till permanent rättelse, vilket är det långsiktiga provet på om incidenthanteringen från del 3 tar bort orsaker eller bara återställer tjänsten. Ämne 4.2 (se ämne 4.2, Mätetal för efteranalyser och lärande) kontrollerar att granskningar faktiskt sker och att deras åtgärder stängs, eftersom en genomförd granskning utan uppföljning inte ändrar något. Att räkna granskningar eller stängda problem är lätt att manipulera, så de antalen bör läsas bredvid återkomsten av samma orsaker, som är svårare att förfalska.

Slutligen förklarar ämne 4.6 (se ämne 4.6, Teknisk skuld och kända fel) varför de andra måtten glider. Obemötta kända fel och ackumulerad skuld höjer risken för fel och kostnaden för varje senare ändring. Att läsa backlogen av kända fel bredvid andelen misslyckade ändringar visar när uppskjutna rättelser har börjat bromsa leveransen.

Senare delar bygger på dessa mått. Servicenivåmål och felbudgetar i del 5 ger en tillförlitlighetsgräns mot vilken förändringstakten kan bedömas, och del 11 visar hur man inför dessa mått utan att skapa rädsla.
