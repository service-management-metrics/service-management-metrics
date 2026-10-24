# Introduktion till del 2: Mätetal för flöde och kontinuerlig leverans

**Flödesmätetal visar hur arbete faktiskt rör sig genom ett team som bygger och driftar tjänster, så att du kan hitta var det väntar, besluta vad som ska ändras och kontrollera att ändringen hjälpte.**

Agila team som också driftar tjänster hanterar en blandad ström av arbete: planerade funktioner, felrättningar, serviceförfrågningar och avbrott från pågående incidenter. Allt konkurrerar om samma människor och samma uppmärksamhet. Flödesmätetal beskriver strömmen ur arbetsobjektets synvinkel. De frågar hur många objekt som pågår, hur lång tid de tar, hur gamla de är och hur många som blir klara under en period.

Den här synen är användbar eftersom det mesta av fördröjningen är väntan snarare än arbete. En förfrågan kan stå i en kö, i en granskning eller i ett godkännande långt längre än någon lägger tid på den. Att mäta klockan på objektet, i stället för personens insats, blottlägger de glappen och ger teamet en gemensam, saklig utgångspunkt för förbättring. Det passar också båda världarna. Agil praxis talar om cykeltid och genomflöde, och ITIL-praxis talar om värdeströmmar och tjänsteprestation. Båda beskriver samma förflyttning av arbete.

Flödesdata är sneda och lätta att missbruka. Tidsmått bör läsas som fördelningar med percentiler, så som det redovisas i del 1 (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal). Varje mätetal i den här delen beskriver ett team, en tjänst eller ett system. Inget av dem rangordnar en individ, och inget är ett mål som ska drivas upp eller ner isolerat (se ämne 1.2, Goodharts lag och mätetalens psykologi).

Bokens fyra perspektiv visar sig här på ett särskilt sätt. Kontinuerlig leverans och intressentmedverkan sätter rytmen för arbetet som mäts. AI-stöd kan höja antalet objekt som ser färdiga ut utan att korta tiden de väntar, så flödesmått paras med omarbetnings- och kvalitetssignaler. Automatisering levererar händelsernas tidsstämplar och bör själv mätas för fel. Analys förvandlar klockorna till intervall och trender, med antalet objekt bakom varje visat.

## Ämnen i den här delen

- **2.1 Flödesmått**: pågående arbete, genomflöde, ålder på arbetsobjekt och cykeltid, tillämpade på projekt- och tjänstearbete.
- **2.2 Ledtid, cykeltid och flödeseffektivitet**: definitioner som håller över team, var klockorna startar och stoppar och hur väntetid blottläggs.
- **2.3 Pågående arbete och köteori**: Littles lag, utnyttjandegrad och kötillväxt, begränsning av pågående arbete (WIP) och varför ett fullt upptaget serviceteam är ett långsamt team.
- **2.4 Mätetal för värdeström**: mått från värdeströmskartläggning, processtid, väntetid, procent komplett och korrekt samt ITIL:s värdeströmmar.
- **2.5 Mätetal för leveransprognoser och planering**: berättelsepoäng och velocity, måluppfyllelse i leverans, prognosnoggrannhet och varför velocity aldrig får jämföras mellan team.
- **2.6 Mätetal för backlog och förfining**: backlogens storlek och ålder, färdigt arbete, förfiningstäckning och hur produkt- och servicebacklogar skiljer sig.
- **2.7 Mätetal för pull requests och kodgranskning**: granskningstid, pull requests storlek och omarbete som flödessignaler, med de manipuleringsvektorer som följer.
- **2.8 DORA-mätetal**: ledtid för ändring, driftsättningsfrekvens, återställningstid efter misslyckad driftsättning, andel misslyckade ändringar och omarbetsgrad vid driftsättning, med forskningens egna förbehåll.
- **2.9 Driftarbete och oplanerat arbete**: planerat jämfört med oplanerat arbete, avbrottsbelastning, expressfiler och kapacitetsfördelning mellan förändrings- och driftarbete.

## Hur ämnena hänger ihop

De fyra första ämnena utgör delens kärna. Ämne 2.1 (se ämne 2.1, Flödesmått) definierar de grundläggande storheterna: pågående arbete, genomflöde, ålder på arbetsobjekt och cykeltid. Ämne 2.2 (se ämne 2.2, Ledtid, cykeltid och flödeseffektivitet) fastställer var klockorna startar och stoppar, vilket varje jämförelse beror på. Ämne 2.3 (se ämne 2.3, Pågående arbete och köteori) förklarar varför dessa storheter rör sig tillsammans, och ämne 2.4 (se ämne 2.4, Mätetal för värdeström) vidgar blicken från ett teams tavla till hela vägen från förfrågan till värde.

Flera ämnen fungerar som skyddsräcken för andra. Genomflödes- och hastighetsmått kan blåsas upp genom att dela upp arbete i mindre bitar eller genom att jäkta det, så de bör läsas tillsammans med omarbetnings- och kvalitetssignaler. Pull requests storlek och granskningstid i ämne 2.7 (se ämne 2.7, Mätetal för pull requests och kodgranskning) är tidiga indikatorer på fördröjning och omarbete. Leveransresultaten i ämne 2.8 (se ämne 2.8, DORA-mätetal) parar hastighetsmått med stabilitetsmått, så att snabbare leverans inte köps med fler fel. Velocity i ämne 2.5 (se ämne 2.5, Mätetal för leveransprognoser och planering) är ett planeringshjälpmedel för ett team, och det bör kontrolleras mot prognosnoggrannhet och flödesmåtten snarare än läsas som leverans.

De återstående ämnena beskriver de förhållanden under vilka arbete flödar. En backlog som är lång, gammal eller dåligt förfinad göder dåligt flöde, vilket är ämne 2.6 (se ämne 2.6, Mätetal för backlog och förfining). Oplanerat arbete och avbrott, som behandlas i ämne 2.9 (se ämne 2.9, Driftarbete och oplanerat arbete), är ofta den dolda orsaken till att cykeltider sträcks ut och prognoser missar. Att läsa dem bredvid pågående arbete och köteori i ämne 2.3 förklarar varför ett team utan ledig kapacitet inte kan absorbera en incident utan att fördröja allt annat.

Senare delar bygger på dessa mått. Mätetal för incidenter, ändringar och releaser i del 3 och 4 använder samma klockor och samma fördelningstänkande, tillämpade på support- och förändringsarbete. Tillsammans gör flödesperspektivet att agila team och ITIL-team kan tala om ett gemensamt arbetssystem.
