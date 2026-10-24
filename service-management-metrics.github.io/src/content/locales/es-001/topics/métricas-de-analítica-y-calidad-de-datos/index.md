# Métricas de analítica y calidad de datos

**Cada número de este libro es tan fiable como los datos y el análisis que hay detrás, así que mide la calidad de los datos, la solidez del análisis y el uso del resultado en una decisión, y di siempre lo que un número no puede mostrar.**

## Visión general y motivación

La [analítica](https://en.wikipedia.org/wiki/Analytics) es el uso de datos y estadística para responder preguntas e informar decisiones. En la gestión de servicios va desde un sencillo recuento semanal de tickets hasta modelos que predicen qué cambios fallarán. La analítica es la cuarta lente de este libro, junto con la práctica ágil, la IA y la automatización, y es además aquello de lo que dependen las otras tres lentes. Un panel construido sobre una mala [calidad de datos](https://en.wikipedia.org/wiki/Data_quality) da respuestas seguras a las preguntas equivocadas.

La calidad de datos es un conjunto de propiedades: si los datos están completos, son exactos, coherentes, oportunos, únicos y válidos. Los temas anteriores cubrieron de dónde proceden los datos de servicio y cómo leerlos (véase el tema 1.5, Fuentes de datos e instrumentación, y el tema 1.6, Alfabetización estadística para métricas de servicio). Este tema convierte esas ideas en medidas que un equipo puede seguir sobre sus propios datos y análisis, igual que la Parte 4 mide el cambio. Cubre además la analítica como práctica: las preguntas que se hacen, los métodos que se usan, quién los comprueba y si el resultado cambió una decisión.

La analítica es atractiva porque escala. Un analista puede servir a muchos equipos, y un modelo puede puntuar cada ticket. La misma escala amplifica los errores. Una definición mal leída en un conjunto de datos compartido se extiende a todos los informes construidos sobre él, y un modelo entrenado con el comportamiento pasado puede repetir a velocidad un sesgo antiguo. Las herramientas de IA que escriben consultas, gráficos y resúmenes abaratan el análisis y facilitan además producir errores con aplomo, así que comprobar importa más.

Términos usados aquí. Un **conjunto de datos** es una colección definida de registros, como tickets o despliegues. El **linaje** es el registro de dónde vinieron los datos y qué se hizo con ellos. La **conciliación** compara dos fuentes que deberían coincidir. Un **contrato de datos** es un acuerdo entre el productor y los usuarios de un conjunto de datos sobre su estructura, su significado y su calidad. Un **análisis** es una pregunta, un método y un resultado. La **incertidumbre** es el rango en que puede estar un valor, dados los datos y el método. Un **registro de decisiones** anota las decisiones sobre las que informó un número.

## Principios clave

- **Parte de la pregunta y de la decisión.** Un análisis sin una decisión asociada es sobrecarga.
- **Mide los datos sobre los datos.** La completitud, la puntualidad y la conciliación son medidas que un equipo puede poseer.
- **Conserva el linaje.** Un número que no puedes rastrear hasta su fuente no puede corregirse.
- **Declara la incertidumbre y los límites.** Muestra el recuento detrás de una tasa y di lo que el número no puede mostrar.
- **Comprueba el análisis como el código.** Revisa las definiciones y las consultas y guárdalas en control de versiones.
- **Protege a las personas.** La analítica sobre el comportamiento de las personas necesita límites de privacidad, y los resultados describen equipos y servicios.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Completitud de los campos obligatorios | Proporción de registros con todos los campos exigidos por las métricas que los usan | registros con todos los campos exigidos presentes y válidos / registros dentro del alcance | porcentaje | Extractos de los sistemas de origen y comprobaciones de calidad de datos | Medición y elaboración de informes; gestión del conocimiento | Definición de terminado para los registros | Mensual |
| Frescura de los datos | Antigüedad de los datos más recientes de un conjunto de datos en el momento en que se lee un informe | mediana y máximo de (momento de lectura del informe menos momento del último registro cargado) entre los conjuntos de datos | horas | Registros del pipeline y metadatos del conjunto de datos | Medición y elaboración de informes | Retroalimentación rápida | Semanal |
| Varianza de conciliación | Diferencia entre dos fuentes que deberían coincidir en la misma cantidad | diferencia absoluta entre la fuente A y la fuente B / fuente A, para una muestra declarada de cantidades y un periodo | porcentaje | Dos sistemas de origen | Medición y elaboración de informes; gestión financiera | Acuerdos de trabajo sobre las definiciones | Trimestral |
| Cobertura del linaje | Proporción de métricas reportadas cuya fuente, transformaciones y responsable están documentados | métricas del registro con linaje documentado / métricas reportadas | porcentaje | Registro de métricas y catálogo de datos | Gobernanza | Acuerdos del equipo | Trimestral |
| Tasa de fallos de ejecución del pipeline de datos | Proporción de ejecuciones del pipeline de datos que fallan o cargan datos incompletos | ejecuciones del pipeline de datos que fallaron o cargaron datos incompletos / ejecuciones iniciadas | porcentaje | Registros del pipeline de datos | Medición y elaboración de informes | Integración continua para los datos | Semanal |
| Tasa de revisión de los análisis | Proporción de análisis publicados que revisó una segunda persona antes de usarlos | análisis con una revisión registrada / análisis publicados para una audiencia que toma decisiones | porcentaje | Registro de análisis y registro de revisiones | Medición y elaboración de informes; mejora continua | Revisión por pares | Trimestral |
| Tasa de uso en decisiones | Proporción de métricas reportadas que se citan en una decisión registrada en el periodo | métricas citadas en una entrada del registro de decisiones / métricas reportadas | porcentaje | Registro de decisiones y registro de métricas | Mejora continua | Acciones de retrospectiva | Trimestral |

La completitud cuenta un campo como presente solo si contiene un valor válido, así que un marcador como «n/d» no cuenta. La varianza de conciliación se aplica a una muestra con nombre de cantidades, como los recuentos de tickets de un mes, y declara la muestra.

## Recomendaciones

### Haz visible la calidad de los datos

**1. Define la calidad de los datos en función de las métricas.** Enumera los campos y las marcas de tiempo de que dependen tus métricas más importantes y define qué aspecto tiene lo válido en cada uno. Comprueba esos primero, ya que una marca de tiempo que falta rompe una medida de tiempo.

**2. Comprueba en el origen, y no solo en el informe.** Una comprobación de calidad ejecutada cuando se crean los datos, como un campo obligatorio en el formulario del ticket, evita errores que ninguna limpieza posterior puede reparar del todo. Añade además comprobaciones cuando se cargan los datos.

**3. Publica la calidad junto a los números.** Muestra la completitud y la frescura en el panel que muestra la métrica. Un lector debe ver la calidad de los datos sin preguntar.

**4. Concilia según un calendario.** Compara al menos una cantidad entre dos sistemas cada trimestre, como el número de cambios en el registro de cambios y en el pipeline. Investiga y explica las diferencias y anota el hallazgo.

### Mantén honesto el análisis

**5. Escribe primero la pregunta y la decisión.** Antes del análisis, anota la pregunta, la decisión a la que informa y quién decidirá. Cuando haya pasado la decisión, anota lo que se decidió.

**6. Conserva el linaje y las definiciones en un solo registro.** Vincula cada métrica con su fuente, su transformación, su responsable y su fecha de revisión (véase el tema 1.4, Gobernanza y propiedad de las métricas). Los cambios en las definiciones se registran con sus motivos y se marcan en los gráficos.

**7. Revisa cada pieza de análisis.** Una segunda persona comprueba las definiciones, las consultas y las conclusiones de cualquier análisis usado en una decisión. Guarda las consultas en control de versiones para poder volver a ejecutarlas.

**8. Declara la incertidumbre y los límites.** Muestra el número de elementos detrás de cada tasa, intervalos donde importen y lo que el análisis no puede mostrar. Evita la precisión de un solo número donde los datos no la respalden.

### Gobierna el uso

**9. Usa contratos de datos para los conjuntos de datos compartidos.** El equipo que produce un conjunto de datos declara su significado, sus campos, su frescura y sus problemas conocidos, y avisa a los usuarios cuando cambia. Los cambios que rompen necesitan aviso.

**10. Protege a las personas que están en los datos.** Decide quién puede ver los registros en bruto, cuánto tiempo se conservan los datos y cuál es el tamaño mínimo de grupo para los informes. Mantén la analítica a nivel de equipo y de servicio y comprueba las reglas de privacidad que se te aplican.

**11. Retira informes y conjuntos de datos.** Un informe que nadie usa sigue costando mantenimiento y puede engañar. Revisa el uso y retira lo que no se cita en las decisiones.

**12. Trata el análisis asistido por IA como no revisado hasta que se compruebe.** Las herramientas de IA pueden escribir una consulta o un resumen que parece correcto y es erróneo. Revisa la consulta, vuelve a ejecutarla sobre una muestra pequeña conocida y anota que se comprobó.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Completitud de los campos obligatorios | Rellenar los campos con marcadores o valores por defecto; hacer opcionales los campos | Comprobaciones de validez sobre el contenido; muestrear registros en busca de valores reales |
| Frescura de los datos | Poner marca de tiempo a las cargas en lugar de a los eventos; cargar actualizaciones vacías | Comprobar la hora del evento frente a la hora de la carga; recuentos de filas por carga |
| Varianza de conciliación | Elegir cantidades que casualmente coinciden; ajustar una fuente para que coincida | Rotar las cantidades; conservar un rastro de auditoría de los ajustes |
| Cobertura del linaje | Documentar el linaje de forma superficial; copiar texto entre entradas | Muestrear entradas y rastrear una métrica de extremo a extremo |
| Tasa de fallos de ejecución del pipeline de datos | Marcar las ejecuciones fallidas como reintentadas o exitosas; borrar registros | Comparar los recuentos de registros con el origen; alertar ante huecos |
| Tasa de revisión de los análisis | Revisiones de trámite; revisar después de la decisión | Comprobar las notas del revisor; exigir revisión antes del uso |
| Tasa de uso en decisiones | Citar métricas en un registro sin efecto sobre la decisión | Preguntar qué cambió; muestrear entradas |

Una lectura sana son cifras de calidad de datos visibles y estables, diferencias entre fuentes que se explican, análisis que se revisan antes de usarse y métricas que van y vienen según lo necesiten las decisiones.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Validación estricta de los datos en la entrada | Evita pronto los errores | Fricción para los usuarios; entradas con marcadores |
| Limpiar los datos a posteriori | Flexible; no frena a los usuarios | Esconde la causa; quedan errores en algunos informes |
| Equipo central de analítica | Métodos y calidad coherentes | Cuello de botella; distancia respecto del trabajo |
| Analítica de autoservicio por los equipos | Rápida; cercana al trabajo | Definiciones incoherentes; calidad desigual |
| Análisis asistido por IA | Borradores rápidos; baja la barrera | Errores con aplomo; reproducibilidad débil |

La conclusión en prosa es evitar los errores en el origen, compartir definiciones y linaje en un solo lugar y exigir revisión para cualquier análisis que informe una decisión. La velocidad del autoservicio y de la IA es bienvenida cuando la comprobación sigue el ritmo.

## Preguntas para debatir con tu equipo

**1. ¿De qué tres números de nuestro panel nos arrepentiríamos más si los datos de debajo fueran erróneos?**
Empiecen por los números que impulsan decisiones u objetivos. Pregunten de qué dependen los datos y quién posee la fuente. A menudo se descubre que un número clave depende de un campo introducido a mano. Después elijan uno para comprobar este mes.

**2. ¿Cuándo discreparon dos informes y cómo lo resolvimos?**
Las historias de números en conflicto muestran dónde difieren las definiciones. Pregunten si se anotó la resolución y si se corrigió la causa. El facilitador debe anotar las causas repetidas, como husos horarios distintos o definiciones de estado distintas. Después acuerden una definición y un responsable.

**3. ¿Qué antigüedad tienen los datos del informe que más miramos?**
Mucha gente no lo sabe. Pregunten cómo se muestra la frescura y si se notaría una carga obsoleta. Hablen del costo de una decisión desactualizada. Después añadan la frescura al informe.

**4. ¿Quién revisó el último análisis que cambió una decisión?**
Busquen un segundo par de ojos sobre las definiciones y las consultas. Si no hubo ninguno, hablen de por qué. Pregunten qué revisión sería proporcionada. Después elijan un paso sencillo de revisión para cualquier análisis que informe una decisión significativa.

**5. ¿Qué no puede decirnos nuestra métrica más usada?**
Nombrar los límites es el hábito de la buena analítica. Pidan puntos ciegos concretos, como los usuarios que no contactan con el soporte. Anoten los límites junto a la métrica. Después añadan una medida que cubra un punto ciego.

**6. ¿Cómo usamos las herramientas de IA para escribir consultas y resúmenes y cómo las comprobamos?**
Pidan la práctica real, no la política. Escuchen si hay salidas sin revisar usadas en informes. Hablen de una comprobación sencilla, como volver a ejecutar sobre una muestra conocida. Después acuerden una regla para el análisis asistido por IA.

## Cuatro perspectivas

### Equipos de producto y de entrega

Sus herramientas producen gran parte de los datos que otros analizan. Mantengan fiables las marcas de tiempo, los identificadores y los estados, y avisen a los usuarios de los datos cuando cambie un campo. Incluyan la calidad de los datos en la definición de terminado de las funciones nuevas que producen datos.

### Equipos de servicio y de operaciones

Los datos de tickets dependen de cómo la gente rellena los formularios bajo presión. Hagan fácil la entrada correcta, comprueben la calidad de los datos en la herramienta y hablen cuando una métrica lea mal el trabajo. No pongan fechas anteriores ni actualicen registros por lotes para mejorar un número.

### Liderazgo y gobernanza

Pidan calidad de datos y linaje junto a cualquier número que respalde una decisión o un objetivo. Financien la ingeniería de datos y el tiempo de revisión, y no solo los paneles. Protejan la privacidad y eviten usar la analítica sobre individuos para evaluar a las personas.

### Clientes y usuarios

Los datos sobre ustedes determinan cómo los trata el servicio, así que pregunten qué se recoge y cómo se usa. Donde su retroalimentación esté en los datos, como las respuestas a encuestas, pregunten cómo se protege y cómo llegó a una decisión.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de una empresa regional de servicios públicos construye un panel de tiempo de resolución de incidentes y tasa de fallos de cambio para su equipo ejecutivo. Los números de este ejemplo son ilustrativos. El panel muestra una mediana de tiempo de resolución de 3,1 horas y una tasa de fallos de cambio del 4 por ciento.

Un analista comprueba la calidad antes del lanzamiento. La completitud del campo obligatorio de la marca de tiempo de resolución es del 91 por ciento, y los registros que faltan son sobre todo incidentes graves introducidos después del hecho. La frescura es de 26 horas, porque el extracto se ejecuta por la noche. La conciliación del registro de cambios con el pipeline muestra un 8 por ciento más de cambios en producción en el pipeline que en el registro de cambios, así que la tasa de fallos tiene un problema de denominador.

El equipo hace cambios. El formulario del ticket exige la hora de resolución y comprueba que sea posterior a la hora de apertura. El panel muestra el número de incidentes detrás de cada cifra, la antigüedad de los datos y la completitud de los campos usados. Un contrato de datos establece que el registro de cambios es el sistema de registro de los cambios aprobados y el pipeline el de los despliegues, con una conciliación mensual. La primera conciliación explica la diferencia como cambios de emergencia registrados solo en el pipeline.

Aparece un riesgo de manipulación cuando un gerente sugiere excluir los incidentes sin hora de resolución para mejorar la completitud. El equipo se niega y corrige la entrada. El resultado es un intervalo de la mediana más amplio y una tasa de fallos de cambio del 6 por ciento. El registro de decisiones anota que el equipo ejecutivo decidió esperar un trimestre antes de fijar un objetivo. Lo que sigue siendo difícil: no todas las entradas con fecha anterior son detectables, y la conciliación depende de un vínculo manual por identificador.

## Agilidad, IA, automatización y analítica

### Agilidad

Los ciclos de retroalimentación cortos ayudan a la calidad de los datos: corrige el formulario, comprueba los datos del día siguiente y pregunta a los usuarios. Una buena práctica es revisar las cifras de calidad de los datos en la conversación regular de mejora con las personas que introducen los datos. La precaución es que los cambios continuos en campos y estados rompen las tendencias, así que registra cada cambio de definición.

### IA

La IA puede escribir consultas, esbozar gráficos, resumir comentarios y señalar anomalías, y puede además inventar resultados verosímiles. Trata el análisis asistido por IA como no revisado hasta que una persona compruebe la consulta y la vuelva a ejecutar sobre una muestra pequeña conocida, y anota que se comprobó. La precaución es que los resúmenes de IA de los comentarios de encuestas pueden leer mal el lenguaje y el tono, así que lee una muestra de los originales.

### Automatización

Automatiza las comprobaciones de calidad de los datos en la carga y en el momento del informe, y mide los pipelines por sus fallos y sus huecos. Alerta ante cargas que faltan y cambios bruscos de volumen. La precaución es que las reglas de limpieza automática pueden esconder un problema de origen, así que reporta qué se cambió y por qué.

### Analítica

Este tema trata de la analítica, así que la práctica es una nota breve sobre cada métrica: su pregunta, su decisión, su linaje, su calidad y sus límites. La decisión a la que informa es si confiar en un número lo bastante para actuar. La precaución es que los paneles de aspecto limpio pueden descansar sobre datos débiles, así que muestra las cifras de calidad junto al resultado y mantén las definiciones de Service Management Metrics en un solo registro.

## Perspectiva sectorial

**Startup.** Los datos son pocos y cambiantes. Mantén una fuente única de la verdad para cada métrica, escribe las definiciones en un documento breve y evita construir una plataforma de datos antes de que las preguntas estén claras.

**Pequeña empresa.** Los datos pueden vivir en una herramienta alojada con informes fijos. Comprueba cómo define la herramienta cada medida, exporta muestras para verificar y conserva una lista breve de lo que los informes no pueden mostrar.

**Gran empresa.** Muchas fuentes y equipos crean definiciones en conflicto. Usa un registro de métricas compartido, contratos de datos y una conciliación regular, y da a los equipos los medios para comprobar sus propios datos.

**Gobierno y sector público.** Los registros pueden estar sujetos a reglas de conservación, de acceso y de reporte público. Documenta el linaje de cualquier cifra que se publique y mantén las reglas de privacidad para los datos sobre personas (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo es el tiempo del personal para las comprobaciones de calidad de los datos, la conciliación, la documentación y la revisión, además de herramientas para los pipelines de datos y los catálogos donde se usen. Gran parte puede empezar con pasos pequeños, como la validación en el formulario del ticket.

El retorno son decisiones tomadas con mejores números, menos tiempo discutiendo qué informe es el correcto y menos retrabajo cuando un número mal leído se descubre tarde. Descríbelo como un patrón, no como una cifra: menos decisiones revertidas y menos disputas. Si necesitas números para un caso, mide tus propias líneas base, como la varianza de conciliación y el tiempo dedicado a resolver disputas de informes, antes y después del cambio (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Limpiar solo en el informe.** El origen sigue produciendo errores. Corrige las comprobaciones de entrada y de carga.
- **Paneles sin cifras de calidad.** Los lectores no pueden juzgar el número. Muestra la completitud, la frescura y los recuentos.
- **Definiciones sin documentar.** Los números cambian de significado en silencio. Conserva el linaje y un registro de cambios.
- **Análisis sin revisar.** Los errores llegan a las decisiones. Exige una segunda mirada.
- **Confiar en los resúmenes de IA.** Pueden ser fluidos y erróneos. Comprueba las consultas y muestrea los originales.
- **Analítica sobre individuos.** Se convierte en vigilancia y corrompe los datos. Reporta a nivel de equipo con un tamaño mínimo de grupo.
- **No retirar nunca informes.** Se acumulan y engañan. Revisa el uso y elimina.
- **Números únicos sin incertidumbre.** Invitan a reaccionar en exceso. Muestra recuentos y rangos.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Calidad de los datos | Calidad desconocida; hojas de cálculo a mano | Completitud comprobada para los campos clave | Comprobaciones de calidad en la entrada y en la carga, mostradas en los informes | Conciliación y tendencias de calidad revisadas con una cadencia | Calidad gestionada con contratos de datos entre equipos |
| Linaje y definiciones | Definiciones en la cabeza de la gente | Algunas definiciones escritas | Registro con fuente, responsable y registro de cambios | Linaje rastreado de extremo a extremo para las métricas clave | Definiciones compartidas entre equipos y proveedores |
| Práctica de análisis | Informes puntuales; sin revisión | Alguna revisión por pares | Preguntas, decisiones y revisión registradas | Análisis reutilizado, revisado y retirado | Analítica integrada en las decisiones con retroalimentación sobre los resultados |

## Lista de verificación

- [ ] Cada métrica clave enumera los campos y las marcas de tiempo de que depende.
- [ ] Los campos obligatorios se validan en la entrada, no solo se limpian después.
- [ ] Los informes muestran la completitud, la frescura y el recuento detrás de cada tasa.
- [ ] Al menos una cantidad se concilia entre dos fuentes cada trimestre.
- [ ] Un registro anota la fuente, la transformación, el responsable y la fecha de revisión de cada métrica.
- [ ] Los cambios de definición se registran y se marcan en los gráficos.
- [ ] El análisis que informa una decisión lo revisa una segunda persona.
- [ ] Existen reglas para el análisis asistido por IA, incluida una comprobación sobre una muestra conocida.
- [ ] Se definen el acceso, la conservación y el tamaño mínimo de grupo para los datos relacionados con personas.
- [ ] Cada métrica tiene un vector de manipulación y una barrera de protección mostrados a su lado.

## Prompts de IA

**Redacta comprobaciones de calidad de datos para una métrica.**

```text
We report this metric: [metric name], defined as [definition including clock start
and stop]. It depends on these fields in [tool]: [list fields]. Propose data quality
checks for completeness, validity, timeliness, and consistency, and say where each
check should run (at entry, at load, or in the report). Do not invent thresholds;
use placeholders. Mark assumptions and list questions I should answer.
```

**Revisa un análisis antes de usarlo.**

```text
Here is an analysis we plan to use for a decision: [paste question, method,
query or steps, and result, without personal data]. Review it for unclear
definitions, wrong denominators, small samples, missing uncertainty, and
conclusions that go beyond the data. Do not assume facts not in the text. List
what you could not judge and what a human reviewer should check.
```

**Planifica una conciliación entre dos sistemas.**

```text
Two systems should agree on [quantity]: [system A] and [system B]. Propose a
reconciliation plan: the sample, the period, how to match records, how to
classify differences, and how to record findings. Do not invent expected
variance. List assumptions and the access I would need.
```

**Revisa el riesgo de manipulación de las medidas de calidad de datos.**

```text
We report these data quality measures: [paste measures and definitions].
Context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without improving the data, propose a guardrail, and say how
that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## Skills de IA

- [Data quality](../../../../skills/data-quality/SKILL.md): úsalo para definir y comprobar la calidad de un conjunto de datos.
- [Data pipeline](../../../../skills/data-pipeline/SKILL.md): úsalo para diseñar y revisar el pipeline que carga los datos de servicio.
- [Statistical analysis](../../../../skills/statistical-analysis/SKILL.md): úsalo para comprobar que un método y su incertidumbre encajan con la pregunta.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema que cubre una métrica y su barrera de protección emparejada.

## Ideas clave

- Un número es tan fiable como sus datos, así que mide la completitud, la frescura y la conciliación y muéstralas junto al resultado.
- Conserva el linaje y las definiciones en un solo registro y registra cada cambio.
- Revisa el análisis antes de que informe decisiones, incluido el asistido por IA.
- Declara la incertidumbre y los límites y muestra el recuento detrás de cada tasa.
- Mantén la analítica a nivel de equipo y de servicio, con límites de privacidad para los datos sobre personas.

## Referencias y lecturas complementarias

1. Wikipedia, [Analytics](https://en.wikipedia.org/wiki/Analytics).
2. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
3. Wikipedia, [Data lineage](https://en.wikipedia.org/wiki/Data_lineage).
4. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
5. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
6. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
7. Wikipedia, [Reproducibility](https://en.wikipedia.org/wiki/Reproducibility).
