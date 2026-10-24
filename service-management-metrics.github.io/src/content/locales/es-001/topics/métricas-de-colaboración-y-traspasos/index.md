# Métricas de colaboración y traspasos

**El trabajo se ralentiza y la calidad baja allí donde cambia de manos, así que mide los traspasos, la espera entre ellos y la dependencia de personas concretas, y usa los números para reunir a las personas adecuadas en lugar de contar quién habla con quién.**

## Visión general y motivación

Los principios del Manifiesto Ágil dicen que los responsables de negocio y los desarrolladores deben trabajar juntos a diario durante todo el proyecto. La observación de fondo es antigua y sólida: la mayor parte del retraso en una organización de servicios no procede de que la gente trabaje despacio. Procede de que el trabajo espera entre personas. Una solicitud pasa del centro de servicios a un equipo de segundo nivel, de ahí a un equipo de aplicaciones y a un administrador de bases de datos, y en cada paso entra en una cola, pierde contexto y corre el riesgo de que la devuelvan. Las personas implicadas pueden ser rápidas cada una. El sistema es lento.

La gestión de servicios de TI (ITSM), tal como la codifica ITIL, ha organizado desde hace tiempo el soporte en niveles y equipos, con la escalada como mecanismo para trasladar un problema a alguien que pueda resolverlo. Esa estructura tiene beneficios: especialización, propiedad clara y acceso controlado. Crea además traspasos, y los traspasos tienen un costo. La práctica ágil y DevOps responde construyendo equipos multifuncionales que llevan más trabajo de extremo a extremo, y fomentando la colaboración en tiempo real. Las dos tradiciones llegan a conclusiones parecidas: menos traspasos, esperas más cortas entre ellos y personas que pueden resolver el problema trabajando en él juntas.

Varias ideas ayudan con la medición.

- **Traspasos y colas.** Cada vez que el trabajo pasa de un equipo a otro, suele esperar en una cola. El tiempo de espera suele ser mucho mayor que el tiempo de trabajo. Por eso la eficiencia del flujo, introducida antes, suele ser baja (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo). Un [cuello de botella](https://en.wikipedia.org/wiki/Bottleneck_(production)) es un punto de capacidad limitada en un proceso y determina el caudal del conjunto.
- **La estructura da forma a la comunicación.** La [ley de Conway](https://en.wikipedia.org/wiki/Conway%27s_law) establece que las organizaciones diseñan sistemas que reflejan sus propias estructuras de comunicación. Lo inverso es también práctico: si quieres un sistema con menos dependencias, organiza los equipos para reducir las dependencias entre ellos. Las fronteras de los equipos crean traspasos, y los traspasos dan forma a la arquitectura.
- **Dependencias.** Una [dependencia](https://en.wikipedia.org/wiki/Dependency_(project_management)) es una relación en que un trabajo no puede avanzar hasta que termina otro. Las dependencias entre equipos son una fuente importante de retraso, y pueden cartografiarse, contarse y reducirse.
- **Los costos de coordinación crecen con las personas.** La [ley de Brooks](https://en.wikipedia.org/wiki/Brooks%27s_law), de los ensayos de Frederick Brooks sobre proyectos de software, observa que añadir personas a un proyecto retrasado puede retrasarlo más, en parte por la sobrecarga adicional de comunicación. Más gente en una conversación no es automáticamente mejor.
- **Dependencia de individuos.** El [factor autobús](https://en.wikipedia.org/wiki/Bus_factor) (bus factor) es el número de personas que tendrían que no estar disponibles para detener un proyecto, y suele usarse para señalar un riesgo cuando el conocimiento está en una sola cabeza. Es una propiedad de la distribución del conocimiento, no una calificación de ninguna persona.

Las medidas de colaboración tienen un lado oscuro. Contar mensajes, reuniones o vínculos de red como medida de colaboración es fácil y tentador, y se desliza enseguida hacia la monitorización de las comunicaciones de las personas. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica al grupo y a la privacidad: cuando la «colaboración» se convierte en un objetivo, la gente produce actividad visible, y cuando se convierte en vigilancia, deja de hablar abiertamente (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Por eso las medidas de aquí miran los elementos de trabajo, los traspasos y las dependencias, y los patrones a nivel de equipo. No leen mensajes ni clasifican a individuos.

Este tema se conecta con las medidas de flujo de la Parte 2, las medidas de incidentes y solicitudes de la Parte 3 y los traspasos con proveedores de la parte anterior (véase el tema 8.4, Métricas de proveedores y contratos).

## Principios clave

- **Mide el trabajo, no las conversaciones.** Los traspasos, las esperas y las dependencias son propiedades de los elementos de trabajo y de los equipos.
- **Menos traspasos valen más que traspasos más rápidos.** El mejor traspaso es el que no ocurre.
- **Reúne a las personas.** La colaboración en tiempo real suele eliminar toda una cadena de esperas.
- **Haz visibles las dependencias y redúcelas.** Cartografíalas, cuéntalas y cambia las fronteras de los equipos o la arquitectura donde más duelen.
- **Extiende el conocimiento deliberadamente.** Los puntos únicos de conocimiento son riesgos, y compartir es una actividad de diseño.
- **Protege la concentración.** La colaboración que llena cada hora de reuniones destruye el tiempo para hacer el trabajo.
- **Implica de forma continua a las partes interesadas.** Las preguntas respondidas en horas sirven mejor que las respuestas reunidas en reuniones semanales.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Recuento de traspasos | Número de veces que un elemento de trabajo cambia de equipo propietario antes de completarse | mediana y percentil 85 de las transferencias de equipo a equipo por elemento completado, por tipo de elemento | transferencias por elemento | Historial de asignaciones de la herramienta ITSM o del gestor, agregado por equipo | Gestión de incidentes; gestión de solicitudes de servicio; habilitación de cambios | Equipos multifuncionales que llevan el trabajo de extremo a extremo | Mensual |
| Proporción de espera tras un traspaso | Proporción del tiempo transcurrido de un elemento que se pasa esperando tras un traspaso antes de que se reanude el trabajo | tiempo entre el traspaso y la primera acción del equipo receptor / tiempo total transcurrido, mediana entre elementos | porcentaje | Marcas de tiempo de asignación y de actividad | Gestión de incidentes; gestión de solicitudes de servicio | Eficiencia del flujo; tiempo en cola | Mensual |
| Tasa de reasignaciones | Proporción de elementos pasados entre equipos más de dos veces o devueltos a un equipo anterior | elementos reasignados más de dos veces o devueltos / elementos completados | porcentaje | Historial de asignaciones | Gestión de incidentes; gestión de problemas | Retrabajo y trabajo que rebota | Mensual |
| Retraso por dependencias | Tiempo que los elementos pasan bloqueados esperando a otro equipo | mediana y percentil 85 de los días en estado de bloqueado por otro equipo, con la dependencia nombrada | días | Estado de bloqueo del gestor y campo de dependencia | Habilitación de cambios; gestión de versiones y despliegues | Antigüedad de los elementos de trabajo bloqueados | Mensual |
| Tasa de resolución colaborativa | Proporción de incidentes resueltos por personas de varios equipos trabajando juntas en tiempo real sin escalada secuencial | incidentes con una colaboración en tiempo real registrada (por ejemplo un canal o una llamada compartidos) que se resolvieron sin más traspasos / incidentes de prioridad elegible | porcentaje | Registros de incidentes con etiqueta de colaboración | Gestión de incidentes; gestión de incidentes graves | Colaboración en enjambre (swarming) sobre los problemas | Mensual |
| Cobertura de conocimiento | Proporción de componentes críticos con al menos un número declarado de miembros del equipo capaces de operarlos y cambiarlos | componentes críticos con al menos el número objetivo de personas capaces de operarlos y cambiarlos / componentes críticos | porcentaje | Mapa de habilidades y de propiedad mantenido por el equipo | Gestión del conocimiento; gestión de la continuidad del servicio | Propiedad compartida y propiedad colectiva del código | Trimestral |
| Tiempo de respuesta de las partes interesadas | Tiempo desde una pregunta de un equipo a una parte interesada hasta una respuesta utilizable | mediana y percentil 85 de las horas desde que se registra la pregunta hasta que se registra la respuesta | horas | Registro de preguntas o campo del gestor para las preguntas abiertas | Gestión de niveles de servicio; gestión de las relaciones con el negocio | Implicación continua de las partes interesadas | Mensual |

Agrega a nivel de equipo, de cola o de servicio, y no reportes nunca por individuo. El recuento de traspasos excluye las asignaciones automáticas que no cambian el equipo propietario. La proporción de espera empieza cuando el elemento se asigna al equipo receptor y termina en su primera acción registrada. La cobertura de conocimiento usa el propio juicio del equipo sobre quién puede operar un componente, revisado con el equipo, y no clasifica nunca a individuos. Los datos de colaboración proceden de las etiquetas y los registros de los elementos, no de leer mensajes.

## Recomendaciones

### Cartografía los traspasos

**1. Dibuja el camino de un elemento típico.** Elige un tipo habitual de solicitud o de incidente y rastrea su camino desde el primer contacto hasta la resolución: cada equipo, cada cola, cada espera. Usa el historial del gestor para ejemplos reales, no el diagrama oficial del proceso. El mapa muestra dónde espera el trabajo y dónde rebota. Compártelo con los equipos implicados y pídeles que identifiquen el desperdicio que ven.

**2. Mide los traspasos y las esperas a partir del historial de los elementos de trabajo.** Usa las marcas de tiempo de asignación y de actividad para calcular el recuento de traspasos, la proporción de espera y la tasa de reasignaciones de cada tipo de elemento. Mira la distribución: la mayoría de los elementos puede pasar una vez, mientras una larga cola rebota muchas veces. La cola es donde se encuentran los mayores retrasos y la mayor frustración.

**3. Lee los datos con las personas que hacen el trabajo.** Una tasa alta de reasignaciones puede reflejar propiedad poco clara, información que falta o una clasificación legítima. Pregunta a los equipos antes de concluir. Saben por qué rebotan los elementos y qué lo evitaría.

### Reduce los traspasos y la espera

**4. Traslada la capacidad al trabajo.** Donde muchos elementos van a un segundo equipo para una acción sencilla, pregunta si el primer equipo podría recibir el conocimiento, el acceso o la automatización para hacerla. El autoservicio y los runbooks pueden eliminar traspasos enteros (véase el tema 3.7, Métricas de autoservicio y automatización). Cuida que trasladar el trabajo no sobrecargue sin más al primer equipo.

**5. Usa la colaboración en lugar de la escalada secuencial.** Para los incidentes complejos o urgentes, reúne a las personas pertinentes en tiempo real, con una persona que coordine, en lugar de pasar el ticket por niveles. Esta práctica, llamada a menudo colaboración en enjambre (swarming), elimina las esperas y la pérdida de contexto que crea la escalada por niveles. Haz seguimiento de la tasa de resolución colaborativa y mira si mejoran los resultados y la satisfacción (véase el tema 3.4, Métricas de incidentes graves).

**6. Aclara la propiedad en las fronteras.** Para cada servicio y componente, declara quién lo posee, cómo contactar con él y qué necesita en un traspaso. Una breve plantilla de la información exigida, acordada con el equipo receptor, reduce las devoluciones por datos que faltan. Revisa los casos de reasignación para encontrar brechas de propiedad.

**7. Reduce las dependencias donde más duelen.** Cartografía las dependencias entre equipos, cuenta con qué frecuencia causa retraso cada una y ataca las peores. Las opciones incluyen cambiar la arquitectura, dar a un equipo la capacidad que sigue esperando o reorganizar los equipos en torno a servicios. Los [equipos multifuncionales](https://en.wikipedia.org/wiki/Cross-functional_team) que contienen las habilidades necesarias para entregar un servicio de principio a fin minimizan las dependencias y llevan la colaboración continua a la estructura. La ley de Conway sugiere que la estructura y el diseño deben cambiarse juntos.

### Extiende el conocimiento y la implicación

**8. Haz visible la cobertura de conocimiento y mejórala.** Mantén un mapa sencillo de los componentes críticos y de las personas capaces de operar y cambiar cada uno. Busca componentes que conoce una sola persona y planifica el trabajo en parejas, la documentación y la rotación para extender el conocimiento. Trata el resultado como un riesgo del sistema. El fin es la resiliencia y un ritmo sostenible para las personas que más saben, ya que una persona que es la única experta no puede tomarse vacaciones.

**9. Mantén informadas de forma continua a las partes interesadas.** Acuerda cómo se les harán llegar las preguntas y con qué rapidez deben llegar las respuestas. Un equipo que espera una semana una decisión sobre un detalle está esperando a la parte interesada, y el costo es real. Registra las preguntas y las respuestas, mide el tiempo de respuesta y úsalo en las conversaciones con las partes interesadas sobre su implicación.

**10. Protege el tiempo para el trabajo concentrado.** La colaboración debe tener un propósito. Revisa las reuniones que llenan el calendario y pregunta de cada una qué decisión respalda. Reduce el número de personas en las conversaciones que no las necesitan, conforme a la ley de Brooks. Empareja esto con las medidas de concentración del tema anterior sobre la salud del equipo (véase el tema 9.1, Salud del equipo y experiencia de desarrollo).

### Mantenlo honesto

**11. No midas el volumen de comunicación.** Contar mensajes, reuniones o vínculos de red dice poco sobre si la gente trabaja bien junta, e invita a monitorizar a individuos. Si tu equipo decide usar el análisis de redes sociales para entender cómo fluye la información, hazlo con consentimiento, a nivel de grupo y para el propio aprendizaje del equipo, y nunca para valorar a individuos.

**12. Revisa las medidas de traspasos con los equipos y los proveedores.** Comparte los patrones entre los equipos y proveedores implicados y acuerda una o dos mejoras conjuntas. Haz seguimiento de si bajan los recuentos de traspasos y las esperas. Para las fronteras con proveedores, incluye las medidas en las revisiones conjuntas (véase el tema 8.4, Métricas de proveedores y contratos).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Recuento de traspasos | Mantener los elementos asignados a un equipo mientras otros hacen el trabajo; reasignar a una cola compartida para evitar el recuento | Comprobar la actividad real por equipo; contar los traspasos por actividad, no solo por asignación |
| Proporción de espera tras un traspaso | Registrar una primera acción que es solo un acuse de recibo; asignar tarde al equipo adecuado | Definir la «primera acción» como un paso sustantivo; comparar con la satisfacción y el tiempo de resolución |
| Tasa de reasignaciones | Negarse a reasignar incluso cuando está mal; cerrar y reabrir elementos bajo otro equipo | Calidad de la resolución y tasa de reapertura; muestrear los elementos que rebotan |
| Retraso por dependencias | No registrar el estado de bloqueo; nombrar la dependencia equivocada | Comparar con el tiempo de ciclo y la antigüedad de los elementos; revisar con los equipos el campo de dependencia |
| Tasa de resolución colaborativa | Etiquetar todos los incidentes como colaborativos; crear canales compartidos sin trabajo real | Comprobar que la llamada o el canal incluyó a las personas que resolvieron; tiempo de resolución y resultados |
| Cobertura de conocimiento | Enumerar personas que podrían en teoría hacer el trabajo; inflar el mapa | Evidencia de trabajo en parejas o simulacros; preguntar quién realizó realmente el último cambio |
| Tiempo de respuesta de las partes interesadas | Registrar tarde las preguntas; marcar una respuesta como recibida cuando no es utilizable | La parte interesada confirma que la respuesta es utilizable; muestrear las preguntas |

Una lectura sana son menos traspasos para los elementos comunes, esperas más cortas en las fronteras que quedan, menos elementos que rebotan, dependencias que se reducen, más incidentes resueltos por personas que trabajan juntas, componentes críticos conocidos por varias personas y partes interesadas que responden en horas.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Soporte por niveles con escalada | Especialización, control del acceso | Traspasos, espera, pérdida de contexto |
| Equipos multifuncionales | Menos traspasos, propiedad compartida | Necesita habilidades amplias; puede duplicar especialistas |
| Resolución colaborativa | Más rápida, mejor aprendizaje | Reúne a varias personas a la vez; necesita coordinación |
| Escalada secuencial | Uso eficiente de los especialistas | Más lenta para los problemas complejos |
| Equipos especialistas centralizados | Profundidad de conocimiento, normas coherentes | Cuellos de botella, colas |
| Especialistas integrados | Acceso rápido | Aislamiento; normas desiguales |
| Cultura de muchas reuniones | Conciencia compartida | Devora la concentración; frena el trabajo |
| Comunicación escrita asíncrona | Preserva la concentración; registra decisiones | Más lenta para asuntos urgentes o ambiguos |

La respuesta en prosa es mantener a los especialistas donde importa la profundidad, reunir a las personas en tiempo real para los problemas complejos o urgentes, reducir los traspasos mediante la capacidad y la propiedad clara, y equilibrar las reuniones con una concentración protegida.

## Preguntas para debatir con tu equipo

**1. Rastreen el último incidente o solicitud que rebotó entre equipos. ¿Dónde esperó y por qué?**
Usen el historial del elemento. Marquen cada traspaso y cada espera. El facilitador debe buscar información que falta, propiedad poco clara y colas que nadie vigila. Acuerden un cambio que habría detenido el rebote.

**2. ¿Por qué equipo esperamos más a menudo y qué necesitan de nosotros para ser más rápidos?**
Enumeren las dependencias y los retrasos que causan. Inviten al otro equipo a la conversación o preparen preguntas para él. Acuerden un cambio en la plantilla de traspaso o en el acuerdo de trabajo.

**3. ¿Qué saben hacer solo uno o dos de nosotros y qué ocurre cuando están ausentes?**
Nombren los componentes o tareas. Pregunten qué plan extendería el conocimiento: trabajo en parejas, documentación, rotación. El facilitador debe tener cuidado de tratarlo como un riesgo del sistema y una cuestión de carga de trabajo para los expertos.

**4. ¿Cuándo funcionó mejor resolver un problema juntos en tiempo real que pasarlo a otros?**
Recuerden un ejemplo. ¿Qué lo hizo funcionar: las personas adecuadas, un coordinador, una vista compartida? Hablen de cuándo usar este enfoque y cómo facilitarlo, como un canal permanente y reglas sobre quién se incorpora.

**5. ¿Cuánto esperamos las respuestas de nuestras partes interesadas y qué cuesta?**
Miren las preguntas abiertas y sus antigüedades. Hablen de qué frena las respuestas: disponibilidad, preguntas poco claras o autoridad poco clara. Acuerden una expectativa con las partes interesadas y una forma de hacerle seguimiento.

**6. ¿Cuáles de nuestras reuniones podrían sustituirse por una nota escrita o una decisión?**
Enumeren las reuniones regulares y pregunten de cada una qué decisión respalda y quién necesita estar. Cancelen o acorten una. Acuerden proteger un bloque de tiempo sin reuniones.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega tienen muchas de las dependencias y sienten la espera. Deben cartografiar sus dependencias, pedir las capacidades que siguen esperando, compartir conocimiento para evitar puntos únicos y mantener cerca a las partes interesadas. Una composición multifuncional suele eliminar los mayores retrasos.

### Equipos de servicio y de operaciones

Los equipos de operaciones y de soporte están en el centro de los traspasos: reciben, encaminan y resuelven. Deben mantener clara la información de propiedad, usar la colaboración en tiempo real para los problemas difíciles y registrar con exactitud los traspasos. Saben qué fronteras causan más dolor y pueden decir qué información evitaría las devoluciones.

### Liderazgo y gobernanza

Los líderes dan forma a la estructura que crea los traspasos. Deben mirar los datos de traspasos y de dependencias al diseñar los equipos y la financiación, apoyar los equipos multifuncionales donde ayuden y evitar las medidas del volumen de comunicación. La gobernanza debe tratar los retrasos repetidos en una frontera como una cuestión estructural que corregir.

### Clientes y usuarios

Los usuarios sienten los traspasos como que los pasan de uno a otro, tener que repetirse y esperar. Debe decírseles quién posee su problema y mantenerlos informados. Su experiencia de rebotar es una medida directa de lo bien que funciona la colaboración, y su opinión debe leerse junto a los números (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de gestión de servicios

El grupo de TI de un minorista nacional opera un centro de servicios, un equipo de infraestructura, un equipo de plataforma de aplicaciones y varios equipos de producto. Los usuarios reportan que las solicitudes sobre el sistema de punto de venta tardan demasiado. Los números siguientes son ilustrativos.

La responsable del servicio rastrea 60 solicitudes recientes. La solicitud mediana pasa por 3 equipos y el percentil 85 por 6. En el caso mediano, el 71 por ciento del tiempo transcurrido se pasa esperando tras un traspaso antes de que actúe el equipo receptor. El 22 por ciento de las solicitudes se reasignan más de dos veces, a menudo entre los equipos de infraestructura y de plataforma, que creen cada uno que el problema es del otro. El tiempo bloqueado esperando a otro equipo tiene una mediana de 3 días para las solicitudes que implican certificados y de 8 días en el percentil 85. El conocimiento de la renovación de certificados de la plataforma reside en una sola ingeniera, y otros dos componentes críticos los conoce una sola persona cada uno. Las partes interesadas de operaciones de tienda tardan una mediana de 26 horas en responder a las preguntas del equipo de entrega.

El grupo acuerda cuatro cambios con los equipos. Una breve tabla de propiedad declara qué equipo posee cada componente del servicio de punto de venta y qué información debe contener un traspaso. El centro de servicios recibe acceso a runbooks y automatización para las renovaciones de certificados, lo que elimina un traspaso común. Para los incidentes prioritarios, el grupo establece un canal permanente y una regla por la que el coordinador del incidente incorpora de inmediato a las personas pertinentes, en lugar de escalar por niveles. El equipo de plataforma pone a una segunda y a una tercera persona en pareja en el proceso de certificados y planifica un trabajo en parejas similar para los otros dos componentes, con tiempo protegido en el plan. El equipo de entrega y operaciones de tienda acuerdan una respuesta el mismo día a las preguntas bloqueantes, con seguimiento en un registro de preguntas.

Tres meses después, la solicitud mediana pasa por 2 equipos, la proporción de espera baja al 38 por ciento y la tasa de reasignaciones al 9 por ciento. Las solicitudes relacionadas con certificados tienen un tiempo mediano bloqueado inferior a un día. La cobertura de conocimiento de los componentes críticos sube del 52 por ciento al 81 por ciento. El tiempo mediano de respuesta de operaciones de tienda baja a 7 horas. Se pide al jefe de TI una medida de cuánto se comunican los equipos. La responsable del servicio explica que el volumen de mensajes dice poco sobre si fluye el trabajo y que hacerle seguimiento podría socavar la confianza, y ofrece en su lugar las medidas de traspasos y de espera. La decisión se anota, y la tabla de propiedad se añade a la descripción del servicio.

## Agilidad, IA, automatización y analítica

### Agilidad

Reúne pronto a las personas adecuadas y revisa los traspasos con regularidad con las partes interesadas. La precaución es que contar reuniones o mensajes mide actividad, no colaboración.

### IA

Los agentes y asistentes de IA añaden nuevos traspasos entre las personas y el software. Mide los traspasos entre la IA y los humanos, incluida la proporción que vuelve para corrección. La precaución es que un traspaso a una IA que no puede terminar crea un bucle oculto.

### Automatización

Capta automáticamente las reasignaciones y las esperas del gestor, y mide el encaminamiento automatizado por los errores de encaminamiento. La precaución es que los metadatos de comunicación sobre individuos son vigilancia, así que mantén el análisis a nivel de equipo.

### Analítica

Muestra los recuentos de traspasos y la proporción de espera por flujo de valor con recuentos. La decisión a la que informa es qué traspaso eliminar o rediseñar. La precaución es que contar traspasos sin su causa lleva a fusionar equipos por la razón equivocada.

## Perspectiva sectorial

**Startup.** Los equipos pequeños colaboran de forma natural, y los traspasos aparecen cuando surgen especialistas. Mantén multifuncionales los equipos todo el tiempo que puedas, documenta la propiedad con ligereza y vigila el conocimiento que tiene una sola persona. No importes demasiado pronto el soporte por niveles.

**Pequeña empresa.** Una o dos personas pueden cubrirlo todo, y el mayor riesgo es la dependencia de ellas. Comparte el conocimiento mediante runbooks sencillos y cubre las ausencias. Los traspasos a proveedores son la frontera principal, así que mantén claros los contactos y las vías de escalada.

**Gran empresa.** La escala crea muchos equipos, capas y proveedores, y los traspasos se multiplican. Cartografía los caminos más comunes de los elementos, diseña las fronteras de los equipos en torno a servicios y usa roles de coordinación para los incidentes entre equipos. Comparte los datos de traspasos entre equipos para que las fronteras reciban atención conjunta.

**Gobierno y sector público.** La responsabilidad suele estar repartida entre organismos, contratistas y fronteras legales, y los traspasos implican contratación y aprobación formal. Haz explícita la tabla de propiedad, usa revisiones conjuntas con los contratistas y usa canales compartidos para los incidentes que cruzan fronteras (véase el tema 8.4, Métricas de proveedores y contratos).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el esfuerzo de extraer y analizar el historial de asignaciones, el tiempo de los equipos para rastrear caminos y acordar la propiedad, el costo de la formación cruzada y cualquier herramienta para la colaboración en tiempo real. Reestructurar equipos es una decisión mayor con sus propios costos.

Los retornos son tiempos más cortos de resolución y de entrega, menos retrabajo por elementos que rebotan, menor riesgo por puntos únicos de conocimiento y un entorno de trabajo más tranquilo. Construye el caso con tus propios datos: la proporción del tiempo transcurrido que se pasa esperando, el número de elementos que rebotan, el costo de los retrasos en la peor frontera y el efecto de las ausencias de personas clave en incidentes pasados. Evita citar cifras publicadas sobre el costo de los traspasos salvo que puedas rastrear la fuente y el contexto. Cuenta el costo de los cambios y compáralo con el retraso eliminado (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Contar mensajes o reuniones.** Premia el ruido e invita a la vigilancia. Mide el flujo del trabajo.
- **Optimizar la rapidez de cada traspaso.** El fin es tener menos traspasos. Elimínalos donde puedas.
- **Culpar al equipo receptor de las esperas.** La causa suele ser la cola y la estructura. Mira el sistema.
- **Escalar por defecto.** Los niveles secuenciales añaden espera. Reúne a las personas para los problemas complejos.
- **Propiedad poco clara.** Los elementos rebotan. Publica una tabla de propiedad y mantenla al día.
- **Expertos héroe.** Los puntos únicos de conocimiento son un riesgo y una carga. Extiende el conocimiento deliberadamente.
- **Las reuniones como colaboración.** Pueden desplazar al trabajo. Revísalas frente a las decisiones.
- **Tratar la cobertura de conocimiento como una calificación individual.** Se convierte en una clasificación. Mantenla como una medida del sistema.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Visibilidad de los traspasos | Anécdotas | Caminos dibujados para unos pocos servicios | Recuento de traspasos, proporción de espera y reasignaciones medidos desde el historial | Medidas revisadas con los equipos y vinculadas a los resultados | Visión compartida entre equipos y proveedores; fronteras rediseñadas a partir de los datos |
| Reducción de los traspasos | Escalar por defecto | Algunos runbooks y plantillas | Tablas de propiedad; capacidad trasladada al primer equipo; colaboración para los problemas difíciles | Dependencias cartografiadas y reducidas; resolución colaborativa con seguimiento | Equipos organizados en torno a servicios con dependencias mínimas en toda la organización |
| Conocimiento y partes interesadas | Los expertos cargan con todo | Intercambio informal | Cobertura de conocimiento cartografiada; preguntas de las partes interesadas registradas | Cobertura y tiempos de respuesta gestionados; trabajo en parejas planificado | El conocimiento y las decisiones fluyen libremente entre equipos, proveedores y partes interesadas |

## Lista de verificación

- [ ] El camino de un elemento típico se ha rastreado a partir del historial real del gestor.
- [ ] El recuento de traspasos, la proporción de espera y la tasa de reasignaciones se miden por tipo de elemento.
- [ ] La propiedad de cada servicio y componente está publicada y al día.
- [ ] Una plantilla de traspaso declara la información que necesita el equipo receptor.
- [ ] Los incidentes complejos o urgentes usan colaboración en tiempo real con un coordinador.
- [ ] Las dependencias entre equipos están cartografiadas y se están reduciendo las peores.
- [ ] La cobertura de conocimiento de los componentes críticos está cartografiada, con un plan para extenderla.
- [ ] Las preguntas de las partes interesadas se registran y se revisan los tiempos de respuesta.
- [ ] Ninguna medida cuenta mensajes, reuniones ni comunicación individual.
- [ ] Los resultados se comparten con los equipos y proveedores implicados.

## Prompts de IA

**Analiza un camino de elementos de trabajo.**

```text
Here are anonymized assignment histories for [number] [type of item]: item,
sequence of teams, timestamps of assignment and first action: [paste]. Compute
or describe handoff counts and waits, identify the common paths and the long
tail, and suggest likely reasons for waiting and bouncing, with questions to ask
the teams. Do not infer anything about individuals. List your assumptions.
```

**Redacta una tabla de propiedad.**

```text
Draft an ownership table for the service [name] with these components and teams:
[list]. For each component include owning team, how to reach them, what a
handoff must contain, and the escalation route. Flag components where ownership
looks unclear or shared. Keep it to one page. List your assumptions and questions
for the teams.
```

**Planifica la extensión del conocimiento.**

```text
Our critical components and the number of people able to operate each are:
[paste]. Propose a plan to spread knowledge for components known to fewer than
[number] people: pairing, documentation, drills, and rotation. Suggest how to
protect the experts' workload during the plan and how to track progress
without ranking individuals. List your assumptions and risks.
```

**Diseña un enfoque de incidentes colaborativo.**

```text
Design a lightweight approach for real-time collaborative resolution of
priority incidents in [type of organization] with [teams]. Include how to open
a shared space, who coordinates, who is invited, what is recorded, and how to
avoid pulling in too many people. Include measures to tell whether it helps.
List your assumptions and cautions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de traspasos o de colaboración.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de colaboración mide el trabajo y no a los individuos, con su vector de manipulación y su barrera de protección.

## Ideas clave

- La mayor parte del retraso reside en las esperas entre traspasos, así que mide el recuento de traspasos, la proporción de espera y las reasignaciones desde el historial de los elementos de trabajo.
- Reduce los traspasos trasladando la capacidad al trabajo, aclarando la propiedad y cartografiando y recortando las dependencias.
- Reúne en tiempo real a las personas adecuadas para los problemas complejos o urgentes.
- Extiende el conocimiento de los componentes críticos y trata los puntos únicos de conocimiento como un riesgo del sistema.
- Mantén implicadas de forma continua a las partes interesadas, con respuestas rápidas a las preguntas bloqueantes.
- No midas nunca el volumen de comunicación ni califiques a individuos por su colaboración.

## Referencias y lecturas complementarias

1. Conway, M. E., "How Do Committees Invent?" *Datamation*, 14(4), 1968.
2. Skelton, M., and Pais, M., *Team Topologies: Organizing Business and Technology Teams for Fast Flow*, IT Revolution, 2019.
3. Brooks, F. P., *The Mythical Man-Month: Essays on Software Engineering*, Addison-Wesley, 1975 (anniversary edition 1995).
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
8. Wikipedia, [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law).
9. Wikipedia, [Dependency (project management)](https://en.wikipedia.org/wiki/Dependency_(project_management)).
10. Wikipedia, [Brooks's law](https://en.wikipedia.org/wiki/Brooks%27s_law).
11. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Cross-functional team](https://en.wikipedia.org/wiki/Cross-functional_team).
