# Metrigau piblinellau a newid awtomataidd

**Mae piblinell gyflawni yn ffordd i newidiadau gyrraedd defnyddwyr ac yn ffynhonnell tystiolaeth eu bod yn ddiogel, felly mesurwch ei chyflymder, ei dibynadwyedd, faint o gymeradwyo newid y mae'n ei drin, ac a fyddai'r dystiolaeth y mae'n ei chynhyrchu yn argyhoeddi archwilydd, a darllenwch y rhain i gyd fel mesurau o system, byth o'r bobl sy'n ei defnyddio.**

## Trosolwg a chymhelliant

Mae piblinell [integreiddio parhaus](https://en.wikipedia.org/wiki/Continuous_integration) a [chyflawni parhaus](https://en.wikipedia.org/wiki/Continuous_delivery) yn mynd â newid o waith datblygwr i wasanaeth sy'n rhedeg drwy adeiladu, profi, gwiriadau diogelwch a defnyddio awtomataidd. Pan ymddiriedir mewn piblinell, gall hefyd wneud y penderfyniadau yr arferai bwrdd cynghori newid eu gwneud ar gyfer newidiadau arferol. Mae ITIL yn galw'r arfer o reoli newid yn "galluogi newid", a'i nod yw gadael i newidiadau buddiol ddigwydd yn ddiogel ac yn gyflym. Mae piblinell sy'n rhedeg gwiriadau, yn cofnodi'r dystiolaeth ac yn cymeradwyo newidiadau risg isel yn awtomatig yn un ffordd o gyflawni'r nod hwnnw.

Felly mae'r biblinell yn ddau beth ar unwaith. Mae'n system gynhyrchu, â'i hargaeledd, ei chyflymder a'i methiannau ei hun, ac mae'n rheolaeth, â thystiolaeth o'r hyn a brofwyd, pwy a adolygodd a'r hyn a gymeradwywyd. Mae angen mesur y ddau. Mae piblinell gyflym sy'n hepgor gwiriadau yn risg. Mae piblinell araf a simsan yn gwthio pobl i'w hosgoi, ac mae newidiadau a osgoir yn dianc rhag pob rheolaeth yr oedd y biblinell i fod i'w darparu.

Mae'r pwnc hwn yn ategu mesurau newid Rhan 4 (gweler pwnc 4.3, Metrigau galluogi newid, a phwnc 4.4, Methiant newid ac ailwaith) a'r mesurau rhyddhau (gweler pwnc 4.5, Metrigau rhyddhau a defnyddio) drwy ganolbwyntio ar y biblinell fel system. Mae'n ategu mesurau DORA (gweler pwnc 2.8, Metrigau DORA) drwy edrych ar yr hyn sy'n digwydd y tu mewn i'r biblinell. Mae hefyd yn perthyn i fesurau awtomeiddio cyffredinol pwnc 10.6 (gweler pwnc 10.6, Metrigau awtomeiddio a threfnu).

Termau a ddefnyddir yma. **Rhediad piblinell** yw un gweithrediad o'r biblinell ar gyfer un newid. **Cam** yw cam yn y biblinell, megis adeiladu neu brofi. **Prawf simsan** yw prawf sydd weithiau'n pasio ac weithiau'n methu ar yr un cod. **Osgoi** yw newid sy'n cyrraedd cynhyrchu heb basio drwy'r biblinell, er enghraifft drwy ddefnyddio â llaw mewn argyfwng. Mae **polisi fel cod** yn golygu ysgrifennu rheolau, megis "dim defnyddio heb sgan diogelwch a basiwyd", fel meddalwedd y mae'r biblinell yn ei gorfodi. **Tystiolaeth** yw'r prawf cofnodedig o'r hyn y bu newid drwyddo. Mae **newid safonol** yn ITIL yn fath o newid risg isel, a ddeellir yn dda ac a gymeradwywyd ymlaen llaw.

## Egwyddorion allweddol

- **Gwasanaeth yw'r biblinell.** Mesurwch ei dibynadwyedd, ei chyflymder a'i methiannau fel y byddech ar gyfer unrhyw system gynhyrchu, a rhowch berchennog iddi.
- **Mesurwch yr osgoi.** Mae nifer y newidiadau sy'n osgoi'r biblinell yn dangos faint y gellir ymddiried ynddi.
- **Awtomeiddiwch gymeradwyo yn ôl risg, gyda thystiolaeth.** Cymeradwywch ymlaen llaw yr hyn a ddeellir yn dda, a chadwch adolygiad dynol ar gyfer yr hyn na ddeellir.
- **Cynnyrch yw tystiolaeth.** Dylai'r hyn y mae'r biblinell yn ei gofnodi ateb cwestiynau archwilydd heb ruthr.
- **Mesurir cyflym a diogel gyda'i gilydd.** Paratowch fesurau cyflymder â methiant ac ailwaith.
- **Disgrifiwch systemau, nid pobl.** Nid yw data piblinell am bwy a wthiodd newid yn restr o berfformiad.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cymar ystwyth | Amlder |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfradd llwyddiant piblinell | Cyfran y rhediadau piblinell sy'n gorffen heb fethiant a achoswyd gan y biblinell neu ei hamgylchedd | rhediadau sy'n pasio neu'n methu oherwydd diffyg cod gwirioneddol yn unig / rhediadau a ddechreuwyd; eithrir rhediadau a ganslwyd gan y defnyddiwr a'u hadrodd ar wahân | canran | Logiau llwyfan y biblinell | Rheoli rhyddhau; galluogi newid | Iechyd integreiddio parhaus | Wythnosol |
| Hyd piblinell | Yr amser i newid symud drwy'r biblinell | canolrif a'r 85fed canradd o (amser y mae'r cam olaf yn gorffen minws amser y mae'r rhediad yn dechrau) ar gyfer rhediadau sy'n cyrraedd y defnyddio | munudau | Logiau llwyfan y biblinell | Rheoli rhyddhau | Dolenni adborth byr | Wythnosol |
| Cyfradd profion simsan | Cyfran y methiannau profion sy'n pasio wrth ailredeg heb newid cod | methiannau sy'n pasio wrth ailredeg / methiannau profion | canran | Canlyniadau profion a logiau ailredeg | Rheoli rhyddhau | Diffiniad o orffen; arfer profi | Misol |
| Cyfran cymeradwyo awtomataidd | Cyfran y newidiadau a gymeradwywyd gan bolisi'r biblinell heb gam cymeradwyo dynol | newidiadau a gymeradwywyd gan bolisi yn unig / newidiadau a ddefnyddiwyd | canran | Cofnodion piblinell a newid | Galluogi newid | Datblygu ar y brif gangen gyda gwiriadau awtomataidd | Misol |
| Cyfradd osgoi | Cyfran y newidiadau cynhyrchu na phasiodd drwy'r biblinell | newidiadau cynhyrchu a wnaed y tu allan i'r biblinell, a ganfuwyd drwy gymharu cofnodion defnyddio â chofnodion piblinell / pob newid cynhyrchu | canran | Cofnodion defnyddio, archwiliad cyfluniad a logiau piblinell | Galluogi newid; rheoli cyfluniad | Cytundebau gweithio | Misol |
| Cyflawnrwydd tystiolaeth | Cyfran y newidiadau a ddefnyddiwyd gan y biblinell y mae eu cofnod yn dangos y dystiolaeth ofynnol | newidiadau â'r holl eitemau tystiolaeth ofynnol (profion, adolygiad, sgan, cymeradwyaeth) wedi'u cysylltu / newidiadau a ddefnyddiwyd | canran | Cofnodion piblinell a newid | Galluogi newid; llywodraethu | Diffiniad o orffen | Misol |
| Cyfradd methiant giât polisi | Cyfran y rhediadau a atalwyd gan wiriad polisi, wedi'i hollti rhwng tor rheol gwirioneddol a gwall polisi | rhediadau a atalwyd gan giât polisi / rhediadau a ddechreuwyd; dosbarthir y rhesymau drwy samplu | canran | Logiau piblinell a chofnodion giât | Galluogi newid; rheoli risg | Meini prawf derbyn | Misol |

Mae cyfradd llwyddiant piblinell yn eithrio rhediadau a ganslwyd gan berson, a adroddir ar wahân, ac yn cyfrif methiant a achoswyd gan brawf simsan neu nam amgylchedd fel methiant piblinell. Mae cyfradd osgoi angen cofnod annibynnol o'r hyn sy'n rhedeg mewn cynhyrchu, felly ni ellir ei chyfrifo o'r biblinell yn unig.

## Argymhellion

### Trin y biblinell fel gwasanaeth

**1. Rhowch berchennog ac amcanion i'r biblinell.** Mae tîm a enwir yn berchen ar ddibynadwyedd a chyflymder y biblinell, gydag amcanion lefel gwasanaeth megis cyfran y rhediadau sy'n gorffen o fewn amser a nodir. Heb berchennog, mae simsanrwydd yn tyfu nes bod pobl yn rhoi'r gorau i ymddiried.

**2. Mesurwch hyd fel dosraniad.** Mae canolrif yn cuddio'r rhediadau araf y mae pobl yn aros amdanynt. Dangoswch y canolrif a'r 85fed canradd, a thorrwch hyd yn gamau i ddod o hyd i'r aros hiraf, sydd yn aml yn giw am redwr a rennir neu'n gymeradwyaeth â llaw.

**3. Tracio a thrwsio profion simsan.** Mae prawf simsan yn dysgu pobl i ailredeg nes ei fod yn wyrdd. Cyfrwch fethiannau simsan, neilltuwch bob un i berchennog, a thrwsiwch neu rhowch mewn cwarantîn gyda dyddiad. Nid yw piblinell y mae pobl yn ei hailredeg o arfer yn cynhyrchu tystiolaeth.

### Awtomeiddio cymeradwyo'n ofalus

**4. Dosbarthwch newidiadau yn ôl risg.** Cytunwch â pherchnogion newid pa fathau o newid sy'n safonol a gellir eu cymeradwyo gan bolisi, a pha rai sydd angen person. Adolygwch y dosbarthiad yn rheolaidd gan ddefnyddio data methiant (gweler pwnc 4.4, Methiant newid ac ailwaith).

**5. Ysgrifennwch bolisi fel cod a'i brofi.** Cod yw rheolau a orfodir gan y biblinell, ac mae angen profion a pherchnogion arnynt fel unrhyw god. Cofnodwch pa fersiwn o'r polisi a gymhwyswyd i bob rhediad.

**6. Cadwch lwybr dynol ar gyfer yr anarferol.** Mae newidiadau brys a risg uchel angen person a all benderfynu gyda'r dystiolaeth. Profwch fod y llwybr yn gweithio a mesurwch faint o amser y mae'n ei gymryd.

### Cynhyrchu tystiolaeth ddefnyddiol

**7. Penderfynwch pa dystiolaeth sydd ei hangen arnoch.** Gweithiwch am yn ôl o'r cwestiynau y mae archwilydd neu adolygydd digwyddiad yn eu gofyn: beth a brofwyd, pwy a adolygodd, beth a sganiwyd, pwy a gymeradwyodd a beth a ddefnyddiwyd. Gwnewch i'r biblinell gofnodi yn union hynny a'i gysylltu â'r newid.

**8. Mesurwch gyflawnrwydd drwy samplu.** Gall cyflawnrwydd tystiolaeth o gyfrif y biblinell ei hun fod yn uchel tra bo'r cynnwys yn wag. Gwiriwch sampl o gofnodion i gadarnhau bod y dystiolaeth yn real ac yn cyfateb i'r hyn a redodd.

**9. Cadwch dystiolaeth yn amlwg os caiff ei haflonyddu.** Storiwch gofnodion y biblinell lle na all y bobl sy'n defnyddio eu golygu, a'u cadw am y cyfnod cadw y mae eich rheolau yn ei ofyn. Gwiriwch ofynion cadw gyda'ch cynghorydd cyfreithiol eich hun.

### Gwylio am osgoi a drifft

**10. Cymharwch gynhyrchu â'r biblinell.** Cysonwch yr hyn sy'n rhedeg mewn cynhyrchu â'r hyn a ddefnyddiodd y biblinell. Osgoi neu ddrifft yw'r gwahaniaethau, ac mae pob un yn haeddu golwg fer, ddi-fai ar pam yr osgowyd y biblinell.

**11. Gwnewch y biblinell y llwybr hawsaf.** Mae pobl yn osgoi piblinellau araf a simsan. Os yw osgoi yn codi, edrychwch yn gyntaf ar gyflymder a dibynadwyedd, ac ar anghenion brys nad yw'r biblinell yn eu diwallu.

**12. Adolygwch giatiau am werth.** Mae giât nad yw byth yn atal diffyg gwirioneddol ac sy'n oedi pob rhediad yn ymgeisydd i'w thynnu neu ei hailgynllunio. Mae giât sy'n atal llawer o rediadau oherwydd gwallau polisi angen trwsio polisi.

## Fectorau gamio a chanllawiau amddiffynnol

| Metrig | Sut mae'n cael ei gamio | Metrig neu arfer canllaw amddiffynnol pâr |
| --- | --- | --- |
| Cyfradd llwyddiant piblinell | Ailddosbarthu methiannau seilwaith fel rhai wedi'u canslo; ailredeg nes ei fod yn wyrdd a chyfrif y rhediad olaf yn unig | Cyfrwch bob ymgais; adroddwch ailredegau fesul newid |
| Hyd piblinell | Symud camau araf y tu allan i'r ffenestr a fesurir; hepgor camau | Mesurwch o'r dechrau i'r diwedd o'r ymrwymiad i'r defnyddio; cymharwch y camau a redwyd â'r camau gofynnol |
| Cyfradd profion simsan | Dileu neu dewi profion simsan; nodi methiannau fel rhai hysbys | Tuedd nifer y profion a'r cwmpas; adolygwch brofion mewn cwarantîn gyda dyddiad |
| Cyfran cymeradwyo awtomataidd | Ehangu'r dosbarth "safonol" i gynnwys newidiadau peryglus | Cyfradd methiant newid ar gyfer newidiadau a gymeradwywyd yn awtomatig; samplwch newidiadau a gymeradwywyd |
| Cyfradd osgoi | Cofnodi defnyddiadau â llaw mewn argyfwng fel rhediadau piblinell; peidio â chysoni â chynhyrchu | Cysonwch gyflwr cynhyrchu â chofnodion piblinell; samplwch ddefnyddiadau |
| Cyflawnrwydd tystiolaeth | Atodi tystiolaeth wag neu amherthnasol; cysylltu adroddiad generig | Samplwch gynnwys tystiolaeth; gwiriwch ei fod yn cyfateb i'r newid |
| Cyfradd methiant giât polisi | Llacio polisïau i leihau methiannau; dosbarthu tor rheolau gwirioneddol fel gwallau polisi | Samplwch rediadau a atalwyd; cyfradd diffygion a ddihangodd a chanfyddiadau o archwiliad |

Darlleniad iach yw piblinell sy'n ddigon cyflym a sefydlog i bobl ei defnyddio ar gyfer popeth, cyfradd osgoi yn agos at sero â phob eithriad wedi'i ddeall, cyfran gynyddol o gymeradwyaethau awtomataidd â chyfradd methiant newid gyson, a thystiolaeth sy'n dal pan gaiff ei samplu.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Gwiriadau piblinell trwm | Dal diffygion yn gynnar; tystiolaeth gref | Rhediadau araf; mwy o simsanrwydd; pwysau i osgoi |
| Piblinell ysgafn | Adborth cyflym | Tystiolaeth wannach; mwy o ddiffygion yn cyrraedd cynhyrchu |
| Cymeradwyo awtomataidd ar gyfer newidiadau safonol | Dileu aros; penderfyniadau cyson | Risg o ehangu'r dosbarth; mae gwallau polisi yn graddio |
| Cymeradwyo dynol ar gyfer pob newid | Cyfarwydd; atebolrwydd gweladwy | Aros; gall cymeradwyaethau ddod yn ffurfioldebau |

Y casgliad yw cadw'r biblinell yn gyflym ac yn ddibynadwy, cymeradwyo drwy bolisi yr hyn a ddeellir yn dda yn unig, a mesur yr osgoi. Nid yw gwiriadau trwm y mae pobl yn eu hosgoi yn amddiffyn dim.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa ffracsiwn o'n newidiadau cynhyrchu sy'n mynd drwy'r biblinell, a sut ydym yn gwybod?**
Gofynnwch am ffordd o gymharu cyflwr cynhyrchu â chofnodion piblinell. Yn aml mae timau'n canfod atgyweiriadau brys, newidiadau cyfluniad a newidiadau data sy'n mynd o'i chwmpas. Disgwyliwch atebion amddiffynnol, felly trinwch bob osgoi fel gwybodaeth. Dilynwch drwy ofyn beth fyddai wedi gwneud y biblinell yn llwybr haws.

**2. Pa rai o'n profion ydym yn eu hailredeg nes eu bod yn pasio, a phwy sy'n berchen arnynt?**
Mae arferion ailredeg yn dangos ble mae ymddiriedaeth wedi erydu. Gwnewch restr a neilltuwch berchnogion. Trafodwch a ddylid trwsio neu dynnu pob un. Yn aml mae'r sgwrs yn dangos bod ychydig o brofion yn achosi'r rhan fwyaf o'r sŵn.

**3. Pa newidiadau ydym yn eu cymeradwyo'n awtomatig heddiw, a pha rai ddylem?**
Rhestrwch y mathau o newid a hanes methiant pob un. Penderfynwch pa rai sydd â risg isel a phrofion da. Gofynnwch beth fyddai'n gwneud i chi roi'r gorau i gymeradwyo math yn awtomatig. Dilynwch drwy gytuno ar ddyddiad adolygu ar gyfer y dosbarthiad.

**4. Pe bai archwilydd yn gofyn am y defnyddio ddydd Mawrth diwethaf, beth allem ei ddangos?**
Cerddwch drwy un newid go iawn a thynnwch ei dystiolaeth. Sylwch ar fylchau a chamau â llaw. Gofynnwch a gofnodwyd y dystiolaeth ar y pryd neu a gafodd ei hailadeiladu'n ddiweddarach. Dilynwch drwy ddewis un bwlch i'w gau.

**5. Ble mae ein piblinell yn treulio ei hamser, a phwy sy'n aros?**
Edrychwch ar y dadansoddiad fesul cam. Yn aml yr aros hiraf yw ciw neu gymeradwyaeth â llaw. Gofynnwch a allai'r bobl sy'n aros wneud rhywbeth arall, a beth mae'r aros yn ei gostio mewn adborth gohiriedig. Dewiswch un oedi i'w dynnu.

**6. Pa giât nad yw erioed wedi atal dim defnyddiol?**
Edrychwch ar y rhesymau atal giatiau ar gyfer y chwarter diwethaf. Mae giât â gwallau polisi yn unig angen ei thrwsio, ac efallai fod giât nad yw byth yn atal dim yn ddianghenraid. Gofynnwch a fyddai ei thynnu yn codi risg. Cytunwch ar dreial.

## Pedwar safbwynt

### Timau cynnyrch a chyflawni

Rydych yn dibynnu ar y biblinell bob dydd. Cadwch brofion yn ddibynadwy, cadwch newidiadau yn fach, a thriniwch brawf simsan fel diffyg yn y cynnyrch. Defnyddiwch ddata piblinell i ddod o hyd i'ch oediadau eich hun, a chadwch ef allan o sgyrsiau perfformiad unigol.

### Timau gwasanaeth a gweithrediadau

Rydych yn etifeddu'r hyn y mae'r biblinell yn ei ryddhau. Gofynnwch am y dystiolaeth sydd ei hangen arnoch ar gyfer digwyddiad, megis yr hyn a newidiodd a phryd, ac am ôl-gylchdroi cyflym. Tracio osgoi a drifft, a dewch â hwy at y tîm fel sgwrs am pam.

### Arweinyddiaeth a llywodraethu

Ariennwch y biblinell fel gwasanaeth cynhyrchu, â pherchennog, capasiti ac amser i drwsio simsanrwydd. Gofynnwch am gyfradd osgoi, cyflawnrwydd tystiolaeth drwy samplu, a chyfradd methiant newid cymeradwyaethau awtomataidd. Gwrthwynebwch bwysau i gyfrif defnyddiadau fel mesur llwyddiant.

### Cwsmeriaid a defnyddwyr

Rydych yn elwa pan fo newidiadau'n cyrraedd yn aml ac yn ddiogel, ac yn dioddef pan fo newid yn torri rhywbeth. Gofynnwch sut y profir newidiadau a pha mor gyflym y dadwneir newid gwael. Mae eich adroddiadau am broblemau ar ôl rhyddhau yn rhan o'r adborth na all y biblinell ei gyflenwi.

## Yn ymarferol: enghraifft rheoli gwasanaethau

Mae adran TG ysbyty rhanbarthol yn rhedeg piblinell ar gyfer ei chymhwysiad trefnu clinigol. Darluniadol yw'r rhifau yn yr enghraifft hon. Mae bwrdd cynghori newid yn cwrdd bob wythnos, ac mae newidiadau arferol yn aros pedwar diwrnod ar gyfartaledd am gymeradwyaeth. Mae'r tîm yn cynnig cymeradwyo newidiadau safonol drwy'r biblinell.

Cyn dechrau, maent yn mesur. Mae cyfradd llwyddiant piblinell yn 82 y cant, ac mae sampl o fethiannau yn dangos bod tua thraean yn brofion simsan. Mae hyd yn yr 85fed canradd yn 47 munud, gyda chiw 20 munud am redwr adeiladu a rennir. Mae cymharu cofnodion defnyddio â chofnodion piblinell yn dangos bod tua 12 y cant o newidiadau cynhyrchu wedi osgoi'r biblinell, golygiadau cyfluniad ac atgyweiriadau brys gan amlaf.

Mae'r tîm yn trwsio'r pum prawf mwyaf simsan, yn ychwanegu rhedwr adeiladu, ac yn creu llwybr newid cyfluniad drwy'r biblinell. Ar ôl tri mis, mae osgoi yn disgyn i 3 y cant. Yna maent yn diffinio dosbarth newid safonol o newidiadau bach, wedi'u profi ac y gellir eu gwrthdroi i'r cymhwysiad trefnu, gyda gwiriadau polisi ar gyfer profion, sgan diogelwch ac adolygiad cymheiriaid. Mae cyfran cymeradwyo awtomataidd yn cyrraedd tua 40 y cant, ac mae amser arweiniol cymeradwyo ar gyfer y newidiadau hynny yn disgyn o ddyddiau i funudau.

Mae risg gamio yn ymddangos. Mae rheolwr yn gofyn i godi'r gyfran cymeradwyo awtomataidd drwy ychwanegu newidiadau sgema cronfa ddata at y dosbarth safonol. Mae'r tîm yn gwirio cyfradd methiant newid ar gyfer newidiadau sgema, sy'n uwch nag ar gyfer newidiadau eraill, ac yn eu cadw gydag adolygydd dynol. Mae cyflawnrwydd tystiolaeth yn 98 y cant yn ôl cyfrif y biblinell, ond mae sampl o 20 cofnod yn dangos bod gan bedwar adroddiad prawf o adeiladwaith gwahanol ynghlwm. Mae'r tîm yn trwsio'r rheol gysylltu. Beth sy'n parhau'n anodd: mae osgoi ar gyfer atgyweiriadau brys yn dal angen cofnod ar ôl y digwyddiad, ac mae'r adolygiad risg clinigol ar gyfer newidiadau sy'n effeithio ar ddiogelwch cleifion yn aros gyda phobl.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Newidiadau bach, aml drwy biblinell yr ymddiriedir ynddi yw craidd cyflawni parhaus, ac mae ôl-groniad y biblinell ei hun yn haeddu'r un adolygiad rheolaidd gyda rhanddeiliaid â'r cynnyrch. Arfer da yw adolygu profion simsan ac osgoi mewn sgwrs gwelliant rheolaidd. Y rhybudd yw bod dathlu amlder defnyddio yn unig yn gwobrwyo hollti newidiadau.

### AI

Gall AI ysgrifennu cod a phrofion, adolygu newidiadau ac asesu risg newid y tu mewn i'r biblinell. Marciwch newidiadau â chymorth AI yn y data a chymharwch eu methiant a'u hailwaith â newidiadau eraill (gweler pwnc 10.2, Mesur gwaith â chymorth AI). Os yw giât AI yn penderfynu neu'n argymell, mesurwch ei chymeradwyaethau ffug a'i hataliadau ffug drwy samplu, a chadwch berson yn atebol am newidiadau risg uchel. Y rhybudd yw y gall profion a gynhyrchir gan AI godi rhifau cwmpas heb brofi ymddygiad sy'n bwysig.

### Awtomeiddio

Y biblinell yw'r awtomeiddio, felly'r arfer yw ei thrin fel gwasanaeth cynhyrchu gyda logiau, perchennog a dewis wrth gefn â llaw ar gyfer argyfyngau. Awtomeiddiwch gasglu tystiolaeth a chysoni cynhyrchu â chofnodion piblinell. Y rhybudd yw bod cymeradwyaethau awtomataidd yn lluosogi effaith gwall polisi, felly profwch bolisïau a chadwch reolaeth oedi.

### Dadansoddeg

Defnyddiwch ddigwyddiadau piblinell i ddangos ble mae amser yn mynd a ble mae methiannau'n clystyru, a chysylltwch rediadau â digwyddiadau ac ailwaith. Y penderfyniad a hysbysir yw ble i fuddsoddi mewn cyflymder, dibynadwyedd neu brofion. Y rhybudd yw nad yw data piblinell yn dangos ansawdd y profion, felly cyfunwch ef â diffygion a ddihangodd, a dangoswch nifer y rhediadau y tu ôl i bob cyfradd (gweler pwnc 10.8, Metrigau dadansoddeg ac ansawdd data).

## Lens sector

**Cwmni newydd.** Gall piblinell syml â phrofion cyflym a defnyddio awtomatig i gynhyrchu fod yn ddigon. Mesurwch hyd ac osgoi, a chofnodwch dystiolaeth o brofion ac adolygiad yn yr ystorfa.

**Busnes bach.** Gall y biblinell fod yn wasanaeth a gynhelir neu'n eiddo cyflenwr. Gofynnwch beth y mae'n ei gofnodi a ble, a chadwch ffordd o ailadeiladu'r hyn a ddefnyddiwyd. Osgowch adeiladu rheolaethau na fyddwch yn eu cynnal.

**Menter.** Mae angen fformatau tystiolaeth cyffredin a pholisi a rennir ar lawer o biblinellau ar draws timau. Cadwch olwg ganolog ar osgoi a chyflawnrwydd tystiolaeth, gyda pherchnogaeth ar lefel tîm ar gyfer atgyweiriadau. Osgowch orfodi un offeryn lle mae gan dimau anghenion gwahanol.

**Llywodraeth a'r sector cyhoeddus.** Mae gwahanu dyletswyddau, llwybrau archwilio a rheolau cadw yn llunio'r biblinell. Dyluniwch y dystiolaeth ar gyfer archwilio, a gwiriwch ofynion cyfreithiol a chaffael, gan gynnwys ar gyfer penderfyniadau awtomataidd (gweler pwnc 8.3, Metrigau cydymffurfio ac archwilio, a phwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Achos busnes: cymhellion, ROI a TCO

Y costau yw llwyfan a rhedwyr y biblinell, y gwaith i ysgrifennu a chynnal profion a pholisi, amser i drwsio simsanrwydd, a chost storio tystiolaeth. Mae'r mesurau eu hunain yn costio ychydig pan fo cofnodion piblinell a newid wedi'u cysylltu.

Yr elw yw aros byrrach am gymeradwyaeth, llai o gamau â llaw, canfod diffygion yn gynharach, a thystiolaeth sy'n barod pan fo ei hangen. Mae'r rhain yn ymddangos fel cyflawni cyflymach a llai o ymdrech adeg archwilio, ond mae'n hawdd eu gorddatgan. Mesurwch eich llinellau sylfaen eich hun, megis amser arweiniol cymeradwyo ac ymdrech i gasglu tystiolaeth archwilio, cyn ac ar ôl, a nodwch dybiaethau fel ystodau (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes). Ochr y risg yw cost methiannau sy'n dianc rhag y biblinell a chost toriad piblinell sy'n rhwystro pob newid.

## Gwrth-batrymau a thrapiau

- **Cyfrif defnyddiadau fel llwyddiant.** Mae'n gwobrwyo hollti newidiadau. Paratowch â methiant ac ailwaith.
- **Ailredeg nes ei fod yn wyrdd.** Mae'n cuddio profion simsan a thystiolaeth wan. Cyfrwch y simsanrwydd a'i drwsio.
- **Anwybyddu osgoi.** Y newidiadau sy'n osgoi'r biblinell yw'r rhai na all eu hamddiffyn. Cysonwch gynhyrchu â chofnodion piblinell.
- **Ehangu'r dosbarth safonol i godi awtomeiddio.** Mae'r gyfran yn codi ac mae'r gyfradd methiant yn dilyn. Adolygwch y dosbarth gyda data methiant.
- **Tystiolaeth sy'n bodoli ond nad yw'n dweud dim.** Samplwch gynnwys, nid presenoldeb yn unig.
- **Piblinell heb berchennog.** Mae'n dadfeilio. Enwch dîm a rhowch amser iddo.
- **Trin gwallau polisi fel diffygion cod.** Mae pobl yn dysgu anwybyddu giatiau. Dosbarthwch yr atal a thrwsiwch y polisi.
- **Dim llwybr â llaw ar gyfer argyfyngau.** Mae pobl yn osgoi. Darparwch lwybr cyflym, wedi'i archwilio.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cyd-drefnu |
| --- | --- | --- | --- | --- | --- |
| Dibynadwyedd piblinell | Adeiladau ad hoc; methiannau diesboniad yn aml | Mae piblinell yn bodoli; tracio llwyddiant | Perchennog, amcanion a thrin profion simsan | Adolygir hyd a methiannau fesul cam | Mae piblinellau'n rhannu patrymau a chapasiti ar draws timau |
| Cymeradwyo a pholisi | Cymeradwyo â llaw ar gyfer pob newid | Diffinnir rhai newidiadau safonol | Polisi fel cod ar gyfer newidiadau safonol, gyda phrofion | Adolygir dosbarthiadau cymeradwyo gyda data methiant | Mae cymeradwyo ar sail risg yn addasu'n awtomatig o fewn terfynau y cytunwyd arnynt |
| Tystiolaeth ac osgoi | Tystiolaeth wedi'i hailadeiladu wedi'r digwyddiad | Cofnodir peth tystiolaeth | Cofnodir a chysylltir y dystiolaeth ofynnol | Cysonir osgoi a samplir cyflawnrwydd | Tystiolaeth a chysoni wedi'u hawtomeiddio'n llawn a'u harchwilio |

## Rhestr wirio

- [ ] Mae gan y biblinell berchennog a enwir ac amcanion ar gyfer dibynadwyedd a chyflymder.
- [ ] Adroddir cyfradd llwyddiant piblinell a chanradd hyd fesul cam.
- [ ] Cyfrifir profion simsan ac mae gan bob un berchennog a dyddiad trwsio.
- [ ] Diffinnir dosbarthiadau newid safonol â meini prawf risg a'u hadolygu gyda data methiant.
- [ ] Cod yw polisïau, wedi'u profi a'u fersiynu, a chofnodir y fersiwn fesul rhediad.
- [ ] Cysonir cyflwr cynhyrchu â chofnodion piblinell i ganfod osgoi.
- [ ] Diffinnir a chofnodir y dystiolaeth ofynnol ar gyfer pob newid a ddefnyddiwyd.
- [ ] Gwirir cyflawnrwydd tystiolaeth drwy samplu cynnwys.
- [ ] Mae llwybr brys wedi'i archwilio yn bodoli ac wedi'i brofi.
- [ ] Mae gan bob metrig fector gamio a chanllaw amddiffynnol a ddangosir wrth ei ymyl.

## Anogion AI

**Dosbarthu newidiadau yn ôl risg ar gyfer cymeradwyo awtomataidd.**

```text
Dyma restr o'r mathau o newid a wnawn ac, ar gyfer pob un, ein hanes diweddar:
[gludwch fathau o newid gyda nifer y newidiadau a'r methiannau, os ydynt ar
gael]. Cynigiwch pa fathau a allai fod yn ymgeiswyr ar gyfer cymeradwyo
awtomataidd a pha rai ddylai gadw adolygydd dynol, gyda'r rhesymeg a'r dystiolaeth
y byddai ei hangen arnaf. Peidiwch â dyfeisio cyfraddau methiant. Marciwch bob
awgrym fel cynnig i berchnogion y newid benderfynu arno. Rhestrwch eich tybiaethau
a'r data y dylwn ei gasglu.
```

**Diffinio'r dystiolaeth y dylai piblinell ei chofnodi.**

```text
Ein piblinell yw [disgrifiad o gamau ac offer]. Cedwir ein cofnodion newid yn
[offeryn]. Rhaid inni ateb y cwestiynau hyn ar ôl unrhyw ddefnyddio: [rhestrwch
gwestiynau gan archwilwyr neu adolygwyr digwyddiadau]. Cynigiwch yr eitemau
tystiolaeth y dylai'r biblinell eu cofnodi a'u cysylltu, ble i'w storio, a sut i
wirio eu bod yn real ac nid yn wag. Peidiwch â datgan honiadau cydymffurfio na
gofynion cyfreithiol. Rhestrwch eich tybiaethau a chwestiynau i'n tîm cydymffurfio.
```

**Dadansoddi data profion simsan.**

```text
Isod mae crynodeb o brofion sy'n methu a chanlyniadau ailredeg ar gyfer
[cyfnod]: [gludwch ddata heb wybodaeth bersonol]. Nodwch brofion sy'n methu ac
yna'n pasio wrth ailredeg, grwpiwch hwy yn ôl maes, a chynigiwch drefn ar gyfer eu
trwsio. Peidiwch â dyfalu achosion nad yw'r data yn eu cefnogi. Dywedwch pa ddata
ychwanegol fyddai'n helpu. Rhestrwch eich tybiaethau.
```

**Adolygu risg gamio dangosfwrdd y biblinell.**

```text
Rydym yn adrodd y mesurau piblinell hyn: [gludwch fesurau a diffiniadau].
Cyd-destun: [maint y tîm, offer, cynulleidfa]. Ar gyfer pob mesur, rhestrwch
ffyrdd realistig y gallai edrych yn well heb wella cyflawni na diogelwch,
cynigiwch ganllaw amddiffynnol, a dywedwch sut y gellid camio'r canllaw hwnnw.
Peidiwch â dyfeisio gwerthoedd meincnod. Rhestrwch eich tybiaethau.
```

## Sgiliau AI

- [Cais am newid](../../../../skills/change-request/SKILL.md): defnyddiwch i ddiffinio'r hyn y dylai cofnod newid a'i dystiolaeth ei gynnwys.
- [Nodiadau rhyddhau](../../../../skills/release-notes/SKILL.md): defnyddiwch i droi allbwn y biblinell yn nodiadau i ddefnyddwyr a gweithrediadau.
- [Sgil Service Management Metrics](../../../../skills/service-management-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc sy'n trafod metrig a'i ganllaw amddiffynnol pâr.

## Prif bwyntiau

- Mae piblinell yn wasanaeth cynhyrchu ac yn rheolaeth, felly mesurwch ei dibynadwyedd, ei chyflymder a'r dystiolaeth y mae'n ei chynhyrchu.
- Mesurwch yr osgoi drwy gysoni cynhyrchu â chofnodion piblinell, a gwnewch y biblinell y llwybr hawsaf.
- Cymeradwywch yn awtomatig newidiadau a ddeellir yn dda yn unig, gyda pholisi wedi'i brofi a llwybr dynol ar gyfer y gweddill.
- Cyfrwch brofion simsan a'u trwsio, oherwydd mae ailredeg nes ei fod yn wyrdd yn dinistrio ymddiriedaeth a thystiolaeth.
- Samplwch gynnwys tystiolaeth, oherwydd gellir bodloni cyfrifon cyflawnrwydd gyda chofnodion gwag.

## Cyfeiriadau a darllen pellach

1. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
2. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
3. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
4. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
5. Wikipedia, [Test automation](https://en.wikipedia.org/wiki/Test_automation).
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
