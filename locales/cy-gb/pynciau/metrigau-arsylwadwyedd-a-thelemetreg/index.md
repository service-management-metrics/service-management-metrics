# Metrigau arsylwadwyedd a thelemetreg

**Arsylwadwyedd yw'r gallu i ofyn cwestiynau newydd i wasanaeth sy'n rhedeg a chael atebion o'i signalau ei hun, felly mesurwch faint o'r gwasanaeth y gallwch ei weld, pa mor dda yw'r signalau, pa mor gyflym y maent yn arwain at ddealltwriaeth, a beth mae'r telemetreg yn ei gostio, yn hytrach na chyfrif dangosfyrddau neu gyfaint data.**

## Trosolwg a chymhelliant

Mae [arsylwadwyedd](https://en.wikipedia.org/wiki/Observability_(software)) yn briodwedd system: pa mor dda y gellir deall ei chyflwr mewnol o'r allbynnau y mae'n eu cynhyrchu. Yn ymarferol gelwir yr allbynnau hynny yn [delemetreg](https://en.wikipedia.org/wiki/Telemetry), ac fe'u grwpir fel arfer yn dri math. Cofnodion o ddigwyddiadau gwahanol yw **logiau**. Mesuriadau rhifol dros amser, megis cyfradd ceisiadau neu gyfradd gwallau, yw **metrigau**. Mae **traciau** yn dilyn un cais drwy rannau system ddosbarthedig. Mae llawer o dimau'n ychwanegu proffiliau, digwyddiadau o ddyfais y defnyddiwr, a digwyddiadau busnes.

Mae monitro'n gofyn cwestiynau hysbys, megis "a yw'r gyfradd gwallau uwchlaw trothwy?", ac yn rhybuddio pan fo'r ateb yn gadarnhaol. Nod arsylwadwyedd yw gadael i dîm ofyn cwestiynau nas cynlluniwyd ar eu cyfer, megis "pam mae ceisiadau o'r rhanbarth hwn yn araf ar gyfer y segment cwsmeriaid hwn?". Mae angen y ddau. Trafodir monitro mewn pynciau cynharach (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion). Mae'r pwnc hwn yn trafod ansawdd y signalau eu hunain a'r arfer o ddeall systemau ohonynt.

Mae gan delemetreg gostau a risgiau. Mae casglu popeth yn ddrud o ran storio ac arian, a gall ddal data personol neu gyfrinachol. Mae casglu rhy ychydig yn gadael tîm yn ddall yn ystod digwyddiad. Mae telemetreg hefyd yn ddata yn ystyr y pwnc blaenorol (gweler pwnc 10.8, Metrigau dadansoddeg ac ansawdd data), felly mae ganddo gwestiynau cyflawnrwydd, amseroldeb a llinach. Ac wrth i offer AI ddarllen telemetreg i grynhoi digwyddiadau ac awgrymu achosion, ansawdd y signalau sy'n penderfynu a yw'r crynodeb yn gywir.

Termau a ddefnyddir yma. **Signal** yw ffrwd o delemetreg, megis log, metrig neu drac. **Offeryniaeth** yw'r cod sy'n cynhyrchu signalau. **Cardinoledd** yw nifer gwerthoedd gwahanol label ar fetrig, ac mae cardinoledd uchel yn cynyddu cost. Mae **dangosydd lefel gwasanaeth (SLI)** yn mesur agwedd ar wasanaeth fel y mae defnyddwyr yn ei phrofi (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau). Mae **samplu** yn cadw cyfran o'r data yn unig, sy'n arbed cost ac yn colli manylder. **Cadw** yw am ba mor hir y cedwir data. Mae **cydberthyniad** yn golygu cysylltu signalau sy'n disgrifio'r un cais neu ddigwyddiad, drwy ddynodwyr a rennir.

## Egwyddorion allweddol

- **Offerynnwch ar gyfer cwestiynau, nid cyfaint.** Dewiswch signalau sy'n ateb cwestiynau am brofiad defnyddwyr ac ymddygiad y system.
- **Mesurwch yr hyn y gallwch ei weld, a'r hyn na allwch.** Mae cwmpas gwasanaethau a theithiau yn dangos mannau dall.
- **Rhaid cysylltu signalau.** Mae dynodwyr sy'n cysylltu log, trac a metrig yn gwneud deall yn gyflym.
- **Mae telemetreg yn gost ac yn risg.** Cyllidebwch ef, a chadwch ddata personol a chyfrinachol allan oni bai fod rheswm a rheol.
- **Mae arsylwadwyedd yn gwasanaethu pobl.** Mesurwch amser i ddeall, a phrofiad y bobl ar alwad.
- **Mae safonau agored yn lleihau cloi i mewn.** Ffafriwch fformatau cyffredin ar gyfer offeryniaeth lle maent yn addas, a gwiriwch fanylebau cyfredol.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cymar ystwyth | Amlder |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cwmpas offeryniaeth | Cyfran y gwasanaethau a'r teithiau defnyddwyr critigol sy'n allyrru'r signalau craidd y cytunwyd arnynt | gwasanaethau neu deithiau â logiau, metrigau a thraciau sy'n bodloni'r safon y cytunwyd arni / gwasanaethau neu deithiau yn y catalog gwasanaethau | canran | Catalog gwasanaethau a rhestr eiddo'r llwyfan telemetreg | Monitro a rheoli digwyddiadau; rheoli cyfluniad gwasanaethau | Diffiniad o orffen ar gyfer gwasanaethau newydd | Chwarterol |
| Cyflawnrwydd traciau | Cyfran y ceisiadau a samplwyd â thrac di-dor o'r fynedfa i'r ddibyniaeth olaf | ceisiadau y mae eu trac yn rhychwantu'r holl neidiau disgwyliedig / ceisiadau mewn sampl a wiriwyd | canran | Llwyfan tracio a gwiriad samplu | Monitro a rheoli digwyddiadau | Prawf arsylwadwyedd mewn nodwedd | Misol |
| Cyfradd cydberthyniad signalau | Cyfran y digwyddiadau lle gellid uno logiau, metrigau a thraciau drwy ddynodwr | digwyddiadau ag uniad gweithredol yn yr adolygiad llinell amser / digwyddiadau a adolygwyd | canran | Adolygiadau digwyddiadau a llwyfan tracio | Rheoli digwyddiadau; rheoli problemau | Camau gweithredu ôl-sylliad | Chwarterol |
| Amser i ddeall | Yr amser o ganfod i esboniad gweithredol cofnodedig o'r achos | canolrif a'r 85fed canradd o (amser y cofnodir yr achos gweithredol cyntaf minws amser y canfuwyd y digwyddiad) ar gyfer digwyddiadau ag achos cofnodedig | munudau | Llinell amser digwyddiad a nodiadau adolygu | Rheoli digwyddiadau | Adolygiad di-fai | Chwarterol |
| Cost telemetreg fesul gwasanaeth | Gwariant telemetreg a briodolir i wasanaeth, fesul uned o ddefnydd y gwasanaeth | cost telemetreg a ddyrannwyd i'r gwasanaeth / uned ddefnydd a nodir, megis 1,000 o geisiadau | arian fesul uned | Bilio telemetreg a data defnydd | Rheoli ariannol | Cost fel mewnbwn dylunio | Misol |
| Data sensitif mewn telemetreg | Nifer y cofnodion cadarnhaol sy'n cynnwys data na ddylai fod yno | achosion cadarnhaol a ganfuwyd drwy sganio neu adolygu yn y cyfnod | cyfrif | Sganiau ac adolygiadau telemetreg | Rheoli diogelwch gwybodaeth | Diffiniad o orffen; adolygiad preifatrwydd | Misol |
| Digwyddiadau man dall | Digwyddiadau a adroddwyd gyntaf gan ddefnyddwyr lle na ddangosodd telemetreg unrhyw arwydd | digwyddiadau a adroddwyd gyntaf gan ddefnyddwyr heb unrhyw rybudd neu signal cysylltiedig / digwyddiadau yn y cyfnod | canran | Cofnodion digwyddiadau a nodiadau adolygu | Rheoli digwyddiadau; monitro | Camau gweithredu ôl-sylliad | Chwarterol |

Mae cwmpas offeryniaeth yn dibynnu ar safon graidd y cytunwyd arni, megis cyfradd ceisiadau, cyfradd gwallau, hwyrni a dynodwr trac, a nodir yng nghofrestr y metrigau. Mae amser i ddeall yn cyfrif dim ond digwyddiadau lle cofnodwyd achos, felly adroddir ar wahân ar ddigwyddiadau heb achos hysbys.

## Argymhellion

### Penderfynu beth i'w weld

**1. Dechreuwch o deithiau defnyddwyr a lefelau gwasanaeth.** Rhestrwch y teithiau sy'n bwysig a'r dangosyddion sy'n dangos a yw defnyddwyr yn llwyddo. Offerynnwch y rhain yn gyntaf, gan eu bod yn clymu telemetreg wrth ganlyniadau (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau).

**2. Cytunwch ar safon graidd.** Diffiniwch y signalau lleiaf y mae pob gwasanaeth yn eu hallyrru, a'r cytundebau enwi a dynodwyr. Rhowch y safon yn y diffiniad o orffen ar gyfer gwasanaethau newydd.

**3. Mapiwch y cwmpas yn onest.** Cymharwch y catalog gwasanaethau â'r gwasanaethau sy'n allyrru'r signalau craidd. Rhestrwch y bylchau a'u perchnogion, a thaclwch y rhai ag effaith uchaf ar ddefnyddwyr yn gyntaf.

### Gwneud signalau'n ddefnyddiol

**4. Cysylltwch signalau â dynodwyr a rennir.** Pasiwch ddynodwr cais neu drac drwy logiau, metrigau a thraciau fel y gall person symud o gais araf i'r union linellau log. Profwch hyn mewn ymarfer.

**5. Profwch offeryniaeth fel cod.** Mae trac sy'n torri wrth giw, neu log â'r parth amser anghywir, yn gwastraffu digwyddiad. Gwiriwch gyflawnrwydd gyda cheisiadau a samplwyd, a thrwsiwch y toriadau.

**6. Rheolwch gardinoledd a samplu'n fwriadol.** Gall labeli cardinoledd uchel greu costau mawr, a gall samplu ollwng y digwyddiad prin sydd ei angen arnoch. Penderfynwch ble i samplu, cofnodwch y gyfradd, a chadwch ddata llawn ar gyfer gwallau a cheisiadau araf lle gellir fforddio.

**7. Cadwch ddata sensitif allan.** Penderfynwch yr hyn na ddylai ymddangos mewn logiau a thraciau, megis data personol, tystlythyrau, a manylion iechyd neu daliadau. Sganiwch amdano, a thrwsiwch y ffynhonnell. Gwiriwch rwymedigaethau gyda'ch cynghorydd cyfreithiol, gan nad yw'r llyfr hwn yn rhoi cyngor cyfreithiol.

### Mesur deall

**8. Mesurwch amser i ddeall, ac nid amser i drwsio yn unig.** Mae'r amser o ganfod i esboniad gweithredol yn dangos pa mor dda y mae'r signalau'n cefnogi pobl. Adolygwch yr achosion hwyaf i weld pa signal oedd ar goll.

**9. Cyfrifwch y mannau dall.** Digwyddiadau y daeth defnyddwyr o hyd iddynt yn gyntaf yw'r dystiolaeth gliriaf o fwlch. Ar gyfer pob un, gofynnwch pa signal fyddai wedi ei ddangos, ac ychwanegwch ef.

**10. Adolygwch ddangosfyrddau a rhybuddion am eu defnydd.** Ymddeolwch ddangosfyrddau nad oes neb yn eu hagor a rhybuddion nad ydynt byth yn arwain at weithredu (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion). Mae set lai y mae pobl yn ymddiried ynddi yn well na mur o siartiau.

### Rheoli cost a safonau

**11. Cyllidebwch a phriodolwch gost telemetreg.** Dyrannwch gost i wasanaethau a gwyliwch y duedd. Gosodwch gadw yn ôl gwerth: cadwch ddata manwl am gyfnod byr, crynodebau yn hirach, a dilëwch yr hyn sydd heb ddefnydd.

**12. Ffafriwch safonau agored lle maent yn addas.** Mae offeryniaeth a fformatau data cyffredin, megis y rhai a gynhelir gan brosiect OpenTelemetry, yn ei gwneud yn haws newid offer. Gwiriwch y fanyleb gyfredol a chefnogaeth eich offer cyn ymrwymo, gan fod safonau a chynhyrchion yn newid.

## Fectorau gamio a chanllawiau amddiffynnol

| Metrig | Sut mae'n cael ei gamio | Metrig neu arfer canllaw amddiffynnol pâr |
| --- | --- | --- |
| Cwmpas offeryniaeth | Ychwanegu signal lleiaf at bob gwasanaeth i basio'r safon; eithrio gwasanaethau anodd o'r catalog | Cyflawnrwydd traciau a digwyddiadau man dall; adolygu'r catalog am hepgoriadau |
| Cyflawnrwydd traciau | Samplu ceisiadau syml yn unig; cyfrif traciau rhannol fel rhai cyflawn | Diffinio'r sampl wirio yn ôl math o gais; gwirio cwmpas dibyniaethau |
| Cyfradd cydberthyniad signalau | Adolygu digwyddiadau a aeth yn dda yn unig; cyfrif uniad sy'n bodoli ar bapur | Adolygu sampl ar hap o ddigwyddiadau; cynnal ymarfer uniad |
| Amser i ddeall | Cofnodi achos yn gynnar ac yn llac; gadael yr achos yn wag ar gyfer achosion anodd | Adolygu ansawdd cofnodion achosion; adrodd digwyddiadau heb achos ar wahân |
| Cost telemetreg fesul gwasanaeth | Gollwng signalau i dorri cost; symud cost i gyfrif arall | Digwyddiadau man dall ac amser i ddeall; cysoni cyfanswm gwariant |
| Data sensitif mewn telemetreg | Sganio'n rhy gul; peidio ag adrodd canfyddiadau | Cwmpas sganio ac adolygiad annibynnol; tracio amser i dynnu |
| Digwyddiadau man dall | Cyfrif digwyddiad fel un a ganfuwyd pan daniodd rhybudd ar ôl i ddefnyddwyr adrodd; diffinio signal yn eang | Cymharu stampiau amser y signal cyntaf ac adroddiad cyntaf y defnyddiwr; adolygiadau samplu |

Darlleniad iach yw cwmpas sy'n codi gyda nifer y traciau a'r uniadau cyflawn, cyfran sy'n gostwng o ddigwyddiadau a ganfuwyd yn gyntaf gan ddefnyddwyr, amser i ddeall sy'n gostwng heb dorri signalau, cost telemetreg a ddeellir ac a briodolir, a chanfyddiadau data sensitif a drwsir yn gyflym.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Casglu popeth, ei gadw'n hir | Y gallu mwyaf i ymchwilio | Cost a risg uchel; anodd chwilio |
| Samplu a chadw'n fyr | Cost is | Gall golli digwyddiadau prin a hen ddigwyddiadau |
| Offeryniaeth safonol ar draws gwasanaethau | Cyson; deall yn gyflymach | Ymdrech i fabwysiadu; efallai na fydd yn gweddu i bob gwasanaeth |
| Offeryniaeth a ddewisir gan dimau | Yn gweddu i anghenion lleol | Anghyson; anodd uno signalau |
| Crynodebau AI o delemetreg | Golwg gyntaf gyflymach | Gallant fod yn anghywir; yn dibynnu ar ansawdd signalau |

Y casgliad rhyddiaith yw cadw data cyfoethog ar gyfer gwallau a cheisiadau araf, samplu'r arferol, a gosod cadw yn ôl gwerth. Mae set gymedrol, gyson, gysylltiedig o signalau yn well na phentwr mawr heb ei gysylltu.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Yn ystod ein digwyddiad diwethaf, beth oeddem eisiau ei wybod na allem ddod o hyd iddo?**
Mae hyn yn datgelu'r signal coll. Gofynnwch i bobl gofio'r cwestiwn a ble yr edrychasant. Disgwyliwch atebion fel "pa gwsmeriaid yr effeithiwyd arnynt" neu "beth a newidiodd". Dilynwch drwy benderfynu pwy sy'n ychwanegu'r signal a sut i'w brofi.

**2. Ar gyfer ein taith defnyddiwr bwysicaf, sut fyddem yn gwybod ei bod yn methu?**
Cerddwch drwy'r daith gam wrth gam. Gofynnwch pa signal sy'n dangos llwyddiant ar bob cam, a pha mor fuan. Chwiliwch am gamau heb signal. Dilynwch drwy ychwanegu dangosydd ar gyfer y cam gwannaf.

**3. A allwn ddilyn un cais o glic y defnyddiwr i'r gronfa ddata ac yn ôl?**
Rhowch gynnig arni'n fyw. Sylwch ble mae'r trac yn torri, megis wrth giw neu alwad trydydd parti. Gofynnwch pa mor hir mae'n ei gymryd i ddod o hyd i'r llinellau log cyfatebol. Dilynwch drwy drwsio'r toriad mwyaf.

**4. Faint ydym yn ei wario ar delemetreg, a beth ydym yn ei gael amdano?**
Nid yw llawer o dimau'n gwybod y gost fesul gwasanaeth. Gofynnwch pa signalau a ddefnyddiwyd yn y chwarter diwethaf. Trafodwch beth y gellid ei samplu neu ei ddileu heb niwed. Dilynwch drwy ddewis un signal i'w adolygu.

**5. Pa wybodaeth sensitif a allai fod yn ein logiau a'n traciau heddiw?**
Chwiliwch gyda'ch gilydd am enghreifftiau. Achosion cyffredin yw cyfeiriadau e-bost, tocynnau a meysydd testun rhydd. Gofynnwch sut y cyrhaeddodd yno a phwy all ei darllen. Dilynwch drwy gytuno ar reol a sgan.

**6. Sut ydym yn defnyddio offer AI ar ein telemetreg, a phwy sy'n gwirio'r hyn a ddywedant?**
Gwrandewch am grynodebau o ddigwyddiadau heb eu gwirio. Gofynnwch pa ddata a anfonir at offeryn ac o dan ba delerau. Trafodwch sut mae person yn gwirio achos a awgrymir. Dilynwch drwy ysgrifennu rheol fer.

## Pedwar safbwynt

### Timau cynnyrch a chyflawni

Chi sy'n penderfynu beth mae gwasanaeth yn ei allyrru. Ychwanegwch offeryniaeth wrth i chi adeiladu, cynhwyswch y dynodwr sy'n cysylltu signalau, a'i brofi fel rhan o'r gwaith. Trinwch arsylwadwyedd coll fel diffyg, gan mai'r digwyddiad nesaf fydd yn talu amdano.

### Timau gwasanaeth a gweithrediadau

Rydych yn defnyddio telemetreg dan bwysau. Dywedwch wrth y tîm pa signalau a helpodd a pha rai oedd ar goll, a chadwch rybuddion wedi'u clymu wrth effaith ar ddefnyddwyr. Tracwch amser i ddeall a'r digwyddiadau man dall, a dewch â hwy at y tîm cynnyrch.

### Arweinyddiaeth a llywodraethu

Ariennwch arsylwadwyedd fel rhan o'r gwasanaeth, gyda chyllidebau ar gyfer telemetreg ac ar gyfer trwsio bylchau. Gofynnwch am gwmpas, digwyddiadau man dall a thueddiadau cost, nid nifer y dangosfyrddau. Gosodwch reolau ar gyfer data sensitif ac ar gyfer defnyddio offer AI ar delemetreg.

### Cwsmeriaid a defnyddwyr

Chi yn aml yw'r cyntaf i sylwi ar broblem, felly gofynnwch sut i'w hadrodd a pha mor fuan y caiff ei chysylltu â signalau'r gwasanaeth. Mae eich adroddiadau'n lleihau mannau dall, a dylid dweud wrthych beth a ddysgwyd. Gofynnwch pa delemetreg a gesglir amdanoch a pham.

## Yn ymarferol: enghraifft rheoli gwasanaethau

Mae manwerthwr ar-lein canolig ei faint yn rhedeg gwasanaeth talu sy'n cynnwys wyth gwasanaeth llai. Mae'r rhifau yn yr enghraifft hon yn ddarluniadol. Mae cwsmeriaid yn adrodd methiannau achlysurol wrth dalu, ond mae'r dangosfyrddau'n dangos cyfraddau gwallau iach a hwyrni arferol.

Mae'r tîm yn mesur. Mae cwmpas offeryniaeth yn 6 o 8 gwasanaeth yn bodloni'r safon graidd. Mae gwiriad o 50 cais talu a samplwyd yn dangos cyflawnrwydd traciau o 62 y cant, am fod y trac yn torri wrth giw negeseuon ac wrth alwad talu trydydd parti. Yn y chwe digwyddiad diwethaf, mae cyfradd cydberthyniad signalau yn ddau o chwech, gan fod logiau'n defnyddio dynodwr cais gwahanol i draciau. Mae digwyddiadau man dall yn dri o chwech.

Mae'r tîm yn pasio un dynodwr cais drwy'r ciw a'r logiau, yn ychwanegu rhychwant trac o amgylch yr alwad dalu, ac yn offerynnu'r ddau wasanaeth coll. Ar ôl mis, mae cyflawnrwydd traciau yn cyrraedd tua 90 y cant yn y gwiriad samplu ac mae gan y digwyddiad nesaf esboniad gweithredol mewn 35 munud, o'i gymharu â sawl awr o'r blaen. Maent hefyd yn sganio logiau ac yn dod o hyd i gyfeiriadau e-bost cwsmeriaid mewn neges gwall, y maent yn eu tynnu o'r ffynhonnell, ac mae canfyddiadau data sensitif yn disgyn i sero yn y mis nesaf.

Mae risg gamio yn ymddangos. Mae rheolwr yn gofyn codi cwmpas offeryniaeth drwy farcio'r ddau wasanaeth sy'n weddill yn "y tu allan i'r cwmpas". Mae'r tîm yn gwrthod, oherwydd byddai nifer y digwyddiadau man dall yn aros yn uchel, ac yn cofnodi'r bwlch gyda pherchennog. Yr hyn sy'n parhau'n anodd: mae cost telemetreg fesul cais talu wedi codi, ac nid yw'r tîm wedi penderfynu eto am ba mor hir i gadw traciau. Cynllun y chwarter nesaf yw samplu traciau arferol a chadw manylder llawn ar gyfer gwallau.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Cynhwyswch arsylwadwyedd yn y diffiniad o orffen, fel y gellir deall pob cynyddran o wasanaeth mewn cynhyrchu. Arfer da yw adolygu signalau coll y digwyddiad diwethaf yn y sgwrs welliant reolaidd a'u hychwanegu fel eitemau ôl-groniad. Y rhybudd yw bod gwaith arsylwadwyedd yn aml yn cael ei ohirio o blaid nodweddion, felly gwnewch ef yn weladwy a gwarchodwch amser ar ei gyfer.

### AI

Gall AI grynhoi telemetreg, cydberthyn signalau ac awgrymu achosion, ac mae angen telemetreg ar nodweddion AI eu hunain megis mewnbynnau, allbynnau, hwyrni, cost ac adborth defnyddwyr. Paru achosion a awgrymir gan AI â gwiriad dynol ac adroddwch pa mor aml yr oeddent yn gywir, a monitrwch nodweddion AI am ansawdd yn ogystal ag argaeledd (gweler pwnc 10.1, AI mewn mesur rheoli gwasanaethau). Y rhybudd yw y gall anogion ac ymatebion mewn logiau gynnwys data personol, felly penderfynwch beth i'w gofnodi cyn dechrau.

### Awtomeiddio

Awtomeiddiwch gasglu, cydberthyn a rhybuddio, ac awtomeiddiwch y gwiriadau am gwmpas a data sensitif. Mesurwch y biblinell telemetreg ei hun ar ddata a ollyngwyd ac oedi, gan fod piblinell wedi torri yn edrych fel system iach. Y rhybudd yw y gall adferiad awtomatig sy'n gweithredu ar signal guddio'r achos, felly logiwch yr hyn a wnaeth.

### Dadansoddeg

Defnyddiwch delemetreg i ateb cwestiynau ar brofiad defnyddwyr ac ymddygiad y system, gyda SLIau wedi'u cysylltu â chanlyniadau. Y penderfyniad a lywir yw ble i fuddsoddi mewn signalau a ble i leihau cost. Y rhybudd yw nad yw cyfaint data yn ddealltwriaeth, a gall metrigau cyfanredol guddio'r defnyddwyr sy'n dioddef, felly gwiriwch ddosbarthiadau a segmentau, a dangoswch nifer y digwyddiadau y tu ôl i bob ffigur (gweler pwnc 10.8, Metrigau dadansoddeg ac ansawdd data).

## Lens sector

**Cwmni newydd.** Dechreuwch gydag ychydig o signalau ar y brif daith defnyddiwr a dynodwr trac mewn logiau. Osgowch brynu llwyfan mawr cyn i'r cwestiynau fod yn glir, a gwyliwch gost wrth i ddefnydd dyfu.

**Busnes bach.** Mae gwasanaethau a gynhelir yn aml yn darparu telemetreg cyfyngedig. Gofynnwch i gyflenwyr beth y gallwch ei weld a chadwch wiriad allanol syml o'r brif daith. Osgowch gasglu data personol mewn logiau.

**Menter.** Mae angen safon a rennir, dynodwyr a rennir a phriodoli cost canolog ar lawer o dimau ac offer. Gadewch i dimau ychwanegu signalau o fewn y safon, a rheolwch gadw a mynediad yn ganolog.

**Llywodraeth a'r sector cyhoeddus.** Mae rheolau am leoliad data, cadw a mynediad yn llunio'r hyn y gallwch ei gasglu a ble y'i storir. Dogfennwch lifoedd data telemetreg a gwiriwch rwymedigaethau gyda chynghorwyr cyfreithiol (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Achos busnes: cymhellion, ROI a TCO

Y costau yw gwaith offeryniaeth, ffioedd llwyfan neu wasanaeth, storio yn ôl cyfnod cadw, ac amser staff i gynnal safonau a dangosfyrddau. Gall cost telemetreg dyfu'n gyflym gyda chyfaint a chardinoledd, felly cyllidebwch a phriodolwch hi.

Yr elw yw deall cyflymach mewn digwyddiadau, llai o ddigwyddiadau a ganfuwyd yn gyntaf gan ddefnyddwyr, a gwell penderfyniadau ar ble i wella. Mae'r buddion hyn yn real ac yn anodd eu prisio, felly osgowch ddyfeisio ffigur. Cymharwch eich amser i ddeall eich hun a chyfran digwyddiadau man dall cyn ac ar ôl y gwaith, a nodwch dybiaethau fel ystodau (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes). Ochr y risg yw cost gollyngiad data drwy delemetreg a chost telemetreg na chaiff ei ddefnyddio byth.

## Gwrth-batrymau a thrapiau

- **Cyfrif dangosfyrddau.** Nid yw mwy o siartiau'n golygu mwy o ddealltwriaeth. Mesurwch gwmpas, uniadau ac amser i ddeall.
- **Casglu popeth am byth.** Mae cost a risg yn tyfu gydag ychydig o ddefnydd. Gosodwch gadw yn ôl gwerth.
- **Signalau heb eu cysylltu.** Mae logiau, metrigau a thraciau na ellir eu huno yn arafu pob digwyddiad. Pasiwch ddynodwyr a rennir.
- **Samplu'r digwyddiad prin i ffwrdd.** Y methiant sydd ei angen arnoch yw'r un a ollyngwyd. Cadwch wallau a cheisiadau araf.
- **Data sensitif mewn logiau.** Mae'n lledaenu ac yn anodd ei dynnu. Sganiwch a thrwsiwch y ffynhonnell.
- **Rhybuddion ar bob signal.** Mae sŵn yn hyfforddi pobl i anwybyddu rhybuddion. Rhybuddiwch ar effaith ar ddefnyddwyr.
- **Ymddiried mewn crynodebau AI heb eu gwirio.** Gallant fod yn anghywir, a gall y signalau fod yn anghyflawn. Gwiriwch yn erbyn y data.
- **Offeryniaeth fel gwaith rhywun arall.** Mae'r bobl sy'n ysgrifennu'r cod yn gwybod beth i'w allyrru. Gwnewch hynny'n rhan o'r gwaith.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cyd-drefnu |
| --- | --- | --- | --- | --- | --- |
| Cwmpas a safon | Signalau'n amrywio yn ôl tîm; mannau dall yn anhysbys | Prif wasanaethau ag offeryniaeth | Safon graidd a chwmpas wedi'i dracio yn erbyn y catalog | Adolygir digwyddiadau man dall a chaeir bylchau | Cwmpas wedi'i adeiladu i greu gwasanaethau a'i addasu yn ôl effaith ar ddefnyddwyr |
| Ansawdd a chysylltu signalau | Logiau yn unig; dim dynodwyr a rennir | Rhai traciau a metrigau | Dynodwyr a rennir; gwirir cyflawnrwydd traciau | Adolygir amser i ddeall; cynhelir ymarferion | Signalau'n addasu'n awtomatig i'r cwestiynau a ofynnir |
| Cost a llywodraethu | Cost yn anhysbys; dim rheolau data | Cost yn weladwy yn gyffredinol | Cost wedi'i phriodoli; rheolau cadw a data sensitif | Adolygir cost a chanfyddiadau data ar rythm | Rheolir cost a risg telemetreg yn ôl gwerth ar draws timau |

## Rhestr wirio

- [ ] Mae safon signalau craidd wedi'i hysgrifennu ac yn rhan o'r diffiniad o orffen.
- [ ] Tracir cwmpas offeryniaeth yn erbyn y catalog gwasanaethau.
- [ ] Mae dynodwr cais neu drac yn cysylltu logiau, metrigau a thraciau.
- [ ] Gwirir cyflawnrwydd traciau ar sampl o geisiadau go iawn.
- [ ] Cofnodir amser i ddeall ar gyfer digwyddiadau, gyda'r achos.
- [ ] Cyfrifir digwyddiadau man dall ac mae pob un yn arwain at signal.
- [ ] Priodolir cost telemetreg i wasanaethau, a gosodir cadw yn ôl gwerth.
- [ ] Sganir am ddata sensitif mewn telemetreg a'i drwsio yn y ffynhonnell.
- [ ] Mae rheolau'n bodoli ar gyfer offer AI sy'n darllen telemetreg.
- [ ] Mae gan bob metrig fector gamio a chanllaw amddiffynnol a ddangosir wrth ei ymyl.

## Anogion AI

**Dylunio safon signalau craidd.**

```text
Ein gwasanaeth yw [disgrifiad], sy'n cynnwys [nifer] o gydrannau yn [technolegau].
Ein teithiau defnyddiwr pwysicaf yw [rhestr]. Cynigiwch safon signalau craidd:
y logiau, y metrigau a'r traciau lleiaf y dylai pob cydran eu hallyrru, y
cytundebau enwi a dynodwyr, a sut i wirio cydymffurfiaeth. Peidiwch ag argymell
gwerthwyr penodol oni fyddaf yn eu henwi. Marciwch dybiaethau a rhestrwch
gwestiynau y dylwn eu hateb.
```

**Dod o hyd i fylchau arsylwadwyedd o adolygiad digwyddiad.**

```text
Dyma grynodeb o ddigwyddiad diweddar, gyda llinell amser a nodiadau (data
personol wedi'i dynnu): [gludwch]. Nodwch eiliadau pan nad oedd gan y tîm
signal, na allai gysylltu signalau, neu a ddibynnodd ar ddyfaliad. Ar gyfer pob
un, cynigiwch y signal neu'r cyswllt a fyddai wedi helpu, fel awgrym i'r tîm ei
werthuso. Peidiwch â haeru achosion nad yw'r testun yn eu cefnogi. Rhestrwch yr
hyn na allech ei farnu a'ch tybiaethau.
```

**Cynllunio sgan am ddata sensitif mewn telemetreg.**

```text
Rydym yn cadw logiau a thraciau yn [offer]. Drafftiwch gynllun i ddod o hyd i
ddata sensitif ynddynt: categorïau o ddata i chwilio amdanynt, ble i edrych, sut
i samplu, sut i adrodd canfyddiadau, a sut i drwsio yn y ffynhonnell. Peidiwch â
datgan gofynion cyfreithiol; rhestrwch gwestiynau ar gyfer ein cynghorydd
cyfreithiol. Rhestrwch dybiaethau a'r mynediad y byddai ei angen arnoch.
```

**Adolygu risg gamio y mesurau arsylwadwyedd.**

```text
Rydym yn adrodd y mesurau arsylwadwyedd hyn: [gludwch fesurau a diffiniadau].
Cyd-destun: [maint y tîm, offer, cynulleidfa]. Ar gyfer pob mesur, rhestrwch
ffyrdd realistig y gallai edrych yn well heb wella deall, cynigiwch ganllaw
amddiffynnol, a dywedwch sut y gellid camio'r canllaw hwnnw. Peidiwch â dyfeisio
gwerthoedd meincnod. Rhestrwch eich tybiaethau.
```

## Sgiliau AI

- [Dadansoddi anghysondebau](../../../../skills/anomaly-analysis/SKILL.md): defnyddiwch i archwilio patrymau anarferol mewn telemetreg cyn penderfynu ar achos.
- [Dadansoddi gwraidd achos](../../../../skills/root-cause-analysis/SKILL.md): defnyddiwch i droi signalau a llinellau amser yn esboniad a brofwyd.
- [Cytundeb lefel gwasanaeth](../../../../skills/service-level-agreement/SKILL.md): defnyddiwch i gysylltu dangosyddion â'r cytundebau a'r amcanion y maent yn eu cefnogi.
- [Sgil Service Management Metrics](../../../../skills/service-management-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc sy'n trafod metrig a'i ganllaw amddiffynnol pâr.

## Prif bwyntiau

- Mae arsylwadwyedd yn ymwneud â gallu gofyn cwestiynau newydd i wasanaeth sy'n rhedeg, felly mesurwch gwmpas, signalau cysylltiedig ac amser i ddeall.
- Digwyddiadau y mae defnyddwyr yn dod o hyd iddynt yn gyntaf yw'r dystiolaeth gliriaf o fannau dall, felly cyfrifwch hwy ac ychwanegwch signalau.
- Dynodwyr a rennir ar draws logiau, metrigau a thraciau sy'n gwneud deall yn gyflym.
- Mae telemetreg yn costio arian a gall ollwng data sensitif, felly cyllidebwch ef, gosodwch gadw yn ôl gwerth, a sganiwch am gynnwys sensitif.
- Gwiriwch grynodebau AI o delemetreg yn erbyn y data, gan eu bod yn dibynnu ar ansawdd signalau.

## Cyfeiriadau a darllen pellach

1. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
2. Wikipedia, [Telemetry](https://en.wikipedia.org/wiki/Telemetry).
3. Wikipedia, [Distributed tracing](https://en.wikipedia.org/wiki/Tracing_(software)).
4. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
5. Wikipedia, [Log management](https://en.wikipedia.org/wiki/Log_management).
6. Wikipedia, [Service-level indicator](https://en.wikipedia.org/wiki/Service-level_indicator).
7. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
