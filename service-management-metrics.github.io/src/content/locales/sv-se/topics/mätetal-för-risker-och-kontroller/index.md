# Mätetal för risker och kontroller

**Riskarbete är ett fortlöpande samtal om vad som kan gå fel och vad vi gör åt det, så håll registret kort och levande, testa de kontroller som spelar roll och misstro varje tal som får osäkerhet att se prydlig ut.**

## Översikt och motiv

Varje ändring av en tjänst bär risk, och det gör också att lämna den ifred. [Riskhantering](https://en.wikipedia.org/wiki/Risk_management) är identifiering, utvärdering och prioritering av risker, följd av samordnade åtgärder för att minska, acceptera, överföra eller undvika dem. ITIL behandlar risk som en tråd som löper genom varje praktik: ändringsmöjliggörande avgör hur mycket granskning en ändring behöver, tjänstekontinuitet planerar för avbrott, informationssäkerhet skyddar mot hot. Agila arbetssätt och DevOps minskar risk på ett annat sätt. Små ändringar levererade kontinuerligt, med snabb återkoppling och förmågan att återställa, gör varje ändring mindre farlig och gör problem synliga tidigare.

De två synsätten möts i måtten. Ett team som levererar kontinuerligt behöver ändå känna sina främsta risker, vem som äger dem och om kontrollerna det förlitar sig på fungerar. En riskfunktion som insisterar på tungt godkännande behöver ändå belägg för att dess kontroller minskar skada och inte bara saktar ner människor. Det här ämnet ger måtten för båda, och det bygger på praktikerna som beskrivs i de angränsande ämnena om säkerhet och revision (se ämne 8.1, Mätetal för säkerhetsincidenter och sårbarheter, och ämne 8.3, Mätetal för regelefterlevnad och revision).

Fyra termer återkommer.

- **Risk:** en osäker händelse eller ett osäkert tillstånd som, om det inträffar, påverkar mål. Den har en orsak, en händelse och en konsekvens, och en sannolikhet och en påverkan som vanligen uppskattas, inte är kända.
- **Riskregister:** listan över identifierade risker med ägare, betyg och åtgärder. Ett [riskregister](https://en.wikipedia.org/wiki/Risk_register) är ett arbetsverktyg när det är aktuellt och läses, och en efterlevnadsartefakt när det inte är det.
- **Kontroll:** en åtgärd eller en mekanism som minskar en risk, till exempel en granskning, ett automatiskt test, ett godkännande, en uppdelning av arbetsuppgifter eller ett övervakningslarm. Den uppsättning kontroller en organisation förlitar sig på är dess system för [intern kontroll](https://en.wikipedia.org/wiki/Internal_control).
- **Nyckelriskindikator (KRI):** ett mått som signalerar en förändring i en risks nivå innan förlusten inträffar. En [nyckelriskindikator](https://en.wikipedia.org/wiki/Key_risk_indicator) är användbar när den leder en händelse och när någon agerar på den.

Riskkvantifiering har välkända svagheter. En [riskmatris](https://en.wikipedia.org/wiki/Risk_matrix), som plottar sannolikhet mot påverkan på ett rutnät av färgade celler, används brett och kritiseras brett: betyg är subjektiva, olika risker kan hamna i samma cell av olika skäl och aritmetiken att multiplicera ordinala poäng har ingen fast grund. Sällsynta, allvarliga händelser, ibland beskrivna genom [teorin om svarta svanar](https://en.wikipedia.org/wiki/Black_swan_theory), är särskilt svåra att betygsätta. Det ärliga svaret är att använda matrisen som ett samtalsstöd, visa intervall och stödja den med belägg om kontroller och incidenter. Ramverket med tre försvarslinjer, som skiljer teamen som äger risk, teamen som övervakar den och oberoende försäkran, erbjuder en struktur för roller, och det fungerar bäst när den första linjen, leverans- och driftteamen, verkligen äger sina risker.

Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller riskrapportering på ett särskilt sätt. När ett rött betyg ger granskning, betygsätter människor risker som gula. När en stängd risk är en framgång, stänger människor risker utan att behandla dem (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Nyckelprinciper

- **Håll registret kort och aktuellt.** Några få välägda risker som granskas slår hundratals som inte gör det.
- **Låt första linjen äga sina risker.** Människorna närmast arbetet känner det bäst.
- **Testa de kontroller du förlitar dig på.** En kontroll som aldrig testats är ett hopp.
- **Föredra ledande indikatorer som någon agerar på.** En indikator utan åtgärdsplan är dekoration.
- **Visa intervall och belägg, inte falsk precision.** Betyg är uppskattningar.
- **Minska risk genom att göra ändring liten och reversibel.** Kontinuerlig leverans med snabb återställning är en kontroll.
- **Tala om risk utan skuldbeläggning.** Ärlig rapportering är råmaterialet i hela praktiken.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Aktualitet i riskgranskning | Andel öppna risker granskade av sin ägare inom det överenskomna intervallet | risker granskade inom intervallet / öppna risker | procent | Granskningsdatum i riskregistret | Riskhantering; ständig förbättring | Risker granskade i planerings- och granskningssamtal | Månadsvis |
| Ägartäckning | Andel öppna risker med en namngiven, aktuell ägare som accepterat ägarskapet | risker med en bekräftad aktuell ägare / öppna risker | procent | Riskregister sammanfogat med personkatalogen | Riskhantering | Teamägda risker i backlogen | Månadsvis |
| Täckning av kontrolltest | Andel nyckelkontroller testade för drift inom den krävda cykeln | nyckelkontroller testade under cykeln / nyckelkontroller | procent | Kontrollregister och testposter | Riskhantering; informationssäkerhetshantering | Automatiska kontroller i pipelinen | Kvartalsvis |
| Kontrolleffektivitetsgrad | Andel testade kontroller som befanns fungera som avsett | kontroller funna effektiva / testade kontroller | procent | Testresultat | Riskhantering; ständig förbättring | Automatiska tester som godkänns av rätt skäl | Kvartalsvis |
| Svarstid vid KRI-överskridande | Tid från att en nyckelriskindikator passerar sitt tröskelvärde till ett registrerat beslut | median och 85:e percentil av timmar eller dagar från överskridande till beslut | timmar eller dagar | KRI-övervakning och beslutslogg | Riskhantering; övervakning och händelsehantering | Reaktion på en produktionssignal | Månadsvis |
| Punktlighet i behandlingsplaner | Andel riskbehandlingar slutförda senast sitt utlovade datum | behandlingar slutförda senast datum / behandlingar som förföll under perioden | procent | Riskregister och åtgärdsspårare | Riskhantering; ständig förbättring | Levererade förbättringsåtgärder | Kvartalsvis |
| Andel riskbaserade ändringar | Andel ändringar godkända genom riskbaserade vägar med kontrollbelägg bifogat | ändringar godkända genom en riskbaserad väg med nödvändigt belägg / ändringar under perioden | procent | Ändringsposter | Ändringsmöjliggörande; riskhantering | Ändringar levererade kontinuerligt med automatiska kontroller | Månadsvis |

Definiera granskningsintervallet och nyckelkontrollistan i registret. En kontroll är "testad" först när testet granskar belägg för drift, inte bara design. KRI-klockan startar när indikatorn passerar sitt tröskelvärde, så som övervakningssystemet registrerar det, och stoppar vid ett beslut som skrivs ned, som kan vara att agera, att acceptera eller att ändra tröskelvärdet. Uteslut risker som avvecklas ur nämnaren först efter ett registrerat stängningsbeslut.

## Rekommendationer

### Håll riskkonversationen levande

**1. Håll registret kort och skriv varje risk i en standardform.** Använd en mening av formen "På grund av [orsak] kan [händelse] inträffa, vilket leder till [konsekvens]." Begränsa registret till de risker som skulle ändra ett beslut eller en plan. Slå ihop dubbletter, dela vaga och avveckla risker som har passerat. En lista på några dussin risker som människor diskuterar är värd mer än tusen som ingen läser.

**2. Tilldela varje risk till en ägare som kan agera.** Ägaren är personen med befogenhet över åtgärden, vanligen i leverans- eller driftteamet, inte riskfunktionen. Bekräfta ägarskapet med personen och granska det när människor byter roll. Ägartäckning mäter detta, och en risk utan ägare är ett fynd.

**3. Granska risker i de samtal som redan sker.** Lyft de främsta riskerna i planering, granskning och incidentgranskningar, i stället för att skapa ett separat möte. Den agila vanan att regelbundet reflektera över hur man blir mer effektiv är ett naturligt hem för frågan "vad kan skada oss härnäst?" Registrera utfallet i registret.

**4. Para betyg med belägg och intervall.** För varje viktig risk, registrera vad som får dig att tro att den är sannolik eller allvarlig: incidenter, nästan-missar, testresultat, leverantörshistorik. Ge ett intervall för sannolikhet och påverkan där du kan och säg hur osäker du är. Kombinera inte ordinala poäng till ett enda tal och behandla det som en mätning. Om du använder en matris, använd den för att starta en diskussion (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

### Testa kontrollerna

**5. Namnge nyckelkontrollerna och vad var och en är till för.** För varje större risk, lista de få kontroller du förlitar dig på och hur ett fel hos var och en skulle se ut. Ett kontrollregister som listar hundratals mindre aktiviteter döljer de som spelar roll. Ta med automatiska kontroller i pipelinen, till exempel tester, policykontroller och godkännandegrindar.

**6. Testa drift, inte bara design.** En designgranskning frågar om kontrollen skulle fungera om den drevs. Ett driftstest frågar om den drevs och fungerade under perioden, genom att granska stickprov av belägg. Planera test på en cykel som motsvarar risken, registrera resultaten och följ upp fel. Där det är möjligt, automatisera beläggen så att testning sker kontinuerligt.

**7. Behandla kontrollfel som information.** Ett misslyckat test är kontrollsystemet som fungerar. Registrera felet, fråga varför och rätta orsaken. Kontrolleffektivitetsgraden bör läsas med uppföljningen: fel som hittas och rättas snabbt är friskare än en perfekt grad som kommer av svag testning.

**8. Använd oberoende försäkran där den tillför värde.** Intern revision eller en oberoende granskare kan testa de kontroller som första linjen äger och andra linjen övervakar. Oberoende skyddar mot att betygsätta sitt eget arbete. Samordna så att team inte testas av tre grupper för samma sak.

### Använd indikatorer och beslut väl

**9. Välj några få ledande indikatorer per större risk.** En nyckelriskindikator bör vara billig att mäta, knuten till en orsak och parad med ett tröskelvärde och en åtgärd. Till exempel signalerar åldern på den äldsta kritiska sårbarheten säkerhetsrisk, och andelen ändringar som behöver nödhantering signalerar ändringsrisk. Definiera vem som tittar på indikatorn och vad de ska göra vid tröskelvärdet (se ämne 8.1, Mätetal för säkerhetsincidenter och sårbarheter).

**10. Registrera beslutet vid varje överskridande.** När en indikator passerar ett tröskelvärde avgör någon: agera, acceptera eller justera tröskelvärdet. Skriv ned beslutet och skälet. Det bygger en historik som visar om tröskelvärden är väl satta och om responsen är snabb.

**11. Gör riskbaserat godkännande till standard för ändring.** I en miljö med kontinuerlig leverans, ersätt allomfattande godkännandenämnder med riskbaserade vägar: automatiska kontroller och kamratgranskning för lågriskiga standardändringar, och fullare granskning för de få högriskiga (se ämne 4.3, Mätetal för ändringsmöjliggörande). Bifoga beläggen för att kontrollerna kördes. Detta minskar risk och fördröjning tillsammans, eftersom små ändringar med automatiska belägg är säkrare än stora med en underskrift.

**12. Lär av förluster och nästan-missar.** Efter incidenter och nära tillbud, uppdatera registret: fanns risken, var den väl betygsatt, fungerade kontrollen? Använd svaren för att förbättra båda. Loopen mellan händelser och registret är det som håller registret ärligt (se ämne 4.2, Mätetal för efteranalyser och lärande).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Aktualitet i riskgranskning | Att markera risker som granskade utan diskussion; att ändra intervallet | Stickprova granskningar för innehåll; fast intervall i registret |
| Ägartäckning | Att tilldela ägare utan deras vetskap; att namnge en senior person utan befogenhet | Ägarbekräftelse; kontrollera att ägare kan agera på åtgärden |
| Täckning av kontrolltest | Att testa de lätta kontrollerna; att räkna designgranskningar som driftstest | Nyckelkontrollistan fastställd av en tredje part; testtyp registrerad |
| Kontrolleffektivitetsgrad | Att testa små stickprov; att välja stickprov som klarar sig | Stickprovsmetod oberoende av ägaren; stickprovsstorlek registrerad |
| Svarstid vid KRI-överskridande | Att ändra tröskelvärdet efter ett överskridande; att registrera ett beslut utan innehåll | Logg över tröskeländringar; stickprov av beslutsinnehåll |
| Punktlighet i behandlingsplaner | Att sätta lätta datum; att omdefiniera slutförande | Datum överenskomna med ägaren vid godkännande; kontrollera att riskbetyget rörde sig |
| Andel riskbaserade ändringar | Att klassificera ändringar som lågrisk för att undvika granskning; att bifoga belägg som inte producerades av kontroller | Stickprova klassificering mot regler; automatiska belägg från pipelinen |

En sund avläsning är ett kort register som människor argumenterar om, ägare som känner sina risker, kontroller testade med vissa fel funna och rättade, indikatorer som leder verkliga beslut och färre tunga godkännanden för små ändringar.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Riskmatris | Snabb, visuell, samtalsstartare | Subjektiv; falsk precision; ordinal aritmetik |
| Kvantifierade intervall | Ärligare om osäkerhet | Kräver data och kunskap; insats |
| Tunga godkännandenämnder | Synlig kontroll | Långsamt; uppmuntrar att bunta ändring |
| Riskbaserade automatiska kontroller | Snabbt och konsekvent | Kräver teknik; automatiska kontroller kan vara fel |
| Central riskfunktion äger risker | Konsekvens | Långt från arbetet; ägare avkopplade |
| Ägarskap i första linjen | Kunskap och ansvarsskyldighet | Varierande kvalitet; kräver tillsyn |
| Periodisk kontrolltestning | Effektivt för stabila kontroller | Missar avdrift mellan test |
| Kontinuerlig kontrollövervakning | Aktuella belägg | Verktygsinsats; brus |

Svaret är att placera ägarskap hos teamen, tillämpa lätt central tillsyn och oberoende testning, automatisera belägg där det är möjligt och använda betyg som uppmaningar till samtal.

## Frågor att diskutera med teamet

**1. Vilka tre risker är mest sannolika att skada den här tjänsten under nästa år, och vem äger var och en?**
Be varje medlem skriva tre risker privat och jämför sedan. Överlappen och skillnaderna är båda upplysande. Facilitatorn bör registrera vem som skulle agera på varje risk. Enas om de tre främsta och bekräfta ägare.

**2. Vilken kontroll är vi mest beroende av, och när kontrollerade vi senast att den fungerar?**
Välj en kontroll, till exempel en regel för kodgranskning, en säkerhetskopia eller ett godkännandesteg. Följ upp senaste gången belägg för dess drift granskades. Om ingen vet, planera ett test. Samtalet visar skillnaden mellan design och drift.

**3. Vad skulle få oss att ändra ett betyg från gult till rött, och vem skulle märka det?**
Diskutera indikatorerna och tröskelvärdena. Fråga om teamet någonsin har nedgraderat ett betyg för att undvika uppmärksamhet och vilket tryck som orsakade det. Enas om vilka belägg som skulle motivera en ändring och hur man gör rött till något tryggt att säga.

**4. Vilka godkännanden saktar våra ändringar utan att minska risk?**
Lista godkännandena en typisk ändring behöver och fråga för vart och ett vilken risk det adresserar och om det någonsin stoppade en ändring. Föreslå att ersätta ett med en automatisk kontroll. Enas om vilka belägg som skulle visa att ändringen är säker.

**5. När en kontroll fallerade, hur fick vi veta det, och vad gjorde vi?**
Minns ett nyligt fel. Hittades det genom testning, genom en incident eller av en revisor? Diskutera hur en starkare loop ser ut. Ta med hur personen som hittade det behandlades.

**6. Vilka risker har vi accepterat, och när omprövar vi det beslutet?**
Lista accepterade risker och granskningsdatumen. Kontrollera att var och en har en ägare och ett skäl. Accepterad risk utan granskningsdatum är en risk ingen bevakar.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam äger det mesta av den operativa risken. De bör underhålla en kort lista över sina egna risker, diskutera dem i planering och granskning och bygga in kontroller i pipelinen så att belägg är automatiska. De har nytta av riskbaserade ändringsvägar som låter lågriskiga ändringar flöda, och de bör vara ärliga om vad som kan gå fel.

### Service- och driftteam

Driftteam kör kontrollerna: säkerhetskopior, övervakning, åtkomstgranskningar och återställningstest. De bör bevara belägg för drift, testa kontroller på en regelbunden cykel och lyfta indikatorer som överskridits tidigt. De bär kostnaden för tunga kontroller och bör säga vilka som tillför lite.

### Ledning och styrning

Ledare sätter riskaptiten och avgör hur mycket friktion som är acceptabel. De bör be om en kort lista över främsta risker med ägare och belägg, välkomna röda betyg, finansiera kontrolltestning och stödja oberoende försäkran. Styrningen bör kontrollera att registret speglar incidenter och nästan-missar och bör inte belöna rapporter som ser prydliga ut.

### Kunder och användare

Användare bär konsekvenserna av risker som förverkligas, och vet ofta om dem före registret. De bör ha ett sätt att flagga farhågor och få veta om risker som påverkar dem, inom sekretessens gränser. Deras upplevelse av incidenter och ändringar är belägg för riskgranskningar.

## I praktiken: ett exempel från tjänstehantering

Ett nationellt energibolags digitala grupp driver kundfakturering, en mobilapp och integrationer med nätdriften. Siffrorna nedan är illustrativa.

Gruppens riskregister har 340 poster, senast städat för tre år sedan. Aktualiteten i riskgranskning är 22 procent, och 61 risker har ägare som har lämnat. Matrisen visar 85 risker i rött, och ingen läser rapporten. Den nya chefen för tjänsteförsäkran föreslår en omstart. Tillsammans med leveransteamen skär hon ned registret till de risker som skulle ändra ett beslut, och det slutar på 38. Hon tilldelar var och en till en namngiven ägare i teamet som kan agera, och de bekräftar. Hon väljer 12 nyckelkontroller och testar drift för var och en, i stället för att granska design. Fem fallerar: två återställningar från säkerhetskopior hade aldrig testats, en åtkomstgranskning hade hoppats över och två ändringsgodkännanden hade undertecknats utan belägg för testning.

Teamet rättar felen och ersätter ändringsgodkännandenämnden för standardändringar med riskbaserade vägar. Automatiska tester och kamratgranskning är kontrollerna, och pipelinen bifogar beläggen till ändringsposten. Varje större risk får en eller två ledande indikatorer med tröskelvärden och åtgärder. För risken med ett förlängt faktureringsavbrott är indikatorerna åldern på den äldsta kritiska sårbarheten och antalet misslyckade återställningar från säkerhetskopior under kvartalet. Det första kvartalet visar ägare som bekräftar alla 38 risker, aktualitet i granskning på 91 procent, en kontrolleffektivitetsgrad på 7 av 12 vid första testet och 12 av 12 efter rättelser och en mediansvarstid vid KRI-överskridande på 2 dagar. Andelen ändringar genom riskbaserade vägar är 64 procent.

Riskchefen ber om att antalet röda risker ska halveras inom ett år. Chefen för tjänsteförsäkran föreslår att följa punktlighet i behandlingsplaner och kontrolleffektivitet, och förklarar att antalet röda risker kan falla genom omklassificering och att hon hellre ser ärliga röda betyg. Beslutet registreras, och nästa kvartals rapport inkluderar de stickprovade besluten bakom varje nedgradering.

## Agilitet, AI, automatisering och analys

### Agilitet

Håll riskregistret levande genom regelbundna samtal med intressenter snarare än en årlig granskning. Varningen är att poängtal kan få osäkerhet att se prydlig ut.

### AI

AI-system behöver poster i riskregistret med en ägare, en punkt för mänsklig granskning och ett granskningsdatum. Mät kontrolleffektiviteten för AI-tillsyn genom att testa den. Varningen är att en policy som säger att en människa granskar utdata inte är en kontroll förrän någon testar den.

### Automatisering

Automatisera kontrollkontroller där de kan testas och mät automatiseringen på misslyckade och överhoppade kontroller. Varningen är att en godkänd automatisk kontroll kan testa fel sak.

### Analys

Redovisa täckning av kontrolltest och effektivitet med stickprovsstorleken. Beslutet detta ger underlag för är vilka kontroller som ska stärkas. Varningen är att små stickprov och subjektiv poängsättning begränsar precisionen, så säg det.

## Branschperspektiv

**Startup.** Risker handlar mest om att få slut på pengar, förlora nyckelpersoner och ett större avbrott. Håll en lista på en sida över de fem främsta, granska den månadsvis och testa säkerhetskopior och återställningar. Bygg in kontroller i pipelinen från början, eftersom det är billigare än att eftermontera.

**Småföretag.** En handfull risker dominerar: beroende av nyckelpersoner, en enda leverantör, ransomware och dataförlust. Håll en kort lista med ägare, testa återställningar och håll försäkring och kontaktuppgifter aktuella. Motstå tunga ramverk och låna från dem det som passar.

**Storföretag.** Skala kräver en gemensam taxonomi, ett lättviktigt registerverktyg och de tre försvarslinjerna i praktiken. Låt första linjen äga sina risker, håll andra linjen liten och rådgivande och gör oberoende testning effektiv. Undvik dubbla test över revision, risk och regelefterlevnad.

**Offentlig sektor.** Riskhantering är ofta en formell skyldighet med standardramverk, revisionsutskott och offentlig rapportering. Anpassa till det krävda ramverket, dokumentera uttalanden om riskaptit och behåll belägg. Offentlig ansvarsskyldighet gör ärliga röda betyg mer värdefulla, och också svårare (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna är ägarnas tid att granska risker, insatsen att definiera nyckelkontroller och testa dem, verktyg för registret och indikatorövervakning om de inte redan finns och kostnaden för oberoende försäkran. Att automatisera insamling av belägg tar teknisk insats och minskar sedan den återkommande kostnaden.

Avkastningen är färre överraskningar, snabbare och lättare ändringsgodkännande och mer trovärdig försäkran. Ett beskuret register och riskbaserade ändringsvägar sparar tid som stora godkännandeorgan förbrukade. Misslyckade kontrolltest som hittas före en incident förhindrar förluster som är svåra att prissätta. Bygg caset ur din egen data: tiden per ändringsgodkännande före och efter, antalet kontrollfel funna genom testning jämfört med funna genom incidenter eller revisorer och kostnaden för tidigare incidenter som en kontroll skulle ha förhindrat. Undvik att citera branschstatistik över förluster utan en spårbar källa och metod.

## Antimönster och fallgropar

- **Ett register som växer i all evighet.** Ingen läser det. Beskär det till de risker som spelar roll.
- **Betyg utan belägg.** De är åsikter i färg. Bifoga belägg och intervall.
- **Ägare bara till namnet.** Risken sitter hos någon som inte kan agera. Bekräfta ägarskap med rätt personer.
- **Att testa design och kalla det försäkran.** En kontroll som kunde fungera kanske inte gjorde det. Testa drift.
- **Att bara redovisa antalet röda risker.** Antal faller genom omklassificering. Titta på behandlingar och kontrollresultat.
- **Godkännandenämnder för varje ändring.** De saktar små ändringar och lär att bunta. Använd riskbaserade vägar.
- **Att straffa röda betyg.** Risker döljs då. Belöna tidig varning.
- **Separata risk- och leveranskulturer.** Riskarbete gjort mot team, inte med dem, producerar efterlevnadsteater.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Register och ägarskap | Lång, föråldrad lista | Register finns, delvis ägt | Kort register med bekräftade ägare i första linjen och granskningsdatum | Granskningar i teamsamtal; belägg och intervall bifogade | Risker delas över team och leverantörer med gemensamma ägare |
| Kontroller | Antas fungera | Design dokumenterad | Nyckelkontroller namngivna; driftstest på en cykel | Fel följs upp; belägg automatiserade där det är möjligt | Kontinuerlig kontrollövervakning med mänsklig tillsyn och oberoende försäkran |
| Beslut och ändring | Godkännanden i nämnd | Vissa standardändringar förhandsgodkända | Riskbaserade vägar med belägg bifogade | Indikatorer med tröskelvärden och registrerade beslut; vägar justeras utifrån utfall | Riskbeslut inbäddade i pipelines över organisationen och försörjningskedjan |

## Checklista

- [ ] Registret är kort, med risker skrivna i formen orsak, händelse och konsekvens.
- [ ] Varje risk har en bekräftad ägare i första linjen som kan agera.
- [ ] Risker granskas i teamets regelbundna samtal.
- [ ] Nyckelkontroller är namngivna och testade för drift på en angiven cykel.
- [ ] Kontrollfel loggas, förklaras och rättas.
- [ ] Varje större risk har en eller två ledande indikatorer med tröskelvärden och åtgärder.
- [ ] Beslut vid indikatorers överskridanden registreras.
- [ ] Riskbaserade ändringsvägar finns, med belägg bifogade automatiskt där det är möjligt.
- [ ] Accepterade risker har en ägare, ett skäl och ett granskningsdatum.
- [ ] Incidenter och nästan-missar uppdaterar registret.

## AI-prompter

**Skriv om risker i en standardform.**

```text
Here are [number] entries from our risk register: [paste, with sensitive details
removed]. Rewrite each in the form "Because of [cause], [event] may happen,
leading to [consequence]." Flag entries that are vague, duplicated, or really
issues that have already happened. Suggest which could be merged or retired.
Do not rate them. List your assumptions and what to confirm with the owners.
```

**Utforma ett kontrolltest.**

```text
For the control [describe, for example quarterly access review for the billing
system], design an operating test. Include what evidence to examine, how to
select a sample without bias, what counts as a pass or a fail, how to record
results, and how to automate the evidence collection over time. Do not assume
specific tools. List your assumptions and risks in the test design.
```

**Föreslå ledande indikatorer för en risk.**

```text
Risk: [describe in cause, event, consequence form]. Propose up to three leading
indicators that are cheap to measure and linked to the cause, with a suggested
response for a threshold breach and the way each indicator could mislead. Do
not invent threshold values; describe how we should calibrate them from our own
data. List your assumptions.
```

**Granska en ändringsgodkännandeprocess.**

```text
Our change approval process for [type of change] is: [describe steps, approvers,
and typical delays]. Identify steps that add delay without reducing risk, propose
a risk-based alternative with automated checks and evidence, and say what we
should measure to know whether risk went up or down. Do not claim research
results. List your assumptions and decisions needing leadership input.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett risk- eller kontrollmått.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för riskmått bär sin manipuleringsvektor, sitt skyddsräcke och sin beläggsregel.

## Viktigaste slutsatser

- Håll riskregistret kort, ägt av de team som kan agera och granskat i samtal som redan finns.
- Testa att nyckelkontroller fungerar, behandla fel som användbar information och automatisera beläggen.
- Använd några få ledande indikatorer med tröskelvärden, åtgärder och registrerade beslut.
- Ersätt allomfattande godkännande med riskbaserade ändringsvägar stödda av automatiska belägg.
- Visa intervall och belägg i stället för falsk precision och använd matriser för att starta samtal.
- Gör röda betyg trygga att ge och lär av förluster och nästan-missar.

## Referenser och vidare läsning

1. ISO 31000, *Risk management: Guidelines*, International Organization for Standardization.
2. Committee of Sponsoring Organizations of the Treadway Commission, *Enterprise Risk Management: Integrating with Strategy and Performance*, 2017.
3. Hubbard, D. W., *The Failure of Risk Management: Why It's Broken and How to Fix It*, 2nd ed., Wiley, 2020.
4. Cox, L. A., "What's wrong with risk matrices?" *Risk Analysis*, 28(2), 2008.
5. Taleb, N. N., *The Black Swan: The Impact of the Highly Improbable*, Random House, 2007.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Risk management](https://en.wikipedia.org/wiki/Risk_management).
9. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
10. Wikipedia, [Internal control](https://en.wikipedia.org/wiki/Internal_control).
11. Wikipedia, [Key risk indicator](https://en.wikipedia.org/wiki/Key_risk_indicator).
12. Wikipedia, [Risk matrix](https://en.wikipedia.org/wiki/Risk_matrix).
13. Wikipedia, [Black swan theory](https://en.wikipedia.org/wiki/Black_swan_theory).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
