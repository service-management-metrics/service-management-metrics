# Métricas de autoservicio y automatización

**Mide el autoservicio por si la gente obtuvo lo que necesitaba sin ayuda, y mide la automatización por el trabajo que elimina y los fallos que crea, porque un contacto que nunca llegó solo es un éxito si el problema se resolvió.**

## Visión general y motivación

El autoservicio y la automatización son las dos formas principales en que una organización de servicios quita trabajo rutinario a su gente. El [autoservicio](https://en.wikipedia.org/wiki/Self-service_software) permite a un usuario resolver un problema u obtener algo por sí solo, mediante un portal, un artículo de conocimiento, una página de restablecimiento de contraseña o un [chatbot](https://en.wikipedia.org/wiki/Chatbot). La [automatización](https://en.wikipedia.org/wiki/Automation) permite a un sistema realizar los pasos que antes realizaba una persona, como crear una cuenta, reiniciar un servicio o cerrar un ticket una vez que un monitor confirma la recuperación. Ambas apuntan al mismo resultado: menos tareas repetitivas para las personas, resultados más rápidos para los usuarios y más tiempo para el trabajo que requiere juicio.

Las ideas encajan en ambas tradiciones. En [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la práctica de gestión de solicitudes de servicio espera que las solicitudes bien comprendidas y repetibles se gestionen mediante flujos estándar con toda la automatización que sea sensata, y las prácticas de gestión de incidentes y de gestión del conocimiento esperan que haya buena información disponible para los usuarios y para el personal de soporte en el punto útil más temprano. La práctica ágil y de DevOps llega al mismo lugar por otro camino: la [infraestructura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code), los pipelines y la disciplina de eliminar el trabajo repetitivo (toil), que los libros de ingeniería de fiabilidad del sitio de Google definen como trabajo manual, repetitivo y automatizable que crece con el servicio. La idea compartida suele llamarse «desplazamiento a la izquierda» (shift left): trasladar la resolución de un problema hacia el usuario, o hacia el punto más barato y temprano de la cadena de soporte, y alejarla de la cola de especialistas.

El lenguaje del desplazamiento a la izquierda invita a un error de medición. Los equipos ven que un contacto evitado es barato y entonces cuentan los contactos evitados como éxito. El recuento es fácil de producir, porque una visita al portal que no terminó en un ticket se ve idéntica a una visita al portal donde el usuario se rindió. Por eso este tema parte del resultado del usuario. Define qué significa el éxito del autoservicio, cómo estimar el desvío sin atribuirse el mérito del abandono, cómo medir la cobertura y la fiabilidad de la automatización y cómo ver el efecto de desplazamiento a la izquierda sobre el volumen y la complejidad. Las medidas de volumen y prioridad relacionadas están en el tema 3.2, Volumen y prioridad de incidentes, el lado de las solicitudes está en el tema 3.5, Métricas de cumplimiento de solicitudes de servicio, y el lado del conocimiento está en el tema 3.6, Métricas de gestión del conocimiento.

Términos usados en este tema:

- **Nivel 0 (o nivel de autoservicio)**: resolución por el usuario sin contactar con el personal. El nivel 1 es la primera línea de soporte, normalmente el centro de servicios, y los niveles 2 y 3 son los niveles de especialistas y de ingeniería.
- **Desvío**: un contacto que de otro modo habría llegado al personal y se resolvió en cambio en el nivel 0. No puede observarse directamente, así que siempre es una estimación.
- **Caída al siguiente nivel (fall-through)**: un usuario que probó el autoservicio, no tuvo éxito y contactó después con el personal por la misma necesidad.
- **Runbook**: un procedimiento documentado para una tarea operativa rutinaria. Un [runbook](https://en.wikipedia.org/wiki/Runbook) es el primer paso habitual para automatizarla.
- **Trabajo repetitivo (toil)**: trabajo manual, repetitivo y automatizable sin valor duradero (véase el tema 5.7, Métricas de trabajo repetitivo y guardias).
- **Catálogo de servicios**: la lista de servicios y solicitudes estándar ofrecidos a los usuarios. ITIL lo llama en inglés service catalogue.

## Principios clave

- **Cuenta resultados, no contactos evitados.** Una sesión de portal sin ticket es un éxito solo cuando se cubrió la necesidad del usuario. Define el éxito desde el lado del usuario y verifícalo con una señal de seguimiento.
- **El desvío es una estimación, así que etiquétalo como tal.** Indica el método, la comparación usada y la incertidumbre. No presentes nunca una cifra estimada de desvío como un hecho medido.
- **Mide el camino de caída al siguiente nivel.** La ruta desde un intento fallido de autoservicio hasta un contacto atendido por el personal es donde vive la mayor parte del fallo oculto. Repórtala junto a cada número de éxito.
- **La automatización tiene un lado de costo.** Cada flujo automatizado necesita mantenimiento, monitorización y una forma de fallar con seguridad. Mide juntas la cobertura y la fiabilidad y cuenta el esfuerzo dedicado a mantener viva la automatización.
- **El desplazamiento a la izquierda cambia la mezcla además del volumen.** Cuando el trabajo fácil sale de la cola, el trabajo restante es más difícil y más lento en promedio. Lee el tiempo de resolución y el tiempo de gestión teniéndolo en cuenta (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes).
- **Las métricas describen servicios y flujos.** Reporta por elemento del catálogo, familia de artículos o flujo de automatización. No clasifiques nunca a los agentes por a cuántos usuarios empujaron al autoservicio.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de éxito del autoservicio | Proporción de sesiones de autoservicio en que se cubrió la necesidad del usuario sin contacto con el personal | Sesiones que terminaron en un resultado completado (solicitud enviada y cumplida, artículo marcado como útil, restablecimiento completado) sin contacto atendido por el personal sobre la misma necesidad en 7 días, dividido por todas las sesiones que iniciaron una tarea. El reloj empieza en la primera acción significativa del portal y se detiene en la finalización o el abandono. Excluye el tráfico de bots, las cuentas de prueba y la mera navegación | Porcentaje | Registros del portal y de identidad, sistema de tickets, analítica de sesiones | Gestión de solicitudes de servicio; gestión del conocimiento | Bucle de retroalimentación del cliente; criterios de aceptación basados en resultados | Mensual |
| Tasa estimada de desvío | Proporción estimada de la demanda resuelta en el nivel 0 que de otro modo habría llegado al personal | Comparar la tasa de contactos por 1000 usuarios activos de un servicio antes y después de un cambio de autoservicio, o frente a un grupo de control, ajustada por los cambios de demanda conocidos. Se declara como una estimación con el método nombrado. Excluye los contactos que pasaron a otro canal | Porcentaje (estimación) | Sistema de tickets, recuentos de población de usuarios, datos de experimentos o cohortes | Centro de servicios; gestión de incidentes | Experimento con grupo de control; prueba A/B | Trimestral |
| Tasa de caída al siguiente nivel | Proporción de intentos fallidos de autoservicio que terminan en un contacto atendido por el personal sobre la misma necesidad | Contactos atendidos por el personal abiertos en los 7 días siguientes a una sesión de autoservicio abandonada o fallida del mismo usuario sobre el mismo tema, dividido por las sesiones fallidas. El reloj empieza al terminar la sesión. Excluye los contactos no relacionados | Porcentaje | Registros del portal unidos al sistema de tickets por usuario y tema | Centro de servicios; gestión del conocimiento | Ruta de escalada en una definición de terminado; retroalimentación de soporte | Mensual |
| Adopción del autoservicio (proporción primero-portal) | Proporción de las solicitudes y reportes de incidentes elegibles planteados por canales de autoservicio | Elementos creados mediante portal, bot o API, divididos por todos los elementos de las entradas del catálogo que ofrecen una vía de autoservicio. Excluye los elementos para los que no existe vía de autoservicio | Porcentaje | Campo de canal del sistema de tickets, configuración del catálogo | Gestión de solicitudes de servicio; gestión del catálogo de servicios | Seguimiento de la adopción tras una versión | Mensual |
| Cobertura de la automatización | Proporción del trabajo repetible elegible completado por automatización sin ningún paso manual | Elementos completados de extremo a extremo por un flujo automatizado, divididos por todos los elementos de los tipos considerados automatizables. Cuenta el tipo como automatizable solo si lo nombra una lista escrita de candidatos. Excluye el trabajo puntual y los elementos que la automatización rechazó | Porcentaje | Sistema de tickets, registros de la plataforma de automatización, lista de candidatos | Gestión de solicitudes de servicio; gestión de despliegues | Automatización de la definición de terminado; pipeline como código | Mensual |
| Tasa de fallos y retrabajo de la automatización | Proporción de ejecuciones automatizadas que fallaron, necesitaron reparación manual o produjeron un resultado corregido después | Ejecuciones automatizadas que dieron error, se revirtieron o fueron seguidas de una corrección manual en 7 días, divididas por todas las ejecuciones automatizadas. El reloj empieza al iniciarse la ejecución. Excluye los ensayos planificados | Porcentaje | Registros de la plataforma de automatización, sistema de tickets, registros de cambios | Habilitación de cambios; gestión de incidentes | Tasa de fallos de cambio; estabilidad de compilación y pruebas | Semanal |
| Tiempo manual de trabajo activo por tipo de solicitud | Esfuerzo del personal dedicado a un tipo de solicitud candidato a automatización | Minutos de trabajo activo registrados por el personal en elementos del tipo en el periodo, resumidos como mediana y percentil 85 por elemento. Se estima por muestreo donde no se registra el tiempo. Excluye el tiempo de espera | Minutos por elemento | Muestreo de tiempo, registros de trabajo de los tickets | Gestión de solicitudes de servicio | Seguimiento del trabajo repetitivo; desperdicio del flujo de valor | Trimestral |
| Distribución por nivel (proporción de desplazamiento a la izquierda) | En qué punto de la cadena de soporte se resuelven los elementos | Elementos resueltos en cada nivel (0, 1, 2, 3) divididos por todos los elementos resueltos del periodo. El nivel es el nivel más alto que hizo trabajo activo. Excluye los elementos cancelados antes de la clasificación inicial | Porcentaje por nivel | Grupo resolutor del sistema de tickets e historial de asignaciones | Gestión de incidentes; centro de servicios | Patrones de enjambre y de escalada; equipos multifuncionales | Mensual |

Todas estas métricas se miden por servicio, elemento del catálogo o flujo, nunca por persona. Las medidas de tiempo deben mostrarse como la mediana más un percentil alto, como explica la introducción del tema sobre alfabetización estadística (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

## Recomendaciones

### Define el éxito desde el lado del usuario

**1. Escribe qué significa «obtuve lo que necesitaba» para cada vía de autoservicio.** Para un restablecimiento de contraseña es un restablecimiento completado y un inicio de sesión exitoso. Para una solicitud es el cumplimiento, no el envío. Para un artículo es un usuario que no volvió a contactar con el personal por la misma necesidad. Una definición que se detiene en «vio la página» mide tráfico.

**2. Une las sesiones de autoservicio con los contactos posteriores.** La evidencia más fuerte de fallo es un contacto atendido por el personal sobre el mismo tema poco después de una sesión. Vincula ambos por usuario y tema donde las normas de privacidad lo permitan, y donde no, usa recuentos agregados por tema y día. La unión convierte una vaga historia de satisfacción en una tasa de caída al siguiente nivel que puedes mejorar.

**3. Pregunta a los usuarios con una sola pregunta en el punto de salida.** Una pregunta como «¿Resolvió esto su problema?» da una señal directa que los registros no pueden dar. Trata las respuestas como una muestra, lee los comentarios de texto libre y compara a quienes responden con quienes no, para que los usuarios más contentos no definan el resultado (véase el tema 6.1, Métricas de satisfacción del cliente).

### Estima el desvío con honestidad

**4. Prefiere una comparación a un contador.** La estimación más limpia procede de un grupo de control, un despliegue por fases o una vista de antes y después de los contactos por 1000 usuarios activos del servicio afectado. Contar «sesiones que no se convirtieron en tickets» sobrestima el efecto, porque muchos de esos usuarios nunca tuvieron una necesidad que el personal habría visto. Indica el método y la incertidumbre junto a la cifra.

**5. Normaliza el volumen frente al uso.** Una caída del recuento de tickets puede seguir a una caída de usuarios, a un ciclo de versiones tranquilo o a un cambio estacional. Divide por usuarios activos o por transacciones antes de sacar conclusiones (véase el tema 3.2, Volumen y prioridad de incidentes). Anota el gráfico con versiones, campañas y cambios del portal.

**6. Mantén el desvío fuera de los objetivos.** Un objetivo de desvío premia ocultar la vía de contacto, enterrar el número de teléfono y cerrar pronto las sesiones de chat. Usa el desvío como estimación de aprendizaje y deja que el objetivo recaiga en resultados del usuario, como la tasa de éxito del autoservicio y el elemento sin resolver más antiguo.

### Mide la automatización como un producto, no como un proyecto

**7. Mantén una lista de candidatos y mide la cobertura frente a ella.** La cobertura de «todo el trabajo» es una mala medida, porque la mayor parte del trabajo no es automatizable. Mantén una lista escrita y corta de tipos de solicitud y de incidente que sean repetibles, bien comprendidos y frecuentes, ordénala por tiempo manual de trabajo activo y volumen y reporta la cobertura frente a esa lista. Revisa la lista cada trimestre para que el denominador sea honesto.

**8. Empareja la cobertura con la fiabilidad.** Un flujo automatizado que falla una de cada diez ejecuciones, o que produce en silencio el resultado equivocado, puede costar más que la tarea manual que sustituyó. Haz seguimiento de la tasa de fallos y retrabajo, del tiempo hasta detectar una ejecución fallida y de con qué frecuencia una persona tiene que reparar el resultado. Usa las prácticas de gestión de errores que describe la comunidad de ingeniería de fiabilidad del sitio: pasos idempotentes, alertas claras y una alternativa manual segura (véase el tema 5.5, Métricas de monitorización y calidad de las alertas).

**9. Cuenta el mantenimiento.** Las automatizaciones necesitan responsables, control de versiones, pruebas y actualizaciones cuando cambian los sistemas que las rodean. Registra el tiempo dedicado a mantener cada flujo y compáralo con el tiempo manual de trabajo activo que eliminó. Una automatización que cuesta más mantener en marcha de lo que ahorra es candidata a retirarse, lo que es un resultado normal, no un fracaso.

### Vigila el efecto de desplazamiento a la izquierda

**10. Espera que el trabajo restante sea más difícil.** Cuando los contactos rutinarios salen del centro de servicios, el tiempo medio de gestión y la resolución en el primer contacto en el nivel 1 suelen empeorar aunque el servicio sea mejor. Reporta la distribución por nivel y la mezcla de categorías junto a esas medidas y acuerda de antemano con la dirección que se espera una subida del tiempo de gestión tras un desvío exitoso (véase el tema 3.1, Métricas del centro de servicios).

**11. Cierra el bucle con el conocimiento y con la gestión de problemas.** Cada caída al siguiente nivel es evidencia de un artículo que falta o es deficiente, un formulario confuso o un defecto sin corregir. Envía los principales temas de caída a los responsables del conocimiento y, donde la causa sea un defecto, a la gestión de problemas (véase el tema 4.1, Métricas de gestión de problemas). Revisa la lista cada mes y reporta cuántos elementos se corrigieron.

**12. Comparte la capacidad que liberas.** Si la automatización y el autoservicio eliminan trabajo, decide qué compra el tiempo liberado: trabajo de mejora, correcciones proactivas o formación. Los equipos que no ven ningún beneficio de la automatización dejan de proponerla. Haz seguimiento a lo largo del tiempo de la proporción planificada de capacidad para la mejora (véase el tema 2.9, Trabajo operativo y trabajo no planificado).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tasa de éxito del autoservicio | Contar cualquier formulario completado o cualquier visita a una página como éxito; retirar la pregunta de «¿ayudó esto?» cuando bajan las puntuaciones; excluir del denominador los temas difíciles | Tasa de caída al siguiente nivel y una muestra de sesiones cerradas leída por una persona; reportar las reglas del denominador |
| Tasa estimada de desvío | Ocultar la vía de contacto; añadir pasos antes del contacto; clasificar como desvío toda reducción de tickets sea cual sea la causa | Contactos por 1000 usuarios activos, satisfacción del usuario del servicio afectado y el método escrito junto al número |
| Tasa de caída al siguiente nivel | Definir una ventana de coincidencia tan corta que los retornos quedan fuera; cerrar el contacto de seguimiento como duplicado | Tasa de contactos repetidos en todos los canales; revisión de una muestra de contactos devueltos |
| Adopción del autoservicio (proporción primero-portal) | Forzar todas las solicitudes al portal sea cual sea su encaje; reetiquetar tickets creados por teléfono como tickets del portal | Tasa de éxito del autoservicio y esfuerzo del usuario; proporción de solicitudes que no tienen una vía de portal viable |
| Cobertura de la automatización | Elegir elementos fáciles para la lista de candidatos; hacer crecer el denominador con tareas triviales; contar flujos parcialmente manuales como automatizados | Lista escrita de candidatos revisada cada trimestre; tasa de fallos y retrabajo de la automatización; tiempo manual de trabajo activo de los elementos restantes |
| Tasa de fallos y retrabajo de la automatización | Excluir del recuento las reparaciones manuales; dejar que las ejecuciones fallidas se reintenten en silencio hasta tener éxito; etiquetar los fallos como «ensayos planificados» | Registros de incidentes y de alertas vinculados a los flujos; tiempo hasta detectar una ejecución fallida; auditoría por muestreo de los resultados |
| Tiempo manual de trabajo activo por tipo de solicitud | No registrar el tiempo de los elementos que parecen manuales; asignar el tiempo a otra categoría; muestrear solo los días tranquilos | Plan de muestreo escrito y revisado; comparar con el tiempo de ciclo y la antigüedad de la cola del mismo tipo |
| Distribución por nivel (proporción de desplazamiento a la izquierda) | Elevar la proporción resuelta en el nivel 1 reclasificando escaladas, o cerrando elementos en el nivel 1 y reabriéndolos en el nivel 2 como elementos nuevos | Tasa de reaperturas y tasa de tickets vinculados; muestra de calidad de la resolución; satisfacción del cliente por nivel |

Una lectura sana muestra un éxito del autoservicio creciente junto con una tasa de caída al siguiente nivel estable o decreciente, un desvío estimado declarado con su método, una cobertura de la automatización creciente frente a una lista de candidatos revisada con fallos y retrabajo bajos, y una distribución por nivel que traslada el trabajo a una fase más temprana sin elevar las tasas de reapertura ni reducir la satisfacción. Si un número mejora mientras su barrera de protección empeora, trata la mejora como no demostrada.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Autoservicio primero | Resultados inmediatos para los usuarios, menor costo marginal, disponible a cualquier hora | Los usuarios con necesidades complejas o inusuales pueden sentirse abandonados; un contenido débil crea más contactos de los que elimina |
| Contacto atendido por el personal primero | Ayuda personal, juicio y la oportunidad de notar problemas inusuales | Más lento, costoso y dependiente de la disponibilidad del personal |
| Estimar el desvío con un grupo de control | Evidencia creíble del efecto | Requiere trabajo de diseño y tolerancia a un grupo que no recibe el cambio |
| Contar sesiones sin tickets | Barato y siempre disponible | Sobrestima el éxito; invita a la manipulación; no distingue el éxito del abandono |
| Automatización amplia | Ejecución coherente y menos trabajo repetitivo | Carga de mantenimiento, modos de fallo que escalan y habilidades que pueden debilitarse en el equipo |
| Automatización selectiva de flujos estables | Mejor retorno por el esfuerzo y menos sorpresas | Deja en su sitio algo de trabajo manual, que necesita su propia atención |

La respuesta en prosa es automatizar lo frecuente, estable y bien comprendido, y mantener a una persona disponible donde la necesidad sea poco clara o lo que está en juego sea alto. El autoservicio debe juzgarse por si se ayudó a la gente, manteniendo visible la vía atendida por el personal. Los ahorros del desplazamiento a la izquierda son reales solo cuando el resultado del usuario se mantiene, así que cuenta ambos lados.

## Preguntas para debatir con tu equipo

**1. Cuando un usuario abre el portal y se va sin plantear un ticket, ¿qué suponemos que ocurrió y cómo lo averiguaríamos?**
Pide al grupo que enumere las historias posibles: el usuario encontró la respuesta, se rindió, llamó en su lugar o preguntó a un colega. Mira qué datos las distinguirían, como un contacto posterior, una pregunta de salida o una muestra de sesiones. El facilitador debe anotar qué suposición figura actualmente en el panel y quién se apoya en ella. Cierra acordando un cambio que sustituiría una suposición por evidencia.

**2. ¿Cómo estimamos hoy el desvío y defenderíamos el método ante un socio financiero escéptico?**
Recorre el cálculo paso a paso, incluido el grupo de comparación y los ajustes por cambios de demanda. Pregunta qué más cambió durante el periodo, como versiones, caídas o cambios de personal. Anota el rango de valores plausibles además del titular. La discusión debe terminar con un enunciado sencillo del método que pueda figurar junto al número.

**3. ¿Qué automatizaciones apagaríamos mañana si supiéramos su verdadero costo?**
Enumera los flujos automatizados con sus responsables, fecha del último cambio, recuentos de ejecuciones, tasas de fallos y esfuerzo de mantenimiento. Pregunta cuáles no echaría de menos nadie y cuáles da miedo tocar. El facilitador debe tratar la retirada como un resultado legítimo. Las respuestas suelen revelar flujos sin responsable.

**4. ¿Qué le pasa a un usuario cuyo intento de autoservicio falla y cuánto tarda en llegar a una persona?**
Pide a alguien que recorra el camino como lo haría un usuario, incluido encontrar la vía de contacto. Cronométralo y anota cada paso que podría acortarse. Compara la experiencia con la intención declarada del portal. El grupo debe decidir si la ruta es tan fácil de encontrar como la de autoservicio.

**5. ¿Qué aspecto tenía hace un año la mezcla de trabajo del centro de servicios y cuál tiene ahora?**
Revisa la mezcla de categorías y la distribución por nivel a lo largo del tiempo. Hablen de por qué se movieron el tiempo de gestión o la resolución en el primer contacto y de si refleja una mezcla más difícil. Pregunta si se ha dicho a la dirección que esto es lo esperado. Acuerden cómo presentar la tendencia para que una subida del tiempo de gestión tras un desplazamiento a la izquierda exitoso no se lea como un declive.

**6. ¿Qué haríamos con la capacidad que libera la automatización y quién decide?**
Estima las horas eliminadas del trabajo manual y nombra para qué se pretendía usarlas. Pregunta si el tiempo se fue a trabajo de mejora o lo absorbió una demanda nueva. Hablen de cómo lo sabría el equipo. El facilitador debe insistir en un compromiso concreto, como una proporción de capacidad reservada para corregir los principales temas de caída al siguiente nivel.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega poseen gran parte de lo que hace que el autoservicio tenga éxito: mensajes de error claros, formularios utilizables, ayuda en el producto y la capacidad de hacer tareas sin plantear un ticket. También poseen la automatización que vive en los pipelines y en el código de infraestructura. Sus medidas útiles son el éxito del autoservicio en sus propias funciones y los pasos manuales que quedan en el trabajo de versiones y de entornos, tratados como trabajo repetitivo que eliminar (véase el tema 2.8, Métricas DORA). Deben leer los temas de caída al siguiente nivel como una lista de pendientes de producto.

### Equipos de servicio y de operaciones

Los equipos de operaciones cargan con el parque de automatización y con la alternativa atendida por el personal. Deben hacer seguimiento de la fiabilidad de la automatización, la carga de mantenimiento y el tiempo manual de trabajo activo que queda, y vigilar la distribución por nivel sin ser penalizados por el trabajo más difícil que permanece. Los agentes deben ser consultados sobre qué solicitudes son buenas candidatas a automatización, porque saben dónde está la fricción real. Reporta por flujo y tipo de solicitud, y nunca por agente.

### Liderazgo y gobernanza

Los líderes se sienten tentados de tratar el desvío como una cifra de ahorro. Una petición mejor es el resultado del usuario, el método que hay detrás de cualquier estimación y la fiabilidad de la automatización. La gobernanza debe esperar una lista de candidatos, un responsable para cada flujo automatizado y una regla de retirada. Los líderes deben proteger además la vía atendida por el personal para que no se oculte con el fin de cumplir un objetivo (véase el tema 11.3, Implantar métricas sin sembrar miedo).

### Clientes y usuarios

Los usuarios quieren seguir con su trabajo. Muchos prefieren el autoservicio cuando funciona y casi todos detestan quedar atrapados en él cuando no. Su experiencia se capta mejor con preguntas de esfuerzo y de resultado en el punto de salida y con si un intento fallido llevó rápidamente a una persona (véase el tema 6.4, Experiencia de usuarios y empleados). Los usuarios con necesidades de accesibilidad o con poca confianza son una alerta temprana de los portales que funcionan solo para el usuario medio.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un minorista en línea de tamaño medio opera un centro de servicios, un equipo de plataforma y varios equipos de producto. Los números de este ejemplo son ilustrativos.

El departamento lanza un portal rediseñado con restablecimiento guiado de contraseña, un flujo de solicitud de acceso a software y un chatbot para preguntas comunes. Tres meses después, el informe del portal muestra que el 62 por ciento de las sesiones terminan sin ticket, y un gerente propone llamar a eso «desvío» y fijar un objetivo del 70 por ciento. La responsable del centro de servicios se inquieta, porque los agentes dicen que la gente que llama afirma haber «probado primero el portal».

El equipo revisa las medidas. Definen el éxito del autoservicio como un resultado completado sin contacto atendido por el personal sobre el mismo tema en 7 días. Con esa definición, la tasa de éxito es del 48 por ciento, no del 62, y la tasa de caída al siguiente nivel del flujo de solicitud de acceso es del 31 por ciento. Al leer una muestra de 40 contactos de caída, descubren que la mayoría de los usuarios no sabían distinguir entre dos elementos parecidos del catálogo y que el chatbot respondía a una pregunta sobre una herramienta retirada.

El equipo toma tres decisiones. Primero, la medida principal pasa a ser el éxito del autoservicio, con el desvío estimado mostrado solo como una estimación trimestral basada en contactos por 1000 usuarios activos, y no se fija ningún objetivo sobre el desvío. Segundo, se fusionan los dos elementos parecidos del catálogo, se corrige el contenido del chatbot y los dos principales temas de caída pasan a la lista de pendientes de mejora con un responsable. Tercero, un proceso manual para crear entornos de prueba, que lleva a los ingenieros de plataforma una mediana de 25 minutos (ilustrativo) y ocurre unas 40 veces al mes (ilustrativo), se añade a la lista de candidatos a automatización.

El equipo de plataforma automatiza el flujo de entornos en el trimestre. Pronto aparece un riesgo de manipulación: la cifra de cobertura del flujo sube, pero la tasa de fallos y retrabajo muestra que una de cada ocho ejecuciones (ilustrativo) necesita reparación manual y que las reparaciones se registraban como «mantenimiento planificado». El equipo añade las ejecuciones reparadas al recuento de fallos, vincula las ejecuciones con el registro de incidentes y acuerda revisar el flujo cada mes. En la revisión siguiente, la tasa de éxito ha subido al 57 por ciento (ilustrativo), la tasa de caída al siguiente nivel ha bajado y el tiempo de gestión del centro de servicios ha subido ligeramente porque los contactos restantes son más difíciles. La directora de TI acuerda presentar el tiempo de gestión junto con la distribución por nivel, para no leer la subida como un declive.

## Agilidad, IA, automatización y analítica

### Agilidad

Mejora el autoservicio en pasos pequeños con la retroalimentación de los usuarios, porque el portal es un producto usado por personas reales. La precaución es que un mandato de portal primero puede elevar la adopción mientras frustra a los usuarios que necesitan a una persona.

### IA

El chat y la búsqueda con IA pueden elevar el volumen de autoservicio y el desvío estimado, pero un contacto desviado puede ser un problema sin resolver. Empareja el desvío con la tasa de éxito del autoservicio medida por una respuesta del usuario o una ventana de no retorno, y con la tasa de caída al siguiente nivel hacia una persona. La precaución es que un modelo que responde con seguridad y de forma errónea produce contactos que vuelven más tarde.

### Automatización

Mide la automatización por la cobertura, por los fallos y el retrabajo y por el tiempo manual de trabajo activo que elimina. Registra cada acción automatizada para poder auditarla y revertirla. La precaución es que las cifras de cobertura premian automatizar tareas fáciles, así que haz seguimiento también de las difíciles.

### Analítica

Muestra el éxito, la caída al siguiente nivel y el recontacto en una sola página por tipo de solicitud, con recuentos. La decisión a la que informa es qué automatizar a continuación. La precaución es que el desvío es una estimación, así que etiquétalo como tal y verifícalo con una muestra de usuarios.

## Perspectiva sectorial

**Startup.** Los fundadores suelen poder arreglar una mala vía de autoservicio hablando con el usuario. Mide el éxito con una sola pregunta de salida y unas pocas lecturas de sesiones reales, y automatiza las dos o tres tareas que más gente interrumpen. Evita construir un bot antes de que las respuestas escritas sean buenas.

**Pequeña empresa.** Una sola persona puede llevar la TI de todos, así que el autoservicio consiste sobre todo en guías breves y buenas y un formulario de solicitud compartido. La automatización de la creación de cuentas y los restablecimientos de contraseña se amortiza rápido, siempre que alguien posea cada flujo. Mantén obvia la vía atendida por el personal, porque de lo contrario el propio personal del negocio esquivará el sistema.

**Gran empresa.** La escala aumenta tanto el beneficio como la manipulación. Estandarizen las definiciones entre unidades de negocio, mantengan una lista central de candidatos y un registro de automatización y reporten por servicio y elemento del catálogo. Cuidado con comparar unidades que atienden poblaciones de usuarios muy distintas.

**Gobierno y sector público.** La accesibilidad, el acceso por idioma y la obligación de atender a quienes no pueden usar canales digitales son datos de diseño, no extras. Mantén disponibles y medidas las vías asistidas, documenta las decisiones automatizadas que afectan a las personas y espera preguntas de auditoría sobre quién posee cada flujo automatizado (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Las motivaciones son menos contactos repetitivos, resultados más rápidos para los usuarios, una ejecución más constante de las tareas rutinarias y más capacidad para el trabajo de mejora. El lado del costo incluye construir y mantener el portal y el contenido, el trabajo de integración y de datos para unir sesiones y tickets, la plataforma de automatización y el tiempo para escribir, probar y poseer cada flujo automatizado. Las muestras del tiempo del personal y una breve encuesta de salida cuestan poco y aportan la mayor parte de la evidencia que necesitas.

El retorno debe argumentarse con tus propios datos. Usa el tiempo manual de trabajo activo y el volumen para estimar el esfuerzo que elimina una automatización, resta el mantenimiento y el costo de los fallos y reporta el resultado como un rango con sus supuestos. Para el autoservicio, usa la tasa de caída al siguiente nivel y los resultados muestreados para mostrar la proporción de contactos evitados porque se ayudó a los usuarios, no simplemente se los rechazó. No importes porcentajes de desvío ni de ahorro de proveedores o encuestas; mide primero tu propia línea base. El costo total de propiedad de una automatización incluye los cambios que necesitará a medida que evolucionen los sistemas que la rodean, así que presupuéstalos.

## Antipatrones y trampas

- **Contar las sesiones sin tickets como éxito.** No puede separar la ayuda del abandono. Define el éxito por el resultado y verifícalo con la caída al siguiente nivel y la retroalimentación de salida.
- **Objetivos sobre el desvío.** Premian ocultar la vía de contacto. Usa el desvío como estimación y fija los objetivos sobre los resultados del usuario.
- **Esconder el teléfono o el chat.** Los usuarios que no pueden llegar a una persona elevan su esfuerzo y pierden la confianza. Mantén visible la vía atendida por el personal y mide cuánto se tarda en llegar a ella.
- **Automatizar antes de entender el proceso.** El flujo codifica la confusión a gran velocidad. Documenta y simplifica primero el runbook y automatiza después la versión estable.
- **Automatización sin responsables.** Los flujos sin dueño se degradan en silencio y fallan en malos momentos. Da a cada flujo un responsable, una prueba, un monitor y una regla de retirada.
- **Ignorar el costo del fallo.** Una cifra de cobertura alta con retrabajo sin medir es un pasivo oculto. Reporta la tasa de fallos y retrabajo junto con la cobertura.
- **Leer una subida del tiempo de gestión como un declive.** Tras un desplazamiento a la izquierda exitoso el trabajo restante es más difícil. Muestra la distribución por nivel y la mezcla de categorías junto a las medidas de tiempo.
- **Clasificar a los agentes por contactos desviados.** Produce el empujar a los usuarios lejos y estropea los datos. Reporta solo por servicio y flujo.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Éxito del autoservicio y desvío | Se reportan visitas al portal y recuentos de tickets; sin definición de resultado | Éxito definido para algunas vías; desvío citado sin método | Una definición escrita de éxito; caída al siguiente nivel medida; desvío etiquetado como estimación | Éxito y caída al siguiente nivel con tendencias y retroalimentación de salida; desvío estimado por comparación | Resultados compartidos con equipos de producto y proveedores; los temas de caída impulsan correcciones financiadas |
| Cobertura y fiabilidad de la automatización | Automatización ad hoc; sin lista de candidatos | Algunos flujos automatizados por equipos individuales; fallos gestionados de manera informal | Lista de candidatos, responsables y medidas de fallo definidos para cada flujo automatizado | Cobertura, tasa de fallos y esfuerzo de mantenimiento revisados y financiados con una cadencia | Automatización coordinada entre equipos y proveedores; flujos retirados y revisados de forma rutinaria |
| Efecto de desplazamiento a la izquierda y uso | Volumen reportado sin contexto | Distribución por nivel seguida por unos pocos equipos | Distribución por nivel y mezcla de categorías reportadas junto al tiempo de gestión | Capacidad liberada planificada y con seguimiento; la dirección lee correctamente los efectos de la mezcla | La capacidad y el aprendizaje revierten en los servicios y en el diseño del catálogo en toda la organización |

## Lista de verificación

- [ ] El éxito del autoservicio se define por el resultado, con inicio, fin y exclusiones escritos.
- [ ] La tasa de caída al siguiente nivel se mide para las principales vías de autoservicio.
- [ ] Toda cifra de desvío indica su método y se etiqueta como estimación.
- [ ] No se fija ningún objetivo sobre el desvío.
- [ ] Existe una pregunta de salida de una pregunta, o una retroalimentación equivalente, para las vías clave.
- [ ] Existe una lista escrita de candidatos a automatización y se revisa cada trimestre.
- [ ] Cada flujo automatizado tiene un responsable, un monitor y una medida de fallos y retrabajo.
- [ ] El tiempo manual de trabajo activo se muestrea para los principales tipos de solicitud.
- [ ] La distribución por nivel se muestra junto al tiempo de gestión y la resolución en el primer contacto.
- [ ] La vía atendida por el personal es visible y se comprueba su tiempo de acceso.
- [ ] Los principales temas de caída al siguiente nivel se revisan cada mes y se encaminan a los responsables.
- [ ] Ninguna métrica de este tema se reporta ni se fija como objetivo por agente.

## Prompts de IA

**Comprueba cómo estimamos el desvío.**

```text
We run [type of service] for [number] active users. We report deflection as
[describe current calculation], using data from [tools]. Changes in the period:
[releases, campaigns, outages, staffing changes]. Review the method and explain
where it may overstate or understate the effect. Suggest a better comparison,
such as a holdout or contacts per 1,000 active users, using only the data I
describe. Do not invent benchmark values or targets. List your assumptions and
the data you would need to firm up the estimate.
```

**Analiza los temas de caída al siguiente nivel a partir de una muestra.**

```text
Below are [number] staffed contacts from [service] that followed a self-service
attempt on the same topic, with fields [list fields] and the user's description.
Group them by likely cause (content gap, confusing form, defect, missing
access, user preference) and report patterns, not individuals. Suggest which
cause groups to hand to knowledge owners, product teams, or problem management.
Do not guess beyond the text provided. List your assumptions and what you could
not judge.

[paste contacts with personal data removed]
```

**Ordena los candidatos a automatización.**

```text
Here is a list of request and incident types for [team]: [type, monthly
volume, median manual minutes, variability, risk if wrong]. Propose a ranking
for automation candidates and explain the reasoning for each, including the
upkeep burden and the failure impact. Flag items that should stay manual.
Use only the numbers I provided and do not invent savings figures. List your
assumptions and the questions I should answer before committing.
```

**Diseña las barreras de protección de un flujo automatizado.**

```text
We are automating [flow name] for [service]. Current manual process: [steps].
Tooling: [automation platform]. Propose the metrics to track (coverage, failure
and rework, time to detect a failed run, upkeep effort), a way each could be
gamed, and a guardrail for each. Include a safe manual fallback and a
retirement criterion. Do not invent thresholds or benchmarks. List your
assumptions and anything you need to know about our environment.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema relacionado y la barrera de protección de una métrica de autoservicio o de automatización que planeas introducir.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen cada métrica emparejada con un vector de manipulación y una barrera de protección.

## Ideas clave

- El éxito del autoservicio es un resultado del usuario, así que defínelo desde el lado del usuario y verifícalo con la caída al siguiente nivel y la retroalimentación de salida.
- El desvío es una estimación, así que indica el método y mantenlo fuera de los objetivos.
- La cobertura de la automatización significa poco sin fiabilidad, mantenimiento y una lista de candidatos revisada.
- El desplazamiento a la izquierda eleva la dificultad del trabajo restante, así que lee el tiempo de gestión con la distribución por nivel y la mezcla de categorías.
- Mide flujos, servicios y elementos del catálogo, nunca agentes, y mantén visible la vía atendida por el personal.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016 (chapter on eliminating toil).
2. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Request Management*, 2020.
6. Wikipedia, [Self-service software](https://en.wikipedia.org/wiki/Self-service_software).
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
