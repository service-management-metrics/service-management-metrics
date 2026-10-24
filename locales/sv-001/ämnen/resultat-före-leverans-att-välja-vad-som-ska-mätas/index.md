# Resultat före leverans: att välja vad som ska mätas

**Ett bra tjänste- eller leveransmätetal beskriver en förändring i en kunds liv eller i en tjänsts hälsa, så välj mått genom att fråga vad som förändrades för någon, och behandla antal av aktivitet och leverans som stödjande belägg i bästa fall.**

## Översikt och motiv

De flesta instrumentpaneler börjar med det som är lätt att räkna: stängda ärenden, driftsatta ändringar, avslutade berättelser, besvarade samtal. De är redan tidsstämplade i ett verktyg och inom teamets kontroll. Ingen av dem säger om någon har fått det bättre.

Fyra ord håller isär saken. **Aktivitet** är nedlagd möda: arbetade timmar, hållna möten, ringda samtal. **Leverans** är det arbetet producerade: en release, ett löst ärende, en publicerad artikel. **Resultat** är den förändring leveransen möjliggjorde för någon: en kund klarar en uppgift på halva tiden, en klinik öppnar i tid, ett återkommande problem slutar återkomma. **Effekt** är den långsiktiga påverkan på organisationens mål, till exempel behållna kunder eller lägre kostnad för att betjäna. I ITIL 4 (ramverkets utgåva från 2019, publicerad av AXELOS och numera ägd av PeopleCert) är en leverans (output) en påtaglig eller icke påtaglig produkt av en aktivitet, och ett resultat (outcome) är ett utfall för en intressent som möjliggörs av en eller flera leveranser.

[ITIL](https://en.wikipedia.org/wiki/ITIL) tillför en andra idé som fungerar som prov för varje mätetal: värde [samskapas](https://en.wikipedia.org/wiki/Co-creation) av tjänsteleverantören och tjänstekonsumenten, och levereras inte av den ena till den andra. Det följer tänkandet bakom [tjänstedominant logik](https://en.wikipedia.org/wiki/Service-dominant_logic), marknadsföringssynen att värde uppstår i användning, när kunden tillämpar en leverantörs förmågor på sina egna mål. Ett mätetal som mäts helt på leverantörens sida kan inte bevisa värde. Ett team kan stänga varje ärende och leverera varje release i tid medan användarna inte tycker att deras arbete blivit lättare.

Den agila synen når samma plats på en annan väg. Principerna bakom manifestet för [agil programvaruutveckling](https://en.wikipedia.org/wiki/Agile_software_development) säger att fungerande programvara är det främsta måttet på framsteg, och att enkelhet, konsten att maximera mängden arbete som inte behöver göras, är väsentlig. Ingen av dem belönar en större hög av leveranser. Båda pekar på att leverera något som fungerar för sina användare och inte bygga det som ingen behöver.

Leverans- och aktivitetsmätetal är inte fel. De styr flöde, kapacitet och kostnad, och senare ämnen använder dem flitigt (se ämne 2.1, Flödesmått). Misstaget är att låta dem stå i för värde. Ett [fåfängemätetal](https://en.wikipedia.org/wiki/Vanity_metric) är en siffra som är lätt att rapportera och nästan alltid stiger: totalt antal registrerade användare, ackumulerade hanterade ärenden, funktioner levererade hittills. Det får ett team att se upptaget ut och säger ingen vad som ska göras härnäst. Provet: kan den här siffran gå upp medan kundens situation blir sämre?

Resultatmätetal är svårare. De rör sig långsamt, beror på faktorer utanför teamets kontroll och är brusiga. En ändring av ett flöde för lösenordsåterställning kan ta veckor att synas i kontaktvolymen, som också påverkas av en marknadsföringskampanj. Svaret är att välja resultat noggrant, para dem med de leveransmått som teamet styr efter dag för dag, och vara ärlig om hur stor del av rörelsen teamet kan göra anspråk på.

En **ledande indikator** är ett mått som rör sig före resultatet du bryr dig om och som kan påverkas tidigt, till exempel andelen nya tjänster med en testad driftinstruktion för support. En **eftersläpande indikator** redovisar resultatet i efterhand, till exempel antalet större incidenter eller kundbortfallet. Ekonomer använder samma parning och klassar en [ekonomisk indikator](https://en.wikipedia.org/wiki/Economic_indicator) som ledande, sammanfallande eller eftersläpande. Team behöver båda: eftersläpande indikatorer säger om du hade rätt, och ledande indikatorer ger dig något att agera på medan det ännu finns tid. En ledande indikator är bara en hypotes tills du har kontrollerat, över flera perioder, att den verkligen rör sig före resultatet.

Resultatmått är ett partiellt botemedel mot manipulation (se ämne 1.2, Goodharts lag och mätetalens psykologi). Ett mått nära det kunderna upplever är svårare att förbättra utan att hjälpa dem, och avståndet från resultatet är där manipulation lever. Ramverk som hjälper till med valet behandlas separat (se ämne 1.7, Ramverk för mätning).

## Nyckelprinciper

- **Börja från resultatet och arbeta bakåt.** Namnge förändringen du vill ha för en kund, en tjänst eller organisationen, fråga sedan vilka belägg som skulle visa den och sedan vilka ledande tecken som skulle synas tidigare.
- **Värde samskapas, så ta med konsumentens sida.** Minst ett mått i varje uppsättning bör komma från dem som använder tjänsten: deras framgång, ansträngning eller upplevelse, snarare än enbart leverantörens register.
- **Håll kedjan synlig.** Visa aktivitet, leverans, resultat och effekt som en kedja. Team styr efter leveranser och ledande indikatorer, och bedömer sig själva efter resultat.
- **Para, ersätt aldrig.** Ett resultatmått förklarar varför ett leveransmått spelar roll, och ett leveransmått förklarar vad man ska göra åt ett resultatmått. Ingen av dem fungerar ensam.
- **Föredra mått som kan falla såväl som stiga.** Ett tal som bara växer är ett antal, inte en signal.
- **Behandla ledande indikatorer som hypoteser.** Kontrollera att de förutsäger resultatet och släpp dem när de inte gör det.
- **Var ärlig om tillskrivning.** Resultat har många orsaker. Säg vad teamet påverkar och vad det bara observerar.

## Mätetalsdefinitioner

De fem mätetalen nedan är valda för att flytta en mätuppsättning mot resultat. De är exempel på formen att använda, och senare ämnen definierar de tjänste- och leveransmått som fyller dem. De illustrativa tröskelvärdena i det här ämnet är inte riktmärken.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Resultattäckning | Andel rapporterade mätetal som i mätetalsregistret är kopplade till ett skrivet resultat för en namngiven kund eller tjänst | mätetal med en skriven resultatkoppling / mätetal som rapporterats under perioden. Räknar bara mätetal som visas i en regelbunden rapport; utesluter arbetsvymått som ett enskilt team för | procent | Mätetalsregister (se ämne 1.4, Styrning och ägarskap av mätetal) | Mätning och rapportering; ständig förbättring | Produktmål och leveransmål | Kvartalsvis |
| Funktionsanvändning | Andel berättigade användare som använder en ny eller ändrad förmåga inom ett angivet fönster efter release | unika berättigade användare som använde förmågan inom 30 dagar efter release / unika berättigade användare under den perioden. Klockan startar vid allmän tillgänglighet; utesluter interna testkonton och användare som inte kunde nå förmågan | procent | Produktanalys, användningsloggar för tjänstekatalogen | Tjänstedesign; releasehantering | Återkoppling från intressentgranskning; produktresultatmått | Månadsvis i 3 månader efter release, därefter kvartalsvis |
| Grad av återkommande kontakter | Andel kontakter från en användare om samma tjänst inom ett angivet fönster efter att en tidigare kontakt stängts | nya kontakter från samma användare om samma tjänst inom 14 dagar efter en stängd kontakt / stängda kontakter under perioden. Klockan startar vid stängning; utesluter kontakter som öppnats som planerade uppföljningar | procent | Kontakt- och ärendehistorik i ITSM-verktyget | Servicedesk; incidenthantering | Undkomna fel; definition av klart | Månadsvis |
| Valideringsgrad för ledande indikatorer | Andel använda ledande indikatorer vars rörelse har föregått rörelsen hos deras kopplade eftersläpande indikator under granskningsperioden | ledande indikatorer med ett bekräftat försprång före sin eftersläpande indikator / ledande indikatorer i bruk. Bedöms av teamet i en dokumenterad granskning, på minst fyra perioders data; utesluter indikatorer med färre än fyra perioder | procent | Mätetalsregister och trendhistorik | Ständig förbättring | Åtgärder från retrospektiv om experiment | Två gånger per år |
| Genomförandegrad för nyttogranskningar | Andel finansierade ändringar eller förbättringar vars avsedda resultat granskades mot sitt mått efter den överenskomna fördröjningen | ändringar med en slutförd resultatgranskning inom 90 dagar efter det planerade granskningsdatumet / ändringar vars granskningsdatum föll inom perioden. Utesluter ändringar som drogs tillbaka före release | procent | Ändringspost, förbättringsregister, granskningsanteckningar | Ständig förbättring; ändringsmöjliggörande | Intressentgranskning; granskning av produktinkrement | Kvartalsvis |

Resultattäckning och genomförandegrad för nyttogranskningar mäter själva mätpraktiken och är lätta att uppfylla med pappersarbete. Funktionsanvändning och grad av återkommande kontakter ligger närmare kunden och är de som mest sannolikt ändrar ett beslut.

## Rekommendationer

### Börja från resultat

**1. Skriv resultatet som en mening om en person eller en tjänst.** "Personalen kan återställa sitt eget lösenord utan att ringa servicedesken" är ett resultat. "Driftsätt den nya identitetsportalen" är en leverans. Placera meningen överst i mätetalets post i registret och välj sedan måttet. Om du inte kan skriva meningen är du inte redo att välja en siffra.

**2. Rita kedjan från aktivitet till effekt.** För varje mål, skissa fyra rutor: vad teamet gör, vad det producerar, vad som förändras för användaren och vad det förändrar för organisationen. Placera varje kandidatmätetal i en ruta. En uppsättning full till vänster och tom till höger är signalen att leta efter resultatbelägg.

**3. Använd provet för samskapande av värde på varje mätetal.** Fråga: vems syn på värde visar det här, och finns konsumentens syn någonstans i uppsättningen? Med ITIL:s ord har en tjänsterelation en leverantör och en konsument, och värde realiseras i konsumentens användning. Ett mått på svarstid från leverantörens klocka behöver en följeslagare från konsumentens sida, till exempel om användaren kunde fortsätta sitt arbete (se ämne 6.2, Överenskommelser om upplevelsenivå).

**4. Be om ett beslut, inte en rapport.** För varje kandidatmätetal, skriv det beslut någon skulle fatta om det rörde sig. Avveckla varje mått utan kopplat beslut. Det är det snabbaste filtret mot fåfängemätetal och hindrar en instrumentpanel från att växa av sig själv.

### Para leveranser med resultat

**5. Välj ett resultatmått per större leveransmått.** Om du rapporterar driftsättningar, para dem med ett mått på vad driftsättningarna förändrade för tjänsten, till exempel misslyckade ändringar eller användarsynliga incidenter (se ämne 2.8, DORA-mätetal). Om du rapporterar lösta ärenden, para dem med återkommande kontakter. Paret bör ligga på samma sida. Ett team som bara ser leverans optimerar för leverans.

**6. Välj resultatmått som teamet kan påverka, och namnge dem det bara observerar.** Ett team kan påverka den egna tjänstens återkommande kontakter och användningen av de egna funktionerna. Det kan bara observera företagets intäkter. Båda hör hemma i bilden, men mål och förbättringsarbete knyts till de påverkade måtten. Att namnge skillnaden förhindrar skuldbeläggning för rörelser som teamet inte kunde ha orsakat.

**7. Använd ersättningsmått öppet.** Många resultat går inte att mäta direkt. Välj ett ersättningsmått, säg att det är ett och säg vad det missar. Graden av återkommande kontakter är ett ersättningsmått för "problemet var verkligen löst", och en kort enkät eller en läsning av fria kommentarer kan kontrollera att det fortfarande säger sanningen (se ämne 6.1, Mätetal för kundnöjdhet).

### Bygg ledande och eftersläpande par

**8. Para varje eftersläpande indikator med minst en ledande indikator du kan agera på.** Större incidenter är en eftersläpande indikator, och andelen tjänster med testade återställningsinstruktioner kan ligga före dem. Den ledande indikatorn ger teamet något att göra den här månaden. Välj ledande indikatorer du tror på av ett skäl du kan skriva ned, och pröva sedan tron.

**9. Validera ledande indikatorer med en tillbakablick.** Två gånger per år, plotta varje ledande indikator mot sin eftersläpande partner över minst fyra perioder och fråga om rörelsen kom först. Där sambandet är svagt, ändra eller släpp den ledande indikatorn.

**10. Använd servicenivåmål där resultatet har ett tydligt användarvänt mått.** En väl vald servicenivåindikator (SLI) är en ledande signal för användarnas nöjdhet, och ett servicenivåmål (SLO) anger hur bra den behöver vara (se ämne 5.2, SLI:er, SLO:er och felbudgetar). De fungerar bäst när indikatorn väljs ur användarens synvinkel, inte maskinens.

### Håll valet ärligt

**11. Slut loopen med resultatgranskningar.** När en ändring eller förbättring finansieras, registrera det resultat den är avsedd att ge, måttet och datumet då någon ska titta. Håll granskningen även om svaret är obekvämt. Utan granskningar är resultatspråket dekoration (se ämne 6.5, Värdeförverkligande och affärsresultat).

**12. Behåll leveransmått i arbetsvyn och säg vad de är till för.** Flödes-, kapacitets- och kostnadsmått är teamets instrument, inte dess styrkort. Cykeltid berättar var arbete väntar (se ämne 2.2, Ledtid, cykeltid och flödeseffektivitet). Rapporterade uppåt utan ett resultat bredvid inbjuder de till manipulation.

## Manipuleringsvektorer och skyddsräcken

Att röra sig mot resultat tar inte bort manipulation. Det ändrar dess form: resultat kan omdefinieras, ersättningsmått kan styras och granskningar kan hoppas över.

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Resultattäckning | Att skriva en vag resultatmening ("förbättra tjänsten") för varje mätetal så att kopplingen finns på papper | Stickprova registret: en mening måste namnge en person eller tjänst och en förändring; kontrollera att ett beslut fattades på grund av måttet |
| Funktionsanvändning | Att räkna en påtvingad eller automatisk första användning som införande; att krympa den berättigade användargruppen; att göra förmågan till standard så att den "används" utan att väljas | Uppgiftsslutförande eller nöjdhet bland användare av förmågan; kvarstående användning efter 30 och 90 dagar; läs fria kommentarer |
| Grad av återkommande kontakter | Att be användare väcka en ny förfrågan via en annan kanal; att stänga kontakten som dubblett av en orelaterad; att förlänga stängningen för att undvika ny kontakt inom fönstret | Kontakter per kanal för samma tjänst; stickprovsgranskning av stängningsanteckningar; användarrapporterad andel "problemet löst" |
| Valideringsgrad för ledande indikatorer | Att förklara ledande indikatorer giltiga efter en informell titt; att välja indikatorer som trivialt följer resultatet | Skriven granskningspost med de plottade data; bjud in någon utanför teamet att utmana ett resultat per cykel |
| Genomförandegrad för nyttogranskningar | Att hålla en granskning bara till namnet, eller sätta det avsedda resultatet i efterhand så att det alltid nås | Jämför resultatet i granskningen med uttalandet som gjordes när ändringen finansierades; följ andelen granskningar som ledde till en ändrad plan |

En sund avläsning visar resultatmått som ibland gör besviken, granskningar som ibland avslutar en ändring och ledande indikatorer som ibland släpps. En uppsättning där varje resultat nås och varje ledande indikator bekräftas har förmodligen trimmats för att vara så.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Leverans- och aktivitetsmått | Snabba, billiga och inom teamets kontroll; bra för flödes- och kapacitetsbeslut | Lätta att blåsa upp; säger ingenting om huruvida någon hade nytta |
| Resultatmått | Ligger nära det kunder och organisationen värdesätter; svårare att förbättra utan att hjälpa | Långsamma, brusiga och påverkade av faktorer utanför teamets kontroll |
| Ledande indikatorer | Ger tidig varning och något att agera på | Kan vilseleda om kopplingen till resultatet antas snarare än prövas |
| Eftersläpande indikatorer | Redovisar vad som verkligen hände | Kommer för sent för att ändra den här periodens resultat |
| Ersättningsmått för resultat | Gör svårmätta resultat synliga | Kan glida bort från det de står för och inbjuder till surrogation |
| En liten resultatledd uppsättning | Lätt att minnas och diskutera; fokuserar insatsen | Kan missa ett problem utanför de valda resultaten |
| En bred balanserad uppsättning | Täcker mer av tjänsten | Späder ut uppmärksamheten; varje mått får mindre granskning |

Behåll ett litet antal resultatmått som hela gruppen kan rabbla, stöd vart och ett med de leverans- och ledande mått som förklarar det, och se över uppsättningen när strategin ändras. De balanserade tillvägagångssätten som förknippas med [balanserat styrkort](https://en.wikipedia.org/wiki/Balanced_scorecard) och med [mål och nyckelresultat](https://en.wikipedia.org/wiki/Objectives_and_key_results) försöker båda koppla det dagliga arbetet till de resultat som spelar roll. De misslyckas på samma sätt när nyckelresultat blir en lista med leveranser med en procentsats bredvid.

## Frågor att diskutera med teamet

**1. Vilka av våra fem mest framträdande mätetal kan stiga medan våra kunder har det sämre?**
Skriv de fem på en tavla och ställ frågan om var och en. Ett antal stängda ärenden kan till exempel stiga medan återkommande kontakter också stiger. Facilitatorn bör anteckna fallen där svaret är ja, eftersom de är fåfängemätetalen. Avsluta med att fråga vilket resultatmått som skulle sitta bredvid var och en.

**2. Hur ser en bra vecka ut för en kund till den här tjänsten, med deras ord?**
Fråga människor som pratar med kunder, och undvik teamets eget språk. Svaren blir resultatmeningar och avslöjar ofta saker som ingen mäter, till exempel att slippa förklara ett problem två gånger. Fånga tre meningar och fråga vilka som kan mätas, även med ersättningsmått.

**3. Vilka av våra ledande indikatorer har vi någonsin kontrollerat mot det resultat de ska förutsäga?**
Välj en indikator och plotta den mot sin eftersläpande partner för de senaste perioderna. Fråga vad ni ser och hur säkra ni är. Om sambandet är svagt, diskutera vad den ska ersättas med. Behandla en släppt indikator som ett normalt resultat av lärande, inte ett misslyckande.

**4. Var tar vårt team åt sig äran för ett resultat det bara observerar?**
Titta på mätetalen i rapporter till ledningen. Vilka beror på faktorer utanför teamets kontroll, till exempel säsong, en kampanj eller en leverantör? Enas om ett enkelt sätt att ange vad teamet påverkar och vad det observerar. Det förbereder teamet för dagen då ett resultat rör sig av skäl det inte orsakade.

**5. Vad levererade eller ändrade vi de senaste två kvartalen, och granskade någon om det fungerade?**
Lista ändringarna på en tavla och markera dem med en granskningspost. För de andra, fråga vilket resultat som förväntades och hur ni kan ta reda på det nu. Motstå jakten på syndabockar. Syftet är att starta vanan, även om de första granskningarna kommer sent.

**6. Vilka leveransmått bör flyttas tillbaka till vår arbetsvy?**
Vissa mått är användbara för teamet och vilseledande i en rapport. Fråga vilka som är vilka, och vad var och en skulle behöva bredvid sig för att stanna kvar i en ledningsrapport. Enas om ett mått att flytta det här kvartalet. Att flytta ett mått är ett tecken på mognad, inte en reträtt från öppenhet.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam frestas av leverans eftersom deras verktyg rapporterar den som standard. Botemedlet är att göra belägg för användning och resultat till en del av definitionen av klart och intressentgranskningen. En funktion som ingen använder är en läxa, och att få veta det tidigt är en fördel med agilt arbetssätt. Team behåller flödesmått i sin arbetsvy och parar dem med användnings- och felmått (se ämne 2.5, Mätetal för leveransprognoser och planering).

### Service- och driftteam

Serviceteam mäts på hantering: besvarade samtal, stängda ärenden, tid till lösning. De spelar roll för planering och kostnad, och de säger lite om huruvida användarens problem försvann. Driftteam bör lägga till återkommande kontakter, återkomst av samma orsak och användarrapporterad lösning bredvid hastighetsmått, och bör behandla ett ökande antal enkla ärenden med misstänksamhet (se ämne 3.1, Mätetal för servicedesk). Ledande indikatorer som användning av kunskapsartiklar och testade driftinstruktioner ger teamet något att agera på mellan incidenter.

### Ledning och styrning

Det ledare ber att få se lär organisationen vad som spelar roll. Be om resultat, acceptera att de är långsammare och brusigare och finansiera de granskningar som kontrollerar dem. Styrande organ bör leta efter en kort, stabil uppsättning resultatmått, var och en med en angiven ägare och en förteckning över de beslut den gett underlag för (se ämne 1.4, Styrning och ägarskap av mätetal). En ledare som frågar "vad lärde vi oss?" får bättre data än en som frågar "varför är det här rött?"

### Kunder och användare

Kunder upplever resultat direkt och ser sällan leveransantal. De är det slutliga provet för uppsättningen: låter tjänsten dem fortsätta med det de kom för att göra? Korta enkäter, fria kommentarer och observation av verkliga uppgifter är bättre belägg än något mått från leverantörssidan. Kunder har också en roll i att samskapa värde, vilket betyder att hur väl de är informerade, ges möjlighet och blir hörda påverkar resultaten (se ämne 6.3, Mätetal för tjänsteanvändning och katalog).

## I praktiken: ett exempel från tjänstehantering

En medelstor nätbutik driver ett internt plattformsteam som erbjuder en självbetjäningstjänst för miljöetablering till omkring 40 produktteam, med stöd av en liten servicedesk. Alla siffror i det här exemplet är illustrativa.

Månadsrapporten visar 310 uppfyllda förfrågningar (upp från 240), en mediantid för uppfyllande på 6 timmar och 12 funktioner levererade under kvartalet. Ledningen är nöjd. Plattformschefen märker att kontakterna till desken om etablering också har ökat, och ber teamet ställa leveranserna mot det resultat de hoppades på: produktteam som får en miljö utan att vänta eller be om hjälp.

Kedjeövningen visar att teamet hade mätt aktivitet och leverans men inget resultat. De lägger till tre. Det första är graden av återkommande kontakter: 22 procent av etableringskontakterna följs av en ny kontakt om samma tjänst inom 14 dagar. Det andra är funktionsanvändning för de tre nyaste funktionerna, som ligger på 9 procent, 14 procent och 61 procent av de berättigade teamen efter 30 dagar. Det tredje, en ledande indikator, är andelen förfrågningar som slutförs utan ett mänskligt steg, för närvarande 48 procent. De antar som hypotes att den bör driva graden av återkommande kontakter nedåt.

De beslutar att pausa två planerade funktioner som liknar de två med låg användning och ägna kvartalet åt den vanligaste orsaken till återkommande kontakter, ett otydligt felmeddelande när en kvot överskrids. De registrerar det avsedda resultatet, en grad av återkommande kontakter under 15 procent, och sätter ett granskningsdatum om 90 dagar.

Manipulationsrisken dyker upp i månad två. Graden av återkommande kontakter sjunker till 11 procent, vilket ser underbart ut. Ett stickprov på 25 stängda kontakter visar att servicedesken hade börjat be användare använda en chattkanal för uppföljningsfrågor, och chattkanalen räknas inte i ITSM-verktyget. Teamet lägger till kontakter per kanal i rapporten, tar med chattutskrifter i stickprovet och finner att den sammanlagda graden är 17 procent. Det är en verklig förbättring, mindre än den första avläsningen. I granskningen rapporterar chefen 17 procent, noterar att den ledande indikatorn steg från 48 till 57 procent i takt, och registrerar att hypotesen har hållit för två av de fyra perioder som krävs för att kalla den validerad.

## Agilitet, AI, automatisering och analys

### Agilitet

Kontinuerlig leverans gör det billigt att släppa små ändringar och se om ett användarresultat rörde sig. En bra praxis är att ange det avsedda resultatet och signalen som skulle visa det innan arbetet startar, och att kontrollera signalen efter release tillsammans med intressenter. Varningen är att täta releaser frestar team att räkna releaser som framsteg, vilket åter är leverans.

### AI

AI-verktyg höjer leveransen lätt: mer kod, fler utkast, fler svar. Resultatfrågan är om användarna är bättre betjänade, så para leveransantal med ett resultat som grad av återkommande kontakter eller uppgiftsframgång för den AI-stödda vägen. Varningen är att ett resultat som förbättras medan AI-användningen ökar fortfarande kan ha andra orsaker, så undvik att påstå att verktyget orsakade det utan en jämförelse.

### Automatisering

Automatisera insamlingen av resultatsignaler som redan finns, till exempel återkommande kontakter, avbrott eller tid till första användbara svar. Automatisering av själva arbetet bör mätas efter vad den frigör och vad den förstör. Varningen är att en automatiserad uppgift som körs ofta ser produktiv ut även när dess resultat aldrig används.

### Analys

Resultatdata är vanligtvis långsammare och brusigare än leveransdata. Använd ledande indikatorer för att styra och validera dem mot det långsammare resultatet då och då. Varningen är att korrelation mellan en leverans och ett resultat i förra årets data inte betyder att leveransen fortsätter att förutsäga det. Med ITIL 5:s ord gör ägarens uttalade fokus på mätbara resultat det här ämnet till basen för ämne 1.8, Mätning av ITIL 5 och värdeutfall.

## Branschperspektiv

**Startup.** Resultat finns nära till hands: grundare kan prata med kunder och se om de stannar. Risken är att bara mäta tillväxt i användare och funktioner, som är fåfängemätetal tills retention och uppgiftsframgång syns. Välj ett resultatmått som kunder skulle känna igen och kontrollera det varje vecka.

**Småföretag.** Siffrorna är för små för statistik, så föredra direkta samtal, en handfull följda fall och en kort lista med ersättningsmått. Var försiktig med leverantörers instrumentpaneler som redovisar sin egen aktivitet som om den vore ditt resultat.

**Storföretag.** Skala inbjuder till leveransrapportering, eftersom leveranser är jämförbara över många team och resultat inte är det. Motstå att tvinga en resultatdefinition på olikartade tjänster. Enas om en liten uppsättning gemensamma resultatmeningar, låt varje tjänst välja sina mått och håll registret aktuellt.

**Offentlig sektor.** Lagstadgade skyldigheter, finansieringsregler och servicenivåer fastställer vissa mått i förväg, ofta leveranser som handlagda ärenden. Uppfyll dem och lägg till resultatmått för medborgare och personal bredvid, till exempel om en person fick den hjälp hen kom för. Offentlig rapportering gör ärliga resultatdata mer värdefulla och mer känsliga, så enas i förväg om hur korrigerade siffror ska förklaras (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaden för att skifta mot resultat är mestadels möda och tålamod: att skriva resultatmeningar, lägga till några mått som en kort enkät eller en användningshändelse och hålla resultatgranskningar. Verktygskostnaden är måttlig, eftersom de flesta ersättningsmått kan byggas på data som redan samlas in. Den större kostnaden är fördröjning, eftersom resultatdata kommer långsamt och ledare måste vänta på dem.

Avkastningen kommer från bättre val av var pengarna läggs. Arbete som ingen använder är dyrt, och det är också att förbättra ett hanteringsmått medan den underliggande orsaken till återkommande kontakter finns kvar. Mönstret att vänta sig är färre funktioner som byggs och lämnas oanvända, mer uppmärksamhet på återkommande orsaker och en starkare berättelse för finansiering. Lova ingen procentsats. Mät dina egna baslinjer, till exempel användning av senaste releaser och återkommande kontakter, och jämför efter några kvartal (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att räkna det som är lätt.** Ärende- och driftsättningsantal finns i varje verktyg, vilket gör dem till standard. Lägg till minst ett resultatmått för varje tjänst innan du lägger till ytterligare ett leveransantal.
- **Resultatteater.** Att skriva en resultatmening för varje mätetal utan att någonsin kontrollera den. Granska ett stickprov av registret och fråga vilket beslut varje mått gav underlag för.
- **Oprövade ledande indikatorer.** Att behandla en rimlig signal som bevis. Plotta den mot det eftersläpande resultatet minst två gånger per år och släpp dem som inte leder.
- **Resultat som personliga mål.** Att tilldela en person ett resultatmått inbjuder till det beteende som beskrivs i ämne 1.2. Knyt resultat till team och tjänster.
- **Att bara mäta leverantörens sida.** En uppsättning av interna klockor och antal missar vad kunder känner. Ta med ett konsumentmått för varje tjänst.
- **Att aldrig granska.** Att finansiera ändringar på utlovade nyttor och aldrig kontrollera dem. Sätt ett granskningsdatum på ändringsposten när den godkänns.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Att välja mått | Antal som finns tillgängliga i verktyg | Vissa team skriver resultatmeningar | Varje rapporterat mätetal har ett skrivet resultat och ett beslut som det ger underlag för | Resultat- och leveransuppsättningar granskas tillsammans varje kvartal | Resultatmeningar samordnade över team, leverantörer och kunder, och reviderade när strategin ändras |
| Ledande och eftersläpande indikatorer | Bara eftersläpande resultat, rapporterade sent | Några ledande indikatorer valda av intuition | Ledande och eftersläpande indikatorer parade och registrerade i registret | Ledande indikatorer valideras mot resultat två gånger per år | Indikatorer delas med leverantörer och kunder; uppsättningen utvecklas med belägg |
| Resultatgranskningar | Ingen granskning av om ändringar fungerade | Enstaka granskningar efter stora ändringar | Granskningsdatum registrerat för varje finansierad ändring | Granskningar slutförs, med resultat som matar nästa plan | Granskningar är rutin, tvärteamsbaserade och inkluderar kundinput |
| Belägg från konsumentsidan | Anekdoter | Enkät för vissa tjänster | Ett konsumentmått för varje tjänst | Konsumentbelägg följs över tid och läses tillsammans med driftdata | Kunder hjälper till att definiera och tolka resultatmått |

## Checklista

- [ ] Varje tjänst har minst en resultatmening som namnger en person eller tjänst och en förändring.
- [ ] Varje rapporterat mätetal är placerat i kedjan från aktivitet till effekt.
- [ ] Varje mätetal har ett namngivet beslut som det ger underlag för; de utan avvecklas.
- [ ] Varje leveransmått i en rapport har ett resultatmått bredvid.
- [ ] Varje tjänst har minst ett konsumentmått.
- [ ] Varje eftersläpande indikator har en ledande indikator, med ett skrivet skäl till kopplingen.
- [ ] Ledande indikatorer kontrolleras mot resultat minst två gånger per år.
- [ ] Ersättningsmått är märkta som ersättningsmått, med vad de missar.
- [ ] Varje finansierad ändring har ett avsett resultat, ett mått och ett granskningsdatum.
- [ ] Resultatmått knyts till team och tjänster, aldrig till individer.

## AI-prompter

**Förvandla ett leveransmätetal till en resultatledd uppsättning.**

```text
Our team is [team name], which provides [service or product] to [customers or
users]. We currently report [list of output or activity metrics]. We want to
move toward outcomes. For each metric, suggest an outcome sentence about a
customer or service that it might support, and propose one outcome measure and
one leading indicator we could consider. For each suggestion, say what the
measure would miss and how it could be gamed. Do not invent benchmark values
or sources. List your assumptions and the facts you need from me.
```

**Pröva om en ledande indikator är trovärdig.**

```text
We use [leading indicator] as a leading indicator for [lagging outcome measure].
Here are [number] periods of data for both, pasted below, with notes on
anything that changed during that time: [data and notes]. Describe whether the
leading indicator appears to move before the lagging one, and what other
explanations are consistent with the data. Do not claim causation. List your
assumptions, the limits of this much data, and what additional data would help.
```

**Skriv ett utkast till en resultatgranskning av en nylig ändring.**

```text
We made this change: [description], approved on [date], with the intended
outcome [outcome sentence] and measure [measure]. Current data: [data]. Draft
an outcome review agenda and a short summary structure that compares the
intended outcome with what we see, separates what the team influenced from what
it only observed, and lists questions for users. Do not judge success beyond
what the data supports. List your assumptions and any data gaps.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta ämnet och följemätetalet för resultat till ett leveransmätetal du är på väg att rapportera.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett nytt mätetalsämne parar sina leveransmått med resultat och skyddsräcken.

## Viktigaste slutsatser

- Aktivitet, leverans, resultat och effekt är olika saker, och en instrumentpanel med de två första kan inte visa värde.
- I ITIL samskapas värde med konsumenten, så varje uppsättning behöver ett mått från konsumentens sida.
- Para leveranser med resultat, och eftersläpande indikatorer med ledande som du har prövat.
- Var tydlig med vad teamet påverkar och vad det bara observerar.
- Granska finansierade ändringar mot deras avsedda resultat och låt utfallet ändra planen.
- Resultatmått minskar manipulation utan att avsluta den, så vart och ett behöver fortfarande ett skyddsräcke.

## Referenser och vidare läsning

1. Seiden, J., *Outcomes Over Output: Why Customer Behavior Is the Key Metric for Business Success*, Sense & Respond Press, 2019.
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
3. Vargo, S. L., and Lusch, R. F., "Evolving to a New Dominant Logic for Marketing," *Journal of Marketing*, 68(1), 2004.
4. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January to February 1992.
5. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
9. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Co-creation](https://en.wikipedia.org/wiki/Co-creation).
12. Wikipedia, [Service-dominant logic](https://en.wikipedia.org/wiki/Service-dominant_logic).
13. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
14. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
15. Wikipedia, [Economic indicator](https://en.wikipedia.org/wiki/Economic_indicator).
16. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
17. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
