# Mätetal för självbetjäning och automatisering

**Mät självbetjäning efter om människor fick det de behövde utan hjälp, och mät automatisering efter det arbete den tar bort och de fel den skapar, eftersom en kontakt som aldrig kom bara är en framgång om problemet löstes.**

## Översikt och motiv

Självbetjäning och automatisering är de två huvudsakliga sätten en tjänsteorganisation tar rutinarbete från sina människor. [Självbetjäning](https://en.wikipedia.org/wiki/Self-service_software) låter en användare lösa ett problem eller få något på egen hand, via en portal, en kunskapsartikel, en sida för lösenordsåterställning eller en [chattbot](https://en.wikipedia.org/wiki/Chatbot). [Automatisering](https://en.wikipedia.org/wiki/Automation) låter ett system utföra de steg som en person tidigare utförde, till exempel att skapa ett konto, starta om en tjänst eller stänga ett ärende när en övervakare bekräftar återhämtning. Båda siktar mot samma resultat: färre repetitiva uppgifter för människor, snabbare resultat för användare och mer tid för arbete som kräver omdöme.

Idéerna passar in i båda traditionerna. I [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 förväntar sig praktiken hantering av serviceförfrågningar att väl förstådda, upprepbara förfrågningar hanteras genom standardflöden med så mycket automatisering som är rimligt, och praktikerna incidenthantering och kunskapshantering förväntar sig att god information finns tillgänglig för användare och supportpersonal vid den tidigaste användbara punkten. Agil praxis och DevOps når samma plats på en annan väg: [infrastruktur som kod](https://en.wikipedia.org/wiki/Infrastructure_as_code), pipelines och disciplinen att ta bort rutinarbete (toil), som Googles böcker om driftsäkerhetsutveckling definierar som manuellt, repetitivt, automatiserbart arbete som växer med tjänsten. Den delade idén kallas ofta "skifta vänster": flytta lösningen av ett problem mot användaren, eller mot den billigaste och tidigaste punkten i supportkedjan, och bort från specialistkön.

Skifta-vänster-språket inbjuder till ett mätfel. Team ser att en undviken kontakt är billig och räknar sedan undvikna kontakter som framgång. Antalet är lätt att producera, eftersom ett portalbesök som inte slutade i ett ärende ser likadant ut som ett portalbesök där användaren gav upp. Det här ämnet utgår därför från användarens resultat. Det definierar vad självbetjäningsframgång betyder, hur man uppskattar avvisning utan att ta åt sig äran för övergivande, hur man mäter automatiseringstäckning och tillförlitlighet och hur man ser skifta-vänster-effekten på volym och komplexitet. De relaterade volym- och prioritetsmåtten finns i ämne 3.2, Incidentvolym och prioritet, förfrågningssidan finns i ämne 3.5, Mätetal för uppfyllande av serviceförfrågningar, och kunskapssidan finns i ämne 3.6, Mätetal för kunskapshantering.

Termer som används i det här ämnet:

- **Nivå 0 (eller självbetjäningsnivån)**: lösning av användaren utan att kontakta personal. Nivå 1 är den första supportlinjen, vanligen servicedesken, och nivå 2 och 3 är specialist- och ingenjörsnivåerna.
- **Avvisning** (deflection): en kontakt som annars hade nått personal och som i stället löstes på nivå 0. Den kan inte observeras direkt, så den är alltid en uppskattning.
- **Genomfall** (fall-through): en användare som försökte självbetjäning, lyckades inte och sedan kontaktade personal om samma behov.
- **Driftinstruktion** (runbook): en dokumenterad procedur för en rutinmässig driftuppgift. En [driftinstruktion](https://en.wikipedia.org/wiki/Runbook) är det vanliga första steget mot att automatisera den.
- **Rutinarbete (toil)**: manuellt, repetitivt, automatiserbart arbete utan bestående värde (se ämne 5.7, Mätetal för rutinarbete och jour).
- **Tjänstekatalog**: listan över tjänster och standardförfrågningar som erbjuds användare. ITIL kallar den "service catalogue".

## Nyckelprinciper

- **Räkna resultat, inte undvikna kontakter.** En portalsession utan ärende är bara en framgång när användarens behov uppfylldes. Definiera framgång från användarens sida och verifiera den med en uppföljande signal.
- **Avvisning är en uppskattning, så märk den som en.** Ange metoden, jämförelsen som användes och osäkerheten. Presentera aldrig en uppskattad avvisningssiffra som ett uppmätt faktum.
- **Mät genomfallsvägen.** Vägen från ett misslyckat självbetjäningsförsök till en bemannad kontakt är där det mesta dolda misslyckandet bor. Redovisa den bredvid varje framgångstal.
- **Automatisering har en kostnadssida.** Varje automatiserat flöde behöver underhåll, övervakning och ett sätt att fallera tryggt. Mät täckning och tillförlitlighet tillsammans och räkna insatsen som läggs på att hålla automatisering vid liv.
- **Skifta vänster ändrar mixen såväl som volymen.** När lätt arbete lämnar kön är det återstående arbetet svårare och långsammare i genomsnitt. Läs lösningstid och hanteringstid med det i åtanke (se ämne 3.3, Svarstid och lösningstid för incidenter).
- **Mätetal beskriver tjänster och flöden.** Redovisa per katalogobjekt, artikelfamilj eller automatiseringsflöde. Rangordna aldrig handläggare efter hur många användare de knuffade mot självbetjäning.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Självbetjäningsframgång | Andel självbetjäningssessioner där användarens behov uppfylldes utan personalkontakt | Sessioner som slutade i ett slutfört resultat (förfrågan inskickad och uppfylld, artikel markerad hjälpsam, återställning slutförd) utan bemannad kontakt om samma behov inom 7 dagar, dividerat med alla sessioner som startade en uppgift. Klockan startar vid första meningsfulla åtgärden i portalen, stoppar vid slutförande eller övergivande. Utesluter bottrafik, testkonton och ren bläddring | Procent | Portal- och identitetsloggar, ärendesystem, sessionsanalys | Hantering av serviceförfrågningar; kunskapshantering | Återkopplingsloop med kund; resultatbaserade acceptanskriterier | Månadsvis |
| Uppskattad avvisningsgrad | Uppskattad andel efterfrågan som löstes på nivå 0 och som annars hade nått personal | Jämför kontaktfrekvens per 1 000 aktiva användare för en tjänst före och efter en självbetjäningsändring, eller mot en kontrollgrupp, justerat för kända efterfrågeförskjutningar. Anges som en uppskattning med metoden namngiven. Utesluter kontakter som flyttat till en annan kanal | Procent (uppskattning) | Ärendesystem, användarpopulationsantal, experiment- eller kohortdata | Servicedesk; incidenthantering | Experiment med kontrollgrupp; A/B-test | Kvartalsvis |
| Genomfallsgrad | Andel misslyckade självbetjäningsförsök som slutar i en bemannad kontakt om samma behov | Bemannade kontakter som öppnats inom 7 dagar efter en övergiven eller misslyckad självbetjäningssession av samma användare om samma ämne, dividerat med misslyckade sessioner. Klockan startar vid sessionens slut. Utesluter orelaterade kontakter | Procent | Portalloggar sammanfogade med ärendesystemet på användare och ämne | Servicedesk; kunskapshantering | Eskaleringsväg i en definition av klart; återkoppling från support | Månadsvis |
| Självbetjäningsanvändning (portal-först-andel) | Andel berättigade förfrågningar och incidentrapporter som väckts genom självbetjäningskanaler | Objekt skapade via portal, bot eller API, dividerat med alla objekt för katalogposter som erbjuder en självbetjäningsväg. Utesluter objekt för vilka ingen självbetjäningsväg finns | Procent | Kanalfältet i ärendesystemet, katalogkonfiguration | Hantering av serviceförfrågningar; hantering av tjänstekatalog | Uppföljning av användning efter en release | Månadsvis |
| Automatiseringstäckning | Andel berättigat upprepbart arbete som slutförts genom automatisering utan manuellt steg | Objekt som slutförts av ett automatiserat flöde från början till slut, dividerat med alla objekt av typer som bedömts automatiserbara. Räknar typen som automatiserbar bara om en skriven kandidatlista namnger den. Utesluter engångsarbete och objekt automatiseringen avvisade | Procent | Ärendesystem, loggar från automatiseringsplattformen, kandidatlista | Hantering av serviceförfrågningar; driftsättningshantering | Automatisering av definitionen av klart; pipeline som kod | Månadsvis |
| Felgrad och omarbetsgrad för automatisering | Andel automatiserade körningar som misslyckades, krävde manuell reparation eller gav ett utfall som senare rättades | Automatiserade körningar som felade, återställdes eller följdes av en manuell rättelse inom 7 dagar, dividerat med alla automatiserade körningar. Klockan startar vid körningens start. Utesluter planerade provkörningar | Procent | Loggar från automatiseringsplattformen, ärendesystem, ändringsposter | Ändringsmöjliggörande; incidenthantering | Andel misslyckade ändringar; bygg- och teststabilitet | Veckovis |
| Manuell bearbetningstid per förfrågningstyp | Personalinsats som läggs på en förfrågningstyp som är kandidat för automatisering | Aktiva minuter registrerade av personal på objekt av typen under perioden, sammanfattade som median och 85:e percentil per objekt. Uppskattas genom stickprov där tid inte loggas. Utesluter väntetid | Minuter per objekt | Tidsstickprov, arbetsloggar i ärendesystemet | Hantering av serviceförfrågningar | Uppföljning av rutinarbete; slöseri i värdeström | Kvartalsvis |
| Nivåfördelning (skifta-vänster-andel) | Var i supportkedjan objekt löses | Objekt lösta på varje nivå (0, 1, 2, 3) dividerat med alla lösta objekt under perioden. Nivån är den högsta nivå som gjorde aktivt arbete. Utesluter objekt som avbrutits före triage | Procent per nivå | Lösargrupp och tilldelningshistorik i ärendesystemet | Incidenthantering; servicedesk | Svärmning och eskaleringsmönster; tvärfunktionella team | Månadsvis |

Alla dessa mäts per tjänst, katalogobjekt eller flöde, aldrig per person. Tidsmått bör visas som medianen plus en hög percentil, så som introduktionen till ämnet om statistisk läskunnighet förklarar (se ämne 1.6, Statistisk läskunnighet för tjänstemätetal).

## Rekommendationer

### Definiera framgång från användarens sida

**1. Skriv ned vad "fick det jag behövde" betyder för varje självbetjäningsväg.** För en lösenordsåterställning är det en slutförd återställning och en lyckad inloggning. För en förfrågan är det uppfyllande, inte inskickande. För en artikel är det en användare som inte kontaktade personal igen om samma behov. En definition som stannar vid "visade sidan" mäter trafik.

**2. Sammanfoga självbetjäningssessioner med senare kontakter.** Det starkaste beviset på misslyckande är en bemannad kontakt om samma ämne strax efter en session. Länka de två på användare och ämne där integritetsregler tillåter det, och där de inte gör det, använd aggregerade antal per ämne och dag. Sammanfogningen förvandlar en vag nöjdhetsberättelse till en genomfallsgrad du kan förbättra.

**3. Fråga användare med en enda fråga vid utgången.** En enfrågeuppmaning som "Löste detta ditt problem?" ger en direkt signal som loggar inte kan. Behandla svaren som ett stickprov, läs fritextkommentarerna och jämför de som svarar med de som inte gör det så att de gladaste användarna inte definierar resultatet (se ämne 6.1, Mätetal för kundnöjdhet).

### Uppskatta avvisning ärligt

**4. Föredra en jämförelse framför en räknare.** Den renaste uppskattningen kommer från en kontrollgrupp, en fasvis utrullning eller en före-och-efter-vy av kontakter per 1 000 aktiva användare för den berörda tjänsten. Att räkna "sessioner som inte blev ärenden" överskattar effekten, eftersom många av de användarna aldrig hade ett behov som personal skulle ha sett. Ange metoden och osäkerheten bredvid siffran.

**5. Normalisera volym mot användning.** Ett fall i ärendeantal kan följa av ett fall i användare, en stilla releasecykel eller en säsongsförändring. Dividera med aktiva användare eller transaktioner innan du drar slutsatser (se ämne 3.2, Incidentvolym och prioritet). Kommentera diagrammet med releaser, kampanjer och portalförändringar.

**6. Håll avvisning utanför mål.** Ett mål för avvisning belönar att dölja kontaktvägen, gräva ned telefonnumret och avsluta chattsessioner i förtid. Använd avvisning som en lärandeuppskattning och låt målet ligga på användarresultat, till exempel självbetjäningsframgång och det äldsta olösta objektet.

### Mät automatisering som en produkt, inte ett projekt

**7. För en kandidatlista och mät täckning mot den.** Täckning av "allt arbete" är ett dåligt mått, eftersom det mesta arbetet inte är automatiserbart. För en kort skriven lista över förfrågnings- och incidenttyper som är upprepbara, väl förstådda och frekventa, rangordna den efter manuell bearbetningstid och volym och redovisa täckning mot den listan. Se över listan varje kvartal så att nämnaren är ärlig.

**8. Para täckning med tillförlitlighet.** Ett automatiserat flöde som fallerar en körning av tio, eller som i tysthet ger fel resultat, kan kosta mer än den manuella uppgiften det ersatte. Följ felgrad och omarbetsgrad, tiden att upptäcka en misslyckad körning och hur ofta en person måste reparera resultatet. Använd de felhanteringspraktiker som SRE-gemenskapen beskriver: idempotenta steg, tydliga larm och en trygg manuell reservväg (se ämne 5.5, Mätetal för övervakning och larmkvalitet).

**9. Räkna underhållet.** Automatiseringar behöver ägare, versionshantering, tester och uppdateringar när systemen runt dem ändras. Registrera tiden som läggs på att underhålla varje flöde och jämför den med den manuella bearbetningstid det tog bort. En automatisering som kostar mer att hålla igång än den sparar är en kandidat för avveckling, vilket är ett normalt resultat, inte ett misslyckande.

### Bevaka skifta-vänster-effekten

**10. Räkna med att det återstående arbetet är svårare.** När rutinkontakter lämnar servicedesken blir genomsnittlig hanteringstid och lösning vid första kontakten på nivå 1 ofta sämre även om tjänsten är bättre. Redovisa nivåfördelningen och mixen av kategorier bredvid dessa mått och enas i förväg med ledningen om att en ökning av hanteringstiden efter en lyckad avvisning är väntad (se ämne 3.1, Mätetal för servicedesk).

**11. Slut loopen till kunskap och till problemhantering.** Varje genomfall är belägg för en saknad eller dålig artikel, ett förvirrande formulär eller ett orättat fel. Dirigera de främsta genomfallsämnena till kunskapsägarna och, där orsaken är ett fel, till problemhantering (se ämne 4.1, Mätetal för problemhantering). Granska listan månadsvis och redovisa hur många objekt som rättades.

**12. Dela den kapacitet du frigör.** Om automatisering och självbetjäning tar bort arbete, besluta vad den frigjorda tiden köper: förbättringsarbete, proaktiva rättelser eller utbildning. Team som inte ser någon nytta av automatisering slutar föreslå den. Följ den planerade andelen kapacitet för förbättring över tid (se ämne 2.9, Driftarbete och oplanerat arbete).

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Självbetjäningsframgång | Att räkna vilket slutfört formulär eller vilken sidvisning som helst som framgång; att ta bort uppmaningen "hjälpte detta" när betygen faller; att utesluta svåra ämnen ur nämnaren | Genomfallsgrad och ett stickprov av stängda sessioner lästa av en människa; redovisa nämnarreglerna |
| Uppskattad avvisningsgrad | Att dölja kontaktvägen; att lägga till steg före kontakt; att klassificera alla färre ärenden som avvisning oavsett orsak | Kontakter per 1 000 aktiva användare, användarnöjdhet för den berörda tjänsten och metoden skriven bredvid talet |
| Genomfallsgrad | Att definiera matchningsfönstret så kort att återkomster faller utanför det; att stänga den uppföljande kontakten som dubblett | Upprepad kontaktgrad över alla kanaler; granskning av ett stickprov av återkomna kontakter |
| Självbetjäningsanvändning (portal-först-andel) | Att tvinga alla förfrågningar in i portalen oavsett lämplighet; att byta etikett på telefonskapade ärenden till portalärenden | Självbetjäningsframgång och användarens ansträngning; andel förfrågningar som saknar en fungerande portalväg |
| Automatiseringstäckning | Att välja lätta objekt till kandidatlistan; att växa nämnaren med triviala uppgifter; att räkna delvis manuella flöden som automatiserade | Skriven kandidatlista granskad varje kvartal; felgrad och omarbetsgrad för automatisering; manuell bearbetningstid för de återstående objekten |
| Felgrad och omarbetsgrad för automatisering | Att utesluta manuella reparationer ur räkningen; att låta misslyckade körningar försöka om i tysthet tills de lyckas; att märka misslyckanden som "planerade provkörningar" | Incident- och larmposter länkade till flöden; tid att upptäcka en misslyckad körning; stickprovsrevision av utfall |
| Manuell bearbetningstid per förfrågningstyp | Att inte logga tid för objekt som ser manuella ut; att tilldela tiden till en annan kategori; att bara stickprova lugna dagar | Stickprovsplan skriven och granskad; jämför med cykeltid och köålder för samma typ |
| Nivåfördelning (skifta-vänster-andel) | Att höja andelen lösta på nivå 1 genom att omklassificera eskaleringar, eller genom att stänga objekt på nivå 1 och öppna dem på nivå 2 som nya objekt | Återöppningsgrad och andel länkade ärenden; stickprov av lösningskvalitet; kundnöjdhet per nivå |

En sund avläsning visar självbetjäningsframgång som stiger tillsammans med en stabil eller fallande genomfallsgrad, uppskattad avvisning angiven med sin metod, automatiseringstäckning som stiger mot en granskad kandidatlista medan fel och omarbete förblir låga och en nivåfördelning som flyttar arbete tidigare utan att höja återöppningsgraden eller sänka nöjdheten. Om ett tal förbättras medan dess skyddsräcke försämras, behandla förbättringen som obevisad.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Självbetjäning först | Omedelbara resultat för användare, lägre marginalkostnad, tillgängligt när som helst på dygnet | Användare med komplexa eller ovanliga behov kan känna sig strandsatta; svagt innehåll skapar fler kontakter än det tar bort |
| Bemannad kontakt först | Personlig hjälp, omdöme och en chans att märka ovanliga problem | Långsammare, kostsamt och beroende av personalens tillgänglighet |
| Att uppskatta avvisning med en kontrollgrupp | Trovärdigt belägg för effekt | Kräver designarbete och tolerans för en grupp som inte får ändringen |
| Att räkna sessioner utan ärenden | Billigt och alltid tillgängligt | Överskattar framgång; inbjuder till manipulation; kan inte skilja framgång från övergivande |
| Bred automatisering | Konsekvent utförande och mindre rutinarbete | Underhållsbörda, felmönster som skalar och kompetens som kan försvinna ur teamet |
| Selektiv automatisering av stabila flöden | Bättre avkastning för insatsen och färre överraskningar | Lämnar visst manuellt arbete på plats, som behöver egen uppmärksamhet |

Svaret i klartext är att automatisera det som är frekvent, stabilt och väl förstått och att hålla en person tillgänglig där behovet är oklart eller insatserna höga. Självbetjäning bör bedömas efter om människor fick hjälp, med den bemannade vägen synlig. Skifta-vänster-besparingar är verkliga bara när användarresultatet håller, så räkna båda sidorna.

## Frågor att diskutera med teamet

**1. När en användare öppnar portalen och lämnar utan att väcka ett ärende, vad antar vi att som hände, och hur skulle vi ta reda på det?**
Be gruppen lista de möjliga berättelserna: användaren hittade svaret, gav upp, ringde i stället eller frågade en kollega. Titta på vilka data som skulle skilja dem åt, till exempel en uppföljande kontakt, en utgångsuppmaning eller ett stickprov av sessioner. Facilitatorn bör registrera vilket antagande som för närvarande finns på instrumentpanelen och vem som förlitar sig på det. Avsluta med att enas om en ändring som skulle ersätta ett antagande med belägg.

**2. Hur uppskattar vi avvisning i dag, och skulle vi försvara metoden inför en skeptisk ekonomipartner?**
Gå igenom beräkningen steg för steg, inklusive jämförelsegruppen och justeringarna för efterfrågeförändringar. Fråga vad mer som ändrades under perioden, till exempel releaser, avbrott eller personalförändringar. Notera intervallet av rimliga värden såväl som rubriksiffran. Diskussionen bör sluta med ett enkelt uttalande om metoden som kan stå bredvid talet.

**3. Vilka av våra automatiseringar skulle vi stänga av i morgon om vi kände deras sanna kostnad?**
Lista de automatiserade flödena med deras ägare, senaste ändringsdatum, antal körningar, felgrader och underhållsinsats. Fråga vilka som ingen skulle sakna och vilka människor är rädda att röra. Facilitatorn bör behandla avveckling som ett legitimt utfall. Svaren avslöjar ofta flöden utan ägare.

**4. Vad händer med en användare vars självbetjäningsförsök misslyckas, och hur lång tid tar det att nå en person?**
Be någon gå vägen som en användare, inklusive att hitta kontaktvägen. Tidsätt den och notera varje steg som kunde kortas. Jämför upplevelsen med portalens uttalade avsikt. Gruppen bör avgöra om vägen är lika lätt att hitta som självbetjäningsvägen.

**5. Hur såg servicedeskens mix av arbete ut för ett år sedan, och hur ser den ut nu?**
Granska kategorimixen och nivåfördelningen över tid. Diskutera varför hanteringstid eller lösning vid första kontakten rörde sig och om det speglar en svårare mix. Fråga om ledningen har fått veta att detta är väntat. Enas om hur trenden ska presenteras så att en ökning av hanteringstiden efter ett lyckat skifte vänster inte läses som försämring.

**6. Vad skulle vi göra med den kapacitet automatisering frigör, och vem avgör?**
Uppskatta timmarna som tagits bort från manuellt arbete och namnge vad de var tänkta att köpa. Fråga om tiden gick till förbättringsarbete eller absorberades av ny efterfrågan. Diskutera hur teamet skulle veta. Facilitatorn bör driva på för ett konkret åtagande, till exempel en andel av kapaciteten reserverad för att rätta de främsta genomfallsämnena.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam äger mycket av det som får självbetjäning att lyckas: tydliga felmeddelanden, användbara formulär, hjälp i produkten och möjligheten att göra uppgifter utan att väcka ett ärende. De äger också automatisering som bor i pipelines och infrastrukturkod. Deras användbara mått är självbetjäningsframgång för de egna funktionerna och de manuella steg som återstår i release- och miljöarbete, behandlade som rutinarbete att ta bort (se ämne 2.8, DORA-mätetal). De bör läsa genomfallsämnen som en produktbacklog.

### Service- och driftteam

Driftteam bär automatiseringsbeståndet och den bemannade reservvägen. De bör följa automatiseringens tillförlitlighet, underhållsbelastningen och den manuella bearbetningstid som återstår, och de bör bevaka nivåfördelningen utan att straffas för det svårare arbete som blir kvar. Handläggare bör tillfrågas om vilka förfrågningar som är bra automatiseringskandidater, eftersom de vet var den verkliga friktionen finns. Redovisa per flöde och förfrågningstyp, och aldrig per handläggare.

### Ledning och styrning

Ledare frestas att behandla avvisning som en kostnadsbesparingssiffra. En bättre begäran är användarresultatet, metoden bakom varje uppskattning och automatiseringens tillförlitlighet. Styrningen bör förvänta sig en kandidatlista, en ägare för varje automatiserat flöde och en regel för avveckling. Ledare bör också skydda den bemannade vägen från att döljas för att nå ett mål (se ämne 11.3, Att införa mätetal utan att skapa rädsla).

### Kunder och användare

Användare vill komma vidare med sitt arbete. Många föredrar självbetjäning när den fungerar, och nästan alla ogillar att vara fångade i den när den inte gör det. Deras upplevelse fångas bäst av ansträngnings- och resultatfrågor vid utgången och av om ett misslyckat försök snabbt ledde till en person (se ämne 6.4, Användar- och medarbetarupplevelse). Användare med tillgänglighetsbehov eller begränsad säkerhet är en tidig varning för portaler som bara fungerar för den genomsnittlige användaren.

## I praktiken: ett exempel från tjänstehantering

It-avdelningen på en medelstor nätbutik driver en servicedesk, ett plattformsteam och flera produktteam. Siffrorna i det här exemplet är illustrativa.

Avdelningen lanserar en omdesignad portal med guidad lösenordsåterställning, ett flöde för förfrågan om programvaruåtkomst och en chattbot för vanliga frågor. Tre månader senare visar portalrapporten att 62 procent av sessionerna slutar utan ärende, och en chef föreslår att kalla det "avvisning" och sätta ett mål på 70 procent. Deskchefen är orolig, eftersom handläggare rapporterar att människor som ringer säger att de "provade portalen först".

Teamet granskar måtten. De definierar självbetjäningsframgång som ett slutfört resultat utan bemannad kontakt om samma ämne inom 7 dagar. Enligt den definitionen är framgångsgraden 48 procent, inte 62, och genomfallsgraden för åtkomstförfrågningsflödet är 31 procent. När de läser ett stickprov av 40 genomfallskontakter finner de att de flesta användare inte kunde avgöra vilket av två liknande katalogobjekt de skulle välja, och att chattboten besvarade en fråga om ett avvecklat verktyg.

Teamet fattar tre beslut. För det första blir rubrikmåttet självbetjäningsframgång, med uppskattad avvisning visad bara som en kvartalsuppskattning baserad på kontakter per 1 000 aktiva användare, och inget mål sätts på avvisning. För det andra slås de två liknande katalogobjekten ihop, chattbotens innehåll rättas och de två främsta genomfallsämnena läggs i förbättringsbacklogen med en ägare. För det tredje läggs en manuell process för att skapa testmiljöer, som tar plattformsingenjörer en median på 25 minuter (illustrativt) och sker ungefär 40 gånger i månaden (illustrativt), på automatiseringskandidatlistan.

Plattformsteamet automatiserar miljöflödet inom kvartalet. En manipulationsrisk dyker snabbt upp: flödets täckningssiffra stiger, men felgraden och omarbetsgraden visar att en körning av åtta (illustrativt) behöver en manuell reparation och att reparationerna loggades som "planerat underhåll". Teamet lägger till reparerade körningar i felräkningen, länkar körningar till incidentposten och enas om att granska flödet månadsvis. Vid nästa granskning har framgångsgraden stigit till 57 procent (illustrativt), genomfallsgraden har fallit och servicedeskens hanteringstid har stigit något eftersom de återstående kontakterna är svårare. It-chefen går med på att presentera hanteringstiden tillsammans med nivåfördelningen, för att undvika att läsa ökningen som en försämring.

## Agilitet, AI, automatisering och analys

### Agilitet

Förbättra självbetjäning i små steg med återkoppling från användare, eftersom portalen är en produkt som används av verkliga människor. Varningen är att ett portal-först-påbud kan höja användningen medan det frustrerar användare som behöver en person.

### AI

AI-chatt och sökning kan höja självbetjäningsvolymen och den uppskattade avvisningen, men en avvisad kontakt kan vara ett olöst problem. Para avvisning med självbetjäningsframgång mätt med ett användarsvar eller ett fönster utan återkomst och med genomfallsgraden till en person. Varningen är att en modell som svarar självsäkert och fel ger kontakter som kommer tillbaka senare.

### Automatisering

Mät automatisering på täckning, på fel och omarbete och på den manuella bearbetningstid den tar bort. Logga varje automatiserad åtgärd så att den kan granskas och återställas. Varningen är att täckningstal belönar att automatisera lätta uppgifter, så följ de svåra också.

### Analys

Visa framgång, genomfall och återkontakt på en sida per förfrågningstyp, med antal. Beslutet detta ger underlag för är vad som ska automatiseras härnäst. Varningen är att avvisning är en uppskattning, så märk den som en och verifiera med ett stickprov av användare.

## Branschperspektiv

**Startup.** Grundare kan ofta rätta en dålig självbetjäningsväg genom att prata med användaren. Mät framgång med en enda utgångsfråga och några läsningar av verkliga sessioner och automatisera de två eller tre uppgifter som avbryter flest människor. Undvik att bygga en bot innan de skrivna svaren är bra.

**Småföretag.** En person kan sköta it åt alla, så självbetjäning betyder mest bra korta guider och ett delat förfrågningsformulär. Automatisering av kontoskapande och lösenordsåterställningar betalar sig snabbt, förutsatt att någon äger varje flöde. Håll den bemannade vägen uppenbar, eftersom ägarens egen personal annars kommer att gå runt systemet.

**Storföretag.** Skala gör både nyttan och manipulationen större. Standardisera definitioner över affärsenheter, håll en central kandidatlista och ett automatiseringsregister och redovisa per tjänst och katalogobjekt. Akta dig för att jämföra enheter som betjänar mycket olika användarpopulationer.

**Offentlig sektor.** Tillgänglighet, språkåtkomst och skyldigheten att betjäna människor som inte kan använda digitala kanaler är designunderlag, inte tillägg. Behåll assisterade vägar tillgängliga och uppmätta, dokumentera automatiserade beslut som påverkar människor och räkna med revisionsfrågor om vem som äger varje automatiserat flöde (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Motiven är färre repetitiva kontakter, snabbare resultat för användare, jämnare utförande av rutinuppgifter och mer kapacitet för förbättringsarbete. Kostnadssidan omfattar att bygga och underhålla portalen och innehållet, integrations- och dataarbetet för att sammanfoga sessioner med ärenden, automatiseringsplattformen och tiden att skriva, testa och äga varje automatiserat flöde. Stickprov av personaltid och en kort utgångsenkät kostar lite, och de ger det mesta av de belägg du behöver.

Avkastningen bör argumenteras ur din egen data. Använd manuell bearbetningstid och volym för att uppskatta den insats en automatisering tar bort, dra av underhållet och kostnaden för fel och redovisa resultatet som ett intervall med sina antaganden. För självbetjäning, använd genomfallsgraden och de stickprovade utfallen för att visa andelen kontakter som undveks därför att användare fick hjälp, inte bara avvisades. Importera inte avvisnings- eller besparingsprocentsatser från leverantörer eller undersökningar; mät din egen baslinje först. Den totala ägandekostnaden för en automatisering omfattar de ändringar den kommer att behöva allteftersom systemen runt den utvecklas, så budgetera för dem.

## Antimönster och fallgropar

- **Att räkna sessioner utan ärenden som framgång.** Det kan inte skilja hjälp från övergivande. Definiera framgång efter resultat och verifiera den med genomfall och utgångsrespons.
- **Mål på avvisning.** De belönar att dölja kontaktvägen. Använd avvisning som en uppskattning och sätt mål på användarresultat.
- **Att dölja telefonnumret eller chatten.** Användare som inte når en person höjer sin ansträngning och tappar förtroende. Håll den bemannade vägen synlig och mät hur lång tid det tar att nå den.
- **Att automatisera innan man förstår processen.** Flödet kodar förvirring i hög fart. Dokumentera och förenkla driftinstruktionen först och automatisera sedan den stabila versionen.
- **Automatisering utan ägare.** Flöden utan ägare förfaller i tysthet och fallerar vid dåliga ögonblick. Ge varje flöde en ägare, ett test, en övervakare och en avvecklingsregel.
- **Att ignorera kostnaden för fel.** Ett högt täckningstal med ouppmätt omarbete är en dold skuld. Redovisa felgrad och omarbetsgrad tillsammans med täckning.
- **Att läsa en ökning av hanteringstid som försämring.** Efter ett lyckat skifte vänster är det återstående arbetet svårare. Visa nivåfördelningen och kategorimixen bredvid tidsmåtten.
- **Att rangordna handläggare efter avvisade kontakter.** Det leder till att användare knuffas bort och förstör datan. Redovisa bara per tjänst och flöde.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Självbetjäningsframgång och avvisning | Portalbesök och ärendeantal redovisas; ingen resultatdefinition | Framgång definierad för vissa vägar; avvisning citeras utan metod | En skriven framgångsdefinition; genomfall mäts; avvisning märks som en uppskattning | Framgång och genomfall följs över tid med utgångsrespons; avvisning uppskattas genom jämförelse | Resultat delas med produktteam och leverantörer; genomfallsämnen driver finansierade rättelser |
| Automatiseringstäckning och tillförlitlighet | Automatisering ad hoc; ingen lista över kandidater | Vissa flöden automatiserade av enskilda team; fel hanteras informellt | Kandidatlista, ägare och felmått definierade för varje automatiserat flöde | Täckning, felgrad och underhållsinsats granskas och finansieras i en rytm | Automatisering samordnas över team och leverantörer; flöden avvecklas och revideras rutinmässigt |
| Skifta-vänster-effekt och användning | Volym redovisas utan sammanhang | Nivåfördelning följs av några team | Nivåfördelning och kategorimix redovisas bredvid hanteringstid | Frigjord kapacitet planeras och följs; ledningen läser mixeffekter rätt | Kapacitet och lärande flödar tillbaka in i tjänster och katalogdesign över organisationen |

## Checklista

- [ ] Självbetjäningsframgång är definierad efter resultat, med en skriven start, stopp och undantag.
- [ ] Genomfallsgrad mäts för de främsta självbetjäningsvägarna.
- [ ] Varje avvisningssiffra anger sin metod och är märkt som en uppskattning.
- [ ] Inget mål är satt på avvisning.
- [ ] En enfrågeuppmaning vid utgången eller motsvarande återkoppling finns för nyckelvägar.
- [ ] En skriven automatiseringskandidatlista finns och granskas varje kvartal.
- [ ] Varje automatiserat flöde har en ägare, en övervakare och ett mått på fel och omarbete.
- [ ] Manuell bearbetningstid stickprovas för de främsta förfrågningstyperna.
- [ ] Nivåfördelningen visas bredvid hanteringstid och lösning vid första kontakten.
- [ ] Den bemannade vägen är synlig och dess åtkomsttid kontrolleras.
- [ ] De främsta genomfallsämnena granskas månadsvis och dirigeras till ägare.
- [ ] Inget mätetal i det här ämnet redovisas eller sätts mål för per handläggare.

## AI-prompter

**Kontrollera hur vi uppskattar avvisning.**

```text
We run [type of service] for [number] active users. We report deflection as
[describe current calculation], using data from [tools]. Changes in the period:
[releases, campaigns, outages, staffing changes]. Review the method and explain
where it may overstate or understate the effect. Suggest a better comparison,
such as a holdout or contacts per 1,000 active users, using only the data I
describe. Do not invent benchmark values or targets. List your assumptions and
the data you would need to firm up the estimate.
```

**Analysera genomfallsämnen ur ett stickprov.**

```text
Below are [number] staffed contacts from [service] that followed a self-service
attempt on the same topic, with fields [list fields] and the user's description.
Group them by likely cause (content gap, confusing form, defect, missing
access, user preference) and report patterns, not individuals. Suggest which
cause groups to hand to knowledge owners, product teams, or problem management.
Do not guess beyond the text provided. List your assumptions and what you could
not judge.

[paste contacts with personal data removed]
```

**Rangordna automatiseringskandidater.**

```text
Here is a list of request and incident types for [team]: [type, monthly
volume, median manual minutes, variability, risk if wrong]. Propose a ranking
for automation candidates and explain the reasoning for each, including the
upkeep burden and the failure impact. Flag items that should stay manual.
Use only the numbers I provided and do not invent savings figures. List your
assumptions and the questions I should answer before committing.
```

**Utforma skyddsräckena för ett automatiserat flöde.**

```text
We are automating [flow name] for [service]. Current manual process: [steps].
Tooling: [automation platform]. Propose the metrics to track (coverage, failure
and rework, time to detect a failed run, upkeep effort), a way each could be
gamed, and a guardrail for each. Include a safe manual fallback and a
retirement criterion. Do not invent thresholds or benchmarks. List your
assumptions and anything you need to know about our environment.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det relaterade ämnet och skyddsräcket för ett självbetjänings- eller automatiseringsmätetal du planerar att införa.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ändringar i det här ämnet håller varje mätetal parat med en manipuleringsvektor och ett skyddsräcke.

## Viktigaste slutsatser

- Självbetjäningsframgång är ett användarresultat, så definiera det från användarens sida och verifiera det med genomfall och utgångsrespons.
- Avvisning är en uppskattning, så ange metoden och håll den utanför mål.
- Automatiseringstäckning betyder lite utan tillförlitlighet, underhåll och en granskad kandidatlista.
- Skifta vänster höjer svårighetsgraden hos det återstående arbetet, så läs hanteringstid med nivåfördelningen och kategorimixen.
- Mät flöden, tjänster och katalogobjekt, aldrig handläggare, och håll den bemannade vägen synlig.

## Referenser och vidare läsning

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016 (chapter on eliminating toil).
2. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Request Management*, 2020.
6. Wikipedia, [Self-service software](https://en.wikipedia.org/wiki/Self-service_software).
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
