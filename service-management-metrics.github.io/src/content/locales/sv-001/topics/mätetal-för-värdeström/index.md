# Mätetal för värdeström

**Mät en värdeström från början till slut, dela upp varje steg i den tid arbetet bearbetas och den tid det väntar, och räkna hur mycket som kommer fram användbart, eftersom de största fördröjningarna och det största omarbetet i en tjänsteorganisation finns mellan team, inte inuti dem.**

## Översikt och motiv

De flesta team mäter sitt eget steg. Servicedesken redovisar stängda ärenden, ett utvecklingsteam redovisar avslutade berättelser, en ändringsnämnd redovisar godkända ändringar. Varje siffra kan se frisk ut medan den som bad om något väntar i veckor. Skälet är strukturellt: i en typisk förfrågan går det mesta av den förflutna tiden åt i köer och överlämningar, och inget enskilt team äger den tiden.

En [värdeström](https://en.wikipedia.org/wiki/Value_stream) är sekvensen av steg genom vilken en förfrågan blir levererat värde. [Värdeströmskartläggning](https://en.wikipedia.org/wiki/Value-stream_mapping) är tekniken, utvecklad inom [lean-tillverkning](https://en.wikipedia.org/wiki/Lean_manufacturing) och senare tillämpad på kontor, sjukhus och programvara, att rita varje steg från processens start till kunden och registrera tid och volym vid varje steg. Kartan är en bild av nuläget, följd av en bild av ett bättre framtida läge. Siffrorna på kartan är ämnet här.

Två vokabulärer möts här. I ITIL 4, den fjärde utgåvan av Information Technology Infrastructure Library, är en värdeström en specifik kombination av aktiviteter i [ITIL](https://en.wikipedia.org/wiki/ITIL):s tjänstevärdekedja (planera, förbättra, engagera, utforma och överföra, skaffa och bygga, leverera och stödja) arrangerade för att skapa en viss produkt eller tjänst. Exempel är "återställ tjänst efter en incident" och "leverera en ändring från idé till produktion." ITIL berättar vad en ström är och vem som behöver vara med. Lean berättar hur man mäter den. Den agila motsvarigheten är flödet av arbetsobjekt över en tavla, som team som styr flöde redan följer med mått som cykeltid (se ämne 2.1, Flödesmått).

Lean-måtten är få. **Ledtid** är den totala förflutna tiden från det ögonblick en förfrågan görs till det ögonblick den levereras. **Processtid**, ibland kallad bearbetningstid, är den tid någon faktiskt arbetar med objektet. **Väntetid** är den tid objektet står mellan aktivt arbete, i en kö, i ett godkännande eller i en överlämning. **Procent komplett och korrekt (%C/A)** är den andel objekt som nästa steg kan använda som de mottas, utan att behöva rätta, komplettera eller skicka tillbaka dem. **Taktid** (takt time) är den takt i vilken strömmen måste slutföra objekt för att matcha kundernas efterfrågan, beräknad som tillgänglig arbetstid dividerad med antalet objekt som efterfrågas under den tiden. Kvoten mellan processtid och ledtid är **processeffektivitet**, som den här boken behandlar som värdeströmsformen av flödeseffektivitet (se ämne 2.2, Ledtid, cykeltid och flödeseffektivitet).

Två samband gör siffrorna användbara tillsammans. För det första är [ledtid](https://en.wikipedia.org/wiki/Lead_time) summan av processtid och väntetid över varje steg, så en ström med en ledtid på veckor och en processtid på dagar är mest kö. [Littles lag](https://en.wikipedia.org/wiki/Little%27s_law) länkar den kön till pågående arbete och genomflöde, vilket är varför ämne 2.3 (Pågående arbete och köteori) är den naturliga följeslagaren. För det andra ackumuleras %C/A. En ström med fem steg där varje steg släpper igenom 90 procent av sin leverans rent levererar ett rent resultat bara ungefär 59 procent av gångerna, en produkt som i tillverkning kallas [sammanlagd förstagångsutbyte](https://en.wikipedia.org/wiki/Rolled_throughput_yield) (rolled throughput yield). Rapporterna för de enskilda stegen säger alla 90 procent. Strömmen säger något betydligt obekvämare.

## Nyckelprinciper

- **Börja från kundens förfrågan och sluta vid kundens användning.** En ström som mäts från "arbetet påbörjat" till "arbetet sammanslaget" döljer väntan i båda ändar, vilket ofta är den längsta delen.
- **Skilj bearbetningstid från väntetid vid varje steg.** En enda stegvaraktighet blandar de två och skickar förbättringsinsatsen till fel ställe. Väntan är oftast en designegenskap hos strömmen, inte ett misslyckande i ansträngning.
- **Mät kvalitet som fullständighet och korrekthet, såväl som hastighet.** Ett snabbt steg som skickar tillbaka arbete är långsamt i strömmens termer, eftersom omarbetet förbrukar kapacitet och lägger till väntan.
- **Kartlägg en ström och en objektsklass i taget.** En karta som blandar nödändringar med rutinförfrågningar ger ett medelvärde som inte beskriver någondera.
- **Redovisa fördelningar och visa urvalet.** Ledtid och väntetid är sneda, så visa medianen och en hög percentil och säg hur många objekt och vilken period (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).
- **Beskriv strömmar, aldrig människor.** Stegmått pekar ut var arbete väntar. De är aldrig en rangordning av individerna eller teamen i varje steg.

## Mätetalsdefinitioner

Mätetalen nedan är definierade för en namngiven värdeström och en arbetsklass. Objektantal utesluter avbrutna objekt om inget annat anges. Processtid och väntetid redovisas för varje steg och summeras för strömmen.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Värdeströmmens ledtid | Förfluten tid från kundens förfrågan till att kunden kan använda resultatet | tidpunkt för leveransbekräftelse minus tidpunkt då förfrågan loggades; objekt som avbrutits eller dragits tillbaka utesluts; redovisa medianen samt 85:e och 95:e percentilen | dagar | ITSM-verktygets poster sammanfogade med leveranshändelser från pipelinen eller uppfyllandesystemet | Hantering av serviceförfrågningar; ändringsmöjliggörande | Ledtid på teamets tavla | Månadsvis |
| Processtid | Tid ett objekt aktivt bearbetas, per steg och för strömmen | summan av de intervall då objektet är i ett aktivt tillstånd, per steg; kö, godkännandeväntan och blockerade tillstånd utesluts | timmar eller dagar | Statushistorik i ärendehanteringssystemet; tidsregistreringar där tillstånden är för grova | Incidenthantering; hantering av serviceförfrågningar | Cykeltid i "pågår"-kolumner | Månadsvis |
| Väntetid | Tid ett objekt står mellan aktivt arbete, per steg och för strömmen | stegets förflutna tid minus stegets processtid; omfattar köer, godkännanden, överlämningar och blockerad tid | dagar | Statushistorik i ärendehanteringssystemet och tillståndsändringar i ITSM-verktyget | Ändringsmöjliggörande; servicedesk | Tid i kökolumner; blockerad tid | Månadsvis |
| Processeffektivitet | Andel av ledtiden som är processtid | summan av processtid över steg / värdeströmmens ledtid för samma objekt; objekt som fortfarande är öppna utesluts | procent | Härleds ur processtid och ledtid | Ständig förbättring | Flödeseffektivitet | Kvartalsvis |
| Procent komplett och korrekt (steg) | Andel objekt ett steg tar emot som det kan använda utan rättelse, komplettering eller retur | objekt som accepterats som mottagna / objekt som mottagits under perioden; objekt som returnerats av något skäl räknas som ej accepterade | procent | Retur- och återöppningshändelser i ärendehanteringssystemet eller ITSM-verktyget; stickprov av acceptansgranskningar | Hantering av serviceförfrågningar; ändringsmöjliggörande; problemhantering | Definition av redo; omarbetsgrad | Månadsvis |
| Sammanlagd procent komplett och korrekt | Andel objekt som passerar varje steg rent | produkten av stegens %C/A-värden för en ström och period (till exempel 0,90 x 0,85 x 0,95); steg utanför strömmen utesluts | procent | Härleds ur stegvärdena | Ständig förbättring | Undkomna fel och omarbetsgrad över en pipeline | Kvartalsvis |
| Antal överlämningar | Antal gånger ett objekt passerar mellan team eller köer | antal byten av ägande team eller kö från förfrågan till leverans, per objekt; redovisa medianen och 85:e percentilen | antal | Tilldelningshistorik i ITSM-verktyget eller ärendehanteringssystemet | Servicedesk; hantering av serviceförfrågningar | Beroenden mellan team | Kvartalsvis |
| Taktkvot | Om strömmens takt matchar efterfrågan | mediantiden mellan observerade slutföranden / taktid, där taktid är tillgänglig arbetstid dividerad med efterfrågade objekt under samma period; en kvot över 1 betyder att strömmen är långsammare än efterfrågan | kvot | Efterfrågeantal från intagskön och slutförandehändelser | Kapacitets- och prestandahantering; hantering av servicenivåer | Genomflöde mot efterfrågan; prognos | Kvartalsvis |

Processtid, väntetid och stegens ledtider är summor och kvoter över samma uppsättning objekt, så de beräknas ur poster på objektnivå och aldrig genom att addera stegmedelvärden som mätts på olika urval. Taktid passar bäst för upprepbart arbete som standardförfrågningar och rutinändringar, och passar dåligt för arbete där varje objekt är unikt.

## Rekommendationer

### Välj strömmen

**1. Välj en värdefull ström och en objektsklass och namnge dess gränser.** Bra första kandidater är en förfrågningstyp med hög volym, till exempel etablering av åtkomst eller utrustning, eller vägen för en normal ändring från godkännande till i drift. Skriv utlösaren som startar klockan och händelsen som bekräftar leverans till kunden. Om du inte kan ange båda i en mening vardera är strömmen ännu inte definierad (se ämne 3.5, Mätetal för uppfyllande av serviceförfrågningar).

**2. Starta klockan vid kundens förfrågan och stoppa den vid kundens användning.** En ström som startar när ett team accepterar arbetet och stoppar när teamet markerar det som klart utesluter intagskön och bekräftelsefördröjningen. Det är ofta de längsta väntorna. Om data för de verkliga gränserna ännu inte fångas, redovisa det snävare måttet med en ärlig etikett och planera instrumenteringen (se ämne 1.5, Datakällor och instrumentering).

### Kartlägg nuläget

**3. Gå igenom strömmen med de människor som gör arbetet.** Håll en kartläggningssession med en representant för varje steg, inklusive kundsidan. Rita stegen så som de faktiskt sker och jämför sedan med den dokumenterade processen. Glappen mellan de två är fynd i sig. Metoden beskrivs i Rother och Shooks *Learning to See* och i Martin och Osterlings *Value Stream Mapping*.

**4. Registrera processtid och väntetid för varje steg från verkliga objekt.** Ta ett stickprov av nyliga objekt, 20 eller fler om volymen tillåter, och följ vart och ett genom strömmen med hjälp av ärendehanteringssystemets historik och, vid behov, ett samtal. Registrera bearbetningstiden och väntan före varje steg. Behandla stickprovet som en uppskattning och säg hur det drogs. Upprepa kartläggningen när strömmen förändras så mycket att den ogiltigförklaras.

**5. Visa väntan som en egen stapel.** På kartan och instrumentpanelen, rita processtid och väntetid som separata segment för varje steg. Ett steg med 30 minuters processtid och fyra dagars väntan ser inte alls ut som ett med fyra dagars processtid, fast stegets varaktighet är identisk.

### Mät kvalitet längs strömmen

**6. Mät %C/A vid överlämningen, definierad av det mottagande steget.** Det mottagande teamet avgör vad "användbart som mottaget" betyder, helst i ett kort skrivet acceptansvillkor. Räkna en retur, en begäran om saknad information eller en tyst rättelse som ej accepterad. Tyst rättelse är det vanligaste läckaget, eftersom arbetet rättas utan att någon registrerar att det var trasigt.

**7. Beräkna sammanlagd %C/A och jämför den med stegvärdena.** Multiplicera stegvärdena. Ett glapp mellan den sammanlagda siffran och det bäst utseende steget är omarbetets ackumulerande effekt, och det motiverar ofta att åtgärda en överlämning bättre än något hastighetsmått. Koppla det till omarbetnings- och ändringsmisslyckandemåtten för samma ström (se ämne 4.4, Misslyckade ändringar och omarbete).

### Använd siffrorna för att besluta

**8. Förbättra den största väntan först och leta efter dess orsak i gränssnittet.** Rangordna steg efter väntetid och fråga sedan vad det väntande objektet väntar på: ett beslut, en person, en batch, en schemalagd tid eller en saknad indata. Fråga sedan om den väntan behövs. [Begränsningsteorin](https://en.wikipedia.org/wiki/Theory_of_constraints) hävdar att strömmens takt sätts av dess trängsta steg, så att förbättra ett steg som inte är begränsningen ändrar lite. Godkännandeväntan i ändringsmöjliggörande är ett vanligt fall (se ämne 4.3, Mätetal för ändringsmöjliggörande).

**9. Minska överlämningar innan du optimerar steg.** Varje överlämning lägger till en kö, ett kontextbyte och en chans till ofullständig information. Räkna överlämningarna och pröva sedan om ett steg kan slås ihop, ett beslut delegeras till teamet som gör arbetet eller en standardförfrågan förhandsgodkännas. ITIL 4 beskriver standardändringar som förhandsgodkända ändringar med låg risk, vilket är precis detta drag tillämpat på ändringsströmmen.

**10. Jämför efterfrågan och takt med taktid, endast för upprepbart arbete.** Beräkna taktiden ur verkliga efterfrågedata för perioden och jämför den med intervallet i vilket strömmen faktiskt slutför objekt. En ström som är långsammare än taktiden växer en kö, och Littles lag talar ungefär om hur snabbt. En ström som är mycket snabbare än taktiden har slack som kan omdirigeras. Använd inte taktid för att sätta mål för individer.

### Håll mätningen ärlig

**11. Sammanfoga data över verktyg och säg vad som är uppskattat.** Strömmen korsar vanligen ITSM-verktyget, ärendehanteringssystemet och pipelinen. Sammanfoga på en objektsidentifierare, dokumentera sammanfogningsregeln och markera vilka steg som kommer från systemhändelser och vilka från stickprov. En uppskattning som märks som uppskattning är långt mer användbar än en precist utseende siffra av okänt ursprung.

**12. Granska kartan kvartalsvis och läs råa objekt varje gång.** Strömmar glider när team omorganiseras och verktyg ändras. Sätt kartan och ett beslut på dagordningen för en stående granskning där varje steg är representerat (se ämne 1.4, Styrning och ägarskap av mätetal).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Värdeströmmens ledtid | Att starta klockan senare, till exempel vid triage i stället för vid förfrågan; att stänga objekt innan kunden kan använda dem; att dela upp en förfrågan i flera små | Fasta klockregler skrivna i mätetalsregistret; kundbekräftelse av leverans; antal återöppnade objekt och länkade underobjekt |
| Processtid | Att registrera overksamma eller blockerade tillstånd som aktiva så att processtiden stiger och strömmen ser effektiv ut; eller att registrera väntan som arbete för att se upptagen ut | Observation av ett stickprov av objekt; processtid jämförd med tidsregistreringar där de finns; tillståndsdefinitionerna granskade med teamet |
| Väntetid | Att flytta väntan till ett ospårat tillstånd, till exempel ett sidosamtal, ett kalkylblad eller en "väntande"-status som stoppar klockan | Redovisa användningen av paus- och blockerade statusar; jämför ärendets ålder med stegens tidsstämplar; stickprova objekt för väntan utanför systemet |
| Processeffektivitet | Att krympa ledtiden med expedierad hantering av de uppmätta objekten, eller blåsa upp processtiden för att höja kvoten | Visa ledtid och processtid bredvid kvoten; redovisa den expedierade andelen; sätt aldrig ett mål för själva kvoten |
| Procent komplett och korrekt (steg) | Det mottagande steget sänker sin acceptansnivå så att färre objekt returneras, eller det avsändande steget driver igenom arbete med informella lösningar | Skrivet acceptansvillkor; efterföljande fel- och omarbetsantal; stickprov av accepterade objekt granskade av en tredje part |
| Sammanlagd procent komplett och korrekt | Att slå ihop steg så att returer sker inuti ett steg och försvinner ur överlämningsantalet; att välja en gynnsam stegförteckning | Fastställ stegförteckningen i förväg; redovisa stegändringar i beslutsloggen; jämför med omarbetsgraden för hela strömmen |
| Antal överlämningar | Att omtilldela objekt till en delad kö eller en samlingsägare för att undvika räknade ägarbyten; att dölja överlämningar i ett enda "team" som spänner över flera | Räkna per kö och per roll; läs tilldelningshistoriken för stickprovade objekt; följ antalet omtilldelningar per objekt |
| Taktkvot | Att räkna uppskjuten eller avvisad efterfrågan som ej efterfrågad; att räkna delvisa slutföranden som slutföranden | Redovisa efterfrågan, avvisad efterfrågan och backlogens ålder bredvid kvoten; räkna slutföranden först när kunden bekräftar |

En sund avläsning visar ledtid och processtid som är rimliga mot stickprovet, väntetid som synbart är den större delen och gradvis krymper, %C/A-värden med ett skrivet acceptansvillkor bakom sig och överlämningar som minskar bara när ett verkligt beslut eller steg togs bort. Om ledtiden förbättras medan sammanlagd %C/A faller skickar strömmen arbete snabbare genom att flytta kostnaden nedströms, vilket är mönstret skyddsräckena finns för att fånga (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Workshopbaserad kartläggning med ett stickprov | Snabb, visar hela strömmen, bygger gemensam förståelse över team | En ögonblicksbild som snabbt åldras; urvalsbias; beroende av ärliga deltagare |
| Automatiserad mätning ur verktygshändelser | Kontinuerlig, objektiv, stöder percentiler och trender | Ser bara det verktygen registrerar; väntan utanför systemet och tysta rättelser är osynliga |
| Kundgränser från början till slut | Speglar upplevelsen; blottlägger intags- och bekräftelsefördröjningar | Kräver data från flera system och en gemensam objektsidentifierare |
| Taktid och jämförelse med efterfrågan | Knyter takten till verklig efterfrågan; gör kötillväxt förutsägbar | Svag för unikt, icke upprepbart arbete; kräver pålitliga efterfrågeantal |
| Sammanlagd %C/A | Visar hur omarbete ackumuleras över överlämningar | Kräver enighet om acceptansvillkor; lätt att gräla om definitioner |

Använd kartläggningsworkshopen för att lära sig strömmens form och automatiserad mätning för att bevaka den. Använd teamgränsmått som indata och kundgränsmått som dom. Tillvägagångssättets kostnad är det tvärteamssamtal det tvingar fram, vilket också är dess främsta nytta.

## Frågor att diskutera med teamet

**1. Var startar och stoppar kundens klocka i vår vanligaste förfrågan, och stämmer vår rapport?**
Välj en förfrågningstyp och följ den på en whiteboard från det ögonblick kunden ber om något till det ögonblick hen kan använda resultatet. Markera var vår nuvarande rapport börjar och slutar räkna. Facilitatorn bör leta efter glappet i varje ände, eftersom intagsköer och bekräftelsefördröjningar rutinmässigt lämnas utanför. Enas om att ändra rapporten eller märka den som en partiell bild.

**2. För varje steg i vår ström, hur stor del av den förflutna tiden arbetar någon med objektet?**
Ta fem nyliga objekt och rekonstruera historiken för vart och ett. Uppskatta bearbetningstiden och väntan för varje steg och jämför totalerna. De flesta grupper överraskas av hur liten del av den förflutna tiden som är arbete. Fråga vad varje lång väntan väntar på, och motstå det första svaret, som vanligtvis är "folk är upptagna." Registrera vilka väntor som ser ut som designval snarare än kapacitetsgränser.

**3. Vad behöver nästa steg från oss, och hur skulle vi veta att det saknades?**
Låt en representant för det mottagande steget ange acceptansvillkoret med enkla ord. Jämför det med vad det avsändande steget tror att det levererar. Räkna hur många gånger den senaste månaden arbete returnerades, kompletterades av någon annan eller rättades i tysthet. Diskussionen ger ofta en liten checklista som tar bort en återkommande retur.

**4. Vilka överlämningar finns på grund av historia snarare än behov?**
Lista överlämningarna på kartan och fråga varför var och en finns. Vissa är verkliga: en färdighet, en kontroll, en åtskillnad av uppgifter. Andra består för att en teamgräns drogs för år sedan. Välj en överlämning att ta bort, delegera eller förhandsgodkänna och namnge vem som måste vara med på det.

**5. Om vi förbättrade steget alla klagar på, skulle kunden märka det?**
Jämför steget som drar mest uppmärksamhet med steget som håller den längsta väntan. Begränsningsteorin antyder att en förbättring av en icke-begränsning ändrar lite för kunden. Fråga vad som skulle behöva vara sant för att det mest högljudda steget också ska vara det långsammaste. Facilitatorn bör hjälpa gruppen enas om hur svaret ska prövas med data.

**6. Hur skulle någon få den här strömmen att se bättre ut utan att göra den bättre?**
Gå igenom tabellen med manipuleringsvektorer tillsammans med gruppen. Fråga för varje mätetal vad en person under press kan göra och vad teamet skulle se om hen gjorde det. Enas om vilken skyddsräcksavläsning som ska granskas varje gång och vem som äger den. Syftet är en gemensam vana att kontrollera, inte en jakt på syndabockar.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam ser vanligen sina egna steg tydligt och strömmen dåligt. En värdeströmsvy visar hur länge en färdig ändring väntar på granskning, godkännande, ett releasefönster eller ett driftsättningsfönster, och hur mycket av det som ligger utanför deras kontroll. De har nytta av %C/A vid sina överlämningar, eftersom det förvandlar vaga klagomål om "dåliga krav" eller "sena granskningar" till räknade händelser. De bör vara på sin vakt mot att förbättra sin egen cykeltid på bekostnad av det mottagande steget (se ämne 2.8, DORA-mätetal).

### Service- och driftteam

Driftteam äger många av köerna: servicedeskens intag, ändringsgodkännandet, releaseschemat, jöröverlämningen. De har nytta av förhandsgodkända standardändringar, tydliga acceptansvillkor för inkommande arbete och en bild av vilka överlämningar som lägger till mest väntan. De bör också räkna med att vara det mottagande steget i ett %C/A-mått och att definiera hur en fullständig överlämning ser ut. Deras objekt bär ofta egna strikta klockor, så strömmåttet står bredvid, och ersätter inte, servicenivåmåtten.

### Ledning och styrning

Ledare sponsrar förändring över team och avgör om en ström har en namngiven ägare. De bör be om strömmens ledtid ur kundens synvinkel och den största väntan, snarare än ett styrkort steg för steg. Styrande organ som godkänner arbete är själva steg, och deras väntetid hör hemma på kartan. Att sätta mål för kvoten mellan processtid och ledtid inbjuder till de vektorer som beskrivs ovan, så använd den för att rikta utredning (se ämne 6.5, Värdeförverkligande och affärsresultat).

### Kunder och användare

Kunder upplever ledtiden och omarbetet, och de ser sällan stegen. Deras mest användbara bidrag är att bekräfta när resultatet var användbart och säga vad de var tvungna att göra för att få det, till exempel skicka in ett formulär på nytt. Kundvända rapporter bör ange klockans start och stopp med enkla ord. Kunder har också nytta av att strömmen publicerar en ärlig median och en hög percentil, eftersom ett löfte baserat enbart på medianen gör besviken en förfrågan av flera.

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på ett medelstort försäkringsbolag levererar normala ändringar till sin plattform för försäkringsadministration. Kunder i verksamheten klagar på att "små ändringar tar över en månad." Alla siffror i det här exemplet är illustrativa.

Avdelningen kartlägger strömmen från det ögonblick en verksamhetsägare skickar in en ändringsbegäran till det ögonblick ägaren bekräftar att ändringen är i drift. Ett stickprov av 20 nyliga normala ändringar ger stegtabellen nedan, med illustrativa medianvärden per steg.

| Steg | Processtid (dagar) | Väntetid (dagar) | %C/A (illustrativt) |
| --- | --- | --- | --- |
| Intag och triage | 0,5 | 6 | 85 |
| Bygge | 1,5 | 5 | 90 |
| Test | 0,5 | 8 | 80 |
| Ändringsgodkännande | 0,25 | 9 | 70 |
| Driftsättning och bekräftelse | 0,25 | 4 | 95 |
| Strömmen totalt | 3,0 | 32 | 41 (sammanlagd) |

Strömmens ledtid i stickprovet är ungefär 35 dagar, så processeffektiviteten är grovt 9 procent. Den sammanlagda %C/A är ungefär 41 procent, produkten av de fem stegvärdena, så färre än hälften av ändringarna passerar varje steg utan en retur. Steget ändringsgodkännande ser måttligt ut enbart utifrån %C/A, men dess 9 dagars väntan är den längsta enskilda kön, och 30 procent av ändringarna kommer dit med saknad riskinformation, som nämnden skickar tillbaka.

Teamet fattar två beslut. För det första klassificerar det de tio vanligaste lågriskändringstyperna som standardändringar med förhandsgodkända förfaranden, så att de hoppar över nämnden. För det andra får intagsformuläret de riskfält som nämnden alltid frågar efter, och en kort acceptanschecklista överenskoms med nämnden. Dessa val åtgärdar den största väntan och den största ackumulerande returen, i stället för byggsteget, där teamet hade ombetts att "gå snabbare."

Tre månader senare faller medianledtiden för den stickprovade klassen och godkännandeväntan krymper, medan den sammanlagda %C/A stiger. Manipulationsrisken dyker upp i den tredje månaden. Ett produktteam delar upp flera förfrågningar i två eller tre mindre, eftersom små objekt kvalificerar som standardändringar, och ledtiden per objekt sjunker kraftigt. Granskaren märker att antalet länkade underobjekt ökade och att kundbekräftelsen per ursprunglig förfrågan inte har förbättrats. Avdelningen behåller ledtiden, men omdefinierar objektet som kundens ursprungliga förfrågan, så att uppdelningar inte längre hjälper. Beslutsloggen registrerar definitionsändringen och räknar om föregående kvartal med samma regel.

## Agilitet, AI, automatisering och analys

### Agilitet

En värdeström korsar teamgränser, vilket är där kontinuerlig leverans ofta stannar av. Ett praktiskt steg är att kartlägga en ström med de människor som arbetar i den och deras intressenter, markera väntan mellan stegen och välja en överlämning att förbättra. Varningen är att en karta som görs en gång och läggs undan blir inaktuell, så återvänd till den när arbetet förändras.

### AI

AI kan skynda på ett steg, till exempel utkast eller triage, medan arbetet sedan väntar längre vid nästa steg. Mät hela strömmen före och efter en AI-ändring, inte bara steget som fick verktyget, och para ledtid från början till slut med procent komplett och korrekt vid varje överlämning. Varningen är att lokala vinster från AI kan dölja en längre total ledtid.

### Automatisering

Instrumentera stegens in- och utgångshändelser automatiskt så att strömmen mäts ur verkliga tidsstämplar. Mät automatisering efter den processtid och väntetid den tar bort och det omarbete den skapar nedströms. Varningen är att automatisering av ett steg utan att åtgärda överlämningen efter det flyttar kön utan att korta strömmen.

### Analys

Visa processeffektivitet som en trend och dela upp ledtiden i bearbetning och väntan per steg. Beslutet detta ger underlag för är vilken överlämning som ska åtgärdas först. Varningen är att stegdefinitioner skiljer sig mellan team, så enas om gränserna innan du jämför, och undvik att rangordna team efter stegtid.

## Branschperspektiv

**Startup.** En kort ström med få överlämningar har lite att kartlägga, och det mest användbara måttet är helt enkelt den förflutna tiden från kundens förfrågan till kundens användning. Rita strömmen på en vägg, läs de råa objekten och bevaka den första överlämningen som dyker upp när teamet växer. Motstå att bygga verktyg innan strömmen har stabiliserats.

**Småföretag.** En eller två personer täcker ofta flera steg, så överlämningarna sker mellan roller eller verktyg snarare än team. Rapporter från ärendehanteringssystemet eller servicedesken ger ledtid billigt, och ett stickprov på tio objekt avslöjar väntan. Be leverantörer, till exempel en leverantör av hanterade tjänster, om deras stegtider, eftersom leverantörens kö ofta är den längsta väntan.

**Storföretag.** Långa strömmar med många team och godkännandeportar är där sammanlagd %C/A och antal överlämningar ger mest utdelning. Tilldela en ägare till varje större ström, kartlägg den gemensamt med varje steg representerat och använd en delad objektsidentifierare så att verktyg kan sammanfogas. Olika divisioner använder samma ord för olika klockor, så publicera en definition per mått och för en ändringslogg.

**Offentlig sektor.** Lagstadgade godkännanden, upphandlingssteg och revisionskontroller utgör legitima steg som inte kan tas bort, och de håller ofta de längsta väntorna. Kartlägg dem ärligt, skilj den påbjudna väntan från den undvikbara och visa den påbjudna delen för dem som sätter reglerna. För ett revisionsspår över datan och över varje definitionsändring (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Motivet är att väntan vanligtvis är den största delen av ledtiden och den billigaste att minska, eftersom åtgärden ofta är ett beslut, en regel eller en överlämning snarare än ytterligare kapacitet. Kunder känner ledtiden direkt, och organisationen betalar för omarbetet i kapacitet som aldrig syns på en stegrapport. Att minska överlämningar och returer minskar också de felmönster som senare blir incidenter.

Kostnaderna är måttliga och mestadels mänskliga: några timmar av flera människors tid för kartläggningsworkshopen och stickprovet, en delad objektsidentifierare över verktyg (se ämne 1.5, Datakällor och instrumentering) och lite analytikertid varje månad. Den större kostnaden är tvärteamssamtalet och viljan att ändra en regel som någon äger.

Avkastningen syns som kortare och mer förutsägbara ledtider, en stigande sammanlagd %C/A, färre returnerade objekt och kapacitet som frigörs från omarbete. Prognostisera inte en procentuell förbättring ur publicerade fallstudier. Uppskatta avkastningen ur din egen ström: volymen objekt, den nuvarande väntan, kostnaden för fördröjning för kunden så gott du kan ange den och de omarbetstimmar du kan räkna. Flow Framework och lean-litteraturen beskriver mönstret, och ingen av dem tillhandahåller ett riktmärke som överförs till din ström (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att kartlägga ett steg i stället för en ström.** En vackert detaljerad karta över ett teams arbete lämnar de längsta väntorna utanför sidan. Kartlägg från kundens förfrågan till kundens användning och lägg till detaljer bara där väntorna finns.
- **Att medelvärdesbilda stegtider från olika stickprov.** Summan av stegmedelvärden är inte strömmens medelvärde. Beräkna strömmått ur poster på objektnivå och redovisa medianer och percentiler.
- **Att behandla väntetid som ett ansträngningsproblem.** Att säga åt människor att arbeta snabbare förkortar sällan en kö. Fråga vad objektet väntar på och om väntan är nödvändig.
- **Att optimera processeffektivitet som ett mål.** När kvoten blir ett mål vadderas processtiden eller ledtiden trimmas med knep. Använd den som en uppmaning till utredning och para den med kundens bekräftade ledtid.
- **Att mäta %C/A utan ett skrivet acceptansvillkor.** Utan ett är varje retur ett argument. Låt det mottagande steget skriva villkoret och hålla det kort.
- **Att låta tyst omarbete förbli oregistrerat.** Om ett steg rättar inkommande arbete utan att logga det är %C/A överdriven och det avsändande steget lär sig aldrig. Registrera varje rättelse som en retur.
- **Att använda strömmått för att rangordna team eller människor.** De beskriver systemet, och den största väntan är sällan ett teams fel. Redovisa per steg och ström och granska resultaten med alla steg närvarande.
- **Att kartlägga en gång och aldrig mer.** Strömmar glider. Granska kartan enligt schema och efter varje omorganisation eller verktygsbyte.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Strömdefinition och klockor | Strömmen odefinierad; varje team mäter sitt eget steg | En ström kartlagd av ett team; klockorna skiljer sig från andra teams | Skriven start och stopp för varje större ström, från kundens förfrågan till kundens användning | Klockregler granskas, ändringar loggas, historiken räknas om när definitioner ändras | Definitioner revideras över team och leverantörer när strömmen och efterfrågan förändras |
| Processtid och väntetid | Bara förfluten tid är känd | Stickprovad för en ström för hand | Insamlad ur verktygshändelser med en dokumenterad tillståndsmodell och märkta uppskattningar | Följs över tid med percentiler, väntereduktioner finansieras och följs | Väntor över leverantörer och team hanteras gemensamt, med delade köer synliga |
| Kvalitet längs strömmen | Omarbete märks men räknas inte | Returer räknas av vissa steg | Skrivna acceptansvillkor och steg-%C/A visas för de ägande teamen | Sammanlagd %C/A följs över tid och paras med omarbetnings- och felmått | Acceptansvillkor samägs av avsändare och mottagare och är kopplade till kundresultat |
| Användning i förbättring | Kartläggning gjord en gång, sedan nedlagd | Enstaka workshop leder till en lokal åtgärd | Kvartalsvis granskning med varje steg närvarande | Den största väntan eller returen tas itu med varje kvartal med en ägare | Förbättringsidéer kommer från varje steg, med beslut loggade och resultat kontrollerade |

## Checklista

- [ ] En värdeström och en objektsklass är namngivna, med en strömägare.
- [ ] Klockans start och stopp är skrivna i termer av kundens förfrågan och kundens användning.
- [ ] Nulägeskartan byggdes med en representant för varje steg, inklusive kundsidan.
- [ ] Processtid och väntetid registreras separat för varje steg ur ett stickprov av verkliga objekt.
- [ ] Steg- och strömtider redovisas som medianer och en hög percentil, med urvalsstorleken visad.
- [ ] Varje mottagande steg har ett skrivet acceptansvillkor, och returer registreras.
- [ ] Sammanlagd procent komplett och korrekt beräknas ur stegvärdena.
- [ ] Överlämningar räknas och den största väntan har en namngiven ägare och ett planerat experiment.
- [ ] Varje mätetal har sin manipuleringsvektor och sitt skyddsräcke granskade med teamet.
- [ ] Kartan och stickprovet granskas enligt schema, och definitionsändringar loggas.

## AI-prompter

**Skriv ett utkast till en intervjuguide för värdeströmskartläggning.**

```text
I am mapping the value stream for [stream name], from [start event] to [end
event], for the item class [item class]. The teams involved are [list of
teams]. Draft an interview guide for a mapping workshop: questions for each
stage about process time, wait time, handoffs, returns, and acceptance
conditions, plus questions for the customer side. Do not invent timings or
benchmark values. List your assumptions and the data I should collect to check
the answers.
```

**Beräkna strömmått ur ett stickprov.**

```text
Here is a sample of [number] items with stage entry and exit times, active and
waiting states, and returns: [paste data or describe the columns]. Calculate
lead time, process time, wait time, process efficiency, stage percent complete
and accurate, and rolled percent complete and accurate, and show the formulas
used. Report medians and the [percentile] percentile. Flag items with missing
timestamps and say how you handled them. Do not fill gaps with invented values.
List your assumptions.
```

**Hitta manipulationsrisker på en strömpanel.**

```text
Our stream dashboard shows [list metrics] for [stream name], and teams are
reviewed against [targets or none]. For each metric, list plausible ways the
number could improve without the stream improving, the signals that would reveal
each, and a guardrail metric or practice that would catch it. Focus on [stage
or handoff of concern]. Do not suggest ranking individuals and do not invent
thresholds. List your assumptions.
```

**Skriv ett acceptansvillkor för en överlämning.**

```text
The sending stage is [sender team] and the receiving stage is [receiver team].
Items are [item type], and the most common reasons they are returned are
[reasons]. Draft a short acceptance condition of no more than [number] checks
that the receiver can apply, and a way to record returns so percent complete and
accurate can be calculated. Keep the wording neutral and do not assign blame.
List your assumptions and the questions I should ask both teams.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta ämnet som definierar ett mätetal på din strömkarta och skyddsräcket som bör sitta bredvid.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett redigerat mätetalsämne anger sina klockor, manipuleringsvektorer och korsreferenser.

## Viktigaste slutsatser

- Mät strömmen från kundens förfrågan till kundens användning, eftersom teamgränsmått döljer de längsta väntorna.
- Dela upp varje steg i processtid och väntetid och leta efter orsaken till den största väntan i gränssnittet mellan team.
- Procent komplett och korrekt ackumuleras över steg, så det sammanlagda värdet är oftast lägre än någon stegrapport antyder.
- Minska överlämningar och förhandsgodkänn rutinarbete innan du pressar steg att gå snabbare.
- Observera ett stickprov av verkliga objekt vid sidan av verktygsdata, redovisa percentiler och märk uppskattningar.
- Para varje strömmått med sitt skyddsräcke och använd måtten för att beskriva systemet, aldrig för att rangordna människor.

## Referenser och vidare läsning

1. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
2. Martin, K., and Osterling, M., *Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation*, McGraw-Hill, 2014.
3. Womack, J. P., and Jones, D. T., *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*, Simon and Schuster, 1996.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
7. Kersten, M., *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*, IT Revolution, 2018.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
10. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
11. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
12. Wikipedia, [Value stream](https://en.wikipedia.org/wiki/Value_stream).
13. Wikipedia, [Value-stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping).
14. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
17. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
18. Wikipedia, [Rolled throughput yield](https://en.wikipedia.org/wiki/Rolled_throughput_yield).
19. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
