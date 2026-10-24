# Tiempo de respuesta y resolución de incidentes

**Las medidas de tiempo de los incidentes describen cuánto esperan los usuarios en cada etapa, así que repórtalas como distribuciones con los relojes escritos, nunca como una única media, y empareja cada número de velocidad con una medida de si la corrección se sostuvo.**

## Visión general y motivación

Un incidente, en la gestión de servicios de TI (ITSM), es una interrupción no planificada de un servicio o una reducción de su calidad. La [gestión de incidentes](https://en.wikipedia.org/wiki/Incident_management) es la práctica que restablece el servicio normal tan rápido como es seguro. En ITIL 4, la práctica se llama gestión de incidentes y se sitúa entre las prácticas de gestión de servicios del marco [ITIL](https://en.wikipedia.org/wiki/ITIL). Sus contrapartidas ágiles son el hábito del equipo de tratar el trabajo no planificado como un flujo de trabajo de primera clase y las prácticas de guardia y de revisión sin culpas que proceden de la [ingeniería de fiabilidad del sitio](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), la disciplina de operar servicios con métodos de ingeniería de software.

El tiempo es la forma más natural de describir un incidente, y la que se usa mal con más frecuencia. Un incidente pasa por varias etapas. Algo se rompe, un monitor o un usuario lo nota, una persona acusa recibo de la alerta, alguien empieza a trabajar, el servicio se restablece para los usuarios y el ticket se cierra una vez que la causa está tratada o aplazada. Cada intervalo entre dos de estos eventos es una medida distinta con un responsable distinto, una causa de retraso distinta y un remedio distinto. Llamar a todo «tiempo de resolución» oculta dónde vive el retraso.

Este tema cubre las medidas de tiempo transcurrido que siguen a un incidente de principio a fin: el **tiempo de detección**, el **tiempo de acuse de recibo**, el **tiempo hasta la primera respuesta**, el **tiempo de restablecimiento** y el **tiempo de resolución**. También cubre la antigüedad de los incidentes abiertos, el número de veces que un incidente cambia de manos y los problemas estadísticos del resumen más conocido, el tiempo medio de restablecimiento o de resolución (MTTR). Los recuentos, las categorías y la prioridad se tratan en otro lugar (véase el tema 3.2, Volumen y prioridad de incidentes). Los incidentes grandes e inusuales tienen sus propias medidas (véase el tema 3.4, Métricas de incidentes graves).

### Términos usados en este tema

- **Tiempo de detección (TTD).** Tiempo transcurrido desde que el fallo empezó a afectar a los usuarios hasta que la organización lo supo, por monitorización o por reporte de un usuario.
- **Tiempo de acuse de recibo (TTA).** Tiempo transcurrido desde que se emite la alerta o el ticket hasta que una persona o equipo con nombre acepta la responsabilidad.
- **Tiempo hasta la primera respuesta.** Tiempo transcurrido desde que se registra el incidente hasta la primera acción o mensaje significativo dirigido al usuario afectado. Una respuesta automática no cuenta.
- **Tiempo de restablecimiento.** Tiempo transcurrido desde el inicio del impacto en los usuarios hasta que estos pueden volver a usar el servicio, aunque la causa subyacente solo se haya sorteado con una solución provisional.
- **Tiempo de resolución.** Tiempo transcurrido desde que se registra el incidente hasta que se cierra porque el servicio está restablecido y el usuario lo ha confirmado o ha tenido una oportunidad razonable de confirmarlo.
- **Tiempo medio de restablecimiento o de resolución (MTTR).** La media aritmética de una de esas duraciones sobre un conjunto de incidentes. La letra R se lee como reparación, recuperación, restablecimiento, resolución o respuesta según quién hable, que es el primer problema de la abreviatura. El [artículo de Wikipedia sobre el tiempo medio de reparación](https://en.wikipedia.org/wiki/Mean_time_to_repair) enumera las variantes.
- **Acuerdo de nivel de servicio (SLA).** Un [acuerdo de nivel de servicio](https://en.wikipedia.org/wiki/Service-level_agreement) es un compromiso entre un proveedor y un cliente sobre el nivel de servicio, que a menudo incluye tiempos objetivo de respuesta y resolución por prioridad.

### Por qué la media es un mal resumen

Las duraciones de los incidentes no son simétricas. La mayoría de los incidentes son cortos, unos pocos son muy largos y los largos dominan cualquier promedio. Las duraciones de este tipo suelen describirse bien con una forma asimétrica a la derecha como la [distribución log-normal](https://en.wikipedia.org/wiki/Log-normal_distribution). En datos asimétricos la media puede situarse muy por encima del aspecto de un incidente típico, y una sola caída larga puede moverla más que un mes de mejoras.

El equipo de SRE de Google ha publicado un análisis de este problema. Sostiene que, en los conjuntos de datos de incidentes que estudió, la dispersión de las duraciones de los incidentes es lo bastante amplia como para que el MTTR pueda ocultar mejoras reales o mostrar cambios que son ruido, y recomienda mirar distribuciones en su lugar (Davidovič, 2021, citado en las referencias). El razonamiento se apoya en estadística bien conocida, de modo que puedes comprobarlo con tus propios datos sin fiarte de la conclusión de nadie: grafica las duraciones de tus incidentes, calcula la media y la [mediana](https://en.wikipedia.org/wiki/Median) y mira cuánto se separan (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

La alternativa son los [percentiles](https://en.wikipedia.org/wiki/Percentile). La mediana dice cuánto esperó un usuario típico. El percentil 85 o 95 dice cuánto esperaron los menos afortunados. Los clientes recuerdan la espera larga, no el promedio, así que un compromiso por percentil como «nueve de cada diez incidentes de esta prioridad restablecidos en un tiempo declarado» encaja mucho mejor con su experiencia que una media.

### En qué difieren las visiones de ITIL y la ágil

La visión de ITIL tiende a partir de una prioridad y un objetivo. El impacto y la urgencia fijan una prioridad, la prioridad fija los tiempos objetivo de respuesta y resolución y un acuerdo de nivel de servicio puede asociar consecuencias a incumplirlos. Esto es ordenado y fácil de auditar, y propenso a la manipulación que invitan los objetivos (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

La visión ágil y de SRE parte del impacto en el usuario y del flujo. Pregunta con qué rapidez limita el equipo el daño, cuánto del tiempo transcurrido de un incidente fue trabajo activo y cuánto fue espera, y qué aprendió el equipo. Prefiere medidas de impacto (usuarios afectados, minutos de servicio degradado) a medidas del estado del ticket, y trata el reloj del ticket como un sucedáneo cómodo pero imperfecto. Las dos visiones son compatibles. Usa la estructura de prioridades de ITIL para decidir qué medir y para quién, y usa el pensamiento de flujo y de impacto para decidir si el número significa algo.

## Principios clave

- **Nombra la etapa, no «resolución».** Detectar, acusar recibo, responder, restablecer y resolver son preguntas distintas con responsables distintos. Reporta cada una con su propio nombre.
- **Escribe ambos relojes.** Toda medida de tiempo declara qué evento la arranca, cuál la detiene y qué estados la pausan. La mayor parte de la manipulación vive en esos límites.
- **Reporta distribuciones.** Muestra la mediana, un percentil alto y la antigüedad del incidente abierto más antiguo. Evita la media solitaria, que los datos asimétricos vuelven poco fiable.
- **Mide el restablecimiento por separado del cierre.** A los usuarios les importa cuándo volvió el servicio. El ticket puede cerrarse más tarde, cuando se haya tratado la causa.
- **Empareja velocidad con durabilidad.** Un restablecimiento rápido que el mismo incidente deshace al día siguiente no es una mejora. Muestra las tasas de recurrencia y de reapertura junto a cada medida de tiempo.
- **Describe equipos, servicios y sistemas.** No clasifiques nunca a agentes o ingenieros individuales por tiempo de respuesta o de resolución.
- **Segmenta antes de comparar.** Compara lo comparable, por prioridad y por servicio, porque un número combinado mezcla restablecimientos de contraseña con fallos de bases de datos.

## Definiciones de métricas

Cada fila declara sus relojes. El tiempo natural y el horario laboral son cosas distintas: indica cuál usas. Donde una medida usa percentiles, la tabla da el 50 y el 95, y los equipos pueden añadir el 85.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tiempo de detección | Cuánto tiempo afectó un fallo a los usuarios antes de que la organización lo supiera | El reloj empieza en el primer momento de impacto en los usuarios (tomado de los datos de monitorización o del inicio de impacto confirmado y anotado en la revisión); se detiene en la primera alerta o reporte de usuario. Se reporta como mediana y percentil 95 por servicio. Los incidentes sin inicio conocido se cuentan y se reportan por separado, no se descartan | minutos | Plataforma de monitorización y alertas; registro del incidente con un campo de inicio de impacto | Gestión de incidentes; monitorización y gestión de eventos | Trabajo de observabilidad y calidad de las alertas (véase el tema 5.5, Métricas de monitorización y calidad de las alertas) | Mensual |
| Tiempo de acuse de recibo | Cuánto espera una alerta o ticket emitido antes de que una persona se haga cargo | El reloj empieza cuando salta la alerta o se registra el ticket; se detiene cuando una persona o equipo con nombre lo acepta. La asignación automática no detiene el reloj. Se reporta como mediana y percentil 95 por prioridad | minutos | Herramienta de avisos; historial de asignaciones de la herramienta ITSM | Gestión de incidentes; centro de servicios | Respuesta de guardia en una rotación de SRE | Mensual |
| Tiempo hasta la primera respuesta | Cuánto espera el usuario una primera respuesta humana y útil | El reloj empieza cuando se registra el incidente; se detiene en el primer mensaje o acción humana que atiende el reporte. Se excluyen los acuses automáticos y los recibos con plantilla. Se declara el reloj de horario laboral | minutos u horas laborables | Registro de comunicaciones de la herramienta ITSM | Centro de servicios; gestión de incidentes | Retroalimentación oportuna al usuario, como en un acuerdo de trabajo | Semanal |
| Tiempo de restablecimiento | Cuánto tiempo estuvieron los usuarios sin un servicio que funcione | El reloj empieza al inicio del impacto en los usuarios; se detiene cuando los usuarios pueden volver a usar el servicio, incluso mediante solución provisional o reversión. Que la causa se corrija más tarde no lo alarga. Se reporta como mediana y percentil 95 por prioridad y servicio | minutos u horas | Registro del incidente con marcas de inicio de impacto y de restablecimiento; monitorización | Gestión de incidentes | Tiempo de restablecimiento en términos de DORA, leído como distribución (véase el tema 2.8, Métricas DORA) | Mensual |
| Tiempo de resolución | Cuánto tiempo estuvo abierto el registro del incidente hasta cerrarse | El reloj empieza cuando se registra el incidente; se detiene cuando se cierra tras el restablecimiento y la confirmación del usuario o una espera razonable. El tiempo en «a la espera del cliente» se muestra como una proporción separada y reportada y no se resta del titular. Se reporta como mediana y percentil 95 por prioridad | horas u horas laborables | Historial de estados de la herramienta ITSM | Gestión de incidentes | Tiempo de ciclo del trabajo no planificado (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo) | Mensual |
| Antigüedad del incidente abierto más antiguo | Cuánto tiempo lleva abierto el incidente abierto más antiguo | Ahora menos la hora de registro, para cada incidente abierto, enumerando los más antiguos por prioridad. No se restan los estados de pausa | días | Lista de incidentes abiertos de la herramienta ITSM | Gestión de incidentes | Antigüedad del elemento de trabajo en el tablero del equipo (véase el tema 2.1, Medidas de flujo) | Semanal |
| Proporción de tiempo activo | La proporción del tiempo transcurrido de un incidente dedicada a trabajo activo y no a espera | Suma del tiempo en estados activos / tiempo total desde el registro hasta el cierre, para los incidentes cerrados en el periodo. Los estados activos son aquellos en que una persona trabaja el incidente; los estados de espera se enumeran en la definición | porcentaje | Historial de estados de la herramienta ITSM | Gestión de incidentes | Eficiencia del flujo (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo) | Trimestral |
| Recuento de reasignaciones | Cuántas veces cambia un incidente de equipo propietario antes del restablecimiento | Recuento de cambios de grupo de asignación desde el registro hasta el restablecimiento, resumido como la mediana y la proporción de incidentes con tres o más. Se cuenta por servicio y prioridad, nunca por agente | recuento | Historial de asignaciones de la herramienta ITSM | Gestión de incidentes; centro de servicios | Recuento de traspasos (véase el tema 9.3, Métricas de colaboración y traspasos) | Mensual |

Dos notas sobre los datos. Primero, un tiempo de restablecimiento solo es tan bueno como su hora de inicio. Muchos registros de incidentes captan cuándo alguien tecleó el ticket, lo que puede retrasarse horas respecto al inicio real del impacto. Si tu herramienta no tiene un campo de inicio de impacto, añade uno y trata los inicios estimados como estimaciones (véase el tema 1.5, Fuentes de datos e instrumentación). Segundo, cuando compares periodos, mantén las mismas definiciones de prioridad, o la línea de tendencia reflejará la reclasificación.

## Recomendaciones

### Define los relojes

**1. Escribe una hoja de relojes para cada medida de tiempo.** Para cada etapa, enumera el evento de inicio, el evento de fin, los estados que pausan el reloj, la base de tiempo (natural o en horario laboral) y las exclusiones. Guárdala en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas).

**2. Separa el restablecimiento del cierre.** Registra cuándo volvió el servicio para los usuarios como una marca de tiempo propia, aparte de cuándo se cerró el ticket. El restablecimiento es lo que sienten los usuarios, y el cierre incluye la verificación, la documentación y el tratamiento de la causa. Los equipos que usan una sola marca para ambos son premiados por cerrar tickets pronto o castigados por un seguimiento cuidadoso.

**3. Registra el inicio del impacto, no solo la hora de registro.** Pide a los responsables de respuesta que rellenen cuándo sintieron los usuarios el efecto por primera vez, usando datos de monitorización donde sea posible. Marca el campo como estimado cuando lo sea. El tiempo de detección carece de sentido sin él, y el tiempo de restablecimiento se distorsiona por su ausencia.

**4. Limita los estados de pausa y reporta su uso.** Esperar a un cliente o a un proveedor es a veces legítimo. Permite una lista corta y con nombre de estados de pausa, exige un motivo y muestra la proporción del tiempo del incidente pasada en cada uno. Una proporción creciente de tiempo en pausa es señal de deriva, no de velocidad.

### Reporta con honestidad

**5. Sustituye la media por la mediana y un percentil alto.** Muestra el percentil 50 y el 95 de cada etapa, por prioridad, como una serie temporal. Muestra el número de incidentes detrás de cada punto, porque un percentil de diez incidentes es una cifra débil. Donde los recuentos sean pequeños, grafica los incidentes individuales como puntos y omite la línea de resumen.

**6. Muestra la antigüedad de los incidentes abiertos más antiguos.** Un gráfico de duraciones de incidentes cerrados es ciego a los incidentes aún abiertos, que son los peores. Enumera cada semana los incidentes abiertos más antiguos por prioridad. Es difícil de mejorar sin terminar el trabajo, por lo que es un buen compañero de cualquier gráfico de tiempo de resolución.

**7. Segmenta por prioridad y por servicio.** Un tiempo de resolución combinado sube cuando la mezcla se desplaza hacia incidentes complejos, aunque cada tipo de incidente se gestione más deprisa. Compara dentro de una prioridad y dentro de un servicio y muestra la mezcla junto al tiempo (véase el tema 3.2, Volumen y prioridad de incidentes). No saques conclusiones de un mes en que cambió la mezcla.

**8. Usa límites de control para separar la señal del ruido.** Las duraciones de los incidentes varían mucho de una semana a otra sin que cambie nada. Un gráfico de control, con límites calculados a partir de un periodo estable, muestra cuándo un cambio es lo bastante grande como para merecer una explicación (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

### Empareja velocidad con durabilidad

**9. Muestra las tasas de reapertura y de recurrencia junto a cada medida de tiempo.** La tasa de reaperturas es la proporción de incidentes reabiertos dentro de una ventana declarada. La recurrencia es el mismo servicio y síntoma reapareciendo dentro de una ventana. Si el tiempo de restablecimiento baja mientras sube la recurrencia, el equipo está aplicando parches rápidos. Envía los incidentes recurrentes a la gestión de problemas (véase el tema 4.1, Métricas de gestión de problemas).

**10. Mide la espera y los traspasos, porque ahí es donde se va el tiempo.** Para la mayoría de los servicios, buena parte del tiempo transcurrido de un incidente es espera de una persona, una decisión o un proveedor, y no trabajo. La proporción de tiempo activo y el recuento de reasignaciones muestran dónde mirar. La solución a un tiempo de resolución largo suele ser una regla de enrutamiento más clara o una guardia compartida, no teclear más deprisa.

**11. Usa objetivos sobre percentiles, con una persona en el circuito.** Si necesitas un objetivo, enúncialo como un compromiso por percentil para una prioridad, como «nueve de cada diez incidentes de prioridad 2 restablecidos en un tiempo declarado», y acuérdalo con las personas que lo cumplirán. Revisa los incumplimientos como preguntas sobre el sistema, no como faltas de la persona de guardia (véase el tema 5.1, Métricas de SLA, OLA y XLA).

**12. Pregunta a los usuarios por la experiencia.** Una breve encuesta sobre una muestra de incidentes cerrados y la lectura de los comentarios dirán si el número coincide con cómo se sintió la espera. A los usuarios suele importarles más la comunicación oportuna que el minuto exacto del restablecimiento (véase el tema 6.1, Métricas de satisfacción del cliente).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tiempo de detección | Fijar el inicio del impacto más tarde de lo que fue; ampliar los umbrales de alerta para que menos fallos cuenten como incidentes; contar solo los incidentes que captó el monitor | Proporción de incidentes reportados primero por usuarios y no por la monitorización; revisión periódica de las estimaciones de inicio de impacto frente a los datos de monitorización |
| Tiempo de acuse de recibo | Asignar o acusar recibo automáticamente para detener el reloj; acusar recibo de la alerta y no hacer nada después | Tiempo hasta la primera respuesta y tiempo de restablecimiento de los mismos incidentes; muestra de alertas con acuse de recibo y sin actividad posterior |
| Tiempo hasta la primera respuesta | Enviar una respuesta con plantilla o de una palabra para detener el reloj | Revisar una muestra de primeras respuestas para comprobar su sustancia; contactos repetidos y comentarios de encuestas |
| Tiempo de restablecimiento | Declarar el servicio restablecido antes de que los usuarios puedan usarlo; restablecer suprimiendo el síntoma; registrar caídas como mantenimiento planificado | Recurrencia dentro de una ventana; impacto declarado por usuarios después de la hora de restablecimiento; proporción de incidentes reetiquetados a posteriori |
| Tiempo de resolución | Mover tickets a «a la espera del cliente» o «en espera»; cerrar tras un solo intento de contacto; dividir un incidente en hijos para cerrar antes el padre | Proporción de tiempo en estados de pausa; tasa de reaperturas; antigüedad del incidente abierto más antiguo; leer una muestra de notas de cierre |
| Antigüedad del incidente abierto más antiguo | Cerrar y volver a plantear el ticket más antiguo; reclasificarlo como problema o solicitud para sacarlo de la lista | Vincular los duplicados con los originales y reportar la antigüedad vinculada; recuento de incidentes convertidos en problemas o solicitudes cada periodo |
| Proporción de tiempo activo | Registrar trabajo breve y sin sentido para marcar el tiempo como activo; pasar a estados activos sin esfuerzo | Comparar el tiempo activo con resultados como el tiempo de restablecimiento; muestra de notas de trabajo |
| Recuento de reasignaciones | Reabrir bajo el mismo equipo en lugar de pasar el trabajo; pasar el trabajo por un canal lateral para que la herramienta no muestre traspaso | Tiempo de restablecimiento y satisfacción del usuario; observación periódica de cómo se mueve el trabajo entre equipos |

Una lectura sana muestra medianas y percentiles de cola que se mueven juntos, una proporción pequeña y estable de tiempo en pausa, pocos incidentes reportados primero por usuarios, recurrencia decreciente y comentarios de encuestas que coinciden con los datos de los tickets. Trata una mejora del titular que llega sola como un aviso para hacer una revisión de manipulación.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Tiempo medio de restablecimiento | Familiar; un solo número; fácil de seguir en tendencia | Dominado por unos pocos incidentes largos; oculta el cambio real; malo para muestras pequeñas |
| Mediana más un percentil alto | Describe la experiencia típica y la de los menos afortunados; resiste los valores atípicos | Necesita suficientes incidentes; dos números que explicar |
| Graficar cada incidente | Muestra la forma completa y los valores atípicos; honesto con poco volumen | Más difícil de leer con mucho volumen; necesita un facilitador |
| Objetivos por prioridad | Expectativas claras; respalda contratos y escaladas | Invita a la reclasificación y a la pausa del reloj; puede llevar el esfuerzo al límite del objetivo |
| Medidas del reloj del ticket | Baratas, disponibles en toda herramienta ITSM | Miden el ticket, no la experiencia del usuario; sensibles al flujo de estados |
| Medidas basadas en el impacto | Cercanas a lo que sienten los usuarios; resisten los trucos con tickets | Necesitan datos de monitorización y un campo de inicio de impacto; más difíciles de auditar |

La respuesta pragmática es conservar el reloj del ticket porque toda herramienta lo tiene, añadir una marca de restablecimiento basada en el impacto donde la monitorización lo permita y usar distribuciones para ambos. La media es aceptable como descripción aproximada de un conjunto único, estable y grande de incidentes similares, y nunca debe ser el único número de la página.

## Preguntas para debatir con tu equipo

**1. ¿Qué etapa de un incidente tarda más en nuestro caso y cómo lo sabemos?**
Dibuja la cronología del incidente en una pizarra con las etapas desde el inicio del impacto hasta el cierre. Toma los últimos diez incidentes y marca cuánto duró cada etapa, con los datos de la herramienta y la memoria de los responsables de respuesta. El facilitador debe buscar la etapa donde se concentra el tiempo, que suele ser la espera de un traspaso o de una decisión y no el trabajo técnico. Acuerden a qué etapa prestar atención primero.

**2. ¿Dónde empieza y se detiene nuestro reloj y quién lo decidió?**
Pide a cada persona que diga cuándo cree que «empezó» un incidente y cuándo «terminó». Las respuestas diferirán, y las diferencias son el hallazgo. Compáralas con los campos de la herramienta y el flujo de estados. Recoge las definiciones acordadas en el registro de métricas y anota dónde la herramienta aún no puede respaldarlas.

**3. ¿Qué mostrarían nuestras medianas y percentiles 95 que nuestra media oculta?**
Antes de la reunión, calcula la media, la mediana y el percentil 95 de los incidentes del último trimestre por prioridad. Muéstralos lado a lado y grafica las duraciones. Pregunta qué concluiría el equipo de cada uno. El facilitador debe notar si uno o dos incidentes mueven la media y comentar si el equipo cree que la mediana representa la espera de un usuario típico.

**4. ¿Cuánto tiempo pasamos esperando en lugar de trabajando y por qué?**
Elige tres incidentes largos y rastrea su historial de estados. Cuenta las horas en estados activos y las horas en estados de espera y anota a quién o qué se esperaba. Pregunta qué esperas podrían acortarse con una decisión, una vía de escalada más clara o una guardia compartida.

**5. Si nos pidieran recortar una cuarta parte el tiempo de resolución, ¿cómo lo haríamos sin ayudar a los usuarios?**
Es la revisión de manipulación en miniatura. Enumera cada jugada que mejoraría el número sin mejorar el servicio, como pausar el reloj, cerrar pronto o reetiquetar prioridades. Para cada jugada, pregunta si una barrera de protección la detectaría. La lista es el inicio de tu columna de vectores de manipulación y muestra dónde hay que afinar las definiciones.

**6. ¿Cómo sabemos que un restablecimiento más rápido fue real?**
Pide la evidencia: recurrencia, reaperturas, comentarios de usuarios y cualquier incidente posterior con el mismo síntoma. Mira una mejora reciente y pregunta si se sostuvo un mes después. El facilitador debe orientar al grupo hacia correcciones duraderas. Termina decidiendo qué medida de durabilidad se une al panel.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de producto que operan sus propios servicios ven el tiempo de los incidentes como un costo del trabajo no planificado que desplaza al planificado. Haz seguimiento de cuánto de cada periodo de flujo se llevan los incidentes y trata los incidentes repetidos como elementos de la lista de pendientes del equipo propietario. Las prácticas de publicación que hacen rápida la reversión acortan el restablecimiento, de modo que el tiempo de los incidentes es en parte una medida de entrega (véase el tema 2.9, Trabajo operativo y trabajo no planificado).

### Equipos de servicio y de operaciones

Los equipos de operaciones poseen los relojes y sienten la presión de los objetivos. Deben publicar la hoja de relojes, auditar el uso de los estados de pausa, reportar medianas y percentiles de cola por prioridad y mantener una lista semanal de los incidentes abiertos más antiguos. La carga de guardia y la calidad de las alertas determinan los tiempos de acuse de recibo y de detección, así que mírenlos juntos (véase el tema 5.7, Métricas de trabajo repetitivo y guardias).

### Liderazgo y gobernanza

Los líderes deben preguntar qué etapa es la más lenta y qué se hace al respecto, no por qué un número está en rojo. Deben esperar informes por percentiles, una medida de durabilidad junto a cualquier medida de velocidad y una explicación cuando cambien las definiciones. La financiación de la monitorización, los runbooks y el trabajo sobre problemas suele amortizarse más que la presión sobre los responsables de respuesta, porque reduce el retraso que estos no pueden controlar.

### Clientes y usuarios

Los usuarios experimentan la espera, la calidad de la comunicación y si el problema vuelve. Rara vez ven los nombres de las etapas. Dales una primera respuesta honesta, diles qué esperar y actualízalos con un calendario. Sus comentarios de encuestas y sus contactos repetidos son el mejor control de si el reloj del ticket dice la verdad.

## En la práctica: un ejemplo de gestión de servicios

Un minorista en línea de tamaño medio opera una plataforma de pedidos, un servicio de cuentas de clientes y un sistema interno de almacén. Los equipos de producto poseen sus servicios y comparten una rotación de guardia con un pequeño grupo de operaciones. Todos los números de este ejemplo son ilustrativos.

La dirección fija como meta un «tiempo medio de resolución inferior a cuatro horas» para los incidentes de prioridad 2. En el primer trimestre, el panel muestra una media de 3,8 horas y la meta parece cumplida. El personal del almacén dice que algunas caídas parecen durar todo el día. La responsable de operaciones grafica los 41 incidentes de prioridad 2 (ilustrativo) del trimestre y halla una mediana de 1,5 horas y un percentil 95 de 11 horas. Tres incidentes explican la mayor parte de la cola larga.

Rastrea los tres incidentes largos. Cada uno pasó la mayor parte de su tiempo en «a la espera del proveedor» o «a la espera del cliente». En dos, el ticket se había cerrado y vuelto a plantear como incidente nuevo cuando el original «incumplía», lo que reiniciaba el reloj. Un tercero implicó cuatro reasignaciones entre equipos a lo largo de dos días. Una muestra de notas de cierre muestra que 6 de 30 tickets revisados (ilustrativo) se cerraron tras un solo intento de contactar con el usuario.

El equipo hace cuatro cambios. Añaden un campo de inicio de impacto y una marca de restablecimiento al formulario de incidente. Reportan la mediana y los percentiles 85 y 95 por prioridad, y cada semana los incidentes abiertos más antiguos. Muestran en la misma página la proporción de tiempo en estados de pausa y la tasa de recurrencia. Y vinculan los tickets vueltos a plantear con sus originales para que la antigüedad se traslade.

En la revisión siguiente, la media del titular ha subido a 4,6 horas porque los tickets vueltos a plantear ahora cuentan enteros. El equipo explica la subida a la dirección como una corrección. El percentil 95 y el ticket abierto más antiguo son ahora los números sobre los que trabajan, y el recuento de reasignaciones señala una laguna de enrutamiento entre el servicio de pedidos y el sistema de almacén. Acuerdan añadir un alias de guardia compartido y revisar el efecto durante el próximo trimestre en lugar de fijar de inmediato un objetivo nuevo.

## Agilidad, IA, automatización y analítica

### Agilidad

Un bucle breve de retroalimentación tras cada incidente significativo, con las partes interesadas implicadas, ayuda al equipo a mejorar sus relojes. La precaución es que los objetivos de tiempo de respuesta producen acuses de recibo rápidos y vacíos, así que empárejalos con el tiempo de restablecimiento.

### IA

La IA puede acelerar la primera respuesta, sugerir correcciones y resumir incidentes, lo que acorta el tiempo hasta la primera respuesta mientras el tiempo de restablecimiento puede no cambiar. Reporta ambos, además de la proporción de incidentes donde se usó una sugerencia de IA y la proporción que se repitió. La precaución es que una respuesta rápida de la IA que es errónea añade trabajo, así que cuenta los incidentes reabiertos.

### Automatización

Calcula cada reloj a partir de marcas de tiempo de eventos de la herramienta, con los motivos de pausa registrados, y mide el diagnóstico y la remediación automatizados por las acciones erróneas además de por el tiempo ahorrado. La precaución es que una automatización que restablece el servicio sin registrar la causa oculta el registro de problema.

### Analítica

Reporta la mediana y un percentil alto de cada reloj con el incidente abierto más antiguo y muestra cuántos incidentes hay detrás. La decisión a la que informa es dónde esperan más los usuarios. La precaución es que las definiciones de reloj difieren entre herramientas, así que escribe los eventos de inicio y de fin antes de comparar equipos.

## Perspectiva sectorial

**Startup.** El volumen es bajo, por lo que los percentiles son ruidosos y un gráfico de cada incidente es mejor que un resumen. Una sola persona suele detectar, responder y restablecer, así que separar las etapas importa menos que una cronología escrita de cada incidente. Añade una nota de inicio de impacto a cada informe posterior al incidente y calcula medianas sencillas cuando haya incidentes suficientes.

**Pequeña empresa.** Un proveedor de servicios gestionados o un único generalista de TI pueden gestionar los incidentes, y el contrato del proveedor puede definir objetivos de respuesta y resolución. Lee con cuidado los relojes del contrato, porque a menudo difieren de la experiencia de tus usuarios. Mantén un registro breve de inicio de impacto y restablecimiento para los incidentes que importen y pide al proveedor los registros subyacentes, ya que una cifra resumen oculta los relojes.

**Gran empresa.** Muchos equipos, proveedores y esquemas de prioridad hacen tentadora y engañosa la comparación. Estandariza las definiciones de reloj y el significado de las prioridades en toda la organización, publica distribuciones en lugar de medias y segmenta por servicio. Vigila la deriva de los estados de pausa y la reclasificación, que crecen con el número de capas de reporte.

**Gobierno y sector público.** Los contratos, la información reglamentaria y la auditoría pueden fijar los relojes y las definiciones de prioridad. Cumple esas obligaciones tal como están escritas y conserva a su lado una segunda vista orientada al usuario, para que el cumplimiento no oculte una mala experiencia. Sé abierto sobre las definiciones y sobre las correcciones cuando cambie una regla de reloj (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo de este tema es sobre todo de diseño y disciplina. Hacen falta unas horas para escribir hojas de relojes, algo de configuración para añadir un campo de inicio de impacto y una marca de restablecimiento y un esfuerzo modesto para construir informes por percentiles. Donde la herramienta ITSM o una plataforma de monitorización ya guardan las marcas de tiempo, la extracción es una tarea única. El costo recurrente es una revisión mensual y una muestra trimestral de incidentes cerrados.

El retorno procede de mejores decisiones y menos retrabajo. El reporte por distribuciones muestra si una mejora funcionó, y el reporte por etapas dirige el esfuerzo al retraso real, como los traspasos, las lagunas de detección o las esperas de proveedores. Las medidas de durabilidad evitan el falso ahorro de los parches rápidos que vuelven como incidentes repetidos. Mide tu propia línea base durante un trimestre, haz un cambio y compara distribuciones.

## Antipatrones y trampas

- **Un único MTTR en el panel ejecutivo.** La media de datos asimétricos engaña. Muestra la mediana, un percentil alto y el incidente abierto más antiguo, e indica cuántos incidentes hay detrás de cada punto.
- **Mezclar prioridades y servicios.** Un cambio de mezcla parece un cambio de rendimiento. Segmenta por prioridad y servicio y muestra la mezcla.
- **Detener el reloj con estados de pausa.** El tiempo se desvanece en «a la espera» y «en espera». Enumera los estados permitidos, exige motivos y reporta la proporción de tiempo en cada uno.
- **Cerrar y volver a plantear tickets.** Reinicia la antigüedad y oculta el incidente largo. Vincula los tickets vueltos a plantear con sus originales y reporta la antigüedad vinculada.
- **Usar una sola marca de tiempo para el restablecimiento y el cierre.** Se premia entonces a los equipos por cerrar prematuramente o se les penaliza por un seguimiento cuidadoso. Registra ambas y reporta ambas.
- **Clasificar a agentes o ingenieros por tiempo de resolución.** Premia los tickets fáciles y la selección de casos, y desalienta la ayuda y la escalada. Reporta solo por equipo y servicio.
- **Objetivos sin medidas de durabilidad.** Un parche rápido que falla mañana parece un éxito. Muestra la recurrencia y la tasa de reaperturas junto a cada objetivo.
- **Tratar las muestras pequeñas como tendencias.** Un percentil 95 de un puñado de incidentes es una conjetura. Grafica los incidentes individuales y espera a tener más datos antes de trazar una línea.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y relojes | Cada persona mide de forma distinta; un solo «tiempo de resolución» | Relojes escritos para algunos equipos; etapas parcialmente separadas | Una hoja de relojes para todas las etapas, con los estados de pausa enumerados | Definiciones revisadas y cambios registrados con motivos | Definiciones alineadas con proveedores y clientes y revisadas cuando dejan de informar decisiones |
| Calidad de los datos | Notas manuales; inicio de impacto desconocido | Marcas de tiempo de la herramienta para registrado y cerrado | Inicio de impacto y restablecimiento registrados para los incidentes prioritarios | Datos auditados por muestreo; estimaciones señaladas | Datos de monitorización e ITSM unidos automáticamente y de confianza entre equipos |
| Práctica estadística | Solo media | Media y mediana mostradas | Mediana y un percentil alto por prioridad y servicio | Límites de control usados; medidas de durabilidad emparejadas | Distribuciones ligadas a la experiencia del usuario y usadas para decidir dónde invertir |
| Uso en la mejora | Números usados para perseguir a individuos | El equipo ve sus propios números | El equipo revisa cada mes los tiempos por etapa y la espera | Las etapas lentas llevan a trabajo de mejora financiado | La mejora se comparte entre equipos y proveedores y las medidas evolucionan |

## Lista de verificación

- [ ] Cada etapa (detección, acuse de recibo, respuesta, restablecimiento, resolución) tiene una regla escrita de inicio, fin y pausa.
- [ ] El inicio del impacto y el tiempo de restablecimiento se registran como campos separados para los incidentes prioritarios.
- [ ] Los informes muestran la mediana y un percentil alto, por prioridad y por servicio.
- [ ] Se muestra el recuento de incidentes que hay detrás de cada punto reportado.
- [ ] Los incidentes abiertos más antiguos se enumeran cada semana.
- [ ] Los estados de pausa son una lista corta y con nombre y se reporta su proporción de tiempo.
- [ ] La tasa de reaperturas y la recurrencia se muestran junto a cada medida de tiempo.
- [ ] Los tickets vueltos a plantear se vinculan a sus originales para que la antigüedad se traslade.
- [ ] Ninguna medida de tiempo se usa para clasificar agentes o ingenieros individuales.
- [ ] Cada trimestre se lee una muestra de incidentes cerrados para comprobar su honestidad.
- [ ] Los comentarios de las encuestas de clientes se leen junto a los datos de los tickets.

## Prompts de IA

**Compara la media y los percentiles de las duraciones de nuestros incidentes.**

```text
I will paste incident records for [service or team] covering [period]. Fields:
[list fields such as logged time, impact start, restore time, closed time,
priority, status history]. Compute the median, the 85th percentile, the 95th
percentile, and the mean of [stage name, for example time to restore] by
[priority], and show how many incidents sit behind each figure. Describe how far
the mean differs from the median and which incidents drive that difference. Do
not invent data or benchmark values. List your assumptions, any rows you
excluded, and anything the data could not tell you.

[paste incident data with personal data removed]
```

**Redacta una hoja de relojes para nuestras medidas de tiempo de incidentes.**

```text
Draft a clock sheet for [team name] covering time to detect, time to
acknowledge, time to first response, time to restore, and time to resolve. Our
ITSM tool is [tool name], our monitoring is [monitoring tool], and our status
workflow is [list of statuses]. For each stage, give the start event, stop
event, pause states, time basis ([calendar or business hours]), exclusions, and
a gaming vector with a guardrail. Mark every item you had to assume and list
questions I should answer to complete the sheet. Do not invent targets.
```

**Encuentra adónde va el tiempo transcurrido en unos pocos incidentes largos.**

```text
Here is the status history for [number] long incidents from [service]. For each
incident, list the time spent in each status, mark the active and waiting
states using this rule: [which statuses count as active], and note every
reassignment between [teams or groups]. Report patterns across incidents, not
individuals, and suggest which stage deserves attention first. Do not guess at
causes the data does not show. List your assumptions and what extra fields
would help.

[paste status histories with personal data removed]
```

**Haz una revisión de manipulación de nuestros objetivos de tiempo de incidentes.**

```text
We report [metric name] for [priority or service], defined as [definition with
start and stop events]. The target is [target] and the audience is [audience].
List realistic ways the number could improve without helping users, such as
clock pausing, early closure, relabelling, or re-raising tickets. For each way,
propose a guardrail measure or practice that would reveal it, and state how that
guardrail could itself be gamed. Do not invent benchmarks or statistics. List
your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar los temas relacionados y las barreras de protección emparejadas de una medida de tiempo de incidentes que estás a punto de reportar.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que un cambio en este tema mantiene coherentes la plantilla, la tabla de manipulación y las referencias cruzadas.

## Ideas clave

- Un incidente tiene etapas, y cada etapa tiene su propio reloj, responsable y remedio. Nombra la etapa que estás midiendo.
- Las duraciones de los incidentes son asimétricas, por lo que la media engaña. Reporta la mediana, un percentil alto y la antigüedad del incidente abierto más antiguo.
- Escribe dónde empieza y se detiene cada reloj, registra el inicio del impacto y el restablecimiento por separado del cierre del ticket y limita los estados de pausa.
- Empareja cada medida de velocidad con una medida de durabilidad como la recurrencia y la tasa de reaperturas.
- Describe equipos y servicios, nunca agentes individuales, y lee una muestra de incidentes cerrados para comprobar que los números son honestos.

## Referencias y lecturas complementarias

1. Davidovič, Š., *Incident Metrics in SRE: Critically Evaluating MTTR and Friends*, O'Reilly Media, 2021, https://sre.google/resources/practices-and-processes/incident-metrics-in-sre/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
7. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
13. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
14. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
15. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
16. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
