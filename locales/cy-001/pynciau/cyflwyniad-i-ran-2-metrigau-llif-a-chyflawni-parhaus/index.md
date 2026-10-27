# Cyflwyniad i Ran 2: Metrigau llif a chyflawni parhaus

**Mae metrigau llif yn dangos sut mae gwaith yn symud mewn gwirionedd drwy dîm sy'n adeiladu ac yn rhedeg gwasanaethau, fel y gallwch ddod o hyd i ble mae'n aros, penderfynu beth i'w newid, a gwirio bod y newid wedi helpu.**

Mae timau ystwyth sydd hefyd yn rhedeg gwasanaethau yn trin llif cymysg o waith: nodweddion wedi'u cynllunio, trwsio diffygion, ceisiadau gwasanaeth, ac ymyriadau gan ddigwyddiadau byw. Mae'r cyfan yn cystadlu am yr un bobl a'r un sylw. Mae metrigau llif yn disgrifio'r llif hwnnw o safbwynt yr eitem waith. Maent yn gofyn faint o eitemau sydd ar y gweill, pa mor hir y maent yn ei gymryd, pa mor hen ydynt, a faint sy'n gorffen mewn cyfnod.

Mae'r golwg hwn yn ddefnyddiol oherwydd bod y rhan fwyaf o oedi yn aros yn hytrach na gweithio. Gall cais eistedd mewn ciw, mewn adolygiad neu mewn cymeradwyaeth am lawer hirach nag y mae neb yn ei dreulio arno. Mae mesur y cloc ar yr eitem, yn lle ymdrech y person, yn datgelu'r bylchau hynny ac yn rhoi man cychwyn ffeithiol, a rennir, i'r tîm ar gyfer gwella. Mae hefyd yn gweddu i'r ddau fyd. Mae ymarfer ystwyth yn siarad am amser cylch a thrwybwn, ac mae ymarfer ITIL yn siarad am ffrydiau gwerth a pherfformiad gwasanaeth. Mae'r ddau yn disgrifio'r un symudiad gwaith.

Mae data llif yn gam, ac mae'n hawdd ei gamddefnyddio. Dylid darllen mesurau amser fel dosbarthiadau gyda chanraddau, fel y nodir yn Rhan 1 (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth). Mae pob metrig yn y rhan hon yn disgrifio tîm, gwasanaeth neu system. Nid yw'r un ohonynt yn graddio unigolyn, ac nid yw'r un ohonynt yn darged i'w wthio i fyny neu i lawr ar ei ben ei hun (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

Mae pedair lens y llyfr hwn yn ymddangos yma mewn ffordd benodol. Mae cyflawni parhaus a chyfranogiad rhanddeiliaid yn gosod rhythm y gwaith a fesurir. Gall cymorth AI godi nifer yr eitemau sy'n edrych wedi'u gorffen heb fyrhau'r amser y maent yn aros, felly caiff mesurau llif eu paru â signalau ailwampio ac ansawdd. Mae awtomeiddio yn cyflenwi'r stampiau amser digwyddiadau a dylid ei fesur ei hun am fethiannau. Mae dadansoddeg yn troi'r clociau'n ystodau a thueddiadau, gyda nifer yr eitemau y tu ôl i bob un wedi'i ddangos.

## Pynciau yn y rhan hon

- **2.1 Mesurau llif**: gwaith ar y gweill, trwybwn, oedran eitem waith ac amser cylch, wedi'u cymhwyso i waith prosiect a gwasanaeth.
- **2.2 Amser arweiniol, amser cylch ac effeithlonrwydd llif**: diffiniadau sy'n dal ar draws timau, ble mae'r clociau'n dechrau ac yn stopio, a sut i ddatgelu amser aros.
- **2.3 Gwaith ar y gweill a chiwio**: cyfraith Little, defnydd a thwf ciwiau, terfynau gwaith ar y gweill (WIP), a pham fod tîm gwasanaeth sy'n hollol brysur yn un araf.
- **2.4 Metrigau ffrwd werth**: mesurau mapio ffrwd werth, amser prosesu, amser aros, canran gyflawn a chywir, a ffrydiau gwerth ITIL.
- **2.5 Metrigau rhagolygu a chynllunio cyflawni**: pwyntiau stori a chyflymder, llwyddiant nod cyflawni, cywirdeb rhagolygon, a pham na ddylid byth gymharu cyflymder ar draws timau.
- **2.6 Metrigau ôl-groniad a mireinio**: maint ac oedran ôl-groniad, gwaith parod, cwmpas mireinio, a sut mae ôl-groniadau cynnyrch a gwasanaeth yn wahanol.
- **2.7 Metrigau ceisiadau tynnu ac adolygu cod**: amser adolygu, maint ceisiadau tynnu ac ailwampio fel signalau llif, gyda'r fectorau gamio sy'n dilyn.
- **2.8 Metrigau DORA**: amser arweiniol newid, amlder defnyddio, amser adfer o ddefnyddio a fethodd, cyfradd methu newid, a chyfradd ailwampio defnyddio, gyda rhybuddion yr ymchwil ei hun.
- **2.9 Gwaith gweithredol a gwaith heb ei gynllunio**: gwaith wedi'i gynllunio yn erbyn gwaith heb ei gynllunio, llwyth ymyriadau, lonydd brys, a dyrannu capasiti rhwng gwaith newid a gwaith rhedeg.

## Sut mae'r pynciau hyn yn perthyn i'w gilydd

Mae'r pedwar pwnc cyntaf yn ffurfio craidd y rhan. Mae pwnc 2.1 (gweler pwnc 2.1, Mesurau llif) yn diffinio'r meintiau sylfaenol: gwaith ar y gweill, trwybwn, oedran eitem waith ac amser cylch. Mae pwnc 2.2 (gweler pwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif) yn pennu ble mae'r clociau'n dechrau ac yn stopio, y mae unrhyw gymhariaeth yn dibynnu arno. Mae pwnc 2.3 (gweler pwnc 2.3, Gwaith ar y gweill a chiwio) yn egluro pam mae'r meintiau hynny'n symud gyda'i gilydd, ac mae pwnc 2.4 (gweler pwnc 2.4, Metrigau ffrwd werth) yn ehangu'r golwg o fwrdd un tîm i'r llwybr cyfan o gais i werth.

Mae sawl pwnc yn gweithredu fel canllawiau amddiffynnol i eraill. Gellir chwyddo mesurau trwybwn a chyflymder drwy hollti gwaith yn ddarnau llai neu drwy ruthro, felly dylid eu darllen ochr yn ochr â signalau ailwampio ac ansawdd. Mae maint ceisiadau tynnu ac amser adolygu ym mhwnc 2.7 (gweler pwnc 2.7, Metrigau ceisiadau tynnu ac adolygu cod) yn ddangosyddion cynnar o oedi ac ailwampio. Mae'r canlyniadau cyflawni ym mhwnc 2.8 (gweler pwnc 2.8, Metrigau DORA) yn paru mesurau cyflymder â mesurau sefydlogrwydd, fel na phrynir cyflawni cyflymach gyda mwy o fethiant. Cymorth cynllunio i un tîm yw cyflymder ym mhwnc 2.5 (gweler pwnc 2.5, Metrigau rhagolygu a chynllunio cyflawni), a dylid ei wirio yn erbyn cywirdeb rhagolygon a'r mesurau llif yn hytrach na'i ddarllen fel allbwn.

Mae'r pynciau sy'n weddill yn disgrifio'r amodau y mae gwaith yn llifo odanynt. Mae ôl-groniad sy'n hir, yn hen neu wedi'i fireinio'n wael yn bwydo llif gwael, sef pryder pwnc 2.6 (gweler pwnc 2.6, Metrigau ôl-groniad a mireinio). Mae gwaith heb ei gynllunio ac ymyriadau, a drafodir ym mhwnc 2.9 (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio), yn aml yn rheswm cudd pam y mae amseroedd cylch yn ymestyn a rhagolygon yn methu. Mae eu darllen wrth ymyl gwaith ar y gweill a chiwio ym mhwnc 2.3 yn egluro pam na all tîm heb gapasiti sbâr amsugno digwyddiad heb oedi popeth arall.

Mae rhannau diweddarach yn adeiladu ar y mesurau hyn. Mae metrigau digwyddiadau, newid a rhyddhau yn Rhannau 3 a 4 yn defnyddio'r un clociau a'r un meddwl dosbarthiad, wedi'u cymhwyso i waith cymorth a newid. Gyda'i gilydd, mae'r golwg llif yn gadael i dimau ystwyth ac ITIL siarad am un system waith a rennir.
