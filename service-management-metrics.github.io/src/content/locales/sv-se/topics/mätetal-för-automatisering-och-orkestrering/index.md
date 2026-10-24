# Mätetal för automatisering och orkestrering

**Automatisering har lönat sig först när den tar bort arbete människor inte vill göra utan att skapa nytt arbete, nya fel eller ny risk, så mät vad varje automatisering tar bort, hur ofta den misslyckas, hur fort den kan göras ogjord och vem som avgör när den ska stoppas.**

## Översikt och motiv

[Automatisering](https://en.wikipedia.org/wiki/Automation) inom tjänstehantering innebär att låta programvara göra arbete som en människa tidigare gjorde: tillhandahålla ett konto, starta om en tjänst, dirigera ett ärende, godkänna en standardändring eller lägga ut en statusuppdatering. [Orkestrering](https://en.wikipedia.org/wiki/Orchestration_(computing)) samordnar flera automatiserade steg, ofta över verktyg och team, till ett flöde såsom "introducera en ny medarbetare" eller "återställ den här tjänsten". ITIL:s vägledande princip "optimera och automatisera" är ett långvarigt uttryck för idén, och kontinuerlig leverans beror på den. Praxis såsom [infrastruktur som kod](https://en.wikipedia.org/wiki/Infrastructure_as_code) gör uppsättningen av system till versionerade, testbara filer, så automatisering är också en form av register.

Automatisering flyttar risk från långsam och synlig till snabb och vidsträckt. En människa som gör ett misstag påverkar ett ärende. Ett automatiserat steg med samma misstag kan påverka varje ärende på en minut. Därför behöver automatisering egna mått, och därför är tal såsom "antal automatiseringar" eller "sparade timmar" svaga. De beskriver hur mycket som byggts och hur mycket som påståtts, inte om någon har det bättre.

Det här ämnet skiljer sig från de tidigare måtten för självbetjäning och automatisering i serviceförfrågningar (se ämne 3.7, Mätetal för självbetjäning och automatisering), som handlar om förfrågningsflödet mot användaren. Här är ämnet automatisering som en teknisk och operativ tillgång: dess täckning, tillförlitlighet, säkerhet, ägarskap och kostnad. Det skiljer sig också från pipelinemåtten i ämne 10.7 (se ämne 10.7, Mätetal för pipelines och automatiserade ändringar), som täcker vägen en ändring tar till produktion.

Termer som används här. En **automatisering** är en definierad uppgift som körs utan att en människa utför dess steg. En **driftinstruktion** är en dokumenterad procedur för en operativ uppgift, och **automatisering av driftinstruktioner** utför den. En **orkestrering** är ett flöde som samordnar automatiseringar. **Människa i loopen** innebär att en person granskar eller godkänner innan en handling får verkan. **Rutinarbete** är repetitivt manuellt operativt arbete som skalar med tjänsten och saknar bestående värde (se ämne 5.7, Mätetal för rutinarbete och jour). Ett **skyddsräcke** har här två betydelser: det parade mått som används genom hela den här boken och en teknisk gräns för vad en automatisering får göra. Texten säger vilken som avses.

## Nyckelprinciper

- **Mät effekten, inte antalet.** Antalet automatiseringar säger lite. Vad de tar bort och vad de bryter säger mycket.
- **Varje automatisering har en ägare.** En ägarlös automatisering är en risk som växer med åldern.
- **Gör varje automatiserad handling synlig och återkallbar.** Logga vad som kördes, på vad, med vilket resultat och känn till hur det görs ogjort.
- **Välj var en människa avgör.** Anpassa människans roll efter handlingens risk och testa att rollen kan utövas.
- **Mät automatisering som en tjänst.** Den har tillförlitlighet, ändring, kostnad och avveckling som vilken annan tjänst som helst.
- **Automatisera det stabila och tråkiga först.** Att automatisera något dåligt förstått bygger in problemet i systemet.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Grad av lyckade automatiseringskörningar | Andel automatiseringskörningar som slutfördes och uppnådde det avsedda resultatet, bekräftat av en kontroll efter körningen | körningar med en lyckad kontroll efter körningen / körningar startade under perioden; körningar utan kontroll efter körningen undantas och redovisas separat | procent | Loggar från orkestrerings- och automatiseringsplattformen | Hantering av serviceförfrågningar; releasehantering | Definition av klart för automatiserat arbete | Månadsvis |
| Täckning av uppgiftsautomatisering | Andel berättigade, upprepade uppgifter som är automatiserade | uppgifter på den överenskomna listan över berättigade som körs automatiserat / uppgifter på listan över berättigade; listan över berättigade ses över varje kvartal | procent | Uppgiftsinventering och register över driftinstruktioner | Ständig förbättring | Backlog av automatiseringskandidater | Kvartalsvis |
| Grad av manuellt ingripande | Andel automatiseringskörningar som krävde att en person klev in eller rättade | körningar med ett manuellt steg tillagt efter start / startade körningar | procent | Automatiseringsloggar och ärendelänkar | Incidenthantering | Undkomna fel i automatiserat arbete | Månadsvis |
| Grad av automatiseringsorsakade incidenter | Incidenter som tillskrivs en automatiserad handling, per 1 000 körningar | incidenter med en bekräftad automatiseringsorsak / automatiseringskörningar x 1 000 | antal per 1 000 körningar | Incidentregister länkade till körningsidentifierare | Incidenthantering; problemhantering | Andel misslyckade ändringar för automatiserad ändring | Månadsvis |
| Återställningstid | Tid för att göra en automatiserad handling ogjord när behovet har erkänts | median och 95:e percentil av (tiden då ogörandet slutförs minus tiden då beslutet att göra ogjort fattades) | minuter | Automatiseringsloggar och incidenttidslinje | Ändringsmöjliggörande | Förmåga till återställning i definitionen av klart | Kvartalsvis |
| Sparad tid, verifierad | Timmar manuellt arbete som tagits bort, kontrollerade genom stickprov | automatiserade uppgifter x (median för manuell uppgiftstid från ett tidsstickprov minus median för kvarvarande manuell tid) under perioden; stickprovets datum anges | timmar | Tidsstickprov och körningsantal | Ständig förbättring | Levererat värde per arbetspost | Kvartalsvis |
| Aktualitet i automatiseringsägarskap | Andel automatiseringar med en ägare som bekräftat ägarskapet och gått igenom automatiseringen de senaste 12 månaderna | automatiseringar med bekräftad ägare och översyn inom 12 månader / automatiseringar i registret | procent | Automatiseringsregister | Styrning; hantering av tillgångar och konfiguration | Teamets stadga och ägarskap | Kvartalsvis |

Formlerna räknar körningar, inte uppgifter, om inte annat anges. "Lyckad" kräver en oberoende kontroll efter körningen, till exempel att bekräfta att tjänsten är frisk eller att kontot finns; en körning som bara avslutas utan fel räknas inte som lyckad. Sparad tid utesluter tid som lagts på att bygga och underhålla automatiseringen, vilket räknas separat som kostnad (se ämne 7.7, Avkastning på investering och affärscase).

## Rekommendationer

### Bestäm vad som ska automatiseras

**1. Börja från en lista över upprepade uppgifter, inte verktyg.** Rangordna upprepade uppgifter efter hur ofta de sker, hur lång tid de tar, hur felbenägna de är och hur väl de är förstådda. Automatisera de stabila och väl förstådda först och lämna de sällsynta och dåligt förstådda åt människor.

**2. Rätta processen innan du automatiserar den.** Att automatisera en förvirrande process gör förvirringen snabbare. Gå igenom stegen med dem som utför dem, ta bort steg som inte tillför något och automatisera sedan.

**3. Välj människans roll efter risk.** För handlingar med låg risk som går att återkalla kan en person nöja sig med att granska en logg efteråt. För handlingar med högre risk godkänner en person före handlingen. För de högsta kan handlingen förbli manuell. Skriv ned regeln och testa att godkännare har den information de behöver för att avgöra.

### Gör automatisering säker

**4. Kräv en ägare och ett register.** Varje automatisering har en namngiven ägare och en post i ett register med sitt syfte, omfång, behörigheter och senaste översyn. När en ägare lämnar flyttas ägarskapet innan personen gör det.

**5. Begränsa behörigheter och omfång.** En automatisering bör ha den minsta åtkomst som gör jobbet och en gräns för hur mycket den kan ändra i en körning, till exempel ett maximalt antal konton eller servrar. En omfångsgräns är ett tekniskt skyddsräcke som begränsar skadan av en dålig körning.

**6. Kontrollera resultatet, inte felkoden.** Lägg till en kontroll efter körningen som bekräftar det avsedda tillståndet och mät framgång med den kontrollen. Ett skript som avslutas rent kan ha gjort ingenting.

**7. Logga och planera ogörandet.** Varje körning registrerar vad den ändrade, och varje automatisering har ett testat sätt att vända sin ändring eller ett angivet skäl till att den inte kan det. Öva återställningen i en säker miljö och mät hur lång tid den tar.

### Mät ärligt

**8. Verifiera sparad tid genom stickprov.** Påståenden om sparade timmar är ofta optimistiska. Tidta ett stickprov av den manuella uppgiften före och efter, ange stickprovets datum och dra av kostnaden för underhåll och för misslyckanden.

**9. Redovisa fel och ingripanden bredvid täckning.** Ett högt täckningstal med en hög grad av manuellt ingripande betyder att människor rättar det automatiseringen bryter. Visa båda på en sida.

**10. Avveckla det som inte längre hjälper.** En automatisering vars uppgift har ändrats eller försvunnit är en risk. Se över användning i regelbunden rytm och ta bort automatiseringar utan körningar eller utan ägare.

**11. Behåll en människas förmåga att stoppa den.** Tillhandahåll ett tydligt sätt att snabbt pausa en automatisering eller en hel klass av automatiseringar och mät hur fort det kan ske.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Grad av lyckade automatiseringskörningar | Att räkna en körning som lyckad när den avslutas rent; att radera misslyckade körningar ur loggen | Oberoende kontroll efter körningen; jämför loggar med efterföljande register |
| Täckning av uppgiftsautomatisering | Att krympa listan över berättigade så att täckningen stiger; att automatisera triviala uppgifter först | Gå igenom listan över berättigade med ett annat team; vikta efter volym och tid |
| Grad av manuellt ingripande | Att logga manuella rättelser som separata ärenden så att körningen ser ren ut | Länka ärenden till körningsidentifierare; stickprova körningar för dolda rättelser |
| Grad av automatiseringsorsakade incidenter | Att tillskriva automatiseringsfel åt människor eller verktyg; att inte länka incidenter till körningar | Kräv en körningsidentifierare i incidentregister; stickprova incidenter för missade länkar |
| Återställningstid | Att bara mäta återställningar som var lätta; att starta klockan sent | Öva återställning i en övning för de svåraste automatiseringarna; definiera klockans start |
| Sparad tid, verifierad | Att använda optimistiska uppgiftstider; att ignorera underhålls- och felkostnad | Tidsstickprov av någon utanför teamet; inkludera bygg- och underhållskostnad |
| Aktualitet i automatiseringsägarskap | Att namnge en distributionslista eller en tidigare anställd som ägare | Ägaren bekräftar skriftligt; kontrollera att ägaren är aktiv |

En sund avläsning är stigande täckning med en stabil eller fallande grad av manuellt ingripande och incidentgrad, verifierad sparad tid som motsvarar vad teamet upplever och ett register som hålls aktuellt eftersom avvecklade automatiseringar tas bort.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Automatisera brett och tidigt | Tar bort rutinarbete; snabbare och mer konsekvent arbete | Snabba, vidsträckta fel; underhållsbörda; dolda beroenden |
| Automatisera selektivt med mänskliga kontroller | Lägre risk; människor behåller sin skicklighet | Långsammare; godkännare kan stämpla utan att läsa |
| Räkna automatiseringar och sparade timmar | Enkelt att redovisa och jämföra | Belönar kvantitet; påståenden ofta overifierade |
| Mät effekt, fel och återställning | Visar verkligt värde och risk | Mer insats att samla in; kräver länkning av register |

Slutsatsen är att automatisera det som är stabilt och förstått, mäta vad det tar bort och vad det bryter och hålla människor förmögna att stoppa det. En automatisering som sparar timmar men orsakar en enstaka allvarlig incident kan vara en dålig affär, och bara de parade måtten visar det.

## Frågor att diskutera med teamet

**1. Vilka automatiseringar kör vi i dag, och vem äger var och en?**
Bygg listan tillsammans, eftersom team vanligtvis hittar automatiseringar som ingen minns att man byggt. Be om syftet, behörigheterna och datumet för senaste översyn. Räkna med skript på enskilda maskiner och schemalagda jobb med tidigare anställda som ägare. Följ upp genom att enas om vem som äger varje till slutet av kvartalet.

**2. När gjorde en automatisering senast ett problem större eller snabbare än en människa skulle ha gjort?**
Bjud in till berättelser utan skuld. Typiska exempel är ett uppstädningsjobb som tog bort fel resurser eller en åtgärd som startade om en tjänst under ett avbrott. Fråga vilken gräns som skulle ha begränsat skadan. Svaren blir omfångsgränserna och godkännandereglerna.

**3. För vår mest riskfyllda automatiserade handling, vem avgör, och skulle de kunna avgöra väl?**
Titta på vad godkännaren ser vid godkännandet. Ofta saknar godkännandebegäran den information som behövs för att bedöma. Fråga om godkännaren skulle kunna säga nej och vad som skulle hända om de gjorde det. Följ upp genom att förbättra begäran eller ändra rollen.

**4. Hur skulle vi veta att en automatisering i det tysta har slutat fungera?**
Tyst fel är det vanligaste problemet, och det syns ofta som platta tal. Be om kontrollen som skulle märka det. Diskutera larm på uteblivna körningar och på resultat som inte motsvarar förväntan. Välj en automatisering och testa den.

**5. Vilka sparade timmar lade vi faktiskt på något bättre?**
Tid som sparats på papper blir kanske inte kapacitet. Fråga vart tiden tog vägen och vem som beslutade. Var ärlig om underhålls- och felkostnad. Följ upp genom att välja ett påstående att verifiera med ett stickprov.

**6. Vilken automatisering bör vi avveckla, och vad skulle det kräva?**
Be om belägg för användning och värde. Avveckling kan kännas som ett misslyckande, så rama in det som rutinunderhåll. Identifiera beroenden innan något tas bort. Enas om en prövoperiod och ett sätt att återställa den.

## Fyra perspektiv

### Produkt- och leveransteam

Bygg automatisering som en del av produkten, med test, loggar, en ägare och ett sätt att rulla tillbaka. Inkludera kontroller efter körning i definitionen av klart och undvik att automatisera steg som teamet ännu inte förstår. Håll mått på nivån av teamets automatiseringar, inte enskilda ingenjörer.

### Service- och driftteam

Ni har jouren när automatisering misslyckas, så insistera på insyn och ett enkelt stopp. Följ manuella ingripanden och incidenter orsakade av automatisering och använd dem för att prioritera rättelser. Behandla automatiseringsregistret som en del av tjänsteposten.

### Ledning och styrning

Be om effekt, fel och beredskap för återställning, inte bara antal automatiseringar. Finansiera underhåll av automatisering såväl som dess skapande och räkna med att vissa automatiseringar avvecklas. Sätt förväntningar på mänsklig tillsyn efter risk och se över listan över de mest riskfyllda handlingarna.

### Kunder och användare

Ni ska inte märka automatisering när den fungerar, och ni ska ha en person att vända er till när den inte gör det. Fråga hur ni når en person och säg ifrån när en automatiserad handling var fel. Er återkoppling är en del av kontrollen att automatiseringen hjälpte.

## I praktiken: ett exempel från tjänstehantering

Ett medelstort nätbutiksföretags driftteam automatiserar tre uppgifter: att starta om en felande webbserver, att återställa lösenord för kundtjänst och att städa upp oanvänd molnlagring. Siffrorna i det här exemplet är illustrativa. Efter ett kvartal visar instrumentpanelen 3 automatiseringar, 2 400 körningar och "ungefär 180 sparade timmar". Ledningen är nöjd och ber om mer.

Teamet tillämpar måtten. Graden av lyckade automatiseringskörningar ser ut som 98 procent enligt felkod. Med en kontroll efter körningen faller den till 91 procent: lösenordsåterställningen rapporterar framgång men för 9 procent av körningarna kan användaren inte logga in. Graden av manuellt ingripande för den automatiseringen är 11 procent. Omstartsautomatiseringen har orsakat två incidenter, en när den startade om servrar under en databasväxling, med en återställningstid på ungefär 40 minuter eftersom ingen hade övat.

Tidsstickprovet visar att den manuella lösenordsåterställningen tog ungefär fyra minuter, inte de tio den ursprungliga uppskattningen använde, och att hanteringen av misslyckade återställningar tar ungefär lika lång tid som den ursprungliga uppgiften. Verifierad sparad tid ligger närmare 60 timmar. Lagringsuppstädningen har en ägare som lämnade företaget i våras.

Teamet beslutar att lägga till en kontroll efter körningen i lösenordsåterställningen, en omfångsgräns och en pausregel i omstartsautomatiseringen och en ny ägare till uppstädningen. En chef föreslår att räkna "byggda automatiseringar" som ett teammål. Teamet avböjer, eftersom det skulle belöna att bygga mer av samma sak. Den kvarstående svårigheten är att kontrollen efter körningen för lösenord behöver ett testkonto, och återställningsövningen för omstartsautomatiseringen är schemalagd till nästa kvartal.

## Agilitet, AI, automatisering och analys

### Agilitet

Behandla automatisering som en produkt som förbättras kontinuerligt tillsammans med de människor som använder och beror av den. En god praxis är en kort regelbunden översyn av automatiseringsbackloggen, felen och ingripandena med intressenter. Varningen är att täta små ändringar av automatisering behöver samma testning som annan ändring, annars kommer felen snabbare.

### AI

AI kan skriva utkast till driftinstruktioner, skriva skript och avgöra vilken handling som ska vidtas, och agentisk AI kan agera på system. Behandla varje AI som kan agera som en automatisering med en ägare, behörigheter, omfångsgränser, en godkännanderegel och en återställning. Para dess framgångsgrad med andelen felaktiga handlingar och andelen en person behövde återkalla (se ämne 10.3, Mätetal för AI-agenter och chattbottar). Varningen är att ett AI-skrivet skript ser auktoritativt ut, så testa det som vilken kod som helst.

### Automatisering

Detta är ämnets föremål, så praxis är att mäta själva automatiseringsplattformen: dess tillgänglighet, körningsfel och kötider, eftersom många tjänster beror av den. Samla in körningsdata automatiskt med körningsidentifierare som länkar till ärenden och incidenter. Varningen är att automatiseringsplattformen blir en enskild felpunkt, så ha en manuell reservväg för kritiska uppgifter.

### Analys

Länka körningar till utfall: lyckade kontroller efter körning, ärenden och incidenter. Beslutet detta ger underlag för är vilken automatisering som ska rättas, utökas eller avvecklas. Varningen är att tillskrivning beror på konsekventa identifierare, så granska länkningsgraden och visa antalet körningar bakom varje grad (se ämne 10.8, Mätetal för analys och datakvalitet).

## Branschperspektiv

**Startup.** Små team automatiserar snabbt och med få kontroller. Håll en kort lista över automatiseringar med ägare, lägg en kontroll efter körning på allt som rör kunder och undvik att bygga en orkestreringsplattform innan det finns ett behov.

**Småföretag.** Automatisering betyder ofta några schemalagda jobb och en hanterad tjänst. Fråga din leverantör vilken automatisering som körs å dina vägnar och vilken återställningen är. För en lista och kontrollera att någon äger varje post.

**Storföretag.** Många automatiseringar över många team skapar beroenden och dubbelarbete. Håll ett centralt register, standardiserad loggning och körningsidentifierare och en granskningsväg för handlingar med hög risk. Dela automatiseringar mellan team i stället för att bygga om dem.

**Offentlig sektor.** Behov av ansvarsskyldighet och revision innebär att varje automatiserad handling måste kunna spåras till ett beslut och en ägare. Behåll loggar och godkännanden som belägg och kontrollera upphandlings- och rättsliga regler för automatiserade beslut som påverkar medborgare (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna är att bygga och testa automatiseringen, driva plattformen, underhålla automatiseringen när system förändras och kostnaden för fel. Att samla in måtten kostar lite om körningar loggas med identifierare. Den större kostnaden är disciplinen med ägare, översyner och återställningsövningar.

Avkastningen är borttagande av rutinarbete, snabbare och mer konsekvent arbete och färre manuella fel. Dessa är verkliga men lätta att överdriva, så verifiera med stickprov. Risksidan är incidenter orsakade av automatisering och kostnaden för en automatisering ingen underhåller. Ett rättvist affärscase jämför verifierad sparad tid, plus undvikna fel, med den fulla kostnaden inklusive underhåll och incidenter och anger antagandena som intervall (se ämne 7.7, Avkastning på investering och affärscase). Inga referenstal anges här, eftersom de varierar kraftigt med sammanhanget. Mät dina egna baslinjer innan du börjar.

## Antimönster och fallgropar

- **Att räkna byggda automatiseringar.** Det belönar kvantitet. Redovisa effekt, fel och återställning i stället.
- **Framgång enligt felkod.** Ett rent avslut bevisar lite. Kontrollera det avsedda resultatet.
- **Ägarlösa automatiseringar.** De misslyckas i det tysta när system förändras. För ett register och bekräfta ägare.
- **Att automatisera en dålig process.** Felet flyttar snabbare. Rätta processen först.
- **Inget ogörande.** En snabb felaktig handling utan återkallande är värsta fallet. Planera och öva återställning.
- **Att påstå sparade timmar utan stickprov.** Verifiera med tidsstickprov och dra av underhåll.
- **Godkännande som teater.** En godkännare utan information att avgöra tillför fördröjning och ingen säkerhet. Utforma begäran på nytt.
- **Automatisering som enskild felpunkt.** Behåll en manuell väg för kritiska uppgifter.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Ägarskap och register | Skript som bara deras upphovspersoner känner till | Huvudautomatiseringarna listade | Register med ägare, omfång och översynsdatum | Översyner och avvecklingar i regelbunden rytm | Delad katalog och standardmönster över team |
| Säkerhet och återställning | Inget ogörande; kontroller av felkod | Vissa kontroller efter körning och loggar | Kontroller efter körning, omfångsgränser och testad återställning | Återställningsövningar; incidenter länkade till körningar | Säkerhetsmönster inbyggda i plattformen |
| Värdebelägg | Antal och uppskattningar | Sparad tid uppskattad | Sparad tid stickprovad och verifierad | Effekt, fel och kostnad granskas tillsammans | Portfölj av automatisering hanterad efter värde och risk |

## Checklista

- [ ] Varje automatisering har en ägare som har bekräftat ägarskapet.
- [ ] Ett register listar varje automatisering med syfte, omfång och behörigheter.
- [ ] Varje automatisering har en kontroll efter körning som bekräftar det avsedda resultatet.
- [ ] Körningar loggas med identifierare som länkar till ärenden och incidenter.
- [ ] Varje automatisering har en omfångsgräns och ett testat sätt att göra ogjort eller pausa den.
- [ ] Den mänskliga rollen är definierad för varje automatiserad handling efter risk.
- [ ] Sparad tid verifieras av ett daterat stickprov.
- [ ] Manuella ingripanden och automatiseringsorsakade incidenter redovisas med täckning.
- [ ] Oanvända eller ägarlösa automatiseringar ses över och avvecklas.
- [ ] Varje mätetal har en manipuleringsvektor och ett skyddsräcke visat bredvid.

## AI-prompter

**Bygg ett automatiseringsregister av material du klistrar in.**

```text
I will paste a list of scripts, scheduled jobs, and automations we run: [paste
list with any notes]. Build a table with columns: name, purpose, system affected,
owner (use only what I provided; write "unknown" otherwise), permissions (only if
given), last review (only if given), and the first question I should ask about it.
Do not invent owners, dates, or permissions. List your assumptions at the end.
```

**Utforma en kontroll efter körning och en återställning för en automatisering.**

```text
Our automation is [name], which does [description] on [systems]. It runs [how
often] with [permissions]. Propose a post-run check that confirms the intended
result, a scope limit that caps damage, a way to pause it, and a rollback
approach. Say what information a human approver would need if we added an
approval step. Do not assume tools we have not named. List your assumptions and
the questions I should answer.
```

**Granska manipuleringsrisken i en automatiseringsinstrumentpanel.**

```text
We report these automation measures: [paste measures and definitions]. Our
context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without helping anyone, propose a guardrail, and say how that
guardrail could be gamed. Do not invent benchmark values. List your assumptions.
```

**Planera en verifiering av sparad tid.**

```text
We claim [number] hours saved by automating [task]. Draft a short plan to verify
it by sampling: what to time, how many samples to take, how to include
maintenance and failure handling, and how to report uncertainty. Do not invent
figures; use placeholders for numbers I should collect. List assumptions.
```

## AI-färdigheter

- [Runbook](../../../../skills/runbook/SKILL.md): använd för att dokumentera en uppgift innan den automatiseras.
- [Root cause analysis](../../../../skills/root-cause-analysis/SKILL.md): använd för att analysera en incident orsakad av en automatiserad handling.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det ämne som täcker ett mätetal och dess parade skyddsräcke.

## Viktigaste slutsatser

- Antal automatiseringar och sparade timmar beskriver insats och påståenden, så mät effekt, fel och återställning.
- Varje automatisering behöver en ägare, en registerpost, en kontroll efter körning, en omfångsgräns och ett sätt att göra ogjort eller pausa.
- Välj var en människa avgör efter risk och testa att människan kan avgöra väl.
- Verifiera sparad tid med daterade stickprov och dra av underhålls- och felkostnad.
- Avveckla automatiseringar som är ägarlösa, oanvända eller inte längre behövs.

## Referenser och vidare läsning

1. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
2. Wikipedia, [Orchestration (computing)](https://en.wikipedia.org/wiki/Orchestration_(computing)).
3. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
4. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
5. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
6. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
7. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
