# Métricas de disponibilidad

**La disponibilidad es la proporción del tiempo, o de las solicitudes de los usuarios, en que un servicio hizo lo que sus usuarios necesitaban, y solo dice la verdad cuando defines qué significa «activo» desde el lado del usuario, cuentas por separado las interrupciones planificadas y las no planificadas y lees la aritmética de los nueves antes de prometer alguno.**

## Visión general y motivación

La disponibilidad es el número más citado de la gestión de servicios y uno de los menos definidos con precisión. Una afirmación como «el servicio estuvo disponible el 99,9 por ciento el mes pasado» suena exacta, y sin embargo esconde al menos cuatro decisiones: qué contó como el servicio, qué contó como «disponible», qué horas entraban en el ámbito y qué interrupciones se excluyeron. Dos equipos pueden reportar el mismo servicio en el mismo mes y publicar cifras que difieren en un orden de magnitud sin que ninguno cometa un error aritmético.

Este tema hace explícitas esas decisiones. Cubre el cálculo del tiempo de actividad y de inactividad, la disponibilidad ponderada por usuarios, la interrupción planificada frente a la no planificada y la aritmética de los nueves. Se apoya en los indicadores de nivel de servicio (SLI), los objetivos de nivel de servicio (SLO) y los presupuestos de errores (véase el tema 5.2, SLI, SLO y presupuestos de errores) y en la visión contractual de los niveles de servicio (véase el tema 5.1, Métricas de SLA, OLA y XLA). Esos temas dicen cómo elegir un objetivo. Este dice cómo calcular el número con el que se compara el objetivo.

### Términos usados en este tema

- La **disponibilidad** es la capacidad de un servicio de hacer lo que los usuarios necesitan cuando lo necesitan, normalmente expresada como un porcentaje sobre un periodo. El concepto general se describe en el artículo sobre la [alta disponibilidad](https://en.wikipedia.org/wiki/High_availability).
- El **[tiempo de inactividad](https://en.wikipedia.org/wiki/Downtime)** (downtime) es un periodo en que un servicio no está disponible. Este tema usa **interrupción** (outage) para un episodio continuo de inactividad y **degradación** para un periodo en que el servicio funciona pero por debajo de una calidad acordada.
- El **tiempo de actividad** (uptime) es el complemento del tiempo de inactividad dentro de la ventana de medición. La disponibilidad basada en el tiempo es el tiempo de actividad dividido por el tiempo total dentro del ámbito.
- La **disponibilidad basada en solicitudes** es la proporción de solicitudes válidas que tuvieron éxito, de modo que un fallo que afecta al 5 por ciento de las solicitudes durante una hora cuenta como el 5 por ciento del tráfico de una hora, no como una hora completa de inactividad.
- La **disponibilidad ponderada por usuarios** amplía la visión basada en solicitudes ponderando los fallos por el número o la importancia de los usuarios afectados, por ejemplo contando sesiones fallidas o recorridos fallidos en lugar de solicitudes en bruto.
- Un **acuerdo de nivel de servicio (SLA)** es un compromiso con un cliente, y un **objetivo de nivel de servicio (SLO)** es un objetivo interno para un indicador. Los artículos sobre el [acuerdo de nivel de servicio](https://en.wikipedia.org/wiki/Service-level_agreement) y el [objetivo de nivel de servicio](https://en.wikipedia.org/wiki/Service-level_objective) dan definiciones generales.
- La **inactividad planificada** es una interrupción anunciada con antelación y aprobada mediante la habilitación de cambios. La **inactividad no planificada** es todo lo demás. La frontera entre ambas es una de las líneas más disputadas en el reporte de disponibilidad.
- El **[tiempo medio entre fallos](https://en.wikipedia.org/wiki/Mean_time_between_failures)** (MTBF) es el tiempo medio de funcionamiento entre interrupciones, y el **[tiempo medio de reparación](https://en.wikipedia.org/wiki/Mean_time_to_repair)** es el tiempo medio de restablecimiento. Ambos son promedios, así que este libro los lee como distribuciones (véase el tema 1.6, Alfabetización estadística para métricas de servicio).
- La **[monitorización sintética](https://en.wikipedia.org/wiki/Synthetic_monitoring)** usa sondas programadas que se comportan como un usuario e informan de éxito o fallo. La **[monitorización de usuarios reales](https://en.wikipedia.org/wiki/Real_user_monitoring)** registra la experiencia de usuarios reales mientras usan el servicio.
- **[ITIL](https://en.wikipedia.org/wiki/ITIL)** es el marco más conocido para la gestión de servicios de TI. En ITIL 4, la práctica de gestión de la disponibilidad se ocupa de asegurar que los servicios entreguen los niveles de disponibilidad acordados, y trabaja estrechamente con la monitorización y gestión de eventos, la gestión de incidentes y la gestión de la continuidad del servicio.

### Por qué un solo número nunca basta

Diez interrupciones de cuatro minutos cada una y una interrupción de cuarenta minutos producen el mismo total de inactividad, y sin embargo los usuarios las sienten de forma distinta y exigen respuestas distintas. El primer patrón apunta a un servicio frágil. El segundo apunta a una detección o recuperación lentas. Por eso las métricas de aquí vienen como un conjunto pequeño, cada una con una barrera de protección, para que un equipo pueda hablar con honestidad de la disponibilidad sin competir por tener más nueves.

### En qué difieren las visiones de ITIL y ágil

En ITIL, la disponibilidad es un atributo gestionado de un servicio, acordado con el cliente y reportado por la gestión de niveles de servicio frente a un objetivo declarado, con horarios de servicio claros y exclusiones como el mantenimiento planificado.

En la práctica ágil y de ingeniería de fiabilidad de sitios (SRE), la disponibilidad es un SLI entre varios, comparado con un SLO. El libro *Site Reliability Engineering* de Google dice que la disponibilidad basada en el tiempo conviene a un sistema único, mientras que la tasa de éxito de solicitudes conviene a los servicios distribuidos que están parcialmente activos en todo momento. Dice además que el 100 por ciento casi nunca es el objetivo correcto, porque el costo de cada nueve adicional sube de forma pronunciada.

Usa la disciplina de ITIL de ámbito, horarios y exclusiones acordados para definir el denominador. Usa la disciplina de SRE de indicadores centrados en el usuario y presupuestos de errores para definir el numerador y decidir qué hacer con el resultado.

## Principios clave

- **Define «disponible» desde el lado del usuario.** Un servicio que responde a las comprobaciones de salud mientras los usuarios no pueden iniciar sesión está caído para las personas que importan.
- **Escribe el denominador.** Indica el límite del servicio, las horas del ámbito, la zona horaria y la ventana de medición antes de calcular nada.
- **Cuenta por separado las interrupciones planificadas y las no planificadas.** Reporta ambas, juntas, y no dejes nunca que una se esconda dentro de la otra.
- **Prefiere medidas basadas en solicitudes y ponderadas por usuarios para los servicios distribuidos.** Un fallo parcial no es ni actividad completa ni inactividad completa.
- **Convierte los nueves en minutos.** Un objetivo solo se entiende cuando la gente puede decir cuántos minutos de fallo al mes permite.
- **Elige el número de nueves que los usuarios necesitan.** Más allá de ese punto, cada nueve adicional cuesta más de lo que devuelve.
- **Describe servicios, nunca personas.** La disponibilidad pertenece a un servicio y a los equipos que lo operan, y nunca es la puntuación de un individuo.

## Definiciones de métricas

Cada fila indica sus relojes y sus límites. Se usa el tiempo de calendario salvo que una fila diga otra cosa. Donde una medida usa una distribución, reporta la mediana y el percentil 95, y nombra la ventana.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Disponibilidad basada en el tiempo | Proporción del tiempo del ámbito en que el servicio cumplió la definición escrita de «activo» | (minutos del ámbito en la ventana menos minutos de inactividad no planificada) / minutos del ámbito en la ventana. El reloj empieza en la primera sonda fallida que luego se confirma como impacto en el usuario, o en el inicio de impacto confirmado registrado en la revisión del incidente; se detiene cuando el servicio vuelve a cumplir la definición. La inactividad planificada dentro del horario de servicio acordado se muestra por separado, y el tiempo fuera del horario de servicio acordado se excluye del denominador | porcentaje | Resultados de monitorización sintética; registro del incidente con marcas de tiempo de inicio de impacto y de restablecimiento | Gestión de la disponibilidad; gestión de niveles de servicio | Un SLI basado en el tiempo para un sistema único (véase el tema 5.2, SLI, SLO y presupuestos de errores) | Mensual |
| Disponibilidad basada en solicitudes | Proporción de solicitudes válidas que tuvieron éxito | solicitudes válidas exitosas / total de solicitudes válidas en la ventana. Las solicitudes válidas excluyen las solicitudes mal formadas y los errores de cliente causados por quien llama; los fallos causados por el servicio, incluidos los tiempos de espera agotados, se cuentan como fallos. Se reporta por servicio y por recorrido de usuario | porcentaje | Registros y métricas del balanceador de carga, de la pasarela o de la aplicación | Gestión de la disponibilidad; monitorización y gestión de eventos | SLI de tasa de éxito con un SLO y un presupuesto de errores (véase el tema 5.2, SLI, SLO y presupuestos de errores) | Tendencia diaria, informe mensual |
| Disponibilidad ponderada por usuarios | Disponibilidad ponderada por los usuarios o recorridos afectados, de modo que una interrupción en hora punta cuenta más que una nocturna | 1 menos (sesiones de usuario fallidas o recorridos fallidos / total de sesiones de usuario o recorridos) en la ventana. Una sesión cuenta como fallida si falló un paso crítico definido; el éxito parcial se reporta como una proporción de degradación aparte, no se integra | porcentaje | Monitorización de usuarios reales; registros de sesión de la aplicación; eventos de analítica | Gestión de la disponibilidad; gestión de niveles de servicio | SLI de recorrido y las medidas de experiencia del tema 6.2 (véase el tema 6.2, Acuerdos de nivel de experiencia) | Mensual |
| Inactividad no planificada | Minutos en que el servicio no estuvo disponible sin aviso previo aprobado | Suma de las duraciones de las interrupciones en la ventana, desde el inicio de impacto confirmado hasta el restablecimiento confirmado, para las interrupciones no anunciadas y aprobadas mediante la habilitación de cambios antes de empezar. Las interrupciones solapadas en el mismo servicio se fusionan, no se suman. Se reporta como minutos totales, recuento de interrupciones y mediana y percentil 95 de la duración de las interrupciones | minutos | Registro del incidente con marcas de tiempo de inicio de impacto y de restablecimiento | Gestión de incidentes; gestión de la disponibilidad | Tiempo de restablecimiento leído como una distribución (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes) | Mensual |
| Proporción de inactividad planificada | Proporción de toda la inactividad que se anunció y aprobó con antelación | minutos de inactividad planificada / (minutos de inactividad planificada más no planificada) en la ventana. Una interrupción cuenta como planificada solo si se aprobó mediante un registro de cambio antes de empezar y sus horas de inicio y fin se comunicaron a los usuarios; un exceso más allá de la ventana aprobada se reclasifica como no planificado desde el momento en que terminó la ventana | porcentaje | Registro de cambio con ventana aprobada; registro del incidente; historial de la página de estado | Habilitación de cambios; gestión de la disponibilidad | Prácticas de versiones y mantenimiento que favorecen el despliegue sin inactividad (véase el tema 4.3, Métricas de habilitación de cambios) | Mensual |
| Frecuencia y espaciado de las interrupciones | Con qué frecuencia empiezan las interrupciones y cuánto tiempo funciona el servicio entre ellas | Recuento de interrupciones que empiezan en la ventana; y para cada par de interrupciones consecutivas, los minutos de actividad entre el restablecimiento de la primera y el inicio de la segunda, resumidos como la mediana y el percentil 5. No se reporta como una sola media cuando existen menos de diez intervalos | recuento; minutos | Registro de incidentes; historial de monitorización | Gestión de incidentes; gestión de problemas | Señal de estabilidad junto a la tasa de fallos de cambio (véase el tema 4.4, Fallos de cambio y retrabajo) | Mensual |
| Proporción de degradación | Tiempo en que el servicio funcionó pero por debajo de una calidad acordada | Minutos en que el indicador de latencia, de errores o de corrección incumplió su umbral, excluyendo los minutos ya contados como inactividad / minutos del ámbito. Umbral declarado por servicio, por ejemplo en el SLO | porcentaje | Monitorización y mediciones del SLI | Gestión de la disponibilidad; gestión de la capacidad y el rendimiento | SLI de latencia (véase el tema 5.4, Métricas de capacidad y rendimiento) | Mensual |
| Cobertura de la medición | Cuánto del comportamiento de cara al usuario del servicio observa realmente la medición de disponibilidad | Recorridos críticos de usuario con una sonda activa o una medición de usuarios reales / recorridos críticos de usuario enumerados en la definición del servicio | porcentaje | Definición del servicio; configuración de monitorización | Monitorización y gestión de eventos; gestión de la disponibilidad | Cobertura de observabilidad y calidad de las alertas (véase el tema 5.5, Métricas de monitorización y calidad de las alertas) | Trimestral |

Dos notas sobre los datos. Una sonda que comprueba cada cinco minutos no puede resolver una interrupción de dos minutos, así que anota el intervalo de la sonda junto a la cifra y usa el campo de inicio de impacto del registro del incidente (véase el tema 1.5, Fuentes de datos e instrumentación). Cada vez que cambie la definición de «activo», márcalo en el gráfico de tendencia.

## Recomendaciones

### Define la medición

**1. Escribe la definición del servicio antes que el porcentaje.** Enumera el límite del servicio, los recorridos críticos de usuario, las horas del ámbito, la zona horaria y la ventana (un mes natural es lo habitual). Di qué dependencias cuentan: si un proveedor de pagos falla y los usuarios no pueden pagar, ¿es tu interrupción? Anota la respuesta en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas). La mayoría de las disputas sobre disponibilidad son disputas sobre esta página, y zanjarlas de antemano es mucho más barato que zanjarlas después de una caída.

**2. Define «activo» como un resultado para el usuario, no como un estado del servidor.** Una comprobación de salud que devuelve éxito mientras el inicio de sesión está roto mide lo que no toca. Elige un número reducido de recorridos críticos, como «buscar y ver un artículo», «iniciar sesión» o «presentar una reclamación», y define el éxito de cada uno en términos que los usuarios reconozcan. Sondea el recorrido de extremo a extremo y trata una respuesta lenta, más allá de un umbral acordado, como degradada, no como activa.

**3. Usa medidas basadas en solicitudes para los servicios distribuidos y medidas basadas en el tiempo donde el servicio está de verdad encendido o apagado.** Un servicio global rara vez está del todo caído, así que contar minutos de fallo total ignora la mayoría de los fallos reales. Reporta ambas cuando puedas y di cuál es la principal y por qué.

**4. Añade ponderación por usuarios donde la carga es desigual.** Una interrupción de diez minutos a las 4 de la madrugada y una al comienzo de una jornada comercial tienen la misma duración y un costo muy distinto. Pondera por sesiones o transacciones en el minuto del fallo, o reporta los minutos de interrupción en hora punta como una cifra aparte.

**5. Mide desde fuera del dominio de fallo.** Una sonda dentro de la misma red o región que el servicio falla con él, o sigue informando de éxito mientras el camino que siguen los usuarios está roto. Ejecuta sondas sintéticas desde al menos dos ubicaciones independientes y contrástalas con datos de usuarios reales.

### Trata con honestidad las interrupciones planificadas y las no planificadas

**6. Reporta lado a lado la inactividad planificada y la no planificada.** Muchos acuerdos excluyen el mantenimiento planificado, lo que es razonable. Los usuarios aun así lo experimentan como inactividad, así que muestra los minutos excluidos y la proporción planificada junto a la cifra principal (véase el tema 4.3, Métricas de habilitación de cambios).

**7. Haz difícil ganarse la etiqueta de planificado.** Define planificado como aprobado mediante un registro de cambio antes de que empezara la interrupción, con las horas de inicio y fin comunicadas a los usuarios con antelación. Una interrupción anunciada después de empezar es no planificada. Un exceso más allá de la ventana aprobada es no planificado desde el momento en que terminó la ventana. Estas tres reglas impiden que la etiqueta se convierta en una forma de reetiquetar fallos.

**8. Trabaja para reducir la inactividad planificada.** Los despliegues continuos por tandas, los indicadores de función, las migraciones de esquema sin bloqueos y las publicaciones azul-verde permiten a los equipos cambiar un servicio sin tumbarlo. Haz seguimiento de los minutos de inactividad planificada como tendencia y pregunta qué haría falta para acercarlos a cero.

### Lee bien los números

**9. Convierte los nueves en minutos y muéstralos.** La tabla siguiente da la aritmética para un mes de 30 días (43 200 minutos) y un año de 365 días (525 600 minutos). Pon en el panel los minutos permitidos junto al objetivo y muestra los minutos usados hasta ahora en la ventana. La gente toma mejores decisiones sobre «43 minutos al mes» que sobre «tres nueves».

| Objetivo de disponibilidad | Inactividad permitida en un mes de 30 días | Inactividad permitida en un año de 365 días |
| --- | --- | --- |
| 99 por ciento | 432 minutos (7,2 horas) | 5256 minutos (87,6 horas) |
| 99,5 por ciento | 216 minutos (3,6 horas) | 2628 minutos (43,8 horas) |
| 99,9 por ciento | 43,2 minutos | 525,6 minutos (8,76 horas) |
| 99,95 por ciento | 21,6 minutos | 262,8 minutos (4,38 horas) |
| 99,99 por ciento | 4,32 minutos | 52,56 minutos |
| 99,999 por ciento | unos 26 segundos | unos 5,26 minutos |

Los valores suponen que el reloj corre durante toda la ventana. Si mides solo las horas de servicio acordadas, los minutos permitidos se reducen en proporción, y debes decirlo.

**10. Respeta el costo de cada nueve adicional y los límites de tus dependencias.** El libro de SRE señala que los costos de fiabilidad suben de forma pronunciada con cada nueve adicional, y que el objetivo debe reflejar lo que necesitan los usuarios y lo que el negocio está dispuesto a pagar. Un servicio rara vez puede estar más disponible que las dependencias que necesita en serie. Si tres componentes esenciales logran cada uno el 99,9 por ciento y una solicitud necesita los tres, la mejor disponibilidad esperada de la combinación es de aproximadamente el 99,7 por ciento, porque las probabilidades de fallo se suman cuando los componentes son independientes. Haz la multiplicación antes de prometer una cifra.

**11. Mira el espaciado y la forma, y no solo el total.** Las interrupciones breves y frecuentes necesitan una respuesta distinta de una única interrupción larga y rara. Vincula las interrupciones largas con la detección y el restablecimiento (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes) y con la vista de incidentes graves (véase el tema 3.4, Métricas de incidentes graves).

**12. Cierra el ciclo con el presupuesto de errores y el registro de problema.** Un objetivo de disponibilidad es útil cuando cambia lo que hace el equipo. Cuando el presupuesto mensual de inactividad permitida está casi gastado, frena el cambio arriesgado y traslada esfuerzo al trabajo de fiabilidad, como describe la política del presupuesto de errores (véase el tema 5.2, SLI, SLO y presupuestos de errores). Cuando la misma causa se repite, abre un registro de problema y haz seguimiento hasta una corrección (véase el tema 4.1, Métricas de gestión de problemas).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Disponibilidad basada en el tiempo | Sondear una página trivial que se mantiene activa mientras el recorrido real falla; alargar el intervalo de la sonda para que las interrupciones breves caigan entre comprobaciones; reducir las horas del ámbito; contar interrupciones como degradación | Disponibilidad ponderada por usuarios y monitorización de usuarios reales; intervalo de la sonda declarado junto a la cifra; muestra de incidentes frente al registro de monitorización |
| Disponibilidad basada en solicitudes | Contar solicitudes fáciles (comprobaciones de salud, activos en caché) en el denominador para diluir los fallos; clasificar errores del servidor como errores de cliente; excluir reintentos que los usuarios experimentaron como fallos | Tasa de éxito por recorrido crítico, no por solicitud; revisión de la lista de exclusiones; comparación con los incidentes reportados por usuarios |
| Disponibilidad ponderada por usuarios | Elegir la ponderación para que los fallos en hora punta importen poco; definir una sesión «exitosa» de forma tan laxa que los pasos rotos aun así pasen | Publicar la regla de ponderación y la lista de recorridos; comparar con el volumen de quejas y los contactos de soporte durante las interrupciones |
| Inactividad no planificada | Reclasificar interrupciones como planificadas a posteriori; retrasar el inicio de impacto confirmado; dividir una interrupción en dos para que parezca más corta | Proporción de inactividad planificada, con la regla de que una interrupción anunciada después de empezar es no planificada; comparar el inicio de impacto con los datos de monitorización |
| Proporción de inactividad planificada | Reservar cambios como ventanas aprobadas para que los excesos y fallos cuenten como planificados; inflar la proporción planificada programando mantenimiento innecesario | Minutos de exceso reclasificados como no planificados; tasa de fallos de cambio y proporción de cambios de emergencia (véase el tema 4.4, Fallos de cambio y retrabajo) |
| Frecuencia y espaciado de las interrupciones | Fusionar incidentes, o abrir un incidente nuevo solo tras un largo intervalo, para mantener bajo el recuento; suprimir alertas para que las interrupciones breves no se registren | Muestreo de alertas e incidentes frente a los eventos de monitorización en bruto; cobertura de monitorización y calidad de las alertas (véase el tema 5.5, Métricas de monitorización y calidad de las alertas) |
| Proporción de degradación | Fijar el umbral tan laxo que el servicio lento nunca lo incumpla; declarar el tiempo degradado como activo | Percentiles de latencia y lentitud reportada por usuarios revisados junto a la cifra (véase el tema 5.4, Métricas de capacidad y rendimiento) |
| Cobertura de la medición | Enumerar solo los recorridos fáciles de sondear, de modo que la cobertura se lea como 100 por ciento; contar un recorrido como cubierto por una sonda que nunca se ejecuta | Lista de recorridos acordada con el responsable del servicio y los usuarios; historial de ejecución de las sondas muestreado cada trimestre |

Una lectura sana muestra cifras que se mueven por razones que el equipo puede explicar, con la inactividad planificada y la no planificada ambas visibles y una cifra ponderada por usuarios cercana a la principal. Desconfía de un mes perfecto que viene con quejas. Un bajón honesto ocasional muestra que el sistema de registro funciona.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Disponibilidad basada en el tiempo | Sencilla, muy conocida, fácil de comparar con los contratos | Trata el fallo parcial como todo o nada; ignora cuándo y a quién |
| Disponibilidad basada en solicitudes | Refleja el fallo parcial; escala a servicios distribuidos | Depende de una buena definición de solicitud válida; puede diluirla el tráfico fácil |
| Disponibilidad ponderada por usuarios | Cercana a lo que experimentaron los usuarios; muestra el costo del fallo en hora punta | Necesita datos de sesión o de recorrido; más esfuerzo de explicar |
| Excluir la inactividad planificada | Coincide con muchos acuerdos; premia el aviso previo | Puede esconder impacto real; invita a reetiquetar |
| Objetivos moderados con presupuestos de errores | Equilibra la fiabilidad y la velocidad de entrega | Necesita disciplina para actuar cuando se gasta el presupuesto |

La respuesta en prosa es elegir la medida más sencilla que encaje con el servicio, añadir ponderación por usuarios donde la carga sea desigual y ser explícito con cada exclusión. Una medida algo menos elegante que todos entienden hace más bien que una sofisticada en la que nadie confía.

## Preguntas para debatir con tu equipo

**1. ¿Qué significa «disponible» para nuestro servicio más importante y estaría de acuerdo un usuario?**
Pide a cada persona que describa, en una frase, lo que un usuario debe poder hacer para que el servicio cuente como activo. Compara las respuestas con la definición escrita y con la sonda que alimenta el panel. El facilitador debe escuchar las brechas, como el inicio de sesión, la búsqueda o el pago que funcionan en la sonda pero fallan en la práctica. Terminen acordando qué recorridos de usuario debe nombrar la definición.

**2. ¿Qué interrupciones del último trimestre habría excluido nuestro cálculo y fue justo?**
Enumera las interrupciones y marca cada una como planificada, no planificada o excluida. Pregunta quién tomó cada decisión y cuándo. El facilitador debe anotar los casos en que los usuarios habrían discrepado de la etiqueta y usarlos para endurecer las reglas.

**3. ¿Cuántos minutos de inactividad permite nuestro objetivo y cuántos hemos usado en esta ventana?**
Convierte el objetivo a minutos para el mes y para el año en una pizarra. Compáralo con los minutos usados hasta ahora. Pregunta qué haría el equipo de otra manera si solo quedara el 20 por ciento del presupuesto. Así el objetivo abstracto se vuelve concreto y el número se conecta con la política del presupuesto de errores.

**4. ¿Dónde podría nuestra medición pasar por alto un fallo que los usuarios sentirían?**
Recorre las ubicaciones de las sondas, el intervalo, los recorridos cubiertos y las dependencias. Pregunta qué fallo pasaría todas las sondas y aun así rompería el servicio para los usuarios. Acuerden una sonda nueva o una medición de usuarios reales que añadir.

**5. ¿Estamos planificando interrupciones que podríamos evitar?**
Mira la inactividad planificada de los últimos seis meses y pregunta qué forzó cada interrupción. Algunas son inevitables, como un requisito de un proveedor. Otras proceden de un enfoque de publicación o migración que podría cambiar. Pregunta qué haría falta para eliminar la mayor fuente y quién posee ese trabajo.

**6. Si la cifra principal parece perfecta, ¿qué nos haría dudar de ella?**
Nombra las señales que contradirían el panel: volumen de quejas, contactos de soporte o el recuerdo del equipo de guardia. Comprueba si existe alguna ahora mismo. Acuerden una comparación que poner en el panel.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega afectan a la disponibilidad cada vez que cambian un servicio. Pueden diseñar para el despliegue sin inactividad, usar indicadores de función para limitar el radio de impacto y tratar el presupuesto de errores como un insumo de las decisiones de publicación, leyendo la disponibilidad junto a las medidas de despliegue (véase el tema 2.8, Métricas DORA).

### Equipos de servicio y de operaciones

Los equipos de operaciones poseen las sondas, los registros de incidentes y las rotaciones que producen los datos. Deben mantener vigentes la definición y la lista de exclusiones, registrar con honestidad el inicio de impacto y revisar la monitorización frente a los incidentes reales. La disponibilidad pertenece al servicio y a su rotación, nunca a un ingeniero de guardia (véase el tema 5.7, Métricas de trabajo repetitivo y guardias).

### Liderazgo y gobernanza

Los líderes fijan los incentivos que deciden si los datos de disponibilidad son sinceros. Una revisión que pregunta «¿por qué perdiste un nueve?» enseña a los equipos a esconder interrupciones en las exclusiones. Pregunta qué aprendió el equipo y qué inversión reduciría las interrupciones, y no pidas más nueves de los que los usuarios notarán (véase el tema 8.4, Métricas de proveedores y contratos, para los compromisos de los proveedores).

### Clientes y usuarios

Los usuarios juzgan la disponibilidad por si pudieron hacer lo que fueron a hacer. Toleran mucho mejor una ventana de mantenimiento señalizada que una sorpresa. Dales una página de estado con horas honestas de inicio y fin, y lee sus comentarios junto a los números (véase el tema 6.2, Acuerdos de nivel de experiencia).

## En la práctica: un ejemplo de gestión de servicios

Un minorista en línea de tamaño medio opera una tienda, un servicio de pago y un servicio de seguimiento de pedidos. Los números de este ejemplo son ilustrativos.

El equipo de pagos reporta una disponibilidad basada en el tiempo del 99,95 por ciento para el mes, lo que permite 21,6 minutos de inactividad no planificada, y el panel muestra el 99,96 por ciento. La jefa de atención al cliente está inquieta, porque los contactos de soporte sobre pagos fallidos subieron durante el mismo mes. Pide al equipo que revise la medición.

El equipo encuentra tres problemas. La sonda comprueba cada cinco minutos una página de «el pago es accesible», no el recorrido completo del pago. Los datos basados en solicitudes muestran que durante dos tardes un tiempo de espera agotado de un proveedor de pagos hizo fallar alrededor del 4 por ciento de los intentos de pago durante unos 50 minutos cada vez, y la sonda no lo notó nunca porque la página en sí cargaba. Y una migración de base de datos que se pasó de su ventana aprobada en 18 minutos se había registrado enteramente como mantenimiento planificado.

El equipo hace cuatro cambios. Añade una sonda sintética para el recorrido completo del pago desde dos ubicaciones con un intervalo de un minuto. Añade cifras basadas en solicitudes y ponderadas por usuarios, usando las sesiones que llegaron al paso de pago. Reclasifica los minutos de exceso como no planificados. Y añade al informe la proporción de inactividad planificada y la cobertura de la medición.

Con la base corregida, el mes muestra una disponibilidad basada en el tiempo del 99,93 por ciento, una disponibilidad basada en solicitudes del 99,90 por ciento y una disponibilidad ponderada por usuarios del 99,84 por ciento, porque los fallos cayeron en la hora punta de la tarde. Las tres incumplen el objetivo del 99,95 por ciento, lo cual es incómodo. El equipo y la jefa de soporte acuerdan que el número anterior era demasiado generoso. Escriben la definición corregida en el registro de métricas y ponen en vigor la política del presupuesto de errores: durante el mes siguiente, los cambios arriesgados en el pago esperan hasta que el presupuesto se recupere, y el equipo abre un registro de problema para los tiempos de espera del proveedor de pagos (véase el tema 4.1, Métricas de gestión de problemas).

El riesgo de manipulación que detectan es el reetiquetado. Un gerente sugirió llamar al exceso «mantenimiento ampliado» para proteger el objetivo. La proporción de inactividad planificada, con su regla de que los excesos pasan a ser no planificados, hizo visible la reclasificación, y el equipo mantuvo la cifra honesta.

## Agilidad, IA, automatización y analítica

### Agilidad

Define la disponibilidad desde el lado del usuario y revisa la definición con las partes interesadas cuando cambie el servicio. La precaución es que un número alto de nueves en un componente dice poco sobre el recorrido que sigue un usuario.

### IA

Los componentes de IA pueden fallar de forma suave, siendo lentos, equivocados o no estando disponibles solo para algunas entradas, lo que el simple tiempo de actividad pasa por alto. Añade una vista ajustada por calidad, como la proporción de solicitudes con una respuesta correcta y a tiempo, y empárejala con los problemas reportados por usuarios. La precaución es que contar como activa una respuesta degradada de IA halaga el número.

### Automatización

Recoge los resultados de las solicitudes a partir del tráfico real y de sondas sintéticas de forma automática, y mide las sondas por su cobertura. La precaución es que una sonda que comprueba una página de salud puede decir «activo» mientras los usuarios no pueden iniciar sesión.

### Analítica

Reporta la disponibilidad basada en el tiempo y la basada en solicitudes con la proporción de degradación, y declara la ventana de medición. La decisión a la que informa es dónde ayudará a los usuarios el trabajo de fiabilidad. La precaución es que las interrupciones raras vuelven inestables los porcentajes anuales, así que muestra eventos, no solo porcentajes.

## Perspectiva sectorial

**Startup.** Un equipo pequeño suele tener un servicio y poca monitorización. Empieza con una sonda en el recorrido más importante y una definición de «activo» de un párrafo. Elige un objetivo modesto, conviértelo a minutos y evita prometer nueves que el equipo aún no puede medir.

**Pequeña empresa.** El servicio suele ser herramientas alojadas más unos pocos sistemas a medida, y la disponibilidad depende de los proveedores. Registra las interrupciones de los proveedores según afecten a tus usuarios, compáralas con lo que reporta el proveedor y mantén el conjunto en dos o tres cifras.

**Gran empresa.** Muchos servicios, muchos equipos y muchos proveedores multiplican las definiciones en uso. Publica una definición estándar de disponibilidad con una lista corta de variaciones permitidas, mantén vigente el registro de métricas y asegúrate de que las reglas de lo planificado y lo no planificado sean las mismas entre equipos antes de compararlos. Prefiere el reporte a nivel de servicio a las tablas de posiciones de equipos, ya que los servicios difieren en carga y criticidad.

**Gobierno y sector público.** Los servicios públicos suelen tener horarios de servicio legales, compromisos publicados y contratos con créditos formales. Reporta frente a ellos tal como están escritos, muestra a su lado la vista ponderada por usuarios y sé abierto sobre las exclusiones (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los principales costos son el tiempo para redactar la definición del servicio y el registro, la monitorización que sondea los recorridos críticos desde fuera del dominio de fallo y el esfuerzo de unir los datos de incidentes, cambios y monitorización para poder separar la inactividad planificada de la no planificada. La monitorización de usuarios reales añade costos de herramientas y de almacenamiento. La mayoría de las organizaciones ya posee parte de los datos, así que la primera inversión suele ser en definiciones.

El retorno procede de mejores decisiones y menos disputas. Los equipos que miden desde el lado del usuario encuentran fallos que las comprobaciones de salud pasan por alto, los acuerdos son más fáciles de gestionar con una sola definición y el costo de un nueve adicional puede ponerse frente a su valor para los usuarios. Describe el beneficio como un patrón, como menos sorpresas en las revisiones de acuerdos, y mide tus propias líneas base, como la brecha entre la cifra principal y la ponderada por usuarios. No tomes prestadas cifras de otras organizaciones.

## Antipatrones y trampas

- **Citar los nueves sin los minutos.** Un objetivo que nadie puede traducir a inactividad permitida no puede guiar decisiones. Muestra los minutos permitidos y los usados junto a cada objetivo.
- **Medir el servidor en lugar del recorrido.** Una comprobación de salud en verde puede convivir con un inicio de sesión roto. Sondea los recorridos críticos de extremo a extremo y compara con datos de usuarios reales.
- **Dejar que la etiqueta de planificado absorba fallos.** Una categoría de planificado fácil de reclamar vacía la cifra de no planificado. Exige aprobación antes de la interrupción, comunícala y reclasifica los excesos.
- **Promediar entre servicios y horas.** Una cifra mezclada esconde el servicio crítico y la hora punta. Reporta por servicio y añade una vista ponderada por usuarios.
- **Prometer más nueves de los que permiten las dependencias.** Los componentes en serie no pueden superar su disponibilidad combinada. Multiplica antes de prometer y pide a los proveedores sus cifras medidas.
- **Tratar el 100 por ciento como meta.** El costo sube de forma pronunciada y el cambio se ralentiza. Elige el objetivo según la necesidad del usuario y usa el presupuesto de errores.
- **Clasificar equipos o personas por sus nueves.** Los servicios difieren en carga y criticidad, y una tabla de posiciones enseña a los equipos a esconder interrupciones. Muestra a cada servicio su propia tendencia y compárala con su propio objetivo.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definición y relojes | «Activo» significa lo que muestre la herramienta de monitorización; las horas de las interrupciones se estiman después | Escrita para algunos servicios; las horas de la sonda y del incidente discrepan | Una definición escrita por servicio con recorridos, horas, exclusiones y reglas de reloj | Definiciones revisadas con una cadencia; cambios registrados y marcados en los gráficos | Definiciones alineadas con proveedores y clientes y revisadas cuando dejan de informar decisiones |
| Calidad de la medición | Informes manuales o una sola comprobación de salud | Sondas para algunos servicios; datos de solicitudes en algunos registros | Sondas desde fuera hacia dentro en los recorridos críticos más cifras basadas en solicitudes de una fuente estándar | Cifras ponderadas por usuarios a partir de datos de usuarios reales; cobertura seguida y muestreada | Mediciones compartidas entre equipos y proveedores y conciliadas automáticamente |
| Gestión de lo planificado y lo no planificado | Sin distinción; el mantenimiento se cuenta ad hoc | Etiqueta de planificado usada por algunos equipos, reglas distintas | Una regla: aprobado antes de la interrupción y comunicado, excesos reclasificados | Proporción planificada con tendencia y objetivo de reducirla | El cambio sin inactividad es lo habitual, y la inactividad planificada es rara y negociada |
| Uso en las decisiones | Reportada tras una queja | Revisada cada mes por operaciones | Objetivos mostrados en minutos | La política del presupuesto de errores cambia el trabajo, con financiación | Disponibilidad, costo y experiencia se sopesan conjuntamente |

## Lista de verificación

- [ ] Cada servicio tiene una definición escrita de «disponible» que nombra sus recorridos críticos de usuario.
- [ ] La ventana de medición, las horas del ámbito y la zona horaria se indican en cada cifra.
- [ ] La lista de exclusiones está escrita, revisada y mostrada junto a la cifra principal.
- [ ] La inactividad planificada exige un cambio aprobado y un aviso previo; los excesos cuentan como no planificados.
- [ ] Las sondas se ejecutan desde fuera del dominio de fallo, con un intervalo declarado, en los recorridos críticos.
- [ ] Una cifra basada en solicitudes o ponderada por usuarios acompaña a la cifra basada en el tiempo.
- [ ] Cada objetivo se muestra como minutos permitidos y minutos usados en la ventana actual.
- [ ] Se reportan el recuento de interrupciones y los percentiles de duración, y no solo el total.
- [ ] La disponibilidad de las dependencias se multiplica antes de prometer un objetivo.
- [ ] Los cambios de definición se registran y se marcan en el gráfico de tendencia.
- [ ] La disponibilidad se reporta por servicio y nunca por persona.

## Prompts de IA

**Redacta una definición de disponibilidad de un servicio.**

```text
I am writing an availability definition for [service name], a [type of service]
used by [user groups]. Its critical user journeys are [list journeys]. Agreed
service hours are [hours and time zone]. Known dependencies are [list]. Our
monitoring consists of [probes, logs, real user data].

Draft a one-page definition covering: what counts as up for each journey, the
measurement window, the in-scope hours, the exclusions, the rule for planned
versus unplanned downtime, the clock start and stop for an outage, and the
metrics to report. Do not invent targets or benchmark values. List your
assumptions and the questions I should answer to finish the definition.
```

**Convierte un objetivo en inactividad permitida y ponlo a prueba.**

```text
Our target for [service name] is [availability percentage] over [window, for
example a 30-day month]. In-scope time is [hours]. Our essential dependencies
and their stated or measured availability are [list, or "unknown"].

Calculate the downtime this target allows in minutes for the window and for a
year, using the in-scope hours. Then estimate the best combined availability if
the dependencies are needed in series and fail independently, and explain the
formula you used. Flag where my inputs are too uncertain to conclude anything.
Do not supply availability figures for any dependency that I did not give you.
List your assumptions.
```

**Revisa un mes de interrupciones en busca de problemas de clasificación.**

```text
Here are the outage records for [service name] for [month]: [paste records with
impact start, restore time, planned or unplanned label, approval time, and
notes, with personal data removed].

For each outage, check whether the planned or unplanned label follows this
rule: [paste your rule]. Identify records where the impact start looks late,
where one outage appears to be split or merged, and where an overrun should have
been reclassified. Summarize patterns by service and cause, never by person.
Tell me what you could not judge from the data. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar los temas relacionados y la barrera de protección emparejada de una medida de disponibilidad que estás a punto de reportar.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una revisión de este tema mantiene cada métrica emparejada con un vector de manipulación y una barrera de protección.

## Ideas clave

- La disponibilidad solo es significativa cuando «activo», el límite del servicio, las horas y las exclusiones están escritos desde el lado del usuario.
- Las medidas basadas en solicitudes y ponderadas por usuarios describen mejor los servicios distribuidos y la carga desigual que los minutos de fallo total.
- Reporta juntas la inactividad planificada y la no planificada, y haz difícil ganarse la etiqueta de planificado.
- Convierte cada objetivo a minutos y multiplica las dependencias en serie antes de prometer un número de nueves.
- Cada nueve adicional cuesta más que el anterior, así que elige el objetivo según lo que necesitan los usuarios y usa el presupuesto de errores para actuar sobre él.
- Describe servicios y rotaciones, nunca personas, y contrasta cada cifra principal con la experiencia de los usuarios.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Embracing Risk", https://sre.google/sre-book/embracing-risk/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Service Level Objectives", https://sre.google/sre-book/service-level-objectives/.
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, chapter "Implementing SLOs", https://sre.google/workbook/implementing-slos/.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [High availability](https://en.wikipedia.org/wiki/High_availability).
7. Wikipedia, [Downtime](https://en.wikipedia.org/wiki/Downtime).
8. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
9. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
10. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
11. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
12. Wikipedia, [Synthetic monitoring](https://en.wikipedia.org/wiki/Synthetic_monitoring).
13. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
14. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
