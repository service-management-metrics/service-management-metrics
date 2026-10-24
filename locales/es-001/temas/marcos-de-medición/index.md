# Marcos de medición

**Un marco de medición es una forma de decidir qué números merecen un lugar en la página, y los mejores empiezan todos por un objetivo y una pregunta, así que elige el marco más ligero que mantenga cada métrica atada a una decisión.**

## Visión general y motivación

Un equipo que quiere medir su trabajo se topa pronto con un problema: hay miles de números posibles y ninguna regla para elegir entre ellos. Un marco de medición aporta la regla. Nombra un punto de partida (un objetivo, una estrategia, un puñado de condiciones críticas) y describe cómo llegar desde ese punto a un conjunto reducido de medidas que la gente leerá y sobre las que actuará. Los marcos difieren en vocabulario, pero comparten un fin: mantener cada número conectado con una razón para tenerlo.

Este tema cubre cinco ideas que aparecen en casi todas las organizaciones que operan servicios. La primera es el enfoque Goal-Question-Metric (GQM, objetivo-pregunta-métrica), desarrollado por el investigador de ingeniería de software [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili) y colegas. Parte de un objetivo, plantea las preguntas que mostrarían si se está cumpliendo y solo entonces elige métricas. La segunda son los [objetivos y resultados clave](https://en.wikipedia.org/wiki/OKR) (OKR), un método de fijación de metas popularizado en Intel por Andrew Grove y más tarde en Google por John Doerr. Un objetivo dice adónde quiere ir un equipo, y un puñado de resultados clave dicen cómo sabrá que llegó. La tercera es el [cuadro de mando integral](https://en.wikipedia.org/wiki/Balanced_scorecard), presentado por Robert Kaplan y David Norton en 1992, que pide a las organizaciones mirar juntos los resultados financieros, los clientes, los procesos internos y el aprendizaje y crecimiento, de modo que ninguna visión domine.

La cuarta y la quinta idea son más antiguas y sencillas. Un [factor crítico de éxito](https://en.wikipedia.org/wiki/Critical_success_factor) (CSF) es una condición que debe cumplirse para alcanzar un objetivo, y un [indicador clave de rendimiento](https://en.wikipedia.org/wiki/Key_performance_indicator) (KPI) es una medida de cuán bien se sostiene esa condición. ITIL, el marco de gestión de servicios de TI (ITSM) publicado por Axelos y más tarde por PeopleCert, usa exactamente este emparejamiento. En ITIL 4 (la versión de uso generalizado a octubre de 2026), las orientaciones sobre medición y elaboración de informes y sobre mejora continua indican a los profesionales que definan CSF para un servicio o práctica y elijan después KPI que muestren el avance frente a ellos. El enfoque más amplio de [ITIL](https://en.wikipedia.org/wiki/ITIL) se resume aquí, no se reproduce.

Las visiones ágil e ITIL se encuentran de forma útil en este terreno. La práctica ágil favorece ciclos cortos de aprendizaje: un equipo enuncia una hipótesis, prueba algo, inspecciona el resultado y ajusta. La práctica de ITIL favorece servicios definidos, niveles de servicio acordados y un proceso gestionado de mejora. Un marco como GQM encaja con el hábito ágil de preguntar qué quiere aprender el equipo. Un cuadro de mando integral encaja con la necesidad de ITIL de mostrar a los líderes un cuadro completo de la salud del servicio. Los OKR se sitúan entre ambos, porque se revisan en ciclos cortos pero se escriben en el lenguaje de resultados que los órganos de gobernanza entienden.

Tres términos se repiten en este tema. Un **objetivo** es un enunciado de un resultado previsto para una audiencia con nombre. Una **pregunta** es algo que necesitarías saber para decir si se está cumpliendo el objetivo. Una **métrica** es una forma definida de contar o cronometrar algo que ayuda a responder una pregunta. Los marcos difieren en cómo tratan el tercer término, pero todos insisten en que viene al final, después del objetivo y de la pregunta. Este orden es la mejor protección contra el fallo descrito por la ley de Goodhart (véase el tema 1.2, Ley de Goodhart y psicología de las métricas), en el que un número sustituye al propósito al que debía servir.

Ningún marco corrige una mala elección de objetivo, y ninguno elimina la necesidad de barreras de protección. Trata un marco como andamiaje para una conversación y espera cambiarlo a medida que cambie el trabajo. Los KPI en particular pueden convertirse en [métricas de vanidad](https://en.wikipedia.org/wiki/Vanity_metric), recuentos que solo suben y nunca informan una decisión, como el total de tickets gestionados. Las razones más amplias para medir se exponen en otro lugar (véase el tema 1.1, Por qué medir la gestión de servicios).

### En qué se diferencian los marcos

Los marcos responden a preguntas ligeramente distintas, y mezclarlos es habitual. Usa la tabla siguiente como mapa.

| Marco | Punto de partida | Producto típico | Mejor uso | Horizonte típico |
| --- | --- | --- | --- | --- |
| Goal-Question-Metric | Un objetivo concreto para un producto, proceso o servicio | Un árbol de objetivos, preguntas y métricas | Diseñar un programa de medición para un equipo o servicio | De semanas a meses |
| OKR | Un objetivo ambicioso para el próximo periodo | Unos pocos objetivos, cada uno con resultados clave medibles | Alinear equipos en torno a resultados y concentrar el esfuerzo | Trimestre |
| Cuadro de mando integral | La estrategia de una organización | Objetivos y medidas en cuatro perspectivas | Mostrar a los líderes una visión completa y vincular la estrategia con las operaciones | Año |
| CSF y KPI | Un servicio, práctica u objetivo | Unas pocas condiciones que deben cumplirse, cada una con indicadores | Operar una práctica de ITIL definida e informar de su salud | Continuo, revisado con regularidad |

## Principios clave

- **Empieza por el objetivo, luego la pregunta, luego la métrica.** Una métrica elegida primero no tiene manera de juzgarse útil.
- **Haz explícitas la audiencia y la decisión.** Cada objetivo nombra a quién beneficia, y cada métrica nombra quién actuará sobre ella.
- **Mantén pequeño el conjunto.** Unas pocas medidas que se leen y en las que se confía valen más que una lista larga que se hojea.
- **Equilibra la visión.** Empareja velocidad con calidad, costo con experiencia y producción a corto plazo con aprendizaje a largo plazo, para que ningún marco premie una cosa a expensas de otra.
- **Trata los objetivos como hipótesis.** Un objetivo y sus números son una apuesta que puede ser errónea, así que revísalos con un calendario y cámbialos con un motivo registrado.
- **Usa los marcos para describir equipos y servicios, nunca para clasificar personas.** Los cuadros de mando, los resultados clave y los KPI pertenecen a un equipo o a un servicio.
- **Combina los marcos a propósito.** Di qué marco posee qué decisión, para que el mismo número no se defina de tres maneras.

## Definiciones de métricas

Las métricas siguientes miden la salud de un marco en uso, no la salud de un servicio. Muestran si los objetivos y las métricas siguen conectados, y se aplican sea cual sea el marco que elija un equipo. Los recuentos son por equipo o servicio, nunca por persona.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Trazabilidad de objetivos | Proporción de las métricas reportadas que se remontan a un objetivo y una pregunta escritos | métricas con un objetivo y una pregunta registrados / métricas reportadas | porcentaje | Registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas) | Medición y elaboración de informes; mejora continua | Objetivo de entrega; objetivo de producto | Trimestral |
| Distribución de puntuaciones de resultados clave | Dispersión de las puntuaciones de fin de periodo de los resultados clave, mostrada como la proporción en cada banda | resultados clave en cada banda de puntuación (por ejemplo 0,0 a 0,3, 0,4 a 0,6, 0,7 a 1,0) / resultados clave puntuados en el periodo; excluye los resultados clave abandonados con un motivo registrado | porcentaje por banda | Herramienta de seguimiento de OKR o documento del equipo | Mejora continua; gestión de niveles de servicio | Planificación trimestral; revisión | Trimestral |
| Cobertura de perspectivas | Proporción de las cuatro perspectivas del cuadro de mando integral que tienen al menos una medida con un valor vigente | perspectivas con una medida reportada en el último periodo / cuatro | porcentaje | Cuadro de mando o panel | Medición y elaboración de informes; gobernanza del sistema de valor del servicio | Revisión con las partes interesadas (vistas de cliente y de aprendizaje) | Trimestral |
| Antigüedad de la revisión de indicadores | Tiempo transcurrido desde que se revisaron por última vez la definición y el objetivo de cada KPI | fecha de revisión menos la fecha de la última revisión; el reloj empieza en la última revisión registrada y se detiene en la fecha del informe; se reportan la mediana y la más antigua | días | Registro de cambios del registro de métricas | Mejora continua; medición y elaboración de informes | Acciones de la retrospectiva | Trimestral |
| Cobertura de CSF por KPI | Proporción de factores críticos de éxito con al menos un KPI que se reporta actualmente | CSF con un KPI vigente / CSF definidos para el servicio o la práctica | porcentaje | Documentación de la práctica o del servicio; registro de métricas | El enfoque de CSF y KPI en las guías de prácticas de ITIL | Definición de terminado; acuerdos de trabajo | Trimestral |

La trazabilidad de objetivos cuenta una métrica como trazada solo si están escritos tanto el objetivo como la pregunta y se nombra a la audiencia; un objetivo solo no basta. La distribución de puntuaciones de resultados clave debe leerse como una dispersión, no como un promedio, porque un promedio oculta a un equipo que lo rebajó todo y a un equipo que lo falló todo. La antigüedad de la revisión de indicadores excluye las métricas retiradas en el periodo.

## Recomendaciones

### Elige y combina marcos

**1. Elige el marco más pequeño que haga el trabajo.** Un solo equipo de servicio con un problema de mejora rara vez necesita un cuadro de mando integral completo. A menudo basta GQM, porque tiene un punto de parada claro: un árbol de un objetivo, unas pocas preguntas y unas pocas métricas. Añade estructura solo cuando una decisión lo requiera.

**2. Escribe los objetivos en tres partes: propósito, sujeto y punto de vista.** Los objetivos de GQM se formulan tradicionalmente como la mejora de una cualidad declarada de un sujeto declarado desde un punto de vista declarado, por ejemplo mejorar la claridad de las actualizaciones de incidentes para quienes dependen del centro de servicios. La estructura te obliga a decir a quién beneficia. Si un objetivo no tiene punto de vista, probablemente es un eslogan.

**3. Haz preguntas que una persona pueda responder con una historia corta.** «¿Con qué rapidez saben algo los usuarios después de reportar un problema?» es una buena pregunta, porque puedes imaginar una respuesta y la evidencia que la sustenta. «¿Cuál es nuestro rendimiento?» no lo es. Apunta a entre tres y cinco preguntas por objetivo y espera que algunas se respondan con entrevistas o muestras, no con un número.

**4. Elige las métricas al final y elige más de una.** Para cada pregunta, nombra las métricas candidatas, la fuente de datos y el vector de manipulación (véase el tema 1.5, Fuentes de datos e instrumentación). Incluye al menos una métrica en tensión con las demás, como el tiempo de respuesta junto a la tasa de reaperturas. Si una pregunta no tiene una métrica factible, dilo y planifica una comprobación cualitativa.

**5. Decide qué marco posee qué decisión.** Una disposición habitual es que el cuadro de mando integral o un equivalente contenga las pocas medidas que revisan los líderes, que los OKR contengan las mejoras que un equipo ha elegido este trimestre y que los CSF y KPI describan la salud corriente de una práctica. Escribe esta disposición en el registro de métricas para que cada número tenga una única definición y un único responsable.

### Usa bien los OKR

**6. Escribe los objetivos como resultados y los resultados clave como evidencia.** Un objetivo como «Los usuarios ven resueltos sus problemas sin tener que perseguirnos» es un resultado. Un resultado clave como «el tiempo mediano hasta una primera actualización útil baja de [valor actual] a [valor objetivo]» es evidencia. Los resultados clave que se leen como tareas («lanzar un portal nuevo») son actividades, no resultados. Si no puedes decir qué cambiaría para un usuario, el resultado clave no está terminado.

**7. Mantén los OKR a nivel de equipo y de servicio.** Fijarlos para individuos tiende a convertirlos en listas de tareas y en insumos de la evaluación del desempeño, e invita a la manipulación que predice la ley de Goodhart. Deja que un equipo escriba sus propios resultados clave a la vista y que los equipos vean los de los demás. Evita las cascadas en las que cada nivel debe reformular el nivel superior.

**8. Trata la puntuación como una conversación, no como una nota.** Los equipos que tratan una puntuación perfecta como el objetivo escriben resultados clave tímidos. Una distribución de puntuaciones agrupada arriba sugiere que se rebajó el listón, y una agrupada abajo sugiere que los objetivos eran fantasía. Revisa la dispersión cada trimestre y pregunta qué aprendió el equipo de cada fallo.

### Usa bien los cuadros de mando, los CSF y los KPI

**9. Define los CSF antes que los KPI.** Un factor crítico de éxito es un enunciado de lo que debe ser cierto, como «los usuarios pueden encontrar y usar el artículo de autoservicio adecuado». Un KPI muestra entonces si lo es. Empezar por el KPI invita a contar lo que es fácil de contar. Pregunta por cada CSF: «si esto dejara de ser cierto, ¿con qué rapidez lo notaríamos y a partir de qué?». La respuesta es el KPI.

**10. Usa las perspectivas del cuadro de mando para evitar una visión unilateral.** Las cuatro perspectivas clásicas son la financiera, la del cliente, la de procesos internos y la de aprendizaje y crecimiento. Las organizaciones de servicio suelen renombrarlas, por ejemplo costo, experiencia del usuario, salud operativa y capacidad. Lo importante es que cada perspectiva tenga al menos una medida con un valor vigente y que un descenso en una se lea junto a las demás (véase el tema 6.5, Realización de valor y resultados de negocio).

**11. Vincula la estrategia con las medidas mediante un mapa sencillo.** Un [mapa estratégico](https://en.wikipedia.org/wiki/Strategy_map) traza flechas desde la capacidad al proceso, al cliente y a los resultados financieros. Es útil para la conversación y pobre como calculadora. Dibújalo, discutid las flechas y elegid después unas pocas medidas. No intentes que el diagrama sea cuantitativamente exacto.

**12. Revisa los marcos con un calendario.** Fija una revisión trimestral en la que el equipo pregunte de cada objetivo, resultado clave y KPI si sigue importando y si sigue moviendo a la gente a la acción adecuada. Retira lo que ya no sirve y anota el motivo. Las métricas que sobreviven a sus objetivos se convierten en métricas de vanidad.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Trazabilidad de objetivos | Escribir un objetivo y una pregunta después de que la métrica ya exista, para que el registro parezca completo; objetivos vagos que justifican cualquier métrica | Muestrear cinco entradas cada trimestre y preguntar si la pregunta habría podido llevar a una métrica distinta; comprobar que se nombran la audiencia y la decisión |
| Distribución de puntuaciones de resultados clave | Escribir resultados clave fáciles para que las puntuaciones se agrupen cerca de 1,0; repuntuar con generosidad; abandonar resultados clave que van mal sin registrar por qué | Recuento de resultados clave abandonados con sus motivos; comparar los resultados clave con los del periodo anterior; revisar con la dirección la ambición mediana |
| Cobertura de perspectivas | Añadir una medida simbólica a una perspectiva para que cuente como cubierta; elegir medidas que no pueden moverse | Comprobar que cada medida de perspectiva ha cambiado de valor en el último año y tiene una decisión escrita asociada |
| Antigüedad de la revisión de indicadores | Registrar una revisión sin leer el indicador; cambiar solo la fecha | Exigir un resultado escrito (mantenido, cambiado, retirado) en cada revisión y muestrear el registro |
| Cobertura de CSF por KPI | Asignar un KPI que no guarda relación con el CSF para alcanzar la cobertura total; elegir un KPI que no puede revelar un fallo | Preguntar por cada pareja qué lectura mostraría que el CSF está fallando; buscar KPI que nunca han estado en rojo |

Una lectura sana es aquella en la que los objetivos cambian cuando cambia el mundo, se pierden algunos resultados clave por razones declaradas y el número de métricas reportadas disminuye o se mantiene en lugar de crecer. Si todo está en verde, las puntuaciones se agrupan arriba y nadie puede nombrar una métrica retirada este año, el marco se ha convertido en decoración.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Goal-Question-Metric | Ata cada métrica a una razón; fácil de explicar; funciona a escala de equipo | Necesita una sesión facilitada; puede convertirse en un ejercicio de papel; dice poco sobre la prioridad entre objetivos |
| OKR | Concentra un trimestre en unos pocos resultados; visible entre equipos; encaja con ciclos de planificación cortos | Es fácil escribir los resultados clave como tareas; las puntuaciones pueden manipularse; los OKR individuales se confunden con la evaluación del desempeño |
| Cuadro de mando integral | Da a los líderes una visión completa; vincula la estrategia con las operaciones | Pesado de mantener; las perspectivas pueden convertirse en casillas que llenar; lento en reflejar el cambio |
| CSF y KPI | Familiares en la práctica de ITIL; buen ajuste para informar sobre un servicio en marcha | Es fácil derivar hacia KPI de vanidad; los indicadores se quedan obsoletos sin revisión |
| Ningún marco | Ligero y rápido para un equipo muy pequeño | Las métricas se acumulan sin razón; se repiten las discusiones sobre qué medir |
| Varios marcos juntos | Cada decisión recibe la herramienta que le conviene | Definiciones duplicadas; confusión sobre qué número es el autorizado |

Elige el peso del marco según lo que está en juego. Un servicio interno pequeño necesita un objetivo, tres preguntas y unas pocas métricas recogidas en una página. Un servicio prestado bajo contrato puede necesitar KPI definidos al nivel de un acuerdo de nivel de servicio (véase el tema 5.1, Métricas de SLA, OLA y XLA).

## Preguntas para debatir con tu equipo

**1. ¿A qué objetivo sirve cada una de nuestras métricas reportadas y quién notaría si dejáramos de reportarla?**
Enumera las métricas en una pizarra y escribe el objetivo junto a cada una. Donde falte el objetivo, pregunta quién pidió la métrica y por qué. Algunas resultarán heredadas de un proyecto anterior y podrán retirarse. El facilitador debe tratar una métrica sin objetivo como un descubrimiento normal, no como un fracaso.

**2. Si solo pudiéramos responder tres preguntas sobre nuestro servicio, ¿cuáles serían?**
Esto obliga a ordenar las preguntas antes que las métricas. Deja que cada persona escriba tres y agrúpalas después. Compara la agrupación con el panel que tiene el equipo actualmente. Las diferencias entre ambos suelen ser el producto más útil de la sesión.

**3. ¿Cuáles de nuestros resultados clave describen un resultado para los usuarios y cuáles describen trabajo que planeamos hacer?**
Lee cada resultado clave en voz alta y pregunta si un usuario lo notaría si se lograra. Si la respuesta es no, reescríbelo como resultado o pásalo al plan. El facilitador puede mencionar que las tareas están bien, pero pertenecen a una lista de pendientes. Termina acordando un resultado clave que reescribir este trimestre.

**4. ¿Dónde discrepan nuestras cuatro perspectivas del cuadro de mando y qué nos dice eso?**
Pide al grupo que busque un periodo reciente en que una perspectiva mejoró mientras otra empeoraba, como un costo que baja mientras cae la experiencia. Hablad de la causa y de si alguien lo vio venir. Esto crea el hábito de leer las medidas juntas. Anota cualquier perspectiva sin medida y decide si añadir una o decir con claridad que no entra en el alcance.

**5. Para cada factor crítico de éxito, ¿qué lectura nos diría que está fallando?**
Elige dos CSF y nombra el KPI; pregunta después qué valor desencadenaría una conversación. Si el equipo no sabe decirlo, el KPI no está cumpliendo su función. Busca KPI que nunca han cambiado de color, lo que suele señalar un umbral demasiado laxo. El facilitador debe preguntar cuál sería el vector de manipulación del KPI.

**6. ¿Qué marco debería poseer qué decisión y dónde definimos hoy dos veces el mismo número?**
Sigue una métrica, como el tiempo de resolución de incidentes, a través de todos los informes en que aparece. Compara las definiciones. Las diferencias en los relojes o las exclusiones son comunes y a menudo explican las discusiones entre equipos. Acordad un responsable y una definición y registradlos en el registro.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega conocen los marcos sobre todo como OKR y, con suerte, como GQM. Un equipo obtiene el mayor valor cuando escribe sus propios objetivos y resultados clave, vinculados a lo que necesitan sus usuarios, y cuando mantiene las medidas de trabajo separadas de las que ven los líderes. Un equipo debe desconfiar de los resultados clave que premian la producción, como los puntos de historia o las versiones, porque invitan a los comportamientos que los marcos debían prevenir (véase el tema 1.3, Resultados sobre producción: elegir qué medir).

### Equipos de servicio y de operaciones

Los equipos de operaciones conocen los marcos sobre todo como CSF y KPI dentro de las prácticas de ITIL, además de los objetivos de nivel de servicio acordados con los clientes. Se benefician de definir el CSF en lenguaje llano antes de elegir el KPI, de reportar percentiles para las medidas de tiempo y de mantener las medidas de fiabilidad, como los indicadores y objetivos de nivel de servicio, junto a la experiencia de los usuarios (véase el tema 5.2, SLI, SLO y presupuestos de errores). También deben resistir la tentación de conservar KPI fijados hace años que ya no guardan relación con cómo se usa el servicio.

### Liderazgo y gobernanza

Los líderes eligen los marcos, normalmente pidiendo un cuadro de mando o unos OKR, y lo que hacen con los números decide cómo se comportan los marcos. Un líder que castiga un resultado clave no alcanzado enseña a los equipos a escribir otros fáciles. Un líder que pregunta qué aprendió el equipo les enseña a escribirlos honestos. Los órganos de gobernanza deben esperar un registro de métricas, un número reducido de medidas reportadas y una revisión periódica de si el propio marco funciona (véase el tema 11.4, Modelo de madurez para programas de métricas).

### Clientes y usuarios

Los clientes y usuarios rara vez ven el marco, solo sus efectos. Uno bien diseñado se nota en servicios que mejoran de las formas que pidieron y en informes honestos sobre lo que no ha mejorado. Uno deficiente se nota en informes en verde que no coinciden con la experiencia. Incluye un punto de vista del usuario en cada objetivo y deja que la retroalimentación de los usuarios figure en la perspectiva del cliente del cuadro de mando junto a los números operativos (véase el tema 6.2, Acuerdos de nivel de experiencia).

## En la práctica: un ejemplo de gestión de servicios

Un minorista en línea de tamaño medio tiene una plataforma de atención al cliente y un portal de autoservicio con varios equipos de producto y un pequeño grupo de operaciones de servicio. Todos los números son ilustrativos.

La dirección pide un cuadro de mando integral y, por separado, OKR trimestrales. En un trimestre el equipo tiene 31 medidas reportadas y nadie sabe decir por qué existe la mitad de ellas. El propietario del servicio dirige una sesión de media jornada con GQM sobre un objetivo: «Mejorar la claridad de la ayuda para los clientes que no pueden completar un pago, desde el punto de vista del cliente».

La sesión produce cuatro preguntas. ¿Encuentran los clientes el artículo de ayuda adecuado? ¿Necesitan contactar con soporte después de leerlo? ¿Cuánto tarda en resolverse un problema de pago cuando contactan con soporte? ¿Sienten que la respuesta fue clara? De las 31 medidas, nueve se corresponden con estas preguntas. Hacen falta tres nuevas: éxito de la búsqueda de artículos, tasa de contacto tras ver un artículo y una encuesta de una pregunta tras la resolución. Las 22 restantes se marcan para retirarlas, con el acuerdo del responsable.

El OKR del trimestre se escribe como un resultado. El objetivo es «Los clientes resuelven los problemas de pago sin tener que perseguirnos». Los tres resultados clave son el tiempo mediano y el percentil 90 hasta la resolución, la tasa de contacto tras ver artículos y el resultado de la encuesta sobre claridad. El cuadro de mando mantiene la perspectiva del cliente apuntando a las mismas medidas, de modo que hay una definición y no dos.

A mitad del trimestre aparece un riesgo de manipulación. La tasa de contacto tras ver artículos baja bruscamente, lo que parece un éxito. Un revisor muestrea 20 sesiones y descubre que un rediseño movió el enlace de «contáctanos» tres pantallas más adentro. Menos personas llegan a soporte, y la encuesta muestra puntuaciones de claridad más bajas. El equipo añade el abandono de búsquedas y los comentarios de la encuesta como barreras de protección y restituye el enlace.

Al final del trimestre las puntuaciones de los resultados clave son 0,6, 0,8 y 0,5, que el equipo presenta tal cual. La dirección pregunta qué aprendió el equipo, no por qué las puntuaciones no eran más altas. La decisión, anotada en el registro de decisiones, es mantener el objetivo un segundo trimestre, sustituir la tasa de contacto por la proporción de clientes que resuelven el problema en la primera visita y retirar seis medidas más del cuadro de mando.

## Agilidad, IA, automatización y analítica

### Agilidad

Los objetivos y las preguntas deben revisarse a medida que el equipo aprende, así que elige un marco lo bastante ligero como para revisarlo en las revisiones periódicas de mejora con las partes interesadas. Un enfoque práctico es escribir el objetivo, la pregunta y dos o tres indicadores en una página y revisarla a menudo. La precaución es que un marco usado como ejercicio de diseño puntual se queda obsoleto y el panel se aleja de los objetivos.

### IA

Añade la IA al marco de forma explícita: a qué objetivo sirve una práctica asistida por IA, qué pregunta responde su medida y qué medida de calidad se le empareja. Alinearse con un vocabulario de gobernanza como el NIST AI Risk Management Framework puede ayudar, pero comprueba lo que dice el texto vigente antes de citarlo. La precaución es que un marco que solo mide la adopción de la IA premiará el uso por el uso.

### Automatización

Usa la automatización para mantener al día la trazabilidad del objetivo al indicador, por ejemplo señalando los indicadores sin objetivo vinculado. Incluye la automatización en el marco como algo que medir por sus resultados y sus fallos. La precaución es que un marco puede convertirse en un gran informe automatizado que nadie lee.

### Analítica

Elige indicadores que los datos puedan respaldar y di qué decisión informa cada uno. Cuando se aplican varios marcos, como objetivos y resultados clave, un cuadro de mando integral y los factores críticos de éxito de ITIL, asígnalos a un único conjunto en lugar de mantener tres. La precaución es que un marco no puede corregir datos deficientes, así que empareja la elección de indicadores con las comprobaciones de calidad de datos del tema 1.5, Fuentes de datos e instrumentación.

## Perspectiva sectorial

**Startup.** Una startup suele necesitar un objetivo, tres preguntas y un puñado de métricas, recogidos en una sola página. Los OKR son comunes y funcionan bien cuando los escribe el equipo que hará el trabajo. Resiste la tentación de añadir un cuadro de mando hasta que lo exijan los inversores o los clientes.

**Pequeña empresa.** Los recursos son escasos, así que elige un marco y úsalo con ligereza. Suelen bastar CSF y KPI escritos para las dos o tres cosas que el negocio no puede permitirse hacer mal. Prefiere la retroalimentación directa de los clientes a una puntuación elaborada.

**Gran empresa.** Normalmente coexisten varios marcos, lo que convierte la propiedad de las definiciones en el principal desafío. Mantén un registro, designa qué marco contiene qué número y haz una revisión anual de todo el conjunto. Ten cuidado con las cascadas que obligan a cada equipo a reformular los objetivos corporativos con sus propias palabras.

**Gobierno y sector público.** La información obligatoria y los niveles de servicio contractuales actúan como KPI fijos. Trátalos como un dato dado y usa GQM u OKR para el trabajo de mejora a su alrededor. La rendición de cuentas pública eleva lo que está en juego con un número engañoso, así que publica las definiciones y sé transparente sobre los cambios (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo de un marco es sobre todo tiempo: una sesión facilitada para diseñar las medidas, una breve revisión trimestral y el mantenimiento de un registro. Existe software para OKR o cuadros de mando, pero a pequeña escala suele bastar un documento o una hoja de cálculo. El costo mayor es la atención de la dirección, ya que un marco que los líderes no usan se convierte en informes por los informes.

El retorno proviene de menos medidas y mejores. Los equipos que pueden decir por qué existe cada número dedican menos tiempo a producir informes que nadie lee, discuten menos sobre las definiciones y notan antes cuándo una medida ha dejado de informar decisiones. En lugar de citar una cifra, mide tus propias líneas base: el número de métricas reportadas, la proporción con un objetivo registrado y el tiempo dedicado a preparar informes periódicos, antes y después de adoptar el marco. Un tratamiento más completo del retorno de la inversión figura en otro lugar (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Métricas antes que objetivos.** Partir de los datos que tienes produce un panel de lo que es fácil de contar. Escribe primero el objetivo y la pregunta y mira después qué datos encajan.
- **OKR como listas de tareas.** Los resultados clave que nombran actividades hacen que cada trimestre parezca ajetreado y no dicen nada de los resultados. Reescribe cada uno como evidencia que un usuario notaría.
- **OKR y cuadros de mando como objetivos individuales.** Invitan a la manipulación y desalientan la ayuda entre personas. Mantenlos a nivel de equipo y de servicio.
- **Un cuadro de mando con perspectivas vacías o simbólicas.** Llenar cada casilla con algo no es lo mismo que ver el conjunto. Exige un valor vigente y una decisión para cada una.
- **KPI que nunca cambian.** Si un indicador lleva años en verde, su umbral probablemente es erróneo o no mide nada que pueda fallar. Pregunta qué lectura mostraría un problema y reajústalo.
- **Marcos apilados sin propiedad.** Tres marcos que definen la misma medida de tres maneras crean discusiones. Nombra un responsable y una única definición.
- **Premiar la puntuación.** Si una puntuación perfecta de OKR recibe elogios o retribución, los equipos escribirán resultados clave fáciles. Premia el aprendizaje honesto y las buenas preguntas.
- **El marco como ceremonia.** Un día de talleres que produce un cartel plastificado no cambia nada. Guarda el resultado en el registro y revísalo con un calendario.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Objetivos y preguntas | Métricas elegidas porque existen los datos | Algunos equipos escriben objetivos antes que métricas | Un formato común de objetivo y pregunta; cada métrica reportada se remonta a uno | La trazabilidad se revisa y las lagunas llevan a trabajo financiado | Los objetivos se escriben con clientes y proveedores y se revisan a medida que cambian las condiciones |
| Uso del marco | Ad hoc; sin marco declarado | Los equipos adoptan marcos distintos con vocabulario distinto | Una disposición escrita dice qué marco posee qué decisión | Los resultados del marco se revisan y se descartan las partes sin uso | Marcos alineados entre equipos y proveedores con un único conjunto de definiciones |
| Indicadores y puntuación | KPI fijados una vez y nunca revisados | Algunos KPI tienen responsables y umbrales | Los KPI y resultados clave tienen responsables, definiciones y barreras de protección | Puntuaciones e indicadores con tendencias y revisados cada trimestre por si hay manipulación | Indicadores retirados y sustituidos de forma rutinaria, con cambios ligados a resultados |
| Uso en decisiones | Los informes se producen y se ignoran | Los líderes piden números cuando algo va mal | Las revisiones registran las decisiones que los números influyeron | Las preguntas de aprendizaje son habituales; los objetivos no alcanzados se discuten sin culpa | La planificación de mejoras entre equipos usa los mismos objetivos y medidas compartidos |

## Lista de verificación

- [ ] Cada métrica reportada se remonta a un objetivo escrito, una pregunta y una audiencia con nombre.
- [ ] Un registro de métricas anota qué marco posee cada métrica y su única definición.
- [ ] Los objetivos se escriben con un propósito, un sujeto y un punto de vista.
- [ ] Cada resultado clave describe un resultado que alguien notaría, no una tarea.
- [ ] Los OKR, las medidas del cuadro de mando y los KPI pertenecen a equipos o servicios, no a individuos.
- [ ] Cada factor crítico de éxito tiene al menos un KPI vigente y una lectura declarada que mostraría el fallo.
- [ ] Cada perspectiva del cuadro de mando tiene una medida con un valor vigente.
- [ ] Cada métrica tiene un vector de manipulación y una barrera de protección con nombre.
- [ ] Una revisión trimestral pregunta si cada objetivo, resultado clave y KPI sigue importando.
- [ ] Al menos una métrica o indicador se ha retirado o rediseñado en el último año, con el motivo registrado.

## Prompts de IA

**Convierte un objetivo en preguntas y métricas candidatas.**

```text
Our team is [team name], which runs [type of service or delivery work] for
[audience]. Our goal is: [goal stated as purpose, subject, and viewpoint]. Using
the Goal-Question-Metric approach, propose three to five questions that would
show whether we are meeting this goal. For each question, suggest candidate
metrics we could define, the kind of data source we would need, the likely
gaming vector, and a guardrail. Do not invent benchmark values or statistics.
List your assumptions and anything you could not determine from what I gave you.
```

**Revisa un borrador de OKR.**

```text
Here are our draft objectives and key results for [period]: [paste OKRs]. Our
team is [team name] and our users are [audience]. Review each key result and
tell me whether it describes an outcome or an activity, whether it could be met
without helping users, and what guardrail would show that. Suggest rewrites
where needed, using [placeholders] for any numbers we must supply ourselves.
Do not invent targets or benchmark values. List your assumptions and questions I
should answer.
```

**Asigna factores críticos de éxito a KPI.**

```text
For the ITIL practice [practice name] in our organization, which serves
[audience], here are the critical success factors we have drafted: [list CSFs].
Propose KPIs for each that could be collected from [data sources]. For each KPI,
state where the clock starts and stops if it is a time measure, what reading
would show the factor is failing, and how it might be gamed. Do not state
benchmark values or compliance claims. List your assumptions.
```

**Audita el equilibrio de un cuadro de mando.**

```text
Our scorecard has these measures, grouped by perspective: [paste measures by
perspective]. We are [type of organization]. Identify perspectives that are
thin, measures that appear to duplicate each other, and measures that could
move in a way that hides a problem in another perspective. Suggest guardrails
and measures to retire. Do not invent figures or sources. List your
assumptions and what you could not judge from the data I gave you.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar qué tema posee una métrica y su barrera de protección emparejada antes de situarla en un marco.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica basada en un marco lleva su definición, vector de manipulación y barrera de protección.

## Ideas clave

- Un marco decide qué métricas se ganan un lugar, y la regla común es partir de un objetivo y una pregunta y elegir después la métrica.
- Goal-Question-Metric sirve para diseñar medidas de un equipo, los OKR para concentrar un trimestre, los cuadros de mando para visiones completas de la dirección y los CSF con KPI para operar una práctica de ITIL.
- Usa el marco más ligero que funcione y di cuál posee qué número.
- Todo marco puede manipularse, así que empareja cada métrica con una barrera de protección y revisa el conjunto con un calendario.
- Mantén los marcos a nivel de equipo y de servicio, nunca como objetivos individuales.
- Retira los objetivos, resultados clave e indicadores que ya no informan decisiones.

## Referencias y lecturas complementarias

1. Basili, V. R., Caldiera, G., and Rombach, H. D., "The Goal Question Metric Approach," in *Encyclopedia of Software Engineering*, Wiley, 1994.
2. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January-February 1992.
3. Kaplan, R. S., and Norton, D. P., *The Balanced Scorecard: Translating Strategy into Action*, Harvard Business School Press, 1996.
4. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
5. Grove, A. S., *High Output Management*, Random House, 1983.
6. Rockart, J. F., "Chief Executives Define Their Own Data Needs," *Harvard Business Review*, March-April 1979.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
9. Axelos, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
10. Wikipedia, [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili).
11. Wikipedia, [OKR](https://en.wikipedia.org/wiki/OKR).
12. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
13. Wikipedia, [Critical success factor](https://en.wikipedia.org/wiki/Critical_success_factor).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
17. Wikipedia, [Strategy map](https://en.wikipedia.org/wiki/Strategy_map).
