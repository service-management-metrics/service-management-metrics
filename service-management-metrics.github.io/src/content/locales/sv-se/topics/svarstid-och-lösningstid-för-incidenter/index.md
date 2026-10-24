# Svarstid och lösningstid för incidenter

**Tidsmått för incidenter beskriver hur länge användare väntar i varje steg, så redovisa dem som fördelningar med klockorna nedskrivna, aldrig som ett enda medelvärde, och para varje hastighetstal med ett mått på om rättelsen höll.**

## Översikt och motiv

En incident är, inom it-tjänstehantering (ITSM), ett oplanerat avbrott i en tjänst eller en försämring av dess kvalitet. [Incidenthantering](https://en.wikipedia.org/wiki/Incident_management) är praktiken som återställer normal tjänst så snabbt som är säkert. I ITIL 4 kallas praktiken incidenthantering och ligger bland tjänstehanteringspraktikerna i [ITIL](https://en.wikipedia.org/wiki/ITIL)-ramverket. Dess agila motsvarigheter är teamets vana att behandla oplanerat arbete som ett förstklassigt arbetsflöde, samt jour- och skuldfria granskningspraktiker som kommer från [driftsäkerhetsutveckling (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering), disciplinen att driva tjänster med programvaruutvecklingsmetoder.

Tid är det mest naturliga sättet att beskriva en incident, och det som oftast missbrukas. En enskild incident passerar flera steg. Något går sönder, en övervakare eller en användare märker det, en person kvitterar larmet, någon börjar arbeta, tjänsten återställs för användare och ärendet stängs när orsaken är hanterad eller uppskjuten. Varje glapp mellan två av dessa händelser är ett separat mått med en separat ägare, en separat orsak till fördröjning och ett separat botemedel. Att kalla allt detta "lösningstid" döljer var fördröjningen finns.

Det här ämnet omfattar de mått på förfluten tid som följer en incident från start till slut: **tid till upptäckt**, **tid till kvittering**, **tid till första svar**, **tid till återställning** och **tid till lösning**. Det omfattar också åldern på öppna incidenter, antalet gånger en incident byter händer och de statistiska problemen med den mest kända sammanfattningen, medeltid till återställning eller lösning (MTTR). Antal, kategorier och prioritet behandlas på annat håll (se ämne 3.2, Incidentvolym och prioritet). Stora och ovanliga incidenter har egna mått (se ämne 3.4, Mätetal för större incidenter).

### Termer som används i det här ämnet

- **Tid till upptäckt (TTD).** Förfluten tid från att felet började påverka användare tills organisationen visste om det, genom övervakning eller en användarrapport.
- **Tid till kvittering (TTA).** Förfluten tid från att larmet eller ärendet väcktes tills en namngiven person eller ett namngivet team tar ägarskap.
- **Tid till första svar.** Förfluten tid från att incidenten loggades tills den första meningsfulla åtgärden eller det första meddelandet till den berörda användaren. Ett automatiskt svar räknas inte.
- **Tid till återställning.** Förfluten tid från början av användarpåverkan tills användare åter kan använda tjänsten, även om den underliggande orsaken bara kringgåtts.
- **Tid till lösning.** Förfluten tid från att incidenten loggades tills incidenten stängs därför att tjänsten är återställd och användaren har bekräftat eller fått en rimlig chans att bekräfta.
- **Medeltid till återställning eller lösning (MTTR).** Det aritmetiska medelvärdet av en av dessa varaktigheter över en uppsättning incidenter. Bokstaven R läses som reparation, återhämtning, återställning, lösning eller svar beroende på vem som talar, vilket är det första problemet med förkortningen. [Wikipedia-artikeln om medeltid till reparation](https://en.wikipedia.org/wiki/Mean_time_to_repair) listar varianterna.
- **Servicenivåavtal (SLA).** Ett [servicenivåavtal](https://en.wikipedia.org/wiki/Service-level_agreement) är ett åtagande mellan en leverantör och en kund om servicenivån, ofta med mål för svars- och lösningstider per prioritet.

### Varför medelvärdet är en dålig sammanfattning

Incidentvaraktigheter är inte symmetriska. De flesta incidenter är korta, några få är mycket långa, och de långa dominerar varje medelvärde. Varaktigheter av det här slaget beskrivs ofta väl av en högersned form som [lognormalfördelningen](https://en.wikipedia.org/wiki/Log-normal_distribution). I sneda data kan medelvärdet ligga långt över hur en typisk incident ser ut, och ett enda långt avbrott kan flytta det mer än en månads förbättringar.

Googles SRE-team har publicerat en analys av det här problemet. Den hävdar att, för de incidentdatamängder den studerade, spridningen i incidentvaraktigheter är bred nog för att MTTR ska kunna dölja verkliga förbättringar eller visa förändringar som är brus, och den rekommenderar att man tittar på fördelningar i stället (Davidovič, 2021, listad i referenserna). Resonemanget vilar på välkänd statistik, så du kan kontrollera det på din egen data utan att lita på någons slutsats: rita dina incidentvaraktigheter, beräkna medelvärdet och [medianen](https://en.wikipedia.org/wiki/Median) och se hur långt isär de är (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

Alternativet är [percentiler](https://en.wikipedia.org/wiki/Percentile). Medianen säger vad en typisk användare väntade. Den 85:e eller 95:e percentilen säger hur länge de olyckliga väntade. Kunder minns den långa väntan, inte genomsnittet, så ett percentilåtagande som "nio av tio incidenter av den här prioriteten återställda inom en angiven tid" stämmer långt bättre med deras upplevelse än ett medelvärde.

### Hur ITIL-synen och den agila synen skiljer sig

ITIL-synen tenderar att utgå från en prioritet och ett mål. Påverkan och brådska sätter en prioritet, prioriteten sätter mål för svars- och lösningstider och ett servicenivåavtal kan koppla konsekvenser till att missa dem. Det är ordnat och lätt att granska, och benäget för den manipulation som mål inbjuder till (se ämne 1.2, Goodharts lag och mätetalens psykologi).

Den agila och SRE-baserade synen utgår från användarpåverkan och från flöde. Den frågar hur snabbt teamet begränsar skadan, hur stor del av en incidents förflutna tid som var aktivt arbete och hur stor som var väntan och vad teamet lärde sig. Den föredrar mått på påverkan (berörda användare, minuter av försämrad tjänst) framför mått på ärendestatus och behandlar ärendeklockan som en bekväm men ofullkomlig ersättning. De två synsätten är förenliga. Använd ITIL:s prioritetsstruktur för att avgöra vad som ska mätas och för vem, och använd flödes- och påverkanstänkande för att avgöra om siffran betyder något.

## Nyckelprinciper

- **Namnge steget, inte "lösning".** Upptäckt, kvittering, svar, återställning och lösning är olika frågor med olika ägare. Redovisa var och en under sitt eget namn.
- **Skriv ned båda klockorna.** Varje tidsmått anger vilken händelse som startar det, vilken som stoppar det och vilka tillstånd som pausar det. Det mesta av manipulationen bor i dessa gränser.
- **Redovisa fördelningar.** Visa medianen, en hög percentil och åldern på den äldsta öppna incidenten. Undvik ett ensamt medelvärde, som sneda data gör opålitligt.
- **Mät återställning separat från stängning.** Användare bryr sig om när tjänsten kom tillbaka. Ärendet kan stängas senare, när orsaken är hanterad.
- **Para hastighet med varaktighet.** En snabb återställning som samma incident gör ogjord nästa dag är ingen förbättring. Visa återkomst och återöppningsgrad bredvid varje tidsmått.
- **Beskriv team, tjänster och system.** Rangordna aldrig enskilda handläggare eller ingenjörer efter svars- eller lösningstid.
- **Segmentera före jämförelse.** Jämför lika med lika, efter prioritet och tjänst, eftersom ett blandat tal blandar lösenordsåterställningar med databashaverier.

## Mätetalsdefinitioner

Varje rad anger sina klockor. Kalendertid och kontorstid är olika: säg vilken du använder. Där ett mått använder percentiler anger tabellen den 50:e och 95:e, och team kan lägga till den 85:e.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tid till upptäckt | Hur länge ett fel påverkade användare innan organisationen visste | Klockan startar vid första ögonblicket av användarpåverkan (hämtat ur övervakningsdata eller den bekräftade påverkansstarten som registrerats i granskningen); stoppar vid första larm eller användarrapport. Redovisas som median och 95:e percentil per tjänst. Incidenter utan känd start räknas och redovisas separat, tappas inte bort | minuter | Övervaknings- och larmplattform; incidentpost med ett fält för påverkansstart | Incidenthantering; övervakning och händelsehantering | Arbete med observerbarhet och larmkvalitet (se ämne 5.5, Mätetal för övervakning och larmkvalitet) | Månadsvis |
| Tid till kvittering | Hur länge ett väckt larm eller ärende väntar innan en person äger det | Klockan startar när larmet utlöses eller ärendet loggas; stoppar när en namngiven person eller ett namngivet team tar emot det. Automatisk tilldelning stoppar inte klockan. Redovisas som median och 95:e percentil per prioritet | minuter | Personsökarverktyg; tilldelningshistorik i ITSM-verktyget | Incidenthantering; servicedesk | Jourrespons i en SRE-rotation | Månadsvis |
| Tid till första svar | Hur länge användaren väntar på ett första mänskligt, användbart svar | Klockan startar när incidenten loggas; stoppar vid första mänskliga meddelande eller åtgärd som adresserar rapporten. Automatiska kvitton och mallade bekräftelser utesluts. Kontorstidsklocka angiven | minuter eller kontorstimmar | Kommunikationslogg i ITSM-verktyget | Servicedesk; incidenthantering | Snabb återkoppling till användaren, som i en arbetsöverenskommelse | Veckovis |
| Tid till återställning | Hur länge användare var utan en fungerande tjänst | Klockan startar vid början av användarpåverkan; stoppar när användare åter kan använda tjänsten, inklusive genom kringgående eller återställning. Orsak som rättas senare förlänger den inte. Redovisas som median och 95:e percentil per prioritet och tjänst | minuter eller timmar | Incidentpost med tidsstämplar för påverkansstart och återställning; övervakning | Incidenthantering | Medeltid till återställning i DORA:s termer, läst som en fördelning (se ämne 2.8, DORA-mätetal) | Månadsvis |
| Tid till lösning | Hur länge incidentposten var öppen tills den stängdes | Klockan startar när incidenten loggas; stoppar när den stängs efter återställning och användarbekräftelse eller en rimlig väntan. Tid i "väntar på kund" visas som en separat, redovisad andel och dras inte av från rubriksiffran. Redovisas som median och 95:e percentil per prioritet | timmar eller kontorstimmar | Statushistorik i ITSM-verktyget | Incidenthantering | Cykeltid för oplanerat arbete (se ämne 2.2, Ledtid, cykeltid och flödeseffektivitet) | Månadsvis |
| Ålder på äldsta öppna incident | Hur länge den längst stående öppna incidenten har varit öppen | Nu minus loggad tid, för varje öppen incident, med de äldsta listade per prioritet. Pausstatusar dras inte av | dagar | Lista över öppna incidenter i ITSM-verktyget | Incidenthantering | Ålder på arbetsobjekt på teamets tavla (se ämne 2.1, Flödesmått) | Veckovis |
| Andel aktiv tid | Den andel av en incidents förflutna tid som lagts på aktivt arbete snarare än väntan | Summan av tid i aktiva tillstånd / total tid från loggad till stängd, för incidenter som stängts under perioden. Aktiva tillstånd är de där en person arbetar med incidenten; väntande tillstånd listas i definitionen | procent | Statushistorik i ITSM-verktyget | Incidenthantering | Flödeseffektivitet (se ämne 2.2, Ledtid, cykeltid och flödeseffektivitet) | Kvartalsvis |
| Antal omtilldelningar | Hur många gånger en incident byter ägande team före återställning | Antal byten av tilldelningsgrupp från loggad till återställd, sammanfattat som medianen och andelen incidenter med tre eller fler. Räknas per tjänst och prioritet, aldrig per handläggare | antal | Tilldelningshistorik i ITSM-verktyget | Incidenthantering; servicedesk | Antal överlämningar (se ämne 9.3, Mätetal för samarbete och överlämningar) | Månadsvis |

Två anmärkningar om data. För det första är en återställningstid bara så bra som dess starttid. Många incidentposter fångar när någon skrev in ärendet, vilket kan släpa timmar efter den verkliga starten av påverkan. Om ditt verktyg saknar ett fält för påverkansstart, lägg till ett och behandla uppskattade starter som uppskattningar (se ämne 1.5, Datakällor och instrumentering). För det andra, när du jämför perioder, behåll samma prioritetsdefinitioner, annars speglar trendlinjen omklassificeringen.

## Rekommendationer

### Definiera klockorna

**1. Skriv ett klockblad för varje tidsmått.** För varje steg, lista starthändelsen, stopphändelsen, tillstånden som pausar klockan, tidsbasen (kalender- eller kontorstid) och undantagen. Förvara det i mätetalsregistret (se ämne 1.4, Styrning och ägarskap av mätetal).

**2. Skilj återställning från stängning.** Registrera när tjänsten kom tillbaka för användare som en egen tidsstämpel, åtskild från när ärendet stängdes. Återställning är vad användare känner, och stängning omfattar verifiering, dokumentation och orsakshantering. Team som använder en tidsstämpel för båda belönas för att stänga ärenden i förtid eller straffas för noggrann uppföljning.

**3. Registrera påverkansstarten, inte bara den loggade tiden.** Be lösare fylla i när användare först kände effekten, med övervakningsdata där det är möjligt. Märk fältet som uppskattat när det är det. Tid till upptäckt är meningslös utan den, och återställningstiden förvrängs av dess frånvaro.

**4. Begränsa pausstatusar och redovisa deras användning.** Att vänta på en kund eller en leverantör är ibland legitimt. Tillåt en kort, namngiven lista med pausstatusar, kräv ett skäl och visa andelen incidenttid som läggs i var och en. En stigande andel pausad tid är ett tecken på glidning, inte på hastighet.

### Redovisa ärligt

**5. Ersätt medelvärdet med medianen och en hög percentil.** Visa den 50:e och 95:e percentilen för varje steg, per prioritet, som en tidsserie. Visa antalet incidenter bakom varje punkt, eftersom en percentil av tio incidenter är en svag siffra. Där antalen är små, rita de enskilda incidenterna som punkter och hoppa över sammanfattningslinjen.

**6. Visa åldern på de äldsta öppna incidenterna.** Ett diagram över stängda incidenters varaktigheter är blint för de incidenter som fortfarande är öppna, som är de värsta. Lista de äldsta öppna incidenterna per prioritet varje vecka. Det är svårt att förbättra utan att slutföra arbetet, så det är en användbar följeslagare till varje lösningstidsdiagram.

**7. Segmentera efter prioritet och tjänst.** En blandad lösningstid stiger när mixen skiftar mot komplexa incidenter, även om varje slags incident hanteras snabbare. Jämför inom en prioritet och inom en tjänst och visa mixen bredvid tiden (se ämne 3.2, Incidentvolym och prioritet). Dra inga slutsatser av en månad då mixen ändrades.

**8. Använd kontrollgränser för att skilja signal från brus.** Incidentvaraktigheter varierar mycket från vecka till vecka utan att något ändras. Ett kontrolldiagram, med gränser beräknade ur en stabil period, visar när ett skifte är stort nog för att vara värt att förklara (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

### Para hastighet med varaktighet

**9. Visa återöppnings- och återkomstgrad bredvid varje tidsmått.** Återöppningsgrad är andelen incidenter som öppnats på nytt inom ett angivet fönster. Återkomst är samma tjänst och symptom som återuppträder inom ett fönster. Om återställningstiden faller medan återkomsten stiger lägger teamet på snabba lappningar. Skicka återkommande incidenter till problemhantering (se ämne 4.1, Mätetal för problemhantering).

**10. Mät väntan och överlämningar, eftersom det är dit tiden går.** För de flesta tjänster är mycket av en incidents förflutna tid väntan på en person, ett beslut eller en leverantör, snarare än arbete. Andel aktiv tid och antal omtilldelningar visar var man ska titta. En åtgärd för en lång lösningstid är ofta en tydligare dirigeringsregel eller en delad jour, inte snabbare skrivande.

**11. Använd mål på percentiler, med en människa i loopen.** Om du behöver ett mål, ange det som ett percentilåtagande för en prioritet, till exempel "nio av tio prioritet 2-incidenter återställda inom en angiven tid", och enas om det med de människor som ska uppfylla det. Granska överträdelser som frågor om systemet, inte som fel hos personen i jour (se ämne 5.1, Mätetal för SLA, OLA och XLA).

**12. Fråga användare om upplevelsen.** En kort enkät till ett stickprov av stängda incidenter, och en läsning av kommentarerna, talar om huruvida siffran stämmer med hur väntan kändes. Användare bryr sig ofta mer om aktuell kommunikation än om den exakta minuten för återställning (se ämne 6.1, Mätetal för kundnöjdhet).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Tid till upptäckt | Att sätta påverkansstarten senare än den var; att vidga larmtrösklar så att färre fel räknas som incidenter; att bara räkna incidenter som övervakningen fångade | Andel incidenter som först rapporterats av användare snarare än övervakning; periodisk granskning av uppskattningar av påverkansstart mot övervakningsdata |
| Tid till kvittering | Att tilldela automatiskt eller kvittera automatiskt för att stoppa klockan; att kvittera larmet och sedan inte göra något | Tid till första svar och tid till återställning för samma incidenter; stickprov av kvitterade larm utan senare aktivitet |
| Tid till första svar | Att skicka ett mallat svar eller ett enordssvar för att stoppa klockan | Granska ett stickprov av första svar för innehåll; upprepade kontakter och enkätkommentarer |
| Tid till återställning | Att förklara tjänsten återställd innan användare kan använda den; att återställa genom att undertrycka symptomet; att logga avbrott som planerat underhåll | Återkomst inom ett fönster; användarrapporterad påverkan efter återställningstiden; andel incidenter som omklassificerats i efterhand |
| Tid till lösning | Att flytta ärenden till "väntar på kund" eller "vänteläge"; att stänga efter ett enda kontaktförsök; att dela upp en incident i underincidenter för att stänga den överordnade tidigt | Andel tid i pauslägen; återöppningsgrad; ålder på äldsta öppna incident; läs ett stickprov av avslutande anteckningar |
| Ålder på äldsta öppna incident | Att stänga och väcka det äldsta ärendet på nytt; att omklassificera det som ett problem eller en förfrågan för att ta bort det från listan | Länka dubbletter till original och redovisa länkad ålder; antal incidenter som konverterats till problem eller förfrågningar varje period |
| Andel aktiv tid | Att logga kort, meningslöst arbete för att markera tid som aktiv; att flytta till aktiva tillstånd utan insats | Jämför aktiv tid med utfall som återställningstid; stickprov av arbetsanteckningar |
| Antal omtilldelningar | Att öppna på nytt under samma team i stället för att lämna vidare; att lämna arbete vidare via en sidokanal så att verktyget inte visar någon överlämning | Tid till återställning och användarnöjdhet; periodisk observation av hur arbete rör sig mellan team |

En sund avläsning visar medianer och svanspercentiler som rör sig tillsammans, en liten och stabil andel pausad tid, få incidenter som först rapporterats av användare, fallande återkomst och enkätkommentarer som stämmer med ärendedatan. Behandla en rubrikförbättring som kommer ensam som en uppmaning till en manipulationsgranskning.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Medeltid till återställning | Välkänd; ett tal; lätt att följa som trend | Dominerad av några få långa incidenter; döljer verklig förändring; dålig för små urval |
| Median plus en hög percentil | Beskriver både den typiska och den olyckliga upplevelsen; tål extremvärden | Kräver tillräckligt många incidenter; två tal att förklara |
| Att rita varje incident | Visar hela formen och extremvärdena; ärlig vid låg volym | Svårare att läsa vid hög volym; behöver en facilitator |
| Mål per prioritet | Tydliga förväntningar; stöder avtal och eskalering | Inbjuder till omklassificering och klockpausning; kan driva insatsen mot målgränsen |
| Mått på ärendeklockan | Billiga, tillgängliga i varje ITSM-verktyg | Mäter ärendet, inte användarens upplevelse; känsliga för statusarbetsflödet |
| Påverkansbaserade mått | Nära det användare känner; står emot ärendetrick | Kräver övervakningsdata och ett fält för påverkansstart; svårare att granska |

Det pragmatiska svaret är att behålla ärendeklockan eftersom varje verktyg har den, lägga till en påverkansbaserad återställningstidsstämpel där övervakningen tillåter det och använda fördelningar för båda. Medelvärdet är acceptabelt som en grov beskrivning av en enda, stabil, stor uppsättning liknande incidenter, och det bör aldrig vara det enda talet på sidan.

## Frågor att diskutera med teamet

**1. Vilket steg i en incident tar längst tid för oss, och hur vet vi det?**
Rita incidenttidslinjen på en tavla med stegen från påverkansstart till stängning. Ta de senaste tio incidenterna och markera hur lång tid varje steg tog, med hjälp av verktygsdata och lösarnas minne. Facilitatorn bör leta efter steget där tiden klustrar sig, som ofta är väntan på en överlämning eller ett beslut, inte det tekniska arbetet. Enas om vilket steg som förtjänar uppmärksamhet först.

**2. Var startar och stoppar vår klocka, och vem bestämde det?**
Be var och en säga när de tror att en incident "började" och när den "slutade". Svaren kommer att skilja sig, och skillnaderna är fyndet. Jämför dem med fälten i verktyget och statusarbetsflödet. Fånga de överenskomna definitionerna i mätetalsregistret och notera var verktyget ännu inte kan stödja dem.

**3. Vad skulle våra medianer och 95:e percentiler visa som vårt medelvärde döljer?**
Före mötet, beräkna medelvärde, median och 95:e percentil för förra kvartalets incidenter per prioritet. Visa dem sida vid sida och rita varaktigheterna. Fråga vad teamet skulle dra för slutsats av var och en. Facilitatorn bör märka om en eller två incidenter flyttar medelvärdet och diskutera om teamet tror att medianen representerar en typisk användares väntan.

**4. Hur mycket tid lägger vi på att vänta snarare än arbeta, och varför?**
Välj tre långa incidenter och följ deras statushistorik. Räkna timmarna i aktiva tillstånd och timmarna i väntande tillstånd och notera vem eller vad som väntades på. Fråga vilka väntor som kunde kortas av ett beslut, en tydligare eskaleringsväg eller en delad jour.

**5. Om vi ombads korta lösningstiden med en fjärdedel, hur skulle vi göra det utan att hjälpa användare?**
Detta är manipulationsgranskningen i miniatyr. Lista varje drag som skulle förbättra siffran utan att förbättra tjänsten, till exempel pausa klockan, stänga tidigt eller byta etikett på prioriteter. Fråga för varje drag om ett skyddsräcke skulle fånga det. Listan är början på din kolumn för manipuleringsvektorer och visar var definitioner behöver skärpas.

**6. Hur vet vi att en snabbare återställning var verklig?**
Be om belägg: återkomst, återöppning, användarkommentarer och varje senare incident med samma symptom. Titta på en nylig förbättring och fråga om den höll en månad senare. Facilitatorn bör styra gruppen mot varaktiga rättelser. Avsluta med att besluta vilket varaktighetsmått som ansluter sig till instrumentpanelen.

## Fyra perspektiv

### Produkt- och leveransteam

Produktteam som driftar sina egna tjänster ser incidenttid som en kostnad för oplanerat arbete som tränger undan planerat arbete. Följ hur stor del av varje flödesperiod som tas av incidenter och behandla upprepade incidenter som backlogobjekt för det ägande teamet. Releasepraxis som gör återställning snabb kortar återställningen, så incidenttid är delvis ett leveransmått (se ämne 2.9, Driftarbete och oplanerat arbete).

### Service- och driftteam

Driftteam äger klockorna och känner trycket från målen. De bör publicera klockbladet, granska användningen av pausstatusar, redovisa medianer och svanspercentiler per prioritet och föra en veckovis lista över de äldsta öppna incidenterna. Jourbelastning och larmkvalitet formar kvitterings- och upptäcktstider, så titta på dem tillsammans (se ämne 5.7, Mätetal för rutinarbete och jour).

### Ledning och styrning

Ledare bör fråga vilket steg som är långsammast och vad som görs åt det, inte varför en siffra är röd. De bör förvänta sig percentilredovisning, ett varaktighetsmått bredvid varje hastighetsmått och en förklaring när definitioner ändras. Finansiering av övervakning, driftinstruktioner och problemarbete betalar sig ofta mer än tryck på lösare, eftersom det minskar den fördröjning lösare inte styr över.

### Kunder och användare

Användare upplever väntan, kvaliteten på kommunikationen och om problemet kommer tillbaka. De ser sällan stegnamnen. Ge dem ett ärligt första svar, tala om vad de kan förvänta sig och uppdatera dem enligt schema. Deras enkätkommentarer och upprepade kontakter är den bästa kontrollen av om ärendeklockan talar sanning.

## I praktiken: ett exempel från tjänstehantering

En medelstor nätbutik driver en orderplattform, en kundkontotjänst och ett internt lagersystem. Produktteam äger sina tjänster och delar en jourrotation med en liten driftgrupp. Alla siffror i det här exemplet är illustrativa.

Ledningen sätter ett mål på en "genomsnittlig lösningstid under fyra timmar" för prioritet 2-incidenter. Under det första kvartalet visar instrumentpanelen ett medelvärde på 3,8 timmar, och målet verkar vara uppnått. Lagerpersonal säger att vissa avbrott verkar vara hela dagen. Driftchefen ritar kvartalets 41 prioritet 2-incidenter (illustrativt) och finner en median på 1,5 timmar och en 95:e percentil på 11 timmar. Tre incidenter står för det mesta av den långa svansen.

Hon spårar de tre långa incidenterna. Var och en tillbringade det mesta av sin tid i "väntar på leverantör" eller "väntar på kund". I två hade ärendet stängts och väckts på nytt som en ny incident när originalet "överträdde", vilket nollställde klockan. En tredje innebar fyra omtilldelningar mellan team under två dagar. Ett stickprov av avslutande anteckningar visar att 6 av 30 granskade ärenden (illustrativt) stängdes efter ett enda försök att nå användaren.

Teamet gör fyra ändringar. De lägger till ett fält för påverkansstart och en återställningstidsstämpel i incidentformuläret. De redovisar median, 85:e och 95:e percentil per prioritet och de äldsta öppna incidenterna varje vecka. De visar andelen tid i pausstatusar och återkomstgraden på samma sida. Och de länkar återväckta ärenden till sina original så att åldern följer med.

Vid nästa granskning har rubrikens medelvärde stigit till 4,6 timmar eftersom de återväckta ärendena nu räknas fullt ut. Teamet förklarar ökningen för ledningen som en korrigering. Den 95:e percentilen och det äldsta öppna ärendet är nu de tal de arbetar med, och antalet omtilldelningar pekar på ett dirigeringsglapp mellan orderplattformen och lagersystemet. De enas om att lägga till ett delat jouralias och följa effekten under nästa kvartal i stället för att sätta ett nytt mål omedelbart.

## Agilitet, AI, automatisering och analys

### Agilitet

En kort återkopplingsloop efter varje betydande incident, med intressenter involverade, hjälper teamet att förbättra sina klockor. Varningen är att svarstidsmål ger snabba, tomma kvitteringar, så para dem med tid till återställning.

### AI

AI kan snabba på första svar, föreslå rättelser och sammanfatta incidenter, vilket kortar tid till första svar medan tid till återställning kanske inte ändras. Redovisa båda, plus andelen incidenter där ett AI-förslag användes och andelen som återkom. Varningen är att ett snabbt AI-svar som är fel lägger till arbete, så räkna återöppnade incidenter.

### Automatisering

Beräkna varje klocka ur händelsetidsstämplar i verktyget, med pausorsaker registrerade, och mät automatisk diagnos och åtgärd på felaktiga åtgärder såväl som på sparad tid. Varningen är att en automatisering som återställer tjänsten utan att logga orsaken döljer problemposten.

### Analys

Redovisa medianen och en hög percentil för varje klocka med den äldsta öppna incidenten och visa hur många incidenter som ligger bakom dem. Beslutet detta ger underlag för är var användare väntar längst. Varningen är att klockdefinitioner skiljer sig mellan verktyg, så skriv ned start- och stopphändelserna innan du jämför team.

## Branschperspektiv

**Startup.** Volymen är låg, så percentiler är brusiga och ett diagram över varje incident är bättre än en sammanfattning. En person upptäcker, svarar och återställer ofta, så stegseparation spelar mindre roll än en skriven tidslinje för varje incident. Lägg till en notering om påverkansstart i varje efteranalys och beräkna enkla medianer när det finns tillräckligt många incidenter.

**Småföretag.** En leverantör av hanterade tjänster eller en enskild it-generalist kan hantera incidenter, och leverantörens avtal kan definiera svars- och lösningsmål. Läs avtalsklockorna noga, eftersom de ofta skiljer sig från dina användares upplevelse. För en kort logg över påverkansstart och återställning för de incidenter som spelar roll och be leverantören om de underliggande posterna, eftersom en sammanfattande siffra döljer klockorna.

**Storföretag.** Många team, leverantörer och prioritetsscheman gör jämförelse frestande och vilseledande. Standardisera klockdefinitioner och prioritetsbetydelser över organisationen, publicera fördelningar snarare än medelvärden och segmentera efter tjänst. Bevaka glidning i pausstatusar och omklassificering, som växer med antalet rapporteringsskikt.

**Offentlig sektor.** Avtal, lagstadgad rapportering och revision kan fastställa klockorna och prioritetsdefinitionerna. Uppfyll dessa skyldigheter som de är skrivna och behåll en andra, användarorienterad vy bredvid dem, så att regelefterlevnad inte döljer en dålig upplevelse. Var öppen om definitioner och om korrigeringar när en klockregel ändras (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaden för det här ämnet är mestadels design och disciplin. Det tar några timmar att skriva klockblad, en del konfiguration för att lägga till ett fält för påverkansstart och en återställningstidsstämpel samt måttlig möda för att bygga percentilrapporter. Där ITSM-verktyget eller en övervakningsplattform redan håller tidsstämplarna är utdraget en engångsuppgift. Den återkommande kostnaden är en månatlig granskning och ett kvartalsvis stickprov av stängda incidenter.

Avkastningen kommer från bättre beslut och mindre omarbete. Fördelningsredovisning visar om en förbättring fungerade, och stegredovisning riktar insatsen mot den verkliga fördröjningen, till exempel överlämningar, upptäcktsglapp eller leverantörsväntor. Varaktighetsmått förhindrar den falska besparingen av snabba lappningar som återkommer som upprepade incidenter. Mät din egen baslinje under ett kvartal, gör en ändring och jämför fördelningar.

## Antimönster och fallgropar

- **Ett enda MTTR på ledningens instrumentpanel.** Medelvärdet av sneda data vilseleder. Visa medianen, en hög percentil och den äldsta öppna incidenten och säg hur många incidenter som ligger bakom varje punkt.
- **Att blanda prioriteter och tjänster.** Ett mixskifte ser ut som en prestationsförändring. Segmentera efter prioritet och tjänst och visa mixen.
- **Att stoppa klockan med pausstatusar.** Tid försvinner i "väntar" och "vänteläge". Lista de tillåtna tillstånden, kräv skäl och redovisa andelen tid i var och en.
- **Att stänga och väcka ärenden på nytt.** Det nollställer åldern och döljer den långa incidenten. Länka återväckta ärenden till sina original och redovisa den länkade åldern.
- **Att använda en tidsstämpel för återställning och stängning.** Team belönas då för förtida stängning eller straffas för noggrann uppföljning. Registrera båda och redovisa båda.
- **Att rangordna handläggare eller ingenjörer efter lösningstid.** Det belönar lätta ärenden och plockande och avskräcker från hjälp och eskalering. Redovisa bara per team och tjänst.
- **Mål utan varaktighetsmått.** En snabb lappning som fallerar i morgon ser ut som framgång. Visa återkomst och återöppningsgrad bredvid varje mål.
- **Att behandla små urval som trender.** En 95:e percentil från en handfull incidenter är en gissning. Rita de enskilda incidenterna och vänta på mer data innan du drar en linje.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Definitioner och klockor | Var och en mäter olika; en "lösningstid" | Klockor skrivna för vissa team; steg delvis åtskilda | Ett klockblad för alla steg, med pausstatusar listade | Definitioner granskas och ändringar loggas med skäl | Definitioner samordnade med leverantörer och kunder, reviderade när de slutar ge underlag för beslut |
| Datakvalitet | Manuella anteckningar; påverkansstart okänd | Verktygets tidsstämplar för loggad och stängd | Påverkansstart och återställning registreras för prioritetsincidenter | Data revideras genom stickprov; uppskattningar flaggas | Övervaknings- och ITSM-data sammanfogas automatiskt och betros över team |
| Statistisk praxis | Bara medelvärde | Medelvärde och median visas | Median och en hög percentil per prioritet och tjänst | Kontrollgränser används; varaktighetsmått paras | Fördelningar kopplas till användarupplevelse och används för att avgöra var man ska investera |
| Användning i förbättring | Siffror används för att jaga individer | Teamet ser sina egna siffror | Teamet granskar stegtider och väntan månadsvis | Långsamma steg leder till finansierat förbättringsarbete | Förbättring delas över team och leverantörer och måtten utvecklas |

## Checklista

- [ ] Varje steg (upptäckt, kvittering, svar, återställning, lösning) har en skriven start-, stopp- och pausregel.
- [ ] Påverkansstart och återställningstid registreras som separata fält för prioritetsincidenter.
- [ ] Rapporter visar medianen och en hög percentil, per prioritet och per tjänst.
- [ ] Antalet incidenter bakom varje redovisad punkt visas.
- [ ] De äldsta öppna incidenterna listas varje vecka.
- [ ] Pausstatusar är en kort, namngiven lista och deras tidsandel redovisas.
- [ ] Återöppnings- och återkomstgrad visas bredvid varje tidsmått.
- [ ] Återväckta ärenden är länkade till sina original så att åldern följer med.
- [ ] Inget tidsmått används för att rangordna enskilda handläggare eller ingenjörer.
- [ ] Ett stickprov av stängda incidenter läses varje kvartal för ärlighet.
- [ ] Kundenkätskommentarer läses bredvid ärendedatan.

## AI-prompter

**Jämför medelvärdet och percentilerna för våra incidentvaraktigheter.**

```text
I will paste incident records for [service or team] covering [period]. Fields:
[list fields such as logged time, impact start, restore time, closed time,
priority, status history]. Compute the median, the 85th percentile, the 95th
percentile, and the mean of [stage name, for example time to restore] by
[priority], and show how many incidents sit behind each figure. Describe how far
the mean differs from the median and which incidents drive that difference. Do
not invent data or benchmark values. List your assumptions, any rows you
excluded, and anything the data could not tell you.

[paste incident data with personal data removed]
```

**Skriv utkast till ett klockblad för våra incidenttidsmått.**

```text
Draft a clock sheet for [team name] covering time to detect, time to
acknowledge, time to first response, time to restore, and time to resolve. Our
ITSM tool is [tool name], our monitoring is [monitoring tool], and our status
workflow is [list of statuses]. For each stage, give the start event, stop
event, pause states, time basis ([calendar or business hours]), exclusions, and
a gaming vector with a guardrail. Mark every item you had to assume and list
questions I should answer to complete the sheet. Do not invent targets.
```

**Hitta var den förflutna tiden tar vägen i några långa incidenter.**

```text
Here is the status history for [number] long incidents from [service]. For each
incident, list the time spent in each status, mark the active and waiting
states using this rule: [which statuses count as active], and note every
reassignment between [teams or groups]. Report patterns across incidents, not
individuals, and suggest which stage deserves attention first. Do not guess at
causes the data does not show. List your assumptions and what extra fields
would help.

[paste status histories with personal data removed]
```

**Kör en manipulationsgranskning av våra incidenttidsmål.**

```text
We report [metric name] for [priority or service], defined as [definition with
start and stop events]. The target is [target] and the audience is [audience].
List realistic ways the number could improve without helping users, such as
clock pausing, early closure, relabelling, or re-raising tickets. For each way,
propose a guardrail measure or practice that would reveal it, and state how that
guardrail could itself be gamed. Do not invent benchmarks or statistics. List
your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta de relaterade ämnena och parade skyddsräckena för ett incidenttidsmått du är på väg att redovisa.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en ändring av det här ämnet håller mallen, manipulationstabellen och korsreferenserna konsekventa.

## Viktigaste slutsatser

- En incident har steg, och varje steg har sin egen klocka, ägare och botemedel. Namnge steget du mäter.
- Incidentvaraktigheter är sneda, så medelvärdet vilseleder. Redovisa medianen, en hög percentil och åldern på den äldsta öppna incidenten.
- Skriv ned var varje klocka startar och stoppar, registrera påverkansstart och återställning separat från ärendestängning och begränsa pausstatusar.
- Para varje hastighetsmått med ett varaktighetsmått som återkomst och återöppningsgrad.
- Beskriv team och tjänster, aldrig enskilda handläggare, och läs ett stickprov av stängda incidenter för att kontrollera att siffrorna är ärliga.

## Referenser och vidare läsning

1. Davidovič, Š., *Incident Metrics in SRE: Critically Evaluating MTTR and Friends*, O'Reilly Media, 2021, https://sre.google/resources/practices-and-processes/incident-metrics-in-sre/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
7. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
13. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
14. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
15. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
16. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
