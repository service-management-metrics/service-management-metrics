# Misslyckade ändringar och omarbete

**Definiera "en misslyckad ändring" en gång, skriftligt, länka varje misslyckande tillbaka till den ändring som orsakade det och läs fel och omarbete tillsammans med hastighet så att ett lägre tal betyder säkrare ändring och aldrig bara färre rapporter.**

## Översikt och motiv

Varje ändring av en levande tjänst bär en viss chans att göra saker sämre. De praktiska frågorna är hur ofta det händer, hur mycket oplanerat arbete det skapar och hur fort teamet återhämtar sig. Det här ämnet behandlar de mått som besvarar dem: andelen ändringar som misslyckas, andelen som behöver en nödväg, grader av återställning och snabbrättelse och det omarbete som följer på en dålig ändring. Det behandlar också den minst glamorösa delen av ämnet, nämligen att enas om vad som överhuvudtaget räknas som ett misslyckande.

Några termer först. I [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 omfattar praktiken ändringsmöjliggörande tillägg, modifiering eller borttagande av allt som kan påverka en tjänst. En **ändring** är därför bredare än en kodsättning i drift: den omfattar en konfigurationsredigering, en förnyelse av certifikat, en brandväggsregel eller en databasmigrering. En **standardändring** är förhandsgodkänd och har låg risk, en **normal ändring** går genom bedömning och en **nödändring** görs brådskande, vanligen för att återställa en tjänst eller stänga en allvarlig sårbarhet. En **driftsättning** är handlingen att lägga en version av programvara i en miljö, medan en **release** gör en förmåga tillgänglig för användare. Team som använder en [funktionsomkopplare](https://en.wikipedia.org/wiki/Feature_toggle) kan driftsätta kod utan att släppa den (se ämne 4.5, Mätetal för releaser och driftsättning).

Ett **ändringsmisslyckande** är en ändring som leder till försämrad tjänst eller kräver åtgärd. Åtgärd tar flera former. En [återställning](https://en.wikipedia.org/wiki/Rollback_(data_management)) (rollback) för tillbaka systemet till dess tidigare tillstånd. En [snabbrättelse](https://en.wikipedia.org/wiki/Hotfix) (hotfix) är en brådskande patch som tillämpas utanför den normala releaserytmen. En rättelse framåt (roll-forward) levererar en ny ändring ovanpå den trasiga. [Omarbete](https://en.wikipedia.org/wiki/Rework) är den oplanerade insats som läggs på att göra om eller reparera något som skulle ha varit färdigt. I en miljö med [kontinuerlig leverans](https://en.wikipedia.org/wiki/Continuous_delivery), där små ändringar ofta flödar till produktion, är dessa mått det främsta beläggen för om hastighet kostar stabilitet.

De två traditionerna ser på samma händelse olika. ITIL-synen är organiserad kring ändringsposten: auktoriserades ändringen, lyckades den och registrerades utfallet? En ändring som lyckas på papper kan ändå orsaka en incident en timme senare. Den agila synen är organiserad kring arbetsobjektet och driftsättningen: höll teamets definition av klart, och orsakade ändringen oplanerat arbete strax efter? Ingen av synerna är fullständig ensam. Forskningen bakom DORA-programmet behandlar andelen misslyckade ändringar och omarbetsgraden vid driftsättning som de två "instabilitets"-måtten bredvid genomflödesmåtten (se ämne 2.8, DORA-mätetal, som definierar dem på programnivå). Det här ämnet går djupare in på mekaniken: hur man definierar misslyckande, hur man kopplar incidenter till ändringar, hur nödarbete räknas och hur talen manipuleras.

En varning gäller från början. Dessa mått beskriver ett team, en tjänst eller en pipeline. De beskriver aldrig en person. En andel misslyckade ändringar knuten till en enskild ingenjör lär människor att undvika riskabelt och värdefullt arbete, att dela upp ändringar tills antalen ser bra ut och att sluta rapportera problem (se ämne 1.2, Goodharts lag och mätetalens psykologi). [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) biter hårt här, eftersom "färre misslyckanden" är lätt att uppnå genom att registrera färre misslyckanden.

Incidenttidpunkter hör till ämne 3.3, Svarstid och lösningstid för incidenter, de värsta incidenterna till ämne 3.4, Mätetal för större incidenter, godkännandeflöde och andel standardändringar till ämne 4.3, Mätetal för ändringsmöjliggörande, grundorsaker till ämne 4.1, Mätetal för problemhantering, och den skrivna granskningen till ämne 4.2, Mätetal för efteranalyser och lärande.

## Nyckelprinciper

- **Misslyckande behöver en skriven definition.** Team som avgör från fall till fall producerar tal som inte kan följas som trend eller jämföras, och argumentet om definitionen ersätter argumentet om arbetet.
- **Ett misslyckande måste kunna spåras till sin ändring.** Utan en registrerad länk mellan en incident, en återställning eller en snabbrättelse och ändringen som orsakade den är felgraden en gissning.
- **Räkna varje åtgärdsväg.** Återställning, snabbrättelse, rättelse framåt och manuell tillfällig lösning är fyra vägar till samma händelse. Ett mått som räknar en av dem belönar team för att välja en annan.
- **Läs misslyckande bredvid hastighet och återställning.** En andel misslyckade ändringar i isolering kan förbättras genom att ändra mer sällan, vilket sällan är målet. Para den med ledtid, driftsättningsfrekvens och återställningstid.
- **Små urval behöver antal, inte bara procentsatser.** Ett team med åtta ändringar i en månad och ett misslyckande har en felgrad på 12,5 procent som säger nästan ingenting, så visa antalen och använd ett längre fönster (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).
- **Nöd är en signal, inte en synd.** En jämn, förklarad andel nödändringar är normal. En stigande andel pekar vanligen på problem med kvalitet uppströms, planering eller upptäckt.

## Mätetalsdefinitioner

Fel- och omarbetsmått beror på att ändringsposten, driftsättningsloggen och incidentverktyget sammanfogas. Varje definition nedan anger vad som räknas, vad som utesluts och var klockan startar och stoppar. Team bör kopiera definitionerna till sitt mätetalsregister och justera dem med ett angivet skäl.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Andel misslyckade ändringar | Andel ändringar till produktion som orsakar försämrad tjänst eller kräver åtgärd | ändringar som krävde en återställning, snabbrättelse, rättelse framåt eller länkad incident inom misslyckandefönstret / alla ändringar till produktion slutförda under perioden; fönstret startar när ändringen slutförts och stoppar efter ett fast antal dagar (till exempel 7), skrivet i mätetalsregistret; ändringar som fortfarande är inom fönstret redovisas separat och utesluts ur graden tills fönstret stängs | procent | Ändringsposter eller driftsättningslogg sammanfogad med incidentverktyget och snabbrättelselistan | Ändringsmöjliggörande; incidenthantering | Definition av klart; undkomna fel | Månadsvis, över ett rullande fönster på 90 dagar |
| Andel nödändringar | Andel ändringar som gjorts genom nödvägen | ändringar registrerade som nöd / alla ändringar slutförda under perioden; nöd betyder att den normala bedömningen förbigicks eller förkortades av brådska, och förhandsgodkända standardändringar utesluts ur båda antalen | procent | Typfält i ändringsposten | Ändringsmöjliggörande | Oplanerat arbete och expedieringsklass av tjänst | Månadsvis |
| Återställningsgrad | Andel ändringar som vändes tillbaka till en tidigare version | ändringar som återställts efter att ha nått produktion / alla ändringar till produktion under perioden; en återställning som gjorts innan ändringen nådde några användare (till exempel en kanarieutrullning som stoppats vid sitt första steg) räknas separat | procent | Driftsättningslogg och releaseverktyg | Releasehantering; driftsättningshantering | Pipeline- och releasepraxis | Månadsvis |
| Snabbrättelsegrad | Andel ändringar som är brådskande patchar tillämpade utanför det normala releaseflödet | ändringar märkta eller grenade som snabbrättelse / alla ändringar till produktion under perioden; nämnaren inkluderar snabbrättelserna själva | procent | Grenar eller taggar i versionshanteringen och driftsättningsloggen | Ändringsmöjliggörande; incidenthantering | Oplanerat arbete; expediering | Månadsvis |
| Omarbetsgrad vid driftsättning | Andel driftsättningar som var oplanerade rättelser av ett problem i en tidigare driftsättning | driftsättningar till produktion som rättar ett fel eller misslyckande i en nylig tidigare driftsättning, inom samma misslyckandefönster / alla driftsättningar till produktion under perioden; planerat uppföljningsarbete från färdplanen utesluts | procent | Driftsättningslogg med en "rättar"-länk eller tagg, och ärendehanteringssystemet | Ändringsmöjliggörande; ständig förbättring | Omarbete; undkomna fel; felefterfrågan | Månadsvis |
| Länkgrad mellan ändring och incident | Andel lösta incidenter som registrerar om en ändring orsakade dem, och vilken | incidenter med ett ifyllt fält "orsakad av ändring" (ja eller nej, plus ändringsidentifieraren vid ja) / incidenter lösta under perioden; klockan stoppar när incidenten stängs | procent | Incidentverktyg och ändringsposter | Incidenthantering; ändringsmöjliggörande | Granskning efter incident; definition av klart | Månadsvis |
| Överensstämmelse i misslyckandedefinition | Överensstämmelse mellan två granskare om huruvida ett stickprov av ändringar misslyckades | stickprovade ändringar där två oberoende granskare når samma misslyckandeutlåtande med hjälp av den skrivna definitionen / stickprovade ändringar; ett stickprov på minst 20 ändringar som dras slumpmässigt varje kvartal | procent | Stickprovsgranskningsblad som förvaras med mätetalsregistret | Ständig förbättring; mätning och rapportering | Retrospektiv | Kvartalsvis |

Två anmärkningar om tabellen. Felgraden och omarbetsgraden överlappar men skiljer sig: ett misslyckande som återställs utan någon ny driftsättning räknas i felgraden och inte i omarbetsgraden. Och enheten är ändringen eller driftsättningen, inte incidenten, eftersom en ändring kan orsaka tre incidenter och en incident kan komma från tre ändringar.

## Rekommendationer

### Skriv definitionen av misslyckande innan du samlar in några data

**Enas om vad "misslyckades" betyder och lägg det i mätetalsregistret.** En fungerande definition är att en ändring misslyckades om den, inom ett angivet fönster efter slutförande, återställdes, behövde en snabbrättelse eller rättelse framåt eller länkades till en incident av en angiven allvarlighetsgrad eller högre. Ange fönstret (7 dagar är vanligt, och rätt värde beror på hur snabbt dina tjänster visar problem), tröskeln för incidentens allvarlighetsgrad och vem som avgör i ett omstritt fall. Skriv ned minst fem genomarbetade exempel, inklusive besvärliga som en ändring som försämrade prestanda utan något avbrott. Se över definitionen årligen och logga ändringar med sina skäl, så att en trendlinje kan räknas om om regeln flyttas.

### Länka misslyckanden till ändringar i incidentposten

**Lägg till ett obligatoriskt fält i incidentposten: orsakad av en ändring, ja eller nej, och ändringsidentifieraren vid ja.** Fältet bör fyllas i under lösningen och kontrolleras i granskningen efter incident (se ämne 4.2, Mätetal för efteranalyser och lärande). Följ länkgraden som ett eget mätetal. Om bara hälften av incidenterna bär fältet underskattar felgraden sanningen med en okänd mängd, och du bör säga det bredvid talet. Automatisera den första gissningen där du kan, till exempel genom att lista ändringar som slutförts på den berörda tjänsten under timmarna före incidentens början, och låt en människa bekräfta den.

### Räkna alla åtgärdsvägar, inte bara en

**Definiera ett misslyckande utifrån flera signaler.** Hämta återställningar från driftsättningsverktyget, snabbrättelser från versionshanteringen eller releaseloggen, rättelser framåt från "rättar"-länken och incidenter från incidentverktyget och avduplicera sedan per ändring. Ett team som bara räknar återställningar kommer att se misslyckanden försvinna den dag det byter till att rätta framåt. Behåll varje väg som en separat uppdelning också, eftersom mixen berättar en historia: många snabbrättelser och få återställningar tyder på att återställning är svårt, vilket är värt att rätta i sig.

### Behandla andelen nödändringar som en fråga, inte ett betyg

**Granska nödändringar som en grupp, inte som ett mål.** Varje kvartal, läs alla och sortera skälen: att återställa en tjänst, att stänga en sårbarhet, en sen verksamhetsbegäran, ett missat planeringssteg eller en godkännandeväg som var för långsam för vanligt arbete. De två sista är systemproblem som bör rättas genom att förbättra standardvägen, så att människor inte behöver kringgå den (se ämne 4.3, Mätetal för ändringsmöjliggörande). En andel på noll är misstänkt, eftersom verkliga nödsituationer inträffar. En andel som stiger stadigt förtjänar en problempost (se ämne 4.1, Mätetal för problemhantering).

### Mät omarbete som felefterfrågan

**Följ omarbete som det arbete tidigare misslyckanden skapar.** Idén om felefterfrågan (failure demand) kommer från tjänstedesign: efterfrågan som finns därför att något inte gjordes rätt första gången. I leveranstermer, räkna de driftsättningar och arbetsobjekt vars enda syfte är att korrigera en nylig ändring. Det kopplar direkt till uppdelningen i planerat och oplanerat (se ämne 2.9, Driftarbete och oplanerat arbete). Använd andelen kapacitet som läggs på omarbete som samtalsstartare med produktägaren, eftersom det förvandlar en abstrakt frekvens till en avvägning om vad man ska arbeta med härnäst.

### Redovisa grader med antal, fördelningar och ett fönster

**Visa antal bredvid procentsatser och använd ett rullande fönster.** En månatlig felgrad för ett team som driftsätter tio gånger är brusig. Använd ett rullande fönster på 90 dagar, visa antalet ändringar och misslyckanden bakom graden och ge en grov indikation på osäkerhet (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal). För återställning, visa medianen och 85:e percentilen av tiden från misslyckande till återställning i stället för ett medelvärde. När en tjänst har mycket få ändringar, berätta historien med en lista över de faktiska misslyckandena i stället för en grad.

### Para misslyckande med hastighet så att förbättring inte kan gömma sig i något av dem

**Visa alltid andelen misslyckade ändringar bredvid ledtid och driftsättningsfrekvens.** Om felgraden faller medan driftsättningsfrekvensen också faller kraftigt och ledtiden växer kan teamet bunta ändringar, vilket höjer risken för var och en. Om hastigheten stiger och felgraden håller sig stadig blir systemet bättre på ändring. Parningen är det främsta försvaret mot manipulation och mot den bekväma föreställningen att färre driftsättningar betyder säkrare (se ämne 2.8, DORA-mätetal).

### Använd talen för att förbättra själva ändringen

**Förvandla feldata till tekniska experiment.** Titta på de gemensamma dragen hos misslyckade ändringar: storlek, tid på dygnet, typ, antal inblandade människor, om de rörde delade komponenter och om testtäckningen var tunn. Pröva sedan ett litet, reversibelt experiment som mindre batchar, automatiserad [regressionstestning](https://en.wikipedia.org/wiki/Regression_testing) för ett riskfyllt område, en [kanarieutrullning](https://en.wikipedia.org/wiki/Canary_release) för nästa riskfyllda ändring eller en funktionsomkopplare som skiljer driftsättning från release. Mät igen efter ett helt fönster. Syftet är bättre ändring, och ett förbättrat mätetal är bara belägg.

### Granska måtten tillsammans i ett skuldfritt forum

**Håll en månatlig granskning av misslyckade ändringar med de människor som gjorde dem.** Dagordningen har tre punkter: antalen och trenden, två eller tre misslyckade ändringar valda för studie och en förbättringsåtgärd med en ägare. Använd skuldfri granskningspraxis, så att människor beskriver vad de visste vid tillfället. Publicera granskningsanteckningarna med måtten. Om människor tvekar att rapportera misslyckanden på grund av hur talen används, rätta det innan du ändrar något annat (se ämne 11.3, Att införa mätetal utan att skapa rädsla).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Andel misslyckade ändringar | Att snäva in misslyckandefönstret; att inte länka incidenter till ändringar; att klassificera en dålig ändring som en "serviceförfrågan" eller "underhåll"; att rätta framåt och kalla det en ny ändring; att bunta många redigeringar i en ändring så att ett misslyckande täcker dem | Länkgrad mellan ändring och incident; kvartalsvis stickprovsrevision mot incidentlistan; överensstämmelse i misslyckandedefinition; ledtid och driftsättningsfrekvens bredvid |
| Andel nödändringar | Att dirigera brådskande arbete genom standardvägen med en falsk riskbedömning; att dirigera vanligt arbete som nöd för att undvika godkännande; att dela upp en nödsituation i flera normala ändringar | Kvartalsvis läsning av alla nödändringar; skäl sorterade och granskade; andel standardändringar och ledtid för godkännande (se ämne 4.3, Mätetal för ändringsmöjliggörande) |
| Återställningsgrad | Att rätta framåt för att undvika att registrera en återställning; att hålla en trasig version live; att hålla tillbaka ändringar från produktion så att inget finns att vända tillbaka | Snabbrättelsegrad och omarbetsgrad bredvid; fördelning av återställningstid; stickprov av incidenter mot driftsättningsloggen |
| Snabbrättelsegrad | Att inte märka snabbrättelser; att driva dem genom den normala grenen; att kalla en snabbrättelse "en liten förbättring" | Omarbetsgrad vid driftsättning; gren- och taggrevision; andel oplanerat arbete (se ämne 2.9, Driftarbete och oplanerat arbete) |
| Omarbetsgrad vid driftsättning | Att inte länka rättelser till den ursprungliga driftsättningen; att märka en rättelse som "planerad"; att bunta rättelsen med nya funktioner | Obligatorisk "rättar"-länk på korrigerande driftsättningar; stickprovsgranskning av driftsättningar märkta planerade; andel misslyckade ändringar bredvid |
| Länkgrad mellan ändring och incident | Att fylla i fältet med "nej" utan att kontrollera; att låta fältet få "nej" som standard; att stänga incidenter i bulk för att höja procentsatsen | Stickprovskontroll av "nej"-svar i granskningen efter incident; inget standardvärde; granskarkommentarer på ett stickprov |
| Överensstämmelse i misslyckandedefinition | Att välja lätta exempel till stickprovet; granskare som är de människor som mäts; att lätta på definitionen så att alla är överens | Slumpmässigt stickprov draget av någon utanför teamet; ta med gränsfall med avsikt; publicera oenigheter och rätta definitionen |

En sund avläsning ser ut så här: felgraden ligger i ett intervall teamet förstår och förklarar, länkgraden är hög nog för att felgraden ska kunna betros, nödändringar är få och förklarade och återställningar och snabbrättelser är korta och repeterade. Misslyckanden rapporteras snabbt och diskuteras utan skuldbeläggning. En onaturligt låg felgrad med en låg länkgrad, fallande driftsättningsfrekvens och växande batchstorlekar är en varning, inte en framgång. Behandla varje plötslig förbättring som en uppmaning att kontrollera instrumentet först (se ämne 1.5, Datakällor och instrumentering).

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Strikt, automatiserad definition av misslyckande | Konsekvent, billig att upprepa, lätt att följa som trend | Missar subtil försämring; kan räkna ofarliga återställningar som misslyckanden |
| Omdömesbaserad granskning av varje ändring | Fångar sammanhang och allvarlighet | Långsam, subjektiv, öppen för press och glidning |
| Långt misslyckandefönster (veckor) | Fångar fördröjda misslyckanden | Suddar ut orsak och verkan; nyliga ändringar kan ännu inte redovisas |
| Att räkna alla åtgärdsvägar | Svårt att manipulera genom att byta väg | Kräver att flera datakällor sammanfogas med omsorg |

Använd en automatiserad definition som bas, lägg till en stickprovsbaserad mänsklig granskning och förbättra sammanfogningen mellan ändringar och incidenter innan du bygger något annat.

## Frågor att diskutera med teamet

**1. Vad räknas exakt som en misslyckad ändring här, och kunde två av oss vara oense om samma ändring?**
Ta fem nyliga ändringar och be var och en rösta om de misslyckades. Jämför rösterna och skälen. Oenigheterna visar var den skrivna definitionen är tunn. Enas om en regel för de besvärliga fallen, till exempel ett prestandafall utan avbrott, och skriv ned den med ett exempel.

**2. Hur vet vi vilka incidenter som orsakades av en ändring?**
Fråga hur länken registreras i dag och vem som fyller i den. Granska tio nyliga incidenter och se hur många som har en ändring bifogad och hur många som borde ha det. Diskutera om fältet är valfritt, om det får "nej" som standard och vem som kontrollerar det. Facilitatorn bör sikta på en konkret förbättring av posten, till exempel ett obligatoriskt fält utan standardvärde.

**3. Vilka åtgärdsvägar använder vi, och räknas alla?**
Lista återställning, snabbrättelse, rättelse framåt, manuell tillfällig lösning och funktionsomkopplare av. Fråga för var och en var händelsen registreras och om den matar felgraden. Märk vägarna som inte lämnar något spår. Diskussionen avslöjar ofta att teamets föredragna väg är den som måttet inte kan se.

**4. När var vår senaste nödändring, och kunde den ha undvikits?**
Gå igenom de tre eller fyra senaste. Fråga vad som gjorde var och en brådskande, vad som var känt tidigare och hur en bättre standardväg skulle ha sett ut. Skilj verkliga nödsituationer från sena upptäckter och långsamma godkännanden. Enas om en rättelse av den vanliga vägen som skulle ta bort ett återkommande skäl till nöd.

**5. Hur stor del av vår vecka går åt till att rätta nyliga ändringar?**
Uppskatta andelen kapacitet som lagts på omarbete de senaste fyra veckorna, med hjälp av ärendehanteringssystemet snarare än minnet. Jämför uppskattningen med ärendehanteringssystemet. Prata om vad talet kostar i planerat arbete och hur produktägaren skulle använda det. Välj ett felmönster och ett experiment för att minska det.

**6. Om vår felgrad föll till hälften nästa kvartal, skulle vi tro på det?**
Föreställ dig rubriken och fråga vad mer som skulle behöva vara sant: länkgraden stabil, driftsättningsfrekvensen jämn, återställningen snabb och inga nya kategorier av "underhåll". Diskutera vilka av dessa kontroller teamet redan gör och vilka som saknas. Enas om hur en plötslig förbättring ska utredas innan den firas.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam äger ändringarna, så de äger definitionen av misslyckande och rättelserna. Börja från arbetet: titta på misslyckade ändringar i granskningen, hitta de gemensamma dragen och pröva mindre batchar, bättre tester eller omkopplare. Följ omarbete som en del av tavlan så att oplanerade rättelser syns bredvid planerat arbete. Behåll talen för teamets eget lärande och motstå att dela data på individnivå. Om ett mätetal visas för ledare bör teamet kunna förklara varje ändring i det.

### Service- och driftteam

Driftteam ser konsekvenserna av ändring i incidentkön och är bäst placerade att upprätthålla länken mellan incidenter och ändringar. De kan lägga till det obligatoriska fältet, kontrollera det i lösningssteget och återföra resultaten till leveransteamet utan skuldbeläggning. Drift äger också nödvägen och bör granska dess användning. Dela information om återställningsvägar och repetera återställningar tillsammans med leveransteamen, eftersom det bästa sättet att skära kostnaden för misslyckande är en gemensam vana att göra ändring reversibel (se ämne 3.3, Svarstid och lösningstid för incidenter).

### Ledning och styrning

Ledare bör be om trender per tjänst, de två slagen av instabilitetsmått tillsammans med hastighet och de förbättringsexperiment som ligger bakom dem. Undvik fasta mål som "felgrad under 5 procent", som inbjuder till omdefiniering, och undvik att använda siffrorna i individuella utvärderingar. Styrande organ kan använda datan som belägg för om en lättare godkännandeväg är säker, genom att kontrollera att fel och återställning höll sig stadiga när kontroller lättades. En stigande trend i nödändringar är en signal att titta på planering och godkännandedesign, inte att lägga skuld på ingenjörerna i jour.

### Kunder och användare

Kunder bryr sig inte om felgraden. De bryr sig om tjänsten går sönder efter en uppdatering och hur fort den kommer tillbaka. Feldata stöder ärlig kommunikation: förhandsbesked om riskfyllda ändringar, tydliga statusmeddelanden när en ändring orsakar besvär och ett synligt åtagande att lära sig. Där användare är beroende av en tjänst för kritiska uppgifter, enas om underhållsfönster och återställningsförväntningar med dem i förväg (se ämne 3.4, Mätetal för större incidenter).

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på en regional vårdgivare driver en bokningstjänst för patienter. Ett produktteam på sju släpper ändringar flera gånger i veckan, och ett driftteam på fem hanterar incidenter och ändringsprocessen. Alla siffror i det här exemplet är illustrativa.

Under ett kvartal visar månadsrapporten en andel misslyckade ändringar på 4 procent, ned från 11 procent kvartalet innan. Informationschefen är nöjd. Plattformschefen är inte övertygad, eftersom jourteamet säger att deras nätter inte har blivit bättre. Hon ber teamet köra stickprovsrevisionen från mätetalsregistret.

Revisionen tar 30 slumpmässiga ändringar och två granskare tillämpar den skrivna definitionen. De är överens om 24 av de 30 utlåtandena, så överensstämmelsen i misslyckandedefinitionen är 80 procent (illustrativt). De jämför sedan stickprovet med incidentlistan. Av 22 incidenter lösta under kvartalet bär bara 9 fältet "orsakad av ändring", en länkgrad på 41 procent. När granskarna läser de andra 13 för hand finner de 5 som började inom ett dygn efter en ändring. Det korrigerade antalet höjer felgraden till ungefär 9 procent, och revisionen finner varför talet såg bra ut: en ny vana att driftsätta rättelser under etiketten "underhåll", som rapporten uteslöt ur både nämnaren och täljaren.

Manipulationsrisken är etiketten, och ingen planerade den. Teamet hade fått veta att misslyckanden var en fråga, och "underhåll" undvek ett samtal. Teamet fattar tre beslut. Fältet "orsakad av ändring" blir obligatoriskt utan standardvärde, och granskningen efter incident kontrollerar det. Etiketten "underhåll" avvecklas, och korrigerande driftsättningar måste bära en länk till ändringen de rättar, vilket matar omarbetsgraden. Definitionen av misslyckande skrivs om med sex genomarbetade exempel, inklusive en regression i en långsam databasfråga som aldrig orsakade något avbrott.

Nästa kvartal visar en omräknad felgrad på 8 procent och en länkgrad på 90 procent (illustrativt). Ledningsrapporten visar nu antal, länkgraden och omarbetsgraden bredvid ledtid, och informationschefen slutar citera en enda procentsats.

## Agilitet, AI, automatisering och analys

### Agilitet

Täta små ändringar gör misslyckanden billigare och lättare att spåra, och teamet granskar dem regelbundet med intressenter. Varningen är att om misslyckanden straffas slutar människor att deklarera dem.

### AI

AI-stödda ändringar kan höja volym och omarbete medan de ser snabba ut. Redovisa misslyckade ändringar och omarbete för AI-stött arbete med samma definition som annat arbete och märk dem i datan. Varningen är att jämförelse av AI-stött och annat arbete kräver omsorg eftersom ändringarna kan skilja sig till sin natur.

### Automatisering

Länka ändringar, driftsättningar och incidenter automatiskt via identifierare och mät länkgraden. Automatisk återställning bör mätas på framgång och på biverkningar. Varningen är att trasiga länkar får felgraden att se bättre ut än den är.

### Analys

Ange misslyckandedefinitionen en gång och stickprova länkar för hand. Beslutet detta ger underlag för är var ändringspraxis behöver stärkas. Varningen är att grader över små antal ändringar svänger kraftigt, så visa antal.

## Branschperspektiv

**Startup.** Ändringar är små och täta, och teamet känner ofta varje misslyckande utantill. Håll definitionen till ett stycke, märk återställningar och snabbrättelser i driftsättningsverktyget och granska misslyckanden vid den veckovisa retrospektiven. En felgrad på 20 ändringar är brusig, så använd en lista över misslyckanden som främsta belägg. Risken är informalitet: utan en skriven definition skiftar graden med den som räknar.

**Småföretag.** Samma människor driftsätter, driftar och stöder, så omarbete konkurrerar direkt med planerat arbete. Registrera misslyckanden i det verktyg du redan använder, lägg till ett obligatoriskt fält i incidentposten och granska nödändringar varje kvartal. Undvik tungt godkännande bara för att förbättra talen. En delad återställningschecklista är värd mer än en ändringsnämnd.

**Storföretag.** Många team, leverantörer och verktyg betyder många definitioner. Standardisera misslyckandedefinitionen och länkfältet över team, publicera den i katalogen över mätetal och beräkna grader per tjänst innan du sammanställer. Använd stickprovsrevisioner för att hitta avvikelser och behandla varje leverantörs ändringsposter som ännu en källa med egen kvalitet (se ämne 1.5, Datakällor och instrumentering). Se upp så att sammanställningar aldrig blir resultattabeller över team.

**Offentlig sektor.** Ändringsposter tjänar revision och ansvarsskyldighet, och återställningar kan begränsas av lag, upphandling eller delade plattformar. Behåll den formella posten och lägg till misslyckandelänken som en del av den. Förklara talen noga för tillsynsorgan, med antal och sammanhang, eftersom ett enda misslyckande i en kritisk tjänst kan dra uppmärksamhet oproportionerligt. Använd datan för att motivera lättare vägar för ändring med låg risk, med belägg för att fel och återställning höll sig stadiga.

## Affärscase: motiv, ROI och TCO

Motivet är kostnaden för misslyckad ändring: incidentarbete, omarbete, försenade färdplansobjekt och förlorat användarförtroende. Många organisationer kan inte säga hur stor del av deras insats som går åt till att laga nyliga ändringar, och ett omarbetsmått ger det första ärliga svaret. Det finns också en indirekt nytta. Team som kan visa att ändring är säker kan försvara lättare godkännande, vilket kortar ledtiden. DORA-forskningen redovisar ett samband mellan tungt externt godkännande och svagare leveransprestation (se ämne 4.3, Mätetal för ändringsmöjliggörande), och feldata är hur ett team prövar det påståendet mot sin egen historik.

Kostnaden för att samla in är måttlig om grunden finns: ett obligatoriskt fält i incidentposten, märkta korrigerande driftsättningar, en sammanfogning av tre datakällor och en månatlig granskning. Den större kostnaden är uppmärksamhet, eftersom någon måste äga definitionen, köra revisionerna och agera på fynden. Undvik att köpa ett verktyg innan definitionen och länken fungerar för hand.

Avkastningen visar sig som färre upprepade misslyckanden, kortare återställning, mindre oplanerat arbete och bättre samtal med styrningen. Lova inte en procentsats. Uppskatta i stället din egen baslinje: räkna timmarna som lagts på omarbete och incidentinsatser kopplade till ändring under ett kvartal, prissätt dem med din normala interna taxa och jämför efter förbättringarna. Ange antagandena och redovisa resultatet som ett intervall snarare än ett enda tal. Jämför det med programmets kostnad och kostnaden för ett enda allvarligt misslyckande i en kritisk tjänst.

## Antimönster och fallgropar

- **Att sätta ett mål för felgraden.** Det inbjuder till omdefiniering och dolda misslyckanden. Sätt i stället ett mål för lärande, till exempel att slutföra varje granskning och stänga varje korrigerande åtgärd, och bevaka graden för trender.
- **Att rangordna team eller människor efter misslyckande.** Det förstör rapporteringen och straffar de team som tar sig an riskfyllt, värdefullt arbete. Jämför ett team med dess eget förflutna och diskutera sammanhang.
- **Att bara räkna incidenter som misslyckanden.** Misslyckanden som fångas tidigt och återställs försvinner. Ta med varje åtgärdsväg och använd incidenter som en signal bland flera.
- **Att behandla nödändringar som dåliga.** Trycket leder till förklädda nödsituationer. Granska dem för skäl och rätta den vanliga vägen.
- **Att låta incidentlänken få "nej" som standard.** Standardvärdet ger ett smickrande och felaktigt tal. Gör fältet obligatoriskt och kontrollera ett stickprov.
- **Att redovisa en grad utan antal.** Små urval svänger kraftigt. Visa antal och ett rullande fönster.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Definition av misslyckande | Avgörs från fall till fall av den som tillfrågas | Vissa team skriver en definition; team skiljer sig | En skriven definition med genomarbetade exempel och ett angivet fönster | Definitionen prövas genom stickprovsrevisioner och överensstämmelse mäts | Definitionen revideras med leverantörer och kunder när den slutar ge underlag för beslut |
| Länkning av ändringar och incidenter | Länken minns av människor, om alls | Valfritt fält används av vissa team | Obligatoriskt fält utan standardvärde, kontrollerat i granskningen efter incident | Länkgrad följs över tid och granskas, med luckor som åtgärdas | Länkar delas över team och leverantörer via överenskomna gränssnitt |
| Åtgärd och nödhantering | Återställningar och snabbrättelser hanteras ad hoc och oregistrerade | Återställningar och snabbrättelser märks av vissa team | Alla åtgärdsvägar registreras; nödprov skrivet | Nödändringar granskas varje kvartal; återställningar repeteras | Återhämtningsvägar utformas in i tjänster och prövas gemensamt över team |
| Användning i förbättring | Tal citeras i rapporter utan uppföljning | Misslyckanden diskuteras efter större incidenter | Månatlig skuldfri granskning av misslyckade ändringar med åtgärder | Fel och omarbete paras med hastighet; experiment planeras och finansieras | Förbättring är rutin och delas över team, med lärande publicerat |

## Checklista

- [ ] En skriven definition av ändringsmisslyckande finns, med ett angivet fönster och minst fem genomarbetade exempel.
- [ ] Räkneenheten (ändring, driftsättning eller release) är namngiven i mätetalsregistret.
- [ ] Incidentposten har ett obligatoriskt fält "orsakad av en ändring" utan standardvärde.
- [ ] Återställningar, snabbrättelser och rättelser framåt märks i driftsättnings- eller versionshanteringsverktygen.
- [ ] Korrigerande driftsättningar bär en länk till ändringen de rättar.
- [ ] Nödändring har ett kort skrivet prov, och varje nödändring granskas inom ett angivet antal dagar.
- [ ] Grader visas med antal och ett rullande fönster, aldrig som en naken procentsats.
- [ ] Andel misslyckade ändringar visas alltid bredvid ledtid, driftsättningsfrekvens och återställningstid.
- [ ] En kvartalsvis stickprovsrevision kontrollerar misslyckandeutlåtanden och incidentlänken.
- [ ] En skuldfri månatlig granskning av misslyckade ändringar körs, med en ägare för varje åtgärd.
- [ ] Inget mätetal i det här ämnet används för att rangordna eller utvärdera individer.

## AI-prompter

**Skriv utkast till en skriven definition av ändringsmisslyckande.**

```text
We operate [service or product type] with [team size] people and release
[frequency, for example several times a week]. Our tools are [change tool,
deployment tool, incident tool]. Draft a one-page definition of "failed change"
that states the unit (change, deployment, or release), the failure window, the
remediation routes that count (rollback, hotfix, roll-forward fix, linked
incident), and the exclusions. Include [number] worked examples, including
borderline cases. Do not invent benchmark values or thresholds; ask me for any
you need. List your assumptions.
```

**Utforma länken mellan ändring och incident.**

```text
Here is our incident record template: [fields]. Here is our change record
template: [fields]. Suggest how to record which change caused which incident,
including a required field, allowed values, who completes it, and how a review
should check it. Propose a way to suggest candidate changes automatically from
[available data, for example deploy times and service names]. Do not guess how our
tools are configured. List your assumptions and the questions I should answer.
```

**Analysera en lista över misslyckade ändringar efter mönster.**

```text
Below are [number] failed changes from [period], with these fields: [list fields,
for example size, type, day and time, service, remediation route, time to
restore]. Find patterns and possible contributing factors, and suggest up to
[number] small, reversible experiments to reduce failures. Keep the analysis at
the level of teams and services, and do not rank individuals. Do not invent
statistics or benchmark values. State how confident each pattern is given the
sample size, and list your assumptions.
```

**Kontrollera en felpanel efter manipulationsrisker.**

```text
Our dashboard shows [list of metrics, for example change fail rate, emergency
share, rollback rate, hotfix rate, rework rate] with these definitions:
[definitions]. For each metric, list plausible ways the number could improve
without the service improving, and a guardrail for each. Suggest two audit checks
a team of [team size] could run each quarter. Do not invent benchmark values or
compliance claims. List your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta vilket ämne som definierar ett relaterat mätetal, till exempel ledtid eller incidentvaraktighet, och skyddsräcket att placera bredvid felgraden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett nytt eller redigerat felmått anger sin klocka, sin källa och sin manipuleringsvektor.

## Viktigaste slutsatser

- En andel misslyckade ändringar är bara så bra som sin definition, så skriv en med ett fönster, genomarbetade exempel och en namngiven enhet.
- Länka varje misslyckande till sin ändring med ett obligatoriskt fält i incidentposten och mät länkgraden.
- Räkna återställningar, snabbrättelser, rättelser framåt och länkade incidenter tillsammans, så att team inte kan undvika måttet genom att byta väg.
- Läs andelen nödändringar och omarbete som signaler om planering och den vanliga vägen, inte som betyg.
- Visa alltid misslyckande bredvid hastighet och återställning, med antal och ett rullande fönster, och rangordna aldrig människor.

## Referenser och vidare läsning

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
8. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
9. Wikipedia, [Hotfix](https://en.wikipedia.org/wiki/Hotfix).
10. Wikipedia, [Rework](https://en.wikipedia.org/wiki/Rework).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
14. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
