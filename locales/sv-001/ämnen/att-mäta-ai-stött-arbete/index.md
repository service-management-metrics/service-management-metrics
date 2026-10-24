# Att mäta AI-stött arbete

**Bedöm AI-stött arbete efter vad som består genom granskning, produktion och användarens nästa kontakt, inte efter hur fort det dök upp, och fortsätt bevaka om de som gör det fortfarande lär sig.**

## Översikt och motiv

När ett team använder AI-verktyg varje dag ändras den centrala frågan från "ska vi?" till "vad får vi ut?". Det föregående ämnet angav grunderna: baslinjer, jämförelser och full kostnad (se ämne 10.1, AI i mätning av tjänstehantering). Det här ämnet går in på själva arbetet. Hur avgör man om AI-stödd kod, AI-stödda ärenden, dokument och beslut är lika bra som, bättre än eller sämre än arbetet de ersätter, och vad händer med människorna som gör det?

AI-stöd berör många slags arbete. I programvaruleverans föreslår eller genererar verktyg kod, test, incheckningsmeddelanden och granskningskommentarer. I tjänstedriften sammanfattar de incidenter, föreslår orsaker, skriver utkast till svar och skriver kunskapsartiklar. I analys producerar de rapporter och frågor. Det gemensamma draget är att det blir billigt att ta fram en rimlig första version. Kostnaderna flyttar till andra ställen: att läsa och bedöma utdatan, rätta det som är fel, underhålla det som genererats och lära sig tillräckligt för att känna skillnaden.

Flera effekter gör mätningen knepig.

- **Räkning av utdata vilseleder.** [Kodrader](https://en.wikipedia.org/wiki/Lines_of_code) var alltid ett dåligt mått på produktivitet, och genererad kod gör det värre. Mer kod är mer att läsa, testa och underhålla. Antal genererade rader, accepterade förslag eller utkast säger lite om värde.
- **Granskning blir flaskhalsen.** [Kodgranskning](https://en.wikipedia.org/wiki/Code_review) och granskning av annat genererat arbete tar tid, och ett flöde av större och tätare ändringar kan överbelasta granskare. Stora [pull requests](https://en.wikipedia.org/wiki/Pull_request) är svårare att granska väl, och en överbelastad granskare är mer benägen att godkänna det hen inte har förstått. Gransknings- och flödesmåtten från tidigare förblir väsentliga (se ämne 2.7, Mätetal för pull requests och kodgranskning).
- **Kvalitetsproblem kommer sent.** Genererad kod kan klara testen i dag och bära [duplicerad kod](https://en.wikipedia.org/wiki/Duplicate_code), oklar struktur eller dolda fel som visar sig som underhållskostnad, en form av [teknisk skuld](https://en.wikipedia.org/wiki/Technical_debt). Mått som tas vid skapandet missar det. Titta på vad som händer med arbetet efteråt.
- **Färdigheter kan förändras.** Att förlita sig på ett verktyg för uppgifter man tidigare gjorde själv är en form av [kognitiv avlastning](https://en.wikipedia.org/wiki/Cognitive_offloading), som kan frigöra uppmärksamhet för svårare problem eller leda till [urkvalificering](https://en.wikipedia.org/wiki/Deskilling) om den underliggande förståelsen bleknar. Båda är möjliga, och utfallet beror på hur verktygen används. Det spelar roll för de berörda människorna och för teamets förmåga att hantera de situationer verktyget inte klarar.

Beläggen om AI-stödets effekt på produktivitet utvecklas fortfarande, och de varierar med uppgiften, användarens erfarenhet, verktyget och sammanhanget. Vissa kontrollerade studier av kodningsuppgifter har funnit snabbare slutförande på väldefinierade uppgifter, och andra studier och rapporter har funnit mindre eller inga vinster, eller extra kostnader, för erfarna människor som arbetar med komplexa system de känner väl. Den här boken ger inget tal. Den ansvarsfulla hållningen för ett team är att mäta sitt eget arbete, med baslinjer och jämförelse, och att behandla varje publicerat tal som en studie i ett särskilt sammanhang.

Skyddsräcket från [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) är särskilt viktigt här, eftersom pressen att visa vinster är stark och de lätta talen är de vilseledande. Måtten nedan följer det som består, inte det som produceras (se ämne 1.2, Goodharts lag och mätetalens psykologi).

## Nyckelprinciper

- **Mät det som består.** Kvarstående resultat, omarbete och undkomna fel säger mer än utdata.
- **Bevaka granskningen.** Flödet av AI-stött arbete begränsas av hur väl människor kan läsa det.
- **Jämför lika med lika.** Stött och icke-stött arbete måste vara likartat i slag och svårighet.
- **Titta senare såväl som nu.** Kvalitetsproblem och underhållskostnader dyker upp veckor eller månader efter skapandet.
- **Håll förståelsen i loopen.** Personen som levererar arbetet måste kunna förklara det.
- **Skydda färdigheter och lärande.** Lägg märke till vad människor fortfarande kan utan verktyget.
- **Aggregera; övervaka inte individer.** Data om vem som använder AI och hur är till för att förbättra processen, inte för att rangordna människor.

## Mätetalsdefinitioner

| Mätetal | Definition | Formel | Enhet | Datakälla | ITIL-praktik | Agil motsvarighet | Rytm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kvarstående grad | Andel AI-stödda ändringar som förblir i huvudsak oförändrade efter en angiven period | AI-stödda ändringar där mindre än en angiven andel ändrats eller återställts efter 30 dagar / AI-stödda ändringar sammanfogade för 30 dagar sedan | procent | Versionshanteringshistorik kopplad till stödtaggar, på teamnivå | Release- och driftsättningshantering; ändringsmöjliggörande | Arbete som består; lågt omarbete | Månadsvis |
| Omarbete efter sammanfogning | Andel ändringar som behöver en uppföljande rättelse inom en kort period, för stödda och jämförelseändringar | ändringar med en länkad uppföljande rättelse inom 14 dagar / sammanfogade ändringar, per grupp | procent | Versionshantering, ärendehantering, ändringsregister | Ändringsmöjliggörande; problemhantering | Undkomna fel; omarbete | Månadsvis |
| Granskningsbelastning | Granskarens insats per ändring, för stödda och jämförelseändringar | median och 85:e percentil av granskningstid och granskningsrundor per ändring, per grupp | timmar; rundor | Tidsstämplar i granskningsverktyget, aggregerade per team | Release- och driftsättningshantering | Granskning som återkoppling och lärande | Månadsvis |
| Grad av undkomna fel | Fel som hittas i produktion per ändring, för stödda och jämförelseändringar | fel som hittats efter release tillskrivna en ändring / släppta ändringar, per grupp | fel per ändring | Felspårare länkad till ändringar | Incidenthantering; problemhantering | Kvaliteten på det som släpps | Kvartalsvis |
| Godkändgrad vid förklaringskontroll | Andel stickprovade AI-stödda ändringar vars upphovsperson kan förklara angreppssättet och dess avvägningar vid granskning | stickprovade ändringar där upphovspersonen förklarade till granskarens belåtenhet / stickprovade ändringar | procent | Anteckningar från stickprovsgranskning | Kunskapshantering; ändringsmöjliggörande | Delad förståelse av koden | Kvartalsvis |
| Kvalitet i stött support | Återöppningsgrad och användarnöjdhet för AI-stödda supportsvar jämfört med ostödda | återöppnade stödda ärenden / stödda ärenden och gynnsamma omdömen / omdömen, per grupp | procent | ITSM-verktyg, enkät | Servicedesk; incidenthantering | Kvaliteten på tjänsteutfall | Månadsvis |
| Självförtroende utan verktyg | Teamets omdöme om förtroende att göra nyckeluppgifter utan verktyget | medelvärde och spridning på en överenskommen skala, per team | skalpoäng | Anonym teampuls | Personal- och kompetenshantering; kunskapshantering | Teamets förmåga och lärande | Kvartalsvis |

Tagga AI-stöd pålitligt på teamnivå, via verktygsloggar eller en lättviktig konvention, och ange hur jämförelseändringar väljs: lika i storlek, område och risk. Kvarstående grad mäter väsentlig förändring, med ett tröskelvärde angivet i registret. Omarbete efter sammanfogning länkar en uppföljande rättelse till den ursprungliga ändringen med en angiven regel. Granskningsbelastning är granskarens insats, inte upphovspersonens, och inkluderar bara aktiv granskningstid där det går att mäta. Data på individnivå redovisas aldrig. Stickprov för förklaringskontrollen väljs slumpmässigt, och kontrollen är ett samtal som ska stödja lärande, inte ett prov av en person.

## Rekommendationer

### Följ arbetet efter att det skapats

**1. Följ vad som händer med stött arbete över tid.** För kod, följ ändringar i veckor efter sammanfogning: består de, rättas de eller återställs de? För support, följ ärenden efter svaret: återöppnas de eller följs de av upprepade kontakter? För dokument, kontrollera om de används, rättas eller ignoreras. Kvarstående resultat och omarbete är enkla signaler om kvalitet som är svåra att fuska med.

**2. Jämför med liknande ostött arbete.** Välj jämförelsearbete av liknande storlek, risk och område från samma period. Svårighet spelar roll: människor kan använda AI för lätta uppgifter, vilket skulle smickra verktyget, eller för svåra, vilket skulle straffa det. Ange hur uppgifter kommer att bli stödda och justera eller förbehåll dig därefter. En liten, ärlig jämförelse slår en stor, förvirrad (se ämne 6.5, Värdeförverkligande och affärsresultat).

**3. Ta med de nedströms måtten i standarduppsättningen.** Para varje hastighetsmått med andel misslyckade ändringar, undkomna fel och de stabilitetsmått som redan används (se ämne 2.8, DORA-mätetal). En hastighetsvinst med fallande stabilitet är en överföring av kostnad till drift och användare. Redovisa paret tillsammans.

### Håll granskningen meningsfull

**4. Bevaka granskningsbelastning och storlek.** Mät granskningstid, granskningsrundor och ändringsstorlek för stött och ostött arbete. Om stödda ändringar är större eller fler kan granskare vara överbelastade. Sätt normer för ändringsstorlek och begränsa mängden genererat material som får ingå i en granskning. Granskningskapacitet är en del av systemets kapacitet (se ämne 2.3, Pågående arbete och köteori).

**5. Be upphovspersoner förklara.** Gör det till en vana att upphovspersonen till en ändring kan förklara vad den gör, varför just detta angreppssätt och vilka avvägningarna är. Ett kort, stödjande samtal i granskningen räcker. Stickprova förklaringskontroller kvartalsvis för att se om förståelsen håller jämna steg med utdatan. Där upphovspersoner inte kan förklara, behandla det som en signal att sakta ned och lära, inte som ett misslyckande hos personen.

**6. Skydda mot automatiseringsbias.** Uppmuntra granskare att läsa stött arbete lika kritiskt som allt annat. Rotera granskare, så ibland kända fel i en teständring för att kontrollera upptäckt och håll igång stickprovet av utdata hos oberoende granskare. En mycket hög acceptansgrad med stigande omarbete är en varning (se ämne 10.1, AI i mätning av tjänstehantering).

### Se efter kvalitet och underhåll

**7. Övervaka kodens och systemets struktur.** Följ duplicering, komplexitet, testtäckning och förändringstakt i de områden där stödet är tungt. Använd de mått du redan har för [programvarutestning](https://en.wikipedia.org/wiki/Software_testing) och kodhälsa och titta på trender. Stigande duplicering eller fallande testeffektivitet kan signalera att genererad kod accepteras utan att integreras i designen. Täckning av [regressionstestning](https://en.wikipedia.org/wiki/Regression_testing) är ett skyddsnät, och dess styrka spelar större roll när volymen förändringar stiger.

**8. Behandla genererade test med omsorg.** AI kan skriva många test snabbt, och test kan klara sig utan att kontrollera något meningsfullt. Stickprova genererade test för värde och mät testeffektivitet med metoder såsom om testen misslyckas när beteendet avsiktligt bryts. Räkna inte skrivna test som ett kvalitetsmått.

**9. Bevaka kvaliteten på stödd support.** För servicedesk och drift, mät återöppningsgrad, upprepade kontakter, nöjdhet och riktighet i stickprovade svar för stödda mot ostödda svar. Ett snabbare svar som skickar tillbaka användaren är långsammare totalt. Läs användarkommentarer om stödda svar och titta på om användare vet att de har att göra med AI där det spelar roll (se ämne 6.1, Mätetal för kundnöjdhet).

### Skydda människor och färdigheter

**10. Lägg märke till vad människor fortfarande kan.** Fråga team hur trygga de är att göra nyckeluppgifter utan verktyget och följ trenden. Använd enstaka övning utan verktyg, parning och granskningar av den underliggande designen för att hålla färdigheter vid liv. Skydda särskilt de nyare teammedlemmarnas lärande, som kan använda verktyget innan de har byggt de mentala modeller som erfarna kollegor lutar sig mot för att bedöma det (se ämne 9.4, Mätetal för kompetens och lärande).

**11. Håll data om människor utanför utvärdering.** Aggregera till teamnivå. Redovisa inte vilka individer som använder AI mest och använd inte användning, acceptansgrad eller genererad volym i medarbetarsamtal. Gör reglerna kända. Förtroende behövs för ärliga rapporter om vad som fungerar och inte.

**12. Återbesök regelbundet.** Verktyg, modeller och praxis förändras på månader. Kör om jämförelsen när verktyget eller arbetssättet förändras. Dela fynd, inklusive att ett verktyg inte hjälpte här, och avveckla användningar som inte längre förtjänar sin plats.

## Manipuleringsvektorer och skyddsräcken

| Mätetal | Hur det manipuleras | Parat skyddsräcke eller parad praxis |
| --- | --- | --- |
| Kvarstående grad | Att undvika nödvändiga ändringar för att hålla talet uppe; att bara tagga lyckade ändringar som stödda | Tagga via verktygsloggar, inte efter upphovspersonens val; para med undkomna fel och omarbete |
| Omarbete efter sammanfogning | Att rätta i ett annat ärende eller en ny ändring som inte länkas; att skjuta rättelser bortom fönstret | Länkningsregel i registret; titta på ett längre fönster; produktionsfel |
| Granskningsbelastning | Förhastade granskningar som sänker uppmätt tid; godkännanden utan kommentarer | Stickprov av granskningsdjup; undkomna fel; granskarenkät |
| Grad av undkomna fel | Att inte tillskriva fel till ändringar; att omklassificera fel som förbättringar | Tillskrivningsregel; oberoende stickprov av felklassificering |
| Godkändgrad vid förklaringskontroll | Upphovspersoner som repeterar inför kontrollen; överseende granskare | Slumpmässiga, oanmälda stickprov; rotera granskare; fokusera på designskäl |
| Kvalitet i stött support | Att bara stödja lätta ärenden; att coacha användare att ge höga omdömen | Matcha ärenden efter typ och svårighet; svarsfrekvens och sammansättning; läs kommentarer |
| Självförtroende utan verktyg | Uppblåsta omdömen för att undvika granskning; låga omdömen för att argumentera för fler verktyg | Anonymitet; jämför med observerad praxis i övningar; läs kommentarer |

En sund avläsning är stött arbete som blir kvar lika ofta som ostött, omarbete och undkomna fel som matchar eller slår jämförelsen, granskning som förblir djup, upphovspersoner som kan förklara det de levererar, stödd support som inte kommer tillbaka och team som förblir trygga i sina egna färdigheter.

## Avvägningar: för- och nackdelar

| Tillvägagångssätt | Styrka | Svaghet |
| --- | --- | --- |
| Mät utdatavolym | Lätt | Belönar volym; säger inget om värde |
| Mät kvarstående resultat och omarbete | Speglar kvalitet över tid | Fördröjt; kräver länkning av register |
| Kontrollerad jämförelse | Trovärdig | Kräver insats; kan vara opraktisk |
| Observationell jämförelse | Billig | Förvirrad av uppgiftsurval |
| Obligatoriska förklaringskontroller | Bevarar förståelse | Kan kännas som prov; tillför insats |
| Lätta stickprovskontroller | Låg börda | Kan missa mönster |
| Kraftiga begränsningar av AI-användning | Kontroll av risk | Förlorad nytta; skuggbruk |
| Öppen användning med mätning | Lärande och nytta | Kräver förtroende och disciplin |

Svaret är att tillåta användning inom tydliga regler, mäta det som består, stickprova förståelse, skydda granskningskapacitet och färdigheter och hålla data om människor utanför utvärdering.

## Frågor att diskutera med teamet

**1. Hur mycket av det AI hjälpte oss att producera förra kvartalet är fortfarande på plats, oförändrat, och hur vet vi det?**
Titta på kvarstående resultat och omarbete för stödda ändringar mot en jämförbar uppsättning. Facilitatorn bör registrera hur svårt det var att svara. Enas om hur man taggar och länkar registren så att svaret är lätt nästa kvartal.

**2. Hänger granskningen med, och vad händer när den inte gör det?**
Titta på granskningstider, rundor och storlekar. Fråga granskare hur de känner inför stödda ändringar. Diskutera gränser för storlek och sätt att dela belastningen. Enas om en norm att pröva.

**3. Skulle var och en av oss kunna förklara den senaste ändringen vi levererade med AI-hjälp, och dess avvägningar?**
Pröva i par. Lägg märke till var förklaringen var lätt och var den var svår. Diskutera vad det säger om vår användning av verktyget och hur vi håller förståelsen uppe.

**4. Vad kan vi fortfarande göra bra utan verktyget, och vad håller vi på att tappa handlaget för?**
Lista nyckeluppgifter, skatta förtroendet ärligt och planera viss övning utan verktyg eller parning. Samtalet lyfter också fram vad människor värdesätter i sitt arbete och vill behålla.

**5. Var hjälpte AI oss mest och minst, och vad har dessa ställen gemensamt?**
Jämför exempel. Leta efter drag såsom väldefinierade uppgifter, goda test eller välbekanta domäner. Använd fynden för att styra var verktyget ska användas.

**6. Vad skulle vi mäta om vi inte litade på våra första intryck?**
Be gruppen nämna det belägg som skulle ändra deras uppfattning om verktyget åt endera hållet. Använd svaren för att definiera nästa jämförelse.

## Fyra perspektiv

### Produkt- och leveransteam

Leveransteam har den dagliga erfarenheten och kvalitetsresultaten. De bör tagga stött arbete, bevaka kvarstående resultat och omarbete, hålla granskningen meningsfull och upprätthålla sin egen förståelse. De bör säga ifrån när volymen genererade ändringar växer förbi deras förmåga att granska dem.

### Service- och driftteam

Driftteam använder AI för sammanfattningar, diagnos och svar, och de ärver de kvalitetsproblem som slipper igenom. De bör stickprova utdata, jämföra återöppnings- och upprepade kontaktgrader och hålla ett tydligt mänskligt ansvar för handlingar i produktion. De bör hjälpa till att definiera var AI inte får agera utan en person.

### Ledning och styrning

Ledare möter press att visa vinster och kan frestas av användnings- och utdatamått. De bör insistera på kvarstående resultat, omarbete och stabilitetsmått vid sidan av hastighet, finansiera granskningskapacitet, skydda kompetensutveckling och motstå att rangordna människor. Styrningen bör förvänta sig jämförelser och förbehåll i rapporter om AI-nytta.

### Kunder och användare

Användare får resultaten: kod som driver deras tjänster, svar på deras förfrågningar, dokument de förlitar sig på. De har nytta när kvaliteten håller och lider när den inte gör det. De bör kunna nå en person, och deras återkoppling på stödda interaktioner är nyckelbelägg för kvalitet.

## I praktiken: ett exempel från tjänstehantering

Ett europeiskt flygbolags digitala grupp har sex produktteam som bygger och driver boknings- och driftprogramvara. Teamen började använda en AI-kodassistent för ett år sedan, och gruppens instrumentpanel redovisar att 38 procent av de sammanfogade raderna är AI-genererade. Siffrorna nedan är illustrativa.

Chefen för teknisk förträfflighet är obekväm med den instrumentpanelen. Hon ber tre team tagga stödda ändringar via verktygets loggar, endast på teamnivå, och välja jämförelseändringar av liknande storlek och område. Under ett kvartal är mediantiden från första incheckning till sammanfogning kortare för stödda ändringar, 1,4 dagar mot 2,0. Kvarstående grad för stödda ändringar efter 30 dagar är 81 procent mot 90 procent för jämförelseändringar, och 12 procent av de stödda ändringarna behövde en uppföljande rättelse inom 14 dagar mot 7 procent. Granskningsbelastningen berättar samma historia: mediangranskningstiden per ändring är 35 procent högre för stödda ändringar, och 85:e percentilen av ändringsstorlek har vuxit. Undkomna fel per 100 ändringar är något högre för stödda ändringar, fast stickprovet är litet och skillnaden ryms inom normal variation. Ett stickprov om 40 stödda ändringar visar att upphovspersonen i 31 kunde förklara angreppssättet och dess avvägningar väl, i 6 delvis och i 3 inte alls, mest i kodområden nya för upphovspersonen. På servicedesken hade stödda svar en återöppningsgrad på 7 procent mot 6 för ostödda, med liknande nöjdhet. I en teampuls skattar nyare ingenjörer sitt förtroende att implementera kärnfunktioner utan verktyget till 2,6 av 5, mot 4,1 för ingenjörer med mer än tre år i gruppen.

Chefen för teknisk förträfflighet tar resultaten till teamen och rangordnar dem inte. Teamen kommer överens om fyra ändringar. Gränser för ändringsstorlek och ett granskarschema skyddar granskare. Upphovspersoner förklarar kort stödda ändringar vid granskning. Nyare ingenjörer paras med erfarna för kärnfunktioner, och en månatlig övning utan verktyg håller färdigheterna i bruk. Instrumentpanelen släpper andelen genererade rader och visar kvarstående resultat, omarbete, granskningsbelastning och undkomna fel, stött mot jämförelse. Tre månader senare krymper kvarstående gapet till 4 punkter, uppföljande rättelser faller till 8 procent och förklaringskontrollen förbättras. En vice vd ber om att andelen genererade rader ska vara ett mål för varje team. Chefen för teknisk förträfflighet förklarar fynden och föreslår att fortsätta följa resultat, och tillägger att vinsterna är verkliga i vissa uppgifter och inte i andra och att teamet avgör var verktyget ska användas. Beslutet registreras.

## Agilitet, AI, automatisering och analys

### Agilitet

En hållbar takt och motiverade människor inkluderar att skydda förståelsen, så granska AI-stött arbete tillsammans med teamet i regelbunden rytm och titta på vad som bestod. Varningen är att mäta individuell AI-användning förvandlar en teampraxis till övervakning.

### AI

Bedöm AI-stött arbete efter vad som består genom granskning och produktion och efter om människor fortfarande förstår det de levererar. Para kvarstående resultat och omarbete med en förklaringskontroll och ett omdöme om självförtroende utan verktyg och håll data på teamnivå. Varningen är att snabba utkast flyttar insats till granskare, så mät också granskningsbelastning.

### Automatisering

Tagga AI-stödda ändringar automatiskt där verktygen tillåter och mät taggningen på täckning, eftersom otaggat arbete bryter jämförelsen. Varningen är att automatiska taggar kan tas bort eller missas, så stickprova.

### Analys

Jämför AI-stött och annat arbete på samma mått, med antal och osäkerhet. Beslutet detta ger underlag för är var AI-hjälp är verklig och var den tillför omarbete. Varningen är att de två grupperna av arbete kan skilja sig i slag, så undvik orsakspåståenden från en grov jämförelse.

## Branschperspektiv

**Startup.** Små team kan ha stor nytta av stöd och också ackumulera dold skuld snabbt. Följ kvarstående resultat och omarbete från början, håll test meningsfulla och se till att de som ska underhålla systemet förstår det. Se upp för att leverera kod som ingen kan förklara.

**Småföretag.** Stöd kan sträcka ett pyttelitet team. Mät på ett litet stickprov: hur ofta stött arbete behöver rättas senare. Behåll säkerhetskopior, test och mänsklig granskning av allt som vänder sig till kunder och skydda ägarens förståelse av de system de är beroende av.

**Storföretag.** Skala förstärker både vinster och problem. Tillhandahåll gemensam vägledning om taggning, granskningsgränser och mått, jämför mellan team med försiktighet utan att rangordna och investera i gransknings- och testkapacitet. Inkludera säkerhets- och licensgranskning av genererad kod i pipelinen (se ämne 7.2, Mätetal för programvarutillgångar och licenser).

**Offentlig sektor.** Offentliga system har långa liv, strikt ansvarsskyldighet och stora följder av fel. Kräv spårbart mänskligt ansvar, noggrann testning och dokumentation av hur AI användes. Registrera stött arbete i ändringsregister och bedöm risker för rättvisa och säkerhet (se ämne 8.5, Reglerad och statlig rapportering).

## Affärscase: motiv, ROI och TCO

Kostnaderna är verktyg och användningsavgifter, insatsen att tagga och länka register, tiden för att granska och rätta, extra testning och utbildning. En jämförelsestudie tar tid, men den är billig i förhållande till ett felaktigt beslut att skala eller förbjuda.

Avkastningen är verklig där stöd minskar insats utan att minska kvalitet och går förlorad där det flyttar insats till granskning, omarbete och underhåll. Bygg caset ur dina egna mått: tid till en sammanfogad, kvarstående ändring, omarbete och undkomna fel mot jämförelse, granskningsbelastning och nöjdhet hos användare och personal. Undvik att använda publicerade produktivitetstal som din uppskattning. Minns de dolda kostnaderna: minskad förståelse, förlorade färdigheter och teknisk skuld. Var ärlig om osäkerheten (se ämne 7.7, Avkastning på investering och affärscase).

## Antimönster och fallgropar

- **Att räkna genererade rader eller accepterade förslag.** De belönar volym. Mät det som består.
- **Att jämföra stött arbete på lätta uppgifter med ostött arbete på svåra.** Resultatet smickrar eller straffar verktyget. Matcha uppgifter.
- **Att låta granskningskapaciteten halka efter.** Kvaliteten sjunker i det tysta. Begränsa ändringsstorlek och skydda granskare.
- **Att hoppa över de nedströms måtten.** Kostnaden visar sig senare. Följ omarbete, fel och stabilitet.
- **Att behandla genererade test som kvalitet.** De kan klara sig utan att kontrollera något. Testa testen.
- **Att ignorera färdigheter.** Förståelsen bleknar obemärkt. Följ självförtroende utan verktyg och öva.
- **Att övervaka individer.** Det föder rädsla och döljer problem. Håll data på teamnivå.
- **Att utropa seger på en kort, liten studie.** Kör om allteftersom verktyg och praxis förändras.

## Mognadsmodell

| Dimension | 1 Initiera | 2 Utveckla | 3 Standardisera | 4 Styra | 5 Orkestrera |
| --- | --- | --- | --- | --- | --- |
| Att mäta det som består | Räkning av utdata | Informella intryck av kvalitet | Stött arbete taggas; kvarstående resultat och omarbete följs mot jämförelse | Nedströms fel, stabilitet och granskningsbelastning hanteras tillsammans | Belägg över team styr var stöd används; resultat delas brett |
| Granskning och förståelse | Granskning som förut | Oro för överbelastning | Normer för ändringsstorlek; förklaringskontroller stickprovas | Granskningskapacitet planeras; automatiseringsbias motverkas | Granskning och förståelse inbyggda i hur alla team arbetar med AI |
| Människor och färdigheter | Beaktas inte | Anekdoter | Självförtroende utan verktyg pulsas; viss övning | Kompetensutveckling planeras; trender hanteras | Lärande och hantverk skyddas i hela organisationen; AI-användning samdesignas med personalen |

## Checklista

- [ ] AI-stött arbete taggas på teamnivå via verktygsloggar eller en lättviktig konvention.
- [ ] Jämförelsearbete av liknande storlek, område och risk är definierat.
- [ ] Kvarstående resultat och omarbete efter sammanfogning följs för stött arbete och jämförelsearbete.
- [ ] Undkomna fel och andel misslyckade ändringar redovisas vid sidan av varje hastighetsmått.
- [ ] Granskningstid, rundor och ändringsstorlek övervakas, med normer för storlek.
- [ ] Upphovspersoner kan förklara stödda ändringar, och ett stickprov kontrolleras varje kvartal.
- [ ] Genererade test stickprovas för värde.
- [ ] Stödd support jämförs för återöppningsgrad, upprepade kontakter och nöjdhet.
- [ ] Självförtroende utan verktyg pulsas, och övning utan verktyg planeras.
- [ ] Individuella användnings- och acceptansdata används inte i utvärdering.

## AI-prompter

**Planera en jämförelse av stödda och ostödda ändringar.**

```text
We want to compare AI-assisted and unassisted changes for [team and system]. Our
data includes: [list fields]. Propose how to tag assisted changes without
relying on authors' memory, how to choose comparison changes of similar size and
risk, which measures to compare (retention, rework, review load, defects), the
period, and how to caveat the findings. Do not state expected results. List your
assumptions and threats to validity.
```

**Utforma en förklaringskontroll.**

```text
Design a short, supportive explanation check for sampled AI-assisted changes in
[language and domain]. Include how to sample, the questions a reviewer asks,
what a good explanation covers, how to record results at team level, and how to
use the findings for learning without grading people. List your assumptions and
risks of the check.
```

**Granska de nedströms måtten.**

```text
Here are our measures for [period]: speed [values], retention [values], rework
[values], review load [values], escaped defects [values], for assisted and
comparison work. Describe what the pattern suggests and what it does not, which
differences are within normal variation, and what to check next. Do not claim
causation. List your assumptions and the data I should add.
```

**Planera övning utan verktyg.**

```text
Propose a light program to keep core skills alive for a team that uses AI tools
daily: monthly unaided exercises, pairing between newer and experienced members,
and design discussions. Suggest how to fit it into the working week without
adding pressure and how to track its effect with the unaided confidence pulse.
List your assumptions and trade-offs.
```

## AI-färdigheter

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): använd för att hitta det parade skyddsräcket för ett mått på AI-stött arbete.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): använd för att kontrollera att ett mått på AI-stött arbete mäter det som består och bär sin manipuleringsvektor och sitt skyddsräcke.

## Viktigaste slutsatser

- Mät det som består: kvarstående resultat, omarbete, undkomna fel och stabilitet, mot jämförbart ostött arbete.
- Skydda granskningskapacitet och håll granskningen djup, eftersom den begränsar hur fort stött arbete säkert kan flöda.
- Kontrollera att upphovspersoner kan förklara det de levererar och lägg märke till om färdigheter växer eller bleknar.
- Stickprova genererade test och utdata för verkligt värde.
- Läs publicerade produktivitetspåståenden som enskilda studier och mät ditt eget arbete.
- Håll individuella användningsdata utanför utvärdering.

## Referenser och vidare läsning

1. Peng, S., Kalliamvakou, E., Cihon, P., and Demirer, M., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot," arXiv preprint, 2023.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. DORA, Google Cloud, *Accelerate State of DevOps Report* (latest edition addressing AI), https://dora.dev/.
4. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Lines of code](https://en.wikipedia.org/wiki/Lines_of_code).
8. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
9. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
10. Wikipedia, [Duplicate code](https://en.wikipedia.org/wiki/Duplicate_code).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Cognitive offloading](https://en.wikipedia.org/wiki/Cognitive_offloading).
13. Wikipedia, [Deskilling](https://en.wikipedia.org/wiki/Deskilling).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Software testing](https://en.wikipedia.org/wiki/Software_testing).
16. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
