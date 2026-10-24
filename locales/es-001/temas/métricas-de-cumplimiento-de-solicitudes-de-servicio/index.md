# Métricas de cumplimiento de solicitudes de servicio

**Mide cuánto tardan las solicitudes rutinarias desde el punto de vista del usuario, cuánto de ese tiempo es espera, qué elementos del catálogo impulsan la demanda y cuánto del trabajo está automatizado, y usa ese cuadro para rediseñar las solicitudes comunes en lugar de presionar a las personas que las gestionan.**

## Visión general y motivación

Una **solicitud de servicio** es una petición rutinaria de un usuario de algo que un servicio está diseñado para proporcionar: una cuenta, acceso a una carpeta, un portátil, una licencia de software, un dato. Se distingue de un **incidente**, que es una perturbación no planificada de un servicio (véase el tema 3.2, Volumen y prioridad de incidentes), y de un **cambio**, que modifica un servicio y necesita un nuevo juicio sobre el riesgo (véase el tema 4.3, Métricas de habilitación de cambios). En [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 el trabajo lo cubre la práctica de gestión de solicitudes de servicio, y suele describirse como un **modelo de solicitud** repetible: la información necesaria, las aprobaciones, los pasos y el tiempo esperado. ITIL escribe la palabra inglesa «fulfilment»; en español este tema usa «cumplimiento».

Las solicitudes importan para las métricas porque son una demanda predecible. Un incidente es una sorpresa; la solicitud del portátil de una persona recién incorporada llega todos los meses y sigue los mismos pasos. Esa predecibilidad hace de las solicitudes el mejor candidato para el diseño, la estandarización y la [automatización de procesos](https://en.wikipedia.org/wiki/Process_automation). También significa que los retrasos rara vez los causa la dificultad. Los causan las colas, las aprobaciones y los traspasos, de modo que la pregunta útil es dónde espera la solicitud, no con qué rapidez teclea alguien.

La unidad de análisis es el **elemento del catálogo**: una cosa con nombre que un usuario puede pedir en el [catálogo de servicios](https://en.wikipedia.org/wiki/Service_catalog). Las medidas por elemento son mucho más útiles que un único número combinado, porque una solicitud de restablecimiento de contraseña y una solicitud de construcción de un servidor tienen relojes distintos, responsables distintos y objetivos razonables distintos. Un promedio combinado oculta ambos.

Las visiones ágil e ITIL se encuentran aquí con poca fricción. ITIL pregunta si el servicio entrega el resultado acordado en el tiempo acordado. La práctica ágil de flujo pregunta cuánto tarda el trabajo en fluir desde la solicitud hasta hecho, cuánto permanece en colas y cuánto trabajo hay en curso a la vez. Una solicitud es un elemento de trabajo que se mueve por un flujo de trabajo, de modo que las herramientas de medición del flujo, como el tiempo de ciclo y la antigüedad del elemento de trabajo, se aplican directamente (véase el tema 2.1, Medidas de flujo). El vocabulario difiere. La aritmética es la misma.

Tres términos se repiten. El **tiempo de cumplimiento** es el tiempo transcurrido desde el momento en que el usuario envía la solicitud hasta el momento en que el usuario confirma, o el sistema registra, que se entregó lo pedido. El **tiempo de trabajo activo** es el tiempo en que alguien trabaja en la solicitud, y el **tiempo de espera** es todo lo demás, incluidas las aprobaciones y la espera del usuario. La diferencia entre ambos es lo que un modelo de solicitud debería reducir. La **proporción de automatización** es la parte de las solicitudes cumplidas sin que una persona las toque después del envío.

Las medidas de tiempo requieren cuidado. Los tiempos de cumplimiento son asimétricos: la mayoría de las solicitudes terminan pronto y unas pocas tardan muchísimo. Una media la zarandean esas pocas, así que reporta la mediana y un [percentil](https://en.wikipedia.org/wiki/Percentile) alto como el 85 o el 95 (véase el tema 1.6, Alfabetización estadística para métricas de servicio). Los objetivos acordados con los clientes, como los de un [acuerdo de nivel de servicio (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement), deben expresarse de la misma manera: «el 85 por ciento de las solicitudes de portátil cumplidas en 5 días laborables» dice más que «promedio de 3 días».

Por último, una advertencia de la psicología de la medición. Cuando se juzga a un equipo por cerrar rápido las solicitudes, la forma más barata de mejorar el número es cambiar lo que cuenta como cerrado o pausar el reloj. La [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica por completo (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Por eso cada métrica siguiente se empareja con una barrera de protección, y ninguna describe a un agente individual.

## Principios clave

- **Mide por elemento del catálogo.** Cada elemento tiene su propio modelo de solicitud, responsable y objetivo razonable, así que los números combinados engañan.
- **Arranca el reloj cuando el usuario pide y detenlo cuando el usuario tiene lo pedido.** Los hitos internos son diagnósticos útiles, pero no son la experiencia del cliente.
- **Separa el tiempo de espera del tiempo de trabajo activo.** La brecha entre ambos muestra dónde rinde el rediseño, y rara vez está en el trabajo en sí.
- **Reporta distribuciones, no promedios.** Una mediana y un percentil 95 describen lo que viven los usuarios.
- **Trata la demanda como una señal.** El volumen por elemento muestra lo que necesitan los usuarios, lo que les confunde y lo que merece automatización o autoservicio.
- **Automatiza primero lo estable y frecuente.** La proporción de automatización es resultado de un buen diseño de la solicitud, no una meta que perseguir por sí misma.
- **Mide el equipo y el servicio, nunca la persona.** Las solicitudes fluyen por sistemas, y la variación entre agentes refleja sobre todo la mezcla de trabajo.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tiempo de cumplimiento de solicitudes | Tiempo transcurrido para entregar una solicitud, mostrado como una mediana y un percentil 95 por elemento del catálogo | el reloj empieza cuando el usuario envía la solicitud y se detiene cuando el usuario confirma la entrega o se registra la entrega; se excluyen las solicitudes canceladas por el usuario; el tiempo de espera del usuario se reporta por separado, no se elimina | días laborables u horas | Historial de solicitudes de la herramienta ITSM | Gestión de solicitudes de servicio | Tiempo de ciclo en el tablero del equipo (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo) | Semanal, con tendencia mensual |
| Cumplimiento dentro del objetivo | Proporción de solicitudes entregadas dentro del objetivo acordado para su elemento del catálogo | solicitudes cumplidas dentro del objetivo / solicitudes cumplidas en el periodo; reloj como arriba, los elementos aún abiertos se excluyen y se cuentan en la antigüedad de la lista de pendientes | porcentaje | Historial de solicitudes de la herramienta ITSM; tabla de objetivos por elemento del catálogo | Gestión de niveles de servicio | Expectativa de nivel de servicio | Mensual |
| Lista de pendientes de solicitudes y antigüedad | Número de solicitudes abiertas y antigüedad de las más viejas, por elemento del catálogo | solicitudes abiertas al final del periodo (recuento); antigüedad de cada solicitud abierta = fecha del informe menos fecha de envío; se reportan el recuento, la antigüedad mediana y la antigüedad máxima | recuento y días | Cola de solicitudes abiertas de la herramienta ITSM | Gestión de solicitudes de servicio | Trabajo en curso y elementos de trabajo envejecidos (véase el tema 2.3, Trabajo en curso y teoría de colas) | Semanal |
| Tiempo de espera de aprobación | Tiempo que una solicitud pasa esperando una aprobación | el reloj empieza cuando se pide la aprobación y se detiene cuando se concede o se rechaza; se excluyen las solicitudes sin paso de aprobación | horas | Registro de aprobaciones de la herramienta ITSM | Gestión de solicitudes de servicio; habilitación de cambios | Tiempo bloqueado o una columna de «espera» en el tablero | Mensual |
| Volumen de solicitudes por elemento del catálogo | Número de solicitudes enviadas para cada elemento, con su proporción del total | solicitudes enviadas por elemento en el periodo; se excluyen las solicitudes reenviadas como duplicadas, si se identifican; se reportan el recuento y la proporción del total | recuento y porcentaje | Registros de solicitudes de la herramienta ITSM | Gestión del catálogo de servicios | Análisis de la demanda para dar forma a la lista de pendientes | Mensual |
| Proporción de automatización | Parte de las solicitudes cumplidas sin ningún paso manual tras el envío | solicitudes cumplidas de extremo a extremo por automatización / solicitudes cumplidas en el periodo; una solicitud tocada por una persona en cualquier paso de cumplimiento se cuenta como manual; las aprobaciones por una persona no cuentan como pasos manuales de cumplimiento si la política las exige | porcentaje | Registros de cumplimiento de la herramienta ITSM y registros de la plataforma de automatización | Gestión de solicitudes de servicio; automatización dentro de la cadena de valor del servicio | Automatización en la definición de terminado | Mensual |
| Tasa de reapertura de solicitudes | Proporción de solicitudes cumplidas que el usuario reabre o vuelve a plantear porque el resultado fue erróneo o incompleto | solicitudes reabiertas o vueltas a plantear para el mismo elemento por el mismo usuario en los 7 días siguientes al cumplimiento / solicitudes cumplidas en el periodo; la ventana de 7 días es un ejemplo que el equipo anota | porcentaje | Historial de solicitudes de la herramienta ITSM | Gestión de solicitudes de servicio | Tasa de retrabajo; defectos escapados | Mensual |

El tiempo de cumplimiento cuenta tiempo laborable solo si el equipo ha acordado y registrado un calendario; de lo contrario, usa horas transcurridas e indícalo. La métrica de la lista de pendientes lleva tres números a propósito, porque un recuento solo no dice nada de la espera. La definición de proporción de automatización deja las aprobaciones humanas fuera del recuento de «manual» porque muchas aprobaciones son una decisión de política y no un costo de cumplimiento; el tiempo de espera de aprobación se mide por separado para que el retraso siga siendo visible.

## Recomendaciones

### Define los relojes y la unidad

**1. Mide por elemento del catálogo y publica la lista de elementos.** Empieza con los diez primeros elementos por volumen, que suelen cubrir una gran proporción de las solicitudes, y añade elementos a medida que los datos lo permitan. Da a cada elemento un responsable, un objetivo declarado y una definición de una línea de «entregado». La lista de elementos es el denominador de todo lo demás, así que guárdala en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas).

**2. Escribe el inicio y el fin del reloj de cada elemento.** Para la mayoría de los elementos el reloj empieza en el envío y se detiene cuando el usuario puede usar lo que pidió, no cuando se cierra un ticket. Un portátil está entregado cuando está en manos del usuario, no cuando se reserva el mensajero.

**3. Decide una sola vez cómo se trata la espera del usuario.** Algunas solicitudes se estancan porque el usuario no ha respondido a una pregunta. Pausar el reloj por eso es razonable, pero también es la palanca más fácil de abusar. Registra la pausa como un estado separado con un motivo, reporta el tiempo en pausa como un número propio y revisa la tasa de pausa por elemento (véase el tema 1.5, Fuentes de datos e instrumentación).

### Reporta lo que experimentan los usuarios

**4. Muestra la mediana y el percentil 95, con un recuento.** Pon ambos en un gráfico por elemento, con el número de solicitudes detrás de cada punto. Una mediana de dos días con un percentil 95 de veinte te dice que la mayoría de los usuarios está bien atendida y que una cola necesita investigación, lo que un promedio de cuatro días oculta. Cuando el recuento sea pequeño, dilo y muestra las solicitudes individuales en lugar de un percentil.

**5. Haz visible la antigüedad de las solicitudes abiertas.** El tiempo de cumplimiento solo se conoce cuando una solicitud termina, así que va rezagado. Una lista de las solicitudes abiertas más antiguas por elemento, ordenadas por antigüedad, dice a un equipo dónde mirar hoy. En términos de flujo es la antigüedad del elemento de trabajo frente al tiempo de ciclo habitual del elemento, y es la vista más accionable que puede tener una cola de solicitudes.

**6. Divide el tiempo transcurrido en tiempo de trabajo activo, de aprobación y de espera del usuario.** Toma una muestra de solicitudes cumplidas de un elemento y desglosa cada una en el tiempo pasado en cada estado. La mayoría de los equipos descubre que el trabajo activo es una pequeña parte del tiempo transcurrido. El hallazgo traslada la conversación de mejora de «trabajar más deprisa» a «eliminar la cola entre pasos», que es la idea central del estudio de las colas y el flujo (véase el tema 2.3, Trabajo en curso y teoría de colas).

### Usa la demanda para moldear el servicio

**7. Lee el volumen por elemento como un mensaje de los usuarios.** Un volumen creciente de un elemento puede significar una necesidad creciente, un producto confuso o un fallo en otra parte, como un proceso roto que hace que la gente vuelva a preguntar. Un elemento de muy bajo volumen puede ser candidato a retirarse del catálogo. Compara el volumen con los datos de adopción (véase el tema 6.3, Métricas de adopción y catálogo de servicios).

**8. Ordena los candidatos a automatización por volumen, estabilidad y tiempo de trabajo activo.** Los mejores primeros candidatos son los de alto volumen, que rara vez varían y que conllevan un tiempo de trabajo activo apreciable. Empieza por el elemento cuyos pasos ya son idénticos cada vez, como el acceso a un grupo estándar, y automatiza los pasos antes de tocar las excepciones. Haz seguimiento de la proporción de automatización por elemento para que el progreso sea visible, y envía las cuestiones de autoservicio y de desvío a su propio tema (véase el tema 3.7, Métricas de autoservicio y automatización).

**9. Rediseña las aprobaciones antes de añadir personas.** La espera de aprobación suele dominar el tiempo transcurrido. Pregunta de cada aprobación si la exige la política, si bastaría una solicitud estándar preaprobada y si el aprobador puede ser un rol con suplente en lugar de una persona. Preaprobar solicitudes de bajo riesgo y bien comprendidas refleja la idea de los cambios estándar en la habilitación de cambios y elimina colas sin eliminar el control.

### Mantén honestos los números

**10. Empareja siempre la velocidad con la calidad.** Reporta el tiempo de cumplimiento junto a la tasa de reaperturas y una señal de satisfacción del usuario del mismo elemento (véase el tema 6.1, Métricas de satisfacción del cliente). Una solicitud más rápida que vuelve reabierta es más lenta de lo que parece. Si la velocidad mejora y la tasa de reaperturas sube con ella, trata la ganancia de velocidad como no demostrada.

**11. Mantén separadas en los datos las solicitudes, los incidentes y los cambios.** Mezclarlos distorsiona los tres. Un restablecimiento de contraseña que en realidad es un síntoma de un servicio de inicio de sesión defectuoso es un incidente, y una solicitud para alterar cómo funciona un servicio es un cambio. Clasifica en la admisión con una regla breve, muestrea cada trimestre los elementos mal clasificados y compara lado a lado los volúmenes de solicitudes e incidentes (véase el tema 3.1, Métricas del centro de servicios).

**12. Revisa la tabla de elementos con el equipo que hace el trabajo.** Reúnanse cada mes treinta minutos en torno a la tabla por elemento: volumen, mediana y percentil 95, solicitud abierta más antigua, proporción de automatización, tasa de reaperturas. Elijan un elemento y un cambio que probar y miren la misma tabla el mes siguiente para ver qué ocurrió.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tiempo de cumplimiento de solicitudes | Pausar el reloj por «a la espera del usuario» sea o no el usuario la causa; cerrar solicitudes antes de la entrega y reabrirlas como nuevas; dividir una solicitud en varias pequeñas | Proporción de tiempo en pausa por elemento, con una auditoría por muestreo de los motivos de pausa; tasa de reaperturas; confirmación de la entrega por el usuario antes del cierre |
| Cumplimiento dentro del objetivo | Redefinir el objetivo para que sea más fácil; contar solo las solicitudes que terminan e ignorar las abiertas antiguas; escoger elementos rápidos para el conjunto de objetivos | Antigüedad de la lista de pendientes para las solicitudes abiertas; cambios de objetivos registrados en el registro de métricas con un motivo; el conjunto de objetivos cubre todos los elementos por volumen |
| Lista de pendientes de solicitudes y antigüedad | Cerrar solicitudes antiguas como «sin respuesta» u «obsoletas»; trasladar solicitudes a otra cola o categoría para que salgan de la cola contada | Recuento de solicitudes cerradas sin entrega, por motivo; traslados de categoría y de cola revisados en la reunión mensual |
| Tiempo de espera de aprobación | Los aprobadores aprueban sin leer para ahorrar tiempo; los solicitantes persiguen a los aprobadores fuera del sistema para que la espera registrada sea corta | Revisión por muestreo de solicitudes aprobadas frente a la política; tasa de reaperturas y excepciones de seguridad de los elementos aprobados; número de pasos de aprobación por elemento |
| Volumen de solicitudes por elemento del catálogo | Reducir el volumen haciendo más difícil encontrar el catálogo o desalentando las solicitudes; reclasificar solicitudes como incidentes o como «consultas generales» | Satisfacción con el catálogo; proporción de contactos clasificados como «otros»; datos de adopción del servicio (véase el tema 6.3, Métricas de adopción y catálogo de servicios) |
| Proporción de automatización | Automatizar los elementos triviales para elevar el porcentaje; contar como automatizada una solicitud con script que una persona sigue comprobando a mano; esconder pasos manuales en un ticket separado | Proporción ponderada por volumen de solicitudes y por tiempo de trabajo activo eliminado; tasa de automatizaciones fallidas y de retorno a manual; muestra de solicitudes «automatizadas» seguidas de extremo a extremo |
| Tasa de reapertura de solicitudes | Desalentar la reapertura dificultándola; decir a los usuarios que abran una solicitud nueva, lo que reinicia el contador | Solicitudes repetidas del mismo usuario para el mismo elemento dentro de la ventana; satisfacción del usuario por elemento; reapertura permitida desde la notificación |

Una lectura sana tiene este aspecto. La mediana y el percentil 95 bajan juntos, o el percentil 95 baja mientras la mediana se mantiene. La solicitud abierta más antigua no es mucho más vieja que el percentil 95 de las cumplidas. La tasa de reaperturas y la satisfacción se mantienen planas o mejoran mientras mejora la velocidad. La proporción de automatización sube en los elementos que importan por volumen, y el propio volumen cambia por razones que el equipo puede explicar. Si un número mejora bruscamente mientras su barrera de protección se desvía en sentido contrario, ve a mirar las solicitudes subyacentes.

## Compensaciones: ventajas y desventajas

| Elección | Ventajas | Desventajas |
| --- | --- | --- |
| Medición por elemento | Los objetivos se ajustan al trabajo; muestra dónde rinde el rediseño | Más datos que mantener; los elementos pequeños tienen pocos puntos de datos |
| Mediana y percentil 95 en lugar de la media | Describe lo que viven los usuarios; resiste los valores atípicos | Más difícil de explicar a ejecutivos acostumbrados a un solo número; inestable para elementos de poco volumen |
| Pausar el reloj mientras se espera al usuario | Justo con el equipo cuando el usuario causa el retraso | Fácil de abusar; oculta el efecto de formularios poco claros y de una comunicación deficiente |
| Contar la proporción de automatización | Hace visible el progreso de la automatización y lo ata al costo | Premia las automatizaciones fáciles; no dice nada de la calidad si no se empareja con la tasa de fallos |
| Medir desde el envío del usuario hasta su confirmación | Coincide con la experiencia del cliente | Depende de la confirmación del usuario, que a menudo falta; necesita una regla por defecto |
| Separación estricta de solicitudes e incidentes | Datos más limpios y mejores objetivos | Requiere disciplina en la admisión y discusiones sobre casos límite |

El compromiso central está entre un número limpio y uno justo. Un reloj estricto que nunca se pausa es sencillo y difícil de manipular, pero penaliza al equipo cuando el usuario es lento. Un reloj flexible es más justo pero requiere auditoría. A la mayoría de los equipos les va bien empezar con un reloj estricto, añadir un estado pausado explícito con un motivo y reportar abiertamente la proporción de pausa.

## Preguntas para debatir con tu equipo

**1. ¿Qué tres elementos del catálogo causan más espera a nuestros usuarios y cómo lo sabemos?**
Lleva la tabla por elemento de volumen, mediana y percentil 95 del tiempo de cumplimiento. Pide al grupo que elija elementos por espera total (volumen por espera típica), no por lo molestos que parecen. Compara la respuesta con el primer instinto de la gente. El facilitador debe anotar dónde difieren los datos y el instinto.

**2. ¿Dónde empieza y se detiene nuestro reloj y estaría de acuerdo un usuario?**
Elige un elemento común y recorre su trayecto como lo ve el usuario, desde el primer clic hasta el momento en que puede usar el resultado. Marca dónde dice «hecho» el estado de nuestro ticket y dónde diría «hecho» el usuario. Cualquier brecha entre ambos es espera invisible. Acuerden un cambio en el evento de fin y escríbanlo en el registro de métricas.

**3. ¿Cuánto de nuestro tiempo transcurrido es personas trabajando y cuánto es espera?**
Muestrea diez solicitudes cumplidas de un elemento y divide cada una en tiempo de trabajo activo, de aprobación y de espera del usuario. Muestra el resultado como una barra apilada. Pregunta qué tendría que ser cierto para reducir a la mitad la espera. Esta pregunta suele trasladar a la sala de «necesitamos más personal» a «necesitamos menos traspasos».

**4. ¿Qué aprobaciones podrían sustituirse por una regla acordada de antemano?**
Enumera las aprobaciones de los elementos principales y la razón de política de cada una. Donde nadie recuerde el último rechazo, la aprobación puede ser un ritual.

**5. Si automatizáramos el siguiente elemento del catálogo, ¿subiría el número por la razón correcta?**
Hablen de cómo la proporción de automatización puede subir con elementos fáciles o de poco volumen sin que los usuarios noten diferencia. Pregunta qué mediría el equipo para confirmar que una automatización ayudó: tiempo de trabajo activo eliminado, tasa de fallos, tasa de reaperturas y satisfacción. Decidan qué elemento automatizar a continuación usando el volumen y el tiempo de trabajo activo, no solo la facilidad.

**6. ¿Qué haríamos si un número de esta página empeorara y a quién se culparía?**
Haz el experimento mental abiertamente. Pregunta qué se vería tentado a cambiar el equipo en los datos antes de cambiar el servicio. Acuerden que la primera respuesta ante un número que empeora es mirar las solicitudes que hay detrás.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de producto generan solicitudes sobre sus propios servicios: acceso a entornos, pipelines nuevos, datos de prueba, claves de licencia. Los tiempos de cumplimiento largos de estas solicitudes aparecen como trabajo ocioso en el propio flujo del equipo, por lo que la medida pertenece a su tablero como estado bloqueado. Los equipos que poseen un servicio deben publicar sus propios elementos de solicitud y objetivos y tratar las solicitudes repetidas como candidatas a la lista de pendientes (véase el tema 2.6, Métricas de la lista de pendientes y su refinamiento). Donde una solicitud es en realidad una capacidad de plataforma que falta, la demanda repetida es el argumento para construirla.

### Equipos de servicio y de operaciones

Para las personas que cumplen las solicitudes, la tabla por elemento es un mapa de adónde va el esfuerzo. Saben qué pasos son manuales, qué aprobaciones se atascan y qué formularios producen información vaga. Deben poseer los modelos de solicitud, la lista de pendientes de automatización y la revisión mensual, y deben ser la primera audiencia de los datos. Los números describen la cola y el proceso, así que deja explícito que nadie se clasifica y que la variación entre personas refleja sobre todo la mezcla de solicitudes que cada una toma.

### Liderazgo y gobernanza

Los líderes necesitan una vista breve: mediana y percentil 95 de los elementos principales, la proporción cumplida dentro del objetivo, las solicitudes abiertas más antiguas y la tendencia de la proporción de automatización y del costo por solicitud (véase el tema 7.5, Costo del servicio y economía unitaria). La tarea de gobernanza es preguntar qué cambió, no quién es lento. Los líderes aprueban además el lado de política de las aprobaciones, de modo que tienen la palanca que más reduce la espera.

### Clientes y usuarios

A los usuarios les importan tres cosas: cuánto tiempo, cuán predecible y cuánto esfuerzo. Rara vez les importan los estados internos. Muéstrales un objetivo sencillo por elemento («portátiles en cinco días laborables»), diles dónde está su solicitud y pídeles que confirmen la entrega. Recoge una señal de satisfacción de una pregunta al cierre y lee los comentarios.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de una universidad regional (una organización ficticia) opera un centro de servicios y un pequeño equipo de plataforma. Los números siguientes son ilustrativos, no proceden de ninguna organización real.

En la revisión mensual el equipo mira la tabla por elemento. En todas las solicitudes, el tiempo medio de cumplimiento es de 3,1 días laborables, lo que parece aceptable y apenas se ha movido en un año. Por elemento, el cuadro es distinto. «Acceso a unidad compartida» tiene una mediana de 0,4 días y un percentil 95 de 2 días. «Licencia de software departamental» tiene una mediana de 2 días y un percentil 95 de 11 días. «Portátil para recién incorporado» tiene una mediana de 6 días y un percentil 95 de 15 días. Los tres elementos principales por volumen son el acceso a unidades compartidas, las solicitudes de licencias y los portátiles para recién incorporados, con proporciones ilustrativas del 32, el 21 y el 9 por ciento de todas las solicitudes.

El equipo muestrea diez solicitudes de portátil y divide el tiempo. Resultado ilustrativo: unos 0,5 días de trabajo activo, 2,5 días a la espera de la aprobación de un jefe directo, 1,5 días a la espera de la confirmación de existencias y el resto en una cola de mensajería. La espera de aprobación es la pieza mayor.

La decisión se deriva de los datos. El equipo propone, con el responsable de finanzas y el de seguridad, que los portátiles del catálogo estándar queden preaprobados cuando recursos humanos confirme el puesto de la persona recién incorporada, con aviso al jefe en lugar de petición. Conectan además la comprobación de existencias con el sistema de inventario. Fijan el experimento para un trimestre y acuerdan qué contaría como éxito: el percentil 95 de los portátiles baja, y la tasa de reaperturas y la puntuación de satisfacción se mantienen.

En el segundo mes aparece un riesgo de manipulación. La mediana de las licencias baja bruscamente, de 2 días a menos de 1. La revisión nota que la proporción de tiempo en pausa por «a la espera del usuario» del elemento ha saltado de un 5 por ciento ilustrativo a un 40 por ciento, y la tasa de reaperturas ha subido. Una muestra revela que los agentes pausaban las solicitudes con un mensaje genérico en cuanto una licencia necesitaba cualquier comprobación, lo que detenía el reloj. El equipo no culpa a los agentes. Ven que el objetivo hacía atractiva la pausa y que el campo de motivo de pausa era texto libre. Cambian el motivo de pausa a una lista breve, exigen una pregunta concreta al usuario y añaden la proporción de tiempo en pausa como columna permanente junto a la mediana. La mediana de licencias vuelve a un nivel cercano al anterior, la tasa de reaperturas baja y el equipo usa el tiempo de debate ahorrado para rediseñar el formulario de licencias, que producía las solicitudes poco claras.

Tras el trimestre (ilustrativo), el percentil 95 de los portátiles baja de 15 a 9 días y la proporción de automatización del acceso a unidades compartidas llega al 70 por ciento. El equipo registra ambos cambios y elige el formulario de licencias como siguiente experimento.

## Agilidad, IA, automatización y analítica

### Agilidad

Trata las solicitudes comunes como pequeños productos que el equipo mejora de forma continua con las personas que los usan. La precaución es que un objetivo de tiempo de cumplimiento puede llevar a cerrar solicitudes antes de tiempo o a dividirlas, así que empárejalo con la tasa de reaperturas.

### IA

La IA puede redactar respuestas, rellenar formularios y encaminar solicitudes, y puede completar algunas solicitudes sin ninguna persona implicada. Empareja la proporción de automatización con la tasa de reaperturas y con la proporción de solicitudes gestionadas por IA que necesitaron después a una persona. La precaución es que una IA que malinterpreta una solicitud puede crear un acceso o un pedido equivocado, así que las reglas de aprobación se siguen aplicando.

### Automatización

Automatiza las aprobaciones, el aprovisionamiento y las actualizaciones de estado de las solicitudes estándar y mide la automatización por sus fallos y su retrabajo manual. Muestra por separado el tiempo de espera de aprobación, ya que suele ser la espera más larga. La precaución es que una automatización sin un responsable claro deja solicitudes fallidas en una cola que nadie vigila.

### Analítica

Muestra el tiempo de cumplimiento como una distribución por elemento del catálogo e incluye la solicitud abierta más antigua. La decisión a la que informa es qué solicitud rediseñar primero. La precaución es que mezclar elementos simples y complejos en un promedio oculta ambos.

## Perspectiva sectorial

**Startup.** Una startup tiene pocos tipos de solicitud y ningún catálogo formal, y las mismas personas gestionan las solicitudes y construyen el producto. Mide las tres o cuatro solicitudes que bloquean a los recién incorporados, como cuentas y equipos, y haz seguimiento de la solicitud abierta más antigua. Automatiza pronto la incorporación, porque cada contratación la repite.

**Pequeña empresa.** Una pequeña empresa suele depender de una persona de TI o de un proveedor externo. Usa un tablero compartido sencillo con una columna para cada estado y haz seguimiento de la antigüedad y el volumen de las solicitudes por tipo. Pide al proveedor el volumen mensual por elemento y la solicitud abierta más antigua.

**Gran empresa.** Una gran empresa tiene cientos de elementos del catálogo, muchos grupos de cumplimiento y aprobaciones en capas. Concéntrate en los elementos principales por volumen y en los de mayor espera por espera total. Estandariza la definición del reloj entre los grupos de cumplimiento antes de compararlos y reporta por separado los traspasos entre grupos (véase el tema 9.3, Métricas de colaboración y traspasos). Los tiempos de cumplimiento de los proveedores pertenecen a la misma vista, medidos desde la solicitud del cliente y no desde la recepción del proveedor.

**Gobierno y sector público.** Los organismos públicos añaden aprobaciones obligatorias, normas de contratación y obligaciones de registro, así que parte del tiempo de espera es política y debe etiquetarse como tal en lugar de contarse como un retraso que eliminar. Publica los objetivos por elemento en lenguaje llano donde los compromisos de servicio sean públicos. Reporta de una forma que un regulador o un órgano de supervisión pueda reproducir, con las definiciones escritas.

## Caso de negocio: motivaciones, ROI y TCO

Las solicitudes son una parte grande y repetitiva del trabajo que llega a un centro de servicios, de modo que incluso un rediseño modesto tiene un efecto amplio. Las principales motivaciones son esperas más cortas y más predecibles para los usuarios, un menor esfuerzo de gestión por solicitud, menos contactos repetidos y capacidad liberada para el trabajo de problemas y de mejora.

El lado del costo es sobre todo puntual y modesto. Definir los elementos del catálogo, acordar los relojes y asegurarse de que la herramienta registra los estados necesarios son unos días de trabajo por grupo, más un pequeño esfuerzo continuo para mantener correcto el pipeline (véase el tema 1.5, Fuentes de datos e instrumentación). La automatización tiene su propio costo de construcción y mantenimiento, que incluye monitorizar las automatizaciones, gestionar los fallos y actualizarlas cuando cambian los sistemas de destino. Cuéntalo en el costo total de propiedad más allá de la licencia o del tiempo de construcción.

El retorno debe estimarse con tus propios datos y no con una referencia general. Para un elemento, multiplica el volumen mensual por el tiempo de trabajo activo ahorrado y por el costo cargado del tiempo, y resta después el costo de construcción y operación del cambio. Añade el valor del tiempo de espera eliminado para los usuarios, con un método que puedas defender, y muéstralo por separado porque es una estimación de otra clase. Ninguna cifra de este tema es una referencia y los números de los ejemplos son ilustrativos. Vincula el caso de negocio con el costo unitario por solicitud donde existan los datos financieros (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Un promedio combinado para todas las solicitudes.** Oculta tanto los éxitos rápidos como la cola larga. Reporta por elemento, con una mediana y un percentil 95.
- **Cerrar el ticket y llamarlo entregado.** El usuario puede seguir sin nada. Define la entrega desde el lado del usuario y pide confirmación.
- **Estados de pausa de forma libre.** Un estado de «espera» sin motivo permite detener el reloj por cualquier causa. Usa una lista breve de motivos y reporta la proporción en pausa.
- **Contar la automatización por número de elementos.** Diez elementos raros automatizados pueden elevar el porcentaje sin ayudar a nadie. Pondera por volumen y tiempo de trabajo activo.
- **Clasificar a los agentes por solicitudes cerradas.** Premia escoger los tickets fáciles y castiga a quien toma los difíciles. Reporta solo a nivel de equipo y de elemento.
- **Ocultar la demanda para parecer eficiente.** Hacer difícil el uso del catálogo baja el volumen y eleva la frustración. Empareja el volumen con datos de satisfacción y adopción.
- **Tratar las aprobaciones como intocables.** Las aprobaciones son a menudo el mayor retraso y rara vez se revisan. Pregunta qué protege cada una y si una regla puede hacer el trabajo.
- **Mezclar solicitudes con incidentes.** Distorsiona ambos conjuntos de números. Clasifica en la admisión y muestrea la clasificación.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y relojes | Las solicitudes se cuentan como tickets; el fin del reloj es lo que signifique «cerrado» | Algunos equipos definen inicio y fin por elemento; las definiciones difieren | Una definición escrita del reloj por elemento del catálogo, compartida entre equipos | Definiciones revisadas con una cadencia y cambios registrados con motivos | Las definiciones siguen la visión del cliente entre proveedores y se revisan cuando dejan de informar decisiones |
| Datos e informes | Recuentos extraídos a mano de la herramienta | Informes de algunos elementos desde la herramienta ITSM; tiempos medios | Mediana y percentil 95 por elemento desde una sola fuente de datos | Tendencias, antigüedad de la lista de pendientes y proporción de tiempo en pausa revisadas con sus barreras de protección | Datos de cumplimiento de equipos internos y proveedores combinados y ligados a resultados de los usuarios |
| Demanda y automatización | Solicitudes gestionadas una a una; sin visión de la demanda repetida | Elementos principales identificados de manera informal; unos pocos scripts | Modelos de solicitud documentados para los elementos principales; lista de pendientes de automatización ordenada por volumen y tiempo de trabajo activo | Proporción de automatización y tasa de fallos con seguimiento; aprobaciones rediseñadas con evidencias | Demanda, autoservicio y automatización planificados conjuntamente en toda la organización y adaptados continuamente |
| Uso en la mejora | Los números se reportan hacia arriba, no se usan | Arreglos ocasionales tras las quejas | Revisión mensual por el equipo que hace el trabajo | Mejoras financiadas ligadas a los resultados por elemento | Las ideas de mejora llegan de equipos, usuarios y proveedores, y los resultados retroalimentan el diseño del catálogo |

## Lista de verificación

- [ ] Cada elemento del catálogo dentro del alcance tiene un responsable, una definición de una línea de «entregado» y un objetivo declarado.
- [ ] Los eventos de inicio y fin del reloj de cumplimiento están escritos para cada elemento.
- [ ] La espera del usuario es un estado separado con una lista breve de motivos y se reporta el tiempo en pausa.
- [ ] Los informes muestran la mediana y el percentil 95 por elemento, con el número de solicitudes detrás de cada uno.
- [ ] Las solicitudes abiertas más antiguas son visibles para el equipo cada semana.
- [ ] Se han muestreado los tiempos de trabajo activo, de aprobación y de espera de los elementos principales.
- [ ] El volumen por elemento se revisa cada mes y se compara con datos de adopción o de satisfacción.
- [ ] La proporción de automatización se pondera por volumen y se empareja con las tasas de fallos y de retorno a manual.
- [ ] Cada medida de velocidad se empareja con la tasa de reaperturas y una señal de satisfacción del usuario.
- [ ] Las solicitudes, los incidentes y los cambios se clasifican en la admisión y la clasificación se muestrea.
- [ ] Ningún informe clasifica a agentes individuales.

## Prompts de IA

**Redacta un modelo de solicitud y la definición del reloj para un elemento del catálogo.**

```text
I am defining the measurement for this catalog item: [catalog item name]. The
steps today are [list steps and who does each], the approvals are [list
approvals], and our tool is [ITSM tool]. Draft a request model with the
information required, the start and stop events of the fulfillment clock, the
states in which the clock may pause and the allowed reasons, and a list of
timestamps I need the tool to record. Do not invent benchmark values or tool
features. List your assumptions and the questions I should answer to finish the
definition.
```

**Divide el tiempo transcurrido en tiempo de trabajo activo y de espera.**

```text
Here is a sample of [number] fulfilled requests for [catalog item] with state
change times: [paste anonymized state history, no names]. Compute, for each
request and for the sample, the hands-on time, approval wait, and waiting-for-user
time, and show the median and the range. Point out which state holds the most
time and what questions I should ask the team about it. Do not infer causes
without evidence, and do not compare individual people. List your assumptions.
```

**Ordena los candidatos a automatización.**

```text
Here is a table of catalog items with monthly volume, median hands-on time,
variation in steps, and the systems each touches: [paste table]. Suggest a way
to rank automation candidates using volume, stability, and hands-on time, and
explain the ranking for the top [number] items. Flag items where automation could
create security or quality risk, and list what I should verify with [control
owner role] first. Do not invent savings figures or benchmark values. List your
assumptions.
```

**Revisa un panel de cumplimiento en busca de riesgos de manipulación.**

```text
This is our request fulfillment dashboard: [describe metrics, definitions, and
targets]. For each metric, list how it could be gamed or misread, the
observable sign in the data, and a paired guardrail metric or practice. Check
that nothing ranks individuals, and suggest wording changes that reduce
pressure on the team. Do not invent thresholds; ask me for any you need. List
your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la definición, el vector de manipulación y la barrera de protección de una métrica de solicitudes, y los temas vecinos que se emparejan con ella.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen intactos la plantilla, los relojes y los emparejamientos de barreras de protección.

## Ideas clave

- Mide el cumplimiento por elemento del catálogo, desde el envío del usuario hasta su confirmación, y reporta la mediana y un percentil alto.
- La mayor parte del tiempo transcurrido es espera, así que divide el tiempo de trabajo activo, de aprobación y de espera del usuario antes de decidir qué arreglar.
- Lee el volumen por elemento como un mensaje de los usuarios y automatiza primero los elementos frecuentes y estables.
- Empareja cada número de velocidad con la tasa de reaperturas y una señal de satisfacción, y reporta abiertamente el tiempo en pausa.
- Describe la cola y el proceso, nunca a la persona.

## Referencias y lecturas complementarias

1. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
2. AXELOS, *ITIL 4 Practice Guide: Service Request Management*, TSO (The Stationery Office), 2020.
3. ISO/IEC 20000-1, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Process automation](https://en.wikipedia.org/wiki/Process_automation).
12. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
