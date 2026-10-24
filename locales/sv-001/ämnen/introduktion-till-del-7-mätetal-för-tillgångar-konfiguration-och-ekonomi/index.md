# Introduktion till del 7: Mätetal för tillgångar, konfiguration och ekonomi

**Att veta vad du har, hur det hänger ihop och vad det kostar är grunden som varje annat tjänstebeslut vilar på, och den hålls bäst aktuell som en biprodukt av arbetet, inte som en separat plikt.**

Team som levererar och driver tjänster fattar hundratals beslut i veckan som beror på fakta om saker: vilka servrar berör den här ändringen, vilka licenser går ut nästa månad, vem äger det här molnkontot, vad kostar den här tjänsten per kund. När dessa fakta är fel eller saknas är besluten gissningar. Tillgångs-, konfigurations- och ekonomiregister finns för att förvandla gissningar till välgrundade val, och måtten i den här delen frågar hur bra dessa register är och hur väl de används.

Agil praxis och ITIL närmar sig det här området från olika håll, och de är starkare tillsammans. ITIL bidrar med disciplinen av register, ägare, livscykler och tjänstekostnadsberäkning. Agilitet och DevOps bidrar med vanan att leverera ändring kontinuerligt, med infrastruktur beskriven som kod och pipelines som kan registrera det de skapar. De bästa resultaten kommer när leveranspipelines matar registren automatiskt, och när upphandling, ekonomi, säkerhet, drift och teknik samarbetar kontinuerligt kring en gemensam bild. Team som äger sina tjänster, och som är betrodda och får den information de behöver, håller registren sanna eftersom de känner kostnaden när registren är fel.

Dessa register är också lätta att blåsa upp. Ett register kan se perfekt ut eftersom det bara listar det som redan var känt. Ett kostnadstal kan se lågt ut eftersom delade kostnader fördelats någon annanstans. Ett affärscase kan se starkt ut eftersom nyttorna var generösa. Varje mätetal i den här delen kommer därför med sättet det manipuleras på och ett skyddsräcke som kontrollerar det mot oberoende belägg, aldrig mot sig självt (se ämne 1.2, Goodharts lag och mätetalens psykologi). Inget av dessa mått rangordnar människor eller team. De beskriver bestånd, tjänster och beslut.

De fyra perspektiven tillämpas så här. Kontinuerlig leverans och infrastruktur som kod gör register till en biprodukt av arbetet. AI-tjänster, modeller och användningsbaserade licenser är tillgångar och kostnader som behöver register, ägare och enhetskostnader parade med kvalitet. Automatisering matar upptäckt och kostnadsinsamling och måste själv mätas på luckor. Analys redovisar noggrannhet ur stickprov, med stickprovets datum och storlek.

## Ämnen i den här delen

- **7.1 Mätetal för it-tillgångshantering**: registrens noggrannhet, upptäcktstäckning, avstämning, ägarskap och livscykelns fullständighet, med register som fångas medan arbetet sker.
- **7.2 Mätetal för programvarutillgångar och licenser**: licensposition, utnyttjande, hyllvärmare, vildväxt, förnyelseberedskap och programvarustycklistor.
- **7.3 Mätetal för maskinvarutillgångars livscykel**: åldersprofil, felgrad, ersättningstid, utnyttjande, säker avveckling och återanvändning.
- **7.4 Mätetal för konfigurations- och CMDB-kvalitet**: fullständighet, noggrannhet, beroendetäckning, konsekvensprognos och användning av konfigurationsregistret.
- **7.5 Tjänstekostnad och enhetsekonomi**: kostnad per tjänst, enhetskostnad, fördelning, visning av kostnad och finansiering av bestående team.
- **7.6 Mätetal för FinOps och molnkostnader**: fördelning efter tagg, slöseri, åtaganden, avvikelser, prognosavvikelse och utsläpp.
- **7.7 Avkastning på investering och affärscase**: total ägandekostnad, avkastning, återbetalningstid, nuvärde och noggrannheten i tidigare prognoser.

## Hur ämnena hänger ihop

De fyra första ämnena beskriver sakerna själva. Tillgångsregister (se ämne 7.1, Mätetal för it-tillgångshantering) säger vad som finns och vem som äger det. Ämnena om programvara och maskinvara (se ämne 7.2, Mätetal för programvarutillgångar och licenser, och ämne 7.3, Mätetal för maskinvarutillgångars livscykel) lägger till de specifika livscyklerna och skyldigheterna för varje klass. Konfigurationsämnet (se ämne 7.4, Mätetal för konfigurations- och CMDB-kvalitet) lägger till relationer, så att du kan säga vad som beror på vad. De delar en metod: fånga vid ändringens ögonblick, kontrollera mot oberoende belägg i båda riktningarna och håll registret tillräckligt litet för att hålla det sant.

De tre sista ämnena beskriver vad sakerna kostar och om kostnaden är värd det. Tjänstekostnadsberäkning (se ämne 7.5, Tjänstekostnad och enhetsekonomi) förvandlar utgifter till kostnad per tjänst och per enhet, vilket beror på tillgångs- och konfigurationsregistren för att tillskriva kostnad rättvist. Molnkostnadspraxis (se ämne 7.6, Mätetal för FinOps och molnkostnader) tillämpar samma idéer där utgifterna ändras per timme och taggar är länken mellan en debitering och en ägare. Affärscaseämnet (se ämne 7.7, Avkastning på investering och affärscase) använder allt detta för att göra investeringsval, och det ber dig kontrollera de valen mot vad som hände.

Flera skyddsräckespar följer. Ett tal för registrens noggrannhet bör läsas med glapplistan och andelen utan ägare. En licensutnyttjandegrad bör läsas med användarnas åtkomstupplevelse, så att återtagande av platser inte frustrerar människor. Ett kostnadsmått bör alltid sitta bredvid ett tillförlitlighets- eller nöjdhetsmått (se ämne 5.2, SLI:er, SLO:er och felbudgetar), så att besparingar inte köps med en sämre tjänst. Ett affärscase bör läsas med spårhistoriken för tidigare prognoser.

Den här delen kopplar framåt och bakåt. Nyttobeläggen i del 6 (se ämne 6.5, Värdeförverkligande och affärsresultat) matar affärscaset. Risk-, revisions- och leverantörsmåtten i del 8 beror på tillgångs- och avtalsregistren som beskrivs här. Del 9 vänder sig till människorna som håller allt detta igång och till vanorna av ständig förbättring som gör registren bättre över tid.
