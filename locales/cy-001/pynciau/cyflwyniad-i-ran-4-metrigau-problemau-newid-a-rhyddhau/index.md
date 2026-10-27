# Cyflwyniad i Ran 4: Metrigau problemau, newid a rhyddhau

**Mae metrigau problemau, newid a rhyddhau yn dangos a yw'r ffordd y mae tîm yn newid ei wasanaethau ac yn dysgu o fethiant yn eu gwneud yn gyflymach i'w gwella ac yn fwy cyson i'w rhedeg.**

Mae pob newid i wasanaeth byw yn bet. Gall gyflwyno gwerth yn gynt, neu gall dorri rhywbeth y mae defnyddwyr yn dibynnu arno. Mesurodd Rhan 3 pa mor dda y mae cymorth ac adfer yn gweithio pan fydd pethau'n mynd o chwith (gweler pwnc 3.0, Cyflwyniad i Ran 3: Metrigau desg gwasanaeth, digwyddiadau a cheisiadau). Mae'r rhan hon yn edrych ar ochr arall yr un geiniog: sut mae newid yn mynd i mewn i'r amgylchedd, pa mor aml y mae'n achosi trafferth, a pha mor dda y mae'r sefydliad yn dysgu fel na ddaw'r un trafferth yn ôl.

Mae cyflawni parhaus ac ITIL yn closio at y tir hwn o gyfeiriadau gwahanol. Mae ymarfer ystwyth yn ffafrio cyflawni meddalwedd yn barhaus mewn newidiadau bach ac yn trin adborth cyflym fel mesur diogelwch. Mae arferion ITIL megis rheoli problemau, galluogi newid a rheoli rhyddhau yn bodoli i warchod sefydlogrwydd ac i ddod o hyd i achosion digwyddiadau a'u dileu. Mae'r metrigau yn y rhan hon yn gadael i'r ddau olwg gael eu gwirio yn erbyn yr un dystiolaeth. Os yw newid mynych yn ddiogel, bydd y mesurau methiant ac ailwampio yn dangos hynny. Os yw rheolaeth yn arafu cyflawni heb leihau risg, bydd y mesurau cymeradwyo ac amser arweiniol yn dangos hynny yn lle.

Mae dau rybudd yn rhedeg drwy'r rhan gyfan. Rhaid darllen cyflymder a sefydlogrwydd gyda'i gilydd, oherwydd mae rhif sy'n gwella un tra'n niweidio'r llall yn dawel yn fargen wael. Dylid darllen mesurau amser hefyd fel dosbarthiadau gyda chanraddau, fel y nodir yn Rhan 1 (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth). Mae pob metrig yma yn disgrifio tîm, gwasanaeth neu system. Nid yw'r un ohonynt yn graddio unigolyn, ac nid yw'r un yn darged i'w wthio ar ei ben ei hun (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

Mae'r pedair lens yn llunio'r rhan hon. Mae cyflawni parhaus yn gwneud newidiadau bach, mynych yn norm, felly mae mesurau newid a rhyddhau yn disgrifio llif a diogelwch gyda'i gilydd. Mae newidiadau a gynorthwyir gan AI a sgorau risg a gynhyrchir gan AI angen eu paru ansawdd eu hunain. Mae piblinellau yn awtomeiddio tystiolaeth a chymeradwyaethau, felly rhaid mesur yr awtomeiddio ar ei fethiannau. Mae dadansoddeg yn cysylltu newidiadau, digwyddiadau a phroblemau, ac yn dweud faint o achosion sydd y tu ôl i bob cyfradd.

## Pynciau yn y rhan hon

- **4.1 Metrigau rheoli problemau**: problemau a agorwyd ac a gaewyd, ailddefnyddio gwallau hysbys, ailadrodd, ac amser i atgyweiriad parhaol.
- **4.2 Metrigau post mortem a dysgu**: cwblhau adolygiadau, cau eitemau gweithredu, ailadrodd achosion, a signalau dysgu di-fai.
- **4.3 Metrigau galluogi newid**: nifer newidiadau yn ôl math, amser arweiniol cymeradwyo, cyfran newidiadau safonol, ac awtomeiddio cymeradwyo.
- **4.4 Methiant newid ac ailwampio**: cyfradd methu newid, cyfran newidiadau brys, cyfraddau dychwelyd a thrwsio poeth, a diffiniadau cyson o fethiant.
- **4.5 Metrigau rhyddhau a defnyddio**: amlder defnyddio, amlder rhyddhau, defnyddio baneri nodwedd, amser arweiniol rhyddhau, a gwahanu defnyddio oddi wrth ryddhau.
- **4.6 Dyled dechnegol a gwallau hysbys**: ôl-groniad gwallau hysbys, stoc dyled a llog, a blaenoriaethu atgyweiriadau yn erbyn gwaith nodweddion.

## Sut mae'r pynciau hyn yn perthyn i'w gilydd

Mae'r rhan yn rhannu'n ddau hanner sy'n dibynnu ar ei gilydd. Mae pynciau 4.1 a 4.2 yn ymwneud â dysgu: sut yr olrheinir digwyddiadau at achosion, a sut mae adolygiadau'n troi'n atgyweiriadau a gwblheir. Mae pynciau 4.3, 4.4 a 4.5 yn ymwneud â newid: sut y caiff ei gymeradwyo, pa mor aml y mae'n methu, a sut mae'n cyrraedd defnyddwyr. Mae pwnc 4.6 yn uno'r haneri, oherwydd mae'r ddyled a'r gwallau hysbys y mae dysgu'n eu datgelu yr un eitemau sy'n cystadlu â nodweddion newydd am amser y tîm.

Y paru pwysicaf yw rhwng cyflymder a methiant. Mae amlder defnyddio a rhyddhau ym mhwnc 4.5 (gweler pwnc 4.5, Metrigau rhyddhau a defnyddio) yn disgrifio pa mor aml y mae newid yn cyrraedd cynhyrchu, ac mae'r rhaglen ymchwil DORA yn paru mesurau trwybwn o'r fath â mesurau sefydlogrwydd (gweler pwnc 2.8, Metrigau DORA). Mae pwnc 4.4 (gweler pwnc 4.4, Methiant newid ac ailwampio) yn cyflenwi'r ochr sefydlogrwydd honno. Mae tîm sy'n defnyddio'n amlach tra bo'i gyfraddau methiant ac ailwampio yn aros yn wastad neu'n disgyn yn gwella. Mae tîm y mae ei amlder yn codi tra bo dychweliadau a thrwsio poeth yn codi gydag ef yn symud y gost i rywle arall.

Mae galluogi newid yn eistedd rhwng y ddau. Mae pwnc 4.3 (gweler pwnc 4.3, Metrigau galluogi newid) yn mesur ochr rheolaeth: pa mor hir y mae cymeradwyo'n ei gymryd, faint o newid sydd wedi'i ragawdurdodi fel safonol, a faint o'r cymeradwyo sydd wedi'i awtomeiddio. Amser arweiniol cymeradwyo yw cost rheolaeth, a'r gyfradd methu newid o bwnc 4.4 yw'r dystiolaeth a yw'r rheolaeth honno'n gweithio. Wedi'u darllen gyda'i gilydd, maent yn dangos a yw cam cymeradwyo trwm yn prynu diogelwch neu'n ychwanegu oedi yn unig, ac a yw cymeradwyo ysgafnach, awtomataidd wedi cadw methiant yn gyson.

Mae'r pynciau dysgu yn gwarchod y lleill. Mae rheoli problemau ym mhwnc 4.1 (gweler pwnc 4.1, Metrigau rheoli problemau) yn mesur ailadrodd ac amser i atgyweiriad parhaol, sef prawf hirdymor a yw trin digwyddiadau o Ran 3 yn dileu achosion neu ddim ond yn adfer gwasanaeth. Mae pwnc 4.2 (gweler pwnc 4.2, Metrigau post mortem a dysgu) yn gwirio bod adolygiadau'n digwydd mewn gwirionedd a bod eu gweithredoedd yn cael eu cau, gan nad yw adolygiad cyflawn heb ddilyniant yn newid dim. Mae cyfrif adolygiadau neu broblemau a gaewyd yn hawdd ei gamio, felly dylid darllen y cyfrifon hyn wrth ymyl ailadrodd yr un achosion, sy'n anoddach ei ffugio.

Yn olaf, mae pwnc 4.6 (gweler pwnc 4.6, Dyled dechnegol a gwallau hysbys) yn egluro pam mae'r mesurau eraill yn drifftio. Mae gwallau hysbys heb eu trin a dyled a gronnwyd yn codi'r siawns o fethiant a chost pob newid diweddarach. Mae darllen yr ôl-groniad gwallau hysbys wrth ymyl y gyfradd methu newid yn dangos pryd y mae gohirio atgyweiriadau wedi dechrau arafu cyflawni.

Mae rhannau diweddarach yn adeiladu ar y mesurau hyn. Mae amcanion lefel gwasanaeth a chyllidebau gwallau yn Rhan 5 yn rhoi terfyn dibynadwyedd y gellir barnu cyflymder newid yn ei erbyn, ac mae Rhan 11 yn dangos sut i gyflwyno'r mesurau hyn heb fagu ofn.
