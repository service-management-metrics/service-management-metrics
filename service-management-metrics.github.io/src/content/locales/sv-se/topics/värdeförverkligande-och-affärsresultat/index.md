# Värdeförverkligande och affärsresultat

**Att leverera en ändring är inte samma sak som att organisationen drar nytta av den, så ange den förväntade nyttan innan du bygger, kontrollera den efter release med de människor som var tänkta att vinna på den och var ärlig om hur mycket av en förbättring du kan tillskriva ditt arbete.**

## Översikt och motiv

Agila arbetssätt sätter fungerande programvara först och håller intressenter samarbetande hela vägen, så att det som levereras är det människor behöver. It-tjänstehantering (ITSM), så som den kodifierats av ITIL, formulerar samma angelägenhet som värde: en tjänst är värdefull när den hjälper kunder att nå resultat de vill ha, med kostnader och risker de accepterar. Båda traditionerna möts vid en obekväm fråga. Om ett år, är människorna och organisationen bättre ställda på grund av det som det här teamet byggde och drev?

Att besvara den är svårare än att räkna det som levererats. Funktioner levereras och ingen använder dem. Incidenter faller av skäl som inte har med teamets arbete att göra. En kostnadsbesparing dyker upp på en bild, och budgeten den kom från spenderas någon annanstans. Det här ämnet handlar om att stänga det glappet, och det länkar direkt till resultatfokuset som introducerades tidigt i boken (se ämne 1.3, Resultat före leverans: att välja vad som ska mätas).

Fyra idéer organiserar ämnet.

- **Nytta.** En nytta är en mätbar förbättring som en intressent värdesätter, till exempel mindre tid på en uppgift, färre fel, fler kunder betjänade eller lägre risk. En funktion är inte en nytta. Den är ett medel. [Nyttorealisering](https://en.wikipedia.org/wiki/Benefits_realisation_management) är disciplinen att identifiera nyttor, tilldela ägare och kontrollera att de anländer.
- **Värdehypotes.** Innan man bygger skriver teamet ned vad det förväntar sig ska förändras, för vem, med hur mycket och hur det ska märkas. Detta är ett prövbart påstående, och det kan vara fel. En [förändringsteori](https://en.wikipedia.org/wiki/Theory_of_change) eller en [logisk modell](https://en.wikipedia.org/wiki/Logic_model) lägger ut kedjan från aktiviteter till leveranser till resultat, vilket hjälper till att göra hypotesen uttrycklig.
- **Ledande och efterföljande indikatorer.** En [ledande indikator](https://en.wikipedia.org/wiki/Leading_indicator) rör sig tidigt och förutsäger ett resultat, till exempel införande av en ny process. En [efterföljande indikator](https://en.wikipedia.org/wiki/Lagging_indicator) bekräftar resultatet i efterhand, till exempel minskad kostnad per transaktion. Använd båda: ledande indikatorer låter dig korrigera kursen, och efterföljande indikatorer talar om huruvida det fungerade.
- **Tillskrivning.** Många saker förändras på en gång. För att säga att ditt arbete orsakade en förbättring behöver du en jämförelse: en baslinje, en jämförelsegrupp eller en design före och efter som tar hänsyn till andra förändringar. Utan en är värdepåståenden berättelser. Den ärliga hållningen är ofta "förknippat med" och inte "orsakat av".

Målramverk såsom [mål och nyckelresultat](https://en.wikipedia.org/wiki/Objectives_and_key_results) (OKR:er) kan koppla teamets arbete till affärsresultat, och det tidigare ämnet om mätramverk täcker dem ingående (se ämne 1.7, Ramverk för mätning). Risken med varje ramverk är den som [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) namnger: när ett nyttotal blir ett mål hittar människor sätt att producera talet utan nyttan (se ämne 1.2, Goodharts lag och mätetalens psykologi).

Ämnet slår också en bro till pengar. Ämnet om avkastning på investering och affärscase i nästa del tar den ekonomiska synen ingående (se ämne 7.7, Avkastning på investering och affärscase). Här ligger fokus på beläggen för resultat, som matar det caset.

## Nyckelprinciper

- **Skriv ned den förväntade nyttan innan du bygger.** Ett påstående som inte kan kontrolleras senare går inte att lära av.
- **Namnge en ägare för varje nytta.** Ägaren är en intressent som kommer att se förändringen, inte leveransteamet.
- **Mät hos användarna, efter release.** Leverans är början på kontrollen, inte slutet.
- **Använd ledande indikatorer för att styra och efterföljande för att bekräfta.**
- **Var ärlig om tillskrivning.** Säg vad annat som ändrades och undvik påståenden som beläggen inte kan stödja.
- **Räkna nyttor som inte kom.** Att lära sig av en misslyckad hypotes är en nytta av att arbeta så här.
- **Fortsätt samarbeta.** Intressenter och teamet granskar beläggen tillsammans, regelbundet.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Nyttorealiseringsgrad | Andel förväntade nyttor som observerades vid det överenskomna granskningsdatumet | nyttor med uppmätt resultat på eller över det överenskomna tröskelvärdet / förväntade nyttor med ett granskningsdatum under perioden | procent | Nyttoregister med ägare, baslinjer och granskningsdatum | Ständig förbättring; styrning av tjänstevärdesystemet | Resultatgranskning med intressenter | Kvartalsvis |
| Tid till första värde | Tid från arbetets början till den första mätbara nyttan för användare | dagar från första påbörjade arbete till det första datum nyttoindikatorn rörde sig som förväntat | dagar | Arbetsverktyg och nyttoindikator | Tjänstedesign; release- och driftsättningshantering | Kontinuerlig leverans av värde | Per initiativ |
| Kontrollgrad för hypoteser | Andel släppta ändringar vars angivna värdehypotes kontrollerades efter release | ändringar med en registrerad kontroll efter release / släppta ändringar som bar en hypotes | procent | Hypoteslogg länkad till releaseposter | Ständig förbättring; ändringsmöjliggörande | Lärande av släppt arbete | Månadsvis |
| Andel med beläggskvalitet | Andel påstådda nyttor som har en baslinje och en angiven jämförelsemetod | nyttopåståenden med baslinje och metod / redovisade nyttopåståenden | procent | Granskning av nyttoregistret | Mätning och rapportering | Ärlig rapportering av resultat | Kvartalsvis |
| Förflyttning av resultatindikator | Förändring i en vald resultatindikator jämfört med dess baslinje och med en jämförelse där sådan finns | (indikator efter minus indikator före) med jämförelsegruppens förändring redovisad bredvid | indikatorenheter | Produktanalys, tjänstedata, ekonomi | Servicenivåhantering; ständig förbättring | Framsteg mot nyckelresultat | Månadsvis |
| Timmar av affärspåverkan | Timmar då en affärsprocess var degraderad eller stoppad på grund av tjänsteproblem | timmar av degraderad eller stoppad process som processägare tillskriver it-tjänsteorsaker | timmar | Incidentposter sammanfogade med bekräftelse från processägare | Incidenthantering; tillgänglighetshantering | Granskning av affärspåverkan | Månadsvis |
| Andel kapacitet kopplad till resultat | Andel av teamets kapacitet som läggs på arbete kopplat till ett angivet resultat | kapacitet på poster länkade till ett registrerat resultat / total kapacitet | procent | Arbetsverktyg med ett resultatfält | Tjänstevärdesystem; portföljstyrning | Arbete anpassat till produktmålet | Kvartalsvis |

Definiera granskningsdatumet och tröskelvärdet för varje nytta när den registreras, inte efteråt. Tid till första värde startar när arbetet börjar och stoppar när indikatorn först rör sig i förväntad riktning med en angiven mängd, vilket kan vara långt efter release. Tillskrivningen av timmar av affärspåverkan överenskoms med processägaren, och tvister loggas.

## Rekommendationer

### Före bygget: gör påståendet kontrollerbart

**1. Skriv en värdehypotes för varje betydande ändring.** Använd en enkel form: "Vi tror att [ändring] kommer att hjälpa [vem] att [göra vad] så att [mätbar förbättring]. Vi kommer att veta genom att [indikator] rör sig från [baslinje] till [förväntat], granskat den [datum]." Håll den tillräckligt kort för att rymmas på ett kort på tavlan. Team som inte kan fylla i luckorna har ofta ännu inte förstått problemet.

**2. Registrera en baslinje.** Utan ett före finns inget efter. Fånga indikatorns nuvarande värde, hur den mättes och hur mycket den varierar. Om indikatorn är brusig vilseleder ett enda tal, så registrera ett intervall över flera veckor (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

**3. Välj ledande och efterföljande indikatorer.** För en ny självbetjäningsförfrågan är en ledande indikator hur många kvalificerade användare som slutför den, och en efterföljande indikator är minskningen av timmar för manuell hantering (se ämne 6.3, Mätetal för tjänsteanvändning och katalog). Kom överens om vilken indikator som kontrolleras när. Ledande indikatorer tillåter en kursjustering utan att vänta på att kvartalet tar slut.

**4. Namnge en nyttoägare utanför leveransteamet.** Ägaren är intressenten som kommer att se förbättringen på sitt område och som kan bedöma den. Leveransteamet stöder mätningen men rättar inte sina egna läxor. Detta är kontinuerligt samarbete i praktiken: personen som ville ha resultatet förblir involverad tills det bekräftats.

### Efter release: kontrollera ärligt

**5. Granska hypotesen på det överenskomna datumet.** Håll en kort granskning med ägaren och teamet. Titta på indikatorn, baslinjen och jämförelsen. Registrera resultatet i registret: uppnådd, delvis uppnådd, inte uppnådd eller kan inte avgöras. "Kan inte avgöras" är ett legitimt resultat och en uppmaning att förbättra mätningen.

**6. Använd en jämförelse där du kan.** Den starkaste jämförelsen är ett kontrollerat experiment. [A/B-testning](https://en.wikipedia.org/wiki/A/B_testing) jämför två versioner med slumpmässigt tilldelade användare och fungerar väl för digitala tjänster med tillräcklig trafik. Där slumpmässig tilldelning inte är möjlig låter en stegvis utrullning dig jämföra grupper som har och inte har fått ändringen. Ett angreppssätt med [differens-i-differens](https://en.wikipedia.org/wiki/Difference_in_differences) jämför förändringen i en behandlad grupp med förändringen i en obehandlad grupp under samma period, vilket tar bort gemensamma trender. Använd den enklaste design som passar.

**7. Leta efter störfaktorer.** En [störfaktor](https://en.wikipedia.org/wiki/Confounding) (confounder) är något annat som ändrades och kunde förklara resultatet: ett säsongsmönster, en ny policy, en annan blandning av förfrågningar. Lista de rimliga innan du påstår en effekt. Om du inte kan utesluta dem, säg vad beläggen stöder och inte mer.

**8. Redovisa negativa och inga resultat.** När en ändring inte hjälpte, säg det och registrera vad som lärdes. [Överlevnadsbias](https://en.wikipedia.org/wiki/Survivorship_bias), vanan att bara titta på framgångar, får program att se bättre ut än de är. Ett register som bara innehåller vinster har inte förts ärligt.

### Håll programmet ärligt

**9. Skilj beläggskvalitet från nyttan.** Följ andelen påståenden som har en baslinje och en angiven metod. Ett stort påstående med svaga belägg bör läsas som det. Ett sunt register visar måttliga påståenden med starka belägg och några ärliga poster med "kan inte avgöras".

**10. Länka kapacitet till resultat, löst.** Fråga vilken andel av teamets arbete som är knutet till ett angivet resultat och titta på resten. Visst arbete, till exempel säkerhetsrättelser eller att hålla verksamheten igång, har ingen ny nytta, och det är bra om det är namngivet. Syftet är att märka avdrift, inte att pressa varje uppgift in i en nyttoberättelse.

**11. Koppla till målramverket du använder.** Om du använder OKR:er, gör nyckelresultaten till resultatindikatorerna och granska dem med intressenter. Håll nyckelresultaten om resultat, inte uppgifter, och lämna utrymme för ambitiösa mål som kanske inte nås fullt ut. Gör inte nyckelresultat till individuella mål (se ämne 1.7, Ramverk för mätning).

**12. Granska portföljen såväl som projektet.** En gång per kvartal, titta över initiativ på vilka nyttor som kom, vilka som inte gjorde det och vad mönstret säger om hur teamet uppskattar och väljer arbete. Använd det för att förbättra sättet hypoteser skrivs, inte för att rangordna team.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Nyttorealiseringsgrad | Att sätta låga tröskelvärden; att flytta granskningsdatumet; att omdefiniera nyttan i efterhand | Tröskelvärde och datum fastlagda vid godkännande; andel med beläggskvalitet; ägare utanför leveransteamet |
| Tid till första värde | Att välja en tidig indikator som rör sig av fel skäl; att starta klockan sent | Indikator och klocka definierade i registret; bekräfta med nyttoägaren |
| Kontrollgrad för hypoteser | Att skriva vaga hypoteser som alltid klaras; att bara kontrollera lyckade ändringar | Stickprova hypoteser för prövbarhet; ta med inga och misslyckade resultat i granskningen |
| Andel med beläggskvalitet | Att fylla i baslinjer i efterhand; att beskriva vilken jämförelse som helst som en metod | Baslinje daterad före ändringen; granskning av någon utanför teamet |
| Förflyttning av resultatindikator | Att välja en gynnsam period eller grupp; att ignorera störfaktorer | Förregistrerad period och grupp; lista över störfaktorer som beaktats |
| Timmar av affärspåverkan | Processägare som blåser upp eller minskar tillskrivningar; incidenter som omklassificeras för att undvika tillskrivning | Tillskrivningsregler nedskrivna och loggade; jämför med incident- och tillgänglighetsregister |
| Andel kapacitet kopplad till resultat | Att tagga allt arbete med ett generiskt resultat; att uppfinna resultat för rutinarbete | Resultatlista granskad med intressenter; stickprova poster för länkkvalitet |

En sund avläsning är ett register där vissa nyttor är uppnådda, vissa inte, några oklara och varje post har en baslinje, en ägare och en angiven metod. Ett register av enhetlig framgång bör behandlas med misstänksamhet.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Formellt nyttoregister | Ansvarsskyldighet, lärande över initiativ | Byråkrati om det tillämpas på varje liten ändring |
| Lätt hypotes på varje kort | Billig, bygger vanan | Lätt att skriva vagt |
| Kontrollerat experiment | Starka belägg för orsak | Behöver trafik, tid och en design som passar tjänsten |
| Bara före och efter | Enkelt, snabbt | Förvirrat av andra ändringar |
| Intressentbedömning | Fångar värde som mått missar | Utsatt för optimism och politik |
| Ledande indikatorer | Tidig kursjustering | Förutsäger kanske inte det verkliga resultatet |
| Efterföljande indikatorer | Bekräftar verkliga resultat | Kommer sent; många orsaker |

Svaret är att anpassa beläggens tyngd till ändringens storlek och risk. Använd en lätt hypotes och ett enkelt före och efter för små ändringar, och ett experiment eller en stegvis utrullning för stora. Registrera alltid vad du förväntade dig, vad som hände och hur säker du är.

## Frågor att diskutera med teamet

**1. Vad levererade vi förra kvartalet, och vad ändrades för de människor det var tänkt att hjälpa?**
Lista de huvudsakliga ändringarna och namnge för var och en personen som skulle märka en skillnad. Fråga vad de skulle säga. Facilitatorn bör notera ändringar där ingen kan svara, eftersom de är kandidater för en kontroll efter release. Enas om en ändring att granska med dess ägare inom en månad.

**2. För vår nästa betydande ändring, vad är värdehypotesen och hur ska vi veta?**
Fyll i hypotesformuläret tillsammans. Utmana vaga ord och saknade baslinjer. Fråga vilket resultat som skulle få teamet att ändra sina planer. Om gruppen inte kan enas om ett mått är det en upptäcktsuppgift före bygget.

**3. Vem äger nyttan, och är de i rummet?**
Kontrollera att varje nytta har en ägare utanför leveransteamet. Fråga hur ofta ägaren ser beläggen. Där ägaren är teamet självt, diskutera vem mer som bör dela bedömningen. Samtalet stöder kontinuerligt samarbete mellan intressenter.

**4. Vad annat ändrades när talen förbättrades?**
Ta en nylig påstådd förbättring och lista andra ändringar under samma period: policy, säsongsvariation, bemanning, ett annat teams release. Fråga vilka som kunde förklara resultatet. Besluta om förbättringen ska beskrivas som orsakad av ändringen, förknippad med den eller oklar.

**5. Vilka av våra tidigare hypoteser visade sig vara fel, och vad gjorde vi åt det?**
Be om en berättelse om en misslyckad förväntan. Om ingen kommer snabbt kanske teamet inte kontrollerar, eller inte pratar om det. Diskutera hur man kan göra rapporteringen av ett inget-resultat tryggt och användbart.

**6. Hur stor andel av vår kapacitet är knuten till ett resultat, och känns det rätt?**
Granska en månads färdigt arbete och tagga varje post med ett resultat eller "att hålla tjänsten igång". Fråga om fördelningen motsvarar vad ledare tror. Diskutera arbete utan resultat och om det ska fortsätta.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam äger hypotesen och mätplanen, och de bör leverera ändringar i små steg så att belägg kommer tidigt. De bör bygga in indikatorn i ändringen, till exempel genom att logga händelserna de behöver, och be nyttoägaren bekräfta vad de ser. Team bör välkomna misslyckade hypoteser som information, eftersom tidigt lärande sparar kostnaden för att bygga mer av fel sak.

### Service- och driftteam

Driftteam ser den verkliga effekten av ändringar på incidenter, förfrågningar och kapacitet. De håller mycket av datan för efterföljande indikatorer, till exempel timmar för manuell hantering och upprepade kontakter, och de bör hjälpa till att kontrollera hypoteser såväl som att absorbera ändring. De bör säga ifrån när nyttor som påstås på papperet inte stämmer med vad servicedesken ser.

### Ledning och styrning

Ledare väljer om nyttor är ett lärandeverktyg eller en säljpresentation. De bör be om baslinjer och metoder, välkomna ärliga "inte uppnådda" resultat och undvika att hålla team till nyttotal som sattes innan fakta var kända. Styrningen bör granska registret som en portfölj, finansiera mätningen och vara villig att stoppa arbete vars hypotes har misslyckats.

### Kunder och användare

Användare vet om en ändring hjälpte, och de är de bästa domarna om de flesta nyttor. De bör tillfrågas, få se resultaten och få veta när en ändring inte levererade det som hoppats. Deras kommentarer är belägg i egen rätt. En nytta som talen visar och användare inte känner förtjänar en närmare titt.

## I praktiken: ett exempel från tjänstehantering

En regional sjukförsäkrares it-grupp bygger och driver en skadeportal för vårdgivare. Siffrorna nedan är illustrativa.

Gruppen planerar att lägga till automatiska behörighetskontroller i skadeinlämningen. Hypotesen, skriven tillsammans med skadehanteringschefen, är: "Vi tror att automatiska behörighetskontroller hjälper vårdgivarnas faktureringspersonal att skicka in korrekta ärenden första gången, så att ärenden som returneras för rättelse faller från 18 procent till 12 procent inom tre månader. Vi kommer att veta genom andelen returnerade ärenden, granskat den 1 mars." Baslinjen är genomsnittet av de senaste 12 veckorna, 18 procent med ett veckointervall på 15 till 21 procent. Den ledande indikatorn är användning av kontrollen under första månaden. Skadehanteringschefen är nyttoägare.

Teamet släpper i små steg, med kontrollen först tillgänglig för en region. Efter tre veckor är användningen av kontrollen 64 procent i den regionen. Vid granskningsdatumet faller returnerade ärenden till 13 procent i regionen med kontrollen och till 17 procent i regionerna utan den. Skadechefen påpekar att en policyändring för en faktureringskod också trädde i kraft under perioden. Teamet listar den som en störfaktor och tar bort ärenden med den koden från båda grupperna, vilket ger 14 procent mot 17,5. Nyttorealiseringen registreras som "delvis uppnådd": bättre än baslinjen med en tydlig marginal, men under målet på 12 procent. Teamet skriver ärligt i registret att beläggen kommer från en stegvis utrullning över ett kvartal och att effekten kan skilja sig för andra vårdgivare.

De rullar sedan ut kontrollen till alla regioner, med en plan att kontrollera igen om tre månader, och lägger till en uppgift att förbättra felmeddelandet, eftersom kommentarer från vårdgivare säger att meddelandet är otydligt. Finansdirektören ber om ett enda tal till styrelsen. It-chefen erbjuder intervallet och metoden och avböjer att ange en siffra med större precision än beläggen tillåter. Beslutet registreras, tillsammans med nästa granskningsdatum.

## Agilitet, AI, automatisering och analys

### Agilitet

Ange den förväntade nyttan innan arbetet börjar och kontrollera den efter release med de människor som var tänkta att vinna på den. Varningen är att nyttor som påstås utan en baslinje är berättelser.

### AI

AI-projekt lovar ofta stora nyttor, så registrera baslinjen, den förväntade förändringen och beläggen för AI-stött arbete separat och para produktivitetspåståenden med kvalitet och kostnad. Varningen är att nyttouppskattningar producerade av ett AI-verktyg bör kontrolleras, eftersom de kan låta precisa och sakna stöd.

### Automatisering

Automatisera insamlingen av resultatindikatorer som redan finns i dina system och mät nyttogranskningsprocessen på slutförande. Varningen är att automatiska instrumentpaneler med indikatorer kan ersätta samtalet om huruvida nyttan inträffade.

### Analys

Redovisa förflyttningen av resultatindikatorer med beläggskvalitet och tillskrivningens gränser. Beslutet detta ger underlag för är vad som ska fortsätta, ändras eller stoppas. Varningen är att tillskrivning är svårt, så beskriv osäkerheten.

## Branschperspektiv

**Startup.** Nyttor ligger nära intäkter och retention, och lärandehastighet spelar roll. Skriv hypoteser på en rad på kort, kontrollera dem snabbt och undvik tunga register. Använd enkla jämförelser och acceptera att små urval begränsar vad du kan påstå.

**Småföretag.** Ägaren är nyttoägaren, och effekterna är synliga. Håll en kort lista över ändringar med förväntade effekter och granska den varje kvartal. Undvik att blåsa upp små vinster till stora siffror och jämför med ändringens kostnad.

**Storföretag.** Portföljer, finansieringscykler och många intressenter gör ett nyttoregister användbart. Håll det lätt för små ändringar och rigoröst för stora, placera ägare i affärsenheter och granska över portföljen. Se upp så att tal inte sammanställs med olika definitioner.

**Offentlig sektor.** Resultat är ofta kollektiva nyttigheter, till exempel tillgång, rättvisa och säkerhet, som inte går att reducera till intäkter. Definiera resultat med de människor som betjänas, använd blandade belägg och redovisa metoder öppet. Formella affärscase och nyttogranskningar kan krävas, och ärliga inga-resultat spelar roll för offentlig ansvarsskyldighet (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaden är främst uppmärksamhet. Att skriva en hypotes tar minuter, en baslinje tar en timme eller några, och en granskning tar ett kort möte. Experiment och stegvisa utrullningar behöver designinsats och en del verktyg. Ett nyttoregister kan vara ett kalkylblad eller ett fält i arbetsverktyget.

Avkastningen är bättre investeringsbeslut. Ett team som kontrollerar sina hypoteser slutar bygga saker som inte hjälper, skalar upp de som gör det och lär sig hur väl det förutsäger. Det sparar kostnaden för oanvända funktioner och misslyckade program. Bygg caset ur dina egna data: andelen ändringar som bar en hypotes, andelen som kontrollerades och kostnaden för arbete som senare övergavs eller vändes. Undvik publicerade siffror om misslyckandegraden för it-projekt om du inte kan spåra deras källa och metod, eftersom de varierar kraftigt och ofta citeras utan sammanhang. Den ekonomiska behandlingen finns i nästa del (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att räkna leverans som värde.** En levererad funktion är ett medel. Kontrollera effekten på människor.
- **Hypoteser som inte kan misslyckas.** Gör dem specifika, med ett tal och ett datum.
- **Att rätta sina egna läxor.** Låt nyttoägaren utanför teamet bedöma resultatet.
- **Att påstå orsak ur ett före och efter.** Lista störfaktorer och använd en jämförelse där det går.
- **Att bara redovisa vinster.** Registrera inga- och negativa resultat. Ett register av enbart framgångar är inte ärligt.
- **Att sätta nyttomål för individer.** Mål knutna till människor inbjuder till uppblåsta påståenden. Håll nyttor på team- och initiativnivå.
- **Överprecision.** Redovisa intervall och metod, inte ett enda decimaltal.
- **Att ignorera arbete som saknar ny nytta.** Namnge det och uppfinn inte en nyttoberättelse för det.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Att ange värde | Nyttor påstås bara i affärscase | Hypoteser skrivs för vissa ändringar | En kort hypotes, baslinje och ägare för varje betydande ändring | Hypoteser och tröskelvärden fastlagda vid godkännande; ledande och efterföljande indikatorer definierade | Hypoteser delas över team och leverantörer; resultat definieras med användare |
| Att kontrollera värde | Ingen kontroll efter release | Enstaka kontroll av leveransteamet | Schemalagd granskning med en oberoende ägare | Jämförelser och störfaktorer dokumenteras; beläggskvalitet följs | Beläggen på portföljnivå styr finansiering; delade experiment över team |
| Lärande | Vinster firas, misslyckanden glöms | Vissa lärdomar registreras | Inga-resultat registreras och granskas | Mönster i missade hypoteser förbättrar urval och storleksbedömning | Lärande matar planering över organisationen och med partner |

## Checklista

- [ ] Varje betydande ändring har en skriven värdehypotes med baslinje, indikator och granskningsdatum.
- [ ] Varje nytta har en ägare utanför leveransteamet.
- [ ] Ledande och efterföljande indikatorer är definierade och följs.
- [ ] Granskningar sker på det överenskomna datumet med ägaren.
- [ ] Jämförelser eller stegvisa utrullningar används där det är genomförbart.
- [ ] Störfaktorer listas för varje påstått resultat.
- [ ] Inga- och negativa resultat registreras och delas.
- [ ] Beläggskvalitet följs bredvid nyttopåståenden.
- [ ] Ingen individ har ett personligt nyttomål.
- [ ] En kvartalsvis portföljgranskning tittar på mönster i uppnådda och missade hypoteser.

## AI-prompter

**Skriv en värdehypotes.**

```text
We plan to [describe change] for [users or stakeholders] in [type of
organization]. The problem today: [describe]. Draft a value hypothesis in the
form "We believe that [change] will help [who] to [do what] so that [measurable
improvement]. We will know by [indicator]..." Suggest one leading and one
lagging indicator, what baseline we need, and a review date logic. Do not invent
target values; leave them as placeholders for us. List your assumptions and what
we need to find out.
```

**Lista störfaktorer för ett påstått resultat.**

```text
We claim that [change] improved [indicator] from [before] to [after] between
[dates]. Other things that happened in the period: [list]. List plausible
confounding factors, how each could explain the result, and what data or
comparison would help rule it out. Suggest wording that states what the
evidence supports. Do not assume a cause the data cannot support. List your
assumptions.
```

**Utforma en jämförelse med stegvis utrullning.**

```text
We can release [change] to [number] groups at different times: [describe
groups and constraints]. Propose a staged rollout that lets us compare groups
with and without the change, say what indicator and period to use, what could
bias the comparison, and what we would conclude from different outcomes. Do not
invent effect sizes. List your assumptions and risks.
```

**Granska en post i ett nyttoregister.**

```text
Review this benefits register entry for [initiative]: [paste entry including
claim, baseline, method, owner, and review date]. Point out missing
information, vague wording, claims the evidence does not support, and ways the
result could be gamed. Suggest a stronger wording that fits what we actually
measured. List your assumptions and questions for the owner.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett värde- eller resultatmått innan du redovisar det.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för nyttomått bär sin manipuleringsvektor, sitt skyddsräcke och sin beläggsstandard.

## Viktigaste slutsatser

- Skriv en kontrollerbar värdehypotes före bygget, med en baslinje, en ägare utanför teamet och ett granskningsdatum.
- Använd ledande indikatorer för att styra och efterföljande för att bekräfta.
- Jämför där du kan, lista störfaktorer och påstå bara det beläggen stöder.
- Registrera inga- och negativa resultat; ett register av enhetlig framgång är inte ärligt.
- Följ beläggens kvalitet bredvid påståendets storlek.
- Håll intressenter och användare samarbetande tills resultatet är bekräftat.

## Referenser och vidare läsning

1. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
2. Doerr, J., *Measure What Matters*, Portfolio/Penguin, 2018.
3. Kohavi, R., Tang, D., and Xu, Y., *Trustworthy Online Controlled Experiments*, Cambridge University Press, 2020.
4. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
5. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Benefits realisation management](https://en.wikipedia.org/wiki/Benefits_realisation_management).
8. Wikipedia, [Theory of change](https://en.wikipedia.org/wiki/Theory_of_change).
9. Wikipedia, [Logic model](https://en.wikipedia.org/wiki/Logic_model).
10. Wikipedia, [Leading indicator](https://en.wikipedia.org/wiki/Leading_indicator).
11. Wikipedia, [Lagging indicator](https://en.wikipedia.org/wiki/Lagging_indicator).
12. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [A/B testing](https://en.wikipedia.org/wiki/A/B_testing).
15. Wikipedia, [Difference in differences](https://en.wikipedia.org/wiki/Difference_in_differences).
16. Wikipedia, [Confounding](https://en.wikipedia.org/wiki/Confounding).
17. Wikipedia, [Survivorship bias](https://en.wikipedia.org/wiki/Survivorship_bias).
