# Métricas de agentes de IA y chatbots

**Un asistente conversacional ha ayudado solo cuando el problema del usuario está resuelto y sigue resuelto, así que mide la resolución verificada, los retornos, la calidad del traspaso a una persona y el daño de las acciones erróneas, y no premies nunca a un bot por mantener a la gente lejos de la ayuda.**

## Visión general y motivación

Muchas organizaciones ponen ahora un asistente conversacional entre los usuarios y el centro de servicios, y algunas dan a los agentes de IA la capacidad de actuar: restablecer una contraseña, pedir equipos, reiniciar un servicio, cambiar una configuración. Un [chatbot](https://en.wikipedia.org/wiki/Chatbot) es una aplicación de software que mantiene una conversación, y un [asistente virtual](https://en.wikipedia.org/wiki/Virtual_assistant) añade la capacidad de realizar tareas en nombre del usuario. La idea más amplia de [agente inteligente](https://en.wikipedia.org/wiki/Intelligent_agent) es un sistema que percibe un entorno y emprende acciones hacia unos objetivos. Los modelos de lenguaje modernos vuelven a estos sistemas mucho más capaces de conversación abierta que sus predecesores basados en reglas, y el primer programa conversacional, el ELIZA de Joseph Weizenbaum en los años sesenta, ya mostró con qué facilidad la gente atribuye comprensión a una máquina que se limita a producir respuestas verosímiles.

El atractivo es evidente. Los usuarios obtienen ayuda a cualquier hora sin esperar. Los equipos gastan menos tiempo en solicitudes rutinarias. El [autoservicio](https://en.wikipedia.org/wiki/Self-service) ha sido desde hace tiempo un objetivo de la ITSM, y el desplazamiento a la izquierda (shift-left), el traslado de la resolución a puntos más tempranos y baratos, es una idea central del centro de servicios (véase el tema 3.7, Métricas de autoservicio y automatización). El problema de la medición es que los números obvios premian lo que no deben. Un bot que termina una conversación cuenta como si la hubiera «contenido», tanto si el usuario recibió ayuda como si se rindió. Un bot que nunca ofrece una persona maximiza la contención. Un bot que da con aplomo una respuesta errónea produce un fallo silencioso que aparece como un contacto airado días después.

Dos clases de sistema necesitan medidas distintas.

- **Los asistentes conversacionales** responden preguntas, guían a los usuarios y reúnen información. Su riesgo son las respuestas erróneas o inútiles y atrapar a los usuarios en bucles. Las medidas se centran en la resolución, la exactitud y la vía hacia una persona.
- **Los agentes que actúan** cambian cosas en el mundo: cuentas, sistemas, tickets, dinero. Su riesgo es una acción errónea con consecuencias reales. Las medidas se centran en la corrección de las acciones, la reversibilidad, los límites de permisos y los rastros de auditoría. Estos usos exigen una gobernanza más fuerte y, a menudo, aprobación humana para los pasos con consecuencias (véase el tema 10.5, Métricas de gobernanza y riesgo de la IA).

Varias cuestiones de diseño dan forma a lo que se mide.

- **Honestidad sobre con qué habla el usuario.** Muchas jurisdicciones tienen o están desarrollando deberes de informar a las personas cuando interactúan con un sistema de IA, y a octubre de 2026 estas reglas evolucionan, así que comprueba qué se aplica en tu caso. La buena práctica es decirlo con claridad en cualquier caso.
- **Una salida.** Los usuarios deben poder llegar a una persona sin lucha. Un bot que esconde la vía hacia un humano es un [patrón oscuro](https://en.wikipedia.org/wiki/Dark_pattern), un diseño que engaña o atrapa a los usuarios para llevarlos a resultados que no elegirían.
- **Accesibilidad.** Las interfaces conversacionales deben funcionar para personas que usan tecnología de apoyo, con capacidad limitada de lenguaje o que necesitan otro idioma u otro canal.
- **Decisiones automatizadas.** Cuando la salida de un asistente afecta a los derechos o al acceso de una persona, se aplica el tema de la [toma de decisiones automatizada](https://en.wikipedia.org/wiki/Automated_decision-making) y los deberes que la rodean. Mantén esas decisiones en manos de personas, o con fuertes salvaguardias.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) es vívida aquí: si la contención o el desvío es el objetivo, la forma más barata de cumplirlo es dificultar el acceso a un humano (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Las medidas siguientes ponen primero la resolución y el resultado del usuario.

## Principios clave

- **La resolución es la medida, no la contención.** Una conversación que terminó no es un problema que se resolvió.
- **Verifica y comprueba el retorno.** Cuenta un contacto como resuelto solo cuando el usuario lo confirma o no vuelve.
- **Ofrece siempre una vía hacia una persona.** Hazla fácil, rápida y visible, y traslada el contexto.
- **Sé honesto sobre el sistema.** Di que es una IA, qué puede hacer y qué no.
- **Limita lo que pueden hacer los agentes.** Concede el mínimo privilegio, exige aprobación para las acciones con consecuencias y conserva un rastro de auditoría.
- **Mide la calidad de las respuestas mediante muestreo.** Las respuestas fluidas pueden ser erróneas.
- **Escucha a los usuarios y al personal que recoge los pedazos.** Ven lo que las métricas se pierden.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de resolución verificada | Proporción de conversaciones con el bot en que el usuario confirmó que el problema se resolvió, o no volvió en un periodo declarado | conversaciones con resolución confirmada o sin contacto de retorno en 7 días / conversaciones que empezaron con una intención resoluble | porcentaje | Registros de conversaciones, confirmación del usuario, datos de tickets y de contactos | Centro de servicios; gestión del conocimiento | Resultado funcional para el usuario | Semanal |
| Tasa de contactos de retorno | Proporción de conversaciones terminadas por el bot a las que sigue un contacto sobre el mismo problema por cualquier canal | conversaciones seguidas de un contacto relacionado en 7 días / conversaciones terminadas sin traspaso | porcentaje | Registros de conversaciones unidos a registros de tickets y de contactos | Centro de servicios; gestión de incidentes | Defectos escapados | Semanal |
| Completitud del contexto del traspaso | Proporción de traspasos a una persona en que la persona tuvo la información necesaria sin pedir al usuario que se repitiera | traspasos muestreados que el agente receptor juzga completos / traspasos muestreados | porcentaje | Traspasos muestreados, retroalimentación de los agentes | Centro de servicios; gestión del conocimiento | Colaboración fluida a través de la frontera | Mensual |
| Tiempo hasta un humano | Tiempo desde que el usuario pide una persona, o el bot decide traspasar, hasta que una persona toma el relevo | mediana y percentil 85 de minutos | minutos | Registros de conversaciones, datos de colas | Centro de servicios; gestión de incidentes | Capacidad de respuesta cuando el usuario necesita ayuda | Semanal |
| Exactitud de las respuestas | Proporción de respuestas del bot muestreadas que un revisor cualificado juzga correctas, completas y seguras | respuestas juzgadas correctas / respuestas muestreadas | porcentaje | Revisión muestreada | Gestión del conocimiento; aseguramiento de la calidad | Definición de terminado para una respuesta | Mensual |
| Satisfacción y esfuerzo con el bot | Valoración del usuario de la satisfacción y la facilidad tras una conversación, con comentarios | valoraciones favorables / valoraciones; valoración media del esfuerzo | porcentaje; puntos de escala | Breve encuesta posterior a la conversación | Centro de servicios; experiencia del cliente | Retroalimentación sobre el software funcionando | Semanal |
| Tasa de reversión de acciones del agente | Proporción de acciones realizadas por un agente de IA que hubo que corregir, deshacer o escalar | acciones revertidas o corregidas / acciones realizadas, por tipo de acción y clase de riesgo | porcentaje | Registro de auditoría de acciones, registros de cambios | Habilitación de cambios; gestión de incidentes | Retrabajo y reversión | Semanal |

Define las intenciones que gestiona el bot y excluye de la contención las que siempre debería traspasar. La resolución verificada cuenta una conversación solo si el problema estaba dentro del alcance y el usuario o bien lo confirmó o bien no mostró contacto de retorno. El tiempo hasta un humano empieza en la petición del usuario, no al final de un menú. La exactitud de las respuestas la juzga, frente a la base de conocimiento y la política, una persona que no construyó el bot. La reversión de acciones del agente se divide por tipo de acción y clase de riesgo, y cualquier acción dañina se reporta aparte como incidente.

## Recomendaciones

### Define el éxito como resolución

**1. Define las intenciones y el resultado que quieres.** Enumera los problemas que debe gestionar el asistente, como restablecer contraseñas, estado de accesos y preguntas de cómo hacer algo, y el resultado de cada uno: respondido, hecho o traspasado. Decide qué intenciones deben ir siempre a una persona: quejas, cualquier cosa que implique angustia, seguridad, derechos legales o dinero. Un bot que intenta gestionarlo todo falla gravemente en los bordes.

**2. Mide la resolución verificada y los retornos.** Pregunta a los usuarios al final si su problema está resuelto, y busca además contactos relacionados después. Ninguna de las dos basta sola: los usuarios que se rinden no contestan, y algunos que recibieron ayuda llaman igualmente. Juntas aproximan la resolución verdadera. Trata la tasa de contactos de retorno como la barrera de protección clave de cualquier cifra de contención (véase el tema 3.1, Métricas del centro de servicios).

**3. Evita la contención como objetivo.** Reporta la contención solo como cifra descriptiva y siempre junto a la resolución verificada, los retornos y la satisfacción. Una contención que sube con retornos que suben significa que el bot está rechazando a la gente. No fijes un objetivo de contención ni vincules a él el rendimiento de nadie.

### Haz fácil y buena la vía hacia una persona

**4. Deja que los usuarios lleguen a una persona en cualquier momento.** Ofrece una forma clara y sencilla de pedir un humano, y respétala. Mide el tiempo hasta un humano y la proporción de conversaciones en que los usuarios lo pidieron más de una vez. Prueba la vía tú mismo con regularidad. Donde no haya una persona disponible, di cuándo la habrá y ofrece una devolución de llamada.

**5. Traspasa con el contexto.** Cuando el bot pasa una conversación a una persona, incluye el resumen, lo que se intentó, las palabras del usuario y los datos pertinentes de la cuenta para que el usuario no se repita. Pide a los agentes receptores que valoren si el traspaso fue completo y muestrea los resultados. Los malos traspasos hacen que los usuarios confíen menos tanto en el bot como en el servicio (véase el tema 9.3, Métricas de colaboración y traspasos).

**6. Diseña para todos los usuarios.** Prueba el asistente con usuarios que emplean tecnología de apoyo, que escriben en otros idiomas, que tienen prisa o están angustiados y que no se sienten cómodos con la tecnología. Ofrece otros canales. Mide la resolución verificada y la satisfacción por grupo de usuarios donde sea seguro y lícito hacerlo. Los promedios esconden a aquellos a quienes el bot falla más.

### Comprueba la calidad de lo que dice y hace

**7. Muestrea las respuestas para ver su exactitud y su seguridad.** Cada mes, extrae una muestra aleatoria de conversaciones y haz que una persona cualificada juzgue las respuestas: correctas, completas, seguras y honestas sobre la incertidumbre. Registra los errores por tipo: desactualizados, inventados, contrarios a la política o malentendidos. Lleva los errores a la base de conocimiento y a la configuración. Añade pruebas dirigidas para los temas sensibles y para los intentos de empujar al asistente fuera de su alcance.

**8. Mantén actualizado el conocimiento.** Un asistente es tan bueno como el contenido y las herramientas en que se apoya. Vincula los errores de respuesta con artículos de conocimiento y mide la frescura del conocimiento que usa (véase el tema 3.6, Métricas de gestión del conocimiento). Donde el sistema use recuperación desde una base de conocimiento, incluye una comprobación de que cita sus fuentes y de que las fuentes son correctas.

**9. Sé honesto con los usuarios.** Declara al principio que hablan con una IA y qué puede y qué no puede hacer. No le des un nombre ni unos modales humanos que sugieran lo contrario. Donde no esté segura, debe decirlo y ofrecer una persona. Comprueba la ley aplicable sobre la divulgación.

### Gobierna los agentes que actúan

**10. Clasifica las acciones por riesgo y ajusta los permisos en consecuencia.** Para cada acción que puede realizar un agente, define su clase de riesgo: informativa, reversible y de bajo impacto, o con consecuencias. Concede el mínimo privilegio necesario. Exige aprobación humana para las acciones con consecuencias. Conserva un rastro de auditoría de cada acción con el motivo, el usuario y el resultado. Estos controles se vinculan con las medidas de cambio y de seguridad de partes anteriores (véase el tema 8.1, Métricas de incidentes de seguridad y vulnerabilidades, y el tema 8.2, Métricas de riesgos y controles).

**11. Mide la corrección y la reversibilidad de las acciones.** Haz seguimiento de la tasa de reversión por tipo de acción y revisa toda acción dañina como un incidente, sin culpas. Prueba los agentes en un entorno seguro antes de concederles acceso y vuelve a probarlos cuando cambie el modelo o las herramientas. Una nueva versión del modelo puede cambiar el comportamiento, así que trátala como un cambio que necesita control (véase el tema 4.3, Métricas de habilitación de cambios).

**12. Escucha a las personas que recogen los pedazos.** El personal del centro de servicios ve las consecuencias de los fallos del bot: usuarios airados, contactos repetidos y líos que limpiar. Pregúntales con regularidad qué hace mal el bot y qué lo vuelve más difícil. Su retroalimentación y los comentarios de los usuarios son una evidencia que ninguna métrica capta del todo, y debe dar forma a la siguiente ronda de cambios.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tasa de resolución verificada | Contar cualquier final de conversación como resuelto; hacer preguntas de confirmación sugestivas | Definir la confirmación de forma neutra; tasa de contactos de retorno; muestrear conversaciones |
| Tasa de contactos de retorno | Medir solo por un canal; ventanas cortas | Unir todos los canales; usar una ventana más larga como comprobación; muestrear los retornos |
| Completitud del contexto del traspaso | Pasar una transcripción larga en lugar de un resumen; muestrear traspasos fáciles | Valoración del agente receptor; muestra aleatoria; tiempo de resolución tras el traspaso |
| Tiempo hasta un humano | Empezar el reloj después de los menús; contar el acuse de una cola como toma del relevo | El reloj empieza en la petición; tomar el relevo significa que una persona está activa en la conversación |
| Exactitud de las respuestas | Muestrear conversaciones fáciles; revisores indulgentes | Muestra aleatoria por revisores independientes; casos de prueba adversarios |
| Satisfacción y esfuerzo con el bot | Encuestar solo las conversaciones completadas; poner la encuesta donde solo llegan los usuarios contentos | Encuestar también las conversaciones abandonadas; tasa y composición de las respuestas; leer los comentarios |
| Tasa de reversión de acciones del agente | No registrar las reversiones; reclasificar las correcciones como trabajo nuevo | Registro de auditoría a prueba de manipulaciones; vincular las reversiones con las acciones; revisión de incidentes |

Una lectura sana es una alta resolución verificada con pocos retornos, vías fáciles y rápidas hacia una persona con traspasos completos, respuestas exactas en la revisión muestreada, usuarios satisfechos en todos los grupos y agentes cuyas acciones rara vez necesitan revertirse y nunca causan daño sin que se vea.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Bot basado en reglas | Predecible, fácil de probar | Estrecho; frágil; frustrante fuera de los guiones |
| Asistente con modelo de lenguaje | Flexible, fluido | Puede equivocarse con aplomo; más difícil de probar |
| Recuperación desde conocimiento aprobado | Respuestas fundamentadas, más fáciles de corregir | Depende de la calidad del contenido |
| Generación abierta | Cobertura amplia | Mayor riesgo de invención |
| Aprobación humana de las acciones | Seguridad | Más lenta; fatiga del revisor |
| Acciones autónomas | Velocidad | Mayor radio de impacto cuando se equivoca |
| Alcance estricto con traspaso temprano | Seguro | Menor contención |
| Alcance amplio | Mayor contención | Más errores en los bordes |

La respuesta en prosa es empezar con intenciones estrechas y bien comprendidas, fundamentar las respuestas en conocimiento aprobado, facilitar la ayuda humana y ampliar el alcance y la autonomía solo en la medida en que lo justifiquen las medidas.

## Preguntas para debatir con tu equipo

**1. Si un usuario quisiera una persona ahora mismo, ¿cuántos pasos llevaría y lo hemos probado nosotros mismos?**
Prueben juntos la vía. Cuenten los pasos y la espera. El facilitador debe anotar cada barrera. Acuerden cambios para que la vía sea corta y midan el tiempo hasta un humano.

**2. ¿Qué proporción de las conversaciones que terminó nuestro bot resolvió realmente el problema?**
Comprueben los retornos y las confirmaciones de una muestra. Comparen con la cifra de contención. Hablen de la diferencia. Decidan qué cifra deben ver los líderes.

**3. ¿Qué hace mal nuestro bot y quién se entera?**
Pregunten al centro de servicios. Revisen conversaciones muestreadas. Busquen patrones: artículos desactualizados, preguntas ambiguas, temas sensibles. Acuerden una vía de los errores a las correcciones, con un responsable.

**4. ¿Qué acciones puede realizar el agente por sí solo y cuáles necesitan una persona?**
Enumeren las acciones con sus clases de riesgo y permisos. Pregunten cuál sería el peor fallo realista de cada una. Acuerden las reglas de aprobación y el rastro de auditoría, y quién revisa los casos dañinos.

**5. ¿A quién está fallando el bot en silencio?**
Piensen en los usuarios con prisa, angustiados, con necesidades de accesibilidad o con lenguaje limitado. Miren la resolución y la satisfacción por grupo, donde sea seguro. Acuerden una prueba con esos usuarios.

**6. ¿Qué nos haría apagar el bot o reducir su alcance?**
Definan la evidencia: retornos por encima de un nivel, acciones dañinas, exactitud por debajo de un estándar. Decidan quién puede decidir. Tener de antemano una regla de parada facilita actuar.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos que construyen el asistente son responsables de su calidad. Deben definir las intenciones, fundamentar las respuestas en conocimiento aprobado, probar con casos adversarios, publicar los cambios bajo control y leer los fallos. Deben oponerse a los objetivos de contención que premian atrapar a los usuarios.

### Equipos de servicio y de operaciones

El personal del centro de servicios trabaja con el asistente y hereda sus fallos. Debe valorar los traspasos, señalar las respuestas erróneas, mantener actualizado el conocimiento y tomar el relevo con rapidez cuando se le pida. Son los mejores jueces de si el asistente ayuda a los usuarios, y su carga de trabajo y su estrés forman parte del cuadro.

### Liderazgo y gobernanza

Los líderes patrocinan el asistente y quieren ahorros. Deben pedir la resolución verificada, los retornos y la satisfacción junto a la contención, exigir una regla de parada, financiar la vía humana y revisar las clases de riesgo de los agentes. La gobernanza debe comprobar la divulgación, la accesibilidad y los deberes legales.

### Clientes y usuarios

Los usuarios quieren ayuda con poco esfuerzo y sin trucos. Deben saber que hablan con una IA, poder llegar fácilmente a una persona y confiar en que el sistema no actuará sin buenas razones. Su experiencia, sobre todo la del fallo, es la evidencia primaria de si el asistente merece la pena.

## En la práctica: un ejemplo de gestión de servicios

Una universidad nacional opera un centro de servicios para estudiantes y personal que gestiona unos 30 000 contactos al mes. Lanza un chatbot para solicitudes comunes, y el panel del proveedor reporta una tasa de contención del 74 por ciento. Los números siguientes son ilustrativos.

La jefa de servicios estudiantiles comprueba. Entre las conversaciones terminadas por el bot el último mes, al 29 por ciento le siguió un contacto relacionado por correo o teléfono en siete días. La resolución verificada, usando la confirmación del usuario y la ausencia de retorno, es del 49 por ciento para las intenciones dentro del alcance. El tiempo mediano para llegar a una persona tras pedirla es de 6 minutos, con un percentil 85 de 22, en parte porque la vía exige tres pasos de menú. Una muestra de 100 conversaciones revisadas por dos asesores con experiencia encuentra 88 respuestas correctas y 12 defectuosas: 7 desactualizadas, 3 con detalles inventados sobre un plazo y 2 que gestionaron mal casos sensibles que implicaban a un estudiante en dificultades. Los agentes receptores valoran como completos el 54 por ciento de los traspasos. La satisfacción con el bot es menor entre los estudiantes que usan lectores de pantalla y entre quienes escriben en idiomas distintos del inglés. El equipo del centro de servicios reporta muchos contactos que empiezan con «el chatbot no pudo ayudarme».

La jefa de servicios estudiantiles hace cambios con el equipo. Las intenciones sensibles, como el bienestar, las quejas y las disputas sobre tasas, se encaminan directamente a una persona, y el bot lo dice. Una opción de «hablar con una persona» aparece en cada pantalla, y se hace seguimiento del tiempo hasta un humano, con un objetivo de responder en pocos minutos durante las horas con personal. Los traspasos incluyen un resumen automático y las propias palabras del usuario. Los responsables de la base de conocimiento corrigen los artículos desactualizados, y una revisión mensual de muestras los alimenta. El asistente se limita a responder a partir de contenido aprobado y se le exige que diga cuando no sabe. Un segundo piloto permite que un agente restablezca contraseñas tras la verificación de identidad, con cada acción registrada y reversible dentro de un límite de tiempo, y con seguimiento de una tasa de reversión. El panel sustituye la contención por la resolución verificada, la tasa de contactos de retorno, la exactitud, el tiempo hasta un humano y la satisfacción por grupo.

Tres meses después, la resolución verificada llega al 66 por ciento para las intenciones dentro del alcance, la tasa de contactos de retorno baja al 14 por ciento, el tiempo mediano hasta un humano baja a 2 minutos, la proporción de traspasos completos sube al 86 por ciento y la exactitud de las respuestas muestreadas sube al 95 por ciento, sin casos sensibles mal gestionados en la muestra. La tasa de reversión de acciones del agente en el piloto de contraseñas es del 1,2 por ciento. La oficina de la rectora pide un objetivo de contención del 85 por ciento. La jefa de servicios estudiantiles explica que un objetivo de contención más alto premiaría esconder la vía hacia una persona, y propone la resolución verificada y los retornos como medidas, con una revisión de qué ampliar a continuación. La decisión se anota.

## Agilidad, IA, automatización y analítica

### Agilidad

Mejora los asistentes en pasos pequeños con retroalimentación de los usuarios y de las personas que toman el relevo, y revisa los fallos con regularidad con las partes interesadas. La precaución es que premiar la contención enseña al bot a mantener a la gente lejos de la ayuda.

### IA

Un asistente conversacional ha ayudado solo cuando el problema está resuelto y sigue resuelto, así que mide la resolución verificada, los retornos, la calidad del traspaso y la reversión de las acciones del agente. Define el papel del humano: quién aprueba las acciones, cuándo debe ceder el control el bot y cómo lo anula una persona. La precaución es que una conversación agradable puede aun así fracasar en la tarea.

### Automatización

Registra cada conversación y cada acción del agente, con permisos y una forma de revertir, y mide la automatización por las acciones erróneas. La precaución es que un agente con permisos amplios puede causar daño a velocidad, así que limita el alcance y revisa los registros.

### Analítica

Reporta la resolución verificada por confirmación del usuario o por una ventana sin retorno, con recuentos, y lee una muestra de conversaciones. La decisión a la que informa es dónde es seguro ampliar el asistente. La precaución es que las puntuaciones de satisfacción en las conversaciones con el bot se sesgan hacia los usuarios que terminaron.

## Perspectiva sectorial

**Startup.** Un asistente puede cubrir el soporte a bajo costo, y una mala respuesta puede costar un cliente. Mantén estrecho el alcance, fundamenta las respuestas en tu documentación, haz obvia la opción humana y lee cada escalada. Ten cuidado con dejar que un agente actúe sobre cuentas o pagos.

**Pequeña empresa.** Un asistente de uso general en un sitio web puede gestionar las preguntas comunes. Pruébalo como lo haría un cliente, asegúrate de que un número de teléfono o un correo sea fácil de encontrar y revisa las conversaciones cada semana. Comprueba qué hace el proveedor con los datos.

**Gran empresa.** La escala ofrece ahorros y riesgo. Ejecuta un proceso de gobernanza para las clases de riesgo, las aprobaciones y la auditoría, mide por intención y por grupo de usuarios y asegura que haya una persona accesible en cada canal. Coordina entre soporte, seguridad, asuntos jurídicos y accesibilidad.

**Gobierno y sector público.** La ciudadanía puede no tener otro proveedor, y los deberes de accesibilidad, acceso lingüístico y trato justo se aplican con fuerza. Mantén accesible a una persona, evita las decisiones automatizadas sobre derechos sin salvaguardias, publica cómo se usa el asistente y comprueba los deberes de divulgación y de derecho administrativo (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son las licencias o los cargos por uso, la integración, la preparación del contenido, el muestreo y la revisión continuos, el mantenimiento de la base de conocimiento, las pruebas y la gobernanza. Una buena vía humana también cuesta dinero, porque debe dotarse de personal.

Los retornos potenciales son esperas más cortas para los problemas sencillos, alivio de los contactos repetitivos y cobertura fuera de horario. El lado del riesgo incluye los retornos, la confianza perdida, el daño de respuestas o acciones erróneas y la exposición legal. Construye el caso con tus propios números: la resolución verificada y los retornos, el costo por contacto resuelto incluidos los traspasos, el tiempo del personal dedicado a arreglar los fallos del bot y la satisfacción por grupo. Evita usar como estimación las afirmaciones de contención o desvío de un proveedor. Cuenta el costo de la vía humana y de la gobernanza (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **La contención como objetivo.** Premia mantener a la gente lejos de la ayuda. Reporta la resolución verificada y los retornos.
- **Una vía oculta o lenta hacia una persona.** Es un patrón oscuro, y los usuarios lo notan. Hazla corta y pruébala.
- **Traspasar sin contexto.** Los usuarios se repiten y la confianza cae. Pasa un resumen.
- **Dejar que el bot gestione los casos sensibles.** El bienestar, las quejas y los derechos necesitan personas. Encamínalos directamente.
- **Acciones autónomas sin auditoría ni aprobación.** Un error puede escalar. Clasifica, limita y registra.
- **Medir solo lo que muestra el panel del proveedor.** Halaga. Une tus propios datos.
- **Ignorar los grupos a los que el bot falla.** Los promedios los esconden. Prueba y segmenta donde sea seguro.
- **Sin regla de parada.** Un bot que falla sigue en pie. Define la evidencia que lo reduciría o lo apagaría.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Resultados | Se reporta la contención | Se encuesta la satisfacción | Resolución verificada y retornos con seguimiento por intención | Segmentado por grupo de usuarios; reglas de parada definidas; exactitud muestreada cada mes | Asistente, personal y conocimiento mejorados juntos con evidencia compartida |
| Vía hacia las personas | Difícil de encontrar | Opción disponible | Vía corta; tiempo hasta un humano con seguimiento; traspasos con contexto | Calidad del traspaso valorada y mejorada; dotación de personal ajustada a la demanda | Bot y personal colaboran con fluidez entre canales, respetando la elección del usuario |
| Agentes que actúan | Automatización ad hoc | Acciones con guion | Acciones clasificadas por riesgo, mínimo privilegio, aprobación y auditoría | Tasa de reversión y daños revisados; cambios controlados | Comportamiento de los agentes gobernado en toda la organización y los proveedores con garantía independiente |

## Lista de verificación

- [ ] Las intenciones del asistente están enumeradas, con las que deben ir siempre a una persona.
- [ ] La resolución verificada y la tasa de contactos de retorno se reportan junto a la contención.
- [ ] Existe una vía visible y corta hacia una persona en cada pantalla, y se mide el tiempo hasta un humano.
- [ ] Los traspasos incluyen un resumen y las palabras del usuario, y los valoran los agentes receptores.
- [ ] Las respuestas se muestrean cada mes por revisores cualificados e independientes.
- [ ] Se informa a los usuarios de que hablan con una IA y de lo que puede hacer.
- [ ] Las pruebas de accesibilidad y de otros idiomas se hacen con usuarios reales.
- [ ] Las acciones del agente están clasificadas por riesgo, con permisos de mínimo privilegio y registro de auditoría.
- [ ] Las tasas de reversión y las acciones dañinas se revisan sin culpas.
- [ ] Una regla de parada define cuándo reducir o apagar el asistente.

## Prompts de IA

**Define intenciones y reglas de traspaso.**

```text
We run a service desk for [type of organization]. The most common contact reasons
are: [list with volumes]. Propose which intents a chatbot should handle fully,
which it should only help with and then hand off, and which must always go to a
person, with reasons. Include handoff information to pass along. Do not invent
statistics. List your assumptions and risks for sensitive cases.
```

**Comprueba una afirmación de contención.**

```text
Our chatbot dashboard shows containment of [value]. We also have: return contacts
within seven days [value], survey results [values], and a sample of
conversations [describe]. Explain what verified resolution might be, how to
compute it from our data, what the gap between containment and resolution
suggests, and what to check next. Do not claim causes the data cannot support.
List your assumptions.
```

**Diseña una clasificación de riesgo para las acciones del agente.**

```text
An AI agent might take these actions: [list]. For each, propose a risk class
(informational, reversible low impact, consequential), the permission it should
need, whether a person must approve, what to log, how to reverse it, and a
test to run before enabling it. Do not assume specific tools. List your
assumptions and decisions needing security and legal input.
```

**Planifica una revisión de las conversaciones del bot.**

```text
Design a monthly review of bot conversations: sample size and selection
(including some abandoned ones and some from user groups at risk of poor
service), reviewer qualifications, a short rubric for correctness, safety, and
honesty about uncertainty, how to record errors and fix their sources, and how to
report without identifying users. List your assumptions and privacy cautions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de chatbot o de agente de IA.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de chatbot mide la resolución y lleva su vector de manipulación y su barrera de protección.

## Ideas clave

- Mide la resolución verificada y los contactos de retorno, y trata la contención solo como una cifra descriptiva.
- Haz corta y visible la vía hacia una persona y traspasa con el contexto.
- Muestrea las respuestas para ver su exactitud y su seguridad, y mantén actualizado el conocimiento que usa el asistente.
- Sé honesto en que los usuarios hablan con una IA y prueba con los usuarios con más probabilidades de que se les falle.
- Para los agentes que actúan, clasifica el riesgo, limita los permisos, exige aprobación para las acciones con consecuencias y conserva un rastro de auditoría.
- Define de antemano una regla de parada.

## Referencias y lecturas complementarias

1. Weizenbaum, J., "ELIZA: A computer program for the study of natural language communication between man and machine," *Communications of the ACM*, 9(1), 1966.
2. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
3. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
4. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Virtual assistant](https://en.wikipedia.org/wiki/Virtual_assistant).
9. Wikipedia, [Intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent).
10. Wikipedia, [Self-service](https://en.wikipedia.org/wiki/Self-service).
11. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
12. Wikipedia, [Automated decision-making](https://en.wikipedia.org/wiki/Automated_decision-making).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
