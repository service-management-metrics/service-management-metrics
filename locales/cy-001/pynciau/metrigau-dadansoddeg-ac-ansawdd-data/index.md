# Metrigau dadansoddeg ac ansawdd data

**Dim ond mor ddibynadwy â'r data a'r dadansoddi y tu ôl iddo yw pob rhif yn y llyfr hwn, felly mesurwch ansawdd y data, cadernid y dadansoddi a'r defnydd o'r canlyniad mewn penderfyniad, a dywedwch bob amser beth na all rhif ei ddangos.**

## Trosolwg a chymhelliant

[Dadansoddeg](https://en.wikipedia.org/wiki/Analytics) yw defnyddio data ac ystadegau i ateb cwestiynau a llywio penderfyniadau. Mewn rheoli gwasanaethau mae'n amrywio o gyfrif wythnosol syml o docynnau i fodelau sy'n rhagfynegi pa newidiadau fydd yn methu. Dadansoddeg yw pedwaredd lens y llyfr hwn, ochr yn ochr ag ymarfer ystwyth, AI ac awtomeiddio, a hi hefyd yw'r hyn y mae'r tair lens arall yn dibynnu arno. Mae dangosfwrdd a adeiladwyd ar [ansawdd data](https://en.wikipedia.org/wiki/Data_quality) gwael yn rhoi atebion hyderus i'r cwestiynau anghywir.

Set o briodweddau yw ansawdd data: a yw data'n gyflawn, yn gywir, yn gyson, yn amserol, yn unigryw ac yn ddilys. Trafododd pynciau cynharach o ble mae data gwasanaeth yn dod a sut i'w ddarllen (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth, a phwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth). Mae'r pwnc hwn yn troi'r syniadau hynny'n fesurau y gall tîm eu tracio am ei ddata a'i ddadansoddi ei hun, yn yr un modd ag y mae Rhan 4 yn mesur newid. Mae hefyd yn trafod dadansoddeg fel arfer: y cwestiynau a ofynnir, y dulliau a ddefnyddir, pwy sy'n eu gwirio, ac a newidiodd y canlyniad benderfyniad.

Mae dadansoddeg yn ddeniadol oherwydd ei bod yn graddio. Gall un dadansoddwr wasanaethu llawer o dimau, a gall un model sgorio pob tocyn. Mae'r un raddfa yn mwyhau camgymeriadau. Mae diffiniad a gamddarllenwyd mewn set ddata a rennir yn lledaenu i bob adroddiad a adeiladwyd arni, a gall model a hyfforddwyd ar ymddygiad y gorffennol ailadrodd hen duedd yn gyflym. Mae offer AI sy'n ysgrifennu ymholiadau, siartiau a chrynodebau yn gwneud dadansoddi'n rhatach a hefyd yn ei gwneud yn haws cynhyrchu gwallau gyda hyder, felly mae gwirio'n bwysicach.

Termau a ddefnyddir yma. **Set ddata** yw casgliad diffiniedig o gofnodion, megis tocynnau neu ddefnyddiadau. **Llinach** yw'r cofnod o ble y daeth data a'r hyn a wnaed iddo. Mae **cysoni** yn cymharu dwy ffynhonnell a ddylai gytuno. Mae **contract data** yn gytundeb rhwng cynhyrchydd a defnyddwyr set ddata ynghylch ei strwythur, ei ystyr a'i hansawdd. Cwestiwn, dull a chanlyniad yw **dadansoddiad**. **Ansicrwydd** yw'r ystod y gall gwerth orwedd ynddi, o ystyried y data a'r dull. Mae **log penderfyniadau** yn cofnodi'r penderfyniadau y llywiodd rhif.

## Egwyddorion allweddol

- **Dechreuwch o'r cwestiwn a'r penderfyniad.** Mae dadansoddiad heb benderfyniad ynghlwm wrtho yn orbenion.
- **Mesurwch y data am y data.** Mae cyflawnrwydd, amseroldeb a chysoni yn fesurau y gall tîm fod yn berchen arnynt.
- **Cadwch linach.** Ni ellir cywiro rhif na allwch ei olrhain at ei ffynhonnell.
- **Nodwch ansicrwydd a therfynau.** Dangoswch y cyfrif y tu ôl i gyfradd a dywedwch beth na all y rhif ei ddangos.
- **Gwiriwch ddadansoddi fel cod.** Adolygwch ddiffiniadau ac ymholiadau, a'u cadw mewn rheoli fersiynau.
- **Gwarchodwch bobl.** Mae dadansoddeg ar ymddygiad pobl angen terfynau preifatrwydd, ac mae canlyniadau'n disgrifio timau a gwasanaethau.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cymar ystwyth | Amlder |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyflawnrwydd meysydd gofynnol | Cyfran y cofnodion â'r holl feysydd sydd eu hangen ar gyfer y metrigau sy'n eu defnyddio | cofnodion â phob maes gofynnol yn bresennol ac yn ddilys / cofnodion o fewn cwmpas | canran | Echdyniadau systemau ffynhonnell a gwiriadau ansawdd data | Mesur ac adrodd; rheoli gwybodaeth | Diffiniad o orffen ar gyfer cofnodion | Misol |
| Ffresni data | Oedran y data diweddaraf mewn set ddata ar yr adeg y darllenir adroddiad | canolrif ac uchafswm (amser darllen adroddiad minws amser y cofnod diweddaraf a lwythwyd) ar draws setiau data | oriau | Logiau piblinellau a metadata setiau data | Mesur ac adrodd | Adborth cyflym | Wythnosol |
| Amrywiant cysoni | Y gwahaniaeth rhwng dwy ffynhonnell a ddylai gytuno ar yr un maint | gwahaniaeth absoliwt rhwng ffynhonnell A a ffynhonnell B / ffynhonnell A, ar gyfer sampl a nodir o feintiau a chyfnod | canran | Dwy system ffynhonnell | Mesur ac adrodd; rheoli ariannol | Cytundebau gweithio ar ddiffiniadau | Chwarterol |
| Cwmpas llinach | Cyfran y metrigau a adroddir y mae eu ffynhonnell, eu trawsnewidiadau a'u perchennog wedi'u dogfennu | metrigau yn y gofrestr â llinach wedi'i dogfennu / metrigau a adroddwyd | canran | Cofrestr metrigau a chatalog data | Llywodraethu | Cytundebau tîm | Chwarterol |
| Cyfradd methu rhediadau piblinell | Cyfran y rhediadau piblinell data sy'n methu neu'n llwytho data anghyflawn | rhediadau piblinell data a fethodd neu a lwythodd ddata anghyflawn / rhediadau a ddechreuwyd | canran | Logiau piblinellau data | Mesur ac adrodd | Integreiddio parhaus ar gyfer data | Wythnosol |
| Cyfradd adolygu dadansoddi | Cyfran y darnau dadansoddi a gyhoeddwyd a adolygwyd gan ail berson cyn eu defnyddio | darnau dadansoddi â adolygiad cofnodedig / darnau dadansoddi a gyhoeddwyd i gynulleidfa sy'n gwneud penderfyniadau | canran | Cofrestr dadansoddi a log adolygu | Mesur ac adrodd; gwelliant parhaus | Adolygiad cymheiriaid | Chwarterol |
| Cyfradd defnyddio mewn penderfyniadau | Cyfran y metrigau a adroddir a ddyfynnwyd mewn penderfyniad cofnodedig yn y cyfnod | metrigau a ddyfynnwyd mewn cofnod log penderfyniadau / metrigau a adroddwyd | canran | Log penderfyniadau a chofrestr metrigau | Gwelliant parhaus | Camau gweithredu ôl-sylliad | Chwarterol |

Mae cyflawnrwydd yn cyfrif maes fel un sy'n bresennol dim ond os yw'n cynnwys gwerth dilys, felly nid yw dalfan megis "amherthnasol" yn cyfrif. Mae amrywiant cysoni yn berthnasol i sampl a enwir o feintiau, megis cyfrifon tocynnau am fis, ac yn datgan y sampl.

## Argymhellion

### Gwneud ansawdd data yn weladwy

**1. Diffiniwch ansawdd data yn nhermau'r metrigau.** Rhestrwch y meysydd a'r stampiau amser y mae eich metrigau pwysicaf yn dibynnu arnynt, a diffiniwch sut olwg sydd ar ddilys i bob un. Gwiriwch y rhain yn gyntaf, gan fod stamp amser coll yn torri mesur amser.

**2. Gwiriwch yn y ffynhonnell, ac nid yn yr adroddiad yn unig.** Mae gwiriad ansawdd a gynhelir pan greir data, megis maes gofynnol yn ffurflen y tocyn, yn atal gwallau na all unrhyw lanhau diweddarach eu hatgyweirio'n llawn. Ychwanegwch wiriadau pan lwythir data hefyd.

**3. Cyhoeddwch ansawdd wrth ymyl y rhifau.** Dangoswch gyflawnrwydd a ffresni ar y dangosfwrdd sy'n dangos y metrig. Dylai darllenydd weld ansawdd y data heb ofyn.

**4. Cysonwch ar amserlen.** Cymharwch o leiaf un maint ar draws dwy system bob chwarter, megis nifer y newidiadau yn y cofnod newid ac yn y biblinell. Ymchwiliwch i wahaniaethau a'u hegluro, a chofnodwch y canfyddiad.

### Cadw dadansoddi'n onest

**5. Ysgrifennwch y cwestiwn a'r penderfyniad yn gyntaf.** Cyn dadansoddi, cofnodwch y cwestiwn, y penderfyniad y mae'n ei lywio, a phwy fydd yn penderfynu. Pan fo'r penderfyniad wedi mynd heibio, cofnodwch beth a benderfynwyd.

**6. Cadwch linach a diffiniadau mewn un gofrestr.** Cysylltwch bob metrig â'i ffynhonnell, ei drawsnewidiad, ei berchennog a'i ddyddiad adolygu (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau). Logir newidiadau i ddiffiniadau gyda rhesymau a'u marcio ar siartiau.

**7. Adolygwch bob darn o ddadansoddi.** Mae ail berson yn gwirio diffiniadau, ymholiadau a chasgliadau ar gyfer unrhyw ddadansoddiad a ddefnyddir mewn penderfyniad. Cadwch ymholiadau mewn rheoli fersiynau fel y gellir eu hailredeg.

**8. Nodwch ansicrwydd a therfynau.** Dangoswch nifer yr eitemau y tu ôl i bob cyfradd, cyfyngau lle maent yn bwysig, a'r hyn na all y dadansoddiad ei ddangos. Osgowch gywirdeb un rhif lle nad yw'r data'n ei gefnogi.

### Llywodraethu defnydd

**9. Defnyddiwch gontractau data ar gyfer setiau data a rennir.** Mae'r tîm sy'n cynhyrchu set ddata yn datgan ei hystyr, ei meysydd, ei ffresni a'i phroblemau hysbys, ac yn dweud wrth ddefnyddwyr pan fydd yn newid. Mae newidiadau sy'n torri pethau angen rhybudd.

**10. Gwarchodwch bobl yn y data.** Penderfynwch pwy a gaiff weld cofnodion crai, am ba mor hir y cedwir data, a beth yw'r isafswm maint grŵp ar gyfer adroddiadau. Cadwch ddadansoddeg ar lefel tîm a gwasanaeth, a gwiriwch y rheolau preifatrwydd sy'n berthnasol i chi.

**11. Ymddeolwch adroddiadau a setiau data.** Mae adroddiad nad oes neb yn ei ddefnyddio yn dal i gostio cynnal a chadw a gall gamarwain. Adolygwch ddefnydd ac ymddeolwch yr hyn na ddyfynnir mewn penderfyniadau.

**12. Trinwch ddadansoddi â chymorth AI fel un heb ei adolygu hyd nes y'i gwirir.** Gall offer AI ysgrifennu ymholiad neu grynodeb sy'n edrych yn gywir ac sy'n anghywir. Adolygwch yr ymholiad, ailrediwch ar sampl fach hysbys, a chofnodwch iddo gael ei wirio.

## Fectorau gamio a chanllawiau amddiffynnol

| Metrig | Sut mae'n cael ei gamio | Metrig neu arfer canllaw amddiffynnol pâr |
| --- | --- | --- |
| Cyflawnrwydd meysydd gofynnol | Llenwi meysydd â dalfeini neu ddiofyniadau; gwneud meysydd yn ddewisol | Gwiriadau dilysrwydd ar gynnwys; samplu cofnodion am werthoedd go iawn |
| Ffresni data | Stampio amser llwythi yn hytrach na digwyddiadau; llwytho diweddariadau gwag | Gwirio amser digwyddiad yn erbyn amser llwytho; cyfrif rhesi fesul llwyth |
| Amrywiant cysoni | Dewis meintiau sy'n digwydd cytuno; addasu un ffynhonnell i gyfateb | Cylchdroi meintiau; cadw llwybr archwilio o addasiadau |
| Cwmpas llinach | Dogfennu llinach yn arwynebol; copïo testun rhwng cofnodion | Samplu cofnodion ac olrhain un metrig o un pen i'r llall |
| Cyfradd methu rhediadau piblinell | Marcio rhediadau a fethodd fel rhai a ailgynigiwyd neu a lwyddodd; dileu logiau | Cymharu cyfrif cofnodion â'r ffynhonnell; rhybuddio ar fylchau |
| Cyfradd adolygu dadansoddi | Adolygiadau stamp rwber; adolygu ar ôl y penderfyniad | Gwirio nodiadau adolygwyr; mynnu adolygiad cyn defnyddio |
| Cyfradd defnyddio mewn penderfyniadau | Dyfynnu metrigau mewn log heb effaith ar y penderfyniad | Gofyn beth a newidiodd; samplu cofnodion |

Darlleniad iach yw ffigurau ansawdd data sy'n weladwy ac yn sefydlog, gwahaniaethau rhwng ffynonellau sy'n cael eu hegluro, dadansoddi sy'n cael ei adolygu cyn ei ddefnyddio, a metrigau sy'n dod ac yn mynd fel y mae penderfyniadau eu hangen.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Dilysu data caeth wrth fewnbynnu | Yn atal gwallau'n gynnar | Ffrithiant i ddefnyddwyr; cofnodion dalfan |
| Glanhau data wedyn | Hyblyg; nid yw'n arafu defnyddwyr | Yn cuddio'r achos; mae gwallau'n aros mewn rhai adroddiadau |
| Tîm dadansoddeg canolog | Dulliau ac ansawdd cyson | Tagfa; pellter oddi wrth y gwaith |
| Dadansoddeg hunanwasanaeth gan dimau | Cyflym; agos at y gwaith | Diffiniadau anghyson; ansawdd anwastad |
| Dadansoddi â chymorth AI | Drafftiau cyflym; yn gostwng y rhwystr | Gwallau hyderus; atgynhyrchedd gwan |

Y casgliad rhyddiaith yw atal gwallau yn y ffynhonnell, rhannu diffiniadau a llinach mewn un lle, a mynnu adolygiad ar gyfer unrhyw ddadansoddiad sy'n llywio penderfyniad. Mae cyflymder o hunanwasanaeth ac AI i'w groesawu pan fo gwirio'n cadw i fyny.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa dri rhif ar ein dangosfwrdd fyddai'n peri'r edifeirwch mwyaf i ni pe bai'r data oddi tanynt yn anghywir?**
Dechreuwch gyda'r rhifau sy'n gyrru penderfyniadau neu dargedau. Gofynnwch ar beth y mae'r data'n dibynnu, a phwy sy'n berchen ar y ffynhonnell. Mae pobl yn aml yn darganfod bod rhif allweddol yn dibynnu ar faes a fewnbynnir â llaw. Dilynwch drwy ddewis un i'w wirio y mis hwn.

**2. Pryd y bu i ddau adroddiad anghytuno, a sut y datryswyd hynny?**
Mae straeon am rifau sy'n gwrthdaro yn dangos ble mae diffiniadau'n wahanol. Gofynnwch a gofnodwyd y datrysiad ac a drwsiwyd yr achos. Dylai'r hwylusydd nodi achosion sy'n ailadrodd, megis gwahanol barthau amser neu ddiffiniadau statws. Dilynwch drwy gytuno ar un diffiniad a pherchennog.

**3. Pa mor hen yw'r data yn yr adroddiad yr edrychwn arno amlaf?**
Nid yw llawer o bobl yn gwybod. Gofynnwch sut y dangosir ffresni ac a fyddai llwyth hen yn cael ei sylwi. Trafodwch gost penderfyniad hen ffasiwn. Dilynwch drwy ychwanegu ffresni at yr adroddiad.

**4. Pwy adolygodd y dadansoddiad diwethaf a newidiodd benderfyniad?**
Chwiliwch am ail bâr o lygaid ar ddiffiniadau ac ymholiadau. Os nad oes un, trafodwch pam. Gofynnwch pa adolygiad fyddai'n gymesur. Dilynwch drwy ddewis cam adolygu syml ar gyfer unrhyw ddadansoddiad sy'n llywio penderfyniad pwysig.

**5. Beth na all ein metrig a ddefnyddir fwyaf ei ddweud wrthym?**
Enwi terfynau yw arfer dadansoddeg a wneir yn dda. Gofynnwch am fannau dall penodol, megis defnyddwyr nad ydynt yn cysylltu â chymorth. Cofnodwch y terfynau wrth ymyl y metrig. Dilynwch drwy ychwanegu mesur sy'n cwmpasu man dall.

**6. Sut ydym yn defnyddio offer AI i ysgrifennu ymholiadau a chrynodebau, a sut ydym yn eu gwirio?**
Gofynnwch am yr arfer gwirioneddol, nid y polisi. Gwrandewch am allbwn heb ei adolygu a ddefnyddir mewn adroddiadau. Trafodwch wiriad syml, megis ailredeg ar sampl hysbys. Dilynwch drwy gytuno ar reol ar gyfer dadansoddi â chymorth AI.

## Pedwar safbwynt

### Timau cynnyrch a chyflawni

Mae eich offer yn cynhyrchu llawer o'r data y mae eraill yn ei ddadansoddi. Cadwch stampiau amser, dynodwyr a statysau yn ddibynadwy, a dywedwch wrth ddefnyddwyr data pan fydd maes yn newid. Cynhwyswch ansawdd data yn y diffiniad o orffen ar gyfer nodweddion newydd sy'n cynhyrchu data.

### Timau gwasanaeth a gweithrediadau

Mae data tocynnau'n dibynnu ar sut mae pobl yn llenwi ffurflenni dan bwysau. Gwnewch y mewnbwn cywir yr un hawdd, gwiriwch ansawdd data yn yr offeryn, a lleisiwch eich barn pan fydd metrig yn camddarllen y gwaith. Peidiwch â rhoi dyddiad blaenorol ar gofnodion na'u diweddaru mewn swp i wella rhif.

### Arweinyddiaeth a llywodraethu

Gofynnwch am ansawdd data a llinach wrth ymyl unrhyw rif sy'n cefnogi penderfyniad neu darged. Ariennwch beirianneg data ac amser adolygu, ac nid dangosfyrddau yn unig. Gwarchodwch breifatrwydd, ac osgowch ddefnyddio dadansoddeg ar unigolion i werthuso pobl.

### Cwsmeriaid a defnyddwyr

Mae data amdanoch chi yn gyrru sut mae'r gwasanaeth yn eich trin, felly gofynnwch beth a gesglir a sut y caiff ei ddefnyddio. Lle mae eich adborth yn y data, megis ymatebion arolwg, gofynnwch sut y caiff ei warchod a sut y cyrhaeddodd benderfyniad.

## Yn ymarferol: enghraifft rheoli gwasanaethau

Mae adran TG cwmni cyfleustodau rhanbarthol yn adeiladu dangosfwrdd o amser datrys digwyddiadau a chyfradd methu newid ar gyfer ei thîm gweithredol. Mae'r rhifau yn yr enghraifft hon yn ddarluniadol. Mae'r dangosfwrdd yn dangos canolrif amser datrys o 3.1 awr a chyfradd methu newid o 4 y cant.

Mae dadansoddwr yn gwirio ansawdd cyn lansio. Mae cyflawnrwydd meysydd gofynnol ar gyfer y stamp amser datrys yn 91 y cant, a'r cofnodion coll yn ddigwyddiadau mawr a fewnbynnwyd wedi'r digwyddiad yn bennaf. Mae ffresni yn 26 awr, am fod yr echdyniad yn rhedeg dros nos. Mae cysoni'r cofnod newid â'r biblinell yn dangos 8 y cant yn fwy o newidiadau cynhyrchu yn y biblinell nag yn y cofnod newid, felly mae gan y gyfradd methu broblem enwadur.

Mae'r tîm yn gwneud newidiadau. Mae ffurflen y tocyn yn mynnu'r amser datrys ac yn gwirio ei fod yn hwyrach na'r amser agor. Mae'r dangosfwrdd yn dangos nifer y digwyddiadau y tu ôl i bob ffigur, oedran y data, a chyflawnrwydd y meysydd a ddefnyddir. Mae contract data yn datgan mai'r cofnod newid yw'r system gofnod ar gyfer newidiadau cymeradwy a'r biblinell ar gyfer defnyddiadau, gyda chysoni misol. Mae'r cysoni cyntaf yn egluro'r bwlch fel newidiadau brys a gofnodwyd yn y biblinell yn unig.

Mae risg gamio yn ymddangos pan fydd rheolwr yn awgrymu eithrio digwyddiadau heb amseroedd datrys i wella cyflawnrwydd. Mae'r tîm yn gwrthod ac yn trwsio'r mewnbwn. Y canlyniad yw cyfwng canolrif ehangach a chyfradd methu newid o 6 y cant. Mae'r log penderfyniadau yn cofnodi i'r tîm gweithredol ddewis aros chwarter cyn gosod targed. Yr hyn sy'n parhau'n anodd: ni ellir canfod pob cofnod â dyddiad blaenorol, ac mae'r cysoni yn dibynnu ar gyswllt dynodwr â llaw.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Mae dolenni adborth byr yn helpu ansawdd data: trwsio'r ffurflen, gwirio data'r diwrnod wedyn, a gofyn i'r defnyddwyr. Arfer da yw adolygu ffigurau ansawdd data yn y sgwrs welliant reolaidd gyda'r bobl sy'n mewnbynnu'r data. Y rhybudd yw bod newidiadau parhaus i feysydd a statysau yn torri tueddiadau, felly logiwch bob newid diffiniad.

### AI

Gall AI ysgrifennu ymholiadau, drafftio siartiau, crynhoi sylwadau a fflagio anghysondebau, a gall hefyd ddyfeisio canlyniadau credadwy. Trinwch ddadansoddi â chymorth AI fel un heb ei adolygu hyd nes y bydd person yn gwirio'r ymholiad ac yn ei ailredeg ar sampl fach hysbys, a chofnodwch iddo gael ei wirio. Y rhybudd yw y gall crynodebau AI o sylwadau arolwg gamddarllen iaith a thôn, felly darllenwch sampl o'r gwreiddiol.

### Awtomeiddio

Awtomeiddiwch wiriadau ansawdd data wrth lwytho ac wrth adrodd, a mesurwch y piblinellau ar fethiannau a bylchau. Rhybuddiwch ar lwythi coll a newidiadau sydyn mewn cyfaint. Y rhybudd yw y gall rheolau glanhau awtomataidd guddio problem ffynhonnell, felly adroddwch yr hyn a newidiwyd a pham.

### Dadansoddeg

Mae'r pwnc hwn yn ymwneud â dadansoddeg, felly yr arfer yw nodyn byr ar bob metrig: ei gwestiwn, ei benderfyniad, ei linach, ei ansawdd a'i derfynau. Y penderfyniad a lywir yw a ydych yn ymddiried mewn rhif ddigon i weithredu arno. Y rhybudd yw y gall dangosfyrddau sy'n edrych yn lân eistedd ar ddata gwan, felly dangoswch y ffigurau ansawdd wrth ymyl y canlyniad a chadwch ddiffiniadau Service Management Metrics mewn un gofrestr.

## Lens sector

**Cwmni newydd.** Mae data'n fach ac yn newid. Cadwch un ffynhonnell wirionedd i bob metrig, ysgrifennwch ddiffiniadau mewn dogfen fer, ac osgowch adeiladu llwyfan data cyn i'r cwestiynau fod yn glir.

**Busnes bach.** Gall data fyw mewn offeryn a gynhelir gydag adroddiadau sefydlog. Gwiriwch sut mae'r offeryn yn diffinio pob mesur, allforiwch samplau i'w gwirio, a chadwch restr fer o'r hyn na all yr adroddiadau ei ddangos.

**Menter.** Mae llawer o ffynonellau a thimau yn creu diffiniadau sy'n gwrthdaro. Defnyddiwch gofrestr metrigau a rennir, contractau data a chysoni rheolaidd, a rhowch y modd i dimau wirio eu data eu hunain.

**Llywodraeth a'r sector cyhoeddus.** Gall cofnodion fod yn destun rheolau cadw, mynediad ac adrodd cyhoeddus. Dogfennwch linach ar gyfer unrhyw ffigur a gyhoeddir, a chadwch reolau preifatrwydd ar gyfer data am bobl (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Achos busnes: cymhellion, ROI a TCO

Y gost yw amser staff ar gyfer gwiriadau ansawdd data, cysoni, dogfennaeth ac adolygu, ynghyd ag offer ar gyfer piblinellau data a chatalogau lle y'u defnyddir. Gall llawer ohoni ddechrau gyda chamau bach, megis dilysu yn ffurflen y tocyn.

Yr elw yw penderfyniadau a wneir ar rifau gwell, llai o amser a dreulir yn dadlau pa adroddiad sy'n gywir, a llai o ailwampio pan geir rhif a gamddarllenwyd yn hwyr. Disgrifiwch ef fel patrwm, nid fel ffigur: llai o benderfyniadau a wrthdröwyd a llai o anghydfodau. Os oes angen rhifau arnoch ar gyfer achos, mesurwch eich llinellau sylfaen eich hun, megis amrywiant cysoni a'r amser a dreulir yn datrys anghydfodau adroddiadau, cyn ac ar ôl y newid (gweler pwnc 7.7, Elw ar fuddsoddiad ac achos busnes).

## Gwrth-batrymau a thrapiau

- **Glanhau yn yr adroddiad yn unig.** Mae'r ffynhonnell yn parhau i gynhyrchu gwallau. Trwsiwch wiriadau mewnbynnu a llwytho.
- **Dangosfyrddau heb ffigurau ansawdd.** Ni all darllenwyr farnu'r rhif. Dangoswch gyflawnrwydd, ffresni a chyfrifon.
- **Diffiniadau heb eu dogfennu.** Mae rhifau'n newid ystyr yn dawel. Cadwch linach a log newidiadau.
- **Dadansoddi heb ei adolygu.** Mae gwallau'n cyrraedd penderfyniadau. Mynnwch olwg ail.
- **Ymddiried mewn crynodebau AI.** Gallant fod yn rhugl ac yn anghywir. Gwiriwch ymholiadau a samplwch y gwreiddiol.
- **Dadansoddeg ar unigolion.** Mae'n troi'n wyliadwriaeth ac yn llygru data. Adroddwch ar lefel tîm gydag isafswm maint grŵp.
- **Peidio byth ag ymddeol adroddiadau.** Maent yn crynhoi ac yn camarwain. Adolygwch ddefnydd a thynnwch.
- **Rhifau unigol heb ansicrwydd.** Maent yn gwahodd gorymateb. Dangoswch gyfrifon ac ystodau.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cyd-drefnu |
| --- | --- | --- | --- | --- | --- |
| Ansawdd data | Ansawdd anhysbys; taenlenni â llaw | Gwirio cyflawnrwydd ar gyfer meysydd allweddol | Gwiriadau ansawdd wrth fewnbynnu a llwytho, a ddangosir ar adroddiadau | Adolygu cysoni a thueddiadau ansawdd ar rythm | Rheoli ansawdd gyda chontractau data ar draws timau |
| Llinach a diffiniadau | Diffiniadau ym mhennau pobl | Rhai diffiniadau wedi'u hysgrifennu | Cofrestr gyda ffynhonnell, perchennog a log newidiadau | Llinach wedi'i holrhain o un pen i'r llall ar gyfer metrigau allweddol | Diffiniadau a rennir ar draws timau a chyflenwyr |
| Arfer dadansoddi | Adroddiadau untro; dim adolygu | Rhywfaint o adolygu cymheiriaid | Cofnodir cwestiynau, penderfyniadau ac adolygu | Ailddefnyddir, adolygir ac ymddeolir dadansoddi | Dadansoddeg wedi'i hymgorffori mewn penderfyniadau gydag adborth ar ganlyniadau |

## Rhestr wirio

- [ ] Mae pob metrig allweddol yn rhestru'r meysydd a'r stampiau amser y mae'n dibynnu arnynt.
- [ ] Dilysir meysydd gofynnol wrth fewnbynnu, nid eu glanhau'n ddiweddarach yn unig.
- [ ] Mae adroddiadau'n dangos cyflawnrwydd, ffresni a'r cyfrif y tu ôl i bob cyfradd.
- [ ] Cysonir o leiaf un maint ar draws dwy ffynhonnell bob chwarter.
- [ ] Mae cofrestr yn cofnodi ffynhonnell, trawsnewidiad, perchennog a dyddiad adolygu ar gyfer pob metrig.
- [ ] Logir newidiadau diffiniad a'u marcio ar siartiau.
- [ ] Mae ail berson yn adolygu dadansoddiad sy'n llywio penderfyniad.
- [ ] Mae rheolau'n bodoli ar gyfer dadansoddi â chymorth AI, gan gynnwys gwiriad ar sampl hysbys.
- [ ] Diffinnir mynediad, cadw ac isafswm maint grŵp ar gyfer data sy'n ymwneud â phobl.
- [ ] Mae gan bob metrig fector gamio a chanllaw amddiffynnol a ddangosir wrth ei ymyl.

## Anogion AI

**Drafftio gwiriadau ansawdd data ar gyfer metrig.**

```text
Rydym yn adrodd y metrig hwn: [enw'r metrig], wedi'i ddiffinio fel [diffiniad gan
gynnwys dechrau a stopio'r cloc]. Mae'n dibynnu ar y meysydd hyn yn [offeryn]:
[rhestr o feysydd]. Cynigiwch wiriadau ansawdd data ar gyfer cyflawnrwydd,
dilysrwydd, amseroldeb a chysondeb, a dywedwch ble y dylai pob gwiriad redeg
(wrth fewnbynnu, wrth lwytho, neu yn yr adroddiad). Peidiwch â dyfeisio
trothwyon; defnyddiwch ddalfeini. Marciwch dybiaethau a rhestrwch gwestiynau y
dylwn eu hateb.
```

**Adolygu dadansoddiad cyn ei ddefnyddio.**

```text
Dyma ddadansoddiad yr ydym yn bwriadu ei ddefnyddio ar gyfer penderfyniad:
[gludwch y cwestiwn, y dull, yr ymholiad neu'r camau, a'r canlyniad, heb ddata
personol]. Adolygwch ef am ddiffiniadau aneglur, enwaduron anghywir, samplau
bach, ansicrwydd coll, a chasgliadau sy'n mynd y tu hwnt i'r data. Peidiwch â
thybio ffeithiau nad ydynt yn y testun. Rhestrwch yr hyn na allech ei farnu a'r
hyn y dylai adolygydd dynol ei wirio.
```

**Cynllunio cysoni rhwng dwy system.**

```text
Dylai dwy system gytuno ar [maint]: [system A] a [system B]. Cynigiwch gynllun
cysoni: y sampl, y cyfnod, sut i baru cofnodion, sut i ddosbarthu gwahaniaethau,
a sut i gofnodi canfyddiadau. Peidiwch â dyfeisio amrywiant disgwyliedig.
Rhestrwch dybiaethau a'r mynediad y byddai ei angen arnaf.
```

**Adolygu risg gamio mesurau ansawdd data.**

```text
Rydym yn adrodd y mesurau ansawdd data hyn: [gludwch fesurau a diffiniadau].
Cyd-destun: [maint y tîm, offer, cynulleidfa]. Ar gyfer pob mesur, rhestrwch
ffyrdd realistig y gallai edrych yn well heb wella'r data, cynigiwch ganllaw
amddiffynnol, a dywedwch sut y gellid camio'r canllaw hwnnw. Peidiwch â dyfeisio
gwerthoedd meincnod. Rhestrwch eich tybiaethau.
```

## Sgiliau AI

- [Ansawdd data](../../../../skills/data-quality/SKILL.md): defnyddiwch i ddiffinio a gwirio ansawdd set ddata.
- [Piblinell data](../../../../skills/data-pipeline/SKILL.md): defnyddiwch i ddylunio ac adolygu'r biblinell sy'n llwytho data gwasanaeth.
- [Dadansoddi ystadegol](../../../../skills/statistical-analysis/SKILL.md): defnyddiwch i wirio bod dull a'i ansicrwydd yn gweddu i'r cwestiwn.
- [Sgil Service Management Metrics](../../../../skills/service-management-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc sy'n trafod metrig a'i ganllaw amddiffynnol pâr.

## Prif bwyntiau

- Dim ond mor ddibynadwy â'i ddata yw rhif, felly mesurwch gyflawnrwydd, ffresni a chysoni a'u dangos wrth ymyl y canlyniad.
- Cadwch linach a diffiniadau mewn un gofrestr, a logiwch bob newid.
- Adolygwch ddadansoddi cyn iddo lywio penderfyniadau, gan gynnwys rhai â chymorth AI.
- Nodwch ansicrwydd a therfynau, a dangoswch y cyfrif y tu ôl i bob cyfradd.
- Cadwch ddadansoddeg ar lefel tîm a gwasanaeth, gyda therfynau preifatrwydd ar ddata am bobl.

## Cyfeiriadau a darllen pellach

1. Wikipedia, [Analytics](https://en.wikipedia.org/wiki/Analytics).
2. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
3. Wikipedia, [Data lineage](https://en.wikipedia.org/wiki/Data_lineage).
4. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
5. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
6. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
7. Wikipedia, [Reproducibility](https://en.wikipedia.org/wiki/Reproducibility).
