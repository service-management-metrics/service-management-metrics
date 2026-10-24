# Introduktion till del 3: Mätetal för servicedesk, incidenter och förfrågningar

**Mätetal för servicedesk, incidenter och förfrågningar visar hur väl support och återställning fungerar för de människor som använder dina tjänster, så att du kan förbättra upplevelsen av att få hjälp snarare än rapportens utseende.**

Det här är den del av boken där användarna möter tjänsten. En person som inte kan logga in, en kund vars beställning misslyckas och en anställd som behöver en ny bärbar dator når alla organisationen via servicedesken, ett övervakningslarm, en självbetjäningsportal eller ett chattmeddelande. Det som händer sedan avgör hur de bedömer hela tjänsten. Mätetal på det här området beskriver den upplevelsen från två sidor: hur snabbt och hur väl organisationen återställer tjänsten när något går sönder, och hur tillförlitligt den uppfyller de rutinförfrågningar människor gör.

I ITIL 4 är incidenthantering och hantering av serviceförfrågningar separata praktiker, och servicedesken är kontaktpunkten för båda. Agila team som driftar det de bygger hanterar ofta samma arbete genom jourrotationer och delade köer. Hur som helst är mätproblemen likartade. Antal beror på hur arbete kategoriseras, tider beror på var klockorna startar och stoppar och medelvärden döljer de långa fördröjningar som användare minns. De statistiska vanor som anges i del 1 gäller genomgående (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

Supportmätetal är också ovanligt lätta att manipulera. En desk kan stänga ärenden fortare genom att stänga dem i förtid, och den kan sänka hanteringstiden genom att jäkta uppringare. Ett team kan minska incidentantalen genom att omklassificera dem som förfrågningar. Varje ämne i den här delen namnger därför beteendet ett mätetal belönar, beteendet det döljer och skyddsräcket som fångar skillnaden (se ämne 1.2, Goodharts lag och mätetalens psykologi). Varje mått här beskriver ett team, en tjänst eller ett system. Inget av dem rangordnar en enskild handläggare eller lösare.

De fyra perspektiven spelar störst roll i den här delen, eftersom AI-triage, virtuella agenter och automatiserat uppfyllande nu hanterar en del av det arbete som de här måtten räknar. En kontakt som aldrig nådde en människa är bara en framgång om problemet löstes, så varje hastighets- eller volymmått här paras med ett mått på återkontakt, återöppning eller kvalitet. Automatiserad insamling levererar klockorna, och analys visar fördelningar med antalet fall bakom.

## Ämnen i den här delen

- **3.1 Mätetal för servicedesk**: kontaktvolym, lösning vid första kontakten, övergivna samtal och hanteringstid; vad var och en belönar och vad var och en döljer.
- **3.2 Incidentvolym och prioritet**: incidentantal, kategorier, påverkan och brådska, prioritetsmix, upprepade incidenter och normalisering av volym mot användning.
- **3.3 Svarstid och lösningstid för incidenter**: tid till upptäckt, kvittering, svar och lösning; medeltidsmått och deras statistiska problem; percentiler i stället.
- **3.4 Mätetal för större incidenter**: frekvens, varaktighet, kundpåverkan, kommunikationens aktualitet och uppföljning av åtgärder.
- **3.5 Mätetal för uppfyllande av serviceförfrågningar**: uppfyllandetid, backlog, förfrågningsvolym per katalogobjekt och automatiseringsandel.
- **3.6 Mätetal för kunskapshantering**: artikelanvändning, återanvändning i lösning, länkgrad, färskhet och indikatorer från Knowledge-Centered Service (KCS).
- **3.7 Mätetal för självbetjäning och automatisering**: avvisning, självbetjäningsframgång, automatiseringstäckning och "skifta vänster"-effekten på volym och komplexitet.

## Hur ämnena hänger ihop

De fyra första ämnena följer en störnings livscykel. Kontakter anländer till desken, vilket är ämne 3.1 (se ämne 3.1, Mätetal för servicedesk). De som rapporterar ett fel blir incidenter, som ämne 3.2 (se ämne 3.2, Incidentvolym och prioritet) räknar och klassificerar efter påverkan och brådska. Ämne 3.3 (se ämne 3.3, Svarstid och lösningstid för incidenter) mäter sedan hur lång tid varje steg tar. De få incidenter som orsakar allvarlig skada får en egen behandling i ämne 3.4 (se ämne 3.4, Mätetal för större incidenter), eftersom deras sällsynthet och storlek gör vanliga medelvärden vilseledande.

Flera av dessa mått behöver en partner för att förbli ärliga. Hastighet på desken, till exempel hanteringstiden i ämne 3.1, bör läsas bredvid lösning vid första kontakten och de upprepade kontakter den ger upphov till, så att snabba samtal inte förväxlas med lösta problem. Lösningstid i ämne 3.3 hör ihop med de upprepade incidenterna i ämne 3.2, eftersom en snabb återställning som fallerar igen en vecka senare inte har hjälpt användaren. Prioritetsmixen i ämne 3.2 ger sammanhang åt varje tidsmått: en ökning av mediantiden för lösning kan spegla en förändring i vilka slags incidenter som kommer in snarare än en förändring i hur väl teamet svarar.

Förfrågningar och incidenter bör mätas sida vid sida men aldrig slås ihop. Ämne 3.5 (se ämne 3.5, Mätetal för uppfyllande av serviceförfrågningar) behandlar det förutsägbara, upprepbara arbetet med uppfyllande, där syftet är en jämn och krympande insats per förfrågan. Incidentarbete är oförutsägbart, och dess syfte är snabb och varaktig återställning. Att kombinera dem i ett enda genomsnitt för kön döljer problemen hos båda. Flödesmåtten i del 2 levererar de gemensamma klockorna och gränserna för pågående arbete som hindrar de två strömmarna från att svälta ut varandra (se ämne 2.9, Driftarbete och oplanerat arbete).

De två sista ämnena verkar på volymen som de andra mäter. Kunskap i ämne 3.6 (se ämne 3.6, Mätetal för kunskapshantering) kortar lösningen genom att låta nästa person återanvända det den förra lärde sig, och den matar självbetjäningsinnehållet som mäts i ämne 3.7 (se ämne 3.7, Mätetal för självbetjäning och automatisering). Avvisning och automatisering minskar de enkla kontakter som når desken, vilket lämnar en svårare mix av arbete åt de människor som återstår. Den förskjutningen bör förväntas, och hanteringstiden kan stiga som följd, så den bör läsas som en förändring av mixen snarare än en försämring av prestation.

Återkommande incidenter blir indata till problemhantering i del 4.
