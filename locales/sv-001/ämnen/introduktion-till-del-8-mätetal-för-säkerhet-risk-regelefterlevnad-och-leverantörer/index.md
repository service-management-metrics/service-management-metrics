# Introduktion till del 8: Mätetal för säkerhet, risk, regelefterlevnad och leverantörer

**Förtroende för en tjänst vilar på hur den hanterar hot, risker, skyldigheter och tredje parterna bakom den, och det bästa beläget för det förtroendet produceras av själva arbetet och delas öppet.**

En tjänst kan vara snabb, billig och omtyckt och ändå svika de människor som är beroende av den, på grund av en opatchad svaghet, en oprövad risk, en skyldighet som ingen följde eller en leverantör som slutade leverera. Måtten i den här delen beskriver de förhållanden som skyddar mot dessa misslyckanden: hur länge svagheter förblir öppna, om kontroller fungerar, om belägg finns när någon ber om dem och om du vet vad du är beroende av och kan lämna.

Agil praxis och ITIL tar båda dessa angelägenheter på allvar, från olika håll. ITIL bidrar med informationssäkerhetshantering, riskhantering, leverantörshantering och styrning, med deras betoning på policy, ägarskap och register. Agilitet och DevOps bidrar med idén att säkerhet och kontroll hör hemma inom kontinuerlig leverans: små ändringar, snabb återkoppling, automatiska kontroller och delat ansvar mellan utveckling, säkerhet, drift och försäkran. De mest effektiva organisationerna kombinerar de två, så att kontroller byggs in i pipelinen, belägg är en biprodukt av leverans och revisorer, tillsynsmyndigheter och leverantörer är partner i ett fortlöpande samtal i stället för enstaka motståndare.

Dessa mått bär också den högsta risken för förvrängning. Mål för fynd, röda risker eller intrång lär människor att titta bort, att omklassificera eller att dölja. Mått som rör mänskligt beteende, till exempel rapporter om misstänkt aktivitet, kan glida över i övervakning eller skuldbeläggning. Varje mätetal i den här delen kommer därför med sättet det manipuleras på och ett skyddsräcke, och delen behandlar säker rapportering och skuldfritt lärande som kontroller i egen rätt. Inget av måtten rangordnar individer. De beskriver system, tjänster och relationer (se ämne 1.2, Goodharts lag och mätetalens psykologi).

De fyra perspektiven spelar roll här eftersom AI-system tillför nya risker och nya skyldigheter. Säkerhets- och efterlevnadsbelägg produceras alltmer av pipelines, så automatisering måste prövas, inte litas på. Leverantörer kan bädda in AI, så fråga vad som är påslaget. Analys redovisar exponering och kontrolleffektivitet med stickprovsstorlekar. Den här boken ger inga juridiska råd, så kontrollera skyldigheter med din egen juridiska rådgivare.

## Ämnen i den här delen

- **8.1 Mätetal för säkerhetsincidenter och sårbarheter**: exponeringsfönster, patchefterlevnad, skanningstäckning, tid till inneslutning, undantag och rapporteringskulturen som håller signalerna flödande.
- **8.2 Mätetal för risker och kontroller**: ett kort, ägt riskregister, kontrolltestning, nyckelriskindikatorer och riskbaserat ändringsgodkännande.
- **8.3 Mätetal för regelefterlevnad och revision**: täckning av skyldigheter, automatisering av belägg, stängning av fynd och upprepningar och samarbete med revisorer.
- **8.4 Mätetal för leverantörer och avtal**: leverantörsprestation mot upplevelse, koncentration, due diligence, gemensamma granskningar och testade utträdesplaner.
- **8.5 Reglerad och statlig rapportering**: rapporteringsskyldigheter som designunderlag, spårbara rapporter, avstämda definitioner och användbar offentlig information.

## Hur ämnena hänger ihop

Säkerhetsmått (se ämne 8.1, Mätetal för säkerhetsincidenter och sårbarheter) beskriver hot och svagheter i konkreta termer, och de ger några av de starkaste nyckelriskindikatorerna för riskregistret. Risk- och kontrollmått (se ämne 8.2, Mätetal för risker och kontroller) sätter dessa indikatorer i sitt sammanhang, avgör vilka kontroller som spelar roll och prövar att de fungerar. Mått på regelefterlevnad och revision (se ämne 8.3, Mätetal för regelefterlevnad och revision) förvandlar samma kontroller och prov till belägg för utomstående, och de visar hur mycket av de beläggen arbetet producerar av sig självt.

Leverantörsmått (se ämne 8.4, Mätetal för leverantörer och avtal) utvidgar var och en av dessa över organisationens gräns. En leverantörs sårbarheter, risker och efterlevnadsläge blir dina, och avtalet är en av kontrollerna. Rapporteringsämnet (se ämne 8.5, Reglerad och statlig rapportering) avslutar delen med att fråga vad som måste sägas till vem, och hur man säger det korrekt utan att låta rapporteringsvyn förvränga det arbete den beskriver.

Flera skyddsräckespar följer. Ett exponeringsfönster bör läsas med skanningstäckning, så att en ren siffra inte bara är en snäv skanning. En kontrolleffektivitetsgrad bör läsas med uppföljningen av fel, eftersom en perfekt grad kan komma av svag testning. Ett antal revisionsfynd bör läsas med upprepningsgraden och verifieringen av stängning. En leverantörs servicenivå bör läsas med användarupplevelsen (se ämne 6.2, Överenskommelser om upplevelsenivå). En lagstadgad siffra bör läsas med sina följeslagarmått och en avstämning mot den interna definitionen.

Delen lutar sig mot tidigare. Tillgångs-, konfigurations- och kostnadsregister (se ämne 7.1, Mätetal för it-tillgångshantering, och ämne 7.4, Mätetal för konfigurations- och CMDB-kvalitet) är det som gör skanning, beroendekartläggning och leverantörsanalys möjliga. Efteranalys- och ändringsmåtten i del 4 ger lärandeloopparna som håller det här arbetet ärligt. Del 9 vänder sig till människorna bakom allt: deras hälsa, deras samarbete och förbättringsvanorna som gör hela systemet bättre över tid.
