# Tjänstekostnad och enhetsekonomi

**Att veta vad en tjänst kostar, och vad den kostar per enhet av något användare värdesätter, låter ett team göra ärliga val om kvalitet, hastighet och utgifter, så länge fördelningsreglerna är rättvisa, synliga och aldrig används för att straffa de människor som driver tjänsten.**

## Översikt och motiv

Varje it-tjänst kostar pengar: människor, moln och hosting, licenser, maskinvara, leverantörer och andelen av delade plattformar den använder. Ledare frågar vad en tjänst kostar, om den är värd det och vad som ändras om efterfrågan fördubblas. Team ställer samma frågor från andra sidan: vad har vi råd att göra, och vad avstår vi från? Utan tal förvandlas dessa samtal till argument om vems budget som är vems.

[Kostnadsredovisning](https://en.wikipedia.org/wiki/Cost_accounting) är praktiken att mäta, registrera och analysera kostnader. För en tjänsteorganisation är de centrala uppgifterna att tillskriva kostnader till tjänster, att uttrycka kostnad per enhet av något meningsfullt och att prognostisera hur kostnaden ändras med volymen. ITIL:s praktik ekonomisk styrning av tjänster täcker samma område, och FinOps-praktiken för molnutgifter tar det längre (se ämne 7.6, Mätetal för FinOps och molnkostnader).

Agila och ITIL-baserade syner på kostnad skiljer sig, och skillnaden är användbar.

- **Projektsynen** finansierar en tillfällig insats med en budget och ett leveransdatum. Kostnaden är vad projektet spenderade, och framgång är leverans i tid och inom budget. Projektet tar slut, teamet skingras och tjänsten det skapade överlämnas till någon annan.
- **Produkt- eller tjänstesynen** finansierar ett bestående team för att bygga och driva en tjänst under dess liv. Kostnaden är den stabila kostnaden för teamet och dess plattformar, och frågan är om det levererade värdet motiverar utgifterna. Det passar de agila målen om kontinuerlig leverans och om att bygga kring motiverade människor som känner tjänsten. Det passar också ITIL:s angelägenhet om en tjänsts kostnad under hela livscykeln.

Kostnadsmått kan vilseleda lika lätt som de informerar. Tre problem återkommer.

- **Fördelning är ett val.** Delade kostnader, till exempel nätverk, säkerhet och plattformar, måste spridas över tjänster enligt någon regel, och olika regler ger olika svar. [Kostnadsfördelning](https://en.wikipedia.org/wiki/Cost_allocation) bör följa en [kostnadsdrivare](https://en.wikipedia.org/wiki/Cost_driver), en faktor som får kostnaden att ändras, till exempel användare, förfrågningar eller lagring. [Aktivitetsbaserad kalkylering](https://en.wikipedia.org/wiki/Activity-based_costing) formaliserar detta genom att spåra kostnader till de aktiviteter som förbrukar resurser.
- **Fasta och rörliga kostnader beter sig olika.** En [fast kostnad](https://en.wikipedia.org/wiki/Fixed_cost) förblir densamma när volymen ändras inom ett intervall, och en [rörlig kostnad](https://en.wikipedia.org/wiki/Variable_cost) stiger med volymen. En tjänsts [enhetskostnad](https://en.wikipedia.org/wiki/Unit_cost) faller när volymen växer om fasta kostnader dominerar, ett mönster besläktat med [skalfördelar](https://en.wikipedia.org/wiki/Economies_of_scale). Att titta på enhetskostnad utan att veta vilka kostnader som är fasta leder till felaktiga prognoser.
- **Kostnad är inte värde.** Den billigaste tjänsten är inte den bästa. Kostnad per ärende faller om du stänger ärenden utan att lösa problem. Kostnadsmått behöver ett kvalitets- eller resultatföljeslagare, som bokens tidigare delar tillhandahåller (se ämne 6.5, Värdeförverkligande och affärsresultat).

Redovisningsklassificeringar spelar också roll. [Investeringsutgifter](https://en.wikipedia.org/wiki/Capital_expenditure) köper tillgångar som varar, och driftkostnader täcker den dagliga driften. Moln- och prenumerationstjänster flyttar utgifter från den första sorten till den andra, vilket ändrar hur budgetar ser ut utan att ändra vad tjänsterna kostar. Ekonomikollegor äger dessa regler, och måtten här bör byggas med dem.

Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller starkt för pengar. Ett kostnadsmål tenderar att ge kostnadsnedskärningar där det är lättast att dölja skadan, till exempel underhåll, kvalitet och inlärningstid. Måtten nedan paras därför med indikatorer på tjänstens hälsa och med ett uttalande om fördelningsreglerna (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Nyckelprinciper

- **Gör fördelningsreglerna uttryckliga och knutna till drivare.** Människor accepterar tal de kan följa.
- **Skilj fast från rörlig kostnad.** Prognoser beror på vilken som är vilken.
- **Redovisa enhetskostnad med dess kvalitetsföljeslagare.** Billigare är bara bättre om tjänsten fortfarande är bra.
- **Använd intervall och trender, inte falsk precision.** Fördelning innebär omdöme.
- **Finansiera bestående team kring tjänster där du kan.** Stabila team lär sig och förbättrar; tillfälliga skingras.
- **Dela kostnader med de människor som kan ändra dem.** Insyn utan inflytande är bara skuldbeläggning.
- **Rangordna aldrig människor eller team efter kostnad.** Tjänster skiljer sig, och det gör deras begränsningar också.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kostnad per tjänst | Fullt belastad årlig kostnad för en namngiven tjänst, med dokumenterade fördelningsregler | direkta kostnader + fördelade delade kostnader för tjänsten under perioden | valuta per år | Huvudbok, data för kostnadsställen, moln- och licensfakturor, tids- eller aktivitetsdata | Ekonomisk styrning av tjänster; hantering av tjänstekatalog | Kostnad för ett bestående produktteam och dess plattformar | Kvartalsvis |
| Enhetskostnad | Kostnad per enhet av något användare värdesätter, till exempel per aktiv användare, per transaktion eller per löst ärende | kostnad per tjänst under perioden / levererade enheter under perioden | valuta per enhet | Kostnad per tjänst och volymdata | Ekonomisk styrning av tjänster; servicenivåhantering | Kostnad att betjäna per resultat | Kvartalsvis |
| Fördelningstäckning | Andel av it-utgifterna som tillskrivs en namngiven tjänst eller deklareras som delad omkostnad | utgifter tillskrivna tjänster eller deklarerade som omkostnad / totala it-utgifter | procent | Huvudbok och fördelningsmodell | Ekonomisk styrning av tjänster | Synlig kostnad för varje teams arbete | Kvartalsvis |
| Fördelning mellan drift, ändring och förbättring | Andel av utgifter eller kapacitet som går till att driva tjänster, ändra dem och förbättra dem | utgifter eller kapacitet i varje kategori / totalt | procent | Huvudbokstaggar, arbetstyper i arbetsverktyget | Ekonomisk styrning av tjänster; ständig förbättring | Kapacitetsfördelning efter arbetstyp | Kvartalsvis |
| Prognosavvikelse | Skillnad mellan prognostiserad och faktisk kostnad, per tjänst | (faktisk minus prognos) / prognos | procent | Prognoslogg och huvudbok | Ekonomisk styrning av tjänster | Prognosnoggrannhet | Månadsvis |
| Andel tvister om kostnadsvisning | Andel rader i kostnadsvisning eller internfakturering som tjänsteägare bestridit och som ändrades | rader ändrade efter bestridande / utfärdade rader | procent | System för kostnadsvisning och tvistlogg | Ekonomisk styrning av tjänster | Retrospektiv om delade kostnader | Kvartalsvis |
| Finansieringsandel för bestående team | Andel av leverans- och driftutgifter som finansieras som stabil teamkapacitet för en tjänst | utgifter för bestående tjänsteteam / totala leverans- och driftutgifter | procent | Huvudbok och organisationsschema | Ekonomisk styrning av tjänster; organisationsförändring | Team byggda kring tjänster och motiverade människor | Årligen |

Definiera perioden, valutan och kostnadstyperna för varje mått och registrera fördelningsreglerna i mätetalsregistret: vilka kostnader som är direkta, vilka som är delade och vilken drivare som sprider varje delad kostnad. Enhetskostnad behöver en enhet som användare och teamet båda accepterar, och enhetsdefinitionen förblir fast över trenden. Prognosavvikelse jämför med prognosen så som den stod vid periodens början, inte en reviderad.

## Rekommendationer

### Bygg kostnadsbilden

**1. Börja med huvudboken och tjänstelistan.** Ta de totala it-utgifterna ur huvudboken, lista tjänsterna ur katalogen och avgör vilken andel av varje kostnad som hör till vilken tjänst. Börja med de lätta direkta kostnaderna: teamet som driver tjänsten, dess licenser, dess hosting. Delade kostnader kommer i andra hand. En grov första bild, delad med de inblandade, slår en exakt byggd i det tysta.

**2. Välj kostnadsdrivare människor kan följa.** För varje delad kostnad, välj en drivare knuten till det som faktiskt orsakar den: användare för en samarbetsplattform, lagring för en dataplattform, förfrågningar för en gateway, enheter för slutpunktshantering. Förklara regeln i en mening. Drivare som ingen kan kontrollera inbjuder till argument, och drivare som ingen kan påverka gör kostnadsvisning meningslös.

**3. Skilj fast och rörlig kostnad.** För varje tjänst, markera vilka kostnader som rör sig med volymen och vilka som inte gör det. En tjänst som mest har fast kostnad har en enhetskostnad som faller med tillväxt, och en som mest har rörlig gör det inte. Denna uppdelning är grunden för varje prognos och varje samtal om skalning.

**4. Visa intervall där fördelning innebär omdöme.** Om två rimliga fördelningsregler ger 20 procent olika resultat, visa båda eller visa intervallet. Ett enda exakt tal ur en godtycklig regel startar strider som datan inte kan avgöra.

### Mät per enhet, med kvalitet bredvid

**5. Välj en enhet som speglar värde.** Kostnad per aktiv användare, per slutförd transaktion, per löst ärende eller per driftsättning kan alla vara användbara. Välj den enhet som kopplar till vad tjänsten är till för, kom överens om den med tjänsteägaren och håll den stabil. Kostnad per ärende är en riskabel enhet, eftersom den faller när ärenden stängs tidigt och stiger när du förebygger ärenden med god självbetjäning.

**6. Para varje enhetskostnad med ett kvalitetsmått.** Visa enhetskostnad bredvid tillgänglighet, nöjdhet eller återöppningsgrad. En enhetskostnad som faller medan kvaliteten faller är en överföring av kostnad till användare. En enhetskostnad som håller sig stabil medan kvaliteten stiger är en vinst. Presentera dem tillsammans eller inte alls (se ämne 6.1, Mätetal för kundnöjdhet).

**7. Följ trenden, inte bara nivån.** Enhetskostnad över tid, med anteckningar om vad som ändrades, berättar en historia som ett kvartal inte kan. Markera ändringar i fördelningsregler eller enheter i diagrammet så att trender inte misstolkas. Jämför en tjänst med sin egen historik innan du jämför den med andra.

### Dela kostnad med dem som kan ändra den

**8. Använd kostnadsvisning före internfakturering.** Kostnadsvisning (showback) redovisar kostnader till tjänsteägare utan att fakturera dem, och internfakturering (chargeback) överför kostnaden till deras budgetar. Börja med kostnadsvisning, som bygger förståelse och förtroende, och gå över till internfakturering bara där det ändrar beslut och reglerna är accepterade. Båda beror på regler som ägare hjälper till att forma.

**9. Låt ägare bestrida talen.** En tvistprocess är ett tecken på hälsa, så länge den är snabb och dess utfall loggas. Granska andelen tvister: en hög andel visar regler som ingen litar på, och noll kan visa att ingen läser rapporterna. Rätta regeln, inte bara raden.

**10. Granska kostnad med hela tjänsteteamet.** Ta med ingenjörer och operatörer såväl som chefer i en regelbunden kostnadsgranskning. Människor som driver en tjänst vet ofta var slöseri gömmer sig: overksamma miljöer, överdimensionerade resurser, dubblerade verktyg. Behandla deras fynd som förbättringar att dela och inte som kritik.

### Finansiera för stabilitet och lärande

**11. Föredra bestående team finansierade kring tjänster.** Där det är möjligt, finansiera ett stabilt team för att äga en tjänst över tid, i stället för att sätta ihop ett projektteam och upplösa det. Bestående team ackumulerar kunskap, bygger bättre relationer med användare och bär kostnaden för dåliga beslut. Detta speglar det agila målet att bygga kring motiverade individer och ITIL:s angelägenhet om tjänstens livscykel. Förändringen i finansiering är ett betydande organisationsbeslut, så involvera ekonomi och ledning tidigt. Mik Kerstens bok *Project to Product* diskuterar detta skifte.

**12. Reservera kapacitet för förbättring.** Kostnader som minskar framtida kostnader, till exempel automatisering, tillförlitlighetsrättelser och borttagning av dubblerade verktyg, behöver skyddad finansiering, annars förlorar de mot funktionsarbete varje gång. Följ förbättringsandelen i fördelningen mellan drift, ändring och förbättring och titta på avkastningen den ger (se ämne 4.6, Teknisk skuld och kända fel).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Kostnad per tjänst | Att flytta kostnader till andra tjänster genom fördelningsregeln; att lämna ofördelaktiga kostnader ofördelade | Fördelningstäckning; regler publicerade och granskade av ägare; jämför totaler med huvudboken |
| Enhetskostnad | Att höja nämnaren med enheter av lågt värde; att skära i kvalitet för att skära i kostnad; att ändra enheten | Kvalitetsföljeslagare; fast enhetsdefinition; resultatkontroller |
| Fördelningstäckning | Att deklarera stora belopp som delad omkostnad för att undvika tillskrivning | Andel omkostnad redovisad; granskning av vad som deklareras som omkostnad och varför |
| Fördelning mellan drift, ändring och förbättring | Att byta etikett på driftarbete till förbättring eller ändring; att tagga vid periodens slut | Tagga vid intag; stickprova poster för typ; jämför med incident- och förfrågningsdata |
| Prognosavvikelse | Att lägga på marginal i prognoser; att revidera prognosen sent under perioden | Prognos loggad vid början; jämför prognosintervall med utfall över tid |
| Andel tvister om kostnadsvisning | Att avskräcka från tvister; att ändra rader utan en regeländring | Granska tvister och utfall; kontrollera om regler ändrades efter upprepade tvister |
| Finansieringsandel för bestående team | Att döpa om projekt till bestående team utan att ändra finansiering eller ägarskap | Kontrollera teamstabilitet och ägarskap över tid; mått på tjänstens hälsa |

En sund avläsning är en kostnadsbild som tjänsteägare känner igen, enhetskostnader som rör sig av förklarade skäl medan kvaliteten håller, prognosfel som krymper och förbättringsarbete som syns i talen.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Projektfinansiering | Tydligt omfång och slut | Team skingras; kunskap förloras; tjänsten överlämnas |
| Finansiering av bestående team | Lärande, ägarskap, stabil kostnad | Kräver förtroende och en mogen planeringsprocess; omfånget kan driva |
| Kostnadsvisning | Bygger förståelse med liten friktion | Kan ignoreras om ingen är ansvarig |
| Internfakturering | Skapar ansvarsskyldighet och prissignaler | Tvister; incitament att undvika delade tjänster |
| Enkla fördelningsregler | Lätta att förklara | Kan vara grova |
| Aktivitetsbaserad fördelning | Mer exakt | Kostsam att underhålla; falsk precision |
| Kostnad per enhet | Kopplar kostnad till värde | Känslig för val av enhet och volym |
| Enbart total kostnad | Enkelt | Döljer trender och effektivitet |

Svaret är att börja med enkla regler och kostnadsvisning, lägga till precision där beslut beror på den och röra sig mot finansiering av bestående team allteftersom förtroende och planeringsmognad växer. Håll ett kvalitetsmått bredvid varje kostnadsmått.

## Frågor att diskutera med teamet

**1. Vad kostar vår huvudtjänst per år, och vem skulle hålla med om talet?**
Be ekonomi och tjänsteägaren ta fram oberoende uppskattningar. Jämför dem. Facilitatorn bör notera var de skiljer sig och varför: fördelningsregler, omfång eller saknade kostnader. Enas om en enda dokumenterad regel för nästa kvartal.

**2. Vilken enhet skulle våra användare känna igen, och vad kostar den?**
Lista möjliga enheter för tjänsten och välj en. Beräkna dess kostnad och diskutera vad som skulle få den att stiga eller falla. Fråga vad enheten döljer. Lägg till ett kvalitetsmått som sitter bredvid den.

**3. Vilka av våra delade kostnader sprids enligt en regel ingen kan förklara?**
Lista de delade kostnaderna och deras drivare. För var och en, fråga om drivaren hänger ihop med det som orsakar kostnaden. Ersätt en som inte gör det. Diskutera vem som kan påverka drivaren, eftersom kostnadsdata utan inflytande bara är skuldbeläggning.

**4. Hur stor del av vår kapacitet går till att driva, ändra och förbättra tjänsten?**
Granska ett kvartal av färdigt arbete efter typ, som i planeringsämnet (se ämne 2.5, Mätetal för leveransprognoser och planering). Jämför med vad ledare tror. Besluta vad förbättringsandelen bör vara och vad som skulle skydda den.

**5. Vad skulle ändras om vi finansierade ett bestående team för den här tjänsten?**
Föreställ dig finansieringen, ägarskapet och måtten. Fråga vilka risker och nyttor ekonomi, teamet och användarna skulle se. Identifiera ett steg mot det, till exempel en stabil teamlista och en delad budgetvy för tjänsten.

**6. När orsakade ett kostnadstal senast ett argument, och vad lärde vi oss?**
Minns en tvist om kostnadsvisning eller budget. Gällde den talet eller regeln? Diskutera hur en tydligare regel eller en bättre tvistprocess hade hjälpt.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam ser kostnad som priset på sin tid, sina plattformar och sina verktyg. De bör känna sin tjänsts kostnad och enhetskostnad, upptäcka slöseri tidigt och använda talen för att argumentera för förbättringsarbete och för stabil finansiering. De bör undvika att optimera talet genom att skära i kvalitet, och de bör utmana fördelningsregler de inte kan följa.

### Service- och driftteam

Driftteam bär kostnaden för att driva tjänster och håller ofta de delade plattformarna. De bör publicera hur delade kostnader drivs, besvara frågor om kostnadsvisning och dela kostnadsbesparande idéer ur erfarenhet. De bör räkna med tryck att skära i driftkostnader, och de bör visa kvalitets- och risksidan av varje nedskärning.

### Ledning och styrning

Ledare frågar om kostnad och värde och sätter finansieringsmodellen. De bör be om enhetskostnader med kvalitetsföljeslagare, stödja finansiering av bestående team där det passar och undvika att rangordna team efter kostnad. Styrningen bör förvänta sig att fördelningsregler dokumenteras, granskas och tillämpas konsekvent och bör titta på förbättringsandelen.

### Kunder och användare

Användare som betalar genom internfakturering vill förstå fakturan och kunna påverka den. Andra ser kostnad i kvaliteten och bredden på de tjänster som erbjuds. Tydliga enhetskostnader och en röst i avvägningen mellan pris och service gör relationen friskare, och deras återkoppling är en del av kvalitetsföljeslagaren för varje enhetskostnad.

## I praktiken: ett exempel från tjänstehantering

Ett medelstort universitets centrala it-avdelning tillhandahåller ungefär 25 tjänster till 18 000 studenter och anställda. Siffrorna nedan är illustrativa.

Ekonomienheten vill veta varför it:s budget växte snabbare än antalet inskrivna. It-ekonomipartnern bygger en kostnadsbild med tjänsteägarna. Av de totala it-utgifterna är 72 procent direkta för namngivna tjänster, 18 procent är delade plattformar (nätverk, identitet, säkerhetsverktyg) som fördelas med drivare och 10 procent deklareras som omkostnad. Fördelningstäckningen är därmed 90 procent. Lärplattformen kostar motsvarande 41 US-dollar per aktiv användare och år, upp från 36, medan nöjdhet och tillgänglighet är stabila. Servicedesken visar en kostnad per löst ärende som har fallit 12 procent över två år. Tjänsteägaren påpekar att fallet sammanföll med en ökning av återöppnade ärenden från 4 till 9 procent, och kvalitetsföljeslagaren visar att besparingen delvis är en överföring av insats till användare.

Teamet gör fyra ändringar. Det publicerar fördelningsreglerna på en sida, med drivare för varje delad kostnad och datumet för den senaste granskningen. Det ersätter kostnad per förfrågan med kostnad per ärende löst vid första kontakten, visad bredvid återöppningsgraden. Det flyttar lärplattformen och identitetstjänsten till finansiering som bestående team med en stabil bemanning. Det avsätter 15 procent av kapaciteten för förbättringsarbete för var och en av de två största tjänsterna och följer vad arbetet ger tillbaka.

Ett år senare är lärplattformens enhetskostnad 38 US-dollar när användningen växte, återöppningsgraden har fallit till 5 procent och prognosavvikelsen för de två tjänsterna med bestående team ligger inom 4 procent, jämfört med 11 procent för projektfinansierat arbete. Andelen tvister om kostnadsvisning har fallit från 22 procent till 8 procent efter att två regler ändrats. Ekonomienheten ber om ett årligt mål på 5 procents minskning av enhetskostnaden för varje tjänst. It-ekonomipartnern föreslår mål bara där en tjänst har en tydlig effektivitetshävstång, visade med kvalitetsföljeslagaren, och förklarar att ett generellt mål skulle belöna nedskärningar av underhåll. Beslutet registreras, med en granskning av reglerna varje år.

## Agilitet, AI, automatisering och analys

### Agilitet

Finansiera bestående team och granska kostnad tillsammans med resultat med intressenter regelbundet, så att kostnadssamtal handlar om mer än nedskärning. Varningen är att fördelningsregler som används för att straffa team leder till manipulation av taggar och uppdelningar.

### AI

AI-arbetsbelastningar tillför rörlig kostnad, till exempel modellanvändning och databehandling, och väcker frågan om kostnad per resultat. Följ kostnad per enhet av värde för AI-stödda vägar och para den med kvalitet. Varningen är att en billigare AI-väg som sänker kvaliteten bara flyttar kostnad till omarbete.

### Automatisering

Automatisera kostnadsinsamling och kontroller av taggning och mät fördelningstäckning. Varningen är att automatisk fördelning enligt en regel som ingen granskar kan förvränga bilden.

### Analys

Redovisa enhetskostnad med intervall och ange fördelningsreglerna. Beslutet detta ger underlag för är var kvalitet, hastighet eller utgifter ska ändras. Varningen är att enhetskostnad beror på vad som väljs som enhet, så säg varför.

## Branschperspektiv

**Startup.** Kostnaden är mest moln, verktyg och löner. Följ de huvudsakliga moln- och verktygsutgifterna per tjänst från början, tagga resurser och beräkna kostnad per aktiv kund tidigt. Motstå invecklad fördelning, eftersom teamet är litet.

**Småföretag.** En handfull leverantörer och en eller två personer utgör det mesta av kostnaderna. Håll en enkel årsbild, kostnad per användare för de huvudsakliga verktygen och en bild av vad som betalas och inte används. Be leverantörer om specificerade fakturor.

**Storföretag.** Skala ger delade plattformar och många affärsenheter. Använd en dokumenterad fördelningsmodell med drivare, en tvistprocess och en ekonomipartner inbäddad i it. Se upp för internfakturering som avskräcker från användning av delade tjänster som gynnar alla.

**Offentlig sektor.** Budgetar är årliga och anslagna, med regler om investerings- och driftutgifter, och kostnadsöppenhet kan krävas. Anpassa tjänstekostnadsberäkningen till offentliga finansregler, dokumentera fördelningsmetoder för revision och överväg flerårig finansiering för bestående tjänsteteam där lagen tillåter. Redovisa enhetskostnader med resultatmått (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna är insatsen att bygga fördelningsmodellen, ekonomins och tjänsteägarnas tid att komma överens om regler och det rutinmässiga arbetet med månatlig rapportering och tvisthantering. De flesta organisationer har redan huvudboken och molnfaktureringsdata. En liten modell i ett kalkylblad kan starta arbetet, och verktyg kommer senare.

Avkastningen är bättre beslut och färre argument. Team som ser sina kostnader hittar slöseri: overksamma miljöer, oanvända licenser och dubbla verktyg. Ledare kan jämföra alternativ med kunskap om kostnadsdrivare, planera tillväxt med fasta och rörliga kostnader åtskilda och finansiera förbättring med belägg för dess avkastning. Bygg caset ur dina egna tal: slöseriet som hittades i den första granskningen, tiden som lagts på budgettvister och prognosavvikelsen före och efter. Undvik externa påståenden om genomsnittliga it-utgifter som andel av intäkter om du inte kan spåra källan och metoden, eftersom definitioner varierar kraftigt. Delens sista ämne samlar det ekonomiska caset på ett ställe (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att sprida delad kostnad jämnt.** Det straffar små användare och döljer verkliga drivare. Använd drivare som speglar förbrukning.
- **Kostnad per ärende som mål.** Det belönar att stänga ärenden tidigt. Använd kostnad per löst ärende med en kvalitetsföljeslagare.
- **Precision utan förtroende.** En vacker modell som ägare inte tror på är värdelös. Bygg regler med dem.
- **Internfakturering först.** Det startar strider innan det finns förståelse. Börja med kostnadsvisning.
- **Att skära i det som är svårt att se.** Underhåll, lärande och tillförlitlighetsarbete skärs först och kostar mer senare. Skydda förbättringskapaciteten.
- **Att jämföra team efter kostnad.** Tjänster skiljer sig i begränsningar och risk. Jämför var och en med sin egen historik.
- **Att ändra reglerna och trenden på en gång.** Markera regeländringar i diagram och räkna om historiken där det går.
- **Att behandla kostnad som ägd av ekonomi.** Människorna som driver tjänsten vet var kostnaden kommer ifrån. Ta med dem.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Kostnadsbild | Budget bara per avdelning | Kostnad per tjänst för några tjänster, grov fördelning | Dokumenterade fördelningsregler med drivare; täckning följs | Enhetskostnader med kvalitetsföljeslagare; uppdelning fast och rörligt | Kostnader delas öppet med affärspartner; drivare påverkas gemensamt |
| Användning av kostnad | Kostnadsnedskärningar med procent | Kostnadsvisning till vissa ägare | Kostnadsvisning för alla tjänster; tvistprocess | Prognosavvikelse och trender i enhetskostnad driver beslut | Kostnad, kvalitet och värde vägs öppet över portföljen |
| Finansieringsmodell | Årliga projektbudgetar | Vissa stabila team | Bestående team för nyckeltjänster | Finansiering följer tjänsteresultat och lärande | Flexibel finansiering över tjänster med investering i delade plattformar |

## Checklista

- [ ] Totala it-utgifter tillskrivs tjänster eller deklareras som omkostnad, med täckning följd.
- [ ] Fördelningsregler och drivare är nedskrivna och granskade med tjänsteägare.
- [ ] Fasta och rörliga kostnader är åtskilda för varje större tjänst.
- [ ] Enhetskostnader använder överenskomna, stabila enheter och sitter bredvid kvalitetsmått.
- [ ] Prognoser loggas vid periodens början och jämförs med utfall.
- [ ] Kostnadsvisning finns tillgänglig för varje tjänsteägare, med en tvistprocess.
- [ ] Utgifter eller kapacitet för drift, ändring och förbättring redovisas.
- [ ] En andel av kapaciteten är skyddad för förbättring.
- [ ] Regel- och enhetsändringar markeras i trenddiagram.
- [ ] Inget team eller ingen person rangordnas efter kostnad.

## AI-prompter

**Föreslå kostnadsdrivare för delade tjänster.**

```text
Our shared services and their annual costs are: [list]. Our services that use
them are: [list], with usage data available for: [list of drivers like users,
requests, storage]. Propose a cost driver for each shared service, explain how
to check that the driver reflects what causes cost, and describe the
limitations. Do not invent costs. List your assumptions and what finance
should confirm.
```

**Utforma en enhetskostnad och dess kvalitetsföljeslagare.**

```text
For the service [name] in [type of organization], suggest three possible units
for unit cost (for example per active user, per transaction, per resolved
request) and, for each, a quality measure to show beside it and a way the pair
could be gamed. Recommend one with reasons. Do not invent figures. List your
assumptions and questions for the service owner.
```

**Förbered en granskning av kostnadsvisning.**

```text
Draft an agenda and a one-page summary for a quarterly showback review with
the owner of [service]. Data: cost this quarter [figures], previous quarter
[figures], volume [figures], quality measures [figures], and disputes [list].
Include questions that help the owner find waste and challenge the allocation.
Use plain language. List your assumptions and mark any claim that needs
checking.
```

**Planera ett skifte till finansiering av bestående team.**

```text
We currently fund work as projects: [describe]. We are considering funding
persistent teams for [services]. Outline the steps, the information finance
and leadership will want, risks, and measures to track whether the change
helps (for example forecast variance, team stability, improvement share, and
service health). Do not claim results from other organizations. List your
assumptions and decisions that need leadership input.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett kostnads- eller enhetsekonomimått.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för kostnadsmått anger sin fördelningsregel, sin manipuleringsvektor och sin kvalitetsföljeslagare.

## Viktigaste slutsatser

- Tillskriv kostnad till tjänster med drivare människor kan följa och visa reglerna.
- Skilj fast från rörlig kostnad och para varje enhetskostnad med ett kvalitetsmått.
- Börja med kostnadsvisning och en tvistprocess och lägg till internfakturering först om det ändrar beslut.
- Finansiera bestående team kring tjänster där du kan och skydda förbättringskapacitet.
- Redovisa intervall och trender och markera regeländringar i diagrammen.
- Rangordna aldrig människor eller team efter kostnad.

## Referenser och vidare läsning

1. Kaplan, R. S., and Anderson, S. R., "Time-Driven Activity-Based Costing," *Harvard Business Review*, 82(11), 2004.
2. Kaplan, R. S., and Cooper, R., *Cost & Effect: Using Integrated Cost Systems to Drive Profitability and Performance*, Harvard Business School Press, 1998.
3. Kersten, M., *Project to Product*, IT Revolution, 2018.
4. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Financial Management*, TSO, 2020.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Cost accounting](https://en.wikipedia.org/wiki/Cost_accounting).
8. Wikipedia, [Cost allocation](https://en.wikipedia.org/wiki/Cost_allocation).
9. Wikipedia, [Cost driver](https://en.wikipedia.org/wiki/Cost_driver).
10. Wikipedia, [Activity-based costing](https://en.wikipedia.org/wiki/Activity-based_costing).
11. Wikipedia, [Fixed cost](https://en.wikipedia.org/wiki/Fixed_cost).
12. Wikipedia, [Variable cost](https://en.wikipedia.org/wiki/Variable_cost).
13. Wikipedia, [Unit cost](https://en.wikipedia.org/wiki/Unit_cost).
14. Wikipedia, [Economies of scale](https://en.wikipedia.org/wiki/Economies_of_scale).
15. Wikipedia, [Capital expenditure](https://en.wikipedia.org/wiki/Capital_expenditure).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
