# Mätning av ITIL 5 och värdeutfall

**ITIL 5, så som dess ägare beskriver det, knyter samman strategi, leverans och mätbara resultat och omfattar AI-aktiverade miljöer, så mät om varje tjänst, produkt och AI-system har en namngiven ägare och ett skrivet resultat med belägg, och behandla varje detalj om ITIL 5 som du inte kan verifiera hos ägaren som obekräftad.**

## Översikt och motiv

[ITIL](https://en.wikipedia.org/wiki/ITIL) är det mest kända ramverket för [it-tjänstehantering](https://en.wikipedia.org/wiki/IT_service_management) (ITSM). Dess ägare, PeopleCert, publicerar den aktuella versionen, och en ny version av ramverket, ITIL 5, tillkännagavs 2026. Team som driver tjänster frågar vad en ny version ändrar i fråga om mätning. Det ärliga svaret börjar med vad som kan verifieras och vad som inte kan det.

**Vad som är verifierat (per den 20 oktober 2026).** PeopleCerts egen certifieringssida för ITIL Foundation Bridge (Version 5) beskriver uppdateringen som att den omfattar hantering av digitala produkter och tjänster genom hela livscykeln, inklusive hur ITIL återspeglar "modern digital and AI-enabled environments" (moderna digitala och AI-aktiverade miljöer). Den listar också en "enhanced value creation approach" (förbättrat tillvägagångssätt för värdeskapande) som länkar strategi, leverans och mätbara resultat över intressentekosystemet, samt hantering av digital komplexitet och AI-komplexitet. Sidan anger att bryggan är till för innehavare av ITIL 4-certifiering. Den anger inget lanseringsdatum för själva ITIL 5.

**Vad som inte är verifierat.** Praktiknamn och struktur, hur mycket av ITIL 4 som förs över, formella lanseringsdatum och om det finns en separat publikation om AI-styrning. Tredjeparts utbildnings- och konsultsidor anger siffror och namn för dessa. De är oense sinsemellan, så den här boken upprepar dem inte. Kontrollera ägarens sidor på nytt före varje beslut och märk varje uttalande "i ITIL 4" eller "i ITIL 5".

Tre teman följer av ägarens formuleringar, och vart och ett har en mätkonsekvens. En produktorientering betyder att en tjänst ägs från idé till avveckling, så mät ägarskap. AI i miljön betyder att AI-system behöver styrning, så mät inventering, tillsyn och kvalitet. Värde som mätbart resultat betyder att en tjänst bör ange vad som är bättre för någon när den fungerar, så mät om resultatet är nedskrivet och om det finns belägg för att det rört sig.

Det här ämnet definierar inga ITIL 5-mätetal, eftersom ägaren inte har publicerat någon mätetalsuppsättning som den här boken kan verifiera. Det erbjuder mått på en tjänsteorganisations beredskap att mätas: om de grunder finns som varje version av ITIL, och varje ärlig mätning, kommer att behöva. Måtten har samma form som resten av boken, med en manipuleringsvektor och ett skyddsräcke för vart och ett (se ämne 1.2, Goodharts lag och mätetalens psykologi).

Termer som används här. En **tjänst** är ett sätt att möjliggöra samskapande av värde genom att underlätta resultat som kunden vill ha. En **digital produkt** är ett programvarubaserat erbjudande med egen livscykel och ägare. En **tillgångskarta** (estate map) är en lista över de tjänster, produkter, plattformar och AI-system som en organisation driver, var och en med en ägare. Ett **resultat** är en förändring i en kunds liv eller i en tjänsts hälsa (se ämne 1.3, Resultat före leverans: att välja vad som ska mätas).

## Nyckelprinciper

- **Verifiera före du citerar.** Ett uttalande om ITIL 5 är verifierat bara om ägarens egen publikation säger det. Allt annat är obekräftat och märks så.
- **Mät grunderna, inte ramverket.** Ägarskap, resultat och AI-tillsyn spelar roll under varje version, och de är mätbara redan i dag.
- **Resultat före leverans.** En tjänsts värde är en förändring för någon, så ett skrivet resultat och belägg för förändring slår antal ärenden eller releaser.
- **Äg varje produkt, tjänst och AI-system.** En namngiven ägare är minimum för styrning, granskning och avveckling.
- **Para varje mått med ett skyddsräcke.** Täckningsantal är lätta att uppfylla på papper, så para var och en med en kontroll av att innehållet är verkligt.
- **Vänta inte på ramverket.** Börja med tillgångskartan och en liten uppsättning mått och justera när ägaren publicerar mer.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ägartäckning för tillgångar | Andel listade tjänster, digitala produkter, plattformar och AI-system med en namngiven, aktiv ägare | objekt med en namngiven ägare som bekräftats de senaste 12 månaderna / objekt på tillgångskartan, räknade vid periodens slut | procent | Tjänstekatalog, konfigurationsposter och tillgångskartan | Hantering av tjänstekatalog; styrning | Produktägare och teamstadga | Kvartalsvis |
| Täckning av resultatutsagor | Andel tjänster och produkter med ett skrivet resultat och minst en namngiven beläggssignal | tjänster och produkter med en resultatutsaga granskad de senaste 12 månaderna och en beläggssignal / tjänster och produkter på tillgångskartan | procent | Tjänstekatalog och granskningsanteckningar | Hantering av servicenivåer; ständig förbättring | Produktmål och acceptanskriterier | Kvartalsvis |
| Beläggsålder för resultat | Åldern på den senaste beläggsgranskningen för varje resultat | median och 85:e percentilen av (periodens slutdatum minus datum för senaste beläggsgranskning) över resultat | dagar | Granskningslogg | Mätning och rapportering | Regelbunden granskning med intressenter | Kvartalsvis |
| Inventeringstäckning för AI-system | Andel kända AI-aktiverade funktioner och system med en ägare, en mänsklig granskningspunkt och en post i riskregistret | AI-system med alla tre / AI-system som hittats av den senaste upptäcktsgenomgången | procent | AI-inventering och riskregister | Riskhantering; styrning | Definition av klart för AI-funktioner | Kvartalsvis |
| Verifieringsgrad för påståenden | Andel ITIL 5-uttalanden som används i planer och policyer som kan spåras till ägarens egen publikation | uttalanden med ett daterat ägarcitat / ITIL 5-uttalanden som använts i beslutsdokument under perioden | procent | Verifieringslogg | Kunskapshantering; styrning | Ej tillämpligt, en praktik på organisationsnivå utan direkt agil motsvarighet | Kvartalsvis |

Formlerna räknar objekt vid periodens slut. "Aktiv ägare" betyder en person eller roll som har bekräftat ägarskapet skriftligt, inte ett namn kopierat från en gammal post. Verifieringsgraden för påståenden utesluter uttalanden om ITIL 4, som är brett dokumenterat.

## Rekommendationer

### Börja med tillgångskartan

**1. Bygg en lista före allt annat.** Lista varje tjänst, digital produkt, plattform och AI-system du driver, med ett namn och en ägare. Räkna med överraskningar: skuggverktyg, funktioner som är påslagna som standard i leverantörsprodukter och plattformar utan ägare. Kartan är nämnaren för varje annat mått här.

**2. Definiera "ägare" i en mening.** En ägare är ansvarig för objektets resultat, dess förändring, dess kostnad och dess avveckling. En teams e-postlista är inte en ägare. Besluta om en produkt och dess stödjande tjänst delar ägare och skriv ned regeln.

**3. Upptäck AI-system aktivt.** Sök igenom avtal, verktygsinställningar och molnkonton efter AI-funktioner och fråga team vad de har slagit på. En engångsenkät blir inaktuell, så schemalägg en regelbunden genomgång och jämför den med inventeringen.

### Mät resultat

**4. Skriv en resultatmening per tjänst.** Meningen säger vad som är bättre för en namngiven kund när tjänsten fungerar, med deras ord. "Tillgänglighet på 99,9 procent" är ett mål, inte ett resultat. Om tjänsten saknar resultat, fråga om den bör finnas.

**5. Namnge beläggssignalen.** För varje resultat, namnge de data som skulle visa att det rör sig, till exempel grad av återkommande kontakter, uppgiftsframgång eller användning. Föredra signaler du redan samlar in (se ämne 6.5, Värdeförverkligande och affärsresultat). Om ingen signal finns, registrera det som iakttagelsen.

**6. Redovisa beläggens ålder.** Ett resultat som granskades för två år sedan är ett påstående, inte belägg. Visa medianen och en hög percentil av beläggsålder och visa den äldsta. Detta är svårt att manipulera utan att faktiskt göra granskningen.

### Styr AI-mätning

**7. Para AI-aktivitet med ett kvalitetsmått.** Där AI assisterar med ärenden, ändringar eller kunskap, redovisa ett användningsmått bredvid ett kvalitetsmått, till exempel andelen AI-utkast som en person ändrade i väsentlig mån, eller graden av återkommande kontakter för AI-besvarade förfrågningar (se ämne 10.2, Att mäta AI-stött arbete). Paret visar nytta, vilket användning ensam inte kan.

**8. Länka AI-system till riskregistret.** Varje AI-system får en ägare, en mänsklig granskningspunkt, ett granskningsdatum och en post i riskregistret (se ämne 10.5, Mätetal för AI-styrning och AI-risk). Kontrollera den lag som gäller dig med din juridiska rådgivare, eftersom den här boken inte ger juridisk rådgivning.

### Håll påståendena ärliga

**9. För en verifieringslogg.** För varje ITIL 5-uttalande som dina planer använder, registrera ägarens källa, datumet då du läste den och om den är verifierad. Granska loggen före varje budget- eller policybeslut, eftersom publikationen kan ändras.

**10. Låt ITIL 4-måtten löpa.** Sluta inte mäta praktiker som fungerar för att en ny version finns. Ändra ett mått när både ägarens vägledning och dina egna belägg säger att det behöver ändras, och markera ändringen i diagrammet (se ämne 1.4, Styrning och ägarskap av mätetal).

**11. Ta små steg.** Välj ett mått ur tabellen, tilldela en ägare och kör det i ett kvartal. Att lägga till alla fem på en gång skapar ett rapporteringsprogram innan det finns något belägg för att måtten hjälper.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Ägartäckning för tillgångar | Att namnge en chef eller en e-postlista som ägare till allt; att utelämna svåra objekt från kartan | Ägarbekräftelse från ägaren själv, och en upptäcktsgenomgång som jämför kartan med avtal och molnkonton |
| Täckning av resultatutsagor | Att skriva en vag mening som "förbättra effektiviteten"; att kopiera ett resultat över tjänster | Stickprova resultat med kunder och fråga om de känner igen dem; beläggsålder för resultat |
| Beläggsålder för resultat | Att röra vid granskningsdatumet utan att granska; att bara granska lätta resultat | Läs granskningsanteckningarna för ett stickprov; redovisa andelen resultat vars signal faktiskt rörde sig eller förblev platt |
| Inventeringstäckning för AI-system | Att bara räkna system som teamet väljer att deklarera; att klassificera AI-funktioner som vanlig programvara | Oberoende upptäcktsgenomgång; jämför mot leverantörs- och avtalsposter |
| Verifieringsgrad för påståenden | Att citera en leverantörssida som ägaren; att logga ett påstående som verifierat utan att läsa källan | Granska ett stickprov av loggposter mot källsidan; regeln att bara ägaren räknas som källa |

En sund avläsning är en uppsättning täckningstal som stiger långsamt medan det stickprovade innehållet blir bättre: resultat som kunder känner igen, ägare som kan namnge sin tjänst och en verifieringslogg som visar påståenden som går från obekräftade till verifierade, eller som släpps.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Täckningsmått (ägare, resultat, AI-inventering) | Billiga, konkreta och tillgängliga nu | Lätta att uppfylla på papper; säger inget om kvalitet utan ett stickprov |
| Mått på resultatbelägg | Kopplar tjänstearbete till värde, i linje med ägarens uttalade betoning | Långsamma, brusiga och beroende av data som kanske inte finns än |
| Att vänta på en publicerad ITIL 5-mätetalsuppsättning | Undviker omarbete om ägaren publicerar en | Fördröjer arbete som är användbart under varje version; ägaren kanske inte publicerar någon |
| Att följa tredjepartssammanfattningar | Snabbt och detaljerat | De är oense sinsemellan och med ägaren; risk att agera på obekräftade detaljer |

Slutsatsen i klartext är att mäta grunderna nu, hålla påståendena märkta och ändra kurs när ägaren publicerar mer. Kostnaden för att ha fel är låg, eftersom ägarskap, resultat och AI-tillsyn redan var värda att göra.

## Frågor att diskutera med teamet

**1. Vilka av våra tjänster, produkter, plattformar och AI-system saknar namngiven ägare i dag?**
Börja med att lista det som finns, eftersom människor ofta hittar system som ingen minns att de tagit i bruk. Räkna med förvåning över funktioner som är påslagna som standard i leverantörsverktyg. Facilitatorn bör registrera varje lucka utan skuldbeläggning. En användbar fortsättning är att fråga vem som skulle ringas när objektet fallerar på natten.

**2. Vad tror vi om ITIL 5 som vi läst på en blogg snarare än hos ägaren?**
Att namnge föreställningar i andra hand gör verifiering till en uppgift. Team upprepar ofta procentsatser, datum och praktiknamn med säkerhet. Sortera varje föreställning i verifierad, rimlig och okänd. Be någon kontrollera var och en mot ägarens sida och registrera datumet.

**3. Vilken tjänst skulle vi kunna beskriva för en kund som ett resultat snarare än en drifttidssiffra?**
Värdefokuserad praxis börjar från resultat. Team väljer som standard tillgänglighetsprocent, så driv på för kundens mening: vad som är bättre för dem när tjänsten fungerar. Följ upp med att fråga hur vi skulle märka om resultatet blev sämre medan målet förblev grönt.

**4. Var använder vi AI i dag, och vem har tillsyn över varje användning?**
Detta prövar om styrning finns i praktiken. Svaren varierar från "ingenstans" till en lång lista som inkluderar leverantörsfunktioner. Lyssna efter tillsyn som bara är ett policydokument. En bra fortsättning är vad som skulle tala om för oss att ett AI-system hade fel.

**5. Vilket av de fem måtten vore lättast att manipulera här, och hur skulle vi märka det?**
Be gruppen utforma manipulationsdraget, inte försvara sig mot det i det abstrakta. Registrera varje drag och kontrollera det mot det parade skyddsräcket. Detta är en kort version av den kvartalsvisa manipulationsgranskningen.

**6. Vad är det minsta första mått vi kan köra det här kvartalet som hjälper oavsett vilken version vi följer?**
Små steg slår ett övergångsprogram byggt på overifierade detaljer. Typiska svar är tillgångskartan eller en AI-inventering. Välj ett med en ägare och ett datum och enas om när ägarens publikationer ska läsas om.

## Fyra perspektiv

### Produkt- och leveransteam

Ni får frågan vem som äger produkten efter release. Håll den levande tjänsten inom produktens gräns, skriv en resultatmening och placera de AI-funktioner ni bygger på samma tillgångskarta som allt annat. Visa teamets egna siffror först och håll dem borta från individuella utvärderingar.

### Service- och driftteam

Era praktiker är den fungerande grunden. Fortsätt mäta dem, registrera belägg för att de fungerar och visa hur AI-stöd övervakas där det berör ärenden, larm eller ändringar. Använd verifieringsloggen för att flagga påståenden från utbildningsmaterial innan de når en driftinstruktion.

### Ledning och styrning

Finansiera ägarskap och verifiering före ett övergångsprogram. Be om tillgångskartan, AI-inventeringen, verifieringsloggen och åldern på resultatbelägg. Behandla ett rött täckningstal som ett skäl att fråga vilken hjälp teamet behöver, inte som ett skäl att fördela skuld.

### Kunder och användare

Ni bör kunna se vad en tjänst är till för med era egna ord och få veta när AI är en del av hur ni betjänas. Be om resultatmeningen och säg om den stämmer med er upplevelse.

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på ett regionalt logistikföretag driver en kundportal, ett lagersystem och en nyligen tillagd AI-assistent som skriver utkast till svar åt servicedesken. Tjänstechefen hör att ITIL 5 betonar produkter och AI-styrning, och ledningen ber om en mätplan inom en månad. Siffrorna i det här exemplet är illustrativa.

Teamet motstår att skriva en plan utifrån presentationer. Det bygger en tillgångskarta: 11 tjänster, tre digitala produkter, två plattformar och fyra AI-aktiverade funktioner, varav en var påslagen som standard i ett leverantörsverktyg och saknade ägare. Ägartäckningen för tillgångar vid första räkningen är 75 procent. Teamet registrerar vad ägarens certifieringssida säger i en enkelsidig not och listar varje annat ITIL 5-uttalande som obekräftat.

Varje AI-funktion får en ägare, en mänsklig granskningspunkt och en post i riskregistret, vilket tar inventeringstäckningen för AI-system från 50 procent till 100 procent inom en månad. Servicedeskens chef beslutar att varje AI-skrivet svar läses av en handläggare före utskick och att handläggare registrerar väsentliga ändringar av utkast. Teamet skriver också resultatmeningar för de tre digitala produkterna, och portalens resultat ("kunder kan ta reda på var deras försändelse är utan att ringa") prövas med fem kunder, varav två beskriver det annorlunda.

Teamet fångar sedan en manipulationsrisk. En chef föreslår att höja täckningen av resultatutsagor genom att skriva en enda mening för alla elva tjänster, "förbättra den operativa effektiviteten". Skyddsräcket, ett kundstickprov, hade visat att ingen kände igen den, och teamet avvisar genvägen. Det som förblir svårt: bara två tjänster har en beläggssignal som samlas in i dag, och andelen AI-utkast som ändrats av handläggare beror på att handläggare registrerar redigeringar konsekvent. Planen för nästa kvartal är att lägga till beläggssignaler för ytterligare två tjänster.

## Agilitet, AI, automatisering och analys

### Agilitet

Behandla införandet som ständig förbättring: en liten backlog av ändringar, granskad med intressenter och justerad när ägaren publicerar mer. En praktisk vana är en regelbunden granskning av verifieringsloggen och tillgångskartan. Varningen är att ett övergångsprogram med ett enda driftsättningsdatum döljer verifieringsarbetet och upprepar mönstret med förändring i ett enda slag.

### AI

ITIL 5, så som ägaren beskriver det, omfattar AI-aktiverade miljöer. Ge varje AI-användning en ägare, en mänsklig granskningspunkt och ett sätt att upptäcka fel, och mät inventeringstäckning och kvalitetsparet. Varningen är att inte be en AI-assistent sammanfatta ITIL 5 ur minnet, eftersom den kan producera självsäkra, felaktiga detaljer. Ge den text du har läst hos ägaren och be den citera den texten.

### Automatisering

Automatisera tillgångskartan där du kan: hämta tjänste- och produktlistor från din katalog och konfigurationsdata och flagga poster utan ägare eller med utgången bekräftelse. Automatiseringen behöver också mätas: hur många flaggor som ledde till åtgärd. Varningen är att automatisering blottlägger datakvalitetsproblem, så håll en person ansvarig för att lösa varje flagga.

### Analys

Följ en handfull grundsignaler över tid och visa hur många objekt som ligger bakom varje procentsats. Använd dem för att avgöra var förbättringsinsatsen ska läggas, inte för att rangordna team. Varningen är att ett antal "namngivna ägare" kan manipuleras genom att namnge vem som helst, och att data kan vara inaktuella, så para det med bekräftelse från ägaren (se ämne 10.8, Mätetal för analys och datakvalitet).

## Branschperspektiv

**Startup.** Det kan finnas en produkt och några få personer. Namnge ägaren, skriv resultatmeningen och lista de AI-verktyg teamet använder. Hoppa över resten tills det finns ett skäl att lägga till det.

**Småföretag.** It kan vara en person eller en leverantör. Fråga leverantören vilka AI-funktioner som är påslagna i verktygen ni betalar för och för en kort lista över tjänster med deras ägare. Behandla leverantörers påståenden om vilket ramverk som helst med försiktighet.

**Storföretag.** Tillgångsbeståndet är stort och ägarskapet är spritt över team och leverantörer. Standardisera definitionen av "ägare" och "resultatutsaga", kör upptäcktsgenomgången i en rytm och för en central verifieringslogg så att team inte var för sig upprepar efterforskningen.

**Offentlig sektor.** Upphandlings-, revisions- och juridiska regler formar vad du kan anta och när. Behandla ägarens publikationer och gällande reglering som designunderlag, registrera datumet då du läste dem och använd verifieringsloggen som belägg för revisorer (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaden är mestadels personaltid: att bygga tillgångskartan, skriva resultatmeningar, bekräfta ägare och köra en upptäcktsgenomgång för AI-system. Verktygskostnaden är liten om du redan har en katalog eller konfigurationsdata. Den större kostnaden är disciplinen att hålla kartan och loggen aktuella.

Avkastningen är undvikit omarbete och bättre beslut. En övergångsplan byggd på overifierade påståenden riskerar att lägga pengar på fel ändringar. Luckor i ägarskap och AI-inventering är iakttagelser som spelar roll under varje ramverksversion, eftersom en AI-funktion utan ägare i en kundvänd process är en risk. Beskriv nyttan som ett mönster, inte som en siffra: färre system utan ägare, färre överraskningar i revisioner och tydligare samtal med kunder om värde. Mät dina egna baslinjer, till exempel ägartäckning och åldern på resultatbelägg, före och efter arbetet om du behöver siffror till ett affärscase (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att upprepa bloggpåståenden som fakta.** Märk varje påstående verifierat eller obekräftat och länka bara ägarens sidor för de verifierade.
- **Att byta etikett på tjänster till produkter.** Ändra ägarskap och livscykelansvar, annars är etiketten dekoration.
- **Täckning utan innehåll.** Ett högt täckningstal med tomma eller kopierade resultatmeningar är manipulation. Stickprova innehållet med kunder.
- **AI-styrning som ett dokument.** Namnge ägare, granskningspunkter och granskningsdatum och pröva att människor följer dem.
- **Att vänta på ramverket för att mäta.** Ägarskap, resultat och AI-tillsyn är användbara nu. Börja och justera när ägaren publicerar mer.
- **Att behandla ett certifikat som regelefterlevnad.** Mät om team kan utföra praktiken, inte vem som klarade ett prov.
- **Engångsupptäckt.** AI-funktioner dyker upp hela tiden. Kör genomgången i en rytm.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Källdisciplin | Kunskap om ITIL 5 kommer från bloggar och hörsägen | Vissa ägarsidor lästa men inte registrerade | Verifierade och obekräftade påståenden loggade med datum | Påståenden kontrolleras på nytt före varje beslut | Team delar en levande, daterad verifieringslogg |
| Ägarskap | Ägare oklara för de flesta objekt | Ägare namngivna för huvudtjänster | Tillgångskarta med en ägare för varje objekt | Ägarluckor granskas och stängs i en rytm | Ägare samordnar över team och leverantörer |
| Resultat och belägg | Enbart mål och antal | Resultatmeningar för huvudtjänster | Resultat och beläggssignal för varje tjänst | Beläggsålder granskas; inaktuella resultat tas upp igen | Resultat skrivs tillsammans med kunder och förnyas fortlöpande |
| AI-styrning | AI-användning okänd | Huvudsakliga AI-användningar listade | Ägare, granskningspunkt och riskpost per system | Fel och åsidosättanden mäts och granskas | Styrningen anpassas när AI och regler ändras |

## Checklista

- [ ] Vi läste ägarens ITIL 5-sidor och registrerade vad de säger, med datum.
- [ ] Varje ITIL 5-uttalande i våra planer är märkt verifierat eller obekräftat.
- [ ] Vi har en tillgångskarta över tjänster, produkter, plattformar och AI-system.
- [ ] Varje objekt på kartan har en ägare som har bekräftat det.
- [ ] Varje tjänst har en resultatmening och en namngiven beläggssignal.
- [ ] Vi redovisar åldern på resultatbelägg med percentiler.
- [ ] Varje AI-system har en ägare, en mänsklig granskningspunkt och en post i riskregistret.
- [ ] Vi kör en upptäcktsgenomgång för AI-funktioner enligt schema.
- [ ] Varje mått har en manipuleringsvektor och ett skyddsräcke på samma sida.
- [ ] Vi valde ett första mått med en ägare och ett datum.

## AI-prompter

**Bygg en tillgångskarta av material du klistrar in.**

```text
I will paste a list of our services, digital products, platforms, and AI-enabled
features: [paste list]. Build a table with columns: item, type (service, product,
platform, AI system), owner (use only what I provided; write "unknown"
otherwise), and one question I should ask about it. Ask clarifying questions first
if the list is ambiguous. Do not invent items or owners. List your assumptions at
the end.
```

**Sortera ITIL 5-uttalanden i verifierade och obekräftade.**

```text
Below are statements we have heard about ITIL 5: [paste statements]. Below is text
I copied from the owner's published pages: [paste owner text and the date I
read it]. For each statement, say whether the owner text supports it, contradicts
it, or says nothing, and quote the supporting words exactly. Do not use outside
knowledge and do not invent dates or practice names. List your assumptions and
what you could not judge.
```

**Skriv utkast till resultatmeningar och beläggssignaler för granskning.**

```text
Our services are: [list services with one line each on who uses them]. For each,
propose a one-sentence outcome in the customer's words and two candidate evidence
signals that we may already collect from [list data sources]. Mark every outcome
as a draft for customer review. Do not invent benchmark values or results. List
your assumptions and the questions I should ask customers.
```

**Granska manipulationsrisken för de fem måtten.**

```text
We plan to report these measures: [paste measure names and definitions]. Our
context: [team size, culture, tools]. For each measure, list realistic ways it
could look better without helping anyone, propose a guardrail, and say how that
guardrail could be gamed. Do not invent statistics or compliance claims. List your
assumptions.
```

## AI-färdigheter

- [ITIL 5](../../../../skills/itil-5/SKILL.md): använd för att bygga en tillgångskarta, en gapanalys och en fasindelad införandeplan, med ITIL 5-påståenden flaggade som obekräftade.
- [Maturity models](../../../../skills/maturity-models/SKILL.md): använd för att göra om mognadstabellen till en teamsjälvskattning.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta ämnet som behandlar ett mätetal och dess parade skyddsräcke.

## Viktigaste slutsatser

- Ett uttalande om ITIL 5 är verifierat bara om ägarens egen publikation säger det, och datumet då du läste det bör registreras.
- Ägarens uttalade teman digitala produkter, AI-aktiverade miljöer och mätbara resultat kan mätas i dag som ägarskap, resultatbelägg och AI-tillsyn.
- Täckningstal är lätta att uppfylla på papper, så stickprova innehållet och ha ett skyddsräcke bredvid varje.
- Fortsätt mäta ITIL 4-praktiker som fungerar och ändra ett mått bara när ägarens vägledning och dina belägg är överens.
- Börja med ett mått och en tillgångskarta och justera när ägaren publicerar mer.

## Referenser och vidare läsning

1. PeopleCert, ITIL Foundation Bridge (Version 5), certification page, accessed 20 October 2026, https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
2. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
3. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
4. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
5. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
6. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
7. Wikipedia, [Product management](https://en.wikipedia.org/wiki/Product_management).
8. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
