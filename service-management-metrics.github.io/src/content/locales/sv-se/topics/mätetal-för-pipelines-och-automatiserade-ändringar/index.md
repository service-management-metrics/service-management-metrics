# Mätetal för pipelines och automatiserade ändringar

**En leveranspipeline är både vägen ändringar tar till användare och källan till belägget att de är säkra, så mät dess hastighet, dess tillförlitlighet, hur stor del av ändringsgodkännandet den hanterar och om det belägg den producerar skulle övertyga en revisor, och läs alla dessa som mått på ett system, aldrig på de människor som använder det.**

## Översikt och motiv

En pipeline för [kontinuerlig integration](https://en.wikipedia.org/wiki/Continuous_integration) och [kontinuerlig leverans](https://en.wikipedia.org/wiki/Continuous_delivery) tar en ändring från en utvecklares arbete till en körande tjänst genom automatiserad byggnation, test, säkerhetskontroller och driftsättning. När en pipeline åtnjuter förtroende kan den också fatta de beslut som en ändringsrådgivande nämnd förr fattade för rutinändringar. ITIL kallar praktiken att hantera ändring "ändringsmöjliggörande", och dess syfte är att låta nyttiga ändringar ske säkert och snabbt. En pipeline som kör kontroller, registrerar beläggen och godkänner ändringar med låg risk automatiskt är ett sätt att uppfylla det syftet.

Pipelinen är alltså två saker på en gång. Den är ett produktionssystem, med egen tillgänglighet, hastighet och egna fel, och den är en kontroll, med belägg om vad som testats, vem som granskat och vad som godkänts. Båda behöver mätas. En snabb pipeline som hoppar över kontroller är en risk. En långsam, opålitlig pipeline får människor att gå förbi den, och förbigångna ändringar undkommer varje kontroll pipelinen var avsedd att ge.

Det här ämnet kompletterar ändringsmåtten i del 4 (se ämne 4.3, Mätetal för ändringsmöjliggörande, och ämne 4.4, Misslyckade ändringar och omarbete) och releasemåtten (se ämne 4.5, Mätetal för releaser och driftsättning) genom att fokusera på pipelinen som ett system. Det kompletterar DORA-måtten (se ämne 2.8, DORA-mätetal) genom att titta på vad som händer inuti pipelinen. Det relaterar också till de allmänna automatiseringsmåtten i ämne 10.6 (se ämne 10.6, Mätetal för automatisering och orkestrering).

Termer som används här. En **pipelinekörning** är en exekvering av pipelinen för en ändring. Ett **steg** är ett moment i pipelinen, till exempel bygge eller test. Ett **opålitligt test** är ett test som ibland klarar och ibland misslyckas på samma kod. En **förbigång** är en ändring som når produktion utan att passera pipelinen, till exempel genom en manuell nöddriftsättning. **Policy som kod** innebär att skriva regler, såsom "ingen driftsättning utan en godkänd säkerhetsskanning", som programvara pipelinen upprätthåller. **Belägg** är det registrerade beviset på vad en ändring genomgått. En **standardändring** i ITIL är en ändringstyp med låg risk, väl förstådd och förhandsgodkänd.

## Nyckelprinciper

- **Pipelinen är en tjänst.** Mät dess tillförlitlighet, hastighet och fel som du skulle göra för vilket produktionssystem som helst och ge den en ägare.
- **Mät förbigången.** Antalet ändringar som undviker pipelinen visar hur mycket pipelinen kan lita på.
- **Automatisera godkännande efter risk, med belägg.** Förhandsgodkänn det som är väl förstått och behåll mänsklig granskning för det som inte är det.
- **Belägg är en produkt.** Det pipelinen registrerar bör besvara en revisors frågor utan ett krångel.
- **Snabbt och säkert mäts tillsammans.** Hastighetsmått paras med fel och omarbete.
- **Beskriv system, inte människor.** Pipelinedata om vem som skickade en ändring är ingen prestationsrangordning.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pipelinens lyckandegrad | Andel pipelinekörningar som slutförs utan ett fel orsakat av pipelinen eller dess miljö | körningar som klarar eller misslyckas enbart på en genuin kodbrist / startade körningar; körningar avbrutna av användaren undantas och redovisas | procent | Loggar från pipelineplattformen | Releasehantering; ändringsmöjliggörande | Hälsa i kontinuerlig integration | Veckovis |
| Pipelinens varaktighet | Tid för en ändring att ta sig genom pipelinen | median och 85:e percentil av (tiden då sista steget slutar minus tiden då körningen startar) för körningar som når driftsättning | minuter | Loggar från pipelineplattformen | Releasehantering | Korta återkopplingsloopar | Veckovis |
| Grad av opålitliga test | Andel testfel som klarar vid omkörning utan kodändring | fel som klarar vid omkörning / testfel | procent | Testresultat och omkörningsloggar | Releasehantering | Definition av klart; testpraxis | Månadsvis |
| Andel automatiskt godkännande | Andel ändringar godkända av pipelinepolicyn utan ett mänskligt godkännandesteg | ändringar godkända enbart av policy / driftsatta ändringar | procent | Pipeline- och ändringsregister | Ändringsmöjliggörande | Trunkbaserad utveckling med automatiska kontroller | Månadsvis |
| Förbigångsgrad | Andel produktionsändringar som inte passerade pipelinen | produktionsändringar gjorda utanför pipelinen, funna genom att jämföra driftsättningsregister med pipelineregister / alla produktionsändringar | procent | Driftsättningsregister, konfigurationsgranskning och pipelineloggar | Ändringsmöjliggörande; konfigurationshantering | Arbetsöverenskommelser | Månadsvis |
| Fullständighet i belägg | Andel pipelinedriftsatta ändringar vars post visar de krävda beläggen | ändringar med alla krävda beläggsposter (test, granskning, skanning, godkännande) länkade / driftsatta ändringar | procent | Pipeline- och ändringsregister | Ändringsmöjliggörande; styrning | Definition av klart | Månadsvis |
| Grad av policyportsstopp | Andel körningar som stoppas av en policykontroll, uppdelat på genuin överträdelse och policyfel | körningar stoppade av en policyport / startade körningar; skäl klassificerade genom stickprov | procent | Pipelineloggar och portregister | Ändringsmöjliggörande; riskhantering | Acceptanskriterier | Månadsvis |

Pipelinens lyckandegrad utesluter körningar avbrutna av en person, som redovisas separat, och räknar ett fel orsakat av ett opålitligt test eller ett miljöfel som ett pipelinefel. Förbigångsgrad behöver ett oberoende register över vad som körs i produktion, så den kan inte beräknas från pipelinen ensam.

## Rekommendationer

### Behandla pipelinen som en tjänst

**1. Ge pipelinen en ägare och mål.** Ett namngivet team äger pipelinens tillförlitlighet och hastighet, med servicenivåmål såsom andelen körningar som slutförs inom en angiven tid. Utan en ägare växer opålitligheten tills människor slutar lita på den.

**2. Mät varaktighet som en fördelning.** En median döljer de långsamma körningar människor väntar på. Visa medianen och 85:e percentilen och dela upp varaktigheten i steg för att hitta den längsta väntan, som ofta är en kö för en delad körare eller ett manuellt godkännande.

**3. Följ och rätta opålitliga test.** Ett opålitligt test lär människor att köra om tills det blir grönt. Räkna opålitliga fel, tilldela var och en en ägare och rätta eller sätt den i karantän med ett datum. En pipeline som människor kör om av vana producerar inget belägg.

### Automatisera godkännande med omsorg

**4. Klassificera ändringar efter risk.** Kom överens med ändringsägare om vilka slags ändringar som är standard och kan godkännas av policy och vilka som behöver en person. Se över klassificeringen regelbundet med feldata (se ämne 4.4, Misslyckade ändringar och omarbete).

**5. Skriv policy som kod och testa den.** Regler som pipelinen upprätthåller är kod och behöver test och ägare som all kod. Registrera vilken policyversion som tillämpades för varje körning.

**6. Behåll en mänsklig väg för det ovanliga.** Nöd- och högriskändringar behöver en person som kan avgöra med beläggen. Testa att vägen fungerar och mät hur lång tid den tar.

### Producera användbart belägg

**7. Bestäm vilket belägg du behöver.** Arbeta bakifrån från frågorna en revisor eller incidentgranskare ställer: vad som testades, vem som granskade, vad som skannades, vem som godkände och vad som driftsattes. Låt pipelinen registrera exakt det och länka det till ändringen.

**8. Mät fullständighet genom stickprov.** Fullständighet i belägg enligt pipelinens egen räkning kan vara hög medan innehållet är tomt. Kontrollera ett stickprov av poster för att bekräfta att beläggen är verkliga och motsvarar det som kördes.

**9. Gör belägg manipulationsspårbart.** Lagra pipelineregister där de som driftsätter inte kan redigera dem och behåll dem under den lagringstid dina regler kräver. Kontrollera lagringskrav med din egen juridiska rådgivare.

### Bevaka förbigång och drift

**10. Jämför produktion med pipelinen.** Stäm av det som körs i produktion mot det pipelinen driftsatte. Skillnader är förbigångar eller drift, och var och en förtjänar en kort, skuldfri titt på varför pipelinen undveks.

**11. Gör pipelinen till den lättaste vägen.** Människor går förbi långsamma och opålitliga pipelines. Om förbigången ökar, titta först på hastighet och tillförlitlighet och på nödbehov som pipelinen inte möter.

**12. Se över portar för värde.** En port som aldrig stoppar en genuin brist och fördröjer varje körning är en kandidat för borttagning eller omdesign. En port som stoppar många körningar på grund av policyfel behöver en policyrättelse.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Pipelinens lyckandegrad | Att omklassificera infrastrukturfel som avbrutna; att köra om tills det blir grönt och bara räkna den sista körningen | Räkna alla försök; redovisa omkörningar per ändring |
| Pipelinens varaktighet | Att flytta långsamma steg utanför det mätta fönstret; att hoppa över steg | Mät från början till slut från incheckning till driftsatt; jämför körda steg med krävda steg |
| Grad av opålitliga test | Att radera eller tysta opålitliga test; att markera fel som kända | Trend i antal test och täckning; se över testen i karantän med ett datum |
| Andel automatiskt godkännande | Att vidga klassen "standard" till att inkludera riskfyllda ändringar | Andel misslyckade ändringar för automatiskt godkända ändringar; stickprova godkända ändringar |
| Förbigångsgrad | Att registrera manuella nöddriftsättningar som pipelinekörningar; att inte stämma av mot produktion | Stäm av produktionstillståndet mot pipelineregister; stickprova driftsättningar |
| Fullständighet i belägg | Att bifoga tomma eller irrelevanta belägg; att länka en generisk rapport | Stickprova beläggens innehåll; kontrollera att det motsvarar ändringen |
| Grad av policyportsstopp | Att lätta på policyer för att minska stopp; att klassificera genuina överträdelser som policyfel | Stickprova stoppade körningar; grad av undkomna fel och revisionsfynd |

En sund avläsning är en pipeline som är snabb och stabil nog att människor använder den för allt, en förbigångsgrad nära noll där varje undantag är förstått, en växande andel automatiska godkännanden med en stabil andel misslyckade ändringar och belägg som håller när de stickprovas.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Tunga pipelinekontroller | Fångar fel tidigt; starkt belägg | Långsamma körningar; mer opålitlighet; press att gå förbi |
| Lätt pipeline | Snabb återkoppling | Svagare belägg; fler fel når produktion |
| Automatiskt godkännande för standardändringar | Tar bort väntan; konsekventa beslut | Risk att klassen vidgas; policyfel skalar |
| Mänskligt godkännande för alla ändringar | Välbekant; synligt ansvar | Väntan; godkännanden kan bli formaliteter |

Slutsatsen är att hålla pipelinen snabb och betrodd, godkänna med policy bara det som är väl förstått och mäta förbigången. Tunga kontroller som människor undviker skyddar ingenting.

## Frågor att diskutera med teamet

**1. Hur stor andel av våra produktionsändringar går genom pipelinen, och hur vet vi det?**
Be om ett sätt att jämföra produktionstillstånd med pipelineregister. Team hittar ofta nödrättelser, konfigurationsändringar och dataändringar som går förbi pipelinen. Räkna med defensiva svar, så behandla varje förbigång som information. Följ upp genom att fråga vad som skulle ha gjort pipelinen till den lättare vägen.

**2. Vilka av våra test kör vi om tills de klarar, och vem äger dem?**
Omkörningsvanor visar var förtroendet har urholkats. Gör en lista och tilldela ägare. Diskutera om var och en ska rättas eller tas bort. Samtalet visar ofta att några få test orsakar det mesta bruset.

**3. Vilka ändringar godkänner vi automatiskt i dag, och vilka borde vi?**
Lista ändringstyperna och felhistoriken för var och en. Besluta vilka som har låg risk och goda test. Fråga vad som skulle få er att sluta godkänna en typ automatiskt. Följ upp genom att enas om ett översynsdatum för klassificeringen.

**4. Om en revisor frågade om förra tisdagens driftsättning, vad kunde vi visa?**
Gå igenom en verklig ändring och hämta dess belägg. Lägg märke till luckor och manuella steg. Fråga om beläggen registrerades vid tillfället eller rekonstruerades senare. Följ upp genom att välja en lucka att täppa till.

**5. Var lägger vår pipeline sin tid, och vem väntar?**
Titta på uppdelningen i steg. Den längsta väntan är ofta en kö eller ett manuellt godkännande. Fråga om de som väntar kunde göra något annat och vad väntan kostar i fördröjd återkoppling. Välj en fördröjning att ta bort.

**6. Vilken port har aldrig stoppat något användbart?**
Titta på portens stoppskäl för det senaste kvartalet. En port med bara policyfel behöver rättas, och en port som aldrig stoppar något kan vara överflödig. Fråga om en borttagning skulle höja risken. Enas om en prövning.

## Fyra perspektiv

### Produkt- och leveransteam

Ni är beroende av pipelinen varje dag. Håll test pålitliga, håll ändringar små och behandla ett opålitligt test som en brist i produkten. Använd pipelinedata för att hitta era egna fördröjningar och håll den borta från samtal om individuell prestation.

### Service- och driftteam

Ni ärver det pipelinen släpper. Be om det belägg ni behöver för en incident, såsom vad som ändrades och när, och om snabb återställning. Följ förbigångar och drift och ta dem till teamet som ett samtal om varför.

### Ledning och styrning

Finansiera pipelinen som en produktionstjänst, med en ägare, kapacitet och tid att rätta opålitlighet. Be om förbigångsgrad, fullständighet i belägg genom stickprov och andelen misslyckade ändringar för automatiska godkännanden. Motstå trycket att räkna driftsättningar som mått på framgång.

### Kunder och användare

Ni har nytta när ändringar kommer ofta och säkert, och ni lider när en ändring bryter något. Fråga hur ändringar testas och hur snabbt en dålig ändring görs ogjord. Era rapporter om problem efter en release är en del av den återkoppling pipelinen inte kan ge.

## I praktiken: ett exempel från tjänstehantering

Ett regionalt sjukhuss it-avdelning driver en pipeline för sin kliniska tidbokningsapplikation. Siffrorna i det här exemplet är illustrativa. En ändringsrådgivande nämnd sammanträder varje vecka, och rutinändringar väntar i genomsnitt fyra dagar på godkännande. Teamet föreslår att godkänna standardändringar genom pipelinen.

Innan de börjar mäter de. Pipelinens lyckandegrad är 82 procent, och ett stickprov av fel visar att ungefär en tredjedel är opålitliga test. Varaktigheten vid 85:e percentilen är 47 minuter, med en kö på 20 minuter för en delad byggkörare. Jämförelse av driftsättningsregister med pipelineregister visar att ungefär 12 procent av produktionsändringarna gick förbi pipelinen, mest konfigurationsredigeringar och brådskande rättelser.

Teamet rättar de fem mest opålitliga testen, lägger till en byggkörare och skapar en väg för konfigurationsändringar genom pipelinen. Efter tre månader faller förbigången till 3 procent. De definierar sedan en standardändringsklass av små, testade, återkallbara ändringar av tidbokningsapplikationen, med policykontroller för test, en säkerhetsskanning och kollegial granskning. Andelen automatiskt godkännande når ungefär 40 procent, och ledtiden för godkännande av de ändringarna faller från dagar till minuter.

En manipuleringsrisk dyker upp. En chef ber om att höja andelen automatiskt godkännande genom att lägga databasschemaändringar i standardklassen. Teamet kontrollerar andelen misslyckade ändringar för schemaändringar, som är högre än för andra ändringar, och behåller dem hos en mänsklig granskare. Fullständigheten i belägg är 98 procent enligt pipelinens räkning, men ett stickprov om 20 poster visar att fyra hade en testrapport från ett annat bygge bifogad. Teamet rättar länkningsregeln. Det som förblir svårt: förbigång för nödrättelser behöver fortfarande en post i efterhand, och den kliniska riskgranskningen för ändringar som påverkar patientsäkerheten stannar hos människor.

## Agilitet, AI, automatisering och analys

### Agilitet

Små, täta ändringar genom en betrodd pipeline är kärnan i kontinuerlig leverans, och pipelinens egen backlog förtjänar samma regelbundna översyn med intressenter som produkten. En god praxis är att se över opålitliga test och förbigångar vid ett regelbundet förbättringssamtal. Varningen är att fira enbart driftsättningsfrekvens belönar att dela upp ändringar.

### AI

AI kan skriva kod och test, granska ändringar och bedöma ändringsrisk inuti pipelinen. Markera AI-stödda ändringar i data och jämför deras fel och omarbete med andra ändringar (se ämne 10.2, Att mäta AI-stött arbete). Om en AI-port avgör eller rekommenderar, mät dess falska godkännanden och falska stopp genom stickprov och håll en människa ansvarig för ändringar med hög risk. Varningen är att AI-genererade test kan höja täckningstal utan att testa beteende som spelar roll.

### Automatisering

Pipelinen är automatiseringen, så praxis är att behandla den som en produktionstjänst med loggar, en ägare och en manuell reserv för nödfall. Automatisera insamlingen av belägg och avstämningen av produktion mot pipelineregister. Varningen är att automatiska godkännanden mångdubblar effekten av ett policyfel, så testa policyer och behåll en pausfunktion.

### Analys

Använd pipelinehändelser för att visa var tiden går och var fel samlas och länka körningar till incidenter och omarbete. Beslutet detta ger underlag för är var man ska investera i hastighet, tillförlitlighet eller test. Varningen är att pipelinedata inte visar testens kvalitet, så kombinera den med undkomna fel och visa antalet körningar bakom varje grad (se ämne 10.8, Mätetal för analys och datakvalitet).

## Branschperspektiv

**Startup.** En enkel pipeline med snabba test och en automatisk driftsättning till produktion kan räcka. Mät varaktighet och förbigång och registrera belägg för test och granskning i förvaret.

**Småföretag.** Pipelinen kan vara en hostad tjänst eller en leverantörs. Fråga vad den registrerar och var och behåll ett sätt att rekonstruera vad som driftsattes. Undvik att bygga kontroller du inte kommer att underhålla.

**Storföretag.** Många pipelines över team behöver gemensamma beläggsformat och delad policy. Håll en central bild av förbigång och fullständighet i belägg, med ägarskap av rättelser på teamnivå. Undvik att tvinga fram ett verktyg där team har olika behov.

**Offentlig sektor.** Funktionsuppdelning, spårbarhet och lagringsregler formar pipelinen. Utforma beläggen för revision och kontrollera juridiska krav och upphandlingskrav, även för automatiserade beslut (se ämne 8.3, Mätetal för regelefterlevnad och revision, och ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna är pipelineplattformen och körarna, arbetet med att skriva och underhålla test och policy, tid för att rätta opålitlighet och kostnaden för att lagra belägg. Måtten själva kostar lite när pipeline- och ändringsregister är länkade.

Avkastningen är kortare väntan på godkännande, färre manuella steg, tidigare upptäckt av fel och belägg som är redo när det behövs. Dessa visar sig som snabbare leverans och mindre insats vid revision, men de är lätta att överdriva. Mät dina egna baslinjer, såsom ledtid för godkännande och insats för att sammanställa revisionsbelägg, före och efter och ange antagandena som intervall (se ämne 7.7, Avkastning på investering och affärscase). Risksidan är kostnaden för fel som undkommer pipelinen och för ett pipelineavbrott som blockerar all ändring.

## Antimönster och fallgropar

- **Att räkna driftsättningar som framgång.** Det belönar att dela upp ändringar. Para med fel och omarbete.
- **Kör om tills grönt.** Det döljer opålitliga test och svagt belägg. Räkna opålitligheten och rätta den.
- **Att ignorera förbigång.** Ändringarna som undviker pipelinen är de den inte kan skydda. Stäm av produktion mot pipelineregister.
- **Att vidga standardklassen för att höja automatiseringen.** Andelen stiger och felgraden följer. Se över klassen med feldata.
- **Belägg som finns men inte säger något.** Stickprova innehållet, inte bara förekomsten.
- **En pipeline utan ägare.** Den förfaller. Namnge ett team och ge det tid.
- **Policyfel behandlade som kodbrister.** Människor lär sig ignorera portar. Klassificera stopp och rätta policyn.
- **Ingen manuell väg för nödfall.** Människor går förbi. Tillhandahåll en snabb, spårbar väg.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Pipelinens tillförlitlighet | Ad hoc-bygge; täta oförklarade fel | Pipeline finns; lyckandegrad följs | Ägare, mål och hantering av opålitliga test | Varaktighet och fel ses över per steg | Pipelines delar mönster och kapacitet över team |
| Godkännande och policy | Manuellt godkännande för alla ändringar | Vissa standardändringar definierade | Policy som kod för standardändringar, med test | Godkännandeklasser ses över med feldata | Riskbaserat godkännande anpassar sig automatiskt inom överenskomna gränser |
| Belägg och förbigång | Belägg rekonstrueras i efterhand | Visst belägg registreras | Krävt belägg registreras och länkas | Förbigång stäms av och fullständighet stickprovas | Belägg och avstämning fullt automatiserade och granskade |

## Checklista

- [ ] Pipelinen har en namngiven ägare och mål för tillförlitlighet och hastighet.
- [ ] Pipelinens lyckandegrad och varaktighetspercentiler redovisas per steg.
- [ ] Opålitliga test räknas och var och en har en ägare och ett rättelsedatum.
- [ ] Standardändringsklasser är definierade med riskkriterier och ses över med feldata.
- [ ] Policyer är kod, testade och versionerade, och versionen registreras per körning.
- [ ] Produktionstillståndet stäms av mot pipelineregister för att hitta förbigångar.
- [ ] Krävt belägg är definierat och registreras för varje driftsatt ändring.
- [ ] Fullständighet i belägg kontrolleras genom stickprov av innehållet.
- [ ] En spårbar nödväg finns och testas.
- [ ] Varje mätetal har en manipuleringsvektor och ett skyddsräcke visat bredvid.

## AI-prompter

**Klassificera ändringar efter risk för automatiskt godkännande.**

```text
Here is a list of the types of change we make and, for each, our recent history:
[paste change types with counts of changes and failures, if available]. Propose
which types might be candidates for automated approval and which should keep a
human reviewer, with the reasoning and the evidence I would need. Do not invent
failure rates. Mark each suggestion as a proposal for the change owners to
decide. List your assumptions and the data I should collect.
```

**Definiera det belägg en pipeline bör registrera.**

```text
Our pipeline is [description of stages and tools]. Our change records are kept in
[tool]. We must answer these questions after any deployment: [list questions
from auditors or incident reviewers]. Propose the evidence items the pipeline
should record and link, where to store them, and how to check that they are real
and not empty. Do not state compliance claims or legal requirements. List your
assumptions and questions for our compliance team.
```

**Analysera data om opålitliga test.**

```text
Below is a summary of failing tests and rerun outcomes for [period]: [paste
data without personal information]. Identify tests that fail and then pass on
rerun, group them by area, and propose an order for fixing them. Do not guess
causes that the data does not support. Say what additional data would help. List
your assumptions.
```

**Granska manipuleringsrisken i pipelinens instrumentpanel.**

```text
We report these pipeline measures: [paste measures and definitions]. Context:
[team size, tools, audience]. For each measure, list realistic ways it could look
better without improving delivery or safety, propose a guardrail, and say how
that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## AI-färdigheter

- [Change request](../../../../skills/change-request/SKILL.md): använd för att definiera vad en ändringspost och dess belägg bör innehålla.
- [Release notes](../../../../skills/release-notes/SKILL.md): använd för att förvandla pipelineutdata till anteckningar för användare och drift.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det ämne som täcker ett mätetal och dess parade skyddsräcke.

## Viktigaste slutsatser

- En pipeline är både en produktionstjänst och en kontroll, så mät dess tillförlitlighet, hastighet och det belägg den producerar.
- Mät förbigången genom att stämma av produktion mot pipelineregister och gör pipelinen till den lättaste vägen.
- Godkänn automatiskt bara väl förstådda ändringar, med testad policy och en mänsklig väg för resten.
- Räkna opålitliga test och rätta dem, eftersom omkörning tills grönt förstör förtroende och belägg.
- Stickprova beläggens innehåll, eftersom fullständighetstal ensamma kan uppfyllas med tomma poster.

## Referenser och vidare läsning

1. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
2. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
3. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
4. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
5. Wikipedia, [Test automation](https://en.wikipedia.org/wiki/Test_automation).
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
