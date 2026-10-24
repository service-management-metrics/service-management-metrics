# Mätetal för övervakning och larmkvalitet

**Ett larm är en begäran om en människas uppmärksamhet, så mät övervakning efter hur ofta den begäran var värd att göra, hur mycket av det verkliga besväret den fångade och hur mycket sömn och förtroende den kostade.**

## Översikt och motiv

Övervakning är insamling, bearbetning och visning av realtidsdata om ett system. [Systemövervakning](https://en.wikipedia.org/wiki/System_monitoring) besvarar frågan "fungerar tjänsten på det sätt användare behöver?" Ett larm är punkten där den datan ber en människa göra något. De flesta team mäter den första aktiviteten dåligt eller inte alls, och mäter den andra bara genom klagomål. Det här ämnet ger dig en liten uppsättning mått för båda: om övervakningen ser de fel som spelar roll, och om larmen den ger förtjänar den uppmärksamhet de kräver.

Några termer först. I ITIL 4:s vokabulär är en händelse en tillståndsförändring som har betydelse för att hantera en tjänst, och händelsehantering är praktiken att upptäcka händelser, avgöra vilka som spelar roll och välja svaret. Ett larm är en avisering till en människa, levererad som ett anrop, ett meddelande eller ett ärende. Ett anrop (page) är ett larm som avbryter någon omedelbart. Ett falskt positivt är ett larm som gick när ingenting behövde uppmärksamhet, och ett falskt negativt är ett fel som inget larm rapporterade; båda termerna kommer från språket kring [falska positiva och falska negativa](https://en.wikipedia.org/wiki/False_positives_and_false_negatives). Ett åtgärdbart larm är ett där en person hade en användbar åtgärd att vidta och vidtog den, eller medvetet valde att inte göra det av ett registrerat skäl.

Övervakningens två sidor drar åt olika håll. Att lägga till larm efter varje incident bygger en vägg av brus; att skära ner dem för att tysta det riskerar tystnad under det fel som spelar roll. Språket kring [precision och täckning](https://en.wikipedia.org/wiki/Precision_and_recall) (precision and recall) passar väl. Precision frågar vilken andel av de larm som gavs som var värda att ge. Täckning frågar vilken andel av de verkliga problemen som larmen fångade. Larmkvalitet är balansen mellan de två, och ett mått som bara bevakar det ena inbjuder teamet att offra det andra. [Signal-brusförhållandet](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) fångar samma spänning.

Den mänskliga kostnaden är skälet till att detta hör hemma i en bok om tjänstemätetal. [Larmtrötthet](https://en.wikipedia.org/wiki/Alarm_fatigue) är den väldokumenterade tendensen hos människor som utsätts för många larm, de flesta oviktiga, att bli avtrubbade och långsamma att reagera på de som spelar roll. Den studerades först i kliniska miljöer och gäller varje [jourschema](https://en.wikipedia.org/wiki/On-call) som anropas för ofta av larm som leder ingenstans. Trötta responder missar verkliga incidenter och lämnar så småningom schemat.

Synsätten skiljer sig mellan de två traditioner den här boken förenar. ITIL 4 placerar arbetet i praktiken övervakning och händelsehantering, med länkar till incidenthantering och servicenivåhantering. Dess angelägenhet är att händelser upptäcks, klassificeras och dirigeras så att incidenter hittas tidigt och hanteras konsekvent. [Site reliability engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) närmar sig det från andra änden: Googles bok *Site Reliability Engineering* hävdar att anrop ska vara brådskande, viktiga, åtgärdbara och verkliga, och att allt annat hör hemma i ett ärende eller på en instrumentpanel. Agila team möter det som ett arbetsavtal: vem som väcks, för vad och vem som rättar ett felaktigt larm. Måtten nedan lånar från alla tre och håller en regel: ett mått beskriver ett schema, en tjänst eller en larmregel, aldrig en individ.

Det här ämnet upprepar inte sina grannar. Incidenttidpunkter hör till ämne 3.3, Svarstid och lösningstid för incidenter, större incidenter till ämne 3.4, Mätetal för större incidenter, mål och felbudgetar till ämne 5.2, SLI:er, SLO:er och felbudgetar, och mänsklig belastning till ämne 5.7, Mätetal för rutinarbete och jour. Här är ämnet kvaliteten på signalen som startar alla dessa. Instrumentering täcks i ämne 1.5, Datakällor och instrumentering.

## Nyckelprinciper

- **Anropa på symptom användare känner; ärende eller instrumentpanel för resten.** Ett larm på det användare upplever (fel, långsamhet, otillgänglighet) förblir användbart när systemet förändras. Ett larm på en orsak (en full disk, en upptagen CPU) är användbart bara när det förutsäger ett symptom och en människa kan agera innan det anländer.
- **Varje larm måste leda till en åtgärd.** Om rätt svar på ett larm är att inte göra något bör larmet ändras, nedgraderas till ett ärende eller raderas. Mät andelen som leder till åtgärd och behandla resten som fel i övervakningen.
- **Mät både precision och täckning.** Att bara räkna brus belönar tystnad, och att bara räkna täckning belönar volym. De två tillsammans beskriver kvalitet, och var och en fungerar som skyddsräcke för den andra.
- **Behandla varje larmregel som en produkt med en ägare.** En regel har ett syfte, en tröskel, en driftinstruktion och ett granskningsdatum. Regler utan ägare ackumuleras, och bruset de ger tillhör ingen.
- **Redovisa scheman och tjänster, aldrig människor.** Larmbelastning är en egenskap hos hur systemet och schemat är utformade. Att namnge individer förvandlar ett designproblem till ett skuldproblem och döljer den verkliga rättelsen.

## Mätetalsdefinitioner

Måtten nedan är valda som en uppsättning. Enbart volym är meningslös, åtgärdbarhet talar om huruvida volymen är ett problem, och täckning och upptäcktstid talar om vad tystnaden döljer. Alla beräknas per tjänst eller per schema, och alla använder larmposten från övervaknings- och anropsverktygen sammanfogad med incident- och ärendeposter.

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Larmvolym | Antal larm som aviserade en människa, uppdelat på anrop och ärenden | Antal distinkta aviseringar levererade till ett schema eller en kö under perioden; upprepningar av samma öppna larm grupperas till ett; larm som hanteras helt av automatisering utan mänsklig avisering utesluts; redovisa per schema per vecka, och andelen utanför kontorstid separat | larm per schemavecka | Verktyg för anrop och larmdirigering | Övervakning och händelsehantering | Teamets arbetsavtal om jour | Veckovis |
| Andel åtgärdbara larm | Andel larm efter vilka en person vidtog en användbar åtgärd | Larm med en registrerad åtgärd (rättelse, begränsning, eskalering eller en ändring av larmregeln) / larm granskade under perioden; larm som löstes automatiskt innan någon kvittering räknas som icke åtgärdbara; ogranskade larm redovisas som ett separat antal, tas inte bort | procent | Larmpost sammanfogad med granskningsetikett, ärende eller incident | Övervakning och händelsehantering; incidenthantering | Teamets förbättringsåtgärd för drift | Veckogranskning, månadstrend |
| Andel falska positiva | Andel larm som gick när inget problem fanns | Larm märkta falskt positiva i granskningen / larm granskade under perioden; "falskt positivt" betyder att tillståndet inte var ett fel och ingen skulle vilja bli underrättad; ett verkligt problem som är för litet att agera på är inte ett falskt positivt | procent | Etiketter från larmgranskning | Övervakning och händelsehantering | Retrospektiv granskning av brus | Månadsvis |
| Detektionstäckning | Andel tjänster inom omfånget som har minst ett testat larm på ett användarvänt symptom | Tjänster med ett symptomlarm som provats genom ett test eller en verklig händelse de senaste 12 månaderna / tjänster inom tjänstekatalogens omfång; listan över tjänster inom omfånget fastläggs vid periodens början | procent | Tjänstekatalog, inventering av larmregler, testposter | Hantering av tjänstekonfiguration; övervakning och händelsehantering | Definition av klart för en ny tjänst | Kvartalsvis |
| Andel upptäckt av övervakningen | Andel incidenter som övervakningen upptäckte innan en användare eller kollega rapporterade dem | Incidenter vars första signal var ett larm / incidenter under perioden; klockan är incidentens öppningstid, och incidenter utan registrerad första signal redovisas som okända, inte som upptäckta | procent | Incidentpost med fält för första signal, larmtidslinje | Incidenthantering | Incidentgranskning (lärande efter incident) | Månadsvis |
| Tid till upptäckt (TTD) | Förfluten tid mellan början av användarpåverkan och det första larm som aviserade en människa | Tid för första larm som aviserade en människa minus påverkansstart, där påverkansstart är den tidigaste tidpunkt då servicenivåindikatorn bröt mot sitt mål, så som fastställts i incidentgranskningen; redovisa medianen och den 95:e percentilen; incidenter utan larm utesluts och räknas separat | minuter | Incidentgranskning, larmtidslinje, historik över servicenivåindikator | Incidenthantering; övervakning och händelsehantering | Granskning efter incident | Månadsvis, per incident |
| Larmkoncentration | Andel av larmvolymen som produceras av de bullrigaste larmreglerna | Larm från de fem reglerna med flest larm / alla larm under perioden; samma larm grupperas en gång; antalet fem regler är en konvention ett team kan ändra om det anger varför | procent | Inventering av larmregler och anropsregister | Ständig förbättring; övervakning och händelsehantering | Retrospektiv förbättringsbacklog | Månadsvis |
| Aktualitet för larmregler | Andel anropsregler som har en ägare, en länk till driftinstruktion och en granskning inom det överenskomna intervallet | Anropsregler som uppfyller alla tre villkoren / alla anropsregler; regler som inaktiverats under perioden utesluts | procent | Inventering av larmregler | Kunskapshantering; övervakning och händelsehantering | Arbetsavtal om driftberedskap | Kvartalsvis |

Larmvolym behöver sammanhang, så läs den bredvid andelen åtgärdbara larm. Tid till upptäckt använder början av användarpåverkan, inte ärendet, eftersom ärendeklockan startar efter upptäckt; påverkansstarten är en uppskattning från incidentgranskningen och bör märkas som en. Andelen falska positiva och andelen åtgärdbara larm är inte komplement, eftersom ett larm kan vara sant och ändå inte värt en människas tid.

## Rekommendationer

### Avgör vad som förtjänar ett anrop

**1. Skriv en anropspolicy och håll den kort.** Ange i ett stycke vad som förtjänar ett anrop (ett symptom som användare känner nu eller snart kommer att känna, och som en människa kan agera på) och vad som inte gör det. Allt annat går till en ärendekö eller en instrumentpanel. Kapitlet om övervakning av distribuerade system i Googles SRE-bok är en bra utgångspunkt (se ämne 5.2, SLI:er, SLO:er och felbudgetar).

**2. Larma på symptom och spara orsaker för diagnos.** Ett anrop för "felfrekvensen över det överenskomna tröskelvärdet" är ett anrop om användare. Ett anrop för "CPU:n är hög" är ett anrop om en gissning. Håll signaler på orsaksnivå på instrumentpaneler där responder tittar när symptomlarmet har gått, och befordra en till ett anrop först när den pålitligt förutsäger ett symptom med tillräcklig förvarning för att agera.

**3. Knyt anropströsklar till servicenivåmålet.** Där en tjänst har ett [servicenivåmål (SLO)](https://en.wikipedia.org/wiki/Service-level_objective), larma på takten med vilken felbudgeten förbrukas snarare än på råa trösklar. Kapitlet om larm på SLO:er i SRE Workbook beskriver larm på förbrukningstakt och avvägningarna mellan precision, täckning, upptäcktstid och återställningstid för larmet. Det tillvägagångssättet anropar på det som hotar målet och är tyst om korta blippar som inte gör det.

### Granska varje larm i en rytm

**4. Märk varje larm i en kort, regelbunden granskning.** Avsätt femton minuter varje vecka för varje schema för att titta på vad som gick. För varje larm, registrera en etikett: åtgärdbart, falskt positivt, verkligt men inte värt ett anrop eller dubblett. Etiketterna är datan för andelen åtgärdbara larm och andelen falska positiva, och granskningen är platsen där bullriga regler rättas nästa dag i stället för nästa kvartal.

**5. Låt granskningen ge en ändring.** Varje vecka, välj minst en regel att justera, nedgradera, slå ihop eller radera, och registrera ändringen i teamets backlog som vanligt arbete.

**6. Radera utan rädsla.** Team behåller larm eftersom det känns riskabelt att radera ett och ingen minns varför det finns. Kräv att varje anropsregel bär ett syfte och en ägare, och kom överens om att en regel som aldrig har lett till åtgärd under en angiven period tas bort eller nedgraderas, med ändringen registrerad så att den kan återställas. Måttet aktualitet för larmregler gör disciplinen synlig.

### Mät vad övervakningen missar

**7. Följ andelen incidenter användare hittade först.** Efter varje incident, registrera hur den först märktes: ett larm, en kollega, en kund, ett supportärende eller en rutinkontroll. Andelen som hittats av övervakningen är det närmaste praktiska måttet på täckning. Det är inte fullständigt, eftersom incidenter som ingen märkte aldrig kommer in i urvalet, så para det med periodiska tester av själva larmen.

**8. Uppskatta tid till upptäckt ärligt.** Fastställ början av användarpåverkan i granskningen efter incident utifrån historiken över servicenivåindikatorn, inte utifrån när någon skrev ärendet. Redovisa medianen och en hög percentil och visa incidenterna som inte hade något larm alls som ett separat antal. Ett enda medelvärde döljer både det typiska fallet och den dåliga svansen (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal, och ämne 3.3, Svarstid och lösningstid för incidenter).

**9. Testa de larm du är beroende av.** Detektionstäckning är bara trovärdig om larmet har setts fungera. Ta med en kontroll i övningsdagar eller releasegenomkörningar som medvetet orsakar ett symptom och bekräftar att rätt larm går, når rätt schema och länkar till en användbar driftinstruktion. Ett larm som aldrig prövats är ett hopp, inte en kontroll (se ämne 5.6, Mätetal för tjänstekontinuitet).

### Håll signalvägen frisk

**10. Övervaka övervakningen.** Ett tyst fel i övervakningssystemet ser exakt ut som en frisk tjänst. Lägg till en hjärtslagskontroll som anropar om larmpipelinen slutar leverera och registrera hur ofta själva pipelinen fallerar.

**11. Gruppera, avduplicera och länka innan du räknar.** Gruppera relaterade larm till ett, undertryck upprepningar av ett larm som redan är öppet och dirigera varje till det ägande schemat. Länka varje larm till dess driftinstruktion och till incidenten eller ärendet det skapade, eftersom den sammanfogningen är det som låter dig beräkna andelen åtgärdbara larm och andelen upptäckt av övervakningen utan manuell räkning (se ämne 1.5, Datakällor och instrumentering).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Larmvolym | Att höja trösklar, lägga till långa fördröjningar eller flytta larm från anrop till en tyst kö så att antalet faller medan problem förblir osedda; att dela upp eller slå ihop larm för att ändra antalet | Andel upptäckt av övervakningen och tid till upptäckt; en regel att varje nedgradering registreras med sitt skäl och granskas efter ett kvartal |
| Andel åtgärdbara larm | Att märka larm som åtgärdbara i efterhand, eller vidta en trivial åtgärd (en kommentar, en kvittering) för att kvalificera; att lämna bullriga larm ogranskade så att de aldrig kommer in i nämnaren | Antalet ogranskade larm visat bredvid andelen; en stickprovskontroll av någon utanför schemat; en skriven definition av "användbar åtgärd" |
| Andel falska positiva | Att definiera falska positiva snävt så att "verkliga men meningslösa" larm räknas som sanna; att stänga bullriga larm utan etikett | Andel åtgärdbara larm och etiketten "verkligt men inte värt ett anrop" följda separat; periodiskt stickprov av stängda larm |
| Detektionstäckning | Att lägga till ett trivialt larm (en ping) på varje tjänst för att göra anspråk på täckning; att räkna larm som aldrig testats | Kravet att larmet bevakar ett användarvänt symptom och har prövats de senaste 12 månaderna; andel upptäckt av övervakningen |
| Andel upptäckt av övervakningen | Att registrera varje incident som "upptäckt av övervakningen" även när en användare rapporterade den först; att skapa ett larm i efterhand och sedan hänvisa till det; att lämna fältet för första signal tomt för att undvika ett dåligt tal | Antalet okända visat bredvid andelen; belägg för första signalen hämtat ur larmtidslinjen, inte ur minnet; kundrapporterade incidenter länkade från supportregistret |
| Tid till upptäckt (TTD) | Att deklarera påverkansstarten senare än den var; att utesluta incidenter utan larm; att redovisa medelvärdet för att dölja svansen | Påverkansstart hämtad ur historiken över servicenivåindikatorn; incidenterna utan larm räknade och visade; median och 95:e percentil redovisade tillsammans |
| Larmkoncentration | Att dela upp en bullrig regel i flera så att ingen av dem är bland de fem främsta; att döpa om regler | Redovisa koncentration per underliggande fel eller tjänst såväl som per regel; följ total volym och andel åtgärdbara larm bredvid |
| Aktualitet för larmregler | Att lägga till platshållarägare, tomma länkar till driftinstruktioner eller en rutinmässig granskning för att uppfylla villkoret | En stickprovskontroll att länken till driftinstruktionen fungerar och användes i ett verkligt svar; praxisen att testa driftinstruktionen i övningsdagar |

En sund avläsning visar flera saker tillsammans. Larmvolym per schema är stabil eller fallande och ligger inom en nivå teamet valt som hållbar. Andelen åtgärdbara larm stiger under flera månader när de bullrigaste reglerna justeras. Andelen upptäckt av övervakningen är hög och tid till upptäckt är kort och blir inte längre när volymen faller, vilket visar att tystnaden förtjänades i stället för köptes. Detektionstäckningen växer eftersom tjänster testas, inte för att triviala larm lades till. Om volymen faller medan upptäcktsandelen eller tid till upptäckt försämras har teamet bytt täckning mot ro, och skyddsräckena är det som avslöjar det.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | För | Nackdelar |
| --- | --- | --- |
| Få, symptombaserade anrop | Tysta nätter, högt förtroende för varje anrop, lätta att hålla aktuella | Risk för sen upptäckt av problem som byggs upp långsamt; kräver goda vanor med ärenden och instrumentpaneler för resten |
| Många känsliga larm | Tidig varning om besvär på orsaksnivå; färre missade incidenter | Larmtrötthet, långsammare kvittering och avhopp från jourscheman |
| Larm på förbrukningstakt för SLO | Anrop knutna till det som hotar målet; färre blippar | Kräver goda indikatorer och ett överenskommet mål; tar inställning för att balansera upptäcktstid och precision |
| Veckovis larmgranskning | Snabb återkoppling; bullriga regler rättas snabbt | Kostar tid varje vecka; blir teater om ingen ändring följer |
| Märkning av människor | Fångar omdöme som inget verktyg har | Subjektivt; etiketter driver mellan granskare och scheman om inte definitionerna är nedskrivna |
| Automatisk undertryckning och gruppering | Skär ner brus i stor skala; minskar upprepade anrop | Kan dölja verkliga signaler om reglerna är fel; behöver egen övervakning och granskning |

Varje val avväger precision mot täckning, och avvägningen bör göras med avsikt och skrivas ned per tjänst, eftersom det är sammanhanget som låter vem som helst läsa talen rättvist. En tjänst med allvarliga konsekvenser av ett missat fel kan acceptera en lägre åtgärdbar andel för tidigare varning, med ett triagelager som skickar de extra larmen till en ärendekö på natten.

## Frågor att diskutera med teamet

**1. Vad skulle vi vilja bli väckta för, och vilka av förra månadens anrop uppfyllde den standarden?** Skriv anropspolicyn i en eller två meningar och ta sedan förra månadens anrop och pröva vart och ett mot den. Övningen är mer värdefull än procentsatsen den ger, eftersom oenigheterna visar var teamets förväntningar skiljer sig. Fånga de onödiga som kandidater att nedgradera.

**2. Om den bullrigaste larmregeln försvann i morgon, vad skulle vi förlora?** Ställ frågan för var och en av de fem främsta reglerna efter volym. Ofta kan ingen nämna ett specifikt fel regeln någonsin fångat, och det är ett tecken på att den kan justeras eller tas bort. Där någon kan, fråga om felet också skulle utlösa ett symptomlarm.

**3. Hur får vi veta vad övervakningen missade?** Titta på de senaste incidenterna och fråga vem som märkte det först och hur länge påverkan pågick innan dess. Svaret ger dig andelen upptäckt av övervakningen och en grov tid till upptäckt utan nya verktyg. Diskutera vilken signal som hade fångat var och en tidigare.

**4. Är vår jourbelastning hållbar, och hur skulle vi veta det?** Enas om vad hållbart betyder för ett schema, till exempel en gräns för anrop utanför kontorstid per vecka, och granska trenden per schema, inte per person. Om belastningen ligger över den överenskomna nivån, behandla det som ett tjänstefel och planera arbete för att minska den. Håll måtten konsekventa med ämne 5.7, Mätetal för rutinarbete och jour.

**5. Vilka av våra larm har vi aldrig testat, och hur kunde vi testa dem säkert?** Lista tjänsterna som beror på ett enda symptomlarm och fråga om någon har sett det gå på allvar eller i en genomkörning. Planera ett test och kontrollera hela vägen: upptäckt, dirigering, avisering, driftinstruktion. Fundera över om en fallerande larmpipeline alls skulle synas.

**6. Hur kunde de här talen manipuleras här, och vad skulle vi märka?** Be teamet beskriva, ärligt, hur de kunde få varje siffra att se bättre ut utan att förbättra något. Enas sedan om vilket skyddsräcke som skulle visa det och vem som tittar på det. Att namnge knepen i förväg gör dem mindre frestande (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Fyra perspektiv

### Produkt- och leveransteam

Team som bygger och driver en tjänst avgör vad den rapporterar om sig själv, så larmkvalitet börjar i definitionen av klart. En ny funktion som levereras med sin egen testade indikator och sitt eget larm slipper övervakning som pålimmas efter den första incidenten. Behandla larmjustering som vanligt backlogarbete.

### Service- och driftteam

Driftteam bär personsökaren och känner kostnaden först, så de äger granskningsrytmen, märkningen och pipelinens hjärtslag. När ett larm är fel hör rättelsen till ägaren av regeln, inte till den som fick anropet.

### Ledning och styrning

Ledare kan be om upptäckts- och åtgärdbarhetssiffror per tjänst, finansiera justeringstid och motstå ett mål för larmvolym som belönar tystnad. En fallande volym är goda nyheter bara om upptäcktsandelen och tid till upptäckt håller sig stadiga. Hållbara jourgränser är ett bemannings- och designbeslut, inte ett motivationsbeslut.

### Kunder och användare

Kunder ser aldrig ett larm; de ser om tjänsten föll och hur lång tid det tog att rätta. God övervakning visar sig som incidenter som rättas innan de märker dem, och färre fall där en kund rapporterar först. Där organisationen använder upplevelsemått (se ämne 5.1, Mätetal för SLA, OLA och XLA) är andelen incidenter som först rapporterats av användare en direkt indikator på upplevelseglappet.

## I praktiken: ett exempel från tjänstehantering

En medelstor nätbutik driver en orderplattform med fyra produktteam och ett plattformsteam som stöder jourschemat. Alla siffror i det här exemplet är illustrativa. Under fyra veckor (illustrativt) fick schemat 240 anrop, 70 av dem mellan 22:00 och 07:00. Teamet granskar varje anrop med fyra etiketter: åtgärdbart, falskt positivt, verkligt men inte värt ett anrop och dubblett.

Granskningen visar en andel åtgärdbara larm på 31 procent (illustrativt) och en andel falska positiva på 22 procent (illustrativt). Fem regler producerade 58 procent av anropen (illustrativt), och den största var ett diskgränsvärde på en batchserver som alltid återhämtade sig själv. Föregående kvartals andel upptäckt av övervakningen var 62 procent (illustrativt), och mediantiden till upptäckt var 14 minuter (illustrativt) med en 95:e percentil på 51 minuter (illustrativt).

Teamet nedgraderar tre bullriga regler till en ärendekö, slår ihop dubbletter så att ett fel ger ett anrop, ersätter larmet på rått felantal vid kassan med ett larm på felbudgetens förbrukningstakt (se ämne 5.2, SLI:er, SLO:er och felbudgetar) och lägger till ett symptomlarm för orderbekräftelsemejl, ett glapp bakom två kundrapporterade incidenter. Varje ändring är en backlogpost med en ägare. Fyra veckor senare faller anropen till 96 (illustrativt) och andelen åtgärdbara stiger till 64 procent (illustrativt), medan upptäcktsandelen stiger till 71 procent (illustrativt) och mediantiden till upptäckt håller sig på 14 minuter. Tystnaden verkar vara förtjänad.

Manipulationsrisken dyker upp den tredje månaden. En ny chef sätter ett informellt mål på färre än 60 anrop per fyra veckor, och ett schema når det genom att förlänga fördröjningen på felanropet vid kassan. Dess upptäcktsandel faller till 55 procent (illustrativt) och dess 95:e percentil av tid till upptäckt stiger till 80 minuter (illustrativt). Eftersom skyddsräckena sitter bredvid volymen fångar granskningen det. Teamet drar tillbaka volymmålet, återställer larmet och registrerar fallet i mätetalsregistret (se ämne 1.4, Styrning och ägarskap av mätetal).

## Agilitet, AI, automatisering och analys

### Agilitet

Granska larm i regelbunden rytm som en produkt som används av jourpersonal och avveckla eller justera de bullriga tillsammans med intressenter. Varningen är att ett mål att skära ner larmvolymen kan ta bort användbara larm.

### AI

AI kan gruppera, sammanfatta och rangordna larm och kan föreslå orsaker. Para brusreduktion med missgraden för verkliga incidenter och följ andelen AI-grupperingar som en person delade eller slog ihop. Varningen är att undertryckning av en modell kan dölja ett sällsynt men allvarligt larm.

### Automatisering

Räkna larm automatiskt efter regel och utfall och mät larmautomatisering på undertryckningsfel. Varningen är att automatiskt lösta larm kan se ut som friska system när regeln bara flaxar.

### Analys

Redovisa andelen åtgärdbara larm och detektionstäckning, med incidenterna som först märktes av användare. Beslutet detta ger underlag för är vilka larm som ska rättas eller tas bort. Varningen är att täckning mätt mot kända incidenter ignorerar felsätt som ingen har sett än.

## Branschperspektiv

**Startup.** Med en handfull ingenjörer i jour är prioriteten en kort anropspolicy och några symptomlarm på vägarna som tjänar pengar. En tio minuters titt på måndagen på vad som väckte människor räcker. Den främsta risken är inga larm alls, så att kunderna är övervakningen; räkna hur ofta en kund talade om det för dig först.

**Småföretag.** Små organisationer förlitar sig ofta på en leverantörs övervakning. Användbara mått är detektionstäckning för de få system som stoppar verksamheten och andelen incidenter som hittas av användare. Be leverantörer om larmdata som ditt avtal ger dig rätt till.

**Storföretag.** Stora organisationer har många verktyg och scheman, och varje team kan definiera "åtgärdbart" olika. Standardisera definitioner och etiketter, granska på teamnivå och sammanställ per tjänst snarare än per verktyg. Plattformar för händelsekorrelation minskar volymen i stor skala men behöver egna kontroller av täckning.

**Offentlig sektor.** Vissa tjänster går på kontorstid och andra, till exempel nöd- eller bidragssystem, går kontinuerligt. Detektionstäckning och testade larm spelar störst roll där fel bär juridiska konsekvenser eller säkerhetskonsekvenser, och testposter kan stödja revision. Redovisa täckning och upptäckt till tillsynsorgan, inte råa larmantal, som är lätta att misstolka (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Skälen att investera är praktiska. Bättre upptäckt förkortar tiden användare är påverkade. Färre meningslösa anrop skyddar sömnen, minskar avhopp från schemat och sparar uppmärksamhet för de larm som spelar roll. Kostnaden för dålig larmkvalitet är svår att se eftersom den är spridd över avbruten sömn, långsamma svar och avgångar av erfarna ingenjörer.

Kostnaden för att samla in dessa mått är liten om larm-, anrops- och incidentverktygen kan sammanfogas, och måttlig om etiketter läggs till för hand. De främsta kostnaderna är veckovis granskningstid, justerings- och raderingsarbete och enstaka detektionstester. Att rensa bort oanvända regler trimmar också licens- och lagringskostnader för övervakning, och den totala ägandekostnaden bör inkludera människors tid.

Avkastningen visar sig inom några månader som lugnare scheman, en stigande andel upptäckt av övervakningen och en tid till upptäckt som inte försämras. För att omvandla detta till pengar, jämför kostnaden för incidenttimmar och schemaomsättning med kostnaden för granskningen, med dina egna siffror. Använd inte branschgenomsnitt om du inte kan hänvisa till en verifierad källa.

## Antimönster och fallgropar

- **Att sätta mål för larmvolym.** Ett mål på antalet belönar tystnad och inbjuder till att dölja larm. Sätt mål på andelen åtgärdbara larm och upptäcktsandelen och använd volym som en sammanhangssiffra med en hållbarhetsgräns som teamet valt.
- **Att larma på varje orsak.** Dussintals anrop på orsaksnivå ger brus och missar ändå symptomet ingen tänkt på. Larma i stället på användarvända symptom.
- **Att lägga till ett larm efter varje incident och aldrig ta bort något.** Para varje nytt larm med en granskning av de det gör överflödiga.
- **Att räkna larm utan att märka dem.** Ett antal utan ett omdöme om användbarhet kan inte skilja ett bullrigt schema från ett livligt. Märk ett stickprov varje vecka, även om bara några minuter finns.
- **Att behandla täckning som ett antal larm.** En tjänst med femtio orsakslarm och inget symptomlarm är dåligt täckt. Definiera täckning som testad symptomupptäckt.
- **Att rangordna människor efter anrop som hanterats eller kvitterats.** Det straffar de schemamedlemmar som tar de svåra passen och uppmuntrar att undvika personsökaren. Redovisa per schema och tjänst och leta efter designrättelser.
- **Att aldrig testa larmvägen.** Ett larm som inte setts fungera är ett antagande. Ta med larmtester i övningsdagar och övervaka pipelinen själv.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Anropspolicy och regelägarskap | Larm läggs till ad hoc; ingen vet varför många finns | Vissa team har en policy och ägare för sina regler | En kort anropspolicy; varje anropsregel har en ägare och en driftinstruktion | Regelaktualitet följs och granskas; oanvända regler tas bort enligt schema | Policy och ägarskap anpassas över team och leverantörer när tjänster förändras |
| Mätning av larmkvalitet | Klagomål om brus; inga antal | Volym räknas av vissa team; ingen märkning | Veckogranskning med gemensamma etiketter; andel åtgärdbara larm och andel falska positiva redovisas per tjänst | Andelar följs över tid och paras med upptäcktsmått; förbättringsarbete finansieras | Kvalitet länkas över tjänster och leverantörer; definitioner revideras när de slutar ge underlag för beslut |
| Upptäckt och täckning | Kunder och kollegor rapporterar de flesta problem | Symptomlarm på några nyckeltjänster | Detektionstäckning följs med testade larm; första signal registreras för varje incident | Tid till upptäckt och andel upptäckt av övervakningen granskas med ett skyddsräcke; glapp blir planerat arbete | Upptäckt testas rutinmässigt över beroenden och leverantörer, inklusive larmpipelinen |
| Användning i förbättring | Larmrättelser följer den värsta natten | Rättelser följer incidenter | Varje granskning ger minst en ändring | Ändringar följs till sin effekt på volym, åtgärdbarhet och upptäckt | Schemabelastning, upptäckt och felbudgetar granskas tillsammans för att styra investeringar |

## Checklista

- [ ] Vi har en skriven anropspolicy på några meningar som säger vad som förtjänar ett anrop.
- [ ] Varje anropsregel har en ägare, ett syfte och en länk till en driftinstruktion.
- [ ] Varje schema granskar vad som gick minst varje vecka och märker varje larm.
- [ ] Varje granskning ger minst en registrerad ändring av en regel.
- [ ] Vi redovisar larmvolym, andel åtgärdbara larm och andel falska positiva per schema och tjänst, aldrig per person.
- [ ] Varje incident registrerar hur den först upptäcktes, med ett alternativ för okänt.
- [ ] Vi uppskattar påverkansstart ur historiken över servicenivåindikatorn och redovisar median och 95:e percentil av tid till upptäckt.
- [ ] Varje tjänst inom omfånget har ett symptomlarm som testats de senaste 12 månaderna.
- [ ] En hjärtslagskontroll anropar oss om larmpipelinen slutar.
- [ ] Vi har kommit överens om en hållbar belastning utanför kontorstid för varje schema och granskar den.
- [ ] Inget mål sätts enbart på larmvolym.

## AI-prompter

**Syfte: Skriv utkast till en anropspolicy för en tjänst utifrån dess indikatorer och konsekvenser.**

```text
Help me draft a paging policy for the service [service name].
Context: users are [user group]; the user-facing symptoms we care about are [symptoms, for example errors, latency, unavailability]; the consequences of a missed failure are [consequences]; the on-call rotation is [rotation description, for example hours and team size].
Write a short policy (under 200 words) that says what earns a page, what goes to a ticket queue, and what stays on a dashboard.
Do not invent thresholds or benchmark values; leave [threshold] placeholders for us to set from our own data.
List the questions you would ask us before finalizing it, and list your assumptions.
```

**Syfte: Analysera en exporterad larmgranskning efter brusmönster.**

```text
I will paste a table of alerts from [period] for the rotation [rotation name] with columns: [column names, for example rule, time, label, action taken, service].
Calculate the actionable alert rate, the false positive rate, the out-of-hours share, and the share of alerts from the five noisiest rules, using only the data I paste.
Suggest which rules to tune, merge, demote, or delete, with a reason for each, and mark each suggestion as a hypothesis to check.
Report by rule, service, and rotation, never by person. Do not invent benchmark values.
List your assumptions and any rows you excluded.
```

**Syfte: Kontrollera en uppsättning larmmått efter manipuleringsrisk före publicering.**

```text
Here are the alert quality metrics we plan to publish: [list of metrics with definitions and formulas].
For each metric, describe two ways it could be gamed or misread in our context of [organization type and service], and suggest a paired guardrail from the same list or a practice we can adopt.
Point out any metric that is shown without its guardrail.
Do not invent sources or benchmark values.
List your assumptions about how our tools record alerts and incidents.
```

**Syfte: Planera ett test av upptäckt för tjänster med svag täckning.**

```text
Our services are [list of services], and the symptom alerts we believe exist are [list of alerts].
Propose a safe test plan for the next [game day or rehearsal] that checks, for each service, that a deliberate symptom triggers the alert, reaches [rotation], and links to a runbook.
Say who should be told beforehand and how to record results for detection coverage.
Do not invent tool features; ask me how [monitoring tool] works.
List your assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta ämnet som definierar ett relaterat mått och skyddsräcket som bör sitta bredvid ett larmkvalitetsmått.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ändringar i det här ämnet håller mallen, manipuleringstabellen och korsreferenserna konsekventa.

## Viktigaste slutsatser

- Bedöm larm efter om de ledde till åtgärd och bedöm övervakning efter hur mycket verkligt besvär den fångade; precision och täckning vaktar varandra.
- Anropa på symptom som användare känner, knyt trösklar till servicenivåmålet där ett finns och spara orsaker för diagnos.
- Granska vad som gick varje vecka, märk det och gör minst en ändring varje gång.
- Sätt aldrig ett mål enbart på larmvolym; läs den bredvid andelen åtgärdbara larm, andelen upptäckt av övervakningen och tid till upptäckt.
- Testa larmen och larmpipelinen, eftersom ett otestat larm är ett antagande.
- Redovisa per schema och tjänst, aldrig per person, och behandla hållbar jourbelastning som ett designmål.

## Referenser och vidare läsning

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Monitoring Distributed Systems," https://sre.google/sre-book/monitoring-distributed-systems/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Practical Alerting from Time-Series Data," https://sre.google/sre-book/practical-alerting/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, "Alerting on SLOs," https://sre.google/workbook/alerting-on-slos/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [System monitoring](https://en.wikipedia.org/wiki/System_monitoring).
7. Wikipedia, [False positives and false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives).
8. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
9. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
