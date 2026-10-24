# Mätetalsinflation och kvalitetsurvattning

**När AI gör volym och hastighet billiga inflateras varje mätetal som räknar volym och hastighet, så para var och ett med ett mått på användbarhet som en människa har kontrollerat och bevaka om signalen i dina data drunknar.**

## Översikt och motiv

Ett mätetal fungerar därför att det speglar något som är svårt att producera. Lösta ärenden speglar ansträngning. Skrivna dokument speglar kunskap. Tillagda test speglar omsorg. När ett verktyg gör den synliga utdatan nästan gratis bryts länken mellan utdatan och ansträngningen. Talen fortsätter att stiga och meningen rinner ur. Detta är mätetalsinflation, och dess följeslagare är kvalitetsurvattning: andelen av det som produceras som är användbart faller, och den användbara delen blir svårare att hitta.

Detta är inte ett nytt problem. [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) och dess släkting [Campbells lag](https://en.wikipedia.org/wiki/Campbell%27s_law) beskriver hur mått som används för styrning korrumperas. Ett [fåfängemått](https://en.wikipedia.org/wiki/Vanity_metric) ser imponerande ut och säger ingenting om arbetets hälsa. Det AI ändrar är hastigheten och skalan med vilken utdata kan genereras, och med det hastigheten och skalan med vilken dessa gamla misslyckanden kan inträffa. Ett team som förr blåste upp ett antal för hand kan nu göra det på minuter, ofta utan att mena det.

Flera mönster återkommer i tjänste- och leveransarbete.

- **Volyminflation.** AI skriver utkast till fler ärenden, fler svar, fler kommentarer, fler testfall, fler dokument och mer kod. Antalen stiger. Arbetsbelastningen för dem som måste läsa, granska och underhålla stiger också.
- **Hastighetsinflation.** Tiden till ett första utkast faller kraftigt, och tiden till ett färdigt, kontrollerat resultat faller mindre, eller inte alls. En instrumentpanel som redovisar det första berättar en smickrande historia.
- **Brus.** Mer innehåll konkurrerar om uppmärksamhet. [Informationsöverbelastning](https://en.wikipedia.org/wiki/Information_overload) är tillståndet då en person inte kan bearbeta mängden information som presenteras, och [signal-brusförhållandet](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) i kunskapsbasen, ärendekön eller larmflödet faller. [Larmtrötthet](https://en.wikipedia.org/wiki/Alert_fatigue) är dess operativa form (se ämne 5.5, Mätetal för övervakning och larmkvalitet).
- **Genererat innehåll av låg kvalitet.** Innehåll som produceras i bulk med lite granskning, ibland kallat [AI-slask](https://en.wikipedia.org/wiki/AI_slop), är rimligt och tunt. En kunskapsbas som fyllts med sådana artiklar blir mindre pålitlig, och användare lär sig misstro den.
- **Verifieringskostnad.** Insatsen att kontrollera ett påstående är ofta mycket större än insatsen att göra det, ett mönster som ibland kallas [Brandolinis lag](https://en.wikipedia.org/wiki/Brandolini%27s_law). När generering är billig blir verifiering flaskhalsen.
- **Effektivitet som ökar förbrukningen.** [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox) beskriver fall där effektivitetsvinster leder till mer användning av en resurs, inte mindre. Om det blir billigt att skriva en rapport efterfrågas fler rapporter. Tid som ett verktyg sparar kan förbrukas av mer arbete av lägre värde.
- **Återkopplingsloopar.** Om genererat innehåll matar nästa omgång generering ackumuleras fel. Forskningslitteraturen beskriver [modellkollaps](https://en.wikipedia.org/wiki/Model_collapse) hos modeller som tränas på sina egna utdata. En liknande loop kan uppstå inuti en organisation när en assistent sammanfattar ärenden som skrivits av en assistent utifrån artiklar som en assistent sammanfattat.
- **Glidande baslinjer.** Om fördelningen av data ändras på grund av AI betyder trender och tröskelvärden inte längre vad de gjorde. Det liknar [konceptdrift](https://en.wikipedia.org/wiki/Concept_drift) i maskininlärning, där sambandet mellan indata och utfall förändras över tid. En ökning av ärendevolymen kan spegla att det blivit lättare att skapa ärenden, inte fler problem.

De agila målen spelar roll här. Kontinuerlig leverans, ständig förbättring och hållbar takt beror alla på att signalen är tydlig. Motiverade människor bör inte behöva vada genom maskingenererat brus eller verifiera högar av utdata i ohållbar takt. Intressenter som är kontinuerligt involverade är också det bästa försvaret: de berättar när rapporterna inte längre hjälper.

Det här ämnet ger måtten för att upptäcka inflation och urvattning och de parningar som avslöjar dem. Det bygger på grunderna och måtten för stött arbete (se ämne 10.1, AI i mätning av tjänstehantering, och ämne 10.2, Att mäta AI-stött arbete).

## Nyckelprinciper

- **Para varje volym- eller hastighetsmått med en användbarhetskontroll.** En människa bedömer om utdatan är användbar.
- **Mät till ett färdigt, verifierat resultat.** Hastighet till första utkast är en fälla.
- **Bevaka verifieringsbördan.** Den växer i det tysta och förbrukar den sparade tiden.
- **Skydda signalen.** Håll kunskapsbasen, köerna och larmen tillräckligt rena för att man ska kunna lita på dem.
- **Bryt återkopplingsloopar.** Låt inte genererat innehåll mata generering utan granskning.
- **Sätt om baslinjen när data förändras.** Trender över ett tekniskt skifte kräver omsorg.
- **Föredra färre, bättre utdata.** Mindre kan vara mer när uppmärksamhet är den begränsande resursen.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kvot mellan utdata och utfall | Volymen utdata i förhållande till det utfall den var avsedd att ge | antal utdata (ärenden, artiklar, ändringar) / utfallsmått (lösta problem, använda artiklar, kvarstående ändringar), över samma period, följd som en trend | kvot | Arbetsverktyg, kunskapsbas, utfallsmått | Ständig förbättring; mätning och rapportering | Fungerande programvara framför dokumentationsvolym | Månadsvis |
| Andel användbara poster | Andel stickprovade poster som en kvalificerad granskare bedömde som användbara | stickprovade poster bedömda som användbara (riktiga, relevanta, icke-dubbletter) / stickprovade poster | procent | Granskning av slumpmässigt stickprov | Kunskapshantering; kvalitetssäkring | Definition av klart för innehåll | Månadsvis |
| Verifieringsbörda | Mänsklig tid som läggs på att kontrollera och rätta genererat arbete per enhet utdata | timmar för granskning och rättelse / enheter utdata, följt som en trend | timmar per enhet | Tidsuppskattningar, data från granskningsverktyg | Ekonomistyrning av tjänster; ständig förbättring | Granskningskapacitet som begränsning | Månadsvis |
| Grad av innehållsredundans | Andel kunskapsposter som duplicerar eller i väsentlig mån överlappar en annan | poster flaggade som dubbletter eller överlappande vid granskning eller matchning / poster i kunskapsbasen | procent | Granskning av kunskapsbas, matchningsrapporter | Kunskapshantering | En enda sanningskälla | Kvartalsvis |
| Granskad andel av genererad kunskap | Andel AI-genererade kunskapsposter som en kvalificerad person har granskat och godkänt före publicering | publicerade genererade poster med godkänd granskning / publicerade genererade poster | procent | Metadata i kunskapsbasen | Kunskapshantering; ändringsmöjliggörande | Granskning före release | Månadsvis |
| Inflöde i backlog mot lösning | Tillväxten av inkommande arbete i förhållande till tillväxten av löst arbete, för köer som påverkas av AI | (förändring i skapade poster) / (förändring i lösta poster), jämfört med baslinjen före AI | kvot | Ärende- och spårarhistorik | Incidenthantering; hantering av serviceförfrågningar | Flödesbalans | Månadsvis |
| Flaggor för mätetalsdrift | Antal mätetal vars definition eller fördelning förskjutits märkbart efter att AI infördes, granskade och kommenterade | mätetal flaggade vid granskning / mätetal i registret | antal; procent | Granskning av mätetalsregister, fördelningskontroller | Mätning och rapportering | Retrospektiv om mätning | Kvartalsvis |

Definiera "användbart" i en skriven bedömningsmall: riktigt, relevant för ett verkligt behov, icke-dubblett och aktuellt. Verifieringsbörda räknar tid som människor lagt, inklusive tiden för att ge prompter igen, och utesluter tid som bara är väntan. Granskad andel är en kontroll: ogranskad genererad kunskap följs separat och hålls synligt märkt. Flaggor för mätetalsdrift är diskussioner, inte påföljder: en flagga betyder att en person har bestämt om definitionen ska justeras, trenden kommenteras eller baslinjen sättas om. Alla mått beskriver processer och innehåll, inte individer.

## Rekommendationer

### Para volym med användbarhet

**1. Bygg in en användbarhetskontroll i varje volymmått.** För varje volym- eller hastighetsmått på din instrumentpanel, namnge ett användbarhetsmått som en person har bedömt. Skapade ärenden paras med lösningskvalitet, skrivna artiklar med artikelanvändning och riktighet, sammanfogade ändringar med kvarstående resultat och omarbete (se ämne 10.2, Att mäta AI-stött arbete). Visa dem tillsammans och diskutera när de glider isär.

**2. Stickprova och bedöm, regelbundet.** Varje månad, dra ett slumpmässigt stickprov av poster från de flöden AI berör och låt en kvalificerad person bedöma dem mot en skriven bedömningsmall. Registrera andelen användbara och skälen till att poster faller igenom. Rotera granskare och håll dem oberoende av producenterna. Stickprov är det främsta försvaret mot långsam urvattning.

**3. Redovisa utfall före utdata.** I ledningsrapporter, inled med utfall: lösta problem, nöjda användare, undvikna fel. Placera antal utdata efter, som sammanhang. Om rapporten fortfarande vore värdefull med antalen utdata borttagna är den väl orienterad.

### Kontrollera verifiering och brus

**4. Mät verifieringsbördan.** Uppskatta tiden som läggs på att kontrollera och rätta genererat arbete och följ den som en trend per enhet utdata. Om den stiger när utdatan stiger är nettovinsten mindre än genereringstalen antyder, och granskare kan vara på väg mot överbelastning. Inkludera bördan i kostnaden per uppgift (se ämne 10.1, AI i mätning av tjänstehantering).

**5. Begränsa vad som kommer in i systemet.** Bestäm vilket genererat innehåll som får skapas och publiceras automatiskt och vad som kräver granskning. Sätt gränser för storleken och antalet genererade ändringar i en granskning. Gör det lätt att säga nej till volym. En mindre kö med tydligare poster tjänar användare bättre.

**6. Hantera kunskapsbasen som en produkt.** Märk genererat innehåll, kräv granskning före publicering, avveckla dubbletter och föråldrade poster och följ redundans och användning. En kunskapsbas är användbar i proportion till hur mycket användare litar på den. Ta bort artiklar som ingen använder och som ingen kan gå i god för (se ämne 3.6, Mätetal för kunskapshantering).

**7. Håll larm- och ärendeflöden rena.** Om AI skapar ärenden ur larm eller sammanfattningar, mät den användbara andelen och dubbletterna. Justera aggressivt. Behandla ett fallande signal-brusförhållande som en incident i sig, eftersom det skadar responsen när verkliga problem kommer.

### Bryt loopar och bevaka baslinjen

**8. Hindra genererat innehåll från att mata sig självt okontrollerat.** Där en assistent drar på en kunskapsbas, en ärendehistorik eller tidigare rapporter, se till att genererat material i dessa källor har granskats, eller är märkt och viktat därefter. Stickprova kedjan: välj ett svar och spåra det tillbaka genom dess källor för att se var det kom ifrån. Okontrollerade loopar förstärker fel.

**9. Sätt om baslinjen när data förskjuts.** Efter att AI införts, kommentera trenddiagram och, där datans natur har förändrats, starta en ny baslinje. Kontrollera fördelningar, inte bara summor: ärendelängd, kategorisammansättning och tid att skapa kan alla förskjutas. Flaggor för mätetalsdrift föranleder dessa samtal (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

**10. Leta efter återstudsar.** När en uppgift blir billigare, fråga om efterfrågan på den kommer att växa. Bestäm i förväg hur sparad tid ska användas, så att den inte absorberas av mer utdata av lågt värde. Ett team som producerar dubbelt så många rapporter med samma insats kan göra mindre användbart arbete.

### Håll mänsklig uppmärksamhet i loopen

**11. Skydda granskarnas och användarnas uppmärksamhet.** Granskningskapacitet och uppmärksamhet är knappa. Minska mängden material människor måste läsa, ge granskare realistiska belastningar och fråga dem vad som blir svårare. En hållbar takt inkluderar takten att läsa och bedöma (se ämne 9.2, Mätetal för nöjdhet och välbefinnande).

**12. Fråga användare och intressenter om signalen är tydlig.** Kontinuerlig involvering av de människor som använder utdatan är det bästa provet. Fråga om kunskapsbasen är lättare eller svårare att använda, om rapporterna berättar vad de behöver, om kön känns tydligare. Deras svar och kommentarer bör läsas bredvid talen.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Kvot mellan utdata och utfall | Att välja ett utfallsmått som stiger med volymen; att ändra perioden | Utfall fastlagt i registret; jämför med nöjdhet och återöppningsgrad |
| Andel användbara poster | Att stickprova lätta poster; överseende bedömningsmall; granskare som påverkas av producenten | Slumpmässigt stickprov; skriven bedömningsmall; oberoende, roterande granskare |
| Verifieringsbörda | Att inte logga granskningstid; att flytta kontrollen till team längre ned | Inkludera omarbete längre ned; fråga granskare om belastningen |
| Grad av innehållsredundans | Snäva matchningsregler som missar dubbletter; att slå ihop skilda poster | Stickprova dubbletter för hand; logga sammanslagningsregler |
| Granskad andel av genererad kunskap | Att markera granskning som klar utan att läsa; att granska i bulk | Stickprova granskningar för substans; tid per granskning; felgrad i publicerade poster |
| Inflöde i backlog mot lösning | Att stänga poster automatiskt; att dela poster | Kontrollera lösningskvalitet; återöppningsgrad; stickprova stängda poster |
| Flaggor för mätetalsdrift | Att inte flagga för att slippa arbete; att flagga allt | Granska alla mätetal varje kvartal; kräv ett beslut för varje flagga |

En sund avläsning är en stabil eller stigande andel användbara poster när volymen växer, en verifieringsbörda som är känd och överkomlig, en kunskapsbas med låg redundans och granskat genererat innehåll, köer med en tydlig signal och en ledningsbild som inleder med utfall.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Räkna utdata | Lätt, välbekant | Inflateras; belönar volym |
| Mät utfall | Speglar värde | Långsammare; svårare att tillskriva |
| Stickprova och bedöm | Upptäcker urvattning | Kräver skickliga granskare; insats |
| Automatisk kvalitetspoängsättning | Skalar | En annan modells åsikt; kan dela samma blinda fläckar |
| Granska allt som genererats | Säkert | Tar bort nyttan; granskare överbelastas |
| Granska ett stickprov | Praktiskt | Vissa dåliga poster slinker igenom |
| Tillåt öppen generering | Snabbt, brett | Brus; förtroendet urholkas |
| Begränsa generering till godkända användningar | Renare signal | Långsammare införande; missad nytta |

Svaret är att mäta utfall, stickprova och bedöma användbarhet med människor, begränsa vad som kommer in i delade lager utan granskning och återbesöka baslinjer. Använd automatisk poängsättning som ett hjälpmedel och inte som domare.

## Frågor att diskutera med teamet

**1. Vilka av våra tal har gått upp sedan vi började använda AI, och vad har det gjort för de människor vi tjänar?**
Lista talen. För vart och ett, titta på utfallet det var avsett att spegla. Facilitatorn bör notera var utfallet inte rörde sig. Para de talen med en användbarhetskontroll.

**2. Hur mycket av det vi publicerade eller skapade förra månaden skulle vi gärna försvara rad för rad?**
Ta ett slumpmässigt stickprov och läs det tillsammans. Markera vad som är användbart, tunt, felaktigt eller dubblett. Diskutera graden och orsakerna. Enas om en standard för vad som kommer in i delade lager.

**3. Var håller kontrollerandet på att bli vår flaskhals?**
Fråga granskarna. Titta på köer av granskningar, granskningsdjup och den insats de nu bär. Enas om en gräns för storleken eller antalet genererade poster per granskning och ett sätt att mäta bördan.

**4. Vilket genererat innehåll matar annat genererat innehåll här?**
Spåra ett typiskt svar tillbaka till dess källor. Var startade kedjan? Diskutera var en person bör kontrollera kedjan, eller märka innehållet.

**5. Vad skulle en användare säga om vår kunskapsbas nu jämfört med för ett år sedan?**
Läs färska kommentarer och titta på användningsdata. Fråga om det är lättare eller svårare att hitta ett pålitligt svar. Enas om en uppstädning och en regel för nytt innehåll.

**6. Vilka av våra trender bör vi starta om med en ny baslinje?**
Lista de mätetal som beror på volym eller på hur poster skapas. Leta efter förändringar i form sedan AI kom. Kommentera trenderna och besluta vilka som behöver en ny baslinje.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam genererar mycket av volymen och bär underhållet. De bör föredra mindre, tydligare ändringar, hålla genererat material granskat och märkt och bevaka kvarstående resultat och omarbete. De bör vägra mått baserade på genererad volym och be om utfallsmått.

### Service- och driftteam

Driftteam lever i de köer, larm och den kunskapsbas som urvattning skadar. De bör justera AI-skapade ärenden och larm för att hålla signalen stark, granska genererad kunskap innan den publiceras och rapportera när flödet blir brus. De är bäst placerade att bedöma användbarhet.

### Ledning och styrning

Ledare får de instrumentpaneler som inflation förvränger. De bör be om utfall först, kräva användbarhetskontroller bredvid volym, finansiera granskningskapacitet och acceptera att vissa mått behöver sättas om. Styrningen bör kontrollera att genererat innehåll i delade lager är granskat och märkt.

### Kunder och användare

Användare bär kostnaden för urvattning när svar är felaktiga, artiklar motsäger varandra och svar är långa och tomma. De vill ha kort, riktig, relevant hjälp. Deras reaktion på kvaliteten på det de får är ett direkt prov på om signalen överlevde.

## I praktiken: ett exempel från tjänstehantering

Ett globalt läkemedelsbolags it-grupp aktiverar en AI-assistent för att skriva utkast till kunskapsartiklar, sammanfatta ärenden och förbereda veckovisa lägesrapporter. Inom ett kvartal ser instrumentpanelen utmärkt ut. Siffrorna nedan är illustrativa.

Skapade kunskapsartiklar stiger från 140 till 610 i månaden. Ärenden bär detaljerade AI-skrivna sammanfattningar. Veckorapporterna löper på tolv sidor. Kvalitetschefen för tjänster märker att nöjdheten med självbetjäning har fallit och att servicedesken rapporterar fler kontakter av typen "artikeln hjälpte inte". Hon stickprovar 100 av de nya artiklarna tillsammans med två erfarna agenter. Bara 54 bedöms som användbara: 23 duplicerar befintliga artiklar, 15 innehåller föråldrade eller felaktiga steg och 8 är för vaga för att agera på. Av de nya artiklarna publicerades 71 procent utan mänsklig granskning. Kunskapsbasen rymmer nu ungefär 3 200 artiklar, med en grad av innehållsredundans hon uppskattar till 28 procent mot 9 procent för ett år sedan. Agenter rapporterar att det tar längre tid att hitta ett pålitligt svar. Verifieringsbördan för servicedeskens artikelredaktörer har vuxit till ungefär 40 timmar i veckan, upp från 12. De AI-skrivna ärendesammanfattningarna gör att senare AI-genererade svar förlitar sig på text som ingen skrev, och i en spårning av fem svar tillbaka genom deras källor förlitade sig två på en sammanfattning som hade återgett problemet felaktigt. Veckans lägesrapporter säger, när de läses, lite som inte stod i den föregående, och intressenter har slutat läsa bortom sida två.

Hon föreslår fyra ändringar, som tjänsteledningsgruppen och kunskapsägarna antar. Genererade artiklar kräver granskning av en namngiven redaktör före publicering och märks tills de godkänns. En gräns på en genererad artikel per ämneskluster förhindrar dubbletter, och en genomgång slår ihop eller avvecklar redundanta poster. Rapportmallar kortas till två sidor som inleder med utfall, och AI används bara för att skriva utkast till de avsnitt en person sedan redigerar. Ärendesammanfattningar markeras som genererade, och ett stickprov kontrolleras varje månad. Instrumentpanelen redovisar andel användbara poster, redundansgrad, granskad andel och verifieringsbörda bredvid artikelantal.

Efter två kvartal faller skapade artiklar per månad till 190, andelen användbara poster stiger till 91 procent, redundansgraden faller till 11 procent, den granskade andelen är 100 procent och verifieringsbördan stabiliseras på ungefär 16 timmar i veckan. Nöjdheten med självbetjäning återhämtar sig och kontakter av typen "artikeln hjälpte inte" minskar. Intressenter läser tvåsidesrapporten. En direktör ber om ett mål på 1 000 artiklar i månaden för att visa värdet av AI-programmet. Kvalitetschefen för tjänster förklarar att antalet var problemet och föreslår att följa användbarhet och användning. Beslutet registreras.

## Agilitet, AI, automatisering och analys

### Agilitet

En regelbunden översyn av om varje antal fortfarande speglar användbarhet hjälper ett team att upptäcka inflation tidigt, och intressenter kan berätta vad de faktiskt använder. Varningen är att skärpa ett antal efter att inflation upptäckts startar om cykeln.

### AI

AI gör volym och hastighet billiga, så varje antal av volym eller hastighet inflateras. Para vart och ett med andelen poster en människa bedömt som användbara och verifieringsbördan och kontrollera redundant innehåll. Varningen är att AI som används för att kontrollera AI-utdata kan dela samma blinda fläckar, så behåll mänskliga stickprov.

### Automatisering

Automatisera upptäckt av dubbletter, nästan-dubbletter och föråldrat innehåll och mät upptäckten på falska positiva. Varningen är att automatisk uppstädning kan ta bort poster som är sällsynta men viktiga.

### Analys

Redovisa kvoten mellan utdata och utfall och andelen användbara poster med stickprovsstorlekar. Beslutet detta ger underlag för är vilka antal som ska sluta redovisas. Varningen är att kvoten beror på hur utfall definieras, så ange det.

## Branschperspektiv

**Startup.** Generering är billig och granskningstid knapp. Håll dokumentation och ärenden korta, granska det kunder kommer att läsa och radera fritt. En liten, riktig uppsättning artiklar slår en stor uppsättning tveksamma.

**Småföretag.** Det finns lite kapacitet att granska, så begränsa vad verktyget producerar. Föredra en handfull verifierade guider och mallar. Se upp för att publicera genererat material på publika sidor utan att kontrollera det.

**Storföretag.** Skala förstärker brus. Inrätta innehållsstyrning med ägare, märkning och granskningsregler, mät användbarhet över kunskapsbasen och kör periodiska uppstädningar. Dela bedömningsmallar mellan team och jämför trender, inte team.

**Offentlig sektor.** Offentligt innehåll måste vara riktigt och tillgängligt, och fel kan skada. Kräv granskning av genererad offentlig information, för register över hur den togs fram och tillämpa standarder för klarspråk och tillgänglighet. Regler om gallring och arkivering kan gälla genererat material (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna för att skydda mot inflation är måttliga: granskningstid för stickprov, redaktionell insats för genererat innehåll, verktyg för dubblettupptäckt och insatsen att sätta om trender. Kostnaderna för att inte göra det är större men diffusa: användare som slutar lita på självbetjäning, granskare som bränner ut sig, beslut fattade på uppblåsta tal och uppstädningsprojekt.

Bygg caset ur dina egna data: andelen användbara poster och verifieringsbördan över tid, volymen kontakter som orsakas av ohjälpsamt innehåll och kostnaden för en uppstädning av kunskapsbasen. Undvik att använda publicerade tal om kvaliteten på genererat innehåll, som varierar kraftigt med verktyg, uppgift och metod. Inkludera den undvikna kostnaden för rykteskada av att publicera felaktig information (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att fira volym.** Det belönar brus. Fira utfall och användbarhet.
- **Hastighet till första utkast som produktivitetshistoria.** Besparingen kan försvinna i kontrollen. Mät tid till ett verifierat resultat.
- **Att publicera genererat innehåll utan granskning.** Förtroendet urholkas i det tysta. Granska och märk.
- **Att låta genererat innehåll mata generering.** Fel ackumuleras. Kontrollera kedjan.
- **Oförändrade baslinjer.** Trender vilseleder efter ett tekniskt skifte. Kommentera och sätt om.
- **Att överbelasta granskare.** Granskning blir en stämpel. Begränsa volymen och mät bördan.
- **Att använda en AI-domare till allt.** Den kan dela producentens blinda fläckar. Behåll människor i loopen.
- **Att ignorera återstudsen.** Billigare arbete drar till sig mer arbete. Bestäm vad sparad tid är till för.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Parning och stickprov | Volym redovisas ensam | Informella intryck av kvalitet | Varje volymmått paras med en stickprovad användbarhetskontroll | Användbarhet, börda och redundans hanteras med mål för granskning, inte volym | Bild över organisationen av signalkvalitet; bedömningsmallar delas med partner |
| Innehåll och loopar | Genererat innehåll blandas in | Viss märkning | Genererat innehåll märks och granskas före publicering; kedjor stickprovas | Loopar övervakas; lager kurateras; dubbletter avvecklas enligt schema | Proveniens spåras från början till slut över verktyg och leverantörer |
| Baslinjer och uppmärksamhet | Trender läses över skiftet | Kommentarer på vissa diagram | Baslinjer sätts om där data ändrats; återstuds beaktas | Flaggor för mätetalsdrift granskas kvartalsvis; granskarbelastning hanteras | Mätetalsdesign anpassas kontinuerligt till tekniska förändringar tillsammans med intressenter |

## Checklista

- [ ] Varje volym- eller hastighetsmått har en användbarhetsföljeslagare bedömd av en person.
- [ ] Ett slumpmässigt stickprov av AI-berörda poster granskas månadsvis mot en skriven bedömningsmall.
- [ ] Verifieringsbördan uppskattas och följs som en trend.
- [ ] Genererad kunskap märks och granskas före publicering.
- [ ] Redundans i kunskapsbasen mäts och minskas.
- [ ] Larm- och ärendeflöden övervakas för användbar andel och dubbletter.
- [ ] Kedjor från genererade utdata tillbaka till deras källor stickprovas.
- [ ] Trender över införandet av AI kommenteras eller får ny baslinje.
- [ ] Ledningsrapporter inleder med utfall.
- [ ] Användare och intressenter tillfrågas om signalen är tydligare eller brusigare.

## AI-prompter

**Skapa en användbarhetsmall.**

```text
Draft a short rubric (no more than six criteria) for judging whether a [knowledge
article, ticket summary, status report] is useful in [type of organization].
Include correctness, relevance to a real need, duplication, currency, and
clarity, with a three-level rating and examples of each level. Do not invent
statistics. List your assumptions and how to keep reviewers consistent.
```

**Analysera ett fall i signalen.**

```text
Since introducing AI for [task], these figures changed: [paste volumes, resolution,
satisfaction, reopen rate, reviewer hours]. Describe what the pattern suggests
about inflation or dilution, which changes may be due to easier creation, what
to sample next, and which metrics may need a new baseline. Do not assume
causes the data cannot support. List your assumptions.
```

**Planera en uppstädning av kunskapsbasen.**

```text
Our knowledge base has [number] articles, of which [number] were generated in the
last [period]. Propose a clean-up plan: how to detect duplicates and stale items,
how to prioritize by use, how to review generated articles, rules to prevent
recurrence, and measures to track. Do not assume specific tools. List your
assumptions and risks.
```

**Spåra en kedja av genererat innehåll.**

```text
Here is an AI-generated answer and the sources it drew on: [paste]. Trace each
claim to its source and mark whether the source was human-written, reviewed
generated content, or unreviewed generated content. Identify where an error
could have entered and suggest a check. Do not assume facts beyond the text. List
your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta användbarhetsföljeslagaren för ett volym- eller hastighetsmått.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett mätetal som påverkas av AI parar volym med stickprovad användbarhet och bär sin manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- När AI gör utdata billig inflateras volym- och hastighetsmått och andelen som är användbar kan falla.
- Para varje volym- eller hastighetsmått med en stickprovad, människobedömd användbarhetskontroll.
- Mät tid till ett verifierat resultat och verifieringsbördan, eftersom kontrollerandet blir flaskhalsen.
- Märk och granska genererat innehåll innan det kommer in i delade lager och hindra loopar från att mata sig själva okontrollerat.
- Sätt om trender efter ett tekniskt skifte och inled rapporter med utfall.
- Bestäm i förväg vad sparad tid är till för och skydda granskarnas och användarnas uppmärksamhet.

## Referenser och vidare läsning

1. Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., and Gal, Y., "AI models collapse when trained on recursively generated data," *Nature*, 631, 2024.
2. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
11. Wikipedia, [Information overload](https://en.wikipedia.org/wiki/Information_overload).
12. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
13. Wikipedia, [Alert fatigue](https://en.wikipedia.org/wiki/Alert_fatigue).
14. Wikipedia, [AI slop](https://en.wikipedia.org/wiki/AI_slop).
15. Wikipedia, [Brandolini's law](https://en.wikipedia.org/wiki/Brandolini%27s_law).
16. Wikipedia, [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox).
17. Wikipedia, [Model collapse](https://en.wikipedia.org/wiki/Model_collapse).
18. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
