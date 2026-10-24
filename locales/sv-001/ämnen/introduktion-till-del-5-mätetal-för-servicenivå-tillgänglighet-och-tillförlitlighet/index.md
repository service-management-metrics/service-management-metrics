# Introduktion till del 5: Mätetal för servicenivå, tillgänglighet och tillförlitlighet

**Mätetal för servicenivå, tillgänglighet och tillförlitlighet beskriver vad användare kan lita på från en tjänst, så att team bara lovar det de kan leverera, tidigt märker när de driver bort från löftet och lägger sin insats där användare skulle känna den.**

Del 2 till 4 tittade på hur arbete rör sig: hur snabbt det flyter, hur incidenter hanteras och hur ändring görs säkert. Den här delen vänder sig till det resultat användare faktiskt upplever. En tjänst som levererar ofta och löser incidenter snabbt kan ändå vara långsam, otillgänglig vid fel tillfällen eller oförutsägbar. Användare bedömer tjänsten efter om den fungerar när de behöver den, inte efter hur teamet organiserar sig.

Två traditioner möts här. ITIL-praxis har länge använt servicenivåavtal, mål och rapportering för att sätta förväntningar mellan en leverantör och dess kunder. Praxis inom site reliability engineering, framlagd i Googles böcker *Site Reliability Engineering*, använder servicenivåindikatorer, mål och felbudgetar för att göra tillförlitlighet till en uttrycklig teknisk avvägning mot ändringstakten. De två är förenliga. Båda utgår från det användare bryr sig om, båda uttrycker det som ett mätbart mål och båda behöver en ärlig redogörelse för hur ofta målet nåddes.

En återkommande risk löper genom hela delen. Ett tillförlitlighetstal är lätt att få att se bra ut: genom att välja en bekväm indikator, genom att utesluta besvärliga perioder eller genom att mäta komponenten i stället för användarens resa. Därför namnger varje ämne här klockorna och gränserna för sina mått, läser tid och fördröjning som fördelningar med percentiler (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal) och parar varje mått med ett skyddsräcke (se ämne 1.2, Goodharts lag och mätetalens psykologi). Varje mätetal beskriver en tjänst, ett team eller ett system. Inget av dem rangordnar en individ, och särskilt jourmåtten finns för att skydda människor, inte för att poängsätta dem.

De fyra perspektiven tillämpas på tillförlitlighet på särskilda sätt. Kontinuerlig leverans och felbudgetar gör risk till ett delat, förbrukningsbart beslut. AI-komponenter kan fela mjukt, genom att vara långsamma eller felaktiga snarare än nere, så tillgänglighet för AI-vägar behöver ett kvalitetsmått bredvid sig. Automatisering levererar telemetri och larm och måste själv mätas på missade och falska larm. Analys bör visa fönstret och antalet händelser bakom varje siffra.

## Ämnen i den här delen

- **5.1 Mätetal för SLA, OLA och XLA**: mått för servicenivåavtal, driftnivåavtal och upplevelsenivåavtal, och hur vattenmelonrapportering gömmer besvär bakom gröna instrumentpaneler och hur man undviker den.
- **5.2 SLI:er, SLO:er och felbudgetar**: servicenivåindikatorer och mål, policy för felbudget, förbrukningstakt och att välja indikatorer utifrån det användare bryr sig om.
- **5.3 Mätetal för tillgänglighet**: beräkning av drifttid och driftstopp, användarviktad tillgänglighet, planerat mot oplanerat avbrott och aritmetiken bakom nior.
- **5.4 Mätetal för kapacitet och prestanda**: utnyttjande, mättnad, percentiler av fördröjning, marginal och prognoser av efterfrågan.
- **5.5 Mätetal för övervakning och larmkvalitet**: larmvolym, andel åtgärdbara larm, falska positiva, detektionstäckning och larmtrötthet.
- **5.6 Mätetal för tjänstekontinuitet**: mål för återställningstid och återställningspunkt som nåtts i tester, testfrekvens, fynd från övningsdagar och planernas aktualitet.
- **5.7 Mätetal för rutinarbete och jour**: anrop per pass, belastning utanför kontorstid, rutinarbetets andel av tiden och mått på hållbara scheman.

## Hur ämnena hänger ihop

De tre första ämnena utgör delens kärna, eftersom de definierar löftet och hur det mäts. Ämne 5.1 (se ämne 5.1, Mätetal för SLA, OLA och XLA) täcker avtalen mellan leverantörer, interna team och kunder, och rapporteringspraxis som gör de avtalen ärliga eller vilseledande. Ämne 5.2 (se ämne 5.2, SLI:er, SLO:er och felbudgetar) ger den tekniska motsvarigheten: indikatorer hämtade från användarupplevelsen, mål satta mot dem och en felbudget som gör det återstående utrymmet för risk synligt. Ämne 5.3 (se ämne 5.3, Mätetal för tillgänglighet) fastställer aritmetiken som båda förlitar sig på, inklusive vad som räknas som driftstopp och vilka användare som påverkas.

Kapacitet och prestanda ligger tätt bakom tillgänglighet. En tjänst som tekniskt är uppe men mättad eller långsam sviker sina användare på ett sätt som ett enkelt drifttidstal missar. Ämne 5.4 (se ämne 5.4, Mätetal för kapacitet och prestanda) ger percentilerna av fördröjning och marginalmåtten som kompletterar tillgänglighet, och dess efterfrågeprognoser ger tidig varning innan ett mål hotas.

Detektion och återställning avgör hur stor del av ett misslyckande användare upplever. Ämne 5.5 (se ämne 5.5, Mätetal för övervakning och larmkvalitet) frågar om teamet får veta om problem snabbt och från signaler värda att agera på, vilket länkar direkt till tider för detektion och återställning i del 3. Ämne 5.6 (se ämne 5.6, Mätetal för tjänstekontinuitet) frågar om teamet kan återhämta sig inom angivna gränser när något större går fel, och prövar det påståendet i stället för att anta det.

Ämne 5.7 (se ämne 5.7, Mätetal för rutinarbete och jour) fungerar som det mänskliga skyddsräcket för resten. Snäva mål, brusiga larm och täta incidenter landar alla på de människor som bär personsökaren. Anrop per pass och rutinarbetets andel visar när tillförlitlighet köps med ohållbar insats, och de kopplar tillbaka till måtten för oplanerat arbete i del 2. Larmkvalitet i ämne 5.5 och jourbelastning i ämne 5.7 bör läsas som ett par, eftersom dåliga larm är en vanlig orsak till tunga scheman.

Slutligen länkar felbudgeten i ämne 5.2 den här delen till ändring i del 4. När budgeten är frisk kan ett team släppa friare. När den är förbrukad bör ändrings- och tillförlitlighetsarbete balanseras om. Del 6 kontrollerar sedan om målen i den här delen har lämnat användare bättre ställda, vilket är frågan en grön rapport inte kan besvara själv.
