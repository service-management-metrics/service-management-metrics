# Métricas de SLA, OLA y XLA

**Un acuerdo de nivel de servicio dice al cliente lo que se prometió, un acuerdo de nivel operativo dice a los equipos internos lo que se deben unos a otros y un acuerdo de nivel de experiencia dice si las personas que usan el servicio están realmente mejor, así que necesitas los tres y debes reportarlos con honestidad en lugar de como un muro de verde.**

## Visión general y motivación

Un [acuerdo de nivel de servicio (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) es un compromiso documentado entre un proveedor de servicios y un cliente sobre lo que entregará el servicio: sus horarios, su disponibilidad, con qué rapidez responde el proveedor a los incidentes y los resuelve, y con qué rapidez atiende las solicitudes. En ITIL 4 (la edición de 2019 del marco publicado por su propietario, hoy AXELOS bajo PeopleCert), la práctica de [gestión de niveles de servicio](https://en.wikipedia.org/wiki/ITIL) define estos objetivos, los supervisa e informa sobre ellos. Un [acuerdo de nivel operativo (OLA)](https://en.wikipedia.org/wiki/Operational-level_agreement) es la contrapartida interna: un acuerdo entre equipos de la misma organización, por ejemplo entre el centro de servicios y el equipo de redes, sobre lo que hará cada uno y con qué rapidez para poder cumplir el SLA de cara al cliente. Un contrato de respaldo desempeña el mismo papel para un proveedor externo (véase el tema 8.4, Métricas de proveedores y contratos).

Un acuerdo de nivel de experiencia (XLA) es el más reciente de los tres. Registra un resultado acordado en términos de cómo experimentan las personas el servicio, como la facilidad con que sacaron adelante su trabajo, cómo se sintieron con la interacción y si el servicio les ayudó a alcanzar su objetivo. La idea ha crecido en la práctica de la gestión de servicios porque un SLA puede cumplirse mientras los usuarios están descontentos. Este tema posee los tres acuerdos y su elaboración de informes. La profundidad sobre cómo medir la experiencia pertenece al tema 6.2, Acuerdos de nivel de experiencia, y las contrapartidas de ingeniería de los objetivos pertenecen al tema 5.2, SLI, SLO y presupuestos de errores.

Tres conceptos ágiles y de fiabilidad acompañan a estos acuerdos. Un [indicador de nivel de servicio (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) es una propiedad medida de un servicio, como la proporción de solicitudes atendidas con éxito. Un [objetivo de nivel de servicio (SLO)](https://en.wikipedia.org/wiki/Service_level_objective) es el objetivo interno para un SLI, normalmente más estricto que cualquier cosa prometida a un cliente. La práctica de la [ingeniería de fiabilidad de sitios (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) trata el SLO, y el presupuesto de errores que se deriva de él, como una herramienta de decisión compartida entre producto y operaciones. El SLA es el contrato; el SLO es la meta de ingeniería; el SLI es la medición. Mantener los tres separados evita una confusión habitual en la que una cláusula contractual de penalización se usa para orientar las decisiones diarias de ingeniería.

La familia tiene un fallo conocido llamado informe sandía (watermelon reporting): un informe verde por fuera y rojo por dentro. Cada línea del SLA aparece como cumplida y, sin embargo, los clientes están frustrados, porque las medidas se eligieron por lo que el proveedor podía alcanzar de forma fiable y no por lo que le importa al cliente, o porque los promedios esconden la cola mala, o porque el reloj se detuvo durante lo peor de la espera. El remedio es en parte técnico (percentiles, relojes honestos, indicadores centrados en el usuario) y en parte social (acuerdos negociados como una conversación, revisados con una cadencia y leídos como una pregunta sobre el servicio, no como un veredicto sobre un equipo). La advertencia más amplia sobre las medidas que se convierten en objetivos está en el tema 1.2, Ley de Goodhart y psicología de las métricas.

Los equipos ágiles piensan en objetivos y presupuestos; los gestores de niveles de servicio de ITIL piensan en acuerdos y revisiones. Las visiones encajan: el acuerdo declara el resultado, los objetivos y los indicadores son la forma en que el equipo cumple la promesa y las medidas de experiencia confirman que importó.

Un último término: un [percentil](https://en.wikipedia.org/wiki/Percentile) es el valor por debajo del cual cae una proporción declarada de observaciones. El percentil 85 del tiempo de resolución es el tiempo dentro del cual se resolvió el 85 por ciento de los tickets. La mayoría de los objetivos de los SLA se escriben como un percentil o una proporción, así que la forma de calcular el percentil y lo que se incluye en él son el núcleo del tema (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

## Principios clave

- **Acuerda los resultados con el cliente y luego mídelos.** Un acuerdo es una declaración negociada de lo que el cliente necesita y el proveedor puede sostener, escrita con las palabras del cliente y revisada en común.
- **Reporta distribuciones y proporciones, nunca un único promedio.** Un tiempo medio de resolución que cumple el objetivo puede esconder una larga cola de trabajo muy tardío. Indica el percentil, la población y el recuento.
- **Haz honesto el reloj.** Cada objetivo tiene un evento de inicio, un evento de parada y una lista de condiciones de pausa. Publica las reglas del reloj y reporta con qué frecuencia se usa cada pausa.
- **Organiza los acuerdos en capas.** El SLA se construye sobre OLA y contratos de proveedores, y los objetivos fijados dentro del equipo deben ser más estrictos que las promesas hechas fuera. Una brecha en cualquier capa aparece como un incumplimiento arriba.
- **Empareja cada medida operativa con una medida de experiencia.** Un objetivo cumplido con una mala experiencia, o al revés, es la señal más útil del informe.
- **Cuenta los casi fallos.** El trabajo que terminó justo dentro del límite te dice más sobre el riesgo que el que terminó muy por dentro.
- **Reporta sobre equipos y servicios, nunca sobre personas.** Los acuerdos describen aquello a lo que se compromete un servicio o un equipo. No son una forma de clasificar a individuos.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de cumplimiento del SLA | Proporción de elementos medidos (incidentes, solicitudes o ventanas de tiempo) que cumplieron un objetivo declarado del SLA en el periodo | Elementos que cumplieron el objetivo divididos por elementos que se midieron. El reloj empieza en la hora registrada definida en el acuerdo (por ejemplo la creación del ticket) y se detiene en el evento de parada definido (por ejemplo el restablecimiento confirmado). Se excluyen los elementos cancelados como duplicados y el tiempo dentro de exclusiones acordadas, como el mantenimiento programado. Reporta el recuento junto a la proporción | Porcentaje, con n | Marcas de tiempo de la herramienta ITSM; datos de monitorización para objetivos basados en tiempo | Gestión de niveles de servicio; gestión de incidentes; gestión de solicitudes de servicio | Cumplimiento del objetivo de nivel de servicio sobre una ventana móvil (véase el tema 5.2, SLI, SLO y presupuestos de errores) | Mensual, con una vista interna semanal |
| Proporción de casi fallos | Proporción de elementos que cumplieron el objetivo pero terminaron dentro de la última décima parte del tiempo permitido | Elementos terminados al 90 por ciento o más del tiempo objetivo y aún dentro de él, divididos por los elementos que cumplieron el objetivo. Mismo reloj que el SLA. No aplicable a ventanas de tiempo (solo se aplica a las medidas de tiempo hasta el objetivo) | Porcentaje | Marcas de tiempo de la herramienta ITSM | Gestión de niveles de servicio | Proporción de trabajo cercano a la expectativa de nivel de servicio en un gráfico de flujo (véase el tema 2.1, Medidas de flujo) | Mensual |
| Proporción de pausa del reloj | Proporción del tiempo total transcurrido de los tickets pasada en estados que pausan el reloj del SLA | Tiempo total de pausa dividido por el tiempo total transcurrido desde el inicio hasta la parada, para los elementos del ámbito. Excluye los elementos en que no se usó ningún estado de pausa. Reporta por estado de pausa | Porcentaje | Historial de estados de la herramienta ITSM | Gestión de niveles de servicio; gestión de incidentes | Tiempo bloqueado y tiempo de espera en una vista de flujo (véase el tema 2.4, Métricas del flujo de valor) | Mensual |
| Tasa de cumplimiento del OLA | Proporción de traspasos internos que cumplieron el objetivo del OLA entre dos equipos | Traspasos completados dentro del objetivo del OLA divididos por los traspasos recibidos. El reloj empieza cuando se asigna al equipo receptor y se detiene cuando este devuelve o cierra el elemento. Se excluyen los elementos reasignados por error, contados aparte | Porcentaje, con n | Historial de asignaciones de la herramienta ITSM | Gestión de niveles de servicio; gestión de incidentes | Tiempo de espera de traspaso y trabajo bloqueado entre equipos (véase el tema 9.3, Métricas de colaboración y traspasos) | Mensual |
| Tiempo de espera de traspaso (percentil 85) | Tiempo que un elemento espera en la cola de un equipo receptor antes de que empiece el trabajo | Percentil 85 del tiempo entre la asignación al equipo receptor y la primera acción registrada de ese equipo. Se excluyen los elementos que esperan al cliente | Horas o minutos | Historial de asignaciones y actividad de la herramienta ITSM | Gestión de niveles de servicio; gestión de incidentes | Tiempo en cola en una vista de flujo (véase el tema 2.3, Trabajo en curso y teoría de colas) | Semanal |
| Puntuación de experiencia por recorrido | Valoración del cliente o usuario de cómo apoyó el servicio un recorrido definido, como conseguir un portátil nuevo o recuperarse de una caída | Media y distribución de las valoraciones de encuesta en una escala fija para los recorridos completados en el periodo. Reporta la tasa de respuesta y la composición de los encuestados. Se excluyen las encuestas parciales. No es un único promedio, así que muestra la distribución | Escala de valoración, con tasa de respuesta | Breve encuesta posterior a la interacción; eventos del recorrido de la herramienta ITSM | Gestión de niveles de servicio; prácticas de satisfacción del cliente (véase el tema 6.1, Métricas de satisfacción del cliente) | Retroalimentación del cliente y medidas de resultados | Mensual, mostrando cada oleada |
| Brecha sandía | Proporción de periodos de informe o servicios donde el SLA aparece como cumplido mientras la medida de experiencia o de impacto en el usuario aparece como mala | Servicios (o periodos) con cumplimiento del SLA igual o superior al objetivo y experiencia por debajo de su nivel acordado, divididos por servicios (o periodos) con cumplimiento del SLA igual o superior al objetivo. El nivel de experiencia debe acordarse antes de puntuar el periodo | Porcentaje de servicios en verde | Cumplimiento del SLA y puntuación de experiencia juntos | Gestión de niveles de servicio; mejora continua | Retrospectiva de resultados frente a efectos | Trimestral |
| Cobertura y vigencia de los acuerdos | Proporción de servicios en vivo cuyo SLA, OLA y contratos de proveedores existen y se revisaron dentro del intervalo acordado | Servicios con las tres capas documentadas y revisadas dentro del intervalo, divididos por los servicios en vivo del catálogo de servicios. El intervalo lo fija la organización. Se excluyen los servicios en retirada | Porcentaje | Catálogo de servicios y registro de acuerdos | Gestión de niveles de servicio; gestión del catálogo de servicios; gestión de proveedores | Acuerdos de trabajo y cartas de equipo revisados con una cadencia regular | Trimestral |

## Recomendaciones

### Pon en marcha los acuerdos

**1. Escribe cada SLA con el lenguaje del cliente y átalo a un resultado.** Parte de lo que el cliente necesita, como «un empleado bloqueado vuelve a trabajar pronto», y elige después la medida. Un acuerdo breve con un puñado de objetivos significativos vale más que uno largo que nadie lee. Anota el reloj de cada objetivo: el evento de inicio, el evento de parada y las condiciones de pausa (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes).

**2. Expresa los objetivos como percentiles o proporciones, con una población declarada.** «El 90 por ciento de los incidentes de prioridad 2 restablecidos en cuatro horas» dice más que «restablecimiento medio inferior a dos horas». Acuerden qué cuenta: qué prioridades, qué horas, qué tipos de solicitud. Muestra el recuento con cada porcentaje para que un mes con ocho incidentes no se lea como uno con ochocientos.

**3. Deriva los OLA del SLA y da a cada uno un equipo propietario con nombre.** Trabaja hacia atrás desde el objetivo del cliente: si al cliente se le promete restablecimiento en cuatro horas, los OLA deben dejar margen para la detección, la clasificación, los traspasos y la corrección. Escribe cada OLA como un breve acuerdo mutuo con un equipo receptor, un tiempo de respuesta esperado y una vía para las disputas. Un OLA existe para ayudar a los equipos a planificar, así que mantenlo tan ligero como permita la relación.

**4. Mantén los objetivos más estrictos que la promesa.** Fija el SLO interno en un nivel más estricto que el SLA para que una mala semana se note y se corrija antes de un incumplimiento visible para el cliente (véase el tema 5.2, SLI, SLO y presupuestos de errores). Trata el SLA como un suelo que importa a finanzas y a legal y el SLO como el número por el que se guían los ingenieros. Usa el presupuesto de errores como la forma en que producto y operaciones deciden entre trabajo de funciones y trabajo de fiabilidad.

### Mide con honestidad

**5. Publica las reglas del reloj y reporta las pausas.** La ruta más común hacia un informe verde es un estado de pausa generoso, como «esperando al cliente» usado cuando quien espera es el proveedor. Reporta la proporción de pausa del reloj por estado de pausa, muestrea algunos tickets pausados cada mes y pregunta si el cliente estaría de acuerdo en que el reloj debió detenerse. Mantén corta la lista de motivos de pausa permitidos y escrita en el acuerdo.

**6. Muestra la distribución completa junto al objetivo.** Coloca la mediana, el percentil 85 o 95 y el decil peor junto a la tasa de cumplimiento. Un cumplimiento plano del 95 por ciento puede esconder una cola de trabajo que tardó días (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**7. Haz seguimiento de los casi fallos y de las causas de incumplimiento.** La proporción de casi fallos te dice cuánta suerte hay en el número verde. Cuando ocurre un incumplimiento, registra la categoría de causa y si fue un problema de capacidad, de traspaso, de proveedor o de definición. Vincula las categorías mayores con la gestión de problemas (véase el tema 4.1, Métricas de gestión de problemas).

**8. Mide la cola del OLA, no solo el cumplimiento.** El tiempo de espera de traspaso en el percentil 85 muestra dónde se atasca el trabajo, mucho antes de que aparezca un incumplimiento del SLA. Compártelo con el equipo emisor y con el receptor, y descríbelo como una propiedad del flujo entre ellos. La conversación trata de la cola, nunca de las personas que hay en ella (véase el tema 2.3, Trabajo en curso y teoría de colas).

### Añade la experiencia y cierra la brecha

**9. Empareja cada SLA con una medida de experiencia del mismo recorrido.** Haz a los usuarios una pregunta breve tras la interacción sobre si funcionó y lo difícil que fue, y reporta la tasa de respuesta y la composición de los encuestados. Acuerda de antemano qué nivel cuenta como suficientemente bueno, para que un XLA sea un resultado negociado y no un número inventado a posteriori (véase el tema 6.2, Acuerdos de nivel de experiencia, y el tema 6.1, Métricas de satisfacción del cliente).

**10. Reporta la brecha sandía y trátala como un hallazgo.** Haz seguimiento de con qué frecuencia se cumple un SLA mientras la experiencia es mala. Una brecha creciente te dice que las medidas del SLA se alejan de lo que importa a los usuarios, y la respuesta correcta es revisar la medida, no explicar la discrepancia. Revísala cada trimestre con un representante del cliente presente.

**11. Revisa los acuerdos según un calendario y retira los que nadie usa.** Comprueba cada acuerdo frente al catálogo de servicios, los contratos de proveedores y el trabajo real. Un conjunto menor de acuerdos vivos es más fácil de reportar y más difícil de manipular.

**12. Reporta cada servicio en una sola vista que combine las tres capas.** Muestra en una página, para cada servicio, el cumplimiento del SLA, la distribución, las esperas de traspaso del OLA, la puntuación de experiencia y el trabajo de mejora abierto. Deriva el estado de los datos, no de un color elegido por el responsable del servicio. Haz la página accesible al cliente y a los equipos (véase el tema 11.1, Diseño de un panel de métricas de servicio).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tasa de cumplimiento del SLA | Elegir un objetivo fácil; cerrar tickets pronto y reabrirlos después; reclasificar la prioridad a la baja; excluir los casos difíciles como «fuera de ámbito» | Tasa de reapertura y tasa de reclasificación de prioridad; muestra de tickets cerrados leída con el cliente; revisión de la lista de exclusiones cada trimestre |
| Proporción de casi fallos | Detener el reloj un minuto antes del límite y seguir con el trabajo sin registrarlo; dividir un ticket en dos más cortos | Tiempo desde el último contacto con el cliente hasta el restablecimiento confirmado; recuento de tickets vinculados o hijos por incidente |
| Proporción de pausa del reloj | Usar estados de pausa en tickets que no esperan al cliente; mover el trabajo a un estado que no se cuenta | Motivos de pausa auditados en una muestra; proporción de pausas revertidas por el cliente; puntuación de experiencia de los tickets pausados |
| Tasa de cumplimiento del OLA | Rechazar traspasos devolviéndolos al emisor para reiniciar el reloj; marcar elementos como aceptados sin empezar el trabajo | Recuento de rebotes por elemento y tiempo total hasta el restablecimiento entre equipos; el resultado del SLA de extremo a extremo |
| Tiempo de espera de traspaso (percentil 85) | Asignar a una persona en lugar de a la cola del equipo para ocultar la espera; registrar una primera acción simbólica | Muestreo de la calidad de la primera acción; tiempo desde la asignación hasta la primera actualización visible para el cliente |
| Puntuación de experiencia por recorrido | Enviar encuestas solo a usuarios satisfechos; hacer preguntas sugestivas; adiestrar a quienes responden para dar valoraciones altas | Composición de los encuestados frente a la población; tasa de respuesta mostrada junto a la puntuación; comentarios abiertos leídos en la revisión |
| Brecha sandía | Fijar bajo el nivel de experiencia para que la brecha siga siendo pequeña; cambiar la medida de experiencia cuando baja | Nivel de experiencia acordado de antemano y cambios registrados con sus motivos; tendencia de toda la distribución |
| Cobertura y vigencia de los acuerdos | Marcar un acuerdo como revisado sin una revisión real; contar un documento vacío como un SLA | Evidencia de la revisión (asistentes, cambios, decisiones); muestra de acuerdos leídos en busca de contenido real y aprobación del cliente |

Una lectura sana muestra un cumplimiento que se mueve por razones comprensibles, casi fallos pocos y explicados, pausas que se mantienen dentro de la lista acordada, esperas de traspaso comentadas por los equipos que las poseen y una medida de experiencia que en gran parte concuerda con el SLA. Donde las dos discrepan, el equipo ya tiene una nota de la causa y un elemento de mejora.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| SLA contractuales con penalizaciones | Claros, exigibles, reconocidos legalmente | Fomentan juegos con el reloj y reportes defensivos; las penalizaciones pueden agriar la relación |
| SLA sin penalizaciones, con revisión periódica | Genera confianza y datos honestos; se centra en el aprendizaje | Menos influencia cuando un proveedor incumple los objetivos de forma sistemática |
| OLA detallados entre todos los equipos | Expectativas claras y menos disputas | Burocracia; los equipos optimizan para su propio reloj en lugar del del cliente |
| OLA ligeros con un objetivo compartido de extremo a extremo | Fomenta la cooperación; menos papeleo | Necesita confianza y buena visibilidad de las colas para zanjar disputas |
| Añadir XLA a los SLA | Muestra si el servicio ayuda a las personas | Los datos de encuestas son más ruidosos y lentos; la atribución es más difícil |

Mantén pequeño el acuerdo, reporta la distribución y usa los datos de experiencia para contrastar los datos operativos. Dedica esfuerzo a las reglas del reloj y a los traspasos, donde surge la mayor parte del desacuerdo sobre un número.

## Preguntas para debatir con tu equipo

**1. Si nuestro informe de SLA está todo en verde, ¿qué esperaríamos que dijeran los usuarios del servicio?**
Pide al grupo que nombre un servicio que haya estado en verde varios meses y reúne después lo que los usuarios dicen realmente en comentarios y quejas. Compara ambos. El facilitador debe buscar brechas entre la medida y la experiencia vivida, y anotar qué medidas se eligieron por ser fáciles de alcanzar.

**2. ¿Dónde se detiene nuestro reloj y quién lo decidió?**
Recorre las reglas de inicio, parada y pausa de un objetivo importante y pregunta quién escribió cada una. Mira la proporción de tickets en un estado de pausa y pregunta si los clientes estarían de acuerdo. Acuerden una regla que endurecer o aclarar.

**3. ¿Cuáles de nuestros OLA ayudan a los equipos a planificar y cuáles solo reparten culpas?**
Enumera los acuerdos internos y pregunta quién lee cada uno y cuándo. Hablen de lo que ocurre tras un OLA incumplido: una conversación sobre la cola o una búsqueda de culpables. El fin es llevar la discusión hacia el flujo de trabajo entre equipos. Elijan un OLA que simplificar o retirar.

**4. ¿Cuánto de nuestro verde es suerte?**
Muestra la proporción de casi fallos del objetivo más importante. Hablen de qué ocurriría si el mes siguiente tuviera unos cuantos casos difíciles más o unas cuantas personas disponibles menos. Pregunta si el equipo tiene holgura y dónde está.

**5. ¿Qué querría el cliente que prometiéramos y hoy no medimos?**
Invita al representante del cliente o a un usuario a describir con sus propias palabras lo que le importa, como poder contactar con una persona u obtener un portátil antes del primer día. Recoge dos o tres resultados. Decidan cuáles podrían ser una pregunta breve de encuesta o un evento ya presente en los datos, y cómo acordaría el grupo un buen nivel.

**6. ¿Cómo sabríamos si las medidas de nuestro SLA se hubieran alejado de lo que importa a los usuarios?**
Hablen de la brecha sandía como señal y pregunten quién la mira. Consideren con qué frecuencia se revisan los acuerdos y si asiste el cliente. Acuerden una fecha de revisión y la evidencia que llevar, incluida una muestra de tickets y los últimos resultados de experiencia.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega que además operan sus servicios cumplen el SLA a través de sus propios objetivos y presupuestos de errores, y sienten el costo cuando una penalización del SLA o una escalada de un cliente interrumpe el trabajo planificado. Deben mantener los SLO más estrictos que los SLA y tratar el SLA como un suelo de seguridad, no como el objetivo diario (véase el tema 5.2, SLI, SLO y presupuestos de errores).

### Equipos de servicio y de operaciones

Los equipos de operaciones llevan los relojes. Necesitan reglas claras para las condiciones de inicio, parada y pausa, OLA compartidos que nombren la cola receptora y visibilidad de las esperas de traspaso. Deben reportar con claridad las causas de incumplimiento y usarlas como insumo del trabajo de problemas y de capacidad (véase el tema 4.1, Métricas de gestión de problemas). Deben resistir la presión de explicar un resultado mediante el reloj en lugar de corregir la causa.

### Liderazgo y gobernanza

Los líderes usan los informes de SLA para ver si se cumplen los compromisos y dónde invertir. Deben pedir distribuciones, la proporción de pausa del reloj, la proporción de casi fallos y la brecha sandía, y deben tratar con curiosidad una racha ininterrumpida de verde. Financiar el trabajo de mejora que sigue a un análisis de incumplimientos, y proteger de la culpa el reporte honesto, importa más que el propio objetivo (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

### Clientes y usuarios

Los clientes quieren que el acuerdo describa lo que sienten: con qué rapidez se arregla el problema, con qué frecuencia se repite y si pueden contactar con alguien que ayude. Deben formar parte de la revisión de los acuerdos y tener una forma de decir cuándo un informe en verde no coincide con su experiencia. Un resumen legible de una página, con los motivos de cualquier incumplimiento y la corrección prevista, genera más confianza que una larga tabla de cumplimiento.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un hospital regional da soporte a un sistema de programación clínica usado por el personal de las plantas. El responsable del servicio, el centro de servicios, el equipo de aplicaciones y el equipo de infraestructura se reúnen cada mes. Todos los números siguientes son ilustrativos.

El SLA promete que el 90 por ciento de los incidentes de prioridad 2 (pérdida parcial de función que afecta a una planta) se restablecen en cuatro horas, medidas desde la creación del ticket, en un servicio de 24 horas, siete días a la semana. El informe mensual muestra un cumplimiento del 94 por ciento sobre 36 incidentes (ilustrativo), cómodamente verde. La encuesta de experiencia, enviada tras cada cierre de prioridad 2, tiene una tasa de respuesta del 41 por ciento (ilustrativo) y una valoración mediana de 3 en una escala de cinco puntos, muy por debajo del nivel de 4 que el responsable del servicio y los jefes de planta habían acordado como XLA. La brecha sandía es visible por tercer mes consecutivo.

El equipo mira la distribución. El restablecimiento mediano es de 1 hora 40 minutos (ilustrativo), pero el percentil 95 es de 3 horas 50 minutos (ilustrativo) y la proporción de casi fallos es del 31 por ciento (ilustrativo): casi un tercio de los incidentes «cumplidos» terminaron en la última décima parte del tiempo permitido. Miran la proporción de pausa del reloj y descubren que el 22 por ciento (ilustrativo) del tiempo transcurrido se pasa en el estado «esperando al cliente». Una muestra de diez tickets pausados muestra cuatro en que la planta había respondido y el ticket siguió pausado hasta el turno siguiente, y en otros tres el equipo de aplicaciones esperaba al equipo de infraestructura. El tiempo de espera de traspaso en el percentil 85 de la cola de infraestructura es de 2 horas 10 minutos (ilustrativo) frente a un OLA de 30 minutos (ilustrativo), y la tasa de cumplimiento del OLA de ese traspaso es del 58 por ciento (ilustrativo).

La decisión es práctica. Cambian la regla del reloj para que «esperando al cliente» solo pueda usarse tras una solicitud documentada al cliente, y el reloj se reanude en la siguiente respuesta. Añaden una ruta de guardia para la cola de infraestructura durante el horario de las plantas y acuerdan un OLA menor, con una revisión en un mes. Añaden la medida de experiencia y la brecha sandía al informe mensual de una página e invitan a un jefe de planta a la revisión. Además bajan el SLO interno a un restablecimiento más estricto de cuatro horas para el 95 por ciento de los incidentes, para que el equipo note los problemas antes de que el SLA corra riesgo.

Un riesgo de manipulación aparece en el segundo mes. Tras el cambio de la regla de pausa, el cumplimiento baja al 89 por ciento (ilustrativo) y un gerente pide al centro de servicios que «vuelva a comprobar las prioridades». El equipo detecta un pico de rebajas de prioridad 2 a prioridad 3, empareja el cumplimiento con las tasas de reclasificación y de reapertura y exige un motivo en el registro para cualquier cambio de prioridad. En el tercer mes, el cumplimiento es del 91 por ciento (ilustrativo), el percentil 95 es más bajo, la proporción de casi fallos ha bajado y la valoración mediana de experiencia ha subido a 3,8 (ilustrativo). La brecha se estrecha porque el trabajo mejoró, y los números son creíbles.

## Agilidad, IA, automatización y analítica

### Agilidad

Acuerda los niveles de servicio con las partes interesadas y revísalos con regularidad, para que los objetivos sigan lo que los usuarios necesitan a medida que evoluciona el servicio. La precaución es que un objetivo fijo dejado durante años mide el pasado.

### IA

La IA puede resumir incumplimientos, predecir qué tickets incumplirán un objetivo y sugerir escaladas. Empareja el cumplimiento con la puntuación de experiencia y la brecha sandía, y registra qué predicciones fueron acertadas. La precaución es que un empujón de la IA para proteger el objetivo puede llevar a la gente a pausar relojes o a repriorizar, así que audita el uso de las pausas.

### Automatización

Calcula el cumplimiento a partir de marcas de tiempo de eventos y haz visibles las reglas de pausa. Mide la escalada automatizada por sus falsas escaladas y por los incumplimientos que no detectó. La precaución es que una pausa automática en un estado como esperando al cliente es una ruta fácil hacia la manipulación.

### Analítica

Reporta el cumplimiento con los casi fallos y los percentiles, y muestra al lado la puntuación de experiencia. La decisión a la que informa es qué acuerdo renegociar. La precaución es que el cumplimiento sobre pocos tickets es volátil, así que muestra el recuento detrás de cada porcentaje.

## Perspectiva sectorial

**Startup.** Una empresa pequeña a menudo no tiene ningún SLA formal, solo una promesa informal a unos pocos clientes tempranos. Escribe una página que nombre el horario del servicio, un objetivo de respuesta y un objetivo de restablecimiento expresado como percentil, y mantén un SLO dentro del equipo. Las conversaciones con clientes sustituyen a un XLA, así que anota cada mes lo que dicen los tres clientes más importantes.

**Pequeña empresa.** Un equipo de TI pequeño suele depender mucho de proveedores externos, de modo que los contratos de respaldo importan más que los OLA internos. Comprueba que el compromiso de cada proveedor sea al menos tan estricto como el SLA que das a tus propios usuarios, y haz seguimiento del rendimiento real del proveedor (véase el tema 8.4, Métricas de proveedores y contratos). Una sencilla página mensual, con cumplimiento, casi fallos y una breve encuesta a usuarios, es suficiente.

**Gran empresa.** Las grandes organizaciones necesitan un registro de acuerdos y una métrica de cobertura. Estandariza las reglas del reloj y las definiciones entre servicios para que las consolidaciones sean significativas (véase el tema 1.4, Gobernanza y propiedad de las métricas). Cuidado con el efecto sandía en las consolidaciones de la dirección, donde cientos de líneas verdes esconden unos pocos servicios con un dolor serio para los usuarios.

**Gobierno y sector público.** Los organismos públicos suelen tener normas de servicio legales, reglas de contratación que fijan SLA en los contratos y el deber de publicar resultados. Mantén clara y verificable la medida publicada, conserva las reglas del reloj y la evidencia para la auditoría y trata a los ciudadanos como clientes con voz en la revisión (véase el tema 8.5, Informes regulatorios y gubernamentales). Donde el contrato es rígido, añade una medida de experiencia a su lado sin cambiar la redacción del contrato.

## Caso de negocio: motivaciones, ROI y TCO

El argumento a favor de mejores métricas de acuerdos es un argumento de confianza y de evitar esfuerzo desperdiciado. Los informes que coinciden con cómo se sienten los usuarios reducen las escaladas y las disputas, acortan la discusión mensual sobre de quién es el número correcto y permiten a los líderes financiar el trabajo que importa. Unos OLA claros reducen los retrasos de traspaso, que figuran entre los mayores contribuyentes a los restablecimientos largos. Una brecha sandía detectada a tiempo evita el mayor costo de que una relación con un cliente o una renovación de contrato salgan mal.

Los costos son modestos: tiempo para redactar y revisar los acuerdos, datos fiables de reloj y de traspasos (véase el tema 1.5, Fuentes de datos e instrumentación), una breve encuesta y una revisión mensual. El costo total crece con el número de acuerdos, así que unos pocos y más sencillos son más baratos de poseer.

El retorno aparece como menos incumplimientos sorprendentes, menos tiempo dedicado a explicar informes y decisiones de inversión mejor informadas. Trátalos como patrones que observar y comparar a lo largo del tiempo, no como un cálculo. Compara el esfuerzo de una revisión mensual con el costo de una disputa escalada o de una renovación perdida en tu propia organización, usando tus propios datos (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Reportar solo promedios.** Un promedio esconde una larga cola de trabajo tardío. Reporta percentiles, la proporción de casi fallos y el recuento.
- **Escribir el SLA en torno a lo que es fácil de alcanzar.** Un objetivo elegido por comodidad da un informe siempre verde. Parte de lo que el cliente necesita y muestra abiertamente la brecha.
- **Pausar el reloj para mejorar el número.** Los estados de pausa generosos convierten el SLA en ficción. Publica las reglas de pausa, audita muestras y reporta la proporción de pausa.
- **Los OLA como arma.** Un OLA usado para culpar al equipo siguiente enseña a los equipos a rebotar el trabajo. Trata los incumplimientos como información sobre la cola y corrige el flujo.
- **Reporte guiado por las penalizaciones.** Las penalizaciones fuertes fomentan la clasificación defensiva y las disputas sobre el reloj. Úsalas con moderación y empareja con las tasas de reapertura y de reclasificación.
- **Datos de experiencia sin tasa de respuesta.** Una puntuación alta de una muestra diminuta y autoseleccionada engaña. Muestra la tasa de respuesta y la composición de los encuestados junto a cada resultado.
- **Acuerdos que nadie revisa.** Los acuerdos obsoletos describen un servicio que ya no existe. Programa revisiones y retira lo que no se usa.
- **Objetivos individuales a partir de acuerdos de equipo.** Dividir un SLA de equipo en cuotas personales lleva a cierres apresurados y a clasificaciones. Mantén el acuerdo al nivel del servicio y del equipo.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Diseño de los acuerdos | Promesas verbales o plantillas copiadas; objetivos elegidos por costumbre | Algunos SLA escritos; OLA escasos; relojes distintos entre equipos | Una plantilla breve con objetivos basados en resultados, percentiles y reglas de reloj escritas | Acuerdos revisados con una cadencia, con el cliente y atados a los SLO | Capas de SLA, OLA, contrato de proveedor y SLO ajustadas conjuntamente según cambian las condiciones |
| Calidad de la medición | Recuentos manuales; promedios; pausas sin documentar | Cumplimiento basado en herramientas para algunos servicios; uso de pausas sin revisar | Una definición y una fuente de datos; se muestran distribuciones y proporción de pausa | Casi fallos, causas de incumplimiento y esperas de traspaso con tendencias y muestreados | Datos entre equipos y proveedores conciliados; definiciones revisadas cuando dejan de informar decisiones |
| Vínculo con la experiencia | Sin retroalimentación de usuarios atada al SLA | Encuestas ad hoc para algunos servicios | Una breve encuesta para los recorridos clave, con la tasa de respuesta mostrada | Objetivos de experiencia acordados con los clientes y brecha sandía reportada | Las medidas de experiencia y operativas orientan el trabajo de mejora compartido con los clientes |
| Uso en la mejora | Reportado tras una queja | Incumplimientos comentados en reuniones de equipo | Revisión mensual con responsables y acciones | Las causas de incumplimiento alimentan mejoras financiadas y trabajo de problemas | Clientes, proveedores y equipos planifican la mejora juntos desde la misma vista |

## Lista de verificación

- [ ] Cada SLA indica su resultado, su objetivo como percentil o proporción y su población.
- [ ] El evento de inicio, el evento de parada y las condiciones de pausa permitidas están escritos para cada objetivo.
- [ ] Cada SLA de cara al cliente tiene OLA o contratos de proveedores que encajan dentro de él, cada uno con un equipo propietario con nombre.
- [ ] Los objetivos internos son más estrictos que los objetivos prometidos del SLA.
- [ ] Los informes muestran la distribución, el recuento, la proporción de casi fallos y la proporción de pausa del reloj.
- [ ] Cada mes se lee una muestra de tickets pausados y cerrados.
- [ ] Cada servicio clave tiene una medida de experiencia con un nivel acordado y se muestra la tasa de respuesta.
- [ ] La brecha sandía se sigue y se revisa con un representante del cliente.
- [ ] Los acuerdos se revisan según un calendario y se retiran cuando no se usan.
- [ ] Ninguna métrica de acuerdos se usa para clasificar a personas individuales.

## Prompts de IA

**Revisa un SLA en busca de problemas de reloj y de redacción.**

```text
Here is the text of our SLA for [service]: [paste agreement text]. The targets
are [list of targets], measured in [tool]. Identify ambiguities in the start
event, stop event, and pause conditions, places where an average could hide a
long tail, and wording a customer could read differently from us. Suggest
clearer wording and the questions I should ask the customer. Do not invent
benchmark values or legal conclusions. List your assumptions.
```

**Redacta un OLA entre dos equipos.**

```text
I need a short operational level agreement between [sending team] and
[receiving team] to support our SLA of [SLA target] for [service]. The typical
hand-off is [description], and the queue is [queue name or tool]. Draft a one
page OLA with the purpose, the expected response, the clock rules, a way to
settle disputes, and a review date. Keep the tone cooperative and do not suggest
penalties unless I ask. Do not invent target values; ask me for them. List your
assumptions.
```

**Busca una brecha sandía en nuestros datos.**

```text
Here is a summary of SLA attainment and an experience measure for [list of
services] over [period]: [paste the table]. Identify services where the SLA reads
as met and experience reads as poor, and suggest possible explanations to
investigate, such as clock pauses, priority reclassification, or a poorly chosen
measure. Propose questions and a small sample of tickets to read for each. Do not
assume causes or invent thresholds. List your assumptions.
```

**Diseña una breve encuesta de experiencia para un XLA.**

```text
We want to add an experience measure for [journey, for example getting a new
laptop] for [audience]. Draft [number] neutral questions, a plan for when and how
to send them, and how to report the response rate and respondent mix. Flag
wording that could bias answers and suggest how to agree the target level with
[customer representative role]. Do not invent benchmark scores. List your
assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar qué tema define la métrica que hay detrás de una línea del SLA y la barrera de protección que debe ir a su lado.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen alineados la plantilla, las reglas del reloj y la tabla de manipulación.

## Ideas clave

- Un SLA es una promesa al cliente, un OLA es una promesa entre equipos y un XLA es un resultado de experiencia acordado; cada uno necesita su propia medida y su responsable.
- Reporta percentiles, recuentos, casi fallos y la proporción de pausa del reloj, porque los promedios y las pausas silenciosas producen informes en verde sobre un servicio pobre.
- Deriva los OLA del SLA y mantén los objetivos internos más estrictos que la promesa.
- Empareja cada SLA con una medida de experiencia del mismo recorrido y reporta la brecha sandía como un hallazgo sobre el que actuar.
- Revisa los acuerdos según un calendario con el cliente en la sala y retira lo que nadie usa.
- Mantén cada métrica de acuerdos al nivel de servicios y equipos, nunca de individuos.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Operational-level agreement](https://en.wikipedia.org/wiki/Operational-level_agreement).
10. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
11. Wikipedia, [Service level objective](https://en.wikipedia.org/wiki/Service_level_objective).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
