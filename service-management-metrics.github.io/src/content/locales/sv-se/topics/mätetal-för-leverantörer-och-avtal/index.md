# Mätetal för leverantörer och avtal

**Leverantörer är en del av din tjänst, så mät vad de levererar, hur mycket du är beroende av dem och om du skulle kunna lämna, och bygg relationen kring gemensamma resultat och regelbundna samtal, inte kring viten och överraskningar.**

## Översikt och motiv

Nästan ingen tjänst byggs och drivs av ett team ensamt. Molnleverantörer hostar den, leverantörer levererar programvaran, konsulter bemannar servicedesken, ett telekomföretag bär trafiken och en betalningspartner flyttar pengarna. När en av dem fallerar skiljer inte dina användare på ditt misslyckande och deras. [Leverantörshantering](https://en.wikipedia.org/wiki/Vendor_management) är disciplinen att välja, avtala med, bevaka och, när det behövs, lämna leverantörer. ITIL:s praktik leverantörshantering beskriver det som att säkerställa att leverantörer och deras prestation hanteras på lämpligt sätt för att stödja tjänsteleverans utan glapp.

[Utkontraktering](https://en.wikipedia.org/wiki/Outsourcing) flyttar arbete till en extern part och flyttar inte ansvarsskyldigheten: organisationen förblir ansvarig inför sina kunder och tillsynsmyndigheter. Avtal är därför ett medel för samordning och riskfördelning, inte en överföring av ansvar. När många leverantörer är inblandade samordnar [multisourcing](https://en.wikipedia.org/wiki/Multisourcing) och praktiken [tjänsteintegration och -hantering](https://en.wikipedia.org/wiki/Service_integration_and_management) (SIAM) dem så att användaren ser en tjänst. Måtten i det här ämnet beskriver hälsan hos det nätet.

Agila värderingar ger en användbar inriktning. Det agila manifestet anger en preferens för kundsamarbete framför avtalsförhandling. Det betyder inte att ignorera avtal, som fördelar verklig risk och verkliga pengar. Det betyder att bygga relationer där leverantör och kund arbetar mot samma resultat, delar information tidigt och justerar allteftersom de lär sig. Leverantörer som behandlas som partner berättar om problem tidigare. Leverantörer som fruktar viten döljer dem. Mätning bör stödja det första mönstret.

Fyra problem återkommer i leverantörsmätning.

- **Gröna rapporter och missnöjda användare.** En leverantör kan nå varje avtalad servicenivå och ändå leverera en dålig upplevelse, ett mönster som det tidigare ämnet om servicenivåavtal kallar vattenmeloneffekten (se ämne 5.1, Mätetal för SLA, OLA och XLA). Avtalet mäter det det säger, och användare upplever något bredare.
- **Koncentration och inlåsning.** Att vara starkt beroende av en leverantör är effektivt tills den fallerar eller höjer sina priser. [Leverantörsinlåsning](https://en.wikipedia.org/wiki/Vendor_lock-in) gör förändring kostsam, och kostnaden växer tyst med varje integration.
- **Dolda beroenden.** Dina leverantörer har leverantörer. En [attack mot försörjningskedjan](https://en.wikipedia.org/wiki/Supply_chain_attack) riktas mot en betrodd leverantör för att nå dess kunder, och ett fel hos en underleverantör kan nå dig utan någon kontakt från din direkta leverantör.
- **Utträde som en eftertanke.** Många avtal skrivs under utan en plan för att avsluta dem. En [utträdesstrategi](https://en.wikipedia.org/wiki/Exit_strategy) som aldrig testats kanske inte fungerar när den behövs.

En annan fråga är avtalsformen. [Prestationsbaserad avtalning](https://en.wikipedia.org/wiki/Performance-based_contracting) knyter betalning till resultat, och den kan anpassa intressen när resultat är tydliga och mätbara. Den kan också inbjuda till manipulation när måtten är snäva. Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) gäller åt båda håll: leverantörer optimerar den mätta servicenivån, och köpare optimerar sina redovisade besparingar (se ämne 1.2, Goodharts lag och mätetalens psykologi).

Det här ämnet bygger på registren från föregående del, särskilt programvaru- och ekonomidata (se ämne 7.2, Mätetal för programvarutillgångar och licenser, och ämne 7.5, Tjänstekostnad och enhetsekonomi), och det förbereder för de rapporteringsskyldigheter som ofta faller på offentliga organ (se ämne 8.5, Reglerad och statlig rapportering).

## Nyckelprinciper

- **Du förblir ansvarig.** Avtal fördelar risk och pengar, och de överför inte ansvar från användare och tillsynsmyndigheter.
- **Mät resultat och upplevelse såväl som avtalsvillkor.** En grön avtalsrapport kan dölja en dålig tjänst.
- **Känn dina beroenden.** Kartlägg kritiska leverantörer, deras viktiga underleverantörer och tjänsterna som förlitar sig på dem.
- **Planera utträdet innan du skriver under.** En otestad utträdesplan är ett hopp.
- **Samarbeta regelbundet.** Täta, uppriktiga gemensamma granskningar slår årliga krismöten.
- **Dela data öppet.** Båda sidor har nytta av samma tal.
- **Skilj leverantörer åt efter kritikalitet.** Lägg hanteringsinsatsen där ett fel skulle göra mest ont.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Måluppfyllelse för leverantörens servicenivå | Andel avtalade servicenivåmått som en leverantör nått, parad med ett upplevelsemått för samma tjänst | mått uppnådda under perioden / avtalade mått; redovisas bredvid användarupplevelsepoängen för tjänsten | procent | Leverantörsrapporter, din egen övervakning, enkätdata | Leverantörshantering; servicenivåhantering | Granskning av en partners bidrag till målen | Månadsvis |
| Leverantörsattribuerad incidenttid | Timmar av tjänstepåverkan tillskrivna en leverantörs komponent eller handling | summan av påverkanstimmar för incidenter där en leverantörs fel var en bekräftad orsak | timmar | Incidentposter med orsaksanalys, leverantörens incidentrapporter | Incidenthantering; leverantörshantering | Tid som förloras på externa hinder | Månadsvis |
| Täckning av avtalsregister | Andel leverantörer med ett aktuellt avtal, en namngiven intern ägare och en schemalagd granskning | leverantörer med alla tre / leverantörer inom omfånget | procent | Avtalsregister, upphandlingsregister | Leverantörshantering; ekonomisk styrning | Tydligt ägarskap av externa beroenden | Kvartalsvis |
| Aktualitet i due diligence | Andel kritiska leverantörer vars riskbedömning ligger inom sin granskningscykel | kritiska leverantörer bedömda inom cykeln / kritiska leverantörer | procent | Leverantörsriskbedömningar | Leverantörshantering; riskhantering; informationssäkerhetshantering | Regelbunden granskning av risker | Kvartalsvis |
| Utträdesberedskap | Andel kritiska leverantörer med en dokumenterad utträdesplan som har testats inom den överenskomna perioden | kritiska leverantörer med en testad utträdesplan / kritiska leverantörer | procent | Utträdesplaner och testposter | Leverantörshantering; hantering av tjänstekontinuitet | Övad återställning av ett beroende | Årligen |
| Koncentration | Andel kritiska tjänster som beror på en enda leverantör utan testat alternativ | kritiska tjänster med ett beroende av en enda leverantör och inget testat alternativ / kritiska tjänster | procent | Beroendekarta, leverantörsregister | Leverantörshantering; riskhantering | Att undvika en enskild felpunkt | Kvartalsvis |
| Stängningsgrad för gemensamma åtgärder | Andel åtgärder överenskomna i gemensamma granskningar med leverantörer som stängdes senast sitt förfallodatum | gemensamma åtgärder stängda senast datum / gemensamma åtgärder som förföll | procent | Granskningsprotokoll och åtgärdsspårare | Leverantörshantering; ständig förbättring | Levererade åtgärder från retrospektiv | Kvartalsvis |

Definiera kritikalitet i registret, med kriterierna, och tillämpa den konsekvent. Ett servicenivåmått är "uppnått" så som det definieras i avtalet, och upplevelsemåttet är det du väljer för samma tjänst. Leverantörsattribuerad incidenttid räknar bara bekräftade orsaker, och attribueringsmetoden överenskoms med leverantören där det är möjligt. Utträdesberedskap räknar en plan som testad först när en genomgång eller övning har registrerats under perioden.

## Rekommendationer

### Känn dina leverantörer och vad som beror på dem

**1. Håll ett leverantörsregister med ägare och kritikalitet.** Lista varje leverantör med ett avtal, vad de tillhandahåller, den interna ägaren, avtalsdatumen och kritikaliteten. Ta med gratis eller informella tjänster som dina team förlitar sig på. Kritikalitet är ett omdöme om skadan om leverantören fallerar, och den avgör hur mycket hanteringsuppmärksamhet relationen får.

**2. Kartlägg beroendekedjan för kritiska tjänster.** För varje kritisk tjänst, lista leverantörerna den beror på och, där du kan, deras viktiga underleverantörer och delade plattformar. Använd konfigurationsregistren för interna länkar och fråga leverantörer om deras kritiska beroenden (se ämne 7.4, Mätetal för konfigurations- och CMDB-kvalitet). Kartan visar koncentrationsrisk och talar om var ett avbrott någon annanstans skulle nå dig.

**3. Bedöm risk proportionerligt.** Använd en kort, standardiserad bedömning för lågriskiga leverantörer och en djupare för kritiska, som täcker säkerhet, resiliens, finansiell stabilitet och regelefterlevnad. Bedöm på nytt enligt en cykel och när något ändras. Dela resultaten med leverantören och kom överens om åtgärder. Standarder såsom ISO/IEC 27036 ger vägledning om informationssäkerhet i leverantörsrelationer.

### Skriv avtal för resultat och samarbete

**4. Definiera servicenivåer som speglar vad användare upplever.** Ta med avtalade mått som hänger ihop med användarresultat, till exempel hastigheten på den användarvända handlingen, såväl som komponenttillgänglighet. Be om datan för att kontrollera dem själv. Ett [servicenivåavtal](https://en.wikipedia.org/wiki/Service-level_agreement) med mått som ingen kan verifiera, eller som inte stämmer med vad användare känner, ger vattenmeloneffekten.

**5. Föredra gemensamma mål framför enbart viten.** Krediter för missade mål är vanliga och har sin plats, men ett avtal byggt huvudsakligen på viten gör relationen fientlig och datan mindre ärlig. Där det är möjligt, ta med gemensamma mål, regelbundna gemensamma granskningar och vinstdelning för förbättringar. Granska incitamentet för de bieffekter det kan orsaka.

**6. Planera utträdet i avtalet.** Ta med dataexport i användbara format, stöd under övergång, rimlig uppsägningstid och tydlighet om immateriella rättigheter och ägarskap av konfigurationer. Fråga vad det skulle kosta att lämna och skriv ned det. Ett avtal utan utträdesvillkor lämnar dig att förhandla under tryck.

### Hantera relationen

**7. Håll regelbundna gemensamma granskningar.** Håll möten i en rytm som passar kritikaliteten, med en kort standarddagordning: resultat, incidenter, risker, kommande ändringar och åtgärder. Dela dina egna mått med leverantören och be om deras. Följ åtgärder och stängning. Behandla mötet som en arbetssession mellan partner och bjud in människorna som gör arbetet.

**8. Dela incidentinformation snabbt och öppet.** Kom överens om hur och hur fort varje sida ska underrätta den andra och granska betydande incidenter gemensamt på ett skuldfritt sätt (se ämne 3.4, Mätetal för större incidenter). Mät leverantörsattribuerad incidenttid för att se var den största påverkan finns och använd den i samtalet, inte som en käpp.

**9. Kombinera avtalsdata med användarupplevelse.** För varje kritisk leverantörstjänst, lägg avtalade mått bredvid nöjdhets- eller ansträngningsmått från användare (se ämne 6.2, Överenskommelser om upplevelsenivå). Oenighet mellan de två är utgångspunkten för en diskussion.

**10. Samordna leverantörer till en tjänst.** Där flera leverantörer bidrar till en tjänst, kom överens om vem som äger helhetsresultatet, hur överlämningar fungerar och vem som kommunicerar med användare. SIAM-praxis formaliserar detta. Mät fördröjning vid överlämning och upprepade eskaleringar mellan leverantörer (se ämne 9.3, Mätetal för samarbete och överlämningar).

### Minska koncentration och förbered dig på att lämna

**11. Mät koncentration och besluta medvetet.** Redovisa andelen kritiska tjänster som beror på en enda leverantör utan testat alternativ. Koncentration är ibland rätt val, eftersom den ger enkelhet och förhandlingsstyrka. Gör det till ett beslut med en ägare, en kostnad och ett granskningsdatum, och inte en olycka.

**12. Testa utträdet.** För kritiska leverantörer, gå igenom utträdesplanen minst en gång under en definierad period: kan du exportera datan, finns alternativet, hur lång tid skulle det ta, vad skulle gå sönder? En tabletop-övning avslöjar glapp billigt. Registrera resultat och rätta glappen och uppdatera planen när arkitekturen ändras.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Måluppfyllelse för leverantörens servicenivå | Leverantören utesluter händelser från mätning; klockpauser; snäva definitioner | Egen övervakning; upplevelsemått; revision av undantag |
| Leverantörsattribuerad incidenttid | Att bestrida attribuering; att klassificera leverantörsfel som kundsidiga | Gemensam orsaksgranskning; neutral granskare för tvister; följ andelen bestridda |
| Täckning av avtalsregister | Att namnge ägare som inte vet om det; att lista avtal utan datum | Ägarbekräftelse; kontrollera att granskningsmöten hålls |
| Aktualitet i due diligence | Bedömningar enbart genom frågeformulär; leverantörer som själva intygar | Beläggskrav för kritiska leverantörer; stickprovsverifiering |
| Utträdesberedskap | Att skriva en plan och kalla den testad; övningar utan verkliga steg | Registrera vad som övades; oberoende granskning av övningen |
| Koncentration | Att dela en leverantör i flera juridiska enheter på papperet | Beroendekarta till den slutliga leverantören; granska delade plattformar |
| Stängningsgrad för gemensamma åtgärder | Att sätta lätta åtgärder; att stänga utan effekt | Granska åtgärdernas kvalitet; kontrollera att den avsedda frågan förbättrades |

En sund avläsning är ett leverantörsregister med aktiva ägare, servicenivåer som stämmer med användarupplevelsen, incidenter som diskuteras öppet, koncentration som valts medvetet och utträdesplaner som har övats.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| En enda leverantör | Enkelhet, förhandlingsstyrka, integration | Koncentrationsrisk, inlåsning |
| Flera leverantörer | Resiliens, val | Integrationskostnad, samordningsbörda |
| Avtal med tunga viten | Tydliga rättsmedel | Fientligt; döljer problem |
| Partnerskap med gemensamma mål | Ärliga data, snabbare lärande | Kräver förtroende och mognad; mindre tydliga rättsmedel |
| Resultatbaserad betalning | Anpassar incitament | Svårt att definiera och mäta resultat; manipulation |
| Insatsbaserad betalning | Enkel, förutsägbar | Belönar insats, inte resultat |
| Täta gemensamma granskningar | Tidig varning | Tidskostnad |
| Bara årliga granskningar | Låg kostnad | Långsamma att fånga problem |

Svaret är att spara avtalets rättsmedel för de allvarliga fallen, bygga vardagliga relationer kring gemensamma resultat och öppen data och välja koncentration med avsikt. Anpassa hanteringens intensitet till leverantörens kritikalitet.

## Frågor att diskutera med teamet

**1. Vilket leverantörsfel skulle skada våra användare mest, och vad är vår plan?**
Namnge de tre främsta beroendena. För var och en, fråga vad som skulle hända vid ett långvarigt avbrott och vad planen är. Facilitatorn bör leta efter beroenden utan plan, utan ägare eller utan testat alternativ. Enas om ett att arbeta med först.

**2. Var är en grön avtalsrapport oense med det användare säger?**
Ta en leverantörstjänst och jämför avtalsmått med användaråterkoppling. Fråga vilken som är mer pålitlig och varför. Samtalet hittar ofta en servicenivå som mäter fel sak. Enas om att ta upp det vid nästa gemensamma granskning.

**3. Vem i teamet äger varje kritisk leverantörsrelation, och hur ofta möts de?**
Kontrollera registret. Om en ägare inte har träffat leverantören på månader, fråga varför. Enas om en rytm och en standarddagordning för de mest kritiska.

**4. Vad skulle krävas för att lämna vår största leverantör?**
Uppskatta tiden, kostnaden och risken för utträde. Fråga vilka data, integrationer och kompetenser som binder dig. Besluta om beroendet är ett medvetet val och vad som skulle ändra det.

**5. Hur får vi veta om en leverantörs incident, och hur fort?**
Granska de två senaste leverantörsincidenterna och tiden från deras början till din kännedom. Kontrollera underrättelsevillkoren. Enas om förbättringar, till exempel delade statusflöden eller en namngiven kontakt.

**6. Vad delar vi med våra leverantörer, och vad delar de med oss?**
Lista datan varje sida tillhandahåller. Diskutera vilken extra delning som skulle hjälpa, till exempel efterfrågeprognoser eller förhandsbesked om ändringar. Beakta sekretess och enas om ett utbyte att börja med.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam är beroende av leverantörer för plattformar, komponenter och tjänster, och de känner leverantörsändringar direkt. De bör hålla beroenden synliga i design, ge leverantörer tidigt besked om efterfrågeändringar och delta i gemensamma granskningar. De kan bygga in resiliens i sina tjänster, till exempel med reservvägar, så att ett leverantörsfel inte stoppar allt.

### Service- och driftteam

Driftteam hanterar den dagliga relationen: att lyfta incidenter, följa prestation och samordna överlämningar. De håller beläggen om leverantörsattribuerad påverkan och upplevelsen av att arbeta med varje leverantör. De bör registrera attribuering noggrant, hålla underrättelsekanaler fungerande och delta i utträdesövningar.

### Ledning och styrning

Ledare skriver under avtal och accepterar risken. De bör be om rapporter om kritikalitet, koncentration och utträdesberedskap, sätta förväntningar på partnerskap och undvika att välja leverantörer enbart på pris. Styrningen bör kräva due diligence proportionell mot kritikalitet och belägg för att utträdesplaner testats.

### Kunder och användare

Användare upplever det samlade resultatet av leverantörsnätet. De behöver tydlig kommunikation när ett leverantörsproblem påverkar dem och konsekvent support oavsett vilken part som har fel. Deras återkoppling är kontrollen på om leverantörsprestationen, så som den redovisas, stämmer med verkligheten.

## I praktiken: ett exempel från tjänstehantering

En regional sjukhusgrupps it-avdelning stöder kliniska system med ungefär 60 leverantörer, inklusive en hostingleverantör, en leverantör av elektroniska journaler, en nätverksoperatör och en hanterad servicedesk. Siffrorna nedan är illustrativa.

Efter ett långt avbrott i journalsystemet frågar styrelsen hur många sådana beroenden som finns. Chefen för leverantörshantering bygger bilden. Leverantörsregistret täcker 47 av 60 kända leverantörer med ett aktuellt avtal, en ägare och ett granskningsdatum, en täckning på 78 procent. Due diligence är aktuell för 6 av 14 kritiska leverantörer. Av 22 kritiska tjänster beror 9 på en enda leverantör utan testat alternativ, en koncentration på 41 procent, och två av dessa leverantörer delar samma hostingplattform. Den hanterade servicedesken rapporterar 98 procents måluppfyllelse för servicenivån, medan klinisk personals nöjdhet med desken faller, och månadsrapporten visar att incidenter som väntar på leverantörens andra linje utesluts ur den mätta svarstiden. Under det senaste kvartalet uppgick leverantörsattribuerad incidenttid till totalt 53 timmar, tre fjärdedelar av den från två leverantörer. Utträdesplanen för journalleverantören finns på papperet och övades aldrig.

Chefen för leverantörshantering kommer överens om ändringar med de kliniska systemägarna och leverantörerna. Kritiska leverantörer får en kvartalsvis gemensam granskning med en delad dagordning och data från båda sidor. Servicedeskavtalet ändras så att tid till lösning mäts från användarens synvinkel, och leverantören går med på att dela sin ködata. En kort upplevelseenkät läggs till bredvid avtalsmåtten. Due diligence för kritiska leverantörer flyttas till en årlig cykel med beläggsbegäranden. Teamet kör en tabletop-utträdesövning för journalleverantören, som finner att dataexportformatet inte inkluderar revisionsspåret och att alternativet skulle ta månader att förbereda. Fyndet går in i nästa avtalsförhandling. Gruppen avgör också vilka av de nio beroendena av en enda leverantör som ska accepteras medvetet och vilka som ska minskas.

Ett år senare är registertäckningen 96 procent, due diligence är aktuell för 13 av 14 kritiska leverantörer och koncentrationen är 27 procent där varje kvarvarande fall är registrerat som ett accepterat beslut. Leverantörsattribuerad incidenttid faller till 22 timmar per kvartal. Servicedeskens avtalsmått och den kliniska nöjdhetspoängen rör sig nu tillsammans. Ekonomichefen ber om en klausul som inför ekonomiska viten för varje missad servicenivå över alla leverantörer. Chefen för leverantörshantering föreslår viten bara för de kritiska säkerhetsrelaterade måtten och gemensamma mål för resten, med förklaringen att generella viten leder till att leverantörer döljer händelser och bråkar om mätning. Beslutet registreras, och avtalsmallen uppdateras.

## Agilitet, AI, automatisering och analys

### Agilitet

Bygg leverantörsrelationer kring gemensamma resultat och regelbundna samtal. Varningen är att vitesdrivna mått leder till tvister om definitioner.

### AI

Leverantörer kan bädda in AI i sina tjänster, så fråga vilka AI-funktioner som används, med vilka data och vem som har tillsyn över dem, och mät täckningen av leverantörers AI-redovisning. Varningen är att leverantörers uttalanden om AI bör kontrolleras mot avtalsvillkor.

### Automatisering

Samla in leverantörsprestationsdata automatiskt där det är möjligt och automatisera påminnelser om avtalsdatum. Mät automatiseringen på missade förnyelser. Varningen är att automatiska flöden från leverantörer använder deras definitioner, så stäm av dem.

### Analys

Redovisa leverantörens måluppfyllelse med attribueringsregler för incidenter. Beslutet detta ger underlag för är om man ska förnya, omförhandla eller lämna. Varningen är att koncentration och utträdesberedskap är omdömen, så dokumentera resonemanget.

## Branschperspektiv

**Startup.** Leverantörer är mest moln- och programvara som tjänst-verktyg. Håll en lista med ägare och förnyelsedatum, känn till vilka data varje håller och behåll en export av kritiska data. Välj leverantörer med tydliga exportvägar, eftersom tidig inlåsning är billig att skapa och kostsam att ångra.

**Småföretag.** Några få leverantörer bär verksamheten, och ägaren hanterar dem ofta direkt. Håll kontakter och avtalsvillkor på ett ställe, be om status- och incidentuppdateringar och testa återställning från säkerhetskopior som hålls utanför leverantören. Minska beroendet av en enda person hos leverantören.

**Storföretag.** Många leverantörer och lager kräver en leverantörshanteringsfunktion, kritikalitetsnivåer och standardavtalsvillkor för säkerhet, resiliens och utträde. Använd samordning i SIAM-stil där leverantörer måste arbeta tillsammans. Håll en central beroendekarta och dela den med risk- och kontinuitetsteam.

**Offentlig sektor.** Upphandlingslag, konkurrensregler och krav på öppenhet formar hur leverantörer väljs och hanteras. Avtal kan vara långa, med offentliga rapporteringsskyldigheter och krav på suveränitet, tillgänglighet och utträde. Dokumentera beslut, redovisa leverantörsprestation som krävs och planera för ny upphandling (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna är leverantörsägarnas tid och en liten samordnande funktion, ett register och beroendedata, bedömningsinsats och gemensamma granskningar. Utträdesövningar kostar några timmar till dagar per kritisk leverantör. Verktyg kan vara så enkla som ett delat register.

Avkastningen är färre och kortare leverantörsorsakade incidenter, bättre kommersiella villkor genom välgrundad förhandling, undvikna inlåsningskostnader och ett snabbare, lugnare svar när en leverantör fallerar. Bygg caset ur din egen data: leverantörsattribuerade incidenttimmar och deras kostnad, kostnaden och tiden för tidigare leverantörsövergångar och skillnaden mellan avtalade servicenivåer och användarrapporterad upplevelse. Undvik att citera misslyckandegrader för utkontraktering i branschen om du inte kan spåra källan och metoden. Ta med kostnaden för att hålla ett andra alternativ redo och jämför den med den exponering den minskar (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att skriva under och glömma.** Avtal driver från verkligheten. Håll regelbundna granskningar med ägare och data.
- **Att enbart lita på leverantörens rapport.** Den mäter det leverantören väljer. Övervaka oberoende och jämför med användarupplevelse.
- **Relationer med enbart viten.** De minskar ärligheten. Bygg gemensamma mål vid sidan av rättsmedel.
- **Ingen utträdesplan.** Att lämna blir en kris. Skriv och testa planen innan den behövs.
- **Dold koncentration.** Flera leverantörer kan dela en plattform. Kartlägg till den slutliga leverantören.
- **Skuldbeläggning i gemensamma granskningar.** Leverantörer döljer incidenter. Granska incidenter skuldfritt.
- **Enhetlig hantering av alla leverantörer.** Det slösar insats på små och försummar kritiska. Dela in efter kritikalitet.
- **Att ignorera underleverantörer.** Din risk inkluderar deras. Fråga om kritiska beroenden.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Att känna leverantörer | Avtal utspridda | Register för huvudleverantörer | Register med ägare, kritikalitet och granskningsdatum | Beroendekarta till underleverantörer; täckning och aktualitet följs | Delad beroendebild med leverantörer och kunder |
| Prestation och relation | Reaktiv; tvister | Månadsrapporter från leverantörer | Avtals- och upplevelsemått jämförs; regelbundna gemensamma granskningar | Åtgärder följs; incidenter granskas gemensamt; attribuering överenskommen | Leverantörer integrerade som partner med gemensamma mål och öppen data |
| Resiliens och utträde | Ingen | Utträdesvillkor i vissa avtal | Utträdesplaner för kritiska leverantörer | Utträdesplaner övade; koncentration avgjord medvetet | Alternativ hålls varma; övningar gemensamma med leverantörer |

## Checklista

- [ ] Ett leverantörsregister listar varje leverantör med en ägare, kritikalitet och avtalsdatum.
- [ ] Kritiska tjänster har en beroendekarta som når viktiga underleverantörer.
- [ ] Avtalade servicenivåer paras med ett användarupplevelsemått.
- [ ] Gemensamma granskningar med kritiska leverantörer hålls i en rytm med en standarddagordning.
- [ ] Due diligence för kritiska leverantörer är aktuell och beläggsbaserad.
- [ ] Villkor och kanaler för incidentunderrättelse är överenskomna och testade.
- [ ] Leverantörsattribuerad incidenttid registreras med överenskommen attribuering.
- [ ] Koncentration mäts och varje beroende av en enda leverantör är ett registrerat beslut.
- [ ] Utträdesplaner finns för kritiska leverantörer och övades under perioden.
- [ ] Avtalsvillkor inkluderar dataexport, övergångsstöd och ägarskap av konfigurationer.

## AI-prompter

**Bygg en bedömning av leverantörskritikalitet.**

```text
We have these suppliers: [list with what each provides]. Our critical services
are: [list]. Propose criteria for rating supplier criticality (for example harm
if unavailable, data held, ease of replacement), score each supplier against
them with reasons, and suggest management intensity by tier. Do not invent
facts about the suppliers. List your assumptions and what I must confirm with
service owners.
```

**Jämför avtalsmått med användarupplevelse.**

```text
For the supplier service [name], the contract measures and results for the last
[period] are: [paste]. User experience data for the same service is: [paste
survey scores or comment themes]. Describe where they agree and disagree, give
plausible explanations for each disagreement, and suggest questions for the next
joint review. Do not assume intent by the supplier. List your assumptions.
```

**Utforma en utträdesövning.**

```text
Design a half-day tabletop exercise on leaving [supplier] for [service]. Include
the scenario, participants, steps to walk through (data export, alternative,
cutover, communication), what to record (time, gaps, decisions), and how to
turn findings into actions and contract changes. Do not assume specific
products. List your assumptions and risks in the exercise.
```

**Skriv utkast till en dagordning för gemensam granskning.**

```text
Draft an agenda and a one-page data pack for a quarterly joint review with
[supplier] about [service]. Include results against contracted measures and
user experience, incidents and learning, risks, upcoming changes on both sides,
and action review. Keep the tone collaborative. Use these inputs: [paste].
List your assumptions and any item needing legal review.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett leverantörs- eller avtalsmått.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att en post för leverantörsmått bär sin manipuleringsvektor, sitt skyddsräcke och sin attribueringsregel.

## Viktigaste slutsatser

- Du förblir ansvarig för tjänster du lägger ut, så hantera leverantörer som en del av din egen tjänst.
- Para avtalsmått med användarupplevelse och övervaka oberoende av leverantörens rapport.
- Kartlägg beroenden till underleverantörer och behandla koncentration som ett medvetet beslut.
- Bygg relationer kring gemensamma resultat och regelbundna gemensamma granskningar, med rättsmedel sparade för allvarliga fall.
- Planera utträdet innan du skriver under och testa det för kritiska leverantörer.
- Granska incidenter med leverantörer på ett skuldfritt sätt och dela data öppet.

## Referenser och vidare läsning

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Supplier Management*, TSO, 2020.
2. ISO/IEC 27036, *Information technology: Security techniques: Information security for supplier relationships*, International Organization for Standardization.
3. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
6. Wikipedia, [Vendor management](https://en.wikipedia.org/wiki/Vendor_management).
7. Wikipedia, [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing).
8. Wikipedia, [Multisourcing](https://en.wikipedia.org/wiki/Multisourcing).
9. Wikipedia, [Service integration and management](https://en.wikipedia.org/wiki/Service_integration_and_management).
10. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
11. Wikipedia, [Supply chain attack](https://en.wikipedia.org/wiki/Supply_chain_attack).
12. Wikipedia, [Exit strategy](https://en.wikipedia.org/wiki/Exit_strategy).
13. Wikipedia, [Performance-based contracting](https://en.wikipedia.org/wiki/Performance-based_contracting).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
