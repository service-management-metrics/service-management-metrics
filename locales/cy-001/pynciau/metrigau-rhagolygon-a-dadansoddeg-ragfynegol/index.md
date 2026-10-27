# Metrigau rhagolygu a dadansoddeg ragfynegol

**Ystod â hanes cofnodedig yw rhagolwg, nid dyddiad na rhif i'w amddiffyn, felly mesurwch pa mor aml y syrthiodd y canlyniad gwirioneddol o fewn yr ystod a nodwyd, a oedd yr ystod yn onest am ei lled, ac a wnaeth unrhyw un benderfyniad gwell o'i herwydd.**

## Trosolwg a chymhelliant

Mae [rhagolygu](https://en.wikipedia.org/wiki/Forecasting) yn amcangyfrif maint yn y dyfodol o ddata'r gorffennol a thybiaethau a nodir. Mae sefydliadau gwasanaeth yn rhagweld galw am gymorth, capasiti ar gyfer llwyfan, y dyddiad y bydd darn o waith yn gorffen, y siawns y bydd newid yn methu, a chost gwasanaeth y flwyddyn nesaf. Mae modelau rhagfynegol, gan gynnwys modelau dysgu peirianyddol, yn ymestyn hyn i sgorio eitemau unigol: pa docyn fydd yn torri ei darged, pa newid sy'n beryglus, pa ddigwyddiad sy'n debygol o ailadrodd.

Mae rhagolygon a rhagfynegiadau'n methu mewn ffyrdd cyffredin. Efallai na fydd y gorffennol yn debyg i'r dyfodol, am fod gwasanaeth, tîm neu offeryn wedi newid. Gall y data fod yn denau neu'n unochrog. Gall yr ystod fod yn rhy gul, am fod un rhif yn edrych yn fwy defnyddiol na chyfwng. Ac mae'n bosibl y defnyddir y rhagolwg fel ymrwymiad, fel bod pobl yn gweithio i wneud iddo ddod yn wir neu'n cuddio'r hyn sy'n ei wrthddweud.

Rhoddodd pynciau cynharach ragolygon ar gyfer defnyddiau penodol: dyddiadau cyflawni o drwybwn (gweler pwnc 2.5, Metrigau rhagolygu a chynllunio cyflawni), capasiti o alw (gweler pwnc 5.4, Metrigau capasiti a pherfformiad), a chost (gweler pwnc 7.5, Cost gwasanaeth ac economeg uned). Mae'r pwnc hwn yn rhoi'r dull cyffredinol o fesur ansawdd unrhyw ragolwg neu ragfynegiad, sy'n berthnasol i bob un ohonynt. Mae hefyd yn trafod modelau rhagfynegol y mae eu hallbwn yn gyrru gweithred, lle mae cost rhagfynegiad anghywir yn disgyn ar rywun.

Termau a ddefnyddir yma. **Rhagolwg pwynt** yw un gwerth a ragfynegir. **Cyfwng rhagfynegi** yw ystod y bwriedir iddi gynnwys y gwerth gwirioneddol gyda thebygolrwydd a nodir. **Graddnodi** yw'r cytundeb rhwng tebygolrwydd a nodir ac amlder a arsylwir: o'r rhagolygon a ddywedodd 80 y cant, dylai tua 80 y cant ddod yn wir. **Gwall rhagolwg** yw'r gwahaniaeth rhwng rhagolwg a'r gwir. **Rhagolwg llinell sylfaen** yw dull syml, megis "yr un fath â'r cyfnod diwethaf", y cymharir dull mwy cymhleth ag ef. **Positif ffug** yw rhagfynegiad o ddigwyddiad nad yw'n digwydd, a **negatif ffug** yw methiant i ragfynegi un sy'n digwydd. **Drifft** yw newid yn y data neu yn y berthynas rhwng mewnbynnau a chanlyniadau sy'n lleihau cywirdeb model dros amser.

## Egwyddorion allweddol

- **Rhagolygwch mewn ystodau a chadwch hanes cofnodedig.** Ni all rhagolwg na chaiff ei wirio byth wella.
- **Cymharwch â llinell sylfaen syml.** Nid yw model cymhleth nad yw'n curo "yr un fath â'r cyfnod diwethaf" yn ennill ei gost.
- **Mae graddnodi yr un mor bwysig â chywirdeb.** Dylai rhagolwg sy'n dweud 90 y cant fod yn gywir tua naw gwaith o bob deg.
- **Cydweddwch gost gwallau â'r penderfyniad.** Nid yw larwm ffug a methiant i ganfod yn costio'r un faint.
- **Gwyliwch am ddrifft.** Mae rhagolygon yn dadfeilio pan fo'r byd yn newid, felly monitrwch hwy.
- **Nid ymrwymiad yw rhagolwg.** Peidiwch â'i droi'n darged i bobl.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cymar ystwyth | Amlder |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cwmpas cyfwng rhagolwg | Cyfran y canlyniadau gwirioneddol a syrthiodd o fewn y cyfwng rhagfynegi a nodwyd | canlyniadau o fewn y cyfwng / rhagolygon a werthuswyd; y rhagolygon a werthuswyd yw'r rhai y mae eu canlyniad yn hysbys | canran | Log rhagolygon a'r gwir | Rheoli capasiti a pherfformiad; rheoli ariannol | Rhagolygu gydag ystodau o drwybwn | Chwarterol |
| Gwall rhagolwg | Maint nodweddiadol y gwahaniaeth rhwng rhagolwg a'r gwir | canolrif y gwall absoliwt a'i 85fed canradd, lle gwall absoliwt = gwerth absoliwt (rhagolwg minws gwir) / gwir, dros ragolygon a werthuswyd | canran | Log rhagolygon a'r gwir | Rheoli capasiti a pherfformiad | Adolygu cynllunio | Chwarterol |
| Medr yn erbyn llinell sylfaen | Gwelliant y dull rhagolygu dros linell sylfaen syml | 1 minws (canolrif gwall absoliwt y dull / canolrif gwall absoliwt y llinell sylfaen) dros yr un rhagolygon | cymhareb | Log rhagolygon, log llinell sylfaen a'r gwir | Gwelliant parhaus | Arbrofi a chymharu | Chwarterol |
| Bwlch graddnodi | Y gwahaniaeth rhwng tebygolrwydd a nodir ac amlder a arsylwir | ar gyfer pob band tebygolrwydd, gwerth absoliwt (tebygolrwydd a nodir minws cyfran a arsylwir) wedi'i gyfartaleddu dros fandiau; adroddir ar wahân ar fandiau â llai na nifer a nodir o achosion | pwyntiau canran | Log rhagolygon tebygolrwyddol a chanlyniadau | Rheoli risg; galluogi newid | Ôl-sylliad ar amcangyfrifon | Chwarterol |
| Manwl gywirdeb a galw'n ôl rhybuddion | Ar gyfer rhybudd neu sgôr rhagfynegol, cyfran y rhybuddion a oedd yn gywir a chyfran y digwyddiadau a ddaliwyd | manwl gywirdeb = positifau gwir / (positifau gwir + positifau ffug); galw'n ôl = positifau gwir / (positifau gwir + negatifau ffug) | canran | Log rhagfynegiadau a chanlyniadau | Rheoli digwyddiadau; rheoli digwyddiadau monitro | Diffiniad o orffen ar gyfer y model | Misol |
| Signal drifft rhagolygon | Cynnydd mewn gwall dros amser o'i gymharu â chyfnod cyfeirio | canolrif gwall absoliwt yn y ffenestr ddiweddaraf minws canolrif gwall absoliwt yn y ffenestr gyfeirio, gyda meintiau'r ffenestri wedi'u nodi | pwyntiau canran | Log rhagolygon a'r gwir | Gwelliant parhaus; rheoli capasiti | Archwilio ac addasu | Misol |
| Cysylltiad rhagolygon â phenderfyniadau | Cyfran y rhagolygon a ddyfynnwyd mewn penderfyniad cofnodedig | rhagolygon a ddyfynnwyd yn y log penderfyniadau / rhagolygon a gyhoeddwyd | canran | Log penderfyniadau a log rhagolygon | Gwelliant parhaus; llywodraethu | Camau gweithredu adolygu | Chwarterol |

Cyfrifir gwall rhagolwg a chwmpas ar gyfer rhagolygon y mae eu canlyniad yn hysbys yn unig, felly eithrir rhagolygon diweddar hyd hynny. Mae manwl gywirdeb a galw'n ôl yn dibynnu ar sut y diffinnir digwyddiad, felly nodir diffiniad y digwyddiad, megis "newid sy'n achosi digwyddiad o fewn 48 awr", gyda'r metrig.

## Argymhellion

### Rhagolygu'n onest

**1. Cyhoeddwch ystodau, nid dyddiadau unigol.** Rhowch gyfwng gyda thebygolrwydd a nodir, megis "rhwng 12 ac 18 diwrnod gwaith, gyda 85 y cant o hyder", ac eglurwch y dybiaeth y tu ôl iddo. Mae un rhif yn gwahodd ymrwymiad.

**2. Cadwch log rhagolygon.** Cofnodwch bob rhagolwg pan y'i gwneir: y maint, y gwerth neu'r ystod, y dyddiad, y dull a'r tybiaethau. Ychwanegwch y gwir pan fydd yn hysbys. Heb y log, nid oes hanes cofnodedig.

**3. Dechreuwch â llinell sylfaen syml.** Cymharwch unrhyw ddull newydd ag un naïf, megis gwerth y cyfnod diwethaf neu gyfartaledd diweddar. Os nad yw dull cymhleth yn ei churo'n glir dros amser, cadwch yr un syml.

**4. Nodwch y tybiaethau a fyddai'n annilysu'r rhagolwg.** Mae rhagolwg galw yn tybio dim lansiad mawr, dim toriad, dim grŵp cwsmeriaid newydd. Ysgrifennwch y dybiaeth wrth ymyl y rhif, fel y bydd darllenydd yn gwybod pryd i anymddiried.

### Mesur ansawdd

**5. Gwiriwch gwmpas a graddnodi.** Cyfrifwch pa mor aml y mae canlyniadau'n syrthio o fewn y cyfwng. Os yw cyfwng 85 y cant yn cynnwys y canlyniad hanner yr amser yn unig, mae'n rhy gul. Adroddwch raddnodi gyda nifer yr achosion, gan fod samplau bach yn swnllyd.

**6. Darllenwch wallau fel dosbarthiad.** Gall gwall canolrif o 10 y cant guddio methiannau achlysurol o 50 y cant sydd bwysicaf. Dangoswch ganradd uchel a'r methiannau mwyaf, a'u hadolygu.

**7. Cydweddwch y mesur â chost y penderfyniad.** Ar gyfer rhybudd rhagfynegol, dewiswch fanwl gywirdeb neu alw'n ôl yn ôl cost larwm ffug a methiant i ganfod. Mae gan rybudd twyll ac awgrym llwybro risg isel gydbwysedd gwahanol.

**8. Gwyliwch am ddrifft.** Cymharwch wall diweddar â chyfnod cyfeirio ac ymchwiliwch i gynnydd. Achosion cyffredin yw gwasanaeth newydd, proses newidiedig, offer newydd, neu newid yn y ffordd y cofnodir data.

### Defnyddio rhagolygon yn dda

**9. Cysylltwch ragolygon â phenderfyniadau.** Dywedwch pa benderfyniad y mae rhagolwg yn ei lywio, a chofnodwch yn y log penderfyniadau beth a benderfynwyd. Ymddeolwch ragolygon nad oes neb yn eu defnyddio.

**10. Cadwch ragolygon draw o dargedau i bobl.** Bydd rhagolwg o gyfaint digwyddiadau sy'n dod yn gwota i'r ddesg yn ystumio adrodd. Trinwch ragolygon fel gwybodaeth am system.

**11. Cadwch berson yn atebol am weithredu ar ragfynegiadau.** Ar gyfer modelau sy'n sgorio eitemau, enwch y perchennog, y weithred a gymerir ar sgôr, sut y gall person ei diystyru, a sut yr adroddir gwallau. Adolygwch bositifau ffug a negatifau ffug gydag achosion a samplwyd.

**12. Gwyliwch am duedd a niwed.** Gall model a hyfforddwyd ar benderfyniadau'r gorffennol ailadrodd eu tuedd. Gwiriwch y canlyniadau ar gyfer grwpiau o ddefnyddwyr neu wasanaethau sy'n cael canlyniadau gwahanol, ac adroddwch yr hyn na all y gwiriad ei ddangos. Nid yw'r llyfr hwn yn rhoi cyngor cyfreithiol, felly gwiriwch rwymedigaethau gyda'ch cynghorydd cyfreithiol eich hun.

## Fectorau gamio a chanllawiau amddiffynnol

| Metrig | Sut mae'n cael ei gamio | Metrig neu arfer canllaw amddiffynnol pâr |
| --- | --- | --- |
| Cwmpas cyfwng rhagolwg | Ehangu cyfyngau nes bod y cwmpas yn edrych yn dda; gwerthuso rhagolygon hawdd yn unig | Adrodd lled y cyfwng gyda'r cwmpas; gwerthuso pob rhagolwg a logiwyd |
| Gwall rhagolwg | Diwygio'r rhagolwg ychydig cyn y canlyniad; dewis y ffenestr werthuso | Defnyddio'r rhagolwg gwreiddiol a logiwyd; pennu'r ffenestr ymlaen llaw |
| Medr yn erbyn llinell sylfaen | Dewis llinell sylfaen wan; tiwnio'r dull ar y data gwerthuso | Cytuno ar y llinell sylfaen ymlaen llaw; gwerthuso ar ddata na ddefnyddiwyd ar gyfer tiwnio |
| Bwlch graddnodi | Defnyddio ychydig o fandiau neu ychydig o achosion; cyfuno bandiau i guddio bylchau | Adrodd nifer yr achosion fesul band; isafswm cyfrif achosion |
| Manwl gywirdeb a galw'n ôl rhybuddion | Ailddiffinio digwyddiadau wedi'r ffaith; cyfrif dyblygiadau | Pennu diffiniad y digwyddiad ymlaen llaw; dad-ddyblygu; samplu rhybuddion |
| Signal drifft rhagolygon | Ailosod y cyfnod cyfeirio; anwybyddu drifft araf | Pennu'r ffenestr gyfeirio a'i hadolygu ar amserlen |
| Cysylltiad rhagolygon â phenderfyniadau | Dyfynnu rhagolygon mewn log heb effaith ar y penderfyniad | Gofyn beth a newidiodd; samplu cofnodion |

Darlleniad iach yw cyfyngau sy'n cwmpasu'r gyfran a nodir o ganlyniadau heb fod yn hurt o eang, llinellau sylfaen syml y mae dulliau cymhleth yn eu curo o ymyl glir, drifft a sylwir arno ac yr ymchwilir iddo, a rhagolygon sy'n ymddangos mewn penderfyniadau.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Rhagolygon llinell sylfaen syml | Hawdd eu hegluro a'u cynnal; anodd gorffitio | Yn colli patrymau a newidiadau |
| Modelau ystadegol neu ddysgu peirianyddol | Yn dal mwy o batrymau; yn graddio ar draws eitemau | Anodd eu hegluro; drifft; angen monitro a data |
| Rhagolygon pwynt | Hawdd eu cyfathrebu | Cywirdeb ffug; yn gwahodd ymrwymiad |
| Rhagolygon cyfwng | Yn onest am ansicrwydd | Anoddach eu cyfathrebu; gellir eu darllen fel rhai amwys |
| Barn arbenigol | Yn defnyddio cyd-destun nad oes gan fodel | Tueddiadol; anodd ei dracio |

Y casgliad rhyddiaith yw dechrau'n syml, cadw'r log, dangos cyfyngau, ac ychwanegu cymhlethdod dim ond pan fydd yn ennill ei le yn erbyn llinell sylfaen. Gall barn a modelau weithio gyda'i gilydd os caiff y ddau eu logio a'u gwirio.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Beth oedd y rhagolwg diwethaf a wnaethom, a sut y trodd allan?**
Nid yw'r rhan fwyaf o dimau'n gwybod, oherwydd nid yw rhagolygon yn cael eu logio. Gofynnwch am y rhif, y dybiaeth a'r gwir. Sylwch a ddaeth y syndod o'r data neu'r dybiaeth. Dilynwch drwy ddechrau log rhagolygon gyda'r enghraifft honno.

**2. Pa ragolwg yr ydym yn ei drin fel ymrwymiad, a phwy sy'n talu pan fo'n anghywir?**
Chwiliwch am ragolygon a ddaeth yn dargedau, megis dyddiadau cyflawni neu ffigurau cyfaint. Gofynnwch pwy sy'n teimlo pwysau a beth y maent yn ei wneud. Trafodwch ystodau a'r iaith a ddefnyddir i'w cyfathrebu. Dilynwch drwy ailysgrifennu un ymrwymiad fel ystod gyda thybiaethau.

**3. A yw ein model neu offeryn rhagfynegol yn curo "yr un fath â'r cyfnod diwethaf"?**
Gofynnwch am y gymhariaeth, nid honiad y gwerthwr. Yn aml nid oes gan dimau linell sylfaen. Trafodwch sut i gymharu'n deg dros yr un achosion. Dilynwch drwy redeg y llinell sylfaen ochr yn ochr am un chwarter.

**4. Beth mae larwm ffug yn ei gostio i ni, a beth mae methiant i ganfod yn ei gostio?**
Mae hyn yn gosod y cydbwysedd rhwng manwl gywirdeb a galw'n ôl. Gofynnwch am enghreifftiau go iawn. Mae costau'n aml yn wahanol i wahanol bobl, megis peiriannydd ar alwad a chwsmer. Dilynwch drwy gytuno pa wall sy'n bwysicach.

**5. Beth fyddai'n gwneud i'n rhagolygon roi'r gorau i weithio, ac a fyddem yn sylwi?**
Trafodwch newidiadau megis cynnyrch newydd, offeryn newydd, neu ffordd wahanol o gofnodi data. Gofynnwch am y signal a fyddai'n dangos drifft. Dilynwch drwy ychwanegu gwiriad drifft a pherchennog.

**6. Pwy sy'n gweithredu ar ragfynegiad, ac a all ddweud na?**
Ar gyfer eitemau a sgorir, gofynnwch pwy sy'n penderfynu beth sy'n digwydd. Chwiliwch am weithredoedd awtomatig heb ddiystyru. Trafodwch sut yr adroddir gwallau a'u cywiro. Dilynwch drwy ysgrifennu'r rheol diystyru.

## Pedwar safbwynt

### Timau cynnyrch a chyflawni

Rhagolygwch o'ch hanes eich hun a rhowch ystodau. Logiwch ragolygon a'u cymharu â'r gwir, a marciwch y newidiadau sy'n gwneud hanes yn arweiniad gwael, megis offeryn newydd neu newid tîm. Cadwch rifau cynllunio lleol y tîm allan o gymariaethau rhwng timau.

### Timau gwasanaeth a gweithrediadau

Mae rhagolygon galw, capasiti a digwyddiadau yn helpu staffio ac atal. Defnyddiwch hwy i gynllunio, nid i osod cwotâu. Gwyliwch am fodelau rhybuddio sy'n codi sŵn, ac adroddwch bositifau ffug fel y gellir tiwnio modelau.

### Arweinyddiaeth a llywodraethu

Gofynnwch am yr hanes cofnodedig y tu ôl i ragolwg, nid ei werth yn unig, ac am y cyfwng. Osgowch droi rhagolygon yn dargedau i bobl. Ar gyfer modelau rhagfynegol a ddefnyddir mewn gweithrediadau, gofynnwch am y perchennog, y rheol diystyru a'r gwiriad am duedd.

### Cwsmeriaid a defnyddwyr

Rydych yn teimlo effaith rhagolygon fel aros, toriadau a phenderfyniadau a wneir amdanoch. Gofynnwch sut y gwirir rhagfynegiadau sy'n effeithio arnoch a sut y gallwch herio un. Mae eich adroddiadau o ganlyniadau anghywir yn rhan o'r adborth y mae ei angen ar y model.

## Yn ymarferol: enghraifft rheoli gwasanaethau

Mae desg gwasanaeth TG asiantaeth lywodraeth ranbarthol yn rhagweld cyfaint tocynnau wythnosol i gynllunio staffio. Mae'r rhifau yn yr enghraifft hon yn ddarluniadol. Mae offeryn gwerthwr yn cynnig rhagolwg dysgu peirianyddol, ac mae'r rheolwr eisiau gwybod a ddylid ei fabwysiadu.

Mae'r tîm yn dechrau log rhagolygon. Am ddeg wythnos maent yn cofnodi tri rhagolwg ar gyfer pob wythnos: rhagolwg pwynt y gwerthwr, llinell sylfaen naïf (cyfartaledd y pedair wythnos ddiwethaf), ac ystod o wallau diweddar y llinell sylfaen. Wedyn maent yn cyfrifo gwall rhagolwg ar gyfer pob un. Canolrif gwall y gwerthwr yw 11 y cant a chanolrif y llinell sylfaen yw 13 y cant, felly mae'r medr yn erbyn llinell sylfaen yn 15 y cant. Mae 85fed canradd gwall y gwerthwr yn 38 y cant, gyda methiannau mawr mewn wythnosau â chyhoeddiadau gan yr asiantaeth, nad ydynt yn y data y mae'r offeryn yn ei ddefnyddio.

Mae'r tîm yn mabwysiadu rhagolwg y gwerthwr fel un mewnbwn, yn ychwanegu maes ar gyfer digwyddiadau hysbys, ac yn cyhoeddi ystod yn seiliedig ar wallau'r gorffennol. Mae cwmpas cyfwng rhagolwg ar gyfer yr ystod 85 y cant a nodwyd tua 80 y cant dros y deg wythnos, gyda chyfrif bach, felly maent yn ei adrodd gyda'r rhybudd bod deg achos yn ychydig. Maent hefyd yn sefydlu gwiriad drifft sy'n cymharu gwall yr wyth wythnos ddiweddaraf â'r wyth gyntaf.

Mae risg gamio yn ymddangos. Mae arweinydd tîm yn nodi bod y rhagolwg yn cael ei ddefnyddio i osod staffio ac yn awgrymu ychwanegu byffer at y rhagolwg fel bod y tîm yn edrych wedi'i staffio'n dda. Mae'r tîm yn cadw'r rhagolwg yn onest ac yn cofnodi'r byffer staffio fel penderfyniad ar wahân. Yr hyn sy'n parhau'n anodd: mae digwyddiadau na all yr offeryn eu gweld yn dal i achosi methiannau mawr, ac nid yw deg wythnos o ddata yn ddigon i farnu graddnodi. Y cynllun yw adolygu eto ar ôl cyfnod hirach.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Mae cylchoedd cynllunio byr yn gadael i dîm wirio rhagolygon yn aml a'u diwygio gyda rhanddeiliaid. Arfer da yw rhagweld gydag ystodau o drwybwn y tîm ei hun ac adolygu'r hanes cofnodedig yn y sgwrs welliant reolaidd. Y rhybudd yw bod rhagolwg a drinnir fel addewid yn arwain at badio, cuddio neu hollti gwaith.

### AI

Gall modelau dysgu peirianyddol a chynorthwywyr AI gynhyrchu rhagolygon a sgorau risg, gyda golwg o gywirdeb. Cymharwch hwy â llinell sylfaen, cadwch berchennog, gwiriwch raddnodi a chyfraddau positifau ffug a negatifau ffug drwy samplu, a chadwch berson yn atebol am weithredoedd a gymerir ar sgôr (gweler pwnc 10.5, Metrigau llywodraethu a risg AI). Y rhybudd yw y gall rhagolwg a gynhyrchir gan AI roi rhif hyderus heb gyfwng a heb dybiaethau a nodir, felly gofynnwch am y ddau.

### Awtomeiddio

Awtomeiddiwch logio rhagolygon, casglu'r gwir, a chyfrifo gwall a chwmpas, fel bod yr hanes cofnodedig yn adeiladu ei hun. Mesurwch weithredoedd awtomataidd sy'n dilyn rhagfynegiad ar eu gweithredoedd anghywir. Y rhybudd yw bod awtomeiddio sy'n gweithredu ar ragolwg, megis graddio capasiti neu alw, yn gwneud gwallau rhagolwg yn weladwy i ddefnyddwyr, felly ychwanegwch derfynau ac adolygu.

### Dadansoddeg

Dadansoddeg rhagolygon yw'r pwnc hwn: dangoswch wall fel dosbarthiad, cwmpas gyda chyfrifon, a drifft gyda'r ffenestr a ddefnyddiwyd. Y penderfyniad a lywir yw faint i ymddiried mewn rhagolwg a phryd i ddisodli'r dull. Y rhybudd yw bod samplau bach yn rhoi graddnodi ansefydlog, felly nodwch nifer y rhagolygon y tu ôl i bob ffigur (gweler pwnc 10.8, Metrigau dadansoddeg ac ansawdd data).

## Lens sector

**Cwmni newydd.** Mae hanes yn fyr ac mae'r gwasanaeth yn newid yn aml, felly mae rhagolygon yn wan. Defnyddiwch linellau sylfaen syml ac ystodau eang, a chadwch log byr. Osgowch brynu offer rhagolygu cyn bod data.

**Busnes bach.** Mae tymhorolrwydd ac ychydig o gwsmeriaid mawr yn dominyddu. Defnyddiwch yr un cyfnod y llynedd fel llinell sylfaen, a nodwch ddigwyddiadau sy'n torri'r patrwm. Byddwch yn ofalus gyda rhagolygon gwerthwyr sy'n honni cywirdeb.

**Menter.** Mae angen log a diffiniadau cyffredin ar lawer o ragolygon ar draws timau. Cymharwch ddulliau yn deg ar draws timau ac osgowch raddio timau yn ôl cywirdeb rhagolygon. Adolygwch fodelau am ddrifft ar amserlen.

**Llywodraeth a'r sector cyhoeddus.** Mae rhagolygon yn aml yn cefnogi penderfyniadau cyllideb a staffio sy'n gyhoeddus. Dogfennwch ddulliau a thybiaethau, a gwiriwch reolau ar gyfer penderfyniadau awtomataidd sy'n effeithio ar bobl. Cynlluniwch ar gyfer digwyddiadau allanol megis newidiadau polisi sy'n torri'r data (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Achos busnes: cymhellion, ROI a TCO

Y costau yw gwaith data, logio rhagolygon, offer ar gyfer modelu os y'u defnyddir, amser adolygu, a monitro modelau am ddrifft. Mae dechrau gyda log a llinell sylfaen naïf yn costio ychydig iawn.

Yr elw yw cynllunio gwell: capasiti sy'n cyrraedd cyn yr angen, staffio sy'n cyfateb i'r galw, a llai o bethau annisgwyl. Mae'n anodd ei briodoli, felly osgowch hawlio ffigur. Cymharwch gost a gwall dull rhagolygu â'r llinell sylfaen dros amser, a nodwch y tybiaethau fel ystodau (gweler pwnc 7.7, Elw ar fuddsoddiad ac achos busnes). Ochr y risg yw cost gorddibyniaeth ar fodel sydd wedi drifftio, a phenderfyniadau a wneir ar gywirdeb ffug.

## Gwrth-batrymau a thrapiau

- **Rhagolygon un rhif a drinnir fel addewidion.** Maent yn cynhyrchu padio a beio. Cyhoeddwch ystodau gyda thybiaethau.
- **Dim log rhagolygon.** Nid oes ffordd o ddysgu. Cofnodwch ragolygon a'r gwir.
- **Prynu model heb linell sylfaen.** Nid yw'r budd yn hysbys. Cymharwch â "yr un fath â'r cyfnod diwethaf".
- **Barnu cywirdeb ar y data hyfforddi.** Mae'n gwenieithu i'r model. Gwerthuswch ar ddata diweddarach.
- **Anwybyddu positifau ffug.** Mae rhagfynegiadau swnllyd yn hyfforddi pobl i'w hanwybyddu. Adroddwch fanwl gywirdeb a galw'n ôl.
- **Rhagolygon fel targedau i bobl.** Maent yn ystumio'r data. Defnyddiwch hwy ar gyfer cynllunio.
- **Dim gwiriad drifft.** Mae modelau'n dadfeilio'n dawel. Monitrwch wall dros amser.
- **Rhagfynegiadau heb berchennog dynol.** Nid oes neb i ateb dros weithredoedd anghywir. Enwch berchennog a rheol diystyru.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cyd-drefnu |
| --- | --- | --- | --- | --- | --- |
| Arfer rhagolygu | Rhifau unigol; dim cofnod | Rhai ystodau; nodiadau anffurfiol | Log rhagolygon gydag ystodau, tybiaethau a'r gwir | Cymharu gwall, cwmpas a llinell sylfaen ar rythm | Gwella rhagolygon a dulliau drwy arbrofion a'u rhannu ar draws timau |
| Modelau rhagfynegol | Derbyn honiadau gwerthwyr | Peilot wedi'i gymharu â llinell sylfaen | Perchennog, gwerthuso a rheol diystyru fesul model | Monitro drifft, manwl gywirdeb a galw'n ôl | Rheoli cylch bywyd model gyda goruchwyliaeth ac ymddeol |
| Defnydd mewn penderfyniadau | Rhagolygon fel ymrwymiadau | Dangos rhagolygon i wneuthurwyr penderfyniadau | Rhagolygon wedi'u cysylltu â phenderfyniadau mewn log | Adolygu penderfyniadau yn erbyn canlyniadau rhagolygon | Penderfyniadau'n addasu i ansicrwydd rhagolygon |

## Rhestr wirio

- [ ] Mae log rhagolygon yn cofnodi maint, gwerth neu ystod, dyddiad, dull a thybiaethau.
- [ ] Ychwanegir y gwir ac adroddir gwall rhagolwg fel dosbarthiad.
- [ ] Rhedir llinell sylfaen syml ochr yn ochr ag unrhyw ragolwg cymhleth.
- [ ] Adroddir cwmpas cyfwng gyda lled y cyfwng a nifer yr achosion.
- [ ] Mae rhybuddion rhagfynegol yn adrodd manwl gywirdeb a galw'n ôl yn erbyn diffiniad digwyddiad sefydlog.
- [ ] Gwirir drifft yn erbyn ffenestr gyfeirio sefydlog.
- [ ] Mae gan bob model rhagfynegol berchennog, rheol diystyru a dyddiad adolygu.
- [ ] Cysylltir rhagolygon â phenderfyniadau mewn log penderfyniadau.
- [ ] Ni ddefnyddir rhagolygon fel targedau unigol.
- [ ] Mae gan bob metrig fector gamio a chanllaw amddiffynnol a ddangosir wrth ei ymyl.

## Anogion AI

**Dylunio log rhagolygon a llinell sylfaen.**

```text
Rydym yn rhagweld [maint] ar gyfer [diben]. Ein data yw [disgrifiad o'r hanes a'r
ffynhonnell]. Cynigiwch log rhagolygon gyda meysydd, dull llinell sylfaen syml,
a sut i gyfrifo gwall a chwmpas cyfwng yn nes ymlaen. Peidiwch â dyfeisio
cywirdeb disgwyliedig. Marciwch dybiaethau, a rhestrwch gwestiynau y dylwn eu
hateb am y data.
```

**Gwerthuso dull rhagolygu yn erbyn llinell sylfaen.**

```text
Isod mae rhagolygon a logiwyd a'r gwir ar gyfer [cyfnod]: [gludwch ddata heb
wybodaeth bersonol], gyda rhagolwg llinell sylfaen ochr yn ochr. Cyfrifwch
ganolrif a 85fed canradd y gwall canran absoliwt ar gyfer pob un, cwmpas cyfwng
os rhoddir cyfyngau, a'r medr yn erbyn y llinell sylfaen. Peidiwch ag
allosod y tu hwnt i'r data. Nodwch nifer yr achosion, dywedwch yr hyn na allech
ei farnu, a rhestrwch eich tybiaethau.
```

**Adolygu goruchwyliaeth model rhagfynegol.**

```text
Rydym yn defnyddio model sy'n [disgrifio'r hyn y mae'n ei ragfynegi a'r weithred
sy'n dilyn]. Drafftiwch adolygiad o'i oruchwyliaeth: perchennog, tystiolaeth
werthuso y dylem ofyn amdani, sut yr adroddir gwallau, y rheol diystyru,
gwiriadau drifft, a chwestiynau am duedd. Peidiwch â gwneud honiadau am
ofynion cyfreithiol; rhestrwch gwestiynau ar gyfer ein cynghorydd cyfreithiol.
Marciwch dybiaethau.
```

**Adolygu risg gamio y mesurau rhagolygu.**

```text
Rydym yn adrodd y mesurau rhagolygu hyn: [gludwch fesurau a diffiniadau].
Cyd-destun: [maint y tîm, offer, cynulleidfa]. Ar gyfer pob mesur, rhestrwch
ffyrdd realistig y gallai edrych yn well heb wella rhagolygon, cynigiwch
ganllaw amddiffynnol, a dywedwch sut y gellid camio'r canllaw hwnnw. Peidiwch â
dyfeisio gwerthoedd meincnod. Rhestrwch eich tybiaethau.
```

## Sgiliau AI

- [Rhagolygu galw](../../../../skills/demand-forecasting/SKILL.md): defnyddiwch i adeiladu a gwirio rhagolwg galw gydag ystodau.
- [Dadansoddi tueddiadau](../../../../skills/trend-analysis/SKILL.md): defnyddiwch i archwilio tueddiadau a newidiadau cyn rhagolygu.
- [Cerdyn model dysgu peirianyddol](../../../../skills/machine-learning-model-card/SKILL.md): defnyddiwch i ddogfennu pwrpas, data a therfynau model rhagfynegol.
- [Sgil Service Management Metrics](../../../../skills/service-management-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc sy'n trafod metrig a'i ganllaw amddiffynnol pâr.

## Prif bwyntiau

- Ystod â hanes cofnodedig yw rhagolwg, felly logiwch ragolygon a'u cymharu â'r gwir.
- Cymharwch unrhyw fodel â llinell sylfaen syml, a chadwch yr un cymhleth dim ond os yw'n ei churo'n glir.
- Gwiriwch gwmpas cyfwng a graddnodi gyda nifer yr achosion y tu ôl iddynt.
- Dewiswch fanwl gywirdeb neu alw'n ôl yn ôl cost larwm ffug a methiant i ganfod.
- Peidiwch â throi rhagolygon yn dargedau i bobl, a chadwch berson yn atebol am weithredoedd a gymerir ar ragfynegiad.

## Cyfeiriadau a darllen pellach

1. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
2. Wikipedia, [Prediction interval](https://en.wikipedia.org/wiki/Prediction_interval).
3. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
4. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
5. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
6. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
7. Hyndman, R. J., and Athanasopoulos, G., *Forecasting: Principles and Practice*, 3rd edition, OTexts, 2021, https://otexts.com/fpp3/
