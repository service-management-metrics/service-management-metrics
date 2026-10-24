# Métricas de la lista de pendientes y su refinamiento

**Una lista de pendientes es una cola de promesas, así que mide cuántas promesas esperan, cuánto tiempo llevan esperando y cuánto del próximo tramo de trabajo está realmente listo, y trata una pila creciente de elementos antiguos como una decisión que aún no has tomado.**

## Visión general y motivación

Todo equipo que construye u opera un servicio mantiene una lista del trabajo que ha acordado considerar. En la práctica ágil esta lista es la [lista de pendientes del producto](https://en.wikipedia.org/wiki/Product_backlog) (product backlog), un conjunto ordenado de elementos que describe lo que podría hacerse para mejorar el producto. En un tablero de flujo, el equivalente es el conjunto de elementos que esperan a la izquierda de las columnas de iniciado. En la gestión de servicios de TI (ITSM), tal como la describe [ITIL](https://en.wikipedia.org/wiki/ITIL), los equivalentes son los incidentes, solicitudes de servicio, problemas y cambios abiertos que esperan en una cola. Todas son listas de pendientes. Difieren en quién las llena, a qué velocidad deben salir los elementos y qué significa que un elemento espere.

La mayoría de los datos proceden de un [sistema de seguimiento de incidencias](https://en.wikipedia.org/wiki/Issue_tracking_system) o de una herramienta ITSM. Las métricas de la lista de pendientes responden a una pregunta sencilla: ¿está la cantidad de trabajo prometido en proporción a la capacidad de hacerlo y sigue valiendo la pena el trabajo prometido? Una lista de pendientes que crece sin límite no describe un plan. Describe una lista de deseos, y cada lector de ella, desde el responsable de producto hasta el cliente que planteó un elemento, se formará su propia idea de cuándo estará hecho. La respuesta honesta suele ser «nunca», y el costo de no decirlo se paga en confianza, en tiempo dedicado a releer elementos antiguos y en decisiones tomadas con información obsoleta.

El refinamiento es la actividad que mantiene útil una lista de pendientes. En la práctica ágil, el refinamiento de la lista de pendientes del producto es el trabajo continuo de añadir detalle, estimaciones y orden a los elementos para que estén listos para empezar. Los equipos que toman trabajo a medida que se libera capacidad suelen llamar a la misma actividad reposición o «grooming» de la lista. En ITSM aparece como clasificación inicial, categorización y depuración de una lista de errores conocidos o de problemas. Las métricas de este tema miden el tamaño y la antigüedad de la lista de pendientes, cuánto trabajo está listo y lo bien que el refinamiento mantiene una ventana de trabajo listo por delante del equipo.

Cuatro términos se repiten. Un **elemento** es una entrada individual de una lista de pendientes, como una [historia de usuario](https://en.wikipedia.org/wiki/User_story), un defecto, una solicitud de servicio o un registro de problema. La **antigüedad del elemento** es el tiempo transcurrido desde que el elemento entró en la lista de pendientes, que es distinta de la antigüedad del elemento de trabajo en la medición del flujo, donde el reloj empieza cuando comienza el trabajo (véase el tema 2.1, Medidas de flujo). **Listo** significa que un elemento cumple la definición de listo escrita del equipo, de modo que el equipo podría empezarlo y esperar terminarlo dentro de una ventana de nivel de servicio. El **refinamiento** es el trabajo de dejar listos los elementos y de retirar los que nunca se harán.

Las listas de pendientes de producto y de servicio se comportan de forma distinta, y mezclarlas es el error más común en esta área. Una lista de pendientes del producto es un lugar donde los elementos se mantienen deliberadamente hasta que el responsable de producto decide su orden. Esperar es un estado normal, y un elemento antiguo es motivo para preguntar si aún importa. Una lista de pendientes de servicio de incidentes y solicitudes es una cola con una promesa adjunta: el cliente espera una respuesta dentro de un tiempo. La espera allí es un costo para el cliente desde el primer minuto. Una lista de pendientes de producto debe podarse; una lista de pendientes de servicio debe vaciarse. Si pones las dos en un mismo gráfico, el gráfico engañará.

La visión ágil trata la lista de pendientes como un artefacto vivo, propiedad de un responsable de producto, lo bastante corto como para entenderlo y ordenado por valor. La visión de ITIL trata los registros abiertos como trabajo en curso frente a un nivel de servicio acordado, propiedad de una práctica. Ambas visiones comparten un hecho de la teoría de colas: una cola que recibe elementos más deprisa de lo que los libera crecerá, y el tiempo que espera un elemento crece con la cola (véase el tema 2.3, Trabajo en curso y teoría de colas). La [ley de Little](https://en.wikipedia.org/wiki/Little%27s_law) vincula el tamaño de la cola, la tasa a la que salen los elementos y el tiempo medio que un elemento pasa en el sistema, y es la razón por la que el tamaño y la antigüedad de la lista de pendientes son dos vistas de lo mismo.

Una última distinción mantiene honesto el tema. Una lista de pendientes no es una medida de productividad ni de lo ocupado que está un equipo. Una lista de pendientes grande puede significar un producto popular, una lista mal podada o un equipo con pocos recursos, y el número por sí solo no puede decir cuál.

## Principios clave

- **Mide la antigüedad además del tamaño.** El tamaño dice cuánto espera; la antigüedad dice cuánto tiempo, y los elementos más antiguos muestran dónde se están evitando decisiones.
- **Mantén separadas las listas de pendientes de producto y de servicio.** Una idea retenida y un cliente que espera son cosas distintas, y cada una necesita su propia lectura.
- **Apunta a trabajo listo, no a una lista larga.** Unas pocas semanas de trabajo listo y bien ordenado valen más que mil elementos que nadie ha mirado.
- **Podar es una función.** Retirar un elemento que nunca se hará es trabajo honesto, y una tasa de descarte que nunca supera el cero es una señal de alarma.
- **Usa distribuciones.** Reporta la mediana y el percentil 85 de la antigüedad de los elementos y muestra el elemento más antiguo, ya que los promedios ocultan la cola.
- **Describe el equipo y el sistema.** Las métricas de la lista de pendientes muestran cómo llega el trabajo a un equipo y cómo se gestiona, nunca cómo rindió un individuo.
- **Ata cada número a una decisión.** Si un gráfico de la lista de pendientes no cambiaría lo que haces a continuación, retíralo.

## Definiciones de métricas

Las métricas siguientes se aplican a una sola lista de pendientes cada vez. Elige primero la lista de pendientes (una lista de pendientes de producto, una cola de incidentes, una cola de solicitudes de servicio, una lista de problemas) y reporta cada métrica por lista. Los percentiles usan el método de [percentil](https://en.wikipedia.org/wiki/Percentile) indicado en el tema 1.6, Alfabetización estadística para métricas de servicio.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tamaño de la lista de pendientes | Número de elementos abiertos de una lista de pendientes con nombre en un momento dado | Recuento de elementos con estado abierto o listo en la fecha de la instantánea; excluye los elementos en curso y los cerrados | elementos | Instantánea del gestor de incidencias o de la herramienta ITSM | Gestión de incidentes; gestión de solicitudes de servicio; gestión de problemas | Lista de pendientes del producto; cola de entrada | Semanal |
| Antigüedad de la lista de pendientes | Distribución de cuánto tiempo han esperado los elementos abiertos | Para cada elemento abierto, fecha de la instantánea menos la fecha en que entró en la lista; se reportan la mediana, el percentil 85 y el elemento más antiguo | días | Historial de creación y estados del gestor o de la herramienta ITSM | Gestión de incidentes; gestión de problemas; mejora continua | Salud de la lista de pendientes; revisión de elementos antiguos | Semanal |
| Profundidad del trabajo listo | Cuánto trabajo listo tiene el equipo por delante | Elementos que cumplen la definición de listo / promedio de elementos terminados por semana en los últimos seis periodos | semanas | Indicador de listo del gestor e historial de caudal | Análisis de negocio; gestión de solicitudes de servicio | Definición de listo; refinamiento | Por periodo de planificación |
| Cobertura del refinamiento | Proporción de la ventana a corto plazo que está lista | Elementos de las próximas dos quincenas de trabajo esperado (o los N primeros por orden) que cumplen la definición de listo / elementos de esa ventana | porcentaje | Orden, indicador de listo y trabajo planificado del gestor | Análisis de negocio; habilitación de cambios (para el cambio planificado) | Refinamiento de la lista de pendientes del producto | Por periodo de planificación |
| Razón entrada-salida de la lista de pendientes | Si los elementos llegan más deprisa de lo que salen | Elementos añadidos en el periodo / elementos retirados de la lista por finalización o descarte en el mismo periodo; una razón superior a 1 significa crecimiento | razón | Eventos de creación y resolución del gestor o de ITSM | Gestión de incidentes; gestión de solicitudes de servicio; gestión de la capacidad y el rendimiento | Tasas de llegada y salida | Semanal |
| Tasa de descarte de la lista de pendientes | Proporción de elementos que salen sin entrega | Elementos cerrados como no se hará, duplicado u obsoleto / todos los elementos que salen de la lista en el periodo; excluye los elementos cerrados como hechos | porcentaje | Campo de resolución del gestor | Mejora continua; gestión de problemas (revisión de errores conocidos) | Poda de la lista de pendientes; ordenación por el responsable de producto | Mensual |
| Lista de pendientes de servicio fuera de objetivo | Proporción de los elementos de servicio abiertos más antiguos que su ventana acordada de respuesta o resolución | Elementos abiertos cuyo tiempo transcurrido supera el objetivo de servicio / todos los elementos abiertos de la cola; el reloj corre desde el registro y se pausa solo en los estados que permite la definición escrita | porcentaje | Herramienta ITSM con reloj de nivel de servicio | Gestión de niveles de servicio; gestión de incidentes; gestión de solicitudes de servicio | Carril de urgencia; expectativa de nivel de servicio | Diaria o semanal |

Tres relojes necesitan explicarse con claridad. La antigüedad de la lista de pendientes empieza cuando el elemento se crea en la lista y se detiene cuando sale por finalización o descarte, de modo que un elemento reabierto empieza una antigüedad nueva. La profundidad del trabajo listo usa el caudal de los elementos completados solamente, nunca la velocidad planificada, ya que la velocidad planificada es un pronóstico. La lista de pendientes de servicio fuera de objetivo usa el reloj de nivel de servicio, que puede diferir de la antigüedad de la lista por las pausas permitidas (véase el tema 5.1, Métricas de SLA, OLA y XLA).

## Recomendaciones

### Prepara la lista de pendientes para que pueda medirse

**1. Nombra cada lista de pendientes y su responsable.** Cada lista de pendientes dentro del alcance tiene un responsable, un propósito y una lista de tipos de elemento. Una lista de pendientes de producto pertenece a un responsable de producto; una cola de incidentes pertenece al centro de servicios o al grupo resolutor. Sin un responsable con nombre nadie decide cuándo debe salir un elemento antiguo.

**2. Separa los elementos retenidos de las promesas en cola.** Etiqueta cada elemento como una idea que el equipo retiene para ordenar o como un compromiso que alguien está esperando. Reporta por separado el tamaño y la antigüedad de cada tipo. Una solicitud de soporte en una lista de pendientes de producto es una promesa en cola en el lugar equivocado y merece un reloj de servicio.

**3. Escribe la definición de listo y mantenla breve.** Una definición de listo enumera las pocas cosas que un equipo necesita saber antes de empezar: el resultado buscado, un tamaño aproximado, las condiciones de aceptación y cualquier dependencia. Mantenla en un puñado de líneas y revísala cuando deje de predecir un trabajo fluido. Una lista de comprobación larga convierte el refinamiento en papeleo e invita a marcar casillas.

**4. Registra la fecha de entrada y el motivo de salida.** La antigüedad y la tasa de descarte dependen de dos campos: la fecha en que entró un elemento y el motivo por el que salió. Haz ambos obligatorios en la herramienta y añade una lista controlada de motivos de salida como hecho, duplicado, obsoleto y no se hará. Las fechas ausentes son la causa más común de una antigüedad de la lista inservible (véase el tema 1.5, Fuentes de datos e instrumentación).

### Lee juntos el tamaño y la antigüedad

**5. Reporta la antigüedad de la lista de pendientes como una distribución.** Muestra la mediana, el percentil 85 y el elemento más antiguo, y un histograma por bandas de antigüedad, como menos de 30 días, de 30 a 90, de 90 a 180 y más de 180. Una antigüedad media plana puede ocultar una pila creciente de elementos antiquísimos porque los elementos nuevos rebajan el promedio. La vista del elemento más antiguo es la más difícil de esconder.

**6. Usa la razón entrada-salida para ver el crecimiento pronto.** Una razón persistentemente superior a 1 significa que la lista de pendientes crecerá, sea cual sea su tamaño actual. Grafícala como una cifra móvil de cuatro semanas para suavizar las vacaciones y las semanas de versión. Empárejala con el caudal para que el equipo vea si el crecimiento viene de una demanda creciente o de una producción decreciente (véase el tema 2.1, Medidas de flujo).

**7. Convierte el tamaño en tiempo con el caudal.** Divide el tamaño de la lista por el promedio de elementos terminados por periodo para obtener un número aproximado de periodos de trabajo en espera, un uso directo de la ley de Little. Deja claro que es un promedio, no una promesa, y muestra el rango usando un caudal menor y uno mayor de periodos recientes. Una lista de pendientes de producto de cien elementos que equivale a un año de trabajo es una conversación sobre el alcance, no un calendario.

### Mantén fluyendo el refinamiento

**8. Apunta a una ventana de trabajo listo, no a una lista de pendientes llena de él.** Refina lo suficiente para las próximas una a tres semanas de trabajo y no más. El detalle añadido a un elemento que no se empezará en seis meses suele quedar obsoleto, así que mide la profundidad del trabajo listo y deja que fluctúe dentro de una banda objetivo, como de una a tres semanas de trabajo, que el equipo elige y revisa. Una profundidad muy por encima de la banda es desperdicio; una profundidad por debajo de una semana de trabajo es un riesgo de planificación ociosa o apresurada.

**9. Mide la cobertura del refinamiento sobre los elementos que están a punto de empezar.** La cobertura del refinamiento mira solo la parte superior del orden. Responde a la pregunta que hará la reunión de planificación: si empezáramos ahora, ¿estarían listos los elementos siguientes? Repórtala justo antes de la planificación, cuando un fallo aún puede corregirse, y no después.

**10. Haz del refinamiento una actividad regular y breve.** Las orientaciones ágiles, incluida la Scrum Guide, describen el refinamiento como una actividad continua y dejan su forma en manos del equipo. Muchos equipos descubren que una sesión corta y frecuente funciona mejor que una reunión larga.

### Poda y revisa

**11. Poda con un calendario y reporta la tasa de descarte.** Revisa cada mes los elementos más antiguos y pregunta de cada uno: ¿lo haremos en los próximos seis meses y, si no, por qué conservarlo? Cerrar un elemento con un motivo declarado no es un fracaso. Un equipo que nunca descarta probablemente acumula, y uno que descarta la mayor parte de lo que recibe probablemente acepta trabajo que debió rechazar en la puerta.

**12. Gestiona las listas de pendientes de servicio vaciándolas, no podándolas.** Para las colas de incidentes y solicitudes, la primera pregunta es si los elementos están dentro de su ventana de servicio. Haz seguimiento de la proporción fuera de objetivo y del elemento abierto más antiguo, y mantén el carril de urgencia para los elementos que no pueden esperar. Las listas de problemas y de errores conocidos están a medio camino entre los dos mundos: se retienen hasta que se financia una corrección, así que revísalas como una lista de pendientes de producto, con una fecha de revisión declarada para cada entrada (véase el tema 4.6, Deuda técnica y errores conocidos).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tamaño de la lista de pendientes | Cerrar elementos en bloque como obsoletos, dividir elementos para parecer ocupado o esconder trabajo en listas laterales y hojas de cálculo | Tasa de descarte con motivos de salida; comparación periódica de la herramienta con la lista real de solicitudes; retroalimentación de los clientes sobre los elementos descartados |
| Antigüedad de la lista de pendientes | Reiniciar la fecha de entrada clonando o recreando elementos antiguos; mover elementos entre listas; reabrir en lugar de volver a plantear para cambiar el reloj | Auditoría de los elementos clonados y movidos; revisión del elemento más antiguo; antigüedad medida desde la primera creación a través de los registros vinculados |
| Profundidad del trabajo listo | Marcar elementos como listos sin comprobarlos; inflar la profundidad escribiendo elementos detallados para trabajo de poco valor | Muestra de elementos listos leída frente a la definición; tasa de retrabajo o de vuelta al refinamiento cuando empieza el trabajo |
| Cobertura del refinamiento | Marcar el indicador de listo para alcanzar el número; estrechar la ventana para que cuenten menos elementos | Recuento de elementos devueltos tras la planificación; éxito del objetivo de entrega y cambio de alcance a mitad de periodo (véase el tema 2.5, Métricas de pronóstico y planificación de entregas) |
| Razón entrada-salida de la lista de pendientes | Cerrar rápidamente los elementos fáciles para empujar la salida, o rechazar elementos nuevos en la puerta para frenar la entrada | Antigüedad de los elementos más antiguos; tasa de descarte; proporción de solicitudes rechazadas sin motivo; necesidades no atendidas declaradas por los clientes |
| Tasa de descarte de la lista de pendientes | Descartar elementos que los usuarios aún quieren para reducir el tamaño; o evitar descartes para que el número parezca suave | Revisión de una muestra de elementos descartados con el solicitante; tasa de reapertura y de nuevo planteamiento de los elementos descartados |
| Lista de pendientes de servicio fuera de objetivo | Pausar el reloj con un estado de espera del cliente, rebajar la prioridad o cerrar y reabrir para reiniciar la ventana | Proporción de tiempo en estados de pausa; tasa de reaperturas (véase el tema 1.2, Ley de Goodhart y psicología de las métricas); satisfacción del usuario con los tickets cerrados |

Una lectura sana muestra una lista de pendientes cuyo tamaño es estable o decrece despacio, cuyos elementos más antiguos son pocos y cada uno tiene un responsable y un motivo declarado, y cuya ventana a corto plazo está mayormente lista. La razón entrada-salida ronda 1, la tasa de descarte no es cero ni domina y la cobertura del refinamiento sube sin que el trabajo planificado se vuelva más frágil. Cuando los números parezcan buenos pero los clientes sigan diciendo que no pasa nada con sus solicitudes, cree a los clientes y audita los datos.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Lista de pendientes de producto pequeña y podada con energía | Fácil de entender y mantener ordenada; honesta sobre la capacidad | Riesgo de descartar ideas que habrían importado más tarde; los solicitantes pueden sentirse ignorados |
| Lista de pendientes grande y conservada | Conserva cada idea y solicitud; historial útil | Costosa de leer; los elementos obsoletos engañan a la planificación y ocultan las prioridades reales |
| Ventana de trabajo listo profunda (muchas semanas refinadas) | Planificación fluida; menos sorpresas cuando empieza el trabajo | El detalle refinado queda obsoleto; esfuerzo gastado en trabajo que quizá nunca empiece |
| Ventana de trabajo listo poco profunda (alrededor de una semana) | Poco detalle desperdiciado; se mantiene flexible | La planificación puede atascarse cuando unos pocos elementos no están listos; menos antelación para detectar dependencias |
| Definición de listo estricta | Menos inicios vagos; trabajo predecible | Puede convertirse en una barrera que frena el flujo y fomenta el rellenado de casillas |
| Definición de listo ligera | Rápida; confía en el equipo | Más descubrimiento durante el trabajo; más cambios a mitad de periodo |

La respuesta práctica es mantener la lista de pendientes lo bastante pequeña como para leerla de una sentada, conservar una ventana de trabajo listo de aproximadamente una a tres semanas y dejar que la definición de listo sea lo bastante corta como para que la gente la recuerde. Las colas de servicio requieren la postura contraria: lo pequeño no es una meta, lo es terminar dentro de la ventana acordada. Elige en cada fila la casilla que encaje con tu contexto y anota el motivo.

## Preguntas para debatir con tu equipo

**1. Si dejáramos de añadir elementos hoy, ¿cuánto tardaríamos en vaciar la lista de pendientes con nuestro caudal reciente y resulta creíble ese número?**
Empieza dividiendo el tamaño de la lista por el número típico de elementos terminados por periodo y muestra el rango usando los mejores y los peores periodos recientes. Pregunta si el equipo cree el resultado y adónde iría realmente el tiempo. Si el número supera un año para una lista de pendientes de producto, pregunta qué elementos podrían retirarse sin que nadie lo notara.

**2. ¿Cuáles son los cinco elementos más antiguos y quién decidió que debían seguir aquí?**
Lee en voz alta los cinco elementos más antiguos con sus fechas de entrada. Para cada uno, pide un responsable con nombre y un motivo por el que permanece, como esperar una dependencia, un aplazamiento deliberado o el abandono. Acuerden una acción para cada uno: programarlo, descartarlo o anotar por qué se queda y cuándo volver a mirarlo.

**3. ¿Qué significa «listo» aquí y nuestras sorpresas recientes vinieron de elementos que no lo estaban?**
Pide a cada persona que escriba la definición de listo con sus propias palabras y compárenlas. Las diferencias son el primer hallazgo. Miren atrás los elementos que provocaron preguntas a mitad de periodo o retrabajo y pregunten qué los habría dejado listos. El facilitador debe resistir la tentación de añadir elementos a la lista de comprobación por cada sorpresa y elegir en su lugar el uno o dos que habrían evitado más dolor.

**4. ¿Cuáles de nuestras listas de pendientes contienen ideas y cuáles contienen promesas a alguien?**
Enumera cada lista de pendientes y clasifica sus elementos en los dos tipos. Las solicitudes de soporte, los incidentes y los elementos comprometidos con clientes son promesas y necesitan un reloj de servicio; las ideas y las mejoras se retienen para ordenarse. Hablen de dónde se mezclan ambos y qué hace eso al gráfico de antigüedad. El resultado puede ser tan simple como una etiqueta y un filtro que permita reportar cada tipo por separado.

**5. ¿Cuándo retiramos elementos a propósito por última vez y cómo reaccionaron los solicitantes?**
Podar suele parecer arriesgado, así que mira la evidencia. Comprueba la tasa de descarte y muestrea algunos elementos descartados. Pregunta si se avisó al solicitante y si alguien pidió recuperar un elemento. El facilitador debe ayudar al grupo a acordar un mensaje sencillo para los solicitantes («no planeamos hacer esto; este es el motivo; vuelve a plantearlo si cambian las circunstancias») para que la poda se vuelva rutinaria y respetuosa.

**6. Si quisiéramos que nuestros gráficos de la lista de pendientes lucieran mejor sin ayudar a nadie, ¿qué haríamos?**
Ejecuta la revisión de manipulación del tema 1.2 sobre cada métrica de la lista de pendientes. Las respuestas probables incluyen cerrar elementos antiguos en bloque, clonar elementos para reiniciar la antigüedad, marcar elementos como listos antes de tiempo y estrechar la ventana que cuenta la cobertura. Para cada respuesta, comprueba si la barrera de protección de la tabla anterior la detectaría. Anota las que se escaparían y elige una comprobación nueva que probar el próximo trimestre.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega usan las métricas de la lista de pendientes para mantener tranquila la planificación. La profundidad del trabajo listo y la cobertura del refinamiento dicen al equipo si la próxima sesión de planificación será fluida, y la antigüedad de la lista muestra qué promesas se están pudriendo en silencio. Un buen hábito es revisar la antigüedad, la razón entrada-salida y la profundidad de lo listo durante unos minutos en cada sesión de refinamiento y actuar después sobre una cosa. Los equipos deben publicar hacia fuera un conjunto pequeño y estable y guardar para sí las bandas de antigüedad detalladas (véase el tema 2.5, Métricas de pronóstico y planificación de entregas).

### Equipos de servicio y de operaciones

Los equipos de operaciones operan colas con relojes. Su lectura central es la proporción de elementos abiertos fuera de objetivo junto con el elemento abierto más antiguo, desglosada por prioridad y por estado de pausa. Las listas de problemas y de errores conocidos necesitan una fecha de revisión en cada entrada para que los elementos retenidos no se vuelvan permanentes. Los equipos deben vigilar también la razón entrada-salida de la cola de incidentes, ya que una razón superior a 1 durante varias semanas es una señal temprana de falta de personal o de una causa recurrente (véase el tema 3.2, Volumen y prioridad de incidentes).

### Liderazgo y gobernanza

Los líderes ven una lista de pendientes como una declaración de intenciones. Una lista de pendientes muy grande les dice que la organización promete más de lo que puede entregar, y una que se reduce rápidamente puede significar poda o una demanda menor. Pregunten a qué decisión informa el número. Financien el tiempo de refinamiento y de poda, eviten objetivos sobre el tamaño en bruto y pidan la distribución de antigüedad y los motivos de descarte cuando se presente una cifra de tamaño (véase el tema 1.3, Resultados sobre producción: elegir qué medir).

### Clientes y usuarios

Los clientes experimentan la lista de pendientes como silencio. Un elemento planteado hace seis meses sin respuesta dice más que cualquier gráfico. Los usuarios valoran que se les diga la verdad: está planificado, no está planificado y este es el motivo, o espera una dependencia. Den a los solicitantes una forma de ver el estado de sus elementos y traten los elementos descartados como una tarea de comunicación y no de depuración de datos (véase el tema 3.5, Métricas de cumplimiento de solicitudes de servicio).

## En la práctica: un ejemplo de gestión de servicios

Una aseguradora regional de tamaño medio opera una aplicación interna de siniestros con un equipo de producto y un centro de servicios separado. Los números de este ejemplo son ilustrativos.

La lista de pendientes del equipo de producto contiene 412 elementos. La antigüedad mediana es de 138 días, el percentil 85 es de 410 días y el elemento más antiguo tiene 29 meses. El equipo termina unos 14 elementos por quincena, de modo que la lista equivale a unas 29 quincenas de trabajo con el caudal reciente. La cobertura del refinamiento de las dos próximas quincenas es del 55 por ciento, y la planificación se alarga a menudo porque el equipo descubre detalles que faltan. El centro de servicios muestra un cuadro distinto: 63 solicitudes abiertas, de las cuales el 9 por ciento están fuera de objetivo, y una razón entrada-salida cercana a 1.

Un responsable de producto pide un número más pequeño y propone un objetivo de menos de 200 elementos al final del trimestre. El equipo no quiere tratar eso como una meta por sí sola. En su lugar, hacen una revisión. Etiquetan los elementos como ideas retenidas o trabajo prometido y descubren que 38 de los 412 son solicitudes de soporte que se había dicho a los clientes que se atenderían. Las pasan a la cola de servicio con un reloj de servicio. Leen los 40 elementos más antiguos y descubren que 22 son obsoletos o duplicados. Los cierran con motivos de salida y avisan a los solicitantes. Fijan una banda de listo de una a dos quincenas y dedican una breve sesión semanal a refinar solo la parte superior del orden.

En tres quincenas el tamaño de la lista baja a 301 y la tasa de descarte del mes es del 31 por ciento, que es alta a propósito y queda señalada en la revisión. La cobertura del refinamiento sube al 88 por ciento. Una mirada rápida a los datos revela un riesgo de manipulación: el tamaño de la lista bajó más deprisa de lo esperado porque dos miembros del equipo clonaron un puñado de elementos envejecidos en otros nuevos para evitar la lista de elementos antiguos. El equipo lo detecta cuando el gráfico del elemento más antiguo deja de coincidir con la muestra de descartes. Acuerdan medir la antigüedad desde la primera creación a través de los registros vinculados y revisar los clones en cada sesión de poda. La decisión registrada para la dirección es abandonar el objetivo de tamaño y reportar en su lugar cada trimestre la distribución de antigüedad, la ventana de listo y los motivos de descarte.

## Agilidad, IA, automatización y analítica

### Agilidad

El refinamiento mantiene comprendido y listo el siguiente tramo de trabajo, en conversación con las partes interesadas. Una práctica útil es revisar juntas la antigüedad de la lista y la profundidad del trabajo listo y eliminar o decidir sobre los elementos que han esperado demasiado. La precaución es que una lista de pendientes depurada solo para parecer corta, descartando elementos sin avisar a los solicitantes, daña la confianza.

### IA

Las herramientas de IA pueden generar y dividir elementos de la lista de pendientes en volumen, lo que infla el tamaño de la lista sin añadir valor. Mide la profundidad del trabajo listo y la tasa de descarte y empareja el tamaño de la lista con la proporción de elementos creados por IA que llegan a la entrega. La precaución es que una lista de pendientes grande generada por IA puede añadir ruido para las personas que deben priorizarla.

### Automatización

Extrae automáticamente del gestor el tamaño y la antigüedad de la lista y señala los elementos que superan un umbral de antigüedad para una decisión humana, no para su eliminación automática. La automatización que cierra elementos obsoletos debe medirse a su vez por los elementos cerrados por error. La precaución es que un bot que cierra elementos antiguos mejora el número de antigüedad sin responder al solicitante.

### Analítica

Muestra la distribución de antigüedad y la razón entrada-salida a lo largo del tiempo, con los elementos más antiguos enumerados. La decisión a la que informa es a qué comprometerse, qué aplazar o qué abandonar. La precaución es que el tamaño de la lista por sí solo dice poco, ya que una lista larga de elementos pequeños y bien entendidos puede ser más sana que una corta de elementos vagos.

## Perspectiva sectorial

**Startup.** La lista de pendientes suele ser una única lista en la cabeza del fundador o un tablero sencillo. Haz seguimiento solo de la antigüedad de los elementos más antiguos y de si la siguiente pieza de trabajo está lista. Poda con energía y a menudo, ya que la respuesta correcta para una idea de hace tres meses suele ser olvidarla.

**Pequeña empresa.** El trabajo de producto y de servicio suele compartir un equipo, así que la lista mezcla ideas retenidas y promesas a clientes. Sepáralas pronto con una etiqueta. Una lista única leída cada semana en una reunión breve supera a las métricas elaboradas. Vigila primero la antigüedad de los elementos de cara al cliente, porque una solicitud olvidada puede costar una relación.

**Gran empresa.** Muchos equipos y muchas colas multiplican las formas de malinterpretar una lista de pendientes. Define las métricas una sola vez, con los relojes y los motivos de salida, y evita consolidar el tamaño de las listas de pendientes de producto en una única cifra de cartera. Compara un equipo con su propio historial, nunca con otro equipo con trabajo distinto (véase el tema 2.4, Métricas del flujo de valor). Las listas de problemas y de errores conocidos merecen su propia cadencia de revisión.

**Gobierno y sector público.** Los compromisos con los ciudadanos, los tiempos de respuesta legales y las pistas de auditoría moldean las colas de servicio. Trata los relojes legales como insumos fijos y reporta la proporción fuera de objetivo con las definiciones usadas. Las listas de pendientes de producto pueden verse limitadas por las rondas de financiación y la contratación, de modo que la ventana de listo puede tener que ser más larga que en un equipo comercial. Mantén visibles los motivos de descarte, ya que la rendición de cuentas pública hace arriesgado el descarte silencioso.

## Caso de negocio: motivaciones, ROI y TCO

El costo de estas métricas es modesto. La mayoría de los datos ya están en el gestor de incidencias o en la herramienta ITSM. Los costos son una fecha de entrada y un motivo de salida obligatorios, una breve sesión mensual de poda, unos minutos en el refinamiento para mirar los gráficos de antigüedad y de listo y algo de esfuerzo para separar las listas de pendientes de producto y de servicio. Basta una hoja de cálculo o los informes integrados de la herramienta para empezar, y no hace falta comprar ningún producto nuevo.

El retorno procede del desperdicio evitado y de promesas más claras. Los equipos que mantienen una ventana de listo dedican menos tiempo de planificación a redescubrir qué significa un elemento, y los equipos que podan dejan de releer elementos que nunca se harán. Los clientes reciben antes respuestas honestas, lo que reduce los contactos repetidos y las escaladas. Describe el beneficio en términos de patrones que el equipo puede comprobar por sí mismo: sesiones de planificación más cortas, menos elementos devueltos al refinamiento después de empezar el trabajo, menos recordatorios sobre solicitudes antiguas y menos sorpresas cuando la dirección pregunta qué hay en el flujo. Este tema no ofrece un porcentaje, ya que no puede darse ninguno sin una fuente. Mide tu propia línea base durante un trimestre y compara.

## Antipatrones y trampas

- **Tratar el tamaño de la lista como una puntuación de productividad o de rendimiento.** El tamaño depende de la demanda, el alcance y los hábitos de poda. Reporta el tamaño con la antigüedad y los motivos de descarte y nunca compares equipos con él.
- **Mezclar ideas retenidas y promesas a clientes en una misma lista.** El gráfico de antigüedad se lee entonces como abandono y falta el reloj de servicio. Sepáralas con una etiqueta y reporta cada una por separado.
- **Refinarlo todo.** Los elementos detallados que no empezarán en meses quedan obsoletos. Mantén una ventana de listo y refina justo antes de que haga falta.
- **No descartar nunca.** Una lista que crece sin fin hace falsa toda afirmación sobre el alcance. Poda con un calendario y anota el motivo cada vez.
- **Reiniciar la antigüedad clonando o moviendo elementos.** Halaga el gráfico y pierde el historial. Mide la antigüedad desde la primera creación a través de los registros vinculados y audita los clones.
- **Una definición de listo usada como barrera.** Si bloquea trabajo que el equipo podría empezar con seguridad, frena el flujo. Mantenla breve y deja que el equipo la anule con un motivo declarado.
- **Objetivos sobre el tamaño en bruto.** Un objetivo de menos de N elementos invita al cierre en bloque. Fija objetivos sobre la antigüedad de los elementos más antiguos o la proporción fuera del objetivo de servicio, con una barrera de protección.
- **Usar la antigüedad media.** Los elementos nuevos rebajan el promedio mientras los viejos se acumulan. Muestra la mediana, el percentil 85 y el elemento más antiguo.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y datos | Las fechas de entrada y los motivos de salida faltan o son incoherentes | Algunos equipos registran fechas; las definiciones de listo difieren | Una definición escrita de listo y de antigüedad de la lista; fecha de entrada y motivo de salida obligatorios | Calidad de los datos muestreada; antigüedad medida a través de clones y movimientos | Definiciones compartidas entre equipos y proveedores y revisadas cuando dejan de informar decisiones |
| Salud de la lista de pendientes | La lista crece sin que nadie lo note; sin poda | Limpieza ocasional cuando la lista se vuelve inmanejable | Poda programada; listas de pendientes de producto y de servicio separadas | Tamaño, antigüedad, entrada-salida y tasa de descarte con tendencias y revisados con una barrera de protección | Política de la lista ajustada entre equipos a la demanda y la capacidad; los clientes ven el estado de sus elementos |
| Refinamiento | Detalle añadido ad hoc en la planificación | Sesiones regulares en algunos equipos | Refinamiento breve y regular con una ventana de listo acordada | Cobertura y profundidad de lo listo revisadas y ligadas a los resultados de entrega | Refinamiento compartido entre equipos y dependencias; la ventana se adapta a las condiciones |
| Uso en decisiones | Números mostrados solo cuando algo va mal | Reportados a la dirección sin discusión | El equipo revisa la antigüedad y la profundidad de lo listo en el refinamiento | A la revisión sigue trabajo de mejora financiado | La evidencia de la lista de pendientes informa decisiones de cartera y de capacidad en toda la organización |

## Lista de verificación

- [ ] Cada lista de pendientes tiene un responsable con nombre y un propósito declarado.
- [ ] Las ideas retenidas y las promesas a clientes están etiquetadas y se reportan por separado.
- [ ] Cada elemento tiene una fecha de entrada obligatoria y un motivo de salida de una lista controlada.
- [ ] El equipo tiene una definición de listo breve y escrita.
- [ ] La antigüedad de la lista se reporta como mediana, percentil 85 y elemento más antiguo.
- [ ] La razón entrada-salida se muestra como una cifra móvil junto al caudal.
- [ ] Se acuerda una ventana de listo y se reporta la profundidad del trabajo listo frente a ella.
- [ ] La cobertura del refinamiento se reporta antes de la planificación, no después.
- [ ] Hay una sesión mensual de poda en el calendario y se reporta la tasa de descarte.
- [ ] Las colas de servicio muestran la proporción fuera de objetivo y el uso de los estados de pausa.
- [ ] Este trimestre se ha ejecutado la revisión de manipulación de las métricas de la lista de pendientes.

## Prompts de IA

**Evalúa la salud de una lista de pendientes.**

```text
I work with [team name], which owns [type of backlog, such as a product
backlog or incident queue]. Here is a summary of the backlog: [number of
items], age distribution [median, 85th percentile, oldest item], items finished
per [week] [numbers], items added per [week] [numbers], and
discard reasons [counts]. Our definition of ready is: [definition].

Explain what this combination of figures could mean, listing at least three
different explanations, and suggest what extra data would tell them apart. Do not
invent benchmark values or targets. List your assumptions and anything you could
not determine from what I gave you.
```

**Redacta una definición de listo.**

```text
Help me draft a short definition of ready for [team name], which works on
[type of work]. Our current problems with unready items are: [list of
problems]. Propose no more than six criteria, say what problem each criterion
addresses, and describe how the team could check each one in under a minute.
Also suggest when the team should be allowed to start an item that does not meet
the definition. Do not copy any framework text. List your assumptions.
```

**Planifica una sesión de poda de la lista de pendientes.**

```text
Plan a [length of time] pruning session for the backlog of [team name]. The
backlog has [number] items, and the oldest are [age]. The leave reasons we
use are [list]. Propose an agenda, the questions to ask about each old item, a
simple message to send to requesters whose items are removed, and the data to
record afterward. Point out ways the session could be gamed and how to catch
them. Do not invent statistics. List your assumptions.
```

**Separa el trabajo de producto y el de servicio en una lista mixta.**

```text
Here is a sample of [number] items from our combined backlog in [tool name],
with fields [list of fields]. Classify each item as a held idea, a customer
promise with a service expectation, or unclear, and explain your reasoning. Then
suggest labels and a simple rule for routing future items. Report patterns, not
individuals, and do not guess at facts not present in the data. List your
assumptions and the items you could not classify.

[paste items, with personal data removed]
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada y los temas vecinos de una métrica de la lista de pendientes que estás a punto de introducir.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que un tema revisado de la lista de pendientes mantiene coherentes sus vectores de manipulación, barreras de protección y referencias cruzadas.

## Ideas clave

- Una lista de pendientes es una cola de promesas, así que lee juntos el tamaño y la antigüedad y muestra los elementos más antiguos.
- Mantén las ideas retenidas y las promesas a clientes en vistas separadas, ya que esperar significa cosas distintas en cada una.
- Apunta a una ventana corta de trabajo listo y mide la cobertura del refinamiento sobre los elementos que están a punto de empezar.
- Poda con un calendario, anota por qué salen los elementos y trata una tasa de descarte de cero como una señal de alarma.
- Fija objetivos sobre la antigüedad y las ventanas de servicio, no sobre el tamaño en bruto, y empareja cada métrica de la lista de pendientes con una barrera de protección.
- Las métricas de la lista de pendientes describen cómo llega el trabajo a un equipo y cómo se gestiona, y nunca clasifican a las personas.

## Referencias y lecturas complementarias

1. Schwaber, K., and Sutherland, J., *The Scrum Guide*, 2020, https://scrumguides.org/scrum-guide.html.
2. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
3. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Cohn, M., *User Stories Applied: For Agile Software Development*, Addison-Wesley, 2004.
6. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [User story](https://en.wikipedia.org/wiki/User_story).
11. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
12. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
13. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
