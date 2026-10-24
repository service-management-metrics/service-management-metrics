# Introduktion till del 10: Mätetal för AI, automatisering och analys

**AI gör utdata billig och flytande, vilket bryter den gamla länken mellan det som produceras och det som är värt att ha, så mät vad som består, vad som hjälper och vad som förblir under kontroll.**

Varje mätetal i den här boken vilar på ett antagande att det kräver verklig ansträngning att producera det som räknas. Ett löst ärende speglade arbete. En skriven artikel speglade kunskap. En sammanfogad ändring speglade omsorg. Generativ AI försvagar det antagandet. Den kan skriva ett utkast till ett svar, en artikel, ett test eller ett kodblock på sekunder, och det den skriver är ofta rimligt och ibland fel. Talen stiger. Om de människor som tjänas har det bättre är en separat fråga som talen inte kan besvara.

AI tillför också nya saker att mäta. Samtalsassistenter och agenter som agerar å en användares vägnar behöver mått för lösning, överlämning och skadan av felaktiga handlingar. Styrningen av modeller, prompter och leverantörer behöver mått för täckning, kontroll och incidenthantering. Och människor som arbetar bredvid dessa verktyg behöver sina färdigheter, sin förståelse och sin hållbara takt skyddade. Måtten i den här delen bygger på resten av boken, eftersom skyddsräckena är desamma: para varje mätetal med en kontroll av vad det kan dölja, jämför med en baslinje, stickprova tillsammans med människor och håll data om människor utanför utvärdering (se ämne 1.2, Goodharts lag och mätetalens psykologi).

Agila och ITIL-baserade arbetssätt erbjuder en förnuftig hållning till allt detta. Behandla varje användning av AI som ett litet experiment. Ange den förväntade nyttan, pröva med villiga människor, jämför med liknande arbete utan den och besluta utifrån belägg. Håll intressenter kontinuerligt involverade, eftersom de är först att märka när signalen försämras. Sikta på en hållbar takt, så att sparad tid är ett val om kvalitet och lärande och inte en automatisk ökning av efterfrågan. Och minns målet att bygga kring motiverade individer: AI bör avlasta tråkigt arbete och respektera människors omdöme, och den bör inte bli ett sätt att övervaka dem.

Fakta om AI-verktyg, produkter och regler förändras snabbt. Uttalanden i den här delen om specifika regelverk, standarder och verktyg är daterade till oktober 2026, och läsaren bör kontrollera dem på nytt. Mätprinciperna är mer varaktiga än den teknik de beskriver.

Den här delen täcker också de andra två av de fyra perspektiven, automatisering och analys. Automatisering och orkestrering ändrar vem som gör arbetet och gör fel snabba och vidsträckta, så de mäts på vad de tar bort och vad de bryter. Pipelines producerar mycket av beläggen för ändring och regelefterlevnad, så de mäts som system. Analys, prognoser och observerbarhet producerar de tal som används överallt annars i boken, så deras datakvalitet, osäkerhet och kostnad behöver egna mått.

## Ämnen i den här delen

- **10.1 AI i mätning av tjänstehantering**: var AI kommer in i arbetet, baslinjer före införande, jämförelser, tid till ett kontrollerat resultat och full kostnad.
- **10.2 Att mäta AI-stött arbete**: kvarstående resultat, omarbete, granskningsbelastning, undkomna fel, förståelse och färdigheter.
- **10.3 Mätetal för AI-agenter och chattbottar**: verifierad lösning, återkommande kontakter, överlämningar, tid till en person, svarens riktighet och återkallande av agenthandlingar.
- **10.4 Mätetalsinflation och kvalitetsurvattning**: hur volym och hastighet blåses upp, stickprov av användbarhet, verifieringsbörda och att bryta återkopplingsloopar.
- **10.5 Mätetal för AI-styrning och AI-risk**: registret över användningar, riskklasser, ändringskontroll för modeller och prompter, utvärdering, tillsyn och incidenter.
- **10.6 Mätetal för automatisering och orkestrering**: vad automatisering tar bort och bryter, täckning som betyder något, fel och återställning samt design med människa i loopen.
- **10.7 Mätetal för pipelines och automatiserade ändringar**: pipelinens hälsa, automatiska godkännanden, policy som kod och det belägg en pipeline producerar.
- **10.8 Mätetal för analys och datakvalitet**: fullständighet, aktualitet, härkomst, avstämning och vad ett tal kan och inte kan visa.
- **10.9 Mätetal för prognoser och prediktiv analys**: prognosfel, kalibrering, intervall och de beslut prognoser ger underlag för.
- **10.10 Mätetal för observerbarhet och telemetri**: täckning av loggar, mätvärden och spår, signalkvalitet och telemetrins kostnad.

## Hur ämnena hänger ihop

Grundämnet (se ämne 10.1, AI i mätning av tjänstehantering) anger metoden: baslinje, jämförelse, stickprov och full kostnad. Den gäller för varje annat ämne i delen. Ämnet om stött arbete (se ämne 10.2, Att mäta AI-stött arbete) använder den metoden på arbetet människor gör med AI bredvid sig och tittar på vad som består och vad som händer med förståelsen. Ämnet om chattbottar och agenter (se ämne 10.3, Mätetal för AI-agenter och chattbottar) tillämpar den på system som möter användare direkt eller agerar å deras vägnar, där kostnaden för ett felaktigt svar eller en felaktig handling faller på någon annan.

Inflation och urvattning (se ämne 10.4, Mätetalsinflation och kvalitetsurvattning) är den varnande följeslagaren till alla dessa. Det förklarar varför de lätta talen stiger och vad som ska paras med dem, och det knyter an till användbarhetskontrollerna i de andra ämnena. Styrning (se ämne 10.5, Mätetal för AI-styrning och AI-risk) är strukturen som håller resten på plats: den ger registret som säger vad som ska mätas, riskklasserna som säger hur djupt, ändringskontrollen som hindrar beteende från att glida oupptäckt och incidentprocessen för när något går fel.

Flera skyddsräckespar följer. Ett hastighetsmått bör läsas med tiden till ett kontrollerat resultat och verifieringsbördan. Ett mått på inneslutning eller avledning bör läsas med verifierad lösning och återkommande kontakter. Ett antal registrerade användningar bör läsas mot oberoende upptäckt. Ett införandetal för ett AI-verktyg bör behandlas som beskrivande, och resultat mot jämförelse bär tyngden.

Delen länkar till tidigare: gransknings- och flödesmåtten i del 2, kunskaps- och självbetjäningsmåtten i del 3, säkerhets- och riskmåtten i del 8 och människomåtten i del 9. Ämnena 10.6 till 10.10 utvidgar metoden till automatisering, pipelines, analys, prognoser och observerbarhet: samma baslinje, samma parning av hastighet med kvalitet och samma vana att kontrollera vad talet inte kan visa. Mått för automatisering och pipelines (se ämne 10.6, Mätetal för automatisering och orkestrering, och ämne 10.7, Mätetal för pipelines och automatiserade ändringar) vilar på datakvalitetsmåtten i ämne 10.8 (se ämne 10.8, Mätetal för analys och datakvalitet), och prognoser (se ämne 10.9, Mätetal för prognoser och prediktiv analys) och telemetri (se ämne 10.10, Mätetal för observerbarhet och telemetri) matar båda. Delen leder in i den sista innehållsdelen, som handlar om att bygga själva mätetalsprogrammet, eftersom ett program som inför mätning utan omsorg kommer att drabbas av samma förvrängningar som den här delen beskriver.
