# Métricas de pipelines y cambio automatizado

**Un pipeline de entrega es a la vez la vía por la que los cambios llegan a los usuarios y la fuente de la evidencia de que son seguros, así que mide su velocidad, su fiabilidad, cuánta aprobación de cambios gestiona y si la evidencia que produce convencería a un auditor, y lee todo ello como medidas de un sistema, nunca de las personas que lo usan.**

## Visión general y motivación

Un pipeline de [integración continua](https://en.wikipedia.org/wiki/Continuous_integration) y [entrega continua](https://en.wikipedia.org/wiki/Continuous_delivery) lleva un cambio desde el trabajo de un desarrollador hasta un servicio en ejecución mediante la construcción, las pruebas, las comprobaciones de seguridad y el despliegue automatizados. Cuando se confía en un pipeline, este puede además tomar las decisiones que antes tomaba un comité asesor de cambios para los cambios rutinarios. ITIL llama a la práctica de gestionar el cambio «habilitación de cambios», y su fin es permitir que los cambios beneficiosos ocurran con seguridad y rapidez. Un pipeline que ejecuta comprobaciones, registra la evidencia y aprueba automáticamente los cambios de bajo riesgo es una forma de cumplir ese fin.

Por tanto, el pipeline es dos cosas a la vez. Es un sistema de producción, con su propia disponibilidad, velocidad y fallos, y es un control, con evidencia de lo que se probó, quién revisó y qué se aprobó. Ambas cosas necesitan medirse. Un pipeline rápido que se salta comprobaciones es un riesgo. Un pipeline lento e inestable empuja a la gente a esquivarlo, y los cambios esquivados escapan a todos los controles que el pipeline debía ofrecer.

Este tema complementa las medidas de cambio de la Parte 4 (véase el tema 4.3, Métricas de habilitación de cambios, y el tema 4.4, Fallos de cambio y retrabajo) y las medidas de versiones (véase el tema 4.5, Métricas de versiones y despliegues) al centrarse en el pipeline como sistema. Complementa las medidas DORA (véase el tema 2.8, Métricas DORA) al mirar lo que ocurre dentro del pipeline. Se relaciona además con las medidas generales de automatización del tema 10.6 (véase el tema 10.6, Métricas de automatización y orquestación).

Términos usados aquí. Una **ejecución del pipeline** es una ejecución del pipeline para un cambio. Una **etapa** es un paso del pipeline, como la construcción o las pruebas. Una **prueba inestable (flaky)** es una prueba que a veces pasa y a veces falla sobre el mismo código. Una **elusión (bypass)** es un cambio que llega a producción sin pasar por el pipeline, por ejemplo mediante un despliegue manual de emergencia. **Política como código** significa escribir reglas, como «ningún despliegue sin un análisis de seguridad superado», como software que hace cumplir el pipeline. La **evidencia** es la prueba registrada de por qué pasó un cambio. Un **cambio estándar** en ITIL es un tipo de cambio de bajo riesgo, bien comprendido y preaprobado.

## Principios clave

- **El pipeline es un servicio.** Mide su fiabilidad, su velocidad y sus fallos como harías con cualquier sistema de producción, y dale un responsable.
- **Mide la elusión.** El número de cambios que evitan el pipeline muestra cuánto puede confiarse en el pipeline.
- **Automatiza la aprobación según el riesgo, con evidencia.** Preaprueba lo que está bien comprendido y conserva la revisión humana para lo que no.
- **La evidencia es un producto.** Lo que registra el pipeline debe responder a las preguntas de un auditor sin carreras.
- **Lo rápido y lo seguro se miden juntos.** Las medidas de velocidad se emparejan con el fallo y el retrabajo.
- **Describe sistemas, no personas.** Los datos del pipeline sobre quién empujó un cambio no son una clasificación del rendimiento.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de éxito del pipeline | Proporción de ejecuciones del pipeline que terminan sin un fallo causado por el pipeline o su entorno | ejecuciones que pasan o fallan solo por un defecto genuino del código / ejecuciones iniciadas; las ejecuciones canceladas por el usuario se excluyen y se reportan | porcentaje | Registros de la plataforma del pipeline | Gestión de versiones; habilitación de cambios | Salud de la integración continua | Semanal |
| Duración del pipeline | Tiempo que tarda un cambio en recorrer el pipeline | mediana y percentil 85 de (momento en que termina la última etapa menos momento en que empieza la ejecución) para las ejecuciones que llegan al despliegue | minutos | Registros de la plataforma del pipeline | Gestión de versiones | Ciclos de retroalimentación cortos | Semanal |
| Tasa de pruebas inestables | Proporción de fallos de pruebas que pasan al repetirlas sin cambio de código | fallos que pasan al repetir / fallos de pruebas | porcentaje | Resultados de pruebas y registros de repeticiones | Gestión de versiones | Definición de terminado; práctica de pruebas | Mensual |
| Proporción de aprobación automatizada | Proporción de cambios aprobados por la política del pipeline sin un paso de aprobación humana | cambios aprobados solo por política / cambios desplegados | porcentaje | Registros del pipeline y de cambios | Habilitación de cambios | Desarrollo basado en el tronco con comprobaciones automatizadas | Mensual |
| Tasa de elusión | Proporción de cambios en producción que no pasaron por el pipeline | cambios en producción hechos fuera del pipeline, hallados comparando los registros de despliegue con los del pipeline / todos los cambios en producción | porcentaje | Registros de despliegue, auditoría de configuración y registros del pipeline | Habilitación de cambios; gestión de la configuración | Acuerdos de trabajo | Mensual |
| Completitud de la evidencia | Proporción de cambios desplegados por el pipeline cuyo registro muestra la evidencia exigida | cambios con todos los elementos de evidencia exigidos (pruebas, revisión, análisis, aprobación) vinculados / cambios desplegados | porcentaje | Registros del pipeline y de cambios | Habilitación de cambios; gobernanza | Definición de terminado | Mensual |
| Tasa de fallos de las puertas de política | Proporción de ejecuciones detenidas por una comprobación de política, dividida entre infracción genuina y error de política | ejecuciones detenidas por una puerta de política / ejecuciones iniciadas; motivos clasificados mediante muestreo | porcentaje | Registros del pipeline y de las puertas | Habilitación de cambios; gestión de riesgos | Criterios de aceptación | Mensual |

La tasa de éxito del pipeline excluye las ejecuciones canceladas por una persona, que se reportan aparte, y cuenta como fallo del pipeline el causado por una prueba inestable o por un fallo del entorno. La tasa de elusión necesita un registro independiente de lo que se ejecuta en producción, así que no puede calcularse solo desde el pipeline.

## Recomendaciones

### Trata el pipeline como un servicio

**1. Da al pipeline un responsable y objetivos.** Un equipo con nombre es responsable de la fiabilidad y la velocidad del pipeline, con objetivos de nivel de servicio como la proporción de ejecuciones que terminan dentro de un tiempo declarado. Sin responsable, la inestabilidad crece hasta que la gente deja de confiar en él.

**2. Mide la duración como una distribución.** Una mediana esconde las ejecuciones lentas que la gente espera. Muestra la mediana y el percentil 85, y desglosa la duración por etapas para encontrar la espera más larga, que suele ser una cola para un ejecutor compartido o una aprobación manual.

**3. Haz seguimiento de las pruebas inestables y corrígelas.** Una prueba inestable enseña a la gente a repetir hasta que se ponga en verde. Cuenta los fallos inestables, asigna cada uno a un responsable y corrígelo o ponlo en cuarentena con una fecha. Un pipeline que la gente repite por costumbre no está produciendo evidencia.

### Automatiza la aprobación con cuidado

**4. Clasifica los cambios por riesgo.** Acuerda con los responsables de los cambios qué clases de cambio son estándar y pueden aprobarse por política, y cuáles necesitan una persona. Revisa la clasificación con regularidad usando los datos de fallos (véase el tema 4.4, Fallos de cambio y retrabajo).

**5. Escribe la política como código y pruébala.** Las reglas que hace cumplir el pipeline son código y necesitan pruebas y responsables como cualquier código. Registra qué versión de la política se aplicó a cada ejecución.

**6. Conserva una vía humana para lo inusual.** Los cambios de emergencia y de alto riesgo necesitan una persona que pueda decidir con la evidencia. Prueba que la vía funciona y mide cuánto tarda.

### Produce evidencia útil

**7. Decide qué evidencia necesitas.** Trabaja hacia atrás a partir de las preguntas que hace un auditor o un revisor de incidentes: qué se probó, quién revisó, qué se analizó, quién aprobó y qué se desplegó. Haz que el pipeline registre exactamente eso y lo vincule con el cambio.

**8. Mide la completitud mediante muestreo.** La completitud de la evidencia según el propio recuento del pipeline puede ser alta mientras el contenido está vacío. Comprueba una muestra de registros para confirmar que la evidencia es real y coincide con lo que se ejecutó.

**9. Mantén la evidencia a prueba de manipulaciones.** Guarda los registros del pipeline donde las personas que despliegan no puedan editarlos y consérvalos durante el periodo de retención que exijan tus reglas. Comprueba los requisitos de retención con tu propio asesor jurídico.

### Vigila la elusión y la deriva

**10. Compara la producción con el pipeline.** Concilia lo que se ejecuta en producción con lo que desplegó el pipeline. Las diferencias son elusiones o deriva, y cada una merece una mirada breve y sin culpas a por qué se evitó el pipeline.

**11. Haz del pipeline el camino más fácil.** La gente elude los pipelines lentos e inestables. Si sube la elusión, mira primero la velocidad y la fiabilidad y las necesidades de emergencia que el pipeline no cubre.

**12. Revisa las puertas por su valor.** Una puerta que nunca detiene un defecto genuino y retrasa cada ejecución es candidata a eliminarse o rediseñarse. Una puerta que detiene muchas ejecuciones por errores de política necesita una corrección de la política.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tasa de éxito del pipeline | Reclasificar los fallos de infraestructura como cancelados; repetir hasta ponerlo en verde y contar solo la última ejecución | Contar todos los intentos; reportar las repeticiones por cambio |
| Duración del pipeline | Mover las etapas lentas fuera de la ventana medida; saltarse etapas | Medir de extremo a extremo desde la confirmación hasta el despliegue; comparar las etapas ejecutadas con las exigidas |
| Tasa de pruebas inestables | Borrar o silenciar pruebas inestables; marcar los fallos como conocidos | Tendencia del número de pruebas y de la cobertura; revisar con una fecha las pruebas en cuarentena |
| Proporción de aprobación automatizada | Ampliar la clase «estándar» para incluir cambios arriesgados | Tasa de fallos de cambio de los cambios aprobados automáticamente; muestrear los cambios aprobados |
| Tasa de elusión | Registrar los despliegues manuales de emergencia como ejecuciones del pipeline; no conciliar con producción | Conciliar el estado de producción con los registros del pipeline; muestrear los despliegues |
| Completitud de la evidencia | Adjuntar evidencia vacía o irrelevante; vincular un informe genérico | Muestrear el contenido de la evidencia; comprobar que coincide con el cambio |
| Tasa de fallos de las puertas de política | Aflojar las políticas para reducir los fallos; clasificar las infracciones genuinas como errores de política | Muestrear las ejecuciones detenidas; tasa de defectos escapados y hallazgos de auditoría |

Una lectura sana es un pipeline lo bastante rápido y estable para que la gente lo use para todo, una tasa de elusión cercana a cero con cada excepción comprendida, una proporción creciente de aprobaciones automatizadas con una tasa de fallos de cambio estable y una evidencia que aguanta cuando se muestrea.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Comprobaciones pesadas en el pipeline | Detecta pronto los defectos; evidencia sólida | Ejecuciones lentas; más inestabilidad; presión para eludir |
| Pipeline ligero | Retroalimentación rápida | Evidencia más débil; más defectos llegan a producción |
| Aprobación automatizada para cambios estándar | Elimina la espera; decisiones coherentes | Riesgo de ampliar la clase; los errores de política escalan |
| Aprobación humana para todos los cambios | Familiar; responsabilidad visible | Espera; las aprobaciones pueden convertirse en formalidades |

La conclusión en prosa es mantener el pipeline rápido y fiable, aprobar por política solo lo que está bien comprendido y medir la elusión. Las comprobaciones pesadas que la gente evita no protegen nada.

## Preguntas para debatir con tu equipo

**1. ¿Qué fracción de nuestros cambios en producción pasa por el pipeline y cómo lo sabemos?**
Pidan una forma de comparar el estado de producción con los registros del pipeline. Los equipos suelen encontrar correcciones de emergencia, cambios de configuración y cambios de datos que rodean el pipeline. Esperen respuestas a la defensiva, así que traten cada elusión como información. Después pregunten qué habría hecho del pipeline la vía más fácil.

**2. ¿Qué pruebas repetimos hasta que pasan y quién es su responsable?**
Los hábitos de repetición muestran dónde se ha erosionado la confianza. Hagan una lista y asignen responsables. Hablen de si corregir o eliminar cada una. La conversación suele mostrar que unas pocas pruebas causan la mayor parte del ruido.

**3. ¿Qué cambios aprobamos hoy automáticamente y cuáles deberíamos aprobar?**
Enumeren los tipos de cambio y el historial de fallos de cada uno. Decidan cuáles tienen poco riesgo y buenas pruebas. Pregunten qué les haría dejar de aprobar automáticamente un tipo. Después acuerden una fecha de revisión de la clasificación.

**4. Si un auditor preguntara por el despliegue del martes pasado, ¿qué podríamos mostrar?**
Recorran un cambio real y extraigan su evidencia. Noten las brechas y los pasos manuales. Pregunten si la evidencia se registró en su momento o se reconstruyó después. Después elijan una brecha que cerrar.

**5. ¿Dónde gasta su tiempo nuestro pipeline y quién espera?**
Miren el desglose por etapas. La espera más larga suele ser una cola o una aprobación manual. Pregunten si las personas que esperan podrían hacer otra cosa y qué cuesta la espera en retroalimentación retrasada. Elijan un retraso que eliminar.

**6. ¿Qué puerta no ha detenido nunca nada útil?**
Miren los motivos de parada de las puertas del último trimestre. Una puerta con solo errores de política necesita arreglo, y una puerta que nunca detiene nada puede ser redundante. Pregunten si quitarla aumentaría el riesgo. Acuerden una prueba.

## Cuatro perspectivas

### Equipos de producto y de entrega

Ustedes dependen del pipeline cada día. Mantengan fiables las pruebas, mantengan pequeños los cambios y traten una prueba inestable como un defecto del producto. Usen los datos del pipeline para encontrar sus propios retrasos y manténganlos lejos de las conversaciones sobre rendimiento individual.

### Equipos de servicio y de operaciones

Ustedes heredan lo que libera el pipeline. Pidan la evidencia que necesitan para un incidente, como qué cambió y cuándo, y una reversión rápida. Hagan seguimiento de las elusiones y de la deriva y llévenlas al equipo como una conversación sobre el porqué.

### Liderazgo y gobernanza

Financien el pipeline como un servicio de producción, con un responsable, capacidad y tiempo para corregir la inestabilidad. Pidan la tasa de elusión, la completitud de la evidencia mediante muestreo y la tasa de fallos de cambio de las aprobaciones automatizadas. Resistan la presión de contar los despliegues como medida de éxito.

### Clientes y usuarios

Ustedes se benefician cuando los cambios llegan a menudo y con seguridad, y sufren cuando un cambio rompe algo. Pregunten cómo se prueban los cambios y con qué rapidez se deshace un mal cambio. Sus reportes de problemas tras una publicación son parte de la retroalimentación que el pipeline no puede proporcionar.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un hospital regional opera un pipeline para su aplicación de programación clínica. Los números de este ejemplo son ilustrativos. Un comité asesor de cambios se reúne cada semana, y los cambios rutinarios esperan una media de cuatro días la aprobación. El equipo propone aprobar los cambios estándar mediante el pipeline.

Antes de empezar, miden. La tasa de éxito del pipeline es del 82 por ciento, y una muestra de fallos muestra que aproximadamente un tercio son pruebas inestables. La duración en el percentil 85 es de 47 minutos, con una cola de 20 minutos para un ejecutor de construcción compartido. Al comparar los registros de despliegue con los del pipeline, se ve que aproximadamente el 12 por ciento de los cambios en producción eludió el pipeline, sobre todo ediciones de configuración y correcciones urgentes.

El equipo corrige las cinco pruebas más inestables, añade un ejecutor de construcción y crea una vía de cambios de configuración a través del pipeline. Tras tres meses, la elusión baja al 3 por ciento. Después definen una clase de cambio estándar de cambios pequeños, probados y reversibles en la aplicación de programación, con comprobaciones de política para las pruebas, un análisis de seguridad y revisión por pares. La proporción de aprobación automatizada llega a aproximadamente el 40 por ciento, y el tiempo de espera de aprobación de esos cambios baja de días a minutos.

Aparece un riesgo de manipulación. Un gerente pide subir la proporción de aprobación automatizada añadiendo a la clase estándar los cambios de esquema de la base de datos. El equipo comprueba la tasa de fallos de cambio de los cambios de esquema, que es mayor que la de otros cambios, y los mantiene con un revisor humano. La completitud de la evidencia según el recuento del pipeline es del 98 por ciento, pero una muestra de 20 registros muestra que cuatro tenían adjunto un informe de pruebas de otra construcción. El equipo corrige la regla de vinculación. Lo que sigue siendo difícil: la elusión por correcciones de emergencia aún necesita un registro posterior, y la revisión de riesgo clínico de los cambios que afectan a la seguridad de los pacientes sigue en manos de personas.

## Agilidad, IA, automatización y analítica

### Agilidad

Los cambios pequeños y frecuentes a través de un pipeline de confianza son el núcleo de la entrega continua, y la propia lista de pendientes del pipeline merece la misma revisión regular con las partes interesadas que el producto. Una buena práctica es revisar las pruebas inestables y las elusiones en una conversación regular de mejora. La precaución es que celebrar solo la frecuencia de despliegue premia dividir los cambios.

### IA

La IA puede escribir código y pruebas, revisar cambios y evaluar el riesgo de los cambios dentro del pipeline. Marca en los datos los cambios asistidos por IA y compara sus fallos y su retrabajo con los de otros cambios (véase el tema 10.2, Medición del trabajo asistido por IA). Si una puerta de IA decide o recomienda, mide por muestreo sus falsas aprobaciones y sus falsas paradas y mantén a un humano responsable de los cambios de alto riesgo. La precaución es que las pruebas generadas por IA pueden subir las cifras de cobertura sin probar el comportamiento que importa.

### Automatización

El pipeline es la automatización, así que la práctica es tratarlo como un servicio de producción con registros, un responsable y una alternativa manual para las emergencias. Automatiza la recogida de evidencia y la conciliación de la producción con los registros del pipeline. La precaución es que las aprobaciones automatizadas multiplican el efecto de un error de política, así que prueba las políticas y conserva un control de pausa.

### Analítica

Usa los eventos del pipeline para mostrar adónde va el tiempo y dónde se agrupan los fallos, y vincula las ejecuciones con incidentes y retrabajo. La decisión a la que informa es dónde invertir en velocidad, fiabilidad o pruebas. La precaución es que los datos del pipeline no muestran la calidad de las pruebas, así que combínalos con los defectos escapados y muestra el número de ejecuciones detrás de cada tasa (véase el tema 10.8, Métricas de analítica y calidad de datos).

## Perspectiva sectorial

**Startup.** Puede bastar un pipeline sencillo con pruebas rápidas y un despliegue automático a producción. Mide la duración y la elusión y registra en el repositorio la evidencia de las pruebas y la revisión.

**Pequeña empresa.** El pipeline puede ser un servicio alojado o de un proveedor. Pregunta qué registra y dónde, y conserva una forma de reconstruir lo que se desplegó. Evita construir controles que no mantendrás.

**Gran empresa.** Muchos pipelines entre equipos necesitan formatos comunes de evidencia y una política compartida. Mantén una vista central de la elusión y de la completitud de la evidencia, con propiedad de las correcciones a nivel de equipo. Evita forzar una herramienta única donde los equipos tienen necesidades distintas.

**Gobierno y sector público.** La separación de funciones, los rastros de auditoría y las reglas de conservación dan forma al pipeline. Diseña la evidencia para la auditoría y comprueba los requisitos jurídicos y de contratación, también para las decisiones automatizadas (véase el tema 8.3, Métricas de cumplimiento y auditoría, y el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son la plataforma del pipeline y los ejecutores, el trabajo de escribir y mantener pruebas y políticas, el tiempo para corregir la inestabilidad y el costo de almacenar la evidencia. Las propias medidas cuestan poco cuando los registros del pipeline y de cambios están vinculados.

El retorno son esperas de aprobación más cortas, menos pasos manuales, una detección más temprana de defectos y evidencia lista cuando se necesita. Se manifiestan como una entrega más rápida y menos esfuerzo en el momento de la auditoría, pero son fáciles de exagerar. Mide tus propias líneas base, como el tiempo de espera de aprobación y el esfuerzo para reunir la evidencia de auditoría, antes y después, y declara los supuestos como rangos (véase el tema 7.7, Retorno de la inversión y caso de negocio). El lado del riesgo es el costo de los fallos que escapan al pipeline y de una caída del pipeline que bloquea todo cambio.

## Antipatrones y trampas

- **Contar despliegues como éxito.** Premia dividir los cambios. Empareja con el fallo y el retrabajo.
- **Repetir hasta ponerlo en verde.** Esconde las pruebas inestables y la evidencia débil. Cuenta las inestables y corrígelas.
- **Ignorar la elusión.** Los cambios que evitan el pipeline son los que no puede proteger. Concilia la producción con los registros del pipeline.
- **Ampliar la clase estándar para subir la automatización.** La proporción sube y la tasa de fallos la sigue. Revisa la clase con los datos de fallos.
- **Evidencia que existe pero no dice nada.** Muestrea el contenido, no solo la presencia.
- **Un pipeline sin responsable.** Se deteriora. Nombra un equipo y dale tiempo.
- **Errores de política tratados como defectos de código.** La gente aprende a ignorar las puertas. Clasifica las paradas y corrige la política.
- **Sin vía manual para las emergencias.** La gente elude. Ofrece una vía rápida y auditada.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Fiabilidad del pipeline | Construcciones ad hoc; fallos frecuentes sin explicar | El pipeline existe; se sigue el éxito | Responsable, objetivos y gestión de pruebas inestables | Duración y fallos revisados por etapa | Los pipelines comparten patrones y capacidad entre equipos |
| Aprobación y política | Aprobación manual para todos los cambios | Algunos cambios estándar definidos | Política como código para los cambios estándar, con pruebas | Clases de aprobación revisadas con datos de fallos | La aprobación basada en el riesgo se adapta automáticamente dentro de límites acordados |
| Evidencia y elusión | Evidencia reconstruida después del hecho | Algo de evidencia registrada | Evidencia exigida registrada y vinculada | Elusión conciliada y completitud muestreada | Evidencia y conciliación totalmente automatizadas y auditadas |

## Lista de verificación

- [ ] El pipeline tiene un responsable con nombre y objetivos de fiabilidad y velocidad.
- [ ] La tasa de éxito del pipeline y los percentiles de duración se reportan por etapa.
- [ ] Las pruebas inestables se cuentan y cada una tiene un responsable y una fecha de corrección.
- [ ] Las clases de cambio estándar están definidas con criterios de riesgo y se revisan con los datos de fallos.
- [ ] Las políticas son código, están probadas y versionadas, y la versión se registra en cada ejecución.
- [ ] El estado de producción se concilia con los registros del pipeline para encontrar elusiones.
- [ ] La evidencia exigida está definida y se registra para cada cambio desplegado.
- [ ] La completitud de la evidencia se comprueba muestreando el contenido.
- [ ] Existe una vía de emergencia auditada y probada.
- [ ] Cada métrica tiene un vector de manipulación y una barrera de protección mostrados a su lado.

## Prompts de IA

**Clasifica los cambios por riesgo para la aprobación automatizada.**

```text
Here is a list of the types of change we make and, for each, our recent history:
[paste change types with counts of changes and failures, if available]. Propose
which types might be candidates for automated approval and which should keep a
human reviewer, with the reasoning and the evidence I would need. Do not invent
failure rates. Mark each suggestion as a proposal for the change owners to
decide. List your assumptions and the data I should collect.
```

**Define la evidencia que debe registrar un pipeline.**

```text
Our pipeline is [description of stages and tools]. Our change records are kept in
[tool]. We must answer these questions after any deployment: [list questions
from auditors or incident reviewers]. Propose the evidence items the pipeline
should record and link, where to store them, and how to check that they are real
and not empty. Do not state compliance claims or legal requirements. List your
assumptions and questions for our compliance team.
```

**Analiza los datos de pruebas inestables.**

```text
Below is a summary of failing tests and rerun outcomes for [period]: [paste
data without personal information]. Identify tests that fail and then pass on
rerun, group them by area, and propose an order for fixing them. Do not guess
causes that the data does not support. Say what additional data would help. List
your assumptions.
```

**Revisa el riesgo de manipulación del panel del pipeline.**

```text
We report these pipeline measures: [paste measures and definitions]. Context:
[team size, tools, audience]. For each measure, list realistic ways it could look
better without improving delivery or safety, propose a guardrail, and say how
that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## Skills de IA

- [Change request](../../../../skills/change-request/SKILL.md): úsalo para definir qué debe contener un registro de cambio y su evidencia.
- [Release notes](../../../../skills/release-notes/SKILL.md): úsalo para convertir la salida del pipeline en notas para usuarios y operaciones.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema que cubre una métrica y su barrera de protección emparejada.

## Ideas clave

- Un pipeline es a la vez un servicio de producción y un control, así que mide su fiabilidad, su velocidad y la evidencia que produce.
- Mide la elusión conciliando la producción con los registros del pipeline y haz del pipeline el camino más fácil.
- Aprueba automáticamente solo los cambios bien comprendidos, con una política probada y una vía humana para el resto.
- Cuenta las pruebas inestables y corrígelas, porque repetir hasta ponerlo en verde destruye la confianza y la evidencia.
- Muestrea el contenido de la evidencia, porque los recuentos de completitud pueden satisfacerse con registros vacíos.

## Referencias y lecturas complementarias

1. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
2. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
3. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
4. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
5. Wikipedia, [Test automation](https://en.wikipedia.org/wiki/Test_automation).
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
