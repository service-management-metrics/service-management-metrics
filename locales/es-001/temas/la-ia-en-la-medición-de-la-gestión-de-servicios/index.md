# La IA en la medición de la gestión de servicios

**Antes de que la IA cambie el trabajo, anota cómo es el trabajo hoy y luego mide cada uso de la IA frente a esa línea base y frente a un trabajo comparable hecho sin ella, porque las afirmaciones serán grandes y la evidencia suele ser pequeña.**

## Visión general y motivación

La inteligencia artificial está ya dentro de muchas de las herramientas que los equipos usan para construir y operar servicios. La [inteligencia artificial](https://en.wikipedia.org/wiki/Artificial_intelligence) (IA) es la capacidad de sistemas computacionales de realizar tareas asociadas con la inteligencia humana. Dentro de ella, los sistemas de [aprendizaje automático](https://en.wikipedia.org/wiki/Machine_learning) aprenden patrones a partir de datos, y los sistemas de [IA generativa](https://en.wikipedia.org/wiki/Generative_artificial_intelligence), a menudo construidos sobre [modelos de lenguaje de gran tamaño](https://en.wikipedia.org/wiki/Large_language_model), producen texto, código y otros contenidos en respuesta a prompts. En la gestión de servicios de TI (ITSM) estas capacidades aparecen en la clasificación de tickets, el resumen de incidentes, la redacción de artículos de conocimiento, las respuestas sugeridas para el centro de servicios, la compleción y la revisión de código en los pipelines de entrega, la detección de anomalías en la monitorización y los asistentes conversacionales para los usuarios. [AIOps](https://en.wikipedia.org/wiki/AIOps) es el nombre que suele darse a la aplicación de la IA a los datos de operaciones de TI.

Las afirmaciones que se hacen sobre estas herramientas son grandes, y la evidencia en cualquier organización concreta suele ser pequeña. Los proveedores reportan tiempo ahorrado. Los primeros adoptantes reportan entusiasmo. Los directivos piden la ganancia de eficiencia que se les prometió. Mientras tanto, los equipos reportan que hay que comprobar los resultados, que algunas sugerencias son erróneas con total aplomo y que el trabajo se siente distinto. La medición es la forma en que una organización averigua cuál de ellas es cierta para su propio trabajo. Esta parte del libro toma en serio la IA como algo que medir, con las mismas barreras de protección que cualquier otra familia de métricas.

La IA cambia el problema de la medición de cuatro maneras.

- **El volumen y la velocidad suben mientras la calidad se vuelve más difícil de ver.** La IA puede producir tickets, respuestas, código y documentos rápidamente, así que las medidas de producción suben. Si la producción es buena es una pregunta aparte (véase el tema 10.4, Inflación de métricas y dilución de la calidad).
- **Las líneas base desaparecen.** Cuando la IA está en uso diario, no se puede recuperar cómo era el trabajo sin ella. Hay que captar una línea base antes del cambio, o debe existir un grupo de comparación.
- **Los humanos siguen en el bucle, con consecuencias.** Los diseños con [humano en el bucle](https://en.wikipedia.org/wiki/Human-in-the-loop) mantienen a una persona responsable del resultado. Las personas que revisan la salida de una máquina pueden deferir a ella con demasiada facilidad, un patrón conocido como [sesgo de automatización](https://en.wikipedia.org/wiki/Automation_bias), o pueden gastar más tiempo comprobando del que ahorraron.
- **Las salidas pueden ser fluidas y erróneas.** Una [alucinación](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) es una salida confiada que no está respaldada por la entrada ni por los hechos. Las medidas deben incluir una comprobación de la corrección, muestreada por una persona.

Las formas de trabajar ágil e ITIL ofrecen ambas una postura ante esto. Los fines ágiles de entrega continua, mejora continua y evolución permanente sugieren tratar cada uso de la IA como un pequeño experimento: declara el beneficio esperado, pruébalo con unas pocas personas dispuestas, compara y decide. El principio rector de ITIL de progresar iterativamente con retroalimentación apunta en el mismo sentido, y su énfasis en el valor pregunta qué resultado mejora para los usuarios y el negocio, no cuánto texto se produce. El fin de las personas motivadas se sirve cuando la IA alivia el trabajo tedioso y respeta su juicio, y no se sirve cuando la IA se convierte en una forma de aumentar el ritmo o de monitorizar a quienes la usan. Un ritmo sostenible significa que el tiempo ahorrado no debe convertirse en silencio en más demanda.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica a la IA en su forma más aguda. Si la «adopción de IA» o la «proporción de código generado por IA» se convierte en un objetivo, la gente usará la herramienta donde no ayuda, y la calidad pagará el número (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Este tema cubre los fundamentos: dónde entra la IA en el trabajo, qué líneas base captar y qué medidas muestran si un uso de la IA ayuda. Los temas siguientes profundizan en el trabajo asistido, en los agentes y chatbots, en la inflación y la dilución y en la gobernanza. Los hechos sobre los productos y las normas de IA cambian deprisa, y las afirmaciones sobre herramientas o regulaciones concretas de esta parte están fechadas a octubre de 2026 y deben volver a comprobarse.

## Principios clave

- **Capta una línea base antes de introducir la IA.** Sin ella, cada afirmación de beneficio es una opinión.
- **Trata cada uso como un experimento con una comparación.** Compara con un trabajo similar hecho sin IA, durante el mismo periodo.
- **Mide la calidad mediante muestreo, con personas.** Una salida fluida no es una salida correcta.
- **Cuenta el costo completo.** Incluye el tiempo de revisión, el retrabajo, las licencias y los costos de inferencia.
- **Mantén responsables e informadas a las personas.** Quien usa la IA responde del resultado.
- **No dejes que la IA se convierta en un aumento de ritmo ni en un monitor.** El tiempo ahorrado es una decisión sobre cómo usar el tiempo.
- **Empieza con personas dispuestas y problemas reales.** Los mandatos producen uso sin valor.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Completitud de la línea base | Proporción de casos de uso de IA planificados que tienen una línea base previa a la adopción registrada para sus indicadores principales | casos de uso con línea base fechada / casos de uso planificados | porcentaje | Registro de casos de uso | Mejora continua; medición y elaboración de informes | Línea base antes de un experimento | Trimestral |
| Cobertura de uso de IA | Proporción de elementos de trabajo o tareas elegibles en que se usó IA, por caso de uso | elementos en que se usó asistencia de IA / elementos elegibles, a partir de los registros de la herramienta o de etiquetas de los usuarios, a nivel de equipo | porcentaje | Registros de uso de la herramienta, etiquetas | Centro de servicios; gestión de incidentes; gestión de versiones y despliegues | Adopción de una herramienta por equipos dispuestos | Mensual |
| Tasa de aceptación y de anulación de sugerencias | Proporción de sugerencias de la IA aceptadas tal cual, editadas o rechazadas | sugerencias en cada categoría / sugerencias ofrecidas | porcentaje | Registros de la herramienta agregados por equipo | Centro de servicios; gestión del conocimiento | Revisión de las sugerencias de la máquina | Mensual |
| Exactitud de la salida revisada | Proporción de salidas de IA muestreadas que un revisor cualificado juzga correctas y aptas para su propósito | salidas juzgadas correctas / salidas muestreadas | porcentaje | Registros de revisión muestreada | Aseguramiento de la calidad; gestión del conocimiento | Definición de terminado para la salida | Mensual |
| Tiempo de la tarea frente a la línea base | Tiempo para completar una tarea definida con IA comparado con la línea base o un grupo de comparación | mediana y percentil 85 del tiempo de la tarea con IA menos lo mismo para la línea base o la comparación | minutos u horas | Tareas cronometradas, marcas de tiempo de los tickets | Centro de servicios; gestión de incidentes | Tiempo de ciclo de una tarea | Trimestral |
| Costo por tarea asistida por IA | Costo total del trabajo asistido por IA por tarea, incluidas la revisión y el retrabajo | (costo de licencias y uso + costo del tiempo de revisión y retrabajo) / tareas completadas con IA | moneda por tarea | Facturas de proveedores, estimaciones de tiempo, gestor de trabajo | Gestión financiera de servicios | Costo de servir por resultado | Trimestral |
| Movimiento del resultado frente a la comparación | Cambio en el indicador de resultado del trabajo asistido por IA frente a un trabajo similar no asistido | cambio en el indicador del grupo asistido por IA menos el cambio del grupo de comparación | unidades del indicador | Medidas de resultado por caso de uso (calidad, satisfacción, tasa de reapertura, defectos) | Mejora continua | Aprendizaje de los experimentos | Trimestral |

Define cada caso de uso por la tarea, los usuarios y los indicadores de resultado, y anótalos en el registro. La cobertura de uso de IA es una medida descriptiva y no un objetivo. La exactitud de la salida revisada se juzga frente a un estándar escrito por alguien cualificado que no produjo la salida. El tiempo de la tarea incluye el tiempo de redactar el prompt, revisar y corregir además del de generar. El costo por tarea cuenta el tiempo de las personas dedicado a comprobar y arreglar. El movimiento del resultado requiere una comparación elegida de antemano y una nota sobre otros cambios durante el periodo.

## Recomendaciones

### Decide dónde pertenece la IA

**1. Enumera las tareas y el problema que aborda cada uso de la IA.** Parte del dolor, no de la herramienta: redacción repetida, clasificación lenta, conocimiento disperso, revisiones largas, alertas ruidosas. Para cada uso candidato, anota el problema, quién lo siente, el resultado que debe mejorar y los riesgos. Descarta los usos sin un problema claro. Este es el registro del que cuelgan la línea base y las medidas.

**2. Clasifica el riesgo de cada uso.** Una herramienta que redacta notas internas conlleva un riesgo distinto del de una que cambia sistemas de producción, responde a clientes o toma decisiones sobre personas. Clasifica los usos por el daño si la salida es errónea, a quién afecta y si una persona la revisa antes de que surta efecto. Los usos de mayor riesgo necesitan medidas, muestreo y gobernanza más fuertes (véase el tema 10.5, Métricas de gobernanza y riesgo de la IA).

**3. Empieza con personas dispuestas y tareas acotadas.** Haz el piloto con voluntarios en una tarea común y comprobable. Los voluntarios dan retroalimentación honesta y adaptan la herramienta a su trabajo. Una tarea acotada hace factibles las líneas base y las comparaciones. Evita empezar por el trabajo más sensible.

### Capta líneas base y prepara comparaciones

**4. Registra la línea base antes del primer uso.** Para cada caso de uso, capta el estado actual de los indicadores: tiempo de realización, tasa de calidad o de defectos, retrabajo, satisfacción de los usuarios y costo. Toma observaciones suficientes para ver la variación normal (véase el tema 1.6, Alfabetización estadística para métricas de servicio). Fecha la línea base y consérvala. Una línea base tomada después del despliegue es un registro del mundo nuevo.

**5. Construye una comparación.** Cuando sea posible, mantén un grupo similar o un conjunto de tareas que no use IA durante el periodo del piloto, o alterna el uso por semana o por tipo de tarea de una manera justa. La aleatorización es ideal y a menudo poco práctica. Declara con claridad qué más cambió. Sin una comparación, las mejoras debidas a la estacionalidad, la dotación de personal o el aprendizaje se atribuirán a la herramienta.

**6. Mide el tiempo con honestidad.** El tiempo hasta un primer borrador rara vez es la medida correcta. Mide el tiempo hasta un resultado terminado y comprobado, incluidos el prompt, la revisión y la corrección. La gente suele reportar el tiempo ahorrado basándose en el paso de generación, y el paso de revisión se come parte o todo. Vale la pena el esfuerzo de hacer estudios de tiempos en una muestra de tareas.

### Mide la calidad y el costo

**7. Muestrea las salidas para que las revisen personas cualificadas.** Cada mes, extrae una muestra aleatoria de salidas asistidas por IA y haz que una persona cualificada las juzgue frente a un estándar escrito. Reporta la exactitud, los tipos de errores encontrados y las tendencias. Es la principal protección contra la extensión de errores fluidos. Mantén al revisor independiente del productor y rota a los revisores.

**8. Vigila los patrones de aceptación y de anulación.** Una tasa de aceptación muy alta puede señalar un sesgo de automatización, en que la gente acepta sin comprobar. Una tasa muy baja puede señalar una herramienta que no es útil. Usa las tasas como motivo de conversación con el equipo y pregunta qué significan los números según su experiencia. No fijes objetivos de aceptación.

**9. Cuenta el costo completo por tarea.** Incluye las cuotas de licencia, los cargos basados en el uso, el tiempo dedicado a redactar prompts, revisar y corregir, la formación y el esfuerzo de gobernanza. Compara con el costo de la línea base. Una herramienta que hace borradores rápidamente y necesita mucha corrección puede costar más que la forma antigua. Incluye el costo de los errores que llegan a los usuarios.

### Mantén bien el lado humano

**10. Protege a las personas de la monitorización y del aumento progresivo del ritmo.** Agrega los datos de uso de la IA a nivel de equipo y no los uses para valorar a individuos. No uses el uso como medida de rendimiento. Acuerda de antemano que el tiempo ahorrado no se convertirá automáticamente en carga extra de trabajo y decide con el equipo qué hacer con él: calidad, aprendizaje, mejora u otro trabajo. Un ritmo constante es un objetivo de diseño (véase el tema 9.2, Métricas de satisfacción y bienestar).

**11. Pregunta a las personas que la usan.** Los pulsos breves y las conversaciones revelan lo que los números se pierden: dónde ayuda la herramienta, dónde frustra, dónde desplaza el trabajo de crear a comprobar y si cambia la satisfacción con el empleo. Trata con respeto las preocupaciones sobre las habilidades, la calidad y la seguridad del empleo.

**12. Decide, publica y revisa de nuevo.** Al final de cada piloto, decide si escalar, adaptar o parar, y anota la evidencia. Comparte los resultados con honestidad, incluidos los nulos y los negativos. Vuelve a revisar las decisiones a medida que cambian las herramientas, lo que ocurre deprisa. Un uso que no ayudó el año pasado puede ayudar ahora, y al revés.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Completitud de la línea base | Registrar líneas base después del hecho; usar indicadores convenientes | Líneas base con fecha y hora; revisión independiente del método de la línea base |
| Cobertura de uso de IA | Imponer el uso; contar invocaciones triviales o automáticas | Nunca un objetivo; comparar con el movimiento del resultado; contar el uso significativo |
| Tasa de aceptación y de anulación de sugerencias | Premiar la aceptación; hacer engorroso el rechazo | Sin objetivos; exactitud de la salida revisada; preguntar a los usuarios por su experiencia |
| Exactitud de la salida revisada | Muestrear salidas fáciles; revisores indulgentes | Muestra aleatoria por revisores independientes; estándar escrito; rotación de revisores |
| Tiempo de la tarea frente a la línea base | Cronometrar solo la generación; elegir tareas fáciles | Tiempo hasta el resultado comprobado; muestrear las tareas al azar; incluir la revisión y el retrabajo |
| Costo por tarea asistida por IA | Omitir el tiempo de revisión o el costo de gobernanza | Lista de verificación del costo completo; comparar con los estudios de tiempos |
| Movimiento del resultado frente a la comparación | Elegir grupos o periodos favorables; ignorar otros cambios | Comparación y periodo acordados de antemano; lista de otros cambios |

Una lectura sana son líneas base para cada piloto, tiempos medidos hasta resultados terminados, exactitud comprobada por personas cualificadas, costos que incluyen la revisión, resultados comparados con justicia y equipos que dicen que la herramienta sirve a su juicio.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Piloto con voluntarios | Retroalimentación honesta; poco riesgo | Los voluntarios son entusiastas; los resultados pueden no generalizarse |
| Despliegue por mandato | Cobertura rápida | Uso sin valor; resentimiento; manipulación |
| Comparación controlada | Evidencia creíble | Esfuerzo; no siempre es posible |
| Solo antes y después | Sencillo | Confundido por otros cambios |
| Ahorros reportados por el proveedor | Fáciles de obtener | Optimistas; sin contexto |
| Tareas cronometradas propias | Basadas en tu trabajo | Consumen tiempo; muestras pequeñas |
| Revisión pesada de cada salida | Segura | Elimina el beneficio |
| Revisión muestreada | Escala | Se cuelan algunos errores |

La respuesta en prosa es ejecutar pilotos pequeños con líneas base y comparaciones, muestrear las salidas para la calidad, contar el costo completo y decidir según la evidencia. Usa las cifras de los proveedores como hipótesis que contrastar.

## Preguntas para debatir con tu equipo

**1. ¿Dónde esperamos que nos ayude la IA y qué veríamos si lo hiciera?**
Enumeren los usos candidatos y, para cada uno, el indicador y la línea base que tenemos hoy. El facilitador debe empujar hacia lo concreto: qué tarea, qué medida, qué tamaño de cambio importaría. Elijan un uso para el piloto y acuerden la línea base.

**2. ¿Qué nos haría confiar o desconfiar de una sugerencia de la IA y cómo sabríamos que nos equivocamos?**
Hablen de casos en que la salida fue errónea y de cómo se notó. Consideren cómo funciona la revisión en la práctica y si la presión lleva a saltársela. Acuerden un método de muestreo que ejecutará alguien independiente.

**3. ¿Cuánto del tiempo que ahorremos se irá en comprobar?**
Cronometren una tarea real con la herramienta y sin ella, incluidos el prompt y la revisión. Comparen con lo que la gente espera. La conversación suele revelar dónde está la ganancia y dónde no.

**4. ¿Qué deberíamos hacer con el tiempo que ahorremos?**
Decídanlo de antemano. Las opciones incluyen trabajo de calidad, aprendizaje, mejora o menos presión. Hablen de cómo impedir que el tiempo se absorba en silencio en más demanda. Acuerden con los líderes cómo lo protegerá el equipo.

**5. ¿Qué no querríamos que hiciera la IA aquí y por qué?**
Enumeren las tareas que necesitan juicio humano, empatía o responsabilidad. Hablen de los riesgos para los usuarios y para las habilidades. El facilitador debe registrar los límites como insumos para la gobernanza.

**6. ¿Cómo sabremos cuándo parar?**
Definan la evidencia que pondría fin al piloto o al uso. Acuerden quién decide y cuándo. Un piloto sin criterios de salida se convierte en un elemento permanente.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega usan la IA para código, pruebas, revisiones y documentación. Deben medir el tiempo hasta un resultado revisado y funcional, vigilar la calidad y los defectos y mantener significativa la revisión humana. Deben resistirse a las métricas que cuentan líneas generadas o la aceptación e insistir en medidas de resultado como los defectos y la estabilidad.

### Equipos de servicio y de operaciones

Los equipos de operaciones y del centro de servicios usan la IA para la clasificación, los resúmenes, las sugerencias y la monitorización. Deben comparar la calidad de la gestión y de la resolución con las líneas base, muestrear las salidas y vigilar los efectos sobre los usuarios y sobre los contactos repetidos. Se les debe consultar antes de poner la IA delante de los usuarios.

### Liderazgo y gobernanza

Los líderes patrocinan los programas de IA y afrontan la presión de mostrar ganancias. Deben insistir en líneas base y comparaciones, financiar el trabajo de revisión, evitar los objetivos de uso y proteger a las personas de la monitorización y del aumento progresivo del ritmo. La gobernanza debe exigir la clasificación del riesgo y la evidencia antes de escalar.

### Clientes y usuarios

Los usuarios se encuentran con la IA en respuestas, sugerencias y acciones automatizadas. Quieren ayuda correcta y comprensible y la posibilidad de llegar a una persona. Debe decírseles cuándo interactúan con IA donde corresponda, y su retroalimentación es una evidencia clave de si ayuda (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de gestión de servicios

El grupo de tecnología de una aseguradora mediana opera un centro de servicios interno para 4000 empleados y varios equipos de producto. La dirección compra licencias de un asistente de IA y pide un informe del tiempo ahorrado tras tres meses. Los números siguientes son ilustrativos.

La jefa de gestión de servicios insiste en una línea base. Para la tarea más común del centro de servicios, redactar respuestas a solicitudes de acceso y de contraseña, cronometra 120 tickets recientes: tiempo mediano de gestión de 11 minutos, percentil 85 de 24, una tasa de reapertura del 6 por ciento y una puntuación de satisfacción de la encuesta que es estable. Elige dos equipos para pilotar el asistente y mantiene dos equipos similares como comparación. Los equipos piloto son voluntarios.

Tras ocho semanas, el tiempo mediano de gestión de los equipos piloto es de 8 minutos y el percentil 85 es de 19, frente a 11 y 23 en los equipos de comparación. Los registros de la herramienta muestran que los agentes aceptan las sugerencias tal como están en el 52 por ciento de los casos, las editan en el 38 por ciento y las rechazan en el 10 por ciento. Una muestra aleatoria mensual de 80 respuestas, revisada por un agente sénior ajeno al piloto, encuentra que el 91 por ciento son totalmente correctas, con errores concentrados en un procedimiento de uso poco frecuente en que el asistente dio pasos desactualizados. La tasa de reapertura en los equipos piloto sube ligeramente al 7 por ciento, dentro de la variación normal. El costo por ticket baja modestamente una vez contadas las licencias y el tiempo de revisión. Una encuesta muestra que los agentes agradecen los borradores y no les gusta la comprobación adicional de las respuestas largas. Dos agentes dicen sentir presión para gestionar más tickets por hora.

La jefa de gestión de servicios reporta un ahorro de tiempo de aproximadamente una cuarta parte en la mediana y declara las salvedades: dos equipos, ocho semanas, voluntarios y una tasa de reapertura que hay que vigilar. Acuerda con los líderes que el tiempo ahorrado irá a la base de conocimiento y a los casos complejos, y que no subirá ningún objetivo de tickets. Se corrige el procedimiento desactualizado en la base de conocimiento. Un directivo sénior pide el uso obligatorio en toda la empresa y un objetivo del 80 por ciento de aceptación. Ella declina el objetivo, explicando que un objetivo de aceptación premiaría no comprobar, y propone extender el piloto a otros dos equipos con las mismas medidas. La decisión se anota.

## Agilidad, IA, automatización y analítica

### Agilidad

Introduce la IA en pasos pequeños con las partes interesadas, con una línea base y una comparación para cada paso, y revisa el resultado en la conversación regular de mejora. La precaución es que desplegar la IA en todas partes a la vez elimina el grupo de comparación.

### IA

Este tema entero trata de la IA, así que la regla es sencilla: registra el trabajo tal como es hoy, mide cada uso frente a esa línea base y frente a un trabajo comparable hecho sin IA, y empareja cada ganancia de velocidad con una medida de calidad comprobada. Nombra un responsable para cada uso y decide de antemano dónde decide un humano. La precaución es que las cifras de los proveedores describen otras organizaciones, así que usa tus propios datos.

### Automatización

Recoge automáticamente los eventos de uso, sugerencia, aceptación y anulación, y mide la automatización que aplica la salida de la IA por sus tasas de error y de reversión. La precaución es que las tasas de aceptación pueden subir porque la gente deja de comprobar, así que muestrea la salida aceptada.

### Analítica

Reporta la exactitud a partir de una muestra revisada con el tamaño de la muestra, y los resultados frente a una comparación con los límites declarados. La decisión a la que informa es si ampliar, cambiar o detener un uso de la IA. La precaución es que los pilotos pequeños dan resultados ruidosos, así que evita prometer una cifra a partir de un piloto.

## Perspectiva sectorial

**Startup.** Las herramientas se adoptan rápido y a menudo de manera informal. Capta una línea base sencilla de tiempo y defectos para el uso principal, mantén la revisión humana de todo lo que se dirija al cliente y evita quedar atado pronto a un solo proveedor. Vigila la seguridad y la exposición de datos cuando el personal usa herramientas públicas.

**Pequeña empresa.** Los asistentes de uso general pueden ofrecer ayuda real para redactar y para tareas rutinarias. Mide a pequeña escala: el tiempo de unas pocas tareas reales y la tasa de correcciones. Ten cuidado con los datos confidenciales y comprueba los términos del proveedor sobre cómo se usan los datos.

**Gran empresa.** La escala exige gobernanza, estándares de contratación y un enfoque de medición común. Ejecuta pilotos con comparación, publica los resultados internamente y comparte líneas base y métodos entre equipos. Cuidado con los programas que reportan el uso como éxito.

**Gobierno y sector público.** Las decisiones que afectan a la ciudadanía pueden estar sujetas a deberes legales de transparencia, imparcialidad y revisión humana. Clasifica los usos por riesgo, conserva registros de cómo se usó la IA en las decisiones y sé abierto al respecto. Se aplican las normas de contratación y de protección de datos, y algunas jurisdicciones tienen leyes específicas de IA que conviene comprobar en su estado actual (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son las licencias o los cargos por uso, la integración, la formación, el tiempo de captar líneas base y ejecutar comparaciones, el tiempo de las personas dedicado a revisar y corregir las salidas y el esfuerzo de gobernanza. Los costos pueden escalar con el uso y cambiar con los precios del proveedor, así que modela un rango.

Los retornos potenciales son tiempo recuperado en tareas repetitivas, redacción y búsqueda más rápidas, mejor cobertura del conocimiento y alivio del trabajo tedioso para el personal. Son posibilidades que contrastar, no supuestos que dar por ganados. Construye el caso con tus propios pilotos: el tiempo medido de la tarea hasta un resultado comprobado, la exactitud revisada, el retrabajo y el costo completo por tarea, frente a la línea base y la comparación. Evita citar porcentajes de productividad de fuentes de proveedores o de encuestas salvo que puedas rastrear el método y su encaje con tu trabajo. Incluye el riesgo de los errores que llegan a los usuarios y el costo de gobernar las herramientas (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Introducir la IA sin una línea base.** No puedes saber qué cambió. Cáptala primero.
- **Medir la velocidad de generación.** El ahorro puede desvanecerse en la revisión. Mide el tiempo hasta un resultado comprobado.
- **Objetivos de adopción.** Producen uso sin valor. Trata la cobertura como descriptiva.
- **Confiar en las afirmaciones de los proveedores.** Son hipótesis. Contrástalas con tu trabajo.
- **Una revisión que no es real.** El sesgo de automatización convierte la revisión en un sello de goma. Muestrea y comprueba de forma independiente.
- **Convertir el tiempo ahorrado en más demanda.** Erosiona la confianza y el ritmo sostenible. Decide de antemano para qué es el tiempo.
- **Monitorizar el uso individual.** Genera miedo. Agrega a nivel de equipo.
- **Pilotos sin fin.** Se vuelven permanentes por defecto. Fija criterios de salida.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Propósito y líneas base | Herramientas adoptadas por entusiasmo | Casos de uso enumerados | Registro con problema, clase de riesgo, línea base e indicador para cada uso | Líneas base y comparaciones exigidas antes de escalar; resultados publicados | Líneas base y métodos compartidos entre equipos y socios; usos retirados cuando se desvanece la evidencia |
| Evidencia de beneficio | Anécdotas y afirmaciones de proveedores | Estimaciones informales de tiempo | Tareas cronometradas; exactitud muestreada; costo completo por tarea | Movimiento del resultado frente a la comparación reportado con límites | Visión de cartera de dónde ayuda la IA, con el aprendizaje ampliamente compartido |
| Personas y ritmo | Mandatos; monitorización | Cuidado informal | Solo datos a nivel de equipo; tiempo ahorrado asignado por acuerdo | Preocupaciones con seguimiento; habilidades y satisfacción medidas | Codiseño del uso de la IA con usuarios y personal; ritmo sostenido protegido |

## Lista de verificación

- [ ] Cada uso de la IA tiene un problema escrito, una clase de riesgo, un responsable y criterios de salida.
- [ ] Existe una línea base fechada para cada piloto antes del primer uso.
- [ ] Un grupo de comparación o tareas de comparación están definidos de antemano.
- [ ] El tiempo se mide hasta un resultado terminado y comprobado.
- [ ] Las salidas se muestrean cada mes y las revisan personas cualificadas e independientes.
- [ ] El costo completo por tarea incluye la revisión y el retrabajo.
- [ ] Los datos de uso se agregan a nivel de equipo y no se usan para individuos.
- [ ] El equipo ha acordado qué hacer con el tiempo ahorrado.
- [ ] Se pregunta a los usuarios por su experiencia con la herramienta.
- [ ] Los pilotos terminan en una decisión registrada de escalar, adaptar o parar.

## Prompts de IA

**Redacta una entrada de caso de uso.**

```text
We are considering using AI for [task] in [team and service]. Draft a use case
register entry: the problem and who feels it, the outcome that should improve,
risk classification and why, the human review step, baseline indicators to
capture now, a comparison approach, cost components to track, exit criteria,
and questions for the team. Do not assume specific vendor features or claim
benefits. List your assumptions.
```

**Diseña un estudio de tareas cronometradas.**

```text
Design a small study to measure the effect of an AI assistant on [task]. Propose
how to select tasks, how to compare with and without the tool fairly, what to
time (including prompting, review, and correction), how to judge output quality,
and how to avoid bias. Keep it practical for a team of [number] people.
Do not state expected results. List your assumptions and limits of the design.
```

**Planifica el muestreo de salidas.**

```text
Our AI-assisted outputs per month are about [number] of types [list]. Design a
monthly random sampling and review process: sample size and selection method (with
the reasoning, avoiding overstated precision), who reviews, the written standard,
error categories, how to report, and how to use findings. List your assumptions
and risks.
```

**Decide qué hacer con el tiempo ahorrado.**

```text
Our pilot saved a median of [value] per task for [number] tasks per week in
[team]. Suggest options for using the time that support quality, learning, and
a sustainable pace, with the trade-offs and risks of each, and a way to agree
the choice with the team and leaders. Do not assume the savings will persist.
List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica relacionada con la IA antes de reportarla.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de IA registra su línea base, su comparación, su vector de manipulación y su barrera de protección.

## Ideas clave

- Capta una línea base fechada antes de usar la IA y compara con un trabajo similar hecho sin ella.
- Mide el tiempo hasta un resultado terminado y comprobado, y muestrea las salidas para la exactitud con revisores independientes.
- Cuenta el costo completo, incluidos la revisión y el retrabajo.
- Trata el uso y la aceptación como descriptivos, nunca como objetivos.
- Decide de antemano qué hacer con el tiempo ahorrado y mantén un ritmo sostenible.
- Mantén los datos de uso a nivel de equipo y termina cada piloto con una decisión registrada.

## Referencias y lecturas complementarias

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
4. Bender, E. M., Gebru, T., McMillan-Major, A., and Shmitchell, S., "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 2021.
5. Russell, S., and Norvig, P., *Artificial Intelligence: A Modern Approach*, 4th ed., Pearson, 2020.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
8. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
9. Wikipedia, [Generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence).
10. Wikipedia, [Large language model](https://en.wikipedia.org/wiki/Large_language_model).
11. Wikipedia, [AIOps](https://en.wikipedia.org/wiki/AIOps).
12. Wikipedia, [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop).
13. Wikipedia, [Automation bias](https://en.wikipedia.org/wiki/Automation_bias).
14. Wikipedia, [Hallucination (artificial intelligence)](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
