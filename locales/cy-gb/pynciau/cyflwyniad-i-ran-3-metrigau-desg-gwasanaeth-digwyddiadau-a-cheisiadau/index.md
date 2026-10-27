# Cyflwyniad i Ran 3: Metrigau desg gwasanaeth, digwyddiadau a cheisiadau

**Mae metrigau desg gwasanaeth, digwyddiadau a cheisiadau yn dangos pa mor dda y mae cymorth ac adfer yn gweithio i'r bobl sy'n defnyddio eich gwasanaethau, fel y gallwch wella'r profiad o gael cymorth yn hytrach na golwg adroddiad.**

Dyma ran y llyfr lle mae defnyddwyr yn cwrdd â'r gwasanaeth. Mae person na all fewngofnodi, cwsmer y mae ei archeb yn methu, a gweithiwr sydd angen gliniadur newydd i gyd yn cyrraedd y sefydliad drwy'r ddesg gwasanaeth, rhybudd monitro, porth hunanwasanaeth neu neges sgwrs. Mae'r hyn sy'n digwydd nesaf yn penderfynu sut y byddant yn barnu'r gwasanaeth cyfan. Mae metrigau yn y maes hwn yn disgrifio'r profiad hwnnw o ddwy ochr: pa mor gyflym a pha mor dda y mae'r sefydliad yn adfer gwasanaeth pan fydd rhywbeth yn torri, a pha mor ddibynadwy y mae'n cyflawni'r ceisiadau arferol y mae pobl yn eu gwneud.

Yn ITIL 4, mae rheoli digwyddiadau a rheoli ceisiadau gwasanaeth yn arferion ar wahân, a'r ddesg gwasanaeth yw'r pwynt cyswllt ar gyfer y ddau. Mae timau ystwyth sy'n rhedeg yr hyn a adeiladant yn aml yn trin yr un gwaith drwy gylchdroadau galwadau a chiwiau a rennir. Y naill ffordd neu'r llall, mae'r problemau mesur yn debyg. Mae cyfrifon yn dibynnu ar sut y caiff gwaith ei gategoreiddio, mae amseroedd yn dibynnu ar ble mae'r clociau'n dechrau ac yn stopio, ac mae cyfartaleddau'n cuddio'r oedi hir y mae defnyddwyr yn ei gofio. Mae'r arferion ystadegol a nodir yn Rhan 1 yn berthnasol drwyddi draw (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

Mae metrigau cymorth hefyd yn anarferol o hawdd eu camio. Gall desg gau tocynnau yn gyflymach drwy eu cau'n gynnar, a gall leihau amser trin drwy ruthro galwyr. Gall tîm leihau cyfrif digwyddiadau drwy eu hailddosbarthu fel ceisiadau. Felly mae pob pwnc yn y rhan hon yn enwi'r ymddygiad y mae metrig yn ei wobrwyo, yr ymddygiad y mae'n ei guddio, a'r canllaw amddiffynnol sy'n dal y gwahaniaeth (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau). Mae pob mesur yma yn disgrifio tîm, gwasanaeth neu system. Nid yw'r un ohonynt yn graddio asiant neu ymatebwr unigol.

Mae'r pedair lens yn bwysicaf yn y rhan hon, oherwydd mae didoli AI, asiantau rhithwir a chyflawni awtomataidd bellach yn trin rhan o'r gwaith y mae'r mesurau hyn yn ei gyfrif. Dim ond llwyddiant yw cyswllt na chyrhaeddodd berson os datryswyd y broblem, felly mae pob mesur cyflymder neu gyfaint yma wedi'i baru â mesur ail-gyswllt, ailagor neu ansawdd. Mae casglu awtomataidd yn cyflenwi'r clociau, ac mae dadansoddeg yn dangos dosbarthiadau gyda nifer yr achosion y tu ôl iddynt.

## Pynciau yn y rhan hon

- **3.1 Metrigau desg gwasanaeth**: cyfaint cysylltiadau, datrys ar y cyswllt cyntaf, gadael, ac amser trin; beth mae pob un yn ei wobrwyo a beth mae pob un yn ei guddio.
- **3.2 Nifer a blaenoriaeth digwyddiadau**: cyfrifon digwyddiadau, categorïau, effaith a brys, cymysgedd blaenoriaeth, digwyddiadau sy'n ailadrodd, a normaleiddio cyfaint yn erbyn defnydd.
- **3.3 Amser ymateb a datrys digwyddiadau**: amser i ganfod, cydnabod, ymateb a datrys; mesurau amser cymedrig a'u problemau ystadegol; canraddau yn lle hynny.
- **3.4 Metrigau digwyddiadau mawr**: amlder, hyd, effaith ar gwsmeriaid, amseroldeb cyfathrebu, a dilyn camau drwodd.
- **3.5 Metrigau cyflawni ceisiadau gwasanaeth**: amser cyflawni, ôl-groniad, cyfaint ceisiadau yn ôl eitem catalog, a chyfran awtomeiddio.
- **3.6 Metrigau rheoli gwybodaeth**: defnydd erthyglau, ailddefnyddio wrth ddatrys, cyfradd cysylltu, ffresni, a dangosyddion Gwasanaeth Wedi'i Ganoli ar Wybodaeth (KCS).
- **3.7 Metrigau hunanwasanaeth ac awtomeiddio**: dargyfeirio, llwyddiant hunanwasanaeth, cwmpas awtomeiddio, ac effaith symud i'r chwith ar gyfaint a chymhlethdod.

## Sut mae'r pynciau hyn yn perthyn i'w gilydd

Mae'r pedwar pwnc cyntaf yn dilyn bywyd tarfu. Mae cysylltiadau'n cyrraedd y ddesg, sef pryder pwnc 3.1 (gweler pwnc 3.1, Metrigau desg gwasanaeth). Mae'r rhai sy'n adrodd bai yn dod yn ddigwyddiadau, y mae pwnc 3.2 (gweler pwnc 3.2, Nifer a blaenoriaeth digwyddiadau) yn eu cyfrif a'u dosbarthu yn ôl effaith a brys. Yna mae pwnc 3.3 (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau) yn mesur pa mor hir y mae pob cam yn ei gymryd. Mae'r ychydig ddigwyddiadau sy'n achosi niwed difrifol yn cael eu triniaeth eu hunain ym mhwnc 3.4 (gweler pwnc 3.4, Metrigau digwyddiadau mawr), oherwydd bod eu prinder a'u maint yn gwneud cyfartaleddau cyffredin yn gamarweiniol.

Mae angen partner ar nifer o'r mesurau hyn i aros yn onest. Dylid darllen cyflymder ar y ddesg, megis amser trin ym mhwnc 3.1, wrth ymyl datrys ar y cyswllt cyntaf a'r cysylltiadau mynych a gynhyrchir ganddo, fel na chamgymerir galwadau cyflym am broblemau a ddatryswyd. Mae amser datrys ym mhwnc 3.3 yn perthyn gyda'r digwyddiadau sy'n ailadrodd ym mhwnc 3.2, gan nad yw adferiad cyflym sy'n methu eto wythnos yn ddiweddarach wedi helpu'r defnyddiwr. Mae cymysgedd blaenoriaeth ym mhwnc 3.2 yn rhoi cyd-destun i bob mesur amser: gall cynnydd yn y canolrif amser datrys adlewyrchu newid yn y math o ddigwyddiadau sy'n cyrraedd yn hytrach na newid yn ansawdd ymateb y tîm.

Dylid mesur ceisiadau a digwyddiadau ochr yn ochr ond byth eu huno. Mae pwnc 3.5 (gweler pwnc 3.5, Metrigau cyflawni ceisiadau gwasanaeth) yn trafod gwaith rhagweladwy, ailadroddadwy cyflawni, lle mai'r nod yw ymdrech gyson a lleihaol fesul cais. Mae gwaith digwyddiadau yn anrhagweladwy, a'i nod yw adferiad cyflym a pharhaol. Mae eu cyfuno mewn un cyfartaledd ciw yn cuddio problemau'r ddau. Mae'r mesurau llif yn Rhan 2 yn cyflenwi'r clociau a rennir a'r terfynau gwaith ar y gweill sy'n atal y ddwy ffrwd rhag newynu ei gilydd (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio).

Mae'r ddau bwnc olaf yn gweithredu ar y cyfaint y mae'r lleill yn ei fesur. Mae gwybodaeth ym mhwnc 3.6 (gweler pwnc 3.6, Metrigau rheoli gwybodaeth) yn byrhau datrys drwy adael i'r person nesaf ailddefnyddio'r hyn a ddysgodd yr un diwethaf, ac mae'n bwydo'r cynnwys hunanwasanaeth a fesurir ym mhwnc 3.7 (gweler pwnc 3.7, Metrigau hunanwasanaeth ac awtomeiddio). Mae dargyfeirio ac awtomeiddio yn lleihau'r cysylltiadau syml sy'n cyrraedd y ddesg, sy'n gadael cymysgedd anoddach o waith i'r bobl sy'n weddill. Dylid disgwyl y newid hwnnw, ac efallai y bydd amser trin yn codi o ganlyniad, felly dylid ei ddarllen fel newid yn y cymysgedd yn hytrach na dirywiad mewn perfformiad.

Mae digwyddiadau sy'n ailadrodd yn dod yn fewnbynnau i reoli problemau yn Rhan 4.
