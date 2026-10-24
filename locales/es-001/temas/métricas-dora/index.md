# Métricas DORA

**Las métricas DORA describen con qué rapidez y con qué seguridad llegan a producción los cambios de software de un equipo, así que lee juntas las medidas de velocidad y las de estabilidad, calcúlalas a partir de eventos del pipeline y de incidentes y úsalas para iniciar conversaciones sobre un sistema de entrega, nunca para clasificar equipos ni personas.**

## Visión general y motivación

Las métricas DORA proceden del programa de investigación de [DevOps Research and Assessment (DORA)](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment), un estudio de larga duración sobre cómo se relacionan las prácticas de entrega de software con los resultados de los equipos y de las organizaciones. Nicole Forsgren, Jez Humble y Gene Kim presentaron los primeros hallazgos en el libro [Accelerate](https://en.wikipedia.org/wiki/Accelerate_(book)) en 2018, y el programa ha continuado bajo Google Cloud con un informe anual. La investigación preguntó qué aspectos medibles de la entrega predicen buenos resultados y se quedó con un pequeño conjunto de medidas de rendimiento de la entrega de software que pueden calcularse a partir del pipeline de entrega y del registro de incidentes.

A octubre de 2026, el sitio web de DORA describe cinco métricas de rendimiento de la entrega de software, divididas en dos grupos. Tres describen el **caudal** (throughput), es decir, la rapidez con que se mueven los cambios: plazo de entrega de los cambios, frecuencia de despliegue y tiempo de recuperación tras un despliegue fallido. Dos describen la **inestabilidad**, es decir, con qué frecuencia una versión causa problemas: tasa de fallos de cambio y tasa de retrabajo en los despliegues. Publicaciones anteriores describían cuatro métricas, con el «tiempo de restablecimiento del servicio» en lugar del tiempo de recuperación tras un despliegue fallido y sin la tasa de retrabajo. Las definiciones se han ido refinando con los años, así que indica siempre qué edición de la guía sigues y la fecha en que la comprobaste por última vez.

El hallazgo de la investigación que hizo famosas las métricas es que la velocidad y la estabilidad tienden a moverse juntas entre los equipos. Los equipos que desplegaban a menudo y tenían plazos de entrega cortos no pagaban por ello, en promedio, con más fallos. Esto desmiente la vieja suposición de que ir más rápido significa romper más. Es un patrón en datos de encuestas y de pipelines, no una ley, y se cumple para los equipos que han invertido en prácticas como la [entrega continua](https://en.wikipedia.org/wiki/Continuous_delivery), los lotes pequeños, las pruebas automatizadas y la retroalimentación rápida. Las métricas son señales de esas capacidades subyacentes. No son las capacidades en sí.

Los términos siguientes se repiten en este tema.

- Un **despliegue** es el acto de poner una versión del software en un entorno dado. Este tema se refiere a producción salvo que diga otra cosa.
- Un **cambio** es un conjunto de modificaciones del software, normalmente una o más confirmaciones (commits) que se publican juntas. En ITIL 4 la palabra tiene un significado más amplio, que abarca cualquier adición, modificación o eliminación que pueda afectar a los servicios, y la práctica de [ITIL](https://en.wikipedia.org/wiki/ITIL) que lo gobierna es la habilitación de cambios.
- Un **despliegue fallido** es un despliegue que causa un servicio degradado o una caída en producción y necesita remediación, como un arreglo urgente, una reversión o un parche. Tu equipo escribe la regla exacta, porque la investigación la deja a la definición local.
- Una **reversión** (rollback) es el acto de devolver producción a la versión anterior conocida como buena.
- Un **percentil** es un valor por debajo del cual cae una proporción declarada de observaciones. El percentil 85 del plazo de entrega es el número que supera el 85 por ciento de los cambios.

Las visiones ágil e ITIL se encuentran en este terreno. Un equipo ágil ve estos números como retroalimentación sobre su práctica de ingeniería y sus acuerdos de trabajo. Un profesional de ITIL los ve como evidencia de resultados para la habilitación de cambios, la gestión de versiones, la gestión de despliegues y la gestión de incidentes. La tensión suele girar en torno al control. Un comité tradicional de aprobación de cambios intenta reducir los fallos inspeccionando cada cambio antes de publicarlo. La investigación de DORA encontró que la aprobación externa pesada no se asociaba con una mejor estabilidad, y que la revisión por pares, las pruebas automatizadas y los cambios pequeños sí. En ITIL 4, la habilitación de cambios lo contempla separando los cambios estándar, normales y de emergencia y permitiendo que los cambios de bajo riesgo estén preautorizados (véase el tema 4.3, Métricas de habilitación de cambios).

Las métricas tienen además límites que la propia investigación declara, y los consejos prácticos de este tema se apoyan en ellos. Describen un sistema de entrega de una aplicación o servicio, están pensadas para conversaciones de mejora y no dicen nada sobre si el trabajo que se publica es valioso. Un equipo puede publicar números excelentes mientras entrega lo que no debe. Por eso este tema se sitúa junto a las medidas de flujo (véase el tema 2.1, Medidas de flujo), las medidas de fiabilidad del servicio (véase el tema 5.2, SLI, SLO y presupuestos de errores) y las medidas de resultado (véase el tema 1.3, Resultados sobre producción: elegir qué medir), no por encima de ellas.

Por último, las métricas invitan a la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) en el momento en que aparecen en un panel de la dirección. La frecuencia de despliegue es la más fácil de inflar y los recuentos de despliegues fallidos los más fáciles de ocultar. Cada recomendación siguiente empareja por tanto una medida con una comprobación de cómo podría torcerse (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Calcula a partir de eventos, no de la memoria.** Los despliegues proceden del pipeline, los fallos y las recuperaciones del registro de incidentes y el plazo de entrega del control de versiones unido al pipeline (véase el tema 1.5, Fuentes de datos e instrumentación).
- **Lee la velocidad y la estabilidad como un solo cuadro.** Un equipo rápido con fallos crecientes, o un equipo estable que publica cada trimestre, te está diciendo algo que ninguna de las dos mitades muestra por sí sola.
- **Mide un servicio o una aplicación, no una persona.** La unidad de análisis es un sistema de entrega. Los individuos no despliegan solos, y clasificarlos destruye los datos.
- **Compara un equipo con su propio pasado, no con otro equipo.** El contexto difiere mucho entre un servicio de pagos, una plataforma de datos y una aplicación móvil, y la propia investigación advierte contra el uso de las métricas como tabla de posiciones.
- **Usa distribuciones para los tiempos.** El plazo de entrega y el tiempo de recuperación tienen colas largas, así que reporta la mediana y un percentil alto (véase el tema 1.6, Alfabetización estadística para métricas de servicio).
- **Trata las métricas como síntomas.** Cuando un número se mueve, busca la causa en las capacidades que hay debajo, como el tamaño de los lotes, la automatización de pruebas, la práctica de revisión y la arquitectura, y ejecuta después un experimento.
- **Escribe las definiciones.** Fallo, despliegue e «inicio del trabajo» son juicios de valor. Anota la elección y mantenla estable para que la tendencia signifique algo.

## Definiciones de métricas

Las cinco métricas siguientes siguen la guía de DORA a octubre de 2026. Las fórmulas indican los relojes y las exclusiones que tu equipo debe anotar. Donde la investigación deja abierto un límite, la tabla muestra un valor por defecto sensato y las recomendaciones explican la elección.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Plazo de entrega de los cambios | Tiempo que tarda un cambio confirmado en llegar a producción | El reloj empieza en la primera confirmación del cambio (o en su fusión con la rama principal, si así se indica en la definición) y se detiene cuando el despliegue en producción termina con éxito; se reportan la mediana y el percentil 85 de los cambios desplegados en el periodo; los cambios nunca desplegados se excluyen y se reportan por separado como trabajo en curso | Horas o días | Control de versiones unido al pipeline de despliegue | Gestión de despliegues; gestión de versiones; habilitación de cambios | Tiempo de ciclo; plazo de entrega hasta producción | Semanal o por versión, revisado mensualmente |
| Frecuencia de despliegue | Con qué frecuencia despliega un equipo en producción | Recuento de despliegues exitosos en producción de la aplicación en el periodo / días del periodo; los despliegues fallidos o revertidos se excluyen del recuento de éxitos; se excluyen los despliegues en entornos de prueba | Despliegues por día o por semana | Registro de eventos del pipeline de despliegue | Gestión de despliegues; gestión de versiones | Entrega continua; publicación al final de cada incremento | Semanal |
| Tiempo de recuperación tras un despliegue fallido | Cuánto se tarda en recuperarse cuando un despliegue causa un fallo en producción | El reloj empieza cuando se detecta o se reporta el fallo (con la misma regla siempre) y se detiene cuando el servicio se restablece para los usuarios; se reportan la mediana y el percentil 85 de los despliegues fallidos del periodo; se excluyen los incidentes no causados por un despliegue | Minutos u horas | Registro de incidentes unido a eventos de despliegue y alertas de monitorización | Gestión de incidentes; gestión de la continuidad del servicio | Tiempo de recuperación; trabajo de restablecimiento | Por fallo, revisado mensualmente |
| Tasa de fallos de cambio | Proporción de despliegues en producción que causan un fallo que necesita remediación | Despliegues que requirieron un arreglo urgente, una reversión, un parche o una respuesta a incidente / todos los despliegues en producción del periodo; la regla que vincula un fallo con su despliegue se escribe y se aplica del mismo modo cada vez | Porcentaje | Eventos de despliegue unidos a incidentes, reversiones y despliegues de arreglos urgentes | Habilitación de cambios; gestión de incidentes | Definición de terminado; defectos escapados | Mensual |
| Tasa de retrabajo en los despliegues | Proporción de despliegues en producción que fueron no planificados y se hicieron para corregir un problema visible para el usuario | Despliegues no planificados hechos en respuesta a un problema de producción / todos los despliegues en producción del periodo; se excluyen los despliegues planificados que casualmente contienen una corrección; la regla de «no planificado» se escribe | Porcentaje | Registro del pipeline etiquetado por motivo de despliegue, vinculado a registros de incidentes o de defectos | Habilitación de cambios; gestión de problemas | Trabajo no planificado; corrección de errores publicada fuera del plan | Mensual |

Dos notas sobre la tabla. Primero, la tasa de fallos de cambio y la tasa de retrabajo en los despliegues se solapan y no son lo mismo: un fallo que el equipo detecta y revierte sin ningún despliegue nuevo cuenta en la tasa de fallos de cambio pero no en la de retrabajo, mientras que una corrección planificada que el equipo programa no cuenta en ninguna. Segundo, la investigación trata el **despliegue** como la unidad y cuenta por aplicación, de modo que una plataforma con cincuenta servicios tiene cincuenta conjuntos de números, no uno.

## Recomendaciones

### Empieza por las definiciones y los relojes

**1. Escribe una definición de una página para cada métrica antes de graficarla.** Indica qué cuenta como despliegue, qué entorno es producción, dónde empieza el reloj del plazo de entrega y cómo se vincula un fallo a un despliegue. Pon la página en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas). Una definición que vive solo en la cabeza de alguien se desviará la primera vez que cambie la herramienta o el equipo.

**2. Elige un inicio para el plazo de entrega y mantenlo.** Las elecciones más comunes son la primera confirmación del cambio, la fusión con la rama principal y la creación de un ticket. La primera confirmación mide el sistema de entrega e ignora el tiempo que el trabajo estuvo en una lista de pendientes. El inicio en el ticket mide más de la espera del cliente pero mezcla la priorización (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo). Usa uno de forma coherente e indica cuál en cada gráfico.

**3. Atribuye los fallos con una regla declarada.** Un fallo pertenece a un despliegue cuando, por ejemplo, se abre un incidente dentro de una ventana declarada tras el despliegue y su análisis de causa apunta a ese cambio, o cuando una reversión o un arreglo urgente se etiquetan con él. Elige una regla que la gente pueda aplicar sin discusión, revisa una muestra de casos cada trimestre y mantén la regla igual durante el tiempo suficiente para ver una tendencia.

### Instrumenta desde el pipeline

**4. Toma los eventos de despliegue del pipeline, no de una hoja de cálculo.** Un sistema de [CI/CD](https://en.wikipedia.org/wiki/CI/CD) que registra cada despliegue en producción con una marca de tiempo, una versión y un resultado te da la frecuencia de despliegue y el fin del reloj del plazo de entrega sin ninguna introducción humana. Los recuentos introducidos a mano llegan tarde y son incoherentes, e invitan a los problemas de retrofechado descritos en el tema 1.5, Fuentes de datos e instrumentación. El proyecto de código abierto Four Keys del equipo de DORA es un ejemplo práctico de recogida de estos eventos, aunque sirve cualquier pipeline equivalente propio.

**5. Une el registro de incidentes a los despliegues.** Las medidas de fallo y de recuperación necesitan dos fuentes: el registro de despliegues y la herramienta de incidentes. Añade un campo al registro de incidentes para «causado por un despliegue» y el identificador del despliegue, rellenado durante la resolución y comprobado en la revisión posterior al incidente (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje). Sin la unión, la tasa de fallos de cambio se vuelve una conjetura.

**6. Etiqueta el motivo de cada despliegue.** La tasa de retrabajo necesita separar los despliegues planificados de las correcciones no planificadas. Basta una etiqueta sencilla en la ejecución del pipeline, como «cambio planificado» o «corrección de un problema de producción». Mantén corta la lista de etiquetas, para que la gente no tenga que pensar bajo presión.

### Reporta los números con honestidad

**7. Reporta distribuciones y recuentos, no un único promedio.** Muestra la mediana y el percentil 85 del plazo de entrega y del tiempo de recuperación, con el número de observaciones detrás de cada uno. Una semana con dos despliegues y un fallo tiene una tasa de fallos de cambio del 50 por ciento que significa muy poco, así que muestra los recuentos junto al porcentaje y prefiere una ventana más larga para las tasas (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**8. Muestra juntos los grupos de caudal y de inestabilidad.** Pon las tres métricas de caudal y las dos de inestabilidad en una vista, por servicio, con la tendencia de al menos un trimestre. No publiques nunca la frecuencia de despliegue sin las medidas de fallo a su lado. Si un líder pide un solo número, explica que no existe una puntuación DORA única y ofrece en su lugar la vista de dos grupos.

**9. Mantén las comparaciones dentro del propio historial del equipo.** Un equipo que pasa su plazo de entrega mediano de nueve a cinco días ha aprendido algo. Clasificarlo frente a otro equipo con una arquitectura, una carga regulatoria o un tren de versiones distintos prueba poco y enseña a ambos equipos a proteger sus números. Cuando debas consolidar para la gobernanza, muestra la dispersión entre servicios y la tendencia de mejora, no una tabla de posiciones (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

### Mejora el sistema que describen los números

**10. Reduce primero el tamaño de los lotes.** Los cambios pequeños acortan el plazo de entrega, hacen más fáciles de diagnosticar los fallos y reducen el costo de una reversión. Las técnicas incluyen los [interruptores de funciones](https://en.wikipedia.org/wiki/Feature_toggle), el trabajo basado en el tronco y la división del trabajo para que cada incremento pueda publicarse solo (véase el tema 2.7, Métricas de solicitudes de incorporación y revisión de código). Haz seguimiento del tamaño mediano de los cambios junto al plazo de entrega para ver si el lote realmente se reduce.

**11. Invierte en detección rápida y en reversión rápida.** El tiempo de recuperación baja cuando el equipo puede ver un fallo en minutos y cuando puede [revertir](https://en.wikipedia.org/wiki/Rollback_(data_management)) o desactivar un cambio sin una compilación nueva. Un [despliegue canario](https://en.wikipedia.org/wiki/Canary_release), un interruptor de función y una reversión automatizada acortan cada uno el intervalo entre el fallo y el restablecimiento. Mide por separado el tiempo desde el despliegue hasta la detección, porque la detección lenta se esconde dentro de un número de tiempo de recuperación (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes).

**12. Usa los números para elegir una capacidad que mejorar.** Elige una métrica débil, pregunta por qué es débil y selecciona de la lista de capacidades de la investigación una práctica que aborde la causa, como la automatización de pruebas, una arquitectura débilmente acoplada o una aprobación de cambios ligera. Ejecuta el cambio durante un trimestre y mira la tendencia. Empareja el experimento con un tema de retrospectiva para que el equipo se apropie de la mejora (véase el tema 9.5, Métricas de mejora continua).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Plazo de entrega de los cambios | Mover más tarde el inicio del reloj, por ejemplo empezar en la fusión en vez de en la primera confirmación; fusionar pronto en una rama de larga duración; excluir cambios difíciles por «no ser código»; hacer pasar cambios triviales por el pipeline para rebajar la mediana | Percentil y antigüedad del trabajo en curso; inicio del reloj fijo y escrito; muestra del 10 por ciento más lento de los cambios cada trimestre; distribución del tamaño de los cambios |
| Frecuencia de despliegue | Dividir un cambio en muchos despliegues triviales; volver a desplegar compilaciones sin cambios; contar despliegues en preproducción o cambios de configuración vacíos | Tamaño del cambio por despliegue; proporción de despliegues que contienen un cambio visible para el usuario; tasa de fallos de cambio y tasa de retrabajo junto a ella |
| Tiempo de recuperación tras un despliegue fallido | Arrancar el reloj tarde o cerrar los incidentes pronto; reclasificar un fallo como un incidente nuevo tras una corrección parcial; subir el umbral de gravedad para «fallo» | Recurrencia del mismo incidente dentro de una ventana declarada; inicio del reloj tomado de las alertas de monitorización; duración del impacto declarada por el cliente |
| Tasa de fallos de cambio | No vincular los incidentes a los despliegues; contar solo los fallos que causan una caída total; ampliar la ventana para que los fallos queden fuera; corregir hacia adelante y llamarlo cambio nuevo | Revisar cada trimestre una muestra de incidentes frente al registro de despliegues; seguir la proporción de incidentes con un vínculo de despliegue registrado; tasa de retrabajo en los despliegues |
| Tasa de retrabajo en los despliegues | Etiquetar las correcciones como trabajo planificado; agrupar una corrección en una versión programada; evitar despliegues de corrección retrasando la corrección | Recuentos de defectos y de defectos escapados del gestor; antigüedad de los defectos abiertos en producción; auditoría de etiquetas sobre una muestra de despliegues |

Una lectura sana muestra el plazo de entrega y el tiempo de recuperación decrecientes o estables en un nivel bajo, la frecuencia de despliegue estable o creciente con cambios pequeños y las tasas de fallo y de retrabajo planas o decrecientes, con recuentos lo bastante grandes como para fiarse. Las lecturas sospechosas incluyen un salto repentino de la frecuencia de despliegue sin cambio en el trabajo, una tasa de fallos que cae a cero en un mes y un tiempo de recuperación que baja mientras las quejas de los clientes siguen igual. Cada una pide mirar el instrumento antes de celebrar.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Usar las cinco métricas DORA por servicio | Basadas en investigación, equilibran velocidad y estabilidad, calculadas a partir de eventos objetivos | Necesitan un pipeline y un registro de incidentes que se unan limpiamente; silenciosas sobre si el trabajo fue valioso |
| Reportar solo la frecuencia de despliegue y el plazo de entrega | Fácil de recoger desde el pipeline | Premia solo la velocidad e invita justo a la manipulación que detectan las medidas de estabilidad |
| Usar definiciones locales por equipo | Se ajusta a la arquitectura y al estilo de publicación del equipo | Los equipos no pueden compararse y las consolidaciones no son fiables |
| Usar una definición única para toda la organización | Informes coherentes; gobernanza sencilla | Encaja mal con algunos sistemas, como mainframes con ventanas de lotes o versiones reguladas |
| Comparar equipos con bandas de rendimiento publicadas | Da a los líderes una idea rápida de su posición | Ignora el contexto, y la investigación advierte de que las bandas no son objetivos para cada equipo |
| Usar las métricas para la automejora del equipo | Genera apropiación; respalda datos honestos | Ofrece menos consuelo a los líderes que quieren una única puntuación |

La tensión central está entre la comparabilidad y la honestidad. Cuanto más se usa un número para juzgar equipos, más se tuercen los datos y menos ayudan al equipo que los posee. Usa las métricas primero para respaldar la mejora, acepta una comparabilidad imperfecta y limita las vistas a nivel de líder a tendencias y dispersión. Donde la información regulada exija una definición estándar, documéntala y mantén separada la vista de mejora a nivel de equipo.

## Preguntas para debatir con tu equipo

**1. ¿Cuáles de nuestros cinco números DORA proceden de eventos y cuáles del recuerdo de alguien?**
Sigue cada métrica hasta su fuente. Anota dónde una persona teclea una fecha o decide si algo cuenta como fallo. El facilitador debe ayudar al grupo a ordenar los pasos manuales según cuánto podrían distorsionar el número y a acordar cuál automatizar primero.

**2. ¿Dónde exactamente empieza y se detiene nuestro reloj del plazo de entrega y todos están de acuerdo?**
Pide a tres personas que describan el inicio y el fin del reloj para el último cambio publicado. Compara las respuestas. Las diferencias suelen aparecer en torno a la primera confirmación, la fusión, un ticket y el paso de aprobación. Acuerden una definición y escríbanla, y hablen de qué tiempo de espera oculta la definición elegida.

**3. ¿Qué cuenta como despliegue fallido para nosotros y quién lo decide?**
Repasa los últimos cinco incidentes de producción y pregunta si cada uno pertenece a un despliegue. Los desacuerdos muestran dónde la regla es poco clara. Hablen de qué ocurre con un fallo que se arregla con un cambio de configuración, una reversión o un parche rápido, y decidan cómo se registra cada uno.

**4. Si la frecuencia de despliegue se duplicara el próximo trimestre, ¿qué comprobaríamos antes de llamarlo buena noticia?**
Invita al grupo a nombrar las formas en que el número podría subir sin entregar más valor. Miren el tamaño de los cambios, la proporción de despliegues con un cambio visible para el usuario y las tasas de fallo y de retrabajo. El facilitador debe anotar qué comprobaciones ya existen en el panel y cuáles hay que añadir.

**5. ¿Cómo usan estos números las personas ajenas al equipo?**
Pregunta quién los ve, en qué forma y qué hace con ellos. Escucha si hay comparación con otros equipos, objetivos fijados desde fuera y uso en evaluaciones individuales. Hablen de qué tendría que cambiar en ese uso para que el equipo pudiera confiar en sus propios datos y quién tiene autoridad para hacer el cambio.

**6. ¿Qué capacidad mejoraría más nuestro número más débil y cuál es un pequeño experimento para probar?**
Elige la métrica más débil y hablen de sus causas probables, como lotes grandes, revisión lenta, pruebas inestables o un paso de publicación manual. Elijan una causa y diseñen un experimento de cuatro a seis semanas con una forma de ver el efecto. Acuerden una fecha para revisar el resultado y quién traerá los datos.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega poseen las capacidades que impulsan estos números: cambios pequeños, pruebas automatizadas, un pipeline rápido y el hábito de revisar el trabajo de los demás. Deben usar las métricas como un espejo de su propia práctica de ingeniería, fijar sus propios objetivos de mejora y resistir la presión de reportar un único número hacia arriba. También deciden las definiciones, de modo que les corresponde el deber de mantenerlas honestas (véase el tema 2.7, Métricas de solicitudes de incorporación y revisión de código).

### Equipos de servicio y de operaciones

Los equipos de operaciones guardan el registro de incidentes del que dependen las medidas de fallo y de recuperación. Ayudan al equipo de entrega etiquetando los incidentes con el despliegue que los causó, aportando monitorización que detecta los fallos con rapidez y participando en la revisión de cada despliegue fallido. Deben vigilar que la velocidad de entrega no esté comprando una inestabilidad que ellos absorben como carga de guardia (véase el tema 5.7, Métricas de trabajo repetitivo y guardias), y pedir las inversiones en reversión y detección que reducen el tiempo de recuperación.

### Liderazgo y gobernanza

Los líderes deben pedir tendencias y dispersión entre servicios, los dos grupos de métricas juntos y los experimentos de mejora que hay detrás. Deben evitar objetivos que fijen un número, como «desplegar a diario», y evitar usar las métricas en evaluaciones individuales. Los órganos de gobernanza pueden usar los números como evidencia de que una vía de aprobación de cambios más ligera es segura, o como motivo para reconsiderarla, mostrando si la estabilidad se mantuvo a medida que cambiaba el proceso (véase el tema 4.4, Fallos de cambio y retrabajo).

### Clientes y usuarios

A los clientes rara vez les importan los recuentos de despliegues. Les importa con qué rapidez les llega una corrección o una función, con qué poca frecuencia una versión rompe algo de lo que dependen y con qué rapidez vuelve el servicio cuando lo hace. Usa las métricas DORA como evidencia interna de que esos resultados son probables y compleméntalas con medidas de cara al cliente como la disponibilidad y la satisfacción (véase el tema 5.3, Métricas de disponibilidad, y el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de gestión de servicios

Un minorista en línea de tamaño medio opera un servicio de pago propiedad de un equipo de producto, con el apoyo de un equipo de plataforma y del centro de servicios. Todos los números siguientes son ilustrativos.

El equipo ha desplegado en producción unas dos veces por semana, con un plazo de entrega (de la primera confirmación a producción) de una mediana de 11 días y un percentil 85 de 26 días. En el trimestre anterior, 6 de 24 despliegues (25 por ciento, ilustrativo) fueron seguidos de una reversión o un incidente. El tiempo de recuperación mediano de esos fallos fue de 3 horas. El comité de aprobación de cambios se reúne cada semana y revisa todos los cambios del servicio de pago.

El equipo propone un plan. Dividirá los cambios grandes, añadirá comprobaciones automatizadas al pipeline, pondrá el comportamiento nuevo detrás de interruptores de funciones y pedirá al comité que preautorice como cambios estándar los cambios de bajo riesgo que superen las comprobaciones. El gestor de cambios es cauteloso, así que el equipo acuerda reportar mensualmente las cinco métricas y detener el experimento si la tasa de fallos sube durante dos meses consecutivos.

Tras un trimestre, los números (ilustrativos) son 19 despliegues al mes, un plazo de entrega mediano de 3 días con un percentil 85 de 8 días, una tasa de fallos de cambio del 8 por ciento, un tiempo de recuperación mediano de 40 minutos y una tasa de retrabajo del 5 por ciento. El equipo está satisfecho, y un gerente regional pide comparar la frecuencia de despliegue del equipo de pago con la de los demás equipos de producto y fijar un objetivo común.

La responsable del equipo lleva a la revisión el desglose de retrabajo y fallos y nota un riesgo de manipulación. A la frecuencia de despliegue la han ayudado varios despliegues de configuración diminutos que el pipeline cuenta, y el tamaño mediano de los cambios se reduce más deprisa que el trabajo real. Peor aún, dos incidentes del mes pasado se arreglaron con un cambio de configuración que el pipeline registró como un despliegue normal etiquetado «planificado», de modo que la tasa de retrabajo se subestimó. La tasa de fallos de cambio parecía buena en parte porque esos dos incidentes no se habían vinculado a sus despliegues originales.

La decisión, anotada en el registro de decisiones, tiene cuatro partes. Los despliegues solo de configuración se cuentan por separado y se muestran junto al número principal. La etiqueta de motivo del despliegue se audita mensualmente sobre una muestra de 10 despliegues. La herramienta de incidentes exige ahora el identificador del despliegue cuando la causa es un cambio. Y el equipo rechaza el objetivo común de frecuencia de despliegue y ofrece en su lugar una vista compartida que muestra la tendencia de cada servicio y su tasa de fallos. El gestor de cambios acepta mantener la preautorización de los cambios estándar, con una revisión al final del próximo trimestre.

## Agilidad, IA, automatización y analítica

### Agilidad

Las métricas DORA describen con qué rapidez y seguridad llegan los cambios a producción, que es el núcleo práctico de la entrega continua. Una buena práctica es leer juntas las medidas de velocidad y de estabilidad en una revisión periódica con las partes interesadas y elegir una mejora. La precaución es que el equipo puede inflar la frecuencia de despliegue dividiendo cambios, así que vigila el tamaño de los cambios y el retrabajo.

### IA

La programación asistida por IA puede elevar el volumen de cambios y acelerar el plazo de entrega mientras eleva el retrabajo o los cambios fallidos. Reporta juntos los cambios asistidos por IA y los demás sobre las mismas medidas de estabilidad y compara el tiempo de recuperación tras un despliegue fallido y la tasa de retrabajo en los despliegues antes y después de la adopción. La precaución es que la investigación de DORA sobre IA evoluciona, así que comprueba los informes publicados vigentes antes de citar cualquier hallazgo.

### Automatización

Calcula las cinco medidas automáticamente a partir de eventos del pipeline y de incidentes, con una regla clara de qué cuenta como despliegue y como fallo. Mide el propio pipeline por sus fallos y su inestabilidad. La precaución es que la automatización puede ocultar pasos manuales que quedan fuera del pipeline, como una aprobación por correo, así que mapea el camino real una vez.

### Analítica

Reporta distribuciones, no solo promedios, y compara un equipo con su propio pasado, no con otros equipos. La decisión a la que informa es dónde el sistema de entrega es lento o frágil. La precaución es que las tablas de posiciones entre equipos fomentan la manipulación y que los números dependen de las definiciones locales de despliegue y de fallo.

## Perspectiva sectorial

**Startup.** Un equipo pequeño suele desplegar muchas veces al día y tiene registros de incidentes escasos, de modo que la frecuencia de despliegue y el plazo de entrega son fáciles pero los datos de fallos son irregulares. Empieza etiquetando en el pipeline cada reversión y cada arreglo urgente y manteniendo un registro sencillo de incidentes con el identificador del despliegue. No dejes que una frecuencia alta te convenza de que la estabilidad está bien sin comprobar la tasa de fallos.

**Pequeña empresa.** Una plataforma alojada o un desarrollador externo pueden desplegar solo una vez al mes, con pocas herramientas. Cuenta a mano lo que puedas durante unos meses, pide por escrito al proveedor las fechas de despliegue y de incidentes y céntrate en el plazo de entrega y la tasa de fallos. Usa los números para decidir si cambios más pequeños entregados de forma continua reducirían el riesgo, no para perseguir una banda.

**Gran empresa.** Muchos equipos, varios estilos de publicación y una mezcla de sistemas modernos y heredados dificultan las definiciones coherentes. Acuerden una definición mínima común para cada métrica, publíquenla y permitan que un equipo añada otras locales más estrictas con un motivo declarado. Consolida mostrando la dispersión y la tendencia por servicio en lugar de un promedio, y mantén el detalle a nivel de equipo visible solo para el equipo propietario y sus grupos de apoyo.

**Gobierno y sector público.** Las ventanas de publicación, las reglas de auditoría y los contratos de contratación pública determinan lo que es posible, y algunos sistemas los operan proveedores. Incluye en los contratos derechos sobre los datos de entrega e incidentes para que puedan calcularse las métricas. Usa los números como evidencia de que un programa de modernización está acortando los plazos de entrega sin elevar las tasas de fallos y reporta todas las métricas juntas para que los resultados no se seleccionen (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación es acortar el tiempo entre una idea y su uso manteniendo estable la producción. El costo del programa tiene tres partes: la instrumentación (eventos del pipeline, etiquetas de despliegue y la unión con incidentes), la rutina de revisión (una mirada mensual a las tendencias y una muestra trimestral de casos de fallo y retrabajo) y el trabajo de mejora al que apuntan los números, como la automatización de pruebas o un pipeline más rápido. Las dos primeras son modestas. La tercera es donde está el gasto real, y se gasta en capacidad de ingeniería, no en medición.

El retorno procede de decisiones que los números facilitan. Un equipo puede mostrar a un comité de cambios que los cambios pequeños son seguros y así retirar un paso de aprobación. Un grupo de plataforma puede ver qué servicios tienen pipelines lentos o mala reversión y colocar su inversión en consecuencia. Un equipo de operaciones puede argumentar con datos a favor de una herramienta de detección mejor. Describe el retorno mediante patrones que puedas observar tú mismo, como el tiempo de la confirmación a producción, la proporción de versiones que necesitan una corrección y la carga de guardia por versión, antes y después de un cambio. Evita citar cifras de referencia de otras organizaciones como retorno esperado, ya que tu contexto será distinto. El costo total de propiedad está dominado por el tiempo de las personas, así que mantén pequeño el conjunto de métricas y automatiza su recogida (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Tratar las métricas como un cuadro de mando de rendimiento de individuos.** Rompe la base de la investigación y corrompe los datos. Reporta solo a nivel de servicio y de equipo.
- **Fijar objetivos como «desplegar a diario» o «plazo de entrega inferior a un día».** El objetivo sustituye a la meta. Fija una dirección de mejora y un experimento y conserva el número como señal.
- **Clasificar equipos entre sí o frente a bandas publicadas.** El contexto difiere y sigue la manipulación. Compara un equipo con su propia tendencia y usa las bandas solo como orientación laxa.
- **Reportar la velocidad sin la estabilidad.** La pareja es el punto. Muestra siempre juntos los grupos de caudal y de inestabilidad.
- **Dejar que las definiciones se desvíen.** El fallo, el despliegue y el inicio del plazo de entrega cambian en silencio con la herramienta. Registra cada cambio de una definición con su motivo y márcalo en el gráfico.
- **Contar despliegues de cualquier cosa.** Los empujes de configuración, las versiones en entornos de prueba y los redespliegues de la misma compilación inflan el recuento. Define un despliegue en producción y muestra por separado los demás tipos.
- **Ignorar lo que se publica.** Unos números fuertes pueden ocultar trabajo que no importa. Léelos junto a las medidas de flujo y de resultado (véase el tema 2.9, Trabajo operativo y trabajo no planificado).
- **Perseguir la métrica en lugar de la capacidad.** El plazo de entrega baja de forma más fiable cuando se reducen los lotes y se aceleran las pruebas. Mejora la práctica y deja que el número la siga.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y relojes | Cada persona define despliegue y fallo de forma distinta | Unos pocos equipos documentan sus definiciones | Una definición escrita por métrica, con relojes y exclusiones, en el registro de métricas | Cambios de definición registrados y marcados en los gráficos; muestras comprobadas cada trimestre | Definiciones revisadas conjuntamente con proveedores y gobernanza cuando dejan de informar decisiones |
| Captura de datos | Recuentos ensamblados a mano a partir de tickets | Datos del pipeline para algunos servicios; incidentes vinculados a mano | Despliegues, motivos y vínculos con incidentes capturados automáticamente para la mayoría de los servicios | Calidad de los datos (tasa de vínculos, auditoría de etiquetas) medida y con tendencias | Eventos compartidos entre equipos y proveedores mediante interfaces acordadas |
| Uso de los números | Reportados hacia arriba como una única puntuación | Los equipos miran sus propios gráficos de vez en cuando | Grupos de caudal y de inestabilidad revisados juntos cada mes por el equipo propietario | Las tendencias alimentan experimentos de mejora financiados con una barrera de protección | La dispersión y las tendencias informan la inversión en plataforma y la política de cambios en toda la organización |
| Barreras contra la manipulación | Ninguna | Conciencia informal | Barreras de protección emparejadas listadas para cada métrica | Barreras de protección y muestras revisadas, con los casos de manipulación registrados | Barreras de protección ajustadas continuamente a medida que cambian equipos y herramientas |

## Lista de verificación

- [ ] Las cinco métricas están definidas por escrito, con relojes, exclusiones y la fecha y la edición de la guía de DORA que se sigue.
- [ ] Los despliegues en producción los registra el pipeline con una marca de tiempo, una versión y un resultado.
- [ ] El inicio del plazo de entrega (primera confirmación, fusión u otro) está declarado y se aplica de forma coherente.
- [ ] Los incidentes llevan un campo para el despliegue que los causó, rellenado durante la resolución.
- [ ] Cada despliegue lleva una etiqueta de motivo y se audita una muestra cada mes.
- [ ] Los tiempos se reportan como la mediana y un percentil alto, con recuentos.
- [ ] Las métricas de caudal y de inestabilidad se muestran juntas para cada servicio.
- [ ] El tamaño de los cambios se sigue junto a la frecuencia de despliegue y al plazo de entrega.
- [ ] Los números no se usan en evaluaciones individuales ni para clasificar equipos.
- [ ] Un responsable con nombre revisa las métricas cada mes y registra cualquier cambio de definición.
- [ ] Un experimento de mejora, ligado a la métrica más débil, está en marcha con una fecha de revisión.

## Prompts de IA

**Redacta un conjunto de definiciones de una página para las cinco métricas.**

```text
I am defining the DORA software delivery metrics for [service or application
name]. Our tools are [version control host, CI/CD system, incident tool, ITSM
tool]. Our release style is [continuous, weekly, monthly, or other]. For change
lead time, deployment frequency, failed deployment recovery time, change fail
rate, and deployment rework rate, draft a definition with where the clock starts
and stops, what is counted and excluded, the data source, and one risk of
ambiguity. Do not invent benchmark values or claim our practice matches any
published performance band. List your assumptions and the questions I should
answer to finish the definitions.
```

**Revisa un conjunto de métricas en busca de riesgos de manipulación.**

```text
Here is how we currently compute our delivery metrics: [description of each
metric, its data source, and how it is reported]. The audience is [team,
leadership, or governance body]. For each metric, list plausible ways the number
could be inflated, hidden, or distorted without real improvement, and suggest a
paired guardrail metric or practice that would catch it. Do not invent
statistics. List your assumptions and any information you would need to be more
precise.
```

**Analiza una exportación de datos de despliegues e incidentes.**

```text
I will paste a small export of [number] production deployments and [number]
incidents with these fields: [list fields, for example deployment id, timestamp,
result, reason tag, incident id, opened time, resolved time, deployment link].
Compute the median and 85th percentile of recovery time, the change fail rate,
and the rework rate, showing the counts behind each. Flag records with missing
links or suspicious timestamps. Do not extrapolate beyond the data or compare
the result with outside benchmarks. List your assumptions and the data quality
issues that limit the conclusions.
```

**Planifica un experimento de mejora.**

```text
Our weakest delivery metric is [metric name], currently [value as reported,
with date range and counts]. Likely causes the team has discussed are [list]. Our
constraints are [constraints, for example regulated releases, shared test
environment]. Propose three small experiments of four to six weeks, each with a
hypothesis, a way to observe the effect, a guardrail metric, and a risk. Do not
invent expected improvement figures. List your assumptions and what we should
check before starting.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar los temas relacionados de cambios, versiones e incidentes y la barrera de protección que debe acompañar a cada métrica DORA.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una versión revisada de este tema mantiene coherentes sus relojes, vectores de manipulación y referencias cruzadas.

## Ideas clave

- Las métricas DORA son cinco medidas de la entrega de software, tres de caudal y dos de inestabilidad, y son más útiles leídas juntas para un servicio.
- Calcúlalas a partir de eventos del pipeline y de incidentes con definiciones escritas, porque el fallo y el inicio del plazo de entrega son juicios de valor.
- Úsalas para aprender sobre un sistema de entrega y compara un equipo con su propio historial, nunca para clasificar personas ni equipos.
- Reporta medianas, percentiles altos y recuentos, y empareja cada métrica con una barrera de protección que detecte su manipulación.
- Mejora las capacidades subyacentes, como los lotes pequeños, la detección rápida y la reversión fácil, y deja que los números las sigan.
- Indica la edición y la fecha de la guía que sigues, ya que las definiciones se han refinado con el tiempo.

## Referencias y lecturas complementarias

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. DORA, *DORA research program*, Google Cloud, https://dora.dev/research/
4. DORA, *Four Keys project*, https://github.com/dora-team/fourkeys
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
6. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [DevOps Research and Assessment](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment).
9. Wikipedia, [Accelerate (book)](https://en.wikipedia.org/wiki/Accelerate_(book)).
10. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
16. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
