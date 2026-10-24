# Métricas de observabilidad y telemetría

**La observabilidad es la capacidad de hacer preguntas nuevas a un servicio en ejecución y obtener respuestas de sus propias señales, así que mide cuánto del servicio puedes ver, cuán buenas son las señales, con qué rapidez llevan a la comprensión y cuánto cuesta la telemetría, en lugar de contar paneles o volumen de datos.**

## Visión general y motivación

La [observabilidad](https://en.wikipedia.org/wiki/Observability_(software)) es una propiedad de un sistema: lo bien que puede entenderse su estado interno a partir de las salidas que produce. En la práctica esas salidas se llaman [telemetría](https://en.wikipedia.org/wiki/Telemetry) y suelen agruparse en tres clases. Los **registros (logs)** son anotaciones de eventos discretos. Las **métricas** son mediciones numéricas a lo largo del tiempo, como la tasa de peticiones o la tasa de errores. Las **trazas** siguen una sola petición a través de las partes de un sistema distribuido. Muchos equipos añaden perfiles, eventos del dispositivo del usuario y eventos de negocio.

La monitorización hace preguntas conocidas, como «¿está la tasa de errores por encima de un umbral?», y alerta cuando la respuesta es sí. La observabilidad pretende permitir que un equipo haga preguntas que no había planificado, como «¿por qué son lentas las peticiones de esta región para este segmento de clientes?». Ambas hacen falta. La monitorización se cubre en temas anteriores (véase el tema 5.5, Métricas de monitorización y calidad de las alertas). Este tema cubre la calidad de las propias señales y la práctica de entender los sistemas a partir de ellas.

La telemetría tiene costos y riesgos. Recoger todo es caro en almacenamiento y en dinero, y puede captar datos personales o confidenciales. Recoger demasiado poco deja a un equipo a ciegas durante un incidente. La telemetría son además datos en el sentido del tema anterior (véase el tema 10.8, Métricas de analítica y calidad de datos), así que plantea preguntas de completitud, puntualidad y linaje. Y como las herramientas de IA leen la telemetría para resumir incidentes y sugerir causas, la calidad de las señales decide si el resumen es correcto.

Términos usados aquí. Una **señal** es un flujo de telemetría, como un registro, una métrica o una traza. La **instrumentación** es el código que produce señales. La **cardinalidad** es el número de valores distintos de una etiqueta en una métrica, y una cardinalidad alta aumenta el costo. Un **indicador de nivel de servicio (SLI)** mide un aspecto del servicio tal como lo experimentan los usuarios (véase el tema 5.2, SLI, SLO y presupuestos de errores). El **muestreo** conserva solo una parte de los datos, lo que ahorra costo y pierde detalle. La **retención** es cuánto tiempo se conservan los datos. La **correlación** significa vincular señales que describen la misma petición o evento, mediante identificadores compartidos.

## Principios clave

- **Instrumenta para preguntas, no para volumen.** Elige señales que respondan a preguntas sobre la experiencia del usuario y el comportamiento del sistema.
- **Mide lo que puedes ver y lo que no.** La cobertura de servicios y recorridos muestra los puntos ciegos.
- **Las señales deben estar vinculadas.** Los identificadores que conectan un registro, una traza y una métrica hacen rápida la comprensión.
- **La telemetría es un costo y un riesgo.** Presupuéstala y mantén fuera los datos personales y confidenciales salvo que haya un motivo y una regla.
- **La observabilidad sirve a las personas.** Mide el tiempo hasta entender y la experiencia de las personas de guardia.
- **Los estándares abiertos reducen el bloqueo.** Prefiere formatos comunes de instrumentación donde encajen y comprueba las especificaciones vigentes.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de instrumentación | Proporción de servicios y recorridos críticos de usuario que emiten las señales básicas acordadas | servicios o recorridos con registros, métricas y trazas que cumplen el estándar acordado / servicios o recorridos del catálogo de servicios | porcentaje | Catálogo de servicios e inventario de la plataforma de telemetría | Monitorización y gestión de eventos; gestión de la configuración de servicios | Definición de terminado para los servicios nuevos | Trimestral |
| Completitud de las trazas | Proporción de peticiones muestreadas con una traza ininterrumpida desde la entrada hasta la última dependencia | peticiones cuya traza abarca todos los saltos esperados / peticiones de una muestra comprobada | porcentaje | Plataforma de trazado y una comprobación muestreada | Monitorización y gestión de eventos | Prueba de observabilidad en una función | Mensual |
| Tasa de correlación de señales | Proporción de incidentes en que los registros, las métricas y las trazas pudieron unirse mediante un identificador | incidentes con una unión que funciona en la revisión de la cronología / incidentes revisados | porcentaje | Revisiones de incidentes y plataforma de trazado | Gestión de incidentes; gestión de problemas | Acciones de retrospectiva | Trimestral |
| Tiempo hasta entender | Tiempo desde la detección hasta una explicación funcional registrada de la causa | mediana y percentil 85 de (momento en que se registra la primera causa funcional menos momento en que se detectó el incidente) para los incidentes con una causa registrada | minutos | Cronología del incidente y notas de revisión | Gestión de incidentes | Revisión sin culpas | Trimestral |
| Costo de telemetría por servicio | Gasto en telemetría atribuido a un servicio, por unidad de uso del servicio | costo de telemetría asignado al servicio / una unidad de uso declarada, como 1000 peticiones | moneda por unidad | Facturación y datos de uso de la telemetría | Gestión financiera | El costo como insumo de diseño | Mensual |
| Datos sensibles en la telemetría | Número de registros confirmados que contienen datos que no deberían estar ahí | casos confirmados hallados mediante análisis o revisión en el periodo | recuento | Análisis y revisiones de telemetría | Gestión de la seguridad de la información | Definición de terminado; revisión de privacidad | Mensual |
| Incidentes en puntos ciegos | Incidentes reportados primero por los usuarios en que la telemetría no mostraba ninguna señal | incidentes reportados primero por los usuarios sin alerta ni señal relacionada / incidentes del periodo | porcentaje | Registros de incidentes y notas de revisión | Gestión de incidentes; monitorización | Acciones de retrospectiva | Trimestral |

La cobertura de instrumentación depende de un estándar básico acordado, como la tasa de peticiones, la tasa de errores, la latencia y un identificador de traza, declarado en el registro de métricas. El tiempo hasta entender cuenta solo los incidentes en que se registró una causa, así que los incidentes sin causa conocida se reportan aparte.

## Recomendaciones

### Decide qué ver

**1. Parte de los recorridos de usuario y de los niveles de servicio.** Enumera los recorridos que importan y los indicadores que muestran si los usuarios tienen éxito. Instrumenta esos primero, ya que vinculan la telemetría con los resultados (véase el tema 5.2, SLI, SLO y presupuestos de errores).

**2. Acuerda un estándar básico.** Define las señales mínimas que emite todo servicio y las convenciones de nombres y de identificadores. Pon el estándar en la definición de terminado de los servicios nuevos.

**3. Cartografía la cobertura con honestidad.** Compara el catálogo de servicios con los servicios que emiten las señales básicas. Enumera las brechas y sus responsables y aborda primero las de mayor impacto en los usuarios.

### Haz útiles las señales

**4. Vincula las señales con identificadores compartidos.** Pasa un identificador de petición o de traza por los registros, las métricas y las trazas para que una persona pueda pasar de una petición lenta a las líneas de registro exactas. Pruébalo en un simulacro.

**5. Prueba la instrumentación como código.** Una traza que se rompe en una cola, o un registro con la zona horaria equivocada, malgasta un incidente. Comprueba la completitud con peticiones muestreadas y corrige las roturas.

**6. Controla la cardinalidad y el muestreo de forma deliberada.** Las etiquetas de alta cardinalidad pueden crear grandes costos, y el muestreo puede descartar el evento raro que necesitas. Decide dónde muestrear, anota la tasa y conserva los datos completos de errores y peticiones lentas donde sea asequible.

**7. Mantén fuera los datos sensibles.** Decide qué no debe aparecer en registros y trazas, como datos personales, credenciales y detalles de salud o de pago. Analízalos y corrige el origen. Comprueba las obligaciones con tu asesor jurídico, ya que este libro no da asesoramiento jurídico.

### Mide la comprensión

**8. Mide el tiempo hasta entender, y no solo el tiempo hasta arreglar.** El tiempo desde la detección hasta una explicación funcional muestra lo bien que las señales apoyan a las personas. Revisa los casos más largos para ver qué señal faltaba.

**9. Cuenta los puntos ciegos.** Los incidentes que los usuarios encontraron primero son la evidencia más clara de una brecha. Para cada uno, pregunta qué señal lo habría mostrado y añádela.

**10. Revisa los paneles y las alertas por su uso.** Retira los paneles que nadie abre y las alertas que nunca llevan a una acción (véase el tema 5.5, Métricas de monitorización y calidad de las alertas). Un conjunto menor en que la gente confíe supera a un muro de gráficos.

### Gestiona el costo y los estándares

**11. Presupuesta y atribuye el costo de la telemetría.** Asigna el costo a los servicios y vigila la tendencia. Fija la retención por valor: conserva el detalle poco tiempo, los resúmenes más tiempo y borra lo que no tiene uso.

**12. Prefiere los estándares abiertos donde encajen.** Los formatos comunes de instrumentación y de datos, como los que mantiene el proyecto OpenTelemetry, facilitan cambiar de herramientas. Comprueba la especificación vigente y el soporte de tus herramientas antes de comprometerte, ya que los estándares y los productos cambian.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Cobertura de instrumentación | Añadir una señal mínima a cada servicio para pasar el estándar; excluir del catálogo los servicios difíciles | Completitud de las trazas e incidentes en puntos ciegos; revisar el catálogo en busca de omisiones |
| Completitud de las trazas | Muestrear solo peticiones sencillas; contar las trazas parciales como completas | Definir la muestra de comprobación por tipo de petición; comprobar la cobertura de dependencias |
| Tasa de correlación de señales | Revisar solo los incidentes que salieron bien; contar una unión que existe sobre el papel | Revisar una muestra aleatoria de incidentes; ejecutar un simulacro de unión |
| Tiempo hasta entender | Registrar una causa pronto y de forma laxa; dejar la causa en blanco en los casos difíciles | Revisar la calidad de los registros de causas; reportar aparte los incidentes sin causa |
| Costo de telemetría por servicio | Descartar señales para recortar el costo; trasladar el costo a otra cuenta | Incidentes en puntos ciegos y tiempo hasta entender; conciliar el gasto total |
| Datos sensibles en la telemetría | Analizar de forma demasiado estrecha; no reportar los hallazgos | Cobertura del análisis y revisión independiente; seguimiento del tiempo hasta eliminarlos |
| Incidentes en puntos ciegos | Contar un incidente como detectado cuando una alerta saltó después de que lo reportaran los usuarios; definir la señal de forma amplia | Comparar las marcas de tiempo de la primera señal y del primer reporte de usuario; muestrear revisiones |

Una lectura sana es una cobertura que sube con el número de trazas y uniones completas, una proporción a la baja de incidentes encontrados primero por los usuarios, un tiempo hasta entender que baja sin recortar señales, un costo de telemetría comprendido y atribuido y hallazgos de datos sensibles que se corrigen rápido.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Recoger todo y conservarlo mucho tiempo | Máxima capacidad de investigación | Alto costo y riesgo; difícil de buscar |
| Muestrear y conservar poco tiempo | Menor costo | Puede perder eventos raros e incidentes antiguos |
| Instrumentación estándar entre servicios | Coherente; comprensión más rápida | Esfuerzo de adopción; puede no encajar con todos los servicios |
| Instrumentación elegida por el equipo | Se ajusta a las necesidades locales | Incoherente; difícil unir las señales |
| Resúmenes de telemetría hechos por IA | Primera visión más rápida | Pueden ser erróneos; dependen de la calidad de las señales |

La conclusión en prosa es conservar datos ricos de los errores y de las peticiones lentas, muestrear lo rutinario y fijar la retención por valor. Un conjunto modesto, coherente y vinculado de señales supera a un gran montón sin vincular.

## Preguntas para debatir con tu equipo

**1. Durante nuestro último incidente, ¿qué queríamos saber que no pudimos averiguar?**
Esto revela la señal que falta. Pidan a las personas que recuerden la pregunta y dónde miraron. Esperen respuestas como «qué clientes se vieron afectados» o «qué cambió». Después decidan quién añade la señal y cómo probarla.

**2. Para nuestro recorrido de usuario más importante, ¿cómo sabríamos que estaba fallando?**
Recorran el recorrido paso a paso. Pregunten qué señal muestra el éxito en cada paso y con qué rapidez. Busquen pasos sin señal. Después añadan un indicador para el paso más débil.

**3. ¿Podemos seguir una petición desde el clic del usuario hasta la base de datos y de vuelta?**
Pruébenlo en vivo. Noten dónde se rompe la traza, por ejemplo en una cola o en una llamada a un tercero. Pregunten cuánto se tarda en encontrar las líneas de registro correspondientes. Después corrijan la mayor rotura.

**4. ¿Cuánto gastamos en telemetría y qué obtenemos a cambio?**
Muchos equipos no conocen el costo por servicio. Pregunten qué señales se han usado en el último trimestre. Hablen de qué podría muestrearse o borrarse sin daño. Después elijan una señal para revisar.

**5. ¿Qué información sensible podría haber hoy en nuestros registros y trazas?**
Busquen ejemplos juntos. Los casos comunes son las direcciones de correo, los tokens y los campos de texto libre. Pregunten cómo llegó allí y quién puede leerla. Después acuerden una regla y un análisis.

**6. ¿Cómo usamos las herramientas de IA sobre nuestra telemetría y quién comprueba lo que dicen?**
Escuchen si hay resúmenes de incidentes sin comprobar. Pregunten qué datos se envían a una herramienta y bajo qué términos. Hablen de cómo verifica una persona una causa sugerida. Después escriban una regla breve.

## Cuatro perspectivas

### Equipos de producto y de entrega

Ustedes deciden qué emite un servicio. Añadan instrumentación a medida que construyen, incluyan el identificador que vincula las señales y pruébenla como parte del trabajo. Traten la falta de observabilidad como un defecto, ya que el próximo incidente la pagará.

### Equipos de servicio y de operaciones

Ustedes usan la telemetría bajo presión. Digan al equipo qué señales ayudaron y cuáles faltaron, y mantengan las alertas atadas al impacto en los usuarios. Hagan seguimiento del tiempo hasta entender y de los incidentes en puntos ciegos y llévenlos al equipo de producto.

### Liderazgo y gobernanza

Financien la observabilidad como parte del servicio, con presupuestos para la telemetría y para corregir las brechas. Pidan la cobertura, los incidentes en puntos ciegos y las tendencias de costo, no el recuento de paneles. Fijen reglas para los datos sensibles y para el uso de herramientas de IA sobre la telemetría.

### Clientes y usuarios

Ustedes suelen ser los primeros en notar un problema, así que pregunten cómo reportarlo y con qué rapidez se vinculará con las señales del servicio. Sus reportes reducen los puntos ciegos, y debe decírseles lo que se aprendió. Pregunten qué telemetría se recoge sobre ustedes y por qué.

## En la práctica: un ejemplo de gestión de servicios

Un minorista en línea mediano opera un servicio de pago formado por ocho servicios menores. Los números de este ejemplo son ilustrativos. Los clientes reportan fallos ocasionales en el pago, pero los paneles muestran tasas de error sanas y una latencia normal.

El equipo mide. La cobertura de instrumentación es de 6 de 8 servicios que cumplen el estándar básico. Una comprobación de 50 peticiones de pago muestreadas muestra una completitud de las trazas del 62 por ciento, porque la traza se rompe en una cola de mensajes y en una llamada de pago a un tercero. En los últimos seis incidentes, la tasa de correlación de señales es de dos de seis, porque los registros usan un identificador de petición distinto del de las trazas. Los incidentes en puntos ciegos son tres de seis.

El equipo pasa un único identificador de petición por la cola y los registros, añade un tramo de traza alrededor de la llamada de pago e instrumenta los dos servicios que faltaban. Tras un mes, la completitud de las trazas llega a aproximadamente el 90 por ciento en la comprobación muestreada y el siguiente incidente tiene una explicación funcional en 35 minutos, frente a varias horas antes. Analizan además los registros y encuentran direcciones de correo de clientes en un mensaje de error, que eliminan en el origen, y los hallazgos de datos sensibles bajan a cero en el mes siguiente.

Aparece un riesgo de manipulación. Un gerente pide subir la cobertura de instrumentación marcando los dos servicios restantes como «fuera de alcance». El equipo lo declina, porque el recuento de incidentes en puntos ciegos seguiría alto, y anota la brecha con un responsable. Lo que sigue siendo difícil: el costo de telemetría por petición de pago ha subido, y el equipo aún no ha decidido cuánto tiempo conservar las trazas. El plan del trimestre siguiente es muestrear las trazas rutinarias y conservar el detalle completo de los errores.

## Agilidad, IA, automatización y analítica

### Agilidad

Incluye la observabilidad en la definición de terminado, para que cada incremento de un servicio pueda entenderse en producción. Una buena práctica es revisar las señales que faltaron en el último incidente en la conversación regular de mejora y añadirlas como elementos de la lista de pendientes. La precaución es que el trabajo de observabilidad suele aplazarse en favor de funciones, así que hazlo visible y protege tiempo para él.

### IA

La IA puede resumir telemetría, correlacionar señales y sugerir causas, y las propias funciones de IA necesitan telemetría, como entradas, salidas, latencia, costo y retroalimentación de los usuarios. Empareja las causas sugeridas por la IA con una comprobación humana y reporta con qué frecuencia acertaron, y monitoriza las funciones de IA por su calidad además de por su disponibilidad (véase el tema 10.1, La IA en la medición de la gestión de servicios). La precaución es que los prompts y las respuestas en los registros pueden contener datos personales, así que decide qué registrar antes de empezar.

### Automatización

Automatiza la recogida, la correlación y las alertas, y automatiza las comprobaciones de cobertura y de datos sensibles. Mide el propio pipeline de telemetría por los datos perdidos y el retraso, ya que un pipeline roto parece un sistema sano. La precaución es que una remediación automática que actúa sobre una señal puede enmascarar la causa, así que registra lo que hizo.

### Analítica

Usa la telemetría para responder preguntas sobre la experiencia del usuario y el comportamiento del sistema, con SLI vinculados a los resultados. La decisión a la que informa es dónde invertir en señales y dónde reducir el costo. La precaución es que el volumen de datos no es comprensión, y las métricas agregadas pueden esconder a los usuarios que salen perjudicados, así que comprueba las distribuciones y los segmentos y muestra el número de eventos detrás de cada cifra (véase el tema 10.8, Métricas de analítica y calidad de datos).

## Perspectiva sectorial

**Startup.** Empieza con unas pocas señales en el recorrido principal del usuario y un identificador de traza en los registros. Evita comprar una gran plataforma antes de que las preguntas estén claras y vigila el costo a medida que crece el uso.

**Pequeña empresa.** Los servicios alojados suelen ofrecer una telemetría limitada. Pregunta a los proveedores qué puedes ver y conserva una comprobación externa sencilla del recorrido principal. Evita recoger datos personales en los registros.

**Gran empresa.** Muchos equipos y herramientas necesitan un estándar compartido, identificadores compartidos y una atribución central del costo. Permite que los equipos añadan señales dentro del estándar y gestiona de forma central la retención y el acceso.

**Gobierno y sector público.** Las reglas sobre ubicación de los datos, conservación y acceso dan forma a lo que puedes recoger y a dónde se almacena. Documenta los flujos de datos de la telemetría y comprueba las obligaciones con asesores jurídicos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el trabajo de instrumentación, las cuotas de la plataforma o del servicio, el almacenamiento según el periodo de retención y el tiempo del personal para mantener estándares y paneles. El costo de la telemetría puede crecer rápido con el volumen y la cardinalidad, así que presupuéstalo y atribúyelo.

El retorno es una comprensión más rápida en los incidentes, menos incidentes encontrados primero por los usuarios y mejores decisiones sobre dónde mejorar. Estos beneficios son reales y difíciles de valorar, así que evita inventar una cifra. Compara tu propio tiempo hasta entender y tu proporción de incidentes en puntos ciegos antes y después del trabajo, y declara los supuestos como rangos (véase el tema 7.7, Retorno de la inversión y caso de negocio). El lado del riesgo es el costo de una fuga de datos a través de la telemetría y el costo de una telemetría que nunca se usa.

## Antipatrones y trampas

- **Contar paneles.** Más gráficos no significan más comprensión. Mide la cobertura, las uniones y el tiempo hasta entender.
- **Recoger todo para siempre.** El costo y el riesgo crecen con poco uso. Fija la retención por valor.
- **Señales sin vincular.** Los registros, las métricas y las trazas que no pueden unirse frenan cada incidente. Pasa identificadores compartidos.
- **Muestrear hasta perder el evento raro.** El fallo que necesitas es el que descartaste. Conserva los errores y las peticiones lentas.
- **Datos sensibles en los registros.** Se propagan y son difíciles de eliminar. Analiza y corrige el origen.
- **Alertas en cada señal.** El ruido enseña a la gente a ignorar las alertas. Alerta por el impacto en el usuario.
- **Confiar sin comprobar en los resúmenes de IA.** Pueden ser erróneos y las señales pueden estar incompletas. Verifica frente a los datos.
- **La instrumentación como trabajo de otro.** Las personas que escriben el código saben qué emitir. Hazlo parte del trabajo.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Cobertura y estándar | Las señales varían según el equipo; puntos ciegos desconocidos | Servicios principales instrumentados | Estándar básico y cobertura con seguimiento frente al catálogo | Incidentes en puntos ciegos revisados y brechas cerradas | Cobertura incorporada a la creación de servicios y ajustada según el impacto en el usuario |
| Calidad de las señales y vinculación | Solo registros; sin identificadores compartidos | Algunas trazas y métricas | Identificadores compartidos; completitud de las trazas comprobada | Tiempo hasta entender revisado; simulacros ejecutados | Las señales se adaptan automáticamente a las preguntas que se hacen |
| Costo y gobernanza | Costo desconocido; sin reglas de datos | Costo visible en conjunto | Costo atribuido; reglas de retención y de datos sensibles | Costo y hallazgos de datos revisados con una cadencia | Costo y riesgo de la telemetría gestionados por valor entre equipos |

## Lista de verificación

- [ ] Un estándar de señales básicas está escrito y forma parte de la definición de terminado.
- [ ] La cobertura de instrumentación se sigue frente al catálogo de servicios.
- [ ] Un identificador de petición o de traza vincula registros, métricas y trazas.
- [ ] La completitud de las trazas se comprueba en una muestra de peticiones reales.
- [ ] El tiempo hasta entender se registra para los incidentes, con la causa.
- [ ] Los incidentes en puntos ciegos se cuentan y cada uno lleva a una señal.
- [ ] El costo de la telemetría se atribuye a los servicios y la retención se fija por valor.
- [ ] Los datos sensibles en la telemetría se buscan y se corrigen en el origen.
- [ ] Existen reglas para las herramientas de IA que leen telemetría.
- [ ] Cada métrica tiene un vector de manipulación y una barrera de protección mostrados a su lado.

## Prompts de IA

**Diseña un estándar de señales básicas.**

```text
Our service is [description], made of [number] components in [technologies]. Our
most important user journeys are [list]. Propose a core signal standard: the
minimum logs, metrics, and traces each component should emit, the naming and
identifier conventions, and how to check conformance. Do not recommend specific
vendors unless I name them. Mark assumptions and list questions I should answer.
```

**Encuentra brechas de observabilidad a partir de una revisión de incidente.**

```text
Here is a summary of a recent incident, with timeline and notes (personal data
removed): [paste]. Identify moments where the team lacked a signal, could not
link signals, or relied on a guess. For each, propose the signal or link that
would have helped, as a suggestion for the team to evaluate. Do not assert
causes that the text does not support. List what you could not judge and your
assumptions.
```

**Planifica un análisis de datos sensibles en la telemetría.**

```text
We keep logs and traces in [tools]. Draft a plan to find sensitive data in them:
categories of data to look for, where to look, how to sample, how to report
findings, and how to fix at the source. Do not state legal requirements; list
questions for our legal adviser. List assumptions and what you would need access
to.
```

**Revisa el riesgo de manipulación de las medidas de observabilidad.**

```text
We report these observability measures: [paste measures and definitions].
Context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without improving understanding, propose a guardrail, and say
how that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## Skills de IA

- [Anomaly analysis](../../../../skills/anomaly-analysis/SKILL.md): úsalo para examinar patrones inusuales en la telemetría antes de decidir una causa.
- [Root cause analysis](../../../../skills/root-cause-analysis/SKILL.md): úsalo para convertir señales y cronologías en una explicación contrastada.
- [Service level agreement](../../../../skills/service-level-agreement/SKILL.md): úsalo para conectar los indicadores con los acuerdos y objetivos a los que sirven.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema que cubre una métrica y su barrera de protección emparejada.

## Ideas clave

- La observabilidad consiste en poder hacer preguntas nuevas a un servicio en ejecución, así que mide la cobertura, las señales vinculadas y el tiempo hasta entender.
- Los incidentes que los usuarios encuentran primero son la evidencia más clara de puntos ciegos, así que cuéntalos y añade señales.
- Los identificadores compartidos entre registros, métricas y trazas son lo que hace rápida la comprensión.
- La telemetría cuesta dinero y puede filtrar datos sensibles, así que presupuéstala, fija la retención por valor y analiza el contenido sensible.
- Comprueba los resúmenes de telemetría de la IA frente a los datos, ya que dependen de la calidad de las señales.

## Referencias y lecturas complementarias

1. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
2. Wikipedia, [Telemetry](https://en.wikipedia.org/wiki/Telemetry).
3. Wikipedia, [Distributed tracing](https://en.wikipedia.org/wiki/Tracing_(software)).
4. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
5. Wikipedia, [Log management](https://en.wikipedia.org/wiki/Log_management).
6. Wikipedia, [Service-level indicator](https://en.wikipedia.org/wiki/Service-level_indicator).
7. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
