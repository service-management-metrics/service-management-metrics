# Medidas de flujo

**Cuatro recuentos y relojes sencillos, el trabajo en curso, el caudal, la antigüedad de los elementos de trabajo y el tiempo de ciclo, dicen a un equipo dónde está atascado su trabajo y qué puede prometer, siempre que cada uno se defina del mismo modo para el trabajo de proyecto y el de servicio y se lea como una distribución y no como un promedio.**

## Visión general y motivación

La mayoría de los paneles de entrega y de servicio informan de lo que terminó el mes pasado. Las medidas de flujo añaden la visión que importa mientras el trabajo aún se mueve: cuánto está en curso ahora mismo, qué antigüedad tiene cada elemento, con qué rapidez terminan los elementos y cuánto tardan. La literatura de flujo da a estas cuatro medidas definiciones precisas. La Kanban Guide (kanbanguides.org, versión vigente a octubre de 2026) es una fuente clara: las nombra como las medidas que un equipo usa para inspeccionar y adaptar su flujo de trabajo, y este tema sigue esas definiciones sin exigir ningún método ni tablero concreto.

Las cuatro definiciones son breves. El **trabajo en curso (WIP)** es el número de elementos de trabajo que han empezado pero no han terminado. El **caudal** (throughput) es el número de elementos de trabajo terminados por unidad de tiempo. La **antigüedad del elemento de trabajo** es el tiempo transcurrido entre el momento en que empezó un elemento de trabajo y el momento actual, de modo que se aplica solo a elementos aún en curso. El **tiempo de ciclo** es el tiempo transcurrido entre el momento en que empezó un elemento de trabajo y el momento en que terminó, contando ambos días inclusive según la redacción de la Guide. Un **elemento de trabajo** es una unidad de trabajo que el equipo ha decidido seguir como una sola cosa, como una historia de usuario, un incidente, una solicitud de servicio o un cambio. Un **flujo de trabajo** es el conjunto de estados entre «iniciado» y «terminado», y la **definición del flujo de trabajo** escrita del equipo dice cuáles son esos estados.

Dos de las cuatro se refieren al sistema en su conjunto (WIP y caudal) y dos a elementos individuales (antigüedad y tiempo de ciclo). La pareja de los elementos terminados es el caudal y el tiempo de ciclo. La pareja de los elementos sin terminar es el WIP y la antigüedad. Esta división importa porque las medidas de elementos terminados son rezagadas: dicen cómo fueron las cosas. Las medidas de elementos sin terminar son adelantadas: dicen lo que está a punto de ocurrir, mientras aún hay tiempo de actuar. La antigüedad del elemento de trabajo es la menos aprovechada de las cuatro, y normalmente es la primera que merece añadirse a un tablero.

La relación entre las tres primeras no es casual. La [ley de Little](https://en.wikipedia.org/wiki/Little%27s_law), un resultado de la [teoría de colas](https://en.wikipedia.org/wiki/Queueing_theory), dice que en un sistema estable el número medio de elementos en el sistema es igual a la tasa media de llegada multiplicada por el tiempo medio que cada elemento pasa en él. En términos de flujo, el WIP medio está ligado al caudal medio y al tiempo de ciclo medio. La ley solo se cumple bajo condiciones a las que el tema vuelve en las Recomendaciones (véase el tema 2.3, Trabajo en curso y teoría de colas, para el tratamiento completo). La consecuencia práctica es sencilla: si el caudal se mantiene más o menos constante, más trabajo en curso significa tiempos de ciclo más largos.

Las visiones ágil e ITIL se encuentran aquí con vocabularios distintos. En la práctica ágil, las medidas de flujo pertenecen al tablero del equipo y se usan en una revisión periódica con las partes interesadas y en la reflexión del propio equipo sobre cómo mejorar. En ITIL 4, los mismos números describen cómo la gestión de incidentes, la gestión de solicitudes de servicio y la habilitación de cambios mueven registros por estados, y alimentan la práctica de medición y elaboración de informes y la gestión de niveles de servicio. Un incidente es un elemento de trabajo. Una solicitud de servicio es un elemento de trabajo. Ambos tienen un inicio, un final y una antigüedad intermedia. El centro de servicios de ITIL y el equipo de entrega hacen el mismo tipo de trabajo desde el punto de vista de la medición: llegan elementos, esperan, se trabajan y se van.

Las medidas también se conectan con el [desarrollo lean de software](https://en.wikipedia.org/wiki/Lean_software_development), que trata la espera como la principal fuente de desperdicio, y con el [diagrama de flujo acumulado](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), un gráfico de llegadas y salidas acumuladas que muestra de un vistazo el WIP, el caudal y el tiempo de ciclo. El gráfico es opcional. Las cuatro medidas pueden calcularse a partir de una tabla de elementos con dos fechas cada uno.

Como el tiempo de ciclo y la antigüedad son duraciones con una cola larga a la derecha, un único promedio engaña. Un [percentil](https://en.wikipedia.org/wiki/Percentile) como el 85 dice a un equipo «el 85 por ciento de los elementos termina en este número de días», que es un pronóstico utilizable y una promesa utilizable (véase el tema 1.6, Alfabetización estadística para métricas de servicio). La literatura de flujo llama a esa promesa **expectativa de nivel de servicio (SLE)**: cuánto debería tardar un elemento típico, expresado como un tiempo y una probabilidad. Una SLE es un pronóstico del propio equipo. No es un [acuerdo de nivel de servicio](https://en.wikipedia.org/wiki/Service-level_agreement), que es un compromiso negociado con un cliente (véase el tema 5.1, Métricas de SLA, OLA y XLA).

## Principios clave

- **Cuenta elementos completos que respondan a una definición de iniciado y terminado.** Dividir o fusionar elementos para mejorar un número destruye la comparabilidad. Acuerda qué es un elemento de trabajo y mantén estable la definición.
- **Define los relojes antes de recoger los datos.** El tiempo de ciclo y la antigüedad dependen de qué estado significa «iniciado» y cuál «terminado». Escribe ambos y registra cada cambio (véase el tema 1.5, Fuentes de datos e instrumentación).
- **Mira primero el trabajo sin terminar.** La antigüedad y el WIP son las únicas medidas que aún pueden cambiar un resultado. El caudal y el tiempo de ciclo confirman lo que ya ocurrió.
- **Reporta distribuciones, no promedios.** Muestra percentiles del tiempo de ciclo y de la antigüedad, y una serie de recuentos semanales para el caudal, para que se vea la forma de la variación.
- **Usa las medidas para gestionar el flujo de trabajo, no a las personas.** La unidad de análisis es el flujo de trabajo del equipo. Nunca clasifiques a individuos por elementos terminados o por tiempo de ciclo.
- **Limita el WIP para hacer predecible el flujo.** Un límite de WIP es una política, no un objetivo. El límite existe para dejar al descubierto las colas y acortar el tiempo de ciclo.
- **Separa el tiempo de flujo de la exactitud de la planificación.** Las medidas de flujo describen cómo se mueve el trabajo. Por sí solas no dicen nada sobre si se eligió el trabajo correcto (véase el tema 1.3, Resultados sobre producción: elegir qué medir).

## Definiciones de métricas

Cada fila cuenta elementos del flujo de trabajo de un solo equipo. Los elementos aún en curso se excluyen del tiempo de ciclo y del caudal, y los elementos terminados se excluyen de la antigüedad y del WIP.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Trabajo en curso (WIP) | Elementos de trabajo iniciados pero no terminados | Recuento de elementos cuya marca de inicio está fijada y cuya marca de fin está vacía, en un momento declarado (por ejemplo al final de cada día); se excluyen los elementos de la lista de pendientes aún no iniciados y los terminados | elementos | Historial de estados del gestor de incidencias o de la herramienta ITSM | Gestión de incidentes; gestión de solicitudes de servicio; habilitación de cambios | Límite de WIP; lista de pendientes del equipo en curso | Instantánea diaria, revisada semanalmente |
| Caudal | Elementos de trabajo terminados por unidad de tiempo | Recuento de elementos cuya marca de fin cae en el periodo (por ejemplo una semana natural, de lunes a domingo); los elementos terminados y luego reabiertos cuentan de nuevo solo si son elementos nuevos | elementos por semana | Historial de estados del gestor de incidencias o de la herramienta ITSM | Gestión de incidentes; cumplimiento de solicitudes de servicio | Caudal; elementos completados | Semanal |
| Antigüedad del elemento de trabajo | Tiempo transcurrido que un elemento sin terminar lleva en curso | Hora actual menos la marca de inicio, para elementos aún en curso; el reloj sigue durante el tiempo bloqueado; se excluyen los elementos aún no iniciados | días | Historial de estados del gestor de incidencias o de la herramienta ITSM | Gestión de incidentes; gestión de problemas | Antigüedad del elemento de trabajo; sincronización diaria del equipo | Diaria, revisada en cada sincronización del equipo |
| Tiempo de ciclo | Tiempo transcurrido desde el inicio hasta el fin de un elemento terminado | Marca de fin menos marca de inicio, en días naturales, inclusive; el reloj empieza en el primer paso a un estado de iniciado y se detiene en el paso a un estado de terminado; se reportan la mediana y los percentiles 85 y 95 | días | Historial de estados del gestor de incidencias o de la herramienta ITSM | Gestión de incidentes; cumplimiento de solicitudes de servicio; habilitación de cambios | Tiempo de ciclo; duración del elemento | Semanal, con una ventana móvil de 8 a 12 semanas |
| Cumplimiento de la SLE | Proporción de elementos terminados que cumplieron la expectativa de nivel de servicio del equipo | Elementos terminados con un tiempo de ciclo igual o inferior a la SLE / todos los elementos terminados en la ventana; se excluyen los elementos aún abiertos | porcentaje | Derivada del tiempo de ciclo | Gestión de niveles de servicio | Expectativa de nivel de servicio | Mensual |
| Proporción de tiempo bloqueado | Proporción de los días en curso que los elementos pasaron marcados como bloqueados | Días-elemento en estado bloqueado / días-elemento en curso, sobre la ventana; el reloj de ambos empieza en la marca de inicio | porcentaje | Indicadores del gestor de incidencias o un estado de bloqueado en la herramienta ITSM | Gestión de incidentes; gestión de problemas; gestión de proveedores | Bloqueos; impedimentos planteados en las sincronizaciones diarias del equipo | Semanal |

El tiempo de ciclo aquí sigue la definición de la literatura de flujo. Difiere de la idea de ITIL del tiempo de resolución, que a menudo se mide desde el momento en que se abre un ticket y puede excluir el tiempo en espera. Un equipo que quiera comparar ambos debe etiquetarlos, y el tema 2.2 trata los relojes en detalle (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo). El cumplimiento de la SLE y la proporción de tiempo bloqueado se derivan de las cuatro medidas básicas y se incluyen porque son la forma en que un equipo usa esas medidas en el día a día.

## Recomendaciones

### Define el flujo de trabajo y los elementos

**1. Escribe la definición del flujo de trabajo antes de graficar nada.** Enumera los estados, indica cuál significa «iniciado» y cuál «terminado» y señala quién puede mover un elemento entre ellos. La literatura de flujo llama a esto la definición del flujo de trabajo, y todas las medidas de este tema dependen de ella. Si dos equipos definen «iniciado» de forma distinta, sus tiempos de ciclo no pueden compararse.

**2. Elige un tamaño de elemento de trabajo que el equipo pueda terminar en días, no en meses.** Un elemento de trabajo es lo que el equipo sigue como una unidad: una historia, un incidente, una solicitud. Los elementos muy grandes ocultan su propia antigüedad y hacen irregular el caudal. Usa una regla estable como «un elemento es algo que un cliente o usuario podría notar» y evita dividir elementos solo para mejorar un recuento.

**3. Trata el trabajo de proyecto y el de servicio como el mismo tipo de flujo, con patrones de llegada distintos.** El trabajo de proyecto llega como una lista de pendientes planificada de la que el equipo toma elementos. El trabajo de servicio, como los incidentes y las solicitudes, llega de forma impredecible y puede adelantarse al trabajo planificado. Mide ambos en el mismo tablero o en las mismas tablas, etiquetados por tipo, para ver cómo afectan las interrupciones al trabajo planificado (véase el tema 2.9, Trabajo operativo y trabajo no planificado).

### Mide el trabajo sin terminar

**4. Empieza por la antigüedad del elemento de trabajo en el tablero.** Marca cada tarjeta con su antigüedad en días y ordénalas o resáltalas por bandas de percentil tomadas del historial de tiempos de ciclo del propio equipo. Un elemento más antiguo que el percentil 85 de los tiempos de ciclo pasados es una señal para preguntar qué lo bloquea hoy. Esto convierte una medida rezagada en un recordatorio diario.

**5. Cuenta el WIP con honestidad y fija un límite que puedas defender.** Cuenta cada elemento iniciado que no esté terminado, incluido el trabajo que espera una revisión o a un proveedor. Elige un límite inicial a partir del WIP medio actual del equipo y bájalo paso a paso, anotando qué cambia en el tiempo de ciclo y la antigüedad. Trata el límite como una política que el equipo inspecciona y usa la ley de Little solo como comprobación de sensatez sobre promedios (véase el tema 2.3, Trabajo en curso y teoría de colas).

**6. Muestra el trabajo bloqueado como tiempo, no como un indicador.** Un indicador de bloqueo que nadie cuenta se convierte en excusa. Registra cuándo se bloqueó un elemento y cuándo se liberó, y reporta la proporción de tiempo bloqueado. Mantén en marcha el reloj del elemento durante el bloqueo, porque la espera del cliente no se pausa (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes, donde los estados de espera de ITIL plantean la misma cuestión).

### Mide el trabajo terminado

**7. Reporta el tiempo de ciclo como una distribución con percentiles.** Muestra la mediana, el percentil 85 y el percentil 95, y grafica cada elemento terminado como un punto en el tiempo (diagrama de dispersión) para que el equipo vea agrupaciones y valores atípicos. Indica la ventana, por ejemplo las últimas 10 semanas. Un promedio oculta la cola larga que sienten los clientes.

**8. Reporta el caudal como una serie semanal, no como un total único.** Grafica el recuento de elementos terminados por semana como un [gráfico de ejecución](https://en.wikipedia.org/wiki/Run_chart) o un [gráfico de control](https://en.wikipedia.org/wiki/Control_chart). Los recuentos semanales varían de forma natural, así que lee los cambios frente a esa variación antes de reaccionar, y nunca compares el caudal de dos equipos como una clasificación de rendimiento, porque los tamaños y las definiciones de los elementos difieren (véase el tema 2.5, Métricas de pronóstico y planificación de entregas).

**9. Fija una expectativa de nivel de servicio a partir de tus propios datos y revísala.** Toma los tiempos de ciclo del equipo de las últimas semanas, elige una probabilidad con la que el equipo pueda convivir y lee el número de días en el percentil. Publícala como «el 85 por ciento de los elementos termina en 9 días o menos», usando valores reales de tus datos. Revísala cuando cambie el flujo de trabajo. Una SLE es un pronóstico que el equipo hace sobre sí mismo, así que mantenla separada de los objetivos contractuales.

### Usa las medidas

**10. Usa las cuatro juntas y haz las mismas cuatro preguntas en cada sincronización del equipo.** ¿Qué está en curso y está dentro del límite? ¿Qué elementos son los más antiguos y qué los desbloquearía? ¿Cuántos terminamos y está dentro del rango habitual? ¿Cuánto tardaron los recientes en comparación con nuestra expectativa? Las cuatro preguntas sustituyen a un informe de estado y llevan unos minutos.

**11. Aplica las mismas medidas a las colas de servicio, con un límite claro para el reloj.** Para incidentes y solicitudes, «iniciado» puede ser la primera asignación a una persona o equipo, mientras que el reloj de resolución de ITIL empieza en el registro. Ambos son válidos y responden a preguntas distintas: qué tan ágil es la entrada y cuánto tarda el trabajo en sí. Nombra cada reloj y no los mezcles en un mismo gráfico (véase el tema 3.5, Métricas de cumplimiento de solicitudes de servicio).

**12. Cambia el flujo de trabajo, mide de nuevo y conserva el historial.** Cuando el equipo cambie un límite de WIP, un estado o una política, registra la fecha y el motivo y marca el cambio en los gráficos. Un cambio en el tiempo de ciclo tras una modificación es evidencia de su efecto. Un cambio sin modificación registrada es motivo para sospechar del instrumento (véase el tema 1.4, Gobernanza y propiedad de las métricas).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Trabajo en curso (WIP) | Mantener los elementos en la lista de pendientes o en una columna «listo» hasta el último momento para que no cuenten como iniciados; cerrar y reabrir elementos; esconder trabajo fuera del tablero | Conciliar los elementos del tablero con las solicitudes recibidas; muestrear el tablero frente al trabajo real del equipo; seguir la antigüedad de los elementos de la primera columna |
| Caudal | Dividir los elementos en piezas diminutas; cerrar elementos antes de que estén hechos; elegir primero los elementos fáciles | Mirar la distribución de tamaños de los elementos y la tasa de reaperturas; contar los defectos escapados y los incidentes vinculados a elementos recientes; revisar la mezcla de tipos de trabajo terminados |
| Antigüedad del elemento de trabajo | Mover un elemento antiguo a «hecho» o a un estado nuevo para reiniciar el reloj; cancelar en silencio elementos antiguos; crear una copia nueva de un elemento antiguo | Auditar los movimientos de estado hacia atrás y los elementos cancelados; reportar los elementos cancelados y su antigüedad; buscar duplicados creados cerca del límite de antigüedad |
| Tiempo de ciclo | Arrancar el reloj tarde moviendo los elementos a «en curso» solo cuando el trabajo está casi hecho; detenerlo pronto marcando elementos como hechos antes de la revisión o la publicación | Comparar la hora de inicio con la primera confirmación o primera actividad; reportar el tiempo entre «hecho» y la publicación; muestrear elementos terminados para comprobar que de verdad están completos |
| Cumplimiento de la SLE | Fijar una SLE generosa; excluir elementos difíciles como «especiales»; cerrar elementos para mantenerse bajo el límite | Mantener la SLE en un percentil de datos pasados y revisarla cada trimestre; reportar los elementos excluidos y el motivo; leer el percentil 95 y los elementos abiertos más antiguos |
| Proporción de tiempo bloqueado | No marcar nunca los bloqueos, de modo que la proporción parezca baja; marcarlo todo como bloqueado para explicar el retraso | Comparar la proporción de bloqueo con la antigüedad de los elementos en curso; revisar los motivos de bloqueo por categoría; muestrear elementos bloqueados para comprobar cada motivo |

Una lectura sana muestra el WIP en el límite o por debajo la mayoría de los días, la antigüedad mayormente por debajo del percentil 85 de los tiempos de ciclo pasados y un caudal que varía dentro de un rango estable de una semana a otra. Los percentiles del tiempo de ciclo son estables o decrecientes, el cumplimiento de la SLE se sitúa cerca de la probabilidad que eligió el equipo y el tiempo bloqueado tiene causas con nombre en las que alguien está trabajando. Cuando un número parezca demasiado bueno, pregunta si se movió el reloj o cambió la definición antes de celebrarlo.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Medidas de flujo (WIP, caudal, antigüedad, tiempo de ciclo) | Sencillas, independientes de la herramienta y basadas en recuentos y fechas; respaldan el pronóstico probabilístico | Necesitan definiciones coherentes y marcas de tiempo limpias; no dicen nada del valor ni de la calidad |
| Medidas basadas en estimaciones, como los puntos de historia | Incluyen una visión del esfuerzo y la complejidad; encajan con el trabajo planificado | Subjetivas y propias de cada equipo; no pueden compararse entre equipos |
| Métricas de servicio basadas en promedios, como el tiempo medio de resolución | Fáciles de calcular y explicar | Distorsionadas por valores atípicos y asimetría; ocultan la cola larga |
| Tiempo de ciclo y SLE basados en percentiles | Reflejan lo que viven los clientes; respaldan una promesa clara | Necesitan suficiente historial; más difíciles de explicar a quien está acostumbrado a los promedios |
| Una definición única de «iniciado» y «terminado» para toda la organización | Permite consolidar y comparar | Encaja mal con algunos equipos; puede empujar a los equipos hacia estados artificiales |

Elige la medida más sencilla que sirva a la decisión en cuestión. Las medidas de flujo funcionan bien para un equipo que toma trabajo de una cola y puede terminar elementos en días. Encajan peor cuando los elementos tardan meses, cuando un elemento varía enormemente de tamaño o cuando la mayor parte del valor está en el descubrimiento y no en la entrega.

## Preguntas para debatir con tu equipo

**1. ¿Qué estado significa «iniciado» para nosotros y cuál significa «terminado», y todos estamos de acuerdo?**
Pon el tablero en pantalla y pide a cada persona que señale el primer y el último estado del reloj. Anota los desacuerdos, porque son la mayor fuente de tiempos de ciclo poco fiables. Fíjate sobre todo en los elementos que esperan en revisión, en una cola de publicación o en manos de un proveedor. Acuerden una definición escrita del flujo de trabajo y una fecha en que entre en vigor.

**2. ¿Cuánto trabajo tenemos en curso ahora mismo y qué pasaría si dejáramos de iniciar elementos nuevos durante una semana?**
Cuenta las tarjetas, incluido el trabajo estancado. Pregunta qué terminaría el equipo y qué seguiría atascado. El facilitador debe orientar la conversación hacia las razones para empezar pronto, como el miedo a la inactividad o la presión de las partes interesadas, y alejarla de la culpa. Propongan un primer límite de WIP y una fecha para revisarlo.

**3. ¿Qué elementos son los más antiguos del tablero y qué detiene a cada uno?**
Ordena por antigüedad y hablen de los tres elementos más antiguos. Para cada uno, nombren el obstáculo, la persona que puede retirarlo y la siguiente acción. Comparen las mayores antigüedades con el percentil 85 de los tiempos de ciclo pasados. Hagan un hábito de esta pregunta en cada sincronización, porque la antigüedad es la única medida que aún puede cambiar un resultado.

**4. ¿Qué aspecto tiene nuestra distribución del tiempo de ciclo y qué promesa podemos hacer a partir de ella?**
Muestra el diagrama de dispersión de los elementos terminados en las últimas 8 a 12 semanas. Lean la mediana, el percentil 85 y el percentil 95. Hablen de si el equipo se siente cómodo declarando una SLE en el percentil 85 y de qué tuvieron en común los valores atípicos. El facilitador debe comprobar que el grupo entiende la diferencia entre la mediana y la cola.

**5. ¿Cómo afectan los incidentes y las solicitudes al trabajo planificado que tomamos de la lista de pendientes?**
Etiqueta los elementos terminados por tipo y compara los tiempos de ciclo y el caudal por tipo. Pregunta con qué frecuencia se estancó un elemento planificado porque llegó un incidente. Decidan si una política de urgencia o una capacidad reservada ayudaría y cómo mantener visible su uso (véase el tema 2.9, Trabajo operativo y trabajo no planificado). Hablen de qué dejaría de hacer el equipo si las interrupciones se duplicaran.

**6. ¿Cuáles de estas medidas podríamos manipular y cómo lo notaríamos?**
Repasen cada medida y pregunten cómo podría alguien bajo presión hacer que luzca mejor sin mejorar el flujo. Asocien cada respuesta a una barrera de protección de la tabla. El facilitador debe tratar esto como un ejercicio de diseño sobre el instrumento y no como una acusación. Elijan una barrera de protección que añadir este trimestre y nombren un responsable.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega usan las medidas de flujo para ver su propio sistema. Sacan el mayor partido de la antigüedad de los elementos en curso y de la distribución del tiempo de ciclo, que les dicen en qué concentrarse y qué prometer. Deben evitar convertir el caudal en un objetivo y evitar comparar sus números con los de otros equipos (véase el tema 2.8, Métricas DORA, para las medidas a nivel de entrega que están por encima del flujo del equipo).

### Equipos de servicio y de operaciones

Los equipos de servicio atienden llegadas que no controlan. Las medidas de flujo muestran cómo las interrupciones, los traspasos y la espera de terceros alargan el tiempo hasta terminar. Se benefician de vistas separadas para incidentes, solicitudes y cambios planificados, y del tiempo bloqueado reportado por motivo. Deben conservar los relojes de ITIL que exigen los contratos mientras usan los relojes de flujo para dirigir el equipo.

### Liderazgo y gobernanza

Los líderes deben pedir la distribución y la tendencia, no una cifra única, y leer los cambios con los cambios de flujo de trabajo registrados al lado. Pueden usar el cumplimiento de la SLE y los perfiles de antigüedad para ver el riesgo pronto. Deben resistir la tentación de consolidar el caudal entre equipos, porque las definiciones de los elementos difieren, y deben financiar la depuración de los modelos de estados y de las marcas de tiempo que necesitan unos datos de flujo fiables.

### Clientes y usuarios

Los clientes sienten el tiempo de ciclo y, en especial, su cola. Una declaración como «la mayoría de las solicitudes de este tipo se resuelven en un número declarado de días» les da algo en lo que apoyarse para planificar, y una nota honesta cuando el equipo está fuera de su expectativa genera confianza. No necesitan los recuentos de WIP ni de caudal, pero se benefician cuando esas medidas reducen la espera.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un hospital regional gestiona un equipo combinado que atiende solicitudes de servicio de los usuarios finales y un pequeño flujo de mejoras planificadas para los sistemas clínicos. Todos los números de este ejemplo son ilustrativos.

El equipo tiene un tablero con los estados Listo, En curso, A la espera de terceros, Revisión y Hecho. El gerente nota que el informe mensual muestra 46 elementos terminados, en línea con el mes anterior, y sin embargo el personal clínico se queja de que las solicitudes tardan «una eternidad». Una revisión del historial del gestor muestra que «iniciado» se fijaba cuando una tarjeta se clasificaba por primera vez, de modo que el tiempo de ciclo incluía días en una cola.

El equipo reescribe la definición del flujo de trabajo: «iniciado» es el primer paso a En curso, «terminado» es el paso a Hecho, y A la espera de terceros cuenta como en curso, con su propio tiempo bloqueado. Con los nuevos relojes, el tiempo de ciclo mediano de las últimas 10 semanas es de 4 días, el percentil 85 es de 11 días y el percentil 95 es de 24 días. El WIP medio es de 19 elementos para un equipo de 6. La antigüedad del elemento de trabajo muestra siete tarjetas de más de 11 días, y cinco de ellas esperan a un proveedor externo.

El equipo decide tres cosas. Fija una SLE de «el 85 por ciento de los elementos termina en 11 días o menos». Fija un límite de WIP de 12 y acuerda dejar de iniciar elementos planificados nuevos cuando se alcance el límite. Añade además una revisión semanal de diez minutos de los cinco elementos más antiguos. Los elementos que esperan al proveedor se elevan a través de la gestión de proveedores con las fechas desde las que esperan.

Seis semanas después, el percentil 85 del tiempo de ciclo es de 8 días y el WIP promedia 12. El caudal es de 44 elementos por semana durante varias semanas, cerca del nivel anterior. Entonces el equipo ve un posible riesgo de manipulación: el tiempo de ciclo mediano baja a 2 días en una semana, pero el recuento de elementos terminados por semana sube bruscamente y la proporción de elementos reabiertos en una semana aumenta. Una muestra de tarjetas muestra que se estaban dividiendo solicitudes grandes en varias tarjetas de una línea para elevar el caudal y acortar el tiempo de ciclo. Las barreras de protección lo detectaron: la mezcla de tamaños de los elementos y la tasa de reaperturas. El equipo acuerda una regla sobre qué cuenta como un elemento, fusiona las tarjetas divididas en los informes y sigue publicando la SLE y la lista de antigüedad.

## Agilidad, IA, automatización y analítica

### Agilidad

Las medidas de flujo encajan bien con la entrega continua porque el trabajo se publica en piezas pequeñas y los relojes corren de forma continua. Un paso práctico es mostrar la antigüedad del elemento de trabajo en un tablero que todo el equipo y sus partes interesadas puedan ver, y hablar de los elementos más antiguos en cada revisión periódica. La precaución es que un tablero lleno de elementos diminutos hace que el caudal parezca sano, así que mantén el tamaño de los elementos más o menos coherente y vigila el tiempo de ciclo en un percentil alto.

### IA

La asistencia de la IA tiende a elevar el caudal de elementos pequeños, como código o respuestas redactadas, sin acortar el tiempo que el trabajo terminado espera una revisión, una aprobación o una publicación. Empareja el caudal con el tiempo de ciclo en el percentil 85 y con el retrabajo, de modo que se vea un aumento de producción que solo llena la cola. La precaución es que un primer borrador más rápido puede trasladar la espera a un revisor humano, así que mide dónde se sitúa ahora el reloj.

### Automatización

Extrae automáticamente los eventos de inicio y de fin del gestor y del pipeline, y marca los estados bloqueados con un código de motivo para poder contar el tiempo bloqueado. Los traspasos automatizados también necesitan medirse: con qué frecuencia fallan y cuánto tiempo pasa sin notarse un traspaso fallido. La precaución es que un cambio de estado automático, como un bot que mueve tarjetas, puede crear marcas de tiempo sobre las que ninguna persona decidió.

### Analítica

Usa la distribución del tiempo de ciclo para dar un rango para el trabajo futuro y muestra cuántos elementos hay detrás. La decisión a la que esto informa es qué puede prometer el equipo y dónde buscar el retraso. La precaución es que un pronóstico con unas pocas semanas de datos es frágil, así que muestra su intervalo y actualízalo a medida que crezcan los datos.

## Perspectiva sectorial

**Startup.** Un equipo pequeño puede empezar con un tablero físico o digital y una hoja de cálculo con fechas de inicio y fin. Empieza por la antigüedad y el WIP, porque no necesitan historial, y añade percentiles del tiempo de ciclo tras unas diez semanas de datos. Mantén un solo tablero para el trabajo planificado y las correcciones urgentes, etiquetados por tipo, para que las interrupciones sean visibles.

**Pequeña empresa.** El trabajo suele llegar por correo electrónico o a través de un centro de servicios alojado. Usa las fechas de creado, iniciado y resuelto de la propia herramienta, comprueba que «iniciado» signifique que alguien empezó a trabajar y exporta los datos con regularidad. Una mirada semanal sencilla a los elementos abiertos más antiguos hace más bien que un panel elaborado.

**Gran empresa.** Muchos equipos, herramientas y flujos de trabajo hacen de las definiciones coherentes el principal desafío. Acuerden un vocabulario común pequeño para iniciado y terminado, dejen que los equipos asignen sus estados locales a él y mantengan los datos de flujo a nivel de equipo. Usen las medidas para detectar colas sistémicas, como pasos de aprobación compartidos o entornos compartidos, y no para comparar equipos.

**Gobierno y sector público.** Los plazos legales, los requisitos de auditoría y las normas de contratación pública determinan los relojes. Mantén separado el reloj legal del reloj de flujo del equipo y documenta ambos. Los pasos controlados por proveedores suelen dominar el tiempo de ciclo, así que regístralos como tiempo bloqueado y usa los datos en las conversaciones contractuales (véase el tema 8.4, Métricas de proveedores y contratos).

## Caso de negocio: motivaciones, ROI y TCO

El costo de las medidas de flujo es bajo en herramientas y moderado en disciplina. Un equipo necesita un tablero con cambios de estado fiables, unas horas para escribir la definición del flujo de trabajo, una breve revisión periódica y alguien que mantenga los gráficos. Si las marcas de tiempo proceden del gestor o de la herramienta ITSM, la recogida es casi gratuita. El costo mayor es el tiempo dedicado a alinear definiciones y a cambiar hábitos, como dejar de iniciar trabajo nuevo cuando se alcanza el límite.

El retorno aparece en previsibilidad y en menos sorpresas. Un equipo que puede declarar una SLE a partir de sus propios datos puede responder a «¿cuándo estará hecho?» sin inflar las estimaciones y puede ver pronto el trabajo estancado. Describe el beneficio con medidas que puedas observar tú mismo: la proporción de elementos más antiguos que el percentil 85, la anchura de la brecha entre la mediana y el percentil 95 y el tiempo dedicado a reuniones de estado antes y después. Aquí no se ofrece ningún valor de referencia, porque las cifras publicadas dependen del flujo de trabajo y de las definiciones de los elementos. El costo total de propiedad es sobre todo tiempo de las personas, así que cuéntalo y compáralo con el costo del trabajo que espera sin ser visto.

## Antipatrones y trampas

- **Contar elementos que nunca empezaron.** Las tarjetas de la lista de pendientes inflan el WIP y la antigüedad y hacen ilegible el tablero. Cuenta solo los elementos iniciados y mantén la lista de pendientes en su propio lugar (véase el tema 2.6, Métricas de la lista de pendientes y su refinamiento).
- **Tratar un límite de WIP como un objetivo que alcanzar.** Un límite es un techo que deja al descubierto las colas. Revisa si el límite cumple su función y bájalo cuando el equipo pueda gestionarlo.
- **Reportar solo promedios.** El tiempo de ciclo medio oculta la cola larga que sienten los clientes. Reporta la mediana y los percentiles 85 y 95.
- **Pausar el reloj por la espera.** Detener el reloj cuando un elemento está bloqueado hace que el tiempo de ciclo parezca mejor y oculta el retraso. Mantén el reloj en marcha y reporta el tiempo bloqueado por separado.
- **Comparar el caudal entre equipos.** Las definiciones y los tamaños de los elementos difieren. Compara cada equipo con su propio historial.
- **Usar las medidas de flujo para juzgar a individuos.** Los elementos terminados por persona invitan a la manipulación e ignoran el trabajo compartido. Mantén todas las medidas a nivel de equipo.
- **Cambiar el flujo de trabajo sin registrarlo.** Un cambio en el nombre de un estado o en una política rompe la tendencia en silencio. Registra la fecha y el motivo y márcalo en cada gráfico.
- **Mezclar incidentes, solicitudes y trabajo planificado en una misma distribución.** Sus tiempos de ciclo difieren por naturaleza. Etiqueta por tipo y lee cada distribución por separado.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y relojes | «Iniciado» y «terminado» significan cosas distintas para personas distintas | Algunos equipos anotan los estados de su flujo de trabajo | Una definición escrita del flujo de trabajo por equipo, con reglas de reloj para el tiempo bloqueado | Cambios de definición registrados y marcados en los gráficos; relojes revisados por si se desvían | Definiciones alineadas entre equipos y proveedores donde el trabajo cruza fronteras, y revisadas cuando dejan de informar decisiones |
| Medición del trabajo sin terminar | Estado comunicado en reuniones | Las tarjetas muestran la antigüedad o el WIP en algunos equipos | WIP contado a diario y antigüedad visible en cada tarjeta, con un límite escrito | Bandas de antigüedad tomadas de percentiles históricos que guían la acción diaria | Colas y traspasos entre equipos seguidos conjuntamente, con la antigüedad compartida con los proveedores |
| Medición del trabajo terminado | Recuentos de tickets cerrados por mes | Promedios del tiempo de ciclo reportados por algunos equipos | Percentiles del tiempo de ciclo y caudal semanal desde una sola fuente de datos | Tendencias revisadas frente a los cambios registrados; cumplimiento de la SLE con seguimiento | Los pronósticos a partir de datos de flujo informan la planificación y los compromisos de servicio entre equipos |
| Uso y barreras de protección | Números usados para perseguir a las personas | Conciencia informal de la manipulación | Cada medida emparejada con una barrera de protección y revisada con el equipo | Las alertas de las barreras de protección llevan a trabajo de mejora financiado | Medidas y barreras de protección revisadas conjuntamente con clientes y proveedores |

## Lista de verificación

- [ ] La definición del flujo de trabajo está escrita, con los estados «iniciado» y «terminado» nombrados.
- [ ] Se define un elemento de trabajo, con una regla para dividir y fusionar elementos.
- [ ] El WIP se cuenta a diario a partir de datos de la herramienta y hay un límite de WIP escrito.
- [ ] Cada tarjeta en curso muestra su antigüedad en días.
- [ ] El tiempo de ciclo se reporta como la mediana, el percentil 85 y el percentil 95 sobre una ventana declarada.
- [ ] El caudal se reporta como un gráfico de ejecución semanal con su ventana.
- [ ] Se declara una expectativa de nivel de servicio a partir de los datos del propio equipo y se revisa cada trimestre.
- [ ] El tiempo bloqueado se registra con inicio, fin y motivo, y el reloj del elemento sigue corriendo.
- [ ] Los incidentes, las solicitudes y el trabajo planificado están etiquetados para poder leer cada uno por separado.
- [ ] Cada cambio de estado o de política se registra con su fecha y motivo.
- [ ] Cada medida se empareja con una barrera de protección de la tabla de manipulación.
- [ ] Ninguna medida se usa para clasificar individuos ni para comparar equipos.

## Prompts de IA

**Comprueba una definición de flujo de trabajo en busca de problemas de reloj.**

```text
Here is the workflow for [team or service]: [list of states and transitions,
with a one-line meaning for each if known]. We want to compute work in progress,
throughput, work item age, and cycle time using the flow-literature definitions.
Identify which state should start the clock and which should stop it, any state
where the clock could be paused or misread, and any state that two teams might
interpret differently. Do not guess how our tool is configured. List your
assumptions and the questions I should answer to settle the definition.
```

**Analiza una exportación de elementos de trabajo.**

```text
I have an export of [number] finished work items from [tool] with these fields:
[field names, for example id, type, started date, finished date, blocked
periods]. Explain how to compute cycle time percentiles, weekly throughput, and
daily work in progress from these fields, and how to handle missing dates,
reopened items, and items of type [types]. Provide the steps and a short script
outline in [language], and do not assume any values. List your assumptions and
the data quality checks I should run first.
```

**Redacta un enunciado de expectativa de nivel de servicio.**

```text
Our team handles [type of work] and has cycle time data for the last [number]
weeks, with a median of [value], an 85th percentile of [value], and a 95th
percentile of [value]. Draft a one-sentence service level expectation and a short
note explaining it to [audience, for example customers or the service owner],
including what it does not promise. Do not invent target values or benchmarks.
List your assumptions and the caveats about sample size.
```

**Revisa los riesgos de manipulación de nuestras medidas de flujo.**

```text
We track [list of flow measures] for [team or service]. The team is under
pressure to [pressure, for example reduce ticket age]. For each measure, list
realistic ways it could be made to look better without improving flow, the signal
in our data that would reveal each, and a paired guardrail. Do not invent
statistics or cite studies. List your assumptions and the data I would need to
test each risk.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema que define una medida de flujo y la barrera de protección que debe acompañarla.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen en sintonía la plantilla, la tabla de definiciones y la tabla de manipulación.

## Ideas clave

- Cuatro medidas describen el flujo: trabajo en curso, caudal, antigüedad del elemento de trabajo y tiempo de ciclo, cada una con una definición breve y un reloj que debe escribirse.
- La antigüedad del elemento de trabajo y el WIP son las medidas adelantadas; el caudal y el tiempo de ciclo confirman lo que ya ocurrió.
- Reporta el tiempo de ciclo y la antigüedad como percentiles y declara una expectativa de nivel de servicio a partir de tus propios datos.
- Las mismas medidas sirven para el trabajo de proyecto y el de servicio, siempre que etiquetes los tipos de trabajo y nombres cada reloj.
- Toda medida puede manipularse moviendo el reloj, dividiendo elementos u ocultando trabajo, así que empareja cada una con una barrera de protección.
- Mantén las medidas a nivel de equipo y úsalas para mejorar el flujo de trabajo, nunca para clasificar personas.

## Referencias y lecturas complementarias

1. Kanban Guide, kanbanguides.org, current version as of October 2026, https://kanbanguides.org/english/
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
7. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
8. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
9. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
10. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
13. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
