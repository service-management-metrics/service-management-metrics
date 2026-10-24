# Métricas de automatización y orquestación

**La automatización ha rendido solo cuando quita trabajo que la gente no quiere hacer sin crear trabajo nuevo, fallos nuevos ni riesgo nuevo, así que mide lo que quita cada automatización, con qué frecuencia falla, con qué rapidez puede deshacerse y quién decide cuándo debe parar.**

## Visión general y motivación

La [automatización](https://en.wikipedia.org/wiki/Automation) en la gestión de servicios significa dejar que el software haga un trabajo que antes hacía una persona: aprovisionar una cuenta, reiniciar un servicio, encaminar un ticket, aprobar un cambio estándar o publicar una actualización de estado. La [orquestación](https://en.wikipedia.org/wiki/Orchestration_(computing)) coordina varios pasos automatizados, a menudo entre herramientas y equipos, en un solo flujo como «incorporar a un nuevo empleado» o «recuperar este servicio». El principio rector de ITIL «optimizar y automatizar» es una vieja formulación de la idea, y la entrega continua depende de ella. Prácticas como la [infraestructura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code) convierten la preparación de los sistemas en archivos versionados y comprobables, de modo que la automatización es también una forma de registro.

La automatización desplaza el riesgo de lo lento y visible a lo rápido y amplio. Una persona que comete un error afecta a un ticket. Un paso automatizado con el mismo error puede afectar a todos los tickets en un minuto. Por eso la automatización necesita medidas propias, y por eso recuentos como «número de automatizaciones» u «horas ahorradas» son débiles. Describen cuánto se construyó y cuánto se afirmó, no si alguien está mejor.

Este tema difiere de las medidas anteriores de autoservicio y automatización en las solicitudes de servicio (véase el tema 3.7, Métricas de autoservicio y automatización), que tratan del flujo de solicitudes de cara al usuario. Aquí el asunto es la automatización como activo de ingeniería y de operaciones: su cobertura, fiabilidad, seguridad, propiedad y costo. Difiere además de las medidas de pipeline del tema 10.7 (véase el tema 10.7, Métricas de pipelines y cambio automatizado), que cubren el camino que sigue un cambio hasta producción.

Términos usados aquí. Una **automatización** es una tarea definida que se ejecuta sin que una persona realice sus pasos. Un **runbook** es un procedimiento documentado para una tarea operativa, y la **automatización de runbooks** lo ejecuta. Una **orquestación** es un flujo que coordina automatizaciones. **Humano en el bucle** significa que una persona revisa o aprueba antes de que una acción surta efecto. El **trabajo repetitivo (toil)** es el trabajo operativo manual y repetitivo que escala con el servicio y no tiene valor duradero (véase el tema 5.7, Métricas de trabajo repetitivo y guardias). Una **barrera de protección** tiene aquí dos sentidos: la medida emparejada que se usa en todo este libro y un límite técnico a lo que puede hacer una automatización. El texto dice cuál se quiere decir.

## Principios clave

- **Mide el efecto, no el recuento.** El número de automatizaciones dice poco. Lo que quitan y lo que rompen dice mucho.
- **Toda automatización tiene un responsable.** Una automatización sin responsable es un riesgo que crece con la edad.
- **Haz visible y reversible cada acción automatizada.** Registra qué se ejecutó, sobre qué y con qué resultado, y sabe cómo deshacerlo.
- **Elige dónde decide un humano.** Ajusta el papel del humano al riesgo de la acción y prueba que el papel pueda ejercerse.
- **Mide la automatización como un servicio.** Tiene fiabilidad, cambio, costo y retirada como cualquier otro servicio.
- **Automatiza primero lo estable y lo aburrido.** Automatizar algo mal entendido fija un problema en el sistema.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de éxito de las ejecuciones de automatización | Proporción de ejecuciones de automatización que terminaron y lograron el resultado previsto, confirmado por una comprobación posterior a la ejecución | ejecuciones con una comprobación posterior exitosa / ejecuciones iniciadas en el periodo; las ejecuciones sin comprobación posterior se excluyen y se reportan aparte | porcentaje | Registros de la plataforma de orquestación y de automatización | Gestión de solicitudes de servicio; gestión de versiones | Definición de terminado para el trabajo automatizado | Mensual |
| Cobertura de automatización de tareas | Proporción de tareas elegibles y repetidas que están automatizadas | tareas de la lista elegible acordada que se ejecutan automatizadas / tareas de la lista elegible; la lista elegible se revisa cada trimestre | porcentaje | Inventario de tareas y registro de runbooks | Mejora continua | Lista de pendientes de candidatos a automatización | Trimestral |
| Tasa de intervención manual | Proporción de ejecuciones de automatización en que una persona tuvo que intervenir o arreglar | ejecuciones con un paso manual añadido tras el inicio / ejecuciones iniciadas | porcentaje | Registros de automatización y vínculos con tickets | Gestión de incidentes | Defectos escapados en el trabajo automatizado | Mensual |
| Tasa de incidentes causados por la automatización | Incidentes atribuidos a una acción automatizada, por 1000 ejecuciones | incidentes con una causa de automatización confirmada / ejecuciones de automatización x 1000 | recuento por 1000 ejecuciones | Registros de incidentes vinculados a identificadores de ejecución | Gestión de incidentes; gestión de problemas | Tasa de fallos de cambio para el cambio automatizado | Mensual |
| Tiempo de reversión | Tiempo para deshacer una acción automatizada una vez reconocida la necesidad | mediana y percentil 95 de (momento en que se completa la reversión menos momento en que se tomó la decisión de deshacer) | minutos | Registros de automatización y cronología del incidente | Habilitación de cambios | Capacidad de reversión en la definición de terminado | Trimestral |
| Tiempo ahorrado verificado | Horas de trabajo manual eliminadas, comprobadas mediante muestreo | tareas automatizadas x (tiempo mediano de la tarea manual según una muestra de tiempos menos tiempo manual residual mediano) en el periodo; fecha de la muestra declarada | horas | Muestras de tiempos y recuentos de ejecuciones | Mejora continua | Valor entregado por elemento de trabajo | Trimestral |
| Vigencia de la propiedad de las automatizaciones | Proporción de automatizaciones con un responsable que confirmó la propiedad y revisó la automatización en los últimos 12 meses | automatizaciones con responsable confirmado y revisión en 12 meses / automatizaciones del registro | porcentaje | Registro de automatizaciones | Gobernanza; gestión de activos y de la configuración | Carta del equipo y propiedad | Trimestral |

Las fórmulas cuentan ejecuciones, no tareas, salvo que se indique. «Exitosa» requiere una comprobación posterior independiente, como confirmar que el servicio está sano o que la cuenta existe; una ejecución que solo termina sin error no se cuenta como exitosa. El tiempo ahorrado excluye el tiempo dedicado a construir y mantener la automatización, que se cuenta aparte como costo (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Recomendaciones

### Decide qué automatizar

**1. Parte de una lista de tareas repetidas, no de herramientas.** Clasifica las tareas repetidas por la frecuencia con que ocurren, lo que tardan, lo propensas que son a errores y lo bien comprendidas que están. Automatiza primero las estables y bien comprendidas y deja las raras y las mal comprendidas a las personas.

**2. Corrige el proceso antes de automatizarlo.** Automatizar un proceso confuso vuelve más rápida la confusión. Recorre los pasos con las personas que los hacen, elimina los que no aportan nada y automatiza después.

**3. Elige el papel del humano según el riesgo.** Para las acciones reversibles y de bajo riesgo, una persona puede limitarse a revisar un registro después. Para las acciones de mayor riesgo, una persona aprueba antes de la acción. Para las de mayor riesgo de todas, la acción puede seguir siendo manual. Escribe la regla y prueba que los aprobadores tengan la información para decidir.

### Haz segura la automatización

**4. Exige un responsable y un registro.** Toda automatización tiene un responsable con nombre y una entrada en un registro con su propósito, alcance, permisos y última revisión. Cuando se va un responsable, la propiedad se traslada antes de que la persona se marche.

**5. Limita los permisos y el alcance.** Una automatización debe tener el mínimo acceso que haga el trabajo y un límite a cuánto puede cambiar en una ejecución, como un número máximo de cuentas o de servidores. Un límite de alcance es una barrera de protección técnica que acota el daño de una mala ejecución.

**6. Comprueba el resultado, no el código de salida.** Añade una comprobación posterior a la ejecución que confirme el estado previsto y mide el éxito por esa comprobación. Un script que sale limpiamente puede no haber hecho nada.

**7. Registra y planifica la reversión.** Cada ejecución registra lo que cambió, y cada automatización tiene una forma comprobada de revertir su cambio o una razón declarada de por qué no puede. Practica la reversión en un entorno seguro y mide el tiempo que lleva.

### Mide con honestidad

**8. Verifica el tiempo ahorrado mediante muestreo.** Las afirmaciones de horas ahorradas suelen ser optimistas. Cronometra una muestra de la tarea manual antes y después, declara la fecha de la muestra y resta el costo del mantenimiento y de los fallos.

**9. Reporta los fallos y las intervenciones junto a la cobertura.** Una cifra de cobertura alta con una tasa alta de intervención manual significa que la gente está arreglando lo que rompe la automatización. Muestra ambas en una sola página.

**10. Retira lo que ya no ayuda.** Una automatización cuya tarea ha cambiado o desaparecido es un riesgo. Revisa el uso con una cadencia regular y elimina las automatizaciones sin ejecuciones o sin responsable.

**11. Mantén a un humano capaz de detenerla.** Ofrece una forma clara de pausar rápidamente una automatización o una clase entera de automatizaciones y mide la rapidez con que puede hacerse.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tasa de éxito de las ejecuciones de automatización | Contar como exitosa una ejecución que sale limpiamente; borrar del registro las ejecuciones fallidas | Comprobación posterior independiente; comparar los registros con los registros posteriores |
| Cobertura de automatización de tareas | Reducir la lista elegible para que suba la cobertura; automatizar primero tareas triviales | Revisar la lista elegible con un segundo equipo; ponderar por volumen y tiempo |
| Tasa de intervención manual | Registrar las correcciones manuales como tickets aparte para que la ejecución parezca limpia | Vincular los tickets a los identificadores de ejecución; muestrear ejecuciones en busca de correcciones ocultas |
| Tasa de incidentes causados por la automatización | Atribuir los fallos de la automatización a personas o herramientas; no vincular los incidentes con las ejecuciones | Exigir un identificador de ejecución en los registros de incidentes; muestrear incidentes en busca de vínculos omitidos |
| Tiempo de reversión | Medir solo las reversiones que fueron fáciles; arrancar tarde el reloj | Practicar la reversión en un simulacro para las automatizaciones más difíciles; definir el inicio del reloj |
| Tiempo ahorrado verificado | Usar tiempos de tarea optimistas; ignorar el costo de mantenimiento y de fallos | Muestras de tiempos tomadas por alguien ajeno al equipo; incluir el costo de construcción y mantenimiento |
| Vigencia de la propiedad de las automatizaciones | Nombrar una lista de distribución o a un antiguo empleado como responsable | El responsable confirma por escrito; comprobar que el responsable está activo |

Una lectura sana es una cobertura creciente con una tasa de intervención manual y una tasa de incidentes estables o a la baja, un tiempo ahorrado verificado que coincide con lo que siente el equipo y un registro que se mantiene al día porque se eliminan las automatizaciones retiradas.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Automatizar de forma amplia y temprana | Elimina trabajo repetitivo; trabajo más rápido y coherente | Fallos rápidos y amplios; carga de mantenimiento; dependencias ocultas |
| Automatizar de forma selectiva con comprobaciones humanas | Menos riesgo; las personas conservan su destreza | Más lento; los aprobadores pueden dar el visto bueno sin mirar |
| Contar automatizaciones y horas ahorradas | Sencillo de reportar y comparar | Premia la cantidad; afirmaciones a menudo sin verificar |
| Medir el efecto, los fallos y la reversión | Muestra el valor y el riesgo reales | Más esfuerzo de recoger; requiere vincular registros |

La conclusión en prosa es automatizar lo que es estable y está comprendido, medir lo que quita y lo que rompe y mantener a las personas capaces de detenerlo. Una automatización que ahorra horas pero causa algún incidente grave ocasional puede ser un mal trato, y solo las medidas emparejadas lo mostrarán.

## Preguntas para debatir con tu equipo

**1. ¿Qué automatizaciones ejecutamos hoy y quién es el responsable de cada una?**
Construyan la lista juntos, porque los equipos suelen encontrar automatizaciones que nadie recuerda haber construido. Pidan el propósito, los permisos y la fecha de la última revisión. Esperen scripts en máquinas individuales y tareas programadas con antiguos empleados como responsables. Después acuerden quién posee cada una antes del final del trimestre.

**2. ¿Cuándo hizo una automatización por última vez un problema más grande o más rápido de lo que lo habría hecho una persona?**
Inviten a contar historias sin culpas. Los ejemplos típicos son un trabajo de limpieza que eliminó los recursos equivocados o una remediación que reinició un servicio durante una caída. Pregunten qué límite habría acotado el daño. Las respuestas se convierten en los límites de alcance y las reglas de aprobación.

**3. Para nuestra acción automatizada más arriesgada, ¿quién decide y podría decidir bien?**
Miren lo que ve el aprobador en el momento de la aprobación. A menudo a la petición de aprobación le falta la información necesaria para juzgar. Pregunten si el aprobador podría decir que no y qué pasaría si lo hiciera. Después mejoren la petición o cambien el papel.

**4. ¿Cómo sabríamos que una automatización ha dejado de funcionar en silencio?**
El fallo silencioso es el problema más común, y a menudo se manifiesta como números planos. Pidan la comprobación que lo notaría. Hablen de alertas por ejecuciones que faltan y por resultados que no coinciden con lo esperado. Elijan una automatización y pruébenla.

**5. ¿Cuáles de las horas ahorradas las gastamos realmente en algo mejor?**
El tiempo ahorrado sobre el papel puede no convertirse en capacidad. Pregunten adónde fue el tiempo y quién lo decidió. Sean honestos sobre el costo de mantenimiento y de fallos. Después elijan una afirmación para verificarla con una muestra.

**6. ¿Qué automatización deberíamos retirar y qué haría falta?**
Pidan evidencia de uso y de valor. La retirada puede parecer un fracaso, así que enmárquenla como mantenimiento rutinario. Identifiquen las dependencias antes de eliminar nada. Acuerden un periodo de prueba y una forma de restaurarla.

## Cuatro perspectivas

### Equipos de producto y de entrega

Construye la automatización como parte del producto, con pruebas, registros, un responsable y una forma de revertir. Incluye comprobaciones posteriores a la ejecución en la definición de terminado y evita automatizar pasos que el equipo aún no entiende. Mantén las métricas al nivel de las automatizaciones del equipo, no de los ingenieros individuales.

### Equipos de servicio y de operaciones

Ustedes llevan el buscapersonas cuando falla la automatización, así que insistan en la visibilidad y en una parada sencilla. Hagan seguimiento de las intervenciones manuales y de los incidentes causados por la automatización y úsenlos para priorizar correcciones. Traten el registro de automatizaciones como parte del registro del servicio.

### Liderazgo y gobernanza

Pidan efecto, fallos y preparación para la reversión, no solo recuentos de automatizaciones. Financien el mantenimiento de la automatización además de su creación y esperen que se retiren algunas automatizaciones. Fijen expectativas de supervisión humana según el riesgo y revisen la lista de las acciones más arriesgadas.

### Clientes y usuarios

No deberían notar la automatización cuando funciona, y deberían tener a una persona a quien acudir cuando no lo hace. Pregunten cómo llegar a una persona y digan cuándo una acción automatizada fue errónea. Su retroalimentación forma parte de la comprobación de que la automatización ayudó.

## En la práctica: un ejemplo de gestión de servicios

El equipo de operaciones de un minorista en línea mediano automatiza tres tareas: reiniciar un servidor web que falla, restablecer contraseñas del servicio de atención al cliente y limpiar el almacenamiento en la nube no usado. Los números de este ejemplo son ilustrativos. Tras un trimestre, el panel muestra 3 automatizaciones, 2400 ejecuciones y «unas 180 horas ahorradas». La dirección está contenta y pide más.

El equipo aplica las medidas. La tasa de éxito de las ejecuciones de automatización parece del 98 por ciento según el código de salida. Con una comprobación posterior a la ejecución, cae al 91 por ciento: el restablecimiento de contraseñas reporta éxito pero, en el 9 por ciento de las ejecuciones, el usuario no puede iniciar sesión. La tasa de intervención manual de esa automatización es del 11 por ciento. La automatización de reinicio ha causado dos incidentes, uno cuando reinició servidores durante una conmutación por error de la base de datos, con un tiempo de reversión de unos 40 minutos porque nadie lo había practicado.

La muestra de tiempos muestra que el restablecimiento manual de contraseñas llevaba unos cuatro minutos, no los diez que usó la estimación original, y que gestionar los restablecimientos fallidos lleva aproximadamente lo mismo que la tarea original. El tiempo ahorrado verificado está más cerca de 60 horas. La limpieza del almacenamiento tiene un responsable que dejó la empresa en primavera.

El equipo decide añadir una comprobación posterior a la ejecución al restablecimiento de contraseñas, un límite de alcance y una regla de pausa a la automatización de reinicio, y un nuevo responsable a la limpieza. Un gerente propone contar las «automatizaciones construidas» como objetivo del equipo. El equipo lo declina, porque premiaría construir más de lo mismo. La dificultad restante es que la comprobación posterior para las contraseñas necesita una cuenta de prueba, y el simulacro de reversión de la automatización de reinicio está programado para el trimestre próximo.

## Agilidad, IA, automatización y analítica

### Agilidad

Trata la automatización como un producto que se mejora continuamente con las personas que lo usan y dependen de él. Una buena práctica es una breve revisión regular con las partes interesadas de la lista de pendientes de automatización, los fallos y las intervenciones. La precaución es que los cambios pequeños y frecuentes en la automatización necesitan las mismas pruebas que otros cambios, o los fallos llegan más deprisa.

### IA

La IA puede redactar runbooks, escribir scripts y decidir qué acción emprender, y la IA agéntica puede actuar sobre los sistemas. Trata cualquier IA que pueda actuar como una automatización con un responsable, permisos, límites de alcance, una regla de aprobación y una reversión. Empareja su tasa de éxito con la tasa de acciones erróneas y la proporción que una persona tuvo que revertir (véase el tema 10.3, Métricas de agentes de IA y chatbots). La precaución es que un script escrito por la IA parece autorizado, así que pruébalo como cualquier código.

### Automatización

Este es el asunto del tema, así que la práctica es medir la propia plataforma de automatización: su disponibilidad, los fallos de ejecución y los tiempos de cola, ya que muchos servicios dependen de ella. Recoge automáticamente los datos de ejecución con identificadores de ejecución que se vinculen con tickets e incidentes. La precaución es que la plataforma de automatización se convierte en un punto único de fallo, así que ten una alternativa manual para las tareas críticas.

### Analítica

Vincula las ejecuciones con los resultados: comprobaciones posteriores exitosas, tickets e incidentes. La decisión a la que informa es qué automatización corregir, ampliar o retirar. La precaución es que la atribución depende de identificadores coherentes, así que audita la tasa de vinculación y muestra el número de ejecuciones detrás de cada tasa (véase el tema 10.8, Métricas de analítica y calidad de datos).

## Perspectiva sectorial

**Startup.** Los equipos pequeños automatizan rápido y con pocos controles. Mantén una lista corta de automatizaciones con responsables, pon una comprobación posterior a la ejecución en todo lo que toque a los clientes y evita construir una plataforma de orquestación antes de que haga falta.

**Pequeña empresa.** La automatización suele significar unas pocas tareas programadas y un servicio gestionado. Pregunta a tu proveedor qué automatización se ejecuta en tu nombre y cuál es la reversión. Mantén una lista y comprueba que alguien posee cada elemento.

**Gran empresa.** Muchas automatizaciones entre muchos equipos crean dependencias y duplicación. Mantén un registro central, un registro estándar y identificadores de ejecución, y una vía de revisión para las acciones de alto riesgo. Comparte las automatizaciones entre equipos en lugar de reconstruirlas.

**Gobierno y sector público.** Las necesidades de rendición de cuentas y de auditoría exigen que cada acción automatizada se pueda rastrear hasta una decisión y un responsable. Conserva los registros y las aprobaciones como evidencia y comprueba las reglas de contratación y jurídicas sobre decisiones automatizadas que afecten a la ciudadanía (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son construir y probar la automatización, ejecutar la plataforma, mantener la automatización a medida que cambian los sistemas y el costo de los fallos. Recoger las medidas cuesta poco si las ejecuciones se registran con identificadores. El costo mayor es la disciplina de responsables, revisiones y simulacros de reversión.

El retorno es la eliminación del trabajo repetitivo, un trabajo más rápido y coherente y menos errores manuales. Son reales pero fáciles de exagerar, así que verifica con muestras. El lado del riesgo son los incidentes causados por la automatización y el costo de una automatización que nadie mantiene. Un caso de negocio justo compara el tiempo ahorrado verificado, más los errores evitados, con el costo completo, incluidos el mantenimiento y los incidentes, y declara los supuestos como rangos (véase el tema 7.7, Retorno de la inversión y caso de negocio). No se dan aquí cifras de referencia, porque varían mucho según el contexto. Mide tus propias líneas base antes de empezar.

## Antipatrones y trampas

- **Contar automatizaciones construidas.** Premia la cantidad. Reporta el efecto, los fallos y la reversión.
- **El éxito por código de salida.** Una salida limpia prueba poco. Comprueba el resultado previsto.
- **Automatizaciones sin responsable.** Fallan en silencio a medida que cambian los sistemas. Mantén un registro y confirma los responsables.
- **Automatizar un mal proceso.** El defecto se mueve más rápido. Corrige primero el proceso.
- **Sin deshacer.** Una acción errónea y rápida sin reversión es el peor caso. Planifica y practica la reversión.
- **Reclamar horas ahorradas sin una muestra.** Verifica con muestras de tiempos y resta el mantenimiento.
- **Aprobación como teatro.** Un aprobador sin la información para decidir añade retraso y ninguna seguridad. Rediseña la petición.
- **La automatización como punto único de fallo.** Mantén una vía manual para las tareas críticas.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Propiedad y registro | Scripts conocidos solo por sus autores | Principales automatizaciones enumeradas | Registro con responsable, alcance y fecha de revisión | Revisiones y retiradas con una cadencia | Catálogo compartido y patrones estándar entre equipos |
| Seguridad y reversión | Sin deshacer; comprobaciones por código de salida | Algunas comprobaciones posteriores y registros | Comprobaciones posteriores, límites de alcance y reversión probada | Simulacros de reversión; incidentes vinculados a ejecuciones | Patrones de seguridad incorporados a la plataforma |
| Evidencia de valor | Recuentos y estimaciones | Tiempo ahorrado estimado | Tiempo ahorrado muestreado y verificado | Efecto, fallos y costo revisados juntos | Cartera de automatización gestionada por valor y riesgo |

## Lista de verificación

- [ ] Toda automatización tiene un responsable que ha confirmado la propiedad.
- [ ] Un registro enumera cada automatización con su propósito, alcance y permisos.
- [ ] Cada automatización tiene una comprobación posterior a la ejecución que confirma el resultado previsto.
- [ ] Las ejecuciones se registran con identificadores que se vinculan con tickets e incidentes.
- [ ] Cada automatización tiene un límite de alcance y una forma probada de deshacerla o pausarla.
- [ ] El papel del humano está definido para cada acción automatizada según el riesgo.
- [ ] El tiempo ahorrado se verifica con una muestra fechada.
- [ ] Las intervenciones manuales y los incidentes causados por la automatización se reportan junto con la cobertura.
- [ ] Las automatizaciones sin uso o sin responsable se revisan y se retiran.
- [ ] Cada métrica tiene un vector de manipulación y una barrera de protección mostrados a su lado.

## Prompts de IA

**Construye un registro de automatizaciones a partir del material que pegues.**

```text
I will paste a list of scripts, scheduled jobs, and automations we run: [paste
list with any notes]. Build a table with columns: name, purpose, system affected,
owner (use only what I provided; write "unknown" otherwise), permissions (only if
given), last review (only if given), and the first question I should ask about it.
Do not invent owners, dates, or permissions. List your assumptions at the end.
```

**Diseña una comprobación posterior y una reversión para una automatización.**

```text
Our automation is [name], which does [description] on [systems]. It runs [how
often] with [permissions]. Propose a post-run check that confirms the intended
result, a scope limit that caps damage, a way to pause it, and a rollback
approach. Say what information a human approver would need if we added an
approval step. Do not assume tools we have not named. List your assumptions and
the questions I should answer.
```

**Revisa el riesgo de manipulación de un panel de automatización.**

```text
We report these automation measures: [paste measures and definitions]. Our
context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without helping anyone, propose a guardrail, and say how that
guardrail could be gamed. Do not invent benchmark values. List your assumptions.
```

**Planifica una verificación del tiempo ahorrado.**

```text
We claim [number] hours saved by automating [task]. Draft a short plan to verify
it by sampling: what to time, how many samples to take, how to include
maintenance and failure handling, and how to report uncertainty. Do not invent
figures; use placeholders for numbers I should collect. List assumptions.
```

## Skills de IA

- [Runbook](../../../../skills/runbook/SKILL.md): úsalo para documentar una tarea antes de automatizarla.
- [Root cause analysis](../../../../skills/root-cause-analysis/SKILL.md): úsalo para analizar un incidente causado por una acción automatizada.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema que cubre una métrica y su barrera de protección emparejada.

## Ideas clave

- Los recuentos de automatizaciones y las horas ahorradas describen esfuerzo y afirmaciones, así que mide el efecto, los fallos y la reversión.
- Toda automatización necesita un responsable, una entrada de registro, una comprobación posterior a la ejecución, un límite de alcance y una forma de deshacerla o pausarla.
- Elige dónde decide un humano según el riesgo y prueba que el humano pueda decidir bien.
- Verifica el tiempo ahorrado con muestras fechadas y resta el costo del mantenimiento y de los fallos.
- Retira las automatizaciones que no tienen responsable, no se usan o ya no hacen falta.

## Referencias y lecturas complementarias

1. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
2. Wikipedia, [Orchestration (computing)](https://en.wikipedia.org/wiki/Orchestration_(computing)).
3. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
4. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
5. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
6. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
7. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
