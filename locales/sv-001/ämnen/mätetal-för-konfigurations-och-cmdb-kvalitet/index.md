# Mätetal för konfigurations- och CMDB-kvalitet

**En konfigurationsdatabas förtjänar sin plats först när människor litar nog på den för att använda den i en ändring eller en incident, så mät dess kvalitet efter hur väl den besvarar verkliga frågor och låt teamen som äger tjänster hålla sina egna register aktuella.**

## Översikt och motiv

När en databasserver fallerar klockan tre på natten frågar någon vilka tjänster som beror på den. När ett team planerar en ändring frågar någon vad mer som kan gå sönder. Svaren bör komma från ett register över sakerna som utgör dina tjänster och hur de hänger ihop. Det registret är föremålet för konfigurationshantering, och databasen bakom det är konfigurationshanteringsdatabasen, vanligen förkortad CMDB.

En [konfigurationspost](https://en.wikipedia.org/wiki/Configuration_item) (CI) är varje komponent som behöver hanteras för att leverera en it-tjänst: en server, en applikation, en databas, en nätverksenhet, ett molnkonto, ett avtal. En [konfigurationshanteringsdatabas](https://en.wikipedia.org/wiki/Configuration_management_database) lagrar information om CI:er, deras attribut och relationerna mellan dem. Där tillgångshantering frågar vad du har, vem som äger det och vad det kostar (se ämne 7.1, Mätetal för it-tillgångshantering), frågar konfigurationshantering hur delarna passar ihop och vad som beror på vad.

CMDB:er har ett blandat rykte, och ryktet är förtjänat. Många byggdes som heltäckande kartor, fyllda med data som förföll fortare än någon kunde rätta den, och övergavs sedan. Den agila traditionen och DevOps-traditionen erbjuder en bättre utgångspunkt. Team som beskriver sin infrastruktur som kod har en auktoritativ, versionshanterad definition av det de driver, och de kan publicera den till det delade registret automatiskt. [Infrastruktur som kod](https://en.wikipedia.org/wiki/Infrastructure_as_code) förvandlar registret till en biprodukt av leverans. ITIL 4 beskriver praktiken som tjänstekonfigurationshantering och betonar den information som behövs för att stödja beslut, inte fullständighet för sin egen skull.

Kvalitet i ett konfigurationsregister har flera delar, och de svarar mot den bredare idén om [dataintegritet](https://en.wikipedia.org/wiki/Data_integrity):

- **Fullständighet:** de CI:er och attribut som spelar roll finns med.
- **Noggrannhet:** det registret säger stämmer med verkligheten.
- **Aktualitet:** ändringar syns i registret tillräckligt snart för att vara användbara.
- **Samstämmighet:** samma sak registreras inte två gånger under olika namn. Att matcha poster som syftar på samma sak är problemet [entitetsmatchning](https://en.wikipedia.org/wiki/Entity_resolution).
- **Relationskvalitet:** beroenden mellan CI:er finns och är rätt. Det är här det mesta värdet, och det mesta förfallet, bor.

Det djupaste provet för en CMDB är användning. Ett register som människor rådfrågar under incidenter och ändringar, och rättar när det är fel, är friskt. Ett register som bara revideras är det inte. Måtten nedan parar därför kvalitetsmått med användningsmått.

Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller med en vändning: fullständighet är lätt att blåsa upp med standardvärden, och noggrannhet är lätt att göra anspråk på utan att kontrollera. Insistera på oberoende belägg och på mått på användning (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Nyckelprinciper

- **Börja med frågorna.** Avgör vad du behöver att registret besvarar och bygg bara det.
- **Föredra ett mindre, betrott register framför ett större, tvivelaktigt.** Omfånget växer när förtroende är förtjänat.
- **Låt sanningskällan mata registret.** Pipelines, moln-API:er och upptäckt bör skriva till det, inte människor med kalkylblad.
- **Låt tjänsteteam äga sina tjänsters register.** De känner sina beroenden och de känner kostnaden av fel.
- **Mät efter användning såväl som kvalitet.** Ett bra register rådfrågas.
- **Kontrollera mot verkligheten.** Pröva registret genom att fråga om det förutsäger vad som händer.
- **Rätta vid källan.** Ett felaktigt register är ett symptom. Hitta processen som lät det driva.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CI-fullständighet | Andel CI:er inom omfånget med alla obligatoriska attribut ifyllda med giltiga värden | CI:er inom omfånget där varje obligatoriskt attribut är giltigt / CI:er inom omfånget | procent | CMDB, attributregler | Tjänstekonfigurationshantering; it-tillgångshantering | Definitionen av klart inkluderar tjänstebeskrivning | Månadsvis |
| CI-noggrannhet | Andel stickprovade CI:er vars post stämmer med belägg på de obligatoriska attributen | stickprovade CI:er som stämmer på alla obligatoriska attribut / stickprovade CI:er | procent | Revisionsstickprov jämfört med det levande systemet | Tjänstekonfigurationshantering | Tillståndet i infrastruktur som kod stämmer med verkligheten | Kvartalsvis |
| Beroendetäckning | Andel kritiska tjänster vars uppströms- och nedströmsberoenden är kartlagda och granskade | kritiska tjänster med en beroendekarta granskad de senaste 90 dagarna / kritiska tjänster | procent | CMDB-relationer och granskningsposter | Tjänstekonfigurationshantering; tillgänglighetshantering | Granskning av arkitektur och tjänsteägarskap | Kvartalsvis |
| Träffgrad för konsekvensprognos | Andel incidenter och ändringar där de faktiskt påverkade tjänsterna fanns med i CMDB:ns förutsagda konsekvens | incidenter eller ändringar där alla påverkade tjänster förutsagts / granskade incidenter eller ändringar | procent | Granskningar efter incident och ändringsposter jämförda med CMDB-frågor | Incidenthantering; ändringsmöjliggörande | Fynd i skuldfri granskning om saknade beroenden | Kvartalsvis |
| Andel dubbla CI:er | Andel CI:er som duplicerar en annan CI | CI:er flaggade som dubbletter av matchningsregler och bekräftade i granskning / CI:er inom omfånget | procent | CMDB:ns matchningsrapport och granskningsstickprov | Tjänstekonfigurationshantering | En enda sanningskälla | Månadsvis |
| Uppdateringsfördröjning | Fördröjning mellan en ändring av en CI i verkligheten och dess uppdatering i CMDB:n | median och 85:e percentil av timmar eller dagar från ändringshändelse till CMDB-uppdatering | timmar eller dagar | Ändringshändelser och pipelinehändelser jämförda med CMDB:ns tidsstämplar | Tjänstekonfigurationshantering; ändringsmöjliggörande | Automatisk registrering i pipelinen | Månadsvis |
| CMDB-användningsgrad | Andel incidenter och ändringar som hänvisar till CI:er, och av dessa, andelen där användare rapporterar att registret hjälpte | poster som hänvisar till en giltig CI / incidenter och ändringar under perioden; plus andelen granskade poster där CI-datan hjälpte | procent | ITSM-verktyg, kort återkopplingsfråga | Incidenthantering; ändringsmöjliggörande | Team som använder det delade registret i sitt arbete | Månadsvis |

Definiera omfånget för "CI inom omfånget" per klass och kritikalitet och registrera det. En CI är korrekt först på de attribut du namnger som obligatoriska. Uppdateringsfördröjning startar vid den verkliga händelsen, till exempel en driftsättning eller ett inköp, och stoppar när CMDB:n speglar den. Träffgrad för konsekvensprognos kräver ett granskningssteg som registrerar vilka tjänster som faktiskt påverkades, och den är bara så pålitlig som den granskningen.

## Rekommendationer

### Avgör vad registret är till för

**1. Skriv ned frågorna CMDB:n måste besvara.** Typiska är: vad beror på den här komponenten, vem äger den här tjänsten, vad ändrades nyligen, vad skulle ett fel här påverka och vad är utan support. För varje fråga, namnge CI-klasserna, attributen och relationerna som behövs. Allt som inte behövs för att besvara en fråga är en kandidat att utelämna.

**2. Börja med de tjänster som betyder mest.** Välj en handfull kritiska tjänster, kartlägg dem från början till slut och få det rätt innan du lägger till fler. En pålitlig karta över tio tjänster hjälper mer än en tvivelaktig karta över tusen. Utvidga när förtroende och användning växer.

**3. Definiera klasser, attribut och relationstyper enkelt.** En kort lista över CI-klasser (tjänst, applikation, databas, värd, nätverk, molnresurs) och relationstyper (beror på, körs på, ansluter till, ägs av) täcker de flesta behov. En modell som försöker fånga allt är svår att fylla och svårare att fråga. Håll en skriven modell och ändra den medvetet.

### Mata registret från källan

**4. Publicera från pipelines och kod.** Där infrastruktur och applikationer definieras som kod, låt leveranspipelinen skapa, uppdatera och avveckla CI:er vid varje ändring, inklusive ägarskaps- och beroendeinformation deklarerad bredvid koden. Behandla deklarationen som en del av definitionen av klart för en tjänst. Det gör uppdateringsfördröjningen nära noll och håller registret i linje med det som körs.

**5. Använd upptäckt som en andra åsikt.** Nätverks- och molnbaserad [tjänsteupptäckt](https://en.wikipedia.org/wiki/Service_discovery) hittar vad som faktiskt körs och hur det ansluter. Jämför det med det deklarerade registret. Skillnader är fynd: antingen saknar deklarationen något eller så körs något som inte borde. Enbart upptäckt ger brusig data utan ägarskap, så använd den för att kontrollera, inte för att skapa.

**6. Använd stabila identifierare och matchningsregler.** Dubbletter uppstår när olika källor namnger samma sak olika. Kom överens om en unik identifierare för varje CI-klass, registrera källidentifierare och kör matchningsregler för att hitta och slå ihop dubbletter. Granska matchningar för hand i ett stickprov, eftersom automatisk sammanslagning kan kombinera olika saker.

**7. Ge varje tjänsteteam ägarskap av sin del.** Teamet som bygger och driver en tjänst är bäst placerat att känna dess beroenden och märka fel. Gör det lätt för dem: en mall, en kort granskning vid planering och återkoppling när deras data används. Centrala team äger modellen, verktygen och kontrollerna, inte varje post.

### Mät kvalitet och användning

**8. Revidera noggrannhet genom stickprov.** Varje kvartal, dra ett slumpmässigt stickprov av CI:er och kontrollera dem mot levande system, och ett andra stickprov från levande system för att kontrollera att de finns i registret. Redovisa noggrannhet per klass och visa de främsta felkällorna. Håll stickprovsmetoden fast så att trender betyder något.

**9. Pröva kartan mot incidenter.** Efter en betydande incident eller ändring, jämför de faktiskt påverkade tjänsterna med vad CMDB:n förutsade. Registrera missar och rätta de saknade beroendena. Detta är det mest meningsfulla noggrannhetsprovet, eftersom det kontrollerar registret mot händelser, och träffgraden förbättras när kartan korrigeras. Använd skuldfria granskningar så att människor rapporterar missar villigt (se ämne 4.2, Mätetal för efteranalyser och lärande).

**10. Följ användning och fråga om den hjälpte.** Räkna hur ofta incidenter och ändringar hänvisar till CI:er och ställ en kort fråga till responders och godkännare om huruvida registret hjälpte. En stigande användningsgrad med positiva svar är det tydligaste tecknet på värde. En låg användningsgrad betyder att människor inte litar på registret eller inte vet att det finns, och båda går att rätta.

**11. Granska beroendekartor regelbundet med ägare.** Beroenden ändras när programvaran utvecklas. Be ägarna av kritiska tjänster bekräfta sina kartor varje kvartal, helst som en del av ett planerings- eller arkitektursamtal. Använd bekräftelsedatumet som ett attribut och visa kartor som är försenade.

### Håll det ärligt och proportionerligt

**12. Avveckla det ingen använder.** Ta bort CI-klasser och attribut som ingen fråga behöver och ingen rådfrågar. Färre, bättre fält höjer noggrannheten. Granska modellen årligen och registrera vad som togs bort och varför. Ett mindre register är mindre att hålla sant, och det gör kvalitetsmåtten lättare att nå ärligt.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| CI-fullständighet | Att fylla obligatoriska attribut med standardvärden eller platshållare; att snäva in den obligatoriska listan | Räkna standardvärden och platshållare; fast obligatorisk lista; noggrannhetsstickprov |
| CI-noggrannhet | Att stickprova lätta klasser; att revidera efter en städning | Slumpmässigt stickprov draget oberoende från båda riktningarna; fast metod |
| Beroendetäckning | Att markera kartor som granskade utan att läsa dem; att bara kartlägga triviala beroenden | Träffgrad för konsekvensprognos; stickprovskontrollera en karta mot levande trafik |
| Träffgrad för konsekvensprognos | Att välja incidenter som gick bra; att registrera påverkade tjänster snävt | Granska alla betydande incidenter; granskare utanför det ägande teamet |
| Andel dubbla CI:er | Att slå ihop distinkta CI:er för att sänka graden; att lätta på matchningsregler | Stickprova sammanslagningar för korrekthet; logga sammanslagningsregler |
| Uppdateringsfördröjning | Att bakdatera ändringshändelser; att bara räkna automatiska uppdateringar | Jämför händelse- och uppdateringstidsstämplar från källsystem; revisionsspår |
| CMDB-användningsgrad | Att lägga till CI-hänvisningar som en formalitet; att göra fältet obligatoriskt med vilket värde som helst | Kontrollera att hänvisade CI:er är relevanta; återkopplingsfrågan om nytta |

En sund avläsning är ett mindre register med hög uppmätt noggrannhet, beroendekartor som förutsäger verkliga incidenter, uppdateringsfördröjning nära noll för automatiserade klasser och människor som säger att de använder registret därför att det hjälper.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Heltäckande CMDB | Bred bild; stöder många användningsfall | Dyr att hålla sann; förfaller |
| Minimal, frågedriven CMDB | Betrodd och billig | Glapp; kräver tillväxtdisciplin |
| Upptäcktsdriven population | Hittar det okända; låg manuell insats | Brusig; saknar ägarskap och syfte |
| Pipelinedriven population | Korrekt; låg fördröjning | Begränsad till det som byggs genom pipelines |
| Centralt ägarskap av poster | Samstämmighet | Långsamt; långt från kunskapen |
| Teamägarskap av poster | Korrekt och snabbt | Variation; kräver mallar och kontroller |
| Grafliknande modell | Naturlig för relationer och konsekvensfrågor | Kräver kompetens och verktyg |
| Relationell tabellmodell | Bekant och enkel | Besvärlig för djupa beroendefrågor |

Svaret är att börja smått och frågedrivet, populera från pipelines med upptäckt som en andra åsikt och sätta tjänsteteam i spetsen för sina register. En [grafdatabas](https://en.wikipedia.org/wiki/Graph_database) kan göra beroendefrågor naturliga att ställa, fastän en konventionell databas fungerar om modellen hålls enkel.

## Frågor att diskutera med teamet

**1. Vilken fråga önskade vi senast att CMDB:n kunde besvara, och kunde den det?**
Minns en nylig incident eller ändring där någon sökte beroenden. Vad fann de, och vad gjorde de i stället? Facilitatorn bör registrera frågan och om registret rådfrågades. Resultatet är den första kandidaten för registrets syfte.

**2. Om vår viktigaste tjänst föll nu, hur säkra är vi på den förutsagda konsekvensen?**
Be om den förutsagda konsekvensen från CMDB:n och jämför den med vad människor som känner tjänsten tror. Notera skillnaderna. Enas om vilket beroende som ska verifieras först och vem som kontrollerar det.

**3. Vem äger registret för varje tjänst, och vet de det?**
Lista kritiska tjänster och ägarna av deras CMDB-poster. Fråga om ägarna vet och har granskat dem nyligen. Där ägaren är "CMDB-teamet", diskutera hur ägarskapet kan flyttas till tjänsteteamet.

**4. Vad fyller vi i bara för att tillfredsställa ett obligatoriskt fält?**
Leta efter standardvärden och platshållare. Dessa visar var modellen ber om mer än någon vet. Besluta om fältet ska tas bort, automatiseras eller om den verkliga källan ska hittas.

**5. Var är vårt register oense med det som körs?**
Jämför upptäcktens utdata med registret för en tjänst. För varje skillnad, fråga om registret eller verkligheten ska ändras. Samtalet tenderar att hitta både föråldrad data och obehöriga komponenter.

**6. Vad skulle vi sluta registrera?**
Lista klasser, attribut och relationer som ingen har använt på sex månader. Fråga vad som skulle hända om var och en försvann. Enas om att ta bort två och se om någon märker det.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam håller kunskapen om vad deras tjänster beror på och är bäst placerade att hålla registret sant. De bör deklarera ägarskap och beroenden bredvid sin kod, granska dem när designen ändras och använda registret när de planerar ändringar. En definition av klart som inkluderar uppdatering av tjänstebeskrivningen håller registret nära arbetet.

### Service- och driftteam

Driftteam rådfrågar registret under incidenter och ändringar, så de känner dess fel först. De bör rapportera missar i granskningar, köra upptäcktskontroller, underhålla matchningsreglerna och ge återkoppling till ägare. De driver också verktygen och revisionsstickproven.

### Ledning och styrning

Ledare vill ha påverkan och risk synliga, och de sponsrar ofta stora CMDB-program som gör besviken. De bör be om belägg för användning och noggrannhet i stället för antal poster, finansiera pipelineintegration och acceptera ett mindre omfång gjort väl. Styrningen bör förvänta sig att se träffgraden för konsekvensprognos och glapplistan.

### Kunder och användare

Användare har nytta av att incidenter diagnostiseras snabbare och att ändringar är mindre benägna att bryta beroende tjänster. De ser sällan CMDB:n, men de ser dess effekter i kommunikation som namnger de påverkade tjänsterna rätt och i färre överraskningar efter ändringar. Deras återkoppling efter incidenter visar om konsekvensbilden var rätt.

## I praktiken: ett exempel från tjänstehantering

Ett nationellt flygbolags teknikgrupp driver ungefär 300 applikationer och en bokningsplattform för kunder. Siffrorna nedan är illustrativa.

CMDB:n håller 180 000 CI:er och populerades av ett upptäcktsverktyg för fem år sedan. Chefen för tjänstehantering vill veta om den är värd att behålla. Hon ber ett litet team pröva den. För kvaliteten reviderar de 150 stickprovade CI:er och finner 71 procent korrekta på de fem obligatoriska attributen. För kartan går de igenom de senaste 20 betydande incidenterna och jämför de faktiskt påverkade tjänsterna med vad CMDB:n förutsade: den förutsade alla påverkade tjänster i 6 av 20, en träffgrad på 30 procent. För användningen hänvisade 12 procent av incidenterna under det senaste kvartalet till en CI, och i en kort enkät till responders sa de flesta att de förlitade sig på en separat wikisida. Dubbla CI:er är 9 procent av totalen.

Teamet fattar fyra beslut med tjänsteägarna. Det krymper omfånget till de 40 tjänster som bär flest kunder, med fem CI-klasser och fyra relationstyper. Det ber varje tjänsteteam deklarera ägare, beroenden och körningsplats i en kort fil som hålls med koden och som pipelinen publicerar till CMDB:n vid varje release. Det kör upptäckt veckovis och redovisar skillnader till ägare. Det lägger till ett fält i incidentgranskningen, "var CMDB:ns förutsägelse rätt?", och rättar varje miss inom två veckor.

Två kvartal senare har den avgränsade CMDB:n 14 000 CI:er, noggrannheten på det stickprovade urvalet är 92 procent, uppdateringsfördröjningen från release till post är under en timme för tjänster i pipelinen och träffgraden på de senaste 12 incidenterna är 75 procent. CMDB-användningen i incidenter har stigit till 58 procent, och responders säger att wikisidan inte längre behövs. Driftchefen ber om en plan för att föra in de övriga 260 applikationerna på en gång. Chefen för tjänstehantering föreslår att lägga till tio tjänster per kvartal, efter att var och en nått en träffgrad över en överenskommen nivå på en testincident, och förklarar att det tidigare breda registret aldrig hade blivit betrott. Beslutet registreras, med en granskning varje kvartal.

## Agilitet, AI, automatisering och analys

### Agilitet

Låt tjänsteteam hålla sina egna register aktuella som en del av sitt arbete och granska kvaliteten med dem regelbundet. Varningen är att enbart ett mål för fullständighet ger register fyllda med platshållare.

### AI

AI kan sluta sig till beroenden, föreslå poster och besvara frågor ur konfigurationsdata, och AI-system är själva konfigurationsposter. Följ träffgraden för konsekvensprognos för AI-föreslagna beroenden mot verkliga incidenter. Varningen är att en AI som gissar beroenden kan förorena registret med rimliga fel.

### Automatisering

Mata register från upptäckt och infrastruktur som kod och mät uppdateringsfördröjning. Varningen är att automatisk upptäckt kan skapa dubbla eller föråldrade poster utan tydliga identitetsregler.

### Analys

Bedöm databasen efter hur väl den besvarar frågor i verkliga ändringar och incidenter och redovisa användningsgraden. Beslutet detta ger underlag för är var data ska förbättras. Varningen är att noggrannhet mäts genom stickprov, så visa stickprovsstorleken.

## Branschperspektiv

**Startup.** Det finns litet behov av en CMDB utöver en tjänstekatalog och infrastrukturkod. Håll tjänsteägare och beroenden i arkivet och generera en karta ur det. Lägg till en databas först när frågorna växer ur filerna.

**Småföretag.** Ett enkelt diagram och en lista över system med ägare och leverantörer kan räcka. Uppdatera det efter varje betydande ändring. Motstå att köpa en plattform för ett litet bestånd, men håll diagrammet aktuellt, eftersom det är ovärderligt vid ett avbrott.

**Storföretag.** Skala behöver en modell, federerat ägarskap och integration med flera källor, inklusive förvärv. Standardisera identifierare och kärnmodellen, låt team utvidga den inom regler och mät användning och noggrannhet per domän. Räkna med att driva en bestående funktion för matchning och rensning.

**Offentlig sektor.** Tjänster vilar ofta på långlivade system, konsulter och delad infrastruktur, och incidentkonsekvens kan drabba allmänheten. Kartlägg beroenden av leverantörer och delade plattformar uttryckligen, behåll register för revisioner och anpassa till kontinuitetsplanering (se ämne 5.6, Mätetal för tjänstekontinuitet).

## Affärscase: motiv, ROI och TCO

Kostnaderna är modellerings- och styrningsinsats, integration av pipelines och upptäckt, en del verktyg och insatsen av revisioner och rättelser. Många organisationer äger redan plattformen. Population via pipeline är billig när mallen väl finns. Stora program för att populera allt på en gång har varit dyra och har ofta misslyckats.

Avkastningen är kortare incidenter, säkrare ändringar och mindre tid åt att leta information. Bygg caset ur dina egna belägg: tiden responders lägger på att hitta beroenden i en typisk incident, andelen incidenter där saknad beroendeinformation fördröjde diagnosen och ändringar som orsakade oväntad konsekvens. Träffgraden för konsekvensprognos är ett direkt mått på om registret skulle ha hjälpt. Undvik publicerade påståenden om andelen incidenter orsakade av ändring eller kostnaden för avbrott om du inte kan spåra deras källa. Räkna kostnaden för att hålla ett stort, tvivelaktigt register mot värdet av ett litet, betrott.

## Antimönster och fallgropar

- **Att populera allt först.** Ett enormt, föråldrat register förstör förtroendet. Börja med kritiska tjänster.
- **Upptäckt som enda källa.** Den kan inte tala om varför något finns eller vem som äger det. Kombinera med deklarationer.
- **Att revidera fullständighet och kalla det kvalitet.** Fullständigt och fel är sämre än ofullständigt och rätt. Stickprova för noggrannhet.
- **Centrala team som äger all data.** De känner inte till den. Ge tjänsteteam ägarskap.
- **Obligatoriska fält med standardvärden.** De ser fullständiga ut och bär ingen information. Ta bort eller automatisera dem.
- **Att mäta efter antalet CI:er.** Mer är inte bättre. Mät noggrannhet, träffgrad och användning.
- **Att ignorera relationer.** Utan beroenden är en CMDB en inventering. Investera i kartan för kritiska tjänster.
- **Att lägga skuld på människor för missar.** De slutar rapportera dem. Behandla ett missat beroende som ett fynd.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Omfång och modell | Det upptäckt hittade | Modell definierad; brett omfång | Frågedriven modell; kritiska tjänster kartlagda | Omfånget växer när träffgrad och användning motiverar det | Federerad modell över team och leverantörer; delade identifierare |
| Population och kvalitet | Manuell eller engångsinläsning | Schemalagd upptäckt och importer | Pipelines publicerar från kod; upptäckt som kontroll; stickprovsrevisioner | Noggrannhet, fördröjning och dubbletter mäts och följs över tid | Realtidsflöden med automatisk avstämning och ägarbekräftelse |
| Användning | Rådfrågas sällan | Används av några få team | Hänvisas till i incidenter och ändringar som standardpraxis | Konsekvensprognos prövas mot incidenter; användning och nytta följs | Registret ger underlag för automatiska beslut och delade leverantörskartor |

## Checklista

- [ ] Frågorna CMDB:n måste besvara är nedskrivna.
- [ ] Omfånget är begränsat till kritiska tjänster, med en definierad tillväxtregel.
- [ ] Modellen har en liten uppsättning klasser, attribut och relationstyper.
- [ ] Varje kritisk tjänst har en ägare som har bekräftat dess post det senaste kvartalet.
- [ ] Pipelines publicerar CI-ändringar för tjänster byggda som kod.
- [ ] Upptäcktsresultat jämförs med registret och skillnader granskas.
- [ ] Ett slumpmässigt noggrannhetsstickprov revideras varje kvartal i båda riktningarna.
- [ ] Incidentgranskningar registrerar om den förutsagda konsekvensen var rätt.
- [ ] CMDB-användning i incidenter och ändringar följs, med en nyttofråga.
- [ ] Oanvända klasser och attribut avvecklas enligt schema.

## AI-prompter

**Definiera frågorna och omfånget.**

```text
We run [type of organization and services]. Typical situations where we need
configuration information: [list incidents, changes, audits]. Draft a list of
the questions our CMDB should answer, the CI classes, attributes, and
relationships needed for each, and a minimal starting scope of the most
critical services. Do not invent tooling. List your assumptions and what to
confirm with service owners.
```

**Analysera en miss i konsekvensprognosen.**

```text
After the incident [description], the CMDB predicted these affected services:
[list], and the services actually affected were: [list]. Explain possible
reasons for each difference (missing dependency, wrong relationship, stale
data, indirect dependency), suggest how to verify each, and propose a fix at
the source. Do not assume causes the information cannot support. List your
assumptions.
```

**Utforma en deklarationsfil för tjänsteteam.**

```text
Propose a short, human-readable declaration that a service team keeps with its
code to describe the service for the CMDB: owner, support contact, tier,
dependencies, runtime location, and data classification. Include validation
rules the pipeline could apply and a minimal example for [type of service].
Keep it to what the questions in [paste questions] require. List your
assumptions and fields to review with security.
```

**Planera en kvartalsvis noggrannhetsrevision.**

```text
Our CMDB holds [number] CIs in these classes: [list]. Design a quarterly audit
with random samples drawn in both directions (from the CMDB to reality, and from
reality to the CMDB), say what to check for each class, how to report accuracy
and error sources honestly, and how to avoid grading our own homework. Do not
overstate statistical precision. List your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett mått på konfigurationskvalitet.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för CMDB-mått bär sin manipuleringsvektor, sitt skyddsräcke och sin regel om oberoende belägg.

## Viktigaste slutsatser

- Bygg CMDB:n för att besvara namngivna frågor om de tjänster som betyder mest och låt den växa när förtroendet växer.
- Populera den från pipelines och kod, använd upptäckt som en andra åsikt och låt tjänsteteam äga sina register.
- Pröva kvalitet mot händelser: jämför förutsagd konsekvens med vad som faktiskt hände i incidenter.
- Mät användning och nytta, inte antalet CI:er.
- Stickprova noggrannhet ur oberoende belägg i båda riktningarna.
- Avveckla det ingen använder och rätta fel vid deras källa.

## Referenser och vidare läsning

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Configuration Management*, TSO, 2020.
2. Wang, R. Y., and Strong, D. M., "Beyond accuracy: what data quality means to data consumers," *Journal of Management Information Systems*, 12(4), 1996.
3. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd ed., Technics Publications, 2017.
4. Morris, K., *Infrastructure as Code*, 2nd ed., O'Reilly, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Configuration item](https://en.wikipedia.org/wiki/Configuration_item).
7. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
8. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
9. Wikipedia, [Data integrity](https://en.wikipedia.org/wiki/Data_integrity).
10. Wikipedia, [Entity resolution](https://en.wikipedia.org/wiki/Entity_resolution).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Service discovery](https://en.wikipedia.org/wiki/Service_discovery).
13. Wikipedia, [Graph database](https://en.wikipedia.org/wiki/Graph_database).
