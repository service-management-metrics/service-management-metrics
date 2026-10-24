# Mätetal för SLA, OLA och XLA

**Ett servicenivåavtal talar om för en kund vad som lovats, ett driftnivåavtal talar om för interna team vad de är skyldiga varandra och ett upplevelsenivåavtal talar om huruvida de som använder tjänsten faktiskt har det bättre, så du behöver alla tre och du behöver redovisa dem ärligt i stället för som en vägg av grönt.**

## Översikt och motiv

Ett [servicenivåavtal (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) är ett dokumenterat åtagande mellan en tjänsteleverantör och en kund om vad tjänsten ska leverera: dess öppettider, dess tillgänglighet, hur snabbt leverantören svarar på och löser incidenter och hur snabbt den uppfyller förfrågningar. I ITIL 4 (2019 års utgåva av ramverket, utgivet av ägaren, numera AXELOS under PeopleCert) definierar praktiken [servicenivåhantering](https://en.wikipedia.org/wiki/ITIL) dessa mål, bevakar dem och rapporterar om dem. Ett [driftnivåavtal (OLA)](https://en.wikipedia.org/wiki/Operational-level_agreement) är den interna motsvarigheten: ett avtal mellan team i samma organisation, till exempel mellan servicedesken och nätverksteamet, om vad var och en ska göra och hur snabbt så att det kundvända SLA:t kan nås. Ett underliggande avtal fyller samma roll för en extern leverantör (se ämne 8.4, Mätetal för leverantörer och avtal).

Ett upplevelsenivåavtal (XLA) är det nyaste av de tre. Det registrerar ett överenskommet resultat i termer av hur människor upplever tjänsten, till exempel hur lätt de fick sitt arbete gjort, hur de kände inför interaktionen och om tjänsten hjälpte dem nå sitt mål. Idén har vuxit fram i tjänstehanteringspraxis eftersom ett SLA kan uppfyllas medan användare är missnöjda. Det här ämnet äger de tre avtalen och deras rapportering. Djupet i hur man mäter upplevelse hör till ämne 6.2, Överenskommelser om upplevelsenivå, och de tekniska motsvarigheterna till målen hör till ämne 5.2, SLI:er, SLO:er och felbudgetar.

Tre agila begrepp och begrepp om tillförlitlighet ligger bredvid dessa avtal. En [servicenivåindikator (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) är en uppmätt egenskap hos en tjänst, till exempel andelen förfrågningar som betjänats framgångsrikt. Ett [servicenivåmål (SLO)](https://en.wikipedia.org/wiki/Service_level_objective) är det interna målet för en SLI, vanligen striktare än något som utlovats en kund. Praxis inom [site reliability engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) behandlar SLO:t, och felbudgeten som följer av det, som ett gemensamt beslutsverktyg för produkt och drift. SLA:t är kontraktet, SLO:t är det tekniska syftet och SLI:n är mätningen. Att hålla de tre isär undviker en vanlig oreda där en avtalad vitesklausul används för att styra dagliga tekniska beslut.

Familjen har ett välkänt fel som kallas vattenmelonrapportering: en rapport som är grön på utsidan och röd på insidan. Varje SLA-rad visas som uppfylld, men kunder är frustrerade, eftersom måtten valdes för vad leverantören pålitligt kunde nå i stället för vad kunden bryr sig om, eller eftersom medelvärden döljer den dåliga svansen, eller eftersom klockan pausades under den värsta delen av väntan. Botemedlet är delvis tekniskt (percentiler, ärliga klockor, användarcentrerade indikatorer) och delvis socialt (avtal som förhandlas som ett samtal, granskas på en rytm och läses som en fråga om tjänsten, inte som en dom över ett team). Den bredare varningen om mått som blir mål finns i ämne 1.2, Goodharts lag och mätetalens psykologi.

Agila team tänker i mål och budgetar, ITIL:s servicenivåansvariga tänker i avtal och granskningar. Synsätten passar ihop: avtalet anger resultatet, målen och indikatorerna är hur teamet håller löftet, och upplevelsemåtten bekräftar att det spelade roll.

En sista term: en [percentil](https://en.wikipedia.org/wiki/Percentile) är värdet under vilket en angiven andel av observationerna faller. Den 85:e percentilen av lösningstid är den tid inom vilken 85 procent av ärendena löstes. De flesta SLA-mål skrivs som en percentil eller en andel, så sättet percentilen beräknas på och vad som ingår i den är ämnets kärna (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

## Nyckelprinciper

- **Kom överens om resultat med kunden och mät dem sedan.** Ett avtal är ett förhandlat uttalande om vad kunden behöver och leverantören kan upprätthålla, skrivet med kundens ord och granskat tillsammans.
- **Redovisa fördelningar och andelar, aldrig ett enda medelvärde.** En genomsnittlig lösningstid som når målet kan sitta ovanpå en lång svans av mycket sent arbete. Ange percentilen, populationen och antalet.
- **Gör klockan ärlig.** Varje mål har en starthändelse, en stopphändelse och en lista över pausvillkor. Publicera klockreglerna och redovisa hur ofta varje paus används.
- **Skikta avtalen.** SLA:t bygger på OLA:er och leverantörsavtal, och målen som sätts inom teamet bör vara snävare än löftena utanför det. Ett glapp i vilket lager som helst visar sig som ett brott överst.
- **Para varje driftmått med ett upplevelsemått.** Ett uppfyllt mål och en dålig upplevelse, eller tvärtom, är den mest användbara signalen i rapporten.
- **Räkna nästan-missarna.** Arbete som blev klart precis innanför gränsen säger mer om risk än arbete som blev klart långt innanför den.
- **Redovisa på team och tjänster, aldrig på människor.** Avtal beskriver vad en tjänst eller ett team förbinder sig till. De är inte ett sätt att rangordna individer.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SLA-måluppfyllelse | Andel mätta poster (incidenter, förfrågningar eller tidsfönster) som nådde ett angivet SLA-mål under perioden | Poster som nådde målet dividerat med poster som mättes. Klockan startar vid den loggade tid som definieras i avtalet (till exempel när ärendet skapas) och stoppar vid den definierade stopphändelsen (till exempel bekräftad återställning). Utesluts: poster som avbrutits som dubbletter och tid inom överenskomna undantag som planerat underhåll. Redovisa antalet bredvid andelen | Procent, med n | ITSM-verktygets tidsstämplar; övervakningsdata för tidsbaserade mål | Servicenivåhantering; incidenthantering; hantering av serviceförfrågningar | Måluppfyllelse för servicenivåmål över ett rullande fönster (se ämne 5.2, SLI:er, SLO:er och felbudgetar) | Månadsvis, med en intern veckovy |
| Andel nästan-missar | Andel poster som nådde målet men blev klara inom den sista tiondelen av den tillåtna tiden | Poster som blev klara vid 90 procent eller mer av måltiden och ändå inom den, dividerat med poster som nådde målet. Samma klocka som SLA:t. Ej tillämpligt för tidsfönster (gäller bara mått på tid till mål) | Procent | ITSM-verktygets tidsstämplar | Servicenivåhantering | Andel arbete nära förväntad servicenivå i ett flödesdiagram (se ämne 2.1, Flödesmått) | Månadsvis |
| Andel pausad klocka | Andel av den totala förflutna ärendetiden som tillbringas i tillstånd som pausar SLA-klockan | Total pausad tid dividerad med total förfluten tid från start till stopp, för poster inom omfånget. Utesluter poster där inget pausläge använts. Redovisa per pausläge | Procent | ITSM-verktygets statushistorik | Servicenivåhantering; incidenthantering | Blockerad tid och väntetid i en flödesvy (se ämne 2.4, Mätetal för värdeström) | Månadsvis |
| OLA-måluppfyllelse | Andel interna överlämningar som nådde OLA-målet mellan två team | Överlämningar slutförda inom OLA-målet dividerat med mottagna överlämningar. Klockan startar när det mottagande teamet tilldelas och stoppar när det returnerar eller stänger posten. Utesluts: poster som omtilldelats av misstag, räknas separat | Procent, med n | ITSM-verktygets tilldelningshistorik | Servicenivåhantering; incidenthantering | Väntetid vid överlämning och blockerat arbete mellan team (se ämne 9.3, Mätetal för samarbete och överlämningar) | Månadsvis |
| Väntetid vid överlämning (85:e percentilen) | Tid en post väntar i ett mottagande teams kö innan arbetet börjar | 85:e percentilen av tiden mellan tilldelning till det mottagande teamet och teamets första loggade åtgärd. Utesluts: poster som väntar på kunden | Timmar eller minuter | ITSM-verktygets tilldelnings- och aktivitetshistorik | Servicenivåhantering; incidenthantering | Kötid i en flödesvy (se ämne 2.3, Pågående arbete och köteori) | Veckovis |
| Upplevelsepoäng per resa | Kundens eller användarens betyg på hur tjänsten stödde en definierad resa, till exempel att få en ny laptop eller återhämta sig från ett avbrott | Medelvärde och fördelning av enkätbetyg på en fast skala för slutförda resor under perioden. Redovisa svarsfrekvensen och svarandenas sammansättning. Utesluts: ofullständiga enkäter. Inte ett enda medelvärde, så visa fördelningen | Betygsskala, med svarsfrekvens | Kort enkät efter interaktionen; resehändelser från ITSM-verktyget | Servicenivåhantering; praxis för kundnöjdhet (se ämne 6.1, Mätetal för kundnöjdhet) | Kundåterkoppling och resultatmått | Månadsvis, med varje våg visad |
| Vattenmelonglapp | Andel rapporteringsperioder eller tjänster där SLA:t läses som uppfyllt medan upplevelsemåttet eller ett användarpåverkansmått läses som dåligt | Tjänster (eller perioder) med SLA-måluppfyllelse på eller över målet och upplevelse under sin överenskomna nivå, dividerat med tjänster (eller perioder) med SLA-måluppfyllelse på eller över målet. Upplevelsenivån måste vara överenskommen innan perioden poängsätts | Procent av gröna tjänster | SLA-måluppfyllelse och upplevelsepoäng tillsammans | Servicenivåhantering; ständig förbättring | Retrospektiv av resultat mot utfall | Kvartalsvis |
| Avtalstäckning och aktualitet | Andel levande tjänster vars SLA, OLA:er och leverantörsavtal finns och granskades inom det överenskomna intervallet | Tjänster med alla tre lager dokumenterade och granskade inom intervallet, dividerat med levande tjänster i tjänstekatalogen. Intervallet sätts av organisationen. Utesluts: tjänster under avveckling | Procent | Tjänstekatalog och avtalsregister | Servicenivåhantering; hantering av tjänstekatalog; leverantörshantering | Arbetsavtal och teamstadgar som granskas på en regelbunden rytm | Kvartalsvis |

## Rekommendationer

### Sätt upp avtalen

**1. Skriv varje SLA på kundens språk och knyt det till ett resultat.** Utgå från vad kunden behöver, till exempel "en utelåst medarbetare arbetar snabbt igen", och välj sedan måttet. Ett kort avtal med en handfull meningsfulla mål slår ett långt som ingen läser. Skriv ned klockan för varje mål: starthändelsen, stopphändelsen och pausvillkoren (se ämne 3.3, Svarstid och lösningstid för incidenter).

**2. Ange mål som percentiler eller andelar, med en angiven population.** "90 procent av prioritet 2-incidenter återställda inom fyra timmar" säger mer än "genomsnittlig återställning under två timmar". Kom överens om vad som räknas: vilka prioriteter, vilka tider, vilka förfrågningstyper. Visa antalet med varje procentsats så att en månad med åtta incidenter inte läses som en månad med åttahundra.

**3. Härled OLA:er ur SLA:t och ge varje ett namngivet ägande team.** Arbeta bakifrån från kundmålet: om kunden utlovas återställning inom fyra timmar måste OLA:erna lämna utrymme för detektion, triage, överlämningar och rättelse. Skriv varje OLA som ett kort ömsesidigt avtal med ett mottagande team, en förväntad svarstid och en väg för tvister. Ett OLA finns för att hjälpa team planera, så håll det så lätt som relationen tillåter.

**4. Håll målen snävare än löftet.** Sätt det interna SLO:t på en striktare nivå än SLA:t så att en dålig vecka märks och rättas innan ett kundsynligt brott (se ämne 5.2, SLI:er, SLO:er och felbudgetar). Behandla SLA:t som ett golv som ekonomi och juridik bryr sig om och SLO:t som talet ingenjörer styr efter. Använd felbudgeten som sättet på vilket produkt och drift avgör mellan funktionsarbete och tillförlitlighetsarbete.

### Mät ärligt

**5. Publicera klockreglerna och redovisa pauser.** Den vanligaste vägen till en grön rapport är ett generöst pausläge, till exempel "väntar på kund" som används när leverantören är den som väntar. Redovisa andelen pausad klocka per pausläge, stickprova några pausade ärenden varje månad och fråga om kunden skulle hålla med om att klockan borde ha stoppats. Håll listan över tillåtna pausskäl kort och nedskriven i avtalet.

**6. Visa hela fördelningen bredvid målet.** Placera medianen, den 85:e eller 95:e percentilen och den värsta decilen bredvid måluppfyllelsen. En jämn måluppfyllelse på 95 procent kan dölja en svans av arbete som tog dagar (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

**7. Följ nästan-missar och orsaker till brott.** Andelen nästan-missar talar om hur mycket tur det finns i det gröna talet. När ett brott inträffar, registrera orsakskategorin och om det var ett kapacitets-, överlämnings-, leverantörs- eller definitionsproblem. Länka de största kategorierna till problemhantering (se ämne 4.1, Mätetal för problemhantering).

**8. Mät OLA-kön, inte bara måluppfyllelsen.** Väntetiden vid överlämning vid den 85:e percentilen visar var arbete stannar av, långt innan ett SLA-brott syns. Dela den med både det sändande och det mottagande teamet och beskriv den som en egenskap hos flödet mellan dem. Samtalet gäller kön, aldrig människorna i den (se ämne 2.3, Pågående arbete och köteori).

### Lägg till upplevelse och stäng glappet

**9. Para varje SLA med ett upplevelsemått för samma resa.** Ställ användare en kort fråga efter interaktionen om huruvida det fungerade och hur svårt det var, och redovisa svarsfrekvensen och svarandenas sammansättning. Kom överens i förväg om vilken nivå som räknas som tillräckligt bra, så att ett XLA är ett förhandlat resultat och inte ett tal som uppfinns i efterhand (se ämne 6.2, Överenskommelser om upplevelsenivå, och ämne 6.1, Mätetal för kundnöjdhet).

**10. Redovisa vattenmelonglappet och behandla det som ett fynd.** Följ hur ofta ett SLA nås medan upplevelsen är dålig. Ett växande glapp talar om att SLA-måtten driver bort från det användare bryr sig om, och rätt svar är att revidera måttet, inte att förklara skillnaden. Granska det kvartalsvis med kundrepresentanten närvarande.

**11. Granska avtalen enligt schema och avveckla de som ingen använder.** Kontrollera varje avtal mot tjänstekatalogen, leverantörsavtalen och det faktiska arbetet. En mindre uppsättning levande avtal är lättare att rapportera om och svårare att manipulera.

**12. Redovisa varje tjänst i en vy som kombinerar alla tre lager.** Visa SLA-måluppfyllelsen, fördelningen, OLA-väntetiderna vid överlämning, upplevelsepoängen och det pågående förbättringsarbetet för varje tjänst på en sida. Härled statusen ur datan, inte från en färg som tjänsteägaren valt. Gör sidan öppen för kunden och teamen (se ämne 11.1, Att utforma en instrumentpanel för tjänstemätetal).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| SLA-måluppfyllelse | Att välja målet så att det är lätt; att stänga ärenden för tidigt och öppna dem senare; att omklassificera prioritet nedåt; att utesluta svåra fall som "utanför omfånget" | Återöppningsgrad och grad av prioritetsomklassificering; stickprov av stängda ärenden som läses med kunden; kvartalsvis granskning av undantagslistan |
| Andel nästan-missar | Att stoppa klockan en minut före gränsen och sedan fortsätta arbetet utanför protokollet; att dela ett ärende i två kortare | Tid från sista kundkontakt till bekräftad återställning; antal länkade eller underordnade ärenden per incident |
| Andel pausad klocka | Att använda pausläge på ärenden som inte väntar på kunden; att flytta arbete till ett tillstånd som inte räknas | Pausskäl reviderade på ett stickprov; andel pauser som kunden återkallat; upplevelsepoäng för pausade ärenden |
| OLA-måluppfyllelse | Att avvisa överlämningar tillbaka till avsändaren för att starta om klockan; att markera poster som accepterade utan att börja arbeta | Antal studsar per post och total tid till återställning över team; det helhetliga SLA-utfallet |
| Väntetid vid överlämning (85:e percentilen) | Att tilldela en person i stället för teamets kö för att dölja väntan; att logga en symbolisk första åtgärd | Kvalitet på första åtgärd stickprovad; tid från tilldelning till den första kundsynliga uppdateringen |
| Upplevelsepoäng per resa | Att skicka enkäter bara till nöjda användare; att ställa ledande frågor; att coacha svarare att ge höga betyg | Svarandenas sammansättning mot populationen; svarsfrekvens visad bredvid poängen; öppna kommentarer lästa i granskningen |
| Vattenmelonglapp | Att sätta upplevelsenivån lågt så att glappet förblir litet; att ändra upplevelsemåttet när det sjunker | Upplevelsenivå överenskommen i förväg och ändringar loggade med skäl; trend för hela fördelningen |
| Avtalstäckning och aktualitet | Att markera ett avtal som granskat utan en verklig granskning; att räkna ett tomt dokument som ett SLA | Belägg för granskningen (deltagare, ändringar, beslut); stickprov av avtal som läses för faktiskt innehåll och kundens godkännande |

En sund avläsning visar måluppfyllelse som rör sig av begripliga skäl, nästan-missar som är få och förklarade, pauser som håller sig inom den överenskomna listan, väntetider vid överlämning som diskuteras av teamen som äger dem och ett upplevelsemått som till stor del stämmer med SLA:t. Där de två är oense har teamet redan en anteckning om orsaken och en förbättringspost.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Avtalade SLA:er med viten | Tydligt, verkställbart, juridiskt erkänt | Uppmuntrar klockspel och defensiv rapportering; viten kan försura relationen |
| SLA:er utan viten, med regelbunden granskning | Bygger förtroende och ärlig data; fokuserar på lärande | Mindre hävstång när en leverantör ständigt missar målen |
| Detaljerade OLA:er mellan alla team | Tydliga förväntningar och färre tvister | Byråkrati; team optimerar för sin egen klocka i stället för kundens |
| Lätta OLA:er med ett gemensamt helhetsmål | Uppmuntrar samarbete; mindre pappersarbete | Kräver förtroende och god köinsyn för att avgöra tvister |
| Att lägga till XLA:er till SLA:er | Visar om tjänsten hjälper människor | Enkätdata är brusigare och långsammare; tillskrivning är svårare |

Håll avtalet litet, redovisa fördelningen och använd upplevelsedata för att kontrollera driftdata. Lägg insatsen på klockreglerna och överlämningarna, där det mesta av oenigheten om ett tal uppstår.

## Frågor att diskutera med teamet

**1. Om vår SLA-rapport är helt grön, vad skulle vi förvänta oss att användare säger om tjänsten?**
Be gruppen nämna en tjänst som varit grön i flera månader och samla sedan in vad användare faktiskt säger i kommentarer och klagomål. Jämför de två. Facilitatorn bör leta efter glapp mellan måttet och den levda upplevelsen och notera vilka mått som valdes för att de var lätta att nå.

**2. Var stoppar vår klocka, och vem avgjorde det?**
Gå igenom start-, stopp- och pausreglerna för ett viktigt mål och fråga vem som skrev var och en. Titta på andelen ärenden i ett pausläge och fråga om kunder skulle hålla med. Enas om en regel att skärpa eller förtydliga.

**3. Vilka av våra OLA:er hjälper team att planera, och vilka tilldelar bara skuld?**
Lista de interna avtalen och fråga vem som läser vart och ett och när. Diskutera vad som händer efter ett missat OLA: ett samtal om kön eller en jakt på fel. Syftet är att flytta diskussionen mot arbetsflödet mellan team. Välj ett OLA att förenkla eller avveckla.

**4. Hur mycket av vårt gröna är tur?**
Visa andelen nästan-missar för det viktigaste målet. Diskutera vad som skulle hända om nästa månad hade några fler svåra fall eller några färre tillgängliga människor. Fråga om teamet har marginal, och var den finns.

**5. Vad skulle kunden vilja att vi lovade som vi inte mäter i dag?**
Bjud in kundrepresentanten eller en användare att beskriva vad som är viktigt för dem med egna ord, till exempel att kunna nå en människa eller få en laptop före första dagen. Fånga två eller tre resultat. Avgör vilka som kunde bli en kort enkätfråga eller en händelse som redan finns i datan, och hur gruppen skulle enas om en bra nivå.

**6. Hur skulle vi veta om våra SLA-mått hade drivit bort från det användare bryr sig om?**
Diskutera vattenmelonglappet som en signal och fråga vem som tittar på det. Fundera över hur ofta avtalen granskas och om kunden deltar. Enas om ett granskningsdatum och vilka belägg som ska tas med, inklusive ett stickprov av ärenden och de senaste upplevelseresultaten.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam som också driver sina tjänster möter SLA:t genom sina egna mål och felbudgetar, och de känner kostnaden när ett SLA-vite eller en kundeskalering avbryter planerat arbete. De bör hålla SLO:er snävare än SLA:er och behandla SLA:t som ett säkerhetsgolv, inte som det dagliga målet (se ämne 5.2, SLI:er, SLO:er och felbudgetar).

### Service- och driftteam

Driftteam bär klockorna. De behöver tydliga regler för start-, stopp- och pausvillkor, delade OLA:er som namnger den mottagande kön och insyn i väntetider vid överlämning. De bör redovisa orsaker till brott öppet och använda dem som underlag för problem- och kapacitetsarbete (se ämne 4.1, Mätetal för problemhantering). De bör motstå trycket att förklara ett resultat genom klockan i stället för att rätta orsaken.

### Ledning och styrning

Ledare använder SLA-rapporter för att se om åtaganden hålls och var de ska investera. De bör be om fördelningar, andelen pausad klocka, andelen nästan-missar och vattenmelonglappet, och de bör möta en obruten följd av grönt med nyfikenhet. Att finansiera förbättringsarbetet som följer på en brottsanalys, och att skydda ärlig rapportering från skuldbeläggning, spelar större roll än själva målet (se ämne 1.2, Goodharts lag och mätetalens psykologi).

### Kunder och användare

Kunder vill att avtalet ska beskriva det de känner: hur snabbt problemet rättas, hur ofta det återkommer och om de kan nå någon som hjälper. De bör vara en del av granskningen av avtal och ha ett sätt att säga när en grön rapport inte stämmer med deras upplevelse. En läsbar sammanfattning på en sida, med skälen till varje brott och den planerade rättelsen, bygger mer förtroende än en lång tabell över måluppfyllelse.

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på ett regionalt sjukhus stöder ett kliniskt schemaläggningssystem som används av avdelningspersonal. Tjänsteägaren, servicedesken, applikationsteamet och infrastrukturteamet möts varje månad. Alla siffror nedan är illustrativa.

SLA:t lovar att 90 procent av prioritet 2-incidenter (partiell funktionsförlust som påverkar en avdelning) återställs inom fyra timmar, mätt från att ärendet skapas, i en tjänst som är öppen dygnet runt, sju dagar i veckan. Månadsrapporten visar en måluppfyllelse på 94 procent på 36 incidenter (illustrativt), bekvämt grönt. Upplevelseenkäten, som skickas efter varje stängning av prioritet 2, har en svarsfrekvens på 41 procent (illustrativt) och ett medianbetyg på 3 på en femgradig skala, långt under nivån 4 som tjänsteägaren och avdelningscheferna kommit överens om som XLA. Vattenmelonglappet syns för tredje månaden i rad.

Teamet tittar på fördelningen. Medianen för återställning är 1 timme 40 minuter (illustrativt), men den 95:e percentilen är 3 timmar 50 minuter (illustrativt), och andelen nästan-missar är 31 procent (illustrativt): nästan en tredjedel av de "uppfyllda" incidenterna blev klara inom den sista tiondelen av den tillåtna tiden. De tittar på andelen pausad klocka och finner att 22 procent (illustrativt) av den förflutna tiden tillbringas i tillståndet "väntar på kund". Ett stickprov på tio pausade ärenden visar fyra där avdelningen hade svarat och ärendet förblev pausat till nästa pass, och i tre andra väntade applikationsteamet på infrastrukturteamet. Väntetiden vid överlämning vid den 85:e percentilen för infrastrukturkön är 2 timmar 10 minuter (illustrativt) mot ett OLA på 30 minuter (illustrativt), och OLA-måluppfyllelsen för den överlämningen är 58 procent (illustrativt).

Beslutet är praktiskt. De ändrar klockregeln så att "väntar på kund" bara får användas efter en dokumenterad begäran till kunden, och klockan återupptas vid nästa svar. De lägger till en jourväg för infrastrukturkön under avdelningens tider och enas om ett mindre OLA, med en granskning om en månad. De lägger till upplevelsemåttet och vattenmelonglappet i den månatliga rapporten på en sida och bjuder in en avdelningschef till granskningen. De sänker också det interna SLO:t till en striktare återställning inom fyra timmar för 95 procent av incidenterna, så att teamet märker besvär innan SLA:t är i fara.

En manipulationsrisk dyker upp den andra månaden. Efter att pausregeln ändrats sjunker måluppfyllelsen till 89 procent (illustrativt), och en chef ber servicedesken att "kontrollera prioriteterna igen". Teamet upptäcker en topp av nedgraderingar från prioritet 2 till prioritet 3, parar måluppfyllelsen med omklassificerings- och återöppningsgraderna och kräver ett skäl i posten för varje prioritetsändring. Den tredje månaden är måluppfyllelsen 91 procent (illustrativt), den 95:e percentilen är lägre, andelen nästan-missar har fallit och medianbetyget för upplevelsen har stigit till 3,8 (illustrativt). Glappet smalnar eftersom arbetet förbättrades, och talen är trovärdiga.

## Agilitet, AI, automatisering och analys

### Agilitet

Kom överens om servicenivåer med intressenter och granska dem regelbundet, så att målen följer vad användare behöver när tjänsten utvecklas. Varningen är att ett fast mål som lämnas ifred i åratal mäter det förflutna.

### AI

AI kan sammanfatta brott, förutsäga vilka ärenden som kommer att missa ett mål och föreslå eskaleringar. Para måluppfyllelse med upplevelsepoängen och vattenmelonglappet och registrera vilka förutsägelser som var rätt. Varningen är att en AI-knuff för att skydda målet kan driva människor att pausa klockor eller omprioritera, så revidera användningen av pauser.

### Automatisering

Beräkna måluppfyllelse ur händelsernas tidsstämplar och gör pausreglerna synliga. Mät automatisk eskalering på falska eskaleringar och på brott den missade. Varningen är att en automatisk paus på ett tillstånd som väntar på kund är en lätt väg till manipulation.

### Analys

Redovisa måluppfyllelse med nästan-missar och percentiler och visa upplevelsepoängen bredvid. Beslutet detta ger underlag för är vilket avtal som ska omförhandlas. Varningen är att måluppfyllelse över små ärendeantal är flyktig, så visa antalet bakom varje procentsats.

## Branschperspektiv

**Startup.** Ett litet företag har ofta inget formellt SLA alls, bara ett informellt löfte till några tidiga kunder. Skriv en sida som namnger tjänstens öppettider, ett svarsmål och ett återställningsmål angivet som en percentil, och håll ett SLO inom teamet. Kundsamtal tar XLA:ts plats, så skriv ned vad de tre viktigaste kunderna säger varje månad.

**Småföretag.** Ett litet it-team är vanligen starkt beroende av externa leverantörer, så de underliggande avtalen spelar större roll än interna OLA:er. Kontrollera att varje leverantörs åtagande är minst lika strikt som det SLA du ger dina egna användare, och följ leverantörens faktiska prestation (se ämne 8.4, Mätetal för leverantörer och avtal). En enkel månadssida, med måluppfyllelse, nästan-missar och en kort användarenkät, räcker.

**Storföretag.** Stora organisationer behöver ett avtalsregister och ett täckningsmått. Standardisera klockreglerna och definitionerna över tjänster så att sammanställningar blir meningsfulla (se ämne 1.4, Styrning och ägarskap av mätetal). Se upp för vattenmeloneffekten i ledningens sammanställningar, där hundratals gröna rader döljer några få tjänster med allvarlig användarsmärta.

**Offentlig sektor.** Offentliga organ har ofta lagstadgade servicestandarder, upphandlingsregler som fastställer SLA:er i avtal och en skyldighet att publicera resultat. Håll det publicerade måttet tydligt och verifierbart, bevara klockreglerna och belägg för revision och behandla medborgare som kunder med en röst i granskningen (se ämne 8.5, Reglerad och statlig rapportering). Där avtalet är stelbent, lägg till ett upplevelsemått bredvid utan att ändra avtalstexten.

## Affärscase: motiv, ROI och TCO

Argumentet för bättre avtalsmått är ett argument för förtroende och för att undvika bortslösad insats. Rapporter som stämmer med hur användare känner minskar eskaleringar och tvister, förkortar det månatliga argumentet om vems tal som är rätt och låter ledare finansiera det arbete som spelar roll. Tydliga OLA:er minskar förseningar vid överlämning, som hör till de största bidragen till långa återställningar. Ett vattenmelonglapp som fångas tidigt undviker den större kostnaden av att en kundrelation eller en avtalsförnyelse går fel.

Kostnaderna är blygsamma: tid att skriva och granska avtalen, pålitlig klock- och överlämningsdata (se ämne 1.5, Datakällor och instrumentering), en kort enkät och en månatlig granskning. Den totala kostnaden växer med antalet avtal, så färre och enklare är billigare att äga.

Avkastningen visar sig som färre överraskande brott, mindre tid som läggs på att förklara rapporter och bättre underbyggda investeringsval. Behandla dessa som mönster att observera och jämföra över tid, inte som en beräkning. Jämför insatsen för en månatlig granskning med kostnaden för en eskalerad tvist eller en förlorad förnyelse i din egen organisation, med dina egna data (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att bara redovisa medelvärden.** Ett medelvärde döljer en lång svans av sent arbete. Redovisa percentiler, andelen nästan-missar och antalet.
- **Att skriva SLA:t kring det som är lätt att nå.** Ett mål valt för bekvämlighet ger en alltid grön rapport. Utgå från vad kunden behöver och visa glappet öppet.
- **Att pausa klockan för att förbättra talet.** Generösa pauslägen förvandlar SLA:t till fiktion. Publicera pausreglerna, revidera stickprov och redovisa andelen pausad klocka.
- **OLA:er som vapen.** Ett OLA som används för att lägga skuld på nästa team lär team att studsa arbete. Behandla missar som information om kön och rätta flödet.
- **Vitesdriven rapportering.** Tunga viten uppmuntrar defensiv klassificering och tvister om klockan. Använd viten sparsamt och para dem med återöppnings- och omklassificeringsgrader.
- **Upplevelsedata utan svarsfrekvens.** Ett högt betyg från ett litet, självselekterat urval vilseleder. Visa svarsfrekvensen och svarandenas sammansättning bredvid varje resultat.
- **Avtal som ingen granskar.** Föråldrade avtal beskriver en tjänst som inte längre finns. Schemalägg granskningar och avveckla det som är oanvänt.
- **Individuella mål ur teamavtal.** Att dela ett team-SLA i personliga kvoter leder till förhastade stängningar och rangordning. Håll avtalet på tjänstens och teamets nivå.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Avtalsutformning | Muntliga löften eller kopierade mallar; mål valda av gammal vana | Vissa skrivna SLA:er; OLA:er sällsynta; klockor skiljer sig mellan team | En kort mall med resultatbaserade mål, percentiler och skrivna klockregler | Avtal granskas på en rytm, med kunden, och knyts till SLO:er | Lager av SLA, OLA, leverantörsavtal och SLO justeras tillsammans när förhållandena ändras |
| Mätkvalitet | Manuella räkningar; medelvärden; pauser odokumenterade | Verktygsbaserad måluppfyllelse för vissa tjänster; pausanvändning ogranskad | En definition och datakälla; fördelningar och andel pausad klocka visas | Nästan-missar, orsaker till brott och väntetider vid överlämning följs över tid och stickprovas | Data från team och leverantörer avstäms; definitioner revideras när de slutar ge underlag för beslut |
| Koppling till upplevelse | Ingen användaråterkoppling knuten till SLA:t | Ad hoc-enkäter för vissa tjänster | En kort enkät för nyckelresor, med svarsfrekvensen visad | Upplevelsemål överenskomna med kunder och vattenmelonglappet redovisat | Upplevelse- och driftmått styr gemensamt förbättringsarbete med kunder |
| Användning i förbättring | Redovisas efter ett klagomål | Brott diskuteras i teammöten | Månatlig granskning med ägare och åtgärder | Orsaker till brott matar finansierat förbättrings- och problemarbete | Kunder, leverantörer och team planerar förbättring tillsammans utifrån samma vy |

## Checklista

- [ ] Varje SLA anger sitt resultat, sitt mål som en percentil eller andel och sin population.
- [ ] Starthändelsen, stopphändelsen och tillåtna pausvillkor är skrivna för varje mål.
- [ ] Varje kundvänt SLA har OLA:er eller leverantörsavtal som ryms inom det, var och en med ett namngivet ägande team.
- [ ] Interna mål är striktare än de utlovade SLA-målen.
- [ ] Rapporter visar fördelningen, antalet, andelen nästan-missar och andelen pausad klocka.
- [ ] Ett stickprov av pausade och stängda ärenden läses varje månad.
- [ ] Varje nyckeltjänst har ett upplevelsemått med en överenskommen nivå, och svarsfrekvensen visas.
- [ ] Vattenmelonglappet följs och granskas med en kundrepresentant.
- [ ] Avtal granskas enligt schema och avvecklas när de är oanvända.
- [ ] Inget avtalsmått används för att rangordna enskilda människor.

## AI-prompter

**Granska ett SLA för klock- och formuleringsproblem.**

```text
Here is the text of our SLA for [service]: [paste agreement text]. The targets
are [list of targets], measured in [tool]. Identify ambiguities in the start
event, stop event, and pause conditions, places where an average could hide a
long tail, and wording a customer could read differently from us. Suggest
clearer wording and the questions I should ask the customer. Do not invent
benchmark values or legal conclusions. List your assumptions.
```

**Skriv utkast till ett OLA mellan två team.**

```text
I need a short operational level agreement between [sending team] and
[receiving team] to support our SLA of [SLA target] for [service]. The typical
hand-off is [description], and the queue is [queue name or tool]. Draft a one
page OLA with the purpose, the expected response, the clock rules, a way to
settle disputes, and a review date. Keep the tone cooperative and do not suggest
penalties unless I ask. Do not invent target values; ask me for them. List your
assumptions.
```

**Leta efter ett vattenmelonglapp i vår data.**

```text
Here is a summary of SLA attainment and an experience measure for [list of
services] over [period]: [paste the table]. Identify services where the SLA reads
as met and experience reads as poor, and suggest possible explanations to
investigate, such as clock pauses, priority reclassification, or a poorly chosen
measure. Propose questions and a small sample of tickets to read for each. Do not
assume causes or invent thresholds. List your assumptions.
```

**Utforma en kort upplevelseenkät för ett XLA.**

```text
We want to add an experience measure for [journey, for example getting a new
laptop] for [audience]. Draft [number] neutral questions, a plan for when and how
to send them, and how to report the response rate and respondent mix. Flag
wording that could bias answers and suggest how to agree the target level with
[customer representative role]. Do not invent benchmark scores. List your
assumptions.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta vilket ämne som definierar måttet bakom en SLA-rad och skyddsräcket som bör sitta bredvid det.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ändringar i det här ämnet håller mallen, klockreglerna och manipuleringstabellen i takt.

## Viktigaste slutsatser

- Ett SLA är ett löfte till kunden, ett OLA är ett löfte mellan team och ett XLA är ett överenskommet upplevelseresultat; vart och ett behöver sitt eget mått och sin egen ägare.
- Redovisa percentiler, antal, nästan-missar och andelen pausad klocka, eftersom medelvärden och tysta pauser ger gröna rapporter över dålig service.
- Härled OLA:er ur SLA:t och håll interna mål snävare än löftet.
- Para varje SLA med ett upplevelsemått för samma resa och redovisa vattenmelonglappet som ett fynd att agera på.
- Granska avtal enligt schema med kunden i rummet och avveckla det ingen använder.
- Håll varje avtalsmått på nivån tjänster och team, aldrig individer.

## Referenser och vidare läsning

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Operational-level agreement](https://en.wikipedia.org/wiki/Operational-level_agreement).
10. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
11. Wikipedia, [Service level objective](https://en.wikipedia.org/wiki/Service_level_objective).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
